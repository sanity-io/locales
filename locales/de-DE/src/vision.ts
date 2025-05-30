import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'In die Zwischenablage kopieren',
  /** Label for deleting a query */
  'action.delete': 'Löschen',
  /** Label for editing a query's title */
  'action.edit-title': 'Titel bearbeiten',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Stopp',
  /** Label for setting up a listener */
  'action.listen-execute': 'Zuhören',
  /** Label for query loading table */
  'action.load-queries': 'Abfragen laden',
  /** Label for loading a query */
  'action.load-query': 'Abfrage laden',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Abbrechen',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Abfragen',
  /** Label for saving a query */
  'action.save-query': 'Abfrage speichern',
  /** Label for updating a query */
  'action.update': 'Aktualisieren',

  /** Label for actions user can take */
  'label.actions': 'Aktionen',
  /** Label for saved queries that have been edited */
  'label.edited': 'Bearbeitet',
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Neu',
  /** Label for query type "personal" */
  'label.personal': 'Persönlich',
  /** Label for savedAt date */
  'label.saved-at': 'Gespeichert am',
  /** Saved queries */
  'label.saved-queries': 'Gespeicherte Abfragen',
  /** Search queries */
  'label.search-queries': 'Abfragen suchen',
  /** Share query */
  'label.share': 'Teilen',
  /** Label for saved query type "team" */
  'label.team': 'Team',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'Parameter sind kein gültiges JSON',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Parameter',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Spalte',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Zeile',
  /** Label for "Query" editor/input */
  'query.label': 'Abfrage',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'Abfrage-URL',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'Ende-zu-Ende-Zeit',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'Ausführungszeit',
  /** Label for "Result" explorer/view */
  'result.label': 'Ergebnis',
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable': 'Das Ergebnis kann nicht als CSV codiert werden',
  /** Label for "Save result as" result action */
  'result.save-result-as-format': 'Ergebnis speichern als <SaveResultButtons/>',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'nicht zutreffend',

  /** Query already saved error label */
  'save-query.already-saved': 'Abfrage bereits gespeichert',
  /** Save error label */
  'save-query.error': 'Fehler beim Speichern der Abfrage',
  /** Save success label */
  'save-query.success': 'Abfrage gespeichert',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'API-Version',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'Benutzerdefinierte API-Version',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Dataset',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'Ungültige API-Version',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'Andere',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspektive',
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    'Die "<code>previewDrafts</code>" Perspektive wurde in "<code>drafts</code>" umbenannt und ist nun veraltet. Diese Änderung ist wirksam für alle Versionen mit Perspektivenunterstützung (>= v2021-03-25).',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Dokumentation lesen',
  /** Option for selecting default perspective */
  'settings.perspectives.default': 'Keine Perspektive (API-Standard)',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Perspektiven ermöglichen es Ihrer Abfrage, gegen verschiedene "Ansichten" des Inhalts in Ihrem Dataset zu laufen',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    'Die Standardperspektive wird in einer kommenden API-Version von "<code>raw</code>" zu "<code>published</code>" wechseln. Bitte konsultieren Sie die Dokumentation für weitere Details.',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': 'Angepinntes Release',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspektiven',
})
