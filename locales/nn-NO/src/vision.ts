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
  /** Tooltip shown when the API version selector is locked to vX because a variant is selected */
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
  'vista.agent-actions.credits': 'Brukar éin AI-kreditt per førespurnad',
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vista.ai-credits.balance': '{{balance}} av {{quota}} AI-kredittar att denne månaden.',
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vista.ai-credits.deficit':
    '{{used}} AI-kredittar brukte denne månaden, {{deficit}} meir enn dei {{quota}} som er inkludert.',
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vista.ai-credits.limit.description':
    'Organisasjonen din har brukt {{used}} av sine {{quota}} AI-kredittar denne månaden, så Sanity Agent Actions er stansa til neste månad eller til utgiftsgrensa blir heva.',
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vista.ai-credits.limit.description-unknown':
    'Organisasjonen din har nådd utgiftsgrensa for AI-kredittar, så Sanity Agent Actions er stansa til neste månad eller til grensa blir heva.',
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vista.ai-credits.limit.learn-more': 'Korleis AI-kredittar fungerer',
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vista.ai-credits.limit.manage': 'Handsam AI-kredittar',
  /** Title of the card shown where the organization is out of AI credits */
  'vista.ai-credits.limit.title': 'Tomt for AI-kredittar',
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vista.ai-credits.usage': 'AI-bruk',
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vista.ai-credits.used': '{{used}} AI-kredittar brukte denne månaden.',
  /** Button in the request column's action bar naming the API version requests go out with */
  'vista.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vista.api-version.button-cdn': 'API CDN {{version}}',
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vista.api-version.button-invalid': 'Uferdig API-versjon',
  /** Tooltip of the API version button */
  'vista.api-version.tooltip':
    'Spørjingar køyrer mot API-versjon {{version}}. Vel for å endre det i Alternativ.',
  /** Tooltip of the API version button while queries go through the API CDN */
  'vista.api-version.tooltip-cdn':
    'Spørjingar køyrer mot API CDN med API-versjon {{version}}. Vel for å endre det i Alternativ.',
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vista.api-version.tooltip-cdn-blocked':
    'Spørjingar køyrer mot API-et med API-versjon {{version}}, ikkje API CDN: det tener ikkje {{perspective}}-perspektivet. Vel for å endre det i Alternativ.',
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vista.api-version.tooltip-invalid':
    'API-versjonen i Alternativ er uferdig, så ingenting kan hentast før han er fullført.',
  /** Tooltip of the API version button while a selected variant forces the experimental API */
  'vista.api-version.tooltip-locked':
    'Spørjingar køyrer mot API-versjon {{version}}, som den valde varianten treng.',
  /** Label of the document after the change in the Delta panel */
  'vista.delta.after': 'Etter',
  /** Label of the document before the change in the Delta panel */
  'vista.delta.before': 'Før',
  /** What the Delta panel does */
  'vista.delta.description':
    'Køyrer spørjinga i delta-modus, slik GROQ-baserte webhooks, lyttarar og Sanity Functions gjer: before() og after() er dokumentet før og etter ei endring, @ er dokumentet etter, og delta::changedAny() samanliknar dei. Det køyrer i nettlesaren med groq-js. Ei tom side tyder ingen dokument: endringa opprettar eller slettar det.',
  /** Label of the document ID field in the Delta panel */
  'vista.delta.document-id': 'Dokument-ID',
  /** Shown when there is a query but no documents to compare */
  'vista.delta.empty':
    'Last historikken til eit dokument, eller skriv dokumenta inn i Før og Etter.',
  /** Shown when the query fails in delta mode */
  'vista.delta.failed': 'Spørjinga kunne ikkje køyrast i delta-modus: {{message}}',
  /** Shown when the After document is not valid JSON */
  'vista.delta.invalid-after': 'Etter er ikkje gyldig JSON: {{message}}',
  /** Shown when the Before document is not valid JSON */
  'vista.delta.invalid-before': 'Before er ikkje gyldig JSON: {{message}}',
  /** Button loading the document's revisions from the History API */
  'vista.delta.load': 'Last historikk',
  /** Shown when the history could not be loaded */
  'vista.delta.load-failed': 'Historikken kunne ikkje lastast: {{message}}',
  /** A delta filter that is true for the change */
  'vista.delta.matches':
    'Samsvarar: ein webhook eller funksjon med dette filteret køyrer for denne endringa.',
  /** A delta filter that is false for the change */
  'vista.delta.no-match':
    'Samsvarar ikkje: ein webhook eller funksjon med dette filteret køyrer ikkje for denne endringa.',
  /** Shown while the query or its params cannot be sent */
  'vista.delta.no-request': 'Rett opp spørjinga og parametrane for å køyre han i deltamodus.',
  /** Heading of the delta result */
  'vista.delta.result': 'Resultat',
  /** The After choice for a change that deletes the document */
  'vista.delta.revision.none-after': 'Ingenting: endringa slettar dokumentet',
  /** The Before choice for a change that creates the document */
  'vista.delta.revision.none-before': 'Ingenting: endringa opprettar dokumentet',
  /** A revision in the Before and After lists */
  'vista.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vista.drawer.close': 'Lukk panel',
  /** Explanation at the top of the Explain panel */
  'vista.explain.description':
    'Spørjeplanen er korleis Content Lake køyrer spørjinga: kva han les, filtrerer og sorterer medan han les, og kva som er att til seinare steg. «Forklar dette for meg» lèt Sanity Agent Actions skildre spørjinga og planen med enkle ord, noko som brukar éin AI-kreditt.',
  /** Shown in the Explain panel while there is no valid query to explain */
  'vista.explain.empty': 'Skriv ein spørjing for å forklare han.',
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vista.explain.explain': 'Forklar dette for meg',
  /** Shown when the explanation could not be written */
  'vista.explain.failed': 'Spørjinga kunne ikkje forklarast: {{message}}',
  /** A count the index computes without reading the documents */
  'vista.explain.insight.aggregate': 'Talt opp i indeksen, utan å lese dokumenta.',
  /** A subquery the plan runs once for all documents */
  'vista.explain.insight.batched-subquery':
    'Underspørjinga køyrer berre éin gong for alle dokumenta, i éi samla henting, ikkje éin gong per dokument.',
  /** Part of the filter runs in memory; the expression follows */
  'vista.explain.insight.filter-in-memory':
    'Delar av filteret køyrer i minnet, etter lesing: kvart dokument som indeksen slepp gjennom, vert lese først, noko som vert tregt på store datasett. Koplingar (->) og funksjonar i eit filter kan ikkje bruke indeksen.',
  /** The index sorts and limits while reading */
  'vista.explain.insight.index-sort-limit':
    'Indeksen sorterer og avgrensar dokumenta medan dei vert lesne.',
  /** The plan slices in memory */
  'vista.explain.insight.slice-in-memory':
    'Utsnittet vert teke i minnet etter lesing, ikkje som ei avgrensing medan lesinga skjer.',
  /** The plan sorts in memory */
  'vista.explain.insight.sort-in-memory':
    'Sortering skjer i minnet, etter at kvart treff er lese. Sorter etter attributt indeksen kan sortere etter.',
  /** Link under the plan insights to the guide on fast queries */
  'vista.explain.insights.guide': 'Høgtytande GROQ',
  /** Heading of the plan insights in the Explain panel */
  'vista.explain.insights.title': 'Det som peikar seg ut',
  /** Button in the Explain panel fetching the query plan */
  'vista.explain.plan': 'Vis spørjeplanen',
  /** Shown when the query plan could not be fetched */
  'vista.explain.plan-failed': 'Spørjeplanen kunne ikkje hentast: {{message}}',
  /** Heading of the query plan in the Explain panel */
  'vista.explain.plan-title': 'Spørjeplan',
  /** Toast shown after a code snippet was copied */
  'vista.export-query.copied': 'Utdrag kopiert til utklippstavla',
  /** Label for the button that copies a code snippet */
  'vista.export-query.copy': 'Kopier utdrag',
  /** Explanation at the top of the export query dialog */
  'vista.export-query.description':
    'Køyr denne spørjinga utanfor studioet med eitt av desse utdraga.',
  /** Title of the dialog that exports the query as code snippets */
  'vista.export-query.title': 'Eksporter spørjing',
  /** Note about authentication in the export query dialog */
  'vista.export-query.token-note':
    'Private datasett treng eit API-token. Offentlege datasett kan droppe Authorization-headeren.',
  /** Toast shown after the generated code was copied */
  'vista.export-types.copied': 'Kode kopiert til utklippstavla',
  /** Label for the button that copies the generated code */
  'vista.export-types.copy': 'Kopier kode',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vista.export-types.empty':
    'Hent spørjinga først slik at det finst eit resultat å utleie typar frå.',
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vista.export-types.schema-error': 'Skjemavurdering feila: {{message}}',
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vista.export-types.source.result':
    'Utleidd frå det henta resultatet, sidan spørjinga ikkje kunne vurderast mot arbeidsområdeskjemaet.',
  /** Note shown when the types were derived from the workspace schema */
  'vista.export-types.source.schema':
    'Utleidd frå arbeidsområdeskjemaet, på same måte som sanity typegen gjer det.',
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vista.export-types.stale-result':
    'Resultatet som vert vist, vart henta for ein annan spørjing eller andre parametrar. Hent gjeldande spørjing først slik at det finst eit resultat å utleie typar frå.',
  /** Title of the dialog exporting TypeScript types for the result */
  'vista.export-types.title-typescript': 'Eksporter TypeScript',
  /** Title of the dialog exporting a Zod schema for the result */
  'vista.export-types.title-zod': 'Eksporter Zod',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vista.functions.add': 'Legg til i spørjinga',
  /** Shown on a library function the query declares the same way */
  'vista.functions.declared': 'I denne spørjinga',
  /** Lint action on a call of a library function the query does not declare */
  'vista.functions.editor.add-from-library': 'Deklarer han',
  /** Note in a function's hover documentation: the API version it needs */
  'vista.functions.editor.api-version': 'Krev API-versjon {{version}} eller nyare',
  /** Detail of a completion for a custom function the query declares */
  'vista.functions.editor.completion-declared': 'i denne spørjinga',
  /** Detail of a completion for a library function, which declares it too */
  'vista.functions.editor.completion-library': 'frå biblioteket ditt',
  /** Note in the hover documentation of a custom function the query declares */
  'vista.functions.editor.declared-on': 'Tilpassa funksjon, deklarert på linje {{line}}',
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vista.functions.editor.delta-only':
    'Fungerer berre i deltamodus, der webhooks og Sanity Functions køyrer filtra sine',
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vista.functions.editor.extract': 'Trekk ut til funksjon',
  /** Note in the hover documentation of a library function the query does not declare */
  'vista.functions.editor.in-library':
    'I funksjonsbiblioteket ditt, ikkje deklarert i denne spørjinga',
  /** Link at the end of a built-in function's hover documentation */
  'vista.functions.editor.reference': 'Referanse for GROQ-funksjonar',
  /** Explanation under the library heading in the Functions panel */
  'vista.functions.library.description':
    'Blir lagra i denne nettlesaren for kvart datasett i prosjektet. Fullføringar tilbyr desse funksjonane, og lint tilbyr å deklarere éin spørjinga kallar.',
  /** Shown in the Functions panel while the library is empty */
  'vista.functions.library.empty':
    'Lagre ein funksjon spørjinga deklarerer for å bruke han i andre spørjingar.',
  /** Heading of the functions library in the Functions panel */
  'vista.functions.library.title': 'Bibliotek',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vista.functions.query.empty':
    'Deklarer tilpassa funksjonar øvst i spørjinga, eller plasser markøren i ein projeksjon, som author->{name}, og trykk på uttrekksknappen over editoren ({{shortcut}}).',
  /** Heading of the functions the query declares in the Functions panel */
  'vista.functions.query.title': 'I denne spørjinga',
  /** Removes a function from the library */
  'vista.functions.remove': 'Fjern frå biblioteket',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vista.functions.replace': 'Erstatt i spørjinga',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vista.functions.reveal': 'Vis {{name}} i editoren',
  /** Button of a function the query declares that is not in the library yet */
  'vista.functions.save': 'Lagre til biblioteket',
  /** Shown on a function the query declares the way the library has it */
  'vista.functions.saved': 'Lagra',
  /** Button of a function the query declares differently from the library's version */
  'vista.functions.update': 'Oppdater biblioteket',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vista.generate.button': 'Generer spørjing',
  /** Closes the generate query bar */
  'vista.generate.close': 'Lukk',
  /** Explanation under the generate query field */
  'vista.generate.description':
    'Sanity Agent Actions skriv GROQ ut frå skildringa di og dokumenttypane, og Content Lake kontrollerer kvart forsøk; kvart forsøk brukar éin AI-kreditt. Det erstattar spørjinga i denne fana og køyrer ho; angre i editoren hentar fram den førre spørjinga igjen.',
  /** Shown when no query could be generated, above the reason */
  'vista.generate.failed': 'Spørjinga kunne ikkje genererast',
  /** Accessible label of the description field in the generate query bar */
  'vista.generate.label': 'Kva skal spørjinga hente?',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vista.generate.open-anyway': 'Opne det siste forsøket',
  /** Placeholder of the description field in the generate query bar */
  'vista.generate.placeholder':
    'Dei 10 nyaste forfattarane, sortert etter etternamn og deretter fornamn',
  /** Shown while the first attempt at a query is written */
  'vista.generate.progress': 'Skriv spørjinga …',
  /** Shown while a rejected attempt is retried */
  'vista.generate.progress-retry': 'Rettar spørjinga (forsøk {{attempt}} av {{max}}) …',
  /** Button generating the query */
  'vista.generate.submit': 'Generer',
  /** Badge on a history entry the API CDN answered */
  'vista.history.cdn': 'API CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vista.history.cdn-cache-hit': 'CDN-treff i mellomlager',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vista.history.changed': 'Endra',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vista.history.changes': 'Endringar',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vista.history.changes-failed': 'Endringane kunne ikkje visast.',
  /** Button retrying to show the changes of a history entry */
  'vista.history.changes-retry': 'Prøv igjen',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vista.history.compared-with': 'Samanlikna med henting kl. {{time}}',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vista.history.diff.params': 'Parametrar',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vista.history.diff.query': 'Spørjing',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vista.history.diff.query-formatting-only': 'Berre formateringa vart endra',
  /** Label of the diff of the query result in a history entry's changes */
  'vista.history.diff.result': 'Resultat',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vista.history.diff.url': 'Førespurnads-URL',
  /** Empty state of the history panel */
  'vista.history.empty': 'Ingenting henta enno',
  /** Status label for a failed fetch in the history */
  'vista.history.failed': 'Mislykkast',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vista.history.hide-hidden': 'Gøym dei',
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vista.history.hiding': 'Gøymer {{fields}}',
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vista.history.only-hidden-changed': 'Berre skjulte felt vart endra',
  /** History reason: a tab opened with a generated query fetched it */
  'vista.history.reason.generated': 'Generert spørjing',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vista.history.reason.link': 'Opna lenke',
  /** History reason: a live event matched the query's sync tags */
  'vista.history.reason.live': 'Direkteoppdatering',
  /** History reason: the live connection asked every client to refetch */
  'vista.history.reason.live-restart': 'Live-tilkoplinga vart starta på nytt',
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vista.history.reason.live-start': 'Live-henting starta',
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vista.history.reason.load': 'Spørjing lasta inn',
  /** History reason: the fetch button was pressed */
  'vista.history.reason.manual': 'Hent-knapp',
  /** History reason: mutations were applied from the Mutate panel */
  'vista.history.reason.mutation': 'Mutasjonar brukte',
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vista.history.reason.options': 'Val endra',
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vista.history.reason.paste': 'Limt inn URL',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vista.history.reason.resume': 'Automatisk gjenhenting attoppteken',
  /** History reason: the keyboard shortcut was used */
  'vista.history.reason.shortcut': 'Tastatursnarveg',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vista.history.same-result': 'Same resultat',
  /** Button showing the hidden fields in a history entry's changes */
  'vista.history.show-hidden': 'Vis dei',
  /** Next to a history entry's changes while the hidden fields are shown */
  'vista.history.showing-hidden': 'Viser {{fields}}, gøymde som standard',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vista.history.too-large': 'For stort til å samanlikna',
  /** A history entry whose result is the same as the previous result */
  'vista.history.unchanged': 'Ingen endringar',
  /** Shown in the Lint panel while the query has no lint findings */
  'vista.lint.empty':
    'Ingen lint-funn. Problem GROQ-linteren oppdagar i spørjinga vert lista opp her medan du skriv; vel eitt for å markera det i redigeringsverktøyet.',
  /** Where a lint finding sits in the query, shown under its message */
  'vista.lint.position': 'Linje {{line}}, kolonne {{column}}',
  /** Severity badge of a lint finding */
  'vista.lint.severity.error': 'Feil',
  /** Severity badge of a lint finding */
  'vista.lint.severity.hint': 'Hint',
  /** Severity badge of a lint finding */
  'vista.lint.severity.info': 'Info',
  /** Severity badge of a lint finding */
  'vista.lint.severity.warning': 'Åtvaring',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vista.lint.use-suggestion': 'Bruk {{suggestion}}',
  /** Badge shown while a tab refetches automatically */
  'vista.live.active': 'Live',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vista.live.button': 'Live-henting',
  /** Tooltip of the Live button while automatic refetching is off */
  'vista.live.button.start': 'Hent, og hent på nytt kvar gong dokumenta i resultatet endrar seg',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vista.live.button.stop':
    'Stopp henting når dokumenta i resultatet endrar seg. Hent vil framleis henta på forespurnad, for resultat som ikkje vert påverka av dokumentendringar, som now()',
  /** Error shown when the live connection breaks */
  'vista.live.error': 'Live-oppdateringar fråkopla: {{message}}',
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vista.live.stop': 'Stopp live',
  /** Button in the Mutate panel adding a mutation to the list */
  'vista.mutate.add': 'Legg til mutasjon',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vista.mutate.add.create': 'Opprett eit dokument',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vista.mutate.add.delete': 'Slett eit dokument',
  /** Adds a mutation deleting the documents of the shown result */
  'vista.mutate.add.delete-result': 'Slett dokumenta i resultatet',
  /** Adds a mutation patching a document, its ID to fill in */
  'vista.mutate.add.patch': 'Oppdater eit dokument',
  /** Adds a mutation patching the documents of the shown result */
  'vista.mutate.add.patch-result': 'Oppdater dokumenta i resultatet',
  /** Button applying the mutations a dry run showed */
  'vista.mutate.apply': 'Bruk på {{dataset}}',
  /** Heading of the error shown when applying the mutations failed */
  'vista.mutate.apply-failed': 'Mutasjonane blei ikkje brukte',
  /** Next to Apply while the mutations as they are have had no dry run */
  'vista.mutate.apply-needs-preview': 'Bruk sender det ei prøvekøyring viste: køyr ei først.',
  /** Option giving array items without a _key one */
  'vista.mutate.auto-keys': 'Legg til ein _key på array-element som manglar det',
  /** Under the option giving array items a _key */
  'vista.mutate.auto-keys.description':
    'Studioet treng ein på kvart array-element for å redigere det.',
  /** Button showing a document's changes in the dry run */
  'vista.mutate.changes': 'Endringar',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vista.mutate.changes-failed': 'Endringane kunne ikkje visast.',
  /** Button retrying to show a document's changes */
  'vista.mutate.changes-retry': 'Prøv igjen',
  /** What the Mutate panel does */
  'vista.mutate.description':
    'Skriv mutasjonar slik Mutations API tek imot dei, i ei liste: create, createOrReplace, createIfNotExists, delete og patch, med ID eller med eit GROQ-spørjing. Ei prøvekøyring viser kva dei ville gjort med kvart dokument utan å endre noko; Bruk skriv dei deretter til datasettet i éin transaksjon, med kontoen din.',
  /** What the API says went wrong with one of the mutations */
  'vista.mutate.failure-item': 'Mutasjon {{index}}: {{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vista.mutate.generate.button': 'Generer mutasjonar',
  /** Explanation under the generate mutations field */
  'vista.mutate.generate.description':
    'Sanity Agent Actions skriv mutasjonane ut frå skildringa di, dokumenta i resultatet og typane deira, og ei prøvekøyring sjekkar kvart forsøk; kvart forsøk brukar éin AI-kreditt. Dei erstattar mutasjonane her, der angre bringar desse tilbake; ingenting blir skrive før du brukar dei.',
  /** Shown when no mutations could be generated, above the reason */
  'vista.mutate.generate.failed': 'Mutasjonane kunne ikkje genererast',
  /** Accessible label of the description field in the generate mutations bar */
  'vista.mutate.generate.label': 'Kva skal mutasjonane gjere?',
  /** Placeholder of the description field in the generate mutations bar */
  'vista.mutate.generate.placeholder': 'Endre tittelen på dokumenta i resultatet til foobar',
  /** Shown while the first attempt at the mutations is written */
  'vista.mutate.generate.progress': 'Skriv mutasjonane…',
  /** Shown while an attempt the dry run turned down is retried */
  'vista.mutate.generate.progress-retry': 'Rettar mutasjonane (forsøk {{attempt}} av {{max}})…',
  /** Under the dry run: the fields the diffs leave out */
  'vista.mutate.hiding': 'Endringane utelèt {{fields}}, slik Historikk gjer.',
  /** Shown when the mutations are not valid JSON */
  'vista.mutate.invalid-json': 'Mutasjonane er ikkje gyldig JSON: {{message}}',
  /** Shown when a mutation does not name exactly one thing to do */
  'vista.mutate.invalid-mutation':
    'Mutasjon {{index}} treng nøyaktig éin av create, createOrReplace, createIfNotExists, delete eller patch.',
  /** Label of the mutations editor */
  'vista.mutate.mutations': 'Mutasjonar',
  /** The dry run touched no documents */
  'vista.mutate.no-documents': 'Mutasjonane rører ingen dokument.',
  /** Shown when the JSON is not a list of mutations */
  'vista.mutate.not-a-list':
    'Skriv ei liste med mutasjonar, éin enkelt mutasjon, eller ein forespurnadskropp med ei liste av mutasjonar.',
  /** A document the mutations create */
  'vista.mutate.operation.create': 'Opprett',
  /** A document the mutations delete */
  'vista.mutate.operation.delete': 'Slett',
  /** A document the mutations touch without changing its content */
  'vista.mutate.operation.none': 'Inga endring',
  /** A document the mutations change */
  'vista.mutate.operation.update': 'Oppdater',
  /** Button running the mutations as a dry run */
  'vista.mutate.preview': 'Tørrkøyring',
  /** Heading of the error shown when the dry run failed */
  'vista.mutate.preview-failed': 'Tørrkøyringa mislykkast',
  /** Heading of the dry run's outcome */
  'vista.mutate.preview-heading': 'Tørrkøyring',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vista.mutate.stale':
    'Mutasjonane, datasettet eller alternativa endra seg etter denne tørrkøyringa. Køyr henne på nytt for å bruke dei.',
  /** How many documents the dry run changes and leaves as they are */
  'vista.mutate.summary': 'Endra: {{changed}} · Uendra: {{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vista.network.cache': 'Mellomlager',
  /** The API CDN answered from its cache */
  'vista.network.cache.hit': 'Treff',
  /** Under the details of a CDN cache hit */
  'vista.network.cache.hit-explained':
    'CDN-en svarte med eit svar han hadde lagra i mellomlager, frå ein stad nær deg; spørjinga nådde ikkje API-et.',
  /** The API CDN answered with a response this session had not seen */
  'vista.network.cache.miss': 'Bom, så langt denne økta kan sjå',
  /** The API answered, which caches nothing */
  'vista.network.cache.none': 'Ingen, API-et svarer på kvar førespurnad med ferskt innhald',
  /** Shown in the Network panel while there is no response */
  'vista.network.empty':
    'Hent spørjinga for å sjå kva endepunkt som svarte på henne, om det var frå eit mellomlager, og kvar han køyrde.',
  /** In the Network panel: the endpoint that answered */
  'vista.network.endpoint': 'Svart av',
  /** The live API answered */
  'vista.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vista.network.endpoint.cdn': 'API CDN',
  /** In the Network panel: the region the query ran in */
  'vista.network.region': 'Spørjinga køyrde i',
  /** The response did not say where the query ran */
  'vista.network.region.unknown': 'Ikkje rapportert',
  /** In the Network panel: the round trip and the time on the server */
  'vista.network.timing': 'Tid',
  /** The round trip and the server's time for the query, in milliseconds */
  'vista.network.timing.value': '{{e2e}} ms tur-retur, {{server}} ms på serveren',
  /** In the Network panel: the trace of the request, for Sanity support */
  'vista.network.trace': 'Spor-ID',
  /** Hint in the Network panel while queries go to the API */
  'vista.network.use-cdn-hint':
    'Slå på Bruk API CDN i Alternativ for å sende spørjingar gjennom CDN-en.',
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vista.network.you': 'Deg',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vista.options.dataset.follows-workspace': 'Følgjer arbeidsområdet',
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vista.options.dataset.pin': 'Fest eit datasett',
  /** Hint under the dataset field while a dataset is pinned */
  'vista.options.dataset.pinned': 'Fest; arbeidsområdet kan bruke eit anna datasett',
  /** Button that makes the tab follow the workspace's dataset again */
  'vista.options.dataset.use-workspace': 'Bruk datasettet til arbeidsområdet',
  /** Label for the "Include content source map" switch */
  'vista.options.include-source-map': 'Inkluder innhaldskjeldekart',
  /** Description for the "Include content source map" switch */
  'vista.options.include-source-map.description':
    'Legg til resultSourceMap i svaret, vist i Content Source Map-fana.',
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vista.options.perspective.global': 'Global ({{name}})',
  /** Label of the switch that sends queries to the API CDN */
  'vista.options.use-cdn': 'Bruk API CDN',
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vista.options.use-cdn.anonymous':
    'Dette studioet loggar deg inn med ei informasjonskapsel, som API CDN aldri mottek: han svarer slik han ville svart ein anonym besøkande, med det eit offentleg datasett viser.',
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vista.options.use-cdn.blocked':
    'API CDN tener ikkje utkast eller utgivingar, så spørjingar med {{perspective}}-perspektivet går til API-et. Med publisert eller rå vert CDN-en brukt.',
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vista.options.use-cdn.blocked.title': 'Spørjingar går til API-et, ikkje CDN-en',
  /** Description of the API CDN switch */
  'vista.options.use-cdn.description':
    'Sender spørjinga til API CDN, som useCdn: true i @sanity/client, med dei publiserte og rå perspektiva: utkast og utgivingar går alltid til API-et. Svara vert mellomlagra i opptil eitt minutt; Nettverk-panelet viser når eit svar kom frå mellomlageret.',
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vista.options.use-cdn.use-published': 'Bruk det publiserte perspektivet',
  /** Label of the variant field */
  'vista.options.variant-label': 'Variant',
  /** Variant option sending the navbar's variant, named */
  'vista.options.variant.global': 'Global ({{name}})',
  /** Variant option sending the navbar's variant while none is selected there */
  'vista.options.variant.global-none': 'Global (ingen vald)',
  /** Variant option sending no variant */
  'vista.options.variant.none': 'Ingen',
  /** Accessible label for collapsing a bottom panel */
  'vista.panel.collapse': 'Slå saman panel',
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vista.panel.delta': 'Delta',
  /** Accessible label for expanding a bottom panel */
  'vista.panel.expand': 'Utvid panel',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vista.panel.explain': 'Forklar',
  /** Label of the Functions tab in the response panel */
  'vista.panel.functions': 'Funksjonar',
  /** Label of the "History" tab in the response panel */
  'vista.panel.history': 'Historikk',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vista.panel.lint': 'Lint',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vista.panel.mutate': 'Mutér',
  /** Label of the Network tab in the response panel */
  'vista.panel.network': 'Nettverk',
  /** Label of the "Options" panel in the request column */
  'vista.panel.options': 'Alternativ',
  /** Label of the "Response" tab in the response panel */
  'vista.panel.response': 'Respons',
  /** Label of the "Content Source Map" tab in the response panel */
  'vista.panel.source-map': 'Content Source Map',
  /** Button adding an item to a list param in the params form */
  'vista.params-form.add-item': 'Legg til element',
  /** Placeholder of a params form field that takes any JSON value */
  'vista.params-form.any-placeholder':
    'Ein kva som helst JSON-verdi; anna tekst blir sendt som ein streng',
  /** Shown in the params form when the query uses no params */
  'vista.params-form.empty': 'Spørjinga brukar ingen parametrar. Kvar $namn i ho får eit felt her.',
  /** Shown in the params form while the params JSON cannot be parsed */
  'vista.params-form.invalid-json':
    'Parametrane er ikkje gyldig JSON. Rett dei i JSON-visninga for å redigere dei her.',
  /** A boolean param's value is not true or false; it is sent anyway */
  'vista.params-form.invalid.boolean': 'Ikkje sann eller usann; sendt som {{value}}',
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vista.params-form.invalid.document-type':
    'Ikkje ein dokumenttype i denne arbeidsflata; sendt likevel',
  /** A whole number param (a slice bound) holds a fraction */
  'vista.params-form.invalid.integer': 'Ikkje eit heiltal, som delar treng',
  /** A list param's value is not a list; it is sent anyway */
  'vista.params-form.invalid.list': 'Ikkje ei liste; sendt som {{value}}',
  /** A number param's value is not a number; it is sent anyway */
  'vista.params-form.invalid.number': 'Ikkje eit tal; sendt som tekst',
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vista.params-form.invalid.option': 'Ikkje ein av dei kjende verdiane; sendt likevel',
  /** A text param's value is not text; it is sent anyway */
  'vista.params-form.invalid.string': 'Ikkje tekst; sendt som {{value}}',
  /** Accessible label of an item input of a list param in the params form */
  'vista.params-form.item-label': '${{name}}, element {{index}}',
  /** Placeholder of an item input of a list param in the params form */
  'vista.params-form.item-placeholder': 'Element',
  /** Under a params form field whose param has no value */
  'vista.params-form.missing': 'Ikkje sett: spørjinga feilar til han har ein verdi',
  /** Shown in the params form when the workspace schema could not be read */
  'vista.params-form.no-schema':
    'Typar kjem berre frå spørjinga: arbeidsflateskjemaet kunne ikkje lesast.',
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vista.params-form.not-set': 'Ikkje sett',
  /** Button setting a date and time param to the current time */
  'vista.params-form.now': 'No',
  /** Button removing a param the query does not use from the params */
  'vista.params-form.remove': 'Fjern',
  /** Accessible label of the button removing an item from a list param */
  'vista.params-form.remove-item': 'Fjern element',
  /** Shown in the params form when the query does not parse */
  'vista.params-form.syntax-error':
    'Spørjinga kan ikkje tolkast, så parametrane blir viste utan typar.',
  /** Type hint of a params form field: any JSON value */
  'vista.params-form.type.any': 'kva som helst JSON-verdi',
  /** Type hint of a params form field: true or false */
  'vista.params-form.type.boolean': 'sann eller usann',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vista.params-form.type.datetime': 'dato og tid (ISO 8601)',
  /** Type hint of a params form field: a document ID */
  'vista.params-form.type.document-id': 'dokument-ID',
  /** Type hint of a params form field: one of the workspace's document types */
  'vista.params-form.type.document-type': 'dokumenttype',
  /** Type hint of a params form field: a whole number */
  'vista.params-form.type.integer': 'heiltal',
  /** Type hint of a params form field: a list of values */
  'vista.params-form.type.list': 'liste, kvar {{type}}',
  /** Type hint of a params form field: a number */
  'vista.params-form.type.number': 'tal',
  /** Type hint of a params form field: text */
  'vista.params-form.type.string': 'tekst',
  /** Heading of the params the query does not use, listed in the params form */
  'vista.params-form.unused': 'Ikkje brukt av spørjinga',
  /** Before the expressions that use a param, in the params form */
  'vista.params-form.used-in': 'Brukt i',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vista.params.fit-height': 'Tilpassa innhaldet, {{height}} pikslar',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vista.params.resize':
    'Endra storleik på parametrar: dra eller bruk piltastane; dobbeltklikk eller trykk Enter for å tilpassa til innhaldet igjen',
  /** Tab showing the params as a form inferred from the query */
  'vista.params.view.form': 'Skjema',
  /** Tab showing the params as JSON */
  'vista.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vista.params.view.label': 'Rediger parametrar som',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vista.paste.parsed': 'Lasta spørjing frå limt inn URL',
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vista.paste.unavailable-variant':
    'Den limte inn URL-en brukte varianten «{{variant}}»; vel han i navigasjonslinja for å køyra spørjinga med han.',
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vista.paste.unknown-dataset':
    'Datasettet «{{dataset}}» i den limte inn URL-en er ikkje tilgjengeleg her, held fram med det gjeldande.',
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vista.paste.unsupported-perspective':
    'Perspektivet i den limte inn URL-en er ikkje støtta her, held fram med det gjeldande.',
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vista.paste.variants-disabled':
    'Den limte inn URL-en brukte varianten «{{variant}}»; dette arbeidsområdet har variantar slått av, så spørjinga køyrer utan han.',
  /** Accessible label for the query actions menu */
  'vista.query.actions': 'Spørjingshandlingar',
  /** Tooltip when automatic refetching is not available for the API version */
  'vista.query.auto-refetch.unsupported':
    'Automatisk henting på nytt krev API-versjon v2021-03-25 eller nyare.',
  /** Toast shown after the query was copied */
  'vista.query.copied': 'Spørjing kopiert til utklippstavla',
  /** Menu item copying the query text */
  'vista.query.copy': 'Kopier spørjing',
  /** Menu item opening the export query dialog */
  'vista.query.export': 'Eksporter spørjing …',
  /** Menu item reformatting the query */
  'vista.query.prettify': 'Formater spørjing',
  /** Toast shown when the query could not be reformatted */
  'vista.query.prettify.failed': 'Klarte ikkje å formatera spørjinga',
  /** Menu item saving the query to the personal saved queries */
  'vista.query.save': 'Lagre spørjing',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vista.query.stop': 'Stopp',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vista.query.stop.description': 'Stopp henting',
  /** Explanation in the settings section about the redesigned experience */
  'vista.redesign.settings.description':
    'Du brukar det redesigna Vision-verktøyet. Dersom du byter tilbake, blir fanene og innstillingane dine tekne vare på i denne nettlesaren til neste gong du prøver det.',
  /** Title of the settings section about the redesigned experience */
  'vista.redesign.settings.title': 'Redesigna Vision (beta)',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vista.redesign.switch-to-classic': 'Byt til klassisk Vision',
  /** Toast button that switches to the redesigned tool */
  'vista.redesign.toast.accept': 'Prøv det no',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.description':
    'Spørjefaner, live-oppdatering, responsdetaljar og eksportar. Du kan byte tilbake når som helst.',
  /** Toast button that hides the invitation */
  'vista.redesign.toast.dismiss': 'Ikkje no',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.title': 'Prøv det redesigna Vision',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vista.redesign.try': 'Prøv redesignet',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vista.redesign.try.description':
    'Byt til det redesigna Vision, i beta. Du kan byte tilbake når som helst frå sidepanelet.',
  /** Empty state of the response panel before anything was fetched */
  'vista.response.empty': 'Ingenting henta enno',
  /** Label for the payload size in the response tab */
  'vista.response.payload-size': 'Datastorleik',
  /** Label for the sync tags in the response tab */
  'vista.response.sync-tags': 'Synkroniseringstaggar',
  /** Shown when the response carried no sync tags */
  'vista.response.sync-tags.none': 'Ingen synkroniseringstaggar i responsen',
  /** Accessible label for the result actions menu */
  'vista.result.actions': 'Resultathandlingar',
  /** Toast shown after the result was copied */
  'vista.result.copied': 'Resultatet er kopiert til utklippstavla',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vista.result.copied-value': 'Kopierte {{path}}',
  /** Menu item and button copying the result as JSON */
  'vista.result.copy': 'Kopier resultat',
  /** Button next to each property in the result tree, copying its value */
  'vista.result.copy-value': 'Kopier verdi',
  /** Empty state of the result view */
  'vista.result.empty': 'Køyr spørjinga for å sjå resultatet her',
  /** Button exporting the result as CSV */
  'vista.result.export-csv': 'Eksporter CSV',
  /** Button exporting the result as JSON */
  'vista.result.export-json': 'Eksporter JSON',
  /** Menu item opening the TypeScript export dialog */
  'vista.result.export-typescript': 'Eksporter TypeScript …',
  /** Menu item opening the Zod export dialog */
  'vista.result.export-zod': 'Eksporter Zod…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vista.result.graph.collapse': 'Gøym det han inneheld',
  /** Button fitting the whole graph in view */
  'vista.result.graph.fit': 'Tilpass til vising',
  /** Accessible label of the graph, saying how to move around in it */
  'vista.result.graph.label':
    'Resultatgraf: dra for å flytte, rull for å zoome; når fokusert, flytt med piltastane, + og - zoomar, 0 tilpassar',
  /** Ends the note on a graph that leaves part of this result out */
  'vista.result.graph.left-out-hint': 'Tre- og JSON-visningane viser alt.',
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vista.result.graph.node-limit': 'Berre dei første {{nodes}} objekta og listene er teikna.',
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vista.result.graph.partial': 'Berre dei første {{rows}} oppføringane er lista for {{nodes}}.',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vista.result.graph.partial.node': '{{name}} ({{entries}} oppføringar)',
  /** Title of the graph node of the result itself */
  'vista.result.graph.root': 'resultat',
  /** Button zooming into the graph */
  'vista.result.graph.zoom-in': 'Zoom inn',
  /** Button zooming out of the graph */
  'vista.result.graph.zoom-out': 'Zoom ut',
  /** Tab showing the result as a graph of its objects and arrays */
  'vista.result.view.graph': 'Graf',
  /** Tab showing the result as indented JSON text, to select and copy from */
  'vista.result.view.json': 'JSON',
  /** Accessible label of the tabs that switch how the result shows */
  'vista.result.view.label': 'Resultatvising',
  /** Tab showing the result as a tree to browse */
  'vista.result.view.tree': 'Tre',
  /** Empty state of the saved queries panel */
  'vista.saved.empty': 'Ingen lagra spørjingar enno. Lagre gjeldande spørjing med +-knappen.',
  /** Empty state of a query list when the search matches nothing */
  'vista.saved.empty-search': 'Ingen spørjingar samsvarer med søket ditt',
  /** Menu item loading a saved query into the active tab */
  'vista.saved.load-in-current-tab': 'Last inn i gjeldande fane',
  /** Menu item opening a saved query in a new tab */
  'vista.saved.open-in-new-tab': 'Opne i ny fane',
  /** Menu item renaming a saved query */
  'vista.saved.rename': 'Endre namn',
  /** Accessible label for the button saving the current query */
  'vista.saved.save-current': 'Lagre gjeldande spørjing',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vista.saved.unavailable-variant':
    'Denne lagra spørjinga brukte varianten «{{variant}}»; vel han i navigasjonslinja for å køyre spørjinga med han.',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vista.saved.unknown-dataset':
    'Datasettet «{{dataset}}» til denne lagra spørjinga er ikkje tilgjengeleg her, held fram med det gjeldande.',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vista.saved.variants-disabled':
    'Denne lagra spørjinga brukte varianten «{{variant}}»; dette arbeidsområdet har variantar slått av, så spørjinga køyrer utan han.',
  /** Button in the settings dialog that clears the stored state */
  'vista.settings.clear-storage': 'Tøm lagring',
  /** Confirmation button for clearing the storage */
  'vista.settings.clear-storage.confirm': 'Ja, tøm lager',
  /** Explanation of what clearing the storage does */
  'vista.settings.clear-storage.description':
    'Slettar dine personlege lagra spørjingar og funksjonsbiblioteket, tilbakestiller opne faner og desse standardverdiane i denne nettlesaren, og går tilbake til det klassiske Vision-verktøyet. Delte spørjingar vert tekne vare på.',
  /** Toast shown when the saved queries could not be cleared */
  'vista.settings.clear-storage.error': 'Kunne ikkje tømme dei lagra spørjingane',
  /** Toast shown after the storage was cleared */
  'vista.settings.clear-storage.success': 'Lageret er tømt',
  /** Explanation at the top of the settings dialog */
  'vista.settings.description': 'Standardverdiar for nye faner. Opne faner held på sine eigne val.',
  /** Explains the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.description':
    'Éin feltbane per linje. Ein bane passar på kva som helst djupn i eit resultat, så _rev skjuler revisjonen til kvart dokument i det. Kvar diff kan likevel vise dei.',
  /** Button restoring the default fields left out of History diffs */
  'vista.settings.history-diff.reset': 'Tilbakestill til standardverdiane',
  /** Label of the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.title': 'Felt skjult frå historikk-diffar',
  /** Title of the settings dialog */
  'vista.settings.title': 'Innstillingar',
  /** Empty state of the shared queries panel */
  'vista.shared.empty':
    'Ingen delte spørjingar enno. Del ei lagra spørjing for å gjere ho tilgjengeleg for alle som brukar dette datasettet.',
  /** Shortcut description: close dialogs and menus */
  'vista.shortcuts.close': 'Lukk dialogar og menyar',
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vista.shortcuts.complete': 'Fullfør eit funksjonsnamn',
  /** Shortcut description: copy the query */
  'vista.shortcuts.copy-query': 'Kopier spørjinga',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vista.shortcuts.extract-function': 'Trekk ut projeksjonen ved markøren til ein funksjon',
  /** Shortcut description: run the query */
  'vista.shortcuts.fetch': 'Hent spørjinga',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vista.shortcuts.next-finding': 'Hopp til neste lint-funn',
  /** Shortcut description: reformat the query */
  'vista.shortcuts.prettify': 'Gjer spørjinga penare',
  /** Title of the keyboard shortcuts dialog */
  'vista.shortcuts.title': 'Tastatursnarvegar',
  /** Sidebar toggle: show icons only */
  'vista.sidebar.collapse': 'Slå saman sidepanel',
  /** Sidebar toggle: show labels next to the icons */
  'vista.sidebar.expand': 'Utvid sidepanel',
  /** Accessible label for the sidebar navigation */
  'vista.sidebar.label': 'Vista-sidepanel',
  /** Sidebar item and drawer title for personal saved queries */
  'vista.sidebar.saved-queries': 'Lagra spørjingar',
  /** Sidebar item opening the settings dialog */
  'vista.sidebar.settings': 'Innstillingar',
  /** Sidebar item and drawer title for shared queries */
  'vista.sidebar.shared-queries': 'Delte spørjingar',
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vista.sidebar.shortcuts': 'Tastatursnarvegar',
  /** Empty state of the content source map panel */
  'vista.source-map.empty':
    'Inga innhaldskjeldekart i svaret. Slå på «Inkluder innhaldskjeldekart» under Alternativ og hent på nytt.',
  /** Accessible label of the divider between the result and the response details panel */
  'vista.split.bottom-panel':
    'Endre storleik på panelet for svardetaljar: dra eller bruk piltastane; Home og End går til grensene, Enter nullstiller',
  /** Accessible label of the divider between the request and response panes */
  'vista.split.request-response':
    'Endre storleik på rutene for førespurnad og svar: dra eller bruk piltastane; Home og End går til grensene, Enter nullstiller',
  /** Accessible label for the button closing a query tab */
  'vista.tabs.close-tab': 'Lukk fane',
  /** Accessible label for the list of query tabs */
  'vista.tabs.label': 'Spørjefaner',
  /** Accessible label for the button opening a new query tab */
  'vista.tabs.new-tab': 'Ny fane',
  /** Placeholder of the input renaming a tab */
  'vista.tabs.title-placeholder': 'Fanetittel',
  /** Title of a tab whose query is still empty */
  'vista.tabs.untitled': 'Namnlaus spørjing',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vista.webmcp.check-query': 'Sjekk ein GROQ-spørjing i Vision',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vista.webmcp.describe-schema': 'Beskriv skjemaet i Vision',
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vista.webmcp.explain-query': 'Forklar ein GROQ-spørjing i Vision',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vista.webmcp.get-state': 'Les den opne Vision-fana',
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vista.webmcp.open-query': 'Opne ein GROQ-spørjing i Vision',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vista.webmcp.preview-mutations': 'Førehandsvis mutasjonar i Vision',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vista.webmcp.run-query': 'Køyr ein GROQ-spørjing i Vision',
})
