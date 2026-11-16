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
  'vision.agent-actions.credits': "Utilitza un crèdit d'IA per sol·licitud",
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vision.ai-credits.balance': "Queden {{balance}} de {{quota}} crèdits d'IA aquest mes.",
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vision.ai-credits.deficit':
    "S'han utilitzat {{used}} crèdits d'IA aquest mes, {{deficit}} més dels {{quota}} inclosos.",
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vision.ai-credits.limit.description':
    "La vostra organització ha utilitzat {{used}} dels seus {{quota}} crèdits d'IA aquest mes, de manera que les Sanity Agent Actions estan en pausa fins al mes vinent o fins que s'augmenti el límit de despesa.",
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vision.ai-credits.limit.description-unknown':
    "La vostra organització ha arribat al seu límit de despesa de crèdits d'IA, de manera que les Sanity Agent Actions estan en pausa fins al mes vinent o fins que s'augmenti el límit.",
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vision.ai-credits.limit.learn-more': "Com funcionen els crèdits d'IA",
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vision.ai-credits.limit.manage': "Gestiona els crèdits d'IA",
  /** Title of the card shown where the organization is out of AI credits */
  'vision.ai-credits.limit.title': "Sense crèdits d'IA",
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vision.ai-credits.usage': "Ús d'IA",
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vision.ai-credits.used': "S'han utilitzat {{used}} crèdits d'IA aquest mes.",
  /** Button in the request column's action bar naming the API version requests go out with */
  'vision.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vision.api-version.button-cdn': 'API CDN {{version}}',
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vision.api-version.button-invalid': "Versió d'API incompleta",
  /** Tooltip of the API version button */
  'vision.api-version.tooltip':
    "Les consultes s'executen contra la versió d'API {{version}}. Seleccioneu-ho per canviar-ho a Opcions.",
  /** Tooltip of the API version button while queries go through the API CDN */
  'vision.api-version.tooltip-cdn':
    "Les consultes s'executen contra l'API CDN amb la versió d'API {{version}}. Seleccioneu-ho per canviar-ho a Opcions.",
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vision.api-version.tooltip-cdn-blocked':
    "Les consultes s'executen contra l'API amb la versió d'API {{version}}, no l'API CDN: aquesta no serveix la perspectiva {{perspective}}. Seleccioneu-ho per canviar-ho a Opcions.",
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vision.api-version.tooltip-invalid':
    "La versió d'API a Opcions és incompleta, de manera que no es pot obtenir res fins que estigui completa.",
  /** Tooltip of the API version button while a selected variant forces the variants API version */
  'vision.api-version.tooltip-locked':
    "Les consultes s'executen contra la versió d'API {{version}}, que necessita la variant seleccionada.",
  /** Label of the document after the change in the Delta panel */
  'vision.delta.after': 'Després',
  /** Label of the document before the change in the Delta panel */
  'vision.delta.before': 'Abans',
  /** What the Delta panel does */
  'vision.delta.description':
    "Executa la consulta en mode delta, tal com fan els webhooks basats en GROQ, els listeners i les Sanity Functions: before() i after() són el document abans i després d'un canvi, @ és el document després, i delta::changedAny() els compara. S'executa al navegador amb groq-js. Un costat buit significa que no hi ha document: el canvi el crea o l'elimina.",
  /** Label of the document ID field in the Delta panel */
  'vision.delta.document-id': 'ID del document',
  /** Shown when there is a query but no documents to compare */
  'vision.delta.empty':
    "Carregueu l'historial d'un document, o escriviu els documents a Abans i Després.",
  /** Shown when the query fails in delta mode */
  'vision.delta.failed': "No s'ha pogut executar la consulta en mode delta: {{message}}",
  /** Shown when the After document is not valid JSON */
  'vision.delta.invalid-after': 'Després no és un JSON vàlid: {{message}}',
  /** Shown when the Before document is not valid JSON */
  'vision.delta.invalid-before': 'Before no és un JSON vàlid: {{message}}',
  /** Button loading the document's revisions from the History API */
  'vision.delta.load': "Carrega l'historial",
  /** Shown when the history could not be loaded */
  'vision.delta.load-failed': "No s'ha pogut carregar l'historial: {{message}}",
  /** A delta filter that is true for the change */
  'vision.delta.matches':
    "Coincideix: un webhook o una funció amb aquest filtre s'executa per a aquest canvi.",
  /** A delta filter that is false for the change */
  'vision.delta.no-match':
    "No coincideix: un webhook o una funció amb aquest filtre no s'executa per a aquest canvi.",
  /** Shown while the query or its params cannot be sent */
  'vision.delta.no-request':
    'Corregeix la consulta i els seus paràmetres per executar-la en mode delta.',
  /** Heading of the delta result */
  'vision.delta.result': 'Resultat',
  /** The After choice for a change that deletes the document */
  'vision.delta.revision.none-after': 'Res: el canvi elimina el document',
  /** The Before choice for a change that creates the document */
  'vision.delta.revision.none-before': 'Res: el canvi crea el document',
  /** A revision in the Before and After lists */
  'vision.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vision.drawer.close': 'Tanca el panell',
  /** Explanation at the top of the Explain panel */
  'vision.explain.description':
    "El pla de consulta és la manera en què Content Lake executa la consulta: què llegeix, filtra i ordena mentre llegeix, i què queda per a passos posteriors. Explica-m'ho fa servir les Accions d'Agent de Sanity per descriure la consulta i el seu pla en llenguatge planer, cosa que utilitza un crèdit d'IA.",
  /** Shown in the Explain panel while there is no valid query to explain */
  'vision.explain.empty': 'Escriu una consulta per explicar-la.',
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vision.explain.explain': "Explica-m'ho",
  /** Shown when the explanation could not be written */
  'vision.explain.failed': "No s'ha pogut explicar la consulta: {{message}}",
  /** A count the index computes without reading the documents */
  'vision.explain.insight.aggregate': "Comptat a l'índex, sense llegir els documents.",
  /** A subquery the plan runs once for all documents */
  'vision.explain.insight.batched-subquery':
    "La subconsulta s'executa una sola vegada per a tots els documents, en una única cerca per lots, no una vegada per document.",
  /** Part of the filter runs in memory; the expression follows */
  'vision.explain.insight.filter-in-memory':
    "Part del filtre s'executa en memòria, després de llegir: primer es llegeix cada document que l'índex deixa passar, cosa que és lenta en conjunts de dades grans. Les unions (->) i les funcions en un filtre no poden utilitzar l'índex.",
  /** The index sorts and limits while reading */
  'vision.explain.insight.index-sort-limit':
    "L'índex ordena i limita els documents mentre els llegeix.",
  /** The plan slices in memory */
  'vision.explain.insight.slice-in-memory':
    'El tall es fa en memòria després de llegir, no com un límit mentre es llegeix.',
  /** The plan sorts in memory */
  'vision.explain.insight.sort-in-memory':
    "L'ordenació es fa en memòria, després de llegir totes les coincidències. Ordena per atributs que l'índex pugui ordenar.",
  /** Link under the plan insights to the guide on fast queries */
  'vision.explain.insights.guide': "GROQ d'alt rendiment",
  /** Heading of the plan insights in the Explain panel */
  'vision.explain.insights.title': 'Què destaca',
  /** Button in the Explain panel fetching the query plan */
  'vision.explain.plan': 'Mostra el pla de consulta',
  /** Shown when the query plan could not be fetched */
  'vision.explain.plan-failed': "No s'ha pogut obtenir el pla de consulta: {{message}}",
  /** Heading of the query plan in the Explain panel */
  'vision.explain.plan-title': 'Pla de consulta',
  /** Toast shown after a code snippet was copied */
  'vision.export-query.copied': 'Fragment copiat al porta-retalls',
  /** Label for the button that copies a code snippet */
  'vision.export-query.copy': 'Copia el fragment',
  /** Explanation at the top of the export query dialog */
  'vision.export-query.description':
    "Executa aquesta consulta fora de l'estudi amb un d'aquests fragments.",
  /** Note under the curl snippet when the query is sent as a request body rather than in the URL */
  'vision.export-query.post-body-note':
    "La consulta i els paràmetres ocupen {{size}} caràcters com a paràmetres de cerca; a partir de {{limit}}, @sanity/client els envia com a cos JSON en lloc de l'URL, així que el fragment fa el mateix.",
  /** Title of the dialog that exports the query as code snippets */
  'vision.export-query.title': 'Exporta la consulta',
  /** Note about authentication in the export query dialog */
  'vision.export-query.token-note':
    "Els conjunts de dades privats necessiten un token de l'API. Els conjunts de dades públics poden ometre la capçalera d'autorització.",
  /** Toast shown after the generated code was copied */
  'vision.export-types.copied': 'Codi copiat al porta-retalls',
  /** Label for the button that copies the generated code */
  'vision.export-types.copy': 'Copia el codi',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vision.export-types.empty':
    'Primer recupera la consulta perquè hi hagi un resultat a partir del qual derivar els tipus.',
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vision.export-types.schema-error': "L'avaluació de l'esquema ha fallat: {{message}}",
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vision.export-types.source.result':
    "Deduït a partir del resultat recuperat, ja que la consulta no s'ha pogut avaluar amb l'esquema de l'espai de treball.",
  /** Note shown when the types were derived from the workspace schema */
  'vision.export-types.source.schema':
    "Deduït a partir de l'esquema de l'espai de treball, de la mateixa manera que ho fa sanity typegen.",
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vision.export-types.stale-result':
    "El resultat mostrat s'ha recuperat per a una consulta o uns paràmetres diferents. Primer recupera la consulta actual perquè hi hagi un resultat a partir del qual derivar els tipus.",
  /** Title of the dialog exporting TypeScript types for the result */
  'vision.export-types.title-typescript': 'Exporta TypeScript',
  /** Title of the dialog exporting a Zod schema for the result */
  'vision.export-types.title-zod': 'Exporta Zod',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vision.functions.add': 'Afegeix a la consulta',
  /** Shown on a library function the query declares the same way */
  'vision.functions.declared': 'En aquesta consulta',
  /** Lint action on a call of a library function the query does not declare */
  'vision.functions.editor.add-from-library': 'Declara-la',
  /** Note in a function's hover documentation: the API version it needs */
  'vision.functions.editor.api-version': "Necessita la versió {{version}} de l'API o posterior",
  /** Detail of a completion for a custom function the query declares */
  'vision.functions.editor.completion-declared': 'en aquesta consulta',
  /** Detail of a completion for a library function, which declares it too */
  'vision.functions.editor.completion-library': 'de la teva biblioteca',
  /** Note in the hover documentation of a custom function the query declares */
  'vision.functions.editor.declared-on': 'Funció personalitzada, declarada a la línia {{line}}',
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vision.functions.editor.delta-only':
    'Només funciona en mode delta, on els webhooks i les funcions de Sanity executen els seus filtres',
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vision.functions.editor.extract': 'Extreu a una funció',
  /** Note in the hover documentation of a library function the query does not declare */
  'vision.functions.editor.in-library':
    'A la vostra biblioteca de funcions, no declarada en aquesta consulta',
  /** Link at the end of a built-in function's hover documentation */
  'vision.functions.editor.reference': 'Referència de funcions GROQ',
  /** Explanation under the library heading in the Functions panel */
  'vision.functions.library.description':
    'Es manté en aquest navegador per a cada dataset del projecte. Els completaments ofereixen aquestes funcions, i el linter ofereix declarar-ne una que la consulta crida.',
  /** Shown in the Functions panel while the library is empty */
  'vision.functions.library.empty':
    'Deseu una funció que la consulta declari per utilitzar-la en altres consultes.',
  /** Heading of the functions library in the Functions panel */
  'vision.functions.library.title': 'Biblioteca',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vision.functions.query.empty':
    "Declareu funcions personalitzades a la part superior de la consulta, o poseu el cursor en una projecció, com author->{name}, i premeu el botó d'extracció sobre l'editor ({{shortcut}}).",
  /** Heading of the functions the query declares in the Functions panel */
  'vision.functions.query.title': 'En aquesta consulta',
  /** Removes a function from the library */
  'vision.functions.remove': 'Elimina de la biblioteca',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vision.functions.replace': 'Substitueix a la consulta',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vision.functions.reveal': "Mostra {{name}} a l'editor",
  /** Button of a function the query declares that is not in the library yet */
  'vision.functions.save': 'Desa a la biblioteca',
  /** Shown on a function the query declares the way the library has it */
  'vision.functions.saved': 'Desat',
  /** Button of a function the query declares differently from the library's version */
  'vision.functions.update': 'Actualitza la biblioteca',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vision.generate.button': 'Genera la consulta',
  /** Closes the generate query bar */
  'vision.generate.close': 'Tanca',
  /** Explanation under the generate query field */
  'vision.generate.description':
    "Les accions de l'agent de Sanity escriuen el GROQ a partir de la vostra descripció i els tipus de document, i el Content Lake comprova cada intent; cada intent utilitza un crèdit d'IA. Substitueix la consulta d'aquesta pestanya i s'executa; desfer a l'editor recupera la consulta anterior.",
  /** Shown when no query could be generated, above the reason */
  'vision.generate.failed': "No s'ha pogut generar la consulta",
  /** Accessible label of the description field in the generate query bar */
  'vision.generate.label': 'Què hauria de recuperar la consulta?',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vision.generate.open-anyway': "Obre l'últim intent",
  /** Placeholder of the description field in the generate query bar */
  'vision.generate.placeholder': 'Els 10 autors més recents, ordenats per cognom i després pel nom',
  /** Shown while the first attempt at a query is written */
  'vision.generate.progress': 'Escrivint la consulta…',
  /** Shown while a rejected attempt is retried */
  'vision.generate.progress-retry': 'Corregint la consulta (intent {{attempt}} de {{max}})…',
  /** Button generating the query */
  'vision.generate.submit': 'Genera',
  /** Badge on a history entry the API CDN answered */
  'vision.history.cdn': 'API CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vision.history.cdn-cache-hit': 'Encert de memòria cau del CDN',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vision.history.changed': 'Canviat',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vision.history.changes': 'Canvis',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vision.history.changes-failed': "No s'han pogut mostrar els canvis.",
  /** Button retrying to show the changes of a history entry */
  'vision.history.changes-retry': 'Reintenta',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vision.history.compared-with': 'Comparat amb la consulta de {{time}}',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vision.history.diff.params': 'Paràmetres',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vision.history.diff.query': 'Consulta',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vision.history.diff.query-formatting-only': 'Només ha canviat el format',
  /** Label of the diff of the query result in a history entry's changes */
  'vision.history.diff.result': 'Resultat',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vision.history.diff.url': 'URL de la sol·licitud',
  /** Empty state of the history panel */
  'vision.history.empty': "Encara no s'ha fet cap consulta",
  /** Status label for a failed fetch in the history */
  'vision.history.failed': 'Ha fallat',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vision.history.hide-hidden': "Amaga'ls",
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vision.history.hiding': 'Amagant {{fields}}',
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vision.history.only-hidden-changed': 'Només han canviat els camps ocults',
  /** History reason: a tab opened with a generated query fetched it */
  'vision.history.reason.generated': 'Consulta generada',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vision.history.reason.link': 'Enllaç obert',
  /** History reason: a live event matched the query's sync tags */
  'vision.history.reason.live': 'Actualització en directe',
  /** History reason: the live connection asked every client to refetch */
  'vision.history.reason.live-restart': 'Connexió en directe reiniciada',
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vision.history.reason.live-start': 'Consulta en directe iniciada',
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vision.history.reason.load': 'Consulta carregada',
  /** History reason: the fetch button was pressed */
  'vision.history.reason.manual': 'Botó de consulta',
  /** History reason: mutations were applied from the Mutate panel */
  'vision.history.reason.mutation': 'Mutacions aplicades',
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vision.history.reason.options': 'Opcions canviades',
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vision.history.reason.paste': 'URL enganxada',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vision.history.reason.resume': "S'ha reprès la recàrrega automàtica",
  /** History reason: the keyboard shortcut was used */
  'vision.history.reason.shortcut': 'Drecera de teclat',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vision.history.same-result': 'Mateix resultat',
  /** Button showing the hidden fields in a history entry's changes */
  'vision.history.show-hidden': "Mostra'ls",
  /** Next to a history entry's changes while the hidden fields are shown */
  'vision.history.showing-hidden': 'Mostrant {{fields}}, ocults per defecte',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vision.history.too-large': 'Massa gran per comparar',
  /** A history entry whose result is the same as the previous result */
  'vision.history.unchanged': 'Sense canvis',
  /** Shown in the Lint panel while the query has no lint findings */
  'vision.lint.empty':
    "Cap troballa de lint. Els problemes que el linter de GROQ detecta a la consulta es llisten aquí mentre escrius; selecciona'n un per marcar-lo a l'editor.",
  /** Where a lint finding sits in the query, shown under its message */
  'vision.lint.position': 'Línia {{line}}, columna {{column}}',
  /** Severity badge of a lint finding */
  'vision.lint.severity.error': 'Error',
  /** Severity badge of a lint finding */
  'vision.lint.severity.hint': 'Suggeriment',
  /** Severity badge of a lint finding */
  'vision.lint.severity.info': 'Informació',
  /** Severity badge of a lint finding */
  'vision.lint.severity.warning': 'Avís',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vision.lint.use-suggestion': 'Fes servir {{suggestion}}',
  /** Badge shown while a tab refetches automatically */
  'vision.live.active': 'En directe',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vision.live.button': 'Cerca en directe',
  /** Tooltip of the Live button while automatic refetching is off */
  'vision.live.button.start':
    'Cerca, i torna a cercar cada vegada que els documents del resultat canviïn',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vision.live.button.stop':
    'Atura la cerca automàtica quan els documents del resultat canviïn. La cerca encara es fa a petició, per a resultats que cap canvi de document afecta, com now()',
  /** Error shown when the live connection breaks */
  'vision.live.error': "S'ha desconnectat les actualitzacions en directe: {{message}}",
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vision.live.stop': 'Atura el directe',
  /** Button in the Mutate panel adding a mutation to the list */
  'vision.mutate.add': 'Afegeix una mutació',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vision.mutate.add.create': 'Crea un document',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vision.mutate.add.delete': 'Suprimeix un document',
  /** Adds a mutation deleting the documents of the shown result */
  'vision.mutate.add.delete-result': 'Suprimeix els documents del resultat',
  /** Adds a mutation patching a document, its ID to fill in */
  'vision.mutate.add.patch': 'Modifica un document',
  /** Adds a mutation patching the documents of the shown result */
  'vision.mutate.add.patch-result': 'Aplica un pedaç (patch) als documents del resultat',
  /** Button applying the mutations a dry run showed */
  'vision.mutate.apply': 'Aplica a {{dataset}}',
  /** Heading of the error shown when applying the mutations failed */
  'vision.mutate.apply-failed': "No s'han aplicat les mutacions",
  /** Next to Apply while the mutations as they are have had no dry run */
  'vision.mutate.apply-needs-preview':
    "Aplicar envia el que ha mostrat una execució de prova: executa'n una primer.",
  /** Option giving array items without a _key one */
  'vision.mutate.auto-keys': 'Afegeix una _key als elements de la matriu que no en tinguin',
  /** Under the option giving array items a _key */
  'vision.mutate.auto-keys.description':
    "L'studio necessita una _key a cada element de la matriu per poder-lo editar.",
  /** Button showing a document's changes in the dry run */
  'vision.mutate.changes': 'Canvis',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vision.mutate.changes-failed': "No s'han pogut mostrar els canvis.",
  /** Button retrying to show a document's changes */
  'vision.mutate.changes-retry': 'Torna-ho a provar',
  /** What the Mutate panel does */
  'vision.mutate.description':
    "Escriu mutacions tal com les accepta l'API de mutacions, en una llista: create, createOrReplace, createIfNotExists, delete i patch, per ID o per consulta GROQ. Una execució de prova mostra què farien a cada document sense canviar res; Aplica les escriu llavors al dataset en una sola transacció, amb el teu compte.",
  /** What the API says went wrong with one of the mutations */
  'vision.mutate.failure-item': 'Mutació {{index}}: {{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vision.mutate.generate.button': 'Genera mutacions',
  /** Explanation under the generate mutations field */
  'vision.mutate.generate.description':
    "Les accions d'agent de Sanity escriuen les mutacions a partir de la teva descripció, els documents del resultat i els seus tipus, i una execució de prova comprova cada intent; cada intent consumeix un crèdit d'IA. Substitueixen les mutacions d'aquí, on desfer les torna a recuperar; no s'escriu res fins que les apliquis.",
  /** Shown when no mutations could be generated, above the reason */
  'vision.mutate.generate.failed': "No s'han pogut generar les mutacions",
  /** Accessible label of the description field in the generate mutations bar */
  'vision.mutate.generate.label': 'Què haurien de fer les mutacions?',
  /** Placeholder of the description field in the generate mutations bar */
  'vision.mutate.generate.placeholder': 'Canvia el títol dels documents del resultat a foobar',
  /** Shown while the first attempt at the mutations is written */
  'vision.mutate.generate.progress': "S'estan escrivint les mutacions…",
  /** Shown while an attempt the dry run turned down is retried */
  'vision.mutate.generate.progress-retry':
    "S'estan corregint les mutacions (intent {{attempt}} de {{max}})…",
  /** Under the dry run: the fields the diffs leave out */
  'vision.mutate.hiding': "Els canvis deixen de banda {{fields}}, tal com fa l'historial.",
  /** Shown when the mutations are not valid JSON */
  'vision.mutate.invalid-json': 'Les mutacions no són JSON vàlid: {{message}}',
  /** Shown when a mutation does not name exactly one thing to do */
  'vision.mutate.invalid-mutation':
    'La mutació {{index}} necessita exactament una de create, createOrReplace, createIfNotExists, delete o patch.',
  /** Label of the mutations editor */
  'vision.mutate.mutations': 'Mutacions',
  /** The dry run touched no documents */
  'vision.mutate.no-documents': 'Les mutacions no afecten cap document.',
  /** Shown when the JSON is not a list of mutations */
  'vision.mutate.not-a-list':
    'Escriu una llista de mutacions, una sola mutació, o un cos de sol·licitud amb una llista de mutacions.',
  /** A document the mutations create */
  'vision.mutate.operation.create': 'Crea',
  /** A document the mutations delete */
  'vision.mutate.operation.delete': 'Suprimeix',
  /** A document the mutations touch without changing its content */
  'vision.mutate.operation.none': 'Sense canvis',
  /** A document the mutations change */
  'vision.mutate.operation.update': 'Actualitza',
  /** Button running the mutations as a dry run */
  'vision.mutate.preview': 'Simulació',
  /** Heading of the error shown when the dry run failed */
  'vision.mutate.preview-failed': 'La simulació ha fallat',
  /** Heading of the dry run's outcome */
  'vision.mutate.preview-heading': 'Simulació',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vision.mutate.stale':
    "Les mutacions, el dataset o les opcions han canviat després d'aquesta simulació. Torna-la a executar per aplicar-les.",
  /** How many documents the dry run changes and leaves as they are */
  'vision.mutate.summary': 'Canviats: {{changed}} · Sense canvis: {{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vision.network.cache': 'Memòria cau',
  /** The API CDN answered from its cache */
  'vision.network.cache.hit': 'Encert',
  /** Under the details of a CDN cache hit */
  'vision.network.cache.hit-explained':
    "La CDN ha respost amb una resposta que tenia emmagatzemada en memòria cau, des d'una ubicació propera a tu; la consulta no ha arribat a l'API.",
  /** The API CDN answered with a response this session had not seen */
  'vision.network.cache.miss': 'Fallada, pel que aquesta sessió pot determinar',
  /** The API answered, which caches nothing */
  'vision.network.cache.none': "Cap, l'API respon cada petició amb contingut nou",
  /** Shown in the Network panel while there is no response */
  'vision.network.empty':
    "Executa la consulta per veure quin punt final l'ha respost, si ha estat des d'una memòria cau i on s'ha executat.",
  /** In the Network panel: the endpoint that answered */
  'vision.network.endpoint': 'Respost per',
  /** The live API answered */
  'vision.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vision.network.endpoint.cdn': "CDN de l'API",
  /** In the Network panel: the HTTP method the query was sent with */
  'vision.network.method': 'Mètode',
  /** The query and its params went in the URL */
  'vision.network.method.get': "GET, amb la consulta i els paràmetres a l'URL",
  /** The query and its params went in the request body */
  'vision.network.method.post': 'POST, amb la consulta i els paràmetres com a cos JSON',
  /** Under the method of a POST request: why the query was not sent in the URL */
  'vision.network.method.post-explained':
    "La consulta i els paràmetres sumen {{size}} caràcters com a paràmetres de cerca; a partir de {{limit}}, @sanity/client els envia com a cos JSON, ja que l'API limita la longitud d'un URL. Les opcions es mantenen a l'URL.",
  /** In the Network panel: the region the query ran in */
  'vision.network.region': "La consulta s'ha executat a",
  /** The response did not say where the query ran */
  'vision.network.region.unknown': "No s'ha informat",
  /** In the Network panel: the round trip and the time on the server */
  'vision.network.timing': 'Temps',
  /** The round trip and the server's time for the query, in milliseconds */
  'vision.network.timing.value': "{{e2e}}ms d'anada i tornada, {{server}}ms al servidor",
  /** In the Network panel: the trace of the request, for Sanity support */
  'vision.network.trace': 'ID de traça',
  /** Hint in the Network panel while queries go to the API */
  'vision.network.use-cdn-hint':
    "Activa Utilitza la CDN de l'API a Opcions per enviar les consultes a través de la CDN.",
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vision.network.you': 'Tu',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vision.options.dataset.follows-workspace': "Segueix l'espai de treball",
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vision.options.dataset.pin': 'Fixa un conjunt de dades',
  /** Hint under the dataset field while a dataset is pinned */
  'vision.options.dataset.pinned':
    "Fixat; l'espai de treball pot utilitzar un altre conjunt de dades",
  /** Button that makes the tab follow the workspace's dataset again */
  'vision.options.dataset.use-workspace': "Utilitza el conjunt de dades de l'espai de treball",
  /** Label for the "Include content source map" switch */
  'vision.options.include-source-map': 'Inclou el mapa de font de contingut',
  /** Description for the "Include content source map" switch */
  'vision.options.include-source-map.description':
    'Afegeix resultSourceMap a la resposta, mostrat a la pestanya Mapa de font de contingut.',
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vision.options.perspective.global': 'Global ({{name}})',
  /** Label of the switch that sends queries to the API CDN */
  'vision.options.use-cdn': "Utilitza la CDN de l'API",
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vision.options.use-cdn.anonymous':
    "Aquest estudi t'identifica amb una galeta, que la CDN de l'API mai rep: respon com ho faria amb un visitant anònim, amb el que mostra un conjunt de dades públic.",
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vision.options.use-cdn.blocked':
    "La CDN de l'API no serveix esborranys ni llançaments, de manera que les consultes amb la perspectiva {{perspective}} van a l'API. Amb publicat o brut utilitzen la CDN.",
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vision.options.use-cdn.blocked.title': "Les consultes van a l'API, no a la CDN",
  /** Description of the API CDN switch */
  'vision.options.use-cdn.description':
    "Envia la consulta a la CDN de l'API, com useCdn: true a @sanity/client, amb les perspectives publicat i brut: els esborranys i els llançaments sempre van a l'API. Les seves respostes es guarden en memòria cau fins a un minut; el panell de xarxa mostra quan una prové de la memòria cau.",
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vision.options.use-cdn.use-published': 'Utilitza la perspectiva publicada',
  /** Label of the variant field */
  'vision.options.variant-label': 'Variant',
  /** Variant option sending the navbar's variant, named */
  'vision.options.variant.global': 'Global ({{name}})',
  /** Variant option sending the navbar's variant while none is selected there */
  'vision.options.variant.global-none': 'Global (cap seleccionada)',
  /** Variant option sending no variant */
  'vision.options.variant.none': 'Cap',
  /** Accessible label for collapsing a bottom panel */
  'vision.panel.collapse': 'Replega el panell',
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vision.panel.delta': 'Delta',
  /** Accessible label for expanding a bottom panel */
  'vision.panel.expand': 'Expandeix el panell',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vision.panel.explain': 'Explica',
  /** Label of the Functions tab in the response panel */
  'vision.panel.functions': 'Funcions',
  /** Label of the "History" tab in the response panel */
  'vision.panel.history': 'Historial',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vision.panel.lint': 'Lint',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vision.panel.mutate': 'Mutar',
  /** Label of the Network tab in the response panel */
  'vision.panel.network': 'Xarxa',
  /** Label of the "Options" panel in the request column */
  'vision.panel.options': 'Opcions',
  /** Label of the "Response" tab in the response panel */
  'vision.panel.response': 'Resposta',
  /** Label of the "Content Source Map" tab in the response panel */
  'vision.panel.source-map': 'Mapa de font de contingut',
  /** Button adding an item to a list param in the params form */
  'vision.params-form.add-item': 'Afegeix un element',
  /** Placeholder of a params form field that takes any JSON value */
  'vision.params-form.any-placeholder':
    "Qualsevol valor JSON; la resta de text s'envia com a cadena",
  /** Shown in the params form when the query uses no params */
  'vision.params-form.empty':
    'La consulta no utilitza paràmetres. Cada $nom que hi aparegui obtindrà un camp aquí.',
  /** Shown in the params form while the params JSON cannot be parsed */
  'vision.params-form.invalid-json':
    'Els paràmetres no són JSON vàlid. Corregeix-los a la vista JSON per editar-los aquí.',
  /** A boolean param's value is not true or false; it is sent anyway */
  'vision.params-form.invalid.boolean': "No és veritat ni fals; s'envia com a {{value}}",
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vision.params-form.invalid.document-type':
    "No és un tipus de document d'aquest espai de treball; s'envia igualment",
  /** A whole number param (a slice bound) holds a fraction */
  'vision.params-form.invalid.integer': 'No és un nombre enter, que és el que necessiten els talls',
  /** A list param's value is not a list; it is sent anyway */
  'vision.params-form.invalid.list': "No és una llista; s'envia com a {{value}}",
  /** A number param's value is not a number; it is sent anyway */
  'vision.params-form.invalid.number': "No és un nombre; s'envia com a text",
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vision.params-form.invalid.option': "No és un dels valors coneguts; s'envia igualment",
  /** A text param's value is not text; it is sent anyway */
  'vision.params-form.invalid.string': "No és text; s'envia com a {{value}}",
  /** Accessible label of an item input of a list param in the params form */
  'vision.params-form.item-label': '${{name}}, element {{index}}',
  /** Placeholder of an item input of a list param in the params form */
  'vision.params-form.item-placeholder': 'Element',
  /** Under a params form field whose param has no value */
  'vision.params-form.missing': 'No establert: la consulta falla fins que tingui un valor',
  /** Shown in the params form when the workspace schema could not be read */
  'vision.params-form.no-schema':
    "Els tipus provenen únicament de la consulta: no s'ha pogut llegir l'esquema de l'espai de treball.",
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vision.params-form.not-set': 'No establert',
  /** Button setting a date and time param to the current time */
  'vision.params-form.now': 'Ara',
  /** Button removing a param the query does not use from the params */
  'vision.params-form.remove': 'Elimina',
  /** Accessible label of the button removing an item from a list param */
  'vision.params-form.remove-item': "Elimina l'element",
  /** Shown in the params form when the query does not parse */
  'vision.params-form.syntax-error':
    'La consulta no es pot analitzar, de manera que els seus paràmetres es mostren sense tipus.',
  /** Type hint of a params form field: any JSON value */
  'vision.params-form.type.any': 'qualsevol valor JSON',
  /** Type hint of a params form field: true or false */
  'vision.params-form.type.boolean': 'cert o fals',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vision.params-form.type.datetime': 'data i hora (ISO 8601)',
  /** Type hint of a params form field: a document ID */
  'vision.params-form.type.document-id': 'ID de document',
  /** Type hint of a params form field: one of the workspace's document types */
  'vision.params-form.type.document-type': 'tipus de document',
  /** Type hint of a params form field: a whole number */
  'vision.params-form.type.integer': 'nombre enter',
  /** Type hint of a params form field: a list of values */
  'vision.params-form.type.list': 'llista, cada {{type}}',
  /** Type hint of a params form field: a number */
  'vision.params-form.type.number': 'nombre',
  /** Type hint of a params form field: text */
  'vision.params-form.type.string': 'text',
  /** Heading of the params the query does not use, listed in the params form */
  'vision.params-form.unused': 'No utilitzat per la consulta',
  /** Before the expressions that use a param, in the params form */
  'vision.params-form.used-in': 'Utilitzat a',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vision.params.fit-height': 'Ajustat al contingut, {{height}} píxels',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vision.params.resize':
    'Canvia la mida dels paràmetres: arrossegueu o utilitzeu les tecles de fletxa; feu doble clic o premeu Retorn per ajustar-lo al contingut de nou',
  /** Tab showing the params as a form inferred from the query */
  'vision.params.view.form': 'Formulari',
  /** Tab showing the params as JSON */
  'vision.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vision.params.view.label': 'Edita els paràmetres com a',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vision.paste.parsed': "Consulta carregada des de l'URL enganxat",
  /** Toast shown after a curl command for a query was pasted and loaded into the tab */
  'vision.paste.parsed-curl': "Consulta carregada des de l'ordre cURL enganxada",
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vision.paste.unavailable-variant':
    'L\'URL enganxat utilitzava la variant "{{variant}}"; seleccioneu-la a la barra de navegació per executar la consulta amb ella.',
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vision.paste.unknown-dataset':
    'El conjunt de dades "{{dataset}}" de l\'URL enganxat no està disponible aquí, es manté l\'actual.',
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vision.paste.unsupported-perspective':
    "La perspectiva de l'URL enganxat no és compatible aquí, es manté l'actual.",
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vision.paste.variants-disabled':
    'L\'URL enganxat utilitzava la variant "{{variant}}"; aquest espai de treball té les variants desactivades, de manera que la consulta s\'executa sense ella.',
  /** Accessible label for the query actions menu */
  'vision.query.actions': 'Accions de la consulta',
  /** Tooltip when automatic refetching is not available for the API version */
  'vision.query.auto-refetch.unsupported':
    "La recàrrega automàtica necessita la versió de l'API v2021-03-25 o posterior.",
  /** Toast shown after the query was copied */
  'vision.query.copied': 'Consulta copiada al porta-retalls',
  /** Menu item copying the query text */
  'vision.query.copy': 'Copia la consulta',
  /** Menu item opening the export query dialog */
  'vision.query.export': 'Exporta la consulta…',
  /** Menu item reformatting the query */
  'vision.query.prettify': 'Formata la consulta',
  /** Toast shown when the query could not be reformatted */
  'vision.query.prettify.failed': "No s'ha pogut formatar la consulta",
  /** Menu item saving the query to the personal saved queries */
  'vision.query.save': 'Desa la consulta',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vision.query.stop': 'Atura',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vision.query.stop.description': 'Atura la consulta',
  /** Explanation in the settings section about the redesigned experience */
  'vision.redesign.settings.description':
    'Esteu utilitzant el Vision redissenyat. En tornar a la versió anterior, es conservaran les pestanyes i la configuració en aquest navegador per a la propera vegada que ho proveu.',
  /** Title of the settings section about the redesigned experience */
  'vision.redesign.settings.title': 'Vision redissenyat (beta)',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vision.redesign.switch-to-classic': 'Canvia al Vision clàssic',
  /** Toast button that switches to the redesigned tool */
  'vision.redesign.toast.accept': 'Prova-ho ara',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vision.redesign.toast.description':
    'Pestanyes de consulta, recàrrega en viu, detalls de la resposta i exportacions. Podeu tornar enrere en qualsevol moment.',
  /** Toast button that hides the invitation */
  'vision.redesign.toast.dismiss': 'Ara no',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vision.redesign.toast.title': 'Prova el Vision redissenyat',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vision.redesign.try': 'Prova el redisseny',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vision.redesign.try.description':
    'Canvia al Vision redissenyat, en beta. Podeu tornar enrere en qualsevol moment des de la seva barra lateral.',
  /** Empty state of the response panel before anything was fetched */
  'vision.response.empty': "Encara no s'ha obtingut res",
  /** Label for the payload size in the response tab */
  'vision.response.payload-size': 'Mida de la càrrega útil',
  /** Label for the sync tags in the response tab */
  'vision.response.sync-tags': 'Etiquetes de sincronització',
  /** Shown when the response carried no sync tags */
  'vision.response.sync-tags.none': 'No hi ha etiquetes de sincronització a la resposta',
  /** Under the query URL when the request went out as a POST body rather than that URL */
  'vision.response.url.sent-as-post':
    'Enviat com a cos POST: la consulta i els paràmetres són massa llargs per a un URL, de manera que @sanity/client els ha enviat com a JSON. Si enganxeu aquest URL a Vision, encara es carregarà la consulta.',
  /** Accessible label for the result actions menu */
  'vision.result.actions': 'Accions del resultat',
  /** Toast shown after the result was copied */
  'vision.result.copied': 'Resultat copiat al porta-retalls',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vision.result.copied-value': '{{path}} copiat',
  /** Menu item and button copying the result as JSON */
  'vision.result.copy': 'Copia el resultat',
  /** Button next to each property in the result tree, copying its value */
  'vision.result.copy-value': 'Copia el valor',
  /** Empty state of the result view */
  'vision.result.empty': "Executeu la consulta per veure'n el resultat aquí",
  /** Button exporting the result as CSV */
  'vision.result.export-csv': 'Exporta a CSV',
  /** Button exporting the result as JSON */
  'vision.result.export-json': 'Exporta a JSON',
  /** Menu item opening the TypeScript export dialog */
  'vision.result.export-typescript': 'Exporta a TypeScript…',
  /** Menu item opening the Zod export dialog */
  'vision.result.export-zod': 'Exporta a Zod…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vision.result.graph.collapse': 'Amaga el que conté',
  /** Button fitting the whole graph in view */
  'vision.result.graph.fit': 'Ajusta a la vista',
  /** Accessible label of the graph, saying how to move around in it */
  'vision.result.graph.label':
    'Gràfic de resultats: arrossegueu per moure, feu scroll per ampliar; amb el focus actiu, les fletxes mouen, + i - amplien, 0 ajusta',
  /** Ends the note on a graph that leaves part of this result out */
  'vision.result.graph.left-out-hint': 'Les vistes en arbre i JSON el mostren tot.',
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vision.result.graph.node-limit': 'Només es dibuixen els primers {{nodes}} objectes i matrius.',
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vision.result.graph.partial': 'Només es llisten les primeres {{rows}} entrades per a {{nodes}}.',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vision.result.graph.partial.node': '{{name}} ({{entries}} entrades)',
  /** Title of the graph node of the result itself */
  'vision.result.graph.root': 'resultat',
  /** Button zooming into the graph */
  'vision.result.graph.zoom-in': 'Amplia',
  /** Button zooming out of the graph */
  'vision.result.graph.zoom-out': 'Redueix',
  /** Tab showing the result as a graph of its objects and arrays */
  'vision.result.view.graph': 'Gràfic',
  /** Tab showing the result as indented JSON text, to select and copy from */
  'vision.result.view.json': 'JSON',
  /** Accessible label of the tabs that switch how the result shows */
  'vision.result.view.label': 'Vista del resultat',
  /** Tab showing the result as a tree to browse */
  'vision.result.view.tree': 'Arbre',
  /** Empty state of the saved queries panel */
  'vision.saved.empty':
    'Encara no hi ha consultes desades. Deseu la consulta actual amb el botó +.',
  /** Empty state of a query list when the search matches nothing */
  'vision.saved.empty-search': 'Cap consulta coincideix amb la vostra cerca',
  /** Menu item loading a saved query into the active tab */
  'vision.saved.load-in-current-tab': 'Carrega a la pestanya actual',
  /** Menu item opening a saved query in a new tab */
  'vision.saved.open-in-new-tab': 'Obre en una pestanya nova',
  /** Menu item renaming a saved query */
  'vision.saved.rename': 'Canvia el nom',
  /** Accessible label for the button saving the current query */
  'vision.saved.save-current': 'Desa la consulta actual',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vision.saved.unavailable-variant':
    'Aquesta consulta desada utilitzava la variant "{{variant}}"; seleccioneu-la a la barra de navegació per executar la consulta amb ella.',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vision.saved.unknown-dataset':
    'El dataset "{{dataset}}" d\'aquesta consulta desada no està disponible aquí; es manté l\'actual.',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vision.saved.variants-disabled':
    'Aquesta consulta desada utilitzava la variant "{{variant}}"; aquest espai de treball té les variants desactivades, de manera que la consulta s\'executa sense ella.',
  /** Button in the settings dialog that clears the stored state */
  'vision.settings.clear-storage': "Neteja l'emmagatzematge",
  /** Confirmation button for clearing the storage */
  'vision.settings.clear-storage.confirm': "Sí, neteja l'emmagatzematge",
  /** Explanation of what clearing the storage does */
  'vision.settings.clear-storage.description':
    "Elimina les vostres consultes desades personals i la biblioteca de funcions, reinicia les pestanyes obertes i aquests valors predeterminats en aquest navegador, i torna a l'eina Vision clàssica. Les consultes compartides es mantenen.",
  /** Toast shown when the saved queries could not be cleared */
  'vision.settings.clear-storage.error': "No s'han pogut netejar les consultes desades",
  /** Toast shown after the storage was cleared */
  'vision.settings.clear-storage.success': 'Emmagatzematge netejat',
  /** Explanation at the top of the settings dialog */
  'vision.settings.description':
    'Valors predeterminats per a les pestanyes noves. Les pestanyes obertes mantenen les seves pròpies opcions.',
  /** Explains the setting listing the fields left out of History diffs */
  'vision.settings.history-diff.description':
    "Un camí de camp per línia. Un camí coincideix a qualsevol profunditat d'un resultat, de manera que _rev amaga la revisió de tots els documents que conté. Cada diferència encara els pot mostrar.",
  /** Button restoring the default fields left out of History diffs */
  'vision.settings.history-diff.reset': 'Restableix als valors predeterminats',
  /** Label of the setting listing the fields left out of History diffs */
  'vision.settings.history-diff.title': "Camps amagats de les diferències de l'historial",
  /** Title of the settings dialog */
  'vision.settings.title': 'Configuració',
  /** Empty state of the shared queries panel */
  'vision.shared.empty':
    'Encara no hi ha consultes compartides. Comparteix una consulta desada per fer-la disponible a tothom qui utilitzi aquest dataset.',
  /** Shortcut description: close dialogs and menus */
  'vision.shortcuts.close': 'Tanca els diàlegs i els menús',
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vision.shortcuts.complete': 'Completa un nom de funció',
  /** Shortcut description: copy the query */
  'vision.shortcuts.copy-query': 'Copia la consulta',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vision.shortcuts.extract-function': 'Extreu la projecció al cursor a una funció',
  /** Shortcut description: run the query */
  'vision.shortcuts.fetch': 'Obté la consulta',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vision.shortcuts.next-finding': 'Salta a la següent troballa de linting',
  /** Shortcut description: reformat the query */
  'vision.shortcuts.prettify': 'Embelleix la consulta',
  /** Title of the keyboard shortcuts dialog */
  'vision.shortcuts.title': 'Dreceres de teclat',
  /** Sidebar toggle: show icons only */
  'vision.sidebar.collapse': 'Replega la barra lateral',
  /** Sidebar toggle: show labels next to the icons */
  'vision.sidebar.expand': 'Expandeix la barra lateral',
  /** Accessible label for the sidebar navigation */
  'vision.sidebar.label': 'Barra lateral de Vision',
  /** Sidebar item and drawer title for personal saved queries */
  'vision.sidebar.saved-queries': 'Consultes desades',
  /** Sidebar item opening the settings dialog */
  'vision.sidebar.settings': 'Configuració',
  /** Sidebar item and drawer title for shared queries */
  'vision.sidebar.shared-queries': 'Consultes compartides',
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vision.sidebar.shortcuts': 'Dreceres de teclat',
  /** Empty state of the content source map panel */
  'vision.source-map.empty':
    'No hi ha cap mapa de font de contingut a la resposta. Activeu "Incloure mapa de font de contingut" a Opcions i torneu a obtenir-lo.',
  /** Accessible label of the divider between the result and the response details panel */
  'vision.split.bottom-panel':
    'Redimensiona el panell de detalls de la resposta: arrossega o utilitza les tecles de fletxa; Inici i Final van als límits, Retorn reinicia',
  /** Accessible label of the divider between the request and response panes */
  'vision.split.request-response':
    'Redimensiona els panells de sol·licitud i resposta: arrossega o utilitza les tecles de fletxa; Inici i Final van als límits, Retorn reinicia',
  /** Accessible label for the button closing a query tab */
  'vision.tabs.close-tab': 'Tanca la pestanya',
  /** Accessible label for the list of query tabs */
  'vision.tabs.label': 'Pestanyes de consulta',
  /** Accessible label for the button opening a new query tab */
  'vision.tabs.new-tab': 'Pestanya nova',
  /** Placeholder of the input renaming a tab */
  'vision.tabs.title-placeholder': 'Títol de la pestanya',
  /** Title of a tab whose query is still empty */
  'vision.tabs.untitled': 'Consulta sense títol',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vision.webmcp.check-query': 'Comprova una consulta GROQ a Vision',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vision.webmcp.describe-schema': "Descriu l'esquema a Vision",
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vision.webmcp.explain-query': 'Explica una consulta GROQ a Vision',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vision.webmcp.get-state': 'Llegeix la pestanya oberta de Vision',
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vision.webmcp.open-query': 'Obre una consulta GROQ a Vision',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vision.webmcp.preview-mutations': 'Previsualitza mutacions a Vision',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vision.webmcp.run-query': 'Executa una consulta GROQ a Vision',
})
