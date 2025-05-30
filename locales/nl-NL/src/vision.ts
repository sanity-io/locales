import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Kopiëren naar klembord',
  /** Label for deleting a query */
  'action.delete': 'Verwijderen',
  /** Label for editing a query's title */
  'action.edit-title': 'Titel bewerken',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Stoppen',
  /** Label for setting up a listener */
  'action.listen-execute': 'Luisteren',
  /** Label for query loading table */
  'action.load-queries': 'Queries laden',
  /** Label for loading a query */
  'action.load-query': 'Query laden',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Annuleren',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Ophalen',
  /** Label for saving a query */
  'action.save-query': 'Query opslaan',
  /** Label for updating a query */
  'action.update': 'Bijwerken',

  /** Label for actions user can take */
  'label.actions': 'Acties',
  /** Label for saved queries that have been edited */
  'label.edited': 'Bewerkt',
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Nieuw',
  /** Label for query type "personal" */
  'label.personal': 'Persoonlijk',
  /** Label for savedAt date */
  'label.saved-at': 'Opgeslagen op',
  /** Saved queries */
  'label.saved-queries': 'Opgeslagen queries',
  /** Search queries */
  'label.search-queries': 'Zoek queries',
  /** Share query */
  'label.share': 'Delen',
  /** Label for saved query type "team" */
  'label.team': 'Team',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'Parameters zijn geen geldige JSON',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Parameters',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Kolom',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Regel',
  /** Label for "Query" editor/input */
  'query.label': 'Query',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'Query URL',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'End-to-end',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'Uitvoering',
  /** Label for "Result" explorer/view */
  'result.label': 'Resultaat',
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable': 'Resultaat kan niet als CSV gecodeerd worden',
  /** Label for "Save result as" result action */
  'result.save-result-as-format': 'Resultaat opslaan als <SaveResultButtons/>',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'n.v.t.',

  /** Query already saved error label */
  'save-query.already-saved': 'Query al opgeslagen',
  /** Save error label */
  'save-query.error': 'Fout bij het opslaan van de query',
  /** Save success label */
  'save-query.success': 'Query opgeslagen',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'API-versie',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'Aangepaste API-versie',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Dataset',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'Ongeldige API-versie',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'Andere',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspectief',
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    'De "<code>previewDrafts</code>" perspective is hernoemd naar "<code>drafts</code>" en is nu afgekeurd. Deze verandering is effectief voor alle versies met ondersteuning voor perspective (>= v2021-03-25).',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Lees de documentatie',
  /** Option for selecting default perspective */
  'settings.perspectives.default': 'Geen perspective (API standaard)',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Perspectieven stellen je in staat om je query uit te voeren tegen verschillende "weergaven" van de inhoud in je dataset',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    'De standaard perspective zal veranderen van "<code>raw</code>" naar "<code>published</code>" in een aankomende API versie. Raadpleeg de documentatie voor meer details.',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': 'Vastgezette release',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspectieven',
})
