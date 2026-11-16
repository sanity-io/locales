import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Kopier til utklippstavle',
  /** Label for deleting a query */
  'action.delete': 'Slett',
  /** Label for editing a query's title */
  'action.edit-title': 'Rediger tittel',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Stopp',
  /** Label for setting up a listener */
  'action.listen-execute': 'Lytt',
  /** Label for query loading table */
  'action.load-queries': 'Last spørringer',
  /** Label for loading a query */
  'action.load-query': 'Last spørring',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Avbryt',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Utfør',
  /** Label for saving a query */
  'action.save-personal-copy': 'Lagre personlig kopi',
  /** Label for saving a personal query */
  'action.save-personal-query': 'Lagre som personlig',
  /** Label for saving a query */
  'action.save-query': 'Lagre spørring',
  /** Label for saving a shared query */
  'action.save-shared-query': 'Lagre som delt',
  /** Label for unsharing a query */
  'action.unshare': 'Avslutt deling',
  /** Label for updating a query */
  'action.update': 'Oppdater',

  /** Label for actions user can take */
  'label.actions': 'Handlinger',
  /** Label for all saved queries */
  'label.all': 'Alle',
  /** Label for saved queries that have been edited */
  'label.edited': 'Redigert',
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Nyhet',
  /** Label for query type "personal" */
  'label.personal': 'Personlig',
  /** Label for savedAt date */
  'label.saved-at': 'Lagret',
  /** Saved queries */
  'label.saved-queries': 'Lagrede spørringer',
  /** Search queries */
  'label.search-queries': 'Søk i spørringer',
  /** Share query */
  'label.share': 'Del',
  /** Label for query type "shared" */
  'label.shared': 'Delt',
  /** Label for saved query type "team" */
  'label.team': 'Team',
  /** Label for untitled query fallback */
  'label.untitled-query': 'Uten tittel',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'Parametere er ikke gyldig JSON',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Parametere',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Kolonne',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Linje',
  /** Extra explanation when a 400 is returned for a release perspective on an old API version */
  'query.error.unsupported-release-perspective':
    'Denne API-versjonen støtter ikke komplekse perspektiver. Bruk {{apiVersion}} eller nyere.',
  /** Extra explanation when a 400 is returned for a variant on an incompatible API version */
  'query.error.unsupported-variant':
    'Denne API-versjonen støtter ikke innholdsvarianter. Bruk den eksperimentelle API-versjonen ({{apiVersion}}).',
  /** Label for "Query" editor/input */
  'query.label': 'Spørring',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'URL',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'Ende-til-ende',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'Utførelsestid',
  /** Label for "Result" explorer/view */
  'result.label': 'Resultat',
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable': 'Resultatet kan ikke kodes som CSV',
  /** Label for "Save result as" result action */
  'result.save-result-as-format': 'Lagre resultat som <SaveResultButtons/>',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': '-',

  /** Query already saved error label */
  'save-query.already-saved': 'Spørringen er allerede lagret',
  /** Save error label */
  'save-query.error': 'Feil ved lagring av spørring',
  /** Save personal copy success label */
  'save-query.personal-copy-success': 'Personlig kopi lagret',
  /** Warning displayed before sharing a query */
  'save-query.share-warning':
    'Delte spørringer lagres som dokumenter i dataset og teller mot dokumentkvoten din.',
  /** Save shared query success label */
  'save-query.shared-success': 'Delt spørring lagret',
  /** Save success label */
  'save-query.success': 'Spørringen er lagret',
  /** Save unshared query success label */
  'save-query.unshared-success': 'Spørring flyttet til personlig',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'API-versjon',
  /** Tooltip shown when the API version selector is locked because a variant is selected */
  'settings.api-version-locked-for-variant': 'Når en variant er valgt, må API-versjonen være vX.',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'Egendefinert API-versjon',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Datasett',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'Ugyldig API-versjon',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'Annen',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspektiv',
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    'Perspektivet "<code>previewDrafts</code>" har blitt omdøpt til "<code>drafts</code>" og er nå foreldet. Denne endringen er effektiv for alle versjoner med støtte for perspektiv (>= v2021-03-25).',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Les dokumentasjon',
  /** Option for selecting default perspective */
  'settings.perspectives.default': 'Ingen perspektiv (API-standard)',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Perspektiver lar deg kjøre spørringen din mot forskjellige "visninger" av innholdet i datasettet ditt',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    'Standardperspektivet vil endre seg fra "<code>raw</code>" til "<code>published</code>" i en kommende API-versjon. Vennligst se dokumentasjonen for flere detaljer.',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': 'Festet utgivelse',
  /** Label for the scheduled drafts perspective */
  'settings.perspectives.scheduled-drafts': 'Planlagte utkast',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspektiver',

  /** Tooltip line of every control that calls Sanity Agent Actions, which bills AI credits */
  'vision.agent-actions.credits': 'Bruker én AI-kreditt per forespørsel',
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vision.ai-credits.balance': '{{balance}} av {{quota}} AI-kreditter igjen denne måneden.',
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vision.ai-credits.deficit':
    '{{used}} AI-kreditter brukt denne måneden, {{deficit}} mer enn de {{quota}} som er inkludert.',
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vision.ai-credits.limit.description':
    'Organisasjonen din har brukt {{used}} av sine {{quota}} AI-kreditter denne måneden, så Sanity Agent Actions er satt på pause til neste måned eller til utgiftsgrensen heves.',
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vision.ai-credits.limit.description-unknown':
    'Organisasjonen din har nådd sin utgiftsgrense for AI-kreditter, så Sanity Agent Actions er satt på pause til neste måned eller til grensen heves.',
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vision.ai-credits.limit.learn-more': 'Hvordan AI-kreditter fungerer',
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vision.ai-credits.limit.manage': 'Administrer AI-kreditter',
  /** Title of the card shown where the organization is out of AI credits */
  'vision.ai-credits.limit.title': 'Tom for AI-kreditter',
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vision.ai-credits.usage': 'AI-bruk',
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vision.ai-credits.used': '{{used}} AI-kreditter brukt denne måneden.',
  /** Button in the request column's action bar naming the API version requests go out with */
  'vision.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vision.api-version.button-cdn': 'API CDN {{version}}',
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vision.api-version.button-invalid': 'Uferdig API-versjon',
  /** Tooltip of the API version button */
  'vision.api-version.tooltip':
    'Spørringer kjøres mot API-versjon {{version}}. Velg for å endre den i Alternativer.',
  /** Tooltip of the API version button while queries go through the API CDN */
  'vision.api-version.tooltip-cdn':
    'Spørringer kjøres mot API CDN med API-versjon {{version}}. Velg for å endre den i Alternativer.',
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vision.api-version.tooltip-cdn-blocked':
    'Spørringer kjøres mot API-et med API-versjon {{version}}, ikke API CDN: det betjener ikke {{perspective}}-perspektivet. Velg for å endre den i Alternativer.',
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vision.api-version.tooltip-invalid':
    'API-versjonen i Alternativer er ufullstendig, så ingenting kan hentes før den er fullført.',
  /** Tooltip of the API version button while a selected variant forces the variants API version */
  'vision.api-version.tooltip-locked':
    'Spørringer kjøres mot API-versjon {{version}}, som den valgte varianten krever.',
  /** Label of the document after the change in the Delta panel */
  'vision.delta.after': 'Etter',
  /** Label of the document before the change in the Delta panel */
  'vision.delta.before': 'Før',
  /** What the Delta panel does */
  'vision.delta.description':
    'Kjører spørringen i deltamodus, slik GROQ-drevne webhooks, lyttere og Sanity Functions gjør: before() og after() er et dokument før og etter en endring, @ er dokumentet etter den, og delta::changedAny() sammenligner dem. Den kjører i nettleseren med groq-js. En tom side betyr at det ikke finnes noe dokument: endringen oppretter eller sletter det.',
  /** Label of the document ID field in the Delta panel */
  'vision.delta.document-id': 'Dokument-ID',
  /** Shown when there is a query but no documents to compare */
  'vision.delta.empty':
    'Last inn et dokuments historikk, eller skriv dokumentene inn i Før og Etter.',
  /** Shown when the query fails in delta mode */
  'vision.delta.failed': 'Spørringen kunne ikke kjøres i deltamodus: {{message}}',
  /** Shown when the After document is not valid JSON */
  'vision.delta.invalid-after': 'Etter er ikke gyldig JSON: {{message}}',
  /** Shown when the Before document is not valid JSON */
  'vision.delta.invalid-before': 'Before er ikke gyldig JSON: {{message}}',
  /** Button loading the document's revisions from the History API */
  'vision.delta.load': 'Last historikk',
  /** Shown when the history could not be loaded */
  'vision.delta.load-failed': 'Historikken kunne ikke lastes: {{message}}',
  /** A delta filter that is true for the change */
  'vision.delta.matches':
    'Samsvarer: en webhook eller funksjon med dette filteret kjører for denne endringen.',
  /** A delta filter that is false for the change */
  'vision.delta.no-match':
    'Samsvarer ikke: en webhook eller funksjon med dette filteret kjører ikke for denne endringen.',
  /** Shown while the query or its params cannot be sent */
  'vision.delta.no-request':
    'Rett opp spørringen og dens parametere for å kjøre den i delta-modus.',
  /** Heading of the delta result */
  'vision.delta.result': 'Resultat',
  /** The After choice for a change that deletes the document */
  'vision.delta.revision.none-after': 'Ingenting: endringen sletter dokumentet',
  /** The Before choice for a change that creates the document */
  'vision.delta.revision.none-before': 'Ingenting: endringen oppretter dokumentet',
  /** A revision in the Before and After lists */
  'vision.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vision.drawer.close': 'Lukk panel',
  /** Explanation at the top of the Explain panel */
  'vision.explain.description':
    'Spørringsplanen er hvordan Content Lake kjører spørringen: hva den leser, filtrerer og sorterer mens den leser, og hva som er igjen til senere trinn. «Forklar dette for meg» lar Sanity Agent Actions beskrive spørringen og dens plan med vanlige ord, noe som bruker én AI-kreditt.',
  /** Shown in the Explain panel while there is no valid query to explain */
  'vision.explain.empty': 'Skriv en spørring for å forklare den.',
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vision.explain.explain': 'Forklar dette for meg',
  /** Shown when the explanation could not be written */
  'vision.explain.failed': 'Spørringen kunne ikke forklares: {{message}}',
  /** A count the index computes without reading the documents */
  'vision.explain.insight.aggregate': 'Telt i indeksen, uten å lese dokumentene.',
  /** A subquery the plan runs once for all documents */
  'vision.explain.insight.batched-subquery':
    'Underspørringen kjører én gang for alle dokumentene, i en enkelt gruppert henting, ikke én gang per dokument.',
  /** Part of the filter runs in memory; the expression follows */
  'vision.explain.insight.filter-in-memory':
    'Deler av filteret kjører i minnet, etter lesing: hvert dokument som slipper gjennom indeksen leses først, noe som blir tregt på store datasett. Koblinger (->) og funksjoner i et filter kan ikke bruke indeksen.',
  /** The index sorts and limits while reading */
  'vision.explain.insight.index-sort-limit':
    'Indeksen sorterer og begrenser dokumentene mens de leses.',
  /** The plan slices in memory */
  'vision.explain.insight.slice-in-memory':
    'Utsnittet tas i minnet etter lesing, ikke som en begrensning mens man leser.',
  /** The plan sorts in memory */
  'vision.explain.insight.sort-in-memory':
    'Sortering skjer i minnet, etter at hvert treff er lest. Sorter etter attributter indeksen kan sortere på.',
  /** Link under the plan insights to the guide on fast queries */
  'vision.explain.insights.guide': 'Høy ytelse med GROQ',
  /** Heading of the plan insights in the Explain panel */
  'vision.explain.insights.title': 'Hva som utmerker seg',
  /** Button in the Explain panel fetching the query plan */
  'vision.explain.plan': 'Vis spørringsplanen',
  /** Shown when the query plan could not be fetched */
  'vision.explain.plan-failed': 'Spørringsplanen kunne ikke hentes: {{message}}',
  /** Heading of the query plan in the Explain panel */
  'vision.explain.plan-title': 'Spørringsplan',
  /** Toast shown after a code snippet was copied */
  'vision.export-query.copied': 'Kodebit kopiert til utklippstavlen',
  /** Label for the button that copies a code snippet */
  'vision.export-query.copy': 'Kopier kodebit',
  /** Explanation at the top of the export query dialog */
  'vision.export-query.description':
    'Kjør denne spørringen utenfor studioet med en av disse kodebitene.',
  /** Note under the curl snippet when the query is sent as a request body rather than in the URL */
  'vision.export-query.post-body-note':
    'Spørringen og parameterne utgjør {{size}} tegn som søkeparametere; fra {{limit}} av sender @sanity/client dem som en JSON-body i stedet for i URL-en, så kodebiten gjør det samme.',
  /** Title of the dialog that exports the query as code snippets */
  'vision.export-query.title': 'Eksporter spørring',
  /** Note about authentication in the export query dialog */
  'vision.export-query.token-note':
    'Private datasett trenger et API-token. Offentlige datasett kan utelate Authorization-headeren.',
  /** Toast shown after the generated code was copied */
  'vision.export-types.copied': 'Kode kopiert til utklippstavlen',
  /** Label for the button that copies the generated code */
  'vision.export-types.copy': 'Kopier kode',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vision.export-types.empty':
    'Hent spørringen først, slik at det finnes et resultat å utlede typer fra.',
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vision.export-types.schema-error': 'Skjemaevaluering mislyktes: {{message}}',
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vision.export-types.source.result':
    'Utledet fra det hentede resultatet, siden spørringen ikke kunne evalueres mot arbeidsområdets skjema.',
  /** Note shown when the types were derived from the workspace schema */
  'vision.export-types.source.schema':
    'Utledet fra arbeidsområdets skjema, på samme måte som sanity typegen gjør det.',
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vision.export-types.stale-result':
    'Resultatet som vises ble hentet for en annen spørring eller andre parametere. Hent gjeldende spørring først, slik at det finnes et resultat å utlede typer fra.',
  /** Title of the dialog exporting TypeScript types for the result */
  'vision.export-types.title-typescript': 'Eksporter TypeScript',
  /** Title of the dialog exporting a Zod schema for the result */
  'vision.export-types.title-zod': 'Eksporter Zod',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vision.functions.add': 'Legg til i spørring',
  /** Shown on a library function the query declares the same way */
  'vision.functions.declared': 'I denne spørringen',
  /** Lint action on a call of a library function the query does not declare */
  'vision.functions.editor.add-from-library': 'Deklarer den',
  /** Note in a function's hover documentation: the API version it needs */
  'vision.functions.editor.api-version': 'Krever API-versjon {{version}} eller nyere',
  /** Detail of a completion for a custom function the query declares */
  'vision.functions.editor.completion-declared': 'i denne spørringen',
  /** Detail of a completion for a library function, which declares it too */
  'vision.functions.editor.completion-library': 'fra biblioteket ditt',
  /** Note in the hover documentation of a custom function the query declares */
  'vision.functions.editor.declared-on': 'Egendefinert funksjon, deklarert på linje {{line}}',
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vision.functions.editor.delta-only':
    'Fungerer bare i delta-modus, der webhooks og Sanity Functions kjører filtrene sine',
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vision.functions.editor.extract': 'Trekk ut til funksjon',
  /** Note in the hover documentation of a library function the query does not declare */
  'vision.functions.editor.in-library':
    'I funksjonsbiblioteket ditt, ikke deklarert i denne spørringen',
  /** Link at the end of a built-in function's hover documentation */
  'vision.functions.editor.reference': 'GROQ-funksjonsreferanse',
  /** Explanation under the library heading in the Functions panel */
  'vision.functions.library.description':
    'Lagres i denne nettleseren for hvert datasett i prosjektet. Autofullføring tilbyr disse funksjonene, og lint foreslår å deklarere en spørringen kaller på.',
  /** Shown in the Functions panel while the library is empty */
  'vision.functions.library.empty':
    'Lagre en funksjon spørringen deklarerer for å bruke den i andre spørringer.',
  /** Heading of the functions library in the Functions panel */
  'vision.functions.library.title': 'Bibliotek',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vision.functions.query.empty':
    'Deklarer egendefinerte funksjoner øverst i spørringen, eller plasser markøren i en projeksjon, som author->{name}, og trykk på uttrekk-knappen over redigeringsverktøyet ({{shortcut}}).',
  /** Heading of the functions the query declares in the Functions panel */
  'vision.functions.query.title': 'I denne spørringen',
  /** Removes a function from the library */
  'vision.functions.remove': 'Fjern fra biblioteket',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vision.functions.replace': 'Erstatt i spørring',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vision.functions.reveal': 'Vis {{name}} i redigeringsverktøyet',
  /** Button of a function the query declares that is not in the library yet */
  'vision.functions.save': 'Lagre til biblioteket',
  /** Shown on a function the query declares the way the library has it */
  'vision.functions.saved': 'Lagret',
  /** Button of a function the query declares differently from the library's version */
  'vision.functions.update': 'Oppdater bibliotek',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vision.generate.button': 'Generer spørring',
  /** Closes the generate query bar */
  'vision.generate.close': 'Lukk',
  /** Explanation under the generate query field */
  'vision.generate.description':
    'Sanity Agent Actions skriver GROQ ut fra beskrivelsen din og dokumenttypene, og Content Lake kontrollerer hvert forsøk; hvert forsøk bruker én AI-kreditt. Dette erstatter spørringen i denne fanen og kjører den; angre i redigeringsverktøyet gjenoppretter den forrige spørringen.',
  /** Shown when no query could be generated, above the reason */
  'vision.generate.failed': 'Spørringen kunne ikke genereres',
  /** Accessible label of the description field in the generate query bar */
  'vision.generate.label': 'Hva skal spørringen hente?',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vision.generate.open-anyway': 'Åpne det siste forsøket',
  /** Placeholder of the description field in the generate query bar */
  'vision.generate.placeholder':
    'De 10 nyeste forfatterne, sortert etter etternavn og deretter fornavn',
  /** Shown while the first attempt at a query is written */
  'vision.generate.progress': 'Skriver spørringen…',
  /** Shown while a rejected attempt is retried */
  'vision.generate.progress-retry': 'Retter spørringen (forsøk {{attempt}} av {{max}})…',
  /** Button generating the query */
  'vision.generate.submit': 'Generer',
  /** Badge on a history entry the API CDN answered */
  'vision.history.cdn': 'API CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vision.history.cdn-cache-hit': 'CDN-cache-treff',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vision.history.changed': 'Endret',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vision.history.changes': 'Endringer',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vision.history.changes-failed': 'Endringene kunne ikke vises.',
  /** Button retrying to show the changes of a history entry */
  'vision.history.changes-retry': 'Prøv igjen',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vision.history.compared-with': 'Sammenlignet med henting kl. {{time}}',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vision.history.diff.params': 'Parametere',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vision.history.diff.query': 'Spørring',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vision.history.diff.query-formatting-only': 'Bare formateringen er endret',
  /** Label of the diff of the query result in a history entry's changes */
  'vision.history.diff.result': 'Resultat',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vision.history.diff.url': 'Forespørsels-URL',
  /** Empty state of the history panel */
  'vision.history.empty': 'Ingenting hentet ennå',
  /** Status label for a failed fetch in the history */
  'vision.history.failed': 'Mislyktes',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vision.history.hide-hidden': 'Skjul dem',
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vision.history.hiding': 'Skjuler {{fields}}',
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vision.history.only-hidden-changed': 'Bare skjulte felter er endret',
  /** History reason: a tab opened with a generated query fetched it */
  'vision.history.reason.generated': 'Generert spørring',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vision.history.reason.link': 'Åpnet lenke',
  /** History reason: a live event matched the query's sync tags */
  'vision.history.reason.live': 'Sanntidsoppdatering',
  /** History reason: the live connection asked every client to refetch */
  'vision.history.reason.live-restart': 'Sanntidstilkobling startet på nytt',
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vision.history.reason.live-start': 'Sanntidshenting startet',
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vision.history.reason.load': 'Spørring lastet inn',
  /** History reason: the fetch button was pressed */
  'vision.history.reason.manual': 'Hent-knapp',
  /** History reason: mutations were applied from the Mutate panel */
  'vision.history.reason.mutation': 'Mutasjoner anvendt',
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vision.history.reason.options': 'Alternativer endret',
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vision.history.reason.paste': 'Limt inn URL',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vision.history.reason.resume': 'Automatisk ny henting gjenopptatt',
  /** History reason: the keyboard shortcut was used */
  'vision.history.reason.shortcut': 'Hurtigtast',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vision.history.same-result': 'Samme resultat',
  /** Button showing the hidden fields in a history entry's changes */
  'vision.history.show-hidden': 'Vis dem',
  /** Next to a history entry's changes while the hidden fields are shown */
  'vision.history.showing-hidden': 'Viser {{fields}}, skjult som standard',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vision.history.too-large': 'For stor til å sammenligne',
  /** A history entry whose result is the same as the previous result */
  'vision.history.unchanged': 'Ingen endringer',
  /** Shown in the Lint panel while the query has no lint findings */
  'vision.lint.empty':
    'Ingen lint-funn. Problemer GROQ-linteren oppdager i spørringen vises her mens du skriver; velg ett for å markere det i redigeringsverktøyet.',
  /** Where a lint finding sits in the query, shown under its message */
  'vision.lint.position': 'Linje {{line}}, kolonne {{column}}',
  /** Severity badge of a lint finding */
  'vision.lint.severity.error': 'Feil',
  /** Severity badge of a lint finding */
  'vision.lint.severity.hint': 'Hint',
  /** Severity badge of a lint finding */
  'vision.lint.severity.info': 'Info',
  /** Severity badge of a lint finding */
  'vision.lint.severity.warning': 'Advarsel',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vision.lint.use-suggestion': 'Bruk {{suggestion}}',
  /** Badge shown while a tab refetches automatically */
  'vision.live.active': 'Direkte',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vision.live.button': 'Direktehenting',
  /** Tooltip of the Live button while automatic refetching is off */
  'vision.live.button.start': 'Hent, og hent på nytt hver gang dokumentene i resultatet endres',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vision.live.button.stop':
    'Stopp henting når dokumentene i resultatet endres. Hent henter fortsatt på forespørsel, for resultater ingen dokumentendring påvirker, som now()',
  /** Error shown when the live connection breaks */
  'vision.live.error': 'Direkteoppdateringer koblet fra: {{message}}',
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vision.live.stop': 'Stopp direkte',
  /** Button in the Mutate panel adding a mutation to the list */
  'vision.mutate.add': 'Legg til endring',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vision.mutate.add.create': 'Opprett et dokument',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vision.mutate.add.delete': 'Slett et dokument',
  /** Adds a mutation deleting the documents of the shown result */
  'vision.mutate.add.delete-result': 'Slett dokumentene i resultatet',
  /** Adds a mutation patching a document, its ID to fill in */
  'vision.mutate.add.patch': 'Oppdater et dokument',
  /** Adds a mutation patching the documents of the shown result */
  'vision.mutate.add.patch-result': 'Patch dokumentene i resultatet',
  /** Button applying the mutations a dry run showed */
  'vision.mutate.apply': 'Bruk på {{dataset}}',
  /** Heading of the error shown when applying the mutations failed */
  'vision.mutate.apply-failed': 'Mutasjonene ble ikke brukt',
  /** Next to Apply while the mutations as they are have had no dry run */
  'vision.mutate.apply-needs-preview': 'Bruk sender det en testkjøring viste: kjør én først.',
  /** Option giving array items without a _key one */
  'vision.mutate.auto-keys': 'Legg til en _key på array-elementer som mangler en',
  /** Under the option giving array items a _key */
  'vision.mutate.auto-keys.description':
    'Studioet trenger én på hvert array-element for å redigere det.',
  /** Button showing a document's changes in the dry run */
  'vision.mutate.changes': 'Endringer',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vision.mutate.changes-failed': 'Endringene kunne ikke vises.',
  /** Button retrying to show a document's changes */
  'vision.mutate.changes-retry': 'Prøv igjen',
  /** What the Mutate panel does */
  'vision.mutate.description':
    'Skriv mutasjoner slik Mutations API tar imot dem, i en liste: create, createOrReplace, createIfNotExists, delete og patch, etter ID eller etter en GROQ-spørring. En testkjøring viser hva de ville gjort med hvert dokument uten å endre noe; Bruk skriver dem deretter til datasettet i én transaksjon, med din konto.',
  /** What the API says went wrong with one of the mutations */
  'vision.mutate.failure-item': 'Mutasjon {{index}}: {{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vision.mutate.generate.button': 'Generer mutasjoner',
  /** Explanation under the generate mutations field */
  'vision.mutate.generate.description':
    'Sanity Agent Actions skriver mutasjonene ut fra beskrivelsen din, dokumentene i resultatet og deres typer, og en testkjøring sjekker hvert forsøk; hvert forsøk bruker én AI-kreditt. De erstatter mutasjonene her, der angre bringer disse tilbake; ingenting skrives før du bruker dem.',
  /** Shown when no mutations could be generated, above the reason */
  'vision.mutate.generate.failed': 'Mutasjonene kunne ikke genereres',
  /** Accessible label of the description field in the generate mutations bar */
  'vision.mutate.generate.label': 'Hva skal mutasjonene gjøre?',
  /** Placeholder of the description field in the generate mutations bar */
  'vision.mutate.generate.placeholder': 'Endre tittelen på dokumentene i resultatet til foobar',
  /** Shown while the first attempt at the mutations is written */
  'vision.mutate.generate.progress': 'Skriver mutasjonene…',
  /** Shown while an attempt the dry run turned down is retried */
  'vision.mutate.generate.progress-retry': 'Retter mutasjonene (forsøk {{attempt}} av {{max}})…',
  /** Under the dry run: the fields the diffs leave out */
  'vision.mutate.hiding': 'Endringene utelater {{fields}}, slik Historikk gjør.',
  /** Shown when the mutations are not valid JSON */
  'vision.mutate.invalid-json': 'Mutasjonene er ikke gyldig JSON: {{message}}',
  /** Shown when a mutation does not name exactly one thing to do */
  'vision.mutate.invalid-mutation':
    'Mutasjon {{index}} trenger nøyaktig én av create, createOrReplace, createIfNotExists, delete eller patch.',
  /** Label of the mutations editor */
  'vision.mutate.mutations': 'Mutasjoner',
  /** The dry run touched no documents */
  'vision.mutate.no-documents': 'Mutasjonene berører ingen dokumenter.',
  /** Shown when the JSON is not a list of mutations */
  'vision.mutate.not-a-list':
    'Skriv en liste med mutasjoner, en enkelt mutasjon, eller en forespørselskropp med en liste med mutasjoner.',
  /** A document the mutations create */
  'vision.mutate.operation.create': 'Opprett',
  /** A document the mutations delete */
  'vision.mutate.operation.delete': 'Slett',
  /** A document the mutations touch without changing its content */
  'vision.mutate.operation.none': 'Ingen endring',
  /** A document the mutations change */
  'vision.mutate.operation.update': 'Oppdater',
  /** Button running the mutations as a dry run */
  'vision.mutate.preview': 'Tørrkjøring',
  /** Heading of the error shown when the dry run failed */
  'vision.mutate.preview-failed': 'Tørrkjøringen feilet',
  /** Heading of the dry run's outcome */
  'vision.mutate.preview-heading': 'Tørrkjøring',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vision.mutate.stale':
    'Mutasjonene, datasettet eller alternativene har endret seg etter denne tørrkjøringen. Kjør den på nytt for å bruke dem.',
  /** How many documents the dry run changes and leaves as they are */
  'vision.mutate.summary': 'Endret: {{changed}} · Uendret: {{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vision.network.cache': 'Hurtigbuffer',
  /** The API CDN answered from its cache */
  'vision.network.cache.hit': 'Treff',
  /** Under the details of a CDN cache hit */
  'vision.network.cache.hit-explained':
    'CDN-en svarte med et respons den hadde hurtigbufret, fra en lokasjon nær deg; spørringen nådde ikke API-et.',
  /** The API CDN answered with a response this session had not seen */
  'vision.network.cache.miss': 'Ikke treff, så vidt denne økten kan fortelle',
  /** The API answered, which caches nothing */
  'vision.network.cache.none': 'Ingen, API-et svarer på hver forespørsel med ferskt innhold',
  /** Shown in the Network panel while there is no response */
  'vision.network.empty':
    'Hent spørringen for å se hvilket endepunkt som svarte på den, om det var fra en hurtigbuffer, og hvor den kjørte.',
  /** In the Network panel: the endpoint that answered */
  'vision.network.endpoint': 'Besvart av',
  /** The live API answered */
  'vision.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vision.network.endpoint.cdn': 'API CDN',
  /** In the Network panel: the HTTP method the query was sent with */
  'vision.network.method': 'Metode',
  /** The query and its params went in the URL */
  'vision.network.method.get': 'GET, med spørringen og parametrene i URL-en',
  /** The query and its params went in the request body */
  'vision.network.method.post': 'POST, med spørringen og parametrene som en JSON-body',
  /** Under the method of a POST request: why the query was not sent in the URL */
  'vision.network.method.post-explained':
    'Spørringen og parametrene utgjør {{size}} tegn som søkeparametre; fra {{limit}} av sender @sanity/client dem som en JSON-body, siden API-et begrenser lengden på en URL. Alternativene blir værende i URL-en.',
  /** In the Network panel: the region the query ran in */
  'vision.network.region': 'Spørringen kjørte i',
  /** The response did not say where the query ran */
  'vision.network.region.unknown': 'Ikke rapportert',
  /** In the Network panel: the round trip and the time on the server */
  'vision.network.timing': 'Tid',
  /** The round trip and the server's time for the query, in milliseconds */
  'vision.network.timing.value': '{{e2e}}ms tur-retur, {{server}}ms på serveren',
  /** In the Network panel: the trace of the request, for Sanity support */
  'vision.network.trace': 'Spor-ID',
  /** Hint in the Network panel while queries go to the API */
  'vision.network.use-cdn-hint':
    'Slå på Bruk API CDN i Alternativer for å sende spørringer gjennom CDN-en.',
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vision.network.you': 'Deg',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vision.options.dataset.follows-workspace': 'Følger arbeidsområdet',
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vision.options.dataset.pin': 'Fest et datasett',
  /** Hint under the dataset field while a dataset is pinned */
  'vision.options.dataset.pinned': 'Festet; arbeidsområdet kan bruke et annet datasett',
  /** Button that makes the tab follow the workspace's dataset again */
  'vision.options.dataset.use-workspace': 'Bruk arbeidsområdets datasett',
  /** Label for the "Include content source map" switch */
  'vision.options.include-source-map': 'Inkluder innholdskildekart',
  /** Description for the "Include content source map" switch */
  'vision.options.include-source-map.description':
    'Legger til resultSourceMap i svaret, vist i fanen Innholdskildekart.',
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vision.options.perspective.global': 'Global ({{name}})',
  /** Label of the switch that sends queries to the API CDN */
  'vision.options.use-cdn': 'Bruk API CDN',
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vision.options.use-cdn.anonymous':
    'Dette studioet logger deg inn med en informasjonskapsel, som API CDN-en aldri mottar: den svarer som den ville gjort til en anonym besøkende, med det et offentlig datasett viser.',
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vision.options.use-cdn.blocked':
    'API CDN-en betjener ikke utkast eller utgivelser, så spørringer med perspektivet {{perspective}} går til API-et. Med publisert eller rå bruker de CDN-en.',
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vision.options.use-cdn.blocked.title': 'Spørringer går til API-et, ikke CDN-en',
  /** Description of the API CDN switch */
  'vision.options.use-cdn.description':
    'Sender spørringen til API CDN-en, som useCdn: true i @sanity/client, med perspektivene publisert og rå: utkast og utgivelser går alltid til API-et. Svarene lagres i mellomlager i opptil ett minutt; Nettverk-panelet viser når et svar kom fra mellomlageret.',
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vision.options.use-cdn.use-published': 'Bruk det publiserte perspektivet',
  /** Label of the variant field */
  'vision.options.variant-label': 'Variant',
  /** Variant option sending the navbar's variant, named */
  'vision.options.variant.global': 'Global ({{name}})',
  /** Variant option sending the navbar's variant while none is selected there */
  'vision.options.variant.global-none': 'Global (ingen valgt)',
  /** Variant option sending no variant */
  'vision.options.variant.none': 'Ingen',
  /** Accessible label for collapsing a bottom panel */
  'vision.panel.collapse': 'Slå sammen panel',
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vision.panel.delta': 'Delta',
  /** Accessible label for expanding a bottom panel */
  'vision.panel.expand': 'Utvid panel',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vision.panel.explain': 'Forklar',
  /** Label of the Functions tab in the response panel */
  'vision.panel.functions': 'Funksjoner',
  /** Label of the "History" tab in the response panel */
  'vision.panel.history': 'Historikk',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vision.panel.lint': 'Lint',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vision.panel.mutate': 'Mutér',
  /** Label of the Network tab in the response panel */
  'vision.panel.network': 'Nettverk',
  /** Label of the "Options" panel in the request column */
  'vision.panel.options': 'Alternativer',
  /** Label of the "Response" tab in the response panel */
  'vision.panel.response': 'Svar',
  /** Label of the "Content Source Map" tab in the response panel */
  'vision.panel.source-map': 'Innholdskildekart',
  /** Button adding an item to a list param in the params form */
  'vision.params-form.add-item': 'Legg til element',
  /** Placeholder of a params form field that takes any JSON value */
  'vision.params-form.any-placeholder': 'Enhver JSON-verdi; annen tekst sendes som streng',
  /** Shown in the params form when the query uses no params */
  'vision.params-form.empty':
    'Spørringen bruker ingen parametere. Hver $navn i den får et felt her.',
  /** Shown in the params form while the params JSON cannot be parsed */
  'vision.params-form.invalid-json':
    'Parameterne er ikke gyldig JSON. Rett dem i JSON-visningen for å redigere dem her.',
  /** A boolean param's value is not true or false; it is sent anyway */
  'vision.params-form.invalid.boolean': 'Ikke sann eller usann; sendes som {{value}}',
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vision.params-form.invalid.document-type':
    'Ikke en dokumenttype i dette arbeidsområdet; sendes likevel',
  /** A whole number param (a slice bound) holds a fraction */
  'vision.params-form.invalid.integer': 'Ikke et helt tall, som deling krever',
  /** A list param's value is not a list; it is sent anyway */
  'vision.params-form.invalid.list': 'Ikke en liste; sendes som {{value}}',
  /** A number param's value is not a number; it is sent anyway */
  'vision.params-form.invalid.number': 'Ikke et tall; sendes som tekst',
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vision.params-form.invalid.option': 'Ikke en av de kjente verdiene; sendes likevel',
  /** A text param's value is not text; it is sent anyway */
  'vision.params-form.invalid.string': 'Ikke tekst; sendes som {{value}}',
  /** Accessible label of an item input of a list param in the params form */
  'vision.params-form.item-label': '${{name}}, element {{index}}',
  /** Placeholder of an item input of a list param in the params form */
  'vision.params-form.item-placeholder': 'Element',
  /** Under a params form field whose param has no value */
  'vision.params-form.missing': 'Ikke angitt: spørringen feiler til den har en verdi',
  /** Shown in the params form when the workspace schema could not be read */
  'vision.params-form.no-schema':
    'Typer kommer kun fra spørringen: arbeidsområdets skjema kunne ikke leses.',
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vision.params-form.not-set': 'Ikke angitt',
  /** Button setting a date and time param to the current time */
  'vision.params-form.now': 'Nå',
  /** Button removing a param the query does not use from the params */
  'vision.params-form.remove': 'Fjern',
  /** Accessible label of the button removing an item from a list param */
  'vision.params-form.remove-item': 'Fjern element',
  /** Shown in the params form when the query does not parse */
  'vision.params-form.syntax-error': 'Spørringen kan ikke tolkes, så parameterne vises uten typer.',
  /** Type hint of a params form field: any JSON value */
  'vision.params-form.type.any': 'enhver JSON-verdi',
  /** Type hint of a params form field: true or false */
  'vision.params-form.type.boolean': 'sann eller usann',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vision.params-form.type.datetime': 'dato og klokkeslett (ISO 8601)',
  /** Type hint of a params form field: a document ID */
  'vision.params-form.type.document-id': 'dokument-ID',
  /** Type hint of a params form field: one of the workspace's document types */
  'vision.params-form.type.document-type': 'dokumenttype',
  /** Type hint of a params form field: a whole number */
  'vision.params-form.type.integer': 'heltall',
  /** Type hint of a params form field: a list of values */
  'vision.params-form.type.list': 'liste, hver {{type}}',
  /** Type hint of a params form field: a number */
  'vision.params-form.type.number': 'tall',
  /** Type hint of a params form field: text */
  'vision.params-form.type.string': 'tekst',
  /** Heading of the params the query does not use, listed in the params form */
  'vision.params-form.unused': 'Brukes ikke av spørringen',
  /** Before the expressions that use a param, in the params form */
  'vision.params-form.used-in': 'Brukt i',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vision.params.fit-height': 'Tilpasset innholdet, {{height}} piksler',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vision.params.resize':
    'Endre størrelse på parametere: dra eller bruk piltastene; dobbeltklikk eller trykk Enter for å tilpasse til innholdet igjen',
  /** Tab showing the params as a form inferred from the query */
  'vision.params.view.form': 'Skjema',
  /** Tab showing the params as JSON */
  'vision.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vision.params.view.label': 'Rediger parametere som',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vision.paste.parsed': 'Lastet spørring fra limt inn URL',
  /** Toast shown after a curl command for a query was pasted and loaded into the tab */
  'vision.paste.parsed-curl': 'Lastet spørring fra limt inn cURL-kommando',
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vision.paste.unavailable-variant':
    'Den limte inn URL-en brukte varianten «{{variant}}»; velg den i navigasjonslinjen for å kjøre spørringen med den.',
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vision.paste.unknown-dataset':
    'Datasettet «{{dataset}}» i den limte inn URL-en er ikke tilgjengelig her, beholder det nåværende.',
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vision.paste.unsupported-perspective':
    'Perspektivet i den limte inn URL-en støttes ikke her, beholder det nåværende.',
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vision.paste.variants-disabled':
    'Den limte inn URL-en brukte varianten «{{variant}}»; dette arbeidsområdet har varianter slått av, så spørringen kjøres uten den.',
  /** Accessible label for the query actions menu */
  'vision.query.actions': 'Spørringshandlinger',
  /** Tooltip when automatic refetching is not available for the API version */
  'vision.query.auto-refetch.unsupported':
    'Automatisk ny-henting krever API-versjon v2021-03-25 eller nyere.',
  /** Toast shown after the query was copied */
  'vision.query.copied': 'Spørring kopiert til utklippstavlen',
  /** Menu item copying the query text */
  'vision.query.copy': 'Kopier spørring',
  /** Menu item opening the export query dialog */
  'vision.query.export': 'Eksporter spørring…',
  /** Menu item reformatting the query */
  'vision.query.prettify': 'Formater spørring',
  /** Toast shown when the query could not be reformatted */
  'vision.query.prettify.failed': 'Kunne ikke formatere spørringen',
  /** Menu item saving the query to the personal saved queries */
  'vision.query.save': 'Lagre spørring',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vision.query.stop': 'Stopp',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vision.query.stop.description': 'Stopp henting',
  /** Explanation in the settings section about the redesigned experience */
  'vision.redesign.settings.description':
    'Du bruker den redesignede Vision-verktøyet. Hvis du bytter tilbake, beholdes fanene og innstillingene dine i denne nettleseren til neste gang du prøver det.',
  /** Title of the settings section about the redesigned experience */
  'vision.redesign.settings.title': 'Redesignet Vision (beta)',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vision.redesign.switch-to-classic': 'Bytt til klassisk Vision',
  /** Toast button that switches to the redesigned tool */
  'vision.redesign.toast.accept': 'Prøv det nå',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vision.redesign.toast.description':
    'Spørringsfaner, direkte ny-henting, svardetaljer og eksporter. Du kan bytte tilbake når som helst.',
  /** Toast button that hides the invitation */
  'vision.redesign.toast.dismiss': 'Ikke nå',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vision.redesign.toast.title': 'Prøv det redesignede Vision',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vision.redesign.try': 'Prøv redesignet',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vision.redesign.try.description':
    'Bytt til det redesignede Vision, i beta. Du kan bytte tilbake når som helst fra sidepanelet.',
  /** Empty state of the response panel before anything was fetched */
  'vision.response.empty': 'Ingenting hentet ennå',
  /** Label for the payload size in the response tab */
  'vision.response.payload-size': 'Datastørrelse',
  /** Label for the sync tags in the response tab */
  'vision.response.sync-tags': 'Synkroniseringskoder',
  /** Shown when the response carried no sync tags */
  'vision.response.sync-tags.none': 'Ingen synkroniseringskoder i svaret',
  /** Under the query URL when the request went out as a POST body rather than that URL */
  'vision.response.url.sent-as-post':
    'Sendt som en POST-body: spørringen og parameterne er for lange for en URL, så @sanity/client sendte dem som JSON. Å lime inn denne URL-en i Vision laster fortsatt inn spørringen.',
  /** Accessible label for the result actions menu */
  'vision.result.actions': 'Resultathandlinger',
  /** Toast shown after the result was copied */
  'vision.result.copied': 'Resultat kopiert til utklippstavlen',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vision.result.copied-value': 'Kopierte {{path}}',
  /** Menu item and button copying the result as JSON */
  'vision.result.copy': 'Kopier resultat',
  /** Button next to each property in the result tree, copying its value */
  'vision.result.copy-value': 'Kopier verdi',
  /** Empty state of the result view */
  'vision.result.empty': 'Kjør spørringen for å se resultatet her',
  /** Button exporting the result as CSV */
  'vision.result.export-csv': 'Eksporter CSV',
  /** Button exporting the result as JSON */
  'vision.result.export-json': 'Eksporter JSON',
  /** Menu item opening the TypeScript export dialog */
  'vision.result.export-typescript': 'Eksporter TypeScript…',
  /** Menu item opening the Zod export dialog */
  'vision.result.export-zod': 'Eksporter Zod…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vision.result.graph.collapse': 'Skjul det den inneholder',
  /** Button fitting the whole graph in view */
  'vision.result.graph.fit': 'Tilpass til visning',
  /** Accessible label of the graph, saying how to move around in it */
  'vision.result.graph.label':
    'Resultatgraf: dra for å flytte, rull for å zoome; når fokusert, piltastene flytter, + og - zoomer, 0 tilpasser',
  /** Ends the note on a graph that leaves part of this result out */
  'vision.result.graph.left-out-hint': 'Tre- og JSON-visningene viser alt.',
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vision.result.graph.node-limit': 'Bare de første {{nodes}} objektene og arrayene er tegnet.',
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vision.result.graph.partial': 'Bare de første {{rows}} oppføringene er listet for {{nodes}}.',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vision.result.graph.partial.node': '{{name}} ({{entries}} oppføringer)',
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
  'vision.saved.empty':
    'Ingen lagrede spørringer ennå. Lagre den gjeldende spørringen med +-knappen.',
  /** Empty state of a query list when the search matches nothing */
  'vision.saved.empty-search': 'Ingen spørringer samsvarer med søket ditt',
  /** Menu item loading a saved query into the active tab */
  'vision.saved.load-in-current-tab': 'Last inn i gjeldende fane',
  /** Menu item opening a saved query in a new tab */
  'vision.saved.open-in-new-tab': 'Åpne i ny fane',
  /** Menu item renaming a saved query */
  'vision.saved.rename': 'Gi nytt navn',
  /** Accessible label for the button saving the current query */
  'vision.saved.save-current': 'Lagre gjeldende spørring',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vision.saved.unavailable-variant':
    'Denne lagrede spørringen brukte varianten «{{variant}}»; velg den i navigasjonslinjen for å kjøre spørringen med den.',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vision.saved.unknown-dataset':
    'Datasettet «{{dataset}}» for denne lagrede spørringen er ikke tilgjengelig her, beholder det gjeldende.',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vision.saved.variants-disabled':
    'Denne lagrede spørringen brukte varianten «{{variant}}»; dette arbeidsområdet har varianter slått av, så spørringen kjøres uten den.',
  /** Button in the settings dialog that clears the stored state */
  'vision.settings.clear-storage': 'Tøm lagring',
  /** Confirmation button for clearing the storage */
  'vision.settings.clear-storage.confirm': 'Ja, tøm lagring',
  /** Explanation of what clearing the storage does */
  'vision.settings.clear-storage.description':
    'Sletter dine personlige lagrede spørringer og funksjonsbiblioteket, tilbakestiller åpne faner og disse standardinnstillingene i denne nettleseren, og går tilbake til det klassiske Vision-verktøyet. Delte spørringer beholdes.',
  /** Toast shown when the saved queries could not be cleared */
  'vision.settings.clear-storage.error': 'Kunne ikke tømme de lagrede spørringene',
  /** Toast shown after the storage was cleared */
  'vision.settings.clear-storage.success': 'Lagring tømt',
  /** Explanation at the top of the settings dialog */
  'vision.settings.description':
    'Standardinnstillinger for nye faner. Åpne faner beholder sine egne valg.',
  /** Explains the setting listing the fields left out of History diffs */
  'vision.settings.history-diff.description':
    'Én feltbane per linje. En bane treffer på hvilket som helst nivå i et resultat, så _rev skjuler revisjonen til hvert dokument i det. Hver diff kan likevel vise dem.',
  /** Button restoring the default fields left out of History diffs */
  'vision.settings.history-diff.reset': 'Tilbakestill til standard',
  /** Label of the setting listing the fields left out of History diffs */
  'vision.settings.history-diff.title': 'Felt skjult fra historikk-differanser',
  /** Title of the settings dialog */
  'vision.settings.title': 'Innstillinger',
  /** Empty state of the shared queries panel */
  'vision.shared.empty':
    'Ingen delte spørringer ennå. Del en lagret spørring for å gjøre den tilgjengelig for alle som bruker dette datasettet.',
  /** Shortcut description: close dialogs and menus */
  'vision.shortcuts.close': 'Lukk dialoger og menyer',
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vision.shortcuts.complete': 'Fullfør et funksjonsnavn',
  /** Shortcut description: copy the query */
  'vision.shortcuts.copy-query': 'Kopier spørringen',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vision.shortcuts.extract-function': 'Trekk ut projeksjonen ved markøren til en funksjon',
  /** Shortcut description: run the query */
  'vision.shortcuts.fetch': 'Hent spørringen',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vision.shortcuts.next-finding': 'Hopp til neste lint-funn',
  /** Shortcut description: reformat the query */
  'vision.shortcuts.prettify': 'Formater spørringen pent',
  /** Title of the keyboard shortcuts dialog */
  'vision.shortcuts.title': 'Tastatursnarveier',
  /** Sidebar toggle: show icons only */
  'vision.sidebar.collapse': 'Slå sammen sidepanel',
  /** Sidebar toggle: show labels next to the icons */
  'vision.sidebar.expand': 'Utvid sidepanel',
  /** Accessible label for the sidebar navigation */
  'vision.sidebar.label': 'Vision-sidepanel',
  /** Sidebar item and drawer title for personal saved queries */
  'vision.sidebar.saved-queries': 'Lagrede spørringer',
  /** Sidebar item opening the settings dialog */
  'vision.sidebar.settings': 'Innstillinger',
  /** Sidebar item and drawer title for shared queries */
  'vision.sidebar.shared-queries': 'Delte spørringer',
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vision.sidebar.shortcuts': 'Tastatursnarveier',
  /** Empty state of the content source map panel */
  'vision.source-map.empty':
    'Ingen kildekart for innhold i svaret. Slå på «Inkluder kildekart for innhold» under Alternativer og hent på nytt.',
  /** Accessible label of the divider between the result and the response details panel */
  'vision.split.bottom-panel':
    'Endre størrelse på panelet for svardetaljer: dra eller bruk piltastene; Home og End går til grensene, Enter tilbakestiller',
  /** Accessible label of the divider between the request and response panes */
  'vision.split.request-response':
    'Endre størrelse på panelene for forespørsel og svar: dra eller bruk piltastene; Home og End går til grensene, Enter tilbakestiller',
  /** Accessible label for the button closing a query tab */
  'vision.tabs.close-tab': 'Lukk fane',
  /** Accessible label for the list of query tabs */
  'vision.tabs.label': 'Spørringsfaner',
  /** Accessible label for the button opening a new query tab */
  'vision.tabs.new-tab': 'Ny fane',
  /** Placeholder of the input renaming a tab */
  'vision.tabs.title-placeholder': 'Fanetittel',
  /** Title of a tab whose query is still empty */
  'vision.tabs.untitled': 'Spørring uten tittel',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vision.webmcp.check-query': 'Kontroller en GROQ-spørring i Vision',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vision.webmcp.describe-schema': 'Beskriv skjemaet i Vision',
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vision.webmcp.explain-query': 'Forklar en GROQ-spørring i Vision',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vision.webmcp.get-state': 'Les den åpne Vision-fanen',
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vision.webmcp.open-query': 'Åpne en GROQ-spørring i Vision',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vision.webmcp.preview-mutations': 'Forhåndsvis endringer i Vision',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vision.webmcp.run-query': 'Kjør en GROQ-spørring i Vision',
})
