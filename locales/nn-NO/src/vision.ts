import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Kopier til utklippstavla',
  /** Label for deleting a query */
  'action.delete': 'Slett',
  /** Label for editing a query's title */
  'action.edit-title': 'Rediger tittel',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Stopp',
  /** Label for setting up a listener */
  'action.listen-execute': 'Lytt',
  /** Label for query loading table */
  'action.load-queries': 'Last inn førespurnader',
  /** Label for loading a query */
  'action.load-query': 'Last inn førespurnad',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Avbryt',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Hent',
  /** Label for saving a query */
  'action.save-personal-copy': 'Lagre personleg kopi',
  /** Label for saving a personal query */
  'action.save-personal-query': 'Lagre som personleg',
  /** Label for saving a query */
  'action.save-query': 'Lagre førespurnad',
  /** Label for saving a shared query */
  'action.save-shared-query': 'Lagre som delt',
  /** Label for unsharing a query */
  'action.unshare': 'Avslutt deling',
  /** Label for updating a query */
  'action.update': 'Oppdater',

  /** Label for actions user can take */
  'label.actions': 'Handlingar',
  /** Label for all saved queries */
  'label.all': 'Alle',
  /** Label for saved queries that have been edited */
  'label.edited': 'Redigert',
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Ny',
  /** Label for query type "personal" */
  'label.personal': 'Personleg',
  /** Label for savedAt date */
  'label.saved-at': 'Lagra den',
  /** Saved queries */
  'label.saved-queries': 'Lagra førespurnader',
  /** Search queries */
  'label.search-queries': 'Søk i førespurnader',
  /** Share query */
  'label.share': 'Del',
  /** Label for query type "shared" */
  'label.shared': 'Delt',
  /** Label for saved query type "team" */
  'label.team': 'Lag',
  /** Label for untitled query fallback */
  'label.untitled-query': 'Utan tittel',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'Parameterane er ikkje gyldig JSON',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Parametrar',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Kolonne',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Linje',
  /** Extra explanation when a 400 is returned for a release perspective on an old API version */
  'query.error.unsupported-release-perspective':
    'Denne API-versjonen støttar ikkje komplekse perspektiv. Bruk {{apiVersion}} eller nyare.',
  /** Extra explanation when a 400 is returned for a variant on an incompatible API version */
  'query.error.unsupported-variant':
    'Denne API-versjonen støttar ikkje innhaldsvariantar. Bruk den eksperimentelle API-versjonen ({{apiVersion}}).',
  /** Label for "Query" editor/input */
  'query.label': 'Forespørsel',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'Forespørsel URL',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'Ende-til-ende',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'Utføringstid',
  /** Label for "Result" explorer/view */
  'result.label': 'Resultat',
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable': 'Resultatet kan ikkje kodast som CSV',
  /** Label for "Save result as" result action */
  'result.save-result-as-format': 'Lagre resultat som <SaveResultButtons/>',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'Ikkje tilgjengeleg',

  /** Query already saved error label */
  'save-query.already-saved': 'Førespurnaden er allereie lagra',
  /** Save error label */
  'save-query.error': 'Feil ved lagring av førespurnad',
  /** Save personal copy success label */
  'save-query.personal-copy-success': 'Personleg kopi lagra',
  /** Warning displayed before sharing a query */
  'save-query.share-warning':
    'Delte spørjingar vert lagra som dokument i dataset-et ditt og tel mot dokumentkvoten din.',
  /** Save shared query success label */
  'save-query.shared-success': 'Delt spørjing lagra',
  /** Save success label */
  'save-query.success': 'Førespurnaden er lagra',
  /** Save unshared query success label */
  'save-query.unshared-success': 'Spørjing flytta til personleg',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'API-versjon',
  /** Tooltip shown when the API version selector is locked because a variant is selected */
  'settings.api-version-locked-for-variant': 'Når ein variant er vald, må API-versjonen vere vX.',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'Tilpassa API-versjon',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Dataset',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'Ugyldig API-versjon',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'Anna',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspektiv',
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    'Perspektivet "<code>previewDrafts</code>" har blitt omdøypt til "<code>drafts</code>" og er no avskrive. Denne endringa er gjeldande for alle versjonar med støtte for perspektiv (>= v2021-03-25).',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Les dokumentasjon',
  /** Option for selecting default perspective */
  'settings.perspectives.default': 'Ingen perspektiv (API standard)',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Perspektiv lar forespørselen din køyre mot ulike "utsyn" av innhaldet i datasettet ditt',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    'Standardperspektivet vil endre seg frå "<code>raw</code>" til "<code>published</code>" i ein kommande API-versjon. Vennligst sjå i dokumentasjonen for meir detaljar.',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': 'Festa utgjeving',
  /** Label for the scheduled drafts perspective */
  'settings.perspectives.scheduled-drafts': 'Planlagde utkast',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspektiv',

  /** Tooltip line of every control that calls Sanity Agent Actions, which bills AI credits */
  'vision.agent-actions.credits': 'Brukar ein AI-kreditt per førespurnad',
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vision.ai-credits.balance': '{{balance}} av {{quota}} AI-kredittar att denne månaden.',
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vision.ai-credits.deficit':
    '{{used}} AI-kredittar brukte denne månaden, {{deficit}} meir enn dei {{quota}} som er inkluderte.',
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vision.ai-credits.limit.description':
    'Organisasjonen din har brukt {{used}} av {{quota}} AI-kredittar denne månaden, så Sanity Agent Actions er stansa til neste månad eller til utgiftsgrensa blir heva.',
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vision.ai-credits.limit.description-unknown':
    'Organisasjonen din har nådd utgiftsgrensa for AI-kredittar, så Sanity Agent Actions er stansa til neste månad eller til grensa blir heva.',
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vision.ai-credits.limit.learn-more': 'Korleis AI-kredittar fungerer',
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vision.ai-credits.limit.manage': 'Administrer AI-kredittar',
  /** Title of the card shown where the organization is out of AI credits */
  'vision.ai-credits.limit.title': 'Tom for AI-kredittar',
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vision.ai-credits.usage': 'AI-bruk',
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vision.ai-credits.used': '{{used}} AI-kredittar brukte denne månaden.',
  /** Button in the request column's action bar naming the API version requests go out with */
  'vision.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vision.api-version.button-cdn': 'API CDN {{version}}',
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vision.api-version.button-invalid': 'Uferdig API-versjon',
  /** Tooltip of the API version button */
  'vision.api-version.tooltip':
    'Spørjingar køyrer mot API-versjon {{version}}. Vel for å endre det i Alternativ.',
  /** Tooltip of the API version button while queries go through the API CDN */
  'vision.api-version.tooltip-cdn':
    'Spørjingar køyrer mot API CDN med API-versjon {{version}}. Vel for å endre det i Alternativ.',
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vision.api-version.tooltip-cdn-blocked':
    'Spørjingar køyrer mot API-et med API-versjon {{version}}, ikkje API CDN: det tener ikkje {{perspective}}-perspektivet. Vel for å endre det i Alternativ.',
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vision.api-version.tooltip-invalid':
    'API-versjonen i Alternativ er uferdig, så ingenting kan hentast før han er fullført.',
  /** Tooltip of the API version button while a selected variant forces the variants API version */
  'vision.api-version.tooltip-locked':
    'Spørjingar køyrer mot API-versjon {{version}}, som den valde varianten treng.',
  /** Label of the document after the change in the Delta panel */
  'vision.delta.after': 'Etter',
  /** Label of the document before the change in the Delta panel */
  'vision.delta.before': 'Før',
  /** What the Delta panel does */
  'vision.delta.description':
    'Køyrer spørjinga i deltamodus, slik GROQ-baserte webhooks, lyttarar og Sanity Functions gjer det: before() og after() er dokumentet før og etter ei endring, @ er dokumentet etter, og delta::changedAny() samanliknar dei. Det køyrer i nettlesaren med groq-js. Ei tom side betyr at det ikkje finst noko dokument: endringa opprettar eller slettar det.',
  /** Label of the document ID field in the Delta panel */
  'vision.delta.document-id': 'Dokument-ID',
  /** Shown when there is a query but no documents to compare */
  'vision.delta.empty':
    'Last historikken til eit dokument, eller skriv dokumenta inn i Før og Etter.',
  /** Shown when the query fails in delta mode */
  'vision.delta.failed': 'Spørjinga kunne ikkje køyrast i deltamodus: {{message}}',
  /** Shown when the After document is not valid JSON */
  'vision.delta.invalid-after': 'Etter er ikkje gyldig JSON: {{message}}',
  /** Shown when the Before document is not valid JSON */
  'vision.delta.invalid-before': 'Before er ikkje gyldig JSON: {{message}}',
  /** Button loading the document's revisions from the History API */
  'vision.delta.load': 'Last historikk',
  /** Shown when the history could not be loaded */
  'vision.delta.load-failed': 'Historikken kunne ikkje lastast: {{message}}',
  /** A delta filter that is true for the change */
  'vision.delta.matches':
    'Treff: ein webhook eller funksjon med dette filteret køyrer for denne endringa.',
  /** A delta filter that is false for the change */
  'vision.delta.no-match':
    'Ikkje treff: ein webhook eller funksjon med dette filteret køyrer ikkje for denne endringa.',
  /** Shown while the query or its params cannot be sent */
  'vision.delta.no-request': 'Rett opp spørjinga og parametrane for å køyre han i delta-modus.',
  /** Heading of the delta result */
  'vision.delta.result': 'Resultat',
  /** The After choice for a change that deletes the document */
  'vision.delta.revision.none-after': 'Ingenting: endringa slettar dokumentet',
  /** The Before choice for a change that creates the document */
  'vision.delta.revision.none-before': 'Ingenting: endringa opprettar dokumentet',
  /** A revision in the Before and After lists */
  'vision.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vision.drawer.close': 'Lukk panel',
  /** Explanation at the top of the Explain panel */
  'vision.explain.description':
    'Spørjeplanen er korleis Content Lake køyrer spørjinga: kva som vert lese, filtrert og sortert medan han les, og kva som vert overlate til seinare steg. Forklar dette for meg brukar Sanity Agent Actions til å skildre spørjinga og planen i vanlege ord, noko som brukar éin AI-kreditt.',
  /** Shown in the Explain panel while there is no valid query to explain */
  'vision.explain.empty': 'Skriv ein spørjing for å forklare han.',
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vision.explain.explain': 'Forklar dette for meg',
  /** Shown when the explanation could not be written */
  'vision.explain.failed': 'Spørjinga kunne ikkje forklarast: {{message}}',
  /** A count the index computes without reading the documents */
  'vision.explain.insight.aggregate': 'Talt opp i indeksen, utan å lese dokumenta.',
  /** A subquery the plan runs once for all documents */
  'vision.explain.insight.batched-subquery':
    'Underspørjinga køyrer éin gong for alle dokumenta, i éin samla henting, ikkje éin gong per dokument.',
  /** Part of the filter runs in memory; the expression follows */
  'vision.explain.insight.filter-in-memory':
    'Delar av filteret køyrer i minnet, etter lesing: kvart dokument indeksen slepp gjennom vert lese først, noko som vert tregt på store datasett. Koplingar (->) og funksjonar i eit filter kan ikkje bruke indeksen.',
  /** The index sorts and limits while reading */
  'vision.explain.insight.index-sort-limit':
    'Indeksen sorterer og avgrensar dokumenta medan dei vert lesne.',
  /** The plan slices in memory */
  'vision.explain.insight.slice-in-memory':
    'Utsnittet vert teke i minnet etter lesing, ikkje som ei avgrensing medan han les.',
  /** The plan sorts in memory */
  'vision.explain.insight.sort-in-memory':
    'Sorteringa skjer i minnet, etter at alle treff er lesne. Sorter etter attributt indeksen kan sortere etter.',
  /** Link under the plan insights to the guide on fast queries */
  'vision.explain.insights.guide': 'Høgtytande GROQ',
  /** Heading of the plan insights in the Explain panel */
  'vision.explain.insights.title': 'Det som peikar seg ut',
  /** Button in the Explain panel fetching the query plan */
  'vision.explain.plan': 'Vis spørjeplanen',
  /** Shown when the query plan could not be fetched */
  'vision.explain.plan-failed': 'Spørjeplanen kunne ikkje hentast: {{message}}',
  /** Heading of the query plan in the Explain panel */
  'vision.explain.plan-title': 'Spørjeplan',
  /** Toast shown after a code snippet was copied */
  'vision.export-query.copied': 'Snuttkopiert til utklippstavla',
  /** Label for the button that copies a code snippet */
  'vision.export-query.copy': 'Kopier snutt',
  /** Explanation at the top of the export query dialog */
  'vision.export-query.description':
    'Køyr denne spørjinga utanfor studioet med ein av desse snuttane.',
  /** Note under the curl snippet when the query is sent as a request body rather than in the URL */
  'vision.export-query.post-body-note':
    'Spørjinga og parametrane blir til {{size}} teikn som søkjeparametrar; frå {{limit}} og oppover sender @sanity/client dei som ein JSON-kropp i staden for i URL-en, så snutten gjer det same.',
  /** Title of the dialog that exports the query as code snippets */
  'vision.export-query.title': 'Eksporter spørjing',
  /** Note about authentication in the export query dialog */
  'vision.export-query.token-note':
    'Private datasett treng eit API-token. Offentlege datasett kan droppe Authorization-headeren.',
  /** Toast shown after the generated code was copied */
  'vision.export-types.copied': 'Kode kopiert til utklippstavla',
  /** Label for the button that copies the generated code */
  'vision.export-types.copy': 'Kopier kode',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vision.export-types.empty':
    'Hent spørjinga først, slik at det finst eit resultat å utleie typar frå.',
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vision.export-types.schema-error': 'Skjemaevaluering feila: {{message}}',
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vision.export-types.source.result':
    'Utleidd frå det henta resultatet, sidan spørjinga ikkje kunne evaluerast mot arbeidsområdeskjemaet.',
  /** Note shown when the types were derived from the workspace schema */
  'vision.export-types.source.schema':
    'Utleidd frå arbeidsområdeskjemaet, på same måte som sanity typegen gjer det.',
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vision.export-types.stale-result':
    'Resultatet som vert vist, vart henta for ei anna spørjing eller andre parametrar. Hent den gjeldande spørjinga først, slik at det finst eit resultat å utleie typar frå.',
  /** Title of the dialog exporting TypeScript types for the result */
  'vision.export-types.title-typescript': 'Eksporter TypeScript',
  /** Title of the dialog exporting a Zod schema for the result */
  'vision.export-types.title-zod': 'Eksporter Zod',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vision.functions.add': 'Legg til i spørjinga',
  /** Shown on a library function the query declares the same way */
  'vision.functions.declared': 'I denne spørjinga',
  /** Lint action on a call of a library function the query does not declare */
  'vision.functions.editor.add-from-library': 'Deklarer han',
  /** Note in a function's hover documentation: the API version it needs */
  'vision.functions.editor.api-version': 'Krev API-versjon {{version}} eller nyare',
  /** Detail of a completion for a custom function the query declares */
  'vision.functions.editor.completion-declared': 'i denne spørjinga',
  /** Detail of a completion for a library function, which declares it too */
  'vision.functions.editor.completion-library': 'frå biblioteket ditt',
  /** Note in the hover documentation of a custom function the query declares */
  'vision.functions.editor.declared-on': 'Tilpassa funksjon, deklarert på linje {{line}}',
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vision.functions.editor.delta-only':
    'Fungerer berre i delta-modus, der webhooks og Sanity Functions køyrer filtra sine',
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vision.functions.editor.extract': 'Trekk ut til funksjon',
  /** Note in the hover documentation of a library function the query does not declare */
  'vision.functions.editor.in-library':
    'I funksjonsbiblioteket ditt, ikkje erklært i denne spørjinga',
  /** Link at the end of a built-in function's hover documentation */
  'vision.functions.editor.reference': 'GROQ-funksjonsreferanse',
  /** Explanation under the library heading in the Functions panel */
  'vision.functions.library.description':
    'Blir lagra i denne nettlesaren for kvart datasett i prosjektet. Fullføringar tilbyr desse funksjonane, og lint føreslår å erklære ein funksjonen spørjinga kallar.',
  /** Shown in the Functions panel while the library is empty */
  'vision.functions.library.empty':
    'Lagre ein funksjon som spørjinga erklærer for å bruke han i andre spørjingar.',
  /** Heading of the functions library in the Functions panel */
  'vision.functions.library.title': 'Bibliotek',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vision.functions.query.empty':
    'Erklær tilpassa funksjonar øvst i spørjinga, eller plasser markøren i ein projeksjon, som author->{name}, og trykk på uttrekksknappen over redigeringsfeltet ({{shortcut}}).',
  /** Heading of the functions the query declares in the Functions panel */
  'vision.functions.query.title': 'I denne spørjinga',
  /** Removes a function from the library */
  'vision.functions.remove': 'Fjern frå biblioteket',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vision.functions.replace': 'Erstatt i spørjinga',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vision.functions.reveal': 'Vis {{name}} i redigeringsfeltet',
  /** Button of a function the query declares that is not in the library yet */
  'vision.functions.save': 'Lagre til biblioteket',
  /** Shown on a function the query declares the way the library has it */
  'vision.functions.saved': 'Lagra',
  /** Button of a function the query declares differently from the library's version */
  'vision.functions.update': 'Oppdater biblioteket',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vision.generate.button': 'Generer spørjing',
  /** Closes the generate query bar */
  'vision.generate.close': 'Lukk',
  /** Explanation under the generate query field */
  'vision.generate.description':
    'Sanity Agent Actions skriv GROQ ut frå skildringa di og dokumenttypane, og Content Lake kontrollerer kvart forsøk; kvart forsøk brukar éin AI-kreditt. Dette erstattar spørjinga i denne fana og køyrer ho; angre i redigeringsfeltet hentar tilbake den førre spørjinga.',
  /** Shown when no query could be generated, above the reason */
  'vision.generate.failed': 'Spørjinga kunne ikkje genererast',
  /** Accessible label of the description field in the generate query bar */
  'vision.generate.label': 'Kva skal spørjinga hente?',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vision.generate.open-anyway': 'Opne det siste forsøket',
  /** Placeholder of the description field in the generate query bar */
  'vision.generate.placeholder':
    'Dei 10 nyaste forfattarane, sortert etter etternamn og deretter fornamn',
  /** Shown while the first attempt at a query is written */
  'vision.generate.progress': 'Skriv spørjinga…',
  /** Shown while a rejected attempt is retried */
  'vision.generate.progress-retry': 'Rettar spørjinga (forsøk {{attempt}} av {{max}})…',
  /** Button generating the query */
  'vision.generate.submit': 'Generer',
  /** Badge on a history entry the API CDN answered */
  'vision.history.cdn': 'API CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vision.history.cdn-cache-hit': 'CDN-treff i hurtigbuffer',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vision.history.changed': 'Endra',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vision.history.changes': 'Endringar',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vision.history.changes-failed': 'Endringane kunne ikkje visast.',
  /** Button retrying to show the changes of a history entry */
  'vision.history.changes-retry': 'Prøv igjen',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vision.history.compared-with': 'Samanlikna med henting klokka {{time}}',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vision.history.diff.params': 'Parametrar',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vision.history.diff.query': 'Spørjing',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vision.history.diff.query-formatting-only': 'Berre formateringa vart endra',
  /** Label of the diff of the query result in a history entry's changes */
  'vision.history.diff.result': 'Resultat',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vision.history.diff.url': 'Førespurnads-URL',
  /** Empty state of the history panel */
  'vision.history.empty': 'Ingenting henta enno',
  /** Status label for a failed fetch in the history */
  'vision.history.failed': 'Feila',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vision.history.hide-hidden': 'Gøym dei',
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vision.history.hiding': 'Gøymer {{fields}}',
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vision.history.only-hidden-changed': 'Berre gøymde felt vart endra',
  /** History reason: a tab opened with a generated query fetched it */
  'vision.history.reason.generated': 'Generert spørjing',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vision.history.reason.link': 'Opna lenke',
  /** History reason: a live event matched the query's sync tags */
  'vision.history.reason.live': 'Direkte oppdatering',
  /** History reason: the live connection asked every client to refetch */
  'vision.history.reason.live-restart': 'Direktesambandet vart starta på nytt',
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vision.history.reason.live-start': 'Direktehenting starta',
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vision.history.reason.load': 'Spørjing lasta inn',
  /** History reason: the fetch button was pressed */
  'vision.history.reason.manual': 'Hentingsknapp',
  /** History reason: mutations were applied from the Mutate panel */
  'vision.history.reason.mutation': 'Mutasjonar brukte',
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vision.history.reason.options': 'Val endra',
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vision.history.reason.paste': 'Lima inn URL',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vision.history.reason.resume': 'Automatisk omhenting gjenoppteken',
  /** History reason: the keyboard shortcut was used */
  'vision.history.reason.shortcut': 'Tastatursnarveg',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vision.history.same-result': 'Same resultat',
  /** Button showing the hidden fields in a history entry's changes */
  'vision.history.show-hidden': 'Vis dei',
  /** Next to a history entry's changes while the hidden fields are shown */
  'vision.history.showing-hidden': 'Viser {{fields}}, skjult som standard',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vision.history.too-large': 'For stort til å samanlikne',
  /** A history entry whose result is the same as the previous result */
  'vision.history.unchanged': 'Ingen endringar',
  /** Shown in the Lint panel while the query has no lint findings */
  'vision.lint.empty':
    'Ingen lint-funn. Problem GROQ-linteren oppdagar i spørjinga vert lista opp her medan du skriv; vel eitt for å markere det i redigeringsverktøyet.',
  /** Where a lint finding sits in the query, shown under its message */
  'vision.lint.position': 'Linje {{line}}, kolonne {{column}}',
  /** Severity badge of a lint finding */
  'vision.lint.severity.error': 'Feil',
  /** Severity badge of a lint finding */
  'vision.lint.severity.hint': 'Hint',
  /** Severity badge of a lint finding */
  'vision.lint.severity.info': 'Info',
  /** Severity badge of a lint finding */
  'vision.lint.severity.warning': 'Åtvaring',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vision.lint.use-suggestion': 'Bruk {{suggestion}}',
  /** Badge shown while a tab refetches automatically */
  'vision.live.active': 'Direkte',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vision.live.button': 'Direkte henting',
  /** Tooltip of the Live button while automatic refetching is off */
  'vision.live.button.start': 'Hent, og hent igjen når dokumenta i resultatet endrar seg',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vision.live.button.stop':
    'Stopp henting når dokumenta i resultatet endrar seg. Hent vil framleis hente på førespurnad, for resultat som ingen dokumentendring påverkar, som now()',
  /** Error shown when the live connection breaks */
  'vision.live.error': 'Direkteoppdateringar fråkopla: {{message}}',
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vision.live.stop': 'Stopp direkte',
  /** Button in the Mutate panel adding a mutation to the list */
  'vision.mutate.add': 'Legg til mutasjon',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vision.mutate.add.create': 'Opprett eit dokument',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vision.mutate.add.delete': 'Slett eit dokument',
  /** Adds a mutation deleting the documents of the shown result */
  'vision.mutate.add.delete-result': 'Slett dokumenta i resultatet',
  /** Adds a mutation patching a document, its ID to fill in */
  'vision.mutate.add.patch': 'Oppdater eit dokument',
  /** Adds a mutation patching the documents of the shown result */
  'vision.mutate.add.patch-result': 'Patch dokumenta i resultatet',
  /** Button applying the mutations a dry run showed */
  'vision.mutate.apply': 'Bruk på {{dataset}}',
  /** Heading of the error shown when applying the mutations failed */
  'vision.mutate.apply-failed': 'Mutasjonane vart ikkje brukte',
  /** Next to Apply while the mutations as they are have had no dry run */
  'vision.mutate.apply-needs-preview': 'Bruk sender det ein prøvekøyring viste: køyr ein først.',
  /** Option giving array items without a _key one */
  'vision.mutate.auto-keys': 'Legg til ein _key på arrayelement som manglar det',
  /** Under the option giving array items a _key */
  'vision.mutate.auto-keys.description':
    'Studioet treng ein på kvart arrayelement for å redigere det.',
  /** Button showing a document's changes in the dry run */
  'vision.mutate.changes': 'Endringar',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vision.mutate.changes-failed': 'Endringane kunne ikkje visast.',
  /** Button retrying to show a document's changes */
  'vision.mutate.changes-retry': 'Prøv igjen',
  /** What the Mutate panel does */
  'vision.mutate.description':
    'Skriv mutasjonar slik Mutations API tek imot dei, i ei liste: create, createOrReplace, createIfNotExists, delete og patch, etter ID eller etter eit GROQ-spørsmål. Ein prøvekøyring viser kva dei ville gjort med kvart dokument utan å endre noko; Bruk skriv dei så til datasettet i éin transaksjon, med kontoen din.',
  /** What the API says went wrong with one of the mutations */
  'vision.mutate.failure-item': 'Mutasjon {{index}}: {{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vision.mutate.generate.button': 'Generer mutasjonar',
  /** Explanation under the generate mutations field */
  'vision.mutate.generate.description':
    'Sanity Agent Actions skriv mutasjonane frå skildringa di, dokumenta i resultatet og typane deira, og ein prøvekøyring sjekkar kvart forsøk; kvart forsøk brukar éin AI-kreditt. Dei erstattar mutasjonane her, der angre bringar desse tilbake; ingenting vert skrive før du brukar dei.',
  /** Shown when no mutations could be generated, above the reason */
  'vision.mutate.generate.failed': 'Mutasjonane kunne ikkje genererast',
  /** Accessible label of the description field in the generate mutations bar */
  'vision.mutate.generate.label': 'Kva skal mutasjonane gjere?',
  /** Placeholder of the description field in the generate mutations bar */
  'vision.mutate.generate.placeholder': 'Endre tittelen på dokumenta i resultatet til foobar',
  /** Shown while the first attempt at the mutations is written */
  'vision.mutate.generate.progress': 'Skriv mutasjonane…',
  /** Shown while an attempt the dry run turned down is retried */
  'vision.mutate.generate.progress-retry': 'Rettar mutasjonane (forsøk {{attempt}} av {{max}})…',
  /** Under the dry run: the fields the diffs leave out */
  'vision.mutate.hiding': 'Endringane utelèt {{fields}}, slik Historikk gjer.',
  /** Shown when the mutations are not valid JSON */
  'vision.mutate.invalid-json': 'Mutasjonane er ikkje gyldig JSON: {{message}}',
  /** Shown when a mutation does not name exactly one thing to do */
  'vision.mutate.invalid-mutation':
    'Mutasjon {{index}} treng nøyaktig éin av create, createOrReplace, createIfNotExists, delete eller patch.',
  /** Label of the mutations editor */
  'vision.mutate.mutations': 'Mutasjonar',
  /** The dry run touched no documents */
  'vision.mutate.no-documents': 'Mutasjonane rører ingen dokument.',
  /** Shown when the JSON is not a list of mutations */
  'vision.mutate.not-a-list':
    'Skriv ei liste med mutasjonar, ei einskild mutasjon, eller ein forespurnadskropp med ei liste med mutasjonar.',
  /** A document the mutations create */
  'vision.mutate.operation.create': 'Opprett',
  /** A document the mutations delete */
  'vision.mutate.operation.delete': 'Slett',
  /** A document the mutations touch without changing its content */
  'vision.mutate.operation.none': 'Inga endring',
  /** A document the mutations change */
  'vision.mutate.operation.update': 'Oppdater',
  /** Button running the mutations as a dry run */
  'vision.mutate.preview': 'Prøvekøyring',
  /** Heading of the error shown when the dry run failed */
  'vision.mutate.preview-failed': 'Prøvekøyringa feila',
  /** Heading of the dry run's outcome */
  'vision.mutate.preview-heading': 'Prøvekøyring',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vision.mutate.stale':
    'Mutasjonane, datasettet eller alternativa har endra seg etter denne prøvekøyringa. Køyr på nytt for å bruke dei.',
  /** How many documents the dry run changes and leaves as they are */
  'vision.mutate.summary': 'Endra: {{changed}} · Uendra: {{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vision.network.cache': 'Mellomlager',
  /** The API CDN answered from its cache */
  'vision.network.cache.hit': 'Treff',
  /** Under the details of a CDN cache hit */
  'vision.network.cache.hit-explained':
    'CDN-en svarte med eit svar han hadde mellomlagra, frå ein stad nær deg; spørjinga nådde ikkje API-et.',
  /** The API CDN answered with a response this session had not seen */
  'vision.network.cache.miss': 'Ikkje treff, så vidt denne økta kan sjå',
  /** The API answered, which caches nothing */
  'vision.network.cache.none': 'Ingen, API-et svarer på kvar førespurnad med ferskt innhald',
  /** Shown in the Network panel while there is no response */
  'vision.network.empty':
    'Hent spørjinga for å sjå kva for endepunkt som svarte på henne, om det var frå eit mellomlager, og kvar ho køyrde.',
  /** In the Network panel: the endpoint that answered */
  'vision.network.endpoint': 'Svart av',
  /** The live API answered */
  'vision.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vision.network.endpoint.cdn': 'API CDN',
  /** In the Network panel: the HTTP method the query was sent with */
  'vision.network.method': 'Metode',
  /** The query and its params went in the URL */
  'vision.network.method.get': 'GET, med spørjinga og parametra i URL-en',
  /** The query and its params went in the request body */
  'vision.network.method.post': 'POST, med spørjinga og parametra som ein JSON-kropp',
  /** Under the method of a POST request: why the query was not sent in the URL */
  'vision.network.method.post-explained':
    'Spørjinga og parametra kjem til {{size}} teikn som søkjeparametrar; frå {{limit}} av sender @sanity/client dei som ein JSON-kropp, sidan API-et avgrensar lengda på ein URL. Alternativa blir verande i URL-en.',
  /** In the Network panel: the region the query ran in */
  'vision.network.region': 'Spørjinga køyrde i',
  /** The response did not say where the query ran */
  'vision.network.region.unknown': 'Ikkje rapportert',
  /** In the Network panel: the round trip and the time on the server */
  'vision.network.timing': 'Tid',
  /** The round trip and the server's time for the query, in milliseconds */
  'vision.network.timing.value': '{{e2e}}ms tur-retur, {{server}}ms på serveren',
  /** In the Network panel: the trace of the request, for Sanity support */
  'vision.network.trace': 'Trace-ID',
  /** Hint in the Network panel while queries go to the API */
  'vision.network.use-cdn-hint':
    'Slå på Bruk API CDN i Alternativ for å sende spørjingar gjennom CDN-en.',
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vision.network.you': 'Deg',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vision.options.dataset.follows-workspace': 'Følgjer arbeidsområdet',
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vision.options.dataset.pin': 'Fest eit datasett',
  /** Hint under the dataset field while a dataset is pinned */
  'vision.options.dataset.pinned': 'Festa; arbeidsområdet kan bruke eit anna datasett',
  /** Button that makes the tab follow the workspace's dataset again */
  'vision.options.dataset.use-workspace': 'Bruk datasettet til arbeidsområdet',
  /** Label for the "Include content source map" switch */
  'vision.options.include-source-map': 'Inkluder innhaldskjeldekart',
  /** Description for the "Include content source map" switch */
  'vision.options.include-source-map.description':
    'Legg til resultSourceMap i svaret, vist i fana Innhaldskjeldekart.',
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vision.options.perspective.global': 'Global ({{name}})',
  /** Label of the switch that sends queries to the API CDN */
  'vision.options.use-cdn': 'Bruk API CDN',
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vision.options.use-cdn.anonymous':
    'Dette studioet loggar deg inn med ei informasjonskapsel, som API CDN-en aldri mottek: han svarer som om han var ein anonym besøkjande, med det eit offentleg datasett viser.',
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vision.options.use-cdn.blocked':
    'API CDN-en betener ikkje utkast eller utgjevingar, så spørjingar med perspektivet {{perspective}} går til API-en. Med publisert eller raw brukar dei CDN-en.',
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vision.options.use-cdn.blocked.title': 'Spørjingar går til API-en, ikkje CDN-en',
  /** Description of the API CDN switch */
  'vision.options.use-cdn.description':
    'Sender spørjinga til API CDN-en, som useCdn: true i @sanity/client, med dei publiserte og raw-perspektiva: utkast og utgjevingar går alltid til API-en. Svara blir mellomlagra i opptil eitt minutt; Nettverk-panelet viser når eit svar kom frå mellomlageret.',
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vision.options.use-cdn.use-published': 'Bruk det publiserte perspektivet',
  /** Label of the variant field */
  'vision.options.variant-label': 'Variant',
  /** Variant option sending the navbar's variant, named */
  'vision.options.variant.global': 'Global ({{name}})',
  /** Variant option sending the navbar's variant while none is selected there */
  'vision.options.variant.global-none': 'Global (ingen vald)',
  /** Variant option sending no variant */
  'vision.options.variant.none': 'Ingen',
  /** Accessible label for collapsing a bottom panel */
  'vision.panel.collapse': 'Slå saman panel',
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vision.panel.delta': 'Delta',
  /** Accessible label for expanding a bottom panel */
  'vision.panel.expand': 'Utvid panel',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vision.panel.explain': 'Forklar',
  /** Label of the Functions tab in the response panel */
  'vision.panel.functions': 'Funksjonar',
  /** Label of the "History" tab in the response panel */
  'vision.panel.history': 'Historikk',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vision.panel.lint': 'Lint',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vision.panel.mutate': 'Muter',
  /** Label of the Network tab in the response panel */
  'vision.panel.network': 'Nettverk',
  /** Label of the "Options" panel in the request column */
  'vision.panel.options': 'Val',
  /** Label of the "Response" tab in the response panel */
  'vision.panel.response': 'Svar',
  /** Label of the "Content Source Map" tab in the response panel */
  'vision.panel.source-map': 'Content Source Map',
  /** Button adding an item to a list param in the params form */
  'vision.params-form.add-item': 'Legg til element',
  /** Placeholder of a params form field that takes any JSON value */
  'vision.params-form.any-placeholder':
    'Ein vilkårleg JSON-verdi; annan tekst vert sendt som streng',
  /** Shown in the params form when the query uses no params */
  'vision.params-form.empty':
    'Spørjinga bruker ingen parametrar. Kvar $namn i henne får eit felt her.',
  /** Shown in the params form while the params JSON cannot be parsed */
  'vision.params-form.invalid-json':
    'Parametrane er ikkje gyldig JSON. Rett dei i JSON-visninga for å redigere dei her.',
  /** A boolean param's value is not true or false; it is sent anyway */
  'vision.params-form.invalid.boolean': 'Ikkje sann eller usann; sendt som {{value}}',
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vision.params-form.invalid.document-type':
    'Ikkje ein dokumenttype i dette arbeidsområdet; sendt likevel',
  /** A whole number param (a slice bound) holds a fraction */
  'vision.params-form.invalid.integer': 'Ikkje eit heilt tal, som delar treng',
  /** A list param's value is not a list; it is sent anyway */
  'vision.params-form.invalid.list': 'Ikkje ei liste; sendt som {{value}}',
  /** A number param's value is not a number; it is sent anyway */
  'vision.params-form.invalid.number': 'Ikkje eit tal; sendt som tekst',
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vision.params-form.invalid.option': 'Ikkje ein av dei kjende verdiane; sendt likevel',
  /** A text param's value is not text; it is sent anyway */
  'vision.params-form.invalid.string': 'Ikkje tekst; sendt som {{value}}',
  /** Accessible label of an item input of a list param in the params form */
  'vision.params-form.item-label': '${{name}}, element {{index}}',
  /** Placeholder of an item input of a list param in the params form */
  'vision.params-form.item-placeholder': 'Element',
  /** Under a params form field whose param has no value */
  'vision.params-form.missing': 'Ikkje sett: spørjinga feilar til han har ein verdi',
  /** Shown in the params form when the workspace schema could not be read */
  'vision.params-form.no-schema':
    'Typar kjem berre frå spørjinga: arbeidsområdeskjemaet kunne ikkje lesast.',
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vision.params-form.not-set': 'Ikkje sett',
  /** Button setting a date and time param to the current time */
  'vision.params-form.now': 'No',
  /** Button removing a param the query does not use from the params */
  'vision.params-form.remove': 'Fjern',
  /** Accessible label of the button removing an item from a list param */
  'vision.params-form.remove-item': 'Fjern element',
  /** Shown in the params form when the query does not parse */
  'vision.params-form.syntax-error':
    'Spørjinga kan ikkje tolkast, så parametra er lista utan typar.',
  /** Type hint of a params form field: any JSON value */
  'vision.params-form.type.any': 'ein kva som helst JSON-verdi',
  /** Type hint of a params form field: true or false */
  'vision.params-form.type.boolean': 'true eller false',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vision.params-form.type.datetime': 'dato og tid (ISO 8601)',
  /** Type hint of a params form field: a document ID */
  'vision.params-form.type.document-id': 'dokument-ID',
  /** Type hint of a params form field: one of the workspace's document types */
  'vision.params-form.type.document-type': 'dokumenttype',
  /** Type hint of a params form field: a whole number */
  'vision.params-form.type.integer': 'heiltal',
  /** Type hint of a params form field: a list of values */
  'vision.params-form.type.list': 'liste, der kvar {{type}}',
  /** Type hint of a params form field: a number */
  'vision.params-form.type.number': 'tal',
  /** Type hint of a params form field: text */
  'vision.params-form.type.string': 'tekst',
  /** Heading of the params the query does not use, listed in the params form */
  'vision.params-form.unused': 'Ikkje brukt av spørjinga',
  /** Before the expressions that use a param, in the params form */
  'vision.params-form.used-in': 'Brukt i',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vision.params.fit-height': 'Tilpassa innhaldet, {{height}} pikslar',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vision.params.resize':
    'Endre storleik på parametra: dra eller bruk piltastane; dobbeltklikk eller trykk Enter for å tilpasse til innhaldet igjen',
  /** Tab showing the params as a form inferred from the query */
  'vision.params.view.form': 'Skjema',
  /** Tab showing the params as JSON */
  'vision.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vision.params.view.label': 'Rediger parametre som',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vision.paste.parsed': 'Spørjing lasta inn frå lima inn URL',
  /** Toast shown after a curl command for a query was pasted and loaded into the tab */
  'vision.paste.parsed-curl': 'Spørjing lasta inn frå lima inn cURL-kommando',
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vision.paste.unavailable-variant':
    'Den lima inn URL-en brukte varianten «{{variant}}»; vel han i navigasjonslinja for å køyre spørjinga med han.',
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vision.paste.unknown-dataset':
    'Datasettet «{{dataset}}» i den lima inn URL-en er ikkje tilgjengeleg her, held fram med det gjeldande.',
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vision.paste.unsupported-perspective':
    'Perspektivet i den lima inn URL-en er ikkje støtta her, held fram med det gjeldande.',
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vision.paste.variants-disabled':
    'Den lima inn URL-en brukte varianten «{{variant}}»; dette arbeidsområdet har variantar slått av, så spørjinga køyrer utan han.',
  /** Accessible label for the query actions menu */
  'vision.query.actions': 'Spørjingshandlingar',
  /** Tooltip when automatic refetching is not available for the API version */
  'vision.query.auto-refetch.unsupported':
    'Automatisk henting på nytt krev API-versjon v2021-03-25 eller nyare.',
  /** Toast shown after the query was copied */
  'vision.query.copied': 'Spørjinga vart kopiert til utklippstavla',
  /** Menu item copying the query text */
  'vision.query.copy': 'Kopier spørjing',
  /** Menu item opening the export query dialog */
  'vision.query.export': 'Eksporter spørjing…',
  /** Menu item reformatting the query */
  'vision.query.prettify': 'Formater spørjinga',
  /** Toast shown when the query could not be reformatted */
  'vision.query.prettify.failed': 'Kunne ikkje formatere spørjinga',
  /** Menu item saving the query to the personal saved queries */
  'vision.query.save': 'Lagre spørjing',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vision.query.stop': 'Stopp',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vision.query.stop.description': 'Stopp henting',
  /** Explanation in the settings section about the redesigned experience */
  'vision.redesign.settings.description':
    'Du brukar det omdesigna Vision-verktøyet. Om du byter tilbake, blir fanene og innstillingane dine likevel lagra i denne nettlesaren til neste gong du prøver det.',
  /** Title of the settings section about the redesigned experience */
  'vision.redesign.settings.title': 'Omdesigna Vision (beta)',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vision.redesign.switch-to-classic': 'Bytt til klassisk Vision',
  /** Toast button that switches to the redesigned tool */
  'vision.redesign.toast.accept': 'Prøv det no',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vision.redesign.toast.description':
    'Spørjingsfaner, direkte oppdatering, responsdetaljar og eksportar. Du kan byte tilbake når som helst.',
  /** Toast button that hides the invitation */
  'vision.redesign.toast.dismiss': 'Ikkje no',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vision.redesign.toast.title': 'Prøv det omdesigna Vision',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vision.redesign.try': 'Prøv den nye utforminga',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vision.redesign.try.description':
    'Bytt til det omdesigna Vision, i beta. Du kan byte tilbake når som helst frå sidepanelet.',
  /** Empty state of the response panel before anything was fetched */
  'vision.response.empty': 'Ingenting henta enno',
  /** Label for the payload size in the response tab */
  'vision.response.payload-size': 'Storleik på nyttelast',
  /** Label for the sync tags in the response tab */
  'vision.response.sync-tags': 'Synkroniseringstaggar',
  /** Shown when the response carried no sync tags */
  'vision.response.sync-tags.none': 'Ingen synkroniseringstaggar i responsen',
  /** Under the query URL when the request went out as a POST body rather than that URL */
  'vision.response.url.sent-as-post':
    'Sendt som ein POST-kropp: spørjinga og parametra er for lange for ein URL, så @sanity/client sende dei som JSON. Å lime inn denne URL-en i Vision lastar framleis spørjinga.',
  /** Accessible label for the result actions menu */
  'vision.result.actions': 'Resultathandlingar',
  /** Toast shown after the result was copied */
  'vision.result.copied': 'Resultatet vart kopiert til utklippstavla',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vision.result.copied-value': 'Kopierte {{path}}',
  /** Menu item and button copying the result as JSON */
  'vision.result.copy': 'Kopier resultat',
  /** Button next to each property in the result tree, copying its value */
  'vision.result.copy-value': 'Kopier verdi',
  /** Empty state of the result view */
  'vision.result.empty': 'Køyr spørjinga for å sjå resultatet her',
  /** Button exporting the result as CSV */
  'vision.result.export-csv': 'Eksporter CSV',
  /** Button exporting the result as JSON */
  'vision.result.export-json': 'Eksporter JSON',
  /** Menu item opening the TypeScript export dialog */
  'vision.result.export-typescript': 'Eksporter TypeScript…',
  /** Menu item opening the Zod export dialog */
  'vision.result.export-zod': 'Eksporter Zod…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vision.result.graph.collapse': 'Gøym det det inneheld',
  /** Button fitting the whole graph in view */
  'vision.result.graph.fit': 'Tilpass til visning',
  /** Accessible label of the graph, saying how to move around in it */
  'vision.result.graph.label':
    'Resultatgraf: dra for å flytte, rull for å zoome; når fokusert, piltastane flyttar, + og - zoomar, 0 tilpassar',
  /** Ends the note on a graph that leaves part of this result out */
  'vision.result.graph.left-out-hint': 'Tre- og JSON-visninga viser alt.',
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vision.result.graph.node-limit': 'Berre dei første {{nodes}} objekta og listene er teikna.',
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vision.result.graph.partial': 'Berre dei første {{rows}} oppføringane er lista for {{nodes}}.',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vision.result.graph.partial.node': '{{name}} ({{entries}} oppføringar)',
  /** Title of the graph node of the result itself */
  'vision.result.graph.root': 'resultat',
  /** Button zooming into the graph */
  'vision.result.graph.zoom-in': 'Zoom inn',
  /** Button zooming out of the graph */
  'vision.result.graph.zoom-out': 'Zoom ut',
  /** Tab showing the result as a graph of its objects and arrays */
  'vision.result.view.graph': 'Graf',
  /** Tab showing the result as indented JSON text, to select and copy from */
  'vision.result.view.json': 'JSON',
  /** Accessible label of the tabs that switch how the result shows */
  'vision.result.view.label': 'Resultatvisning',
  /** Tab showing the result as a tree to browse */
  'vision.result.view.tree': 'Tre',
  /** Empty state of the saved queries panel */
  'vision.saved.empty': 'Ingen lagra spørjingar enno. Lagre gjeldande spørjing med +-knappen.',
  /** Empty state of a query list when the search matches nothing */
  'vision.saved.empty-search': 'Ingen spørjingar samsvarar med søket ditt',
  /** Menu item loading a saved query into the active tab */
  'vision.saved.load-in-current-tab': 'Last inn i gjeldande fane',
  /** Menu item opening a saved query in a new tab */
  'vision.saved.open-in-new-tab': 'Opne i ny fane',
  /** Menu item renaming a saved query */
  'vision.saved.rename': 'Endre namn',
  /** Accessible label for the button saving the current query */
  'vision.saved.save-current': 'Lagre gjeldande spørjing',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vision.saved.unavailable-variant':
    'Denne lagra spørjinga brukte varianten «{{variant}}»; vel han i navigasjonslinja for å køyre spørjinga med han.',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vision.saved.unknown-dataset':
    'Datasettet «{{dataset}}» til denne lagra spørjinga er ikkje tilgjengeleg her, held fram med det gjeldande.',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vision.saved.variants-disabled':
    'Denne lagra spørjinga brukte varianten «{{variant}}»; denne arbeidsflata har variantar slått av, så spørjinga køyrer utan han.',
  /** Button in the settings dialog that clears the stored state */
  'vision.settings.clear-storage': 'Tøm lagring',
  /** Confirmation button for clearing the storage */
  'vision.settings.clear-storage.confirm': 'Ja, tøm lagring',
  /** Explanation of what clearing the storage does */
  'vision.settings.clear-storage.description':
    'Slettar dei personlege lagra spørjingane dine og funksjonsbiblioteket, tilbakestiller opne faner og desse standardverdiane i denne nettlesaren, og går tilbake til det klassiske Vision-verktøyet. Delte spørjingar vert tekne vare på.',
  /** Toast shown when the saved queries could not be cleared */
  'vision.settings.clear-storage.error': 'Kunne ikkje tømme dei lagra spørjingane',
  /** Toast shown after the storage was cleared */
  'vision.settings.clear-storage.success': 'Lagring tømd',
  /** Explanation at the top of the settings dialog */
  'vision.settings.description':
    'Standardverdiar for nye faner. Opne faner held på sine eigne val.',
  /** Explains the setting listing the fields left out of History diffs */
  'vision.settings.history-diff.description':
    'Éin feltsti per linje. Ein sti passar på kva djupn som helst i eit resultat, så _rev skjuler revisjonen til kvart dokument i det. Kvar diff kan likevel vise dei.',
  /** Button restoring the default fields left out of History diffs */
  'vision.settings.history-diff.reset': 'Tilbakestill til standardverdiane',
  /** Label of the setting listing the fields left out of History diffs */
  'vision.settings.history-diff.title': 'Felt skjulte frå historikk-diffar',
  /** Title of the settings dialog */
  'vision.settings.title': 'Innstillingar',
  /** Empty state of the shared queries panel */
  'vision.shared.empty':
    'Ingen delte spørjingar enno. Del ei lagra spørjing for å gjere ho tilgjengeleg for alle som brukar dette datasettet.',
  /** Shortcut description: close dialogs and menus */
  'vision.shortcuts.close': 'Lukk dialogar og menyar',
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vision.shortcuts.complete': 'Fullfør eit funksjonsnamn',
  /** Shortcut description: copy the query */
  'vision.shortcuts.copy-query': 'Kopier spørjinga',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vision.shortcuts.extract-function': 'Trekk ut projeksjonen ved markøren til ein funksjon',
  /** Shortcut description: run the query */
  'vision.shortcuts.fetch': 'Hent spørjinga',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vision.shortcuts.next-finding': 'Hopp til neste lint-funn',
  /** Shortcut description: reformat the query */
  'vision.shortcuts.prettify': 'Formater spørjinga pent',
  /** Title of the keyboard shortcuts dialog */
  'vision.shortcuts.title': 'Tastatursnarvegar',
  /** Sidebar toggle: show icons only */
  'vision.sidebar.collapse': 'Slå saman sidepanel',
  /** Sidebar toggle: show labels next to the icons */
  'vision.sidebar.expand': 'Utvid sidepanel',
  /** Accessible label for the sidebar navigation */
  'vision.sidebar.label': 'Vision-sidepanel',
  /** Sidebar item and drawer title for personal saved queries */
  'vision.sidebar.saved-queries': 'Lagra spørjingar',
  /** Sidebar item opening the settings dialog */
  'vision.sidebar.settings': 'Innstillingar',
  /** Sidebar item and drawer title for shared queries */
  'vision.sidebar.shared-queries': 'Delte spørjingar',
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vision.sidebar.shortcuts': 'Tastatursnarvegar',
  /** Empty state of the content source map panel */
  'vision.source-map.empty':
    'Ingen kjeldekart for innhald i svaret. Slå på «Inkluder kjeldekart for innhald» under Alternativ og hent på nytt.',
  /** Accessible label of the divider between the result and the response details panel */
  'vision.split.bottom-panel':
    'Endre storleik på panelet for svardetaljar: dra eller bruk piltastane; Home og End går til grensene, Enter tilbakestiller',
  /** Accessible label of the divider between the request and response panes */
  'vision.split.request-response':
    'Endre storleik på panela for førespurnad og svar: dra eller bruk piltastane; Home og End går til grensene, Enter tilbakestiller',
  /** Accessible label for the button closing a query tab */
  'vision.tabs.close-tab': 'Lukk fane',
  /** Accessible label for the list of query tabs */
  'vision.tabs.label': 'Spørjingsfaner',
  /** Accessible label for the button opening a new query tab */
  'vision.tabs.new-tab': 'Ny fane',
  /** Placeholder of the input renaming a tab */
  'vision.tabs.title-placeholder': 'Fanetittel',
  /** Title of a tab whose query is still empty */
  'vision.tabs.untitled': 'Namnlaus spørjing',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vision.webmcp.check-query': 'Sjekk ei GROQ-spørjing i Vision',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vision.webmcp.describe-schema': 'Skildra skjemaet i Vision',
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vision.webmcp.explain-query': 'Forklar ei GROQ-spørjing i Vision',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vision.webmcp.get-state': 'Les den opne Vision-fana',
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vision.webmcp.open-query': 'Opna ei GROQ-spørjing i Vision',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vision.webmcp.preview-mutations': 'Førehandsvis mutasjonar i Vision',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vision.webmcp.run-query': 'Køyr ei GROQ-spørjing i Vision',
})
