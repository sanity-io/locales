import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Copia negli appunti',
  /** Label for deleting a query */
  'action.delete': 'Elimina',
  /** Label for editing a query's title */
  'action.edit-title': 'Modifica titolo',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Ferma',
  /** Label for setting up a listener */
  'action.listen-execute': 'Ascolta',
  /** Label for query loading table */
  'action.load-queries': 'Carica query',
  /** Label for loading a query */
  'action.load-query': 'Carica query',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Annulla',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Esegui',
  /** Label for saving a query */
  'action.save-personal-copy': 'Salva copia personale',
  /** Label for saving a personal query */
  'action.save-personal-query': 'Salva come personale',
  /** Label for saving a query */
  'action.save-query': 'Salva query',
  /** Label for saving a shared query */
  'action.save-shared-query': 'Salva come condivisa',
  /** Label for unsharing a query */
  'action.unshare': 'Annulla condivisione',
  /** Label for updating a query */
  'action.update': 'Aggiorna',

  /** Label for actions user can take */
  'label.actions': 'Azioni',
  /** Label for all saved queries */
  'label.all': 'Tutte',
  /** Label for saved queries that have been edited */
  'label.edited': 'Modificato',
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Nuovo',
  /** Label for query type "personal" */
  'label.personal': 'Personale',
  /** Label for savedAt date */
  'label.saved-at': 'Salvato il',
  /** Saved queries */
  'label.saved-queries': 'Query salvate',
  /** Search queries */
  'label.search-queries': 'Cerca query',
  /** Share query */
  'label.share': 'Condividi',
  /** Label for query type "shared" */
  'label.shared': 'Condivisa',
  /** Label for saved query type "team" */
  'label.team': 'Squadra',
  /** Label for untitled query fallback */
  'label.untitled-query': 'Senza titolo',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'I parametri non sono un JSON valido',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Parametri',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Colonna',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Linea',
  /** Extra explanation when a 400 is returned for a release perspective on an old API version */
  'query.error.unsupported-release-perspective':
    "Questa versione dell'API non supporta prospettive complesse. Usa {{apiVersion}} o versioni successive.",
  /** Extra explanation when a 400 is returned for a variant on an incompatible API version */
  'query.error.unsupported-variant':
    "Questa versione dell'API non supporta le varianti di contenuto. Usa la versione sperimentale dell'API ({{apiVersion}}).",
  /** Label for "Query" editor/input */
  'query.label': 'Query',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'URL della Query',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'Tempo inizio-fine',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'Esecuzione',
  /** Label for "Result" explorer/view */
  'result.label': 'Risultato',
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable': 'Il risultato non può essere codificato come CSV',
  /** Label for "Save result as" result action */
  'result.save-result-as-format': 'Salva il risultato come <SaveResultButtons/>',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'n/d',

  /** Query already saved error label */
  'save-query.already-saved': 'Query già salvata',
  /** Save error label */
  'save-query.error': 'Errore nel salvataggio della query',
  /** Save personal copy success label */
  'save-query.personal-copy-success': 'Copia personale salvata',
  /** Warning displayed before sharing a query */
  'save-query.share-warning':
    'Le query condivise vengono archiviate come documenti nel tuo dataset e vengono conteggiate nella quota documenti.',
  /** Save shared query success label */
  'save-query.shared-success': 'Query condivisa salvata',
  /** Save success label */
  'save-query.success': 'Query salvata',
  /** Save unshared query success label */
  'save-query.unshared-success': 'Query spostata in personale',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'Versione API',
  /** Tooltip shown when the API version selector is locked to vX because a variant is selected */
  'settings.api-version-locked-for-variant':
    'Quando è selezionata una variante, la versione API deve essere vX.',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'Versione API personalizzata',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Dataset',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'Versione API non valida',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'Altro',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspective',
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    'La prospettiva "<code>previewDrafts</code>" è stata rinominata in "<code>drafts</code>" ed è ora deprecata. Questo cambiamento è effettivo per tutte le versioni con supporto alla prospettiva (>= v2021-03-25).',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Leggi la documentazione',
  /** Option for selecting default perspective */
  'settings.perspectives.default': 'Nessuna prospettiva (default API)',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Le Perspectives consentono alla tua query di essere eseguita contro diverse "visualizzazioni" dei contenuti nel tuo dataset',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    'La prospettiva predefinita cambierà da "<code>raw</code>" a "<code>published</code>" in una futura versione dell\'API. Si prega di consultare la documentazione per maggiori dettagli.',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': 'Rilascio fissato',
  /** Label for the scheduled drafts perspective */
  'settings.perspectives.scheduled-drafts': 'Bozze pianificate',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspectives',

  /** Tooltip line of every control that calls Sanity Agent Actions, which bills AI credits */
  'vista.agent-actions.credits': 'Utilizza un credito AI per richiesta',
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vista.ai-credits.balance': '{{balance}} crediti AI rimanenti su {{quota}} questo mese.',
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vista.ai-credits.deficit':
    '{{used}} crediti AI utilizzati questo mese, {{deficit}} in più rispetto ai {{quota}} inclusi.',
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vista.ai-credits.limit.description':
    'La tua organizzazione ha utilizzato {{used}} dei {{quota}} crediti AI disponibili questo mese, quindi le Sanity Agent Actions sono sospese fino al mese prossimo o finché il limite di spesa non viene aumentato.',
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vista.ai-credits.limit.description-unknown':
    'La tua organizzazione ha raggiunto il limite di spesa dei crediti AI, quindi le Sanity Agent Actions sono sospese fino al mese prossimo o finché il limite non viene aumentato.',
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vista.ai-credits.limit.learn-more': 'Come funzionano i crediti AI',
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vista.ai-credits.limit.manage': 'Gestisci crediti AI',
  /** Title of the card shown where the organization is out of AI credits */
  'vista.ai-credits.limit.title': 'Crediti AI esauriti',
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vista.ai-credits.usage': 'Utilizzo AI',
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vista.ai-credits.used': '{{used}} crediti AI utilizzati questo mese.',
  /** Button in the request column's action bar naming the API version requests go out with */
  'vista.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vista.api-version.button-cdn': 'API CDN {{version}}',
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vista.api-version.button-invalid': 'Versione API incompleta',
  /** Tooltip of the API version button */
  'vista.api-version.tooltip':
    'Le query vengono eseguite sulla versione API {{version}}. Seleziona per cambiarla nelle Opzioni.',
  /** Tooltip of the API version button while queries go through the API CDN */
  'vista.api-version.tooltip-cdn':
    'Le query vengono eseguite sulla API CDN con versione API {{version}}. Seleziona per cambiarla nelle Opzioni.',
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vista.api-version.tooltip-cdn-blocked':
    'Le query vengono eseguite sulla API con versione API {{version}}, non sulla API CDN: questa non serve la prospettiva {{perspective}}. Seleziona per cambiarla nelle Opzioni.',
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vista.api-version.tooltip-invalid':
    'La versione API nelle Opzioni è incompleta, quindi non è possibile recuperare nulla finché non viene completata.',
  /** Tooltip of the API version button while a selected variant forces the experimental API */
  'vista.api-version.tooltip-locked':
    'Le query vengono eseguite sulla versione API {{version}}, richiesta dalla variante selezionata.',
  /** Label of the document after the change in the Delta panel */
  'vista.delta.after': 'Dopo',
  /** Label of the document before the change in the Delta panel */
  'vista.delta.before': 'Prima',
  /** What the Delta panel does */
  'vista.delta.description':
    'Esegue la query in modalità delta, come fanno i webhook basati su GROQ, i listener e le Sanity Functions: before() e after() sono un documento prima e dopo una modifica, @ è il documento dopo di essa, e delta::changedAny() li confronta. Viene eseguita nel browser con groq-js. Un lato vuoto significa nessun documento: la modifica lo crea o lo elimina.',
  /** Label of the document ID field in the Delta panel */
  'vista.delta.document-id': 'ID documento',
  /** Shown when there is a query but no documents to compare */
  'vista.delta.empty':
    'Carica la cronologia di un documento, oppure scrivi i documenti in Prima e Dopo.',
  /** Shown when the query fails in delta mode */
  'vista.delta.failed': 'Non è stato possibile eseguire la query in modalità delta: {{message}}',
  /** Shown when the After document is not valid JSON */
  'vista.delta.invalid-after': 'Dopo non è un JSON valido: {{message}}',
  /** Shown when the Before document is not valid JSON */
  'vista.delta.invalid-before': 'Before non è un JSON valido: {{message}}',
  /** Button loading the document's revisions from the History API */
  'vista.delta.load': 'Carica cronologia',
  /** Shown when the history could not be loaded */
  'vista.delta.load-failed': 'Non è stato possibile caricare la cronologia: {{message}}',
  /** A delta filter that is true for the change */
  'vista.delta.matches':
    'Corrisponde: un webhook o una funzione con questo filtro viene eseguito per questa modifica.',
  /** A delta filter that is false for the change */
  'vista.delta.no-match':
    'Non corrisponde: un webhook o una funzione con questo filtro non viene eseguito per questa modifica.',
  /** Shown while the query or its params cannot be sent */
  'vista.delta.no-request': 'Correggi la query e i suoi parametri per eseguirla in modalità delta.',
  /** Heading of the delta result */
  'vista.delta.result': 'Risultato',
  /** The After choice for a change that deletes the document */
  'vista.delta.revision.none-after': 'Niente: la modifica elimina il documento',
  /** The Before choice for a change that creates the document */
  'vista.delta.revision.none-before': 'Niente: la modifica crea il documento',
  /** A revision in the Before and After lists */
  'vista.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vista.drawer.close': 'Chiudi pannello',
  /** Explanation at the top of the Explain panel */
  'vista.explain.description':
    'Il piano di query è il modo in cui il Content Lake esegue la query: cosa legge, filtra e ordina durante la lettura, e cosa viene lasciato alle fasi successive. "Spiegamelo" usa le Sanity Agent Actions per descrivere la query e il suo piano in parole semplici, utilizzando un credito AI.',
  /** Shown in the Explain panel while there is no valid query to explain */
  'vista.explain.empty': 'Scrivi una query per spiegarla.',
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vista.explain.explain': 'Spiegamelo',
  /** Shown when the explanation could not be written */
  'vista.explain.failed': 'Non è stato possibile spiegare la query: {{message}}',
  /** A count the index computes without reading the documents */
  'vista.explain.insight.aggregate': "Conteggiato nell'indice, senza leggere i documenti.",
  /** A subquery the plan runs once for all documents */
  'vista.explain.insight.batched-subquery':
    'La sottoquery viene eseguita una sola volta per tutti i documenti, in un unico recupero in batch, non una volta per documento.',
  /** Part of the filter runs in memory; the expression follows */
  'vista.explain.insight.filter-in-memory':
    "Parte del filtro viene eseguita in memoria, dopo la lettura: ogni documento che l'indice lascia passare viene prima letto, il che rallenta su dataset di grandi dimensioni. I join (->) e le funzioni in un filtro non possono usare l'indice.",
  /** The index sorts and limits while reading */
  'vista.explain.insight.index-sort-limit': "L'indice ordina e limita i documenti mentre li legge.",
  /** The plan slices in memory */
  'vista.explain.insight.slice-in-memory':
    'Lo slice viene eseguito in memoria dopo la lettura, non come limite durante la lettura.',
  /** The plan sorts in memory */
  'vista.explain.insight.sort-in-memory':
    "L'ordinamento avviene in memoria, dopo aver letto ogni corrispondenza. Ordina per attributi che l'indice può ordinare.",
  /** Link under the plan insights to the guide on fast queries */
  'vista.explain.insights.guide': 'GROQ ad alte prestazioni',
  /** Heading of the plan insights in the Explain panel */
  'vista.explain.insights.title': 'Cosa risalta',
  /** Button in the Explain panel fetching the query plan */
  'vista.explain.plan': 'Mostra il piano di query',
  /** Shown when the query plan could not be fetched */
  'vista.explain.plan-failed': 'Non è stato possibile recuperare il piano di query: {{message}}',
  /** Heading of the query plan in the Explain panel */
  'vista.explain.plan-title': 'Piano della query',
  /** Toast shown after a code snippet was copied */
  'vista.export-query.copied': 'Snippet copiato negli appunti',
  /** Label for the button that copies a code snippet */
  'vista.export-query.copy': 'Copia snippet',
  /** Explanation at the top of the export query dialog */
  'vista.export-query.description':
    'Esegui questa query al di fuori dello studio con uno di questi snippet.',
  /** Title of the dialog that exports the query as code snippets */
  'vista.export-query.title': 'Esporta query',
  /** Note about authentication in the export query dialog */
  'vista.export-query.token-note':
    "I dataset privati richiedono un token API. I dataset pubblici possono omettere l'header Authorization.",
  /** Toast shown after the generated code was copied */
  'vista.export-types.copied': 'Codice copiato negli appunti',
  /** Label for the button that copies the generated code */
  'vista.export-types.copy': 'Copia codice',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vista.export-types.empty':
    'Esegui prima la query in modo da avere un risultato da cui derivare i tipi.',
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vista.export-types.schema-error': 'Valutazione dello schema non riuscita: {{message}}',
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vista.export-types.source.result':
    'Dedotto dal risultato ottenuto, poiché la query non è stata valutata rispetto allo schema del workspace.',
  /** Note shown when the types were derived from the workspace schema */
  'vista.export-types.source.schema':
    'Dedotto dallo schema del workspace, allo stesso modo in cui lo fa sanity typegen.',
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vista.export-types.stale-result':
    'Il risultato mostrato è stato ottenuto per una query o dei parametri diversi. Esegui prima la query corrente in modo da avere un risultato da cui derivare i tipi.',
  /** Title of the dialog exporting TypeScript types for the result */
  'vista.export-types.title-typescript': 'Esporta TypeScript',
  /** Title of the dialog exporting a Zod schema for the result */
  'vista.export-types.title-zod': 'Esporta Zod',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vista.functions.add': 'Aggiungi alla query',
  /** Shown on a library function the query declares the same way */
  'vista.functions.declared': 'In questa query',
  /** Lint action on a call of a library function the query does not declare */
  'vista.functions.editor.add-from-library': 'Dichiarala',
  /** Note in a function's hover documentation: the API version it needs */
  'vista.functions.editor.api-version': 'Richiede la versione API {{version}} o successiva',
  /** Detail of a completion for a custom function the query declares */
  'vista.functions.editor.completion-declared': 'in questa query',
  /** Detail of a completion for a library function, which declares it too */
  'vista.functions.editor.completion-library': 'dalla tua libreria',
  /** Note in the hover documentation of a custom function the query declares */
  'vista.functions.editor.declared-on': 'Funzione personalizzata, dichiarata alla riga {{line}}',
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vista.functions.editor.delta-only':
    'Funziona solo in modalità delta, dove webhook e Sanity Functions eseguono i loro filtri',
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vista.functions.editor.extract': 'Estrai in funzione',
  /** Note in the hover documentation of a library function the query does not declare */
  'vista.functions.editor.in-library':
    'Nella tua libreria di funzioni, non dichiarata in questa query',
  /** Link at the end of a built-in function's hover documentation */
  'vista.functions.editor.reference': 'Riferimento delle funzioni GROQ',
  /** Explanation under the library heading in the Functions panel */
  'vista.functions.library.description':
    'Conservate in questo browser per ogni dataset del progetto. I completamenti offrono queste funzioni e il lint propone di dichiararne una quando la query ne richiama una.',
  /** Shown in the Functions panel while the library is empty */
  'vista.functions.library.empty':
    'Salva una funzione dichiarata nella query per usarla in altre query.',
  /** Heading of the functions library in the Functions panel */
  'vista.functions.library.title': 'Libreria',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vista.functions.query.empty':
    "Dichiara funzioni personalizzate all'inizio della query, oppure posiziona il cursore in una proiezione, come author->{name}, e premi il pulsante di estrazione sopra l'editor ({{shortcut}}).",
  /** Heading of the functions the query declares in the Functions panel */
  'vista.functions.query.title': 'In questa query',
  /** Removes a function from the library */
  'vista.functions.remove': 'Rimuovi dalla libreria',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vista.functions.replace': 'Sostituisci nella query',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vista.functions.reveal': "Mostra {{name}} nell'editor",
  /** Button of a function the query declares that is not in the library yet */
  'vista.functions.save': 'Salva nella libreria',
  /** Shown on a function the query declares the way the library has it */
  'vista.functions.saved': 'Salvato',
  /** Button of a function the query declares differently from the library's version */
  'vista.functions.update': 'Aggiorna la libreria',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vista.generate.button': 'Genera query',
  /** Closes the generate query bar */
  'vista.generate.close': 'Chiudi',
  /** Explanation under the generate query field */
  'vista.generate.description':
    "Le Sanity Agent Actions scrivono il GROQ a partire dalla tua descrizione e dai tipi di documento, e il Content Lake verifica ogni tentativo; ogni tentativo consuma un credito AI. Sostituisce la query di questa scheda ed esegue; annulla nell'editor per ripristinare la query precedente.",
  /** Shown when no query could be generated, above the reason */
  'vista.generate.failed': 'Non è stato possibile generare la query',
  /** Accessible label of the description field in the generate query bar */
  'vista.generate.label': 'Cosa dovrebbe recuperare la query?',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vista.generate.open-anyway': "Apri l'ultimo tentativo",
  /** Placeholder of the description field in the generate query bar */
  'vista.generate.placeholder': 'I 10 autori più recenti, ordinati per cognome e poi per nome',
  /** Shown while the first attempt at a query is written */
  'vista.generate.progress': 'Scrittura della query…',
  /** Shown while a rejected attempt is retried */
  'vista.generate.progress-retry': 'Correzione della query (tentativo {{attempt}} di {{max}})…',
  /** Button generating the query */
  'vista.generate.submit': 'Genera',
  /** Badge on a history entry the API CDN answered */
  'vista.history.cdn': 'API CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vista.history.cdn-cache-hit': 'Cache CDN raggiunta',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vista.history.changed': 'Modificato',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vista.history.changes': 'Modifiche',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vista.history.changes-failed': 'Non è stato possibile mostrare le modifiche.',
  /** Button retrying to show the changes of a history entry */
  'vista.history.changes-retry': 'Riprova',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vista.history.compared-with': 'Confrontato con il fetch delle {{time}}',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vista.history.diff.params': 'Parametri',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vista.history.diff.query': 'Query',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vista.history.diff.query-formatting-only': 'È cambiata solo la formattazione',
  /** Label of the diff of the query result in a history entry's changes */
  'vista.history.diff.result': 'Risultato',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vista.history.diff.url': 'URL della richiesta',
  /** Empty state of the history panel */
  'vista.history.empty': 'Nessun fetch effettuato finora',
  /** Status label for a failed fetch in the history */
  'vista.history.failed': 'Non riuscito',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vista.history.hide-hidden': 'Nascondili',
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vista.history.hiding': 'Nasconde {{fields}}',
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vista.history.only-hidden-changed': 'Sono cambiati solo i campi nascosti',
  /** History reason: a tab opened with a generated query fetched it */
  'vista.history.reason.generated': 'Query generata',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vista.history.reason.link': 'Link aperto',
  /** History reason: a live event matched the query's sync tags */
  'vista.history.reason.live': 'Aggiornamento in tempo reale',
  /** History reason: the live connection asked every client to refetch */
  'vista.history.reason.live-restart': 'Connessione live riavviata',
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vista.history.reason.live-start': 'Fetch live avviato',
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vista.history.reason.load': 'Query caricata',
  /** History reason: the fetch button was pressed */
  'vista.history.reason.manual': 'Pulsante di fetch',
  /** History reason: mutations were applied from the Mutate panel */
  'vista.history.reason.mutation': 'Mutazioni applicate',
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vista.history.reason.options': 'Opzioni modificate',
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vista.history.reason.paste': 'URL incollato',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vista.history.reason.resume': 'Refetch automatico ripreso',
  /** History reason: the keyboard shortcut was used */
  'vista.history.reason.shortcut': 'Scorciatoia da tastiera',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vista.history.same-result': 'Stesso risultato',
  /** Button showing the hidden fields in a history entry's changes */
  'vista.history.show-hidden': 'Mostrali',
  /** Next to a history entry's changes while the hidden fields are shown */
  'vista.history.showing-hidden': 'Mostrando {{fields}}, nascosti per impostazione predefinita',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vista.history.too-large': 'Troppo grande per confrontare',
  /** A history entry whose result is the same as the previous result */
  'vista.history.unchanged': 'Nessuna modifica',
  /** Shown in the Lint panel while the query has no lint findings */
  'vista.lint.empty':
    "Nessun risultato del linter. I problemi rilevati dal linter GROQ nella query vengono elencati qui mentre digiti; selezionane uno per evidenziarlo nell'editor.",
  /** Where a lint finding sits in the query, shown under its message */
  'vista.lint.position': 'Riga {{line}}, colonna {{column}}',
  /** Severity badge of a lint finding */
  'vista.lint.severity.error': 'Errore',
  /** Severity badge of a lint finding */
  'vista.lint.severity.hint': 'Suggerimento',
  /** Severity badge of a lint finding */
  'vista.lint.severity.info': 'Informazione',
  /** Severity badge of a lint finding */
  'vista.lint.severity.warning': 'Avviso',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vista.lint.use-suggestion': 'Usa {{suggestion}}',
  /** Badge shown while a tab refetches automatically */
  'vista.live.active': 'Live',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vista.live.button': 'Recupero live',
  /** Tooltip of the Live button while automatic refetching is off */
  'vista.live.button.start':
    'Recupera, poi recupera di nuovo ogni volta che i documenti nel risultato cambiano',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vista.live.button.stop':
    'Interrompi il recupero quando i documenti nel risultato cambiano. Il recupero continua comunque su richiesta, per i risultati che nessuna modifica ai documenti riguarda, come now()',
  /** Error shown when the live connection breaks */
  'vista.live.error': 'Aggiornamenti live disconnessi: {{message}}',
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vista.live.stop': 'Interrompi live',
  /** Button in the Mutate panel adding a mutation to the list */
  'vista.mutate.add': 'Aggiungi mutazione',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vista.mutate.add.create': 'Crea un documento',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vista.mutate.add.delete': 'Elimina un documento',
  /** Adds a mutation deleting the documents of the shown result */
  'vista.mutate.add.delete-result': 'Elimina i documenti nel risultato',
  /** Adds a mutation patching a document, its ID to fill in */
  'vista.mutate.add.patch': 'Applica una patch a un documento',
  /** Adds a mutation patching the documents of the shown result */
  'vista.mutate.add.patch-result': 'Applica una patch ai documenti nel risultato',
  /** Button applying the mutations a dry run showed */
  'vista.mutate.apply': 'Applica a {{dataset}}',
  /** Heading of the error shown when applying the mutations failed */
  'vista.mutate.apply-failed': 'Le mutazioni non sono state applicate',
  /** Next to Apply while the mutations as they are have had no dry run */
  'vista.mutate.apply-needs-preview':
    "Applica invia quanto mostrato da un'esecuzione di prova: eseguine prima una.",
  /** Option giving array items without a _key one */
  'vista.mutate.auto-keys': "Aggiungi una _key agli elementi dell'array che ne sono privi",
  /** Under the option giving array items a _key */
  'vista.mutate.auto-keys.description':
    "Lo studio ne richiede una su ogni elemento dell'array per poterlo modificare.",
  /** Button showing a document's changes in the dry run */
  'vista.mutate.changes': 'Modifiche',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vista.mutate.changes-failed': 'Non è stato possibile mostrare le modifiche.',
  /** Button retrying to show a document's changes */
  'vista.mutate.changes-retry': 'Riprova',
  /** What the Mutate panel does */
  'vista.mutate.description':
    "Scrivi le mutazioni come richiesto dall'API delle mutazioni, in un elenco: create, createOrReplace, createIfNotExists, delete e patch, per ID o tramite una query GROQ. Un'esecuzione di prova mostra cosa farebbero a ciascun documento senza modificare nulla; Applica le scrive quindi nel dataset in un'unica transazione, con il tuo account.",
  /** What the API says went wrong with one of the mutations */
  'vista.mutate.failure-item': 'Mutazione {{index}}: {{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vista.mutate.generate.button': 'Genera mutazioni',
  /** Explanation under the generate mutations field */
  'vista.mutate.generate.description':
    "Le Sanity Agent Actions scrivono le mutazioni a partire dalla tua descrizione, dai documenti nel risultato e dai loro tipi, e un'esecuzione di prova verifica ogni tentativo; ogni tentativo utilizza un credito AI. Sostituiscono le mutazioni qui presenti, dove annulla le ripristina; non viene scritto nulla finché non le applichi.",
  /** Shown when no mutations could be generated, above the reason */
  'vista.mutate.generate.failed': 'Non è stato possibile generare le mutazioni',
  /** Accessible label of the description field in the generate mutations bar */
  'vista.mutate.generate.label': 'Cosa dovrebbero fare le mutazioni?',
  /** Placeholder of the description field in the generate mutations bar */
  'vista.mutate.generate.placeholder': 'Cambia il titolo dei documenti nel risultato in foobar',
  /** Shown while the first attempt at the mutations is written */
  'vista.mutate.generate.progress': 'Scrittura delle mutazioni…',
  /** Shown while an attempt the dry run turned down is retried */
  'vista.mutate.generate.progress-retry':
    'Correzione delle mutazioni (tentativo {{attempt}} di {{max}})…',
  /** Under the dry run: the fields the diffs leave out */
  'vista.mutate.hiding': 'Le modifiche escludono {{fields}}, come fa Cronologia.',
  /** Shown when the mutations are not valid JSON */
  'vista.mutate.invalid-json': 'Le mutazioni non sono JSON valido: {{message}}',
  /** Shown when a mutation does not name exactly one thing to do */
  'vista.mutate.invalid-mutation':
    'La mutazione {{index}} richiede esattamente uno tra create, createOrReplace, createIfNotExists, delete o patch.',
  /** Label of the mutations editor */
  'vista.mutate.mutations': 'Mutazioni',
  /** The dry run touched no documents */
  'vista.mutate.no-documents': 'Le mutazioni non interessano alcun documento.',
  /** Shown when the JSON is not a list of mutations */
  'vista.mutate.not-a-list':
    'Scrivi un elenco di mutazioni, una singola mutazione, o un corpo di richiesta con un elenco di mutazioni.',
  /** A document the mutations create */
  'vista.mutate.operation.create': 'Crea',
  /** A document the mutations delete */
  'vista.mutate.operation.delete': 'Elimina',
  /** A document the mutations touch without changing its content */
  'vista.mutate.operation.none': 'Nessuna modifica',
  /** A document the mutations change */
  'vista.mutate.operation.update': 'Aggiorna',
  /** Button running the mutations as a dry run */
  'vista.mutate.preview': 'Prova a secco',
  /** Heading of the error shown when the dry run failed */
  'vista.mutate.preview-failed': 'La prova a secco non è riuscita',
  /** Heading of the dry run's outcome */
  'vista.mutate.preview-heading': 'Prova a secco',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vista.mutate.stale':
    'Le mutazioni, il dataset o le opzioni sono cambiati dopo questa prova a secco. Eseguila di nuovo per applicarli.',
  /** How many documents the dry run changes and leaves as they are */
  'vista.mutate.summary': 'Modificati: {{changed}} · Invariati: {{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vista.network.cache': 'Cache',
  /** The API CDN answered from its cache */
  'vista.network.cache.hit': 'Hit',
  /** Under the details of a CDN cache hit */
  'vista.network.cache.hit-explained':
    "Il CDN ha risposto con una risposta memorizzata nella cache, da una posizione vicina a te; la query non ha raggiunto l'API.",
  /** The API CDN answered with a response this session had not seen */
  'vista.network.cache.miss': 'Miss, per quanto questa sessione possa dire',
  /** The API answered, which caches nothing */
  'vista.network.cache.none': "Nessuna, l'API risponde a ogni richiesta con contenuto aggiornato",
  /** Shown in the Network panel while there is no response */
  'vista.network.empty':
    'Esegui la query per vedere quale endpoint ha risposto, se da una cache, e dove è stata eseguita.',
  /** In the Network panel: the endpoint that answered */
  'vista.network.endpoint': 'Risposta di',
  /** The live API answered */
  'vista.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vista.network.endpoint.cdn': 'API CDN',
  /** In the Network panel: the region the query ran in */
  'vista.network.region': 'Query eseguita in',
  /** The response did not say where the query ran */
  'vista.network.region.unknown': 'Non riportato',
  /** In the Network panel: the round trip and the time on the server */
  'vista.network.timing': 'Tempo',
  /** The round trip and the server's time for the query, in milliseconds */
  'vista.network.timing.value': '{{e2e}}ms di round trip, {{server}}ms sul server',
  /** In the Network panel: the trace of the request, for Sanity support */
  'vista.network.trace': 'ID traccia',
  /** Hint in the Network panel while queries go to the API */
  'vista.network.use-cdn-hint':
    "Attiva Usa l'API CDN nelle Opzioni per inviare le query tramite il CDN.",
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vista.network.you': 'Tu',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vista.options.dataset.follows-workspace': 'Segue il workspace',
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vista.options.dataset.pin': 'Blocca un dataset',
  /** Hint under the dataset field while a dataset is pinned */
  'vista.options.dataset.pinned': "Bloccato; l'area di lavoro potrebbe usare un altro dataset",
  /** Button that makes the tab follow the workspace's dataset again */
  'vista.options.dataset.use-workspace': "Usa il dataset dell'area di lavoro",
  /** Label for the "Include content source map" switch */
  'vista.options.include-source-map': 'Includi mappa di origine dei contenuti',
  /** Description for the "Include content source map" switch */
  'vista.options.include-source-map.description':
    'Aggiunge resultSourceMap alla risposta, mostrata nella scheda Mappa di origine dei contenuti.',
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vista.options.perspective.global': 'Globale ({{name}})',
  /** Label of the switch that sends queries to the API CDN */
  'vista.options.use-cdn': 'Usa la API CDN',
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vista.options.use-cdn.anonymous':
    'Questo studio ti autentica con un cookie, che la API CDN non riceve mai: risponde come farebbe con un visitatore anonimo, mostrando ciò che un dataset pubblico mostra.',
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vista.options.use-cdn.blocked':
    "La API CDN non serve bozze o release, quindi le query con la prospettiva {{perspective}} vanno all'API. Con published o raw usano la CDN.",
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vista.options.use-cdn.blocked.title': "Le query vanno all'API, non alla CDN",
  /** Description of the API CDN switch */
  'vista.options.use-cdn.description':
    "Invia la query alla API CDN, come useCdn: true in @sanity/client, con le prospettive published e raw: drafts e release vanno sempre all'API. Le sue risposte sono memorizzate nella cache fino a un minuto; il pannello Rete mostra quando una proviene dalla cache.",
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vista.options.use-cdn.use-published': 'Usa la prospettiva published',
  /** Label of the variant field */
  'vista.options.variant-label': 'Variante',
  /** Variant option sending the navbar's variant, named */
  'vista.options.variant.global': 'Globale ({{name}})',
  /** Variant option sending the navbar's variant while none is selected there */
  'vista.options.variant.global-none': 'Globale (nessuna selezionata)',
  /** Variant option sending no variant */
  'vista.options.variant.none': 'Nessuna',
  /** Accessible label for collapsing a bottom panel */
  'vista.panel.collapse': 'Comprimi pannello',
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vista.panel.delta': 'Delta',
  /** Accessible label for expanding a bottom panel */
  'vista.panel.expand': 'Espandi pannello',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vista.panel.explain': 'Spiega',
  /** Label of the Functions tab in the response panel */
  'vista.panel.functions': 'Funzioni',
  /** Label of the "History" tab in the response panel */
  'vista.panel.history': 'Cronologia',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vista.panel.lint': 'Lint',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vista.panel.mutate': 'Modifica',
  /** Label of the Network tab in the response panel */
  'vista.panel.network': 'Rete',
  /** Label of the "Options" panel in the request column */
  'vista.panel.options': 'Opzioni',
  /** Label of the "Response" tab in the response panel */
  'vista.panel.response': 'Risposta',
  /** Label of the "Content Source Map" tab in the response panel */
  'vista.panel.source-map': 'Content Source Map',
  /** Button adding an item to a list param in the params form */
  'vista.params-form.add-item': 'Aggiungi elemento',
  /** Placeholder of a params form field that takes any JSON value */
  'vista.params-form.any-placeholder':
    'Qualsiasi valore JSON; altro testo viene inviato come stringa',
  /** Shown in the params form when the query uses no params */
  'vista.params-form.empty':
    'La query non utilizza parametri. Ogni $nome al suo interno ottiene un campo qui.',
  /** Shown in the params form while the params JSON cannot be parsed */
  'vista.params-form.invalid-json':
    'I parametri non sono JSON valido. Correggili nella vista JSON per modificarli qui.',
  /** A boolean param's value is not true or false; it is sent anyway */
  'vista.params-form.invalid.boolean': 'Non è true o false; inviato come {{value}}',
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vista.params-form.invalid.document-type':
    'Non è un tipo di documento in questo workspace; inviato comunque',
  /** A whole number param (a slice bound) holds a fraction */
  'vista.params-form.invalid.integer':
    'Non è un numero intero, necessario per le porzioni (slices)',
  /** A list param's value is not a list; it is sent anyway */
  'vista.params-form.invalid.list': 'Non è un elenco; inviato come {{value}}',
  /** A number param's value is not a number; it is sent anyway */
  'vista.params-form.invalid.number': 'Non è un numero; inviato come testo',
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vista.params-form.invalid.option': 'Non è uno dei valori noti; inviato comunque',
  /** A text param's value is not text; it is sent anyway */
  'vista.params-form.invalid.string': 'Non è testo; inviato come {{value}}',
  /** Accessible label of an item input of a list param in the params form */
  'vista.params-form.item-label': '${{name}}, elemento {{index}}',
  /** Placeholder of an item input of a list param in the params form */
  'vista.params-form.item-placeholder': 'Elemento',
  /** Under a params form field whose param has no value */
  'vista.params-form.missing': 'Non impostato: la query fallisce finché non ha un valore',
  /** Shown in the params form when the workspace schema could not be read */
  'vista.params-form.no-schema':
    'I tipi derivano solo dalla query: non è stato possibile leggere lo schema del workspace.',
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vista.params-form.not-set': 'Non impostato',
  /** Button setting a date and time param to the current time */
  'vista.params-form.now': 'Ora',
  /** Button removing a param the query does not use from the params */
  'vista.params-form.remove': 'Rimuovi',
  /** Accessible label of the button removing an item from a list param */
  'vista.params-form.remove-item': 'Rimuovi elemento',
  /** Shown in the params form when the query does not parse */
  'vista.params-form.syntax-error':
    'La query non viene analizzata correttamente, quindi i suoi parametri sono elencati senza tipi.',
  /** Type hint of a params form field: any JSON value */
  'vista.params-form.type.any': 'qualsiasi valore JSON',
  /** Type hint of a params form field: true or false */
  'vista.params-form.type.boolean': 'true o false',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vista.params-form.type.datetime': 'data e ora (ISO 8601)',
  /** Type hint of a params form field: a document ID */
  'vista.params-form.type.document-id': 'ID documento',
  /** Type hint of a params form field: one of the workspace's document types */
  'vista.params-form.type.document-type': 'tipo di documento',
  /** Type hint of a params form field: a whole number */
  'vista.params-form.type.integer': 'numero intero',
  /** Type hint of a params form field: a list of values */
  'vista.params-form.type.list': 'elenco, ciascuno {{type}}',
  /** Type hint of a params form field: a number */
  'vista.params-form.type.number': 'numero',
  /** Type hint of a params form field: text */
  'vista.params-form.type.string': 'testo',
  /** Heading of the params the query does not use, listed in the params form */
  'vista.params-form.unused': 'Non utilizzato dalla query',
  /** Before the expressions that use a param, in the params form */
  'vista.params-form.used-in': 'Utilizzato in',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vista.params.fit-height': 'Dimensionato al contenuto, {{height}} pixel',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vista.params.resize':
    'Ridimensiona i parametri: trascina o usa i tasti freccia; fai doppio clic o premi Invio per adattare nuovamente al contenuto',
  /** Tab showing the params as a form inferred from the query */
  'vista.params.view.form': 'Modulo',
  /** Tab showing the params as JSON */
  'vista.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vista.params.view.label': 'Modifica parametri come',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vista.paste.parsed': "Query caricata dall'URL incollato",
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vista.paste.unavailable-variant':
    'L\'URL incollato utilizzava la variante "{{variant}}"; selezionala nella barra di navigazione per eseguire la query con essa.',
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vista.paste.unknown-dataset':
    'Il dataset "{{dataset}}" nell\'URL incollato non è disponibile qui, viene mantenuto quello attuale.',
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vista.paste.unsupported-perspective':
    "La prospettiva nell'URL incollato non è supportata qui, viene mantenuta quella attuale.",
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vista.paste.variants-disabled':
    'L\'URL incollato utilizzava la variante "{{variant}}"; questo workspace ha le varianti disattivate, quindi la query viene eseguita senza di essa.',
  /** Accessible label for the query actions menu */
  'vista.query.actions': 'Azioni query',
  /** Tooltip when automatic refetching is not available for the API version */
  'vista.query.auto-refetch.unsupported':
    'Il recupero automatico richiede la versione API v2021-03-25 o successiva.',
  /** Toast shown after the query was copied */
  'vista.query.copied': 'Query copiata negli appunti',
  /** Menu item copying the query text */
  'vista.query.copy': 'Copia query',
  /** Menu item opening the export query dialog */
  'vista.query.export': 'Esporta query…',
  /** Menu item reformatting the query */
  'vista.query.prettify': 'Formatta query',
  /** Toast shown when the query could not be reformatted */
  'vista.query.prettify.failed': 'Impossibile formattare la query',
  /** Menu item saving the query to the personal saved queries */
  'vista.query.save': 'Salva query',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vista.query.stop': 'Interrompi',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vista.query.stop.description': 'Interrompi il recupero',
  /** Explanation in the settings section about the redesigned experience */
  'vista.redesign.settings.description':
    'Stai utilizzando la versione ridisegnata dello strumento Vision. Tornando indietro, le tue schede e impostazioni verranno mantenute in questo browser per la prossima volta che lo proverai.',
  /** Title of the settings section about the redesigned experience */
  'vista.redesign.settings.title': 'Vision ridisegnato (beta)',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vista.redesign.switch-to-classic': 'Passa a Vision classico',
  /** Toast button that switches to the redesigned tool */
  'vista.redesign.toast.accept': 'Provalo ora',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.description':
    'Schede delle query, recupero in tempo reale, dettagli delle risposte ed esportazioni. Puoi tornare indietro in qualsiasi momento.',
  /** Toast button that hides the invitation */
  'vista.redesign.toast.dismiss': 'Non ora',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.title': 'Prova il nuovo Vision ridisegnato',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vista.redesign.try': 'Prova il nuovo design',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vista.redesign.try.description':
    'Passa alla versione ridisegnata di Vision, in beta. Puoi tornare indietro in qualsiasi momento dalla sua barra laterale.',
  /** Empty state of the response panel before anything was fetched */
  'vista.response.empty': 'Nessun dato recuperato finora',
  /** Label for the payload size in the response tab */
  'vista.response.payload-size': 'Dimensione del payload',
  /** Label for the sync tags in the response tab */
  'vista.response.sync-tags': 'Tag di sincronizzazione',
  /** Shown when the response carried no sync tags */
  'vista.response.sync-tags.none': 'Nessun tag di sincronizzazione nella risposta',
  /** Accessible label for the result actions menu */
  'vista.result.actions': 'Azioni sul risultato',
  /** Toast shown after the result was copied */
  'vista.result.copied': 'Risultato copiato negli appunti',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vista.result.copied-value': '{{path}} copiato',
  /** Menu item and button copying the result as JSON */
  'vista.result.copy': 'Copia risultato',
  /** Button next to each property in the result tree, copying its value */
  'vista.result.copy-value': 'Copia valore',
  /** Empty state of the result view */
  'vista.result.empty': 'Esegui la query per vedere qui il suo risultato',
  /** Button exporting the result as CSV */
  'vista.result.export-csv': 'Esporta CSV',
  /** Button exporting the result as JSON */
  'vista.result.export-json': 'Esporta JSON',
  /** Menu item opening the TypeScript export dialog */
  'vista.result.export-typescript': 'Esporta TypeScript…',
  /** Menu item opening the Zod export dialog */
  'vista.result.export-zod': 'Esporta Zod…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vista.result.graph.collapse': 'Nascondi ciò che contiene',
  /** Button fitting the whole graph in view */
  'vista.result.graph.fit': 'Adatta alla vista',
  /** Accessible label of the graph, saying how to move around in it */
  'vista.result.graph.label':
    'Grafico del risultato: trascina per spostarti, scorri per ingrandire; se è attivo, le frecce spostano, + e - ingrandiscono/riducono, 0 adatta alla vista',
  /** Ends the note on a graph that leaves part of this result out */
  'vista.result.graph.left-out-hint': 'Le viste ad albero e JSON lo mostrano per intero.',
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vista.result.graph.node-limit': 'Vengono disegnati solo i primi {{nodes}} oggetti e array.',
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vista.result.graph.partial': 'Vengono elencate solo le prime {{rows}} voci per {{nodes}}.',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vista.result.graph.partial.node': '{{name}} ({{entries}} voci)',
  /** Title of the graph node of the result itself */
  'vista.result.graph.root': 'risultato',
  /** Button zooming into the graph */
  'vista.result.graph.zoom-in': 'Ingrandisci',
  /** Button zooming out of the graph */
  'vista.result.graph.zoom-out': 'Riduci',
  /** Tab showing the result as a graph of its objects and arrays */
  'vista.result.view.graph': 'Grafico',
  /** Tab showing the result as indented JSON text, to select and copy from */
  'vista.result.view.json': 'JSON',
  /** Accessible label of the tabs that switch how the result shows */
  'vista.result.view.label': 'Vista del risultato',
  /** Tab showing the result as a tree to browse */
  'vista.result.view.tree': 'Albero',
  /** Empty state of the saved queries panel */
  'vista.saved.empty':
    'Nessuna query salvata al momento. Salva la query corrente con il pulsante +.',
  /** Empty state of a query list when the search matches nothing */
  'vista.saved.empty-search': 'Nessuna query corrisponde alla tua ricerca',
  /** Menu item loading a saved query into the active tab */
  'vista.saved.load-in-current-tab': 'Carica nella scheda corrente',
  /** Menu item opening a saved query in a new tab */
  'vista.saved.open-in-new-tab': 'Apri in una nuova scheda',
  /** Menu item renaming a saved query */
  'vista.saved.rename': 'Rinomina',
  /** Accessible label for the button saving the current query */
  'vista.saved.save-current': 'Salva la query corrente',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vista.saved.unavailable-variant':
    'Questa query salvata utilizzava la variante "{{variant}}"; selezionala nella barra di navigazione per eseguire la query con essa.',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vista.saved.unknown-dataset':
    'Il dataset "{{dataset}}" di questa query salvata non è disponibile qui, viene mantenuto quello attuale.',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vista.saved.variants-disabled':
    'Questa query salvata utilizzava la variante "{{variant}}"; in questo workspace le varianti sono disattivate, quindi la query viene eseguita senza di essa.',
  /** Button in the settings dialog that clears the stored state */
  'vista.settings.clear-storage': 'Cancella archiviazione',
  /** Confirmation button for clearing the storage */
  'vista.settings.clear-storage.confirm': "Sì, cancella l'archiviazione",
  /** Explanation of what clearing the storage does */
  'vista.settings.clear-storage.description':
    'Elimina le query personali salvate e la libreria di funzioni, ripristina le schede aperte e queste impostazioni predefinite in questo browser, e torna allo strumento Vision classico. Le query condivise vengono mantenute.',
  /** Toast shown when the saved queries could not be cleared */
  'vista.settings.clear-storage.error': 'Impossibile cancellare le query salvate',
  /** Toast shown after the storage was cleared */
  'vista.settings.clear-storage.success': 'Archiviazione cancellata',
  /** Explanation at the top of the settings dialog */
  'vista.settings.description':
    'Valori predefiniti per le nuove schede. Le schede aperte mantengono le proprie opzioni.',
  /** Explains the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.description':
    'Un percorso di campo per riga. Un percorso corrisponde a qualsiasi profondità di un risultato, quindi _rev nasconde la revisione di ogni documento al suo interno. Ogni diff può comunque mostrarli.',
  /** Button restoring the default fields left out of History diffs */
  'vista.settings.history-diff.reset': 'Ripristina i valori predefiniti',
  /** Label of the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.title': 'Campi nascosti dai diff della cronologia',
  /** Title of the settings dialog */
  'vista.settings.title': 'Impostazioni',
  /** Empty state of the shared queries panel */
  'vista.shared.empty':
    'Nessuna query condivisa ancora. Condividi una query salvata per renderla disponibile a chiunque utilizzi questo dataset.',
  /** Shortcut description: close dialogs and menus */
  'vista.shortcuts.close': 'Chiudi le finestre di dialogo e i menu',
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vista.shortcuts.complete': 'Completa un nome di funzione',
  /** Shortcut description: copy the query */
  'vista.shortcuts.copy-query': 'Copia la query',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vista.shortcuts.extract-function': 'Estrai la proiezione al cursore in una funzione',
  /** Shortcut description: run the query */
  'vista.shortcuts.fetch': 'Esegui la query',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vista.shortcuts.next-finding': 'Vai al successivo risultato del linting',
  /** Shortcut description: reformat the query */
  'vista.shortcuts.prettify': 'Formatta la query',
  /** Title of the keyboard shortcuts dialog */
  'vista.shortcuts.title': 'Scorciatoie da tastiera',
  /** Sidebar toggle: show icons only */
  'vista.sidebar.collapse': 'Comprimi la barra laterale',
  /** Sidebar toggle: show labels next to the icons */
  'vista.sidebar.expand': 'Espandi la barra laterale',
  /** Accessible label for the sidebar navigation */
  'vista.sidebar.label': 'Barra laterale di Vista',
  /** Sidebar item and drawer title for personal saved queries */
  'vista.sidebar.saved-queries': 'Query salvate',
  /** Sidebar item opening the settings dialog */
  'vista.sidebar.settings': 'Impostazioni',
  /** Sidebar item and drawer title for shared queries */
  'vista.sidebar.shared-queries': 'Query condivise',
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vista.sidebar.shortcuts': 'Scorciatoie da tastiera',
  /** Empty state of the content source map panel */
  'vista.source-map.empty':
    'Nessuna mappa delle origini dei contenuti nella risposta. Attiva "Includi mappa delle origini dei contenuti" in Opzioni e recupera di nuovo.',
  /** Accessible label of the divider between the result and the response details panel */
  'vista.split.bottom-panel':
    'Ridimensiona il pannello dei dettagli della risposta: trascina o usa i tasti freccia; Home e Fine vanno ai limiti, Invio reimposta',
  /** Accessible label of the divider between the request and response panes */
  'vista.split.request-response':
    'Ridimensiona i riquadri di richiesta e risposta: trascina o usa i tasti freccia; Home e Fine vanno ai limiti, Invio reimposta',
  /** Accessible label for the button closing a query tab */
  'vista.tabs.close-tab': 'Chiudi scheda',
  /** Accessible label for the list of query tabs */
  'vista.tabs.label': 'Schede delle query',
  /** Accessible label for the button opening a new query tab */
  'vista.tabs.new-tab': 'Nuova scheda',
  /** Placeholder of the input renaming a tab */
  'vista.tabs.title-placeholder': 'Titolo scheda',
  /** Title of a tab whose query is still empty */
  'vista.tabs.untitled': 'Query senza titolo',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vista.webmcp.check-query': 'Controlla una query GROQ in Vision',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vista.webmcp.describe-schema': 'Descrivi lo schema in Vision',
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vista.webmcp.explain-query': 'Spiega una query GROQ in Vision',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vista.webmcp.get-state': 'Leggi la scheda Vision aperta',
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vista.webmcp.open-query': 'Apri una query GROQ in Vision',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vista.webmcp.preview-mutations': 'Anteprima delle mutazioni in Vision',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vista.webmcp.run-query': 'Esegui una query GROQ in Vision',
})
