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
  /** Tooltip shown when the API version selector is locked to vX because a variant is selected */
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
  'vista.agent-actions.credits': 'Koristi jedan AI kredit po zahtjevu',
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vista.ai-credits.balance': 'Preostalo je {{balance}} od {{quota}} AI kredita ovaj mjesec.',
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vista.ai-credits.deficit':
    'Ovaj mjesec je iskorišteno {{used}} AI kredita, {{deficit}} više od uključenih {{quota}}.',
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vista.ai-credits.limit.description':
    'Vaša organizacija je ovaj mjesec iskoristila {{used}} od {{quota}} AI kredita, pa su Sanity Agent Actions pauzirane do sljedećeg mjeseca ili dok se ne poveća ograničenje potrošnje.',
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vista.ai-credits.limit.description-unknown':
    'Vaša organizacija je dosegnula ograničenje potrošnje AI kredita, pa su Sanity Agent Actions pauzirane do sljedećeg mjeseca ili dok se ograničenje ne poveća.',
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vista.ai-credits.limit.learn-more': 'Kako funkcioniraju AI krediti',
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vista.ai-credits.limit.manage': 'Upravljaj AI kreditima',
  /** Title of the card shown where the organization is out of AI credits */
  'vista.ai-credits.limit.title': 'Nema više AI kredita',
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vista.ai-credits.usage': 'Potrošnja AI-ja',
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vista.ai-credits.used': 'Ovaj mjesec je iskorišteno {{used}} AI kredita.',
  /** Button in the request column's action bar naming the API version requests go out with */
  'vista.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vista.api-version.button-cdn': 'API CDN {{version}}',
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vista.api-version.button-invalid': 'Nedovršena verzija API-ja',
  /** Tooltip of the API version button */
  'vista.api-version.tooltip':
    'Upiti se izvršavaju prema verziji API-ja {{version}}. Odaberite za promjenu u Opcijama.',
  /** Tooltip of the API version button while queries go through the API CDN */
  'vista.api-version.tooltip-cdn':
    'Upiti se izvršavaju prema API CDN-u s verzijom API-ja {{version}}. Odaberite za promjenu u Opcijama.',
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vista.api-version.tooltip-cdn-blocked':
    'Upiti se izvršavaju prema API-ju s verzijom {{version}}, a ne prema API CDN-u: on ne poslužuje perspektivu {{perspective}}. Odaberite za promjenu u Opcijama.',
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vista.api-version.tooltip-invalid':
    'Verzija API-ja u Opcijama nije dovršena, pa se ništa ne može dohvatiti dok ne bude potpuna.',
  /** Tooltip of the API version button while a selected variant forces the experimental API */
  'vista.api-version.tooltip-locked':
    'Upiti se izvršavaju prema verziji API-ja {{version}}, koja je potrebna za odabranu varijantu.',
  /** Label of the document after the change in the Delta panel */
  'vista.delta.after': 'Nakon',
  /** Label of the document before the change in the Delta panel */
  'vista.delta.before': 'Prije',
  /** What the Delta panel does */
  'vista.delta.description':
    'Pokreće upit u delta načinu rada, kao što to rade GROQ web-hookovi, slušatelji (listeners) i Sanity Functions: before() i after() predstavljaju dokument prije i poslije promjene, @ je dokument nakon promjene, a delta::changedAny() ih uspoređuje. Izvršava se u pregledniku pomoću groq-js. Prazna strana znači da nema dokumenta: promjena ga stvara ili briše.',
  /** Label of the document ID field in the Delta panel */
  'vista.delta.document-id': 'ID dokumenta',
  /** Shown when there is a query but no documents to compare */
  'vista.delta.empty': 'Učitajte povijest dokumenta ili upišite dokumente u polja Prije i Nakon.',
  /** Shown when the query fails in delta mode */
  'vista.delta.failed': 'Upit se nije mogao izvršiti u delta načinu rada: {{message}}',
  /** Shown when the After document is not valid JSON */
  'vista.delta.invalid-after': 'Nakon nije valjan JSON: {{message}}',
  /** Shown when the Before document is not valid JSON */
  'vista.delta.invalid-before': 'Before nije valjan JSON: {{message}}',
  /** Button loading the document's revisions from the History API */
  'vista.delta.load': 'Učitaj povijest',
  /** Shown when the history could not be loaded */
  'vista.delta.load-failed': 'Povijest se nije mogla učitati: {{message}}',
  /** A delta filter that is true for the change */
  'vista.delta.matches':
    'Podudara se: webhook ili funkcija s ovim filterom pokreće se za ovu promjenu.',
  /** A delta filter that is false for the change */
  'vista.delta.no-match':
    'Ne podudara se: webhook ili funkcija s ovim filterom ne pokreće se za ovu promjenu.',
  /** Shown while the query or its params cannot be sent */
  'vista.delta.no-request':
    'Ispravite upit i njegove parametre kako biste ga pokrenuli u delta načinu.',
  /** Heading of the delta result */
  'vista.delta.result': 'Rezultat',
  /** The After choice for a change that deletes the document */
  'vista.delta.revision.none-after': 'Ništa: promjena briše dokument',
  /** The Before choice for a change that creates the document */
  'vista.delta.revision.none-before': 'Ništa: promjena stvara dokument',
  /** A revision in the Before and After lists */
  'vista.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vista.drawer.close': 'Zatvori panel',
  /** Explanation at the top of the Explain panel */
  'vista.explain.description':
    'Plan upita je način na koji Content Lake izvršava upit: što čita, filtrira i sortira tijekom čitanja, te što ostaje za kasnije korake. Opcija Objasni mi ovo koristi Sanity Agent Actions kako bi opisao upit i njegov plan jednostavnim riječima, što koristi jedan AI kredit.',
  /** Shown in the Explain panel while there is no valid query to explain */
  'vista.explain.empty': 'Napišite upit kako biste ga objasnili.',
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vista.explain.explain': 'Objasni mi ovo',
  /** Shown when the explanation could not be written */
  'vista.explain.failed': 'Upit se nije mogao objasniti: {{message}}',
  /** A count the index computes without reading the documents */
  'vista.explain.insight.aggregate': 'Izbrojano u indeksu, bez čitanja dokumenata.',
  /** A subquery the plan runs once for all documents */
  'vista.explain.insight.batched-subquery':
    'Podupit se izvršava jednom za sve dokumente, u jednom grupnom dohvatu, a ne jednom po dokumentu.',
  /** Part of the filter runs in memory; the expression follows */
  'vista.explain.insight.filter-in-memory':
    'Dio filtera izvršava se u memoriji, nakon čitanja: svaki dokument koji propusti indeks prvo se učitava, što usporava rad na velikim skupovima podataka. Spajanja (->) i funkcije u filteru ne mogu koristiti indeks.',
  /** The index sorts and limits while reading */
  'vista.explain.insight.index-sort-limit':
    'Indeks sortira i ograničava dokumente tijekom čitanja.',
  /** The plan slices in memory */
  'vista.explain.insight.slice-in-memory':
    'Isječak se uzima u memoriji nakon čitanja, a ne kao ograničenje tijekom čitanja.',
  /** The plan sorts in memory */
  'vista.explain.insight.sort-in-memory':
    'Sortiranje se odvija u memoriji, nakon čitanja svakog podudaranja. Sortirajte prema atributima po kojima indeks može sortirati.',
  /** Link under the plan insights to the guide on fast queries */
  'vista.explain.insights.guide': 'Visoke performanse GROQ',
  /** Heading of the plan insights in the Explain panel */
  'vista.explain.insights.title': 'Što se ističe',
  /** Button in the Explain panel fetching the query plan */
  'vista.explain.plan': 'Prikaži plan upita',
  /** Shown when the query plan could not be fetched */
  'vista.explain.plan-failed': 'Plan upita se nije mogao dohvatiti: {{message}}',
  /** Heading of the query plan in the Explain panel */
  'vista.explain.plan-title': 'Plan upita',
  /** Toast shown after a code snippet was copied */
  'vista.export-query.copied': 'Isječak kopiran u međuspremnik',
  /** Label for the button that copies a code snippet */
  'vista.export-query.copy': 'Kopiraj isječak',
  /** Explanation at the top of the export query dialog */
  'vista.export-query.description':
    'Pokrenite ovaj upit izvan studija pomoću jednog od ovih isječaka.',
  /** Title of the dialog that exports the query as code snippets */
  'vista.export-query.title': 'Izvezi upit',
  /** Note about authentication in the export query dialog */
  'vista.export-query.token-note':
    'Privatni skupovi podataka trebaju API token. Javni skupovi podataka mogu izostaviti zaglavlje Authorization.',
  /** Toast shown after the generated code was copied */
  'vista.export-types.copied': 'Kôd kopiran u međuspremnik',
  /** Label for the button that copies the generated code */
  'vista.export-types.copy': 'Kopiraj kôd',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vista.export-types.empty':
    'Najprije dohvatite upit kako bi postojao rezultat iz kojeg se mogu izvesti tipovi.',
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vista.export-types.schema-error': 'Procjena sheme nije uspjela: {{message}}',
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vista.export-types.source.result':
    'Izvedeno iz dohvaćenog rezultata, jer upit nije mogao biti procijenjen prema shemi radnog prostora.',
  /** Note shown when the types were derived from the workspace schema */
  'vista.export-types.source.schema':
    'Izvedeno iz sheme radnog prostora, na isti način kao što to radi sanity typegen.',
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vista.export-types.stale-result':
    'Prikazani rezultat dohvaćen je za drugi upit ili parametre. Najprije dohvatite trenutni upit kako bi postojao rezultat iz kojeg se mogu izvesti tipovi.',
  /** Title of the dialog exporting TypeScript types for the result */
  'vista.export-types.title-typescript': 'Izvezi TypeScript',
  /** Title of the dialog exporting a Zod schema for the result */
  'vista.export-types.title-zod': 'Izvezi Zod',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vista.functions.add': 'Dodaj u upit',
  /** Shown on a library function the query declares the same way */
  'vista.functions.declared': 'U ovom upitu',
  /** Lint action on a call of a library function the query does not declare */
  'vista.functions.editor.add-from-library': 'Deklariraj je',
  /** Note in a function's hover documentation: the API version it needs */
  'vista.functions.editor.api-version': 'Potrebna je API verzija {{version}} ili novija',
  /** Detail of a completion for a custom function the query declares */
  'vista.functions.editor.completion-declared': 'u ovom upitu',
  /** Detail of a completion for a library function, which declares it too */
  'vista.functions.editor.completion-library': 'iz vaše knjižnice',
  /** Note in the hover documentation of a custom function the query declares */
  'vista.functions.editor.declared-on': 'Prilagođena funkcija, deklarirana u retku {{line}}',
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vista.functions.editor.delta-only':
    'Radi samo u delta načinu, gdje webhooks i Sanity Functions pokreću svoje filtre',
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vista.functions.editor.extract': 'Izdvoji u funkciju',
  /** Note in the hover documentation of a library function the query does not declare */
  'vista.functions.editor.in-library': 'U vašoj knjižnici funkcija, nije deklarirana u ovom upitu',
  /** Link at the end of a built-in function's hover documentation */
  'vista.functions.editor.reference': 'Referenca GROQ funkcija',
  /** Explanation under the library heading in the Functions panel */
  'vista.functions.library.description':
    'Pohranjeno u ovom pregledniku za svaki skup podataka projekta. Dovršavanje nudi ove funkcije, a lint nudi da se jedna od njih deklarira u upitima.',
  /** Shown in the Functions panel while the library is empty */
  'vista.functions.library.empty':
    'Spremite funkciju koju upit deklarira kako biste je koristili u drugim upitima.',
  /** Heading of the functions library in the Functions panel */
  'vista.functions.library.title': 'Biblioteka',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vista.functions.query.empty':
    'Deklarirajte prilagođene funkcije na vrhu upita, ili postavite kursor u projekciju, poput author->{name}, i pritisnite gumb za izdvajanje iznad uređivača ({{shortcut}}).',
  /** Heading of the functions the query declares in the Functions panel */
  'vista.functions.query.title': 'U ovom upitu',
  /** Removes a function from the library */
  'vista.functions.remove': 'Ukloni iz biblioteke',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vista.functions.replace': 'Zamijeni u upitu',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vista.functions.reveal': 'Prikaži {{name}} u uređivaču',
  /** Button of a function the query declares that is not in the library yet */
  'vista.functions.save': 'Spremi u biblioteku',
  /** Shown on a function the query declares the way the library has it */
  'vista.functions.saved': 'Spremljeno',
  /** Button of a function the query declares differently from the library's version */
  'vista.functions.update': 'Ažuriraj biblioteku',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vista.generate.button': 'Generiraj upit',
  /** Closes the generate query bar */
  'vista.generate.close': 'Zatvori',
  /** Explanation under the generate query field */
  'vista.generate.description':
    'Sanity Agent Actions piše GROQ na temelju vašeg opisa i vrsta dokumenata, a Content Lake provjerava svaki pokušaj; svaki pokušaj koristi jedan AI kredit. Time se zamjenjuje upit ove kartice i pokreće se; poništavanje u uređivaču vraća prethodni upit.',
  /** Shown when no query could be generated, above the reason */
  'vista.generate.failed': 'Upit se nije mogao generirati',
  /** Accessible label of the description field in the generate query bar */
  'vista.generate.label': 'Što bi upit trebao dohvatiti?',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vista.generate.open-anyway': 'Otvori posljednji pokušaj',
  /** Placeholder of the description field in the generate query bar */
  'vista.generate.placeholder': '10 najnovijih autora, poredanih po prezimenu, a zatim po imenu',
  /** Shown while the first attempt at a query is written */
  'vista.generate.progress': 'Pisanje upita…',
  /** Shown while a rejected attempt is retried */
  'vista.generate.progress-retry': 'Popravljanje upita (pokušaj {{attempt}} od {{max}})…',
  /** Button generating the query */
  'vista.generate.submit': 'Generiraj',
  /** Badge on a history entry the API CDN answered */
  'vista.history.cdn': 'API CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vista.history.cdn-cache-hit': 'Pogodak u CDN predmemoriji',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vista.history.changed': 'Promijenjeno',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vista.history.changes': 'Promjene',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vista.history.changes-failed': 'Promjene nije bilo moguće prikazati.',
  /** Button retrying to show the changes of a history entry */
  'vista.history.changes-retry': 'Pokušaj ponovno',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vista.history.compared-with': 'Uspoređeno s dohvaćanjem u {{time}}',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vista.history.diff.params': 'Parametri',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vista.history.diff.query': 'Upit',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vista.history.diff.query-formatting-only': 'Promijenjeno je samo formatiranje',
  /** Label of the diff of the query result in a history entry's changes */
  'vista.history.diff.result': 'Rezultat',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vista.history.diff.url': 'URL zahtjeva',
  /** Empty state of the history panel */
  'vista.history.empty': 'Još ništa nije dohvaćeno',
  /** Status label for a failed fetch in the history */
  'vista.history.failed': 'Neuspjelo',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vista.history.hide-hidden': 'Sakrij ih',
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vista.history.hiding': 'Skrivanje {{fields}}',
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vista.history.only-hidden-changed': 'Promijenjena su samo skrivena polja',
  /** History reason: a tab opened with a generated query fetched it */
  'vista.history.reason.generated': 'Generirani upit',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vista.history.reason.link': 'Otvorena poveznica',
  /** History reason: a live event matched the query's sync tags */
  'vista.history.reason.live': 'Ažuriranje uživo',
  /** History reason: the live connection asked every client to refetch */
  'vista.history.reason.live-restart': 'Veza uživo ponovno pokrenuta',
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vista.history.reason.live-start': 'Dohvaćanje uživo pokrenuto',
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vista.history.reason.load': 'Upit učitan',
  /** History reason: the fetch button was pressed */
  'vista.history.reason.manual': 'Gumb za dohvaćanje',
  /** History reason: mutations were applied from the Mutate panel */
  'vista.history.reason.mutation': 'Primijenjene mutacije',
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vista.history.reason.options': 'Opcije promijenjene',
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vista.history.reason.paste': 'Zalijepljeni URL',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vista.history.reason.resume': 'Automatsko ponovno dohvaćanje nastavljeno',
  /** History reason: the keyboard shortcut was used */
  'vista.history.reason.shortcut': 'Tipkovnički prečac',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vista.history.same-result': 'Isti rezultat',
  /** Button showing the hidden fields in a history entry's changes */
  'vista.history.show-hidden': 'Prikaži ih',
  /** Next to a history entry's changes while the hidden fields are shown */
  'vista.history.showing-hidden': 'Prikazuje se {{fields}}, skriveno prema zadanim postavkama',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vista.history.too-large': 'Prevelik za usporedbu',
  /** A history entry whose result is the same as the previous result */
  'vista.history.unchanged': 'Nema promjena',
  /** Shown in the Lint panel while the query has no lint findings */
  'vista.lint.empty':
    'Nema lint nalaza. Problemi koje GROQ linter uoči u upitu prikazuju se ovdje dok tipkate; odaberite jedan za odabir u uređivaču.',
  /** Where a lint finding sits in the query, shown under its message */
  'vista.lint.position': 'Redak {{line}}, stupac {{column}}',
  /** Severity badge of a lint finding */
  'vista.lint.severity.error': 'Pogreška',
  /** Severity badge of a lint finding */
  'vista.lint.severity.hint': 'Savjet',
  /** Severity badge of a lint finding */
  'vista.lint.severity.info': 'Informacija',
  /** Severity badge of a lint finding */
  'vista.lint.severity.warning': 'Upozorenje',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vista.lint.use-suggestion': 'Koristi {{suggestion}}',
  /** Badge shown while a tab refetches automatically */
  'vista.live.active': 'Uživo',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vista.live.button': 'Dohvat uživo',
  /** Tooltip of the Live button while automatic refetching is off */
  'vista.live.button.start':
    'Dohvati, zatim ponovno dohvaćaj kad god se dokumenti u rezultatu promijene',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vista.live.button.stop':
    'Prestani dohvaćati kad se dokumenti u rezultatu promijene. Dohvat se i dalje izvršava na zahtjev, za rezultate koje ne dodiruje nijedna promjena dokumenta, poput now()',
  /** Error shown when the live connection breaks */
  'vista.live.error': 'Ažuriranja uživo prekinuta: {{message}}',
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vista.live.stop': 'Zaustavi uživo',
  /** Button in the Mutate panel adding a mutation to the list */
  'vista.mutate.add': 'Dodaj mutaciju',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vista.mutate.add.create': 'Kreiraj dokument',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vista.mutate.add.delete': 'Izbriši dokument',
  /** Adds a mutation deleting the documents of the shown result */
  'vista.mutate.add.delete-result': 'Izbriši dokumente u rezultatu',
  /** Adds a mutation patching a document, its ID to fill in */
  'vista.mutate.add.patch': 'Ispravi dokument',
  /** Adds a mutation patching the documents of the shown result */
  'vista.mutate.add.patch-result': 'Ispravi dokumente u rezultatu',
  /** Button applying the mutations a dry run showed */
  'vista.mutate.apply': 'Primijeni na {{dataset}}',
  /** Heading of the error shown when applying the mutations failed */
  'vista.mutate.apply-failed': 'Mutacije nisu primijenjene',
  /** Next to Apply while the mutations as they are have had no dry run */
  'vista.mutate.apply-needs-preview':
    'Primjena šalje ono što je pokazao probni pokret (dry run): prvo ga pokrenite.',
  /** Option giving array items without a _key one */
  'vista.mutate.auto-keys': 'Dodaj _key stavkama niza koje ga nemaju',
  /** Under the option giving array items a _key */
  'vista.mutate.auto-keys.description':
    'Studio treba _key na svakoj stavci niza da bi je mogao uređivati.',
  /** Button showing a document's changes in the dry run */
  'vista.mutate.changes': 'Promjene',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vista.mutate.changes-failed': 'Promjene se nisu mogle prikazati.',
  /** Button retrying to show a document's changes */
  'vista.mutate.changes-retry': 'Pokušaj ponovno',
  /** What the Mutate panel does */
  'vista.mutate.description':
    'Pišite mutacije onako kako ih Mutations API prima, u obliku liste: create, createOrReplace, createIfNotExists, delete i patch, prema ID-u ili GROQ upitu. Probni pokret (dry run) pokazuje što bi one učinile svakom dokumentu bez stvarnih promjena; Primjena ih zatim zapisuje u dataset u jednoj transakciji, s vašim računom.',
  /** What the API says went wrong with one of the mutations */
  'vista.mutate.failure-item': 'Mutacija {{index}}: {{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vista.mutate.generate.button': 'Generiraj mutacije',
  /** Explanation under the generate mutations field */
  'vista.mutate.generate.description':
    'Sanity Agent Actions pišu mutacije na temelju vašeg opisa, dokumenata u rezultatu i njihovih tipova, a probni pokret (dry run) provjerava svaki pokušaj; svaki pokušaj koristi jedan AI kredit. One zamjenjuju mutacije ovdje, gdje ih poništavanje (undo) vraća natrag; ništa se ne zapisuje dok ih ne primijenite.',
  /** Shown when no mutations could be generated, above the reason */
  'vista.mutate.generate.failed': 'Mutacije se nisu mogle generirati',
  /** Accessible label of the description field in the generate mutations bar */
  'vista.mutate.generate.label': 'Što bi mutacije trebale učiniti?',
  /** Placeholder of the description field in the generate mutations bar */
  'vista.mutate.generate.placeholder': 'Promijeni naslov dokumenata u rezultatu u foobar',
  /** Shown while the first attempt at the mutations is written */
  'vista.mutate.generate.progress': 'Pisanje mutacija…',
  /** Shown while an attempt the dry run turned down is retried */
  'vista.mutate.generate.progress-retry': 'Popravljanje mutacija (pokušaj {{attempt}} od {{max}})…',
  /** Under the dry run: the fields the diffs leave out */
  'vista.mutate.hiding': 'Promjene izostavljaju {{fields}}, kao što to čini i Povijest (History).',
  /** Shown when the mutations are not valid JSON */
  'vista.mutate.invalid-json': 'Mutacije nisu valjani JSON: {{message}}',
  /** Shown when a mutation does not name exactly one thing to do */
  'vista.mutate.invalid-mutation':
    'Mutacija {{index}} treba točno jednu od sljedećih: create, createOrReplace, createIfNotExists, delete ili patch.',
  /** Label of the mutations editor */
  'vista.mutate.mutations': 'Mutacije',
  /** The dry run touched no documents */
  'vista.mutate.no-documents': 'Mutacije ne utječu ni na jedan dokument.',
  /** Shown when the JSON is not a list of mutations */
  'vista.mutate.not-a-list':
    'Napišite listu mutacija, jednu mutaciju, ili tijelo zahtjeva s listom mutacija.',
  /** A document the mutations create */
  'vista.mutate.operation.create': 'Stvori',
  /** A document the mutations delete */
  'vista.mutate.operation.delete': 'Izbriši',
  /** A document the mutations touch without changing its content */
  'vista.mutate.operation.none': 'Bez promjene',
  /** A document the mutations change */
  'vista.mutate.operation.update': 'Ažuriraj',
  /** Button running the mutations as a dry run */
  'vista.mutate.preview': 'Probno pokretanje',
  /** Heading of the error shown when the dry run failed */
  'vista.mutate.preview-failed': 'Probno pokretanje nije uspjelo',
  /** Heading of the dry run's outcome */
  'vista.mutate.preview-heading': 'Probno pokretanje',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vista.mutate.stale':
    'Mutacije, skup podataka ili opcije promijenjeni su nakon ovog probnog pokretanja. Pokrenite ga ponovno da biste ih primijenili.',
  /** How many documents the dry run changes and leaves as they are */
  'vista.mutate.summary': 'Promijenjeno: {{changed}} · Nepromijenjeno: {{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vista.network.cache': 'Predmemorija',
  /** The API CDN answered from its cache */
  'vista.network.cache.hit': 'Pogodak',
  /** Under the details of a CDN cache hit */
  'vista.network.cache.hit-explained':
    'CDN je odgovorio odgovorom koji je imao u predmemoriji, s lokacije blizu vas; upit nije dosegnuo API.',
  /** The API CDN answered with a response this session had not seen */
  'vista.network.cache.miss': 'Promašaj, koliko ova sesija može utvrditi',
  /** The API answered, which caches nothing */
  'vista.network.cache.none': 'Nema, API odgovara na svaki zahtjev svježim sadržajem',
  /** Shown in the Network panel while there is no response */
  'vista.network.empty':
    'Pokrenite upit da vidite koji je krajnji čvor odgovorio na njega, je li odgovor iz predmemorije i gdje je izvršen.',
  /** In the Network panel: the endpoint that answered */
  'vista.network.endpoint': 'Odgovorio',
  /** The live API answered */
  'vista.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vista.network.endpoint.cdn': 'API CDN',
  /** In the Network panel: the region the query ran in */
  'vista.network.region': 'Upit je izvršen u',
  /** The response did not say where the query ran */
  'vista.network.region.unknown': 'Nije prijavljeno',
  /** In the Network panel: the round trip and the time on the server */
  'vista.network.timing': 'Vrijeme',
  /** The round trip and the server's time for the query, in milliseconds */
  'vista.network.timing.value': '{{e2e}} ms u oba smjera, {{server}} ms na poslužitelju',
  /** In the Network panel: the trace of the request, for Sanity support */
  'vista.network.trace': 'ID traga',
  /** Hint in the Network panel while queries go to the API */
  'vista.network.use-cdn-hint':
    'Uključite opciju Koristi API CDN u Opcijama da biste upite slali putem CDN-a.',
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vista.network.you': 'Vi',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vista.options.dataset.follows-workspace': 'Prati radni prostor',
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vista.options.dataset.pin': 'Prikvači skup podataka',
  /** Hint under the dataset field while a dataset is pinned */
  'vista.options.dataset.pinned': 'Prikvačeno; radni prostor možda koristi drugi skup podataka',
  /** Button that makes the tab follow the workspace's dataset again */
  'vista.options.dataset.use-workspace': 'Koristi skup podataka radnog prostora',
  /** Label for the "Include content source map" switch */
  'vista.options.include-source-map': 'Uključi izvornu mapu sadržaja',
  /** Description for the "Include content source map" switch */
  'vista.options.include-source-map.description':
    'Dodaje resultSourceMap u odgovor, prikazano na kartici Izvorna mapa sadržaja.',
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vista.options.perspective.global': 'Globalno ({{name}})',
  /** Label of the switch that sends queries to the API CDN */
  'vista.options.use-cdn': 'Koristi API CDN',
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vista.options.use-cdn.anonymous':
    'Ovaj studio vas prijavljuje pomoću kolačića, koji API CDN nikada ne prima: odgovara kao da je riječ o anonimnom posjetitelju, onim što prikazuje javni skup podataka.',
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vista.options.use-cdn.blocked':
    'API CDN ne poslužuje nacrte ili izdanja, pa upiti s perspektivom {{perspective}} idu prema API-ju. S objavljenom ili sirovom perspektivom koriste CDN.',
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vista.options.use-cdn.blocked.title': 'Upiti idu prema API-ju, a ne prema CDN-u',
  /** Description of the API CDN switch */
  'vista.options.use-cdn.description':
    'Šalje upit API CDN-u, slično kao useCdn: true u @sanity/client, s objavljenom i sirovom perspektivom: nacrti i izdanja uvijek idu prema API-ju. Odgovori se spremaju u predmemoriju do minute; ploča Mreža prikazuje kada je odgovor došao iz predmemorije.',
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vista.options.use-cdn.use-published': 'Koristi objavljenu perspektivu',
  /** Label of the variant field */
  'vista.options.variant-label': 'Varijanta',
  /** Variant option sending the navbar's variant, named */
  'vista.options.variant.global': 'Globalno ({{name}})',
  /** Variant option sending the navbar's variant while none is selected there */
  'vista.options.variant.global-none': 'Globalno (ništa nije odabrano)',
  /** Variant option sending no variant */
  'vista.options.variant.none': 'Ništa',
  /** Accessible label for collapsing a bottom panel */
  'vista.panel.collapse': 'Sažmi ploču',
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vista.panel.delta': 'Delta',
  /** Accessible label for expanding a bottom panel */
  'vista.panel.expand': 'Proširi ploču',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vista.panel.explain': 'Objašnjenje',
  /** Label of the Functions tab in the response panel */
  'vista.panel.functions': 'Funkcije',
  /** Label of the "History" tab in the response panel */
  'vista.panel.history': 'Povijest',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vista.panel.lint': 'Lint',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vista.panel.mutate': 'Mutacija',
  /** Label of the Network tab in the response panel */
  'vista.panel.network': 'Mreža',
  /** Label of the "Options" panel in the request column */
  'vista.panel.options': 'Opcije',
  /** Label of the "Response" tab in the response panel */
  'vista.panel.response': 'Odgovor',
  /** Label of the "Content Source Map" tab in the response panel */
  'vista.panel.source-map': 'Mapa izvora sadržaja',
  /** Button adding an item to a list param in the params form */
  'vista.params-form.add-item': 'Dodaj stavku',
  /** Placeholder of a params form field that takes any JSON value */
  'vista.params-form.any-placeholder':
    'Bilo koja JSON vrijednost; ostali tekst se šalje kao niz znakova',
  /** Shown in the params form when the query uses no params */
  'vista.params-form.empty': 'Upit ne koristi parametre. Svaki $naziv u njemu ovdje dobiva polje.',
  /** Shown in the params form while the params JSON cannot be parsed */
  'vista.params-form.invalid-json':
    'Parametri nisu valjani JSON. Ispravite ih u JSON prikazu da biste ih ovdje uređivali.',
  /** A boolean param's value is not true or false; it is sent anyway */
  'vista.params-form.invalid.boolean': 'Nije true ili false; poslano kao {{value}}',
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vista.params-form.invalid.document-type':
    'Nije vrsta dokumenta u ovom radnom prostoru; ipak poslano',
  /** A whole number param (a slice bound) holds a fraction */
  'vista.params-form.invalid.integer': 'Nije cijeli broj, što je potrebno za isječke',
  /** A list param's value is not a list; it is sent anyway */
  'vista.params-form.invalid.list': 'Nije popis; poslano kao {{value}}',
  /** A number param's value is not a number; it is sent anyway */
  'vista.params-form.invalid.number': 'Nije broj; poslano kao tekst',
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vista.params-form.invalid.option': 'Nije jedna od poznatih vrijednosti; ipak poslano',
  /** A text param's value is not text; it is sent anyway */
  'vista.params-form.invalid.string': 'Nije tekst; poslano kao {{value}}',
  /** Accessible label of an item input of a list param in the params form */
  'vista.params-form.item-label': '${{name}}, stavka {{index}}',
  /** Placeholder of an item input of a list param in the params form */
  'vista.params-form.item-placeholder': 'Stavka',
  /** Under a params form field whose param has no value */
  'vista.params-form.missing': 'Nije postavljeno: upit ne uspijeva dok ne dobije vrijednost',
  /** Shown in the params form when the workspace schema could not be read */
  'vista.params-form.no-schema':
    'Tipovi dolaze samo iz upita: shema radnog prostora nije se mogla pročitati.',
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vista.params-form.not-set': 'Nije postavljeno',
  /** Button setting a date and time param to the current time */
  'vista.params-form.now': 'Sada',
  /** Button removing a param the query does not use from the params */
  'vista.params-form.remove': 'Ukloni',
  /** Accessible label of the button removing an item from a list param */
  'vista.params-form.remove-item': 'Ukloni stavku',
  /** Shown in the params form when the query does not parse */
  'vista.params-form.syntax-error':
    'Upit se ne može parsirati, pa su njegovi parametri prikazani bez tipova.',
  /** Type hint of a params form field: any JSON value */
  'vista.params-form.type.any': 'bilo koja JSON vrijednost',
  /** Type hint of a params form field: true or false */
  'vista.params-form.type.boolean': 'true ili false',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vista.params-form.type.datetime': 'datum i vrijeme (ISO 8601)',
  /** Type hint of a params form field: a document ID */
  'vista.params-form.type.document-id': 'ID dokumenta',
  /** Type hint of a params form field: one of the workspace's document types */
  'vista.params-form.type.document-type': 'vrsta dokumenta',
  /** Type hint of a params form field: a whole number */
  'vista.params-form.type.integer': 'cijeli broj',
  /** Type hint of a params form field: a list of values */
  'vista.params-form.type.list': 'popis, svaki {{type}}',
  /** Type hint of a params form field: a number */
  'vista.params-form.type.number': 'broj',
  /** Type hint of a params form field: text */
  'vista.params-form.type.string': 'tekst',
  /** Heading of the params the query does not use, listed in the params form */
  'vista.params-form.unused': 'Nije korišteno u upitu',
  /** Before the expressions that use a param, in the params form */
  'vista.params-form.used-in': 'Korišteno u',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vista.params.fit-height': 'Prilagođeno sadržaju, {{height}} piksela',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vista.params.resize':
    'Promijeni veličinu parametara: povucite ili koristite tipke sa strelicama; dvaput kliknite ili pritisnite Enter za ponovno prilagođavanje sadržaju',
  /** Tab showing the params as a form inferred from the query */
  'vista.params.view.form': 'Obrazac',
  /** Tab showing the params as JSON */
  'vista.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vista.params.view.label': 'Uredi parametre kao',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vista.paste.parsed': 'Upit učitan iz zalijepljenog URL-a',
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vista.paste.unavailable-variant':
    'Zalijepljeni URL koristio je varijantu "{{variant}}"; odaberite je u navigacijskoj traci za pokretanje upita s njom.',
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vista.paste.unknown-dataset':
    'Skup podataka "{{dataset}}" u zalijepljenom URL-u ovdje nije dostupan, zadržava se trenutni.',
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vista.paste.unsupported-perspective':
    'Perspektiva u zalijepljenom URL-u ovdje nije podržana, zadržava se trenutna.',
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vista.paste.variants-disabled':
    'Zalijepljeni URL koristio je varijantu "{{variant}}"; ovaj radni prostor ima isključene varijante, pa se upit pokreće bez nje.',
  /** Accessible label for the query actions menu */
  'vista.query.actions': 'Radnje upita',
  /** Tooltip when automatic refetching is not available for the API version */
  'vista.query.auto-refetch.unsupported':
    'Automatsko ponovno dohvaćanje zahtijeva API verziju v2021-03-25 ili noviju.',
  /** Toast shown after the query was copied */
  'vista.query.copied': 'Upit je kopiran u međuspremnik',
  /** Menu item copying the query text */
  'vista.query.copy': 'Kopiraj upit',
  /** Menu item opening the export query dialog */
  'vista.query.export': 'Izvezi upit…',
  /** Menu item reformatting the query */
  'vista.query.prettify': 'Uredi izgled upita',
  /** Toast shown when the query could not be reformatted */
  'vista.query.prettify.failed': 'Nije moguće urediti izgled upita',
  /** Menu item saving the query to the personal saved queries */
  'vista.query.save': 'Spremi upit',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vista.query.stop': 'Zaustavi',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vista.query.stop.description': 'Zaustavi dohvaćanje',
  /** Explanation in the settings section about the redesigned experience */
  'vista.redesign.settings.description':
    'Koristite redizajnirani alat Vision. Povratkom na prethodnu verziju vaše kartice i postavke ostaju spremljene u ovom pregledniku za sljedeći put kad ga isprobate.',
  /** Title of the settings section about the redesigned experience */
  'vista.redesign.settings.title': 'Redizajnirani Vision (beta)',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vista.redesign.switch-to-classic': 'Prebaci na klasični Vision',
  /** Toast button that switches to the redesigned tool */
  'vista.redesign.toast.accept': 'Isprobaj sada',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.description':
    'Kartice upita, uživo ponovno dohvaćanje, detalji odgovora i izvozi. Možete se vratiti na prethodnu verziju u bilo kojem trenutku.',
  /** Toast button that hides the invitation */
  'vista.redesign.toast.dismiss': 'Ne sada',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.title': 'Isprobajte redizajnirani Vision',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vista.redesign.try': 'Isprobaj redizajn',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vista.redesign.try.description':
    'Prebacite se na redizajnirani Vision, u beta verziji. Možete se vratiti na prethodnu verziju u bilo kojem trenutku putem njegove bočne trake.',
  /** Empty state of the response panel before anything was fetched */
  'vista.response.empty': 'Još ništa nije dohvaćeno',
  /** Label for the payload size in the response tab */
  'vista.response.payload-size': 'Veličina podataka',
  /** Label for the sync tags in the response tab */
  'vista.response.sync-tags': 'Oznake sinkronizacije',
  /** Shown when the response carried no sync tags */
  'vista.response.sync-tags.none': 'Nema oznaka sinkronizacije u odgovoru',
  /** Accessible label for the result actions menu */
  'vista.result.actions': 'Radnje rezultata',
  /** Toast shown after the result was copied */
  'vista.result.copied': 'Rezultat kopiran u međuspremnik',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vista.result.copied-value': 'Kopirano {{path}}',
  /** Menu item and button copying the result as JSON */
  'vista.result.copy': 'Kopiraj rezultat',
  /** Button next to each property in the result tree, copying its value */
  'vista.result.copy-value': 'Kopiraj vrijednost',
  /** Empty state of the result view */
  'vista.result.empty': 'Pokrenite upit da biste ovdje vidjeli rezultat',
  /** Button exporting the result as CSV */
  'vista.result.export-csv': 'Izvezi CSV',
  /** Button exporting the result as JSON */
  'vista.result.export-json': 'Izvezi JSON',
  /** Menu item opening the TypeScript export dialog */
  'vista.result.export-typescript': 'Izvezi TypeScript…',
  /** Menu item opening the Zod export dialog */
  'vista.result.export-zod': 'Izvezi Zod…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vista.result.graph.collapse': 'Sakrij sadržaj',
  /** Button fitting the whole graph in view */
  'vista.result.graph.fit': 'Prilagodi prikazu',
  /** Accessible label of the graph, saying how to move around in it */
  'vista.result.graph.label':
    'Graf rezultata: povucite za pomicanje, pomičite kotačić za zumiranje; kada je fokusiran, strelice pomiču, + i - zumiraju, 0 prilagođava',
  /** Ends the note on a graph that leaves part of this result out */
  'vista.result.graph.left-out-hint': 'Prikazi stabla i JSON-a prikazuju sve.',
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vista.result.graph.node-limit': 'Prikazano je samo prvih {{nodes}} objekata i nizova.',
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vista.result.graph.partial': 'Za {{nodes}} je prikazano samo prvih {{rows}} unosa.',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vista.result.graph.partial.node': '{{name}} ({{entries}} unosa)',
  /** Title of the graph node of the result itself */
  'vista.result.graph.root': 'rezultat',
  /** Button zooming into the graph */
  'vista.result.graph.zoom-in': 'Uvećaj',
  /** Button zooming out of the graph */
  'vista.result.graph.zoom-out': 'Umanji',
  /** Tab showing the result as a graph of its objects and arrays */
  'vista.result.view.graph': 'Graf',
  /** Tab showing the result as indented JSON text, to select and copy from */
  'vista.result.view.json': 'JSON',
  /** Accessible label of the tabs that switch how the result shows */
  'vista.result.view.label': 'Prikaz rezultata',
  /** Tab showing the result as a tree to browse */
  'vista.result.view.tree': 'Stablo',
  /** Empty state of the saved queries panel */
  'vista.saved.empty': 'Još nema spremljenih upita. Spremite trenutni upit pomoću gumba +.',
  /** Empty state of a query list when the search matches nothing */
  'vista.saved.empty-search': 'Nijedan upit ne odgovara vašoj pretrazi',
  /** Menu item loading a saved query into the active tab */
  'vista.saved.load-in-current-tab': 'Učitaj u trenutnu karticu',
  /** Menu item opening a saved query in a new tab */
  'vista.saved.open-in-new-tab': 'Otvori u novoj kartici',
  /** Menu item renaming a saved query */
  'vista.saved.rename': 'Preimenuj',
  /** Accessible label for the button saving the current query */
  'vista.saved.save-current': 'Spremi trenutni upit',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vista.saved.unavailable-variant':
    'Ovaj spremljeni upit koristio je varijantu "{{variant}}"; odaberite je u navigacijskoj traci kako biste pokrenuli upit s njom.',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vista.saved.unknown-dataset':
    'Skup podataka "{{dataset}}" ovog spremljenog upita ovdje nije dostupan, zadržava se trenutni.',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vista.saved.variants-disabled':
    'Ovaj spremljeni upit koristio je varijantu "{{variant}}"; u ovom radnom prostoru varijante su isključene, pa se upit pokreće bez nje.',
  /** Button in the settings dialog that clears the stored state */
  'vista.settings.clear-storage': 'Obriši pohranu',
  /** Confirmation button for clearing the storage */
  'vista.settings.clear-storage.confirm': 'Da, obriši pohranu',
  /** Explanation of what clearing the storage does */
  'vista.settings.clear-storage.description':
    'Briše vaše osobno spremljene upite i biblioteku funkcija, resetira otvorene kartice i ove zadane postavke u ovom pregledniku te vraća na klasični alat Vision. Dijeljeni upiti se zadržavaju.',
  /** Toast shown when the saved queries could not be cleared */
  'vista.settings.clear-storage.error': 'Spremljeni upiti nisu mogli biti obrisani',
  /** Toast shown after the storage was cleared */
  'vista.settings.clear-storage.success': 'Pohrana je obrisana',
  /** Explanation at the top of the settings dialog */
  'vista.settings.description':
    'Zadane postavke za nove kartice. Otvorene kartice zadržavaju vlastite opcije.',
  /** Explains the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.description':
    'Jedna putanja polja po retku. Putanja se podudara na bilo kojoj dubini rezultata, pa _rev skriva reviziju svakog dokumenta u njemu. Svaka razlika (diff) ih i dalje može prikazati.',
  /** Button restoring the default fields left out of History diffs */
  'vista.settings.history-diff.reset': 'Vrati na zadano',
  /** Label of the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.title': 'Polja skrivena iz razlika (diff) povijesti',
  /** Title of the settings dialog */
  'vista.settings.title': 'Postavke',
  /** Empty state of the shared queries panel */
  'vista.shared.empty':
    'Još nema dijeljenih upita. Podijelite spremljeni upit kako biste ga učinili dostupnim svima koji koriste ovaj skup podataka.',
  /** Shortcut description: close dialogs and menus */
  'vista.shortcuts.close': 'Zatvori dijaloge i izbornike',
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vista.shortcuts.complete': 'Dovrši naziv funkcije',
  /** Shortcut description: copy the query */
  'vista.shortcuts.copy-query': 'Kopiraj upit',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vista.shortcuts.extract-function': 'Izdvoji projekciju na pokazivaču u funkciju',
  /** Shortcut description: run the query */
  'vista.shortcuts.fetch': 'Dohvati upit',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vista.shortcuts.next-finding': 'Skoči na sljedeći nalaz lintera',
  /** Shortcut description: reformat the query */
  'vista.shortcuts.prettify': 'Uljepšaj upit',
  /** Title of the keyboard shortcuts dialog */
  'vista.shortcuts.title': 'Tipkovnički prečaci',
  /** Sidebar toggle: show icons only */
  'vista.sidebar.collapse': 'Sažmi bočnu traku',
  /** Sidebar toggle: show labels next to the icons */
  'vista.sidebar.expand': 'Proširi bočnu traku',
  /** Accessible label for the sidebar navigation */
  'vista.sidebar.label': 'Vista bočna traka',
  /** Sidebar item and drawer title for personal saved queries */
  'vista.sidebar.saved-queries': 'Spremljeni upiti',
  /** Sidebar item opening the settings dialog */
  'vista.sidebar.settings': 'Postavke',
  /** Sidebar item and drawer title for shared queries */
  'vista.sidebar.shared-queries': 'Dijeljeni upiti',
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vista.sidebar.shortcuts': 'Tipkovnički prečaci',
  /** Empty state of the content source map panel */
  'vista.source-map.empty':
    'Nema mape izvora sadržaja u odgovoru. Uključite "Include content source map" u Opcijama i ponovno dohvatite podatke.',
  /** Accessible label of the divider between the result and the response details panel */
  'vista.split.bottom-panel':
    'Promijenite veličinu panela s detaljima odgovora: povucite ili koristite tipke sa strelicama; Home i End idu na granice, Enter resetira',
  /** Accessible label of the divider between the request and response panes */
  'vista.split.request-response':
    'Promijenite veličinu panela zahtjeva i odgovora: povucite ili koristite tipke sa strelicama; Home i End idu na granice, Enter resetira',
  /** Accessible label for the button closing a query tab */
  'vista.tabs.close-tab': 'Zatvori karticu',
  /** Accessible label for the list of query tabs */
  'vista.tabs.label': 'Kartice upita',
  /** Accessible label for the button opening a new query tab */
  'vista.tabs.new-tab': 'Nova kartica',
  /** Placeholder of the input renaming a tab */
  'vista.tabs.title-placeholder': 'Naziv kartice',
  /** Title of a tab whose query is still empty */
  'vista.tabs.untitled': 'Neimenovani upit',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vista.webmcp.check-query': 'Provjerite GROQ upit u Visionu',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vista.webmcp.describe-schema': 'Opišite shemu u Visionu',
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vista.webmcp.explain-query': 'Objasnite GROQ upit u Visionu',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vista.webmcp.get-state': 'Pročitajte otvorenu Vision karticu',
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vista.webmcp.open-query': 'Otvorite GROQ upit u Visionu',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vista.webmcp.preview-mutations': 'Pregledajte mutacije u Visionu',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vista.webmcp.run-query': 'Pokrenite GROQ upit u Visionu',
})
