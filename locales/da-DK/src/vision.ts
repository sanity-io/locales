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
  /** Tooltip shown when the API version selector is locked to vX because a variant is selected */
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
  'vista.agent-actions.credits': 'Bruger én AI-kredit pr. anmodning',
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vista.ai-credits.balance': '{{balance}} af {{quota}} AI-krediter tilbage denne måned.',
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vista.ai-credits.deficit':
    '{{used}} AI-krediter brugt denne måned, {{deficit}} mere end de {{quota}} inkluderede.',
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vista.ai-credits.limit.description':
    'Din organisation har brugt {{used}} af sine {{quota}} AI-krediter denne måned, så Sanity Agent Actions er sat på pause indtil næste måned, eller indtil udgiftsgrænsen hæves.',
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vista.ai-credits.limit.description-unknown':
    'Din organisation har nået sin udgiftsgrænse for AI-krediter, så Sanity Agent Actions er sat på pause indtil næste måned, eller indtil grænsen hæves.',
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vista.ai-credits.limit.learn-more': 'Sådan fungerer AI-krediter',
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vista.ai-credits.limit.manage': 'Administrer AI-krediter',
  /** Title of the card shown where the organization is out of AI credits */
  'vista.ai-credits.limit.title': 'Ingen AI-krediter tilbage',
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vista.ai-credits.usage': 'AI-forbrug',
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vista.ai-credits.used': '{{used}} AI-krediter brugt denne måned.',
  /** Button in the request column's action bar naming the API version requests go out with */
  'vista.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vista.api-version.button-cdn': 'API CDN {{version}}',
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vista.api-version.button-invalid': 'Ufuldendt API-version',
  /** Tooltip of the API version button */
  'vista.api-version.tooltip':
    'Forespørgsler kører mod API-version {{version}}. Vælg for at ændre det i Indstillinger.',
  /** Tooltip of the API version button while queries go through the API CDN */
  'vista.api-version.tooltip-cdn':
    "Forespørgsler kører mod API CDN'en med API-version {{version}}. Vælg for at ændre det i Indstillinger.",
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vista.api-version.tooltip-cdn-blocked':
    "Forespørgsler kører mod API'et med API-version {{version}}, ikke API CDN'en: den betjener ikke {{perspective}}-perspektivet. Vælg for at ændre det i Indstillinger.",
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vista.api-version.tooltip-invalid':
    'API-versionen i Indstillinger er ufuldendt, så intet kan hentes, før den er færdig.',
  /** Tooltip of the API version button while a selected variant forces the experimental API */
  'vista.api-version.tooltip-locked':
    'Forespørgsler kører mod API-version {{version}}, som den valgte variant kræver.',
  /** Label of the document after the change in the Delta panel */
  'vista.delta.after': 'Efter',
  /** Label of the document before the change in the Delta panel */
  'vista.delta.before': 'Før',
  /** What the Delta panel does */
  'vista.delta.description':
    'Kører forespørgslen i delta-tilstand, ligesom GROQ-drevne webhooks, listeners og Sanity Functions gør: before() og after() er et dokument før og efter en ændring, @ er dokumentet efter den, og delta::changedAny() sammenligner dem. Den kører i browseren med groq-js. En tom side betyder intet dokument: ændringen opretter eller sletter det.',
  /** Label of the document ID field in the Delta panel */
  'vista.delta.document-id': 'Dokument-ID',
  /** Shown when there is a query but no documents to compare */
  'vista.delta.empty': 'Indlæs et dokuments historik, eller skriv dokumenterne i Før og Efter.',
  /** Shown when the query fails in delta mode */
  'vista.delta.failed': 'Forespørgslen kunne ikke køres i delta-tilstand: {{message}}',
  /** Shown when the After document is not valid JSON */
  'vista.delta.invalid-after': 'Efter er ikke gyldig JSON: {{message}}',
  /** Shown when the Before document is not valid JSON */
  'vista.delta.invalid-before': 'Before er ikke gyldig JSON: {{message}}',
  /** Button loading the document's revisions from the History API */
  'vista.delta.load': 'Indlæs historik',
  /** Shown when the history could not be loaded */
  'vista.delta.load-failed': 'Historikken kunne ikke indlæses: {{message}}',
  /** A delta filter that is true for the change */
  'vista.delta.matches':
    'Match: et webhook eller en funktion med dette filter kører for denne ændring.',
  /** A delta filter that is false for the change */
  'vista.delta.no-match':
    'Intet match: et webhook eller en funktion med dette filter kører ikke for denne ændring.',
  /** Shown while the query or its params cannot be sent */
  'vista.delta.no-request': 'Ret forespørgslen og dens parametre for at køre den i delta-tilstand.',
  /** Heading of the delta result */
  'vista.delta.result': 'Resultat',
  /** The After choice for a change that deletes the document */
  'vista.delta.revision.none-after': 'Intet: ændringen sletter dokumentet',
  /** The Before choice for a change that creates the document */
  'vista.delta.revision.none-before': 'Intet: ændringen opretter dokumentet',
  /** A revision in the Before and After lists */
  'vista.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vista.drawer.close': 'Luk panel',
  /** Explanation at the top of the Explain panel */
  'vista.explain.description':
    'Forespørgselsplanen er den måde, Content Lake kører forespørgslen på: hvad den læser, filtrerer og sorterer undervejs, og hvad der overlades til senere trin. Forklar dette for mig lader Sanity Agent Actions beskrive forespørgslen og dens plan i klart sprog, hvilket bruger én AI-kredit.',
  /** Shown in the Explain panel while there is no valid query to explain */
  'vista.explain.empty': 'Skriv en forespørgsel for at forklare den.',
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vista.explain.explain': 'Forklar dette for mig',
  /** Shown when the explanation could not be written */
  'vista.explain.failed': 'Forespørgslen kunne ikke forklares: {{message}}',
  /** A count the index computes without reading the documents */
  'vista.explain.insight.aggregate': 'Talt i indekset, uden at læse dokumenterne.',
  /** A subquery the plan runs once for all documents */
  'vista.explain.insight.batched-subquery':
    'Underforespørgslen kører én gang for alle dokumenter, i en enkelt samlet hentning, ikke én gang pr. dokument.',
  /** Part of the filter runs in memory; the expression follows */
  'vista.explain.insight.filter-in-memory':
    'En del af filteret kører i hukommelsen, efter læsning: hvert dokument, som indekset lader passere, bliver læst først, hvilket bliver langsomt på store datasæt. Joins (->) og funktioner i et filter kan ikke bruge indekset.',
  /** The index sorts and limits while reading */
  'vista.explain.insight.index-sort-limit':
    'Indekset sorterer og begrænser dokumenterne, mens de læses.',
  /** The plan slices in memory */
  'vista.explain.insight.slice-in-memory':
    'Udsnittet tages i hukommelsen efter læsning, ikke som en begrænsning under læsning.',
  /** The plan sorts in memory */
  'vista.explain.insight.sort-in-memory':
    'Sortering sker i hukommelsen, efter alle match er læst. Sortér efter attributter, som indekset kan sortere efter.',
  /** Link under the plan insights to the guide on fast queries */
  'vista.explain.insights.guide': 'Højtydende GROQ',
  /** Heading of the plan insights in the Explain panel */
  'vista.explain.insights.title': 'Hvad der skiller sig ud',
  /** Button in the Explain panel fetching the query plan */
  'vista.explain.plan': 'Vis forespørgselsplanen',
  /** Shown when the query plan could not be fetched */
  'vista.explain.plan-failed': 'Forespørgselsplanen kunne ikke hentes: {{message}}',
  /** Heading of the query plan in the Explain panel */
  'vista.explain.plan-title': 'Forespørgselsplan',
  /** Toast shown after a code snippet was copied */
  'vista.export-query.copied': 'Kodestump kopieret til udklipsholder',
  /** Label for the button that copies a code snippet */
  'vista.export-query.copy': 'Kopiér kodestump',
  /** Explanation at the top of the export query dialog */
  'vista.export-query.description':
    'Kør denne forespørgsel uden for studiet med en af disse kodestumper.',
  /** Title of the dialog that exports the query as code snippets */
  'vista.export-query.title': 'Eksportér forespørgsel',
  /** Note about authentication in the export query dialog */
  'vista.export-query.token-note':
    'Private datasets kræver et API-token. Offentlige datasets kan undlade Authorization-headeren.',
  /** Toast shown after the generated code was copied */
  'vista.export-types.copied': 'Kode kopieret til udklipsholder',
  /** Label for the button that copies the generated code */
  'vista.export-types.copy': 'Kopiér kode',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vista.export-types.empty':
    'Hent forespørgslen først, så der er et resultat at udlede typer fra.',
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vista.export-types.schema-error': 'Skemaevaluering mislykkedes: {{message}}',
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vista.export-types.source.result':
    'Udledt fra det hentede resultat, da forespørgslen ikke kunne evalueres mod workspace-skemaet.',
  /** Note shown when the types were derived from the workspace schema */
  'vista.export-types.source.schema':
    'Udledt fra workspace-skemaet, på samme måde som sanity typegen gør det.',
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vista.export-types.stale-result':
    'Det viste resultat blev hentet for en anden forespørgsel eller andre parametre. Hent den aktuelle forespørgsel først, så der er et resultat at udlede typer fra.',
  /** Title of the dialog exporting TypeScript types for the result */
  'vista.export-types.title-typescript': 'Eksportér TypeScript',
  /** Title of the dialog exporting a Zod schema for the result */
  'vista.export-types.title-zod': 'Eksportér Zod',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vista.functions.add': 'Tilføj til forespørgsel',
  /** Shown on a library function the query declares the same way */
  'vista.functions.declared': 'I denne forespørgsel',
  /** Lint action on a call of a library function the query does not declare */
  'vista.functions.editor.add-from-library': 'Erklær den',
  /** Note in a function's hover documentation: the API version it needs */
  'vista.functions.editor.api-version': 'Kræver API-version {{version}} eller nyere',
  /** Detail of a completion for a custom function the query declares */
  'vista.functions.editor.completion-declared': 'i denne forespørgsel',
  /** Detail of a completion for a library function, which declares it too */
  'vista.functions.editor.completion-library': 'fra dit bibliotek',
  /** Note in the hover documentation of a custom function the query declares */
  'vista.functions.editor.declared-on': 'Brugerdefineret funktion, erklæret på linje {{line}}',
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vista.functions.editor.delta-only':
    'Fungerer kun i delta-tilstand, hvor webhooks og Sanity Functions kører deres filtre',
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vista.functions.editor.extract': 'Udtræk til funktion',
  /** Note in the hover documentation of a library function the query does not declare */
  'vista.functions.editor.in-library':
    'I dit funktionsbibliotek, ikke erklæret i denne forespørgsel',
  /** Link at the end of a built-in function's hover documentation */
  'vista.functions.editor.reference': 'GROQ-funktionsreference',
  /** Explanation under the library heading in the Functions panel */
  'vista.functions.library.description':
    'Gemmes i denne browser for hvert datasæt i projektet. Fuldførelser tilbyder disse funktioner, og lint tilbyder at erklære et forespørgselskald som en.',
  /** Shown in the Functions panel while the library is empty */
  'vista.functions.library.empty':
    'Gem en funktion, som forespørgslen erklærer, for at bruge den i andre forespørgsler.',
  /** Heading of the functions library in the Functions panel */
  'vista.functions.library.title': 'Bibliotek',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vista.functions.query.empty':
    'Erklær brugerdefinerede funktioner øverst i forespørgslen, eller placer markøren i en projektion, som author->{name}, og tryk på udtræksknappen over editoren ({{shortcut}}).',
  /** Heading of the functions the query declares in the Functions panel */
  'vista.functions.query.title': 'I denne forespørgsel',
  /** Removes a function from the library */
  'vista.functions.remove': 'Fjern fra biblioteket',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vista.functions.replace': 'Erstat i forespørgsel',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vista.functions.reveal': 'Vis {{name}} i editoren',
  /** Button of a function the query declares that is not in the library yet */
  'vista.functions.save': 'Gem i biblioteket',
  /** Shown on a function the query declares the way the library has it */
  'vista.functions.saved': 'Gemt',
  /** Button of a function the query declares differently from the library's version */
  'vista.functions.update': 'Opdater bibliotek',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vista.generate.button': 'Generer forespørgsel',
  /** Closes the generate query bar */
  'vista.generate.close': 'Luk',
  /** Explanation under the generate query field */
  'vista.generate.description':
    'Sanity Agent Actions skriver GROQ ud fra din beskrivelse og dokumenttyperne, og Content Lake kontrollerer hvert forsøg; hvert forsøg bruger én AI-kredit. Det erstatter denne faneblads forespørgsel og kører den; fortryd i editoren bringer den forrige forespørgsel tilbage.',
  /** Shown when no query could be generated, above the reason */
  'vista.generate.failed': 'Forespørgslen kunne ikke genereres',
  /** Accessible label of the description field in the generate query bar */
  'vista.generate.label': 'Hvad skal forespørgslen hente?',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vista.generate.open-anyway': 'Åbn det seneste forsøg',
  /** Placeholder of the description field in the generate query bar */
  'vista.generate.placeholder':
    'De 10 nyeste forfattere, sorteret efter efternavn og derefter fornavn',
  /** Shown while the first attempt at a query is written */
  'vista.generate.progress': 'Skriver forespørgslen…',
  /** Shown while a rejected attempt is retried */
  'vista.generate.progress-retry': 'Retter forespørgslen (forsøg {{attempt}} af {{max}})…',
  /** Button generating the query */
  'vista.generate.submit': 'Generer',
  /** Badge on a history entry the API CDN answered */
  'vista.history.cdn': 'API CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vista.history.cdn-cache-hit': 'CDN-cachetræf',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vista.history.changed': 'Ændret',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vista.history.changes': 'Ændringer',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vista.history.changes-failed': 'Ændringerne kunne ikke vises.',
  /** Button retrying to show the changes of a history entry */
  'vista.history.changes-retry': 'Prøv igen',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vista.history.compared-with': 'Sammenlignet med hentningen kl. {{time}}',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vista.history.diff.params': 'Parametre',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vista.history.diff.query': 'Forespørgsel',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vista.history.diff.query-formatting-only': 'Kun formateringen blev ændret',
  /** Label of the diff of the query result in a history entry's changes */
  'vista.history.diff.result': 'Resultat',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vista.history.diff.url': 'Request-URL',
  /** Empty state of the history panel */
  'vista.history.empty': 'Intet hentet endnu',
  /** Status label for a failed fetch in the history */
  'vista.history.failed': 'Mislykkedes',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vista.history.hide-hidden': 'Skjul dem',
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vista.history.hiding': 'Skjuler {{fields}}',
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vista.history.only-hidden-changed': 'Kun skjulte felter blev ændret',
  /** History reason: a tab opened with a generated query fetched it */
  'vista.history.reason.generated': 'Genereret forespørgsel',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vista.history.reason.link': 'Åbnet link',
  /** History reason: a live event matched the query's sync tags */
  'vista.history.reason.live': 'Live-opdatering',
  /** History reason: the live connection asked every client to refetch */
  'vista.history.reason.live-restart': 'Live-forbindelse genstartet',
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vista.history.reason.live-start': 'Live-hentning startet',
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vista.history.reason.load': 'Forespørgsel indlæst',
  /** History reason: the fetch button was pressed */
  'vista.history.reason.manual': 'Hent-knap',
  /** History reason: mutations were applied from the Mutate panel */
  'vista.history.reason.mutation': 'Mutationer anvendt',
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vista.history.reason.options': 'Indstillinger ændret',
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vista.history.reason.paste': 'Indsat URL',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vista.history.reason.resume': 'Automatisk genhentning genoptaget',
  /** History reason: the keyboard shortcut was used */
  'vista.history.reason.shortcut': 'Tastaturgenvej',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vista.history.same-result': 'Samme resultat',
  /** Button showing the hidden fields in a history entry's changes */
  'vista.history.show-hidden': 'Vis dem',
  /** Next to a history entry's changes while the hidden fields are shown */
  'vista.history.showing-hidden': 'Viser {{fields}}, skjult som standard',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vista.history.too-large': 'For stort til at sammenligne',
  /** A history entry whose result is the same as the previous result */
  'vista.history.unchanged': 'Ingen ændringer',
  /** Shown in the Lint panel while the query has no lint findings */
  'vista.lint.empty':
    'Ingen lint-resultater. Problemer, som GROQ-linteren finder i forespørgslen, vises her, mens du skriver; vælg et for at markere det i editoren.',
  /** Where a lint finding sits in the query, shown under its message */
  'vista.lint.position': 'Linje {{line}}, kolonne {{column}}',
  /** Severity badge of a lint finding */
  'vista.lint.severity.error': 'Fejl',
  /** Severity badge of a lint finding */
  'vista.lint.severity.hint': 'Hint',
  /** Severity badge of a lint finding */
  'vista.lint.severity.info': 'Info',
  /** Severity badge of a lint finding */
  'vista.lint.severity.warning': 'Advarsel',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vista.lint.use-suggestion': 'Brug {{suggestion}}',
  /** Badge shown while a tab refetches automatically */
  'vista.live.active': 'Live',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vista.live.button': 'Live-hentning',
  /** Tooltip of the Live button while automatic refetching is off */
  'vista.live.button.start': 'Hent, og hent derefter igen, når dokumenterne i resultatet ændres',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vista.live.button.stop':
    'Stop hentning, når dokumenterne i resultatet ændres. Hent-knappen henter stadig på forespørgsel, for resultater som ingen dokumentændring påvirker, som now()',
  /** Error shown when the live connection breaks */
  'vista.live.error': 'Live-opdateringer afbrudt: {{message}}',
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vista.live.stop': 'Stop live',
  /** Button in the Mutate panel adding a mutation to the list */
  'vista.mutate.add': 'Tilføj mutation',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vista.mutate.add.create': 'Opret et dokument',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vista.mutate.add.delete': 'Slet et dokument',
  /** Adds a mutation deleting the documents of the shown result */
  'vista.mutate.add.delete-result': 'Slet dokumenterne i resultatet',
  /** Adds a mutation patching a document, its ID to fill in */
  'vista.mutate.add.patch': 'Ret et dokument',
  /** Adds a mutation patching the documents of the shown result */
  'vista.mutate.add.patch-result': 'Ret dokumenterne i resultatet',
  /** Button applying the mutations a dry run showed */
  'vista.mutate.apply': 'Anvend på {{dataset}}',
  /** Heading of the error shown when applying the mutations failed */
  'vista.mutate.apply-failed': 'Ændringerne blev ikke anvendt',
  /** Next to Apply while the mutations as they are have had no dry run */
  'vista.mutate.apply-needs-preview': 'Anvend sender det, en tør kørsel viste: kør en først.',
  /** Option giving array items without a _key one */
  'vista.mutate.auto-keys': 'Tilføj en _key til array-elementer, der ikke har nogen',
  /** Under the option giving array items a _key */
  'vista.mutate.auto-keys.description':
    'Studioet skal bruge en på hvert array-element for at kunne redigere det.',
  /** Button showing a document's changes in the dry run */
  'vista.mutate.changes': 'Ændringer',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vista.mutate.changes-failed': 'Ændringerne kunne ikke vises.',
  /** Button retrying to show a document's changes */
  'vista.mutate.changes-retry': 'Prøv igen',
  /** What the Mutate panel does */
  'vista.mutate.description':
    "Skriv ændringer, som Mutations API'en tager dem, i en liste: create, createOrReplace, createIfNotExists, delete og patch, via ID eller en GROQ-forespørgsel. En tør kørsel viser, hvad de ville gøre ved hvert dokument uden at ændre noget; Anvend skriver dem derefter til datasættet i én transaktion med din konto.",
  /** What the API says went wrong with one of the mutations */
  'vista.mutate.failure-item': 'Ændring {{index}}: {{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vista.mutate.generate.button': 'Generér ændringer',
  /** Explanation under the generate mutations field */
  'vista.mutate.generate.description':
    'Sanity Agent Actions skriver ændringerne ud fra din beskrivelse, dokumenterne i resultatet og deres typer, og en tør kørsel kontrollerer hvert forsøg; hvert forsøg bruger én AI-kredit. De erstatter ændringerne her, hvor fortryd bringer disse tilbage; intet skrives, før du anvender dem.',
  /** Shown when no mutations could be generated, above the reason */
  'vista.mutate.generate.failed': 'Ændringerne kunne ikke genereres',
  /** Accessible label of the description field in the generate mutations bar */
  'vista.mutate.generate.label': 'Hvad skal ændringerne gøre?',
  /** Placeholder of the description field in the generate mutations bar */
  'vista.mutate.generate.placeholder': 'Ændr titlen på dokumenterne i resultatet til foobar',
  /** Shown while the first attempt at the mutations is written */
  'vista.mutate.generate.progress': 'Skriver ændringerne…',
  /** Shown while an attempt the dry run turned down is retried */
  'vista.mutate.generate.progress-retry': 'Retter ændringerne (forsøg {{attempt}} af {{max}})…',
  /** Under the dry run: the fields the diffs leave out */
  'vista.mutate.hiding': 'Ændringerne udelader {{fields}}, som Historik gør.',
  /** Shown when the mutations are not valid JSON */
  'vista.mutate.invalid-json': 'Ændringerne er ikke gyldig JSON: {{message}}',
  /** Shown when a mutation does not name exactly one thing to do */
  'vista.mutate.invalid-mutation':
    'Ændring {{index}} skal have præcis én af create, createOrReplace, createIfNotExists, delete eller patch.',
  /** Label of the mutations editor */
  'vista.mutate.mutations': 'Ændringer',
  /** The dry run touched no documents */
  'vista.mutate.no-documents': 'Ændringerne berører ingen dokumenter.',
  /** Shown when the JSON is not a list of mutations */
  'vista.mutate.not-a-list':
    'Skriv en liste af ændringer, en enkelt ændring, eller en forespørgselstekst med en liste af ændringer.',
  /** A document the mutations create */
  'vista.mutate.operation.create': 'Opret',
  /** A document the mutations delete */
  'vista.mutate.operation.delete': 'Slet',
  /** A document the mutations touch without changing its content */
  'vista.mutate.operation.none': 'Ingen ændring',
  /** A document the mutations change */
  'vista.mutate.operation.update': 'Opdater',
  /** Button running the mutations as a dry run */
  'vista.mutate.preview': 'Tør prøvekørsel',
  /** Heading of the error shown when the dry run failed */
  'vista.mutate.preview-failed': 'Prøvekørslen mislykkedes',
  /** Heading of the dry run's outcome */
  'vista.mutate.preview-heading': 'Prøvekørsel',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vista.mutate.stale':
    'Mutationerne, datasættet eller indstillingerne er ændret siden denne prøvekørsel. Kør den igen for at anvende dem.',
  /** How many documents the dry run changes and leaves as they are */
  'vista.mutate.summary': 'Ændret: {{changed}} · Uændret: {{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vista.network.cache': 'Cache',
  /** The API CDN answered from its cache */
  'vista.network.cache.hit': 'Hit',
  /** Under the details of a CDN cache hit */
  'vista.network.cache.hit-explained':
    "CDN'en svarede med et svar, den havde cachet, fra en lokation nær dig; forespørgslen nåede ikke API'et.",
  /** The API CDN answered with a response this session had not seen */
  'vista.network.cache.miss': 'Miss, så vidt denne session kan se',
  /** The API answered, which caches nothing */
  'vista.network.cache.none': "Ingen, API'et svarer på enhver forespørgsel med friskt indhold",
  /** Shown in the Network panel while there is no response */
  'vista.network.empty':
    'Hent forespørgslen for at se, hvilket endpoint der svarede på den, om det var fra en cache, og hvor den blev kørt.',
  /** In the Network panel: the endpoint that answered */
  'vista.network.endpoint': 'Besvaret af',
  /** The live API answered */
  'vista.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vista.network.endpoint.cdn': 'API CDN',
  /** In the Network panel: the region the query ran in */
  'vista.network.region': 'Forespørgsel kørt i',
  /** The response did not say where the query ran */
  'vista.network.region.unknown': 'Ikke rapporteret',
  /** In the Network panel: the round trip and the time on the server */
  'vista.network.timing': 'Tid',
  /** The round trip and the server's time for the query, in milliseconds */
  'vista.network.timing.value': '{{e2e}} ms rundtur, {{server}} ms på serveren',
  /** In the Network panel: the trace of the request, for Sanity support */
  'vista.network.trace': 'Trace-ID',
  /** Hint in the Network panel while queries go to the API */
  'vista.network.use-cdn-hint':
    "Slå Brug API CDN til i Indstillinger for at sende forespørgsler gennem CDN'en.",
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vista.network.you': 'Dig',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vista.options.dataset.follows-workspace': 'Følger workspacet',
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vista.options.dataset.pin': 'Fastgør et datasæt',
  /** Hint under the dataset field while a dataset is pinned */
  'vista.options.dataset.pinned': 'Fastgjort; arbejdsområdet bruger muligvis et andet datasæt',
  /** Button that makes the tab follow the workspace's dataset again */
  'vista.options.dataset.use-workspace': 'Brug arbejdsområdets datasæt',
  /** Label for the "Include content source map" switch */
  'vista.options.include-source-map': 'Inkluder indholdskildekort',
  /** Description for the "Include content source map" switch */
  'vista.options.include-source-map.description':
    'Tilføjer resultSourceMap til svaret, vist i fanen Indholdskildekort.',
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vista.options.perspective.global': 'Global ({{name}})',
  /** Label of the switch that sends queries to the API CDN */
  'vista.options.use-cdn': "Brug API CDN'en",
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vista.options.use-cdn.anonymous':
    "Dette studie logger dig ind med en cookie, som API CDN'en aldrig modtager: den svarer, som den ville til en anonym besøgende, med det et offentligt datasæt viser.",
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vista.options.use-cdn.blocked':
    "API CDN'en betjener ikke kladder eller udgivelser, så forespørgsler med {{perspective}}-perspektivet går til API'et. Med udgivet eller rå bruger de CDN'en.",
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vista.options.use-cdn.blocked.title': "Forespørgsler går til API'et, ikke CDN'en",
  /** Description of the API CDN switch */
  'vista.options.use-cdn.description':
    "Sender forespørgslen til API CDN'en, ligesom useCdn: true i @sanity/client, med de udgivede og rå perspektiver: kladder og udgivelser går altid til API'et. Dens svar caches i op til et minut; netværkspanelet viser, når et svar kom fra cachen.",
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vista.options.use-cdn.use-published': 'Brug det udgivede perspektiv',
  /** Label of the variant field */
  'vista.options.variant-label': 'Variant',
  /** Variant option sending the navbar's variant, named */
  'vista.options.variant.global': 'Global ({{name}})',
  /** Variant option sending the navbar's variant while none is selected there */
  'vista.options.variant.global-none': 'Global (ingen valgt)',
  /** Variant option sending no variant */
  'vista.options.variant.none': 'Ingen',
  /** Accessible label for collapsing a bottom panel */
  'vista.panel.collapse': 'Skjul panel',
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vista.panel.delta': 'Delta',
  /** Accessible label for expanding a bottom panel */
  'vista.panel.expand': 'Udvid panel',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vista.panel.explain': 'Forklar',
  /** Label of the Functions tab in the response panel */
  'vista.panel.functions': 'Funktioner',
  /** Label of the "History" tab in the response panel */
  'vista.panel.history': 'Historik',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vista.panel.lint': 'Lint',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vista.panel.mutate': 'Muter',
  /** Label of the Network tab in the response panel */
  'vista.panel.network': 'Netværk',
  /** Label of the "Options" panel in the request column */
  'vista.panel.options': 'Indstillinger',
  /** Label of the "Response" tab in the response panel */
  'vista.panel.response': 'Response',
  /** Label of the "Content Source Map" tab in the response panel */
  'vista.panel.source-map': 'Content Source Map',
  /** Button adding an item to a list param in the params form */
  'vista.params-form.add-item': 'Tilføj element',
  /** Placeholder of a params form field that takes any JSON value */
  'vista.params-form.any-placeholder': 'Enhver JSON-værdi; anden tekst sendes som en streng',
  /** Shown in the params form when the query uses no params */
  'vista.params-form.empty':
    'Forespørgslen bruger ingen parametre. Hver $navn i den får et felt her.',
  /** Shown in the params form while the params JSON cannot be parsed */
  'vista.params-form.invalid-json':
    'Parametrene er ikke gyldig JSON. Ret dem i JSON-visningen for at redigere dem her.',
  /** A boolean param's value is not true or false; it is sent anyway */
  'vista.params-form.invalid.boolean': 'Ikke sand eller falsk; sendt som {{value}}',
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vista.params-form.invalid.document-type':
    'Ikke en dokumenttype i dette workspace; sendt alligevel',
  /** A whole number param (a slice bound) holds a fraction */
  'vista.params-form.invalid.integer': 'Ikke et helt tal, hvilket slices kræver',
  /** A list param's value is not a list; it is sent anyway */
  'vista.params-form.invalid.list': 'Ikke en liste; sendt som {{value}}',
  /** A number param's value is not a number; it is sent anyway */
  'vista.params-form.invalid.number': 'Ikke et tal; sendt som tekst',
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vista.params-form.invalid.option': 'Ikke en af de kendte værdier; sendt alligevel',
  /** A text param's value is not text; it is sent anyway */
  'vista.params-form.invalid.string': 'Ikke tekst; sendt som {{value}}',
  /** Accessible label of an item input of a list param in the params form */
  'vista.params-form.item-label': '${{name}}, element {{index}}',
  /** Placeholder of an item input of a list param in the params form */
  'vista.params-form.item-placeholder': 'Element',
  /** Under a params form field whose param has no value */
  'vista.params-form.missing': 'Ikke angivet: forespørgslen fejler, indtil den har en værdi',
  /** Shown in the params form when the workspace schema could not be read */
  'vista.params-form.no-schema':
    'Typer kommer udelukkende fra forespørgslen: workspace-skemaet kunne ikke læses.',
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vista.params-form.not-set': 'Ikke angivet',
  /** Button setting a date and time param to the current time */
  'vista.params-form.now': 'Nu',
  /** Button removing a param the query does not use from the params */
  'vista.params-form.remove': 'Fjern',
  /** Accessible label of the button removing an item from a list param */
  'vista.params-form.remove-item': 'Fjern element',
  /** Shown in the params form when the query does not parse */
  'vista.params-form.syntax-error':
    'Forespørgslen kan ikke fortolkes, så dens parametre vises uden typer.',
  /** Type hint of a params form field: any JSON value */
  'vista.params-form.type.any': 'enhver JSON-værdi',
  /** Type hint of a params form field: true or false */
  'vista.params-form.type.boolean': 'sand eller falsk',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vista.params-form.type.datetime': 'dato og klokkeslæt (ISO 8601)',
  /** Type hint of a params form field: a document ID */
  'vista.params-form.type.document-id': 'dokument-ID',
  /** Type hint of a params form field: one of the workspace's document types */
  'vista.params-form.type.document-type': 'dokumenttype',
  /** Type hint of a params form field: a whole number */
  'vista.params-form.type.integer': 'heltal',
  /** Type hint of a params form field: a list of values */
  'vista.params-form.type.list': 'liste, hver {{type}}',
  /** Type hint of a params form field: a number */
  'vista.params-form.type.number': 'tal',
  /** Type hint of a params form field: text */
  'vista.params-form.type.string': 'tekst',
  /** Heading of the params the query does not use, listed in the params form */
  'vista.params-form.unused': 'Ikke brugt af forespørgslen',
  /** Before the expressions that use a param, in the params form */
  'vista.params-form.used-in': 'Brugt i',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vista.params.fit-height': 'Tilpasset til indholdet, {{height}} pixels',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vista.params.resize':
    'Juster størrelse på params: træk eller brug piletasterne; dobbeltklik eller tryk Enter for at tilpasse til indholdet igen',
  /** Tab showing the params as a form inferred from the query */
  'vista.params.view.form': 'Formular',
  /** Tab showing the params as JSON */
  'vista.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vista.params.view.label': 'Rediger params som',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vista.paste.parsed': 'Forespørgsel indlæst fra indsat URL',
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vista.paste.unavailable-variant':
    'Den indsatte URL brugte varianten "{{variant}}"; vælg den i navigationslinjen for at køre forespørgslen med den.',
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vista.paste.unknown-dataset':
    'Datasættet "{{dataset}}" i den indsatte URL er ikke tilgængeligt her, det nuværende bibeholdes.',
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vista.paste.unsupported-perspective':
    'Perspektivet i den indsatte URL understøttes ikke her, det nuværende bibeholdes.',
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vista.paste.variants-disabled':
    'Den indsatte URL brugte varianten "{{variant}}"; dette workspace har varianter slået fra, så forespørgslen køres uden den.',
  /** Accessible label for the query actions menu */
  'vista.query.actions': 'Forespørgselshandlinger',
  /** Tooltip when automatic refetching is not available for the API version */
  'vista.query.auto-refetch.unsupported':
    'Automatisk genhentning kræver API-version v2021-03-25 eller nyere.',
  /** Toast shown after the query was copied */
  'vista.query.copied': 'Forespørgsel kopieret til udklipsholderen',
  /** Menu item copying the query text */
  'vista.query.copy': 'Kopiér forespørgsel',
  /** Menu item opening the export query dialog */
  'vista.query.export': 'Eksportér forespørgsel…',
  /** Menu item reformatting the query */
  'vista.query.prettify': 'Formatér forespørgsel pænt',
  /** Toast shown when the query could not be reformatted */
  'vista.query.prettify.failed': 'Kunne ikke formatere forespørgslen pænt',
  /** Menu item saving the query to the personal saved queries */
  'vista.query.save': 'Gem forespørgsel',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vista.query.stop': 'Stop',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vista.query.stop.description': 'Stop hentning',
  /** Explanation in the settings section about the redesigned experience */
  'vista.redesign.settings.description':
    'Du bruger det redesignede Vision-værktøj. Hvis du skifter tilbage, bevares dine faner og indstillinger i denne browser til næste gang, du prøver det.',
  /** Title of the settings section about the redesigned experience */
  'vista.redesign.settings.title': 'Redesignet Vision (beta)',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vista.redesign.switch-to-classic': 'Skift til klassisk Vision',
  /** Toast button that switches to the redesigned tool */
  'vista.redesign.toast.accept': 'Prøv det nu',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.description':
    'Forespørgselsfaner, live genhentning, svardetaljer og eksporter. Du kan skifte tilbage når som helst.',
  /** Toast button that hides the invitation */
  'vista.redesign.toast.dismiss': 'Ikke nu',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.title': 'Prøv det redesignede Vision',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vista.redesign.try': 'Prøv redesignet',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vista.redesign.try.description':
    'Skift til det redesignede Vision, i beta. Du kan skifte tilbage når som helst fra dets sidepanel.',
  /** Empty state of the response panel before anything was fetched */
  'vista.response.empty': 'Intet hentet endnu',
  /** Label for the payload size in the response tab */
  'vista.response.payload-size': 'Nyttelaststørrelse',
  /** Label for the sync tags in the response tab */
  'vista.response.sync-tags': 'Synkroniseringsmærker',
  /** Shown when the response carried no sync tags */
  'vista.response.sync-tags.none': 'Ingen synkroniseringsmærker i svaret',
  /** Accessible label for the result actions menu */
  'vista.result.actions': 'Resultatets handlinger',
  /** Toast shown after the result was copied */
  'vista.result.copied': 'Resultat kopieret til udklipsholder',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vista.result.copied-value': 'Kopierede {{path}}',
  /** Menu item and button copying the result as JSON */
  'vista.result.copy': 'Kopiér resultat',
  /** Button next to each property in the result tree, copying its value */
  'vista.result.copy-value': 'Kopiér værdi',
  /** Empty state of the result view */
  'vista.result.empty': 'Kør forespørgslen for at se resultatet her',
  /** Button exporting the result as CSV */
  'vista.result.export-csv': 'Eksportér CSV',
  /** Button exporting the result as JSON */
  'vista.result.export-json': 'Eksportér JSON',
  /** Menu item opening the TypeScript export dialog */
  'vista.result.export-typescript': 'Eksportér TypeScript…',
  /** Menu item opening the Zod export dialog */
  'vista.result.export-zod': 'Eksportér Zod…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vista.result.graph.collapse': 'Skjul indhold',
  /** Button fitting the whole graph in view */
  'vista.result.graph.fit': 'Tilpas til visning',
  /** Accessible label of the graph, saying how to move around in it */
  'vista.result.graph.label':
    'Resultatgraf: træk for at flytte, rul for at zoome; når fokuseret, flytter piletasterne, + og - zoomer, 0 tilpasser',
  /** Ends the note on a graph that leaves part of this result out */
  'vista.result.graph.left-out-hint': 'Træ- og JSON-visningerne viser det hele.',
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vista.result.graph.node-limit': 'Kun de første {{nodes}} objekter og arrays er tegnet.',
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vista.result.graph.partial': 'Kun de første {{rows}} elementer er angivet for {{nodes}}.',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vista.result.graph.partial.node': '{{name}} ({{entries}} elementer)',
  /** Title of the graph node of the result itself */
  'vista.result.graph.root': 'resultat',
  /** Button zooming into the graph */
  'vista.result.graph.zoom-in': 'Zoom ind',
  /** Button zooming out of the graph */
  'vista.result.graph.zoom-out': 'Zoom ud',
  /** Tab showing the result as a graph of its objects and arrays */
  'vista.result.view.graph': 'Graf',
  /** Tab showing the result as indented JSON text, to select and copy from */
  'vista.result.view.json': 'JSON',
  /** Accessible label of the tabs that switch how the result shows */
  'vista.result.view.label': 'Resultatvisning',
  /** Tab showing the result as a tree to browse */
  'vista.result.view.tree': 'Træ',
  /** Empty state of the saved queries panel */
  'vista.saved.empty':
    'Ingen gemte forespørgsler endnu. Gem den aktuelle forespørgsel med +-knappen.',
  /** Empty state of a query list when the search matches nothing */
  'vista.saved.empty-search': 'Ingen forespørgsler matcher din søgning',
  /** Menu item loading a saved query into the active tab */
  'vista.saved.load-in-current-tab': 'Indlæs i nuværende fane',
  /** Menu item opening a saved query in a new tab */
  'vista.saved.open-in-new-tab': 'Åbn i ny fane',
  /** Menu item renaming a saved query */
  'vista.saved.rename': 'Omdøb',
  /** Accessible label for the button saving the current query */
  'vista.saved.save-current': 'Gem nuværende forespørgsel',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vista.saved.unavailable-variant':
    'Denne gemte forespørgsel brugte varianten "{{variant}}"; vælg den i navigationslinjen for at køre forespørgslen med den.',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vista.saved.unknown-dataset':
    'Datasættet "{{dataset}}" for denne gemte forespørgsel er ikke tilgængeligt her, så det nuværende beholdes.',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vista.saved.variants-disabled':
    'Denne gemte forespørgsel brugte varianten "{{variant}}"; dette workspace har varianter slået fra, så forespørgslen køres uden den.',
  /** Button in the settings dialog that clears the stored state */
  'vista.settings.clear-storage': 'Ryd lagring',
  /** Confirmation button for clearing the storage */
  'vista.settings.clear-storage.confirm': 'Ja, ryd lager',
  /** Explanation of what clearing the storage does */
  'vista.settings.clear-storage.description':
    'Sletter dine personlige gemte forespørgsler og funktionsbiblioteket, nulstiller de åbne faner og disse standardindstillinger i denne browser, og vender tilbage til det klassiske Vision-værktøj. Delte forespørgsler bevares.',
  /** Toast shown when the saved queries could not be cleared */
  'vista.settings.clear-storage.error': 'Kunne ikke rydde de gemte forespørgsler',
  /** Toast shown after the storage was cleared */
  'vista.settings.clear-storage.success': 'Lager ryddet',
  /** Explanation at the top of the settings dialog */
  'vista.settings.description':
    'Standardindstillinger for nye faner. Åbne faner beholder deres egne indstillinger.',
  /** Explains the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.description':
    'Én feltsti pr. linje. En sti matcher på ethvert niveau i et resultat, så _rev skjuler revisionen for alle dokumenter i det. Hver diff kan stadig vise dem.',
  /** Button restoring the default fields left out of History diffs */
  'vista.settings.history-diff.reset': 'Nulstil til standardindstillinger',
  /** Label of the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.title': 'Felter skjult fra History-diffs',
  /** Title of the settings dialog */
  'vista.settings.title': 'Indstillinger',
  /** Empty state of the shared queries panel */
  'vista.shared.empty':
    'Ingen delte forespørgsler endnu. Del en gemt forespørgsel for at gøre den tilgængelig for alle, der bruger dette datasæt.',
  /** Shortcut description: close dialogs and menus */
  'vista.shortcuts.close': 'Luk dialogbokse og menuer',
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vista.shortcuts.complete': 'Fuldfør et funktionsnavn',
  /** Shortcut description: copy the query */
  'vista.shortcuts.copy-query': 'Kopiér forespørgslen',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vista.shortcuts.extract-function': 'Udtræk projektionen ved markøren til en funktion',
  /** Shortcut description: run the query */
  'vista.shortcuts.fetch': 'Hent forespørgslen',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vista.shortcuts.next-finding': 'Spring til næste lint-fund',
  /** Shortcut description: reformat the query */
  'vista.shortcuts.prettify': 'Formatér forespørgslen pænt',
  /** Title of the keyboard shortcuts dialog */
  'vista.shortcuts.title': 'Tastaturgenveje',
  /** Sidebar toggle: show icons only */
  'vista.sidebar.collapse': 'Sammenfold sidepanel',
  /** Sidebar toggle: show labels next to the icons */
  'vista.sidebar.expand': 'Udvid sidepanel',
  /** Accessible label for the sidebar navigation */
  'vista.sidebar.label': 'Vista-sidepanel',
  /** Sidebar item and drawer title for personal saved queries */
  'vista.sidebar.saved-queries': 'Gemte forespørgsler',
  /** Sidebar item opening the settings dialog */
  'vista.sidebar.settings': 'Indstillinger',
  /** Sidebar item and drawer title for shared queries */
  'vista.sidebar.shared-queries': 'Delte forespørgsler',
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vista.sidebar.shortcuts': 'Tastaturgenveje',
  /** Empty state of the content source map panel */
  'vista.source-map.empty':
    'Intet content source map i svaret. Slå "Inkludér content source map" til under Indstillinger, og hent igen.',
  /** Accessible label of the divider between the result and the response details panel */
  'vista.split.bottom-panel':
    'Juster størrelsen på panelet med svardetaljer: træk eller brug piletasterne; Home og End går til grænserne, Enter nulstiller',
  /** Accessible label of the divider between the request and response panes */
  'vista.split.request-response':
    'Juster størrelsen på ruderne for forespørgsel og svar: træk eller brug piletasterne; Home og End går til grænserne, Enter nulstiller',
  /** Accessible label for the button closing a query tab */
  'vista.tabs.close-tab': 'Luk fane',
  /** Accessible label for the list of query tabs */
  'vista.tabs.label': 'Forespørgselsfaner',
  /** Accessible label for the button opening a new query tab */
  'vista.tabs.new-tab': 'Ny fane',
  /** Placeholder of the input renaming a tab */
  'vista.tabs.title-placeholder': 'Fanetitel',
  /** Title of a tab whose query is still empty */
  'vista.tabs.untitled': 'Unavngiven forespørgsel',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vista.webmcp.check-query': 'Tjek en GROQ-forespørgsel i Vision',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vista.webmcp.describe-schema': 'Beskriv skemaet i Vision',
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vista.webmcp.explain-query': 'Forklar en GROQ-forespørgsel i Vision',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vista.webmcp.get-state': 'Læs den åbne Vision-fane',
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vista.webmcp.open-query': 'Åbn en GROQ-forespørgsel i Vision',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vista.webmcp.preview-mutations': 'Forhåndsvis mutationer i Vision',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vista.webmcp.run-query': 'Kør en GROQ-forespørgsel i Vision',
})
