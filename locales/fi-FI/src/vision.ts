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
  /** Tooltip shown when the API version selector is locked to vX because a variant is selected */
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
  'vista.agent-actions.credits': 'Käyttää yhden AI-krediitin per pyyntö',
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vista.ai-credits.balance': '{{balance}}/{{quota}} AI-krediittiä jäljellä tässä kuussa.',
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vista.ai-credits.deficit':
    '{{used}} AI-krediittiä käytetty tässä kuussa, {{deficit}} enemmän kuin {{quota}} sisältyvää.',
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vista.ai-credits.limit.description':
    'Organisaatiosi on käyttänyt {{used}}/{{quota}} AI-krediittiään tässä kuussa, joten Sanity Agent Actions -toiminnot on keskeytetty seuraavaan kuukauteen asti tai kunnes kulurajaa nostetaan.',
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vista.ai-credits.limit.description-unknown':
    'Organisaatiosi on saavuttanut AI-krediittien kulurajansa, joten Sanity Agent Actions -toiminnot on keskeytetty seuraavaan kuukauteen asti tai kunnes rajaa nostetaan.',
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vista.ai-credits.limit.learn-more': 'Miten AI-krediitit toimivat',
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vista.ai-credits.limit.manage': 'Hallitse AI-krediittejä',
  /** Title of the card shown where the organization is out of AI credits */
  'vista.ai-credits.limit.title': 'AI-krediitit loppuneet',
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vista.ai-credits.usage': 'AI-käyttö',
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vista.ai-credits.used': '{{used}} AI-krediittiä käytetty tässä kuussa.',
  /** Button in the request column's action bar naming the API version requests go out with */
  'vista.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vista.api-version.button-cdn': 'API CDN {{version}}',
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vista.api-version.button-invalid': 'Keskeneräinen API-versio',
  /** Tooltip of the API version button */
  'vista.api-version.tooltip':
    'Kyselyt suoritetaan API-versiota {{version}} vasten. Valitse vaihtaaksesi sen Asetuksissa.',
  /** Tooltip of the API version button while queries go through the API CDN */
  'vista.api-version.tooltip-cdn':
    'Kyselyt suoritetaan API CDN:ää vasten API-versiolla {{version}}. Valitse vaihtaaksesi sen Asetuksissa.',
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vista.api-version.tooltip-cdn-blocked':
    'Kyselyt suoritetaan APIa vasten API-versiolla {{version}}, ei API CDN:ää: se ei palvele {{perspective}}-näkökulmaa. Valitse vaihtaaksesi sen Asetuksissa.',
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vista.api-version.tooltip-invalid':
    'Asetuksissa oleva API-versio on keskeneräinen, joten mitään ei voida hakea ennen kuin se on valmis.',
  /** Tooltip of the API version button while a selected variant forces the experimental API */
  'vista.api-version.tooltip-locked':
    'Kyselyt suoritetaan API-versiota {{version}} vasten, jota valittu variantti tarvitsee.',
  /** Label of the document after the change in the Delta panel */
  'vista.delta.after': 'Jälkeen',
  /** Label of the document before the change in the Delta panel */
  'vista.delta.before': 'Ennen',
  /** What the Delta panel does */
  'vista.delta.description':
    'Suorittaa kyselyn delta-tilassa, samoin kuin GROQ-pohjaiset webhookit, kuuntelijat ja Sanity Functions -toiminnot tekevät: before() ja after() ovat dokumentti ennen ja jälkeen muutoksen, @ on dokumentti muutoksen jälkeen, ja delta::changedAny() vertaa niitä. Se suoritetaan selaimessa groq-js:llä. Tyhjä puoli tarkoittaa, ettei dokumenttia ole: muutos luo tai poistaa sen.',
  /** Label of the document ID field in the Delta panel */
  'vista.delta.document-id': 'Dokumentin tunnus',
  /** Shown when there is a query but no documents to compare */
  'vista.delta.empty':
    'Lataa dokumentin historia, tai kirjoita dokumentit kohtiin Ennen ja Jälkeen.',
  /** Shown when the query fails in delta mode */
  'vista.delta.failed': 'Kyselyä ei voitu suorittaa delta-tilassa: {{message}}',
  /** Shown when the After document is not valid JSON */
  'vista.delta.invalid-after': 'Jälkeen ei ole kelvollista JSON-muotoa: {{message}}',
  /** Shown when the Before document is not valid JSON */
  'vista.delta.invalid-before': 'Before ei ole kelvollista JSONia: {{message}}',
  /** Button loading the document's revisions from the History API */
  'vista.delta.load': 'Lataa historia',
  /** Shown when the history could not be loaded */
  'vista.delta.load-failed': 'Historiaa ei voitu ladata: {{message}}',
  /** A delta filter that is true for the change */
  'vista.delta.matches':
    'Vastaa: tällä suodattimella varustettu webhook tai funktio suoritetaan tälle muutokselle.',
  /** A delta filter that is false for the change */
  'vista.delta.no-match':
    'Ei vastaa: tällä suodattimella varustettua webhookia tai funktiota ei suoriteta tälle muutokselle.',
  /** Shown while the query or its params cannot be sent */
  'vista.delta.no-request': 'Korjaa kysely ja sen parametrit suorittaaksesi sen delta-tilassa.',
  /** Heading of the delta result */
  'vista.delta.result': 'Tulos',
  /** The After choice for a change that deletes the document */
  'vista.delta.revision.none-after': 'Ei mitään: muutos poistaa dokumentin',
  /** The Before choice for a change that creates the document */
  'vista.delta.revision.none-before': 'Ei mitään: muutos luo dokumentin',
  /** A revision in the Before and After lists */
  'vista.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vista.drawer.close': 'Sulje paneeli',
  /** Explanation at the top of the Explain panel */
  'vista.explain.description':
    'Kyselysuunnitelma kuvaa, miten Content Lake suorittaa kyselyn: mitä se lukee, suodattaa ja järjestää lukemisen aikana, ja mitä jätetään myöhempiin vaiheisiin. Selitä tämä minulle -toiminto antaa Sanity Agent Actionsin kuvata kyselyn ja sen suunnitelman yksinkertaisin sanoin, mikä käyttää yhden AI-krediitin.',
  /** Shown in the Explain panel while there is no valid query to explain */
  'vista.explain.empty': 'Kirjoita kysely selittääksesi sen.',
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vista.explain.explain': 'Selitä tämä minulle',
  /** Shown when the explanation could not be written */
  'vista.explain.failed': 'Kyselyä ei voitu selittää: {{message}}',
  /** A count the index computes without reading the documents */
  'vista.explain.insight.aggregate': 'Laskettu indeksissä, lukematta dokumentteja.',
  /** A subquery the plan runs once for all documents */
  'vista.explain.insight.batched-subquery':
    'Alikysely suoritetaan kerran kaikille dokumenteille yhdessä erässä, ei kerran per dokumentti.',
  /** Part of the filter runs in memory; the expression follows */
  'vista.explain.insight.filter-in-memory':
    'Osa suodattimesta suoritetaan muistissa lukemisen jälkeen: jokainen indeksin läpäisevä dokumentti luetaan ensin, mikä hidastuu suurilla datasetteillä. Liitokset (->) ja funktiot suodattimessa eivät voi käyttää indeksiä.',
  /** The index sorts and limits while reading */
  'vista.explain.insight.index-sort-limit':
    'Indeksi järjestää ja rajaa dokumentit lukemisen aikana.',
  /** The plan slices in memory */
  'vista.explain.insight.slice-in-memory':
    'Viipale otetaan muistissa lukemisen jälkeen, ei rajana lukemisen aikana.',
  /** The plan sorts in memory */
  'vista.explain.insight.sort-in-memory':
    'Järjestäminen tapahtuu muistissa jokaisen osuman lukemisen jälkeen. Järjestä attribuuttien mukaan, joita indeksi voi järjestää.',
  /** Link under the plan insights to the guide on fast queries */
  'vista.explain.insights.guide': 'Korkean suorituskyvyn GROQ',
  /** Heading of the plan insights in the Explain panel */
  'vista.explain.insights.title': 'Mikä erottuu',
  /** Button in the Explain panel fetching the query plan */
  'vista.explain.plan': 'Näytä kyselysuunnitelma',
  /** Shown when the query plan could not be fetched */
  'vista.explain.plan-failed': 'Kyselysuunnitelmaa ei voitu hakea: {{message}}',
  /** Heading of the query plan in the Explain panel */
  'vista.explain.plan-title': 'Kyselysuunnitelma',
  /** Toast shown after a code snippet was copied */
  'vista.export-query.copied': 'Katkelma kopioitu leikepöydälle',
  /** Label for the button that copies a code snippet */
  'vista.export-query.copy': 'Kopioi katkelma',
  /** Explanation at the top of the export query dialog */
  'vista.export-query.description':
    'Suorita tämä kysely studion ulkopuolella jollakin näistä katkelmista.',
  /** Title of the dialog that exports the query as code snippets */
  'vista.export-query.title': 'Vie kysely',
  /** Note about authentication in the export query dialog */
  'vista.export-query.token-note':
    'Yksityiset datasetit tarvitsevat API-tunnuksen. Julkisissa dataseteissä Authorization-otsikon voi jättää pois.',
  /** Toast shown after the generated code was copied */
  'vista.export-types.copied': 'Koodi kopioitu leikepöydälle',
  /** Label for the button that copies the generated code */
  'vista.export-types.copy': 'Kopioi koodi',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vista.export-types.empty': 'Hae ensin kysely, jotta tyypit voidaan johtaa tuloksesta.',
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vista.export-types.schema-error': 'Skeeman arviointi epäonnistui: {{message}}',
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vista.export-types.source.result':
    'Johdettu haetusta tuloksesta, koska kyselyä ei voitu arvioida työtilan skeemaa vasten.',
  /** Note shown when the types were derived from the workspace schema */
  'vista.export-types.source.schema':
    'Johdettu työtilan skeemasta, samalla tavalla kuin sanity typegen tekee sen.',
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vista.export-types.stale-result':
    'Näytetty tulos haettiin eri kyselylle tai eri parametreilla. Hae ensin nykyinen kysely, jotta tyypit voidaan johtaa tuloksesta.',
  /** Title of the dialog exporting TypeScript types for the result */
  'vista.export-types.title-typescript': 'Vie TypeScript',
  /** Title of the dialog exporting a Zod schema for the result */
  'vista.export-types.title-zod': 'Vie Zod',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vista.functions.add': 'Lisää kyselyyn',
  /** Shown on a library function the query declares the same way */
  'vista.functions.declared': 'Tässä kyselyssä',
  /** Lint action on a call of a library function the query does not declare */
  'vista.functions.editor.add-from-library': 'Ilmoita se',
  /** Note in a function's hover documentation: the API version it needs */
  'vista.functions.editor.api-version': 'Vaatii API-version {{version}} tai uudemman',
  /** Detail of a completion for a custom function the query declares */
  'vista.functions.editor.completion-declared': 'tässä kyselyssä',
  /** Detail of a completion for a library function, which declares it too */
  'vista.functions.editor.completion-library': 'kirjastostasi',
  /** Note in the hover documentation of a custom function the query declares */
  'vista.functions.editor.declared-on': 'Mukautettu funktio, ilmoitettu rivillä {{line}}',
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vista.functions.editor.delta-only':
    'Toimii vain delta-tilassa, jossa webhookit ja Sanity Functionsit ajavat suodattimensa',
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vista.functions.editor.extract': 'Erota funktioksi',
  /** Note in the hover documentation of a library function the query does not declare */
  'vista.functions.editor.in-library': 'Funktiokirjastossasi, ei ilmoitettu tässä kyselyssä',
  /** Link at the end of a built-in function's hover documentation */
  'vista.functions.editor.reference': 'GROQ-funktioiden viiteopas',
  /** Explanation under the library heading in the Functions panel */
  'vista.functions.library.description':
    'Säilytetään tässä selaimessa projektin jokaista tietojoukkoa varten. Täydennykset tarjoavat näitä funktioita, ja lint ehdottaa kyselyn kutsuman funktion tallentamista.',
  /** Shown in the Functions panel while the library is empty */
  'vista.functions.library.empty':
    'Tallenna kyselyn määrittelemä funktio käyttääksesi sitä muissa kyselyissä.',
  /** Heading of the functions library in the Functions panel */
  'vista.functions.library.title': 'Kirjasto',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vista.functions.query.empty':
    'Määritä mukautettuja funktioita kyselyn alussa tai aseta kohdistin projektioon, kuten author->{name}, ja paina editorin yläpuolella olevaa erotuspainiketta ({{shortcut}}).',
  /** Heading of the functions the query declares in the Functions panel */
  'vista.functions.query.title': 'Tässä kyselyssä',
  /** Removes a function from the library */
  'vista.functions.remove': 'Poista kirjastosta',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vista.functions.replace': 'Korvaa kyselyssä',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vista.functions.reveal': 'Näytä {{name}} editorissa',
  /** Button of a function the query declares that is not in the library yet */
  'vista.functions.save': 'Tallenna kirjastoon',
  /** Shown on a function the query declares the way the library has it */
  'vista.functions.saved': 'Tallennettu',
  /** Button of a function the query declares differently from the library's version */
  'vista.functions.update': 'Päivitä kirjasto',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vista.generate.button': 'Luo kysely',
  /** Closes the generate query bar */
  'vista.generate.close': 'Sulje',
  /** Explanation under the generate query field */
  'vista.generate.description':
    'Sanity Agent Actions kirjoittaa GROQ-kyselyn kuvauksesi ja dokumenttityyppien perusteella, ja Content Lake tarkistaa jokaisen yrityksen; jokainen yritys käyttää yhden tekoälykrediitin. Se korvaa tämän välilehden kyselyn ja suorittaa sen; editorin kumoamistoiminto palauttaa edellisen kyselyn.',
  /** Shown when no query could be generated, above the reason */
  'vista.generate.failed': 'Kyselyä ei voitu luoda',
  /** Accessible label of the description field in the generate query bar */
  'vista.generate.label': 'Mitä kyselyn tulisi hakea?',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vista.generate.open-anyway': 'Avaa viimeisin yritys',
  /** Placeholder of the description field in the generate query bar */
  'vista.generate.placeholder':
    '10 viimeisintä kirjailijaa järjestettynä sukunimen ja sitten etunimen mukaan',
  /** Shown while the first attempt at a query is written */
  'vista.generate.progress': 'Kirjoitetaan kyselyä…',
  /** Shown while a rejected attempt is retried */
  'vista.generate.progress-retry': 'Korjataan kyselyä (yritys {{attempt}} / {{max}})…',
  /** Button generating the query */
  'vista.generate.submit': 'Luo',
  /** Badge on a history entry the API CDN answered */
  'vista.history.cdn': 'API CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vista.history.cdn-cache-hit': 'CDN-välimuistiosuma',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vista.history.changed': 'Muuttunut',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vista.history.changes': 'Muutokset',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vista.history.changes-failed': 'Muutoksia ei voitu näyttää.',
  /** Button retrying to show the changes of a history entry */
  'vista.history.changes-retry': 'Yritä uudelleen',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vista.history.compared-with': 'Verrattuna hakuun ajankohtana {{time}}',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vista.history.diff.params': 'Parametrit',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vista.history.diff.query': 'Kysely',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vista.history.diff.query-formatting-only': 'Vain muotoilu muuttui',
  /** Label of the diff of the query result in a history entry's changes */
  'vista.history.diff.result': 'Tulos',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vista.history.diff.url': 'Pyynnön URL-osoite',
  /** Empty state of the history panel */
  'vista.history.empty': 'Ei vielä haettu mitään',
  /** Status label for a failed fetch in the history */
  'vista.history.failed': 'Epäonnistui',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vista.history.hide-hidden': 'Piilota ne',
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vista.history.hiding': 'Piilotetaan {{fields}}',
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vista.history.only-hidden-changed': 'Vain piilotetut kentät muuttuivat',
  /** History reason: a tab opened with a generated query fetched it */
  'vista.history.reason.generated': 'Luotu kysely',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vista.history.reason.link': 'Avattu linkki',
  /** History reason: a live event matched the query's sync tags */
  'vista.history.reason.live': 'Reaaliaikainen päivitys',
  /** History reason: the live connection asked every client to refetch */
  'vista.history.reason.live-restart': 'Reaaliaikainen yhteys käynnistettiin uudelleen',
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vista.history.reason.live-start': 'Reaaliaikainen haku käynnistetty',
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vista.history.reason.load': 'Kysely ladattu',
  /** History reason: the fetch button was pressed */
  'vista.history.reason.manual': 'Hae-painike',
  /** History reason: mutations were applied from the Mutate panel */
  'vista.history.reason.mutation': 'Muutokset sovellettu',
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vista.history.reason.options': 'Asetukset muuttuivat',
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vista.history.reason.paste': 'Liitetty URL-osoite',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vista.history.reason.resume': 'Automaattinen uudelleenhaku jatkui',
  /** History reason: the keyboard shortcut was used */
  'vista.history.reason.shortcut': 'Pikanäppäin',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vista.history.same-result': 'Sama tulos',
  /** Button showing the hidden fields in a history entry's changes */
  'vista.history.show-hidden': 'Näytä ne',
  /** Next to a history entry's changes while the hidden fields are shown */
  'vista.history.showing-hidden': 'Näytetään {{fields}}, oletuksena piilotettuina',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vista.history.too-large': 'Liian suuri verrattavaksi',
  /** A history entry whose result is the same as the previous result */
  'vista.history.unchanged': 'Ei muutoksia',
  /** Shown in the Lint panel while the query has no lint findings */
  'vista.lint.empty':
    'Ei linttaustuloksia. GROQ-linterin kyselystä havaitsemat ongelmat näkyvät tässä sitä mukaa kun kirjoitat; valitse jokin niistä valitaksesi sen editorissa.',
  /** Where a lint finding sits in the query, shown under its message */
  'vista.lint.position': 'Rivi {{line}}, sarake {{column}}',
  /** Severity badge of a lint finding */
  'vista.lint.severity.error': 'Virhe',
  /** Severity badge of a lint finding */
  'vista.lint.severity.hint': 'Vihje',
  /** Severity badge of a lint finding */
  'vista.lint.severity.info': 'Tiedoksi',
  /** Severity badge of a lint finding */
  'vista.lint.severity.warning': 'Varoitus',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vista.lint.use-suggestion': 'Käytä ehdotusta {{suggestion}}',
  /** Badge shown while a tab refetches automatically */
  'vista.live.active': 'Live',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vista.live.button': 'Live-haku',
  /** Tooltip of the Live button while automatic refetching is off */
  'vista.live.button.start': 'Hae, ja hae sitten uudelleen aina kun tuloksen dokumentit muuttuvat',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vista.live.button.stop':
    'Lopeta hakeminen, kun tuloksen dokumentit muuttuvat. Hae toimii silti pyydettäessä, tuloksille joihin mikään dokumenttimuutos ei vaikuta, kuten now()',
  /** Error shown when the live connection breaks */
  'vista.live.error': 'Live-päivitykset katkesivat: {{message}}',
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vista.live.stop': 'Lopeta live',
  /** Button in the Mutate panel adding a mutation to the list */
  'vista.mutate.add': 'Lisää muutos',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vista.mutate.add.create': 'Luo dokumentti',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vista.mutate.add.delete': 'Poista dokumentti',
  /** Adds a mutation deleting the documents of the shown result */
  'vista.mutate.add.delete-result': 'Poista tuloksen dokumentit',
  /** Adds a mutation patching a document, its ID to fill in */
  'vista.mutate.add.patch': 'Päivitä dokumenttia',
  /** Adds a mutation patching the documents of the shown result */
  'vista.mutate.add.patch-result': 'Päivitä tuloksen dokumentit',
  /** Button applying the mutations a dry run showed */
  'vista.mutate.apply': 'Käytä kohteeseen {{dataset}}',
  /** Heading of the error shown when applying the mutations failed */
  'vista.mutate.apply-failed': 'Muutoksia ei käytetty',
  /** Next to Apply while the mutations as they are have had no dry run */
  'vista.mutate.apply-needs-preview':
    'Käytä lähettää sen, mitä kuivaharjoitus näytti: suorita ensin yksi.',
  /** Option giving array items without a _key one */
  'vista.mutate.auto-keys': 'Lisää _key-avain taulukon alkioihin, joilla ei ole sitä',
  /** Under the option giving array items a _key */
  'vista.mutate.auto-keys.description':
    'Studio tarvitsee sellaisen jokaiselle taulukon alkiolle voidakseen muokata sitä.',
  /** Button showing a document's changes in the dry run */
  'vista.mutate.changes': 'Muutokset',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vista.mutate.changes-failed': 'Muutoksia ei voitu näyttää.',
  /** Button retrying to show a document's changes */
  'vista.mutate.changes-retry': 'Yritä uudelleen',
  /** What the Mutate panel does */
  'vista.mutate.description':
    'Kirjoita muutokset (mutations) siinä muodossa, kuin Mutations API ne ottaa vastaan, listana: create, createOrReplace, createIfNotExists, delete ja patch, ID:n tai GROQ-kyselyn perusteella. Kuivaharjoitus näyttää, mitä ne tekisivät kullekin dokumentille muuttamatta mitään; Käytä kirjoittaa ne sitten datasettiin yhtenä transaktiona, omalla tililläsi.',
  /** What the API says went wrong with one of the mutations */
  'vista.mutate.failure-item': 'Muutos {{index}}: {{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vista.mutate.generate.button': 'Luo muutokset',
  /** Explanation under the generate mutations field */
  'vista.mutate.generate.description':
    'Sanity Agent Actions kirjoittaa muutokset kuvauksesi, tuloksen dokumenttien ja niiden tyyppien perusteella, ja kuivaharjoitus tarkistaa jokaisen yrityksen; jokainen yritys käyttää yhden tekoälykrediitin. Ne korvaavat tässä olevat muutokset, ja kumoamalla (undo) saat nämä takaisin; mitään ei kirjoiteta ennen kuin käytät niitä.',
  /** Shown when no mutations could be generated, above the reason */
  'vista.mutate.generate.failed': 'Muutoksia ei voitu luoda',
  /** Accessible label of the description field in the generate mutations bar */
  'vista.mutate.generate.label': 'Mitä muutosten tulisi tehdä?',
  /** Placeholder of the description field in the generate mutations bar */
  'vista.mutate.generate.placeholder': 'Muuta tuloksen dokumenttien otsikko muotoon foobar',
  /** Shown while the first attempt at the mutations is written */
  'vista.mutate.generate.progress': 'Kirjoitetaan muutoksia…',
  /** Shown while an attempt the dry run turned down is retried */
  'vista.mutate.generate.progress-retry': 'Korjataan muutoksia (yritys {{attempt}}/{{max}})…',
  /** Under the dry run: the fields the diffs leave out */
  'vista.mutate.hiding': 'Muutokset jättävät pois kentät {{fields}}, kuten Historia-näkymäkin.',
  /** Shown when the mutations are not valid JSON */
  'vista.mutate.invalid-json': 'Muutokset eivät ole kelvollista JSONia: {{message}}',
  /** Shown when a mutation does not name exactly one thing to do */
  'vista.mutate.invalid-mutation':
    'Muutoksen {{index}} tulee sisältää tasan yksi seuraavista: create, createOrReplace, createIfNotExists, delete tai patch.',
  /** Label of the mutations editor */
  'vista.mutate.mutations': 'Muutokset',
  /** The dry run touched no documents */
  'vista.mutate.no-documents': 'Muutokset eivät koske yhtäkään dokumenttia.',
  /** Shown when the JSON is not a list of mutations */
  'vista.mutate.not-a-list':
    'Kirjoita lista muutoksista, yksittäinen muutos tai pyynnön runko, joka sisältää listan muutoksista.',
  /** A document the mutations create */
  'vista.mutate.operation.create': 'Luo',
  /** A document the mutations delete */
  'vista.mutate.operation.delete': 'Poista',
  /** A document the mutations touch without changing its content */
  'vista.mutate.operation.none': 'Ei muutosta',
  /** A document the mutations change */
  'vista.mutate.operation.update': 'Päivitys',
  /** Button running the mutations as a dry run */
  'vista.mutate.preview': 'Kuivaharjoitus',
  /** Heading of the error shown when the dry run failed */
  'vista.mutate.preview-failed': 'Kuivaharjoitus epäonnistui',
  /** Heading of the dry run's outcome */
  'vista.mutate.preview-heading': 'Kuivaharjoitus',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vista.mutate.stale':
    'Muutokset, dataset tai asetukset ovat muuttuneet tämän kuivaharjoituksen jälkeen. Suorita se uudelleen ottaaksesi ne käyttöön.',
  /** How many documents the dry run changes and leaves as they are */
  'vista.mutate.summary': 'Muutettu: {{changed}} · Muuttumaton: {{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vista.network.cache': 'Välimuisti',
  /** The API CDN answered from its cache */
  'vista.network.cache.hit': 'Osuma',
  /** Under the details of a CDN cache hit */
  'vista.network.cache.hit-explained':
    'CDN vastasi välimuistiin tallennetulla vastauksella läheltä sijaitsevasta sijainnista; kysely ei saavuttanut APIa.',
  /** The API CDN answered with a response this session had not seen */
  'vista.network.cache.miss': 'Ei osumaa, tämän istunnon tietojen mukaan',
  /** The API answered, which caches nothing */
  'vista.network.cache.none': 'Ei mitään, API vastaa jokaiseen pyyntöön tuoreella sisällöllä',
  /** Shown in the Network panel while there is no response */
  'vista.network.empty':
    'Hae kysely nähdäksesi, mikä päätepiste vastasi siihen, vastattiinko välimuistista ja missä se suoritettiin.',
  /** In the Network panel: the endpoint that answered */
  'vista.network.endpoint': 'Vastaaja',
  /** The live API answered */
  'vista.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vista.network.endpoint.cdn': 'API CDN',
  /** In the Network panel: the region the query ran in */
  'vista.network.region': 'Kysely suoritettiin',
  /** The response did not say where the query ran */
  'vista.network.region.unknown': 'Ei raportoitu',
  /** In the Network panel: the round trip and the time on the server */
  'vista.network.timing': 'Aika',
  /** The round trip and the server's time for the query, in milliseconds */
  'vista.network.timing.value': '{{e2e}} ms edestakainen aika, {{server}} ms palvelimella',
  /** In the Network panel: the trace of the request, for Sanity support */
  'vista.network.trace': 'Jäljitystunnus',
  /** Hint in the Network panel while queries go to the API */
  'vista.network.use-cdn-hint':
    'Ota käyttöön Käytä API CDN:ää asetuksista lähettääksesi kyselyt CDN:n kautta.',
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vista.network.you': 'Sinä',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vista.options.dataset.follows-workspace': 'Seuraa työtilaa',
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vista.options.dataset.pin': 'Kiinnitä dataset',
  /** Hint under the dataset field while a dataset is pinned */
  'vista.options.dataset.pinned': 'Kiinnitetty; työtila saattaa käyttää toista datasettiä',
  /** Button that makes the tab follow the workspace's dataset again */
  'vista.options.dataset.use-workspace': 'Käytä työtilan datasettiä',
  /** Label for the "Include content source map" switch */
  'vista.options.include-source-map': 'Sisällytä content source map',
  /** Description for the "Include content source map" switch */
  'vista.options.include-source-map.description':
    'Lisää vastaukseen resultSourceMapin, joka näkyy Content Source Map -välilehdellä.',
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vista.options.perspective.global': 'Yleinen ({{name}})',
  /** Label of the switch that sends queries to the API CDN */
  'vista.options.use-cdn': 'Käytä API CDN:ää',
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vista.options.use-cdn.anonymous':
    'Tämä studio kirjaa sinut sisään evästeellä, jota API CDN ei koskaan vastaanota: se vastaa kuten anonyymille vierailijalle, eli näyttää sen, mitä julkinen datasetti näyttää.',
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vista.options.use-cdn.blocked':
    "API CDN ei palvele luonnoksia tai julkaisuja, joten kyselyt {{perspective}}-näkökulmalla menevät API:lle. Julkaistulla tai raa'alla näkökulmalla ne käyttävät CDN:ää.",
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vista.options.use-cdn.blocked.title': 'Kyselyt menevät API:lle, ei CDN:lle',
  /** Description of the API CDN switch */
  'vista.options.use-cdn.description':
    'Lähettää kyselyn API CDN:lle, kuten useCdn: true @sanity/client-kirjastossa, julkaistu- ja raaka-näkökulmilla: luonnokset ja julkaisut menevät aina API:lle. Vastaukset välimuistitetaan enintään minuutiksi; Verkko-paneeli näyttää, kun vastaus on tullut välimuistista.',
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vista.options.use-cdn.use-published': 'Käytä julkaistua näkökulmaa',
  /** Label of the variant field */
  'vista.options.variant-label': 'Variantti',
  /** Variant option sending the navbar's variant, named */
  'vista.options.variant.global': 'Yleinen ({{name}})',
  /** Variant option sending the navbar's variant while none is selected there */
  'vista.options.variant.global-none': 'Yleinen (ei valittu)',
  /** Variant option sending no variant */
  'vista.options.variant.none': 'Ei mitään',
  /** Accessible label for collapsing a bottom panel */
  'vista.panel.collapse': 'Pienennä paneeli',
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vista.panel.delta': 'Delta',
  /** Accessible label for expanding a bottom panel */
  'vista.panel.expand': 'Laajenna paneeli',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vista.panel.explain': 'Selitä',
  /** Label of the Functions tab in the response panel */
  'vista.panel.functions': 'Funktiot',
  /** Label of the "History" tab in the response panel */
  'vista.panel.history': 'Historia',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vista.panel.lint': 'Lint',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vista.panel.mutate': 'Muuta',
  /** Label of the Network tab in the response panel */
  'vista.panel.network': 'Verkko',
  /** Label of the "Options" panel in the request column */
  'vista.panel.options': 'Asetukset',
  /** Label of the "Response" tab in the response panel */
  'vista.panel.response': 'Vastaus',
  /** Label of the "Content Source Map" tab in the response panel */
  'vista.panel.source-map': 'Sisällön lähdekartta',
  /** Button adding an item to a list param in the params form */
  'vista.params-form.add-item': 'Lisää kohde',
  /** Placeholder of a params form field that takes any JSON value */
  'vista.params-form.any-placeholder': 'Mikä tahansa JSON-arvo; muu teksti lähetetään merkkijonona',
  /** Shown in the params form when the query uses no params */
  'vista.params-form.empty':
    'Kysely ei käytä parametreja. Jokainen siinä oleva $nimi saa tähän oman kentän.',
  /** Shown in the params form while the params JSON cannot be parsed */
  'vista.params-form.invalid-json':
    'Parametrit eivät ole kelvollista JSON-muotoa. Korjaa ne JSON-näkymässä muokataksesi niitä tässä.',
  /** A boolean param's value is not true or false; it is sent anyway */
  'vista.params-form.invalid.boolean': 'Ei tosi tai epätosi; lähetetään muodossa {{value}}',
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vista.params-form.invalid.document-type': 'Ei tämän työtilan dokumenttityyppi; lähetetään silti',
  /** A whole number param (a slice bound) holds a fraction */
  'vista.params-form.invalid.integer': 'Ei kokonaisluku, jota viipaleet vaativat',
  /** A list param's value is not a list; it is sent anyway */
  'vista.params-form.invalid.list': 'Ei lista; lähetetään muodossa {{value}}',
  /** A number param's value is not a number; it is sent anyway */
  'vista.params-form.invalid.number': 'Ei numero; lähetetään tekstinä',
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vista.params-form.invalid.option': 'Ei mikään tunnetuista arvoista; lähetetään silti',
  /** A text param's value is not text; it is sent anyway */
  'vista.params-form.invalid.string': 'Ei tekstiä; lähetetään muodossa {{value}}',
  /** Accessible label of an item input of a list param in the params form */
  'vista.params-form.item-label': '${{name}}, kohde {{index}}',
  /** Placeholder of an item input of a list param in the params form */
  'vista.params-form.item-placeholder': 'Kohde',
  /** Under a params form field whose param has no value */
  'vista.params-form.missing': 'Ei asetettu: kysely epäonnistuu, kunnes sillä on arvo',
  /** Shown in the params form when the workspace schema could not be read */
  'vista.params-form.no-schema':
    'Tyypit tulevat pelkästä kyselystä: työtilan skeemaa ei voitu lukea.',
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vista.params-form.not-set': 'Ei asetettu',
  /** Button setting a date and time param to the current time */
  'vista.params-form.now': 'Nyt',
  /** Button removing a param the query does not use from the params */
  'vista.params-form.remove': 'Poista',
  /** Accessible label of the button removing an item from a list param */
  'vista.params-form.remove-item': 'Poista kohde',
  /** Shown in the params form when the query does not parse */
  'vista.params-form.syntax-error':
    'Kyselyä ei voida jäsentää, joten sen parametrit luetellaan ilman tyyppejä.',
  /** Type hint of a params form field: any JSON value */
  'vista.params-form.type.any': 'mikä tahansa JSON-arvo',
  /** Type hint of a params form field: true or false */
  'vista.params-form.type.boolean': 'tosi tai epätosi',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vista.params-form.type.datetime': 'päivämäärä ja aika (ISO 8601)',
  /** Type hint of a params form field: a document ID */
  'vista.params-form.type.document-id': 'dokumentin ID',
  /** Type hint of a params form field: one of the workspace's document types */
  'vista.params-form.type.document-type': 'dokumenttityyppi',
  /** Type hint of a params form field: a whole number */
  'vista.params-form.type.integer': 'kokonaisluku',
  /** Type hint of a params form field: a list of values */
  'vista.params-form.type.list': 'luettelo, jokainen {{type}}',
  /** Type hint of a params form field: a number */
  'vista.params-form.type.number': 'luku',
  /** Type hint of a params form field: text */
  'vista.params-form.type.string': 'teksti',
  /** Heading of the params the query does not use, listed in the params form */
  'vista.params-form.unused': 'Ei käytössä kyselyssä',
  /** Before the expressions that use a param, in the params form */
  'vista.params-form.used-in': 'Käytetty kohteessa',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vista.params.fit-height': 'Mitoitettu sisällön mukaan, {{height}} pikseliä',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vista.params.resize':
    'Muuta parametrien kokoa: vedä tai käytä nuolinäppäimiä; kaksoisnapsauta tai paina Enter sovittaaksesi sisältöön uudelleen',
  /** Tab showing the params as a form inferred from the query */
  'vista.params.view.form': 'Lomake',
  /** Tab showing the params as JSON */
  'vista.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vista.params.view.label': 'Muokkaa parametreja muodossa',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vista.paste.parsed': 'Kysely ladattu liitetystä URL-osoitteesta',
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vista.paste.unavailable-variant':
    'Liitetty URL-osoite käytti "{{variant}}"-varianttia; valitse se navigointipalkista suorittaaksesi kyselyn sillä.',
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vista.paste.unknown-dataset':
    'Liitetyssä URL-osoitteessa oleva tietojoukko "{{dataset}}" ei ole saatavilla täällä, nykyinen säilytetään.',
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vista.paste.unsupported-perspective':
    'Liitetyssä URL-osoitteessa oleva näkökulma ei ole tuettu täällä, nykyinen säilytetään.',
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vista.paste.variants-disabled':
    'Liitetty URL-osoite käytti "{{variant}}"-varianttia; tässä työtilassa variantit on kytketty pois päältä, joten kysely suoritetaan ilman sitä.',
  /** Accessible label for the query actions menu */
  'vista.query.actions': 'Kyselytoiminnot',
  /** Tooltip when automatic refetching is not available for the API version */
  'vista.query.auto-refetch.unsupported':
    'Automaattinen uudelleenhaku vaatii API-version v2021-03-25 tai uudemman.',
  /** Toast shown after the query was copied */
  'vista.query.copied': 'Kysely kopioitu leikepöydälle',
  /** Menu item copying the query text */
  'vista.query.copy': 'Kopioi kysely',
  /** Menu item opening the export query dialog */
  'vista.query.export': 'Vie kysely…',
  /** Menu item reformatting the query */
  'vista.query.prettify': 'Siisti kysely',
  /** Toast shown when the query could not be reformatted */
  'vista.query.prettify.failed': 'Kyselyä ei voitu siistiä',
  /** Menu item saving the query to the personal saved queries */
  'vista.query.save': 'Tallenna kysely',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vista.query.stop': 'Pysäytä',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vista.query.stop.description': 'Pysäytä haku',
  /** Explanation in the settings section about the redesigned experience */
  'vista.redesign.settings.description':
    'Käytät uudistettua Vision-työkalua. Vaihtamalla takaisin välilehtesi ja asetuksesi säilyvät tässä selaimessa seuraavaa kertaa varten.',
  /** Title of the settings section about the redesigned experience */
  'vista.redesign.settings.title': 'Uudistettu Vision (beta)',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vista.redesign.switch-to-classic': 'Vaihda klassiseen Visioniin',
  /** Toast button that switches to the redesigned tool */
  'vista.redesign.toast.accept': 'Kokeile nyt',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.description':
    'Kyselyvälilehdet, reaaliaikainen uudelleenhaku, vastauksen tiedot ja viennit. Voit vaihtaa takaisin milloin tahansa.',
  /** Toast button that hides the invitation */
  'vista.redesign.toast.dismiss': 'Ei nyt',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.title': 'Kokeile uudistettua Visionia',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vista.redesign.try': 'Kokeile uudistusta',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vista.redesign.try.description':
    'Vaihda uudistettuun Visioniin, joka on beta-vaiheessa. Voit vaihtaa takaisin milloin tahansa sen sivupalkista.',
  /** Empty state of the response panel before anything was fetched */
  'vista.response.empty': 'Ei vielä haettuja tietoja',
  /** Label for the payload size in the response tab */
  'vista.response.payload-size': 'Datan koko',
  /** Label for the sync tags in the response tab */
  'vista.response.sync-tags': 'Synkronointitunnisteet',
  /** Shown when the response carried no sync tags */
  'vista.response.sync-tags.none': 'Vastauksessa ei ole synkronointitunnisteita',
  /** Accessible label for the result actions menu */
  'vista.result.actions': 'Tuloksen toiminnot',
  /** Toast shown after the result was copied */
  'vista.result.copied': 'Tulos kopioitu leikepöydälle',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vista.result.copied-value': 'Kopioitu {{path}}',
  /** Menu item and button copying the result as JSON */
  'vista.result.copy': 'Kopioi tulos',
  /** Button next to each property in the result tree, copying its value */
  'vista.result.copy-value': 'Kopioi arvo',
  /** Empty state of the result view */
  'vista.result.empty': 'Suorita kysely nähdäksesi tuloksen täällä',
  /** Button exporting the result as CSV */
  'vista.result.export-csv': 'Vie CSV-muodossa',
  /** Button exporting the result as JSON */
  'vista.result.export-json': 'Vie JSON-muodossa',
  /** Menu item opening the TypeScript export dialog */
  'vista.result.export-typescript': 'Vie TypeScript…',
  /** Menu item opening the Zod export dialog */
  'vista.result.export-zod': 'Vie Zod…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vista.result.graph.collapse': 'Piilota sisältö',
  /** Button fitting the whole graph in view */
  'vista.result.graph.fit': 'Sovita näkymään',
  /** Accessible label of the graph, saying how to move around in it */
  'vista.result.graph.label':
    'Tulosgraafi: vedä liikuttaaksesi, vieritä zoomataksesi; kun kohdistus on tässä, nuolinäppäimet liikuttavat, + ja - zoomaavat, 0 sovittaa',
  /** Ends the note on a graph that leaves part of this result out */
  'vista.result.graph.left-out-hint': 'Puu- ja JSON-näkymät näyttävät sen kokonaan.',
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vista.result.graph.node-limit': 'Vain ensimmäiset {{nodes}} objektia ja taulukkoa piirretään.',
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vista.result.graph.partial':
    'Vain ensimmäiset {{rows}} merkintää näytetään kohteelle {{nodes}}.',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vista.result.graph.partial.node': '{{name}} ({{entries}} merkintää)',
  /** Title of the graph node of the result itself */
  'vista.result.graph.root': 'tulos',
  /** Button zooming into the graph */
  'vista.result.graph.zoom-in': 'Lähennä',
  /** Button zooming out of the graph */
  'vista.result.graph.zoom-out': 'Loitonna',
  /** Tab showing the result as a graph of its objects and arrays */
  'vista.result.view.graph': 'Graafi',
  /** Tab showing the result as indented JSON text, to select and copy from */
  'vista.result.view.json': 'JSON',
  /** Accessible label of the tabs that switch how the result shows */
  'vista.result.view.label': 'Tulosnäkymä',
  /** Tab showing the result as a tree to browse */
  'vista.result.view.tree': 'Puu',
  /** Empty state of the saved queries panel */
  'vista.saved.empty': 'Ei vielä tallennettuja kyselyitä. Tallenna nykyinen kysely +-painikkeella.',
  /** Empty state of a query list when the search matches nothing */
  'vista.saved.empty-search': 'Hakuasi ei vastaa yksikään kysely',
  /** Menu item loading a saved query into the active tab */
  'vista.saved.load-in-current-tab': 'Lataa nykyiseen välilehteen',
  /** Menu item opening a saved query in a new tab */
  'vista.saved.open-in-new-tab': 'Avaa uudessa välilehdessä',
  /** Menu item renaming a saved query */
  'vista.saved.rename': 'Nimeä uudelleen',
  /** Accessible label for the button saving the current query */
  'vista.saved.save-current': 'Tallenna nykyinen kysely',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vista.saved.unavailable-variant':
    'Tämä tallennettu kysely käytti varianttia "{{variant}}"; valitse se valikkopalkista ajaaksesi kyselyn sillä.',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vista.saved.unknown-dataset':
    'Tämän tallennetun kyselyn tietojoukko "{{dataset}}" ei ole saatavilla täällä, säilytetään nykyinen.',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vista.saved.variants-disabled':
    'Tämä tallennettu kysely käytti varianttia "{{variant}}"; tässä työtilassa variantit on poistettu käytöstä, joten kysely ajetaan ilman sitä.',
  /** Button in the settings dialog that clears the stored state */
  'vista.settings.clear-storage': 'Tyhjennä tallennustila',
  /** Confirmation button for clearing the storage */
  'vista.settings.clear-storage.confirm': 'Kyllä, tyhjennä tallennustila',
  /** Explanation of what clearing the storage does */
  'vista.settings.clear-storage.description':
    'Poistaa henkilökohtaiset tallennetut kyselysi ja funktiokirjaston, nollaa avoimet välilehdet ja nämä oletusasetukset tässä selaimessa sekä palaa klassiseen Vision-työkaluun. Jaetut kyselyt säilytetään.',
  /** Toast shown when the saved queries could not be cleared */
  'vista.settings.clear-storage.error': 'Tallennettuja kyselyitä ei voitu tyhjentää',
  /** Toast shown after the storage was cleared */
  'vista.settings.clear-storage.success': 'Tallennustila tyhjennetty',
  /** Explanation at the top of the settings dialog */
  'vista.settings.description':
    'Uusien välilehtien oletusasetukset. Avoimet välilehdet säilyttävät omat asetuksensa.',
  /** Explains the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.description':
    'Yksi kenttäpolku riviä kohden. Polku täsmää tuloksen missä tahansa syvyydessä, joten _rev piilottaa jokaisen siinä olevan dokumentin version. Jokainen diff voi silti näyttää ne.',
  /** Button restoring the default fields left out of History diffs */
  'vista.settings.history-diff.reset': 'Palauta oletukset',
  /** Label of the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.title': 'Historian diffeistä piilotetut kentät',
  /** Title of the settings dialog */
  'vista.settings.title': 'Asetukset',
  /** Empty state of the shared queries panel */
  'vista.shared.empty':
    'Ei vielä jaettuja kyselyitä. Jaa tallennettu kysely, jotta se on kaikkien tätä datasettia käyttävien saatavilla.',
  /** Shortcut description: close dialogs and menus */
  'vista.shortcuts.close': 'Sulje valintaikkunat ja valikot',
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vista.shortcuts.complete': 'Täydennä funktion nimi',
  /** Shortcut description: copy the query */
  'vista.shortcuts.copy-query': 'Kopioi kysely',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vista.shortcuts.extract-function': 'Erota kohdistimen kohdalla oleva projektio funktioksi',
  /** Shortcut description: run the query */
  'vista.shortcuts.fetch': 'Hae kysely',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vista.shortcuts.next-finding': 'Siirry seuraavaan lint-huomautukseen',
  /** Shortcut description: reformat the query */
  'vista.shortcuts.prettify': 'Siisti kysely',
  /** Title of the keyboard shortcuts dialog */
  'vista.shortcuts.title': 'Pikanäppäimet',
  /** Sidebar toggle: show icons only */
  'vista.sidebar.collapse': 'Pienennä sivupalkki',
  /** Sidebar toggle: show labels next to the icons */
  'vista.sidebar.expand': 'Laajenna sivupalkki',
  /** Accessible label for the sidebar navigation */
  'vista.sidebar.label': 'Vista-sivupalkki',
  /** Sidebar item and drawer title for personal saved queries */
  'vista.sidebar.saved-queries': 'Tallennetut kyselyt',
  /** Sidebar item opening the settings dialog */
  'vista.sidebar.settings': 'Asetukset',
  /** Sidebar item and drawer title for shared queries */
  'vista.sidebar.shared-queries': 'Jaetut kyselyt',
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vista.sidebar.shortcuts': 'Pikanäppäimet',
  /** Empty state of the content source map panel */
  'vista.source-map.empty':
    'Vastauksessa ei ole sisällön lähdekarttaa. Ota käyttöön "Sisällytä sisällön lähdekartta" Asetukset-kohdassa ja hae uudelleen.',
  /** Accessible label of the divider between the result and the response details panel */
  'vista.split.bottom-panel':
    'Muuta vastauksen tietopaneelin kokoa: vedä tai käytä nuolinäppäimiä; Home ja End siirtävät rajoihin, Enter palauttaa',
  /** Accessible label of the divider between the request and response panes */
  'vista.split.request-response':
    'Muuta pyyntö- ja vastauspaneelien kokoa: vedä tai käytä nuolinäppäimiä; Home ja End siirtävät rajoihin, Enter palauttaa',
  /** Accessible label for the button closing a query tab */
  'vista.tabs.close-tab': 'Sulje välilehti',
  /** Accessible label for the list of query tabs */
  'vista.tabs.label': 'Kyselyvälilehdet',
  /** Accessible label for the button opening a new query tab */
  'vista.tabs.new-tab': 'Uusi välilehti',
  /** Placeholder of the input renaming a tab */
  'vista.tabs.title-placeholder': 'Välilehden otsikko',
  /** Title of a tab whose query is still empty */
  'vista.tabs.untitled': 'Nimetön kysely',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vista.webmcp.check-query': 'Tarkista GROQ-kysely Visionissa',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vista.webmcp.describe-schema': 'Kuvaile skeema Visionissa',
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vista.webmcp.explain-query': 'Selitä GROQ-kysely Visionissa',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vista.webmcp.get-state': 'Lue avoin Vision-välilehti',
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vista.webmcp.open-query': 'Avaa GROQ-kysely Visionissa',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vista.webmcp.preview-mutations': 'Esikatsele mutaatioita Visionissa',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vista.webmcp.run-query': 'Suorita GROQ-kysely Visionissa',
})
