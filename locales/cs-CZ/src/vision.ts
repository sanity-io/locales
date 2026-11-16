import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Kopírovat do schránky',
  /** Label for deleting a query */
  'action.delete': 'Smazat',
  /** Label for editing a query's title */
  'action.edit-title': 'Upravit název',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Zastavit',
  /** Label for setting up a listener */
  'action.listen-execute': 'Poslouchat',
  /** Label for query loading table */
  'action.load-queries': 'Načíst dotazy',
  /** Label for loading a query */
  'action.load-query': 'Načíst dotaz',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Zrušit',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Načíst',
  /** Label for saving a query */
  'action.save-personal-copy': 'Uložit osobní kopii',
  /** Label for saving a personal query */
  'action.save-personal-query': 'Uložit jako osobní',
  /** Label for saving a query */
  'action.save-query': 'Uložit dotaz',
  /** Label for saving a shared query */
  'action.save-shared-query': 'Uložit jako sdílený',
  /** Label for unsharing a query */
  'action.unshare': 'Zrušit sdílení',
  /** Label for updating a query */
  'action.update': 'Aktualizovat',

  /** Label for actions user can take */
  'label.actions': 'Akce',
  /** Label for all saved queries */
  'label.all': 'Vše',
  /** Label for saved queries that have been edited */
  'label.edited': 'Upraveno',
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Nové',
  /** Label for query type "personal" */
  'label.personal': 'Osobní',
  /** Label for savedAt date */
  'label.saved-at': 'Uloženo v',
  /** Saved queries */
  'label.saved-queries': 'Uložené dotazy',
  /** Search queries */
  'label.search-queries': 'Hledat dotazy',
  /** Share query */
  'label.share': 'Sdílet',
  /** Label for query type "shared" */
  'label.shared': 'Sdílené',
  /** Label for saved query type "team" */
  'label.team': 'Tým',
  /** Label for untitled query fallback */
  'label.untitled-query': 'Bez názvu',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'Parametry nejsou platný JSON',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Parametry',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Sloupec',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Řádek',
  /** Extra explanation when a 400 is returned for a release perspective on an old API version */
  'query.error.unsupported-release-perspective':
    'Tato verze API nepodporuje komplexní perspektivy. Použijte verzi {{apiVersion}} nebo novější.',
  /** Extra explanation when a 400 is returned for a variant on an incompatible API version */
  'query.error.unsupported-variant':
    'Tato verze API nepodporuje varianty obsahu. Použijte experimentální verzi API ({{apiVersion}}).',
  /** Label for "Query" editor/input */
  'query.label': 'Dotaz',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'URL dotazu',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'Celkový čas',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'Doba vykonání',
  /** Label for "Result" explorer/view */
  'result.label': 'Výsledek',
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable': 'Výsledek nelze zakódovat jako CSV',
  /** Label for "Save result as" result action */
  'result.save-result-as-format': 'Uložit výsledek jako <SaveResultButtons/>',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'nepoužitelné',

  /** Query already saved error label */
  'save-query.already-saved': 'Dotaz již byl uložen',
  /** Save error label */
  'save-query.error': 'Chyba při ukládání dotazu',
  /** Save personal copy success label */
  'save-query.personal-copy-success': 'Osobní kopie uložena',
  /** Warning displayed before sharing a query */
  'save-query.share-warning':
    'Sdílené dotazy jsou uloženy jako dokumenty ve vašem dataset a započítávají se do vašeho kvóty dokumentů.',
  /** Save shared query success label */
  'save-query.shared-success': 'Sdílený dotaz uložen',
  /** Save success label */
  'save-query.success': 'Dotaz uložen',
  /** Save unshared query success label */
  'save-query.unshared-success': 'Dotaz přesunut do osobních',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'Verze API',
  /** Tooltip shown when the API version selector is locked because a variant is selected */
  'settings.api-version-locked-for-variant': 'Když je vybrána varianta, verze API musí být vX.',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'Vlastní verze API',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Dataset',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'Neplatná verze API',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'Jiné',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspektiva',
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    'Perspektiva "<code>previewDrafts</code>" byla přejmenována na "<code>drafts</code>" a nyní je zastaralá. Tato změna je účinná pro všechny verze s podporou perspektivy (>= v2021-03-25).',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Číst dokumentaci',
  /** Option for selecting default perspective */
  'settings.perspectives.default': 'Žádná perspektiva (výchozí API)',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Perspektivy umožňují spouštět váš dotaz proti různým "pohledům" na obsah ve vašem datasetu',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    'Výchozí perspektiva se změní z "<code>raw</code>" na "<code>published</code>" v nadcházející verzi API. Pro více informací se prosím poraďte s dokumentací.',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': 'Připnuté vydání',
  /** Label for the scheduled drafts perspective */
  'settings.perspectives.scheduled-drafts': 'Naplánované koncepty',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspektivy',

  /** Tooltip line of every control that calls Sanity Agent Actions, which bills AI credits */
  'vision.agent-actions.credits': 'Využívá jeden AI kredit na požadavek',
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vision.ai-credits.balance': '{{balance}} z {{quota}} AI kreditů zbývá tento měsíc.',
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vision.ai-credits.deficit':
    'Tento měsíc bylo využito {{used}} AI kreditů, o {{deficit}} více, než je zahrnuto v {{quota}}.',
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vision.ai-credits.limit.description':
    'Vaše organizace tento měsíc využila {{used}} z {{quota}} AI kreditů, takže Sanity Agent Actions jsou pozastaveny až do příštího měsíce nebo do zvýšení limitu útraty.',
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vision.ai-credits.limit.description-unknown':
    'Vaše organizace dosáhla svého limitu útraty za AI kredity, takže Sanity Agent Actions jsou pozastaveny až do příštího měsíce nebo do zvýšení limitu.',
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vision.ai-credits.limit.learn-more': 'Jak fungují AI kredity',
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vision.ai-credits.limit.manage': 'Spravovat AI kredity',
  /** Title of the card shown where the organization is out of AI credits */
  'vision.ai-credits.limit.title': 'Došly AI kredity',
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vision.ai-credits.usage': 'Využití AI',
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vision.ai-credits.used': 'Tento měsíc bylo využito {{used}} AI kreditů.',
  /** Button in the request column's action bar naming the API version requests go out with */
  'vision.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vision.api-version.button-cdn': 'API CDN {{version}}',
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vision.api-version.button-invalid': 'Nedokončená verze API',
  /** Tooltip of the API version button */
  'vision.api-version.tooltip':
    'Dotazy běží proti verzi API {{version}}. Výběrem ji změníte v Možnostech.',
  /** Tooltip of the API version button while queries go through the API CDN */
  'vision.api-version.tooltip-cdn':
    'Dotazy běží proti API CDN s verzí API {{version}}. Výběrem ji změníte v Možnostech.',
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vision.api-version.tooltip-cdn-blocked':
    'Dotazy běží proti API s verzí API {{version}}, nikoli proti API CDN: ta neobsluhuje perspektivu {{perspective}}. Výběrem ji změníte v Možnostech.',
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vision.api-version.tooltip-invalid':
    'Verze API v Možnostech není dokončena, takže dokud nebude kompletní, nelze nic načíst.',
  /** Tooltip of the API version button while a selected variant forces the variants API version */
  'vision.api-version.tooltip-locked':
    'Dotazy běží proti verzi API {{version}}, kterou vyžaduje vybraná varianta.',
  /** Label of the document after the change in the Delta panel */
  'vision.delta.after': 'Po',
  /** Label of the document before the change in the Delta panel */
  'vision.delta.before': 'Před',
  /** What the Delta panel does */
  'vision.delta.description':
    'Spustí dotaz v režimu delta, stejně jako to dělají webhooky, posluchači a Sanity Functions poháněné GROQ: before() a after() jsou dokument před a po změně, @ je dokument po změně a delta::changedAny() je porovnává. Běží v prohlížeči pomocí groq-js. Prázdná strana znamená, že dokument neexistuje: změna ho vytváří nebo maže.',
  /** Label of the document ID field in the Delta panel */
  'vision.delta.document-id': 'ID dokumentu',
  /** Shown when there is a query but no documents to compare */
  'vision.delta.empty': 'Načtěte historii dokumentu nebo zapište dokumenty do polí Před a Po.',
  /** Shown when the query fails in delta mode */
  'vision.delta.failed': 'Dotaz nebylo možné spustit v režimu delta: {{message}}',
  /** Shown when the After document is not valid JSON */
  'vision.delta.invalid-after': 'Po není platný JSON: {{message}}',
  /** Shown when the Before document is not valid JSON */
  'vision.delta.invalid-before': 'Před není platný JSON: {{message}}',
  /** Button loading the document's revisions from the History API */
  'vision.delta.load': 'Načíst historii',
  /** Shown when the history could not be loaded */
  'vision.delta.load-failed': 'Historii se nepodařilo načíst: {{message}}',
  /** A delta filter that is true for the change */
  'vision.delta.matches': 'Odpovídá: webhook nebo funkce s tímto filtrem se pro tuto změnu spustí.',
  /** A delta filter that is false for the change */
  'vision.delta.no-match':
    'Neodpovídá: webhook nebo funkce s tímto filtrem se pro tuto změnu nespustí.',
  /** Shown while the query or its params cannot be sent */
  'vision.delta.no-request':
    'Opravte dotaz a jeho parametry, aby jej bylo možné spustit v režimu delta.',
  /** Heading of the delta result */
  'vision.delta.result': 'Výsledek',
  /** The After choice for a change that deletes the document */
  'vision.delta.revision.none-after': 'Nic: změna dokument odstraní',
  /** The Before choice for a change that creates the document */
  'vision.delta.revision.none-before': 'Nic: změna dokument vytvoří',
  /** A revision in the Before and After lists */
  'vision.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vision.drawer.close': 'Zavřít panel',
  /** Explanation at the top of the Explain panel */
  'vision.explain.description':
    'Plán dotazu je způsob, jakým Content Lake dotaz provádí: co čte, filtruje a řadí během čtení a co ponechává na pozdější kroky. Volba Vysvětli mi to využívá Sanity Agent Actions k popisu dotazu a jeho plánu srozumitelnými slovy, což spotřebuje jeden AI kredit.',
  /** Shown in the Explain panel while there is no valid query to explain */
  'vision.explain.empty': 'Napište dotaz, abyste jej mohli vysvětlit.',
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vision.explain.explain': 'Vysvětli mi to',
  /** Shown when the explanation could not be written */
  'vision.explain.failed': 'Dotaz se nepodařilo vysvětlit: {{message}}',
  /** A count the index computes without reading the documents */
  'vision.explain.insight.aggregate': 'Spočítáno v indexu bez čtení dokumentů.',
  /** A subquery the plan runs once for all documents */
  'vision.explain.insight.batched-subquery':
    'Podřízený dotaz se spustí jednou pro všechny dokumenty, v jediném dávkovém načtení, nikoli jednou pro každý dokument.',
  /** Part of the filter runs in memory; the expression follows */
  'vision.explain.insight.filter-in-memory':
    'Část filtru se provádí v paměti, po načtení: každý dokument, který index propustí, je nejprve přečten, což je u velkých datasetů pomalé. Spojení (->) a funkce ve filtru nemohou index využít.',
  /** The index sorts and limits while reading */
  'vision.explain.insight.index-sort-limit':
    'Index při čtení dokumentů zároveň řadí a omezuje jejich počet.',
  /** The plan slices in memory */
  'vision.explain.insight.slice-in-memory':
    'Výřez se provádí v paměti po načtení, nikoli jako omezení během čtení.',
  /** The plan sorts in memory */
  'vision.explain.insight.sort-in-memory':
    'Řazení probíhá v paměti po načtení všech shod. Řaďte podle atributů, podle kterých může index řadit.',
  /** Link under the plan insights to the guide on fast queries */
  'vision.explain.insights.guide': 'Vysoký výkon GROQ',
  /** Heading of the plan insights in the Explain panel */
  'vision.explain.insights.title': 'Co stojí za povšimnutí',
  /** Button in the Explain panel fetching the query plan */
  'vision.explain.plan': 'Zobrazit plán dotazu',
  /** Shown when the query plan could not be fetched */
  'vision.explain.plan-failed': 'Plán dotazu se nepodařilo načíst: {{message}}',
  /** Heading of the query plan in the Explain panel */
  'vision.explain.plan-title': 'Plán dotazu',
  /** Toast shown after a code snippet was copied */
  'vision.export-query.copied': 'Úryvek zkopírován do schránky',
  /** Label for the button that copies a code snippet */
  'vision.export-query.copy': 'Kopírovat úryvek',
  /** Explanation at the top of the export query dialog */
  'vision.export-query.description':
    'Spusťte tento dotaz mimo studio pomocí jednoho z těchto úryvků.',
  /** Note under the curl snippet when the query is sent as a request body rather than in the URL */
  'vision.export-query.post-body-note':
    'Dotaz a parametry mají {{size}} znaků jako parametry vyhledávání; od {{limit}} je @sanity/client odesílá jako JSON tělo požadavku místo v URL, takže úryvek dělá totéž.',
  /** Title of the dialog that exports the query as code snippets */
  'vision.export-query.title': 'Exportovat dotaz',
  /** Note about authentication in the export query dialog */
  'vision.export-query.token-note':
    'Soukromé datasety vyžadují API token. U veřejných datasetů lze hlavičku Authorization vynechat.',
  /** Toast shown after the generated code was copied */
  'vision.export-types.copied': 'Kód zkopírován do schránky',
  /** Label for the button that copies the generated code */
  'vision.export-types.copy': 'Kopírovat kód',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vision.export-types.empty':
    'Nejprve proveďte dotaz, aby byl k dispozici výsledek, ze kterého lze odvodit typy.',
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vision.export-types.schema-error': 'Vyhodnocení schématu selhalo: {{message}}',
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vision.export-types.source.result':
    'Odvozeno z načteného výsledku, protože dotaz nebylo možné vyhodnotit proti schématu pracovního prostoru.',
  /** Note shown when the types were derived from the workspace schema */
  'vision.export-types.source.schema':
    'Odvozeno ze schématu pracovního prostoru, stejným způsobem jako to dělá sanity typegen.',
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vision.export-types.stale-result':
    'Zobrazený výsledek byl načten pro jiný dotaz nebo parametry. Nejprve proveďte aktuální dotaz, aby byl k dispozici výsledek, ze kterého lze odvodit typy.',
  /** Title of the dialog exporting TypeScript types for the result */
  'vision.export-types.title-typescript': 'Exportovat TypeScript',
  /** Title of the dialog exporting a Zod schema for the result */
  'vision.export-types.title-zod': 'Exportovat Zod',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vision.functions.add': 'Přidat do dotazu',
  /** Shown on a library function the query declares the same way */
  'vision.functions.declared': 'V tomto dotazu',
  /** Lint action on a call of a library function the query does not declare */
  'vision.functions.editor.add-from-library': 'Deklarovat ji',
  /** Note in a function's hover documentation: the API version it needs */
  'vision.functions.editor.api-version': 'Vyžaduje API verzi {{version}} nebo novější',
  /** Detail of a completion for a custom function the query declares */
  'vision.functions.editor.completion-declared': 'v tomto dotazu',
  /** Detail of a completion for a library function, which declares it too */
  'vision.functions.editor.completion-library': 'z vaší knihovny',
  /** Note in the hover documentation of a custom function the query declares */
  'vision.functions.editor.declared-on': 'Vlastní funkce, deklarovaná na řádku {{line}}',
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vision.functions.editor.delta-only':
    'Funguje pouze v delta režimu, kde webhooky a Sanity Functions spouštějí své filtry',
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vision.functions.editor.extract': 'Extrahovat do funkce',
  /** Note in the hover documentation of a library function the query does not declare */
  'vision.functions.editor.in-library': 'Ve vaší knihovně funkcí, nedeklarováno v tomto dotazu',
  /** Link at the end of a built-in function's hover documentation */
  'vision.functions.editor.reference': 'Referenční příručka funkcí GROQ',
  /** Explanation under the library heading in the Functions panel */
  'vision.functions.library.description':
    'Uchováno v tomto prohlížeči pro každou datovou sadu projektu. Doplňování nabízí tyto funkce a lint nabízí deklarovat tu, kterou dotaz volá.',
  /** Shown in the Functions panel while the library is empty */
  'vision.functions.library.empty':
    'Uložte funkci, kterou dotaz deklaruje, abyste ji mohli použít v jiných dotazech.',
  /** Heading of the functions library in the Functions panel */
  'vision.functions.library.title': 'Knihovna',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vision.functions.query.empty':
    'Deklarujte vlastní funkce na začátku dotazu, nebo umístěte kurzor do projekce, například author->{name}, a stiskněte tlačítko pro extrakci nad editorem ({{shortcut}}).',
  /** Heading of the functions the query declares in the Functions panel */
  'vision.functions.query.title': 'V tomto dotazu',
  /** Removes a function from the library */
  'vision.functions.remove': 'Odebrat z knihovny',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vision.functions.replace': 'Nahradit v dotazu',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vision.functions.reveal': 'Zobrazit {{name}} v editoru',
  /** Button of a function the query declares that is not in the library yet */
  'vision.functions.save': 'Uložit do knihovny',
  /** Shown on a function the query declares the way the library has it */
  'vision.functions.saved': 'Uloženo',
  /** Button of a function the query declares differently from the library's version */
  'vision.functions.update': 'Aktualizovat knihovnu',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vision.generate.button': 'Generovat dotaz',
  /** Closes the generate query bar */
  'vision.generate.close': 'Zavřít',
  /** Explanation under the generate query field */
  'vision.generate.description':
    'Sanity Agent Actions napíší GROQ na základě vašeho popisu a typů dokumentů a Content Lake zkontroluje každý pokus; každý pokus spotřebuje jeden AI kredit. Nahradí dotaz na této kartě a spustí jej; zpětná akce v editoru vrátí předchozí dotaz.',
  /** Shown when no query could be generated, above the reason */
  'vision.generate.failed': 'Dotaz se nepodařilo vygenerovat',
  /** Accessible label of the description field in the generate query bar */
  'vision.generate.label': 'Co by měl dotaz načíst?',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vision.generate.open-anyway': 'Otevřít poslední pokus',
  /** Placeholder of the description field in the generate query bar */
  'vision.generate.placeholder':
    '10 nejnovějších autorů, seřazených podle příjmení a poté podle jména',
  /** Shown while the first attempt at a query is written */
  'vision.generate.progress': 'Zapisuji dotaz…',
  /** Shown while a rejected attempt is retried */
  'vision.generate.progress-retry': 'Opravuji dotaz (pokus {{attempt}} z {{max}})…',
  /** Button generating the query */
  'vision.generate.submit': 'Generovat',
  /** Badge on a history entry the API CDN answered */
  'vision.history.cdn': 'API CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vision.history.cdn-cache-hit': 'Zásah do mezipaměti CDN',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vision.history.changed': 'Změněno',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vision.history.changes': 'Změny',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vision.history.changes-failed': 'Změny se nepodařilo zobrazit.',
  /** Button retrying to show the changes of a history entry */
  'vision.history.changes-retry': 'Zkusit znovu',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vision.history.compared-with': 'Porovnáno s dotazem z {{time}}',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vision.history.diff.params': 'Parametry',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vision.history.diff.query': 'Dotaz',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vision.history.diff.query-formatting-only': 'Změnilo se pouze formátování',
  /** Label of the diff of the query result in a history entry's changes */
  'vision.history.diff.result': 'Výsledek',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vision.history.diff.url': 'URL požadavku',
  /** Empty state of the history panel */
  'vision.history.empty': 'Zatím nic nenačteno',
  /** Status label for a failed fetch in the history */
  'vision.history.failed': 'Selhalo',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vision.history.hide-hidden': 'Skrýt je',
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vision.history.hiding': 'Skrývá se {{fields}}',
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vision.history.only-hidden-changed': 'Změnila se pouze skrytá pole',
  /** History reason: a tab opened with a generated query fetched it */
  'vision.history.reason.generated': 'Vygenerovaný dotaz',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vision.history.reason.link': 'Otevřený odkaz',
  /** History reason: a live event matched the query's sync tags */
  'vision.history.reason.live': 'Živá aktualizace',
  /** History reason: the live connection asked every client to refetch */
  'vision.history.reason.live-restart': 'Živé připojení restartováno',
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vision.history.reason.live-start': 'Živé načítání spuštěno',
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vision.history.reason.load': 'Dotaz načten',
  /** History reason: the fetch button was pressed */
  'vision.history.reason.manual': 'Tlačítko načtení',
  /** History reason: mutations were applied from the Mutate panel */
  'vision.history.reason.mutation': 'Mutace použity',
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vision.history.reason.options': 'Možnosti změněny',
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vision.history.reason.paste': 'Vložená URL',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vision.history.reason.resume': 'Automatické opětovné načítání obnoveno',
  /** History reason: the keyboard shortcut was used */
  'vision.history.reason.shortcut': 'Klávesová zkratka',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vision.history.same-result': 'Stejný výsledek',
  /** Button showing the hidden fields in a history entry's changes */
  'vision.history.show-hidden': 'Zobrazit je',
  /** Next to a history entry's changes while the hidden fields are shown */
  'vision.history.showing-hidden': 'Zobrazeno {{fields}}, skryto ve výchozím nastavení',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vision.history.too-large': 'Příliš velké na porovnání',
  /** A history entry whose result is the same as the previous result */
  'vision.history.unchanged': 'Žádné změny',
  /** Shown in the Lint panel while the query has no lint findings */
  'vision.lint.empty':
    'Žádná zjištění lintu. Problémy, které GROQ linter v dotazu najde, se zde zobrazují za psaní; vyberte jedno pro jeho označení v editoru.',
  /** Where a lint finding sits in the query, shown under its message */
  'vision.lint.position': 'Řádek {{line}}, sloupec {{column}}',
  /** Severity badge of a lint finding */
  'vision.lint.severity.error': 'Chyba',
  /** Severity badge of a lint finding */
  'vision.lint.severity.hint': 'Rada',
  /** Severity badge of a lint finding */
  'vision.lint.severity.info': 'Info',
  /** Severity badge of a lint finding */
  'vision.lint.severity.warning': 'Varování',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vision.lint.use-suggestion': 'Použít {{suggestion}}',
  /** Badge shown while a tab refetches automatically */
  'vision.live.active': 'Živě',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vision.live.button': 'Živé načítání',
  /** Tooltip of the Live button while automatic refetching is off */
  'vision.live.button.start':
    'Načíst a poté znovu načítat vždy, když se dokumenty ve výsledku změní',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vision.live.button.stop':
    'Zastavit načítání při změně dokumentů ve výsledku. Načítání na vyžádání stále funguje pro výsledky, kterých se žádná změna dokumentu netýká, například now()',
  /** Error shown when the live connection breaks */
  'vision.live.error': 'Živé aktualizace odpojeny: {{message}}',
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vision.live.stop': 'Zastavit živé načítání',
  /** Button in the Mutate panel adding a mutation to the list */
  'vision.mutate.add': 'Přidat mutaci',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vision.mutate.add.create': 'Vytvořit dokument',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vision.mutate.add.delete': 'Smazat dokument',
  /** Adds a mutation deleting the documents of the shown result */
  'vision.mutate.add.delete-result': 'Smazat dokumenty ve výsledku',
  /** Adds a mutation patching a document, its ID to fill in */
  'vision.mutate.add.patch': 'Upravit dokument (patch)',
  /** Adds a mutation patching the documents of the shown result */
  'vision.mutate.add.patch-result': 'Opravit (patch) dokumenty ve výsledku',
  /** Button applying the mutations a dry run showed */
  'vision.mutate.apply': 'Použít na {{dataset}}',
  /** Heading of the error shown when applying the mutations failed */
  'vision.mutate.apply-failed': 'Mutace nebyly použity',
  /** Next to Apply while the mutations as they are have had no dry run */
  'vision.mutate.apply-needs-preview':
    'Použít odešle to, co ukázal zkušební běh: nejprve ho spusťte.',
  /** Option giving array items without a _key one */
  'vision.mutate.auto-keys': 'Přidat _key položkám pole, které žádný nemají',
  /** Under the option giving array items a _key */
  'vision.mutate.auto-keys.description':
    'Studio potřebuje _key u každé položky pole, aby ji mohlo upravovat.',
  /** Button showing a document's changes in the dry run */
  'vision.mutate.changes': 'Změny',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vision.mutate.changes-failed': 'Změny se nepodařilo zobrazit.',
  /** Button retrying to show a document's changes */
  'vision.mutate.changes-retry': 'Zkusit znovu',
  /** What the Mutate panel does */
  'vision.mutate.description':
    'Pište mutace tak, jak je přijímá Mutations API, v seznamu: create, createOrReplace, createIfNotExists, delete a patch, podle ID nebo podle GROQ dotazu. Zkušební běh ukáže, co by udělaly s každým dokumentem, aniž by cokoliv změnil; Použít je poté zapíše do datasetu v jedné transakci, pod vaším účtem.',
  /** What the API says went wrong with one of the mutations */
  'vision.mutate.failure-item': 'Mutace {{index}}: {{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vision.mutate.generate.button': 'Vygenerovat mutace',
  /** Explanation under the generate mutations field */
  'vision.mutate.generate.description':
    'Sanity Agent Actions napíší mutace na základě vašeho popisu, dokumentů ve výsledku a jejich typů, a zkušební běh ověří každý pokus; každý pokus spotřebuje jeden AI kredit. Nahradí mutace zde, kde je lze vrátit zpět tlačítkem Zpět; nic se nezapíše, dokud je nepoužijete.',
  /** Shown when no mutations could be generated, above the reason */
  'vision.mutate.generate.failed': 'Mutace se nepodařilo vygenerovat',
  /** Accessible label of the description field in the generate mutations bar */
  'vision.mutate.generate.label': 'Co by mutace měly udělat?',
  /** Placeholder of the description field in the generate mutations bar */
  'vision.mutate.generate.placeholder': 'Změňte název dokumentů ve výsledku na foobar',
  /** Shown while the first attempt at the mutations is written */
  'vision.mutate.generate.progress': 'Zapisování mutací…',
  /** Shown while an attempt the dry run turned down is retried */
  'vision.mutate.generate.progress-retry': 'Opravování mutací (pokus {{attempt}} z {{max}})…',
  /** Under the dry run: the fields the diffs leave out */
  'vision.mutate.hiding': 'Změny vynechávají {{fields}}, stejně jako Historie.',
  /** Shown when the mutations are not valid JSON */
  'vision.mutate.invalid-json': 'Mutace nejsou platný JSON: {{message}}',
  /** Shown when a mutation does not name exactly one thing to do */
  'vision.mutate.invalid-mutation':
    'Mutace {{index}} potřebuje přesně jednu z možností create, createOrReplace, createIfNotExists, delete nebo patch.',
  /** Label of the mutations editor */
  'vision.mutate.mutations': 'Mutace',
  /** The dry run touched no documents */
  'vision.mutate.no-documents': 'Mutace se netýkají žádných dokumentů.',
  /** Shown when the JSON is not a list of mutations */
  'vision.mutate.not-a-list':
    'Napište seznam mutací, jednu mutaci, nebo tělo požadavku se seznamem mutací.',
  /** A document the mutations create */
  'vision.mutate.operation.create': 'Vytvořit',
  /** A document the mutations delete */
  'vision.mutate.operation.delete': 'Smazat',
  /** A document the mutations touch without changing its content */
  'vision.mutate.operation.none': 'Beze změny',
  /** A document the mutations change */
  'vision.mutate.operation.update': 'Aktualizovat',
  /** Button running the mutations as a dry run */
  'vision.mutate.preview': 'Zkušební běh',
  /** Heading of the error shown when the dry run failed */
  'vision.mutate.preview-failed': 'Zkušební běh selhal',
  /** Heading of the dry run's outcome */
  'vision.mutate.preview-heading': 'Zkušební běh',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vision.mutate.stale':
    'Mutace, dataset nebo možnosti se po tomto zkušebním běhu změnily. Spusťte jej znovu, abyste je použili.',
  /** How many documents the dry run changes and leaves as they are */
  'vision.mutate.summary': 'Změněno: {{changed}} · Beze změny: {{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vision.network.cache': 'Mezipaměť',
  /** The API CDN answered from its cache */
  'vision.network.cache.hit': 'Zásah',
  /** Under the details of a CDN cache hit */
  'vision.network.cache.hit-explained':
    'CDN odpověděla uloženou odpovědí z umístění poblíž vás; dotaz se k API vůbec nedostal.',
  /** The API CDN answered with a response this session had not seen */
  'vision.network.cache.miss': 'Minutí, pokud to toto sezení dokáže posoudit',
  /** The API answered, which caches nothing */
  'vision.network.cache.none': 'Žádná, API odpovídá na každý požadavek čerstvým obsahem',
  /** Shown in the Network panel while there is no response */
  'vision.network.empty':
    'Odešlete dotaz, abyste zjistili, který koncový bod na něj odpověděl, zda z mezipaměti a kde se spustil.',
  /** In the Network panel: the endpoint that answered */
  'vision.network.endpoint': 'Odpověděl',
  /** The live API answered */
  'vision.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vision.network.endpoint.cdn': 'API CDN',
  /** In the Network panel: the HTTP method the query was sent with */
  'vision.network.method': 'Metoda',
  /** The query and its params went in the URL */
  'vision.network.method.get': 'GET, s dotazem a parametry v URL',
  /** The query and its params went in the request body */
  'vision.network.method.post': 'POST, s dotazem a parametry jako JSON tělem',
  /** Under the method of a POST request: why the query was not sent in the URL */
  'vision.network.method.post-explained':
    'Dotaz a parametry mají jako vyhledávací parametry {{size}} znaků; od {{limit}} je @sanity/client odesílá jako JSON tělo, protože API omezuje délku URL. Možnosti zůstávají v URL.',
  /** In the Network panel: the region the query ran in */
  'vision.network.region': 'Dotaz běžel v',
  /** The response did not say where the query ran */
  'vision.network.region.unknown': 'Neuvedeno',
  /** In the Network panel: the round trip and the time on the server */
  'vision.network.timing': 'Čas',
  /** The round trip and the server's time for the query, in milliseconds */
  'vision.network.timing.value': '{{e2e}}ms doba odezvy, {{server}}ms na serveru',
  /** In the Network panel: the trace of the request, for Sanity support */
  'vision.network.trace': 'ID trasování',
  /** Hint in the Network panel while queries go to the API */
  'vision.network.use-cdn-hint':
    'Zapněte Používat API CDN v Možnostech, aby se dotazy odesílaly přes CDN.',
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vision.network.you': 'Vy',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vision.options.dataset.follows-workspace': 'Sleduje pracovní prostor',
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vision.options.dataset.pin': 'Připnout dataset',
  /** Hint under the dataset field while a dataset is pinned */
  'vision.options.dataset.pinned': 'Připnuto; pracovní prostor může používat jiný dataset',
  /** Button that makes the tab follow the workspace's dataset again */
  'vision.options.dataset.use-workspace': 'Použít dataset pracovního prostoru',
  /** Label for the "Include content source map" switch */
  'vision.options.include-source-map': 'Zahrnout mapu zdroje obsahu',
  /** Description for the "Include content source map" switch */
  'vision.options.include-source-map.description':
    'Přidá resultSourceMap do odpovědi, zobrazenou na kartě Mapa zdroje obsahu.',
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vision.options.perspective.global': 'Globální ({{name}})',
  /** Label of the switch that sends queries to the API CDN */
  'vision.options.use-cdn': 'Používat API CDN',
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vision.options.use-cdn.anonymous':
    'Toto studio vás přihlašuje pomocí cookie, kterou API CDN nikdy nedostane: odpovídá tak, jako by šlo o anonymního návštěvníka, s obsahem, jaký zobrazuje veřejný dataset.',
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vision.options.use-cdn.blocked':
    'API CDN neposkytuje koncepty ani vydání, takže dotazy s perspektivou {{perspective}} jdou na API. S perspektivou publikováno nebo raw používají CDN.',
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vision.options.use-cdn.blocked.title': 'Dotazy jdou na API, ne na CDN',
  /** Description of the API CDN switch */
  'vision.options.use-cdn.description':
    'Odesílá dotaz na API CDN, podobně jako useCdn: true v @sanity/client, s perspektivami publikováno a raw: koncepty a vydání vždy jdou na API. Odpovědi jsou ukládány do mezipaměti až na minutu; panel Síť ukazuje, kdy odpověď pocházela z mezipaměti.',
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vision.options.use-cdn.use-published': 'Použít perspektivu publikováno',
  /** Label of the variant field */
  'vision.options.variant-label': 'Varianta',
  /** Variant option sending the navbar's variant, named */
  'vision.options.variant.global': 'Globální ({{name}})',
  /** Variant option sending the navbar's variant while none is selected there */
  'vision.options.variant.global-none': 'Globální (nic nevybráno)',
  /** Variant option sending no variant */
  'vision.options.variant.none': 'Žádná',
  /** Accessible label for collapsing a bottom panel */
  'vision.panel.collapse': 'Sbalit panel',
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vision.panel.delta': 'Delta',
  /** Accessible label for expanding a bottom panel */
  'vision.panel.expand': 'Rozbalit panel',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vision.panel.explain': 'Vysvětlení',
  /** Label of the Functions tab in the response panel */
  'vision.panel.functions': 'Funkce',
  /** Label of the "History" tab in the response panel */
  'vision.panel.history': 'Historie',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vision.panel.lint': 'Lint',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vision.panel.mutate': 'Mutace',
  /** Label of the Network tab in the response panel */
  'vision.panel.network': 'Síť',
  /** Label of the "Options" panel in the request column */
  'vision.panel.options': 'Možnosti',
  /** Label of the "Response" tab in the response panel */
  'vision.panel.response': 'Odpověď',
  /** Label of the "Content Source Map" tab in the response panel */
  'vision.panel.source-map': 'Mapa zdroje obsahu',
  /** Button adding an item to a list param in the params form */
  'vision.params-form.add-item': 'Přidat položku',
  /** Placeholder of a params form field that takes any JSON value */
  'vision.params-form.any-placeholder':
    'Jakákoli hodnota JSON; ostatní text je odeslán jako řetězec',
  /** Shown in the params form when the query uses no params */
  'vision.params-form.empty': 'Dotaz nepoužívá žádné parametry. Každý $name v něm zde získá pole.',
  /** Shown in the params form while the params JSON cannot be parsed */
  'vision.params-form.invalid-json':
    'Parametry nejsou platný JSON. Opravte je v zobrazení JSON, abyste je mohli upravit zde.',
  /** A boolean param's value is not true or false; it is sent anyway */
  'vision.params-form.invalid.boolean': 'Není true ani false; odesláno jako {{value}}',
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vision.params-form.invalid.document-type':
    'Není typem dokumentu v tomto pracovním prostoru; přesto odesláno',
  /** A whole number param (a slice bound) holds a fraction */
  'vision.params-form.invalid.integer': 'Není celé číslo, které výřezy vyžadují',
  /** A list param's value is not a list; it is sent anyway */
  'vision.params-form.invalid.list': 'Není seznam; odesláno jako {{value}}',
  /** A number param's value is not a number; it is sent anyway */
  'vision.params-form.invalid.number': 'Není číslo; odesláno jako text',
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vision.params-form.invalid.option': 'Není jedna ze známých hodnot; přesto odesláno',
  /** A text param's value is not text; it is sent anyway */
  'vision.params-form.invalid.string': 'Není text; odesláno jako {{value}}',
  /** Accessible label of an item input of a list param in the params form */
  'vision.params-form.item-label': '${{name}}, položka {{index}}',
  /** Placeholder of an item input of a list param in the params form */
  'vision.params-form.item-placeholder': 'Položka',
  /** Under a params form field whose param has no value */
  'vision.params-form.missing': 'Nenastaveno: dotaz selže, dokud nebude mít hodnotu',
  /** Shown in the params form when the workspace schema could not be read */
  'vision.params-form.no-schema':
    'Typy pocházejí pouze z dotazu: schéma pracovního prostoru se nepodařilo načíst.',
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vision.params-form.not-set': 'Nenastaveno',
  /** Button setting a date and time param to the current time */
  'vision.params-form.now': 'Nyní',
  /** Button removing a param the query does not use from the params */
  'vision.params-form.remove': 'Odebrat',
  /** Accessible label of the button removing an item from a list param */
  'vision.params-form.remove-item': 'Odebrat položku',
  /** Shown in the params form when the query does not parse */
  'vision.params-form.syntax-error':
    'Dotaz se nepodařilo analyzovat, proto jsou jeho parametry uvedeny bez typů.',
  /** Type hint of a params form field: any JSON value */
  'vision.params-form.type.any': 'jakákoli hodnota JSON',
  /** Type hint of a params form field: true or false */
  'vision.params-form.type.boolean': 'true nebo false',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vision.params-form.type.datetime': 'datum a čas (ISO 8601)',
  /** Type hint of a params form field: a document ID */
  'vision.params-form.type.document-id': 'ID dokumentu',
  /** Type hint of a params form field: one of the workspace's document types */
  'vision.params-form.type.document-type': 'typ dokumentu',
  /** Type hint of a params form field: a whole number */
  'vision.params-form.type.integer': 'celé číslo',
  /** Type hint of a params form field: a list of values */
  'vision.params-form.type.list': 'seznam, každý {{type}}',
  /** Type hint of a params form field: a number */
  'vision.params-form.type.number': 'číslo',
  /** Type hint of a params form field: text */
  'vision.params-form.type.string': 'text',
  /** Heading of the params the query does not use, listed in the params form */
  'vision.params-form.unused': 'Dotazem nepoužito',
  /** Before the expressions that use a param, in the params form */
  'vision.params-form.used-in': 'Použito v',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vision.params.fit-height': 'Přizpůsobeno obsahu, {{height}} pixelů',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vision.params.resize':
    'Změnit velikost parametrů: přetáhněte nebo použijte klávesy se šipkami; dvojím kliknutím nebo klávesou Enter opět přizpůsobíte obsahu',
  /** Tab showing the params as a form inferred from the query */
  'vision.params.view.form': 'Formulář',
  /** Tab showing the params as JSON */
  'vision.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vision.params.view.label': 'Upravit parametry jako',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vision.paste.parsed': 'Dotaz byl načten z vložené URL adresy',
  /** Toast shown after a curl command for a query was pasted and loaded into the tab */
  'vision.paste.parsed-curl': 'Dotaz byl načten z vloženého příkazu cURL',
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vision.paste.unavailable-variant':
    'Vložená URL adresa používala variantu „{{variant}}“; vyberte ji na navigační liště, chcete-li s ní dotaz spustit.',
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vision.paste.unknown-dataset':
    'Dataset „{{dataset}}“ ve vložené URL adrese zde není k dispozici, ponechává se aktuální.',
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vision.paste.unsupported-perspective':
    'Perspektiva ve vložené URL adrese zde není podporována, ponechává se aktuální.',
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vision.paste.variants-disabled':
    'Vložená URL adresa používala variantu „{{variant}}“; tento pracovní prostor má varianty vypnuté, takže dotaz běží bez ní.',
  /** Accessible label for the query actions menu */
  'vision.query.actions': 'Akce dotazu',
  /** Tooltip when automatic refetching is not available for the API version */
  'vision.query.auto-refetch.unsupported':
    'Automatické opakované načítání vyžaduje API verze v2021-03-25 nebo novější.',
  /** Toast shown after the query was copied */
  'vision.query.copied': 'Dotaz zkopírován do schránky',
  /** Menu item copying the query text */
  'vision.query.copy': 'Kopírovat dotaz',
  /** Menu item opening the export query dialog */
  'vision.query.export': 'Exportovat dotaz…',
  /** Menu item reformatting the query */
  'vision.query.prettify': 'Formátovat dotaz',
  /** Toast shown when the query could not be reformatted */
  'vision.query.prettify.failed': 'Dotaz se nepodařilo naformátovat',
  /** Menu item saving the query to the personal saved queries */
  'vision.query.save': 'Uložit dotaz',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vision.query.stop': 'Zastavit',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vision.query.stop.description': 'Zastavit načítání',
  /** Explanation in the settings section about the redesigned experience */
  'vision.redesign.settings.description':
    'Používáte redesignovaný nástroj Vision. Při přepnutí zpět zůstanou vaše karty a nastavení v tomto prohlížeči zachovány pro příště.',
  /** Title of the settings section about the redesigned experience */
  'vision.redesign.settings.title': 'Redesignovaný Vision (beta)',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vision.redesign.switch-to-classic': 'Přepnout na klasický Vision',
  /** Toast button that switches to the redesigned tool */
  'vision.redesign.toast.accept': 'Vyzkoušet nyní',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vision.redesign.toast.description':
    'Karty dotazů, živé opakované načítání, podrobnosti odpovědí a exporty. Kdykoli se můžete přepnout zpět.',
  /** Toast button that hides the invitation */
  'vision.redesign.toast.dismiss': 'Teď ne',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vision.redesign.toast.title': 'Vyzkoušejte redesignovaný Vision',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vision.redesign.try': 'Vyzkoušet redesign',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vision.redesign.try.description':
    'Přepnout na redesignovaný Vision, ve verzi beta. Kdykoli se můžete vrátit zpět z jeho postranního panelu.',
  /** Empty state of the response panel before anything was fetched */
  'vision.response.empty': 'Zatím nic nenačteno',
  /** Label for the payload size in the response tab */
  'vision.response.payload-size': 'Velikost datového obsahu',
  /** Label for the sync tags in the response tab */
  'vision.response.sync-tags': 'Synchronizační štítky',
  /** Shown when the response carried no sync tags */
  'vision.response.sync-tags.none': 'V odpovědi nejsou žádné synchronizační štítky',
  /** Under the query URL when the request went out as a POST body rather than that URL */
  'vision.response.url.sent-as-post':
    'Odesláno jako tělo POST požadavku: dotaz a parametry jsou pro URL příliš dlouhé, proto je @sanity/client odeslal jako JSON. Vložení této URL do nástroje Vision dotaz stále načte.',
  /** Accessible label for the result actions menu */
  'vision.result.actions': 'Akce výsledku',
  /** Toast shown after the result was copied */
  'vision.result.copied': 'Výsledek zkopírován do schránky',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vision.result.copied-value': 'Zkopírováno {{path}}',
  /** Menu item and button copying the result as JSON */
  'vision.result.copy': 'Kopírovat výsledek',
  /** Button next to each property in the result tree, copying its value */
  'vision.result.copy-value': 'Kopírovat hodnotu',
  /** Empty state of the result view */
  'vision.result.empty': 'Spusťte dotaz, aby se zde zobrazil jeho výsledek',
  /** Button exporting the result as CSV */
  'vision.result.export-csv': 'Exportovat CSV',
  /** Button exporting the result as JSON */
  'vision.result.export-json': 'Exportovat JSON',
  /** Menu item opening the TypeScript export dialog */
  'vision.result.export-typescript': 'Exportovat TypeScript…',
  /** Menu item opening the Zod export dialog */
  'vision.result.export-zod': 'Exportovat Zod…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vision.result.graph.collapse': 'Skrýt obsah',
  /** Button fitting the whole graph in view */
  'vision.result.graph.fit': 'Přizpůsobit zobrazení',
  /** Accessible label of the graph, saying how to move around in it */
  'vision.result.graph.label':
    'Graf výsledku: tažením posunete, kolečkem přiblížíte; při zaměření šipky posouvají, + a - přibližují/oddalují, 0 přizpůsobí',
  /** Ends the note on a graph that leaves part of this result out */
  'vision.result.graph.left-out-hint': 'Stromové a JSON zobrazení ukazují vše.',
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vision.result.graph.node-limit': 'Vykresleno je pouze prvních {{nodes}} objektů a polí.',
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vision.result.graph.partial': 'Pro {{nodes}} je uvedeno pouze prvních {{rows}} položek.',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vision.result.graph.partial.node': '{{name}} ({{entries}} položek)',
  /** Title of the graph node of the result itself */
  'vision.result.graph.root': 'výsledek',
  /** Button zooming into the graph */
  'vision.result.graph.zoom-in': 'Přiblížit',
  /** Button zooming out of the graph */
  'vision.result.graph.zoom-out': 'Oddálit',
  /** Tab showing the result as a graph of its objects and arrays */
  'vision.result.view.graph': 'Graf',
  /** Tab showing the result as indented JSON text, to select and copy from */
  'vision.result.view.json': 'JSON',
  /** Accessible label of the tabs that switch how the result shows */
  'vision.result.view.label': 'Zobrazení výsledku',
  /** Tab showing the result as a tree to browse */
  'vision.result.view.tree': 'Strom',
  /** Empty state of the saved queries panel */
  'vision.saved.empty': 'Zatím žádné uložené dotazy. Uložte aktuální dotaz tlačítkem +.',
  /** Empty state of a query list when the search matches nothing */
  'vision.saved.empty-search': 'Žádné dotazy neodpovídají vašemu hledání',
  /** Menu item loading a saved query into the active tab */
  'vision.saved.load-in-current-tab': 'Načíst do aktuální karty',
  /** Menu item opening a saved query in a new tab */
  'vision.saved.open-in-new-tab': 'Otevřít na nové kartě',
  /** Menu item renaming a saved query */
  'vision.saved.rename': 'Přejmenovat',
  /** Accessible label for the button saving the current query */
  'vision.saved.save-current': 'Uložit aktuální dotaz',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vision.saved.unavailable-variant':
    'Tento uložený dotaz používal variantu "{{variant}}"; vyberte ji v navigační liště, abyste s ní mohli dotaz spustit.',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vision.saved.unknown-dataset':
    'Dataset "{{dataset}}" tohoto uloženého dotazu zde není k dispozici, ponechává se aktuální.',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vision.saved.variants-disabled':
    'Tento uložený dotaz používal variantu "{{variant}}"; tento pracovní prostor má varianty vypnuté, takže dotaz běží bez ní.',
  /** Button in the settings dialog that clears the stored state */
  'vision.settings.clear-storage': 'Vymazat úložiště',
  /** Confirmation button for clearing the storage */
  'vision.settings.clear-storage.confirm': 'Ano, vymazat úložiště',
  /** Explanation of what clearing the storage does */
  'vision.settings.clear-storage.description':
    'Smaže vaše osobní uložené dotazy a knihovnu funkcí, resetuje otevřené karty a tato výchozí nastavení v tomto prohlížeči a vrátí se ke klasickému nástroji Vision. Sdílené dotazy zůstanou zachovány.',
  /** Toast shown when the saved queries could not be cleared */
  'vision.settings.clear-storage.error': 'Nepodařilo se vymazat uložené dotazy',
  /** Toast shown after the storage was cleared */
  'vision.settings.clear-storage.success': 'Úložiště vymazáno',
  /** Explanation at the top of the settings dialog */
  'vision.settings.description':
    'Výchozí nastavení pro nové karty. Otevřené karty si zachovávají vlastní možnosti.',
  /** Explains the setting listing the fields left out of History diffs */
  'vision.settings.history-diff.description':
    'Jedna cesta k poli na řádek. Cesta se shoduje v jakékoli hloubce výsledku, takže _rev skryje revizi každého dokumentu v něm. Jednotlivé diffy je přesto mohou zobrazit.',
  /** Button restoring the default fields left out of History diffs */
  'vision.settings.history-diff.reset': 'Obnovit výchozí nastavení',
  /** Label of the setting listing the fields left out of History diffs */
  'vision.settings.history-diff.title': 'Pole skrytá z diffů historie',
  /** Title of the settings dialog */
  'vision.settings.title': 'Nastavení',
  /** Empty state of the shared queries panel */
  'vision.shared.empty':
    'Zatím žádné sdílené dotazy. Sdílením uloženého dotazu jej zpřístupníte všem, kdo používají tento dataset.',
  /** Shortcut description: close dialogs and menus */
  'vision.shortcuts.close': 'Zavřít dialogy a nabídky',
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vision.shortcuts.complete': 'Dokončit název funkce',
  /** Shortcut description: copy the query */
  'vision.shortcuts.copy-query': 'Kopírovat dotaz',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vision.shortcuts.extract-function': 'Extrahovat projekci na pozici kurzoru do funkce',
  /** Shortcut description: run the query */
  'vision.shortcuts.fetch': 'Načíst dotaz',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vision.shortcuts.next-finding': 'Přejít na další nález lintování',
  /** Shortcut description: reformat the query */
  'vision.shortcuts.prettify': 'Zformátovat dotaz',
  /** Title of the keyboard shortcuts dialog */
  'vision.shortcuts.title': 'Klávesové zkratky',
  /** Sidebar toggle: show icons only */
  'vision.sidebar.collapse': 'Sbalit postranní panel',
  /** Sidebar toggle: show labels next to the icons */
  'vision.sidebar.expand': 'Rozbalit postranní panel',
  /** Accessible label for the sidebar navigation */
  'vision.sidebar.label': 'Postranní panel Vision',
  /** Sidebar item and drawer title for personal saved queries */
  'vision.sidebar.saved-queries': 'Uložené dotazy',
  /** Sidebar item opening the settings dialog */
  'vision.sidebar.settings': 'Nastavení',
  /** Sidebar item and drawer title for shared queries */
  'vision.sidebar.shared-queries': 'Sdílené dotazy',
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vision.sidebar.shortcuts': 'Klávesové zkratky',
  /** Empty state of the content source map panel */
  'vision.source-map.empty':
    'V odpovědi není žádná mapa zdroje obsahu. Zapněte možnost „Zahrnout mapu zdroje obsahu“ v Možnostech a načtěte znovu.',
  /** Accessible label of the divider between the result and the response details panel */
  'vision.split.bottom-panel':
    'Změňte velikost panelu s podrobnostmi odpovědi: přetáhněte nebo použijte klávesy se šipkami; Home a End přejdou na hranice, Enter resetuje',
  /** Accessible label of the divider between the request and response panes */
  'vision.split.request-response':
    'Změňte velikost panelů požadavku a odpovědi: přetáhněte nebo použijte klávesy se šipkami; Home a End přejdou na hranice, Enter resetuje',
  /** Accessible label for the button closing a query tab */
  'vision.tabs.close-tab': 'Zavřít kartu',
  /** Accessible label for the list of query tabs */
  'vision.tabs.label': 'Karty dotazů',
  /** Accessible label for the button opening a new query tab */
  'vision.tabs.new-tab': 'Nová karta',
  /** Placeholder of the input renaming a tab */
  'vision.tabs.title-placeholder': 'Název karty',
  /** Title of a tab whose query is still empty */
  'vision.tabs.untitled': 'Nepojmenovaný dotaz',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vision.webmcp.check-query': 'Zkontrolovat dotaz GROQ ve Vision',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vision.webmcp.describe-schema': 'Popsat schéma ve Vision',
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vision.webmcp.explain-query': 'Vysvětlit dotaz GROQ ve Vision',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vision.webmcp.get-state': 'Číst otevřenou kartu Vision',
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vision.webmcp.open-query': 'Otevřít dotaz GROQ ve Vision',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vision.webmcp.preview-mutations': 'Náhled mutací ve Vision',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vision.webmcp.run-query': 'Spustit dotaz GROQ ve Vision',
})
