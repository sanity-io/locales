import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Kopiëren naar klembord',
  /** Label for deleting a query */
  'action.delete': 'Verwijderen',
  /** Label for editing a query's title */
  'action.edit-title': 'Titel bewerken',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Stoppen',
  /** Label for setting up a listener */
  'action.listen-execute': 'Luisteren',
  /** Label for query loading table */
  'action.load-queries': 'Queries laden',
  /** Label for loading a query */
  'action.load-query': 'Query laden',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Annuleren',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Ophalen',
  /** Label for saving a query */
  'action.save-personal-copy': 'Persoonlijke kopie opslaan',
  /** Label for saving a personal query */
  'action.save-personal-query': 'Opslaan als persoonlijk',
  /** Label for saving a query */
  'action.save-query': 'Query opslaan',
  /** Label for saving a shared query */
  'action.save-shared-query': 'Opslaan als gedeeld',
  /** Label for unsharing a query */
  'action.unshare': 'Delen ongedaan maken',
  /** Label for updating a query */
  'action.update': 'Bijwerken',

  /** Label for actions user can take */
  'label.actions': 'Acties',
  /** Label for all saved queries */
  'label.all': 'Alle',
  /** Label for saved queries that have been edited */
  'label.edited': 'Bewerkt',
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Nieuw',
  /** Label for query type "personal" */
  'label.personal': 'Persoonlijk',
  /** Label for savedAt date */
  'label.saved-at': 'Opgeslagen op',
  /** Saved queries */
  'label.saved-queries': 'Opgeslagen queries',
  /** Search queries */
  'label.search-queries': 'Zoek queries',
  /** Share query */
  'label.share': 'Delen',
  /** Label for query type "shared" */
  'label.shared': 'Gedeeld',
  /** Label for saved query type "team" */
  'label.team': 'Team',
  /** Label for untitled query fallback */
  'label.untitled-query': 'Naamloos',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'Parameters zijn geen geldige JSON',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Parameters',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Kolom',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Regel',
  /** Extra explanation when a 400 is returned for a release perspective on an old API version */
  'query.error.unsupported-release-perspective':
    'Deze API-versie ondersteunt geen complexe perspectieven. Gebruik {{apiVersion}} of hoger.',
  /** Extra explanation when a 400 is returned for a variant on an incompatible API version */
  'query.error.unsupported-variant':
    'Deze API-versie ondersteunt geen content-varianten. Gebruik de experimentele API-versie ({{apiVersion}}).',
  /** Label for "Query" editor/input */
  'query.label': 'Query',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'Query URL',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'End-to-end',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'Uitvoering',
  /** Label for "Result" explorer/view */
  'result.label': 'Resultaat',
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable': 'Resultaat kan niet als CSV gecodeerd worden',
  /** Label for "Save result as" result action */
  'result.save-result-as-format': 'Resultaat opslaan als <SaveResultButtons/>',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'n.v.t.',

  /** Query already saved error label */
  'save-query.already-saved': 'Query al opgeslagen',
  /** Save error label */
  'save-query.error': 'Fout bij het opslaan van de query',
  /** Save personal copy success label */
  'save-query.personal-copy-success': 'Persoonlijke kopie opgeslagen',
  /** Warning displayed before sharing a query */
  'save-query.share-warning':
    "Gedeelde query's worden opgeslagen als documenten in uw dataset en tellen mee voor uw documentquotum.",
  /** Save shared query success label */
  'save-query.shared-success': 'Gedeelde query opgeslagen',
  /** Save success label */
  'save-query.success': 'Query opgeslagen',
  /** Save unshared query success label */
  'save-query.unshared-success': 'Query verplaatst naar persoonlijk',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'API-versie',
  /** Tooltip shown when the API version selector is locked because a variant is selected */
  'settings.api-version-locked-for-variant':
    'Wanneer een variant is geselecteerd, moet de API-versie vX zijn.',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'Aangepaste API-versie',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Dataset',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'Ongeldige API-versie',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'Andere',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspectief',
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    'De "<code>previewDrafts</code>" perspective is hernoemd naar "<code>drafts</code>" en is nu afgekeurd. Deze verandering is effectief voor alle versies met ondersteuning voor perspective (>= v2021-03-25).',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Lees de documentatie',
  /** Option for selecting default perspective */
  'settings.perspectives.default': 'Geen perspective (API standaard)',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Perspectieven stellen je in staat om je query uit te voeren tegen verschillende "weergaven" van de inhoud in je dataset',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    'De standaard perspective zal veranderen van "<code>raw</code>" naar "<code>published</code>" in een aankomende API versie. Raadpleeg de documentatie voor meer details.',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': 'Vastgezette release',
  /** Label for the scheduled drafts perspective */
  'settings.perspectives.scheduled-drafts': 'Geplande concepten',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspectieven',

  /** Tooltip line of every control that calls Sanity Agent Actions, which bills AI credits */
  'vision.agent-actions.credits': 'Gebruikt één AI-credit per verzoek',
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vision.ai-credits.balance': 'Nog {{balance}} van {{quota}} AI-credits over deze maand.',
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vision.ai-credits.deficit':
    '{{used}} AI-credits gebruikt deze maand, {{deficit}} meer dan de {{quota}} inbegrepen.',
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vision.ai-credits.limit.description':
    'Uw organisatie heeft deze maand {{used}} van de {{quota}} AI-credits gebruikt, dus Sanity Agent Actions zijn gepauzeerd tot volgende maand of tot de bestedingslimiet wordt verhoogd.',
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vision.ai-credits.limit.description-unknown':
    'Uw organisatie heeft de bestedingslimiet voor AI-credits bereikt, dus Sanity Agent Actions zijn gepauzeerd tot volgende maand of tot de limiet wordt verhoogd.',
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vision.ai-credits.limit.learn-more': 'Hoe AI-credits werken',
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vision.ai-credits.limit.manage': 'AI-credits beheren',
  /** Title of the card shown where the organization is out of AI credits */
  'vision.ai-credits.limit.title': 'Geen AI-credits meer',
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vision.ai-credits.usage': 'AI-gebruik',
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vision.ai-credits.used': '{{used}} AI-credits gebruikt deze maand.',
  /** Button in the request column's action bar naming the API version requests go out with */
  'vision.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vision.api-version.button-cdn': 'API CDN {{version}}',
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vision.api-version.button-invalid': 'Onvolledige API-versie',
  /** Tooltip of the API version button */
  'vision.api-version.tooltip':
    "Query's worden uitgevoerd tegen API-versie {{version}}. Selecteer om dit te wijzigen in Opties.",
  /** Tooltip of the API version button while queries go through the API CDN */
  'vision.api-version.tooltip-cdn':
    "Query's worden uitgevoerd tegen de API CDN met API-versie {{version}}. Selecteer om dit te wijzigen in Opties.",
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vision.api-version.tooltip-cdn-blocked':
    "Query's worden uitgevoerd tegen de API met API-versie {{version}}, niet de API CDN: deze bedient het {{perspective}} perspectief niet. Selecteer om dit te wijzigen in Opties.",
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vision.api-version.tooltip-invalid':
    'De API-versie in Opties is onvolledig, dus er kan niets worden opgehaald totdat deze compleet is.',
  /** Tooltip of the API version button while a selected variant forces the variants API version */
  'vision.api-version.tooltip-locked':
    "Query's worden uitgevoerd tegen API-versie {{version}}, die de geselecteerde variant vereist.",
  /** Label of the document after the change in the Delta panel */
  'vision.delta.after': 'Na',
  /** Label of the document before the change in the Delta panel */
  'vision.delta.before': 'Voor',
  /** What the Delta panel does */
  'vision.delta.description':
    'Voert de query uit in deltamodus, zoals GROQ-gestuurde webhooks, listeners en Sanity Functions doen: before() en after() zijn een document voor en na een wijziging, @ is het document erna, en delta::changedAny() vergelijkt ze. Het draait in de browser met groq-js. Een lege zijde betekent geen document: de wijziging maakt het aan of verwijdert het.',
  /** Label of the document ID field in the Delta panel */
  'vision.delta.document-id': 'Document-ID',
  /** Shown when there is a query but no documents to compare */
  'vision.delta.empty':
    'Laad de geschiedenis van een document, of schrijf de documenten in Voor en Na.',
  /** Shown when the query fails in delta mode */
  'vision.delta.failed': 'De query kon niet in deltamodus worden uitgevoerd: {{message}}',
  /** Shown when the After document is not valid JSON */
  'vision.delta.invalid-after': 'Na is geen geldige JSON: {{message}}',
  /** Shown when the Before document is not valid JSON */
  'vision.delta.invalid-before': 'Before is geen geldige JSON: {{message}}',
  /** Button loading the document's revisions from the History API */
  'vision.delta.load': 'Geschiedenis laden',
  /** Shown when the history could not be loaded */
  'vision.delta.load-failed': 'De geschiedenis kon niet worden geladen: {{message}}',
  /** A delta filter that is true for the change */
  'vision.delta.matches':
    'Komt overeen: een webhook of function met dit filter wordt uitgevoerd voor deze wijziging.',
  /** A delta filter that is false for the change */
  'vision.delta.no-match':
    'Komt niet overeen: een webhook of function met dit filter wordt niet uitgevoerd voor deze wijziging.',
  /** Shown while the query or its params cannot be sent */
  'vision.delta.no-request':
    'Corrigeer de query en de bijbehorende params om deze in delta-modus uit te voeren.',
  /** Heading of the delta result */
  'vision.delta.result': 'Resultaat',
  /** The After choice for a change that deletes the document */
  'vision.delta.revision.none-after': 'Niets: de wijziging verwijdert het document',
  /** The Before choice for a change that creates the document */
  'vision.delta.revision.none-before': 'Niets: de wijziging maakt het document aan',
  /** A revision in the Before and After lists */
  'vision.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vision.drawer.close': 'Paneel sluiten',
  /** Explanation at the top of the Explain panel */
  'vision.explain.description':
    'Het queryplan is de manier waarop de Content Lake de query uitvoert: wat er wordt gelezen, gefilterd en gesorteerd tijdens het lezen, en wat overblijft voor latere stappen. ‘Leg dit aan mij uit’ laat Sanity Agent Actions de query en het bijbehorende plan in gewone taal beschrijven, wat één AI-credit kost.',
  /** Shown in the Explain panel while there is no valid query to explain */
  'vision.explain.empty': 'Schrijf een query om deze uit te leggen.',
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vision.explain.explain': 'Leg dit aan mij uit',
  /** Shown when the explanation could not be written */
  'vision.explain.failed': 'De query kon niet worden uitgelegd: {{message}}',
  /** A count the index computes without reading the documents */
  'vision.explain.insight.aggregate': 'Geteld in de index, zonder de documenten te lezen.',
  /** A subquery the plan runs once for all documents */
  'vision.explain.insight.batched-subquery':
    'De subquery wordt één keer uitgevoerd voor alle documenten, in één gebundelde ophaalactie, niet per document afzonderlijk.',
  /** Part of the filter runs in memory; the expression follows */
  'vision.explain.insight.filter-in-memory':
    'Een deel van het filter wordt in het geheugen uitgevoerd, na het lezen: elk document dat de index doorlaat, wordt eerst gelezen, wat traag wordt bij grote datasets. Joins (->) en functions in een filter kunnen de index niet gebruiken.',
  /** The index sorts and limits while reading */
  'vision.explain.insight.index-sort-limit':
    'De index sorteert en beperkt de documenten tijdens het lezen ervan.',
  /** The plan slices in memory */
  'vision.explain.insight.slice-in-memory':
    'Het segment wordt in het geheugen genomen na het lezen, niet als limiet tijdens het lezen.',
  /** The plan sorts in memory */
  'vision.explain.insight.sort-in-memory':
    'Sorteren gebeurt in het geheugen, na het lezen van elke overeenkomst. Sorteer op attributen waarop de index kan sorteren.',
  /** Link under the plan insights to the guide on fast queries */
  'vision.explain.insights.guide': 'Hoogperformante GROQ',
  /** Heading of the plan insights in the Explain panel */
  'vision.explain.insights.title': 'Wat opvalt',
  /** Button in the Explain panel fetching the query plan */
  'vision.explain.plan': 'Toon het queryplan',
  /** Shown when the query plan could not be fetched */
  'vision.explain.plan-failed': 'Het queryplan kon niet worden opgehaald: {{message}}',
  /** Heading of the query plan in the Explain panel */
  'vision.explain.plan-title': 'Queryplan',
  /** Toast shown after a code snippet was copied */
  'vision.export-query.copied': 'Snippet gekopieerd naar klembord',
  /** Label for the button that copies a code snippet */
  'vision.export-query.copy': 'Snippet kopiëren',
  /** Explanation at the top of the export query dialog */
  'vision.export-query.description':
    'Voer deze query buiten de studio uit met een van deze snippets.',
  /** Note under the curl snippet when the query is sent as a request body rather than in the URL */
  'vision.export-query.post-body-note':
    'De query en params komen neer op {{size}} tekens als zoekparameters; vanaf {{limit}} stuurt @sanity/client deze als een JSON-body in plaats van in de URL, dus de snippet doet hetzelfde.',
  /** Title of the dialog that exports the query as code snippets */
  'vision.export-query.title': 'Query exporteren',
  /** Note about authentication in the export query dialog */
  'vision.export-query.token-note':
    'Privé-datasets hebben een API-token nodig. Openbare datasets kunnen de Authorization-header weglaten.',
  /** Toast shown after the generated code was copied */
  'vision.export-types.copied': 'Code gekopieerd naar klembord',
  /** Label for the button that copies the generated code */
  'vision.export-types.copy': 'Code kopiëren',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vision.export-types.empty':
    'Haal eerst de query op, zodat er een resultaat is om typen van af te leiden.',
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vision.export-types.schema-error': 'Schema-evaluatie mislukt: {{message}}',
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vision.export-types.source.result':
    'Afgeleid van het opgehaalde resultaat, omdat de query niet kon worden geëvalueerd ten opzichte van het workspace-schema.',
  /** Note shown when the types were derived from the workspace schema */
  'vision.export-types.source.schema':
    'Afgeleid van het workspace-schema, op dezelfde manier als sanity typegen dat doet.',
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vision.export-types.stale-result':
    'Het getoonde resultaat is opgehaald voor een andere query of andere params. Haal eerst de huidige query op, zodat er een resultaat is om typen van af te leiden.',
  /** Title of the dialog exporting TypeScript types for the result */
  'vision.export-types.title-typescript': 'TypeScript exporteren',
  /** Title of the dialog exporting a Zod schema for the result */
  'vision.export-types.title-zod': 'Zod exporteren',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vision.functions.add': 'Toevoegen aan query',
  /** Shown on a library function the query declares the same way */
  'vision.functions.declared': 'In deze query',
  /** Lint action on a call of a library function the query does not declare */
  'vision.functions.editor.add-from-library': 'Declareer het',
  /** Note in a function's hover documentation: the API version it needs */
  'vision.functions.editor.api-version': 'Vereist API-versie {{version}} of nieuwer',
  /** Detail of a completion for a custom function the query declares */
  'vision.functions.editor.completion-declared': 'in deze query',
  /** Detail of a completion for a library function, which declares it too */
  'vision.functions.editor.completion-library': 'uit je bibliotheek',
  /** Note in the hover documentation of a custom function the query declares */
  'vision.functions.editor.declared-on': 'Aangepaste functie, gedeclareerd op regel {{line}}',
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vision.functions.editor.delta-only':
    'Werkt alleen in delta-modus, waar webhooks en Sanity Functions hun filters uitvoeren',
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vision.functions.editor.extract': 'Extraheren naar functie',
  /** Note in the hover documentation of a library function the query does not declare */
  'vision.functions.editor.in-library': 'In uw functiebibliotheek, niet gedeclareerd in deze query',
  /** Link at the end of a built-in function's hover documentation */
  'vision.functions.editor.reference': 'GROQ-functiesreferentie',
  /** Explanation under the library heading in the Functions panel */
  'vision.functions.library.description':
    'Bewaard in deze browser voor elke dataset van het project. Aanvullingen bieden deze functies aan, en lint biedt aan er een te declareren die de query aanroept.',
  /** Shown in the Functions panel while the library is empty */
  'vision.functions.library.empty':
    "Sla een functie die de query declareert op om deze in andere query's te gebruiken.",
  /** Heading of the functions library in the Functions panel */
  'vision.functions.library.title': 'Bibliotheek',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vision.functions.query.empty':
    'Declareer aangepaste functies bovenaan de query, of plaats de cursor in een projectie, zoals author->{name}, en druk op de extractieknop boven de editor ({{shortcut}}).',
  /** Heading of the functions the query declares in the Functions panel */
  'vision.functions.query.title': 'In deze query',
  /** Removes a function from the library */
  'vision.functions.remove': 'Verwijderen uit de bibliotheek',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vision.functions.replace': 'Vervangen in query',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vision.functions.reveal': '{{name}} tonen in de editor',
  /** Button of a function the query declares that is not in the library yet */
  'vision.functions.save': 'Opslaan in bibliotheek',
  /** Shown on a function the query declares the way the library has it */
  'vision.functions.saved': 'Opgeslagen',
  /** Button of a function the query declares differently from the library's version */
  'vision.functions.update': 'Bibliotheek bijwerken',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vision.generate.button': 'Query genereren',
  /** Closes the generate query bar */
  'vision.generate.close': 'Sluiten',
  /** Explanation under the generate query field */
  'vision.generate.description':
    'Sanity Agent Actions schrijven de GROQ op basis van uw beschrijving en de documenttypen, en de Content Lake controleert elke poging; elke poging gebruikt één AI-credit. Dit vervangt de query van dit tabblad en voert deze uit; ongedaan maken in de editor brengt de vorige query terug.',
  /** Shown when no query could be generated, above the reason */
  'vision.generate.failed': 'De query kon niet worden gegenereerd',
  /** Accessible label of the description field in the generate query bar */
  'vision.generate.label': 'Wat moet de query ophalen?',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vision.generate.open-anyway': 'Open de laatste poging',
  /** Placeholder of the description field in the generate query bar */
  'vision.generate.placeholder':
    'De 10 meest recente auteurs, gesorteerd op achternaam en vervolgens voornaam',
  /** Shown while the first attempt at a query is written */
  'vision.generate.progress': 'De query wordt geschreven…',
  /** Shown while a rejected attempt is retried */
  'vision.generate.progress-retry': 'De query wordt gecorrigeerd (poging {{attempt}} van {{max}})…',
  /** Button generating the query */
  'vision.generate.submit': 'Genereren',
  /** Badge on a history entry the API CDN answered */
  'vision.history.cdn': 'API CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vision.history.cdn-cache-hit': 'CDN-cachetreffer',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vision.history.changed': 'Gewijzigd',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vision.history.changes': 'Wijzigingen',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vision.history.changes-failed': 'De wijzigingen konden niet worden weergegeven.',
  /** Button retrying to show the changes of a history entry */
  'vision.history.changes-retry': 'Opnieuw proberen',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vision.history.compared-with': 'Vergeleken met de fetch om {{time}}',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vision.history.diff.params': 'Parameters',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vision.history.diff.query': 'Query',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vision.history.diff.query-formatting-only': 'Alleen de opmaak is gewijzigd',
  /** Label of the diff of the query result in a history entry's changes */
  'vision.history.diff.result': 'Resultaat',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vision.history.diff.url': 'Request-URL',
  /** Empty state of the history panel */
  'vision.history.empty': 'Nog niets opgehaald',
  /** Status label for a failed fetch in the history */
  'vision.history.failed': 'Mislukt',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vision.history.hide-hidden': 'Verbergen',
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vision.history.hiding': '{{fields}} worden verborgen',
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vision.history.only-hidden-changed': 'Alleen verborgen velden zijn gewijzigd',
  /** History reason: a tab opened with a generated query fetched it */
  'vision.history.reason.generated': 'Gegenereerde query',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vision.history.reason.link': 'Link geopend',
  /** History reason: a live event matched the query's sync tags */
  'vision.history.reason.live': 'Live update',
  /** History reason: the live connection asked every client to refetch */
  'vision.history.reason.live-restart': 'Live-verbinding opnieuw gestart',
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vision.history.reason.live-start': 'Live fetch gestart',
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vision.history.reason.load': 'Query geladen',
  /** History reason: the fetch button was pressed */
  'vision.history.reason.manual': 'Fetch-knop',
  /** History reason: mutations were applied from the Mutate panel */
  'vision.history.reason.mutation': 'Mutaties toegepast',
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vision.history.reason.options': 'Opties gewijzigd',
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vision.history.reason.paste': 'Geplakte URL',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vision.history.reason.resume': 'Automatisch opnieuw ophalen hervat',
  /** History reason: the keyboard shortcut was used */
  'vision.history.reason.shortcut': 'Sneltoets',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vision.history.same-result': 'Zelfde resultaat',
  /** Button showing the hidden fields in a history entry's changes */
  'vision.history.show-hidden': 'Toon ze',
  /** Next to a history entry's changes while the hidden fields are shown */
  'vision.history.showing-hidden': '{{fields}} worden getoond, standaard verborgen',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vision.history.too-large': 'Te groot om te vergelijken',
  /** A history entry whose result is the same as the previous result */
  'vision.history.unchanged': 'Geen wijzigingen',
  /** Shown in the Lint panel while the query has no lint findings */
  'vision.lint.empty':
    'Geen lint-bevindingen. Problemen die de GROQ-linter in de query opmerkt, worden hier weergegeven terwijl je typt; kies er een om deze in de editor te selecteren.',
  /** Where a lint finding sits in the query, shown under its message */
  'vision.lint.position': 'Regel {{line}}, kolom {{column}}',
  /** Severity badge of a lint finding */
  'vision.lint.severity.error': 'Fout',
  /** Severity badge of a lint finding */
  'vision.lint.severity.hint': 'Tip',
  /** Severity badge of a lint finding */
  'vision.lint.severity.info': 'Info',
  /** Severity badge of a lint finding */
  'vision.lint.severity.warning': 'Waarschuwing',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vision.lint.use-suggestion': 'Gebruik {{suggestion}}',
  /** Badge shown while a tab refetches automatically */
  'vision.live.active': 'Live',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vision.live.button': 'Live ophalen',
  /** Tooltip of the Live button while automatic refetching is off */
  'vision.live.button.start':
    'Haal op, en haal daarna opnieuw op wanneer de documenten in het resultaat veranderen',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vision.live.button.stop':
    'Stop met opnieuw ophalen wanneer de documenten in het resultaat veranderen. Ophalen blijft op aanvraag werken, voor resultaten die geen enkele documentwijziging raakt, zoals now()',
  /** Error shown when the live connection breaks */
  'vision.live.error': 'Live-updates verbroken: {{message}}',
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vision.live.stop': 'Stop live',
  /** Button in the Mutate panel adding a mutation to the list */
  'vision.mutate.add': 'Mutatie toevoegen',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vision.mutate.add.create': 'Een document aanmaken',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vision.mutate.add.delete': 'Een document verwijderen',
  /** Adds a mutation deleting the documents of the shown result */
  'vision.mutate.add.delete-result': 'Verwijder de documenten in het resultaat',
  /** Adds a mutation patching a document, its ID to fill in */
  'vision.mutate.add.patch': 'Een document patchen',
  /** Adds a mutation patching the documents of the shown result */
  'vision.mutate.add.patch-result': 'Patch de documenten in het resultaat',
  /** Button applying the mutations a dry run showed */
  'vision.mutate.apply': 'Toepassen op {{dataset}}',
  /** Heading of the error shown when applying the mutations failed */
  'vision.mutate.apply-failed': 'De mutaties zijn niet toegepast',
  /** Next to Apply while the mutations as they are have had no dry run */
  'vision.mutate.apply-needs-preview':
    'Toepassen verzendt wat een dry run liet zien: voer er eerst een uit.',
  /** Option giving array items without a _key one */
  'vision.mutate.auto-keys': 'Voeg een _key toe aan array-items die er geen hebben',
  /** Under the option giving array items a _key */
  'vision.mutate.auto-keys.description':
    'De studio heeft er één nodig op elk array-item om het te kunnen bewerken.',
  /** Button showing a document's changes in the dry run */
  'vision.mutate.changes': 'Wijzigingen',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vision.mutate.changes-failed': 'De wijzigingen konden niet worden weergegeven.',
  /** Button retrying to show a document's changes */
  'vision.mutate.changes-retry': 'Opnieuw proberen',
  /** What the Mutate panel does */
  'vision.mutate.description':
    'Schrijf mutaties zoals de Mutations API ze verwacht, in een lijst: create, createOrReplace, createIfNotExists, delete en patch, op ID of via een GROQ-query. Een dry run laat zien wat ze met elk document zouden doen zonder iets te wijzigen; Toepassen schrijft ze vervolgens in één transactie naar de dataset, met jouw account.',
  /** What the API says went wrong with one of the mutations */
  'vision.mutate.failure-item': 'Mutatie {{index}}: {{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vision.mutate.generate.button': 'Mutaties genereren',
  /** Explanation under the generate mutations field */
  'vision.mutate.generate.description':
    'Sanity Agent Actions schrijven de mutaties op basis van jouw beschrijving, de documenten in het resultaat en hun types, en een dry run controleert elke poging; elke poging gebruikt één AI-credit. Ze vervangen de mutaties hier, waarbij ongedaan maken deze terugzet; er wordt niets geschreven totdat je ze toepast.',
  /** Shown when no mutations could be generated, above the reason */
  'vision.mutate.generate.failed': 'De mutaties konden niet worden gegenereerd',
  /** Accessible label of the description field in the generate mutations bar */
  'vision.mutate.generate.label': 'Wat moeten de mutaties doen?',
  /** Placeholder of the description field in the generate mutations bar */
  'vision.mutate.generate.placeholder':
    'Wijzig de titel van de documenten in het resultaat naar foobar',
  /** Shown while the first attempt at the mutations is written */
  'vision.mutate.generate.progress': 'Mutaties worden geschreven…',
  /** Shown while an attempt the dry run turned down is retried */
  'vision.mutate.generate.progress-retry':
    'Mutaties worden hersteld (poging {{attempt}} van {{max}})…',
  /** Under the dry run: the fields the diffs leave out */
  'vision.mutate.hiding': 'De wijzigingen laten {{fields}} weg, zoals Geschiedenis dat ook doet.',
  /** Shown when the mutations are not valid JSON */
  'vision.mutate.invalid-json': 'De mutaties zijn geen geldige JSON: {{message}}',
  /** Shown when a mutation does not name exactly one thing to do */
  'vision.mutate.invalid-mutation':
    'Mutatie {{index}} heeft precies één van create, createOrReplace, createIfNotExists, delete of patch nodig.',
  /** Label of the mutations editor */
  'vision.mutate.mutations': 'Mutaties',
  /** The dry run touched no documents */
  'vision.mutate.no-documents': 'De mutaties raken geen documenten.',
  /** Shown when the JSON is not a list of mutations */
  'vision.mutate.not-a-list':
    'Schrijf een lijst met mutaties, een enkele mutatie, of een request body met een lijst van mutaties.',
  /** A document the mutations create */
  'vision.mutate.operation.create': 'Aanmaken',
  /** A document the mutations delete */
  'vision.mutate.operation.delete': 'Verwijderen',
  /** A document the mutations touch without changing its content */
  'vision.mutate.operation.none': 'Geen wijziging',
  /** A document the mutations change */
  'vision.mutate.operation.update': 'Bijwerken',
  /** Button running the mutations as a dry run */
  'vision.mutate.preview': 'Testuitvoering',
  /** Heading of the error shown when the dry run failed */
  'vision.mutate.preview-failed': 'De testuitvoering is mislukt',
  /** Heading of the dry run's outcome */
  'vision.mutate.preview-heading': 'Testuitvoering',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vision.mutate.stale':
    'De mutaties, de dataset of de opties zijn gewijzigd na deze testuitvoering. Voer het opnieuw uit om ze toe te passen.',
  /** How many documents the dry run changes and leaves as they are */
  'vision.mutate.summary': 'Gewijzigd: {{changed}} · Ongewijzigd: {{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vision.network.cache': 'Cache',
  /** The API CDN answered from its cache */
  'vision.network.cache.hit': 'Treffer',
  /** Under the details of a CDN cache hit */
  'vision.network.cache.hit-explained':
    'De CDN antwoordde met een reactie die het had gecachet, vanaf een locatie bij u in de buurt; de query heeft de API niet bereikt.',
  /** The API CDN answered with a response this session had not seen */
  'vision.network.cache.miss': 'Geen treffer, voor zover deze sessie kan vaststellen',
  /** The API answered, which caches nothing */
  'vision.network.cache.none': 'Geen, de API beantwoordt elk verzoek met verse content',
  /** Shown in the Network panel while there is no response */
  'vision.network.empty':
    'Haal de query op om te zien welk eindpunt deze heeft beantwoord, of dit vanuit een cache kwam, en waar deze is uitgevoerd.',
  /** In the Network panel: the endpoint that answered */
  'vision.network.endpoint': 'Beantwoord door',
  /** The live API answered */
  'vision.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vision.network.endpoint.cdn': 'API CDN',
  /** In the Network panel: the HTTP method the query was sent with */
  'vision.network.method': 'Methode',
  /** The query and its params went in the URL */
  'vision.network.method.get': 'GET, met de query en parameters in de URL',
  /** The query and its params went in the request body */
  'vision.network.method.post': 'POST, met de query en parameters als JSON-body',
  /** Under the method of a POST request: why the query was not sent in the URL */
  'vision.network.method.post-explained':
    'De query en parameters komen uit op {{size}} tekens als zoekparameters; vanaf {{limit}} stuurt @sanity/client deze als JSON-body, omdat de API de lengte van een URL beperkt. De opties blijven in de URL.',
  /** In the Network panel: the region the query ran in */
  'vision.network.region': 'Query uitgevoerd in',
  /** The response did not say where the query ran */
  'vision.network.region.unknown': 'Niet gerapporteerd',
  /** In the Network panel: the round trip and the time on the server */
  'vision.network.timing': 'Tijd',
  /** The round trip and the server's time for the query, in milliseconds */
  'vision.network.timing.value': '{{e2e}}ms retourtijd, {{server}}ms op de server',
  /** In the Network panel: the trace of the request, for Sanity support */
  'vision.network.trace': 'Trace-ID',
  /** Hint in the Network panel while queries go to the API */
  'vision.network.use-cdn-hint':
    "Schakel Gebruik de API CDN in bij Opties om query's via de CDN te versturen.",
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vision.network.you': 'Jij',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vision.options.dataset.follows-workspace': 'Volgt de workspace',
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vision.options.dataset.pin': 'Een dataset vastzetten',
  /** Hint under the dataset field while a dataset is pinned */
  'vision.options.dataset.pinned': 'Vastgezet; de workspace gebruikt mogelijk een andere dataset',
  /** Button that makes the tab follow the workspace's dataset again */
  'vision.options.dataset.use-workspace': 'Gebruik de workspace-dataset',
  /** Label for the "Include content source map" switch */
  'vision.options.include-source-map': 'Content source map opnemen',
  /** Description for the "Include content source map" switch */
  'vision.options.include-source-map.description':
    'Voegt resultSourceMap toe aan de respons, te zien in het tabblad Content Source Map.',
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vision.options.perspective.global': 'Algemeen ({{name}})',
  /** Label of the switch that sends queries to the API CDN */
  'vision.options.use-cdn': 'Gebruik de API CDN',
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vision.options.use-cdn.anonymous':
    'Deze studio meldt je aan met een cookie, die de API CDN nooit ontvangt: deze reageert zoals bij een anonieme bezoeker, met wat een publieke dataset toont.',
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vision.options.use-cdn.blocked':
    "De API CDN levert geen drafts of releases, dus query's met het perspectief {{perspective}} gaan naar de API. Bij published of raw gebruiken ze de CDN.",
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vision.options.use-cdn.blocked.title': "Query's gaan naar de API, niet naar de CDN",
  /** Description of the API CDN switch */
  'vision.options.use-cdn.description':
    'Stuurt de query naar de API CDN, zoals useCdn: true in @sanity/client, met de perspectieven published en raw: drafts en releases gaan altijd naar de API. De antwoorden worden tot een minuut gecached; het Netwerkpaneel toont wanneer een antwoord uit de cache kwam.',
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vision.options.use-cdn.use-published': 'Gebruik het published-perspectief',
  /** Label of the variant field */
  'vision.options.variant-label': 'Variant',
  /** Variant option sending the navbar's variant, named */
  'vision.options.variant.global': 'Algemeen ({{name}})',
  /** Variant option sending the navbar's variant while none is selected there */
  'vision.options.variant.global-none': 'Algemeen (geen geselecteerd)',
  /** Variant option sending no variant */
  'vision.options.variant.none': 'Geen',
  /** Accessible label for collapsing a bottom panel */
  'vision.panel.collapse': 'Paneel samenvouwen',
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vision.panel.delta': 'Delta',
  /** Accessible label for expanding a bottom panel */
  'vision.panel.expand': 'Paneel uitvouwen',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vision.panel.explain': 'Uitleg',
  /** Label of the Functions tab in the response panel */
  'vision.panel.functions': 'Functies',
  /** Label of the "History" tab in the response panel */
  'vision.panel.history': 'Geschiedenis',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vision.panel.lint': 'Lint',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vision.panel.mutate': 'Muteren',
  /** Label of the Network tab in the response panel */
  'vision.panel.network': 'Netwerk',
  /** Label of the "Options" panel in the request column */
  'vision.panel.options': 'Opties',
  /** Label of the "Response" tab in the response panel */
  'vision.panel.response': 'Respons',
  /** Label of the "Content Source Map" tab in the response panel */
  'vision.panel.source-map': 'Content Source Map',
  /** Button adding an item to a list param in the params form */
  'vision.params-form.add-item': 'Item toevoegen',
  /** Placeholder of a params form field that takes any JSON value */
  'vision.params-form.any-placeholder': 'Elke JSON-waarde; andere tekst wordt verzonden als string',
  /** Shown in the params form when the query uses no params */
  'vision.params-form.empty':
    'De query gebruikt geen params. Elke $naam erin krijgt hier een veld.',
  /** Shown in the params form while the params JSON cannot be parsed */
  'vision.params-form.invalid-json':
    'De params zijn geen geldige JSON. Herstel ze in de JSON-weergave om ze hier te bewerken.',
  /** A boolean param's value is not true or false; it is sent anyway */
  'vision.params-form.invalid.boolean': 'Niet waar of onwaar; verzonden als {{value}}',
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vision.params-form.invalid.document-type': 'Geen documenttype in deze workspace; toch verzonden',
  /** A whole number param (a slice bound) holds a fraction */
  'vision.params-form.invalid.integer': 'Geen geheel getal, wat slices nodig hebben',
  /** A list param's value is not a list; it is sent anyway */
  'vision.params-form.invalid.list': 'Geen lijst; verzonden als {{value}}',
  /** A number param's value is not a number; it is sent anyway */
  'vision.params-form.invalid.number': 'Geen getal; verzonden als tekst',
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vision.params-form.invalid.option': 'Niet een van de bekende waarden; toch verzonden',
  /** A text param's value is not text; it is sent anyway */
  'vision.params-form.invalid.string': 'Geen tekst; verzonden als {{value}}',
  /** Accessible label of an item input of a list param in the params form */
  'vision.params-form.item-label': '${{name}}, item {{index}}',
  /** Placeholder of an item input of a list param in the params form */
  'vision.params-form.item-placeholder': 'Item',
  /** Under a params form field whose param has no value */
  'vision.params-form.missing': 'Niet ingesteld: de query mislukt totdat er een waarde is',
  /** Shown in the params form when the workspace schema could not be read */
  'vision.params-form.no-schema':
    'Typen komen alleen uit de query: het workspace-schema kon niet worden gelezen.',
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vision.params-form.not-set': 'Niet ingesteld',
  /** Button setting a date and time param to the current time */
  'vision.params-form.now': 'Nu',
  /** Button removing a param the query does not use from the params */
  'vision.params-form.remove': 'Verwijderen',
  /** Accessible label of the button removing an item from a list param */
  'vision.params-form.remove-item': 'Item verwijderen',
  /** Shown in the params form when the query does not parse */
  'vision.params-form.syntax-error':
    'De query kan niet worden geparsed, dus de params worden zonder typen weergegeven.',
  /** Type hint of a params form field: any JSON value */
  'vision.params-form.type.any': 'elke JSON-waarde',
  /** Type hint of a params form field: true or false */
  'vision.params-form.type.boolean': 'true of false',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vision.params-form.type.datetime': 'datum en tijd (ISO 8601)',
  /** Type hint of a params form field: a document ID */
  'vision.params-form.type.document-id': 'document-ID',
  /** Type hint of a params form field: one of the workspace's document types */
  'vision.params-form.type.document-type': 'documenttype',
  /** Type hint of a params form field: a whole number */
  'vision.params-form.type.integer': 'geheel getal',
  /** Type hint of a params form field: a list of values */
  'vision.params-form.type.list': 'lijst, elk {{type}}',
  /** Type hint of a params form field: a number */
  'vision.params-form.type.number': 'getal',
  /** Type hint of a params form field: text */
  'vision.params-form.type.string': 'tekst',
  /** Heading of the params the query does not use, listed in the params form */
  'vision.params-form.unused': 'Niet gebruikt door de query',
  /** Before the expressions that use a param, in the params form */
  'vision.params-form.used-in': 'Gebruikt in',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vision.params.fit-height': 'Aangepast aan de inhoud, {{height}} pixels',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vision.params.resize':
    'Params vergroten/verkleinen: sleep of gebruik de pijltjestoetsen; dubbelklik of druk op Enter om opnieuw aan de inhoud aan te passen',
  /** Tab showing the params as a form inferred from the query */
  'vision.params.view.form': 'Formulier',
  /** Tab showing the params as JSON */
  'vision.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vision.params.view.label': 'Params bewerken als',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vision.paste.parsed': 'Query geladen vanuit geplakte URL',
  /** Toast shown after a curl command for a query was pasted and loaded into the tab */
  'vision.paste.parsed-curl': 'Query geladen vanuit geplakt cURL-commando',
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vision.paste.unavailable-variant':
    'De geplakte URL gebruikte de variant "{{variant}}"; selecteer deze in de navigatiebalk om de query ermee uit te voeren.',
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vision.paste.unknown-dataset':
    'De dataset "{{dataset}}" in de geplakte URL is hier niet beschikbaar, de huidige blijft behouden.',
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vision.paste.unsupported-perspective':
    'Het perspective in de geplakte URL wordt hier niet ondersteund, de huidige blijft behouden.',
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vision.paste.variants-disabled':
    'De geplakte URL gebruikte de variant "{{variant}}"; deze workspace heeft varianten uitgeschakeld, dus de query wordt zonder uitgevoerd.',
  /** Accessible label for the query actions menu */
  'vision.query.actions': 'Queryacties',
  /** Tooltip when automatic refetching is not available for the API version */
  'vision.query.auto-refetch.unsupported':
    'Automatisch opnieuw ophalen vereist API-versie v2021-03-25 of later.',
  /** Toast shown after the query was copied */
  'vision.query.copied': 'Query gekopieerd naar klembord',
  /** Menu item copying the query text */
  'vision.query.copy': 'Query kopiëren',
  /** Menu item opening the export query dialog */
  'vision.query.export': 'Query exporteren…',
  /** Menu item reformatting the query */
  'vision.query.prettify': 'Query opmaken',
  /** Toast shown when the query could not be reformatted */
  'vision.query.prettify.failed': 'Kon de query niet opmaken',
  /** Menu item saving the query to the personal saved queries */
  'vision.query.save': 'Query opslaan',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vision.query.stop': 'Stoppen',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vision.query.stop.description': 'Ophalen stoppen',
  /** Explanation in the settings section about the redesigned experience */
  'vision.redesign.settings.description':
    'U gebruikt de opnieuw ontworpen Vision-tool. Als u teruggaat, blijven uw tabbladen en instellingen in deze browser bewaard voor de volgende keer dat u het probeert.',
  /** Title of the settings section about the redesigned experience */
  'vision.redesign.settings.title': 'Opnieuw ontworpen Vision (bèta)',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vision.redesign.switch-to-classic': 'Overschakelen naar klassieke Vision',
  /** Toast button that switches to the redesigned tool */
  'vision.redesign.toast.accept': 'Nu proberen',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vision.redesign.toast.description':
    'Query-tabbladen, live opnieuw ophalen, antwoorddetails en exports. U kunt op elk moment terugschakelen.',
  /** Toast button that hides the invitation */
  'vision.redesign.toast.dismiss': 'Niet nu',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vision.redesign.toast.title': 'Probeer de opnieuw ontworpen Vision',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vision.redesign.try': 'Probeer het nieuwe ontwerp',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vision.redesign.try.description':
    'Schakel over naar de opnieuw ontworpen Vision, in bèta. U kunt op elk moment vanuit de zijbalk terugschakelen.',
  /** Empty state of the response panel before anything was fetched */
  'vision.response.empty': 'Nog niets opgehaald',
  /** Label for the payload size in the response tab */
  'vision.response.payload-size': 'Payloadgrootte',
  /** Label for the sync tags in the response tab */
  'vision.response.sync-tags': 'Synchronisatietags',
  /** Shown when the response carried no sync tags */
  'vision.response.sync-tags.none': 'Geen synchronisatietags in het antwoord',
  /** Under the query URL when the request went out as a POST body rather than that URL */
  'vision.response.url.sent-as-post':
    'Verzonden als een POST-body: de query en parameters zijn te lang voor een URL, dus @sanity/client heeft ze als JSON verzonden. Deze URL plakken in Vision laadt de query nog steeds.',
  /** Accessible label for the result actions menu */
  'vision.result.actions': 'Resultaatacties',
  /** Toast shown after the result was copied */
  'vision.result.copied': 'Resultaat gekopieerd naar klembord',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vision.result.copied-value': '{{path}} gekopieerd',
  /** Menu item and button copying the result as JSON */
  'vision.result.copy': 'Resultaat kopiëren',
  /** Button next to each property in the result tree, copying its value */
  'vision.result.copy-value': 'Waarde kopiëren',
  /** Empty state of the result view */
  'vision.result.empty': 'Voer de query uit om het resultaat hier te zien',
  /** Button exporting the result as CSV */
  'vision.result.export-csv': 'CSV exporteren',
  /** Button exporting the result as JSON */
  'vision.result.export-json': 'JSON exporteren',
  /** Menu item opening the TypeScript export dialog */
  'vision.result.export-typescript': 'TypeScript exporteren…',
  /** Menu item opening the Zod export dialog */
  'vision.result.export-zod': 'Zod exporteren…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vision.result.graph.collapse': 'Verberg wat het bevat',
  /** Button fitting the whole graph in view */
  'vision.result.graph.fit': 'Passend weergeven',
  /** Accessible label of the graph, saying how to move around in it */
  'vision.result.graph.label':
    'Resultaatgrafiek: sleep om te verplaatsen, scroll om te zoomen; indien gefocust, pijltjestoetsen om te bewegen, + en - om te zoomen, 0 om te passen',
  /** Ends the note on a graph that leaves part of this result out */
  'vision.result.graph.left-out-hint': 'De boom- en JSON-weergaven tonen alles.',
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vision.result.graph.node-limit':
    'Alleen de eerste {{nodes}} objecten en arrays worden getekend.',
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vision.result.graph.partial':
    'Alleen de eerste {{rows}} items worden weergegeven voor {{nodes}}.',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vision.result.graph.partial.node': '{{name}} ({{entries}} items)',
  /** Title of the graph node of the result itself */
  'vision.result.graph.root': 'resultaat',
  /** Button zooming into the graph */
  'vision.result.graph.zoom-in': 'Inzoomen',
  /** Button zooming out of the graph */
  'vision.result.graph.zoom-out': 'Uitzoomen',
  /** Tab showing the result as a graph of its objects and arrays */
  'vision.result.view.graph': 'Grafiek',
  /** Tab showing the result as indented JSON text, to select and copy from */
  'vision.result.view.json': 'JSON',
  /** Accessible label of the tabs that switch how the result shows */
  'vision.result.view.label': 'Resultaatweergave',
  /** Tab showing the result as a tree to browse */
  'vision.result.view.tree': 'Boom',
  /** Empty state of the saved queries panel */
  'vision.saved.empty': 'Nog geen opgeslagen queries. Sla de huidige query op met de +-knop.',
  /** Empty state of a query list when the search matches nothing */
  'vision.saved.empty-search': 'Geen queries komen overeen met uw zoekopdracht',
  /** Menu item loading a saved query into the active tab */
  'vision.saved.load-in-current-tab': 'Laden in huidig tabblad',
  /** Menu item opening a saved query in a new tab */
  'vision.saved.open-in-new-tab': 'Openen in nieuw tabblad',
  /** Menu item renaming a saved query */
  'vision.saved.rename': 'Naam wijzigen',
  /** Accessible label for the button saving the current query */
  'vision.saved.save-current': 'Huidige query opslaan',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vision.saved.unavailable-variant':
    'Deze opgeslagen query gebruikte de variant "{{variant}}"; selecteer deze in de navigatiebalk om de query ermee uit te voeren.',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vision.saved.unknown-dataset':
    'De dataset "{{dataset}}" van deze opgeslagen query is hier niet beschikbaar; de huidige blijft behouden.',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vision.saved.variants-disabled':
    'Deze opgeslagen query gebruikte de variant "{{variant}}"; deze werkruimte heeft varianten uitgeschakeld, dus de query wordt zonder uitgevoerd.',
  /** Button in the settings dialog that clears the stored state */
  'vision.settings.clear-storage': 'Opslag wissen',
  /** Confirmation button for clearing the storage */
  'vision.settings.clear-storage.confirm': 'Ja, opslag wissen',
  /** Explanation of what clearing the storage does */
  'vision.settings.clear-storage.description':
    'Verwijdert je persoonlijke opgeslagen queries en de functiebibliotheek, zet de open tabbladen en deze standaardinstellingen in deze browser terug, en keert terug naar de klassieke Vision-tool. Gedeelde queries blijven behouden.',
  /** Toast shown when the saved queries could not be cleared */
  'vision.settings.clear-storage.error': 'De opgeslagen queries konden niet worden gewist',
  /** Toast shown after the storage was cleared */
  'vision.settings.clear-storage.success': 'Opslag gewist',
  /** Explanation at the top of the settings dialog */
  'vision.settings.description':
    'Standaardinstellingen voor nieuwe tabbladen. Open tabbladen behouden hun eigen opties.',
  /** Explains the setting listing the fields left out of History diffs */
  'vision.settings.history-diff.description':
    'Eén veldpad per regel. Een pad komt overeen op elke diepte van een resultaat, dus _rev verbergt de revisie van elk document erin. Elke diff kan ze nog steeds tonen.',
  /** Button restoring the default fields left out of History diffs */
  'vision.settings.history-diff.reset': 'Terugzetten naar standaardinstellingen',
  /** Label of the setting listing the fields left out of History diffs */
  'vision.settings.history-diff.title': 'Velden verborgen voor History-diffs',
  /** Title of the settings dialog */
  'vision.settings.title': 'Instellingen',
  /** Empty state of the shared queries panel */
  'vision.shared.empty':
    'Nog geen gedeelde queries. Deel een opgeslagen query om deze beschikbaar te maken voor iedereen die deze dataset gebruikt.',
  /** Shortcut description: close dialogs and menus */
  'vision.shortcuts.close': "Dialoogvensters en menu's sluiten",
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vision.shortcuts.complete': 'Een functienaam aanvullen',
  /** Shortcut description: copy the query */
  'vision.shortcuts.copy-query': 'De query kopiëren',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vision.shortcuts.extract-function': 'De projectie bij de cursor omzetten naar een functie',
  /** Shortcut description: run the query */
  'vision.shortcuts.fetch': 'De query ophalen',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vision.shortcuts.next-finding': 'Naar de volgende lint-bevinding springen',
  /** Shortcut description: reformat the query */
  'vision.shortcuts.prettify': 'De query opmaken',
  /** Title of the keyboard shortcuts dialog */
  'vision.shortcuts.title': 'Sneltoetsen',
  /** Sidebar toggle: show icons only */
  'vision.sidebar.collapse': 'Zijbalk inklappen',
  /** Sidebar toggle: show labels next to the icons */
  'vision.sidebar.expand': 'Zijbalk uitklappen',
  /** Accessible label for the sidebar navigation */
  'vision.sidebar.label': 'Vision-zijbalk',
  /** Sidebar item and drawer title for personal saved queries */
  'vision.sidebar.saved-queries': "Opgeslagen query's",
  /** Sidebar item opening the settings dialog */
  'vision.sidebar.settings': 'Instellingen',
  /** Sidebar item and drawer title for shared queries */
  'vision.sidebar.shared-queries': "Gedeelde query's",
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vision.sidebar.shortcuts': 'Sneltoetsen',
  /** Empty state of the content source map panel */
  'vision.source-map.empty':
    'Geen content source map in de reactie. Schakel "Content source map opnemen" in onder Opties en haal opnieuw op.',
  /** Accessible label of the divider between the result and the response details panel */
  'vision.split.bottom-panel':
    'Pas de grootte van het antwoorddetailpaneel aan: sleep of gebruik de pijltjestoetsen; Home en End gaan naar de grenzen, Enter zet terug',
  /** Accessible label of the divider between the request and response panes */
  'vision.split.request-response':
    'Pas de grootte van de verzoek- en antwoordvensters aan: sleep of gebruik de pijltjestoetsen; Home en End gaan naar de grenzen, Enter zet terug',
  /** Accessible label for the button closing a query tab */
  'vision.tabs.close-tab': 'Tabblad sluiten',
  /** Accessible label for the list of query tabs */
  'vision.tabs.label': 'Query-tabbladen',
  /** Accessible label for the button opening a new query tab */
  'vision.tabs.new-tab': 'Nieuw tabblad',
  /** Placeholder of the input renaming a tab */
  'vision.tabs.title-placeholder': 'Tabbladtitel',
  /** Title of a tab whose query is still empty */
  'vision.tabs.untitled': 'Naamloze query',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vision.webmcp.check-query': 'Controleer een GROQ-query in Vision',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vision.webmcp.describe-schema': 'Beschrijf het schema in Vision',
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vision.webmcp.explain-query': 'Leg een GROQ-query uit in Vision',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vision.webmcp.get-state': 'Lees het geopende Vision-tabblad',
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vision.webmcp.open-query': 'Open een GROQ-query in Vision',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vision.webmcp.preview-mutations': 'Bekijk een voorbeeld van mutaties in Vision',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vision.webmcp.run-query': 'Voer een GROQ-query uit in Vision',
})
