import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Kopiuj do schowka',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Zatrzymaj',
  /** Label for setting up a listener */
  'action.listen-execute': 'Słuchaj',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Anuluj',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Pobierz',

  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Nowy',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'Parametry nie są prawidłowym JSON',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Parametry',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Kolumna',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Linia',
  /** Label for "Query" editor/input */
  'query.label': 'Zapytanie',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'URL zapytania',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'Czas od początku do końca',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'Czas wykonania',
  /** Label for "Result" explorer/view */
  'result.label': 'Wynik',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'brak danych',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'Wersja API',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'Niestandardowa wersja API',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Dataset',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'Nieprawidłowa wersja API',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'Inne',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspektywa',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Czytaj dokumentację',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Perspektywy pozwalają na uruchomienie zapytania względem różnych "widoków" zawartości w twoim zbiorze danych',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspektywy',
})
