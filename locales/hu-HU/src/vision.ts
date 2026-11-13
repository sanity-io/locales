import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Másolás vágólapra',
  /** Label for deleting a query */
  'action.delete': 'Törlés',
  /** Label for editing a query's title */
  'action.edit-title': 'Cím szerkesztése',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Leállítás',
  /** Label for setting up a listener */
  'action.listen-execute': 'Figyel',
  /** Label for query loading table */
  'action.load-queries': 'Lekérdezések betöltése',
  /** Label for loading a query */
  'action.load-query': 'Lekérdezés betöltése',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Mégse',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Lekérdezés',
  /** Label for saving a query */
  'action.save-personal-copy': 'Személyes másolat mentése',
  /** Label for saving a personal query */
  'action.save-personal-query': 'Mentés személyesként',
  /** Label for saving a query */
  'action.save-query': 'Lekérdezés mentése',
  /** Label for saving a shared query */
  'action.save-shared-query': 'Mentés megosztottként',
  /** Label for unsharing a query */
  'action.unshare': 'Megosztás megszüntetése',
  /** Label for updating a query */
  'action.update': 'Frissítés',

  /** Label for actions user can take */
  'label.actions': 'Műveletek',
  /** Label for all saved queries */
  'label.all': 'Összes',
  /** Label for saved queries that have been edited */
  'label.edited': 'Szerkesztett',
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Új',
  /** Label for query type "personal" */
  'label.personal': 'Személyes',
  /** Label for savedAt date */
  'label.saved-at': 'Mentve',
  /** Saved queries */
  'label.saved-queries': 'Mentett lekérdezések',
  /** Search queries */
  'label.search-queries': 'Lekérdezések keresése',
  /** Share query */
  'label.share': 'Megosztás',
  /** Label for query type "shared" */
  'label.shared': 'Megosztott',
  /** Label for saved query type "team" */
  'label.team': 'Csapat',
  /** Label for untitled query fallback */
  'label.untitled-query': 'Névtelen',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'A paraméterek nem érvényes JSON formátumúak',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Paraméterek',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Oszlop',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Sor',
  /** Extra explanation when a 400 is returned for a release perspective on an old API version */
  'query.error.unsupported-release-perspective':
    'Ez az API-verzió nem támogatja az összetett perspektívákat. Használja a(z) {{apiVersion}} vagy újabb verziót.',
  /** Extra explanation when a 400 is returned for a variant on an incompatible API version */
  'query.error.unsupported-variant':
    'Ez az API-verzió nem támogatja a tartalomváltozatokat. Használja a kísérleti API-verziót ({{apiVersion}}).',
  /** Label for "Query" editor/input */
  'query.label': 'Lekérdezés',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'Lekérdezés URL',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'Végponttól végpontig',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'Végrehajtás',
  /** Label for "Result" explorer/view */
  'result.label': 'Eredmény',
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable': 'Az eredmény nem kódolható CSV formátumba',
  /** Label for "Save result as" result action */
  'result.save-result-as-format': 'Eredmény mentése mint <SaveResultButtons/>',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'n/a',

  /** Query already saved error label */
  'save-query.already-saved': 'A lekérdezés már mentve van',
  /** Save error label */
  'save-query.error': 'Hiba a lekérdezés mentésekor',
  /** Save personal copy success label */
  'save-query.personal-copy-success': 'Személyes másolat mentve',
  /** Warning displayed before sharing a query */
  'save-query.share-warning':
    'A megosztott lekérdezések dokumentumként tárolódnak a dataset-ben, és beleszámítanak a dokumentumkvótába.',
  /** Save shared query success label */
  'save-query.shared-success': 'Megosztott lekérdezés mentve',
  /** Save success label */
  'save-query.success': 'Lekérdezés mentve',
  /** Save unshared query success label */
  'save-query.unshared-success': 'A lekérdezés áthelyezve a személyes lekérdezések közé',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'API verzió',
  /** Tooltip shown when the API version selector is locked because a variant is selected */
  'settings.api-version-locked-for-variant':
    'Ha egy variáns van kiválasztva, az API verziónak vX-nek kell lennie.',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'Egyéni API verzió',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Dataset',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'Érvénytelen API verzió',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'Egyéb',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspective',
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    'A "<code>previewDrafts</code>" nézet átnevezésre került "<code>drafts</code>" névre és most már elavult. Ez a változás minden olyan verzióra érvényes, amely támogatja a nézeteket (>= v2021-03-25).',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Dokumentáció olvasása',
  /** Option for selecting default perspective */
  'settings.perspectives.default': 'Nincs nézet (API alapértelmezés)',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'A Perspectives lehetővé teszi a lekérdezés futtatását a dataset különböző "nézetei" ellen',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    'Az alapértelmezett nézet a "<code>raw</code>"-ról "<code>published</code>"-re fog változni egy közelgő API verzióban. Kérjük, keresse fel a dokumentációt további részletekért.',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': 'Rögzített kiadás',
  /** Label for the scheduled drafts perspective */
  'settings.perspectives.scheduled-drafts': 'Ütemezett vázlatok',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspectives',

  /** Tooltip line of every control that calls Sanity Agent Actions, which bills AI credits */
  'vista.agent-actions.credits': 'Kérésenként egy AI kreditet használ fel',
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vista.ai-credits.balance': '{{balance}} / {{quota}} AI kredit maradt erre a hónapra.',
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vista.ai-credits.deficit':
    '{{used}} AI kredit felhasználva ebben a hónapban, {{deficit}}-val/vel több, mint a benne foglalt {{quota}}.',
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vista.ai-credits.limit.description':
    'A szervezeted {{used}} AI kreditet használt fel a {{quota}}-ból ebben a hónapban, ezért a Sanity Agent Actions szüneteltetve van a következő hónapig, vagy amíg a költési limitet meg nem emelik.',
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vista.ai-credits.limit.description-unknown':
    'A szervezeted elérte az AI kreditek költési limitjét, ezért a Sanity Agent Actions szüneteltetve van a következő hónapig, vagy amíg a limitet meg nem emelik.',
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vista.ai-credits.limit.learn-more': 'Hogyan működnek az AI kreditek',
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vista.ai-credits.limit.manage': 'AI kreditek kezelése',
  /** Title of the card shown where the organization is out of AI credits */
  'vista.ai-credits.limit.title': 'Elfogytak az AI kreditek',
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vista.ai-credits.usage': 'AI használat',
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vista.ai-credits.used': '{{used}} AI kredit felhasználva ebben a hónapban.',
  /** Button in the request column's action bar naming the API version requests go out with */
  'vista.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vista.api-version.button-cdn': 'API CDN {{version}}',
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vista.api-version.button-invalid': 'Befejezetlen API verzió',
  /** Tooltip of the API version button */
  'vista.api-version.tooltip':
    'A lekérdezések a(z) {{version}} API verzió ellen futnak. Válaszd ki a módosításhoz a Beállításokban.',
  /** Tooltip of the API version button while queries go through the API CDN */
  'vista.api-version.tooltip-cdn':
    'A lekérdezések az API CDN ellen futnak, {{version}} API verzióval. Válaszd ki a módosításhoz a Beállításokban.',
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vista.api-version.tooltip-cdn-blocked':
    'A lekérdezések az API ellen futnak, {{version}} API verzióval, nem az API CDN ellen: az nem szolgálja ki a(z) {{perspective}} perspektívát. Válaszd ki a módosításhoz a Beállításokban.',
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vista.api-version.tooltip-invalid':
    'A Beállításokban megadott API verzió befejezetlen, ezért semmi sem kérhető le, amíg nincs teljesen megadva.',
  /** Tooltip of the API version button while a selected variant forces the variants API version */
  'vista.api-version.tooltip-locked':
    'A lekérdezések a(z) {{version}} API verzió ellen futnak, amelyet a kiválasztott variáns igényel.',
  /** Label of the document after the change in the Delta panel */
  'vista.delta.after': 'Utána',
  /** Label of the document before the change in the Delta panel */
  'vista.delta.before': 'Előtte',
  /** What the Delta panel does */
  'vista.delta.description':
    'Lefuttatja a lekérdezést delta módban, ahogy a GROQ-alapú webhookok, figyelők és Sanity Functions teszik: a before() és after() a dokumentum a változás előtt és után, a @ a dokumentum utána, a delta::changedAny() pedig összehasonlítja őket. A böngészőben fut, groq-js segítségével. Az üres oldal azt jelenti, hogy nincs dokumentum: a változás hozza létre vagy törli azt.',
  /** Label of the document ID field in the Delta panel */
  'vista.delta.document-id': 'Dokumentum azonosító',
  /** Shown when there is a query but no documents to compare */
  'vista.delta.empty':
    'Töltsd be egy dokumentum előzményeit, vagy írd be a dokumentumokat az Előtte és Utána mezőkbe.',
  /** Shown when the query fails in delta mode */
  'vista.delta.failed': 'A lekérdezést nem sikerült delta módban lefuttatni: {{message}}',
  /** Shown when the After document is not valid JSON */
  'vista.delta.invalid-after': 'Az Utána mező nem érvényes JSON: {{message}}',
  /** Shown when the Before document is not valid JSON */
  'vista.delta.invalid-before': 'A Before mező nem érvényes JSON: {{message}}',
  /** Button loading the document's revisions from the History API */
  'vista.delta.load': 'Előzmények betöltése',
  /** Shown when the history could not be loaded */
  'vista.delta.load-failed': 'Az előzményeket nem sikerült betölteni: {{message}}',
  /** A delta filter that is true for the change */
  'vista.delta.matches':
    'Egyezik: egy ezzel a szűrővel rendelkező webhook vagy function lefut erre a változásra.',
  /** A delta filter that is false for the change */
  'vista.delta.no-match':
    'Nem egyezik: egy ezzel a szűrővel rendelkező webhook vagy function nem fut le erre a változásra.',
  /** Shown while the query or its params cannot be sent */
  'vista.delta.no-request':
    'Javítsd a lekérdezést és annak paramétereit, hogy delta módban futtathasd.',
  /** Heading of the delta result */
  'vista.delta.result': 'Eredmény',
  /** The After choice for a change that deletes the document */
  'vista.delta.revision.none-after': 'Semmi: a változás törli a dokumentumot',
  /** The Before choice for a change that creates the document */
  'vista.delta.revision.none-before': 'Semmi: a változás létrehozza a dokumentumot',
  /** A revision in the Before and After lists */
  'vista.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vista.drawer.close': 'Panel bezárása',
  /** Explanation at the top of the Explain panel */
  'vista.explain.description':
    'A lekérdezési terv azt mutatja meg, hogyan futtatja a Content Lake a lekérdezést: mit olvas, szűr és rendez olvasás közben, és mi marad a későbbi lépésekre. A „Magyarázd el nekem” funkció a Sanity Agent Actions segítségével egyszerű szavakkal leírja a lekérdezést és annak tervét, ami egy AI kreditet használ fel.',
  /** Shown in the Explain panel while there is no valid query to explain */
  'vista.explain.empty': 'Írj egy lekérdezést, hogy elmagyarázhassuk.',
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vista.explain.explain': 'Magyarázd el nekem',
  /** Shown when the explanation could not be written */
  'vista.explain.failed': 'A lekérdezést nem sikerült elmagyarázni: {{message}}',
  /** A count the index computes without reading the documents */
  'vista.explain.insight.aggregate': 'Megszámolva az indexben, a dokumentumok olvasása nélkül.',
  /** A subquery the plan runs once for all documents */
  'vista.explain.insight.batched-subquery':
    'Az allekérdezés egyszer fut le az összes dokumentumra, egyetlen kötegelt lekérésben, nem dokumentumonként egyszer.',
  /** Part of the filter runs in memory; the expression follows */
  'vista.explain.insight.filter-in-memory':
    'A szűrő egy része memóriában fut, olvasás után: minden dokumentumot, amelyet az index átenged, előbb be kell olvasni, ami lassú lehet nagy adatkészleteknél. A joinok (->) és a szűrőkben lévő függvények nem használhatják az indexet.',
  /** The index sorts and limits while reading */
  'vista.explain.insight.index-sort-limit':
    'Az index rendezi és korlátozza a dokumentumokat olvasás közben.',
  /** The plan slices in memory */
  'vista.explain.insight.slice-in-memory':
    'A szeletelés olvasás után, memóriában történik, nem korlátozásként olvasás közben.',
  /** The plan sorts in memory */
  'vista.explain.insight.sort-in-memory':
    'A rendezés memóriában történik, minden találat beolvasása után. Rendezz olyan attribútumok szerint, amelyek szerint az index tud rendezni.',
  /** Link under the plan insights to the guide on fast queries */
  'vista.explain.insights.guide': 'Nagy teljesítményű GROQ',
  /** Heading of the plan insights in the Explain panel */
  'vista.explain.insights.title': 'Ami kiemelkedik',
  /** Button in the Explain panel fetching the query plan */
  'vista.explain.plan': 'Lekérdezési terv megjelenítése',
  /** Shown when the query plan could not be fetched */
  'vista.explain.plan-failed': 'A lekérdezési tervet nem sikerült lekérni: {{message}}',
  /** Heading of the query plan in the Explain panel */
  'vista.explain.plan-title': 'Lekérdezési terv',
  /** Toast shown after a code snippet was copied */
  'vista.export-query.copied': 'Kódrészlet a vágólapra másolva',
  /** Label for the button that copies a code snippet */
  'vista.export-query.copy': 'Kódrészlet másolása',
  /** Explanation at the top of the export query dialog */
  'vista.export-query.description':
    'Futtasd le ezt a lekérdezést a stúdión kívül az alábbi kódrészletek egyikével.',
  /** Title of the dialog that exports the query as code snippets */
  'vista.export-query.title': 'Lekérdezés exportálása',
  /** Note about authentication in the export query dialog */
  'vista.export-query.token-note':
    'A privát adatkészletekhez API-token szükséges. A nyilvános adatkészletek esetén elhagyható az Authorization fejléc.',
  /** Toast shown after the generated code was copied */
  'vista.export-types.copied': 'Kód a vágólapra másolva',
  /** Label for the button that copies the generated code */
  'vista.export-types.copy': 'Kód másolása',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vista.export-types.empty':
    'Előbb le kell kérdezni az eredményt, hogy legyen miből típusokat származtatni.',
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vista.export-types.schema-error': 'A séma kiértékelése sikertelen: {{message}}',
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vista.export-types.source.result':
    'A lekérdezett eredményből lett levezetve, mivel a lekérdezést nem sikerült kiértékelni a munkaterület sémája alapján.',
  /** Note shown when the types were derived from the workspace schema */
  'vista.export-types.source.schema':
    'A munkaterület sémájából lett levezetve, ugyanúgy, ahogy a sanity typegen is teszi.',
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vista.export-types.stale-result':
    'A megjelenített eredmény egy másik lekérdezéshez vagy paraméterekhez tartozik. Előbb kérdezd le az aktuális lekérdezést, hogy legyen miből típusokat származtatni.',
  /** Title of the dialog exporting TypeScript types for the result */
  'vista.export-types.title-typescript': 'TypeScript exportálása',
  /** Title of the dialog exporting a Zod schema for the result */
  'vista.export-types.title-zod': 'Zod exportálása',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vista.functions.add': 'Hozzáadás a lekérdezéshez',
  /** Shown on a library function the query declares the same way */
  'vista.functions.declared': 'Ebben a lekérdezésben',
  /** Lint action on a call of a library function the query does not declare */
  'vista.functions.editor.add-from-library': 'Deklarálás',
  /** Note in a function's hover documentation: the API version it needs */
  'vista.functions.editor.api-version': 'Ehhez legalább {{version}} API-verzió szükséges',
  /** Detail of a completion for a custom function the query declares */
  'vista.functions.editor.completion-declared': 'ebben a lekérdezésben',
  /** Detail of a completion for a library function, which declares it too */
  'vista.functions.editor.completion-library': 'a könyvtáradból',
  /** Note in the hover documentation of a custom function the query declares */
  'vista.functions.editor.declared-on': 'Egyéni függvény, a(z) {{line}}. sorban deklarálva',
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vista.functions.editor.delta-only':
    'Csak delta módban működik, ahol a webhookok és a Sanity függvények futtatják a szűrőiket',
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vista.functions.editor.extract': 'Kiemelés függvénybe',
  /** Note in the hover documentation of a library function the query does not declare */
  'vista.functions.editor.in-library':
    'A függvénykönyvtáradban található, de ebben a lekérdezésben nincs deklarálva',
  /** Link at the end of a built-in function's hover documentation */
  'vista.functions.editor.reference': 'GROQ függvények referenciája',
  /** Explanation under the library heading in the Functions panel */
  'vista.functions.library.description':
    'A böngészőben megőrizve a projekt minden datasetjéhez. A kiegészítések felkínálják ezeket a függvényeket, és a lint felajánlja egy lekérdezéshívás deklarálását.',
  /** Shown in the Functions panel while the library is empty */
  'vista.functions.library.empty':
    'Mentsen egy, a lekérdezésben deklarált függvényt, hogy más lekérdezésekben is használhassa.',
  /** Heading of the functions library in the Functions panel */
  'vista.functions.library.title': 'Könyvtár',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vista.functions.query.empty':
    'Deklaráljon egyéni függvényeket a lekérdezés elején, vagy helyezze a kurzort egy projekcióba, például author->{name}, és nyomja meg a kinyerés gombot a szerkesztő felett ({{shortcut}}).',
  /** Heading of the functions the query declares in the Functions panel */
  'vista.functions.query.title': 'Ebben a lekérdezésben',
  /** Removes a function from the library */
  'vista.functions.remove': 'Eltávolítás a könyvtárból',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vista.functions.replace': 'Csere a lekérdezésben',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vista.functions.reveal': '{{name}} megjelenítése a szerkesztőben',
  /** Button of a function the query declares that is not in the library yet */
  'vista.functions.save': 'Mentés a könyvtárba',
  /** Shown on a function the query declares the way the library has it */
  'vista.functions.saved': 'Mentve',
  /** Button of a function the query declares differently from the library's version */
  'vista.functions.update': 'Könyvtár frissítése',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vista.generate.button': 'Lekérdezés generálása',
  /** Closes the generate query bar */
  'vista.generate.close': 'Bezárás',
  /** Explanation under the generate query field */
  'vista.generate.description':
    'A Sanity Agent Actions megírja a GROQ-ot a leírása és a dokumentumtípusok alapján, és a Content Lake minden próbálkozást ellenőriz; minden próbálkozás egy AI kreditet használ fel. Ez lecseréli és lefuttatja ennek a lapnak a lekérdezését; a szerkesztőben a visszavonás visszahozza az előző lekérdezést.',
  /** Shown when no query could be generated, above the reason */
  'vista.generate.failed': 'A lekérdezést nem sikerült létrehozni',
  /** Accessible label of the description field in the generate query bar */
  'vista.generate.label': 'Mit kérjen le a lekérdezés?',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vista.generate.open-anyway': 'Az utolsó próbálkozás megnyitása',
  /** Placeholder of the description field in the generate query bar */
  'vista.generate.placeholder':
    'A 10 legújabb szerző, vezetéknév, majd keresztnév szerint rendezve',
  /** Shown while the first attempt at a query is written */
  'vista.generate.progress': 'A lekérdezés írása…',
  /** Shown while a rejected attempt is retried */
  'vista.generate.progress-retry':
    'A lekérdezés javítása ({{attempt}}. próbálkozás a(z) {{max}}-ból)…',
  /** Button generating the query */
  'vista.generate.submit': 'Generálás',
  /** Badge on a history entry the API CDN answered */
  'vista.history.cdn': 'API CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vista.history.cdn-cache-hit': 'CDN gyorsítótár-találat',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vista.history.changed': 'Megváltozott',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vista.history.changes': 'Változások',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vista.history.changes-failed': 'A változásokat nem sikerült megjeleníteni.',
  /** Button retrying to show the changes of a history entry */
  'vista.history.changes-retry': 'Újrapróbálkozás',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vista.history.compared-with': 'Összehasonlítva a(z) {{time}} időpontban történt lekéréssel',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vista.history.diff.params': 'Paraméterek',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vista.history.diff.query': 'Lekérdezés',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vista.history.diff.query-formatting-only': 'Csak a formázás változott',
  /** Label of the diff of the query result in a history entry's changes */
  'vista.history.diff.result': 'Eredmény',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vista.history.diff.url': 'Kérés URL-je',
  /** Empty state of the history panel */
  'vista.history.empty': 'Még nem történt lekérés',
  /** Status label for a failed fetch in the history */
  'vista.history.failed': 'Sikertelen',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vista.history.hide-hidden': 'Elrejtés',
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vista.history.hiding': '{{fields}} elrejtve',
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vista.history.only-hidden-changed': 'Csak rejtett mezők változtak',
  /** History reason: a tab opened with a generated query fetched it */
  'vista.history.reason.generated': 'Generált lekérdezés',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vista.history.reason.link': 'Megnyitott hivatkozás',
  /** History reason: a live event matched the query's sync tags */
  'vista.history.reason.live': 'Élő frissítés',
  /** History reason: the live connection asked every client to refetch */
  'vista.history.reason.live-restart': 'Élő kapcsolat újraindult',
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vista.history.reason.live-start': 'Élő lekérés elindult',
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vista.history.reason.load': 'Lekérdezés betöltve',
  /** History reason: the fetch button was pressed */
  'vista.history.reason.manual': 'Lekérés gomb',
  /** History reason: mutations were applied from the Mutate panel */
  'vista.history.reason.mutation': 'Módosítások alkalmazva',
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vista.history.reason.options': 'Beállítások megváltoztak',
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vista.history.reason.paste': 'Beillesztett URL',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vista.history.reason.resume': 'Automatikus újralekérés folytatódott',
  /** History reason: the keyboard shortcut was used */
  'vista.history.reason.shortcut': 'Billentyűparancs',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vista.history.same-result': 'Azonos eredmény',
  /** Button showing the hidden fields in a history entry's changes */
  'vista.history.show-hidden': 'Megjelenítés',
  /** Next to a history entry's changes while the hidden fields are shown */
  'vista.history.showing-hidden': '{{fields}} megjelenítve, alapértelmezés szerint elrejtve',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vista.history.too-large': 'Túl nagy az összehasonlításhoz',
  /** A history entry whose result is the same as the previous result */
  'vista.history.unchanged': 'Nincs változás',
  /** Shown in the Lint panel while the query has no lint findings */
  'vista.lint.empty':
    'Nincsenek lint találatok. A GROQ linter által a lekérdezésben észlelt problémák itt jelennek meg gépelés közben; válasszon ki egyet a szerkesztőben való kijelöléshez.',
  /** Where a lint finding sits in the query, shown under its message */
  'vista.lint.position': '{{line}}. sor, {{column}}. oszlop',
  /** Severity badge of a lint finding */
  'vista.lint.severity.error': 'Hiba',
  /** Severity badge of a lint finding */
  'vista.lint.severity.hint': 'Tipp',
  /** Severity badge of a lint finding */
  'vista.lint.severity.info': 'Információ',
  /** Severity badge of a lint finding */
  'vista.lint.severity.warning': 'Figyelmeztetés',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vista.lint.use-suggestion': '{{suggestion}} használata',
  /** Badge shown while a tab refetches automatically */
  'vista.live.active': 'Élő',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vista.live.button': 'Élő lekérés',
  /** Tooltip of the Live button while automatic refetching is off */
  'vista.live.button.start':
    'Lekérés, majd újbóli lekérés, amikor az eredményben szereplő dokumentumok megváltoznak',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vista.live.button.stop':
    'Lekérés leállítása, amikor az eredményben szereplő dokumentumok megváltoznak. A Lekérés gomb továbbra is igény szerint lekér olyan eredményekhez, amelyeket dokumentumváltozás nem érint, például a now() esetén',
  /** Error shown when the live connection breaks */
  'vista.live.error': 'Élő frissítések szétkapcsolva: {{message}}',
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vista.live.stop': 'Élő leállítása',
  /** Button in the Mutate panel adding a mutation to the list */
  'vista.mutate.add': 'Módosítás hozzáadása',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vista.mutate.add.create': 'Dokumentum létrehozása',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vista.mutate.add.delete': 'Dokumentum törlése',
  /** Adds a mutation deleting the documents of the shown result */
  'vista.mutate.add.delete-result': 'Az eredményben szereplő dokumentumok törlése',
  /** Adds a mutation patching a document, its ID to fill in */
  'vista.mutate.add.patch': 'Dokumentum módosítása (patch)',
  /** Adds a mutation patching the documents of the shown result */
  'vista.mutate.add.patch-result': 'Az eredményben szereplő dokumentumok módosítása (patch)',
  /** Button applying the mutations a dry run showed */
  'vista.mutate.apply': 'Alkalmazás erre: {{dataset}}',
  /** Heading of the error shown when applying the mutations failed */
  'vista.mutate.apply-failed': 'A mutációk alkalmazása nem sikerült',
  /** Next to Apply while the mutations as they are have had no dry run */
  'vista.mutate.apply-needs-preview':
    'Az Alkalmazás azt küldi el, amit egy próbafuttatás mutatott: futtass le előbb egyet.',
  /** Option giving array items without a _key one */
  'vista.mutate.auto-keys': 'Adjon _key-t azokhoz a tömbelemekhez, amelyeknek nincs',
  /** Under the option giving array items a _key */
  'vista.mutate.auto-keys.description':
    'A stúdiónak minden tömbelemen szüksége van egyre a szerkesztéshez.',
  /** Button showing a document's changes in the dry run */
  'vista.mutate.changes': 'Változások',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vista.mutate.changes-failed': 'A változásokat nem sikerült megjeleníteni.',
  /** Button retrying to show a document's changes */
  'vista.mutate.changes-retry': 'Újra',
  /** What the Mutate panel does */
  'vista.mutate.description':
    'Írja a mutációkat úgy, ahogy a Mutations API fogadja őket, egy listában: create, createOrReplace, createIfNotExists, delete és patch, ID vagy GROQ lekérdezés alapján. Egy próbafuttatás megmutatja, mit tennének az egyes dokumentumokkal anélkül, hogy bármit megváltoztatnának; az Alkalmazás ezután egyetlen tranzakcióban írja be őket az adatkészletbe, az Ön fiókjával.',
  /** What the API says went wrong with one of the mutations */
  'vista.mutate.failure-item': 'Mutáció {{index}}: {{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vista.mutate.generate.button': 'Mutációk generálása',
  /** Explanation under the generate mutations field */
  'vista.mutate.generate.description':
    'A Sanity Agent Actions az Ön leírása, az eredményben szereplő dokumentumok és azok típusai alapján írja meg a mutációkat, és egy próbafuttatás ellenőrzi minden egyes kísérletet; minden kísérlet egy AI kreditet használ fel. Ezek lecserélik az itteni mutációkat, ahol a visszavonás visszahozza ezeket; semmi sem kerül írásra, amíg nem alkalmazza őket.',
  /** Shown when no mutations could be generated, above the reason */
  'vista.mutate.generate.failed': 'A mutációkat nem sikerült generálni',
  /** Accessible label of the description field in the generate mutations bar */
  'vista.mutate.generate.label': 'Mit kell tenniük a mutációknak?',
  /** Placeholder of the description field in the generate mutations bar */
  'vista.mutate.generate.placeholder':
    'Változtassa meg az eredményben szereplő dokumentumok címét foobar-ra',
  /** Shown while the first attempt at the mutations is written */
  'vista.mutate.generate.progress': 'Mutációk írása…',
  /** Shown while an attempt the dry run turned down is retried */
  'vista.mutate.generate.progress-retry':
    'Mutációk javítása ({{attempt}}. kísérlet a(z) {{max}}-ból)…',
  /** Under the dry run: the fields the diffs leave out */
  'vista.mutate.hiding': 'A változások kihagyják a következőket: {{fields}}, ahogy a History is.',
  /** Shown when the mutations are not valid JSON */
  'vista.mutate.invalid-json': 'A mutációk nem érvényes JSON formátumúak: {{message}}',
  /** Shown when a mutation does not name exactly one thing to do */
  'vista.mutate.invalid-mutation':
    'A(z) {{index}}. mutációnak pontosan egy közülük a create, createOrReplace, createIfNotExists, delete vagy patch mezőt kell megneveznie.',
  /** Label of the mutations editor */
  'vista.mutate.mutations': 'Mutációk',
  /** The dry run touched no documents */
  'vista.mutate.no-documents': 'A mutációk egyetlen dokumentumot sem érintenek.',
  /** Shown when the JSON is not a list of mutations */
  'vista.mutate.not-a-list':
    'Írjon egy mutációlistát, egyetlen mutációt, vagy egy kéréstörzset mutációk listájával.',
  /** A document the mutations create */
  'vista.mutate.operation.create': 'Létrehozás',
  /** A document the mutations delete */
  'vista.mutate.operation.delete': 'Törlés',
  /** A document the mutations touch without changing its content */
  'vista.mutate.operation.none': 'Nincs változás',
  /** A document the mutations change */
  'vista.mutate.operation.update': 'Frissítés',
  /** Button running the mutations as a dry run */
  'vista.mutate.preview': 'Próbafuttatás',
  /** Heading of the error shown when the dry run failed */
  'vista.mutate.preview-failed': 'A próbafuttatás sikertelen volt',
  /** Heading of the dry run's outcome */
  'vista.mutate.preview-heading': 'Próbafuttatás',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vista.mutate.stale':
    'A mutációk, a dataset vagy a beállítások megváltoztak ezen próbafuttatás óta. Futtassa újra az alkalmazásukhoz.',
  /** How many documents the dry run changes and leaves as they are */
  'vista.mutate.summary': 'Megváltozott: {{changed}} · Változatlan: {{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vista.network.cache': 'Gyorsítótár',
  /** The API CDN answered from its cache */
  'vista.network.cache.hit': 'Találat',
  /** Under the details of a CDN cache hit */
  'vista.network.cache.hit-explained':
    'A CDN egy gyorsítótárazott választ küldött, egy Önhöz közeli helyről; a lekérdezés nem érte el az API-t.',
  /** The API CDN answered with a response this session had not seen */
  'vista.network.cache.miss': 'Nincs találat, amennyire ez a munkamenet meg tudja állapítani',
  /** The API answered, which caches nothing */
  'vista.network.cache.none': 'Nincs, az API minden kérésre friss tartalommal válaszol',
  /** Shown in the Network panel while there is no response */
  'vista.network.empty':
    'Futtassa le a lekérdezést, hogy lássa, melyik végpont válaszolt rá, gyorsítótárból-e, és hol futott.',
  /** In the Network panel: the endpoint that answered */
  'vista.network.endpoint': 'Válaszolt',
  /** The live API answered */
  'vista.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vista.network.endpoint.cdn': 'API CDN',
  /** In the Network panel: the region the query ran in */
  'vista.network.region': 'A lekérdezés itt futott',
  /** The response did not say where the query ran */
  'vista.network.region.unknown': 'Nincs megadva',
  /** In the Network panel: the round trip and the time on the server */
  'vista.network.timing': 'Idő',
  /** The round trip and the server's time for the query, in milliseconds */
  'vista.network.timing.value': '{{e2e}}ms oda-vissza, {{server}}ms a szerveren',
  /** In the Network panel: the trace of the request, for Sanity support */
  'vista.network.trace': 'Nyomkövetési azonosító',
  /** Hint in the Network panel while queries go to the API */
  'vista.network.use-cdn-hint':
    'Kapcsolja be az API CDN használata lehetőséget a Beállításokban, hogy a lekérdezések a CDN-en keresztül menjenek.',
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vista.network.you': 'Ön',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vista.options.dataset.follows-workspace': 'Követi a munkaterületet',
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vista.options.dataset.pin': 'Dataset rögzítése',
  /** Hint under the dataset field while a dataset is pinned */
  'vista.options.dataset.pinned': 'Rögzítve; a munkaterület másik adatkészletet is használhat',
  /** Button that makes the tab follow the workspace's dataset again */
  'vista.options.dataset.use-workspace': 'Munkaterület adatkészletének használata',
  /** Label for the "Include content source map" switch */
  'vista.options.include-source-map': 'Tartalomforrás-térkép hozzáadása',
  /** Description for the "Include content source map" switch */
  'vista.options.include-source-map.description':
    'Hozzáadja a resultSourceMap elemet a válaszhoz, amely a Content Source Map fülön jelenik meg.',
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vista.options.perspective.global': 'Globális ({{name}})',
  /** Label of the switch that sends queries to the API CDN */
  'vista.options.use-cdn': 'Az API CDN használata',
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vista.options.use-cdn.anonymous':
    'Ez a studio sütivel jelentkeztet be, amelyet az API CDN soha nem kap meg: úgy válaszol, mintha egy névtelen látogató kérdezne, azt mutatva, amit egy nyilvános adatkészlet mutat.',
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vista.options.use-cdn.blocked':
    'Az API CDN nem szolgál ki vázlatokat vagy kiadásokat, ezért a(z) {{perspective}} nézőponttal végzett lekérdezések az API-hoz mennek. A published vagy raw nézőponttal a CDN-t használják.',
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vista.options.use-cdn.blocked.title': 'A lekérdezések az API-hoz mennek, nem a CDN-hez',
  /** Description of the API CDN switch */
  'vista.options.use-cdn.description':
    'Elküldi a lekérdezést az API CDN-nek, mint a useCdn: true a @sanity/client-ben, a published és raw nézőpontokkal: a vázlatok és kiadások mindig az API-hoz mennek. A válaszok legfeljebb egy percig vannak gyorsítótárazva; a Network panel mutatja, ha egy válasz a gyorsítótárból érkezett.',
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vista.options.use-cdn.use-published': 'A published nézőpont használata',
  /** Label of the variant field */
  'vista.options.variant-label': 'Változat',
  /** Variant option sending the navbar's variant, named */
  'vista.options.variant.global': 'Globális ({{name}})',
  /** Variant option sending the navbar's variant while none is selected there */
  'vista.options.variant.global-none': 'Globális (nincs kiválasztva)',
  /** Variant option sending no variant */
  'vista.options.variant.none': 'Nincs',
  /** Accessible label for collapsing a bottom panel */
  'vista.panel.collapse': 'Panel összecsukása',
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vista.panel.delta': 'Delta',
  /** Accessible label for expanding a bottom panel */
  'vista.panel.expand': 'Panel kibontása',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vista.panel.explain': 'Magyarázat',
  /** Label of the Functions tab in the response panel */
  'vista.panel.functions': 'Függvények',
  /** Label of the "History" tab in the response panel */
  'vista.panel.history': 'Előzmények',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vista.panel.lint': 'Lint',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vista.panel.mutate': 'Módosítás',
  /** Label of the Network tab in the response panel */
  'vista.panel.network': 'Hálózat',
  /** Label of the "Options" panel in the request column */
  'vista.panel.options': 'Beállítások',
  /** Label of the "Response" tab in the response panel */
  'vista.panel.response': 'Válasz',
  /** Label of the "Content Source Map" tab in the response panel */
  'vista.panel.source-map': 'Tartalom forrástérkép',
  /** Button adding an item to a list param in the params form */
  'vista.params-form.add-item': 'Elem hozzáadása',
  /** Placeholder of a params form field that takes any JSON value */
  'vista.params-form.any-placeholder':
    'Bármilyen JSON érték; az egyéb szöveg szövegként kerül elküldésre',
  /** Shown in the params form when the query uses no params */
  'vista.params-form.empty':
    'A lekérdezés nem használ paramétereket. Minden $name itt kap egy mezőt.',
  /** Shown in the params form while the params JSON cannot be parsed */
  'vista.params-form.invalid-json':
    'A paraméterek nem érvényes JSON formátumúak. Javítsd ki őket a JSON nézetben, hogy itt szerkeszthesd őket.',
  /** A boolean param's value is not true or false; it is sent anyway */
  'vista.params-form.invalid.boolean': 'Nem igaz vagy hamis; elküldve mint {{value}}',
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vista.params-form.invalid.document-type':
    'Nem dokumentumtípus ebben a munkaterületen; mégis elküldve',
  /** A whole number param (a slice bound) holds a fraction */
  'vista.params-form.invalid.integer': 'Nem egész szám, amire a szeleteléshez szükség van',
  /** A list param's value is not a list; it is sent anyway */
  'vista.params-form.invalid.list': 'Nem lista; elküldve mint {{value}}',
  /** A number param's value is not a number; it is sent anyway */
  'vista.params-form.invalid.number': 'Nem szám; elküldve szövegként',
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vista.params-form.invalid.option': 'Nem szerepel az ismert értékek között; mégis elküldve',
  /** A text param's value is not text; it is sent anyway */
  'vista.params-form.invalid.string': 'Nem szöveg; elküldve mint {{value}}',
  /** Accessible label of an item input of a list param in the params form */
  'vista.params-form.item-label': '${{name}}, {{index}}. elem',
  /** Placeholder of an item input of a list param in the params form */
  'vista.params-form.item-placeholder': 'Elem',
  /** Under a params form field whose param has no value */
  'vista.params-form.missing': 'Nincs beállítva: a lekérdezés hibát jelez, amíg nincs értéke',
  /** Shown in the params form when the workspace schema could not be read */
  'vista.params-form.no-schema':
    'A típusok kizárólag a lekérdezésből származnak: a munkaterület sémáját nem sikerült beolvasni.',
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vista.params-form.not-set': 'Nincs beállítva',
  /** Button setting a date and time param to the current time */
  'vista.params-form.now': 'Most',
  /** Button removing a param the query does not use from the params */
  'vista.params-form.remove': 'Eltávolítás',
  /** Accessible label of the button removing an item from a list param */
  'vista.params-form.remove-item': 'Elem eltávolítása',
  /** Shown in the params form when the query does not parse */
  'vista.params-form.syntax-error':
    'A lekérdezés nem elemezhető, ezért a paraméterei típus nélkül vannak felsorolva.',
  /** Type hint of a params form field: any JSON value */
  'vista.params-form.type.any': 'bármilyen JSON érték',
  /** Type hint of a params form field: true or false */
  'vista.params-form.type.boolean': 'igaz vagy hamis',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vista.params-form.type.datetime': 'dátum és idő (ISO 8601)',
  /** Type hint of a params form field: a document ID */
  'vista.params-form.type.document-id': 'dokumentum-azonosító',
  /** Type hint of a params form field: one of the workspace's document types */
  'vista.params-form.type.document-type': 'dokumentumtípus',
  /** Type hint of a params form field: a whole number */
  'vista.params-form.type.integer': 'egész szám',
  /** Type hint of a params form field: a list of values */
  'vista.params-form.type.list': 'lista, mindegyik {{type}}',
  /** Type hint of a params form field: a number */
  'vista.params-form.type.number': 'szám',
  /** Type hint of a params form field: text */
  'vista.params-form.type.string': 'szöveg',
  /** Heading of the params the query does not use, listed in the params form */
  'vista.params-form.unused': 'A lekérdezés nem használja',
  /** Before the expressions that use a param, in the params form */
  'vista.params-form.used-in': 'Felhasználva itt',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vista.params.fit-height': 'A tartalomhoz igazítva, {{height}} pixel',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vista.params.resize':
    'Paraméterek átméretezése: húzza vagy használja a nyílbillentyűket; kattintson duplán vagy nyomja meg az Enter billentyűt a tartalomhoz igazításhoz',
  /** Tab showing the params as a form inferred from the query */
  'vista.params.view.form': 'Űrlap',
  /** Tab showing the params as JSON */
  'vista.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vista.params.view.label': 'Paraméterek szerkesztése mint',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vista.paste.parsed': 'A lekérdezés betöltve a beillesztett URL-ből',
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vista.paste.unavailable-variant':
    'A beillesztett URL a(z) "{{variant}}" variánst használta; válassza ki a navigációs sávban a lekérdezés futtatásához vele.',
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vista.paste.unknown-dataset':
    'A beillesztett URL-ben szereplő "{{dataset}}" adathalmaz itt nem érhető el, a jelenlegi marad érvényben.',
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vista.paste.unsupported-perspective':
    'A beillesztett URL-ben szereplő perspektíva itt nem támogatott, a jelenlegi marad érvényben.',
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vista.paste.variants-disabled':
    'A beillesztett URL a(z) "{{variant}}" variánst használta; ebben a munkaterületben a variánsok ki vannak kapcsolva, így a lekérdezés anélkül fut.',
  /** Accessible label for the query actions menu */
  'vista.query.actions': 'Lekérdezési műveletek',
  /** Tooltip when automatic refetching is not available for the API version */
  'vista.query.auto-refetch.unsupported':
    'Az automatikus újralekérdezéshez v2021-03-25 vagy újabb API-verzió szükséges.',
  /** Toast shown after the query was copied */
  'vista.query.copied': 'A lekérdezés a vágólapra másolva',
  /** Menu item copying the query text */
  'vista.query.copy': 'Lekérdezés másolása',
  /** Menu item opening the export query dialog */
  'vista.query.export': 'Lekérdezés exportálása…',
  /** Menu item reformatting the query */
  'vista.query.prettify': 'Lekérdezés formázása',
  /** Toast shown when the query could not be reformatted */
  'vista.query.prettify.failed': 'A lekérdezést nem sikerült formázni',
  /** Menu item saving the query to the personal saved queries */
  'vista.query.save': 'Lekérdezés mentése',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vista.query.stop': 'Leállítás',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vista.query.stop.description': 'Lekérdezés leállítása',
  /** Explanation in the settings section about the redesigned experience */
  'vista.redesign.settings.description':
    'Az átalakított Vision eszközt használod. Ha visszaváltasz, a böngésződ megőrzi a füleidet és beállításaidat a következő alkalomra.',
  /** Title of the settings section about the redesigned experience */
  'vista.redesign.settings.title': 'Átalakított Vision (béta)',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vista.redesign.switch-to-classic': 'Váltás a klasszikus Vision eszközre',
  /** Toast button that switches to the redesigned tool */
  'vista.redesign.toast.accept': 'Kipróbálom most',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.description':
    'Lekérdezési fülek, élő újralekérdezés, válasz részletei és exportálás. Bármikor visszaválthatsz.',
  /** Toast button that hides the invitation */
  'vista.redesign.toast.dismiss': 'Most nem',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.title': 'Próbáld ki az átalakított Visiont',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vista.redesign.try': 'Próbáld ki az átalakítást',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vista.redesign.try.description':
    'Válts az átalakított, béta állapotú Visionra. Bármikor visszaválthatsz az oldalsávjából.',
  /** Empty state of the response panel before anything was fetched */
  'vista.response.empty': 'Még nincs lekérdezett adat',
  /** Label for the payload size in the response tab */
  'vista.response.payload-size': 'Adatméret',
  /** Label for the sync tags in the response tab */
  'vista.response.sync-tags': 'Szinkronizációs címkék',
  /** Shown when the response carried no sync tags */
  'vista.response.sync-tags.none': 'Nincsenek szinkronizációs címkék a válaszban',
  /** Accessible label for the result actions menu */
  'vista.result.actions': 'Eredmény műveletei',
  /** Toast shown after the result was copied */
  'vista.result.copied': 'Eredmény a vágólapra másolva',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vista.result.copied-value': '{{path}} másolva',
  /** Menu item and button copying the result as JSON */
  'vista.result.copy': 'Eredmény másolása',
  /** Button next to each property in the result tree, copying its value */
  'vista.result.copy-value': 'Érték másolása',
  /** Empty state of the result view */
  'vista.result.empty': 'Futtasd a lekérdezést, hogy itt lásd az eredményét',
  /** Button exporting the result as CSV */
  'vista.result.export-csv': 'CSV exportálása',
  /** Button exporting the result as JSON */
  'vista.result.export-json': 'JSON exportálása',
  /** Menu item opening the TypeScript export dialog */
  'vista.result.export-typescript': 'TypeScript exportálása…',
  /** Menu item opening the Zod export dialog */
  'vista.result.export-zod': 'Zod exportálása…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vista.result.graph.collapse': 'Tartalom elrejtése',
  /** Button fitting the whole graph in view */
  'vista.result.graph.fit': 'Illesztés a nézethez',
  /** Accessible label of the graph, saying how to move around in it */
  'vista.result.graph.label':
    'Eredménygráf: húzással mozgatható, görgetéssel nagyítható; fókuszban a nyílbillentyűk mozgatnak, a + és - nagyít/kicsinyít, a 0 illeszt',
  /** Ends the note on a graph that leaves part of this result out */
  'vista.result.graph.left-out-hint': 'A fa- és JSON-nézet a teljes tartalmat mutatja.',
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vista.result.graph.node-limit': 'Csak az első {{nodes}} objektum és tömb jelenik meg.',
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vista.result.graph.partial':
    'Csak az első {{rows}} bejegyzés jelenik meg a(z) {{nodes}} esetében.',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vista.result.graph.partial.node': '{{name}} ({{entries}} bejegyzés)',
  /** Title of the graph node of the result itself */
  'vista.result.graph.root': 'eredmény',
  /** Button zooming into the graph */
  'vista.result.graph.zoom-in': 'Nagyítás',
  /** Button zooming out of the graph */
  'vista.result.graph.zoom-out': 'Kicsinyítés',
  /** Tab showing the result as a graph of its objects and arrays */
  'vista.result.view.graph': 'Gráf',
  /** Tab showing the result as indented JSON text, to select and copy from */
  'vista.result.view.json': 'JSON',
  /** Accessible label of the tabs that switch how the result shows */
  'vista.result.view.label': 'Eredménynézet',
  /** Tab showing the result as a tree to browse */
  'vista.result.view.tree': 'Fa',
  /** Empty state of the saved queries panel */
  'vista.saved.empty':
    'Még nincsenek mentett lekérdezések. Mentse az aktuális lekérdezést a + gombbal.',
  /** Empty state of a query list when the search matches nothing */
  'vista.saved.empty-search': 'Nincs a keresésnek megfelelő lekérdezés',
  /** Menu item loading a saved query into the active tab */
  'vista.saved.load-in-current-tab': 'Betöltés az aktuális lapra',
  /** Menu item opening a saved query in a new tab */
  'vista.saved.open-in-new-tab': 'Megnyitás új lapon',
  /** Menu item renaming a saved query */
  'vista.saved.rename': 'Átnevezés',
  /** Accessible label for the button saving the current query */
  'vista.saved.save-current': 'Aktuális lekérdezés mentése',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vista.saved.unavailable-variant':
    'Ez a mentett lekérdezés a(z) „{{variant}}” változatot használta; válassza ki azt a navigációs sávban a lekérdezés ezzel történő futtatásához.',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vista.saved.unknown-dataset':
    'A mentett lekérdezés „{{dataset}}” adatkészlete itt nem érhető el, a jelenlegi marad használatban.',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vista.saved.variants-disabled':
    'Ez a mentett lekérdezés a(z) „{{variant}}” változatot használta; ebben a munkaterületen a változatok ki vannak kapcsolva, így a lekérdezés anélkül fut.',
  /** Button in the settings dialog that clears the stored state */
  'vista.settings.clear-storage': 'Tárolt adatok törlése',
  /** Confirmation button for clearing the storage */
  'vista.settings.clear-storage.confirm': 'Igen, tárhely törlése',
  /** Explanation of what clearing the storage does */
  'vista.settings.clear-storage.description':
    'Törli a személyes mentett lekérdezéseidet és a függvénykönyvtárat, visszaállítja a nyitott füleket és az alapértelmezéseket ebben a böngészőben, és visszatér a klasszikus Vision eszközhöz. A megosztott lekérdezések megmaradnak.',
  /** Toast shown when the saved queries could not be cleared */
  'vista.settings.clear-storage.error': 'Nem sikerült törölni a mentett lekérdezéseket',
  /** Toast shown after the storage was cleared */
  'vista.settings.clear-storage.success': 'Tárhely törölve',
  /** Explanation at the top of the settings dialog */
  'vista.settings.description':
    'Alapértelmezések az új fülekhez. A nyitott fülek megtartják saját beállításaikat.',
  /** Explains the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.description':
    'Mezőútvonalanként egy sor soronként. Egy útvonal az eredmény bármely mélységén illeszkedik, így a _rev elrejti minden benne lévő dokumentum revízióját. Az egyes diffek továbbra is megjeleníthetik őket.',
  /** Button restoring the default fields left out of History diffs */
  'vista.settings.history-diff.reset': 'Visszaállítás alapértelmezésre',
  /** Label of the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.title': 'Az előzmény-diffekből elrejtett mezők',
  /** Title of the settings dialog */
  'vista.settings.title': 'Beállítások',
  /** Empty state of the shared queries panel */
  'vista.shared.empty':
    'Még nincsenek megosztott lekérdezések. Oszd meg egy mentett lekérdezésedet, hogy elérhető legyen mindenki számára, aki ezt az adatkészletet használja.',
  /** Shortcut description: close dialogs and menus */
  'vista.shortcuts.close': 'Párbeszédablakok és menük bezárása',
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vista.shortcuts.complete': 'Függvénynév kiegészítése',
  /** Shortcut description: copy the query */
  'vista.shortcuts.copy-query': 'Lekérdezés másolása',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vista.shortcuts.extract-function': 'A kurzornál lévő projekció kiemelése függvénybe',
  /** Shortcut description: run the query */
  'vista.shortcuts.fetch': 'Lekérdezés lefuttatása',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vista.shortcuts.next-finding': 'Ugrás a következő lint-találathoz',
  /** Shortcut description: reformat the query */
  'vista.shortcuts.prettify': 'Lekérdezés formázása',
  /** Title of the keyboard shortcuts dialog */
  'vista.shortcuts.title': 'Billentyűparancsok',
  /** Sidebar toggle: show icons only */
  'vista.sidebar.collapse': 'Oldalsáv összecsukása',
  /** Sidebar toggle: show labels next to the icons */
  'vista.sidebar.expand': 'Oldalsáv kibontása',
  /** Accessible label for the sidebar navigation */
  'vista.sidebar.label': 'Vista oldalsáv',
  /** Sidebar item and drawer title for personal saved queries */
  'vista.sidebar.saved-queries': 'Mentett lekérdezések',
  /** Sidebar item opening the settings dialog */
  'vista.sidebar.settings': 'Beállítások',
  /** Sidebar item and drawer title for shared queries */
  'vista.sidebar.shared-queries': 'Megosztott lekérdezések',
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vista.sidebar.shortcuts': 'Billentyűparancsok',
  /** Empty state of the content source map panel */
  'vista.source-map.empty':
    'Nincs tartalom forrástérkép a válaszban. Kapcsolja be a "Tartalom forrástérkép belefoglalása" opciót a Beállítások alatt, és kérdezzen le újra.',
  /** Accessible label of the divider between the result and the response details panel */
  'vista.split.bottom-panel':
    'A válasz részletei panel átméretezése: húzza, vagy használja a nyílbillentyűket; Home és End a határokhoz ugrik, Enter visszaállítja',
  /** Accessible label of the divider between the request and response panes */
  'vista.split.request-response':
    'A kérés és válasz panelek átméretezése: húzza, vagy használja a nyílbillentyűket; Home és End a határokhoz ugrik, Enter visszaállítja',
  /** Accessible label for the button closing a query tab */
  'vista.tabs.close-tab': 'Lap bezárása',
  /** Accessible label for the list of query tabs */
  'vista.tabs.label': 'Lekérdezés lapok',
  /** Accessible label for the button opening a new query tab */
  'vista.tabs.new-tab': 'Új lap',
  /** Placeholder of the input renaming a tab */
  'vista.tabs.title-placeholder': 'Lap címe',
  /** Title of a tab whose query is still empty */
  'vista.tabs.untitled': 'Névtelen lekérdezés',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vista.webmcp.check-query': 'GROQ lekérdezés ellenőrzése a Visionben',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vista.webmcp.describe-schema': 'A munkaterület sémájának leírása a Visionben',
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vista.webmcp.explain-query': 'GROQ lekérdezés magyarázata a Visionben',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vista.webmcp.get-state': 'A megnyitott Vision lap beolvasása',
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vista.webmcp.open-query': 'GROQ lekérdezés megnyitása a Visionben',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vista.webmcp.preview-mutations': 'Mutációk előnézete a Visionben',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vista.webmcp.run-query': 'GROQ lekérdezés futtatása a Visionben',
})
