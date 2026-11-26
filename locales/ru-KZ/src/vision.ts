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
  'vision.agent-actions.credits': 'Использует один ИИ-кредит за запрос',
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vision.ai-credits.balance': 'Осталось {{balance}} из {{quota}} ИИ-кредитов в этом месяце.',
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vision.ai-credits.deficit':
    'В этом месяце использовано {{used}} ИИ-кредитов, что на {{deficit}} больше включённых {{quota}}.',
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vision.ai-credits.limit.description':
    'Ваша организация использовала {{used}} из {{quota}} ИИ-кредитов в этом месяце, поэтому Sanity Agent Actions приостановлены до следующего месяца или до повышения лимита расходов.',
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vision.ai-credits.limit.description-unknown':
    'Ваша организация достигла лимита расходов на ИИ-кредиты, поэтому Sanity Agent Actions приостановлены до следующего месяца или до повышения лимита.',
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vision.ai-credits.limit.learn-more': 'Как работают ИИ-кредиты',
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vision.ai-credits.limit.manage': 'Управление ИИ-кредитами',
  /** Title of the card shown where the organization is out of AI credits */
  'vision.ai-credits.limit.title': 'ИИ-кредиты закончились',
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vision.ai-credits.usage': 'Использование ИИ',
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vision.ai-credits.used': 'В этом месяце использовано {{used}} ИИ-кредитов.',
  /** Button in the request column's action bar naming the API version requests go out with */
  'vision.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vision.api-version.button-cdn': 'API CDN {{version}}',
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vision.api-version.button-invalid': 'Незавершённая версия API',
  /** Tooltip of the API version button */
  'vision.api-version.tooltip':
    'Запросы выполняются с использованием версии API {{version}}. Выберите, чтобы изменить это в настройках.',
  /** Tooltip of the API version button while queries go through the API CDN */
  'vision.api-version.tooltip-cdn':
    'Запросы выполняются через API CDN с версией API {{version}}. Выберите, чтобы изменить это в настройках.',
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vision.api-version.tooltip-cdn-blocked':
    'Запросы выполняются через API с версией {{version}}, а не через API CDN: он не обслуживает перспективу {{perspective}}. Выберите, чтобы изменить это в настройках.',
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vision.api-version.tooltip-invalid':
    'Версия API в настройках не завершена, поэтому ничего нельзя получить, пока она не будет указана полностью.',
  /** Tooltip of the API version button while a selected variant forces the variants API version */
  'vision.api-version.tooltip-locked':
    'Запросы выполняются с использованием версии API {{version}}, которая требуется для выбранного варианта.',
  /** Label of the document after the change in the Delta panel */
  'vision.delta.after': 'После',
  /** Label of the document before the change in the Delta panel */
  'vision.delta.before': 'До',
  /** What the Delta panel does */
  'vision.delta.description':
    'Выполняет запрос в режиме delta, как это делают вебхуки, слушатели и Sanity Functions на основе GROQ: before() и after() — это документ до и после изменения, @ — документ после изменения, а delta::changedAny() сравнивает их. Выполняется в браузере с помощью groq-js. Пустая сторона означает отсутствие документа: изменение создаёт или удаляет его.',
  /** Label of the document ID field in the Delta panel */
  'vision.delta.document-id': 'ID документа',
  /** Shown when there is a query but no documents to compare */
  'vision.delta.empty': 'Загрузите историю документа или впишите документы в поля «До» и «После».',
  /** Shown when the query fails in delta mode */
  'vision.delta.failed': 'Не удалось выполнить запрос в режиме delta: {{message}}',
  /** Shown when the After document is not valid JSON */
  'vision.delta.invalid-after': '«После» не является допустимым JSON: {{message}}',
  /** Shown when the Before document is not valid JSON */
  'vision.delta.invalid-before': 'Значение Before не является допустимым JSON: {{message}}',
  /** Button loading the document's revisions from the History API */
  'vision.delta.load': 'Загрузить историю',
  /** Shown when the history could not be loaded */
  'vision.delta.load-failed': 'Не удалось загрузить историю: {{message}}',
  /** A delta filter that is true for the change */
  'vision.delta.matches':
    'Совпадает: webhook или функция с этим фильтром выполняется для этого изменения.',
  /** A delta filter that is false for the change */
  'vision.delta.no-match':
    'Не совпадает: webhook или функция с этим фильтром не выполняется для этого изменения.',
  /** Shown while the query or its params cannot be sent */
  'vision.delta.no-request':
    'Исправьте запрос и его параметры, чтобы выполнить его в режиме delta.',
  /** Heading of the delta result */
  'vision.delta.result': 'Результат',
  /** The After choice for a change that deletes the document */
  'vision.delta.revision.none-after': 'Ничего: изменение удаляет документ',
  /** The Before choice for a change that creates the document */
  'vision.delta.revision.none-before': 'Ничего: изменение создаёт документ',
  /** A revision in the Before and After lists */
  'vision.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vision.drawer.close': 'Закрыть панель',
  /** Explanation at the top of the Explain panel */
  'vision.explain.description':
    'План запроса — это то, как Content Lake выполняет запрос: что он читает, фильтрует и сортирует при чтении, а что остаётся для последующих шагов. Функция «Объяснить мне это» использует Sanity Agent Actions, чтобы описать запрос и его план простыми словами, что расходует один AI-кредит.',
  /** Shown in the Explain panel while there is no valid query to explain */
  'vision.explain.empty': 'Напишите запрос, чтобы объяснить его.',
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vision.explain.explain': 'Объяснить мне это',
  /** Shown when the explanation could not be written */
  'vision.explain.failed': 'Не удалось объяснить запрос: {{message}}',
  /** A count the index computes without reading the documents */
  'vision.explain.insight.aggregate': 'Подсчитано в индексе, без чтения документов.',
  /** A subquery the plan runs once for all documents */
  'vision.explain.insight.batched-subquery':
    'Подзапрос выполняется один раз для всех документов, в одной пакетной выборке, а не отдельно для каждого документа.',
  /** Part of the filter runs in memory; the expression follows */
  'vision.explain.insight.filter-in-memory':
    'Часть фильтра выполняется в памяти, после чтения: каждый документ, пропущенный индексом, сначала читается, что замедляет работу на больших датасетах. Соединения (->) и функции в фильтре не могут использовать индекс.',
  /** The index sorts and limits while reading */
  'vision.explain.insight.index-sort-limit':
    'Индекс сортирует и ограничивает документы во время их чтения.',
  /** The plan slices in memory */
  'vision.explain.insight.slice-in-memory':
    'Срез выполняется в памяти после чтения, а не как ограничение во время чтения.',
  /** The plan sorts in memory */
  'vision.explain.insight.sort-in-memory':
    'Сортировка происходит в памяти после чтения всех совпадений. Сортируйте по атрибутам, по которым может сортировать индекс.',
  /** Link under the plan insights to the guide on fast queries */
  'vision.explain.insights.guide': 'Высокопроизводительный GROQ',
  /** Heading of the plan insights in the Explain panel */
  'vision.explain.insights.title': 'Что выделяется',
  /** Button in the Explain panel fetching the query plan */
  'vision.explain.plan': 'Показать план запроса',
  /** Shown when the query plan could not be fetched */
  'vision.explain.plan-failed': 'Не удалось получить план запроса: {{message}}',
  /** Heading of the query plan in the Explain panel */
  'vision.explain.plan-title': 'План запроса',
  /** Toast shown after a code snippet was copied */
  'vision.export-query.copied': 'Фрагмент кода скопирован в буфер обмена',
  /** Label for the button that copies a code snippet */
  'vision.export-query.copy': 'Копировать фрагмент',
  /** Explanation at the top of the export query dialog */
  'vision.export-query.description':
    'Выполните этот запрос вне студии с помощью одного из этих фрагментов кода.',
  /** Note under the curl snippet when the query is sent as a request body rather than in the URL */
  'vision.export-query.post-body-note':
    'Запрос и параметры составляют {{size}} символов в качестве параметров поиска; начиная с {{limit}}, @sanity/client отправляет их в виде тела JSON, а не в URL, поэтому в этом фрагменте сделано так же.',
  /** Title of the dialog that exports the query as code snippets */
  'vision.export-query.title': 'Экспорт запроса',
  /** Note about authentication in the export query dialog */
  'vision.export-query.token-note':
    'Для приватных датасетов требуется API-токен. Для публичных датасетов заголовок Authorization можно не указывать.',
  /** Toast shown after the generated code was copied */
  'vision.export-types.copied': 'Код скопирован в буфер обмена',
  /** Label for the button that copies the generated code */
  'vision.export-types.copy': 'Копировать код',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vision.export-types.empty':
    'Сначала выполните запрос, чтобы был результат, на основе которого можно определить типы.',
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vision.export-types.schema-error': 'Не удалось выполнить оценку схемы: {{message}}',
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vision.export-types.source.result':
    'Определено на основе полученного результата, так как запрос не удалось оценить по схеме рабочего пространства.',
  /** Note shown when the types were derived from the workspace schema */
  'vision.export-types.source.schema':
    'Определено на основе схемы рабочего пространства, так же, как это делает sanity typegen.',
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vision.export-types.stale-result':
    'Показанный результат был получен для другого запроса или параметров. Сначала выполните текущий запрос, чтобы был результат, на основе которого можно определить типы.',
  /** Title of the dialog exporting TypeScript types for the result */
  'vision.export-types.title-typescript': 'Экспорт TypeScript',
  /** Title of the dialog exporting a Zod schema for the result */
  'vision.export-types.title-zod': 'Экспорт Zod',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vision.functions.add': 'Добавить в запрос',
  /** Shown on a library function the query declares the same way */
  'vision.functions.declared': 'В этом запросе',
  /** Lint action on a call of a library function the query does not declare */
  'vision.functions.editor.add-from-library': 'Объявить её',
  /** Note in a function's hover documentation: the API version it needs */
  'vision.functions.editor.api-version': 'Требуется версия API {{version}} или новее',
  /** Detail of a completion for a custom function the query declares */
  'vision.functions.editor.completion-declared': 'в этом запросе',
  /** Detail of a completion for a library function, which declares it too */
  'vision.functions.editor.completion-library': 'из вашей библиотеки',
  /** Note in the hover documentation of a custom function the query declares */
  'vision.functions.editor.declared-on': 'Пользовательская функция, объявлена в строке {{line}}',
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vision.functions.editor.delta-only':
    "Работает только в режиме delta, где webhook'и и Sanity Functions выполняют свои фильтры",
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vision.functions.editor.extract': 'Извлечь в функцию',
  /** Note in the hover documentation of a library function the query does not declare */
  'vision.functions.editor.in-library': 'В вашей библиотеке функций, не объявлена в этом запросе',
  /** Link at the end of a built-in function's hover documentation */
  'vision.functions.editor.reference': 'Справочник функций GROQ',
  /** Explanation under the library heading in the Functions panel */
  'vision.functions.library.description':
    'Сохраняется в этом браузере для каждого датасета проекта. Автодополнение предлагает эти функции, а линтер предлагает объявить ту, что использует запрос.',
  /** Shown in the Functions panel while the library is empty */
  'vision.functions.library.empty':
    'Сохраните функцию, объявленную в запросе, чтобы использовать её в других запросах.',
  /** Heading of the functions library in the Functions panel */
  'vision.functions.library.title': 'Библиотека',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vision.functions.query.empty':
    'Объявите пользовательские функции в начале запроса или поместите курсор в проекцию, например author->{name}, и нажмите кнопку извлечения над редактором ({{shortcut}}).',
  /** Heading of the functions the query declares in the Functions panel */
  'vision.functions.query.title': 'В этом запросе',
  /** Removes a function from the library */
  'vision.functions.remove': 'Удалить из библиотеки',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vision.functions.replace': 'Заменить в запросе',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vision.functions.reveal': 'Показать {{name}} в редакторе',
  /** Button of a function the query declares that is not in the library yet */
  'vision.functions.save': 'Сохранить в библиотеку',
  /** Shown on a function the query declares the way the library has it */
  'vision.functions.saved': 'Сохранено',
  /** Button of a function the query declares differently from the library's version */
  'vision.functions.update': 'Обновить библиотеку',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vision.generate.button': 'Сгенерировать запрос',
  /** Closes the generate query bar */
  'vision.generate.close': 'Закрыть',
  /** Explanation under the generate query field */
  'vision.generate.description':
    'Sanity Agent Actions пишет GROQ на основе вашего описания и типов документов, а Content Lake проверяет каждую попытку; каждая попытка использует один AI-кредит. Это заменяет запрос в этой вкладке и запускает его; отмена в редакторе возвращает предыдущий запрос.',
  /** Shown when no query could be generated, above the reason */
  'vision.generate.failed': 'Не удалось сгенерировать запрос',
  /** Accessible label of the description field in the generate query bar */
  'vision.generate.label': 'Что должен получить запрос?',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vision.generate.open-anyway': 'Открыть последнюю попытку',
  /** Placeholder of the description field in the generate query bar */
  'vision.generate.placeholder':
    '10 последних авторов, отсортированных по фамилии, а затем по имени',
  /** Shown while the first attempt at a query is written */
  'vision.generate.progress': 'Написание запроса…',
  /** Shown while a rejected attempt is retried */
  'vision.generate.progress-retry': 'Исправление запроса (попытка {{attempt}} из {{max}})…',
  /** Button generating the query */
  'vision.generate.submit': 'Сгенерировать',
  /** Badge on a history entry the API CDN answered */
  'vision.history.cdn': 'API CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vision.history.cdn-cache-hit': 'Попадание в кэш CDN',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vision.history.changed': 'Изменено',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vision.history.changes': 'Изменения',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vision.history.changes-failed': 'Не удалось отобразить изменения.',
  /** Button retrying to show the changes of a history entry */
  'vision.history.changes-retry': 'Повторить',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vision.history.compared-with': 'Сравнивается с запросом в {{time}}',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vision.history.diff.params': 'Параметры',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vision.history.diff.query': 'Запрос',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vision.history.diff.query-formatting-only': 'Изменилось только форматирование',
  /** Label of the diff of the query result in a history entry's changes */
  'vision.history.diff.result': 'Результат',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vision.history.diff.url': 'URL-адрес запроса',
  /** Empty state of the history panel */
  'vision.history.empty': 'Пока ничего не получено',
  /** Status label for a failed fetch in the history */
  'vision.history.failed': 'Ошибка',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vision.history.hide-hidden': 'Скрыть их',
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vision.history.hiding': 'Скрыты поля {{fields}}',
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vision.history.only-hidden-changed': 'Изменились только скрытые поля',
  /** History reason: a tab opened with a generated query fetched it */
  'vision.history.reason.generated': 'Сгенерированный запрос',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vision.history.reason.link': 'Открытая ссылка',
  /** History reason: a live event matched the query's sync tags */
  'vision.history.reason.live': 'Живое обновление',
  /** History reason: the live connection asked every client to refetch */
  'vision.history.reason.live-restart': 'Живое соединение перезапущено',
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vision.history.reason.live-start': 'Запущена живая загрузка',
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vision.history.reason.load': 'Запрос загружен',
  /** History reason: the fetch button was pressed */
  'vision.history.reason.manual': 'Кнопка загрузки',
  /** History reason: mutations were applied from the Mutate panel */
  'vision.history.reason.mutation': 'Применены мутации',
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vision.history.reason.options': 'Параметры изменены',
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vision.history.reason.paste': 'Вставленный URL-адрес',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vision.history.reason.resume': 'Автоматическое повторное получение данных возобновлено',
  /** History reason: the keyboard shortcut was used */
  'vision.history.reason.shortcut': 'Сочетание клавиш',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vision.history.same-result': 'Такой же результат',
  /** Button showing the hidden fields in a history entry's changes */
  'vision.history.show-hidden': 'Показать их',
  /** Next to a history entry's changes while the hidden fields are shown */
  'vision.history.showing-hidden': 'Показаны {{fields}}, скрытые по умолчанию',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vision.history.too-large': 'Слишком большой для сравнения',
  /** A history entry whose result is the same as the previous result */
  'vision.history.unchanged': 'Без изменений',
  /** Shown in the Lint panel while the query has no lint findings */
  'vision.lint.empty':
    'Нет результатов линтинга. Проблемы, обнаруженные GROQ-линтером в запросе, отображаются здесь по мере ввода; выберите одну из них, чтобы выделить её в редакторе.',
  /** Where a lint finding sits in the query, shown under its message */
  'vision.lint.position': 'Строка {{line}}, столбец {{column}}',
  /** Severity badge of a lint finding */
  'vision.lint.severity.error': 'Ошибка',
  /** Severity badge of a lint finding */
  'vision.lint.severity.hint': 'Подсказка',
  /** Severity badge of a lint finding */
  'vision.lint.severity.info': 'Информация',
  /** Severity badge of a lint finding */
  'vision.lint.severity.warning': 'Предупреждение',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vision.lint.use-suggestion': 'Использовать {{suggestion}}',
  /** Badge shown while a tab refetches automatically */
  'vision.live.active': 'Активно',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vision.live.button': 'Живое получение данных',
  /** Tooltip of the Live button while automatic refetching is off */
  'vision.live.button.start':
    'Получить данные, затем получать их снова при каждом изменении документов в результате',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vision.live.button.stop':
    'Остановить получение данных при изменении документов в результате. Получение по запросу по-прежнему работает для результатов, которые не затрагиваются изменением документов, например now()',
  /** Error shown when the live connection breaks */
  'vision.live.error': 'Живые обновления отключены: {{message}}',
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vision.live.stop': 'Остановить живое обновление',
  /** Button in the Mutate panel adding a mutation to the list */
  'vision.mutate.add': 'Добавить мутацию',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vision.mutate.add.create': 'Создать документ',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vision.mutate.add.delete': 'Удалить документ',
  /** Adds a mutation deleting the documents of the shown result */
  'vision.mutate.add.delete-result': 'Удалить документы в результате',
  /** Adds a mutation patching a document, its ID to fill in */
  'vision.mutate.add.patch': 'Изменить документ',
  /** Adds a mutation patching the documents of the shown result */
  'vision.mutate.add.patch-result': 'Исправить документы в результате',
  /** Button applying the mutations a dry run showed */
  'vision.mutate.apply': 'Применить к {{dataset}}',
  /** Heading of the error shown when applying the mutations failed */
  'vision.mutate.apply-failed': 'Мутации не были применены',
  /** Next to Apply while the mutations as they are have had no dry run */
  'vision.mutate.apply-needs-preview':
    'Применение отправляет то, что показал пробный запуск: сначала запустите его.',
  /** Option giving array items without a _key one */
  'vision.mutate.auto-keys': 'Добавить _key к элементам массива, у которых его нет',
  /** Under the option giving array items a _key */
  'vision.mutate.auto-keys.description':
    'Студии нужен _key на каждом элементе массива, чтобы редактировать его.',
  /** Button showing a document's changes in the dry run */
  'vision.mutate.changes': 'Изменения',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vision.mutate.changes-failed': 'Не удалось показать изменения.',
  /** Button retrying to show a document's changes */
  'vision.mutate.changes-retry': 'Повторить',
  /** What the Mutate panel does */
  'vision.mutate.description':
    'Пишите мутации так, как их принимает Mutations API, в виде списка: create, createOrReplace, createIfNotExists, delete и patch, по ID или по GROQ-запросу. Пробный запуск показывает, что они сделают с каждым документом, ничего не меняя; затем «Применить» записывает их в набор данных одной транзакцией, от имени вашей учётной записи.',
  /** What the API says went wrong with one of the mutations */
  'vision.mutate.failure-item': 'Мутация {{index}}: {{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vision.mutate.generate.button': 'Сгенерировать мутации',
  /** Explanation under the generate mutations field */
  'vision.mutate.generate.description':
    'Sanity Agent Actions пишут мутации на основе вашего описания, документов в результате и их типов, а пробный запуск проверяет каждую попытку; каждая попытка использует один кредит ИИ. Они заменяют мутации здесь, где отмена возвращает их обратно; ничего не записывается, пока вы не примените их.',
  /** Shown when no mutations could be generated, above the reason */
  'vision.mutate.generate.failed': 'Не удалось сгенерировать мутации',
  /** Accessible label of the description field in the generate mutations bar */
  'vision.mutate.generate.label': 'Что должны делать мутации?',
  /** Placeholder of the description field in the generate mutations bar */
  'vision.mutate.generate.placeholder': 'Изменить заголовок документов в результате на foobar',
  /** Shown while the first attempt at the mutations is written */
  'vision.mutate.generate.progress': 'Запись мутаций…',
  /** Shown while an attempt the dry run turned down is retried */
  'vision.mutate.generate.progress-retry': 'Исправление мутаций (попытка {{attempt}} из {{max}})…',
  /** Under the dry run: the fields the diffs leave out */
  'vision.mutate.hiding': 'В изменениях не учитываются {{fields}}, как и в Истории.',
  /** Shown when the mutations are not valid JSON */
  'vision.mutate.invalid-json': 'Мутации не являются допустимым JSON: {{message}}',
  /** Shown when a mutation does not name exactly one thing to do */
  'vision.mutate.invalid-mutation':
    'Мутации {{index}} требуется ровно одно из: create, createOrReplace, createIfNotExists, delete или patch.',
  /** Label of the mutations editor */
  'vision.mutate.mutations': 'Мутации',
  /** The dry run touched no documents */
  'vision.mutate.no-documents': 'Мутации не затрагивают ни одного документа.',
  /** Shown when the JSON is not a list of mutations */
  'vision.mutate.not-a-list':
    'Напишите список мутаций, одну мутацию или тело запроса со списком мутаций.',
  /** A document the mutations create */
  'vision.mutate.operation.create': 'Создать',
  /** A document the mutations delete */
  'vision.mutate.operation.delete': 'Удалить',
  /** A document the mutations touch without changing its content */
  'vision.mutate.operation.none': 'Без изменений',
  /** A document the mutations change */
  'vision.mutate.operation.update': 'Обновить',
  /** Button running the mutations as a dry run */
  'vision.mutate.preview': 'Пробный запуск',
  /** Heading of the error shown when the dry run failed */
  'vision.mutate.preview-failed': 'Пробный запуск завершился неудачей',
  /** Heading of the dry run's outcome */
  'vision.mutate.preview-heading': 'Пробный запуск',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vision.mutate.stale':
    'Мутации, dataset или параметры изменились после этого пробного запуска. Запустите его снова, чтобы применить изменения.',
  /** How many documents the dry run changes and leaves as they are */
  'vision.mutate.summary': 'Изменено: {{changed}} · Без изменений: {{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vision.network.cache': 'Кэш',
  /** The API CDN answered from its cache */
  'vision.network.cache.hit': 'Попадание',
  /** Under the details of a CDN cache hit */
  'vision.network.cache.hit-explained':
    'CDN ответил кэшированным ответом из расположения рядом с вами; запрос не достиг API.',
  /** The API CDN answered with a response this session had not seen */
  'vision.network.cache.miss': 'Промах, насколько можно судить в этой сессии',
  /** The API answered, which caches nothing */
  'vision.network.cache.none': 'Нет, API отвечает на каждый запрос свежим содержимым',
  /** Shown in the Network panel while there is no response */
  'vision.network.empty':
    'Выполните запрос, чтобы увидеть, какая конечная точка на него ответила, был ли это кэш, и где он выполнялся.',
  /** In the Network panel: the endpoint that answered */
  'vision.network.endpoint': 'Ответил',
  /** The live API answered */
  'vision.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vision.network.endpoint.cdn': 'API CDN',
  /** In the Network panel: the HTTP method the query was sent with */
  'vision.network.method': 'Метод',
  /** The query and its params went in the URL */
  'vision.network.method.get': 'GET, с запросом и параметрами в URL',
  /** The query and its params went in the request body */
  'vision.network.method.post': 'POST, с запросом и параметрами в теле JSON',
  /** Under the method of a POST request: why the query was not sent in the URL */
  'vision.network.method.post-explained':
    'Запрос и параметры занимают {{size}} символов в качестве параметров поиска; начиная с {{limit}}, @sanity/client отправляет их как тело JSON, поскольку API ограничивает длину URL. Опции остаются в URL.',
  /** In the Network panel: the region the query ran in */
  'vision.network.region': 'Запрос выполнен в',
  /** The response did not say where the query ran */
  'vision.network.region.unknown': 'Не указано',
  /** In the Network panel: the round trip and the time on the server */
  'vision.network.timing': 'Время',
  /** The round trip and the server's time for the query, in milliseconds */
  'vision.network.timing.value': '{{e2e}}мс полный цикл, {{server}}мс на сервере',
  /** In the Network panel: the trace of the request, for Sanity support */
  'vision.network.trace': 'ID трассировки',
  /** Hint in the Network panel while queries go to the API */
  'vision.network.use-cdn-hint':
    'Включите «Использовать API CDN» в настройках, чтобы отправлять запросы через CDN.',
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vision.network.you': 'Вы',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vision.options.dataset.follows-workspace': 'Следует за рабочей областью',
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vision.options.dataset.pin': 'Закрепить набор данных',
  /** Hint under the dataset field while a dataset is pinned */
  'vision.options.dataset.pinned':
    'Закреплено; рабочая область может использовать другой набор данных',
  /** Button that makes the tab follow the workspace's dataset again */
  'vision.options.dataset.use-workspace': 'Использовать набор данных рабочей области',
  /** Label for the "Include content source map" switch */
  'vision.options.include-source-map': 'Включить карту источников контента',
  /** Description for the "Include content source map" switch */
  'vision.options.include-source-map.description':
    'Добавляет resultSourceMap в ответ, отображается на вкладке Content Source Map.',
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vision.options.perspective.global': 'Глобальная ({{name}})',
  /** Label of the switch that sends queries to the API CDN */
  'vision.options.use-cdn': 'Использовать API CDN',
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vision.options.use-cdn.anonymous':
    'Эта студия выполняет вход с помощью cookie, которое API CDN никогда не получает: он отвечает так, как ответил бы анонимному посетителю, показывая то, что отображается в публичном наборе данных.',
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vision.options.use-cdn.blocked':
    'API CDN не обслуживает черновики или релизы, поэтому запросы с перспективой {{perspective}} отправляются в API. С опубликованной или raw-перспективой они используют CDN.',
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vision.options.use-cdn.blocked.title': 'Запросы отправляются в API, а не в CDN',
  /** Description of the API CDN switch */
  'vision.options.use-cdn.description':
    'Отправляет запрос в API CDN, аналогично useCdn: true в @sanity/client, с опубликованной и raw-перспективами: черновики и релизы всегда отправляются в API. Ответы кэшируются на срок до одной минуты; панель сети показывает, когда ответ пришёл из кэша.',
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vision.options.use-cdn.use-published': 'Использовать опубликованную перспективу',
  /** Label of the variant field */
  'vision.options.variant-label': 'Вариант',
  /** Variant option sending the navbar's variant, named */
  'vision.options.variant.global': 'Глобальный ({{name}})',
  /** Variant option sending the navbar's variant while none is selected there */
  'vision.options.variant.global-none': 'Глобальный (ничего не выбрано)',
  /** Variant option sending no variant */
  'vision.options.variant.none': 'Нет',
  /** Accessible label for collapsing a bottom panel */
  'vision.panel.collapse': 'Свернуть панель',
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vision.panel.delta': 'Delta',
  /** Accessible label for expanding a bottom panel */
  'vision.panel.expand': 'Развернуть панель',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vision.panel.explain': 'Пояснение',
  /** Label of the Functions tab in the response panel */
  'vision.panel.functions': 'Функции',
  /** Label of the "History" tab in the response panel */
  'vision.panel.history': 'История',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vision.panel.lint': 'Линт',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vision.panel.mutate': 'Изменение',
  /** Label of the Network tab in the response panel */
  'vision.panel.network': 'Сеть',
  /** Label of the "Options" panel in the request column */
  'vision.panel.options': 'Опции',
  /** Label of the "Response" tab in the response panel */
  'vision.panel.response': 'Ответ',
  /** Label of the "Content Source Map" tab in the response panel */
  'vision.panel.source-map': 'Карта источников контента',
  /** Button adding an item to a list param in the params form */
  'vision.params-form.add-item': 'Добавить элемент',
  /** Placeholder of a params form field that takes any JSON value */
  'vision.params-form.any-placeholder':
    'Любое значение JSON; остальной текст отправляется как строка',
  /** Shown in the params form when the query uses no params */
  'vision.params-form.empty':
    'Запрос не использует параметры. Каждый $name в нём получает здесь поле.',
  /** Shown in the params form while the params JSON cannot be parsed */
  'vision.params-form.invalid-json':
    'Параметры не являются корректным JSON. Исправьте их в представлении JSON, чтобы редактировать здесь.',
  /** A boolean param's value is not true or false; it is sent anyway */
  'vision.params-form.invalid.boolean': 'Не true и не false; отправлено как {{value}}',
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vision.params-form.invalid.document-type':
    'Не тип документа в этом рабочем пространстве; всё равно отправлено',
  /** A whole number param (a slice bound) holds a fraction */
  'vision.params-form.invalid.integer': 'Не целое число, которое требуется для срезов',
  /** A list param's value is not a list; it is sent anyway */
  'vision.params-form.invalid.list': 'Не список; отправлено как {{value}}',
  /** A number param's value is not a number; it is sent anyway */
  'vision.params-form.invalid.number': 'Не число; отправлено как текст',
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vision.params-form.invalid.option': 'Не одно из известных значений; всё равно отправлено',
  /** A text param's value is not text; it is sent anyway */
  'vision.params-form.invalid.string': 'Не текст; отправлено как {{value}}',
  /** Accessible label of an item input of a list param in the params form */
  'vision.params-form.item-label': '${{name}}, элемент {{index}}',
  /** Placeholder of an item input of a list param in the params form */
  'vision.params-form.item-placeholder': 'Элемент',
  /** Under a params form field whose param has no value */
  'vision.params-form.missing': 'Не задано: запрос не выполнится, пока не будет значения',
  /** Shown in the params form when the workspace schema could not be read */
  'vision.params-form.no-schema':
    'Типы определяются только из запроса: схему рабочего пространства не удалось прочитать.',
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vision.params-form.not-set': 'Не задано',
  /** Button setting a date and time param to the current time */
  'vision.params-form.now': 'Сейчас',
  /** Button removing a param the query does not use from the params */
  'vision.params-form.remove': 'Удалить',
  /** Accessible label of the button removing an item from a list param */
  'vision.params-form.remove-item': 'Удалить элемент',
  /** Shown in the params form when the query does not parse */
  'vision.params-form.syntax-error':
    'Запрос не распознан, поэтому его параметры перечислены без типов.',
  /** Type hint of a params form field: any JSON value */
  'vision.params-form.type.any': 'любое значение JSON',
  /** Type hint of a params form field: true or false */
  'vision.params-form.type.boolean': 'true или false',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vision.params-form.type.datetime': 'дата и время (ISO 8601)',
  /** Type hint of a params form field: a document ID */
  'vision.params-form.type.document-id': 'ID документа',
  /** Type hint of a params form field: one of the workspace's document types */
  'vision.params-form.type.document-type': 'тип документа',
  /** Type hint of a params form field: a whole number */
  'vision.params-form.type.integer': 'целое число',
  /** Type hint of a params form field: a list of values */
  'vision.params-form.type.list': 'список, каждый {{type}}',
  /** Type hint of a params form field: a number */
  'vision.params-form.type.number': 'число',
  /** Type hint of a params form field: text */
  'vision.params-form.type.string': 'текст',
  /** Heading of the params the query does not use, listed in the params form */
  'vision.params-form.unused': 'Не используется в запросе',
  /** Before the expressions that use a param, in the params form */
  'vision.params-form.used-in': 'Используется в',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vision.params.fit-height': 'По размеру содержимого, {{height}} пикселей',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vision.params.resize':
    'Изменить размер параметров: перетащите или используйте клавиши со стрелками; дважды щёлкните или нажмите Enter, чтобы снова подогнать по содержимому',
  /** Tab showing the params as a form inferred from the query */
  'vision.params.view.form': 'Форма',
  /** Tab showing the params as JSON */
  'vision.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vision.params.view.label': 'Редактировать параметры как',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vision.paste.parsed': 'Запрос загружен из вставленного URL',
  /** Toast shown after a curl command for a query was pasted and loaded into the tab */
  'vision.paste.parsed-curl': 'Запрос загружен из вставленной команды cURL',
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vision.paste.unavailable-variant':
    'Вставленный URL использовал вариант «{{variant}}»; выберите его в панели навигации, чтобы выполнить запрос с ним.',
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vision.paste.unknown-dataset':
    'Набор данных «{{dataset}}» из вставленного URL здесь недоступен, сохранён текущий.',
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vision.paste.unsupported-perspective':
    'Перспектива из вставленного URL здесь не поддерживается, сохранена текущая.',
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vision.paste.variants-disabled':
    'Вставленный URL использовал вариант «{{variant}}»; в этом рабочем пространстве варианты отключены, поэтому запрос выполняется без него.',
  /** Accessible label for the query actions menu */
  'vision.query.actions': 'Действия с запросом',
  /** Tooltip when automatic refetching is not available for the API version */
  'vision.query.auto-refetch.unsupported':
    'Для автоматического повторного запроса требуется версия API v2021-03-25 или новее.',
  /** Toast shown after the query was copied */
  'vision.query.copied': 'Запрос скопирован в буфер обмена',
  /** Menu item copying the query text */
  'vision.query.copy': 'Копировать запрос',
  /** Menu item opening the export query dialog */
  'vision.query.export': 'Экспортировать запрос…',
  /** Menu item reformatting the query */
  'vision.query.prettify': 'Форматировать запрос',
  /** Toast shown when the query could not be reformatted */
  'vision.query.prettify.failed': 'Не удалось отформатировать запрос',
  /** Menu item saving the query to the personal saved queries */
  'vision.query.save': 'Сохранить запрос',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vision.query.stop': 'Остановить',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vision.query.stop.description': 'Остановить выполнение запроса',
  /** Explanation in the settings section about the redesigned experience */
  'vision.redesign.settings.description':
    'Вы используете обновлённую версию инструмента Vision. При переключении обратно ваши вкладки и настройки сохранятся в этом браузере на случай, если вы захотите попробовать снова.',
  /** Title of the settings section about the redesigned experience */
  'vision.redesign.settings.title': 'Обновлённый Vision (бета)',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vision.redesign.switch-to-classic': 'Переключиться на классический Vision',
  /** Toast button that switches to the redesigned tool */
  'vision.redesign.toast.accept': 'Попробовать сейчас',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vision.redesign.toast.description':
    'Вкладки запросов, автоматическое обновление в реальном времени, подробности ответа и экспорт. Вы можете вернуться обратно в любой момент.',
  /** Toast button that hides the invitation */
  'vision.redesign.toast.dismiss': 'Не сейчас',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vision.redesign.toast.title': 'Попробуйте обновлённый Vision',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vision.redesign.try': 'Попробовать обновлённую версию',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vision.redesign.try.description':
    'Переключитесь на обновлённую версию Vision (бета). Вы можете вернуться обратно в любой момент через боковую панель.',
  /** Empty state of the response panel before anything was fetched */
  'vision.response.empty': 'Пока ничего не получено',
  /** Label for the payload size in the response tab */
  'vision.response.payload-size': 'Размер полезной нагрузки',
  /** Label for the sync tags in the response tab */
  'vision.response.sync-tags': 'Теги синхронизации',
  /** Shown when the response carried no sync tags */
  'vision.response.sync-tags.none': 'В ответе нет тегов синхронизации',
  /** Under the query URL when the request went out as a POST body rather than that URL */
  'vision.response.url.sent-as-post':
    'Отправлено как тело POST-запроса: запрос и параметры слишком длинные для URL, поэтому @sanity/client отправил их в формате JSON. Вставка этого URL в Vision всё равно загрузит запрос.',
  /** Accessible label for the result actions menu */
  'vision.result.actions': 'Действия с результатом',
  /** Toast shown after the result was copied */
  'vision.result.copied': 'Результат скопирован в буфер обмена',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vision.result.copied-value': 'Скопировано {{path}}',
  /** Menu item and button copying the result as JSON */
  'vision.result.copy': 'Копировать результат',
  /** Button next to each property in the result tree, copying its value */
  'vision.result.copy-value': 'Копировать значение',
  /** Empty state of the result view */
  'vision.result.empty': 'Запустите запрос, чтобы увидеть результат здесь',
  /** Button exporting the result as CSV */
  'vision.result.export-csv': 'Экспорт CSV',
  /** Button exporting the result as JSON */
  'vision.result.export-json': 'Экспорт JSON',
  /** Menu item opening the TypeScript export dialog */
  'vision.result.export-typescript': 'Экспорт TypeScript…',
  /** Menu item opening the Zod export dialog */
  'vision.result.export-zod': 'Экспорт Zod…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vision.result.graph.collapse': 'Скрыть содержимое',
  /** Button fitting the whole graph in view */
  'vision.result.graph.fit': 'Вместить в экран',
  /** Accessible label of the graph, saying how to move around in it */
  'vision.result.graph.label':
    'Граф результата: перетащите для перемещения, прокрутите для масштабирования; в фокусе стрелки перемещают, + и - масштабируют, 0 вмещает в экран',
  /** Ends the note on a graph that leaves part of this result out */
  'vision.result.graph.left-out-hint': 'Все данные показаны в представлениях «Дерево» и «JSON».',
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vision.result.graph.node-limit': 'Отображаются только первые {{nodes}} объектов и массивов.',
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vision.result.graph.partial': 'Для {{nodes}} показаны только первые {{rows}} записей.',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vision.result.graph.partial.node': '{{name}} ({{entries}} записей)',
  /** Title of the graph node of the result itself */
  'vision.result.graph.root': 'результат',
  /** Button zooming into the graph */
  'vision.result.graph.zoom-in': 'Увеличить',
  /** Button zooming out of the graph */
  'vision.result.graph.zoom-out': 'Уменьшить',
  /** Tab showing the result as a graph of its objects and arrays */
  'vision.result.view.graph': 'Граф',
  /** Tab showing the result as indented JSON text, to select and copy from */
  'vision.result.view.json': 'JSON',
  /** Accessible label of the tabs that switch how the result shows */
  'vision.result.view.label': 'Представление результата',
  /** Tab showing the result as a tree to browse */
  'vision.result.view.tree': 'Дерево',
  /** Empty state of the saved queries panel */
  'vision.saved.empty':
    'Пока нет сохранённых запросов. Сохраните текущий запрос с помощью кнопки +.',
  /** Empty state of a query list when the search matches nothing */
  'vision.saved.empty-search': 'Нет запросов, соответствующих вашему поиску',
  /** Menu item loading a saved query into the active tab */
  'vision.saved.load-in-current-tab': 'Загрузить в текущую вкладку',
  /** Menu item opening a saved query in a new tab */
  'vision.saved.open-in-new-tab': 'Открыть в новой вкладке',
  /** Menu item renaming a saved query */
  'vision.saved.rename': 'Переименовать',
  /** Accessible label for the button saving the current query */
  'vision.saved.save-current': 'Сохранить текущий запрос',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vision.saved.unavailable-variant':
    'В этом сохранённом запросе использовался вариант «{{variant}}»; выберите его на панели навигации, чтобы выполнить запрос с ним.',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vision.saved.unknown-dataset':
    'Набор данных «{{dataset}}» этого сохранённого запроса здесь недоступен, оставлен текущий.',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vision.saved.variants-disabled':
    'В этом сохранённом запросе использовался вариант «{{variant}}»; в этом рабочем пространстве варианты отключены, поэтому запрос выполняется без него.',
  /** Button in the settings dialog that clears the stored state */
  'vision.settings.clear-storage': 'Очистить хранилище',
  /** Confirmation button for clearing the storage */
  'vision.settings.clear-storage.confirm': 'Да, очистить хранилище',
  /** Explanation of what clearing the storage does */
  'vision.settings.clear-storage.description':
    'Удаляет ваши личные сохранённые запросы и библиотеку функций, сбрасывает открытые вкладки и эти настройки по умолчанию в этом браузере, а также возвращает к классическому инструменту Vision. Общие запросы сохраняются.',
  /** Toast shown when the saved queries could not be cleared */
  'vision.settings.clear-storage.error': 'Не удалось очистить сохранённые запросы',
  /** Toast shown after the storage was cleared */
  'vision.settings.clear-storage.success': 'Хранилище очищено',
  /** Explanation at the top of the settings dialog */
  'vision.settings.description':
    'Значения по умолчанию для новых вкладок. Открытые вкладки сохраняют свои собственные настройки.',
  /** Explains the setting listing the fields left out of History diffs */
  'vision.settings.history-diff.description':
    'По одному пути поля на строку. Путь совпадает на любой глубине результата, поэтому _rev скрывает редакцию каждого документа в нём. Каждое различие всё равно может их показывать.',
  /** Button restoring the default fields left out of History diffs */
  'vision.settings.history-diff.reset': 'Сбросить к значениям по умолчанию',
  /** Label of the setting listing the fields left out of History diffs */
  'vision.settings.history-diff.title': 'Поля, скрытые из различий Истории',
  /** Title of the settings dialog */
  'vision.settings.title': 'Настройки',
  /** Empty state of the shared queries panel */
  'vision.shared.empty':
    'Пока нет общих запросов. Поделитесь сохранённым запросом, чтобы сделать его доступным для всех, использующих этот набор данных.',
  /** Shortcut description: close dialogs and menus */
  'vision.shortcuts.close': 'Закрыть диалоги и меню',
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vision.shortcuts.complete': 'Завершить имя функции',
  /** Shortcut description: copy the query */
  'vision.shortcuts.copy-query': 'Скопировать запрос',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vision.shortcuts.extract-function': 'Извлечь проекцию под курсором в функцию',
  /** Shortcut description: run the query */
  'vision.shortcuts.fetch': 'Выполнить запрос',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vision.shortcuts.next-finding': 'Перейти к следующему результату проверки',
  /** Shortcut description: reformat the query */
  'vision.shortcuts.prettify': 'Форматировать запрос',
  /** Title of the keyboard shortcuts dialog */
  'vision.shortcuts.title': 'Горячие клавиши',
  /** Sidebar toggle: show icons only */
  'vision.sidebar.collapse': 'Свернуть боковую панель',
  /** Sidebar toggle: show labels next to the icons */
  'vision.sidebar.expand': 'Развернуть боковую панель',
  /** Accessible label for the sidebar navigation */
  'vision.sidebar.label': 'Боковая панель Vision',
  /** Sidebar item and drawer title for personal saved queries */
  'vision.sidebar.saved-queries': 'Сохранённые запросы',
  /** Sidebar item opening the settings dialog */
  'vision.sidebar.settings': 'Настройки',
  /** Sidebar item and drawer title for shared queries */
  'vision.sidebar.shared-queries': 'Общие запросы',
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vision.sidebar.shortcuts': 'Горячие клавиши',
  /** Empty state of the content source map panel */
  'vision.source-map.empty':
    'В ответе нет карты источников контента. Включите «Включить карту источников контента» в разделе «Параметры» и повторите запрос.',
  /** Accessible label of the divider between the result and the response details panel */
  'vision.split.bottom-panel':
    'Измените размер панели сведений об ответе: перетащите или используйте клавиши со стрелками; Home и End — к границам, Enter — сброс',
  /** Accessible label of the divider between the request and response panes */
  'vision.split.request-response':
    'Измените размер панелей запроса и ответа: перетащите или используйте клавиши со стрелками; Home и End — к границам, Enter — сброс',
  /** Accessible label for the button closing a query tab */
  'vision.tabs.close-tab': 'Закрыть вкладку',
  /** Accessible label for the list of query tabs */
  'vision.tabs.label': 'Вкладки запросов',
  /** Accessible label for the button opening a new query tab */
  'vision.tabs.new-tab': 'Новая вкладка',
  /** Placeholder of the input renaming a tab */
  'vision.tabs.title-placeholder': 'Название вкладки',
  /** Title of a tab whose query is still empty */
  'vision.tabs.untitled': 'Безымянный запрос',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vision.webmcp.check-query': 'Проверить GROQ-запрос в Vision',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vision.webmcp.describe-schema': 'Описать схему в Vision',
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vision.webmcp.explain-query': 'Объяснить GROQ-запрос в Vision',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vision.webmcp.get-state': 'Прочитать открытую вкладку Vision',
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vision.webmcp.open-query': 'Открыть GROQ-запрос в Vision',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vision.webmcp.preview-mutations': 'Просмотреть мутации в Vision',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vision.webmcp.run-query': 'Выполнить GROQ-запрос в Vision',
})
