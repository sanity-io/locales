import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Kopiuj do schowka',
  /** Label for deleting a query */
  'action.delete': 'Usuń',
  /** Label for editing a query's title */
  'action.edit-title': 'Edytuj tytuł',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Zatrzymaj',
  /** Label for setting up a listener */
  'action.listen-execute': 'Słuchaj',
  /** Label for query loading table */
  'action.load-queries': 'Załaduj zapytania',
  /** Label for loading a query */
  'action.load-query': 'Załaduj zapytanie',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Anuluj',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Pobierz',
  /** Label for saving a query */
  'action.save-personal-copy': 'Zapisz osobistą kopię',
  /** Label for saving a personal query */
  'action.save-personal-query': 'Zapisz jako osobiste',
  /** Label for saving a query */
  'action.save-query': 'Zapisz zapytanie',
  /** Label for saving a shared query */
  'action.save-shared-query': 'Zapisz jako udostępnione',
  /** Label for unsharing a query */
  'action.unshare': 'Cofnij udostępnianie',
  /** Label for updating a query */
  'action.update': 'Aktualizuj',

  /** Label for actions user can take */
  'label.actions': 'Akcje',
  /** Label for all saved queries */
  'label.all': 'Wszystkie',
  /** Label for saved queries that have been edited */
  'label.edited': 'Edytowane',
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Nowy',
  /** Label for query type "personal" */
  'label.personal': 'Osobiste',
  /** Label for savedAt date */
  'label.saved-at': 'Zapisano o',
  /** Saved queries */
  'label.saved-queries': 'Zapisane zapytania',
  /** Search queries */
  'label.search-queries': 'Szukaj zapytań',
  /** Share query */
  'label.share': 'Udostępnij',
  /** Label for query type "shared" */
  'label.shared': 'Udostępnione',
  /** Label for saved query type "team" */
  'label.team': 'Zespół',
  /** Label for untitled query fallback */
  'label.untitled-query': 'Bez tytułu',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'Parametry nie są prawidłowym JSON',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Parametry',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Kolumna',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Linia',
  /** Extra explanation when a 400 is returned for a release perspective on an old API version */
  'query.error.unsupported-release-perspective':
    'Ta wersja API nie obsługuje złożonych perspektyw. Użyj wersji {{apiVersion}} lub nowszej.',
  /** Extra explanation when a 400 is returned for a variant on an incompatible API version */
  'query.error.unsupported-variant':
    'Ta wersja API nie obsługuje wariantów treści. Użyj eksperymentalnej wersji API ({{apiVersion}}).',
  /** Label for "Query" editor/input */
  'query.label': 'Zapytanie',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'URL zapytania',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'Czas od początku do końca',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'Czas wykonania',
  /** Label for "Result" explorer/view */
  'result.label': 'Wynik',
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable': 'Wynik nie może być zakodowany jako CSV',
  /** Label for "Save result as" result action */
  'result.save-result-as-format': 'Zapisz wynik jako <SaveResultButtons/>',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'brak danych',

  /** Query already saved error label */
  'save-query.already-saved': 'Zapytanie już zapisane',
  /** Save error label */
  'save-query.error': 'Błąd podczas zapisywania zapytania',
  /** Save personal copy success label */
  'save-query.personal-copy-success': 'Osobista kopia zapisana',
  /** Warning displayed before sharing a query */
  'save-query.share-warning':
    'Udostępnione zapytania są przechowywane jako dokumenty w Twoim dataset i wliczają się do limitu dokumentów.',
  /** Save shared query success label */
  'save-query.shared-success': 'Udostępnione zapytanie zapisane',
  /** Save success label */
  'save-query.success': 'Zapytanie zapisane',
  /** Save unshared query success label */
  'save-query.unshared-success': 'Zapytanie przeniesione do osobistych',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'Wersja API',
  /** Tooltip shown when the API version selector is locked because a variant is selected */
  'settings.api-version-locked-for-variant':
    'Gdy wybrany jest wariant, wersja API musi mieć wartość vX.',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'Niestandardowa wersja API',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Dataset',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'Nieprawidłowa wersja API',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'Inne',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspektywa',
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    'Perspektywa "<code>previewDrafts</code>" została przemianowana na "<code>drafts</code>" i jest teraz przestarzała. Zmiana ta jest skuteczna dla wszystkich wersji z obsługą perspektywy (>= v2021-03-25).',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Czytaj dokumentację',
  /** Option for selecting default perspective */
  'settings.perspectives.default': 'Brak perspektywy (domyślne API)',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Perspektywy pozwalają na uruchomienie zapytania względem różnych "widoków" zawartości w twoim zbiorze danych',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    'Domyślna perspektywa zmieni się z "<code>raw</code>" na "<code>published</code>" w nadchodzącej wersji API. Proszę zapoznać się z dokumentacją, aby uzyskać więcej szczegółów.',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': 'Przypięte wydanie',
  /** Label for the scheduled drafts perspective */
  'settings.perspectives.scheduled-drafts': 'Zaplanowane wersje robocze',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspektywy',

  /** Tooltip line of every control that calls Sanity Agent Actions, which bills AI credits */
  'vision.agent-actions.credits': 'Zużywa jeden kredyt AI na żądanie',
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vision.ai-credits.balance': 'Pozostało {{balance}} z {{quota}} kredytów AI w tym miesiącu.',
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vision.ai-credits.deficit':
    'Zużyto {{used}} kredytów AI w tym miesiącu, o {{deficit}} więcej niż {{quota}} w ramach pakietu.',
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vision.ai-credits.limit.description':
    'Twoja organizacja zużyła {{used}} z {{quota}} kredytów AI w tym miesiącu, dlatego Sanity Agent Actions są wstrzymane do następnego miesiąca lub do czasu podwyższenia limitu wydatków.',
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vision.ai-credits.limit.description-unknown':
    'Twoja organizacja osiągnęła limit wydatków na kredyty AI, dlatego Sanity Agent Actions są wstrzymane do następnego miesiąca lub do czasu podwyższenia limitu.',
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vision.ai-credits.limit.learn-more': 'Jak działają kredyty AI',
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vision.ai-credits.limit.manage': 'Zarządzaj kredytami AI',
  /** Title of the card shown where the organization is out of AI credits */
  'vision.ai-credits.limit.title': 'Brak kredytów AI',
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vision.ai-credits.usage': 'Użycie AI',
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vision.ai-credits.used': 'Zużyto {{used}} kredytów AI w tym miesiącu.',
  /** Button in the request column's action bar naming the API version requests go out with */
  'vision.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vision.api-version.button-cdn': 'API CDN {{version}}',
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vision.api-version.button-invalid': 'Niedokończona wersja API',
  /** Tooltip of the API version button */
  'vision.api-version.tooltip':
    'Zapytania są wykonywane w wersji API {{version}}. Wybierz, aby zmienić to w Opcjach.',
  /** Tooltip of the API version button while queries go through the API CDN */
  'vision.api-version.tooltip-cdn':
    'Zapytania są wykonywane przez API CDN w wersji API {{version}}. Wybierz, aby zmienić to w Opcjach.',
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vision.api-version.tooltip-cdn-blocked':
    'Zapytania są wykonywane przez API w wersji {{version}}, a nie przez API CDN: nie obsługuje ono perspektywy {{perspective}}. Wybierz, aby zmienić to w Opcjach.',
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vision.api-version.tooltip-invalid':
    'Wersja API w Opcjach jest niedokończona, więc nic nie można pobrać, dopóki nie zostanie uzupełniona.',
  /** Tooltip of the API version button while a selected variant forces the variants API version */
  'vision.api-version.tooltip-locked':
    'Zapytania są wykonywane w wersji API {{version}}, której wymaga wybrany wariant.',
  /** Label of the document after the change in the Delta panel */
  'vision.delta.after': 'Po',
  /** Label of the document before the change in the Delta panel */
  'vision.delta.before': 'Przed',
  /** What the Delta panel does */
  'vision.delta.description':
    'Uruchamia zapytanie w trybie delta, tak jak robią to webhooki, nasłuchiwacze (listeners) i Sanity Functions oparte na GROQ: before() i after() to dokument przed i po zmianie, @ to dokument po zmianie, a delta::changedAny() je porównuje. Działa w przeglądarce z użyciem groq-js. Pusta strona oznacza brak dokumentu: zmiana go tworzy lub usuwa.',
  /** Label of the document ID field in the Delta panel */
  'vision.delta.document-id': 'ID dokumentu',
  /** Shown when there is a query but no documents to compare */
  'vision.delta.empty': 'Wczytaj historię dokumentu lub wpisz dokumenty w polach Przed i Po.',
  /** Shown when the query fails in delta mode */
  'vision.delta.failed': 'Nie można było uruchomić zapytania w trybie delta: {{message}}',
  /** Shown when the After document is not valid JSON */
  'vision.delta.invalid-after': 'Po nie jest poprawnym JSON-em: {{message}}',
  /** Shown when the Before document is not valid JSON */
  'vision.delta.invalid-before': 'Before nie jest prawidłowym JSON: {{message}}',
  /** Button loading the document's revisions from the History API */
  'vision.delta.load': 'Wczytaj historię',
  /** Shown when the history could not be loaded */
  'vision.delta.load-failed': 'Nie można wczytać historii: {{message}}',
  /** A delta filter that is true for the change */
  'vision.delta.matches':
    'Pasuje: webhook lub funkcja z tym filtrem zostanie uruchomiona dla tej zmiany.',
  /** A delta filter that is false for the change */
  'vision.delta.no-match':
    'Nie pasuje: webhook lub funkcja z tym filtrem nie zostanie uruchomiona dla tej zmiany.',
  /** Shown while the query or its params cannot be sent */
  'vision.delta.no-request': 'Popraw zapytanie i jego parametry, aby uruchomić je w trybie delta.',
  /** Heading of the delta result */
  'vision.delta.result': 'Wynik',
  /** The After choice for a change that deletes the document */
  'vision.delta.revision.none-after': 'Nic: zmiana usuwa dokument',
  /** The Before choice for a change that creates the document */
  'vision.delta.revision.none-before': 'Nic: zmiana tworzy dokument',
  /** A revision in the Before and After lists */
  'vision.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vision.drawer.close': 'Zamknij panel',
  /** Explanation at the top of the Explain panel */
  'vision.explain.description':
    'Plan zapytania to sposób, w jaki Content Lake wykonuje zapytanie: co odczytuje, filtruje i sortuje podczas odczytu oraz co pozostawia na późniejsze etapy. Opcja „Wyjaśnij mi to” wykorzystuje Sanity Agent Actions do opisania zapytania i jego planu prostymi słowami, co zużywa jeden kredyt AI.',
  /** Shown in the Explain panel while there is no valid query to explain */
  'vision.explain.empty': 'Napisz zapytanie, aby je wyjaśnić.',
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vision.explain.explain': 'Wyjaśnij mi to',
  /** Shown when the explanation could not be written */
  'vision.explain.failed': 'Nie udało się wyjaśnić zapytania: {{message}}',
  /** A count the index computes without reading the documents */
  'vision.explain.insight.aggregate': 'Policzone w indeksie, bez odczytywania dokumentów.',
  /** A subquery the plan runs once for all documents */
  'vision.explain.insight.batched-subquery':
    'Podzapytanie uruchamiane jest raz dla wszystkich dokumentów, w jednym zbiorczym pobraniu, a nie osobno dla każdego dokumentu.',
  /** Part of the filter runs in memory; the expression follows */
  'vision.explain.insight.filter-in-memory':
    'Część filtra działa w pamięci, po odczycie: każdy dokument przepuszczony przez indeks jest najpierw odczytywany, co spowalnia działanie na dużych zbiorach danych. Złączenia (->) i funkcje w filtrze nie mogą korzystać z indeksu.',
  /** The index sorts and limits while reading */
  'vision.explain.insight.index-sort-limit':
    'Indeks sortuje i ogranicza dokumenty podczas ich odczytu.',
  /** The plan slices in memory */
  'vision.explain.insight.slice-in-memory':
    'Wycinek jest pobierany w pamięci po odczycie, a nie jako ograniczenie podczas odczytu.',
  /** The plan sorts in memory */
  'vision.explain.insight.sort-in-memory':
    'Sortowanie odbywa się w pamięci, po odczytaniu wszystkich dopasowań. Sortuj według atrybutów, które indeks potrafi sortować.',
  /** Link under the plan insights to the guide on fast queries */
  'vision.explain.insights.guide': 'Wydajne GROQ',
  /** Heading of the plan insights in the Explain panel */
  'vision.explain.insights.title': 'Co warto zauważyć',
  /** Button in the Explain panel fetching the query plan */
  'vision.explain.plan': 'Pokaż plan zapytania',
  /** Shown when the query plan could not be fetched */
  'vision.explain.plan-failed': 'Nie udało się pobrać planu zapytania: {{message}}',
  /** Heading of the query plan in the Explain panel */
  'vision.explain.plan-title': 'Plan zapytania',
  /** Toast shown after a code snippet was copied */
  'vision.export-query.copied': 'Fragment kodu skopiowany do schowka',
  /** Label for the button that copies a code snippet */
  'vision.export-query.copy': 'Kopiuj fragment kodu',
  /** Explanation at the top of the export query dialog */
  'vision.export-query.description':
    'Uruchom to zapytanie poza studiem, korzystając z jednego z poniższych fragmentów kodu.',
  /** Note under the curl snippet when the query is sent as a request body rather than in the URL */
  'vision.export-query.post-body-note':
    'Zapytanie i parametry zajmują {{size}} znaków jako parametry wyszukiwania; od {{limit}} wzwyż, @sanity/client wysyła je jako treść JSON zamiast w adresie URL, więc ten fragment kodu robi to samo.',
  /** Title of the dialog that exports the query as code snippets */
  'vision.export-query.title': 'Eksportuj zapytanie',
  /** Note about authentication in the export query dialog */
  'vision.export-query.token-note':
    'Prywatne datasety wymagają tokena API. W przypadku publicznych datasetów nagłówek Authorization można pominąć.',
  /** Toast shown after the generated code was copied */
  'vision.export-types.copied': 'Kod skopiowany do schowka',
  /** Label for the button that copies the generated code */
  'vision.export-types.copy': 'Kopiuj kod',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vision.export-types.empty':
    'Najpierw pobierz zapytanie, aby uzyskać wynik, na podstawie którego można wyprowadzić typy.',
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vision.export-types.schema-error': 'Ocena schematu nie powiodła się: {{message}}',
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vision.export-types.source.result':
    'Wywnioskowano na podstawie pobranego wyniku, ponieważ zapytania nie udało się ocenić względem schematu przestrzeni roboczej.',
  /** Note shown when the types were derived from the workspace schema */
  'vision.export-types.source.schema':
    'Wywnioskowano na podstawie schematu przestrzeni roboczej, w taki sam sposób jak robi to sanity typegen.',
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vision.export-types.stale-result':
    'Wyświetlony wynik został pobrany dla innego zapytania lub innych parametrów. Najpierw pobierz bieżące zapytanie, aby uzyskać wynik, na podstawie którego można wyprowadzić typy.',
  /** Title of the dialog exporting TypeScript types for the result */
  'vision.export-types.title-typescript': 'Eksportuj TypeScript',
  /** Title of the dialog exporting a Zod schema for the result */
  'vision.export-types.title-zod': 'Eksportuj Zod',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vision.functions.add': 'Dodaj do zapytania',
  /** Shown on a library function the query declares the same way */
  'vision.functions.declared': 'W tym zapytaniu',
  /** Lint action on a call of a library function the query does not declare */
  'vision.functions.editor.add-from-library': 'Zadeklaruj ją',
  /** Note in a function's hover documentation: the API version it needs */
  'vision.functions.editor.api-version': 'Wymaga wersji API {{version}} lub nowszej',
  /** Detail of a completion for a custom function the query declares */
  'vision.functions.editor.completion-declared': 'w tym zapytaniu',
  /** Detail of a completion for a library function, which declares it too */
  'vision.functions.editor.completion-library': 'z Twojej biblioteki',
  /** Note in the hover documentation of a custom function the query declares */
  'vision.functions.editor.declared-on': 'Funkcja niestandardowa, zadeklarowana w linii {{line}}',
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vision.functions.editor.delta-only':
    'Działa tylko w trybie delta, w którym webhooki i Sanity Functions uruchamiają swoje filtry',
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vision.functions.editor.extract': 'Wyodrębnij do funkcji',
  /** Note in the hover documentation of a library function the query does not declare */
  'vision.functions.editor.in-library':
    'W Twojej bibliotece funkcji, nie zadeklarowane w tym zapytaniu',
  /** Link at the end of a built-in function's hover documentation */
  'vision.functions.editor.reference': 'Dokumentacja funkcji GROQ',
  /** Explanation under the library heading in the Functions panel */
  'vision.functions.library.description':
    'Przechowywane w tej przeglądarce dla każdego zbioru danych projektu. Podpowiedzi oferują te funkcje, a lint proponuje zadeklarowanie tej, którą wywołuje zapytanie.',
  /** Shown in the Functions panel while the library is empty */
  'vision.functions.library.empty':
    'Zapisz funkcję zadeklarowaną w zapytaniu, aby użyć jej w innych zapytaniach.',
  /** Heading of the functions library in the Functions panel */
  'vision.functions.library.title': 'Biblioteka',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vision.functions.query.empty':
    'Zadeklaruj niestandardowe funkcje na górze zapytania lub umieść kursor w projekcji, np. author->{name}, i naciśnij przycisk wyodrębniania nad edytorem ({{shortcut}}).',
  /** Heading of the functions the query declares in the Functions panel */
  'vision.functions.query.title': 'W tym zapytaniu',
  /** Removes a function from the library */
  'vision.functions.remove': 'Usuń z biblioteki',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vision.functions.replace': 'Zastąp w zapytaniu',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vision.functions.reveal': 'Pokaż {{name}} w edytorze',
  /** Button of a function the query declares that is not in the library yet */
  'vision.functions.save': 'Zapisz do biblioteki',
  /** Shown on a function the query declares the way the library has it */
  'vision.functions.saved': 'Zapisano',
  /** Button of a function the query declares differently from the library's version */
  'vision.functions.update': 'Zaktualizuj bibliotekę',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vision.generate.button': 'Generuj zapytanie',
  /** Closes the generate query bar */
  'vision.generate.close': 'Zamknij',
  /** Explanation under the generate query field */
  'vision.generate.description':
    'Akcje Agenta Sanity piszą GROQ na podstawie Twojego opisu i typów dokumentów, a Content Lake sprawdza każdą próbę; każda próba zużywa jeden kredyt AI. Zastępuje zapytanie tej karty i uruchamia je; cofnięcie w edytorze przywraca poprzednie zapytanie.',
  /** Shown when no query could be generated, above the reason */
  'vision.generate.failed': 'Nie udało się wygenerować zapytania',
  /** Accessible label of the description field in the generate query bar */
  'vision.generate.label': 'Co ma pobierać zapytanie?',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vision.generate.open-anyway': 'Otwórz ostatnią próbę',
  /** Placeholder of the description field in the generate query bar */
  'vision.generate.placeholder':
    '10 najnowszych autorów, uporządkowanych według nazwiska, a następnie imienia',
  /** Shown while the first attempt at a query is written */
  'vision.generate.progress': 'Pisanie zapytania…',
  /** Shown while a rejected attempt is retried */
  'vision.generate.progress-retry': 'Poprawianie zapytania (próba {{attempt}} z {{max}})…',
  /** Button generating the query */
  'vision.generate.submit': 'Generuj',
  /** Badge on a history entry the API CDN answered */
  'vision.history.cdn': 'API CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vision.history.cdn-cache-hit': 'Trafienie w pamięci podręcznej CDN',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vision.history.changed': 'Zmieniono',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vision.history.changes': 'Zmiany',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vision.history.changes-failed': 'Nie udało się wyświetlić zmian.',
  /** Button retrying to show the changes of a history entry */
  'vision.history.changes-retry': 'Ponów',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vision.history.compared-with': 'Porównano z pobraniem o {{time}}',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vision.history.diff.params': 'Parametry',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vision.history.diff.query': 'Zapytanie',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vision.history.diff.query-formatting-only': 'Zmieniło się tylko formatowanie',
  /** Label of the diff of the query result in a history entry's changes */
  'vision.history.diff.result': 'Wynik',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vision.history.diff.url': 'Adres URL żądania',
  /** Empty state of the history panel */
  'vision.history.empty': 'Nic jeszcze nie pobrano',
  /** Status label for a failed fetch in the history */
  'vision.history.failed': 'Niepowodzenie',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vision.history.hide-hidden': 'Ukryj je',
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vision.history.hiding': 'Ukrywanie {{fields}}',
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vision.history.only-hidden-changed': 'Zmieniły się tylko ukryte pola',
  /** History reason: a tab opened with a generated query fetched it */
  'vision.history.reason.generated': 'Wygenerowane zapytanie',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vision.history.reason.link': 'Otwarto link',
  /** History reason: a live event matched the query's sync tags */
  'vision.history.reason.live': 'Aktualizacja na żywo',
  /** History reason: the live connection asked every client to refetch */
  'vision.history.reason.live-restart': 'Połączenie na żywo zostało zrestartowane',
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vision.history.reason.live-start': 'Rozpoczęto pobieranie na żywo',
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vision.history.reason.load': 'Wczytano zapytanie',
  /** History reason: the fetch button was pressed */
  'vision.history.reason.manual': 'Przycisk pobierania',
  /** History reason: mutations were applied from the Mutate panel */
  'vision.history.reason.mutation': 'Zastosowano mutacje',
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vision.history.reason.options': 'Zmieniono opcje',
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vision.history.reason.paste': 'Wklejono adres URL',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vision.history.reason.resume': 'Automatyczne pobieranie wznowione',
  /** History reason: the keyboard shortcut was used */
  'vision.history.reason.shortcut': 'Skrót klawiszowy',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vision.history.same-result': 'Taki sam wynik',
  /** Button showing the hidden fields in a history entry's changes */
  'vision.history.show-hidden': 'Pokaż je',
  /** Next to a history entry's changes while the hidden fields are shown */
  'vision.history.showing-hidden': 'Pokazano {{fields}}, domyślnie ukryte',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vision.history.too-large': 'Zbyt duże, aby porównać',
  /** A history entry whose result is the same as the previous result */
  'vision.history.unchanged': 'Brak zmian',
  /** Shown in the Lint panel while the query has no lint findings */
  'vision.lint.empty':
    'Brak wyników lintowania. Problemy wykryte przez linter GROQ w zapytaniu są wyświetlane tutaj w trakcie pisania; wybierz jeden, aby zaznaczyć go w edytorze.',
  /** Where a lint finding sits in the query, shown under its message */
  'vision.lint.position': 'Wiersz {{line}}, kolumna {{column}}',
  /** Severity badge of a lint finding */
  'vision.lint.severity.error': 'Błąd',
  /** Severity badge of a lint finding */
  'vision.lint.severity.hint': 'Wskazówka',
  /** Severity badge of a lint finding */
  'vision.lint.severity.info': 'Informacja',
  /** Severity badge of a lint finding */
  'vision.lint.severity.warning': 'Ostrzeżenie',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vision.lint.use-suggestion': 'Użyj {{suggestion}}',
  /** Badge shown while a tab refetches automatically */
  'vision.live.active': 'Na żywo',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vision.live.button': 'Pobieranie na żywo',
  /** Tooltip of the Live button while automatic refetching is off */
  'vision.live.button.start':
    'Pobierz, a następnie pobieraj ponownie za każdym razem, gdy dokumenty w wyniku się zmienią',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vision.live.button.stop':
    'Zatrzymaj pobieranie, gdy dokumenty w wyniku się zmieniają. Pobieranie na żądanie nadal działa dla wyników, których nie dotyczy żadna zmiana dokumentu, np. now()',
  /** Error shown when the live connection breaks */
  'vision.live.error': 'Aktualizacje na żywo rozłączone: {{message}}',
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vision.live.stop': 'Zatrzymaj na żywo',
  /** Button in the Mutate panel adding a mutation to the list */
  'vision.mutate.add': 'Dodaj mutację',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vision.mutate.add.create': 'Utwórz dokument',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vision.mutate.add.delete': 'Usuń dokument',
  /** Adds a mutation deleting the documents of the shown result */
  'vision.mutate.add.delete-result': 'Usuń dokumenty z wyniku',
  /** Adds a mutation patching a document, its ID to fill in */
  'vision.mutate.add.patch': 'Wprowadź poprawkę do dokumentu',
  /** Adds a mutation patching the documents of the shown result */
  'vision.mutate.add.patch-result': 'Załataj dokumenty w wyniku',
  /** Button applying the mutations a dry run showed */
  'vision.mutate.apply': 'Zastosuj do {{dataset}}',
  /** Heading of the error shown when applying the mutations failed */
  'vision.mutate.apply-failed': 'Mutacje nie zostały zastosowane',
  /** Next to Apply while the mutations as they are have had no dry run */
  'vision.mutate.apply-needs-preview':
    'Zastosuj wysyła to, co pokazał suchy przebieg: najpierw go uruchom.',
  /** Option giving array items without a _key one */
  'vision.mutate.auto-keys': 'Dodaj _key do elementów tablicy, które go nie mają',
  /** Under the option giving array items a _key */
  'vision.mutate.auto-keys.description':
    'Studio wymaga go na każdym elemencie tablicy, aby można go było edytować.',
  /** Button showing a document's changes in the dry run */
  'vision.mutate.changes': 'Zmiany',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vision.mutate.changes-failed': 'Nie można było pokazać zmian.',
  /** Button retrying to show a document's changes */
  'vision.mutate.changes-retry': 'Ponów',
  /** What the Mutate panel does */
  'vision.mutate.description':
    'Zapisz mutacje tak, jak przyjmuje je Mutations API, w formie listy: create, createOrReplace, createIfNotExists, delete i patch, według ID lub zapytania GROQ. Suchy przebieg pokazuje, co zrobiłyby z każdym dokumentem, nie zmieniając niczego; Zastosuj zapisuje je następnie do zbioru danych (dataset) w jednej transakcji, z Twojego konta.',
  /** What the API says went wrong with one of the mutations */
  'vision.mutate.failure-item': 'Mutacja {{index}}: {{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vision.mutate.generate.button': 'Generuj mutacje',
  /** Explanation under the generate mutations field */
  'vision.mutate.generate.description':
    'Sanity Agent Actions zapisują mutacje na podstawie Twojego opisu, dokumentów w wyniku i ich typów, a suchy przebieg sprawdza każdą próbę; każda próba zużywa jeden kredyt AI. Zastępują one mutacje znajdujące się tutaj, gdzie cofnięcie przywraca je z powrotem; nic nie zostaje zapisane, dopóki ich nie zastosujesz.',
  /** Shown when no mutations could be generated, above the reason */
  'vision.mutate.generate.failed': 'Nie udało się wygenerować mutacji',
  /** Accessible label of the description field in the generate mutations bar */
  'vision.mutate.generate.label': 'Co mają robić mutacje?',
  /** Placeholder of the description field in the generate mutations bar */
  'vision.mutate.generate.placeholder': 'Zmień tytuł dokumentów w wyniku na foobar',
  /** Shown while the first attempt at the mutations is written */
  'vision.mutate.generate.progress': 'Zapisywanie mutacji…',
  /** Shown while an attempt the dry run turned down is retried */
  'vision.mutate.generate.progress-retry': 'Poprawianie mutacji (próba {{attempt}} z {{max}})…',
  /** Under the dry run: the fields the diffs leave out */
  'vision.mutate.hiding': 'Zmiany pomijają {{fields}}, podobnie jak Historia.',
  /** Shown when the mutations are not valid JSON */
  'vision.mutate.invalid-json': 'Mutacje nie są prawidłowym JSON-em: {{message}}',
  /** Shown when a mutation does not name exactly one thing to do */
  'vision.mutate.invalid-mutation':
    'Mutacja {{index}} wymaga dokładnie jednego z: create, createOrReplace, createIfNotExists, delete lub patch.',
  /** Label of the mutations editor */
  'vision.mutate.mutations': 'Mutacje',
  /** The dry run touched no documents */
  'vision.mutate.no-documents': 'Mutacje nie dotyczą żadnych dokumentów.',
  /** Shown when the JSON is not a list of mutations */
  'vision.mutate.not-a-list':
    'Napisz listę mutacji, pojedynczą mutację lub treść żądania z listą mutacji.',
  /** A document the mutations create */
  'vision.mutate.operation.create': 'Utwórz',
  /** A document the mutations delete */
  'vision.mutate.operation.delete': 'Usuń',
  /** A document the mutations touch without changing its content */
  'vision.mutate.operation.none': 'Brak zmian',
  /** A document the mutations change */
  'vision.mutate.operation.update': 'Aktualizuj',
  /** Button running the mutations as a dry run */
  'vision.mutate.preview': 'Przebieg testowy',
  /** Heading of the error shown when the dry run failed */
  'vision.mutate.preview-failed': 'Przebieg testowy nie powiódł się',
  /** Heading of the dry run's outcome */
  'vision.mutate.preview-heading': 'Przebieg testowy',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vision.mutate.stale':
    'Mutacje, dataset lub opcje zmieniły się po tym przebiegu testowym. Uruchom go ponownie, aby je zastosować.',
  /** How many documents the dry run changes and leaves as they are */
  'vision.mutate.summary': 'Zmienione: {{changed}} · Niezmienione: {{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vision.network.cache': 'Pamięć podręczna',
  /** The API CDN answered from its cache */
  'vision.network.cache.hit': 'Trafienie',
  /** Under the details of a CDN cache hit */
  'vision.network.cache.hit-explained':
    'CDN odpowiedział odpowiedzią zapisaną w pamięci podręcznej, z lokalizacji znajdującej się blisko Ciebie; zapytanie nie dotarło do API.',
  /** The API CDN answered with a response this session had not seen */
  'vision.network.cache.miss': 'Brak trafienia, o ile ta sesja może stwierdzić',
  /** The API answered, which caches nothing */
  'vision.network.cache.none': 'Brak, API odpowiada na każde żądanie świeżą treścią',
  /** Shown in the Network panel while there is no response */
  'vision.network.empty':
    'Wykonaj zapytanie, aby zobaczyć, który punkt końcowy na nie odpowiedział, czy z pamięci podręcznej oraz gdzie zostało wykonane.',
  /** In the Network panel: the endpoint that answered */
  'vision.network.endpoint': 'Odpowiedziano przez',
  /** The live API answered */
  'vision.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vision.network.endpoint.cdn': 'API CDN',
  /** In the Network panel: the HTTP method the query was sent with */
  'vision.network.method': 'Metoda',
  /** The query and its params went in the URL */
  'vision.network.method.get': 'GET, z zapytaniem i parametrami w adresie URL',
  /** The query and its params went in the request body */
  'vision.network.method.post': 'POST, z zapytaniem i parametrami jako treść JSON',
  /** Under the method of a POST request: why the query was not sent in the URL */
  'vision.network.method.post-explained':
    'Zapytanie wraz z parametrami zajmuje {{size}} znaków jako parametry wyszukiwania; od {{limit}} wzwyż, @sanity/client wysyła je jako treść JSON, ponieważ API ogranicza długość adresu URL. Opcje pozostają w adresie URL.',
  /** In the Network panel: the region the query ran in */
  'vision.network.region': 'Zapytanie wykonano w',
  /** The response did not say where the query ran */
  'vision.network.region.unknown': 'Nie podano',
  /** In the Network panel: the round trip and the time on the server */
  'vision.network.timing': 'Czas',
  /** The round trip and the server's time for the query, in milliseconds */
  'vision.network.timing.value': '{{e2e}}ms czasu przejścia, {{server}}ms na serwerze',
  /** In the Network panel: the trace of the request, for Sanity support */
  'vision.network.trace': 'Identyfikator śledzenia',
  /** Hint in the Network panel while queries go to the API */
  'vision.network.use-cdn-hint':
    'Włącz opcję „Użyj API CDN” w Opcjach, aby wysyłać zapytania przez CDN.',
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vision.network.you': 'Ty',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vision.options.dataset.follows-workspace': 'Podąża za przestrzenią roboczą',
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vision.options.dataset.pin': 'Przypnij zbiór danych',
  /** Hint under the dataset field while a dataset is pinned */
  'vision.options.dataset.pinned': 'Przypięty; przestrzeń robocza może używać innego zbioru danych',
  /** Button that makes the tab follow the workspace's dataset again */
  'vision.options.dataset.use-workspace': 'Użyj zbioru danych przestrzeni roboczej',
  /** Label for the "Include content source map" switch */
  'vision.options.include-source-map': 'Dołącz mapę źródeł treści',
  /** Description for the "Include content source map" switch */
  'vision.options.include-source-map.description':
    'Dodaje resultSourceMap do odpowiedzi, widoczną na karcie Mapa źródeł treści.',
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vision.options.perspective.global': 'Globalna ({{name}})',
  /** Label of the switch that sends queries to the API CDN */
  'vision.options.use-cdn': 'Użyj API CDN',
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vision.options.use-cdn.anonymous':
    'To studio loguje Cię za pomocą ciasteczka, którego API CDN nigdy nie otrzymuje: odpowiada tak, jak odpowiedziałoby anonimowemu odwiedzającemu, pokazując to, co widać w publicznym zbiorze danych.',
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vision.options.use-cdn.blocked':
    'API CDN nie obsługuje wersji roboczych ani wydań, więc zapytania z perspektywą {{perspective}} trafiają do API. W przypadku perspektyw opublikowanej lub surowej używany jest CDN.',
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vision.options.use-cdn.blocked.title': 'Zapytania trafiają do API, a nie do CDN',
  /** Description of the API CDN switch */
  'vision.options.use-cdn.description':
    'Wysyła zapytanie do API CDN, podobnie jak useCdn: true w @sanity/client, z perspektywami opublikowaną i surową: wersje robocze i wydania zawsze trafiają do API. Odpowiedzi są buforowane do minuty; panel Sieć pokazuje, kiedy odpowiedź pochodzi z pamięci podręcznej.',
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vision.options.use-cdn.use-published': 'Użyj perspektywy opublikowanej',
  /** Label of the variant field */
  'vision.options.variant-label': 'Wariant',
  /** Variant option sending the navbar's variant, named */
  'vision.options.variant.global': 'Globalny ({{name}})',
  /** Variant option sending the navbar's variant while none is selected there */
  'vision.options.variant.global-none': 'Globalny (brak wybranego)',
  /** Variant option sending no variant */
  'vision.options.variant.none': 'Brak',
  /** Accessible label for collapsing a bottom panel */
  'vision.panel.collapse': 'Zwiń panel',
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vision.panel.delta': 'Delta',
  /** Accessible label for expanding a bottom panel */
  'vision.panel.expand': 'Rozwiń panel',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vision.panel.explain': 'Wyjaśnienie',
  /** Label of the Functions tab in the response panel */
  'vision.panel.functions': 'Funkcje',
  /** Label of the "History" tab in the response panel */
  'vision.panel.history': 'Historia',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vision.panel.lint': 'Lint',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vision.panel.mutate': 'Mutacja',
  /** Label of the Network tab in the response panel */
  'vision.panel.network': 'Sieć',
  /** Label of the "Options" panel in the request column */
  'vision.panel.options': 'Opcje',
  /** Label of the "Response" tab in the response panel */
  'vision.panel.response': 'Odpowiedź',
  /** Label of the "Content Source Map" tab in the response panel */
  'vision.panel.source-map': 'Mapa źródeł treści',
  /** Button adding an item to a list param in the params form */
  'vision.params-form.add-item': 'Dodaj element',
  /** Placeholder of a params form field that takes any JSON value */
  'vision.params-form.any-placeholder':
    'Dowolna wartość JSON; inny tekst jest wysyłany jako ciąg znaków',
  /** Shown in the params form when the query uses no params */
  'vision.params-form.empty':
    'Zapytanie nie używa żadnych parametrów. Każdy $name w nim otrzyma tutaj pole.',
  /** Shown in the params form while the params JSON cannot be parsed */
  'vision.params-form.invalid-json':
    'Parametry nie są poprawnym JSON-em. Popraw je w widoku JSON, aby edytować je tutaj.',
  /** A boolean param's value is not true or false; it is sent anyway */
  'vision.params-form.invalid.boolean': 'To nie jest prawda ani fałsz; wysłano jako {{value}}',
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vision.params-form.invalid.document-type':
    'To nie jest typ dokumentu w tym obszarze roboczym; wysłano mimo to',
  /** A whole number param (a slice bound) holds a fraction */
  'vision.params-form.invalid.integer': 'To nie jest liczba całkowita, której wymagają wycinki',
  /** A list param's value is not a list; it is sent anyway */
  'vision.params-form.invalid.list': 'To nie jest lista; wysłano jako {{value}}',
  /** A number param's value is not a number; it is sent anyway */
  'vision.params-form.invalid.number': 'To nie jest liczba; wysłano jako tekst',
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vision.params-form.invalid.option': 'To nie jest żadna ze znanych wartości; wysłano mimo to',
  /** A text param's value is not text; it is sent anyway */
  'vision.params-form.invalid.string': 'To nie jest tekst; wysłano jako {{value}}',
  /** Accessible label of an item input of a list param in the params form */
  'vision.params-form.item-label': '${{name}}, element {{index}}',
  /** Placeholder of an item input of a list param in the params form */
  'vision.params-form.item-placeholder': 'Element',
  /** Under a params form field whose param has no value */
  'vision.params-form.missing':
    'Nieustawione: zapytanie kończy się niepowodzeniem, dopóki nie ma wartości',
  /** Shown in the params form when the workspace schema could not be read */
  'vision.params-form.no-schema':
    'Typy pochodzą wyłącznie z zapytania: nie można było odczytać schematu obszaru roboczego.',
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vision.params-form.not-set': 'Nieustawione',
  /** Button setting a date and time param to the current time */
  'vision.params-form.now': 'Teraz',
  /** Button removing a param the query does not use from the params */
  'vision.params-form.remove': 'Usuń',
  /** Accessible label of the button removing an item from a list param */
  'vision.params-form.remove-item': 'Usuń element',
  /** Shown in the params form when the query does not parse */
  'vision.params-form.syntax-error':
    'Zapytanie nie jest poprawne składniowo, więc jego parametry są wyświetlane bez typów.',
  /** Type hint of a params form field: any JSON value */
  'vision.params-form.type.any': 'dowolna wartość JSON',
  /** Type hint of a params form field: true or false */
  'vision.params-form.type.boolean': 'prawda lub fałsz',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vision.params-form.type.datetime': 'data i godzina (ISO 8601)',
  /** Type hint of a params form field: a document ID */
  'vision.params-form.type.document-id': 'identyfikator dokumentu',
  /** Type hint of a params form field: one of the workspace's document types */
  'vision.params-form.type.document-type': 'typ dokumentu',
  /** Type hint of a params form field: a whole number */
  'vision.params-form.type.integer': 'liczba całkowita',
  /** Type hint of a params form field: a list of values */
  'vision.params-form.type.list': 'lista, każdy element {{type}}',
  /** Type hint of a params form field: a number */
  'vision.params-form.type.number': 'liczba',
  /** Type hint of a params form field: text */
  'vision.params-form.type.string': 'tekst',
  /** Heading of the params the query does not use, listed in the params form */
  'vision.params-form.unused': 'Nieużywane w zapytaniu',
  /** Before the expressions that use a param, in the params form */
  'vision.params-form.used-in': 'Używane w',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vision.params.fit-height': 'Dopasowano do treści, {{height}} pikseli',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vision.params.resize':
    'Zmień rozmiar parametrów: przeciągnij lub użyj klawiszy strzałek; kliknij dwukrotnie lub naciśnij Enter, aby ponownie dopasować do treści',
  /** Tab showing the params as a form inferred from the query */
  'vision.params.view.form': 'Formularz',
  /** Tab showing the params as JSON */
  'vision.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vision.params.view.label': 'Edytuj parametry jako',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vision.paste.parsed': 'Wczytano zapytanie z wklejonego adresu URL',
  /** Toast shown after a curl command for a query was pasted and loaded into the tab */
  'vision.paste.parsed-curl': 'Wczytano zapytanie z wklejonego polecenia cURL',
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vision.paste.unavailable-variant':
    'Wklejony adres URL używał wariantu „{{variant}}”; wybierz go na pasku nawigacji, aby uruchomić zapytanie z jego użyciem.',
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vision.paste.unknown-dataset':
    'Zbiór danych „{{dataset}}” z wklejonego adresu URL nie jest tutaj dostępny, zachowano bieżący.',
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vision.paste.unsupported-perspective':
    'Perspektywa z wklejonego adresu URL nie jest tutaj obsługiwana, zachowano bieżącą.',
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vision.paste.variants-disabled':
    'Wklejony adres URL używał wariantu „{{variant}}”; w tym obszarze roboczym warianty są wyłączone, więc zapytanie zostanie uruchomione bez niego.',
  /** Accessible label for the query actions menu */
  'vision.query.actions': 'Akcje zapytania',
  /** Tooltip when automatic refetching is not available for the API version */
  'vision.query.auto-refetch.unsupported':
    'Automatyczne ponowne pobieranie wymaga wersji API v2021-03-25 lub nowszej.',
  /** Toast shown after the query was copied */
  'vision.query.copied': 'Zapytanie skopiowane do schowka',
  /** Menu item copying the query text */
  'vision.query.copy': 'Kopiuj zapytanie',
  /** Menu item opening the export query dialog */
  'vision.query.export': 'Eksportuj zapytanie…',
  /** Menu item reformatting the query */
  'vision.query.prettify': 'Sformatuj zapytanie',
  /** Toast shown when the query could not be reformatted */
  'vision.query.prettify.failed': 'Nie można sformatować zapytania',
  /** Menu item saving the query to the personal saved queries */
  'vision.query.save': 'Zapisz zapytanie',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vision.query.stop': 'Zatrzymaj',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vision.query.stop.description': 'Zatrzymaj pobieranie',
  /** Explanation in the settings section about the redesigned experience */
  'vision.redesign.settings.description':
    'Korzystasz z przeprojektowanego narzędzia Vision. Powrót do poprzedniej wersji zachowa Twoje karty i ustawienia w tej przeglądarce na następny raz.',
  /** Title of the settings section about the redesigned experience */
  'vision.redesign.settings.title': 'Przeprojektowane Vision (beta)',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vision.redesign.switch-to-classic': 'Przełącz na klasyczne Vision',
  /** Toast button that switches to the redesigned tool */
  'vision.redesign.toast.accept': 'Wypróbuj teraz',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vision.redesign.toast.description':
    'Karty zapytań, pobieranie na żywo, szczegóły odpowiedzi i eksporty. Możesz w każdej chwili wrócić do poprzedniej wersji.',
  /** Toast button that hides the invitation */
  'vision.redesign.toast.dismiss': 'Nie teraz',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vision.redesign.toast.title': 'Wypróbuj przeprojektowane Vision',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vision.redesign.try': 'Wypróbuj nową wersję',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vision.redesign.try.description':
    'Przełącz się na przeprojektowane Vision, w wersji beta. Możesz w każdej chwili wrócić, korzystając z jego paska bocznego.',
  /** Empty state of the response panel before anything was fetched */
  'vision.response.empty': 'Nic jeszcze nie pobrano',
  /** Label for the payload size in the response tab */
  'vision.response.payload-size': 'Rozmiar ładunku',
  /** Label for the sync tags in the response tab */
  'vision.response.sync-tags': 'Tagi synchronizacji',
  /** Shown when the response carried no sync tags */
  'vision.response.sync-tags.none': 'Brak tagów synchronizacji w odpowiedzi',
  /** Under the query URL when the request went out as a POST body rather than that URL */
  'vision.response.url.sent-as-post':
    'Wysłano jako treść POST: zapytanie i parametry są zbyt długie dla adresu URL, dlatego @sanity/client wysłał je jako JSON. Wklejenie tego adresu URL w Vision nadal wczytuje zapytanie.',
  /** Accessible label for the result actions menu */
  'vision.result.actions': 'Działania na wyniku',
  /** Toast shown after the result was copied */
  'vision.result.copied': 'Wynik skopiowany do schowka',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vision.result.copied-value': 'Skopiowano {{path}}',
  /** Menu item and button copying the result as JSON */
  'vision.result.copy': 'Kopiuj wynik',
  /** Button next to each property in the result tree, copying its value */
  'vision.result.copy-value': 'Kopiuj wartość',
  /** Empty state of the result view */
  'vision.result.empty': 'Uruchom zapytanie, aby zobaczyć tutaj jego wynik',
  /** Button exporting the result as CSV */
  'vision.result.export-csv': 'Eksportuj CSV',
  /** Button exporting the result as JSON */
  'vision.result.export-json': 'Eksportuj JSON',
  /** Menu item opening the TypeScript export dialog */
  'vision.result.export-typescript': 'Eksportuj TypeScript…',
  /** Menu item opening the Zod export dialog */
  'vision.result.export-zod': 'Eksportuj Zod…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vision.result.graph.collapse': 'Ukryj zawartość',
  /** Button fitting the whole graph in view */
  'vision.result.graph.fit': 'Dopasuj do widoku',
  /** Accessible label of the graph, saying how to move around in it */
  'vision.result.graph.label':
    'Graf wyniku: przeciągnij, aby przesunąć, przewiń, aby powiększyć; gdy aktywny, strzałki przesuwają, + i - powiększają, 0 dopasowuje',
  /** Ends the note on a graph that leaves part of this result out */
  'vision.result.graph.left-out-hint': 'Widoki drzewa i JSON pokazują wszystko.',
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vision.result.graph.node-limit': 'Narysowano tylko pierwsze {{nodes}} obiektów i tablic.',
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vision.result.graph.partial': 'Dla {{nodes}} wymieniono tylko pierwsze {{rows}} wpisów.',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vision.result.graph.partial.node': '{{name}} ({{entries}} wpisów)',
  /** Title of the graph node of the result itself */
  'vision.result.graph.root': 'wynik',
  /** Button zooming into the graph */
  'vision.result.graph.zoom-in': 'Powiększ',
  /** Button zooming out of the graph */
  'vision.result.graph.zoom-out': 'Pomniejsz',
  /** Tab showing the result as a graph of its objects and arrays */
  'vision.result.view.graph': 'Graf',
  /** Tab showing the result as indented JSON text, to select and copy from */
  'vision.result.view.json': 'JSON',
  /** Accessible label of the tabs that switch how the result shows */
  'vision.result.view.label': 'Widok wyniku',
  /** Tab showing the result as a tree to browse */
  'vision.result.view.tree': 'Drzewo',
  /** Empty state of the saved queries panel */
  'vision.saved.empty': 'Brak zapisanych zapytań. Zapisz bieżące zapytanie przyciskiem +.',
  /** Empty state of a query list when the search matches nothing */
  'vision.saved.empty-search': 'Żadne zapytania nie pasują do wyszukiwania',
  /** Menu item loading a saved query into the active tab */
  'vision.saved.load-in-current-tab': 'Wczytaj w bieżącej karcie',
  /** Menu item opening a saved query in a new tab */
  'vision.saved.open-in-new-tab': 'Otwórz w nowej karcie',
  /** Menu item renaming a saved query */
  'vision.saved.rename': 'Zmień nazwę',
  /** Accessible label for the button saving the current query */
  'vision.saved.save-current': 'Zapisz bieżące zapytanie',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vision.saved.unavailable-variant':
    'Ten zapisany zapytanie używało wariantu „{{variant}}”; wybierz go na pasku nawigacji, aby uruchomić zapytanie z jego użyciem.',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vision.saved.unknown-dataset':
    'Zestaw danych „{{dataset}}” tego zapisanego zapytania nie jest tutaj dostępny, zachowano bieżący.',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vision.saved.variants-disabled':
    'Ten zapisany zapytanie używało wariantu „{{variant}}”; w tym obszarze roboczym warianty są wyłączone, więc zapytanie zostanie uruchomione bez niego.',
  /** Button in the settings dialog that clears the stored state */
  'vision.settings.clear-storage': 'Wyczyść pamięć',
  /** Confirmation button for clearing the storage */
  'vision.settings.clear-storage.confirm': 'Tak, wyczyść pamięć',
  /** Explanation of what clearing the storage does */
  'vision.settings.clear-storage.description':
    'Usuwa Twoje osobiste zapisane zapytania oraz bibliotekę funkcji, resetuje otwarte karty i te ustawienia domyślne w tej przeglądarce oraz powraca do klasycznego narzędzia Vision. Współdzielone zapytania zostają zachowane.',
  /** Toast shown when the saved queries could not be cleared */
  'vision.settings.clear-storage.error': 'Nie udało się wyczyścić zapisanych zapytań',
  /** Toast shown after the storage was cleared */
  'vision.settings.clear-storage.success': 'Pamięć wyczyszczona',
  /** Explanation at the top of the settings dialog */
  'vision.settings.description':
    'Ustawienia domyślne dla nowych kart. Otwarte karty zachowują swoje własne opcje.',
  /** Explains the setting listing the fields left out of History diffs */
  'vision.settings.history-diff.description':
    'Jedna ścieżka pola na linię. Ścieżka pasuje na dowolnej głębokości wyniku, więc _rev ukrywa wersję każdego dokumentu w nim zawartego. Każdy diff nadal może je pokazać.',
  /** Button restoring the default fields left out of History diffs */
  'vision.settings.history-diff.reset': 'Przywróć domyślne',
  /** Label of the setting listing the fields left out of History diffs */
  'vision.settings.history-diff.title': 'Pola ukryte w różnicach historii',
  /** Title of the settings dialog */
  'vision.settings.title': 'Ustawienia',
  /** Empty state of the shared queries panel */
  'vision.shared.empty':
    'Brak współdzielonych zapytań. Udostępnij zapisane zapytanie, aby udostępnić je wszystkim korzystającym z tego zestawu danych.',
  /** Shortcut description: close dialogs and menus */
  'vision.shortcuts.close': 'Zamknij okna dialogowe i menu',
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vision.shortcuts.complete': 'Uzupełnij nazwę funkcji',
  /** Shortcut description: copy the query */
  'vision.shortcuts.copy-query': 'Skopiuj zapytanie',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vision.shortcuts.extract-function': 'Wyodrębnij projekcję przy kursorze do funkcji',
  /** Shortcut description: run the query */
  'vision.shortcuts.fetch': 'Pobierz zapytanie',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vision.shortcuts.next-finding': 'Przejdź do następnego wyniku lintowania',
  /** Shortcut description: reformat the query */
  'vision.shortcuts.prettify': 'Sformatuj zapytanie',
  /** Title of the keyboard shortcuts dialog */
  'vision.shortcuts.title': 'Skróty klawiszowe',
  /** Sidebar toggle: show icons only */
  'vision.sidebar.collapse': 'Zwiń pasek boczny',
  /** Sidebar toggle: show labels next to the icons */
  'vision.sidebar.expand': 'Rozwiń pasek boczny',
  /** Accessible label for the sidebar navigation */
  'vision.sidebar.label': 'Pasek boczny Vision',
  /** Sidebar item and drawer title for personal saved queries */
  'vision.sidebar.saved-queries': 'Zapisane zapytania',
  /** Sidebar item opening the settings dialog */
  'vision.sidebar.settings': 'Ustawienia',
  /** Sidebar item and drawer title for shared queries */
  'vision.sidebar.shared-queries': 'Udostępnione zapytania',
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vision.sidebar.shortcuts': 'Skróty klawiszowe',
  /** Empty state of the content source map panel */
  'vision.source-map.empty':
    'Brak mapy źródeł treści w odpowiedzi. Włącz opcję „Dołącz mapę źródeł treści” w Opcjach i pobierz ponownie.',
  /** Accessible label of the divider between the result and the response details panel */
  'vision.split.bottom-panel':
    'Zmień rozmiar panelu szczegółów odpowiedzi: przeciągnij lub użyj klawiszy strzałek; Home i End przechodzą do granic, Enter resetuje',
  /** Accessible label of the divider between the request and response panes */
  'vision.split.request-response':
    'Zmień rozmiar paneli żądania i odpowiedzi: przeciągnij lub użyj klawiszy strzałek; Home i End przechodzą do granic, Enter resetuje',
  /** Accessible label for the button closing a query tab */
  'vision.tabs.close-tab': 'Zamknij kartę',
  /** Accessible label for the list of query tabs */
  'vision.tabs.label': 'Karty zapytań',
  /** Accessible label for the button opening a new query tab */
  'vision.tabs.new-tab': 'Nowa karta',
  /** Placeholder of the input renaming a tab */
  'vision.tabs.title-placeholder': 'Tytuł karty',
  /** Title of a tab whose query is still empty */
  'vision.tabs.untitled': 'Zapytanie bez tytułu',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vision.webmcp.check-query': 'Sprawdź zapytanie GROQ w Vision',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vision.webmcp.describe-schema': 'Opisz schemat w Vision',
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vision.webmcp.explain-query': 'Wyjaśnij zapytanie GROQ w Vision',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vision.webmcp.get-state': 'Odczytaj otwartą kartę Vision',
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vision.webmcp.open-query': 'Otwórz zapytanie GROQ w Vision',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vision.webmcp.preview-mutations': 'Podgląd mutacji w Vision',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vision.webmcp.run-query': 'Uruchom zapytanie GROQ w Vision',
})
