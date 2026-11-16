import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Kopiera till urklipp',
  /** Label for deleting a query */
  'action.delete': 'Radera',
  /** Label for editing a query's title */
  'action.edit-title': 'Redigera titel',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Stoppa',
  /** Label for setting up a listener */
  'action.listen-execute': 'Lyssna',
  /** Label for query loading table */
  'action.load-queries': 'Ladda frågor',
  /** Label for loading a query */
  'action.load-query': 'Ladda fråga',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Avbryt',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Hämta',
  /** Label for saving a query */
  'action.save-personal-copy': 'Spara personlig kopia',
  /** Label for saving a personal query */
  'action.save-personal-query': 'Spara som personlig',
  /** Label for saving a query */
  'action.save-query': 'Spara fråga',
  /** Label for saving a shared query */
  'action.save-shared-query': 'Spara som delad',
  /** Label for unsharing a query */
  'action.unshare': 'Sluta dela',
  /** Label for updating a query */
  'action.update': 'Uppdatera',

  /** Label for actions user can take */
  'label.actions': 'Åtgärder',
  /** Label for all saved queries */
  'label.all': 'Alla',
  /** Label for saved queries that have been edited */
  'label.edited': 'Redigerad',
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Ny',
  /** Label for query type "personal" */
  'label.personal': 'Personlig',
  /** Label for savedAt date */
  'label.saved-at': 'Sparad den',
  /** Saved queries */
  'label.saved-queries': 'Sparade frågor',
  /** Search queries */
  'label.search-queries': 'Sök frågor',
  /** Share query */
  'label.share': 'Dela',
  /** Label for query type "shared" */
  'label.shared': 'Delad',
  /** Label for saved query type "team" */
  'label.team': 'Team',
  /** Label for untitled query fallback */
  'label.untitled-query': 'Namnlös',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'Parametrarna är inte giltig JSON',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Parametrar',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Kolumn',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Rad',
  /** Extra explanation when a 400 is returned for a release perspective on an old API version */
  'query.error.unsupported-release-perspective':
    'Den här API-versionen stöder inte komplexa perspektiv. Använd {{apiVersion}} eller senare.',
  /** Extra explanation when a 400 is returned for a variant on an incompatible API version */
  'query.error.unsupported-variant':
    'Den här API-versionen stöder inte innehållsvarianter. Använd den experimentella API-versionen ({{apiVersion}}).',
  /** Label for "Query" editor/input */
  'query.label': 'Förfrågan',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'Förfrågnings-URL',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'End-to-end',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'Exekvering',
  /** Label for "Result" explorer/view */
  'result.label': 'Resultat',
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable': 'Resultatet kan inte kodas som CSV',
  /** Label for "Save result as" result action */
  'result.save-result-as-format': 'Spara resultat som <SaveResultButtons/>',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'ej tillämplig',

  /** Query already saved error label */
  'save-query.already-saved': 'Frågan är redan sparad',
  /** Save error label */
  'save-query.error': 'Fel vid sparning av fråga',
  /** Save personal copy success label */
  'save-query.personal-copy-success': 'Personlig kopia sparad',
  /** Warning displayed before sharing a query */
  'save-query.share-warning':
    'Delade frågor lagras som dokument i ditt dataset och räknas mot din dokumentkvot.',
  /** Save shared query success label */
  'save-query.shared-success': 'Delad fråga sparad',
  /** Save success label */
  'save-query.success': 'Frågan sparad',
  /** Save unshared query success label */
  'save-query.unshared-success': 'Fråga flyttad till personlig',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'API-version',
  /** Tooltip shown when the API version selector is locked to vX because a variant is selected */
  'settings.api-version-locked-for-variant': 'När en variant är vald måste API-versionen vara vX.',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'Anpassad API-version',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Dataset',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'Ogiltig API-version',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'Annat',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspektiv',
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    'Perspektivet "<code>previewDrafts</code>" har bytt namn till "<code>drafts</code>" och är nu inaktuellt. Denna ändring gäller för alla versioner med stöd för perspektiv (>= v2021-03-25).',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Läs dokumentationen',
  /** Option for selecting default perspective */
  'settings.perspectives.default': 'Inget perspektiv (API-standard)',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Perspektiv låter din förfrågan köras mot olika "vyer" av innehållet i ditt dataset',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    'Standardperspektivet kommer att ändras från "<code>raw</code>" till "<code>published</code>" i en kommande API-version. Vänligen se dokumentationen för mer detaljer.',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': 'pinnad release',
  /** Label for the scheduled drafts perspective */
  'settings.perspectives.scheduled-drafts': 'Schemalagda utkast',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspektiv',

  /** Tooltip line of every control that calls Sanity Agent Actions, which bills AI credits */
  'vista.agent-actions.credits': 'Använder en AI-kredit per begäran',
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vista.ai-credits.balance': '{{balance}} av {{quota}} AI-krediter kvar denna månad.',
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vista.ai-credits.deficit':
    '{{used}} AI-krediter använda denna månad, {{deficit}} fler än de {{quota}} som ingår.',
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vista.ai-credits.limit.description':
    'Din organisation har använt {{used}} av sina {{quota}} AI-krediter denna månad, så Sanity Agent Actions är pausade till nästa månad eller tills utgiftsgränsen höjs.',
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vista.ai-credits.limit.description-unknown':
    'Din organisation har nått sin utgiftsgräns för AI-krediter, så Sanity Agent Actions är pausade till nästa månad eller tills gränsen höjs.',
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vista.ai-credits.limit.learn-more': 'Så fungerar AI-krediter',
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vista.ai-credits.limit.manage': 'Hantera AI-krediter',
  /** Title of the card shown where the organization is out of AI credits */
  'vista.ai-credits.limit.title': 'Inga AI-krediter kvar',
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vista.ai-credits.usage': 'AI-användning',
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vista.ai-credits.used': '{{used}} AI-krediter använda denna månad.',
  /** Button in the request column's action bar naming the API version requests go out with */
  'vista.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vista.api-version.button-cdn': 'API CDN {{version}}',
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vista.api-version.button-invalid': 'Ofullständig API-version',
  /** Tooltip of the API version button */
  'vista.api-version.tooltip':
    'Frågor körs mot API-version {{version}}. Välj för att ändra den i Alternativ.',
  /** Tooltip of the API version button while queries go through the API CDN */
  'vista.api-version.tooltip-cdn':
    'Frågor körs mot API CDN med API-version {{version}}. Välj för att ändra den i Alternativ.',
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vista.api-version.tooltip-cdn-blocked':
    'Frågor körs mot API:et med API-version {{version}}, inte API CDN: det betjänar inte perspektivet {{perspective}}. Välj för att ändra den i Alternativ.',
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vista.api-version.tooltip-invalid':
    'API-versionen i Alternativ är ofullständig, så inget kan hämtas förrän den är klar.',
  /** Tooltip of the API version button while a selected variant forces the experimental API */
  'vista.api-version.tooltip-locked':
    'Frågor körs mot API-version {{version}}, vilket den valda varianten kräver.',
  /** Label of the document after the change in the Delta panel */
  'vista.delta.after': 'Efter',
  /** Label of the document before the change in the Delta panel */
  'vista.delta.before': 'Före',
  /** What the Delta panel does */
  'vista.delta.description':
    'Kör frågan i deltaläge, som GROQ-drivna webhooks, lyssnare och Sanity Functions gör: before() och after() är ett dokument före och efter en ändring, @ är dokumentet efter den, och delta::changedAny() jämför dem. Den körs i webbläsaren med groq-js. En tom sida betyder inget dokument: ändringen skapar eller raderar det.',
  /** Label of the document ID field in the Delta panel */
  'vista.delta.document-id': 'Dokument-ID',
  /** Shown when there is a query but no documents to compare */
  'vista.delta.empty': 'Läs in ett dokuments historik, eller skriv dokumenten i Före och Efter.',
  /** Shown when the query fails in delta mode */
  'vista.delta.failed': 'Frågan kunde inte köras i deltaläge: {{message}}',
  /** Shown when the After document is not valid JSON */
  'vista.delta.invalid-after': 'Efter är inte giltig JSON: {{message}}',
  /** Shown when the Before document is not valid JSON */
  'vista.delta.invalid-before': 'Before är inte giltig JSON: {{message}}',
  /** Button loading the document's revisions from the History API */
  'vista.delta.load': 'Läs in historik',
  /** Shown when the history could not be loaded */
  'vista.delta.load-failed': 'Historiken kunde inte läsas in: {{message}}',
  /** A delta filter that is true for the change */
  'vista.delta.matches':
    'Matchar: en webhook eller funktion med det här filtret körs för den här ändringen.',
  /** A delta filter that is false for the change */
  'vista.delta.no-match':
    'Matchar inte: en webhook eller funktion med det här filtret körs inte för den här ändringen.',
  /** Shown while the query or its params cannot be sent */
  'vista.delta.no-request': 'Åtgärda frågan och dess parametrar för att köra den i deltaläge.',
  /** Heading of the delta result */
  'vista.delta.result': 'Resultat',
  /** The After choice for a change that deletes the document */
  'vista.delta.revision.none-after': 'Inget: ändringen tar bort dokumentet',
  /** The Before choice for a change that creates the document */
  'vista.delta.revision.none-before': 'Inget: ändringen skapar dokumentet',
  /** A revision in the Before and After lists */
  'vista.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vista.drawer.close': 'Stäng panel',
  /** Explanation at the top of the Explain panel */
  'vista.explain.description':
    'Frågeplanen är hur Content Lake kör frågan: vad den läser, filtrerar och sorterar under läsningen, och vad som lämnas till senare steg. Förklara det här för mig låter Sanity Agent Actions beskriva frågan och dess plan i klartext, vilket använder en AI-krediter.',
  /** Shown in the Explain panel while there is no valid query to explain */
  'vista.explain.empty': 'Skriv en fråga för att förklara den.',
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vista.explain.explain': 'Förklara det här för mig',
  /** Shown when the explanation could not be written */
  'vista.explain.failed': 'Frågan kunde inte förklaras: {{message}}',
  /** A count the index computes without reading the documents */
  'vista.explain.insight.aggregate': 'Räknat i indexet, utan att läsa dokumenten.',
  /** A subquery the plan runs once for all documents */
  'vista.explain.insight.batched-subquery':
    'Underfrågan körs en gång för alla dokument, i en enda satsvis hämtning, inte en gång per dokument.',
  /** Part of the filter runs in memory; the expression follows */
  'vista.explain.insight.filter-in-memory':
    'Delar av filtret körs i minnet, efter läsning: varje dokument som indexet släpper igenom läses först, vilket blir långsamt på stora dataset. Kopplingar (->) och funktioner i ett filter kan inte använda indexet.',
  /** The index sorts and limits while reading */
  'vista.explain.insight.index-sort-limit':
    'Indexet sorterar och begränsar dokumenten medan de läses.',
  /** The plan slices in memory */
  'vista.explain.insight.slice-in-memory':
    'Urvalet görs i minnet efter läsning, inte som en gräns under läsningen.',
  /** The plan sorts in memory */
  'vista.explain.insight.sort-in-memory':
    'Sortering sker i minnet, efter att varje träff har lästs in. Sortera efter attribut som indexet kan sortera efter.',
  /** Link under the plan insights to the guide on fast queries */
  'vista.explain.insights.guide': 'Högpresterande GROQ',
  /** Heading of the plan insights in the Explain panel */
  'vista.explain.insights.title': 'Vad som sticker ut',
  /** Button in the Explain panel fetching the query plan */
  'vista.explain.plan': 'Visa frågeplanen',
  /** Shown when the query plan could not be fetched */
  'vista.explain.plan-failed': 'Frågeplanen kunde inte hämtas: {{message}}',
  /** Heading of the query plan in the Explain panel */
  'vista.explain.plan-title': 'Frågeplan',
  /** Toast shown after a code snippet was copied */
  'vista.export-query.copied': 'Kodsnutt kopierad till urklipp',
  /** Label for the button that copies a code snippet */
  'vista.export-query.copy': 'Kopiera kodsnutt',
  /** Explanation at the top of the export query dialog */
  'vista.export-query.description':
    'Kör den här frågan utanför studion med en av dessa kodsnuttar.',
  /** Title of the dialog that exports the query as code snippets */
  'vista.export-query.title': 'Exportera fråga',
  /** Note about authentication in the export query dialog */
  'vista.export-query.token-note':
    'Privata dataset behöver en API-token. Publika dataset kan utelämna Authorization-headern.',
  /** Toast shown after the generated code was copied */
  'vista.export-types.copied': 'Kod kopierad till urklipp',
  /** Label for the button that copies the generated code */
  'vista.export-types.copy': 'Kopiera kod',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vista.export-types.empty':
    'Hämta frågan först så att det finns ett resultat att härleda typer från.',
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vista.export-types.schema-error': 'Schemautvärdering misslyckades: {{message}}',
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vista.export-types.source.result':
    'Härledd från det hämtade resultatet, eftersom frågan inte kunde utvärderas mot arbetsytans schema.',
  /** Note shown when the types were derived from the workspace schema */
  'vista.export-types.source.schema':
    'Härledd från arbetsytans schema, på samma sätt som sanity typegen gör det.',
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vista.export-types.stale-result':
    'Resultatet som visas hämtades för en annan fråga eller andra parametrar. Hämta den aktuella frågan först så att det finns ett resultat att härleda typer från.',
  /** Title of the dialog exporting TypeScript types for the result */
  'vista.export-types.title-typescript': 'Exportera TypeScript',
  /** Title of the dialog exporting a Zod schema for the result */
  'vista.export-types.title-zod': 'Exportera Zod',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vista.functions.add': 'Lägg till i fråga',
  /** Shown on a library function the query declares the same way */
  'vista.functions.declared': 'I denna fråga',
  /** Lint action on a call of a library function the query does not declare */
  'vista.functions.editor.add-from-library': 'Deklarera den',
  /** Note in a function's hover documentation: the API version it needs */
  'vista.functions.editor.api-version': 'Kräver API-version {{version}} eller senare',
  /** Detail of a completion for a custom function the query declares */
  'vista.functions.editor.completion-declared': 'i denna fråga',
  /** Detail of a completion for a library function, which declares it too */
  'vista.functions.editor.completion-library': 'från ditt bibliotek',
  /** Note in the hover documentation of a custom function the query declares */
  'vista.functions.editor.declared-on': 'Anpassad funktion, deklarerad på rad {{line}}',
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vista.functions.editor.delta-only':
    'Fungerar endast i deltaläge, där webhooks och Sanity Functions kör sina filter',
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vista.functions.editor.extract': 'Extrahera till funktion',
  /** Note in the hover documentation of a library function the query does not declare */
  'vista.functions.editor.in-library': 'I ditt funktionsbibliotek, inte deklarerad i denna fråga',
  /** Link at the end of a built-in function's hover documentation */
  'vista.functions.editor.reference': 'Referens för GROQ-funktioner',
  /** Explanation under the library heading in the Functions panel */
  'vista.functions.library.description':
    'Sparas i denna webbläsare för varje dataset i projektet. Dessa funktioner erbjuds i autokomplettering, och lint föreslår att deklarera en som frågan anropar.',
  /** Shown in the Functions panel while the library is empty */
  'vista.functions.library.empty':
    'Spara en funktion som frågan deklarerar för att använda den i andra frågor.',
  /** Heading of the functions library in the Functions panel */
  'vista.functions.library.title': 'Bibliotek',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vista.functions.query.empty':
    'Deklarera anpassade funktioner högst upp i frågan, eller placera markören i en projektion, som author->{name}, och tryck på extraheringsknappen ovanför editorn ({{shortcut}}).',
  /** Heading of the functions the query declares in the Functions panel */
  'vista.functions.query.title': 'I denna fråga',
  /** Removes a function from the library */
  'vista.functions.remove': 'Ta bort från biblioteket',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vista.functions.replace': 'Ersätt i frågan',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vista.functions.reveal': 'Visa {{name}} i editorn',
  /** Button of a function the query declares that is not in the library yet */
  'vista.functions.save': 'Spara till biblioteket',
  /** Shown on a function the query declares the way the library has it */
  'vista.functions.saved': 'Sparad',
  /** Button of a function the query declares differently from the library's version */
  'vista.functions.update': 'Uppdatera biblioteket',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vista.generate.button': 'Generera fråga',
  /** Closes the generate query bar */
  'vista.generate.close': 'Stäng',
  /** Explanation under the generate query field */
  'vista.generate.description':
    'Sanity Agent Actions skriver GROQ utifrån din beskrivning och dokumenttyperna, och Content Lake kontrollerar varje försök; varje försök använder en AI-kredit. Det ersätter frågan i denna flik och kör den; ångra i editorn återställer föregående fråga.',
  /** Shown when no query could be generated, above the reason */
  'vista.generate.failed': 'Frågan kunde inte genereras',
  /** Accessible label of the description field in the generate query bar */
  'vista.generate.label': 'Vad ska frågan hämta?',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vista.generate.open-anyway': 'Öppna det senaste försöket',
  /** Placeholder of the description field in the generate query bar */
  'vista.generate.placeholder':
    'De 10 senaste författarna, sorterade efter efternamn och sedan förnamn',
  /** Shown while the first attempt at a query is written */
  'vista.generate.progress': 'Skriver frågan…',
  /** Shown while a rejected attempt is retried */
  'vista.generate.progress-retry': 'Fixar frågan (försök {{attempt}} av {{max}})…',
  /** Button generating the query */
  'vista.generate.submit': 'Generera',
  /** Badge on a history entry the API CDN answered */
  'vista.history.cdn': 'API-CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vista.history.cdn-cache-hit': 'CDN-cacheträff',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vista.history.changed': 'Ändrad',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vista.history.changes': 'Ändringar',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vista.history.changes-failed': 'Ändringarna kunde inte visas.',
  /** Button retrying to show the changes of a history entry */
  'vista.history.changes-retry': 'Försök igen',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vista.history.compared-with': 'Jämförd med hämtningen kl. {{time}}',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vista.history.diff.params': 'Parametrar',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vista.history.diff.query': 'Fråga',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vista.history.diff.query-formatting-only': 'Endast formateringen ändrades',
  /** Label of the diff of the query result in a history entry's changes */
  'vista.history.diff.result': 'Resultat',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vista.history.diff.url': 'Förfråknings-URL',
  /** Empty state of the history panel */
  'vista.history.empty': 'Inget hämtat än',
  /** Status label for a failed fetch in the history */
  'vista.history.failed': 'Misslyckades',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vista.history.hide-hidden': 'Dölj dem',
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vista.history.hiding': 'Döljer {{fields}}',
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vista.history.only-hidden-changed': 'Endast dolda fält ändrades',
  /** History reason: a tab opened with a generated query fetched it */
  'vista.history.reason.generated': 'Genererad fråga',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vista.history.reason.link': 'Öppnad länk',
  /** History reason: a live event matched the query's sync tags */
  'vista.history.reason.live': 'Direktuppdatering',
  /** History reason: the live connection asked every client to refetch */
  'vista.history.reason.live-restart': 'Live-anslutningen startades om',
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vista.history.reason.live-start': 'Live-hämtning startad',
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vista.history.reason.load': 'Fråga laddad',
  /** History reason: the fetch button was pressed */
  'vista.history.reason.manual': 'Hämta-knapp',
  /** History reason: mutations were applied from the Mutate panel */
  'vista.history.reason.mutation': 'Ändringar tillämpade',
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vista.history.reason.options': 'Alternativ ändrades',
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vista.history.reason.paste': 'Inklistrad URL',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vista.history.reason.resume': 'Automatisk omhämtning återupptagen',
  /** History reason: the keyboard shortcut was used */
  'vista.history.reason.shortcut': 'Tangentbordsgenväg',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vista.history.same-result': 'Samma resultat',
  /** Button showing the hidden fields in a history entry's changes */
  'vista.history.show-hidden': 'Visa dem',
  /** Next to a history entry's changes while the hidden fields are shown */
  'vista.history.showing-hidden': 'Visar {{fields}}, dolda som standard',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vista.history.too-large': 'För stort för att jämföra',
  /** A history entry whose result is the same as the previous result */
  'vista.history.unchanged': 'Inga ändringar',
  /** Shown in the Lint panel while the query has no lint findings */
  'vista.lint.empty':
    'Inga lint-fynd. Problem som GROQ-linter upptäcker i frågan listas här medan du skriver; välj ett för att markera det i editorn.',
  /** Where a lint finding sits in the query, shown under its message */
  'vista.lint.position': 'Rad {{line}}, kolumn {{column}}',
  /** Severity badge of a lint finding */
  'vista.lint.severity.error': 'Fel',
  /** Severity badge of a lint finding */
  'vista.lint.severity.hint': 'Tips',
  /** Severity badge of a lint finding */
  'vista.lint.severity.info': 'Info',
  /** Severity badge of a lint finding */
  'vista.lint.severity.warning': 'Varning',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vista.lint.use-suggestion': 'Använd {{suggestion}}',
  /** Badge shown while a tab refetches automatically */
  'vista.live.active': 'Live',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vista.live.button': 'Live-hämtning',
  /** Tooltip of the Live button while automatic refetching is off */
  'vista.live.button.start': 'Hämta, och hämta sedan igen när dokumenten i resultatet ändras',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vista.live.button.stop':
    'Sluta hämta när dokumenten i resultatet ändras. Hämta fungerar fortfarande vid behov, för resultat som ingen dokumentändring påverkar, som now()',
  /** Error shown when the live connection breaks */
  'vista.live.error': 'Live-uppdateringar frånkopplade: {{message}}',
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vista.live.stop': 'Stoppa live',
  /** Button in the Mutate panel adding a mutation to the list */
  'vista.mutate.add': 'Lägg till mutation',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vista.mutate.add.create': 'Skapa ett dokument',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vista.mutate.add.delete': 'Ta bort ett dokument',
  /** Adds a mutation deleting the documents of the shown result */
  'vista.mutate.add.delete-result': 'Ta bort dokumenten i resultatet',
  /** Adds a mutation patching a document, its ID to fill in */
  'vista.mutate.add.patch': 'Patcha ett dokument',
  /** Adds a mutation patching the documents of the shown result */
  'vista.mutate.add.patch-result': 'Patcha dokumenten i resultatet',
  /** Button applying the mutations a dry run showed */
  'vista.mutate.apply': 'Tillämpa på {{dataset}}',
  /** Heading of the error shown when applying the mutations failed */
  'vista.mutate.apply-failed': 'Mutationerna tillämpades inte',
  /** Next to Apply while the mutations as they are have had no dry run */
  'vista.mutate.apply-needs-preview': 'Tillämpa skickar det en testkörning visade: kör en först.',
  /** Option giving array items without a _key one */
  'vista.mutate.auto-keys': 'Lägg till en _key på array-objekt som saknar en',
  /** Under the option giving array items a _key */
  'vista.mutate.auto-keys.description':
    'Studion behöver en på varje array-objekt för att redigera det.',
  /** Button showing a document's changes in the dry run */
  'vista.mutate.changes': 'Ändringar',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vista.mutate.changes-failed': 'Ändringarna kunde inte visas.',
  /** Button retrying to show a document's changes */
  'vista.mutate.changes-retry': 'Försök igen',
  /** What the Mutate panel does */
  'vista.mutate.description':
    'Skriv mutationer som Mutations API tar emot dem, i en lista: create, createOrReplace, createIfNotExists, delete och patch, efter ID eller efter en GROQ-fråga. En testkörning visar vad de skulle göra med varje dokument utan att ändra något; Tillämpa skriver dem sedan till datasetet i en transaktion, med ditt konto.',
  /** What the API says went wrong with one of the mutations */
  'vista.mutate.failure-item': 'Mutation {{index}}: {{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vista.mutate.generate.button': 'Generera mutationer',
  /** Explanation under the generate mutations field */
  'vista.mutate.generate.description':
    'Sanity Agent Actions skriver mutationerna utifrån din beskrivning, dokumenten i resultatet och deras typer, och en testkörning kontrollerar varje försök; varje försök använder en AI-kredit. De ersätter mutationerna här, där ångra tar tillbaka dessa; inget skrivs förrän du tillämpar dem.',
  /** Shown when no mutations could be generated, above the reason */
  'vista.mutate.generate.failed': 'Mutationerna kunde inte genereras',
  /** Accessible label of the description field in the generate mutations bar */
  'vista.mutate.generate.label': 'Vad ska mutationerna göra?',
  /** Placeholder of the description field in the generate mutations bar */
  'vista.mutate.generate.placeholder': 'Ändra titeln på dokumenten i resultatet till foobar',
  /** Shown while the first attempt at the mutations is written */
  'vista.mutate.generate.progress': 'Skriver mutationerna…',
  /** Shown while an attempt the dry run turned down is retried */
  'vista.mutate.generate.progress-retry': 'Fixar mutationerna (försök {{attempt}} av {{max}})…',
  /** Under the dry run: the fields the diffs leave out */
  'vista.mutate.hiding': 'Ändringarna utelämnar {{fields}}, precis som History gör.',
  /** Shown when the mutations are not valid JSON */
  'vista.mutate.invalid-json': 'Mutationerna är inte giltig JSON: {{message}}',
  /** Shown when a mutation does not name exactly one thing to do */
  'vista.mutate.invalid-mutation':
    'Mutation {{index}} behöver exakt en av create, createOrReplace, createIfNotExists, delete eller patch.',
  /** Label of the mutations editor */
  'vista.mutate.mutations': 'Mutationer',
  /** The dry run touched no documents */
  'vista.mutate.no-documents': 'Mutationerna berör inga dokument.',
  /** Shown when the JSON is not a list of mutations */
  'vista.mutate.not-a-list':
    'Skriv en lista med mutationer, en enskild mutation, eller en förfrågningstext med en lista av mutationer.',
  /** A document the mutations create */
  'vista.mutate.operation.create': 'Skapa',
  /** A document the mutations delete */
  'vista.mutate.operation.delete': 'Radera',
  /** A document the mutations touch without changing its content */
  'vista.mutate.operation.none': 'Ingen ändring',
  /** A document the mutations change */
  'vista.mutate.operation.update': 'Uppdatera',
  /** Button running the mutations as a dry run */
  'vista.mutate.preview': 'Testkörning',
  /** Heading of the error shown when the dry run failed */
  'vista.mutate.preview-failed': 'Testkörningen misslyckades',
  /** Heading of the dry run's outcome */
  'vista.mutate.preview-heading': 'Testkörning',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vista.mutate.stale':
    'Mutationerna, datasetet eller alternativen ändrades efter denna testkörning. Kör den igen för att tillämpa dem.',
  /** How many documents the dry run changes and leaves as they are */
  'vista.mutate.summary': 'Ändrade: {{changed}} · Oförändrade: {{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vista.network.cache': 'Cache',
  /** The API CDN answered from its cache */
  'vista.network.cache.hit': 'Träff',
  /** Under the details of a CDN cache hit */
  'vista.network.cache.hit-explained':
    'CDN:et svarade med ett svar det hade cachat, från en plats nära dig; frågan nådde aldrig API:et.',
  /** The API CDN answered with a response this session had not seen */
  'vista.network.cache.miss': 'Miss, så vitt denna session kan avgöra',
  /** The API answered, which caches nothing */
  'vista.network.cache.none': 'Ingen, API:et svarar på varje begäran med färskt innehåll',
  /** Shown in the Network panel while there is no response */
  'vista.network.empty':
    'Hämta frågan för att se vilken slutpunkt som svarade på den, om det var från en cache, och var den kördes.',
  /** In the Network panel: the endpoint that answered */
  'vista.network.endpoint': 'Besvarades av',
  /** The live API answered */
  'vista.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vista.network.endpoint.cdn': 'API CDN',
  /** In the Network panel: the region the query ran in */
  'vista.network.region': 'Frågan kördes i',
  /** The response did not say where the query ran */
  'vista.network.region.unknown': 'Ej rapporterad',
  /** In the Network panel: the round trip and the time on the server */
  'vista.network.timing': 'Tid',
  /** The round trip and the server's time for the query, in milliseconds */
  'vista.network.timing.value': '{{e2e}}ms tur och retur, {{server}}ms på servern',
  /** In the Network panel: the trace of the request, for Sanity support */
  'vista.network.trace': 'Spårnings-ID',
  /** Hint in the Network panel while queries go to the API */
  'vista.network.use-cdn-hint':
    'Slå på Använd API CDN i Alternativ för att skicka frågor genom CDN:et.',
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vista.network.you': 'Du',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vista.options.dataset.follows-workspace': 'Följer arbetsytan',
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vista.options.dataset.pin': 'Fäst ett dataset',
  /** Hint under the dataset field while a dataset is pinned */
  'vista.options.dataset.pinned': 'Fäst; arbetsytan kan använda ett annat dataset',
  /** Button that makes the tab follow the workspace's dataset again */
  'vista.options.dataset.use-workspace': 'Använd arbetsytans dataset',
  /** Label for the "Include content source map" switch */
  'vista.options.include-source-map': 'Inkludera källkarta för innehåll',
  /** Description for the "Include content source map" switch */
  'vista.options.include-source-map.description':
    'Lägger till resultSourceMap i svaret, visas i fliken Content Source Map.',
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vista.options.perspective.global': 'Global ({{name}})',
  /** Label of the switch that sends queries to the API CDN */
  'vista.options.use-cdn': 'Använd API CDN',
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vista.options.use-cdn.anonymous':
    'Denna studio loggar in dig med en cookie, som API CDN aldrig tar emot: den svarar som den skulle göra för en anonym besökare, med det som ett publikt dataset visar.',
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vista.options.use-cdn.blocked':
    'API CDN serverar inte utkast eller releaser, så frågor med perspektivet {{perspective}} går till API:et. Med published eller raw används CDN.',
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vista.options.use-cdn.blocked.title': 'Frågor går till API:et, inte CDN:et',
  /** Description of the API CDN switch */
  'vista.options.use-cdn.description':
    'Skickar frågan till API CDN, likt useCdn: true i @sanity/client, med perspektiven published och raw: utkast och releaser går alltid till API:et. Svaren cachas i upp till en minut; panelen Network visar när ett svar kom från cachen.',
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vista.options.use-cdn.use-published': 'Använd perspektivet published',
  /** Label of the variant field */
  'vista.options.variant-label': 'Variant',
  /** Variant option sending the navbar's variant, named */
  'vista.options.variant.global': 'Global ({{name}})',
  /** Variant option sending the navbar's variant while none is selected there */
  'vista.options.variant.global-none': 'Global (ingen vald)',
  /** Variant option sending no variant */
  'vista.options.variant.none': 'Ingen',
  /** Accessible label for collapsing a bottom panel */
  'vista.panel.collapse': 'Fäll ihop panel',
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vista.panel.delta': 'Delta',
  /** Accessible label for expanding a bottom panel */
  'vista.panel.expand': 'Expandera panel',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vista.panel.explain': 'Förklara',
  /** Label of the Functions tab in the response panel */
  'vista.panel.functions': 'Funktioner',
  /** Label of the "History" tab in the response panel */
  'vista.panel.history': 'Historik',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vista.panel.lint': 'Lint',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vista.panel.mutate': 'Mutera',
  /** Label of the Network tab in the response panel */
  'vista.panel.network': 'Nätverk',
  /** Label of the "Options" panel in the request column */
  'vista.panel.options': 'Alternativ',
  /** Label of the "Response" tab in the response panel */
  'vista.panel.response': 'Svar',
  /** Label of the "Content Source Map" tab in the response panel */
  'vista.panel.source-map': 'Innehållskälla-karta',
  /** Button adding an item to a list param in the params form */
  'vista.params-form.add-item': 'Lägg till objekt',
  /** Placeholder of a params form field that takes any JSON value */
  'vista.params-form.any-placeholder': 'Valfritt JSON-värde; annan text skickas som en sträng',
  /** Shown in the params form when the query uses no params */
  'vista.params-form.empty': 'Frågan använder inga parametrar. Varje $namn i den får ett fält här.',
  /** Shown in the params form while the params JSON cannot be parsed */
  'vista.params-form.invalid-json':
    'Parametrarna är inte giltig JSON. Åtgärda dem i JSON-vyn för att redigera dem här.',
  /** A boolean param's value is not true or false; it is sent anyway */
  'vista.params-form.invalid.boolean': 'Varken sant eller falskt; skickas som {{value}}',
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vista.params-form.invalid.document-type': 'Inte en dokumenttyp i denna arbetsyta; skickas ändå',
  /** A whole number param (a slice bound) holds a fraction */
  'vista.params-form.invalid.integer': 'Inte ett heltal, vilket segment kräver',
  /** A list param's value is not a list; it is sent anyway */
  'vista.params-form.invalid.list': 'Inte en lista; skickas som {{value}}',
  /** A number param's value is not a number; it is sent anyway */
  'vista.params-form.invalid.number': 'Inte ett nummer; skickas som text',
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vista.params-form.invalid.option': 'Inte ett av de kända värdena; skickas ändå',
  /** A text param's value is not text; it is sent anyway */
  'vista.params-form.invalid.string': 'Inte text; skickas som {{value}}',
  /** Accessible label of an item input of a list param in the params form */
  'vista.params-form.item-label': '${{name}}, objekt {{index}}',
  /** Placeholder of an item input of a list param in the params form */
  'vista.params-form.item-placeholder': 'Objekt',
  /** Under a params form field whose param has no value */
  'vista.params-form.missing': 'Ej angivet: frågan misslyckas tills den har ett värde',
  /** Shown in the params form when the workspace schema could not be read */
  'vista.params-form.no-schema':
    'Typer kommer endast från frågan: arbetsytans schema kunde inte läsas.',
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vista.params-form.not-set': 'Ej angivet',
  /** Button setting a date and time param to the current time */
  'vista.params-form.now': 'Nu',
  /** Button removing a param the query does not use from the params */
  'vista.params-form.remove': 'Ta bort',
  /** Accessible label of the button removing an item from a list param */
  'vista.params-form.remove-item': 'Ta bort objekt',
  /** Shown in the params form when the query does not parse */
  'vista.params-form.syntax-error': 'Frågan kan inte tolkas, så dess parametrar listas utan typer.',
  /** Type hint of a params form field: any JSON value */
  'vista.params-form.type.any': 'valfritt JSON-värde',
  /** Type hint of a params form field: true or false */
  'vista.params-form.type.boolean': 'sant eller falskt',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vista.params-form.type.datetime': 'datum och tid (ISO 8601)',
  /** Type hint of a params form field: a document ID */
  'vista.params-form.type.document-id': 'dokument-ID',
  /** Type hint of a params form field: one of the workspace's document types */
  'vista.params-form.type.document-type': 'dokumenttyp',
  /** Type hint of a params form field: a whole number */
  'vista.params-form.type.integer': 'heltal',
  /** Type hint of a params form field: a list of values */
  'vista.params-form.type.list': 'lista, varje {{type}}',
  /** Type hint of a params form field: a number */
  'vista.params-form.type.number': 'tal',
  /** Type hint of a params form field: text */
  'vista.params-form.type.string': 'text',
  /** Heading of the params the query does not use, listed in the params form */
  'vista.params-form.unused': 'Används inte av frågan',
  /** Before the expressions that use a param, in the params form */
  'vista.params-form.used-in': 'Används i',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vista.params.fit-height': 'Anpassad till innehållet, {{height}} pixlar',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vista.params.resize':
    'Ändra storlek på parametrar: dra eller använd piltangenterna; dubbelklicka eller tryck på Enter för att anpassa till innehållet igen',
  /** Tab showing the params as a form inferred from the query */
  'vista.params.view.form': 'Formulär',
  /** Tab showing the params as JSON */
  'vista.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vista.params.view.label': 'Redigera parametrar som',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vista.paste.parsed': 'Fråga inläst från inklistrad URL',
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vista.paste.unavailable-variant':
    'Den inklistrade URL:en använde varianten "{{variant}}"; välj den i navigeringsfältet för att köra frågan med den.',
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vista.paste.unknown-dataset':
    'Datasetet "{{dataset}}" i den inklistrade URL:en är inte tillgängligt här, behåller det aktuella.',
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vista.paste.unsupported-perspective':
    'Perspektivet i den inklistrade URL:en stöds inte här, behåller det aktuella.',
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vista.paste.variants-disabled':
    'Den inklistrade URL:en använde varianten "{{variant}}"; den här arbetsytan har varianter avstängda, så frågan körs utan den.',
  /** Accessible label for the query actions menu */
  'vista.query.actions': 'Frågeåtgärder',
  /** Tooltip when automatic refetching is not available for the API version */
  'vista.query.auto-refetch.unsupported':
    'Automatisk omhämtning kräver API-version v2021-03-25 eller senare.',
  /** Toast shown after the query was copied */
  'vista.query.copied': 'Frågan kopierad till urklipp',
  /** Menu item copying the query text */
  'vista.query.copy': 'Kopiera fråga',
  /** Menu item opening the export query dialog */
  'vista.query.export': 'Exportera fråga…',
  /** Menu item reformatting the query */
  'vista.query.prettify': 'Snygga till fråga',
  /** Toast shown when the query could not be reformatted */
  'vista.query.prettify.failed': 'Kunde inte snygga till frågan',
  /** Menu item saving the query to the personal saved queries */
  'vista.query.save': 'Spara fråga',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vista.query.stop': 'Stoppa',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vista.query.stop.description': 'Stoppa hämtning',
  /** Explanation in the settings section about the redesigned experience */
  'vista.redesign.settings.description':
    'Du använder den omdesignade Vision-verktyget. Om du växlar tillbaka behålls dina flikar och inställningar i den här webbläsaren till nästa gång du provar det.',
  /** Title of the settings section about the redesigned experience */
  'vista.redesign.settings.title': 'Omdesignad Vision (beta)',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vista.redesign.switch-to-classic': 'Växla till klassisk Vision',
  /** Toast button that switches to the redesigned tool */
  'vista.redesign.toast.accept': 'Prova nu',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.description':
    'Frågeflikar, live-omhämtning, svarsdetaljer och exporter. Du kan växla tillbaka när som helst.',
  /** Toast button that hides the invitation */
  'vista.redesign.toast.dismiss': 'Inte nu',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.title': 'Prova den omdesignade Vision',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vista.redesign.try': 'Prova omdesignen',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vista.redesign.try.description':
    'Växla till den omdesignade Vision, i beta. Du kan växla tillbaka när som helst från dess sidofält.',
  /** Empty state of the response panel before anything was fetched */
  'vista.response.empty': 'Inget hämtat än',
  /** Label for the payload size in the response tab */
  'vista.response.payload-size': 'Nyttolaststorlek',
  /** Label for the sync tags in the response tab */
  'vista.response.sync-tags': 'Synkroniseringstaggar',
  /** Shown when the response carried no sync tags */
  'vista.response.sync-tags.none': 'Inga synkroniseringstaggar i svaret',
  /** Accessible label for the result actions menu */
  'vista.result.actions': 'Resultatåtgärder',
  /** Toast shown after the result was copied */
  'vista.result.copied': 'Resultat kopierat till urklipp',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vista.result.copied-value': 'Kopierade {{path}}',
  /** Menu item and button copying the result as JSON */
  'vista.result.copy': 'Kopiera resultat',
  /** Button next to each property in the result tree, copying its value */
  'vista.result.copy-value': 'Kopiera värde',
  /** Empty state of the result view */
  'vista.result.empty': 'Kör frågan för att se dess resultat här',
  /** Button exporting the result as CSV */
  'vista.result.export-csv': 'Exportera CSV',
  /** Button exporting the result as JSON */
  'vista.result.export-json': 'Exportera JSON',
  /** Menu item opening the TypeScript export dialog */
  'vista.result.export-typescript': 'Exportera TypeScript…',
  /** Menu item opening the Zod export dialog */
  'vista.result.export-zod': 'Exportera Zod…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vista.result.graph.collapse': 'Dölj det den innehåller',
  /** Button fitting the whole graph in view */
  'vista.result.graph.fit': 'Anpassa till vyn',
  /** Accessible label of the graph, saying how to move around in it */
  'vista.result.graph.label':
    'Resultatgraf: dra för att flytta, scrolla för att zooma; när den är fokuserad flyttar piltangenterna, + och - zoomar, 0 anpassar',
  /** Ends the note on a graph that leaves part of this result out */
  'vista.result.graph.left-out-hint': 'Träd- och JSON-vyerna visar allt.',
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vista.result.graph.node-limit': 'Endast de första {{nodes}} objekten och arrayerna ritas.',
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vista.result.graph.partial': 'Endast de första {{rows}} posterna listas för {{nodes}}.',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vista.result.graph.partial.node': '{{name}} ({{entries}} poster)',
  /** Title of the graph node of the result itself */
  'vista.result.graph.root': 'resultat',
  /** Button zooming into the graph */
  'vista.result.graph.zoom-in': 'Zooma in',
  /** Button zooming out of the graph */
  'vista.result.graph.zoom-out': 'Zooma ut',
  /** Tab showing the result as a graph of its objects and arrays */
  'vista.result.view.graph': 'Graf',
  /** Tab showing the result as indented JSON text, to select and copy from */
  'vista.result.view.json': 'JSON',
  /** Accessible label of the tabs that switch how the result shows */
  'vista.result.view.label': 'Resultatvy',
  /** Tab showing the result as a tree to browse */
  'vista.result.view.tree': 'Träd',
  /** Empty state of the saved queries panel */
  'vista.saved.empty': 'Inga sparade frågor än. Spara den aktuella frågan med +-knappen.',
  /** Empty state of a query list when the search matches nothing */
  'vista.saved.empty-search': 'Inga frågor matchar din sökning',
  /** Menu item loading a saved query into the active tab */
  'vista.saved.load-in-current-tab': 'Läs in i aktuell flik',
  /** Menu item opening a saved query in a new tab */
  'vista.saved.open-in-new-tab': 'Öppna i ny flik',
  /** Menu item renaming a saved query */
  'vista.saved.rename': 'Byt namn',
  /** Accessible label for the button saving the current query */
  'vista.saved.save-current': 'Spara aktuell fråga',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vista.saved.unavailable-variant':
    'Den här sparade frågan använde varianten "{{variant}}"; välj den i navigeringsfältet för att köra frågan med den.',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vista.saved.unknown-dataset':
    'Datasetet "{{dataset}}" för den här sparade frågan är inte tillgängligt här, behåller det nuvarande.',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vista.saved.variants-disabled':
    'Den här sparade frågan använde varianten "{{variant}}"; den här arbetsytan har varianter avstängda, så frågan körs utan den.',
  /** Button in the settings dialog that clears the stored state */
  'vista.settings.clear-storage': 'Rensa lagring',
  /** Confirmation button for clearing the storage */
  'vista.settings.clear-storage.confirm': 'Ja, rensa lagring',
  /** Explanation of what clearing the storage does */
  'vista.settings.clear-storage.description':
    'Tar bort dina personliga sparade frågor och funktionsbiblioteket, återställer öppna flikar och dessa standardinställningar i den här webbläsaren, och går tillbaka till den klassiska Vision-verktyget. Delade frågor behålls.',
  /** Toast shown when the saved queries could not be cleared */
  'vista.settings.clear-storage.error': 'Kunde inte rensa de sparade frågorna',
  /** Toast shown after the storage was cleared */
  'vista.settings.clear-storage.success': 'Lagring rensad',
  /** Explanation at the top of the settings dialog */
  'vista.settings.description':
    'Standardinställningar för nya flikar. Öppna flikar behåller sina egna alternativ.',
  /** Explains the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.description':
    'En fältsökväg per rad. En sökväg matchar på vilket djup som helst i ett resultat, så _rev döljer revisionen för varje dokument i det. Varje diff kan ändå visa dem.',
  /** Button restoring the default fields left out of History diffs */
  'vista.settings.history-diff.reset': 'Återställ till standardinställningarna',
  /** Label of the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.title': 'Fält dolda från History-diffar',
  /** Title of the settings dialog */
  'vista.settings.title': 'Inställningar',
  /** Empty state of the shared queries panel */
  'vista.shared.empty':
    'Inga delade frågor än. Dela en sparad fråga för att göra den tillgänglig för alla som använder detta dataset.',
  /** Shortcut description: close dialogs and menus */
  'vista.shortcuts.close': 'Stäng dialogrutor och menyer',
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vista.shortcuts.complete': 'Komplettera ett funktionsnamn',
  /** Shortcut description: copy the query */
  'vista.shortcuts.copy-query': 'Kopiera frågan',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vista.shortcuts.extract-function': 'Extrahera projektionen vid markören till en funktion',
  /** Shortcut description: run the query */
  'vista.shortcuts.fetch': 'Hämta frågan',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vista.shortcuts.next-finding': 'Hoppa till nästa lint-fynd',
  /** Shortcut description: reformat the query */
  'vista.shortcuts.prettify': 'Snygga till frågan',
  /** Title of the keyboard shortcuts dialog */
  'vista.shortcuts.title': 'Tangentbordsgenvägar',
  /** Sidebar toggle: show icons only */
  'vista.sidebar.collapse': 'Fäll ihop sidofältet',
  /** Sidebar toggle: show labels next to the icons */
  'vista.sidebar.expand': 'Expandera sidofältet',
  /** Accessible label for the sidebar navigation */
  'vista.sidebar.label': 'Vista-sidofält',
  /** Sidebar item and drawer title for personal saved queries */
  'vista.sidebar.saved-queries': 'Sparade frågor',
  /** Sidebar item opening the settings dialog */
  'vista.sidebar.settings': 'Inställningar',
  /** Sidebar item and drawer title for shared queries */
  'vista.sidebar.shared-queries': 'Delade frågor',
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vista.sidebar.shortcuts': 'Tangentbordsgenvägar',
  /** Empty state of the content source map panel */
  'vista.source-map.empty':
    'Ingen innehållskällkarta i svaret. Aktivera "Inkludera innehållskällkarta" under Alternativ och hämta igen.',
  /** Accessible label of the divider between the result and the response details panel */
  'vista.split.bottom-panel':
    'Ändra storlek på panelen för svarsdetaljer: dra eller använd piltangenterna; Home och End går till gränserna, Enter återställer',
  /** Accessible label of the divider between the request and response panes */
  'vista.split.request-response':
    'Ändra storlek på panelerna för begäran och svar: dra eller använd piltangenterna; Home och End går till gränserna, Enter återställer',
  /** Accessible label for the button closing a query tab */
  'vista.tabs.close-tab': 'Stäng flik',
  /** Accessible label for the list of query tabs */
  'vista.tabs.label': 'Frågeflikar',
  /** Accessible label for the button opening a new query tab */
  'vista.tabs.new-tab': 'Ny flik',
  /** Placeholder of the input renaming a tab */
  'vista.tabs.title-placeholder': 'Flikens titel',
  /** Title of a tab whose query is still empty */
  'vista.tabs.untitled': 'Namnlös fråga',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vista.webmcp.check-query': 'Kontrollera en GROQ-fråga i Vision',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vista.webmcp.describe-schema': 'Beskriv schemat i Vision',
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vista.webmcp.explain-query': 'Förklara en GROQ-fråga i Vision',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vista.webmcp.get-state': 'Läs den öppna Vision-fliken',
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vista.webmcp.open-query': 'Öppna en GROQ-fråga i Vision',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vista.webmcp.preview-mutations': 'Förhandsgranska mutationer i Vision',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vista.webmcp.run-query': 'Kör en GROQ-fråga i Vision',
})
