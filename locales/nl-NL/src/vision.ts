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
  'vista.agent-actions.credits': 'Gebruikt één AI-credit per verzoek',
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vista.ai-credits.balance': 'Nog {{balance}} van {{quota}} AI-credits over deze maand.',
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vista.ai-credits.deficit':
    '{{used}} AI-credits gebruikt deze maand, {{deficit}} meer dan de inbegrepen {{quota}}.',
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vista.ai-credits.limit.description':
    'Je organisatie heeft deze maand {{used}} van de {{quota}} AI-credits gebruikt, dus Sanity Agent Actions zijn gepauzeerd tot volgende maand of totdat het uitgavenlimiet wordt verhoogd.',
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vista.ai-credits.limit.description-unknown':
    'Je organisatie heeft haar uitgavenlimiet voor AI-credits bereikt, dus Sanity Agent Actions zijn gepauzeerd tot volgende maand of totdat het limiet wordt verhoogd.',
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vista.ai-credits.limit.learn-more': 'Hoe AI-credits werken',
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vista.ai-credits.limit.manage': 'AI-credits beheren',
  /** Title of the card shown where the organization is out of AI credits */
  'vista.ai-credits.limit.title': 'Geen AI-credits meer',
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vista.ai-credits.usage': 'AI-gebruik',
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vista.ai-credits.used': '{{used}} AI-credits gebruikt deze maand.',
  /** Button in the request column's action bar naming the API version requests go out with */
  'vista.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vista.api-version.button-cdn': 'API CDN {{version}}',
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vista.api-version.button-invalid': 'Onvolledige API-versie',
  /** Tooltip of the API version button */
  'vista.api-version.tooltip':
    "Query's worden uitgevoerd tegen API-versie {{version}}. Selecteer om dit te wijzigen in Opties.",
  /** Tooltip of the API version button while queries go through the API CDN */
  'vista.api-version.tooltip-cdn':
    "Query's worden uitgevoerd tegen de API CDN met API-versie {{version}}. Selecteer om dit te wijzigen in Opties.",
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vista.api-version.tooltip-cdn-blocked':
    "Query's worden uitgevoerd tegen de API met API-versie {{version}}, niet de API CDN: deze bedient het {{perspective}}-perspectief niet. Selecteer om dit te wijzigen in Opties.",
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vista.api-version.tooltip-invalid':
    'De API-versie in Opties is onvolledig, dus er kan niets worden opgehaald totdat deze compleet is.',
  /** Tooltip of the API version button while a selected variant forces the variants API version */
  'vista.api-version.tooltip-locked':
    "Query's worden uitgevoerd tegen API-versie {{version}}, die de geselecteerde variant vereist.",
  /** Label of the document after the change in the Delta panel */
  'vista.delta.after': 'Na',
  /** Label of the document before the change in the Delta panel */
  'vista.delta.before': 'Voor',
  /** What the Delta panel does */
  'vista.delta.description':
    'Voert de query uit in delta-modus, zoals GROQ-gebaseerde webhooks, listeners en Sanity Functions dat doen: before() en after() zijn een document voor en na een wijziging, @ is het document erna, en delta::changedAny() vergelijkt ze. Dit wordt uitgevoerd in de browser met groq-js. Een lege kant betekent geen document: de wijziging maakt het aan of verwijdert het.',
  /** Label of the document ID field in the Delta panel */
  'vista.delta.document-id': 'Document-ID',
  /** Shown when there is a query but no documents to compare */
  'vista.delta.empty':
    'Laad de geschiedenis van een document, of schrijf de documenten in Voor en Na.',
  /** Shown when the query fails in delta mode */
  'vista.delta.failed': 'De query kon niet worden uitgevoerd in delta-modus: {{message}}',
  /** Shown when the After document is not valid JSON */
  'vista.delta.invalid-after': 'Na is geen geldige JSON: {{message}}',
  /** Shown when the Before document is not valid JSON */
  'vista.delta.invalid-before': 'Before is geen geldige JSON: {{message}}',
  /** Button loading the document's revisions from the History API */
  'vista.delta.load': 'Geschiedenis laden',
  /** Shown when the history could not be loaded */
  'vista.delta.load-failed': 'De geschiedenis kon niet worden geladen: {{message}}',
  /** A delta filter that is true for the change */
  'vista.delta.matches':
    'Komt overeen: een webhook of functie met dit filter wordt uitgevoerd voor deze wijziging.',
  /** A delta filter that is false for the change */
  'vista.delta.no-match':
    'Komt niet overeen: een webhook of functie met dit filter wordt niet uitgevoerd voor deze wijziging.',
  /** Shown while the query or its params cannot be sent */
  'vista.delta.no-request':
    'Corrigeer de query en de bijbehorende parameters om deze in delta-modus uit te voeren.',
  /** Heading of the delta result */
  'vista.delta.result': 'Resultaat',
  /** The After choice for a change that deletes the document */
  'vista.delta.revision.none-after': 'Niets: de wijziging verwijdert het document',
  /** The Before choice for a change that creates the document */
  'vista.delta.revision.none-before': 'Niets: de wijziging maakt het document aan',
  /** A revision in the Before and After lists */
  'vista.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vista.drawer.close': 'Paneel sluiten',
  /** Explanation at the top of the Explain panel */
  'vista.explain.description':
    'Het queryplan is hoe de Content Lake de query uitvoert: wat er wordt gelezen, gefilterd en gesorteerd tijdens het lezen, en wat er overblijft voor latere stappen. Leg dit uit laat Sanity Agent Actions de query en het plan in gewone taal beschrijven, wat één AI-credit kost.',
  /** Shown in the Explain panel while there is no valid query to explain */
  'vista.explain.empty': 'Schrijf een query om deze uit te leggen.',
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vista.explain.explain': 'Leg dit uit',
  /** Shown when the explanation could not be written */
  'vista.explain.failed': 'De uitleg kon niet worden geschreven: {{message}}',
  /** A count the index computes without reading the documents */
  'vista.explain.insight.aggregate': 'Geteld in de index, zonder de documenten te lezen.',
  /** A subquery the plan runs once for all documents */
  'vista.explain.insight.batched-subquery':
    'De subquery wordt één keer uitgevoerd voor alle documenten, in één gebundelde ophaalactie, niet per document.',
  /** Part of the filter runs in memory; the expression follows */
  'vista.explain.insight.filter-in-memory':
    'Een deel van het filter wordt in het geheugen uitgevoerd, na het lezen: elk document dat door de index wordt doorgelaten, wordt eerst gelezen, wat traag wordt bij grote datasets. Joins (->) en functies in een filter kunnen de index niet gebruiken.',
  /** The index sorts and limits while reading */
  'vista.explain.insight.index-sort-limit':
    'De index sorteert en beperkt de documenten tijdens het lezen ervan.',
  /** The plan slices in memory */
  'vista.explain.insight.slice-in-memory':
    'De slice wordt in het geheugen genomen na het lezen, niet als limiet tijdens het lezen.',
  /** The plan sorts in memory */
  'vista.explain.insight.sort-in-memory':
    'Sorteren gebeurt in het geheugen, na het lezen van elke overeenkomst. Sorteer op attributen waarop de index kan sorteren.',
  /** Link under the plan insights to the guide on fast queries */
  'vista.explain.insights.guide': 'Hoogwaardige prestaties met GROQ',
  /** Heading of the plan insights in the Explain panel */
  'vista.explain.insights.title': 'Wat opvalt',
  /** Button in the Explain panel fetching the query plan */
  'vista.explain.plan': 'Toon het queryplan',
  /** Shown when the query plan could not be fetched */
  'vista.explain.plan-failed': 'Het queryplan kon niet worden opgehaald: {{message}}',
  /** Heading of the query plan in the Explain panel */
  'vista.explain.plan-title': 'Queryplan',
  /** Toast shown after a code snippet was copied */
  'vista.export-query.copied': 'Snippet gekopieerd naar klembord',
  /** Label for the button that copies a code snippet */
  'vista.export-query.copy': 'Snippet kopiëren',
  /** Explanation at the top of the export query dialog */
  'vista.export-query.description':
    'Voer deze query buiten de studio uit met een van deze snippets.',
  /** Title of the dialog that exports the query as code snippets */
  'vista.export-query.title': 'Query exporteren',
  /** Note about authentication in the export query dialog */
  'vista.export-query.token-note':
    'Privé-datasets hebben een API-token nodig. Bij openbare datasets kan de Authorization-header worden weggelaten.',
  /** Toast shown after the generated code was copied */
  'vista.export-types.copied': 'Code gekopieerd naar klembord',
  /** Label for the button that copies the generated code */
  'vista.export-types.copy': 'Code kopiëren',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vista.export-types.empty':
    'Haal eerst de query op, zodat er een resultaat is waaruit types kunnen worden afgeleid.',
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vista.export-types.schema-error': 'Schema-evaluatie mislukt: {{message}}',
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vista.export-types.source.result':
    'Afgeleid van het opgehaalde resultaat, omdat de query niet kon worden geëvalueerd tegen het workspace-schema.',
  /** Note shown when the types were derived from the workspace schema */
  'vista.export-types.source.schema':
    'Afgeleid van het workspace-schema, op dezelfde manier als sanity typegen dat doet.',
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vista.export-types.stale-result':
    'Het getoonde resultaat is opgehaald voor een andere query of andere parameters. Haal eerst de huidige query op, zodat er een resultaat is waaruit types kunnen worden afgeleid.',
  /** Title of the dialog exporting TypeScript types for the result */
  'vista.export-types.title-typescript': 'TypeScript exporteren',
  /** Title of the dialog exporting a Zod schema for the result */
  'vista.export-types.title-zod': 'Zod exporteren',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vista.functions.add': 'Toevoegen aan query',
  /** Shown on a library function the query declares the same way */
  'vista.functions.declared': 'In deze query',
  /** Lint action on a call of a library function the query does not declare */
  'vista.functions.editor.add-from-library': 'Declareer het',
  /** Note in a function's hover documentation: the API version it needs */
  'vista.functions.editor.api-version': 'Vereist API-versie {{version}} of hoger',
  /** Detail of a completion for a custom function the query declares */
  'vista.functions.editor.completion-declared': 'in deze query',
  /** Detail of a completion for a library function, which declares it too */
  'vista.functions.editor.completion-library': 'uit je bibliotheek',
  /** Note in the hover documentation of a custom function the query declares */
  'vista.functions.editor.declared-on': 'Aangepaste functie, gedeclareerd op regel {{line}}',
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vista.functions.editor.delta-only':
    'Werkt alleen in delta-modus, waarin webhooks en Sanity Functions hun filters uitvoeren',
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vista.functions.editor.extract': 'Extraheren naar functie',
  /** Note in the hover documentation of a library function the query does not declare */
  'vista.functions.editor.in-library': 'In je functiebibliotheek, niet gedeclareerd in deze query',
  /** Link at the end of a built-in function's hover documentation */
  'vista.functions.editor.reference': 'GROQ-functiereferentie',
  /** Explanation under the library heading in the Functions panel */
  'vista.functions.library.description':
    'Bewaard in deze browser voor elke dataset van het project. Aanvullingen bieden deze functies aan, en lint biedt aan om een query-oproepen als zodanig te declareren.',
  /** Shown in the Functions panel while the library is empty */
  'vista.functions.library.empty':
    'Sla een functie die de query declareert op om deze in andere queries te gebruiken.',
  /** Heading of the functions library in the Functions panel */
  'vista.functions.library.title': 'Bibliotheek',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vista.functions.query.empty':
    'Declareer aangepaste functies bovenaan de query, of plaats de cursor in een projectie, zoals author->{name}, en klik op de extraheerknop boven de editor ({{shortcut}}).',
  /** Heading of the functions the query declares in the Functions panel */
  'vista.functions.query.title': 'In deze query',
  /** Removes a function from the library */
  'vista.functions.remove': 'Verwijderen uit de bibliotheek',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vista.functions.replace': 'Vervangen in query',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vista.functions.reveal': 'Toon {{name}} in de editor',
  /** Button of a function the query declares that is not in the library yet */
  'vista.functions.save': 'Opslaan in bibliotheek',
  /** Shown on a function the query declares the way the library has it */
  'vista.functions.saved': 'Opgeslagen',
  /** Button of a function the query declares differently from the library's version */
  'vista.functions.update': 'Bibliotheek bijwerken',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vista.generate.button': 'Query genereren',
  /** Closes the generate query bar */
  'vista.generate.close': 'Sluiten',
  /** Explanation under the generate query field */
  'vista.generate.description':
    'Sanity Agent Actions schrijven de GROQ op basis van uw beschrijving en de documenttypes, en de Content Lake controleert elke poging; elke poging gebruikt één AI-credit. Dit vervangt de query van dit tabblad en voert deze uit; ongedaan maken in de editor herstelt de vorige query.',
  /** Shown when no query could be generated, above the reason */
  'vista.generate.failed': 'De query kon niet worden gegenereerd',
  /** Accessible label of the description field in the generate query bar */
  'vista.generate.label': 'Wat moet de query ophalen?',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vista.generate.open-anyway': 'Open de laatste poging',
  /** Placeholder of the description field in the generate query bar */
  'vista.generate.placeholder':
    'De 10 meest recente auteurs, gesorteerd op achternaam en vervolgens voornaam',
  /** Shown while the first attempt at a query is written */
  'vista.generate.progress': 'Query wordt geschreven…',
  /** Shown while a rejected attempt is retried */
  'vista.generate.progress-retry': 'Query wordt gecorrigeerd (poging {{attempt}} van {{max}})…',
  /** Button generating the query */
  'vista.generate.submit': 'Genereren',
  /** Badge on a history entry the API CDN answered */
  'vista.history.cdn': 'API CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vista.history.cdn-cache-hit': 'CDN-cachetreffer',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vista.history.changed': 'Gewijzigd',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vista.history.changes': 'Wijzigingen',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vista.history.changes-failed': 'De wijzigingen konden niet worden weergegeven.',
  /** Button retrying to show the changes of a history entry */
  'vista.history.changes-retry': 'Opnieuw proberen',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vista.history.compared-with': 'Vergeleken met de fetch om {{time}}',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vista.history.diff.params': 'Params',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vista.history.diff.query': 'Query',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vista.history.diff.query-formatting-only': 'Alleen de opmaak is gewijzigd',
  /** Label of the diff of the query result in a history entry's changes */
  'vista.history.diff.result': 'Resultaat',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vista.history.diff.url': 'Request-URL',
  /** Empty state of the history panel */
  'vista.history.empty': 'Nog niets opgehaald',
  /** Status label for a failed fetch in the history */
  'vista.history.failed': 'Mislukt',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vista.history.hide-hidden': 'Verbergen',
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vista.history.hiding': '{{fields}} verborgen',
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vista.history.only-hidden-changed': 'Alleen verborgen velden zijn gewijzigd',
  /** History reason: a tab opened with a generated query fetched it */
  'vista.history.reason.generated': 'Gegenereerde query',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vista.history.reason.link': 'Link geopend',
  /** History reason: a live event matched the query's sync tags */
  'vista.history.reason.live': 'Live-update',
  /** History reason: the live connection asked every client to refetch */
  'vista.history.reason.live-restart': 'Live-verbinding opnieuw gestart',
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vista.history.reason.live-start': 'Live-fetch gestart',
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vista.history.reason.load': 'Query geladen',
  /** History reason: the fetch button was pressed */
  'vista.history.reason.manual': 'Fetch-knop',
  /** History reason: mutations were applied from the Mutate panel */
  'vista.history.reason.mutation': 'Mutaties toegepast',
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vista.history.reason.options': 'Opties gewijzigd',
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vista.history.reason.paste': 'URL geplakt',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vista.history.reason.resume': 'Automatisch opnieuw ophalen hervat',
  /** History reason: the keyboard shortcut was used */
  'vista.history.reason.shortcut': 'Sneltoets',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vista.history.same-result': 'Zelfde resultaat',
  /** Button showing the hidden fields in a history entry's changes */
  'vista.history.show-hidden': 'Toon ze',
  /** Next to a history entry's changes while the hidden fields are shown */
  'vista.history.showing-hidden': '{{fields}} worden weergegeven, standaard verborgen',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vista.history.too-large': 'Te groot om te vergelijken',
  /** A history entry whose result is the same as the previous result */
  'vista.history.unchanged': 'Geen wijzigingen',
  /** Shown in the Lint panel while the query has no lint findings */
  'vista.lint.empty':
    'Geen lintbevindingen. Problemen die de GROQ-linter in de query ontdekt, worden hier weergegeven terwijl u typt; kies er een om deze in de editor te selecteren.',
  /** Where a lint finding sits in the query, shown under its message */
  'vista.lint.position': 'Regel {{line}}, kolom {{column}}',
  /** Severity badge of a lint finding */
  'vista.lint.severity.error': 'Fout',
  /** Severity badge of a lint finding */
  'vista.lint.severity.hint': 'Tip',
  /** Severity badge of a lint finding */
  'vista.lint.severity.info': 'Info',
  /** Severity badge of a lint finding */
  'vista.lint.severity.warning': 'Waarschuwing',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vista.lint.use-suggestion': 'Gebruik {{suggestion}}',
  /** Badge shown while a tab refetches automatically */
  'vista.live.active': 'Live',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vista.live.button': 'Live ophalen',
  /** Tooltip of the Live button while automatic refetching is off */
  'vista.live.button.start':
    'Haal op en haal daarna opnieuw op telkens wanneer de documenten in het resultaat veranderen',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vista.live.button.stop':
    'Stop met ophalen wanneer de documenten in het resultaat veranderen. Ophalen werkt nog steeds op aanvraag, voor resultaten die geen enkele documentwijziging raakt, zoals now()',
  /** Error shown when the live connection breaks */
  'vista.live.error': 'Live updates verbroken: {{message}}',
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vista.live.stop': 'Stop live',
  /** Button in the Mutate panel adding a mutation to the list */
  'vista.mutate.add': 'Mutatie toevoegen',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vista.mutate.add.create': 'Een document aanmaken',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vista.mutate.add.delete': 'Een document verwijderen',
  /** Adds a mutation deleting the documents of the shown result */
  'vista.mutate.add.delete-result': 'De documenten in het resultaat verwijderen',
  /** Adds a mutation patching a document, its ID to fill in */
  'vista.mutate.add.patch': 'Een document patchen',
  /** Adds a mutation patching the documents of the shown result */
  'vista.mutate.add.patch-result': 'De documenten in het resultaat patchen',
  /** Button applying the mutations a dry run showed */
  'vista.mutate.apply': 'Toepassen op {{dataset}}',
  /** Heading of the error shown when applying the mutations failed */
  'vista.mutate.apply-failed': 'De mutaties zijn niet toegepast',
  /** Next to Apply while the mutations as they are have had no dry run */
  'vista.mutate.apply-needs-preview':
    'Toepassen verzendt wat een dry run liet zien: voer er eerst een uit.',
  /** Option giving array items without a _key one */
  'vista.mutate.auto-keys': 'Voeg een _key toe aan array-items die er geen hebben',
  /** Under the option giving array items a _key */
  'vista.mutate.auto-keys.description':
    'De studio heeft er een nodig op elk array-item om het te kunnen bewerken.',
  /** Button showing a document's changes in the dry run */
  'vista.mutate.changes': 'Wijzigingen',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vista.mutate.changes-failed': 'De wijzigingen konden niet worden weergegeven.',
  /** Button retrying to show a document's changes */
  'vista.mutate.changes-retry': 'Opnieuw proberen',
  /** What the Mutate panel does */
  'vista.mutate.description':
    'Schrijf mutaties zoals de Mutations API ze accepteert, in een lijst: create, createOrReplace, createIfNotExists, delete en patch, op ID of via een GROQ-query. Een dry run laat zien wat ze met elk document zouden doen zonder iets te wijzigen; Toepassen schrijft ze vervolgens in één transactie naar de dataset, met jouw account.',
  /** What the API says went wrong with one of the mutations */
  'vista.mutate.failure-item': 'Mutatie {{index}}: {{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vista.mutate.generate.button': 'Mutaties genereren',
  /** Explanation under the generate mutations field */
  'vista.mutate.generate.description':
    'Sanity Agent Actions schrijven de mutaties op basis van jouw beschrijving, de documenten in het resultaat en hun types, en een dry run controleert elke poging; elke poging gebruikt één AI-credit. Ze vervangen de mutaties hier, waar ongedaan maken deze terugbrengt; er wordt niets geschreven totdat je ze toepast.',
  /** Shown when no mutations could be generated, above the reason */
  'vista.mutate.generate.failed': 'De mutaties konden niet worden gegenereerd',
  /** Accessible label of the description field in the generate mutations bar */
  'vista.mutate.generate.label': 'Wat moeten de mutaties doen?',
  /** Placeholder of the description field in the generate mutations bar */
  'vista.mutate.generate.placeholder':
    'Wijzig de titel van de documenten in het resultaat naar foobar',
  /** Shown while the first attempt at the mutations is written */
  'vista.mutate.generate.progress': 'Mutaties worden geschreven…',
  /** Shown while an attempt the dry run turned down is retried */
  'vista.mutate.generate.progress-retry':
    'Mutaties worden hersteld (poging {{attempt}} van {{max}})…',
  /** Under the dry run: the fields the diffs leave out */
  'vista.mutate.hiding': 'De wijzigingen laten {{fields}} weg, zoals Geschiedenis dat doet.',
  /** Shown when the mutations are not valid JSON */
  'vista.mutate.invalid-json': 'De mutaties zijn geen geldige JSON: {{message}}',
  /** Shown when a mutation does not name exactly one thing to do */
  'vista.mutate.invalid-mutation':
    'Mutatie {{index}} heeft precies één van create, createOrReplace, createIfNotExists, delete of patch nodig.',
  /** Label of the mutations editor */
  'vista.mutate.mutations': 'Mutaties',
  /** The dry run touched no documents */
  'vista.mutate.no-documents': 'De mutaties raken geen documenten.',
  /** Shown when the JSON is not a list of mutations */
  'vista.mutate.not-a-list':
    'Schrijf een lijst met mutaties, een enkele mutatie, of een request body met een lijst met mutaties.',
  /** A document the mutations create */
  'vista.mutate.operation.create': 'Aanmaken',
  /** A document the mutations delete */
  'vista.mutate.operation.delete': 'Verwijderen',
  /** A document the mutations touch without changing its content */
  'vista.mutate.operation.none': 'Geen wijziging',
  /** A document the mutations change */
  'vista.mutate.operation.update': 'Bijwerken',
  /** Button running the mutations as a dry run */
  'vista.mutate.preview': 'Droogloop',
  /** Heading of the error shown when the dry run failed */
  'vista.mutate.preview-failed': 'De droogloop is mislukt',
  /** Heading of the dry run's outcome */
  'vista.mutate.preview-heading': 'Droogloop',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vista.mutate.stale':
    'De mutaties, de dataset of de opties zijn gewijzigd na deze droogloop. Voer deze opnieuw uit om ze toe te passen.',
  /** How many documents the dry run changes and leaves as they are */
  'vista.mutate.summary': 'Gewijzigd: {{changed}} · Ongewijzigd: {{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vista.network.cache': 'Cache',
  /** The API CDN answered from its cache */
  'vista.network.cache.hit': 'Treffer',
  /** Under the details of a CDN cache hit */
  'vista.network.cache.hit-explained':
    'De CDN antwoordde met een gecachte reactie, vanaf een locatie bij u in de buurt; de query heeft de API niet bereikt.',
  /** The API CDN answered with a response this session had not seen */
  'vista.network.cache.miss': 'Geen treffer, voor zover deze sessie kan vaststellen',
  /** The API answered, which caches nothing */
  'vista.network.cache.none': 'Geen, de API beantwoordt elk verzoek met verse content',
  /** Shown in the Network panel while there is no response */
  'vista.network.empty':
    'Haal de query op om te zien welk eindpunt deze heeft beantwoord, of dit vanuit een cache was, en waar deze is uitgevoerd.',
  /** In the Network panel: the endpoint that answered */
  'vista.network.endpoint': 'Beantwoord door',
  /** The live API answered */
  'vista.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vista.network.endpoint.cdn': 'API CDN',
  /** In the Network panel: the region the query ran in */
  'vista.network.region': 'Query uitgevoerd in',
  /** The response did not say where the query ran */
  'vista.network.region.unknown': 'Niet gerapporteerd',
  /** In the Network panel: the round trip and the time on the server */
  'vista.network.timing': 'Tijd',
  /** The round trip and the server's time for the query, in milliseconds */
  'vista.network.timing.value': '{{e2e}}ms retourtijd, {{server}}ms op de server',
  /** In the Network panel: the trace of the request, for Sanity support */
  'vista.network.trace': 'Trace-ID',
  /** Hint in the Network panel while queries go to the API */
  'vista.network.use-cdn-hint':
    "Schakel 'Gebruik de API CDN' in bij Opties om query's via de CDN te versturen.",
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vista.network.you': 'U',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vista.options.dataset.follows-workspace': 'Volgt de workspace',
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vista.options.dataset.pin': 'Een dataset vastzetten',
  /** Hint under the dataset field while a dataset is pinned */
  'vista.options.dataset.pinned': 'Vastgezet; de werkruimte kan een andere dataset gebruiken',
  /** Button that makes the tab follow the workspace's dataset again */
  'vista.options.dataset.use-workspace': 'Dataset van de werkruimte gebruiken',
  /** Label for the "Include content source map" switch */
  'vista.options.include-source-map': 'Content source map opnemen',
  /** Description for the "Include content source map" switch */
  'vista.options.include-source-map.description':
    'Voegt resultSourceMap toe aan de respons, getoond in het tabblad Content Source Map.',
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vista.options.perspective.global': 'Algemeen ({{name}})',
  /** Label of the switch that sends queries to the API CDN */
  'vista.options.use-cdn': 'API CDN gebruiken',
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vista.options.use-cdn.anonymous':
    'Deze studio meldt je aan met een cookie, die de API CDN nooit ontvangt: deze reageert zoals bij een anonieme bezoeker, met wat een publieke dataset toont.',
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vista.options.use-cdn.blocked':
    "De API CDN levert geen drafts of releases, dus query's met het {{perspective}} perspective gaan naar de API. Met published of raw gebruiken ze de CDN.",
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vista.options.use-cdn.blocked.title': "Query's gaan naar de API, niet naar de CDN",
  /** Description of the API CDN switch */
  'vista.options.use-cdn.description':
    'Stuurt de query naar de API CDN, zoals useCdn: true in @sanity/client, met de published en raw perspectives: drafts en releases gaan altijd naar de API. Antwoorden worden tot een minuut gecached; het Network-paneel toont wanneer er een uit de cache kwam.',
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vista.options.use-cdn.use-published': 'Published perspective gebruiken',
  /** Label of the variant field */
  'vista.options.variant-label': 'Variant',
  /** Variant option sending the navbar's variant, named */
  'vista.options.variant.global': 'Algemeen ({{name}})',
  /** Variant option sending the navbar's variant while none is selected there */
  'vista.options.variant.global-none': 'Algemeen (geen geselecteerd)',
  /** Variant option sending no variant */
  'vista.options.variant.none': 'Geen',
  /** Accessible label for collapsing a bottom panel */
  'vista.panel.collapse': 'Paneel inklappen',
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vista.panel.delta': 'Delta',
  /** Accessible label for expanding a bottom panel */
  'vista.panel.expand': 'Paneel uitklappen',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vista.panel.explain': 'Uitleg',
  /** Label of the Functions tab in the response panel */
  'vista.panel.functions': 'Functies',
  /** Label of the "History" tab in the response panel */
  'vista.panel.history': 'Geschiedenis',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vista.panel.lint': 'Lint',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vista.panel.mutate': 'Muteren',
  /** Label of the Network tab in the response panel */
  'vista.panel.network': 'Netwerk',
  /** Label of the "Options" panel in the request column */
  'vista.panel.options': 'Opties',
  /** Label of the "Response" tab in the response panel */
  'vista.panel.response': 'Response',
  /** Label of the "Content Source Map" tab in the response panel */
  'vista.panel.source-map': 'Content Source Map',
  /** Button adding an item to a list param in the params form */
  'vista.params-form.add-item': 'Item toevoegen',
  /** Placeholder of a params form field that takes any JSON value */
  'vista.params-form.any-placeholder': 'Elke JSON-waarde; andere tekst wordt als string verzonden',
  /** Shown in the params form when the query uses no params */
  'vista.params-form.empty':
    'De query gebruikt geen parameters. Elke $naam erin krijgt hier een veld.',
  /** Shown in the params form while the params JSON cannot be parsed */
  'vista.params-form.invalid-json':
    'De parameters zijn geen geldige JSON. Pas ze aan in de JSON-weergave om ze hier te bewerken.',
  /** A boolean param's value is not true or false; it is sent anyway */
  'vista.params-form.invalid.boolean': 'Niet waar of onwaar; verzonden als {{value}}',
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vista.params-form.invalid.document-type': 'Geen documenttype in deze werkruimte; toch verzonden',
  /** A whole number param (a slice bound) holds a fraction */
  'vista.params-form.invalid.integer': 'Geen geheel getal, wat slices nodig hebben',
  /** A list param's value is not a list; it is sent anyway */
  'vista.params-form.invalid.list': 'Geen lijst; verzonden als {{value}}',
  /** A number param's value is not a number; it is sent anyway */
  'vista.params-form.invalid.number': 'Geen getal; verzonden als tekst',
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vista.params-form.invalid.option': 'Geen van de bekende waarden; toch verzonden',
  /** A text param's value is not text; it is sent anyway */
  'vista.params-form.invalid.string': 'Geen tekst; verzonden als {{value}}',
  /** Accessible label of an item input of a list param in the params form */
  'vista.params-form.item-label': '${{name}}, item {{index}}',
  /** Placeholder of an item input of a list param in the params form */
  'vista.params-form.item-placeholder': 'Item',
  /** Under a params form field whose param has no value */
  'vista.params-form.missing': 'Niet ingesteld: de query mislukt totdat er een waarde is',
  /** Shown in the params form when the workspace schema could not be read */
  'vista.params-form.no-schema':
    'Types komen alleen uit de query: het schema van de werkruimte kon niet worden gelezen.',
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vista.params-form.not-set': 'Niet ingesteld',
  /** Button setting a date and time param to the current time */
  'vista.params-form.now': 'Nu',
  /** Button removing a param the query does not use from the params */
  'vista.params-form.remove': 'Verwijderen',
  /** Accessible label of the button removing an item from a list param */
  'vista.params-form.remove-item': 'Item verwijderen',
  /** Shown in the params form when the query does not parse */
  'vista.params-form.syntax-error':
    'De query kan niet worden geparseerd, dus de parameters worden zonder types weergegeven.',
  /** Type hint of a params form field: any JSON value */
  'vista.params-form.type.any': 'elke JSON-waarde',
  /** Type hint of a params form field: true or false */
  'vista.params-form.type.boolean': 'waar of onwaar',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vista.params-form.type.datetime': 'datum en tijd (ISO 8601)',
  /** Type hint of a params form field: a document ID */
  'vista.params-form.type.document-id': 'document-ID',
  /** Type hint of a params form field: one of the workspace's document types */
  'vista.params-form.type.document-type': 'documenttype',
  /** Type hint of a params form field: a whole number */
  'vista.params-form.type.integer': 'geheel getal',
  /** Type hint of a params form field: a list of values */
  'vista.params-form.type.list': 'lijst, elk {{type}}',
  /** Type hint of a params form field: a number */
  'vista.params-form.type.number': 'getal',
  /** Type hint of a params form field: text */
  'vista.params-form.type.string': 'tekst',
  /** Heading of the params the query does not use, listed in the params form */
  'vista.params-form.unused': 'Niet gebruikt door de query',
  /** Before the expressions that use a param, in the params form */
  'vista.params-form.used-in': 'Gebruikt in',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vista.params.fit-height': 'Aangepast aan de inhoud, {{height}} pixels',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vista.params.resize':
    'Params vergroten of verkleinen: sleep of gebruik de pijltoetsen; dubbelklik of druk op Enter om opnieuw aan te passen aan de inhoud',
  /** Tab showing the params as a form inferred from the query */
  'vista.params.view.form': 'Formulier',
  /** Tab showing the params as JSON */
  'vista.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vista.params.view.label': 'Params bewerken als',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vista.paste.parsed': 'Query geladen vanuit geplakte URL',
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vista.paste.unavailable-variant':
    'De geplakte URL gebruikte de variant "{{variant}}"; selecteer deze in de navigatiebalk om de query hiermee uit te voeren.',
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vista.paste.unknown-dataset':
    'De dataset "{{dataset}}" in de geplakte URL is hier niet beschikbaar; de huidige dataset wordt aangehouden.',
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vista.paste.unsupported-perspective':
    'Het perspective in de geplakte URL wordt hier niet ondersteund; het huidige perspective wordt aangehouden.',
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vista.paste.variants-disabled':
    'De geplakte URL gebruikte de variant "{{variant}}"; in deze workspace zijn varianten uitgeschakeld, dus de query wordt zonder uitgevoerd.',
  /** Accessible label for the query actions menu */
  'vista.query.actions': 'Query-acties',
  /** Tooltip when automatic refetching is not available for the API version */
  'vista.query.auto-refetch.unsupported':
    'Automatisch opnieuw ophalen vereist API-versie v2021-03-25 of later.',
  /** Toast shown after the query was copied */
  'vista.query.copied': 'Query gekopieerd naar klembord',
  /** Menu item copying the query text */
  'vista.query.copy': 'Query kopiëren',
  /** Menu item opening the export query dialog */
  'vista.query.export': 'Query exporteren…',
  /** Menu item reformatting the query */
  'vista.query.prettify': 'Query opmaken',
  /** Toast shown when the query could not be reformatted */
  'vista.query.prettify.failed': 'Kon de query niet opmaken',
  /** Menu item saving the query to the personal saved queries */
  'vista.query.save': 'Query opslaan',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vista.query.stop': 'Stoppen',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vista.query.stop.description': 'Ophalen stoppen',
  /** Explanation in the settings section about the redesigned experience */
  'vista.redesign.settings.description':
    'U gebruikt de vernieuwde Vision-tool. Als u terugschakelt, blijven uw tabbladen en instellingen in deze browser bewaard voor de volgende keer dat u het probeert.',
  /** Title of the settings section about the redesigned experience */
  'vista.redesign.settings.title': 'Vernieuwde Vision (bèta)',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vista.redesign.switch-to-classic': 'Overschakelen naar klassieke Vision',
  /** Toast button that switches to the redesigned tool */
  'vista.redesign.toast.accept': 'Nu proberen',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.description':
    'Querytabbladen, live opnieuw ophalen, antwoorddetails en exports. U kunt op elk moment terugschakelen.',
  /** Toast button that hides the invitation */
  'vista.redesign.toast.dismiss': 'Niet nu',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.title': 'Probeer de vernieuwde Vision',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vista.redesign.try': 'Probeer de vernieuwing',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vista.redesign.try.description':
    'Schakel over naar de vernieuwde Vision, in bèta. U kunt op elk moment terugschakelen vanuit de zijbalk.',
  /** Empty state of the response panel before anything was fetched */
  'vista.response.empty': 'Nog niets opgehaald',
  /** Label for the payload size in the response tab */
  'vista.response.payload-size': 'Payload-grootte',
  /** Label for the sync tags in the response tab */
  'vista.response.sync-tags': 'Synchronisatietags',
  /** Shown when the response carried no sync tags */
  'vista.response.sync-tags.none': 'Geen synchronisatietags in het antwoord',
  /** Accessible label for the result actions menu */
  'vista.result.actions': 'Resultaatacties',
  /** Toast shown after the result was copied */
  'vista.result.copied': 'Resultaat gekopieerd naar klembord',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vista.result.copied-value': '{{path}} gekopieerd',
  /** Menu item and button copying the result as JSON */
  'vista.result.copy': 'Resultaat kopiëren',
  /** Button next to each property in the result tree, copying its value */
  'vista.result.copy-value': 'Waarde kopiëren',
  /** Empty state of the result view */
  'vista.result.empty': 'Voer de query uit om het resultaat hier te zien',
  /** Button exporting the result as CSV */
  'vista.result.export-csv': 'CSV exporteren',
  /** Button exporting the result as JSON */
  'vista.result.export-json': 'JSON exporteren',
  /** Menu item opening the TypeScript export dialog */
  'vista.result.export-typescript': 'TypeScript exporteren…',
  /** Menu item opening the Zod export dialog */
  'vista.result.export-zod': 'Zod exporteren…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vista.result.graph.collapse': 'Verberg wat het bevat',
  /** Button fitting the whole graph in view */
  'vista.result.graph.fit': 'Passend weergeven',
  /** Accessible label of the graph, saying how to move around in it */
  'vista.result.graph.label':
    'Resultaatgrafiek: sleep om te bewegen, scroll om te zoomen; indien gefocust, bewegen de pijltoetsen, + en - zoomen, 0 past alles in beeld',
  /** Ends the note on a graph that leaves part of this result out */
  'vista.result.graph.left-out-hint': 'De boom- en JSON-weergaven tonen alles.',
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vista.result.graph.node-limit': 'Alleen de eerste {{nodes}} objecten en arrays worden getekend.',
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vista.result.graph.partial': 'Alleen de eerste {{rows}} items worden vermeld voor {{nodes}}.',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vista.result.graph.partial.node': '{{name}} ({{entries}} items)',
  /** Title of the graph node of the result itself */
  'vista.result.graph.root': 'resultaat',
  /** Button zooming into the graph */
  'vista.result.graph.zoom-in': 'Inzoomen',
  /** Button zooming out of the graph */
  'vista.result.graph.zoom-out': 'Uitzoomen',
  /** Tab showing the result as a graph of its objects and arrays */
  'vista.result.view.graph': 'Grafiek',
  /** Tab showing the result as indented JSON text, to select and copy from */
  'vista.result.view.json': 'JSON',
  /** Accessible label of the tabs that switch how the result shows */
  'vista.result.view.label': 'Resultaatweergave',
  /** Tab showing the result as a tree to browse */
  'vista.result.view.tree': 'Boom',
  /** Empty state of the saved queries panel */
  'vista.saved.empty': "Nog geen opgeslagen query's. Sla de huidige query op met de +-knop.",
  /** Empty state of a query list when the search matches nothing */
  'vista.saved.empty-search': "Geen query's komen overeen met je zoekopdracht",
  /** Menu item loading a saved query into the active tab */
  'vista.saved.load-in-current-tab': 'Laden in huidig tabblad',
  /** Menu item opening a saved query in a new tab */
  'vista.saved.open-in-new-tab': 'Openen in nieuw tabblad',
  /** Menu item renaming a saved query */
  'vista.saved.rename': 'Naam wijzigen',
  /** Accessible label for the button saving the current query */
  'vista.saved.save-current': 'Huidige query opslaan',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vista.saved.unavailable-variant':
    'Deze opgeslagen query gebruikte de variant "{{variant}}"; selecteer deze in de navigatiebalk om de query ermee uit te voeren.',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vista.saved.unknown-dataset':
    'De dataset "{{dataset}}" van deze opgeslagen query is hier niet beschikbaar; de huidige dataset blijft behouden.',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vista.saved.variants-disabled':
    'Deze opgeslagen query gebruikte de variant "{{variant}}"; in deze werkruimte zijn varianten uitgeschakeld, dus de query wordt zonder uitgevoerd.',
  /** Button in the settings dialog that clears the stored state */
  'vista.settings.clear-storage': 'Opslag wissen',
  /** Confirmation button for clearing the storage */
  'vista.settings.clear-storage.confirm': 'Ja, opslag wissen',
  /** Explanation of what clearing the storage does */
  'vista.settings.clear-storage.description':
    "Verwijdert je persoonlijke opgeslagen query's en de functiebibliotheek, zet de open tabbladen en deze standaardinstellingen in deze browser terug, en keert terug naar de klassieke Vision-tool. Gedeelde query's blijven bewaard.",
  /** Toast shown when the saved queries could not be cleared */
  'vista.settings.clear-storage.error': "Kan de opgeslagen query's niet wissen",
  /** Toast shown after the storage was cleared */
  'vista.settings.clear-storage.success': 'Opslag gewist',
  /** Explanation at the top of the settings dialog */
  'vista.settings.description':
    'Standaardinstellingen voor nieuwe tabbladen. Open tabbladen behouden hun eigen opties.',
  /** Explains the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.description':
    'Eén veldpad per regel. Een pad komt overeen op elke diepte van een resultaat, dus _rev verbergt de revisie van elk document erin. Elke diff kan ze nog steeds tonen.',
  /** Button restoring the default fields left out of History diffs */
  'vista.settings.history-diff.reset': 'Terugzetten naar standaardinstellingen',
  /** Label of the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.title': 'Velden verborgen in History-diffs',
  /** Title of the settings dialog */
  'vista.settings.title': 'Instellingen',
  /** Empty state of the shared queries panel */
  'vista.shared.empty':
    "Nog geen gedeelde query's. Deel een opgeslagen query om deze beschikbaar te maken voor iedereen die deze dataset gebruikt.",
  /** Shortcut description: close dialogs and menus */
  'vista.shortcuts.close': "Dialoogvensters en menu's sluiten",
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vista.shortcuts.complete': 'Een functienaam aanvullen',
  /** Shortcut description: copy the query */
  'vista.shortcuts.copy-query': 'De query kopiëren',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vista.shortcuts.extract-function': 'De projectie bij de cursor omzetten naar een functie',
  /** Shortcut description: run the query */
  'vista.shortcuts.fetch': 'De query ophalen',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vista.shortcuts.next-finding': 'Spring naar de volgende lintbevinding',
  /** Shortcut description: reformat the query */
  'vista.shortcuts.prettify': 'De query opmaken',
  /** Title of the keyboard shortcuts dialog */
  'vista.shortcuts.title': 'Sneltoetsen',
  /** Sidebar toggle: show icons only */
  'vista.sidebar.collapse': 'Zijbalk inklappen',
  /** Sidebar toggle: show labels next to the icons */
  'vista.sidebar.expand': 'Zijbalk uitklappen',
  /** Accessible label for the sidebar navigation */
  'vista.sidebar.label': 'Vista-zijbalk',
  /** Sidebar item and drawer title for personal saved queries */
  'vista.sidebar.saved-queries': "Opgeslagen query's",
  /** Sidebar item opening the settings dialog */
  'vista.sidebar.settings': 'Instellingen',
  /** Sidebar item and drawer title for shared queries */
  'vista.sidebar.shared-queries': "Gedeelde query's",
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vista.sidebar.shortcuts': 'Sneltoetsen',
  /** Empty state of the content source map panel */
  'vista.source-map.empty':
    'Geen content source map in de respons. Schakel "Include content source map" in onder Opties en haal opnieuw op.',
  /** Accessible label of the divider between the result and the response details panel */
  'vista.split.bottom-panel':
    'Formaat van het paneel met responsdetails aanpassen: sleep of gebruik de pijltoetsen; Home en End gaan naar de grenzen, Enter reset',
  /** Accessible label of the divider between the request and response panes */
  'vista.split.request-response':
    'Formaat van de aanvraag- en responsvensters aanpassen: sleep of gebruik de pijltoetsen; Home en End gaan naar de grenzen, Enter reset',
  /** Accessible label for the button closing a query tab */
  'vista.tabs.close-tab': 'Tabblad sluiten',
  /** Accessible label for the list of query tabs */
  'vista.tabs.label': 'Query-tabbladen',
  /** Accessible label for the button opening a new query tab */
  'vista.tabs.new-tab': 'Nieuw tabblad',
  /** Placeholder of the input renaming a tab */
  'vista.tabs.title-placeholder': 'Tabbladtitel',
  /** Title of a tab whose query is still empty */
  'vista.tabs.untitled': 'Naamloze query',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vista.webmcp.check-query': 'Controleer een GROQ-query in Vision',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vista.webmcp.describe-schema': 'Beschrijf het schema in Vision',
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vista.webmcp.explain-query': 'Leg een GROQ-query uit in Vision',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vista.webmcp.get-state': 'Lees het geopende Vision-tabblad',
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vista.webmcp.open-query': 'Open een GROQ-query in Vision',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vista.webmcp.preview-mutations': 'Bekijk een voorbeeld van mutaties in Vision',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vista.webmcp.run-query': 'Voer een GROQ-query uit in Vision',
})
