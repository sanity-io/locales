import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Kopiuj do schowka',
  /** Label for deleting a query */
  'action.delete': 'Usuń',
  /** Label for editing a query's title */
  'action.edit-title': 'Edytuj tytuł',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Zatrzymaj',
  /** Label for setting up a listener */
  'action.listen-execute': 'Słuchaj',
  /** Label for query loading table */
  'action.load-queries': 'Załaduj zapytania',
  /** Label for loading a query */
  'action.load-query': 'Załaduj zapytanie',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Anuluj',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Pobierz',
  /** Label for saving a query */
  'action.save-query': 'Zapisz zapytanie',
  /** Label for updating a query */
  'action.update': 'Aktualizuj',

  /** Label for actions user can take */
  'label.actions': 'Akcje',
  /** Label for saved queries that have been edited */
  'label.edited': 'Edytowane',
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Nowy',
  /** Label for query type "personal" */
  'label.personal': 'Osobiste',
  /** Label for savedAt date */
  'label.saved-at': 'Zapisano o',
  /** Saved queries */
  'label.saved-queries': 'Zapisane zapytania',
  /** Search queries */
  'label.search-queries': 'Szukaj zapytań',
  /** Share query */
  'label.share': 'Udostępnij',
  /** Label for saved query type "team" */
  'label.team': 'Zespół',

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
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable': 'Wynik nie może być zakodowany jako CSV',
  /** Label for "Save result as" result action */
  'result.save-result-as-format': 'Zapisz wynik jako <SaveResultButtons/>',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'brak danych',

  /** Query already saved error label */
  'save-query.already-saved': 'Zapytanie już zapisane',
  /** Save error label */
  'save-query.error': 'Błąd podczas zapisywania zapytania',
  /** Save success label */
  'save-query.success': 'Zapytanie zapisane',

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
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    'Perspektywa "<code>previewDrafts</code>" została przemianowana na "<code>drafts</code>" i jest teraz przestarzała. Zmiana ta jest skuteczna dla wszystkich wersji z obsługą perspektywy (>= v2021-03-25).',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Czytaj dokumentację',
  /** Option for selecting default perspective */
  'settings.perspectives.default': 'Brak perspektywy (domyślne API)',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Perspektywy pozwalają na uruchomienie zapytania względem różnych "widoków" zawartości w twoim zbiorze danych',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    'Domyślna perspektywa zmieni się z "<code>raw</code>" na "<code>published</code>" w nadchodzącej wersji API. Proszę zapoznać się z dokumentacją, aby uzyskać więcej szczegółów.',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': 'Przypięte wydanie',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspektywy',
})
