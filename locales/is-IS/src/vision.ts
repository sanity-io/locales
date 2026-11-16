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
  'vision.agent-actions.credits': 'Notar eina AI-inneign fyrir hverja fyrirspurn',
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vision.ai-credits.balance': '{{balance}} af {{quota}} AI-inneignum eftir í þessum mánuði.',
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vision.ai-credits.deficit':
    '{{used}} AI-inneignir notaðar í þessum mánuði, {{deficit}} fleiri en þær {{quota}} sem fylgja.',
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vision.ai-credits.limit.description':
    'Stofnunin þín hefur notað {{used}} af {{quota}} AI-inneignum sínum í þessum mánuði, svo Sanity Agent Actions eru í bið þar til næsta mánuðar eða þar til útgjaldamörkin eru hækkuð.',
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vision.ai-credits.limit.description-unknown':
    'Stofnunin þín hefur náð útgjaldamörkum sínum fyrir AI-inneignir, svo Sanity Agent Actions eru í bið þar til næsta mánuðar eða þar til mörkin eru hækkuð.',
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vision.ai-credits.limit.learn-more': 'Hvernig AI-inneignir virka',
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vision.ai-credits.limit.manage': 'Stjórna AI-inneignum',
  /** Title of the card shown where the organization is out of AI credits */
  'vision.ai-credits.limit.title': 'Búið með AI-inneignir',
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vision.ai-credits.usage': 'AI-notkun',
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vision.ai-credits.used': '{{used}} AI-inneignir notaðar í þessum mánuði.',
  /** Button in the request column's action bar naming the API version requests go out with */
  'vision.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vision.api-version.button-cdn': 'API CDN {{version}}',
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vision.api-version.button-invalid': 'Ókláruð API-útgáfa',
  /** Tooltip of the API version button */
  'vision.api-version.tooltip':
    'Fyrirspurnir keyra á API-útgáfu {{version}}. Veldu til að breyta því í valkostum.',
  /** Tooltip of the API version button while queries go through the API CDN */
  'vision.api-version.tooltip-cdn':
    'Fyrirspurnir keyra á API CDN með API-útgáfu {{version}}. Veldu til að breyta því í valkostum.',
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vision.api-version.tooltip-cdn-blocked':
    'Fyrirspurnir keyra á API með API-útgáfu {{version}}, ekki API CDN: það þjónar ekki {{perspective}} sjónarhorninu. Veldu til að breyta því í valkostum.',
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vision.api-version.tooltip-invalid':
    'API-útgáfan í valkostum er ókláruð, svo ekkert er hægt að sækja fyrr en hún er fullgerð.',
  /** Tooltip of the API version button while a selected variant forces the variants API version */
  'vision.api-version.tooltip-locked':
    'Fyrirspurnir keyra á API-útgáfu {{version}}, sem valið afbrigði þarfnast.',
  /** Label of the document after the change in the Delta panel */
  'vision.delta.after': 'Eftir',
  /** Label of the document before the change in the Delta panel */
  'vision.delta.before': 'Fyrir',
  /** What the Delta panel does */
  'vision.delta.description':
    'Keyrir fyrirspurnina í delta-ham, eins og GROQ-knúin vefkróka (webhooks), hlustendur og Sanity Functions gera: before() og after() eru skjal fyrir og eftir breytingu, @ er skjalið eftir hana, og delta::changedAny() ber þau saman. Þetta keyrir í vafranum með groq-js. Tómur hluti þýðir ekkert skjal: breytingin býr það til eða eyðir því.',
  /** Label of the document ID field in the Delta panel */
  'vision.delta.document-id': 'Auðkenni skjals',
  /** Shown when there is a query but no documents to compare */
  'vision.delta.empty': 'Hlaðið inn sögu skjals, eða skrifið skjölin inn í Fyrir og Eftir.',
  /** Shown when the query fails in delta mode */
  'vision.delta.failed': 'Ekki var hægt að keyra fyrirspurnina í delta-ham: {{message}}',
  /** Shown when the After document is not valid JSON */
  'vision.delta.invalid-after': 'Eftir er ekki gilt JSON: {{message}}',
  /** Shown when the Before document is not valid JSON */
  'vision.delta.invalid-before': 'Before er ekki gilt JSON: {{message}}',
  /** Button loading the document's revisions from the History API */
  'vision.delta.load': 'Hlaða sögu',
  /** Shown when the history could not be loaded */
  'vision.delta.load-failed': 'Ekki tókst að hlaða sögunni: {{message}}',
  /** A delta filter that is true for the change */
  'vision.delta.matches': 'Passar: webhook eða fall með þessari síu keyrir fyrir þessa breytingu.',
  /** A delta filter that is false for the change */
  'vision.delta.no-match':
    'Passar ekki: webhook eða fall með þessari síu keyrir ekki fyrir þessa breytingu.',
  /** Shown while the query or its params cannot be sent */
  'vision.delta.no-request':
    'Lagfærðu fyrirspurnina og færibreytur hennar til að keyra hana í delta-ham.',
  /** Heading of the delta result */
  'vision.delta.result': 'Niðurstaða',
  /** The After choice for a change that deletes the document */
  'vision.delta.revision.none-after': 'Ekkert: breytingin eyðir skjalinu',
  /** The Before choice for a change that creates the document */
  'vision.delta.revision.none-before': 'Ekkert: breytingin býr til skjalið',
  /** A revision in the Before and After lists */
  'vision.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vision.drawer.close': 'Loka spjaldi',
  /** Explanation at the top of the Explain panel */
  'vision.explain.description':
    'Fyrirspurnaráætlunin sýnir hvernig Content Lake keyrir fyrirspurnina: hvað hún les, síar og raðar á meðan lestri stendur, og hvað er skilið eftir fyrir síðari skref. „Útskýrðu þetta fyrir mér“ lætur Sanity Agent Actions lýsa fyrirspurninni og áætlun hennar í einföldu máli, sem notar eitt AI-inneign.',
  /** Shown in the Explain panel while there is no valid query to explain */
  'vision.explain.empty': 'Skrifaðu fyrirspurn til að útskýra hana.',
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vision.explain.explain': 'Útskýrðu þetta fyrir mér',
  /** Shown when the explanation could not be written */
  'vision.explain.failed': 'Ekki tókst að útskýra fyrirspurnina: {{message}}',
  /** A count the index computes without reading the documents */
  'vision.explain.insight.aggregate': 'Talið í vísitölunni, án þess að lesa skjölin.',
  /** A subquery the plan runs once for all documents */
  'vision.explain.insight.batched-subquery':
    'Undirfyrirspurnin keyrir einu sinni fyrir öll skjölin, í einni safnaðri sókn, ekki einu sinni fyrir hvert skjal.',
  /** Part of the filter runs in memory; the expression follows */
  'vision.explain.insight.filter-in-memory':
    'Hluti síunnar keyrir í minni, eftir lestur: hvert skjal sem vísitalan hleypir í gegn er fyrst lesið, sem hægir á sér í stórum gagnasöfnum. Tengingar (->) og föll í síu geta ekki notað vísitöluna.',
  /** The index sorts and limits while reading */
  'vision.explain.insight.index-sort-limit':
    'Vísitalan raðar og takmarkar skjölin á meðan þau eru lesin.',
  /** The plan slices in memory */
  'vision.explain.insight.slice-in-memory':
    'Sneiðin er tekin í minni eftir lestur, ekki sem takmörkun á meðan lestri stendur.',
  /** The plan sorts in memory */
  'vision.explain.insight.sort-in-memory':
    'Röðun á sér stað í minni, eftir að hvert samsvar hefur verið lesið. Raðaðu eftir eiginleikum sem vísitalan getur raðað eftir.',
  /** Link under the plan insights to the guide on fast queries */
  'vision.explain.insights.guide': 'Afkastamikil GROQ',
  /** Heading of the plan insights in the Explain panel */
  'vision.explain.insights.title': 'Það sem stendur upp úr',
  /** Button in the Explain panel fetching the query plan */
  'vision.explain.plan': 'Sýna fyrirspurnaráætlun',
  /** Shown when the query plan could not be fetched */
  'vision.explain.plan-failed': 'Ekki tókst að sækja fyrirspurnaráætlunina: {{message}}',
  /** Heading of the query plan in the Explain panel */
  'vision.explain.plan-title': 'Fyrirspurnaráætlun',
  /** Toast shown after a code snippet was copied */
  'vision.export-query.copied': 'Kóðabútur afritaður á klippiborð',
  /** Label for the button that copies a code snippet */
  'vision.export-query.copy': 'Afrita kóðabút',
  /** Explanation at the top of the export query dialog */
  'vision.export-query.description':
    'Keyrðu þessa fyrirspurn utan stúdíósins með einum af þessum kóðabútum.',
  /** Note under the curl snippet when the query is sent as a request body rather than in the URL */
  'vision.export-query.post-body-note':
    'Fyrirspurnin og breyturnar verða {{size}} stafir sem leitarbreytur; frá {{limit}} og upp úr sendir @sanity/client þær sem JSON-gögn frekar en í vefslóðinni, svo kóðabúturinn gerir slíkt hið sama.',
  /** Title of the dialog that exports the query as code snippets */
  'vision.export-query.title': 'Flytja út fyrirspurn',
  /** Note about authentication in the export query dialog */
  'vision.export-query.token-note':
    'Einkagagnasöfn þurfa API-tákn. Opinber gagnasöfn geta sleppt Authorization-hausnum.',
  /** Toast shown after the generated code was copied */
  'vision.export-types.copied': 'Kóði afritaður á klippiborð',
  /** Label for the button that copies the generated code */
  'vision.export-types.copy': 'Afrita kóða',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vision.export-types.empty':
    'Sæktu fyrirspurnina fyrst svo til sé niðurstaða til að byggja tegundir á.',
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vision.export-types.schema-error': 'Mat á skema mistókst: {{message}}',
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vision.export-types.source.result':
    'Ályktað út frá sóttri niðurstöðu, þar sem ekki var hægt að meta fyrirspurnina út frá vinnusvæðisskemanu.',
  /** Note shown when the types were derived from the workspace schema */
  'vision.export-types.source.schema':
    'Ályktað út frá vinnusvæðisskemanu, á sama hátt og sanity typegen gerir það.',
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vision.export-types.stale-result':
    'Niðurstaðan sem birtist var sótt fyrir aðra fyrirspurn eða aðrar breytur. Sæktu núverandi fyrirspurn fyrst svo til sé niðurstaða til að byggja tegundir á.',
  /** Title of the dialog exporting TypeScript types for the result */
  'vision.export-types.title-typescript': 'Flytja út TypeScript',
  /** Title of the dialog exporting a Zod schema for the result */
  'vision.export-types.title-zod': 'Flytja út Zod',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vision.functions.add': 'Bæta við fyrirspurn',
  /** Shown on a library function the query declares the same way */
  'vision.functions.declared': 'Í þessari fyrirspurn',
  /** Lint action on a call of a library function the query does not declare */
  'vision.functions.editor.add-from-library': 'Lýsa yfir henni',
  /** Note in a function's hover documentation: the API version it needs */
  'vision.functions.editor.api-version': 'Þarfnast API-útgáfu {{version}} eða nýrri',
  /** Detail of a completion for a custom function the query declares */
  'vision.functions.editor.completion-declared': 'í þessari fyrirspurn',
  /** Detail of a completion for a library function, which declares it too */
  'vision.functions.editor.completion-library': 'úr safninu þínu',
  /** Note in the hover documentation of a custom function the query declares */
  'vision.functions.editor.declared-on': 'Sérsniðið fall, lýst yfir í línu {{line}}',
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vision.functions.editor.delta-only':
    'Virkar aðeins í delta-ham, þar sem vefkrókar (webhooks) og Sanity Functions keyra síurnar sínar',
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vision.functions.editor.extract': 'Draga út í fall',
  /** Note in the hover documentation of a library function the query does not declare */
  'vision.functions.editor.in-library': 'Í fallasafninu þínu, ekki skilgreint í þessari fyrirspurn',
  /** Link at the end of a built-in function's hover documentation */
  'vision.functions.editor.reference': 'GROQ fallatilvísun',
  /** Explanation under the library heading in the Functions panel */
  'vision.functions.library.description':
    'Geymt í þessum vafra fyrir hvert gagnasafn verkefnisins. Sjálfvirk útfylling býður upp á þessi föll, og lint-skoðun stingur upp á að eitt sem fyrirspurnin kallar á sé skilgreint.',
  /** Shown in the Functions panel while the library is empty */
  'vision.functions.library.empty':
    'Vistaðu fall sem fyrirspurnin skilgreinir til að nota það í öðrum fyrirspurnum.',
  /** Heading of the functions library in the Functions panel */
  'vision.functions.library.title': 'Safn',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vision.functions.query.empty':
    'Skilgreindu sérsniðin föll efst í fyrirspurninni, eða settu bendilinn í vörpun (projection), eins og author->{name}, og ýttu á útdráttarhnappinn fyrir ofan ritilinn ({{shortcut}}).',
  /** Heading of the functions the query declares in the Functions panel */
  'vision.functions.query.title': 'Í þessari fyrirspurn',
  /** Removes a function from the library */
  'vision.functions.remove': 'Fjarlægja úr safninu',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vision.functions.replace': 'Skipta út í fyrirspurn',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vision.functions.reveal': 'Sýna {{name}} í ritlinum',
  /** Button of a function the query declares that is not in the library yet */
  'vision.functions.save': 'Vista í safn',
  /** Shown on a function the query declares the way the library has it */
  'vision.functions.saved': 'Vistað',
  /** Button of a function the query declares differently from the library's version */
  'vision.functions.update': 'Uppfæra safn',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vision.generate.button': 'Búa til fyrirspurn',
  /** Closes the generate query bar */
  'vision.generate.close': 'Loka',
  /** Explanation under the generate query field */
  'vision.generate.description':
    'Sanity Agent Actions skrifar GROQ út frá lýsingu þinni og skjalategundum, og Content Lake athugar hverja tilraun; hver tilraun notar eina AI-inneign. Þetta kemur í stað fyrirspurnar þessa flipa og keyrir hana; afturkalla í ritlinum færir fyrri fyrirspurn til baka.',
  /** Shown when no query could be generated, above the reason */
  'vision.generate.failed': 'Ekki tókst að búa til fyrirspurnina',
  /** Accessible label of the description field in the generate query bar */
  'vision.generate.label': 'Hvað á fyrirspurnin að sækja?',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vision.generate.open-anyway': 'Opna síðustu tilraun',
  /** Placeholder of the description field in the generate query bar */
  'vision.generate.placeholder': 'Tíu nýjustu höfundarnir, raðað eftir eftirnafni og svo fornafni',
  /** Shown while the first attempt at a query is written */
  'vision.generate.progress': 'Skrifa fyrirspurnina…',
  /** Shown while a rejected attempt is retried */
  'vision.generate.progress-retry': 'Lagfæri fyrirspurnina (tilraun {{attempt}} af {{max}})…',
  /** Button generating the query */
  'vision.generate.submit': 'Búa til',
  /** Badge on a history entry the API CDN answered */
  'vision.history.cdn': 'API CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vision.history.cdn-cache-hit': 'CDN skyndiminni notað',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vision.history.changed': 'Breytt',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vision.history.changes': 'Breytingar',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vision.history.changes-failed': 'Ekki var hægt að sýna breytingarnar.',
  /** Button retrying to show the changes of a history entry */
  'vision.history.changes-retry': 'Reyna aftur',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vision.history.compared-with': 'Borið saman við sóknina klukkan {{time}}',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vision.history.diff.params': 'Færibreytur',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vision.history.diff.query': 'Fyrirspurn',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vision.history.diff.query-formatting-only': 'Aðeins sniðið breyttist',
  /** Label of the diff of the query result in a history entry's changes */
  'vision.history.diff.result': 'Niðurstaða',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vision.history.diff.url': 'Slóð fyrirspurnar',
  /** Empty state of the history panel */
  'vision.history.empty': 'Engar sóknir ennþá',
  /** Status label for a failed fetch in the history */
  'vision.history.failed': 'Mistókst',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vision.history.hide-hidden': 'Fela þau',
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vision.history.hiding': 'Felur {{fields}}',
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vision.history.only-hidden-changed': 'Aðeins falin svæði breyttust',
  /** History reason: a tab opened with a generated query fetched it */
  'vision.history.reason.generated': 'Mynduð fyrirspurn',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vision.history.reason.link': 'Opnaður tengill',
  /** History reason: a live event matched the query's sync tags */
  'vision.history.reason.live': 'Uppfærsla í beinni',
  /** History reason: the live connection asked every client to refetch */
  'vision.history.reason.live-restart': 'Lifandi tenging endurræst',
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vision.history.reason.live-start': 'Lifandi sókn hafin',
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vision.history.reason.load': 'Fyrirspurn hlaðin',
  /** History reason: the fetch button was pressed */
  'vision.history.reason.manual': 'Sóknarhnappur',
  /** History reason: mutations were applied from the Mutate panel */
  'vision.history.reason.mutation': 'Breytingum beitt',
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vision.history.reason.options': 'Valkostum breytt',
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vision.history.reason.paste': 'Límd slóð',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vision.history.reason.resume': 'Sjálfvirk endursókn hófst aftur',
  /** History reason: the keyboard shortcut was used */
  'vision.history.reason.shortcut': 'Flýtilykill',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vision.history.same-result': 'Sömu niðurstöður',
  /** Button showing the hidden fields in a history entry's changes */
  'vision.history.show-hidden': 'Sýna þau',
  /** Next to a history entry's changes while the hidden fields are shown */
  'vision.history.showing-hidden': 'Sýnir {{fields}}, falið sjálfgefið',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vision.history.too-large': 'Of stórt til að bera saman',
  /** A history entry whose result is the same as the previous result */
  'vision.history.unchanged': 'Engar breytingar',
  /** Shown in the Lint panel while the query has no lint findings */
  'vision.lint.empty':
    'Engar niðurstöður frá lint. Vandamál sem GROQ-lintarinn finnur í fyrirspurninni birtast hér jafnóðum og þú skrifar; veldu eitt til að velja það í ritlinum.',
  /** Where a lint finding sits in the query, shown under its message */
  'vision.lint.position': 'Lína {{line}}, dálkur {{column}}',
  /** Severity badge of a lint finding */
  'vision.lint.severity.error': 'Villa',
  /** Severity badge of a lint finding */
  'vision.lint.severity.hint': 'Vísbending',
  /** Severity badge of a lint finding */
  'vision.lint.severity.info': 'Upplýsingar',
  /** Severity badge of a lint finding */
  'vision.lint.severity.warning': 'Viðvörun',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vision.lint.use-suggestion': 'Nota {{suggestion}}',
  /** Badge shown while a tab refetches automatically */
  'vision.live.active': 'Í beinni',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vision.live.button': 'Sækja í beinni',
  /** Tooltip of the Live button while automatic refetching is off */
  'vision.live.button.start': 'Sækja, og sækja svo aftur þegar skjölin í niðurstöðunni breytast',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vision.live.button.stop':
    'Hætta að sækja þegar skjölin í niðurstöðunni breytast. Sækja sækir samt eftir þörfum, fyrir niðurstöður sem engin skjalabreyting hefur áhrif á, eins og now()',
  /** Error shown when the live connection breaks */
  'vision.live.error': 'Beintengingu var slitið: {{message}}',
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vision.live.stop': 'Stöðva beina sókn',
  /** Button in the Mutate panel adding a mutation to the list */
  'vision.mutate.add': 'Bæta við breytingu',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vision.mutate.add.create': 'Búa til skjal',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vision.mutate.add.delete': 'Eyða skjali',
  /** Adds a mutation deleting the documents of the shown result */
  'vision.mutate.add.delete-result': 'Eyða skjölunum í niðurstöðunni',
  /** Adds a mutation patching a document, its ID to fill in */
  'vision.mutate.add.patch': 'Uppfæra skjal',
  /** Adds a mutation patching the documents of the shown result */
  'vision.mutate.add.patch-result': 'Lagfæra (patch) skjölin í niðurstöðunni',
  /** Button applying the mutations a dry run showed */
  'vision.mutate.apply': 'Beita á {{dataset}}',
  /** Heading of the error shown when applying the mutations failed */
  'vision.mutate.apply-failed': 'Breytingunum var ekki beitt',
  /** Next to Apply while the mutations as they are have had no dry run */
  'vision.mutate.apply-needs-preview':
    'Beita sendir það sem þurrkeyrsla (dry run) sýndi: keyrðu eina fyrst.',
  /** Option giving array items without a _key one */
  'vision.mutate.auto-keys': 'Bæta _key við fylkisfærslur sem hafa engan',
  /** Under the option giving array items a _key */
  'vision.mutate.auto-keys.description':
    'Vinnustofan þarf einn á hverri fylkisfærslu til að geta breytt henni.',
  /** Button showing a document's changes in the dry run */
  'vision.mutate.changes': 'Breytingar',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vision.mutate.changes-failed': 'Ekki var hægt að sýna breytingarnar.',
  /** Button retrying to show a document's changes */
  'vision.mutate.changes-retry': 'Reyna aftur',
  /** What the Mutate panel does */
  'vision.mutate.description':
    'Skrifaðu breytingar (mutations) eins og Mutations API tekur við þeim, í lista: create, createOrReplace, createIfNotExists, delete og patch, eftir ID eða eftir GROQ-fyrirspurn. Þurrkeyrsla (dry run) sýnir hvað þær myndu gera við hvert skjal án þess að breyta neinu; Beita skrifar þær síðan í gagnasafnið í einni færslu, með þínum aðgangi.',
  /** What the API says went wrong with one of the mutations */
  'vision.mutate.failure-item': 'Breyting {{index}}: {{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vision.mutate.generate.button': 'Búa til breytingar',
  /** Explanation under the generate mutations field */
  'vision.mutate.generate.description':
    'Sanity Agent Actions skrifa breytingarnar út frá lýsingu þinni, skjölunum í niðurstöðunni og tegundum þeirra, og þurrkeyrsla athugar hverja tilraun; hver tilraun notar eina AI-inneign. Þær koma í stað breytinganna hér, þar sem afturkalla færir þær til baka; ekkert er skrifað fyrr en þú beitir þeim.',
  /** Shown when no mutations could be generated, above the reason */
  'vision.mutate.generate.failed': 'Ekki var hægt að búa til breytingarnar',
  /** Accessible label of the description field in the generate mutations bar */
  'vision.mutate.generate.label': 'Hvað eiga breytingarnar að gera?',
  /** Placeholder of the description field in the generate mutations bar */
  'vision.mutate.generate.placeholder': 'Breyttu titli skjalanna í niðurstöðunni í foobar',
  /** Shown while the first attempt at the mutations is written */
  'vision.mutate.generate.progress': 'Skrifa breytingarnar…',
  /** Shown while an attempt the dry run turned down is retried */
  'vision.mutate.generate.progress-retry':
    'Lagfæri breytingarnar (tilraun {{attempt}} af {{max}})…',
  /** Under the dry run: the fields the diffs leave out */
  'vision.mutate.hiding': 'Breytingarnar sleppa {{fields}}, rétt eins og Saga (History) gerir.',
  /** Shown when the mutations are not valid JSON */
  'vision.mutate.invalid-json': 'Breytingarnar eru ekki gilt JSON: {{message}}',
  /** Shown when a mutation does not name exactly one thing to do */
  'vision.mutate.invalid-mutation':
    'Breyting {{index}} þarf nákvæmlega eitt af: create, createOrReplace, createIfNotExists, delete eða patch.',
  /** Label of the mutations editor */
  'vision.mutate.mutations': 'Breytingar',
  /** The dry run touched no documents */
  'vision.mutate.no-documents': 'Breytingarnar snerta engin skjöl.',
  /** Shown when the JSON is not a list of mutations */
  'vision.mutate.not-a-list':
    'Skrifaðu lista af breytingum, staka breytingu, eða beiðnishluta (request body) með lista af breytingum.',
  /** A document the mutations create */
  'vision.mutate.operation.create': 'Búa til',
  /** A document the mutations delete */
  'vision.mutate.operation.delete': 'Eyða',
  /** A document the mutations touch without changing its content */
  'vision.mutate.operation.none': 'Engin breyting',
  /** A document the mutations change */
  'vision.mutate.operation.update': 'Uppfæra',
  /** Button running the mutations as a dry run */
  'vision.mutate.preview': 'Þurrkeyrsla',
  /** Heading of the error shown when the dry run failed */
  'vision.mutate.preview-failed': 'Þurrkeyrslan mistókst',
  /** Heading of the dry run's outcome */
  'vision.mutate.preview-heading': 'Þurrkeyrsla',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vision.mutate.stale':
    'Mutations-aðgerðirnar, gagnasafnið eða valkostirnir breyttust eftir þessa þurrkeyrslu. Keyrðu hana aftur til að beita þeim.',
  /** How many documents the dry run changes and leaves as they are */
  'vision.mutate.summary': 'Breytt: {{changed}} · Óbreytt: {{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vision.network.cache': 'Skyndiminni',
  /** The API CDN answered from its cache */
  'vision.network.cache.hit': 'Hittir',
  /** Under the details of a CDN cache hit */
  'vision.network.cache.hit-explained':
    'CDN-ið svaraði með svari sem það hafði geymt í skyndiminni, frá stað nálægt þér; fyrirspurnin náði ekki til API-sins.',
  /** The API CDN answered with a response this session had not seen */
  'vision.network.cache.miss': 'Hittir ekki, eftir því sem þessi lota kemst næst',
  /** The API answered, which caches nothing */
  'vision.network.cache.none': 'Ekkert, API-ið svarar hverri fyrirspurn með nýju efni',
  /** Shown in the Network panel while there is no response */
  'vision.network.empty':
    'Sæktu fyrirspurnina til að sjá hvaða endapunktur svaraði henni, hvort það var úr skyndiminni, og hvar hún var keyrð.',
  /** In the Network panel: the endpoint that answered */
  'vision.network.endpoint': 'Svarað af',
  /** The live API answered */
  'vision.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vision.network.endpoint.cdn': 'API CDN',
  /** In the Network panel: the HTTP method the query was sent with */
  'vision.network.method': 'Aðferð',
  /** The query and its params went in the URL */
  'vision.network.method.get': 'GET, með fyrirspurn og breytum í vefslóðinni',
  /** The query and its params went in the request body */
  'vision.network.method.post': 'POST, með fyrirspurn og breytum sem JSON-meginmál',
  /** Under the method of a POST request: why the query was not sent in the URL */
  'vision.network.method.post-explained':
    'Fyrirspurnin og breyturnar eru {{size}} stafir sem leitarbreytur; frá {{limit}} og upp úr sendir @sanity/client þær sem JSON-meginmál, þar sem API-ið takmarkar lengd vefslóðar. Valkostirnir haldast í vefslóðinni.',
  /** In the Network panel: the region the query ran in */
  'vision.network.region': 'Fyrirspurn keyrð í',
  /** The response did not say where the query ran */
  'vision.network.region.unknown': 'Ekki tilgreint',
  /** In the Network panel: the round trip and the time on the server */
  'vision.network.timing': 'Tími',
  /** The round trip and the server's time for the query, in milliseconds */
  'vision.network.timing.value': '{{e2e}}ms fram og til baka, {{server}}ms á netþjóninum',
  /** In the Network panel: the trace of the request, for Sanity support */
  'vision.network.trace': 'Trace ID',
  /** Hint in the Network panel while queries go to the API */
  'vision.network.use-cdn-hint':
    'Kveiktu á Nota API CDN í valkostum til að senda fyrirspurnir í gegnum CDN.',
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vision.network.you': 'Þú',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vision.options.dataset.follows-workspace': 'Fylgir vinnusvæðinu',
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vision.options.dataset.pin': 'Festa gagnasafn',
  /** Hint under the dataset field while a dataset is pinned */
  'vision.options.dataset.pinned': 'Fest; vinnusvæðið gæti notað annað gagnasafn',
  /** Button that makes the tab follow the workspace's dataset again */
  'vision.options.dataset.use-workspace': 'Nota gagnasafn vinnusvæðisins',
  /** Label for the "Include content source map" switch */
  'vision.options.include-source-map': 'Taka með kortlagningu efnisuppruna (content source map)',
  /** Description for the "Include content source map" switch */
  'vision.options.include-source-map.description':
    'Bætir resultSourceMap við svarið, sem birtist í flipanum Content Source Map.',
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vision.options.perspective.global': 'Víðvært ({{name}})',
  /** Label of the switch that sends queries to the API CDN */
  'vision.options.use-cdn': 'Nota API CDN',
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vision.options.use-cdn.anonymous':
    'Þetta studio skráir þig inn með vafraköku sem API CDN fær aldrei: það svarar eins og nafnlausum gesti, með því sem opinbert gagnasafn sýnir.',
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vision.options.use-cdn.blocked':
    'API CDN þjónar hvorki drögum né útgáfum, svo fyrirspurnir með {{perspective}} sjónarhorninu fara til API. Með útgefnu eða hráu fara þær í gegnum CDN.',
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vision.options.use-cdn.blocked.title': 'Fyrirspurnir fara til API, ekki CDN',
  /** Description of the API CDN switch */
  'vision.options.use-cdn.description':
    'Sendir fyrirspurnina til API CDN, líkt og useCdn: true í @sanity/client, með útgefnu og hráu sjónarhornunum: drög og útgáfur fara alltaf til API. Svör eru vistuð í skyndiminni í allt að eina mínútu; Netkerfisstjórnborðið sýnir þegar svar kom úr skyndiminni.',
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vision.options.use-cdn.use-published': 'Nota útgefna sjónarhornið',
  /** Label of the variant field */
  'vision.options.variant-label': 'Afbrigði',
  /** Variant option sending the navbar's variant, named */
  'vision.options.variant.global': 'Víðvært ({{name}})',
  /** Variant option sending the navbar's variant while none is selected there */
  'vision.options.variant.global-none': 'Víðvært (ekkert valið)',
  /** Variant option sending no variant */
  'vision.options.variant.none': 'Ekkert',
  /** Accessible label for collapsing a bottom panel */
  'vision.panel.collapse': 'Fella saman stjórnborð',
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vision.panel.delta': 'Delta',
  /** Accessible label for expanding a bottom panel */
  'vision.panel.expand': 'Þenja út stjórnborð',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vision.panel.explain': 'Útskýra',
  /** Label of the Functions tab in the response panel */
  'vision.panel.functions': 'Föll',
  /** Label of the "History" tab in the response panel */
  'vision.panel.history': 'Saga',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vision.panel.lint': 'Lint',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vision.panel.mutate': 'Breyta',
  /** Label of the Network tab in the response panel */
  'vision.panel.network': 'Net',
  /** Label of the "Options" panel in the request column */
  'vision.panel.options': 'Valkostir',
  /** Label of the "Response" tab in the response panel */
  'vision.panel.response': 'Svar',
  /** Label of the "Content Source Map" tab in the response panel */
  'vision.panel.source-map': 'Content Source Map',
  /** Button adding an item to a list param in the params form */
  'vision.params-form.add-item': 'Bæta við hlut',
  /** Placeholder of a params form field that takes any JSON value */
  'vision.params-form.any-placeholder':
    'Hvaða JSON gildi sem er; annar texti er sendur sem strengur',
  /** Shown in the params form when the query uses no params */
  'vision.params-form.empty': 'Fyrirspurnin notar engar breytur. Hvert $nafn í henni fær reit hér.',
  /** Shown in the params form while the params JSON cannot be parsed */
  'vision.params-form.invalid-json':
    'Breyturnar eru ekki gilt JSON. Lagaðu þær í JSON-skjánum til að breyta þeim hér.',
  /** A boolean param's value is not true or false; it is sent anyway */
  'vision.params-form.invalid.boolean': 'Hvorki satt né ósatt; sent sem {{value}}',
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vision.params-form.invalid.document-type': 'Ekki skjalategund í þessu vinnusvæði; sent samt',
  /** A whole number param (a slice bound) holds a fraction */
  'vision.params-form.invalid.integer': 'Ekki heiltala, sem sneiðar þurfa',
  /** A list param's value is not a list; it is sent anyway */
  'vision.params-form.invalid.list': 'Ekki listi; sent sem {{value}}',
  /** A number param's value is not a number; it is sent anyway */
  'vision.params-form.invalid.number': 'Ekki tala; sent sem texti',
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vision.params-form.invalid.option': 'Ekki eitt af þekktum gildum; sent samt',
  /** A text param's value is not text; it is sent anyway */
  'vision.params-form.invalid.string': 'Ekki texti; sent sem {{value}}',
  /** Accessible label of an item input of a list param in the params form */
  'vision.params-form.item-label': '${{name}}, hlutur {{index}}',
  /** Placeholder of an item input of a list param in the params form */
  'vision.params-form.item-placeholder': 'Hlutur',
  /** Under a params form field whose param has no value */
  'vision.params-form.missing': 'Ekki stillt: fyrirspurnin mistekst þar til hún hefur gildi',
  /** Shown in the params form when the workspace schema could not be read */
  'vision.params-form.no-schema':
    'Tegundir koma eingöngu úr fyrirspurninni: ekki var hægt að lesa skema vinnusvæðisins.',
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vision.params-form.not-set': 'Ekki stillt',
  /** Button setting a date and time param to the current time */
  'vision.params-form.now': 'Núna',
  /** Button removing a param the query does not use from the params */
  'vision.params-form.remove': 'Fjarlægja',
  /** Accessible label of the button removing an item from a list param */
  'vision.params-form.remove-item': 'Fjarlægja atriði',
  /** Shown in the params form when the query does not parse */
  'vision.params-form.syntax-error':
    'Fyrirspurnin þáttast ekki, svo breytur hennar eru sýndar án tegunda.',
  /** Type hint of a params form field: any JSON value */
  'vision.params-form.type.any': 'hvaða JSON-gildi sem er',
  /** Type hint of a params form field: true or false */
  'vision.params-form.type.boolean': 'satt eða ósatt',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vision.params-form.type.datetime': 'dagsetning og tími (ISO 8601)',
  /** Type hint of a params form field: a document ID */
  'vision.params-form.type.document-id': 'skjalnúmer',
  /** Type hint of a params form field: one of the workspace's document types */
  'vision.params-form.type.document-type': 'skjalategund',
  /** Type hint of a params form field: a whole number */
  'vision.params-form.type.integer': 'heil tala',
  /** Type hint of a params form field: a list of values */
  'vision.params-form.type.list': 'listi, hver {{type}}',
  /** Type hint of a params form field: a number */
  'vision.params-form.type.number': 'tala',
  /** Type hint of a params form field: text */
  'vision.params-form.type.string': 'texti',
  /** Heading of the params the query does not use, listed in the params form */
  'vision.params-form.unused': 'Ekki notað af fyrirspurninni',
  /** Before the expressions that use a param, in the params form */
  'vision.params-form.used-in': 'Notað í',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vision.params.fit-height': 'Stærð löguð að innihaldi, {{height}} pixlar',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vision.params.resize':
    'Breyta stærð breyta: dragðu eða notaðu örvatakkana; tvísmelltu eða ýttu á Enter til að laga aftur að innihaldi',
  /** Tab showing the params as a form inferred from the query */
  'vision.params.view.form': 'Eyðublað',
  /** Tab showing the params as JSON */
  'vision.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vision.params.view.label': 'Breyta breytum sem',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vision.paste.parsed': 'Fyrirspurn hlaðin úr límdri slóð',
  /** Toast shown after a curl command for a query was pasted and loaded into the tab */
  'vision.paste.parsed-curl': 'Fyrirspurn hlaðin úr límdri cURL-skipun',
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vision.paste.unavailable-variant':
    'Límda slóðin notaði afbrigðið „{{variant}}“; veldu það í efstu valstikunni til að keyra fyrirspurnina með því.',
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vision.paste.unknown-dataset':
    'Gagnasafnið „{{dataset}}“ í límdu slóðinni er ekki tiltækt hér, núverandi gagnasafn er áfram notað.',
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vision.paste.unsupported-perspective':
    'Sjónarhornið í límdu slóðinni er ekki stutt hér, núverandi sjónarhorn er áfram notað.',
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vision.paste.variants-disabled':
    'Límda slóðin notaði afbrigðið „{{variant}}“; þetta vinnusvæði hefur slökkt á afbrigðum, svo fyrirspurnin keyrir án þess.',
  /** Accessible label for the query actions menu */
  'vision.query.actions': 'Fyrirspurnaraðgerðir',
  /** Tooltip when automatic refetching is not available for the API version */
  'vision.query.auto-refetch.unsupported':
    'Sjálfvirk endursókn krefst API útgáfu v2021-03-25 eða síðar.',
  /** Toast shown after the query was copied */
  'vision.query.copied': 'Fyrirspurn afrituð á klippiborð',
  /** Menu item copying the query text */
  'vision.query.copy': 'Afrita fyrirspurn',
  /** Menu item opening the export query dialog */
  'vision.query.export': 'Flytja út fyrirspurn…',
  /** Menu item reformatting the query */
  'vision.query.prettify': 'Fríska upp á fyrirspurn',
  /** Toast shown when the query could not be reformatted */
  'vision.query.prettify.failed': 'Ekki tókst að fríska upp á fyrirspurnina',
  /** Menu item saving the query to the personal saved queries */
  'vision.query.save': 'Vista fyrirspurn',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vision.query.stop': 'Stöðva',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vision.query.stop.description': 'Stöðva sókn',
  /** Explanation in the settings section about the redesigned experience */
  'vision.redesign.settings.description':
    'Þú ert að nota endurhannaða Vision tólið. Ef þú skiptir til baka haldast flipar þínir og stillingar í þessum vafra fyrir næsta skipti sem þú prófar það.',
  /** Title of the settings section about the redesigned experience */
  'vision.redesign.settings.title': 'Endurhönnuð Vision (beta)',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vision.redesign.switch-to-classic': 'Skipta yfir í klassíska Vision',
  /** Toast button that switches to the redesigned tool */
  'vision.redesign.toast.accept': 'Prófa núna',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vision.redesign.toast.description':
    'Fyrirspurnaflipar, lifandi endursókn, nánari upplýsingar um svör og útflutningur. Þú getur skipt til baka hvenær sem er.',
  /** Toast button that hides the invitation */
  'vision.redesign.toast.dismiss': 'Ekki núna',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vision.redesign.toast.title': 'Prófaðu endurhannaða Vision',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vision.redesign.try': 'Prófa endurhönnunina',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vision.redesign.try.description':
    'Skiptu yfir í endurhannaða Vision, í beta. Þú getur skipt til baka hvenær sem er úr hliðarstikunni þar.',
  /** Empty state of the response panel before anything was fetched */
  'vision.response.empty': 'Ekkert sótt enn',
  /** Label for the payload size in the response tab */
  'vision.response.payload-size': 'Stærð gagnapakka',
  /** Label for the sync tags in the response tab */
  'vision.response.sync-tags': 'Samstillingarmerki',
  /** Shown when the response carried no sync tags */
  'vision.response.sync-tags.none': 'Engin samstillingarmerki í svarinu',
  /** Under the query URL when the request went out as a POST body rather than that URL */
  'vision.response.url.sent-as-post':
    'Sent sem POST-gögn: fyrirspurnin og breyturnar eru of langar fyrir slóð, svo @sanity/client sendi þær sem JSON. Að líma þessa slóð inn í Vision hleður fyrirspurninni samt sem áður.',
  /** Accessible label for the result actions menu */
  'vision.result.actions': 'Aðgerðir niðurstöðu',
  /** Toast shown after the result was copied */
  'vision.result.copied': 'Niðurstaða afrituð á klippiborð',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vision.result.copied-value': '{{path}} afritað',
  /** Menu item and button copying the result as JSON */
  'vision.result.copy': 'Afrita niðurstöðu',
  /** Button next to each property in the result tree, copying its value */
  'vision.result.copy-value': 'Afrita gildi',
  /** Empty state of the result view */
  'vision.result.empty': 'Keyrðu fyrirspurnina til að sjá niðurstöðuna hér',
  /** Button exporting the result as CSV */
  'vision.result.export-csv': 'Flytja út sem CSV',
  /** Button exporting the result as JSON */
  'vision.result.export-json': 'Flytja út sem JSON',
  /** Menu item opening the TypeScript export dialog */
  'vision.result.export-typescript': 'Flytja út TypeScript…',
  /** Menu item opening the Zod export dialog */
  'vision.result.export-zod': 'Flytja út Zod…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vision.result.graph.collapse': 'Fela innihald',
  /** Button fitting the whole graph in view */
  'vision.result.graph.fit': 'Passa við skjá',
  /** Accessible label of the graph, saying how to move around in it */
  'vision.result.graph.label':
    'Niðurstöðurit: dragðu til að færa, skrunaðu til að aðdraga; þegar virkt, örvatakkar færa, + og - renna í og út, 0 passar við skjá',
  /** Ends the note on a graph that leaves part of this result out */
  'vision.result.graph.left-out-hint': 'Tré- og JSON-skoðanirnar sýna allt.',
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vision.result.graph.node-limit': 'Aðeins fyrstu {{nodes}} hlutirnir og fylkin eru teiknuð.',
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vision.result.graph.partial':
    'Aðeins fyrstu {{rows}} færslurnar eru taldar upp fyrir {{nodes}}.',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vision.result.graph.partial.node': '{{name}} ({{entries}} færslur)',
  /** Title of the graph node of the result itself */
  'vision.result.graph.root': 'niðurstaða',
  /** Button zooming into the graph */
  'vision.result.graph.zoom-in': 'Renna að',
  /** Button zooming out of the graph */
  'vision.result.graph.zoom-out': 'Renna frá',
  /** Tab showing the result as a graph of its objects and arrays */
  'vision.result.view.graph': 'Rit',
  /** Tab showing the result as indented JSON text, to select and copy from */
  'vision.result.view.json': 'JSON',
  /** Accessible label of the tabs that switch how the result shows */
  'vision.result.view.label': 'Niðurstöðuskoðun',
  /** Tab showing the result as a tree to browse */
  'vision.result.view.tree': 'Tré',
  /** Empty state of the saved queries panel */
  'vision.saved.empty':
    'Engar vistaðar fyrirspurnir ennþá. Vistaðu núverandi fyrirspurn með + hnappinum.',
  /** Empty state of a query list when the search matches nothing */
  'vision.saved.empty-search': 'Engar fyrirspurnir passa við leitina þína',
  /** Menu item loading a saved query into the active tab */
  'vision.saved.load-in-current-tab': 'Hlaða inn í núverandi flipa',
  /** Menu item opening a saved query in a new tab */
  'vision.saved.open-in-new-tab': 'Opna í nýjum flipa',
  /** Menu item renaming a saved query */
  'vision.saved.rename': 'Endurnefna',
  /** Accessible label for the button saving the current query */
  'vision.saved.save-current': 'Vista núverandi fyrirspurn',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vision.saved.unavailable-variant':
    'Þessi vistaða fyrirspurn notaði afbrigðið „{{variant}}“; veldu það í efstu stikunni til að keyra fyrirspurnina með því.',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vision.saved.unknown-dataset':
    'Gagnasafnið „{{dataset}}“ fyrir þessa vistuðu fyrirspurn er ekki tiltækt hér, heldur núverandi gagnasafni.',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vision.saved.variants-disabled':
    'Þessi vistaða fyrirspurn notaði afbrigðið „{{variant}}“; þetta vinnusvæði er með afbrigði óvirk, svo fyrirspurnin keyrir án þess.',
  /** Button in the settings dialog that clears the stored state */
  'vision.settings.clear-storage': 'Hreinsa geymslu',
  /** Confirmation button for clearing the storage */
  'vision.settings.clear-storage.confirm': 'Já, hreinsa geymslu',
  /** Explanation of what clearing the storage does */
  'vision.settings.clear-storage.description':
    'Eyðir persónulegum vistuðum fyrirspurnum þínum og fallasafninu, endurstillir opna flipa og þessar sjálfgefnu stillingar í þessum vafra, og fer aftur í sígilda Vision tólið. Deildar fyrirspurnir eru áfram geymdar.',
  /** Toast shown when the saved queries could not be cleared */
  'vision.settings.clear-storage.error': 'Ekki tókst að hreinsa vistuðu fyrirspurnirnar',
  /** Toast shown after the storage was cleared */
  'vision.settings.clear-storage.success': 'Geymsla hreinsuð',
  /** Explanation at the top of the settings dialog */
  'vision.settings.description':
    'Sjálfgefnar stillingar fyrir nýja flipa. Opnir flipar halda sínum eigin valkostum.',
  /** Explains the setting listing the fields left out of History diffs */
  'vision.settings.history-diff.description':
    'Ein reitaslóð á línu. Slóð passar við á hvaða dýpt sem er í niðurstöðu, þannig að _rev felur útgáfu hvers skjals í henni. Hver samanburður getur samt sýnt þær.',
  /** Button restoring the default fields left out of History diffs */
  'vision.settings.history-diff.reset': 'Endurstilla á sjálfgefið',
  /** Label of the setting listing the fields left out of History diffs */
  'vision.settings.history-diff.title': 'Reitir faldir úr samanburði á sögu',
  /** Title of the settings dialog */
  'vision.settings.title': 'Stillingar',
  /** Empty state of the shared queries panel */
  'vision.shared.empty':
    'Engar deildar fyrirspurnir ennþá. Deildu vistaðri fyrirspurn til að gera hana aðgengilega öllum sem nota þetta gagnasafn.',
  /** Shortcut description: close dialogs and menus */
  'vision.shortcuts.close': 'Loka gluggum og valmyndum',
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vision.shortcuts.complete': 'Ljúka við heiti falls',
  /** Shortcut description: copy the query */
  'vision.shortcuts.copy-query': 'Afrita fyrirspurnina',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vision.shortcuts.extract-function': 'Draga út vörpunina við bendilinn í fall',
  /** Shortcut description: run the query */
  'vision.shortcuts.fetch': 'Sækja fyrirspurnina',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vision.shortcuts.next-finding': 'Fara á næstu lint-niðurstöðu',
  /** Shortcut description: reformat the query */
  'vision.shortcuts.prettify': 'Fegra fyrirspurnina',
  /** Title of the keyboard shortcuts dialog */
  'vision.shortcuts.title': 'Flýtilyklar',
  /** Sidebar toggle: show icons only */
  'vision.sidebar.collapse': 'Fella saman hliðarslá',
  /** Sidebar toggle: show labels next to the icons */
  'vision.sidebar.expand': 'Stækka hliðarslá',
  /** Accessible label for the sidebar navigation */
  'vision.sidebar.label': 'Vision hliðarslá',
  /** Sidebar item and drawer title for personal saved queries */
  'vision.sidebar.saved-queries': 'Vistaðar fyrirspurnir',
  /** Sidebar item opening the settings dialog */
  'vision.sidebar.settings': 'Stillingar',
  /** Sidebar item and drawer title for shared queries */
  'vision.sidebar.shared-queries': 'Deildar fyrirspurnir',
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vision.sidebar.shortcuts': 'Flýtilyklar',
  /** Empty state of the content source map panel */
  'vision.source-map.empty':
    'Ekkert content source map í svarinu. Virkjaðu "Include content source map" undir Valkostum og sæktu aftur.',
  /** Accessible label of the divider between the result and the response details panel */
  'vision.split.bottom-panel':
    'Breyttu stærð svæðisins með svarupplýsingum: dragðu eða notaðu örvatakkana; Home og End fara í mörkin, Enter endurstillir',
  /** Accessible label of the divider between the request and response panes */
  'vision.split.request-response':
    'Breyttu stærð svæðanna fyrir fyrirspurn og svar: dragðu eða notaðu örvatakkana; Home og End fara í mörkin, Enter endurstillir',
  /** Accessible label for the button closing a query tab */
  'vision.tabs.close-tab': 'Loka flipa',
  /** Accessible label for the list of query tabs */
  'vision.tabs.label': 'Fyrirspurnarflipar',
  /** Accessible label for the button opening a new query tab */
  'vision.tabs.new-tab': 'Nýr flipi',
  /** Placeholder of the input renaming a tab */
  'vision.tabs.title-placeholder': 'Heiti flipa',
  /** Title of a tab whose query is still empty */
  'vision.tabs.untitled': 'Ónefnd fyrirspurn',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vision.webmcp.check-query': 'Athuga GROQ fyrirspurn í Vision',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vision.webmcp.describe-schema': 'Lýsa skemanu í Vision',
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vision.webmcp.explain-query': 'Útskýra GROQ fyrirspurn í Vision',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vision.webmcp.get-state': 'Lesa opna Vision flipann',
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vision.webmcp.open-query': 'Opna GROQ fyrirspurn í Vision',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vision.webmcp.preview-mutations': 'Forskoða breytingar í Vision',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vision.webmcp.run-query': 'Keyra GROQ fyrirspurn í Vision',
})
