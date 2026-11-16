import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Kopiraj u međuspremnik',
  /** Label for deleting a query */
  'action.delete': 'Izbriši',
  /** Label for editing a query's title */
  'action.edit-title': 'Uredi naslov',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Zaustavi',
  /** Label for setting up a listener */
  'action.listen-execute': 'Slušaj',
  /** Label for query loading table */
  'action.load-queries': 'Učitaj upite',
  /** Label for loading a query */
  'action.load-query': 'Učitaj upit',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Otkaži',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Dohvati',
  /** Label for saving a query */
  'action.save-personal-copy': 'Spremi osobnu kopiju',
  /** Label for saving a personal query */
  'action.save-personal-query': 'Spremi kao osobni',
  /** Label for saving a query */
  'action.save-query': 'Spremi upit',
  /** Label for saving a shared query */
  'action.save-shared-query': 'Spremi kao dijeljeni',
  /** Label for unsharing a query */
  'action.unshare': 'Prekini dijeljenje',
  /** Label for updating a query */
  'action.update': 'Ažuriraj',

  /** Label for actions user can take */
  'label.actions': 'Akcije',
  /** Label for all saved queries */
  'label.all': 'Sve',
  /** Label for saved queries that have been edited */
  'label.edited': 'Uređeno',
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Novo',
  /** Label for query type "personal" */
  'label.personal': 'Osobno',
  /** Label for savedAt date */
  'label.saved-at': 'Spremljeno u',
  /** Saved queries */
  'label.saved-queries': 'Spremljeni upiti',
  /** Search queries */
  'label.search-queries': 'Pretraži upite',
  /** Share query */
  'label.share': 'Podijeli',
  /** Label for query type "shared" */
  'label.shared': 'Dijeljeno',
  /** Label for saved query type "team" */
  'label.team': 'Tim',
  /** Label for untitled query fallback */
  'label.untitled-query': 'Bez naslova',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'Parametri nisu valjani JSON',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Parametri',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Stupac',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Linija',
  /** Extra explanation when a 400 is returned for a release perspective on an old API version */
  'query.error.unsupported-release-perspective':
    'Ova verzija API-ja ne podržava složene perspektive. Koristite {{apiVersion}} ili noviju verziju.',
  /** Extra explanation when a 400 is returned for a variant on an incompatible API version */
  'query.error.unsupported-variant':
    'Ova verzija API-ja ne podržava varijante sadržaja. Koristite eksperimentalnu verziju API-ja ({{apiVersion}}).',
  /** Label for "Query" editor/input */
  'query.label': 'Upit',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'URL upita',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': '"End to End" vrijeme',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'Vrijeme izvršenja',
  /** Label for "Result" explorer/view */
  'result.label': 'Rezultat',
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable': 'Rezultat se ne može kodirati kao CSV',
  /** Label for "Save result as" result action */
  'result.save-result-as-format': 'Spremi rezultat kao <SaveResultButtons/>',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'n/a',

  /** Query already saved error label */
  'save-query.already-saved': 'Upit je već spremljen',
  /** Save error label */
  'save-query.error': 'Greška pri spremanju upita',
  /** Save personal copy success label */
  'save-query.personal-copy-success': 'Osobna kopija spremljena',
  /** Warning displayed before sharing a query */
  'save-query.share-warning':
    'Dijeljeni upiti pohranjuju se kao dokumenti u vašem dataset-u i računaju se u kvotu dokumenata.',
  /** Save shared query success label */
  'save-query.shared-success': 'Dijeljeni upit spremljen',
  /** Save success label */
  'save-query.success': 'Upit spremljen',
  /** Save unshared query success label */
  'save-query.unshared-success': 'Upit premješten u osobne',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'Verzija API-ja',
  /** Tooltip shown when the API version selector is locked because a variant is selected */
  'settings.api-version-locked-for-variant':
    'Kada je odabrana varijanta, verzija API-ja mora biti vX.',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'Prilagođena verzija API-ja',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Dataset',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'Neispravna verzija API-ja',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'Ostalo',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspektiva',
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    'Perspektiva "<code>previewDrafts</code>" je preimenovana u "<code>drafts</code>" i sada je zastarjela. Ova promjena je učinkovita za sve verzije s podrškom za perspektivu (>= v2021-03-25).',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Pročitaj dokumentaciju',
  /** Option for selecting default perspective */
  'settings.perspectives.default': 'Nema perspektive (zadano za API)',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Perspektive omogućuju vašem upitu da se izvodi protiv različitih "pogleda" na sadržaj u vašem datasetu',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    'Zadana perspektiva će se promijeniti sa "<code>raw</code>" na "<code>published</code>" u nadolazećoj verziji API-ja. Molimo konzultirajte dokumentaciju za više detalja.',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': 'pinned release',
  /** Label for the scheduled drafts perspective */
  'settings.perspectives.scheduled-drafts': 'Planirane skice',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspektive',

  /** Tooltip line of every control that calls Sanity Agent Actions, which bills AI credits */
  'vision.agent-actions.credits': 'Koristi jedan AI kredit po zahtjevu',
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vision.ai-credits.balance': 'Preostalo je {{balance}} od {{quota}} AI kredita ovaj mjesec.',
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vision.ai-credits.deficit':
    'Ovaj mjesec je iskorišteno {{used}} AI kredita, {{deficit}} više od uključenih {{quota}}.',
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vision.ai-credits.limit.description':
    'Vaša organizacija je ovaj mjesec iskoristila {{used}} od svojih {{quota}} AI kredita, pa su Sanity Agent Actions pauzirani do sljedećeg mjeseca ili dok se ne poveća ograničenje potrošnje.',
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vision.ai-credits.limit.description-unknown':
    'Vaša organizacija je dosegnula ograničenje potrošnje AI kredita, pa su Sanity Agent Actions pauzirani do sljedećeg mjeseca ili dok se ograničenje ne poveća.',
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vision.ai-credits.limit.learn-more': 'Kako funkcioniraju AI krediti',
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vision.ai-credits.limit.manage': 'Upravljajte AI kreditima',
  /** Title of the card shown where the organization is out of AI credits */
  'vision.ai-credits.limit.title': 'Nema više AI kredita',
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vision.ai-credits.usage': 'Korištenje AI-ja',
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vision.ai-credits.used': 'Ovaj mjesec je iskorišteno {{used}} AI kredita.',
  /** Button in the request column's action bar naming the API version requests go out with */
  'vision.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vision.api-version.button-cdn': 'API CDN {{version}}',
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vision.api-version.button-invalid': 'Nedovršena verzija API-ja',
  /** Tooltip of the API version button */
  'vision.api-version.tooltip':
    'Upiti se izvršavaju prema API verziji {{version}}. Odaberite za promjenu u Opcijama.',
  /** Tooltip of the API version button while queries go through the API CDN */
  'vision.api-version.tooltip-cdn':
    'Upiti se izvršavaju prema API CDN-u s API verzijom {{version}}. Odaberite za promjenu u Opcijama.',
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vision.api-version.tooltip-cdn-blocked':
    'Upiti se izvršavaju prema API-ju s API verzijom {{version}}, a ne prema API CDN-u: on ne poslužuje perspektivu {{perspective}}. Odaberite za promjenu u Opcijama.',
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vision.api-version.tooltip-invalid':
    'Verzija API-ja u Opcijama nije dovršena, pa se ništa ne može dohvatiti dok ne bude cjelovita.',
  /** Tooltip of the API version button while a selected variant forces the variants API version */
  'vision.api-version.tooltip-locked':
    'Upiti se izvršavaju prema API verziji {{version}}, koju zahtijeva odabrana varijanta.',
  /** Label of the document after the change in the Delta panel */
  'vision.delta.after': 'Nakon',
  /** Label of the document before the change in the Delta panel */
  'vision.delta.before': 'Prije',
  /** What the Delta panel does */
  'vision.delta.description':
    'Pokreće upit u delta načinu rada, kao što to rade GROQ web-hookovi, slušatelji i Sanity funkcije: before() i after() predstavljaju dokument prije i poslije promjene, @ je dokument nakon nje, a delta::changedAny() ih uspoređuje. Izvršava se u pregledniku pomoću groq-js. Prazna strana znači da nema dokumenta: promjena ga stvara ili briše.',
  /** Label of the document ID field in the Delta panel */
  'vision.delta.document-id': 'ID dokumenta',
  /** Shown when there is a query but no documents to compare */
  'vision.delta.empty': 'Učitajte povijest dokumenta ili upišite dokumente u polja Prije i Nakon.',
  /** Shown when the query fails in delta mode */
  'vision.delta.failed': 'Upit se nije mogao izvršiti u delta načinu rada: {{message}}',
  /** Shown when the After document is not valid JSON */
  'vision.delta.invalid-after': 'Nakon nije valjani JSON: {{message}}',
  /** Shown when the Before document is not valid JSON */
  'vision.delta.invalid-before': 'Before nije valjani JSON: {{message}}',
  /** Button loading the document's revisions from the History API */
  'vision.delta.load': 'Učitaj povijest',
  /** Shown when the history could not be loaded */
  'vision.delta.load-failed': 'Povijest se nije mogla učitati: {{message}}',
  /** A delta filter that is true for the change */
  'vision.delta.matches':
    'Podudara se: webhook ili funkcija s ovim filtrom pokreće se za ovu promjenu.',
  /** A delta filter that is false for the change */
  'vision.delta.no-match':
    'Ne podudara se: webhook ili funkcija s ovim filtrom ne pokreće se za ovu promjenu.',
  /** Shown while the query or its params cannot be sent */
  'vision.delta.no-request':
    'Ispravite upit i njegove parametre kako biste ga pokrenuli u delta načinu rada.',
  /** Heading of the delta result */
  'vision.delta.result': 'Rezultat',
  /** The After choice for a change that deletes the document */
  'vision.delta.revision.none-after': 'Ništa: promjena briše dokument',
  /** The Before choice for a change that creates the document */
  'vision.delta.revision.none-before': 'Ništa: promjena stvara dokument',
  /** A revision in the Before and After lists */
  'vision.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vision.drawer.close': 'Zatvori ploču',
  /** Explanation at the top of the Explain panel */
  'vision.explain.description':
    'Plan upita je način na koji Content Lake izvršava upit: što čita, filtrira i sortira tijekom čitanja, te što ostaje za kasnije korake. Opcija Objasni mi ovo koristi Sanity Agent Actions kako bi opisao upit i njegov plan jednostavnim riječima, pri čemu se koristi jedan AI kredit.',
  /** Shown in the Explain panel while there is no valid query to explain */
  'vision.explain.empty': 'Napišite upit da biste ga objasnili.',
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vision.explain.explain': 'Objasni mi ovo',
  /** Shown when the explanation could not be written */
  'vision.explain.failed': 'Upit se nije mogao objasniti: {{message}}',
  /** A count the index computes without reading the documents */
  'vision.explain.insight.aggregate': 'Izbrojano u indeksu, bez čitanja dokumenata.',
  /** A subquery the plan runs once for all documents */
  'vision.explain.insight.batched-subquery':
    'Podupit se izvršava jednom za sve dokumente, u jednom grupiranom dohvaćanju, a ne jednom po dokumentu.',
  /** Part of the filter runs in memory; the expression follows */
  'vision.explain.insight.filter-in-memory':
    'Dio filtra izvršava se u memoriji, nakon čitanja: svaki dokument koji indeks propusti prvo se čita, što usporava rad na velikim skupovima podataka. Spajanja (->) i funkcije u filtru ne mogu koristiti indeks.',
  /** The index sorts and limits while reading */
  'vision.explain.insight.index-sort-limit':
    'Indeks sortira i ograničava dokumente tijekom njihovog čitanja.',
  /** The plan slices in memory */
  'vision.explain.insight.slice-in-memory':
    'Isječak se uzima u memoriji nakon čitanja, a ne kao ograničenje tijekom čitanja.',
  /** The plan sorts in memory */
  'vision.explain.insight.sort-in-memory':
    'Sortiranje se odvija u memoriji, nakon čitanja svakog podudaranja. Sortirajte prema atributima po kojima indeks može sortirati.',
  /** Link under the plan insights to the guide on fast queries */
  'vision.explain.insights.guide': 'Visoke performanse GROQ-a',
  /** Heading of the plan insights in the Explain panel */
  'vision.explain.insights.title': 'Što se ističe',
  /** Button in the Explain panel fetching the query plan */
  'vision.explain.plan': 'Prikaži plan upita',
  /** Shown when the query plan could not be fetched */
  'vision.explain.plan-failed': 'Plan upita nije bilo moguće dohvatiti: {{message}}',
  /** Heading of the query plan in the Explain panel */
  'vision.explain.plan-title': 'Plan upita',
  /** Toast shown after a code snippet was copied */
  'vision.export-query.copied': 'Isječak kopiran u međuspremnik',
  /** Label for the button that copies a code snippet */
  'vision.export-query.copy': 'Kopiraj isječak',
  /** Explanation at the top of the export query dialog */
  'vision.export-query.description':
    'Pokrenite ovaj upit izvan studija pomoću jednog od ovih isječaka.',
  /** Note under the curl snippet when the query is sent as a request body rather than in the URL */
  'vision.export-query.post-body-note':
    'Upit i parametri dosežu {{size}} znakova kao parametri pretrage; od {{limit}} nadalje, @sanity/client ih šalje kao JSON tijelo umjesto u URL-u, pa isječak radi isto.',
  /** Title of the dialog that exports the query as code snippets */
  'vision.export-query.title': 'Izvezi upit',
  /** Note about authentication in the export query dialog */
  'vision.export-query.token-note':
    'Privatni skupovi podataka trebaju API token. Javni skupovi podataka mogu izostaviti Authorization zaglavlje.',
  /** Toast shown after the generated code was copied */
  'vision.export-types.copied': 'Kod kopiran u međuspremnik',
  /** Label for the button that copies the generated code */
  'vision.export-types.copy': 'Kopiraj kod',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vision.export-types.empty':
    'Prvo dohvatite upit kako bi postojao rezultat iz kojeg se mogu izvesti tipovi.',
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vision.export-types.schema-error': 'Evaluacija sheme nije uspjela: {{message}}',
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vision.export-types.source.result':
    'Izvedeno iz dohvaćenog rezultata, budući da se upit nije mogao evaluirati prema shemi radnog prostora.',
  /** Note shown when the types were derived from the workspace schema */
  'vision.export-types.source.schema':
    'Izvedeno iz sheme radnog prostora, na isti način kako to radi sanity typegen.',
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vision.export-types.stale-result':
    'Prikazani rezultat dohvaćen je za drugi upit ili parametre. Prvo dohvatite trenutni upit kako bi postojao rezultat iz kojeg se mogu izvesti tipovi.',
  /** Title of the dialog exporting TypeScript types for the result */
  'vision.export-types.title-typescript': 'Izvezi TypeScript',
  /** Title of the dialog exporting a Zod schema for the result */
  'vision.export-types.title-zod': 'Izvezi Zod',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vision.functions.add': 'Dodaj u upit',
  /** Shown on a library function the query declares the same way */
  'vision.functions.declared': 'U ovom upitu',
  /** Lint action on a call of a library function the query does not declare */
  'vision.functions.editor.add-from-library': 'Deklariraj to',
  /** Note in a function's hover documentation: the API version it needs */
  'vision.functions.editor.api-version': 'Potrebna je API verzija {{version}} ili novija',
  /** Detail of a completion for a custom function the query declares */
  'vision.functions.editor.completion-declared': 'u ovom upitu',
  /** Detail of a completion for a library function, which declares it too */
  'vision.functions.editor.completion-library': 'iz vaše knjižnice',
  /** Note in the hover documentation of a custom function the query declares */
  'vision.functions.editor.declared-on': 'Prilagođena funkcija, deklarirana u retku {{line}}',
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vision.functions.editor.delta-only':
    'Radi samo u delta načinu rada, gdje webhookovi i Sanity funkcije pokreću svoje filtre',
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vision.functions.editor.extract': 'Izdvoji u funkciju',
  /** Note in the hover documentation of a library function the query does not declare */
  'vision.functions.editor.in-library':
    'U vašoj biblioteci funkcija, nije deklarirano u ovom upitu',
  /** Link at the end of a built-in function's hover documentation */
  'vision.functions.editor.reference': 'Referenca GROQ funkcija',
  /** Explanation under the library heading in the Functions panel */
  'vision.functions.library.description':
    'Čuva se u ovom pregledniku za svaki skup podataka projekta. Dovršavanja nude ove funkcije, a lint nudi deklariranje one koju upit poziva.',
  /** Shown in the Functions panel while the library is empty */
  'vision.functions.library.empty':
    'Spremite funkciju koju upit deklarira kako biste je koristili u drugim upitima.',
  /** Heading of the functions library in the Functions panel */
  'vision.functions.library.title': 'Biblioteka',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vision.functions.query.empty':
    'Deklarirajte prilagođene funkcije na vrhu upita, ili postavite kursor u projekciju, poput author->{name}, i pritisnite gumb za izdvajanje iznad uređivača ({{shortcut}}).',
  /** Heading of the functions the query declares in the Functions panel */
  'vision.functions.query.title': 'U ovom upitu',
  /** Removes a function from the library */
  'vision.functions.remove': 'Ukloni iz biblioteke',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vision.functions.replace': 'Zamijeni u upitu',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vision.functions.reveal': 'Prikaži {{name}} u uređivaču',
  /** Button of a function the query declares that is not in the library yet */
  'vision.functions.save': 'Spremi u biblioteku',
  /** Shown on a function the query declares the way the library has it */
  'vision.functions.saved': 'Spremljeno',
  /** Button of a function the query declares differently from the library's version */
  'vision.functions.update': 'Ažuriraj biblioteku',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vision.generate.button': 'Generiraj upit',
  /** Closes the generate query bar */
  'vision.generate.close': 'Zatvori',
  /** Explanation under the generate query field */
  'vision.generate.description':
    'Sanity Agent Actions pišu GROQ na temelju vašeg opisa i tipova dokumenata, a Content Lake provjerava svaki pokušaj; svaki pokušaj koristi jedan AI kredit. Zamjenjuje upit ove kartice i pokreće ga; poništavanje u uređivaču vraća prethodni upit.',
  /** Shown when no query could be generated, above the reason */
  'vision.generate.failed': 'Upit nije moguće generirati',
  /** Accessible label of the description field in the generate query bar */
  'vision.generate.label': 'Što bi upit trebao dohvatiti?',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vision.generate.open-anyway': 'Otvori posljednji pokušaj',
  /** Placeholder of the description field in the generate query bar */
  'vision.generate.placeholder': '10 najnovijih autora, poredanih po prezimenu, a zatim imenu',
  /** Shown while the first attempt at a query is written */
  'vision.generate.progress': 'Pisanje upita…',
  /** Shown while a rejected attempt is retried */
  'vision.generate.progress-retry': 'Popravljanje upita (pokušaj {{attempt}} od {{max}})…',
  /** Button generating the query */
  'vision.generate.submit': 'Generiraj',
  /** Badge on a history entry the API CDN answered */
  'vision.history.cdn': 'API CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vision.history.cdn-cache-hit': 'Pogodak u CDN predmemoriji',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vision.history.changed': 'Promijenjeno',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vision.history.changes': 'Promjene',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vision.history.changes-failed': 'Promjene se nisu mogle prikazati.',
  /** Button retrying to show the changes of a history entry */
  'vision.history.changes-retry': 'Pokušaj ponovno',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vision.history.compared-with': 'Uspoređeno s dohvaćanjem u {{time}}',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vision.history.diff.params': 'Parametri',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vision.history.diff.query': 'Upit',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vision.history.diff.query-formatting-only': 'Promijenjeno je samo oblikovanje',
  /** Label of the diff of the query result in a history entry's changes */
  'vision.history.diff.result': 'Rezultat',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vision.history.diff.url': 'URL zahtjeva',
  /** Empty state of the history panel */
  'vision.history.empty': 'Još ništa nije dohvaćeno',
  /** Status label for a failed fetch in the history */
  'vision.history.failed': 'Neuspjelo',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vision.history.hide-hidden': 'Sakrij ih',
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vision.history.hiding': 'Skriva {{fields}}',
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vision.history.only-hidden-changed': 'Promijenjena su samo skrivena polja',
  /** History reason: a tab opened with a generated query fetched it */
  'vision.history.reason.generated': 'Generirani upit',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vision.history.reason.link': 'Otvorena poveznica',
  /** History reason: a live event matched the query's sync tags */
  'vision.history.reason.live': 'Ažuriranje uživo',
  /** History reason: the live connection asked every client to refetch */
  'vision.history.reason.live-restart': 'Veza uživo ponovno pokrenuta',
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vision.history.reason.live-start': 'Pokrenuto dohvaćanje uživo',
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vision.history.reason.load': 'Upit učitan',
  /** History reason: the fetch button was pressed */
  'vision.history.reason.manual': 'Gumb za dohvaćanje',
  /** History reason: mutations were applied from the Mutate panel */
  'vision.history.reason.mutation': 'Primijenjene mutacije',
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vision.history.reason.options': 'Opcije promijenjene',
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vision.history.reason.paste': 'Zalijepljeni URL',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vision.history.reason.resume': 'Automatsko ponovno dohvaćanje nastavljeno',
  /** History reason: the keyboard shortcut was used */
  'vision.history.reason.shortcut': 'Tipkovnički prečac',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vision.history.same-result': 'Isti rezultat',
  /** Button showing the hidden fields in a history entry's changes */
  'vision.history.show-hidden': 'Prikaži ih',
  /** Next to a history entry's changes while the hidden fields are shown */
  'vision.history.showing-hidden': 'Prikazuje se {{fields}}, skriveno prema zadanim postavkama',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vision.history.too-large': 'Prevelik za usporedbu',
  /** A history entry whose result is the same as the previous result */
  'vision.history.unchanged': 'Nema promjena',
  /** Shown in the Lint panel while the query has no lint findings */
  'vision.lint.empty':
    'Nema lint nalaza. Problemi koje GROQ linter uoči u upitu prikazuju se ovdje dok tipkate; odaberite jedan da ga označite u uređivaču.',
  /** Where a lint finding sits in the query, shown under its message */
  'vision.lint.position': 'Redak {{line}}, stupac {{column}}',
  /** Severity badge of a lint finding */
  'vision.lint.severity.error': 'Greška',
  /** Severity badge of a lint finding */
  'vision.lint.severity.hint': 'Savjet',
  /** Severity badge of a lint finding */
  'vision.lint.severity.info': 'Informacija',
  /** Severity badge of a lint finding */
  'vision.lint.severity.warning': 'Upozorenje',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vision.lint.use-suggestion': 'Koristi {{suggestion}}',
  /** Badge shown while a tab refetches automatically */
  'vision.live.active': 'Uživo',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vision.live.button': 'Dohvaćanje uživo',
  /** Tooltip of the Live button while automatic refetching is off */
  'vision.live.button.start':
    'Dohvati, a zatim ponovno dohvaćaj kad god se dokumenti u rezultatu promijene',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vision.live.button.stop':
    'Zaustavi dohvaćanje kada se dokumenti u rezultatu promijene. Dohvaćanje se i dalje izvodi na zahtjev, za rezultate koje ne dotiče nijedna promjena dokumenta, poput now()',
  /** Error shown when the live connection breaks */
  'vision.live.error': 'Ažuriranja uživo prekinuta: {{message}}',
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vision.live.stop': 'Zaustavi uživo',
  /** Button in the Mutate panel adding a mutation to the list */
  'vision.mutate.add': 'Dodaj mutaciju',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vision.mutate.add.create': 'Kreiraj dokument',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vision.mutate.add.delete': 'Izbriši dokument',
  /** Adds a mutation deleting the documents of the shown result */
  'vision.mutate.add.delete-result': 'Izbriši dokumente u rezultatu',
  /** Adds a mutation patching a document, its ID to fill in */
  'vision.mutate.add.patch': 'Zakrpaj dokument',
  /** Adds a mutation patching the documents of the shown result */
  'vision.mutate.add.patch-result': 'Izmijeni (patch) dokumente u rezultatu',
  /** Button applying the mutations a dry run showed */
  'vision.mutate.apply': 'Primijeni na {{dataset}}',
  /** Heading of the error shown when applying the mutations failed */
  'vision.mutate.apply-failed': 'Mutacije nisu primijenjene',
  /** Next to Apply while the mutations as they are have had no dry run */
  'vision.mutate.apply-needs-preview':
    'Primijeni šalje ono što je pokazao probni pokušaj: prvo pokrenite jedan.',
  /** Option giving array items without a _key one */
  'vision.mutate.auto-keys': 'Dodaj _key stavkama niza koje ga nemaju',
  /** Under the option giving array items a _key */
  'vision.mutate.auto-keys.description':
    'Studio treba _key na svakoj stavki niza kako bi je mogao uređivati.',
  /** Button showing a document's changes in the dry run */
  'vision.mutate.changes': 'Promjene',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vision.mutate.changes-failed': 'Promjene nije bilo moguće prikazati.',
  /** Button retrying to show a document's changes */
  'vision.mutate.changes-retry': 'Pokušaj ponovno',
  /** What the Mutate panel does */
  'vision.mutate.description':
    'Napišite mutacije onako kako ih prihvaća Mutations API, u obliku liste: create, createOrReplace, createIfNotExists, delete i patch, po ID-u ili GROQ upitu. Probni pokušaj pokazuje što bi one učinile svakom dokumentu, bez stvarnih promjena; Primijeni zatim zapisuje te promjene u dataset u jednoj transakciji, s vašim računom.',
  /** What the API says went wrong with one of the mutations */
  'vision.mutate.failure-item': 'Mutacija {{index}}: {{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vision.mutate.generate.button': 'Generiraj mutacije',
  /** Explanation under the generate mutations field */
  'vision.mutate.generate.description':
    'Sanity Agent Actions pišu mutacije na temelju vašeg opisa, dokumenata u rezultatu i njihovih tipova, a probni pokušaj provjerava svaki pokušaj; svaki pokušaj koristi jedan AI kredit. One zamjenjuju mutacije ovdje, gdje ih poništavanje vraća natrag; ništa se ne zapisuje dok ih ne primijenite.',
  /** Shown when no mutations could be generated, above the reason */
  'vision.mutate.generate.failed': 'Mutacije nije bilo moguće generirati',
  /** Accessible label of the description field in the generate mutations bar */
  'vision.mutate.generate.label': 'Što bi mutacije trebale učiniti?',
  /** Placeholder of the description field in the generate mutations bar */
  'vision.mutate.generate.placeholder': 'Promijeni naslov dokumenata u rezultatu u foobar',
  /** Shown while the first attempt at the mutations is written */
  'vision.mutate.generate.progress': 'Pisanje mutacija…',
  /** Shown while an attempt the dry run turned down is retried */
  'vision.mutate.generate.progress-retry':
    'Ispravljanje mutacija (pokušaj {{attempt}} od {{max}})…',
  /** Under the dry run: the fields the diffs leave out */
  'vision.mutate.hiding': 'Promjene izostavljaju {{fields}}, kao i Povijest.',
  /** Shown when the mutations are not valid JSON */
  'vision.mutate.invalid-json': 'Mutacije nisu valjan JSON: {{message}}',
  /** Shown when a mutation does not name exactly one thing to do */
  'vision.mutate.invalid-mutation':
    'Mutacija {{index}} treba točno jednu od sljedećih: create, createOrReplace, createIfNotExists, delete ili patch.',
  /** Label of the mutations editor */
  'vision.mutate.mutations': 'Mutacije',
  /** The dry run touched no documents */
  'vision.mutate.no-documents': 'Mutacije ne utječu ni na jedan dokument.',
  /** Shown when the JSON is not a list of mutations */
  'vision.mutate.not-a-list':
    'Napišite listu mutacija, jednu mutaciju ili tijelo zahtjeva s listom mutacija.',
  /** A document the mutations create */
  'vision.mutate.operation.create': 'Stvori',
  /** A document the mutations delete */
  'vision.mutate.operation.delete': 'Brisanje',
  /** A document the mutations touch without changing its content */
  'vision.mutate.operation.none': 'Bez promjene',
  /** A document the mutations change */
  'vision.mutate.operation.update': 'Ažuriranje',
  /** Button running the mutations as a dry run */
  'vision.mutate.preview': 'Probno pokretanje',
  /** Heading of the error shown when the dry run failed */
  'vision.mutate.preview-failed': 'Probno pokretanje nije uspjelo',
  /** Heading of the dry run's outcome */
  'vision.mutate.preview-heading': 'Probno pokretanje',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vision.mutate.stale':
    'Mutacije, dataset ili opcije promijenjeni su nakon ovog probnog pokretanja. Pokrenite ga ponovno kako biste ih primijenili.',
  /** How many documents the dry run changes and leaves as they are */
  'vision.mutate.summary': 'Promijenjeno: {{changed}} · Nepromijenjeno: {{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vision.network.cache': 'Predmemorija',
  /** The API CDN answered from its cache */
  'vision.network.cache.hit': 'Pogodak',
  /** Under the details of a CDN cache hit */
  'vision.network.cache.hit-explained':
    'CDN je odgovorio pohranjenim odgovorom iz lokacije blizu vas; upit nije dosegao API.',
  /** The API CDN answered with a response this session had not seen */
  'vision.network.cache.miss': 'Promašaj, koliko ova sesija može ustanoviti',
  /** The API answered, which caches nothing */
  'vision.network.cache.none': 'Nema, API odgovara na svaki zahtjev svježim sadržajem',
  /** Shown in the Network panel while there is no response */
  'vision.network.empty':
    'Pokrenite upit kako biste vidjeli koji je endpoint odgovorio na njega, je li odgovor došao iz predmemorije i gdje je izvršen.',
  /** In the Network panel: the endpoint that answered */
  'vision.network.endpoint': 'Odgovorio',
  /** The live API answered */
  'vision.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vision.network.endpoint.cdn': 'API CDN',
  /** In the Network panel: the HTTP method the query was sent with */
  'vision.network.method': 'Metoda',
  /** The query and its params went in the URL */
  'vision.network.method.get': 'GET, s upitom i parametrima u URL-u',
  /** The query and its params went in the request body */
  'vision.network.method.post': 'POST, s upitom i parametrima kao JSON tijelom',
  /** Under the method of a POST request: why the query was not sent in the URL */
  'vision.network.method.post-explained':
    'Upit i parametri iznose {{size}} znakova kao parametri pretraživanja; od {{limit}} nadalje, @sanity/client ih šalje kao JSON tijelo, jer API ograničava duljinu URL-a. Opcije ostaju u URL-u.',
  /** In the Network panel: the region the query ran in */
  'vision.network.region': 'Upit je izvršen u',
  /** The response did not say where the query ran */
  'vision.network.region.unknown': 'Nije prijavljeno',
  /** In the Network panel: the round trip and the time on the server */
  'vision.network.timing': 'Vrijeme',
  /** The round trip and the server's time for the query, in milliseconds */
  'vision.network.timing.value': '{{e2e}}ms povratno putovanje, {{server}}ms na poslužitelju',
  /** In the Network panel: the trace of the request, for Sanity support */
  'vision.network.trace': 'ID traga',
  /** Hint in the Network panel while queries go to the API */
  'vision.network.use-cdn-hint':
    'Uključite opciju Koristi API CDN u Opcijama kako biste slali upite putem CDN-a.',
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vision.network.you': 'Vi',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vision.options.dataset.follows-workspace': 'Prati radni prostor',
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vision.options.dataset.pin': 'Prikvači skup podataka',
  /** Hint under the dataset field while a dataset is pinned */
  'vision.options.dataset.pinned': 'Prikvačeno; radni prostor možda koristi drugi skup podataka',
  /** Button that makes the tab follow the workspace's dataset again */
  'vision.options.dataset.use-workspace': 'Koristi skup podataka radnog prostora',
  /** Label for the "Include content source map" switch */
  'vision.options.include-source-map': 'Uključi mapu izvora sadržaja',
  /** Description for the "Include content source map" switch */
  'vision.options.include-source-map.description':
    'Dodaje resultSourceMap u odgovor, prikazan na kartici Mapa izvora sadržaja.',
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vision.options.perspective.global': 'Globalno ({{name}})',
  /** Label of the switch that sends queries to the API CDN */
  'vision.options.use-cdn': 'Koristi API CDN',
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vision.options.use-cdn.anonymous':
    'Ovaj studio vas prijavljuje pomoću kolačića, koji API CDN nikada ne prima: odgovara kao da je riječ o anonimnom posjetitelju, s onim što prikazuje javni skup podataka.',
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vision.options.use-cdn.blocked':
    'API CDN ne poslužuje nacrte ili izdanja, pa upiti s perspektivom {{perspective}} idu na API. S objavljenom ili sirovom perspektivom koriste CDN.',
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vision.options.use-cdn.blocked.title': 'Upiti idu na API, a ne na CDN',
  /** Description of the API CDN switch */
  'vision.options.use-cdn.description':
    'Šalje upit na API CDN, slično kao useCdn: true u @sanity/client, s objavljenom i sirovom perspektivom: nacrti i izdanja uvijek idu na API. Njegovi odgovori se predmemoriraju do jedne minute; ploča Mreža prikazuje kada je odgovor došao iz predmemorije.',
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vision.options.use-cdn.use-published': 'Koristi objavljenu perspektivu',
  /** Label of the variant field */
  'vision.options.variant-label': 'Varijanta',
  /** Variant option sending the navbar's variant, named */
  'vision.options.variant.global': 'Globalno ({{name}})',
  /** Variant option sending the navbar's variant while none is selected there */
  'vision.options.variant.global-none': 'Globalno (ništa nije odabrano)',
  /** Variant option sending no variant */
  'vision.options.variant.none': 'Ništa',
  /** Accessible label for collapsing a bottom panel */
  'vision.panel.collapse': 'Sažmi ploču',
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vision.panel.delta': 'Delta',
  /** Accessible label for expanding a bottom panel */
  'vision.panel.expand': 'Proširi ploču',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vision.panel.explain': 'Objasni',
  /** Label of the Functions tab in the response panel */
  'vision.panel.functions': 'Funkcije',
  /** Label of the "History" tab in the response panel */
  'vision.panel.history': 'Povijest',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vision.panel.lint': 'Lint',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vision.panel.mutate': 'Promijeni',
  /** Label of the Network tab in the response panel */
  'vision.panel.network': 'Mreža',
  /** Label of the "Options" panel in the request column */
  'vision.panel.options': 'Opcije',
  /** Label of the "Response" tab in the response panel */
  'vision.panel.response': 'Odgovor',
  /** Label of the "Content Source Map" tab in the response panel */
  'vision.panel.source-map': 'Mapa izvornog sadržaja',
  /** Button adding an item to a list param in the params form */
  'vision.params-form.add-item': 'Dodaj stavku',
  /** Placeholder of a params form field that takes any JSON value */
  'vision.params-form.any-placeholder':
    'Bilo koja JSON vrijednost; ostali tekst se šalje kao niz znakova',
  /** Shown in the params form when the query uses no params */
  'vision.params-form.empty':
    'Upit ne koristi nijedan parametar. Svaki $naziv u njemu ovdje dobiva polje.',
  /** Shown in the params form while the params JSON cannot be parsed */
  'vision.params-form.invalid-json':
    'Parametri nisu valjani JSON. Ispravite ih u JSON prikazu kako biste ih ovdje mogli uređivati.',
  /** A boolean param's value is not true or false; it is sent anyway */
  'vision.params-form.invalid.boolean': 'Nije true ili false; poslano kao {{value}}',
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vision.params-form.invalid.document-type':
    'Nije tip dokumenta u ovom radnom prostoru; ipak poslano',
  /** A whole number param (a slice bound) holds a fraction */
  'vision.params-form.invalid.integer': 'Nije cijeli broj, što je potrebno za isječke',
  /** A list param's value is not a list; it is sent anyway */
  'vision.params-form.invalid.list': 'Nije popis; poslano kao {{value}}',
  /** A number param's value is not a number; it is sent anyway */
  'vision.params-form.invalid.number': 'Nije broj; poslano kao tekst',
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vision.params-form.invalid.option': 'Nije jedna od poznatih vrijednosti; ipak poslano',
  /** A text param's value is not text; it is sent anyway */
  'vision.params-form.invalid.string': 'Nije tekst; poslano kao {{value}}',
  /** Accessible label of an item input of a list param in the params form */
  'vision.params-form.item-label': '${{name}}, stavka {{index}}',
  /** Placeholder of an item input of a list param in the params form */
  'vision.params-form.item-placeholder': 'Stavka',
  /** Under a params form field whose param has no value */
  'vision.params-form.missing': 'Nije postavljeno: upit neće uspjeti dok ne dobije vrijednost',
  /** Shown in the params form when the workspace schema could not be read */
  'vision.params-form.no-schema':
    'Tipovi dolaze isključivo iz upita: shema radnog prostora nije mogla biti pročitana.',
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vision.params-form.not-set': 'Nije postavljeno',
  /** Button setting a date and time param to the current time */
  'vision.params-form.now': 'Sada',
  /** Button removing a param the query does not use from the params */
  'vision.params-form.remove': 'Ukloni',
  /** Accessible label of the button removing an item from a list param */
  'vision.params-form.remove-item': 'Ukloni stavku',
  /** Shown in the params form when the query does not parse */
  'vision.params-form.syntax-error':
    'Upit se ne može parsirati, pa su njegovi parametri prikazani bez tipova.',
  /** Type hint of a params form field: any JSON value */
  'vision.params-form.type.any': 'bilo koja JSON vrijednost',
  /** Type hint of a params form field: true or false */
  'vision.params-form.type.boolean': 'true ili false',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vision.params-form.type.datetime': 'datum i vrijeme (ISO 8601)',
  /** Type hint of a params form field: a document ID */
  'vision.params-form.type.document-id': 'ID dokumenta',
  /** Type hint of a params form field: one of the workspace's document types */
  'vision.params-form.type.document-type': 'tip dokumenta',
  /** Type hint of a params form field: a whole number */
  'vision.params-form.type.integer': 'cijeli broj',
  /** Type hint of a params form field: a list of values */
  'vision.params-form.type.list': 'popis, svaki {{type}}',
  /** Type hint of a params form field: a number */
  'vision.params-form.type.number': 'broj',
  /** Type hint of a params form field: text */
  'vision.params-form.type.string': 'tekst',
  /** Heading of the params the query does not use, listed in the params form */
  'vision.params-form.unused': 'Upit ne koristi',
  /** Before the expressions that use a param, in the params form */
  'vision.params-form.used-in': 'Korišteno u',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vision.params.fit-height': 'Prilagođeno sadržaju, {{height}} piksela',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vision.params.resize':
    'Promijeni veličinu parametara: povucite ili koristite tipke sa strelicama; dvaput kliknite ili pritisnite Enter za ponovno prilagođavanje sadržaju',
  /** Tab showing the params as a form inferred from the query */
  'vision.params.view.form': 'Obrazac',
  /** Tab showing the params as JSON */
  'vision.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vision.params.view.label': 'Uredi parametre kao',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vision.paste.parsed': 'Upit učitan iz zalijepljenog URL-a',
  /** Toast shown after a curl command for a query was pasted and loaded into the tab */
  'vision.paste.parsed-curl': 'Upit učitan iz zalijepljene cURL naredbe',
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vision.paste.unavailable-variant':
    'Zalijepljeni URL koristio je varijantu "{{variant}}"; odaberite je u navigacijskoj traci za pokretanje upita s njom.',
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vision.paste.unknown-dataset':
    'Skup podataka "{{dataset}}" iz zalijepljenog URL-a ovdje nije dostupan, zadržava se trenutni.',
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vision.paste.unsupported-perspective':
    'Perspektiva iz zalijepljenog URL-a ovdje nije podržana, zadržava se trenutna.',
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vision.paste.variants-disabled':
    'Zalijepljeni URL koristio je varijantu "{{variant}}"; ovaj radni prostor ima isključene varijante, pa se upit izvršava bez nje.',
  /** Accessible label for the query actions menu */
  'vision.query.actions': 'Radnje upita',
  /** Tooltip when automatic refetching is not available for the API version */
  'vision.query.auto-refetch.unsupported':
    'Automatsko ponovno dohvaćanje zahtijeva API verziju v2021-03-25 ili noviju.',
  /** Toast shown after the query was copied */
  'vision.query.copied': 'Upit je kopiran u međuspremnik',
  /** Menu item copying the query text */
  'vision.query.copy': 'Kopiraj upit',
  /** Menu item opening the export query dialog */
  'vision.query.export': 'Izvezi upit…',
  /** Menu item reformatting the query */
  'vision.query.prettify': 'Uljepšaj upit',
  /** Toast shown when the query could not be reformatted */
  'vision.query.prettify.failed': 'Upit se nije mogao uljepšati',
  /** Menu item saving the query to the personal saved queries */
  'vision.query.save': 'Spremi upit',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vision.query.stop': 'Zaustavi',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vision.query.stop.description': 'Zaustavi dohvaćanje',
  /** Explanation in the settings section about the redesigned experience */
  'vision.redesign.settings.description':
    'Koristite redizajniran Vision alat. Prebacivanje natrag zadržava vaše kartice i postavke u ovom pregledniku za sljedeći put kad ga isprobate.',
  /** Title of the settings section about the redesigned experience */
  'vision.redesign.settings.title': 'Redizajniran Vision (beta)',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vision.redesign.switch-to-classic': 'Prebaci na klasični Vision',
  /** Toast button that switches to the redesigned tool */
  'vision.redesign.toast.accept': 'Isprobaj odmah',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vision.redesign.toast.description':
    'Kartice upita, uživo ponovno dohvaćanje, detalji odgovora i izvozi. Možete se vratiti natrag u bilo kojem trenutku.',
  /** Toast button that hides the invitation */
  'vision.redesign.toast.dismiss': 'Ne sada',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vision.redesign.toast.title': 'Isprobajte redizajnirani Vision',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vision.redesign.try': 'Isprobaj redizajn',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vision.redesign.try.description':
    'Prebacite se na redizajnirani Vision, u beta verziji. Možete se vratiti natrag u bilo kojem trenutku putem njegove bočne trake.',
  /** Empty state of the response panel before anything was fetched */
  'vision.response.empty': 'Još ništa nije dohvaćeno',
  /** Label for the payload size in the response tab */
  'vision.response.payload-size': 'Veličina podataka',
  /** Label for the sync tags in the response tab */
  'vision.response.sync-tags': 'Oznake sinkronizacije',
  /** Shown when the response carried no sync tags */
  'vision.response.sync-tags.none': 'Nema oznaka sinkronizacije u odgovoru',
  /** Under the query URL when the request went out as a POST body rather than that URL */
  'vision.response.url.sent-as-post':
    'Poslano kao POST tijelo: upit i parametri su predugi za URL, pa ih je @sanity/client poslao kao JSON. Lijepljenje ovog URL-a u Vision i dalje učitava upit.',
  /** Accessible label for the result actions menu */
  'vision.result.actions': 'Radnje nad rezultatom',
  /** Toast shown after the result was copied */
  'vision.result.copied': 'Rezultat je kopiran u međuspremnik',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vision.result.copied-value': '{{path}} kopiran',
  /** Menu item and button copying the result as JSON */
  'vision.result.copy': 'Kopiraj rezultat',
  /** Button next to each property in the result tree, copying its value */
  'vision.result.copy-value': 'Kopiraj vrijednost',
  /** Empty state of the result view */
  'vision.result.empty': 'Pokrenite upit da biste ovdje vidjeli rezultat',
  /** Button exporting the result as CSV */
  'vision.result.export-csv': 'Izvezi CSV',
  /** Button exporting the result as JSON */
  'vision.result.export-json': 'Izvezi JSON',
  /** Menu item opening the TypeScript export dialog */
  'vision.result.export-typescript': 'Izvezi TypeScript…',
  /** Menu item opening the Zod export dialog */
  'vision.result.export-zod': 'Izvezi Zod…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vision.result.graph.collapse': 'Sakrij ono što sadrži',
  /** Button fitting the whole graph in view */
  'vision.result.graph.fit': 'Prilagodi prikazu',
  /** Accessible label of the graph, saying how to move around in it */
  'vision.result.graph.label':
    'Graf rezultata: povucite za pomicanje, pomičite kotačić za zumiranje; dok je fokusiran, tipke sa strelicama pomiču, + i - zumiraju, 0 prilagođava prikazu',
  /** Ends the note on a graph that leaves part of this result out */
  'vision.result.graph.left-out-hint': 'Prikazi stabla i JSON-a pokazuju sve to.',
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vision.result.graph.node-limit': 'Crtaju se samo prvih {{nodes}} objekata i nizova.',
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vision.result.graph.partial': 'Za {{nodes}} su navedeni samo prvih {{rows}} unosa.',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vision.result.graph.partial.node': '{{name}} ({{entries}} unosa)',
  /** Title of the graph node of the result itself */
  'vision.result.graph.root': 'rezultat',
  /** Button zooming into the graph */
  'vision.result.graph.zoom-in': 'Zumiraj',
  /** Button zooming out of the graph */
  'vision.result.graph.zoom-out': 'Odzumiraj',
  /** Tab showing the result as a graph of its objects and arrays */
  'vision.result.view.graph': 'Graf',
  /** Tab showing the result as indented JSON text, to select and copy from */
  'vision.result.view.json': 'JSON',
  /** Accessible label of the tabs that switch how the result shows */
  'vision.result.view.label': 'Prikaz rezultata',
  /** Tab showing the result as a tree to browse */
  'vision.result.view.tree': 'Stablo',
  /** Empty state of the saved queries panel */
  'vision.saved.empty': 'Nema spremljenih upita. Spremite trenutni upit pomoću gumba +.',
  /** Empty state of a query list when the search matches nothing */
  'vision.saved.empty-search': 'Nijedan upit ne odgovara vašoj pretrazi',
  /** Menu item loading a saved query into the active tab */
  'vision.saved.load-in-current-tab': 'Učitaj u trenutnu karticu',
  /** Menu item opening a saved query in a new tab */
  'vision.saved.open-in-new-tab': 'Otvori u novoj kartici',
  /** Menu item renaming a saved query */
  'vision.saved.rename': 'Preimenuj',
  /** Accessible label for the button saving the current query */
  'vision.saved.save-current': 'Spremi trenutni upit',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vision.saved.unavailable-variant':
    'Ovaj spremljeni upit koristio je varijantu "{{variant}}"; odaberite je na navigacijskoj traci kako biste pokrenuli upit s njom.',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vision.saved.unknown-dataset':
    'Skup podataka "{{dataset}}" ovog spremljenog upita nije dostupan ovdje, zadržava se trenutni.',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vision.saved.variants-disabled':
    'Ovaj spremljeni upit koristio je varijantu "{{variant}}"; ovaj radni prostor ima isključene varijante, pa se upit pokreće bez nje.',
  /** Button in the settings dialog that clears the stored state */
  'vision.settings.clear-storage': 'Očisti pohranu',
  /** Confirmation button for clearing the storage */
  'vision.settings.clear-storage.confirm': 'Da, očisti pohranu',
  /** Explanation of what clearing the storage does */
  'vision.settings.clear-storage.description':
    'Briše vaše osobne spremljene upite i biblioteku funkcija, ponovno postavlja otvorene kartice i ove zadane postavke u ovom pregledniku te vraća na klasični Vision alat. Dijeljeni upiti se zadržavaju.',
  /** Toast shown when the saved queries could not be cleared */
  'vision.settings.clear-storage.error': 'Nije moguće očistiti spremljene upite',
  /** Toast shown after the storage was cleared */
  'vision.settings.clear-storage.success': 'Pohrana očišćena',
  /** Explanation at the top of the settings dialog */
  'vision.settings.description':
    'Zadane postavke za nove kartice. Otvorene kartice zadržavaju vlastite opcije.',
  /** Explains the setting listing the fields left out of History diffs */
  'vision.settings.history-diff.description':
    'Jedna putanja polja po retku. Putanja se podudara na bilo kojoj dubini rezultata, pa _rev skriva reviziju svakog dokumenta u njemu. Svaka razlika (diff) i dalje ih može prikazati.',
  /** Button restoring the default fields left out of History diffs */
  'vision.settings.history-diff.reset': 'Vrati na zadane postavke',
  /** Label of the setting listing the fields left out of History diffs */
  'vision.settings.history-diff.title': 'Polja skrivena iz razlika (diff) u povijesti',
  /** Title of the settings dialog */
  'vision.settings.title': 'Postavke',
  /** Empty state of the shared queries panel */
  'vision.shared.empty':
    'Još nema dijeljenih upita. Podijelite spremljeni upit kako biste ga učinili dostupnim svima koji koriste ovaj skup podataka.',
  /** Shortcut description: close dialogs and menus */
  'vision.shortcuts.close': 'Zatvori dijaloge i izbornike',
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vision.shortcuts.complete': 'Dovrši naziv funkcije',
  /** Shortcut description: copy the query */
  'vision.shortcuts.copy-query': 'Kopiraj upit',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vision.shortcuts.extract-function': 'Izdvoji projekciju na mjestu pokazivača u funkciju',
  /** Shortcut description: run the query */
  'vision.shortcuts.fetch': 'Dohvati upit',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vision.shortcuts.next-finding': 'Skoči na sljedeći lint nalaz',
  /** Shortcut description: reformat the query */
  'vision.shortcuts.prettify': 'Uljepšaj upit',
  /** Title of the keyboard shortcuts dialog */
  'vision.shortcuts.title': 'Prečaci na tipkovnici',
  /** Sidebar toggle: show icons only */
  'vision.sidebar.collapse': 'Sakrij bočnu traku',
  /** Sidebar toggle: show labels next to the icons */
  'vision.sidebar.expand': 'Proširi bočnu traku',
  /** Accessible label for the sidebar navigation */
  'vision.sidebar.label': 'Bočna traka Vision',
  /** Sidebar item and drawer title for personal saved queries */
  'vision.sidebar.saved-queries': 'Spremljeni upiti',
  /** Sidebar item opening the settings dialog */
  'vision.sidebar.settings': 'Postavke',
  /** Sidebar item and drawer title for shared queries */
  'vision.sidebar.shared-queries': 'Dijeljeni upiti',
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vision.sidebar.shortcuts': 'Tipkovnički prečaci',
  /** Empty state of the content source map panel */
  'vision.source-map.empty':
    'Nema mape izvora sadržaja u odgovoru. Uključite "Uključi mapu izvora sadržaja" u Opcijama i dohvatite ponovo.',
  /** Accessible label of the divider between the result and the response details panel */
  'vision.split.bottom-panel':
    'Promijenite veličinu ploče s detaljima odgovora: povucite ili koristite tipke sa strelicama; Home i End idu do granica, Enter resetira',
  /** Accessible label of the divider between the request and response panes */
  'vision.split.request-response':
    'Promijenite veličinu ploča zahtjeva i odgovora: povucite ili koristite tipke sa strelicama; Home i End idu do granica, Enter resetira',
  /** Accessible label for the button closing a query tab */
  'vision.tabs.close-tab': 'Zatvori karticu',
  /** Accessible label for the list of query tabs */
  'vision.tabs.label': 'Kartice upita',
  /** Accessible label for the button opening a new query tab */
  'vision.tabs.new-tab': 'Nova kartica',
  /** Placeholder of the input renaming a tab */
  'vision.tabs.title-placeholder': 'Naziv kartice',
  /** Title of a tab whose query is still empty */
  'vision.tabs.untitled': 'Neimenovani upit',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vision.webmcp.check-query': 'Provjeri GROQ upit u Vision',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vision.webmcp.describe-schema': 'Opiši shemu u Vision',
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vision.webmcp.explain-query': 'Objasni GROQ upit u Vision',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vision.webmcp.get-state': 'Pročitaj otvorenu karticu u Vision',
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vision.webmcp.open-query': 'Otvori GROQ upit u Vision',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vision.webmcp.preview-mutations': 'Pregledaj mutacije u Vision',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vision.webmcp.run-query': 'Pokreni GROQ upit u Vision',
})
