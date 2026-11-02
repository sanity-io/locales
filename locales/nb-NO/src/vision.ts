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
  /** Tooltip shown when the API version selector is locked to vX because a variant is selected */
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
  'vista.agent-actions.credits': 'Bruker én AI-kreditt per forespørsel',
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vista.ai-credits.balance': '{{balance}} av {{quota}} AI-kreditter igjen denne måneden.',
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vista.ai-credits.deficit':
    '{{used}} AI-kreditter brukt denne måneden, {{deficit}} mer enn de {{quota}} som er inkludert.',
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vista.ai-credits.limit.description':
    'Organisasjonen din har brukt {{used}} av sine {{quota}} AI-kreditter denne måneden, så Sanity Agent Actions er satt på pause til neste måned eller til forbruksgrensen heves.',
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vista.ai-credits.limit.description-unknown':
    'Organisasjonen din har nådd forbruksgrensen for AI-kreditter, så Sanity Agent Actions er satt på pause til neste måned eller til grensen heves.',
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vista.ai-credits.limit.learn-more': 'Hvordan AI-kreditter fungerer',
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vista.ai-credits.limit.manage': 'Administrer AI-kreditter',
  /** Title of the card shown where the organization is out of AI credits */
  'vista.ai-credits.limit.title': 'Tom for AI-kreditter',
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vista.ai-credits.usage': 'AI-bruk',
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vista.ai-credits.used': '{{used}} AI-kreditter brukt denne måneden.',
  /** Button in the request column's action bar naming the API version requests go out with */
  'vista.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vista.api-version.button-cdn': 'API CDN {{version}}',
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vista.api-version.button-invalid': 'Uferdig API-versjon',
  /** Tooltip of the API version button */
  'vista.api-version.tooltip':
    'Spørringer kjøres mot API-versjon {{version}}. Velg for å endre den i Alternativer.',
  /** Tooltip of the API version button while queries go through the API CDN */
  'vista.api-version.tooltip-cdn':
    'Spørringer kjøres mot API CDN med API-versjon {{version}}. Velg for å endre den i Alternativer.',
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vista.api-version.tooltip-cdn-blocked':
    'Spørringer kjøres mot API-et med API-versjon {{version}}, ikke API CDN: det betjener ikke {{perspective}}-perspektivet. Velg for å endre det i Alternativer.',
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vista.api-version.tooltip-invalid':
    'API-versjonen i Alternativer er ufullstendig, så ingenting kan hentes før den er fullført.',
  /** Tooltip of the API version button while a selected variant forces the experimental API */
  'vista.api-version.tooltip-locked':
    'Spørringer kjøres mot API-versjon {{version}}, som den valgte varianten krever.',
  /** Label of the document after the change in the Delta panel */
  'vista.delta.after': 'Etter',
  /** Label of the document before the change in the Delta panel */
  'vista.delta.before': 'Før',
  /** What the Delta panel does */
  'vista.delta.description':
    'Kjører spørringen i delta-modus, slik GROQ-drevne webhooks, lyttere og Sanity Functions gjør: before() og after() er et dokument før og etter en endring, @ er dokumentet etter den, og delta::changedAny() sammenligner dem. Den kjører i nettleseren med groq-js. En tom side betyr intet dokument: endringen oppretter eller sletter det.',
  /** Label of the document ID field in the Delta panel */
  'vista.delta.document-id': 'Dokument-ID',
  /** Shown when there is a query but no documents to compare */
  'vista.delta.empty':
    'Last inn et dokuments historikk, eller skriv dokumentene inn i Før og Etter.',
  /** Shown when the query fails in delta mode */
  'vista.delta.failed': 'Spørringen kunne ikke kjøres i delta-modus: {{message}}',
  /** Shown when the After document is not valid JSON */
  'vista.delta.invalid-after': 'Etter er ikke gyldig JSON: {{message}}',
  /** Shown when the Before document is not valid JSON */
  'vista.delta.invalid-before': 'Before er ikke gyldig JSON: {{message}}',
  /** Button loading the document's revisions from the History API */
  'vista.delta.load': 'Last inn historikk',
  /** Shown when the history could not be loaded */
  'vista.delta.load-failed': 'Historikken kunne ikke lastes inn: {{message}}',
  /** A delta filter that is true for the change */
  'vista.delta.matches':
    'Samsvarer: en webhook eller funksjon med dette filteret kjører for denne endringen.',
  /** A delta filter that is false for the change */
  'vista.delta.no-match':
    'Samsvarer ikke: en webhook eller funksjon med dette filteret kjører ikke for denne endringen.',
  /** Shown while the query or its params cannot be sent */
  'vista.delta.no-request': 'Rett opp spørringen og parameterne for å kjøre den i delta-modus.',
  /** Heading of the delta result */
  'vista.delta.result': 'Resultat',
  /** The After choice for a change that deletes the document */
  'vista.delta.revision.none-after': 'Ingenting: endringen sletter dokumentet',
  /** The Before choice for a change that creates the document */
  'vista.delta.revision.none-before': 'Ingenting: endringen oppretter dokumentet',
  /** A revision in the Before and After lists */
  'vista.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vista.drawer.close': 'Lukk panel',
  /** Explanation at the top of the Explain panel */
  'vista.explain.description':
    'Spørreplanen er hvordan Content Lake kjører spørringen: hva den leser, filtrerer og sorterer mens den leser, og hva som overlates til senere steg. «Forklar dette for meg» lar Sanity Agent Actions beskrive spørringen og planen med vanlige ord, noe som bruker én AI-kreditt.',
  /** Shown in the Explain panel while there is no valid query to explain */
  'vista.explain.empty': 'Skriv en spørring for å forklare den.',
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vista.explain.explain': 'Forklar dette for meg',
  /** Shown when the explanation could not be written */
  'vista.explain.failed': 'Spørringen kunne ikke forklares: {{message}}',
  /** A count the index computes without reading the documents */
  'vista.explain.insight.aggregate': 'Telt i indeksen, uten å lese dokumentene.',
  /** A subquery the plan runs once for all documents */
  'vista.explain.insight.batched-subquery':
    'Underspørringen kjører én gang for alle dokumentene, i én samlet henting, ikke én gang per dokument.',
  /** Part of the filter runs in memory; the expression follows */
  'vista.explain.insight.filter-in-memory':
    'Deler av filteret kjører i minnet, etter lesing: hvert dokument indeksen slipper gjennom, blir lest først, noe som blir tregt på store datasett. Joins (->) og funksjoner i et filter kan ikke bruke indeksen.',
  /** The index sorts and limits while reading */
  'vista.explain.insight.index-sort-limit':
    'Indeksen sorterer og begrenser dokumentene mens de leses.',
  /** The plan slices in memory */
  'vista.explain.insight.slice-in-memory':
    'Utsnittet tas i minnet etter lesing, ikke som en begrensning mens man leser.',
  /** The plan sorts in memory */
  'vista.explain.insight.sort-in-memory':
    'Sortering skjer i minnet, etter at alle treff er lest. Sorter på attributter indeksen kan sortere på.',
  /** Link under the plan insights to the guide on fast queries */
  'vista.explain.insights.guide': 'Høyytelses-GROQ',
  /** Heading of the plan insights in the Explain panel */
  'vista.explain.insights.title': 'Det som utmerker seg',
  /** Button in the Explain panel fetching the query plan */
  'vista.explain.plan': 'Vis spørreplanen',
  /** Shown when the query plan could not be fetched */
  'vista.explain.plan-failed': 'Spørreplanen kunne ikke hentes: {{message}}',
  /** Heading of the query plan in the Explain panel */
  'vista.explain.plan-title': 'Spørreplan',
  /** Toast shown after a code snippet was copied */
  'vista.export-query.copied': 'Kodebit kopiert til utklippstavlen',
  /** Label for the button that copies a code snippet */
  'vista.export-query.copy': 'Kopier kodebit',
  /** Explanation at the top of the export query dialog */
  'vista.export-query.description':
    'Kjør denne spørringen utenfor studioet med en av disse kodebitene.',
  /** Title of the dialog that exports the query as code snippets */
  'vista.export-query.title': 'Eksporter spørring',
  /** Note about authentication in the export query dialog */
  'vista.export-query.token-note':
    'Private datasett trenger et API-token. Offentlige datasett kan droppe Authorization-headeren.',
  /** Toast shown after the generated code was copied */
  'vista.export-types.copied': 'Kode kopiert til utklippstavlen',
  /** Label for the button that copies the generated code */
  'vista.export-types.copy': 'Kopier kode',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vista.export-types.empty':
    'Hent spørringen først slik at det finnes et resultat å utlede typer fra.',
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vista.export-types.schema-error': 'Skjemaevaluering mislyktes: {{message}}',
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vista.export-types.source.result':
    'Utledet fra det hentede resultatet, siden spørringen ikke kunne evalueres mot arbeidsområdets skjema.',
  /** Note shown when the types were derived from the workspace schema */
  'vista.export-types.source.schema':
    'Utledet fra arbeidsområdets skjema, på samme måte som sanity typegen gjør det.',
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vista.export-types.stale-result':
    'Resultatet som vises ble hentet for en annen spørring eller andre parametere. Hent gjeldende spørring først slik at det finnes et resultat å utlede typer fra.',
  /** Title of the dialog exporting TypeScript types for the result */
  'vista.export-types.title-typescript': 'Eksporter TypeScript',
  /** Title of the dialog exporting a Zod schema for the result */
  'vista.export-types.title-zod': 'Eksporter Zod',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vista.functions.add': 'Legg til i spørring',
  /** Shown on a library function the query declares the same way */
  'vista.functions.declared': 'I denne spørringen',
  /** Lint action on a call of a library function the query does not declare */
  'vista.functions.editor.add-from-library': 'Deklarer den',
  /** Note in a function's hover documentation: the API version it needs */
  'vista.functions.editor.api-version': 'Krever API-versjon {{version}} eller nyere',
  /** Detail of a completion for a custom function the query declares */
  'vista.functions.editor.completion-declared': 'i denne spørringen',
  /** Detail of a completion for a library function, which declares it too */
  'vista.functions.editor.completion-library': 'fra biblioteket ditt',
  /** Note in the hover documentation of a custom function the query declares */
  'vista.functions.editor.declared-on': 'Tilpasset funksjon, deklarert på linje {{line}}',
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vista.functions.editor.delta-only':
    'Fungerer kun i delta-modus, der webhooks og Sanity Functions kjører sine filtre',
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vista.functions.editor.extract': 'Trekk ut til funksjon',
  /** Note in the hover documentation of a library function the query does not declare */
  'vista.functions.editor.in-library':
    'I funksjonsbiblioteket ditt, ikke deklarert i denne spørringen',
  /** Link at the end of a built-in function's hover documentation */
  'vista.functions.editor.reference': 'GROQ-funksjonsreferanse',
  /** Explanation under the library heading in the Functions panel */
  'vista.functions.library.description':
    'Lagres i denne nettleseren for hvert datasett i prosjektet. Fullføringer tilbyr disse funksjonene, og lint tilbyr å deklarere en funksjon kallene bruker.',
  /** Shown in the Functions panel while the library is empty */
  'vista.functions.library.empty':
    'Lagre en funksjon spørringen deklarerer for å bruke den i andre spørringer.',
  /** Heading of the functions library in the Functions panel */
  'vista.functions.library.title': 'Bibliotek',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vista.functions.query.empty':
    'Deklarer egendefinerte funksjoner øverst i spørringen, eller plasser markøren i en projeksjon, som author->{name}, og trykk på uttrekksknappen over editoren ({{shortcut}}).',
  /** Heading of the functions the query declares in the Functions panel */
  'vista.functions.query.title': 'I denne spørringen',
  /** Removes a function from the library */
  'vista.functions.remove': 'Fjern fra biblioteket',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vista.functions.replace': 'Erstatt i spørringen',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vista.functions.reveal': 'Vis {{name}} i editoren',
  /** Button of a function the query declares that is not in the library yet */
  'vista.functions.save': 'Lagre til biblioteket',
  /** Shown on a function the query declares the way the library has it */
  'vista.functions.saved': 'Lagret',
  /** Button of a function the query declares differently from the library's version */
  'vista.functions.update': 'Oppdater biblioteket',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vista.generate.button': 'Generer spørring',
  /** Closes the generate query bar */
  'vista.generate.close': 'Lukk',
  /** Explanation under the generate query field */
  'vista.generate.description':
    'Sanity Agent Actions skriver GROQ-en ut fra beskrivelsen din og dokumenttypene, og Content Lake kontrollerer hvert forsøk; hvert forsøk bruker én AI-kreditt. Det erstatter spørringen i denne fanen og kjører den; angre i editoren bringer tilbake forrige spørring.',
  /** Shown when no query could be generated, above the reason */
  'vista.generate.failed': 'Spørringen kunne ikke genereres',
  /** Accessible label of the description field in the generate query bar */
  'vista.generate.label': 'Hva skal spørringen hente?',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vista.generate.open-anyway': 'Åpne siste forsøk',
  /** Placeholder of the description field in the generate query bar */
  'vista.generate.placeholder':
    'De 10 nyeste forfatterne, sortert etter etternavn og deretter fornavn',
  /** Shown while the first attempt at a query is written */
  'vista.generate.progress': 'Skriver spørringen…',
  /** Shown while a rejected attempt is retried */
  'vista.generate.progress-retry': 'Retter spørringen (forsøk {{attempt}} av {{max}})…',
  /** Button generating the query */
  'vista.generate.submit': 'Generer',
  /** Badge on a history entry the API CDN answered */
  'vista.history.cdn': 'API CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vista.history.cdn-cache-hit': 'CDN-treff i hurtigbuffer',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vista.history.changed': 'Endret',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vista.history.changes': 'Endringer',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vista.history.changes-failed': 'Endringene kunne ikke vises.',
  /** Button retrying to show the changes of a history entry */
  'vista.history.changes-retry': 'Prøv igjen',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vista.history.compared-with': 'Sammenlignet med henting kl. {{time}}',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vista.history.diff.params': 'Parametere',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vista.history.diff.query': 'Spørring',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vista.history.diff.query-formatting-only': 'Bare formateringen ble endret',
  /** Label of the diff of the query result in a history entry's changes */
  'vista.history.diff.result': 'Resultat',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vista.history.diff.url': 'Forespørsels-URL',
  /** Empty state of the history panel */
  'vista.history.empty': 'Ingenting hentet ennå',
  /** Status label for a failed fetch in the history */
  'vista.history.failed': 'Mislyktes',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vista.history.hide-hidden': 'Skjul dem',
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vista.history.hiding': 'Skjuler {{fields}}',
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vista.history.only-hidden-changed': 'Bare skjulte felt ble endret',
  /** History reason: a tab opened with a generated query fetched it */
  'vista.history.reason.generated': 'Generert spørring',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vista.history.reason.link': 'Åpnet lenke',
  /** History reason: a live event matched the query's sync tags */
  'vista.history.reason.live': 'Direkteoppdatering',
  /** History reason: the live connection asked every client to refetch */
  'vista.history.reason.live-restart': 'Live-tilkobling startet på nytt',
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vista.history.reason.live-start': 'Live-henting startet',
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vista.history.reason.load': 'Spørring lastet inn',
  /** History reason: the fetch button was pressed */
  'vista.history.reason.manual': 'Hent-knapp',
  /** History reason: mutations were applied from the Mutate panel */
  'vista.history.reason.mutation': 'Endringer anvendt',
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vista.history.reason.options': 'Alternativer endret',
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vista.history.reason.paste': 'Limt inn URL',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vista.history.reason.resume': 'Automatisk gjenhenting gjenopptatt',
  /** History reason: the keyboard shortcut was used */
  'vista.history.reason.shortcut': 'Tastatursnarvei',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vista.history.same-result': 'Samme resultat',
  /** Button showing the hidden fields in a history entry's changes */
  'vista.history.show-hidden': 'Vis dem',
  /** Next to a history entry's changes while the hidden fields are shown */
  'vista.history.showing-hidden': 'Viser {{fields}}, skjult som standard',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vista.history.too-large': 'For stor til å sammenligne',
  /** A history entry whose result is the same as the previous result */
  'vista.history.unchanged': 'Ingen endringer',
  /** Shown in the Lint panel while the query has no lint findings */
  'vista.lint.empty':
    'Ingen lint-funn. Problemer som GROQ-linteren oppdager i spørringen vises her mens du skriver; velg et funn for å markere det i editoren.',
  /** Where a lint finding sits in the query, shown under its message */
  'vista.lint.position': 'Linje {{line}}, kolonne {{column}}',
  /** Severity badge of a lint finding */
  'vista.lint.severity.error': 'Feil',
  /** Severity badge of a lint finding */
  'vista.lint.severity.hint': 'Hint',
  /** Severity badge of a lint finding */
  'vista.lint.severity.info': 'Info',
  /** Severity badge of a lint finding */
  'vista.lint.severity.warning': 'Advarsel',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vista.lint.use-suggestion': 'Bruk {{suggestion}}',
  /** Badge shown while a tab refetches automatically */
  'vista.live.active': 'Live',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vista.live.button': 'Live-henting',
  /** Tooltip of the Live button while automatic refetching is off */
  'vista.live.button.start': 'Hent, og hent på nytt når dokumentene i resultatet endres',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vista.live.button.stop':
    'Stopp henting når dokumentene i resultatet endres. Hent henter fortsatt på forespørsel, for resultater som ingen dokumentendring påvirker, som now()',
  /** Error shown when the live connection breaks */
  'vista.live.error': 'Live-oppdateringer frakoblet: {{message}}',
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vista.live.stop': 'Stopp live',
  /** Button in the Mutate panel adding a mutation to the list */
  'vista.mutate.add': 'Legg til mutasjon',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vista.mutate.add.create': 'Opprett et dokument',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vista.mutate.add.delete': 'Slett et dokument',
  /** Adds a mutation deleting the documents of the shown result */
  'vista.mutate.add.delete-result': 'Slett dokumentene i resultatet',
  /** Adds a mutation patching a document, its ID to fill in */
  'vista.mutate.add.patch': 'Endre et dokument',
  /** Adds a mutation patching the documents of the shown result */
  'vista.mutate.add.patch-result': 'Endre dokumentene i resultatet',
  /** Button applying the mutations a dry run showed */
  'vista.mutate.apply': 'Bruk på {{dataset}}',
  /** Heading of the error shown when applying the mutations failed */
  'vista.mutate.apply-failed': 'Endringene ble ikke brukt',
  /** Next to Apply while the mutations as they are have had no dry run */
  'vista.mutate.apply-needs-preview': 'Bruk sender det en prøvekjøring viste: kjør én først.',
  /** Option giving array items without a _key one */
  'vista.mutate.auto-keys': 'Legg til en _key på array-elementer som mangler det',
  /** Under the option giving array items a _key */
  'vista.mutate.auto-keys.description':
    'Studioet trenger én på hvert array-element for å redigere det.',
  /** Button showing a document's changes in the dry run */
  'vista.mutate.changes': 'Endringer',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vista.mutate.changes-failed': 'Endringene kunne ikke vises.',
  /** Button retrying to show a document's changes */
  'vista.mutate.changes-retry': 'Prøv igjen',
  /** What the Mutate panel does */
  'vista.mutate.description':
    'Skriv endringer slik Mutations API tar imot dem, i en liste: create, createOrReplace, createIfNotExists, delete og patch, etter ID eller etter en GROQ-spørring. En prøvekjøring viser hva de ville gjort med hvert dokument uten å endre noe; Bruk skriver dem deretter til datasettet i én transaksjon, med din konto.',
  /** What the API says went wrong with one of the mutations */
  'vista.mutate.failure-item': 'Endring {{index}}: {{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vista.mutate.generate.button': 'Generer endringer',
  /** Explanation under the generate mutations field */
  'vista.mutate.generate.description':
    'Sanity Agent Actions skriver endringene ut fra beskrivelsen din, dokumentene i resultatet og deres typer, og en prøvekjøring kontrollerer hvert forsøk; hvert forsøk bruker én AI-kreditt. De erstatter endringene her, der angre bringer disse tilbake; ingenting skrives før du bruker dem.',
  /** Shown when no mutations could be generated, above the reason */
  'vista.mutate.generate.failed': 'Endringene kunne ikke genereres',
  /** Accessible label of the description field in the generate mutations bar */
  'vista.mutate.generate.label': 'Hva skal endringene gjøre?',
  /** Placeholder of the description field in the generate mutations bar */
  'vista.mutate.generate.placeholder': 'Endre tittelen på dokumentene i resultatet til foobar',
  /** Shown while the first attempt at the mutations is written */
  'vista.mutate.generate.progress': 'Skriver endringene…',
  /** Shown while an attempt the dry run turned down is retried */
  'vista.mutate.generate.progress-retry': 'Retter endringene (forsøk {{attempt}} av {{max}})…',
  /** Under the dry run: the fields the diffs leave out */
  'vista.mutate.hiding': 'Endringene utelater {{fields}}, slik Historikk gjør.',
  /** Shown when the mutations are not valid JSON */
  'vista.mutate.invalid-json': 'Endringene er ikke gyldig JSON: {{message}}',
  /** Shown when a mutation does not name exactly one thing to do */
  'vista.mutate.invalid-mutation':
    'Endring {{index}} trenger nøyaktig én av create, createOrReplace, createIfNotExists, delete eller patch.',
  /** Label of the mutations editor */
  'vista.mutate.mutations': 'Endringer',
  /** The dry run touched no documents */
  'vista.mutate.no-documents': 'Endringene berører ingen dokumenter.',
  /** Shown when the JSON is not a list of mutations */
  'vista.mutate.not-a-list':
    'Skriv en liste med endringer, en enkelt endring, eller en forespørselskropp med en liste over endringer.',
  /** A document the mutations create */
  'vista.mutate.operation.create': 'Opprett',
  /** A document the mutations delete */
  'vista.mutate.operation.delete': 'Slett',
  /** A document the mutations touch without changing its content */
  'vista.mutate.operation.none': 'Ingen endring',
  /** A document the mutations change */
  'vista.mutate.operation.update': 'Oppdater',
  /** Button running the mutations as a dry run */
  'vista.mutate.preview': 'Tørrkjøring',
  /** Heading of the error shown when the dry run failed */
  'vista.mutate.preview-failed': 'Tørrkjøringen mislyktes',
  /** Heading of the dry run's outcome */
  'vista.mutate.preview-heading': 'Tørrkjøring',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vista.mutate.stale':
    'Endringene, datasettet eller alternativene er endret etter denne tørrkjøringen. Kjør den på nytt for å ta dem i bruk.',
  /** How many documents the dry run changes and leaves as they are */
  'vista.mutate.summary': 'Endret: {{changed}} · Uendret: {{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vista.network.cache': 'Hurtigbuffer',
  /** The API CDN answered from its cache */
  'vista.network.cache.hit': 'Treff',
  /** Under the details of a CDN cache hit */
  'vista.network.cache.hit-explained':
    'CDN-en svarte med et respons den hadde hurtiglagret, fra et sted i nærheten av deg; spørringen nådde ikke API-et.',
  /** The API CDN answered with a response this session had not seen */
  'vista.network.cache.miss': 'Ikke treff, så vidt denne økten kan se',
  /** The API answered, which caches nothing */
  'vista.network.cache.none': 'Ingen, API-et svarer på hver forespørsel med ferskt innhold',
  /** Shown in the Network panel while there is no response */
  'vista.network.empty':
    'Hent spørringen for å se hvilket endepunkt som svarte på den, om det var fra en hurtigbuffer, og hvor den kjørte.',
  /** In the Network panel: the endpoint that answered */
  'vista.network.endpoint': 'Besvart av',
  /** The live API answered */
  'vista.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vista.network.endpoint.cdn': 'API CDN',
  /** In the Network panel: the region the query ran in */
  'vista.network.region': 'Spørringen kjørte i',
  /** The response did not say where the query ran */
  'vista.network.region.unknown': 'Ikke rapportert',
  /** In the Network panel: the round trip and the time on the server */
  'vista.network.timing': 'Tid',
  /** The round trip and the server's time for the query, in milliseconds */
  'vista.network.timing.value': '{{e2e}}ms tur-retur, {{server}}ms på serveren',
  /** In the Network panel: the trace of the request, for Sanity support */
  'vista.network.trace': 'Spor-ID',
  /** Hint in the Network panel while queries go to the API */
  'vista.network.use-cdn-hint':
    'Slå på Bruk API CDN i Alternativer for å sende spørringer gjennom CDN-en.',
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vista.network.you': 'Deg',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vista.options.dataset.follows-workspace': 'Følger arbeidsområdet',
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vista.options.dataset.pin': 'Fest et datasett',
  /** Hint under the dataset field while a dataset is pinned */
  'vista.options.dataset.pinned': 'Festet; arbeidsområdet kan bruke et annet datasett',
  /** Button that makes the tab follow the workspace's dataset again */
  'vista.options.dataset.use-workspace': 'Bruk arbeidsområdets datasett',
  /** Label for the "Include content source map" switch */
  'vista.options.include-source-map': 'Inkluder innholdskildekart',
  /** Description for the "Include content source map" switch */
  'vista.options.include-source-map.description':
    'Legger til resultSourceMap i svaret, vist i fanen Innholdskildekart.',
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vista.options.perspective.global': 'Global ({{name}})',
  /** Label of the switch that sends queries to the API CDN */
  'vista.options.use-cdn': 'Bruk API CDN-en',
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vista.options.use-cdn.anonymous':
    'Dette studioet logger deg inn med en informasjonskapsel, som API CDN-en aldri mottar: den svarer som den ville gjort til en anonym besøkende, med det et offentlig datasett viser.',
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vista.options.use-cdn.blocked':
    'API CDN-en betjener ikke utkast eller utgivelser, så spørringer med perspektivet {{perspective}} går til API-et. Med publisert eller rå bruker de CDN-en.',
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vista.options.use-cdn.blocked.title': 'Spørringer går til API-et, ikke CDN-en',
  /** Description of the API CDN switch */
  'vista.options.use-cdn.description':
    'Sender spørringen til API CDN-en, på samme måte som useCdn: true i @sanity/client, med perspektivene publisert og rå: utkast og utgivelser går alltid til API-et. Svarene lagres i hurtigbuffer i opptil ett minutt; Nettverkspanelet viser når et svar kom fra hurtigbufferen.',
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vista.options.use-cdn.use-published': 'Bruk det publiserte perspektivet',
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
  'vista.panel.expand': 'Utvid panel',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vista.panel.explain': 'Forklar',
  /** Label of the Functions tab in the response panel */
  'vista.panel.functions': 'Funksjoner',
  /** Label of the "History" tab in the response panel */
  'vista.panel.history': 'Historikk',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vista.panel.lint': 'Lint',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vista.panel.mutate': 'Muter',
  /** Label of the Network tab in the response panel */
  'vista.panel.network': 'Nettverk',
  /** Label of the "Options" panel in the request column */
  'vista.panel.options': 'Alternativer',
  /** Label of the "Response" tab in the response panel */
  'vista.panel.response': 'Respons',
  /** Label of the "Content Source Map" tab in the response panel */
  'vista.panel.source-map': 'Content Source Map',
  /** Button adding an item to a list param in the params form */
  'vista.params-form.add-item': 'Legg til element',
  /** Placeholder of a params form field that takes any JSON value */
  'vista.params-form.any-placeholder': 'Enhver JSON-verdi; annen tekst sendes som en streng',
  /** Shown in the params form when the query uses no params */
  'vista.params-form.empty':
    'Spørringen bruker ingen parametere. Hver $navn i den får et felt her.',
  /** Shown in the params form while the params JSON cannot be parsed */
  'vista.params-form.invalid-json':
    'Parameterne er ikke gyldig JSON. Rett dem i JSON-visningen for å redigere dem her.',
  /** A boolean param's value is not true or false; it is sent anyway */
  'vista.params-form.invalid.boolean': 'Ikke sann eller usann; sendt som {{value}}',
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vista.params-form.invalid.document-type':
    'Ikke en dokumenttype i dette arbeidsområdet; sendt likevel',
  /** A whole number param (a slice bound) holds a fraction */
  'vista.params-form.invalid.integer': 'Ikke et helt tall, som deler trenger',
  /** A list param's value is not a list; it is sent anyway */
  'vista.params-form.invalid.list': 'Ikke en liste; sendt som {{value}}',
  /** A number param's value is not a number; it is sent anyway */
  'vista.params-form.invalid.number': 'Ikke et tall; sendt som tekst',
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vista.params-form.invalid.option': 'Ikke en av de kjente verdiene; sendt likevel',
  /** A text param's value is not text; it is sent anyway */
  'vista.params-form.invalid.string': 'Ikke tekst; sendt som {{value}}',
  /** Accessible label of an item input of a list param in the params form */
  'vista.params-form.item-label': '${{name}}, element {{index}}',
  /** Placeholder of an item input of a list param in the params form */
  'vista.params-form.item-placeholder': 'Element',
  /** Under a params form field whose param has no value */
  'vista.params-form.missing': 'Ikke angitt: spørringen feiler inntil den har en verdi',
  /** Shown in the params form when the workspace schema could not be read */
  'vista.params-form.no-schema':
    'Typer kommer kun fra spørringen: arbeidsområdets skjema kunne ikke leses.',
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vista.params-form.not-set': 'Ikke angitt',
  /** Button setting a date and time param to the current time */
  'vista.params-form.now': 'Nå',
  /** Button removing a param the query does not use from the params */
  'vista.params-form.remove': 'Fjern',
  /** Accessible label of the button removing an item from a list param */
  'vista.params-form.remove-item': 'Fjern element',
  /** Shown in the params form when the query does not parse */
  'vista.params-form.syntax-error': 'Spørringen kan ikke tolkes, så parameterne listes uten typer.',
  /** Type hint of a params form field: any JSON value */
  'vista.params-form.type.any': 'enhver JSON-verdi',
  /** Type hint of a params form field: true or false */
  'vista.params-form.type.boolean': 'sann eller usann',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vista.params-form.type.datetime': 'dato og klokkeslett (ISO 8601)',
  /** Type hint of a params form field: a document ID */
  'vista.params-form.type.document-id': 'dokument-ID',
  /** Type hint of a params form field: one of the workspace's document types */
  'vista.params-form.type.document-type': 'dokumenttype',
  /** Type hint of a params form field: a whole number */
  'vista.params-form.type.integer': 'heltall',
  /** Type hint of a params form field: a list of values */
  'vista.params-form.type.list': 'liste, hver {{type}}',
  /** Type hint of a params form field: a number */
  'vista.params-form.type.number': 'tall',
  /** Type hint of a params form field: text */
  'vista.params-form.type.string': 'tekst',
  /** Heading of the params the query does not use, listed in the params form */
  'vista.params-form.unused': 'Ikke brukt av spørringen',
  /** Before the expressions that use a param, in the params form */
  'vista.params-form.used-in': 'Brukt i',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vista.params.fit-height': 'Tilpasset til innholdet, {{height}} piksler',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vista.params.resize':
    'Endre størrelse på parametere: dra eller bruk piltastene; dobbeltklikk eller trykk Enter for å tilpasse til innholdet igjen',
  /** Tab showing the params as a form inferred from the query */
  'vista.params.view.form': 'Skjema',
  /** Tab showing the params as JSON */
  'vista.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vista.params.view.label': 'Rediger parametere som',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vista.paste.parsed': 'Lastet inn spørring fra innlimt URL',
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vista.paste.unavailable-variant':
    'Den innlimte URL-en brukte varianten «{{variant}}»; velg den i navigasjonslinjen for å kjøre spørringen med den.',
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vista.paste.unknown-dataset':
    'Datasettet «{{dataset}}» i den innlimte URL-en er ikke tilgjengelig her, beholder det gjeldende.',
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vista.paste.unsupported-perspective':
    'Perspektivet i den innlimte URL-en støttes ikke her, beholder det gjeldende.',
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vista.paste.variants-disabled':
    'Den innlimte URL-en brukte varianten «{{variant}}»; dette arbeidsområdet har varianter slått av, så spørringen kjøres uten den.',
  /** Accessible label for the query actions menu */
  'vista.query.actions': 'Spørringshandlinger',
  /** Tooltip when automatic refetching is not available for the API version */
  'vista.query.auto-refetch.unsupported':
    'Automatisk ny henting krever API-versjon v2021-03-25 eller nyere.',
  /** Toast shown after the query was copied */
  'vista.query.copied': 'Spørring kopiert til utklippstavlen',
  /** Menu item copying the query text */
  'vista.query.copy': 'Kopier spørring',
  /** Menu item opening the export query dialog */
  'vista.query.export': 'Eksporter spørring…',
  /** Menu item reformatting the query */
  'vista.query.prettify': 'Formatter spørring',
  /** Toast shown when the query could not be reformatted */
  'vista.query.prettify.failed': 'Kunne ikke formatere spørringen',
  /** Menu item saving the query to the personal saved queries */
  'vista.query.save': 'Lagre spørring',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vista.query.stop': 'Stopp',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vista.query.stop.description': 'Stopp henting',
  /** Explanation in the settings section about the redesigned experience */
  'vista.redesign.settings.description':
    'Du bruker den redesignede Vision-verktøyet. Hvis du bytter tilbake, beholdes fanene og innstillingene dine i denne nettleseren til neste gang du prøver det.',
  /** Title of the settings section about the redesigned experience */
  'vista.redesign.settings.title': 'Redesignet Vision (beta)',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vista.redesign.switch-to-classic': 'Bytt til klassisk Vision',
  /** Toast button that switches to the redesigned tool */
  'vista.redesign.toast.accept': 'Prøv det nå',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.description':
    'Spørringsfaner, direkte oppdatering, responsdetaljer og eksporter. Du kan bytte tilbake når som helst.',
  /** Toast button that hides the invitation */
  'vista.redesign.toast.dismiss': 'Ikke nå',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.title': 'Prøv det redesignede Vision',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vista.redesign.try': 'Prøv redesignet',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vista.redesign.try.description':
    'Bytt til det redesignede Vision, i beta. Du kan bytte tilbake når som helst fra sidepanelet.',
  /** Empty state of the response panel before anything was fetched */
  'vista.response.empty': 'Ingenting hentet ennå',
  /** Label for the payload size in the response tab */
  'vista.response.payload-size': 'Nyttelaststørrelse',
  /** Label for the sync tags in the response tab */
  'vista.response.sync-tags': 'Synkroniseringstagger',
  /** Shown when the response carried no sync tags */
  'vista.response.sync-tags.none': 'Ingen synkroniseringstagger i responsen',
  /** Accessible label for the result actions menu */
  'vista.result.actions': 'Resultathandlinger',
  /** Toast shown after the result was copied */
  'vista.result.copied': 'Resultat kopiert til utklippstavlen',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vista.result.copied-value': 'Kopierte {{path}}',
  /** Menu item and button copying the result as JSON */
  'vista.result.copy': 'Kopier resultat',
  /** Button next to each property in the result tree, copying its value */
  'vista.result.copy-value': 'Kopier verdi',
  /** Empty state of the result view */
  'vista.result.empty': 'Kjør spørringen for å se resultatet her',
  /** Button exporting the result as CSV */
  'vista.result.export-csv': 'Eksporter CSV',
  /** Button exporting the result as JSON */
  'vista.result.export-json': 'Eksporter JSON',
  /** Menu item opening the TypeScript export dialog */
  'vista.result.export-typescript': 'Eksporter TypeScript…',
  /** Menu item opening the Zod export dialog */
  'vista.result.export-zod': 'Eksporter Zod…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vista.result.graph.collapse': 'Skjul det den inneholder',
  /** Button fitting the whole graph in view */
  'vista.result.graph.fit': 'Tilpass til visning',
  /** Accessible label of the graph, saying how to move around in it */
  'vista.result.graph.label':
    'Resultatgraf: dra for å flytte, rull for å zoome; når fokusert, piltastene flytter, + og - zoomer, 0 tilpasser',
  /** Ends the note on a graph that leaves part of this result out */
  'vista.result.graph.left-out-hint': 'Tre- og JSON-visningene viser alt sammen.',
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vista.result.graph.node-limit': 'Bare de første {{nodes}} objektene og listene er tegnet.',
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vista.result.graph.partial': 'Bare de første {{rows}} oppføringene er listet for {{nodes}}.',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vista.result.graph.partial.node': '{{name}} ({{entries}} oppføringer)',
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
  'vista.result.view.label': 'Resultatvisning',
  /** Tab showing the result as a tree to browse */
  'vista.result.view.tree': 'Tre',
  /** Empty state of the saved queries panel */
  'vista.saved.empty':
    'Ingen lagrede spørringer ennå. Lagre den gjeldende spørringen med +-knappen.',
  /** Empty state of a query list when the search matches nothing */
  'vista.saved.empty-search': 'Ingen spørringer samsvarer med søket ditt',
  /** Menu item loading a saved query into the active tab */
  'vista.saved.load-in-current-tab': 'Last inn i gjeldende fane',
  /** Menu item opening a saved query in a new tab */
  'vista.saved.open-in-new-tab': 'Åpne i ny fane',
  /** Menu item renaming a saved query */
  'vista.saved.rename': 'Gi nytt navn',
  /** Accessible label for the button saving the current query */
  'vista.saved.save-current': 'Lagre gjeldende spørring',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vista.saved.unavailable-variant':
    'Denne lagrede spørringen brukte varianten «{{variant}}»; velg den i navigasjonslinjen for å kjøre spørringen med den.',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vista.saved.unknown-dataset':
    'Datasettet «{{dataset}}» for denne lagrede spørringen er ikke tilgjengelig her, beholder det gjeldende.',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vista.saved.variants-disabled':
    'Denne lagrede spørringen brukte varianten «{{variant}}»; dette arbeidsområdet har varianter slått av, så spørringen kjøres uten den.',
  /** Button in the settings dialog that clears the stored state */
  'vista.settings.clear-storage': 'Tøm lagring',
  /** Confirmation button for clearing the storage */
  'vista.settings.clear-storage.confirm': 'Ja, tøm lagring',
  /** Explanation of what clearing the storage does */
  'vista.settings.clear-storage.description':
    'Sletter dine personlig lagrede spørringer og funksjonsbiblioteket, tilbakestiller åpne faner og disse standardinnstillingene i denne nettleseren, og går tilbake til det klassiske Vision-verktøyet. Delte spørringer beholdes.',
  /** Toast shown when the saved queries could not be cleared */
  'vista.settings.clear-storage.error': 'Kunne ikke tømme de lagrede spørringene',
  /** Toast shown after the storage was cleared */
  'vista.settings.clear-storage.success': 'Lagring tømt',
  /** Explanation at the top of the settings dialog */
  'vista.settings.description':
    'Standardinnstillinger for nye faner. Åpne faner beholder sine egne valg.',
  /** Explains the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.description':
    'Én feltbane per linje. En bane treffer på alle dybder i et resultat, så _rev skjuler revisjonen til alle dokumenter i det. Hver diff kan likevel vise dem.',
  /** Button restoring the default fields left out of History diffs */
  'vista.settings.history-diff.reset': 'Tilbakestill til standardverdiene',
  /** Label of the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.title': 'Felter skjult fra History-differ',
  /** Title of the settings dialog */
  'vista.settings.title': 'Innstillinger',
  /** Empty state of the shared queries panel */
  'vista.shared.empty':
    'Ingen delte spørringer ennå. Del en lagret spørring for å gjøre den tilgjengelig for alle som bruker dette datasettet.',
  /** Shortcut description: close dialogs and menus */
  'vista.shortcuts.close': 'Lukk dialoger og menyer',
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vista.shortcuts.complete': 'Fullfør et funksjonsnavn',
  /** Shortcut description: copy the query */
  'vista.shortcuts.copy-query': 'Kopier spørringen',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vista.shortcuts.extract-function': 'Trekk ut projeksjonen ved markøren til en funksjon',
  /** Shortcut description: run the query */
  'vista.shortcuts.fetch': 'Hent spørringen',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vista.shortcuts.next-finding': 'Hopp til neste lint-funn',
  /** Shortcut description: reformat the query */
  'vista.shortcuts.prettify': 'Formater spørringen pent',
  /** Title of the keyboard shortcuts dialog */
  'vista.shortcuts.title': 'Tastatursnarveier',
  /** Sidebar toggle: show icons only */
  'vista.sidebar.collapse': 'Slå sammen sidepanel',
  /** Sidebar toggle: show labels next to the icons */
  'vista.sidebar.expand': 'Utvid sidepanel',
  /** Accessible label for the sidebar navigation */
  'vista.sidebar.label': 'Vista-sidepanel',
  /** Sidebar item and drawer title for personal saved queries */
  'vista.sidebar.saved-queries': 'Lagrede spørringer',
  /** Sidebar item opening the settings dialog */
  'vista.sidebar.settings': 'Innstillinger',
  /** Sidebar item and drawer title for shared queries */
  'vista.sidebar.shared-queries': 'Delte spørringer',
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vista.sidebar.shortcuts': 'Tastatursnarveier',
  /** Empty state of the content source map panel */
  'vista.source-map.empty':
    'Ingen content source map i svaret. Slå på "Include content source map" under Alternativer og hent på nytt.',
  /** Accessible label of the divider between the result and the response details panel */
  'vista.split.bottom-panel':
    'Endre størrelse på panelet med svardetaljer: dra eller bruk piltastene; Home og End går til grensene, Enter tilbakestiller',
  /** Accessible label of the divider between the request and response panes */
  'vista.split.request-response':
    'Endre størrelse på forespørsels- og svarpanelene: dra eller bruk piltastene; Home og End går til grensene, Enter tilbakestiller',
  /** Accessible label for the button closing a query tab */
  'vista.tabs.close-tab': 'Lukk fane',
  /** Accessible label for the list of query tabs */
  'vista.tabs.label': 'Spørringsfaner',
  /** Accessible label for the button opening a new query tab */
  'vista.tabs.new-tab': 'Ny fane',
  /** Placeholder of the input renaming a tab */
  'vista.tabs.title-placeholder': 'Fanetittel',
  /** Title of a tab whose query is still empty */
  'vista.tabs.untitled': 'Uten tittel-spørring',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vista.webmcp.check-query': 'Sjekk en GROQ-spørring i Vision',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vista.webmcp.describe-schema': 'Beskriv skjemaet i Vision',
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vista.webmcp.explain-query': 'Forklar en GROQ-spørring i Vision',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vista.webmcp.get-state': 'Les den åpne Vision-fanen',
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vista.webmcp.open-query': 'Åpne en GROQ-spørring i Vision',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vista.webmcp.preview-mutations': 'Forhåndsvis mutasjoner i Vision',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vista.webmcp.run-query': 'Kjør en GROQ-spørring i Vision',
})
