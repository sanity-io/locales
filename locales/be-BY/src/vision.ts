import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Капіяваць у буфер абмену',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Спыніць',
  /** Label for setting up a listener */
  'action.listen-execute': 'Слухаць',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Адмяніць',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Выканаць запыт',

  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Новае',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': "Параметры не з'яўляюцца сапраўдным JSON",
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Параметры',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Слупок',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Радок',
  /** Label for "Query" editor/input */
  'query.label': 'Запыт',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'URL запыту',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'Час ад пачатку да канца',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'Час выканання',
  /** Label for "Result" explorer/view */
  'result.label': 'Вынік',
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable': undefined, // 'Result cannot be encoded as CSV'
  /** Label for "Save result as" result action */
  'result.save-result-as-format': undefined, // 'Save result as <SaveResultButtons/>'
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'не прымяняецца',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'Версія API',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'Карыстацкая версія API',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Dataset',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'Несапраўдная версія API',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'Іншае',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspective',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Чытаць дакументацыю',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Perspectives дазваляюць вашаму запыту працаваць з рознымі "відамі" кантэнту ў вашым dataset',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspectives',
})
