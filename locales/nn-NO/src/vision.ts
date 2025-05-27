import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Kopier til utklippstavla',
  /** Label for deleting a query */
  'action.delete': 'Slett',
  /** Label for editing a query's title */
  'action.edit-title': 'Rediger tittel',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Stopp',
  /** Label for setting up a listener */
  'action.listen-execute': 'Lytt',
  /** Label for query loading table */
  'action.load-queries': 'Last inn førespurnader',
  /** Label for loading a query */
  'action.load-query': 'Last inn førespurnad',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Avbryt',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Hent',
  /** Label for saving a query */
  'action.save-query': 'Lagre førespurnad',
  /** Label for updating a query */
  'action.update': 'Oppdater',

  /** Label for actions user can take */
  'label.actions': 'Handlingar',
  /** Label for saved queries that have been edited */
  'label.edited': 'Redigert',
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Ny',
  /** Label for query type "personal" */
  'label.personal': 'Personleg',
  /** Label for savedAt date */
  'label.saved-at': 'Lagra den',
  /** Saved queries */
  'label.saved-queries': 'Lagra førespurnader',
  /** Search queries */
  'label.search-queries': 'Søk i førespurnader',
  /** Share query */
  'label.share': 'Del',
  /** Label for saved query type "team" */
  'label.team': 'Lag',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'Parameterane er ikkje gyldig JSON',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Parametrar',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Kolonne',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Linje',
  /** Label for "Query" editor/input */
  'query.label': 'Forespørsel',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'Forespørsel URL',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'Ende-til-ende',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'Utføringstid',
  /** Label for "Result" explorer/view */
  'result.label': 'Resultat',
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable': 'Resultatet kan ikkje kodast som CSV',
  /** Label for "Save result as" result action */
  'result.save-result-as-format': 'Lagre resultat som <SaveResultButtons/>',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'Ikkje tilgjengeleg',

  /** Query already saved error label */
  'save-query.already-saved': 'Førespurnaden er allereie lagra',
  /** Save error label */
  'save-query.error': 'Feil ved lagring av førespurnad',
  /** Save success label */
  'save-query.success': 'Førespurnaden er lagra',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'API-versjon',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'Tilpassa API-versjon',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Dataset',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'Ugyldig API-versjon',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'Anna',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspektiv',
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    'Perspektivet "<code>previewDrafts</code>" har blitt omdøypt til "<code>drafts</code>" og er no avskrive. Denne endringa er gjeldande for alle versjonar med støtte for perspektiv (>= v2021-03-25).',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Les dokumentasjon',
  /** Option for selecting default perspective */
  'settings.perspectives.default': 'Ingen perspektiv (API standard)',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Perspektiv lar forespørselen din køyre mot ulike "utsyn" av innhaldet i datasettet ditt',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    'Standardperspektivet vil endre seg frå "<code>raw</code>" til "<code>published</code>" i ein kommande API-versjon. Vennligst sjå i dokumentasjonen for meir detaljar.',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': 'Festa utgjeving',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspektiv',
})
