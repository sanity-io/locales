import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Menu item for deleting the asset */
  'asset-source.asset-list.menu.delete': 'Smazat',
  /** Menu item for showing where a particular asset is used */
  'asset-source.asset-list.menu.show-usage': 'Zobrazit použití',
  /** Header in usage dialog for file assets */
  'asset-source.asset-usage-dialog.header_file': 'Dokumenty používající soubor',
  /** Header in usage dialog for image assets */
  'asset-source.asset-usage-dialog.header_image': 'Dokumenty používající obrázek',
  /** Text shown in usage dialog when loading documents using the selected asset */
  'asset-source.asset-usage-dialog.loading': 'Načítání…',
  /** Text for cancel action in delete-asset dialog */
  'asset-source.delete-dialog.action.cancel': 'Zrušit',
  /** Text for "confirm delete" action in delete-asset dialog */
  'asset-source.delete-dialog.action.delete': 'Smazat',
  /** Dialog header for delete-asset dialog when deleting a file */
  'asset-source.delete-dialog.header_file': 'Smazat soubor',
  /** Dialog header for delete-asset dialog when deleting an image */
  'asset-source.delete-dialog.header_image': 'Smazat obrázek',
  /** Text shown in delete dialog when loading documents using the selected asset */
  'asset-source.delete-dialog.loading': 'Načítání…',
  /** Message confirming to delete *named* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_named':
    'Chystáte se smazat soubor <strong>{{filename}}}</strong> a jeho metadata. Jste si jisti?',
  /** Message confirming to delete *unnamed* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_unnamed':
    'Chystáte se smazat soubor a jeho metadata. Jste si jisti?',
  /** Message confirming to delete *named* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_named':
    'Chystáte se smazat obrázek <strong>{{filename}}</strong> a jeho metadata. Jste si jisti?',
  /** Message confirming to delete *unnamed* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_unnamed':
    'Chystáte se smazat obrázek a jeho metadata. Jste si jisti?',
  /** Alt text showing on image preview in delete asset dialog  */
  'asset-source.delete-dialog.usage-list.image-preview-alt': 'Náhled obrázku',
  /** Warning message showing when *named* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_named':
    '{{filename}} nelze smazat, protože se používá. Aby bylo možné tento soubor smazat, musíte nejprve odstranit všechna jeho použití.',
  /** Warning message showing when *unnamed* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_unnamed':
    'Tento soubor nelze smazat, protože se používá. Aby bylo možné ho smazat, musíte nejprve odstranit všechna jeho použití.',
  /** Warning message showing when *named* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_named':
    '{{filename}} nelze smazat, protože se používá. Aby bylo možné tento obrázek smazat, musíte nejprve odstranit všechna jeho použití.',
  /** Warning message showing when *unnamed* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_unnamed':
    'Tento obrázek nelze smazat, protože se používá. Aby bylo možné ho smazat, musíte nejprve odstranit všechna jeho použití.',
  /** Text shown when the list of assets only include a specific set of types */
  'asset-source.dialog.accept-message':
    'Zobrazují se pouze assety přijatých typů: <strong>{{acceptTypes}}</strong>',
  /** Keys shared between both image asset source and file asset source */
  /** Select asset dialog title for files */
  'asset-source.dialog.default-title_file': 'Vybrat soubor',
  /** Select asset dialog title for images */
  'asset-source.dialog.default-title_image': 'Vybrat obrázek',
  /** Select asset dialog load more items */
  'asset-source.dialog.load-more': 'Načíst více',
  /** Text shown when selecting a file but there's no files to select from */
  'asset-source.dialog.no-assets_file': 'Žádné soubory',
  /** Text shown when selecting an image but there's no images to select from */
  'asset-source.dialog.no-assets_image': 'Žádné obrázky',
  'asset-source.file.asset-list.action.delete.disabled-cannot-delete-current-file':
    'Nelze smazat aktuálně vybraný soubor',
  'asset-source.file.asset-list.action.delete.text': 'Smazat',
  'asset-source.file.asset-list.action.delete.title': 'Smazat soubor',
  'asset-source.file.asset-list.action.select-file.title': 'Vybrat soubor {{filename}}',
  'asset-source.file.asset-list.action.show-usage.title': 'Zobrazit použití',
  'asset-source.file.asset-list.delete-failed': 'Soubor se nepodařilo smazat',
  'asset-source.file.asset-list.delete-successful': 'Soubor byl smazán',
  'asset-source.file.asset-list.header.date-added': 'Datum přidání',
  /** File asset source */
  'asset-source.file.asset-list.header.filename': 'Název souboru',
  'asset-source.file.asset-list.header.size': 'Velikost',
  'asset-source.file.asset-list.header.type': 'Typ',
  /** Text displayed on button or menu invoking the file asset source */
  'asset-source.file.title': 'Nahrané soubory',
  'asset-source.image.asset-list.delete-failed': 'Obrázek se nepodařilo smazat',
  /** Image asset source */
  'asset-source.image.asset-list.delete-successful': 'Obrázek byl smazán',
  /** Text displayed on button or menu invoking the image asset source */
  'asset-source.image.title': 'Nahrané obrázky',
  'asset-source.usage-list.documents-using-file_named_one':
    'Jeden dokument používá soubor <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-file_named_other':
    '{{count}} dokumentů používá soubor <code>{{filename}}</code>',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *named* file **/
  'asset-source.usage-list.documents-using-file_named_zero':
    'Žádný dokument nepoužívá soubor <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-file_unnamed_one': 'Jeden dokument používá tento soubor',
  'asset-source.usage-list.documents-using-file_unnamed_other':
    '{{count}} dokumentů používá tento soubor',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *unnamed* file **/
  'asset-source.usage-list.documents-using-file_unnamed_zero':
    'Žádný dokument nepoužívá tento soubor',
  'asset-source.usage-list.documents-using-image_named_one':
    'Jeden dokument používá obrázek <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-image_named_other':
    '{{count}} dokumentů používá obrázek <code>{{filename}}</code>',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *named* image **/
  'asset-source.usage-list.documents-using-image_named_zero':
    'Žádný dokument nepoužívá obrázek <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-image_unnamed_one':
    'Jeden dokument používá tento obrázek',
  'asset-source.usage-list.documents-using-image_unnamed_other':
    '{{count}} dokumentů používá tento obrázek',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *unnamed* image **/
  'asset-source.usage-list.documents-using-image_unnamed_zero':
    'Žádné dokumenty nepoužívají tento obrázek',

  /** Action message for navigating to next month */
  'calendar.action.go-to-next-month': 'Přejít na příští měsíc',
  /** Action message for navigating to next year */
  'calendar.action.go-to-next-year': 'Přejít na příští rok',
  /** Action message for navigating to previous month */
  'calendar.action.go-to-previous-month': 'Přejít na předchozí měsíc',
  /** Action message for navigating to previous year */
  'calendar.action.go-to-previous-year': 'Přejít na předchozí rok',
  /* Label for navigating the calendar to "today", without _selecting_ today. Short form, eg `Today`, not `Go to today` */
  'calendar.action.go-to-today': 'Dnes',
  /* Accessibility label for navigating the calendar to "today", without _selecting_ today */
  'calendar.action.go-to-today-aria-label': 'Přejít na dnešek',
  /* Label for navigating the calendar to "tomorrow", without _selecting_ tomorrow. Short form, eg `Tomorrow`, not `Go to tomorrow` */
  'calendar.action.go-to-tomorrow': 'Zítra',
  /* Label for navigating the calendar to "yesterday", without _selecting_ yesterday. Short form, eg `Yesterday`, not `Go to yesterday` */
  'calendar.action.go-to-yesterday': 'Včera',
  /** Label for switch that controls whether or not to include time in given timestamp */
  'calendar.action.include-time-label': 'Zahrnout čas',
  /** Action message for selecting the hour */
  'calendar.action.select-hour': 'Vybrat hodinu',
  /** Action message for selecting the minute */
  'calendar.action.select-minute': 'Vybrat minutu',
  /** Action message for setting to the current time */
  'calendar.action.set-to-current-time': 'Nastavit na aktuální čas',
  /** Label for selecting an hour preset. Receives a `time` param as a string on hh:mm format and a `date` param as a Date instance denoting the preset date */
  'calendar.action.set-to-time-preset': '{{time}} dne {{date, datetime}}',
  /** Error message displayed in calendar when entered date is not the correct format */
  'calendar.error.must-be-in-format': 'Musí být ve formátu <Emphasis>{{exampleDate}}</Emphasis>',
  /** Month name for April */
  'calendar.month-names.april': 'Duben',
  /** Month name for August */
  'calendar.month-names.august': 'Srpen',
  /** Month name for December */
  'calendar.month-names.december': 'Prosinec',
  /** Month name for February */
  'calendar.month-names.february': 'Únor',
  /** Month name for January */
  'calendar.month-names.january': 'Leden',
  /** Month name for July */
  'calendar.month-names.july': 'Červenec',
  /** Month name for June */
  'calendar.month-names.june': 'Červen',
  /** Month name for March */
  'calendar.month-names.march': 'Březen',
  /** Month name for May */
  'calendar.month-names.may': 'Květen',
  /** Month name for November */
  'calendar.month-names.november': 'Listopad',
  /** Month name for October */
  'calendar.month-names.october': 'Říjen',
  /** Month name for September */
  'calendar.month-names.september': 'Září',
  /** Short weekday name for Friday */
  'calendar.weekday-names.short.friday': 'Pá',
  /** Short weekday name for Monday */
  'calendar.weekday-names.short.monday': 'Po',
  /** Short weekday name for Saturdayday */
  'calendar.weekday-names.short.saturday': 'So',
  /** Short weekday name for Sunday */
  'calendar.weekday-names.short.sunday': 'Ne',
  /** Short weekday name for Thursday */
  'calendar.weekday-names.short.thursday': 'Čt',
  /** Short weekday name for Tuesday */
  'calendar.weekday-names.short.tuesday': 'Út',
  /** Short weekday name for Wednesday */
  'calendar.weekday-names.short.wednesday': 'St',

  /** Label for the close button label in Review Changes pane */
  'changes.action.close-label': 'Zavřít kontrolu změn',
  /** Cancel label for revert button prompt action */
  'changes.action.revert-all-cancel': 'Zrušit',
  /** Revert all confirm label for revert button action - used on prompt button + review changes pane */
  'changes.action.revert-all-confirm': 'Vrátit vše',
  /** Prompt for confirming revert change (singular) label for field change action */
  'changes.action.revert-changes-confirm-change_one': 'Vrátit změnu',
  /** Revert for confirming revert (plural) label for field change action */
  'changes.action.revert-changes-confirm-change_other': 'Vrátit změny',
  /** Prompt for reverting changes for a field change */
  'changes.action.revert-changes-description': 'Jste si jisti, že chcete vrátit změny?',
  /** Prompt for reverting changes for a group change, eg multiple changes */
  'changes.action.revert-changes-description_one': 'Jste si jisti, že chcete vrátit změnu?',
  /** Label for when the action of the change was to set something that was previously empty, eg a field was given a value, an array item was added, an asset was selected or similar */
  'changes.added-label': 'Přidáno',
  /** Array diff: An item was added in a given position (`{{position}}`) */
  'changes.array.item-added-in-position': 'Přidáno na pozici {{position}}',
  'changes.array.item-moved_down_one': 'Posunuto o {{count}} pozici dolů',
  'changes.array.item-moved_down_other': 'Posunuto o {{count}} pozic dolů',
  /**
   * Array diff: An item was moved within the array.
   * Receives `{{count}}` representing number of positions it moved.
   * Context is the direction of the move, either `up` or `down`.
   */
  'changes.array.item-moved_up_one': 'Posunuto o {{count}} pozici nahoru',
  'changes.array.item-moved_up_other': 'Posunuto o {{count}} pozic nahoru',
  /** Array diff: An item was removed from a given position (`{{position}}`) */
  'changes.array.item-removed-from-position': 'Odebráno z pozice {{position}}',
  /** Accessibility label for the "change bar" shown when there are edits on a field-level */
  'changes.change-bar.aria-label': 'Kontrola změn',
  /** Label for when the action of the change was _not_ an add/remove, eg a text field changed value, an image was changed from one asset to another or similar */
  'changes.changed-label': 'Změněno',
  /** Label and text for tooltip that indicates the authors of the changes */
  'changes.changes-by-author': 'Změny od',
  /** Additional text shown in development mode when a diff component crashes during rendering */
  'changes.error-boundary.developer-info': 'Pro více informací zkontrolujte konzoli pro vývojáře',
  /** Text shown when a diff component crashes during rendering, triggering the error boundary */
  'changes.error-boundary.title': 'Zobrazení změn tohoto pole způsobilo chybu',
  /** Error message shown when the value of a field is not the expected one */
  'changes.error.incorrect-type-message':
    'Chyba hodnoty: Hodnota je typu "<code>{{actualType}}</code>", očekáván typ "<code>{{expectedType}}</code>"',
  /** File diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.file.meta-info-fallback-title': 'Bez názvu',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.crop-changed': 'Změněný ořez',
  /** Image diff: Text shown if the previous image asset was deleted (shouldn't theoretically happen) */
  'changes.image.deleted': 'Obrázek smazán',
  /** Image diff: Text shown if the image failed to be loaded when previewing it */
  'changes.image.error-loading-image': 'Chyba při načítání obrázku',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.hotspot-changed': 'Změněný hotspot',
  /** Image diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.image.meta-info-fallback-title': 'Bez názvu',
  /** Image diff: Text shown if no asset has been set for the field (but has metadata changes) */
  'changes.image.no-asset-set': 'Obrázek nenastaven',
  /** Image diff: Text shown when the from/to state has/had no image */
  'changes.image.no-image-placeholder': '(žádný obrázek)',
  /** Label for the "from" value in the change inspector */
  'changes.inspector.from-label': 'Od',
  /** Label for the "meta" (field path, action etc) information in the change inspector */
  'changes.inspector.meta-label': 'Meta',
  /** Label for the "to" value in the change inspector */
  'changes.inspector.to-label': 'Do',
  /** Loading author of change in the differences tooltip in the review changes pane */
  'changes.loading-author': 'Načítání…',
  /** Loading changes in Review Changes Pane */
  'changes.loading-changes': 'Načítání změn…',
  /** No Changes description in the Review Changes pane */
  'changes.no-changes-description':
    'Upravte dokument nebo vyberte starší verzi v časové ose, aby se v tomto panelu zobrazil seznam změn.',
  /** No Changes title in the Review Changes pane */
  'changes.no-changes-title': 'Nejsou žádné změny',
  /** Portable Text diff: An annotation was added */
  'changes.portable-text.annotation_added': 'Přidána anotace',
  /** Portable Text diff: An annotation was changed */
  'changes.portable-text.annotation_changed': 'Změněná anotace',
  /** Portable Text diff: An annotation was removed */
  'changes.portable-text.annotation_removed': 'Odebraná anotace',
  /** Portable Text diff: An annotation was left unchanged */
  'changes.portable-text.annotation_unchanged': 'Neměnná anotace',
  /** Portable Text diff: A block changed from one style to another (eg `normal` to `h1` or similar) */
  'changes.portable-text.block-style-changed':
    'Změněn styl bloku z "{{fromStyle}}" na "{{toStyle}}"',
  /** Portable Text diff: Change formatting of text (setting/unsetting marks, eg bold/italic etc) */
  'changes.portable-text.changed-formatting': 'Změněné formátování',
  /** Portable Text diff: An empty inline object is part of a change */
  'changes.portable-text.empty-inline-object': 'Prázdný {{inlineObjectType}}',
  /** Portable Text diff: An empty object is the result of adding/removing an annotation */
  'changes.portable-text.empty-object-annotation': 'Prázdný {{annotationType}}',
  /** Portable Text diff: Added a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_added': 'Přidán prázdný text',
  /** Portable Text diff: Changed a block that contained no text (eg empty block) */
  'changes.portable-text.empty-text_changed': 'Změněn prázdný text',
  /** Portable Text diff: Removed a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_removed': 'Odebrán prázdný text',
  /** Portable Text diff: An inline object was added */
  'changes.portable-text.inline-object_added': 'Přidán inline objekt',
  /** Portable Text diff: An inline object was changed */
  'changes.portable-text.inline-object_changed': 'Změněn inline objekt',
  /** Portable Text diff: An inline object was removed */
  'changes.portable-text.inline-object_removed': 'Odebrán inline objekt',
  /** Portable Text diff: An inline object was left unchanged */
  'changes.portable-text.inline-object_unchanged': 'Nezměněný inline objekt',
  /** Portable Text diff: Added a chunk of text */
  'changes.portable-text.text_added': 'Přidán text',
  /** Portable Text diff: Removed a chunk of text */
  'changes.portable-text.text_removed': 'Odebrán text',
  /** Portable Text diff: Annotation has an unknown schema type */
  'changes.portable-text.unknown-annotation-schema-type': 'Neznámý typ schématu',
  /** Portable Text diff: Inline object has an unknown schema type */
  'changes.portable-text.unknown-inline-object-schema-type': 'Neznámý typ schématu',
  /** Label for when the action of the change was a removal, eg a field was cleared, an array item was removed, an asset was deselected or similar */
  'changes.removed-label': 'Odebráno',
  /** Title for the Review Changes pane */
  'changes.title': 'Přehled změn',

  /** --- Common components --- */
  /** Tooltip text for context menu buttons */
  'common.context-menu-button.tooltip': 'Zobrazit více',
  /** Default text for dialog cancel button */
  'common.dialog.cancel-button.text': 'Zrušit',
  /** Default text for dialog confirm button */
  'common.dialog.confirm-button.text': 'Potvrdit',
  /** Default text in shared loader text / spinner lockup */
  'common.loading': 'Načítání',

  /** --- Configuration issues --- */
  /** Tooltip displayed on configuration issues button */
  'configuration-issues.button.tooltip': 'Nalezeny problémy s konfigurací',

  /** The fallback title for an ordering menu item if no localized titles are provided. */
  'default-menu-item.fallback-title': 'Seřadit podle {{title}}',

  /** Title for the default ordering/SortOrder if no orderings are provided and the caption field is found */
  'default-orderings.caption': 'Seřadit podle Popisku',
  /** Title for the default ordering/SortOrder if no orderings are provided and the description field is found */
  'default-orderings.description': 'Seřadit podle Popisu',
  /** Title for the default ordering/SortOrder if no orderings are provided and the header field is found */
  'default-orderings.header': 'Seřadit podle Záhlaví',
  /** Title for the default ordering/SortOrder if no orderings are provided and the heading field is found */
  'default-orderings.heading': 'Seřadit podle Nadpisu',
  /** Title for the default ordering/SortOrder if no orderings are provided and the label field is found */
  'default-orderings.label': 'Seřadit podle Štítku',
  /** Title for the default ordering/SortOrder if no orderings are provided and the name field is found */
  'default-orderings.name': 'Seřadit podle Jména',
  /** Title for the default ordering/SortOrder if no orderings are provided and the title field is found */
  'default-orderings.title': 'Seřadit podle Titulku',

  /** Label to show in the document footer indicating the last edited date of the document */
  'document-status.edited': 'Editováno {{date}}',
  /** Label to show in the document footer indicating the document is not published*/
  'document-status.not-published': 'Nepublikováno',
  /** Label to show in the document footer indicating the published date of the document */
  'document-status.published': 'Publikováno {{date}}',

  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.duplicate-keys-alert.details.additional-description':
    'Hodnota vlastnosti <code>_key</code> musí být jedinečný řetězec.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property of each elements has been generated non-uniquely. */
  'form.error.duplicate-keys-alert.details.description':
    'To se obvykle stává, když jsou položky vytvořeny pomocí API klienta a vlastnost <code>_key</code> každého prvku byla generována nejedinečně.',
  /** Developer info */
  'form.error.duplicate-keys-alert.details.title': 'Informace pro vývojáře',
  /** Generate unique keys */
  'form.error.duplicate-keys-alert.generate-button.text': 'Generovat jedinečné klíče',
  /** Several items in this list share the same identifier (key). Every item must have an unique identifier. */
  'form.error.duplicate-keys-alert.summary':
    'Několik položek v tomto seznamu sdílí stejný identifikátor (klíč). Každá položka musí mít jedinečný identifikátor.',
  /** Non-unique keys */
  'form.error.duplicate-keys-alert.title': 'Nejedinečné klíče',
  /** Error text shown when a field with a given name cannot be found in the schema or is conditionally hidden but explicitly told to render  */
  'form.error.field-not-found':
    'Pole "{{fieldName}}" nebylo nalezeno mezi členy – ověřte, že je definováno ve schématu a že nebylo podmíněně skryto.',
  /** Add missing keys */
  'form.error.missing-keys-alert.add-button.text': 'Přidat chybějící klíče',
  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.missing-keys-alert.details.additional-description':
    'Hodnota vlastnosti <code>_key</code> musí být jedinečný řetězec.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property has not been included. */
  'form.error.missing-keys-alert.details.description':
    'To se obvykle stává, když jsou položky vytvořeny pomocí API klienta a nebyla zahrnuta vlastnost <code>_key</code>.',
  /** Developer info */
  'form.error.missing-keys-alert.details.title': 'Informace pro vývojáře',
  /** Some items in the list are missing their keys. This must be fixed in order to edit the list. */
  'form.error.missing-keys-alert.summary':
    'Některým položkám v seznamu chybí jejich klíče. To musí být opraveno, aby bylo možné seznam upravovat.',
  /** Missing keys */
  'form.error.missing-keys-alert.title': 'Chybějící klíče',
  /** This usually happens when items are created using an API client, or when a custom input component has added invalid data to the list. */
  'form.error.mixed-array-alert.details.description':
    'To se obvykle stává, když jsou položky vytvořeny pomocí API klienta, nebo když vlastní vstupní komponenta přidala do seznamu neplatná data.',
  /** Developer info */
  'form.error.mixed-array-alert.details.title': 'Informace pro vývojáře',
  /**  Remove non-object values */
  'form.error.mixed-array-alert.remove-button.text': 'Odstranit hodnoty, které nejsou objekty',
  /** Some items in this list are not objects. This must be fixed in order to edit the list. */
  'form.error.mixed-array-alert.summary':
    'Některé položky v tomto seznamu nejsou objekty. To musí být opraveno, aby bylo možné seznam upravovat.',
  /** Invalid list values */
  'form.error.mixed-array-alert.title': 'Neplatné hodnoty seznamu',
  /** Error text shown when form is unable to find an array item at a given indexed path */
  'form.error.no-array-item-at-index':
    'Na cestě <code>{{path}}</code> nebyla nalezena žádná položka pole na indexu <code>{{index}}</code>',
  /** Error text shown when form is unable to find an array item at a given keyed path */
  'form.error.no-array-item-at-key':
    'Na cestě <code>{{path}}</code> nebyla nalezena žádná položka pole s `_key` <code>"{{key}}"</code>',
  /** Form field deprecated label */
  'form.field.deprecated-label': 'zastaralé',
  /** Fallback title shown above field if it has no defined title */
  'form.field.untitled-field-label': 'Nepojmenované',
  /** Fallback title shown above fieldset if it has no defined title */
  'form.field.untitled-fieldset-label': 'Nepojmenované',
  /** Accessibility label for the icon that indicates the field has a validation error */
  'form.validation.has-error-aria-label': 'Obsahuje chybu',
  /** Accessibility label for the icon that indicates the field has validation information */
  'form.validation.has-info-aria-label': 'Obsahuje informace',
  /** Accessibility label for the icon that indicates the field has a validation warning */
  'form.validation.has-warning-aria-label': 'Obsahuje varování',
  /** Text shown when summarizing validation information, when the field has one or more errors */
  'form.validation.summary.errors-count_one': '{{count}} chyba',
  'form.validation.summary.errors-count_other': '{{count}} chyb',
  /** Text shown when summarizing validation information, when the field has one or more warnings */
  'form.validation.summary.warnings-count_one': '{{count}} varování',
  'form.validation.summary.warnings-count_other': '{{count}} varování',

  /** Tooltip for free trial navbar button indicating remaining days */
  'free-trial.tooltip.days-count_one': '{{count}} den zbývá do konce zkušební doby',
  'free-trial.tooltip.days-count_other': '{{count}} dní zbývá do konce zkušební doby',
  /** Tooltip for free trial navbar button, once trial has ended */
  'free-trial.tooltip.trial-finished': 'Vylepšete svůj projekt',

  /**
   * Label for "contact sales" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.contact-sales': 'Kontaktovat obchodní oddělení',
  /**
   * Label for "help and support" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.help-and-support': 'Pomoc a podpora',
  /**
   * Label for "join our community" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.join-our-community': 'Připojte se k naší komunitě',
  /** Information for what the latest sanity version is */
  'help-resources.latest-sanity-version': 'Nejnovější verze je {{latestVersion}}',
  /** Information for what studio version the current studio is running */
  'help-resources.studio-version': 'Verze Sanity Studio {{studioVersion}}',
  /** Title for help and resources menus */
  'help-resources.title': 'Nápověda a zdroje',

  /** Text for button to cancel an ongoing upload */
  'input.files.common.cancel-upload': 'Zrušit',
  /** Text for file input button in upload placeholder */
  'input.files.common.upload-placeholder.file-input-button.text': 'Nahrát',
  /** Uploading <FileName/> */
  'input.files.common.upload-progress': 'Nahrávání <FileName/>',
  /** The referenced document cannot be opened, because the URL failed to be resolved */
  'input.reference.document-cannot-be-opened.failed-to-resolve-url':
    'Tento dokument nelze otevřít (nelze vyřešit URL na Studio)',

  /** Label for adding item after a specific array item */
  'inputs.array.action.add-after': 'Přidat položku za',
  /** Label for adding item before a specific array item */
  'inputs.array.action.add-before': 'Přidat položku před',
  /** Label for adding array item action when the schema allows for only one schema type */
  'inputs.array.action.add-item': 'Přidat položku',
  /**
   * Label for adding one array item action when the schema allows for multiple schema types,
   * eg. will prompt the user to select a type once triggered
   */
  'inputs.array.action.add-item-select-type': 'Přidat položku...',
  /** Array drag handle button tooltip */
  'inputs.array.action.drag.tooltip': 'Přetáhněte pro změnu pořadí',
  /** Label for duplicating an array item  */
  'inputs.array.action.duplicate': 'Duplikovat',
  /** Label for editing the item of a specific type, eg "Edit Person" */
  'inputs.array.action.edit': 'Upravit {{itemTypeTitle}}',
  /** Label for removing an array item action  */
  'inputs.array.action.remove': 'Odstranit',
  /** Label for removing action when an array item has an error  */
  'inputs.array.action.remove-invalid-item': 'Odstranit',
  /** Label for viewing the item of a specific type, eg "View Person" */
  'inputs.array.action.view': 'Zobrazit {{itemTypeTitle}}',
  /** Error description for the array item tooltip that explains that the current item can still be moved or deleted but not edited since the schema definition is not found */
  'inputs.array.error.can-delete-but-no-edit-description':
    'Tuto položku můžete stále přesunout nebo odstranit, ale nelze ji upravit, protože definice schématu pro její typ nebyla nalezena.',
  /** Error label for toast when array could not resolve the initial value */
  'inputs.array.error.cannot-resolve-initial-value-title':
    'Nelze vyřešit počáteční hodnotu pro typ: {{schemaTypeTitle}}: {{errorMessage}}.',
  /** Error label for toast when trying to upload one array item of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_one':
    'Následující položku nelze nahrát, protože neexistuje známá konverze z typu obsahu na položku pole:',
  /** Error label for toast when trying to upload multiple array items of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_other':
    'Následující položky nelze nahrát, protože neexistuje známá konverze z typů obsahu na položku pole:',
  /** Error description for the array item tooltip that explains that the current type item is not valid for the list  */
  'inputs.array.error.current-schema-not-declare-description':
    'Aktuální schéma neuvádí položky typu <code>{{typeName}}</code> jako platné pro tento seznam. To může znamenat, že byl typ odstraněn jako platný typ položky, nebo že někdo jiný ho přidal do svého vlastního lokálního schématu, které ještě není nasazeno.',
  /** Error description to show how the item is being represented in the json format */
  'inputs.array.error.json-representation-description': 'JSON reprezentace této položky:',
  /** Error description for the array item tooltip that explains what the error means with more context */
  'inputs.array.error.type-is-incompatible-prompt':
    'Položka typu <code>{{typeName}}</code> není platná pro tento seznam',
  /** Error title for when an item type within an array input is incompatible, used in the tooltip */
  'inputs.array.error.type-is-incompatible-title': 'Proč se to děje?',
  /** Error label for unexpected errors in the Array Input */
  'inputs.array.error.unexpected-error': 'Neočekávaná chyba: {{error}}',
  /** Label for when the array input doesn't have any items */
  'inputs.array.no-items-label': 'Žádné položky',
  /** Label for read only array fields */
  'inputs.array.read-only-label': 'Toto pole je pouze pro čtení',
  /** Label for when the array input is resolving the initial value for the item */
  'inputs.array.resolving-initial-value': 'Řešení počáteční hodnoty…',
  /** Placeholder value for datetime input */
  'inputs.datetime.placeholder': 'např. {{example}}',
  /** Acessibility label for button to open file options menu */
  'inputs.file.actions-menu.file-options.aria-label': 'Otevřít menu možností souboru',
  /** Browse */
  'inputs.file.browse-button.text': 'Procházet',
  /** Select file */
  'inputs.file.dialog.title': 'Vybrat soubor',
  /** Unknown member kind: `{{kind}}` */
  'inputs.file.error.unknown-member-kind': 'Neznámý typ člena: {{kind}}',
  /** The value of this field is not a valid file. Resetting this field will let you choose a new file. */
  'inputs.file.invalid-file-warning.description':
    'Hodnota tohoto pole není platný soubor. Resetováním tohoto pole můžete vybrat nový soubor.',
  /** Reset value */
  'inputs.file.invalid-file-warning.reset-button.text': 'Resetovat hodnotu',
  /** Invalid file value */
  'inputs.file.invalid-file-warning.title': 'Neplatná hodnota souboru',
  /** Select */
  'inputs.file.multi-browse-button.text': 'Vybrat',
  /** The upload could not be completed at this time. */
  'inputs.file.upload-failed.description': 'Nahrávání se v tuto chvíli nepodařilo dokončit.',
  /** Upload failed */
  'inputs.file.upload-failed.title': 'Nahrávání selhalo',
  /** Clear field */
  'inputs.files.common.actions-menu.clear-field.label': 'Vyčistit pole',
  /** Copy URL */
  'inputs.files.common.actions-menu.copy-url.label': 'Kopírovat URL',
  /** Download */
  'inputs.files.common.actions-menu.download.label': 'Stáhnout',
  /** The URL is copied to the clipboard */
  'inputs.files.common.actions-menu.notification.url-copied': 'URL byla zkopírována do schránky',
  /** Replace */
  'inputs.files.common.actions-menu.replace.label': 'Nahradit',
  /** Upload */
  'inputs.files.common.actions-menu.upload.label': 'Nahrát',
  /** Drop to upload */
  'inputs.files.common.drop-message.drop-to-upload': 'Přetáhněte pro nahrání',
  /** Drop to upload `{{count}}` file */
  'inputs.files.common.drop-message.drop-to-upload-multi_one':
    'Přetáhněte pro nahrání {{count}} souboru',
  /** Drop to upload `{{count}}` files */
  'inputs.files.common.drop-message.drop-to-upload-multi_other':
    'Přetáhněte pro nahrání {{count}} souborů',
  /** Can't upload this file here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_one':
    'Tento soubor zde nelze nahrát',
  /** Can't upload any of these files here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_other':
    'Žádný z těchto souborů zde nelze nahrát',
  /** `{{count}}` file can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_one':
    '{{count}} soubor nelze zde nahrát',
  /** `{{count}}` files can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_other':
    '{{count}} souborů nelze zde nahrát',
  /** Cannot upload `{{count}}` files */
  'inputs.files.common.placeholder.cannot-upload-some-files_one': 'Nelze nahrát soubor',
  'inputs.files.common.placeholder.cannot-upload-some-files_other':
    'Nelze nahrát {{count}} souborů',
  /** Drag or paste type here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_file':
    'Přetáhněte nebo vložte soubor sem',
  /** Drag or paste image here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_image':
    'Přetáhněte nebo vložte obrázek sem',
  /** Drop to upload file */
  'inputs.files.common.placeholder.drop-to-upload_file': 'Pusťte pro nahrání souboru',
  /** Drop to upload image */
  'inputs.files.common.placeholder.drop-to-upload_image': 'Pusťte pro nahrání obrázku',
  /** Read only */
  'inputs.files.common.placeholder.read-only': 'Pouze pro čtení',
  /** Can't upload files here */
  'inputs.files.common.placeholder.upload-not-supported': 'Nelze zde nahrávat soubory',
  /** Clear upload */
  'inputs.files.common.stale-upload-warning.clear': 'Vymazat nahrávání',
  /** An upload has made no progress for at least `{{staleThresholdMinutes}}` minutes and likely got interrupted. You can safely clear the incomplete upload and try uploading again. */
  'inputs.files.common.stale-upload-warning.description':
    'Nahrávání nepokročilo po dobu alespoň {{staleThresholdMinutes}} minut a pravděpodobně bylo přerušeno. Bezpečně můžete vymazat nedokončené nahrávání a pokusit se o nahrání znovu.',
  /** Incomplete upload */
  'inputs.files.common.stale-upload-warning.title': 'Nedokončené nahrávání',
  /** Tooltip text for action to crop image */
  'inputs.image.actions-menu.crop-image-tooltip': 'Oříznout obrázek',
  /** Accessibility label for button to open image edit dialog */
  'inputs.image.actions-menu.edit-details.aria-label': 'Otevřít dialog úpravy obrázku',
  /** Accessibility label for button to open image options menu */
  'inputs.image.actions-menu.options.aria-label': 'Otevřít menu možností obrázku',
  /** Select */
  'inputs.image.browse-menu.text': 'Vybrat',
  /** Cannot upload this file here */
  'inputs.image.drag-overlay.cannot-upload-here': 'Zde nelze nahrát tento soubor',
  /** Drop image to upload */
  'inputs.image.drag-overlay.drop-to-upload-image': 'Pusťte obrázek pro nahrání',
  /** This field is read only */
  'inputs.image.drag-overlay.this-field-is-read-only': 'Toto pole je pouze pro čtení',
  /** Unknown member kind: `{{kind}}` */
  'inputs.image.error.unknown-member-kind': 'Neznámý typ člena: {{kind}}',
  /** Edit hotspot and crop */
  'inputs.image.hotspot-dialog.title': 'Upravit hotspot a oříznout',
  /** The value of this field is not a valid image. Resetting this field will let you choose a new image. */
  'inputs.image.invalid-image-warning.description':
    'Hodnota tohoto pole není platný obrázek. Resetováním tohoto pole můžete vybrat nový obrázek.',
  /** Reset value */
  'inputs.image.invalid-image-warning.reset-button.text': 'Resetovat hodnotu',
  /** Invalid image value */
  'inputs.image.invalid-image-warning.title': 'Neplatná hodnota obrázku',
  /** Preview of uploaded image */
  'inputs.image.preview-uploaded-image': 'Náhled nahraného obrázku',
  /** The upload could not be completed at this time. */
  'inputs.image.upload-error.description': 'Nahrávání se v tuto chvíli nemohlo dokončit.',
  /** Upload failed */
  'inputs.image.upload-error.title': 'Nahrávání selhalo',
  /** Adjust the rectangle to crop image. Adjust the circle to specify the area that should always be visible. */
  'inputs.imagetool.description':
    'Upravte obdélník pro oříznutí obrázku. Upravte kruh pro určení oblasti, která by měla být vždy viditelná.',
  /** Error: `{{errorMessage}}` */
  'inputs.imagetool.load-error': 'Chyba: {{errorMessage}}',
  /** Hotspot & Crop */
  'inputs.imagetool.title': 'Hotspot & Crop',
  /** Convert to `{{targetType}}` */
  'inputs.invalid-value.convert-button.text': 'Převést na <code>{{targetType}}</code>',
  /** The current value (<code>`{{actualType}}`</code>) */
  'inputs.invalid-value.current-type': 'Současná hodnota (<code>{{actualType}}</code>)',
  /** The property value is stored as a value type that does not match the expected type. */
  'inputs.invalid-value.description':
    'Hodnota vlastnosti je uložena jako typ hodnoty, který neodpovídá očekávanému typu.',
  /** The value of this property must be of type <code>`{{validType}}`</code> according to the schema. */
  'inputs.invalid-value.details.description':
    'Hodnota této vlastnosti musí být typu <code>{{validType}}</code> podle schématu.',
  /** Only the following types are valid here according to schema: */
  'inputs.invalid-value.details.multi-type-description':
    'Podle schématu jsou zde platné pouze následující typy:',
  /** Mismatching value types typically occur when the schema has recently been changed. */
  'inputs.invalid-value.details.possible-reason':
    'Nesoulad typů hodnot obvykle nastává, když bylo schéma nedávno změněno.',
  /** Developer info */
  'inputs.invalid-value.details.title': 'Informace pro vývojáře',
  /** -- Invalid Value Input -- */
  /** Reset value */
  'inputs.invalid-value.reset-button.text': 'Resetovat hodnotu',
  /** Invalid property value */
  'inputs.invalid-value.title': 'Neplatná hodnota vlastnosti',
  /** Field groups */
  'inputs.object.field-group-tabs.aria-label': 'Skupiny polí',
  /** Read-only field description */
  'inputs.object.unknown-fields.read-only.description':
    'Toto pole je podle schématu dokumentu <strong>pouze pro čtení</strong> a nelze jej zrušit. Pokud chcete, aby bylo možné toto v Studio zrušit, ujistěte se, že jste odstranili pole <code>readOnly</code> z obklopujícího typu ve schématu.',
  /** Remove field */
  'inputs.object.unknown-fields.remove-field-button.text': 'Odstranit pole',
  /** Encountered `{{count}}` fields that are not defined in the schema. */
  'inputs.object.unknown-fields.warning.description_one':
    'Bylo nalezeno pole, které není definováno v schématu.',
  'inputs.object.unknown-fields.warning.description_other':
    'Bylo nalezeno {{count}} polí, které nejsou definovány v schématu.',
  /** Detailed description of unknown field warning */
  'inputs.object.unknown-fields.warning.details.description_one':
    'Toto pole není definováno ve schématu, což by mohlo znamenat, že byla definice pole odstraněna nebo že ji někdo přidal do svého vlastního lokálního projektu a dosud neimplementoval své změny.',
  'inputs.object.unknown-fields.warning.details.description_other':
    'Tato pole nejsou definována ve schématu dokumentu, což by mohlo znamenat, že byly definice polí odstraněny nebo že je někdo přidal do svého vlastního lokálního projektu a dosud neimplementoval své změny.',
  /** Developer info */
  'inputs.object.unknown-fields.warning.details.title': 'Informace pro vývojáře',
  /** Unknown field found */
  'inputs.object.unknown-fields.warning.title_one': 'Nalezeno neznámé pole',
  'inputs.object.unknown-fields.warning.title_other': 'Nalezena neznámá pole',
  /** Collapse the editor to save screen space  */
  'inputs.portable-text.action.collapse-editor': 'Sbalit editor',
  /** Aria label for action to edit an existing annotation */
  'inputs.portable-text.action.edit-annotation-aria-label': 'Upravit anotaci',
  /** Expand the editor to give more editing space */
  'inputs.portable-text.action.expand-editor': 'Rozbalit editor',
  /** Label label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block': 'Vložit {{typeName}}',
  /** Accessibility label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block-aria-label': 'Vložit {{typeName}} (blok)',
  /** Label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object': 'Vložit {{typeName}}',
  /** Accessibility label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object-aria-label': 'Vložit {{typeName}} (inline)',
  /** Aria label for action to remove an annotation */
  'inputs.portable-text.action.remove-annotation-aria-label': 'Odebrat anotaci',
  /** Label for activate on focus with context of click and not focused */
  'inputs.portable-text.activate-on-focus-message_click': 'Klikněte pro aktivaci',
  /** Label for activate on focus with context of click and focused */
  'inputs.portable-text.activate-on-focus-message_click-focused':
    'Klikněte nebo stiskněte mezerník pro aktivaci',
  /** Label for activate on focus with context of tap and not focused */
  'inputs.portable-text.activate-on-focus-message_tap': 'Klepněte pro aktivaci',
  /**Aria label for the annotation object */
  'inputs.portable-text.annotation-aria-label': 'Objekt anotace',
  /** Title for dialog that allows editing an annotation */
  'inputs.portable-text.annotation-editor.title': 'Upravit {{schemaType}}',
  /** Title of the default "link" annotation */
  'inputs.portable-text.annotation.link': 'Odkaz',
  /**Aria label for the block object */
  'inputs.portable-text.block.aria-label': 'Objekt bloku',
  /** Label for action to edit a block item, in the case where it is editable */
  'inputs.portable-text.block.edit': 'Upravit',
  /** Accessibility label for the button that opens the actions menu on blocks */
  'inputs.portable-text.block.open-menu-aria-label': 'Otevřít menu',
  /** Label for action to open a reference, in the case of block-level reference types */
  'inputs.portable-text.block.open-reference': 'Otevřít referenci',
  /** Label for action to remove a block item */
  'inputs.portable-text.block.remove': 'Odstranit',
  /** Label for action to view a block item, in the case where it is read-only and thus cannot be edited */
  'inputs.portable-text.block.view': 'Zobrazit',
  /** Title of the "code" decorator */
  'inputs.portable-text.decorator.code': 'Kód',
  /** Title of the "em" (emphasis) decorator */
  'inputs.portable-text.decorator.emphasis': 'Kurzíva',
  /** Title of the "strike-through" decorator */
  'inputs.portable-text.decorator.strike-through': 'Přeškrtnutí',
  /** Title of the "strong" decorator */
  'inputs.portable-text.decorator.strong': 'Tučné',
  /** Title of the "underline" decorator */
  'inputs.portable-text.decorator.underline': 'Podtržení',
  /** Placeholder text for when the editor is empty */
  'inputs.portable-text.empty-placeholder': 'Prázdné',
  /**Aria label for the block object */
  'inputs.portable-text.inline-block.aria-label': 'Vložený objekt',
  /** Label for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit': 'Upravit objekt',
  /** Aria label for icon for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit-aria-label': 'Upravit objekt',
  /** Label for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove': 'Odstranit objekt',
  /** Aria label for icon for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove-aria-label': 'Odebrat objekt',
  /** Disclaimer text shown on invalid Portable Text value, when an action is available to unblock the user, but it is not guaranteed to be safe */
  'inputs.portable-text.invalid-value.action-disclaimer':
    'POZNÁMKA: Akce výše je obvykle bezpečná, ale pokud máte pochybnosti, obraťte se na osoby odpovědné za konfiguraci vašeho studia.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.action': 'Odstraňte objekt',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.description':
    'Dítě s klíčem {{childKey}} bloku s klíčem <code>{{key}}</code> je typu <code>{{childType}}</code>, který není povolen definicí schématu.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.action': 'Odstraňte blok',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.description':
    'Blok s klíčem <code>{{key}}</code> je typu <code>{{typeName}}</code>, který není povolen definicí schématu.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.action': 'Vložte prázdný textový úsek',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.description':
    'Textový blok s klíčem <code>{{key}}</code> nemá žádné textové úseky.',
  /** Label for the button to ignore invalid values in the Portable Text editor */
  'inputs.portable-text.invalid-value.ignore-button.text': 'Ignorovat',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.action':
    'Použijte typ <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.description':
    'Blok s klíčem <code>{{key}}</code> má neplatný název typu. Podle schématu by to mělo být <code>{{expectedTypeName}}</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.action':
    'Nastavte prázdnou textovou hodnotu',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.description':
    'Úsek s klíčem {{childKey}} bloku s klíčem <code>{{key}}</code> má chybějící nebo neplatnou vlastnost <code>text</code>.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.action':
    'Použijte typ <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.description':
    'Blok s klíčem <code>{{key}}</code> postrádá název typu. Podle schématu by to mělo být <code>{{expectedTypeName}}</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.action': 'Přiřaďte náhodný klíč',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.description':
    'Dítě na indexu <code>{{index}}</code> bloku s klíčem <code>{{key}}</code> postrádá vlastnost <code>_key</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.action': 'Odstraňte objekt',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.description':
    'Dítě s klíčem {{childKey}} bloku s klíčem <code>{{key}}</code> postrádá vlastnost <code>_type</code>.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.action': 'Přiřaďte náhodný klíč',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.description':
    'Blok na indexu <code>{{index}}</code> postrádá požadovanou vlastnost <code>_key</code>.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.action': 'Odstraňte blok',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.description':
    'Textový blok s klíčem <code>{{key}}</code> má neplatnou nebo chybějící vlastnost `children`.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.action': 'Přidejte vlastnost',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.description':
    'Textový blok s klíčem <code>{{key}}</code> má neplatnou nebo chybějící vlastnost `markDefs`.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.action': 'Odstraňte blok',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.description':
    'Blok s klíčem <code>{{key}}</code> postrádá název typu.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.action': 'Odstranit položku',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.description':
    'Dítě na indexu <code>{{index}}</code> bloku s klíčem <code>{{key}}</code> není objekt.',
  /** Action presented when the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.action': 'Zrušit hodnotu',
  /** Text explaining that the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.description':
    'Hodnota musí být pole bloků Portable Text nebo nedefinovaná.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.action': 'Odstranit položku',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.description':
    'Položka na <code>{{index}}</code> není objekt.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.action': 'Odstranit nepovolené značky',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.description':
    'Textový blok s klíčem <code>{{key}}</code> obsahuje značky <code>({{orphanedMarks, list}})</code>, které nejsou povoleny schématem.',
  /** Title for the alert indicating that the Portable Text field has an invalid value */
  'inputs.portable-text.invalid-value.title': 'Neplatná hodnota Portable Text',
  /** Title of "bulleted" list type */
  'inputs.portable-text.list-type.bullet': 'Odrážkový seznam',
  /** Title of numbered list type */
  'inputs.portable-text.list-type.number': 'Číslovaný seznam',
  /** Title of the "h1" block style */
  'inputs.portable-text.style.h1': 'Nadpis 1',
  /** Title of the "h2" block style */
  'inputs.portable-text.style.h2': 'Nadpis 2',
  /** Title of the "h3" block style */
  'inputs.portable-text.style.h3': 'Nadpis 3',
  /** Title of the "h4" block style */
  'inputs.portable-text.style.h4': 'Nadpis 4',
  /** Title of the "h5" block style */
  'inputs.portable-text.style.h5': 'Nadpis 5',
  /** Title of the "h6" block style */
  'inputs.portable-text.style.h6': 'Nadpis 6',
  /** Title shown when multiple blocks of varying styles is selected */
  'inputs.portable-text.style.multiple': 'Více možností',
  /** Title of fallback when no style is given for a block */
  'inputs.portable-text.style.none': 'Bez stylu',
  /** Title of the "normal" block style */
  'inputs.portable-text.style.normal': 'Normální',
  /** Title of the "quote" block style */
  'inputs.portable-text.style.quote': 'Citace',
  /** Label for action to clear the current value of the reference field */
  'inputs.reference.action.clear': 'Vymazat',
  /** Label for action to create a new document from the reference input */
  'inputs.reference.action.create-new-document': 'Vytvořit nový',
  /** Label for action to create a new document from the reference input, when there are multiple templates or document types to choose from */
  'inputs.reference.action.create-new-document-select': 'Vytvořit nový…',
  /** Label for action to duplicate the current item to a new item (used within arrays) */
  'inputs.reference.action.duplicate': 'Duplikovat',
  /** Label for action that opens the referenced document in a new tab */
  'inputs.reference.action.open-in-new-tab': 'Otevřít v novém tabu',
  /** Label for action to remove the reference from an array */
  'inputs.reference.action.remove': 'Odstranit',
  /** Label for action to replace the current value of the field */
  'inputs.reference.action.replace': 'Nahradit',
  /** Label for action to cancel a previously initiated replace action  */
  'inputs.reference.action.replace-cancel': 'Zrušit nahrazení',
  /** The cross-dataset reference field currently has a reference, but the feature has been disabled since it was created. This explains what can/cannot be done in its current state. */
  'inputs.reference.cross-dataset.feature-disabled-actions':
    'Stále můžete vymazat stávající odkaz v tomto poli, ale dokud je funkce zakázána, nemůže být změněn na jiný dokument.',
  /** A cross-dataset reference field exists but the feature has been disabled. A <DocumentationLink> component is available. */
  'inputs.reference.cross-dataset.feature-disabled-description':
    'Tato funkce byla zakázána. Přečtěte si, jak ji povolit, v <DocumentationLink>dokumentaci</DocumentationLink>.',
  /** Title for a warning telling the user that the current project does not have the "cross dataset references" feature */
  'inputs.reference.cross-dataset.feature-unavailable-title':
    'Nedostupná funkce: Odkaz mezi datasetem',
  /** The cross-dataset reference points to a document with an invalid type  */
  'inputs.reference.cross-dataset.invalid-type':
    'Odkazovaný dokument je neplatného typu ({{typeName}}) <JsonValue/>',
  /** The referenced document will open in a new tab (due to external studio) */
  'inputs.reference.document-opens-in-new-tab': 'Tento dokument se otevře v novém tabu',
  /** Error title for when the document is unavailable (for any possible reason) */
  'inputs.reference.error.document-unavailable-title': 'Dokument není dostupný',
  /** Error title for when the referenced document failed to be loaded */
  'inputs.reference.error.failed-to-load-document-title':
    'Nepodařilo se načíst odkazovaný dokument',
  /** Error title for when the reference search returned a document that is not an allowed type for the field */
  'inputs.reference.error.invalid-search-result-type-title':
    'Vyhledávání vrátilo typ, který není platný pro tento odkaz: "{{returnedType}}"',
  /** Error description for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-description':
    'Odkazovaný dokument (<code>{{documentId}}</code>) je typu <code>{{actualType}}</code>. Podle schématu mohou být odkazované dokumenty pouze typu <AllowedTypes />.',
  /** Error title for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-title': 'Dokument neplatného typu',
  /** Error description for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-description':
    'Odkazovaný dokument nebylo možné přistupovat kvůli nedostatečným oprávněním',
  /** Error title for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-title': 'Nedostatečná oprávnění',
  /** Error description for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-description':
    'Odkazovaný dokument neexistuje (ID: <code>{{documentId}}</code>). Můžete buď odstranit odkaz, nebo jej nahradit jiným dokumentem.',
  /** Error title for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-title': 'Nenalezeno',
  /** Label for button that clears the reference when it points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document.clear-button-label': 'Vymazat',
  /** Error title for when the search for a reference failed. Note that the message sent by the backend may not be localized. */
  'inputs.reference.error.search-failed-title': 'Vyhledávání odkazu selhalo',
  /** Alternative text for the image shown in cross-dataset reference input */
  'inputs.reference.image-preview-alt-text': 'Náhled obrázku odkazovaného dokumentu',
  /** Description for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-description':
    '<strong>{{referencedDocument}}</strong> je publikován a tento odkaz by nyní měl být finalizován.',
  /** Title for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-title': 'Finalizovat odkaz',
  /** Description for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-description':
    '<strong>{{referencedDocument}}</strong> je publikován a tento odkaz by nyní měl být převeden na silný odkaz.',
  /** Title for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-title': 'Převést na silný odkaz',
  /** Label for button that triggers the action that strengthen a reference */
  'inputs.reference.incomplete-reference.strengthen-button-label': 'Převést na silnou referenci',
  /** Label for button that triggers a retry attempt for reference metadata  */
  'inputs.reference.metadata-error.retry-button-label': 'Zkusit znovu',
  /** Title for alert shown when reference metadata fails to be loaded */
  'inputs.reference.metadata-error.title': 'Nelze načíst metadata reference',
  /** Message shown when no documents were found that matched the given search string */
  'inputs.reference.no-results-for-query': 'Žádné výsledky pro <strong>“{{searchTerm}}”</strong>',
  /** Text for tooltip showing when a document was edited, using relative time (eg "how long ago was it edited?") */
  'inputs.reference.preview.edited-at-time': 'Editováno <RelativeTime/>',
  /** Accessibility label for icon indicating that document does _not_ have any unpublished changes */
  'inputs.reference.preview.has-no-unpublished-changes-aria-label': 'Žádné nezveřejněné úpravy',
  /** Accessibility label for icon indicating that document has unpublished changes */
  'inputs.reference.preview.has-unpublished-changes-aria-label': 'Editováno',
  /** Accessibility label for icon indicating that document does _not_ have a published version */
  'inputs.reference.preview.is-not-published-aria-label': 'Nezveřejněno',
  /** Accessibility label for icon indicating that document has a published version */
  'inputs.reference.preview.is-published-aria-label': 'Zveřejněno',
  /** Text for tooltip indicating that a document has no unpublished edits */
  'inputs.reference.preview.no-unpublished-edits': 'Žádné nezveřejněné úpravy',
  /** Text for tooltip indicating that a document has not yet been published */
  'inputs.reference.preview.not-published': 'Nezveřejněno',
  /** Text for tooltip showing when a document was published, using relative time (eg "how long ago was it published?") */
  'inputs.reference.preview.published-at-time': 'Zveřejněno <RelativeTime/>',
  /** The referenced document no longer exist and might have been deleted (for weak references) */
  'inputs.reference.referenced-document-does-not-exist':
    'Referencovaný dokument již neexistuje a mohl být smazán (ID dokumentu: <code>{{documentId}}</code>).',
  /** The referenced document could not be displayed to the user because of insufficient permissions */
  'inputs.reference.referenced-document-insufficient-permissions':
    'K referencovanému dokumentu nelze přistoupit kvůli nedostatečným oprávněním',
  /** Label for when the reference input is resolving the initial value for an item */
  'inputs.reference.resolving-initial-value': 'Řešení počáteční hodnoty…',
  /** Placeholder shown in a reference input with no current value */
  'inputs.reference.search-placeholder': 'Začněte psát pro vyhledávání',
  /** Explanation of the consequences of leaving the reference as strong instead of weak */
  'inputs.reference.strength-mismatch.is-strong-consquences':
    'Nebude možné smazat referencovaný dokument bez prvního odstranění této reference nebo jejího převedení na slabou.',
  /** Description for alert shown when a reference is supposed to be weak, but the actual value is strong */
  'inputs.reference.strength-mismatch.is-strong-description':
    'Tato reference je <em>silná</em>, ale podle aktuálního schématu by měla být <em>slabá</em>.',
  /** Explanation of the consequences of leaving the reference as weak instead of strong */
  'inputs.reference.strength-mismatch.is-weak-consquences':
    'To umožňuje smazat referencovaný dokument bez prvního smazání této reference, což zanechá toto pole odkazující na neexistující dokument.',
  /** Description for alert shown when a reference is supposed to be strong, but the actual value is weak */
  'inputs.reference.strength-mismatch.is-weak-description':
    'Tato reference je <em>slabá</em>, ale podle aktuálního schématu by měla být <em>silná</em>.',
  /** Label for button that triggers the action that strengthens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.strengthen-button-label': 'Převést na silnou referenci',
  /** Title for alert shown when a reference is supposed to be weak/strong, but the actual value is the opposite of what it is supposed to be */
  'inputs.reference.strength-mismatch.title': 'Nesoulad síly reference',
  /** Label for button that triggers the action that weakens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.weaken-button-label': 'Převést na slabou referenci',
  /** Action message for generating the slug */
  'inputs.slug.action.generate': 'Vygenerovat',
  /** Loading message for when the input is actively generating a slug */
  'inputs.slug.action.generating': 'Generování…',
  /** Error message for when the source to generate a slug from is missing */
  'inputs.slug.error.missing-source':
    'Zdroj chybí. Zkontrolujte zdroj u typu {{schemaType}} ve schématu',
  /** Placeholder for an empty tag input */
  'inputs.tags.placeholder': 'Zadejte štítek a stiskněte ENTER…',
  /** Placeholder for an empty tag input on touch devices */
  'inputs.tags.placeholder_touch': 'Zadejte štítek…',
  /** Convert to `{{targetType}}` */
  'inputs.untyped-value.convert-button.text': 'Převést na <code>{{targetType}}</code>',
  /** Encountered an object value without a <code>_type</code> property. */
  'inputs.untyped-value.description':
    'Narazil jsem na objektovou hodnotu bez vlastnosti <code>_type</code>.',
  /** Either remove the <code>name</code> property of the object declaration, or set <code>_type</code> property on items. */
  'inputs.untyped-value.details.description':
    'Buď odstraňte vlastnost <code>name</code> z deklarace objektu, nebo nastavte vlastnost <code>_type</code> na položkách.',
  /** Current value (<code>object</code>): */
  'inputs.untyped-value.details.json-dump-prefix': 'Aktuální hodnota (<code>object</code>):',
  /** The following types are valid here according to schema: */
  'inputs.untyped-value.details.multi-type-description':
    'Podle schématu jsou zde platné následující typy:',
  /** Developer info */
  'inputs.untyped-value.details.title': 'Informace pro vývojáře',
  /** Property value missing <code>_type</code> */
  'inputs.untyped-value.title': 'Chybí vlastnost hodnoty <code>_type</code>',
  /** Unset value */
  'inputs.untyped-value.unset-item-button.text': 'Zrušit hodnotu',

  /** The fallback explanation if no context is provided */
  'insufficient-permissions-message.not-authorized-explanation':
    'Nemáte oprávnění přistupovat k této funkci.',
  /** The explanation when unable to create any document at all */
  'insufficient-permissions-message.not-authorized-explanation_create-any-document':
    'Nemáte oprávnění vytvořit dokument.',
  /** The explanation when unable to create a particular document */
  'insufficient-permissions-message.not-authorized-explanation_create-document':
    'Nemáte oprávnění vytvořit tento dokument.',
  /** The explanation when unable to create a particular type of document */
  'insufficient-permissions-message.not-authorized-explanation_create-document-type':
    'Nemáte oprávnění vytvořit tento typ dokumentu.',
  /** The explanation when unable to create a new reference in a document */
  'insufficient-permissions-message.not-authorized-explanation_create-new-reference':
    'Nemáte oprávnění vytvořit novou referenci.',
  /** The explanation when unable to delete a particular document */
  'insufficient-permissions-message.not-authorized-explanation_delete-document':
    'Nemáte oprávnění smazat tento dokument.',
  /** The explanation when unable to discard changes in a particular document */
  'insufficient-permissions-message.not-authorized-explanation_discard-changes':
    'Nemáte oprávnění zahodit změny v tomto dokumentu.',
  /** The explanation when unable to duplicate a particular document */
  'insufficient-permissions-message.not-authorized-explanation_duplicate-document':
    'Nemáte oprávnění duplikovat tento dokument.',
  /** The explanation when unable to publish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_publish-document':
    'Nemáte oprávnění publikovat tento dokument.',
  /** The explanation when unable to unpublish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_unpublish-document':
    'Nemáte oprávnění zrušit publikaci tohoto dokumentu.',
  /** Appears after the not-authorized message. Lists the current roles. */
  'insufficient-permissions-message.roles': 'Vaše role: <Roles/>',
  /** The title for the insufficient permissions message component */
  'insufficient-permissions-message.title': 'Nedostatečná oprávnění',

  /** Unexpected error: `{{error}}` */
  'member-field-error.unexpected-error': 'Neočekávaná chyba: {{error}}',

  /** Button label for "Create new document" button */
  'new-document.button': 'Vytvořit',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are templates/types available for creation
   */
  'new-document.create-new-document-label': 'Nový dokument…',
  /** Placeholder for the "filter" input within the new document menu */
  'new-document.filter-placeholder': 'Filtr',
  /** Loading indicator text within the new document menu */
  'new-document.loading': 'Načítání…',
  /** Accessibility label for the list displaying options in the new document menu */
  'new-document.new-document-aria-label': 'Nový dokument',
  /** Message for when there are no document type options in the new document menu */
  'new-document.no-document-types-found': 'Nenalezeny žádné typy dokumentů',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are no templates/types to create from
   */
  'new-document.no-document-types-label': 'Žádné typy dokumentů',
  /** Message for when no results are found for a specific search query in the new document menu */
  'new-document.no-results': 'Pro <strong>{{searchQuery}}</strong> nebyly nalezeny žádné výsledky',
  /** Aria label for the button that opens the "Create new document" popover/dialog */
  'new-document.open-dialog-aria-label': 'Vytvořit nový dokument',
  /** Title for "Create new document" dialog */
  'new-document.title': 'Vytvořit nový dokument',

  /** Label for action to manage members of the current studio project */
  'presence.action.manage-members': 'Spravovat členy',
  /** Accessibility label for presence menu button */
  'presence.aria-label': 'Kdo je zde',
  /** Message description for when no one else is currently present */
  'presence.no-one-else-description':
    'Pozvěte lidi do projektu, abyste viděli jejich online status.',
  /** Message title for when no one else is currently present */
  'presence.no-one-else-title': 'Nikdo další zde není',
  /** Message for when a user is not in a document (displayed in the global presence menu) */
  'presence.not-in-a-document': 'Není v dokumentu',
  /** Tooltip content text for presence menu button */
  'presence.tooltip-content': undefined, // 'Who is here'

  /** Fallback title shown when a preview does not provide a title */
  'preview.default.title-fallback': 'Bez názvu',
  /** Fallback preview value for types that have "no value" (eg null, undefined) */
  'preview.fallback.no-value': '(žádná hodnota)',
  /** Alternative text for image being shown while image is being uploaded, in previews */
  'preview.image.file-is-being-uploaded.alt-text': 'Obrázek, který se právě nahrává',

  /* Relative time, just now */
  'relative-time.just-now': 'právě teď',

  /** Accessibility label to open search action when the search would go fullscreen (eg on narrower screens) */
  'search.action-open-aria-label': 'Otevřít vyhledávání',
  /** Action label for adding a search filter */
  'search.action.add-filter': 'Přidat filtr',
  /** Action label for clearing search filters */
  'search.action.clear-filters': 'Vymazat filtry',
  /** Label for action to clear recent searches */
  'search.action.clear-recent-searches': 'Vymazat nedávná vyhledávání',
  /** Accessibility label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-aria-label': 'Vymazat zaškrtnuté filtry',
  /** Label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-label': 'Vymazat',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to close the search */
  'search.action.close-search-aria-label': 'Zavřít vyhledávání',
  /** Accessibility label for filtering by document type */
  'search.action.filter-by-document-type-aria-label': 'Filtrovat podle typu dokumentu',
  /** Accessibility action label for removing an already applied search filter */
  'search.action.remove-filter-aria-label': 'Odstranit filtr',
  /**
   * Text displayed when either no document type(s) have been selected, or we need a fallback,
   * eg "Search for all types".
   */
  'search.action.search-all-types': 'Vyhledat všechny dokumenty',
  /**
   * Text displayed when we are able to determine one or more document types that will be used for
   * searching, and can fit within the space assigned by the design.
   */
  'search.action.search-specific-types': 'Hledat {{types, list}}',
  /** Dialog title for action to select an asset of unknown type */
  'search.action.select-asset': 'Vybrat prostředek',
  /** Dialog title for action to select a file asset */
  'search.action.select-asset_file': 'Vybrat soubor',
  /** Dialog title for action to select an image asset */
  'search.action.select-asset_image': 'Vybrat obrázek',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-aria-label_hide': 'Skrýt filtry',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-aria-label_show': 'Zobrazit filtry',
  /** Label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-label_hide': 'Skrýt filtry',
  /** Label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-label_show': 'Zobrazit filtry',
  /** Tooltip text for the global search button */
  'search.button.tooltip': 'Hledat',
  /**
   * A list of provided types (use `list` formatter preferably).
   */
  'search.document-type-list': '{{types, list}}',
  /**
   * In the context of a list of document types - no filtering selection has been done,
   * thus the default is "all types".
   */
  'search.document-type-list-all-types': 'Všechny typy',
  /** Accessibility label for list displaying the available document types */
  'search.document-types-aria-label': 'Typy dokumentů',
  /** Label for when no document types matching the filter are found */
  'search.document-types-no-matches-found': 'Žádné shody pro {{filter}}',
  /** Description for error when a filter cannot be displayed, describes that you should check the schema */
  'search.error.display-filter-description':
    'To může naznačovat neplatné možnosti definované ve vašem schématu.',
  /** Title for error when a filter cannot be displayed (mainly a developer-oriented error) */
  'search.error.display-filter-title': 'Při zobrazování tohoto filtru došlo k chybě.',
  /** Description for error when no valid asset source is found, describes that you should check the the current studio config */
  'search.error.no-valid-asset-source-check-config-description':
    'Ujistěte se, že je povoleno ve vašem konfiguračním souboru studia.',
  /** Description for error when no valid asset source is found, describes that only the default asset is supported */
  'search.error.no-valid-asset-source-only-default-description':
    'V současné době je podporován pouze výchozí zdroj prostředků.',
  /** Title for error when no valid asset sources found */
  'search.error.no-valid-asset-source-title': 'Nenalezeny žádné platné zdroje prostředků.',
  /** Helpful description for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-help-description':
    'Zkuste to prosím znovu nebo zkontrolujte své připojení',
  /** Title label for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-title': 'Při hledání se něco pokazilo',
  /**
   * Label for "All fields", a label that appears above the list of available fields when filtering.
   * If one or more document type has been chosen as filter, this label is replaced with a group of
   * fields per selected document type
   */
  'search.filter-all-fields-header': 'Všechna pole',
  /** Label for the action of changing from one file to a different file in asset search filter */
  'search.filter-asset-change_file': 'Změnit soubor',
  /** Label for the action of changing from one image to a different image in asset search filter */
  'search.filter-asset-change_image': 'Změnit obrázek',
  /** Label for the action of clearing the currently selected asset in an image/file filter */
  'search.filter-asset-clear': 'Vymazat',
  /** Label for the action of selecting a file in asset search filter */
  'search.filter-asset-select_file': 'Vybrat soubor',
  /** Label for the action of selecting an image in asset search filter */
  'search.filter-asset-select_image': 'Vybrat obrázek',
  /** Label for boolean filter - false */
  'search.filter-boolean-false': 'Nepravda',
  /** Label for boolean filter - true */
  'search.filter-boolean-true': 'Pravda',
  /** Accessibility label for list that lets you filter fields by title, when adding a new filter in search */
  'search.filter-by-title-aria-label': 'Filtrovat podle názvu',
  /** Accessibility label for date filter input */
  'search.filter-date-aria-label': 'Datum',
  /** Accessibility label for selecting end date on the date range search filter */
  'search.filter-date-range-end-date-aria-label': 'Datum konce',
  /** Accessibility label for selecting start date on the date range search filter */
  'search.filter-date-range-start-date-aria-label': 'Datum začátku',
  /**
   * Label for "Days"/"Months"/"Years" when selecting it as unit in "X days ago" search filter.
   * Capitalized, as it would be listed in a dropdown.
   */
  'search.filter-date-unit_days': 'Dny',
  'search.filter-date-unit_months': 'Měsíce',
  'search.filter-date-unit_years': 'Roky',
  /** Accessibility label for selecting the unit (day/month/year) when adding "X days ago" search filter */
  'search.filter-date-unit-aria-label': 'Vyberte jednotku',
  /** Accessibility label for the input value (days/months/years) when adding "X days ago" search filter */
  'search.filter-date-value-aria-label': 'Hodnota jednotky',
  /** Label for "field description" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-description': 'Popis pole',
  /** Label for "field name" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-name': 'Název pole',
  /** Label for "Used in document types", a list of the document types a field appears in. Shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-used-in-document-types': 'Použito v typech dokumentů',
  /** Label for when no fields/filters are found for the given term */
  'search.filter-no-matches-found': 'Pro {{filter}} nebyly nalezeny žádné shody',
  /** Placeholder value for maximum numeric value filter */
  'search.filter-number-max-value-placeholder': 'Maximální hodnota',
  /** Placeholder value for minimum numeric value filter */
  'search.filter-number-min-value-placeholder': 'Minimální hodnota',
  /** Placeholder value for the number filter */
  'search.filter-number-value-placeholder': 'Hodnota',
  /** Placeholder for the "Filter" input, when narrowing possible fields/filters */
  'search.filter-placeholder': 'Filtr',
  /** Label for the action of clearing the currently selected document in a reference filter */
  'search.filter-reference-clear': 'Vymazat',
  /**
   * Label for "shared fields", a label that appears above a list of fields that all filtered types
   * have in common, when adding a new filter. For instance, if "book" and "employee" both have a
   * "title" field, this field would be listed under "shared fields".
   * */
  'search.filter-shared-fields-header': 'Sdílená pole',
  /** Placeholder value for the string filter */
  'search.filter-string-value-placeholder': 'Hodnota',
  /** Label/placeholder prompting user to select one of the predefined, allowed values for a string field */
  'search.filter-string-value-select-predefined-value': 'Vyberte…',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (singular) */
  'search.filters-aria-label_one': 'Filtr',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (plural) */
  'search.filters-aria-label_other': 'Filtry',
  /** Label for instructions on how to use the search - displayed when no recent searches are available */
  'search.instructions': 'Použijte <ControlsIcon/> pro upřesnění vašeho hledání',
  /** Helpful description for when no search results are found */
  'search.no-results-help-description': 'Zkuste jiné klíčové slovo nebo upravte vaše filtry',
  /** Title label for when no search results are found */
  'search.no-results-title': 'Nebyly nalezeny žádné výsledky',
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
    '<Field/> <Operator>má</Operator> <Value>{{count}} položku</Value>',
  'search.operator.array-count-equal.description_other':
    '<Field/> <Operator>má</Operator> <Value>{{count}} položek</Value>',
  'search.operator.array-count-equal.name': 'množství je',
  /* Array should have a count greater than given filter value */
  'search.operator.array-count-gt.description_one':
    '<Field/> <Operator>má ></Operator> <Value>{{count}} položku</Value>',
  'search.operator.array-count-gt.description_other':
    '<Field/> <Operator>má ></Operator> <Value>{{count}} položek</Value>',
  'search.operator.array-count-gt.name': 'množství větší než',
  /* Array should have a count greater than or equal to the given filter value */
  'search.operator.array-count-gte.description_one':
    '<Field/> <Operator>má ≥</Operator> <Value>{{count}} položku</Value>',
  'search.operator.array-count-gte.description_other':
    '<Field/> <Operator>má ≥</Operator> <Value>{{count}} položek</Value>',
  'search.operator.array-count-gte.name': 'množství větší než nebo rovno',
  /* Array should have a count less than given filter value */
  'search.operator.array-count-lt.description_one':
    '<Field/> <Operator>má <</Operator> <Value>{{count}} položku</Value>',
  'search.operator.array-count-lt.description_other':
    '<Field/> <Operator>má <</Operator> <Value>{{count}} položek</Value>',
  'search.operator.array-count-lt.name': 'množství menší než',
  /* Array should have a count less than or equal to the given filter value */
  'search.operator.array-count-lte.description_one':
    '<Field/> <Operator>má ≤</Operator> <Value>{{count}} položku</Value>',
  'search.operator.array-count-lte.description_other':
    '<Field/> <Operator>má ≤</Operator> <Value>{{count}} položek</Value>',
  'search.operator.array-count-lte.name': 'množství menší než nebo rovno',
  /* Array should have a count that is not equal to the given filter value */
  'search.operator.array-count-not-equal.description_one':
    '<Field/> <Operator>nemá</Operator> <Value>{{count}} položku</Value>',
  'search.operator.array-count-not-equal.description_other':
    '<Field/> <Operator>nemá</Operator> <Value>{{count}} položek</Value>',
  'search.operator.array-count-not-equal.name': 'množství není',
  /**
   * Array should have a count within the range of given filter values.
   * Gets passed `{{from}}` and `{{to}}` values.
   **/
  'search.operator.array-count-range.description':
    '<Field/> <Operator>má mezi</Operator> <Value>{{from}} → {{to}} položkami</Value>',
  'search.operator.array-count-range.name': 'množství je mezi',
  /* Array should include the given value */
  'search.operator.array-list-includes.description':
    '<Field/> <Operator>obsahuje</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-includes.name': 'obsahuje',
  /* Array should not include the given value */
  'search.operator.array-list-not-includes.description':
    '<Field/> <Operator>neobsahuje</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-not-includes.name': 'neobsahuje',
  /* Array should include the given reference */
  'search.operator.array-reference-includes.description':
    '<Field/> <Operator>obsahuje</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-includes.name': 'obsahuje',
  /* Array should not include the given reference */
  'search.operator.array-reference-not-includes.description':
    '<Field/> <Operator>neobsahuje</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-not-includes.name': 'neobsahuje',
  /* Asset (file) should be the selected asset */
  'search.operator.asset-file-equal.description':
    '<Field/> <Operator>je</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-equal.name': 'je',
  /* Asset (file) should not be the selected asset */
  'search.operator.asset-file-not-equal.description':
    '<Field/> <Operator>není</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-not-equal.name': 'není',
  /* Asset (image) should be the selected asset */
  'search.operator.asset-image-equal.description':
    '<Field/> <Operator>je</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-equal.name': 'je',
  /* Asset (image) should not be the selected asset */
  'search.operator.asset-image-not-equal.description':
    '<Field/> <Operator>není</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-not-equal.name': 'není',
  /**
   * Boolean value should be the given filter value (true/false).
   * Context passed is `true` and `false`, allowing for more specific translations:
   * - `search.operator.boolean-equal.description_true`
   * - `search.operator.boolean-equal.description_false`
   */
  'search.operator.boolean-equal.description':
    '<Field/> <Operator>je</Operator> <Value>{{value}}</Value>',
  'search.operator.boolean-equal.name': 'je',
  /* Date should be after (later than) given filter value */
  'search.operator.date-after.description':
    '<Field/> <Operator>je po</Operator> <Value>{{value}}</Value>',
  'search.operator.date-after.name': 'po',
  /* Date should be before (earlier than) given filter value */
  'search.operator.date-before.description':
    '<Field/> <Operator>je před</Operator> <Value>{{value}}</Value>',
  'search.operator.date-before.name': 'před',
  /* Date should be the given filter value */
  'search.operator.date-equal.description':
    '<Field/> <Operator>je</Operator> <Value>{{value}}</Value>',
  'search.operator.date-equal.name': 'je',
  /* Date should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-last.description':
    '<Field/> <Operator>je v posledních</Operator> <Value>{{value}}</Value>',
  'search.operator.date-last.name': 'poslední',
  /* Date should not be the given filter value */
  'search.operator.date-not-equal.description':
    '<Field/> <Operator>není</Operator> <Value>{{value}}</Value>',
  'search.operator.date-not-equal.name': 'není',
  /* Date should be within the range of given filter values */
  'search.operator.date-range.description': '<Field/> <Operator>je mezi</Operator> <Value/>',
  'search.operator.date-range.name': 'je mezi',
  /* Date and time should be after (later than) given filter value */
  'search.operator.date-time-after.description':
    '<Field/> <Operator>je po</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-after.name': 'po',
  /* Date and time should be before (earlier than) given filter value */
  'search.operator.date-time-before.description':
    '<Field/> <Operator>je před</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-before.name': 'před',
  /* Date and time should be the given filter value */
  'search.operator.date-time-equal.description':
    '<Field/> <Operator>je</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-equal.name': 'je',
  /* Date and time should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-time-last.description':
    '<Field/> <Operator>je v posledních</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-last.name': 'poslední',
  /* Date and time should not be the given filter value */
  'search.operator.date-time-not-equal.description':
    '<Field/> <Operator>není</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-not-equal.name': 'není',
  /* Date and time should be within the range of given filter values */
  'search.operator.date-time-range.description': '<Field/> <Operator>je mezi</Operator> <Value/>',
  'search.operator.date-time-range.name': 'je mezi',
  /* Value should be defined */
  'search.operator.defined.description':
    '<Field/> <Operator>je</Operator> <Value>neprázdný</Value>',
  'search.operator.defined.name': 'neprázdný',
  /* Value should not be defined */
  'search.operator.not-defined.description':
    '<Field/> <Operator>je</Operator> <Value>prázdný</Value>',
  'search.operator.not-defined.name': 'prázdný',
  /* Number should be the given filter value */
  'search.operator.number-equal.description':
    '<Field/> <Operator>je</Operator> <Value>{{value}}</Value>',
  'search.operator.number-equal.name': 'je',
  /* Number should be greater than given filter value */
  'search.operator.number-gt.description':
    '<Field/> <Operator>></Operator> <Value>{{value}}</Value>',
  'search.operator.number-gt.name': 'větší než',
  /* Number should be greater than or the given filter value */
  'search.operator.number-gte.description':
    '<Field/> <Operator>≥</Operator> <Value>{{value}}</Value>',
  'search.operator.number-gte.name': 'větší nebo rovno',
  /* Number should be less than given filter value */
  'search.operator.number-lt.description':
    '<Field/> <Operator><</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lt.name': 'menší než',
  /* Number should be less than or the given filter value */
  'search.operator.number-lte.description':
    '<Field/> <Operator>≤</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lte.name': 'menší nebo rovno',
  /* Number should not be the given filter value */
  'search.operator.number-not-equal.description':
    '<Field/> <Operator>není</Operator> <Value>{{value}}</Value>',
  'search.operator.number-not-equal.name': 'není',
  /* Number should be within the range of given filter values */
  'search.operator.number-range.description':
    '<Field/> <Operator>je mezi</Operator> <Value>{{from}} → {{to}}</Value>',
  'search.operator.number-range.name': 'je mezi',
  /* Portable Text should contain the given filter value */
  'search.operator.portable-text-contains.description':
    '<Field/> <Operator>obsahuje</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-contains.name': 'obsahuje',
  /* Portable Text should be the given filter value */
  'search.operator.portable-text-equal.description':
    '<Field/> <Operator>je</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-equal.name': 'je',
  /* Portable Text should not contain the given filter value */
  'search.operator.portable-text-not-contains.description':
    '<Field/> <Operator>neobsahuje</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-contains.name': 'neobsahuje',
  /* Portable Text should not be the given filter value */
  'search.operator.portable-text-not-equal.description':
    '<Field/> <Operator>není</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-equal.name': 'není',
  /* References the given asset (file) */
  'search.operator.reference-asset-file.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-file.name': 'soubor',
  /* References the given asset (image) */
  'search.operator.reference-asset-image.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-image.name': 'obrázek',
  /* References the given document */
  'search.operator.reference-document.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-document.name': 'dokument',
  /* Reference should be the given document */
  'search.operator.reference-equal.description':
    '<Field/> <Operator>je</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-equal.name': 'je',
  /* Reference should not be the given document */
  'search.operator.reference-not-equal.description':
    '<Field/> <Operator>není</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-not-equal.name': 'není',
  /* Slug contains the given value */
  'search.operator.slug-contains.description':
    '<Field/> <Operator>obsahuje</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-contains.name': 'obsahuje',
  /* Slug equals the given filter value */
  'search.operator.slug-equal.description':
    '<Field/> <Operator>je</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-equal.name': 'je',
  /* Slug does not contain the given value */
  'search.operator.slug-not-contains.description':
    '<Field/> <Operator>neobsahuje</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-contains.name': 'neobsahuje',
  /* Slug does not equal the given filter value */
  'search.operator.slug-not-equal.description':
    '<Field/> <Operator>není</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-equal.name': 'není',
  /* String contains the given filter value */
  'search.operator.string-contains.description':
    '<Field/> <Operator>obsahuje</Operator> <Value>{{value}}</Value>',
  'search.operator.string-contains.name': 'obsahuje',
  /* String equals the given filter value */
  'search.operator.string-equal.description':
    '<Field/> <Operator>je</Operator> <Value>{{value}}</Value>',
  'search.operator.string-equal.name': 'je',
  /* String equals one of the predefined allowed values */
  'search.operator.string-list-equal.description':
    '<Field/> <Operator>je</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-equal.name': 'je',
  /* String does not equal one of the predefined allowed values */
  'search.operator.string-list-not-equal.description':
    '<Field/> <Operator>není</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-not-equal.name': 'není',
  /* String does not contain the given filter value */
  'search.operator.string-not-contains.description':
    '<Field/> <Operator>neobsahuje</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-contains.name': 'neobsahuje',
  /* String does not equal the given filter value */
  'search.operator.string-not-equal.description':
    '<Field/> <Operator>není</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-equal.name': 'není',
  /** Label for the "Best match" search ordering type */
  'search.ordering.best-match-label': 'Nejlepší shoda',
  /** Label for the "Created: Oldest first" search ordering type */
  'search.ordering.created-ascending-label': 'Vytvořeno: Nejstarší první',
  /** Label for the "Created: Newest first" search ordering type */
  'search.ordering.created-descending-label': 'Vytvořeno: Nejnovější první',
  /** Label for the "Updated: Oldest first" search ordering type */
  'search.ordering.updated-ascending-label': 'Aktualizováno: Nejstarší první',
  /** Label for the "Updated: Newest first" search ordering type */
  'search.ordering.updated-descending-label': 'Aktualizováno: Nejnovější první',
  /** Placeholder text for the global search input field */
  'search.placeholder': 'Hledat',
  /** Accessibility label for the recent searches section, shown when no valid search terms has been given */
  'search.recent-searches-aria-label': 'Nedávné vyhledávání',
  /** Label/heading shown for the recent searches section */
  'search.recent-searches-label': 'Nedávné vyhledávání',
  /** Accessibility label for the search results section, shown when the user has typed valid terms */
  'search.search-results-aria-label': 'Výsledky vyhledávání',

  /** Accessibility label for the navbar status button */
  'status-button.aria-label': undefined, // 'Configuration status'

  /** Description for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-description':
    'Transakce historie dokumentu nebyly ovlivněny.',
  /** Title for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-title': 'Při načítání změn dokumentu došlo k chybě.',
  /** Error description for when the document doesn't have history */
  'timeline.error.no-document-history-description':
    'Po změně obsahu dokumentu se zde objeví verze dokumentu.',
  /** Error title for when the document doesn't have history */
  'timeline.error.no-document-history-title': 'Žádná historie dokumentu',
  /** Error prompt when revision cannot be loaded */
  'timeline.error.unable-to-load-revision': 'Nelze načíst revizi',
  /** Label for when the timeline item is the latest in the history */
  'timeline.latest': 'Nejnovější',
  /** Label for latest version for timeline menu dropdown */
  'timeline.latest-version': 'Nejnovější verze',
  /** The aria-label for the list of revisions in the timeline */
  'timeline.list.aria-label': 'Revize dokumentu',
  /** Label for loading history */
  'timeline.loading-history': 'Načítání historie…',
  /** Label shown in review changes timeline when a document has been created */
  'timeline.operation.created': 'Vytvořeno',
  /** Label shown in review changes timeline when a document has been created, with a timestamp */
  'timeline.operation.created_timestamp': 'Vytvořeno: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was initially created */
  'timeline.operation.created-initial': 'Vytvořeno',
  /** Label shown in review changes timeline when a document was initially created, with a timestamp */
  'timeline.operation.created-initial_timestamp': 'Vytvořeno: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been deleted */
  'timeline.operation.deleted': 'Smazáno',
  /** Label shown in review changes timeline when a document has been deleted, with a timestamp */
  'timeline.operation.deleted_timestamp': 'Smazáno: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been discarded */
  'timeline.operation.draft-discarded': 'Zahozený koncept',
  /** Label shown in review changes timeline when a draft has been discarded, with a timestamp */
  'timeline.operation.draft-discarded_timestamp': 'Zahozený koncept: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been edited */
  'timeline.operation.edited-draft': 'Editováno',
  /** Label shown in review changes timeline when a draft has been edited, with a timestamp */
  'timeline.operation.edited-draft_timestamp': 'Editováno: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been edited live */
  'timeline.operation.edited-live': 'Editováno živě',
  /** Label shown in review changes timeline when a document has been edited live, with a timestamp */
  'timeline.operation.edited-live_timestamp': 'Editováno živě: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was published */
  'timeline.operation.published': 'Publikováno',
  /** Label shown in review changes timeline when a document was published, with a timestamp */
  'timeline.operation.published_timestamp': 'Publikováno: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was unpublished */
  'timeline.operation.unpublished': 'Nepublikováno',
  /** Label shown in review changes timeline when a document was unpublished, with a timestamp */
  'timeline.operation.unpublished_timestamp': 'Nepublikováno: {{timestamp, datetime}}',
  /**
   * Label for determining since which version the changes for timeline menu dropdown are showing.
   * Receives the time label as a parameter (`timestamp`).
   */
  'timeline.since': 'Od: {{timestamp, datetime}}',
  /** Label for missing change version for timeline menu dropdown are showing */
  'timeline.since-version-missing': 'Od: neznámá verze',

  /**Aria label for the action buttons in the PTE toolbar */
  'toolbar.portable-text.action-button-aria-label': undefined, // '{{action}}'

  /** Label for button showing the free trial days left */
  'user-menu.action.free-trial_one': '{{count}} den zbývá do konce zkušební doby',
  'user-menu.action.free-trial_other': '{{count}} dní zbývá do konce zkušební doby',
  /** Label for the button showed after trial ended */
  'user-menu.action.free-trial-finished': 'Přejít z bezplatné verze',
  /** Label for action to invite members to the current sanity project */
  'user-menu.action.invite-members': 'Pozvat členy',
  /** Accessibility label for action to invite members to the current sanity project */
  'user-menu.action.invite-members-aria-label': 'Pozvat členy',
  /** Label for action to manage the current sanity project */
  'user-menu.action.manage-project': 'Spravovat projekt',
  /** Accessibility label for the action to manage the current project */
  'user-menu.action.manage-project-aria-label': 'Spravovat projekt',
  /** Tooltip helper text when portable text annotation is disabled for empty block*/
  'user-menu.action.portable-text.annotation-disabled_empty-block':
    'Nelze použít {{name}} na prázdný blok',
  /** Tooltip helper text when portable text annotation is disabled for multiple blocks */
  'user-menu.action.portable-text.annotation-disabled_multiple-blocks':
    'Nelze použít {{name}} na více bloků',
  /** Label for action to sign out of the current sanity project */
  'user-menu.action.sign-out': 'Odhlásit se',
  /** Title for appearance section for the current studio (dark / light / system scheme) */
  'user-menu.appearance-title': 'Vzhled',
  /** Label for close menu button for user menu */
  'user-menu.close-menu': 'Zavřít menu',
  /** Description for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-description': 'Použít tmavý vzhled',
  /** Title for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-title': 'Tmavý',
  /** Description for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-description': 'Použít světlý vzhled',
  /** Title for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-title': 'Světlý',
  /** Description for using "system apparence" in the appearance user menu */
  'user-menu.color-scheme.system-description': 'Použít systémový vzhled',
  /** Title for using system apparence in the appearance user menu */
  'user-menu.color-scheme.system-title': 'Systém',
  /** Title for locale section for the current studio */
  'user-menu.locale-title': 'Jazyk',
  /** Label for tooltip to show which provider the currently logged in user is using */
  'user-menu.login-provider': 'Přihlášen s {{providerTitle}}',
  /** Label for open menu button for user menu */
  'user-menu.open-menu': 'Otevřít menu',

  /**
   * Label for action to add a workspace (currently a developer-oriented action, as this will
   * lead to the documentation on workspace configuration)
   */
  'workspaces.action.add-workspace': 'Přidat pracovní prostor',
  /**
   * Label for action to choose a different workspace, in the case where you are not logged in,
   * have selected a workspace, and are faced with the authentication options for the selected
   * workspace. In other words, label for the action shown when you have reconsidered which
   * workspace to authenticate in.
   */
  'workspaces.action.choose-another-workspace': 'Vybrat jiný pracovní prostor',
  /** Label for heading that indicates that you can choose your workspace */
  'workspaces.choose-your-workspace-label': 'Vyberte svůj pracovní prostor',
  /** Label for the workspace menu */
  'workspaces.select-workspace-aria-label': 'Vybrat pracovní prostor',
  /** Button label for opening the workspace switcher */
  'workspaces.select-workspace-label': 'Vybrat pracovní prostor',
  /** Tooltip for the workspace menu */
  'workspaces.select-workspace-tooltip': 'Vybrat pracovní prostor',
  /** Title for Workplaces dropdown menu */
  'workspaces.title': 'Pracovní prostory',
})
