import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Kopioi leikepöydälle',
  /** Label for deleting a query */
  'action.delete': 'Poista',
  /** Label for editing a query's title */
  'action.edit-title': 'Muokkaa otsikkoa',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Pysäytä',
  /** Label for setting up a listener */
  'action.listen-execute': 'Kuuntele',
  /** Label for query loading table */
  'action.load-queries': 'Lataa kyselyt',
  /** Label for loading a query */
  'action.load-query': 'Lataa kysely',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Peruuta',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Hae',
  /** Label for saving a query */
  'action.save-personal-copy': 'Tallenna henkilökohtainen kopio',
  /** Label for saving a personal query */
  'action.save-personal-query': 'Tallenna henkilökohtaisena',
  /** Label for saving a query */
  'action.save-query': 'Tallenna kysely',
  /** Label for saving a shared query */
  'action.save-shared-query': 'Tallenna jaettuna',
  /** Label for unsharing a query */
  'action.unshare': 'Poista jakaminen',
  /** Label for updating a query */
  'action.update': 'Päivitä',

  /** Label for actions user can take */
  'label.actions': 'Toiminnot',
  /** Label for all saved queries */
  'label.all': 'Kaikki',
  /** Label for saved queries that have been edited */
  'label.edited': 'Muokattu',
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Uusi',
  /** Label for query type "personal" */
  'label.personal': 'Henkilökohtainen',
  /** Label for savedAt date */
  'label.saved-at': 'Tallennettu',
  /** Saved queries */
  'label.saved-queries': 'Tallennetut kyselyt',
  /** Search queries */
  'label.search-queries': 'Etsi kyselyitä',
  /** Share query */
  'label.share': 'Jaa',
  /** Label for query type "shared" */
  'label.shared': 'Jaettu',
  /** Label for saved query type "team" */
  'label.team': 'Tiimi',
  /** Label for untitled query fallback */
  'label.untitled-query': 'Nimetön',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'Parametrit eivät ole kelvollista JSONia',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Parametrit',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Sarake',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Rivi',
  /** Extra explanation when a 400 is returned for a release perspective on an old API version */
  'query.error.unsupported-release-perspective':
    'Tämä API-versio ei tue monimutkaisia perspektiivejä. Käytä versiota {{apiVersion}} tai uudempaa.',
  /** Extra explanation when a 400 is returned for a variant on an incompatible API version */
  'query.error.unsupported-variant':
    'Tämä API-versio ei tue sisältövariantteja. Käytä kokeellista API-versiota ({{apiVersion}}).',
  /** Label for "Query" editor/input */
  'query.label': 'Kysely',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'Kyselyn URL',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'Päästä päähän',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'Suoritusaika',
  /** Label for "Result" explorer/view */
  'result.label': 'Tulos',
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable': 'Tulosta ei voi koodata CSV-muotoon',
  /** Label for "Save result as" result action */
  'result.save-result-as-format': 'Tallenna tulos muodossa <SaveResultButtons/>',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'ei sovellu',

  /** Query already saved error label */
  'save-query.already-saved': 'Kysely on jo tallennettu',
  /** Save error label */
  'save-query.error': 'Virhe tallennettaessa kyselyä',
  /** Save personal copy success label */
  'save-query.personal-copy-success': 'Henkilökohtainen kopio tallennettu',
  /** Warning displayed before sharing a query */
  'save-query.share-warning':
    'Jaetut kyselyt tallennetaan asiakirjoina dataset-tietokantaasi ja lasketaan asiakirjakiintiöösi.',
  /** Save shared query success label */
  'save-query.shared-success': 'Jaettu kysely tallennettu',
  /** Save success label */
  'save-query.success': 'Kysely tallennettu',
  /** Save unshared query success label */
  'save-query.unshared-success': 'Kysely siirretty henkilökohtaisiin',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'API-versio',
  /** Tooltip shown when the API version selector is locked because a variant is selected */
  'settings.api-version-locked-for-variant': 'Kun variantti on valittu, API-version on oltava vX.',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'Mukautettu API-versio',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Dataset',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'Virheellinen API-versio',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'Muu',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspective',
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    'Perspektiivi "<code>previewDrafts</code>" on nimetty uudelleen muotoon "<code>drafts</code>" ja on nyt vanhentunut. Tämä muutos on voimassa kaikissa versioissa, joissa on perspektiivituki (>= v2021-03-25).',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Lue dokumentaatiota',
  /** Option for selecting default perspective */
  'settings.perspectives.default': 'Ei perspektiiviä (API:n oletus)',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Perspectives mahdollistavat kyselysi suorittamisen eri "näkymillä" sisällöstä datasetissäsi',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    'Oletusperspektiivi muuttuu muodosta "<code>raw</code>" muotoon "<code>published</code>" tulevassa API-versiossa. Katso lisätietoja dokumentaatiosta.',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': 'kiinnitetty julkaisu',
  /** Label for the scheduled drafts perspective */
  'settings.perspectives.scheduled-drafts': 'Ajastetut luonnokset',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspectives',

  /** Tooltip line of every control that calls Sanity Agent Actions, which bills AI credits */
  'vision.agent-actions.credits': 'Käyttää yhden AI-krediitin per pyyntö',
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vision.ai-credits.balance': '{{balance}}/{{quota}} AI-krediittiä jäljellä tässä kuussa.',
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vision.ai-credits.deficit':
    '{{used}} AI-krediittiä käytetty tässä kuussa, {{deficit}} enemmän kuin {{quota}} sisältyvää.',
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vision.ai-credits.limit.description':
    'Organisaatiosi on käyttänyt {{used}}/{{quota}} AI-krediittiään tässä kuussa, joten Sanity Agent Actions -toiminnot on keskeytetty seuraavaan kuuhun asti tai kunnes kulutusrajaa nostetaan.',
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vision.ai-credits.limit.description-unknown':
    'Organisaatiosi on saavuttanut AI-krediittien kulutusrajansa, joten Sanity Agent Actions -toiminnot on keskeytetty seuraavaan kuuhun asti tai kunnes rajaa nostetaan.',
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vision.ai-credits.limit.learn-more': 'Kuinka AI-krediitit toimivat',
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vision.ai-credits.limit.manage': 'Hallitse AI-krediittejä',
  /** Title of the card shown where the organization is out of AI credits */
  'vision.ai-credits.limit.title': 'AI-krediitit loppu',
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vision.ai-credits.usage': 'AI-käyttö',
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vision.ai-credits.used': '{{used}} AI-krediittiä käytetty tässä kuussa.',
  /** Button in the request column's action bar naming the API version requests go out with */
  'vision.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vision.api-version.button-cdn': 'API CDN {{version}}',
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vision.api-version.button-invalid': 'Keskeneräinen API-versio',
  /** Tooltip of the API version button */
  'vision.api-version.tooltip':
    'Kyselyt suoritetaan API-versiota {{version}} vasten. Valitse muuttaaksesi sitä Asetuksissa.',
  /** Tooltip of the API version button while queries go through the API CDN */
  'vision.api-version.tooltip-cdn':
    'Kyselyt suoritetaan API CDN:ää vasten API-versiolla {{version}}. Valitse muuttaaksesi sitä Asetuksissa.',
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vision.api-version.tooltip-cdn-blocked':
    'Kyselyt suoritetaan API:a vasten API-versiolla {{version}}, ei API CDN:ää vasten: se ei palvele {{perspective}}-näkökulmaa. Valitse muuttaaksesi sitä Asetuksissa.',
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vision.api-version.tooltip-invalid':
    'Asetuksissa oleva API-versio on keskeneräinen, joten mitään ei voida hakea ennen kuin se on valmis.',
  /** Tooltip of the API version button while a selected variant forces the variants API version */
  'vision.api-version.tooltip-locked':
    'Kyselyt suoritetaan API-versiota {{version}} vasten, jota valittu variantti tarvitsee.',
  /** Label of the document after the change in the Delta panel */
  'vision.delta.after': 'Jälkeen',
  /** Label of the document before the change in the Delta panel */
  'vision.delta.before': 'Ennen',
  /** What the Delta panel does */
  'vision.delta.description':
    'Suorittaa kyselyn delta-tilassa, kuten GROQ-pohjaiset webhookit, kuuntelijat ja Sanity Functions -toiminnot tekevät: before() ja after() ovat dokumentti ennen ja jälkeen muutoksen, @ on dokumentti sen jälkeen, ja delta::changedAny() vertaa niitä. Se suoritetaan selaimessa groq-js:llä. Tyhjä puoli tarkoittaa, ettei dokumenttia ole: muutos luo tai poistaa sen.',
  /** Label of the document ID field in the Delta panel */
  'vision.delta.document-id': 'Dokumentin tunnus',
  /** Shown when there is a query but no documents to compare */
  'vision.delta.empty':
    'Lataa dokumentin historia tai kirjoita dokumentit kohtiin Ennen ja Jälkeen.',
  /** Shown when the query fails in delta mode */
  'vision.delta.failed': 'Kyselyä ei voitu suorittaa delta-tilassa: {{message}}',
  /** Shown when the After document is not valid JSON */
  'vision.delta.invalid-after': 'Jälkeen ei ole kelvollista JSONia: {{message}}',
  /** Shown when the Before document is not valid JSON */
  'vision.delta.invalid-before': 'Before ei ole kelvollista JSON-muotoa: {{message}}',
  /** Button loading the document's revisions from the History API */
  'vision.delta.load': 'Lataa historia',
  /** Shown when the history could not be loaded */
  'vision.delta.load-failed': 'Historiaa ei voitu ladata: {{message}}',
  /** A delta filter that is true for the change */
  'vision.delta.matches':
    'Vastaa: tällä suodattimella varustettu webhook tai funktio suoritetaan tälle muutokselle.',
  /** A delta filter that is false for the change */
  'vision.delta.no-match':
    'Ei vastaa: tällä suodattimella varustettua webhookia tai funktiota ei suoriteta tälle muutokselle.',
  /** Shown while the query or its params cannot be sent */
  'vision.delta.no-request': 'Korjaa kysely ja sen parametrit suorittaaksesi sen delta-tilassa.',
  /** Heading of the delta result */
  'vision.delta.result': 'Tulos',
  /** The After choice for a change that deletes the document */
  'vision.delta.revision.none-after': 'Ei mitään: muutos poistaa dokumentin',
  /** The Before choice for a change that creates the document */
  'vision.delta.revision.none-before': 'Ei mitään: muutos luo dokumentin',
  /** A revision in the Before and After lists */
  'vision.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vision.drawer.close': 'Sulje paneeli',
  /** Explanation at the top of the Explain panel */
  'vision.explain.description':
    'Kyselysuunnitelma kertoo, miten Content Lake suorittaa kyselyn: mitä se lukee, suodattaa ja järjestää lukemisen aikana, ja mitä jää myöhempiin vaiheisiin. ”Selitä tämä minulle” -toiminto käyttää Sanity Agent Actions -ominaisuutta kuvaamaan kyselyn ja sen suunnitelman selkokielellä, mikä kuluttaa yhden tekoälykrediitin.',
  /** Shown in the Explain panel while there is no valid query to explain */
  'vision.explain.empty': 'Kirjoita kysely selittääksesi sen.',
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vision.explain.explain': 'Selitä tämä minulle',
  /** Shown when the explanation could not be written */
  'vision.explain.failed': 'Kyselyä ei voitu selittää: {{message}}',
  /** A count the index computes without reading the documents */
  'vision.explain.insight.aggregate': 'Laskettu indeksissä, lukematta dokumentteja.',
  /** A subquery the plan runs once for all documents */
  'vision.explain.insight.batched-subquery':
    'Alikysely suoritetaan kerran kaikille dokumenteille yhtenä eräkyselynä, ei kerran per dokumentti.',
  /** Part of the filter runs in memory; the expression follows */
  'vision.explain.insight.filter-in-memory':
    'Osa suodattimesta suoritetaan muistissa lukemisen jälkeen: jokainen indeksin läpäisevä dokumentti luetaan ensin, mikä hidastaa suuria tietojoukkoja. Liitokset (->) ja funktiot suodattimessa eivät voi käyttää indeksiä.',
  /** The index sorts and limits while reading */
  'vision.explain.insight.index-sort-limit':
    'Indeksi järjestää ja rajoittaa dokumentteja niitä lukiessaan.',
  /** The plan slices in memory */
  'vision.explain.insight.slice-in-memory':
    'Viipale otetaan muistissa lukemisen jälkeen, ei rajoituksena lukemisen aikana.',
  /** The plan sorts in memory */
  'vision.explain.insight.sort-in-memory':
    'Järjestäminen tapahtuu muistissa, kun kaikki osumat on luettu. Järjestä attribuuteilla, joita indeksi pystyy järjestämään.',
  /** Link under the plan insights to the guide on fast queries */
  'vision.explain.insights.guide': 'Suorituskykyinen GROQ',
  /** Heading of the plan insights in the Explain panel */
  'vision.explain.insights.title': 'Mikä erottuu',
  /** Button in the Explain panel fetching the query plan */
  'vision.explain.plan': 'Näytä kyselysuunnitelma',
  /** Shown when the query plan could not be fetched */
  'vision.explain.plan-failed': 'Kyselysuunnitelmaa ei voitu hakea: {{message}}',
  /** Heading of the query plan in the Explain panel */
  'vision.explain.plan-title': 'Kyselysuunnitelma',
  /** Toast shown after a code snippet was copied */
  'vision.export-query.copied': 'Katkelma kopioitu leikepöydälle',
  /** Label for the button that copies a code snippet */
  'vision.export-query.copy': 'Kopioi katkelma',
  /** Explanation at the top of the export query dialog */
  'vision.export-query.description':
    'Suorita tämä kysely studion ulkopuolella yhdellä näistä katkelmista.',
  /** Note under the curl snippet when the query is sent as a request body rather than in the URL */
  'vision.export-query.post-body-note':
    'Kysely ja parametrit ovat {{size}} merkkiä hakuparametreina; alkaen {{limit}} merkistä @sanity/client lähettää ne JSON-runkona URL-osoitteen sijaan, joten katkelma tekee saman.',
  /** Title of the dialog that exports the query as code snippets */
  'vision.export-query.title': 'Vie kysely',
  /** Note about authentication in the export query dialog */
  'vision.export-query.token-note':
    'Yksityiset tietojoukot tarvitsevat API-tokenin. Julkisissa tietojoukoissa Authorization-otsikon voi jättää pois.',
  /** Toast shown after the generated code was copied */
  'vision.export-types.copied': 'Koodi kopioitu leikepöydälle',
  /** Label for the button that copies the generated code */
  'vision.export-types.copy': 'Kopioi koodi',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vision.export-types.empty': 'Hae kysely ensin, jotta tyypit voidaan johtaa tuloksesta.',
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vision.export-types.schema-error': 'Skeeman arviointi epäonnistui: {{message}}',
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vision.export-types.source.result':
    'Pääteltu haetusta tuloksesta, koska kyselyä ei voitu arvioida työtilan skeemaa vasten.',
  /** Note shown when the types were derived from the workspace schema */
  'vision.export-types.source.schema':
    'Pääteltu työtilan skeemasta, samalla tavalla kuin sanity typegen tekee sen.',
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vision.export-types.stale-result':
    'Näytetty tulos haettiin eri kyselyllä tai parametreilla. Hae nykyinen kysely ensin, jotta tyypit voidaan johtaa tuloksesta.',
  /** Title of the dialog exporting TypeScript types for the result */
  'vision.export-types.title-typescript': 'Vie TypeScript',
  /** Title of the dialog exporting a Zod schema for the result */
  'vision.export-types.title-zod': 'Vie Zod',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vision.functions.add': 'Lisää kyselyyn',
  /** Shown on a library function the query declares the same way */
  'vision.functions.declared': 'Tässä kyselyssä',
  /** Lint action on a call of a library function the query does not declare */
  'vision.functions.editor.add-from-library': 'Ilmoita se',
  /** Note in a function's hover documentation: the API version it needs */
  'vision.functions.editor.api-version': 'Vaatii API-version {{version}} tai uudemman',
  /** Detail of a completion for a custom function the query declares */
  'vision.functions.editor.completion-declared': 'tässä kyselyssä',
  /** Detail of a completion for a library function, which declares it too */
  'vision.functions.editor.completion-library': 'kirjastostasi',
  /** Note in the hover documentation of a custom function the query declares */
  'vision.functions.editor.declared-on': 'Mukautettu funktio, määritelty rivillä {{line}}',
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vision.functions.editor.delta-only':
    'Toimii vain delta-tilassa, jossa webhookit ja Sanity-funktiot suorittavat suodattimensa',
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vision.functions.editor.extract': 'Erota funktioksi',
  /** Note in the hover documentation of a library function the query does not declare */
  'vision.functions.editor.in-library': 'Funktiokirjastossasi, ei määritelty tässä kyselyssä',
  /** Link at the end of a built-in function's hover documentation */
  'vision.functions.editor.reference': 'GROQ-funktioiden viiteopas',
  /** Explanation under the library heading in the Functions panel */
  'vision.functions.library.description':
    'Säilytetään tässä selaimessa projektin jokaista datasettia varten. Täydennykset tarjoavat näitä funktioita, ja lint ehdottaa jonkin niistä määrittelemistä, jota kysely kutsuu.',
  /** Shown in the Functions panel while the library is empty */
  'vision.functions.library.empty':
    'Tallenna kyselyn määrittelemä funktio käyttääksesi sitä muissa kyselyissä.',
  /** Heading of the functions library in the Functions panel */
  'vision.functions.library.title': 'Kirjasto',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vision.functions.query.empty':
    'Määrittele mukautettuja funktioita kyselyn alussa, tai aseta kohdistin projektioon, kuten author->{name}, ja paina editorin yläpuolella olevaa erotuspainiketta ({{shortcut}}).',
  /** Heading of the functions the query declares in the Functions panel */
  'vision.functions.query.title': 'Tässä kyselyssä',
  /** Removes a function from the library */
  'vision.functions.remove': 'Poista kirjastosta',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vision.functions.replace': 'Korvaa kyselyssä',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vision.functions.reveal': 'Näytä {{name}} editorissa',
  /** Button of a function the query declares that is not in the library yet */
  'vision.functions.save': 'Tallenna kirjastoon',
  /** Shown on a function the query declares the way the library has it */
  'vision.functions.saved': 'Tallennettu',
  /** Button of a function the query declares differently from the library's version */
  'vision.functions.update': 'Päivitä kirjasto',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vision.generate.button': 'Luo kysely',
  /** Closes the generate query bar */
  'vision.generate.close': 'Sulje',
  /** Explanation under the generate query field */
  'vision.generate.description':
    'Sanity Agent Actions kirjoittaa GROQ-kyselyn kuvauksesi ja dokumenttityyppien perusteella, ja Content Lake tarkistaa jokaisen yrityksen; jokainen yritys käyttää yhden tekoälykrediitin. Se korvaa tämän välilehden kyselyn ja suorittaa sen; editorin kumoa-toiminto palauttaa edellisen kyselyn.',
  /** Shown when no query could be generated, above the reason */
  'vision.generate.failed': 'Kyselyä ei voitu luoda',
  /** Accessible label of the description field in the generate query bar */
  'vision.generate.label': 'Mitä kyselyn pitäisi hakea?',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vision.generate.open-anyway': 'Avaa viimeisin yritys',
  /** Placeholder of the description field in the generate query bar */
  'vision.generate.placeholder':
    '10 viimeisintä kirjoittajaa, järjestettynä sukunimen ja sitten etunimen mukaan',
  /** Shown while the first attempt at a query is written */
  'vision.generate.progress': 'Kirjoitetaan kyselyä…',
  /** Shown while a rejected attempt is retried */
  'vision.generate.progress-retry': 'Korjataan kyselyä (yritys {{attempt}}/{{max}})…',
  /** Button generating the query */
  'vision.generate.submit': 'Luo',
  /** Badge on a history entry the API CDN answered */
  'vision.history.cdn': 'API CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vision.history.cdn-cache-hit': 'CDN-välimuistiosuma',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vision.history.changed': 'Muutettu',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vision.history.changes': 'Muutokset',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vision.history.changes-failed': 'Muutoksia ei voitu näyttää.',
  /** Button retrying to show the changes of a history entry */
  'vision.history.changes-retry': 'Yritä uudelleen',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vision.history.compared-with': 'Verrattuna hakuun ajankohtana {{time}}',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vision.history.diff.params': 'Parametrit',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vision.history.diff.query': 'Kysely',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vision.history.diff.query-formatting-only': 'Vain muotoilu muuttui',
  /** Label of the diff of the query result in a history entry's changes */
  'vision.history.diff.result': 'Tulos',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vision.history.diff.url': 'Pyynnön URL-osoite',
  /** Empty state of the history panel */
  'vision.history.empty': 'Ei vielä haettu mitään',
  /** Status label for a failed fetch in the history */
  'vision.history.failed': 'Epäonnistui',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vision.history.hide-hidden': 'Piilota ne',
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vision.history.hiding': 'Piilottaa kentät {{fields}}',
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vision.history.only-hidden-changed': 'Vain piilotetut kentät muuttuivat',
  /** History reason: a tab opened with a generated query fetched it */
  'vision.history.reason.generated': 'Luotu kysely',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vision.history.reason.link': 'Avattu linkki',
  /** History reason: a live event matched the query's sync tags */
  'vision.history.reason.live': 'Reaaliaikainen päivitys',
  /** History reason: the live connection asked every client to refetch */
  'vision.history.reason.live-restart': 'Reaaliaikainen yhteys käynnistettiin uudelleen',
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vision.history.reason.live-start': 'Reaaliaikainen haku käynnistetty',
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vision.history.reason.load': 'Kysely ladattu',
  /** History reason: the fetch button was pressed */
  'vision.history.reason.manual': 'Hae-painike',
  /** History reason: mutations were applied from the Mutate panel */
  'vision.history.reason.mutation': 'Muutokset sovellettu',
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vision.history.reason.options': 'Asetukset muuttuivat',
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vision.history.reason.paste': 'Liitetty URL-osoite',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vision.history.reason.resume': 'Automaattinen uudelleenhaku jatkettu',
  /** History reason: the keyboard shortcut was used */
  'vision.history.reason.shortcut': 'Pikanäppäin',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vision.history.same-result': 'Sama tulos',
  /** Button showing the hidden fields in a history entry's changes */
  'vision.history.show-hidden': 'Näytä ne',
  /** Next to a history entry's changes while the hidden fields are shown */
  'vision.history.showing-hidden': 'Näytetään {{fields}}, jotka on oletuksena piilotettu',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vision.history.too-large': 'Liian suuri vertailtavaksi',
  /** A history entry whose result is the same as the previous result */
  'vision.history.unchanged': 'Ei muutoksia',
  /** Shown in the Lint panel while the query has no lint findings */
  'vision.lint.empty':
    'Ei lint-havaintoja. GROQ-linterin kyselystä löytämät ongelmat listataan tähän kirjoittaessasi; valitse jokin niistä valitaksesi sen editorissa.',
  /** Where a lint finding sits in the query, shown under its message */
  'vision.lint.position': 'Rivi {{line}}, sarake {{column}}',
  /** Severity badge of a lint finding */
  'vision.lint.severity.error': 'Virhe',
  /** Severity badge of a lint finding */
  'vision.lint.severity.hint': 'Vihje',
  /** Severity badge of a lint finding */
  'vision.lint.severity.info': 'Tieto',
  /** Severity badge of a lint finding */
  'vision.lint.severity.warning': 'Varoitus',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vision.lint.use-suggestion': 'Käytä {{suggestion}}',
  /** Badge shown while a tab refetches automatically */
  'vision.live.active': 'Live',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vision.live.button': 'Live-haku',
  /** Tooltip of the Live button while automatic refetching is off */
  'vision.live.button.start': 'Hae, ja hae sitten uudelleen aina kun tuloksen dokumentit muuttuvat',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vision.live.button.stop':
    'Lopeta hakeminen, kun tuloksen dokumentit muuttuvat. Hae toimii silti tarvittaessa tuloksille, joihin mikään dokumenttimuutos ei vaikuta, kuten now()',
  /** Error shown when the live connection breaks */
  'vision.live.error': 'Live-päivitykset katkaistu: {{message}}',
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vision.live.stop': 'Pysäytä live',
  /** Button in the Mutate panel adding a mutation to the list */
  'vision.mutate.add': 'Lisää mutaatio',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vision.mutate.add.create': 'Luo dokumentti',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vision.mutate.add.delete': 'Poista dokumentti',
  /** Adds a mutation deleting the documents of the shown result */
  'vision.mutate.add.delete-result': 'Poista tuloksen dokumentit',
  /** Adds a mutation patching a document, its ID to fill in */
  'vision.mutate.add.patch': 'Päivitä dokumenttia (patch)',
  /** Adds a mutation patching the documents of the shown result */
  'vision.mutate.add.patch-result': 'Lisää tulosten dokumentteja päivittävä patch',
  /** Button applying the mutations a dry run showed */
  'vision.mutate.apply': 'Käytä kohteeseen {{dataset}}',
  /** Heading of the error shown when applying the mutations failed */
  'vision.mutate.apply-failed': 'Mutaatioita ei voitu käyttää',
  /** Next to Apply while the mutations as they are have had no dry run */
  'vision.mutate.apply-needs-preview':
    'Käytä lähettää sen, mitä testiajo näytti: suorita yksi ensin.',
  /** Option giving array items without a _key one */
  'vision.mutate.auto-keys': 'Lisää _key-avain taulukon kohteille, joilla ei ole sitä',
  /** Under the option giving array items a _key */
  'vision.mutate.auto-keys.description':
    'Studio tarvitsee sellaisen jokaiseen taulukon kohteeseen muokatakseen sitä.',
  /** Button showing a document's changes in the dry run */
  'vision.mutate.changes': 'Muutokset',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vision.mutate.changes-failed': 'Muutoksia ei voitu näyttää.',
  /** Button retrying to show a document's changes */
  'vision.mutate.changes-retry': 'Yritä uudelleen',
  /** What the Mutate panel does */
  'vision.mutate.description':
    'Kirjoita mutaatiot siinä muodossa kuin Mutations API ne ottaa vastaan, listana: create, createOrReplace, createIfNotExists, delete ja patch, ID:n tai GROQ-kyselyn mukaan. Testiajo näyttää, mitä ne tekisivät kullekin dokumentille muuttamatta mitään; Käytä kirjoittaa ne sitten datasettiin yhtenä transaktiona, tilisi avulla.',
  /** What the API says went wrong with one of the mutations */
  'vision.mutate.failure-item': 'Mutaatio {{index}}: {{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vision.mutate.generate.button': 'Luo mutaatioita',
  /** Explanation under the generate mutations field */
  'vision.mutate.generate.description':
    'Sanity Agent Actions kirjoittaa mutaatiot kuvauksesi, tulosten dokumenttien ja niiden tyyppien perusteella, ja testiajo tarkistaa jokaisen yrityksen; jokainen yritys käyttää yhden tekoälykrediitin. Ne korvaavat tämän kohdan mutaatiot, josta Kumoa tuo ne takaisin; mitään ei kirjoiteta ennen kuin käytät niitä.',
  /** Shown when no mutations could be generated, above the reason */
  'vision.mutate.generate.failed': 'Mutaatioita ei voitu luoda',
  /** Accessible label of the description field in the generate mutations bar */
  'vision.mutate.generate.label': 'Mitä mutaatioiden tulisi tehdä?',
  /** Placeholder of the description field in the generate mutations bar */
  'vision.mutate.generate.placeholder': 'Muuta tulosten dokumenttien otsikko muotoon foobar',
  /** Shown while the first attempt at the mutations is written */
  'vision.mutate.generate.progress': 'Kirjoitetaan mutaatioita…',
  /** Shown while an attempt the dry run turned down is retried */
  'vision.mutate.generate.progress-retry': 'Korjataan mutaatioita (yritys {{attempt}}/{{max}})…',
  /** Under the dry run: the fields the diffs leave out */
  'vision.mutate.hiding': 'Muutokset jättävät pois kentät {{fields}}, kuten Historia tekee.',
  /** Shown when the mutations are not valid JSON */
  'vision.mutate.invalid-json': 'Mutaatiot eivät ole kelvollista JSONia: {{message}}',
  /** Shown when a mutation does not name exactly one thing to do */
  'vision.mutate.invalid-mutation':
    'Mutaatio {{index}} tarvitsee täsmälleen yhden seuraavista: create, createOrReplace, createIfNotExists, delete tai patch.',
  /** Label of the mutations editor */
  'vision.mutate.mutations': 'Mutaatiot',
  /** The dry run touched no documents */
  'vision.mutate.no-documents': 'Mutaatiot eivät koske mitään dokumentteja.',
  /** Shown when the JSON is not a list of mutations */
  'vision.mutate.not-a-list':
    'Kirjoita lista mutaatioista, yksittäinen mutaatio tai pyyntörunko, jossa on lista mutaatioita.',
  /** A document the mutations create */
  'vision.mutate.operation.create': 'Luo',
  /** A document the mutations delete */
  'vision.mutate.operation.delete': 'Poista',
  /** A document the mutations touch without changing its content */
  'vision.mutate.operation.none': 'Ei muutosta',
  /** A document the mutations change */
  'vision.mutate.operation.update': 'Päivitä',
  /** Button running the mutations as a dry run */
  'vision.mutate.preview': 'Kuivaharjoitus',
  /** Heading of the error shown when the dry run failed */
  'vision.mutate.preview-failed': 'Kuivaharjoitus epäonnistui',
  /** Heading of the dry run's outcome */
  'vision.mutate.preview-heading': 'Kuivaharjoitus',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vision.mutate.stale':
    'Mutaatiot, data-aineisto tai asetukset muuttuivat tämän kuivaharjoituksen jälkeen. Suorita se uudelleen ottaaksesi muutokset käyttöön.',
  /** How many documents the dry run changes and leaves as they are */
  'vision.mutate.summary': 'Muutettu: {{changed}} · Muuttumaton: {{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vision.network.cache': 'Välimuisti',
  /** The API CDN answered from its cache */
  'vision.network.cache.hit': 'Osuma',
  /** Under the details of a CDN cache hit */
  'vision.network.cache.hit-explained':
    'CDN vastasi välimuistiin tallennetulla vastauksella lähellä sinua sijaitsevasta sijainnista; kysely ei saavuttanut API:a.',
  /** The API CDN answered with a response this session had not seen */
  'vision.network.cache.miss': 'Ei osumaa, tämän istunnon tietojen mukaan',
  /** The API answered, which caches nothing */
  'vision.network.cache.none': 'Ei mitään, API vastaa jokaiseen pyyntöön tuoreella sisällöllä',
  /** Shown in the Network panel while there is no response */
  'vision.network.empty':
    'Hae kysely nähdäksesi, mikä päätepiste vastasi siihen, vastattiinko välimuistista ja missä se suoritettiin.',
  /** In the Network panel: the endpoint that answered */
  'vision.network.endpoint': 'Vastasi',
  /** The live API answered */
  'vision.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vision.network.endpoint.cdn': 'API CDN',
  /** In the Network panel: the HTTP method the query was sent with */
  'vision.network.method': 'Menetelmä',
  /** The query and its params went in the URL */
  'vision.network.method.get': 'GET, kysely ja parametrit URL-osoitteessa',
  /** The query and its params went in the request body */
  'vision.network.method.post': 'POST, kysely ja parametrit JSON-pyyntörunkona',
  /** Under the method of a POST request: why the query was not sent in the URL */
  'vision.network.method.post-explained':
    'Kysely ja parametrit ovat {{size}} merkkiä pitkiä hakuparametreina; alkaen {{limit}} merkistä @sanity/client lähettää ne JSON-pyyntörunkona, koska API rajoittaa URL-osoitteen pituutta. Asetukset pysyvät URL-osoitteessa.',
  /** In the Network panel: the region the query ran in */
  'vision.network.region': 'Kysely suoritettiin',
  /** The response did not say where the query ran */
  'vision.network.region.unknown': 'Ei raportoitu',
  /** In the Network panel: the round trip and the time on the server */
  'vision.network.timing': 'Aika',
  /** The round trip and the server's time for the query, in milliseconds */
  'vision.network.timing.value': '{{e2e}}ms edestakainen aika, {{server}}ms palvelimella',
  /** In the Network panel: the trace of the request, for Sanity support */
  'vision.network.trace': 'Jäljitystunnus',
  /** Hint in the Network panel while queries go to the API */
  'vision.network.use-cdn-hint':
    'Ota käyttöön Käytä API CDN:ää Asetuksista lähettääksesi kyselyt CDN:n kautta.',
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vision.network.you': 'Sinä',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vision.options.dataset.follows-workspace': 'Seuraa työtilaa',
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vision.options.dataset.pin': 'Kiinnitä tietojoukko',
  /** Hint under the dataset field while a dataset is pinned */
  'vision.options.dataset.pinned': 'Kiinnitetty; työtila saattaa käyttää toista tietojoukkoa',
  /** Button that makes the tab follow the workspace's dataset again */
  'vision.options.dataset.use-workspace': 'Käytä työtilan tietojoukkoa',
  /** Label for the "Include content source map" switch */
  'vision.options.include-source-map': 'Sisällytä sisällön lähdekartta',
  /** Description for the "Include content source map" switch */
  'vision.options.include-source-map.description':
    'Lisää resultSourceMapin vastaukseen, joka näkyy Sisällön lähdekartta -välilehdellä.',
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vision.options.perspective.global': 'Yleinen ({{name}})',
  /** Label of the switch that sends queries to the API CDN */
  'vision.options.use-cdn': 'Käytä API CDN:ää',
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vision.options.use-cdn.anonymous':
    'Tämä studio kirjaa sinut sisään evästeen avulla, jota API CDN ei koskaan vastaanota: se vastaa kuten anonyymille vierailijalle, eli näyttää sen, mitä julkinen tietojoukko näyttää.',
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vision.options.use-cdn.blocked':
    "API CDN ei tarjoile luonnoksia tai julkaisuja, joten kyselyt {{perspective}}-perspektiivillä menevät API:lle. Julkaistulla tai raa'alla perspektiivillä ne käyttävät CDN:ää.",
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vision.options.use-cdn.blocked.title': 'Kyselyt menevät API:lle, ei CDN:lle',
  /** Description of the API CDN switch */
  'vision.options.use-cdn.description':
    'Lähettää kyselyn API CDN:ään, kuten useCdn: true @sanity/client-kirjastossa, julkaistu- ja raaka-perspektiiveillä: luonnokset ja julkaisut menevät aina API:lle. Vastaukset välimuistoidaan enintään minuutiksi; Verkko-paneeli näyttää, kun vastaus tuli välimuistista.',
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vision.options.use-cdn.use-published': 'Käytä julkaistua perspektiiviä',
  /** Label of the variant field */
  'vision.options.variant-label': 'Variantti',
  /** Variant option sending the navbar's variant, named */
  'vision.options.variant.global': 'Yleinen ({{name}})',
  /** Variant option sending the navbar's variant while none is selected there */
  'vision.options.variant.global-none': 'Yleinen (ei valintaa)',
  /** Variant option sending no variant */
  'vision.options.variant.none': 'Ei mitään',
  /** Accessible label for collapsing a bottom panel */
  'vision.panel.collapse': 'Pienennä paneeli',
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vision.panel.delta': 'Delta',
  /** Accessible label for expanding a bottom panel */
  'vision.panel.expand': 'Laajenna paneeli',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vision.panel.explain': 'Selitä',
  /** Label of the Functions tab in the response panel */
  'vision.panel.functions': 'Funktiot',
  /** Label of the "History" tab in the response panel */
  'vision.panel.history': 'Historia',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vision.panel.lint': 'Lint',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vision.panel.mutate': 'Muokkaa',
  /** Label of the Network tab in the response panel */
  'vision.panel.network': 'Verkko',
  /** Label of the "Options" panel in the request column */
  'vision.panel.options': 'Asetukset',
  /** Label of the "Response" tab in the response panel */
  'vision.panel.response': 'Vastaus',
  /** Label of the "Content Source Map" tab in the response panel */
  'vision.panel.source-map': 'Sisällön lähdekartta',
  /** Button adding an item to a list param in the params form */
  'vision.params-form.add-item': 'Lisää kohde',
  /** Placeholder of a params form field that takes any JSON value */
  'vision.params-form.any-placeholder':
    'Mikä tahansa JSON-arvo; muu teksti lähetetään merkkijonona',
  /** Shown in the params form when the query uses no params */
  'vision.params-form.empty':
    'Kysely ei käytä parametreja. Jokainen siinä oleva $nimi saa tähän oman kentän.',
  /** Shown in the params form while the params JSON cannot be parsed */
  'vision.params-form.invalid-json':
    'Parametrit eivät ole kelvollista JSONia. Korjaa ne JSON-näkymässä muokataksesi niitä täällä.',
  /** A boolean param's value is not true or false; it is sent anyway */
  'vision.params-form.invalid.boolean': 'Ei ole tosi tai epätosi; lähetetään muodossa {{value}}',
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vision.params-form.invalid.document-type':
    'Ei ole tämän työtilan dokumenttityyppi; lähetetään silti',
  /** A whole number param (a slice bound) holds a fraction */
  'vision.params-form.invalid.integer': 'Ei ole kokonaisluku, jota viipaleet tarvitsevat',
  /** A list param's value is not a list; it is sent anyway */
  'vision.params-form.invalid.list': 'Ei ole lista; lähetetään muodossa {{value}}',
  /** A number param's value is not a number; it is sent anyway */
  'vision.params-form.invalid.number': 'Ei ole numero; lähetetään tekstinä',
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vision.params-form.invalid.option': 'Ei ole mikään tunnetuista arvoista; lähetetään silti',
  /** A text param's value is not text; it is sent anyway */
  'vision.params-form.invalid.string': 'Ei ole tekstiä; lähetetään muodossa {{value}}',
  /** Accessible label of an item input of a list param in the params form */
  'vision.params-form.item-label': '${{name}}, kohde {{index}}',
  /** Placeholder of an item input of a list param in the params form */
  'vision.params-form.item-placeholder': 'Kohde',
  /** Under a params form field whose param has no value */
  'vision.params-form.missing': 'Ei asetettu: kysely epäonnistuu, kunnes sillä on arvo',
  /** Shown in the params form when the workspace schema could not be read */
  'vision.params-form.no-schema':
    'Tyypit tulevat pelkästä kyselystä: työtilan skeemaa ei voitu lukea.',
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vision.params-form.not-set': 'Ei asetettu',
  /** Button setting a date and time param to the current time */
  'vision.params-form.now': 'Nyt',
  /** Button removing a param the query does not use from the params */
  'vision.params-form.remove': 'Poista',
  /** Accessible label of the button removing an item from a list param */
  'vision.params-form.remove-item': 'Poista kohde',
  /** Shown in the params form when the query does not parse */
  'vision.params-form.syntax-error':
    'Kyselyä ei voida jäsentää, joten sen parametrit on lueteltu ilman tyyppejä.',
  /** Type hint of a params form field: any JSON value */
  'vision.params-form.type.any': 'mikä tahansa JSON-arvo',
  /** Type hint of a params form field: true or false */
  'vision.params-form.type.boolean': 'tosi tai epätosi',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vision.params-form.type.datetime': 'päivämäärä ja aika (ISO 8601)',
  /** Type hint of a params form field: a document ID */
  'vision.params-form.type.document-id': 'dokumentin tunnus',
  /** Type hint of a params form field: one of the workspace's document types */
  'vision.params-form.type.document-type': 'dokumenttityyppi',
  /** Type hint of a params form field: a whole number */
  'vision.params-form.type.integer': 'kokonaisluku',
  /** Type hint of a params form field: a list of values */
  'vision.params-form.type.list': 'lista, jonka jokainen alkio on {{type}}',
  /** Type hint of a params form field: a number */
  'vision.params-form.type.number': 'luku',
  /** Type hint of a params form field: text */
  'vision.params-form.type.string': 'teksti',
  /** Heading of the params the query does not use, listed in the params form */
  'vision.params-form.unused': 'Ei käytössä kyselyssä',
  /** Before the expressions that use a param, in the params form */
  'vision.params-form.used-in': 'Käytetään kohteessa',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vision.params.fit-height': 'Sovitettu sisältöön, {{height}} pikseliä',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vision.params.resize':
    'Muuta parametrien kokoa: vedä tai käytä nuolinäppäimiä; kaksoisnapsauta tai paina Enter sovittaaksesi sisältöön uudelleen',
  /** Tab showing the params as a form inferred from the query */
  'vision.params.view.form': 'Lomake',
  /** Tab showing the params as JSON */
  'vision.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vision.params.view.label': 'Muokkaa parametreja muodossa',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vision.paste.parsed': 'Kysely ladattu liitetystä URL-osoitteesta',
  /** Toast shown after a curl command for a query was pasted and loaded into the tab */
  'vision.paste.parsed-curl': 'Kysely ladattu liitetystä cURL-komennosta',
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vision.paste.unavailable-variant':
    'Liitetty URL-osoite käytti varianttia "{{variant}}"; valitse se valikkopalkista suorittaaksesi kyselyn sillä.',
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vision.paste.unknown-dataset':
    'Liitetyn URL-osoitteen tietojoukko "{{dataset}}" ei ole käytettävissä täällä, säilytetään nykyinen.',
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vision.paste.unsupported-perspective':
    'Liitetyn URL-osoitteen perspektiiviä ei tueta täällä, säilytetään nykyinen.',
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vision.paste.variants-disabled':
    'Liitetty URL-osoite käytti varianttia "{{variant}}"; tässä työtilassa variantit on poistettu käytöstä, joten kysely suoritetaan ilman sitä.',
  /** Accessible label for the query actions menu */
  'vision.query.actions': 'Kyselytoiminnot',
  /** Tooltip when automatic refetching is not available for the API version */
  'vision.query.auto-refetch.unsupported':
    'Automaattinen uudelleenhaku vaatii API-version v2021-03-25 tai uudemman.',
  /** Toast shown after the query was copied */
  'vision.query.copied': 'Kysely kopioitu leikepöydälle',
  /** Menu item copying the query text */
  'vision.query.copy': 'Kopioi kysely',
  /** Menu item opening the export query dialog */
  'vision.query.export': 'Vie kysely…',
  /** Menu item reformatting the query */
  'vision.query.prettify': 'Jäsennä kysely',
  /** Toast shown when the query could not be reformatted */
  'vision.query.prettify.failed': 'Kyselyä ei voitu jäsentää',
  /** Menu item saving the query to the personal saved queries */
  'vision.query.save': 'Tallenna kysely',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vision.query.stop': 'Pysäytä',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vision.query.stop.description': 'Pysäytä haku',
  /** Explanation in the settings section about the redesigned experience */
  'vision.redesign.settings.description':
    'Käytät uudistettua Vision-työkalua. Vaihtamalla takaisin välilehtesi ja asetuksesi säilyvät tässä selaimessa seuraavaa kertaa varten.',
  /** Title of the settings section about the redesigned experience */
  'vision.redesign.settings.title': 'Uudistettu Vision (beta)',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vision.redesign.switch-to-classic': 'Vaihda klassiseen Vision-työkaluun',
  /** Toast button that switches to the redesigned tool */
  'vision.redesign.toast.accept': 'Kokeile nyt',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vision.redesign.toast.description':
    'Kyselyvälilehdet, reaaliaikainen uudelleenhaku, vastausten tiedot ja viennit. Voit vaihtaa takaisin milloin tahansa.',
  /** Toast button that hides the invitation */
  'vision.redesign.toast.dismiss': 'Ei nyt',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vision.redesign.toast.title': 'Kokeile uudistettua Visionia',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vision.redesign.try': 'Kokeile uudistusta',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vision.redesign.try.description':
    'Vaihda uudistettuun Vision-työkaluun, joka on betassa. Voit vaihtaa takaisin milloin tahansa sen sivupalkista.',
  /** Empty state of the response panel before anything was fetched */
  'vision.response.empty': 'Ei vielä haettuja tietoja',
  /** Label for the payload size in the response tab */
  'vision.response.payload-size': 'Datan koko',
  /** Label for the sync tags in the response tab */
  'vision.response.sync-tags': 'Synkronointitunnisteet',
  /** Shown when the response carried no sync tags */
  'vision.response.sync-tags.none': 'Vastauksessa ei ollut synkronointitunnisteita',
  /** Under the query URL when the request went out as a POST body rather than that URL */
  'vision.response.url.sent-as-post':
    'Lähetetty POST-sisältönä: kysely ja parametrit ovat liian pitkiä URL-osoitteeksi, joten @sanity/client lähetti ne JSON-muodossa. Tämän URL-osoitteen liittäminen Visioniin lataa silti kyselyn.',
  /** Accessible label for the result actions menu */
  'vision.result.actions': 'Tuloksen toiminnot',
  /** Toast shown after the result was copied */
  'vision.result.copied': 'Tulos kopioitu leikepöydälle',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vision.result.copied-value': 'Kopioitu {{path}}',
  /** Menu item and button copying the result as JSON */
  'vision.result.copy': 'Kopioi tulos',
  /** Button next to each property in the result tree, copying its value */
  'vision.result.copy-value': 'Kopioi arvo',
  /** Empty state of the result view */
  'vision.result.empty': 'Suorita kysely nähdäksesi tuloksen täällä',
  /** Button exporting the result as CSV */
  'vision.result.export-csv': 'Vie CSV',
  /** Button exporting the result as JSON */
  'vision.result.export-json': 'Vie JSON',
  /** Menu item opening the TypeScript export dialog */
  'vision.result.export-typescript': 'Vie TypeScript…',
  /** Menu item opening the Zod export dialog */
  'vision.result.export-zod': 'Vie Zod…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vision.result.graph.collapse': 'Piilota mitä se sisältää',
  /** Button fitting the whole graph in view */
  'vision.result.graph.fit': 'Sovita näkymään',
  /** Accessible label of the graph, saying how to move around in it */
  'vision.result.graph.label':
    'Tulosgraafi: vedä liikkuaksesi, vieritä zoomataksesi; kun kohdistettu, nuolinäppäimet liikuttavat, + ja - zoomaavat, 0 sovittaa',
  /** Ends the note on a graph that leaves part of this result out */
  'vision.result.graph.left-out-hint': 'Puu- ja JSON-näkymät näyttävät sen kokonaan.',
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vision.result.graph.node-limit': 'Vain ensimmäiset {{nodes}} objektia ja taulukkoa piirretään.',
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vision.result.graph.partial':
    'Vain ensimmäiset {{rows}} merkintää luetellaan kohteelle {{nodes}}.',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vision.result.graph.partial.node': '{{name}} ({{entries}} merkintää)',
  /** Title of the graph node of the result itself */
  'vision.result.graph.root': 'tulos',
  /** Button zooming into the graph */
  'vision.result.graph.zoom-in': 'Lähennä',
  /** Button zooming out of the graph */
  'vision.result.graph.zoom-out': 'Loitonna',
  /** Tab showing the result as a graph of its objects and arrays */
  'vision.result.view.graph': 'Graafi',
  /** Tab showing the result as indented JSON text, to select and copy from */
  'vision.result.view.json': 'JSON',
  /** Accessible label of the tabs that switch how the result shows */
  'vision.result.view.label': 'Tulosnäkymä',
  /** Tab showing the result as a tree to browse */
  'vision.result.view.tree': 'Puu',
  /** Empty state of the saved queries panel */
  'vision.saved.empty':
    'Ei vielä tallennettuja kyselyitä. Tallenna nykyinen kysely +-painikkeella.',
  /** Empty state of a query list when the search matches nothing */
  'vision.saved.empty-search': 'Hakuasi ei vastaa yksikään kysely',
  /** Menu item loading a saved query into the active tab */
  'vision.saved.load-in-current-tab': 'Lataa nykyiseen välilehteen',
  /** Menu item opening a saved query in a new tab */
  'vision.saved.open-in-new-tab': 'Avaa uudessa välilehdessä',
  /** Menu item renaming a saved query */
  'vision.saved.rename': 'Nimeä uudelleen',
  /** Accessible label for the button saving the current query */
  'vision.saved.save-current': 'Tallenna nykyinen kysely',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vision.saved.unavailable-variant':
    'Tämä tallennettu kysely käytti varianttia "{{variant}}"; valitse se navigointipalkista suorittaaksesi kyselyn sillä.',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vision.saved.unknown-dataset':
    'Tämän tallennetun kyselyn tietojoukko "{{dataset}}" ei ole käytettävissä täällä, nykyinen säilytetään.',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vision.saved.variants-disabled':
    'Tämä tallennettu kysely käytti varianttia "{{variant}}"; tässä työtilassa variantit on poistettu käytöstä, joten kysely suoritetaan ilman sitä.',
  /** Button in the settings dialog that clears the stored state */
  'vision.settings.clear-storage': 'Tyhjennä tallennustila',
  /** Confirmation button for clearing the storage */
  'vision.settings.clear-storage.confirm': 'Kyllä, tyhjennä tallennustila',
  /** Explanation of what clearing the storage does */
  'vision.settings.clear-storage.description':
    'Poistaa henkilökohtaiset tallennetut kyselysi ja funktiokirjaston, nollaa avoimet välilehdet ja nämä oletukset tässä selaimessa sekä palaa klassiseen Vision-työkaluun. Jaetut kyselyt säilytetään.',
  /** Toast shown when the saved queries could not be cleared */
  'vision.settings.clear-storage.error': 'Tallennettuja kyselyitä ei voitu tyhjentää',
  /** Toast shown after the storage was cleared */
  'vision.settings.clear-storage.success': 'Tallennustila tyhjennetty',
  /** Explanation at the top of the settings dialog */
  'vision.settings.description':
    'Oletukset uusille välilehdille. Avoimet välilehdet säilyttävät omat asetuksensa.',
  /** Explains the setting listing the fields left out of History diffs */
  'vision.settings.history-diff.description':
    'Yksi kenttäpolku riviä kohden. Polku täsmää tuloksen missä tahansa syvyydessä, joten _rev piilottaa jokaisen siinä olevan asiakirjan version. Jokainen diff voi silti näyttää ne.',
  /** Button restoring the default fields left out of History diffs */
  'vision.settings.history-diff.reset': 'Palauta oletusasetukset',
  /** Label of the setting listing the fields left out of History diffs */
  'vision.settings.history-diff.title': 'Historiadiffeistä piilotetut kentät',
  /** Title of the settings dialog */
  'vision.settings.title': 'Asetukset',
  /** Empty state of the shared queries panel */
  'vision.shared.empty':
    'Ei vielä jaettuja kyselyitä. Jaa tallennettu kysely tehdäksesi siitä saatavilla kaikille, jotka käyttävät tätä tietojoukkoa.',
  /** Shortcut description: close dialogs and menus */
  'vision.shortcuts.close': 'Sulje valintaikkunat ja valikot',
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vision.shortcuts.complete': 'Täydennä funktion nimi',
  /** Shortcut description: copy the query */
  'vision.shortcuts.copy-query': 'Kopioi kysely',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vision.shortcuts.extract-function': 'Pura kursorin kohdalla oleva projektio funktioksi',
  /** Shortcut description: run the query */
  'vision.shortcuts.fetch': 'Hae kysely',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vision.shortcuts.next-finding': 'Siirry seuraavaan lint-löydökseen',
  /** Shortcut description: reformat the query */
  'vision.shortcuts.prettify': 'Siisti kysely',
  /** Title of the keyboard shortcuts dialog */
  'vision.shortcuts.title': 'Pikanäppäimet',
  /** Sidebar toggle: show icons only */
  'vision.sidebar.collapse': 'Tiivistä sivupalkki',
  /** Sidebar toggle: show labels next to the icons */
  'vision.sidebar.expand': 'Laajenna sivupalkki',
  /** Accessible label for the sidebar navigation */
  'vision.sidebar.label': 'Vision-sivupalkki',
  /** Sidebar item and drawer title for personal saved queries */
  'vision.sidebar.saved-queries': 'Tallennetut kyselyt',
  /** Sidebar item opening the settings dialog */
  'vision.sidebar.settings': 'Asetukset',
  /** Sidebar item and drawer title for shared queries */
  'vision.sidebar.shared-queries': 'Jaetut kyselyt',
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vision.sidebar.shortcuts': 'Pikanäppäimet',
  /** Empty state of the content source map panel */
  'vision.source-map.empty':
    'Vastauksessa ei ole content source mapia. Ota käyttöön "Sisällytä content source map" Asetuksista ja hae uudelleen.',
  /** Accessible label of the divider between the result and the response details panel */
  'vision.split.bottom-panel':
    'Muuta vastauksen tietopaneelin kokoa: vedä hiirellä tai käytä nuolinäppäimiä; Home ja End siirtävät rajoihin, Enter palauttaa',
  /** Accessible label of the divider between the request and response panes */
  'vision.split.request-response':
    'Muuta pyyntö- ja vastauspaneelien kokoa: vedä hiirellä tai käytä nuolinäppäimiä; Home ja End siirtävät rajoihin, Enter palauttaa',
  /** Accessible label for the button closing a query tab */
  'vision.tabs.close-tab': 'Sulje välilehti',
  /** Accessible label for the list of query tabs */
  'vision.tabs.label': 'Kyselyvälilehdet',
  /** Accessible label for the button opening a new query tab */
  'vision.tabs.new-tab': 'Uusi välilehti',
  /** Placeholder of the input renaming a tab */
  'vision.tabs.title-placeholder': 'Välilehden otsikko',
  /** Title of a tab whose query is still empty */
  'vision.tabs.untitled': 'Nimetön kysely',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vision.webmcp.check-query': 'Tarkista GROQ-kysely Visionissa',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vision.webmcp.describe-schema': 'Kuvaile skeema Visionissa',
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vision.webmcp.explain-query': 'Selitä GROQ-kysely Visionissa',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vision.webmcp.get-state': 'Lue avoin Vision-välilehti',
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vision.webmcp.open-query': 'Avaa GROQ-kysely Visionissa',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vision.webmcp.preview-mutations': 'Esikatsele mutaatioita Visionissa',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vision.webmcp.run-query': 'Suorita GROQ-kysely Visionissa',
})
