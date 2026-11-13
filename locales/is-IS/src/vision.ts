import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Afrita á klippiborð',
  /** Label for deleting a query */
  'action.delete': 'Eyða',
  /** Label for editing a query's title */
  'action.edit-title': 'Breyta titli',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Stoppa',
  /** Label for setting up a listener */
  'action.listen-execute': 'Hlusta',
  /** Label for query loading table */
  'action.load-queries': 'Hlaða fyrirspurnum',
  /** Label for loading a query */
  'action.load-query': 'Hlaða fyrirspurn',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Hætta við',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Sækja',
  /** Label for saving a query */
  'action.save-personal-copy': 'Vista persónulegt eintak',
  /** Label for saving a personal query */
  'action.save-personal-query': 'Vista sem persónulegt',
  /** Label for saving a query */
  'action.save-query': 'Vista fyrirspurn',
  /** Label for saving a shared query */
  'action.save-shared-query': 'Vista sem samnýtt',
  /** Label for unsharing a query */
  'action.unshare': 'Hætta samnýtingu',
  /** Label for updating a query */
  'action.update': 'Uppfæra',

  /** Label for actions user can take */
  'label.actions': 'Aðgerðir',
  /** Label for all saved queries */
  'label.all': 'Allt',
  /** Label for saved queries that have been edited */
  'label.edited': 'Breytt',
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Nýtt',
  /** Label for query type "personal" */
  'label.personal': 'Persónulegt',
  /** Label for savedAt date */
  'label.saved-at': 'Vistað þann',
  /** Saved queries */
  'label.saved-queries': 'Vistaðar fyrirspurnir',
  /** Search queries */
  'label.search-queries': 'Leita í fyrirspurnum',
  /** Share query */
  'label.share': 'Deila',
  /** Label for query type "shared" */
  'label.shared': 'Samnýtt',
  /** Label for saved query type "team" */
  'label.team': 'Hópur',
  /** Label for untitled query fallback */
  'label.untitled-query': 'Án titils',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'Parametrar eru ekki gilt JSON',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Parametrar',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Dálkur',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Lína',
  /** Extra explanation when a 400 is returned for a release perspective on an old API version */
  'query.error.unsupported-release-perspective':
    'Þessi API útgáfa styður ekki flókin sjónarhorn (perspectives). Notaðu {{apiVersion}} eða nýrri.',
  /** Extra explanation when a 400 is returned for a variant on an incompatible API version */
  'query.error.unsupported-variant':
    'Þessi API útgáfa styður ekki efnisbreytur (content variants). Notaðu tilraunaútgáfu API ({{apiVersion}}).',
  /** Label for "Query" editor/input */
  'query.label': 'Fyrirspurn',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'Fyrirspurnarvefslóð',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'Enda-til-enda',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'Framkvæmdartími',
  /** Label for "Result" explorer/view */
  'result.label': 'Niðurstaða',
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable': 'Niðurstöðuna er ekki hægt að umrita sem CSV',
  /** Label for "Save result as" result action */
  'result.save-result-as-format': 'Vista niðurstöðu sem <SaveResultButtons/>',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'ekki viðeigandi',

  /** Query already saved error label */
  'save-query.already-saved': 'Fyrirspurn þegar vistuð',
  /** Save error label */
  'save-query.error': 'Villa við að vista fyrirspurn',
  /** Save personal copy success label */
  'save-query.personal-copy-success': 'Persónulegt eintak vistað',
  /** Warning displayed before sharing a query */
  'save-query.share-warning':
    'Samnýttar fyrirspurnir eru geymdar sem skjöl í dataset þínum og teljast með í skjalakvóta þínum.',
  /** Save shared query success label */
  'save-query.shared-success': 'Samnýtt fyrirspurn vistuð',
  /** Save success label */
  'save-query.success': 'Fyrirspurn vistuð',
  /** Save unshared query success label */
  'save-query.unshared-success': 'Fyrirspurn færð í persónulegt',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'API útgáfa',
  /** Tooltip shown when the API version selector is locked because a variant is selected */
  'settings.api-version-locked-for-variant': 'Þegar afbrigði er valið þarf API útgáfan að vera vX.',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'Sérsniðin API útgáfa',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Gagnasafn',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'Ógild API útgáfa',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'Annað',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspective',
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    'Perspective "<code>previewDrafts</code>" hefur verið endurnefnt í "<code>drafts</code>" og er nú úrelt. Þessi breyting er virk fyrir allar útgáfur með stuðning við perspective (>= v2021-03-25).',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Lestu skjölin',
  /** Option for selecting default perspective */
  'settings.perspectives.default': 'Engin perspective (API sjálfgefið)',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Perspectives leyfa fyrirspurn þinni að keyra gegn mismunandi "sýnum" af efni í dataset þínu',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    'Sjálfgefið perspective mun breytast úr "<code>raw</code>" í "<code>published</code>" í væntanlegri API útgáfu. Vinsamlegast kynntu þér nánar í skjölun.',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': 'Fest útgáfa',
  /** Label for the scheduled drafts perspective */
  'settings.perspectives.scheduled-drafts': 'Áætlaðar drög',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspectives',

  /** Tooltip line of every control that calls Sanity Agent Actions, which bills AI credits */
  'vista.agent-actions.credits': 'Notar eitt AI-inneign á hverja beiðni',
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vista.ai-credits.balance': '{{balance}} af {{quota}} AI-inneignum eftir í þessum mánuði.',
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vista.ai-credits.deficit':
    '{{used}} AI-inneignir notaðar í þessum mánuði, {{deficit}} fleiri en þær {{quota}} sem innifaldar eru.',
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vista.ai-credits.limit.description':
    'Stofnunin þín hefur notað {{used}} af {{quota}} AI-inneignum sínum í þessum mánuði, svo Sanity Agent Actions er í bið þar til næsta mánaðar eða þar til útgjaldamörk eru hækkuð.',
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vista.ai-credits.limit.description-unknown':
    'Stofnunin þín hefur náð útgjaldamörkum sínum fyrir AI-inneignir, svo Sanity Agent Actions er í bið þar til næsta mánaðar eða þar til mörkin eru hækkuð.',
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vista.ai-credits.limit.learn-more': 'Hvernig AI-inneignir virka',
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vista.ai-credits.limit.manage': 'Stjórna AI-inneignum',
  /** Title of the card shown where the organization is out of AI credits */
  'vista.ai-credits.limit.title': 'AI-inneignir uppurnar',
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vista.ai-credits.usage': 'AI-notkun',
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vista.ai-credits.used': '{{used}} AI-inneignir notaðar í þessum mánuði.',
  /** Button in the request column's action bar naming the API version requests go out with */
  'vista.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vista.api-version.button-cdn': 'API CDN {{version}}',
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vista.api-version.button-invalid': 'Ókláruð API-útgáfa',
  /** Tooltip of the API version button */
  'vista.api-version.tooltip':
    'Fyrirspurnir keyra á API-útgáfu {{version}}. Veldu til að breyta því í Valkostum.',
  /** Tooltip of the API version button while queries go through the API CDN */
  'vista.api-version.tooltip-cdn':
    'Fyrirspurnir keyra á API CDN með API-útgáfu {{version}}. Veldu til að breyta því í Valkostum.',
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vista.api-version.tooltip-cdn-blocked':
    'Fyrirspurnir keyra á API með API-útgáfu {{version}}, ekki á API CDN: það þjónar ekki {{perspective}} sjónarhorninu. Veldu til að breyta því í Valkostum.',
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vista.api-version.tooltip-invalid':
    'API-útgáfan í Valkostum er ókláruð, svo ekkert er hægt að sækja fyrr en hún er fullkláruð.',
  /** Tooltip of the API version button while a selected variant forces the variants API version */
  'vista.api-version.tooltip-locked':
    'Fyrirspurnir keyra á API-útgáfu {{version}}, sem valið afbrigði þarfnast.',
  /** Label of the document after the change in the Delta panel */
  'vista.delta.after': 'Eftir',
  /** Label of the document before the change in the Delta panel */
  'vista.delta.before': 'Fyrir',
  /** What the Delta panel does */
  'vista.delta.description':
    'Keyrir fyrirspurnina í delta-ham, líkt og GROQ-knúin vefkrókar (webhooks), hlustendur og Sanity Functions gera: before() og after() eru skjal fyrir og eftir breytingu, @ er skjalið eftir breytinguna, og delta::changedAny() ber þau saman. Þetta keyrir í vafranum með groq-js. Tóm hlið þýðir ekkert skjal: breytingin býr það til eða eyðir því.',
  /** Label of the document ID field in the Delta panel */
  'vista.delta.document-id': 'Skjalnúmer',
  /** Shown when there is a query but no documents to compare */
  'vista.delta.empty': 'Hladdu sögu skjals, eða skrifaðu skjölin í Fyrir og Eftir.',
  /** Shown when the query fails in delta mode */
  'vista.delta.failed': 'Ekki var hægt að keyra fyrirspurnina í delta-ham: {{message}}',
  /** Shown when the After document is not valid JSON */
  'vista.delta.invalid-after': 'Eftir er ekki gilt JSON: {{message}}',
  /** Shown when the Before document is not valid JSON */
  'vista.delta.invalid-before': 'Before er ekki gilt JSON: {{message}}',
  /** Button loading the document's revisions from the History API */
  'vista.delta.load': 'Hlaða ferli',
  /** Shown when the history could not be loaded */
  'vista.delta.load-failed': 'Ekki tókst að hlaða ferlinu: {{message}}',
  /** A delta filter that is true for the change */
  'vista.delta.matches':
    'Samsvarar: webhook eða fall með þessari síu keyrir fyrir þessa breytingu.',
  /** A delta filter that is false for the change */
  'vista.delta.no-match':
    'Samsvarar ekki: webhook eða fall með þessari síu keyrir ekki fyrir þessa breytingu.',
  /** Shown while the query or its params cannot be sent */
  'vista.delta.no-request':
    'Lagaðu fyrirspurnina og færibreytur hennar til að keyra hana í delta-ham.',
  /** Heading of the delta result */
  'vista.delta.result': 'Niðurstaða',
  /** The After choice for a change that deletes the document */
  'vista.delta.revision.none-after': 'Ekkert: breytingin eyðir skjalinu',
  /** The Before choice for a change that creates the document */
  'vista.delta.revision.none-before': 'Ekkert: breytingin býr til skjalið',
  /** A revision in the Before and After lists */
  'vista.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vista.drawer.close': 'Loka spjaldi',
  /** Explanation at the top of the Explain panel */
  'vista.explain.description':
    'Fyrirspurnaráætlunin er það hvernig Content Lake keyrir fyrirspurnina: hvað hún les, síar og raðar á meðan lestri stendur, og hvað er skilið eftir fyrir síðari skref. „Útskýrðu þetta fyrir mér“ lætur Sanity Agent Actions lýsa fyrirspurninni og áætlun hennar í venjulegu máli, sem notar eina AI-inneign.',
  /** Shown in the Explain panel while there is no valid query to explain */
  'vista.explain.empty': 'Skrifaðu fyrirspurn til að útskýra hana.',
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vista.explain.explain': 'Útskýrðu þetta fyrir mér',
  /** Shown when the explanation could not be written */
  'vista.explain.failed': 'Ekki tókst að útskýra fyrirspurnina: {{message}}',
  /** A count the index computes without reading the documents */
  'vista.explain.insight.aggregate': 'Talið í vísitölunni, án þess að lesa skjölin.',
  /** A subquery the plan runs once for all documents */
  'vista.explain.insight.batched-subquery':
    'Undirfyrirspurnin keyrir einu sinni fyrir öll skjölin, í einni magnsóttri sókn, ekki einu sinni fyrir hvert skjal.',
  /** Part of the filter runs in memory; the expression follows */
  'vista.explain.insight.filter-in-memory':
    'Hluti síunnar keyrir í minni, eftir lestur: hvert skjal sem vísitalan hleypir í gegn er lesið fyrst, sem verður hægt á stórum gagnasöfnum. Tengingar (->) og föll í síu geta ekki notað vísitöluna.',
  /** The index sorts and limits while reading */
  'vista.explain.insight.index-sort-limit':
    'Vísitalan raðar og takmarkar skjölin á meðan þau eru lesin.',
  /** The plan slices in memory */
  'vista.explain.insight.slice-in-memory':
    'Sneiðin er tekin í minni eftir lestur, ekki sem takmörk á meðan lestri stendur.',
  /** The plan sorts in memory */
  'vista.explain.insight.sort-in-memory':
    'Röðun fer fram í minni, eftir að öll samsvörun hefur verið lesin. Raðaðu eftir eiginleikum sem vísitalan getur raðað eftir.',
  /** Link under the plan insights to the guide on fast queries */
  'vista.explain.insights.guide': 'Hágæða GROQ',
  /** Heading of the plan insights in the Explain panel */
  'vista.explain.insights.title': 'Hvað stendur upp úr',
  /** Button in the Explain panel fetching the query plan */
  'vista.explain.plan': 'Sýna fyrirspurnaráætlun',
  /** Shown when the query plan could not be fetched */
  'vista.explain.plan-failed': 'Ekki tókst að sækja fyrirspurnaráætlunina: {{message}}',
  /** Heading of the query plan in the Explain panel */
  'vista.explain.plan-title': 'Fyrirspurnaráætlun',
  /** Toast shown after a code snippet was copied */
  'vista.export-query.copied': 'Kóðabút afritaður á klippiborð',
  /** Label for the button that copies a code snippet */
  'vista.export-query.copy': 'Afrita kóðabút',
  /** Explanation at the top of the export query dialog */
  'vista.export-query.description':
    'Keyrðu þessa fyrirspurn utan vinnustofunnar með einum af þessum kóðabútum.',
  /** Title of the dialog that exports the query as code snippets */
  'vista.export-query.title': 'Flytja út fyrirspurn',
  /** Note about authentication in the export query dialog */
  'vista.export-query.token-note':
    'Lokuð gagnasöfn þurfa API-tóka. Opin gagnasöfn geta sleppt Authorization-hausnum.',
  /** Toast shown after the generated code was copied */
  'vista.export-types.copied': 'Kóði afritaður á klippiborð',
  /** Label for the button that copies the generated code */
  'vista.export-types.copy': 'Afrita kóða',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vista.export-types.empty':
    'Sæktu fyrirspurnina fyrst svo til sé niðurstaða til að álykta tegundir út frá.',
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vista.export-types.schema-error': 'Mat á skema mistókst: {{message}}',
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vista.export-types.source.result':
    'Ályktað út frá sóttri niðurstöðu, þar sem ekki var hægt að meta fyrirspurnina út frá vinnurýmisskemanu.',
  /** Note shown when the types were derived from the workspace schema */
  'vista.export-types.source.schema':
    'Ályktað út frá vinnurýmisskemanu, á sama hátt og sanity typegen gerir það.',
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vista.export-types.stale-result':
    'Niðurstaðan sem sýnd er var sótt fyrir aðra fyrirspurn eða breytur. Sæktu núverandi fyrirspurn fyrst svo til sé niðurstaða til að álykta tegundir út frá.',
  /** Title of the dialog exporting TypeScript types for the result */
  'vista.export-types.title-typescript': 'Flytja út TypeScript',
  /** Title of the dialog exporting a Zod schema for the result */
  'vista.export-types.title-zod': 'Flytja út Zod',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vista.functions.add': 'Bæta við fyrirspurn',
  /** Shown on a library function the query declares the same way */
  'vista.functions.declared': 'Í þessari fyrirspurn',
  /** Lint action on a call of a library function the query does not declare */
  'vista.functions.editor.add-from-library': 'Lýsa yfir það',
  /** Note in a function's hover documentation: the API version it needs */
  'vista.functions.editor.api-version': 'Þarfnast API-útgáfu {{version}} eða nýrri',
  /** Detail of a completion for a custom function the query declares */
  'vista.functions.editor.completion-declared': 'í þessari fyrirspurn',
  /** Detail of a completion for a library function, which declares it too */
  'vista.functions.editor.completion-library': 'úr safninu þínu',
  /** Note in the hover documentation of a custom function the query declares */
  'vista.functions.editor.declared-on': 'Sérsniðin fall, yfirlýst á línu {{line}}',
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vista.functions.editor.delta-only':
    'Virkar aðeins í delta-ham, þar sem vefkrókar og Sanity Functions keyra síurnar sínar',
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vista.functions.editor.extract': 'Draga út í fall',
  /** Note in the hover documentation of a library function the query does not declare */
  'vista.functions.editor.in-library': 'Í fallasafninu þínu, ekki lýst yfir í þessari fyrirspurn',
  /** Link at the end of a built-in function's hover documentation */
  'vista.functions.editor.reference': 'GROQ aðgerðaviðmiðun',
  /** Explanation under the library heading in the Functions panel */
  'vista.functions.library.description':
    'Geymt í þessum vafra fyrir öll gagnasöfn verkefnisins. Sjálfvirkar útfyllingar bjóða upp á þessar aðgerðir, og málvísun býður upp á að lýsa yfir þær sem fyrirspurnir kalla á.',
  /** Shown in the Functions panel while the library is empty */
  'vista.functions.library.empty':
    'Vistaðu aðgerð sem fyrirspurnin lýsir yfir til að nota hana í öðrum fyrirspurnum.',
  /** Heading of the functions library in the Functions panel */
  'vista.functions.library.title': 'Safn',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vista.functions.query.empty':
    'Lýstu yfir sérsniðnum aðgerðum efst í fyrirspurninni, eða settu bendilinn í vörpun, eins og author->{name}, og ýttu á útdráttarhnappinn fyrir ofan ritilinn ({{shortcut}}).',
  /** Heading of the functions the query declares in the Functions panel */
  'vista.functions.query.title': 'Í þessari fyrirspurn',
  /** Removes a function from the library */
  'vista.functions.remove': 'Fjarlægja úr safninu',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vista.functions.replace': 'Skipta út í fyrirspurn',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vista.functions.reveal': 'Sýna {{name}} í ritlinum',
  /** Button of a function the query declares that is not in the library yet */
  'vista.functions.save': 'Vista í safn',
  /** Shown on a function the query declares the way the library has it */
  'vista.functions.saved': 'Vistað',
  /** Button of a function the query declares differently from the library's version */
  'vista.functions.update': 'Uppfæra safn',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vista.generate.button': 'Búa til fyrirspurn',
  /** Closes the generate query bar */
  'vista.generate.close': 'Loka',
  /** Explanation under the generate query field */
  'vista.generate.description':
    'Sanity Agent Actions skrifa GROQ út frá lýsingu þinni og skjalategundunum, og Content Lake athugar hverja tilraun; hver tilraun notar eitt AI inneign. Það skiptir út fyrirspurn þessa flipa og keyrir hana; afturkalla í ritlinum færir fyrri fyrirspurn til baka.',
  /** Shown when no query could be generated, above the reason */
  'vista.generate.failed': 'Ekki tókst að búa til fyrirspurnina',
  /** Accessible label of the description field in the generate query bar */
  'vista.generate.label': 'Hvað ætti fyrirspurnin að sækja?',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vista.generate.open-anyway': 'Opna síðustu tilraun',
  /** Placeholder of the description field in the generate query bar */
  'vista.generate.placeholder': '10 nýjustu höfundarnir, raðað eftir eftirnafni og svo fornafni',
  /** Shown while the first attempt at a query is written */
  'vista.generate.progress': 'Skrifa fyrirspurn…',
  /** Shown while a rejected attempt is retried */
  'vista.generate.progress-retry': 'Laga fyrirspurn (tilraun {{attempt}} af {{max}})…',
  /** Button generating the query */
  'vista.generate.submit': 'Búa til',
  /** Badge on a history entry the API CDN answered */
  'vista.history.cdn': 'API CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vista.history.cdn-cache-hit': 'CDN skyndiminnistreffi',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vista.history.changed': 'Breytt',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vista.history.changes': 'Breytingar',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vista.history.changes-failed': 'Ekki var hægt að sýna breytingarnar.',
  /** Button retrying to show the changes of a history entry */
  'vista.history.changes-retry': 'Reyna aftur',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vista.history.compared-with': 'Borið saman við sóknina klukkan {{time}}',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vista.history.diff.params': 'Færibreytur',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vista.history.diff.query': 'Fyrirspurn',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vista.history.diff.query-formatting-only': 'Aðeins framsetningin breyttist',
  /** Label of the diff of the query result in a history entry's changes */
  'vista.history.diff.result': 'Niðurstaða',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vista.history.diff.url': 'Vefslóð fyrirspurnar',
  /** Empty state of the history panel */
  'vista.history.empty': 'Ekkert sótt enn',
  /** Status label for a failed fetch in the history */
  'vista.history.failed': 'Mistókst',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vista.history.hide-hidden': 'Fela þau',
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vista.history.hiding': 'Felur {{fields}}',
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vista.history.only-hidden-changed': 'Aðeins falin svæði breyttust',
  /** History reason: a tab opened with a generated query fetched it */
  'vista.history.reason.generated': 'Mynduð fyrirspurn',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vista.history.reason.link': 'Tengill opnaður',
  /** History reason: a live event matched the query's sync tags */
  'vista.history.reason.live': 'Rauntímauppfærsla',
  /** History reason: the live connection asked every client to refetch */
  'vista.history.reason.live-restart': 'Rauntímatenging endurræst',
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vista.history.reason.live-start': 'Rauntímasókn hafin',
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vista.history.reason.load': 'Fyrirspurn hlaðin',
  /** History reason: the fetch button was pressed */
  'vista.history.reason.manual': 'Sóknarhnappur',
  /** History reason: mutations were applied from the Mutate panel */
  'vista.history.reason.mutation': 'Breytingar framkvæmdar',
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vista.history.reason.options': 'Stillingar breyttust',
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vista.history.reason.paste': 'Vefslóð límd inn',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vista.history.reason.resume': 'Sjálfvirk endursókn hófst að nýju',
  /** History reason: the keyboard shortcut was used */
  'vista.history.reason.shortcut': 'Flýtileið á lyklaborði',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vista.history.same-result': 'Sama niðurstaða',
  /** Button showing the hidden fields in a history entry's changes */
  'vista.history.show-hidden': 'Sýna þau',
  /** Next to a history entry's changes while the hidden fields are shown */
  'vista.history.showing-hidden': 'Sýni {{fields}}, falið sjálfgefið',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vista.history.too-large': 'Of stórt til að bera saman',
  /** A history entry whose result is the same as the previous result */
  'vista.history.unchanged': 'Engar breytingar',
  /** Shown in the Lint panel while the query has no lint findings */
  'vista.lint.empty':
    'Engar línugreiningarniðurstöður. Vandamál sem GROQ-línugreinirinn finnur í fyrirspurninni eru sýnd hér jafnóðum og þú skrifar; veldu eitt til að velja það í ritlinum.',
  /** Where a lint finding sits in the query, shown under its message */
  'vista.lint.position': 'Lína {{line}}, dálkur {{column}}',
  /** Severity badge of a lint finding */
  'vista.lint.severity.error': 'Villa',
  /** Severity badge of a lint finding */
  'vista.lint.severity.hint': 'Vísbending',
  /** Severity badge of a lint finding */
  'vista.lint.severity.info': 'Upplýsingar',
  /** Severity badge of a lint finding */
  'vista.lint.severity.warning': 'Viðvörun',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vista.lint.use-suggestion': 'Nota {{suggestion}}',
  /** Badge shown while a tab refetches automatically */
  'vista.live.active': 'Í beinni',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vista.live.button': 'Sækja í beinni',
  /** Tooltip of the Live button while automatic refetching is off */
  'vista.live.button.start': 'Sækja, og sækja svo aftur þegar skjölin í niðurstöðunni breytast',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vista.live.button.stop':
    'Hætta að sækja þegar skjölin í niðurstöðunni breytast. Sækja sækir samt eftir þörfum, fyrir niðurstöður sem engin skjalbreyting hefur áhrif á, eins og now()',
  /** Error shown when the live connection breaks */
  'vista.live.error': 'Tenging við rauntímauppfærslur rofnaði: {{message}}',
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vista.live.stop': 'Stöðva beina sendingu',
  /** Button in the Mutate panel adding a mutation to the list */
  'vista.mutate.add': 'Bæta við breytingu',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vista.mutate.add.create': 'Búa til skjal',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vista.mutate.add.delete': 'Eyða skjali',
  /** Adds a mutation deleting the documents of the shown result */
  'vista.mutate.add.delete-result': 'Eyða skjölunum í niðurstöðunni',
  /** Adds a mutation patching a document, its ID to fill in */
  'vista.mutate.add.patch': 'Breyta skjali',
  /** Adds a mutation patching the documents of the shown result */
  'vista.mutate.add.patch-result': 'Breyta skjölunum í niðurstöðunni',
  /** Button applying the mutations a dry run showed */
  'vista.mutate.apply': 'Beita á {{dataset}}',
  /** Heading of the error shown when applying the mutations failed */
  'vista.mutate.apply-failed': 'Breytingarnar voru ekki framkvæmdar',
  /** Next to Apply while the mutations as they are have had no dry run */
  'vista.mutate.apply-needs-preview': 'Beita sendir það sem forskoðun sýndi: keyrðu eina fyrst.',
  /** Option giving array items without a _key one */
  'vista.mutate.auto-keys': 'Bæta _key við fylkisfærslur sem vantar það',
  /** Under the option giving array items a _key */
  'vista.mutate.auto-keys.description':
    'Vinnurýmið þarf einn á hverri fylkisfærslu til að geta breytt henni.',
  /** Button showing a document's changes in the dry run */
  'vista.mutate.changes': 'Breytingar',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vista.mutate.changes-failed': 'Ekki var hægt að sýna breytingarnar.',
  /** Button retrying to show a document's changes */
  'vista.mutate.changes-retry': 'Reyna aftur',
  /** What the Mutate panel does */
  'vista.mutate.description':
    'Skrifaðu breytingar eins og Mutations API tekur við þeim, í lista: create, createOrReplace, createIfNotExists, delete og patch, eftir ID eða með GROQ fyrirspurn. Forskoðun sýnir hvað þær myndu gera við hvert skjal án þess að breyta neinu; Beita skrifar þær síðan í gagnasafnið í einni færslu, með þínum aðgangi.',
  /** What the API says went wrong with one of the mutations */
  'vista.mutate.failure-item': 'Breyting {{index}}: {{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vista.mutate.generate.button': 'Útbúa breytingar',
  /** Explanation under the generate mutations field */
  'vista.mutate.generate.description':
    'Sanity Agent Actions skrifa breytingarnar út frá lýsingu þinni, skjölunum í niðurstöðunni og tegundum þeirra, og forskoðun athugar hverja tilraun; hver tilraun notar eitt AI-inneign. Þær koma í stað breytinganna hér, þar sem afturkalla færir þær til baka; ekkert er skrifað fyrr en þú beitir þeim.',
  /** Shown when no mutations could be generated, above the reason */
  'vista.mutate.generate.failed': 'Ekki var hægt að útbúa breytingarnar',
  /** Accessible label of the description field in the generate mutations bar */
  'vista.mutate.generate.label': 'Hvað eiga breytingarnar að gera?',
  /** Placeholder of the description field in the generate mutations bar */
  'vista.mutate.generate.placeholder': 'Breyta titli skjalanna í niðurstöðunni í foobar',
  /** Shown while the first attempt at the mutations is written */
  'vista.mutate.generate.progress': 'Skrifa breytingarnar…',
  /** Shown while an attempt the dry run turned down is retried */
  'vista.mutate.generate.progress-retry': 'Lagfæri breytingarnar (tilraun {{attempt}} af {{max}})…',
  /** Under the dry run: the fields the diffs leave out */
  'vista.mutate.hiding': 'Breytingarnar sleppa {{fields}}, líkt og Saga gerir.',
  /** Shown when the mutations are not valid JSON */
  'vista.mutate.invalid-json': 'Breytingarnar eru ekki gilt JSON: {{message}}',
  /** Shown when a mutation does not name exactly one thing to do */
  'vista.mutate.invalid-mutation':
    'Breyting {{index}} þarf nákvæmlega eitt af create, createOrReplace, createIfNotExists, delete eða patch.',
  /** Label of the mutations editor */
  'vista.mutate.mutations': 'Breytingar',
  /** The dry run touched no documents */
  'vista.mutate.no-documents': 'Breytingarnar snerta engin skjöl.',
  /** Shown when the JSON is not a list of mutations */
  'vista.mutate.not-a-list':
    'Skrifaðu lista af breytingum, eina breytingu, eða fyrirspurnarmeginmál með lista af breytingum.',
  /** A document the mutations create */
  'vista.mutate.operation.create': 'Búa til',
  /** A document the mutations delete */
  'vista.mutate.operation.delete': 'Eyða',
  /** A document the mutations touch without changing its content */
  'vista.mutate.operation.none': 'Engin breyting',
  /** A document the mutations change */
  'vista.mutate.operation.update': 'Uppfæra',
  /** Button running the mutations as a dry run */
  'vista.mutate.preview': 'Prufukeyrsla',
  /** Heading of the error shown when the dry run failed */
  'vista.mutate.preview-failed': 'Prufukeyrslan mistókst',
  /** Heading of the dry run's outcome */
  'vista.mutate.preview-heading': 'Prufukeyrsla',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vista.mutate.stale':
    'Breytingarnar, gagnasafnið eða valkostirnir breyttust eftir þessa prufukeyrslu. Keyrðu hana aftur til að beita þeim.',
  /** How many documents the dry run changes and leaves as they are */
  'vista.mutate.summary': 'Breytt: {{changed}} · Óbreytt: {{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vista.network.cache': 'Skyndiminni',
  /** The API CDN answered from its cache */
  'vista.network.cache.hit': 'Fann í skyndiminni',
  /** Under the details of a CDN cache hit */
  'vista.network.cache.hit-explained':
    'CDN-ið svaraði með svari sem það hafði vistað í skyndiminni, frá staðsetningu nálægt þér; fyrirspurnin náði ekki til API-sins.',
  /** The API CDN answered with a response this session had not seen */
  'vista.network.cache.miss': 'Fann ekki í skyndiminni, að því er þessi lota kemst næst',
  /** The API answered, which caches nothing */
  'vista.network.cache.none': 'Ekkert, API-ið svarar hverri fyrirspurn með nýju efni',
  /** Shown in the Network panel while there is no response */
  'vista.network.empty':
    'Sæktu fyrirspurnina til að sjá hvaða endapunktur svaraði henni, hvort það var úr skyndiminni, og hvar hún var keyrð.',
  /** In the Network panel: the endpoint that answered */
  'vista.network.endpoint': 'Svarað af',
  /** The live API answered */
  'vista.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vista.network.endpoint.cdn': 'API CDN',
  /** In the Network panel: the region the query ran in */
  'vista.network.region': 'Fyrirspurn keyrð í',
  /** The response did not say where the query ran */
  'vista.network.region.unknown': 'Ekki tilkynnt',
  /** In the Network panel: the round trip and the time on the server */
  'vista.network.timing': 'Tími',
  /** The round trip and the server's time for the query, in milliseconds */
  'vista.network.timing.value': '{{e2e}}ms fram og til baka, {{server}}ms á þjóninum',
  /** In the Network panel: the trace of the request, for Sanity support */
  'vista.network.trace': 'Rakningarnúmer',
  /** Hint in the Network panel while queries go to the API */
  'vista.network.use-cdn-hint':
    'Kveiktu á Nota API CDN í Valkostum til að senda fyrirspurnir í gegnum CDN-ið.',
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vista.network.you': 'Þú',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vista.options.dataset.follows-workspace': 'Fylgir vinnusvæðinu',
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vista.options.dataset.pin': 'Festa gagnasafn',
  /** Hint under the dataset field while a dataset is pinned */
  'vista.options.dataset.pinned': 'Fest; vinnusvæðið gæti notað annað gagnasafn',
  /** Button that makes the tab follow the workspace's dataset again */
  'vista.options.dataset.use-workspace': 'Nota gagnasafn vinnusvæðis',
  /** Label for the "Include content source map" switch */
  'vista.options.include-source-map': 'Taka með heimildakortlagningu efnis (content source map)',
  /** Description for the "Include content source map" switch */
  'vista.options.include-source-map.description':
    'Bætir resultSourceMap við svarið, sem birtist í flipanum Heimildakortlagning efnis.',
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vista.options.perspective.global': 'Víðvært ({{name}})',
  /** Label of the switch that sends queries to the API CDN */
  'vista.options.use-cdn': 'Nota API CDN',
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vista.options.use-cdn.anonymous':
    'Þetta vinnusvæði skráir þig inn með vefköku, sem API CDN fær aldrei: það svarar eins og það myndi gera fyrir nafnlausan gest, með því sem opinbert gagnasafn sýnir.',
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vista.options.use-cdn.blocked':
    'API CDN þjónar ekki drögum eða útgáfum, svo fyrirspurnir með sjónarhorninu {{perspective}} fara til API. Með birt eða hrátt nota þær CDN.',
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vista.options.use-cdn.blocked.title': 'Fyrirspurnir fara til API, ekki CDN',
  /** Description of the API CDN switch */
  'vista.options.use-cdn.description':
    'Sendir fyrirspurnina til API CDN, líkt og useCdn: true í @sanity/client, með sjónarhornunum birt og hrátt: drög og útgáfur fara alltaf til API. Svör eru vistuð í skyndiminni í allt að eina mínútu; Netkerfisspjaldið sýnir þegar svar kom úr skyndiminni.',
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vista.options.use-cdn.use-published': 'Nota birt sjónarhorn',
  /** Label of the variant field */
  'vista.options.variant-label': 'Afbrigði',
  /** Variant option sending the navbar's variant, named */
  'vista.options.variant.global': 'Víðvært ({{name}})',
  /** Variant option sending the navbar's variant while none is selected there */
  'vista.options.variant.global-none': 'Víðvært (ekkert valið)',
  /** Variant option sending no variant */
  'vista.options.variant.none': 'Ekkert',
  /** Accessible label for collapsing a bottom panel */
  'vista.panel.collapse': 'Fella saman spjald',
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vista.panel.delta': 'Delta',
  /** Accessible label for expanding a bottom panel */
  'vista.panel.expand': 'Opna spjald',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vista.panel.explain': 'Útskýra',
  /** Label of the Functions tab in the response panel */
  'vista.panel.functions': 'Föll',
  /** Label of the "History" tab in the response panel */
  'vista.panel.history': 'Ferill',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vista.panel.lint': 'Lint',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vista.panel.mutate': 'Breyta',
  /** Label of the Network tab in the response panel */
  'vista.panel.network': 'Net',
  /** Label of the "Options" panel in the request column */
  'vista.panel.options': 'Valkostir',
  /** Label of the "Response" tab in the response panel */
  'vista.panel.response': 'Response',
  /** Label of the "Content Source Map" tab in the response panel */
  'vista.panel.source-map': 'Content Source Map',
  /** Button adding an item to a list param in the params form */
  'vista.params-form.add-item': 'Bæta við hlut',
  /** Placeholder of a params form field that takes any JSON value */
  'vista.params-form.any-placeholder': 'Hvers kyns JSON-gildi; annar texti er sendur sem strengur',
  /** Shown in the params form when the query uses no params */
  'vista.params-form.empty': 'Fyrirspurnin notar engar breytur. Hvert $nafn í henni fær reit hér.',
  /** Shown in the params form while the params JSON cannot be parsed */
  'vista.params-form.invalid-json':
    'Breyturnar eru ekki gilt JSON. Lagaðu þær í JSON-skjánum til að breyta þeim hér.',
  /** A boolean param's value is not true or false; it is sent anyway */
  'vista.params-form.invalid.boolean': 'Ekki satt eða ósatt; sent sem {{value}}',
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vista.params-form.invalid.document-type': 'Ekki skjalategund í þessu vinnusvæði; sent samt',
  /** A whole number param (a slice bound) holds a fraction */
  'vista.params-form.invalid.integer': 'Ekki heiltala, sem sneiðar þurfa',
  /** A list param's value is not a list; it is sent anyway */
  'vista.params-form.invalid.list': 'Ekki listi; sent sem {{value}}',
  /** A number param's value is not a number; it is sent anyway */
  'vista.params-form.invalid.number': 'Ekki tala; sent sem texti',
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vista.params-form.invalid.option': 'Ekki eitt af þekktum gildum; sent samt',
  /** A text param's value is not text; it is sent anyway */
  'vista.params-form.invalid.string': 'Ekki texti; sent sem {{value}}',
  /** Accessible label of an item input of a list param in the params form */
  'vista.params-form.item-label': '${{name}}, hlutur {{index}}',
  /** Placeholder of an item input of a list param in the params form */
  'vista.params-form.item-placeholder': 'Hlutur',
  /** Under a params form field whose param has no value */
  'vista.params-form.missing': 'Ekki stillt: fyrirspurnin mistekst þar til hún hefur gildi',
  /** Shown in the params form when the workspace schema could not be read */
  'vista.params-form.no-schema':
    'Tegundir koma eingöngu úr fyrirspurninni: ekki var hægt að lesa skema vinnusvæðisins.',
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vista.params-form.not-set': 'Ekki stillt',
  /** Button setting a date and time param to the current time */
  'vista.params-form.now': 'Núna',
  /** Button removing a param the query does not use from the params */
  'vista.params-form.remove': 'Fjarlægja',
  /** Accessible label of the button removing an item from a list param */
  'vista.params-form.remove-item': 'Fjarlægja hlut',
  /** Shown in the params form when the query does not parse */
  'vista.params-form.syntax-error':
    'Fyrirspurnin þáttast ekki, svo breytur hennar eru taldar upp án tegunda.',
  /** Type hint of a params form field: any JSON value */
  'vista.params-form.type.any': 'hvers kyns JSON-gildi',
  /** Type hint of a params form field: true or false */
  'vista.params-form.type.boolean': 'satt eða ósatt',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vista.params-form.type.datetime': 'dagsetning og tími (ISO 8601)',
  /** Type hint of a params form field: a document ID */
  'vista.params-form.type.document-id': 'skjalakenni',
  /** Type hint of a params form field: one of the workspace's document types */
  'vista.params-form.type.document-type': 'skjalstegund',
  /** Type hint of a params form field: a whole number */
  'vista.params-form.type.integer': 'heiltala',
  /** Type hint of a params form field: a list of values */
  'vista.params-form.type.list': 'listi, hvert {{type}}',
  /** Type hint of a params form field: a number */
  'vista.params-form.type.number': 'tala',
  /** Type hint of a params form field: text */
  'vista.params-form.type.string': 'texti',
  /** Heading of the params the query does not use, listed in the params form */
  'vista.params-form.unused': 'Ekki notað í fyrirspurninni',
  /** Before the expressions that use a param, in the params form */
  'vista.params-form.used-in': 'Notað í',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vista.params.fit-height': 'Stærð löguð að efni, {{height}} px',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vista.params.resize':
    'Breyta stærð breyta: dragðu eða notaðu örvatakkana; tvísmelltu eða ýttu á Enter til að laga aftur að efninu',
  /** Tab showing the params as a form inferred from the query */
  'vista.params.view.form': 'Eyðublað',
  /** Tab showing the params as JSON */
  'vista.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vista.params.view.label': 'Breyta breytum sem',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vista.paste.parsed': 'Fyrirspurn hlaðin inn úr límdri vefslóð',
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vista.paste.unavailable-variant':
    'Límda vefslóðin notaði afbrigðið „{{variant}}“; veldu það í leiðarstikunni til að keyra fyrirspurnina með því.',
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vista.paste.unknown-dataset':
    'Gagnamengið „{{dataset}}“ í límdu vefslóðinni er ekki tiltækt hér, haldið er í núverandi gagnamengi.',
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vista.paste.unsupported-perspective':
    'Sjónarhornið í límdu vefslóðinni er ekki stutt hér, haldið er í núverandi sjónarhorn.',
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vista.paste.variants-disabled':
    'Límda vefslóðin notaði afbrigðið „{{variant}}“; þetta vinnusvæði hefur slökkt á afbrigðum, svo fyrirspurnin keyrir án þess.',
  /** Accessible label for the query actions menu */
  'vista.query.actions': 'Fyrirspurnaraðgerðir',
  /** Tooltip when automatic refetching is not available for the API version */
  'vista.query.auto-refetch.unsupported':
    'Sjálfvirk endursókn gagna krefst API útgáfu v2021-03-25 eða nýrri.',
  /** Toast shown after the query was copied */
  'vista.query.copied': 'Fyrirspurn afrituð á klippiborð',
  /** Menu item copying the query text */
  'vista.query.copy': 'Afrita fyrirspurn',
  /** Menu item opening the export query dialog */
  'vista.query.export': 'Flytja fyrirspurn út…',
  /** Menu item reformatting the query */
  'vista.query.prettify': 'Fegra fyrirspurn',
  /** Toast shown when the query could not be reformatted */
  'vista.query.prettify.failed': 'Ekki var hægt að fegra fyrirspurnina',
  /** Menu item saving the query to the personal saved queries */
  'vista.query.save': 'Vista fyrirspurn',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vista.query.stop': 'Stöðva',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vista.query.stop.description': 'Stöðva sókn',
  /** Explanation in the settings section about the redesigned experience */
  'vista.redesign.settings.description':
    'Þú ert að nota endurhannaða Vision tólið. Ef þú skiptir til baka er flipunum þínum og stillingum haldið eftir í þessum vafra fyrir næsta skipti sem þú prófar það.',
  /** Title of the settings section about the redesigned experience */
  'vista.redesign.settings.title': 'Endurhönnuð Vision (beta)',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vista.redesign.switch-to-classic': 'Skipta yfir í hefðbundið Vision',
  /** Toast button that switches to the redesigned tool */
  'vista.redesign.toast.accept': 'Prófa núna',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.description':
    'Fyrirspurnaflipar, bein endursókn, nánari upplýsingar um svör og útflutningur. Þú getur skipt til baka hvenær sem er.',
  /** Toast button that hides the invitation */
  'vista.redesign.toast.dismiss': 'Ekki núna',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.title': 'Prófaðu endurhannað Vision',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vista.redesign.try': 'Prófa endurhönnunina',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vista.redesign.try.description':
    'Skiptu yfir í endurhannaða Vision, í beta. Þú getur skipt til baka hvenær sem er úr hliðarstikunni þess.',
  /** Empty state of the response panel before anything was fetched */
  'vista.response.empty': 'Ekkert sótt enn',
  /** Label for the payload size in the response tab */
  'vista.response.payload-size': 'Stærð gagnapakka',
  /** Label for the sync tags in the response tab */
  'vista.response.sync-tags': 'Samstillingarmerki',
  /** Shown when the response carried no sync tags */
  'vista.response.sync-tags.none': 'Engin samstillingarmerki í svarinu',
  /** Accessible label for the result actions menu */
  'vista.result.actions': 'Aðgerðir fyrir niðurstöðu',
  /** Toast shown after the result was copied */
  'vista.result.copied': 'Niðurstaða afrituð á klippiborð',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vista.result.copied-value': '{{path}} afritað',
  /** Menu item and button copying the result as JSON */
  'vista.result.copy': 'Afrita niðurstöðu',
  /** Button next to each property in the result tree, copying its value */
  'vista.result.copy-value': 'Afrita gildi',
  /** Empty state of the result view */
  'vista.result.empty': 'Keyrðu fyrirspurnina til að sjá niðurstöðu hér',
  /** Button exporting the result as CSV */
  'vista.result.export-csv': 'Flytja út CSV',
  /** Button exporting the result as JSON */
  'vista.result.export-json': 'Flytja út JSON',
  /** Menu item opening the TypeScript export dialog */
  'vista.result.export-typescript': 'Flytja út TypeScript…',
  /** Menu item opening the Zod export dialog */
  'vista.result.export-zod': 'Flytja út Zod…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vista.result.graph.collapse': 'Fela það sem hann inniheldur',
  /** Button fitting the whole graph in view */
  'vista.result.graph.fit': 'Passa við glugga',
  /** Accessible label of the graph, saying how to move around in it */
  'vista.result.graph.label':
    'Niðurstöðurit: dragðu til að hreyfa, skrunaðu til að aðdraga; þegar fókus er á því færa örvatakkar, + og - aðdraga, 0 passar við glugga',
  /** Ends the note on a graph that leaves part of this result out */
  'vista.result.graph.left-out-hint': 'Tré- og JSON-skjáir sýna allt saman.',
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vista.result.graph.node-limit': 'Aðeins fyrstu {{nodes}} hlutirnir og fylkin eru teiknuð.',
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vista.result.graph.partial': 'Aðeins fyrstu {{rows}} færslurnar eru taldar upp fyrir {{nodes}}.',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vista.result.graph.partial.node': '{{name}} ({{entries}} færslur)',
  /** Title of the graph node of the result itself */
  'vista.result.graph.root': 'niðurstaða',
  /** Button zooming into the graph */
  'vista.result.graph.zoom-in': 'Þysja inn',
  /** Button zooming out of the graph */
  'vista.result.graph.zoom-out': 'Þysja út',
  /** Tab showing the result as a graph of its objects and arrays */
  'vista.result.view.graph': 'Rit',
  /** Tab showing the result as indented JSON text, to select and copy from */
  'vista.result.view.json': 'JSON',
  /** Accessible label of the tabs that switch how the result shows */
  'vista.result.view.label': 'Niðurstöðuskjár',
  /** Tab showing the result as a tree to browse */
  'vista.result.view.tree': 'Tré',
  /** Empty state of the saved queries panel */
  'vista.saved.empty':
    'Engar vistaðar fyrirspurnir ennþá. Vistaðu núverandi fyrirspurn með + hnappinum.',
  /** Empty state of a query list when the search matches nothing */
  'vista.saved.empty-search': 'Engar fyrirspurnir passa við leitina þína',
  /** Menu item loading a saved query into the active tab */
  'vista.saved.load-in-current-tab': 'Hlaða inn í núverandi flipa',
  /** Menu item opening a saved query in a new tab */
  'vista.saved.open-in-new-tab': 'Opna í nýjum flipa',
  /** Menu item renaming a saved query */
  'vista.saved.rename': 'Endurnefna',
  /** Accessible label for the button saving the current query */
  'vista.saved.save-current': 'Vista núverandi fyrirspurn',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vista.saved.unavailable-variant':
    'Þessi vistaða fyrirspurn notaði afbrigðið "{{variant}}"; veldu það í yfirstikunni til að keyra fyrirspurnina með því.',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vista.saved.unknown-dataset':
    'Gagnasafnið "{{dataset}}" fyrir þessa vistuðu fyrirspurn er ekki tiltækt hér, haldið er í núverandi gagnasafn.',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vista.saved.variants-disabled':
    'Þessi vistaða fyrirspurn notaði afbrigðið "{{variant}}"; í þessu vinnusvæði eru afbrigði óvirk, svo fyrirspurnin keyrir án þess.',
  /** Button in the settings dialog that clears the stored state */
  'vista.settings.clear-storage': 'Hreinsa geymslu',
  /** Confirmation button for clearing the storage */
  'vista.settings.clear-storage.confirm': 'Já, hreinsa geymslu',
  /** Explanation of what clearing the storage does */
  'vista.settings.clear-storage.description':
    'Eyðir vistuðum fyrirspurnum þínum og fallasafninu, endurstillir opna flipa og þessar sjálfgefnu stillingar í þessum vafra og fer aftur í eldri útgáfu af Vision tólinu. Deildar fyrirspurnir eru varðveittar.',
  /** Toast shown when the saved queries could not be cleared */
  'vista.settings.clear-storage.error': 'Ekki tókst að hreinsa vistaðar fyrirspurnir',
  /** Toast shown after the storage was cleared */
  'vista.settings.clear-storage.success': 'Geymsla hreinsuð',
  /** Explanation at the top of the settings dialog */
  'vista.settings.description':
    'Sjálfgefnar stillingar fyrir nýja flipa. Opnir flipar halda sínum eigin valkostum.',
  /** Explains the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.description':
    'Einn reitarslóð á línu. Slóð passar á öllu dýpi niðurstöðu, þannig að _rev felur útgáfu allra skjala í henni. Hver samanburður (diff) getur samt sýnt þau.',
  /** Button restoring the default fields left out of History diffs */
  'vista.settings.history-diff.reset': 'Endurstilla á sjálfgefið',
  /** Label of the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.title': 'Reitir faldir úr History-samanburði',
  /** Title of the settings dialog */
  'vista.settings.title': 'Stillingar',
  /** Empty state of the shared queries panel */
  'vista.shared.empty':
    'Engar deildar fyrirspurnir ennþá. Deildu vistaðri fyrirspurn til að gera hana aðgengilega öllum sem nota þennan gagnagrunn (dataset).',
  /** Shortcut description: close dialogs and menus */
  'vista.shortcuts.close': 'Loka gluggum og valmyndum',
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vista.shortcuts.complete': 'Ljúka við fallanafn',
  /** Shortcut description: copy the query */
  'vista.shortcuts.copy-query': 'Afrita fyrirspurnina',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vista.shortcuts.extract-function': 'Draga út vörpunina við bendilinn sem fall',
  /** Shortcut description: run the query */
  'vista.shortcuts.fetch': 'Sækja fyrirspurnina',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vista.shortcuts.next-finding': 'Fara á næstu lint-niðurstöðu',
  /** Shortcut description: reformat the query */
  'vista.shortcuts.prettify': 'Fegra fyrirspurnina',
  /** Title of the keyboard shortcuts dialog */
  'vista.shortcuts.title': 'Flýtilyklar',
  /** Sidebar toggle: show icons only */
  'vista.sidebar.collapse': 'Minnka hliðarslá',
  /** Sidebar toggle: show labels next to the icons */
  'vista.sidebar.expand': 'Stækka hliðarslá',
  /** Accessible label for the sidebar navigation */
  'vista.sidebar.label': 'Vista hliðarslá',
  /** Sidebar item and drawer title for personal saved queries */
  'vista.sidebar.saved-queries': 'Vistaðar fyrirspurnir',
  /** Sidebar item opening the settings dialog */
  'vista.sidebar.settings': 'Stillingar',
  /** Sidebar item and drawer title for shared queries */
  'vista.sidebar.shared-queries': 'Deildar fyrirspurnir',
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vista.sidebar.shortcuts': 'Flýtilyklar',
  /** Empty state of the content source map panel */
  'vista.source-map.empty':
    'Ekkert innihaldsupprunakort í svarinu. Kveiktu á „Include content source map“ undir Valkostum og sæktu aftur.',
  /** Accessible label of the divider between the result and the response details panel */
  'vista.split.bottom-panel':
    'Breyttu stærð á svarupplýsingaglugganum: dragðu eða notaðu örvatakkana; Home og End fara í mörkin, Enter endurstillir',
  /** Accessible label of the divider between the request and response panes */
  'vista.split.request-response':
    'Breyttu stærð á fyrirspurnar- og svarglugganum: dragðu eða notaðu örvatakkana; Home og End fara í mörkin, Enter endurstillir',
  /** Accessible label for the button closing a query tab */
  'vista.tabs.close-tab': 'Loka flipa',
  /** Accessible label for the list of query tabs */
  'vista.tabs.label': 'Fyrirspurnaflipar',
  /** Accessible label for the button opening a new query tab */
  'vista.tabs.new-tab': 'Nýr flipi',
  /** Placeholder of the input renaming a tab */
  'vista.tabs.title-placeholder': 'Titill flipa',
  /** Title of a tab whose query is still empty */
  'vista.tabs.untitled': 'Ónefnd fyrirspurn',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vista.webmcp.check-query': 'Athuga GROQ-fyrirspurn í Vision',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vista.webmcp.describe-schema': 'Lýsa skemanu í Vision',
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vista.webmcp.explain-query': 'Útskýra GROQ-fyrirspurn í Vision',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vista.webmcp.get-state': 'Lesa opna Vision-flipann',
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vista.webmcp.open-query': 'Opna GROQ-fyrirspurn í Vision',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vista.webmcp.preview-mutations': 'Forskoða breytingar í Vision',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vista.webmcp.run-query': 'Keyra GROQ-fyrirspurn í Vision',
})
