import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Капіяваць у буфер абмену',
  /** Label for deleting a query */
  'action.delete': 'Выдаліць',
  /** Label for editing a query's title */
  'action.edit-title': 'Рэдагаваць назву',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Спыніць',
  /** Label for setting up a listener */
  'action.listen-execute': 'Слухаць',
  /** Label for query loading table */
  'action.load-queries': 'Загрузіць запыты',
  /** Label for loading a query */
  'action.load-query': 'Загрузіць запыт',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Адмяніць',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Выканаць запыт',
  /** Label for saving a query */
  'action.save-personal-copy': 'Захаваць асабісты экзэмпляр',
  /** Label for saving a personal query */
  'action.save-personal-query': 'Захаваць як асабісты',
  /** Label for saving a query */
  'action.save-query': 'Захаваць запыт',
  /** Label for saving a shared query */
  'action.save-shared-query': 'Захаваць як агульны',
  /** Label for unsharing a query */
  'action.unshare': 'Адмяніць агульны доступ',
  /** Label for updating a query */
  'action.update': 'Абнавіць',

  /** Label for actions user can take */
  'label.actions': 'Дзеянні',
  /** Label for all saved queries */
  'label.all': 'Усе',
  /** Label for saved queries that have been edited */
  'label.edited': 'Адрэдагавана',
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Новае',
  /** Label for query type "personal" */
  'label.personal': 'Асабісты',
  /** Label for savedAt date */
  'label.saved-at': 'Захавана ў',
  /** Saved queries */
  'label.saved-queries': 'Захаваныя запыты',
  /** Search queries */
  'label.search-queries': 'Шукаць запыты',
  /** Share query */
  'label.share': 'Падзяліцца',
  /** Label for query type "shared" */
  'label.shared': 'Агульны',
  /** Label for saved query type "team" */
  'label.team': 'Каманда',
  /** Label for untitled query fallback */
  'label.untitled-query': 'Без назвы',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': "Параметры не з'яўляюцца сапраўдным JSON",
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Параметры',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Слупок',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Радок',
  /** Extra explanation when a 400 is returned for a release perspective on an old API version */
  'query.error.unsupported-release-perspective':
    'Гэта версія API не падтрымлівае складаныя перспектывы. Выкарыстоўвайце {{apiVersion}} або пазнейшую версію.',
  /** Extra explanation when a 400 is returned for a variant on an incompatible API version */
  'query.error.unsupported-variant':
    'Гэта версія API не падтрымлівае варыянты кантэнту. Выкарыстоўвайце эксперыментальную версію API ({{apiVersion}}).',
  /** Label for "Query" editor/input */
  'query.label': 'Запыт',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'URL запыту',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'Час ад пачатку да канца',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'Час выканання',
  /** Label for "Result" explorer/view */
  'result.label': 'Вынік',
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable': 'Рэзультат немагчыма закадаваць у фармаце CSV',
  /** Label for "Save result as" result action */
  'result.save-result-as-format': 'Захаваць вынік як <SaveResultButtons/>',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'не прымяняецца',

  /** Query already saved error label */
  'save-query.already-saved': 'Запыт ужо захаваны',
  /** Save error label */
  'save-query.error': 'Памылка пры захаванні запыту',
  /** Save personal copy success label */
  'save-query.personal-copy-success': 'Асабісты экзэмпляр захаваны',
  /** Warning displayed before sharing a query */
  'save-query.share-warning':
    'Агульныя запыты захоўваюцца як дакументы ў вашым dataset і ўлічваюцца ў вашай квоце дакументаў.',
  /** Save shared query success label */
  'save-query.shared-success': 'Агульны запыт захаваны',
  /** Save success label */
  'save-query.success': 'Запыт захаваны',
  /** Save unshared query success label */
  'save-query.unshared-success': 'Запыт перанесены ў асабістыя',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'Версія API',
  /** Tooltip shown when the API version selector is locked because a variant is selected */
  'settings.api-version-locked-for-variant': 'Калі абраны варыянт, версія API павінна быць vX.',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'Карыстацкая версія API',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Dataset',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'Несапраўдная версія API',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'Іншае',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspective',
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    'Перспектыва "<code>previewDrafts</code>" была перайменавана ў "<code>drafts</code>" і цяпер застарэлая. Гэтая змена дзейнічае для ўсіх версій з падтрымкай перспектывы (>= v2021-03-25).',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Чытаць дакументацыю',
  /** Option for selecting default perspective */
  'settings.perspectives.default': 'Няма перспектывы (API па змаўчанні)',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Perspectives дазваляюць вашаму запыту працаваць з рознымі "відамі" кантэнту ў вашым dataset',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    'Перспектыва па змаўчанні зменіцца з "<code>raw</code>" на "<code>published</code>" у будучай версіі API. Калі ласка, звярніцеся да дакументацыі для атрымання больш падрабязнай інфармацыі.',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': 'Прымацаваны рэліз',
  /** Label for the scheduled drafts perspective */
  'settings.perspectives.scheduled-drafts': 'Запланаваныя чарнавікі',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspectives',

  /** Tooltip line of every control that calls Sanity Agent Actions, which bills AI credits */
  'vision.agent-actions.credits': 'Выкарыстоўвае адзін AI-крэдыт на запыт',
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vision.ai-credits.balance': 'Засталося {{balance}} з {{quota}} AI-крэдытаў у гэтым месяцы.',
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vision.ai-credits.deficit':
    'Выкарыстана {{used}} AI-крэдытаў у гэтым месяцы, на {{deficit}} больш за ўключаныя {{quota}}.',
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vision.ai-credits.limit.description':
    'Ваша арганізацыя выкарыстала {{used}} з {{quota}} AI-крэдытаў у гэтым месяцы, таму Sanity Agent Actions прыпыненыя да наступнага месяца або да павышэння ліміту выдаткаў.',
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vision.ai-credits.limit.description-unknown':
    'Ваша арганізацыя дасягнула ліміту выдаткаў на AI-крэдыты, таму Sanity Agent Actions прыпыненыя да наступнага месяца або да павышэння ліміту.',
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vision.ai-credits.limit.learn-more': 'Як працуюць AI-крэдыты',
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vision.ai-credits.limit.manage': 'Кіраваць AI-крэдытамі',
  /** Title of the card shown where the organization is out of AI credits */
  'vision.ai-credits.limit.title': 'Няма AI-крэдытаў',
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vision.ai-credits.usage': 'Выкарыстанне AI',
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vision.ai-credits.used': 'Выкарыстана {{used}} AI-крэдытаў у гэтым месяцы.',
  /** Button in the request column's action bar naming the API version requests go out with */
  'vision.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vision.api-version.button-cdn': 'API CDN {{version}}',
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vision.api-version.button-invalid': 'Незавершаная версія API',
  /** Tooltip of the API version button */
  'vision.api-version.tooltip':
    'Запыты выконваюцца супраць версіі API {{version}}. Выберыце, каб змяніць яе ў Опцыях.',
  /** Tooltip of the API version button while queries go through the API CDN */
  'vision.api-version.tooltip-cdn':
    'Запыты выконваюцца праз API CDN з версіяй API {{version}}. Выберыце, каб змяніць яе ў Опцыях.',
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vision.api-version.tooltip-cdn-blocked':
    'Запыты выконваюцца супраць API з версіяй {{version}}, а не праз API CDN: ён не абслугоўвае перспектыву {{perspective}}. Выберыце, каб змяніць яе ў Опцыях.',
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vision.api-version.tooltip-invalid':
    'Версія API ў Опцыях незавершаная, таму нічога нельга атрымаць, пакуль яна не будзе завершана.',
  /** Tooltip of the API version button while a selected variant forces the variants API version */
  'vision.api-version.tooltip-locked':
    'Запыты выконваюцца супраць версіі API {{version}}, якая патрэбна выбранаму варыянту.',
  /** Label of the document after the change in the Delta panel */
  'vision.delta.after': 'Пасля',
  /** Label of the document before the change in the Delta panel */
  'vision.delta.before': 'Да',
  /** What the Delta panel does */
  'vision.delta.description':
    'Выконвае запыт у рэжыме дэльты, як гэта робяць GROQ-вэбхукі, слухачы і Sanity Functions: before() і after() — гэта дакумент да і пасля змены, @ — гэта дакумент пасля змены, а delta::changedAny() параўноўвае іх. Выконваецца ў браўзеры з дапамогай groq-js. Пустая старана азначае адсутнасць дакумента: змена яго стварае або выдаляе.',
  /** Label of the document ID field in the Delta panel */
  'vision.delta.document-id': 'ID дакумента',
  /** Shown when there is a query but no documents to compare */
  'vision.delta.empty': 'Загрузіце гісторыю дакумента або запішыце дакументы ў полі Да і Пасля.',
  /** Shown when the query fails in delta mode */
  'vision.delta.failed': 'Не ўдалося выканаць запыт у рэжыме дэльты: {{message}}',
  /** Shown when the After document is not valid JSON */
  'vision.delta.invalid-after': "Поле Пасля не з'яўляецца сапраўдным JSON: {{message}}",
  /** Shown when the Before document is not valid JSON */
  'vision.delta.invalid-before': "Значэнне Before не з'яўляецца сапраўдным JSON: {{message}}",
  /** Button loading the document's revisions from the History API */
  'vision.delta.load': 'Загрузіць гісторыю',
  /** Shown when the history could not be loaded */
  'vision.delta.load-failed': 'Не ўдалося загрузіць гісторыю: {{message}}',
  /** A delta filter that is true for the change */
  'vision.delta.matches':
    'Супадае: вэбхук або функцыя з гэтым фільтрам запускаецца для гэтай змены.',
  /** A delta filter that is false for the change */
  'vision.delta.no-match':
    'Не супадае: вэбхук або функцыя з гэтым фільтрам не запускаецца для гэтай змены.',
  /** Shown while the query or its params cannot be sent */
  'vision.delta.no-request': 'Выпраўце запыт і яго параметры, каб выканаць яго ў рэжыме delta.',
  /** Heading of the delta result */
  'vision.delta.result': 'Вынік',
  /** The After choice for a change that deletes the document */
  'vision.delta.revision.none-after': 'Нічога: змена выдаляе дакумент',
  /** The Before choice for a change that creates the document */
  'vision.delta.revision.none-before': 'Нічога: змена стварае дакумент',
  /** A revision in the Before and After lists */
  'vision.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vision.drawer.close': 'Закрыць панэль',
  /** Explanation at the top of the Explain panel */
  'vision.explain.description':
    'План запыту — гэта спосаб, якім Content Lake выконвае запыт: што ён чытае, фільтруе і сартуе падчас чытання, і што застаецца для наступных крокаў. «Растлумачыць мне гэта» выкарыстоўвае Sanity Agent Actions, каб апісаць запыт і яго план простымі словамі, што выкарыстоўвае адзін AI-крэдыт.',
  /** Shown in the Explain panel while there is no valid query to explain */
  'vision.explain.empty': 'Напішыце запыт, каб растлумачыць яго.',
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vision.explain.explain': 'Растлумачыць мне гэта',
  /** Shown when the explanation could not be written */
  'vision.explain.failed': 'Не ўдалося растлумачыць запыт: {{message}}',
  /** A count the index computes without reading the documents */
  'vision.explain.insight.aggregate': 'Падлічана ў індэксе, без чытання дакументаў.',
  /** A subquery the plan runs once for all documents */
  'vision.explain.insight.batched-subquery':
    'Падзапыт выконваецца адзін раз для ўсіх дакументаў, за адзін пакетны запыт, а не для кожнага дакумента паасобку.',
  /** Part of the filter runs in memory; the expression follows */
  'vision.explain.insight.filter-in-memory':
    'Частка фільтра выконваецца ў памяці, пасля чытання: кожны дакумент, які прапускае індэкс, спачатку чытаецца, што запавольвае працу на вялікіх наборах даных. Злучэнні (->) і функцыі ў фільтры не могуць выкарыстоўваць індэкс.',
  /** The index sorts and limits while reading */
  'vision.explain.insight.index-sort-limit':
    'Індэкс сартуе і абмяжоўвае дакументы падчас іх чытання.',
  /** The plan slices in memory */
  'vision.explain.insight.slice-in-memory':
    'Зрэз бярэцца ў памяці пасля чытання, а не як абмежаванне падчас чытання.',
  /** The plan sorts in memory */
  'vision.explain.insight.sort-in-memory':
    'Сартаванне адбываецца ў памяці пасля чытання кожнага супадзення. Сартуйце па атрыбутах, якія можа сартаваць індэкс.',
  /** Link under the plan insights to the guide on fast queries */
  'vision.explain.insights.guide': 'Высокапрадукцыйны GROQ',
  /** Heading of the plan insights in the Explain panel */
  'vision.explain.insights.title': 'Што вылучаецца',
  /** Button in the Explain panel fetching the query plan */
  'vision.explain.plan': 'Паказаць план запыту',
  /** Shown when the query plan could not be fetched */
  'vision.explain.plan-failed': 'Не ўдалося атрымаць план запыту: {{message}}',
  /** Heading of the query plan in the Explain panel */
  'vision.explain.plan-title': 'План запыту',
  /** Toast shown after a code snippet was copied */
  'vision.export-query.copied': 'Фрагмент скапіяваны ў буфер абмену',
  /** Label for the button that copies a code snippet */
  'vision.export-query.copy': 'Скапіяваць фрагмент',
  /** Explanation at the top of the export query dialog */
  'vision.export-query.description':
    'Выканайце гэты запыт па-за студыяй з дапамогай аднаго з гэтых фрагментаў.',
  /** Note under the curl snippet when the query is sent as a request body rather than in the URL */
  'vision.export-query.post-body-note':
    'Запыт і параметры займаюць {{size}} сімвалаў у якасці параметраў пошуку; пачынаючы з {{limit}}, @sanity/client адпраўляе іх як JSON-цела замест URL, таму фрагмент робіць тое ж самае.',
  /** Title of the dialog that exports the query as code snippets */
  'vision.export-query.title': 'Экспарт запыту',
  /** Note about authentication in the export query dialog */
  'vision.export-query.token-note':
    'Для прыватных наборах даных патрэбен API-токен. Для публічных набораў даных можна прыбраць загаловак Authorization.',
  /** Toast shown after the generated code was copied */
  'vision.export-types.copied': 'Код скапіяваны ў буфер абмену',
  /** Label for the button that copies the generated code */
  'vision.export-types.copy': 'Скапіяваць код',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vision.export-types.empty':
    'Спачатку выканайце запыт, каб быў вынік, з якога можна атрымаць тыпы.',
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vision.export-types.schema-error': 'Не атрымалася ацаніць схему: {{message}}',
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vision.export-types.source.result':
    'Атрымана на аснове запампаванага выніку, паколькі запыт немагчыма было ацаніць па схеме працоўнай прасторы.',
  /** Note shown when the types were derived from the workspace schema */
  'vision.export-types.source.schema':
    'Атрымана на аснове схемы працоўнай прасторы, гэтак жа, як гэта робіць sanity typegen.',
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vision.export-types.stale-result':
    'Паказаны вынік быў атрыманы для іншага запыту ці параметраў. Спачатку выканайце бягучы запыт, каб быў вынік, з якога можна атрымаць тыпы.',
  /** Title of the dialog exporting TypeScript types for the result */
  'vision.export-types.title-typescript': 'Экспарт TypeScript',
  /** Title of the dialog exporting a Zod schema for the result */
  'vision.export-types.title-zod': 'Экспарт Zod',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vision.functions.add': 'Дадаць у запыт',
  /** Shown on a library function the query declares the same way */
  'vision.functions.declared': 'У гэтым запыце',
  /** Lint action on a call of a library function the query does not declare */
  'vision.functions.editor.add-from-library': 'Дадаць яе',
  /** Note in a function's hover documentation: the API version it needs */
  'vision.functions.editor.api-version': 'Патрабуе версію API {{version}} або навей',
  /** Detail of a completion for a custom function the query declares */
  'vision.functions.editor.completion-declared': 'у гэтым запыце',
  /** Detail of a completion for a library function, which declares it too */
  'vision.functions.editor.completion-library': 'з вашай бібліятэкі',
  /** Note in the hover documentation of a custom function the query declares */
  'vision.functions.editor.declared-on': "Уласная функцыя, аб'яўлена ў радку {{line}}",
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vision.functions.editor.delta-only':
    'Працуе толькі ў рэжыме дэльты, дзе вэб-хукі і Sanity Functions выконваюць свае фільтры',
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vision.functions.editor.extract': 'Вынесці ў функцыю',
  /** Note in the hover documentation of a library function the query does not declare */
  'vision.functions.editor.in-library': "У вашай бібліятэцы функцый, не аб'яўлена ў гэтым запыце",
  /** Link at the end of a built-in function's hover documentation */
  'vision.functions.editor.reference': 'Даведнік функцый GROQ',
  /** Explanation under the library heading in the Functions panel */
  'vision.functions.library.description':
    "Захоўваецца ў гэтым браўзеры для кожнага набору даных праекта. Аўтазапаўненне прапануе гэтыя функцыі, а лінт прапануе аб'явіць тую, якую выклікае запыт.",
  /** Shown in the Functions panel while the library is empty */
  'vision.functions.library.empty':
    "Захавайце функцыю, аб'яўленую ў запыце, каб выкарыстоўваць яе ў іншых запытах.",
  /** Heading of the functions library in the Functions panel */
  'vision.functions.library.title': 'Бібліятэка',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vision.functions.query.empty':
    "Аб'явіце ўласныя функцыі ў пачатку запыту, або пастаўце курсор у праекцыі, напрыклад author->{name}, і націсніце кнопку выдзялення над рэдактарам ({{shortcut}}).",
  /** Heading of the functions the query declares in the Functions panel */
  'vision.functions.query.title': 'У гэтым запыце',
  /** Removes a function from the library */
  'vision.functions.remove': 'Выдаліць з бібліятэкі',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vision.functions.replace': 'Замяніць у запыце',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vision.functions.reveal': 'Паказаць {{name}} у рэдактары',
  /** Button of a function the query declares that is not in the library yet */
  'vision.functions.save': 'Захаваць у бібліятэку',
  /** Shown on a function the query declares the way the library has it */
  'vision.functions.saved': 'Захавана',
  /** Button of a function the query declares differently from the library's version */
  'vision.functions.update': 'Абнавіць бібліятэку',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vision.generate.button': 'Стварыць запыт',
  /** Closes the generate query bar */
  'vision.generate.close': 'Закрыць',
  /** Explanation under the generate query field */
  'vision.generate.description':
    'Sanity Agent Actions пішуць GROQ на падставе вашага апісання і тыпаў дакументаў, а Content Lake правярае кожную спробу; кожная спроба выкарыстоўвае адзін AI-крэдыт. Гэта замяняе запыт на гэтай укладцы і запускае яго; адмена ў рэдактары вяртае папярэдні запыт.',
  /** Shown when no query could be generated, above the reason */
  'vision.generate.failed': 'Не ўдалося стварыць запыт',
  /** Accessible label of the description field in the generate query bar */
  'vision.generate.label': 'Што павінен атрымаць запыт?',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vision.generate.open-anyway': 'Адкрыць апошнюю спробу',
  /** Placeholder of the description field in the generate query bar */
  'vision.generate.placeholder': '10 апошніх аўтараў, упарадкаваных па прозвішчы, а потым па імені',
  /** Shown while the first attempt at a query is written */
  'vision.generate.progress': 'Напісанне запыту…',
  /** Shown while a rejected attempt is retried */
  'vision.generate.progress-retry': 'Выпраўленне запыту (спроба {{attempt}} з {{max}})…',
  /** Button generating the query */
  'vision.generate.submit': 'Стварыць',
  /** Badge on a history entry the API CDN answered */
  'vision.history.cdn': 'API CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vision.history.cdn-cache-hit': 'Трапленне ў кэш CDN',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vision.history.changed': 'Зменена',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vision.history.changes': 'Змены',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vision.history.changes-failed': 'Не ўдалося адлюстраваць змены.',
  /** Button retrying to show the changes of a history entry */
  'vision.history.changes-retry': 'Паўтарыць',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vision.history.compared-with': 'Параўнана з запытам у {{time}}',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vision.history.diff.params': 'Параметры',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vision.history.diff.query': 'Запыт',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vision.history.diff.query-formatting-only': 'Змянілася толькі фарматаванне',
  /** Label of the diff of the query result in a history entry's changes */
  'vision.history.diff.result': 'Вынік',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vision.history.diff.url': 'URL запыту',
  /** Empty state of the history panel */
  'vision.history.empty': 'Пакуль нічога не атрымана',
  /** Status label for a failed fetch in the history */
  'vision.history.failed': 'Памылка',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vision.history.hide-hidden': 'Схаваць іх',
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vision.history.hiding': 'Хавае {{fields}}',
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vision.history.only-hidden-changed': 'Змяніліся толькі схаваныя палі',
  /** History reason: a tab opened with a generated query fetched it */
  'vision.history.reason.generated': 'Згенераваны запыт',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vision.history.reason.link': 'Адкрыта спасылка',
  /** History reason: a live event matched the query's sync tags */
  'vision.history.reason.live': 'Абнаўленне ў рэжыме рэальнага часу',
  /** History reason: the live connection asked every client to refetch */
  'vision.history.reason.live-restart': 'Жывое злучэнне перазапушчана',
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vision.history.reason.live-start': 'Жывы запыт запушчаны',
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vision.history.reason.load': 'Запыт загружаны',
  /** History reason: the fetch button was pressed */
  'vision.history.reason.manual': 'Кнопка запыту',
  /** History reason: mutations were applied from the Mutate panel */
  'vision.history.reason.mutation': 'Прыменены мутацыі',
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vision.history.reason.options': 'Параметры зменены',
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vision.history.reason.paste': 'Устаўлены URL',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vision.history.reason.resume': 'Аўтаматычнае паўторнае атрыманне адноўлена',
  /** History reason: the keyboard shortcut was used */
  'vision.history.reason.shortcut': 'Спалучэнне клавіш',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vision.history.same-result': 'Той жа вынік',
  /** Button showing the hidden fields in a history entry's changes */
  'vision.history.show-hidden': 'Паказаць іх',
  /** Next to a history entry's changes while the hidden fields are shown */
  'vision.history.showing-hidden': 'Паказваецца {{fields}}, схаваныя па змаўчанні',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vision.history.too-large': 'Занадта вялікі для параўнання',
  /** A history entry whose result is the same as the previous result */
  'vision.history.unchanged': 'Без змен',
  /** Shown in the Lint panel while the query has no lint findings */
  'vision.lint.empty':
    'Няма вынікаў лінтавання. Праблемы, якія GROQ-лінтар знаходзіць у запыце, пералічваюцца тут падчас набору тэксту; выберыце адну, каб вылучыць яе ў рэдактары.',
  /** Where a lint finding sits in the query, shown under its message */
  'vision.lint.position': 'Радок {{line}}, калонка {{column}}',
  /** Severity badge of a lint finding */
  'vision.lint.severity.error': 'Памылка',
  /** Severity badge of a lint finding */
  'vision.lint.severity.hint': 'Падказка',
  /** Severity badge of a lint finding */
  'vision.lint.severity.info': 'Інфармацыя',
  /** Severity badge of a lint finding */
  'vision.lint.severity.warning': 'Папярэджанне',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vision.lint.use-suggestion': 'Выкарыстаць {{suggestion}}',
  /** Badge shown while a tab refetches automatically */
  'vision.live.active': 'У жывым рэжыме',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vision.live.button': 'Жывое атрыманне',
  /** Tooltip of the Live button while automatic refetching is off */
  'vision.live.button.start':
    'Атрымаць, а затым атрымліваць зноў кожны раз, калі дакументы ў выніку змяняюцца',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vision.live.button.stop':
    'Спыніць атрыманне пры змене дакументаў у выніку. Атрыманне па-ранейшаму працуе па запыце для вынікаў, якіх не кранаюцца змены дакументаў, напрыклад now()',
  /** Error shown when the live connection breaks */
  'vision.live.error': 'Жывыя абнаўленні адключаны: {{message}}',
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vision.live.stop': 'Спыніць жывое атрыманне',
  /** Button in the Mutate panel adding a mutation to the list */
  'vision.mutate.add': 'Дадаць мутацыю',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vision.mutate.add.create': 'Стварыць дакумент',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vision.mutate.add.delete': 'Выдаліць дакумент',
  /** Adds a mutation deleting the documents of the shown result */
  'vision.mutate.add.delete-result': 'Выдаліць дакументы ў выніку',
  /** Adds a mutation patching a document, its ID to fill in */
  'vision.mutate.add.patch': 'Унесці праўкі ў дакумент',
  /** Adds a mutation patching the documents of the shown result */
  'vision.mutate.add.patch-result': 'Змяніць (patch) дакументы ў выніку',
  /** Button applying the mutations a dry run showed */
  'vision.mutate.apply': 'Ужыць да {{dataset}}',
  /** Heading of the error shown when applying the mutations failed */
  'vision.mutate.apply-failed': 'Мутацыі не былі ўжыты',
  /** Next to Apply while the mutations as they are have had no dry run */
  'vision.mutate.apply-needs-preview':
    'Ужыванне адпраўляе тое, што паказаў пробны запуск: спачатку запусціце яго.',
  /** Option giving array items without a _key one */
  'vision.mutate.auto-keys': 'Дадаць _key да элементаў масіва, у якіх яго няма',
  /** Under the option giving array items a _key */
  'vision.mutate.auto-keys.description':
    'Студыі патрэбны _key у кожным элеменце масіва, каб яго рэдагаваць.',
  /** Button showing a document's changes in the dry run */
  'vision.mutate.changes': 'Змены',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vision.mutate.changes-failed': 'Не атрымалася паказаць змены.',
  /** Button retrying to show a document's changes */
  'vision.mutate.changes-retry': 'Паўтарыць',
  /** What the Mutate panel does */
  'vision.mutate.description':
    'Пішыце мутацыі так, як іх прымае Mutations API, у спісе: create, createOrReplace, createIfNotExists, delete і patch, па ID або па GROQ-запыце. Пробны запуск паказвае, што яны зробяць з кожным дакументам, нічога не змяняючы; затым «Ужыць» запісвае іх у dataset адной транзакцыяй, пад вашым уліковым запісам.',
  /** What the API says went wrong with one of the mutations */
  'vision.mutate.failure-item': 'Мутацыя {{index}}: {{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vision.mutate.generate.button': 'Згенераваць мутацыі',
  /** Explanation under the generate mutations field */
  'vision.mutate.generate.description':
    'Sanity Agent Actions пішуць мутацыі на аснове вашага апісання, дакументаў у выніку і іх тыпаў, а пробны запуск правярае кожную спробу; кожная спроба выкарыстоўвае адзін AI-крэдыт. Яны замяняюць мутацыі тут, дзе адмена вяртае іх назад; нічога не запісваецца, пакуль вы іх не ўжывяце.',
  /** Shown when no mutations could be generated, above the reason */
  'vision.mutate.generate.failed': 'Не атрымалася згенераваць мутацыі',
  /** Accessible label of the description field in the generate mutations bar */
  'vision.mutate.generate.label': 'Што павінны рабіць мутацыі?',
  /** Placeholder of the description field in the generate mutations bar */
  'vision.mutate.generate.placeholder': 'Змяніць загаловак дакументаў у выніку на foobar',
  /** Shown while the first attempt at the mutations is written */
  'vision.mutate.generate.progress': 'Пішам мутацыі…',
  /** Shown while an attempt the dry run turned down is retried */
  'vision.mutate.generate.progress-retry': 'Выпраўляем мутацыі (спроба {{attempt}} з {{max}})…',
  /** Under the dry run: the fields the diffs leave out */
  'vision.mutate.hiding': 'Змены не ўключаюць {{fields}}, як і History.',
  /** Shown when the mutations are not valid JSON */
  'vision.mutate.invalid-json': "Мутацыі не з'яўляюцца сапраўдным JSON: {{message}}",
  /** Shown when a mutation does not name exactly one thing to do */
  'vision.mutate.invalid-mutation':
    'Мутацыі {{index}} патрэбна роўна адно з: create, createOrReplace, createIfNotExists, delete або patch.',
  /** Label of the mutations editor */
  'vision.mutate.mutations': 'Мутацыі',
  /** The dry run touched no documents */
  'vision.mutate.no-documents': 'Мутацыі не закранаюць ніводнага дакумента.',
  /** Shown when the JSON is not a list of mutations */
  'vision.mutate.not-a-list':
    'Напішыце спіс мутацый, адну мутацыю або цела запыту са спісам мутацый.',
  /** A document the mutations create */
  'vision.mutate.operation.create': 'Стварыць',
  /** A document the mutations delete */
  'vision.mutate.operation.delete': 'Выдаліць',
  /** A document the mutations touch without changing its content */
  'vision.mutate.operation.none': 'Без змен',
  /** A document the mutations change */
  'vision.mutate.operation.update': 'Абнавіць',
  /** Button running the mutations as a dry run */
  'vision.mutate.preview': 'Пробны запуск',
  /** Heading of the error shown when the dry run failed */
  'vision.mutate.preview-failed': 'Пробны запуск не ўдаўся',
  /** Heading of the dry run's outcome */
  'vision.mutate.preview-heading': 'Пробны запуск',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vision.mutate.stale':
    'Мутацыі, dataset або параметры змяніліся пасля гэтага пробнага запуску. Запусціце яго зноў, каб прымяніць іх.',
  /** How many documents the dry run changes and leaves as they are */
  'vision.mutate.summary': 'Зменена: {{changed}} · Без змен: {{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vision.network.cache': 'Кэш',
  /** The API CDN answered from its cache */
  'vision.network.cache.hit': 'Трапленне',
  /** Under the details of a CDN cache hit */
  'vision.network.cache.hit-explained':
    'CDN адказаў кэшаванымі дадзенымі з месца, блізкага да вас; запыт не дасягнуў API.',
  /** The API CDN answered with a response this session had not seen */
  'vision.network.cache.miss': 'Прамах, наколькі можна меркаваць па гэтай сесіі',
  /** The API answered, which caches nothing */
  'vision.network.cache.none': 'Няма, API адказвае на кожны запыт свежым кантэнтам',
  /** Shown in the Network panel while there is no response */
  'vision.network.empty':
    'Выканайце запыт, каб убачыць, які endpoint на яго адказаў, ці быў гэта кэш, і дзе ён выконваўся.',
  /** In the Network panel: the endpoint that answered */
  'vision.network.endpoint': 'Адказаў',
  /** The live API answered */
  'vision.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vision.network.endpoint.cdn': 'API CDN',
  /** In the Network panel: the HTTP method the query was sent with */
  'vision.network.method': 'Метад',
  /** The query and its params went in the URL */
  'vision.network.method.get': 'GET, з запытам і параметрамі ў URL',
  /** The query and its params went in the request body */
  'vision.network.method.post': 'POST, з запытам і параметрамі ў выглядзе JSON-цела',
  /** Under the method of a POST request: why the query was not sent in the URL */
  'vision.network.method.post-explained':
    'Запыт і параметры складаюць {{size}} сімвалаў як параметры пошуку; пачынаючы з {{limit}}, @sanity/client адпраўляе іх як JSON-цела, бо API абмяжоўвае даўжыню URL. Параметры застаюцца ў URL.',
  /** In the Network panel: the region the query ran in */
  'vision.network.region': 'Запыт выкананы ў',
  /** The response did not say where the query ran */
  'vision.network.region.unknown': 'Не паведамлена',
  /** In the Network panel: the round trip and the time on the server */
  'vision.network.timing': 'Час',
  /** The round trip and the server's time for the query, in milliseconds */
  'vision.network.timing.value': '{{e2e}}мс поўны цыкл, {{server}}мс на серверы',
  /** In the Network panel: the trace of the request, for Sanity support */
  'vision.network.trace': 'ID трасіроўкі',
  /** Hint in the Network panel while queries go to the API */
  'vision.network.use-cdn-hint':
    'Уключыце "Выкарыстоўваць API CDN" у Параметрах, каб адпраўляць запыты праз CDN.',
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vision.network.you': 'Вы',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vision.options.dataset.follows-workspace': 'Адпавядае працоўнай прасторы',
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vision.options.dataset.pin': 'Замацаваць набор дадзеных',
  /** Hint under the dataset field while a dataset is pinned */
  'vision.options.dataset.pinned':
    'Замацавана; працоўная прастора можа выкарыстоўваць іншы набор дадзеных',
  /** Button that makes the tab follow the workspace's dataset again */
  'vision.options.dataset.use-workspace': 'Выкарыстоўваць набор дадзеных працоўнай прасторы',
  /** Label for the "Include content source map" switch */
  'vision.options.include-source-map': 'Уключыць карту крыніц кантэнту',
  /** Description for the "Include content source map" switch */
  'vision.options.include-source-map.description':
    'Дадае resultSourceMap у адказ, які паказваецца на ўкладцы "Карта крыніц кантэнту".',
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vision.options.perspective.global': 'Глабальны ({{name}})',
  /** Label of the switch that sends queries to the API CDN */
  'vision.options.use-cdn': 'Выкарыстоўваць API CDN',
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vision.options.use-cdn.anonymous':
    'Гэта студыя ўваходзіць у сістэму з дапамогай файла cookie, які API CDN ніколі не атрымлівае: ён адказвае гэтак жа, як ананімнаму наведвальніку, паказваючы тое, што бачна ў публічным наборы дадзеных.',
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vision.options.use-cdn.blocked':
    'API CDN не абслугоўвае чарнавікі або рэлізы, таму запыты з перспектывай {{perspective}} адпраўляюцца ў API. З апублікаванай або raw-перспектывай яны выкарыстоўваюць CDN.',
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vision.options.use-cdn.blocked.title': 'Запыты ідуць у API, а не ў CDN',
  /** Description of the API CDN switch */
  'vision.options.use-cdn.description':
    'Адпраўляе запыт у API CDN, як useCdn: true у @sanity/client, з перспектывамі published і raw: чарнавікі і рэлізы заўсёды ідуць у API. Адказы кэшуюцца да адной хвіліны; панэль Сеткі паказвае, калі адказ прыйшоў з кэша.',
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vision.options.use-cdn.use-published': 'Выкарыстоўваць апублікаваную перспектыву',
  /** Label of the variant field */
  'vision.options.variant-label': 'Варыянт',
  /** Variant option sending the navbar's variant, named */
  'vision.options.variant.global': 'Глабальны ({{name}})',
  /** Variant option sending the navbar's variant while none is selected there */
  'vision.options.variant.global-none': 'Глабальны (нічога не выбрана)',
  /** Variant option sending no variant */
  'vision.options.variant.none': 'Няма',
  /** Accessible label for collapsing a bottom panel */
  'vision.panel.collapse': 'Згарнуць панэль',
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vision.panel.delta': 'Дэльта',
  /** Accessible label for expanding a bottom panel */
  'vision.panel.expand': 'Разгарнуць панэль',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vision.panel.explain': 'Тлумачэнне',
  /** Label of the Functions tab in the response panel */
  'vision.panel.functions': 'Функцыі',
  /** Label of the "History" tab in the response panel */
  'vision.panel.history': 'Гісторыя',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vision.panel.lint': 'Lint',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vision.panel.mutate': 'Мутацыі',
  /** Label of the Network tab in the response panel */
  'vision.panel.network': 'Сетка',
  /** Label of the "Options" panel in the request column */
  'vision.panel.options': 'Параметры',
  /** Label of the "Response" tab in the response panel */
  'vision.panel.response': 'Адказ',
  /** Label of the "Content Source Map" tab in the response panel */
  'vision.panel.source-map': 'Карта крыніц кантэнту',
  /** Button adding an item to a list param in the params form */
  'vision.params-form.add-item': 'Дадаць элемент',
  /** Placeholder of a params form field that takes any JSON value */
  'vision.params-form.any-placeholder': 'Любое значэнне JSON; іншы тэкст адпраўляецца як радок',
  /** Shown in the params form when the query uses no params */
  'vision.params-form.empty':
    'Запыт не выкарыстоўвае параметры. Кожны $name у ім атрымлівае тут поле.',
  /** Shown in the params form while the params JSON cannot be parsed */
  'vision.params-form.invalid-json':
    "Параметры не з'яўляюцца сапраўдным JSON. Выпраўце іх у праглядзе JSON, каб рэдагаваць тут.",
  /** A boolean param's value is not true or false; it is sent anyway */
  'vision.params-form.invalid.boolean': 'Не true і не false; адпраўлена як {{value}}',
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vision.params-form.invalid.document-type':
    "Не з'яўляецца тыпам дакумента ў гэтай працоўнай прасторы; усё адно адпраўлена",
  /** A whole number param (a slice bound) holds a fraction */
  'vision.params-form.invalid.integer': 'Не цэлы лік, які патрэбны для зрэзаў',
  /** A list param's value is not a list; it is sent anyway */
  'vision.params-form.invalid.list': 'Не спіс; адпраўлена як {{value}}',
  /** A number param's value is not a number; it is sent anyway */
  'vision.params-form.invalid.number': 'Не лік; адпраўлена як тэкст',
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vision.params-form.invalid.option': 'Не адно з вядомых значэнняў; усё адно адпраўлена',
  /** A text param's value is not text; it is sent anyway */
  'vision.params-form.invalid.string': 'Не тэкст; адпраўлена як {{value}}',
  /** Accessible label of an item input of a list param in the params form */
  'vision.params-form.item-label': '${{name}}, элемент {{index}}',
  /** Placeholder of an item input of a list param in the params form */
  'vision.params-form.item-placeholder': 'Элемент',
  /** Under a params form field whose param has no value */
  'vision.params-form.missing':
    "Не зададзена: запыт не будзе выконвацца, пакуль не з'явіцца значэнне",
  /** Shown in the params form when the workspace schema could not be read */
  'vision.params-form.no-schema':
    'Тыпы вызначаюцца толькі на аснове запыту: схему працоўнай прасторы не ўдалося прачытаць.',
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vision.params-form.not-set': 'Не зададзена',
  /** Button setting a date and time param to the current time */
  'vision.params-form.now': 'Зараз',
  /** Button removing a param the query does not use from the params */
  'vision.params-form.remove': 'Выдаліць',
  /** Accessible label of the button removing an item from a list param */
  'vision.params-form.remove-item': 'Выдаліць элемент',
  /** Shown in the params form when the query does not parse */
  'vision.params-form.syntax-error':
    'Запыт не распазнаны, таму яго параметры пералічаны без тыпаў.',
  /** Type hint of a params form field: any JSON value */
  'vision.params-form.type.any': 'любое значэнне JSON',
  /** Type hint of a params form field: true or false */
  'vision.params-form.type.boolean': 'true або false',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vision.params-form.type.datetime': 'дата і час (ISO 8601)',
  /** Type hint of a params form field: a document ID */
  'vision.params-form.type.document-id': 'ID дакумента',
  /** Type hint of a params form field: one of the workspace's document types */
  'vision.params-form.type.document-type': 'тып дакумента',
  /** Type hint of a params form field: a whole number */
  'vision.params-form.type.integer': 'цэлае лік',
  /** Type hint of a params form field: a list of values */
  'vision.params-form.type.list': 'спіс, кожны {{type}}',
  /** Type hint of a params form field: a number */
  'vision.params-form.type.number': 'лік',
  /** Type hint of a params form field: text */
  'vision.params-form.type.string': 'тэкст',
  /** Heading of the params the query does not use, listed in the params form */
  'vision.params-form.unused': 'Не выкарыстоўваецца запытам',
  /** Before the expressions that use a param, in the params form */
  'vision.params-form.used-in': 'Выкарыстоўваецца ў',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vision.params.fit-height': 'Памер па змесце, {{height}} пікселяў',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vision.params.resize':
    'Змяніць памер параметраў: перацягніце або выкарыстоўвайце клавішы са стрэлкамі; двойчы пстрыкніце або націсніце Enter, каб зноў падагнаць пад змест',
  /** Tab showing the params as a form inferred from the query */
  'vision.params.view.form': 'Форма',
  /** Tab showing the params as JSON */
  'vision.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vision.params.view.label': 'Рэдагаваць параметры як',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vision.paste.parsed': 'Запыт загружаны з устаўленага URL',
  /** Toast shown after a curl command for a query was pasted and loaded into the tab */
  'vision.paste.parsed-curl': 'Запыт загружаны з устаўленай каманды cURL',
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vision.paste.unavailable-variant':
    'Устаўлены URL выкарыстоўваў варыянт "{{variant}}"; абярыце яго ў панэлі навігацыі, каб выканаць запыт з ім.',
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vision.paste.unknown-dataset':
    'Набор даных "{{dataset}}" з устаўленага URL тут недаступны, застаецца бягучы.',
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vision.paste.unsupported-perspective':
    'Перспектыва з устаўленага URL тут не падтрымліваецца, застаецца бягучая.',
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vision.paste.variants-disabled':
    'Устаўлены URL выкарыстоўваў варыянт "{{variant}}"; у гэтай працоўнай прасторы варыянты адключаны, таму запыт выконваецца без яго.',
  /** Accessible label for the query actions menu */
  'vision.query.actions': 'Дзеянні запыту',
  /** Tooltip when automatic refetching is not available for the API version */
  'vision.query.auto-refetch.unsupported':
    'Для аўтаматычнага паўторнага запыту патрабуецца API версіі v2021-03-25 або навей.',
  /** Toast shown after the query was copied */
  'vision.query.copied': 'Запыт скапіяваны ў буфер абмену',
  /** Menu item copying the query text */
  'vision.query.copy': 'Капіяваць запыт',
  /** Menu item opening the export query dialog */
  'vision.query.export': 'Экспартаваць запыт…',
  /** Menu item reformatting the query */
  'vision.query.prettify': 'Фарматаваць запыт',
  /** Toast shown when the query could not be reformatted */
  'vision.query.prettify.failed': 'Не ўдалося адфарматаваць запыт',
  /** Menu item saving the query to the personal saved queries */
  'vision.query.save': 'Захаваць запыт',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vision.query.stop': 'Спыніць',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vision.query.stop.description': 'Спыніць атрыманне',
  /** Explanation in the settings section about the redesigned experience */
  'vision.redesign.settings.description':
    'Вы выкарыстоўваеце абноўлены інструмент Vision. Пры пераключэнні назад вашы ўкладкі і налады захаваюцца ў гэтым браўзеры для наступнага разу.',
  /** Title of the settings section about the redesigned experience */
  'vision.redesign.settings.title': 'Абноўлены Vision (бэта)',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vision.redesign.switch-to-classic': 'Пераключыцца на класічны Vision',
  /** Toast button that switches to the redesigned tool */
  'vision.redesign.toast.accept': 'Паспрабаваць зараз',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vision.redesign.toast.description':
    'Укладкі запытаў, жывое паўторнае атрыманне, дэталі адказу і экспарт. Вы можаце пераключыцца назад у любы час.',
  /** Toast button that hides the invitation */
  'vision.redesign.toast.dismiss': 'Не зараз',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vision.redesign.toast.title': 'Паспрабуйце абноўлены Vision',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vision.redesign.try': 'Паспрабаваць абноўлены варыянт',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vision.redesign.try.description':
    'Пераключыцца на абноўлены Vision у бэта-версіі. Вы можаце вярнуцца назад у любы час праз яго бакавую панэль.',
  /** Empty state of the response panel before anything was fetched */
  'vision.response.empty': 'Пакуль нічога не атрымана',
  /** Label for the payload size in the response tab */
  'vision.response.payload-size': 'Памер карыснай нагрузкі',
  /** Label for the sync tags in the response tab */
  'vision.response.sync-tags': 'Тэгі сінхранізацыі',
  /** Shown when the response carried no sync tags */
  'vision.response.sync-tags.none': 'У адказе няма тэгаў сінхранізацыі',
  /** Under the query URL when the request went out as a POST body rather than that URL */
  'vision.response.url.sent-as-post':
    'Адпраўлена як цела POST-запыту: запыт і параметры занадта доўгія для URL, таму @sanity/client адправіў іх як JSON. Устаўка гэтага URL у Vision усё яшчэ загружае запыт.',
  /** Accessible label for the result actions menu */
  'vision.result.actions': 'Дзеянні з вынікам',
  /** Toast shown after the result was copied */
  'vision.result.copied': 'Вынік скапіяваны ў буфер абмену',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vision.result.copied-value': 'Скапіявана {{path}}',
  /** Menu item and button copying the result as JSON */
  'vision.result.copy': 'Скапіяваць вынік',
  /** Button next to each property in the result tree, copying its value */
  'vision.result.copy-value': 'Скапіяваць значэнне',
  /** Empty state of the result view */
  'vision.result.empty': 'Выканайце запыт, каб убачыць яго вынік тут',
  /** Button exporting the result as CSV */
  'vision.result.export-csv': 'Экспарт CSV',
  /** Button exporting the result as JSON */
  'vision.result.export-json': 'Экспарт JSON',
  /** Menu item opening the TypeScript export dialog */
  'vision.result.export-typescript': 'Экспарт TypeScript…',
  /** Menu item opening the Zod export dialog */
  'vision.result.export-zod': 'Экспарт Zod…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vision.result.graph.collapse': 'Схаваць змесціва',
  /** Button fitting the whole graph in view */
  'vision.result.graph.fit': 'Уціснуць у акно',
  /** Accessible label of the graph, saying how to move around in it */
  'vision.result.graph.label':
    'Граф выніку: перацягвайце, каб перамяшчацца, пракручвайце, каб маштабаваць; у фокусе - стрэлкі перамяшчаюць, + і - маштабуюць, 0 уціскае ва ўвесь экран',
  /** Ends the note on a graph that leaves part of this result out */
  'vision.result.graph.left-out-hint': 'Дрэва і прагляд JSON паказваюць усё цалкам.',
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vision.result.graph.node-limit': "Паказаны толькі першыя {{nodes}} аб'екты і масівы.",
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vision.result.graph.partial': 'Для {{nodes}} паказаны толькі першыя {{rows}} запісаў.',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vision.result.graph.partial.node': '{{name}} ({{entries}} запісаў)',
  /** Title of the graph node of the result itself */
  'vision.result.graph.root': 'вынік',
  /** Button zooming into the graph */
  'vision.result.graph.zoom-in': 'Павялічыць',
  /** Button zooming out of the graph */
  'vision.result.graph.zoom-out': 'Паменшыць',
  /** Tab showing the result as a graph of its objects and arrays */
  'vision.result.view.graph': 'Граф',
  /** Tab showing the result as indented JSON text, to select and copy from */
  'vision.result.view.json': 'JSON',
  /** Accessible label of the tabs that switch how the result shows */
  'vision.result.view.label': 'Прагляд выніку',
  /** Tab showing the result as a tree to browse */
  'vision.result.view.tree': 'Дрэва',
  /** Empty state of the saved queries panel */
  'vision.saved.empty':
    'Пакуль няма захаваных запытаў. Захавайце бягучы запыт з дапамогай кнопкі +.',
  /** Empty state of a query list when the search matches nothing */
  'vision.saved.empty-search': 'Няма запытаў, якія адпавядаюць вашаму пошуку',
  /** Menu item loading a saved query into the active tab */
  'vision.saved.load-in-current-tab': 'Загрузіць у бягучую ўкладку',
  /** Menu item opening a saved query in a new tab */
  'vision.saved.open-in-new-tab': 'Адкрыць у новай картцы',
  /** Menu item renaming a saved query */
  'vision.saved.rename': 'Перайменаваць',
  /** Accessible label for the button saving the current query */
  'vision.saved.save-current': 'Захаваць бягучы запыт',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vision.saved.unavailable-variant':
    'Гэты захаваны запыт выкарыстоўваў варыянт "{{variant}}"; абярыце яго ў панэлі навігацыі, каб выканаць запыт з ім.',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vision.saved.unknown-dataset':
    'Набор даных "{{dataset}}" гэтага захаванага запыту тут недаступны, пакідаем бягучы.',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vision.saved.variants-disabled':
    'Гэты захаваны запыт выкарыстоўваў варыянт "{{variant}}"; у гэтай працоўнай прасторы варыянты адключаны, таму запыт выконваецца без яго.',
  /** Button in the settings dialog that clears the stored state */
  'vision.settings.clear-storage': 'Ачысціць сховішча',
  /** Confirmation button for clearing the storage */
  'vision.settings.clear-storage.confirm': 'Так, ачысціць сховішча',
  /** Explanation of what clearing the storage does */
  'vision.settings.clear-storage.description':
    'Выдаляе вашы асабістыя захаваныя запыты і бібліятэку функцый, скідвае адкрытыя карткі і гэтыя налады па змаўчанні ў гэтым браўзеры, і вяртае класічны інструмент Vision. Агульныя запыты захоўваюцца.',
  /** Toast shown when the saved queries could not be cleared */
  'vision.settings.clear-storage.error': 'Не атрымалася ачысціць захаваныя запыты',
  /** Toast shown after the storage was cleared */
  'vision.settings.clear-storage.success': 'Сховішча ачышчана',
  /** Explanation at the top of the settings dialog */
  'vision.settings.description':
    'Налады па змаўчанні для новых картак. Адкрытыя карткі захоўваюць свае ўласныя налады.',
  /** Explains the setting listing the fields left out of History diffs */
  'vision.settings.history-diff.description':
    'Па адным шляху поля ў радку. Шлях супадае на любой глыбіні выніку, таму _rev хавае рэвізію кожнага дакумента ў ім. Кожны diff усё яшчэ можа паказваць іх.',
  /** Button restoring the default fields left out of History diffs */
  'vision.settings.history-diff.reset': 'Скінуць да значэнняў па змаўчанні',
  /** Label of the setting listing the fields left out of History diffs */
  'vision.settings.history-diff.title': 'Палі, схаваныя з diff-аў Гісторыі',
  /** Title of the settings dialog */
  'vision.settings.title': 'Налады',
  /** Empty state of the shared queries panel */
  'vision.shared.empty':
    'Пакуль няма агульных запытаў. Падзяліцеся захаваным запытам, каб зрабіць яго даступным для ўсіх, хто выкарыстоўвае гэты набор даных.',
  /** Shortcut description: close dialogs and menus */
  'vision.shortcuts.close': 'Закрыць дыялогі і меню',
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vision.shortcuts.complete': 'Дапоўніць назву функцыі',
  /** Shortcut description: copy the query */
  'vision.shortcuts.copy-query': 'Скапіяваць запыт',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vision.shortcuts.extract-function': 'Выцягнуць праекцыю ля курсора ў функцыю',
  /** Shortcut description: run the query */
  'vision.shortcuts.fetch': 'Выканаць запыт',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vision.shortcuts.next-finding': 'Перайсці да наступнага выяўлення lint',
  /** Shortcut description: reformat the query */
  'vision.shortcuts.prettify': 'Прыгожа аформіць запыт',
  /** Title of the keyboard shortcuts dialog */
  'vision.shortcuts.title': 'Спалучэнні клавіш',
  /** Sidebar toggle: show icons only */
  'vision.sidebar.collapse': 'Згарнуць бакавую панэль',
  /** Sidebar toggle: show labels next to the icons */
  'vision.sidebar.expand': 'Разгарнуць бакавую панэль',
  /** Accessible label for the sidebar navigation */
  'vision.sidebar.label': 'Бакавая панэль Vision',
  /** Sidebar item and drawer title for personal saved queries */
  'vision.sidebar.saved-queries': 'Захаваныя запыты',
  /** Sidebar item opening the settings dialog */
  'vision.sidebar.settings': 'Налады',
  /** Sidebar item and drawer title for shared queries */
  'vision.sidebar.shared-queries': 'Агульныя запыты',
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vision.sidebar.shortcuts': 'Спалучэнні клавіш',
  /** Empty state of the content source map panel */
  'vision.source-map.empty':
    'У адказе няма карты крыніц кантэнту. Уключыце "Include content source map" у наладах і атрымайце дадзеныя зноў.',
  /** Accessible label of the divider between the result and the response details panel */
  'vision.split.bottom-panel':
    'Змяніце памер панэлі дэталяў адказу: перацягніце або выкарыстоўвайце клавішы са стрэлкамі; Home і End пераходзяць да межаў, Enter скідвае',
  /** Accessible label of the divider between the request and response panes */
  'vision.split.request-response':
    'Змяніце памер панэляў запыту і адказу: перацягніце або выкарыстоўвайце клавішы са стрэлкамі; Home і End пераходзяць да межаў, Enter скідвае',
  /** Accessible label for the button closing a query tab */
  'vision.tabs.close-tab': 'Закрыць укладку',
  /** Accessible label for the list of query tabs */
  'vision.tabs.label': 'Укладкі запытаў',
  /** Accessible label for the button opening a new query tab */
  'vision.tabs.new-tab': 'Новая ўкладка',
  /** Placeholder of the input renaming a tab */
  'vision.tabs.title-placeholder': 'Назва ўкладкі',
  /** Title of a tab whose query is still empty */
  'vision.tabs.untitled': 'Запыт без назвы',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vision.webmcp.check-query': 'Праверыць запыт GROQ у Vision',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vision.webmcp.describe-schema': 'Апісаць схему ў Vision',
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vision.webmcp.explain-query': 'Растлумачыць запыт GROQ у Vision',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vision.webmcp.get-state': 'Прачытаць адкрытую ўкладку Vision',
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vision.webmcp.open-query': 'Адкрыць запыт GROQ у Vision',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vision.webmcp.preview-mutations': 'Папярэдні прагляд мутацый у Vision',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vision.webmcp.run-query': 'Выканаць запыт GROQ у Vision',
})
