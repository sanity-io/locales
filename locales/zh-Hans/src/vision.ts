import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': '复制到剪贴板',
  /** Label for deleting a query */
  'action.delete': '删除',
  /** Label for editing a query's title */
  'action.edit-title': '编辑标题',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': '停止',
  /** Label for setting up a listener */
  'action.listen-execute': '监听',
  /** Label for query loading table */
  'action.load-queries': '加载查询',
  /** Label for loading a query */
  'action.load-query': '加载查询',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': '取消',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': '获取',
  /** Label for saving a query */
  'action.save-personal-copy': '保存个人副本',
  /** Label for saving a personal query */
  'action.save-personal-query': '另存为个人',
  /** Label for saving a query */
  'action.save-query': '保存查询',
  /** Label for saving a shared query */
  'action.save-shared-query': '另存为共享',
  /** Label for unsharing a query */
  'action.unshare': '取消共享',
  /** Label for updating a query */
  'action.update': '更新',

  /** Label for actions user can take */
  'label.actions': '操作',
  /** Label for all saved queries */
  'label.all': '全部',
  /** Label for saved queries that have been edited */
  'label.edited': '已编辑',
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': '新',
  /** Label for query type "personal" */
  'label.personal': '个人',
  /** Label for savedAt date */
  'label.saved-at': '保存于',
  /** Saved queries */
  'label.saved-queries': '已保存的查询',
  /** Search queries */
  'label.search-queries': '搜索查询',
  /** Share query */
  'label.share': '分享',
  /** Label for query type "shared" */
  'label.shared': '已共享',
  /** Label for saved query type "team" */
  'label.team': '团队',
  /** Label for untitled query fallback */
  'label.untitled-query': '未命名',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': '参数不是有效的JSON',
  /** Label for "Params" (parameters) editor/input */
  'params.label': '参数',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': '列',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': '行',
  /** Extra explanation when a 400 is returned for a release perspective on an old API version */
  'query.error.unsupported-release-perspective':
    '此 API 版本不支持复杂的视角（perspectives）。请使用 {{apiVersion}} 或更高版本。',
  /** Extra explanation when a 400 is returned for a variant on an incompatible API version */
  'query.error.unsupported-variant':
    '此 API 版本不支持内容变体（variants）。请使用实验性 API 版本（{{apiVersion}}）。',
  /** Label for "Query" editor/input */
  'query.label': '查询',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': '查询 URL',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': '端到端',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': '执行',
  /** Label for "Result" explorer/view */
  'result.label': '结果',
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable': '结果无法编码为CSV',
  /** Label for "Save result as" result action */
  'result.save-result-as-format': '将结果保存为 <SaveResultButtons/>',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': '不适用',

  /** Query already saved error label */
  'save-query.already-saved': '查询已保存',
  /** Save error label */
  'save-query.error': '保存查询时出错',
  /** Save personal copy success label */
  'save-query.personal-copy-success': '个人副本已保存',
  /** Warning displayed before sharing a query */
  'save-query.share-warning': '共享查询作为文档存储在您的 dataset 中，并计入您的文档配额。',
  /** Save shared query success label */
  'save-query.shared-success': '共享查询已保存',
  /** Save success label */
  'save-query.success': '查询已保存',
  /** Save unshared query success label */
  'save-query.unshared-success': '查询已移至个人',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'API 版本',
  /** Tooltip shown when the API version selector is locked to vX because a variant is selected */
  'settings.api-version-locked-for-variant': '选择变体后,API 版本需要为 vX。',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': '自定义 API 版本',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': '数据集',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': '无效的 API 版本',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': '其他',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': '视角',
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    '“<code>previewDrafts</code>”视角已重命名为“<code>drafts</code>”，现已弃用。此更改适用于所有支持视角的版本（>= v2021-03-25）。',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': '阅读文档',
  /** Option for selecting default perspective */
  'settings.perspectives.default': '无视角（API默认）',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description': '视角允许您的查询针对数据集中不同的“视图”运行',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    '默认视角将在即将到来的API版本中从“<code>raw</code>”更改为“<code>published</code>”。请咨询文档以获取更多详情。',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': '固定发布',
  /** Label for the scheduled drafts perspective */
  'settings.perspectives.scheduled-drafts': '预定草稿',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': '视角',

  /** Tooltip line of every control that calls Sanity Agent Actions, which bills AI credits */
  'vista.agent-actions.credits': '每次请求消耗一个 AI 积分',
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vista.ai-credits.balance': '本月还剩 {{balance}}/{{quota}} AI 积分。',
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vista.ai-credits.deficit': '本月已使用 {{used}} AI 积分，超出包含的 {{quota}} {{deficit}}。',
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vista.ai-credits.limit.description':
    '您的组织本月已使用 {{used}}/{{quota}} AI 积分，因此 Sanity Agent Actions 已暂停，将在下个月或支出限额提高后恢复。',
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vista.ai-credits.limit.description-unknown':
    '您的组织已达到 AI 积分支出限额，因此 Sanity Agent Actions 已暂停，将在下个月或限额提高后恢复。',
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vista.ai-credits.limit.learn-more': '了解 AI 积分的工作原理',
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vista.ai-credits.limit.manage': '管理 AI 积分',
  /** Title of the card shown where the organization is out of AI credits */
  'vista.ai-credits.limit.title': 'AI 积分已用尽',
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vista.ai-credits.usage': 'AI 使用情况',
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vista.ai-credits.used': '本月已使用 {{used}} AI 积分。',
  /** Button in the request column's action bar naming the API version requests go out with */
  'vista.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vista.api-version.button-cdn': 'API CDN {{version}}',
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vista.api-version.button-invalid': '未完成的 API 版本',
  /** Tooltip of the API version button */
  'vista.api-version.tooltip': '查询在 API 版本 {{version}} 上运行。点击可在“选项”中更改。',
  /** Tooltip of the API version button while queries go through the API CDN */
  'vista.api-version.tooltip-cdn':
    '查询通过 API CDN 以 API 版本 {{version}} 运行。点击可在“选项”中更改。',
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vista.api-version.tooltip-cdn-blocked':
    '查询在 API 版本 {{version}} 上运行，而非 API CDN：它不支持 {{perspective}} 视角。点击可在“选项”中更改。',
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vista.api-version.tooltip-invalid':
    '“选项”中的 API 版本尚未填写完整，因此在填写完整之前无法获取任何数据。',
  /** Tooltip of the API version button while a selected variant forces the experimental API */
  'vista.api-version.tooltip-locked': '查询在 API 版本 {{version}} 上运行，这是所选变体所需要的。',
  /** Label of the document after the change in the Delta panel */
  'vista.delta.after': '之后',
  /** Label of the document before the change in the Delta panel */
  'vista.delta.before': '之前',
  /** What the Delta panel does */
  'vista.delta.description':
    '以增量模式运行查询，就像基于 GROQ 的 webhook、监听器和 Sanity Functions 所做的那样：before() 和 after() 分别表示变更前后的文档，@ 表示变更后的文档，delta::changedAny() 用于比较它们。它在浏览器中通过 groq-js 运行。一侧为空表示没有文档：此变更会创建或删除它。',
  /** Label of the document ID field in the Delta panel */
  'vista.delta.document-id': '文档 ID',
  /** Shown when there is a query but no documents to compare */
  'vista.delta.empty': '加载文档的历史记录，或在“之前”和“之后”中写入文档。',
  /** Shown when the query fails in delta mode */
  'vista.delta.failed': '无法以增量模式运行查询：{{message}}',
  /** Shown when the After document is not valid JSON */
  'vista.delta.invalid-after': '“之后”不是有效的 JSON：{{message}}',
  /** Shown when the Before document is not valid JSON */
  'vista.delta.invalid-before': 'Before 不是有效的 JSON：{{message}}',
  /** Button loading the document's revisions from the History API */
  'vista.delta.load': '加载历史记录',
  /** Shown when the history could not be loaded */
  'vista.delta.load-failed': '无法加载历史记录：{{message}}',
  /** A delta filter that is true for the change */
  'vista.delta.matches': '匹配：具有此过滤条件的 webhook 或函数会针对此更改运行。',
  /** A delta filter that is false for the change */
  'vista.delta.no-match': '不匹配：具有此过滤条件的 webhook 或函数不会针对此更改运行。',
  /** Shown while the query or its params cannot be sent */
  'vista.delta.no-request': '请修正查询及其参数，以便在增量模式下运行。',
  /** Heading of the delta result */
  'vista.delta.result': '结果',
  /** The After choice for a change that deletes the document */
  'vista.delta.revision.none-after': '无：此更改将删除文档',
  /** The Before choice for a change that creates the document */
  'vista.delta.revision.none-before': '无：此更改将创建文档',
  /** A revision in the Before and After lists */
  'vista.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vista.drawer.close': '关闭面板',
  /** Explanation at the top of the Explain panel */
  'vista.explain.description':
    '查询计划是 Content Lake 运行查询的方式：读取时读取、过滤和排序什么内容，以及哪些留待后续步骤处理。“向我解释这个”功能会使用 Sanity Agent Actions 用通俗的语言描述查询及其计划，此操作会消耗一个 AI 额度。',
  /** Shown in the Explain panel while there is no valid query to explain */
  'vista.explain.empty': '编写一个查询以便对其进行解释。',
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vista.explain.explain': '向我解释这个',
  /** Shown when the explanation could not be written */
  'vista.explain.failed': '无法解释该查询：{{message}}',
  /** A count the index computes without reading the documents */
  'vista.explain.insight.aggregate': '在索引中计数，无需读取文档。',
  /** A subquery the plan runs once for all documents */
  'vista.explain.insight.batched-subquery':
    '该子查询会对所有文档只运行一次，通过一次批量获取完成，而不是对每个文档单独运行。',
  /** Part of the filter runs in memory; the expression follows */
  'vista.explain.insight.filter-in-memory':
    '部分过滤条件在读取后于内存中运行：索引放行的每个文档都会先被读取，这在大型数据集上会变慢。过滤条件中的联接（->）和函数无法使用索引。',
  /** The index sorts and limits while reading */
  'vista.explain.insight.index-sort-limit': '索引会在读取文档的同时对其进行排序和限制。',
  /** The plan slices in memory */
  'vista.explain.insight.slice-in-memory':
    '切片操作是在读取后于内存中进行的，而不是在读取时作为限制条件。',
  /** The plan sorts in memory */
  'vista.explain.insight.sort-in-memory':
    '排序是在读取所有匹配项之后于内存中进行的。请按索引可排序的属性进行排序。',
  /** Link under the plan insights to the guide on fast queries */
  'vista.explain.insights.guide': '高性能 GROQ',
  /** Heading of the plan insights in the Explain panel */
  'vista.explain.insights.title': '亮点',
  /** Button in the Explain panel fetching the query plan */
  'vista.explain.plan': '显示查询计划',
  /** Shown when the query plan could not be fetched */
  'vista.explain.plan-failed': '无法获取查询计划：{{message}}',
  /** Heading of the query plan in the Explain panel */
  'vista.explain.plan-title': '查询计划',
  /** Toast shown after a code snippet was copied */
  'vista.export-query.copied': '代码片段已复制到剪贴板',
  /** Label for the button that copies a code snippet */
  'vista.export-query.copy': '复制代码片段',
  /** Explanation at the top of the export query dialog */
  'vista.export-query.description': '使用以下代码片段之一在工作室外运行此查询。',
  /** Title of the dialog that exports the query as code snippets */
  'vista.export-query.title': '导出查询',
  /** Note about authentication in the export query dialog */
  'vista.export-query.token-note':
    '私有数据集需要 API 令牌。公共数据集可以删除 Authorization 标头。',
  /** Toast shown after the generated code was copied */
  'vista.export-types.copied': '代码已复制到剪贴板',
  /** Label for the button that copies the generated code */
  'vista.export-types.copy': '复制代码',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vista.export-types.empty': '请先获取查询结果,以便从中派生类型。',
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vista.export-types.schema-error': '架构评估失败：{{message}}',
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vista.export-types.source.result':
    '由于无法根据工作区架构评估该查询，因此从获取的结果中推断得出。',
  /** Note shown when the types were derived from the workspace schema */
  'vista.export-types.source.schema': '从工作区架构推断得出，方式与 sanity typegen 相同。',
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vista.export-types.stale-result':
    '显示的结果是针对不同的查询或参数获取的。请先获取当前查询，以便从中派生类型。',
  /** Title of the dialog exporting TypeScript types for the result */
  'vista.export-types.title-typescript': '导出 TypeScript',
  /** Title of the dialog exporting a Zod schema for the result */
  'vista.export-types.title-zod': '导出 Zod',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vista.functions.add': '添加到查询',
  /** Shown on a library function the query declares the same way */
  'vista.functions.declared': '在此查询中',
  /** Lint action on a call of a library function the query does not declare */
  'vista.functions.editor.add-from-library': '声明它',
  /** Note in a function's hover documentation: the API version it needs */
  'vista.functions.editor.api-version': '需要 API 版本 {{version}} 或更高版本',
  /** Detail of a completion for a custom function the query declares */
  'vista.functions.editor.completion-declared': '在此查询中',
  /** Detail of a completion for a library function, which declares it too */
  'vista.functions.editor.completion-library': '来自您的库',
  /** Note in the hover documentation of a custom function the query declares */
  'vista.functions.editor.declared-on': '自定义函数，声明于第 {{line}} 行',
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vista.functions.editor.delta-only':
    '仅在增量模式下有效，webhook 和 Sanity Functions 会在该模式下运行其过滤器',
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vista.functions.editor.extract': '提取为函数',
  /** Note in the hover documentation of a library function the query does not declare */
  'vista.functions.editor.in-library': '在您的函数库中，但未在此查询中声明',
  /** Link at the end of a built-in function's hover documentation */
  'vista.functions.editor.reference': 'GROQ 函数参考',
  /** Explanation under the library heading in the Functions panel */
  'vista.functions.library.description':
    '保留在此浏览器中，供项目的每个数据集使用。自动完成会提供这些函数，lint 会建议将查询调用声明为函数。',
  /** Shown in the Functions panel while the library is empty */
  'vista.functions.library.empty': '保存查询中声明的函数，以便在其他查询中使用。',
  /** Heading of the functions library in the Functions panel */
  'vista.functions.library.title': '库',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vista.functions.query.empty':
    '在查询顶部声明自定义函数，或将光标放在投影中（例如 author->{name}），然后按下编辑器上方的提取按钮（{{shortcut}}）。',
  /** Heading of the functions the query declares in the Functions panel */
  'vista.functions.query.title': '此查询中',
  /** Removes a function from the library */
  'vista.functions.remove': '从库中移除',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vista.functions.replace': '替换查询中的版本',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vista.functions.reveal': '在编辑器中显示 {{name}}',
  /** Button of a function the query declares that is not in the library yet */
  'vista.functions.save': '保存到库',
  /** Shown on a function the query declares the way the library has it */
  'vista.functions.saved': '已保存',
  /** Button of a function the query declares differently from the library's version */
  'vista.functions.update': '更新库',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vista.generate.button': '生成查询',
  /** Closes the generate query bar */
  'vista.generate.close': '关闭',
  /** Explanation under the generate query field */
  'vista.generate.description':
    'Sanity Agent Actions 会根据您的描述和文档类型编写 GROQ，Content Lake 会检查每次尝试；每次尝试都会使用一个 AI 积分。它会替换此标签页的查询并运行；在编辑器中撤销可恢复之前的查询。',
  /** Shown when no query could be generated, above the reason */
  'vista.generate.failed': '无法生成查询',
  /** Accessible label of the description field in the generate query bar */
  'vista.generate.label': '查询应获取什么内容？',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vista.generate.open-anyway': '打开上次尝试',
  /** Placeholder of the description field in the generate query bar */
  'vista.generate.placeholder': '按姓氏再按名字排序的最近 10 位作者',
  /** Shown while the first attempt at a query is written */
  'vista.generate.progress': '正在编写查询……',
  /** Shown while a rejected attempt is retried */
  'vista.generate.progress-retry': '正在修复查询（第 {{attempt}} 次尝试，共 {{max}} 次）……',
  /** Button generating the query */
  'vista.generate.submit': '生成',
  /** Badge on a history entry the API CDN answered */
  'vista.history.cdn': 'API CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vista.history.cdn-cache-hit': 'CDN 缓存命中',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vista.history.changed': '已更改',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vista.history.changes': '更改',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vista.history.changes-failed': '无法显示更改。',
  /** Button retrying to show the changes of a history entry */
  'vista.history.changes-retry': '重试',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vista.history.compared-with': '与 {{time}} 的获取进行比较',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vista.history.diff.params': '参数',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vista.history.diff.query': '查询',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vista.history.diff.query-formatting-only': '仅格式发生更改',
  /** Label of the diff of the query result in a history entry's changes */
  'vista.history.diff.result': '结果',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vista.history.diff.url': '请求 URL',
  /** Empty state of the history panel */
  'vista.history.empty': '尚未获取任何内容',
  /** Status label for a failed fetch in the history */
  'vista.history.failed': '失败',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vista.history.hide-hidden': '隐藏它们',
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vista.history.hiding': '正在隐藏 {{fields}}',
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vista.history.only-hidden-changed': '仅隐藏字段发生了更改',
  /** History reason: a tab opened with a generated query fetched it */
  'vista.history.reason.generated': '生成的查询',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vista.history.reason.link': '打开的链接',
  /** History reason: a live event matched the query's sync tags */
  'vista.history.reason.live': '实时更新',
  /** History reason: the live connection asked every client to refetch */
  'vista.history.reason.live-restart': '实时连接已重新启动',
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vista.history.reason.live-start': '实时获取已启动',
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vista.history.reason.load': '已加载查询',
  /** History reason: the fetch button was pressed */
  'vista.history.reason.manual': '获取按钮',
  /** History reason: mutations were applied from the Mutate panel */
  'vista.history.reason.mutation': '已应用更改操作',
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vista.history.reason.options': '选项已更改',
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vista.history.reason.paste': '已粘贴 URL',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vista.history.reason.resume': '自动重新获取已恢复',
  /** History reason: the keyboard shortcut was used */
  'vista.history.reason.shortcut': '键盘快捷键',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vista.history.same-result': '结果相同',
  /** Button showing the hidden fields in a history entry's changes */
  'vista.history.show-hidden': '显示它们',
  /** Next to a history entry's changes while the hidden fields are shown */
  'vista.history.showing-hidden': '正在显示 {{fields}}，默认隐藏',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vista.history.too-large': '过大，无法比较',
  /** A history entry whose result is the same as the previous result */
  'vista.history.unchanged': '无更改',
  /** Shown in the Lint panel while the query has no lint findings */
  'vista.lint.empty':
    '没有 lint 发现项。GROQ linter 在查询中发现的问题会在您输入时列在此处；选择一项即可在编辑器中选中它。',
  /** Where a lint finding sits in the query, shown under its message */
  'vista.lint.position': '第 {{line}} 行，第 {{column}} 列',
  /** Severity badge of a lint finding */
  'vista.lint.severity.error': '错误',
  /** Severity badge of a lint finding */
  'vista.lint.severity.hint': '提示',
  /** Severity badge of a lint finding */
  'vista.lint.severity.info': '信息',
  /** Severity badge of a lint finding */
  'vista.lint.severity.warning': '警告',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vista.lint.use-suggestion': '使用 {{suggestion}}',
  /** Badge shown while a tab refetches automatically */
  'vista.live.active': '实时',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vista.live.button': '实时获取',
  /** Tooltip of the Live button while automatic refetching is off */
  'vista.live.button.start': '获取，然后在结果中的文档发生更改时再次获取',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vista.live.button.stop':
    '停止在结果中的文档发生更改时获取。对于不受任何文档更改影响的结果（如 now()），“获取”仍可按需获取',
  /** Error shown when the live connection breaks */
  'vista.live.error': '实时更新已断开：{{message}}',
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vista.live.stop': '停止实时',
  /** Button in the Mutate panel adding a mutation to the list */
  'vista.mutate.add': '添加变更',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vista.mutate.add.create': '创建文档',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vista.mutate.add.delete': '删除文档',
  /** Adds a mutation deleting the documents of the shown result */
  'vista.mutate.add.delete-result': '删除结果中的文档',
  /** Adds a mutation patching a document, its ID to fill in */
  'vista.mutate.add.patch': '修补文档',
  /** Adds a mutation patching the documents of the shown result */
  'vista.mutate.add.patch-result': '修补结果中的文档',
  /** Button applying the mutations a dry run showed */
  'vista.mutate.apply': '应用到 {{dataset}}',
  /** Heading of the error shown when applying the mutations failed */
  'vista.mutate.apply-failed': '未能应用这些变更操作',
  /** Next to Apply while the mutations as they are have had no dry run */
  'vista.mutate.apply-needs-preview': '应用会发送试运行所显示的内容：请先运行一次试运行。',
  /** Option giving array items without a _key one */
  'vista.mutate.auto-keys': '为没有 _key 的数组项添加 _key',
  /** Under the option giving array items a _key */
  'vista.mutate.auto-keys.description': '工作室需要每个数组项都有一个 _key 才能对其进行编辑。',
  /** Button showing a document's changes in the dry run */
  'vista.mutate.changes': '更改',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vista.mutate.changes-failed': '无法显示更改。',
  /** Button retrying to show a document's changes */
  'vista.mutate.changes-retry': '重试',
  /** What the Mutate panel does */
  'vista.mutate.description':
    '按照 Mutations API 所接受的格式，以列表的形式编写变更操作：create、createOrReplace、createIfNotExists、delete 和 patch，可通过 ID 或 GROQ 查询指定。试运行会显示这些操作将对每个文档产生的影响，而不会实际更改任何内容；应用则会以你的账户身份，在一次事务中将它们写入数据集。',
  /** What the API says went wrong with one of the mutations */
  'vista.mutate.failure-item': '变更操作 {{index}}：{{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vista.mutate.generate.button': '生成变更操作',
  /** Explanation under the generate mutations field */
  'vista.mutate.generate.description':
    'Sanity Agent Actions 会根据你的描述、结果中的文档及其类型来编写变更操作，并通过试运行检查每次尝试；每次尝试会消耗一个 AI 额度。它们会替换此处的变更操作，撤销操作可将其恢复；在你应用之前不会写入任何内容。',
  /** Shown when no mutations could be generated, above the reason */
  'vista.mutate.generate.failed': '未能生成变更操作',
  /** Accessible label of the description field in the generate mutations bar */
  'vista.mutate.generate.label': '这些变更操作应该做什么？',
  /** Placeholder of the description field in the generate mutations bar */
  'vista.mutate.generate.placeholder': '将结果中文档的标题更改为 foobar',
  /** Shown while the first attempt at the mutations is written */
  'vista.mutate.generate.progress': '正在编写变更操作……',
  /** Shown while an attempt the dry run turned down is retried */
  'vista.mutate.generate.progress-retry': '正在修复变更操作（第 {{attempt}} 次，共 {{max}} 次）……',
  /** Under the dry run: the fields the diffs leave out */
  'vista.mutate.hiding': '与“历史记录”一样，这些更改不包括 {{fields}}。',
  /** Shown when the mutations are not valid JSON */
  'vista.mutate.invalid-json': '变更操作不是有效的 JSON：{{message}}',
  /** Shown when a mutation does not name exactly one thing to do */
  'vista.mutate.invalid-mutation':
    '变更操作 {{index}} 需要且只能包含 create、createOrReplace、createIfNotExists、delete 或 patch 中的一项。',
  /** Label of the mutations editor */
  'vista.mutate.mutations': '变更操作',
  /** The dry run touched no documents */
  'vista.mutate.no-documents': '这些变更操作未涉及任何文档。',
  /** Shown when the JSON is not a list of mutations */
  'vista.mutate.not-a-list': '请编写一个变更操作列表、单个变更操作，或包含变更操作列表的请求正文。',
  /** A document the mutations create */
  'vista.mutate.operation.create': '创建',
  /** A document the mutations delete */
  'vista.mutate.operation.delete': '删除',
  /** A document the mutations touch without changing its content */
  'vista.mutate.operation.none': '无变化',
  /** A document the mutations change */
  'vista.mutate.operation.update': '更新',
  /** Button running the mutations as a dry run */
  'vista.mutate.preview': '试运行',
  /** Heading of the error shown when the dry run failed */
  'vista.mutate.preview-failed': '试运行失败',
  /** Heading of the dry run's outcome */
  'vista.mutate.preview-heading': '试运行',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vista.mutate.stale':
    '在此次试运行之后，变更内容、数据集或选项已发生更改。请重新运行以应用它们。',
  /** How many documents the dry run changes and leaves as they are */
  'vista.mutate.summary': '已更改：{{changed}} · 未更改：{{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vista.network.cache': '缓存',
  /** The API CDN answered from its cache */
  'vista.network.cache.hit': '命中',
  /** Under the details of a CDN cache hit */
  'vista.network.cache.hit-explained':
    'CDN 使用了它缓存的、来自离你较近的位置的响应进行了回应；该查询并未到达 API。',
  /** The API CDN answered with a response this session had not seen */
  'vista.network.cache.miss': '未命中，就本次会话而言',
  /** The API answered, which caches nothing */
  'vista.network.cache.none': '无缓存，API 对每个请求都返回最新内容',
  /** Shown in the Network panel while there is no response */
  'vista.network.empty': '获取查询以查看哪个端点对其进行了响应、是否来自缓存，以及它在哪里运行。',
  /** In the Network panel: the endpoint that answered */
  'vista.network.endpoint': '响应方',
  /** The live API answered */
  'vista.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vista.network.endpoint.cdn': 'API CDN',
  /** In the Network panel: the region the query ran in */
  'vista.network.region': '查询运行于',
  /** The response did not say where the query ran */
  'vista.network.region.unknown': '未报告',
  /** In the Network panel: the round trip and the time on the server */
  'vista.network.timing': '耗时',
  /** The round trip and the server's time for the query, in milliseconds */
  'vista.network.timing.value': '往返耗时 {{e2e}} 毫秒，服务器耗时 {{server}} 毫秒',
  /** In the Network panel: the trace of the request, for Sanity support */
  'vista.network.trace': '跟踪 ID',
  /** Hint in the Network panel while queries go to the API */
  'vista.network.use-cdn-hint': '在选项中开启“使用 API CDN”以通过 CDN 发送查询。',
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vista.network.you': '你',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vista.options.dataset.follows-workspace': '跟随工作区',
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vista.options.dataset.pin': '固定数据集',
  /** Hint under the dataset field while a dataset is pinned */
  'vista.options.dataset.pinned': '已固定；工作区可能使用其他数据集',
  /** Button that makes the tab follow the workspace's dataset again */
  'vista.options.dataset.use-workspace': '使用工作区数据集',
  /** Label for the "Include content source map" switch */
  'vista.options.include-source-map': '包含内容来源映射',
  /** Description for the "Include content source map" switch */
  'vista.options.include-source-map.description':
    '在响应中添加 resultSourceMap，显示在内容来源映射选项卡中。',
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vista.options.perspective.global': '全局（{{name}}）',
  /** Label of the switch that sends queries to the API CDN */
  'vista.options.use-cdn': '使用 API CDN',
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vista.options.use-cdn.anonymous':
    '此工作室使用 cookie 为您登录，而 API CDN 永远不会收到该 cookie：它会像对待匿名访问者一样响应，显示公开数据集所展示的内容。',
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vista.options.use-cdn.blocked':
    'API CDN 不提供草稿或发布版本，因此使用 {{perspective}} 视角的查询会发送到 API。使用已发布或原始视角时，则会使用 CDN。',
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vista.options.use-cdn.blocked.title': '查询发送到 API，而非 CDN',
  /** Description of the API CDN switch */
  'vista.options.use-cdn.description':
    '将查询发送到 API CDN，类似于 @sanity/client 中的 useCdn: true，适用于已发布和原始视角：草稿和发布版本始终发送到 API。其响应会被缓存最多一分钟；网络面板会显示响应是否来自缓存。',
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vista.options.use-cdn.use-published': '使用已发布视角',
  /** Label of the variant field */
  'vista.options.variant-label': '变体',
  /** Variant option sending the navbar's variant, named */
  'vista.options.variant.global': '全局（{{name}}）',
  /** Variant option sending the navbar's variant while none is selected there */
  'vista.options.variant.global-none': '全局（未选择任何内容）',
  /** Variant option sending no variant */
  'vista.options.variant.none': '无',
  /** Accessible label for collapsing a bottom panel */
  'vista.panel.collapse': '收起面板',
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vista.panel.delta': '差异',
  /** Accessible label for expanding a bottom panel */
  'vista.panel.expand': '展开面板',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vista.panel.explain': '解释',
  /** Label of the Functions tab in the response panel */
  'vista.panel.functions': '函数',
  /** Label of the "History" tab in the response panel */
  'vista.panel.history': '历史记录',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vista.panel.lint': 'Lint',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vista.panel.mutate': '变更',
  /** Label of the Network tab in the response panel */
  'vista.panel.network': '网络',
  /** Label of the "Options" panel in the request column */
  'vista.panel.options': '选项',
  /** Label of the "Response" tab in the response panel */
  'vista.panel.response': '响应',
  /** Label of the "Content Source Map" tab in the response panel */
  'vista.panel.source-map': '内容源映射',
  /** Button adding an item to a list param in the params form */
  'vista.params-form.add-item': '添加项目',
  /** Placeholder of a params form field that takes any JSON value */
  'vista.params-form.any-placeholder': '任意 JSON 值；其他文本将作为字符串发送',
  /** Shown in the params form when the query uses no params */
  'vista.params-form.empty': '该查询未使用任何参数。查询中的每个 $name 都会在此处生成一个字段。',
  /** Shown in the params form while the params JSON cannot be parsed */
  'vista.params-form.invalid-json':
    '参数不是有效的 JSON。请在 JSON 视图中修正它们，以便在此处进行编辑。',
  /** A boolean param's value is not true or false; it is sent anyway */
  'vista.params-form.invalid.boolean': '不是 true 或 false；将作为 {{value}} 发送',
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vista.params-form.invalid.document-type': '不是此工作区中的文档类型；仍将发送',
  /** A whole number param (a slice bound) holds a fraction */
  'vista.params-form.invalid.integer': '不是整数，而切片需要整数',
  /** A list param's value is not a list; it is sent anyway */
  'vista.params-form.invalid.list': '不是列表；将作为 {{value}} 发送',
  /** A number param's value is not a number; it is sent anyway */
  'vista.params-form.invalid.number': '不是数字；将作为文本发送',
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vista.params-form.invalid.option': '不是已知值之一；仍将发送',
  /** A text param's value is not text; it is sent anyway */
  'vista.params-form.invalid.string': '不是文本；将作为 {{value}} 发送',
  /** Accessible label of an item input of a list param in the params form */
  'vista.params-form.item-label': '${{name}}，第 {{index}} 项',
  /** Placeholder of an item input of a list param in the params form */
  'vista.params-form.item-placeholder': '项目',
  /** Under a params form field whose param has no value */
  'vista.params-form.missing': '未设置：在设置值之前，查询将失败',
  /** Shown in the params form when the workspace schema could not be read */
  'vista.params-form.no-schema': '类型仅来自查询本身：无法读取工作区的架构。',
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vista.params-form.not-set': '未设置',
  /** Button setting a date and time param to the current time */
  'vista.params-form.now': '现在',
  /** Button removing a param the query does not use from the params */
  'vista.params-form.remove': '删除',
  /** Accessible label of the button removing an item from a list param */
  'vista.params-form.remove-item': '删除项目',
  /** Shown in the params form when the query does not parse */
  'vista.params-form.syntax-error': '该查询无法解析，因此其参数列出时不含类型。',
  /** Type hint of a params form field: any JSON value */
  'vista.params-form.type.any': '任意 JSON 值',
  /** Type hint of a params form field: true or false */
  'vista.params-form.type.boolean': 'true 或 false',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vista.params-form.type.datetime': '日期和时间（ISO 8601）',
  /** Type hint of a params form field: a document ID */
  'vista.params-form.type.document-id': '文档 ID',
  /** Type hint of a params form field: one of the workspace's document types */
  'vista.params-form.type.document-type': '文档类型',
  /** Type hint of a params form field: a whole number */
  'vista.params-form.type.integer': '整数',
  /** Type hint of a params form field: a list of values */
  'vista.params-form.type.list': '列表，每项均为 {{type}}',
  /** Type hint of a params form field: a number */
  'vista.params-form.type.number': '数字',
  /** Type hint of a params form field: text */
  'vista.params-form.type.string': '文本',
  /** Heading of the params the query does not use, listed in the params form */
  'vista.params-form.unused': '查询未使用',
  /** Before the expressions that use a param, in the params form */
  'vista.params-form.used-in': '用于',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vista.params.fit-height': '按内容调整大小，{{height}} 像素',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vista.params.resize': '调整参数大小：拖动或使用方向键；双击或按 Enter 重新适应内容',
  /** Tab showing the params as a form inferred from the query */
  'vista.params.view.form': '表单',
  /** Tab showing the params as JSON */
  'vista.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vista.params.view.label': '编辑参数方式',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vista.paste.parsed': '已从粘贴的 URL 加载查询',
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vista.paste.unavailable-variant':
    '粘贴的 URL 使用了“{{variant}}”变体；请在导航栏中选择它以使用该变体运行查询。',
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vista.paste.unknown-dataset':
    '粘贴的 URL 中的数据集“{{dataset}}”在此处不可用，将保留当前数据集。',
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vista.paste.unsupported-perspective': '粘贴的 URL 中的视角在此处不受支持，将保留当前视角。',
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vista.paste.variants-disabled':
    '粘贴的 URL 使用了“{{variant}}”变体；此工作区已关闭变体功能，因此查询将在不使用该变体的情况下运行。',
  /** Accessible label for the query actions menu */
  'vista.query.actions': '查询操作',
  /** Tooltip when automatic refetching is not available for the API version */
  'vista.query.auto-refetch.unsupported': '自动重新获取需要 API 版本 v2021-03-25 或更高版本。',
  /** Toast shown after the query was copied */
  'vista.query.copied': '查询已复制到剪贴板',
  /** Menu item copying the query text */
  'vista.query.copy': '复制查询',
  /** Menu item opening the export query dialog */
  'vista.query.export': '导出查询…',
  /** Menu item reformatting the query */
  'vista.query.prettify': '美化查询',
  /** Toast shown when the query could not be reformatted */
  'vista.query.prettify.failed': '无法美化查询',
  /** Menu item saving the query to the personal saved queries */
  'vista.query.save': '保存查询',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vista.query.stop': '停止',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vista.query.stop.description': '停止获取',
  /** Explanation in the settings section about the redesigned experience */
  'vista.redesign.settings.description':
    '您正在使用重新设计的 Vision 工具。切换回原版本后，下次尝试时会保留此浏览器中的标签页和设置。',
  /** Title of the settings section about the redesigned experience */
  'vista.redesign.settings.title': '重新设计的 Vision（测试版）',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vista.redesign.switch-to-classic': '切换到经典版 Vision',
  /** Toast button that switches to the redesigned tool */
  'vista.redesign.toast.accept': '立即试用',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.description':
    '查询标签页、实时重新获取、响应详情和导出。您可以随时切换回去。',
  /** Toast button that hides the invitation */
  'vista.redesign.toast.dismiss': '暂不',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.title': '试用重新设计的 Vision',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vista.redesign.try': '试用新设计',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vista.redesign.try.description':
    '切换到重新设计的 Vision（测试版）。您可以随时从其侧边栏切换回去。',
  /** Empty state of the response panel before anything was fetched */
  'vista.response.empty': '尚未获取任何内容',
  /** Label for the payload size in the response tab */
  'vista.response.payload-size': '数据大小',
  /** Label for the sync tags in the response tab */
  'vista.response.sync-tags': '同步标签',
  /** Shown when the response carried no sync tags */
  'vista.response.sync-tags.none': '响应中没有同步标签',
  /** Accessible label for the result actions menu */
  'vista.result.actions': '结果操作',
  /** Toast shown after the result was copied */
  'vista.result.copied': '结果已复制到剪贴板',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vista.result.copied-value': '已复制 {{path}}',
  /** Menu item and button copying the result as JSON */
  'vista.result.copy': '复制结果',
  /** Button next to each property in the result tree, copying its value */
  'vista.result.copy-value': '复制值',
  /** Empty state of the result view */
  'vista.result.empty': '运行查询以在此处查看结果',
  /** Button exporting the result as CSV */
  'vista.result.export-csv': '导出 CSV',
  /** Button exporting the result as JSON */
  'vista.result.export-json': '导出 JSON',
  /** Menu item opening the TypeScript export dialog */
  'vista.result.export-typescript': '导出 TypeScript…',
  /** Menu item opening the Zod export dialog */
  'vista.result.export-zod': '导出 Zod…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vista.result.graph.collapse': '隐藏其包含的内容',
  /** Button fitting the whole graph in view */
  'vista.result.graph.fit': '适应视图',
  /** Accessible label of the graph, saying how to move around in it */
  'vista.result.graph.label':
    '结果图：拖动以移动，滚动以缩放；聚焦时，方向键可移动，+ 和 - 可缩放，0 可适应视图',
  /** Ends the note on a graph that leaves part of this result out */
  'vista.result.graph.left-out-hint': '树视图和 JSON 视图显示全部内容。',
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vista.result.graph.node-limit': '仅绘制前 {{nodes}} 个对象和数组。',
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vista.result.graph.partial': '{{nodes}} 仅列出前 {{rows}} 个条目。',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vista.result.graph.partial.node': '{{name}}（{{entries}} 个条目）',
  /** Title of the graph node of the result itself */
  'vista.result.graph.root': '结果',
  /** Button zooming into the graph */
  'vista.result.graph.zoom-in': '放大',
  /** Button zooming out of the graph */
  'vista.result.graph.zoom-out': '缩小',
  /** Tab showing the result as a graph of its objects and arrays */
  'vista.result.view.graph': '图形',
  /** Tab showing the result as indented JSON text, to select and copy from */
  'vista.result.view.json': 'JSON',
  /** Accessible label of the tabs that switch how the result shows */
  'vista.result.view.label': '结果视图',
  /** Tab showing the result as a tree to browse */
  'vista.result.view.tree': '树形',
  /** Empty state of the saved queries panel */
  'vista.saved.empty': '尚无已保存的查询。使用 + 按钮保存当前查询。',
  /** Empty state of a query list when the search matches nothing */
  'vista.saved.empty-search': '没有与您的搜索匹配的查询',
  /** Menu item loading a saved query into the active tab */
  'vista.saved.load-in-current-tab': '加载到当前标签页',
  /** Menu item opening a saved query in a new tab */
  'vista.saved.open-in-new-tab': '在新标签页中打开',
  /** Menu item renaming a saved query */
  'vista.saved.rename': '重命名',
  /** Accessible label for the button saving the current query */
  'vista.saved.save-current': '保存当前查询',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vista.saved.unavailable-variant':
    '此已保存的查询使用了“{{variant}}”变体；请在导航栏中选择该变体以使用它运行查询。',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vista.saved.unknown-dataset':
    '此已保存查询的数据集“{{dataset}}”在此处不可用，将保留当前数据集。',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vista.saved.variants-disabled':
    '此已保存的查询使用了“{{variant}}”变体；此工作区已关闭变体功能，因此查询将在不使用该变体的情况下运行。',
  /** Button in the settings dialog that clears the stored state */
  'vista.settings.clear-storage': '清除存储',
  /** Confirmation button for clearing the storage */
  'vista.settings.clear-storage.confirm': '是，清除存储',
  /** Explanation of what clearing the storage does */
  'vista.settings.clear-storage.description':
    '删除您的个人已保存查询和函数库，重置此浏览器中打开的标签页和这些默认设置，并返回经典 Vision 工具。共享查询将被保留。',
  /** Toast shown when the saved queries could not be cleared */
  'vista.settings.clear-storage.error': '无法清除已保存的查询',
  /** Toast shown after the storage was cleared */
  'vista.settings.clear-storage.success': '存储已清除',
  /** Explanation at the top of the settings dialog */
  'vista.settings.description': '新标签页的默认设置。已打开的标签页保留各自的选项。',
  /** Explains the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.description':
    '每行一个字段路径。路径会匹配结果中的任意深度，因此 _rev 会隐藏其中每个文档的修订版本。每个差异对比仍可显示它们。',
  /** Button restoring the default fields left out of History diffs */
  'vista.settings.history-diff.reset': '恢复默认设置',
  /** Label of the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.title': '从历史差异对比中隐藏的字段',
  /** Title of the settings dialog */
  'vista.settings.title': '设置',
  /** Empty state of the shared queries panel */
  'vista.shared.empty': '暂无共享查询。分享已保存的查询，使其对使用此数据集的所有人可用。',
  /** Shortcut description: close dialogs and menus */
  'vista.shortcuts.close': '关闭对话框和菜单',
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vista.shortcuts.complete': '自动补全函数名称',
  /** Shortcut description: copy the query */
  'vista.shortcuts.copy-query': '复制查询',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vista.shortcuts.extract-function': '将光标处的投影提取为函数',
  /** Shortcut description: run the query */
  'vista.shortcuts.fetch': '获取查询结果',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vista.shortcuts.next-finding': '跳转到下一个检查结果',
  /** Shortcut description: reformat the query */
  'vista.shortcuts.prettify': '美化查询',
  /** Title of the keyboard shortcuts dialog */
  'vista.shortcuts.title': '键盘快捷键',
  /** Sidebar toggle: show icons only */
  'vista.sidebar.collapse': '收起侧边栏',
  /** Sidebar toggle: show labels next to the icons */
  'vista.sidebar.expand': '展开侧边栏',
  /** Accessible label for the sidebar navigation */
  'vista.sidebar.label': 'Vista 侧边栏',
  /** Sidebar item and drawer title for personal saved queries */
  'vista.sidebar.saved-queries': '已保存的查询',
  /** Sidebar item opening the settings dialog */
  'vista.sidebar.settings': '设置',
  /** Sidebar item and drawer title for shared queries */
  'vista.sidebar.shared-queries': '共享查询',
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vista.sidebar.shortcuts': '键盘快捷键',
  /** Empty state of the content source map panel */
  'vista.source-map.empty':
    '响应中没有内容来源映射。请在“选项”下开启“包含内容来源映射”，然后重新获取。',
  /** Accessible label of the divider between the result and the response details panel */
  'vista.split.bottom-panel':
    '调整响应详情面板大小：拖动或使用方向键；按 Home 和 End 可到达边界，按 Enter 可重置',
  /** Accessible label of the divider between the request and response panes */
  'vista.split.request-response':
    '调整请求和响应窗格大小：拖动或使用方向键；按 Home 和 End 可到达边界，按 Enter 可重置',
  /** Accessible label for the button closing a query tab */
  'vista.tabs.close-tab': '关闭标签页',
  /** Accessible label for the list of query tabs */
  'vista.tabs.label': '查询标签页',
  /** Accessible label for the button opening a new query tab */
  'vista.tabs.new-tab': '新建标签页',
  /** Placeholder of the input renaming a tab */
  'vista.tabs.title-placeholder': '标签页标题',
  /** Title of a tab whose query is still empty */
  'vista.tabs.untitled': '未命名查询',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vista.webmcp.check-query': '在 Vision 中检查 GROQ 查询',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vista.webmcp.describe-schema': '在 Vision 中描述工作区架构',
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vista.webmcp.explain-query': '在 Vision 中解释 GROQ 查询',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vista.webmcp.get-state': '读取已打开的 Vision 标签页',
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vista.webmcp.open-query': '在 Vision 中打开 GROQ 查询',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vista.webmcp.preview-mutations': '在 Vision 中预览变更',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vista.webmcp.run-query': '在 Vision 中运行 GROQ 查询',
})
