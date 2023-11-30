import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
    /**
   * Context: "Vision" is a Sanity studio plugin which allows users to execute GROQ-queries
   * against their dataset and see the results in different ways. It is often used to explore
   * a dataset, debug queries and get a better understanding of the data.
   */

  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Nuevo',

  /** --- Settings --- */

  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Conjunto de datos',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'Versión de la API',

  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'Otra',

  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'Versión personalizada de la API',

  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'Versión de la API inválida',

  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspectiva',

  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspectivas',

  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Las perspectivas permiten que tu consulta se ejecute contra diferentes "vistas" del contenido en tu conjunto de datos',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Leer documentación',

  /** --- Query editor --- */

  /** Label for "Query" editor/input */
  'query.label': 'Consulta',

  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Línea',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Columna',

  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'URL de la consulta',

  /** --- Params editor --- */

  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Parámetros',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'Los parámetros no son un JSON válido',

  /** --- Results view/explorer --- */

  /** Label for "Result" explorer/view */
  'result.label': 'Resultado',

  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'Ejecución',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'Tiempo de principio a fin',

  /** "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored) */
  'result.timing-not-applicable': 'n/a',

  /** --- Actions -- */

  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Buscar',

  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Cancelar',

  /** Label for setting up a listener */
  'action.listen-execute': 'Escuchar',

  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Detener',

  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Copiar al portapapeles',
})
