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
  'vista.agent-actions.credits': 'Spotřebovává jeden AI kredit na požadavek',
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vista.ai-credits.balance': 'Tento měsíc zbývá {{balance}} z {{quota}} AI kreditů.',
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vista.ai-credits.deficit':
    'Tento měsíc bylo využito {{used}} AI kreditů, o {{deficit}} více než je zahrnuto v limitu {{quota}}.',
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vista.ai-credits.limit.description':
    'Vaše organizace tento měsíc využila {{used}} z {{quota}} AI kreditů, takže Sanity Agent Actions jsou pozastaveny do příštího měsíce nebo do zvýšení limitu výdajů.',
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vista.ai-credits.limit.description-unknown':
    'Vaše organizace dosáhla svého limitu výdajů na AI kredity, takže Sanity Agent Actions jsou pozastaveny do příštího měsíce nebo do zvýšení limitu.',
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vista.ai-credits.limit.learn-more': 'Jak fungují AI kredity',
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vista.ai-credits.limit.manage': 'Spravovat AI kredity',
  /** Title of the card shown where the organization is out of AI credits */
  'vista.ai-credits.limit.title': 'Došly AI kredity',
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vista.ai-credits.usage': 'Využití AI',
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vista.ai-credits.used': 'Tento měsíc bylo využito {{used}} AI kreditů.',
  /** Button in the request column's action bar naming the API version requests go out with */
  'vista.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vista.api-version.button-cdn': 'API CDN {{version}}',
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vista.api-version.button-invalid': 'Nedokončená verze API',
  /** Tooltip of the API version button */
  'vista.api-version.tooltip':
    'Dotazy se spouští proti verzi API {{version}}. Vyberte pro změnu v Možnostech.',
  /** Tooltip of the API version button while queries go through the API CDN */
  'vista.api-version.tooltip-cdn':
    'Dotazy se spouští proti API CDN s verzí API {{version}}. Vyberte pro změnu v Možnostech.',
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vista.api-version.tooltip-cdn-blocked':
    'Dotazy se spouští proti API s verzí {{version}}, nikoli proti API CDN: ten neposkytuje perspektivu {{perspective}}. Vyberte pro změnu v Možnostech.',
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vista.api-version.tooltip-invalid':
    'Verze API v Možnostech je nedokončená, takže dokud nebude kompletní, nelze nic načíst.',
  /** Tooltip of the API version button while a selected variant forces the variants API version */
  'vista.api-version.tooltip-locked':
    'Dotazy se spouští proti verzi API {{version}}, kterou vyžaduje vybraná varianta.',
  /** Label of the document after the change in the Delta panel */
  'vista.delta.after': 'Po',
  /** Label of the document before the change in the Delta panel */
  'vista.delta.before': 'Před',
  /** What the Delta panel does */
  'vista.delta.description':
    'Spustí dotaz v delta režimu, stejně jako to dělají webhooky, posluchači a Sanity Functions poháněné GROQ: before() a after() jsou dokument před a po změně, @ je dokument po změně a delta::changedAny() je porovnává. Běží v prohlížeči pomocí groq-js. Prázdná strana znamená žádný dokument: změna jej vytváří nebo maže.',
  /** Label of the document ID field in the Delta panel */
  'vista.delta.document-id': 'ID dokumentu',
  /** Shown when there is a query but no documents to compare */
  'vista.delta.empty': 'Načtěte historii dokumentu, nebo zapište dokumenty do polí Před a Po.',
  /** Shown when the query fails in delta mode */
  'vista.delta.failed': 'Dotaz nebylo možné spustit v delta režimu: {{message}}',
  /** Shown when the After document is not valid JSON */
  'vista.delta.invalid-after': 'Po není platný JSON: {{message}}',
  /** Shown when the Before document is not valid JSON */
  'vista.delta.invalid-before': 'Before není platný JSON: {{message}}',
  /** Button loading the document's revisions from the History API */
  'vista.delta.load': 'Načíst historii',
  /** Shown when the history could not be loaded */
  'vista.delta.load-failed': 'Historii se nepodařilo načíst: {{message}}',
  /** A delta filter that is true for the change */
  'vista.delta.matches': 'Odpovídá: webhook nebo funkce s tímto filtrem se pro tuto změnu spustí.',
  /** A delta filter that is false for the change */
  'vista.delta.no-match':
    'Neodpovídá: webhook nebo funkce s tímto filtrem se pro tuto změnu nespustí.',
  /** Shown while the query or its params cannot be sent */
  'vista.delta.no-request':
    'Opravte dotaz a jeho parametry, abyste jej mohli spustit v režimu delta.',
  /** Heading of the delta result */
  'vista.delta.result': 'Výsledek',
  /** The After choice for a change that deletes the document */
  'vista.delta.revision.none-after': 'Nic: změna dokument odstraní',
  /** The Before choice for a change that creates the document */
  'vista.delta.revision.none-before': 'Nic: změna dokument vytvoří',
  /** A revision in the Before and After lists */
  'vista.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vista.drawer.close': 'Zavřít panel',
  /** Explanation at the top of the Explain panel */
  'vista.explain.description':
    'Plán dotazu je způsob, jakým Content Lake dotaz provádí: co čte, filtruje a řadí během čtení, a co zůstává na pozdější kroky. Volba „Vysvětli mi to“ nechá Sanity Agent Actions popsat dotaz a jeho plán srozumitelnými slovy, což spotřebuje jeden AI kredit.',
  /** Shown in the Explain panel while there is no valid query to explain */
  'vista.explain.empty': 'Napište dotaz, abyste ho mohli vysvětlit.',
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vista.explain.explain': 'Vysvětli mi to',
  /** Shown when the explanation could not be written */
  'vista.explain.failed': 'Dotaz se nepodařilo vysvětlit: {{message}}',
  /** A count the index computes without reading the documents */
  'vista.explain.insight.aggregate': 'Spočítáno v indexu, bez čtení dokumentů.',
  /** A subquery the plan runs once for all documents */
  'vista.explain.insight.batched-subquery':
    'Subdotaz se spustí jednou pro všechny dokumenty, v jediném dávkovém načtení, nikoli pro každý dokument zvlášť.',
  /** Part of the filter runs in memory; the expression follows */
  'vista.explain.insight.filter-in-memory':
    'Část filtru běží v paměti, po čtení: každý dokument, který index propustí, je nejprve přečten, což se u velkých datasetů zpomaluje. Spojení (->) a funkce ve filtru nemohou index využít.',
  /** The index sorts and limits while reading */
  'vista.explain.insight.index-sort-limit': 'Index řadí a omezuje dokumenty již během čtení.',
  /** The plan slices in memory */
  'vista.explain.insight.slice-in-memory':
    'Výřez se provádí v paměti po čtení, nikoli jako omezení během čtení.',
  /** The plan sorts in memory */
  'vista.explain.insight.sort-in-memory':
    'Řazení probíhá v paměti po přečtení všech shod. Řaďte podle atributů, které index umí řadit.',
  /** Link under the plan insights to the guide on fast queries */
  'vista.explain.insights.guide': 'Vysoký výkon GROQ',
  /** Heading of the plan insights in the Explain panel */
  'vista.explain.insights.title': 'Co stojí za povšimnutí',
  /** Button in the Explain panel fetching the query plan */
  'vista.explain.plan': 'Zobrazit plán dotazu',
  /** Shown when the query plan could not be fetched */
  'vista.explain.plan-failed': 'Plán dotazu se nepodařilo načíst: {{message}}',
  /** Heading of the query plan in the Explain panel */
  'vista.explain.plan-title': 'Plán dotazu',
  /** Toast shown after a code snippet was copied */
  'vista.export-query.copied': 'Úryvek zkopírován do schránky',
  /** Label for the button that copies a code snippet */
  'vista.export-query.copy': 'Kopírovat úryvek',
  /** Explanation at the top of the export query dialog */
  'vista.export-query.description':
    'Spusťte tento dotaz mimo studio pomocí jednoho z těchto úryvků.',
  /** Title of the dialog that exports the query as code snippets */
  'vista.export-query.title': 'Exportovat dotaz',
  /** Note about authentication in the export query dialog */
  'vista.export-query.token-note':
    'Soukromé datasety vyžadují API token. U veřejných datasetů lze hlavičku Authorization vynechat.',
  /** Toast shown after the generated code was copied */
  'vista.export-types.copied': 'Kód zkopírován do schránky',
  /** Label for the button that copies the generated code */
  'vista.export-types.copy': 'Kopírovat kód',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vista.export-types.empty':
    'Nejprve načtěte dotaz, aby byl k dispozici výsledek, ze kterého lze odvodit typy.',
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vista.export-types.schema-error': 'Vyhodnocení schématu selhalo: {{message}}',
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vista.export-types.source.result':
    'Odvozeno z načteného výsledku, protože dotaz nebylo možné vyhodnotit podle schématu pracovního prostoru.',
  /** Note shown when the types were derived from the workspace schema */
  'vista.export-types.source.schema':
    'Odvozeno ze schématu pracovního prostoru, stejným způsobem jako to dělá sanity typegen.',
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vista.export-types.stale-result':
    'Zobrazený výsledek byl načten pro jiný dotaz nebo jiné parametry. Nejprve načtěte aktuální dotaz, aby byl k dispozici výsledek, ze kterého lze odvodit typy.',
  /** Title of the dialog exporting TypeScript types for the result */
  'vista.export-types.title-typescript': 'Exportovat TypeScript',
  /** Title of the dialog exporting a Zod schema for the result */
  'vista.export-types.title-zod': 'Exportovat Zod',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vista.functions.add': 'Přidat do dotazu',
  /** Shown on a library function the query declares the same way */
  'vista.functions.declared': 'V tomto dotazu',
  /** Lint action on a call of a library function the query does not declare */
  'vista.functions.editor.add-from-library': 'Deklarovat',
  /** Note in a function's hover documentation: the API version it needs */
  'vista.functions.editor.api-version': 'Vyžaduje verzi API {{version}} nebo novější',
  /** Detail of a completion for a custom function the query declares */
  'vista.functions.editor.completion-declared': 'v tomto dotazu',
  /** Detail of a completion for a library function, which declares it too */
  'vista.functions.editor.completion-library': 'z vaší knihovny',
  /** Note in the hover documentation of a custom function the query declares */
  'vista.functions.editor.declared-on': 'Vlastní funkce, deklarována na řádku {{line}}',
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vista.functions.editor.delta-only':
    'Funguje pouze v režimu delta, kde webhooky a Sanity Functions spouštějí své filtry',
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vista.functions.editor.extract': 'Extrahovat do funkce',
  /** Note in the hover documentation of a library function the query does not declare */
  'vista.functions.editor.in-library': 'Ve vaší knihovně funkcí, v tomto dotazu není deklarována',
  /** Link at the end of a built-in function's hover documentation */
  'vista.functions.editor.reference': 'Referenční příručka funkcí GROQ',
  /** Explanation under the library heading in the Functions panel */
  'vista.functions.library.description':
    'Uchováváno v tomto prohlížeči pro každý dataset projektu. Dokončování nabízí tyto funkce a lint nabízí deklarovat tu, kterou dotaz volá.',
  /** Shown in the Functions panel while the library is empty */
  'vista.functions.library.empty':
    'Uložte funkci, kterou dotaz deklaruje, abyste ji mohli použít v jiných dotazech.',
  /** Heading of the functions library in the Functions panel */
  'vista.functions.library.title': 'Knihovna',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vista.functions.query.empty':
    'Deklarujte vlastní funkce na začátku dotazu, nebo umístěte kurzor do projekce, například author->{name}, a stiskněte tlačítko extrahovat nad editorem ({{shortcut}}).',
  /** Heading of the functions the query declares in the Functions panel */
  'vista.functions.query.title': 'V tomto dotazu',
  /** Removes a function from the library */
  'vista.functions.remove': 'Odebrat z knihovny',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vista.functions.replace': 'Nahradit v dotazu',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vista.functions.reveal': 'Zobrazit {{name}} v editoru',
  /** Button of a function the query declares that is not in the library yet */
  'vista.functions.save': 'Uložit do knihovny',
  /** Shown on a function the query declares the way the library has it */
  'vista.functions.saved': 'Uloženo',
  /** Button of a function the query declares differently from the library's version */
  'vista.functions.update': 'Aktualizovat knihovnu',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vista.generate.button': 'Generovat dotaz',
  /** Closes the generate query bar */
  'vista.generate.close': 'Zavřít',
  /** Explanation under the generate query field */
  'vista.generate.description':
    'Sanity Agent Actions napíší GROQ z vašeho popisu a typů dokumentů a Content Lake zkontroluje každý pokus; každý pokus využije jeden AI kredit. Nahradí dotaz v této kartě a spustí jej; zpět v editoru vrátí předchozí dotaz.',
  /** Shown when no query could be generated, above the reason */
  'vista.generate.failed': 'Dotaz se nepodařilo vygenerovat',
  /** Accessible label of the description field in the generate query bar */
  'vista.generate.label': 'Co by měl dotaz načíst?',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vista.generate.open-anyway': 'Otevřít poslední pokus',
  /** Placeholder of the description field in the generate query bar */
  'vista.generate.placeholder': '10 nejnovějších autorů seřazených podle příjmení a poté jména',
  /** Shown while the first attempt at a query is written */
  'vista.generate.progress': 'Zapisování dotazu…',
  /** Shown while a rejected attempt is retried */
  'vista.generate.progress-retry': 'Opravování dotazu (pokus {{attempt}} z {{max}})…',
  /** Button generating the query */
  'vista.generate.submit': 'Generovat',
  /** Badge on a history entry the API CDN answered */
  'vista.history.cdn': 'API CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vista.history.cdn-cache-hit': 'Zásah do mezipaměti CDN',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vista.history.changed': 'Změněno',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vista.history.changes': 'Změny',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vista.history.changes-failed': 'Změny se nepodařilo zobrazit.',
  /** Button retrying to show the changes of a history entry */
  'vista.history.changes-retry': 'Opakovat',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vista.history.compared-with': 'Porovnáno s načtením v {{time}}',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vista.history.diff.params': 'Parametry',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vista.history.diff.query': 'Dotaz',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vista.history.diff.query-formatting-only': 'Změnilo se pouze formátování',
  /** Label of the diff of the query result in a history entry's changes */
  'vista.history.diff.result': 'Výsledek',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vista.history.diff.url': 'URL požadavku',
  /** Empty state of the history panel */
  'vista.history.empty': 'Zatím nic nebylo načteno',
  /** Status label for a failed fetch in the history */
  'vista.history.failed': 'Selhalo',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vista.history.hide-hidden': 'Skrýt je',
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vista.history.hiding': 'Skrývá se {{fields}}',
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vista.history.only-hidden-changed': 'Změnila se pouze skrytá pole',
  /** History reason: a tab opened with a generated query fetched it */
  'vista.history.reason.generated': 'Vygenerovaný dotaz',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vista.history.reason.link': 'Otevřený odkaz',
  /** History reason: a live event matched the query's sync tags */
  'vista.history.reason.live': 'Živá aktualizace',
  /** History reason: the live connection asked every client to refetch */
  'vista.history.reason.live-restart': 'Živé připojení bylo restartováno',
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vista.history.reason.live-start': 'Živé načítání bylo spuštěno',
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vista.history.reason.load': 'Dotaz byl načten',
  /** History reason: the fetch button was pressed */
  'vista.history.reason.manual': 'Tlačítko načtení',
  /** History reason: mutations were applied from the Mutate panel */
  'vista.history.reason.mutation': 'Byly použity mutace',
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vista.history.reason.options': 'Možnosti byly změněny',
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vista.history.reason.paste': 'Vložená URL',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vista.history.reason.resume': 'Automatické opětovné načítání bylo obnoveno',
  /** History reason: the keyboard shortcut was used */
  'vista.history.reason.shortcut': 'Klávesová zkratka',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vista.history.same-result': 'Stejný výsledek',
  /** Button showing the hidden fields in a history entry's changes */
  'vista.history.show-hidden': 'Zobrazit je',
  /** Next to a history entry's changes while the hidden fields are shown */
  'vista.history.showing-hidden': 'Zobrazuje se {{fields}}, standardně skryté',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vista.history.too-large': 'Příliš velké na porovnání',
  /** A history entry whose result is the same as the previous result */
  'vista.history.unchanged': 'Žádné změny',
  /** Shown in the Lint panel while the query has no lint findings */
  'vista.lint.empty':
    'Žádná zjištění linteru. Problémy, které GROQ linter v dotazu najde, se zobrazí zde během psaní; vyberte některé pro označení v editoru.',
  /** Where a lint finding sits in the query, shown under its message */
  'vista.lint.position': 'Řádek {{line}}, sloupec {{column}}',
  /** Severity badge of a lint finding */
  'vista.lint.severity.error': 'Chyba',
  /** Severity badge of a lint finding */
  'vista.lint.severity.hint': 'Tip',
  /** Severity badge of a lint finding */
  'vista.lint.severity.info': 'Info',
  /** Severity badge of a lint finding */
  'vista.lint.severity.warning': 'Varování',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vista.lint.use-suggestion': 'Použít {{suggestion}}',
  /** Badge shown while a tab refetches automatically */
  'vista.live.active': 'Živě',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vista.live.button': 'Živé načítání',
  /** Tooltip of the Live button while automatic refetching is off */
  'vista.live.button.start':
    'Načíst a poté znovu načítat vždy, když se dokumenty ve výsledku změní',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vista.live.button.stop':
    'Zastavit načítání při změně dokumentů ve výsledku. Načítání na vyžádání stále funguje pro výsledky, kterých se žádná změna dokumentu netýká, například now()',
  /** Error shown when the live connection breaks */
  'vista.live.error': 'Živé aktualizace odpojeny: {{message}}',
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vista.live.stop': 'Zastavit živé načítání',
  /** Button in the Mutate panel adding a mutation to the list */
  'vista.mutate.add': 'Přidat mutaci',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vista.mutate.add.create': 'Vytvořit dokument',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vista.mutate.add.delete': 'Smazat dokument',
  /** Adds a mutation deleting the documents of the shown result */
  'vista.mutate.add.delete-result': 'Smazat dokumenty ve výsledku',
  /** Adds a mutation patching a document, its ID to fill in */
  'vista.mutate.add.patch': 'Upravit dokument',
  /** Adds a mutation patching the documents of the shown result */
  'vista.mutate.add.patch-result': 'Upravit dokumenty ve výsledku',
  /** Button applying the mutations a dry run showed */
  'vista.mutate.apply': 'Použít na {{dataset}}',
  /** Heading of the error shown when applying the mutations failed */
  'vista.mutate.apply-failed': 'Mutace nebyly použity',
  /** Next to Apply while the mutations as they are have had no dry run */
  'vista.mutate.apply-needs-preview':
    'Použít odešle to, co ukázal zkušební běh: nejprve jej spusťte.',
  /** Option giving array items without a _key one */
  'vista.mutate.auto-keys': 'Přidat _key k prvkům pole, které jej nemají',
  /** Under the option giving array items a _key */
  'vista.mutate.auto-keys.description':
    'Studio jej potřebuje u každého prvku pole, aby jej mohlo upravovat.',
  /** Button showing a document's changes in the dry run */
  'vista.mutate.changes': 'Změny',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vista.mutate.changes-failed': 'Změny se nepodařilo zobrazit.',
  /** Button retrying to show a document's changes */
  'vista.mutate.changes-retry': 'Zkusit znovu',
  /** What the Mutate panel does */
  'vista.mutate.description':
    'Zapisujte mutace tak, jak je přijímá Mutations API, v seznamu: create, createOrReplace, createIfNotExists, delete a patch, podle ID nebo podle GROQ dotazu. Zkušební běh ukáže, co by provedly s každým dokumentem, aniž by cokoli změnil; Použít je poté zapíše do datasetu v jedné transakci, pod vaším účtem.',
  /** What the API says went wrong with one of the mutations */
  'vista.mutate.failure-item': 'Mutace {{index}}: {{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vista.mutate.generate.button': 'Generovat mutace',
  /** Explanation under the generate mutations field */
  'vista.mutate.generate.description':
    'Sanity Agent Actions zapíší mutace na základě vašeho popisu, dokumentů ve výsledku a jejich typů, a zkušební běh ověří každý pokus; každý pokus spotřebuje jeden AI kredit. Nahradí mutace zde, kde je zpět vrátí tlačítko Zpět; dokud je nepoužijete, nic se nezapíše.',
  /** Shown when no mutations could be generated, above the reason */
  'vista.mutate.generate.failed': 'Mutace se nepodařilo vygenerovat',
  /** Accessible label of the description field in the generate mutations bar */
  'vista.mutate.generate.label': 'Co by měly mutace udělat?',
  /** Placeholder of the description field in the generate mutations bar */
  'vista.mutate.generate.placeholder': 'Změňte název dokumentů ve výsledku na foobar',
  /** Shown while the first attempt at the mutations is written */
  'vista.mutate.generate.progress': 'Zapisování mutací…',
  /** Shown while an attempt the dry run turned down is retried */
  'vista.mutate.generate.progress-retry': 'Opravování mutací (pokus {{attempt}} z {{max}})…',
  /** Under the dry run: the fields the diffs leave out */
  'vista.mutate.hiding': 'Změny vynechávají {{fields}}, stejně jako Historie.',
  /** Shown when the mutations are not valid JSON */
  'vista.mutate.invalid-json': 'Mutace nejsou platný JSON: {{message}}',
  /** Shown when a mutation does not name exactly one thing to do */
  'vista.mutate.invalid-mutation':
    'Mutace {{index}} potřebuje přesně jednu z možností create, createOrReplace, createIfNotExists, delete nebo patch.',
  /** Label of the mutations editor */
  'vista.mutate.mutations': 'Mutace',
  /** The dry run touched no documents */
  'vista.mutate.no-documents': 'Mutace se netýkají žádných dokumentů.',
  /** Shown when the JSON is not a list of mutations */
  'vista.mutate.not-a-list':
    'Zadejte seznam mutací, jednu mutaci, nebo tělo požadavku se seznamem mutací.',
  /** A document the mutations create */
  'vista.mutate.operation.create': 'Vytvořit',
  /** A document the mutations delete */
  'vista.mutate.operation.delete': 'Smazat',
  /** A document the mutations touch without changing its content */
  'vista.mutate.operation.none': 'Žádná změna',
  /** A document the mutations change */
  'vista.mutate.operation.update': 'Aktualizovat',
  /** Button running the mutations as a dry run */
  'vista.mutate.preview': 'Zkušební spuštění',
  /** Heading of the error shown when the dry run failed */
  'vista.mutate.preview-failed': 'Zkušební spuštění selhalo',
  /** Heading of the dry run's outcome */
  'vista.mutate.preview-heading': 'Zkušební spuštění',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vista.mutate.stale':
    'Mutace, dataset nebo možnosti se po tomto zkušebním spuštění změnily. Spusťte ho znovu, aby se projevily.',
  /** How many documents the dry run changes and leaves as they are */
  'vista.mutate.summary': 'Změněno: {{changed}} · Beze změny: {{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vista.network.cache': 'Cache',
  /** The API CDN answered from its cache */
  'vista.network.cache.hit': 'Zásah',
  /** Under the details of a CDN cache hit */
  'vista.network.cache.hit-explained':
    'CDN odpověděla uloženou odpovědí z místa blízko vás; dotaz se k API vůbec nedostal.',
  /** The API CDN answered with a response this session had not seen */
  'vista.network.cache.miss': 'Netrefeno, pokud lze z této relace posoudit',
  /** The API answered, which caches nothing */
  'vista.network.cache.none': 'Žádná, API odpovídá na každý požadavek čerstvým obsahem',
  /** Shown in the Network panel while there is no response */
  'vista.network.empty':
    'Spusťte dotaz a zjistěte, který koncový bod na něj odpověděl, zda z cache a kde běžel.',
  /** In the Network panel: the endpoint that answered */
  'vista.network.endpoint': 'Odpověděl',
  /** The live API answered */
  'vista.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vista.network.endpoint.cdn': 'API CDN',
  /** In the Network panel: the region the query ran in */
  'vista.network.region': 'Dotaz běžel v',
  /** The response did not say where the query ran */
  'vista.network.region.unknown': 'Nenahlášeno',
  /** In the Network panel: the round trip and the time on the server */
  'vista.network.timing': 'Čas',
  /** The round trip and the server's time for the query, in milliseconds */
  'vista.network.timing.value': '{{e2e}} ms doba odezvy, {{server}} ms na serveru',
  /** In the Network panel: the trace of the request, for Sanity support */
  'vista.network.trace': 'ID trasování',
  /** Hint in the Network panel while queries go to the API */
  'vista.network.use-cdn-hint':
    'Zapněte Použít API CDN v možnostech, aby se dotazy posílaly přes CDN.',
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vista.network.you': 'Vy',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vista.options.dataset.follows-workspace': 'Sleduje pracovní prostor',
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vista.options.dataset.pin': 'Připnout dataset',
  /** Hint under the dataset field while a dataset is pinned */
  'vista.options.dataset.pinned': 'Připnuto; pracovní prostor může používat jinou sadu dat',
  /** Button that makes the tab follow the workspace's dataset again */
  'vista.options.dataset.use-workspace': 'Použít sadu dat pracovního prostoru',
  /** Label for the "Include content source map" switch */
  'vista.options.include-source-map': 'Zahrnout mapu zdroje obsahu',
  /** Description for the "Include content source map" switch */
  'vista.options.include-source-map.description':
    'Přidá do odpovědi resultSourceMap, zobrazený na kartě Mapa zdroje obsahu.',
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vista.options.perspective.global': 'Globální ({{name}})',
  /** Label of the switch that sends queries to the API CDN */
  'vista.options.use-cdn': 'Použít API CDN',
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vista.options.use-cdn.anonymous':
    'Toto studio vás přihlašuje pomocí cookie, kterou API CDN nikdy nedostane: odpovídá tak, jako by šlo o anonymního návštěvníka, tedy tím, co zobrazuje veřejná sada dat.',
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vista.options.use-cdn.blocked':
    'API CDN neposkytuje koncepty ani vydání, takže dotazy s perspektivou {{perspective}} jdou na API. S perspektivou publikováno nebo raw používají CDN.',
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vista.options.use-cdn.blocked.title': 'Dotazy jdou na API, ne na CDN',
  /** Description of the API CDN switch */
  'vista.options.use-cdn.description':
    'Odesílá dotaz na API CDN, podobně jako useCdn: true v @sanity/client, s perspektivami publikováno a raw: koncepty a vydání vždy jdou na API. Odpovědi se ukládají do mezipaměti až na jednu minutu; panel Síť ukazuje, kdy odpověď pocházela z mezipaměti.',
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vista.options.use-cdn.use-published': 'Použít perspektivu publikováno',
  /** Label of the variant field */
  'vista.options.variant-label': 'Varianta',
  /** Variant option sending the navbar's variant, named */
  'vista.options.variant.global': 'Globální ({{name}})',
  /** Variant option sending the navbar's variant while none is selected there */
  'vista.options.variant.global-none': 'Globální (nic nevybráno)',
  /** Variant option sending no variant */
  'vista.options.variant.none': 'Žádná',
  /** Accessible label for collapsing a bottom panel */
  'vista.panel.collapse': 'Sbalit panel',
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vista.panel.delta': 'Delta',
  /** Accessible label for expanding a bottom panel */
  'vista.panel.expand': 'Rozbalit panel',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vista.panel.explain': 'Vysvětlení',
  /** Label of the Functions tab in the response panel */
  'vista.panel.functions': 'Funkce',
  /** Label of the "History" tab in the response panel */
  'vista.panel.history': 'Historie',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vista.panel.lint': 'Lint',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vista.panel.mutate': 'Mutace',
  /** Label of the Network tab in the response panel */
  'vista.panel.network': 'Síť',
  /** Label of the "Options" panel in the request column */
  'vista.panel.options': 'Možnosti',
  /** Label of the "Response" tab in the response panel */
  'vista.panel.response': 'Odpověď',
  /** Label of the "Content Source Map" tab in the response panel */
  'vista.panel.source-map': 'Content Source Map',
  /** Button adding an item to a list param in the params form */
  'vista.params-form.add-item': 'Přidat položku',
  /** Placeholder of a params form field that takes any JSON value */
  'vista.params-form.any-placeholder':
    'Jakákoli hodnota JSON; ostatní text je odeslán jako řetězec',
  /** Shown in the params form when the query uses no params */
  'vista.params-form.empty': 'Dotaz nepoužívá žádné parametry. Každé $jméno v něm zde získá pole.',
  /** Shown in the params form while the params JSON cannot be parsed */
  'vista.params-form.invalid-json':
    'Parametry nejsou platný JSON. Opravte je v zobrazení JSON, abyste je mohli upravit zde.',
  /** A boolean param's value is not true or false; it is sent anyway */
  'vista.params-form.invalid.boolean': 'Není true ani false; odesláno jako {{value}}',
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vista.params-form.invalid.document-type':
    'Není typem dokumentu v tomto pracovním prostoru; přesto odesláno',
  /** A whole number param (a slice bound) holds a fraction */
  'vista.params-form.invalid.integer': 'Není celé číslo, které řezy vyžadují',
  /** A list param's value is not a list; it is sent anyway */
  'vista.params-form.invalid.list': 'Není seznam; odesláno jako {{value}}',
  /** A number param's value is not a number; it is sent anyway */
  'vista.params-form.invalid.number': 'Není číslo; odesláno jako text',
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vista.params-form.invalid.option': 'Není jednou ze známých hodnot; přesto odesláno',
  /** A text param's value is not text; it is sent anyway */
  'vista.params-form.invalid.string': 'Není text; odesláno jako {{value}}',
  /** Accessible label of an item input of a list param in the params form */
  'vista.params-form.item-label': '${{name}}, položka {{index}}',
  /** Placeholder of an item input of a list param in the params form */
  'vista.params-form.item-placeholder': 'Položka',
  /** Under a params form field whose param has no value */
  'vista.params-form.missing': 'Nenastaveno: dotaz selže, dokud nemá hodnotu',
  /** Shown in the params form when the workspace schema could not be read */
  'vista.params-form.no-schema':
    'Typy pocházejí pouze z dotazu: schéma pracovního prostoru se nepodařilo načíst.',
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vista.params-form.not-set': 'Nenastaveno',
  /** Button setting a date and time param to the current time */
  'vista.params-form.now': 'Nyní',
  /** Button removing a param the query does not use from the params */
  'vista.params-form.remove': 'Odebrat',
  /** Accessible label of the button removing an item from a list param */
  'vista.params-form.remove-item': 'Odebrat položku',
  /** Shown in the params form when the query does not parse */
  'vista.params-form.syntax-error':
    'Dotaz nelze zpracovat, proto jsou jeho parametry uvedeny bez typů.',
  /** Type hint of a params form field: any JSON value */
  'vista.params-form.type.any': 'jakákoli hodnota JSON',
  /** Type hint of a params form field: true or false */
  'vista.params-form.type.boolean': 'true nebo false',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vista.params-form.type.datetime': 'datum a čas (ISO 8601)',
  /** Type hint of a params form field: a document ID */
  'vista.params-form.type.document-id': 'ID dokumentu',
  /** Type hint of a params form field: one of the workspace's document types */
  'vista.params-form.type.document-type': 'typ dokumentu',
  /** Type hint of a params form field: a whole number */
  'vista.params-form.type.integer': 'celé číslo',
  /** Type hint of a params form field: a list of values */
  'vista.params-form.type.list': 'seznam, každý {{type}}',
  /** Type hint of a params form field: a number */
  'vista.params-form.type.number': 'číslo',
  /** Type hint of a params form field: text */
  'vista.params-form.type.string': 'text',
  /** Heading of the params the query does not use, listed in the params form */
  'vista.params-form.unused': 'Nepoužito dotazem',
  /** Before the expressions that use a param, in the params form */
  'vista.params-form.used-in': 'Použito v',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vista.params.fit-height': 'Velikost přizpůsobena obsahu, {{height}} pixelů',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vista.params.resize':
    'Změnit velikost parametrů: přetáhněte nebo použijte šipky; dvojklikem nebo stisknutím klávesy Enter znovu přizpůsobíte obsahu',
  /** Tab showing the params as a form inferred from the query */
  'vista.params.view.form': 'Formulář',
  /** Tab showing the params as JSON */
  'vista.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vista.params.view.label': 'Upravit parametry jako',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vista.paste.parsed': 'Dotaz načten z vložené URL adresy',
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vista.paste.unavailable-variant':
    'Vložená URL adresa používala variantu „{{variant}}“; vyberte ji na navigační liště, chcete-li s ní dotaz spustit.',
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vista.paste.unknown-dataset':
    'Dataset „{{dataset}}“ ve vložené URL adrese zde není k dispozici, ponechává se aktuální.',
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vista.paste.unsupported-perspective':
    'Perspektiva ve vložené URL adrese zde není podporována, ponechává se aktuální.',
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vista.paste.variants-disabled':
    'Vložená URL adresa používala variantu „{{variant}}“; v tomto pracovním prostoru jsou varianty vypnuty, dotaz se tedy spustí bez ní.',
  /** Accessible label for the query actions menu */
  'vista.query.actions': 'Akce dotazu',
  /** Tooltip when automatic refetching is not available for the API version */
  'vista.query.auto-refetch.unsupported':
    'Automatické opětovné načtení vyžaduje API verzi v2021-03-25 nebo novější.',
  /** Toast shown after the query was copied */
  'vista.query.copied': 'Dotaz zkopírován do schránky',
  /** Menu item copying the query text */
  'vista.query.copy': 'Kopírovat dotaz',
  /** Menu item opening the export query dialog */
  'vista.query.export': 'Exportovat dotaz…',
  /** Menu item reformatting the query */
  'vista.query.prettify': 'Zformátovat dotaz',
  /** Toast shown when the query could not be reformatted */
  'vista.query.prettify.failed': 'Dotaz se nepodařilo zformátovat',
  /** Menu item saving the query to the personal saved queries */
  'vista.query.save': 'Uložit dotaz',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vista.query.stop': 'Zastavit',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vista.query.stop.description': 'Zastavit načítání',
  /** Explanation in the settings section about the redesigned experience */
  'vista.redesign.settings.description':
    'Používáte předělaný nástroj Vision. Pokud se vrátíte zpět, vaše karty a nastavení zůstanou zachovány v tomto prohlížeči pro příště, až to zkusíte znovu.',
  /** Title of the settings section about the redesigned experience */
  'vista.redesign.settings.title': 'Předělaný Vision (beta)',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vista.redesign.switch-to-classic': 'Přepnout na klasický Vision',
  /** Toast button that switches to the redesigned tool */
  'vista.redesign.toast.accept': 'Vyzkoušet nyní',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.description':
    'Karty dotazů, živé opětovné načítání, podrobnosti odpovědi a exporty. Kdykoli se můžete vrátit zpět.',
  /** Toast button that hides the invitation */
  'vista.redesign.toast.dismiss': 'Teď ne',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.title': 'Vyzkoušejte předělaný Vision',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vista.redesign.try': 'Vyzkoušet nový design',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vista.redesign.try.description':
    'Přepněte na předělaný Vision, aktuálně v beta verzi. Kdykoli se můžete vrátit zpět pomocí jeho postranního panelu.',
  /** Empty state of the response panel before anything was fetched */
  'vista.response.empty': 'Zatím nic nenačteno',
  /** Label for the payload size in the response tab */
  'vista.response.payload-size': 'Velikost payloadu',
  /** Label for the sync tags in the response tab */
  'vista.response.sync-tags': 'Synchronizační štítky',
  /** Shown when the response carried no sync tags */
  'vista.response.sync-tags.none': 'Odpověď neobsahuje žádné synchronizační štítky',
  /** Accessible label for the result actions menu */
  'vista.result.actions': 'Akce výsledku',
  /** Toast shown after the result was copied */
  'vista.result.copied': 'Výsledek zkopírován do schránky',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vista.result.copied-value': 'Zkopírováno {{path}}',
  /** Menu item and button copying the result as JSON */
  'vista.result.copy': 'Kopírovat výsledek',
  /** Button next to each property in the result tree, copying its value */
  'vista.result.copy-value': 'Kopírovat hodnotu',
  /** Empty state of the result view */
  'vista.result.empty': 'Spusťte dotaz, abyste zde viděli jeho výsledek',
  /** Button exporting the result as CSV */
  'vista.result.export-csv': 'Exportovat CSV',
  /** Button exporting the result as JSON */
  'vista.result.export-json': 'Exportovat JSON',
  /** Menu item opening the TypeScript export dialog */
  'vista.result.export-typescript': 'Exportovat TypeScript…',
  /** Menu item opening the Zod export dialog */
  'vista.result.export-zod': 'Exportovat Zod…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vista.result.graph.collapse': 'Skrýt obsah',
  /** Button fitting the whole graph in view */
  'vista.result.graph.fit': 'Přizpůsobit zobrazení',
  /** Accessible label of the graph, saying how to move around in it */
  'vista.result.graph.label':
    'Graf výsledku: táhněte pro posun, rolujte pro přiblížení; při zaměření šipky posouvají, + a - přibližují/oddalují, 0 přizpůsobí zobrazení',
  /** Ends the note on a graph that leaves part of this result out */
  'vista.result.graph.left-out-hint': 'Stromové a JSON zobrazení ukazují vše.',
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vista.result.graph.node-limit': 'Vykresleno je pouze prvních {{nodes}} objektů a polí.',
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vista.result.graph.partial': 'Pro {{nodes}} jsou uvedeny pouze první položky v počtu {{rows}}.',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vista.result.graph.partial.node': '{{name}} ({{entries}} položek)',
  /** Title of the graph node of the result itself */
  'vista.result.graph.root': 'výsledek',
  /** Button zooming into the graph */
  'vista.result.graph.zoom-in': 'Přiblížit',
  /** Button zooming out of the graph */
  'vista.result.graph.zoom-out': 'Oddálit',
  /** Tab showing the result as a graph of its objects and arrays */
  'vista.result.view.graph': 'Graf',
  /** Tab showing the result as indented JSON text, to select and copy from */
  'vista.result.view.json': 'JSON',
  /** Accessible label of the tabs that switch how the result shows */
  'vista.result.view.label': 'Zobrazení výsledku',
  /** Tab showing the result as a tree to browse */
  'vista.result.view.tree': 'Strom',
  /** Empty state of the saved queries panel */
  'vista.saved.empty': 'Zatím žádné uložené dotazy. Uložte aktuální dotaz pomocí tlačítka +.',
  /** Empty state of a query list when the search matches nothing */
  'vista.saved.empty-search': 'Žádné dotazy neodpovídají vašemu hledání',
  /** Menu item loading a saved query into the active tab */
  'vista.saved.load-in-current-tab': 'Načíst do aktuální karty',
  /** Menu item opening a saved query in a new tab */
  'vista.saved.open-in-new-tab': 'Otevřít v nové kartě',
  /** Menu item renaming a saved query */
  'vista.saved.rename': 'Přejmenovat',
  /** Accessible label for the button saving the current query */
  'vista.saved.save-current': 'Uložit aktuální dotaz',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vista.saved.unavailable-variant':
    'Tento uložený dotaz používal variantu "{{variant}}"; vyberte ji na navigační liště, chcete-li s ní dotaz spustit.',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vista.saved.unknown-dataset':
    'Dataset "{{dataset}}" tohoto uloženého dotazu zde není k dispozici, ponechává se aktuální.',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vista.saved.variants-disabled':
    'Tento uložený dotaz používal variantu "{{variant}}"; v tomto pracovním prostoru jsou varianty vypnuté, takže dotaz poběží bez ní.',
  /** Button in the settings dialog that clears the stored state */
  'vista.settings.clear-storage': 'Vymazat úložiště',
  /** Confirmation button for clearing the storage */
  'vista.settings.clear-storage.confirm': 'Ano, vymazat úložiště',
  /** Explanation of what clearing the storage does */
  'vista.settings.clear-storage.description':
    'Smaže vaše uložené osobní dotazy a knihovnu funkcí, obnoví otevřené karty a tato výchozí nastavení v tomto prohlížeči a vrátí se ke klasickému nástroji Vision. Sdílené dotazy zůstanou zachovány.',
  /** Toast shown when the saved queries could not be cleared */
  'vista.settings.clear-storage.error': 'Uložené dotazy se nepodařilo vymazat',
  /** Toast shown after the storage was cleared */
  'vista.settings.clear-storage.success': 'Úložiště bylo vymazáno',
  /** Explanation at the top of the settings dialog */
  'vista.settings.description':
    'Výchozí nastavení pro nové karty. Otevřené karty si ponechávají vlastní možnosti.',
  /** Explains the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.description':
    'Jedna cesta k poli na řádek. Cesta odpovídá v jakékoli hloubce výsledku, takže _rev skryje revizi každého dokumentu v něm. Každý diff je stále může zobrazit.',
  /** Button restoring the default fields left out of History diffs */
  'vista.settings.history-diff.reset': 'Obnovit výchozí hodnoty',
  /** Label of the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.title': 'Pole skrytá z diffů historie',
  /** Title of the settings dialog */
  'vista.settings.title': 'Nastavení',
  /** Empty state of the shared queries panel */
  'vista.shared.empty':
    'Zatím žádné sdílené dotazy. Sdílením uloženého dotazu jej zpřístupníte všem, kdo používají tento dataset.',
  /** Shortcut description: close dialogs and menus */
  'vista.shortcuts.close': 'Zavřít dialogy a nabídky',
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vista.shortcuts.complete': 'Doplnit název funkce',
  /** Shortcut description: copy the query */
  'vista.shortcuts.copy-query': 'Kopírovat dotaz',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vista.shortcuts.extract-function': 'Extrahovat projekci u kurzoru do funkce',
  /** Shortcut description: run the query */
  'vista.shortcuts.fetch': 'Načíst dotaz',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vista.shortcuts.next-finding': 'Přejít na další zjištění lintu',
  /** Shortcut description: reformat the query */
  'vista.shortcuts.prettify': 'Zformátovat dotaz',
  /** Title of the keyboard shortcuts dialog */
  'vista.shortcuts.title': 'Klávesové zkratky',
  /** Sidebar toggle: show icons only */
  'vista.sidebar.collapse': 'Sbalit postranní panel',
  /** Sidebar toggle: show labels next to the icons */
  'vista.sidebar.expand': 'Rozbalit postranní panel',
  /** Accessible label for the sidebar navigation */
  'vista.sidebar.label': 'Postranní panel Vista',
  /** Sidebar item and drawer title for personal saved queries */
  'vista.sidebar.saved-queries': 'Uložené dotazy',
  /** Sidebar item opening the settings dialog */
  'vista.sidebar.settings': 'Nastavení',
  /** Sidebar item and drawer title for shared queries */
  'vista.sidebar.shared-queries': 'Sdílené dotazy',
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vista.sidebar.shortcuts': 'Klávesové zkratky',
  /** Empty state of the content source map panel */
  'vista.source-map.empty':
    'V odpovědi není žádná mapa zdroje obsahu. Zapněte „Zahrnout mapu zdroje obsahu“ v Možnostech a načtěte znovu.',
  /** Accessible label of the divider between the result and the response details panel */
  'vista.split.bottom-panel':
    'Změňte velikost panelu podrobností odpovědi: přetáhněte nebo použijte klávesy se šipkami; Home a End přejdou na okraje, Enter resetuje',
  /** Accessible label of the divider between the request and response panes */
  'vista.split.request-response':
    'Změňte velikost panelů požadavku a odpovědi: přetáhněte nebo použijte klávesy se šipkami; Home a End přejdou na okraje, Enter resetuje',
  /** Accessible label for the button closing a query tab */
  'vista.tabs.close-tab': 'Zavřít kartu',
  /** Accessible label for the list of query tabs */
  'vista.tabs.label': 'Karty dotazů',
  /** Accessible label for the button opening a new query tab */
  'vista.tabs.new-tab': 'Nová karta',
  /** Placeholder of the input renaming a tab */
  'vista.tabs.title-placeholder': 'Název karty',
  /** Title of a tab whose query is still empty */
  'vista.tabs.untitled': 'Dotaz bez názvu',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vista.webmcp.check-query': 'Zkontrolovat GROQ dotaz ve Vision',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vista.webmcp.describe-schema': 'Popsat schéma ve Vision',
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vista.webmcp.explain-query': 'Vysvětlit GROQ dotaz ve Vision',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vista.webmcp.get-state': 'Přečíst otevřenou kartu Vision',
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vista.webmcp.open-query': 'Otevřít GROQ dotaz ve Vision',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vista.webmcp.preview-mutations': 'Náhled mutací ve Vision',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vista.webmcp.run-query': 'Spustit GROQ dotaz ve Vision',
})
