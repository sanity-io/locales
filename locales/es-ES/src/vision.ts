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
  /** Tooltip shown when the API version selector is locked to vX because a variant is selected */
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
  'vista.agent-actions.credits': 'Usa un crédito de IA por solicitud',
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vista.ai-credits.balance': 'Quedan {{balance}} de {{quota}} créditos de IA este mes.',
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vista.ai-credits.deficit':
    'Se han usado {{used}} créditos de IA este mes, {{deficit}} más que los {{quota}} incluidos.',
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vista.ai-credits.limit.description':
    'Tu organización ha usado {{used}} de sus {{quota}} créditos de IA este mes, por lo que las Acciones de Agente de Sanity están en pausa hasta el próximo mes o hasta que se aumente su límite de gasto.',
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vista.ai-credits.limit.description-unknown':
    'Tu organización ha alcanzado su límite de gasto de créditos de IA, por lo que las Acciones de Agente de Sanity están en pausa hasta el próximo mes o hasta que se aumente el límite.',
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vista.ai-credits.limit.learn-more': 'Cómo funcionan los créditos de IA',
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vista.ai-credits.limit.manage': 'Administrar créditos de IA',
  /** Title of the card shown where the organization is out of AI credits */
  'vista.ai-credits.limit.title': 'Sin créditos de IA',
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vista.ai-credits.usage': 'Uso de IA',
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vista.ai-credits.used': 'Se han usado {{used}} créditos de IA este mes.',
  /** Button in the request column's action bar naming the API version requests go out with */
  'vista.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vista.api-version.button-cdn': 'API CDN {{version}}',
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vista.api-version.button-invalid': 'Versión de API incompleta',
  /** Tooltip of the API version button */
  'vista.api-version.tooltip':
    'Las consultas se ejecutan contra la versión {{version}} de la API. Selecciona para cambiarla en Opciones.',
  /** Tooltip of the API version button while queries go through the API CDN */
  'vista.api-version.tooltip-cdn':
    'Las consultas se ejecutan contra la API CDN con la versión {{version}} de la API. Selecciona para cambiarla en Opciones.',
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vista.api-version.tooltip-cdn-blocked':
    'Las consultas se ejecutan contra la API con la versión {{version}}, no contra la API CDN: no sirve la perspectiva {{perspective}}. Selecciona para cambiarla en Opciones.',
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vista.api-version.tooltip-invalid':
    'La versión de la API en Opciones está incompleta, así que no se puede obtener nada hasta que esté completa.',
  /** Tooltip of the API version button while a selected variant forces the experimental API */
  'vista.api-version.tooltip-locked':
    'Las consultas se ejecutan contra la versión {{version}} de la API, que la variante seleccionada necesita.',
  /** Label of the document after the change in the Delta panel */
  'vista.delta.after': 'Después',
  /** Label of the document before the change in the Delta panel */
  'vista.delta.before': 'Antes',
  /** What the Delta panel does */
  'vista.delta.description':
    'Ejecuta la consulta en modo delta, como lo hacen los webhooks, listeners y Sanity Functions basados en GROQ: before() y after() son el documento antes y después de un cambio, @ es el documento después de él, y delta::changedAny() los compara. Se ejecuta en el navegador con groq-js. Un lado vacío significa que no hay documento: el cambio lo crea o lo elimina.',
  /** Label of the document ID field in the Delta panel */
  'vista.delta.document-id': 'ID del documento',
  /** Shown when there is a query but no documents to compare */
  'vista.delta.empty':
    'Carga el historial de un documento, o escribe los documentos en Antes y Después.',
  /** Shown when the query fails in delta mode */
  'vista.delta.failed': 'No se pudo ejecutar la consulta en modo delta: {{message}}',
  /** Shown when the After document is not valid JSON */
  'vista.delta.invalid-after': 'Después no es un JSON válido: {{message}}',
  /** Shown when the Before document is not valid JSON */
  'vista.delta.invalid-before': 'Before no es un JSON válido: {{message}}',
  /** Button loading the document's revisions from the History API */
  'vista.delta.load': 'Cargar historial',
  /** Shown when the history could not be loaded */
  'vista.delta.load-failed': 'No se pudo cargar el historial: {{message}}',
  /** A delta filter that is true for the change */
  'vista.delta.matches':
    'Coincide: un webhook o función con este filtro se ejecuta para este cambio.',
  /** A delta filter that is false for the change */
  'vista.delta.no-match':
    'No coincide: un webhook o función con este filtro no se ejecuta para este cambio.',
  /** Shown while the query or its params cannot be sent */
  'vista.delta.no-request': 'Corrige la consulta y sus parámetros para ejecutarla en modo delta.',
  /** Heading of the delta result */
  'vista.delta.result': 'Resultado',
  /** The After choice for a change that deletes the document */
  'vista.delta.revision.none-after': 'Nada: el cambio elimina el documento',
  /** The Before choice for a change that creates the document */
  'vista.delta.revision.none-before': 'Nada: el cambio crea el documento',
  /** A revision in the Before and After lists */
  'vista.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vista.drawer.close': 'Cerrar panel',
  /** Explanation at the top of the Explain panel */
  'vista.explain.description':
    'El plan de consulta es cómo el Content Lake ejecuta la consulta: qué lee, filtra y ordena mientras lee, y qué queda para pasos posteriores. Explícame esto hace que Sanity Agent Actions describa la consulta y su plan en palabras sencillas, lo cual usa un crédito de IA.',
  /** Shown in the Explain panel while there is no valid query to explain */
  'vista.explain.empty': 'Escribe una consulta para explicarla.',
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vista.explain.explain': 'Explícame esto',
  /** Shown when the explanation could not be written */
  'vista.explain.failed': 'No se pudo explicar la consulta: {{message}}',
  /** A count the index computes without reading the documents */
  'vista.explain.insight.aggregate': 'Contado en el índice, sin leer los documentos.',
  /** A subquery the plan runs once for all documents */
  'vista.explain.insight.batched-subquery':
    'La subconsulta se ejecuta una sola vez para todos los documentos, en una sola recuperación por lotes, no una vez por documento.',
  /** Part of the filter runs in memory; the expression follows */
  'vista.explain.insight.filter-in-memory':
    'Parte del filtro se ejecuta en memoria, después de leer: cada documento que el índice deja pasar se lee primero, lo cual se vuelve lento en conjuntos de datos grandes. Las combinaciones (->) y funciones en un filtro no pueden usar el índice.',
  /** The index sorts and limits while reading */
  'vista.explain.insight.index-sort-limit':
    'El índice ordena y limita los documentos mientras los lee.',
  /** The plan slices in memory */
  'vista.explain.insight.slice-in-memory':
    'El segmento se toma en memoria después de leer, no como un límite mientras se lee.',
  /** The plan sorts in memory */
  'vista.explain.insight.sort-in-memory':
    'El ordenamiento ocurre en memoria, después de leer cada coincidencia. Ordena por atributos que el índice pueda ordenar.',
  /** Link under the plan insights to the guide on fast queries */
  'vista.explain.insights.guide': 'GROQ de alto rendimiento',
  /** Heading of the plan insights in the Explain panel */
  'vista.explain.insights.title': 'Lo más destacado',
  /** Button in the Explain panel fetching the query plan */
  'vista.explain.plan': 'Mostrar el plan de consulta',
  /** Shown when the query plan could not be fetched */
  'vista.explain.plan-failed': 'No se pudo obtener el plan de consulta: {{message}}',
  /** Heading of the query plan in the Explain panel */
  'vista.explain.plan-title': 'Plan de consulta',
  /** Toast shown after a code snippet was copied */
  'vista.export-query.copied': 'Fragmento copiado al portapapeles',
  /** Label for the button that copies a code snippet */
  'vista.export-query.copy': 'Copiar fragmento',
  /** Explanation at the top of the export query dialog */
  'vista.export-query.description':
    'Ejecuta esta consulta fuera del studio con uno de estos fragmentos.',
  /** Title of the dialog that exports the query as code snippets */
  'vista.export-query.title': 'Exportar consulta',
  /** Note about authentication in the export query dialog */
  'vista.export-query.token-note':
    'Los datasets privados necesitan un token de API. Los datasets públicos pueden omitir el encabezado Authorization.',
  /** Toast shown after the generated code was copied */
  'vista.export-types.copied': 'Código copiado al portapapeles',
  /** Label for the button that copies the generated code */
  'vista.export-types.copy': 'Copiar código',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vista.export-types.empty':
    'Primero obtén la consulta para que haya un resultado del cual derivar los tipos.',
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vista.export-types.schema-error': 'Error al evaluar el schema: {{message}}',
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vista.export-types.source.result':
    'Inferido a partir del resultado obtenido, ya que la consulta no pudo evaluarse con el schema del workspace.',
  /** Note shown when the types were derived from the workspace schema */
  'vista.export-types.source.schema':
    'Inferido a partir del schema del workspace, de la misma manera que lo hace sanity typegen.',
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vista.export-types.stale-result':
    'El resultado mostrado se obtuvo para una consulta o parámetros diferentes. Primero obtén la consulta actual para que haya un resultado del cual derivar los tipos.',
  /** Title of the dialog exporting TypeScript types for the result */
  'vista.export-types.title-typescript': 'Exportar TypeScript',
  /** Title of the dialog exporting a Zod schema for the result */
  'vista.export-types.title-zod': 'Exportar Zod',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vista.functions.add': 'Agregar a la consulta',
  /** Shown on a library function the query declares the same way */
  'vista.functions.declared': 'En esta consulta',
  /** Lint action on a call of a library function the query does not declare */
  'vista.functions.editor.add-from-library': 'Declararla',
  /** Note in a function's hover documentation: the API version it needs */
  'vista.functions.editor.api-version': 'Necesita la versión de API {{version}} o posterior',
  /** Detail of a completion for a custom function the query declares */
  'vista.functions.editor.completion-declared': 'en esta consulta',
  /** Detail of a completion for a library function, which declares it too */
  'vista.functions.editor.completion-library': 'de tu biblioteca',
  /** Note in the hover documentation of a custom function the query declares */
  'vista.functions.editor.declared-on': 'Función personalizada, declarada en la línea {{line}}',
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vista.functions.editor.delta-only':
    'Solo funciona en modo delta, donde los webhooks y las Sanity Functions ejecutan sus filtros',
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vista.functions.editor.extract': 'Extraer a función',
  /** Note in the hover documentation of a library function the query does not declare */
  'vista.functions.editor.in-library':
    'En tu biblioteca de funciones, no declarada en esta consulta',
  /** Link at the end of a built-in function's hover documentation */
  'vista.functions.editor.reference': 'Referencia de funciones de GROQ',
  /** Explanation under the library heading in the Functions panel */
  'vista.functions.library.description':
    'Se conserva en este navegador para cada dataset del proyecto. Las funciones se ofrecen en los autocompletados, y el linting ofrece declarar una llamada a una consulta.',
  /** Shown in the Functions panel while the library is empty */
  'vista.functions.library.empty':
    'Guarda una función que la consulta declara para usarla en otras consultas.',
  /** Heading of the functions library in the Functions panel */
  'vista.functions.library.title': 'Biblioteca',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vista.functions.query.empty':
    'Declara funciones personalizadas al principio de la consulta, o coloca el cursor en una proyección, como author->{name}, y presiona el botón de extracción sobre el editor ({{shortcut}}).',
  /** Heading of the functions the query declares in the Functions panel */
  'vista.functions.query.title': 'En esta consulta',
  /** Removes a function from the library */
  'vista.functions.remove': 'Quitar de la biblioteca',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vista.functions.replace': 'Reemplazar en la consulta',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vista.functions.reveal': 'Mostrar {{name}} en el editor',
  /** Button of a function the query declares that is not in the library yet */
  'vista.functions.save': 'Guardar en la biblioteca',
  /** Shown on a function the query declares the way the library has it */
  'vista.functions.saved': 'Guardado',
  /** Button of a function the query declares differently from the library's version */
  'vista.functions.update': 'Actualizar biblioteca',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vista.generate.button': 'Generar consulta',
  /** Closes the generate query bar */
  'vista.generate.close': 'Cerrar',
  /** Explanation under the generate query field */
  'vista.generate.description':
    'Las Acciones de Agente de Sanity escriben el GROQ a partir de tu descripción y los tipos de documento, y Content Lake verifica cada intento; cada intento usa un crédito de IA. Reemplaza la consulta de esta pestaña y la ejecuta; deshacer en el editor restaura la consulta anterior.',
  /** Shown when no query could be generated, above the reason */
  'vista.generate.failed': 'No se pudo generar la consulta',
  /** Accessible label of the description field in the generate query bar */
  'vista.generate.label': '¿Qué debería obtener la consulta?',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vista.generate.open-anyway': 'Abrir el último intento',
  /** Placeholder of the description field in the generate query bar */
  'vista.generate.placeholder':
    'Los 10 autores más recientes, ordenados por apellido y luego por nombre',
  /** Shown while the first attempt at a query is written */
  'vista.generate.progress': 'Escribiendo la consulta…',
  /** Shown while a rejected attempt is retried */
  'vista.generate.progress-retry': 'Corrigiendo la consulta (intento {{attempt}} de {{max}})…',
  /** Button generating the query */
  'vista.generate.submit': 'Generar',
  /** Badge on a history entry the API CDN answered */
  'vista.history.cdn': 'API CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vista.history.cdn-cache-hit': 'Acierto de caché de CDN',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vista.history.changed': 'Cambiado',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vista.history.changes': 'Cambios',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vista.history.changes-failed': 'No se pudieron mostrar los cambios.',
  /** Button retrying to show the changes of a history entry */
  'vista.history.changes-retry': 'Reintentar',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vista.history.compared-with': 'Comparado con la solicitud de las {{time}}',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vista.history.diff.params': 'Parámetros',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vista.history.diff.query': 'Consulta',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vista.history.diff.query-formatting-only': 'Solo cambió el formato',
  /** Label of the diff of the query result in a history entry's changes */
  'vista.history.diff.result': 'Resultado',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vista.history.diff.url': 'URL de la solicitud',
  /** Empty state of the history panel */
  'vista.history.empty': 'Nada obtenido todavía',
  /** Status label for a failed fetch in the history */
  'vista.history.failed': 'Fallida',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vista.history.hide-hidden': 'Ocultarlos',
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vista.history.hiding': 'Ocultando {{fields}}',
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vista.history.only-hidden-changed': 'Solo cambiaron campos ocultos',
  /** History reason: a tab opened with a generated query fetched it */
  'vista.history.reason.generated': 'Consulta generada',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vista.history.reason.link': 'Enlace abierto',
  /** History reason: a live event matched the query's sync tags */
  'vista.history.reason.live': 'Actualización en vivo',
  /** History reason: the live connection asked every client to refetch */
  'vista.history.reason.live-restart': 'Conexión en vivo reiniciada',
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vista.history.reason.live-start': 'Obtención en vivo iniciada',
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vista.history.reason.load': 'Consulta cargada',
  /** History reason: the fetch button was pressed */
  'vista.history.reason.manual': 'Botón de obtención',
  /** History reason: mutations were applied from the Mutate panel */
  'vista.history.reason.mutation': 'Mutaciones aplicadas',
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vista.history.reason.options': 'Opciones cambiadas',
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vista.history.reason.paste': 'URL pegada',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vista.history.reason.resume': 'Reanudada la actualización automática',
  /** History reason: the keyboard shortcut was used */
  'vista.history.reason.shortcut': 'Atajo de teclado',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vista.history.same-result': 'Mismo resultado',
  /** Button showing the hidden fields in a history entry's changes */
  'vista.history.show-hidden': 'Mostrarlos',
  /** Next to a history entry's changes while the hidden fields are shown */
  'vista.history.showing-hidden': 'Mostrando {{fields}}, ocultos por defecto',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vista.history.too-large': 'Demasiado grande para comparar',
  /** A history entry whose result is the same as the previous result */
  'vista.history.unchanged': 'Sin cambios',
  /** Shown in the Lint panel while the query has no lint findings */
  'vista.lint.empty':
    'No hay hallazgos de lint. Los problemas que el linter de GROQ detecta en la consulta se muestran aquí a medida que escribes; elige uno para seleccionarlo en el editor.',
  /** Where a lint finding sits in the query, shown under its message */
  'vista.lint.position': 'Línea {{line}}, columna {{column}}',
  /** Severity badge of a lint finding */
  'vista.lint.severity.error': 'Error',
  /** Severity badge of a lint finding */
  'vista.lint.severity.hint': 'Sugerencia',
  /** Severity badge of a lint finding */
  'vista.lint.severity.info': 'Información',
  /** Severity badge of a lint finding */
  'vista.lint.severity.warning': 'Advertencia',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vista.lint.use-suggestion': 'Usar {{suggestion}}',
  /** Badge shown while a tab refetches automatically */
  'vista.live.active': 'En vivo',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vista.live.button': 'Obtención en vivo',
  /** Tooltip of the Live button while automatic refetching is off */
  'vista.live.button.start':
    'Obtener y luego volver a obtener cada vez que los documentos del resultado cambien',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vista.live.button.stop':
    'Dejar de obtener cuando los documentos del resultado cambien. Obtener sigue funcionando bajo demanda, para resultados que ningún cambio de documento afecta, como now()',
  /** Error shown when the live connection breaks */
  'vista.live.error': 'Actualizaciones en vivo desconectadas: {{message}}',
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vista.live.stop': 'Detener en vivo',
  /** Button in the Mutate panel adding a mutation to the list */
  'vista.mutate.add': 'Agregar mutación',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vista.mutate.add.create': 'Crear un documento',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vista.mutate.add.delete': 'Eliminar un documento',
  /** Adds a mutation deleting the documents of the shown result */
  'vista.mutate.add.delete-result': 'Eliminar los documentos del resultado',
  /** Adds a mutation patching a document, its ID to fill in */
  'vista.mutate.add.patch': 'Aplicar un parche a un documento',
  /** Adds a mutation patching the documents of the shown result */
  'vista.mutate.add.patch-result': 'Aplicar un parche a los documentos del resultado',
  /** Button applying the mutations a dry run showed */
  'vista.mutate.apply': 'Aplicar a {{dataset}}',
  /** Heading of the error shown when applying the mutations failed */
  'vista.mutate.apply-failed': 'No se aplicaron las mutaciones',
  /** Next to Apply while the mutations as they are have had no dry run */
  'vista.mutate.apply-needs-preview':
    'Aplicar envía lo que mostró una ejecución de prueba: ejecuta una primero.',
  /** Option giving array items without a _key one */
  'vista.mutate.auto-keys': 'Agregar una _key a los elementos de la matriz que no tengan una',
  /** Under the option giving array items a _key */
  'vista.mutate.auto-keys.description':
    'El estudio necesita una en cada elemento de la matriz para poder editarlo.',
  /** Button showing a document's changes in the dry run */
  'vista.mutate.changes': 'Cambios',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vista.mutate.changes-failed': 'No se pudieron mostrar los cambios.',
  /** Button retrying to show a document's changes */
  'vista.mutate.changes-retry': 'Reintentar',
  /** What the Mutate panel does */
  'vista.mutate.description':
    'Escribe mutaciones tal como las recibe la API de Mutaciones, en una lista: create, createOrReplace, createIfNotExists, delete y patch, por ID o mediante una consulta GROQ. Una ejecución de prueba muestra qué harían a cada documento sin cambiar nada; Aplicar las escribe luego en el dataset en una sola transacción, con tu cuenta.',
  /** What the API says went wrong with one of the mutations */
  'vista.mutate.failure-item': 'Mutación {{index}}: {{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vista.mutate.generate.button': 'Generar mutaciones',
  /** Explanation under the generate mutations field */
  'vista.mutate.generate.description':
    'Las Acciones de Agente de Sanity escriben las mutaciones a partir de tu descripción, los documentos del resultado y sus tipos, y una ejecución de prueba revisa cada intento; cada intento usa un crédito de IA. Reemplazan las mutaciones aquí, donde deshacer las restaura; no se escribe nada hasta que las apliques.',
  /** Shown when no mutations could be generated, above the reason */
  'vista.mutate.generate.failed': 'No se pudieron generar las mutaciones',
  /** Accessible label of the description field in the generate mutations bar */
  'vista.mutate.generate.label': '¿Qué deberían hacer las mutaciones?',
  /** Placeholder of the description field in the generate mutations bar */
  'vista.mutate.generate.placeholder': 'Cambiar el título de los documentos del resultado a foobar',
  /** Shown while the first attempt at the mutations is written */
  'vista.mutate.generate.progress': 'Escribiendo las mutaciones…',
  /** Shown while an attempt the dry run turned down is retried */
  'vista.mutate.generate.progress-retry':
    'Corrigiendo las mutaciones (intento {{attempt}} de {{max}})…',
  /** Under the dry run: the fields the diffs leave out */
  'vista.mutate.hiding': 'Los cambios omiten {{fields}}, como lo hace Historial.',
  /** Shown when the mutations are not valid JSON */
  'vista.mutate.invalid-json': 'Las mutaciones no son JSON válido: {{message}}',
  /** Shown when a mutation does not name exactly one thing to do */
  'vista.mutate.invalid-mutation':
    'La mutación {{index}} necesita exactamente una de create, createOrReplace, createIfNotExists, delete o patch.',
  /** Label of the mutations editor */
  'vista.mutate.mutations': 'Mutaciones',
  /** The dry run touched no documents */
  'vista.mutate.no-documents': 'Las mutaciones no afectan a ningún documento.',
  /** Shown when the JSON is not a list of mutations */
  'vista.mutate.not-a-list':
    'Escribe una lista de mutaciones, una única mutación o un cuerpo de solicitud con una lista de mutaciones.',
  /** A document the mutations create */
  'vista.mutate.operation.create': 'Crear',
  /** A document the mutations delete */
  'vista.mutate.operation.delete': 'Eliminar',
  /** A document the mutations touch without changing its content */
  'vista.mutate.operation.none': 'Sin cambios',
  /** A document the mutations change */
  'vista.mutate.operation.update': 'Actualizar',
  /** Button running the mutations as a dry run */
  'vista.mutate.preview': 'Simulación',
  /** Heading of the error shown when the dry run failed */
  'vista.mutate.preview-failed': 'La simulación falló',
  /** Heading of the dry run's outcome */
  'vista.mutate.preview-heading': 'Simulación',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vista.mutate.stale':
    'Las mutaciones, el dataset o las opciones cambiaron después de esta simulación. Ejecútala de nuevo para aplicarlas.',
  /** How many documents the dry run changes and leaves as they are */
  'vista.mutate.summary': 'Modificados: {{changed}} · Sin cambios: {{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vista.network.cache': 'Caché',
  /** The API CDN answered from its cache */
  'vista.network.cache.hit': 'Acierto',
  /** Under the details of a CDN cache hit */
  'vista.network.cache.hit-explained':
    'El CDN respondió con una respuesta que tenía en caché, desde una ubicación cercana a ti; la consulta no llegó a la API.',
  /** The API CDN answered with a response this session had not seen */
  'vista.network.cache.miss': 'Fallo, hasta donde esta sesión puede saber',
  /** The API answered, which caches nothing */
  'vista.network.cache.none': 'Ninguna, la API responde a cada solicitud con contenido actualizado',
  /** Shown in the Network panel while there is no response */
  'vista.network.empty':
    'Ejecuta la consulta para ver qué endpoint la respondió, si fue desde una caché y dónde se ejecutó.',
  /** In the Network panel: the endpoint that answered */
  'vista.network.endpoint': 'Respondido por',
  /** The live API answered */
  'vista.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vista.network.endpoint.cdn': 'API CDN',
  /** In the Network panel: the region the query ran in */
  'vista.network.region': 'La consulta se ejecutó en',
  /** The response did not say where the query ran */
  'vista.network.region.unknown': 'No informado',
  /** In the Network panel: the round trip and the time on the server */
  'vista.network.timing': 'Tiempo',
  /** The round trip and the server's time for the query, in milliseconds */
  'vista.network.timing.value': '{{e2e}}ms de ida y vuelta, {{server}}ms en el servidor',
  /** In the Network panel: the trace of the request, for Sanity support */
  'vista.network.trace': 'ID de rastreo',
  /** Hint in the Network panel while queries go to the API */
  'vista.network.use-cdn-hint':
    'Activa Usar la API CDN en Opciones para enviar las consultas a través del CDN.',
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vista.network.you': 'Tú',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vista.options.dataset.follows-workspace': 'Sigue al workspace',
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vista.options.dataset.pin': 'Fijar un dataset',
  /** Hint under the dataset field while a dataset is pinned */
  'vista.options.dataset.pinned': 'Fijado; el espacio de trabajo puede usar otro dataset',
  /** Button that makes the tab follow the workspace's dataset again */
  'vista.options.dataset.use-workspace': 'Usar el dataset del espacio de trabajo',
  /** Label for the "Include content source map" switch */
  'vista.options.include-source-map': 'Incluir mapa de origen del contenido',
  /** Description for the "Include content source map" switch */
  'vista.options.include-source-map.description':
    'Añade resultSourceMap a la respuesta, mostrado en la pestaña Content Source Map.',
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vista.options.perspective.global': 'Global ({{name}})',
  /** Label of the switch that sends queries to the API CDN */
  'vista.options.use-cdn': 'Usar el API CDN',
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vista.options.use-cdn.anonymous':
    'Este estudio te inicia sesión con una cookie, que el API CDN nunca recibe: responde como lo haría con un visitante anónimo, con lo que muestra un dataset público.',
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vista.options.use-cdn.blocked':
    'El API CDN no sirve borradores ni releases, por lo que las consultas con la perspectiva {{perspective}} van a la API. Con published o raw usan el CDN.',
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vista.options.use-cdn.blocked.title': 'Las consultas van a la API, no al CDN',
  /** Description of the API CDN switch */
  'vista.options.use-cdn.description':
    'Envía la consulta al API CDN, como useCdn: true en @sanity/client, con las perspectivas published y raw: los borradores y releases siempre van a la API. Sus respuestas se almacenan en caché hasta por un minuto; el panel de Red muestra cuándo una provino de la caché.',
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vista.options.use-cdn.use-published': 'Usar la perspectiva published',
  /** Label of the variant field */
  'vista.options.variant-label': 'Variante',
  /** Variant option sending the navbar's variant, named */
  'vista.options.variant.global': 'Global ({{name}})',
  /** Variant option sending the navbar's variant while none is selected there */
  'vista.options.variant.global-none': 'Global (ninguna seleccionada)',
  /** Variant option sending no variant */
  'vista.options.variant.none': 'Ninguna',
  /** Accessible label for collapsing a bottom panel */
  'vista.panel.collapse': 'Contraer panel',
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vista.panel.delta': 'Delta',
  /** Accessible label for expanding a bottom panel */
  'vista.panel.expand': 'Expandir panel',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vista.panel.explain': 'Explicar',
  /** Label of the Functions tab in the response panel */
  'vista.panel.functions': 'Funciones',
  /** Label of the "History" tab in the response panel */
  'vista.panel.history': 'Historial',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vista.panel.lint': 'Lint',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vista.panel.mutate': 'Mutar',
  /** Label of the Network tab in the response panel */
  'vista.panel.network': 'Red',
  /** Label of the "Options" panel in the request column */
  'vista.panel.options': 'Opciones',
  /** Label of the "Response" tab in the response panel */
  'vista.panel.response': 'Respuesta',
  /** Label of the "Content Source Map" tab in the response panel */
  'vista.panel.source-map': 'Mapa de origen de contenido',
  /** Button adding an item to a list param in the params form */
  'vista.params-form.add-item': 'Agregar elemento',
  /** Placeholder of a params form field that takes any JSON value */
  'vista.params-form.any-placeholder': 'Cualquier valor JSON; otro texto se envía como cadena',
  /** Shown in the params form when the query uses no params */
  'vista.params-form.empty':
    'La consulta no usa parámetros. Cada $nombre en ella obtiene un campo aquí.',
  /** Shown in the params form while the params JSON cannot be parsed */
  'vista.params-form.invalid-json':
    'Los parámetros no son JSON válido. Corríjalos en la vista JSON para editarlos aquí.',
  /** A boolean param's value is not true or false; it is sent anyway */
  'vista.params-form.invalid.boolean': 'No es verdadero ni falso; se envía como {{value}}',
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vista.params-form.invalid.document-type':
    'No es un tipo de documento en este espacio de trabajo; se envía de todas formas',
  /** A whole number param (a slice bound) holds a fraction */
  'vista.params-form.invalid.integer': 'No es un número entero, que las porciones necesitan',
  /** A list param's value is not a list; it is sent anyway */
  'vista.params-form.invalid.list': 'No es una lista; se envía como {{value}}',
  /** A number param's value is not a number; it is sent anyway */
  'vista.params-form.invalid.number': 'No es un número; se envía como texto',
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vista.params-form.invalid.option':
    'No es uno de los valores conocidos; se envía de todas formas',
  /** A text param's value is not text; it is sent anyway */
  'vista.params-form.invalid.string': 'No es texto; se envía como {{value}}',
  /** Accessible label of an item input of a list param in the params form */
  'vista.params-form.item-label': '${{name}}, elemento {{index}}',
  /** Placeholder of an item input of a list param in the params form */
  'vista.params-form.item-placeholder': 'Elemento',
  /** Under a params form field whose param has no value */
  'vista.params-form.missing': 'No establecido: la consulta falla hasta que tenga un valor',
  /** Shown in the params form when the workspace schema could not be read */
  'vista.params-form.no-schema':
    'Los tipos provienen únicamente de la consulta: no se pudo leer el esquema del espacio de trabajo.',
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vista.params-form.not-set': 'No establecido',
  /** Button setting a date and time param to the current time */
  'vista.params-form.now': 'Ahora',
  /** Button removing a param the query does not use from the params */
  'vista.params-form.remove': 'Eliminar',
  /** Accessible label of the button removing an item from a list param */
  'vista.params-form.remove-item': 'Eliminar elemento',
  /** Shown in the params form when the query does not parse */
  'vista.params-form.syntax-error':
    'La consulta no se puede analizar, por lo que sus parámetros se muestran sin tipos.',
  /** Type hint of a params form field: any JSON value */
  'vista.params-form.type.any': 'cualquier valor JSON',
  /** Type hint of a params form field: true or false */
  'vista.params-form.type.boolean': 'verdadero o falso',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vista.params-form.type.datetime': 'fecha y hora (ISO 8601)',
  /** Type hint of a params form field: a document ID */
  'vista.params-form.type.document-id': 'ID de documento',
  /** Type hint of a params form field: one of the workspace's document types */
  'vista.params-form.type.document-type': 'tipo de documento',
  /** Type hint of a params form field: a whole number */
  'vista.params-form.type.integer': 'número entero',
  /** Type hint of a params form field: a list of values */
  'vista.params-form.type.list': 'lista, cada {{type}}',
  /** Type hint of a params form field: a number */
  'vista.params-form.type.number': 'número',
  /** Type hint of a params form field: text */
  'vista.params-form.type.string': 'texto',
  /** Heading of the params the query does not use, listed in the params form */
  'vista.params-form.unused': 'No usado por la consulta',
  /** Before the expressions that use a param, in the params form */
  'vista.params-form.used-in': 'Usado en',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vista.params.fit-height': 'Ajustado al contenido, {{height}} píxeles',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vista.params.resize':
    'Cambiar el tamaño de los parámetros: arrastra o usa las teclas de flecha; haz doble clic o pulsa Intro para ajustar al contenido de nuevo',
  /** Tab showing the params as a form inferred from the query */
  'vista.params.view.form': 'Formulario',
  /** Tab showing the params as JSON */
  'vista.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vista.params.view.label': 'Editar parámetros como',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vista.paste.parsed': 'Consulta cargada desde la URL pegada',
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vista.paste.unavailable-variant':
    'La URL pegada usaba la variante "{{variant}}"; selecciónala en la barra de navegación para ejecutar la consulta con ella.',
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vista.paste.unknown-dataset':
    'El dataset "{{dataset}}" en la URL pegada no está disponible aquí, se mantiene el actual.',
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vista.paste.unsupported-perspective':
    'La perspective en la URL pegada no es compatible aquí, se mantiene la actual.',
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vista.paste.variants-disabled':
    'La URL pegada usaba la variante "{{variant}}"; este workspace tiene las variantes desactivadas, así que la consulta se ejecuta sin ella.',
  /** Accessible label for the query actions menu */
  'vista.query.actions': 'Acciones de la consulta',
  /** Tooltip when automatic refetching is not available for the API version */
  'vista.query.auto-refetch.unsupported':
    'Volver a obtener automáticamente requiere la versión de la API v2021-03-25 o posterior.',
  /** Toast shown after the query was copied */
  'vista.query.copied': 'Consulta copiada al portapapeles',
  /** Menu item copying the query text */
  'vista.query.copy': 'Copiar consulta',
  /** Menu item opening the export query dialog */
  'vista.query.export': 'Exportar consulta…',
  /** Menu item reformatting the query */
  'vista.query.prettify': 'Dar formato a la consulta',
  /** Toast shown when the query could not be reformatted */
  'vista.query.prettify.failed': 'No se pudo dar formato a la consulta',
  /** Menu item saving the query to the personal saved queries */
  'vista.query.save': 'Guardar consulta',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vista.query.stop': 'Detener',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vista.query.stop.description': 'Detener la obtención',
  /** Explanation in the settings section about the redesigned experience */
  'vista.redesign.settings.description':
    'Estás usando la herramienta Vision rediseñada. Si vuelves a la versión anterior, conservarás tus pestañas y configuraciones en este navegador para la próxima vez que la pruebes.',
  /** Title of the settings section about the redesigned experience */
  'vista.redesign.settings.title': 'Vision rediseñada (beta)',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vista.redesign.switch-to-classic': 'Cambiar a Vision clásica',
  /** Toast button that switches to the redesigned tool */
  'vista.redesign.toast.accept': 'Probarla ahora',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.description':
    'Pestañas de consulta, actualización en vivo, detalles de la respuesta y exportaciones. Puedes volver a la versión anterior en cualquier momento.',
  /** Toast button that hides the invitation */
  'vista.redesign.toast.dismiss': 'Ahora no',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.title': 'Prueba Vision rediseñada',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vista.redesign.try': 'Probar el rediseño',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vista.redesign.try.description':
    'Cambia a Vision rediseñada, en beta. Puedes volver a la versión anterior en cualquier momento desde su barra lateral.',
  /** Empty state of the response panel before anything was fetched */
  'vista.response.empty': 'Nada obtenido todavía',
  /** Label for the payload size in the response tab */
  'vista.response.payload-size': 'Tamaño del payload',
  /** Label for the sync tags in the response tab */
  'vista.response.sync-tags': 'Etiquetas de sincronización',
  /** Shown when the response carried no sync tags */
  'vista.response.sync-tags.none': 'No hay etiquetas de sincronización en la respuesta',
  /** Accessible label for the result actions menu */
  'vista.result.actions': 'Acciones del resultado',
  /** Toast shown after the result was copied */
  'vista.result.copied': 'Resultado copiado al portapapeles',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vista.result.copied-value': 'Se copió {{path}}',
  /** Menu item and button copying the result as JSON */
  'vista.result.copy': 'Copiar resultado',
  /** Button next to each property in the result tree, copying its value */
  'vista.result.copy-value': 'Copiar valor',
  /** Empty state of the result view */
  'vista.result.empty': 'Ejecuta la consulta para ver su resultado aquí',
  /** Button exporting the result as CSV */
  'vista.result.export-csv': 'Exportar CSV',
  /** Button exporting the result as JSON */
  'vista.result.export-json': 'Exportar JSON',
  /** Menu item opening the TypeScript export dialog */
  'vista.result.export-typescript': 'Exportar TypeScript…',
  /** Menu item opening the Zod export dialog */
  'vista.result.export-zod': 'Exportar Zod…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vista.result.graph.collapse': 'Ocultar lo que contiene',
  /** Button fitting the whole graph in view */
  'vista.result.graph.fit': 'Ajustar a la vista',
  /** Accessible label of the graph, saying how to move around in it */
  'vista.result.graph.label':
    'Gráfico de resultados: arrastra para mover, desplázate para hacer zoom; con el foco activo, las flechas mueven, + y - hacen zoom, 0 ajusta',
  /** Ends the note on a graph that leaves part of this result out */
  'vista.result.graph.left-out-hint': 'Las vistas de árbol y JSON lo muestran todo.',
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vista.result.graph.node-limit': 'Solo se dibujan los primeros {{nodes}} objetos y arreglos.',
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vista.result.graph.partial': 'Solo se muestran las primeras {{rows}} entradas para {{nodes}}.',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vista.result.graph.partial.node': '{{name}} ({{entries}} entradas)',
  /** Title of the graph node of the result itself */
  'vista.result.graph.root': 'resultado',
  /** Button zooming into the graph */
  'vista.result.graph.zoom-in': 'Acercar',
  /** Button zooming out of the graph */
  'vista.result.graph.zoom-out': 'Alejar',
  /** Tab showing the result as a graph of its objects and arrays */
  'vista.result.view.graph': 'Gráfico',
  /** Tab showing the result as indented JSON text, to select and copy from */
  'vista.result.view.json': 'JSON',
  /** Accessible label of the tabs that switch how the result shows */
  'vista.result.view.label': 'Vista de resultados',
  /** Tab showing the result as a tree to browse */
  'vista.result.view.tree': 'Árbol',
  /** Empty state of the saved queries panel */
  'vista.saved.empty': 'Aún no hay consultas guardadas. Guarda la consulta actual con el botón +.',
  /** Empty state of a query list when the search matches nothing */
  'vista.saved.empty-search': 'Ninguna consulta coincide con tu búsqueda',
  /** Menu item loading a saved query into the active tab */
  'vista.saved.load-in-current-tab': 'Cargar en la pestaña actual',
  /** Menu item opening a saved query in a new tab */
  'vista.saved.open-in-new-tab': 'Abrir en una pestaña nueva',
  /** Menu item renaming a saved query */
  'vista.saved.rename': 'Cambiar nombre',
  /** Accessible label for the button saving the current query */
  'vista.saved.save-current': 'Guardar consulta actual',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vista.saved.unavailable-variant':
    'Esta consulta guardada usaba la variante "{{variant}}"; selecciónala en la barra de navegación para ejecutar la consulta con ella.',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vista.saved.unknown-dataset':
    'El dataset "{{dataset}}" de esta consulta guardada no está disponible aquí, se mantiene el actual.',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vista.saved.variants-disabled':
    'Esta consulta guardada usaba la variante "{{variant}}"; este espacio de trabajo tiene las variantes desactivadas, así que la consulta se ejecuta sin ella.',
  /** Button in the settings dialog that clears the stored state */
  'vista.settings.clear-storage': 'Borrar almacenamiento',
  /** Confirmation button for clearing the storage */
  'vista.settings.clear-storage.confirm': 'Sí, borrar almacenamiento',
  /** Explanation of what clearing the storage does */
  'vista.settings.clear-storage.description':
    'Elimina tus consultas guardadas personales y la biblioteca de funciones, restablece las pestañas abiertas y estos valores predeterminados en este navegador, y vuelve a la herramienta Vision clásica. Las consultas compartidas se conservan.',
  /** Toast shown when the saved queries could not be cleared */
  'vista.settings.clear-storage.error': 'No se pudieron borrar las consultas guardadas',
  /** Toast shown after the storage was cleared */
  'vista.settings.clear-storage.success': 'Almacenamiento borrado',
  /** Explanation at the top of the settings dialog */
  'vista.settings.description':
    'Valores predeterminados para las pestañas nuevas. Las pestañas abiertas mantienen sus propias opciones.',
  /** Explains the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.description':
    'Una ruta de campo por línea. Una ruta coincide en cualquier profundidad de un resultado, por lo que _rev oculta la revisión de todos los documentos que contiene. Cada diff puede seguir mostrándolos.',
  /** Button restoring the default fields left out of History diffs */
  'vista.settings.history-diff.reset': 'Restablecer a los valores predeterminados',
  /** Label of the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.title': 'Campos ocultos en los diffs de Historial',
  /** Title of the settings dialog */
  'vista.settings.title': 'Configuración',
  /** Empty state of the shared queries panel */
  'vista.shared.empty':
    'Aún no hay consultas compartidas. Comparte una consulta guardada para ponerla a disposición de todos los que usan este dataset.',
  /** Shortcut description: close dialogs and menus */
  'vista.shortcuts.close': 'Cerrar diálogos y menús',
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vista.shortcuts.complete': 'Completar un nombre de función',
  /** Shortcut description: copy the query */
  'vista.shortcuts.copy-query': 'Copiar la consulta',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vista.shortcuts.extract-function': 'Extraer la proyección en el cursor a una función',
  /** Shortcut description: run the query */
  'vista.shortcuts.fetch': 'Ejecutar la consulta',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vista.shortcuts.next-finding': 'Saltar al siguiente hallazgo de lint',
  /** Shortcut description: reformat the query */
  'vista.shortcuts.prettify': 'Dar formato a la consulta',
  /** Title of the keyboard shortcuts dialog */
  'vista.shortcuts.title': 'Atajos de teclado',
  /** Sidebar toggle: show icons only */
  'vista.sidebar.collapse': 'Contraer barra lateral',
  /** Sidebar toggle: show labels next to the icons */
  'vista.sidebar.expand': 'Expandir barra lateral',
  /** Accessible label for the sidebar navigation */
  'vista.sidebar.label': 'Barra lateral de Vista',
  /** Sidebar item and drawer title for personal saved queries */
  'vista.sidebar.saved-queries': 'Consultas guardadas',
  /** Sidebar item opening the settings dialog */
  'vista.sidebar.settings': 'Configuración',
  /** Sidebar item and drawer title for shared queries */
  'vista.sidebar.shared-queries': 'Consultas compartidas',
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vista.sidebar.shortcuts': 'Atajos de teclado',
  /** Empty state of the content source map panel */
  'vista.source-map.empty':
    'No hay ningún mapa de origen de contenido en la respuesta. Activa "Incluir mapa de origen de contenido" en Opciones y vuelve a buscar.',
  /** Accessible label of the divider between the result and the response details panel */
  'vista.split.bottom-panel':
    'Cambiar el tamaño del panel de detalles de la respuesta: arrastra o usa las teclas de flecha; Inicio y Fin van a los límites, Intro restablece',
  /** Accessible label of the divider between the request and response panes */
  'vista.split.request-response':
    'Cambiar el tamaño de los paneles de solicitud y respuesta: arrastra o usa las teclas de flecha; Inicio y Fin van a los límites, Intro restablece',
  /** Accessible label for the button closing a query tab */
  'vista.tabs.close-tab': 'Cerrar pestaña',
  /** Accessible label for the list of query tabs */
  'vista.tabs.label': 'Pestañas de consulta',
  /** Accessible label for the button opening a new query tab */
  'vista.tabs.new-tab': 'Nueva pestaña',
  /** Placeholder of the input renaming a tab */
  'vista.tabs.title-placeholder': 'Título de la pestaña',
  /** Title of a tab whose query is still empty */
  'vista.tabs.untitled': 'Consulta sin título',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vista.webmcp.check-query': 'Comprobar una consulta GROQ en Vision',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vista.webmcp.describe-schema': 'Describir el esquema en Vision',
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vista.webmcp.explain-query': 'Explicar una consulta GROQ en Vision',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vista.webmcp.get-state': 'Leer la pestaña de Vision abierta',
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vista.webmcp.open-query': 'Abrir una consulta GROQ en Vision',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vista.webmcp.preview-mutations': 'Previsualizar mutaciones en Vision',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vista.webmcp.run-query': 'Ejecutar una consulta GROQ en Vision',
})
