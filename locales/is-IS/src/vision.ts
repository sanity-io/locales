import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Afrita á klippiborð',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Stoppa',
  /** Label for setting up a listener */
  'action.listen-execute': 'Hlusta',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Hætta við',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Sækja',

  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Nýtt',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'Parametrar eru ekki gilt JSON',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Parametrar',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Dálkur',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Lína',
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

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'API útgáfa',
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
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Lestu skjölin',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Perspectives leyfa fyrirspurn þinni að keyra gegn mismunandi "sýnum" af efni í dataset þínu',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspectives',
})
