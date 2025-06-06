import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Капіяваць у буфер абмену',
  /** Label for deleting a query */
  'action.delete': 'Выдаліць',
  /** Label for editing a query's title */
  'action.edit-title': 'Рэдагаваць назву',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Спыніць',
  /** Label for setting up a listener */
  'action.listen-execute': 'Слухаць',
  /** Label for query loading table */
  'action.load-queries': 'Загрузіць запыты',
  /** Label for loading a query */
  'action.load-query': 'Загрузіць запыт',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Адмяніць',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Выканаць запыт',
  /** Label for saving a query */
  'action.save-query': 'Захаваць запыт',
  /** Label for updating a query */
  'action.update': 'Абнавіць',

  /** Label for actions user can take */
  'label.actions': 'Дзеянні',
  /** Label for saved queries that have been edited */
  'label.edited': 'Адрэдагавана',
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Новае',
  /** Label for query type "personal" */
  'label.personal': 'Асабісты',
  /** Label for savedAt date */
  'label.saved-at': 'Захавана ў',
  /** Saved queries */
  'label.saved-queries': 'Захаваныя запыты',
  /** Search queries */
  'label.search-queries': 'Шукаць запыты',
  /** Share query */
  'label.share': 'Падзяліцца',
  /** Label for saved query type "team" */
  'label.team': 'Каманда',

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
  'result.save-result-as-csv.not-csv-encodable': 'Рэзультат немагчыма закадаваць у фармаце CSV',
  /** Label for "Save result as" result action */
  'result.save-result-as-format': 'Захаваць вынік як <SaveResultButtons/>',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'не прымяняецца',

  /** Query already saved error label */
  'save-query.already-saved': 'Запыт ужо захаваны',
  /** Save error label */
  'save-query.error': 'Памылка пры захаванні запыту',
  /** Save success label */
  'save-query.success': 'Запыт захаваны',

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
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    'Перспектыва "<code>previewDrafts</code>" была перайменавана ў "<code>drafts</code>" і цяпер застарэлая. Гэтая змена дзейнічае для ўсіх версій з падтрымкай перспектывы (>= v2021-03-25).',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Чытаць дакументацыю',
  /** Option for selecting default perspective */
  'settings.perspectives.default': 'Няма перспектывы (API па змаўчанні)',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Perspectives дазваляюць вашаму запыту працаваць з рознымі "відамі" кантэнту ў вашым dataset',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    'Перспектыва па змаўчанні зменіцца з "<code>raw</code>" на "<code>published</code>" у будучай версіі API. Калі ласка, звярніцеся да дакументацыі для атрымання больш падрабязнай інфармацыі.',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': 'Прымацаваны рэліз',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspectives',
})
