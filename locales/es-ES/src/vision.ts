import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Copiar al portapapeles',
  /** Label for deleting a query */
  'action.delete': undefined, // 'Delete'
  /** Label for editing a query's title */
  'action.edit-title': undefined, // 'Edit title'
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Detener',
  /** Label for setting up a listener */
  'action.listen-execute': 'Escuchar',
  /** Label for query loading table */
  'action.load-queries': undefined, // 'Load queries'
  /** Label for loading a query */
  'action.load-query': undefined, // 'Load query'
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Cancelar',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Buscar',
  /** Label for saving a query */
  'action.save-query': undefined, // 'Save query'
  /** Label for updating a query */
  'action.update': undefined, // 'Update'

  /** Label for actions user can take */
  'label.actions': undefined, // 'Actions'
  /** Label for saved queries that have been edited */
  'label.edited': undefined, // 'Edited'
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Nuevo',
  /** Label for query type "personal" */
  'label.personal': undefined, // 'Personal'
  /** Label for savedAt date */
  'label.saved-at': undefined, // 'Saved at'
  /** Saved queries */
  'label.saved-queries': undefined, // 'Saved queries'
  /** Search queries */
  'label.search-queries': undefined, // 'Search queries'
  /** Share query */
  'label.share': undefined, // 'Share'
  /** Label for saved query type "team" */
  'label.team': undefined, // 'Team'

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'Los parámetros no son un JSON válido',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Parámetros',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Columna',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Línea',
  /** Label for "Query" editor/input */
  'query.label': 'Consulta',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'URL de la consulta',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'Tiempo de principio a fin',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'Ejecución',
  /** Label for "Result" explorer/view */
  'result.label': 'Resultado',
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable': 'El resultado no se puede codificar como CSV',
  /** Label for "Save result as" result action */
  'result.save-result-as-format': 'Guardar resultado como <SaveResultButtons/>',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'n/a',

  /** Query already saved error label */
  'save-query.already-saved': undefined, // 'Query already saved'
  /** Save error label */
  'save-query.error': undefined, // 'Error saving query'
  /** Save success label */
  'save-query.success': undefined, // 'Query saved'

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'Versión de la API',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'Versión personalizada de la API',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Dataset',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'Versión de la API inválida',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'Otra',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspectiva',
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    'La perspectiva "<code>previewDrafts</code>" ha sido renombrada a "<code>drafts</code>" y ahora está en desuso. Este cambio es efectivo para todas las versiones con soporte de perspectiva (>= v2021-03-25).',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Leer documentación',
  /** Option for selecting default perspective */
  'settings.perspectives.default': 'Sin perspectiva (predeterminado de la API)',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Las perspectivas permiten que tu consulta se ejecute contra diferentes "vistas" del contenido en tu dataset',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    'La perspectiva predeterminada cambiará de "<code>raw</code>" a "<code>published</code>" en una próxima versión de la API. Por favor, consulte la documentación para más detalles.',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': 'Lanzamiento fijado',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspectivas',
})
