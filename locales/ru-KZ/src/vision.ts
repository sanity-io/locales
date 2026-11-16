import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Скопировать в буфер обмена',
  /** Label for deleting a query */
  'action.delete': 'Удалить',
  /** Label for editing a query's title */
  'action.edit-title': 'Редактировать название',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Остановить',
  /** Label for setting up a listener */
  'action.listen-execute': 'Слушать',
  /** Label for query loading table */
  'action.load-queries': 'Загрузить запросы',
  /** Label for loading a query */
  'action.load-query': 'Загрузить запрос',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Отмена',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Получить',
  /** Label for saving a query */
  'action.save-personal-copy': 'Сохранить личную копию',
  /** Label for saving a personal query */
  'action.save-personal-query': 'Сохранить как личный',
  /** Label for saving a query */
  'action.save-query': 'Сохранить запрос',
  /** Label for saving a shared query */
  'action.save-shared-query': 'Сохранить как общий',
  /** Label for unsharing a query */
  'action.unshare': 'Закрыть общий доступ',
  /** Label for updating a query */
  'action.update': 'Обновить',

  /** Label for actions user can take */
  'label.actions': 'Действия',
  /** Label for all saved queries */
  'label.all': 'Все',
  /** Label for saved queries that have been edited */
  'label.edited': 'Отредактировано',
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Новый',
  /** Label for query type "personal" */
  'label.personal': 'Личный',
  /** Label for savedAt date */
  'label.saved-at': 'Сохранено в',
  /** Saved queries */
  'label.saved-queries': 'Сохраненные запросы',
  /** Search queries */
  'label.search-queries': 'Поиск запросов',
  /** Share query */
  'label.share': 'Поделиться',
  /** Label for query type "shared" */
  'label.shared': 'Общий',
  /** Label for saved query type "team" */
  'label.team': 'Команда',
  /** Label for untitled query fallback */
  'label.untitled-query': 'Без названия',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'Параметры не являются допустимым JSON',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Параметры',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Столбец',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Строка',
  /** Extra explanation when a 400 is returned for a release perspective on an old API version */
  'query.error.unsupported-release-perspective':
    'Эта версия API не поддерживает сложные перспективы. Используйте {{apiVersion}} или более позднюю версию.',
  /** Extra explanation when a 400 is returned for a variant on an incompatible API version */
  'query.error.unsupported-variant':
    'Эта версия API не поддерживает варианты контента. Используйте экспериментальную версию API ({{apiVersion}}).',
  /** Label for "Query" editor/input */
  'query.label': 'Запрос',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'URL запроса',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'Время от начала до конца',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'Выполнение',
  /** Label for "Result" explorer/view */
  'result.label': 'Результат',
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable':
    'Результат не может быть закодирован в формате CSV',
  /** Label for "Save result as" result action */
  'result.save-result-as-format': 'Сохранить результат как <SaveResultButtons/>',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'н/д',

  /** Query already saved error label */
  'save-query.already-saved': 'Запрос уже сохранен',
  /** Save error label */
  'save-query.error': 'Ошибка при сохранении запроса',
  /** Save personal copy success label */
  'save-query.personal-copy-success': 'Личная копия сохранена',
  /** Warning displayed before sharing a query */
  'save-query.share-warning':
    'Общие запросы хранятся как документы в вашем наборе данных и учитываются в квоте документов.',
  /** Save shared query success label */
  'save-query.shared-success': 'Общий запрос сохранен',
  /** Save success label */
  'save-query.success': 'Запрос сохранен',
  /** Save unshared query success label */
  'save-query.unshared-success': 'Запрос перемещен в личные',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'Версия API',
  /** Tooltip shown when the API version selector is locked because a variant is selected */
  'settings.api-version-locked-for-variant': 'Когда выбран вариант, версия API должна быть vX.',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'Пользовательская версия API',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Набор данных',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'Недопустимая версия API',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'Другое',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Перспектива',
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    'Перспектива "<code>previewDrafts</code>" была переименована в "<code>drafts</code>" и теперь устарела. Это изменение вступает в силу для всех версий с поддержкой перспектив (>= v2021-03-25).',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Читать документацию',
  /** Option for selecting default perspective */
  'settings.perspectives.default': 'Нет перспективы (по умолчанию API)',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Перспективы позволяют выполнять запрос к разным "представлениям" содержимого вашего набора данных',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    'Перспектива по умолчанию изменится с "<code>raw</code>" на "<code>published</code>" в предстоящей версии API. Пожалуйста, смотрите документацию для получения дополнительной информации.',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': 'Закрепленный релиз',
  /** Label for the scheduled drafts perspective */
  'settings.perspectives.scheduled-drafts': 'Запланированные черновики',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Перспективы',

  /** Tooltip line of every control that calls Sanity Agent Actions, which bills AI credits */
  'vision.agent-actions.credits': undefined, // 'Uses one AI credit per request'
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vision.ai-credits.balance': undefined, // '{{balance}} of {{quota}} AI credits left this month.'
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vision.ai-credits.deficit': undefined, // '{{used}} AI credits used this month, {{deficit}} more than the {{quota}} included.'
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vision.ai-credits.limit.description': undefined, // 'Your organization has used {{used}} of its {{quota}} AI credits this month, so Sanity Agent Actions are paused until next month or until its spending limit is raised.'
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vision.ai-credits.limit.description-unknown': undefined, // 'Your organization has reached its AI credits spending limit, so Sanity Agent Actions are paused until next month or until the limit is raised.'
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vision.ai-credits.limit.learn-more': undefined, // 'How AI credits work'
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vision.ai-credits.limit.manage': undefined, // 'Manage AI credits'
  /** Title of the card shown where the organization is out of AI credits */
  'vision.ai-credits.limit.title': undefined, // 'Out of AI credits'
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vision.ai-credits.usage': undefined, // 'AI usage'
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vision.ai-credits.used': undefined, // '{{used}} AI credits used this month.'
  /** Button in the request column's action bar naming the API version requests go out with */
  'vision.api-version.button': undefined, // 'API {{version}}'
  /** The API version button while queries go through the API CDN */
  'vision.api-version.button-cdn': undefined, // 'API CDN {{version}}'
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vision.api-version.button-invalid': undefined, // 'Unfinished API version'
  /** Tooltip of the API version button */
  'vision.api-version.tooltip': undefined, // 'Queries run against API version {{version}}. Select to change it in Options.'
  /** Tooltip of the API version button while queries go through the API CDN */
  'vision.api-version.tooltip-cdn': undefined, // 'Queries run against the API CDN with API version {{version}}. Select to change it in Options.'
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vision.api-version.tooltip-cdn-blocked': undefined, // 'Queries run against the API with API version {{version}}, not the API CDN: it does not serve the {{perspective}} perspective. Select to change it in Options.'
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vision.api-version.tooltip-invalid': undefined, // 'The API version in Options is unfinished, so nothing can be fetched until it is complete.'
  /** Tooltip of the API version button while a selected variant forces the variants API version */
  'vision.api-version.tooltip-locked': undefined, // 'Queries run against API version {{version}}, which the selected variant needs.'
  /** Label of the document after the change in the Delta panel */
  'vision.delta.after': undefined, // 'After'
  /** Label of the document before the change in the Delta panel */
  'vision.delta.before': undefined, // 'Before'
  /** What the Delta panel does */
  'vision.delta.description': undefined, // 'Runs the query in delta mode, as GROQ-powered webhooks, listeners and Sanity Functions do: before() and after() are a document before and after a change, @ is the document after it, and delta::changedAny() compares them. It runs in the browser with groq-js. An empty side means no document: the change creates or deletes it.'
  /** Label of the document ID field in the Delta panel */
  'vision.delta.document-id': undefined, // 'Document ID'
  /** Shown when there is a query but no documents to compare */
  'vision.delta.empty': undefined, // 'Load a document’s history, or write the documents into Before and After.'
  /** Shown when the query fails in delta mode */
  'vision.delta.failed': undefined, // 'The query could not be run in delta mode: {{message}}'
  /** Shown when the After document is not valid JSON */
  'vision.delta.invalid-after': undefined, // 'After is not valid JSON: {{message}}'
  /** Shown when the Before document is not valid JSON */
  'vision.delta.invalid-before': undefined, // 'Before is not valid JSON: {{message}}'
  /** Button loading the document's revisions from the History API */
  'vision.delta.load': undefined, // 'Load history'
  /** Shown when the history could not be loaded */
  'vision.delta.load-failed': undefined, // 'The history could not be loaded: {{message}}'
  /** A delta filter that is true for the change */
  'vision.delta.matches': undefined, // 'Matches: a webhook or function with this filter runs for this change.'
  /** A delta filter that is false for the change */
  'vision.delta.no-match': undefined, // 'Does not match: a webhook or function with this filter does not run for this change.'
  /** Shown while the query or its params cannot be sent */
  'vision.delta.no-request': undefined, // 'Fix the query and its params to run it in delta mode.'
  /** Heading of the delta result */
  'vision.delta.result': undefined, // 'Result'
  /** The After choice for a change that deletes the document */
  'vision.delta.revision.none-after': undefined, // 'Nothing: the change deletes the document'
  /** The Before choice for a change that creates the document */
  'vision.delta.revision.none-before': undefined, // 'Nothing: the change creates the document'
  /** A revision in the Before and After lists */
  'vision.delta.revision.option': undefined, // '{{time}} · {{revision}}'
  /** Accessible label for the button that closes the sidebar drawer */
  'vision.drawer.close': undefined, // 'Close panel'
  /** Explanation at the top of the Explain panel */
  'vision.explain.description': undefined, // 'The query plan is how the Content Lake runs the query: what it reads, filters and sorts while reading, and what is left for later steps. Explain this to me has Sanity Agent Actions describe the query and its plan in plain words, which uses one AI credit.'
  /** Shown in the Explain panel while there is no valid query to explain */
  'vision.explain.empty': undefined, // 'Write a query to explain it.'
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vision.explain.explain': undefined, // 'Explain this to me'
  /** Shown when the explanation could not be written */
  'vision.explain.failed': undefined, // 'The query could not be explained: {{message}}'
  /** A count the index computes without reading the documents */
  'vision.explain.insight.aggregate': undefined, // 'Counted in the index, without reading the documents.'
  /** A subquery the plan runs once for all documents */
  'vision.explain.insight.batched-subquery': undefined, // 'The subquery runs once for all the documents, in a single batched fetch, not once per document.'
  /** Part of the filter runs in memory; the expression follows */
  'vision.explain.insight.filter-in-memory': undefined, // 'Part of the filter runs in memory, after reading: every document the index lets through is read first, which gets slow on large datasets. Joins (->) and functions in a filter cannot use the index.'
  /** The index sorts and limits while reading */
  'vision.explain.insight.index-sort-limit': undefined, // 'The index sorts and limits the documents while reading them.'
  /** The plan slices in memory */
  'vision.explain.insight.slice-in-memory': undefined, // 'The slice is taken in memory after reading, not as a limit while reading.'
  /** The plan sorts in memory */
  'vision.explain.insight.sort-in-memory': undefined, // 'Sorting happens in memory, after reading every match. Sort by attributes the index can sort by.'
  /** Link under the plan insights to the guide on fast queries */
  'vision.explain.insights.guide': undefined, // 'High performance GROQ'
  /** Heading of the plan insights in the Explain panel */
  'vision.explain.insights.title': undefined, // 'What stands out'
  /** Button in the Explain panel fetching the query plan */
  'vision.explain.plan': undefined, // 'Show the query plan'
  /** Shown when the query plan could not be fetched */
  'vision.explain.plan-failed': undefined, // 'The query plan could not be fetched: {{message}}'
  /** Heading of the query plan in the Explain panel */
  'vision.explain.plan-title': undefined, // 'Query plan'
  /** Toast shown after a code snippet was copied */
  'vision.export-query.copied': undefined, // 'Snippet copied to clipboard'
  /** Label for the button that copies a code snippet */
  'vision.export-query.copy': undefined, // 'Copy snippet'
  /** Explanation at the top of the export query dialog */
  'vision.export-query.description': undefined, // 'Run this query outside of the studio with one of these snippets.'
  /** Note under the curl snippet when the query is sent as a request body rather than in the URL */
  'vision.export-query.post-body-note': undefined, // 'The query and params come to {{size}} characters as search params; from {{limit}} on, @sanity/client sends them as a JSON body rather than in the URL, so the snippet does the same.'
  /** Title of the dialog that exports the query as code snippets */
  'vision.export-query.title': undefined, // 'Export query'
  /** Note about authentication in the export query dialog */
  'vision.export-query.token-note': undefined, // 'Private datasets need an API token. Public datasets can drop the Authorization header.'
  /** Toast shown after the generated code was copied */
  'vision.export-types.copied': undefined, // 'Code copied to clipboard'
  /** Label for the button that copies the generated code */
  'vision.export-types.copy': undefined, // 'Copy code'
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vision.export-types.empty': undefined, // 'Fetch the query first so there is a result to derive types from.'
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vision.export-types.schema-error': undefined, // 'Schema evaluation failed: {{message}}'
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vision.export-types.source.result': undefined, // 'Inferred from the fetched result, since the query could not be evaluated against the workspace schema.'
  /** Note shown when the types were derived from the workspace schema */
  'vision.export-types.source.schema': undefined, // 'Inferred from the workspace schema, the same way sanity typegen does it.'
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vision.export-types.stale-result': undefined, // 'The result shown was fetched for a different query or params. Fetch the current query first so there is a result to derive types from.'
  /** Title of the dialog exporting TypeScript types for the result */
  'vision.export-types.title-typescript': undefined, // 'Export TypeScript'
  /** Title of the dialog exporting a Zod schema for the result */
  'vision.export-types.title-zod': undefined, // 'Export Zod'
  /** Button of a library function the query does not declare, which declares it at the top */
  'vision.functions.add': undefined, // 'Add to query'
  /** Shown on a library function the query declares the same way */
  'vision.functions.declared': undefined, // 'In this query'
  /** Lint action on a call of a library function the query does not declare */
  'vision.functions.editor.add-from-library': undefined, // 'Declare it'
  /** Note in a function's hover documentation: the API version it needs */
  'vision.functions.editor.api-version': undefined, // 'Needs API version {{version}} or later'
  /** Detail of a completion for a custom function the query declares */
  'vision.functions.editor.completion-declared': undefined, // 'in this query'
  /** Detail of a completion for a library function, which declares it too */
  'vision.functions.editor.completion-library': undefined, // 'from your library'
  /** Note in the hover documentation of a custom function the query declares */
  'vision.functions.editor.declared-on': undefined, // 'Custom function, declared on line {{line}}'
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vision.functions.editor.delta-only': undefined, // 'Only works in delta mode, where webhooks and Sanity Functions run their filters'
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vision.functions.editor.extract': undefined, // 'Extract to function'
  /** Note in the hover documentation of a library function the query does not declare */
  'vision.functions.editor.in-library': undefined, // 'In your functions library, not declared in this query'
  /** Link at the end of a built-in function's hover documentation */
  'vision.functions.editor.reference': undefined, // 'GROQ functions reference'
  /** Explanation under the library heading in the Functions panel */
  'vision.functions.library.description': undefined, // 'Kept in this browser for every dataset of the project. Completions offer these functions, and lint offers to declare one a query calls.'
  /** Shown in the Functions panel while the library is empty */
  'vision.functions.library.empty': undefined, // 'Save a function the query declares to use it in other queries.'
  /** Heading of the functions library in the Functions panel */
  'vision.functions.library.title': undefined, // 'Library'
  /** Shown in the Functions panel while the query declares no custom functions */
  'vision.functions.query.empty': undefined, // 'Declare custom functions at the top of the query, or put the cursor in a projection, like author->{name}, and press the extract button over the editor ({{shortcut}}).'
  /** Heading of the functions the query declares in the Functions panel */
  'vision.functions.query.title': undefined, // 'In this query'
  /** Removes a function from the library */
  'vision.functions.remove': undefined, // 'Remove from the library'
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vision.functions.replace': undefined, // 'Replace in query'
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vision.functions.reveal': undefined, // 'Show {{name}} in the editor'
  /** Button of a function the query declares that is not in the library yet */
  'vision.functions.save': undefined, // 'Save to library'
  /** Shown on a function the query declares the way the library has it */
  'vision.functions.saved': undefined, // 'Saved'
  /** Button of a function the query declares differently from the library's version */
  'vision.functions.update': undefined, // 'Update library'
  /** Button over the query editor that opens the bar writing a query from a description */
  'vision.generate.button': undefined, // 'Generate query'
  /** Closes the generate query bar */
  'vision.generate.close': undefined, // 'Close'
  /** Explanation under the generate query field */
  'vision.generate.description': undefined, // 'Sanity Agent Actions write the GROQ from your description and the document types, and the Content Lake checks each attempt; every attempt uses one AI credit. It replaces this tab’s query and runs; undo in the editor brings the previous query back.'
  /** Shown when no query could be generated, above the reason */
  'vision.generate.failed': undefined, // 'The query could not be generated'
  /** Accessible label of the description field in the generate query bar */
  'vision.generate.label': undefined, // 'What should the query fetch?'
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vision.generate.open-anyway': undefined, // 'Open the last attempt'
  /** Placeholder of the description field in the generate query bar */
  'vision.generate.placeholder': undefined, // 'The 10 most recent authors, ordered by last name and then first name'
  /** Shown while the first attempt at a query is written */
  'vision.generate.progress': undefined, // 'Writing the query…'
  /** Shown while a rejected attempt is retried */
  'vision.generate.progress-retry': undefined, // 'Fixing the query (attempt {{attempt}} of {{max}})…'
  /** Button generating the query */
  'vision.generate.submit': undefined, // 'Generate'
  /** Badge on a history entry the API CDN answered */
  'vision.history.cdn': undefined, // 'API CDN'
  /** Badge on a history entry the API CDN answered from its cache */
  'vision.history.cdn-cache-hit': undefined, // 'CDN cache hit'
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vision.history.changed': undefined, // 'Changed'
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vision.history.changes': undefined, // 'Changes'
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vision.history.changes-failed': undefined, // 'The changes could not be shown.'
  /** Button retrying to show the changes of a history entry */
  'vision.history.changes-retry': undefined, // 'Retry'
  /** Above the changes of a history entry: the fetch they are compared with */
  'vision.history.compared-with': undefined, // 'Compared with the fetch at {{time}}'
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vision.history.diff.params': undefined, // 'Params'
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vision.history.diff.query': undefined, // 'Query'
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vision.history.diff.query-formatting-only': undefined, // 'Only the formatting changed'
  /** Label of the diff of the query result in a history entry's changes */
  'vision.history.diff.result': undefined, // 'Result'
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vision.history.diff.url': undefined, // 'Request URL'
  /** Empty state of the history panel */
  'vision.history.empty': undefined, // 'Nothing fetched yet'
  /** Status label for a failed fetch in the history */
  'vision.history.failed': undefined, // 'Failed'
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vision.history.hide-hidden': undefined, // 'Hide them'
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vision.history.hiding': undefined, // 'Hiding {{fields}}'
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vision.history.only-hidden-changed': undefined, // 'Only hidden fields changed'
  /** History reason: a tab opened with a generated query fetched it */
  'vision.history.reason.generated': undefined, // 'Generated query'
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vision.history.reason.link': undefined, // 'Opened link'
  /** History reason: a live event matched the query's sync tags */
  'vision.history.reason.live': undefined, // 'Live update'
  /** History reason: the live connection asked every client to refetch */
  'vision.history.reason.live-restart': undefined, // 'Live connection restarted'
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vision.history.reason.live-start': undefined, // 'Live fetch started'
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vision.history.reason.load': undefined, // 'Query loaded'
  /** History reason: the fetch button was pressed */
  'vision.history.reason.manual': undefined, // 'Fetch button'
  /** History reason: mutations were applied from the Mutate panel */
  'vision.history.reason.mutation': undefined, // 'Mutations applied'
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vision.history.reason.options': undefined, // 'Options changed'
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vision.history.reason.paste': undefined, // 'Pasted URL'
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vision.history.reason.resume': undefined, // 'Automatic refetching resumed'
  /** History reason: the keyboard shortcut was used */
  'vision.history.reason.shortcut': undefined, // 'Keyboard shortcut'
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vision.history.same-result': undefined, // 'Same result'
  /** Button showing the hidden fields in a history entry's changes */
  'vision.history.show-hidden': undefined, // 'Show them'
  /** Next to a history entry's changes while the hidden fields are shown */
  'vision.history.showing-hidden': undefined, // 'Showing {{fields}}, hidden by default'
  /** A history entry whose result, or the previous one, is too large to compare */
  'vision.history.too-large': undefined, // 'Too large to compare'
  /** A history entry whose result is the same as the previous result */
  'vision.history.unchanged': undefined, // 'No changes'
  /** Shown in the Lint panel while the query has no lint findings */
  'vision.lint.empty': undefined, // 'No lint findings. Problems the GROQ linter spots in the query are listed here as you type; pick one to select it in the editor.'
  /** Where a lint finding sits in the query, shown under its message */
  'vision.lint.position': undefined, // 'Line {{line}}, column {{column}}'
  /** Severity badge of a lint finding */
  'vision.lint.severity.error': undefined, // 'Error'
  /** Severity badge of a lint finding */
  'vision.lint.severity.hint': undefined, // 'Hint'
  /** Severity badge of a lint finding */
  'vision.lint.severity.info': undefined, // 'Info'
  /** Severity badge of a lint finding */
  'vision.lint.severity.warning': undefined, // 'Warning'
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vision.lint.use-suggestion': undefined, // 'Use {{suggestion}}'
  /** Badge shown while a tab refetches automatically */
  'vision.live.active': undefined, // 'Live'
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vision.live.button': undefined, // 'Live fetch'
  /** Tooltip of the Live button while automatic refetching is off */
  'vision.live.button.start': undefined, // 'Fetch, then fetch again whenever the documents in the result change'
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vision.live.button.stop': undefined, // 'Stop fetching when the documents in the result change. Fetch still fetches on demand, for results no document change touches, like now()'
  /** Error shown when the live connection breaks */
  'vision.live.error': undefined, // 'Live updates disconnected: {{message}}'
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vision.live.stop': undefined, // 'Stop live'
  /** Button in the Mutate panel adding a mutation to the list */
  'vision.mutate.add': undefined, // 'Add mutation'
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vision.mutate.add.create': undefined, // 'Create a document'
  /** Adds a mutation deleting a document, its ID to fill in */
  'vision.mutate.add.delete': undefined, // 'Delete a document'
  /** Adds a mutation deleting the documents of the shown result */
  'vision.mutate.add.delete-result': undefined, // 'Delete the documents in the result'
  /** Adds a mutation patching a document, its ID to fill in */
  'vision.mutate.add.patch': undefined, // 'Patch a document'
  /** Adds a mutation patching the documents of the shown result */
  'vision.mutate.add.patch-result': undefined, // 'Patch the documents in the result'
  /** Button applying the mutations a dry run showed */
  'vision.mutate.apply': undefined, // 'Apply to {{dataset}}'
  /** Heading of the error shown when applying the mutations failed */
  'vision.mutate.apply-failed': undefined, // 'The mutations were not applied'
  /** Next to Apply while the mutations as they are have had no dry run */
  'vision.mutate.apply-needs-preview': undefined, // 'Apply sends what a dry run showed: run one first.'
  /** Option giving array items without a _key one */
  'vision.mutate.auto-keys': undefined, // 'Add a _key to array items that have none'
  /** Under the option giving array items a _key */
  'vision.mutate.auto-keys.description': undefined, // 'The studio needs one on every array item to edit it.'
  /** Button showing a document's changes in the dry run */
  'vision.mutate.changes': undefined, // 'Changes'
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vision.mutate.changes-failed': undefined, // 'The changes could not be shown.'
  /** Button retrying to show a document's changes */
  'vision.mutate.changes-retry': undefined, // 'Retry'
  /** What the Mutate panel does */
  'vision.mutate.description': undefined, // 'Write mutations as the Mutations API takes them, in a list: create, createOrReplace, createIfNotExists, delete and patch, by ID or by a GROQ query. A dry run shows what they would do to each document without changing anything; Apply then writes them to the dataset in one transaction, with your account.'
  /** What the API says went wrong with one of the mutations */
  'vision.mutate.failure-item': undefined, // 'Mutation {{index}}: {{message}}'
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vision.mutate.generate.button': undefined, // 'Generate mutations'
  /** Explanation under the generate mutations field */
  'vision.mutate.generate.description': undefined, // 'Sanity Agent Actions write the mutations from your description, the documents in the result and their types, and a dry run checks each attempt; every attempt uses one AI credit. They replace the mutations here, where undo brings these back; nothing is written until you apply them.'
  /** Shown when no mutations could be generated, above the reason */
  'vision.mutate.generate.failed': undefined, // 'The mutations could not be generated'
  /** Accessible label of the description field in the generate mutations bar */
  'vision.mutate.generate.label': undefined, // 'What should the mutations do?'
  /** Placeholder of the description field in the generate mutations bar */
  'vision.mutate.generate.placeholder': undefined, // 'Change the title of the documents in the result to foobar'
  /** Shown while the first attempt at the mutations is written */
  'vision.mutate.generate.progress': undefined, // 'Writing the mutations…'
  /** Shown while an attempt the dry run turned down is retried */
  'vision.mutate.generate.progress-retry': undefined, // 'Fixing the mutations (attempt {{attempt}} of {{max}})…'
  /** Under the dry run: the fields the diffs leave out */
  'vision.mutate.hiding': undefined, // 'The changes leave out {{fields}}, as History does.'
  /** Shown when the mutations are not valid JSON */
  'vision.mutate.invalid-json': undefined, // 'The mutations are not valid JSON: {{message}}'
  /** Shown when a mutation does not name exactly one thing to do */
  'vision.mutate.invalid-mutation': undefined, // 'Mutation {{index}} needs exactly one of create, createOrReplace, createIfNotExists, delete or patch.'
  /** Label of the mutations editor */
  'vision.mutate.mutations': undefined, // 'Mutations'
  /** The dry run touched no documents */
  'vision.mutate.no-documents': undefined, // 'The mutations touch no documents.'
  /** Shown when the JSON is not a list of mutations */
  'vision.mutate.not-a-list': undefined, // 'Write a list of mutations, a single mutation, or a request body with a list of mutations.'
  /** A document the mutations create */
  'vision.mutate.operation.create': undefined, // 'Create'
  /** A document the mutations delete */
  'vision.mutate.operation.delete': undefined, // 'Delete'
  /** A document the mutations touch without changing its content */
  'vision.mutate.operation.none': undefined, // 'No change'
  /** A document the mutations change */
  'vision.mutate.operation.update': undefined, // 'Update'
  /** Button running the mutations as a dry run */
  'vision.mutate.preview': undefined, // 'Dry run'
  /** Heading of the error shown when the dry run failed */
  'vision.mutate.preview-failed': undefined, // 'The dry run failed'
  /** Heading of the dry run's outcome */
  'vision.mutate.preview-heading': undefined, // 'Dry run'
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vision.mutate.stale': undefined, // 'The mutations, the dataset or the options changed after this dry run. Run it again to apply them.'
  /** How many documents the dry run changes and leaves as they are */
  'vision.mutate.summary': undefined, // 'Changed: {{changed}} · Unchanged: {{unchanged}}'
  /** In the Network panel: whether a cache answered the query */
  'vision.network.cache': undefined, // 'Cache'
  /** The API CDN answered from its cache */
  'vision.network.cache.hit': undefined, // 'Hit'
  /** Under the details of a CDN cache hit */
  'vision.network.cache.hit-explained': undefined, // 'The CDN answered with a response it had cached, from a location near you; the query did not reach the API.'
  /** The API CDN answered with a response this session had not seen */
  'vision.network.cache.miss': undefined, // 'Miss, as far as this session can tell'
  /** The API answered, which caches nothing */
  'vision.network.cache.none': undefined, // 'None, the API answers every request with fresh content'
  /** Shown in the Network panel while there is no response */
  'vision.network.empty': undefined, // 'Fetch the query to see which endpoint answered it, whether from a cache, and where it ran.'
  /** In the Network panel: the endpoint that answered */
  'vision.network.endpoint': undefined, // 'Answered by'
  /** The live API answered */
  'vision.network.endpoint.api': undefined, // 'API'
  /** The API CDN answered */
  'vision.network.endpoint.cdn': undefined, // 'API CDN'
  /** In the Network panel: the HTTP method the query was sent with */
  'vision.network.method': undefined, // 'Method'
  /** The query and its params went in the URL */
  'vision.network.method.get': undefined, // 'GET, with the query and params in the URL'
  /** The query and its params went in the request body */
  'vision.network.method.post': undefined, // 'POST, with the query and params as a JSON body'
  /** Under the method of a POST request: why the query was not sent in the URL */
  'vision.network.method.post-explained': undefined, // 'The query and params come to {{size}} characters as search params; from {{limit}} on, @sanity/client sends them as a JSON body, since the API limits the length of a URL. The options stay in the URL.'
  /** In the Network panel: the region the query ran in */
  'vision.network.region': undefined, // 'Query ran in'
  /** The response did not say where the query ran */
  'vision.network.region.unknown': undefined, // 'Not reported'
  /** In the Network panel: the round trip and the time on the server */
  'vision.network.timing': undefined, // 'Time'
  /** The round trip and the server's time for the query, in milliseconds */
  'vision.network.timing.value': undefined, // '{{e2e}}ms round trip, {{server}}ms on the server'
  /** In the Network panel: the trace of the request, for Sanity support */
  'vision.network.trace': undefined, // 'Trace ID'
  /** Hint in the Network panel while queries go to the API */
  'vision.network.use-cdn-hint': undefined, // 'Turn on Use the API CDN in Options to send queries through the CDN.'
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vision.network.you': undefined, // 'You'
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vision.options.dataset.follows-workspace': undefined, // 'Follows the workspace'
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vision.options.dataset.pin': undefined, // 'Pin a dataset'
  /** Hint under the dataset field while a dataset is pinned */
  'vision.options.dataset.pinned': undefined, // 'Pinned; the workspace may use another dataset'
  /** Button that makes the tab follow the workspace's dataset again */
  'vision.options.dataset.use-workspace': undefined, // 'Use the workspace dataset'
  /** Label for the "Include content source map" switch */
  'vision.options.include-source-map': undefined, // 'Include content source map'
  /** Description for the "Include content source map" switch */
  'vision.options.include-source-map.description': undefined, // 'Adds resultSourceMap to the response, shown in the Content Source Map tab.'
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vision.options.perspective.global': undefined, // 'Global ({{name}})'
  /** Label of the switch that sends queries to the API CDN */
  'vision.options.use-cdn': undefined, // 'Use the API CDN'
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vision.options.use-cdn.anonymous': undefined, // 'This studio signs you in with a cookie, which the API CDN never receives: it answers as it would an anonymous visitor, with what a public dataset shows.'
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vision.options.use-cdn.blocked': undefined, // 'The API CDN does not serve drafts or releases, so queries with the {{perspective}} perspective go to the API. With published or raw they use the CDN.'
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vision.options.use-cdn.blocked.title': undefined, // 'Queries go to the API, not the CDN'
  /** Description of the API CDN switch */
  'vision.options.use-cdn.description': undefined, // 'Sends the query to the API CDN, like useCdn: true in @sanity/client, with the published and raw perspectives: drafts and releases always go to the API. Its answers are cached for up to a minute; the Network panel shows when one came from the cache.'
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vision.options.use-cdn.use-published': undefined, // 'Use the published perspective'
  /** Label of the variant field */
  'vision.options.variant-label': undefined, // 'Variant'
  /** Variant option sending the navbar's variant, named */
  'vision.options.variant.global': undefined, // 'Global ({{name}})'
  /** Variant option sending the navbar's variant while none is selected there */
  'vision.options.variant.global-none': undefined, // 'Global (none selected)'
  /** Variant option sending no variant */
  'vision.options.variant.none': undefined, // 'None'
  /** Accessible label for collapsing a bottom panel */
  'vision.panel.collapse': undefined, // 'Collapse panel'
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vision.panel.delta': undefined, // 'Delta'
  /** Accessible label for expanding a bottom panel */
  'vision.panel.expand': undefined, // 'Expand panel'
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vision.panel.explain': undefined, // 'Explain'
  /** Label of the Functions tab in the response panel */
  'vision.panel.functions': undefined, // 'Functions'
  /** Label of the "History" tab in the response panel */
  'vision.panel.history': undefined, // 'History'
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vision.panel.lint': undefined, // 'Lint'
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vision.panel.mutate': undefined, // 'Mutate'
  /** Label of the Network tab in the response panel */
  'vision.panel.network': undefined, // 'Network'
  /** Label of the "Options" panel in the request column */
  'vision.panel.options': undefined, // 'Options'
  /** Label of the "Response" tab in the response panel */
  'vision.panel.response': undefined, // 'Response'
  /** Label of the "Content Source Map" tab in the response panel */
  'vision.panel.source-map': undefined, // 'Content Source Map'
  /** Button adding an item to a list param in the params form */
  'vision.params-form.add-item': undefined, // 'Add item'
  /** Placeholder of a params form field that takes any JSON value */
  'vision.params-form.any-placeholder': undefined, // 'Any JSON value; other text is sent as a string'
  /** Shown in the params form when the query uses no params */
  'vision.params-form.empty': undefined, // 'The query uses no params. Each $name in it gets a field here.'
  /** Shown in the params form while the params JSON cannot be parsed */
  'vision.params-form.invalid-json': undefined, // 'The params are not valid JSON. Fix them in the JSON view to edit them here.'
  /** A boolean param's value is not true or false; it is sent anyway */
  'vision.params-form.invalid.boolean': undefined, // 'Not true or false; sent as {{value}}'
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vision.params-form.invalid.document-type': undefined, // 'Not a document type in this workspace; sent anyway'
  /** A whole number param (a slice bound) holds a fraction */
  'vision.params-form.invalid.integer': undefined, // 'Not a whole number, which slices need'
  /** A list param's value is not a list; it is sent anyway */
  'vision.params-form.invalid.list': undefined, // 'Not a list; sent as {{value}}'
  /** A number param's value is not a number; it is sent anyway */
  'vision.params-form.invalid.number': undefined, // 'Not a number; sent as text'
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vision.params-form.invalid.option': undefined, // 'Not one of the known values; sent anyway'
  /** A text param's value is not text; it is sent anyway */
  'vision.params-form.invalid.string': undefined, // 'Not text; sent as {{value}}'
  /** Accessible label of an item input of a list param in the params form */
  'vision.params-form.item-label': undefined, // '${{name}}, item {{index}}'
  /** Placeholder of an item input of a list param in the params form */
  'vision.params-form.item-placeholder': undefined, // 'Item'
  /** Under a params form field whose param has no value */
  'vision.params-form.missing': undefined, // 'Not set: the query fails until it has a value'
  /** Shown in the params form when the workspace schema could not be read */
  'vision.params-form.no-schema': undefined, // 'Types come from the query alone: the workspace schema could not be read.'
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vision.params-form.not-set': undefined, // 'Not set'
  /** Button setting a date and time param to the current time */
  'vision.params-form.now': undefined, // 'Now'
  /** Button removing a param the query does not use from the params */
  'vision.params-form.remove': undefined, // 'Remove'
  /** Accessible label of the button removing an item from a list param */
  'vision.params-form.remove-item': undefined, // 'Remove item'
  /** Shown in the params form when the query does not parse */
  'vision.params-form.syntax-error': undefined, // 'The query does not parse, so its params are listed without types.'
  /** Type hint of a params form field: any JSON value */
  'vision.params-form.type.any': undefined, // 'any JSON value'
  /** Type hint of a params form field: true or false */
  'vision.params-form.type.boolean': undefined, // 'true or false'
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vision.params-form.type.datetime': undefined, // 'date and time (ISO 8601)'
  /** Type hint of a params form field: a document ID */
  'vision.params-form.type.document-id': undefined, // 'document ID'
  /** Type hint of a params form field: one of the workspace's document types */
  'vision.params-form.type.document-type': undefined, // 'document type'
  /** Type hint of a params form field: a whole number */
  'vision.params-form.type.integer': undefined, // 'whole number'
  /** Type hint of a params form field: a list of values */
  'vision.params-form.type.list': undefined, // 'list, each {{type}}'
  /** Type hint of a params form field: a number */
  'vision.params-form.type.number': undefined, // 'number'
  /** Type hint of a params form field: text */
  'vision.params-form.type.string': undefined, // 'text'
  /** Heading of the params the query does not use, listed in the params form */
  'vision.params-form.unused': undefined, // 'Not used by the query'
  /** Before the expressions that use a param, in the params form */
  'vision.params-form.used-in': undefined, // 'Used in'
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vision.params.fit-height': undefined, // 'Sized to the content, {{height}} pixels'
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vision.params.resize': undefined, // 'Resize params: drag or use the arrow keys; double-click or press Enter to fit the content again'
  /** Tab showing the params as a form inferred from the query */
  'vision.params.view.form': undefined, // 'Form'
  /** Tab showing the params as JSON */
  'vision.params.view.json': undefined, // 'JSON'
  /** Accessible label of the tabs switching how the params are edited */
  'vision.params.view.label': undefined, // 'Edit params as'
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vision.paste.parsed': undefined, // 'Loaded query from pasted URL'
  /** Toast shown after a curl command for a query was pasted and loaded into the tab */
  'vision.paste.parsed-curl': undefined, // 'Loaded query from pasted cURL command'
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vision.paste.unavailable-variant': undefined, // 'The pasted URL used the "{{variant}}" variant; select it in the navbar to run the query with it.'
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vision.paste.unknown-dataset': undefined, // 'The dataset "{{dataset}}" in the pasted URL is not available here, keeping the current one.'
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vision.paste.unsupported-perspective': undefined, // 'The perspective in the pasted URL is not supported here, keeping the current one.'
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vision.paste.variants-disabled': undefined, // 'The pasted URL used the "{{variant}}" variant; this workspace has variants switched off, so the query runs without it.'
  /** Accessible label for the query actions menu */
  'vision.query.actions': undefined, // 'Query actions'
  /** Tooltip when automatic refetching is not available for the API version */
  'vision.query.auto-refetch.unsupported': undefined, // 'Refetching automatically needs API version v2021-03-25 or later.'
  /** Toast shown after the query was copied */
  'vision.query.copied': undefined, // 'Query copied to clipboard'
  /** Menu item copying the query text */
  'vision.query.copy': undefined, // 'Copy query'
  /** Menu item opening the export query dialog */
  'vision.query.export': undefined, // 'Export query…'
  /** Menu item reformatting the query */
  'vision.query.prettify': undefined, // 'Prettify query'
  /** Toast shown when the query could not be reformatted */
  'vision.query.prettify.failed': undefined, // 'Could not prettify the query'
  /** Menu item saving the query to the personal saved queries */
  'vision.query.save': undefined, // 'Save query'
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vision.query.stop': undefined, // 'Stop'
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vision.query.stop.description': undefined, // 'Stop fetching'
  /** Explanation in the settings section about the redesigned experience */
  'vision.redesign.settings.description': undefined, // 'You are using the redesigned Vision tool. Switching back keeps your tabs and settings in this browser for the next time you try it.'
  /** Title of the settings section about the redesigned experience */
  'vision.redesign.settings.title': undefined, // 'Redesigned Vision (beta)'
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vision.redesign.switch-to-classic': undefined, // 'Switch to classic Vision'
  /** Toast button that switches to the redesigned tool */
  'vision.redesign.toast.accept': undefined, // 'Try it now'
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vision.redesign.toast.description': undefined, // 'Query tabs, live refetching, response details and exports. You can switch back at any time.'
  /** Toast button that hides the invitation */
  'vision.redesign.toast.dismiss': undefined, // 'Not now'
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vision.redesign.toast.title': undefined, // 'Try the redesigned Vision'
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vision.redesign.try': undefined, // 'Try the redesign'
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vision.redesign.try.description': undefined, // 'Switch to the redesigned Vision, in beta. You can switch back at any time from its sidebar.'
  /** Empty state of the response panel before anything was fetched */
  'vision.response.empty': undefined, // 'Nothing fetched yet'
  /** Label for the payload size in the response tab */
  'vision.response.payload-size': undefined, // 'Payload size'
  /** Label for the sync tags in the response tab */
  'vision.response.sync-tags': undefined, // 'Sync tags'
  /** Shown when the response carried no sync tags */
  'vision.response.sync-tags.none': undefined, // 'No sync tags in the response'
  /** Under the query URL when the request went out as a POST body rather than that URL */
  'vision.response.url.sent-as-post': undefined, // 'Sent as a POST body: the query and params are too long for a URL, so @sanity/client sent them as JSON. Pasting this URL into Vision still loads the query.'
  /** Accessible label for the result actions menu */
  'vision.result.actions': undefined, // 'Result actions'
  /** Toast shown after the result was copied */
  'vision.result.copied': undefined, // 'Result copied to clipboard'
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vision.result.copied-value': undefined, // 'Copied {{path}}'
  /** Menu item and button copying the result as JSON */
  'vision.result.copy': undefined, // 'Copy result'
  /** Button next to each property in the result tree, copying its value */
  'vision.result.copy-value': undefined, // 'Copy value'
  /** Empty state of the result view */
  'vision.result.empty': undefined, // 'Run the query to see its result here'
  /** Button exporting the result as CSV */
  'vision.result.export-csv': undefined, // 'Export CSV'
  /** Button exporting the result as JSON */
  'vision.result.export-json': undefined, // 'Export JSON'
  /** Menu item opening the TypeScript export dialog */
  'vision.result.export-typescript': undefined, // 'Export TypeScript…'
  /** Menu item opening the Zod export dialog */
  'vision.result.export-zod': undefined, // 'Export Zod…'
  /** Button on a graph node hiding the objects and arrays it holds */
  'vision.result.graph.collapse': undefined, // 'Hide what it holds'
  /** Button fitting the whole graph in view */
  'vision.result.graph.fit': undefined, // 'Fit to view'
  /** Accessible label of the graph, saying how to move around in it */
  'vision.result.graph.label': undefined, // 'Result graph: drag to move, scroll to zoom; while focused, the arrow keys move, + and - zoom, 0 fits'
  /** Ends the note on a graph that leaves part of this result out */
  'vision.result.graph.left-out-hint': undefined, // 'The tree and JSON views show all of it.'
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vision.result.graph.node-limit': undefined, // 'Only the first {{nodes}} objects and arrays are drawn.'
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vision.result.graph.partial': undefined, // 'Only the first {{rows}} entries are listed for {{nodes}}.'
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vision.result.graph.partial.node': undefined, // '{{name}} ({{entries}} entries)'
  /** Title of the graph node of the result itself */
  'vision.result.graph.root': undefined, // 'result'
  /** Button zooming into the graph */
  'vision.result.graph.zoom-in': undefined, // 'Zoom in'
  /** Button zooming out of the graph */
  'vision.result.graph.zoom-out': undefined, // 'Zoom out'
  /** Tab showing the result as a graph of its objects and arrays */
  'vision.result.view.graph': undefined, // 'Graph'
  /** Tab showing the result as indented JSON text, to select and copy from */
  'vision.result.view.json': undefined, // 'JSON'
  /** Accessible label of the tabs that switch how the result shows */
  'vision.result.view.label': undefined, // 'Result view'
  /** Tab showing the result as a tree to browse */
  'vision.result.view.tree': undefined, // 'Tree'
  /** Empty state of the saved queries panel */
  'vision.saved.empty': undefined, // 'No saved queries yet. Save the current query with the + button.'
  /** Empty state of a query list when the search matches nothing */
  'vision.saved.empty-search': undefined, // 'No queries match your search'
  /** Menu item loading a saved query into the active tab */
  'vision.saved.load-in-current-tab': undefined, // 'Load into current tab'
  /** Menu item opening a saved query in a new tab */
  'vision.saved.open-in-new-tab': undefined, // 'Open in new tab'
  /** Menu item renaming a saved query */
  'vision.saved.rename': undefined, // 'Rename'
  /** Accessible label for the button saving the current query */
  'vision.saved.save-current': undefined, // 'Save current query'
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vision.saved.unavailable-variant': undefined, // 'This saved query used the "{{variant}}" variant; select it in the navbar to run the query with it.'
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vision.saved.unknown-dataset': undefined, // 'The dataset "{{dataset}}" of this saved query is not available here, keeping the current one.'
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vision.saved.variants-disabled': undefined, // 'This saved query used the "{{variant}}" variant; this workspace has variants switched off, so the query runs without it.'
  /** Button in the settings dialog that clears the stored state */
  'vision.settings.clear-storage': undefined, // 'Clear storage'
  /** Confirmation button for clearing the storage */
  'vision.settings.clear-storage.confirm': undefined, // 'Yes, clear storage'
  /** Explanation of what clearing the storage does */
  'vision.settings.clear-storage.description': undefined, // 'Deletes your personal saved queries and the functions library, resets the open tabs and these defaults in this browser, and returns to the classic Vision tool. Shared queries are kept.'
  /** Toast shown when the saved queries could not be cleared */
  'vision.settings.clear-storage.error': undefined, // 'Could not clear the saved queries'
  /** Toast shown after the storage was cleared */
  'vision.settings.clear-storage.success': undefined, // 'Storage cleared'
  /** Explanation at the top of the settings dialog */
  'vision.settings.description': undefined, // 'Defaults for new tabs. Open tabs keep their own options.'
  /** Explains the setting listing the fields left out of History diffs */
  'vision.settings.history-diff.description': undefined, // 'One field path per line. A path matches at any depth of a result, so _rev hides the revision of every document in it. Each diff can still show them.'
  /** Button restoring the default fields left out of History diffs */
  'vision.settings.history-diff.reset': undefined, // 'Reset to the defaults'
  /** Label of the setting listing the fields left out of History diffs */
  'vision.settings.history-diff.title': undefined, // 'Fields hidden from History diffs'
  /** Title of the settings dialog */
  'vision.settings.title': undefined, // 'Settings'
  /** Empty state of the shared queries panel */
  'vision.shared.empty': undefined, // 'No shared queries yet. Share a saved query to make it available to everyone using this dataset.'
  /** Shortcut description: close dialogs and menus */
  'vision.shortcuts.close': undefined, // 'Close dialogs and menus'
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vision.shortcuts.complete': undefined, // 'Complete a function name'
  /** Shortcut description: copy the query */
  'vision.shortcuts.copy-query': undefined, // 'Copy the query'
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vision.shortcuts.extract-function': undefined, // 'Extract the projection at the cursor to a function'
  /** Shortcut description: run the query */
  'vision.shortcuts.fetch': undefined, // 'Fetch the query'
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vision.shortcuts.next-finding': undefined, // 'Jump to the next lint finding'
  /** Shortcut description: reformat the query */
  'vision.shortcuts.prettify': undefined, // 'Prettify the query'
  /** Title of the keyboard shortcuts dialog */
  'vision.shortcuts.title': undefined, // 'Keyboard shortcuts'
  /** Sidebar toggle: show icons only */
  'vision.sidebar.collapse': undefined, // 'Collapse sidebar'
  /** Sidebar toggle: show labels next to the icons */
  'vision.sidebar.expand': undefined, // 'Expand sidebar'
  /** Accessible label for the sidebar navigation */
  'vision.sidebar.label': undefined, // 'Vision sidebar'
  /** Sidebar item and drawer title for personal saved queries */
  'vision.sidebar.saved-queries': undefined, // 'Saved queries'
  /** Sidebar item opening the settings dialog */
  'vision.sidebar.settings': undefined, // 'Settings'
  /** Sidebar item and drawer title for shared queries */
  'vision.sidebar.shared-queries': undefined, // 'Shared queries'
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vision.sidebar.shortcuts': undefined, // 'Keyboard shortcuts'
  /** Empty state of the content source map panel */
  'vision.source-map.empty': undefined, // 'No content source map in the response. Turn on "Include content source map" under Options and fetch again.'
  /** Accessible label of the divider between the result and the response details panel */
  'vision.split.bottom-panel': undefined, // 'Resize the response details panel: drag or use the arrow keys; Home and End go to the bounds, Enter resets'
  /** Accessible label of the divider between the request and response panes */
  'vision.split.request-response': undefined, // 'Resize the request and response panes: drag or use the arrow keys; Home and End go to the bounds, Enter resets'
  /** Accessible label for the button closing a query tab */
  'vision.tabs.close-tab': undefined, // 'Close tab'
  /** Accessible label for the list of query tabs */
  'vision.tabs.label': undefined, // 'Query tabs'
  /** Accessible label for the button opening a new query tab */
  'vision.tabs.new-tab': undefined, // 'New tab'
  /** Placeholder of the input renaming a tab */
  'vision.tabs.title-placeholder': undefined, // 'Tab title'
  /** Title of a tab whose query is still empty */
  'vision.tabs.untitled': undefined, // 'Untitled query'
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vision.webmcp.check-query': undefined, // 'Check a GROQ query in Vision'
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vision.webmcp.describe-schema': undefined, // 'Describe the schema in Vision'
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vision.webmcp.explain-query': undefined, // 'Explain a GROQ query in Vision'
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vision.webmcp.get-state': undefined, // 'Read the open Vision tab'
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vision.webmcp.open-query': undefined, // 'Open a GROQ query in Vision'
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vision.webmcp.preview-mutations': undefined, // 'Preview mutations in Vision'
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vision.webmcp.run-query': undefined, // 'Run a GROQ query in Vision'
})
