import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Kopier til utklippstavle',
  /** Label for deleting a query */
  'action.delete': 'Slett',
  /** Label for editing a query's title */
  'action.edit-title': 'Rediger tittel',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Stopp',
  /** Label for setting up a listener */
  'action.listen-execute': 'Lytt',
  /** Label for query loading table */
  'action.load-queries': 'Last spørringer',
  /** Label for loading a query */
  'action.load-query': 'Last spørring',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Avbryt',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Utfør',
  /** Label for saving a query */
  'action.save-query': 'Lagre spørring',
  /** Label for updating a query */
  'action.update': 'Oppdater',

  /** Label for actions user can take */
  'label.actions': 'Handlinger',
  /** Label for saved queries that have been edited */
  'label.edited': 'Redigert',
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Nyhet',
  /** Label for query type "personal" */
  'label.personal': 'Personlig',
  /** Label for savedAt date */
  'label.saved-at': 'Lagret',
  /** Saved queries */
  'label.saved-queries': 'Lagrede spørringer',
  /** Search queries */
  'label.search-queries': 'Søk i spørringer',
  /** Share query */
  'label.share': 'Del',
  /** Label for saved query type "team" */
  'label.team': 'Team',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'Parametere er ikke gyldig JSON',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Parametere',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Kolonne',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Linje',
  /** Label for "Query" editor/input */
  'query.label': 'Spørring',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'URL',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'Ende-til-ende',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'Utførelsestid',
  /** Label for "Result" explorer/view */
  'result.label': 'Resultat',
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable': 'Resultatet kan ikke kodes som CSV',
  /** Label for "Save result as" result action */
  'result.save-result-as-format': 'Lagre resultat som <SaveResultButtons/>',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': '-',

  /** Query already saved error label */
  'save-query.already-saved': 'Spørringen er allerede lagret',
  /** Save error label */
  'save-query.error': 'Feil ved lagring av spørring',
  /** Save success label */
  'save-query.success': 'Spørringen er lagret',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'API-versjon',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'Egendefinert API-versjon',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Datasett',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'Ugyldig API-versjon',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'Annen',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspektiv',
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    'Perspektivet "<code>previewDrafts</code>" har blitt omdøpt til "<code>drafts</code>" og er nå foreldet. Denne endringen er effektiv for alle versjoner med støtte for perspektiv (>= v2021-03-25).',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Les dokumentasjon',
  /** Option for selecting default perspective */
  'settings.perspectives.default': 'Ingen perspektiv (API-standard)',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Perspektiver lar deg kjøre spørringen din mot forskjellige "visninger" av innholdet i datasettet ditt',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    'Standardperspektivet vil endre seg fra "<code>raw</code>" til "<code>published</code>" i en kommende API-versjon. Vennligst se dokumentasjonen for flere detaljer.',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': 'Festet utgivelse',
  /** Label for the scheduled drafts perspective */
  'settings.perspectives.scheduled-drafts': 'Planlagte utkast',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspektiver',
})
