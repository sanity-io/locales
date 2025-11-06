import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'დაკოპირებულია',
  /** Label for deleting a query */
  'action.delete': 'წაშლა',
  /** Label for editing a query's title */
  'action.edit-title': 'სათაურის რედაქტირება',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'შეჩერება',
  /** Label for setting up a listener */
  'action.listen-execute': 'მოსმენა',
  /** Label for query loading table */
  'action.load-queries': 'მოთხოვნების ჩატვირთვა',
  /** Label for loading a query */
  'action.load-query': 'მოთხოვნის ჩატვირთვა',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'გაუქმება',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'მოძებნა',
  /** Label for saving a query */
  'action.save-query': 'მოთხოვნის შენახვა',
  /** Label for updating a query */
  'action.update': 'განახლება',

  /** Label for actions user can take */
  'label.actions': 'ქმედებები',
  /** Label for saved queries that have been edited */
  'label.edited': 'რედაქტირებული',
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'ახალი',
  /** Label for query type "personal" */
  'label.personal': 'პირადი',
  /** Label for savedAt date */
  'label.saved-at': 'შენახულია',
  /** Saved queries */
  'label.saved-queries': 'შენახული მოთხოვნები',
  /** Search queries */
  'label.search-queries': 'მოთხოვნების ძიება',
  /** Share query */
  'label.share': 'გაზიარება',
  /** Label for saved query type "team" */
  'label.team': 'გუნდი',

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
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable': 'შედეგი ვერ კოდირდება CSV ფორმატში',
  /** Label for "Save result as" result action */
  'result.save-result-as-format': 'შეინახე შედეგი როგორც <SaveResultButtons/>',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'არ არის მიმართულება',

  /** Query already saved error label */
  'save-query.already-saved': 'მოთხოვნა უკვე შენახულია',
  /** Save error label */
  'save-query.error': 'მოთხოვნის შენახვის შეცდომა',
  /** Save success label */
  'save-query.success': 'მოთხოვნა შენახულია',

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
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    'პერსპექტივა "<code>previewDrafts</code>" გადარქმევა "<code>drafts</code>"-ად და ახლა გაუქმებულია. ეს ცვლილება ძალაშია ყველა ვერსიაში, სადაც არის პერსპექტივის მხარდაჭერა (>= v2021-03-25).',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'დოკუმენტაციის წაკითხვა',
  /** Option for selecting default perspective */
  'settings.perspectives.default': 'პერსპექტივა არ არის (API სტანდარტი)',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Perspectives გაძლევთ შესაძლებლობას გაუშვათ თქვენი მოძებნა სხვადასხვა "ხედვებიდან" თქვენი dataset-ის კონტენტზე',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    'სტანდარტული პერსპექტივა შეიცვლება "<code>raw</code>"-დან "<code>published</code>"-ზე მომავალ API ვერსიაში. გთხოვთ, დახედეთ დოკუმენტაციას უფრო დეტალურად.',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': 'მიმაგრებული გამოშვება',
  /** Label for the scheduled drafts perspective */
  'settings.perspectives.scheduled-drafts': undefined, // 'Scheduled drafts'
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspectives',
})
