import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Kopiraj u međuspremnik',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Zaustavi',
  /** Label for setting up a listener */
  'action.listen-execute': 'Slušaj',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Otkaži',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Dohvati',

  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Novo',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'Parametri nisu valjani JSON',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Parametri',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Stupac',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Linija',
  /** Label for "Query" editor/input */
  'query.label': 'Upit',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'URL upita',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'Kraj do kraja',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'Izvršenje',
  /** Label for "Result" explorer/view */
  'result.label': 'Rezultat',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'n/a',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'Verzija API-ja',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'Prilagođena verzija API-ja',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Dataset',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'Neispravna verzija API-ja',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'Ostalo',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspektiva',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Pročitaj dokumentaciju',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Perspektive omogućuju vašem upitu da se izvodi protiv različitih "pogleda" na sadržaj u vašem datasetu',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspektive',
})
