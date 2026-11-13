import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Copia al porta-retalls',
  /** Label for deleting a query */
  'action.delete': 'Esborra',
  /** Label for editing a query's title */
  'action.edit-title': 'Edita el títol',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Atura',
  /** Label for setting up a listener */
  'action.listen-execute': 'Escolta',
  /** Label for query loading table */
  'action.load-queries': 'Carrega consultes',
  /** Label for loading a query */
  'action.load-query': 'Carrega consulta',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Cancel·la',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Obté',
  /** Label for saving a query */
  'action.save-personal-copy': 'Desa una còpia personal',
  /** Label for saving a personal query */
  'action.save-personal-query': 'Desa com a personal',
  /** Label for saving a query */
  'action.save-query': 'Desa consulta',
  /** Label for saving a shared query */
  'action.save-shared-query': 'Desa com a compartida',
  /** Label for unsharing a query */
  'action.unshare': 'Deixa de compartir',
  /** Label for updating a query */
  'action.update': 'Actualitza',

  /** Label for actions user can take */
  'label.actions': 'Accions',
  /** Label for all saved queries */
  'label.all': 'Totes',
  /** Label for saved queries that have been edited */
  'label.edited': 'Editat',
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Nou',
  /** Label for query type "personal" */
  'label.personal': 'Personal',
  /** Label for savedAt date */
  'label.saved-at': 'Desat el',
  /** Saved queries */
  'label.saved-queries': 'Consultes desades',
  /** Search queries */
  'label.search-queries': 'Cerca consultes',
  /** Share query */
  'label.share': 'Comparteix',
  /** Label for query type "shared" */
  'label.shared': 'Compartida',
  /** Label for saved query type "team" */
  'label.team': 'Equip',
  /** Label for untitled query fallback */
  'label.untitled-query': 'Sense títol',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'Els paràmetres no són JSON vàlid',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Paràmetres',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Columna',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Línia',
  /** Extra explanation when a 400 is returned for a release perspective on an old API version */
  'query.error.unsupported-release-perspective':
    "Aquesta versió de l'API no admet perspectives complexes. Utilitzeu {{apiVersion}} o una versió posterior.",
  /** Extra explanation when a 400 is returned for a variant on an incompatible API version */
  'query.error.unsupported-variant':
    "Aquesta versió de l'API no admet variants de contingut. Utilitzeu la versió experimental de l'API ({{apiVersion}}).",
  /** Label for "Query" editor/input */
  'query.label': 'Consulta',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'URL de la consulta',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'Temps complet',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'Execució',
  /** Label for "Result" explorer/view */
  'result.label': 'Resultat',
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable': 'El resultat no es pot codificar com a CSV',
  /** Label for "Save result as" result action */
  'result.save-result-as-format': 'Desa el resultat com a <SaveResultButtons/>',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'n/d',

  /** Query already saved error label */
  'save-query.already-saved': 'Consulta ja desada',
  /** Save error label */
  'save-query.error': 'Error en desar la consulta',
  /** Save personal copy success label */
  'save-query.personal-copy-success': 'Còpia personal desada',
  /** Warning displayed before sharing a query */
  'save-query.share-warning':
    "Les consultes compartides s'emmagatzemen com a documents al vostre dataset i compten per al vostre contingent de documents.",
  /** Save shared query success label */
  'save-query.shared-success': 'Consulta compartida desada',
  /** Save success label */
  'save-query.success': 'Consulta desada',
  /** Save unshared query success label */
  'save-query.unshared-success': 'Consulta moguda a personal',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': "Versió de l'API",
  /** Tooltip shown when the API version selector is locked because a variant is selected */
  'settings.api-version-locked-for-variant':
    "Quan se selecciona una variant, la versió de l'API ha de ser vX.",
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': "Versió personalitzada de l'API",
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Dataset',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': "Versió de l'API no vàlida",
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'Altra',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspectiva',
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    'La perspectiva "<code>previewDrafts</code>" ha estat renombrada a "<code>drafts</code>" i ara està obsoleta. Aquest canvi és efectiu per a totes les versions amb suport de perspectiva (>= v2021-03-25).',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Llegeix la documentació',
  /** Option for selecting default perspective */
  'settings.perspectives.default': "Cap perspectiva (predeterminada de l'API)",
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Les Perspectives permeten que la teva consulta s\'executi contra diferents "vistes" del contingut del teu dataset',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    'La perspectiva predeterminada canviarà de "<code>raw</code>" a "<code>published</code>" en una propera versió de l\'API. Si us plau, consulta la documentació per a més detalls.',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': 'Versió fixada',
  /** Label for the scheduled drafts perspective */
  'settings.perspectives.scheduled-drafts': 'Esborranys programats',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspectives',

  /** Tooltip line of every control that calls Sanity Agent Actions, which bills AI credits */
  'vista.agent-actions.credits': "Utilitza un crèdit d'IA per sol·licitud",
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vista.ai-credits.balance': "Queden {{balance}} de {{quota}} crèdits d'IA aquest mes.",
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vista.ai-credits.deficit':
    "S'han utilitzat {{used}} crèdits d'IA aquest mes, {{deficit}} més dels {{quota}} inclosos.",
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vista.ai-credits.limit.description':
    "La vostra organització ha utilitzat {{used}} dels seus {{quota}} crèdits d'IA aquest mes, de manera que les accions de l'Agent de Sanity estan en pausa fins al mes vinent o fins que s'augmenti el límit de despesa.",
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vista.ai-credits.limit.description-unknown':
    "La vostra organització ha arribat al seu límit de despesa de crèdits d'IA, de manera que les accions de l'Agent de Sanity estan en pausa fins al mes vinent o fins que s'augmenti el límit.",
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vista.ai-credits.limit.learn-more': "Com funcionen els crèdits d'IA",
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vista.ai-credits.limit.manage': "Gestiona els crèdits d'IA",
  /** Title of the card shown where the organization is out of AI credits */
  'vista.ai-credits.limit.title': "Sense crèdits d'IA",
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vista.ai-credits.usage': "Ús d'IA",
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vista.ai-credits.used': "S'han utilitzat {{used}} crèdits d'IA aquest mes.",
  /** Button in the request column's action bar naming the API version requests go out with */
  'vista.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vista.api-version.button-cdn': "CDN de l'API {{version}}",
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vista.api-version.button-invalid': "Versió de l'API incompleta",
  /** Tooltip of the API version button */
  'vista.api-version.tooltip':
    "Les consultes s'executen amb la versió {{version}} de l'API. Seleccioneu per canviar-la a Opcions.",
  /** Tooltip of the API version button while queries go through the API CDN */
  'vista.api-version.tooltip-cdn':
    "Les consultes s'executen a través de la CDN de l'API amb la versió {{version}} de l'API. Seleccioneu per canviar-la a Opcions.",
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vista.api-version.tooltip-cdn-blocked':
    "Les consultes s'executen contra l'API amb la versió {{version}}, no la CDN de l'API: no serveix la perspectiva {{perspective}}. Seleccioneu per canviar-la a Opcions.",
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vista.api-version.tooltip-invalid':
    "La versió de l'API a Opcions està incompleta, de manera que no es pot obtenir res fins que estigui completa.",
  /** Tooltip of the API version button while a selected variant forces the variants API version */
  'vista.api-version.tooltip-locked':
    "Les consultes s'executen amb la versió {{version}} de l'API, que la variant seleccionada necessita.",
  /** Label of the document after the change in the Delta panel */
  'vista.delta.after': 'Després',
  /** Label of the document before the change in the Delta panel */
  'vista.delta.before': 'Abans',
  /** What the Delta panel does */
  'vista.delta.description':
    "Executa la consulta en mode delta, tal com fan els webhooks, listeners i Sanity Functions basats en GROQ: before() i after() són un document abans i després d'un canvi, @ és el document després del canvi, i delta::changedAny() els compara. S'executa al navegador amb groq-js. Un costat buit significa cap document: el canvi el crea o l'elimina.",
  /** Label of the document ID field in the Delta panel */
  'vista.delta.document-id': 'ID del document',
  /** Shown when there is a query but no documents to compare */
  'vista.delta.empty':
    "Carregueu l'historial d'un document, o escriviu els documents a Abans i Després.",
  /** Shown when the query fails in delta mode */
  'vista.delta.failed': "No s'ha pogut executar la consulta en mode delta: {{message}}",
  /** Shown when the After document is not valid JSON */
  'vista.delta.invalid-after': 'Després no és un JSON vàlid: {{message}}',
  /** Shown when the Before document is not valid JSON */
  'vista.delta.invalid-before': 'Before no és un JSON vàlid: {{message}}',
  /** Button loading the document's revisions from the History API */
  'vista.delta.load': "Carrega l'historial",
  /** Shown when the history could not be loaded */
  'vista.delta.load-failed': "No s'ha pogut carregar l'historial: {{message}}",
  /** A delta filter that is true for the change */
  'vista.delta.matches':
    "Coincideix: un webhook o una funció amb aquest filtre s'executa per a aquest canvi.",
  /** A delta filter that is false for the change */
  'vista.delta.no-match':
    "No coincideix: un webhook o una funció amb aquest filtre no s'executa per a aquest canvi.",
  /** Shown while the query or its params cannot be sent */
  'vista.delta.no-request':
    'Corregeix la consulta i els seus paràmetres per executar-la en mode delta.',
  /** Heading of the delta result */
  'vista.delta.result': 'Resultat',
  /** The After choice for a change that deletes the document */
  'vista.delta.revision.none-after': 'Res: el canvi elimina el document',
  /** The Before choice for a change that creates the document */
  'vista.delta.revision.none-before': 'Res: el canvi crea el document',
  /** A revision in the Before and After lists */
  'vista.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vista.drawer.close': 'Tanca el panell',
  /** Explanation at the top of the Explain panel */
  'vista.explain.description':
    "El pla de consulta és la manera com el Content Lake executa la consulta: què llegeix, filtra i ordena mentre llegeix, i què es deixa per a passos posteriors. Explica-m'ho fa servir les Accions de l'Agent Sanity per descriure la consulta i el seu pla en paraules planeres, cosa que consumeix un crèdit d'IA.",
  /** Shown in the Explain panel while there is no valid query to explain */
  'vista.explain.empty': 'Escriu una consulta per explicar-la.',
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vista.explain.explain': "Explica-m'ho",
  /** Shown when the explanation could not be written */
  'vista.explain.failed': "No s'ha pogut explicar la consulta: {{message}}",
  /** A count the index computes without reading the documents */
  'vista.explain.insight.aggregate': "Comptat a l'índex, sense llegir els documents.",
  /** A subquery the plan runs once for all documents */
  'vista.explain.insight.batched-subquery':
    "La subconsulta s'executa una vegada per a tots els documents, en una sola recuperació per lots, no una vegada per document.",
  /** Part of the filter runs in memory; the expression follows */
  'vista.explain.insight.filter-in-memory':
    "Part del filtre s'executa en memòria, després de la lectura: cada document que l'índex deixa passar es llegeix primer, cosa que esdevé lenta en conjunts de dades grans. Les unions (->) i les funcions en un filtre no poden utilitzar l'índex.",
  /** The index sorts and limits while reading */
  'vista.explain.insight.index-sort-limit':
    "L'índex ordena i limita els documents mentre els llegeix.",
  /** The plan slices in memory */
  'vista.explain.insight.slice-in-memory':
    'El tall es fa en memòria després de la lectura, no com a límit durant la lectura.',
  /** The plan sorts in memory */
  'vista.explain.insight.sort-in-memory':
    "L'ordenació es fa en memòria, després de llegir totes les coincidències. Ordena per atributs que l'índex pugui ordenar.",
  /** Link under the plan insights to the guide on fast queries */
  'vista.explain.insights.guide': "GROQ d'alt rendiment",
  /** Heading of the plan insights in the Explain panel */
  'vista.explain.insights.title': 'Què destaca',
  /** Button in the Explain panel fetching the query plan */
  'vista.explain.plan': 'Mostra el pla de consulta',
  /** Shown when the query plan could not be fetched */
  'vista.explain.plan-failed': "No s'ha pogut obtenir el pla de consulta: {{message}}",
  /** Heading of the query plan in the Explain panel */
  'vista.explain.plan-title': 'Pla de consulta',
  /** Toast shown after a code snippet was copied */
  'vista.export-query.copied': 'Fragment copiat al porta-retalls',
  /** Label for the button that copies a code snippet */
  'vista.export-query.copy': 'Copia el fragment',
  /** Explanation at the top of the export query dialog */
  'vista.export-query.description':
    "Executa aquesta consulta fora de l'estudi amb un d'aquests fragments.",
  /** Title of the dialog that exports the query as code snippets */
  'vista.export-query.title': 'Exporta la consulta',
  /** Note about authentication in the export query dialog */
  'vista.export-query.token-note':
    "Els conjunts de dades privats necessiten un token d'API. Els conjunts de dades públics poden ometre la capçalera Authorization.",
  /** Toast shown after the generated code was copied */
  'vista.export-types.copied': 'Codi copiat al porta-retalls',
  /** Label for the button that copies the generated code */
  'vista.export-types.copy': 'Copia el codi',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vista.export-types.empty':
    'Primer obtén la consulta perquè hi hagi un resultat del qual derivar els tipus.',
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vista.export-types.schema-error': "L'avaluació de l'esquema ha fallat: {{message}}",
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vista.export-types.source.result':
    "Inferit a partir del resultat obtingut, ja que la consulta no s'ha pogut avaluar segons l'esquema de l'espai de treball.",
  /** Note shown when the types were derived from the workspace schema */
  'vista.export-types.source.schema':
    "Inferit a partir de l'esquema de l'espai de treball, de la mateixa manera que ho fa sanity typegen.",
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vista.export-types.stale-result':
    "El resultat mostrat s'ha obtingut per a una consulta o uns paràmetres diferents. Primer obtén la consulta actual perquè hi hagi un resultat del qual derivar els tipus.",
  /** Title of the dialog exporting TypeScript types for the result */
  'vista.export-types.title-typescript': 'Exporta TypeScript',
  /** Title of the dialog exporting a Zod schema for the result */
  'vista.export-types.title-zod': 'Exporta Zod',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vista.functions.add': 'Afegeix a la consulta',
  /** Shown on a library function the query declares the same way */
  'vista.functions.declared': 'En aquesta consulta',
  /** Lint action on a call of a library function the query does not declare */
  'vista.functions.editor.add-from-library': 'Declara-la',
  /** Note in a function's hover documentation: the API version it needs */
  'vista.functions.editor.api-version': "Necessita la versió {{version}} de l'API o posterior",
  /** Detail of a completion for a custom function the query declares */
  'vista.functions.editor.completion-declared': 'en aquesta consulta',
  /** Detail of a completion for a library function, which declares it too */
  'vista.functions.editor.completion-library': 'de la teva biblioteca',
  /** Note in the hover documentation of a custom function the query declares */
  'vista.functions.editor.declared-on': 'Funció personalitzada, declarada a la línia {{line}}',
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vista.functions.editor.delta-only':
    'Només funciona en mode delta, on els webhooks i les Sanity Functions executen els seus filtres',
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vista.functions.editor.extract': 'Extreu a una funció',
  /** Note in the hover documentation of a library function the query does not declare */
  'vista.functions.editor.in-library':
    'A la teva biblioteca de funcions, no declarada en aquesta consulta',
  /** Link at the end of a built-in function's hover documentation */
  'vista.functions.editor.reference': 'Referència de funcions GROQ',
  /** Explanation under the library heading in the Functions panel */
  'vista.functions.library.description':
    'Es manté en aquest navegador per a cada dataset del projecte. Les complecions ofereixen aquestes funcions, i el lint ofereix declarar-ne una que la consulta crida.',
  /** Shown in the Functions panel while the library is empty */
  'vista.functions.library.empty':
    'Desa una funció que la consulta declara per utilitzar-la en altres consultes.',
  /** Heading of the functions library in the Functions panel */
  'vista.functions.library.title': 'Biblioteca',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vista.functions.query.empty':
    "Declara funcions personalitzades a la part superior de la consulta, o posa el cursor en una projecció, com author->{name}, i prem el botó d'extracció sobre l'editor ({{shortcut}}).",
  /** Heading of the functions the query declares in the Functions panel */
  'vista.functions.query.title': 'En aquesta consulta',
  /** Removes a function from the library */
  'vista.functions.remove': 'Elimina de la biblioteca',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vista.functions.replace': 'Substitueix a la consulta',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vista.functions.reveal': "Mostra {{name}} a l'editor",
  /** Button of a function the query declares that is not in the library yet */
  'vista.functions.save': 'Desa a la biblioteca',
  /** Shown on a function the query declares the way the library has it */
  'vista.functions.saved': 'Desat',
  /** Button of a function the query declares differently from the library's version */
  'vista.functions.update': 'Actualitza la biblioteca',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vista.generate.button': 'Genera la consulta',
  /** Closes the generate query bar */
  'vista.generate.close': 'Tanca',
  /** Explanation under the generate query field */
  'vista.generate.description':
    "Les Sanity Agent Actions escriuen el GROQ a partir de la teva descripció i els tipus de document, i el Content Lake comprova cada intent; cada intent utilitza un crèdit d'IA. Això substitueix la consulta d'aquesta pestanya i s'executa; desfer a l'editor recupera la consulta anterior.",
  /** Shown when no query could be generated, above the reason */
  'vista.generate.failed': "No s'ha pogut generar la consulta",
  /** Accessible label of the description field in the generate query bar */
  'vista.generate.label': 'Què hauria de recuperar la consulta?',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vista.generate.open-anyway': "Obre l'últim intent",
  /** Placeholder of the description field in the generate query bar */
  'vista.generate.placeholder': 'Els 10 autors més recents, ordenats per cognom i després pel nom',
  /** Shown while the first attempt at a query is written */
  'vista.generate.progress': 'Escrivint la consulta…',
  /** Shown while a rejected attempt is retried */
  'vista.generate.progress-retry': 'Corregint la consulta (intent {{attempt}} de {{max}})…',
  /** Button generating the query */
  'vista.generate.submit': 'Genera',
  /** Badge on a history entry the API CDN answered */
  'vista.history.cdn': 'API CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vista.history.cdn-cache-hit': 'Encert de memòria cau CDN',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vista.history.changed': 'Canviat',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vista.history.changes': 'Canvis',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vista.history.changes-failed': "No s'han pogut mostrar els canvis.",
  /** Button retrying to show the changes of a history entry */
  'vista.history.changes-retry': 'Reintenta',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vista.history.compared-with': 'Comparat amb la consulta de les {{time}}',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vista.history.diff.params': 'Paràmetres',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vista.history.diff.query': 'Consulta',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vista.history.diff.query-formatting-only': 'Només ha canviat el format',
  /** Label of the diff of the query result in a history entry's changes */
  'vista.history.diff.result': 'Resultat',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vista.history.diff.url': 'URL de la sol·licitud',
  /** Empty state of the history panel */
  'vista.history.empty': "Encara no s'ha obtingut res",
  /** Status label for a failed fetch in the history */
  'vista.history.failed': 'Ha fallat',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vista.history.hide-hidden': "Amaga'ls",
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vista.history.hiding': "S'amaguen {{fields}}",
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vista.history.only-hidden-changed': 'Només han canviat els camps ocults',
  /** History reason: a tab opened with a generated query fetched it */
  'vista.history.reason.generated': 'Consulta generada',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vista.history.reason.link': 'Enllaç obert',
  /** History reason: a live event matched the query's sync tags */
  'vista.history.reason.live': 'Actualització en directe',
  /** History reason: the live connection asked every client to refetch */
  'vista.history.reason.live-restart': "S'ha reiniciat la connexió en directe",
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vista.history.reason.live-start': "S'ha iniciat l'obtenció en directe",
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vista.history.reason.load': 'Consulta carregada',
  /** History reason: the fetch button was pressed */
  'vista.history.reason.manual': "Botó d'obtenció",
  /** History reason: mutations were applied from the Mutate panel */
  'vista.history.reason.mutation': "S'han aplicat mutacions",
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vista.history.reason.options': "S'han canviat les opcions",
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vista.history.reason.paste': 'URL enganxada',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vista.history.reason.resume': "S'ha reprès l'obtenció automàtica",
  /** History reason: the keyboard shortcut was used */
  'vista.history.reason.shortcut': 'Drecera de teclat',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vista.history.same-result': 'Mateix resultat',
  /** Button showing the hidden fields in a history entry's changes */
  'vista.history.show-hidden': "Mostra'ls",
  /** Next to a history entry's changes while the hidden fields are shown */
  'vista.history.showing-hidden': 'Mostrant {{fields}}, ocults per defecte',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vista.history.too-large': 'Massa gran per comparar',
  /** A history entry whose result is the same as the previous result */
  'vista.history.unchanged': 'Sense canvis',
  /** Shown in the Lint panel while the query has no lint findings */
  'vista.lint.empty':
    "Cap troballa de lint. Els problemes que el linter de GROQ detecta a la consulta es llisten aquí mentre escrius; selecciona'n un per seleccionar-lo a l'editor.",
  /** Where a lint finding sits in the query, shown under its message */
  'vista.lint.position': 'Línia {{line}}, columna {{column}}',
  /** Severity badge of a lint finding */
  'vista.lint.severity.error': 'Error',
  /** Severity badge of a lint finding */
  'vista.lint.severity.hint': 'Suggeriment',
  /** Severity badge of a lint finding */
  'vista.lint.severity.info': 'Informació',
  /** Severity badge of a lint finding */
  'vista.lint.severity.warning': 'Advertència',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vista.lint.use-suggestion': 'Utilitza {{suggestion}}',
  /** Badge shown while a tab refetches automatically */
  'vista.live.active': 'En directe',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vista.live.button': 'Consulta en directe',
  /** Tooltip of the Live button while automatic refetching is off */
  'vista.live.button.start':
    'Consulta, i torna a consultar cada cop que els documents del resultat canviïn',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vista.live.button.stop':
    'Atura la consulta automàtica quan els documents del resultat canviïn. La consulta encara es pot fer a demanda, per a resultats que cap canvi de document afecta, com now()',
  /** Error shown when the live connection breaks */
  'vista.live.error': 'Actualitzacions en directe desconnectades: {{message}}',
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vista.live.stop': 'Atura el directe',
  /** Button in the Mutate panel adding a mutation to the list */
  'vista.mutate.add': 'Afegeix una mutació',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vista.mutate.add.create': 'Crea un document',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vista.mutate.add.delete': 'Suprimeix un document',
  /** Adds a mutation deleting the documents of the shown result */
  'vista.mutate.add.delete-result': 'Suprimeix els documents del resultat',
  /** Adds a mutation patching a document, its ID to fill in */
  'vista.mutate.add.patch': 'Apedaça un document',
  /** Adds a mutation patching the documents of the shown result */
  'vista.mutate.add.patch-result': 'Apedaça els documents del resultat',
  /** Button applying the mutations a dry run showed */
  'vista.mutate.apply': 'Aplica a {{dataset}}',
  /** Heading of the error shown when applying the mutations failed */
  'vista.mutate.apply-failed': "No s'han aplicat les mutacions",
  /** Next to Apply while the mutations as they are have had no dry run */
  'vista.mutate.apply-needs-preview':
    'Aplicar envia el que va mostrar una execució de prova: executeu-ne una primer.',
  /** Option giving array items without a _key one */
  'vista.mutate.auto-keys': 'Afegeix una _key als elements de la matriu que no en tenen cap',
  /** Under the option giving array items a _key */
  'vista.mutate.auto-keys.description':
    "L'estudi necessita una a cada element de la matriu per poder-lo editar.",
  /** Button showing a document's changes in the dry run */
  'vista.mutate.changes': 'Canvis',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vista.mutate.changes-failed': "No s'han pogut mostrar els canvis.",
  /** Button retrying to show a document's changes */
  'vista.mutate.changes-retry': 'Torna-ho a provar',
  /** What the Mutate panel does */
  'vista.mutate.description':
    'Escriviu les mutacions tal com les accepta la Mutations API, en una llista: create, createOrReplace, createIfNotExists, delete i patch, per ID o mitjançant una consulta GROQ. Una execució de prova mostra què farien a cada document sense canviar res; Aplicar les escriu llavors al dataset en una sola transacció, amb el vostre compte.',
  /** What the API says went wrong with one of the mutations */
  'vista.mutate.failure-item': 'Mutació {{index}}: {{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vista.mutate.generate.button': 'Genera mutacions',
  /** Explanation under the generate mutations field */
  'vista.mutate.generate.description':
    "Les Sanity Agent Actions escriuen les mutacions a partir de la vostra descripció, els documents del resultat i els seus tipus, i una execució de prova comprova cada intent; cada intent utilitza un crèdit d'IA. Substitueixen les mutacions d'aquí, on desfer les recupera; no s'escriu res fins que les apliqueu.",
  /** Shown when no mutations could be generated, above the reason */
  'vista.mutate.generate.failed': "No s'han pogut generar les mutacions",
  /** Accessible label of the description field in the generate mutations bar */
  'vista.mutate.generate.label': 'Què haurien de fer les mutacions?',
  /** Placeholder of the description field in the generate mutations bar */
  'vista.mutate.generate.placeholder': 'Canvia el títol dels documents del resultat a foobar',
  /** Shown while the first attempt at the mutations is written */
  'vista.mutate.generate.progress': 'Escrivint les mutacions…',
  /** Shown while an attempt the dry run turned down is retried */
  'vista.mutate.generate.progress-retry':
    'Corregint les mutacions (intent {{attempt}} de {{max}})…',
  /** Under the dry run: the fields the diffs leave out */
  'vista.mutate.hiding': "Els canvis deixen fora {{fields}}, tal com fa l'Historial.",
  /** Shown when the mutations are not valid JSON */
  'vista.mutate.invalid-json': 'Les mutacions no són un JSON vàlid: {{message}}',
  /** Shown when a mutation does not name exactly one thing to do */
  'vista.mutate.invalid-mutation':
    'La mutació {{index}} necessita exactament una de create, createOrReplace, createIfNotExists, delete o patch.',
  /** Label of the mutations editor */
  'vista.mutate.mutations': 'Mutacions',
  /** The dry run touched no documents */
  'vista.mutate.no-documents': 'Les mutacions no afecten cap document.',
  /** Shown when the JSON is not a list of mutations */
  'vista.mutate.not-a-list':
    'Escriviu una llista de mutacions, una sola mutació, o un cos de sol·licitud amb una llista de mutacions.',
  /** A document the mutations create */
  'vista.mutate.operation.create': 'Crea',
  /** A document the mutations delete */
  'vista.mutate.operation.delete': 'Suprimeix',
  /** A document the mutations touch without changing its content */
  'vista.mutate.operation.none': 'Sense canvis',
  /** A document the mutations change */
  'vista.mutate.operation.update': 'Actualitza',
  /** Button running the mutations as a dry run */
  'vista.mutate.preview': 'Simulació',
  /** Heading of the error shown when the dry run failed */
  'vista.mutate.preview-failed': 'La simulació ha fallat',
  /** Heading of the dry run's outcome */
  'vista.mutate.preview-heading': 'Simulació',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vista.mutate.stale':
    "Les mutacions, el dataset o les opcions han canviat des d'aquesta simulació. Torna a executar-la per aplicar-les.",
  /** How many documents the dry run changes and leaves as they are */
  'vista.mutate.summary': 'Canviats: {{changed}} · Sense canvis: {{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vista.network.cache': 'Memòria cau',
  /** The API CDN answered from its cache */
  'vista.network.cache.hit': 'Encert',
  /** Under the details of a CDN cache hit */
  'vista.network.cache.hit-explained':
    "La CDN ha respost amb una resposta que tenia a la memòria cau, des d'una ubicació a prop teu; la consulta no ha arribat a l'API.",
  /** The API CDN answered with a response this session had not seen */
  'vista.network.cache.miss': 'Fallada, pel que aquesta sessió pot determinar',
  /** The API answered, which caches nothing */
  'vista.network.cache.none': "Cap, l'API respon cada petició amb contingut actualitzat",
  /** Shown in the Network panel while there is no response */
  'vista.network.empty':
    "Executa la consulta per veure quin punt final l'ha respost, si ha estat des d'una memòria cau, i on s'ha executat.",
  /** In the Network panel: the endpoint that answered */
  'vista.network.endpoint': 'Respost per',
  /** The live API answered */
  'vista.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vista.network.endpoint.cdn': 'API CDN',
  /** In the Network panel: the region the query ran in */
  'vista.network.region': 'Consulta executada a',
  /** The response did not say where the query ran */
  'vista.network.region.unknown': 'No informat',
  /** In the Network panel: the round trip and the time on the server */
  'vista.network.timing': 'Temps',
  /** The round trip and the server's time for the query, in milliseconds */
  'vista.network.timing.value': "{{e2e}}ms d'anada i tornada, {{server}}ms al servidor",
  /** In the Network panel: the trace of the request, for Sanity support */
  'vista.network.trace': 'ID de traça',
  /** Hint in the Network panel while queries go to the API */
  'vista.network.use-cdn-hint':
    "Activa Utilitza la CDN de l'API a Opcions per enviar les consultes a través de la CDN.",
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vista.network.you': 'Tu',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vista.options.dataset.follows-workspace': "Segueix l'espai de treball",
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vista.options.dataset.pin': 'Fixa un dataset',
  /** Hint under the dataset field while a dataset is pinned */
  'vista.options.dataset.pinned':
    "Fixat; és possible que l'espai de treball utilitzi un altre conjunt de dades",
  /** Button that makes the tab follow the workspace's dataset again */
  'vista.options.dataset.use-workspace': "Utilitza el conjunt de dades de l'espai de treball",
  /** Label for the "Include content source map" switch */
  'vista.options.include-source-map': "Inclou el mapa d'origen del contingut",
  /** Description for the "Include content source map" switch */
  'vista.options.include-source-map.description':
    "Afegeix resultSourceMap a la resposta, que es mostra a la pestanya Mapa d'origen del contingut.",
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vista.options.perspective.global': 'Global ({{name}})',
  /** Label of the switch that sends queries to the API CDN */
  'vista.options.use-cdn': "Utilitza la CDN de l'API",
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vista.options.use-cdn.anonymous':
    "Aquest estudi us inicia la sessió amb una galeta, que la CDN de l'API mai rep: respon com ho faria amb un visitant anònim, amb el que mostra un conjunt de dades públic.",
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vista.options.use-cdn.blocked':
    "La CDN de l'API no serveix esborranys ni llançaments, de manera que les consultes amb la perspectiva {{perspective}} van a l'API. Amb publicat o brut utilitzen la CDN.",
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vista.options.use-cdn.blocked.title': "Les consultes van a l'API, no a la CDN",
  /** Description of the API CDN switch */
  'vista.options.use-cdn.description':
    "Envia la consulta a la CDN de l'API, com useCdn: true a @sanity/client, amb les perspectives publicat i brut: els esborranys i llançaments sempre van a l'API. Les seves respostes es desen en memòria cau fins a un minut; el panell de Xarxa mostra quan una prové de la memòria cau.",
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vista.options.use-cdn.use-published': 'Utilitza la perspectiva publicada',
  /** Label of the variant field */
  'vista.options.variant-label': 'Variant',
  /** Variant option sending the navbar's variant, named */
  'vista.options.variant.global': 'Global ({{name}})',
  /** Variant option sending the navbar's variant while none is selected there */
  'vista.options.variant.global-none': 'Global (cap seleccionada)',
  /** Variant option sending no variant */
  'vista.options.variant.none': 'Cap',
  /** Accessible label for collapsing a bottom panel */
  'vista.panel.collapse': 'Replega el panell',
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vista.panel.delta': 'Delta',
  /** Accessible label for expanding a bottom panel */
  'vista.panel.expand': 'Expandeix el panell',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vista.panel.explain': 'Explica',
  /** Label of the Functions tab in the response panel */
  'vista.panel.functions': 'Funcions',
  /** Label of the "History" tab in the response panel */
  'vista.panel.history': 'Historial',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vista.panel.lint': 'Lint',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vista.panel.mutate': 'Muta',
  /** Label of the Network tab in the response panel */
  'vista.panel.network': 'Xarxa',
  /** Label of the "Options" panel in the request column */
  'vista.panel.options': 'Opcions',
  /** Label of the "Response" tab in the response panel */
  'vista.panel.response': 'Resposta',
  /** Label of the "Content Source Map" tab in the response panel */
  'vista.panel.source-map': "Mapa d'origen del contingut",
  /** Button adding an item to a list param in the params form */
  'vista.params-form.add-item': 'Afegeix un element',
  /** Placeholder of a params form field that takes any JSON value */
  'vista.params-form.any-placeholder':
    "Qualsevol valor JSON; la resta de text s'envia com a cadena de text",
  /** Shown in the params form when the query uses no params */
  'vista.params-form.empty':
    'La consulta no utilitza paràmetres. Cada $nom que hi aparegui tindrà un camp aquí.',
  /** Shown in the params form while the params JSON cannot be parsed */
  'vista.params-form.invalid-json':
    'Els paràmetres no són JSON vàlid. Corregiu-los a la vista JSON per editar-los aquí.',
  /** A boolean param's value is not true or false; it is sent anyway */
  'vista.params-form.invalid.boolean': "No és veritable ni fals; s'envia com a {{value}}",
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vista.params-form.invalid.document-type':
    "No és un tipus de document d'aquest espai de treball; s'envia igualment",
  /** A whole number param (a slice bound) holds a fraction */
  'vista.params-form.invalid.integer': 'No és un número enter, que és el que necessiten els talls',
  /** A list param's value is not a list; it is sent anyway */
  'vista.params-form.invalid.list': "No és una llista; s'envia com a {{value}}",
  /** A number param's value is not a number; it is sent anyway */
  'vista.params-form.invalid.number': "No és un número; s'envia com a text",
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vista.params-form.invalid.option': "No és un dels valors coneguts; s'envia igualment",
  /** A text param's value is not text; it is sent anyway */
  'vista.params-form.invalid.string': "No és text; s'envia com a {{value}}",
  /** Accessible label of an item input of a list param in the params form */
  'vista.params-form.item-label': '${{name}}, element {{index}}',
  /** Placeholder of an item input of a list param in the params form */
  'vista.params-form.item-placeholder': 'Element',
  /** Under a params form field whose param has no value */
  'vista.params-form.missing': 'No establert: la consulta falla fins que tingui un valor',
  /** Shown in the params form when the workspace schema could not be read */
  'vista.params-form.no-schema':
    "Els tipus provenen únicament de la consulta: no s'ha pogut llegir l'esquema de l'espai de treball.",
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vista.params-form.not-set': 'No establert',
  /** Button setting a date and time param to the current time */
  'vista.params-form.now': 'Ara',
  /** Button removing a param the query does not use from the params */
  'vista.params-form.remove': 'Elimina',
  /** Accessible label of the button removing an item from a list param */
  'vista.params-form.remove-item': "Elimina l'element",
  /** Shown in the params form when the query does not parse */
  'vista.params-form.syntax-error':
    'La consulta no es pot analitzar, de manera que els seus paràmetres es mostren sense tipus.',
  /** Type hint of a params form field: any JSON value */
  'vista.params-form.type.any': 'qualsevol valor JSON',
  /** Type hint of a params form field: true or false */
  'vista.params-form.type.boolean': 'veritable o fals',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vista.params-form.type.datetime': 'data i hora (ISO 8601)',
  /** Type hint of a params form field: a document ID */
  'vista.params-form.type.document-id': 'ID del document',
  /** Type hint of a params form field: one of the workspace's document types */
  'vista.params-form.type.document-type': 'tipus de document',
  /** Type hint of a params form field: a whole number */
  'vista.params-form.type.integer': 'nombre enter',
  /** Type hint of a params form field: a list of values */
  'vista.params-form.type.list': 'llista, cada {{type}}',
  /** Type hint of a params form field: a number */
  'vista.params-form.type.number': 'nombre',
  /** Type hint of a params form field: text */
  'vista.params-form.type.string': 'text',
  /** Heading of the params the query does not use, listed in the params form */
  'vista.params-form.unused': 'No utilitzat per la consulta',
  /** Before the expressions that use a param, in the params form */
  'vista.params-form.used-in': 'Utilitzat a',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vista.params.fit-height': 'Mida ajustada al contingut, {{height}} píxels',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vista.params.resize':
    'Canvia la mida dels paràmetres: arrossega o utilitza les tecles de fletxa; fes doble clic o prem Retorn per ajustar-la de nou al contingut',
  /** Tab showing the params as a form inferred from the query */
  'vista.params.view.form': 'Formulari',
  /** Tab showing the params as JSON */
  'vista.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vista.params.view.label': 'Edita els paràmetres com a',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vista.paste.parsed': "Consulta carregada des de l'URL enganxada",
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vista.paste.unavailable-variant':
    'L\'URL enganxada utilitzava la variant "{{variant}}"; selecciona-la a la barra de navegació per executar la consulta amb ella.',
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vista.paste.unknown-dataset':
    'El dataset "{{dataset}}" de l\'URL enganxada no està disponible aquí, es manté l\'actual.',
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vista.paste.unsupported-perspective':
    "La perspective de l'URL enganxada no és compatible aquí, es manté l'actual.",
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vista.paste.variants-disabled':
    'L\'URL enganxada utilitzava la variant "{{variant}}"; aquest espai de treball té les variants desactivades, de manera que la consulta s\'executa sense ella.',
  /** Accessible label for the query actions menu */
  'vista.query.actions': 'Accions de la consulta',
  /** Tooltip when automatic refetching is not available for the API version */
  'vista.query.auto-refetch.unsupported':
    "Per tornar a obtenir dades automàticament cal la versió de l'API v2021-03-25 o posterior.",
  /** Toast shown after the query was copied */
  'vista.query.copied': 'Consulta copiada al porta-retalls',
  /** Menu item copying the query text */
  'vista.query.copy': 'Copia la consulta',
  /** Menu item opening the export query dialog */
  'vista.query.export': 'Exporta la consulta…',
  /** Menu item reformatting the query */
  'vista.query.prettify': 'Embelleix la consulta',
  /** Toast shown when the query could not be reformatted */
  'vista.query.prettify.failed': "No s'ha pogut embellir la consulta",
  /** Menu item saving the query to the personal saved queries */
  'vista.query.save': 'Desa la consulta',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vista.query.stop': 'Atura',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vista.query.stop.description': 'Atura la recuperació',
  /** Explanation in the settings section about the redesigned experience */
  'vista.redesign.settings.description':
    "Esteu utilitzant l'eina Vision redissenyada. Si torneu a la versió anterior, es mantindran les vostres pestanyes i configuracions en aquest navegador per a la propera vegada que la proveu.",
  /** Title of the settings section about the redesigned experience */
  'vista.redesign.settings.title': 'Vision redissenyada (beta)',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vista.redesign.switch-to-classic': 'Canvia a la Vision clàssica',
  /** Toast button that switches to the redesigned tool */
  'vista.redesign.toast.accept': 'Prova-ho ara',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.description':
    'Pestanyes de consulta, recuperació en directe, detalls de la resposta i exportacions. Podeu tornar a la versió anterior en qualsevol moment.',
  /** Toast button that hides the invitation */
  'vista.redesign.toast.dismiss': 'Ara no',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.title': 'Prova la Vision redissenyada',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vista.redesign.try': 'Prova el redisseny',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vista.redesign.try.description':
    'Canvia a la Vision redissenyada, en beta. Podeu tornar a la versió anterior en qualsevol moment des de la seva barra lateral.',
  /** Empty state of the response panel before anything was fetched */
  'vista.response.empty': "Encara no s'ha recuperat res",
  /** Label for the payload size in the response tab */
  'vista.response.payload-size': 'Mida de la càrrega útil',
  /** Label for the sync tags in the response tab */
  'vista.response.sync-tags': 'Etiquetes de sincronització',
  /** Shown when the response carried no sync tags */
  'vista.response.sync-tags.none': 'No hi ha etiquetes de sincronització a la resposta',
  /** Accessible label for the result actions menu */
  'vista.result.actions': 'Accions del resultat',
  /** Toast shown after the result was copied */
  'vista.result.copied': 'Resultat copiat al porta-retalls',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vista.result.copied-value': '{{path}} copiat',
  /** Menu item and button copying the result as JSON */
  'vista.result.copy': 'Copia el resultat',
  /** Button next to each property in the result tree, copying its value */
  'vista.result.copy-value': 'Copia el valor',
  /** Empty state of the result view */
  'vista.result.empty': "Executeu la consulta per veure'n el resultat aquí",
  /** Button exporting the result as CSV */
  'vista.result.export-csv': 'Exporta CSV',
  /** Button exporting the result as JSON */
  'vista.result.export-json': 'Exporta JSON',
  /** Menu item opening the TypeScript export dialog */
  'vista.result.export-typescript': 'Exporta TypeScript…',
  /** Menu item opening the Zod export dialog */
  'vista.result.export-zod': 'Exporta Zod…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vista.result.graph.collapse': 'Amaga el que conté',
  /** Button fitting the whole graph in view */
  'vista.result.graph.fit': 'Ajusta a la vista',
  /** Accessible label of the graph, saying how to move around in it */
  'vista.result.graph.label':
    "Graf de resultats: arrossega per moure't, desplaça per fer zoom; amb el focus, les tecles de fletxa mouen, + i - fan zoom, 0 ajusta",
  /** Ends the note on a graph that leaves part of this result out */
  'vista.result.graph.left-out-hint': "Les vistes d'arbre i JSON el mostren tot.",
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vista.result.graph.node-limit': 'Només es dibuixen els primers {{nodes}} objectes i matrius.',
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vista.result.graph.partial': 'Només es llisten les primeres {{rows}} entrades per a {{nodes}}.',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vista.result.graph.partial.node': '{{name}} ({{entries}} entrades)',
  /** Title of the graph node of the result itself */
  'vista.result.graph.root': 'resultat',
  /** Button zooming into the graph */
  'vista.result.graph.zoom-in': 'Apropa',
  /** Button zooming out of the graph */
  'vista.result.graph.zoom-out': 'Allunya',
  /** Tab showing the result as a graph of its objects and arrays */
  'vista.result.view.graph': 'Graf',
  /** Tab showing the result as indented JSON text, to select and copy from */
  'vista.result.view.json': 'JSON',
  /** Accessible label of the tabs that switch how the result shows */
  'vista.result.view.label': 'Vista del resultat',
  /** Tab showing the result as a tree to browse */
  'vista.result.view.tree': 'Arbre',
  /** Empty state of the saved queries panel */
  'vista.saved.empty': 'Encara no hi ha consultes desades. Desa la consulta actual amb el botó +.',
  /** Empty state of a query list when the search matches nothing */
  'vista.saved.empty-search': 'Cap consulta coincideix amb la teva cerca',
  /** Menu item loading a saved query into the active tab */
  'vista.saved.load-in-current-tab': 'Carrega a la pestanya actual',
  /** Menu item opening a saved query in a new tab */
  'vista.saved.open-in-new-tab': 'Obre en una pestanya nova',
  /** Menu item renaming a saved query */
  'vista.saved.rename': 'Canvia el nom',
  /** Accessible label for the button saving the current query */
  'vista.saved.save-current': 'Desa la consulta actual',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vista.saved.unavailable-variant':
    'Aquesta consulta desada feia servir la variant "{{variant}}"; selecciona-la a la barra de navegació per executar la consulta amb ella.',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vista.saved.unknown-dataset':
    'El conjunt de dades "{{dataset}}" d\'aquesta consulta desada no està disponible aquí, es manté l\'actual.',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vista.saved.variants-disabled':
    'Aquesta consulta desada feia servir la variant "{{variant}}"; aquest espai de treball té les variants desactivades, de manera que la consulta s\'executa sense ella.',
  /** Button in the settings dialog that clears the stored state */
  'vista.settings.clear-storage': "Neteja l'emmagatzematge",
  /** Confirmation button for clearing the storage */
  'vista.settings.clear-storage.confirm': "Sí, esborra l'emmagatzematge",
  /** Explanation of what clearing the storage does */
  'vista.settings.clear-storage.description':
    "Elimina les teves consultes desades personals i la biblioteca de funcions, restableix les pestanyes obertes i aquests valors predeterminats en aquest navegador, i torna a l'eina Vision clàssica. Les consultes compartides es conserven.",
  /** Toast shown when the saved queries could not be cleared */
  'vista.settings.clear-storage.error': "No s'han pogut esborrar les consultes desades",
  /** Toast shown after the storage was cleared */
  'vista.settings.clear-storage.success': 'Emmagatzematge esborrat',
  /** Explanation at the top of the settings dialog */
  'vista.settings.description':
    'Valors predeterminats per a les pestanyes noves. Les pestanyes obertes mantenen les seves pròpies opcions.',
  /** Explains the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.description':
    "Un camí de camp per línia. Un camí coincideix a qualsevol profunditat d'un resultat, de manera que _rev amaga la revisió de tots els documents que en formin part. Cada diferència encara els pot mostrar.",
  /** Button restoring the default fields left out of History diffs */
  'vista.settings.history-diff.reset': 'Restableix els valors predeterminats',
  /** Label of the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.title': "Camps amagats de les diferències de l'historial",
  /** Title of the settings dialog */
  'vista.settings.title': 'Configuració',
  /** Empty state of the shared queries panel */
  'vista.shared.empty':
    'Encara no hi ha consultes compartides. Comparteix una consulta desada perquè estigui disponible per a tothom que utilitzi aquest conjunt de dades.',
  /** Shortcut description: close dialogs and menus */
  'vista.shortcuts.close': 'Tanca els diàlegs i els menús',
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vista.shortcuts.complete': 'Completa un nom de funció',
  /** Shortcut description: copy the query */
  'vista.shortcuts.copy-query': 'Copia la consulta',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vista.shortcuts.extract-function': 'Extreu la projecció al cursor a una funció',
  /** Shortcut description: run the query */
  'vista.shortcuts.fetch': 'Executa la consulta',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vista.shortcuts.next-finding': 'Salta a la troballa de lint següent',
  /** Shortcut description: reformat the query */
  'vista.shortcuts.prettify': 'Embelleix la consulta',
  /** Title of the keyboard shortcuts dialog */
  'vista.shortcuts.title': 'Dreceres de teclat',
  /** Sidebar toggle: show icons only */
  'vista.sidebar.collapse': 'Redueix la barra lateral',
  /** Sidebar toggle: show labels next to the icons */
  'vista.sidebar.expand': 'Expandeix la barra lateral',
  /** Accessible label for the sidebar navigation */
  'vista.sidebar.label': 'Barra lateral de Vista',
  /** Sidebar item and drawer title for personal saved queries */
  'vista.sidebar.saved-queries': 'Consultes desades',
  /** Sidebar item opening the settings dialog */
  'vista.sidebar.settings': 'Configuració',
  /** Sidebar item and drawer title for shared queries */
  'vista.sidebar.shared-queries': 'Consultes compartides',
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vista.sidebar.shortcuts': 'Dreceres de teclat',
  /** Empty state of the content source map panel */
  'vista.source-map.empty':
    'No hi ha cap mapa de font de contingut a la resposta. Activeu "Incloure mapa de font de contingut" a Opcions i torneu a fer la consulta.',
  /** Accessible label of the divider between the result and the response details panel */
  'vista.split.bottom-panel':
    'Canvia la mida del tauler de detalls de la resposta: arrossegueu o useu les tecles de fletxa; Inici i Fi van als límits, Retorn reinicia',
  /** Accessible label of the divider between the request and response panes */
  'vista.split.request-response':
    'Canvia la mida dels taulers de sol·licitud i resposta: arrossegueu o useu les tecles de fletxa; Inici i Fi van als límits, Retorn reinicia',
  /** Accessible label for the button closing a query tab */
  'vista.tabs.close-tab': 'Tanca la pestanya',
  /** Accessible label for the list of query tabs */
  'vista.tabs.label': 'Pestanyes de consulta',
  /** Accessible label for the button opening a new query tab */
  'vista.tabs.new-tab': 'Pestanya nova',
  /** Placeholder of the input renaming a tab */
  'vista.tabs.title-placeholder': 'Títol de la pestanya',
  /** Title of a tab whose query is still empty */
  'vista.tabs.untitled': 'Consulta sense títol',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vista.webmcp.check-query': 'Comprova una consulta GROQ a Vision',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vista.webmcp.describe-schema': "Descriu l'esquema a Vision",
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vista.webmcp.explain-query': 'Explica una consulta GROQ a Vision',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vista.webmcp.get-state': 'Llegeix la pestanya oberta de Vision',
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vista.webmcp.open-query': 'Obre una consulta GROQ a Vision',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vista.webmcp.preview-mutations': 'Previsualitza mutacions a Vision',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vista.webmcp.run-query': 'Executa una consulta GROQ a Vision',
})
