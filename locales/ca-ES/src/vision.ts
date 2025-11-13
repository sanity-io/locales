import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Copia al porta-retalls',
  /** Label for deleting a query */
  'action.delete': 'Esborra',
  /** Label for editing a query's title */
  'action.edit-title': 'Edita el títol',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Atura',
  /** Label for setting up a listener */
  'action.listen-execute': 'Escolta',
  /** Label for query loading table */
  'action.load-queries': 'Carrega consultes',
  /** Label for loading a query */
  'action.load-query': 'Carrega consulta',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Cancel·la',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Obté',
  /** Label for saving a query */
  'action.save-query': 'Desa consulta',
  /** Label for updating a query */
  'action.update': 'Actualitza',

  /** Label for actions user can take */
  'label.actions': 'Accions',
  /** Label for saved queries that have been edited */
  'label.edited': 'Editat',
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Nou',
  /** Label for query type "personal" */
  'label.personal': 'Personal',
  /** Label for savedAt date */
  'label.saved-at': 'Desat el',
  /** Saved queries */
  'label.saved-queries': 'Consultes desades',
  /** Search queries */
  'label.search-queries': 'Cerca consultes',
  /** Share query */
  'label.share': 'Comparteix',
  /** Label for saved query type "team" */
  'label.team': 'Equip',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'Els paràmetres no són JSON vàlid',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Paràmetres',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Columna',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Línia',
  /** Label for "Query" editor/input */
  'query.label': 'Consulta',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'URL de la consulta',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'Temps complet',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'Execució',
  /** Label for "Result" explorer/view */
  'result.label': 'Resultat',
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable': 'El resultat no es pot codificar com a CSV',
  /** Label for "Save result as" result action */
  'result.save-result-as-format': 'Desa el resultat com a <SaveResultButtons/>',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'n/d',

  /** Query already saved error label */
  'save-query.already-saved': 'Consulta ja desada',
  /** Save error label */
  'save-query.error': 'Error en desar la consulta',
  /** Save success label */
  'save-query.success': 'Consulta desada',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': "Versió de l'API",
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': "Versió personalitzada de l'API",
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Dataset',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': "Versió de l'API no vàlida",
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'Altra',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspectiva',
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    'La perspectiva "<code>previewDrafts</code>" ha estat renombrada a "<code>drafts</code>" i ara està obsoleta. Aquest canvi és efectiu per a totes les versions amb suport de perspectiva (>= v2021-03-25).',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Llegeix la documentació',
  /** Option for selecting default perspective */
  'settings.perspectives.default': "Cap perspectiva (predeterminada de l'API)",
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Les Perspectives permeten que la teva consulta s\'executi contra diferents "vistes" del contingut del teu dataset',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    'La perspectiva predeterminada canviarà de "<code>raw</code>" a "<code>published</code>" en una propera versió de l\'API. Si us plau, consulta la documentació per a més detalls.',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': 'Versió fixada',
  /** Label for the scheduled drafts perspective */
  'settings.perspectives.scheduled-drafts': 'Esborranys programats',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspectives',
})
