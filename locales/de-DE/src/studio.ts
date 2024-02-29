import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Menu item for deleting the asset */
  'asset-source.asset-list.menu.delete': 'Löschen',
  /** Menu item for showing where a particular asset is used */
  'asset-source.asset-list.menu.show-usage': 'Verwendung anzeigen',
  /** Header in usage dialog for file assets */
  'asset-source.asset-usage-dialog.header_file': 'Dokumente, die die Datei verwenden',
  /** Header in usage dialog for image assets */
  'asset-source.asset-usage-dialog.header_image': 'Dokumente, die das Bild verwenden',
  /** Text shown in usage dialog when loading documents using the selected asset */
  'asset-source.asset-usage-dialog.loading': 'Laden…',
  /** Text for cancel action in delete-asset dialog */
  'asset-source.delete-dialog.action.cancel': 'Abbrechen',
  /** Text for "confirm delete" action in delete-asset dialog */
  'asset-source.delete-dialog.action.delete': 'Löschen',
  /** Dialog header for delete-asset dialog when deleting a file */
  'asset-source.delete-dialog.header_file': 'Datei löschen',
  /** Dialog header for delete-asset dialog when deleting an image */
  'asset-source.delete-dialog.header_image': 'Bild löschen',
  /** Text shown in delete dialog when loading documents using the selected asset */
  'asset-source.delete-dialog.loading': 'Laden…',
  /** Message confirming to delete *named* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_named':
    'Sie sind dabei, die Datei <strong>{{filename}}}</strong> und ihre Metadaten zu löschen. Sind Sie sicher?',
  /** Message confirming to delete *unnamed* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_unnamed':
    'Sie sind dabei, die Datei und ihre Metadaten zu löschen. Sind Sie sicher?',
  /** Message confirming to delete *named* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_named':
    'Sie sind dabei, das Bild <strong>{{filename}}</strong> und seine Metadaten zu löschen. Sind Sie sicher?',
  /** Message confirming to delete *unnamed* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_unnamed':
    'Sie sind dabei, das Bild und seine Metadaten zu löschen. Sind Sie sicher?',
  /** Alt text showing on image preview in delete asset dialog  */
  'asset-source.delete-dialog.usage-list.image-preview-alt': 'Vorschau des Bildes',
  /** Warning message showing when *named* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_named':
    '{{filename}} kann nicht gelöscht werden, da es verwendet wird. Um diese Datei zu löschen, müssen Sie zuerst alle Verwendungen davon entfernen.',
  /** Warning message showing when *unnamed* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_unnamed':
    'Diese Datei kann nicht gelöscht werden, da sie verwendet wird. Um sie zu löschen, müssen Sie zuerst alle Verwendungen davon entfernen.',
  /** Warning message showing when *named* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_named':
    '{{filename}} kann nicht gelöscht werden, da es verwendet wird. Um dieses Bild zu löschen, müssen Sie zuerst alle Verwendungen davon entfernen.',
  /** Warning message showing when *unnamed* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_unnamed':
    'Dieses Bild kann nicht gelöscht werden, da es verwendet wird. Um es zu löschen, müssen Sie zuerst alle Verwendungen davon entfernen.',
  /** Text shown when the list of assets only include a specific set of types */
  'asset-source.dialog.accept-message':
    'Es werden nur Assets angezeigt, die den akzeptierten Typen entsprechen: <strong>{{acceptTypes}}</strong>',
  /** Keys shared between both image asset source and file asset source */
  /** Select asset dialog title for files */
  'asset-source.dialog.default-title_file': 'Datei auswählen',
  /** Select asset dialog title for images */
  'asset-source.dialog.default-title_image': 'Bild auswählen',
  /** Select asset dialog load more items */
  'asset-source.dialog.load-more': 'Mehr laden',
  /** Text shown when selecting a file but there's no files to select from */
  'asset-source.dialog.no-assets_file': 'Keine Dateien',
  /** Text shown when selecting an image but there's no images to select from */
  'asset-source.dialog.no-assets_image': 'Keine Bilder',
  'asset-source.file.asset-list.action.delete.disabled-cannot-delete-current-file':
    'Aktuell ausgewählte Datei kann nicht gelöscht werden',
  'asset-source.file.asset-list.action.delete.text': 'Löschen',
  'asset-source.file.asset-list.action.delete.title': 'Datei löschen',
  'asset-source.file.asset-list.action.select-file.title': 'Wählen Sie die Datei {{filename}} aus',
  'asset-source.file.asset-list.action.show-usage.title': 'Nutzung anzeigen',
  'asset-source.file.asset-list.delete-failed': 'Datei konnte nicht gelöscht werden',
  'asset-source.file.asset-list.delete-successful': 'Datei wurde gelöscht',
  'asset-source.file.asset-list.header.date-added': 'Hinzugefügt am',
  /** File asset source */
  'asset-source.file.asset-list.header.filename': 'Dateiname',
  'asset-source.file.asset-list.header.size': 'Größe',
  'asset-source.file.asset-list.header.type': 'Typ',
  /** Text displayed on button or menu invoking the file asset source */
  'asset-source.file.title': 'Hochgeladene Dateien',
  'asset-source.image.asset-list.delete-failed': 'Bild konnte nicht gelöscht werden',
  /** Image asset source */
  'asset-source.image.asset-list.delete-successful': 'Bild wurde gelöscht',
  /** Text displayed on button or menu invoking the image asset source */
  'asset-source.image.title': 'Hochgeladene Bilder',
  'asset-source.usage-list.documents-using-file_named_one':
    'Ein Dokument verwendet die Datei <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-file_named_other':
    '{{count}} Dokumente verwenden die Datei <code>{{filename}}</code>',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *named* file **/
  'asset-source.usage-list.documents-using-file_named_zero':
    'Keine Dokumente verwenden die Datei <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-file_unnamed_one': 'Ein Dokument verwendet diese Datei',
  'asset-source.usage-list.documents-using-file_unnamed_other':
    '{{count}} Dokumente verwenden diese Datei',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *unnamed* file **/
  'asset-source.usage-list.documents-using-file_unnamed_zero':
    'Keine Dokumente verwenden diese Datei',
  'asset-source.usage-list.documents-using-image_named_one':
    'Ein Dokument verwendet das Bild <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-image_named_other':
    '{{count}} Dokumente verwenden das Bild <code>{{filename}}</code>',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *named* image **/
  'asset-source.usage-list.documents-using-image_named_zero':
    'Keine Dokumente verwenden das Bild <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-image_unnamed_one': 'Ein Dokument verwendet dieses Bild',
  'asset-source.usage-list.documents-using-image_unnamed_other':
    '{{count}} Dokumente verwenden dieses Bild',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *unnamed* image **/
  'asset-source.usage-list.documents-using-image_unnamed_zero':
    'Keine Dokumente verwenden dieses Bild',

  /** Action message for navigating to next month */
  'calendar.action.go-to-next-month': 'Zum nächsten Monat gehen',
  /** Action message for navigating to next year */
  'calendar.action.go-to-next-year': 'Zum nächsten Jahr gehen',
  /** Action message for navigating to previous month */
  'calendar.action.go-to-previous-month': 'Zum vorherigen Monat gehen',
  /** Action message for navigating to previous year */
  'calendar.action.go-to-previous-year': 'Zum vorherigen Jahr gehen',
  /* Label for navigating the calendar to "today", without _selecting_ today. Short form, eg `Today`, not `Go to today` */
  'calendar.action.go-to-today': 'Heute',
  /* Accessibility label for navigating the calendar to "today", without _selecting_ today */
  'calendar.action.go-to-today-aria-label': 'Gehe zu heute',
  /* Label for navigating the calendar to "tomorrow", without _selecting_ tomorrow. Short form, eg `Tomorrow`, not `Go to tomorrow` */
  'calendar.action.go-to-tomorrow': 'Morgen',
  /* Label for navigating the calendar to "yesterday", without _selecting_ yesterday. Short form, eg `Yesterday`, not `Go to yesterday` */
  'calendar.action.go-to-yesterday': 'Gestern',
  /** Label for switch that controls whether or not to include time in given timestamp */
  'calendar.action.include-time-label': 'Zeit einbeziehen',
  /** Action message for selecting the hour */
  'calendar.action.select-hour': 'Stunde auswählen',
  /** Action message for selecting the minute */
  'calendar.action.select-minute': 'Minute auswählen',
  /** Action message for setting to the current time */
  'calendar.action.set-to-current-time': 'Auf aktuelle Zeit setzen',
  /** Label for selecting an hour preset. Receives a `time` param as a string on hh:mm format and a `date` param as a Date instance denoting the preset date */
  'calendar.action.set-to-time-preset': '{{time}} am {{date, datetime}}',
  /** Error message displayed in calendar when entered date is not the correct format */
  'calendar.error.must-be-in-format': 'Muss im Format <Emphasis>{{exampleDate}}</Emphasis> sein',
  /** Month name for April */
  'calendar.month-names.april': 'April',
  /** Month name for August */
  'calendar.month-names.august': 'August',
  /** Month name for December */
  'calendar.month-names.december': 'Dezember',
  /** Month name for February */
  'calendar.month-names.february': 'Februar',
  /** Month name for January */
  'calendar.month-names.january': 'Januar',
  /** Month name for July */
  'calendar.month-names.july': 'Juli',
  /** Month name for June */
  'calendar.month-names.june': 'Juni',
  /** Month name for March */
  'calendar.month-names.march': 'März',
  /** Month name for May */
  'calendar.month-names.may': 'Mai',
  /** Month name for November */
  'calendar.month-names.november': 'November',
  /** Month name for October */
  'calendar.month-names.october': 'Oktober',
  /** Month name for September */
  'calendar.month-names.september': 'September',
  /** Short weekday name for Friday */
  'calendar.weekday-names.short.friday': 'Fr',
  /** Short weekday name for Monday */
  'calendar.weekday-names.short.monday': 'Mo',
  /** Short weekday name for Saturdayday */
  'calendar.weekday-names.short.saturday': 'Sa',
  /** Short weekday name for Sunday */
  'calendar.weekday-names.short.sunday': 'So',
  /** Short weekday name for Thursday */
  'calendar.weekday-names.short.thursday': 'Do',
  /** Short weekday name for Tuesday */
  'calendar.weekday-names.short.tuesday': 'Di',
  /** Short weekday name for Wednesday */
  'calendar.weekday-names.short.wednesday': 'Mi',

  /** Label for the close button label in Review Changes pane */
  'changes.action.close-label': 'Änderungsüberprüfung schließen',
  /** Cancel label for revert button prompt action */
  'changes.action.revert-all-cancel': 'Abbrechen',
  /** Revert all confirm label for revert button action - used on prompt button + review changes pane */
  'changes.action.revert-all-confirm': 'Alle zurücksetzen',
  /** Prompt for reverting all changes in document in Review Changes pane. Includes a count of changes. */
  'changes.action.revert-all-description':
    'Sind Sie sicher, dass Sie alle {{count}} Änderungen zurücksetzen möchten?',
  /** Prompt for confirming revert change (singular) label for field change action */
  'changes.action.revert-changes-confirm-change_one': 'Änderung rückgängig machen',
  /** Revert for confirming revert (plural) label for field change action */
  'changes.action.revert-changes-confirm-change_other': 'Änderungen rückgängig machen',
  /** Prompt for reverting changes for a field change */
  'changes.action.revert-changes-description':
    'Sind Sie sicher, dass Sie die Änderungen rückgängig machen möchten?',
  /** Prompt for reverting changes for a group change, eg multiple changes */
  'changes.action.revert-changes-description_one':
    'Sind Sie sicher, dass Sie die Änderung rückgängig machen möchten?',
  /** Label for when the action of the change was to set something that was previously empty, eg a field was given a value, an array item was added, an asset was selected or similar */
  'changes.added-label': 'Hinzugefügt',
  /** Array diff: An item was added in a given position (`{{position}}`) */
  'changes.array.item-added-in-position': 'Hinzugefügt an Position {{position}}',
  'changes.array.item-moved_down_one': 'Um {{count}} Position nach unten verschoben',
  'changes.array.item-moved_down_other': 'Um {{count}} Positionen nach unten verschoben',
  /**
   * Array diff: An item was moved within the array.
   * Receives `{{count}}` representing number of positions it moved.
   * Context is the direction of the move, either `up` or `down`.
   */
  'changes.array.item-moved_up_one': 'Um {{count}} Position nach oben verschoben',
  'changes.array.item-moved_up_other': 'Um {{count}} Positionen nach oben verschoben',
  /** Array diff: An item was removed from a given position (`{{position}}`) */
  'changes.array.item-removed-from-position': 'Entfernt von Position {{position}}',
  /** Accessibility label for the "change bar" shown when there are edits on a field-level */
  'changes.change-bar.aria-label': 'Änderungen überprüfen',
  /** Label for when the action of the change was _not_ an add/remove, eg a text field changed value, an image was changed from one asset to another or similar */
  'changes.changed-label': 'Geändert',
  /** Label and text for tooltip that indicates the authors of the changes */
  'changes.changes-by-author': 'Änderungen von',
  /** Additional text shown in development mode when a diff component crashes during rendering */
  'changes.error-boundary.developer-info':
    'Überprüfen Sie die Entwicklerkonsole für weitere Informationen',
  /** Text shown when a diff component crashes during rendering, triggering the error boundary */
  'changes.error-boundary.title':
    'Das Rendern der Änderungen an diesem Feld verursachte einen Fehler',
  /** Error message shown when the value of a field is not the expected one */
  'changes.error.incorrect-type-message':
    'Wertfehler: Wert ist vom Typ "<code>{{actualType}}</code>", erwartet wurde "<code>{{expectedType}}</code>"',
  /** File diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.file.meta-info-fallback-title': 'Ohne Titel',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.crop-changed': 'Zuschnitt geändert',
  /** Image diff: Text shown if the previous image asset was deleted (shouldn't theoretically happen) */
  'changes.image.deleted': 'Bild gelöscht',
  /** Image diff: Text shown if the image failed to be loaded when previewing it */
  'changes.image.error-loading-image': 'Fehler beim Laden des Bildes',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.hotspot-changed': 'Hotspot geändert',
  /** Image diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.image.meta-info-fallback-title': 'Ohne Titel',
  /** Image diff: Text shown if no asset has been set for the field (but has metadata changes) */
  'changes.image.no-asset-set': 'Bild nicht festgelegt',
  /** Image diff: Text shown when the from/to state has/had no image */
  'changes.image.no-image-placeholder': '(kein Bild)',
  /** Label for the "from" value in the change inspector */
  'changes.inspector.from-label': 'Von',
  /** Label for the "meta" (field path, action etc) information in the change inspector */
  'changes.inspector.meta-label': 'Meta',
  /** Label for the "to" value in the change inspector */
  'changes.inspector.to-label': 'Zu',
  /** Loading author of change in the differences tooltip in the review changes pane */
  'changes.loading-author': 'Lade…',
  /** Loading changes in Review Changes Pane */
  'changes.loading-changes': 'Änderungen werden geladen…',
  /** No Changes description in the Review Changes pane */
  'changes.no-changes-description':
    'Bearbeiten Sie das Dokument oder wählen Sie eine ältere Version in der Zeitleiste aus, um eine Liste der Änderungen in diesem Panel angezeigt zu bekommen.',
  /** No Changes title in the Review Changes pane */
  'changes.no-changes-title': 'Es gibt keine Änderungen',
  /** Portable Text diff: An annotation was added */
  'changes.portable-text.annotation_added': 'Anmerkung hinzugefügt',
  /** Portable Text diff: An annotation was changed */
  'changes.portable-text.annotation_changed': 'Annotation geändert',
  /** Portable Text diff: An annotation was removed */
  'changes.portable-text.annotation_removed': 'Annotation entfernt',
  /** Portable Text diff: An annotation was left unchanged */
  'changes.portable-text.annotation_unchanged': 'Annotation unverändert',
  /** Portable Text diff: A block changed from one style to another (eg `normal` to `h1` or similar) */
  'changes.portable-text.block-style-changed':
    'Blockstil von "{{fromStyle}}" zu "{{toStyle}}" geändert',
  /** Portable Text diff: Change formatting of text (setting/unsetting marks, eg bold/italic etc) */
  'changes.portable-text.changed-formatting': 'Formatierung geändert',
  /** Portable Text diff: An empty inline object is part of a change */
  'changes.portable-text.empty-inline-object': 'Leeres {{inlineObjectType}}',
  /** Portable Text diff: An empty object is the result of adding/removing an annotation */
  'changes.portable-text.empty-object-annotation': 'Leeres {{annotationType}}',
  /** Portable Text diff: Added a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_added': 'Leeren Text hinzugefügt',
  /** Portable Text diff: Changed a block that contained no text (eg empty block) */
  'changes.portable-text.empty-text_changed': 'Leeren Text geändert',
  /** Portable Text diff: Removed a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_removed': 'Leeren Text entfernt',
  /** Portable Text diff: An inline object was added */
  'changes.portable-text.inline-object_added': 'Inline-Objekt hinzugefügt',
  /** Portable Text diff: An inline object was changed */
  'changes.portable-text.inline-object_changed': 'Inline-Objekt geändert',
  /** Portable Text diff: An inline object was removed */
  'changes.portable-text.inline-object_removed': 'Inline-Objekt entfernt',
  /** Portable Text diff: An inline object was left unchanged */
  'changes.portable-text.inline-object_unchanged': 'Inline-Objekt unverändert',
  /** Portable Text diff: Added a chunk of text */
  'changes.portable-text.text_added': 'Text hinzugefügt',
  /** Portable Text diff: Removed a chunk of text */
  'changes.portable-text.text_removed': 'Text entfernt',
  /** Portable Text diff: Annotation has an unknown schema type */
  'changes.portable-text.unknown-annotation-schema-type': 'Unbekannter Schematyp',
  /** Portable Text diff: Inline object has an unknown schema type */
  'changes.portable-text.unknown-inline-object-schema-type': 'Unbekannter Schematyp',
  /** Label for when the action of the change was a removal, eg a field was cleared, an array item was removed, an asset was deselected or similar */
  'changes.removed-label': 'Entfernt',
  /** Title for the Review Changes pane */
  'changes.title': 'Änderungen überprüfen',

  /** --- Common components --- */
  /** Tooltip text for context menu buttons */
  'common.context-menu-button.tooltip': 'Mehr anzeigen',
  /** Default text for dialog cancel button */
  'common.dialog.cancel-button.text': 'Abbrechen',
  /** Default text for dialog confirm button */
  'common.dialog.confirm-button.text': 'Bestätigen',
  /** Default text in shared loader text / spinner lockup */
  'common.loading': 'Laden',

  /** --- Configuration issues --- */
  /** Tooltip displayed on configuration issues button */
  'configuration-issues.button.tooltip': 'Konfigurationsprobleme gefunden',

  /** The fallback title for an ordering menu item if no localized titles are provided. */
  'default-menu-item.fallback-title': 'Sortieren nach {{title}}',

  /** Title for the default ordering/SortOrder if no orderings are provided and the caption field is found */
  'default-orderings.caption': 'Nach Beschriftung sortieren',
  /** Title for the default ordering/SortOrder if no orderings are provided and the description field is found */
  'default-orderings.description': 'Nach Beschreibung sortieren',
  /** Title for the default ordering/SortOrder if no orderings are provided and the header field is found */
  'default-orderings.header': 'Nach Kopfzeile sortieren',
  /** Title for the default ordering/SortOrder if no orderings are provided and the heading field is found */
  'default-orderings.heading': 'Nach Überschrift sortieren',
  /** Title for the default ordering/SortOrder if no orderings are provided and the label field is found */
  'default-orderings.label': 'Nach Etikett sortieren',
  /** Title for the default ordering/SortOrder if no orderings are provided and the name field is found */
  'default-orderings.name': 'Nach Name sortieren',
  /** Title for the default ordering/SortOrder if no orderings are provided and the title field is found */
  'default-orderings.title': 'Nach Titel sortieren',

  /** Label to show in the document footer indicating the last edited date of the document */
  'document-status.edited': 'Bearbeitet {{date}}',
  /** Label to show in the document footer indicating the document is not published*/
  'document-status.not-published': 'Nicht veröffentlicht',
  /** Label to show in the document footer indicating the published date of the document */
  'document-status.published': 'Veröffentlicht {{date}}',

  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.duplicate-keys-alert.details.additional-description':
    'Der Wert der <code>_key</code>-Eigenschaft muss eine eindeutige Zeichenkette sein.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property of each elements has been generated non-uniquely. */
  'form.error.duplicate-keys-alert.details.description':
    'Dies passiert normalerweise, wenn Elemente mit einem API-Client erstellt werden und die <code>_key</code>-Eigenschaft jedes Elements nicht eindeutig generiert wurde.',
  /** Developer info */
  'form.error.duplicate-keys-alert.details.title': 'Entwicklerinformationen',
  /** Generate unique keys */
  'form.error.duplicate-keys-alert.generate-button.text': 'Eindeutige Schlüssel generieren',
  /** Several items in this list share the same identifier (key). Every item must have an unique identifier. */
  'form.error.duplicate-keys-alert.summary':
    'Mehrere Elemente in dieser Liste teilen denselben Identifikator (Schlüssel). Jedes Element muss einen eindeutigen Identifikator haben.',
  /** Non-unique keys */
  'form.error.duplicate-keys-alert.title': 'Nicht-eindeutige Schlüssel',
  /** Error text shown when a field with a given name cannot be found in the schema or is conditionally hidden but explicitly told to render  */
  'form.error.field-not-found':
    'Feld "{{fieldName}}" nicht unter den Mitgliedern gefunden – überprüfen Sie, ob es im Schema definiert ist und dass es nicht bedingt ausgeblendet wurde.',
  /** Add missing keys */
  'form.error.missing-keys-alert.add-button.text': 'Fehlende Schlüssel hinzufügen',
  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.missing-keys-alert.details.additional-description':
    'Der Wert der Eigenschaft <code>_key</code> muss eine eindeutige Zeichenkette sein.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property has not been included. */
  'form.error.missing-keys-alert.details.description':
    'Dies passiert normalerweise, wenn Elemente mit einem API-Client erstellt werden und die Eigenschaft <code>_key</code> nicht einbezogen wurde.',
  /** Developer info */
  'form.error.missing-keys-alert.details.title': 'Entwicklerinfo',
  /** Some items in the list are missing their keys. This must be fixed in order to edit the list. */
  'form.error.missing-keys-alert.summary':
    'Einigen Elementen in der Liste fehlen ihre Schlüssel. Dies muss behoben werden, um die Liste bearbeiten zu können.',
  /** Missing keys */
  'form.error.missing-keys-alert.title': 'Fehlende Schlüssel',
  /** This usually happens when items are created using an API client, or when a custom input component has added invalid data to the list. */
  'form.error.mixed-array-alert.details.description':
    'Dies passiert normalerweise, wenn Elemente mit einem API-Client erstellt werden oder wenn eine benutzerdefinierte Eingabekomponente ungültige Daten zur Liste hinzugefügt hat.',
  /** Developer info */
  'form.error.mixed-array-alert.details.title': 'Entwicklerinfo',
  /**  Remove non-object values */
  'form.error.mixed-array-alert.remove-button.text': 'Nicht-Objekt-Werte entfernen',
  /** Some items in this list are not objects. This must be fixed in order to edit the list. */
  'form.error.mixed-array-alert.summary':
    'Einige Elemente in dieser Liste sind keine Objekte. Dies muss behoben werden, um die Liste bearbeiten zu können.',
  /** Invalid list values */
  'form.error.mixed-array-alert.title': 'Ungültige Listenwerte',
  /** Error text shown when form is unable to find an array item at a given indexed path */
  'form.error.no-array-item-at-index':
    'Kein Array-Element am Index <code>{{index}}</code> unter dem Pfad <code>{{path}}</code> gefunden',
  /** Error text shown when form is unable to find an array item at a given keyed path */
  'form.error.no-array-item-at-key':
    'Kein Array-Element mit `_key` <code>"{{key}}"</code> unter dem Pfad <code>{{path}}</code> gefunden',
  /** Form field deprecated label */
  'form.field.deprecated-label': undefined, // 'deprecated'
  /** Fallback title shown above field if it has no defined title */
  'form.field.untitled-field-label': 'Ohne Titel',
  /** Fallback title shown above fieldset if it has no defined title */
  'form.field.untitled-fieldset-label': 'Ohne Titel',
  /** Accessibility label for the icon that indicates the field has a validation error */
  'form.validation.has-error-aria-label': 'Hat einen Fehler',
  /** Accessibility label for the icon that indicates the field has validation information */
  'form.validation.has-info-aria-label': 'Hat Informationen',
  /** Accessibility label for the icon that indicates the field has a validation warning */
  'form.validation.has-warning-aria-label': 'Hat eine Warnung',
  /** Text shown when summarizing validation information, when the field has one or more errors */
  'form.validation.summary.errors-count_one': '{{count}} Fehler',
  'form.validation.summary.errors-count_other': '{{count}} Fehler',
  /** Text shown when summarizing validation information, when the field has one or more warnings */
  'form.validation.summary.warnings-count_one': '{{count}} Warnung',
  'form.validation.summary.warnings-count_other': '{{count}} Warnungen',

  /** Tooltip for free trial navbar button indicating remaining days */
  'free-trial.tooltip.days-count_one': undefined, // '{{count}} day left in trial'
  'free-trial.tooltip.days-count_other': undefined, // '{{count}} days left in trial'
  /** Tooltip for free trial navbar button, once trial has ended */
  'free-trial.tooltip.trial-finished': undefined, // 'Upgrade your project'

  /**
   * Label for "contact sales" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.contact-sales': 'Vertrieb kontaktieren',
  /**
   * Label for "help and support" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.help-and-support': 'Hilfe und Unterstützung',
  /**
   * Label for "join our community" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.join-our-community': 'Treten Sie unserer Community bei',
  /** Information for what the latest sanity version is */
  'help-resources.latest-sanity-version': 'Die neueste Version ist {{latestVersion}}',
  /** Information for what studio version the current studio is running */
  'help-resources.studio-version': 'Sanity Studio Version {{studioVersion}}',
  /** Title for help and resources menus */
  'help-resources.title': 'Hilfe und Ressourcen',

  /** Text for button to cancel an ongoing upload */
  'input.files.common.cancel-upload': 'Hochladen abbrechen',
  /** Text for file input button in upload placeholder */
  'input.files.common.upload-placeholder.file-input-button.text': 'Hochladen',
  /** Uploading <FileName/> */
  'input.files.common.upload-progress': 'Hochladen <FileName/>',
  /** The referenced document cannot be opened, because the URL failed to be resolved */
  'input.reference.document-cannot-be-opened.failed-to-resolve-url':
    'Dieses Dokument kann nicht geöffnet werden (URL zum Studio konnte nicht aufgelöst werden)',

  /** Label for adding item after a specific array item */
  'inputs.array.action.add-after': 'Element danach hinzufügen',
  /** Label for adding item before a specific array item */
  'inputs.array.action.add-before': 'Element davor hinzufügen',
  /** Label for adding array item action when the schema allows for only one schema type */
  'inputs.array.action.add-item': 'Element hinzufügen',
  /**
   * Label for adding one array item action when the schema allows for multiple schema types,
   * eg. will prompt the user to select a type once triggered
   */
  'inputs.array.action.add-item-select-type': 'Element hinzufügen...',
  /** Array drag handle button tooltip */
  'inputs.array.action.drag.tooltip': 'Ziehen, um neu zu ordnen',
  /** Label for duplicating an array item  */
  'inputs.array.action.duplicate': 'Duplizieren',
  /** Label for editing the item of a specific type, eg "Edit Person" */
  'inputs.array.action.edit': '{{itemTypeTitle}} bearbeiten',
  /** Label for removing an array item action  */
  'inputs.array.action.remove': 'Entfernen',
  /** Label for removing action when an array item has an error  */
  'inputs.array.action.remove-invalid-item': 'Entfernen',
  /** Label for viewing the item of a specific type, eg "View Person" */
  'inputs.array.action.view': '{{itemTypeTitle}} ansehen',
  /** Error description for the array item tooltip that explains that the current item can still be moved or deleted but not edited since the schema definition is not found */
  'inputs.array.error.can-delete-but-no-edit-description':
    'Sie können dieses Element noch verschieben oder löschen, aber es kann nicht bearbeitet werden, da die Schema-Definition für seinen Typ nirgendwo zu finden ist.',
  /** Error label for toast when array could not resolve the initial value */
  'inputs.array.error.cannot-resolve-initial-value-title':
    'Anfangswert für Typ kann nicht aufgelöst werden: {{schemaTypeTitle}}: {{errorMessage}}.',
  /** Error label for toast when trying to upload one array item of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_one':
    'Das folgende Element kann nicht hochgeladen werden, da keine bekannte Konvertierung vom Inhaltstyp zum Array-Element existiert:',
  /** Error label for toast when trying to upload multiple array items of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_other':
    'Die folgenden Elemente können nicht hochgeladen werden, da keine bekannte Konvertierung von Inhaltstypen zum Array-Element existiert:',
  /** Error description for the array item tooltip that explains that the current type item is not valid for the list  */
  'inputs.array.error.current-schema-not-declare-description':
    'Das aktuelle Schema erklärt Elemente vom Typ <code>{{typeName}}</code> nicht als gültig für diese Liste. Das könnte bedeuten, dass der Typ als gültiger Elementtyp entfernt wurde, oder dass jemand anderes ihn zu seinem eigenen lokalen Schema hinzugefügt hat, das noch nicht bereitgestellt ist.',
  /** Error description to show how the item is being represented in the json format */
  'inputs.array.error.json-representation-description': 'JSON-Darstellung dieses Elements:',
  /** Error description for the array item tooltip that explains what the error means with more context */
  'inputs.array.error.type-is-incompatible-prompt':
    'Elementtyp <code>{{typeName}}</code> ist für diese Liste nicht gültig',
  /** Error title for when an item type within an array input is incompatible, used in the tooltip */
  'inputs.array.error.type-is-incompatible-title': 'Warum passiert das?',
  /** Error label for unexpected errors in the Array Input */
  'inputs.array.error.unexpected-error': 'Unerwarteter Fehler: {{error}}',
  /** Label for when the array input doesn't have any items */
  'inputs.array.no-items-label': 'Keine Elemente',
  /** Label for read only array fields */
  'inputs.array.read-only-label': 'Dieses Feld ist schreibgeschützt',
  /** Label for when the array input is resolving the initial value for the item */
  'inputs.array.resolving-initial-value': 'Ermitteln des Anfangswerts…',
  /** Placeholder value for datetime input */
  'inputs.datetime.placeholder': 'z.B. {{example}}',
  /** Acessibility label for button to open file options menu */
  'inputs.file.actions-menu.file-options.aria-label': 'Dateioptionen-Menü öffnen',
  /** Browse */
  'inputs.file.browse-button.text': 'Durchsuchen',
  /** Select file */
  'inputs.file.dialog.title': 'Datei auswählen',
  /** Unknown member kind: `{{kind}}` */
  'inputs.file.error.unknown-member-kind': 'Unbekannter Mitgliedstyp: {{kind}}',
  /** The value of this field is not a valid file. Resetting this field will let you choose a new file. */
  'inputs.file.invalid-file-warning.description':
    'Der Wert dieses Feldes ist keine gültige Datei. Durch Zurücksetzen dieses Feldes können Sie eine neue Datei auswählen.',
  /** Reset value */
  'inputs.file.invalid-file-warning.reset-button.text': 'Wert zurücksetzen',
  /** Invalid file value */
  'inputs.file.invalid-file-warning.title': 'Ungültiger Dateiwert',
  /** Select */
  'inputs.file.multi-browse-button.text': 'Auswählen',
  /** The upload could not be completed at this time. */
  'inputs.file.upload-failed.description': 'Der Upload konnte derzeit nicht abgeschlossen werden.',
  /** Upload failed */
  'inputs.file.upload-failed.title': 'Upload fehlgeschlagen',
  /** Clear field */
  'inputs.files.common.actions-menu.clear-field.label': 'Feld leeren',
  /** Copy URL */
  'inputs.files.common.actions-menu.copy-url.label': 'URL kopieren',
  /** Download */
  'inputs.files.common.actions-menu.download.label': 'Herunterladen',
  /** The URL is copied to the clipboard */
  'inputs.files.common.actions-menu.notification.url-copied':
    'Die URL wurde in die Zwischenablage kopiert',
  /** Replace */
  'inputs.files.common.actions-menu.replace.label': 'Ersetzen',
  /** Upload */
  'inputs.files.common.actions-menu.upload.label': 'Hochladen',
  /** Drop to upload */
  'inputs.files.common.drop-message.drop-to-upload': 'Zum Hochladen hierher ziehen',
  /** Drop to upload `{{count}}` file */
  'inputs.files.common.drop-message.drop-to-upload-multi_one':
    'Ziehen Sie die Datei hierher, um sie hochzuladen {{count}} Datei',
  /** Drop to upload `{{count}}` files */
  'inputs.files.common.drop-message.drop-to-upload-multi_other':
    'Ziehen Sie die Dateien hierher, um sie hochzuladen {{count}} Dateien',
  /** Can't upload this file here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_one':
    'Diese Datei kann hier nicht hochgeladen werden',
  /** Can't upload any of these files here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_other':
    'Keine dieser Dateien kann hier hochgeladen werden',
  /** `{{count}}` file can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_one':
    '{{count}} Datei kann hier nicht hochgeladen werden',
  /** `{{count}}` files can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_other':
    '{{count}} Dateien können hier nicht hochgeladen werden',
  /** Cannot upload `{{count}}` files */
  'inputs.files.common.placeholder.cannot-upload-some-files_one': 'Kann Datei nicht hochladen',
  'inputs.files.common.placeholder.cannot-upload-some-files_other':
    'Kann {{count}} Dateien nicht hochladen',
  /** Drag or paste type here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_file':
    'Datei hierher ziehen oder einfügen zum Hochladen',
  /** Drag or paste image here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_image':
    'Bild hierher ziehen oder einfügen zum Hochladen',
  /** Drop to upload file */
  'inputs.files.common.placeholder.drop-to-upload_file': 'Datei hierher ziehen zum Hochladen',
  /** Drop to upload image */
  'inputs.files.common.placeholder.drop-to-upload_image': 'Bild hierher ziehen zum Hochladen',
  /** Read only */
  'inputs.files.common.placeholder.read-only': 'Nur lesen',
  /** Can't upload files here */
  'inputs.files.common.placeholder.upload-not-supported':
    'Dateien können hier nicht hochgeladen werden',
  /** Clear upload */
  'inputs.files.common.stale-upload-warning.clear': 'Upload löschen',
  /** An upload has made no progress for at least `{{staleThresholdMinutes}}` minutes and likely got interrupted. You can safely clear the incomplete upload and try uploading again. */
  'inputs.files.common.stale-upload-warning.description':
    'Ein Upload hat mindestens {{staleThresholdMinutes}} Minuten lang keinen Fortschritt gemacht und wurde wahrscheinlich unterbrochen. Sie können den unvollständigen Upload sicher löschen und erneut versuchen hochzuladen.',
  /** Incomplete upload */
  'inputs.files.common.stale-upload-warning.title': 'Unvollständiger Upload',
  /** Tooltip text for action to crop image */
  'inputs.image.actions-menu.crop-image-tooltip': 'Bild zuschneiden',
  /** Accessibility label for button to open image edit dialog */
  'inputs.image.actions-menu.edit-details.aria-label': 'Bilddialog bearbeiten öffnen',
  /** Accessibility label for button to open image options menu */
  'inputs.image.actions-menu.options.aria-label': 'Bildoptionen-Menü öffnen',
  /** Select */
  'inputs.image.browse-menu.text': 'Auswählen',
  /** Cannot upload this file here */
  'inputs.image.drag-overlay.cannot-upload-here': 'Diese Datei kann hier nicht hochgeladen werden',
  /** Drop image to upload */
  'inputs.image.drag-overlay.drop-to-upload-image': 'Bild zum Hochladen hier ablegen',
  /** This field is read only */
  'inputs.image.drag-overlay.this-field-is-read-only': 'Dieses Feld ist schreibgeschützt',
  /** Unknown member kind: `{{kind}}` */
  'inputs.image.error.unknown-member-kind': 'Unbekannter Mitgliedstyp: {{kind}}',
  /** Edit hotspot and crop */
  'inputs.image.hotspot-dialog.title': 'Hotspot bearbeiten und zuschneiden',
  /** The value of this field is not a valid image. Resetting this field will let you choose a new image. */
  'inputs.image.invalid-image-warning.description':
    'Der Wert dieses Feldes ist kein gültiges Bild. Durch das Zurücksetzen dieses Feldes können Sie ein neues Bild auswählen.',
  /** Reset value */
  'inputs.image.invalid-image-warning.reset-button.text': 'Wert zurücksetzen',
  /** Invalid image value */
  'inputs.image.invalid-image-warning.title': 'Ungültiger Bildwert',
  /** Preview of uploaded image */
  'inputs.image.preview-uploaded-image': 'Vorschau des hochgeladenen Bildes',
  /** The upload could not be completed at this time. */
  'inputs.image.upload-error.description': 'Der Upload konnte derzeit nicht abgeschlossen werden.',
  /** Upload failed */
  'inputs.image.upload-error.title': 'Upload fehlgeschlagen',
  /** Adjust the rectangle to crop image. Adjust the circle to specify the area that should always be visible. */
  'inputs.imagetool.description':
    'Passen Sie das Rechteck an, um das Bild zuzuschneiden. Passen Sie den Kreis an, um den Bereich zu spezifizieren, der immer sichtbar sein sollte.',
  /** Error: `{{errorMessage}}` */
  'inputs.imagetool.load-error': 'Fehler: {{errorMessage}}',
  /** Hotspot & Crop */
  'inputs.imagetool.title': 'Hotspot & Crop',
  /** Convert to `{{targetType}}` */
  'inputs.invalid-value.convert-button.text': 'Konvertieren zu <code>{{targetType}}</code>',
  /** The current value (<code>`{{actualType}}`</code>) */
  'inputs.invalid-value.current-type': 'Der aktuelle Wert (<code>{{actualType}}</code>)',
  /** The property value is stored as a value type that does not match the expected type. */
  'inputs.invalid-value.description':
    'Der Eigenschaftswert ist als ein Werttyp gespeichert, der nicht dem erwarteten Typ entspricht.',
  /** The value of this property must be of type <code>`{{validType}}`</code> according to the schema. */
  'inputs.invalid-value.details.description':
    'Der Wert dieser Eigenschaft muss gemäß dem Schema vom Typ <code>{{validType}}</code> sein.',
  /** Only the following types are valid here according to schema: */
  'inputs.invalid-value.details.multi-type-description':
    'Nur die folgenden Typen sind hier laut Schema gültig:',
  /** Mismatching value types typically occur when the schema has recently been changed. */
  'inputs.invalid-value.details.possible-reason':
    'Nicht übereinstimmende Werttypen treten typischerweise auf, wenn das Schema kürzlich geändert wurde.',
  /** Developer info */
  'inputs.invalid-value.details.title': 'Entwicklerinfo',
  /** -- Invalid Value Input -- */
  /** Reset value */
  'inputs.invalid-value.reset-button.text': 'Wert zurücksetzen',
  /** Invalid property value */
  'inputs.invalid-value.title': 'Ungültiger Eigenschaftswert',
  /** Field groups */
  'inputs.object.field-group-tabs.aria-label': 'Feldgruppen',
  /** Read-only field description */
  'inputs.object.unknown-fields.read-only.description':
    'Dieses Feld ist laut Schema des Dokuments <strong>nur lesbar</strong> und kann nicht entfernt werden. Wenn Sie dies im Studio entfernen können möchten, stellen Sie sicher, dass Sie das <code>readOnly</code> Feld aus dem umschließenden Typ im Schema entfernen.',
  /** Remove field */
  'inputs.object.unknown-fields.remove-field-button.text': 'Feld entfernen',
  /** Encountered `{{count}}` fields that are not defined in the schema. */
  'inputs.object.unknown-fields.warning.description_one':
    'Ein Feld, das nicht im Schema definiert ist, wurde gefunden.',
  'inputs.object.unknown-fields.warning.description_other':
    '{{count}} Felder, die nicht im Schema definiert sind, wurden gefunden.',
  /** Detailed description of unknown field warning */
  'inputs.object.unknown-fields.warning.details.description_one':
    'Dieses Feld ist nicht im Schema definiert, was bedeuten könnte, dass die Felddefinition entfernt wurde oder dass jemand anderes es zu seinem eigenen lokalen Projekt hinzugefügt hat und seine Änderungen noch nicht bereitgestellt hat.',
  'inputs.object.unknown-fields.warning.details.description_other':
    'Diese Felder sind nicht im Schema des Dokuments definiert, was bedeuten könnte, dass die Felddefinitionen entfernt wurden oder dass jemand anderes sie zu seinem eigenen lokalen Projekt hinzugefügt hat und seine Änderungen noch nicht bereitgestellt hat.',
  /** Developer info */
  'inputs.object.unknown-fields.warning.details.title': 'Entwicklerinformationen',
  /** Unknown field found */
  'inputs.object.unknown-fields.warning.title_one': 'Unbekanntes Feld gefunden',
  'inputs.object.unknown-fields.warning.title_other': 'Unbekannte Felder gefunden',
  /** Collapse the editor to save screen space  */
  'inputs.portable-text.action.collapse-editor': 'Editor minimieren',
  /** Aria label for action to edit an existing annotation */
  'inputs.portable-text.action.edit-annotation-aria-label': undefined, // 'Edit annotation'
  /** Expand the editor to give more editing space */
  'inputs.portable-text.action.expand-editor': 'Editor erweitern',
  /** Label label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block': '{{typeName}} einfügen',
  /** Accessibility label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block-aria-label': '{{typeName}} einfügen (Block)',
  /** Label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object': '{{typeName}} einfügen',
  /** Accessibility label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object-aria-label': '{{typeName}} einfügen (inline)',
  /** Aria label for action to remove an annotation */
  'inputs.portable-text.action.remove-annotation-aria-label': undefined, // 'Remove annotation'
  /** Label for activate on focus with context of click and not focused */
  'inputs.portable-text.activate-on-focus-message_click': 'Zum Aktivieren klicken',
  /** Label for activate on focus with context of click and focused */
  'inputs.portable-text.activate-on-focus-message_click-focused':
    'Klicken oder Leertaste drücken zum Aktivieren',
  /** Label for activate on focus with context of tap and not focused */
  'inputs.portable-text.activate-on-focus-message_tap': 'Zum Aktivieren tippen',
  /**Aria label for the annotation object */
  'inputs.portable-text.annotation-aria-label': undefined, // 'Annotation object'
  /** Title for dialog that allows editing an annotation */
  'inputs.portable-text.annotation-editor.title': '{{schemaType}} bearbeiten',
  /** Title of the default "link" annotation */
  'inputs.portable-text.annotation.link': 'Link',
  /**Aria label for the block object */
  'inputs.portable-text.block.aria-label': undefined, // 'Block object'
  /** Label for action to edit a block item, in the case where it is editable */
  'inputs.portable-text.block.edit': 'Bearbeiten',
  /** Accessibility label for the button that opens the actions menu on blocks */
  'inputs.portable-text.block.open-menu-aria-label': 'Menü öffnen',
  /** Label for action to open a reference, in the case of block-level reference types */
  'inputs.portable-text.block.open-reference': 'Referenz öffnen',
  /** Label for action to remove a block item */
  'inputs.portable-text.block.remove': 'Entfernen',
  /** Label for action to view a block item, in the case where it is read-only and thus cannot be edited */
  'inputs.portable-text.block.view': 'Ansehen',
  /** Title of the "code" decorator */
  'inputs.portable-text.decorator.code': 'Code',
  /** Title of the "em" (emphasis) decorator */
  'inputs.portable-text.decorator.emphasis': 'Kursiv',
  /** Title of the "strike-through" decorator */
  'inputs.portable-text.decorator.strike-through': 'Durchgestrichen',
  /** Title of the "strong" decorator */
  'inputs.portable-text.decorator.strong': 'Fett',
  /** Title of the "underline" decorator */
  'inputs.portable-text.decorator.underline': 'Unterstrichen',
  /** Placeholder text for when the editor is empty */
  'inputs.portable-text.empty-placeholder': 'Leer',
  /**Aria label for the block object */
  'inputs.portable-text.inline-block.aria-label': undefined, // 'Inline object'
  /** Label for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit': 'Objekt bearbeiten',
  /** Aria label for icon for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit-aria-label': undefined, // 'Edit object'
  /** Label for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove': 'Objekt entfernen',
  /** Aria label for icon for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove-aria-label': undefined, // 'Remove object'
  /** Disclaimer text shown on invalid Portable Text value, when an action is available to unblock the user, but it is not guaranteed to be safe */
  'inputs.portable-text.invalid-value.action-disclaimer':
    'HINWEIS: Es ist im Allgemeinen sicher, die obige Aktion durchzuführen, aber wenn Sie Zweifel haben, wenden Sie sich an die Verantwortlichen für die Konfiguration Ihres Studios.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.action': 'Objekt entfernen',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.description':
    'Kind mit dem Schlüssel {{childKey}} des Blocks mit dem Schlüssel <code>{{key}}</code> ist vom Typ <code>{{childType}}</code>, der vom Schema nicht zugelassen ist.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.action': 'Block entfernen',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.description':
    'Block mit Schlüssel <code>{{key}}</code> ist vom Typ <code>{{typeName}}</code>, der laut Schema nicht erlaubt ist.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.action': 'Leeren Textabschnitt einfügen',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.description':
    'Textblock mit dem Schlüssel <code>{{key}}</code> hat keine Textabschnitte.',
  /** Label for the button to ignore invalid values in the Portable Text editor */
  'inputs.portable-text.invalid-value.ignore-button.text': 'Ignorieren',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.action':
    'Typ <code>{{expectedTypeName}}</code> verwenden',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.description':
    'Block mit Schlüssel <code>{{key}}</code> hat einen ungültigen Typnamen. Laut Schema sollte es <code>{{expectedTypeName}}</code> sein.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.action': 'Leeren Textwert setzen',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.description':
    'Spanne mit dem Schlüssel {{childKey}} des Blocks mit dem Schlüssel <code>{{key}}</code> hat eine fehlende oder ungültige <code>text</code> Eigenschaft.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.action':
    'Typ <code>{{expectedTypeName}}</code> verwenden',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.description':
    'Block mit Schlüssel <code>{{key}}</code> fehlt ein Typname. Laut Schema sollte es <code>{{expectedTypeName}}</code> sein.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.action': 'Zufälligen Schlüssel zuweisen',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.description':
    'Kind am Index <code>{{index}}</code> des Blocks mit dem Schlüssel <code>{{key}}</code> fehlt die <code>_key</code> Eigenschaft.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.action': 'Objekt entfernen',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.description':
    'Kind mit dem Schlüssel {{childKey}} des Blocks mit dem Schlüssel <code>{{key}}</code> fehlt die <code>_type</code> Eigenschaft.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.action': 'Zufälligen Schlüssel zuweisen',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.description':
    'Block bei Index <code>{{index}}</code> fehlt die erforderliche Eigenschaft <code>_key</code>.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.action': 'Block entfernen',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.description':
    'Textblock mit dem Schlüssel <code>{{key}}</code> hat eine ungültige oder fehlende `children` Eigenschaft.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.action': 'Eigenschaft hinzufügen',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.description':
    'Textblock mit dem Schlüssel <code>{{key}}</code> hat eine ungültige oder fehlende `markDefs` Eigenschaft.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.action': 'Block entfernen',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.description':
    'Block mit Schlüssel <code>{{key}}</code> fehlt ein Typname.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.action': 'Element entfernen',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.description':
    'Kind am Index <code>{{index}}</code> des Blocks mit dem Schlüssel <code>{{key}}</code> ist kein Objekt.',
  /** Action presented when the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.action': 'Wert entfernen',
  /** Text explaining that the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.description':
    'Der Wert muss ein Array von Portable Text-Blöcken oder undefiniert sein.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.action': 'Element entfernen',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.description':
    'Element bei <code>{{index}}</code> ist kein Objekt.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.action':
    'Nicht zugelassene Markierungen entfernen',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.description':
    'Textblock mit dem Schlüssel <code>{{key}}</code> enthält Markierungen <code>({{orphanedMarks, list}})</code>, die vom Schema nicht zugelassen sind.',
  /** Title for the alert indicating that the Portable Text field has an invalid value */
  'inputs.portable-text.invalid-value.title': 'Ungültiger Portable Text-Wert',
  /** Title of "bulleted" list type */
  'inputs.portable-text.list-type.bullet': 'Aufzählungsliste',
  /** Title of numbered list type */
  'inputs.portable-text.list-type.number': 'Nummerierte Liste',
  /** Title of the "h1" block style */
  'inputs.portable-text.style.h1': 'Überschrift 1',
  /** Title of the "h2" block style */
  'inputs.portable-text.style.h2': 'Überschrift 2',
  /** Title of the "h3" block style */
  'inputs.portable-text.style.h3': 'Überschrift 3',
  /** Title of the "h4" block style */
  'inputs.portable-text.style.h4': 'Überschrift 4',
  /** Title of the "h5" block style */
  'inputs.portable-text.style.h5': 'Überschrift 5',
  /** Title of the "h6" block style */
  'inputs.portable-text.style.h6': 'Überschrift 6',
  /** Title shown when multiple blocks of varying styles is selected */
  'inputs.portable-text.style.multiple': 'Mehrere',
  /** Title of fallback when no style is given for a block */
  'inputs.portable-text.style.none': 'Kein Stil',
  /** Title of the "normal" block style */
  'inputs.portable-text.style.normal': 'Normal',
  /** Title of the "quote" block style */
  'inputs.portable-text.style.quote': 'Zitat',
  /** Label for action to clear the current value of the reference field */
  'inputs.reference.action.clear': 'Löschen',
  /** Label for action to create a new document from the reference input */
  'inputs.reference.action.create-new-document': 'Neu erstellen',
  /** Label for action to create a new document from the reference input, when there are multiple templates or document types to choose from */
  'inputs.reference.action.create-new-document-select': 'Neu erstellen…',
  /** Label for action to duplicate the current item to a new item (used within arrays) */
  'inputs.reference.action.duplicate': 'Duplizieren',
  /** Label for action that opens the referenced document in a new tab */
  'inputs.reference.action.open-in-new-tab': 'In neuem Tab öffnen',
  /** Label for action to remove the reference from an array */
  'inputs.reference.action.remove': 'Entfernen',
  /** Label for action to replace the current value of the field */
  'inputs.reference.action.replace': 'Ersetzen',
  /** Label for action to cancel a previously initiated replace action  */
  'inputs.reference.action.replace-cancel': 'Ersetzen abbrechen',
  /** The cross-dataset reference field currently has a reference, but the feature has been disabled since it was created. This explains what can/cannot be done in its current state. */
  'inputs.reference.cross-dataset.feature-disabled-actions':
    'Sie können die bestehende Referenz dieses Feldes noch löschen, aber es kann nicht in ein anderes Dokument geändert werden, solange die Funktion deaktiviert ist.',
  /** A cross-dataset reference field exists but the feature has been disabled. A <DocumentationLink> component is available. */
  'inputs.reference.cross-dataset.feature-disabled-description':
    'Diese Funktion wurde deaktiviert. Lesen Sie, wie sie in <DocumentationLink>der Dokumentation</DocumentationLink> aktiviert werden kann.',
  /** Title for a warning telling the user that the current project does not have the "cross dataset references" feature */
  'inputs.reference.cross-dataset.feature-unavailable-title':
    'Nicht verfügbare Funktion: Querdatensatz-Referenz',
  /** The cross-dataset reference points to a document with an invalid type  */
  'inputs.reference.cross-dataset.invalid-type':
    'Das referenzierte Dokument hat einen ungültigen Typ ({{typeName}}) <JsonValue/>',
  /** The referenced document will open in a new tab (due to external studio) */
  'inputs.reference.document-opens-in-new-tab': 'Dieses Dokument wird in einem neuen Tab geöffnet',
  /** Error title for when the document is unavailable (for any possible reason) */
  'inputs.reference.error.document-unavailable-title': 'Dokument nicht verfügbar',
  /** Error title for when the referenced document failed to be loaded */
  'inputs.reference.error.failed-to-load-document-title':
    'Referenziertes Dokument konnte nicht geladen werden',
  /** Error title for when the reference search returned a document that is not an allowed type for the field */
  'inputs.reference.error.invalid-search-result-type-title':
    'Die Suche ergab einen Typ, der für diese Referenz nicht gültig ist: "{{returnedType}}"',
  /** Error description for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-description':
    'Das referenzierte Dokument (<code>{{documentId}}</code>) ist vom Typ <code>{{actualType}}</code>. Laut Schema dürfen referenzierte Dokumente nur vom Typ <AllowedTypes /> sein.',
  /** Error title for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-title': 'Dokument eines ungültigen Typs',
  /** Error description for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-description':
    'Das referenzierte Dokument konnte aufgrund unzureichender Berechtigungen nicht zugegriffen werden',
  /** Error title for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-title': 'Unzureichende Berechtigungen',
  /** Error description for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-description':
    'Das referenzierte Dokument existiert nicht (ID: <code>{{documentId}}</code>). Sie können entweder die Referenz entfernen oder sie durch ein anderes Dokument ersetzen.',
  /** Error title for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-title': 'Nicht gefunden',
  /** Label for button that clears the reference when it points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document.clear-button-label': 'Löschen',
  /** Error title for when the search for a reference failed. Note that the message sent by the backend may not be localized. */
  'inputs.reference.error.search-failed-title': 'Referenzsuche fehlgeschlagen',
  /** Alternative text for the image shown in cross-dataset reference input */
  'inputs.reference.image-preview-alt-text': 'Bildvorschau des referenzierten Dokuments',
  /** Description for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-description':
    '<strong>{{referencedDocument}}</strong> ist veröffentlicht und diese Referenz sollte jetzt abgeschlossen werden.',
  /** Title for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-title': 'Referenz abschließen',
  /** Description for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-description':
    '<strong>{{referencedDocument}}</strong> ist veröffentlicht und diese Referenz sollte jetzt in eine starke Referenz umgewandelt werden.',
  /** Title for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-title': 'In starke Referenz umwandeln',
  /** Label for button that triggers the action that strengthen a reference */
  'inputs.reference.incomplete-reference.strengthen-button-label': 'In starke Referenz umwandeln',
  /** Label for button that triggers a retry attempt for reference metadata  */
  'inputs.reference.metadata-error.retry-button-label': 'Erneut versuchen',
  /** Title for alert shown when reference metadata fails to be loaded */
  'inputs.reference.metadata-error.title': 'Referenzmetadaten können nicht geladen werden',
  /** Message shown when no documents were found that matched the given search string */
  'inputs.reference.no-results-for-query': 'Keine Ergebnisse für <strong>„{{searchTerm}}“</strong>',
  /** Text for tooltip showing when a document was edited, using relative time (eg "how long ago was it edited?") */
  'inputs.reference.preview.edited-at-time': 'Bearbeitet <RelativeTime/>',
  /** Accessibility label for icon indicating that document does _not_ have any unpublished changes */
  'inputs.reference.preview.has-no-unpublished-changes-aria-label':
    'Keine unveröffentlichten Bearbeitungen',
  /** Accessibility label for icon indicating that document has unpublished changes */
  'inputs.reference.preview.has-unpublished-changes-aria-label': 'Bearbeitet',
  /** Accessibility label for icon indicating that document does _not_ have a published version */
  'inputs.reference.preview.is-not-published-aria-label': 'Nicht veröffentlicht',
  /** Accessibility label for icon indicating that document has a published version */
  'inputs.reference.preview.is-published-aria-label': 'Veröffentlicht',
  /** Text for tooltip indicating that a document has no unpublished edits */
  'inputs.reference.preview.no-unpublished-edits': 'Keine unveröffentlichten Bearbeitungen',
  /** Text for tooltip indicating that a document has not yet been published */
  'inputs.reference.preview.not-published': 'Nicht veröffentlicht',
  /** Text for tooltip showing when a document was published, using relative time (eg "how long ago was it published?") */
  'inputs.reference.preview.published-at-time': 'Veröffentlicht <RelativeTime/>',
  /** The referenced document no longer exist and might have been deleted (for weak references) */
  'inputs.reference.referenced-document-does-not-exist':
    'Das referenzierte Dokument existiert nicht mehr und könnte gelöscht worden sein (Dokumenten-ID: <code>{{documentId}}</code>).',
  /** The referenced document could not be displayed to the user because of insufficient permissions */
  'inputs.reference.referenced-document-insufficient-permissions':
    'Das referenzierte Dokument konnte aufgrund unzureichender Berechtigungen nicht zugegriffen werden',
  /** Label for when the reference input is resolving the initial value for an item */
  'inputs.reference.resolving-initial-value': 'Anfänglichen Wert auflösen…',
  /** Placeholder shown in a reference input with no current value */
  'inputs.reference.search-placeholder': 'Zum Suchen tippen',
  /** Explanation of the consequences of leaving the reference as strong instead of weak */
  'inputs.reference.strength-mismatch.is-strong-consquences':
    'Es wird nicht möglich sein, das referenzierte Dokument zu löschen, ohne zuerst diese Referenz zu entfernen oder sie in eine schwache umzuwandeln.',
  /** Description for alert shown when a reference is supposed to be weak, but the actual value is strong */
  'inputs.reference.strength-mismatch.is-strong-description':
    'Diese Referenz ist <em>stark</em>, sollte laut aktuellem Schema jedoch <em>schwach</em> sein.',
  /** Explanation of the consequences of leaving the reference as weak instead of strong */
  'inputs.reference.strength-mismatch.is-weak-consquences':
    'Dies ermöglicht es, das referenzierte Dokument zu löschen, ohne zuerst diese Referenz zu löschen, was dazu führt, dass dieses Feld auf ein nicht vorhandenes Dokument verweist.',
  /** Description for alert shown when a reference is supposed to be strong, but the actual value is weak */
  'inputs.reference.strength-mismatch.is-weak-description':
    'Diese Referenz ist <em>schwach</em>, sollte laut aktuellem Schema jedoch <em>stark</em> sein.',
  /** Label for button that triggers the action that strengthens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.strengthen-button-label': 'In starke Referenz umwandeln',
  /** Title for alert shown when a reference is supposed to be weak/strong, but the actual value is the opposite of what it is supposed to be */
  'inputs.reference.strength-mismatch.title': 'Unstimmigkeit der Referenzstärke',
  /** Label for button that triggers the action that weakens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.weaken-button-label': 'In schwache Referenz umwandeln',
  /** Action message for generating the slug */
  'inputs.slug.action.generate': 'Generieren',
  /** Loading message for when the input is actively generating a slug */
  'inputs.slug.action.generating': 'Generiere…',
  /** Error message for when the source to generate a slug from is missing */
  'inputs.slug.error.missing-source':
    'Quelle fehlt. Überprüfen Sie die Quelle des Typs {{schemaType}} im Schema',
  /** Placeholder for an empty tag input */
  'inputs.tags.placeholder': 'Tag eingeben und ENTER drücken…',
  /** Placeholder for an empty tag input on touch devices */
  'inputs.tags.placeholder_touch': 'Tag eingeben…',
  /** Convert to `{{targetType}}` */
  'inputs.untyped-value.convert-button.text': 'Konvertieren zu <code>{{targetType}}</code>',
  /** Encountered an object value without a <code>_type</code> property. */
  'inputs.untyped-value.description':
    'Ein Objektwert ohne <code>_type</code> Eigenschaft wurde festgestellt.',
  /** Either remove the <code>name</code> property of the object declaration, or set <code>_type</code> property on items. */
  'inputs.untyped-value.details.description':
    'Entfernen Sie entweder die <code>name</code> Eigenschaft der Objektdeklaration oder setzen Sie die <code>_type</code> Eigenschaft bei den Elementen.',
  /** Current value (<code>object</code>): */
  'inputs.untyped-value.details.json-dump-prefix': 'Aktueller Wert (<code>object</code>):',
  /** The following types are valid here according to schema: */
  'inputs.untyped-value.details.multi-type-description':
    'Folgende Typen sind hier laut Schema gültig:',
  /** Developer info */
  'inputs.untyped-value.details.title': 'Entwicklerinfo',
  /** Property value missing <code>_type</code> */
  'inputs.untyped-value.title': 'Eigenschaftswert fehlt <code>_type</code>',
  /** Unset value */
  'inputs.untyped-value.unset-item-button.text': 'Wert entfernen',

  /** The fallback explanation if no context is provided */
  'insufficient-permissions-message.not-authorized-explanation':
    'Sie haben keine Berechtigung, um auf dieses Feature zuzugreifen.',
  /** The explanation when unable to create any document at all */
  'insufficient-permissions-message.not-authorized-explanation_create-any-document':
    'Sie haben keine Berechtigung, ein Dokument zu erstellen.',
  /** The explanation when unable to create a particular document */
  'insufficient-permissions-message.not-authorized-explanation_create-document':
    'Sie haben keine Berechtigung, dieses Dokument zu erstellen.',
  /** The explanation when unable to create a particular type of document */
  'insufficient-permissions-message.not-authorized-explanation_create-document-type':
    'Sie haben keine Berechtigung, diese Art von Dokument zu erstellen.',
  /** The explanation when unable to create a new reference in a document */
  'insufficient-permissions-message.not-authorized-explanation_create-new-reference':
    'Sie haben keine Berechtigung, eine neue Referenz zu erstellen.',
  /** The explanation when unable to delete a particular document */
  'insufficient-permissions-message.not-authorized-explanation_delete-document':
    'Sie haben keine Berechtigung, dieses Dokument zu löschen.',
  /** The explanation when unable to discard changes in a particular document */
  'insufficient-permissions-message.not-authorized-explanation_discard-changes':
    'Sie haben keine Berechtigung, Änderungen an diesem Dokument zu verwerfen.',
  /** The explanation when unable to duplicate a particular document */
  'insufficient-permissions-message.not-authorized-explanation_duplicate-document':
    'Sie haben keine Berechtigung, dieses Dokument zu duplizieren.',
  /** The explanation when unable to publish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_publish-document':
    'Sie haben keine Berechtigung, dieses Dokument zu veröffentlichen.',
  /** The explanation when unable to unpublish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_unpublish-document':
    'Sie haben keine Berechtigung, die Veröffentlichung dieses Dokuments rückgängig zu machen.',
  /** Appears after the not-authorized message. Lists the current roles. */
  'insufficient-permissions-message.roles': 'Ihre Rollen: <Roles/>',
  /** The title for the insufficient permissions message component */
  'insufficient-permissions-message.title': 'Unzureichende Berechtigungen',

  /** Unexpected error: `{{error}}` */
  'member-field-error.unexpected-error': 'Unerwarteter Fehler: {{error}}',

  /** Button label for "Create new document" button */
  'new-document.button': 'Erstellen',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are templates/types available for creation
   */
  'new-document.create-new-document-label': 'Neues Dokument…',
  /** Placeholder for the "filter" input within the new document menu */
  'new-document.filter-placeholder': 'Filter',
  /** Loading indicator text within the new document menu */
  'new-document.loading': 'Lädt…',
  /** Accessibility label for the list displaying options in the new document menu */
  'new-document.new-document-aria-label': 'Neues Dokument',
  /** Message for when there are no document type options in the new document menu */
  'new-document.no-document-types-found': 'Keine Dokumenttypen gefunden',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are no templates/types to create from
   */
  'new-document.no-document-types-label': 'Keine Dokumenttypen',
  /** Message for when no results are found for a specific search query in the new document menu */
  'new-document.no-results': 'Keine Ergebnisse für <strong>{{searchQuery}}</strong>',
  /** Aria label for the button that opens the "Create new document" popover/dialog */
  'new-document.open-dialog-aria-label': 'Neues Dokument erstellen',
  /** Title for "Create new document" dialog */
  'new-document.title': 'Neues Dokument erstellen',

  /** Label for action to manage members of the current studio project */
  'presence.action.manage-members': 'Mitglieder verwalten',
  /** Accessibility label for presence menu button */
  'presence.aria-label': 'Wer ist hier',
  /** Message description for when no one else is currently present */
  'presence.no-one-else-description':
    'Lade Personen in das Projekt ein, um ihren Online-Status zu sehen.',
  /** Message title for when no one else is currently present */
  'presence.no-one-else-title': 'Niemand sonst ist hier',
  /** Message for when a user is not in a document (displayed in the global presence menu) */
  'presence.not-in-a-document': 'Nicht in einem Dokument',
  /** Tooltip content text for presence menu button */
  'presence.tooltip-content': undefined, // 'Who is here'

  /** Fallback title shown when a preview does not provide a title */
  'preview.default.title-fallback': 'Ohne Titel',
  /** Fallback preview value for types that have "no value" (eg null, undefined) */
  'preview.fallback.no-value': '(kein Wert)',
  /** Alternative text for image being shown while image is being uploaded, in previews */
  'preview.image.file-is-being-uploaded.alt-text': 'Das Bild wird gerade hochgeladen',

  /* Relative time, just now */
  'relative-time.just-now': 'gerade eben',

  /** Accessibility label to open search action when the search would go fullscreen (eg on narrower screens) */
  'search.action-open-aria-label': 'Suche öffnen',
  /** Action label for adding a search filter */
  'search.action.add-filter': 'Filter hinzufügen',
  /** Action label for clearing search filters */
  'search.action.clear-filters': 'Filter löschen',
  /** Label for action to clear recent searches */
  'search.action.clear-recent-searches': 'Letzte Suchvorgänge löschen',
  /** Accessibility label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-aria-label': 'Ausgewählte Filter löschen',
  /** Label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-label': 'Löschen',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to close the search */
  'search.action.close-search-aria-label': 'Suche schließen',
  /** Accessibility label for filtering by document type */
  'search.action.filter-by-document-type-aria-label': 'Nach Dokumententyp filtern',
  /** Accessibility action label for removing an already applied search filter */
  'search.action.remove-filter-aria-label': 'Filter entfernen',
  /**
   * Text displayed when either no document type(s) have been selected, or we need a fallback,
   * eg "Search for all types".
   */
  'search.action.search-all-types': 'Alle Dokumente durchsuchen',
  /**
   * Text displayed when we are able to determine one or more document types that will be used for
   * searching, and can fit within the space assigned by the design.
   */
  'search.action.search-specific-types': 'Suche nach {{types, list}}',
  /**
   * Text displayed when we are able to determine one or more document types that will be used for
   * searching, but cannot list them all within the space assigned by the design, so we need an
   * additional "and X more" suffix. Allows using pluralization suffixes, eg `_one`, `_other` etc.
   */
  'search.action.search-specific-types-truncated': 'Suche nach {{types, list}} +{{count}} mehr',
  /** Dialog title for action to select an asset of unknown type */
  'search.action.select-asset': 'Asset auswählen',
  /** Dialog title for action to select a file asset */
  'search.action.select-asset_file': 'Datei auswählen',
  /** Dialog title for action to select an image asset */
  'search.action.select-asset_image': 'Bild auswählen',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-aria-label_hide': 'Filter ausblenden',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-aria-label_show': 'Filter anzeigen',
  /** Label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-label_hide': 'Filter ausblenden',
  /** Label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-label_show': 'Filter anzeigen',
  /** Tooltip text for the global search button */
  'search.button.tooltip': 'Suche',
  /**
   * A list of provided types (use `list` formatter preferably).
   */
  'search.document-type-list': '{{types, list}}',
  /**
   * In the context of a list of document types - no filtering selection has been done,
   * thus the default is "all types".
   */
  'search.document-type-list-all-types': 'Alle Typen',
  /**
   * A list of provided types that has been truncated - more types are included but not displayed,
   * thus we need to indicate that there are more. Allows using pluralization suffixes,
   * eg `_one`, `_other` etc.
   */
  'search.document-type-list-truncated': '{{types, list}} +{{count}} mehr',
  /** Accessibility label for list displaying the available document types */
  'search.document-types-aria-label': 'Dokumententypen',
  /** Label for when no document types matching the filter are found */
  'search.document-types-no-matches-found': 'Keine Übereinstimmungen für {{filter}}',
  /** Description for error when a filter cannot be displayed, describes that you should check the schema */
  'search.error.display-filter-description':
    'Dies könnte auf ungültige Optionen in Ihrem Schema hinweisen.',
  /** Title for error when a filter cannot be displayed (mainly a developer-oriented error) */
  'search.error.display-filter-title':
    'Ein Fehler ist aufgetreten, während dieser Filter angezeigt wurde.',
  /** Description for error when no valid asset source is found, describes that you should check the the current studio config */
  'search.error.no-valid-asset-source-check-config-description':
    'Bitte stellen Sie sicher, dass es in Ihrer Studio-Konfigurationsdatei aktiviert ist.',
  /** Description for error when no valid asset source is found, describes that only the default asset is supported */
  'search.error.no-valid-asset-source-only-default-description':
    'Derzeit wird nur die Standard-Asset-Quelle unterstützt.',
  /** Title for error when no valid asset sources found */
  'search.error.no-valid-asset-source-title': 'Keine gültigen Asset-Quellen gefunden.',
  /** Helpful description for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-help-description':
    'Bitte versuchen Sie es erneut oder überprüfen Sie Ihre Verbindung',
  /** Title label for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-title': 'Beim Suchen ist ein Fehler aufgetreten',
  /**
   * Label for "All fields", a label that appears above the list of available fields when filtering.
   * If one or more document type has been chosen as filter, this label is replaced with a group of
   * fields per selected document type
   */
  'search.filter-all-fields-header': 'Alle Felder',
  /** Label for the action of changing from one file to a different file in asset search filter */
  'search.filter-asset-change_file': 'Datei ändern',
  /** Label for the action of changing from one image to a different image in asset search filter */
  'search.filter-asset-change_image': 'Bild ändern',
  /** Label for the action of clearing the currently selected asset in an image/file filter */
  'search.filter-asset-clear': 'Löschen',
  /** Label for the action of selecting a file in asset search filter */
  'search.filter-asset-select_file': 'Datei auswählen',
  /** Label for the action of selecting an image in asset search filter */
  'search.filter-asset-select_image': 'Bild auswählen',
  /** Label for boolean filter - false */
  'search.filter-boolean-false': 'Falsch',
  /** Label for boolean filter - true */
  'search.filter-boolean-true': 'Wahr',
  /** Accessibility label for list that lets you filter fields by title, when adding a new filter in search */
  'search.filter-by-title-aria-label': 'Nach Titel filtern',
  /** Accessibility label for date filter input */
  'search.filter-date-aria-label': 'Datum',
  /** Accessibility label for selecting end date on the date range search filter */
  'search.filter-date-range-end-date-aria-label': 'Enddatum',
  /** Accessibility label for selecting start date on the date range search filter */
  'search.filter-date-range-start-date-aria-label': 'Startdatum',
  /**
   * Label for "Days"/"Months"/"Years" when selecting it as unit in "X days ago" search filter.
   * Capitalized, as it would be listed in a dropdown.
   */
  'search.filter-date-unit_days': 'Tage',
  'search.filter-date-unit_months': 'Monate',
  'search.filter-date-unit_years': 'Jahre',
  /** Accessibility label for selecting the unit (day/month/year) when adding "X days ago" search filter */
  'search.filter-date-unit-aria-label': 'Einheit auswählen',
  /** Accessibility label for the input value (days/months/years) when adding "X days ago" search filter */
  'search.filter-date-value-aria-label': 'Einheitswert',
  /** Label for "field description" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-description': 'Feldbeschreibung',
  /** Label for "field name" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-name': 'Feldname',
  /** Label for "Used in document types", a list of the document types a field appears in. Shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-used-in-document-types': 'Verwendet in Dokumenttypen',
  /** Label for when no fields/filters are found for the given term */
  'search.filter-no-matches-found': 'Keine Übereinstimmungen für {{filter}}',
  /** Placeholder value for maximum numeric value filter */
  'search.filter-number-max-value-placeholder': 'Höchstwert',
  /** Placeholder value for minimum numeric value filter */
  'search.filter-number-min-value-placeholder': 'Mindestwert',
  /** Placeholder value for the number filter */
  'search.filter-number-value-placeholder': 'Wert',
  /** Placeholder for the "Filter" input, when narrowing possible fields/filters */
  'search.filter-placeholder': 'Filter',
  /** Label for the action of clearing the currently selected document in a reference filter */
  'search.filter-reference-clear': 'Löschen',
  /**
   * Label for "shared fields", a label that appears above a list of fields that all filtered types
   * have in common, when adding a new filter. For instance, if "book" and "employee" both have a
   * "title" field, this field would be listed under "shared fields".
   * */
  'search.filter-shared-fields-header': 'Gemeinsame Felder',
  /** Placeholder value for the string filter */
  'search.filter-string-value-placeholder': 'Wert',
  /** Label/placeholder prompting user to select one of the predefined, allowed values for a string field */
  'search.filter-string-value-select-predefined-value': 'Auswählen…',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (singular) */
  'search.filters-aria-label_one': 'Filter',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (plural) */
  'search.filters-aria-label_other': 'Filter',
  /** Label for instructions on how to use the search - displayed when no recent searches are available */
  'search.instructions': 'Verwenden Sie <ControlsIcon/>, um Ihre Suche zu verfeinern',
  /** Helpful description for when no search results are found */
  'search.no-results-help-description':
    'Versuchen Sie ein anderes Stichwort oder passen Sie Ihre Filter an',
  /** Title label for when no search results are found */
  'search.no-results-title': 'Keine Ergebnisse gefunden',
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
    '<Field/> <Operator>hat</Operator> <Value>{{count}} Element</Value>',
  'search.operator.array-count-equal.description_other':
    '<Field/> <Operator>hat</Operator> <Value>{{count}} Elemente</Value>',
  'search.operator.array-count-equal.name': 'Anzahl ist',
  /* Array should have a count greater than given filter value */
  'search.operator.array-count-gt.description_one':
    '<Field/> <Operator>hat ></Operator> <Value>{{count}} Element</Value>',
  'search.operator.array-count-gt.description_other':
    '<Field/> <Operator>hat ></Operator> <Value>{{count}} Elemente</Value>',
  'search.operator.array-count-gt.name': 'Anzahl größer als',
  /* Array should have a count greater than or equal to the given filter value */
  'search.operator.array-count-gte.description_one':
    '<Field/> <Operator>hat ≥</Operator> <Value>{{count}} Element</Value>',
  'search.operator.array-count-gte.description_other':
    '<Field/> <Operator>hat ≥</Operator> <Value>{{count}} Elemente</Value>',
  'search.operator.array-count-gte.name': 'Anzahl größer als oder gleich',
  /* Array should have a count less than given filter value */
  'search.operator.array-count-lt.description_one':
    '<Field/> <Operator>hat <</Operator> <Value>{{count}} Element</Value>',
  'search.operator.array-count-lt.description_other':
    '<Field/> <Operator>hat <</Operator> <Value>{{count}} Elemente</Value>',
  'search.operator.array-count-lt.name': 'Anzahl weniger als',
  /* Array should have a count less than or equal to the given filter value */
  'search.operator.array-count-lte.description_one':
    '<Field/> <Operator>hat ≤</Operator> <Value>{{count}} Element</Value>',
  'search.operator.array-count-lte.description_other':
    '<Field/> <Operator>hat ≤</Operator> <Value>{{count}} Elemente</Value>',
  'search.operator.array-count-lte.name': 'Anzahl weniger als oder gleich',
  /* Array should have a count that is not equal to the given filter value */
  'search.operator.array-count-not-equal.description_one':
    '<Field/> <Operator>hat nicht</Operator> <Value>{{count}} Element</Value>',
  'search.operator.array-count-not-equal.description_other':
    '<Field/> <Operator>hat nicht</Operator> <Value>{{count}} Elemente</Value>',
  'search.operator.array-count-not-equal.name': 'Anzahl ist nicht',
  /**
   * Array should have a count within the range of given filter values.
   * Gets passed `{{from}}` and `{{to}}` values.
   **/
  'search.operator.array-count-range.description':
    '<Field/> <Operator>hat zwischen</Operator> <Value>{{from}} → {{to}} Elemente</Value>',
  'search.operator.array-count-range.name': 'Anzahl liegt zwischen',
  /* Array should include the given value */
  'search.operator.array-list-includes.description':
    '<Field/> <Operator>beinhaltet</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-includes.name': 'beinhaltet',
  /* Array should not include the given value */
  'search.operator.array-list-not-includes.description':
    '<Field/> <Operator>beinhaltet nicht</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-not-includes.name': 'beinhaltet nicht',
  /* Array should include the given reference */
  'search.operator.array-reference-includes.description':
    '<Field/> <Operator>beinhaltet</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-includes.name': 'beinhaltet',
  /* Array should not include the given reference */
  'search.operator.array-reference-not-includes.description':
    '<Field/> <Operator>beinhaltet nicht</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-not-includes.name': 'beinhaltet nicht',
  /* Asset (file) should be the selected asset */
  'search.operator.asset-file-equal.description':
    '<Field/> <Operator>ist</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-equal.name': 'ist',
  /* Asset (file) should not be the selected asset */
  'search.operator.asset-file-not-equal.description':
    '<Field/> <Operator>ist nicht</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-not-equal.name': 'ist nicht',
  /* Asset (image) should be the selected asset */
  'search.operator.asset-image-equal.description':
    '<Field/> <Operator>ist</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-equal.name': 'ist',
  /* Asset (image) should not be the selected asset */
  'search.operator.asset-image-not-equal.description':
    '<Field/> <Operator>ist nicht</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-not-equal.name': 'ist nicht',
  /**
   * Boolean value should be the given filter value (true/false).
   * Context passed is `true` and `false`, allowing for more specific translations:
   * - `search.operator.boolean-equal.description_true`
   * - `search.operator.boolean-equal.description_false`
   */
  'search.operator.boolean-equal.description':
    '<Field/> <Operator>ist</Operator> <Value>{{value}}</Value>',
  'search.operator.boolean-equal.name': 'ist',
  /* Date should be after (later than) given filter value */
  'search.operator.date-after.description':
    '<Field/> <Operator>ist nach</Operator> <Value>{{value}}</Value>',
  'search.operator.date-after.name': 'nach',
  /* Date should be before (earlier than) given filter value */
  'search.operator.date-before.description':
    '<Field/> <Operator>ist vor</Operator> <Value>{{value}}</Value>',
  'search.operator.date-before.name': 'vor',
  /* Date should be the given filter value */
  'search.operator.date-equal.description':
    '<Field/> <Operator>ist</Operator> <Value>{{value}}</Value>',
  'search.operator.date-equal.name': 'ist',
  /* Date should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-last.description':
    '<Field/> <Operator>ist in den letzten</Operator> <Value>{{value}}</Value>',
  'search.operator.date-last.name': 'letzte',
  /* Date should not be the given filter value */
  'search.operator.date-not-equal.description':
    '<Field/> <Operator>ist nicht</Operator> <Value>{{value}}</Value>',
  'search.operator.date-not-equal.name': 'ist nicht',
  /* Date should be within the range of given filter values */
  'search.operator.date-range.description': '<Field/> <Operator>liegt zwischen</Operator> <Value/>',
  'search.operator.date-range.name': 'liegt zwischen',
  /* Date and time should be after (later than) given filter value */
  'search.operator.date-time-after.description':
    '<Field/> <Operator>ist nach</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-after.name': 'nach',
  /* Date and time should be before (earlier than) given filter value */
  'search.operator.date-time-before.description':
    '<Field/> <Operator>ist vor</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-before.name': 'vor',
  /* Date and time should be the given filter value */
  'search.operator.date-time-equal.description':
    '<Field/> <Operator>ist</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-equal.name': 'ist',
  /* Date and time should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-time-last.description':
    '<Field/> <Operator>ist in den letzten</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-last.name': 'letzte',
  /* Date and time should not be the given filter value */
  'search.operator.date-time-not-equal.description':
    '<Field/> <Operator>ist nicht</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-not-equal.name': 'ist nicht',
  /* Date and time should be within the range of given filter values */
  'search.operator.date-time-range.description':
    '<Field/> <Operator>liegt zwischen</Operator> <Value/>',
  'search.operator.date-time-range.name': 'liegt zwischen',
  /* Value should be defined */
  'search.operator.defined.description':
    '<Field/> <Operator>ist</Operator> <Value>nicht leer</Value>',
  'search.operator.defined.name': 'nicht leer',
  /* Value should not be defined */
  'search.operator.not-defined.description':
    '<Field/> <Operator>ist</Operator> <Value>leer</Value>',
  'search.operator.not-defined.name': 'leer',
  /* Number should be the given filter value */
  'search.operator.number-equal.description':
    '<Field/> <Operator>ist</Operator> <Value>{{value}}</Value>',
  'search.operator.number-equal.name': 'ist',
  /* Number should be greater than given filter value */
  'search.operator.number-gt.description':
    '<Field/> <Operator>></Operator> <Value>{{value}}</Value>',
  'search.operator.number-gt.name': 'größer als',
  /* Number should be greater than or the given filter value */
  'search.operator.number-gte.description':
    '<Field/> <Operator>≥</Operator> <Value>{{value}}</Value>',
  'search.operator.number-gte.name': 'größer als oder gleich',
  /* Number should be less than given filter value */
  'search.operator.number-lt.description':
    '<Field/> <Operator><</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lt.name': 'weniger als',
  /* Number should be less than or the given filter value */
  'search.operator.number-lte.description':
    '<Field/> <Operator>≤</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lte.name': 'weniger als oder gleich',
  /* Number should not be the given filter value */
  'search.operator.number-not-equal.description':
    '<Field/> <Operator>ist nicht</Operator> <Value>{{value}}</Value>',
  'search.operator.number-not-equal.name': 'ist nicht',
  /* Number should be within the range of given filter values */
  'search.operator.number-range.description':
    '<Field/> <Operator>liegt zwischen</Operator> <Value>{{from}} → {{to}}</Value>',
  'search.operator.number-range.name': 'liegt zwischen',
  /* Portable Text should contain the given filter value */
  'search.operator.portable-text-contains.description':
    '<Field/> <Operator>enthält</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-contains.name': 'enthält',
  /* Portable Text should be the given filter value */
  'search.operator.portable-text-equal.description':
    '<Field/> <Operator>ist</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-equal.name': 'ist',
  /* Portable Text should not contain the given filter value */
  'search.operator.portable-text-not-contains.description':
    '<Field/> <Operator>enthält nicht</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-contains.name': 'enthält nicht',
  /* Portable Text should not be the given filter value */
  'search.operator.portable-text-not-equal.description':
    '<Field/> <Operator>ist nicht</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-equal.name': 'ist nicht',
  /* References the given asset (file) */
  'search.operator.reference-asset-file.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-file.name': 'Datei',
  /* References the given asset (image) */
  'search.operator.reference-asset-image.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-image.name': 'Bild',
  /* References the given document */
  'search.operator.reference-document.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-document.name': 'Dokument',
  /* Reference should be the given document */
  'search.operator.reference-equal.description':
    '<Field/> <Operator>ist</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-equal.name': 'ist',
  /* Reference should not be the given document */
  'search.operator.reference-not-equal.description':
    '<Field/> <Operator>ist nicht</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-not-equal.name': 'ist nicht',
  /* Slug contains the given value */
  'search.operator.slug-contains.description':
    '<Field/> <Operator>enthält</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-contains.name': 'enthält',
  /* Slug equals the given filter value */
  'search.operator.slug-equal.description':
    '<Field/> <Operator>ist</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-equal.name': 'ist',
  /* Slug does not contain the given value */
  'search.operator.slug-not-contains.description':
    '<Field/> <Operator>enthält nicht</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-contains.name': 'enthält nicht',
  /* Slug does not equal the given filter value */
  'search.operator.slug-not-equal.description':
    '<Field/> <Operator>ist nicht</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-equal.name': 'ist nicht',
  /* String contains the given filter value */
  'search.operator.string-contains.description':
    '<Field/> <Operator>enthält</Operator> <Value>{{value}}</Value>',
  'search.operator.string-contains.name': 'enthält',
  /* String equals the given filter value */
  'search.operator.string-equal.description':
    '<Field/> <Operator>ist</Operator> <Value>{{value}}</Value>',
  'search.operator.string-equal.name': 'ist',
  /* String equals one of the predefined allowed values */
  'search.operator.string-list-equal.description':
    '<Field/> <Operator>ist</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-equal.name': 'ist',
  /* String does not equal one of the predefined allowed values */
  'search.operator.string-list-not-equal.description':
    '<Field/> <Operator>ist nicht</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-not-equal.name': 'ist nicht',
  /* String does not contain the given filter value */
  'search.operator.string-not-contains.description':
    '<Field/> <Operator>enthält nicht</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-contains.name': 'enthält nicht',
  /* String does not equal the given filter value */
  'search.operator.string-not-equal.description':
    '<Field/> <Operator>ist nicht</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-equal.name': 'ist nicht',
  /** Label for the "Best match" search ordering type */
  'search.ordering.best-match-label': 'Beste Übereinstimmung',
  /** Label for the "Created: Oldest first" search ordering type */
  'search.ordering.created-ascending-label': 'Erstellt: Älteste zuerst',
  /** Label for the "Created: Newest first" search ordering type */
  'search.ordering.created-descending-label': 'Erstellt: Neueste zuerst',
  /** Label for the "Updated: Oldest first" search ordering type */
  'search.ordering.updated-ascending-label': 'Aktualisiert: Älteste zuerst',
  /** Label for the "Updated: Newest first" search ordering type */
  'search.ordering.updated-descending-label': 'Aktualisiert: Neueste zuerst',
  /** Placeholder text for the global search input field */
  'search.placeholder': 'Suche',
  /** Accessibility label for the recent searches section, shown when no valid search terms has been given */
  'search.recent-searches-aria-label': 'Letzte Suchanfragen',
  /** Label/heading shown for the recent searches section */
  'search.recent-searches-label': 'Letzte Suchanfragen',
  /** Accessibility label for the search results section, shown when the user has typed valid terms */
  'search.search-results-aria-label': 'Suchergebnisse',

  /** Accessibility label for the navbar status button */
  'status-button.aria-label': undefined, // 'Configuration status'

  /** Description for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-description':
    'Die Transaktionen der Dokumenthistorie wurden nicht beeinträchtigt.',
  /** Title for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-title':
    'Beim Abrufen der Dokumentänderungen ist ein Fehler aufgetreten.',
  /** Error description for when the document doesn't have history */
  'timeline.error.no-document-history-description':
    'Wenn der Inhalt des Dokuments geändert wird, erscheinen die Dokumentversionen in diesem Menü.',
  /** Error title for when the document doesn't have history */
  'timeline.error.no-document-history-title': 'Keine Dokumenthistorie',
  /** Error prompt when revision cannot be loaded */
  'timeline.error.unable-to-load-revision': 'Revision kann nicht geladen werden',
  /** Label for when the timeline item is the latest in the history */
  'timeline.latest': 'Aktuellste',
  /** Label for latest version for timeline menu dropdown */
  'timeline.latest-version': 'Neueste Version',
  /** The aria-label for the list of revisions in the timeline */
  'timeline.list.aria-label': 'Dokumentrevisionen',
  /** Label for loading history */
  'timeline.loading-history': 'Verlauf wird geladen…',
  /** Label shown in review changes timeline when a document has been created */
  'timeline.operation.created': 'Erstellt',
  /** Label shown in review changes timeline when a document has been created, with a timestamp */
  'timeline.operation.created_timestamp': 'Erstellt: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was initially created */
  'timeline.operation.created-initial': 'Erstellt',
  /** Label shown in review changes timeline when a document was initially created, with a timestamp */
  'timeline.operation.created-initial_timestamp': 'Erstellt: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been deleted */
  'timeline.operation.deleted': 'Gelöscht',
  /** Label shown in review changes timeline when a document has been deleted, with a timestamp */
  'timeline.operation.deleted_timestamp': 'Gelöscht: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been discarded */
  'timeline.operation.draft-discarded': 'Entwurf verworfen',
  /** Label shown in review changes timeline when a draft has been discarded, with a timestamp */
  'timeline.operation.draft-discarded_timestamp': 'Entwurf verworfen: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been edited */
  'timeline.operation.edited-draft': 'Bearbeitet',
  /** Label shown in review changes timeline when a draft has been edited, with a timestamp */
  'timeline.operation.edited-draft_timestamp': 'Bearbeitet: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been edited live */
  'timeline.operation.edited-live': 'Live bearbeitet',
  /** Label shown in review changes timeline when a document has been edited live, with a timestamp */
  'timeline.operation.edited-live_timestamp': 'Live bearbeitet: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was published */
  'timeline.operation.published': 'Veröffentlicht',
  /** Label shown in review changes timeline when a document was published, with a timestamp */
  'timeline.operation.published_timestamp': 'Veröffentlicht: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was unpublished */
  'timeline.operation.unpublished': 'Unveröffentlicht',
  /** Label shown in review changes timeline when a document was unpublished, with a timestamp */
  'timeline.operation.unpublished_timestamp': 'Unveröffentlicht: {{timestamp, datetime}}',
  /**
   * Label for determining since which version the changes for timeline menu dropdown are showing.
   * Receives the time label as a parameter (`timestamp`).
   */
  'timeline.since': 'Seit: {{timestamp, datetime}}',
  /** Label for missing change version for timeline menu dropdown are showing */
  'timeline.since-version-missing': 'Seit: unbekannte Version',

  /**Aria label for the action buttons in the PTE toolbar */
  'toolbar.portable-text.action-button-aria-label': undefined, // '{{action}}'

  /** Label for button showing the free trial days left */
  'user-menu.action.free-trial_one': '{{count}} Tag verbleibend im Test',
  'user-menu.action.free-trial_other': '{{count}} Tage verbleibend im Test',
  /** Label for the button showed after trial ended */
  'user-menu.action.free-trial-finished': 'Upgrade von kostenlos',
  /** Label for action to invite members to the current sanity project */
  'user-menu.action.invite-members': 'Mitglieder einladen',
  /** Accessibility label for action to invite members to the current sanity project */
  'user-menu.action.invite-members-aria-label': 'Mitglieder einladen',
  /** Label for action to manage the current sanity project */
  'user-menu.action.manage-project': 'Projekt verwalten',
  /** Accessibility label for the action to manage the current project */
  'user-menu.action.manage-project-aria-label': 'Projekt verwalten',
  /** Tooltip helper text when portable text annotation is disabled for empty block*/
  'user-menu.action.portable-text.annotation-disabled_empty-block':
    '{{name}} kann nicht auf leeren Block angewendet werden',
  /** Tooltip helper text when portable text annotation is disabled for multiple blocks */
  'user-menu.action.portable-text.annotation-disabled_multiple-blocks':
    '{{name}} kann nicht auf mehrere Blöcke angewendet werden',
  /** Label for action to sign out of the current sanity project */
  'user-menu.action.sign-out': 'Abmelden',
  /** Title for appearance section for the current studio (dark / light / system scheme) */
  'user-menu.appearance-title': 'Erscheinungsbild',
  /** Label for close menu button for user menu */
  'user-menu.close-menu': 'Menü schließen',
  /** Description for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-description': 'Dunkles Erscheinungsbild verwenden',
  /** Title for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-title': 'Dunkel',
  /** Description for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-description': 'Helles Erscheinungsbild verwenden',
  /** Title for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-title': 'Hell',
  /** Description for using "system apparence" in the appearance user menu */
  'user-menu.color-scheme.system-description': 'Systemerscheinungsbild verwenden',
  /** Title for using system apparence in the appearance user menu */
  'user-menu.color-scheme.system-title': 'System',
  /** Title for locale section for the current studio */
  'user-menu.locale-title': 'Sprache',
  /** Label for tooltip to show which provider the currently logged in user is using */
  'user-menu.login-provider': 'Angemeldet mit {{providerTitle}}',
  /** Label for open menu button for user menu */
  'user-menu.open-menu': undefined, // 'Open menu'

  /**
   * Label for action to add a workspace (currently a developer-oriented action, as this will
   * lead to the documentation on workspace configuration)
   */
  'workspaces.action.add-workspace': 'Arbeitsbereich hinzufügen',
  /**
   * Label for action to choose a different workspace, in the case where you are not logged in,
   * have selected a workspace, and are faced with the authentication options for the selected
   * workspace. In other words, label for the action shown when you have reconsidered which
   * workspace to authenticate in.
   */
  'workspaces.action.choose-another-workspace': 'Einen anderen Arbeitsbereich wählen',
  /** Label for heading that indicates that you can choose your workspace */
  'workspaces.choose-your-workspace-label': 'Wählen Sie Ihren Arbeitsbereich',
  /** Label for the workspace menu */
  'workspaces.select-workspace-aria-label': 'Arbeitsbereich auswählen',
  /** Button label for opening the workspace switcher */
  'workspaces.select-workspace-label': 'Arbeitsbereich auswählen',
  /** Tooltip for the workspace menu */
  'workspaces.select-workspace-tooltip': undefined, // 'Select workspace'
  /** Title for Workplaces dropdown menu */
  'workspaces.title': 'Arbeitsbereiche',
})
