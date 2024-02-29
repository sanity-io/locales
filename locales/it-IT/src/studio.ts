import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Menu item for deleting the asset */
  'asset-source.asset-list.menu.delete': 'Elimina',
  /** Menu item for showing where a particular asset is used */
  'asset-source.asset-list.menu.show-usage': 'Mostra utilizzo',
  /** Header in usage dialog for file assets */
  'asset-source.asset-usage-dialog.header_file': 'Documenti che utilizzano il file',
  /** Header in usage dialog for image assets */
  'asset-source.asset-usage-dialog.header_image': 'Documenti che utilizzano l’immagine',
  /** Text shown in usage dialog when loading documents using the selected asset */
  'asset-source.asset-usage-dialog.loading': 'Caricamento in corso…',
  /** Text for cancel action in delete-asset dialog */
  'asset-source.delete-dialog.action.cancel': 'Annulla',
  /** Text for "confirm delete" action in delete-asset dialog */
  'asset-source.delete-dialog.action.delete': 'Elimina',
  /** Dialog header for delete-asset dialog when deleting a file */
  'asset-source.delete-dialog.header_file': 'Elimina file',
  /** Dialog header for delete-asset dialog when deleting an image */
  'asset-source.delete-dialog.header_image': 'Elimina immagine',
  /** Text shown in delete dialog when loading documents using the selected asset */
  'asset-source.delete-dialog.loading': 'Caricamento in corso…',
  /** Message confirming to delete *named* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_named':
    'Stai per eliminare il file <strong>{{filename}}}</strong> e i suoi metadati. Sei sicuro?',
  /** Message confirming to delete *unnamed* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_unnamed':
    'Stai per eliminare il file e i suoi metadati. Sei sicuro?',
  /** Message confirming to delete *named* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_named':
    "Stai per eliminare l'immagine <strong>{{filename}}</strong> e i suoi metadati. Sei sicuro?",
  /** Message confirming to delete *unnamed* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_unnamed':
    "Stai per eliminare l'immagine e i suoi metadati. Sei sicuro?",
  /** Alt text showing on image preview in delete asset dialog  */
  'asset-source.delete-dialog.usage-list.image-preview-alt': 'Anteprima dell’immagine',
  /** Warning message showing when *named* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_named':
    '{{filename}} non può essere eliminato perché è in uso. Per poter eliminare questo file, devi prima rimuovere tutti i suoi utilizzi.',
  /** Warning message showing when *unnamed* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_unnamed':
    'Questo file non può essere eliminato perché è in uso. Per poterlo eliminare, devi prima rimuovere tutti i suoi utilizzi.',
  /** Warning message showing when *named* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_named':
    '{{filename}} non può essere eliminata perché è in uso. Per poter eliminare questa immagine, devi prima rimuovere tutti i suoi utilizzi.',
  /** Warning message showing when *unnamed* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_unnamed':
    'Questa immagine non può essere eliminata perché è in uso. Per poterla eliminare, devi prima rimuovere tutti i suoi utilizzi.',
  /** Text shown when the list of assets only include a specific set of types */
  'asset-source.dialog.accept-message':
    'Mostrando solo asset dei tipi accettati: <strong>{{acceptTypes}}</strong>',
  /** Keys shared between both image asset source and file asset source */
  /** Select asset dialog title for files */
  'asset-source.dialog.default-title_file': 'Seleziona file',
  /** Select asset dialog title for images */
  'asset-source.dialog.default-title_image': 'Seleziona immagine',
  /** Select asset dialog load more items */
  'asset-source.dialog.load-more': 'Carica altri',
  /** Text shown when selecting a file but there's no files to select from */
  'asset-source.dialog.no-assets_file': 'Nessun file',
  /** Text shown when selecting an image but there's no images to select from */
  'asset-source.dialog.no-assets_image': 'Nessuna immagine',
  'asset-source.file.asset-list.action.delete.disabled-cannot-delete-current-file':
    'Impossibile eliminare il file selezionato attualmente',
  'asset-source.file.asset-list.action.delete.text': 'Elimina',
  'asset-source.file.asset-list.action.delete.title': 'Elimina file',
  'asset-source.file.asset-list.action.select-file.title': 'Seleziona il file {{filename}}',
  'asset-source.file.asset-list.action.show-usage.title': 'Mostra utilizzo',
  'asset-source.file.asset-list.delete-failed': 'Impossibile eliminare il file',
  'asset-source.file.asset-list.delete-successful': 'File eliminato',
  'asset-source.file.asset-list.header.date-added': 'Data di aggiunta',
  /** File asset source */
  'asset-source.file.asset-list.header.filename': 'Nome del file',
  'asset-source.file.asset-list.header.size': 'Dimensione',
  'asset-source.file.asset-list.header.type': 'Tipo',
  /** Text displayed on button or menu invoking the file asset source */
  'asset-source.file.title': 'File caricati',
  'asset-source.image.asset-list.delete-failed': "Impossibile eliminare l'immagine",
  /** Image asset source */
  'asset-source.image.asset-list.delete-successful': 'Immagine eliminata',
  /** Text displayed on button or menu invoking the image asset source */
  'asset-source.image.title': 'Immagini caricate',
  'asset-source.usage-list.documents-using-file_named_one':
    'Un documento sta utilizzando il file <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-file_named_other':
    '{{count}} documenti stanno utilizzando il file <code>{{filename}}</code>',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *named* file **/
  'asset-source.usage-list.documents-using-file_named_zero':
    'Nessun documento sta utilizzando il file <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-file_unnamed_one':
    'Un documento sta utilizzando questo file',
  'asset-source.usage-list.documents-using-file_unnamed_other':
    '{{count}} documenti stanno utilizzando questo file',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *unnamed* file **/
  'asset-source.usage-list.documents-using-file_unnamed_zero':
    'Nessun documento sta utilizzando questo file',
  'asset-source.usage-list.documents-using-image_named_one':
    "Un documento sta utilizzando l'immagine <code>{{filename}}</code>",
  'asset-source.usage-list.documents-using-image_named_other':
    "{{count}} documenti stanno utilizzando l'immagine <code>{{filename}}</code>",
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *named* image **/
  'asset-source.usage-list.documents-using-image_named_zero':
    "Nessun documento sta utilizzando l'immagine <code>{{filename}}</code>",
  'asset-source.usage-list.documents-using-image_unnamed_one':
    'Un documento sta utilizzando questa immagine',
  'asset-source.usage-list.documents-using-image_unnamed_other':
    '{{count}} documenti stanno utilizzando questa immagine',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *unnamed* image **/
  'asset-source.usage-list.documents-using-image_unnamed_zero':
    'Nessun documento sta utilizzando questa immagine',

  /** Action message for navigating to next month */
  'calendar.action.go-to-next-month': 'Vai al mese successivo',
  /** Action message for navigating to next year */
  'calendar.action.go-to-next-year': 'Vai all’anno successivo',
  /** Action message for navigating to previous month */
  'calendar.action.go-to-previous-month': 'Vai al mese precedente',
  /** Action message for navigating to previous year */
  'calendar.action.go-to-previous-year': 'Vai all’anno precedente',
  /* Label for navigating the calendar to "today", without _selecting_ today. Short form, eg `Today`, not `Go to today` */
  'calendar.action.go-to-today': 'Oggi',
  /* Accessibility label for navigating the calendar to "today", without _selecting_ today */
  'calendar.action.go-to-today-aria-label': 'Vai a oggi',
  /* Label for navigating the calendar to "tomorrow", without _selecting_ tomorrow. Short form, eg `Tomorrow`, not `Go to tomorrow` */
  'calendar.action.go-to-tomorrow': 'Domani',
  /* Label for navigating the calendar to "yesterday", without _selecting_ yesterday. Short form, eg `Yesterday`, not `Go to yesterday` */
  'calendar.action.go-to-yesterday': 'Ieri',
  /** Label for switch that controls whether or not to include time in given timestamp */
  'calendar.action.include-time-label': 'Includi ora',
  /** Action message for selecting the hour */
  'calendar.action.select-hour': 'Seleziona l’ora',
  /** Action message for selecting the minute */
  'calendar.action.select-minute': 'Seleziona il minuto',
  /** Action message for setting to the current time */
  'calendar.action.set-to-current-time': 'Imposta all’ora corrente',
  /** Label for selecting an hour preset. Receives a `time` param as a string on hh:mm format and a `date` param as a Date instance denoting the preset date */
  'calendar.action.set-to-time-preset': '{{time}} il {{date, datetime}}',
  /** Error message displayed in calendar when entered date is not the correct format */
  'calendar.error.must-be-in-format':
    'Deve essere nel formato <Emphasis>{{exampleDate}}</Emphasis>',
  /** Month name for April */
  'calendar.month-names.april': 'Aprile',
  /** Month name for August */
  'calendar.month-names.august': 'Agosto',
  /** Month name for December */
  'calendar.month-names.december': 'Dicembre',
  /** Month name for February */
  'calendar.month-names.february': 'Febbraio',
  /** Month name for January */
  'calendar.month-names.january': 'Gennaio',
  /** Month name for July */
  'calendar.month-names.july': 'Luglio',
  /** Month name for June */
  'calendar.month-names.june': 'Giugno',
  /** Month name for March */
  'calendar.month-names.march': 'Marzo',
  /** Month name for May */
  'calendar.month-names.may': 'Maggio',
  /** Month name for November */
  'calendar.month-names.november': 'Novembre',
  /** Month name for October */
  'calendar.month-names.october': 'Ottobre',
  /** Month name for September */
  'calendar.month-names.september': 'Settembre',
  /** Short weekday name for Friday */
  'calendar.weekday-names.short.friday': 'Ven',
  /** Short weekday name for Monday */
  'calendar.weekday-names.short.monday': 'Lun',
  /** Short weekday name for Saturdayday */
  'calendar.weekday-names.short.saturday': 'Sab',
  /** Short weekday name for Sunday */
  'calendar.weekday-names.short.sunday': 'Dom',
  /** Short weekday name for Thursday */
  'calendar.weekday-names.short.thursday': 'Gio',
  /** Short weekday name for Tuesday */
  'calendar.weekday-names.short.tuesday': 'Mar',
  /** Short weekday name for Wednesday */
  'calendar.weekday-names.short.wednesday': 'Mer',

  /** Label for the close button label in Review Changes pane */
  'changes.action.close-label': 'Chiudi rivedi modifiche',
  /** Cancel label for revert button prompt action */
  'changes.action.revert-all-cancel': 'Annulla',
  /** Revert all confirm label for revert button action - used on prompt button + review changes pane */
  'changes.action.revert-all-confirm': 'Annulla tutto',
  /** Prompt for reverting all changes in document in Review Changes pane. Includes a count of changes. */
  'changes.action.revert-all-description':
    'Sei sicuro di voler annullare tutte le {{count}} modifiche?',
  /** Prompt for confirming revert change (singular) label for field change action */
  'changes.action.revert-changes-confirm-change_one': 'Annulla modifica',
  /** Revert for confirming revert (plural) label for field change action */
  'changes.action.revert-changes-confirm-change_other': 'Annulla modifiche',
  /** Prompt for reverting changes for a field change */
  'changes.action.revert-changes-description': 'Sei sicuro di voler annullare le modifiche?',
  /** Prompt for reverting changes for a group change, eg multiple changes */
  'changes.action.revert-changes-description_one': 'Sei sicuro di voler annullare la modifica?',
  /** Label for when the action of the change was to set something that was previously empty, eg a field was given a value, an array item was added, an asset was selected or similar */
  'changes.added-label': 'Aggiunto',
  /** Array diff: An item was added in a given position (`{{position}}`) */
  'changes.array.item-added-in-position': 'Aggiunto in posizione {{position}}',
  'changes.array.item-moved_down_one': 'Spostato di {{count}} posizione in giù',
  'changes.array.item-moved_down_other': 'Spostato di {{count}} posizioni in giù',
  /**
   * Array diff: An item was moved within the array.
   * Receives `{{count}}` representing number of positions it moved.
   * Context is the direction of the move, either `up` or `down`.
   */
  'changes.array.item-moved_up_one': 'Spostato di {{count}} posizione in su',
  'changes.array.item-moved_up_other': 'Spostato di {{count}} posizioni in su',
  /** Array diff: An item was removed from a given position (`{{position}}`) */
  'changes.array.item-removed-from-position': 'Rimosso dalla posizione {{position}}',
  /** Accessibility label for the "change bar" shown when there are edits on a field-level */
  'changes.change-bar.aria-label': 'Rivedi modifiche',
  /** Label for when the action of the change was _not_ an add/remove, eg a text field changed value, an image was changed from one asset to another or similar */
  'changes.changed-label': 'Modificato',
  /** Label and text for tooltip that indicates the authors of the changes */
  'changes.changes-by-author': 'Modifiche di',
  /** Additional text shown in development mode when a diff component crashes during rendering */
  'changes.error-boundary.developer-info':
    'Controlla la console dello sviluppatore per maggiori informazioni',
  /** Text shown when a diff component crashes during rendering, triggering the error boundary */
  'changes.error-boundary.title':
    'La visualizzazione delle modifiche a questo campo ha causato un errore',
  /** Error message shown when the value of a field is not the expected one */
  'changes.error.incorrect-type-message':
    'Errore di valore: Il valore è di tipo "<code>{{actualType}}</code>", si aspettava "<code>{{expectedType}}</code>"',
  /** File diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.file.meta-info-fallback-title': 'Senza titolo',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.crop-changed': 'Ritaglio modificato',
  /** Image diff: Text shown if the previous image asset was deleted (shouldn't theoretically happen) */
  'changes.image.deleted': 'Immagine eliminata',
  /** Image diff: Text shown if the image failed to be loaded when previewing it */
  'changes.image.error-loading-image': 'Errore nel caricamento dell’immagine',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.hotspot-changed': 'Hotspot modificato',
  /** Image diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.image.meta-info-fallback-title': 'Senza titolo',
  /** Image diff: Text shown if no asset has been set for the field (but has metadata changes) */
  'changes.image.no-asset-set': 'Immagine non impostata',
  /** Image diff: Text shown when the from/to state has/had no image */
  'changes.image.no-image-placeholder': '(nessuna immagine)',
  /** Label for the "from" value in the change inspector */
  'changes.inspector.from-label': 'Da',
  /** Label for the "meta" (field path, action etc) information in the change inspector */
  'changes.inspector.meta-label': 'Meta',
  /** Label for the "to" value in the change inspector */
  'changes.inspector.to-label': 'A',
  /** Loading author of change in the differences tooltip in the review changes pane */
  'changes.loading-author': 'Caricamento…',
  /** Loading changes in Review Changes Pane */
  'changes.loading-changes': 'Caricamento modifiche…',
  /** No Changes description in the Review Changes pane */
  'changes.no-changes-description':
    'Modifica il documento o seleziona una versione precedente nella timeline per vedere apparire un elenco di modifiche in questo pannello.',
  /** No Changes title in the Review Changes pane */
  'changes.no-changes-title': 'Non ci sono modifiche',
  /** Portable Text diff: An annotation was added */
  'changes.portable-text.annotation_added': 'Annotazione aggiunta',
  /** Portable Text diff: An annotation was changed */
  'changes.portable-text.annotation_changed': 'Annotazione modificata',
  /** Portable Text diff: An annotation was removed */
  'changes.portable-text.annotation_removed': 'Annotazione rimossa',
  /** Portable Text diff: An annotation was left unchanged */
  'changes.portable-text.annotation_unchanged': 'Annotazione invariata',
  /** Portable Text diff: A block changed from one style to another (eg `normal` to `h1` or similar) */
  'changes.portable-text.block-style-changed':
    'Stile del blocco modificato da "{{fromStyle}}" a "{{toStyle}}"',
  /** Portable Text diff: Change formatting of text (setting/unsetting marks, eg bold/italic etc) */
  'changes.portable-text.changed-formatting': 'Formattazione modificata',
  /** Portable Text diff: An empty inline object is part of a change */
  'changes.portable-text.empty-inline-object': '{{inlineObjectType}} vuoto',
  /** Portable Text diff: An empty object is the result of adding/removing an annotation */
  'changes.portable-text.empty-object-annotation': '{{annotationType}} vuoto',
  /** Portable Text diff: Added a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_added': 'Aggiunto testo vuoto',
  /** Portable Text diff: Changed a block that contained no text (eg empty block) */
  'changes.portable-text.empty-text_changed': 'Modificato testo vuoto',
  /** Portable Text diff: Removed a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_removed': 'Rimosso testo vuoto',
  /** Portable Text diff: An inline object was added */
  'changes.portable-text.inline-object_added': 'Oggetto inline aggiunto',
  /** Portable Text diff: An inline object was changed */
  'changes.portable-text.inline-object_changed': 'Oggetto inline modificato',
  /** Portable Text diff: An inline object was removed */
  'changes.portable-text.inline-object_removed': 'Oggetto inline rimosso',
  /** Portable Text diff: An inline object was left unchanged */
  'changes.portable-text.inline-object_unchanged': 'Oggetto inline invariato',
  /** Portable Text diff: Added a chunk of text */
  'changes.portable-text.text_added': 'Testo aggiunto',
  /** Portable Text diff: Removed a chunk of text */
  'changes.portable-text.text_removed': 'Testo rimosso',
  /** Portable Text diff: Annotation has an unknown schema type */
  'changes.portable-text.unknown-annotation-schema-type': 'Tipo di schema sconosciuto',
  /** Portable Text diff: Inline object has an unknown schema type */
  'changes.portable-text.unknown-inline-object-schema-type': 'Tipo di schema sconosciuto',
  /** Label for when the action of the change was a removal, eg a field was cleared, an array item was removed, an asset was deselected or similar */
  'changes.removed-label': 'Rimosso',
  /** Title for the Review Changes pane */
  'changes.title': 'Rivedi modifiche',

  /** --- Common components --- */
  /** Tooltip text for context menu buttons */
  'common.context-menu-button.tooltip': 'Mostra altro',
  /** Default text for dialog cancel button */
  'common.dialog.cancel-button.text': 'Annulla',
  /** Default text for dialog confirm button */
  'common.dialog.confirm-button.text': 'Conferma',
  /** Default text in shared loader text / spinner lockup */
  'common.loading': 'Caricamento',

  /** --- Configuration issues --- */
  /** Tooltip displayed on configuration issues button */
  'configuration-issues.button.tooltip': 'Trovati problemi di configurazione',

  /** The fallback title for an ordering menu item if no localized titles are provided. */
  'default-menu-item.fallback-title': 'Ordina per {{title}}',

  /** Title for the default ordering/SortOrder if no orderings are provided and the caption field is found */
  'default-orderings.caption': 'Ordina per Didascalia',
  /** Title for the default ordering/SortOrder if no orderings are provided and the description field is found */
  'default-orderings.description': 'Ordina per Descrizione',
  /** Title for the default ordering/SortOrder if no orderings are provided and the header field is found */
  'default-orderings.header': 'Ordina per Intestazione',
  /** Title for the default ordering/SortOrder if no orderings are provided and the heading field is found */
  'default-orderings.heading': 'Ordina per Titolo',
  /** Title for the default ordering/SortOrder if no orderings are provided and the label field is found */
  'default-orderings.label': 'Ordina per Etichetta',
  /** Title for the default ordering/SortOrder if no orderings are provided and the name field is found */
  'default-orderings.name': 'Ordina per Nome',
  /** Title for the default ordering/SortOrder if no orderings are provided and the title field is found */
  'default-orderings.title': 'Ordina per Titolo',

  /** Label to show in the document footer indicating the last edited date of the document */
  'document-status.edited': 'Modificato il {{date}}',
  /** Label to show in the document footer indicating the document is not published*/
  'document-status.not-published': 'Non pubblicato',
  /** Label to show in the document footer indicating the published date of the document */
  'document-status.published': 'Pubblicato il {{date}}',

  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.duplicate-keys-alert.details.additional-description':
    'Il valore della proprietà <code>_key</code> deve essere una stringa unica.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property of each elements has been generated non-uniquely. */
  'form.error.duplicate-keys-alert.details.description':
    'Questo di solito accade quando gli elementi vengono creati utilizzando un client API, e la proprietà <code>_key</code> di ciascun elemento è stata generata in modo non univoco.',
  /** Developer info */
  'form.error.duplicate-keys-alert.details.title': 'Informazioni per sviluppatori',
  /** Generate unique keys */
  'form.error.duplicate-keys-alert.generate-button.text': 'Genera chiavi uniche',
  /** Several items in this list share the same identifier (key). Every item must have an unique identifier. */
  'form.error.duplicate-keys-alert.summary':
    'Diversi elementi in questa lista condividono lo stesso identificatore (chiave). Ogni elemento deve avere un identificatore unico.',
  /** Non-unique keys */
  'form.error.duplicate-keys-alert.title': 'Chiavi non uniche',
  /** Error text shown when a field with a given name cannot be found in the schema or is conditionally hidden but explicitly told to render  */
  'form.error.field-not-found':
    'Campo "{{fieldName}}" non trovato tra i membri – verifica che sia definito nello schema e che non sia stato nascosto condizionalmente.',
  /** Add missing keys */
  'form.error.missing-keys-alert.add-button.text': 'Aggiungi chiavi mancanti',
  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.missing-keys-alert.details.additional-description':
    'Il valore della proprietà <code>_key</code> deve essere una stringa univoca.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property has not been included. */
  'form.error.missing-keys-alert.details.description':
    'Questo di solito accade quando gli elementi vengono creati utilizzando un client API, e la proprietà <code>_key</code> non è stata inclusa.',
  /** Developer info */
  'form.error.missing-keys-alert.details.title': 'Informazioni per sviluppatori',
  /** Some items in the list are missing their keys. This must be fixed in order to edit the list. */
  'form.error.missing-keys-alert.summary':
    'Alcuni elementi della lista sono privi delle loro chiavi. Questo deve essere corretto per poter modificare la lista.',
  /** Missing keys */
  'form.error.missing-keys-alert.title': 'Chiavi mancanti',
  /** This usually happens when items are created using an API client, or when a custom input component has added invalid data to the list. */
  'form.error.mixed-array-alert.details.description':
    'Questo di solito accade quando gli elementi vengono creati utilizzando un client API, o quando un componente di input personalizzato ha aggiunto dati non validi alla lista.',
  /** Developer info */
  'form.error.mixed-array-alert.details.title': 'Informazioni per sviluppatori',
  /**  Remove non-object values */
  'form.error.mixed-array-alert.remove-button.text': 'Rimuovi valori non oggetto',
  /** Some items in this list are not objects. This must be fixed in order to edit the list. */
  'form.error.mixed-array-alert.summary':
    'Alcuni elementi in questa lista non sono oggetti. Questo deve essere corretto per poter modificare la lista.',
  /** Invalid list values */
  'form.error.mixed-array-alert.title': 'Valori della lista non validi',
  /** Error text shown when form is unable to find an array item at a given indexed path */
  'form.error.no-array-item-at-index':
    "Nessun elemento dell'array all'indice <code>{{index}}</code> trovato nel percorso <code>{{path}}</code>",
  /** Error text shown when form is unable to find an array item at a given keyed path */
  'form.error.no-array-item-at-key':
    'Nessun elemento dell\'array con `_key` <code>"{{key}}"</code> trovato nel percorso <code>{{path}}</code>',
  /** Form field deprecated label */
  'form.field.deprecated-label': undefined, // 'deprecated'
  /** Fallback title shown above field if it has no defined title */
  'form.field.untitled-field-label': 'Senza titolo',
  /** Fallback title shown above fieldset if it has no defined title */
  'form.field.untitled-fieldset-label': 'Senza titolo',
  /** Accessibility label for the icon that indicates the field has a validation error */
  'form.validation.has-error-aria-label': 'Presenta un errore',
  /** Accessibility label for the icon that indicates the field has validation information */
  'form.validation.has-info-aria-label': 'Presenta informazioni',
  /** Accessibility label for the icon that indicates the field has a validation warning */
  'form.validation.has-warning-aria-label': 'Presenta un avviso',
  /** Text shown when summarizing validation information, when the field has one or more errors */
  'form.validation.summary.errors-count_one': '{{count}} errore',
  'form.validation.summary.errors-count_other': '{{count}} errori',
  /** Text shown when summarizing validation information, when the field has one or more warnings */
  'form.validation.summary.warnings-count_one': '{{count}} avviso',
  'form.validation.summary.warnings-count_other': '{{count}} avvisi',

  /** Tooltip for free trial navbar button indicating remaining days */
  'free-trial.tooltip.days-count_one': undefined, // '{{count}} day left in trial'
  'free-trial.tooltip.days-count_other': undefined, // '{{count}} days left in trial'
  /** Tooltip for free trial navbar button, once trial has ended */
  'free-trial.tooltip.trial-finished': undefined, // 'Upgrade your project'

  /**
   * Label for "contact sales" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.contact-sales': 'Contatta le vendite',
  /**
   * Label for "help and support" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.help-and-support': 'Aiuto e supporto',
  /**
   * Label for "join our community" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.join-our-community': 'Unisciti alla nostra comunità',
  /** Information for what the latest sanity version is */
  'help-resources.latest-sanity-version': "L'ultima versione è {{latestVersion}}",
  /** Information for what studio version the current studio is running */
  'help-resources.studio-version': 'Versione di Sanity Studio {{studioVersion}}',
  /** Title for help and resources menus */
  'help-resources.title': 'Aiuto e risorse',

  /** Text for button to cancel an ongoing upload */
  'input.files.common.cancel-upload': 'Annulla',
  /** Text for file input button in upload placeholder */
  'input.files.common.upload-placeholder.file-input-button.text': 'Carica',
  /** Uploading <FileName/> */
  'input.files.common.upload-progress': 'Caricamento in corso <FileName/>',
  /** The referenced document cannot be opened, because the URL failed to be resolved */
  'input.reference.document-cannot-be-opened.failed-to-resolve-url':
    "Questo documento non può essere aperto (impossibile risolvere l'URL allo Studio)",

  /** Label for adding item after a specific array item */
  'inputs.array.action.add-after': 'Aggiungi elemento dopo',
  /** Label for adding item before a specific array item */
  'inputs.array.action.add-before': 'Aggiungi elemento prima',
  /** Label for adding array item action when the schema allows for only one schema type */
  'inputs.array.action.add-item': 'Aggiungi elemento',
  /**
   * Label for adding one array item action when the schema allows for multiple schema types,
   * eg. will prompt the user to select a type once triggered
   */
  'inputs.array.action.add-item-select-type': 'Aggiungi elemento...',
  /** Array drag handle button tooltip */
  'inputs.array.action.drag.tooltip': 'Trascina per riordinare',
  /** Label for duplicating an array item  */
  'inputs.array.action.duplicate': 'Duplica',
  /** Label for editing the item of a specific type, eg "Edit Person" */
  'inputs.array.action.edit': 'Modifica {{itemTypeTitle}}',
  /** Label for removing an array item action  */
  'inputs.array.action.remove': 'Rimuovi',
  /** Label for removing action when an array item has an error  */
  'inputs.array.action.remove-invalid-item': 'Rimuovi',
  /** Label for viewing the item of a specific type, eg "View Person" */
  'inputs.array.action.view': 'Visualizza {{itemTypeTitle}}',
  /** Error description for the array item tooltip that explains that the current item can still be moved or deleted but not edited since the schema definition is not found */
  'inputs.array.error.can-delete-but-no-edit-description':
    'Puoi ancora spostare o eliminare questo elemento, ma non può essere modificato poiché la definizione dello schema per il suo tipo non è reperibile.',
  /** Error label for toast when array could not resolve the initial value */
  'inputs.array.error.cannot-resolve-initial-value-title':
    'Impossibile risolvere il valore iniziale per il tipo: {{schemaTypeTitle}}: {{errorMessage}}.',
  /** Error label for toast when trying to upload one array item of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_one':
    "L'elemento seguente non può essere caricato perché non esiste una conversione nota dal tipo di contenuto a elemento dell'array:",
  /** Error label for toast when trying to upload multiple array items of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_other':
    "Gli elementi seguenti non possono essere caricati perché non esiste una conversione nota dai tipi di contenuto a elemento dell'array:",
  /** Error description for the array item tooltip that explains that the current type item is not valid for the list  */
  'inputs.array.error.current-schema-not-declare-description':
    'Lo schema attuale non dichiara elementi di tipo <code>{{typeName}}</code> come validi per questa lista. Questo potrebbe significare che il tipo è stato rimosso come elemento valido, o che qualcun altro lo ha aggiunto al proprio schema locale che non è ancora stato distribuito.',
  /** Error description to show how the item is being represented in the json format */
  'inputs.array.error.json-representation-description': 'Rappresentazione JSON di questo elemento:',
  /** Error description for the array item tooltip that explains what the error means with more context */
  'inputs.array.error.type-is-incompatible-prompt':
    'Elemento di tipo <code>{{typeName}}</code> non valido per questa lista',
  /** Error title for when an item type within an array input is incompatible, used in the tooltip */
  'inputs.array.error.type-is-incompatible-title': 'Perché sta succedendo?',
  /** Error label for unexpected errors in the Array Input */
  'inputs.array.error.unexpected-error': 'Errore Inaspettato: {{error}}',
  /** Label for when the array input doesn't have any items */
  'inputs.array.no-items-label': 'Nessun elemento',
  /** Label for read only array fields */
  'inputs.array.read-only-label': 'Questo campo è di sola lettura',
  /** Label for when the array input is resolving the initial value for the item */
  'inputs.array.resolving-initial-value': 'Risolvendo il valore iniziale…',
  /** Placeholder value for datetime input */
  'inputs.datetime.placeholder': 'es. {{example}}',
  /** Acessibility label for button to open file options menu */
  'inputs.file.actions-menu.file-options.aria-label': 'Apri il menu delle opzioni del file',
  /** Browse */
  'inputs.file.browse-button.text': 'Sfoglia',
  /** Select file */
  'inputs.file.dialog.title': 'Seleziona file',
  /** Unknown member kind: `{{kind}}` */
  'inputs.file.error.unknown-member-kind': 'Tipo di membro sconosciuto: {{kind}}',
  /** The value of this field is not a valid file. Resetting this field will let you choose a new file. */
  'inputs.file.invalid-file-warning.description':
    'Il valore di questo campo non è un file valido. Reimpostando questo campo potrai scegliere un nuovo file.',
  /** Reset value */
  'inputs.file.invalid-file-warning.reset-button.text': 'Reimposta valore',
  /** Invalid file value */
  'inputs.file.invalid-file-warning.title': 'Valore del file non valido',
  /** Select */
  'inputs.file.multi-browse-button.text': 'Seleziona',
  /** The upload could not be completed at this time. */
  'inputs.file.upload-failed.description':
    'Il caricamento non può essere completato in questo momento.',
  /** Upload failed */
  'inputs.file.upload-failed.title': 'Caricamento fallito',
  /** Clear field */
  'inputs.files.common.actions-menu.clear-field.label': 'Pulisci campo',
  /** Copy URL */
  'inputs.files.common.actions-menu.copy-url.label': 'Copia URL',
  /** Download */
  'inputs.files.common.actions-menu.download.label': 'Scarica',
  /** The URL is copied to the clipboard */
  'inputs.files.common.actions-menu.notification.url-copied': "L'URL è stato copiato negli appunti",
  /** Replace */
  'inputs.files.common.actions-menu.replace.label': 'Sostituisci',
  /** Upload */
  'inputs.files.common.actions-menu.upload.label': 'Carica',
  /** Drop to upload */
  'inputs.files.common.drop-message.drop-to-upload': 'Rilascia per caricare',
  /** Drop to upload `{{count}}` file */
  'inputs.files.common.drop-message.drop-to-upload-multi_one':
    'Trascina per caricare {{count}} file',
  /** Drop to upload `{{count}}` files */
  'inputs.files.common.drop-message.drop-to-upload-multi_other':
    'Trascina per caricare {{count}} files',
  /** Can't upload this file here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_one':
    'Non è possibile caricare questo file qui',
  /** Can't upload any of these files here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_other':
    'Non è possibile caricare nessuno di questi files qui',
  /** `{{count}}` file can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_one':
    '{{count}} file non può essere caricato qui',
  /** `{{count}}` files can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_other':
    '{{count}} files non possono essere caricati qui',
  /** Cannot upload `{{count}}` files */
  'inputs.files.common.placeholder.cannot-upload-some-files_one': 'Impossibile caricare il file',
  'inputs.files.common.placeholder.cannot-upload-some-files_other':
    'Impossibile caricare {{count}} file',
  /** Drag or paste type here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_file': 'Trascina o incolla qui il file',
  /** Drag or paste image here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_image':
    'Trascina o incolla qui l’immagine',
  /** Drop to upload file */
  'inputs.files.common.placeholder.drop-to-upload_file': 'Rilascia per caricare file',
  /** Drop to upload image */
  'inputs.files.common.placeholder.drop-to-upload_image': 'Rilascia per caricare immagine',
  /** Read only */
  'inputs.files.common.placeholder.read-only': 'Sola lettura',
  /** Can't upload files here */
  'inputs.files.common.placeholder.upload-not-supported': 'Non è possibile caricare file qui',
  /** Clear upload */
  'inputs.files.common.stale-upload-warning.clear': 'Cancella caricamento',
  /** An upload has made no progress for at least `{{staleThresholdMinutes}}` minutes and likely got interrupted. You can safely clear the incomplete upload and try uploading again. */
  'inputs.files.common.stale-upload-warning.description':
    'Un caricamento non ha fatto progressi per almeno {{staleThresholdMinutes}} minuti ed è probabilmente stato interrotto. Puoi cancellare in sicurezza il caricamento incompleto e provare a caricare di nuovo.',
  /** Incomplete upload */
  'inputs.files.common.stale-upload-warning.title': 'Caricamento incompleto',
  /** Tooltip text for action to crop image */
  'inputs.image.actions-menu.crop-image-tooltip': 'Ritaglia immagine',
  /** Accessibility label for button to open image edit dialog */
  'inputs.image.actions-menu.edit-details.aria-label': "Apri la finestra di modifica dell'immagine",
  /** Accessibility label for button to open image options menu */
  'inputs.image.actions-menu.options.aria-label': "Apri il menu delle opzioni dell'immagine",
  /** Select */
  'inputs.image.browse-menu.text': 'Seleziona',
  /** Cannot upload this file here */
  'inputs.image.drag-overlay.cannot-upload-here': 'Non è possibile caricare questo file qui',
  /** Drop image to upload */
  'inputs.image.drag-overlay.drop-to-upload-image': "Rilascia l'immagine per caricarla",
  /** This field is read only */
  'inputs.image.drag-overlay.this-field-is-read-only': 'Questo campo è di sola lettura',
  /** Unknown member kind: `{{kind}}` */
  'inputs.image.error.unknown-member-kind': 'Tipo di membro sconosciuto: {{kind}}',
  /** Edit hotspot and crop */
  'inputs.image.hotspot-dialog.title': 'Modifica hotspot e ritaglia',
  /** The value of this field is not a valid image. Resetting this field will let you choose a new image. */
  'inputs.image.invalid-image-warning.description':
    "Il valore di questo campo non è un'immagine valida. Reimpostando questo campo potrai scegliere una nuova immagine.",
  /** Reset value */
  'inputs.image.invalid-image-warning.reset-button.text': 'Reimposta valore',
  /** Invalid image value */
  'inputs.image.invalid-image-warning.title': "Valore dell'immagine non valido",
  /** Preview of uploaded image */
  'inputs.image.preview-uploaded-image': "Anteprima dell'immagine caricata",
  /** The upload could not be completed at this time. */
  'inputs.image.upload-error.description':
    'Il caricamento non può essere completato in questo momento.',
  /** Upload failed */
  'inputs.image.upload-error.title': 'Caricamento fallito',
  /** Adjust the rectangle to crop image. Adjust the circle to specify the area that should always be visible. */
  'inputs.imagetool.description':
    'Regola il rettangolo per ritagliare l’immagine. Regola il cerchio per specificare l’area che dovrebbe essere sempre visibile.',
  /** Error: `{{errorMessage}}` */
  'inputs.imagetool.load-error': 'Errore: {{errorMessage}}',
  /** Hotspot & Crop */
  'inputs.imagetool.title': 'Hotspot & Crop',
  /** Convert to `{{targetType}}` */
  'inputs.invalid-value.convert-button.text': 'Converti in <code>{{targetType}}</code>',
  /** The current value (<code>`{{actualType}}`</code>) */
  'inputs.invalid-value.current-type': 'Il valore attuale (<code>{{actualType}}</code>)',
  /** The property value is stored as a value type that does not match the expected type. */
  'inputs.invalid-value.description':
    'Il valore della proprietà è memorizzato come un tipo di valore che non corrisponde al tipo atteso.',
  /** The value of this property must be of type <code>`{{validType}}`</code> according to the schema. */
  'inputs.invalid-value.details.description':
    'Il valore di questa proprietà deve essere di tipo <code>{{validType}}</code> secondo lo schema.',
  /** Only the following types are valid here according to schema: */
  'inputs.invalid-value.details.multi-type-description':
    'Secondo lo schema, qui sono validi solo i seguenti tipi:',
  /** Mismatching value types typically occur when the schema has recently been changed. */
  'inputs.invalid-value.details.possible-reason':
    'Tipicamente si verificano tipi di valore non corrispondenti quando lo schema è stato recentemente modificato.',
  /** Developer info */
  'inputs.invalid-value.details.title': 'Informazioni per sviluppatori',
  /** -- Invalid Value Input -- */
  /** Reset value */
  'inputs.invalid-value.reset-button.text': 'Reimposta valore',
  /** Invalid property value */
  'inputs.invalid-value.title': 'Valore della proprietà non valido',
  /** Field groups */
  'inputs.object.field-group-tabs.aria-label': 'Gruppi di campi',
  /** Read-only field description */
  'inputs.object.unknown-fields.read-only.description':
    'Questo campo è <strong>solo lettura</strong> secondo lo schema del documento e non può essere deselezionato. Se vuoi poter deselezionare questo in Studio, assicurati di rimuovere il campo <code>readOnly</code> dal tipo che lo racchiude nello schema.',
  /** Remove field */
  'inputs.object.unknown-fields.remove-field-button.text': 'Rimuovi campo',
  /** Encountered `{{count}}` fields that are not defined in the schema. */
  'inputs.object.unknown-fields.warning.description_one':
    'Riscontrato un campo che non è definito nello schema.',
  'inputs.object.unknown-fields.warning.description_other':
    'Riscontrati {{count}} campi che non sono definiti nello schema.',
  /** Detailed description of unknown field warning */
  'inputs.object.unknown-fields.warning.details.description_one':
    "Questo campo non è definito nello schema, il che potrebbe significare che la definizione del campo è stata rimossa o che qualcun altro l'ha aggiunto al proprio progetto locale e non ha ancora distribuito le proprie modifiche.",
  'inputs.object.unknown-fields.warning.details.description_other':
    'Questi campi non sono definiti nello schema del documento, il che potrebbe significare che le definizioni dei campi sono state rimosse o che qualcun altro li ha aggiunti al proprio progetto locale e non ha ancora distribuito le proprie modifiche.',
  /** Developer info */
  'inputs.object.unknown-fields.warning.details.title': 'Informazioni per sviluppatori',
  /** Unknown field found */
  'inputs.object.unknown-fields.warning.title_one': 'Campo sconosciuto trovato',
  'inputs.object.unknown-fields.warning.title_other': 'Campi sconosciuti trovati',
  /** Collapse the editor to save screen space  */
  'inputs.portable-text.action.collapse-editor': 'Riduci editor',
  /** Aria label for action to edit an existing annotation */
  'inputs.portable-text.action.edit-annotation-aria-label': undefined, // 'Edit annotation'
  /** Expand the editor to give more editing space */
  'inputs.portable-text.action.expand-editor': 'Espandi editor',
  /** Label label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block': 'Inserisci {{typeName}}',
  /** Accessibility label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block-aria-label': 'Inserisci {{typeName}} (blocco)',
  /** Label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object': 'Inserisci {{typeName}}',
  /** Accessibility label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object-aria-label': 'Inserisci {{typeName}} (inline)',
  /** Aria label for action to remove an annotation */
  'inputs.portable-text.action.remove-annotation-aria-label': undefined, // 'Remove annotation'
  /** Label for activate on focus with context of click and not focused */
  'inputs.portable-text.activate-on-focus-message_click': 'Clicca per attivare',
  /** Label for activate on focus with context of click and focused */
  'inputs.portable-text.activate-on-focus-message_click-focused':
    'Clicca o premi spazio per attivare',
  /** Label for activate on focus with context of tap and not focused */
  'inputs.portable-text.activate-on-focus-message_tap': 'Tocca per attivare',
  /**Aria label for the annotation object */
  'inputs.portable-text.annotation-aria-label': undefined, // 'Annotation object'
  /** Title for dialog that allows editing an annotation */
  'inputs.portable-text.annotation-editor.title': 'Modifica {{schemaType}}',
  /** Title of the default "link" annotation */
  'inputs.portable-text.annotation.link': 'Collegamento',
  /**Aria label for the block object */
  'inputs.portable-text.block.aria-label': undefined, // 'Block object'
  /** Label for action to edit a block item, in the case where it is editable */
  'inputs.portable-text.block.edit': 'Modifica',
  /** Accessibility label for the button that opens the actions menu on blocks */
  'inputs.portable-text.block.open-menu-aria-label': 'Apri menu',
  /** Label for action to open a reference, in the case of block-level reference types */
  'inputs.portable-text.block.open-reference': 'Apri riferimento',
  /** Label for action to remove a block item */
  'inputs.portable-text.block.remove': 'Rimuovi',
  /** Label for action to view a block item, in the case where it is read-only and thus cannot be edited */
  'inputs.portable-text.block.view': 'Visualizza',
  /** Title of the "code" decorator */
  'inputs.portable-text.decorator.code': 'Codice',
  /** Title of the "em" (emphasis) decorator */
  'inputs.portable-text.decorator.emphasis': 'Corsivo',
  /** Title of the "strike-through" decorator */
  'inputs.portable-text.decorator.strike-through': 'Barrato',
  /** Title of the "strong" decorator */
  'inputs.portable-text.decorator.strong': 'Grassetto',
  /** Title of the "underline" decorator */
  'inputs.portable-text.decorator.underline': 'Sottolineato',
  /** Placeholder text for when the editor is empty */
  'inputs.portable-text.empty-placeholder': 'Vuoto',
  /**Aria label for the block object */
  'inputs.portable-text.inline-block.aria-label': undefined, // 'Inline object'
  /** Label for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit': 'Modifica oggetto',
  /** Aria label for icon for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit-aria-label': undefined, // 'Edit object'
  /** Label for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove': 'Rimuovi oggetto',
  /** Aria label for icon for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove-aria-label': undefined, // 'Remove object'
  /** Disclaimer text shown on invalid Portable Text value, when an action is available to unblock the user, but it is not guaranteed to be safe */
  'inputs.portable-text.invalid-value.action-disclaimer':
    "NOTA: Di solito è sicuro eseguire l'azione sopra, ma se hai dubbi, contatta i responsabili della configurazione del tuo studio.",
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.action': 'Rimuovi l’oggetto',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.description':
    'Figlio con chiave {{childKey}} del blocco con chiave <code>{{key}}</code> è di tipo <code>{{childType}}</code>, che non è permesso dallo schema.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.action': 'Rimuovi il blocco',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.description':
    'Il blocco con chiave <code>{{key}}</code> è di tipo <code>{{typeName}}</code>, che non è consentito dallo schema.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.action': 'Inserisci intervallo di testo vuoto',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.description':
    'Blocco di testo con chiave <code>{{key}}</code> non ha intervalli di testo.',
  /** Label for the button to ignore invalid values in the Portable Text editor */
  'inputs.portable-text.invalid-value.ignore-button.text': 'Ignora',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.action':
    'Usa il tipo <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.description':
    'Il blocco con chiave <code>{{key}}</code> ha un nome di tipo non valido. Secondo lo schema, dovrebbe essere <code>{{expectedTypeName}}</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.action': 'Imposta valore di testo vuoto',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.description':
    'Intervallo con chiave {{childKey}} del blocco con chiave <code>{{key}}</code> ha una proprietà <code>text</code> mancante o non valida.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.action':
    'Usa il tipo <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.description':
    'Il blocco con chiave <code>{{key}}</code> manca di un nome di tipo. Secondo lo schema, dovrebbe essere <code>{{expectedTypeName}}</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.action': 'Assegna chiave casuale',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.description':
    'Figlio all’indice <code>{{index}}</code> del blocco con chiave <code>{{key}}</code> manca della proprietà <code>_key</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.action': 'Rimuovi l’oggetto',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.description':
    'Figlio con chiave {{childKey}} del blocco con chiave <code>{{key}}</code> manca della proprietà <code>_type</code>.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.action': 'Assegna una chiave casuale',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.description':
    "Il blocco all'indice <code>{{index}}</code> manca della proprietà richiesta <code>_key</code>.",
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.action': 'Rimuovi il blocco',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.description':
    'Blocco di testo con chiave <code>{{key}}</code> ha una proprietà `children` mancante o non valida.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.action': 'Aggiungi proprietà',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.description':
    'Blocco di testo con chiave <code>{{key}}</code> ha una proprietà `markDefs` mancante o non valida.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.action': 'Rimuovi il blocco',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.description':
    'Il blocco con chiave <code>{{key}}</code> manca di un nome di tipo.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.action': 'Rimuovi l’elemento',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.description':
    'Figlio all’indice <code>{{index}}</code> del blocco con chiave <code>{{key}}</code> non è un oggetto.',
  /** Action presented when the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.action': 'Deseleziona il valore',
  /** Text explaining that the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.description':
    'Il valore deve essere un array di blocchi Portable Text, o non definito.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.action': 'Rimuovi elemento',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.description':
    "L'elemento in posizione <code>{{index}}</code> non è un oggetto.",
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.action': 'Rimuovi segni non consentiti',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.description':
    'Blocco di testo con chiave <code>{{key}}</code> contiene segni <code>({{orphanedMarks, list}})</code> che non sono permessi dallo schema.',
  /** Title for the alert indicating that the Portable Text field has an invalid value */
  'inputs.portable-text.invalid-value.title': 'Valore Portable Text non valido',
  /** Title of "bulleted" list type */
  'inputs.portable-text.list-type.bullet': 'Elenco puntato',
  /** Title of numbered list type */
  'inputs.portable-text.list-type.number': 'Elenco numerato',
  /** Title of the "h1" block style */
  'inputs.portable-text.style.h1': 'Intestazione 1',
  /** Title of the "h2" block style */
  'inputs.portable-text.style.h2': 'Intestazione 2',
  /** Title of the "h3" block style */
  'inputs.portable-text.style.h3': 'Intestazione 3',
  /** Title of the "h4" block style */
  'inputs.portable-text.style.h4': 'Intestazione 4',
  /** Title of the "h5" block style */
  'inputs.portable-text.style.h5': 'Intestazione 5',
  /** Title of the "h6" block style */
  'inputs.portable-text.style.h6': 'Intestazione 6',
  /** Title shown when multiple blocks of varying styles is selected */
  'inputs.portable-text.style.multiple': 'Multipli',
  /** Title of fallback when no style is given for a block */
  'inputs.portable-text.style.none': 'Nessuno stile',
  /** Title of the "normal" block style */
  'inputs.portable-text.style.normal': 'Normale',
  /** Title of the "quote" block style */
  'inputs.portable-text.style.quote': 'Citazione',
  /** Label for action to clear the current value of the reference field */
  'inputs.reference.action.clear': 'Cancella',
  /** Label for action to create a new document from the reference input */
  'inputs.reference.action.create-new-document': 'Crea nuovo',
  /** Label for action to create a new document from the reference input, when there are multiple templates or document types to choose from */
  'inputs.reference.action.create-new-document-select': 'Crea nuovo…',
  /** Label for action to duplicate the current item to a new item (used within arrays) */
  'inputs.reference.action.duplicate': 'Duplica',
  /** Label for action that opens the referenced document in a new tab */
  'inputs.reference.action.open-in-new-tab': 'Apri in una nuova scheda',
  /** Label for action to remove the reference from an array */
  'inputs.reference.action.remove': 'Rimuovi',
  /** Label for action to replace the current value of the field */
  'inputs.reference.action.replace': 'Sostituisci',
  /** Label for action to cancel a previously initiated replace action  */
  'inputs.reference.action.replace-cancel': 'Annulla sostituzione',
  /** The cross-dataset reference field currently has a reference, but the feature has been disabled since it was created. This explains what can/cannot be done in its current state. */
  'inputs.reference.cross-dataset.feature-disabled-actions':
    'Puoi ancora cancellare il riferimento esistente di questo campo, ma non può essere cambiato con un documento diverso finché la funzionalità è disabilitata.',
  /** A cross-dataset reference field exists but the feature has been disabled. A <DocumentationLink> component is available. */
  'inputs.reference.cross-dataset.feature-disabled-description':
    'Questa funzionalità è stata disabilitata. Leggi come abilitarla in <DocumentationLink>la documentazione</DocumentationLink>.',
  /** Title for a warning telling the user that the current project does not have the "cross dataset references" feature */
  'inputs.reference.cross-dataset.feature-unavailable-title':
    'Funzionalità non disponibile: Riferimento incrociato tra dataset',
  /** The cross-dataset reference points to a document with an invalid type  */
  'inputs.reference.cross-dataset.invalid-type':
    'Il documento di riferimento è di un tipo non valido ({{typeName}}) <JsonValue/>',
  /** The referenced document will open in a new tab (due to external studio) */
  'inputs.reference.document-opens-in-new-tab': 'Questo documento si apre in una nuova scheda',
  /** Error title for when the document is unavailable (for any possible reason) */
  'inputs.reference.error.document-unavailable-title': 'Documento non disponibile',
  /** Error title for when the referenced document failed to be loaded */
  'inputs.reference.error.failed-to-load-document-title':
    'Caricamento del documento di riferimento fallito',
  /** Error title for when the reference search returned a document that is not an allowed type for the field */
  'inputs.reference.error.invalid-search-result-type-title':
    'La ricerca ha restituito un tipo non valido per questo riferimento: "{{returnedType}}"',
  /** Error description for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-description':
    'Il documento di riferimento (<code>{{documentId}}</code>) è di tipo <code>{{actualType}}</code>. Secondo lo schema, i documenti di riferimento possono essere solo di tipo <AllowedTypes />.',
  /** Error title for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-title': 'Documento di tipo non valido',
  /** Error description for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-description':
    'Il documento di riferimento non può essere accessibile a causa di permessi insufficienti',
  /** Error title for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-title': 'Permessi insufficienti',
  /** Error description for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-description':
    'Il documento di riferimento non esiste (ID: <code>{{documentId}}</code>). Puoi rimuovere il riferimento o sostituirlo con un altro documento.',
  /** Error title for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-title': 'Non trovato',
  /** Label for button that clears the reference when it points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document.clear-button-label': 'Pulisci',
  /** Error title for when the search for a reference failed. Note that the message sent by the backend may not be localized. */
  'inputs.reference.error.search-failed-title': 'Ricerca della referenza fallita',
  /** Alternative text for the image shown in cross-dataset reference input */
  'inputs.reference.image-preview-alt-text': 'Anteprima immagine del documento di riferimento',
  /** Description for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-description':
    '<strong>{{referencedDocument}}</strong> è pubblicato e questo riferimento dovrebbe ora essere finalizzato.',
  /** Title for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-title': 'Finalizza riferimento',
  /** Description for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-description':
    '<strong>{{referencedDocument}}</strong> è pubblicato e questo riferimento dovrebbe ora essere convertito in un riferimento forte.',
  /** Title for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-title': 'Converti in riferimento forte',
  /** Label for button that triggers the action that strengthen a reference */
  'inputs.reference.incomplete-reference.strengthen-button-label': 'Converti in riferimento forte',
  /** Label for button that triggers a retry attempt for reference metadata  */
  'inputs.reference.metadata-error.retry-button-label': 'Riprova',
  /** Title for alert shown when reference metadata fails to be loaded */
  'inputs.reference.metadata-error.title': 'Impossibile caricare i metadati del riferimento',
  /** Message shown when no documents were found that matched the given search string */
  'inputs.reference.no-results-for-query': 'Nessun risultato per <strong>“{{searchTerm}}”</strong>',
  /** Text for tooltip showing when a document was edited, using relative time (eg "how long ago was it edited?") */
  'inputs.reference.preview.edited-at-time': 'Modificato <RelativeTime/>',
  /** Accessibility label for icon indicating that document does _not_ have any unpublished changes */
  'inputs.reference.preview.has-no-unpublished-changes-aria-label':
    'Nessuna modifica non pubblicata',
  /** Accessibility label for icon indicating that document has unpublished changes */
  'inputs.reference.preview.has-unpublished-changes-aria-label': 'Modificato',
  /** Accessibility label for icon indicating that document does _not_ have a published version */
  'inputs.reference.preview.is-not-published-aria-label': 'Non pubblicato',
  /** Accessibility label for icon indicating that document has a published version */
  'inputs.reference.preview.is-published-aria-label': 'Pubblicato',
  /** Text for tooltip indicating that a document has no unpublished edits */
  'inputs.reference.preview.no-unpublished-edits': 'Nessuna modifica non pubblicata',
  /** Text for tooltip indicating that a document has not yet been published */
  'inputs.reference.preview.not-published': 'Non pubblicato',
  /** Text for tooltip showing when a document was published, using relative time (eg "how long ago was it published?") */
  'inputs.reference.preview.published-at-time': 'Pubblicato <RelativeTime/>',
  /** The referenced document no longer exist and might have been deleted (for weak references) */
  'inputs.reference.referenced-document-does-not-exist':
    'Il documento di riferimento non esiste più e potrebbe essere stato cancellato (ID documento: <code>{{documentId}}</code>).',
  /** The referenced document could not be displayed to the user because of insufficient permissions */
  'inputs.reference.referenced-document-insufficient-permissions':
    'Il documento di riferimento non è accessibile a causa di permessi insufficienti',
  /** Label for when the reference input is resolving the initial value for an item */
  'inputs.reference.resolving-initial-value': 'Risolvendo il valore iniziale…',
  /** Placeholder shown in a reference input with no current value */
  'inputs.reference.search-placeholder': 'Digita per cercare',
  /** Explanation of the consequences of leaving the reference as strong instead of weak */
  'inputs.reference.strength-mismatch.is-strong-consquences':
    'Non sarà possibile eliminare il documento di riferimento senza prima rimuovere questo riferimento o convertirlo in debole.',
  /** Description for alert shown when a reference is supposed to be weak, but the actual value is strong */
  'inputs.reference.strength-mismatch.is-strong-description':
    'Questo riferimento è <em>forte</em>, ma secondo lo schema attuale dovrebbe essere <em>debole</em>.',
  /** Explanation of the consequences of leaving the reference as weak instead of strong */
  'inputs.reference.strength-mismatch.is-weak-consquences':
    'Questo rende possibile eliminare il documento di riferimento senza prima eliminare questo riferimento, lasciando questo campo che fa riferimento a un documento inesistente.',
  /** Description for alert shown when a reference is supposed to be strong, but the actual value is weak */
  'inputs.reference.strength-mismatch.is-weak-description':
    'Questo riferimento è <em>debole</em>, ma secondo lo schema attuale dovrebbe essere <em>forte</em>.',
  /** Label for button that triggers the action that strengthens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.strengthen-button-label': 'Converti in riferimento forte',
  /** Title for alert shown when a reference is supposed to be weak/strong, but the actual value is the opposite of what it is supposed to be */
  'inputs.reference.strength-mismatch.title': 'Discrepanza nella forza del riferimento',
  /** Label for button that triggers the action that weakens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.weaken-button-label': 'Converti in riferimento debole',
  /** Action message for generating the slug */
  'inputs.slug.action.generate': 'Genera',
  /** Loading message for when the input is actively generating a slug */
  'inputs.slug.action.generating': 'Generazione in corso…',
  /** Error message for when the source to generate a slug from is missing */
  'inputs.slug.error.missing-source':
    'La fonte è mancante. Controlla la fonte sul tipo {{schemaType}} nello schema',
  /** Placeholder for an empty tag input */
  'inputs.tags.placeholder': 'Inserisci tag e premi INVIO…',
  /** Placeholder for an empty tag input on touch devices */
  'inputs.tags.placeholder_touch': 'Inserisci tag…',
  /** Convert to `{{targetType}}` */
  'inputs.untyped-value.convert-button.text': 'Converti in <code>{{targetType}}</code>',
  /** Encountered an object value without a <code>_type</code> property. */
  'inputs.untyped-value.description':
    'Incontrato un valore oggetto senza una proprietà <code>_type</code>.',
  /** Either remove the <code>name</code> property of the object declaration, or set <code>_type</code> property on items. */
  'inputs.untyped-value.details.description':
    "Rimuovere la proprietà <code>name</code> della dichiarazione dell'oggetto, oppure impostare la proprietà <code>_type</code> sugli elementi.",
  /** Current value (<code>object</code>): */
  'inputs.untyped-value.details.json-dump-prefix': 'Valore corrente (<code>object</code>):',
  /** The following types are valid here according to schema: */
  'inputs.untyped-value.details.multi-type-description':
    'I seguenti tipi sono validi qui secondo lo schema:',
  /** Developer info */
  'inputs.untyped-value.details.title': 'Informazioni per sviluppatori',
  /** Property value missing <code>_type</code> */
  'inputs.untyped-value.title': 'Valore della proprietà mancante di <code>_type</code>',
  /** Unset value */
  'inputs.untyped-value.unset-item-button.text': 'Deseleziona valore',

  /** The fallback explanation if no context is provided */
  'insufficient-permissions-message.not-authorized-explanation':
    'Non hai il permesso di accedere a questa funzionalità.',
  /** The explanation when unable to create any document at all */
  'insufficient-permissions-message.not-authorized-explanation_create-any-document':
    'Non hai il permesso di creare un documento.',
  /** The explanation when unable to create a particular document */
  'insufficient-permissions-message.not-authorized-explanation_create-document':
    'Non hai il permesso di creare questo documento.',
  /** The explanation when unable to create a particular type of document */
  'insufficient-permissions-message.not-authorized-explanation_create-document-type':
    'Non hai il permesso di creare questo tipo di documento.',
  /** The explanation when unable to create a new reference in a document */
  'insufficient-permissions-message.not-authorized-explanation_create-new-reference':
    'Non hai il permesso di creare una nuova referenza.',
  /** The explanation when unable to delete a particular document */
  'insufficient-permissions-message.not-authorized-explanation_delete-document':
    'Non hai il permesso di eliminare questo documento.',
  /** The explanation when unable to discard changes in a particular document */
  'insufficient-permissions-message.not-authorized-explanation_discard-changes':
    'Non hai il permesso di scartare le modifiche in questo documento.',
  /** The explanation when unable to duplicate a particular document */
  'insufficient-permissions-message.not-authorized-explanation_duplicate-document':
    'Non hai il permesso di duplicare questo documento.',
  /** The explanation when unable to publish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_publish-document':
    'Non hai il permesso di pubblicare questo documento.',
  /** The explanation when unable to unpublish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_unpublish-document':
    'Non hai il permesso di ritirare la pubblicazione di questo documento.',
  /** Appears after the not-authorized message. Lists the current roles. */
  'insufficient-permissions-message.roles': 'I tuoi ruoli: <Roles/>',
  /** The title for the insufficient permissions message component */
  'insufficient-permissions-message.title': 'Permessi insufficienti',

  /** Unexpected error: `{{error}}` */
  'member-field-error.unexpected-error': 'Errore imprevisto: {{error}}',

  /** Button label for "Create new document" button */
  'new-document.button': 'Crea',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are templates/types available for creation
   */
  'new-document.create-new-document-label': 'Nuovo documento…',
  /** Placeholder for the "filter" input within the new document menu */
  'new-document.filter-placeholder': 'Filtra',
  /** Loading indicator text within the new document menu */
  'new-document.loading': 'Caricamento…',
  /** Accessibility label for the list displaying options in the new document menu */
  'new-document.new-document-aria-label': 'Nuovo documento',
  /** Message for when there are no document type options in the new document menu */
  'new-document.no-document-types-found': 'Nessun tipo di documento trovato',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are no templates/types to create from
   */
  'new-document.no-document-types-label': 'Nessun tipo di documento',
  /** Message for when no results are found for a specific search query in the new document menu */
  'new-document.no-results': 'Nessun risultato per <strong>{{searchQuery}}</strong>',
  /** Aria label for the button that opens the "Create new document" popover/dialog */
  'new-document.open-dialog-aria-label': 'Crea nuovo documento',
  /** Title for "Create new document" dialog */
  'new-document.title': 'Crea nuovo documento',

  /** Label for action to manage members of the current studio project */
  'presence.action.manage-members': 'Gestisci membri',
  /** Accessibility label for presence menu button */
  'presence.aria-label': 'Chi è qui',
  /** Message description for when no one else is currently present */
  'presence.no-one-else-description': 'Invita persone al progetto per vedere il loro stato online.',
  /** Message title for when no one else is currently present */
  'presence.no-one-else-title': 'Non c’è nessun altro qui',
  /** Message for when a user is not in a document (displayed in the global presence menu) */
  'presence.not-in-a-document': 'Non in un documento',
  /** Tooltip content text for presence menu button */
  'presence.tooltip-content': undefined, // 'Who is here'

  /** Fallback title shown when a preview does not provide a title */
  'preview.default.title-fallback': 'Senza titolo',
  /** Fallback preview value for types that have "no value" (eg null, undefined) */
  'preview.fallback.no-value': '(nessun valore)',
  /** Alternative text for image being shown while image is being uploaded, in previews */
  'preview.image.file-is-being-uploaded.alt-text': "L'immagine attualmente in caricamento",

  /* Relative time, just now */
  'relative-time.just-now': 'proprio ora',

  /** Accessibility label to open search action when the search would go fullscreen (eg on narrower screens) */
  'search.action-open-aria-label': 'Apri ricerca',
  /** Action label for adding a search filter */
  'search.action.add-filter': 'Aggiungi filtro',
  /** Action label for clearing search filters */
  'search.action.clear-filters': 'Cancella filtri',
  /** Label for action to clear recent searches */
  'search.action.clear-recent-searches': 'Cancella ricerche recenti',
  /** Accessibility label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-aria-label': 'Cancella filtri selezionati',
  /** Label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-label': 'Cancella',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to close the search */
  'search.action.close-search-aria-label': 'Chiudi ricerca',
  /** Accessibility label for filtering by document type */
  'search.action.filter-by-document-type-aria-label': 'Filtra per tipo di documento',
  /** Accessibility action label for removing an already applied search filter */
  'search.action.remove-filter-aria-label': 'Rimuovi filtro',
  /**
   * Text displayed when either no document type(s) have been selected, or we need a fallback,
   * eg "Search for all types".
   */
  'search.action.search-all-types': 'Cerca tutti i documenti',
  /**
   * Text displayed when we are able to determine one or more document types that will be used for
   * searching, and can fit within the space assigned by the design.
   */
  'search.action.search-specific-types': 'Cerca {{types, list}}',
  /**
   * Text displayed when we are able to determine one or more document types that will be used for
   * searching, but cannot list them all within the space assigned by the design, so we need an
   * additional "and X more" suffix. Allows using pluralization suffixes, eg `_one`, `_other` etc.
   */
  'search.action.search-specific-types-truncated': 'Cerca {{types, list}} +{{count}} altri',
  /** Dialog title for action to select an asset of unknown type */
  'search.action.select-asset': 'Seleziona risorsa',
  /** Dialog title for action to select a file asset */
  'search.action.select-asset_file': 'Seleziona file',
  /** Dialog title for action to select an image asset */
  'search.action.select-asset_image': 'Seleziona immagine',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-aria-label_hide': 'Nascondi filtri',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-aria-label_show': 'Mostra filtri',
  /** Label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-label_hide': 'Nascondi filtri',
  /** Label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-label_show': 'Mostra filtri',
  /** Tooltip text for the global search button */
  'search.button.tooltip': 'Cerca',
  /**
   * A list of provided types (use `list` formatter preferably).
   */
  'search.document-type-list': '{{types, list}}',
  /**
   * In the context of a list of document types - no filtering selection has been done,
   * thus the default is "all types".
   */
  'search.document-type-list-all-types': 'Tutti i tipi',
  /**
   * A list of provided types that has been truncated - more types are included but not displayed,
   * thus we need to indicate that there are more. Allows using pluralization suffixes,
   * eg `_one`, `_other` etc.
   */
  'search.document-type-list-truncated': '{{types, list}} +{{count}} altri',
  /** Accessibility label for list displaying the available document types */
  'search.document-types-aria-label': 'Tipi di documento',
  /** Label for when no document types matching the filter are found */
  'search.document-types-no-matches-found': 'Nessuna corrispondenza per {{filter}}',
  /** Description for error when a filter cannot be displayed, describes that you should check the schema */
  'search.error.display-filter-description':
    'Questo può indicare opzioni non valide definite nel tuo schema.',
  /** Title for error when a filter cannot be displayed (mainly a developer-oriented error) */
  'search.error.display-filter-title':
    'Si è verificato un errore durante la visualizzazione di questo filtro.',
  /** Description for error when no valid asset source is found, describes that you should check the the current studio config */
  'search.error.no-valid-asset-source-check-config-description':
    'Assicurati che sia abilitato nel file di configurazione del tuo studio.',
  /** Description for error when no valid asset source is found, describes that only the default asset is supported */
  'search.error.no-valid-asset-source-only-default-description':
    'Attualmente, è supportata solo la fonte di risorse predefinita.',
  /** Title for error when no valid asset sources found */
  'search.error.no-valid-asset-source-title': 'Nessuna fonte di asset valida trovata.',
  /** Helpful description for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-help-description':
    'Per favore riprova o controlla la tua connessione',
  /** Title label for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-title': 'Qualcosa è andato storto durante la ricerca',
  /**
   * Label for "All fields", a label that appears above the list of available fields when filtering.
   * If one or more document type has been chosen as filter, this label is replaced with a group of
   * fields per selected document type
   */
  'search.filter-all-fields-header': 'Tutti i campi',
  /** Label for the action of changing from one file to a different file in asset search filter */
  'search.filter-asset-change_file': 'Cambia file',
  /** Label for the action of changing from one image to a different image in asset search filter */
  'search.filter-asset-change_image': 'Cambia immagine',
  /** Label for the action of clearing the currently selected asset in an image/file filter */
  'search.filter-asset-clear': 'Pulisci',
  /** Label for the action of selecting a file in asset search filter */
  'search.filter-asset-select_file': 'Seleziona file',
  /** Label for the action of selecting an image in asset search filter */
  'search.filter-asset-select_image': 'Seleziona immagine',
  /** Label for boolean filter - false */
  'search.filter-boolean-false': 'Falso',
  /** Label for boolean filter - true */
  'search.filter-boolean-true': 'Vero',
  /** Accessibility label for list that lets you filter fields by title, when adding a new filter in search */
  'search.filter-by-title-aria-label': 'Filtra per titolo',
  /** Accessibility label for date filter input */
  'search.filter-date-aria-label': 'Data',
  /** Accessibility label for selecting end date on the date range search filter */
  'search.filter-date-range-end-date-aria-label': 'Data di fine',
  /** Accessibility label for selecting start date on the date range search filter */
  'search.filter-date-range-start-date-aria-label': 'Data di inizio',
  /**
   * Label for "Days"/"Months"/"Years" when selecting it as unit in "X days ago" search filter.
   * Capitalized, as it would be listed in a dropdown.
   */
  'search.filter-date-unit_days': 'Giorni',
  'search.filter-date-unit_months': 'Mesi',
  'search.filter-date-unit_years': 'Anni',
  /** Accessibility label for selecting the unit (day/month/year) when adding "X days ago" search filter */
  'search.filter-date-unit-aria-label': 'Seleziona unità',
  /** Accessibility label for the input value (days/months/years) when adding "X days ago" search filter */
  'search.filter-date-value-aria-label': "Valore dell'unità",
  /** Label for "field description" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-description': 'Descrizione del campo',
  /** Label for "field name" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-name': 'Nome del campo',
  /** Label for "Used in document types", a list of the document types a field appears in. Shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-used-in-document-types': 'Utilizzato nei tipi di documento',
  /** Label for when no fields/filters are found for the given term */
  'search.filter-no-matches-found': 'Nessuna corrispondenza per {{filter}}',
  /** Placeholder value for maximum numeric value filter */
  'search.filter-number-max-value-placeholder': 'Valore massimo',
  /** Placeholder value for minimum numeric value filter */
  'search.filter-number-min-value-placeholder': 'Valore minimo',
  /** Placeholder value for the number filter */
  'search.filter-number-value-placeholder': 'Valore',
  /** Placeholder for the "Filter" input, when narrowing possible fields/filters */
  'search.filter-placeholder': 'Filtra',
  /** Label for the action of clearing the currently selected document in a reference filter */
  'search.filter-reference-clear': 'Pulisci',
  /**
   * Label for "shared fields", a label that appears above a list of fields that all filtered types
   * have in common, when adding a new filter. For instance, if "book" and "employee" both have a
   * "title" field, this field would be listed under "shared fields".
   * */
  'search.filter-shared-fields-header': 'Campi condivisi',
  /** Placeholder value for the string filter */
  'search.filter-string-value-placeholder': 'Valore',
  /** Label/placeholder prompting user to select one of the predefined, allowed values for a string field */
  'search.filter-string-value-select-predefined-value': 'Seleziona…',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (singular) */
  'search.filters-aria-label_one': 'Filtro',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (plural) */
  'search.filters-aria-label_other': 'Filtri',
  /** Label for instructions on how to use the search - displayed when no recent searches are available */
  'search.instructions': 'Usa <ControlsIcon/> per affinare la tua ricerca',
  /** Helpful description for when no search results are found */
  'search.no-results-help-description': "Prova un'altra parola chiave o aggiusta i tuoi filtri",
  /** Title label for when no search results are found */
  'search.no-results-title': 'Nessun risultato trovato',
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
    '<Field/> <Operator>ha</Operator> <Value>{{count}} elemento</Value>',
  'search.operator.array-count-equal.description_other':
    '<Field/> <Operator>ha</Operator> <Value>{{count}} elementi</Value>',
  'search.operator.array-count-equal.name': 'la quantità è',
  /* Array should have a count greater than given filter value */
  'search.operator.array-count-gt.description_one':
    '<Field/> <Operator>ha ></Operator> <Value>{{count}} elemento</Value>',
  'search.operator.array-count-gt.description_other':
    '<Field/> <Operator>ha ></Operator> <Value>{{count}} elementi</Value>',
  'search.operator.array-count-gt.name': 'quantità maggiore di',
  /* Array should have a count greater than or equal to the given filter value */
  'search.operator.array-count-gte.description_one':
    '<Field/> <Operator>ha ≥</Operator> <Value>{{count}} elemento</Value>',
  'search.operator.array-count-gte.description_other':
    '<Field/> <Operator>ha ≥</Operator> <Value>{{count}} elementi</Value>',
  'search.operator.array-count-gte.name': 'quantità maggiore o uguale a',
  /* Array should have a count less than given filter value */
  'search.operator.array-count-lt.description_one':
    '<Field/> <Operator>ha <</Operator> <Value>{{count}} elemento</Value>',
  'search.operator.array-count-lt.description_other':
    '<Field/> <Operator>ha <</Operator> <Value>{{count}} elementi</Value>',
  'search.operator.array-count-lt.name': 'quantità minore di',
  /* Array should have a count less than or equal to the given filter value */
  'search.operator.array-count-lte.description_one':
    '<Field/> <Operator>ha ≤</Operator> <Value>{{count}} elemento</Value>',
  'search.operator.array-count-lte.description_other':
    '<Field/> <Operator>ha ≤</Operator> <Value>{{count}} elementi</Value>',
  'search.operator.array-count-lte.name': 'quantità minore o uguale a',
  /* Array should have a count that is not equal to the given filter value */
  'search.operator.array-count-not-equal.description_one':
    '<Field/> <Operator>non ha</Operator> <Value>{{count}} elemento</Value>',
  'search.operator.array-count-not-equal.description_other':
    '<Field/> <Operator>non ha</Operator> <Value>{{count}} elementi</Value>',
  'search.operator.array-count-not-equal.name': 'quantità non è',
  /**
   * Array should have a count within the range of given filter values.
   * Gets passed `{{from}}` and `{{to}}` values.
   **/
  'search.operator.array-count-range.description':
    '<Field/> <Operator>ha tra</Operator> <Value>{{from}} → {{to}} elementi</Value>',
  'search.operator.array-count-range.name': 'quantità è tra',
  /* Array should include the given value */
  'search.operator.array-list-includes.description':
    '<Field/> <Operator>include</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-includes.name': 'include',
  /* Array should not include the given value */
  'search.operator.array-list-not-includes.description':
    '<Field/> <Operator>non include</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-not-includes.name': 'non include',
  /* Array should include the given reference */
  'search.operator.array-reference-includes.description':
    '<Field/> <Operator>include</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-includes.name': 'include',
  /* Array should not include the given reference */
  'search.operator.array-reference-not-includes.description':
    '<Field/> <Operator>non include</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-not-includes.name': 'non include',
  /* Asset (file) should be the selected asset */
  'search.operator.asset-file-equal.description':
    '<Field/> <Operator>è</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-equal.name': 'è',
  /* Asset (file) should not be the selected asset */
  'search.operator.asset-file-not-equal.description':
    '<Field/> <Operator>non è</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-not-equal.name': 'non è',
  /* Asset (image) should be the selected asset */
  'search.operator.asset-image-equal.description':
    '<Field/> <Operator>è</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-equal.name': 'è',
  /* Asset (image) should not be the selected asset */
  'search.operator.asset-image-not-equal.description':
    '<Field/> <Operator>non è</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-not-equal.name': 'non è',
  /**
   * Boolean value should be the given filter value (true/false).
   * Context passed is `true` and `false`, allowing for more specific translations:
   * - `search.operator.boolean-equal.description_true`
   * - `search.operator.boolean-equal.description_false`
   */
  'search.operator.boolean-equal.description':
    '<Field/> <Operator>è</Operator> <Value>{{value}}</Value>',
  'search.operator.boolean-equal.name': 'è',
  /* Date should be after (later than) given filter value */
  'search.operator.date-after.description':
    '<Field/> <Operator>è dopo</Operator> <Value>{{value}}</Value>',
  'search.operator.date-after.name': 'dopo',
  /* Date should be before (earlier than) given filter value */
  'search.operator.date-before.description':
    '<Field/> <Operator>è prima</Operator> <Value>{{value}}</Value>',
  'search.operator.date-before.name': 'prima',
  /* Date should be the given filter value */
  'search.operator.date-equal.description':
    '<Field/> <Operator>è</Operator> <Value>{{value}}</Value>',
  'search.operator.date-equal.name': 'è',
  /* Date should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-last.description':
    '<Field/> <Operator>è negli ultimi</Operator> <Value>{{value}}</Value>',
  'search.operator.date-last.name': 'ultimo',
  /* Date should not be the given filter value */
  'search.operator.date-not-equal.description':
    '<Field/> <Operator>non è</Operator> <Value>{{value}}</Value>',
  'search.operator.date-not-equal.name': 'non è',
  /* Date should be within the range of given filter values */
  'search.operator.date-range.description': '<Field/> <Operator>è tra</Operator> <Value/>',
  'search.operator.date-range.name': 'è tra',
  /* Date and time should be after (later than) given filter value */
  'search.operator.date-time-after.description':
    '<Field/> <Operator>è dopo</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-after.name': 'dopo',
  /* Date and time should be before (earlier than) given filter value */
  'search.operator.date-time-before.description':
    '<Field/> <Operator>è prima</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-before.name': 'prima',
  /* Date and time should be the given filter value */
  'search.operator.date-time-equal.description':
    '<Field/> <Operator>è</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-equal.name': 'è',
  /* Date and time should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-time-last.description':
    '<Field/> <Operator>è negli ultimi</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-last.name': 'ultimo',
  /* Date and time should not be the given filter value */
  'search.operator.date-time-not-equal.description':
    '<Field/> <Operator>non è</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-not-equal.name': 'non è',
  /* Date and time should be within the range of given filter values */
  'search.operator.date-time-range.description': '<Field/> <Operator>è tra</Operator> <Value/>',
  'search.operator.date-time-range.name': 'è tra',
  /* Value should be defined */
  'search.operator.defined.description': '<Field/> <Operator>è</Operator> <Value>non vuoto</Value>',
  'search.operator.defined.name': 'non vuoto',
  /* Value should not be defined */
  'search.operator.not-defined.description': '<Field/> <Operator>è</Operator> <Value>vuoto</Value>',
  'search.operator.not-defined.name': 'vuoto',
  /* Number should be the given filter value */
  'search.operator.number-equal.description':
    '<Field/> <Operator>è</Operator> <Value>{{value}}</Value>',
  'search.operator.number-equal.name': 'è',
  /* Number should be greater than given filter value */
  'search.operator.number-gt.description':
    '<Field/> <Operator>></Operator> <Value>{{value}}</Value>',
  'search.operator.number-gt.name': 'maggiore di',
  /* Number should be greater than or the given filter value */
  'search.operator.number-gte.description':
    '<Field/> <Operator>≥</Operator> <Value>{{value}}</Value>',
  'search.operator.number-gte.name': 'maggiore o uguale a',
  /* Number should be less than given filter value */
  'search.operator.number-lt.description':
    '<Field/> <Operator><</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lt.name': 'minore di',
  /* Number should be less than or the given filter value */
  'search.operator.number-lte.description':
    '<Field/> <Operator>≤</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lte.name': 'minore o uguale a',
  /* Number should not be the given filter value */
  'search.operator.number-not-equal.description':
    '<Field/> <Operator>non è</Operator> <Value>{{value}}</Value>',
  'search.operator.number-not-equal.name': 'non è',
  /* Number should be within the range of given filter values */
  'search.operator.number-range.description':
    '<Field/> <Operator>è tra</Operator> <Value>{{from}} → {{to}}</Value>',
  'search.operator.number-range.name': 'è tra',
  /* Portable Text should contain the given filter value */
  'search.operator.portable-text-contains.description':
    '<Field/> <Operator>contiene</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-contains.name': 'contiene',
  /* Portable Text should be the given filter value */
  'search.operator.portable-text-equal.description':
    '<Field/> <Operator>è</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-equal.name': 'è',
  /* Portable Text should not contain the given filter value */
  'search.operator.portable-text-not-contains.description':
    '<Field/> <Operator>non contiene</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-contains.name': 'non contiene',
  /* Portable Text should not be the given filter value */
  'search.operator.portable-text-not-equal.description':
    '<Field/> <Operator>non è</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-equal.name': 'non è',
  /* References the given asset (file) */
  'search.operator.reference-asset-file.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-file.name': 'file',
  /* References the given asset (image) */
  'search.operator.reference-asset-image.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-image.name': 'immagine',
  /* References the given document */
  'search.operator.reference-document.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-document.name': 'documento',
  /* Reference should be the given document */
  'search.operator.reference-equal.description':
    '<Field/> <Operator>è</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-equal.name': 'è',
  /* Reference should not be the given document */
  'search.operator.reference-not-equal.description':
    '<Field/> <Operator>non è</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-not-equal.name': 'non è',
  /* Slug contains the given value */
  'search.operator.slug-contains.description':
    '<Field/> <Operator>contiene</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-contains.name': 'contiene',
  /* Slug equals the given filter value */
  'search.operator.slug-equal.description':
    '<Field/> <Operator>è</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-equal.name': 'è',
  /* Slug does not contain the given value */
  'search.operator.slug-not-contains.description':
    '<Field/> <Operator>non contiene</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-contains.name': 'non contiene',
  /* Slug does not equal the given filter value */
  'search.operator.slug-not-equal.description':
    '<Field/> <Operator>non è</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-equal.name': 'non è',
  /* String contains the given filter value */
  'search.operator.string-contains.description':
    '<Field/> <Operator>contiene</Operator> <Value>{{value}}</Value>',
  'search.operator.string-contains.name': 'contiene',
  /* String equals the given filter value */
  'search.operator.string-equal.description':
    '<Field/> <Operator>è</Operator> <Value>{{value}}</Value>',
  'search.operator.string-equal.name': 'è',
  /* String equals one of the predefined allowed values */
  'search.operator.string-list-equal.description':
    '<Field/> <Operator>è</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-equal.name': 'è',
  /* String does not equal one of the predefined allowed values */
  'search.operator.string-list-not-equal.description':
    '<Field/> <Operator>non è</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-not-equal.name': 'non è',
  /* String does not contain the given filter value */
  'search.operator.string-not-contains.description':
    '<Field/> <Operator>non contiene</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-contains.name': 'non contiene',
  /* String does not equal the given filter value */
  'search.operator.string-not-equal.description':
    '<Field/> <Operator>non è</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-equal.name': 'non è',
  /** Label for the "Best match" search ordering type */
  'search.ordering.best-match-label': 'Migliore corrispondenza',
  /** Label for the "Created: Oldest first" search ordering type */
  'search.ordering.created-ascending-label': 'Creato: Dal più vecchio',
  /** Label for the "Created: Newest first" search ordering type */
  'search.ordering.created-descending-label': 'Creato: Dal più recente',
  /** Label for the "Updated: Oldest first" search ordering type */
  'search.ordering.updated-ascending-label': 'Aggiornato: Dal più vecchio',
  /** Label for the "Updated: Newest first" search ordering type */
  'search.ordering.updated-descending-label': 'Aggiornato: Dal più recente',
  /** Placeholder text for the global search input field */
  'search.placeholder': 'Cerca',
  /** Accessibility label for the recent searches section, shown when no valid search terms has been given */
  'search.recent-searches-aria-label': 'Ricerche recenti',
  /** Label/heading shown for the recent searches section */
  'search.recent-searches-label': 'Ricerche recenti',
  /** Accessibility label for the search results section, shown when the user has typed valid terms */
  'search.search-results-aria-label': 'Risultati della ricerca',

  /** Accessibility label for the navbar status button */
  'status-button.aria-label': undefined, // 'Configuration status'

  /** Description for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-description':
    'Le transazioni della cronologia del documento non sono state interessate.',
  /** Title for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-title':
    'Si è verificato un errore durante il recupero delle modifiche al documento.',
  /** Error description for when the document doesn't have history */
  'timeline.error.no-document-history-description':
    'Cambiando il contenuto del documento, le versioni del documento appariranno in questo menu.',
  /** Error title for when the document doesn't have history */
  'timeline.error.no-document-history-title': 'Nessuna cronologia del documento',
  /** Error prompt when revision cannot be loaded */
  'timeline.error.unable-to-load-revision': 'Impossibile caricare la revisione',
  /** Label for when the timeline item is the latest in the history */
  'timeline.latest': 'Più recente',
  /** Label for latest version for timeline menu dropdown */
  'timeline.latest-version': 'Ultima versione',
  /** The aria-label for the list of revisions in the timeline */
  'timeline.list.aria-label': 'Revisioni del documento',
  /** Label for loading history */
  'timeline.loading-history': 'Caricamento cronologia…',
  /** Label shown in review changes timeline when a document has been created */
  'timeline.operation.created': 'Creato',
  /** Label shown in review changes timeline when a document has been created, with a timestamp */
  'timeline.operation.created_timestamp': 'Creato: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was initially created */
  'timeline.operation.created-initial': 'Creato',
  /** Label shown in review changes timeline when a document was initially created, with a timestamp */
  'timeline.operation.created-initial_timestamp': 'Creato: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been deleted */
  'timeline.operation.deleted': 'Eliminato',
  /** Label shown in review changes timeline when a document has been deleted, with a timestamp */
  'timeline.operation.deleted_timestamp': 'Eliminato: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been discarded */
  'timeline.operation.draft-discarded': 'Bozza scartata',
  /** Label shown in review changes timeline when a draft has been discarded, with a timestamp */
  'timeline.operation.draft-discarded_timestamp': 'Bozza scartata: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been edited */
  'timeline.operation.edited-draft': 'Modificato',
  /** Label shown in review changes timeline when a draft has been edited, with a timestamp */
  'timeline.operation.edited-draft_timestamp': 'Modificato: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been edited live */
  'timeline.operation.edited-live': 'Modificato dal vivo',
  /** Label shown in review changes timeline when a document has been edited live, with a timestamp */
  'timeline.operation.edited-live_timestamp': 'Modificato dal vivo: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was published */
  'timeline.operation.published': 'Pubblicato',
  /** Label shown in review changes timeline when a document was published, with a timestamp */
  'timeline.operation.published_timestamp': 'Pubblicato: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was unpublished */
  'timeline.operation.unpublished': 'Non pubblicato',
  /** Label shown in review changes timeline when a document was unpublished, with a timestamp */
  'timeline.operation.unpublished_timestamp': 'Non pubblicato: {{timestamp, datetime}}',
  /**
   * Label for determining since which version the changes for timeline menu dropdown are showing.
   * Receives the time label as a parameter (`timestamp`).
   */
  'timeline.since': 'Da: {{timestamp, datetime}}',
  /** Label for missing change version for timeline menu dropdown are showing */
  'timeline.since-version-missing': 'Da: versione sconosciuta',

  /**Aria label for the action buttons in the PTE toolbar */
  'toolbar.portable-text.action-button-aria-label': undefined, // '{{action}}'

  /** Label for button showing the free trial days left */
  'user-menu.action.free-trial_one': '{{count}} giorno rimanente nel periodo di prova',
  'user-menu.action.free-trial_other': '{{count}} giorni rimanenti nel periodo di prova',
  /** Label for the button showed after trial ended */
  'user-menu.action.free-trial-finished': 'Passa alla versione a pagamento',
  /** Label for action to invite members to the current sanity project */
  'user-menu.action.invite-members': 'Invita membri',
  /** Accessibility label for action to invite members to the current sanity project */
  'user-menu.action.invite-members-aria-label': 'Invita membri',
  /** Label for action to manage the current sanity project */
  'user-menu.action.manage-project': 'Gestisci progetto',
  /** Accessibility label for the action to manage the current project */
  'user-menu.action.manage-project-aria-label': 'Gestisci progetto',
  /** Tooltip helper text when portable text annotation is disabled for empty block*/
  'user-menu.action.portable-text.annotation-disabled_empty-block':
    'Impossibile applicare {{name}} a un blocco vuoto',
  /** Tooltip helper text when portable text annotation is disabled for multiple blocks */
  'user-menu.action.portable-text.annotation-disabled_multiple-blocks':
    'Impossibile applicare {{name}} a blocchi multipli',
  /** Label for action to sign out of the current sanity project */
  'user-menu.action.sign-out': 'Esci',
  /** Title for appearance section for the current studio (dark / light / system scheme) */
  'user-menu.appearance-title': 'Aspetto',
  /** Label for close menu button for user menu */
  'user-menu.close-menu': 'Chiudi menu',
  /** Description for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-description': 'Usa aspetto scuro',
  /** Title for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-title': 'Scuro',
  /** Description for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-description': 'Usa aspetto chiaro',
  /** Title for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-title': 'Chiaro',
  /** Description for using "system apparence" in the appearance user menu */
  'user-menu.color-scheme.system-description': 'Usa aspetto del sistema',
  /** Title for using system apparence in the appearance user menu */
  'user-menu.color-scheme.system-title': 'Sistema',
  /** Title for locale section for the current studio */
  'user-menu.locale-title': 'Lingua',
  /** Label for tooltip to show which provider the currently logged in user is using */
  'user-menu.login-provider': 'Accesso effettuato con {{providerTitle}}',
  /** Label for open menu button for user menu */
  'user-menu.open-menu': undefined, // 'Open menu'

  /**
   * Label for action to add a workspace (currently a developer-oriented action, as this will
   * lead to the documentation on workspace configuration)
   */
  'workspaces.action.add-workspace': 'Aggiungi spazio di lavoro',
  /**
   * Label for action to choose a different workspace, in the case where you are not logged in,
   * have selected a workspace, and are faced with the authentication options for the selected
   * workspace. In other words, label for the action shown when you have reconsidered which
   * workspace to authenticate in.
   */
  'workspaces.action.choose-another-workspace': 'Scegli un altro spazio di lavoro',
  /** Label for heading that indicates that you can choose your workspace */
  'workspaces.choose-your-workspace-label': 'Scegli il tuo spazio di lavoro',
  /** Label for the workspace menu */
  'workspaces.select-workspace-aria-label': 'Seleziona spazio di lavoro',
  /** Button label for opening the workspace switcher */
  'workspaces.select-workspace-label': 'Seleziona spazio di lavoro',
  /** Tooltip for the workspace menu */
  'workspaces.select-workspace-tooltip': undefined, // 'Select workspace'
  /** Title for Workplaces dropdown menu */
  'workspaces.title': 'Spazi di lavoro',
})
