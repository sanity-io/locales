import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Copiar al portapapeles',
  /** Label for deleting a query */
  'action.delete': 'Eliminar',
  /** Label for editing a query's title */
  'action.edit-title': 'Editar título',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Detener',
  /** Label for setting up a listener */
  'action.listen-execute': 'Escuchar',
  /** Label for query loading table */
  'action.load-queries': 'Cargar consultas',
  /** Label for loading a query */
  'action.load-query': 'Cargar consulta',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Cancelar',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Buscar',
  /** Label for saving a query */
  'action.save-personal-copy': 'Guardar copia personal',
  /** Label for saving a personal query */
  'action.save-personal-query': 'Guardar como personal',
  /** Label for saving a query */
  'action.save-query': 'Guardar consulta',
  /** Label for saving a shared query */
  'action.save-shared-query': 'Guardar como compartida',
  /** Label for unsharing a query */
  'action.unshare': 'Dejar de compartir',
  /** Label for updating a query */
  'action.update': 'Actualizar',

  /** Label for actions user can take */
  'label.actions': 'Acciones',
  /** Label for all saved queries */
  'label.all': 'Todas',
  /** Label for saved queries that have been edited */
  'label.edited': 'Editado',
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Nuevo',
  /** Label for query type "personal" */
  'label.personal': 'Personal',
  /** Label for savedAt date */
  'label.saved-at': 'Guardado en',
  /** Saved queries */
  'label.saved-queries': 'Consultas guardadas',
  /** Search queries */
  'label.search-queries': 'Buscar consultas',
  /** Share query */
  'label.share': 'Compartir',
  /** Label for query type "shared" */
  'label.shared': 'Compartida',
  /** Label for saved query type "team" */
  'label.team': 'Equipo',
  /** Label for untitled query fallback */
  'label.untitled-query': 'Sin título',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'Los parámetros no son un JSON válido',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Parámetros',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Columna',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Línea',
  /** Extra explanation when a 400 is returned for a release perspective on an old API version */
  'query.error.unsupported-release-perspective':
    'Esta versión de la API no admite perspectivas complejas. Usa {{apiVersion}} o una versión posterior.',
  /** Extra explanation when a 400 is returned for a variant on an incompatible API version */
  'query.error.unsupported-variant':
    'Esta versión de la API no admite variantes de contenido. Usa la versión experimental de la API ({{apiVersion}}).',
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
  'save-query.already-saved': 'Consulta ya guardada',
  /** Save error label */
  'save-query.error': 'Error al guardar la consulta',
  /** Save personal copy success label */
  'save-query.personal-copy-success': 'Copia personal guardada',
  /** Warning displayed before sharing a query */
  'save-query.share-warning':
    'Las consultas compartidas se almacenan como documentos en tu dataset y cuentan para tu cuota de documentos.',
  /** Save shared query success label */
  'save-query.shared-success': 'Consulta compartida guardada',
  /** Save success label */
  'save-query.success': 'Consulta guardada',
  /** Save unshared query success label */
  'save-query.unshared-success': 'Consulta movida a personal',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'Versión de la API',
  /** Tooltip shown when the API version selector is locked because a variant is selected */
  'settings.api-version-locked-for-variant':
    'Cuando se selecciona una variante, la versión de la API debe ser vX.',
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
  /** Label for the scheduled drafts perspective */
  'settings.perspectives.scheduled-drafts': 'Borradores programados',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspectivas',

  /** Tooltip line of every control that calls Sanity Agent Actions, which bills AI credits */
  'vision.agent-actions.credits': 'Usa un crédito de IA por solicitud',
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vision.ai-credits.balance': 'Quedan {{balance}} de {{quota}} créditos de IA este mes.',
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vision.ai-credits.deficit':
    'Se han usado {{used}} créditos de IA este mes, {{deficit}} más de los {{quota}} incluidos.',
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vision.ai-credits.limit.description':
    'Su organización ha usado {{used}} de sus {{quota}} créditos de IA este mes, por lo que las Acciones de Agente de Sanity están pausadas hasta el próximo mes o hasta que se aumente su límite de gasto.',
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vision.ai-credits.limit.description-unknown':
    'Su organización ha alcanzado su límite de gasto de créditos de IA, por lo que las Acciones de Agente de Sanity están pausadas hasta el próximo mes o hasta que se aumente el límite.',
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vision.ai-credits.limit.learn-more': 'Cómo funcionan los créditos de IA',
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vision.ai-credits.limit.manage': 'Gestionar créditos de IA',
  /** Title of the card shown where the organization is out of AI credits */
  'vision.ai-credits.limit.title': 'Sin créditos de IA',
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vision.ai-credits.usage': 'Uso de IA',
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vision.ai-credits.used': '{{used}} créditos de IA usados este mes.',
  /** Button in the request column's action bar naming the API version requests go out with */
  'vision.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vision.api-version.button-cdn': 'API CDN {{version}}',
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vision.api-version.button-invalid': 'Versión de API incompleta',
  /** Tooltip of the API version button */
  'vision.api-version.tooltip':
    'Las consultas se ejecutan contra la versión de API {{version}}. Seleccione para cambiarla en Opciones.',
  /** Tooltip of the API version button while queries go through the API CDN */
  'vision.api-version.tooltip-cdn':
    'Las consultas se ejecutan contra el API CDN con la versión de API {{version}}. Seleccione para cambiarla en Opciones.',
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vision.api-version.tooltip-cdn-blocked':
    'Las consultas se ejecutan contra la API con la versión {{version}}, no contra el API CDN: este no sirve la perspectiva {{perspective}}. Seleccione para cambiarla en Opciones.',
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vision.api-version.tooltip-invalid':
    'La versión de API en Opciones está incompleta, por lo que no se puede obtener nada hasta que esté completa.',
  /** Tooltip of the API version button while a selected variant forces the variants API version */
  'vision.api-version.tooltip-locked':
    'Las consultas se ejecutan contra la versión de API {{version}}, que la variante seleccionada necesita.',
  /** Label of the document after the change in the Delta panel */
  'vision.delta.after': 'Después',
  /** Label of the document before the change in the Delta panel */
  'vision.delta.before': 'Antes',
  /** What the Delta panel does */
  'vision.delta.description':
    'Ejecuta la consulta en modo delta, como lo hacen los webhooks, listeners y Funciones de Sanity impulsados por GROQ: before() y after() son un documento antes y después de un cambio, @ es el documento después de él, y delta::changedAny() los compara. Se ejecuta en el navegador con groq-js. Un lado vacío significa que no hay documento: el cambio lo crea o lo elimina.',
  /** Label of the document ID field in the Delta panel */
  'vision.delta.document-id': 'ID del documento',
  /** Shown when there is a query but no documents to compare */
  'vision.delta.empty':
    'Cargue el historial de un documento, o escriba los documentos en Antes y Después.',
  /** Shown when the query fails in delta mode */
  'vision.delta.failed': 'La consulta no se pudo ejecutar en modo delta: {{message}}',
  /** Shown when the After document is not valid JSON */
  'vision.delta.invalid-after': 'Después no es un JSON válido: {{message}}',
  /** Shown when the Before document is not valid JSON */
  'vision.delta.invalid-before': 'Before no es un JSON válido: {{message}}',
  /** Button loading the document's revisions from the History API */
  'vision.delta.load': 'Cargar historial',
  /** Shown when the history could not be loaded */
  'vision.delta.load-failed': 'No se pudo cargar el historial: {{message}}',
  /** A delta filter that is true for the change */
  'vision.delta.matches':
    'Coincide: un webhook o función con este filtro se ejecuta para este cambio.',
  /** A delta filter that is false for the change */
  'vision.delta.no-match':
    'No coincide: un webhook o función con este filtro no se ejecuta para este cambio.',
  /** Shown while the query or its params cannot be sent */
  'vision.delta.no-request': 'Corrige la consulta y sus parámetros para ejecutarla en modo delta.',
  /** Heading of the delta result */
  'vision.delta.result': 'Resultado',
  /** The After choice for a change that deletes the document */
  'vision.delta.revision.none-after': 'Nada: el cambio elimina el documento',
  /** The Before choice for a change that creates the document */
  'vision.delta.revision.none-before': 'Nada: el cambio crea el documento',
  /** A revision in the Before and After lists */
  'vision.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vision.drawer.close': 'Cerrar panel',
  /** Explanation at the top of the Explain panel */
  'vision.explain.description':
    'El plan de consulta es la forma en que Content Lake ejecuta la consulta: qué lee, filtra y ordena durante la lectura, y qué queda para pasos posteriores. Explícame esto hace que las Acciones de Agente de Sanity describan la consulta y su plan en palabras simples, lo cual usa un crédito de IA.',
  /** Shown in the Explain panel while there is no valid query to explain */
  'vision.explain.empty': 'Escribe una consulta para explicarla.',
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vision.explain.explain': 'Explícame esto',
  /** Shown when the explanation could not be written */
  'vision.explain.failed': 'No se pudo explicar la consulta: {{message}}',
  /** A count the index computes without reading the documents */
  'vision.explain.insight.aggregate': 'Contado en el índice, sin leer los documentos.',
  /** A subquery the plan runs once for all documents */
  'vision.explain.insight.batched-subquery':
    'La subconsulta se ejecuta una sola vez para todos los documentos, en una sola búsqueda por lotes, no una vez por documento.',
  /** Part of the filter runs in memory; the expression follows */
  'vision.explain.insight.filter-in-memory':
    'Parte del filtro se ejecuta en memoria, después de la lectura: primero se lee cada documento que el índice deja pasar, lo cual se vuelve lento en conjuntos de datos grandes. Las uniones (->) y las funciones en un filtro no pueden usar el índice.',
  /** The index sorts and limits while reading */
  'vision.explain.insight.index-sort-limit':
    'El índice ordena y limita los documentos mientras los lee.',
  /** The plan slices in memory */
  'vision.explain.insight.slice-in-memory':
    'El corte se realiza en memoria después de la lectura, no como un límite durante la lectura.',
  /** The plan sorts in memory */
  'vision.explain.insight.sort-in-memory':
    'La ordenación ocurre en memoria, después de leer cada coincidencia. Ordena por atributos que el índice pueda usar para ordenar.',
  /** Link under the plan insights to the guide on fast queries */
  'vision.explain.insights.guide': 'GROQ de alto rendimiento',
  /** Heading of the plan insights in the Explain panel */
  'vision.explain.insights.title': 'Lo más destacado',
  /** Button in the Explain panel fetching the query plan */
  'vision.explain.plan': 'Mostrar el plan de consulta',
  /** Shown when the query plan could not be fetched */
  'vision.explain.plan-failed': 'No se pudo obtener el plan de consulta: {{message}}',
  /** Heading of the query plan in the Explain panel */
  'vision.explain.plan-title': 'Plan de consulta',
  /** Toast shown after a code snippet was copied */
  'vision.export-query.copied': 'Fragmento copiado al portapapeles',
  /** Label for the button that copies a code snippet */
  'vision.export-query.copy': 'Copiar fragmento',
  /** Explanation at the top of the export query dialog */
  'vision.export-query.description':
    'Ejecuta esta consulta fuera del studio con uno de estos fragmentos.',
  /** Note under the curl snippet when the query is sent as a request body rather than in the URL */
  'vision.export-query.post-body-note':
    'La consulta y los parámetros suman {{size}} caracteres como parámetros de búsqueda; a partir de {{limit}}, @sanity/client los envía como un cuerpo JSON en lugar de en la URL, por lo que el fragmento hace lo mismo.',
  /** Title of the dialog that exports the query as code snippets */
  'vision.export-query.title': 'Exportar consulta',
  /** Note about authentication in the export query dialog */
  'vision.export-query.token-note':
    'Los datasets privados necesitan un token de API. Los datasets públicos pueden omitir el encabezado Authorization.',
  /** Toast shown after the generated code was copied */
  'vision.export-types.copied': 'Código copiado al portapapeles',
  /** Label for the button that copies the generated code */
  'vision.export-types.copy': 'Copiar código',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vision.export-types.empty':
    'Primero obtén la consulta para que haya un resultado del cual derivar tipos.',
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vision.export-types.schema-error': 'La evaluación del esquema falló: {{message}}',
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vision.export-types.source.result':
    'Inferido a partir del resultado obtenido, ya que la consulta no pudo evaluarse contra el esquema del workspace.',
  /** Note shown when the types were derived from the workspace schema */
  'vision.export-types.source.schema':
    'Inferido a partir del esquema del workspace, de la misma manera que lo hace sanity typegen.',
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vision.export-types.stale-result':
    'El resultado mostrado se obtuvo para una consulta o parámetros diferentes. Primero obtén la consulta actual para que haya un resultado del cual derivar tipos.',
  /** Title of the dialog exporting TypeScript types for the result */
  'vision.export-types.title-typescript': 'Exportar TypeScript',
  /** Title of the dialog exporting a Zod schema for the result */
  'vision.export-types.title-zod': 'Exportar Zod',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vision.functions.add': 'Agregar a la consulta',
  /** Shown on a library function the query declares the same way */
  'vision.functions.declared': 'En esta consulta',
  /** Lint action on a call of a library function the query does not declare */
  'vision.functions.editor.add-from-library': 'Declararla',
  /** Note in a function's hover documentation: the API version it needs */
  'vision.functions.editor.api-version': 'Necesita la versión de API {{version}} o posterior',
  /** Detail of a completion for a custom function the query declares */
  'vision.functions.editor.completion-declared': 'en esta consulta',
  /** Detail of a completion for a library function, which declares it too */
  'vision.functions.editor.completion-library': 'de tu biblioteca',
  /** Note in the hover documentation of a custom function the query declares */
  'vision.functions.editor.declared-on': 'Función personalizada, declarada en la línea {{line}}',
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vision.functions.editor.delta-only':
    'Solo funciona en modo delta, donde los webhooks y las Sanity Functions ejecutan sus filtros',
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vision.functions.editor.extract': 'Extraer a función',
  /** Note in the hover documentation of a library function the query does not declare */
  'vision.functions.editor.in-library':
    'En tu biblioteca de funciones, no declarada en esta consulta',
  /** Link at the end of a built-in function's hover documentation */
  'vision.functions.editor.reference': 'Referencia de funciones GROQ',
  /** Explanation under the library heading in the Functions panel */
  'vision.functions.library.description':
    'Se conserva en este navegador para cada dataset del proyecto. Las funciones se ofrecen en las sugerencias de autocompletado, y el lint ofrece declarar una que la consulta llama.',
  /** Shown in the Functions panel while the library is empty */
  'vision.functions.library.empty':
    'Guarda una función que la consulta declara para usarla en otras consultas.',
  /** Heading of the functions library in the Functions panel */
  'vision.functions.library.title': 'Biblioteca',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vision.functions.query.empty':
    'Declara funciones personalizadas al principio de la consulta, o coloca el cursor en una proyección, como author->{name}, y presiona el botón de extraer sobre el editor ({{shortcut}}).',
  /** Heading of the functions the query declares in the Functions panel */
  'vision.functions.query.title': 'En esta consulta',
  /** Removes a function from the library */
  'vision.functions.remove': 'Quitar de la biblioteca',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vision.functions.replace': 'Reemplazar en la consulta',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vision.functions.reveal': 'Mostrar {{name}} en el editor',
  /** Button of a function the query declares that is not in the library yet */
  'vision.functions.save': 'Guardar en la biblioteca',
  /** Shown on a function the query declares the way the library has it */
  'vision.functions.saved': 'Guardado',
  /** Button of a function the query declares differently from the library's version */
  'vision.functions.update': 'Actualizar biblioteca',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vision.generate.button': 'Generar consulta',
  /** Closes the generate query bar */
  'vision.generate.close': 'Cerrar',
  /** Explanation under the generate query field */
  'vision.generate.description':
    'Las Acciones del Agente de Sanity escriben el GROQ a partir de tu descripción y los tipos de documento, y el Content Lake verifica cada intento; cada intento usa un crédito de IA. Esto reemplaza la consulta de esta pestaña y se ejecuta; deshacer en el editor restaura la consulta anterior.',
  /** Shown when no query could be generated, above the reason */
  'vision.generate.failed': 'No se pudo generar la consulta',
  /** Accessible label of the description field in the generate query bar */
  'vision.generate.label': '¿Qué debería obtener la consulta?',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vision.generate.open-anyway': 'Abrir el último intento',
  /** Placeholder of the description field in the generate query bar */
  'vision.generate.placeholder':
    'Los 10 autores más recientes, ordenados por apellido y luego por nombre',
  /** Shown while the first attempt at a query is written */
  'vision.generate.progress': 'Escribiendo la consulta…',
  /** Shown while a rejected attempt is retried */
  'vision.generate.progress-retry': 'Corrigiendo la consulta (intento {{attempt}} de {{max}})…',
  /** Button generating the query */
  'vision.generate.submit': 'Generar',
  /** Badge on a history entry the API CDN answered */
  'vision.history.cdn': 'API CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vision.history.cdn-cache-hit': 'Acierto de caché de CDN',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vision.history.changed': 'Modificado',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vision.history.changes': 'Cambios',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vision.history.changes-failed': 'No se pudieron mostrar los cambios.',
  /** Button retrying to show the changes of a history entry */
  'vision.history.changes-retry': 'Reintentar',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vision.history.compared-with': 'Comparado con la solicitud de las {{time}}',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vision.history.diff.params': 'Parámetros',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vision.history.diff.query': 'Consulta',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vision.history.diff.query-formatting-only': 'Solo cambió el formato',
  /** Label of the diff of the query result in a history entry's changes */
  'vision.history.diff.result': 'Resultado',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vision.history.diff.url': 'URL de la solicitud',
  /** Empty state of the history panel */
  'vision.history.empty': 'Nada obtenido todavía',
  /** Status label for a failed fetch in the history */
  'vision.history.failed': 'Fallido',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vision.history.hide-hidden': 'Ocultarlos',
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vision.history.hiding': 'Ocultando {{fields}}',
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vision.history.only-hidden-changed': 'Solo cambiaron campos ocultos',
  /** History reason: a tab opened with a generated query fetched it */
  'vision.history.reason.generated': 'Consulta generada',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vision.history.reason.link': 'Enlace abierto',
  /** History reason: a live event matched the query's sync tags */
  'vision.history.reason.live': 'Actualización en vivo',
  /** History reason: the live connection asked every client to refetch */
  'vision.history.reason.live-restart': 'Conexión en vivo reiniciada',
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vision.history.reason.live-start': 'Obtención en vivo iniciada',
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vision.history.reason.load': 'Consulta cargada',
  /** History reason: the fetch button was pressed */
  'vision.history.reason.manual': 'Botón de obtención',
  /** History reason: mutations were applied from the Mutate panel */
  'vision.history.reason.mutation': 'Mutaciones aplicadas',
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vision.history.reason.options': 'Opciones modificadas',
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vision.history.reason.paste': 'URL pegada',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vision.history.reason.resume': 'Reobtención automática reanudada',
  /** History reason: the keyboard shortcut was used */
  'vision.history.reason.shortcut': 'Atajo de teclado',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vision.history.same-result': 'Mismo resultado',
  /** Button showing the hidden fields in a history entry's changes */
  'vision.history.show-hidden': 'Mostrarlos',
  /** Next to a history entry's changes while the hidden fields are shown */
  'vision.history.showing-hidden': 'Mostrando {{fields}}, ocultos de forma predeterminada',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vision.history.too-large': 'Demasiado grande para comparar',
  /** A history entry whose result is the same as the previous result */
  'vision.history.unchanged': 'Sin cambios',
  /** Shown in the Lint panel while the query has no lint findings */
  'vision.lint.empty':
    'No hay hallazgos de lint. Los problemas que el linter de GROQ detecta en la consulta se enumeran aquí mientras escribes; elige uno para seleccionarlo en el editor.',
  /** Where a lint finding sits in the query, shown under its message */
  'vision.lint.position': 'Línea {{line}}, columna {{column}}',
  /** Severity badge of a lint finding */
  'vision.lint.severity.error': 'Error',
  /** Severity badge of a lint finding */
  'vision.lint.severity.hint': 'Sugerencia',
  /** Severity badge of a lint finding */
  'vision.lint.severity.info': 'Información',
  /** Severity badge of a lint finding */
  'vision.lint.severity.warning': 'Advertencia',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vision.lint.use-suggestion': 'Usar {{suggestion}}',
  /** Badge shown while a tab refetches automatically */
  'vision.live.active': 'En vivo',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vision.live.button': 'Obtención en vivo',
  /** Tooltip of the Live button while automatic refetching is off */
  'vision.live.button.start':
    'Obtener, y luego volver a obtener cada vez que cambien los documentos en el resultado',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vision.live.button.stop':
    'Detener la obtención cuando cambien los documentos en el resultado. La obtención aún se realiza bajo demanda, para resultados que ningún cambio de documento afecta, como now()',
  /** Error shown when the live connection breaks */
  'vision.live.error': 'Actualizaciones en vivo desconectadas: {{message}}',
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vision.live.stop': 'Detener en vivo',
  /** Button in the Mutate panel adding a mutation to the list */
  'vision.mutate.add': 'Agregar mutación',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vision.mutate.add.create': 'Crear un documento',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vision.mutate.add.delete': 'Eliminar un documento',
  /** Adds a mutation deleting the documents of the shown result */
  'vision.mutate.add.delete-result': 'Eliminar los documentos del resultado',
  /** Adds a mutation patching a document, its ID to fill in */
  'vision.mutate.add.patch': 'Modificar un documento',
  /** Adds a mutation patching the documents of the shown result */
  'vision.mutate.add.patch-result': 'Aplicar un patch a los documentos en el resultado',
  /** Button applying the mutations a dry run showed */
  'vision.mutate.apply': 'Aplicar a {{dataset}}',
  /** Heading of the error shown when applying the mutations failed */
  'vision.mutate.apply-failed': 'Las mutaciones no se aplicaron',
  /** Next to Apply while the mutations as they are have had no dry run */
  'vision.mutate.apply-needs-preview':
    'Aplicar envía lo que mostró una ejecución de prueba: ejecuta una primero.',
  /** Option giving array items without a _key one */
  'vision.mutate.auto-keys': 'Agregar una _key a los elementos del array que no tengan una',
  /** Under the option giving array items a _key */
  'vision.mutate.auto-keys.description':
    'El studio necesita una en cada elemento del array para poder editarlo.',
  /** Button showing a document's changes in the dry run */
  'vision.mutate.changes': 'Cambios',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vision.mutate.changes-failed': 'No se pudieron mostrar los cambios.',
  /** Button retrying to show a document's changes */
  'vision.mutate.changes-retry': 'Reintentar',
  /** What the Mutate panel does */
  'vision.mutate.description':
    'Escribe mutaciones tal como las recibe la Mutations API, en una lista: create, createOrReplace, createIfNotExists, delete y patch, por ID o por una consulta GROQ. Una ejecución de prueba muestra qué harían a cada documento sin cambiar nada; Aplicar luego las escribe en el dataset en una sola transacción, con tu cuenta.',
  /** What the API says went wrong with one of the mutations */
  'vision.mutate.failure-item': 'Mutación {{index}}: {{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vision.mutate.generate.button': 'Generar mutaciones',
  /** Explanation under the generate mutations field */
  'vision.mutate.generate.description':
    'Las Sanity Agent Actions escriben las mutaciones a partir de tu descripción, los documentos en el resultado y sus tipos, y una ejecución de prueba verifica cada intento; cada intento usa un crédito de IA. Reemplazan las mutaciones aquí, donde deshacer las recupera; no se escribe nada hasta que las apliques.',
  /** Shown when no mutations could be generated, above the reason */
  'vision.mutate.generate.failed': 'No se pudieron generar las mutaciones',
  /** Accessible label of the description field in the generate mutations bar */
  'vision.mutate.generate.label': '¿Qué deben hacer las mutaciones?',
  /** Placeholder of the description field in the generate mutations bar */
  'vision.mutate.generate.placeholder':
    'Cambiar el título de los documentos en el resultado a foobar',
  /** Shown while the first attempt at the mutations is written */
  'vision.mutate.generate.progress': 'Escribiendo las mutaciones…',
  /** Shown while an attempt the dry run turned down is retried */
  'vision.mutate.generate.progress-retry':
    'Corrigiendo las mutaciones (intento {{attempt}} de {{max}})…',
  /** Under the dry run: the fields the diffs leave out */
  'vision.mutate.hiding': 'Los cambios dejan fuera {{fields}}, igual que History.',
  /** Shown when the mutations are not valid JSON */
  'vision.mutate.invalid-json': 'Las mutaciones no son un JSON válido: {{message}}',
  /** Shown when a mutation does not name exactly one thing to do */
  'vision.mutate.invalid-mutation':
    'La mutación {{index}} necesita exactamente una de: create, createOrReplace, createIfNotExists, delete o patch.',
  /** Label of the mutations editor */
  'vision.mutate.mutations': 'Mutaciones',
  /** The dry run touched no documents */
  'vision.mutate.no-documents': 'Las mutaciones no afectan ningún documento.',
  /** Shown when the JSON is not a list of mutations */
  'vision.mutate.not-a-list':
    'Escribe una lista de mutaciones, una sola mutación, o un cuerpo de solicitud con una lista de mutaciones.',
  /** A document the mutations create */
  'vision.mutate.operation.create': 'Crear',
  /** A document the mutations delete */
  'vision.mutate.operation.delete': 'Eliminar',
  /** A document the mutations touch without changing its content */
  'vision.mutate.operation.none': 'Sin cambios',
  /** A document the mutations change */
  'vision.mutate.operation.update': 'Actualizar',
  /** Button running the mutations as a dry run */
  'vision.mutate.preview': 'Simulación',
  /** Heading of the error shown when the dry run failed */
  'vision.mutate.preview-failed': 'La simulación falló',
  /** Heading of the dry run's outcome */
  'vision.mutate.preview-heading': 'Simulación',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vision.mutate.stale':
    'Las mutaciones, el dataset o las opciones cambiaron después de esta simulación. Vuelve a ejecutarla para aplicarlos.',
  /** How many documents the dry run changes and leaves as they are */
  'vision.mutate.summary': 'Cambiados: {{changed}} · Sin cambios: {{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vision.network.cache': 'Caché',
  /** The API CDN answered from its cache */
  'vision.network.cache.hit': 'Acierto',
  /** Under the details of a CDN cache hit */
  'vision.network.cache.hit-explained':
    'La CDN respondió con una respuesta que tenía almacenada en caché, desde una ubicación cercana a ti; la consulta no llegó a la API.',
  /** The API CDN answered with a response this session had not seen */
  'vision.network.cache.miss': 'Fallo, hasta donde esta sesión puede determinar',
  /** The API answered, which caches nothing */
  'vision.network.cache.none':
    'Ninguno, la API responde a cada solicitud con contenido actualizado',
  /** Shown in the Network panel while there is no response */
  'vision.network.empty':
    'Ejecuta la consulta para ver qué endpoint la respondió, si fue desde una caché y dónde se ejecutó.',
  /** In the Network panel: the endpoint that answered */
  'vision.network.endpoint': 'Respondido por',
  /** The live API answered */
  'vision.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vision.network.endpoint.cdn': 'API CDN',
  /** In the Network panel: the HTTP method the query was sent with */
  'vision.network.method': 'Método',
  /** The query and its params went in the URL */
  'vision.network.method.get': 'GET, con la consulta y los parámetros en la URL',
  /** The query and its params went in the request body */
  'vision.network.method.post': 'POST, con la consulta y los parámetros como cuerpo JSON',
  /** Under the method of a POST request: why the query was not sent in the URL */
  'vision.network.method.post-explained':
    'La consulta y los parámetros suman {{size}} caracteres como parámetros de búsqueda; a partir de {{limit}}, @sanity/client los envía como un cuerpo JSON, ya que la API limita la longitud de una URL. Las opciones permanecen en la URL.',
  /** In the Network panel: the region the query ran in */
  'vision.network.region': 'La consulta se ejecutó en',
  /** The response did not say where the query ran */
  'vision.network.region.unknown': 'No informado',
  /** In the Network panel: the round trip and the time on the server */
  'vision.network.timing': 'Tiempo',
  /** The round trip and the server's time for the query, in milliseconds */
  'vision.network.timing.value': '{{e2e}}ms de ida y vuelta, {{server}}ms en el servidor',
  /** In the Network panel: the trace of the request, for Sanity support */
  'vision.network.trace': 'ID de rastreo',
  /** Hint in the Network panel while queries go to the API */
  'vision.network.use-cdn-hint':
    'Active Usar la CDN de la API en Opciones para enviar las consultas a través de la CDN.',
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vision.network.you': 'Tú',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vision.options.dataset.follows-workspace': 'Sigue al espacio de trabajo',
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vision.options.dataset.pin': 'Fijar un dataset',
  /** Hint under the dataset field while a dataset is pinned */
  'vision.options.dataset.pinned': 'Fijado; el espacio de trabajo puede usar otro dataset',
  /** Button that makes the tab follow the workspace's dataset again */
  'vision.options.dataset.use-workspace': 'Usar el dataset del espacio de trabajo',
  /** Label for the "Include content source map" switch */
  'vision.options.include-source-map': 'Incluir mapa de origen de contenido',
  /** Description for the "Include content source map" switch */
  'vision.options.include-source-map.description':
    'Añade resultSourceMap a la respuesta, mostrado en la pestaña Mapa de origen de contenido.',
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vision.options.perspective.global': 'Global ({{name}})',
  /** Label of the switch that sends queries to the API CDN */
  'vision.options.use-cdn': 'Usar la CDN de la API',
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vision.options.use-cdn.anonymous':
    'Este estudio te inicia sesión con una cookie, que la CDN de la API nunca recibe: responde como lo haría para un visitante anónimo, con lo que muestra un dataset público.',
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vision.options.use-cdn.blocked':
    'La CDN de la API no sirve borradores ni releases, por lo que las consultas con la perspectiva {{perspective}} van a la API. Con published o raw usan la CDN.',
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vision.options.use-cdn.blocked.title': 'Las consultas van a la API, no a la CDN',
  /** Description of the API CDN switch */
  'vision.options.use-cdn.description':
    'Envía la consulta a la CDN de la API, como useCdn: true en @sanity/client, con las perspectivas published y raw: los borradores y releases siempre van a la API. Sus respuestas se almacenan en caché hasta por un minuto; el panel de Red muestra cuándo una respuesta provino de la caché.',
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vision.options.use-cdn.use-published': 'Usar la perspectiva published',
  /** Label of the variant field */
  'vision.options.variant-label': 'Variante',
  /** Variant option sending the navbar's variant, named */
  'vision.options.variant.global': 'Global ({{name}})',
  /** Variant option sending the navbar's variant while none is selected there */
  'vision.options.variant.global-none': 'Global (ninguna seleccionada)',
  /** Variant option sending no variant */
  'vision.options.variant.none': 'Ninguna',
  /** Accessible label for collapsing a bottom panel */
  'vision.panel.collapse': 'Contraer panel',
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vision.panel.delta': 'Delta',
  /** Accessible label for expanding a bottom panel */
  'vision.panel.expand': 'Expandir panel',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vision.panel.explain': 'Explicar',
  /** Label of the Functions tab in the response panel */
  'vision.panel.functions': 'Funciones',
  /** Label of the "History" tab in the response panel */
  'vision.panel.history': 'Historial',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vision.panel.lint': 'Lint',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vision.panel.mutate': 'Mutar',
  /** Label of the Network tab in the response panel */
  'vision.panel.network': 'Red',
  /** Label of the "Options" panel in the request column */
  'vision.panel.options': 'Opciones',
  /** Label of the "Response" tab in the response panel */
  'vision.panel.response': 'Respuesta',
  /** Label of the "Content Source Map" tab in the response panel */
  'vision.panel.source-map': 'Mapa de origen de contenido',
  /** Button adding an item to a list param in the params form */
  'vision.params-form.add-item': 'Agregar elemento',
  /** Placeholder of a params form field that takes any JSON value */
  'vision.params-form.any-placeholder': 'Cualquier valor JSON; otro texto se envía como cadena',
  /** Shown in the params form when the query uses no params */
  'vision.params-form.empty':
    'La consulta no usa parámetros. Cada $nombre en ella obtiene un campo aquí.',
  /** Shown in the params form while the params JSON cannot be parsed */
  'vision.params-form.invalid-json':
    'Los parámetros no son un JSON válido. Corríjalos en la vista JSON para editarlos aquí.',
  /** A boolean param's value is not true or false; it is sent anyway */
  'vision.params-form.invalid.boolean': 'No es verdadero ni falso; se envía como {{value}}',
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vision.params-form.invalid.document-type':
    'No es un tipo de documento en este espacio de trabajo; se envía de todos modos',
  /** A whole number param (a slice bound) holds a fraction */
  'vision.params-form.invalid.integer': 'No es un número entero, que las porciones necesitan',
  /** A list param's value is not a list; it is sent anyway */
  'vision.params-form.invalid.list': 'No es una lista; se envía como {{value}}',
  /** A number param's value is not a number; it is sent anyway */
  'vision.params-form.invalid.number': 'No es un número; se envía como texto',
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vision.params-form.invalid.option':
    'No es uno de los valores conocidos; se envía de todos modos',
  /** A text param's value is not text; it is sent anyway */
  'vision.params-form.invalid.string': 'No es texto; se envía como {{value}}',
  /** Accessible label of an item input of a list param in the params form */
  'vision.params-form.item-label': '${{name}}, elemento {{index}}',
  /** Placeholder of an item input of a list param in the params form */
  'vision.params-form.item-placeholder': 'Elemento',
  /** Under a params form field whose param has no value */
  'vision.params-form.missing': 'No establecido: la consulta falla hasta que tenga un valor',
  /** Shown in the params form when the workspace schema could not be read */
  'vision.params-form.no-schema':
    'Los tipos provienen únicamente de la consulta: no se pudo leer el esquema del espacio de trabajo.',
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vision.params-form.not-set': 'No establecido',
  /** Button setting a date and time param to the current time */
  'vision.params-form.now': 'Ahora',
  /** Button removing a param the query does not use from the params */
  'vision.params-form.remove': 'Eliminar',
  /** Accessible label of the button removing an item from a list param */
  'vision.params-form.remove-item': 'Eliminar elemento',
  /** Shown in the params form when the query does not parse */
  'vision.params-form.syntax-error':
    'La consulta no se puede analizar, por lo que sus parámetros se muestran sin tipos.',
  /** Type hint of a params form field: any JSON value */
  'vision.params-form.type.any': 'cualquier valor JSON',
  /** Type hint of a params form field: true or false */
  'vision.params-form.type.boolean': 'verdadero o falso',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vision.params-form.type.datetime': 'fecha y hora (ISO 8601)',
  /** Type hint of a params form field: a document ID */
  'vision.params-form.type.document-id': 'ID de documento',
  /** Type hint of a params form field: one of the workspace's document types */
  'vision.params-form.type.document-type': 'tipo de documento',
  /** Type hint of a params form field: a whole number */
  'vision.params-form.type.integer': 'número entero',
  /** Type hint of a params form field: a list of values */
  'vision.params-form.type.list': 'lista, cada {{type}}',
  /** Type hint of a params form field: a number */
  'vision.params-form.type.number': 'número',
  /** Type hint of a params form field: text */
  'vision.params-form.type.string': 'texto',
  /** Heading of the params the query does not use, listed in the params form */
  'vision.params-form.unused': 'No usado por la consulta',
  /** Before the expressions that use a param, in the params form */
  'vision.params-form.used-in': 'Usado en',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vision.params.fit-height': 'Ajustado al contenido, {{height}} píxeles',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vision.params.resize':
    'Cambiar tamaño de los parámetros: arrastra o usa las teclas de flecha; haz doble clic o presiona Enter para ajustar al contenido nuevamente',
  /** Tab showing the params as a form inferred from the query */
  'vision.params.view.form': 'Formulario',
  /** Tab showing the params as JSON */
  'vision.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vision.params.view.label': 'Editar parámetros como',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vision.paste.parsed': 'Consulta cargada desde la URL pegada',
  /** Toast shown after a curl command for a query was pasted and loaded into the tab */
  'vision.paste.parsed-curl': 'Consulta cargada desde el comando cURL pegado',
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vision.paste.unavailable-variant':
    'La URL pegada usaba la variante "{{variant}}"; selecciónala en la barra de navegación para ejecutar la consulta con ella.',
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vision.paste.unknown-dataset':
    'El dataset "{{dataset}}" en la URL pegada no está disponible aquí, se mantiene el actual.',
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vision.paste.unsupported-perspective':
    'La perspective en la URL pegada no es compatible aquí, se mantiene la actual.',
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vision.paste.variants-disabled':
    'La URL pegada usaba la variante "{{variant}}"; este workspace tiene las variantes desactivadas, por lo que la consulta se ejecuta sin ella.',
  /** Accessible label for the query actions menu */
  'vision.query.actions': 'Acciones de consulta',
  /** Tooltip when automatic refetching is not available for the API version */
  'vision.query.auto-refetch.unsupported':
    'La recarga automática necesita la versión de la API v2021-03-25 o posterior.',
  /** Toast shown after the query was copied */
  'vision.query.copied': 'Consulta copiada al portapapeles',
  /** Menu item copying the query text */
  'vision.query.copy': 'Copiar consulta',
  /** Menu item opening the export query dialog */
  'vision.query.export': 'Exportar consulta…',
  /** Menu item reformatting the query */
  'vision.query.prettify': 'Dar formato a la consulta',
  /** Toast shown when the query could not be reformatted */
  'vision.query.prettify.failed': 'No se pudo dar formato a la consulta',
  /** Menu item saving the query to the personal saved queries */
  'vision.query.save': 'Guardar consulta',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vision.query.stop': 'Detener',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vision.query.stop.description': 'Detener la recuperación',
  /** Explanation in the settings section about the redesigned experience */
  'vision.redesign.settings.description':
    'Estás usando la herramienta Vision rediseñada. Volver a la versión anterior mantiene tus pestañas y configuraciones en este navegador para la próxima vez que lo intentes.',
  /** Title of the settings section about the redesigned experience */
  'vision.redesign.settings.title': 'Vision rediseñado (beta)',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vision.redesign.switch-to-classic': 'Cambiar a Vision clásico',
  /** Toast button that switches to the redesigned tool */
  'vision.redesign.toast.accept': 'Probarlo ahora',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vision.redesign.toast.description':
    'Pestañas de consulta, recarga en vivo, detalles de respuesta y exportaciones. Puedes volver a la versión anterior en cualquier momento.',
  /** Toast button that hides the invitation */
  'vision.redesign.toast.dismiss': 'Ahora no',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vision.redesign.toast.title': 'Prueba el Vision rediseñado',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vision.redesign.try': 'Probar el rediseño',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vision.redesign.try.description':
    'Cambia al Vision rediseñado, en beta. Puedes volver a la versión anterior en cualquier momento desde su barra lateral.',
  /** Empty state of the response panel before anything was fetched */
  'vision.response.empty': 'Aún no se ha recuperado nada',
  /** Label for the payload size in the response tab */
  'vision.response.payload-size': 'Tamaño del payload',
  /** Label for the sync tags in the response tab */
  'vision.response.sync-tags': 'Etiquetas de sincronización',
  /** Shown when the response carried no sync tags */
  'vision.response.sync-tags.none': 'No hay etiquetas de sincronización en la respuesta',
  /** Under the query URL when the request went out as a POST body rather than that URL */
  'vision.response.url.sent-as-post':
    'Enviado como cuerpo POST: la consulta y los parámetros son demasiado largos para una URL, por lo que @sanity/client los envió como JSON. Pegar esta URL en Vision igualmente carga la consulta.',
  /** Accessible label for the result actions menu */
  'vision.result.actions': 'Acciones del resultado',
  /** Toast shown after the result was copied */
  'vision.result.copied': 'Resultado copiado al portapapeles',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vision.result.copied-value': '{{path}} copiado',
  /** Menu item and button copying the result as JSON */
  'vision.result.copy': 'Copiar resultado',
  /** Button next to each property in the result tree, copying its value */
  'vision.result.copy-value': 'Copiar valor',
  /** Empty state of the result view */
  'vision.result.empty': 'Ejecuta la consulta para ver su resultado aquí',
  /** Button exporting the result as CSV */
  'vision.result.export-csv': 'Exportar CSV',
  /** Button exporting the result as JSON */
  'vision.result.export-json': 'Exportar JSON',
  /** Menu item opening the TypeScript export dialog */
  'vision.result.export-typescript': 'Exportar TypeScript…',
  /** Menu item opening the Zod export dialog */
  'vision.result.export-zod': 'Exportar Zod…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vision.result.graph.collapse': 'Ocultar lo que contiene',
  /** Button fitting the whole graph in view */
  'vision.result.graph.fit': 'Ajustar a la vista',
  /** Accessible label of the graph, saying how to move around in it */
  'vision.result.graph.label':
    'Gráfico de resultados: arrastra para mover, desplázate para hacer zoom; con el foco activo, las teclas de flecha mueven, + y - hacen zoom, 0 ajusta',
  /** Ends the note on a graph that leaves part of this result out */
  'vision.result.graph.left-out-hint': 'Las vistas de árbol y JSON lo muestran todo.',
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vision.result.graph.node-limit': 'Solo se dibujan los primeros {{nodes}} objetos y arreglos.',
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vision.result.graph.partial': 'Solo se listan las primeras {{rows}} entradas para {{nodes}}.',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vision.result.graph.partial.node': '{{name}} ({{entries}} entradas)',
  /** Title of the graph node of the result itself */
  'vision.result.graph.root': 'resultado',
  /** Button zooming into the graph */
  'vision.result.graph.zoom-in': 'Acercar',
  /** Button zooming out of the graph */
  'vision.result.graph.zoom-out': 'Alejar',
  /** Tab showing the result as a graph of its objects and arrays */
  'vision.result.view.graph': 'Gráfico',
  /** Tab showing the result as indented JSON text, to select and copy from */
  'vision.result.view.json': 'JSON',
  /** Accessible label of the tabs that switch how the result shows */
  'vision.result.view.label': 'Vista del resultado',
  /** Tab showing the result as a tree to browse */
  'vision.result.view.tree': 'Árbol',
  /** Empty state of the saved queries panel */
  'vision.saved.empty': 'Aún no hay consultas guardadas. Guarda la consulta actual con el botón +.',
  /** Empty state of a query list when the search matches nothing */
  'vision.saved.empty-search': 'Ninguna consulta coincide con tu búsqueda',
  /** Menu item loading a saved query into the active tab */
  'vision.saved.load-in-current-tab': 'Cargar en la pestaña actual',
  /** Menu item opening a saved query in a new tab */
  'vision.saved.open-in-new-tab': 'Abrir en una nueva pestaña',
  /** Menu item renaming a saved query */
  'vision.saved.rename': 'Cambiar nombre',
  /** Accessible label for the button saving the current query */
  'vision.saved.save-current': 'Guardar consulta actual',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vision.saved.unavailable-variant':
    'Esta consulta guardada usaba la variante "{{variant}}"; selecciónala en la barra de navegación para ejecutar la consulta con ella.',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vision.saved.unknown-dataset':
    'El dataset "{{dataset}}" de esta consulta guardada no está disponible aquí, se mantiene el actual.',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vision.saved.variants-disabled':
    'Esta consulta guardada usaba la variante "{{variant}}"; este espacio de trabajo tiene las variantes desactivadas, por lo que la consulta se ejecuta sin ella.',
  /** Button in the settings dialog that clears the stored state */
  'vision.settings.clear-storage': 'Borrar almacenamiento',
  /** Confirmation button for clearing the storage */
  'vision.settings.clear-storage.confirm': 'Sí, borrar almacenamiento',
  /** Explanation of what clearing the storage does */
  'vision.settings.clear-storage.description':
    'Elimina tus consultas guardadas personales y la biblioteca de funciones, restablece las pestañas abiertas y estos valores predeterminados en este navegador, y vuelve a la herramienta Vision clásica. Las consultas compartidas se conservan.',
  /** Toast shown when the saved queries could not be cleared */
  'vision.settings.clear-storage.error': 'No se pudieron borrar las consultas guardadas',
  /** Toast shown after the storage was cleared */
  'vision.settings.clear-storage.success': 'Almacenamiento borrado',
  /** Explanation at the top of the settings dialog */
  'vision.settings.description':
    'Valores predeterminados para las nuevas pestañas. Las pestañas abiertas mantienen sus propias opciones.',
  /** Explains the setting listing the fields left out of History diffs */
  'vision.settings.history-diff.description':
    'Una ruta de campo por línea. Una ruta coincide en cualquier profundidad de un resultado, de modo que _rev oculta la revisión de cada documento en él. Cada diferencia aún puede mostrarlos.',
  /** Button restoring the default fields left out of History diffs */
  'vision.settings.history-diff.reset': 'Restablecer a los valores predeterminados',
  /** Label of the setting listing the fields left out of History diffs */
  'vision.settings.history-diff.title': 'Campos ocultos en las diferencias del historial',
  /** Title of the settings dialog */
  'vision.settings.title': 'Configuración',
  /** Empty state of the shared queries panel */
  'vision.shared.empty':
    'Aún no hay consultas compartidas. Comparte una consulta guardada para que esté disponible para todos los que usan este dataset.',
  /** Shortcut description: close dialogs and menus */
  'vision.shortcuts.close': 'Cerrar diálogos y menús',
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vision.shortcuts.complete': 'Completar un nombre de función',
  /** Shortcut description: copy the query */
  'vision.shortcuts.copy-query': 'Copiar la consulta',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vision.shortcuts.extract-function': 'Extraer la proyección en el cursor a una función',
  /** Shortcut description: run the query */
  'vision.shortcuts.fetch': 'Ejecutar la consulta',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vision.shortcuts.next-finding': 'Saltar al siguiente hallazgo de lint',
  /** Shortcut description: reformat the query */
  'vision.shortcuts.prettify': 'Formatear la consulta',
  /** Title of the keyboard shortcuts dialog */
  'vision.shortcuts.title': 'Atajos de teclado',
  /** Sidebar toggle: show icons only */
  'vision.sidebar.collapse': 'Contraer barra lateral',
  /** Sidebar toggle: show labels next to the icons */
  'vision.sidebar.expand': 'Expandir barra lateral',
  /** Accessible label for the sidebar navigation */
  'vision.sidebar.label': 'Barra lateral de Vision',
  /** Sidebar item and drawer title for personal saved queries */
  'vision.sidebar.saved-queries': 'Consultas guardadas',
  /** Sidebar item opening the settings dialog */
  'vision.sidebar.settings': 'Configuración',
  /** Sidebar item and drawer title for shared queries */
  'vision.sidebar.shared-queries': 'Consultas compartidas',
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vision.sidebar.shortcuts': 'Atajos de teclado',
  /** Empty state of the content source map panel */
  'vision.source-map.empty':
    'No hay un mapa de origen de contenido en la respuesta. Activa "Incluir mapa de origen de contenido" en Opciones y vuelve a obtener los datos.',
  /** Accessible label of the divider between the result and the response details panel */
  'vision.split.bottom-panel':
    'Cambiar el tamaño del panel de detalles de la respuesta: arrastra o usa las teclas de flecha; Inicio y Fin van a los límites, Intro restablece',
  /** Accessible label of the divider between the request and response panes */
  'vision.split.request-response':
    'Cambiar el tamaño de los paneles de solicitud y respuesta: arrastra o usa las teclas de flecha; Inicio y Fin van a los límites, Intro restablece',
  /** Accessible label for the button closing a query tab */
  'vision.tabs.close-tab': 'Cerrar pestaña',
  /** Accessible label for the list of query tabs */
  'vision.tabs.label': 'Pestañas de consulta',
  /** Accessible label for the button opening a new query tab */
  'vision.tabs.new-tab': 'Nueva pestaña',
  /** Placeholder of the input renaming a tab */
  'vision.tabs.title-placeholder': 'Título de la pestaña',
  /** Title of a tab whose query is still empty */
  'vision.tabs.untitled': 'Consulta sin título',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vision.webmcp.check-query': 'Verificar una consulta GROQ en Vision',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vision.webmcp.describe-schema': 'Describir el esquema en Vision',
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vision.webmcp.explain-query': 'Explicar una consulta GROQ en Vision',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vision.webmcp.get-state': 'Leer la pestaña abierta de Vision',
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vision.webmcp.open-query': 'Abrir una consulta GROQ en Vision',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vision.webmcp.preview-mutations': 'Previsualizar mutaciones en Vision',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vision.webmcp.run-query': 'Ejecutar una consulta GROQ en Vision',
})
