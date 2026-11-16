import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Kopier til udklipsholder',
  /** Label for deleting a query */
  'action.delete': 'Slet',
  /** Label for editing a query's title */
  'action.edit-title': 'Rediger titel',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Stop',
  /** Label for setting up a listener */
  'action.listen-execute': 'Lyt',
  /** Label for query loading table */
  'action.load-queries': 'Indlæs forespørgsler',
  /** Label for loading a query */
  'action.load-query': 'Indlæs forespørgsel',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Annuller',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Hent',
  /** Label for saving a query */
  'action.save-personal-copy': 'Gem personlig kopi',
  /** Label for saving a personal query */
  'action.save-personal-query': 'Gem som personlig',
  /** Label for saving a query */
  'action.save-query': 'Gem forespørgsel',
  /** Label for saving a shared query */
  'action.save-shared-query': 'Gem som delt',
  /** Label for unsharing a query */
  'action.unshare': 'Annuller deling',
  /** Label for updating a query */
  'action.update': 'Opdater',

  /** Label for actions user can take */
  'label.actions': 'Handlinger',
  /** Label for all saved queries */
  'label.all': 'Alle',
  /** Label for saved queries that have been edited */
  'label.edited': 'Redigeret',
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Ny',
  /** Label for query type "personal" */
  'label.personal': 'Personlig',
  /** Label for savedAt date */
  'label.saved-at': 'Gemt den',
  /** Saved queries */
  'label.saved-queries': 'Gemte forespørgsler',
  /** Search queries */
  'label.search-queries': 'Søg i forespørgsler',
  /** Share query */
  'label.share': 'Del',
  /** Label for query type "shared" */
  'label.shared': 'Delt',
  /** Label for saved query type "team" */
  'label.team': 'Hold',
  /** Label for untitled query fallback */
  'label.untitled-query': 'Uden titel',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'Parametre er ikke gyldig JSON',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Parametre',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Kolonne',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Linje',
  /** Extra explanation when a 400 is returned for a release perspective on an old API version */
  'query.error.unsupported-release-perspective':
    'Denne API-version understøtter ikke komplekse perspektiver. Brug {{apiVersion}} eller nyere.',
  /** Extra explanation when a 400 is returned for a variant on an incompatible API version */
  'query.error.unsupported-variant':
    'Denne API-version understøtter ikke indholdsvarianter. Brug den eksperimentelle API-version ({{apiVersion}}).',
  /** Label for "Query" editor/input */
  'query.label': 'Forespørgsel',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'Forespørgsels URL',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'Ende-til-ende',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'Udførelse',
  /** Label for "Result" explorer/view */
  'result.label': 'Resultat',
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable': 'Resultatet kan ikke kodes som CSV',
  /** Label for "Save result as" result action */
  'result.save-result-as-format': 'Gem resultat som <SaveResultButtons/>',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'i/t',

  /** Query already saved error label */
  'save-query.already-saved': 'Forespørgsel allerede gemt',
  /** Save error label */
  'save-query.error': 'Fejl ved gemning af forespørgsel',
  /** Save personal copy success label */
  'save-query.personal-copy-success': 'Personlig kopi gemt',
  /** Warning displayed before sharing a query */
  'save-query.share-warning':
    'Delte forespørgsler gemmes som dokumenter i dit dataset og tæller med i din dokumentkvote.',
  /** Save shared query success label */
  'save-query.shared-success': 'Delt forespørgsel gemt',
  /** Save success label */
  'save-query.success': 'Forespørgsel gemt',
  /** Save unshared query success label */
  'save-query.unshared-success': 'Forespørgsel flyttet til personlig',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'API version',
  /** Tooltip shown when the API version selector is locked because a variant is selected */
  'settings.api-version-locked-for-variant': 'Når en variant er valgt, skal API-versionen være vX.',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'Brugerdefineret API version',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Dataset',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'Ugyldig API version',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'Anden',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspektiv',
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    'Perspektivet "<code>previewDrafts</code>" er blevet omdøbt til "<code>drafts</code>" og er nu forældet. Denne ændring er gældende for alle versioner med perspektivstøtte (>= v2021-03-25).',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Læs dokumentation',
  /** Option for selecting default perspective */
  'settings.perspectives.default': 'Intet perspektiv (API standard)',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Perspektiver tillader din forespørgsel at køre mod forskellige "visninger" af indholdet i dit dataset',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    'Standardperspektivet vil ændre sig fra "<code>raw</code>" til "<code>published</code>" i en kommende API-version. Konsulter venligst dokumentationen for flere detaljer.',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': 'Fastgjort udgivelse',
  /** Label for the scheduled drafts perspective */
  'settings.perspectives.scheduled-drafts': 'Planlagte udkast',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspektiver',

  /** Tooltip line of every control that calls Sanity Agent Actions, which bills AI credits */
  'vision.agent-actions.credits': 'Bruger en AI-kredit pr. anmodning',
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vision.ai-credits.balance': '{{balance}} af {{quota}} AI-kreditter tilbage denne måned.',
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vision.ai-credits.deficit':
    '{{used}} AI-kreditter brugt denne måned, {{deficit}} mere end de {{quota}} inkluderede.',
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vision.ai-credits.limit.description':
    'Din organisation har brugt {{used}} af sine {{quota}} AI-kreditter denne måned, så Sanity Agent Actions er sat på pause indtil næste måned, eller indtil forbrugsgrænsen hæves.',
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vision.ai-credits.limit.description-unknown':
    'Din organisation har nået sin forbrugsgrænse for AI-kreditter, så Sanity Agent Actions er sat på pause indtil næste måned, eller indtil grænsen hæves.',
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vision.ai-credits.limit.learn-more': 'Sådan fungerer AI-kreditter',
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vision.ai-credits.limit.manage': 'Administrer AI-kreditter',
  /** Title of the card shown where the organization is out of AI credits */
  'vision.ai-credits.limit.title': 'Løbet tør for AI-kreditter',
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vision.ai-credits.usage': 'AI-forbrug',
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vision.ai-credits.used': '{{used}} AI-kreditter brugt denne måned.',
  /** Button in the request column's action bar naming the API version requests go out with */
  'vision.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vision.api-version.button-cdn': 'API CDN {{version}}',
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vision.api-version.button-invalid': 'Ufuldendt API-version',
  /** Tooltip of the API version button */
  'vision.api-version.tooltip':
    'Forespørgsler kører mod API-version {{version}}. Vælg for at ændre den i Indstillinger.',
  /** Tooltip of the API version button while queries go through the API CDN */
  'vision.api-version.tooltip-cdn':
    "Forespørgsler kører mod API CDN'en med API-version {{version}}. Vælg for at ændre den i Indstillinger.",
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vision.api-version.tooltip-cdn-blocked':
    "Forespørgsler kører mod API'et med API-version {{version}}, ikke API CDN'en: den understøtter ikke {{perspective}}-perspektivet. Vælg for at ændre det i Indstillinger.",
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vision.api-version.tooltip-invalid':
    'API-versionen i Indstillinger er ufuldendt, så intet kan hentes, før den er fuldført.',
  /** Tooltip of the API version button while a selected variant forces the variants API version */
  'vision.api-version.tooltip-locked':
    'Forespørgsler kører mod API-version {{version}}, som den valgte variant kræver.',
  /** Label of the document after the change in the Delta panel */
  'vision.delta.after': 'Efter',
  /** Label of the document before the change in the Delta panel */
  'vision.delta.before': 'Før',
  /** What the Delta panel does */
  'vision.delta.description':
    'Kører forespørgslen i delta-tilstand, som GROQ-drevne webhooks, listeners og Sanity Functions gør: before() og after() er et dokument før og efter en ændring, @ er dokumentet efter den, og delta::changedAny() sammenligner dem. Den kører i browseren med groq-js. En tom side betyder intet dokument: ændringen opretter eller sletter det.',
  /** Label of the document ID field in the Delta panel */
  'vision.delta.document-id': 'Dokument-ID',
  /** Shown when there is a query but no documents to compare */
  'vision.delta.empty':
    'Indlæs et dokuments historik, eller skriv dokumenterne ind i Før og Efter.',
  /** Shown when the query fails in delta mode */
  'vision.delta.failed': 'Forespørgslen kunne ikke køres i delta-tilstand: {{message}}',
  /** Shown when the After document is not valid JSON */
  'vision.delta.invalid-after': 'Efter er ikke gyldig JSON: {{message}}',
  /** Shown when the Before document is not valid JSON */
  'vision.delta.invalid-before': 'Before er ikke gyldig JSON: {{message}}',
  /** Button loading the document's revisions from the History API */
  'vision.delta.load': 'Indlæs historik',
  /** Shown when the history could not be loaded */
  'vision.delta.load-failed': 'Historikken kunne ikke indlæses: {{message}}',
  /** A delta filter that is true for the change */
  'vision.delta.matches':
    'Matcher: et webhook eller en function med dette filter kører for denne ændring.',
  /** A delta filter that is false for the change */
  'vision.delta.no-match':
    'Matcher ikke: et webhook eller en function med dette filter kører ikke for denne ændring.',
  /** Shown while the query or its params cannot be sent */
  'vision.delta.no-request':
    'Ret forespørgslen og dens parametre for at køre den i delta-tilstand.',
  /** Heading of the delta result */
  'vision.delta.result': 'Resultat',
  /** The After choice for a change that deletes the document */
  'vision.delta.revision.none-after': 'Intet: ændringen sletter dokumentet',
  /** The Before choice for a change that creates the document */
  'vision.delta.revision.none-before': 'Intet: ændringen opretter dokumentet',
  /** A revision in the Before and After lists */
  'vision.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vision.drawer.close': 'Luk panel',
  /** Explanation at the top of the Explain panel */
  'vision.explain.description':
    'Forespørgselsplanen er den måde, Content Lake udfører forespørgslen på: hvad den læser, filtrerer og sorterer undervejs, og hvad der overlades til senere trin. "Forklar mig dette" lader Sanity Agent Actions beskrive forespørgslen og dens plan i almindeligt sprog, hvilket bruger én AI-kredit.',
  /** Shown in the Explain panel while there is no valid query to explain */
  'vision.explain.empty': 'Skriv en forespørgsel for at forklare den.',
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vision.explain.explain': 'Forklar mig dette',
  /** Shown when the explanation could not be written */
  'vision.explain.failed': 'Forespørgslen kunne ikke forklares: {{message}}',
  /** A count the index computes without reading the documents */
  'vision.explain.insight.aggregate': 'Talt i indekset uden at læse dokumenterne.',
  /** A subquery the plan runs once for all documents */
  'vision.explain.insight.batched-subquery':
    'Underforespørgslen køres én gang for alle dokumenter, i en enkelt batchet hentning, ikke én gang pr. dokument.',
  /** Part of the filter runs in memory; the expression follows */
  'vision.explain.insight.filter-in-memory':
    'En del af filteret køres i hukommelsen, efter læsning: alle dokumenter, som indekset lukker igennem, læses først, hvilket bliver langsomt på store datasets. Joins (->) og funktioner i et filter kan ikke bruge indekset.',
  /** The index sorts and limits while reading */
  'vision.explain.insight.index-sort-limit':
    'Indekset sorterer og begrænser dokumenterne, mens de læses.',
  /** The plan slices in memory */
  'vision.explain.insight.slice-in-memory':
    'Udsnittet tages i hukommelsen efter læsning, ikke som en begrænsning under læsningen.',
  /** The plan sorts in memory */
  'vision.explain.insight.sort-in-memory':
    'Sortering sker i hukommelsen, efter alle match er læst. Sortér efter attributter, indekset kan sortere efter.',
  /** Link under the plan insights to the guide on fast queries */
  'vision.explain.insights.guide': 'High performance GROQ',
  /** Heading of the plan insights in the Explain panel */
  'vision.explain.insights.title': 'Hvad der er bemærkelsesværdigt',
  /** Button in the Explain panel fetching the query plan */
  'vision.explain.plan': 'Vis forespørgselsplanen',
  /** Shown when the query plan could not be fetched */
  'vision.explain.plan-failed': 'Forespørgselsplanen kunne ikke hentes: {{message}}',
  /** Heading of the query plan in the Explain panel */
  'vision.explain.plan-title': 'Forespørgselsplan',
  /** Toast shown after a code snippet was copied */
  'vision.export-query.copied': 'Udsnit kopieret til udklipsholder',
  /** Label for the button that copies a code snippet */
  'vision.export-query.copy': 'Kopiér udsnit',
  /** Explanation at the top of the export query dialog */
  'vision.export-query.description':
    'Kør denne forespørgsel uden for studiet med et af disse udsnit.',
  /** Note under the curl snippet when the query is sent as a request body rather than in the URL */
  'vision.export-query.post-body-note':
    "Forespørgslen og parametrene udgør {{size}} tegn som søgeparametre; fra {{limit}} og opefter sender @sanity/client dem som en JSON-brødtekst i stedet for i URL'en, så udsnittet gør det samme.",
  /** Title of the dialog that exports the query as code snippets */
  'vision.export-query.title': 'Eksportér forespørgsel',
  /** Note about authentication in the export query dialog */
  'vision.export-query.token-note':
    'Private datasets kræver et API-token. Offentlige datasets kan undlade Authorization-headeren.',
  /** Toast shown after the generated code was copied */
  'vision.export-types.copied': 'Kode kopieret til udklipsholder',
  /** Label for the button that copies the generated code */
  'vision.export-types.copy': 'Kopiér kode',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vision.export-types.empty':
    'Hent forespørgslen først, så der er et resultat at udlede typer fra.',
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vision.export-types.schema-error': 'Skemaevaluering mislykkedes: {{message}}',
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vision.export-types.source.result':
    'Udledt fra det hentede resultat, da forespørgslen ikke kunne evalueres mod workspace-skemaet.',
  /** Note shown when the types were derived from the workspace schema */
  'vision.export-types.source.schema':
    'Udledt fra workspace-skemaet, på samme måde som sanity typegen gør det.',
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vision.export-types.stale-result':
    'Det viste resultat blev hentet for en anden forespørgsel eller andre parametre. Hent den nuværende forespørgsel først, så der er et resultat at udlede typer fra.',
  /** Title of the dialog exporting TypeScript types for the result */
  'vision.export-types.title-typescript': 'Eksportér TypeScript',
  /** Title of the dialog exporting a Zod schema for the result */
  'vision.export-types.title-zod': 'Eksportér Zod',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vision.functions.add': 'Tilføj til forespørgsel',
  /** Shown on a library function the query declares the same way */
  'vision.functions.declared': 'I denne forespørgsel',
  /** Lint action on a call of a library function the query does not declare */
  'vision.functions.editor.add-from-library': 'Deklarér den',
  /** Note in a function's hover documentation: the API version it needs */
  'vision.functions.editor.api-version': 'Kræver API-version {{version}} eller nyere',
  /** Detail of a completion for a custom function the query declares */
  'vision.functions.editor.completion-declared': 'i denne forespørgsel',
  /** Detail of a completion for a library function, which declares it too */
  'vision.functions.editor.completion-library': 'fra dit bibliotek',
  /** Note in the hover documentation of a custom function the query declares */
  'vision.functions.editor.declared-on': 'Brugerdefineret funktion, deklareret på linje {{line}}',
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vision.functions.editor.delta-only':
    'Virker kun i delta-tilstand, hvor webhooks og Sanity Functions kører deres filtre',
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vision.functions.editor.extract': 'Udtræk til funktion',
  /** Note in the hover documentation of a library function the query does not declare */
  'vision.functions.editor.in-library':
    'I dit funktionsbibliotek, ikke erklæret i denne forespørgsel',
  /** Link at the end of a built-in function's hover documentation */
  'vision.functions.editor.reference': 'GROQ-funktionsreference',
  /** Explanation under the library heading in the Functions panel */
  'vision.functions.library.description':
    'Gemmes i denne browser for hvert datasæt i projektet. Fuldførelser tilbyder disse funktioner, og lint tilbyder at erklære en, forespørgslen kalder.',
  /** Shown in the Functions panel while the library is empty */
  'vision.functions.library.empty':
    'Gem en funktion, forespørgslen erklærer, for at bruge den i andre forespørgsler.',
  /** Heading of the functions library in the Functions panel */
  'vision.functions.library.title': 'Bibliotek',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vision.functions.query.empty':
    'Erklær brugerdefinerede funktioner øverst i forespørgslen, eller placer markøren i en projektion, som author->{name}, og tryk på udtræksknappen over editoren ({{shortcut}}).',
  /** Heading of the functions the query declares in the Functions panel */
  'vision.functions.query.title': 'I denne forespørgsel',
  /** Removes a function from the library */
  'vision.functions.remove': 'Fjern fra biblioteket',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vision.functions.replace': 'Erstat i forespørgsel',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vision.functions.reveal': 'Vis {{name}} i editoren',
  /** Button of a function the query declares that is not in the library yet */
  'vision.functions.save': 'Gem i biblioteket',
  /** Shown on a function the query declares the way the library has it */
  'vision.functions.saved': 'Gemt',
  /** Button of a function the query declares differently from the library's version */
  'vision.functions.update': 'Opdater bibliotek',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vision.generate.button': 'Generer forespørgsel',
  /** Closes the generate query bar */
  'vision.generate.close': 'Luk',
  /** Explanation under the generate query field */
  'vision.generate.description':
    "Sanity Agent Actions skriver GROQ'en ud fra din beskrivelse og dokumenttyperne, og Content Lake kontrollerer hvert forsøg; hvert forsøg bruger én AI-kredit. Det erstatter denne faneblads forespørgsel og kører den; fortryd i editoren bringer den forrige forespørgsel tilbage.",
  /** Shown when no query could be generated, above the reason */
  'vision.generate.failed': 'Forespørgslen kunne ikke genereres',
  /** Accessible label of the description field in the generate query bar */
  'vision.generate.label': 'Hvad skal forespørgslen hente?',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vision.generate.open-anyway': 'Åbn det seneste forsøg',
  /** Placeholder of the description field in the generate query bar */
  'vision.generate.placeholder':
    'De 10 seneste forfattere, sorteret efter efternavn og derefter fornavn',
  /** Shown while the first attempt at a query is written */
  'vision.generate.progress': 'Skriver forespørgslen…',
  /** Shown while a rejected attempt is retried */
  'vision.generate.progress-retry': 'Retter forespørgslen (forsøg {{attempt}} af {{max}})…',
  /** Button generating the query */
  'vision.generate.submit': 'Generer',
  /** Badge on a history entry the API CDN answered */
  'vision.history.cdn': 'API CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vision.history.cdn-cache-hit': 'CDN-cachetræf',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vision.history.changed': 'Ændret',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vision.history.changes': 'Ændringer',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vision.history.changes-failed': 'Ændringerne kunne ikke vises.',
  /** Button retrying to show the changes of a history entry */
  'vision.history.changes-retry': 'Prøv igen',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vision.history.compared-with': 'Sammenlignet med hentningen kl. {{time}}',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vision.history.diff.params': 'Parametre',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vision.history.diff.query': 'Forespørgsel',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vision.history.diff.query-formatting-only': 'Kun formateringen er ændret',
  /** Label of the diff of the query result in a history entry's changes */
  'vision.history.diff.result': 'Resultat',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vision.history.diff.url': 'Request-URL',
  /** Empty state of the history panel */
  'vision.history.empty': 'Intet hentet endnu',
  /** Status label for a failed fetch in the history */
  'vision.history.failed': 'Mislykkedes',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vision.history.hide-hidden': 'Skjul dem',
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vision.history.hiding': 'Skjuler {{fields}}',
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vision.history.only-hidden-changed': 'Kun skjulte felter er ændret',
  /** History reason: a tab opened with a generated query fetched it */
  'vision.history.reason.generated': 'Genereret forespørgsel',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vision.history.reason.link': 'Åbnet link',
  /** History reason: a live event matched the query's sync tags */
  'vision.history.reason.live': 'Live-opdatering',
  /** History reason: the live connection asked every client to refetch */
  'vision.history.reason.live-restart': 'Live-forbindelse genstartet',
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vision.history.reason.live-start': 'Live-hentning startet',
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vision.history.reason.load': 'Forespørgsel indlæst',
  /** History reason: the fetch button was pressed */
  'vision.history.reason.manual': 'Hent-knap',
  /** History reason: mutations were applied from the Mutate panel */
  'vision.history.reason.mutation': 'Mutationer anvendt',
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vision.history.reason.options': 'Indstillinger ændret',
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vision.history.reason.paste': 'Indsat URL',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vision.history.reason.resume': 'Automatisk genhentning genoptaget',
  /** History reason: the keyboard shortcut was used */
  'vision.history.reason.shortcut': 'Tastaturgenvej',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vision.history.same-result': 'Samme resultat',
  /** Button showing the hidden fields in a history entry's changes */
  'vision.history.show-hidden': 'Vis dem',
  /** Next to a history entry's changes while the hidden fields are shown */
  'vision.history.showing-hidden': 'Viser {{fields}}, skjult som standard',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vision.history.too-large': 'For stort til at sammenligne',
  /** A history entry whose result is the same as the previous result */
  'vision.history.unchanged': 'Ingen ændringer',
  /** Shown in the Lint panel while the query has no lint findings */
  'vision.lint.empty':
    'Ingen lint-fund. Problemer, som GROQ-linteren opdager i forespørgslen, vises her, mens du skriver; vælg et for at markere det i editoren.',
  /** Where a lint finding sits in the query, shown under its message */
  'vision.lint.position': 'Linje {{line}}, kolonne {{column}}',
  /** Severity badge of a lint finding */
  'vision.lint.severity.error': 'Fejl',
  /** Severity badge of a lint finding */
  'vision.lint.severity.hint': 'Tip',
  /** Severity badge of a lint finding */
  'vision.lint.severity.info': 'Info',
  /** Severity badge of a lint finding */
  'vision.lint.severity.warning': 'Advarsel',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vision.lint.use-suggestion': 'Brug {{suggestion}}',
  /** Badge shown while a tab refetches automatically */
  'vision.live.active': 'Live',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vision.live.button': 'Live-hentning',
  /** Tooltip of the Live button while automatic refetching is off */
  'vision.live.button.start': 'Hent, og hent derefter igen, når dokumenterne i resultatet ændres',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vision.live.button.stop':
    'Stop hentning, når dokumenterne i resultatet ændres. Hent kan stadig bruges til at hente på forespørgsel, for resultater som ingen dokumentændring påvirker, som now()',
  /** Error shown when the live connection breaks */
  'vision.live.error': 'Live-opdateringer afbrudt: {{message}}',
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vision.live.stop': 'Stop live',
  /** Button in the Mutate panel adding a mutation to the list */
  'vision.mutate.add': 'Tilføj mutation',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vision.mutate.add.create': 'Opret et dokument',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vision.mutate.add.delete': 'Slet et dokument',
  /** Adds a mutation deleting the documents of the shown result */
  'vision.mutate.add.delete-result': 'Slet dokumenterne i resultatet',
  /** Adds a mutation patching a document, its ID to fill in */
  'vision.mutate.add.patch': 'Patch et dokument',
  /** Adds a mutation patching the documents of the shown result */
  'vision.mutate.add.patch-result': 'Patch dokumenterne i resultatet',
  /** Button applying the mutations a dry run showed */
  'vision.mutate.apply': 'Anvend på {{dataset}}',
  /** Heading of the error shown when applying the mutations failed */
  'vision.mutate.apply-failed': 'Mutationerne blev ikke anvendt',
  /** Next to Apply while the mutations as they are have had no dry run */
  'vision.mutate.apply-needs-preview': 'Anvend sender det, en prøvekørsel viste: kør en først.',
  /** Option giving array items without a _key one */
  'vision.mutate.auto-keys': 'Tilføj en _key til array-elementer, der ikke har en',
  /** Under the option giving array items a _key */
  'vision.mutate.auto-keys.description':
    'Studioet skal bruge en på hvert array-element for at redigere det.',
  /** Button showing a document's changes in the dry run */
  'vision.mutate.changes': 'Ændringer',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vision.mutate.changes-failed': 'Ændringerne kunne ikke vises.',
  /** Button retrying to show a document's changes */
  'vision.mutate.changes-retry': 'Prøv igen',
  /** What the Mutate panel does */
  'vision.mutate.description':
    "Skriv mutationer, som Mutations API tager dem, i en liste: create, createOrReplace, createIfNotExists, delete og patch, via ID eller via en GROQ-forespørgsel. En prøvekørsel viser, hvad de ville gøre ved hvert dokument uden at ændre noget; Anvend skriver dem derefter til dataset'et i én transaktion, med din konto.",
  /** What the API says went wrong with one of the mutations */
  'vision.mutate.failure-item': 'Mutation {{index}}: {{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vision.mutate.generate.button': 'Generer mutationer',
  /** Explanation under the generate mutations field */
  'vision.mutate.generate.description':
    'Sanity Agent Actions skriver mutationerne ud fra din beskrivelse, dokumenterne i resultatet og deres typer, og en prøvekørsel kontrollerer hvert forsøg; hvert forsøg bruger én AI-kredit. De erstatter mutationerne her, hvor fortryd bringer disse tilbage; intet skrives, før du anvender dem.',
  /** Shown when no mutations could be generated, above the reason */
  'vision.mutate.generate.failed': 'Mutationerne kunne ikke genereres',
  /** Accessible label of the description field in the generate mutations bar */
  'vision.mutate.generate.label': 'Hvad skal mutationerne gøre?',
  /** Placeholder of the description field in the generate mutations bar */
  'vision.mutate.generate.placeholder': 'Ændr titlen på dokumenterne i resultatet til foobar',
  /** Shown while the first attempt at the mutations is written */
  'vision.mutate.generate.progress': 'Skriver mutationerne…',
  /** Shown while an attempt the dry run turned down is retried */
  'vision.mutate.generate.progress-retry': 'Retter mutationerne (forsøg {{attempt}} af {{max}})…',
  /** Under the dry run: the fields the diffs leave out */
  'vision.mutate.hiding': 'Ændringerne udelader {{fields}}, ligesom Historik gør.',
  /** Shown when the mutations are not valid JSON */
  'vision.mutate.invalid-json': 'Mutationerne er ikke gyldig JSON: {{message}}',
  /** Shown when a mutation does not name exactly one thing to do */
  'vision.mutate.invalid-mutation':
    'Mutation {{index}} skal have præcis én af create, createOrReplace, createIfNotExists, delete eller patch.',
  /** Label of the mutations editor */
  'vision.mutate.mutations': 'Mutationer',
  /** The dry run touched no documents */
  'vision.mutate.no-documents': 'Mutationerne berører ingen dokumenter.',
  /** Shown when the JSON is not a list of mutations */
  'vision.mutate.not-a-list':
    'Skriv en liste af mutationer, en enkelt mutation, eller en request body med en liste af mutationer.',
  /** A document the mutations create */
  'vision.mutate.operation.create': 'Opret',
  /** A document the mutations delete */
  'vision.mutate.operation.delete': 'Slet',
  /** A document the mutations touch without changing its content */
  'vision.mutate.operation.none': 'Ingen ændring',
  /** A document the mutations change */
  'vision.mutate.operation.update': 'Opdater',
  /** Button running the mutations as a dry run */
  'vision.mutate.preview': 'Prøvekørsel',
  /** Heading of the error shown when the dry run failed */
  'vision.mutate.preview-failed': 'Prøvekørslen mislykkedes',
  /** Heading of the dry run's outcome */
  'vision.mutate.preview-heading': 'Prøvekørsel',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vision.mutate.stale':
    'Mutationerne, datasættet eller indstillingerne er ændret siden denne prøvekørsel. Kør den igen for at anvende dem.',
  /** How many documents the dry run changes and leaves as they are */
  'vision.mutate.summary': 'Ændret: {{changed}} · Uændret: {{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vision.network.cache': 'Cache',
  /** The API CDN answered from its cache */
  'vision.network.cache.hit': 'Ramt',
  /** Under the details of a CDN cache hit */
  'vision.network.cache.hit-explained':
    "CDN'en svarede med et cachelagret svar fra en lokation i nærheden af dig; forespørgslen nåede ikke frem til API'et.",
  /** The API CDN answered with a response this session had not seen */
  'vision.network.cache.miss': 'Ikke ramt, så vidt denne session kan se',
  /** The API answered, which caches nothing */
  'vision.network.cache.none': "Ingen, API'et svarer på enhver forespørgsel med friskt indhold",
  /** Shown in the Network panel while there is no response */
  'vision.network.empty':
    'Hent forespørgslen for at se, hvilket endpoint der besvarede den, om det var fra en cache, og hvor den blev kørt.',
  /** In the Network panel: the endpoint that answered */
  'vision.network.endpoint': 'Besvaret af',
  /** The live API answered */
  'vision.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vision.network.endpoint.cdn': 'API CDN',
  /** In the Network panel: the HTTP method the query was sent with */
  'vision.network.method': 'Metode',
  /** The query and its params went in the URL */
  'vision.network.method.get': "GET, med forespørgsel og parametre i URL'en",
  /** The query and its params went in the request body */
  'vision.network.method.post': 'POST, med forespørgsel og parametre som en JSON-body',
  /** Under the method of a POST request: why the query was not sent in the URL */
  'vision.network.method.post-explained':
    "Forespørgslen og parametrene udgør {{size}} tegn som søgeparametre; fra {{limit}} og opefter sender @sanity/client dem som en JSON-body, da API'et begrænser længden af en URL. Indstillingerne forbliver i URL'en.",
  /** In the Network panel: the region the query ran in */
  'vision.network.region': 'Forespørgslen kørte i',
  /** The response did not say where the query ran */
  'vision.network.region.unknown': 'Ikke angivet',
  /** In the Network panel: the round trip and the time on the server */
  'vision.network.timing': 'Tid',
  /** The round trip and the server's time for the query, in milliseconds */
  'vision.network.timing.value': '{{e2e}}ms tur-retur, {{server}}ms på serveren',
  /** In the Network panel: the trace of the request, for Sanity support */
  'vision.network.trace': 'Trace-ID',
  /** Hint in the Network panel while queries go to the API */
  'vision.network.use-cdn-hint':
    "Slå Brug API CDN til i Indstillinger for at sende forespørgsler gennem CDN'et.",
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vision.network.you': 'Dig',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vision.options.dataset.follows-workspace': 'Følger arbejdsområdet',
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vision.options.dataset.pin': 'Fastgør et datasæt',
  /** Hint under the dataset field while a dataset is pinned */
  'vision.options.dataset.pinned': 'Fastgjort; arbejdsområdet bruger muligvis et andet datasæt',
  /** Button that makes the tab follow the workspace's dataset again */
  'vision.options.dataset.use-workspace': 'Brug arbejdsområdets datasæt',
  /** Label for the "Include content source map" switch */
  'vision.options.include-source-map': 'Inkludér content source map',
  /** Description for the "Include content source map" switch */
  'vision.options.include-source-map.description':
    'Tilføjer resultSourceMap til svaret, vist i fanen Content Source Map.',
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vision.options.perspective.global': 'Global ({{name}})',
  /** Label of the switch that sends queries to the API CDN */
  'vision.options.use-cdn': 'Brug API CDN',
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vision.options.use-cdn.anonymous':
    "Dette studie logger dig ind med en cookie, som API CDN'et aldrig modtager: det svarer, som det ville gøre for en anonym besøgende, med det et offentligt datasæt viser.",
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vision.options.use-cdn.blocked':
    "API CDN'et betjener ikke kladder eller udgivelser, så forespørgsler med perspektivet {{perspective}} sendes til API'et. Med published eller raw bruger de CDN'et.",
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vision.options.use-cdn.blocked.title': "Forespørgsler går til API'et, ikke CDN'et",
  /** Description of the API CDN switch */
  'vision.options.use-cdn.description':
    "Sender forespørgslen til API CDN'et, ligesom useCdn: true i @sanity/client, med perspektiverne published og raw: kladder og udgivelser går altid til API'et. Svarene bliver cachelagret i op til et minut; Netværkspanelet viser, når et svar kom fra cachen.",
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vision.options.use-cdn.use-published': 'Brug published-perspektivet',
  /** Label of the variant field */
  'vision.options.variant-label': 'Variant',
  /** Variant option sending the navbar's variant, named */
  'vision.options.variant.global': 'Global ({{name}})',
  /** Variant option sending the navbar's variant while none is selected there */
  'vision.options.variant.global-none': 'Global (ingen valgt)',
  /** Variant option sending no variant */
  'vision.options.variant.none': 'Ingen',
  /** Accessible label for collapsing a bottom panel */
  'vision.panel.collapse': 'Fold panel sammen',
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vision.panel.delta': 'Delta',
  /** Accessible label for expanding a bottom panel */
  'vision.panel.expand': 'Udvid panel',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vision.panel.explain': 'Forklar',
  /** Label of the Functions tab in the response panel */
  'vision.panel.functions': 'Funktioner',
  /** Label of the "History" tab in the response panel */
  'vision.panel.history': 'Historik',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vision.panel.lint': 'Lint',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vision.panel.mutate': 'Muter',
  /** Label of the Network tab in the response panel */
  'vision.panel.network': 'Netværk',
  /** Label of the "Options" panel in the request column */
  'vision.panel.options': 'Indstillinger',
  /** Label of the "Response" tab in the response panel */
  'vision.panel.response': 'Svar',
  /** Label of the "Content Source Map" tab in the response panel */
  'vision.panel.source-map': 'Content Source Map',
  /** Button adding an item to a list param in the params form */
  'vision.params-form.add-item': 'Tilføj element',
  /** Placeholder of a params form field that takes any JSON value */
  'vision.params-form.any-placeholder': 'Enhver JSON-værdi; anden tekst sendes som en streng',
  /** Shown in the params form when the query uses no params */
  'vision.params-form.empty':
    'Forespørgslen bruger ingen parametre. Hver $navn i den får et felt her.',
  /** Shown in the params form while the params JSON cannot be parsed */
  'vision.params-form.invalid-json':
    'Parametrene er ikke gyldig JSON. Ret dem i JSON-visningen for at redigere dem her.',
  /** A boolean param's value is not true or false; it is sent anyway */
  'vision.params-form.invalid.boolean': 'Ikke sandt eller falsk; sendt som {{value}}',
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vision.params-form.invalid.document-type':
    'Ikke en dokumenttype i denne workspace; sendt alligevel',
  /** A whole number param (a slice bound) holds a fraction */
  'vision.params-form.invalid.integer': 'Ikke et helt tal, hvilket udsnit kræver',
  /** A list param's value is not a list; it is sent anyway */
  'vision.params-form.invalid.list': 'Ikke en liste; sendt som {{value}}',
  /** A number param's value is not a number; it is sent anyway */
  'vision.params-form.invalid.number': 'Ikke et tal; sendt som tekst',
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vision.params-form.invalid.option': 'Ikke en af de kendte værdier; sendt alligevel',
  /** A text param's value is not text; it is sent anyway */
  'vision.params-form.invalid.string': 'Ikke tekst; sendt som {{value}}',
  /** Accessible label of an item input of a list param in the params form */
  'vision.params-form.item-label': '${{name}}, element {{index}}',
  /** Placeholder of an item input of a list param in the params form */
  'vision.params-form.item-placeholder': 'Element',
  /** Under a params form field whose param has no value */
  'vision.params-form.missing': 'Ikke angivet: forespørgslen fejler, indtil den har en værdi',
  /** Shown in the params form when the workspace schema could not be read */
  'vision.params-form.no-schema':
    'Typer kommer kun fra forespørgslen: workspace-skemaet kunne ikke læses.',
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vision.params-form.not-set': 'Ikke angivet',
  /** Button setting a date and time param to the current time */
  'vision.params-form.now': 'Nu',
  /** Button removing a param the query does not use from the params */
  'vision.params-form.remove': 'Fjern',
  /** Accessible label of the button removing an item from a list param */
  'vision.params-form.remove-item': 'Fjern element',
  /** Shown in the params form when the query does not parse */
  'vision.params-form.syntax-error':
    'Forespørgslen kan ikke fortolkes, så dens params er vist uden typer.',
  /** Type hint of a params form field: any JSON value */
  'vision.params-form.type.any': 'enhver JSON-værdi',
  /** Type hint of a params form field: true or false */
  'vision.params-form.type.boolean': 'sandt eller falsk',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vision.params-form.type.datetime': 'dato og klokkeslæt (ISO 8601)',
  /** Type hint of a params form field: a document ID */
  'vision.params-form.type.document-id': 'dokument-ID',
  /** Type hint of a params form field: one of the workspace's document types */
  'vision.params-form.type.document-type': 'dokumenttype',
  /** Type hint of a params form field: a whole number */
  'vision.params-form.type.integer': 'helt tal',
  /** Type hint of a params form field: a list of values */
  'vision.params-form.type.list': 'liste, hver {{type}}',
  /** Type hint of a params form field: a number */
  'vision.params-form.type.number': 'tal',
  /** Type hint of a params form field: text */
  'vision.params-form.type.string': 'tekst',
  /** Heading of the params the query does not use, listed in the params form */
  'vision.params-form.unused': 'Bruges ikke af forespørgslen',
  /** Before the expressions that use a param, in the params form */
  'vision.params-form.used-in': 'Brugt i',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vision.params.fit-height': 'Tilpasset indholdet, {{height}} pixels',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vision.params.resize':
    'Tilpas størrelsen på params: træk eller brug piletasterne; dobbeltklik eller tryk på Enter for at tilpasse til indholdet igen',
  /** Tab showing the params as a form inferred from the query */
  'vision.params.view.form': 'Formular',
  /** Tab showing the params as JSON */
  'vision.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vision.params.view.label': 'Rediger params som',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vision.paste.parsed': 'Indlæste forespørgsel fra indsat URL',
  /** Toast shown after a curl command for a query was pasted and loaded into the tab */
  'vision.paste.parsed-curl': 'Indlæste forespørgsel fra indsat cURL-kommando',
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vision.paste.unavailable-variant':
    'Den indsatte URL brugte varianten "{{variant}}"; vælg den i navigationslinjen for at køre forespørgslen med den.',
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vision.paste.unknown-dataset':
    'Datasættet "{{dataset}}" i den indsatte URL er ikke tilgængeligt her, så det nuværende beholdes.',
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vision.paste.unsupported-perspective':
    'Perspektivet i den indsatte URL understøttes ikke her, så det nuværende beholdes.',
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vision.paste.variants-disabled':
    'Den indsatte URL brugte varianten "{{variant}}"; dette workspace har slået varianter fra, så forespørgslen køres uden den.',
  /** Accessible label for the query actions menu */
  'vision.query.actions': 'Forespørgselshandlinger',
  /** Tooltip when automatic refetching is not available for the API version */
  'vision.query.auto-refetch.unsupported':
    'Automatisk genhentning kræver API-version v2021-03-25 eller nyere.',
  /** Toast shown after the query was copied */
  'vision.query.copied': 'Forespørgsel kopieret til udklipsholder',
  /** Menu item copying the query text */
  'vision.query.copy': 'Kopiér forespørgsel',
  /** Menu item opening the export query dialog */
  'vision.query.export': 'Eksportér forespørgsel…',
  /** Menu item reformatting the query */
  'vision.query.prettify': 'Formatér forespørgsel',
  /** Toast shown when the query could not be reformatted */
  'vision.query.prettify.failed': 'Kunne ikke formatere forespørgslen',
  /** Menu item saving the query to the personal saved queries */
  'vision.query.save': 'Gem forespørgsel',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vision.query.stop': 'Stop',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vision.query.stop.description': 'Stop hentning',
  /** Explanation in the settings section about the redesigned experience */
  'vision.redesign.settings.description':
    'Du bruger den redesignede Vision-værktøj. Hvis du skifter tilbage, bevares dine faner og indstillinger i denne browser, til næste gang du prøver det.',
  /** Title of the settings section about the redesigned experience */
  'vision.redesign.settings.title': 'Redesignet Vision (beta)',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vision.redesign.switch-to-classic': 'Skift til klassisk Vision',
  /** Toast button that switches to the redesigned tool */
  'vision.redesign.toast.accept': 'Prøv det nu',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vision.redesign.toast.description':
    'Forespørgselsfaner, live genhentning, svardetaljer og eksporter. Du kan altid skifte tilbage.',
  /** Toast button that hides the invitation */
  'vision.redesign.toast.dismiss': 'Ikke nu',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vision.redesign.toast.title': 'Prøv det redesignede Vision',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vision.redesign.try': 'Prøv redesignet',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vision.redesign.try.description':
    'Skift til det redesignede Vision, i beta. Du kan altid skifte tilbage fra dets sidepanel.',
  /** Empty state of the response panel before anything was fetched */
  'vision.response.empty': 'Intet hentet endnu',
  /** Label for the payload size in the response tab */
  'vision.response.payload-size': 'Payload-størrelse',
  /** Label for the sync tags in the response tab */
  'vision.response.sync-tags': 'Synkroniseringstags',
  /** Shown when the response carried no sync tags */
  'vision.response.sync-tags.none': 'Ingen synkroniseringstags i svaret',
  /** Under the query URL when the request went out as a POST body rather than that URL */
  'vision.response.url.sent-as-post':
    'Sendt som en POST-body: forespørgslen og parametrene er for lange til en URL, så @sanity/client sendte dem som JSON. Indsætning af denne URL i Vision indlæser stadig forespørgslen.',
  /** Accessible label for the result actions menu */
  'vision.result.actions': 'Resultathandlinger',
  /** Toast shown after the result was copied */
  'vision.result.copied': 'Resultat kopieret til udklipsholder',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vision.result.copied-value': 'Kopierede {{path}}',
  /** Menu item and button copying the result as JSON */
  'vision.result.copy': 'Kopiér resultat',
  /** Button next to each property in the result tree, copying its value */
  'vision.result.copy-value': 'Kopiér værdi',
  /** Empty state of the result view */
  'vision.result.empty': 'Kør forespørgslen for at se resultatet her',
  /** Button exporting the result as CSV */
  'vision.result.export-csv': 'Eksportér CSV',
  /** Button exporting the result as JSON */
  'vision.result.export-json': 'Eksportér JSON',
  /** Menu item opening the TypeScript export dialog */
  'vision.result.export-typescript': 'Eksportér TypeScript…',
  /** Menu item opening the Zod export dialog */
  'vision.result.export-zod': 'Eksportér Zod…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vision.result.graph.collapse': 'Skjul det, den indeholder',
  /** Button fitting the whole graph in view */
  'vision.result.graph.fit': 'Tilpas til visning',
  /** Accessible label of the graph, saying how to move around in it */
  'vision.result.graph.label':
    'Resultatgraf: træk for at flytte, rul for at zoome; når fokuseret, flytter piletasterne, + og - zoomer, 0 tilpasser',
  /** Ends the note on a graph that leaves part of this result out */
  'vision.result.graph.left-out-hint': 'Træ- og JSON-visningerne viser det hele.',
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vision.result.graph.node-limit': 'Kun de første {{nodes}} objekter og arrays vises.',
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vision.result.graph.partial': 'Kun de første {{rows}} poster er vist for {{nodes}}.',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vision.result.graph.partial.node': '{{name}} ({{entries}} poster)',
  /** Title of the graph node of the result itself */
  'vision.result.graph.root': 'resultat',
  /** Button zooming into the graph */
  'vision.result.graph.zoom-in': 'Zoom ind',
  /** Button zooming out of the graph */
  'vision.result.graph.zoom-out': 'Zoom ud',
  /** Tab showing the result as a graph of its objects and arrays */
  'vision.result.view.graph': 'Graf',
  /** Tab showing the result as indented JSON text, to select and copy from */
  'vision.result.view.json': 'JSON',
  /** Accessible label of the tabs that switch how the result shows */
  'vision.result.view.label': 'Resultatvisning',
  /** Tab showing the result as a tree to browse */
  'vision.result.view.tree': 'Træ',
  /** Empty state of the saved queries panel */
  'vision.saved.empty':
    'Ingen gemte forespørgsler endnu. Gem den aktuelle forespørgsel med +-knappen.',
  /** Empty state of a query list when the search matches nothing */
  'vision.saved.empty-search': 'Ingen forespørgsler matcher din søgning',
  /** Menu item loading a saved query into the active tab */
  'vision.saved.load-in-current-tab': 'Indlæs i aktuel fane',
  /** Menu item opening a saved query in a new tab */
  'vision.saved.open-in-new-tab': 'Åbn i ny fane',
  /** Menu item renaming a saved query */
  'vision.saved.rename': 'Omdøb',
  /** Accessible label for the button saving the current query */
  'vision.saved.save-current': 'Gem aktuel forespørgsel',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vision.saved.unavailable-variant':
    'Denne gemte forespørgsel brugte varianten "{{variant}}"; vælg den i navigationslinjen for at køre forespørgslen med den.',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vision.saved.unknown-dataset':
    'Datasættet "{{dataset}}" for denne gemte forespørgsel er ikke tilgængeligt her, det nuværende bibeholdes.',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vision.saved.variants-disabled':
    'Denne gemte forespørgsel brugte varianten "{{variant}}"; dette workspace har varianter slået fra, så forespørgslen kører uden den.',
  /** Button in the settings dialog that clears the stored state */
  'vision.settings.clear-storage': 'Ryd lager',
  /** Confirmation button for clearing the storage */
  'vision.settings.clear-storage.confirm': 'Ja, ryd lager',
  /** Explanation of what clearing the storage does */
  'vision.settings.clear-storage.description':
    'Sletter dine personlige gemte forespørgsler og funktionsbiblioteket, nulstiller åbne faner og disse standardindstillinger i denne browser, og vender tilbage til det klassiske Vision-værktøj. Delte forespørgsler bevares.',
  /** Toast shown when the saved queries could not be cleared */
  'vision.settings.clear-storage.error': 'Kunne ikke rydde de gemte forespørgsler',
  /** Toast shown after the storage was cleared */
  'vision.settings.clear-storage.success': 'Lager ryddet',
  /** Explanation at the top of the settings dialog */
  'vision.settings.description':
    'Standardindstillinger for nye faner. Åbne faner beholder deres egne indstillinger.',
  /** Explains the setting listing the fields left out of History diffs */
  'vision.settings.history-diff.description':
    'Én feltsti pr. linje. En sti matcher på ethvert niveau af et resultat, så _rev skjuler revisionen af hvert dokument i det. Hver diff kan stadig vise dem.',
  /** Button restoring the default fields left out of History diffs */
  'vision.settings.history-diff.reset': 'Nulstil til standardindstillinger',
  /** Label of the setting listing the fields left out of History diffs */
  'vision.settings.history-diff.title': 'Felter skjult fra History-diffs',
  /** Title of the settings dialog */
  'vision.settings.title': 'Indstillinger',
  /** Empty state of the shared queries panel */
  'vision.shared.empty':
    'Ingen delte forespørgsler endnu. Del en gemt forespørgsel for at gøre den tilgængelig for alle, der bruger dette datasæt.',
  /** Shortcut description: close dialogs and menus */
  'vision.shortcuts.close': 'Luk dialoger og menuer',
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vision.shortcuts.complete': 'Fuldfør et funktionsnavn',
  /** Shortcut description: copy the query */
  'vision.shortcuts.copy-query': 'Kopiér forespørgslen',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vision.shortcuts.extract-function': 'Udtræk projektionen ved markøren til en funktion',
  /** Shortcut description: run the query */
  'vision.shortcuts.fetch': 'Hent forespørgslen',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vision.shortcuts.next-finding': 'Spring til næste lint-fund',
  /** Shortcut description: reformat the query */
  'vision.shortcuts.prettify': 'Formatér forespørgslen pænt',
  /** Title of the keyboard shortcuts dialog */
  'vision.shortcuts.title': 'Tastaturgenveje',
  /** Sidebar toggle: show icons only */
  'vision.sidebar.collapse': 'Skjul sidepanel',
  /** Sidebar toggle: show labels next to the icons */
  'vision.sidebar.expand': 'Udvid sidepanel',
  /** Accessible label for the sidebar navigation */
  'vision.sidebar.label': 'Vision-sidepanel',
  /** Sidebar item and drawer title for personal saved queries */
  'vision.sidebar.saved-queries': 'Gemte forespørgsler',
  /** Sidebar item opening the settings dialog */
  'vision.sidebar.settings': 'Indstillinger',
  /** Sidebar item and drawer title for shared queries */
  'vision.sidebar.shared-queries': 'Delte forespørgsler',
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vision.sidebar.shortcuts': 'Tastaturgenveje',
  /** Empty state of the content source map panel */
  'vision.source-map.empty':
    'Intet content source map i svaret. Slå "Include content source map" til under Indstillinger, og hent igen.',
  /** Accessible label of the divider between the result and the response details panel */
  'vision.split.bottom-panel':
    'Juster størrelsen på panelet med svardetaljer: træk eller brug piletasterne; Home og End går til grænserne, Enter nulstiller',
  /** Accessible label of the divider between the request and response panes */
  'vision.split.request-response':
    'Juster størrelsen på forespørgsels- og svarpanelerne: træk eller brug piletasterne; Home og End går til grænserne, Enter nulstiller',
  /** Accessible label for the button closing a query tab */
  'vision.tabs.close-tab': 'Luk fane',
  /** Accessible label for the list of query tabs */
  'vision.tabs.label': 'Forespørgselsfaner',
  /** Accessible label for the button opening a new query tab */
  'vision.tabs.new-tab': 'Ny fane',
  /** Placeholder of the input renaming a tab */
  'vision.tabs.title-placeholder': 'Fanetitel',
  /** Title of a tab whose query is still empty */
  'vision.tabs.untitled': 'Unavngivet forespørgsel',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vision.webmcp.check-query': 'Kontrollér en GROQ-forespørgsel i Vision',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vision.webmcp.describe-schema': 'Beskriv skemaet i Vision',
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vision.webmcp.explain-query': 'Forklar en GROQ-forespørgsel i Vision',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vision.webmcp.get-state': 'Læs den åbne Vision-fane',
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vision.webmcp.open-query': 'Åbn en GROQ-forespørgsel i Vision',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vision.webmcp.preview-mutations': 'Forhåndsvis mutationer i Vision',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vision.webmcp.run-query': 'Kør en GROQ-forespørgsel i Vision',
})
