import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Скопіювати в буфер обміну',
  /** Label for deleting a query */
  'action.delete': 'Видалити',
  /** Label for editing a query's title */
  'action.edit-title': 'Редагувати назву',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Зупинити',
  /** Label for setting up a listener */
  'action.listen-execute': 'Слухати',
  /** Label for query loading table */
  'action.load-queries': 'Завантажити запити',
  /** Label for loading a query */
  'action.load-query': 'Завантажити запит',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Скасувати',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Отримати',
  /** Label for saving a query */
  'action.save-personal-copy': 'Зберегти особисту копію',
  /** Label for saving a personal query */
  'action.save-personal-query': 'Зберегти як особистий',
  /** Label for saving a query */
  'action.save-query': 'Зберегти запит',
  /** Label for saving a shared query */
  'action.save-shared-query': 'Зберегти як спільний',
  /** Label for unsharing a query */
  'action.unshare': 'Скасувати спільний доступ',
  /** Label for updating a query */
  'action.update': 'Оновити',

  /** Label for actions user can take */
  'label.actions': 'Дії',
  /** Label for all saved queries */
  'label.all': 'Усі',
  /** Label for saved queries that have been edited */
  'label.edited': 'Відредаговано',
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Нове',
  /** Label for query type "personal" */
  'label.personal': 'Особистий',
  /** Label for savedAt date */
  'label.saved-at': 'Збережено о',
  /** Saved queries */
  'label.saved-queries': 'Збережені запити',
  /** Search queries */
  'label.search-queries': 'Пошук запитів',
  /** Share query */
  'label.share': 'Поділитися',
  /** Label for query type "shared" */
  'label.shared': 'Спільні',
  /** Label for saved query type "team" */
  'label.team': 'Команда',
  /** Label for untitled query fallback */
  'label.untitled-query': 'Без назви',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'Параметри не є дійсним JSON',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Параметри',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Стовпець',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Лінія',
  /** Extra explanation when a 400 is returned for a release perspective on an old API version */
  'query.error.unsupported-release-perspective':
    'Ця версія API не підтримує складні перспективи. Використовуйте {{apiVersion}} або новішу версію.',
  /** Extra explanation when a 400 is returned for a variant on an incompatible API version */
  'query.error.unsupported-variant':
    'Ця версія API не підтримує варіанти контенту. Використовуйте експериментальну версію API ({{apiVersion}}).',
  /** Label for "Query" editor/input */
  'query.label': 'Запит',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'URL запиту',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'Кінець-до-кінця',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'Виконання',
  /** Label for "Result" explorer/view */
  'result.label': 'Результат',
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable': 'Результат не може бути закодований як CSV',
  /** Label for "Save result as" result action */
  'result.save-result-as-format': 'Зберегти результат як <SaveResultButtons/>',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'не застосовно',

  /** Query already saved error label */
  'save-query.already-saved': 'Запит вже збережено',
  /** Save error label */
  'save-query.error': 'Помилка збереження запиту',
  /** Save personal copy success label */
  'save-query.personal-copy-success': 'Особисту копію збережено',
  /** Warning displayed before sharing a query */
  'save-query.share-warning':
    'Спільні запити зберігаються як документи у вашому dataset і враховуються в межах вашої квоти на документи.',
  /** Save shared query success label */
  'save-query.shared-success': 'Спільний запит збережено',
  /** Save success label */
  'save-query.success': 'Запит збережено',
  /** Save unshared query success label */
  'save-query.unshared-success': 'Запит переміщено до особистих',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'Версія API',
  /** Tooltip shown when the API version selector is locked to vX because a variant is selected */
  'settings.api-version-locked-for-variant': 'Якщо вибрано варіант, версія API повинна бути vX.',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'Спеціальна версія API',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Dataset',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'Недійсна версія API',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'Інше',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspective',
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    'Перспектива "<code>previewDrafts</code>" була перейменована на "<code>drafts</code>" і тепер є застарілою. Ця зміна стосується всіх версій з підтримкою перспективи (>= v2021-03-25).',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Читати документацію',
  /** Option for selecting default perspective */
  'settings.perspectives.default': 'Без перспективи (за замовчуванням API)',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Perspectives дозволяють вашому запиту працювати з різними "видами" контенту у вашому dataset',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    'Перспектива за замовчуванням зміниться з "<code>raw</code>" на "<code>published</code>" у майбутній версії API. Будь ласка, зверніться до документації за додатковою інформацією.',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': 'Закріплений реліз',
  /** Label for the scheduled drafts perspective */
  'settings.perspectives.scheduled-drafts': 'Заплановані чернетки',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspectives',

  /** Tooltip line of every control that calls Sanity Agent Actions, which bills AI credits */
  'vista.agent-actions.credits': 'Використовує один AI-кредит на запит',
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vista.ai-credits.balance': '{{balance}} з {{quota}} AI-кредитів залишилося цього місяця.',
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vista.ai-credits.deficit':
    'Цього місяця використано {{used}} AI-кредитів, що на {{deficit}} більше, ніж включено в план ({{quota}}).',
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vista.ai-credits.limit.description':
    'Ваша організація використала {{used}} із {{quota}} AI-кредитів цього місяця, тому дії Sanity Agent Actions призупинено до наступного місяця або до підвищення ліміту витрат.',
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vista.ai-credits.limit.description-unknown':
    'Ваша організація досягла ліміту витрат на AI-кредити, тому дії Sanity Agent Actions призупинено до наступного місяця або до підвищення ліміту.',
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vista.ai-credits.limit.learn-more': 'Як працюють AI-кредити',
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vista.ai-credits.limit.manage': 'Керувати AI-кредитами',
  /** Title of the card shown where the organization is out of AI credits */
  'vista.ai-credits.limit.title': 'AI-кредити вичерпано',
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vista.ai-credits.usage': 'Використання AI',
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vista.ai-credits.used': 'Цього місяця використано {{used}} AI-кредитів.',
  /** Button in the request column's action bar naming the API version requests go out with */
  'vista.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vista.api-version.button-cdn': 'API CDN {{version}}',
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vista.api-version.button-invalid': 'Незавершена версія API',
  /** Tooltip of the API version button */
  'vista.api-version.tooltip':
    'Запити виконуються до версії API {{version}}. Виберіть, щоб змінити це в Параметрах.',
  /** Tooltip of the API version button while queries go through the API CDN */
  'vista.api-version.tooltip-cdn':
    'Запити виконуються через API CDN з версією API {{version}}. Виберіть, щоб змінити це в Параметрах.',
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vista.api-version.tooltip-cdn-blocked':
    'Запити виконуються до API з версією {{version}}, а не через API CDN: він не обслуговує перспективу {{perspective}}. Виберіть, щоб змінити це в Параметрах.',
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vista.api-version.tooltip-invalid':
    'Версія API в Параметрах незавершена, тому нічого неможливо отримати, доки вона не буде завершена.',
  /** Tooltip of the API version button while a selected variant forces the experimental API */
  'vista.api-version.tooltip-locked':
    'Запити виконуються до версії API {{version}}, яка потрібна для вибраного варіанту.',
  /** Label of the document after the change in the Delta panel */
  'vista.delta.after': 'Після',
  /** Label of the document before the change in the Delta panel */
  'vista.delta.before': 'До',
  /** What the Delta panel does */
  'vista.delta.description':
    'Виконує запит у режимі delta, так само як це роблять вебхуки на GROQ, слухачі та Sanity Functions: before() і after() — це документ до та після зміни, @ — документ після неї, а delta::changedAny() порівнює їх. Виконується в браузері за допомогою groq-js. Порожня сторона означає відсутність документа: зміна створює або видаляє його.',
  /** Label of the document ID field in the Delta panel */
  'vista.delta.document-id': 'ID документа',
  /** Shown when there is a query but no documents to compare */
  'vista.delta.empty':
    'Завантажте історію документа або напишіть документи в поля «До» та «Після».',
  /** Shown when the query fails in delta mode */
  'vista.delta.failed': 'Не вдалося виконати запит у режимі delta: {{message}}',
  /** Shown when the After document is not valid JSON */
  'vista.delta.invalid-after': 'Поле «Після» не є дійсним JSON: {{message}}',
  /** Shown when the Before document is not valid JSON */
  'vista.delta.invalid-before': 'Before не є дійсним JSON: {{message}}',
  /** Button loading the document's revisions from the History API */
  'vista.delta.load': 'Завантажити історію',
  /** Shown when the history could not be loaded */
  'vista.delta.load-failed': 'Не вдалося завантажити історію: {{message}}',
  /** A delta filter that is true for the change */
  'vista.delta.matches': 'Збігається: webhook або функція з цим фільтром спрацює для цієї зміни.',
  /** A delta filter that is false for the change */
  'vista.delta.no-match':
    'Не збігається: webhook або функція з цим фільтром не спрацює для цієї зміни.',
  /** Shown while the query or its params cannot be sent */
  'vista.delta.no-request': 'Виправте запит та його параметри, щоб виконати його в режимі delta.',
  /** Heading of the delta result */
  'vista.delta.result': 'Результат',
  /** The After choice for a change that deletes the document */
  'vista.delta.revision.none-after': 'Нічого: ця зміна видаляє документ',
  /** The Before choice for a change that creates the document */
  'vista.delta.revision.none-before': 'Нічого: ця зміна створює документ',
  /** A revision in the Before and After lists */
  'vista.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vista.drawer.close': 'Закрити панель',
  /** Explanation at the top of the Explain panel */
  'vista.explain.description':
    'План запиту — це спосіб, яким Content Lake виконує запит: що він читає, фільтрує та сортує під час читання, і що залишається для наступних кроків. Функція «Пояснити мені» використовує Sanity Agent Actions, щоб описати запит та його план простими словами, що витрачає один AI-кредит.',
  /** Shown in the Explain panel while there is no valid query to explain */
  'vista.explain.empty': 'Напишіть запит, щоб отримати його пояснення.',
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vista.explain.explain': 'Пояснити мені',
  /** Shown when the explanation could not be written */
  'vista.explain.failed': 'Не вдалося пояснити запит: {{message}}',
  /** A count the index computes without reading the documents */
  'vista.explain.insight.aggregate': 'Підраховано в індексі, без читання документів.',
  /** A subquery the plan runs once for all documents */
  'vista.explain.insight.batched-subquery':
    'Підзапит виконується один раз для всіх документів, в одному пакетному запиті, а не окремо для кожного документа.',
  /** Part of the filter runs in memory; the expression follows */
  'vista.explain.insight.filter-in-memory':
    "Частина фільтра виконується в пам'яті, після читання: кожен документ, який пропускає індекс, спочатку читається, що уповільнює роботу на великих наборах даних. З'єднання (->) та функції у фільтрі не можуть використовувати індекс.",
  /** The index sorts and limits while reading */
  'vista.explain.insight.index-sort-limit': 'Індекс сортує та обмежує документи під час читання.',
  /** The plan slices in memory */
  'vista.explain.insight.slice-in-memory':
    "Зріз береться в пам'яті після читання, а не як обмеження під час читання.",
  /** The plan sorts in memory */
  'vista.explain.insight.sort-in-memory':
    "Сортування відбувається в пам'яті, після читання всіх збігів. Сортуйте за атрибутами, за якими може сортувати індекс.",
  /** Link under the plan insights to the guide on fast queries */
  'vista.explain.insights.guide': 'Високопродуктивний GROQ',
  /** Heading of the plan insights in the Explain panel */
  'vista.explain.insights.title': 'Що варто відзначити',
  /** Button in the Explain panel fetching the query plan */
  'vista.explain.plan': 'Показати план запиту',
  /** Shown when the query plan could not be fetched */
  'vista.explain.plan-failed': 'Не вдалося отримати план запиту: {{message}}',
  /** Heading of the query plan in the Explain panel */
  'vista.explain.plan-title': 'План запиту',
  /** Toast shown after a code snippet was copied */
  'vista.export-query.copied': 'Фрагмент скопійовано в буфер обміну',
  /** Label for the button that copies a code snippet */
  'vista.export-query.copy': 'Копіювати фрагмент',
  /** Explanation at the top of the export query dialog */
  'vista.export-query.description':
    'Виконайте цей запит поза студією за допомогою одного з цих фрагментів.',
  /** Title of the dialog that exports the query as code snippets */
  'vista.export-query.title': 'Експортувати запит',
  /** Note about authentication in the export query dialog */
  'vista.export-query.token-note':
    'Для приватних наборів даних потрібен токен API. Для публічних наборів даних заголовок Authorization можна не додавати.',
  /** Toast shown after the generated code was copied */
  'vista.export-types.copied': 'Код скопійовано в буфер обміну',
  /** Label for the button that copies the generated code */
  'vista.export-types.copy': 'Копіювати код',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vista.export-types.empty':
    'Спочатку виконайте запит, щоб отримати результат, на основі якого можна буде визначити типи.',
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vista.export-types.schema-error': 'Не вдалося обчислити схему: {{message}}',
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vista.export-types.source.result':
    'Отримано на основі результату запиту, оскільки запит не вдалося обчислити відносно схеми робочої області.',
  /** Note shown when the types were derived from the workspace schema */
  'vista.export-types.source.schema':
    'Отримано на основі схеми робочої області, так само, як це робить sanity typegen.',
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vista.export-types.stale-result':
    'Показаний результат отримано для іншого запиту або параметрів. Спочатку виконайте поточний запит, щоб отримати результат, на основі якого можна буде визначити типи.',
  /** Title of the dialog exporting TypeScript types for the result */
  'vista.export-types.title-typescript': 'Експортувати TypeScript',
  /** Title of the dialog exporting a Zod schema for the result */
  'vista.export-types.title-zod': 'Експортувати Zod',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vista.functions.add': 'Додати до запиту',
  /** Shown on a library function the query declares the same way */
  'vista.functions.declared': 'У цьому запиті',
  /** Lint action on a call of a library function the query does not declare */
  'vista.functions.editor.add-from-library': 'Оголосити її',
  /** Note in a function's hover documentation: the API version it needs */
  'vista.functions.editor.api-version': 'Потрібна версія API {{version}} або новіша',
  /** Detail of a completion for a custom function the query declares */
  'vista.functions.editor.completion-declared': 'у цьому запиті',
  /** Detail of a completion for a library function, which declares it too */
  'vista.functions.editor.completion-library': 'з вашої бібліотеки',
  /** Note in the hover documentation of a custom function the query declares */
  'vista.functions.editor.declared-on': 'Користувацька функція, оголошена в рядку {{line}}',
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vista.functions.editor.delta-only':
    'Працює лише в режимі дельти, де webhooks і Sanity Functions виконують свої фільтри',
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vista.functions.editor.extract': 'Перетворити на функцію',
  /** Note in the hover documentation of a library function the query does not declare */
  'vista.functions.editor.in-library': 'У вашій бібліотеці функцій, не оголошено в цьому запиті',
  /** Link at the end of a built-in function's hover documentation */
  'vista.functions.editor.reference': 'Довідка з функцій GROQ',
  /** Explanation under the library heading in the Functions panel */
  'vista.functions.library.description':
    'Зберігається в цьому браузері для кожного набору даних проєкту. Автодоповнення пропонує ці функції, а лінтер пропонує оголосити ту, яку викликає запит.',
  /** Shown in the Functions panel while the library is empty */
  'vista.functions.library.empty':
    'Збережіть функцію, яку оголошує запит, щоб використовувати її в інших запитах.',
  /** Heading of the functions library in the Functions panel */
  'vista.functions.library.title': 'Бібліотека',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vista.functions.query.empty':
    'Оголосіть власні функції на початку запиту або встановіть курсор у проєкції, наприклад author->{name}, і натисніть кнопку вилучення над редактором ({{shortcut}}).',
  /** Heading of the functions the query declares in the Functions panel */
  'vista.functions.query.title': 'У цьому запиті',
  /** Removes a function from the library */
  'vista.functions.remove': 'Видалити з бібліотеки',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vista.functions.replace': 'Замінити в запиті',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vista.functions.reveal': 'Показати {{name}} у редакторі',
  /** Button of a function the query declares that is not in the library yet */
  'vista.functions.save': 'Зберегти в бібліотеці',
  /** Shown on a function the query declares the way the library has it */
  'vista.functions.saved': 'Збережено',
  /** Button of a function the query declares differently from the library's version */
  'vista.functions.update': 'Оновити бібліотеку',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vista.generate.button': 'Згенерувати запит',
  /** Closes the generate query bar */
  'vista.generate.close': 'Закрити',
  /** Explanation under the generate query field */
  'vista.generate.description':
    'Дії Sanity Agent пишуть GROQ на основі вашого опису та типів документів, а Content Lake перевіряє кожну спробу; кожна спроба використовує один AI-кредит. Це замінює запит цієї вкладки та запускає його; скасування дії в редакторі повертає попередній запит.',
  /** Shown when no query could be generated, above the reason */
  'vista.generate.failed': 'Не вдалося згенерувати запит',
  /** Accessible label of the description field in the generate query bar */
  'vista.generate.label': 'Що має отримувати запит?',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vista.generate.open-anyway': 'Відкрити останню спробу',
  /** Placeholder of the description field in the generate query bar */
  'vista.generate.placeholder': "10 останніх авторів, упорядкованих за прізвищем, а потім за ім'ям",
  /** Shown while the first attempt at a query is written */
  'vista.generate.progress': 'Написання запиту…',
  /** Shown while a rejected attempt is retried */
  'vista.generate.progress-retry': 'Виправлення запиту (спроба {{attempt}} з {{max}})…',
  /** Button generating the query */
  'vista.generate.submit': 'Згенерувати',
  /** Badge on a history entry the API CDN answered */
  'vista.history.cdn': 'API CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vista.history.cdn-cache-hit': 'Влучання в кеш CDN',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vista.history.changed': 'Змінено',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vista.history.changes': 'Зміни',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vista.history.changes-failed': 'Не вдалося показати зміни.',
  /** Button retrying to show the changes of a history entry */
  'vista.history.changes-retry': 'Повторити',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vista.history.compared-with': 'Порівняно із запитом о {{time}}',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vista.history.diff.params': 'Параметри',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vista.history.diff.query': 'Запит',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vista.history.diff.query-formatting-only': 'Змінилося лише форматування',
  /** Label of the diff of the query result in a history entry's changes */
  'vista.history.diff.result': 'Результат',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vista.history.diff.url': 'URL запиту',
  /** Empty state of the history panel */
  'vista.history.empty': 'Поки що нічого не отримано',
  /** Status label for a failed fetch in the history */
  'vista.history.failed': 'Помилка',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vista.history.hide-hidden': 'Сховати їх',
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vista.history.hiding': 'Приховано {{fields}}',
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vista.history.only-hidden-changed': 'Змінилися лише приховані поля',
  /** History reason: a tab opened with a generated query fetched it */
  'vista.history.reason.generated': 'Згенерований запит',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vista.history.reason.link': 'Відкрито посилання',
  /** History reason: a live event matched the query's sync tags */
  'vista.history.reason.live': 'Оновлення в реальному часі',
  /** History reason: the live connection asked every client to refetch */
  'vista.history.reason.live-restart': "Живе з'єднання перезапущено",
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vista.history.reason.live-start': 'Розпочато живий запит',
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vista.history.reason.load': 'Запит завантажено',
  /** History reason: the fetch button was pressed */
  'vista.history.reason.manual': 'Кнопка отримання',
  /** History reason: mutations were applied from the Mutate panel */
  'vista.history.reason.mutation': 'Застосовано мутації',
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vista.history.reason.options': 'Параметри змінено',
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vista.history.reason.paste': 'Вставлено URL',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vista.history.reason.resume': 'Автоматичне повторне отримання відновлено',
  /** History reason: the keyboard shortcut was used */
  'vista.history.reason.shortcut': 'Клавіатурне скорочення',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vista.history.same-result': 'Той самий результат',
  /** Button showing the hidden fields in a history entry's changes */
  'vista.history.show-hidden': 'Показати їх',
  /** Next to a history entry's changes while the hidden fields are shown */
  'vista.history.showing-hidden': 'Показано {{fields}}, приховано за замовчуванням',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vista.history.too-large': 'Занадто великий для порівняння',
  /** A history entry whose result is the same as the previous result */
  'vista.history.unchanged': 'Без змін',
  /** Shown in the Lint panel while the query has no lint findings */
  'vista.lint.empty':
    'Немає результатів лінтера. Проблеми, які GROQ-лінтер виявляє в запиті, відображаються тут під час введення; виберіть одну, щоб виділити її в редакторі.',
  /** Where a lint finding sits in the query, shown under its message */
  'vista.lint.position': 'Рядок {{line}}, стовпець {{column}}',
  /** Severity badge of a lint finding */
  'vista.lint.severity.error': 'Помилка',
  /** Severity badge of a lint finding */
  'vista.lint.severity.hint': 'Підказка',
  /** Severity badge of a lint finding */
  'vista.lint.severity.info': 'Інформація',
  /** Severity badge of a lint finding */
  'vista.lint.severity.warning': 'Попередження',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vista.lint.use-suggestion': 'Використати {{suggestion}}',
  /** Badge shown while a tab refetches automatically */
  'vista.live.active': 'Наживо',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vista.live.button': 'Живий запит',
  /** Tooltip of the Live button while automatic refetching is off */
  'vista.live.button.start':
    'Виконати запит, а потім повторювати його щоразу, коли документи в результаті змінюються',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vista.live.button.stop':
    'Припинити виконання запиту при зміні документів у результаті. Запит все одно виконується за запитом, для результатів, яких не стосуються зміни документів, наприклад now()',
  /** Error shown when the live connection breaks */
  'vista.live.error': 'Живі оновлення відключено: {{message}}',
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vista.live.stop': 'Зупинити наживо',
  /** Button in the Mutate panel adding a mutation to the list */
  'vista.mutate.add': 'Додати мутацію',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vista.mutate.add.create': 'Створити документ',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vista.mutate.add.delete': 'Видалити документ',
  /** Adds a mutation deleting the documents of the shown result */
  'vista.mutate.add.delete-result': 'Видалити документи в результаті',
  /** Adds a mutation patching a document, its ID to fill in */
  'vista.mutate.add.patch': 'Внести зміни в документ',
  /** Adds a mutation patching the documents of the shown result */
  'vista.mutate.add.patch-result': 'Внести зміни в документи в результаті',
  /** Button applying the mutations a dry run showed */
  'vista.mutate.apply': 'Застосувати до {{dataset}}',
  /** Heading of the error shown when applying the mutations failed */
  'vista.mutate.apply-failed': 'Мутації не вдалося застосувати',
  /** Next to Apply while the mutations as they are have had no dry run */
  'vista.mutate.apply-needs-preview':
    '«Застосувати» надсилає те, що показав пробний запуск: спершу виконайте його.',
  /** Option giving array items without a _key one */
  'vista.mutate.auto-keys': 'Додати _key елементам масиву, у яких його немає',
  /** Under the option giving array items a _key */
  'vista.mutate.auto-keys.description':
    'Студії потрібен _key у кожному елементі масиву, щоб його можна було редагувати.',
  /** Button showing a document's changes in the dry run */
  'vista.mutate.changes': 'Зміни',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vista.mutate.changes-failed': 'Не вдалося показати зміни.',
  /** Button retrying to show a document's changes */
  'vista.mutate.changes-retry': 'Повторити',
  /** What the Mutate panel does */
  'vista.mutate.description':
    'Пишіть мутації у форматі, який приймає Mutations API, у вигляді списку: create, createOrReplace, createIfNotExists, delete і patch, за ID або за GROQ-запитом. Пробний запуск показує, що вони зроблять з кожним документом, нічого не змінюючи; «Застосувати» потім записує їх у dataset однією транзакцією, від імені вашого облікового запису.',
  /** What the API says went wrong with one of the mutations */
  'vista.mutate.failure-item': 'Мутація {{index}}: {{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vista.mutate.generate.button': 'Згенерувати мутації',
  /** Explanation under the generate mutations field */
  'vista.mutate.generate.description':
    'Sanity Agent Actions пишуть мутації на основі вашого опису, документів у результаті та їхніх типів, а пробний запуск перевіряє кожну спробу; кожна спроба використовує один кредит ШІ. Вони замінюють мутації тут, де скасування повертає їх назад; нічого не буде записано, доки ви не застосуєте їх.',
  /** Shown when no mutations could be generated, above the reason */
  'vista.mutate.generate.failed': 'Не вдалося згенерувати мутації',
  /** Accessible label of the description field in the generate mutations bar */
  'vista.mutate.generate.label': 'Що мають робити мутації?',
  /** Placeholder of the description field in the generate mutations bar */
  'vista.mutate.generate.placeholder': 'Змінити заголовок документів у результаті на foobar',
  /** Shown while the first attempt at the mutations is written */
  'vista.mutate.generate.progress': 'Написання мутацій…',
  /** Shown while an attempt the dry run turned down is retried */
  'vista.mutate.generate.progress-retry': 'Виправлення мутацій (спроба {{attempt}} з {{max}})…',
  /** Under the dry run: the fields the diffs leave out */
  'vista.mutate.hiding': 'Зміни не включають {{fields}}, як і в History.',
  /** Shown when the mutations are not valid JSON */
  'vista.mutate.invalid-json': 'Мутації не є дійсним JSON: {{message}}',
  /** Shown when a mutation does not name exactly one thing to do */
  'vista.mutate.invalid-mutation':
    'Мутація {{index}} повинна містити рівно одне з: create, createOrReplace, createIfNotExists, delete або patch.',
  /** Label of the mutations editor */
  'vista.mutate.mutations': 'Мутації',
  /** The dry run touched no documents */
  'vista.mutate.no-documents': 'Мутації не стосуються жодного документа.',
  /** Shown when the JSON is not a list of mutations */
  'vista.mutate.not-a-list':
    'Напишіть список мутацій, одну мутацію або тіло запиту зі списком мутацій.',
  /** A document the mutations create */
  'vista.mutate.operation.create': 'Створити',
  /** A document the mutations delete */
  'vista.mutate.operation.delete': 'Видалити',
  /** A document the mutations touch without changing its content */
  'vista.mutate.operation.none': 'Без змін',
  /** A document the mutations change */
  'vista.mutate.operation.update': 'Оновити',
  /** Button running the mutations as a dry run */
  'vista.mutate.preview': 'Пробний запуск',
  /** Heading of the error shown when the dry run failed */
  'vista.mutate.preview-failed': 'Пробний запуск не вдався',
  /** Heading of the dry run's outcome */
  'vista.mutate.preview-heading': 'Пробний запуск',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vista.mutate.stale':
    'Мутації, набір даних або параметри змінилися після цього пробного запуску. Запустіть його знову, щоб застосувати їх.',
  /** How many documents the dry run changes and leaves as they are */
  'vista.mutate.summary': 'Змінено: {{changed}} · Без змін: {{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vista.network.cache': 'Кеш',
  /** The API CDN answered from its cache */
  'vista.network.cache.hit': 'Влучення',
  /** Under the details of a CDN cache hit */
  'vista.network.cache.hit-explained':
    'CDN відповів кешованою відповіддю з розташування поблизу вас; запит не досяг API.',
  /** The API CDN answered with a response this session had not seen */
  'vista.network.cache.miss': 'Промах, наскільки це можна визначити в цій сесії',
  /** The API answered, which caches nothing */
  'vista.network.cache.none': 'Немає, API відповідає на кожен запит свіжим вмістом',
  /** Shown in the Network panel while there is no response */
  'vista.network.empty':
    'Виконайте запит, щоб побачити, яка кінцева точка на нього відповіла, чи з кешу, і де він виконувався.',
  /** In the Network panel: the endpoint that answered */
  'vista.network.endpoint': 'Відповів',
  /** The live API answered */
  'vista.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vista.network.endpoint.cdn': 'API CDN',
  /** In the Network panel: the region the query ran in */
  'vista.network.region': 'Запит виконано в',
  /** The response did not say where the query ran */
  'vista.network.region.unknown': 'Не повідомлено',
  /** In the Network panel: the round trip and the time on the server */
  'vista.network.timing': 'Час',
  /** The round trip and the server's time for the query, in milliseconds */
  'vista.network.timing.value': '{{e2e}} мс туди-назад, {{server}} мс на сервері',
  /** In the Network panel: the trace of the request, for Sanity support */
  'vista.network.trace': 'ID трасування',
  /** Hint in the Network panel while queries go to the API */
  'vista.network.use-cdn-hint':
    'Увімкніть «Використовувати API CDN» в Параметрах, щоб надсилати запити через CDN.',
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vista.network.you': 'Ви',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vista.options.dataset.follows-workspace': 'Слідує за робочим простором',
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vista.options.dataset.pin': 'Закріпити набір даних',
  /** Hint under the dataset field while a dataset is pinned */
  'vista.options.dataset.pinned':
    'Закріплено; робочий простір може використовувати інший набір даних',
  /** Button that makes the tab follow the workspace's dataset again */
  'vista.options.dataset.use-workspace': 'Використовувати набір даних робочого простору',
  /** Label for the "Include content source map" switch */
  'vista.options.include-source-map': 'Включити карту джерел вмісту',
  /** Description for the "Include content source map" switch */
  'vista.options.include-source-map.description':
    'Додає resultSourceMap до відповіді, яка відображається на вкладці «Карта джерел вмісту».',
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vista.options.perspective.global': 'Глобальний ({{name}})',
  /** Label of the switch that sends queries to the API CDN */
  'vista.options.use-cdn': 'Використовувати API CDN',
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vista.options.use-cdn.anonymous':
    'Цей студіо входить у систему за допомогою cookie, яке API CDN ніколи не отримує: він відповідає так, як відповів би анонімному відвідувачу, показуючи те, що показує публічний набір даних.',
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vista.options.use-cdn.blocked':
    'API CDN не обслуговує чернетки чи релізи, тому запити з перспективою {{perspective}} надсилаються до API. З опублікованою або raw перспективою вони використовують CDN.',
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vista.options.use-cdn.blocked.title': 'Запити надсилаються до API, а не до CDN',
  /** Description of the API CDN switch */
  'vista.options.use-cdn.description':
    'Надсилає запит до API CDN, подібно до useCdn: true у @sanity/client, з перспективами «опубліковано» та «raw»: чернетки та релізи завжди надсилаються до API. Відповіді кешуються до однієї хвилини; панель «Мережа» показує, коли відповідь надійшла з кешу.',
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vista.options.use-cdn.use-published': 'Використовувати опубліковану перспективу',
  /** Label of the variant field */
  'vista.options.variant-label': 'Варіант',
  /** Variant option sending the navbar's variant, named */
  'vista.options.variant.global': 'Глобальний ({{name}})',
  /** Variant option sending the navbar's variant while none is selected there */
  'vista.options.variant.global-none': 'Глобальний (нічого не вибрано)',
  /** Variant option sending no variant */
  'vista.options.variant.none': 'Немає',
  /** Accessible label for collapsing a bottom panel */
  'vista.panel.collapse': 'Згорнути панель',
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vista.panel.delta': 'Дельта',
  /** Accessible label for expanding a bottom panel */
  'vista.panel.expand': 'Розгорнути панель',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vista.panel.explain': 'Пояснення',
  /** Label of the Functions tab in the response panel */
  'vista.panel.functions': 'Функції',
  /** Label of the "History" tab in the response panel */
  'vista.panel.history': 'Історія',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vista.panel.lint': 'Лінт',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vista.panel.mutate': 'Змінити',
  /** Label of the Network tab in the response panel */
  'vista.panel.network': 'Мережа',
  /** Label of the "Options" panel in the request column */
  'vista.panel.options': 'Опції',
  /** Label of the "Response" tab in the response panel */
  'vista.panel.response': 'Відповідь',
  /** Label of the "Content Source Map" tab in the response panel */
  'vista.panel.source-map': 'Карта джерел вмісту',
  /** Button adding an item to a list param in the params form */
  'vista.params-form.add-item': 'Додати елемент',
  /** Placeholder of a params form field that takes any JSON value */
  'vista.params-form.any-placeholder': 'Будь-яке значення JSON; інший текст надсилається як рядок',
  /** Shown in the params form when the query uses no params */
  'vista.params-form.empty':
    'Запит не використовує параметри. Кожен $name у ньому отримує тут поле.',
  /** Shown in the params form while the params JSON cannot be parsed */
  'vista.params-form.invalid-json':
    'Параметри не є дійсним JSON. Виправте їх у поданні JSON, щоб редагувати тут.',
  /** A boolean param's value is not true or false; it is sent anyway */
  'vista.params-form.invalid.boolean': 'Не true або false; надіслано як {{value}}',
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vista.params-form.invalid.document-type':
    'Не є типом документа в цьому робочому просторі; все одно надіслано',
  /** A whole number param (a slice bound) holds a fraction */
  'vista.params-form.invalid.integer': 'Не є цілим числом, яке потрібне для зрізів',
  /** A list param's value is not a list; it is sent anyway */
  'vista.params-form.invalid.list': 'Не є списком; надіслано як {{value}}',
  /** A number param's value is not a number; it is sent anyway */
  'vista.params-form.invalid.number': 'Не є числом; надіслано як текст',
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vista.params-form.invalid.option': 'Не є одним із відомих значень; все одно надіслано',
  /** A text param's value is not text; it is sent anyway */
  'vista.params-form.invalid.string': 'Не є текстом; надіслано як {{value}}',
  /** Accessible label of an item input of a list param in the params form */
  'vista.params-form.item-label': '${{name}}, елемент {{index}}',
  /** Placeholder of an item input of a list param in the params form */
  'vista.params-form.item-placeholder': 'Елемент',
  /** Under a params form field whose param has no value */
  'vista.params-form.missing': 'Не встановлено: запит не виконується, доки не буде значення',
  /** Shown in the params form when the workspace schema could not be read */
  'vista.params-form.no-schema':
    'Типи визначаються лише із запиту: схему робочого простору не вдалося прочитати.',
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vista.params-form.not-set': 'Не встановлено',
  /** Button setting a date and time param to the current time */
  'vista.params-form.now': 'Зараз',
  /** Button removing a param the query does not use from the params */
  'vista.params-form.remove': 'Видалити',
  /** Accessible label of the button removing an item from a list param */
  'vista.params-form.remove-item': 'Видалити елемент',
  /** Shown in the params form when the query does not parse */
  'vista.params-form.syntax-error':
    'Запит не розпізнається, тому його параметри наведено без типів.',
  /** Type hint of a params form field: any JSON value */
  'vista.params-form.type.any': 'будь-яке значення JSON',
  /** Type hint of a params form field: true or false */
  'vista.params-form.type.boolean': 'true або false',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vista.params-form.type.datetime': 'дата і час (ISO 8601)',
  /** Type hint of a params form field: a document ID */
  'vista.params-form.type.document-id': 'ID документа',
  /** Type hint of a params form field: one of the workspace's document types */
  'vista.params-form.type.document-type': 'тип документа',
  /** Type hint of a params form field: a whole number */
  'vista.params-form.type.integer': 'ціле число',
  /** Type hint of a params form field: a list of values */
  'vista.params-form.type.list': 'список, кожен {{type}}',
  /** Type hint of a params form field: a number */
  'vista.params-form.type.number': 'число',
  /** Type hint of a params form field: text */
  'vista.params-form.type.string': 'текст',
  /** Heading of the params the query does not use, listed in the params form */
  'vista.params-form.unused': 'Не використовується в запиті',
  /** Before the expressions that use a param, in the params form */
  'vista.params-form.used-in': 'Використовується в',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vista.params.fit-height': 'Розмір за вмістом, {{height}} пікселів',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vista.params.resize':
    'Змінити розмір параметрів: перетягніть або використовуйте клавіші зі стрілками; двічі клацніть або натисніть Enter, щоб знову підлаштувати під вміст',
  /** Tab showing the params as a form inferred from the query */
  'vista.params.view.form': 'Форма',
  /** Tab showing the params as JSON */
  'vista.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vista.params.view.label': 'Редагувати параметри як',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vista.paste.parsed': 'Запит завантажено з вставленого URL',
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vista.paste.unavailable-variant':
    'Вставлений URL використовував варіант "{{variant}}"; виберіть його на панелі навігації, щоб виконати запит із ним.',
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vista.paste.unknown-dataset':
    'Набір даних "{{dataset}}" у вставленому URL тут недоступний, залишено поточний.',
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vista.paste.unsupported-perspective':
    'Перспектива у вставленому URL тут не підтримується, залишено поточну.',
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vista.paste.variants-disabled':
    'Вставлений URL використовував варіант "{{variant}}"; у цьому робочому просторі варіанти вимкнено, тому запит виконується без нього.',
  /** Accessible label for the query actions menu */
  'vista.query.actions': 'Дії із запитом',
  /** Tooltip when automatic refetching is not available for the API version */
  'vista.query.auto-refetch.unsupported':
    'Для автоматичного повторного отримання потрібна версія API v2021-03-25 або новіша.',
  /** Toast shown after the query was copied */
  'vista.query.copied': 'Запит скопійовано в буфер обміну',
  /** Menu item copying the query text */
  'vista.query.copy': 'Копіювати запит',
  /** Menu item opening the export query dialog */
  'vista.query.export': 'Експортувати запит…',
  /** Menu item reformatting the query */
  'vista.query.prettify': 'Форматувати запит',
  /** Toast shown when the query could not be reformatted */
  'vista.query.prettify.failed': 'Не вдалося відформатувати запит',
  /** Menu item saving the query to the personal saved queries */
  'vista.query.save': 'Зберегти запит',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vista.query.stop': 'Зупинити',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vista.query.stop.description': 'Зупинити отримання даних',
  /** Explanation in the settings section about the redesigned experience */
  'vista.redesign.settings.description':
    'Ви використовуєте оновлений інструмент Vision. Якщо ви перейдете назад, ваші вкладки та налаштування збережуться в цьому браузері до наступної спроби.',
  /** Title of the settings section about the redesigned experience */
  'vista.redesign.settings.title': 'Оновлений Vision (бета)',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vista.redesign.switch-to-classic': 'Перейти до класичного Vision',
  /** Toast button that switches to the redesigned tool */
  'vista.redesign.toast.accept': 'Спробувати зараз',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.description':
    'Вкладки запитів, живе повторне отримання даних, деталі відповіді та експорт. Ви можете повернутися назад у будь-який час.',
  /** Toast button that hides the invitation */
  'vista.redesign.toast.dismiss': 'Не зараз',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.title': 'Спробуйте оновлений Vision',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vista.redesign.try': 'Спробувати новий дизайн',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vista.redesign.try.description':
    'Перейдіть на оновлений Vision у бета-версії. Ви можете повернутися назад у будь-який час з його бокової панелі.',
  /** Empty state of the response panel before anything was fetched */
  'vista.response.empty': 'Поки що нічого не отримано',
  /** Label for the payload size in the response tab */
  'vista.response.payload-size': 'Розмір даних',
  /** Label for the sync tags in the response tab */
  'vista.response.sync-tags': 'Теги синхронізації',
  /** Shown when the response carried no sync tags */
  'vista.response.sync-tags.none': 'У відповіді немає тегів синхронізації',
  /** Accessible label for the result actions menu */
  'vista.result.actions': 'Дії з результатом',
  /** Toast shown after the result was copied */
  'vista.result.copied': 'Результат скопійовано в буфер обміну',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vista.result.copied-value': 'Скопійовано {{path}}',
  /** Menu item and button copying the result as JSON */
  'vista.result.copy': 'Копіювати результат',
  /** Button next to each property in the result tree, copying its value */
  'vista.result.copy-value': 'Копіювати значення',
  /** Empty state of the result view */
  'vista.result.empty': 'Виконайте запит, щоб побачити результат тут',
  /** Button exporting the result as CSV */
  'vista.result.export-csv': 'Експортувати CSV',
  /** Button exporting the result as JSON */
  'vista.result.export-json': 'Експортувати JSON',
  /** Menu item opening the TypeScript export dialog */
  'vista.result.export-typescript': 'Експортувати TypeScript…',
  /** Menu item opening the Zod export dialog */
  'vista.result.export-zod': 'Експортувати Zod…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vista.result.graph.collapse': 'Приховати вміст',
  /** Button fitting the whole graph in view */
  'vista.result.graph.fit': 'Вмістити в екран',
  /** Accessible label of the graph, saying how to move around in it */
  'vista.result.graph.label':
    'Граф результату: перетягніть, щоб перемістити, прокрутіть для масштабування; у фокусі стрілки переміщують, + та - масштабують, 0 вміщує в екран',
  /** Ends the note on a graph that leaves part of this result out */
  'vista.result.graph.left-out-hint': 'Перегляди дерева та JSON показують усе це.',
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vista.result.graph.node-limit': "Намальовано лише перші {{nodes}} об'єктів і масивів.",
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vista.result.graph.partial': 'Для {{nodes}} перелічено лише перші {{rows}} записів.',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vista.result.graph.partial.node': '{{name}} ({{entries}} записів)',
  /** Title of the graph node of the result itself */
  'vista.result.graph.root': 'результат',
  /** Button zooming into the graph */
  'vista.result.graph.zoom-in': 'Збільшити',
  /** Button zooming out of the graph */
  'vista.result.graph.zoom-out': 'Зменшити',
  /** Tab showing the result as a graph of its objects and arrays */
  'vista.result.view.graph': 'Граф',
  /** Tab showing the result as indented JSON text, to select and copy from */
  'vista.result.view.json': 'JSON',
  /** Accessible label of the tabs that switch how the result shows */
  'vista.result.view.label': 'Перегляд результату',
  /** Tab showing the result as a tree to browse */
  'vista.result.view.tree': 'Дерево',
  /** Empty state of the saved queries panel */
  'vista.saved.empty': 'Поки немає збережених запитів. Збережіть поточний запит кнопкою +.',
  /** Empty state of a query list when the search matches nothing */
  'vista.saved.empty-search': 'Немає запитів, що відповідають пошуку',
  /** Menu item loading a saved query into the active tab */
  'vista.saved.load-in-current-tab': 'Завантажити у поточну вкладку',
  /** Menu item opening a saved query in a new tab */
  'vista.saved.open-in-new-tab': 'Відкрити у новій вкладці',
  /** Menu item renaming a saved query */
  'vista.saved.rename': 'Перейменувати',
  /** Accessible label for the button saving the current query */
  'vista.saved.save-current': 'Зберегти поточний запит',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vista.saved.unavailable-variant':
    'Цей збережений запит використовував варіант "{{variant}}"; виберіть його на панелі навігації, щоб запустити запит із ним.',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vista.saved.unknown-dataset':
    'Набір даних "{{dataset}}" цього збереженого запиту тут недоступний, залишено поточний.',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vista.saved.variants-disabled':
    'Цей збережений запит використовував варіант "{{variant}}"; у цьому робочому просторі варіанти вимкнено, тому запит виконується без нього.',
  /** Button in the settings dialog that clears the stored state */
  'vista.settings.clear-storage': 'Очистити сховище',
  /** Confirmation button for clearing the storage */
  'vista.settings.clear-storage.confirm': 'Так, очистити сховище',
  /** Explanation of what clearing the storage does */
  'vista.settings.clear-storage.description':
    'Видаляє ваші особисті збережені запити та бібліотеку функцій, скидає відкриті вкладки та ці параметри за замовчуванням у цьому браузері та повертає класичний інструмент Vision. Спільні запити зберігаються.',
  /** Toast shown when the saved queries could not be cleared */
  'vista.settings.clear-storage.error': 'Не вдалося очистити збережені запити',
  /** Toast shown after the storage was cleared */
  'vista.settings.clear-storage.success': 'Сховище очищено',
  /** Explanation at the top of the settings dialog */
  'vista.settings.description':
    'Параметри за замовчуванням для нових вкладок. Відкриті вкладки зберігають власні параметри.',
  /** Explains the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.description':
    'По одному шляху поля на рядок. Шлях збігається на будь-якій глибині результату, тому _rev приховує ревізію кожного документа в ньому. Кожна різниця (diff) все одно може їх показувати.',
  /** Button restoring the default fields left out of History diffs */
  'vista.settings.history-diff.reset': 'Скинути до значень за замовчуванням',
  /** Label of the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.title': 'Поля, приховані з різниць History',
  /** Title of the settings dialog */
  'vista.settings.title': 'Налаштування',
  /** Empty state of the shared queries panel */
  'vista.shared.empty':
    'Поки що немає спільних запитів. Поділіться збереженим запитом, щоб зробити його доступним для всіх, хто використовує цей набір даних.',
  /** Shortcut description: close dialogs and menus */
  'vista.shortcuts.close': 'Закрити діалогові вікна та меню',
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vista.shortcuts.complete': 'Доповнити назву функції',
  /** Shortcut description: copy the query */
  'vista.shortcuts.copy-query': 'Скопіювати запит',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vista.shortcuts.extract-function': 'Перетворити проекцію під курсором на функцію',
  /** Shortcut description: run the query */
  'vista.shortcuts.fetch': 'Виконати запит',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vista.shortcuts.next-finding': 'Перейти до наступного результату лінтингу',
  /** Shortcut description: reformat the query */
  'vista.shortcuts.prettify': 'Форматувати запит',
  /** Title of the keyboard shortcuts dialog */
  'vista.shortcuts.title': 'Комбінації клавіш',
  /** Sidebar toggle: show icons only */
  'vista.sidebar.collapse': 'Згорнути бічну панель',
  /** Sidebar toggle: show labels next to the icons */
  'vista.sidebar.expand': 'Розгорнути бічну панель',
  /** Accessible label for the sidebar navigation */
  'vista.sidebar.label': 'Бічна панель Vista',
  /** Sidebar item and drawer title for personal saved queries */
  'vista.sidebar.saved-queries': 'Збережені запити',
  /** Sidebar item opening the settings dialog */
  'vista.sidebar.settings': 'Налаштування',
  /** Sidebar item and drawer title for shared queries */
  'vista.sidebar.shared-queries': 'Спільні запити',
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vista.sidebar.shortcuts': 'Комбінації клавіш',
  /** Empty state of the content source map panel */
  'vista.source-map.empty':
    'Карта джерел вмісту відсутня у відповіді. Увімкніть "Включити карту джерел вмісту" в Опціях і виконайте запит знову.',
  /** Accessible label of the divider between the result and the response details panel */
  'vista.split.bottom-panel':
    'Змінити розмір панелі деталей відповіді: перетягніть або використовуйте стрілки; Home і End переходять до меж, Enter скидає',
  /** Accessible label of the divider between the request and response panes */
  'vista.split.request-response':
    'Змінити розмір панелей запиту та відповіді: перетягніть або використовуйте стрілки; Home і End переходять до меж, Enter скидає',
  /** Accessible label for the button closing a query tab */
  'vista.tabs.close-tab': 'Закрити вкладку',
  /** Accessible label for the list of query tabs */
  'vista.tabs.label': 'Вкладки запитів',
  /** Accessible label for the button opening a new query tab */
  'vista.tabs.new-tab': 'Нова вкладка',
  /** Placeholder of the input renaming a tab */
  'vista.tabs.title-placeholder': 'Назва вкладки',
  /** Title of a tab whose query is still empty */
  'vista.tabs.untitled': 'Запит без назви',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vista.webmcp.check-query': 'Перевірити GROQ-запит у Vision',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vista.webmcp.describe-schema': 'Описати схему у Vision',
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vista.webmcp.explain-query': 'Пояснити GROQ-запит у Vision',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vista.webmcp.get-state': 'Прочитати відкриту вкладку Vision',
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vista.webmcp.open-query': 'Відкрити GROQ-запит у Vision',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vista.webmcp.preview-mutations': 'Попередній перегляд мутацій у Vision',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vista.webmcp.run-query': 'Виконати GROQ-запит у Vision',
})
