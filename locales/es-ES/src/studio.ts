import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Menu item for deleting the asset */
  'asset-source.asset-list.menu.delete': 'Eliminar',
  /** Menu item for showing where a particular asset is used */
  'asset-source.asset-list.menu.show-usage': 'Mostrar uso',
  /** Header in usage dialog for file assets */
  'asset-source.asset-usage-dialog.header_file': 'Documentos que utilizan el archivo',
  /** Header in usage dialog for image assets */
  'asset-source.asset-usage-dialog.header_image': 'Documentos que utilizan la imagen',
  /** Text shown in usage dialog when loading documents using the selected asset */
  'asset-source.asset-usage-dialog.loading': 'Cargando…',
  /** Text for cancel action in delete-asset dialog */
  'asset-source.delete-dialog.action.cancel': 'Cancelar',
  /** Text for "confirm delete" action in delete-asset dialog */
  'asset-source.delete-dialog.action.delete': 'Eliminar',
  /** Dialog header for delete-asset dialog when deleting a file */
  'asset-source.delete-dialog.header_file': 'Eliminar archivo',
  /** Dialog header for delete-asset dialog when deleting an image */
  'asset-source.delete-dialog.header_image': 'Eliminar imagen',
  /** Text shown in delete dialog when loading documents using the selected asset */
  'asset-source.delete-dialog.loading': 'Cargando…',
  /** Message confirming to delete *named* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_named':
    'Está a punto de eliminar el archivo <strong>{{filename}}}</strong> y sus metadatos. ¿Está seguro?',
  /** Message confirming to delete *unnamed* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_unnamed':
    'Está a punto de eliminar el archivo y sus metadatos. ¿Está seguro?',
  /** Message confirming to delete *named* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_named':
    'Estás a punto de eliminar la imagen <strong>{{filename}}</strong> y sus metadatos. ¿Estás seguro?',
  /** Message confirming to delete *unnamed* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_unnamed':
    'Estás a punto de eliminar la imagen y sus metadatos. ¿Estás seguro?',
  /** Alt text showing on image preview in delete asset dialog  */
  'asset-source.delete-dialog.usage-list.image-preview-alt': 'Vista previa de la imagen',
  /** Warning message showing when *named* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_named':
    '{{filename}} no se puede eliminar porque está en uso. Para eliminar este archivo, primero necesita quitar todos los usos del mismo.',
  /** Warning message showing when *unnamed* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_unnamed':
    'Este archivo no se puede eliminar porque está en uso. Para eliminarlo, primero necesita quitar todos los usos del mismo.',
  /** Warning message showing when *named* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_named':
    '{{filename}} no se puede eliminar porque está en uso. Para eliminar esta imagen, primero necesita quitar todos los usos de la misma.',
  /** Warning message showing when *unnamed* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_unnamed':
    'Esta imagen no se puede eliminar porque está en uso. Para eliminarla, primero necesita quitar todos los usos de la misma.',
  /** Text shown when the list of assets only include a specific set of types */
  'asset-source.dialog.accept-message':
    'Mostrando solo tipos de archivo aceptados: <strong>{{acceptTypes}}</strong>',
  /** Keys shared between both image asset source and file asset source */
  /** Select asset dialog title for files */
  'asset-source.dialog.default-title_file': 'Seleccionar archivo',
  /** Select asset dialog title for images */
  'asset-source.dialog.default-title_image': 'Seleccionar imagen',
  /** Select asset dialog load more items */
  'asset-source.dialog.load-more': 'Cargar más',
  /** Text shown when selecting a file but there's no files to select from */
  'asset-source.dialog.no-assets_file': 'No hay archivos',
  /** Text shown when selecting an image but there's no images to select from */
  'asset-source.dialog.no-assets_image': 'No hay imágenes',
  'asset-source.file.asset-list.action.delete.disabled-cannot-delete-current-file':
    'No se puede eliminar el archivo seleccionado actualmente',
  'asset-source.file.asset-list.action.delete.text': 'Eliminar',
  'asset-source.file.asset-list.action.delete.title': 'Eliminar archivo',
  'asset-source.file.asset-list.action.select-file.title': 'Selecciona el archivo {{filename}}',
  'asset-source.file.asset-list.action.show-usage.title': 'Mostrar uso',
  'asset-source.file.asset-list.delete-failed': 'El archivo no pudo ser eliminado',
  'asset-source.file.asset-list.delete-successful': 'El archivo fue eliminado',
  'asset-source.file.asset-list.header.date-added': 'Fecha de añadido',
  /** File asset source */
  'asset-source.file.asset-list.header.filename': 'Nombre del archivo',
  'asset-source.file.asset-list.header.size': 'Tamaño',
  'asset-source.file.asset-list.header.type': 'Tipo',
  /** Text displayed on button or menu invoking the file asset source */
  'asset-source.file.title': 'Archivos subidos',
  'asset-source.image.asset-list.delete-failed': 'La imagen no pudo ser eliminada',
  /** Image asset source */
  'asset-source.image.asset-list.delete-successful': 'La imagen fue eliminada',
  /** Text displayed on button or menu invoking the image asset source */
  'asset-source.image.title': 'Imágenes subidas',
  'asset-source.usage-list.documents-using-file_named_one':
    'Un documento está utilizando el archivo <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-file_named_other':
    '{{count}} documentos están utilizando el archivo <code>{{filename}}</code>',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *named* file **/
  'asset-source.usage-list.documents-using-file_named_zero':
    'Ningún documento está utilizando el archivo <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-file_unnamed_one':
    'Un documento está utilizando este archivo',
  'asset-source.usage-list.documents-using-file_unnamed_other':
    '{{count}} documentos están utilizando este archivo',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *unnamed* file **/
  'asset-source.usage-list.documents-using-file_unnamed_zero':
    'Ningún documento está utilizando este archivo',
  'asset-source.usage-list.documents-using-image_named_one':
    'Un documento está utilizando la imagen <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-image_named_other':
    '{{count}} documentos están utilizando la imagen <code>{{filename}}</code>',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *named* image **/
  'asset-source.usage-list.documents-using-image_named_zero':
    'Ningún documento está utilizando la imagen <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-image_unnamed_one':
    'Un documento está utilizando esta imagen',
  'asset-source.usage-list.documents-using-image_unnamed_other':
    '{{count}} documentos están utilizando esta imagen',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *unnamed* image **/
  'asset-source.usage-list.documents-using-image_unnamed_zero':
    'Ningún documento está utilizando esta imagen',

  /** Action message for navigating to next month */
  'calendar.action.go-to-next-month': 'Ir al próximo mes',
  /** Action message for navigating to next year */
  'calendar.action.go-to-next-year': 'Ir al próximo año',
  /** Action message for navigating to previous month */
  'calendar.action.go-to-previous-month': 'Ir al mes anterior',
  /** Action message for navigating to previous year */
  'calendar.action.go-to-previous-year': 'Ir al año anterior',
  /* Label for navigating the calendar to "today", without _selecting_ today. Short form, eg `Today`, not `Go to today` */
  'calendar.action.go-to-today': 'Hoy',
  /* Accessibility label for navigating the calendar to "today", without _selecting_ today */
  'calendar.action.go-to-today-aria-label': 'Ir a hoy',
  /* Label for navigating the calendar to "tomorrow", without _selecting_ tomorrow. Short form, eg `Tomorrow`, not `Go to tomorrow` */
  'calendar.action.go-to-tomorrow': 'Mañana',
  /* Label for navigating the calendar to "yesterday", without _selecting_ yesterday. Short form, eg `Yesterday`, not `Go to yesterday` */
  'calendar.action.go-to-yesterday': 'Ayer',
  /** Label for switch that controls whether or not to include time in given timestamp */
  'calendar.action.include-time-label': 'Incluir hora',
  /** Action message for selecting the hour */
  'calendar.action.select-hour': 'Seleccionar hora',
  /** Action message for selecting the minute */
  'calendar.action.select-minute': 'Seleccionar minuto',
  /** Action message for setting to the current time */
  'calendar.action.set-to-current-time': 'Establecer a la hora actual',
  /** Label for selecting an hour preset. Receives a `time` param as a string on hh:mm format and a `date` param as a Date instance denoting the preset date */
  'calendar.action.set-to-time-preset': '{{time}} en {{date, datetime}}',
  /** Error message displayed in calendar when entered date is not the correct format */
  'calendar.error.must-be-in-format':
    'Debe estar en el formato <Emphasis>{{exampleDate}}</Emphasis>',
  /** Month name for April */
  'calendar.month-names.april': 'Abril',
  /** Month name for August */
  'calendar.month-names.august': 'Agosto',
  /** Month name for December */
  'calendar.month-names.december': 'Diciembre',
  /** Month name for February */
  'calendar.month-names.february': 'Febrero',
  /** Month name for January */
  'calendar.month-names.january': 'Enero',
  /** Month name for July */
  'calendar.month-names.july': 'Julio',
  /** Month name for June */
  'calendar.month-names.june': 'Junio',
  /** Month name for March */
  'calendar.month-names.march': 'Marzo',
  /** Month name for May */
  'calendar.month-names.may': 'Mayo',
  /** Month name for November */
  'calendar.month-names.november': 'Noviembre',
  /** Month name for October */
  'calendar.month-names.october': 'Octubre',
  /** Month name for September */
  'calendar.month-names.september': 'Septiembre',
  /** Short weekday name for Friday */
  'calendar.weekday-names.short.friday': 'Vie',
  /** Short weekday name for Monday */
  'calendar.weekday-names.short.monday': 'Lun',
  /** Short weekday name for Saturdayday */
  'calendar.weekday-names.short.saturday': 'Sáb',
  /** Short weekday name for Sunday */
  'calendar.weekday-names.short.sunday': 'Dom',
  /** Short weekday name for Thursday */
  'calendar.weekday-names.short.thursday': 'Jue',
  /** Short weekday name for Tuesday */
  'calendar.weekday-names.short.tuesday': 'Mar',
  /** Short weekday name for Wednesday */
  'calendar.weekday-names.short.wednesday': 'Mié',

  /** Label for the close button label in Review Changes pane */
  'changes.action.close-label': 'Cerrar revisión de cambios',
  /** Cancel label for revert button prompt action */
  'changes.action.revert-all-cancel': 'Cancelar',
  /** Revert all confirm label for revert button action - used on prompt button + review changes pane */
  'changes.action.revert-all-confirm': 'Revertir todo',
  /** Prompt for reverting all changes in document in Review Changes pane. Includes a count of changes. */
  'changes.action.revert-all-description':
    '¿Estás seguro de que quieres revertir los {{count}} cambios?',
  /** Prompt for confirming revert change (singular) label for field change action */
  'changes.action.revert-changes-confirm-change_one': 'Revertir cambio',
  /** Revert for confirming revert (plural) label for field change action */
  'changes.action.revert-changes-confirm-change_other': 'Revertir cambios',
  /** Prompt for reverting changes for a field change */
  'changes.action.revert-changes-description': '¿Estás seguro de que quieres revertir los cambios?',
  /** Prompt for reverting changes for a group change, eg multiple changes */
  'changes.action.revert-changes-description_one':
    '¿Estás seguro de que quieres revertir el cambio?',
  /** Label for when the action of the change was to set something that was previously empty, eg a field was given a value, an array item was added, an asset was selected or similar */
  'changes.added-label': 'Agregado',
  /** Array diff: An item was added in a given position (`{{position}}`) */
  'changes.array.item-added-in-position': 'Añadido en la posición {{position}}',
  'changes.array.item-moved_down_one': 'Movido {{count}} posición hacia abajo',
  'changes.array.item-moved_down_other': 'Movidas {{count}} posiciones hacia abajo',
  /**
   * Array diff: An item was moved within the array.
   * Receives `{{count}}` representing number of positions it moved.
   * Context is the direction of the move, either `up` or `down`.
   */
  'changes.array.item-moved_up_one': 'Movido {{count}} posición hacia arriba',
  'changes.array.item-moved_up_other': 'Movidas {{count}} posiciones hacia arriba',
  /** Array diff: An item was removed from a given position (`{{position}}`) */
  'changes.array.item-removed-from-position': 'Eliminado de la posición {{position}}',
  /** Accessibility label for the "change bar" shown when there are edits on a field-level */
  'changes.change-bar.aria-label': 'Revisar cambios',
  /** Label for when the action of the change was _not_ an add/remove, eg a text field changed value, an image was changed from one asset to another or similar */
  'changes.changed-label': 'Cambiado',
  /** Label and text for tooltip that indicates the authors of the changes */
  'changes.changes-by-author': 'Cambios por',
  /** Additional text shown in development mode when a diff component crashes during rendering */
  'changes.error-boundary.developer-info':
    'Consulta la consola de desarrollador para más información',
  /** Text shown when a diff component crashes during rendering, triggering the error boundary */
  'changes.error-boundary.title': 'Renderizar los cambios en este campo causó un error',
  /** Error message shown when the value of a field is not the expected one */
  'changes.error.incorrect-type-message':
    'Error de valor: El valor es del tipo "<code>{{actualType}}</code>", se esperaba "<code>{{expectedType}}</code>"',
  /** File diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.file.meta-info-fallback-title': 'Sin título',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.crop-changed': 'Recorte cambiado',
  /** Image diff: Text shown if the previous image asset was deleted (shouldn't theoretically happen) */
  'changes.image.deleted': 'Imagen eliminada',
  /** Image diff: Text shown if the image failed to be loaded when previewing it */
  'changes.image.error-loading-image': 'Error al cargar la imagen',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.hotspot-changed': 'Punto focal cambiado',
  /** Image diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.image.meta-info-fallback-title': 'Sin título',
  /** Image diff: Text shown if no asset has been set for the field (but has metadata changes) */
  'changes.image.no-asset-set': 'Imagen no establecida',
  /** Image diff: Text shown when the from/to state has/had no image */
  'changes.image.no-image-placeholder': '(sin imagen)',
  /** Label for the "from" value in the change inspector */
  'changes.inspector.from-label': 'De',
  /** Label for the "meta" (field path, action etc) information in the change inspector */
  'changes.inspector.meta-label': 'Meta',
  /** Label for the "to" value in the change inspector */
  'changes.inspector.to-label': 'A',
  /** Loading author of change in the differences tooltip in the review changes pane */
  'changes.loading-author': 'Cargando…',
  /** Loading changes in Review Changes Pane */
  'changes.loading-changes': 'Cargando cambios…',
  /** No Changes description in the Review Changes pane */
  'changes.no-changes-description':
    'Edita el documento o selecciona una versión anterior en la línea de tiempo para ver una lista de cambios en este panel.',
  /** No Changes title in the Review Changes pane */
  'changes.no-changes-title': 'No hay cambios',
  /** Portable Text diff: An annotation was added */
  'changes.portable-text.annotation_added': 'Anotación añadida',
  /** Portable Text diff: An annotation was changed */
  'changes.portable-text.annotation_changed': 'Se cambió la anotación',
  /** Portable Text diff: An annotation was removed */
  'changes.portable-text.annotation_removed': 'Se eliminó la anotación',
  /** Portable Text diff: An annotation was left unchanged */
  'changes.portable-text.annotation_unchanged': 'Anotación sin cambios',
  /** Portable Text diff: A block changed from one style to another (eg `normal` to `h1` or similar) */
  'changes.portable-text.block-style-changed':
    'Se cambió el estilo del bloque de "{{fromStyle}}" a "{{toStyle}}"',
  /** Portable Text diff: Change formatting of text (setting/unsetting marks, eg bold/italic etc) */
  'changes.portable-text.changed-formatting': 'Se cambió el formato',
  /** Portable Text diff: An empty inline object is part of a change */
  'changes.portable-text.empty-inline-object': '{{inlineObjectType}} vacío',
  /** Portable Text diff: An empty object is the result of adding/removing an annotation */
  'changes.portable-text.empty-object-annotation': '{{annotationType}} vacío',
  /** Portable Text diff: Added a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_added': 'Texto vacío añadido',
  /** Portable Text diff: Changed a block that contained no text (eg empty block) */
  'changes.portable-text.empty-text_changed': 'Texto vacío cambiado',
  /** Portable Text diff: Removed a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_removed': 'Texto vacío eliminado',
  /** Portable Text diff: An inline object was added */
  'changes.portable-text.inline-object_added': 'Se agregó objeto en línea',
  /** Portable Text diff: An inline object was changed */
  'changes.portable-text.inline-object_changed': 'Se cambió objeto en línea',
  /** Portable Text diff: An inline object was removed */
  'changes.portable-text.inline-object_removed': 'Se eliminó objeto en línea',
  /** Portable Text diff: An inline object was left unchanged */
  'changes.portable-text.inline-object_unchanged': 'Objeto en línea sin cambios',
  /** Portable Text diff: Added a chunk of text */
  'changes.portable-text.text_added': 'Texto añadido',
  /** Portable Text diff: Removed a chunk of text */
  'changes.portable-text.text_removed': 'Texto eliminado',
  /** Portable Text diff: Annotation has an unknown schema type */
  'changes.portable-text.unknown-annotation-schema-type': 'Tipo de esquema desconocido',
  /** Portable Text diff: Inline object has an unknown schema type */
  'changes.portable-text.unknown-inline-object-schema-type': 'Tipo de esquema desconocido',
  /** Label for when the action of the change was a removal, eg a field was cleared, an array item was removed, an asset was deselected or similar */
  'changes.removed-label': 'Eliminado',
  /** Title for the Review Changes pane */
  'changes.title': 'Revisar cambios',

  /** --- Common components --- */
  /** Tooltip text for context menu buttons */
  'common.context-menu-button.tooltip': 'Mostrar más',
  /** Default text for dialog cancel button */
  'common.dialog.cancel-button.text': 'Cancelar',
  /** Default text for dialog confirm button */
  'common.dialog.confirm-button.text': 'Confirmar',
  /** Default text in shared loader text / spinner lockup */
  'common.loading': 'Cargando',

  /** --- Configuration issues --- */
  /** Tooltip displayed on configuration issues button */
  'configuration-issues.button.tooltip': 'Se encontraron problemas de configuración',

  /** The fallback title for an ordering menu item if no localized titles are provided. */
  'default-menu-item.fallback-title': 'Ordenar por {{title}}',

  /** Title for the default ordering/SortOrder if no orderings are provided and the caption field is found */
  'default-orderings.caption': 'Ordenar por Subtítulo',
  /** Title for the default ordering/SortOrder if no orderings are provided and the description field is found */
  'default-orderings.description': 'Ordenar por Descripción',
  /** Title for the default ordering/SortOrder if no orderings are provided and the header field is found */
  'default-orderings.header': 'Ordenar por Encabezado',
  /** Title for the default ordering/SortOrder if no orderings are provided and the heading field is found */
  'default-orderings.heading': 'Ordenar por Título',
  /** Title for the default ordering/SortOrder if no orderings are provided and the label field is found */
  'default-orderings.label': 'Ordenar por Etiqueta',
  /** Title for the default ordering/SortOrder if no orderings are provided and the name field is found */
  'default-orderings.name': 'Ordenar por Nombre',
  /** Title for the default ordering/SortOrder if no orderings are provided and the title field is found */
  'default-orderings.title': 'Ordenar por Título',

  /** Label to show in the document footer indicating the last edited date of the document */
  'document-status.edited': 'Editado {{date}}',
  /** Label to show in the document footer indicating the document is not published*/
  'document-status.not-published': 'No publicado',
  /** Label to show in the document footer indicating the published date of the document */
  'document-status.published': 'Publicado {{date}}',

  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.duplicate-keys-alert.details.additional-description':
    'El valor de la propiedad <code>_key</code> debe ser una cadena única.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property of each elements has been generated non-uniquely. */
  'form.error.duplicate-keys-alert.details.description':
    'Esto suele ocurrir cuando los elementos se crean utilizando un cliente de API, y la propiedad <code>_key</code> de cada elemento se ha generado de manera no única.',
  /** Developer info */
  'form.error.duplicate-keys-alert.details.title': 'Información para desarrolladores',
  /** Generate unique keys */
  'form.error.duplicate-keys-alert.generate-button.text': 'Generar claves únicas',
  /** Several items in this list share the same identifier (key). Every item must have an unique identifier. */
  'form.error.duplicate-keys-alert.summary':
    'Varios elementos en esta lista comparten el mismo identificador (clave). Cada elemento debe tener un identificador único.',
  /** Non-unique keys */
  'form.error.duplicate-keys-alert.title': 'Claves no únicas',
  /** Error text shown when a field with a given name cannot be found in the schema or is conditionally hidden but explicitly told to render  */
  'form.error.field-not-found':
    'Campo "{{fieldName}}" no encontrado entre los miembros – verifique que esté definido en el esquema y que no haya sido ocultado condicionalmente.',
  /** Add missing keys */
  'form.error.missing-keys-alert.add-button.text': 'Añadir claves faltantes',
  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.missing-keys-alert.details.additional-description':
    'El valor de la propiedad <code>_key</code> debe ser una cadena única.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property has not been included. */
  'form.error.missing-keys-alert.details.description':
    'Esto suele ocurrir cuando los elementos se crean utilizando un cliente de API y no se ha incluido la propiedad <code>_key</code>.',
  /** Developer info */
  'form.error.missing-keys-alert.details.title': 'Información para desarrolladores',
  /** Some items in the list are missing their keys. This must be fixed in order to edit the list. */
  'form.error.missing-keys-alert.summary':
    'A algunos elementos de la lista les faltan sus claves. Esto debe corregirse para poder editar la lista.',
  /** Missing keys */
  'form.error.missing-keys-alert.title': 'Claves faltantes',
  /** This usually happens when items are created using an API client, or when a custom input component has added invalid data to the list. */
  'form.error.mixed-array-alert.details.description':
    'Esto suele ocurrir cuando los elementos se crean utilizando un cliente de API, o cuando un componente de entrada personalizado ha agregado datos inválidos a la lista.',
  /** Developer info */
  'form.error.mixed-array-alert.details.title': 'Información para desarrolladores',
  /**  Remove non-object values */
  'form.error.mixed-array-alert.remove-button.text': 'Eliminar valores que no son objetos',
  /** Some items in this list are not objects. This must be fixed in order to edit the list. */
  'form.error.mixed-array-alert.summary':
    'Algunos elementos de esta lista no son objetos. Esto debe corregirse para poder editar la lista.',
  /** Invalid list values */
  'form.error.mixed-array-alert.title': 'Valores de lista inválidos',
  /** Error text shown when form is unable to find an array item at a given indexed path */
  'form.error.no-array-item-at-index':
    'No se encontró un elemento de arreglo en el índice <code>{{index}}</code> en la ruta <code>{{path}}</code>',
  /** Error text shown when form is unable to find an array item at a given keyed path */
  'form.error.no-array-item-at-key':
    'No se encontró un elemento de arreglo con `_key` <code>"{{key}}"</code> en la ruta <code>{{path}}</code>',
  /** Form field deprecated label */
  'form.field.deprecated-label': 'obsoleto',
  /** Fallback title shown above field if it has no defined title */
  'form.field.untitled-field-label': 'Sin título',
  /** Fallback title shown above fieldset if it has no defined title */
  'form.field.untitled-fieldset-label': 'Sin título',
  /** Accessibility label for the icon that indicates the field has a validation error */
  'form.validation.has-error-aria-label': 'Tiene error',
  /** Accessibility label for the icon that indicates the field has validation information */
  'form.validation.has-info-aria-label': 'Tiene información',
  /** Accessibility label for the icon that indicates the field has a validation warning */
  'form.validation.has-warning-aria-label': 'Tiene advertencia',
  /** Text shown when summarizing validation information, when the field has one or more errors */
  'form.validation.summary.errors-count_one': '{{count}} error',
  'form.validation.summary.errors-count_other': '{{count}} errores',
  /** Text shown when summarizing validation information, when the field has one or more warnings */
  'form.validation.summary.warnings-count_one': '{{count}} advertencia',
  'form.validation.summary.warnings-count_other': '{{count}} advertencias',

  /** Tooltip for free trial navbar button indicating remaining days */
  'free-trial.tooltip.days-count_one': '{{count}} día restante en el periodo de prueba',
  'free-trial.tooltip.days-count_other': '{{count}} días restantes en el periodo de prueba',
  /** Tooltip for free trial navbar button, once trial has ended */
  'free-trial.tooltip.trial-finished': 'Actualiza tu proyecto',

  /**
   * Label for "contact sales" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.contact-sales': 'Contactar ventas',
  /**
   * Label for "help and support" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.help-and-support': 'Ayuda y soporte',
  /**
   * Label for "join our community" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.join-our-community': 'Únete a nuestra comunidad',
  /** Information for what the latest sanity version is */
  'help-resources.latest-sanity-version': 'La última versión es {{latestVersion}}',
  /** Information for what studio version the current studio is running */
  'help-resources.studio-version': 'Versión de Sanity Studio {{studioVersion}}',
  /** Title for help and resources menus */
  'help-resources.title': 'Ayuda y recursos',

  /** Text for button to cancel an ongoing upload */
  'input.files.common.cancel-upload': 'Cancelar',
  /** Text for file input button in upload placeholder */
  'input.files.common.upload-placeholder.file-input-button.text': 'Subir',
  /** Uploading <FileName/> */
  'input.files.common.upload-progress': 'Subiendo <FileName/>',
  /** The referenced document cannot be opened, because the URL failed to be resolved */
  'input.reference.document-cannot-be-opened.failed-to-resolve-url':
    'Este documento no se puede abrir (no se puede resolver la URL al Estudio)',

  /** Label for adding item after a specific array item */
  'inputs.array.action.add-after': 'Añadir elemento después',
  /** Label for adding item before a specific array item */
  'inputs.array.action.add-before': 'Añadir elemento antes',
  /** Label for adding array item action when the schema allows for only one schema type */
  'inputs.array.action.add-item': 'Añadir elemento',
  /**
   * Label for adding one array item action when the schema allows for multiple schema types,
   * eg. will prompt the user to select a type once triggered
   */
  'inputs.array.action.add-item-select-type': 'Añadir elemento...',
  /** Array drag handle button tooltip */
  'inputs.array.action.drag.tooltip': 'Arrastrar para reordenar',
  /** Label for duplicating an array item  */
  'inputs.array.action.duplicate': 'Duplicar',
  /** Label for editing the item of a specific type, eg "Edit Person" */
  'inputs.array.action.edit': 'Editar {{itemTypeTitle}}',
  /** Label for removing an array item action  */
  'inputs.array.action.remove': 'Eliminar',
  /** Label for removing action when an array item has an error  */
  'inputs.array.action.remove-invalid-item': 'Eliminar',
  /** Label for viewing the item of a specific type, eg "View Person" */
  'inputs.array.action.view': 'Ver {{itemTypeTitle}}',
  /** Error description for the array item tooltip that explains that the current item can still be moved or deleted but not edited since the schema definition is not found */
  'inputs.array.error.can-delete-but-no-edit-description':
    'Todavía puedes mover o eliminar este elemento, pero no se puede editar ya que la definición del esquema para su tipo no se encuentra en ninguna parte.',
  /** Error label for toast when array could not resolve the initial value */
  'inputs.array.error.cannot-resolve-initial-value-title':
    'No se puede resolver el valor inicial para el tipo: {{schemaTypeTitle}}: {{errorMessage}}.',
  /** Error label for toast when trying to upload one array item of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_one':
    'El siguiente elemento no se puede subir porque no hay una conversión conocida del tipo de contenido a elemento de array:',
  /** Error label for toast when trying to upload multiple array items of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_other':
    'Los siguientes elementos no se pueden subir porque no hay una conversión conocida de los tipos de contenido a elemento de array:',
  /** Error description for the array item tooltip that explains that the current type item is not valid for the list  */
  'inputs.array.error.current-schema-not-declare-description':
    'El esquema actual no declara elementos de tipo <code>{{typeName}}</code> como válidos para esta lista. Esto podría significar que el tipo ha sido eliminado como un tipo de elemento válido, o que alguien más lo ha agregado a su propio esquema local que aún no está desplegado.',
  /** Error description to show how the item is being represented in the json format */
  'inputs.array.error.json-representation-description': 'Representación JSON de este elemento:',
  /** Error description for the array item tooltip that explains what the error means with more context */
  'inputs.array.error.type-is-incompatible-prompt':
    'Elemento de tipo <code>{{typeName}}</code> no válido para esta lista',
  /** Error title for when an item type within an array input is incompatible, used in the tooltip */
  'inputs.array.error.type-is-incompatible-title': '¿Por qué está sucediendo esto?',
  /** Error label for unexpected errors in the Array Input */
  'inputs.array.error.unexpected-error': 'Error inesperado: {{error}}',
  /** Label for when the array input doesn't have any items */
  'inputs.array.no-items-label': 'No hay elementos',
  /** Label for read only array fields */
  'inputs.array.read-only-label': 'Este campo es de solo lectura',
  /** Label for when the array input is resolving the initial value for the item */
  'inputs.array.resolving-initial-value': 'Resolviendo valor inicial…',
  /** Placeholder value for datetime input */
  'inputs.datetime.placeholder': 'p. ej. {{example}}',
  /** Acessibility label for button to open file options menu */
  'inputs.file.actions-menu.file-options.aria-label': 'Abrir el menú de opciones de archivo',
  /** Browse */
  'inputs.file.browse-button.text': 'Explorar',
  /** Select file */
  'inputs.file.dialog.title': 'Seleccionar archivo',
  /** Unknown member kind: `{{kind}}` */
  'inputs.file.error.unknown-member-kind': 'Tipo de miembro desconocido: {{kind}}',
  /** The value of this field is not a valid file. Resetting this field will let you choose a new file. */
  'inputs.file.invalid-file-warning.description':
    'El valor de este campo no es un archivo válido. Restablecer este campo te permitirá elegir un nuevo archivo.',
  /** Reset value */
  'inputs.file.invalid-file-warning.reset-button.text': 'Restablecer valor',
  /** Invalid file value */
  'inputs.file.invalid-file-warning.title': 'Valor de archivo no válido',
  /** Select */
  'inputs.file.multi-browse-button.text': 'Seleccionar',
  /** The upload could not be completed at this time. */
  'inputs.file.upload-failed.description': 'La carga no se pudo completar en este momento.',
  /** Upload failed */
  'inputs.file.upload-failed.title': 'Fallo en la carga',
  /** Clear field */
  'inputs.files.common.actions-menu.clear-field.label': 'Limpiar campo',
  /** Copy URL */
  'inputs.files.common.actions-menu.copy-url.label': 'Copiar URL',
  /** Download */
  'inputs.files.common.actions-menu.download.label': 'Descargar',
  /** The URL is copied to the clipboard */
  'inputs.files.common.actions-menu.notification.url-copied':
    'La URL se ha copiado al portapapeles',
  /** Replace */
  'inputs.files.common.actions-menu.replace.label': 'Reemplazar',
  /** Upload */
  'inputs.files.common.actions-menu.upload.label': 'Subir',
  /** Drop to upload */
  'inputs.files.common.drop-message.drop-to-upload': 'Suelta para subir',
  /** Drop to upload `{{count}}` file */
  'inputs.files.common.drop-message.drop-to-upload-multi_one':
    'Suelta para subir {{count}} archivo',
  /** Drop to upload `{{count}}` files */
  'inputs.files.common.drop-message.drop-to-upload-multi_other':
    'Suelta para subir {{count}} archivos',
  /** Can't upload this file here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_one':
    'No se puede subir este archivo aquí',
  /** Can't upload any of these files here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_other':
    'No se pueden subir ninguno de estos archivos aquí',
  /** `{{count}}` file can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_one':
    '{{count}} archivo no se puede subir aquí',
  /** `{{count}}` files can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_other':
    '{{count}} archivos no se pueden subir aquí',
  /** Cannot upload `{{count}}` files */
  'inputs.files.common.placeholder.cannot-upload-some-files_one': 'No se puede subir archivo',
  'inputs.files.common.placeholder.cannot-upload-some-files_other':
    'No se pueden subir {{count}} archivos',
  /** Drag or paste type here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_file': 'Arrastra o pega el archivo aquí',
  /** Drag or paste image here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_image': 'Arrastra o pega la imagen aquí',
  /** Drop to upload file */
  'inputs.files.common.placeholder.drop-to-upload_file': 'Suelta para subir archivo',
  /** Drop to upload image */
  'inputs.files.common.placeholder.drop-to-upload_image': 'Suelta para subir imagen',
  /** Read only */
  'inputs.files.common.placeholder.read-only': 'Solo lectura',
  /** Can't upload files here */
  'inputs.files.common.placeholder.upload-not-supported': 'No se pueden subir archivos aquí',
  /** Clear upload */
  'inputs.files.common.stale-upload-warning.clear': 'Borrar subida',
  /** An upload has made no progress for at least `{{staleThresholdMinutes}}` minutes and likely got interrupted. You can safely clear the incomplete upload and try uploading again. */
  'inputs.files.common.stale-upload-warning.description':
    'Una subida no ha progresado durante al menos {{staleThresholdMinutes}} minutos y probablemente se interrumpió. Puedes borrar con seguridad la subida incompleta e intentar subir de nuevo.',
  /** Incomplete upload */
  'inputs.files.common.stale-upload-warning.title': 'Subida incompleta',
  /** Tooltip text for action to crop image */
  'inputs.image.actions-menu.crop-image-tooltip': 'Recortar imagen',
  /** Accessibility label for button to open image edit dialog */
  'inputs.image.actions-menu.edit-details.aria-label': 'Abrir el diálogo de edición de imagen',
  /** Accessibility label for button to open image options menu */
  'inputs.image.actions-menu.options.aria-label': 'Abrir el menú de opciones de imagen',
  /** Select */
  'inputs.image.browse-menu.text': 'Seleccionar',
  /** Cannot upload this file here */
  'inputs.image.drag-overlay.cannot-upload-here': 'No se puede cargar este archivo aquí',
  /** Drop image to upload */
  'inputs.image.drag-overlay.drop-to-upload-image': 'Suelta la imagen para cargar',
  /** This field is read only */
  'inputs.image.drag-overlay.this-field-is-read-only': 'Este campo es de solo lectura',
  /** Unknown member kind: `{{kind}}` */
  'inputs.image.error.unknown-member-kind': 'Tipo de miembro desconocido: {{kind}}',
  /** Edit hotspot and crop */
  'inputs.image.hotspot-dialog.title': 'Editar punto de enfoque y recorte',
  /** The value of this field is not a valid image. Resetting this field will let you choose a new image. */
  'inputs.image.invalid-image-warning.description':
    'El valor de este campo no es una imagen válida. Restablecer este campo te permitirá elegir una nueva imagen.',
  /** Reset value */
  'inputs.image.invalid-image-warning.reset-button.text': 'Restablecer valor',
  /** Invalid image value */
  'inputs.image.invalid-image-warning.title': 'Valor de imagen no válido',
  /** Preview of uploaded image */
  'inputs.image.preview-uploaded-image': 'Vista previa de la imagen cargada',
  /** The upload could not be completed at this time. */
  'inputs.image.upload-error.description': 'La carga no se pudo completar en este momento.',
  /** Upload failed */
  'inputs.image.upload-error.title': 'La carga falló',
  /** Adjust the rectangle to crop image. Adjust the circle to specify the area that should always be visible. */
  'inputs.imagetool.description':
    'Ajusta el rectángulo para recortar la imagen. Ajusta el círculo para especificar el área que siempre debe estar visible.',
  /** Error: `{{errorMessage}}` */
  'inputs.imagetool.load-error': 'Error: {{errorMessage}}',
  /** Hotspot & Crop */
  'inputs.imagetool.title': 'Hotspot & Crop',
  /** Convert to `{{targetType}}` */
  'inputs.invalid-value.convert-button.text': 'Convertir a <code>{{targetType}}</code>',
  /** The current value (<code>`{{actualType}}`</code>) */
  'inputs.invalid-value.current-type': 'El valor actual (<code>{{actualType}}</code>)',
  /** The property value is stored as a value type that does not match the expected type. */
  'inputs.invalid-value.description':
    'El valor de la propiedad está almacenado como un tipo de valor que no coincide con el tipo esperado.',
  /** The value of this property must be of type <code>`{{validType}}`</code> according to the schema. */
  'inputs.invalid-value.details.description':
    'El valor de esta propiedad debe ser del tipo <code>{{validType}}</code> según el esquema.',
  /** Only the following types are valid here according to schema: */
  'inputs.invalid-value.details.multi-type-description':
    'Solo los siguientes tipos son válidos aquí según el esquema:',
  /** Mismatching value types typically occur when the schema has recently been changed. */
  'inputs.invalid-value.details.possible-reason':
    'Los tipos de valor que no coinciden suelen ocurrir cuando el esquema ha sido cambiado recientemente.',
  /** Developer info */
  'inputs.invalid-value.details.title': 'Información para desarrolladores',
  /** -- Invalid Value Input -- */
  /** Reset value */
  'inputs.invalid-value.reset-button.text': 'Restablecer valor',
  /** Invalid property value */
  'inputs.invalid-value.title': 'Valor de propiedad inválido',
  /** Field groups */
  'inputs.object.field-group-tabs.aria-label': 'Grupos de campos',
  /** Read-only field description */
  'inputs.object.unknown-fields.read-only.description':
    'Este campo es <strong>solo lectura</strong> según el esquema del documento y no puede ser eliminado. Si quieres poder eliminar esto en Studio, asegúrate de quitar el campo <code>readOnly</code> del tipo que lo encierra en el esquema.',
  /** Remove field */
  'inputs.object.unknown-fields.remove-field-button.text': 'Eliminar campo',
  /** Encountered `{{count}}` fields that are not defined in the schema. */
  'inputs.object.unknown-fields.warning.description_one':
    'Se encontró un campo que no está definido en el esquema.',
  'inputs.object.unknown-fields.warning.description_other':
    'Se encontraron {{count}} campos que no están definidos en el esquema.',
  /** Detailed description of unknown field warning */
  'inputs.object.unknown-fields.warning.details.description_one':
    'Este campo no está definido en el esquema, lo que podría significar que la definición del campo ha sido eliminada o que alguien más lo ha añadido a su propio proyecto local y aún no ha desplegado sus cambios.',
  'inputs.object.unknown-fields.warning.details.description_other':
    'Estos campos no están definidos en el esquema del documento, lo que podría significar que las definiciones de los campos han sido eliminadas o que alguien más los ha añadido a su propio proyecto local y aún no ha desplegado sus cambios.',
  /** Developer info */
  'inputs.object.unknown-fields.warning.details.title': 'Información para desarrolladores',
  /** Unknown field found */
  'inputs.object.unknown-fields.warning.title_one': 'Campo desconocido encontrado',
  'inputs.object.unknown-fields.warning.title_other': 'Campos desconocidos encontrados',
  /** Collapse the editor to save screen space  */
  'inputs.portable-text.action.collapse-editor': 'Contraer editor',
  /** Aria label for action to edit an existing annotation */
  'inputs.portable-text.action.edit-annotation-aria-label': 'Editar anotación',
  /** Expand the editor to give more editing space */
  'inputs.portable-text.action.expand-editor': 'Expandir editor',
  /** Label label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block': 'Insertar {{typeName}}',
  /** Accessibility label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block-aria-label': 'Insertar {{typeName}} (bloque)',
  /** Label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object': 'Insertar {{typeName}}',
  /** Accessibility label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object-aria-label': 'Insertar {{typeName}} (en línea)',
  /** Aria label for action to remove an annotation */
  'inputs.portable-text.action.remove-annotation-aria-label': 'Eliminar anotación',
  /** Label for activate on focus with context of click and not focused */
  'inputs.portable-text.activate-on-focus-message_click': 'Haz clic para activar',
  /** Label for activate on focus with context of click and focused */
  'inputs.portable-text.activate-on-focus-message_click-focused':
    'Haz clic o presiona espacio para activar',
  /** Label for activate on focus with context of tap and not focused */
  'inputs.portable-text.activate-on-focus-message_tap': 'Toca para activar',
  /**Aria label for the annotation object */
  'inputs.portable-text.annotation-aria-label': 'Objeto de anotación',
  /** Title for dialog that allows editing an annotation */
  'inputs.portable-text.annotation-editor.title': 'Editar {{schemaType}}',
  /** Title of the default "link" annotation */
  'inputs.portable-text.annotation.link': 'Enlace',
  /**Aria label for the block object */
  'inputs.portable-text.block.aria-label': 'Objeto de bloque',
  /** Label for action to edit a block item, in the case where it is editable */
  'inputs.portable-text.block.edit': 'Editar',
  /** Accessibility label for the button that opens the actions menu on blocks */
  'inputs.portable-text.block.open-menu-aria-label': 'Abrir menú',
  /** Label for action to open a reference, in the case of block-level reference types */
  'inputs.portable-text.block.open-reference': 'Abrir referencia',
  /** Label for action to remove a block item */
  'inputs.portable-text.block.remove': 'Eliminar',
  /** Label for action to view a block item, in the case where it is read-only and thus cannot be edited */
  'inputs.portable-text.block.view': 'Ver',
  /** Title of the "code" decorator */
  'inputs.portable-text.decorator.code': 'Código',
  /** Title of the "em" (emphasis) decorator */
  'inputs.portable-text.decorator.emphasis': 'Cursiva',
  /** Title of the "strike-through" decorator */
  'inputs.portable-text.decorator.strike-through': 'Tachado',
  /** Title of the "strong" decorator */
  'inputs.portable-text.decorator.strong': 'Negrita',
  /** Title of the "underline" decorator */
  'inputs.portable-text.decorator.underline': 'Subrayado',
  /** Placeholder text for when the editor is empty */
  'inputs.portable-text.empty-placeholder': 'Vacío',
  /**Aria label for the block object */
  'inputs.portable-text.inline-block.aria-label': 'Objeto en línea',
  /** Label for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit': 'Editar objeto',
  /** Aria label for icon for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit-aria-label': 'Editar objeto',
  /** Label for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove': 'Eliminar objeto',
  /** Aria label for icon for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove-aria-label': 'Eliminar objeto',
  /** Disclaimer text shown on invalid Portable Text value, when an action is available to unblock the user, but it is not guaranteed to be safe */
  'inputs.portable-text.invalid-value.action-disclaimer':
    'NOTA: Generalmente es seguro realizar la acción anterior, pero si tienes dudas, ponte en contacto con los responsables de configurar tu estudio.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.action': 'Eliminar el objeto',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.description':
    'El hijo con clave {{childKey}} del bloque con clave <code>{{key}}</code> es del tipo <code>{{childType}}</code>, lo cual no está permitido por el esquema.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.action': 'Eliminar el bloque',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.description':
    'El bloque con clave <code>{{key}}</code> es del tipo <code>{{typeName}}</code>, el cual no está permitido por el esquema.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.action': 'Insertar tramo de texto vacío',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.description':
    'Bloque de texto con clave <code>{{key}}</code> no tiene tramos de texto.',
  /** Label for the button to ignore invalid values in the Portable Text editor */
  'inputs.portable-text.invalid-value.ignore-button.text': 'Ignorar',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.action':
    'Usar tipo <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.description':
    'El bloque con clave <code>{{key}}</code> tiene un nombre de tipo inválido. Según el esquema, debería ser <code>{{expectedTypeName}}</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.action': 'Establecer valor de texto vacío',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.description':
    'El tramo con clave {{childKey}} del bloque con clave <code>{{key}}</code> tiene una propiedad <code>text</code> faltante o inválida.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.action':
    'Usar tipo <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.description':
    'El bloque con clave <code>{{key}}</code> no tiene un nombre de tipo. Según el esquema, debería ser <code>{{expectedTypeName}}</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.action': 'Asignar clave aleatoria',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.description':
    'El hijo en el índice <code>{{index}}</code> del bloque con clave <code>{{key}}</code> no tiene la propiedad <code>_key</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.action': 'Eliminar el objeto',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.description':
    'El hijo con clave {{childKey}} del bloque con clave <code>{{key}}</code> no tiene la propiedad <code>_type</code>.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.action': 'Asignar clave aleatoria',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.description':
    'El bloque en el índice <code>{{index}}</code> no tiene la propiedad <code>_key</code> requerida.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.action': 'Eliminar el bloque',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.description':
    'Bloque de texto con clave <code>{{key}}</code> tiene una propiedad `children` inválida o faltante.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.action': 'Añadir propiedad',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.description':
    'Bloque de texto con clave <code>{{key}}</code> tiene una propiedad `markDefs` inválida o faltante.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.action': 'Eliminar el bloque',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.description':
    'El bloque con clave <code>{{key}}</code> no tiene un nombre de tipo.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.action': 'Eliminar el elemento',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.description':
    'El hijo en el índice <code>{{index}}</code> del bloque con clave <code>{{key}}</code> no es un objeto.',
  /** Action presented when the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.action': 'Desestablecer el valor',
  /** Text explaining that the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.description':
    'El valor debe ser un arreglo de bloques de Texto Portable o indefinido.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.action': 'Eliminar elemento',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.description':
    'El elemento en <code>{{index}}</code> no es un objeto.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.action': 'Eliminar marcas no permitidas',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.description':
    'Bloque de texto con clave <code>{{key}}</code> contiene marcas <code>({{orphanedMarks, list}})</code> que no están permitidas por el esquema.',
  /** Title for the alert indicating that the Portable Text field has an invalid value */
  'inputs.portable-text.invalid-value.title': 'Valor de Texto Portable inválido',
  /** Title of "bulleted" list type */
  'inputs.portable-text.list-type.bullet': 'Lista con viñetas',
  /** Title of numbered list type */
  'inputs.portable-text.list-type.number': 'Lista numerada',
  /** Title of the "h1" block style */
  'inputs.portable-text.style.h1': 'Encabezado 1',
  /** Title of the "h2" block style */
  'inputs.portable-text.style.h2': 'Encabezado 2',
  /** Title of the "h3" block style */
  'inputs.portable-text.style.h3': 'Encabezado 3',
  /** Title of the "h4" block style */
  'inputs.portable-text.style.h4': 'Encabezado 4',
  /** Title of the "h5" block style */
  'inputs.portable-text.style.h5': 'Encabezado 5',
  /** Title of the "h6" block style */
  'inputs.portable-text.style.h6': 'Encabezado 6',
  /** Title shown when multiple blocks of varying styles is selected */
  'inputs.portable-text.style.multiple': 'Múltiples',
  /** Title of fallback when no style is given for a block */
  'inputs.portable-text.style.none': 'Sin estilo',
  /** Title of the "normal" block style */
  'inputs.portable-text.style.normal': 'Normal',
  /** Title of the "quote" block style */
  'inputs.portable-text.style.quote': 'Cita',
  /** Label for action to clear the current value of the reference field */
  'inputs.reference.action.clear': 'Limpiar',
  /** Label for action to create a new document from the reference input */
  'inputs.reference.action.create-new-document': 'Crear nuevo',
  /** Label for action to create a new document from the reference input, when there are multiple templates or document types to choose from */
  'inputs.reference.action.create-new-document-select': 'Crear nuevo…',
  /** Label for action to duplicate the current item to a new item (used within arrays) */
  'inputs.reference.action.duplicate': 'Duplicar',
  /** Label for action that opens the referenced document in a new tab */
  'inputs.reference.action.open-in-new-tab': 'Abrir en una nueva pestaña',
  /** Label for action to remove the reference from an array */
  'inputs.reference.action.remove': 'Eliminar',
  /** Label for action to replace the current value of the field */
  'inputs.reference.action.replace': 'Reemplazar',
  /** Label for action to cancel a previously initiated replace action  */
  'inputs.reference.action.replace-cancel': 'Cancelar reemplazo',
  /** The cross-dataset reference field currently has a reference, but the feature has been disabled since it was created. This explains what can/cannot be done in its current state. */
  'inputs.reference.cross-dataset.feature-disabled-actions':
    'Todavía puedes borrar la referencia existente de este campo, pero no se puede cambiar a un documento diferente mientras la función esté deshabilitada.',
  /** A cross-dataset reference field exists but the feature has been disabled. A <DocumentationLink> component is available. */
  'inputs.reference.cross-dataset.feature-disabled-description':
    'Esta función ha sido deshabilitada. Lee cómo habilitarla en <DocumentationLink>la documentación</DocumentationLink>.',
  /** Title for a warning telling the user that the current project does not have the "cross dataset references" feature */
  'inputs.reference.cross-dataset.feature-unavailable-title':
    'Función no disponible: Referencia entre conjuntos de datos',
  /** The cross-dataset reference points to a document with an invalid type  */
  'inputs.reference.cross-dataset.invalid-type':
    'El documento referenciado es de un tipo inválido ({{typeName}}) <JsonValue/>',
  /** The referenced document will open in a new tab (due to external studio) */
  'inputs.reference.document-opens-in-new-tab': 'Este documento se abrirá en una nueva pestaña',
  /** Error title for when the document is unavailable (for any possible reason) */
  'inputs.reference.error.document-unavailable-title': 'Documento no disponible',
  /** Error title for when the referenced document failed to be loaded */
  'inputs.reference.error.failed-to-load-document-title':
    'Falló la carga del documento referenciado',
  /** Error title for when the reference search returned a document that is not an allowed type for the field */
  'inputs.reference.error.invalid-search-result-type-title':
    'La búsqueda devolvió un tipo que no es válido para esta referencia: "{{returnedType}}"',
  /** Error description for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-description':
    'El documento referenciado (<code>{{documentId}}</code>) es del tipo <code>{{actualType}}</code>. Según el esquema, los documentos referenciados solo pueden ser del tipo <AllowedTypes />.',
  /** Error title for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-title': 'Documento de tipo inválido',
  /** Error description for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-description':
    'No se pudo acceder al documento referenciado debido a permisos insuficientes',
  /** Error title for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-title': 'Permisos insuficientes',
  /** Error description for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-description':
    'El documento referenciado no existe (ID: <code>{{documentId}}</code>). Puedes eliminar la referencia o reemplazarla con otro documento.',
  /** Error title for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-title': 'No encontrado',
  /** Label for button that clears the reference when it points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document.clear-button-label': 'Limpiar',
  /** Error title for when the search for a reference failed. Note that the message sent by the backend may not be localized. */
  'inputs.reference.error.search-failed-title': 'Falló la búsqueda de referencia',
  /** Alternative text for the image shown in cross-dataset reference input */
  'inputs.reference.image-preview-alt-text': 'Vista previa de la imagen del documento referenciado',
  /** Description for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-description':
    '<strong>{{referencedDocument}}</strong> está publicado y esta referencia ahora debe ser finalizada.',
  /** Title for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-title': 'Finalizar referencia',
  /** Description for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-description':
    '<strong>{{referencedDocument}}</strong> está publicado y esta referencia ahora debe ser convertida a una referencia fuerte.',
  /** Title for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-title': 'Convertir a referencia fuerte',
  /** Label for button that triggers the action that strengthen a reference */
  'inputs.reference.incomplete-reference.strengthen-button-label': 'Convertir a referencia fuerte',
  /** Label for button that triggers a retry attempt for reference metadata  */
  'inputs.reference.metadata-error.retry-button-label': 'Reintentar',
  /** Title for alert shown when reference metadata fails to be loaded */
  'inputs.reference.metadata-error.title': 'No se pueden cargar los metadatos de referencia',
  /** Message shown when no documents were found that matched the given search string */
  'inputs.reference.no-results-for-query':
    'No se encontraron resultados para <strong>“{{searchTerm}}”</strong>',
  /** Text for tooltip showing when a document was edited, using relative time (eg "how long ago was it edited?") */
  'inputs.reference.preview.edited-at-time': 'Editado <RelativeTime/>',
  /** Accessibility label for icon indicating that document does _not_ have any unpublished changes */
  'inputs.reference.preview.has-no-unpublished-changes-aria-label': 'Sin ediciones no publicadas',
  /** Accessibility label for icon indicating that document has unpublished changes */
  'inputs.reference.preview.has-unpublished-changes-aria-label': 'Editado',
  /** Accessibility label for icon indicating that document does _not_ have a published version */
  'inputs.reference.preview.is-not-published-aria-label': 'No publicado',
  /** Accessibility label for icon indicating that document has a published version */
  'inputs.reference.preview.is-published-aria-label': 'Publicado',
  /** Text for tooltip indicating that a document has no unpublished edits */
  'inputs.reference.preview.no-unpublished-edits': 'Sin ediciones no publicadas',
  /** Text for tooltip indicating that a document has not yet been published */
  'inputs.reference.preview.not-published': 'No publicado',
  /** Text for tooltip showing when a document was published, using relative time (eg "how long ago was it published?") */
  'inputs.reference.preview.published-at-time': 'Publicado <RelativeTime/>',
  /** The referenced document no longer exist and might have been deleted (for weak references) */
  'inputs.reference.referenced-document-does-not-exist':
    'El documento referenciado ya no existe y podría haber sido eliminado (ID del documento: <code>{{documentId}}</code>).',
  /** The referenced document could not be displayed to the user because of insufficient permissions */
  'inputs.reference.referenced-document-insufficient-permissions':
    'No se pudo acceder al documento referenciado debido a permisos insuficientes',
  /** Label for when the reference input is resolving the initial value for an item */
  'inputs.reference.resolving-initial-value': 'Resolviendo valor inicial…',
  /** Placeholder shown in a reference input with no current value */
  'inputs.reference.search-placeholder': 'Escriba para buscar',
  /** Explanation of the consequences of leaving the reference as strong instead of weak */
  'inputs.reference.strength-mismatch.is-strong-consquences':
    'No será posible eliminar el documento de referencia sin antes eliminar esta referencia o convertirla en débil.',
  /** Description for alert shown when a reference is supposed to be weak, but the actual value is strong */
  'inputs.reference.strength-mismatch.is-strong-description':
    'Esta referencia es <em>fuerte</em>, pero según el esquema actual debería ser <em>débil</em>.',
  /** Explanation of the consequences of leaving the reference as weak instead of strong */
  'inputs.reference.strength-mismatch.is-weak-consquences':
    'Esto hace posible eliminar el documento referenciado sin antes eliminar esta referencia, dejando este campo haciendo referencia a un documento inexistente.',
  /** Description for alert shown when a reference is supposed to be strong, but the actual value is weak */
  'inputs.reference.strength-mismatch.is-weak-description':
    'Esta referencia es <em>débil</em>, pero según el esquema actual debería ser <em>fuerte</em>.',
  /** Label for button that triggers the action that strengthens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.strengthen-button-label': 'Convertir a referencia fuerte',
  /** Title for alert shown when a reference is supposed to be weak/strong, but the actual value is the opposite of what it is supposed to be */
  'inputs.reference.strength-mismatch.title': 'Incongruencia en la fortaleza de la referencia',
  /** Label for button that triggers the action that weakens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.weaken-button-label': 'Convertir a referencia débil',
  /** Action message for generating the slug */
  'inputs.slug.action.generate': 'Generar',
  /** Loading message for when the input is actively generating a slug */
  'inputs.slug.action.generating': 'Generando…',
  /** Error message for when the source to generate a slug from is missing */
  'inputs.slug.error.missing-source':
    'Falta la fuente. Verifica la fuente en el tipo {{schemaType}} en el esquema',
  /** Placeholder for an empty tag input */
  'inputs.tags.placeholder': 'Introduce una etiqueta y presiona ENTER…',
  /** Placeholder for an empty tag input on touch devices */
  'inputs.tags.placeholder_touch': 'Introduce una etiqueta…',
  /** Convert to `{{targetType}}` */
  'inputs.untyped-value.convert-button.text': 'Convertir a <code>{{targetType}}</code>',
  /** Encountered an object value without a <code>_type</code> property. */
  'inputs.untyped-value.description':
    'Se encontró un valor de objeto sin la propiedad <code>_type</code>.',
  /** Either remove the <code>name</code> property of the object declaration, or set <code>_type</code> property on items. */
  'inputs.untyped-value.details.description':
    'Elimine la propiedad <code>name</code> de la declaración del objeto, o establezca la propiedad <code>_type</code> en los elementos.',
  /** Current value (<code>object</code>): */
  'inputs.untyped-value.details.json-dump-prefix': 'Valor actual (<code>object</code>):',
  /** The following types are valid here according to schema: */
  'inputs.untyped-value.details.multi-type-description':
    'Los siguientes tipos son válidos aquí según el esquema:',
  /** Developer info */
  'inputs.untyped-value.details.title': 'Información para desarrolladores',
  /** Property value missing <code>_type</code> */
  'inputs.untyped-value.title': 'Falta el valor de la propiedad <code>_type</code>',
  /** Unset value */
  'inputs.untyped-value.unset-item-button.text': 'Desestablecer valor',

  /** The fallback explanation if no context is provided */
  'insufficient-permissions-message.not-authorized-explanation':
    'No tienes permiso para acceder a esta característica.',
  /** The explanation when unable to create any document at all */
  'insufficient-permissions-message.not-authorized-explanation_create-any-document':
    'No tienes permiso para crear un documento.',
  /** The explanation when unable to create a particular document */
  'insufficient-permissions-message.not-authorized-explanation_create-document':
    'No tienes permiso para crear este documento.',
  /** The explanation when unable to create a particular type of document */
  'insufficient-permissions-message.not-authorized-explanation_create-document-type':
    'No tienes permiso para crear este tipo de documento.',
  /** The explanation when unable to create a new reference in a document */
  'insufficient-permissions-message.not-authorized-explanation_create-new-reference':
    'No tienes permiso para crear una nueva referencia.',
  /** The explanation when unable to delete a particular document */
  'insufficient-permissions-message.not-authorized-explanation_delete-document':
    'No tienes permiso para eliminar este documento.',
  /** The explanation when unable to discard changes in a particular document */
  'insufficient-permissions-message.not-authorized-explanation_discard-changes':
    'No tienes permiso para descartar cambios en este documento.',
  /** The explanation when unable to duplicate a particular document */
  'insufficient-permissions-message.not-authorized-explanation_duplicate-document':
    'No tienes permiso para duplicar este documento.',
  /** The explanation when unable to publish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_publish-document':
    'No tienes permiso para publicar este documento.',
  /** The explanation when unable to unpublish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_unpublish-document':
    'No tienes permiso para despublicar este documento.',
  /** Appears after the not-authorized message. Lists the current roles. */
  'insufficient-permissions-message.roles': 'Tus roles: <Roles/>',
  /** The title for the insufficient permissions message component */
  'insufficient-permissions-message.title': 'Permisos insuficientes',

  /** Unexpected error: `{{error}}` */
  'member-field-error.unexpected-error': 'Error inesperado: {{error}}',

  /** Button label for "Create new document" button */
  'new-document.button': 'Crear',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are templates/types available for creation
   */
  'new-document.create-new-document-label': 'Documento nuevo…',
  /** Placeholder for the "filter" input within the new document menu */
  'new-document.filter-placeholder': 'Filtrar',
  /** Loading indicator text within the new document menu */
  'new-document.loading': 'Cargando…',
  /** Accessibility label for the list displaying options in the new document menu */
  'new-document.new-document-aria-label': 'Documento nuevo',
  /** Message for when there are no document type options in the new document menu */
  'new-document.no-document-types-found': 'No se encontraron tipos de documento',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are no templates/types to create from
   */
  'new-document.no-document-types-label': 'No hay tipos de documento',
  /** Message for when no results are found for a specific search query in the new document menu */
  'new-document.no-results': 'No se encontraron resultados para <strong>{{searchQuery}}</strong>',
  /** Aria label for the button that opens the "Create new document" popover/dialog */
  'new-document.open-dialog-aria-label': 'Crear nuevo documento',
  /** Title for "Create new document" dialog */
  'new-document.title': 'Crear nuevo documento',

  /** Label for action to manage members of the current studio project */
  'presence.action.manage-members': 'Gestionar miembros',
  /** Accessibility label for presence menu button */
  'presence.aria-label': 'Quién está aquí',
  /** Message description for when no one else is currently present */
  'presence.no-one-else-description': 'Invita a personas al proyecto para ver su estado en línea.',
  /** Message title for when no one else is currently present */
  'presence.no-one-else-title': 'No hay nadie más aquí',
  /** Message for when a user is not in a document (displayed in the global presence menu) */
  'presence.not-in-a-document': 'No está en un documento',
  /** Tooltip content text for presence menu button */
  'presence.tooltip-content': 'Quién está aquí',

  /** Fallback title shown when a preview does not provide a title */
  'preview.default.title-fallback': 'Sin título',
  /** Fallback preview value for types that have "no value" (eg null, undefined) */
  'preview.fallback.no-value': '(sin valor)',
  /** Alternative text for image being shown while image is being uploaded, in previews */
  'preview.image.file-is-being-uploaded.alt-text': 'La imagen que se está subiendo',

  /* Relative time, just now */
  'relative-time.just-now': 'justo ahora',

  /** Accessibility label to open search action when the search would go fullscreen (eg on narrower screens) */
  'search.action-open-aria-label': 'Abrir búsqueda',
  /** Action label for adding a search filter */
  'search.action.add-filter': 'Añadir filtro',
  /** Action label for clearing search filters */
  'search.action.clear-filters': 'Limpiar filtros',
  /** Label for action to clear recent searches */
  'search.action.clear-recent-searches': 'Borrar búsquedas recientes',
  /** Accessibility label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-aria-label': 'Limpiar filtros marcados',
  /** Label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-label': 'Limpiar',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to close the search */
  'search.action.close-search-aria-label': 'Cerrar búsqueda',
  /** Accessibility label for filtering by document type */
  'search.action.filter-by-document-type-aria-label': 'Filtrar por tipo de documento',
  /** Accessibility action label for removing an already applied search filter */
  'search.action.remove-filter-aria-label': 'Eliminar filtro',
  /**
   * Text displayed when either no document type(s) have been selected, or we need a fallback,
   * eg "Search for all types".
   */
  'search.action.search-all-types': 'Buscar todos los documentos',
  /**
   * Text displayed when we are able to determine one or more document types that will be used for
   * searching, and can fit within the space assigned by the design.
   */
  'search.action.search-specific-types': 'Buscar {{types, list}}',
  /**
   * Text displayed when we are able to determine one or more document types that will be used for
   * searching, but cannot list them all within the space assigned by the design, so we need an
   * additional "and X more" suffix. Allows using pluralization suffixes, eg `_one`, `_other` etc.
   */
  'search.action.search-specific-types-truncated': 'Buscar {{types, list}} +{{count}} más',
  /** Dialog title for action to select an asset of unknown type */
  'search.action.select-asset': 'Seleccionar archivo',
  /** Dialog title for action to select a file asset */
  'search.action.select-asset_file': 'Seleccionar archivo',
  /** Dialog title for action to select an image asset */
  'search.action.select-asset_image': 'Seleccionar imagen',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-aria-label_hide': 'Ocultar filtros',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-aria-label_show': 'Mostrar filtros',
  /** Label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-label_hide': 'Ocultar filtros',
  /** Label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-label_show': 'Mostrar filtros',
  /** Tooltip text for the global search button */
  'search.button.tooltip': 'Buscar',
  /**
   * A list of provided types (use `list` formatter preferably).
   */
  'search.document-type-list': '{{types, list}}',
  /**
   * In the context of a list of document types - no filtering selection has been done,
   * thus the default is "all types".
   */
  'search.document-type-list-all-types': 'Todos los tipos',
  /**
   * A list of provided types that has been truncated - more types are included but not displayed,
   * thus we need to indicate that there are more. Allows using pluralization suffixes,
   * eg `_one`, `_other` etc.
   */
  'search.document-type-list-truncated': '{{types, list}} +{{count}} más',
  /** Accessibility label for list displaying the available document types */
  'search.document-types-aria-label': 'Tipos de documento',
  /** Label for when no document types matching the filter are found */
  'search.document-types-no-matches-found': 'No se encontraron coincidencias para {{filter}}',
  /** Description for error when a filter cannot be displayed, describes that you should check the schema */
  'search.error.display-filter-description':
    'Esto puede indicar opciones inválidas definidas en tu esquema.',
  /** Title for error when a filter cannot be displayed (mainly a developer-oriented error) */
  'search.error.display-filter-title': 'Ocurrió un error al mostrar este filtro.',
  /** Description for error when no valid asset source is found, describes that you should check the the current studio config */
  'search.error.no-valid-asset-source-check-config-description':
    'Por favor, asegúrate de que esté habilitado en tu archivo de configuración del estudio.',
  /** Description for error when no valid asset source is found, describes that only the default asset is supported */
  'search.error.no-valid-asset-source-only-default-description':
    'Actualmente, solo se admite la fuente de archivos predeterminada.',
  /** Title for error when no valid asset sources found */
  'search.error.no-valid-asset-source-title': 'No se encontraron fuentes de archivos válidas.',
  /** Helpful description for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-help-description':
    'Por favor, intenta de nuevo o verifica tu conexión',
  /** Title label for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-title': 'Algo salió mal durante la búsqueda',
  /**
   * Label for "All fields", a label that appears above the list of available fields when filtering.
   * If one or more document type has been chosen as filter, this label is replaced with a group of
   * fields per selected document type
   */
  'search.filter-all-fields-header': 'Todos los campos',
  /** Label for the action of changing from one file to a different file in asset search filter */
  'search.filter-asset-change_file': 'Cambiar archivo',
  /** Label for the action of changing from one image to a different image in asset search filter */
  'search.filter-asset-change_image': 'Cambiar imagen',
  /** Label for the action of clearing the currently selected asset in an image/file filter */
  'search.filter-asset-clear': 'Limpiar',
  /** Label for the action of selecting a file in asset search filter */
  'search.filter-asset-select_file': 'Seleccionar archivo',
  /** Label for the action of selecting an image in asset search filter */
  'search.filter-asset-select_image': 'Seleccionar imagen',
  /** Label for boolean filter - false */
  'search.filter-boolean-false': 'Falso',
  /** Label for boolean filter - true */
  'search.filter-boolean-true': 'Verdadero',
  /** Accessibility label for list that lets you filter fields by title, when adding a new filter in search */
  'search.filter-by-title-aria-label': 'Filtrar por título',
  /** Accessibility label for date filter input */
  'search.filter-date-aria-label': 'Fecha',
  /** Accessibility label for selecting end date on the date range search filter */
  'search.filter-date-range-end-date-aria-label': 'Fecha de fin',
  /** Accessibility label for selecting start date on the date range search filter */
  'search.filter-date-range-start-date-aria-label': 'Fecha de inicio',
  /**
   * Label for "Days"/"Months"/"Years" when selecting it as unit in "X days ago" search filter.
   * Capitalized, as it would be listed in a dropdown.
   */
  'search.filter-date-unit_days': 'Días',
  'search.filter-date-unit_months': 'Meses',
  'search.filter-date-unit_years': 'Años',
  /** Accessibility label for selecting the unit (day/month/year) when adding "X days ago" search filter */
  'search.filter-date-unit-aria-label': 'Seleccionar unidad',
  /** Accessibility label for the input value (days/months/years) when adding "X days ago" search filter */
  'search.filter-date-value-aria-label': 'Valor de la unidad',
  /** Label for "field description" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-description': 'Descripción del campo',
  /** Label for "field name" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-name': 'Nombre del campo',
  /** Label for "Used in document types", a list of the document types a field appears in. Shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-used-in-document-types': 'Utilizado en tipos de documentos',
  /** Label for when no fields/filters are found for the given term */
  'search.filter-no-matches-found': 'No se encontraron coincidencias para {{filter}}',
  /** Placeholder value for maximum numeric value filter */
  'search.filter-number-max-value-placeholder': 'Valor máximo',
  /** Placeholder value for minimum numeric value filter */
  'search.filter-number-min-value-placeholder': 'Valor mínimo',
  /** Placeholder value for the number filter */
  'search.filter-number-value-placeholder': 'Valor',
  /** Placeholder for the "Filter" input, when narrowing possible fields/filters */
  'search.filter-placeholder': 'Filtrar',
  /** Label for the action of clearing the currently selected document in a reference filter */
  'search.filter-reference-clear': 'Limpiar',
  /**
   * Label for "shared fields", a label that appears above a list of fields that all filtered types
   * have in common, when adding a new filter. For instance, if "book" and "employee" both have a
   * "title" field, this field would be listed under "shared fields".
   * */
  'search.filter-shared-fields-header': 'Campos compartidos',
  /** Placeholder value for the string filter */
  'search.filter-string-value-placeholder': 'Valor',
  /** Label/placeholder prompting user to select one of the predefined, allowed values for a string field */
  'search.filter-string-value-select-predefined-value': 'Seleccionar…',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (singular) */
  'search.filters-aria-label_one': 'Filtro',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (plural) */
  'search.filters-aria-label_other': 'Filtros',
  /** Label for instructions on how to use the search - displayed when no recent searches are available */
  'search.instructions': 'Usa <ControlsIcon/> para refinar tu búsqueda',
  /** Helpful description for when no search results are found */
  'search.no-results-help-description': 'Prueba con otra palabra clave o ajusta tus filtros',
  /** Title label for when no search results are found */
  'search.no-results-title': 'No se encontraron resultados',
  /**
   * Individual search operators.
   *
   * The `name` variant is the form we use when the user is building a query, and selecting from a
   * list of available operators for a field. Keep in mind that since the user knows what the field
   * represents, we do not need to contextualize too much, and that the user may not be a developer
   * eg prefer "quantity is" over "array has length". Additionally, (if applicable in language) use
   * lowercased names.
   *
   * The `description` variant is the form shown once the filter has enough information to apply,
   * and is shown in the list of applied filters. It is passed components that _should_ be used to
   * compose the filter string, and to format them correctly:
   *
   * `<Field/>` - eg "Bird species", "Category", "Date of birth"
   * `<Operator>operator text</Operator>` - eg "has ≤", "includes", "is"
   * `<Value>{{value}}</Value>` - eg "Hawk", "Sparrow", "Eagle"
   *
   * Where applicable, a `count` is passed, allowing you to pluralize where needed, by using
   * suffixes such as `_zero`, `_one`, `_other` etc.
   *
   * Prefer (reasonable) brevity since many filters may be applied. For instance:
   * `<Field/> has ≤ <Value/>` may be better than
   * `<Field/> has less than or equal to <Value/>`
   **/
  /* Array should have a count the given filter value */
  'search.operator.array-count-equal.description_one':
    '<Field/> <Operator>tiene</Operator> <Value>{{count}} elemento</Value>',
  'search.operator.array-count-equal.description_other':
    '<Field/> <Operator>tiene</Operator> <Value>{{count}} elementos</Value>',
  'search.operator.array-count-equal.name': 'la cantidad es',
  /* Array should have a count greater than given filter value */
  'search.operator.array-count-gt.description_one':
    '<Field/> <Operator>tiene ></Operator> <Value>{{count}} elemento</Value>',
  'search.operator.array-count-gt.description_other':
    '<Field/> <Operator>tiene ></Operator> <Value>{{count}} elementos</Value>',
  'search.operator.array-count-gt.name': 'cantidad mayor que',
  /* Array should have a count greater than or equal to the given filter value */
  'search.operator.array-count-gte.description_one':
    '<Field/> <Operator>tiene ≥</Operator> <Value>{{count}} elemento</Value>',
  'search.operator.array-count-gte.description_other':
    '<Field/> <Operator>tiene ≥</Operator> <Value>{{count}} elementos</Value>',
  'search.operator.array-count-gte.name': 'cantidad mayor o igual que',
  /* Array should have a count less than given filter value */
  'search.operator.array-count-lt.description_one':
    '<Field/> <Operator>tiene <</Operator> <Value>{{count}} elemento</Value>',
  'search.operator.array-count-lt.description_other':
    '<Field/> <Operator>tiene <</Operator> <Value>{{count}} elementos</Value>',
  'search.operator.array-count-lt.name': 'cantidad menor que',
  /* Array should have a count less than or equal to the given filter value */
  'search.operator.array-count-lte.description_one':
    '<Field/> <Operator>tiene ≤</Operator> <Value>{{count}} elemento</Value>',
  'search.operator.array-count-lte.description_other':
    '<Field/> <Operator>tiene ≤</Operator> <Value>{{count}} elementos</Value>',
  'search.operator.array-count-lte.name': 'cantidad menor o igual que',
  /* Array should have a count that is not equal to the given filter value */
  'search.operator.array-count-not-equal.description_one':
    '<Field/> <Operator>no tiene</Operator> <Value>{{count}} elemento</Value>',
  'search.operator.array-count-not-equal.description_other':
    '<Field/> <Operator>no tiene</Operator> <Value>{{count}} elementos</Value>',
  'search.operator.array-count-not-equal.name': 'la cantidad no es',
  /**
   * Array should have a count within the range of given filter values.
   * Gets passed `{{from}}` and `{{to}}` values.
   **/
  'search.operator.array-count-range.description':
    '<Field/> <Operator>tiene entre</Operator> <Value>{{from}} → {{to}} elementos</Value>',
  'search.operator.array-count-range.name': 'la cantidad está entre',
  /* Array should include the given value */
  'search.operator.array-list-includes.description':
    '<Field/> <Operator>incluye</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-includes.name': 'incluye',
  /* Array should not include the given value */
  'search.operator.array-list-not-includes.description':
    '<Field/> <Operator>no incluye</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-not-includes.name': 'no incluye',
  /* Array should include the given reference */
  'search.operator.array-reference-includes.description':
    '<Field/> <Operator>incluye</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-includes.name': 'incluye',
  /* Array should not include the given reference */
  'search.operator.array-reference-not-includes.description':
    '<Field/> <Operator>no incluye</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-not-includes.name': 'no incluye',
  /* Asset (file) should be the selected asset */
  'search.operator.asset-file-equal.description':
    '<Field/> <Operator>es</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-equal.name': 'es',
  /* Asset (file) should not be the selected asset */
  'search.operator.asset-file-not-equal.description':
    '<Field/> <Operator>no es</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-not-equal.name': 'no es',
  /* Asset (image) should be the selected asset */
  'search.operator.asset-image-equal.description':
    '<Field/> <Operator>es</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-equal.name': 'es',
  /* Asset (image) should not be the selected asset */
  'search.operator.asset-image-not-equal.description':
    '<Field/> <Operator>no es</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-not-equal.name': 'no es',
  /**
   * Boolean value should be the given filter value (true/false).
   * Context passed is `true` and `false`, allowing for more specific translations:
   * - `search.operator.boolean-equal.description_true`
   * - `search.operator.boolean-equal.description_false`
   */
  'search.operator.boolean-equal.description':
    '<Field/> <Operator>es</Operator> <Value>{{value}}</Value>',
  'search.operator.boolean-equal.name': 'es',
  /* Date should be after (later than) given filter value */
  'search.operator.date-after.description':
    '<Field/> <Operator>es después de</Operator> <Value>{{value}}</Value>',
  'search.operator.date-after.name': 'después',
  /* Date should be before (earlier than) given filter value */
  'search.operator.date-before.description':
    '<Field/> <Operator>es antes de</Operator> <Value>{{value}}</Value>',
  'search.operator.date-before.name': 'antes',
  /* Date should be the given filter value */
  'search.operator.date-equal.description':
    '<Field/> <Operator>es</Operator> <Value>{{value}}</Value>',
  'search.operator.date-equal.name': 'es',
  /* Date should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-last.description':
    '<Field/> <Operator>está en los últimos</Operator> <Value>{{value}}</Value>',
  'search.operator.date-last.name': 'último',
  /* Date should not be the given filter value */
  'search.operator.date-not-equal.description':
    '<Field/> <Operator>no es</Operator> <Value>{{value}}</Value>',
  'search.operator.date-not-equal.name': 'no es',
  /* Date should be within the range of given filter values */
  'search.operator.date-range.description': '<Field/> <Operator>está entre</Operator> <Value/>',
  'search.operator.date-range.name': 'está entre',
  /* Date and time should be after (later than) given filter value */
  'search.operator.date-time-after.description':
    '<Field/> <Operator>es después de</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-after.name': 'después',
  /* Date and time should be before (earlier than) given filter value */
  'search.operator.date-time-before.description':
    '<Field/> <Operator>es antes de</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-before.name': 'antes',
  /* Date and time should be the given filter value */
  'search.operator.date-time-equal.description':
    '<Field/> <Operator>es</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-equal.name': 'es',
  /* Date and time should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-time-last.description':
    '<Field/> <Operator>está en los últimos</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-last.name': 'último',
  /* Date and time should not be the given filter value */
  'search.operator.date-time-not-equal.description':
    '<Field/> <Operator>no es</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-not-equal.name': 'no es',
  /* Date and time should be within the range of given filter values */
  'search.operator.date-time-range.description':
    '<Field/> <Operator>está entre</Operator> <Value/>',
  'search.operator.date-time-range.name': 'está entre',
  /* Value should be defined */
  'search.operator.defined.description': '<Field/> <Operator>es</Operator> <Value>no vacío</Value>',
  'search.operator.defined.name': 'no vacío',
  /* Value should not be defined */
  'search.operator.not-defined.description':
    '<Field/> <Operator>es</Operator> <Value>vacío</Value>',
  'search.operator.not-defined.name': 'vacío',
  /* Number should be the given filter value */
  'search.operator.number-equal.description':
    '<Field/> <Operator>es</Operator> <Value>{{value}}</Value>',
  'search.operator.number-equal.name': 'es',
  /* Number should be greater than given filter value */
  'search.operator.number-gt.description':
    '<Field/> <Operator>></Operator> <Value>{{value}}</Value>',
  'search.operator.number-gt.name': 'mayor que',
  /* Number should be greater than or the given filter value */
  'search.operator.number-gte.description':
    '<Field/> <Operator>≥</Operator> <Value>{{value}}</Value>',
  'search.operator.number-gte.name': 'mayor o igual que',
  /* Number should be less than given filter value */
  'search.operator.number-lt.description':
    '<Field/> <Operator><</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lt.name': 'menor que',
  /* Number should be less than or the given filter value */
  'search.operator.number-lte.description':
    '<Field/> <Operator>≤</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lte.name': 'menor o igual que',
  /* Number should not be the given filter value */
  'search.operator.number-not-equal.description':
    '<Field/> <Operator>no es</Operator> <Value>{{value}}</Value>',
  'search.operator.number-not-equal.name': 'no es',
  /* Number should be within the range of given filter values */
  'search.operator.number-range.description':
    '<Field/> <Operator>está entre</Operator> <Value>{{from}} → {{to}}</Value>',
  'search.operator.number-range.name': 'está entre',
  /* Portable Text should contain the given filter value */
  'search.operator.portable-text-contains.description':
    '<Field/> <Operator>contiene</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-contains.name': 'contiene',
  /* Portable Text should be the given filter value */
  'search.operator.portable-text-equal.description':
    '<Field/> <Operator>es</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-equal.name': 'es',
  /* Portable Text should not contain the given filter value */
  'search.operator.portable-text-not-contains.description':
    '<Field/> <Operator>no contiene</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-contains.name': 'no contiene',
  /* Portable Text should not be the given filter value */
  'search.operator.portable-text-not-equal.description':
    '<Field/> <Operator>no es</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-equal.name': 'no es',
  /* References the given asset (file) */
  'search.operator.reference-asset-file.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-file.name': 'archivo',
  /* References the given asset (image) */
  'search.operator.reference-asset-image.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-image.name': 'imagen',
  /* References the given document */
  'search.operator.reference-document.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-document.name': 'documento',
  /* Reference should be the given document */
  'search.operator.reference-equal.description':
    '<Field/> <Operator>es</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-equal.name': 'es',
  /* Reference should not be the given document */
  'search.operator.reference-not-equal.description':
    '<Field/> <Operator>no es</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-not-equal.name': 'no es',
  /* Slug contains the given value */
  'search.operator.slug-contains.description':
    '<Field/> <Operator>contiene</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-contains.name': 'contiene',
  /* Slug equals the given filter value */
  'search.operator.slug-equal.description':
    '<Field/> <Operator>es</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-equal.name': 'es',
  /* Slug does not contain the given value */
  'search.operator.slug-not-contains.description':
    '<Field/> <Operator>no contiene</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-contains.name': 'no contiene',
  /* Slug does not equal the given filter value */
  'search.operator.slug-not-equal.description':
    '<Field/> <Operator>no es</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-equal.name': 'no es',
  /* String contains the given filter value */
  'search.operator.string-contains.description':
    '<Field/> <Operator>contiene</Operator> <Value>{{value}}</Value>',
  'search.operator.string-contains.name': 'contiene',
  /* String equals the given filter value */
  'search.operator.string-equal.description':
    '<Field/> <Operator>es</Operator> <Value>{{value}}</Value>',
  'search.operator.string-equal.name': 'es',
  /* String equals one of the predefined allowed values */
  'search.operator.string-list-equal.description':
    '<Field/> <Operator>es</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-equal.name': 'es',
  /* String does not equal one of the predefined allowed values */
  'search.operator.string-list-not-equal.description':
    '<Field/> <Operator>no es</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-not-equal.name': 'no es',
  /* String does not contain the given filter value */
  'search.operator.string-not-contains.description':
    '<Field/> <Operator>no contiene</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-contains.name': 'no contiene',
  /* String does not equal the given filter value */
  'search.operator.string-not-equal.description':
    '<Field/> <Operator>no es</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-equal.name': 'no es',
  /** Label for the "Best match" search ordering type */
  'search.ordering.best-match-label': 'Mejor coincidencia',
  /** Label for the "Created: Oldest first" search ordering type */
  'search.ordering.created-ascending-label': 'Creado: Más antiguo primero',
  /** Label for the "Created: Newest first" search ordering type */
  'search.ordering.created-descending-label': 'Creado: Más reciente primero',
  /** Label for the "Updated: Oldest first" search ordering type */
  'search.ordering.updated-ascending-label': 'Actualizado: Más antiguo primero',
  /** Label for the "Updated: Newest first" search ordering type */
  'search.ordering.updated-descending-label': 'Actualizado: Más reciente primero',
  /** Placeholder text for the global search input field */
  'search.placeholder': 'Buscar',
  /** Accessibility label for the recent searches section, shown when no valid search terms has been given */
  'search.recent-searches-aria-label': 'Búsquedas recientes',
  /** Label/heading shown for the recent searches section */
  'search.recent-searches-label': 'Búsquedas recientes',
  /** Accessibility label for the search results section, shown when the user has typed valid terms */
  'search.search-results-aria-label': 'Resultados de búsqueda',

  /** Accessibility label for the navbar status button */
  'status-button.aria-label': 'Estado de configuración',

  /** Description for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-description':
    'Las transacciones del historial del documento no se han visto afectadas.',
  /** Title for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-title':
    'Se produjo un error al recuperar los cambios del documento.',
  /** Error description for when the document doesn't have history */
  'timeline.error.no-document-history-description':
    'Al cambiar el contenido del documento, las versiones del documento aparecerán en este menú.',
  /** Error title for when the document doesn't have history */
  'timeline.error.no-document-history-title': 'No hay historial del documento',
  /** Error prompt when revision cannot be loaded */
  'timeline.error.unable-to-load-revision': 'No se puede cargar la revisión',
  /** Label for when the timeline item is the latest in the history */
  'timeline.latest': 'Más reciente',
  /** Label for latest version for timeline menu dropdown */
  'timeline.latest-version': 'Última versión',
  /** The aria-label for the list of revisions in the timeline */
  'timeline.list.aria-label': 'Revisiones del documento',
  /** Label for loading history */
  'timeline.loading-history': 'Cargando historial…',
  /** Label shown in review changes timeline when a document has been created */
  'timeline.operation.created': 'Creado',
  /** Label shown in review changes timeline when a document has been created, with a timestamp */
  'timeline.operation.created_timestamp': 'Creado: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was initially created */
  'timeline.operation.created-initial': 'Creado',
  /** Label shown in review changes timeline when a document was initially created, with a timestamp */
  'timeline.operation.created-initial_timestamp': 'Creado: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been deleted */
  'timeline.operation.deleted': 'Eliminado',
  /** Label shown in review changes timeline when a document has been deleted, with a timestamp */
  'timeline.operation.deleted_timestamp': 'Eliminado: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been discarded */
  'timeline.operation.draft-discarded': 'Borrador descartado',
  /** Label shown in review changes timeline when a draft has been discarded, with a timestamp */
  'timeline.operation.draft-discarded_timestamp': 'Borrador descartado: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been edited */
  'timeline.operation.edited-draft': 'Editado',
  /** Label shown in review changes timeline when a draft has been edited, with a timestamp */
  'timeline.operation.edited-draft_timestamp': 'Editado: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been edited live */
  'timeline.operation.edited-live': 'Editado en vivo',
  /** Label shown in review changes timeline when a document has been edited live, with a timestamp */
  'timeline.operation.edited-live_timestamp': 'Editado en vivo: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was published */
  'timeline.operation.published': 'Publicado',
  /** Label shown in review changes timeline when a document was published, with a timestamp */
  'timeline.operation.published_timestamp': 'Publicado: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was unpublished */
  'timeline.operation.unpublished': 'Despublicado',
  /** Label shown in review changes timeline when a document was unpublished, with a timestamp */
  'timeline.operation.unpublished_timestamp': 'Despublicado: {{timestamp, datetime}}',
  /**
   * Label for determining since which version the changes for timeline menu dropdown are showing.
   * Receives the time label as a parameter (`timestamp`).
   */
  'timeline.since': 'Desde: {{timestamp, datetime}}',
  /** Label for missing change version for timeline menu dropdown are showing */
  'timeline.since-version-missing': 'Desde: versión desconocida',

  /**Aria label for the action buttons in the PTE toolbar */
  'toolbar.portable-text.action-button-aria-label': '{{action}}',

  /** Label for button showing the free trial days left */
  'user-menu.action.free-trial_one': '{{count}} día restante en el período de prueba',
  'user-menu.action.free-trial_other': '{{count}} días restantes en el período de prueba',
  /** Label for the button showed after trial ended */
  'user-menu.action.free-trial-finished': 'Actualizar desde la versión gratuita',
  /** Label for action to invite members to the current sanity project */
  'user-menu.action.invite-members': 'Invitar miembros',
  /** Accessibility label for action to invite members to the current sanity project */
  'user-menu.action.invite-members-aria-label': 'Invitar miembros',
  /** Label for action to manage the current sanity project */
  'user-menu.action.manage-project': 'Gestionar proyecto',
  /** Accessibility label for the action to manage the current project */
  'user-menu.action.manage-project-aria-label': 'Gestionar proyecto',
  /** Tooltip helper text when portable text annotation is disabled for empty block*/
  'user-menu.action.portable-text.annotation-disabled_empty-block':
    'No se puede aplicar {{name}} a un bloque vacío',
  /** Tooltip helper text when portable text annotation is disabled for multiple blocks */
  'user-menu.action.portable-text.annotation-disabled_multiple-blocks':
    'No se puede aplicar {{name}} a múltiples bloques',
  /** Label for action to sign out of the current sanity project */
  'user-menu.action.sign-out': 'Cerrar sesión',
  /** Title for appearance section for the current studio (dark / light / system scheme) */
  'user-menu.appearance-title': 'Apariencia',
  /** Label for close menu button for user menu */
  'user-menu.close-menu': 'Cerrar menú',
  /** Description for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-description': 'Usar apariencia oscura',
  /** Title for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-title': 'Oscuro',
  /** Description for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-description': 'Usar apariencia clara',
  /** Title for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-title': 'Claro',
  /** Description for using "system apparence" in the appearance user menu */
  'user-menu.color-scheme.system-description': 'Usar apariencia del sistema',
  /** Title for using system apparence in the appearance user menu */
  'user-menu.color-scheme.system-title': 'Sistema',
  /** Title for locale section for the current studio */
  'user-menu.locale-title': 'Idioma',
  /** Label for tooltip to show which provider the currently logged in user is using */
  'user-menu.login-provider': 'Conectado con {{providerTitle}}',
  /** Label for open menu button for user menu */
  'user-menu.open-menu': 'Abrir menú',

  /**
   * Label for action to add a workspace (currently a developer-oriented action, as this will
   * lead to the documentation on workspace configuration)
   */
  'workspaces.action.add-workspace': 'Añadir espacio de trabajo',
  /**
   * Label for action to choose a different workspace, in the case where you are not logged in,
   * have selected a workspace, and are faced with the authentication options for the selected
   * workspace. In other words, label for the action shown when you have reconsidered which
   * workspace to authenticate in.
   */
  'workspaces.action.choose-another-workspace': 'Elige otro espacio de trabajo',
  /** Label for heading that indicates that you can choose your workspace */
  'workspaces.choose-your-workspace-label': 'Elige tu espacio de trabajo',
  /** Label for the workspace menu */
  'workspaces.select-workspace-aria-label': 'Selecciona un espacio de trabajo',
  /** Button label for opening the workspace switcher */
  'workspaces.select-workspace-label': 'Selecciona un espacio de trabajo',
  /** Tooltip for the workspace menu */
  'workspaces.select-workspace-tooltip': 'Seleccionar espacio de trabajo',
  /** Title for Workplaces dropdown menu */
  'workspaces.title': 'Espacios de trabajo',
})
