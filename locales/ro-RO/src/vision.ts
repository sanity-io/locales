import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Copiați în clipboard',
  /** Label for deleting a query */
  'action.delete': 'Șterge',
  /** Label for editing a query's title */
  'action.edit-title': 'Editează titlul',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Oprire',
  /** Label for setting up a listener */
  'action.listen-execute': 'Ascultă',
  /** Label for query loading table */
  'action.load-queries': 'Încarcă interogările',
  /** Label for loading a query */
  'action.load-query': 'Încarcă interogarea',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Anulează',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Interoghează',
  /** Label for saving a query */
  'action.save-personal-copy': 'Salvează copie personală',
  /** Label for saving a personal query */
  'action.save-personal-query': 'Salvează ca personal',
  /** Label for saving a query */
  'action.save-query': 'Salvează interogarea',
  /** Label for saving a shared query */
  'action.save-shared-query': 'Salvează ca partajat',
  /** Label for unsharing a query */
  'action.unshare': 'Anulează partajarea',
  /** Label for updating a query */
  'action.update': 'Actualizează',

  /** Label for actions user can take */
  'label.actions': 'Acțiuni',
  /** Label for all saved queries */
  'label.all': 'Toate',
  /** Label for saved queries that have been edited */
  'label.edited': 'Editat',
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Nou',
  /** Label for query type "personal" */
  'label.personal': 'Personal',
  /** Label for savedAt date */
  'label.saved-at': 'Salvat la',
  /** Saved queries */
  'label.saved-queries': 'Interogări salvate',
  /** Search queries */
  'label.search-queries': 'Caută interogări',
  /** Share query */
  'label.share': 'Partajează',
  /** Label for query type "shared" */
  'label.shared': 'Partajat',
  /** Label for saved query type "team" */
  'label.team': 'Echipă',
  /** Label for untitled query fallback */
  'label.untitled-query': 'Fără titlu',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'Parametrii nu sunt JSON valid',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Parametri',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Coloană',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Linie',
  /** Extra explanation when a 400 is returned for a release perspective on an old API version */
  'query.error.unsupported-release-perspective':
    'Această versiune de API nu acceptă perspective complexe. Utilizați {{apiVersion}} sau o versiune ulterioară.',
  /** Extra explanation when a 400 is returned for a variant on an incompatible API version */
  'query.error.unsupported-variant':
    'Această versiune de API nu acceptă variante de conținut. Utilizați versiunea experimentală de API ({{apiVersion}}).',
  /** Label for "Query" editor/input */
  'query.label': 'Interogare',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'URL interogare',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'End-to-end',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'Execuție',
  /** Label for "Result" explorer/view */
  'result.label': 'Rezultat',
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable': 'Rezultatul nu poate fi codificat ca CSV',
  /** Label for "Save result as" result action */
  'result.save-result-as-format': 'Salvează rezultatul ca <SaveResultButtons/>',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'n/a',

  /** Query already saved error label */
  'save-query.already-saved': 'Interogarea a fost deja salvată',
  /** Save error label */
  'save-query.error': 'Eroare la salvarea interogării',
  /** Save personal copy success label */
  'save-query.personal-copy-success': 'Copie personală salvată',
  /** Warning displayed before sharing a query */
  'save-query.share-warning':
    'Interogările partajate sunt stocate ca documente în dataset-ul dvs. și sunt contorizate în cota dvs. de documente.',
  /** Save shared query success label */
  'save-query.shared-success': 'Interogare partajată salvată',
  /** Save success label */
  'save-query.success': 'Interogarea a fost salvată',
  /** Save unshared query success label */
  'save-query.unshared-success': 'Interogare mutată la personal',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'Versiunea API',
  /** Tooltip shown when the API version selector is locked because a variant is selected */
  'settings.api-version-locked-for-variant':
    'Când este selectată o variantă, versiunea API trebuie să fie vX.',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'Versiunea API personalizată',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Dataset',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'Versiunea API invalidă',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'Altă',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspective',
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    'Perspectiva "<code>previewDrafts</code>" a fost redenumită în "<code>drafts</code>" și este acum învechită. Această schimbare este efectivă pentru toate versiunile cu suport de perspective (>= v2021-03-25).',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Citiți documentația',
  /** Option for selecting default perspective */
  'settings.perspectives.default': 'Fără perspectivă (implicit API)',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Perspectivele permit interogarea diferitelor "vederi" ale conținutului din dataset-ul dvs.',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    'Perspectiva implicită se va schimba de la "<code>raw</code>" la "<code>published</code>" într-o versiune viitoare a API-ului. Vă rugăm să consultați documentația pentru mai multe detalii.',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': 'Lansare fixată',
  /** Label for the scheduled drafts perspective */
  'settings.perspectives.scheduled-drafts': 'Schițe programate',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspective',

  /** Tooltip line of every control that calls Sanity Agent Actions, which bills AI credits */
  'vision.agent-actions.credits': 'Folosește un credit AI per cerere',
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vision.ai-credits.balance': 'Au mai rămas {{balance}} din {{quota}} credite AI luna aceasta.',
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vision.ai-credits.deficit':
    '{{used}} credite AI folosite luna aceasta, cu {{deficit}} mai mult decât cele {{quota}} incluse.',
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vision.ai-credits.limit.description':
    'Organizația dvs. a folosit {{used}} din cele {{quota}} credite AI luna aceasta, așa că Sanity Agent Actions sunt întrerupte până luna viitoare sau până la creșterea limitei de cheltuieli.',
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vision.ai-credits.limit.description-unknown':
    'Organizația dvs. a atins limita de cheltuieli pentru credite AI, așa că Sanity Agent Actions sunt întrerupte până luna viitoare sau până la creșterea limitei.',
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vision.ai-credits.limit.learn-more': 'Cum funcționează creditele AI',
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vision.ai-credits.limit.manage': 'Gestionează creditele AI',
  /** Title of the card shown where the organization is out of AI credits */
  'vision.ai-credits.limit.title': 'Fără credite AI',
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vision.ai-credits.usage': 'Utilizare AI',
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vision.ai-credits.used': '{{used}} credite AI folosite luna aceasta.',
  /** Button in the request column's action bar naming the API version requests go out with */
  'vision.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vision.api-version.button-cdn': 'API CDN {{version}}',
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vision.api-version.button-invalid': 'Versiune API neterminată',
  /** Tooltip of the API version button */
  'vision.api-version.tooltip':
    'Interogările rulează pe versiunea API {{version}}. Selectați pentru a o schimba în Opțiuni.',
  /** Tooltip of the API version button while queries go through the API CDN */
  'vision.api-version.tooltip-cdn':
    'Interogările rulează pe API CDN cu versiunea API {{version}}. Selectați pentru a o schimba în Opțiuni.',
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vision.api-version.tooltip-cdn-blocked':
    'Interogările rulează pe API cu versiunea {{version}}, nu pe API CDN: acesta nu servește perspectiva {{perspective}}. Selectați pentru a o schimba în Opțiuni.',
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vision.api-version.tooltip-invalid':
    'Versiunea API din Opțiuni este neterminată, așa că nu se poate prelua nimic până nu este completă.',
  /** Tooltip of the API version button while a selected variant forces the variants API version */
  'vision.api-version.tooltip-locked':
    'Interogările rulează pe versiunea API {{version}}, de care are nevoie varianta selectată.',
  /** Label of the document after the change in the Delta panel */
  'vision.delta.after': 'După',
  /** Label of the document before the change in the Delta panel */
  'vision.delta.before': 'Înainte',
  /** What the Delta panel does */
  'vision.delta.description':
    'Rulează interogarea în modul delta, așa cum fac webhook-urile, ascultătorii și Sanity Functions bazate pe GROQ: before() și after() reprezintă documentul înainte și după o modificare, @ este documentul după modificare, iar delta::changedAny() le compară. Rulează în browser cu groq-js. O parte goală înseamnă că nu există document: modificarea îl creează sau îl șterge.',
  /** Label of the document ID field in the Delta panel */
  'vision.delta.document-id': 'ID document',
  /** Shown when there is a query but no documents to compare */
  'vision.delta.empty':
    'Încărcați istoricul unui document sau scrieți documentele în Înainte și După.',
  /** Shown when the query fails in delta mode */
  'vision.delta.failed': 'Interogarea nu a putut fi rulată în modul delta: {{message}}',
  /** Shown when the After document is not valid JSON */
  'vision.delta.invalid-after': 'După nu este JSON valid: {{message}}',
  /** Shown when the Before document is not valid JSON */
  'vision.delta.invalid-before': 'Before nu este JSON valid: {{message}}',
  /** Button loading the document's revisions from the History API */
  'vision.delta.load': 'Încarcă istoricul',
  /** Shown when the history could not be loaded */
  'vision.delta.load-failed': 'Istoricul nu a putut fi încărcat: {{message}}',
  /** A delta filter that is true for the change */
  'vision.delta.matches':
    'Se potrivește: un webhook sau o funcție cu acest filtru rulează pentru această modificare.',
  /** A delta filter that is false for the change */
  'vision.delta.no-match':
    'Nu se potrivește: un webhook sau o funcție cu acest filtru nu rulează pentru această modificare.',
  /** Shown while the query or its params cannot be sent */
  'vision.delta.no-request':
    'Corectează interogarea și parametrii acesteia pentru a o rula în modul delta.',
  /** Heading of the delta result */
  'vision.delta.result': 'Rezultat',
  /** The After choice for a change that deletes the document */
  'vision.delta.revision.none-after': 'Nimic: modificarea șterge documentul',
  /** The Before choice for a change that creates the document */
  'vision.delta.revision.none-before': 'Nimic: modificarea creează documentul',
  /** A revision in the Before and After lists */
  'vision.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vision.drawer.close': 'Închide panoul',
  /** Explanation at the top of the Explain panel */
  'vision.explain.description':
    'Planul interogării este modul în care Content Lake execută interogarea: ce citește, filtrează și sortează pe parcursul citirii și ce rămâne pentru pașii ulteriori. Explică-mi asta folosește Sanity Agent Actions pentru a descrie interogarea și planul acesteia în cuvinte simple, ceea ce folosește un credit AI.',
  /** Shown in the Explain panel while there is no valid query to explain */
  'vision.explain.empty': 'Scrie o interogare pentru a o explica.',
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vision.explain.explain': 'Explică-mi asta',
  /** Shown when the explanation could not be written */
  'vision.explain.failed': 'Interogarea nu a putut fi explicată: {{message}}',
  /** A count the index computes without reading the documents */
  'vision.explain.insight.aggregate': 'Numărat în index, fără a citi documentele.',
  /** A subquery the plan runs once for all documents */
  'vision.explain.insight.batched-subquery':
    'Subinterogarea rulează o singură dată pentru toate documentele, într-o singură preluare grupată, nu câte una pentru fiecare document.',
  /** Part of the filter runs in memory; the expression follows */
  'vision.explain.insight.filter-in-memory':
    'O parte din filtru rulează în memorie, după citire: fiecare document pe care indexul îl lasă să treacă este citit mai întâi, ceea ce devine lent pe seturi mari de date. Join-urile (->) și funcțiile dintr-un filtru nu pot folosi indexul.',
  /** The index sorts and limits while reading */
  'vision.explain.insight.index-sort-limit':
    'Indexul sortează și limitează documentele pe parcursul citirii lor.',
  /** The plan slices in memory */
  'vision.explain.insight.slice-in-memory':
    'Felia este luată în memorie după citire, nu ca o limită aplicată pe parcursul citirii.',
  /** The plan sorts in memory */
  'vision.explain.insight.sort-in-memory':
    'Sortarea are loc în memorie, după citirea fiecărei potriviri. Sortează după atribute pe care indexul le poate sorta.',
  /** Link under the plan insights to the guide on fast queries */
  'vision.explain.insights.guide': 'GROQ de înaltă performanță',
  /** Heading of the plan insights in the Explain panel */
  'vision.explain.insights.title': 'Ce iese în evidență',
  /** Button in the Explain panel fetching the query plan */
  'vision.explain.plan': 'Arată planul interogării',
  /** Shown when the query plan could not be fetched */
  'vision.explain.plan-failed': 'Planul interogării nu a putut fi preluat: {{message}}',
  /** Heading of the query plan in the Explain panel */
  'vision.explain.plan-title': 'Plan de interogare',
  /** Toast shown after a code snippet was copied */
  'vision.export-query.copied': 'Fragment copiat în clipboard',
  /** Label for the button that copies a code snippet */
  'vision.export-query.copy': 'Copiază fragmentul',
  /** Explanation at the top of the export query dialog */
  'vision.export-query.description':
    'Rulează această interogare în afara studio-ului cu unul dintre aceste fragmente.',
  /** Note under the curl snippet when the query is sent as a request body rather than in the URL */
  'vision.export-query.post-body-note':
    'Interogarea și parametrii ajung la {{size}} caractere ca parametri de căutare; de la {{limit}} în sus, @sanity/client îi trimite ca un corp JSON în loc de URL, astfel că fragmentul face același lucru.',
  /** Title of the dialog that exports the query as code snippets */
  'vision.export-query.title': 'Exportă interogarea',
  /** Note about authentication in the export query dialog */
  'vision.export-query.token-note':
    'Seturile de date private au nevoie de un token API. Seturile de date publice pot renunța la antetul Authorization.',
  /** Toast shown after the generated code was copied */
  'vision.export-types.copied': 'Cod copiat în clipboard',
  /** Label for the button that copies the generated code */
  'vision.export-types.copy': 'Copiază codul',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vision.export-types.empty':
    'Preluați mai întâi interogarea, astfel încât să existe un rezultat din care să se poată deriva tipurile.',
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vision.export-types.schema-error': 'Evaluarea schemei a eșuat: {{message}}',
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vision.export-types.source.result':
    'Dedus din rezultatul preluat, deoarece interogarea nu a putut fi evaluată în raport cu schema spațiului de lucru.',
  /** Note shown when the types were derived from the workspace schema */
  'vision.export-types.source.schema':
    'Dedus din schema spațiului de lucru, în același mod în care o face sanity typegen.',
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vision.export-types.stale-result':
    'Rezultatul afișat a fost preluat pentru o altă interogare sau alți parametri. Preluați mai întâi interogarea curentă, astfel încât să existe un rezultat din care să se poată deriva tipurile.',
  /** Title of the dialog exporting TypeScript types for the result */
  'vision.export-types.title-typescript': 'Exportă TypeScript',
  /** Title of the dialog exporting a Zod schema for the result */
  'vision.export-types.title-zod': 'Exportă Zod',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vision.functions.add': 'Adaugă la interogare',
  /** Shown on a library function the query declares the same way */
  'vision.functions.declared': 'În această interogare',
  /** Lint action on a call of a library function the query does not declare */
  'vision.functions.editor.add-from-library': 'Declară',
  /** Note in a function's hover documentation: the API version it needs */
  'vision.functions.editor.api-version': 'Necesită versiunea API {{version}} sau una mai recentă',
  /** Detail of a completion for a custom function the query declares */
  'vision.functions.editor.completion-declared': 'în această interogare',
  /** Detail of a completion for a library function, which declares it too */
  'vision.functions.editor.completion-library': 'din biblioteca ta',
  /** Note in the hover documentation of a custom function the query declares */
  'vision.functions.editor.declared-on': 'Funcție personalizată, declarată la linia {{line}}',
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vision.functions.editor.delta-only':
    'Funcționează doar în modul delta, unde webhook-urile și Sanity Functions își rulează filtrele',
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vision.functions.editor.extract': 'Extrage într-o funcție',
  /** Note in the hover documentation of a library function the query does not declare */
  'vision.functions.editor.in-library':
    'În biblioteca dvs. de funcții, nedeclarată în această interogare',
  /** Link at the end of a built-in function's hover documentation */
  'vision.functions.editor.reference': 'Referință funcții GROQ',
  /** Explanation under the library heading in the Functions panel */
  'vision.functions.library.description':
    'Păstrate în acest browser pentru fiecare dataset al proiectului. Completările oferă aceste funcții, iar lint-ul propune declararea uneia pe care o apelează interogarea.',
  /** Shown in the Functions panel while the library is empty */
  'vision.functions.library.empty':
    'Salvați o funcție pe care o declară interogarea pentru a o utiliza în alte interogări.',
  /** Heading of the functions library in the Functions panel */
  'vision.functions.library.title': 'Bibliotecă',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vision.functions.query.empty':
    'Declarați funcții personalizate la începutul interogării sau poziționați cursorul într-o proiecție, precum author->{name}, și apăsați butonul de extragere de deasupra editorului ({{shortcut}}).',
  /** Heading of the functions the query declares in the Functions panel */
  'vision.functions.query.title': 'În această interogare',
  /** Removes a function from the library */
  'vision.functions.remove': 'Elimină din bibliotecă',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vision.functions.replace': 'Înlocuiește în interogare',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vision.functions.reveal': 'Afișează {{name}} în editor',
  /** Button of a function the query declares that is not in the library yet */
  'vision.functions.save': 'Salvează în bibliotecă',
  /** Shown on a function the query declares the way the library has it */
  'vision.functions.saved': 'Salvat',
  /** Button of a function the query declares differently from the library's version */
  'vision.functions.update': 'Actualizează biblioteca',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vision.generate.button': 'Generează interogare',
  /** Closes the generate query bar */
  'vision.generate.close': 'Închide',
  /** Explanation under the generate query field */
  'vision.generate.description':
    'Acțiunile Sanity Agent scriu codul GROQ pe baza descrierii dvs. și a tipurilor de documente, iar Content Lake verifică fiecare încercare; fiecare încercare folosește un credit AI. Aceasta înlocuiește interogarea din această filă și o rulează; anularea în editor readuce interogarea anterioară.',
  /** Shown when no query could be generated, above the reason */
  'vision.generate.failed': 'Interogarea nu a putut fi generată',
  /** Accessible label of the description field in the generate query bar */
  'vision.generate.label': 'Ce ar trebui să preia interogarea?',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vision.generate.open-anyway': 'Deschide ultima încercare',
  /** Placeholder of the description field in the generate query bar */
  'vision.generate.placeholder':
    'Cei mai recenți 10 autori, ordonați după nume și apoi după prenume',
  /** Shown while the first attempt at a query is written */
  'vision.generate.progress': 'Se scrie interogarea…',
  /** Shown while a rejected attempt is retried */
  'vision.generate.progress-retry':
    'Se corectează interogarea (încercarea {{attempt}} din {{max}})…',
  /** Button generating the query */
  'vision.generate.submit': 'Generează',
  /** Badge on a history entry the API CDN answered */
  'vision.history.cdn': 'API CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vision.history.cdn-cache-hit': 'Potrivire în cache CDN',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vision.history.changed': 'Modificat',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vision.history.changes': 'Modificări',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vision.history.changes-failed': 'Modificările nu au putut fi afișate.',
  /** Button retrying to show the changes of a history entry */
  'vision.history.changes-retry': 'Reîncearcă',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vision.history.compared-with': 'Comparat cu solicitarea de la {{time}}',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vision.history.diff.params': 'Parametri',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vision.history.diff.query': 'Interogare',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vision.history.diff.query-formatting-only': 'S-a modificat doar formatarea',
  /** Label of the diff of the query result in a history entry's changes */
  'vision.history.diff.result': 'Rezultat',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vision.history.diff.url': 'URL-ul solicitării',
  /** Empty state of the history panel */
  'vision.history.empty': 'Nimic preluat încă',
  /** Status label for a failed fetch in the history */
  'vision.history.failed': 'Eșuat',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vision.history.hide-hidden': 'Ascunde-le',
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vision.history.hiding': 'Se ascund {{fields}}',
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vision.history.only-hidden-changed': 'S-au modificat doar câmpurile ascunse',
  /** History reason: a tab opened with a generated query fetched it */
  'vision.history.reason.generated': 'Interogare generată',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vision.history.reason.link': 'Link deschis',
  /** History reason: a live event matched the query's sync tags */
  'vision.history.reason.live': 'Actualizare live',
  /** History reason: the live connection asked every client to refetch */
  'vision.history.reason.live-restart': 'Conexiunea live a fost repornită',
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vision.history.reason.live-start': 'Preluarea live a început',
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vision.history.reason.load': 'Interogare încărcată',
  /** History reason: the fetch button was pressed */
  'vision.history.reason.manual': 'Buton de preluare',
  /** History reason: mutations were applied from the Mutate panel */
  'vision.history.reason.mutation': 'Mutații aplicate',
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vision.history.reason.options': 'Opțiuni modificate',
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vision.history.reason.paste': 'URL lipit',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vision.history.reason.resume': 'Reîncărcarea automată a fost reluată',
  /** History reason: the keyboard shortcut was used */
  'vision.history.reason.shortcut': 'Scurtătură de tastatură',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vision.history.same-result': 'Același rezultat',
  /** Button showing the hidden fields in a history entry's changes */
  'vision.history.show-hidden': 'Afișează-le',
  /** Next to a history entry's changes while the hidden fields are shown */
  'vision.history.showing-hidden': 'Se afișează {{fields}}, ascunse implicit',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vision.history.too-large': 'Prea mare pentru comparare',
  /** A history entry whose result is the same as the previous result */
  'vision.history.unchanged': 'Nicio modificare',
  /** Shown in the Lint panel while the query has no lint findings */
  'vision.lint.empty':
    'Nu există constatări de lint. Problemele pe care linterul GROQ le detectează în interogare sunt listate aici pe măsură ce scrii; selectează una pentru a o evidenția în editor.',
  /** Where a lint finding sits in the query, shown under its message */
  'vision.lint.position': 'Linia {{line}}, coloana {{column}}',
  /** Severity badge of a lint finding */
  'vision.lint.severity.error': 'Eroare',
  /** Severity badge of a lint finding */
  'vision.lint.severity.hint': 'Sugestie',
  /** Severity badge of a lint finding */
  'vision.lint.severity.info': 'Informație',
  /** Severity badge of a lint finding */
  'vision.lint.severity.warning': 'Avertisment',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vision.lint.use-suggestion': 'Folosește {{suggestion}}',
  /** Badge shown while a tab refetches automatically */
  'vision.live.active': 'Live',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vision.live.button': 'Preluare live',
  /** Tooltip of the Live button while automatic refetching is off */
  'vision.live.button.start':
    'Preia, apoi preia din nou de fiecare dată când documentele din rezultat se modifică',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vision.live.button.stop':
    'Oprește preluarea atunci când documentele din rezultat se modifică. Preluarea se poate face în continuare la cerere, pentru rezultate pe care nicio modificare de document nu le afectează, precum now()',
  /** Error shown when the live connection breaks */
  'vision.live.error': 'Actualizările live au fost deconectate: {{message}}',
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vision.live.stop': 'Oprește live',
  /** Button in the Mutate panel adding a mutation to the list */
  'vision.mutate.add': 'Adaugă o mutație',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vision.mutate.add.create': 'Creează un document',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vision.mutate.add.delete': 'Șterge un document',
  /** Adds a mutation deleting the documents of the shown result */
  'vision.mutate.add.delete-result': 'Șterge documentele din rezultat',
  /** Adds a mutation patching a document, its ID to fill in */
  'vision.mutate.add.patch': 'Corectează un document',
  /** Adds a mutation patching the documents of the shown result */
  'vision.mutate.add.patch-result': 'Adaugă o corecție (patch) la documentele din rezultat',
  /** Button applying the mutations a dry run showed */
  'vision.mutate.apply': 'Aplică la {{dataset}}',
  /** Heading of the error shown when applying the mutations failed */
  'vision.mutate.apply-failed': 'Mutațiile nu au fost aplicate',
  /** Next to Apply while the mutations as they are have had no dry run */
  'vision.mutate.apply-needs-preview':
    'Aplică trimite ceea ce a arătat o rulare de test: rulează mai întâi una.',
  /** Option giving array items without a _key one */
  'vision.mutate.auto-keys': 'Adaugă o _key elementelor din listă care nu au una',
  /** Under the option giving array items a _key */
  'vision.mutate.auto-keys.description':
    'Studioul are nevoie de una pentru fiecare element din listă pentru a-l putea edita.',
  /** Button showing a document's changes in the dry run */
  'vision.mutate.changes': 'Modificări',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vision.mutate.changes-failed': 'Modificările nu au putut fi afișate.',
  /** Button retrying to show a document's changes */
  'vision.mutate.changes-retry': 'Reîncearcă',
  /** What the Mutate panel does */
  'vision.mutate.description':
    'Scrie mutații așa cum le acceptă API-ul Mutations, într-o listă: create, createOrReplace, createIfNotExists, delete și patch, după ID sau după o interogare GROQ. O rulare de test arată ce ar face acestea cu fiecare document, fără a schimba nimic; Aplică le scrie apoi în dataset într-o singură tranzacție, cu contul tău.',
  /** What the API says went wrong with one of the mutations */
  'vision.mutate.failure-item': 'Mutația {{index}}: {{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vision.mutate.generate.button': 'Generează mutații',
  /** Explanation under the generate mutations field */
  'vision.mutate.generate.description':
    'Acțiunile Sanity Agent scriu mutațiile pe baza descrierii tale, a documentelor din rezultat și a tipurilor lor, iar o rulare de test verifică fiecare încercare; fiecare încercare folosește un credit AI. Acestea înlocuiesc mutațiile de aici, unde anularea le aduce înapoi; nimic nu este scris până nu le aplici.',
  /** Shown when no mutations could be generated, above the reason */
  'vision.mutate.generate.failed': 'Mutațiile nu au putut fi generate',
  /** Accessible label of the description field in the generate mutations bar */
  'vision.mutate.generate.label': 'Ce ar trebui să facă mutațiile?',
  /** Placeholder of the description field in the generate mutations bar */
  'vision.mutate.generate.placeholder': 'Schimbă titlul documentelor din rezultat în foobar',
  /** Shown while the first attempt at the mutations is written */
  'vision.mutate.generate.progress': 'Se scriu mutațiile…',
  /** Shown while an attempt the dry run turned down is retried */
  'vision.mutate.generate.progress-retry':
    'Se corectează mutațiile (încercarea {{attempt}} din {{max}})…',
  /** Under the dry run: the fields the diffs leave out */
  'vision.mutate.hiding': 'Modificările exclud {{fields}}, la fel ca Istoricul.',
  /** Shown when the mutations are not valid JSON */
  'vision.mutate.invalid-json': 'Mutațiile nu reprezintă un JSON valid: {{message}}',
  /** Shown when a mutation does not name exactly one thing to do */
  'vision.mutate.invalid-mutation':
    'Mutația {{index}} are nevoie de exact una dintre create, createOrReplace, createIfNotExists, delete sau patch.',
  /** Label of the mutations editor */
  'vision.mutate.mutations': 'Mutații',
  /** The dry run touched no documents */
  'vision.mutate.no-documents': 'Mutațiile nu afectează niciun document.',
  /** Shown when the JSON is not a list of mutations */
  'vision.mutate.not-a-list':
    'Scrie o listă de mutații, o singură mutație, sau un corp de cerere cu o listă de mutații.',
  /** A document the mutations create */
  'vision.mutate.operation.create': 'Creează',
  /** A document the mutations delete */
  'vision.mutate.operation.delete': 'Șterge',
  /** A document the mutations touch without changing its content */
  'vision.mutate.operation.none': 'Nicio schimbare',
  /** A document the mutations change */
  'vision.mutate.operation.update': 'Actualizează',
  /** Button running the mutations as a dry run */
  'vision.mutate.preview': 'Simulare',
  /** Heading of the error shown when the dry run failed */
  'vision.mutate.preview-failed': 'Simularea a eșuat',
  /** Heading of the dry run's outcome */
  'vision.mutate.preview-heading': 'Simulare',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vision.mutate.stale':
    'Mutațiile, dataset-ul sau opțiunile s-au schimbat după această simulare. Rulați-o din nou pentru a le aplica.',
  /** How many documents the dry run changes and leaves as they are */
  'vision.mutate.summary': 'Modificate: {{changed}} · Neschimbate: {{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vision.network.cache': 'Cache',
  /** The API CDN answered from its cache */
  'vision.network.cache.hit': 'Reușit',
  /** Under the details of a CDN cache hit */
  'vision.network.cache.hit-explained':
    'CDN-ul a răspuns cu un răspuns pe care îl avea salvat în cache, dintr-o locație apropiată de dvs.; interogarea nu a ajuns la API.',
  /** The API CDN answered with a response this session had not seen */
  'vision.network.cache.miss': 'Nereușit, din câte poate spune această sesiune',
  /** The API answered, which caches nothing */
  'vision.network.cache.none': 'Niciunul, API-ul răspunde la fiecare cerere cu conținut nou',
  /** Shown in the Network panel while there is no response */
  'vision.network.empty':
    'Executați interogarea pentru a vedea ce endpoint a răspuns, dacă a fost dintr-un cache și unde a rulat.',
  /** In the Network panel: the endpoint that answered */
  'vision.network.endpoint': 'Răspuns de către',
  /** The live API answered */
  'vision.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vision.network.endpoint.cdn': 'API CDN',
  /** In the Network panel: the HTTP method the query was sent with */
  'vision.network.method': 'Metodă',
  /** The query and its params went in the URL */
  'vision.network.method.get': 'GET, cu interogarea și parametrii în URL',
  /** The query and its params went in the request body */
  'vision.network.method.post': 'POST, cu interogarea și parametrii ca un corp JSON',
  /** Under the method of a POST request: why the query was not sent in the URL */
  'vision.network.method.post-explained':
    'Interogarea și parametrii ajung la {{size}} caractere ca parametri de căutare; de la {{limit}} în sus, @sanity/client îi trimite ca un corp JSON, deoarece API-ul limitează lungimea unui URL. Opțiunile rămân în URL.',
  /** In the Network panel: the region the query ran in */
  'vision.network.region': 'Interogarea a rulat în',
  /** The response did not say where the query ran */
  'vision.network.region.unknown': 'Neraportat',
  /** In the Network panel: the round trip and the time on the server */
  'vision.network.timing': 'Timp',
  /** The round trip and the server's time for the query, in milliseconds */
  'vision.network.timing.value': '{{e2e}}ms dus-întors, {{server}}ms pe server',
  /** In the Network panel: the trace of the request, for Sanity support */
  'vision.network.trace': 'ID urmărire',
  /** Hint in the Network panel while queries go to the API */
  'vision.network.use-cdn-hint':
    'Activează Utilizează CDN-ul API în Opțiuni pentru a trimite interogările prin CDN.',
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vision.network.you': 'Tu',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vision.options.dataset.follows-workspace': 'Urmărește spațiul de lucru',
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vision.options.dataset.pin': 'Fixează un dataset',
  /** Hint under the dataset field while a dataset is pinned */
  'vision.options.dataset.pinned': 'Fixat; spațiul de lucru poate folosi un alt dataset',
  /** Button that makes the tab follow the workspace's dataset again */
  'vision.options.dataset.use-workspace': 'Utilizează dataset-ul spațiului de lucru',
  /** Label for the "Include content source map" switch */
  'vision.options.include-source-map': 'Include harta sursei de conținut',
  /** Description for the "Include content source map" switch */
  'vision.options.include-source-map.description':
    'Adaugă resultSourceMap la răspuns, afișat în fila Harta sursei de conținut.',
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vision.options.perspective.global': 'Global ({{name}})',
  /** Label of the switch that sends queries to the API CDN */
  'vision.options.use-cdn': 'Utilizează CDN-ul API',
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vision.options.use-cdn.anonymous':
    'Acest studio te autentifică printr-un cookie, pe care CDN-ul API nu îl primește niciodată: răspunde așa cum ar face-o pentru un vizitator anonim, cu ceea ce afișează un dataset public.',
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vision.options.use-cdn.blocked':
    'CDN-ul API nu furnizează ciorne sau versiuni, astfel încât interogările cu perspectiva {{perspective}} merg către API. Cu perspectivele publicate sau brute, acestea folosesc CDN-ul.',
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vision.options.use-cdn.blocked.title': 'Interogările merg către API, nu către CDN',
  /** Description of the API CDN switch */
  'vision.options.use-cdn.description':
    'Trimite interogarea către CDN-ul API, similar cu useCdn: true în @sanity/client, cu perspectivele publicate și brute: ciornele și versiunile merg mereu către API. Răspunsurile sale sunt stocate în cache până la un minut; panoul Rețea arată când unul provine din cache.',
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vision.options.use-cdn.use-published': 'Utilizează perspectiva publicată',
  /** Label of the variant field */
  'vision.options.variant-label': 'Variantă',
  /** Variant option sending the navbar's variant, named */
  'vision.options.variant.global': 'Global ({{name}})',
  /** Variant option sending the navbar's variant while none is selected there */
  'vision.options.variant.global-none': 'Global (nicio selecție)',
  /** Variant option sending no variant */
  'vision.options.variant.none': 'Niciuna',
  /** Accessible label for collapsing a bottom panel */
  'vision.panel.collapse': 'Restrânge panoul',
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vision.panel.delta': 'Delta',
  /** Accessible label for expanding a bottom panel */
  'vision.panel.expand': 'Extinde panoul',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vision.panel.explain': 'Explicație',
  /** Label of the Functions tab in the response panel */
  'vision.panel.functions': 'Funcții',
  /** Label of the "History" tab in the response panel */
  'vision.panel.history': 'Istoric',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vision.panel.lint': 'Lint',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vision.panel.mutate': 'Mutare',
  /** Label of the Network tab in the response panel */
  'vision.panel.network': 'Rețea',
  /** Label of the "Options" panel in the request column */
  'vision.panel.options': 'Opțiuni',
  /** Label of the "Response" tab in the response panel */
  'vision.panel.response': 'Răspuns',
  /** Label of the "Content Source Map" tab in the response panel */
  'vision.panel.source-map': 'Hartă sursă de conținut',
  /** Button adding an item to a list param in the params form */
  'vision.params-form.add-item': 'Adaugă element',
  /** Placeholder of a params form field that takes any JSON value */
  'vision.params-form.any-placeholder':
    'Orice valoare JSON; alt text este trimis ca șir de caractere',
  /** Shown in the params form when the query uses no params */
  'vision.params-form.empty':
    'Interogarea nu folosește parametri. Fiecare $name din ea primește un câmp aici.',
  /** Shown in the params form while the params JSON cannot be parsed */
  'vision.params-form.invalid-json':
    'Parametrii nu sunt JSON valid. Corectați-i în vizualizarea JSON pentru a-i edita aici.',
  /** A boolean param's value is not true or false; it is sent anyway */
  'vision.params-form.invalid.boolean': 'Nu este true sau false; trimis ca {{value}}',
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vision.params-form.invalid.document-type':
    'Nu este un tip de document în acest spațiu de lucru; trimis oricum',
  /** A whole number param (a slice bound) holds a fraction */
  'vision.params-form.invalid.integer': 'Nu este un număr întreg, de care au nevoie segmentele',
  /** A list param's value is not a list; it is sent anyway */
  'vision.params-form.invalid.list': 'Nu este o listă; trimis ca {{value}}',
  /** A number param's value is not a number; it is sent anyway */
  'vision.params-form.invalid.number': 'Nu este un număr; trimis ca text',
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vision.params-form.invalid.option': 'Nu este una dintre valorile cunoscute; trimis oricum',
  /** A text param's value is not text; it is sent anyway */
  'vision.params-form.invalid.string': 'Nu este text; trimis ca {{value}}',
  /** Accessible label of an item input of a list param in the params form */
  'vision.params-form.item-label': '${{name}}, element {{index}}',
  /** Placeholder of an item input of a list param in the params form */
  'vision.params-form.item-placeholder': 'Element',
  /** Under a params form field whose param has no value */
  'vision.params-form.missing': 'Nesetat: interogarea eșuează până când primește o valoare',
  /** Shown in the params form when the workspace schema could not be read */
  'vision.params-form.no-schema':
    'Tipurile provin doar din interogare: schema spațiului de lucru nu a putut fi citită.',
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vision.params-form.not-set': 'Nesetat',
  /** Button setting a date and time param to the current time */
  'vision.params-form.now': 'Acum',
  /** Button removing a param the query does not use from the params */
  'vision.params-form.remove': 'Elimină',
  /** Accessible label of the button removing an item from a list param */
  'vision.params-form.remove-item': 'Elimină elementul',
  /** Shown in the params form when the query does not parse */
  'vision.params-form.syntax-error':
    'Interogarea nu poate fi analizată, astfel încât parametrii acesteia sunt listați fără tipuri.',
  /** Type hint of a params form field: any JSON value */
  'vision.params-form.type.any': 'orice valoare JSON',
  /** Type hint of a params form field: true or false */
  'vision.params-form.type.boolean': 'true sau false',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vision.params-form.type.datetime': 'dată și oră (ISO 8601)',
  /** Type hint of a params form field: a document ID */
  'vision.params-form.type.document-id': 'ID document',
  /** Type hint of a params form field: one of the workspace's document types */
  'vision.params-form.type.document-type': 'tip de document',
  /** Type hint of a params form field: a whole number */
  'vision.params-form.type.integer': 'număr întreg',
  /** Type hint of a params form field: a list of values */
  'vision.params-form.type.list': 'listă, fiecare {{type}}',
  /** Type hint of a params form field: a number */
  'vision.params-form.type.number': 'număr',
  /** Type hint of a params form field: text */
  'vision.params-form.type.string': 'text',
  /** Heading of the params the query does not use, listed in the params form */
  'vision.params-form.unused': 'Nefolosit de interogare',
  /** Before the expressions that use a param, in the params form */
  'vision.params-form.used-in': 'Folosit în',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vision.params.fit-height': 'Dimensionat la conținut, {{height}} pixeli',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vision.params.resize':
    'Redimensionează parametrii: trage sau folosește tastele săgeată; dă dublu clic sau apasă Enter pentru a reveni la dimensiunea conținutului',
  /** Tab showing the params as a form inferred from the query */
  'vision.params.view.form': 'Formular',
  /** Tab showing the params as JSON */
  'vision.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vision.params.view.label': 'Editează parametrii ca',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vision.paste.parsed': 'Interogarea a fost încărcată din URL-ul lipit',
  /** Toast shown after a curl command for a query was pasted and loaded into the tab */
  'vision.paste.parsed-curl': 'Interogarea a fost încărcată din comanda cURL lipită',
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vision.paste.unavailable-variant':
    'URL-ul lipit a folosit varianta "{{variant}}"; selectează-o în bara de navigare pentru a rula interogarea cu aceasta.',
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vision.paste.unknown-dataset':
    'Setul de date "{{dataset}}" din URL-ul lipit nu este disponibil aici, se păstrează cel curent.',
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vision.paste.unsupported-perspective':
    'Perspectiva din URL-ul lipit nu este acceptată aici, se păstrează cea curentă.',
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vision.paste.variants-disabled':
    'URL-ul lipit a folosit varianta "{{variant}}"; acest spațiu de lucru are variantele dezactivate, astfel încât interogarea rulează fără aceasta.',
  /** Accessible label for the query actions menu */
  'vision.query.actions': 'Acțiuni interogare',
  /** Tooltip when automatic refetching is not available for the API version */
  'vision.query.auto-refetch.unsupported':
    'Reinterogarea automată necesită versiunea API v2021-03-25 sau ulterioară.',
  /** Toast shown after the query was copied */
  'vision.query.copied': 'Interogare copiată în clipboard',
  /** Menu item copying the query text */
  'vision.query.copy': 'Copiază interogarea',
  /** Menu item opening the export query dialog */
  'vision.query.export': 'Exportă interogarea…',
  /** Menu item reformatting the query */
  'vision.query.prettify': 'Formatează interogarea',
  /** Toast shown when the query could not be reformatted */
  'vision.query.prettify.failed': 'Interogarea nu a putut fi formatată',
  /** Menu item saving the query to the personal saved queries */
  'vision.query.save': 'Salvează interogarea',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vision.query.stop': 'Oprește',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vision.query.stop.description': 'Oprește preluarea',
  /** Explanation in the settings section about the redesigned experience */
  'vision.redesign.settings.description':
    'Folosiți versiunea redesenată a instrumentului Vision. Dacă reveniți la versiunea anterioară, filele și setările dvs. rămân salvate în acest browser pentru data viitoare când o încercați.',
  /** Title of the settings section about the redesigned experience */
  'vision.redesign.settings.title': 'Vision redesenat (beta)',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vision.redesign.switch-to-classic': 'Comută la Vision clasic',
  /** Toast button that switches to the redesigned tool */
  'vision.redesign.toast.accept': 'Încearcă acum',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vision.redesign.toast.description':
    'File de interogare, reinterogare live, detalii ale răspunsurilor și exporturi. Puteți reveni la versiunea anterioară oricând.',
  /** Toast button that hides the invitation */
  'vision.redesign.toast.dismiss': 'Nu acum',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vision.redesign.toast.title': 'Încearcă Vision redesenat',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vision.redesign.try': 'Încearcă redesenarea',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vision.redesign.try.description':
    'Comutați la Vision redesenat, în versiune beta. Puteți reveni oricând la versiunea anterioară din bara laterală a acestuia.',
  /** Empty state of the response panel before anything was fetched */
  'vision.response.empty': 'Nimic preluat încă',
  /** Label for the payload size in the response tab */
  'vision.response.payload-size': 'Dimensiunea încărcăturii',
  /** Label for the sync tags in the response tab */
  'vision.response.sync-tags': 'Etichete de sincronizare',
  /** Shown when the response carried no sync tags */
  'vision.response.sync-tags.none': 'Niciun tag de sincronizare în răspuns',
  /** Under the query URL when the request went out as a POST body rather than that URL */
  'vision.response.url.sent-as-post':
    'Trimis ca un corp POST: interogarea și parametrii sunt prea lungi pentru un URL, așa că @sanity/client i-a trimis ca JSON. Lipirea acestui URL în Vision încarcă totuși interogarea.',
  /** Accessible label for the result actions menu */
  'vision.result.actions': 'Acțiuni asupra rezultatului',
  /** Toast shown after the result was copied */
  'vision.result.copied': 'Rezultat copiat în clipboard',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vision.result.copied-value': '{{path}} copiat',
  /** Menu item and button copying the result as JSON */
  'vision.result.copy': 'Copiază rezultatul',
  /** Button next to each property in the result tree, copying its value */
  'vision.result.copy-value': 'Copiază valoarea',
  /** Empty state of the result view */
  'vision.result.empty': 'Rulează interogarea pentru a vedea rezultatul aici',
  /** Button exporting the result as CSV */
  'vision.result.export-csv': 'Exportă CSV',
  /** Button exporting the result as JSON */
  'vision.result.export-json': 'Exportă JSON',
  /** Menu item opening the TypeScript export dialog */
  'vision.result.export-typescript': 'Exportă TypeScript…',
  /** Menu item opening the Zod export dialog */
  'vision.result.export-zod': 'Exportă Zod…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vision.result.graph.collapse': 'Ascunde ce conține',
  /** Button fitting the whole graph in view */
  'vision.result.graph.fit': 'Încadrează în vizualizare',
  /** Accessible label of the graph, saying how to move around in it */
  'vision.result.graph.label':
    'Graficul rezultatului: trage pentru a deplasa, derulează pentru a mări; când este focalizat, săgețile deplasează, + și - măresc/micșorează, 0 încadrează',
  /** Ends the note on a graph that leaves part of this result out */
  'vision.result.graph.left-out-hint': 'Vizualizările arbore și JSON le afișează pe toate.',
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vision.result.graph.node-limit': 'Sunt desenate doar primele {{nodes}} obiecte și array-uri.',
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vision.result.graph.partial': 'Sunt listate doar primele {{rows}} intrări pentru {{nodes}}.',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vision.result.graph.partial.node': '{{name}} ({{entries}} intrări)',
  /** Title of the graph node of the result itself */
  'vision.result.graph.root': 'rezultat',
  /** Button zooming into the graph */
  'vision.result.graph.zoom-in': 'Mărește',
  /** Button zooming out of the graph */
  'vision.result.graph.zoom-out': 'Micșorează',
  /** Tab showing the result as a graph of its objects and arrays */
  'vision.result.view.graph': 'Grafic',
  /** Tab showing the result as indented JSON text, to select and copy from */
  'vision.result.view.json': 'JSON',
  /** Accessible label of the tabs that switch how the result shows */
  'vision.result.view.label': 'Vizualizare rezultat',
  /** Tab showing the result as a tree to browse */
  'vision.result.view.tree': 'Arbore',
  /** Empty state of the saved queries panel */
  'vision.saved.empty':
    'Nu există încă interogări salvate. Salvează interogarea curentă cu butonul +.',
  /** Empty state of a query list when the search matches nothing */
  'vision.saved.empty-search': 'Nicio interogare nu corespunde căutării tale',
  /** Menu item loading a saved query into the active tab */
  'vision.saved.load-in-current-tab': 'Încarcă în fila curentă',
  /** Menu item opening a saved query in a new tab */
  'vision.saved.open-in-new-tab': 'Deschide într-o filă nouă',
  /** Menu item renaming a saved query */
  'vision.saved.rename': 'Redenumește',
  /** Accessible label for the button saving the current query */
  'vision.saved.save-current': 'Salvează interogarea curentă',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vision.saved.unavailable-variant':
    'Această interogare salvată a folosit varianta „{{variant}}”; selecteaz-o în bara de navigare pentru a rula interogarea cu ea.',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vision.saved.unknown-dataset':
    'Setul de date „{{dataset}}” al acestei interogări salvate nu este disponibil aici, se păstrează cel curent.',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vision.saved.variants-disabled':
    'Această interogare salvată a folosit varianta „{{variant}}”; acest spațiu de lucru are variantele dezactivate, așa că interogarea rulează fără ea.',
  /** Button in the settings dialog that clears the stored state */
  'vision.settings.clear-storage': 'Golește stocarea',
  /** Confirmation button for clearing the storage */
  'vision.settings.clear-storage.confirm': 'Da, golește stocarea',
  /** Explanation of what clearing the storage does */
  'vision.settings.clear-storage.description':
    'Șterge interogările tale salvate personale și biblioteca de funcții, resetează filele deschise și aceste valori implicite din acest browser și revine la instrumentul clasic Vision. Interogările partajate sunt păstrate.',
  /** Toast shown when the saved queries could not be cleared */
  'vision.settings.clear-storage.error': 'Interogările salvate nu au putut fi șterse',
  /** Toast shown after the storage was cleared */
  'vision.settings.clear-storage.success': 'Stocare golită',
  /** Explanation at the top of the settings dialog */
  'vision.settings.description':
    'Valori implicite pentru filele noi. Filele deschise își păstrează propriile opțiuni.',
  /** Explains the setting listing the fields left out of History diffs */
  'vision.settings.history-diff.description':
    'Câte o cale de câmp pe linie. O cale se potrivește la orice adâncime a unui rezultat, astfel încât _rev ascunde revizia fiecărui document din acesta. Fiecare diferență poate totuși să le afișeze.',
  /** Button restoring the default fields left out of History diffs */
  'vision.settings.history-diff.reset': 'Revino la valorile implicite',
  /** Label of the setting listing the fields left out of History diffs */
  'vision.settings.history-diff.title': 'Câmpuri ascunse din diferențele de Istoric',
  /** Title of the settings dialog */
  'vision.settings.title': 'Setări',
  /** Empty state of the shared queries panel */
  'vision.shared.empty':
    'Nu există încă interogări partajate. Partajează o interogare salvată pentru a o face disponibilă tuturor celor care folosesc acest set de date.',
  /** Shortcut description: close dialogs and menus */
  'vision.shortcuts.close': 'Închide ferestrele de dialog și meniurile',
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vision.shortcuts.complete': 'Completează un nume de funcție',
  /** Shortcut description: copy the query */
  'vision.shortcuts.copy-query': 'Copiază interogarea',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vision.shortcuts.extract-function': 'Extrage proiecția de la cursor într-o funcție',
  /** Shortcut description: run the query */
  'vision.shortcuts.fetch': 'Execută interogarea',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vision.shortcuts.next-finding': 'Sari la următoarea constatare de lint',
  /** Shortcut description: reformat the query */
  'vision.shortcuts.prettify': 'Formatează frumos interogarea',
  /** Title of the keyboard shortcuts dialog */
  'vision.shortcuts.title': 'Comenzi rapide de la tastatură',
  /** Sidebar toggle: show icons only */
  'vision.sidebar.collapse': 'Restrânge bara laterală',
  /** Sidebar toggle: show labels next to the icons */
  'vision.sidebar.expand': 'Extinde bara laterală',
  /** Accessible label for the sidebar navigation */
  'vision.sidebar.label': 'Bara laterală Vision',
  /** Sidebar item and drawer title for personal saved queries */
  'vision.sidebar.saved-queries': 'Interogări salvate',
  /** Sidebar item opening the settings dialog */
  'vision.sidebar.settings': 'Setări',
  /** Sidebar item and drawer title for shared queries */
  'vision.sidebar.shared-queries': 'Interogări partajate',
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vision.sidebar.shortcuts': 'Comenzi rapide de la tastatură',
  /** Empty state of the content source map panel */
  'vision.source-map.empty':
    'Nu există nicio hartă a sursei de conținut în răspuns. Activează „Include content source map” din Opțiuni și preia din nou datele.',
  /** Accessible label of the divider between the result and the response details panel */
  'vision.split.bottom-panel':
    'Redimensionează panoul de detalii al răspunsului: trage sau folosește tastele săgeată; Home și End merg la limite, Enter resetează',
  /** Accessible label of the divider between the request and response panes */
  'vision.split.request-response':
    'Redimensionează panourile de cerere și răspuns: trage sau folosește tastele săgeată; Home și End merg la limite, Enter resetează',
  /** Accessible label for the button closing a query tab */
  'vision.tabs.close-tab': 'Închide fila',
  /** Accessible label for the list of query tabs */
  'vision.tabs.label': 'File de interogare',
  /** Accessible label for the button opening a new query tab */
  'vision.tabs.new-tab': 'Filă nouă',
  /** Placeholder of the input renaming a tab */
  'vision.tabs.title-placeholder': 'Titlul filei',
  /** Title of a tab whose query is still empty */
  'vision.tabs.untitled': 'Interogare fără titlu',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vision.webmcp.check-query': 'Verifică o interogare GROQ în Vision',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vision.webmcp.describe-schema': 'Descrie schema în Vision',
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vision.webmcp.explain-query': 'Explică o interogare GROQ în Vision',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vision.webmcp.get-state': 'Citește fila Vision deschisă',
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vision.webmcp.open-query': 'Deschide o interogare GROQ în Vision',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vision.webmcp.preview-mutations': 'Previzualizează mutațiile în Vision',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vision.webmcp.run-query': 'Rulează o interogare GROQ în Vision',
})
