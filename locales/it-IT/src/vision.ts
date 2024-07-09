import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Copia negli appunti',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Ferma',
  /** Label for setting up a listener */
  'action.listen-execute': 'Ascolta',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Annulla',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Esegui',

  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Nuovo',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'I parametri non sono un JSON valido',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Parametri',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Colonna',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Linea',
  /** Label for "Query" editor/input */
  'query.label': 'Query',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'URL della Query',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'Tempo inizio-fine',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'Esecuzione',
  /** Label for "Result" explorer/view */
  'result.label': 'Risultato',
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable': undefined, // 'Result cannot be encoded as CSV'
  /** Label for "Save result as" result action */
  'result.save-result-as-format': undefined, // 'Save result as <SaveResultButtons/>'
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'n/d',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'Versione API',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'Versione API personalizzata',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Dataset',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'Versione API non valida',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'Altro',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspective',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Leggi la documentazione',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Le Perspectives consentono alla tua query di essere eseguita contro diverse "visualizzazioni" dei contenuti nel tuo dataset',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspectives',
})
