import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'დაკოპირებულია',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'შეჩერება',
  /** Label for setting up a listener */
  'action.listen-execute': 'მოსმენა',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'გაუქმება',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'მოძებნა',

  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'ახალი',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'პარამეტრები არ არის მართებული JSON',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'პარამეტრები',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'სვეტი',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'ხაზი',
  /** Label for "Query" editor/input */
  'query.label': 'მოძებნა',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'მოძებნის URL',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'დასრულების დრო',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'შესრულების დრო',
  /** Label for "Result" explorer/view */
  'result.label': 'შედეგი',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'არ არის მიმართულება',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'API ვერსია',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'საკუთარი API ვერსია',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Dataset',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'არასწორი API ვერსია',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'სხვა',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspective',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'დოკუმენტაციის წაკითხვა',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Perspectives გაძლევთ შესაძლებლობას გაუშვათ თქვენი მოძებნა სხვადასხვა "ხედვებიდან" თქვენი dataset-ის კონტენტზე',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspectives',
})
