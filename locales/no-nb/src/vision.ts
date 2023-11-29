import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /**
   * Context: "Vision" is a Sanity studio plugin which allows users to execute GROQ-queries
   * against their dataset and see the results in different ways. It is often used to explore
   * a dataset, debug queries and get a better understanding of the data.
   */
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': undefined, // 'New'

  /** --- Settings --- */
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': undefined, // 'Dataset'
  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': undefined, // 'API version'
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': undefined, // 'Other'
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': undefined, // 'Custom API version'
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': undefined, // 'Invalid API version'
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': undefined, // 'Perspective'
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': undefined, // 'Perspectives'
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description': undefined, // 'Perspectives allow your query to run against different "views" of the content in your dataset'
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': undefined, // 'Read docs'

  /** --- Query editor --- */
  /** Label for "Query" editor/input */
  'query.label': undefined, // 'Query'
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': undefined, // 'Line'
  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': undefined, // 'Column'
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': undefined, // 'Query URL'

  /** --- Params editor --- */
  /** Label for "Params" (parameters) editor/input */
  'params.label': undefined, // 'Params'
  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': undefined, // 'Parameters are not valid JSON'

  /** --- Results view/explorer --- */
  /** Label for "Result" explorer/view */
  'result.label': undefined, // 'Result'
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': undefined, // 'Execution'
  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': undefined, // 'End-to-end'
  /** "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored) */
  'result.timing-not-applicable': undefined, // 'n/a'

  /** --- Actions -- */
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': undefined, // 'Fetch'
  /** Label for cancelling an ongoing query */
  'action.query-cancel': undefined, // 'Cancel'
  /** Label for setting up a listener */
  'action.listen-execute': undefined, // 'Listen'
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': undefined, // 'Stop'
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': undefined, // 'Copy to clipboard'
})
