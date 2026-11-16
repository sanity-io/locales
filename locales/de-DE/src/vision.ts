import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'In die Zwischenablage kopieren',
  /** Label for deleting a query */
  'action.delete': 'Löschen',
  /** Label for editing a query's title */
  'action.edit-title': 'Titel bearbeiten',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Stopp',
  /** Label for setting up a listener */
  'action.listen-execute': 'Zuhören',
  /** Label for query loading table */
  'action.load-queries': 'Abfragen laden',
  /** Label for loading a query */
  'action.load-query': 'Abfrage laden',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Abbrechen',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Abfragen',
  /** Label for saving a query */
  'action.save-personal-copy': 'Persönliche Kopie speichern',
  /** Label for saving a personal query */
  'action.save-personal-query': 'Als persönlich speichern',
  /** Label for saving a query */
  'action.save-query': 'Abfrage speichern',
  /** Label for saving a shared query */
  'action.save-shared-query': 'Als geteilt speichern',
  /** Label for unsharing a query */
  'action.unshare': 'Freigabe aufheben',
  /** Label for updating a query */
  'action.update': 'Aktualisieren',

  /** Label for actions user can take */
  'label.actions': 'Aktionen',
  /** Label for all saved queries */
  'label.all': 'Alle',
  /** Label for saved queries that have been edited */
  'label.edited': 'Bearbeitet',
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Neu',
  /** Label for query type "personal" */
  'label.personal': 'Persönlich',
  /** Label for savedAt date */
  'label.saved-at': 'Gespeichert am',
  /** Saved queries */
  'label.saved-queries': 'Gespeicherte Abfragen',
  /** Search queries */
  'label.search-queries': 'Abfragen suchen',
  /** Share query */
  'label.share': 'Teilen',
  /** Label for query type "shared" */
  'label.shared': 'Geteilt',
  /** Label for saved query type "team" */
  'label.team': 'Team',
  /** Label for untitled query fallback */
  'label.untitled-query': 'Ohne Titel',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'Parameter sind kein gültiges JSON',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Parameter',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Spalte',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Zeile',
  /** Extra explanation when a 400 is returned for a release perspective on an old API version */
  'query.error.unsupported-release-perspective':
    'Diese API-Version unterstützt keine komplexen Perspektiven. Verwenden Sie {{apiVersion}} oder höher.',
  /** Extra explanation when a 400 is returned for a variant on an incompatible API version */
  'query.error.unsupported-variant':
    'Diese API-Version unterstützt keine Inhaltsvarianten. Verwenden Sie die experimentelle API-Version ({{apiVersion}}).',
  /** Label for "Query" editor/input */
  'query.label': 'Abfrage',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'Abfrage-URL',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'Ende-zu-Ende-Zeit',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'Ausführungszeit',
  /** Label for "Result" explorer/view */
  'result.label': 'Ergebnis',
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable': 'Das Ergebnis kann nicht als CSV codiert werden',
  /** Label for "Save result as" result action */
  'result.save-result-as-format': 'Ergebnis speichern als <SaveResultButtons/>',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'nicht zutreffend',

  /** Query already saved error label */
  'save-query.already-saved': 'Abfrage bereits gespeichert',
  /** Save error label */
  'save-query.error': 'Fehler beim Speichern der Abfrage',
  /** Save personal copy success label */
  'save-query.personal-copy-success': 'Persönliche Kopie gespeichert',
  /** Warning displayed before sharing a query */
  'save-query.share-warning':
    'Geteilte Abfragen werden als Dokumente in Ihrem dataset gespeichert und werden auf Ihr Dokumentenkontingent angerechnet.',
  /** Save shared query success label */
  'save-query.shared-success': 'Geteilte Abfrage gespeichert',
  /** Save success label */
  'save-query.success': 'Abfrage gespeichert',
  /** Save unshared query success label */
  'save-query.unshared-success': 'Abfrage in persönlich verschoben',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'API-Version',
  /** Tooltip shown when the API version selector is locked because a variant is selected */
  'settings.api-version-locked-for-variant':
    'Wenn eine Variante ausgewählt ist, muss die API-Version vX sein.',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'Benutzerdefinierte API-Version',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Dataset',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'Ungültige API-Version',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'Andere',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspektive',
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    'Die "<code>previewDrafts</code>" Perspektive wurde in "<code>drafts</code>" umbenannt und ist nun veraltet. Diese Änderung ist wirksam für alle Versionen mit Perspektivenunterstützung (>= v2021-03-25).',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Dokumentation lesen',
  /** Option for selecting default perspective */
  'settings.perspectives.default': 'Keine Perspektive (API-Standard)',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Perspektiven ermöglichen es Ihrer Abfrage, gegen verschiedene "Ansichten" des Inhalts in Ihrem Dataset zu laufen',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    'Die Standardperspektive wird in einer kommenden API-Version von "<code>raw</code>" zu "<code>published</code>" wechseln. Bitte konsultieren Sie die Dokumentation für weitere Details.',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': 'Angepinntes Release',
  /** Label for the scheduled drafts perspective */
  'settings.perspectives.scheduled-drafts': 'Geplante Entwürfe',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspektiven',

  /** Tooltip line of every control that calls Sanity Agent Actions, which bills AI credits */
  'vision.agent-actions.credits': 'Verbraucht ein KI-Guthaben pro Anfrage',
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vision.ai-credits.balance': '{{balance}} von {{quota}} KI-Guthaben diesen Monat übrig.',
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vision.ai-credits.deficit':
    '{{used}} KI-Guthaben diesen Monat verbraucht, {{deficit}} mehr als die enthaltenen {{quota}}.',
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vision.ai-credits.limit.description':
    'Ihre Organisation hat diesen Monat {{used}} von {{quota}} KI-Guthaben verbraucht, daher sind Sanity Agent Actions pausiert, bis zum nächsten Monat oder bis das Ausgabenlimit erhöht wird.',
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vision.ai-credits.limit.description-unknown':
    'Ihre Organisation hat ihr Ausgabenlimit für KI-Guthaben erreicht, daher sind Sanity Agent Actions pausiert, bis zum nächsten Monat oder bis das Limit erhöht wird.',
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vision.ai-credits.limit.learn-more': 'Wie KI-Guthaben funktionieren',
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vision.ai-credits.limit.manage': 'KI-Guthaben verwalten',
  /** Title of the card shown where the organization is out of AI credits */
  'vision.ai-credits.limit.title': 'Keine KI-Guthaben mehr',
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vision.ai-credits.usage': 'KI-Nutzung',
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vision.ai-credits.used': '{{used}} KI-Guthaben diesen Monat verbraucht.',
  /** Button in the request column's action bar naming the API version requests go out with */
  'vision.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vision.api-version.button-cdn': 'API CDN {{version}}',
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vision.api-version.button-invalid': 'Unvollständige API-Version',
  /** Tooltip of the API version button */
  'vision.api-version.tooltip':
    'Abfragen laufen gegen API-Version {{version}}. Zum Ändern in den Optionen auswählen.',
  /** Tooltip of the API version button while queries go through the API CDN */
  'vision.api-version.tooltip-cdn':
    'Abfragen laufen gegen das API CDN mit API-Version {{version}}. Zum Ändern in den Optionen auswählen.',
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vision.api-version.tooltip-cdn-blocked':
    'Abfragen laufen gegen die API mit API-Version {{version}}, nicht gegen das API CDN: Dieses bedient die Perspektive {{perspective}} nicht. Zum Ändern in den Optionen auswählen.',
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vision.api-version.tooltip-invalid':
    'Die API-Version in den Optionen ist unvollständig, daher kann nichts abgerufen werden, bis sie vollständig ist.',
  /** Tooltip of the API version button while a selected variant forces the variants API version */
  'vision.api-version.tooltip-locked':
    'Abfragen laufen gegen API-Version {{version}}, die von der ausgewählten Variante benötigt wird.',
  /** Label of the document after the change in the Delta panel */
  'vision.delta.after': 'Nachher',
  /** Label of the document before the change in the Delta panel */
  'vision.delta.before': 'Vorher',
  /** What the Delta panel does */
  'vision.delta.description':
    'Führt die Abfrage im Delta-Modus aus, wie GROQ-basierte Webhooks, Listener und Sanity Functions es tun: before() und after() sind ein Dokument vor und nach einer Änderung, @ ist das Dokument danach, und delta::changedAny() vergleicht sie. Dies läuft im Browser mit groq-js. Eine leere Seite bedeutet kein Dokument: Die Änderung erstellt oder löscht es.',
  /** Label of the document ID field in the Delta panel */
  'vision.delta.document-id': 'Dokument-ID',
  /** Shown when there is a query but no documents to compare */
  'vision.delta.empty':
    'Laden Sie den Verlauf eines Dokuments oder schreiben Sie die Dokumente in Vorher und Nachher.',
  /** Shown when the query fails in delta mode */
  'vision.delta.failed': 'Die Abfrage konnte nicht im Delta-Modus ausgeführt werden: {{message}}',
  /** Shown when the After document is not valid JSON */
  'vision.delta.invalid-after': 'Nachher ist kein gültiges JSON: {{message}}',
  /** Shown when the Before document is not valid JSON */
  'vision.delta.invalid-before': '„Vorher“ ist kein gültiges JSON: {{message}}',
  /** Button loading the document's revisions from the History API */
  'vision.delta.load': 'Verlauf laden',
  /** Shown when the history could not be loaded */
  'vision.delta.load-failed': 'Der Verlauf konnte nicht geladen werden: {{message}}',
  /** A delta filter that is true for the change */
  'vision.delta.matches':
    'Treffer: Ein Webhook oder eine Funktion mit diesem Filter wird für diese Änderung ausgeführt.',
  /** A delta filter that is false for the change */
  'vision.delta.no-match':
    'Kein Treffer: Ein Webhook oder eine Funktion mit diesem Filter wird für diese Änderung nicht ausgeführt.',
  /** Shown while the query or its params cannot be sent */
  'vision.delta.no-request':
    'Korrigieren Sie die Abfrage und ihre Parameter, um sie im Delta-Modus auszuführen.',
  /** Heading of the delta result */
  'vision.delta.result': 'Ergebnis',
  /** The After choice for a change that deletes the document */
  'vision.delta.revision.none-after': 'Nichts: Die Änderung löscht das Dokument',
  /** The Before choice for a change that creates the document */
  'vision.delta.revision.none-before': 'Nichts: Die Änderung erstellt das Dokument',
  /** A revision in the Before and After lists */
  'vision.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vision.drawer.close': 'Panel schließen',
  /** Explanation at the top of the Explain panel */
  'vision.explain.description':
    'Der Abfrageplan beschreibt, wie das Content Lake die Abfrage ausführt: was es liest, filtert und sortiert während des Lesens, und was für spätere Schritte übrig bleibt. „Erkläre mir das“ lässt Sanity Agent Actions die Abfrage und ihren Plan in einfachen Worten beschreiben, wofür ein KI-Guthaben verwendet wird.',
  /** Shown in the Explain panel while there is no valid query to explain */
  'vision.explain.empty': 'Schreiben Sie eine Abfrage, um sie zu erklären.',
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vision.explain.explain': 'Erkläre mir das',
  /** Shown when the explanation could not be written */
  'vision.explain.failed': 'Die Abfrage konnte nicht erklärt werden: {{message}}',
  /** A count the index computes without reading the documents */
  'vision.explain.insight.aggregate': 'Im Index gezählt, ohne die Dokumente zu lesen.',
  /** A subquery the plan runs once for all documents */
  'vision.explain.insight.batched-subquery':
    'Die Unterabfrage wird einmal für alle Dokumente ausgeführt, in einem einzigen gebündelten Abruf, nicht einmal pro Dokument.',
  /** Part of the filter runs in memory; the expression follows */
  'vision.explain.insight.filter-in-memory':
    'Ein Teil des Filters läuft im Speicher, nach dem Lesen: Jedes Dokument, das der Index durchlässt, wird zuerst gelesen, was bei großen Datensätzen langsam wird. Verknüpfungen (->) und Funktionen in einem Filter können den Index nicht nutzen.',
  /** The index sorts and limits while reading */
  'vision.explain.insight.index-sort-limit':
    'Der Index sortiert und begrenzt die Dokumente während des Lesens.',
  /** The plan slices in memory */
  'vision.explain.insight.slice-in-memory':
    'Der Ausschnitt wird im Speicher nach dem Lesen erstellt, nicht als Begrenzung während des Lesens.',
  /** The plan sorts in memory */
  'vision.explain.insight.sort-in-memory':
    'Die Sortierung erfolgt im Speicher, nachdem jeder Treffer gelesen wurde. Sortieren Sie nach Attributen, die der Index sortieren kann.',
  /** Link under the plan insights to the guide on fast queries */
  'vision.explain.insights.guide': 'Hochperformantes GROQ',
  /** Heading of the plan insights in the Explain panel */
  'vision.explain.insights.title': 'Was auffällt',
  /** Button in the Explain panel fetching the query plan */
  'vision.explain.plan': 'Abfrageplan anzeigen',
  /** Shown when the query plan could not be fetched */
  'vision.explain.plan-failed': 'Der Abfrageplan konnte nicht abgerufen werden: {{message}}',
  /** Heading of the query plan in the Explain panel */
  'vision.explain.plan-title': 'Abfrageplan',
  /** Toast shown after a code snippet was copied */
  'vision.export-query.copied': 'Snippet in die Zwischenablage kopiert',
  /** Label for the button that copies a code snippet */
  'vision.export-query.copy': 'Snippet kopieren',
  /** Explanation at the top of the export query dialog */
  'vision.export-query.description':
    'Führen Sie diese Abfrage außerhalb des Studios mit einem dieser Snippets aus.',
  /** Note under the curl snippet when the query is sent as a request body rather than in the URL */
  'vision.export-query.post-body-note':
    'Die Abfrage und die Parameter ergeben {{size}} Zeichen als Suchparameter; ab {{limit}} sendet @sanity/client diese als JSON-Body statt in der URL, daher macht das Snippet dasselbe.',
  /** Title of the dialog that exports the query as code snippets */
  'vision.export-query.title': 'Abfrage exportieren',
  /** Note about authentication in the export query dialog */
  'vision.export-query.token-note':
    'Private Datasets benötigen ein API-Token. Bei öffentlichen Datasets kann der Authorization-Header weggelassen werden.',
  /** Toast shown after the generated code was copied */
  'vision.export-types.copied': 'Code in die Zwischenablage kopiert',
  /** Label for the button that copies the generated code */
  'vision.export-types.copy': 'Code kopieren',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vision.export-types.empty':
    'Rufen Sie zuerst die Abfrage ab, damit ein Ergebnis zum Ableiten der Typen vorliegt.',
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vision.export-types.schema-error': 'Schemaauswertung fehlgeschlagen: {{message}}',
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vision.export-types.source.result':
    'Aus dem abgerufenen Ergebnis abgeleitet, da die Abfrage nicht anhand des Workspace-Schemas ausgewertet werden konnte.',
  /** Note shown when the types were derived from the workspace schema */
  'vision.export-types.source.schema':
    'Aus dem Workspace-Schema abgeleitet, auf dieselbe Weise wie Sanity Typegen es tut.',
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vision.export-types.stale-result':
    'Das angezeigte Ergebnis wurde für eine andere Abfrage oder andere Parameter abgerufen. Rufen Sie zuerst die aktuelle Abfrage ab, damit ein Ergebnis zum Ableiten der Typen vorliegt.',
  /** Title of the dialog exporting TypeScript types for the result */
  'vision.export-types.title-typescript': 'TypeScript exportieren',
  /** Title of the dialog exporting a Zod schema for the result */
  'vision.export-types.title-zod': 'Zod exportieren',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vision.functions.add': 'Zur Abfrage hinzufügen',
  /** Shown on a library function the query declares the same way */
  'vision.functions.declared': 'In dieser Abfrage',
  /** Lint action on a call of a library function the query does not declare */
  'vision.functions.editor.add-from-library': 'Deklarieren',
  /** Note in a function's hover documentation: the API version it needs */
  'vision.functions.editor.api-version': 'Benötigt API-Version {{version}} oder höher',
  /** Detail of a completion for a custom function the query declares */
  'vision.functions.editor.completion-declared': 'in dieser Abfrage',
  /** Detail of a completion for a library function, which declares it too */
  'vision.functions.editor.completion-library': 'aus Ihrer Bibliothek',
  /** Note in the hover documentation of a custom function the query declares */
  'vision.functions.editor.declared-on':
    'Benutzerdefinierte Funktion, deklariert in Zeile {{line}}',
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vision.functions.editor.delta-only':
    'Funktioniert nur im Delta-Modus, in dem Webhooks und Sanity Functions ihre Filter ausführen',
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vision.functions.editor.extract': 'In Funktion extrahieren',
  /** Note in the hover documentation of a library function the query does not declare */
  'vision.functions.editor.in-library':
    'In Ihrer Funktionsbibliothek, in dieser Abfrage nicht deklariert',
  /** Link at the end of a built-in function's hover documentation */
  'vision.functions.editor.reference': 'GROQ-Funktionsreferenz',
  /** Explanation under the library heading in the Functions panel */
  'vision.functions.library.description':
    'Wird in diesem Browser für jeden Datensatz des Projekts gespeichert. Vervollständigungen bieten diese Funktionen an, und Lint schlägt vor, eine Funktion zu deklarieren, die die Abfrage aufruft.',
  /** Shown in the Functions panel while the library is empty */
  'vision.functions.library.empty':
    'Speichern Sie eine Funktion, die die Abfrage deklariert, um sie in anderen Abfragen zu verwenden.',
  /** Heading of the functions library in the Functions panel */
  'vision.functions.library.title': 'Bibliothek',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vision.functions.query.empty':
    'Deklarieren Sie benutzerdefinierte Funktionen am Anfang der Abfrage, oder setzen Sie den Cursor in eine Projektion, wie author->{name}, und klicken Sie auf die Extrahieren-Schaltfläche über dem Editor ({{shortcut}}).',
  /** Heading of the functions the query declares in the Functions panel */
  'vision.functions.query.title': 'In dieser Abfrage',
  /** Removes a function from the library */
  'vision.functions.remove': 'Aus der Bibliothek entfernen',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vision.functions.replace': 'In der Abfrage ersetzen',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vision.functions.reveal': '{{name}} im Editor anzeigen',
  /** Button of a function the query declares that is not in the library yet */
  'vision.functions.save': 'In der Bibliothek speichern',
  /** Shown on a function the query declares the way the library has it */
  'vision.functions.saved': 'Gespeichert',
  /** Button of a function the query declares differently from the library's version */
  'vision.functions.update': 'Bibliothek aktualisieren',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vision.generate.button': 'Abfrage generieren',
  /** Closes the generate query bar */
  'vision.generate.close': 'Schließen',
  /** Explanation under the generate query field */
  'vision.generate.description':
    'Sanity Agent Actions schreiben das GROQ anhand Ihrer Beschreibung und der Dokumenttypen, und der Content Lake prüft jeden Versuch; jeder Versuch verbraucht einen KI-Credit. Dies ersetzt die Abfrage dieses Tabs und führt sie aus; Rückgängig im Editor stellt die vorherige Abfrage wieder her.',
  /** Shown when no query could be generated, above the reason */
  'vision.generate.failed': 'Die Abfrage konnte nicht generiert werden',
  /** Accessible label of the description field in the generate query bar */
  'vision.generate.label': 'Was soll die Abfrage abrufen?',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vision.generate.open-anyway': 'Letzten Versuch öffnen',
  /** Placeholder of the description field in the generate query bar */
  'vision.generate.placeholder': 'Die 10 neuesten Autoren, sortiert nach Nachname und dann Vorname',
  /** Shown while the first attempt at a query is written */
  'vision.generate.progress': 'Abfrage wird geschrieben…',
  /** Shown while a rejected attempt is retried */
  'vision.generate.progress-retry': 'Abfrage wird korrigiert (Versuch {{attempt}} von {{max}})…',
  /** Button generating the query */
  'vision.generate.submit': 'Generieren',
  /** Badge on a history entry the API CDN answered */
  'vision.history.cdn': 'API CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vision.history.cdn-cache-hit': 'CDN-Cache-Treffer',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vision.history.changed': 'Geändert',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vision.history.changes': 'Änderungen',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vision.history.changes-failed': 'Die Änderungen konnten nicht angezeigt werden.',
  /** Button retrying to show the changes of a history entry */
  'vision.history.changes-retry': 'Wiederholen',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vision.history.compared-with': 'Verglichen mit dem Abruf um {{time}}',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vision.history.diff.params': 'Parameter',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vision.history.diff.query': 'Abfrage',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vision.history.diff.query-formatting-only': 'Nur die Formatierung hat sich geändert',
  /** Label of the diff of the query result in a history entry's changes */
  'vision.history.diff.result': 'Ergebnis',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vision.history.diff.url': 'Anfrage-URL',
  /** Empty state of the history panel */
  'vision.history.empty': 'Noch nichts abgerufen',
  /** Status label for a failed fetch in the history */
  'vision.history.failed': 'Fehlgeschlagen',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vision.history.hide-hidden': 'Ausblenden',
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vision.history.hiding': '{{fields}} ausgeblendet',
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vision.history.only-hidden-changed': 'Nur ausgeblendete Felder haben sich geändert',
  /** History reason: a tab opened with a generated query fetched it */
  'vision.history.reason.generated': 'Generierte Abfrage',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vision.history.reason.link': 'Link geöffnet',
  /** History reason: a live event matched the query's sync tags */
  'vision.history.reason.live': 'Live-Aktualisierung',
  /** History reason: the live connection asked every client to refetch */
  'vision.history.reason.live-restart': 'Live-Verbindung neu gestartet',
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vision.history.reason.live-start': 'Live-Abruf gestartet',
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vision.history.reason.load': 'Abfrage geladen',
  /** History reason: the fetch button was pressed */
  'vision.history.reason.manual': 'Abruf-Schaltfläche',
  /** History reason: mutations were applied from the Mutate panel */
  'vision.history.reason.mutation': 'Mutationen angewendet',
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vision.history.reason.options': 'Optionen geändert',
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vision.history.reason.paste': 'URL eingefügt',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vision.history.reason.resume': 'Automatisches erneutes Abrufen fortgesetzt',
  /** History reason: the keyboard shortcut was used */
  'vision.history.reason.shortcut': 'Tastenkombination',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vision.history.same-result': 'Gleiches Ergebnis',
  /** Button showing the hidden fields in a history entry's changes */
  'vision.history.show-hidden': 'Anzeigen',
  /** Next to a history entry's changes while the hidden fields are shown */
  'vision.history.showing-hidden': '{{fields}} werden angezeigt, standardmäßig ausgeblendet',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vision.history.too-large': 'Zu groß zum Vergleichen',
  /** A history entry whose result is the same as the previous result */
  'vision.history.unchanged': 'Keine Änderungen',
  /** Shown in the Lint panel while the query has no lint findings */
  'vision.lint.empty':
    'Keine Lint-Befunde. Probleme, die der GROQ-Linter in der Abfrage erkennt, werden hier während der Eingabe aufgelistet; wählen Sie einen aus, um ihn im Editor auszuwählen.',
  /** Where a lint finding sits in the query, shown under its message */
  'vision.lint.position': 'Zeile {{line}}, Spalte {{column}}',
  /** Severity badge of a lint finding */
  'vision.lint.severity.error': 'Fehler',
  /** Severity badge of a lint finding */
  'vision.lint.severity.hint': 'Hinweis',
  /** Severity badge of a lint finding */
  'vision.lint.severity.info': 'Info',
  /** Severity badge of a lint finding */
  'vision.lint.severity.warning': 'Warnung',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vision.lint.use-suggestion': '{{suggestion}} verwenden',
  /** Badge shown while a tab refetches automatically */
  'vision.live.active': 'Live',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vision.live.button': 'Live-Abruf',
  /** Tooltip of the Live button while automatic refetching is off */
  'vision.live.button.start':
    'Abrufen, und dann erneut abrufen, wenn sich die Dokumente im Ergebnis ändern',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vision.live.button.stop':
    'Das Abrufen bei Änderungen der Dokumente im Ergebnis stoppen. Abrufen funktioniert weiterhin bei Bedarf für Ergebnisse, die durch keine Dokumentänderung betroffen sind, wie now()',
  /** Error shown when the live connection breaks */
  'vision.live.error': 'Live-Updates getrennt: {{message}}',
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vision.live.stop': 'Live stoppen',
  /** Button in the Mutate panel adding a mutation to the list */
  'vision.mutate.add': 'Mutation hinzufügen',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vision.mutate.add.create': 'Ein Dokument erstellen',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vision.mutate.add.delete': 'Ein Dokument löschen',
  /** Adds a mutation deleting the documents of the shown result */
  'vision.mutate.add.delete-result': 'Die Dokumente im Ergebnis löschen',
  /** Adds a mutation patching a document, its ID to fill in */
  'vision.mutate.add.patch': 'Ein Dokument patchen',
  /** Adds a mutation patching the documents of the shown result */
  'vision.mutate.add.patch-result': 'Die Dokumente im Ergebnis patchen',
  /** Button applying the mutations a dry run showed */
  'vision.mutate.apply': 'Auf {{dataset}} anwenden',
  /** Heading of the error shown when applying the mutations failed */
  'vision.mutate.apply-failed': 'Die Mutationen wurden nicht angewendet',
  /** Next to Apply while the mutations as they are have had no dry run */
  'vision.mutate.apply-needs-preview':
    'Anwenden sendet das, was ein Testlauf gezeigt hat: Führen Sie zuerst einen aus.',
  /** Option giving array items without a _key one */
  'vision.mutate.auto-keys': 'Einen _key zu Array-Elementen hinzufügen, die keinen haben',
  /** Under the option giving array items a _key */
  'vision.mutate.auto-keys.description':
    'Das Studio benötigt einen auf jedem Array-Element, um es zu bearbeiten.',
  /** Button showing a document's changes in the dry run */
  'vision.mutate.changes': 'Änderungen',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vision.mutate.changes-failed': 'Die Änderungen konnten nicht angezeigt werden.',
  /** Button retrying to show a document's changes */
  'vision.mutate.changes-retry': 'Erneut versuchen',
  /** What the Mutate panel does */
  'vision.mutate.description':
    'Schreiben Sie Mutationen so, wie die Mutations-API sie entgegennimmt, in einer Liste: create, createOrReplace, createIfNotExists, delete und patch, nach ID oder nach einer GROQ-Abfrage. Ein Testlauf zeigt, was sie mit jedem Dokument tun würden, ohne etwas zu ändern; Anwenden schreibt sie dann in einer Transaktion mit Ihrem Konto in das Dataset.',
  /** What the API says went wrong with one of the mutations */
  'vision.mutate.failure-item': 'Mutation {{index}}: {{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vision.mutate.generate.button': 'Mutationen generieren',
  /** Explanation under the generate mutations field */
  'vision.mutate.generate.description':
    'Sanity Agent Actions schreiben die Mutationen anhand Ihrer Beschreibung, der Dokumente im Ergebnis und ihrer Typen, und ein Testlauf prüft jeden Versuch; jeder Versuch verbraucht ein KI-Guthaben. Sie ersetzen die Mutationen hier, wobei Rückgängig machen diese wiederherstellt; es wird nichts geschrieben, bis Sie sie anwenden.',
  /** Shown when no mutations could be generated, above the reason */
  'vision.mutate.generate.failed': 'Die Mutationen konnten nicht generiert werden',
  /** Accessible label of the description field in the generate mutations bar */
  'vision.mutate.generate.label': 'Was sollen die Mutationen tun?',
  /** Placeholder of the description field in the generate mutations bar */
  'vision.mutate.generate.placeholder': 'Ändern Sie den Titel der Dokumente im Ergebnis in foobar',
  /** Shown while the first attempt at the mutations is written */
  'vision.mutate.generate.progress': 'Mutationen werden geschrieben…',
  /** Shown while an attempt the dry run turned down is retried */
  'vision.mutate.generate.progress-retry':
    'Mutationen werden korrigiert (Versuch {{attempt}} von {{max}})…',
  /** Under the dry run: the fields the diffs leave out */
  'vision.mutate.hiding': 'Die Änderungen lassen {{fields}} aus, wie es auch der Verlauf tut.',
  /** Shown when the mutations are not valid JSON */
  'vision.mutate.invalid-json': 'Die Mutationen sind kein gültiges JSON: {{message}}',
  /** Shown when a mutation does not name exactly one thing to do */
  'vision.mutate.invalid-mutation':
    'Mutation {{index}} benötigt genau eines von create, createOrReplace, createIfNotExists, delete oder patch.',
  /** Label of the mutations editor */
  'vision.mutate.mutations': 'Mutationen',
  /** The dry run touched no documents */
  'vision.mutate.no-documents': 'Die Mutationen betreffen keine Dokumente.',
  /** Shown when the JSON is not a list of mutations */
  'vision.mutate.not-a-list':
    'Schreiben Sie eine Liste von Mutationen, eine einzelne Mutation oder einen Request-Body mit einer Liste von Mutationen.',
  /** A document the mutations create */
  'vision.mutate.operation.create': 'Erstellen',
  /** A document the mutations delete */
  'vision.mutate.operation.delete': 'Löschen',
  /** A document the mutations touch without changing its content */
  'vision.mutate.operation.none': 'Keine Änderung',
  /** A document the mutations change */
  'vision.mutate.operation.update': 'Aktualisieren',
  /** Button running the mutations as a dry run */
  'vision.mutate.preview': 'Testlauf',
  /** Heading of the error shown when the dry run failed */
  'vision.mutate.preview-failed': 'Der Testlauf ist fehlgeschlagen',
  /** Heading of the dry run's outcome */
  'vision.mutate.preview-heading': 'Testlauf',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vision.mutate.stale':
    'Die Mutationen, der Datensatz oder die Optionen haben sich nach diesem Testlauf geändert. Führen Sie ihn erneut aus, um sie anzuwenden.',
  /** How many documents the dry run changes and leaves as they are */
  'vision.mutate.summary': 'Geändert: {{changed}} · Unverändert: {{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vision.network.cache': 'Cache',
  /** The API CDN answered from its cache */
  'vision.network.cache.hit': 'Treffer',
  /** Under the details of a CDN cache hit */
  'vision.network.cache.hit-explained':
    'Das CDN hat mit einer zwischengespeicherten Antwort von einem Standort in Ihrer Nähe geantwortet; die Abfrage hat die API nicht erreicht.',
  /** The API CDN answered with a response this session had not seen */
  'vision.network.cache.miss': 'Kein Treffer, soweit diese Sitzung erkennen kann',
  /** The API answered, which caches nothing */
  'vision.network.cache.none': 'Keiner, die API beantwortet jede Anfrage mit aktuellen Inhalten',
  /** Shown in the Network panel while there is no response */
  'vision.network.empty':
    'Führen Sie die Abfrage aus, um zu sehen, welcher Endpunkt sie beantwortet hat, ob aus einem Cache, und wo sie ausgeführt wurde.',
  /** In the Network panel: the endpoint that answered */
  'vision.network.endpoint': 'Beantwortet von',
  /** The live API answered */
  'vision.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vision.network.endpoint.cdn': 'API-CDN',
  /** In the Network panel: the HTTP method the query was sent with */
  'vision.network.method': 'Methode',
  /** The query and its params went in the URL */
  'vision.network.method.get': 'GET, mit der Abfrage und den Parametern in der URL',
  /** The query and its params went in the request body */
  'vision.network.method.post': 'POST, mit der Abfrage und den Parametern als JSON-Body',
  /** Under the method of a POST request: why the query was not sent in the URL */
  'vision.network.method.post-explained':
    'Die Abfrage und die Parameter ergeben {{size}} Zeichen als Suchparameter; ab {{limit}} sendet @sanity/client sie als JSON-Body, da die API die Länge einer URL begrenzt. Die Optionen bleiben in der URL.',
  /** In the Network panel: the region the query ran in */
  'vision.network.region': 'Abfrage ausgeführt in',
  /** The response did not say where the query ran */
  'vision.network.region.unknown': 'Nicht gemeldet',
  /** In the Network panel: the round trip and the time on the server */
  'vision.network.timing': 'Zeit',
  /** The round trip and the server's time for the query, in milliseconds */
  'vision.network.timing.value': '{{e2e}}ms Round-Trip, {{server}}ms auf dem Server',
  /** In the Network panel: the trace of the request, for Sanity support */
  'vision.network.trace': 'Trace-ID',
  /** Hint in the Network panel while queries go to the API */
  'vision.network.use-cdn-hint':
    'Aktivieren Sie „API-CDN verwenden“ in den Optionen, um Abfragen über das CDN zu senden.',
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vision.network.you': 'Sie',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vision.options.dataset.follows-workspace': 'Folgt dem Workspace',
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vision.options.dataset.pin': 'Dataset anheften',
  /** Hint under the dataset field while a dataset is pinned */
  'vision.options.dataset.pinned':
    'Angeheftet; der Workspace verwendet möglicherweise ein anderes Dataset',
  /** Button that makes the tab follow the workspace's dataset again */
  'vision.options.dataset.use-workspace': 'Workspace-Dataset verwenden',
  /** Label for the "Include content source map" switch */
  'vision.options.include-source-map': 'Content Source Map einbeziehen',
  /** Description for the "Include content source map" switch */
  'vision.options.include-source-map.description':
    'Fügt der Antwort resultSourceMap hinzu, die im Tab „Content Source Map“ angezeigt wird.',
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vision.options.perspective.global': 'Global ({{name}})',
  /** Label of the switch that sends queries to the API CDN */
  'vision.options.use-cdn': 'API-CDN verwenden',
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vision.options.use-cdn.anonymous':
    'Dieses Studio meldet Sie mit einem Cookie an, das das API-CDN nie erhält: Es antwortet wie bei einem anonymen Besucher, also mit dem, was ein öffentliches Dataset zeigt.',
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vision.options.use-cdn.blocked':
    'Das API-CDN liefert keine Entwürfe oder Releases, daher gehen Abfragen mit der Perspektive {{perspective}} an die API. Mit „published“ oder „raw“ verwenden sie das CDN.',
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vision.options.use-cdn.blocked.title': 'Abfragen gehen an die API, nicht an das CDN',
  /** Description of the API CDN switch */
  'vision.options.use-cdn.description':
    'Sendet die Abfrage an das API-CDN, wie useCdn: true in @sanity/client, mit den Perspektiven „published“ und „raw“: Entwürfe und Releases gehen immer an die API. Antworten werden bis zu einer Minute lang zwischengespeichert; das Netzwerk-Panel zeigt an, wenn eine Antwort aus dem Cache stammt.',
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vision.options.use-cdn.use-published': 'Veröffentlichte Perspektive verwenden',
  /** Label of the variant field */
  'vision.options.variant-label': 'Variante',
  /** Variant option sending the navbar's variant, named */
  'vision.options.variant.global': 'Global ({{name}})',
  /** Variant option sending the navbar's variant while none is selected there */
  'vision.options.variant.global-none': 'Global (keine ausgewählt)',
  /** Variant option sending no variant */
  'vision.options.variant.none': 'Keine',
  /** Accessible label for collapsing a bottom panel */
  'vision.panel.collapse': 'Panel einklappen',
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vision.panel.delta': 'Delta',
  /** Accessible label for expanding a bottom panel */
  'vision.panel.expand': 'Panel ausklappen',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vision.panel.explain': 'Erklären',
  /** Label of the Functions tab in the response panel */
  'vision.panel.functions': 'Funktionen',
  /** Label of the "History" tab in the response panel */
  'vision.panel.history': 'Verlauf',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vision.panel.lint': 'Lint',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vision.panel.mutate': 'Mutieren',
  /** Label of the Network tab in the response panel */
  'vision.panel.network': 'Netzwerk',
  /** Label of the "Options" panel in the request column */
  'vision.panel.options': 'Optionen',
  /** Label of the "Response" tab in the response panel */
  'vision.panel.response': 'Antwort',
  /** Label of the "Content Source Map" tab in the response panel */
  'vision.panel.source-map': 'Content Source Map',
  /** Button adding an item to a list param in the params form */
  'vision.params-form.add-item': 'Element hinzufügen',
  /** Placeholder of a params form field that takes any JSON value */
  'vision.params-form.any-placeholder':
    'Beliebiger JSON-Wert; anderer Text wird als Zeichenfolge gesendet',
  /** Shown in the params form when the query uses no params */
  'vision.params-form.empty':
    'Die Abfrage verwendet keine Parameter. Jedes $name darin erhält hier ein Feld.',
  /** Shown in the params form while the params JSON cannot be parsed */
  'vision.params-form.invalid-json':
    'Die Parameter sind kein gültiges JSON. Korrigieren Sie sie in der JSON-Ansicht, um sie hier zu bearbeiten.',
  /** A boolean param's value is not true or false; it is sent anyway */
  'vision.params-form.invalid.boolean': 'Nicht wahr oder falsch; gesendet als {{value}}',
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vision.params-form.invalid.document-type':
    'Kein Dokumenttyp in diesem Workspace; wird trotzdem gesendet',
  /** A whole number param (a slice bound) holds a fraction */
  'vision.params-form.invalid.integer': 'Keine ganze Zahl, die für Ausschnitte benötigt wird',
  /** A list param's value is not a list; it is sent anyway */
  'vision.params-form.invalid.list': 'Keine Liste; gesendet als {{value}}',
  /** A number param's value is not a number; it is sent anyway */
  'vision.params-form.invalid.number': 'Keine Zahl; als Text gesendet',
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vision.params-form.invalid.option': 'Keiner der bekannten Werte; wird trotzdem gesendet',
  /** A text param's value is not text; it is sent anyway */
  'vision.params-form.invalid.string': 'Kein Text; gesendet als {{value}}',
  /** Accessible label of an item input of a list param in the params form */
  'vision.params-form.item-label': '${{name}}, Element {{index}}',
  /** Placeholder of an item input of a list param in the params form */
  'vision.params-form.item-placeholder': 'Element',
  /** Under a params form field whose param has no value */
  'vision.params-form.missing':
    'Nicht festgelegt: Die Abfrage schlägt fehl, bis ein Wert vorhanden ist',
  /** Shown in the params form when the workspace schema could not be read */
  'vision.params-form.no-schema':
    'Typen stammen allein aus der Abfrage: Das Workspace-Schema konnte nicht gelesen werden.',
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vision.params-form.not-set': 'Nicht festgelegt',
  /** Button setting a date and time param to the current time */
  'vision.params-form.now': 'Jetzt',
  /** Button removing a param the query does not use from the params */
  'vision.params-form.remove': 'Entfernen',
  /** Accessible label of the button removing an item from a list param */
  'vision.params-form.remove-item': 'Element entfernen',
  /** Shown in the params form when the query does not parse */
  'vision.params-form.syntax-error':
    'Die Abfrage kann nicht geparst werden, daher werden ihre Parameter ohne Typen aufgelistet.',
  /** Type hint of a params form field: any JSON value */
  'vision.params-form.type.any': 'beliebiger JSON-Wert',
  /** Type hint of a params form field: true or false */
  'vision.params-form.type.boolean': 'true oder false',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vision.params-form.type.datetime': 'Datum und Uhrzeit (ISO 8601)',
  /** Type hint of a params form field: a document ID */
  'vision.params-form.type.document-id': 'Dokument-ID',
  /** Type hint of a params form field: one of the workspace's document types */
  'vision.params-form.type.document-type': 'Dokumenttyp',
  /** Type hint of a params form field: a whole number */
  'vision.params-form.type.integer': 'ganze Zahl',
  /** Type hint of a params form field: a list of values */
  'vision.params-form.type.list': 'Liste, jeweils {{type}}',
  /** Type hint of a params form field: a number */
  'vision.params-form.type.number': 'Zahl',
  /** Type hint of a params form field: text */
  'vision.params-form.type.string': 'Text',
  /** Heading of the params the query does not use, listed in the params form */
  'vision.params-form.unused': 'Nicht von der Abfrage verwendet',
  /** Before the expressions that use a param, in the params form */
  'vision.params-form.used-in': 'Verwendet in',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vision.params.fit-height': 'An Inhalt angepasst, {{height}} Pixel',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vision.params.resize':
    'Parameter-Größe ändern: ziehen oder Pfeiltasten verwenden; Doppelklick oder Eingabetaste, um die Größe wieder an den Inhalt anzupassen',
  /** Tab showing the params as a form inferred from the query */
  'vision.params.view.form': 'Formular',
  /** Tab showing the params as JSON */
  'vision.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vision.params.view.label': 'Parameter bearbeiten als',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vision.paste.parsed': 'Abfrage aus eingefügter URL geladen',
  /** Toast shown after a curl command for a query was pasted and loaded into the tab */
  'vision.paste.parsed-curl': 'Abfrage aus eingefügtem cURL-Befehl geladen',
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vision.paste.unavailable-variant':
    'Die eingefügte URL verwendete die Variante „{{variant}}“; wählen Sie diese in der Navigationsleiste aus, um die Abfrage damit auszuführen.',
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vision.paste.unknown-dataset':
    'Der Datensatz „{{dataset}}“ aus der eingefügten URL ist hier nicht verfügbar, der aktuelle wird beibehalten.',
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vision.paste.unsupported-perspective':
    'Die Perspektive aus der eingefügten URL wird hier nicht unterstützt, die aktuelle wird beibehalten.',
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vision.paste.variants-disabled':
    'Die eingefügte URL verwendete die Variante „{{variant}}“; in diesem Workspace sind Varianten deaktiviert, daher wird die Abfrage ohne sie ausgeführt.',
  /** Accessible label for the query actions menu */
  'vision.query.actions': 'Abfrageaktionen',
  /** Tooltip when automatic refetching is not available for the API version */
  'vision.query.auto-refetch.unsupported':
    'Das automatische erneute Abrufen erfordert API-Version v2021-03-25 oder höher.',
  /** Toast shown after the query was copied */
  'vision.query.copied': 'Query in die Zwischenablage kopiert',
  /** Menu item copying the query text */
  'vision.query.copy': 'Query kopieren',
  /** Menu item opening the export query dialog */
  'vision.query.export': 'Query exportieren…',
  /** Menu item reformatting the query */
  'vision.query.prettify': 'Query formatieren',
  /** Toast shown when the query could not be reformatted */
  'vision.query.prettify.failed': 'Query konnte nicht formatiert werden',
  /** Menu item saving the query to the personal saved queries */
  'vision.query.save': 'Query speichern',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vision.query.stop': 'Stoppen',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vision.query.stop.description': 'Abruf stoppen',
  /** Explanation in the settings section about the redesigned experience */
  'vision.redesign.settings.description':
    'Sie verwenden das überarbeitete Vision-Tool. Wenn Sie zurückwechseln, bleiben Ihre Tabs und Einstellungen in diesem Browser für das nächste Mal erhalten.',
  /** Title of the settings section about the redesigned experience */
  'vision.redesign.settings.title': 'Überarbeitetes Vision (Beta)',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vision.redesign.switch-to-classic': 'Zum klassischen Vision wechseln',
  /** Toast button that switches to the redesigned tool */
  'vision.redesign.toast.accept': 'Jetzt ausprobieren',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vision.redesign.toast.description':
    'Query-Tabs, Live-Neuabruf, Antwortdetails und Exporte. Sie können jederzeit zurückwechseln.',
  /** Toast button that hides the invitation */
  'vision.redesign.toast.dismiss': 'Nicht jetzt',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vision.redesign.toast.title': 'Das überarbeitete Vision ausprobieren',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vision.redesign.try': 'Das überarbeitete Design ausprobieren',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vision.redesign.try.description':
    'Wechseln Sie zum überarbeiteten Vision (Beta). Sie können über die Seitenleiste jederzeit zurückwechseln.',
  /** Empty state of the response panel before anything was fetched */
  'vision.response.empty': 'Noch nichts abgerufen',
  /** Label for the payload size in the response tab */
  'vision.response.payload-size': 'Payload-Größe',
  /** Label for the sync tags in the response tab */
  'vision.response.sync-tags': 'Sync-Tags',
  /** Shown when the response carried no sync tags */
  'vision.response.sync-tags.none': 'Keine Sync-Tags in der Antwort',
  /** Under the query URL when the request went out as a POST body rather than that URL */
  'vision.response.url.sent-as-post':
    'Als POST-Body gesendet: Die Query und die Parameter sind zu lang für eine URL, daher hat @sanity/client sie als JSON gesendet. Das Einfügen dieser URL in Vision lädt die Query dennoch.',
  /** Accessible label for the result actions menu */
  'vision.result.actions': 'Ergebnisaktionen',
  /** Toast shown after the result was copied */
  'vision.result.copied': 'Ergebnis in die Zwischenablage kopiert',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vision.result.copied-value': '{{path}} kopiert',
  /** Menu item and button copying the result as JSON */
  'vision.result.copy': 'Ergebnis kopieren',
  /** Button next to each property in the result tree, copying its value */
  'vision.result.copy-value': 'Wert kopieren',
  /** Empty state of the result view */
  'vision.result.empty': 'Führe die Abfrage aus, um das Ergebnis hier zu sehen',
  /** Button exporting the result as CSV */
  'vision.result.export-csv': 'CSV exportieren',
  /** Button exporting the result as JSON */
  'vision.result.export-json': 'JSON exportieren',
  /** Menu item opening the TypeScript export dialog */
  'vision.result.export-typescript': 'TypeScript exportieren…',
  /** Menu item opening the Zod export dialog */
  'vision.result.export-zod': 'Zod exportieren…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vision.result.graph.collapse': 'Inhalt ausblenden',
  /** Button fitting the whole graph in view */
  'vision.result.graph.fit': 'An Ansicht anpassen',
  /** Accessible label of the graph, saying how to move around in it */
  'vision.result.graph.label':
    'Ergebnisgraph: Ziehen zum Bewegen, Scrollen zum Zoomen; bei Fokus bewegen die Pfeiltasten, + und - zoomen, 0 passt an',
  /** Ends the note on a graph that leaves part of this result out */
  'vision.result.graph.left-out-hint': 'Die Baum- und JSON-Ansicht zeigen alles davon.',
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vision.result.graph.node-limit':
    'Es werden nur die ersten {{nodes}} Objekte und Arrays gezeichnet.',
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vision.result.graph.partial':
    'Für {{nodes}} werden nur die ersten {{rows}} Einträge aufgelistet.',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vision.result.graph.partial.node': '{{name}} ({{entries}} Einträge)',
  /** Title of the graph node of the result itself */
  'vision.result.graph.root': 'Ergebnis',
  /** Button zooming into the graph */
  'vision.result.graph.zoom-in': 'Vergrößern',
  /** Button zooming out of the graph */
  'vision.result.graph.zoom-out': 'Verkleinern',
  /** Tab showing the result as a graph of its objects and arrays */
  'vision.result.view.graph': 'Graph',
  /** Tab showing the result as indented JSON text, to select and copy from */
  'vision.result.view.json': 'JSON',
  /** Accessible label of the tabs that switch how the result shows */
  'vision.result.view.label': 'Ergebnisansicht',
  /** Tab showing the result as a tree to browse */
  'vision.result.view.tree': 'Baum',
  /** Empty state of the saved queries panel */
  'vision.saved.empty':
    'Noch keine gespeicherten Abfragen. Speichere die aktuelle Abfrage mit der Schaltfläche +.',
  /** Empty state of a query list when the search matches nothing */
  'vision.saved.empty-search': 'Keine Abfragen entsprechen deiner Suche',
  /** Menu item loading a saved query into the active tab */
  'vision.saved.load-in-current-tab': 'In aktuellen Tab laden',
  /** Menu item opening a saved query in a new tab */
  'vision.saved.open-in-new-tab': 'In neuem Tab öffnen',
  /** Menu item renaming a saved query */
  'vision.saved.rename': 'Umbenennen',
  /** Accessible label for the button saving the current query */
  'vision.saved.save-current': 'Aktuelle Abfrage speichern',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vision.saved.unavailable-variant':
    'Diese gespeicherte Abfrage verwendete die Variante "{{variant}}"; wählen Sie sie in der Navigationsleiste aus, um die Abfrage damit auszuführen.',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vision.saved.unknown-dataset':
    'Der Datensatz "{{dataset}}" dieser gespeicherten Abfrage ist hier nicht verfügbar, der aktuelle wird beibehalten.',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vision.saved.variants-disabled':
    'Diese gespeicherte Abfrage verwendete die Variante "{{variant}}"; in diesem Workspace sind Varianten deaktiviert, daher wird die Abfrage ohne sie ausgeführt.',
  /** Button in the settings dialog that clears the stored state */
  'vision.settings.clear-storage': 'Speicher leeren',
  /** Confirmation button for clearing the storage */
  'vision.settings.clear-storage.confirm': 'Ja, Speicher leeren',
  /** Explanation of what clearing the storage does */
  'vision.settings.clear-storage.description':
    'Löscht Ihre persönlichen gespeicherten Abfragen und die Funktionsbibliothek, setzt die geöffneten Tabs und diese Standardeinstellungen in diesem Browser zurück und kehrt zum klassischen Vision-Tool zurück. Geteilte Abfragen bleiben erhalten.',
  /** Toast shown when the saved queries could not be cleared */
  'vision.settings.clear-storage.error': 'Die gespeicherten Abfragen konnten nicht gelöscht werden',
  /** Toast shown after the storage was cleared */
  'vision.settings.clear-storage.success': 'Speicher geleert',
  /** Explanation at the top of the settings dialog */
  'vision.settings.description':
    'Standardeinstellungen für neue Tabs. Geöffnete Tabs behalten ihre eigenen Optionen.',
  /** Explains the setting listing the fields left out of History diffs */
  'vision.settings.history-diff.description':
    'Ein Feldpfad pro Zeile. Ein Pfad trifft in jeder Tiefe eines Ergebnisses zu, sodass _rev die Revision jedes darin enthaltenen Dokuments ausblendet. Jeder Diff kann sie dennoch anzeigen.',
  /** Button restoring the default fields left out of History diffs */
  'vision.settings.history-diff.reset': 'Auf Standardwerte zurücksetzen',
  /** Label of the setting listing the fields left out of History diffs */
  'vision.settings.history-diff.title': 'Felder, die in History-Diffs ausgeblendet werden',
  /** Title of the settings dialog */
  'vision.settings.title': 'Einstellungen',
  /** Empty state of the shared queries panel */
  'vision.shared.empty':
    'Noch keine geteilten Abfragen. Teilen Sie eine gespeicherte Abfrage, um sie allen Nutzern dieses Datasets zugänglich zu machen.',
  /** Shortcut description: close dialogs and menus */
  'vision.shortcuts.close': 'Dialoge und Menüs schließen',
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vision.shortcuts.complete': 'Einen Funktionsnamen vervollständigen',
  /** Shortcut description: copy the query */
  'vision.shortcuts.copy-query': 'Die Abfrage kopieren',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vision.shortcuts.extract-function':
    'Die Projektion an der Cursorposition in eine Funktion extrahieren',
  /** Shortcut description: run the query */
  'vision.shortcuts.fetch': 'Die Abfrage ausführen',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vision.shortcuts.next-finding': 'Zum nächsten Lint-Befund springen',
  /** Shortcut description: reformat the query */
  'vision.shortcuts.prettify': 'Die Abfrage formatieren',
  /** Title of the keyboard shortcuts dialog */
  'vision.shortcuts.title': 'Tastaturkürzel',
  /** Sidebar toggle: show icons only */
  'vision.sidebar.collapse': 'Seitenleiste einklappen',
  /** Sidebar toggle: show labels next to the icons */
  'vision.sidebar.expand': 'Seitenleiste ausklappen',
  /** Accessible label for the sidebar navigation */
  'vision.sidebar.label': 'Vision-Seitenleiste',
  /** Sidebar item and drawer title for personal saved queries */
  'vision.sidebar.saved-queries': 'Gespeicherte Abfragen',
  /** Sidebar item opening the settings dialog */
  'vision.sidebar.settings': 'Einstellungen',
  /** Sidebar item and drawer title for shared queries */
  'vision.sidebar.shared-queries': 'Geteilte Abfragen',
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vision.sidebar.shortcuts': 'Tastenkombinationen',
  /** Empty state of the content source map panel */
  'vision.source-map.empty':
    'Keine Content Source Map in der Antwort. Aktivieren Sie "Content Source Map einbeziehen" unter Optionen und rufen Sie die Daten erneut ab.',
  /** Accessible label of the divider between the result and the response details panel */
  'vision.split.bottom-panel':
    'Größe des Antwortdetails-Panels ändern: ziehen oder Pfeiltasten verwenden; Pos1 und Ende springen zu den Grenzen, Eingabe setzt zurück',
  /** Accessible label of the divider between the request and response panes */
  'vision.split.request-response':
    'Größe der Anfrage- und Antwortbereiche ändern: ziehen oder Pfeiltasten verwenden; Pos1 und Ende springen zu den Grenzen, Eingabe setzt zurück',
  /** Accessible label for the button closing a query tab */
  'vision.tabs.close-tab': 'Tab schließen',
  /** Accessible label for the list of query tabs */
  'vision.tabs.label': 'Abfrage-Tabs',
  /** Accessible label for the button opening a new query tab */
  'vision.tabs.new-tab': 'Neuer Tab',
  /** Placeholder of the input renaming a tab */
  'vision.tabs.title-placeholder': 'Tab-Titel',
  /** Title of a tab whose query is still empty */
  'vision.tabs.untitled': 'Unbenannte Abfrage',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vision.webmcp.check-query': 'Eine GROQ-Abfrage in Vision prüfen',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vision.webmcp.describe-schema': 'Das Schema in Vision beschreiben',
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vision.webmcp.explain-query': 'Eine GROQ-Abfrage in Vision erklären',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vision.webmcp.get-state': 'Den geöffneten Vision-Tab lesen',
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vision.webmcp.open-query': 'Eine GROQ-Abfrage in Vision öffnen',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vision.webmcp.preview-mutations': 'Mutationen in Vision als Vorschau anzeigen',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vision.webmcp.run-query': 'Eine GROQ-Abfrage in Vision ausführen',
})
