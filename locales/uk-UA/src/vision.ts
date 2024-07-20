import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Скопіювати в буфер обміну',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Зупинити',
  /** Label for setting up a listener */
  'action.listen-execute': 'Слухати',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Скасувати',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Отримати',

  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Нове',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'Параметри не є дійсним JSON',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Параметри',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Стовпець',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Лінія',
  /** Label for "Query" editor/input */
  'query.label': 'Запит',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'URL запиту',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'Кінець-до-кінця',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'Виконання',
  /** Label for "Result" explorer/view */
  'result.label': 'Результат',
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable': 'Результат не може бути закодований як CSV',
  /** Label for "Save result as" result action */
  'result.save-result-as-format': 'Зберегти результат як <SaveResultButtons/>',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'не застосовно',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'Версія API',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'Спеціальна версія API',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Dataset',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'Недійсна версія API',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'Інше',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspective',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Читати документацію',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Perspectives дозволяють вашому запиту працювати з різними "видами" контенту у вашому dataset',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspectives',
})
