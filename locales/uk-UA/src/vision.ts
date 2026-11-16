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
  /** Tooltip shown when the API version selector is locked because a variant is selected */
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
  'vision.agent-actions.credits': 'Використовує один AI-кредит на запит',
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vision.ai-credits.balance': 'Залишилося {{balance}} з {{quota}} AI-кредитів цього місяця.',
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vision.ai-credits.deficit':
    'Цього місяця використано {{used}} AI-кредитів, що на {{deficit}} більше за включені {{quota}}.',
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vision.ai-credits.limit.description':
    'Ваша організація використала {{used}} із {{quota}} AI-кредитів цього місяця, тому дії Sanity Agent Actions призупинено до наступного місяця або до підвищення ліміту витрат.',
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vision.ai-credits.limit.description-unknown':
    'Ваша організація досягла ліміту витрат AI-кредитів, тому дії Sanity Agent Actions призупинено до наступного місяця або до підвищення ліміту.',
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vision.ai-credits.limit.learn-more': 'Як працюють AI-кредити',
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vision.ai-credits.limit.manage': 'Керувати AI-кредитами',
  /** Title of the card shown where the organization is out of AI credits */
  'vision.ai-credits.limit.title': 'AI-кредити вичерпано',
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vision.ai-credits.usage': 'Використання AI',
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vision.ai-credits.used': 'Цього місяця використано {{used}} AI-кредитів.',
  /** Button in the request column's action bar naming the API version requests go out with */
  'vision.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vision.api-version.button-cdn': 'API CDN {{version}}',
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vision.api-version.button-invalid': 'Незавершена версія API',
  /** Tooltip of the API version button */
  'vision.api-version.tooltip':
    'Запити виконуються з версією API {{version}}. Натисніть, щоб змінити її в Опціях.',
  /** Tooltip of the API version button while queries go through the API CDN */
  'vision.api-version.tooltip-cdn':
    'Запити виконуються через API CDN з версією API {{version}}. Натисніть, щоб змінити її в Опціях.',
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vision.api-version.tooltip-cdn-blocked':
    'Запити виконуються через API з версією {{version}}, а не через API CDN: він не обслуговує перспективу {{perspective}}. Натисніть, щоб змінити це в Опціях.',
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vision.api-version.tooltip-invalid':
    'Версія API в Опціях незавершена, тому нічого не можна отримати, доки її не буде завершено.',
  /** Tooltip of the API version button while a selected variant forces the variants API version */
  'vision.api-version.tooltip-locked':
    'Запити виконуються з версією API {{version}}, яку вимагає обраний варіант.',
  /** Label of the document after the change in the Delta panel */
  'vision.delta.after': 'Після',
  /** Label of the document before the change in the Delta panel */
  'vision.delta.before': 'До',
  /** What the Delta panel does */
  'vision.delta.description':
    'Виконує запит у режимі delta, так само як це роблять вебхуки на базі GROQ, слухачі та Sanity Functions: before() і after() — це документ до і після зміни, @ — документ після неї, а delta::changedAny() порівнює їх. Виконується у браузері за допомогою groq-js. Порожня сторона означає відсутність документа: зміна створює або видаляє його.',
  /** Label of the document ID field in the Delta panel */
  'vision.delta.document-id': 'ID документа',
  /** Shown when there is a query but no documents to compare */
  'vision.delta.empty':
    'Завантажте історію документа або напишіть документи у поля «До» та «Після».',
  /** Shown when the query fails in delta mode */
  'vision.delta.failed': 'Не вдалося виконати запит у режимі delta: {{message}}',
  /** Shown when the After document is not valid JSON */
  'vision.delta.invalid-after': 'Поле «Після» містить недійсний JSON: {{message}}',
  /** Shown when the Before document is not valid JSON */
  'vision.delta.invalid-before': 'Значення Before не є дійсним JSON: {{message}}',
  /** Button loading the document's revisions from the History API */
  'vision.delta.load': 'Завантажити історію',
  /** Shown when the history could not be loaded */
  'vision.delta.load-failed': 'Не вдалося завантажити історію: {{message}}',
  /** A delta filter that is true for the change */
  'vision.delta.matches':
    'Відповідає: вебхук або функція з цим фільтром виконується для цієї зміни.',
  /** A delta filter that is false for the change */
  'vision.delta.no-match':
    'Не відповідає: вебхук або функція з цим фільтром не виконується для цієї зміни.',
  /** Shown while the query or its params cannot be sent */
  'vision.delta.no-request': 'Виправте запит та його параметри, щоб виконати його в режимі delta.',
  /** Heading of the delta result */
  'vision.delta.result': 'Результат',
  /** The After choice for a change that deletes the document */
  'vision.delta.revision.none-after': 'Нічого: ця зміна видаляє документ',
  /** The Before choice for a change that creates the document */
  'vision.delta.revision.none-before': 'Нічого: ця зміна створює документ',
  /** A revision in the Before and After lists */
  'vision.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vision.drawer.close': 'Закрити панель',
  /** Explanation at the top of the Explain panel */
  'vision.explain.description':
    'План запиту — це спосіб, яким Content Lake виконує запит: що він читає, фільтрує та сортує під час читання, і що залишається для наступних кроків. Функція «Пояснити мені» використовує дії агента Sanity, щоб описати запит та його план простими словами, що витрачає один AI-кредит.',
  /** Shown in the Explain panel while there is no valid query to explain */
  'vision.explain.empty': 'Напишіть запит, щоб отримати його пояснення.',
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vision.explain.explain': 'Пояснити мені',
  /** Shown when the explanation could not be written */
  'vision.explain.failed': 'Не вдалося пояснити запит: {{message}}',
  /** A count the index computes without reading the documents */
  'vision.explain.insight.aggregate': 'Підраховано в індексі, без читання документів.',
  /** A subquery the plan runs once for all documents */
  'vision.explain.insight.batched-subquery':
    'Підзапит виконується один раз для всіх документів, одним пакетним запитом, а не окремо для кожного документа.',
  /** Part of the filter runs in memory; the expression follows */
  'vision.explain.insight.filter-in-memory':
    "Частина фільтра виконується в пам'яті, після читання: кожен документ, який пропускає індекс, спочатку читається повністю, що уповільнює роботу на великих наборах даних. Об'єднання (->) та функції у фільтрі не можуть використовувати індекс.",
  /** The index sorts and limits while reading */
  'vision.explain.insight.index-sort-limit':
    'Індекс сортує та обмежує документи під час їх читання.',
  /** The plan slices in memory */
  'vision.explain.insight.slice-in-memory':
    "Зріз береться в пам'яті після читання, а не як обмеження під час читання.",
  /** The plan sorts in memory */
  'vision.explain.insight.sort-in-memory':
    "Сортування відбувається в пам'яті, після читання всіх збігів. Сортуйте за атрибутами, за якими може сортувати індекс.",
  /** Link under the plan insights to the guide on fast queries */
  'vision.explain.insights.guide': 'Високопродуктивний GROQ',
  /** Heading of the plan insights in the Explain panel */
  'vision.explain.insights.title': 'Що варто відзначити',
  /** Button in the Explain panel fetching the query plan */
  'vision.explain.plan': 'Показати план запиту',
  /** Shown when the query plan could not be fetched */
  'vision.explain.plan-failed': 'Не вдалося отримати план запиту: {{message}}',
  /** Heading of the query plan in the Explain panel */
  'vision.explain.plan-title': 'План запиту',
  /** Toast shown after a code snippet was copied */
  'vision.export-query.copied': 'Фрагмент скопійовано до буфера обміну',
  /** Label for the button that copies a code snippet */
  'vision.export-query.copy': 'Копіювати фрагмент',
  /** Explanation at the top of the export query dialog */
  'vision.export-query.description':
    'Виконайте цей запит поза студією за допомогою одного з цих фрагментів.',
  /** Note under the curl snippet when the query is sent as a request body rather than in the URL */
  'vision.export-query.post-body-note':
    'Запит і параметри становлять {{size}} символів як параметри пошуку; починаючи з {{limit}}, @sanity/client надсилає їх як тіло JSON, а не в URL, тому фрагмент робить так само.',
  /** Title of the dialog that exports the query as code snippets */
  'vision.export-query.title': 'Експортувати запит',
  /** Note about authentication in the export query dialog */
  'vision.export-query.token-note':
    'Приватні набори даних потребують токена API. Для публічних наборів даних можна прибрати заголовок Authorization.',
  /** Toast shown after the generated code was copied */
  'vision.export-types.copied': 'Код скопійовано до буфера обміну',
  /** Label for the button that copies the generated code */
  'vision.export-types.copy': 'Копіювати код',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vision.export-types.empty':
    'Спочатку виконайте запит, щоб отримати результат, з якого можна буде вивести типи.',
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vision.export-types.schema-error': 'Не вдалося оцінити схему: {{message}}',
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vision.export-types.source.result':
    'Виведено з отриманого результату, оскільки запит не вдалося оцінити за схемою робочої області.',
  /** Note shown when the types were derived from the workspace schema */
  'vision.export-types.source.schema':
    'Виведено зі схеми робочої області, так само, як це робить sanity typegen.',
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vision.export-types.stale-result':
    'Показаний результат був отриманий для іншого запиту чи параметрів. Спочатку виконайте поточний запит, щоб отримати результат, з якого можна буде вивести типи.',
  /** Title of the dialog exporting TypeScript types for the result */
  'vision.export-types.title-typescript': 'Експортувати TypeScript',
  /** Title of the dialog exporting a Zod schema for the result */
  'vision.export-types.title-zod': 'Експортувати Zod',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vision.functions.add': 'Додати до запиту',
  /** Shown on a library function the query declares the same way */
  'vision.functions.declared': 'У цьому запиті',
  /** Lint action on a call of a library function the query does not declare */
  'vision.functions.editor.add-from-library': 'Оголосити її',
  /** Note in a function's hover documentation: the API version it needs */
  'vision.functions.editor.api-version': 'Потрібна версія API {{version}} або новіша',
  /** Detail of a completion for a custom function the query declares */
  'vision.functions.editor.completion-declared': 'у цьому запиті',
  /** Detail of a completion for a library function, which declares it too */
  'vision.functions.editor.completion-library': 'з вашої бібліотеки',
  /** Note in the hover documentation of a custom function the query declares */
  'vision.functions.editor.declared-on': 'Користувацька функція, оголошена в рядку {{line}}',
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vision.functions.editor.delta-only':
    'Працює лише в режимі delta, де webhooks і Sanity Functions виконують свої фільтри',
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vision.functions.editor.extract': 'Витягти у функцію',
  /** Note in the hover documentation of a library function the query does not declare */
  'vision.functions.editor.in-library': 'У вашій бібліотеці функцій, не оголошено в цьому запиті',
  /** Link at the end of a built-in function's hover documentation */
  'vision.functions.editor.reference': 'Довідник функцій GROQ',
  /** Explanation under the library heading in the Functions panel */
  'vision.functions.library.description':
    'Зберігається в цьому браузері для кожного набору даних проєкту. Ці функції пропонуються в автозавершенні, а лінтер пропонує оголосити ту, яку викликає запит.',
  /** Shown in the Functions panel while the library is empty */
  'vision.functions.library.empty':
    'Збережіть функцію, яку оголошує запит, щоб використовувати її в інших запитах.',
  /** Heading of the functions library in the Functions panel */
  'vision.functions.library.title': 'Бібліотека',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vision.functions.query.empty':
    'Оголосіть власні функції на початку запиту, або встановіть курсор у проекції, наприклад author->{name}, і натисніть кнопку витягування над редактором ({{shortcut}}).',
  /** Heading of the functions the query declares in the Functions panel */
  'vision.functions.query.title': 'У цьому запиті',
  /** Removes a function from the library */
  'vision.functions.remove': 'Видалити з бібліотеки',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vision.functions.replace': 'Замінити в запиті',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vision.functions.reveal': 'Показати {{name}} у редакторі',
  /** Button of a function the query declares that is not in the library yet */
  'vision.functions.save': 'Зберегти в бібліотеку',
  /** Shown on a function the query declares the way the library has it */
  'vision.functions.saved': 'Збережено',
  /** Button of a function the query declares differently from the library's version */
  'vision.functions.update': 'Оновити бібліотеку',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vision.generate.button': 'Згенерувати запит',
  /** Closes the generate query bar */
  'vision.generate.close': 'Закрити',
  /** Explanation under the generate query field */
  'vision.generate.description':
    'Sanity Agent Actions пишуть GROQ на основі вашого опису та типів документів, а Content Lake перевіряє кожну спробу; кожна спроба використовує один кредит ШІ. Це замінює запит у цій вкладці та запускає його; скасування дії в редакторі повертає попередній запит.',
  /** Shown when no query could be generated, above the reason */
  'vision.generate.failed': 'Не вдалося згенерувати запит',
  /** Accessible label of the description field in the generate query bar */
  'vision.generate.label': 'Що має отримувати запит?',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vision.generate.open-anyway': 'Відкрити останню спробу',
  /** Placeholder of the description field in the generate query bar */
  'vision.generate.placeholder':
    "10 останніх авторів, упорядкованих за прізвищем, а потім за ім'ям",
  /** Shown while the first attempt at a query is written */
  'vision.generate.progress': 'Написання запиту…',
  /** Shown while a rejected attempt is retried */
  'vision.generate.progress-retry': 'Виправлення запиту (спроба {{attempt}} із {{max}})…',
  /** Button generating the query */
  'vision.generate.submit': 'Згенерувати',
  /** Badge on a history entry the API CDN answered */
  'vision.history.cdn': 'API CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vision.history.cdn-cache-hit': 'Збіг у кеші CDN',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vision.history.changed': 'Змінено',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vision.history.changes': 'Зміни',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vision.history.changes-failed': 'Не вдалося показати зміни.',
  /** Button retrying to show the changes of a history entry */
  'vision.history.changes-retry': 'Повторити',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vision.history.compared-with': 'Порівняно із запитом від {{time}}',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vision.history.diff.params': 'Параметри',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vision.history.diff.query': 'Запит',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vision.history.diff.query-formatting-only': 'Змінилося лише форматування',
  /** Label of the diff of the query result in a history entry's changes */
  'vision.history.diff.result': 'Результат',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vision.history.diff.url': 'URL-адреса запиту',
  /** Empty state of the history panel */
  'vision.history.empty': 'Ще нічого не отримано',
  /** Status label for a failed fetch in the history */
  'vision.history.failed': 'Невдало',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vision.history.hide-hidden': 'Приховати їх',
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vision.history.hiding': 'Приховано {{fields}}',
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vision.history.only-hidden-changed': 'Змінилися лише приховані поля',
  /** History reason: a tab opened with a generated query fetched it */
  'vision.history.reason.generated': 'Згенерований запит',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vision.history.reason.link': 'Відкрите посилання',
  /** History reason: a live event matched the query's sync tags */
  'vision.history.reason.live': 'Оновлення наживо',
  /** History reason: the live connection asked every client to refetch */
  'vision.history.reason.live-restart': 'Живе з’єднання перезапущено',
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vision.history.reason.live-start': 'Розпочато отримання в реальному часі',
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vision.history.reason.load': 'Запит завантажено',
  /** History reason: the fetch button was pressed */
  'vision.history.reason.manual': 'Кнопка отримання',
  /** History reason: mutations were applied from the Mutate panel */
  'vision.history.reason.mutation': 'Застосовано мутації',
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vision.history.reason.options': 'Параметри змінено',
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vision.history.reason.paste': 'Вставлена URL-адреса',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vision.history.reason.resume': 'Автоматичне повторне отримання відновлено',
  /** History reason: the keyboard shortcut was used */
  'vision.history.reason.shortcut': 'Клавіатурне скорочення',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vision.history.same-result': 'Той самий результат',
  /** Button showing the hidden fields in a history entry's changes */
  'vision.history.show-hidden': 'Показати їх',
  /** Next to a history entry's changes while the hidden fields are shown */
  'vision.history.showing-hidden': 'Показано {{fields}}, приховані за замовчуванням',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vision.history.too-large': 'Занадто великий для порівняння',
  /** A history entry whose result is the same as the previous result */
  'vision.history.unchanged': 'Без змін',
  /** Shown in the Lint panel while the query has no lint findings */
  'vision.lint.empty':
    'Немає результатів лінтингу. Проблеми, які виявляє лінтер GROQ у запиті, відображаються тут під час введення; виберіть одну з них, щоб виділити її в редакторі.',
  /** Where a lint finding sits in the query, shown under its message */
  'vision.lint.position': 'Рядок {{line}}, стовпець {{column}}',
  /** Severity badge of a lint finding */
  'vision.lint.severity.error': 'Помилка',
  /** Severity badge of a lint finding */
  'vision.lint.severity.hint': 'Підказка',
  /** Severity badge of a lint finding */
  'vision.lint.severity.info': 'Інформація',
  /** Severity badge of a lint finding */
  'vision.lint.severity.warning': 'Попередження',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vision.lint.use-suggestion': 'Використати {{suggestion}}',
  /** Badge shown while a tab refetches automatically */
  'vision.live.active': 'Наживо',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vision.live.button': 'Отримувати наживо',
  /** Tooltip of the Live button while automatic refetching is off */
  'vision.live.button.start':
    'Отримати, а потім отримувати знову щоразу, коли документи в результаті змінюються',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vision.live.button.stop':
    'Зупинити отримання при зміні документів у результаті. Отримання за запитом все одно працюватиме для результатів, яких не торкається жодна зміна документа, наприклад now()',
  /** Error shown when the live connection breaks */
  'vision.live.error': 'Оновлення в реальному часі відключено: {{message}}',
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vision.live.stop': 'Зупинити наживо',
  /** Button in the Mutate panel adding a mutation to the list */
  'vision.mutate.add': 'Додати мутацію',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vision.mutate.add.create': 'Створити документ',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vision.mutate.add.delete': 'Видалити документ',
  /** Adds a mutation deleting the documents of the shown result */
  'vision.mutate.add.delete-result': 'Видалити документи в результаті',
  /** Adds a mutation patching a document, its ID to fill in */
  'vision.mutate.add.patch': 'Пропатчити документ',
  /** Adds a mutation patching the documents of the shown result */
  'vision.mutate.add.patch-result': 'Додати патч документів у результаті',
  /** Button applying the mutations a dry run showed */
  'vision.mutate.apply': 'Застосувати до {{dataset}}',
  /** Heading of the error shown when applying the mutations failed */
  'vision.mutate.apply-failed': 'Мутації не було застосовано',
  /** Next to Apply while the mutations as they are have had no dry run */
  'vision.mutate.apply-needs-preview':
    'Застосування надсилає те, що показав пробний запуск: спочатку запустіть його.',
  /** Option giving array items without a _key one */
  'vision.mutate.auto-keys': 'Додати _key до елементів масиву, які його не мають',
  /** Under the option giving array items a _key */
  'vision.mutate.auto-keys.description':
    'Студії потрібен _key на кожному елементі масиву, щоб редагувати його.',
  /** Button showing a document's changes in the dry run */
  'vision.mutate.changes': 'Зміни',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vision.mutate.changes-failed': 'Зміни не вдалося показати.',
  /** Button retrying to show a document's changes */
  'vision.mutate.changes-retry': 'Повторити',
  /** What the Mutate panel does */
  'vision.mutate.description':
    'Пишіть мутації так, як їх приймає Mutations API, у вигляді списку: create, createOrReplace, createIfNotExists, delete і patch, за ID або за GROQ-запитом. Пробний запуск показує, що вони зроблять з кожним документом, нічого не змінюючи; Застосувати потім записує їх у dataset однією транзакцією, від імені вашого облікового запису.',
  /** What the API says went wrong with one of the mutations */
  'vision.mutate.failure-item': 'Мутація {{index}}: {{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vision.mutate.generate.button': 'Згенерувати мутації',
  /** Explanation under the generate mutations field */
  'vision.mutate.generate.description':
    'Дії агента Sanity пишуть мутації на основі вашого опису, документів у результаті та їхніх типів, а пробний запуск перевіряє кожну спробу; кожна спроба використовує один AI-кредит. Вони замінюють мутації тут, де скасування повертає їх назад; нічого не записується, поки ви не застосуєте їх.',
  /** Shown when no mutations could be generated, above the reason */
  'vision.mutate.generate.failed': 'Не вдалося згенерувати мутації',
  /** Accessible label of the description field in the generate mutations bar */
  'vision.mutate.generate.label': 'Що мають робити мутації?',
  /** Placeholder of the description field in the generate mutations bar */
  'vision.mutate.generate.placeholder': 'Змінити заголовок документів у результаті на foobar',
  /** Shown while the first attempt at the mutations is written */
  'vision.mutate.generate.progress': 'Написання мутацій…',
  /** Shown while an attempt the dry run turned down is retried */
  'vision.mutate.generate.progress-retry': 'Виправлення мутацій (спроба {{attempt}} з {{max}})…',
  /** Under the dry run: the fields the diffs leave out */
  'vision.mutate.hiding': 'Зміни не включають {{fields}}, як і History.',
  /** Shown when the mutations are not valid JSON */
  'vision.mutate.invalid-json': 'Мутації не є дійсним JSON: {{message}}',
  /** Shown when a mutation does not name exactly one thing to do */
  'vision.mutate.invalid-mutation':
    'Мутація {{index}} повинна містити рівно одне з: create, createOrReplace, createIfNotExists, delete або patch.',
  /** Label of the mutations editor */
  'vision.mutate.mutations': 'Мутації',
  /** The dry run touched no documents */
  'vision.mutate.no-documents': 'Мутації не торкаються жодного документа.',
  /** Shown when the JSON is not a list of mutations */
  'vision.mutate.not-a-list':
    'Напишіть список мутацій, одну мутацію або тіло запиту зі списком мутацій.',
  /** A document the mutations create */
  'vision.mutate.operation.create': 'Створити',
  /** A document the mutations delete */
  'vision.mutate.operation.delete': 'Видалити',
  /** A document the mutations touch without changing its content */
  'vision.mutate.operation.none': 'Без змін',
  /** A document the mutations change */
  'vision.mutate.operation.update': 'Оновити',
  /** Button running the mutations as a dry run */
  'vision.mutate.preview': 'Пробний запуск',
  /** Heading of the error shown when the dry run failed */
  'vision.mutate.preview-failed': 'Пробний запуск не вдався',
  /** Heading of the dry run's outcome */
  'vision.mutate.preview-heading': 'Пробний запуск',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vision.mutate.stale':
    'Мутації, набір даних або параметри змінилися після цього пробного запуску. Запустіть його знову, щоб застосувати їх.',
  /** How many documents the dry run changes and leaves as they are */
  'vision.mutate.summary': 'Змінено: {{changed}} · Без змін: {{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vision.network.cache': 'Кеш',
  /** The API CDN answered from its cache */
  'vision.network.cache.hit': 'Влучання',
  /** Under the details of a CDN cache hit */
  'vision.network.cache.hit-explained':
    'CDN відповів кешованою відповіддю з розташування поблизу вас; запит не досяг API.',
  /** The API CDN answered with a response this session had not seen */
  'vision.network.cache.miss': 'Промах, наскільки це можна визначити в цій сесії',
  /** The API answered, which caches nothing */
  'vision.network.cache.none': 'Немає, API відповідає на кожен запит свіжим вмістом',
  /** Shown in the Network panel while there is no response */
  'vision.network.empty':
    'Виконайте запит, щоб побачити, яка кінцева точка на нього відповіла, чи з кешу, і де він виконувався.',
  /** In the Network panel: the endpoint that answered */
  'vision.network.endpoint': 'Відповів',
  /** The live API answered */
  'vision.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vision.network.endpoint.cdn': 'API CDN',
  /** In the Network panel: the HTTP method the query was sent with */
  'vision.network.method': 'Метод',
  /** The query and its params went in the URL */
  'vision.network.method.get': 'GET, із запитом і параметрами в URL',
  /** The query and its params went in the request body */
  'vision.network.method.post': 'POST, із запитом і параметрами у вигляді тіла JSON',
  /** Under the method of a POST request: why the query was not sent in the URL */
  'vision.network.method.post-explained':
    'Запит і параметри становлять {{size}} символів як параметри пошуку; починаючи з {{limit}}, @sanity/client надсилає їх як тіло JSON, оскільки API обмежує довжину URL. Параметри залишаються в URL.',
  /** In the Network panel: the region the query ran in */
  'vision.network.region': 'Запит виконано в',
  /** The response did not say where the query ran */
  'vision.network.region.unknown': 'Не повідомлено',
  /** In the Network panel: the round trip and the time on the server */
  'vision.network.timing': 'Час',
  /** The round trip and the server's time for the query, in milliseconds */
  'vision.network.timing.value': '{{e2e}} мс у обидва боки, {{server}} мс на сервері',
  /** In the Network panel: the trace of the request, for Sanity support */
  'vision.network.trace': 'ID трасування',
  /** Hint in the Network panel while queries go to the API */
  'vision.network.use-cdn-hint':
    'Увімкніть «Використовувати API CDN» в опціях, щоб надсилати запити через CDN.',
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vision.network.you': 'Ви',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vision.options.dataset.follows-workspace': 'Відповідає робочій області',
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vision.options.dataset.pin': 'Закріпити набір даних',
  /** Hint under the dataset field while a dataset is pinned */
  'vision.options.dataset.pinned':
    'Закріплено; робоча область може використовувати інший набір даних',
  /** Button that makes the tab follow the workspace's dataset again */
  'vision.options.dataset.use-workspace': 'Використовувати набір даних робочої області',
  /** Label for the "Include content source map" switch */
  'vision.options.include-source-map': 'Включити карту джерел вмісту',
  /** Description for the "Include content source map" switch */
  'vision.options.include-source-map.description':
    'Додає resultSourceMap до відповіді, показаної на вкладці «Карта джерел вмісту».',
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vision.options.perspective.global': 'Глобальна ({{name}})',
  /** Label of the switch that sends queries to the API CDN */
  'vision.options.use-cdn': 'Використовувати API CDN',
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vision.options.use-cdn.anonymous':
    'Ця студія виконує вхід за допомогою cookie, яку API CDN ніколи не отримує: вона відповідає так, ніби це анонімний відвідувач, показуючи те, що показує публічний набір даних.',
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vision.options.use-cdn.blocked':
    'API CDN не обслуговує чернетки чи релізи, тому запити з перспективою {{perspective}} надсилаються до API. З опублікованою чи необробленою перспективою вони використовують CDN.',
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vision.options.use-cdn.blocked.title': 'Запити надсилаються до API, а не до CDN',
  /** Description of the API CDN switch */
  'vision.options.use-cdn.description':
    'Надсилає запит до API CDN, подібно до useCdn: true у @sanity/client, з опублікованою та необробленою перспективами: чернетки та релізи завжди надсилаються до API. Відповіді кешуються на термін до однієї хвилини; панель мережі показує, коли відповідь надійшла з кешу.',
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vision.options.use-cdn.use-published': 'Використовувати опубліковану перспективу',
  /** Label of the variant field */
  'vision.options.variant-label': 'Варіант',
  /** Variant option sending the navbar's variant, named */
  'vision.options.variant.global': 'Глобальний ({{name}})',
  /** Variant option sending the navbar's variant while none is selected there */
  'vision.options.variant.global-none': 'Глобальний (нічого не вибрано)',
  /** Variant option sending no variant */
  'vision.options.variant.none': 'Немає',
  /** Accessible label for collapsing a bottom panel */
  'vision.panel.collapse': 'Згорнути панель',
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vision.panel.delta': 'Дельта',
  /** Accessible label for expanding a bottom panel */
  'vision.panel.expand': 'Розгорнути панель',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vision.panel.explain': 'Пояснення',
  /** Label of the Functions tab in the response panel */
  'vision.panel.functions': 'Функції',
  /** Label of the "History" tab in the response panel */
  'vision.panel.history': 'Історія',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vision.panel.lint': 'Лінт',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vision.panel.mutate': 'Мутація',
  /** Label of the Network tab in the response panel */
  'vision.panel.network': 'Мережа',
  /** Label of the "Options" panel in the request column */
  'vision.panel.options': 'Параметри',
  /** Label of the "Response" tab in the response panel */
  'vision.panel.response': 'Відповідь',
  /** Label of the "Content Source Map" tab in the response panel */
  'vision.panel.source-map': 'Карта джерел вмісту',
  /** Button adding an item to a list param in the params form */
  'vision.params-form.add-item': 'Додати елемент',
  /** Placeholder of a params form field that takes any JSON value */
  'vision.params-form.any-placeholder': 'Будь-яке значення JSON; інший текст надсилається як рядок',
  /** Shown in the params form when the query uses no params */
  'vision.params-form.empty':
    'Запит не використовує параметрів. Кожен $name у ньому отримує тут поле.',
  /** Shown in the params form while the params JSON cannot be parsed */
  'vision.params-form.invalid-json':
    'Параметри не є дійсним JSON. Виправте їх у перегляді JSON, щоб редагувати тут.',
  /** A boolean param's value is not true or false; it is sent anyway */
  'vision.params-form.invalid.boolean': 'Не true і не false; надіслано як {{value}}',
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vision.params-form.invalid.document-type':
    'Не є типом документа в цьому робочому просторі; все одно надіслано',
  /** A whole number param (a slice bound) holds a fraction */
  'vision.params-form.invalid.integer': 'Не ціле число, яке потрібне для зрізів',
  /** A list param's value is not a list; it is sent anyway */
  'vision.params-form.invalid.list': 'Не список; надіслано як {{value}}',
  /** A number param's value is not a number; it is sent anyway */
  'vision.params-form.invalid.number': 'Не число; надіслано як текст',
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vision.params-form.invalid.option': 'Не одне з відомих значень; все одно надіслано',
  /** A text param's value is not text; it is sent anyway */
  'vision.params-form.invalid.string': 'Не текст; надіслано як {{value}}',
  /** Accessible label of an item input of a list param in the params form */
  'vision.params-form.item-label': '${{name}}, елемент {{index}}',
  /** Placeholder of an item input of a list param in the params form */
  'vision.params-form.item-placeholder': 'Елемент',
  /** Under a params form field whose param has no value */
  'vision.params-form.missing': 'Не встановлено: запит не виконується, доки не буде значення',
  /** Shown in the params form when the workspace schema could not be read */
  'vision.params-form.no-schema':
    'Типи беруться лише із запиту: схему робочого простору не вдалося прочитати.',
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vision.params-form.not-set': 'Не встановлено',
  /** Button setting a date and time param to the current time */
  'vision.params-form.now': 'Зараз',
  /** Button removing a param the query does not use from the params */
  'vision.params-form.remove': 'Видалити',
  /** Accessible label of the button removing an item from a list param */
  'vision.params-form.remove-item': 'Видалити елемент',
  /** Shown in the params form when the query does not parse */
  'vision.params-form.syntax-error':
    'Запит не розбирається, тому його параметри наведено без типів.',
  /** Type hint of a params form field: any JSON value */
  'vision.params-form.type.any': 'будь-яке значення JSON',
  /** Type hint of a params form field: true or false */
  'vision.params-form.type.boolean': 'true або false',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vision.params-form.type.datetime': 'дата і час (ISO 8601)',
  /** Type hint of a params form field: a document ID */
  'vision.params-form.type.document-id': 'ID документа',
  /** Type hint of a params form field: one of the workspace's document types */
  'vision.params-form.type.document-type': 'тип документа',
  /** Type hint of a params form field: a whole number */
  'vision.params-form.type.integer': 'ціле число',
  /** Type hint of a params form field: a list of values */
  'vision.params-form.type.list': 'список, кожен {{type}}',
  /** Type hint of a params form field: a number */
  'vision.params-form.type.number': 'число',
  /** Type hint of a params form field: text */
  'vision.params-form.type.string': 'текст',
  /** Heading of the params the query does not use, listed in the params form */
  'vision.params-form.unused': 'Не використовується в запиті',
  /** Before the expressions that use a param, in the params form */
  'vision.params-form.used-in': 'Використовується в',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vision.params.fit-height': 'Розмір за вмістом, {{height}} пікселів',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vision.params.resize':
    'Змінити розмір параметрів: перетягніть або використовуйте клавіші зі стрілками; двічі клацніть або натисніть Enter, щоб знову підлаштувати під вміст',
  /** Tab showing the params as a form inferred from the query */
  'vision.params.view.form': 'Форма',
  /** Tab showing the params as JSON */
  'vision.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vision.params.view.label': 'Редагувати параметри як',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vision.paste.parsed': 'Запит завантажено з вставленого URL',
  /** Toast shown after a curl command for a query was pasted and loaded into the tab */
  'vision.paste.parsed-curl': 'Запит завантажено з вставленої команди cURL',
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vision.paste.unavailable-variant':
    'Вставлений URL використовував варіант "{{variant}}"; виберіть його на панелі навігації, щоб виконати запит із ним.',
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vision.paste.unknown-dataset':
    'Набір даних "{{dataset}}" у вставленому URL тут недоступний, залишено поточний.',
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vision.paste.unsupported-perspective':
    'Перспектива у вставленому URL тут не підтримується, залишено поточну.',
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vision.paste.variants-disabled':
    'Вставлений URL використовував варіант "{{variant}}"; у цьому робочому просторі варіанти вимкнено, тому запит виконується без нього.',
  /** Accessible label for the query actions menu */
  'vision.query.actions': 'Дії запиту',
  /** Tooltip when automatic refetching is not available for the API version */
  'vision.query.auto-refetch.unsupported':
    'Для автоматичного повторного отримання потрібна версія API v2021-03-25 або новіша.',
  /** Toast shown after the query was copied */
  'vision.query.copied': 'Запит скопійовано в буфер обміну',
  /** Menu item copying the query text */
  'vision.query.copy': 'Копіювати запит',
  /** Menu item opening the export query dialog */
  'vision.query.export': 'Експортувати запит…',
  /** Menu item reformatting the query */
  'vision.query.prettify': 'Форматувати запит',
  /** Toast shown when the query could not be reformatted */
  'vision.query.prettify.failed': 'Не вдалося відформатувати запит',
  /** Menu item saving the query to the personal saved queries */
  'vision.query.save': 'Зберегти запит',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vision.query.stop': 'Зупинити',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vision.query.stop.description': 'Зупинити отримання',
  /** Explanation in the settings section about the redesigned experience */
  'vision.redesign.settings.description':
    'Ви використовуєте оновлений інструмент Vision. Якщо ви повернетеся до класичної версії, ваші вкладки та налаштування залишаться в цьому браузері до наступного разу.',
  /** Title of the settings section about the redesigned experience */
  'vision.redesign.settings.title': 'Оновлений Vision (бета)',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vision.redesign.switch-to-classic': 'Перейти до класичного Vision',
  /** Toast button that switches to the redesigned tool */
  'vision.redesign.toast.accept': 'Спробувати зараз',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vision.redesign.toast.description':
    'Вкладки запитів, живе повторне отримання, деталі відповіді та експорт. Ви можете повернутися назад у будь-який час.',
  /** Toast button that hides the invitation */
  'vision.redesign.toast.dismiss': 'Не зараз',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vision.redesign.toast.title': 'Спробуйте оновлений Vision',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vision.redesign.try': 'Спробувати оновлену версію',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vision.redesign.try.description':
    'Перейдіть на оновлений Vision у бета-версії. Ви можете повернутися назад у будь-який час з його бічної панелі.',
  /** Empty state of the response panel before anything was fetched */
  'vision.response.empty': 'Ще нічого не отримано',
  /** Label for the payload size in the response tab */
  'vision.response.payload-size': 'Розмір корисного навантаження',
  /** Label for the sync tags in the response tab */
  'vision.response.sync-tags': 'Теги синхронізації',
  /** Shown when the response carried no sync tags */
  'vision.response.sync-tags.none': 'У відповіді немає тегів синхронізації',
  /** Under the query URL when the request went out as a POST body rather than that URL */
  'vision.response.url.sent-as-post':
    'Надіслано як тіло POST-запиту: запит і параметри завеликі для URL, тому @sanity/client надіслав їх як JSON. Вставлення цього URL у Vision усе одно завантажує запит.',
  /** Accessible label for the result actions menu */
  'vision.result.actions': 'Дії з результатом',
  /** Toast shown after the result was copied */
  'vision.result.copied': 'Результат скопійовано в буфер обміну',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vision.result.copied-value': 'Скопійовано {{path}}',
  /** Menu item and button copying the result as JSON */
  'vision.result.copy': 'Копіювати результат',
  /** Button next to each property in the result tree, copying its value */
  'vision.result.copy-value': 'Копіювати значення',
  /** Empty state of the result view */
  'vision.result.empty': 'Виконайте запит, щоб побачити тут результат',
  /** Button exporting the result as CSV */
  'vision.result.export-csv': 'Експортувати CSV',
  /** Button exporting the result as JSON */
  'vision.result.export-json': 'Експортувати JSON',
  /** Menu item opening the TypeScript export dialog */
  'vision.result.export-typescript': 'Експортувати TypeScript…',
  /** Menu item opening the Zod export dialog */
  'vision.result.export-zod': 'Експортувати Zod…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vision.result.graph.collapse': 'Приховати вміст',
  /** Button fitting the whole graph in view */
  'vision.result.graph.fit': 'Вмістити у вікно',
  /** Accessible label of the graph, saying how to move around in it */
  'vision.result.graph.label':
    'Граф результату: перетягніть, щоб переміщати, прокрутіть, щоб масштабувати; у фокусі стрілки переміщають, + і - масштабують, 0 вписує у вікно',
  /** Ends the note on a graph that leaves part of this result out */
  'vision.result.graph.left-out-hint': 'Перегляди дерева та JSON показують усе це.',
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vision.result.graph.node-limit': "Намальовано лише перші {{nodes}} об'єктів і масивів.",
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vision.result.graph.partial': 'Для {{nodes}} перелічено лише перші {{rows}} записів.',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vision.result.graph.partial.node': '{{name}} ({{entries}} записів)',
  /** Title of the graph node of the result itself */
  'vision.result.graph.root': 'результат',
  /** Button zooming into the graph */
  'vision.result.graph.zoom-in': 'Збільшити',
  /** Button zooming out of the graph */
  'vision.result.graph.zoom-out': 'Зменшити',
  /** Tab showing the result as a graph of its objects and arrays */
  'vision.result.view.graph': 'Граф',
  /** Tab showing the result as indented JSON text, to select and copy from */
  'vision.result.view.json': 'JSON',
  /** Accessible label of the tabs that switch how the result shows */
  'vision.result.view.label': 'Перегляд результату',
  /** Tab showing the result as a tree to browse */
  'vision.result.view.tree': 'Дерево',
  /** Empty state of the saved queries panel */
  'vision.saved.empty':
    'Поки що немає збережених запитів. Збережіть поточний запит за допомогою кнопки +.',
  /** Empty state of a query list when the search matches nothing */
  'vision.saved.empty-search': 'Жоден запит не відповідає вашому пошуку',
  /** Menu item loading a saved query into the active tab */
  'vision.saved.load-in-current-tab': 'Завантажити в поточну вкладку',
  /** Menu item opening a saved query in a new tab */
  'vision.saved.open-in-new-tab': 'Відкрити в новій вкладці',
  /** Menu item renaming a saved query */
  'vision.saved.rename': 'Перейменувати',
  /** Accessible label for the button saving the current query */
  'vision.saved.save-current': 'Зберегти поточний запит',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vision.saved.unavailable-variant':
    'Цей збережений запит використовував варіант "{{variant}}"; виберіть його на панелі навігації, щоб виконати запит з ним.',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vision.saved.unknown-dataset':
    'Набір даних "{{dataset}}" цього збереженого запиту тут недоступний, залишаємо поточний.',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vision.saved.variants-disabled':
    'Цей збережений запит використовував варіант "{{variant}}"; у цьому робочому просторі варіанти вимкнено, тому запит виконується без нього.',
  /** Button in the settings dialog that clears the stored state */
  'vision.settings.clear-storage': 'Очистити сховище',
  /** Confirmation button for clearing the storage */
  'vision.settings.clear-storage.confirm': 'Так, очистити сховище',
  /** Explanation of what clearing the storage does */
  'vision.settings.clear-storage.description':
    'Видаляє ваші особисті збережені запити та бібліотеку функцій, скидає відкриті вкладки та ці значення за замовчуванням у цьому браузері, і повертає до класичного інструмента Vision. Спільні запити зберігаються.',
  /** Toast shown when the saved queries could not be cleared */
  'vision.settings.clear-storage.error': 'Не вдалося очистити збережені запити',
  /** Toast shown after the storage was cleared */
  'vision.settings.clear-storage.success': 'Сховище очищено',
  /** Explanation at the top of the settings dialog */
  'vision.settings.description':
    'Значення за замовчуванням для нових вкладок. Відкриті вкладки зберігають власні параметри.',
  /** Explains the setting listing the fields left out of History diffs */
  'vision.settings.history-diff.description':
    'Один шлях поля на рядок. Шлях збігається на будь-якій глибині результату, тому _rev приховує ревізію кожного документа в ньому. Кожна різниця (diff) все одно може їх показувати.',
  /** Button restoring the default fields left out of History diffs */
  'vision.settings.history-diff.reset': 'Скинути до значень за замовчуванням',
  /** Label of the setting listing the fields left out of History diffs */
  'vision.settings.history-diff.title': 'Поля, приховані з різниць (diff) історії',
  /** Title of the settings dialog */
  'vision.settings.title': 'Налаштування',
  /** Empty state of the shared queries panel */
  'vision.shared.empty':
    'Поки що немає спільних запитів. Поділіться збереженим запитом, щоб зробити його доступним для всіх, хто використовує цей набір даних.',
  /** Shortcut description: close dialogs and menus */
  'vision.shortcuts.close': 'Закрити діалоги та меню',
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vision.shortcuts.complete': 'Доповнити назву функції',
  /** Shortcut description: copy the query */
  'vision.shortcuts.copy-query': 'Копіювати запит',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vision.shortcuts.extract-function': 'Витягти проєкцію під курсором у функцію',
  /** Shortcut description: run the query */
  'vision.shortcuts.fetch': 'Виконати запит',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vision.shortcuts.next-finding': 'Перейти до наступного результату перевірки (lint)',
  /** Shortcut description: reformat the query */
  'vision.shortcuts.prettify': 'Форматувати запит',
  /** Title of the keyboard shortcuts dialog */
  'vision.shortcuts.title': 'Клавіатурні скорочення',
  /** Sidebar toggle: show icons only */
  'vision.sidebar.collapse': 'Згорнути бічну панель',
  /** Sidebar toggle: show labels next to the icons */
  'vision.sidebar.expand': 'Розгорнути бічну панель',
  /** Accessible label for the sidebar navigation */
  'vision.sidebar.label': 'Бічна панель Vision',
  /** Sidebar item and drawer title for personal saved queries */
  'vision.sidebar.saved-queries': 'Збережені запити',
  /** Sidebar item opening the settings dialog */
  'vision.sidebar.settings': 'Налаштування',
  /** Sidebar item and drawer title for shared queries */
  'vision.sidebar.shared-queries': 'Спільні запити',
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vision.sidebar.shortcuts': 'Клавіатурні скорочення',
  /** Empty state of the content source map panel */
  'vision.source-map.empty':
    'У відповіді немає карти джерел вмісту. Увімкніть «Включити карту джерел вмісту» в розділі «Параметри» та повторіть запит.',
  /** Accessible label of the divider between the result and the response details panel */
  'vision.split.bottom-panel':
    'Змінити розмір панелі деталей відповіді: перетягніть або використовуйте клавіші зі стрілками; Home і End переходять до меж, Enter скидає',
  /** Accessible label of the divider between the request and response panes */
  'vision.split.request-response':
    'Змінити розмір панелей запиту та відповіді: перетягніть або використовуйте клавіші зі стрілками; Home і End переходять до меж, Enter скидає',
  /** Accessible label for the button closing a query tab */
  'vision.tabs.close-tab': 'Закрити вкладку',
  /** Accessible label for the list of query tabs */
  'vision.tabs.label': 'Вкладки запитів',
  /** Accessible label for the button opening a new query tab */
  'vision.tabs.new-tab': 'Нова вкладка',
  /** Placeholder of the input renaming a tab */
  'vision.tabs.title-placeholder': 'Назва вкладки',
  /** Title of a tab whose query is still empty */
  'vision.tabs.untitled': 'Запит без назви',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vision.webmcp.check-query': 'Перевірити GROQ-запит у Vision',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vision.webmcp.describe-schema': 'Описати схему у Vision',
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vision.webmcp.explain-query': 'Пояснити GROQ-запит у Vision',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vision.webmcp.get-state': 'Прочитати відкриту вкладку Vision',
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vision.webmcp.open-query': 'Відкрити GROQ-запит у Vision',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vision.webmcp.preview-mutations': 'Попередній перегляд мутацій у Vision',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vision.webmcp.run-query': 'Виконати GROQ-запит у Vision',
})
