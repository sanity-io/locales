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
  'vision.agent-actions.credits': 'Kérésenként egy AI kreditet használ',
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vision.ai-credits.balance': '{{balance}}/{{quota}} AI kredit maradt erre a hónapra.',
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vision.ai-credits.deficit':
    '{{used}} AI kredit felhasználva ebben a hónapban, ami {{deficit}}-vel több, mint a benne foglalt {{quota}}.',
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vision.ai-credits.limit.description':
    'Az Ön szervezete {{used}} AI kreditet használt fel a havi {{quota}} kreditből, ezért a Sanity Agent Actions szüneteltetve van a következő hónapig, vagy amíg a költési limitet meg nem emelik.',
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vision.ai-credits.limit.description-unknown':
    'Az Ön szervezete elérte az AI kreditek költési limitjét, ezért a Sanity Agent Actions szüneteltetve van a következő hónapig, vagy amíg a limitet meg nem emelik.',
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vision.ai-credits.limit.learn-more': 'Hogyan működnek az AI kreditek',
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vision.ai-credits.limit.manage': 'AI kreditek kezelése',
  /** Title of the card shown where the organization is out of AI credits */
  'vision.ai-credits.limit.title': 'Elfogytak az AI kreditek',
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vision.ai-credits.usage': 'AI használat',
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vision.ai-credits.used': '{{used}} AI kredit felhasználva ebben a hónapban.',
  /** Button in the request column's action bar naming the API version requests go out with */
  'vision.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vision.api-version.button-cdn': 'API CDN {{version}}',
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vision.api-version.button-invalid': 'Befejezetlen API verzió',
  /** Tooltip of the API version button */
  'vision.api-version.tooltip':
    'A lekérdezések a(z) {{version}} API verzió ellen futnak. Válassza ki a módosításhoz a Beállításokban.',
  /** Tooltip of the API version button while queries go through the API CDN */
  'vision.api-version.tooltip-cdn':
    'A lekérdezések az API CDN-en keresztül futnak, {{version}} API verzióval. Válassza ki a módosításhoz a Beállításokban.',
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vision.api-version.tooltip-cdn-blocked':
    'A lekérdezések az API-n keresztül futnak, {{version}} API verzióval, nem az API CDN-en: az nem szolgálja ki a(z) {{perspective}} perspektívát. Válassza ki a módosításhoz a Beállításokban.',
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vision.api-version.tooltip-invalid':
    'A Beállításokban megadott API verzió befejezetlen, ezért semmi sem kérhető le, amíg nincs kitöltve.',
  /** Tooltip of the API version button while a selected variant forces the variants API version */
  'vision.api-version.tooltip-locked':
    'A lekérdezések a(z) {{version}} API verzió ellen futnak, amelyet a kiválasztott variáns igényel.',
  /** Label of the document after the change in the Delta panel */
  'vision.delta.after': 'Utána',
  /** Label of the document before the change in the Delta panel */
  'vision.delta.before': 'Előtte',
  /** What the Delta panel does */
  'vision.delta.description':
    'A lekérdezést delta módban futtatja, ahogy a GROQ-alapú webhookok, figyelők (listenerek) és Sanity Functions is teszik: a before() és after() a dokumentumot jelenti a változás előtt és után, a @ a változás utáni dokumentum, a delta::changedAny() pedig ezeket hasonlítja össze. A böngészőben fut, a groq-js segítségével. Ha az egyik oldal üres, az azt jelenti, hogy nincs dokumentum: a változás létrehozza vagy törli azt.',
  /** Label of the document ID field in the Delta panel */
  'vision.delta.document-id': 'Dokumentum azonosító',
  /** Shown when there is a query but no documents to compare */
  'vision.delta.empty':
    'Töltse be egy dokumentum előzményeit, vagy írja be a dokumentumokat az Előtte és Utána mezőkbe.',
  /** Shown when the query fails in delta mode */
  'vision.delta.failed': 'A lekérdezést nem sikerült delta módban futtatni: {{message}}',
  /** Shown when the After document is not valid JSON */
  'vision.delta.invalid-after': 'Az Utána mező nem érvényes JSON: {{message}}',
  /** Shown when the Before document is not valid JSON */
  'vision.delta.invalid-before': 'A „Before” nem érvényes JSON: {{message}}',
  /** Button loading the document's revisions from the History API */
  'vision.delta.load': 'Előzmények betöltése',
  /** Shown when the history could not be loaded */
  'vision.delta.load-failed': 'Az előzményeket nem sikerült betölteni: {{message}}',
  /** A delta filter that is true for the change */
  'vision.delta.matches':
    'Egyezik: ehhez a módosításhoz lefut egy webhook vagy function, amely erre a szűrőre vonatkozik.',
  /** A delta filter that is false for the change */
  'vision.delta.no-match':
    'Nem egyezik: ehhez a módosításhoz nem fut le olyan webhook vagy function, amely erre a szűrőre vonatkozik.',
  /** Shown while the query or its params cannot be sent */
  'vision.delta.no-request':
    'Javítsd ki a lekérdezést és annak paramétereit, hogy futtatni tudd delta módban.',
  /** Heading of the delta result */
  'vision.delta.result': 'Eredmény',
  /** The After choice for a change that deletes the document */
  'vision.delta.revision.none-after': 'Semmi: a módosítás törli a dokumentumot',
  /** The Before choice for a change that creates the document */
  'vision.delta.revision.none-before': 'Semmi: a módosítás hozza létre a dokumentumot',
  /** A revision in the Before and After lists */
  'vision.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vision.drawer.close': 'Panel bezárása',
  /** Explanation at the top of the Explain panel */
  'vision.explain.description':
    'A lekérdezési terv mutatja meg, hogyan futtatja le a Content Lake a lekérdezést: mit olvas be, szűr és rendez olvasás közben, és mi marad a későbbi lépésekre. A „Magyarázd el nekem” funkció a Sanity Agent Actions segítségével egyszerű szavakkal leírja a lekérdezést és annak tervét, ami egy AI kreditet használ fel.',
  /** Shown in the Explain panel while there is no valid query to explain */
  'vision.explain.empty': 'Írj egy lekérdezést a magyarázathoz.',
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vision.explain.explain': 'Magyarázd el nekem',
  /** Shown when the explanation could not be written */
  'vision.explain.failed': 'A lekérdezést nem sikerült megmagyarázni: {{message}}',
  /** A count the index computes without reading the documents */
  'vision.explain.insight.aggregate':
    'Az index megszámolja, anélkül hogy beolvasná a dokumentumokat.',
  /** A subquery the plan runs once for all documents */
  'vision.explain.insight.batched-subquery':
    'Az alárendelt lekérdezés egyszer fut le az összes dokumentumra, egyetlen kötegelt lekérésben, nem dokumentumonként.',
  /** Part of the filter runs in memory; the expression follows */
  'vision.explain.insight.filter-in-memory':
    'A szűrő egy része memóriában fut, az olvasás után: minden dokumentumot, amelyet az index átenged, előbb be kell olvasni, ami nagy adatkészleteknél lassú lehet. A join-ok (->) és a szűrőn belüli függvények nem tudják használni az indexet.',
  /** The index sorts and limits while reading */
  'vision.explain.insight.index-sort-limit':
    'Az index rendezi és korlátozza a dokumentumokat olvasás közben.',
  /** The plan slices in memory */
  'vision.explain.insight.slice-in-memory':
    'A szeletelés memóriában történik az olvasás után, nem korlátozásként olvasás közben.',
  /** The plan sorts in memory */
  'vision.explain.insight.sort-in-memory':
    'A rendezés memóriában történik, miután minden találat beolvasásra került. Olyan attribútumok szerint rendezz, amelyeket az index is tud rendezni.',
  /** Link under the plan insights to the guide on fast queries */
  'vision.explain.insights.guide': 'Nagy teljesítményű GROQ',
  /** Heading of the plan insights in the Explain panel */
  'vision.explain.insights.title': 'Amire érdemes figyelni',
  /** Button in the Explain panel fetching the query plan */
  'vision.explain.plan': 'Lekérdezési terv megjelenítése',
  /** Shown when the query plan could not be fetched */
  'vision.explain.plan-failed': 'A lekérdezési tervet nem sikerült lekérni: {{message}}',
  /** Heading of the query plan in the Explain panel */
  'vision.explain.plan-title': 'Lekérdezési terv',
  /** Toast shown after a code snippet was copied */
  'vision.export-query.copied': 'Részlet vágólapra másolva',
  /** Label for the button that copies a code snippet */
  'vision.export-query.copy': 'Részlet másolása',
  /** Explanation at the top of the export query dialog */
  'vision.export-query.description':
    'Futtassa le ezt a lekérdezést a studión kívül az egyik ilyen részlettel.',
  /** Note under the curl snippet when the query is sent as a request body rather than in the URL */
  'vision.export-query.post-body-note':
    'A lekérdezés és a paraméterek keresési paraméterként {{size}} karakterre jönnek ki; {{limit}} karaktertől kezdve a @sanity/client ezeket JSON törzsként küldi az URL helyett, így a részlet is ezt teszi.',
  /** Title of the dialog that exports the query as code snippets */
  'vision.export-query.title': 'Lekérdezés exportálása',
  /** Note about authentication in the export query dialog */
  'vision.export-query.token-note':
    'A privát adatkészletekhez API token szükséges. A nyilvános adatkészleteknél az Authorization fejléc elhagyható.',
  /** Toast shown after the generated code was copied */
  'vision.export-types.copied': 'Kód vágólapra másolva',
  /** Label for the button that copies the generated code */
  'vision.export-types.copy': 'Kód másolása',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vision.export-types.empty':
    'Előbb hajtsa végre a lekérdezést, hogy legyen eredmény, amelyből a típusokat le lehet vezetni.',
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vision.export-types.schema-error': 'A séma kiértékelése sikertelen: {{message}}',
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vision.export-types.source.result':
    'A lekért eredményből levezetve, mivel a lekérdezést nem lehetett a workspace sémája alapján kiértékelni.',
  /** Note shown when the types were derived from the workspace schema */
  'vision.export-types.source.schema':
    'A workspace sémájából levezetve, ugyanúgy, ahogy a sanity typegen is teszi.',
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vision.export-types.stale-result':
    'A megjelenített eredmény egy másik lekérdezéshez vagy paraméterekhez tartozik. Előbb hajtsa végre az aktuális lekérdezést, hogy legyen eredmény, amelyből a típusokat le lehet vezetni.',
  /** Title of the dialog exporting TypeScript types for the result */
  'vision.export-types.title-typescript': 'TypeScript exportálása',
  /** Title of the dialog exporting a Zod schema for the result */
  'vision.export-types.title-zod': 'Zod exportálása',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vision.functions.add': 'Hozzáadás a lekérdezéshez',
  /** Shown on a library function the query declares the same way */
  'vision.functions.declared': 'Ebben a lekérdezésben',
  /** Lint action on a call of a library function the query does not declare */
  'vision.functions.editor.add-from-library': 'Deklarálja',
  /** Note in a function's hover documentation: the API version it needs */
  'vision.functions.editor.api-version': '{{version}} vagy újabb API verzió szükséges',
  /** Detail of a completion for a custom function the query declares */
  'vision.functions.editor.completion-declared': 'ebben a lekérdezésben',
  /** Detail of a completion for a library function, which declares it too */
  'vision.functions.editor.completion-library': 'a könyvtárából',
  /** Note in the hover documentation of a custom function the query declares */
  'vision.functions.editor.declared-on': 'Egyéni függvény, a(z) {{line}}. sorban deklarálva',
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vision.functions.editor.delta-only':
    'Csak delta módban működik, ahol a webhookok és a Sanity Functions futtatják a szűrőiket',
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vision.functions.editor.extract': 'Kiemelés függvénybe',
  /** Note in the hover documentation of a library function the query does not declare */
  'vision.functions.editor.in-library':
    'A függvénykönyvtáradban van, ebben a lekérdezésben nincs deklarálva',
  /** Link at the end of a built-in function's hover documentation */
  'vision.functions.editor.reference': 'GROQ függvények referencia',
  /** Explanation under the library heading in the Functions panel */
  'vision.functions.library.description':
    'A projekt minden adatkészletéhez megmarad ebben a böngészőben. A kiegészítések felkínálják ezeket a függvényeket, a lint pedig felajánlja egy, a lekérdezés által hívott függvény deklarálását.',
  /** Shown in the Functions panel while the library is empty */
  'vision.functions.library.empty':
    'Mentsd el a lekérdezés által deklarált egyik függvényt, hogy más lekérdezésekben is használhasd.',
  /** Heading of the functions library in the Functions panel */
  'vision.functions.library.title': 'Könyvtár',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vision.functions.query.empty':
    'Deklarálj egyéni függvényeket a lekérdezés elején, vagy helyezd a kurzort egy projekcióba, például author->{name}, majd nyomd meg a kinyerés gombot a szerkesztő felett ({{shortcut}}).',
  /** Heading of the functions the query declares in the Functions panel */
  'vision.functions.query.title': 'Ebben a lekérdezésben',
  /** Removes a function from the library */
  'vision.functions.remove': 'Eltávolítás a könyvtárból',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vision.functions.replace': 'Csere a lekérdezésben',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vision.functions.reveal': '{{name}} megjelenítése a szerkesztőben',
  /** Button of a function the query declares that is not in the library yet */
  'vision.functions.save': 'Mentés a könyvtárba',
  /** Shown on a function the query declares the way the library has it */
  'vision.functions.saved': 'Mentve',
  /** Button of a function the query declares differently from the library's version */
  'vision.functions.update': 'Könyvtár frissítése',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vision.generate.button': 'Lekérdezés generálása',
  /** Closes the generate query bar */
  'vision.generate.close': 'Bezárás',
  /** Explanation under the generate query field */
  'vision.generate.description':
    'A Sanity Agent Actions megírja a GROQ-ot a leírásod és a dokumentumtípusok alapján, és a Content Lake minden egyes próbálkozást ellenőriz; minden próbálkozás egy AI kreditet használ fel. Lecseréli ennek a lapnak a lekérdezését, és lefuttatja; a szerkesztőben a visszavonás visszaállítja az előző lekérdezést.',
  /** Shown when no query could be generated, above the reason */
  'vision.generate.failed': 'A lekérdezést nem sikerült generálni',
  /** Accessible label of the description field in the generate query bar */
  'vision.generate.label': 'Mit kérdezzen le a lekérdezés?',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vision.generate.open-anyway': 'Az utolsó próbálkozás megnyitása',
  /** Placeholder of the description field in the generate query bar */
  'vision.generate.placeholder':
    'A 10 legújabb szerző, vezetéknév majd keresztnév szerint rendezve',
  /** Shown while the first attempt at a query is written */
  'vision.generate.progress': 'Lekérdezés írása…',
  /** Shown while a rejected attempt is retried */
  'vision.generate.progress-retry':
    'Lekérdezés javítása ({{attempt}}. próbálkozás a(z) {{max}}-ból)…',
  /** Button generating the query */
  'vision.generate.submit': 'Generálás',
  /** Badge on a history entry the API CDN answered */
  'vision.history.cdn': 'API CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vision.history.cdn-cache-hit': 'CDN gyorsítótár-találat',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vision.history.changed': 'Módosult',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vision.history.changes': 'Változások',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vision.history.changes-failed': 'A változásokat nem sikerült megjeleníteni.',
  /** Button retrying to show the changes of a history entry */
  'vision.history.changes-retry': 'Újra',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vision.history.compared-with': 'Összehasonlítva a(z) {{time}} időpontban történt lekéréssel',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vision.history.diff.params': 'Paraméterek',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vision.history.diff.query': 'Lekérdezés',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vision.history.diff.query-formatting-only': 'Csak a formázás változott',
  /** Label of the diff of the query result in a history entry's changes */
  'vision.history.diff.result': 'Eredmény',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vision.history.diff.url': 'Kérés URL',
  /** Empty state of the history panel */
  'vision.history.empty': 'Még nem történt lekérés',
  /** Status label for a failed fetch in the history */
  'vision.history.failed': 'Sikertelen',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vision.history.hide-hidden': 'Elrejtés',
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vision.history.hiding': '{{fields}} elrejtve',
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vision.history.only-hidden-changed': 'Csak rejtett mezők változtak',
  /** History reason: a tab opened with a generated query fetched it */
  'vision.history.reason.generated': 'Generált lekérdezés',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vision.history.reason.link': 'Megnyitott hivatkozás',
  /** History reason: a live event matched the query's sync tags */
  'vision.history.reason.live': 'Élő frissítés',
  /** History reason: the live connection asked every client to refetch */
  'vision.history.reason.live-restart': 'Élő kapcsolat újraindítva',
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vision.history.reason.live-start': 'Élő lekérés elindítva',
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vision.history.reason.load': 'Lekérdezés betöltve',
  /** History reason: the fetch button was pressed */
  'vision.history.reason.manual': 'Lekérés gomb',
  /** History reason: mutations were applied from the Mutate panel */
  'vision.history.reason.mutation': 'Módosítások alkalmazva',
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vision.history.reason.options': 'Beállítások módosultak',
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vision.history.reason.paste': 'Beillesztett URL',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vision.history.reason.resume': 'Automatikus újralekérdezés folytatva',
  /** History reason: the keyboard shortcut was used */
  'vision.history.reason.shortcut': 'Gyorsbillentyű',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vision.history.same-result': 'Azonos eredmény',
  /** Button showing the hidden fields in a history entry's changes */
  'vision.history.show-hidden': 'Megjelenítés',
  /** Next to a history entry's changes while the hidden fields are shown */
  'vision.history.showing-hidden': '{{fields}} megjelenítve, alapértelmezetten rejtett',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vision.history.too-large': 'Túl nagy az összehasonlításhoz',
  /** A history entry whose result is the same as the previous result */
  'vision.history.unchanged': 'Nincs változás',
  /** Shown in the Lint panel while the query has no lint findings */
  'vision.lint.empty':
    'Nincs lint találat. A GROQ linter által a lekérdezésben észlelt problémák itt jelennek meg gépelés közben; válassz egyet a szerkesztőben való kijelöléshez.',
  /** Where a lint finding sits in the query, shown under its message */
  'vision.lint.position': '{{line}}. sor, {{column}}. oszlop',
  /** Severity badge of a lint finding */
  'vision.lint.severity.error': 'Hiba',
  /** Severity badge of a lint finding */
  'vision.lint.severity.hint': 'Javaslat',
  /** Severity badge of a lint finding */
  'vision.lint.severity.info': 'Info',
  /** Severity badge of a lint finding */
  'vision.lint.severity.warning': 'Figyelmeztetés',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vision.lint.use-suggestion': '{{suggestion}} használata',
  /** Badge shown while a tab refetches automatically */
  'vision.live.active': 'Élő',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vision.live.button': 'Élő lekérdezés',
  /** Tooltip of the Live button while automatic refetching is off */
  'vision.live.button.start':
    'Lekérdezés, majd újralekérdezés minden alkalommal, amikor az eredményben szereplő dokumentumok megváltoznak',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vision.live.button.stop':
    'Az újralekérdezés leállítása, amikor az eredményben szereplő dokumentumok megváltoznak. A lekérdezés gombbal továbbra is lehet igény szerint lekérdezni azokat az eredményeket, amelyeket dokumentumváltozás nem érint, például a now()-t',
  /** Error shown when the live connection breaks */
  'vision.live.error': 'Élő frissítések kapcsolata megszakadt: {{message}}',
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vision.live.stop': 'Élő lekérdezés leállítása',
  /** Button in the Mutate panel adding a mutation to the list */
  'vision.mutate.add': 'Mutáció hozzáadása',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vision.mutate.add.create': 'Dokumentum létrehozása',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vision.mutate.add.delete': 'Dokumentum törlése',
  /** Adds a mutation deleting the documents of the shown result */
  'vision.mutate.add.delete-result': 'Az eredményben szereplő dokumentumok törlése',
  /** Adds a mutation patching a document, its ID to fill in */
  'vision.mutate.add.patch': 'Dokumentum módosítása',
  /** Adds a mutation patching the documents of the shown result */
  'vision.mutate.add.patch-result': 'Az eredményben szereplő dokumentumok patchelése',
  /** Button applying the mutations a dry run showed */
  'vision.mutate.apply': 'Alkalmazás erre: {{dataset}}',
  /** Heading of the error shown when applying the mutations failed */
  'vision.mutate.apply-failed': 'A mutációk nem lettek alkalmazva',
  /** Next to Apply while the mutations as they are have had no dry run */
  'vision.mutate.apply-needs-preview':
    'Az Alkalmazás azt küldi el, amit egy próbafuttatás mutatott: futtass egyet előbb.',
  /** Option giving array items without a _key one */
  'vision.mutate.auto-keys': '_key hozzáadása azokhoz a tömbelemekhez, amelyeknek nincs',
  /** Under the option giving array items a _key */
  'vision.mutate.auto-keys.description':
    'A studionak szüksége van egyre minden tömbelemen a szerkesztéshez.',
  /** Button showing a document's changes in the dry run */
  'vision.mutate.changes': 'Változások',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vision.mutate.changes-failed': 'A változásokat nem sikerült megjeleníteni.',
  /** Button retrying to show a document's changes */
  'vision.mutate.changes-retry': 'Újra',
  /** What the Mutate panel does */
  'vision.mutate.description':
    'Írj mutációkat úgy, ahogyan a Mutations API fogadja őket, listában: create, createOrReplace, createIfNotExists, delete és patch, ID vagy GROQ lekérdezés alapján. Egy próbafuttatás megmutatja, mit tennének az egyes dokumentumokkal anélkül, hogy bármit megváltoztatna; az Alkalmazás ezután egyetlen tranzakcióban írja be őket a datasetbe, a fiókoddal.',
  /** What the API says went wrong with one of the mutations */
  'vision.mutate.failure-item': 'Mutáció {{index}}: {{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vision.mutate.generate.button': 'Mutációk generálása',
  /** Explanation under the generate mutations field */
  'vision.mutate.generate.description':
    'A Sanity Agent Actions a leírásod, az eredményben szereplő dokumentumok és azok típusai alapján írja meg a mutációkat, és egy próbafuttatás ellenőrzi minden kísérletet; minden kísérlet egy AI kreditet használ fel. Ezek lecserélik az itt lévő mutációkat, ahol a visszavonás visszahozza őket; semmi nem kerül írásra, amíg nem alkalmazod őket.',
  /** Shown when no mutations could be generated, above the reason */
  'vision.mutate.generate.failed': 'A mutációkat nem sikerült generálni',
  /** Accessible label of the description field in the generate mutations bar */
  'vision.mutate.generate.label': 'Mit csináljanak a mutációk?',
  /** Placeholder of the description field in the generate mutations bar */
  'vision.mutate.generate.placeholder':
    'Változtasd meg az eredményben szereplő dokumentumok címét erre: foobar',
  /** Shown while the first attempt at the mutations is written */
  'vision.mutate.generate.progress': 'Mutációk írása…',
  /** Shown while an attempt the dry run turned down is retried */
  'vision.mutate.generate.progress-retry':
    'Mutációk javítása ({{attempt}}. kísérlet a(z) {{max}}-ból)…',
  /** Under the dry run: the fields the diffs leave out */
  'vision.mutate.hiding':
    'A változások kihagyják a következőket: {{fields}}, ahogyan a History is.',
  /** Shown when the mutations are not valid JSON */
  'vision.mutate.invalid-json': 'A mutációk nem érvényes JSON formátumúak: {{message}}',
  /** Shown when a mutation does not name exactly one thing to do */
  'vision.mutate.invalid-mutation':
    'A(z) {{index}}. mutációnak pontosan egyet kell megadnia a create, createOrReplace, createIfNotExists, delete vagy patch közül.',
  /** Label of the mutations editor */
  'vision.mutate.mutations': 'Mutációk',
  /** The dry run touched no documents */
  'vision.mutate.no-documents': 'A mutációk egyetlen dokumentumot sem érintenek.',
  /** Shown when the JSON is not a list of mutations */
  'vision.mutate.not-a-list':
    'Írj egy mutációlistát, egyetlen mutációt, vagy egy kéréstörzset, amely mutációk listáját tartalmazza.',
  /** A document the mutations create */
  'vision.mutate.operation.create': 'Létrehozás',
  /** A document the mutations delete */
  'vision.mutate.operation.delete': 'Törlés',
  /** A document the mutations touch without changing its content */
  'vision.mutate.operation.none': 'Nincs változás',
  /** A document the mutations change */
  'vision.mutate.operation.update': 'Frissítés',
  /** Button running the mutations as a dry run */
  'vision.mutate.preview': 'Próbafuttatás',
  /** Heading of the error shown when the dry run failed */
  'vision.mutate.preview-failed': 'A próbafuttatás sikertelen volt',
  /** Heading of the dry run's outcome */
  'vision.mutate.preview-heading': 'Próbafuttatás',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vision.mutate.stale':
    'A mutációk, a dataset vagy a beállítások megváltoztak a próbafuttatás óta. Futtassa újra, hogy alkalmazza őket.',
  /** How many documents the dry run changes and leaves as they are */
  'vision.mutate.summary': 'Módosítva: {{changed}} · Változatlan: {{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vision.network.cache': 'Gyorsítótár',
  /** The API CDN answered from its cache */
  'vision.network.cache.hit': 'Találat',
  /** Under the details of a CDN cache hit */
  'vision.network.cache.hit-explained':
    'A CDN egy már gyorsítótárazott válasszal válaszolt, egy Önhöz közeli helyről; a lekérdezés nem érte el az API-t.',
  /** The API CDN answered with a response this session had not seen */
  'vision.network.cache.miss': 'Nem talált, amennyire ez a munkamenet meg tudja állapítani',
  /** The API answered, which caches nothing */
  'vision.network.cache.none': 'Nincs, az API minden kérésre friss tartalommal válaszol',
  /** Shown in the Network panel while there is no response */
  'vision.network.empty':
    'Küldje el a lekérdezést, hogy lássa, melyik végpont válaszolt rá, gyorsítótárból-e, és hol futott.',
  /** In the Network panel: the endpoint that answered */
  'vision.network.endpoint': 'Válaszolt',
  /** The live API answered */
  'vision.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vision.network.endpoint.cdn': 'API CDN',
  /** In the Network panel: the HTTP method the query was sent with */
  'vision.network.method': 'Módszer',
  /** The query and its params went in the URL */
  'vision.network.method.get': 'GET, a lekérdezéssel és a paraméterekkel az URL-ben',
  /** The query and its params went in the request body */
  'vision.network.method.post': 'POST, a lekérdezéssel és a paraméterekkel JSON törzsként',
  /** Under the method of a POST request: why the query was not sent in the URL */
  'vision.network.method.post-explained':
    'A lekérdezés és a paraméterek {{size}} karaktert tesznek ki keresési paraméterként; {{limit}} karaktertől kezdve a @sanity/client JSON törzsként küldi őket, mivel az API korlátozza az URL hosszát. A beállítások az URL-ben maradnak.',
  /** In the Network panel: the region the query ran in */
  'vision.network.region': 'A lekérdezés az alábbi régióban futott',
  /** The response did not say where the query ran */
  'vision.network.region.unknown': 'Nincs jelentve',
  /** In the Network panel: the round trip and the time on the server */
  'vision.network.timing': 'Idő',
  /** The round trip and the server's time for the query, in milliseconds */
  'vision.network.timing.value': '{{e2e}}ms oda-vissza út, {{server}}ms a szerveren',
  /** In the Network panel: the trace of the request, for Sanity support */
  'vision.network.trace': 'Trace ID',
  /** Hint in the Network panel while queries go to the API */
  'vision.network.use-cdn-hint':
    'Kapcsolja be az API CDN használata opciót a Beállításokban, hogy a lekérdezések a CDN-en keresztül menjenek.',
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vision.network.you': 'Ön',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vision.options.dataset.follows-workspace': 'Követi a munkaterületet',
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vision.options.dataset.pin': 'Adatkészlet rögzítése',
  /** Hint under the dataset field while a dataset is pinned */
  'vision.options.dataset.pinned':
    'Rögzítve; előfordulhat, hogy a munkaterület másik adatkészletet használ',
  /** Button that makes the tab follow the workspace's dataset again */
  'vision.options.dataset.use-workspace': 'Munkaterület adatkészletének használata',
  /** Label for the "Include content source map" switch */
  'vision.options.include-source-map': 'Tartalom-forrástérkép belefoglalása',
  /** Description for the "Include content source map" switch */
  'vision.options.include-source-map.description':
    'Hozzáadja a resultSourceMap-et a válaszhoz, amely a Tartalom-forrástérkép fülön jelenik meg.',
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vision.options.perspective.global': 'Globális ({{name}})',
  /** Label of the switch that sends queries to the API CDN */
  'vision.options.use-cdn': 'API CDN használata',
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vision.options.use-cdn.anonymous':
    'Ez a studio egy sütivel jelentkezteti be, amelyet az API CDN soha nem kap meg: úgy válaszol, mintha egy névtelen látogatóval kommunikálna, azzal, amit egy nyilvános adatkészlet mutat.',
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vision.options.use-cdn.blocked':
    'Az API CDN nem szolgál ki vázlatokat vagy kiadásokat, ezért a(z) {{perspective}} nézőponttal végzett lekérdezések az API-hoz mennek. Publikált vagy nyers nézőponttal a CDN-t használják.',
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vision.options.use-cdn.blocked.title': 'A lekérdezések az API-hoz mennek, nem a CDN-hez',
  /** Description of the API CDN switch */
  'vision.options.use-cdn.description':
    'A lekérdezést az API CDN-hez küldi, hasonlóan a useCdn: true beállításhoz a @sanity/client-ben, a publikált és nyers nézőpontokkal: a vázlatok és kiadások mindig az API-hoz mennek. A válaszokat legfeljebb egy percig gyorsítótárazza; a Hálózat panel jelzi, ha egy válasz a gyorsítótárból érkezett.',
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vision.options.use-cdn.use-published': 'Publikált nézőpont használata',
  /** Label of the variant field */
  'vision.options.variant-label': 'Változat',
  /** Variant option sending the navbar's variant, named */
  'vision.options.variant.global': 'Globális ({{name}})',
  /** Variant option sending the navbar's variant while none is selected there */
  'vision.options.variant.global-none': 'Globális (nincs kiválasztva)',
  /** Variant option sending no variant */
  'vision.options.variant.none': 'Nincs',
  /** Accessible label for collapsing a bottom panel */
  'vision.panel.collapse': 'Panel összecsukása',
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vision.panel.delta': 'Delta',
  /** Accessible label for expanding a bottom panel */
  'vision.panel.expand': 'Panel kibontása',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vision.panel.explain': 'Magyarázat',
  /** Label of the Functions tab in the response panel */
  'vision.panel.functions': 'Funkciók',
  /** Label of the "History" tab in the response panel */
  'vision.panel.history': 'Előzmények',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vision.panel.lint': 'Lint',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vision.panel.mutate': 'Módosítás',
  /** Label of the Network tab in the response panel */
  'vision.panel.network': 'Hálózat',
  /** Label of the "Options" panel in the request column */
  'vision.panel.options': 'Beállítások',
  /** Label of the "Response" tab in the response panel */
  'vision.panel.response': 'Válasz',
  /** Label of the "Content Source Map" tab in the response panel */
  'vision.panel.source-map': 'Tartalomforrás-térkép',
  /** Button adding an item to a list param in the params form */
  'vision.params-form.add-item': 'Elem hozzáadása',
  /** Placeholder of a params form field that takes any JSON value */
  'vision.params-form.any-placeholder':
    'Bármilyen JSON érték; egyéb szöveg szövegként kerül elküldésre',
  /** Shown in the params form when the query uses no params */
  'vision.params-form.empty':
    'A lekérdezés nem használ paramétereket. Minden benne lévő $name egy mezőt kap itt.',
  /** Shown in the params form while the params JSON cannot be parsed */
  'vision.params-form.invalid-json':
    'A paraméterek nem érvényes JSON formátumúak. Javítsa őket a JSON nézetben, hogy itt szerkeszthesse őket.',
  /** A boolean param's value is not true or false; it is sent anyway */
  'vision.params-form.invalid.boolean': 'Nem igaz vagy hamis; {{value}} értékként elküldve',
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vision.params-form.invalid.document-type':
    'Nem dokumentumtípus ebben a munkaterületen; mindenképpen elküldve',
  /** A whole number param (a slice bound) holds a fraction */
  'vision.params-form.invalid.integer': 'Nem egész szám, amire a szeleteknek szükségük van',
  /** A list param's value is not a list; it is sent anyway */
  'vision.params-form.invalid.list': 'Nem lista; {{value}} értékként elküldve',
  /** A number param's value is not a number; it is sent anyway */
  'vision.params-form.invalid.number': 'Nem szám; szövegként elküldve',
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vision.params-form.invalid.option': 'Nem az ismert értékek egyike; mindenképpen elküldve',
  /** A text param's value is not text; it is sent anyway */
  'vision.params-form.invalid.string': 'Nem szöveg; {{value}} értékként elküldve',
  /** Accessible label of an item input of a list param in the params form */
  'vision.params-form.item-label': '${{name}}, {{index}}. elem',
  /** Placeholder of an item input of a list param in the params form */
  'vision.params-form.item-placeholder': 'Elem',
  /** Under a params form field whose param has no value */
  'vision.params-form.missing': 'Nincs beállítva: a lekérdezés sikertelen, amíg nincs értéke',
  /** Shown in the params form when the workspace schema could not be read */
  'vision.params-form.no-schema':
    'A típusok kizárólag a lekérdezésből származnak: a munkaterület sémáját nem sikerült beolvasni.',
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vision.params-form.not-set': 'Nincs beállítva',
  /** Button setting a date and time param to the current time */
  'vision.params-form.now': 'Most',
  /** Button removing a param the query does not use from the params */
  'vision.params-form.remove': 'Eltávolítás',
  /** Accessible label of the button removing an item from a list param */
  'vision.params-form.remove-item': 'Elem eltávolítása',
  /** Shown in the params form when the query does not parse */
  'vision.params-form.syntax-error':
    'A lekérdezés nem elemezhető, ezért paraméterei típus nélkül vannak felsorolva.',
  /** Type hint of a params form field: any JSON value */
  'vision.params-form.type.any': 'bármilyen JSON érték',
  /** Type hint of a params form field: true or false */
  'vision.params-form.type.boolean': 'igaz vagy hamis',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vision.params-form.type.datetime': 'dátum és idő (ISO 8601)',
  /** Type hint of a params form field: a document ID */
  'vision.params-form.type.document-id': 'dokumentum-azonosító',
  /** Type hint of a params form field: one of the workspace's document types */
  'vision.params-form.type.document-type': 'dokumentumtípus',
  /** Type hint of a params form field: a whole number */
  'vision.params-form.type.integer': 'egész szám',
  /** Type hint of a params form field: a list of values */
  'vision.params-form.type.list': 'lista, mindegyik {{type}}',
  /** Type hint of a params form field: a number */
  'vision.params-form.type.number': 'szám',
  /** Type hint of a params form field: text */
  'vision.params-form.type.string': 'szöveg',
  /** Heading of the params the query does not use, listed in the params form */
  'vision.params-form.unused': 'A lekérdezés nem használja',
  /** Before the expressions that use a param, in the params form */
  'vision.params-form.used-in': 'Használva itt',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vision.params.fit-height': 'A tartalomhoz igazítva, {{height}} pixel',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vision.params.resize':
    'Paraméterek átméretezése: húzással vagy a nyílbillentyűkkel; dupla kattintással vagy Enterrel a tartalomhoz igazítható újra',
  /** Tab showing the params as a form inferred from the query */
  'vision.params.view.form': 'Űrlap',
  /** Tab showing the params as JSON */
  'vision.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vision.params.view.label': 'Paraméterek szerkesztése mint',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vision.paste.parsed': 'Lekérdezés betöltve a beillesztett URL-ből',
  /** Toast shown after a curl command for a query was pasted and loaded into the tab */
  'vision.paste.parsed-curl': 'Lekérdezés betöltve a beillesztett cURL parancsból',
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vision.paste.unavailable-variant':
    'A beillesztett URL a(z) „{{variant}}” változatot használta; válaszd ki a navigációs sávban, hogy ezzel futtathasd a lekérdezést.',
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vision.paste.unknown-dataset':
    'A beillesztett URL-ben szereplő „{{dataset}}” adatkészlet itt nem érhető el, a jelenlegi marad használatban.',
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vision.paste.unsupported-perspective':
    'A beillesztett URL-ben szereplő perspektíva itt nem támogatott, a jelenlegi marad használatban.',
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vision.paste.variants-disabled':
    'A beillesztett URL a(z) „{{variant}}” változatot használta; ebben a munkaterületben a változatok ki vannak kapcsolva, így a lekérdezés anélkül fut le.',
  /** Accessible label for the query actions menu */
  'vision.query.actions': 'Lekérdezési műveletek',
  /** Tooltip when automatic refetching is not available for the API version */
  'vision.query.auto-refetch.unsupported':
    'Az automatikus újralekéréshez v2021-03-25 vagy újabb API-verzió szükséges.',
  /** Toast shown after the query was copied */
  'vision.query.copied': 'Lekérdezés a vágólapra másolva',
  /** Menu item copying the query text */
  'vision.query.copy': 'Lekérdezés másolása',
  /** Menu item opening the export query dialog */
  'vision.query.export': 'Lekérdezés exportálása…',
  /** Menu item reformatting the query */
  'vision.query.prettify': 'Lekérdezés formázása',
  /** Toast shown when the query could not be reformatted */
  'vision.query.prettify.failed': 'Nem sikerült formázni a lekérdezést',
  /** Menu item saving the query to the personal saved queries */
  'vision.query.save': 'Lekérdezés mentése',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vision.query.stop': 'Leállítás',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vision.query.stop.description': 'Lekérdezés leállítása',
  /** Explanation in the settings section about the redesigned experience */
  'vision.redesign.settings.description':
    'Az áttervezett Vision eszközt használja. Ha visszavált, a lapjai és beállításai megmaradnak ebben a böngészőben a következő kipróbáláshoz.',
  /** Title of the settings section about the redesigned experience */
  'vision.redesign.settings.title': 'Áttervezett Vision (béta)',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vision.redesign.switch-to-classic': 'Váltás a klasszikus Vision eszközre',
  /** Toast button that switches to the redesigned tool */
  'vision.redesign.toast.accept': 'Kipróbálom most',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vision.redesign.toast.description':
    'Lekérdezési lapok, élő újralekérés, válaszrészletek és exportálás. Bármikor visszaválthat.',
  /** Toast button that hides the invitation */
  'vision.redesign.toast.dismiss': 'Most nem',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vision.redesign.toast.title': 'Próbálja ki az áttervezett Vision eszközt',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vision.redesign.try': 'Áttervezett verzió kipróbálása',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vision.redesign.try.description':
    'Váltás az áttervezett Vision eszközre (béta). Bármikor visszaválthat az oldalsávjáról.',
  /** Empty state of the response panel before anything was fetched */
  'vision.response.empty': 'Még nem történt lekérdezés',
  /** Label for the payload size in the response tab */
  'vision.response.payload-size': 'Hasznosadat-méret',
  /** Label for the sync tags in the response tab */
  'vision.response.sync-tags': 'Szinkroncímkék',
  /** Shown when the response carried no sync tags */
  'vision.response.sync-tags.none': 'Nincsenek szinkroncímkék a válaszban',
  /** Under the query URL when the request went out as a POST body rather than that URL */
  'vision.response.url.sent-as-post':
    'POST-törzsként elküldve: a lekérdezés és a paraméterek túl hosszúak egy URL-hez, ezért a @sanity/client JSON formátumban küldte el őket. Ennek az URL-nek a beillesztése a Visionbe továbbra is betölti a lekérdezést.',
  /** Accessible label for the result actions menu */
  'vision.result.actions': 'Eredmény műveletei',
  /** Toast shown after the result was copied */
  'vision.result.copied': 'Eredmény a vágólapra másolva',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vision.result.copied-value': '{{path}} másolva',
  /** Menu item and button copying the result as JSON */
  'vision.result.copy': 'Eredmény másolása',
  /** Button next to each property in the result tree, copying its value */
  'vision.result.copy-value': 'Érték másolása',
  /** Empty state of the result view */
  'vision.result.empty': 'Futtasd le a lekérdezést, hogy itt lásd az eredményét',
  /** Button exporting the result as CSV */
  'vision.result.export-csv': 'CSV exportálása',
  /** Button exporting the result as JSON */
  'vision.result.export-json': 'JSON exportálása',
  /** Menu item opening the TypeScript export dialog */
  'vision.result.export-typescript': 'TypeScript exportálása…',
  /** Menu item opening the Zod export dialog */
  'vision.result.export-zod': 'Zod exportálása…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vision.result.graph.collapse': 'Tartalom elrejtése',
  /** Button fitting the whole graph in view */
  'vision.result.graph.fit': 'Illesztés a nézethez',
  /** Accessible label of the graph, saying how to move around in it */
  'vision.result.graph.label':
    'Eredménygráf: húzással mozgathatod, görgetéssel nagyíthatod; fókuszban a nyílbillentyűk mozgatnak, a + és - nagyítanak, a 0 illeszt',
  /** Ends the note on a graph that leaves part of this result out */
  'vision.result.graph.left-out-hint': 'A fa- és JSON-nézet a teljes tartalmat mutatja.',
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vision.result.graph.node-limit': 'Csak az első {{nodes}} objektum és tömb jelenik meg.',
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vision.result.graph.partial': 'Csak az első {{rows}} bejegyzés jelenik meg ennél: {{nodes}}.',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vision.result.graph.partial.node': '{{name}} ({{entries}} bejegyzés)',
  /** Title of the graph node of the result itself */
  'vision.result.graph.root': 'eredmény',
  /** Button zooming into the graph */
  'vision.result.graph.zoom-in': 'Nagyítás',
  /** Button zooming out of the graph */
  'vision.result.graph.zoom-out': 'Kicsinyítés',
  /** Tab showing the result as a graph of its objects and arrays */
  'vision.result.view.graph': 'Gráf',
  /** Tab showing the result as indented JSON text, to select and copy from */
  'vision.result.view.json': 'JSON',
  /** Accessible label of the tabs that switch how the result shows */
  'vision.result.view.label': 'Eredménynézet',
  /** Tab showing the result as a tree to browse */
  'vision.result.view.tree': 'Fa',
  /** Empty state of the saved queries panel */
  'vision.saved.empty':
    'Még nincsenek mentett lekérdezések. Mentsd el az aktuális lekérdezést a + gombbal.',
  /** Empty state of a query list when the search matches nothing */
  'vision.saved.empty-search': 'Nincs a keresésnek megfelelő lekérdezés',
  /** Menu item loading a saved query into the active tab */
  'vision.saved.load-in-current-tab': 'Betöltés az aktuális lapra',
  /** Menu item opening a saved query in a new tab */
  'vision.saved.open-in-new-tab': 'Megnyitás új lapon',
  /** Menu item renaming a saved query */
  'vision.saved.rename': 'Átnevezés',
  /** Accessible label for the button saving the current query */
  'vision.saved.save-current': 'Aktuális lekérdezés mentése',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vision.saved.unavailable-variant':
    'Ez a mentett lekérdezés a(z) „{{variant}}” variánst használta; válaszd ki a navigációs sávban a lekérdezés ezzel történő futtatásához.',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vision.saved.unknown-dataset':
    'A mentett lekérdezés „{{dataset}}” adatkészlete itt nem érhető el, az aktuális megmarad.',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vision.saved.variants-disabled':
    'Ez a mentett lekérdezés a(z) „{{variant}}” variánst használta; ebben a munkaterületben a variánsok ki vannak kapcsolva, így a lekérdezés anélkül fut.',
  /** Button in the settings dialog that clears the stored state */
  'vision.settings.clear-storage': 'Tárhely törlése',
  /** Confirmation button for clearing the storage */
  'vision.settings.clear-storage.confirm': 'Igen, töröljük a tárhelyet',
  /** Explanation of what clearing the storage does */
  'vision.settings.clear-storage.description':
    'Törli a személyes mentett lekérdezéseidet és a függvénykönyvtárat, visszaállítja a nyitott lapokat és ezeket az alapértelmezéseket ebben a böngészőben, majd visszatér a klasszikus Vision eszközhöz. A megosztott lekérdezések megmaradnak.',
  /** Toast shown when the saved queries could not be cleared */
  'vision.settings.clear-storage.error': 'Nem sikerült törölni a mentett lekérdezéseket',
  /** Toast shown after the storage was cleared */
  'vision.settings.clear-storage.success': 'A tárhely törölve',
  /** Explanation at the top of the settings dialog */
  'vision.settings.description':
    'Az új lapok alapértelmezései. A nyitott lapok megtartják saját beállításaikat.',
  /** Explains the setting listing the fields left out of History diffs */
  'vision.settings.history-diff.description':
    'Soronként egy mezőútvonal. Egy útvonal az eredmény bármely mélységén illeszkedik, így a _rev minden benne lévő dokumentum revízióját elrejti. Az egyes diffek ettől még megjeleníthetik őket.',
  /** Button restoring the default fields left out of History diffs */
  'vision.settings.history-diff.reset': 'Visszaállítás alapértelmezésre',
  /** Label of the setting listing the fields left out of History diffs */
  'vision.settings.history-diff.title': 'A History diffekből elrejtett mezők',
  /** Title of the settings dialog */
  'vision.settings.title': 'Beállítások',
  /** Empty state of the shared queries panel */
  'vision.shared.empty':
    'Még nincsenek megosztott lekérdezések. Oszts meg egy mentett lekérdezést, hogy elérhető legyen mindenki számára, aki ezt az adatkészletet használja.',
  /** Shortcut description: close dialogs and menus */
  'vision.shortcuts.close': 'Párbeszédablakok és menük bezárása',
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vision.shortcuts.complete': 'Függvénynév kiegészítése',
  /** Shortcut description: copy the query */
  'vision.shortcuts.copy-query': 'Lekérdezés másolása',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vision.shortcuts.extract-function': 'A kurzornál lévő projekció kiemelése függvénybe',
  /** Shortcut description: run the query */
  'vision.shortcuts.fetch': 'Lekérdezés futtatása',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vision.shortcuts.next-finding': 'Ugrás a következő lint találathoz',
  /** Shortcut description: reformat the query */
  'vision.shortcuts.prettify': 'Lekérdezés formázása',
  /** Title of the keyboard shortcuts dialog */
  'vision.shortcuts.title': 'Billentyűparancsok',
  /** Sidebar toggle: show icons only */
  'vision.sidebar.collapse': 'Oldalsáv összecsukása',
  /** Sidebar toggle: show labels next to the icons */
  'vision.sidebar.expand': 'Oldalsáv kibontása',
  /** Accessible label for the sidebar navigation */
  'vision.sidebar.label': 'Vision oldalsáv',
  /** Sidebar item and drawer title for personal saved queries */
  'vision.sidebar.saved-queries': 'Mentett lekérdezések',
  /** Sidebar item opening the settings dialog */
  'vision.sidebar.settings': 'Beállítások',
  /** Sidebar item and drawer title for shared queries */
  'vision.sidebar.shared-queries': 'Megosztott lekérdezések',
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vision.sidebar.shortcuts': 'Billentyűparancsok',
  /** Empty state of the content source map panel */
  'vision.source-map.empty':
    'Nincs tartalom-forrástérkép a válaszban. Kapcsolja be a „Tartalom-forrástérkép belefoglalása” opciót a Beállítások alatt, majd kérdezze le újra.',
  /** Accessible label of the divider between the result and the response details panel */
  'vision.split.bottom-panel':
    'A válasz részletei panel átméretezése: húzással vagy a nyílbillentyűkkel; a Home és End a határokhoz ugrik, az Enter visszaállítja',
  /** Accessible label of the divider between the request and response panes */
  'vision.split.request-response':
    'A kérés és válasz panelek átméretezése: húzással vagy a nyílbillentyűkkel; a Home és End a határokhoz ugrik, az Enter visszaállítja',
  /** Accessible label for the button closing a query tab */
  'vision.tabs.close-tab': 'Lap bezárása',
  /** Accessible label for the list of query tabs */
  'vision.tabs.label': 'Lekérdezési lapok',
  /** Accessible label for the button opening a new query tab */
  'vision.tabs.new-tab': 'Új lap',
  /** Placeholder of the input renaming a tab */
  'vision.tabs.title-placeholder': 'Lap címe',
  /** Title of a tab whose query is still empty */
  'vision.tabs.untitled': 'Névtelen lekérdezés',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vision.webmcp.check-query': 'GROQ lekérdezés ellenőrzése a Visionben',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vision.webmcp.describe-schema': 'A munkaterület sémájának leírása a Visionben',
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vision.webmcp.explain-query': 'GROQ lekérdezés magyarázata a Visionben',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vision.webmcp.get-state': 'A nyitott Vision lap beolvasása',
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vision.webmcp.open-query': 'GROQ lekérdezés megnyitása a Visionben',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vision.webmcp.preview-mutations': 'Mutációk előnézete a Visionben',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vision.webmcp.run-query': 'GROQ lekérdezés futtatása a Visionben',
})
