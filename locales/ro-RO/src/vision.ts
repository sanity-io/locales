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
  'vista.agent-actions.credits': 'Folosește un credit AI per solicitare',
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vista.ai-credits.balance': '{{balance}} din {{quota}} credite AI rămase luna aceasta.',
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vista.ai-credits.deficit':
    '{{used}} credite AI folosite luna aceasta, cu {{deficit}} mai mult decât cele {{quota}} incluse.',
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vista.ai-credits.limit.description':
    'Organizația dvs. a folosit {{used}} din cele {{quota}} credite AI luna aceasta, așa că Sanity Agent Actions sunt întrerupte până luna viitoare sau până la creșterea limitei de cheltuieli.',
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vista.ai-credits.limit.description-unknown':
    'Organizația dvs. a atins limita de cheltuieli pentru creditele AI, așa că Sanity Agent Actions sunt întrerupte până luna viitoare sau până la creșterea limitei.',
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vista.ai-credits.limit.learn-more': 'Cum funcționează creditele AI',
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vista.ai-credits.limit.manage': 'Gestionați creditele AI',
  /** Title of the card shown where the organization is out of AI credits */
  'vista.ai-credits.limit.title': 'Fără credite AI',
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vista.ai-credits.usage': 'Utilizare AI',
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vista.ai-credits.used': '{{used}} credite AI folosite luna aceasta.',
  /** Button in the request column's action bar naming the API version requests go out with */
  'vista.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vista.api-version.button-cdn': 'API CDN {{version}}',
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vista.api-version.button-invalid': 'Versiune API neterminată',
  /** Tooltip of the API version button */
  'vista.api-version.tooltip':
    'Interogările rulează pe versiunea API {{version}}. Selectați pentru a o schimba în Opțiuni.',
  /** Tooltip of the API version button while queries go through the API CDN */
  'vista.api-version.tooltip-cdn':
    'Interogările rulează pe API CDN cu versiunea API {{version}}. Selectați pentru a o schimba în Opțiuni.',
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vista.api-version.tooltip-cdn-blocked':
    'Interogările rulează pe API cu versiunea {{version}}, nu pe API CDN: acesta nu deservește perspectiva {{perspective}}. Selectați pentru a o schimba în Opțiuni.',
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vista.api-version.tooltip-invalid':
    'Versiunea API din Opțiuni este neterminată, așa că nu se poate prelua nimic până nu este completă.',
  /** Tooltip of the API version button while a selected variant forces the variants API version */
  'vista.api-version.tooltip-locked':
    'Interogările rulează pe versiunea API {{version}}, de care are nevoie varianta selectată.',
  /** Label of the document after the change in the Delta panel */
  'vista.delta.after': 'După',
  /** Label of the document before the change in the Delta panel */
  'vista.delta.before': 'Înainte',
  /** What the Delta panel does */
  'vista.delta.description':
    'Rulează interogarea în modul delta, așa cum fac webhook-urile, listenerii și Sanity Functions bazate pe GROQ: before() și after() reprezintă documentul înainte și după o modificare, @ este documentul după modificare, iar delta::changedAny() le compară. Rulează în browser cu groq-js. O parte goală înseamnă absența documentului: modificarea îl creează sau îl șterge.',
  /** Label of the document ID field in the Delta panel */
  'vista.delta.document-id': 'ID document',
  /** Shown when there is a query but no documents to compare */
  'vista.delta.empty':
    'Încărcați istoricul unui document sau scrieți documentele în Înainte și După.',
  /** Shown when the query fails in delta mode */
  'vista.delta.failed': 'Interogarea nu a putut fi rulată în modul delta: {{message}}',
  /** Shown when the After document is not valid JSON */
  'vista.delta.invalid-after': 'După nu este un JSON valid: {{message}}',
  /** Shown when the Before document is not valid JSON */
  'vista.delta.invalid-before': 'Before nu este JSON valid: {{message}}',
  /** Button loading the document's revisions from the History API */
  'vista.delta.load': 'Încarcă istoricul',
  /** Shown when the history could not be loaded */
  'vista.delta.load-failed': 'Istoricul nu a putut fi încărcat: {{message}}',
  /** A delta filter that is true for the change */
  'vista.delta.matches':
    'Se potrivește: un webhook sau o funcție cu acest filtru rulează pentru această modificare.',
  /** A delta filter that is false for the change */
  'vista.delta.no-match':
    'Nu se potrivește: un webhook sau o funcție cu acest filtru nu rulează pentru această modificare.',
  /** Shown while the query or its params cannot be sent */
  'vista.delta.no-request':
    'Corectează interogarea și parametrii acesteia pentru a o rula în modul delta.',
  /** Heading of the delta result */
  'vista.delta.result': 'Rezultat',
  /** The After choice for a change that deletes the document */
  'vista.delta.revision.none-after': 'Nimic: modificarea șterge documentul',
  /** The Before choice for a change that creates the document */
  'vista.delta.revision.none-before': 'Nimic: modificarea creează documentul',
  /** A revision in the Before and After lists */
  'vista.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vista.drawer.close': 'Închide panoul',
  /** Explanation at the top of the Explain panel */
  'vista.explain.description':
    'Planul de interogare reprezintă modul în care Content Lake execută interogarea: ce citește, filtrează și sortează pe parcursul citirii și ce rămâne pentru pașii ulteriori. Explain this to me folosește Sanity Agent Actions pentru a descrie interogarea și planul său în cuvinte simple, ceea ce utilizează un credit AI.',
  /** Shown in the Explain panel while there is no valid query to explain */
  'vista.explain.empty': 'Scrie o interogare pentru a o explica.',
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vista.explain.explain': 'Explică-mi asta',
  /** Shown when the explanation could not be written */
  'vista.explain.failed': 'Interogarea nu a putut fi explicată: {{message}}',
  /** A count the index computes without reading the documents */
  'vista.explain.insight.aggregate': 'Numărat în index, fără a citi documentele.',
  /** A subquery the plan runs once for all documents */
  'vista.explain.insight.batched-subquery':
    'Subinterogarea rulează o singură dată pentru toate documentele, într-o singură preluare grupată, nu câte una pentru fiecare document.',
  /** Part of the filter runs in memory; the expression follows */
  'vista.explain.insight.filter-in-memory':
    'O parte din filtru rulează în memorie, după citire: fiecare document lăsat să treacă de index este citit mai întâi, ceea ce devine lent pe seturi mari de date. Join-urile (->) și funcțiile dintr-un filtru nu pot folosi indexul.',
  /** The index sorts and limits while reading */
  'vista.explain.insight.index-sort-limit':
    'Indexul sortează și limitează documentele în timp ce le citește.',
  /** The plan slices in memory */
  'vista.explain.insight.slice-in-memory':
    'Felia este luată în memorie după citire, nu ca o limită aplicată în timpul citirii.',
  /** The plan sorts in memory */
  'vista.explain.insight.sort-in-memory':
    'Sortarea are loc în memorie, după citirea tuturor potrivirilor. Sortează după atribute pe care indexul le poate sorta.',
  /** Link under the plan insights to the guide on fast queries */
  'vista.explain.insights.guide': 'GROQ de înaltă performanță',
  /** Heading of the plan insights in the Explain panel */
  'vista.explain.insights.title': 'Ce iese în evidență',
  /** Button in the Explain panel fetching the query plan */
  'vista.explain.plan': 'Afișează planul de interogare',
  /** Shown when the query plan could not be fetched */
  'vista.explain.plan-failed': 'Planul de interogare nu a putut fi preluat: {{message}}',
  /** Heading of the query plan in the Explain panel */
  'vista.explain.plan-title': 'Plan de interogare',
  /** Toast shown after a code snippet was copied */
  'vista.export-query.copied': 'Fragment de cod copiat în clipboard',
  /** Label for the button that copies a code snippet */
  'vista.export-query.copy': 'Copiază fragmentul',
  /** Explanation at the top of the export query dialog */
  'vista.export-query.description':
    'Rulează această interogare în afara studioului cu unul dintre aceste fragmente de cod.',
  /** Title of the dialog that exports the query as code snippets */
  'vista.export-query.title': 'Exportă interogarea',
  /** Note about authentication in the export query dialog */
  'vista.export-query.token-note':
    'Dataseturile private au nevoie de un token API. Dataseturile publice pot renunța la antetul Authorization.',
  /** Toast shown after the generated code was copied */
  'vista.export-types.copied': 'Cod copiat în clipboard',
  /** Label for the button that copies the generated code */
  'vista.export-types.copy': 'Copiază codul',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vista.export-types.empty':
    'Rulează mai întâi interogarea, astfel încât să existe un rezultat din care să se poată deriva tipurile.',
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vista.export-types.schema-error': 'Evaluarea schemei a eșuat: {{message}}',
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vista.export-types.source.result':
    'Dedus din rezultatul obținut, deoarece interogarea nu a putut fi evaluată în raport cu schema spațiului de lucru.',
  /** Note shown when the types were derived from the workspace schema */
  'vista.export-types.source.schema':
    'Dedus din schema spațiului de lucru, în același mod în care o face sanity typegen.',
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vista.export-types.stale-result':
    'Rezultatul afișat a fost obținut pentru o altă interogare sau alți parametri. Rulează mai întâi interogarea curentă, astfel încât să existe un rezultat din care să se poată deriva tipurile.',
  /** Title of the dialog exporting TypeScript types for the result */
  'vista.export-types.title-typescript': 'Exportă TypeScript',
  /** Title of the dialog exporting a Zod schema for the result */
  'vista.export-types.title-zod': 'Exportă Zod',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vista.functions.add': 'Adaugă la interogare',
  /** Shown on a library function the query declares the same way */
  'vista.functions.declared': 'În această interogare',
  /** Lint action on a call of a library function the query does not declare */
  'vista.functions.editor.add-from-library': 'Declară-o',
  /** Note in a function's hover documentation: the API version it needs */
  'vista.functions.editor.api-version': 'Necesită versiunea API {{version}} sau una mai recentă',
  /** Detail of a completion for a custom function the query declares */
  'vista.functions.editor.completion-declared': 'în această interogare',
  /** Detail of a completion for a library function, which declares it too */
  'vista.functions.editor.completion-library': 'din biblioteca ta',
  /** Note in the hover documentation of a custom function the query declares */
  'vista.functions.editor.declared-on': 'Funcție personalizată, declarată la linia {{line}}',
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vista.functions.editor.delta-only':
    'Funcționează doar în modul delta, unde webhook-urile și Sanity Functions își rulează filtrele',
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vista.functions.editor.extract': 'Extrage în funcție',
  /** Note in the hover documentation of a library function the query does not declare */
  'vista.functions.editor.in-library':
    'În biblioteca ta de funcții, nedeclarată în această interogare',
  /** Link at the end of a built-in function's hover documentation */
  'vista.functions.editor.reference': 'Referință funcții GROQ',
  /** Explanation under the library heading in the Functions panel */
  'vista.functions.library.description':
    'Păstrat în acest browser pentru fiecare dataset al proiectului. Completările oferă aceste funcții, iar lint-ul oferă să declari una din apelurile din query.',
  /** Shown in the Functions panel while the library is empty */
  'vista.functions.library.empty':
    'Salvează o funcție declarată în query pentru a o folosi în alte query-uri.',
  /** Heading of the functions library in the Functions panel */
  'vista.functions.library.title': 'Bibliotecă',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vista.functions.query.empty':
    'Declară funcții personalizate la începutul query-ului sau pune cursorul într-o proiecție, precum author->{name}, și apasă butonul de extragere de deasupra editorului ({{shortcut}}).',
  /** Heading of the functions the query declares in the Functions panel */
  'vista.functions.query.title': 'În acest query',
  /** Removes a function from the library */
  'vista.functions.remove': 'Elimină din bibliotecă',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vista.functions.replace': 'Înlocuiește în query',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vista.functions.reveal': 'Afișează {{name}} în editor',
  /** Button of a function the query declares that is not in the library yet */
  'vista.functions.save': 'Salvează în bibliotecă',
  /** Shown on a function the query declares the way the library has it */
  'vista.functions.saved': 'Salvat',
  /** Button of a function the query declares differently from the library's version */
  'vista.functions.update': 'Actualizează biblioteca',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vista.generate.button': 'Generează query',
  /** Closes the generate query bar */
  'vista.generate.close': 'Închide',
  /** Explanation under the generate query field */
  'vista.generate.description':
    'Sanity Agent Actions scrie GROQ-ul pe baza descrierii tale și a tipurilor de documente, iar Content Lake verifică fiecare încercare; fiecare încercare folosește un credit AI. Înlocuiește query-ul acestui tab și îl rulează; anularea în editor readuce query-ul anterior.',
  /** Shown when no query could be generated, above the reason */
  'vista.generate.failed': 'Query-ul nu a putut fi generat',
  /** Accessible label of the description field in the generate query bar */
  'vista.generate.label': 'Ce ar trebui să preia query-ul?',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vista.generate.open-anyway': 'Deschide ultima încercare',
  /** Placeholder of the description field in the generate query bar */
  'vista.generate.placeholder':
    'Cei mai recenți 10 autori, ordonați după numele de familie și apoi după prenume',
  /** Shown while the first attempt at a query is written */
  'vista.generate.progress': 'Se scrie query-ul…',
  /** Shown while a rejected attempt is retried */
  'vista.generate.progress-retry': 'Se corectează query-ul (încercarea {{attempt}} din {{max}})…',
  /** Button generating the query */
  'vista.generate.submit': 'Generează',
  /** Badge on a history entry the API CDN answered */
  'vista.history.cdn': 'API CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vista.history.cdn-cache-hit': 'CDN cache hit',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vista.history.changed': 'Modificat',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vista.history.changes': 'Modificări',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vista.history.changes-failed': 'Modificările nu au putut fi afișate.',
  /** Button retrying to show the changes of a history entry */
  'vista.history.changes-retry': 'Reîncearcă',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vista.history.compared-with': 'Comparat cu preluarea de la {{time}}',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vista.history.diff.params': 'Parametri',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vista.history.diff.query': 'Interogare',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vista.history.diff.query-formatting-only': 'Doar formatarea s-a schimbat',
  /** Label of the diff of the query result in a history entry's changes */
  'vista.history.diff.result': 'Rezultat',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vista.history.diff.url': 'URL cerere',
  /** Empty state of the history panel */
  'vista.history.empty': 'Nimic preluat încă',
  /** Status label for a failed fetch in the history */
  'vista.history.failed': 'Eșuat',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vista.history.hide-hidden': 'Ascunde-le',
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vista.history.hiding': 'Se ascund {{fields}}',
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vista.history.only-hidden-changed': 'Doar câmpurile ascunse s-au schimbat',
  /** History reason: a tab opened with a generated query fetched it */
  'vista.history.reason.generated': 'Interogare generată',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vista.history.reason.link': 'Link deschis',
  /** History reason: a live event matched the query's sync tags */
  'vista.history.reason.live': 'Actualizare în timp real',
  /** History reason: the live connection asked every client to refetch */
  'vista.history.reason.live-restart': 'Conexiunea live a fost repornită',
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vista.history.reason.live-start': 'Preluarea live a început',
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vista.history.reason.load': 'Interogare încărcată',
  /** History reason: the fetch button was pressed */
  'vista.history.reason.manual': 'Buton de preluare',
  /** History reason: mutations were applied from the Mutate panel */
  'vista.history.reason.mutation': 'Mutații aplicate',
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vista.history.reason.options': 'Opțiuni schimbate',
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vista.history.reason.paste': 'URL lipit',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vista.history.reason.resume': 'Reîncărcarea automată a fost reluată',
  /** History reason: the keyboard shortcut was used */
  'vista.history.reason.shortcut': 'Comandă rapidă de la tastatură',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vista.history.same-result': 'Același rezultat',
  /** Button showing the hidden fields in a history entry's changes */
  'vista.history.show-hidden': 'Afișează-le',
  /** Next to a history entry's changes while the hidden fields are shown */
  'vista.history.showing-hidden': 'Se afișează {{fields}}, ascunse implicit',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vista.history.too-large': 'Prea mare pentru a fi comparat',
  /** A history entry whose result is the same as the previous result */
  'vista.history.unchanged': 'Nicio modificare',
  /** Shown in the Lint panel while the query has no lint findings */
  'vista.lint.empty':
    'Nicio constatare de lint. Problemele detectate de linterul GROQ în interogare sunt listate aici pe măsură ce scrieți; alegeți una pentru a o selecta în editor.',
  /** Where a lint finding sits in the query, shown under its message */
  'vista.lint.position': 'Linia {{line}}, coloana {{column}}',
  /** Severity badge of a lint finding */
  'vista.lint.severity.error': 'Eroare',
  /** Severity badge of a lint finding */
  'vista.lint.severity.hint': 'Sugestie',
  /** Severity badge of a lint finding */
  'vista.lint.severity.info': 'Informație',
  /** Severity badge of a lint finding */
  'vista.lint.severity.warning': 'Avertisment',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vista.lint.use-suggestion': 'Folosește {{suggestion}}',
  /** Badge shown while a tab refetches automatically */
  'vista.live.active': 'Live',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vista.live.button': 'Preluare live',
  /** Tooltip of the Live button while automatic refetching is off */
  'vista.live.button.start':
    'Preia datele, apoi preia-le din nou ori de câte ori documentele din rezultat se schimbă',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vista.live.button.stop':
    'Oprește preluarea atunci când documentele din rezultat se schimbă. Preluarea manuală funcționează în continuare, pentru rezultate pe care nicio modificare de document nu le afectează, precum now()',
  /** Error shown when the live connection breaks */
  'vista.live.error': 'Actualizările live au fost deconectate: {{message}}',
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vista.live.stop': 'Oprește live',
  /** Button in the Mutate panel adding a mutation to the list */
  'vista.mutate.add': 'Adaugă mutație',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vista.mutate.add.create': 'Creează un document',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vista.mutate.add.delete': 'Șterge un document',
  /** Adds a mutation deleting the documents of the shown result */
  'vista.mutate.add.delete-result': 'Șterge documentele din rezultat',
  /** Adds a mutation patching a document, its ID to fill in */
  'vista.mutate.add.patch': 'Corectează un document',
  /** Adds a mutation patching the documents of the shown result */
  'vista.mutate.add.patch-result': 'Corectează documentele din rezultat',
  /** Button applying the mutations a dry run showed */
  'vista.mutate.apply': 'Aplică la {{dataset}}',
  /** Heading of the error shown when applying the mutations failed */
  'vista.mutate.apply-failed': 'Mutațiile nu au fost aplicate',
  /** Next to Apply while the mutations as they are have had no dry run */
  'vista.mutate.apply-needs-preview':
    'Aplică trimite ceea ce a arătat un dry run: rulează mai întâi unul.',
  /** Option giving array items without a _key one */
  'vista.mutate.auto-keys': 'Adaugă o _key elementelor din array care nu au una',
  /** Under the option giving array items a _key */
  'vista.mutate.auto-keys.description':
    'Studioul are nevoie de una pe fiecare element din array pentru a-l edita.',
  /** Button showing a document's changes in the dry run */
  'vista.mutate.changes': 'Modificări',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vista.mutate.changes-failed': 'Modificările nu au putut fi afișate.',
  /** Button retrying to show a document's changes */
  'vista.mutate.changes-retry': 'Reîncearcă',
  /** What the Mutate panel does */
  'vista.mutate.description':
    'Scrie mutațiile așa cum le acceptă Mutations API, într-o listă: create, createOrReplace, createIfNotExists, delete și patch, după ID sau după o interogare GROQ. Un dry run arată ce ar face acestea fiecărui document fără a schimba nimic; Aplică le scrie apoi în dataset într-o singură tranzacție, cu contul tău.',
  /** What the API says went wrong with one of the mutations */
  'vista.mutate.failure-item': 'Mutația {{index}}: {{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vista.mutate.generate.button': 'Generează mutații',
  /** Explanation under the generate mutations field */
  'vista.mutate.generate.description':
    'Sanity Agent Actions scriu mutațiile pe baza descrierii tale, a documentelor din rezultat și a tipurilor lor, iar un dry run verifică fiecare încercare; fiecare încercare folosește un credit AI. Acestea înlocuiesc mutațiile de aici, unde anularea le readuce; nimic nu este scris până nu le aplici.',
  /** Shown when no mutations could be generated, above the reason */
  'vista.mutate.generate.failed': 'Mutațiile nu au putut fi generate',
  /** Accessible label of the description field in the generate mutations bar */
  'vista.mutate.generate.label': 'Ce ar trebui să facă mutațiile?',
  /** Placeholder of the description field in the generate mutations bar */
  'vista.mutate.generate.placeholder': 'Schimbă titlul documentelor din rezultat în foobar',
  /** Shown while the first attempt at the mutations is written */
  'vista.mutate.generate.progress': 'Se scriu mutațiile…',
  /** Shown while an attempt the dry run turned down is retried */
  'vista.mutate.generate.progress-retry':
    'Se corectează mutațiile (încercarea {{attempt}} din {{max}})…',
  /** Under the dry run: the fields the diffs leave out */
  'vista.mutate.hiding': 'Modificările omit {{fields}}, așa cum face Istoricul.',
  /** Shown when the mutations are not valid JSON */
  'vista.mutate.invalid-json': 'Mutațiile nu reprezintă un JSON valid: {{message}}',
  /** Shown when a mutation does not name exactly one thing to do */
  'vista.mutate.invalid-mutation':
    'Mutația {{index}} are nevoie de exact unul dintre create, createOrReplace, createIfNotExists, delete sau patch.',
  /** Label of the mutations editor */
  'vista.mutate.mutations': 'Mutații',
  /** The dry run touched no documents */
  'vista.mutate.no-documents': 'Mutațiile nu afectează niciun document.',
  /** Shown when the JSON is not a list of mutations */
  'vista.mutate.not-a-list':
    'Scrie o listă de mutații, o singură mutație sau un corp de cerere cu o listă de mutații.',
  /** A document the mutations create */
  'vista.mutate.operation.create': 'Creează',
  /** A document the mutations delete */
  'vista.mutate.operation.delete': 'Șterge',
  /** A document the mutations touch without changing its content */
  'vista.mutate.operation.none': 'Nicio modificare',
  /** A document the mutations change */
  'vista.mutate.operation.update': 'Actualizare',
  /** Button running the mutations as a dry run */
  'vista.mutate.preview': 'Simulare',
  /** Heading of the error shown when the dry run failed */
  'vista.mutate.preview-failed': 'Simularea a eșuat',
  /** Heading of the dry run's outcome */
  'vista.mutate.preview-heading': 'Simulare',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vista.mutate.stale':
    'Mutațiile, dataset-ul sau opțiunile s-au schimbat după această simulare. Rulați-o din nou pentru a le aplica.',
  /** How many documents the dry run changes and leaves as they are */
  'vista.mutate.summary': 'Modificate: {{changed}} · Nemodificate: {{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vista.network.cache': 'Cache',
  /** The API CDN answered from its cache */
  'vista.network.cache.hit': 'Potrivire',
  /** Under the details of a CDN cache hit */
  'vista.network.cache.hit-explained':
    'CDN-ul a răspuns cu un răspuns pe care îl avea stocat în cache, dintr-o locație apropiată de dvs.; interogarea nu a ajuns la API.',
  /** The API CDN answered with a response this session had not seen */
  'vista.network.cache.miss': 'Nicio potrivire, din câte poate spune această sesiune',
  /** The API answered, which caches nothing */
  'vista.network.cache.none': 'Niciuna, API-ul răspunde la fiecare cerere cu conținut proaspăt',
  /** Shown in the Network panel while there is no response */
  'vista.network.empty':
    'Preluați interogarea pentru a vedea ce punct final a răspuns, dacă a fost din cache și unde a rulat.',
  /** In the Network panel: the endpoint that answered */
  'vista.network.endpoint': 'Răspuns de către',
  /** The live API answered */
  'vista.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vista.network.endpoint.cdn': 'API CDN',
  /** In the Network panel: the region the query ran in */
  'vista.network.region': 'Interogarea a rulat în',
  /** The response did not say where the query ran */
  'vista.network.region.unknown': 'Neraportat',
  /** In the Network panel: the round trip and the time on the server */
  'vista.network.timing': 'Timp',
  /** The round trip and the server's time for the query, in milliseconds */
  'vista.network.timing.value': '{{e2e}}ms dus-întors, {{server}}ms pe server',
  /** In the Network panel: the trace of the request, for Sanity support */
  'vista.network.trace': 'ID urmărire',
  /** Hint in the Network panel while queries go to the API */
  'vista.network.use-cdn-hint':
    'Activați „Utilizați API CDN” în Opțiuni pentru a trimite interogările prin CDN.',
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vista.network.you': 'Dvs.',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vista.options.dataset.follows-workspace': 'Urmează spațiul de lucru',
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vista.options.dataset.pin': 'Fixați un dataset',
  /** Hint under the dataset field while a dataset is pinned */
  'vista.options.dataset.pinned': 'Fixat; spațiul de lucru poate folosi un alt set de date',
  /** Button that makes the tab follow the workspace's dataset again */
  'vista.options.dataset.use-workspace': 'Folosește setul de date al spațiului de lucru',
  /** Label for the "Include content source map" switch */
  'vista.options.include-source-map': 'Include harta sursă a conținutului',
  /** Description for the "Include content source map" switch */
  'vista.options.include-source-map.description':
    'Adaugă resultSourceMap la răspuns, afișat în fila Hartă sursă a conținutului.',
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vista.options.perspective.global': 'Global ({{name}})',
  /** Label of the switch that sends queries to the API CDN */
  'vista.options.use-cdn': 'Folosește API CDN',
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vista.options.use-cdn.anonymous':
    'Acest studio te autentifică printr-un cookie, pe care API CDN nu îl primește niciodată: răspunde așa cum ar răspunde unui vizitator anonim, cu ceea ce afișează un set de date public.',
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vista.options.use-cdn.blocked':
    'API CDN nu servește ciorne sau versiuni, astfel încât interogările cu perspectiva {{perspective}} merg către API. Cu publicat sau brut folosesc CDN-ul.',
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vista.options.use-cdn.blocked.title': 'Interogările merg către API, nu către CDN',
  /** Description of the API CDN switch */
  'vista.options.use-cdn.description':
    'Trimite interogarea către API CDN, similar cu useCdn: true în @sanity/client, cu perspectivele publicat și brut: ciornele și versiunile merg mereu către API. Răspunsurile sale sunt stocate în cache până la un minut; panoul Rețea arată când unul a provenit din cache.',
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vista.options.use-cdn.use-published': 'Folosește perspectiva publicată',
  /** Label of the variant field */
  'vista.options.variant-label': 'Variantă',
  /** Variant option sending the navbar's variant, named */
  'vista.options.variant.global': 'Global ({{name}})',
  /** Variant option sending the navbar's variant while none is selected there */
  'vista.options.variant.global-none': 'Global (nicio selecție)',
  /** Variant option sending no variant */
  'vista.options.variant.none': 'Niciuna',
  /** Accessible label for collapsing a bottom panel */
  'vista.panel.collapse': 'Restrânge panoul',
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vista.panel.delta': 'Delta',
  /** Accessible label for expanding a bottom panel */
  'vista.panel.expand': 'Extinde panoul',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vista.panel.explain': 'Explică',
  /** Label of the Functions tab in the response panel */
  'vista.panel.functions': 'Funcții',
  /** Label of the "History" tab in the response panel */
  'vista.panel.history': 'Istoric',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vista.panel.lint': 'Lint',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vista.panel.mutate': 'Mutate',
  /** Label of the Network tab in the response panel */
  'vista.panel.network': 'Rețea',
  /** Label of the "Options" panel in the request column */
  'vista.panel.options': 'Opțiuni',
  /** Label of the "Response" tab in the response panel */
  'vista.panel.response': 'Răspuns',
  /** Label of the "Content Source Map" tab in the response panel */
  'vista.panel.source-map': 'Hartă sursă a conținutului',
  /** Button adding an item to a list param in the params form */
  'vista.params-form.add-item': 'Adaugă element',
  /** Placeholder of a params form field that takes any JSON value */
  'vista.params-form.any-placeholder':
    'Orice valoare JSON; alt text este trimis ca șir de caractere',
  /** Shown in the params form when the query uses no params */
  'vista.params-form.empty':
    'Interogarea nu folosește parametri. Fiecare $name din ea primește un câmp aici.',
  /** Shown in the params form while the params JSON cannot be parsed */
  'vista.params-form.invalid-json':
    'Parametrii nu sunt JSON valid. Corectați-i în vizualizarea JSON pentru a-i edita aici.',
  /** A boolean param's value is not true or false; it is sent anyway */
  'vista.params-form.invalid.boolean': 'Nu este adevărat sau fals; trimis ca {{value}}',
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vista.params-form.invalid.document-type':
    'Nu este un tip de document din acest spațiu de lucru; trimis oricum',
  /** A whole number param (a slice bound) holds a fraction */
  'vista.params-form.invalid.integer': 'Nu este un număr întreg, de care au nevoie segmentele',
  /** A list param's value is not a list; it is sent anyway */
  'vista.params-form.invalid.list': 'Nu este o listă; trimis ca {{value}}',
  /** A number param's value is not a number; it is sent anyway */
  'vista.params-form.invalid.number': 'Nu este un număr; trimis ca text',
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vista.params-form.invalid.option': 'Nu este una dintre valorile cunoscute; trimis oricum',
  /** A text param's value is not text; it is sent anyway */
  'vista.params-form.invalid.string': 'Nu este text; trimis ca {{value}}',
  /** Accessible label of an item input of a list param in the params form */
  'vista.params-form.item-label': '${{name}}, elementul {{index}}',
  /** Placeholder of an item input of a list param in the params form */
  'vista.params-form.item-placeholder': 'Element',
  /** Under a params form field whose param has no value */
  'vista.params-form.missing': 'Nesetat: interogarea eșuează până când are o valoare',
  /** Shown in the params form when the workspace schema could not be read */
  'vista.params-form.no-schema':
    'Tipurile provin doar din interogare: schema spațiului de lucru nu a putut fi citită.',
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vista.params-form.not-set': 'Nesetat',
  /** Button setting a date and time param to the current time */
  'vista.params-form.now': 'Acum',
  /** Button removing a param the query does not use from the params */
  'vista.params-form.remove': 'Elimină',
  /** Accessible label of the button removing an item from a list param */
  'vista.params-form.remove-item': 'Elimină elementul',
  /** Shown in the params form when the query does not parse */
  'vista.params-form.syntax-error':
    'Interogarea nu poate fi analizată, astfel încât parametrii ei sunt listați fără tipuri.',
  /** Type hint of a params form field: any JSON value */
  'vista.params-form.type.any': 'orice valoare JSON',
  /** Type hint of a params form field: true or false */
  'vista.params-form.type.boolean': 'adevărat sau fals',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vista.params-form.type.datetime': 'dată și oră (ISO 8601)',
  /** Type hint of a params form field: a document ID */
  'vista.params-form.type.document-id': 'ID document',
  /** Type hint of a params form field: one of the workspace's document types */
  'vista.params-form.type.document-type': 'tip de document',
  /** Type hint of a params form field: a whole number */
  'vista.params-form.type.integer': 'număr întreg',
  /** Type hint of a params form field: a list of values */
  'vista.params-form.type.list': 'listă, fiecare {{type}}',
  /** Type hint of a params form field: a number */
  'vista.params-form.type.number': 'număr',
  /** Type hint of a params form field: text */
  'vista.params-form.type.string': 'text',
  /** Heading of the params the query does not use, listed in the params form */
  'vista.params-form.unused': 'Neutilizat de interogare',
  /** Before the expressions that use a param, in the params form */
  'vista.params-form.used-in': 'Utilizat în',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vista.params.fit-height': 'Dimensionat la conținut, {{height}} pixeli',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vista.params.resize':
    'Redimensionează parametrii: trage sau folosește tastele săgeată; dă dublu clic sau apasă Enter pentru a reveni la dimensiunea conținutului',
  /** Tab showing the params as a form inferred from the query */
  'vista.params.view.form': 'Formular',
  /** Tab showing the params as JSON */
  'vista.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vista.params.view.label': 'Editează parametrii ca',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vista.paste.parsed': 'Interogare încărcată din URL-ul lipit',
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vista.paste.unavailable-variant':
    'URL-ul lipit a folosit varianta „{{variant}}”; selecteaz-o în bara de navigare pentru a rula interogarea cu ea.',
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vista.paste.unknown-dataset':
    'Setul de date „{{dataset}}” din URL-ul lipit nu este disponibil aici, se păstrează cel curent.',
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vista.paste.unsupported-perspective':
    'Perspectiva din URL-ul lipit nu este acceptată aici, se păstrează cea curentă.',
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vista.paste.variants-disabled':
    'URL-ul lipit a folosit varianta „{{variant}}”; acest workspace are variantele dezactivate, așa că interogarea rulează fără ea.',
  /** Accessible label for the query actions menu */
  'vista.query.actions': 'Acțiuni interogare',
  /** Tooltip when automatic refetching is not available for the API version */
  'vista.query.auto-refetch.unsupported':
    'Reîncărcarea automată necesită versiunea API v2021-03-25 sau mai recentă.',
  /** Toast shown after the query was copied */
  'vista.query.copied': 'Interogare copiată în clipboard',
  /** Menu item copying the query text */
  'vista.query.copy': 'Copiază interogarea',
  /** Menu item opening the export query dialog */
  'vista.query.export': 'Exportă interogarea…',
  /** Menu item reformatting the query */
  'vista.query.prettify': 'Formatează interogarea',
  /** Toast shown when the query could not be reformatted */
  'vista.query.prettify.failed': 'Interogarea nu a putut fi formatată',
  /** Menu item saving the query to the personal saved queries */
  'vista.query.save': 'Salvează interogarea',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vista.query.stop': 'Oprește',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vista.query.stop.description': 'Oprește preluarea',
  /** Explanation in the settings section about the redesigned experience */
  'vista.redesign.settings.description':
    'Folosești versiunea redesenată a instrumentului Vision. Revenirea la versiunea clasică păstrează filele și setările tale în acest browser pentru data viitoare când o vei încerca.',
  /** Title of the settings section about the redesigned experience */
  'vista.redesign.settings.title': 'Vision redesenat (beta)',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vista.redesign.switch-to-classic': 'Comută la Vision clasic',
  /** Toast button that switches to the redesigned tool */
  'vista.redesign.toast.accept': 'Încearcă acum',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.description':
    'File de interogări, reîncărcare live, detalii despre răspuns și exporturi. Poți reveni oricând la versiunea anterioară.',
  /** Toast button that hides the invitation */
  'vista.redesign.toast.dismiss': 'Nu acum',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.title': 'Încearcă Vision redesenat',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vista.redesign.try': 'Încearcă noua versiune',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vista.redesign.try.description':
    'Comută la Vision redesenat, în versiune beta. Poți reveni oricând la versiunea anterioară din bara laterală.',
  /** Empty state of the response panel before anything was fetched */
  'vista.response.empty': 'Nimic preluat încă',
  /** Label for the payload size in the response tab */
  'vista.response.payload-size': 'Dimensiunea datelor',
  /** Label for the sync tags in the response tab */
  'vista.response.sync-tags': 'Etichete de sincronizare',
  /** Shown when the response carried no sync tags */
  'vista.response.sync-tags.none': 'Nu există etichete de sincronizare în răspuns',
  /** Accessible label for the result actions menu */
  'vista.result.actions': 'Acțiuni pentru rezultat',
  /** Toast shown after the result was copied */
  'vista.result.copied': 'Rezultatul a fost copiat în clipboard',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vista.result.copied-value': '{{path}} a fost copiat',
  /** Menu item and button copying the result as JSON */
  'vista.result.copy': 'Copiază rezultatul',
  /** Button next to each property in the result tree, copying its value */
  'vista.result.copy-value': 'Copiază valoarea',
  /** Empty state of the result view */
  'vista.result.empty': 'Rulează interogarea pentru a vedea rezultatul aici',
  /** Button exporting the result as CSV */
  'vista.result.export-csv': 'Exportă CSV',
  /** Button exporting the result as JSON */
  'vista.result.export-json': 'Exportă JSON',
  /** Menu item opening the TypeScript export dialog */
  'vista.result.export-typescript': 'Exportă TypeScript…',
  /** Menu item opening the Zod export dialog */
  'vista.result.export-zod': 'Exportă Zod…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vista.result.graph.collapse': 'Ascunde ce conține',
  /** Button fitting the whole graph in view */
  'vista.result.graph.fit': 'Încadrează în vizualizare',
  /** Accessible label of the graph, saying how to move around in it */
  'vista.result.graph.label':
    'Graful rezultatului: trageți pentru a deplasa, derulați pentru a mări/micșora; cât timp este focalizat, tastele săgeată deplasează, + și - măresc/micșorează, 0 încadrează',
  /** Ends the note on a graph that leaves part of this result out */
  'vista.result.graph.left-out-hint': 'Vizualizările arbore și JSON le arată pe toate.',
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vista.result.graph.node-limit': 'Sunt desenate doar primele {{nodes}} obiecte și array-uri.',
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vista.result.graph.partial': 'Sunt listate doar primele {{rows}} intrări pentru {{nodes}}.',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vista.result.graph.partial.node': '{{name}} ({{entries}} intrări)',
  /** Title of the graph node of the result itself */
  'vista.result.graph.root': 'rezultat',
  /** Button zooming into the graph */
  'vista.result.graph.zoom-in': 'Mărește',
  /** Button zooming out of the graph */
  'vista.result.graph.zoom-out': 'Micșorează',
  /** Tab showing the result as a graph of its objects and arrays */
  'vista.result.view.graph': 'Graf',
  /** Tab showing the result as indented JSON text, to select and copy from */
  'vista.result.view.json': 'JSON',
  /** Accessible label of the tabs that switch how the result shows */
  'vista.result.view.label': 'Vizualizare rezultat',
  /** Tab showing the result as a tree to browse */
  'vista.result.view.tree': 'Arbore',
  /** Empty state of the saved queries panel */
  'vista.saved.empty':
    'Nu există încă interogări salvate. Salvați interogarea curentă cu butonul +.',
  /** Empty state of a query list when the search matches nothing */
  'vista.saved.empty-search': 'Nicio interogare nu corespunde căutării dumneavoastră',
  /** Menu item loading a saved query into the active tab */
  'vista.saved.load-in-current-tab': 'Încarcă în fila curentă',
  /** Menu item opening a saved query in a new tab */
  'vista.saved.open-in-new-tab': 'Deschide într-o filă nouă',
  /** Menu item renaming a saved query */
  'vista.saved.rename': 'Redenumește',
  /** Accessible label for the button saving the current query */
  'vista.saved.save-current': 'Salvează interogarea curentă',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vista.saved.unavailable-variant':
    'Această interogare salvată a folosit varianta „{{variant}}”; selectați-o în bara de navigare pentru a rula interogarea cu aceasta.',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vista.saved.unknown-dataset':
    'Setul de date „{{dataset}}” al acestei interogări salvate nu este disponibil aici, se păstrează cel curent.',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vista.saved.variants-disabled':
    'Această interogare salvată a folosit varianta „{{variant}}”; acest spațiu de lucru are variantele dezactivate, așa că interogarea rulează fără aceasta.',
  /** Button in the settings dialog that clears the stored state */
  'vista.settings.clear-storage': 'Golește stocarea',
  /** Confirmation button for clearing the storage */
  'vista.settings.clear-storage.confirm': 'Da, golește spațiul de stocare',
  /** Explanation of what clearing the storage does */
  'vista.settings.clear-storage.description':
    'Șterge interogările salvate personal și biblioteca de funcții, resetează filele deschise și aceste valori implicite din acest browser și revine la instrumentul clasic Vision. Interogările partajate sunt păstrate.',
  /** Toast shown when the saved queries could not be cleared */
  'vista.settings.clear-storage.error': 'Interogările salvate nu au putut fi șterse',
  /** Toast shown after the storage was cleared */
  'vista.settings.clear-storage.success': 'Spațiul de stocare a fost golit',
  /** Explanation at the top of the settings dialog */
  'vista.settings.description':
    'Valori implicite pentru filele noi. Filele deschise își păstrează propriile opțiuni.',
  /** Explains the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.description':
    'Câte o cale de câmp pe linie. O cale se potrivește la orice adâncime a unui rezultat, deci _rev ascunde revizia fiecărui document din acesta. Fiecare diff le poate afișa totuși.',
  /** Button restoring the default fields left out of History diffs */
  'vista.settings.history-diff.reset': 'Revino la valorile implicite',
  /** Label of the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.title': 'Câmpuri ascunse din diferențele de istoric',
  /** Title of the settings dialog */
  'vista.settings.title': 'Setări',
  /** Empty state of the shared queries panel */
  'vista.shared.empty':
    'Nu există încă interogări partajate. Partajează o interogare salvată pentru a o face disponibilă tuturor celor care folosesc acest dataset.',
  /** Shortcut description: close dialogs and menus */
  'vista.shortcuts.close': 'Închide dialogurile și meniurile',
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vista.shortcuts.complete': 'Completează un nume de funcție',
  /** Shortcut description: copy the query */
  'vista.shortcuts.copy-query': 'Copiază interogarea',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vista.shortcuts.extract-function': 'Extrage proiecția de la cursor într-o funcție',
  /** Shortcut description: run the query */
  'vista.shortcuts.fetch': 'Execută interogarea',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vista.shortcuts.next-finding': 'Sari la următorul rezultat de lint',
  /** Shortcut description: reformat the query */
  'vista.shortcuts.prettify': 'Formatează frumos interogarea',
  /** Title of the keyboard shortcuts dialog */
  'vista.shortcuts.title': 'Scurtături de tastatură',
  /** Sidebar toggle: show icons only */
  'vista.sidebar.collapse': 'Restrânge bara laterală',
  /** Sidebar toggle: show labels next to the icons */
  'vista.sidebar.expand': 'Extinde bara laterală',
  /** Accessible label for the sidebar navigation */
  'vista.sidebar.label': 'Bara laterală Vista',
  /** Sidebar item and drawer title for personal saved queries */
  'vista.sidebar.saved-queries': 'Interogări salvate',
  /** Sidebar item opening the settings dialog */
  'vista.sidebar.settings': 'Setări',
  /** Sidebar item and drawer title for shared queries */
  'vista.sidebar.shared-queries': 'Interogări partajate',
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vista.sidebar.shortcuts': 'Scurtături de tastatură',
  /** Empty state of the content source map panel */
  'vista.source-map.empty':
    'Nicio hartă a sursei conținutului în răspuns. Activați „Include content source map” din Opțiuni și reîncercați.',
  /** Accessible label of the divider between the result and the response details panel */
  'vista.split.bottom-panel':
    'Redimensionați panoul cu detaliile răspunsului: trageți sau folosiți tastele săgeată; Home și End merg la limite, Enter resetează',
  /** Accessible label of the divider between the request and response panes */
  'vista.split.request-response':
    'Redimensionați panourile de cerere și răspuns: trageți sau folosiți tastele săgeată; Home și End merg la limite, Enter resetează',
  /** Accessible label for the button closing a query tab */
  'vista.tabs.close-tab': 'Închide fila',
  /** Accessible label for the list of query tabs */
  'vista.tabs.label': 'File de interogare',
  /** Accessible label for the button opening a new query tab */
  'vista.tabs.new-tab': 'Filă nouă',
  /** Placeholder of the input renaming a tab */
  'vista.tabs.title-placeholder': 'Titlul filei',
  /** Title of a tab whose query is still empty */
  'vista.tabs.untitled': 'Interogare fără titlu',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vista.webmcp.check-query': 'Verificați o interogare GROQ în Vision',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vista.webmcp.describe-schema': 'Descrieți schema în Vision',
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vista.webmcp.explain-query': 'Explicați o interogare GROQ în Vision',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vista.webmcp.get-state': 'Citiți fila Vision deschisă',
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vista.webmcp.open-query': 'Deschideți o interogare GROQ în Vision',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vista.webmcp.preview-mutations': 'Previzualizați mutațiile în Vision',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vista.webmcp.run-query': 'Executați o interogare GROQ în Vision',
})
