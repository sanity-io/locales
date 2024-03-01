import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Menu item for deleting the asset */
  'asset-source.asset-list.menu.delete': 'Törlés',
  /** Menu item for showing where a particular asset is used */
  'asset-source.asset-list.menu.show-usage': 'Használat megjelenítése',
  /** Header in usage dialog for file assets */
  'asset-source.asset-usage-dialog.header_file': 'Fájlt használó dokumentumok',
  /** Header in usage dialog for image assets */
  'asset-source.asset-usage-dialog.header_image': 'Képet használó dokumentumok',
  /** Text shown in usage dialog when loading documents using the selected asset */
  'asset-source.asset-usage-dialog.loading': 'Betöltés…',
  /** Text for cancel action in delete-asset dialog */
  'asset-source.delete-dialog.action.cancel': 'Mégse',
  /** Text for "confirm delete" action in delete-asset dialog */
  'asset-source.delete-dialog.action.delete': 'Törlés',
  /** Dialog header for delete-asset dialog when deleting a file */
  'asset-source.delete-dialog.header_file': 'Fájl törlése',
  /** Dialog header for delete-asset dialog when deleting an image */
  'asset-source.delete-dialog.header_image': 'Kép törlése',
  /** Text shown in delete dialog when loading documents using the selected asset */
  'asset-source.delete-dialog.loading': 'Betöltés…',
  /** Message confirming to delete *named* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_named':
    'Arra készülsz, hogy töröld a(z) <strong>{{filename}}}</strong> fájlt és annak metaadatait. Biztos vagy benne?',
  /** Message confirming to delete *unnamed* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_unnamed':
    'Arra készülsz, hogy töröld a fájlt és annak metaadatait. Biztos vagy benne?',
  /** Message confirming to delete *named* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_named':
    'Arra készülsz, hogy töröld a(z) <strong>{{filename}}</strong> képet és annak metaadatait. Biztos vagy benne?',
  /** Message confirming to delete *unnamed* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_unnamed':
    'Arra készülsz, hogy töröld a képet és annak metaadatait. Biztos vagy benne?',
  /** Alt text showing on image preview in delete asset dialog  */
  'asset-source.delete-dialog.usage-list.image-preview-alt': 'Kép előnézete',
  /** Warning message showing when *named* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_named':
    '{{filename}} nem törölhető, mert használatban van. A fájl törléséhez először el kell távolítanod minden használatát.',
  /** Warning message showing when *unnamed* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_unnamed':
    'Ez a fájl nem törölhető, mert használatban van. A törléshez először el kell távolítanod minden használatát.',
  /** Warning message showing when *named* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_named':
    '{{filename}} nem törölhető, mert használatban van. A kép törléséhez először el kell távolítanod minden használatát.',
  /** Warning message showing when *unnamed* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_unnamed':
    'Ez a kép nem törölhető, mert használatban van. A törléshez először el kell távolítanod minden használatát.',
  /** Text shown when the list of assets only include a specific set of types */
  'asset-source.dialog.accept-message':
    'Csak elfogadott típusú eszközök jelennek meg: <strong>{{acceptTypes}}</strong>',
  /** Keys shared between both image asset source and file asset source */
  /** Select asset dialog title for files */
  'asset-source.dialog.default-title_file': 'Fájl kiválasztása',
  /** Select asset dialog title for images */
  'asset-source.dialog.default-title_image': 'Kép kiválasztása',
  /** Select asset dialog load more items */
  'asset-source.dialog.load-more': 'Több betöltése',
  /** Text shown when selecting a file but there's no files to select from */
  'asset-source.dialog.no-assets_file': 'Nincsenek fájlok',
  /** Text shown when selecting an image but there's no images to select from */
  'asset-source.dialog.no-assets_image': 'Nincsenek képek',
  'asset-source.file.asset-list.action.delete.disabled-cannot-delete-current-file':
    'Nem lehet törölni a jelenleg kiválasztott fájlt',
  'asset-source.file.asset-list.action.delete.text': 'Törlés',
  'asset-source.file.asset-list.action.delete.title': 'Fájl törlése',
  'asset-source.file.asset-list.action.select-file.title': 'Válassza ki a(z) {{filename}} fájlt',
  'asset-source.file.asset-list.action.show-usage.title': 'Használat megjelenítése',
  'asset-source.file.asset-list.delete-failed': 'A fájlt nem sikerült törölni',
  'asset-source.file.asset-list.delete-successful': 'A fájlt törölték',
  'asset-source.file.asset-list.header.date-added': 'Hozzáadás dátuma',
  /** File asset source */
  'asset-source.file.asset-list.header.filename': 'Fájlnév',
  'asset-source.file.asset-list.header.size': 'Méret',
  'asset-source.file.asset-list.header.type': 'Típus',
  /** Text displayed on button or menu invoking the file asset source */
  'asset-source.file.title': 'Feltöltött fájlok',
  'asset-source.image.asset-list.delete-failed': 'A képet nem sikerült törölni',
  /** Image asset source */
  'asset-source.image.asset-list.delete-successful': 'A képet törölték',
  /** Text displayed on button or menu invoking the image asset source */
  'asset-source.image.title': 'Feltöltött képek',
  'asset-source.usage-list.documents-using-file_named_one':
    'Egy dokumentum használja a(z) <code>{{filename}}</code> fájlt',
  'asset-source.usage-list.documents-using-file_named_other':
    '{{count}} dokumentum használja a(z) <code>{{filename}}</code> fájlt',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *named* file **/
  'asset-source.usage-list.documents-using-file_named_zero':
    'Egyetlen dokumentum sem használja a(z) <code>{{filename}}</code> fájlt',
  'asset-source.usage-list.documents-using-file_unnamed_one':
    'Egy dokumentum használja ezt a fájlt',
  'asset-source.usage-list.documents-using-file_unnamed_other':
    '{{count}} dokumentum használja ezt a fájlt',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *unnamed* file **/
  'asset-source.usage-list.documents-using-file_unnamed_zero':
    'Egyetlen dokumentum sem használja ezt a fájlt',
  'asset-source.usage-list.documents-using-image_named_one':
    'Egy dokumentum használja a(z) <code>{{filename}}</code> képet',
  'asset-source.usage-list.documents-using-image_named_other':
    '{{count}} dokumentum használja a(z) <code>{{filename}}</code> képet',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *named* image **/
  'asset-source.usage-list.documents-using-image_named_zero':
    'Egyetlen dokumentum sem használja a(z) <code>{{filename}}</code> képet',
  'asset-source.usage-list.documents-using-image_unnamed_one':
    'Egy dokumentum használja ezt a képet',
  'asset-source.usage-list.documents-using-image_unnamed_other':
    '{{count}} dokumentum használja ezt a képet',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *unnamed* image **/
  'asset-source.usage-list.documents-using-image_unnamed_zero':
    'Egyetlen dokumentum sem használja ezt a képet',

  /** Action message for navigating to next month */
  'calendar.action.go-to-next-month': 'Ugrás a következő hónapra',
  /** Action message for navigating to next year */
  'calendar.action.go-to-next-year': 'Ugrás a következő évre',
  /** Action message for navigating to previous month */
  'calendar.action.go-to-previous-month': 'Ugrás az előző hónapra',
  /** Action message for navigating to previous year */
  'calendar.action.go-to-previous-year': 'Ugrás az előző évre',
  /* Label for navigating the calendar to "today", without _selecting_ today. Short form, eg `Today`, not `Go to today` */
  'calendar.action.go-to-today': 'Ma',
  /* Accessibility label for navigating the calendar to "today", without _selecting_ today */
  'calendar.action.go-to-today-aria-label': 'Ugrás a mai napra',
  /* Label for navigating the calendar to "tomorrow", without _selecting_ tomorrow. Short form, eg `Tomorrow`, not `Go to tomorrow` */
  'calendar.action.go-to-tomorrow': 'Holnap',
  /* Label for navigating the calendar to "yesterday", without _selecting_ yesterday. Short form, eg `Yesterday`, not `Go to yesterday` */
  'calendar.action.go-to-yesterday': 'Tegnap',
  /** Label for switch that controls whether or not to include time in given timestamp */
  'calendar.action.include-time-label': 'Idő hozzáadása',
  /** Action message for selecting the hour */
  'calendar.action.select-hour': 'Óra kiválasztása',
  /** Action message for selecting the minute */
  'calendar.action.select-minute': 'Perc kiválasztása',
  /** Action message for setting to the current time */
  'calendar.action.set-to-current-time': 'Beállítás az aktuális időre',
  /** Label for selecting an hour preset. Receives a `time` param as a string on hh:mm format and a `date` param as a Date instance denoting the preset date */
  'calendar.action.set-to-time-preset': '{{time}} ekkor: {{date, datetime}}',
  /** Error message displayed in calendar when entered date is not the correct format */
  'calendar.error.must-be-in-format': 'A formátumnak így kell kinéznie: {{exampleDate}}',
  /** Month name for April */
  'calendar.month-names.april': 'Április',
  /** Month name for August */
  'calendar.month-names.august': 'Augusztus',
  /** Month name for December */
  'calendar.month-names.december': 'December',
  /** Month name for February */
  'calendar.month-names.february': 'Február',
  /** Month name for January */
  'calendar.month-names.january': 'Január',
  /** Month name for July */
  'calendar.month-names.july': 'Július',
  /** Month name for June */
  'calendar.month-names.june': 'Június',
  /** Month name for March */
  'calendar.month-names.march': 'Március',
  /** Month name for May */
  'calendar.month-names.may': 'Május',
  /** Month name for November */
  'calendar.month-names.november': 'November',
  /** Month name for October */
  'calendar.month-names.october': 'Október',
  /** Month name for September */
  'calendar.month-names.september': 'Szeptember',
  /** Short weekday name for Friday */
  'calendar.weekday-names.short.friday': 'Pé',
  /** Short weekday name for Monday */
  'calendar.weekday-names.short.monday': 'Hé',
  /** Short weekday name for Saturdayday */
  'calendar.weekday-names.short.saturday': 'Szo',
  /** Short weekday name for Sunday */
  'calendar.weekday-names.short.sunday': 'Va',
  /** Short weekday name for Thursday */
  'calendar.weekday-names.short.thursday': 'Csüt',
  /** Short weekday name for Tuesday */
  'calendar.weekday-names.short.tuesday': 'Ke',
  /** Short weekday name for Wednesday */
  'calendar.weekday-names.short.wednesday': 'Sze',

  /** Label for the close button label in Review Changes pane */
  'changes.action.close-label': 'Változások áttekintésének bezárása',
  /** Cancel label for revert button prompt action */
  'changes.action.revert-all-cancel': 'Mégse',
  /** Revert all confirm label for revert button action - used on prompt button + review changes pane */
  'changes.action.revert-all-confirm': 'Mindent visszaállít',
  /** Prompt for confirming revert change (singular) label for field change action */
  'changes.action.revert-changes-confirm-change_one': 'Változás visszaállítása',
  /** Revert for confirming revert (plural) label for field change action */
  'changes.action.revert-changes-confirm-change_other': 'Változások visszaállítása',
  /** Prompt for reverting changes for a field change */
  'changes.action.revert-changes-description': 'Biztosan vissza akarod állítani a változásokat?',
  /** Prompt for reverting changes for a group change, eg multiple changes */
  'changes.action.revert-changes-description_one': 'Biztosan vissza akarod állítani a változást?',
  /** Label for when the action of the change was to set something that was previously empty, eg a field was given a value, an array item was added, an asset was selected or similar */
  'changes.added-label': 'Hozzáadva',
  /** Array diff: An item was added in a given position (`{{position}}`) */
  'changes.array.item-added-in-position': 'Hozzáadva a(z) {{position}} pozícióban',
  'changes.array.item-moved_down_one': 'Lemásolt {{count}} pozíciót lefelé',
  'changes.array.item-moved_down_other': 'Lemásolt {{count}} pozíciót lefelé',
  /**
   * Array diff: An item was moved within the array.
   * Receives `{{count}}` representing number of positions it moved.
   * Context is the direction of the move, either `up` or `down`.
   */
  'changes.array.item-moved_up_one': 'Mozgatva {{count}} pozícióval felfelé',
  'changes.array.item-moved_up_other': 'Mozgatva {{count}} pozícióval felfelé',
  /** Array diff: An item was removed from a given position (`{{position}}`) */
  'changes.array.item-removed-from-position': 'Eltávolítva a(z) {{position}} pozícióból',
  /** Accessibility label for the "change bar" shown when there are edits on a field-level */
  'changes.change-bar.aria-label': 'Változások áttekintése',
  /** Label for when the action of the change was _not_ an add/remove, eg a text field changed value, an image was changed from one asset to another or similar */
  'changes.changed-label': 'Megváltozott',
  /** Label and text for tooltip that indicates the authors of the changes */
  'changes.changes-by-author': 'Változtatások szerzője',
  /** Additional text shown in development mode when a diff component crashes during rendering */
  'changes.error-boundary.developer-info':
    'További információkért ellenőrizze a fejlesztői konzolt',
  /** Text shown when a diff component crashes during rendering, triggering the error boundary */
  'changes.error-boundary.title': 'Hiba történt a mező változásainak megjelenítésekor',
  /** Error message shown when the value of a field is not the expected one */
  'changes.error.incorrect-type-message':
    'Érték hiba: Az érték típusa "<code>{{actualType}}</code>", a várt típus: "<code>{{expectedType}}</code>"',
  /** File diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.file.meta-info-fallback-title': 'Cím nélkül',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.crop-changed': 'Kivágás megváltozott',
  /** Image diff: Text shown if the previous image asset was deleted (shouldn't theoretically happen) */
  'changes.image.deleted': 'Kép törölve',
  /** Image diff: Text shown if the image failed to be loaded when previewing it */
  'changes.image.error-loading-image': 'Hiba a kép betöltésekor',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.hotspot-changed': 'Hotspot megváltozott',
  /** Image diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.image.meta-info-fallback-title': 'Cím nélkül',
  /** Image diff: Text shown if no asset has been set for the field (but has metadata changes) */
  'changes.image.no-asset-set': 'Kép nincs beállítva',
  /** Image diff: Text shown when the from/to state has/had no image */
  'changes.image.no-image-placeholder': '(nincs kép)',
  /** Label for the "from" value in the change inspector */
  'changes.inspector.from-label': 'Eredeti',
  /** Label for the "meta" (field path, action etc) information in the change inspector */
  'changes.inspector.meta-label': 'Meta',
  /** Label for the "to" value in the change inspector */
  'changes.inspector.to-label': 'Új',
  /** Loading author of change in the differences tooltip in the review changes pane */
  'changes.loading-author': 'Betöltés…',
  /** Loading changes in Review Changes Pane */
  'changes.loading-changes': 'Változások betöltése…',
  /** No Changes description in the Review Changes pane */
  'changes.no-changes-description':
    'Szerkessze a dokumentumot vagy válasszon egy régebbi verziót az idővonalon, hogy megjelenjen a változások listája ebben a panelben.',
  /** No Changes title in the Review Changes pane */
  'changes.no-changes-title': 'Nincsenek változások',
  /** Portable Text diff: An annotation was added */
  'changes.portable-text.annotation_added': 'Megjegyzés hozzáadva',
  /** Portable Text diff: An annotation was changed */
  'changes.portable-text.annotation_changed': 'Megjegyzés megváltozott',
  /** Portable Text diff: An annotation was removed */
  'changes.portable-text.annotation_removed': 'Megjegyzés eltávolítva',
  /** Portable Text diff: An annotation was left unchanged */
  'changes.portable-text.annotation_unchanged': 'Megjegyzés változatlan',
  /** Portable Text diff: A block changed from one style to another (eg `normal` to `h1` or similar) */
  'changes.portable-text.block-style-changed':
    'A blokk stílusa megváltozott "{{fromStyle}}"-ről "{{toStyle}}"-re',
  /** Portable Text diff: Change formatting of text (setting/unsetting marks, eg bold/italic etc) */
  'changes.portable-text.changed-formatting': 'Formázás megváltoztatva',
  /** Portable Text diff: An empty inline object is part of a change */
  'changes.portable-text.empty-inline-object': 'Üres {{inlineObjectType}}',
  /** Portable Text diff: An empty object is the result of adding/removing an annotation */
  'changes.portable-text.empty-object-annotation': 'Üres {{annotationType}}',
  /** Portable Text diff: Added a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_added': 'Üres szöveg hozzáadva',
  /** Portable Text diff: Changed a block that contained no text (eg empty block) */
  'changes.portable-text.empty-text_changed': 'Üres szöveg megváltoztatva',
  /** Portable Text diff: Removed a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_removed': 'Üres szöveg eltávolítva',
  /** Portable Text diff: An inline object was added */
  'changes.portable-text.inline-object_added': 'Beágyazott objektum hozzáadva',
  /** Portable Text diff: An inline object was changed */
  'changes.portable-text.inline-object_changed': 'Beágyazott objektum megváltoztatva',
  /** Portable Text diff: An inline object was removed */
  'changes.portable-text.inline-object_removed': 'Beágyazott objektum eltávolítva',
  /** Portable Text diff: An inline object was left unchanged */
  'changes.portable-text.inline-object_unchanged': 'Változatlan beágyazott objektum',
  /** Portable Text diff: Added a chunk of text */
  'changes.portable-text.text_added': 'Szöveg hozzáadva',
  /** Portable Text diff: Removed a chunk of text */
  'changes.portable-text.text_removed': 'Szöveg eltávolítva',
  /** Portable Text diff: Annotation has an unknown schema type */
  'changes.portable-text.unknown-annotation-schema-type': 'Ismeretlen sématípus',
  /** Portable Text diff: Inline object has an unknown schema type */
  'changes.portable-text.unknown-inline-object-schema-type': 'Ismeretlen sématípus',
  /** Label for when the action of the change was a removal, eg a field was cleared, an array item was removed, an asset was deselected or similar */
  'changes.removed-label': 'Eltávolítva',
  /** Title for the Review Changes pane */
  'changes.title': 'Változások áttekintése',

  /** --- Common components --- */
  /** Tooltip text for context menu buttons */
  'common.context-menu-button.tooltip': 'Több megjelenítése',
  /** Default text for dialog cancel button */
  'common.dialog.cancel-button.text': 'Mégse',
  /** Default text for dialog confirm button */
  'common.dialog.confirm-button.text': 'Megerősít',
  /** Default text in shared loader text / spinner lockup */
  'common.loading': 'Betöltés',

  /** --- Configuration issues --- */
  /** Tooltip displayed on configuration issues button */
  'configuration-issues.button.tooltip': 'Konfigurációs problémák találhatók',

  /** The fallback title for an ordering menu item if no localized titles are provided. */
  'default-menu-item.fallback-title': 'Rendezés {{title}} szerint',

  /** Title for the default ordering/SortOrder if no orderings are provided and the caption field is found */
  'default-orderings.caption': 'Rendezés felirat szerint',
  /** Title for the default ordering/SortOrder if no orderings are provided and the description field is found */
  'default-orderings.description': 'Rendezés leírás szerint',
  /** Title for the default ordering/SortOrder if no orderings are provided and the header field is found */
  'default-orderings.header': 'Rendezés fejléc szerint',
  /** Title for the default ordering/SortOrder if no orderings are provided and the heading field is found */
  'default-orderings.heading': 'Cím szerinti rendezés',
  /** Title for the default ordering/SortOrder if no orderings are provided and the label field is found */
  'default-orderings.label': 'Címke szerinti rendezés',
  /** Title for the default ordering/SortOrder if no orderings are provided and the name field is found */
  'default-orderings.name': 'Név szerinti rendezés',
  /** Title for the default ordering/SortOrder if no orderings are provided and the title field is found */
  'default-orderings.title': 'Cím szerinti rendezés',

  /** Label to show in the document footer indicating the last edited date of the document */
  'document-status.edited': 'Szerkesztve {{date}}',
  /** Label to show in the document footer indicating the document is not published*/
  'document-status.not-published': 'Nem publikált',
  /** Label to show in the document footer indicating the published date of the document */
  'document-status.published': 'Publikálva {{date}}',

  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.duplicate-keys-alert.details.additional-description':
    'A <code>_key</code> tulajdonság értékének egyedi szövegnek kell lennie.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property of each elements has been generated non-uniquely. */
  'form.error.duplicate-keys-alert.details.description':
    'Ez általában akkor fordul elő, amikor elemeket hoznak létre egy API kliensen keresztül, és az egyes elemek <code>_key</code> tulajdonságát nem egyedileg generálták.',
  /** Developer info */
  'form.error.duplicate-keys-alert.details.title': 'Fejlesztői információ',
  /** Generate unique keys */
  'form.error.duplicate-keys-alert.generate-button.text': 'Egyedi kulcsok generálása',
  /** Several items in this list share the same identifier (key). Every item must have an unique identifier. */
  'form.error.duplicate-keys-alert.summary':
    'Ebben a listában több elemenek egyezik az azonosítója (kulcsa). Minden elemnek egyedi azonosítóval kell rendelkeznie.',
  /** Non-unique keys */
  'form.error.duplicate-keys-alert.title': 'Nem egyedi kulcsok',
  /** Error text shown when a field with a given name cannot be found in the schema or is conditionally hidden but explicitly told to render  */
  'form.error.field-not-found':
    'A "{{fieldName}}" mező nem található a tagok között – ellenőrizze, hogy definiálva van-e a sémában és hogy nem került-e feltételesen elrejtésre.',
  /** Add missing keys */
  'form.error.missing-keys-alert.add-button.text': 'Hiányzó kulcsok hozzáadása',
  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.missing-keys-alert.details.additional-description':
    'A <code>_key</code> tulajdonság értékének egyedi szövegnek kell lennie.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property has not been included. */
  'form.error.missing-keys-alert.details.description':
    'Ez általában akkor fordul elő, amikor elemeket hoznak létre egy API kliensen keresztül, és nem tartalmazták a <code>_key</code> tulajdonságot.',
  /** Developer info */
  'form.error.missing-keys-alert.details.title': 'Fejlesztői információ',
  /** Some items in the list are missing their keys. This must be fixed in order to edit the list. */
  'form.error.missing-keys-alert.summary':
    'Néhány elemnek hiányzik a kulcsa a listában. Ezt javítani kell a lista szerkesztéséhez.',
  /** Missing keys */
  'form.error.missing-keys-alert.title': 'Hiányzó kulcsok',
  /** This usually happens when items are created using an API client, or when a custom input component has added invalid data to the list. */
  'form.error.mixed-array-alert.details.description':
    'Ez általában akkor fordul elő, amikor elemeket hoznak létre egy API kliensen keresztül, vagy amikor egy egyéni bemeneti komponens érvénytelen adatokat adott hozzá a listához.',
  /** Developer info */
  'form.error.mixed-array-alert.details.title': 'Fejlesztői információ',
  /**  Remove non-object values */
  'form.error.mixed-array-alert.remove-button.text': 'Nem objektum értékek eltávolítása',
  /** Some items in this list are not objects. This must be fixed in order to edit the list. */
  'form.error.mixed-array-alert.summary':
    'Néhány elem ebben a listában nem objektum. Ezt javítani kell a lista szerkesztéséhez.',
  /** Invalid list values */
  'form.error.mixed-array-alert.title': 'Érvénytelen lista értékek',
  /** Error text shown when form is unable to find an array item at a given indexed path */
  'form.error.no-array-item-at-index':
    'Nem található tömbelem a következő indexen: <code>{{index}}</code> a következő útvonalon: <code>{{path}}</code>',
  /** Error text shown when form is unable to find an array item at a given keyed path */
  'form.error.no-array-item-at-key':
    'Nem található tömbelem `_key`-vel: <code>"{{key}}"</code> a következő útvonalon: <code>{{path}}</code>',
  /** Form field deprecated label */
  'form.field.deprecated-label': 'elavult',
  /** Fallback title shown above field if it has no defined title */
  'form.field.untitled-field-label': 'Cím nélküli',
  /** Fallback title shown above fieldset if it has no defined title */
  'form.field.untitled-fieldset-label': 'Cím nélküli',
  /** Accessibility label for the icon that indicates the field has a validation error */
  'form.validation.has-error-aria-label': 'Hiba van',
  /** Accessibility label for the icon that indicates the field has validation information */
  'form.validation.has-info-aria-label': 'Információ van',
  /** Accessibility label for the icon that indicates the field has a validation warning */
  'form.validation.has-warning-aria-label': 'Figyelmeztetés van',
  /** Text shown when summarizing validation information, when the field has one or more errors */
  'form.validation.summary.errors-count_one': '{{count}} hiba',
  'form.validation.summary.errors-count_other': '{{count}} hibák',
  /** Text shown when summarizing validation information, when the field has one or more warnings */
  'form.validation.summary.warnings-count_one': '{{count}} figyelmeztetés',
  'form.validation.summary.warnings-count_other': '{{count}} figyelmeztetések',

  /** Tooltip for free trial navbar button indicating remaining days */
  'free-trial.tooltip.days-count_one': '{{count}} nap van hátra a próbaidőből',
  'free-trial.tooltip.days-count_other': '{{count}} nap van hátra a próbaidőből',
  /** Tooltip for free trial navbar button, once trial has ended */
  'free-trial.tooltip.trial-finished': 'Frissítsd a projektedet',

  /**
   * Label for "contact sales" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.contact-sales': 'Kapcsolatfelvétel az értékesítéssel',
  /**
   * Label for "help and support" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.help-and-support': 'Segítség és támogatás',
  /**
   * Label for "join our community" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.join-our-community': 'Csatlakozás a közösségünkhöz',
  /** Information for what the latest sanity version is */
  'help-resources.latest-sanity-version': 'A legújabb verzió {{latestVersion}}',
  /** Information for what studio version the current studio is running */
  'help-resources.studio-version': 'Sanity Studio verzió {{studioVersion}}',
  /** Title for help and resources menus */
  'help-resources.title': 'Segítség és erőforrások',

  /** Text for button to cancel an ongoing upload */
  'input.files.common.cancel-upload': 'Feltöltés megszakítása',
  /** Text for file input button in upload placeholder */
  'input.files.common.upload-placeholder.file-input-button.text': 'Feltöltés',
  /** Uploading <FileName/> */
  'input.files.common.upload-progress': 'Feltöltés <FileName/>',
  /** The referenced document cannot be opened, because the URL failed to be resolved */
  'input.reference.document-cannot-be-opened.failed-to-resolve-url':
    'Ezt a dokumentumot nem lehet megnyitni (nem sikerült feloldani az URL-t a Studio számára)',

  /** Label for adding item after a specific array item */
  'inputs.array.action.add-after': 'Elem hozzáadása utána',
  /** Label for adding item before a specific array item */
  'inputs.array.action.add-before': 'Elem hozzáadása elé',
  /** Label for adding array item action when the schema allows for only one schema type */
  'inputs.array.action.add-item': 'Elem hozzáadása',
  /**
   * Label for adding one array item action when the schema allows for multiple schema types,
   * eg. will prompt the user to select a type once triggered
   */
  'inputs.array.action.add-item-select-type': 'Elem hozzáadása...',
  /** Array drag handle button tooltip */
  'inputs.array.action.drag.tooltip': 'Húzza az átrendezéshez',
  /** Label for duplicating an array item  */
  'inputs.array.action.duplicate': 'Másolat készítése',
  /** Label for editing the item of a specific type, eg "Edit Person" */
  'inputs.array.action.edit': '{{itemTypeTitle}} szerkesztése',
  /** Label for removing an array item action  */
  'inputs.array.action.remove': 'Eltávolítás',
  /** Label for removing action when an array item has an error  */
  'inputs.array.action.remove-invalid-item': 'Eltávolítás',
  /** Label for viewing the item of a specific type, eg "View Person" */
  'inputs.array.action.view': '{{itemTypeTitle}} megtekintése',
  /** Error description for the array item tooltip that explains that the current item can still be moved or deleted but not edited since the schema definition is not found */
  'inputs.array.error.can-delete-but-no-edit-description':
    'Ezt az elemet még mozgathatja vagy törölheti, de nem szerkesztheti, mivel a típusának sémadefiníciója sehol sem található.',
  /** Error label for toast when array could not resolve the initial value */
  'inputs.array.error.cannot-resolve-initial-value-title':
    'Nem lehet megoldani a kezdeti értéket a következő típushoz: {{schemaTypeTitle}}: {{errorMessage}}.',
  /** Error label for toast when trying to upload one array item of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_one':
    'A következő elemet nem lehet feltölteni, mert nincs ismert konverzió a tartalomtípustól az elemek listájához:',
  /** Error label for toast when trying to upload multiple array items of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_other':
    'A következő elemeket nem lehet feltölteni, mert nincs ismert konverzió a tartalomtípusoktól az elemek listájához:',
  /** Error description for the array item tooltip that explains that the current type item is not valid for the list  */
  'inputs.array.error.current-schema-not-declare-description':
    'A jelenlegi séma nem jelöli meg a <code>{{typeName}}</code> típusú elemeket érvényesként erre a listára. Ez azt jelentheti, hogy az elemet eltávolították az érvényes elemek közül, vagy valaki más hozzáadta a saját helyi sémájához, amely még nincs telepítve.',
  /** Error description to show how the item is being represented in the json format */
  'inputs.array.error.json-representation-description': 'Ennek az elemnek a JSON reprezentációja:',
  /** Error description for the array item tooltip that explains what the error means with more context */
  'inputs.array.error.type-is-incompatible-prompt':
    'A <code>{{typeName}}</code> típusú elem nem érvényes erre a listára',
  /** Error title for when an item type within an array input is incompatible, used in the tooltip */
  'inputs.array.error.type-is-incompatible-title': 'Miért történik ez?',
  /** Error label for unexpected errors in the Array Input */
  'inputs.array.error.unexpected-error': 'Váratlan hiba: {{error}}',
  /** Label for when the array input doesn't have any items */
  'inputs.array.no-items-label': 'Nincsenek elemek',
  /** Label for read only array fields */
  'inputs.array.read-only-label': 'Ez a mező csak olvasható',
  /** Label for when the array input is resolving the initial value for the item */
  'inputs.array.resolving-initial-value': 'Kezdeti érték megoldása…',
  /** Placeholder value for datetime input */
  'inputs.datetime.placeholder': 'pl. {{example}}',
  /** Acessibility label for button to open file options menu */
  'inputs.file.actions-menu.file-options.aria-label': 'Fájlopciók menü megnyitása',
  /** Browse */
  'inputs.file.browse-button.text': 'Tallózás',
  /** Select file */
  'inputs.file.dialog.title': 'Fájl kiválasztása',
  /** Unknown member kind: `{{kind}}` */
  'inputs.file.error.unknown-member-kind': 'Ismeretlen tagtípus: {{kind}}',
  /** The value of this field is not a valid file. Resetting this field will let you choose a new file. */
  'inputs.file.invalid-file-warning.description':
    'Ennek a mezőnek az értéke nem érvényes fájl. A mező alaphelyzetbe állításával új fájlt választhat.',
  /** Reset value */
  'inputs.file.invalid-file-warning.reset-button.text': 'Érték alaphelyzetbe állítása',
  /** Invalid file value */
  'inputs.file.invalid-file-warning.title': 'Érvénytelen fájlérték',
  /** Select */
  'inputs.file.multi-browse-button.text': 'Kiválasztás',
  /** The upload could not be completed at this time. */
  'inputs.file.upload-failed.description': 'A feltöltés jelenleg nem hajtható végre.',
  /** Upload failed */
  'inputs.file.upload-failed.title': 'A feltöltés sikertelen',
  /** Clear field */
  'inputs.files.common.actions-menu.clear-field.label': 'Mező törlése',
  /** Copy URL */
  'inputs.files.common.actions-menu.copy-url.label': 'URL másolása',
  /** Download */
  'inputs.files.common.actions-menu.download.label': 'Letöltés',
  /** The URL is copied to the clipboard */
  'inputs.files.common.actions-menu.notification.url-copied': 'Az URL vágólapra másolva',
  /** Replace */
  'inputs.files.common.actions-menu.replace.label': 'Csere',
  /** Upload */
  'inputs.files.common.actions-menu.upload.label': 'Feltöltés',
  /** Drop to upload */
  'inputs.files.common.drop-message.drop-to-upload': 'Húzza ide a feltöltéshez',
  /** Drop to upload `{{count}}` file */
  'inputs.files.common.drop-message.drop-to-upload-multi_one':
    'Húzza ide a feltöltéshez {{count}} fájlt',
  /** Drop to upload `{{count}}` files */
  'inputs.files.common.drop-message.drop-to-upload-multi_other':
    'Húzza ide a feltöltéshez {{count}} fájlt',
  /** Can't upload this file here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_one':
    'Ezt a fájlt nem lehet itt feltölteni',
  /** Can't upload any of these files here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_other':
    'Egyik fájlt sem lehet itt feltölteni',
  /** `{{count}}` file can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_one':
    '{{count}} fájlt nem lehet itt feltölteni',
  /** `{{count}}` files can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_other':
    '{{count}} fájlt nem lehet itt feltölteni',
  /** Cannot upload `{{count}}` files */
  'inputs.files.common.placeholder.cannot-upload-some-files_one': 'Nem lehet feltölteni a fájlt',
  'inputs.files.common.placeholder.cannot-upload-some-files_other':
    'Nem lehet feltölteni {{count}} fájlt',
  /** Drag or paste type here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_file':
    'Húzza vagy illessze be a fájlt ide',
  /** Drag or paste image here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_image':
    'Húzza vagy illessze be a képet ide',
  /** Drop to upload file */
  'inputs.files.common.placeholder.drop-to-upload_file': 'Dobja ide a fájlt a feltöltéshez',
  /** Drop to upload image */
  'inputs.files.common.placeholder.drop-to-upload_image': 'Dobja ide a képet a feltöltéshez',
  /** Read only */
  'inputs.files.common.placeholder.read-only': 'Csak olvasható',
  /** Can't upload files here */
  'inputs.files.common.placeholder.upload-not-supported': 'Fájlok feltöltése nem támogatott',
  /** Clear upload */
  'inputs.files.common.stale-upload-warning.clear': 'Feltöltés törlése',
  /** An upload has made no progress for at least `{{staleThresholdMinutes}}` minutes and likely got interrupted. You can safely clear the incomplete upload and try uploading again. */
  'inputs.files.common.stale-upload-warning.description':
    'Egy feltöltés legalább {{staleThresholdMinutes}} perce nem haladt előre és valószínűleg megszakadt. Biztonságosan törölheti a befejezetlen feltöltést és újra megpróbálhatja feltölteni.',
  /** Incomplete upload */
  'inputs.files.common.stale-upload-warning.title': 'Befejezetlen feltöltés',
  /** Tooltip text for action to crop image */
  'inputs.image.actions-menu.crop-image-tooltip': 'Kép vágása',
  /** Accessibility label for button to open image edit dialog */
  'inputs.image.actions-menu.edit-details.aria-label': 'Képszerkesztő párbeszédablak megnyitása',
  /** Accessibility label for button to open image options menu */
  'inputs.image.actions-menu.options.aria-label': 'Képbeállítások menüjének megnyitása',
  /** Select */
  'inputs.image.browse-menu.text': 'Kiválasztás',
  /** Cannot upload this file here */
  'inputs.image.drag-overlay.cannot-upload-here': 'Itt nem lehet feltölteni ezt a fájlt',
  /** Drop image to upload */
  'inputs.image.drag-overlay.drop-to-upload-image': 'Dobja ide a képet a feltöltéshez',
  /** This field is read only */
  'inputs.image.drag-overlay.this-field-is-read-only': 'Ez a mező csak olvasható',
  /** Unknown member kind: `{{kind}}` */
  'inputs.image.error.unknown-member-kind': 'Ismeretlen tagtípus: {{kind}}',
  /** Edit hotspot and crop */
  'inputs.image.hotspot-dialog.title': 'Hotspot és vágás szerkesztése',
  /** The value of this field is not a valid image. Resetting this field will let you choose a new image. */
  'inputs.image.invalid-image-warning.description':
    'Ennek a mezőnek az értéke nem érvényes kép. A mező alaphelyzetbe állításával új képet választhat.',
  /** Reset value */
  'inputs.image.invalid-image-warning.reset-button.text': 'Érték alaphelyzetbe állítása',
  /** Invalid image value */
  'inputs.image.invalid-image-warning.title': 'Érvénytelen képérték',
  /** Preview of uploaded image */
  'inputs.image.preview-uploaded-image': 'Feltöltött kép előnézete',
  /** The upload could not be completed at this time. */
  'inputs.image.upload-error.description': 'A feltöltés jelenleg nem fejezhető be.',
  /** Upload failed */
  'inputs.image.upload-error.title': 'A feltöltés sikertelen',
  /** Adjust the rectangle to crop image. Adjust the circle to specify the area that should always be visible. */
  'inputs.imagetool.description':
    'Állítsa be a téglalapot a kép vágásához. Állítsa be a kört azon terület meghatározásához, amelynek mindig láthatónak kell lennie.',
  /** Error: `{{errorMessage}}` */
  'inputs.imagetool.load-error': 'Hiba: {{errorMessage}}',
  /** Hotspot & Crop */
  'inputs.imagetool.title': 'Hotspot & Vágás',
  /** Convert to `{{targetType}}` */
  'inputs.invalid-value.convert-button.text': 'Átalakítás erre: {{targetType}}',
  /** The current value (<code>`{{actualType}}`</code>) */
  'inputs.invalid-value.current-type': 'A jelenlegi érték (<code>{{actualType}}</code>)',
  /** The property value is stored as a value type that does not match the expected type. */
  'inputs.invalid-value.description':
    'A tulajdonság értéke olyan értéktípusban van tárolva, amely nem egyezik a várt típussal.',
  /** The value of this property must be of type <code>`{{validType}}`</code> according to the schema. */
  'inputs.invalid-value.details.description':
    'Ennek a tulajdonságnak az értékének a séma szerint <code>{{validType}}</code> típusúnak kell lennie.',
  /** Only the following types are valid here according to schema: */
  'inputs.invalid-value.details.multi-type-description':
    'Csak a következő típusok érvényesek itt a séma szerint:',
  /** Mismatching value types typically occur when the schema has recently been changed. */
  'inputs.invalid-value.details.possible-reason':
    'A nem egyező értéktípusok általában akkor fordulnak elő, amikor a séma nemrégiben megváltozott.',
  /** Developer info */
  'inputs.invalid-value.details.title': 'Fejlesztői információ',
  /** -- Invalid Value Input -- */
  /** Reset value */
  'inputs.invalid-value.reset-button.text': 'Érték visszaállítása',
  /** Invalid property value */
  'inputs.invalid-value.title': 'Érvénytelen tulajdonságérték',
  /** Field groups */
  'inputs.object.field-group-tabs.aria-label': 'Mezőcsoportok',
  /** Read-only field description */
  'inputs.object.unknown-fields.read-only.description':
    'Ez a mező <strong>csak olvasható</strong> a dokumentum sémája szerint és nem távolítható el. Ha szeretnéd, hogy ezt a Studioban el lehessen távolítani, győződj meg róla, hogy eltávolítod a <code>readOnly</code> mezőt a séma beágyazott típusából.',
  /** Remove field */
  'inputs.object.unknown-fields.remove-field-button.text': 'Mező eltávolítása',
  /** Encountered `{{count}}` fields that are not defined in the schema. */
  'inputs.object.unknown-fields.warning.description_one':
    'Egy olyan mezőt találtunk, amely nincs meghatározva a séma szerint.',
  'inputs.object.unknown-fields.warning.description_other':
    '{{count}} olyan mezőt találtunk, amelyek nincsenek meghatározva a séma szerint.',
  /** Detailed description of unknown field warning */
  'inputs.object.unknown-fields.warning.details.description_one':
    'Ez a mező nincs meghatározva a séma szerint, ami azt jelentheti, hogy a mező definícióját eltávolították, vagy valaki más hozzáadta a saját helyi projektjéhez és még nem telepítette a változásokat.',
  'inputs.object.unknown-fields.warning.details.description_other':
    'Ezek a mezők nincsenek meghatározva a dokumentum sémájában, ami azt jelentheti, hogy a mező definícióit eltávolították, vagy valaki más hozzáadta őket a saját helyi projektjéhez és még nem telepítette a változásokat.',
  /** Developer info */
  'inputs.object.unknown-fields.warning.details.title': 'Fejlesztői információ',
  /** Unknown field found */
  'inputs.object.unknown-fields.warning.title_one': 'Ismeretlen mező található',
  'inputs.object.unknown-fields.warning.title_other': 'Ismeretlen mezők találhatók',
  /** Collapse the editor to save screen space  */
  'inputs.portable-text.action.collapse-editor': 'Szerkesztő összecsukása',
  /** Aria label for action to edit an existing annotation */
  'inputs.portable-text.action.edit-annotation-aria-label': 'Megjegyzés szerkesztése',
  /** Expand the editor to give more editing space */
  'inputs.portable-text.action.expand-editor': 'Szerkesztő kibontása',
  /** Label label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block': '{{typeName}} beszúrása',
  /** Accessibility label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block-aria-label': '{{typeName}} beszúrása (blokk)',
  /** Label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object': '{{typeName}} beszúrása',
  /** Accessibility label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object-aria-label': '{{typeName}} beszúrása (inline)',
  /** Aria label for action to remove an annotation */
  'inputs.portable-text.action.remove-annotation-aria-label': 'Megjegyzés eltávolítása',
  /** Label for activate on focus with context of click and not focused */
  'inputs.portable-text.activate-on-focus-message_click': 'Kattints az aktiváláshoz',
  /** Label for activate on focus with context of click and focused */
  'inputs.portable-text.activate-on-focus-message_click-focused':
    'Kattints vagy nyomd meg a szóközt az aktiváláshoz',
  /** Label for activate on focus with context of tap and not focused */
  'inputs.portable-text.activate-on-focus-message_tap': 'Koppints az aktiváláshoz',
  /**Aria label for the annotation object */
  'inputs.portable-text.annotation-aria-label': 'Megjegyzés objektum',
  /** Title for dialog that allows editing an annotation */
  'inputs.portable-text.annotation-editor.title': 'Szerkesztés {{schemaType}}',
  /** Title of the default "link" annotation */
  'inputs.portable-text.annotation.link': 'Link',
  /**Aria label for the block object */
  'inputs.portable-text.block.aria-label': 'Blokk objektum',
  /** Label for action to edit a block item, in the case where it is editable */
  'inputs.portable-text.block.edit': 'Szerkesztés',
  /** Accessibility label for the button that opens the actions menu on blocks */
  'inputs.portable-text.block.open-menu-aria-label': 'Menü megnyitása',
  /** Label for action to open a reference, in the case of block-level reference types */
  'inputs.portable-text.block.open-reference': 'Hivatkozás megnyitása',
  /** Label for action to remove a block item */
  'inputs.portable-text.block.remove': 'Eltávolítás',
  /** Label for action to view a block item, in the case where it is read-only and thus cannot be edited */
  'inputs.portable-text.block.view': 'Megtekintés',
  /** Title of the "code" decorator */
  'inputs.portable-text.decorator.code': 'Kód',
  /** Title of the "em" (emphasis) decorator */
  'inputs.portable-text.decorator.emphasis': 'Dőlt',
  /** Title of the "strike-through" decorator */
  'inputs.portable-text.decorator.strike-through': 'Áthúzott',
  /** Title of the "strong" decorator */
  'inputs.portable-text.decorator.strong': 'Félkövér',
  /** Title of the "underline" decorator */
  'inputs.portable-text.decorator.underline': 'Aláhúzott',
  /** Placeholder text for when the editor is empty */
  'inputs.portable-text.empty-placeholder': 'Üres',
  /**Aria label for the block object */
  'inputs.portable-text.inline-block.aria-label': 'Beágyazott objektum',
  /** Label for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit': 'Objektum szerkesztése',
  /** Aria label for icon for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit-aria-label': 'Objektum szerkesztése',
  /** Label for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove': 'Objektum eltávolítása',
  /** Aria label for icon for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove-aria-label': 'Objektum eltávolítása',
  /** Disclaimer text shown on invalid Portable Text value, when an action is available to unblock the user, but it is not guaranteed to be safe */
  'inputs.portable-text.invalid-value.action-disclaimer':
    'MEGJEGYZÉS: Általában biztonságos elvégezni a fenti műveletet, de ha kétségeid vannak, lépj kapcsolatba azokkal, akik felelősek a stúdió konfigurálásáért.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.action': 'Objektum eltávolítása',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.description':
    'A(z) <code>{{key}}</code> kulcsú blokk <code>{{childKey}}</code> kulcsú gyermeke <code>{{childType}}</code> típusú, ami nem megengedett a séma definíciója szerint.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.action': 'Blokk eltávolítása',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.description':
    'A(z) <code>{{key}}</code> kulcsú blokk <code>{{typeName}}</code> típusú, ami nem megengedett a séma definíciója szerint.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.action': 'Üres szövegspan beillesztése',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.description':
    'A(z) <code>{{key}}</code> kulcsú szövegblokknak nincsenek szövegspanjai.',
  /** Label for the button to ignore invalid values in the Portable Text editor */
  'inputs.portable-text.invalid-value.ignore-button.text': 'Figyelmen kívül hagyás',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.action':
    'Használja a(z) <code>{{expectedTypeName}}</code> típust',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.description':
    'A <code>{{key}}</code> kulcsú blokk érvénytelen típusnevet használ. A sémának megfelelően <code>{{expectedTypeName}}</code> típusúnak kellene lennie.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.action': 'Üres szövegérték beállítása',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.description':
    'A <code>{{key}}</code> kulcsú blokk <code>{{childKey}}</code> kulcsú spanje hiányzó vagy érvénytelen <code>text</code> tulajdonsággal rendelkezik.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.action':
    '<code>{{expectedTypeName}}</code> típus használata',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.description':
    'A <code>{{key}}</code> kulcsú blokk típusneve hiányzik. A sémának megfelelően <code>{{expectedTypeName}}</code> típusúnak kellene lennie.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.action':
    'Véletlenszerű kulcs hozzárendelése',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.description':
    'A <code>{{key}}</code> kulcsú blokk <code>{{index}}</code> indexű gyermekénél hiányzik a <code>_key</code> tulajdonság.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.action': 'Az objektum eltávolítása',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.description':
    'A <code>{{key}}</code> kulcsú blokk <code>{{childKey}}</code> kulcsú gyermekénél hiányzik a <code>_type</code> tulajdonság.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.action': 'Véletlenszerű kulcs hozzárendelése',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.description':
    'A <code>{{index}}</code> indexű blokknál hiányzik a szükséges <code>_key</code> tulajdonság.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.action': 'A blokk eltávolítása',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.description':
    'A <code>{{key}}</code> kulcsú szövegblokk érvénytelen vagy hiányzó `children` tulajdonsággal rendelkezik.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.action': 'Tulajdonság hozzáadása',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.description':
    'A <code>{{key}}</code> kulcsú szövegblokk érvénytelen vagy hiányzó `markDefs` tulajdonsággal rendelkezik.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.action': 'A blokk eltávolítása',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.description':
    'A <code>{{key}}</code> kulcsú blokk típusneve hiányzik.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.action': 'Az elem eltávolítása',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.description':
    'A <code>{{key}}</code> kulcsú blokk <code>{{index}}</code> indexű gyermekénél nem objektum található.',
  /** Action presented when the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.action': 'Az érték törlése',
  /** Text explaining that the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.description':
    'Az értéknek Portable Text blokkokból álló tömbnek vagy `undefined`-nak kell lennie.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.action': 'Elem eltávolítása',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.description':
    'A <code>{{index}}</code> indexű elem nem objektum.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.action':
    'Nem engedélyezett jelek eltávolítása',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.description':
    'A <code>{{key}}</code> kulcsú szövegblokk olyan jeleket <code>({{orphanedMarks, list}})</code> tartalmaz, amelyeket a séma nem engedélyez.',
  /** Title for the alert indicating that the Portable Text field has an invalid value */
  'inputs.portable-text.invalid-value.title': 'Érvénytelen Portable Text érték',
  /** Title of "bulleted" list type */
  'inputs.portable-text.list-type.bullet': 'Pontozott lista',
  /** Title of numbered list type */
  'inputs.portable-text.list-type.number': 'Számozott lista',
  /** Title of the "h1" block style */
  'inputs.portable-text.style.h1': 'Címsor 1',
  /** Title of the "h2" block style */
  'inputs.portable-text.style.h2': 'Címsor 2',
  /** Title of the "h3" block style */
  'inputs.portable-text.style.h3': 'Címsor 3',
  /** Title of the "h4" block style */
  'inputs.portable-text.style.h4': 'Címsor 4',
  /** Title of the "h5" block style */
  'inputs.portable-text.style.h5': 'Címsor 5',
  /** Title of the "h6" block style */
  'inputs.portable-text.style.h6': 'Címsor 6',
  /** Title shown when multiple blocks of varying styles is selected */
  'inputs.portable-text.style.multiple': 'Többféle',
  /** Title of fallback when no style is given for a block */
  'inputs.portable-text.style.none': 'Stílus nélkül',
  /** Title of the "normal" block style */
  'inputs.portable-text.style.normal': 'Normál',
  /** Title of the "quote" block style */
  'inputs.portable-text.style.quote': 'Idézet',
  /** Label for action to clear the current value of the reference field */
  'inputs.reference.action.clear': 'Törlés',
  /** Label for action to create a new document from the reference input */
  'inputs.reference.action.create-new-document': 'Létrehozás',
  /** Label for action to create a new document from the reference input, when there are multiple templates or document types to choose from */
  'inputs.reference.action.create-new-document-select': 'Létrehozás…',
  /** Label for action to duplicate the current item to a new item (used within arrays) */
  'inputs.reference.action.duplicate': 'Másolat készítése',
  /** Label for action that opens the referenced document in a new tab */
  'inputs.reference.action.open-in-new-tab': 'Megnyitás új lapon',
  /** Label for action to remove the reference from an array */
  'inputs.reference.action.remove': 'Eltávolítás',
  /** Label for action to replace the current value of the field */
  'inputs.reference.action.replace': 'Csere',
  /** Label for action to cancel a previously initiated replace action  */
  'inputs.reference.action.replace-cancel': 'Csere megszakítása',
  /** The cross-dataset reference field currently has a reference, but the feature has been disabled since it was created. This explains what can/cannot be done in its current state. */
  'inputs.reference.cross-dataset.feature-disabled-actions':
    'Ezt a mezőt továbbra is törölheti, de amíg a funkció le van tiltva, nem cserélhető ki másik dokumentumra.',
  /** A cross-dataset reference field exists but the feature has been disabled. A <DocumentationLink> component is available. */
  'inputs.reference.cross-dataset.feature-disabled-description':
    'Ez a funkció le van tiltva. Olvassa el, hogyan engedélyezheti a <DocumentationLink>dokumentációban</DocumentationLink>.',
  /** Title for a warning telling the user that the current project does not have the "cross dataset references" feature */
  'inputs.reference.cross-dataset.feature-unavailable-title':
    'Nem elérhető funkció: Kereszt dataset hivatkozás',
  /** The cross-dataset reference points to a document with an invalid type  */
  'inputs.reference.cross-dataset.invalid-type':
    'A hivatkozott dokumentum érvénytelen típusú ({{typeName}}) <JsonValue/>',
  /** The referenced document will open in a new tab (due to external studio) */
  'inputs.reference.document-opens-in-new-tab': 'Ez a dokumentum új fülön nyílik meg',
  /** Error title for when the document is unavailable (for any possible reason) */
  'inputs.reference.error.document-unavailable-title': 'Dokumentum nem elérhető',
  /** Error title for when the referenced document failed to be loaded */
  'inputs.reference.error.failed-to-load-document-title':
    'Nem sikerült betölteni a hivatkozott dokumentumot',
  /** Error title for when the reference search returned a document that is not an allowed type for the field */
  'inputs.reference.error.invalid-search-result-type-title':
    'A keresés olyan típust adott vissza, ami nem érvényes erre a hivatkozásra: "{{returnedType}}"',
  /** Error description for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-description':
    'A hivatkozott dokumentum (<code>{{documentId}}</code>) típusa <code>{{actualType}}</code>. A séma szerint a hivatkozott dokumentumok csak <AllowedTypes /> típusúak lehetnek.',
  /** Error title for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-title': 'Érvénytelen típusú dokumentum',
  /** Error description for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-description':
    'A hivatkozott dokumentumhoz nem lehet hozzáférni elégtelen jogosultságok miatt',
  /** Error title for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-title': 'Nem megfelelő jogosultságok',
  /** Error description for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-description':
    'A hivatkozott dokumentum nem létezik (ID: <code>{{documentId}}</code>). Eltávolíthatja a hivatkozást vagy helyettesítheti egy másik dokumentummal.',
  /** Error title for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-title': 'Nem található',
  /** Label for button that clears the reference when it points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document.clear-button-label': 'Törlés',
  /** Error title for when the search for a reference failed. Note that the message sent by the backend may not be localized. */
  'inputs.reference.error.search-failed-title': 'A hivatkozás keresése sikertelen',
  /** Alternative text for the image shown in cross-dataset reference input */
  'inputs.reference.image-preview-alt-text': 'A hivatkozott dokumentum kép előnézete',
  /** Description for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-description':
    '<strong>{{referencedDocument}}</strong> közzétéve lett és ezt a hivatkozást most kell véglegesíteni.',
  /** Title for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-title': 'Hivatkozás véglegesítése',
  /** Description for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-description':
    '<strong>{{referencedDocument}}</strong> közzétéve lett és ezt a hivatkozást most erős hivatkozássá kell alakítani.',
  /** Title for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-title': 'Átalakítás erős hivatkozássá',
  /** Label for button that triggers the action that strengthen a reference */
  'inputs.reference.incomplete-reference.strengthen-button-label': 'Átalakítás erős hivatkozássá',
  /** Label for button that triggers a retry attempt for reference metadata  */
  'inputs.reference.metadata-error.retry-button-label': 'Újrapróbálkozás',
  /** Title for alert shown when reference metadata fails to be loaded */
  'inputs.reference.metadata-error.title': 'Nem sikerült betölteni a hivatkozás metaadatait',
  /** Message shown when no documents were found that matched the given search string */
  'inputs.reference.no-results-for-query':
    'Nincs eredmény a következőre: <strong>“{{searchTerm}}”</strong>',
  /** Text for tooltip showing when a document was edited, using relative time (eg "how long ago was it edited?") */
  'inputs.reference.preview.edited-at-time': 'Szerkesztve <RelativeTime/>',
  /** Accessibility label for icon indicating that document does _not_ have any unpublished changes */
  'inputs.reference.preview.has-no-unpublished-changes-aria-label':
    'Nincsenek közzé nem tett szerkesztések',
  /** Accessibility label for icon indicating that document has unpublished changes */
  'inputs.reference.preview.has-unpublished-changes-aria-label': 'Szerkesztve',
  /** Accessibility label for icon indicating that document does _not_ have a published version */
  'inputs.reference.preview.is-not-published-aria-label': 'Nem közzétéve',
  /** Accessibility label for icon indicating that document has a published version */
  'inputs.reference.preview.is-published-aria-label': 'Közzétéve',
  /** Text for tooltip indicating that a document has no unpublished edits */
  'inputs.reference.preview.no-unpublished-edits': 'Nincsenek közzé nem tett szerkesztések',
  /** Text for tooltip indicating that a document has not yet been published */
  'inputs.reference.preview.not-published': 'Nem közzétéve',
  /** Text for tooltip showing when a document was published, using relative time (eg "how long ago was it published?") */
  'inputs.reference.preview.published-at-time': 'Közzétéve <RelativeTime/>',
  /** The referenced document no longer exist and might have been deleted (for weak references) */
  'inputs.reference.referenced-document-does-not-exist':
    'A hivatkozott dokumentum már nem létezik és lehet, hogy törölve lett (dokumentumazonosító: <code>{{documentId}}</code>).',
  /** The referenced document could not be displayed to the user because of insufficient permissions */
  'inputs.reference.referenced-document-insufficient-permissions':
    'A hivatkozott dokumentumhoz nem lehet hozzáférni elégtelen jogosultságok miatt',
  /** Label for when the reference input is resolving the initial value for an item */
  'inputs.reference.resolving-initial-value': 'Kezdeti érték feloldása…',
  /** Placeholder shown in a reference input with no current value */
  'inputs.reference.search-placeholder': 'Írjon be a kereséshez',
  /** Explanation of the consequences of leaving the reference as strong instead of weak */
  'inputs.reference.strength-mismatch.is-strong-consquences':
    'Nem lesz lehetséges a hivatkozott dokumentum törlése anélkül, hogy először eltávolítaná ezt a hivatkozást vagy gyengére alakítaná azt.',
  /** Description for alert shown when a reference is supposed to be weak, but the actual value is strong */
  'inputs.reference.strength-mismatch.is-strong-description':
    'Ez a hivatkozás <em>erős</em>, de a jelenlegi séma szerint <em>gyenge</em> kellene legyen.',
  /** Explanation of the consequences of leaving the reference as weak instead of strong */
  'inputs.reference.strength-mismatch.is-weak-consquences':
    'Ez lehetővé teszi a hivatkozott dokumentum törlését anélkül, hogy először törölné ezt a hivatkozást, így ez a mező egy nem létező dokumentumra hivatkozna.',
  /** Description for alert shown when a reference is supposed to be strong, but the actual value is weak */
  'inputs.reference.strength-mismatch.is-weak-description':
    'Ez a hivatkozás <em>gyenge</em>, de a jelenlegi séma szerint <em>erős</em> kellene legyen.',
  /** Label for button that triggers the action that strengthens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.strengthen-button-label': 'Átalakítás erős hivatkozássá',
  /** Title for alert shown when a reference is supposed to be weak/strong, but the actual value is the opposite of what it is supposed to be */
  'inputs.reference.strength-mismatch.title': 'Hivatkozás erősségének eltérése',
  /** Label for button that triggers the action that weakens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.weaken-button-label': 'Átalakítás gyenge hivatkozássá',
  /** Action message for generating the slug */
  'inputs.slug.action.generate': 'Generálás',
  /** Loading message for when the input is actively generating a slug */
  'inputs.slug.action.generating': 'Generálás…',
  /** Error message for when the source to generate a slug from is missing */
  'inputs.slug.error.missing-source':
    'Forrás hiányzik. Ellenőrizze a forrást a {{schemaType}} típuson a sémában',
  /** Placeholder for an empty tag input */
  'inputs.tags.placeholder': 'Adjon meg egy címkét és nyomja meg az ENTER-t…',
  /** Placeholder for an empty tag input on touch devices */
  'inputs.tags.placeholder_touch': 'Adjon meg egy címkét…',
  /** Convert to `{{targetType}}` */
  'inputs.untyped-value.convert-button.text': 'Átalakítás {{targetType}} típusúvá',
  /** Encountered an object value without a <code>_type</code> property. */
  'inputs.untyped-value.description':
    'Olyan objektum értékkel találkoztunk, amelynek nincs <code>_type</code> tulajdonsága.',
  /** Either remove the <code>name</code> property of the object declaration, or set <code>_type</code> property on items. */
  'inputs.untyped-value.details.description':
    'Vagy távolítsa el az objektumdeklaráció <code>name</code> tulajdonságát, vagy állítson be <code>_type</code> tulajdonságot az elemeken.',
  /** Current value (<code>object</code>): */
  'inputs.untyped-value.details.json-dump-prefix': 'Jelenlegi érték (<code>objektum</code>):',
  /** The following types are valid here according to schema: */
  'inputs.untyped-value.details.multi-type-description':
    'A séma szerint a következő típusok érvényesek itt:',
  /** Developer info */
  'inputs.untyped-value.details.title': 'Fejlesztői információ',
  /** Property value missing <code>_type</code> */
  'inputs.untyped-value.title': 'Hiányzó tulajdonságérték <code>_type</code>',
  /** Unset value */
  'inputs.untyped-value.unset-item-button.text': 'Érték törlése',

  /** The fallback explanation if no context is provided */
  'insufficient-permissions-message.not-authorized-explanation':
    'Nincs jogosultságod hozzáférni ehhez a funkcióhoz.',
  /** The explanation when unable to create any document at all */
  'insufficient-permissions-message.not-authorized-explanation_create-any-document':
    'Nincs jogosultságod dokumentumot létrehozni.',
  /** The explanation when unable to create a particular document */
  'insufficient-permissions-message.not-authorized-explanation_create-document':
    'Nincs jogosultságod ezt a dokumentumot létrehozni.',
  /** The explanation when unable to create a particular type of document */
  'insufficient-permissions-message.not-authorized-explanation_create-document-type':
    'Nincs jogosultságod ilyen típusú dokumentumot létrehozni.',
  /** The explanation when unable to create a new reference in a document */
  'insufficient-permissions-message.not-authorized-explanation_create-new-reference':
    'Nincs jogosultságod új hivatkozást létrehozni.',
  /** The explanation when unable to delete a particular document */
  'insufficient-permissions-message.not-authorized-explanation_delete-document':
    'Nincs jogosultságod ezt a dokumentumot törölni.',
  /** The explanation when unable to discard changes in a particular document */
  'insufficient-permissions-message.not-authorized-explanation_discard-changes':
    'Nincs jogosultságod a változtatások elvetésére ebben a dokumentumban.',
  /** The explanation when unable to duplicate a particular document */
  'insufficient-permissions-message.not-authorized-explanation_duplicate-document':
    'Nincs jogosultságod ezt a dokumentumot duplikálni.',
  /** The explanation when unable to publish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_publish-document':
    'Nincs jogosultságod ezt a dokumentumot közzétenni.',
  /** The explanation when unable to unpublish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_unpublish-document':
    'Nincs jogosultságod ezt a dokumentumot visszavonni.',
  /** Appears after the not-authorized message. Lists the current roles. */
  'insufficient-permissions-message.roles': 'A szerepeid: <Roles/>',
  /** The title for the insufficient permissions message component */
  'insufficient-permissions-message.title': 'Nem megfelelő jogosultságok',

  /** Unexpected error: `{{error}}` */
  'member-field-error.unexpected-error': 'Váratlan hiba: {{error}}',

  /** Button label for "Create new document" button */
  'new-document.button': 'Létrehozás',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are templates/types available for creation
   */
  'new-document.create-new-document-label': 'Új dokumentum…',
  /** Placeholder for the "filter" input within the new document menu */
  'new-document.filter-placeholder': 'Szűrő',
  /** Loading indicator text within the new document menu */
  'new-document.loading': 'Betöltés…',
  /** Accessibility label for the list displaying options in the new document menu */
  'new-document.new-document-aria-label': 'Új dokumentum',
  /** Message for when there are no document type options in the new document menu */
  'new-document.no-document-types-found': 'Nem található dokumentumtípus',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are no templates/types to create from
   */
  'new-document.no-document-types-label': 'Nincsenek dokumentumtípusok',
  /** Message for when no results are found for a specific search query in the new document menu */
  'new-document.no-results': 'Nincs eredmény a következőre: <strong>{{searchQuery}}</strong>',
  /** Aria label for the button that opens the "Create new document" popover/dialog */
  'new-document.open-dialog-aria-label': 'Új dokumentum létrehozása',
  /** Title for "Create new document" dialog */
  'new-document.title': 'Új dokumentum létrehozása',

  /** Label for action to manage members of the current studio project */
  'presence.action.manage-members': 'Tagok kezelése',
  /** Accessibility label for presence menu button */
  'presence.aria-label': 'Ki van itt',
  /** Message description for when no one else is currently present */
  'presence.no-one-else-description':
    'Hívj meg embereket a projektre, hogy lásd az online státuszukat.',
  /** Message title for when no one else is currently present */
  'presence.no-one-else-title': 'Senki más nincs itt',
  /** Message for when a user is not in a document (displayed in the global presence menu) */
  'presence.not-in-a-document': 'Nincs dokumentumban',
  /** Tooltip content text for presence menu button */
  'presence.tooltip-content': undefined, // 'Who is here'

  /** Fallback title shown when a preview does not provide a title */
  'preview.default.title-fallback': 'Cím nélkül',
  /** Fallback preview value for types that have "no value" (eg null, undefined) */
  'preview.fallback.no-value': '(nincs érték)',
  /** Alternative text for image being shown while image is being uploaded, in previews */
  'preview.image.file-is-being-uploaded.alt-text': 'A kép jelenleg feltöltés alatt áll',

  /* Relative time, just now */
  'relative-time.just-now': 'épp most',

  /** Accessibility label to open search action when the search would go fullscreen (eg on narrower screens) */
  'search.action-open-aria-label': 'Keresés megnyitása',
  /** Action label for adding a search filter */
  'search.action.add-filter': 'Szűrő hozzáadása',
  /** Action label for clearing search filters */
  'search.action.clear-filters': 'Szűrők törlése',
  /** Label for action to clear recent searches */
  'search.action.clear-recent-searches': 'Legutóbbi keresések törlése',
  /** Accessibility label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-aria-label': 'Kijelölt szűrők törlése',
  /** Label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-label': 'Törlés',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to close the search */
  'search.action.close-search-aria-label': 'Keresés bezárása',
  /** Accessibility label for filtering by document type */
  'search.action.filter-by-document-type-aria-label': 'Szűrés dokumentumtípus alapján',
  /** Accessibility action label for removing an already applied search filter */
  'search.action.remove-filter-aria-label': 'Szűrő eltávolítása',
  /**
   * Text displayed when either no document type(s) have been selected, or we need a fallback,
   * eg "Search for all types".
   */
  'search.action.search-all-types': 'Összes dokumentum keresése',
  /**
   * Text displayed when we are able to determine one or more document types that will be used for
   * searching, and can fit within the space assigned by the design.
   */
  'search.action.search-specific-types': 'Keresés a következőkre: {{types, list}}',
  /** Dialog title for action to select an asset of unknown type */
  'search.action.select-asset': 'Eszköz kiválasztása',
  /** Dialog title for action to select a file asset */
  'search.action.select-asset_file': 'Fájl kiválasztása',
  /** Dialog title for action to select an image asset */
  'search.action.select-asset_image': 'Kép kiválasztása',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-aria-label_hide': 'Szűrők elrejtése',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-aria-label_show': 'Szűrők megjelenítése',
  /** Label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-label_hide': 'Szűrők elrejtése',
  /** Label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-label_show': 'Szűrők megjelenítése',
  /** Tooltip text for the global search button */
  'search.button.tooltip': 'Keresés',
  /**
   * A list of provided types (use `list` formatter preferably).
   */
  'search.document-type-list': '{{types, list}}',
  /**
   * In the context of a list of document types - no filtering selection has been done,
   * thus the default is "all types".
   */
  'search.document-type-list-all-types': 'Összes típus',
  /** Accessibility label for list displaying the available document types */
  'search.document-types-aria-label': 'Dokumentumtípusok',
  /** Label for when no document types matching the filter are found */
  'search.document-types-no-matches-found': 'Nincs találat erre: {{filter}}',
  /** Description for error when a filter cannot be displayed, describes that you should check the schema */
  'search.error.display-filter-description':
    'Ez azt jelezheti, hogy érvénytelen beállítások vannak a sémában.',
  /** Title for error when a filter cannot be displayed (mainly a developer-oriented error) */
  'search.error.display-filter-title': 'Hiba történt a szűrő megjelenítése közben.',
  /** Description for error when no valid asset source is found, describes that you should check the the current studio config */
  'search.error.no-valid-asset-source-check-config-description':
    'Kérjük, ellenőrizze, hogy engedélyezve van-e a stúdió konfigurációs fájljában.',
  /** Description for error when no valid asset source is found, describes that only the default asset is supported */
  'search.error.no-valid-asset-source-only-default-description':
    'Jelenleg csak az alapértelmezett eszközforrás támogatott.',
  /** Title for error when no valid asset sources found */
  'search.error.no-valid-asset-source-title': 'Nem található érvényes eszközforrás.',
  /** Helpful description for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-help-description':
    'Kérjük, próbálja újra vagy ellenőrizze a kapcsolatot',
  /** Title label for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-title': 'Valami hiba történt a keresés során',
  /**
   * Label for "All fields", a label that appears above the list of available fields when filtering.
   * If one or more document type has been chosen as filter, this label is replaced with a group of
   * fields per selected document type
   */
  'search.filter-all-fields-header': 'Összes mező',
  /** Label for the action of changing from one file to a different file in asset search filter */
  'search.filter-asset-change_file': 'Fájl cseréje',
  /** Label for the action of changing from one image to a different image in asset search filter */
  'search.filter-asset-change_image': 'Kép cseréje',
  /** Label for the action of clearing the currently selected asset in an image/file filter */
  'search.filter-asset-clear': 'Törlés',
  /** Label for the action of selecting a file in asset search filter */
  'search.filter-asset-select_file': 'Fájl kiválasztása',
  /** Label for the action of selecting an image in asset search filter */
  'search.filter-asset-select_image': 'Kép kiválasztása',
  /** Label for boolean filter - false */
  'search.filter-boolean-false': 'Hamis',
  /** Label for boolean filter - true */
  'search.filter-boolean-true': 'Igaz',
  /** Accessibility label for list that lets you filter fields by title, when adding a new filter in search */
  'search.filter-by-title-aria-label': 'Szűrés cím alapján',
  /** Accessibility label for date filter input */
  'search.filter-date-aria-label': 'Dátum',
  /** Accessibility label for selecting end date on the date range search filter */
  'search.filter-date-range-end-date-aria-label': 'Befejezés dátuma',
  /** Accessibility label for selecting start date on the date range search filter */
  'search.filter-date-range-start-date-aria-label': 'Kezdő dátum',
  /**
   * Label for "Days"/"Months"/"Years" when selecting it as unit in "X days ago" search filter.
   * Capitalized, as it would be listed in a dropdown.
   */
  'search.filter-date-unit_days': 'Napok',
  'search.filter-date-unit_months': 'Hónapok',
  'search.filter-date-unit_years': 'Évek',
  /** Accessibility label for selecting the unit (day/month/year) when adding "X days ago" search filter */
  'search.filter-date-unit-aria-label': 'Egység kiválasztása',
  /** Accessibility label for the input value (days/months/years) when adding "X days ago" search filter */
  'search.filter-date-value-aria-label': 'Egység értéke',
  /** Label for "field description" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-description': 'Mező leírása',
  /** Label for "field name" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-name': 'Mező neve',
  /** Label for "Used in document types", a list of the document types a field appears in. Shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-used-in-document-types': 'Használt dokumentumtípusokban',
  /** Label for when no fields/filters are found for the given term */
  'search.filter-no-matches-found': 'Nincs találat erre: {{filter}}',
  /** Placeholder value for maximum numeric value filter */
  'search.filter-number-max-value-placeholder': 'Max érték',
  /** Placeholder value for minimum numeric value filter */
  'search.filter-number-min-value-placeholder': 'Min érték',
  /** Placeholder value for the number filter */
  'search.filter-number-value-placeholder': 'Érték',
  /** Placeholder for the "Filter" input, when narrowing possible fields/filters */
  'search.filter-placeholder': 'Szűrő',
  /** Label for the action of clearing the currently selected document in a reference filter */
  'search.filter-reference-clear': 'Törlés',
  /**
   * Label for "shared fields", a label that appears above a list of fields that all filtered types
   * have in common, when adding a new filter. For instance, if "book" and "employee" both have a
   * "title" field, this field would be listed under "shared fields".
   * */
  'search.filter-shared-fields-header': 'Közös mezők',
  /** Placeholder value for the string filter */
  'search.filter-string-value-placeholder': 'Érték',
  /** Label/placeholder prompting user to select one of the predefined, allowed values for a string field */
  'search.filter-string-value-select-predefined-value': 'Válasszon...',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (singular) */
  'search.filters-aria-label_one': 'Szűrő',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (plural) */
  'search.filters-aria-label_other': 'Szűrők',
  /** Label for instructions on how to use the search - displayed when no recent searches are available */
  'search.instructions': 'Használja a <ControlsIcon/>-t a keresés finomításához',
  /** Helpful description for when no search results are found */
  'search.no-results-help-description':
    'Próbálj meg egy másik kulcsszót vagy állítsd be a szűrőket',
  /** Title label for when no search results are found */
  'search.no-results-title': 'Nincs találat',
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
    '<Field/> <Operator>van</Operator> <Value>{{count}} elem</Value>',
  'search.operator.array-count-equal.description_other':
    '<Field/> <Operator>van</Operator> <Value>{{count}} elem</Value>',
  'search.operator.array-count-equal.name': 'mennyiség az',
  /* Array should have a count greater than given filter value */
  'search.operator.array-count-gt.description_one':
    '<Field/> <Operator>van ></Operator> <Value>{{count}} elem</Value>',
  'search.operator.array-count-gt.description_other':
    '<Field/> <Operator>van ></Operator> <Value>{{count}} elem</Value>',
  'search.operator.array-count-gt.name': 'mennyiség több mint',
  /* Array should have a count greater than or equal to the given filter value */
  'search.operator.array-count-gte.description_one':
    '<Field/> <Operator>van ≥</Operator> <Value>{{count}} elem</Value>',
  'search.operator.array-count-gte.description_other':
    '<Field/> <Operator>van ≥</Operator> <Value>{{count}} elem</Value>',
  'search.operator.array-count-gte.name': 'mennyiség több vagy egyenlő',
  /* Array should have a count less than given filter value */
  'search.operator.array-count-lt.description_one':
    '<Field/> <Operator><</Operator> <Value>{{count}} elemet tartalmaz</Value>',
  'search.operator.array-count-lt.description_other':
    '<Field/> <Operator><</Operator> <Value>{{count}} elemet tartalmaz</Value>',
  'search.operator.array-count-lt.name': 'mennyiség kevesebb mint',
  /* Array should have a count less than or equal to the given filter value */
  'search.operator.array-count-lte.description_one':
    '<Field/> <Operator>≤</Operator> <Value>{{count}} elemet tartalmaz</Value>',
  'search.operator.array-count-lte.description_other':
    '<Field/> <Operator>≤</Operator> <Value>{{count}} elemet tartalmaz</Value>',
  'search.operator.array-count-lte.name': 'mennyiség kevesebb vagy egyenlő',
  /* Array should have a count that is not equal to the given filter value */
  'search.operator.array-count-not-equal.description_one':
    '<Field/> <Operator>nem tartalmaz</Operator> <Value>{{count}} elemet</Value>',
  'search.operator.array-count-not-equal.description_other':
    '<Field/> <Operator>nem tartalmaz</Operator> <Value>{{count}} elemet</Value>',
  'search.operator.array-count-not-equal.name': 'mennyiség nem az',
  /**
   * Array should have a count within the range of given filter values.
   * Gets passed `{{from}}` and `{{to}}` values.
   **/
  'search.operator.array-count-range.description':
    '<Field/> <Operator>van között</Operator> <Value>{{from}} → {{to}} elem</Value>',
  'search.operator.array-count-range.name': 'mennyiség között van',
  /* Array should include the given value */
  'search.operator.array-list-includes.description':
    '<Field/> <Operator>tartalmaz</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-includes.name': 'tartalmaz',
  /* Array should not include the given value */
  'search.operator.array-list-not-includes.description':
    '<Field/> <Operator>nem tartalmaz</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-not-includes.name': 'nem tartalmaz',
  /* Array should include the given reference */
  'search.operator.array-reference-includes.description':
    '<Field/> <Operator>tartalmaz</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-includes.name': 'tartalmaz',
  /* Array should not include the given reference */
  'search.operator.array-reference-not-includes.description':
    '<Field/> <Operator>nem tartalmazza</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-not-includes.name': 'nem tartalmazza',
  /* Asset (file) should be the selected asset */
  'search.operator.asset-file-equal.description':
    '<Field/> <Operator>az</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-equal.name': 'az',
  /* Asset (file) should not be the selected asset */
  'search.operator.asset-file-not-equal.description':
    '<Field/> <Operator>nem az</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-not-equal.name': 'nem az',
  /* Asset (image) should be the selected asset */
  'search.operator.asset-image-equal.description':
    '<Field/> <Operator>az</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-equal.name': 'az',
  /* Asset (image) should not be the selected asset */
  'search.operator.asset-image-not-equal.description':
    '<Field/> <Operator>nem az</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-not-equal.name': 'nem az',
  /**
   * Boolean value should be the given filter value (true/false).
   * Context passed is `true` and `false`, allowing for more specific translations:
   * - `search.operator.boolean-equal.description_true`
   * - `search.operator.boolean-equal.description_false`
   */
  'search.operator.boolean-equal.description':
    '<Field/> <Operator>az</Operator> <Value>{{value}}</Value>',
  'search.operator.boolean-equal.name': 'az',
  /* Date should be after (later than) given filter value */
  'search.operator.date-after.description':
    '<Field/> <Operator>utána van</Operator> <Value>{{value}}</Value>',
  'search.operator.date-after.name': 'utána van',
  /* Date should be before (earlier than) given filter value */
  'search.operator.date-before.description':
    '<Field/> <Operator>előtte van</Operator> <Value>{{value}}</Value>',
  'search.operator.date-before.name': 'előtte van',
  /* Date should be the given filter value */
  'search.operator.date-equal.description':
    '<Field/> <Operator>az</Operator> <Value>{{value}}</Value>',
  'search.operator.date-equal.name': 'az',
  /* Date should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-last.description':
    '<Field/> <Operator>az utolsóban van</Operator> <Value>{{value}}</Value>',
  'search.operator.date-last.name': 'az utolsóban van',
  /* Date should not be the given filter value */
  'search.operator.date-not-equal.description':
    '<Field/> <Operator>nem az</Operator> <Value>{{value}}</Value>',
  'search.operator.date-not-equal.name': 'nem az',
  /* Date should be within the range of given filter values */
  'search.operator.date-range.description': '<Field/> <Operator>között van</Operator> <Value/>',
  'search.operator.date-range.name': 'között van',
  /* Date and time should be after (later than) given filter value */
  'search.operator.date-time-after.description':
    '<Field/> <Operator>utána van</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-after.name': 'után',
  /* Date and time should be before (earlier than) given filter value */
  'search.operator.date-time-before.description':
    '<Field/> <Operator>korábbi, mint</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-before.name': 'előtt',
  /* Date and time should be the given filter value */
  'search.operator.date-time-equal.description':
    '<Field/> <Operator>ez</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-equal.name': 'ez',
  /* Date and time should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-time-last.description':
    '<Field/> <Operator>az utolsó</Operator> <Value>{{value}}</Value> időszakban van',
  'search.operator.date-time-last.name': 'utolsó',
  /* Date and time should not be the given filter value */
  'search.operator.date-time-not-equal.description':
    '<Field/> <Operator>nem</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-not-equal.name': 'nem',
  /* Date and time should be within the range of given filter values */
  'search.operator.date-time-range.description':
    '<Field/> <Operator>között van</Operator> <Value/>',
  'search.operator.date-time-range.name': 'között van',
  /* Value should be defined */
  'search.operator.defined.description':
    '<Field/> <Operator>van</Operator> <Value>nem üres</Value>',
  'search.operator.defined.name': 'nem üres',
  /* Value should not be defined */
  'search.operator.not-defined.description':
    '<Field/> <Operator>van</Operator> <Value>üres</Value>',
  'search.operator.not-defined.name': 'üres',
  /* Number should be the given filter value */
  'search.operator.number-equal.description':
    '<Field/> <Operator>ez</Operator> <Value>{{value}}</Value>',
  'search.operator.number-equal.name': 'ez',
  /* Number should be greater than given filter value */
  'search.operator.number-gt.description':
    '<Field/> <Operator>></Operator> <Value>{{value}}</Value>',
  'search.operator.number-gt.name': 'nagyobb, mint',
  /* Number should be greater than or the given filter value */
  'search.operator.number-gte.description':
    '<Field/> <Operator>≥</Operator> <Value>{{value}}</Value>',
  'search.operator.number-gte.name': 'nagyobb vagy egyenlő',
  /* Number should be less than given filter value */
  'search.operator.number-lt.description':
    '<Field/> <Operator><</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lt.name': 'kisebb, mint',
  /* Number should be less than or the given filter value */
  'search.operator.number-lte.description':
    '<Field/> <Operator>≤</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lte.name': 'kisebb vagy egyenlő',
  /* Number should not be the given filter value */
  'search.operator.number-not-equal.description':
    '<Field/> <Operator>nem</Operator> <Value>{{value}}</Value>',
  'search.operator.number-not-equal.name': 'nem',
  /* Number should be within the range of given filter values */
  'search.operator.number-range.description':
    '<Field/> <Operator>között van</Operator> <Value>{{from}} → {{to}}</Value>',
  'search.operator.number-range.name': 'között van',
  /* Portable Text should contain the given filter value */
  'search.operator.portable-text-contains.description':
    '<Field/> <Operator>tartalmazza</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-contains.name': 'tartalmazza',
  /* Portable Text should be the given filter value */
  'search.operator.portable-text-equal.description':
    '<Field/> <Operator>az</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-equal.name': 'az',
  /* Portable Text should not contain the given filter value */
  'search.operator.portable-text-not-contains.description':
    '<Field/> <Operator>nem tartalmazza</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-contains.name': 'nem tartalmazza',
  /* Portable Text should not be the given filter value */
  'search.operator.portable-text-not-equal.description':
    '<Field/> <Operator>nem</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-equal.name': 'nem',
  /* References the given asset (file) */
  'search.operator.reference-asset-file.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-file.name': 'fájl',
  /* References the given asset (image) */
  'search.operator.reference-asset-image.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-image.name': 'kép',
  /* References the given document */
  'search.operator.reference-document.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-document.name': 'dokumentum',
  /* Reference should be the given document */
  'search.operator.reference-equal.description':
    '<Field/> <Operator>az</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-equal.name': 'az',
  /* Reference should not be the given document */
  'search.operator.reference-not-equal.description':
    '<Field/> <Operator>nem</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-not-equal.name': 'nem',
  /* Slug contains the given value */
  'search.operator.slug-contains.description':
    '<Field/> <Operator>tartalmazza</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-contains.name': 'tartalmazza',
  /* Slug equals the given filter value */
  'search.operator.slug-equal.description':
    '<Field/> <Operator>az</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-equal.name': 'az',
  /* Slug does not contain the given value */
  'search.operator.slug-not-contains.description':
    '<Field/> <Operator>nem tartalmazza</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-contains.name': 'nem tartalmazza',
  /* Slug does not equal the given filter value */
  'search.operator.slug-not-equal.description':
    '<Field/> <Operator>nem</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-equal.name': 'nem',
  /* String contains the given filter value */
  'search.operator.string-contains.description':
    '<Field/> <Operator>tartalmazza</Operator> <Value>{{value}}</Value>',
  'search.operator.string-contains.name': 'tartalmazza',
  /* String equals the given filter value */
  'search.operator.string-equal.description':
    '<Field/> <Operator>az</Operator> <Value>{{value}}</Value>',
  'search.operator.string-equal.name': 'az',
  /* String equals one of the predefined allowed values */
  'search.operator.string-list-equal.description':
    '<Field/> <Operator>az</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-equal.name': 'az',
  /* String does not equal one of the predefined allowed values */
  'search.operator.string-list-not-equal.description':
    '<Field/> <Operator>nem</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-not-equal.name': 'nem',
  /* String does not contain the given filter value */
  'search.operator.string-not-contains.description':
    '<Field/> <Operator>nem tartalmazza</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-contains.name': 'nem tartalmazza',
  /* String does not equal the given filter value */
  'search.operator.string-not-equal.description':
    '<Field/> <Operator>nem</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-equal.name': 'nem',
  /** Label for the "Best match" search ordering type */
  'search.ordering.best-match-label': 'Legjobb találat',
  /** Label for the "Created: Oldest first" search ordering type */
  'search.ordering.created-ascending-label': 'Létrehozva: A legrégebbi először',
  /** Label for the "Created: Newest first" search ordering type */
  'search.ordering.created-descending-label': 'Létrehozva: A legújabb először',
  /** Label for the "Updated: Oldest first" search ordering type */
  'search.ordering.updated-ascending-label': 'Frissítve: A legrégebbi először',
  /** Label for the "Updated: Newest first" search ordering type */
  'search.ordering.updated-descending-label': 'Frissítve: A legújabb először',
  /** Placeholder text for the global search input field */
  'search.placeholder': 'Keresés',
  /** Accessibility label for the recent searches section, shown when no valid search terms has been given */
  'search.recent-searches-aria-label': 'Legutóbbi keresések',
  /** Label/heading shown for the recent searches section */
  'search.recent-searches-label': 'Legutóbbi keresések',
  /** Accessibility label for the search results section, shown when the user has typed valid terms */
  'search.search-results-aria-label': 'Keresési eredmények',

  /** Accessibility label for the navbar status button */
  'status-button.aria-label': undefined, // 'Configuration status'

  /** Description for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-description':
    'A dokumentum előzmény tranzakciói nem érintettek.',
  /** Title for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-title':
    'Hiba történt a dokumentum változásainak lekérése közben.',
  /** Error description for when the document doesn't have history */
  'timeline.error.no-document-history-description':
    'A dokumentum tartalmának megváltoztatásakor a dokumentum verziói megjelennek ebben a menüben.',
  /** Error title for when the document doesn't have history */
  'timeline.error.no-document-history-title': 'Nincs dokumentum előzmény',
  /** Error prompt when revision cannot be loaded */
  'timeline.error.unable-to-load-revision': 'Nem lehet betölteni a revíziót',
  /** Label for when the timeline item is the latest in the history */
  'timeline.latest': 'Legújabb',
  /** Label for latest version for timeline menu dropdown */
  'timeline.latest-version': 'Legújabb verzió',
  /** The aria-label for the list of revisions in the timeline */
  'timeline.list.aria-label': 'Dokumentum revíziók',
  /** Label for loading history */
  'timeline.loading-history': 'Előzmények betöltése…',
  /** Label shown in review changes timeline when a document has been created */
  'timeline.operation.created': 'Létrehozva',
  /** Label shown in review changes timeline when a document has been created, with a timestamp */
  'timeline.operation.created_timestamp': 'Létrehozva: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was initially created */
  'timeline.operation.created-initial': 'Létrehozva',
  /** Label shown in review changes timeline when a document was initially created, with a timestamp */
  'timeline.operation.created-initial_timestamp': 'Létrehozva: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been deleted */
  'timeline.operation.deleted': 'Törölve',
  /** Label shown in review changes timeline when a document has been deleted, with a timestamp */
  'timeline.operation.deleted_timestamp': 'Törölve: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been discarded */
  'timeline.operation.draft-discarded': 'Piszkozat elvetve',
  /** Label shown in review changes timeline when a draft has been discarded, with a timestamp */
  'timeline.operation.draft-discarded_timestamp': 'Piszkozat elvetve: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been edited */
  'timeline.operation.edited-draft': 'Szerkesztve',
  /** Label shown in review changes timeline when a draft has been edited, with a timestamp */
  'timeline.operation.edited-draft_timestamp': 'Szerkesztve: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been edited live */
  'timeline.operation.edited-live': 'Élőben szerkesztve',
  /** Label shown in review changes timeline when a document has been edited live, with a timestamp */
  'timeline.operation.edited-live_timestamp': 'Élőben szerkesztve: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was published */
  'timeline.operation.published': 'Közzétéve',
  /** Label shown in review changes timeline when a document was published, with a timestamp */
  'timeline.operation.published_timestamp': 'Közzétéve: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was unpublished */
  'timeline.operation.unpublished': 'Közzététel visszavonva',
  /** Label shown in review changes timeline when a document was unpublished, with a timestamp */
  'timeline.operation.unpublished_timestamp': 'Közzététel visszavonva: {{timestamp, datetime}}',
  /**
   * Label for determining since which version the changes for timeline menu dropdown are showing.
   * Receives the time label as a parameter (`timestamp`).
   */
  'timeline.since': 'Ettől: {{timestamp, datetime}}',
  /** Label for missing change version for timeline menu dropdown are showing */
  'timeline.since-version-missing': 'Ettől: ismeretlen verzió',

  /**Aria label for the action buttons in the PTE toolbar */
  'toolbar.portable-text.action-button-aria-label': undefined, // '{{action}}'

  /** Label for button showing the free trial days left */
  'user-menu.action.free-trial_one': '{{count}} nap van hátra a próbaidőből',
  'user-menu.action.free-trial_other': '{{count}} nap van hátra a próbaidőből',
  /** Label for the button showed after trial ended */
  'user-menu.action.free-trial-finished': 'Frissítés ingyenesről',
  /** Label for action to invite members to the current sanity project */
  'user-menu.action.invite-members': 'Tagok meghívása',
  /** Accessibility label for action to invite members to the current sanity project */
  'user-menu.action.invite-members-aria-label': 'Tagok meghívása',
  /** Label for action to manage the current sanity project */
  'user-menu.action.manage-project': 'Projekt kezelése',
  /** Accessibility label for the action to manage the current project */
  'user-menu.action.manage-project-aria-label': 'Projekt kezelése',
  /** Tooltip helper text when portable text annotation is disabled for empty block*/
  'user-menu.action.portable-text.annotation-disabled_empty-block':
    'Nem lehet {{name}} alkalmazni üres blokkra',
  /** Tooltip helper text when portable text annotation is disabled for multiple blocks */
  'user-menu.action.portable-text.annotation-disabled_multiple-blocks':
    'Nem lehet {{name}} alkalmazni több blokkra',
  /** Label for action to sign out of the current sanity project */
  'user-menu.action.sign-out': 'Kijelentkezés',
  /** Title for appearance section for the current studio (dark / light / system scheme) */
  'user-menu.appearance-title': 'Megjelenés',
  /** Label for close menu button for user menu */
  'user-menu.close-menu': 'Menü bezárása',
  /** Description for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-description': 'Sötét megjelenés használata',
  /** Title for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-title': 'Sötét',
  /** Description for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-description': 'Világos megjelenés használata',
  /** Title for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-title': 'Világos',
  /** Description for using "system apparence" in the appearance user menu */
  'user-menu.color-scheme.system-description': 'Rendszer megjelenés használata',
  /** Title for using system apparence in the appearance user menu */
  'user-menu.color-scheme.system-title': 'Rendszer',
  /** Title for locale section for the current studio */
  'user-menu.locale-title': 'Nyelv',
  /** Label for tooltip to show which provider the currently logged in user is using */
  'user-menu.login-provider': 'Bejelentkezve a következővel: {{providerTitle}}',
  /** Label for open menu button for user menu */
  'user-menu.open-menu': 'Menü megnyitása',

  /**
   * Label for action to add a workspace (currently a developer-oriented action, as this will
   * lead to the documentation on workspace configuration)
   */
  'workspaces.action.add-workspace': 'Munkaterület hozzáadása',
  /**
   * Label for action to choose a different workspace, in the case where you are not logged in,
   * have selected a workspace, and are faced with the authentication options for the selected
   * workspace. In other words, label for the action shown when you have reconsidered which
   * workspace to authenticate in.
   */
  'workspaces.action.choose-another-workspace': 'Válassz másik munkaterületet',
  /** Label for heading that indicates that you can choose your workspace */
  'workspaces.choose-your-workspace-label': 'Válasszd ki a munkaterületet',
  /** Label for the workspace menu */
  'workspaces.select-workspace-aria-label': 'Munkaterület kiválasztása',
  /** Button label for opening the workspace switcher */
  'workspaces.select-workspace-label': 'Munkaterület kiválasztása',
  /** Tooltip for the workspace menu */
  'workspaces.select-workspace-tooltip': 'Munkaterület kiválasztása',
  /** Title for Workplaces dropdown menu */
  'workspaces.title': 'Munkaterületek',
})
