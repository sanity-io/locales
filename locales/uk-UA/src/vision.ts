import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Скопіювати в буфер обміну',
  /** Label for deleting a query */
  'action.delete': 'Видалити',
  /** Label for editing a query's title */
  'action.edit-title': 'Редагувати назву',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Зупинити',
  /** Label for setting up a listener */
  'action.listen-execute': 'Слухати',
  /** Label for query loading table */
  'action.load-queries': 'Завантажити запити',
  /** Label for loading a query */
  'action.load-query': 'Завантажити запит',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Скасувати',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Отримати',
  /** Label for saving a query */
  'action.save-query': 'Зберегти запит',
  /** Label for updating a query */
  'action.update': 'Оновити',

  /** Label for actions user can take */
  'label.actions': 'Дії',
  /** Label for saved queries that have been edited */
  'label.edited': 'Відредаговано',
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Нове',
  /** Label for query type "personal" */
  'label.personal': 'Особистий',
  /** Label for savedAt date */
  'label.saved-at': 'Збережено о',
  /** Saved queries */
  'label.saved-queries': 'Збережені запити',
  /** Search queries */
  'label.search-queries': 'Пошук запитів',
  /** Share query */
  'label.share': 'Поділитися',
  /** Label for saved query type "team" */
  'label.team': 'Команда',

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

  /** Query already saved error label */
  'save-query.already-saved': 'Запит вже збережено',
  /** Save error label */
  'save-query.error': 'Помилка збереження запиту',
  /** Save success label */
  'save-query.success': 'Запит збережено',

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
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    'Перспектива "<code>previewDrafts</code>" була перейменована на "<code>drafts</code>" і тепер є застарілою. Ця зміна стосується всіх версій з підтримкою перспективи (>= v2021-03-25).',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Читати документацію',
  /** Option for selecting default perspective */
  'settings.perspectives.default': 'Без перспективи (за замовчуванням API)',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Perspectives дозволяють вашому запиту працювати з різними "видами" контенту у вашому dataset',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    'Перспектива за замовчуванням зміниться з "<code>raw</code>" на "<code>published</code>" у майбутній версії API. Будь ласка, зверніться до документації за додатковою інформацією.',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': 'Закріплений реліз',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspectives',
})
