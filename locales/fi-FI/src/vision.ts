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
  'action.save-query': 'Tallenna kysely',
  /** Label for updating a query */
  'action.update': 'Päivitä',

  /** Label for actions user can take */
  'label.actions': 'Toiminnot',
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
  /** Label for saved query type "team" */
  'label.team': 'Tiimi',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'Parametrit eivät ole kelvollista JSONia',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Parametrit',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Sarake',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Rivi',
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
  /** Save success label */
  'save-query.success': 'Kysely tallennettu',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'API-versio',
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
})
