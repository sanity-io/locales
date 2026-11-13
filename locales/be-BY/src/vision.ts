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
  'vista.agent-actions.credits': 'Выкарыстоўвае адзін AI-крэдыт за запыт',
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vista.ai-credits.balance': 'Засталося {{balance}} з {{quota}} AI-крэдытаў у гэтым месяцы.',
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vista.ai-credits.deficit':
    'У гэтым месяцы выкарыстана {{used}} AI-крэдытаў, што на {{deficit}} больш за ўключаныя {{quota}}.',
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vista.ai-credits.limit.description':
    'Ваша арганізацыя выкарыстала {{used}} з {{quota}} AI-крэдытаў у гэтым месяцы, таму дзеянні Sanity Agent Actions прыпыненыя да наступнага месяца або пакуль не будзе павышаны ліміт выдаткаў.',
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vista.ai-credits.limit.description-unknown':
    'Ваша арганізацыя дасягнула ліміту выдаткаў на AI-крэдыты, таму дзеянні Sanity Agent Actions прыпыненыя да наступнага месяца або пакуль ліміт не будзе павышаны.',
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vista.ai-credits.limit.learn-more': 'Як працуюць AI-крэдыты',
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vista.ai-credits.limit.manage': 'Кіраваць AI-крэдытамі',
  /** Title of the card shown where the organization is out of AI credits */
  'vista.ai-credits.limit.title': 'Скончыліся AI-крэдыты',
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vista.ai-credits.usage': 'Выкарыстанне AI',
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vista.ai-credits.used': 'У гэтым месяцы выкарыстана {{used}} AI-крэдытаў.',
  /** Button in the request column's action bar naming the API version requests go out with */
  'vista.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vista.api-version.button-cdn': 'API CDN {{version}}',
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vista.api-version.button-invalid': 'Незавершаная версія API',
  /** Tooltip of the API version button */
  'vista.api-version.tooltip':
    'Запыты выконваюцца супраць версіі API {{version}}. Выберыце, каб змяніць яе ў Налады.',
  /** Tooltip of the API version button while queries go through the API CDN */
  'vista.api-version.tooltip-cdn':
    'Запыты выконваюцца супраць API CDN з версіяй API {{version}}. Выберыце, каб змяніць яе ў Налады.',
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vista.api-version.tooltip-cdn-blocked':
    'Запыты выконваюцца супраць API з версіяй {{version}}, а не API CDN: ён не абслугоўвае перспектыву {{perspective}}. Выберыце, каб змяніць яе ў Налады.',
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vista.api-version.tooltip-invalid':
    'Версія API ў Налады незавершаная, таму нічога нельга атрымаць, пакуль яна не будзе дапоўнена.',
  /** Tooltip of the API version button while a selected variant forces the variants API version */
  'vista.api-version.tooltip-locked':
    'Запыты выконваюцца супраць версіі API {{version}}, якая патрэбна абранаму варыянту.',
  /** Label of the document after the change in the Delta panel */
  'vista.delta.after': 'Пасля',
  /** Label of the document before the change in the Delta panel */
  'vista.delta.before': 'Да',
  /** What the Delta panel does */
  'vista.delta.description':
    "Выконвае запыт у рэжыме delta, як гэта робяць webhook'і, слухачы і Sanity Functions на аснове GROQ: before() і after() — гэта дакумент да і пасля змены, @ — дакумент пасля яе, а delta::changedAny() параўноўвае іх. Выконваецца ў браўзеры з дапамогай groq-js. Пусты бок азначае адсутнасць дакумента: змена яго стварае або выдаляе.",
  /** Label of the document ID field in the Delta panel */
  'vista.delta.document-id': 'ID дакумента',
  /** Shown when there is a query but no documents to compare */
  'vista.delta.empty': 'Загрузіце гісторыю дакумента або запішыце дакументы ў полі Да і Пасля.',
  /** Shown when the query fails in delta mode */
  'vista.delta.failed': 'Не ўдалося выканаць запыт у рэжыме delta: {{message}}',
  /** Shown when the After document is not valid JSON */
  'vista.delta.invalid-after': 'Поле Пасля змяшчае няправільны JSON: {{message}}',
  /** Shown when the Before document is not valid JSON */
  'vista.delta.invalid-before': "Before не з'яўляецца сапраўдным JSON: {{message}}",
  /** Button loading the document's revisions from the History API */
  'vista.delta.load': 'Загрузіць гісторыю',
  /** Shown when the history could not be loaded */
  'vista.delta.load-failed': 'Не ўдалося загрузіць гісторыю: {{message}}',
  /** A delta filter that is true for the change */
  'vista.delta.matches': 'Супадае: webhook або функцыя з гэтым фільтрам спрацуе для гэтай змены.',
  /** A delta filter that is false for the change */
  'vista.delta.no-match':
    'Не супадае: webhook або функцыя з гэтым фільтрам не спрацуе для гэтай змены.',
  /** Shown while the query or its params cannot be sent */
  'vista.delta.no-request': 'Выпраўце запыт і яго параметры, каб выканаць яго ў рэжыме delta.',
  /** Heading of the delta result */
  'vista.delta.result': 'Вынік',
  /** The After choice for a change that deletes the document */
  'vista.delta.revision.none-after': 'Нічога: гэтая змена выдаляе дакумент',
  /** The Before choice for a change that creates the document */
  'vista.delta.revision.none-before': 'Нічога: гэтая змена стварае дакумент',
  /** A revision in the Before and After lists */
  'vista.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vista.drawer.close': 'Закрыць панэль',
  /** Explanation at the top of the Explain panel */
  'vista.explain.description':
    'План запыту — гэта спосаб, якім Content Lake выконвае запыт: што ён чытае, фільтруе і сартуе падчас чытання, і што застаецца для наступных крокаў. «Растлумачыць мне гэта» выкарыстоўвае Sanity Agent Actions, каб апісаць запыт і яго план простымі словамі, што выкарыстоўвае адзін AI-крэдыт.',
  /** Shown in the Explain panel while there is no valid query to explain */
  'vista.explain.empty': 'Напішыце запыт, каб растлумачыць яго.',
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vista.explain.explain': 'Растлумачыць мне гэта',
  /** Shown when the explanation could not be written */
  'vista.explain.failed': 'Не ўдалося растлумачыць запыт: {{message}}',
  /** A count the index computes without reading the documents */
  'vista.explain.insight.aggregate': 'Падлічана ў індэксе, без чытання дакументаў.',
  /** A subquery the plan runs once for all documents */
  'vista.explain.insight.batched-subquery':
    'Падзапыт выконваецца адзін раз для ўсіх дакументаў, у адным пакетным запыце, а не асобна для кожнага дакумента.',
  /** Part of the filter runs in memory; the expression follows */
  'vista.explain.insight.filter-in-memory':
    'Частка фільтра выконваецца ў памяці, пасля чытання: кожны дакумент, які прапускае індэкс, спачатку счытваецца, што запавольвае працу на вялікіх датасетах. Злучэнні (->) і функцыі ў фільтры не могуць выкарыстоўваць індэкс.',
  /** The index sorts and limits while reading */
  'vista.explain.insight.index-sort-limit':
    'Індэкс сартуе і абмяжоўвае дакументы падчас іх чытання.',
  /** The plan slices in memory */
  'vista.explain.insight.slice-in-memory':
    'Зрэз выконваецца ў памяці пасля чытання, а не як абмежаванне падчас чытання.',
  /** The plan sorts in memory */
  'vista.explain.insight.sort-in-memory':
    'Сартаванне адбываецца ў памяці, пасля чытання ўсіх супадзенняў. Сартуйце па атрыбутах, якія падтрымліваюцца індэксам.',
  /** Link under the plan insights to the guide on fast queries */
  'vista.explain.insights.guide': 'Высокапрадукцыйны GROQ',
  /** Heading of the plan insights in the Explain panel */
  'vista.explain.insights.title': 'Што вылучаецца',
  /** Button in the Explain panel fetching the query plan */
  'vista.explain.plan': 'Паказаць план запыту',
  /** Shown when the query plan could not be fetched */
  'vista.explain.plan-failed': 'Не ўдалося атрымаць план запыту: {{message}}',
  /** Heading of the query plan in the Explain panel */
  'vista.explain.plan-title': 'План запыту',
  /** Toast shown after a code snippet was copied */
  'vista.export-query.copied': 'Фрагмент скапіяваны ў буфер абмену',
  /** Label for the button that copies a code snippet */
  'vista.export-query.copy': 'Скапіяваць фрагмент',
  /** Explanation at the top of the export query dialog */
  'vista.export-query.description':
    'Выканайце гэты запыт па-за студыяй з дапамогай аднаго з гэтых фрагментаў.',
  /** Title of the dialog that exports the query as code snippets */
  'vista.export-query.title': 'Экспарт запыту',
  /** Note about authentication in the export query dialog */
  'vista.export-query.token-note':
    'Прыватным наборам даных патрэбны токен API. Для публічных набораў даных можна прапусціць загаловак Authorization.',
  /** Toast shown after the generated code was copied */
  'vista.export-types.copied': 'Код скапіяваны ў буфер абмену',
  /** Label for the button that copies the generated code */
  'vista.export-types.copy': 'Скапіяваць код',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vista.export-types.empty':
    'Спачатку выканайце запыт, каб быў вынік, з якога можна атрымаць тыпы.',
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vista.export-types.schema-error': 'Не ўдалося ацаніць схему: {{message}}',
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vista.export-types.source.result':
    'Вызначана на аснове атрыманага выніку, паколькі запыт не ўдалося ацаніць па схеме працоўнай прасторы.',
  /** Note shown when the types were derived from the workspace schema */
  'vista.export-types.source.schema':
    'Вызначана на аснове схемы працоўнай прасторы, гэтак жа, як гэта робіць sanity typegen.',
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vista.export-types.stale-result':
    'Паказаны вынік быў атрыманы для іншага запыту або параметраў. Спачатку выканайце бягучы запыт, каб быў вынік, з якога можна атрымаць тыпы.',
  /** Title of the dialog exporting TypeScript types for the result */
  'vista.export-types.title-typescript': 'Экспарт TypeScript',
  /** Title of the dialog exporting a Zod schema for the result */
  'vista.export-types.title-zod': 'Экспарт Zod',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vista.functions.add': 'Дадаць у запыт',
  /** Shown on a library function the query declares the same way */
  'vista.functions.declared': 'У гэтым запыце',
  /** Lint action on a call of a library function the query does not declare */
  'vista.functions.editor.add-from-library': 'Абвясціць яе',
  /** Note in a function's hover documentation: the API version it needs */
  'vista.functions.editor.api-version': 'Патрабуецца версія API {{version}} або навей',
  /** Detail of a completion for a custom function the query declares */
  'vista.functions.editor.completion-declared': 'у гэтым запыце',
  /** Detail of a completion for a library function, which declares it too */
  'vista.functions.editor.completion-library': 'з вашай бібліятэкі',
  /** Note in the hover documentation of a custom function the query declares */
  'vista.functions.editor.declared-on': 'Карыстальніцкая функцыя, абвешчана ў радку {{line}}',
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vista.functions.editor.delta-only':
    'Працуе толькі ў рэжыме delta, дзе webhooks і Sanity Functions выконваюць свае фільтры',
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vista.functions.editor.extract': 'Вынесці ў функцыю',
  /** Note in the hover documentation of a library function the query does not declare */
  'vista.functions.editor.in-library': 'У вашай бібліятэцы функцый, не абвешчана ў гэтым запыце',
  /** Link at the end of a built-in function's hover documentation */
  'vista.functions.editor.reference': 'Даведнік функцый GROQ',
  /** Explanation under the library heading in the Functions panel */
  'vista.functions.library.description':
    'Захоўваецца ў гэтым браўзеры для кожнага набору даных праекта. Аўтазавяршэнне прапануе гэтыя функцыі, а лінтар прапануе абвясціць тыя, якія выклікае запыт.',
  /** Shown in the Functions panel while the library is empty */
  'vista.functions.library.empty':
    'Захавайце функцыю, якую абвяшчае запыт, каб выкарыстоўваць яе ў іншых запытах.',
  /** Heading of the functions library in the Functions panel */
  'vista.functions.library.title': 'Бібліятэка',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vista.functions.query.empty':
    'Абвясціце ўласныя функцыі ў пачатку запыту або пастаўце курсор у праекцыі, напрыклад author->{name}, і націсніце кнопку выдзялення над рэдактарам ({{shortcut}}).',
  /** Heading of the functions the query declares in the Functions panel */
  'vista.functions.query.title': 'У гэтым запыце',
  /** Removes a function from the library */
  'vista.functions.remove': 'Выдаліць з бібліятэкі',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vista.functions.replace': 'Замяніць у запыце',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vista.functions.reveal': 'Паказаць {{name}} у рэдактары',
  /** Button of a function the query declares that is not in the library yet */
  'vista.functions.save': 'Захаваць у бібліятэку',
  /** Shown on a function the query declares the way the library has it */
  'vista.functions.saved': 'Захавана',
  /** Button of a function the query declares differently from the library's version */
  'vista.functions.update': 'Абнавіць бібліятэку',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vista.generate.button': 'Стварыць запыт',
  /** Closes the generate query bar */
  'vista.generate.close': 'Закрыць',
  /** Explanation under the generate query field */
  'vista.generate.description':
    'Sanity Agent Actions пішуць GROQ на падставе вашага апісання і тыпаў дакументаў, а Content Lake правярае кожную спробу; кожная спроба выкарыстоўвае адзін крэдыт AI. Гэта замяняе запыт у гэтай укладцы і запускае яго; адмена дзеяння ў рэдактары вяртае папярэдні запыт.',
  /** Shown when no query could be generated, above the reason */
  'vista.generate.failed': 'Не ўдалося стварыць запыт',
  /** Accessible label of the description field in the generate query bar */
  'vista.generate.label': 'Што павінен атрымаць запыт?',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vista.generate.open-anyway': 'Адкрыць апошнюю спробу',
  /** Placeholder of the description field in the generate query bar */
  'vista.generate.placeholder': '10 апошніх аўтараў, упарадкаваных па прозвішчы, а потым па імені',
  /** Shown while the first attempt at a query is written */
  'vista.generate.progress': 'Напісанне запыту…',
  /** Shown while a rejected attempt is retried */
  'vista.generate.progress-retry': 'Выпраўленне запыту (спроба {{attempt}} з {{max}})…',
  /** Button generating the query */
  'vista.generate.submit': 'Стварыць',
  /** Badge on a history entry the API CDN answered */
  'vista.history.cdn': 'API CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vista.history.cdn-cache-hit': 'Трапленне ў кэш CDN',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vista.history.changed': 'Зменена',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vista.history.changes': 'Змены',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vista.history.changes-failed': 'Не ўдалося паказаць змены.',
  /** Button retrying to show the changes of a history entry */
  'vista.history.changes-retry': 'Паўтарыць спробу',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vista.history.compared-with': 'Параўнана з запытам у {{time}}',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vista.history.diff.params': 'Параметры',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vista.history.diff.query': 'Запыт',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vista.history.diff.query-formatting-only': 'Змянілася толькі фарматаванне',
  /** Label of the diff of the query result in a history entry's changes */
  'vista.history.diff.result': 'Вынік',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vista.history.diff.url': 'URL запыту',
  /** Empty state of the history panel */
  'vista.history.empty': 'Пакуль нічога не запытана',
  /** Status label for a failed fetch in the history */
  'vista.history.failed': 'Не ўдалося',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vista.history.hide-hidden': 'Схаваць іх',
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vista.history.hiding': 'Хаваем {{fields}}',
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vista.history.only-hidden-changed': 'Змяніліся толькі схаваныя палі',
  /** History reason: a tab opened with a generated query fetched it */
  'vista.history.reason.generated': 'Згенераваны запыт',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vista.history.reason.link': 'Адкрытая спасылка',
  /** History reason: a live event matched the query's sync tags */
  'vista.history.reason.live': 'Абнаўленне ў рэжыме рэальнага часу',
  /** History reason: the live connection asked every client to refetch */
  'vista.history.reason.live-restart': 'Жывое злучэнне перазапушчана',
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vista.history.reason.live-start': 'Распачаты жывы запыт',
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vista.history.reason.load': 'Запыт загружаны',
  /** History reason: the fetch button was pressed */
  'vista.history.reason.manual': 'Кнопка запыту',
  /** History reason: mutations were applied from the Mutate panel */
  'vista.history.reason.mutation': 'Прымененыя мутацыі',
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vista.history.reason.options': 'Параметры зменены',
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vista.history.reason.paste': 'Устаўлены URL',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vista.history.reason.resume': 'Аўтаматычны паўторны запыт адноўлены',
  /** History reason: the keyboard shortcut was used */
  'vista.history.reason.shortcut': 'Спалучэнне клавіш',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vista.history.same-result': 'Той жа вынік',
  /** Button showing the hidden fields in a history entry's changes */
  'vista.history.show-hidden': 'Паказаць іх',
  /** Next to a history entry's changes while the hidden fields are shown */
  'vista.history.showing-hidden': 'Паказана {{fields}}, схавана па змаўчанні',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vista.history.too-large': 'Занадта вялікі для параўнання',
  /** A history entry whose result is the same as the previous result */
  'vista.history.unchanged': 'Без змен',
  /** Shown in the Lint panel while the query has no lint findings */
  'vista.lint.empty':
    'Няма вынікаў лінтавання. Праблемы, якія знаходзіць GROQ-лінтэр у запыце, пералічваюцца тут падчас набору тэксту; абярыце адну, каб вылучыць яе ў рэдактары.',
  /** Where a lint finding sits in the query, shown under its message */
  'vista.lint.position': 'Радок {{line}}, калонка {{column}}',
  /** Severity badge of a lint finding */
  'vista.lint.severity.error': 'Памылка',
  /** Severity badge of a lint finding */
  'vista.lint.severity.hint': 'Падказка',
  /** Severity badge of a lint finding */
  'vista.lint.severity.info': 'Інфармацыя',
  /** Severity badge of a lint finding */
  'vista.lint.severity.warning': 'Папярэджанне',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vista.lint.use-suggestion': 'Выкарыстаць {{suggestion}}',
  /** Badge shown while a tab refetches automatically */
  'vista.live.active': 'Жывы',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vista.live.button': 'Жывое атрыманне',
  /** Tooltip of the Live button while automatic refetching is off */
  'vista.live.button.start':
    'Атрымаць, а потым атрымліваць зноў кожны раз, калі дакументы ў выніку змяняюцца',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vista.live.button.stop':
    'Спыніць атрыманне пры змяненні дакументаў у выніку. Атрыманне па-ранейшаму працуе па запыце для вынікаў, якія не закранаюцца зменамі дакументаў, напрыклад now()',
  /** Error shown when the live connection breaks */
  'vista.live.error': 'Жывыя абнаўленні адключаны: {{message}}',
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vista.live.stop': 'Спыніць жывое абнаўленне',
  /** Button in the Mutate panel adding a mutation to the list */
  'vista.mutate.add': 'Дадаць мутацыю',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vista.mutate.add.create': 'Стварыць дакумент',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vista.mutate.add.delete': 'Выдаліць дакумент',
  /** Adds a mutation deleting the documents of the shown result */
  'vista.mutate.add.delete-result': 'Выдаліць дакументы ў выніку',
  /** Adds a mutation patching a document, its ID to fill in */
  'vista.mutate.add.patch': 'Зрабіць патч дакумента',
  /** Adds a mutation patching the documents of the shown result */
  'vista.mutate.add.patch-result': 'Зрабіць патч дакументаў у выніку',
  /** Button applying the mutations a dry run showed */
  'vista.mutate.apply': 'Прымяніць да {{dataset}}',
  /** Heading of the error shown when applying the mutations failed */
  'vista.mutate.apply-failed': 'Змены не былі прыменены',
  /** Next to Apply while the mutations as they are have had no dry run */
  'vista.mutate.apply-needs-preview':
    'Прымяненне адпраўляе тое, што паказаў сухі запуск: спачатку запусціце яго.',
  /** Option giving array items without a _key one */
  'vista.mutate.auto-keys': 'Дадаваць _key элементам масіва, якія яго не маюць',
  /** Under the option giving array items a _key */
  'vista.mutate.auto-keys.description':
    'Студыі патрэбны _key на кожным элеменце масіва, каб яго рэдагаваць.',
  /** Button showing a document's changes in the dry run */
  'vista.mutate.changes': 'Змены',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vista.mutate.changes-failed': 'Не атрымалася паказаць змены.',
  /** Button retrying to show a document's changes */
  'vista.mutate.changes-retry': 'Паўтарыць',
  /** What the Mutate panel does */
  'vista.mutate.description':
    'Пішыце змены так, як іх прымае Mutations API, у выглядзе спісу: create, createOrReplace, createIfNotExists, delete і patch, па ID або па GROQ-запыце. Сухі запуск паказвае, што яны зробяць з кожным дакументам, нічога не змяняючы; Прымяненне затым запісвае іх у набор даных адной транзакцыяй, з выкарыстаннем вашага акаўнта.',
  /** What the API says went wrong with one of the mutations */
  'vista.mutate.failure-item': 'Змена {{index}}: {{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vista.mutate.generate.button': 'Згенераваць змены',
  /** Explanation under the generate mutations field */
  'vista.mutate.generate.description':
    'Sanity Agent Actions пішуць змены на аснове вашага апісання, дакументаў у выніку і іх тыпаў, а сухі запуск правярае кожную спробу; кожная спроба выкарыстоўвае адзін AI-крэдыт. Яны заменяць змены тут, дзе адмена вернецца да папярэдняга; нічога не запісваецца, пакуль вы іх не прымянíце.',
  /** Shown when no mutations could be generated, above the reason */
  'vista.mutate.generate.failed': 'Не атрымалася згенераваць змены',
  /** Accessible label of the description field in the generate mutations bar */
  'vista.mutate.generate.label': 'Што павінны рабіць змены?',
  /** Placeholder of the description field in the generate mutations bar */
  'vista.mutate.generate.placeholder': 'Змяніць загаловак дакументаў у выніку на foobar',
  /** Shown while the first attempt at the mutations is written */
  'vista.mutate.generate.progress': 'Запіс змен…',
  /** Shown while an attempt the dry run turned down is retried */
  'vista.mutate.generate.progress-retry': 'Выпраўленне змен (спроба {{attempt}} з {{max}})…',
  /** Under the dry run: the fields the diffs leave out */
  'vista.mutate.hiding': 'Змены не ўключаюць {{fields}}, як і Гісторыя.',
  /** Shown when the mutations are not valid JSON */
  'vista.mutate.invalid-json': "Змены не з'яўляюцца сапраўдным JSON: {{message}}",
  /** Shown when a mutation does not name exactly one thing to do */
  'vista.mutate.invalid-mutation':
    'Змена {{index}} павінна змяшчаць роўна адно з: create, createOrReplace, createIfNotExists, delete або patch.',
  /** Label of the mutations editor */
  'vista.mutate.mutations': 'Змены',
  /** The dry run touched no documents */
  'vista.mutate.no-documents': 'Змены не закранаюць ніводнага дакумента.',
  /** Shown when the JSON is not a list of mutations */
  'vista.mutate.not-a-list': 'Напішыце спіс змен, адну змену або цела запыту са спісам змен.',
  /** A document the mutations create */
  'vista.mutate.operation.create': 'Стварыць',
  /** A document the mutations delete */
  'vista.mutate.operation.delete': 'Выдаліць',
  /** A document the mutations touch without changing its content */
  'vista.mutate.operation.none': 'Без змен',
  /** A document the mutations change */
  'vista.mutate.operation.update': 'Абнавіць',
  /** Button running the mutations as a dry run */
  'vista.mutate.preview': 'Пробны запуск',
  /** Heading of the error shown when the dry run failed */
  'vista.mutate.preview-failed': 'Пробны запуск не ўдаўся',
  /** Heading of the dry run's outcome */
  'vista.mutate.preview-heading': 'Пробны запуск',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vista.mutate.stale':
    'Мутацыі, набор даных ці параметры змяніліся пасля гэтага пробнага запуску. Запусціце яго зноў, каб прымяніць іх.',
  /** How many documents the dry run changes and leaves as they are */
  'vista.mutate.summary': 'Зменена: {{changed}} · Без змен: {{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vista.network.cache': 'Кэш',
  /** The API CDN answered from its cache */
  'vista.network.cache.hit': 'Трапленне',
  /** Under the details of a CDN cache hit */
  'vista.network.cache.hit-explained':
    'CDN адказаў кэшаваным адказам з месца паблізу вас; запыт не дасягнуў API.',
  /** The API CDN answered with a response this session had not seen */
  'vista.network.cache.miss': 'Прамах, наколькі можна меркаваць па гэтай сесіі',
  /** The API answered, which caches nothing */
  'vista.network.cache.none': 'Няма, API адказвае на кожны запыт свежым кантэнтам',
  /** Shown in the Network panel while there is no response */
  'vista.network.empty':
    'Выканайце запыт, каб убачыць, які эндпойнт адказаў на яго, ці быў гэта кэш, і дзе ён быў выкананы.',
  /** In the Network panel: the endpoint that answered */
  'vista.network.endpoint': 'Адказаў',
  /** The live API answered */
  'vista.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vista.network.endpoint.cdn': 'API CDN',
  /** In the Network panel: the region the query ran in */
  'vista.network.region': 'Запыт выкананы ў',
  /** The response did not say where the query ran */
  'vista.network.region.unknown': 'Не паведамлена',
  /** In the Network panel: the round trip and the time on the server */
  'vista.network.timing': 'Час',
  /** The round trip and the server's time for the query, in milliseconds */
  'vista.network.timing.value': '{{e2e}}мс поўны цыкл, {{server}}мс на серверы',
  /** In the Network panel: the trace of the request, for Sanity support */
  'vista.network.trace': 'ID трасіроўкі',
  /** Hint in the Network panel while queries go to the API */
  'vista.network.use-cdn-hint':
    'Уключыце «Выкарыстоўваць API CDN» у Параметрах, каб адпраўляць запыты праз CDN.',
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vista.network.you': 'Вы',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vista.options.dataset.follows-workspace': 'Адпавядае працоўнай прасторы',
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vista.options.dataset.pin': 'Замацаваць набор даных',
  /** Hint under the dataset field while a dataset is pinned */
  'vista.options.dataset.pinned': 'Замацавана; рабочая прастора можа выкарыстоўваць іншы датасет',
  /** Button that makes the tab follow the workspace's dataset again */
  'vista.options.dataset.use-workspace': 'Выкарыстоўваць датасет рабочай прасторы',
  /** Label for the "Include content source map" switch */
  'vista.options.include-source-map': 'Уключыць карту крыніц кантэнту',
  /** Description for the "Include content source map" switch */
  'vista.options.include-source-map.description':
    'Дадае resultSourceMap у адказ, які паказваецца на ўкладцы карты крыніц кантэнту.',
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vista.options.perspective.global': 'Глабальны ({{name}})',
  /** Label of the switch that sends queries to the API CDN */
  'vista.options.use-cdn': 'Выкарыстоўваць API CDN',
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vista.options.use-cdn.anonymous':
    'Гэтая студыя ўваходзіць у вас праз cookie, якое API CDN ніколі не атрымлівае: ён адказвае так, як для ананімнага наведвальніка, паказваючы тое, што бачна ў публічным датасеце.',
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vista.options.use-cdn.blocked':
    'API CDN не абслугоўвае чарнавікі або рэлізы, таму запыты з перспектывай {{perspective}} ідуць да API. З апублікаванай або raw-перспектывай яны выкарыстоўваюць CDN.',
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vista.options.use-cdn.blocked.title': 'Запыты ідуць да API, а не да CDN',
  /** Description of the API CDN switch */
  'vista.options.use-cdn.description':
    'Адпраўляе запыт у API CDN, як useCdn: true ў @sanity/client, з апублікаванай і raw-перспектывамі: чарнавікі і рэлізы заўсёды ідуць да API. Адказы кэшуюцца да адной хвіліны; панэль Сеткі паказвае, калі адказ прыйшоў з кэша.',
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vista.options.use-cdn.use-published': 'Выкарыстоўваць апублікаваную перспектыву',
  /** Label of the variant field */
  'vista.options.variant-label': 'Варыянт',
  /** Variant option sending the navbar's variant, named */
  'vista.options.variant.global': 'Глабальны ({{name}})',
  /** Variant option sending the navbar's variant while none is selected there */
  'vista.options.variant.global-none': 'Глабальны (нічога не выбрана)',
  /** Variant option sending no variant */
  'vista.options.variant.none': 'Няма',
  /** Accessible label for collapsing a bottom panel */
  'vista.panel.collapse': 'Згарнуць панэль',
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vista.panel.delta': 'Дэльта',
  /** Accessible label for expanding a bottom panel */
  'vista.panel.expand': 'Разгарнуць панэль',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vista.panel.explain': 'Тлумачэнне',
  /** Label of the Functions tab in the response panel */
  'vista.panel.functions': 'Функцыі',
  /** Label of the "History" tab in the response panel */
  'vista.panel.history': 'Гісторыя',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vista.panel.lint': 'Лінт',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vista.panel.mutate': 'Змяніць',
  /** Label of the Network tab in the response panel */
  'vista.panel.network': 'Сетка',
  /** Label of the "Options" panel in the request column */
  'vista.panel.options': 'Параметры',
  /** Label of the "Response" tab in the response panel */
  'vista.panel.response': 'Адказ',
  /** Label of the "Content Source Map" tab in the response panel */
  'vista.panel.source-map': 'Карта крыніц кантэнту',
  /** Button adding an item to a list param in the params form */
  'vista.params-form.add-item': 'Дадаць элемент',
  /** Placeholder of a params form field that takes any JSON value */
  'vista.params-form.any-placeholder': 'Любое значэнне JSON; іншы тэкст адпраўляецца як радок',
  /** Shown in the params form when the query uses no params */
  'vista.params-form.empty':
    'Запыт не выкарыстоўвае параметры. Кожны $name у ім атрымлівае тут сваё поле.',
  /** Shown in the params form while the params JSON cannot be parsed */
  'vista.params-form.invalid-json':
    "Параметры не з'яўляюцца сапраўдным JSON. Выпраўце іх у праглядзе JSON, каб рэдагаваць тут.",
  /** A boolean param's value is not true or false; it is sent anyway */
  'vista.params-form.invalid.boolean': 'Не true і не false; адпраўлена як {{value}}',
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vista.params-form.invalid.document-type':
    "Не з'яўляецца тыпам дакумента ў гэтай працоўнай прасторы; усё адно адпраўлена",
  /** A whole number param (a slice bound) holds a fraction */
  'vista.params-form.invalid.integer': 'Не цэлы лік, які патрэбны для зрэзаў',
  /** A list param's value is not a list; it is sent anyway */
  'vista.params-form.invalid.list': 'Не спіс; адпраўлена як {{value}}',
  /** A number param's value is not a number; it is sent anyway */
  'vista.params-form.invalid.number': 'Не лік; адпраўлена як тэкст',
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vista.params-form.invalid.option': 'Не адно з вядомых значэнняў; усё адно адпраўлена',
  /** A text param's value is not text; it is sent anyway */
  'vista.params-form.invalid.string': 'Не тэкст; адпраўлена як {{value}}',
  /** Accessible label of an item input of a list param in the params form */
  'vista.params-form.item-label': '${{name}}, элемент {{index}}',
  /** Placeholder of an item input of a list param in the params form */
  'vista.params-form.item-placeholder': 'Элемент',
  /** Under a params form field whose param has no value */
  'vista.params-form.missing': "Не ўстаноўлена: запыт не выконваецца, пакуль не з'явіцца значэнне",
  /** Shown in the params form when the workspace schema could not be read */
  'vista.params-form.no-schema':
    'Тыпы вызначаюцца толькі на аснове запыту: схему працоўнай прасторы не ўдалося прачытаць.',
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vista.params-form.not-set': 'Не ўстаноўлена',
  /** Button setting a date and time param to the current time */
  'vista.params-form.now': 'Зараз',
  /** Button removing a param the query does not use from the params */
  'vista.params-form.remove': 'Выдаліць',
  /** Accessible label of the button removing an item from a list param */
  'vista.params-form.remove-item': 'Выдаліць элемент',
  /** Shown in the params form when the query does not parse */
  'vista.params-form.syntax-error':
    'Запыт не распазнаецца, таму яго параметры пералічаны без тыпаў.',
  /** Type hint of a params form field: any JSON value */
  'vista.params-form.type.any': 'любое значэнне JSON',
  /** Type hint of a params form field: true or false */
  'vista.params-form.type.boolean': 'true або false',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vista.params-form.type.datetime': 'дата і час (ISO 8601)',
  /** Type hint of a params form field: a document ID */
  'vista.params-form.type.document-id': 'ID дакумента',
  /** Type hint of a params form field: one of the workspace's document types */
  'vista.params-form.type.document-type': 'тып дакумента',
  /** Type hint of a params form field: a whole number */
  'vista.params-form.type.integer': 'цэлы лік',
  /** Type hint of a params form field: a list of values */
  'vista.params-form.type.list': 'спіс, кожны {{type}}',
  /** Type hint of a params form field: a number */
  'vista.params-form.type.number': 'лік',
  /** Type hint of a params form field: text */
  'vista.params-form.type.string': 'тэкст',
  /** Heading of the params the query does not use, listed in the params form */
  'vista.params-form.unused': 'Не выкарыстоўваецца запытам',
  /** Before the expressions that use a param, in the params form */
  'vista.params-form.used-in': 'Выкарыстоўваецца ў',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vista.params.fit-height': 'Падагнана пад змест, {{height}} пікселяў',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vista.params.resize':
    'Змяніць памер параметраў: перацягніце або выкарыстоўвайце клавішы са стрэлкамі; двайны клік або Enter, каб зноў падагнаць пад змест',
  /** Tab showing the params as a form inferred from the query */
  'vista.params.view.form': 'Форма',
  /** Tab showing the params as JSON */
  'vista.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vista.params.view.label': 'Рэдагаваць параметры як',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vista.paste.parsed': 'Запыт загружаны з устаўленага URL',
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vista.paste.unavailable-variant':
    'Устаўлены URL выкарыстоўваў варыянт "{{variant}}"; выберыце яго ў панэлі навігацыі, каб выканаць запыт з ім.',
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vista.paste.unknown-dataset':
    'Набор даных "{{dataset}}" з устаўленага URL тут недаступны, пакідаем бягучы.',
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vista.paste.unsupported-perspective':
    'Перспектыва з устаўленага URL тут не падтрымліваецца, пакідаем бягучую.',
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vista.paste.variants-disabled':
    'Устаўлены URL выкарыстоўваў варыянт "{{variant}}"; у гэтай працоўнай прасторы варыянты адключаны, таму запыт выконваецца без яго.',
  /** Accessible label for the query actions menu */
  'vista.query.actions': 'Дзеянні запыту',
  /** Tooltip when automatic refetching is not available for the API version */
  'vista.query.auto-refetch.unsupported':
    'Для аўтаматычнага паўторнага запыту патрабуецца версія API v2021-03-25 або навей.',
  /** Toast shown after the query was copied */
  'vista.query.copied': 'Запыт скапіяваны ў буфер абмену',
  /** Menu item copying the query text */
  'vista.query.copy': 'Скапіяваць запыт',
  /** Menu item opening the export query dialog */
  'vista.query.export': 'Экспартаваць запыт…',
  /** Menu item reformatting the query */
  'vista.query.prettify': 'Фарматаваць запыт',
  /** Toast shown when the query could not be reformatted */
  'vista.query.prettify.failed': 'Не ўдалося адфарматаваць запыт',
  /** Menu item saving the query to the personal saved queries */
  'vista.query.save': 'Захаваць запыт',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vista.query.stop': 'Спыніць',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vista.query.stop.description': 'Спыніць атрыманне',
  /** Explanation in the settings section about the redesigned experience */
  'vista.redesign.settings.description':
    'Вы выкарыстоўваеце абноўлены інструмент Vision. Пераключэнне назад захавае вашы ўкладкі і налады ў гэтым браўзеры да наступнага разу.',
  /** Title of the settings section about the redesigned experience */
  'vista.redesign.settings.title': 'Абноўлены Vision (бэта)',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vista.redesign.switch-to-classic': 'Пераключыцца на класічны Vision',
  /** Toast button that switches to the redesigned tool */
  'vista.redesign.toast.accept': 'Паспрабаваць зараз',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.description':
    'Укладкі запытаў, жывое паўторнае атрыманне, дэталі адказу і экспарт. Вы можаце пераключыцца назад у любы час.',
  /** Toast button that hides the invitation */
  'vista.redesign.toast.dismiss': 'Не зараз',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.title': 'Паспрабуйце абноўлены Vision',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vista.redesign.try': 'Паспрабаваць абноўлены варыянт',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vista.redesign.try.description':
    'Пераключыцца на абноўлены Vision у бэта-версіі. Вы можаце вярнуцца назад у любы час з яго бакавой панэлі.',
  /** Empty state of the response panel before anything was fetched */
  'vista.response.empty': 'Пакуль нічога не атрымана',
  /** Label for the payload size in the response tab */
  'vista.response.payload-size': 'Памер payload',
  /** Label for the sync tags in the response tab */
  'vista.response.sync-tags': 'Тэгі сінхранізацыі',
  /** Shown when the response carried no sync tags */
  'vista.response.sync-tags.none': 'У адказе няма тэгаў сінхранізацыі',
  /** Accessible label for the result actions menu */
  'vista.result.actions': 'Дзеянні з вынікам',
  /** Toast shown after the result was copied */
  'vista.result.copied': 'Вынік скапіяваны ў буфер абмену',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vista.result.copied-value': 'Скапіявана {{path}}',
  /** Menu item and button copying the result as JSON */
  'vista.result.copy': 'Скапіяваць вынік',
  /** Button next to each property in the result tree, copying its value */
  'vista.result.copy-value': 'Скапіяваць значэнне',
  /** Empty state of the result view */
  'vista.result.empty': 'Выканайце запыт, каб убачыць вынік тут',
  /** Button exporting the result as CSV */
  'vista.result.export-csv': 'Экспартаваць CSV',
  /** Button exporting the result as JSON */
  'vista.result.export-json': 'Экспартаваць JSON',
  /** Menu item opening the TypeScript export dialog */
  'vista.result.export-typescript': 'Экспартаваць TypeScript…',
  /** Menu item opening the Zod export dialog */
  'vista.result.export-zod': 'Экспарт Zod…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vista.result.graph.collapse': 'Схаваць змесціва',
  /** Button fitting the whole graph in view */
  'vista.result.graph.fit': 'Уціснуць у акно',
  /** Accessible label of the graph, saying how to move around in it */
  'vista.result.graph.label':
    'Граф выніку: перацягвайце, каб перамяшчацца, пракручвайце, каб маштабаваць; у фокусе стрэлкі перамяшчаюць, + і - маштабуюць, 0 уціскае ў акно',
  /** Ends the note on a graph that leaves part of this result out */
  'vista.result.graph.left-out-hint': 'Дрэва і прагляд JSON паказваюць усё цалкам.',
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vista.result.graph.node-limit': "Паказаны толькі першыя {{nodes}} аб'ектаў і масіваў.",
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vista.result.graph.partial': 'Для {{nodes}} паказаны толькі першыя {{rows}} запісаў.',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vista.result.graph.partial.node': '{{name}} ({{entries}} запісаў)',
  /** Title of the graph node of the result itself */
  'vista.result.graph.root': 'вынік',
  /** Button zooming into the graph */
  'vista.result.graph.zoom-in': 'Павялічыць',
  /** Button zooming out of the graph */
  'vista.result.graph.zoom-out': 'Паменшыць',
  /** Tab showing the result as a graph of its objects and arrays */
  'vista.result.view.graph': 'Граф',
  /** Tab showing the result as indented JSON text, to select and copy from */
  'vista.result.view.json': 'JSON',
  /** Accessible label of the tabs that switch how the result shows */
  'vista.result.view.label': 'Прагляд выніку',
  /** Tab showing the result as a tree to browse */
  'vista.result.view.tree': 'Дрэва',
  /** Empty state of the saved queries panel */
  'vista.saved.empty': 'Пакуль няма захаваных запытаў. Захавайце бягучы запыт кнопкай +.',
  /** Empty state of a query list when the search matches nothing */
  'vista.saved.empty-search': 'Запыты, якія адпавядаюць пошуку, не знойдзены',
  /** Menu item loading a saved query into the active tab */
  'vista.saved.load-in-current-tab': 'Загрузіць у бягучую ўкладку',
  /** Menu item opening a saved query in a new tab */
  'vista.saved.open-in-new-tab': 'Адкрыць у новай укладцы',
  /** Menu item renaming a saved query */
  'vista.saved.rename': 'Перайменаваць',
  /** Accessible label for the button saving the current query */
  'vista.saved.save-current': 'Захаваць бягучы запыт',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vista.saved.unavailable-variant':
    'Гэты захаваны запыт выкарыстоўваў варыянт "{{variant}}"; абярыце яго ў навігацыйнай панэлі, каб выканаць запыт з ім.',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vista.saved.unknown-dataset':
    'Набор даных "{{dataset}}" гэтага захаванага запыту тут недаступны, застаецца бягучы.',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vista.saved.variants-disabled':
    'Гэты захаваны запыт выкарыстоўваў варыянт "{{variant}}"; у гэтай працоўнай прасторы варыянты адключаны, таму запыт выконваецца без яго.',
  /** Button in the settings dialog that clears the stored state */
  'vista.settings.clear-storage': 'Ачысціць сховішча',
  /** Confirmation button for clearing the storage */
  'vista.settings.clear-storage.confirm': 'Так, ачысціць сховішча',
  /** Explanation of what clearing the storage does */
  'vista.settings.clear-storage.description':
    'Выдаляе вашыя асабістыя захаваныя запыты і бібліятэку функцый, скідвае адкрытыя ўкладкі і гэтыя налады па змаўчанні ў гэтым браўзеры, і вяртае класічны інструмент Vision. Агульныя запыты захоўваюцца.',
  /** Toast shown when the saved queries could not be cleared */
  'vista.settings.clear-storage.error': 'Не ўдалося ачысціць захаваныя запыты',
  /** Toast shown after the storage was cleared */
  'vista.settings.clear-storage.success': 'Сховішча ачышчана',
  /** Explanation at the top of the settings dialog */
  'vista.settings.description':
    'Налады па змаўчанні для новых укладак. Адкрытыя ўкладкі захоўваюць уласныя параметры.',
  /** Explains the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.description':
    'Адзін шлях поля на радок. Шлях супадае на любой глыбіні выніку, таму _rev хавае рэвізію кожнага дакумента ў ім. Кожны diff усё яшчэ можа паказваць іх.',
  /** Button restoring the default fields left out of History diffs */
  'vista.settings.history-diff.reset': 'Скінуць да значэнняў па змаўчанні',
  /** Label of the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.title': 'Палі, схаваныя з diff-аў Гісторыі',
  /** Title of the settings dialog */
  'vista.settings.title': 'Налады',
  /** Empty state of the shared queries panel */
  'vista.shared.empty':
    'Пакуль няма агульных запытаў. Падзяліцеся захаваным запытам, каб зрабіць яго даступным усім, хто карыстаецца гэтым набрам даных.',
  /** Shortcut description: close dialogs and menus */
  'vista.shortcuts.close': 'Закрыць дыялогі і меню',
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vista.shortcuts.complete': 'Дапоўніць назву функцыі',
  /** Shortcut description: copy the query */
  'vista.shortcuts.copy-query': 'Скапіяваць запыт',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vista.shortcuts.extract-function': 'Вынесці праекцыю ля курсора ў функцыю',
  /** Shortcut description: run the query */
  'vista.shortcuts.fetch': 'Выканаць запыт',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vista.shortcuts.next-finding': 'Перайсці да наступнага вынiка lint-праверкі',
  /** Shortcut description: reformat the query */
  'vista.shortcuts.prettify': 'Прыгожа аформіць запыт',
  /** Title of the keyboard shortcuts dialog */
  'vista.shortcuts.title': 'Спалучэнні клавіш',
  /** Sidebar toggle: show icons only */
  'vista.sidebar.collapse': 'Згарнуць бакавую панэль',
  /** Sidebar toggle: show labels next to the icons */
  'vista.sidebar.expand': 'Разгарнуць бакавую панэль',
  /** Accessible label for the sidebar navigation */
  'vista.sidebar.label': 'Бакавая панэль Vista',
  /** Sidebar item and drawer title for personal saved queries */
  'vista.sidebar.saved-queries': 'Захаваныя запыты',
  /** Sidebar item opening the settings dialog */
  'vista.sidebar.settings': 'Налады',
  /** Sidebar item and drawer title for shared queries */
  'vista.sidebar.shared-queries': 'Агульныя запыты',
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vista.sidebar.shortcuts': 'Спалучэнні клавіш',
  /** Empty state of the content source map panel */
  'vista.source-map.empty':
    'Няма карты крыніц кантэнту ў адказе. Уключыце "Include content source map" у Опцыях і запытайце зноў.',
  /** Accessible label of the divider between the result and the response details panel */
  'vista.split.bottom-panel':
    'Змяніць памер панэлі дэталяў адказу: перацягніце або выкарыстоўвайце клавішы са стрэлкамі; Home і End пераходзяць да межаў, Enter скідвае',
  /** Accessible label of the divider between the request and response panes */
  'vista.split.request-response':
    'Змяніць памер панэляў запыту і адказу: перацягніце або выкарыстоўвайце клавішы са стрэлкамі; Home і End пераходзяць да межаў, Enter скідвае',
  /** Accessible label for the button closing a query tab */
  'vista.tabs.close-tab': 'Закрыць укладку',
  /** Accessible label for the list of query tabs */
  'vista.tabs.label': 'Укладкі запытаў',
  /** Accessible label for the button opening a new query tab */
  'vista.tabs.new-tab': 'Новая ўкладка',
  /** Placeholder of the input renaming a tab */
  'vista.tabs.title-placeholder': 'Назва ўкладкі',
  /** Title of a tab whose query is still empty */
  'vista.tabs.untitled': 'Безназоўны запыт',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vista.webmcp.check-query': 'Праверыць запыт GROQ у Vision',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vista.webmcp.describe-schema': 'Апісаць схему ў Vision',
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vista.webmcp.explain-query': 'Растлумачыць запыт GROQ у Vision',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vista.webmcp.get-state': 'Прачытаць адкрытую ўкладку Vision',
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vista.webmcp.open-query': 'Адкрыць запыт GROQ у Vision',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vista.webmcp.preview-mutations': 'Папярэдні прагляд мутацый у Vision',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vista.webmcp.run-query': 'Выканаць запыт GROQ у Vision',
})
