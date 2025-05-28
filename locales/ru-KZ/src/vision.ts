import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Скопировать в буфер обмена',
  /** Label for deleting a query */
  'action.delete': 'Удалить',
  /** Label for editing a query's title */
  'action.edit-title': 'Редактировать название',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Остановить',
  /** Label for setting up a listener */
  'action.listen-execute': 'Слушать',
  /** Label for query loading table */
  'action.load-queries': 'Загрузить запросы',
  /** Label for loading a query */
  'action.load-query': 'Загрузить запрос',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Отмена',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Получить',
  /** Label for saving a query */
  'action.save-query': 'Сохранить запрос',
  /** Label for updating a query */
  'action.update': 'Обновить',

  /** Label for actions user can take */
  'label.actions': 'Действия',
  /** Label for saved queries that have been edited */
  'label.edited': 'Отредактировано',
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Новый',
  /** Label for query type "personal" */
  'label.personal': 'Личный',
  /** Label for savedAt date */
  'label.saved-at': 'Сохранено в',
  /** Saved queries */
  'label.saved-queries': 'Сохраненные запросы',
  /** Search queries */
  'label.search-queries': 'Поиск запросов',
  /** Share query */
  'label.share': 'Поделиться',
  /** Label for saved query type "team" */
  'label.team': 'Команда',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'Параметры не являются допустимым JSON',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Параметры',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Столбец',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Строка',
  /** Label for "Query" editor/input */
  'query.label': 'Запрос',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'URL запроса',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'Время от начала до конца',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'Выполнение',
  /** Label for "Result" explorer/view */
  'result.label': 'Результат',
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable':
    'Результат не может быть закодирован в формате CSV',
  /** Label for "Save result as" result action */
  'result.save-result-as-format': 'Сохранить результат как <SaveResultButtons/>',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'н/д',

  /** Query already saved error label */
  'save-query.already-saved': 'Запрос уже сохранен',
  /** Save error label */
  'save-query.error': 'Ошибка при сохранении запроса',
  /** Save success label */
  'save-query.success': 'Запрос сохранен',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'Версия API',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'Пользовательская версия API',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Dataset',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'Недопустимая версия API',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'Другое',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspective',
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    'Перспектива "<code>previewDrafts</code>" была переименована в "<code>drafts</code>" и теперь устарела. Это изменение вступает в силу для всех версий с поддержкой перспектив (>= v2021-03-25).',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Читать документацию',
  /** Option for selecting default perspective */
  'settings.perspectives.default': 'Нет перспективы (по умолчанию API)',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Perspectives позволяют выполнять запросы для различных "видов" содержимого в вашем dataset',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    'Перспектива по умолчанию изменится с "<code>raw</code>" на "<code>published</code>" в предстоящей версии API. Пожалуйста, смотрите документацию для получения дополнительной информации.',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': 'Закрепленный релиз',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspectives',
})
