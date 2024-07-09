import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Kopiera till urklipp',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Stoppa',
  /** Label for setting up a listener */
  'action.listen-execute': 'Lyssna',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Avbryt',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Hämta',

  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Ny',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'Parametrarna är inte giltig JSON',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Parametrar',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Kolumn',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Rad',
  /** Label for "Query" editor/input */
  'query.label': 'Förfrågan',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'Förfrågnings-URL',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'End-to-end',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'Exekvering',
  /** Label for "Result" explorer/view */
  'result.label': 'Resultat',
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable': undefined, // 'Result cannot be encoded as CSV'
  /** Label for "Save result as" result action */
  'result.save-result-as-format': undefined, // 'Save result as <SaveResultButtons/>'
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'ej tillämplig',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'API-version',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'Anpassad API-version',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Dataset',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'Ogiltig API-version',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'Annat',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspektiv',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Läs dokumentationen',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Perspektiv låter din förfrågan köras mot olika "vyer" av innehållet i ditt dataset',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspektiv',
})
