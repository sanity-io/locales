import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Kopier til udklipsholder',
  /** Label for deleting a query */
  'action.delete': 'Slet',
  /** Label for editing a query's title */
  'action.edit-title': 'Rediger titel',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Stop',
  /** Label for setting up a listener */
  'action.listen-execute': 'Lyt',
  /** Label for query loading table */
  'action.load-queries': 'Indlæs forespørgsler',
  /** Label for loading a query */
  'action.load-query': 'Indlæs forespørgsel',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Annuller',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Hent',
  /** Label for saving a query */
  'action.save-query': 'Gem forespørgsel',
  /** Label for updating a query */
  'action.update': 'Opdater',

  /** Label for actions user can take */
  'label.actions': 'Handlinger',
  /** Label for saved queries that have been edited */
  'label.edited': 'Redigeret',
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Ny',
  /** Label for query type "personal" */
  'label.personal': 'Personlig',
  /** Label for savedAt date */
  'label.saved-at': 'Gemt den',
  /** Saved queries */
  'label.saved-queries': 'Gemte forespørgsler',
  /** Search queries */
  'label.search-queries': 'Søg i forespørgsler',
  /** Share query */
  'label.share': 'Del',
  /** Label for saved query type "team" */
  'label.team': 'Hold',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'Parametre er ikke gyldig JSON',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Parametre',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Kolonne',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Linje',
  /** Label for "Query" editor/input */
  'query.label': 'Forespørgsel',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'Forespørgsels URL',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'Ende-til-ende',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'Udførelse',
  /** Label for "Result" explorer/view */
  'result.label': 'Resultat',
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable': 'Resultatet kan ikke kodes som CSV',
  /** Label for "Save result as" result action */
  'result.save-result-as-format': 'Gem resultat som <SaveResultButtons/>',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'i/t',

  /** Query already saved error label */
  'save-query.already-saved': 'Forespørgsel allerede gemt',
  /** Save error label */
  'save-query.error': 'Fejl ved gemning af forespørgsel',
  /** Save success label */
  'save-query.success': 'Forespørgsel gemt',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'API version',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'Brugerdefineret API version',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Dataset',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'Ugyldig API version',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'Anden',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspektiv',
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    'Perspektivet "<code>previewDrafts</code>" er blevet omdøbt til "<code>drafts</code>" og er nu forældet. Denne ændring er gældende for alle versioner med perspektivstøtte (>= v2021-03-25).',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Læs dokumentation',
  /** Option for selecting default perspective */
  'settings.perspectives.default': 'Intet perspektiv (API standard)',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Perspektiver tillader din forespørgsel at køre mod forskellige "visninger" af indholdet i dit dataset',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    'Standardperspektivet vil ændre sig fra "<code>raw</code>" til "<code>published</code>" i en kommende API-version. Konsulter venligst dokumentationen for flere detaljer.',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': 'Fastgjort udgivelse',
  /** Label for the scheduled drafts perspective */
  'settings.perspectives.scheduled-drafts': undefined, // 'Scheduled drafts'
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspektiver',
})
