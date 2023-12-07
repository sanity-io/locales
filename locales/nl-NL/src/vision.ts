import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Kopiëren naar klembord',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Stoppen',
  /** Label for setting up a listener */
  'action.listen-execute': 'Luisteren',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Annuleren',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Ophalen',

  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Nieuw',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'Parameters zijn geen geldige JSON',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Parameters',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Kolom',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Regel',
  /** Label for "Query" editor/input */
  'query.label': 'Query',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'Query URL',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'End-to-end',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'Uitvoering',
  /** Label for "Result" explorer/view */
  'result.label': 'Resultaat',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'n.v.t.',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'API-versie',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'Aangepaste API-versie',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Dataset',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'Ongeldige API-versie',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'Andere',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspectief',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Lees de documentatie',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Perspectieven stellen je in staat om je query uit te voeren tegen verschillende "weergaven" van de inhoud in je dataset',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspectieven',
})
