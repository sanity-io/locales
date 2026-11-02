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
  /** Tooltip shown when the API version selector is locked to vX because a variant is selected */
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
  'vista.agent-actions.credits': 'Verbraucht ein KI-Guthaben pro Anfrage',
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vista.ai-credits.balance': '{{balance}} von {{quota}} KI-Guthaben diesen Monat übrig.',
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vista.ai-credits.deficit':
    '{{used}} KI-Guthaben diesen Monat verbraucht, {{deficit}} mehr als die enthaltenen {{quota}}.',
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vista.ai-credits.limit.description':
    'Ihre Organisation hat diesen Monat {{used}} von {{quota}} KI-Guthaben verbraucht, daher sind Sanity Agent Actions bis zum nächsten Monat oder bis das Ausgabenlimit erhöht wird pausiert.',
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vista.ai-credits.limit.description-unknown':
    'Ihre Organisation hat ihr Ausgabenlimit für KI-Guthaben erreicht, daher sind Sanity Agent Actions bis zum nächsten Monat oder bis das Limit erhöht wird pausiert.',
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vista.ai-credits.limit.learn-more': 'So funktionieren KI-Guthaben',
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vista.ai-credits.limit.manage': 'KI-Guthaben verwalten',
  /** Title of the card shown where the organization is out of AI credits */
  'vista.ai-credits.limit.title': 'Keine KI-Guthaben mehr',
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vista.ai-credits.usage': 'KI-Nutzung',
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vista.ai-credits.used': '{{used}} KI-Guthaben diesen Monat verbraucht.',
  /** Button in the request column's action bar naming the API version requests go out with */
  'vista.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vista.api-version.button-cdn': 'API CDN {{version}}',
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vista.api-version.button-invalid': 'Unvollständige API-Version',
  /** Tooltip of the API version button */
  'vista.api-version.tooltip':
    'Abfragen laufen gegen API-Version {{version}}. Zum Ändern in den Optionen auswählen.',
  /** Tooltip of the API version button while queries go through the API CDN */
  'vista.api-version.tooltip-cdn':
    'Abfragen laufen gegen das API CDN mit API-Version {{version}}. Zum Ändern in den Optionen auswählen.',
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vista.api-version.tooltip-cdn-blocked':
    'Abfragen laufen gegen die API mit API-Version {{version}}, nicht gegen das API CDN: Es bedient die {{perspective}}-Perspektive nicht. Zum Ändern in den Optionen auswählen.',
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vista.api-version.tooltip-invalid':
    'Die API-Version in den Optionen ist unvollständig, daher kann nichts abgerufen werden, bis sie vollständig ist.',
  /** Tooltip of the API version button while a selected variant forces the experimental API */
  'vista.api-version.tooltip-locked':
    'Abfragen laufen gegen API-Version {{version}}, die die ausgewählte Variante benötigt.',
  /** Label of the document after the change in the Delta panel */
  'vista.delta.after': 'Nachher',
  /** Label of the document before the change in the Delta panel */
  'vista.delta.before': 'Vorher',
  /** What the Delta panel does */
  'vista.delta.description':
    'Führt die Abfrage im Delta-Modus aus, wie es GROQ-basierte Webhooks, Listener und Sanity Functions tun: before() und after() sind ein Dokument vor und nach einer Änderung, @ ist das Dokument danach, und delta::changedAny() vergleicht sie. Dies läuft im Browser mit groq-js. Eine leere Seite bedeutet kein Dokument: Die Änderung erstellt oder löscht es.',
  /** Label of the document ID field in the Delta panel */
  'vista.delta.document-id': 'Dokument-ID',
  /** Shown when there is a query but no documents to compare */
  'vista.delta.empty':
    'Laden Sie den Verlauf eines Dokuments oder schreiben Sie die Dokumente in Vorher und Nachher.',
  /** Shown when the query fails in delta mode */
  'vista.delta.failed': 'Die Abfrage konnte im Delta-Modus nicht ausgeführt werden: {{message}}',
  /** Shown when the After document is not valid JSON */
  'vista.delta.invalid-after': 'Nachher ist kein gültiges JSON: {{message}}',
  /** Shown when the Before document is not valid JSON */
  'vista.delta.invalid-before': 'Before ist kein gültiges JSON: {{message}}',
  /** Button loading the document's revisions from the History API */
  'vista.delta.load': 'Verlauf laden',
  /** Shown when the history could not be loaded */
  'vista.delta.load-failed': 'Der Verlauf konnte nicht geladen werden: {{message}}',
  /** A delta filter that is true for the change */
  'vista.delta.matches':
    'Übereinstimmung: Ein Webhook oder eine Funktion mit diesem Filter wird für diese Änderung ausgeführt.',
  /** A delta filter that is false for the change */
  'vista.delta.no-match':
    'Keine Übereinstimmung: Ein Webhook oder eine Funktion mit diesem Filter wird für diese Änderung nicht ausgeführt.',
  /** Shown while the query or its params cannot be sent */
  'vista.delta.no-request':
    'Korrigieren Sie die Query und ihre Parameter, um sie im Delta-Modus auszuführen.',
  /** Heading of the delta result */
  'vista.delta.result': 'Ergebnis',
  /** The After choice for a change that deletes the document */
  'vista.delta.revision.none-after': 'Nichts: Die Änderung löscht das Dokument',
  /** The Before choice for a change that creates the document */
  'vista.delta.revision.none-before': 'Nichts: Die Änderung erstellt das Dokument',
  /** A revision in the Before and After lists */
  'vista.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vista.drawer.close': 'Panel schließen',
  /** Explanation at the top of the Explain panel */
  'vista.explain.description':
    'Der Abfrageplan beschreibt, wie der Content Lake die Query ausführt: was gelesen, gefiltert und sortiert wird und was für spätere Schritte übrig bleibt. „Erkläre mir das“ lässt Sanity Agent Actions die Query und ihren Plan in einfachen Worten beschreiben, wofür ein KI-Guthaben verbraucht wird.',
  /** Shown in the Explain panel while there is no valid query to explain */
  'vista.explain.empty': 'Schreiben Sie eine Query, um sie zu erklären.',
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vista.explain.explain': 'Erkläre mir das',
  /** Shown when the explanation could not be written */
  'vista.explain.failed': 'Die Erklärung konnte nicht erstellt werden: {{message}}',
  /** A count the index computes without reading the documents */
  'vista.explain.insight.aggregate': 'Im Index gezählt, ohne die Dokumente zu lesen.',
  /** A subquery the plan runs once for all documents */
  'vista.explain.insight.batched-subquery':
    'Die Unterabfrage wird einmal für alle Dokumente in einem einzigen gebündelten Abruf ausgeführt, nicht einmal pro Dokument.',
  /** Part of the filter runs in memory; the expression follows */
  'vista.explain.insight.filter-in-memory':
    'Ein Teil des Filters wird im Arbeitsspeicher ausgeführt, nachdem gelesen wurde: Jedes Dokument, das der Index durchlässt, wird zuerst gelesen, was bei großen Datasets langsam wird. Joins (->) und Funktionen in einem Filter können den Index nicht nutzen.',
  /** The index sorts and limits while reading */
  'vista.explain.insight.index-sort-limit':
    'Der Index sortiert und begrenzt die Dokumente während des Lesens.',
  /** The plan slices in memory */
  'vista.explain.insight.slice-in-memory':
    'Der Ausschnitt wird im Arbeitsspeicher nach dem Lesen erstellt, nicht als Begrenzung während des Lesens.',
  /** The plan sorts in memory */
  'vista.explain.insight.sort-in-memory':
    'Die Sortierung erfolgt im Arbeitsspeicher, nachdem jede Übereinstimmung gelesen wurde. Sortieren Sie nach Attributen, die der Index sortieren kann.',
  /** Link under the plan insights to the guide on fast queries */
  'vista.explain.insights.guide': 'Hochperformantes GROQ',
  /** Heading of the plan insights in the Explain panel */
  'vista.explain.insights.title': 'Was auffällt',
  /** Button in the Explain panel fetching the query plan */
  'vista.explain.plan': 'Abfrageplan anzeigen',
  /** Shown when the query plan could not be fetched */
  'vista.explain.plan-failed': 'Der Abfrageplan konnte nicht abgerufen werden: {{message}}',
  /** Heading of the query plan in the Explain panel */
  'vista.explain.plan-title': 'Abfrageplan',
  /** Toast shown after a code snippet was copied */
  'vista.export-query.copied': 'Snippet in die Zwischenablage kopiert',
  /** Label for the button that copies a code snippet */
  'vista.export-query.copy': 'Snippet kopieren',
  /** Explanation at the top of the export query dialog */
  'vista.export-query.description':
    'Führe diese Abfrage außerhalb des Studios mit einem dieser Snippets aus.',
  /** Title of the dialog that exports the query as code snippets */
  'vista.export-query.title': 'Abfrage exportieren',
  /** Note about authentication in the export query dialog */
  'vista.export-query.token-note':
    'Private Datasets benötigen ein API-Token. Bei öffentlichen Datasets kann der Authorization-Header weggelassen werden.',
  /** Toast shown after the generated code was copied */
  'vista.export-types.copied': 'Code in die Zwischenablage kopiert',
  /** Label for the button that copies the generated code */
  'vista.export-types.copy': 'Code kopieren',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vista.export-types.empty':
    'Rufe zuerst die Abfrage ab, damit ein Ergebnis vorliegt, aus dem Typen abgeleitet werden können.',
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vista.export-types.schema-error': 'Schemaauswertung fehlgeschlagen: {{message}}',
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vista.export-types.source.result':
    'Abgeleitet aus dem abgerufenen Ergebnis, da die Abfrage nicht anhand des Workspace-Schemas ausgewertet werden konnte.',
  /** Note shown when the types were derived from the workspace schema */
  'vista.export-types.source.schema':
    'Abgeleitet aus dem Workspace-Schema, genauso wie es sanity typegen macht.',
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vista.export-types.stale-result':
    'Das angezeigte Ergebnis wurde für eine andere Abfrage oder andere Parameter abgerufen. Rufe zuerst die aktuelle Abfrage ab, damit ein Ergebnis vorliegt, aus dem Typen abgeleitet werden können.',
  /** Title of the dialog exporting TypeScript types for the result */
  'vista.export-types.title-typescript': 'TypeScript exportieren',
  /** Title of the dialog exporting a Zod schema for the result */
  'vista.export-types.title-zod': 'Zod exportieren',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vista.functions.add': 'Zur Abfrage hinzufügen',
  /** Shown on a library function the query declares the same way */
  'vista.functions.declared': 'In dieser Abfrage',
  /** Lint action on a call of a library function the query does not declare */
  'vista.functions.editor.add-from-library': 'Deklarieren',
  /** Note in a function's hover documentation: the API version it needs */
  'vista.functions.editor.api-version': 'Benötigt API-Version {{version}} oder höher',
  /** Detail of a completion for a custom function the query declares */
  'vista.functions.editor.completion-declared': 'in dieser Abfrage',
  /** Detail of a completion for a library function, which declares it too */
  'vista.functions.editor.completion-library': 'aus deiner Bibliothek',
  /** Note in the hover documentation of a custom function the query declares */
  'vista.functions.editor.declared-on': 'Benutzerdefinierte Funktion, deklariert in Zeile {{line}}',
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vista.functions.editor.delta-only':
    'Funktioniert nur im Delta-Modus, in dem Webhooks und Sanity Functions ihre Filter ausführen',
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vista.functions.editor.extract': 'In Funktion extrahieren',
  /** Note in the hover documentation of a library function the query does not declare */
  'vista.functions.editor.in-library':
    'In deiner Funktionsbibliothek, nicht in dieser Abfrage deklariert',
  /** Link at the end of a built-in function's hover documentation */
  'vista.functions.editor.reference': 'GROQ-Funktionsreferenz',
  /** Explanation under the library heading in the Functions panel */
  'vista.functions.library.description':
    'Wird in diesem Browser für jeden Datensatz des Projekts aufbewahrt. Vervollständigungen bieten diese Funktionen an, und Lint schlägt vor, einen Query-Aufruf als solche zu deklarieren.',
  /** Shown in the Functions panel while the library is empty */
  'vista.functions.library.empty':
    'Speichern Sie eine Funktion, die der Query deklariert, um sie in anderen Queries zu verwenden.',
  /** Heading of the functions library in the Functions panel */
  'vista.functions.library.title': 'Bibliothek',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vista.functions.query.empty':
    'Deklarieren Sie benutzerdefinierte Funktionen am Anfang der Query, oder setzen Sie den Cursor in eine Projektion, wie author->{name}, und klicken Sie auf die Extrahieren-Schaltfläche über dem Editor ({{shortcut}}).',
  /** Heading of the functions the query declares in the Functions panel */
  'vista.functions.query.title': 'In dieser Query',
  /** Removes a function from the library */
  'vista.functions.remove': 'Aus der Bibliothek entfernen',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vista.functions.replace': 'In Query ersetzen',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vista.functions.reveal': '{{name}} im Editor anzeigen',
  /** Button of a function the query declares that is not in the library yet */
  'vista.functions.save': 'In Bibliothek speichern',
  /** Shown on a function the query declares the way the library has it */
  'vista.functions.saved': 'Gespeichert',
  /** Button of a function the query declares differently from the library's version */
  'vista.functions.update': 'Bibliothek aktualisieren',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vista.generate.button': 'Query generieren',
  /** Closes the generate query bar */
  'vista.generate.close': 'Schließen',
  /** Explanation under the generate query field */
  'vista.generate.description':
    'Sanity Agent Actions schreiben das GROQ aus Ihrer Beschreibung und den Dokumenttypen, und der Content Lake überprüft jeden Versuch; jeder Versuch verbraucht ein KI-Guthaben. Dies ersetzt die Query dieses Tabs und führt sie aus; Rückgängig im Editor stellt die vorherige Query wieder her.',
  /** Shown when no query could be generated, above the reason */
  'vista.generate.failed': 'Die Query konnte nicht generiert werden',
  /** Accessible label of the description field in the generate query bar */
  'vista.generate.label': 'Was soll die Query abrufen?',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vista.generate.open-anyway': 'Letzten Versuch öffnen',
  /** Placeholder of the description field in the generate query bar */
  'vista.generate.placeholder': 'Die 10 neuesten Autoren, sortiert nach Nachname und dann Vorname',
  /** Shown while the first attempt at a query is written */
  'vista.generate.progress': 'Query wird geschrieben…',
  /** Shown while a rejected attempt is retried */
  'vista.generate.progress-retry': 'Query wird korrigiert (Versuch {{attempt}} von {{max}})…',
  /** Button generating the query */
  'vista.generate.submit': 'Generieren',
  /** Badge on a history entry the API CDN answered */
  'vista.history.cdn': 'API CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vista.history.cdn-cache-hit': 'CDN-Cache-Treffer',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vista.history.changed': 'Geändert',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vista.history.changes': 'Änderungen',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vista.history.changes-failed': 'Die Änderungen konnten nicht angezeigt werden.',
  /** Button retrying to show the changes of a history entry */
  'vista.history.changes-retry': 'Erneut versuchen',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vista.history.compared-with': 'Verglichen mit dem Abruf um {{time}}',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vista.history.diff.params': 'Parameter',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vista.history.diff.query': 'Abfrage',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vista.history.diff.query-formatting-only': 'Nur die Formatierung hat sich geändert',
  /** Label of the diff of the query result in a history entry's changes */
  'vista.history.diff.result': 'Ergebnis',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vista.history.diff.url': 'Anfrage-URL',
  /** Empty state of the history panel */
  'vista.history.empty': 'Noch nichts abgerufen',
  /** Status label for a failed fetch in the history */
  'vista.history.failed': 'Fehlgeschlagen',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vista.history.hide-hidden': 'Ausblenden',
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vista.history.hiding': '{{fields}} werden ausgeblendet',
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vista.history.only-hidden-changed': 'Nur verborgene Felder haben sich geändert',
  /** History reason: a tab opened with a generated query fetched it */
  'vista.history.reason.generated': 'Generierte Abfrage',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vista.history.reason.link': 'Link geöffnet',
  /** History reason: a live event matched the query's sync tags */
  'vista.history.reason.live': 'Live-Aktualisierung',
  /** History reason: the live connection asked every client to refetch */
  'vista.history.reason.live-restart': 'Live-Verbindung neu gestartet',
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vista.history.reason.live-start': 'Live-Abruf gestartet',
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vista.history.reason.load': 'Abfrage geladen',
  /** History reason: the fetch button was pressed */
  'vista.history.reason.manual': 'Abrufen-Schaltfläche',
  /** History reason: mutations were applied from the Mutate panel */
  'vista.history.reason.mutation': 'Mutationen angewendet',
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vista.history.reason.options': 'Optionen geändert',
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vista.history.reason.paste': 'URL eingefügt',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vista.history.reason.resume': 'Automatisches erneutes Abrufen fortgesetzt',
  /** History reason: the keyboard shortcut was used */
  'vista.history.reason.shortcut': 'Tastenkombination',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vista.history.same-result': 'Gleiches Ergebnis',
  /** Button showing the hidden fields in a history entry's changes */
  'vista.history.show-hidden': 'Anzeigen',
  /** Next to a history entry's changes while the hidden fields are shown */
  'vista.history.showing-hidden': '{{fields}} werden angezeigt, standardmäßig ausgeblendet',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vista.history.too-large': 'Zu groß für einen Vergleich',
  /** A history entry whose result is the same as the previous result */
  'vista.history.unchanged': 'Keine Änderungen',
  /** Shown in the Lint panel while the query has no lint findings */
  'vista.lint.empty':
    'Keine Lint-Befunde. Probleme, die der GROQ-Linter in der Abfrage erkennt, werden hier während der Eingabe aufgelistet; wähle einen aus, um ihn im Editor auszuwählen.',
  /** Where a lint finding sits in the query, shown under its message */
  'vista.lint.position': 'Zeile {{line}}, Spalte {{column}}',
  /** Severity badge of a lint finding */
  'vista.lint.severity.error': 'Fehler',
  /** Severity badge of a lint finding */
  'vista.lint.severity.hint': 'Hinweis',
  /** Severity badge of a lint finding */
  'vista.lint.severity.info': 'Info',
  /** Severity badge of a lint finding */
  'vista.lint.severity.warning': 'Warnung',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vista.lint.use-suggestion': '{{suggestion}} verwenden',
  /** Badge shown while a tab refetches automatically */
  'vista.live.active': 'Live',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vista.live.button': 'Live-Abruf',
  /** Tooltip of the Live button while automatic refetching is off */
  'vista.live.button.start':
    'Abrufen und dann erneut abrufen, wenn sich die Dokumente im Ergebnis ändern',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vista.live.button.stop':
    'Das automatische Abrufen bei Änderungen der Dokumente im Ergebnis stoppen. Der Abruf erfolgt weiterhin bei Bedarf, für Ergebnisse, die keine Dokumentänderung betrifft, wie now()',
  /** Error shown when the live connection breaks */
  'vista.live.error': 'Live-Updates getrennt: {{message}}',
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vista.live.stop': 'Live stoppen',
  /** Button in the Mutate panel adding a mutation to the list */
  'vista.mutate.add': 'Mutation hinzufügen',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vista.mutate.add.create': 'Ein Dokument erstellen',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vista.mutate.add.delete': 'Ein Dokument löschen',
  /** Adds a mutation deleting the documents of the shown result */
  'vista.mutate.add.delete-result': 'Die Dokumente im Ergebnis löschen',
  /** Adds a mutation patching a document, its ID to fill in */
  'vista.mutate.add.patch': 'Ein Dokument patchen',
  /** Adds a mutation patching the documents of the shown result */
  'vista.mutate.add.patch-result': 'Die Dokumente im Ergebnis patchen',
  /** Button applying the mutations a dry run showed */
  'vista.mutate.apply': 'Auf {{dataset}} anwenden',
  /** Heading of the error shown when applying the mutations failed */
  'vista.mutate.apply-failed': 'Die Mutationen wurden nicht angewendet',
  /** Next to Apply while the mutations as they are have had no dry run */
  'vista.mutate.apply-needs-preview':
    '„Anwenden“ sendet das, was ein Testlauf gezeigt hat: Führen Sie zuerst einen aus.',
  /** Option giving array items without a _key one */
  'vista.mutate.auto-keys': '_key zu Array-Elementen hinzufügen, die keinen haben',
  /** Under the option giving array items a _key */
  'vista.mutate.auto-keys.description':
    'Das Studio benötigt einen auf jedem Array-Element, um es zu bearbeiten.',
  /** Button showing a document's changes in the dry run */
  'vista.mutate.changes': 'Änderungen',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vista.mutate.changes-failed': 'Die Änderungen konnten nicht angezeigt werden.',
  /** Button retrying to show a document's changes */
  'vista.mutate.changes-retry': 'Erneut versuchen',
  /** What the Mutate panel does */
  'vista.mutate.description':
    'Schreiben Sie Mutationen so, wie die Mutations-API sie entgegennimmt, in einer Liste: create, createOrReplace, createIfNotExists, delete und patch, per ID oder per GROQ-Abfrage. Ein Testlauf zeigt, was sie mit jedem Dokument tun würden, ohne etwas zu ändern; „Anwenden“ schreibt sie dann in einer Transaktion mit Ihrem Konto in das Dataset.',
  /** What the API says went wrong with one of the mutations */
  'vista.mutate.failure-item': 'Mutation {{index}}: {{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vista.mutate.generate.button': 'Mutationen generieren',
  /** Explanation under the generate mutations field */
  'vista.mutate.generate.description':
    'Sanity Agent Actions schreiben die Mutationen anhand Ihrer Beschreibung, der Dokumente im Ergebnis und ihrer Typen, und ein Testlauf prüft jeden Versuch; jeder Versuch verbraucht ein KI-Guthaben. Sie ersetzen die Mutationen hier, wobei „Rückgängig“ diese wiederherstellt; es wird nichts geschrieben, bis Sie sie anwenden.',
  /** Shown when no mutations could be generated, above the reason */
  'vista.mutate.generate.failed': 'Die Mutationen konnten nicht generiert werden',
  /** Accessible label of the description field in the generate mutations bar */
  'vista.mutate.generate.label': 'Was sollen die Mutationen tun?',
  /** Placeholder of the description field in the generate mutations bar */
  'vista.mutate.generate.placeholder': 'Den Titel der Dokumente im Ergebnis in foobar ändern',
  /** Shown while the first attempt at the mutations is written */
  'vista.mutate.generate.progress': 'Mutationen werden geschrieben…',
  /** Shown while an attempt the dry run turned down is retried */
  'vista.mutate.generate.progress-retry':
    'Mutationen werden korrigiert (Versuch {{attempt}} von {{max}})…',
  /** Under the dry run: the fields the diffs leave out */
  'vista.mutate.hiding': 'Die Änderungen lassen {{fields}} aus, wie es auch der Verlauf tut.',
  /** Shown when the mutations are not valid JSON */
  'vista.mutate.invalid-json': 'Die Mutationen sind kein gültiges JSON: {{message}}',
  /** Shown when a mutation does not name exactly one thing to do */
  'vista.mutate.invalid-mutation':
    'Mutation {{index}} benötigt genau eines von create, createOrReplace, createIfNotExists, delete oder patch.',
  /** Label of the mutations editor */
  'vista.mutate.mutations': 'Mutationen',
  /** The dry run touched no documents */
  'vista.mutate.no-documents': 'Die Mutationen betreffen keine Dokumente.',
  /** Shown when the JSON is not a list of mutations */
  'vista.mutate.not-a-list':
    'Schreiben Sie eine Liste von Mutationen, eine einzelne Mutation oder einen Anfragetext mit einer Liste von Mutationen.',
  /** A document the mutations create */
  'vista.mutate.operation.create': 'Erstellen',
  /** A document the mutations delete */
  'vista.mutate.operation.delete': 'Löschen',
  /** A document the mutations touch without changing its content */
  'vista.mutate.operation.none': 'Keine Änderung',
  /** A document the mutations change */
  'vista.mutate.operation.update': 'Aktualisieren',
  /** Button running the mutations as a dry run */
  'vista.mutate.preview': 'Testlauf',
  /** Heading of the error shown when the dry run failed */
  'vista.mutate.preview-failed': 'Der Testlauf ist fehlgeschlagen',
  /** Heading of the dry run's outcome */
  'vista.mutate.preview-heading': 'Testlauf',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vista.mutate.stale':
    'Die Mutationen, der Dataset oder die Optionen haben sich nach diesem Testlauf geändert. Führen Sie ihn erneut aus, um sie anzuwenden.',
  /** How many documents the dry run changes and leaves as they are */
  'vista.mutate.summary': 'Geändert: {{changed}} · Unverändert: {{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vista.network.cache': 'Cache',
  /** The API CDN answered from its cache */
  'vista.network.cache.hit': 'Treffer',
  /** Under the details of a CDN cache hit */
  'vista.network.cache.hit-explained':
    'Das CDN hat mit einer zwischengespeicherten Antwort von einem Standort in Ihrer Nähe geantwortet; die Abfrage hat die API nicht erreicht.',
  /** The API CDN answered with a response this session had not seen */
  'vista.network.cache.miss': 'Kein Treffer, soweit diese Sitzung erkennen kann',
  /** The API answered, which caches nothing */
  'vista.network.cache.none': 'Keiner, die API beantwortet jede Anfrage mit aktuellem Inhalt',
  /** Shown in the Network panel while there is no response */
  'vista.network.empty':
    'Führen Sie die Abfrage aus, um zu sehen, welcher Endpunkt geantwortet hat, ob aus einem Cache und wo sie ausgeführt wurde.',
  /** In the Network panel: the endpoint that answered */
  'vista.network.endpoint': 'Beantwortet von',
  /** The live API answered */
  'vista.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vista.network.endpoint.cdn': 'API CDN',
  /** In the Network panel: the region the query ran in */
  'vista.network.region': 'Abfrage ausgeführt in',
  /** The response did not say where the query ran */
  'vista.network.region.unknown': 'Nicht angegeben',
  /** In the Network panel: the round trip and the time on the server */
  'vista.network.timing': 'Zeit',
  /** The round trip and the server's time for the query, in milliseconds */
  'vista.network.timing.value': '{{e2e}}ms Round-Trip, {{server}}ms auf dem Server',
  /** In the Network panel: the trace of the request, for Sanity support */
  'vista.network.trace': 'Trace-ID',
  /** Hint in the Network panel while queries go to the API */
  'vista.network.use-cdn-hint':
    'Aktivieren Sie „API CDN verwenden“ in den Optionen, um Abfragen über das CDN zu senden.',
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vista.network.you': 'Sie',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vista.options.dataset.follows-workspace': 'Folgt dem Workspace',
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vista.options.dataset.pin': 'Dataset anheften',
  /** Hint under the dataset field while a dataset is pinned */
  'vista.options.dataset.pinned':
    'Angeheftet; der Arbeitsbereich verwendet möglicherweise einen anderen Datensatz',
  /** Button that makes the tab follow the workspace's dataset again */
  'vista.options.dataset.use-workspace': 'Datensatz des Arbeitsbereichs verwenden',
  /** Label for the "Include content source map" switch */
  'vista.options.include-source-map': 'Content Source Map einbeziehen',
  /** Description for the "Include content source map" switch */
  'vista.options.include-source-map.description':
    'Fügt resultSourceMap der Antwort hinzu, die im Tab „Content Source Map“ angezeigt wird.',
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vista.options.perspective.global': 'Global ({{name}})',
  /** Label of the switch that sends queries to the API CDN */
  'vista.options.use-cdn': 'API CDN verwenden',
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vista.options.use-cdn.anonymous':
    'Dieses Studio meldet Sie über ein Cookie an, das der API CDN niemals erhält: Er antwortet wie bei einem anonymen Besucher, mit dem, was ein öffentlicher Datensatz zeigt.',
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vista.options.use-cdn.blocked':
    'Der API CDN liefert keine Entwürfe oder Releases aus, daher gehen Abfragen mit der Perspektive {{perspective}} an die API. Mit „published“ oder „raw“ nutzen sie den CDN.',
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vista.options.use-cdn.blocked.title': 'Abfragen gehen an die API, nicht an den CDN',
  /** Description of the API CDN switch */
  'vista.options.use-cdn.description':
    'Sendet die Abfrage an den API CDN, ähnlich wie useCdn: true in @sanity/client, mit den Perspektiven „published“ und „raw“: Entwürfe und Releases gehen immer an die API. Die Antworten werden bis zu einer Minute lang zwischengespeichert; das Netzwerk-Panel zeigt an, wenn eine Antwort aus dem Cache stammt.',
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vista.options.use-cdn.use-published': 'Veröffentlichte Perspektive verwenden',
  /** Label of the variant field */
  'vista.options.variant-label': 'Variante',
  /** Variant option sending the navbar's variant, named */
  'vista.options.variant.global': 'Global ({{name}})',
  /** Variant option sending the navbar's variant while none is selected there */
  'vista.options.variant.global-none': 'Global (keine ausgewählt)',
  /** Variant option sending no variant */
  'vista.options.variant.none': 'Keine',
  /** Accessible label for collapsing a bottom panel */
  'vista.panel.collapse': 'Panel einklappen',
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vista.panel.delta': 'Delta',
  /** Accessible label for expanding a bottom panel */
  'vista.panel.expand': 'Panel ausklappen',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vista.panel.explain': 'Erklären',
  /** Label of the Functions tab in the response panel */
  'vista.panel.functions': 'Funktionen',
  /** Label of the "History" tab in the response panel */
  'vista.panel.history': 'Verlauf',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vista.panel.lint': 'Lint',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vista.panel.mutate': 'Mutieren',
  /** Label of the Network tab in the response panel */
  'vista.panel.network': 'Netzwerk',
  /** Label of the "Options" panel in the request column */
  'vista.panel.options': 'Optionen',
  /** Label of the "Response" tab in the response panel */
  'vista.panel.response': 'Response',
  /** Label of the "Content Source Map" tab in the response panel */
  'vista.panel.source-map': 'Content Source Map',
  /** Button adding an item to a list param in the params form */
  'vista.params-form.add-item': 'Element hinzufügen',
  /** Placeholder of a params form field that takes any JSON value */
  'vista.params-form.any-placeholder':
    'Beliebiger JSON-Wert; anderer Text wird als Zeichenfolge gesendet',
  /** Shown in the params form when the query uses no params */
  'vista.params-form.empty':
    'Die Abfrage verwendet keine Parameter. Jedes $name darin erhält hier ein Feld.',
  /** Shown in the params form while the params JSON cannot be parsed */
  'vista.params-form.invalid-json':
    'Die Parameter sind kein gültiges JSON. Korrigieren Sie sie in der JSON-Ansicht, um sie hier zu bearbeiten.',
  /** A boolean param's value is not true or false; it is sent anyway */
  'vista.params-form.invalid.boolean': 'Nicht wahr oder falsch; gesendet als {{value}}',
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vista.params-form.invalid.document-type':
    'Kein Dokumenttyp in diesem Workspace; trotzdem gesendet',
  /** A whole number param (a slice bound) holds a fraction */
  'vista.params-form.invalid.integer': 'Keine ganze Zahl, die für Slices benötigt wird',
  /** A list param's value is not a list; it is sent anyway */
  'vista.params-form.invalid.list': 'Keine Liste; gesendet als {{value}}',
  /** A number param's value is not a number; it is sent anyway */
  'vista.params-form.invalid.number': 'Keine Zahl; als Text gesendet',
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vista.params-form.invalid.option': 'Kein bekannter Wert; trotzdem gesendet',
  /** A text param's value is not text; it is sent anyway */
  'vista.params-form.invalid.string': 'Kein Text; gesendet als {{value}}',
  /** Accessible label of an item input of a list param in the params form */
  'vista.params-form.item-label': '${{name}}, Element {{index}}',
  /** Placeholder of an item input of a list param in the params form */
  'vista.params-form.item-placeholder': 'Element',
  /** Under a params form field whose param has no value */
  'vista.params-form.missing':
    'Nicht festgelegt: Die Abfrage schlägt fehl, bis ein Wert vorhanden ist',
  /** Shown in the params form when the workspace schema could not be read */
  'vista.params-form.no-schema':
    'Typen stammen allein aus der Abfrage: Das Workspace-Schema konnte nicht gelesen werden.',
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vista.params-form.not-set': 'Nicht festgelegt',
  /** Button setting a date and time param to the current time */
  'vista.params-form.now': 'Jetzt',
  /** Button removing a param the query does not use from the params */
  'vista.params-form.remove': 'Entfernen',
  /** Accessible label of the button removing an item from a list param */
  'vista.params-form.remove-item': 'Element entfernen',
  /** Shown in the params form when the query does not parse */
  'vista.params-form.syntax-error':
    'Die Abfrage kann nicht geparst werden, daher werden ihre Parameter ohne Typen aufgelistet.',
  /** Type hint of a params form field: any JSON value */
  'vista.params-form.type.any': 'beliebiger JSON-Wert',
  /** Type hint of a params form field: true or false */
  'vista.params-form.type.boolean': 'wahr oder falsch',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vista.params-form.type.datetime': 'Datum und Uhrzeit (ISO 8601)',
  /** Type hint of a params form field: a document ID */
  'vista.params-form.type.document-id': 'Dokument-ID',
  /** Type hint of a params form field: one of the workspace's document types */
  'vista.params-form.type.document-type': 'Dokumenttyp',
  /** Type hint of a params form field: a whole number */
  'vista.params-form.type.integer': 'Ganzzahl',
  /** Type hint of a params form field: a list of values */
  'vista.params-form.type.list': 'Liste, jeweils {{type}}',
  /** Type hint of a params form field: a number */
  'vista.params-form.type.number': 'Zahl',
  /** Type hint of a params form field: text */
  'vista.params-form.type.string': 'Text',
  /** Heading of the params the query does not use, listed in the params form */
  'vista.params-form.unused': 'Von der Abfrage nicht verwendet',
  /** Before the expressions that use a param, in the params form */
  'vista.params-form.used-in': 'Verwendet in',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vista.params.fit-height': 'An Inhalt angepasst, {{height}} Pixel',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vista.params.resize':
    'Parameter in der Größe ändern: ziehen oder Pfeiltasten verwenden; Doppelklick oder Eingabetaste, um die Größe wieder an den Inhalt anzupassen',
  /** Tab showing the params as a form inferred from the query */
  'vista.params.view.form': 'Formular',
  /** Tab showing the params as JSON */
  'vista.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vista.params.view.label': 'Parameter bearbeiten als',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vista.paste.parsed': 'Abfrage aus eingefügter URL geladen',
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vista.paste.unavailable-variant':
    'Die eingefügte URL verwendete die Variante „{{variant}}“; wählen Sie sie in der Navigationsleiste aus, um die Abfrage damit auszuführen.',
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vista.paste.unknown-dataset':
    'Der Datensatz „{{dataset}}“ in der eingefügten URL ist hier nicht verfügbar, der aktuelle wird beibehalten.',
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vista.paste.unsupported-perspective':
    'Die Perspective in der eingefügten URL wird hier nicht unterstützt, die aktuelle wird beibehalten.',
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vista.paste.variants-disabled':
    'Die eingefügte URL verwendete die Variante „{{variant}}“; in diesem Workspace sind Varianten deaktiviert, daher wird die Abfrage ohne sie ausgeführt.',
  /** Accessible label for the query actions menu */
  'vista.query.actions': 'Abfrageaktionen',
  /** Tooltip when automatic refetching is not available for the API version */
  'vista.query.auto-refetch.unsupported':
    'Automatisches erneutes Abrufen erfordert API-Version v2021-03-25 oder höher.',
  /** Toast shown after the query was copied */
  'vista.query.copied': 'Abfrage in die Zwischenablage kopiert',
  /** Menu item copying the query text */
  'vista.query.copy': 'Abfrage kopieren',
  /** Menu item opening the export query dialog */
  'vista.query.export': 'Abfrage exportieren…',
  /** Menu item reformatting the query */
  'vista.query.prettify': 'Abfrage formatieren',
  /** Toast shown when the query could not be reformatted */
  'vista.query.prettify.failed': 'Abfrage konnte nicht formatiert werden',
  /** Menu item saving the query to the personal saved queries */
  'vista.query.save': 'Abfrage speichern',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vista.query.stop': 'Stopp',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vista.query.stop.description': 'Abruf stoppen',
  /** Explanation in the settings section about the redesigned experience */
  'vista.redesign.settings.description':
    'Sie verwenden das überarbeitete Vision-Tool. Wenn Sie zurückwechseln, bleiben Ihre Tabs und Einstellungen in diesem Browser für das nächste Mal erhalten.',
  /** Title of the settings section about the redesigned experience */
  'vista.redesign.settings.title': 'Überarbeitetes Vision (Beta)',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vista.redesign.switch-to-classic': 'Zum klassischen Vision wechseln',
  /** Toast button that switches to the redesigned tool */
  'vista.redesign.toast.accept': 'Jetzt ausprobieren',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.description':
    'Abfrage-Tabs, Live-Neuabruf, Antwortdetails und Exporte. Sie können jederzeit zurückwechseln.',
  /** Toast button that hides the invitation */
  'vista.redesign.toast.dismiss': 'Nicht jetzt',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.title': 'Das überarbeitete Vision ausprobieren',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vista.redesign.try': 'Neugestaltung ausprobieren',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vista.redesign.try.description':
    'Wechseln Sie zum überarbeiteten Vision, derzeit in der Beta-Phase. Sie können jederzeit über die Seitenleiste zurückwechseln.',
  /** Empty state of the response panel before anything was fetched */
  'vista.response.empty': 'Noch nichts abgerufen',
  /** Label for the payload size in the response tab */
  'vista.response.payload-size': 'Payload-Größe',
  /** Label for the sync tags in the response tab */
  'vista.response.sync-tags': 'Sync-Tags',
  /** Shown when the response carried no sync tags */
  'vista.response.sync-tags.none': 'Keine Sync-Tags in der Antwort',
  /** Accessible label for the result actions menu */
  'vista.result.actions': 'Ergebnisaktionen',
  /** Toast shown after the result was copied */
  'vista.result.copied': 'Ergebnis in die Zwischenablage kopiert',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vista.result.copied-value': '{{path}} kopiert',
  /** Menu item and button copying the result as JSON */
  'vista.result.copy': 'Ergebnis kopieren',
  /** Button next to each property in the result tree, copying its value */
  'vista.result.copy-value': 'Wert kopieren',
  /** Empty state of the result view */
  'vista.result.empty': 'Führen Sie die Abfrage aus, um hier das Ergebnis zu sehen',
  /** Button exporting the result as CSV */
  'vista.result.export-csv': 'CSV exportieren',
  /** Button exporting the result as JSON */
  'vista.result.export-json': 'JSON exportieren',
  /** Menu item opening the TypeScript export dialog */
  'vista.result.export-typescript': 'TypeScript exportieren …',
  /** Menu item opening the Zod export dialog */
  'vista.result.export-zod': 'Zod exportieren…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vista.result.graph.collapse': 'Inhalt ausblenden',
  /** Button fitting the whole graph in view */
  'vista.result.graph.fit': 'An Ansicht anpassen',
  /** Accessible label of the graph, saying how to move around in it */
  'vista.result.graph.label':
    'Ergebnisgraph: Ziehen zum Bewegen, Scrollen zum Zoomen; bei Fokus bewegen die Pfeiltasten, + und - zoomen, 0 passt an',
  /** Ends the note on a graph that leaves part of this result out */
  'vista.result.graph.left-out-hint': 'Die Baum- und JSON-Ansicht zeigen alles davon.',
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vista.result.graph.node-limit':
    'Es werden nur die ersten {{nodes}} Objekte und Arrays gezeichnet.',
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vista.result.graph.partial':
    'Für {{nodes}} werden nur die ersten {{rows}} Einträge aufgelistet.',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vista.result.graph.partial.node': '{{name}} ({{entries}} Einträge)',
  /** Title of the graph node of the result itself */
  'vista.result.graph.root': 'Ergebnis',
  /** Button zooming into the graph */
  'vista.result.graph.zoom-in': 'Vergrößern',
  /** Button zooming out of the graph */
  'vista.result.graph.zoom-out': 'Verkleinern',
  /** Tab showing the result as a graph of its objects and arrays */
  'vista.result.view.graph': 'Graph',
  /** Tab showing the result as indented JSON text, to select and copy from */
  'vista.result.view.json': 'JSON',
  /** Accessible label of the tabs that switch how the result shows */
  'vista.result.view.label': 'Ergebnisansicht',
  /** Tab showing the result as a tree to browse */
  'vista.result.view.tree': 'Baum',
  /** Empty state of the saved queries panel */
  'vista.saved.empty':
    'Noch keine gespeicherten Abfragen. Speichern Sie die aktuelle Abfrage mit der Schaltfläche +.',
  /** Empty state of a query list when the search matches nothing */
  'vista.saved.empty-search': 'Keine Abfragen entsprechen Ihrer Suche',
  /** Menu item loading a saved query into the active tab */
  'vista.saved.load-in-current-tab': 'In aktuellen Tab laden',
  /** Menu item opening a saved query in a new tab */
  'vista.saved.open-in-new-tab': 'In neuem Tab öffnen',
  /** Menu item renaming a saved query */
  'vista.saved.rename': 'Umbenennen',
  /** Accessible label for the button saving the current query */
  'vista.saved.save-current': 'Aktuelle Abfrage speichern',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vista.saved.unavailable-variant':
    'Diese gespeicherte Abfrage verwendete die Variante „{{variant}}“; wählen Sie sie in der Navigationsleiste aus, um die Abfrage damit auszuführen.',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vista.saved.unknown-dataset':
    'Der Datensatz „{{dataset}}“ dieser gespeicherten Abfrage ist hier nicht verfügbar; der aktuelle wird beibehalten.',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vista.saved.variants-disabled':
    'Diese gespeicherte Abfrage verwendete die Variante „{{variant}}“; in diesem Workspace sind Varianten deaktiviert, daher läuft die Abfrage ohne sie.',
  /** Button in the settings dialog that clears the stored state */
  'vista.settings.clear-storage': 'Speicher löschen',
  /** Confirmation button for clearing the storage */
  'vista.settings.clear-storage.confirm': 'Ja, Speicher leeren',
  /** Explanation of what clearing the storage does */
  'vista.settings.clear-storage.description':
    'Löscht deine persönlichen gespeicherten Abfragen und die Funktionsbibliothek, setzt die geöffneten Tabs und diese Standardeinstellungen in diesem Browser zurück und kehrt zum klassischen Vision-Tool zurück. Geteilte Abfragen bleiben erhalten.',
  /** Toast shown when the saved queries could not be cleared */
  'vista.settings.clear-storage.error': 'Die gespeicherten Abfragen konnten nicht gelöscht werden',
  /** Toast shown after the storage was cleared */
  'vista.settings.clear-storage.success': 'Speicher geleert',
  /** Explanation at the top of the settings dialog */
  'vista.settings.description':
    'Standardeinstellungen für neue Tabs. Geöffnete Tabs behalten ihre eigenen Optionen.',
  /** Explains the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.description':
    'Ein Feldpfad pro Zeile. Ein Pfad passt auf jeder Tiefe eines Ergebnisses, sodass _rev die Revision jedes darin enthaltenen Dokuments ausblendet. Jeder Diff kann sie dennoch anzeigen.',
  /** Button restoring the default fields left out of History diffs */
  'vista.settings.history-diff.reset': 'Auf Standardwerte zurücksetzen',
  /** Label of the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.title': 'In History-Diffs ausgeblendete Felder',
  /** Title of the settings dialog */
  'vista.settings.title': 'Einstellungen',
  /** Empty state of the shared queries panel */
  'vista.shared.empty':
    'Noch keine geteilten Abfragen vorhanden. Teile eine gespeicherte Abfrage, um sie allen Nutzern dieses Datasets zur Verfügung zu stellen.',
  /** Shortcut description: close dialogs and menus */
  'vista.shortcuts.close': 'Dialoge und Menüs schließen',
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vista.shortcuts.complete': 'Einen Funktionsnamen vervollständigen',
  /** Shortcut description: copy the query */
  'vista.shortcuts.copy-query': 'Die Abfrage kopieren',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vista.shortcuts.extract-function':
    'Die Projektion an der Cursorposition in eine Funktion extrahieren',
  /** Shortcut description: run the query */
  'vista.shortcuts.fetch': 'Die Abfrage ausführen',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vista.shortcuts.next-finding': 'Zum nächsten Lint-Befund springen',
  /** Shortcut description: reformat the query */
  'vista.shortcuts.prettify': 'Die Abfrage formatieren',
  /** Title of the keyboard shortcuts dialog */
  'vista.shortcuts.title': 'Tastaturkürzel',
  /** Sidebar toggle: show icons only */
  'vista.sidebar.collapse': 'Seitenleiste einklappen',
  /** Sidebar toggle: show labels next to the icons */
  'vista.sidebar.expand': 'Seitenleiste ausklappen',
  /** Accessible label for the sidebar navigation */
  'vista.sidebar.label': 'Vista-Seitenleiste',
  /** Sidebar item and drawer title for personal saved queries */
  'vista.sidebar.saved-queries': 'Gespeicherte Abfragen',
  /** Sidebar item opening the settings dialog */
  'vista.sidebar.settings': 'Einstellungen',
  /** Sidebar item and drawer title for shared queries */
  'vista.sidebar.shared-queries': 'Geteilte Abfragen',
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vista.sidebar.shortcuts': 'Tastaturkürzel',
  /** Empty state of the content source map panel */
  'vista.source-map.empty':
    'Keine Content Source Map in der Antwort vorhanden. Aktivieren Sie "Include content source map" unter Optionen und rufen Sie die Daten erneut ab.',
  /** Accessible label of the divider between the result and the response details panel */
  'vista.split.bottom-panel':
    'Größe des Antwortdetails-Panels ändern: ziehen oder Pfeiltasten verwenden; Pos1 und Ende springen zu den Grenzen, Eingabetaste setzt zurück',
  /** Accessible label of the divider between the request and response panes */
  'vista.split.request-response':
    'Größe der Anfrage- und Antwortbereiche ändern: ziehen oder Pfeiltasten verwenden; Pos1 und Ende springen zu den Grenzen, Eingabetaste setzt zurück',
  /** Accessible label for the button closing a query tab */
  'vista.tabs.close-tab': 'Tab schließen',
  /** Accessible label for the list of query tabs */
  'vista.tabs.label': 'Abfrage-Tabs',
  /** Accessible label for the button opening a new query tab */
  'vista.tabs.new-tab': 'Neuer Tab',
  /** Placeholder of the input renaming a tab */
  'vista.tabs.title-placeholder': 'Tab-Titel',
  /** Title of a tab whose query is still empty */
  'vista.tabs.untitled': 'Unbenannte Abfrage',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vista.webmcp.check-query': 'Eine GROQ-Abfrage in Vision prüfen',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vista.webmcp.describe-schema': 'Das Schema im Workspace in Vision beschreiben',
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vista.webmcp.explain-query': 'Eine GROQ-Abfrage in Vision erklären',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vista.webmcp.get-state': 'Den geöffneten Vision-Tab lesen',
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vista.webmcp.open-query': 'Eine GROQ-Abfrage in Vision öffnen',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vista.webmcp.preview-mutations': 'Mutationen in Vision als Vorschau ausführen',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vista.webmcp.run-query': 'Eine GROQ-Abfrage in Vision ausführen',
})
