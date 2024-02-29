import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Menu item for deleting the asset */
  'asset-source.asset-list.menu.delete': 'Radera',
  /** Menu item for showing where a particular asset is used */
  'asset-source.asset-list.menu.show-usage': 'Visa användning',
  /** Header in usage dialog for file assets */
  'asset-source.asset-usage-dialog.header_file': 'Dokument som använder fil',
  /** Header in usage dialog for image assets */
  'asset-source.asset-usage-dialog.header_image': 'Dokument som använder bild',
  /** Text shown in usage dialog when loading documents using the selected asset */
  'asset-source.asset-usage-dialog.loading': 'Laddar…',
  /** Text for cancel action in delete-asset dialog */
  'asset-source.delete-dialog.action.cancel': 'Avbryt',
  /** Text for "confirm delete" action in delete-asset dialog */
  'asset-source.delete-dialog.action.delete': 'Radera',
  /** Dialog header for delete-asset dialog when deleting a file */
  'asset-source.delete-dialog.header_file': 'Radera fil',
  /** Dialog header for delete-asset dialog when deleting an image */
  'asset-source.delete-dialog.header_image': 'Radera bild',
  /** Text shown in delete dialog when loading documents using the selected asset */
  'asset-source.delete-dialog.loading': 'Laddar…',
  /** Message confirming to delete *named* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_named':
    'Du håller på att radera filen <strong>{{filename}}}</strong> och dess metadata. Är du säker?',
  /** Message confirming to delete *unnamed* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_unnamed':
    'Du håller på att radera filen och dess metadata. Är du säker?',
  /** Message confirming to delete *named* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_named':
    'Du håller på att radera bilden <strong>{{filename}}</strong> och dess metadata. Är du säker?',
  /** Message confirming to delete *unnamed* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_unnamed':
    'Du håller på att radera bilden och dess metadata. Är du säker?',
  /** Alt text showing on image preview in delete asset dialog  */
  'asset-source.delete-dialog.usage-list.image-preview-alt': 'Förhandsgranskning av bild',
  /** Warning message showing when *named* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_named':
    '{{filename}} kan inte raderas eftersom den används. För att kunna radera denna fil måste du först ta bort alla användningar av den.',
  /** Warning message showing when *unnamed* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_unnamed':
    'Denna fil kan inte raderas eftersom den används. För att kunna radera den måste du först ta bort alla användningar av den.',
  /** Warning message showing when *named* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_named':
    '{{filename}} kan inte raderas eftersom den används. För att kunna radera denna bild måste du först ta bort alla användningar av den.',
  /** Warning message showing when *unnamed* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_unnamed':
    'Denna bild kan inte raderas eftersom den används. För att kunna radera den måste du först ta bort alla användningar av den.',
  /** Text shown when the list of assets only include a specific set of types */
  'asset-source.dialog.accept-message':
    'Visar endast tillgångar av accepterade typer: <strong>{{acceptTypes}}</strong>',
  /** Keys shared between both image asset source and file asset source */
  /** Select asset dialog title for files */
  'asset-source.dialog.default-title_file': 'Välj fil',
  /** Select asset dialog title for images */
  'asset-source.dialog.default-title_image': 'Välj bild',
  /** Select asset dialog load more items */
  'asset-source.dialog.load-more': 'Ladda fler',
  /** Text shown when selecting a file but there's no files to select from */
  'asset-source.dialog.no-assets_file': 'Inga filer',
  /** Text shown when selecting an image but there's no images to select from */
  'asset-source.dialog.no-assets_image': 'Inga bilder',
  'asset-source.file.asset-list.action.delete.disabled-cannot-delete-current-file':
    'Kan inte radera vald fil just nu',
  'asset-source.file.asset-list.action.delete.text': 'Radera',
  'asset-source.file.asset-list.action.delete.title': 'Radera fil',
  'asset-source.file.asset-list.action.select-file.title': 'Välj filen {{filename}}',
  'asset-source.file.asset-list.action.show-usage.title': 'Visa användning',
  'asset-source.file.asset-list.delete-failed': 'Filen kunde inte raderas',
  'asset-source.file.asset-list.delete-successful': 'Filen har raderats',
  'asset-source.file.asset-list.header.date-added': 'Tillagd datum',
  /** File asset source */
  'asset-source.file.asset-list.header.filename': 'Filnamn',
  'asset-source.file.asset-list.header.size': 'Storlek',
  'asset-source.file.asset-list.header.type': 'Typ',
  /** Text displayed on button or menu invoking the file asset source */
  'asset-source.file.title': 'Uppladdade filer',
  'asset-source.image.asset-list.delete-failed': 'Bilden kunde inte raderas',
  /** Image asset source */
  'asset-source.image.asset-list.delete-successful': 'Bilden har raderats',
  /** Text displayed on button or menu invoking the image asset source */
  'asset-source.image.title': 'Uppladdade bilder',
  'asset-source.usage-list.documents-using-file_named_one':
    'Ett dokument använder filen <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-file_named_other':
    '{{count}} dokument använder filen <code>{{filename}}</code>',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *named* file **/
  'asset-source.usage-list.documents-using-file_named_zero':
    'Inga dokument använder filen <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-file_unnamed_one': 'Ett dokument använder denna fil',
  'asset-source.usage-list.documents-using-file_unnamed_other':
    '{{count}} dokument använder denna fil',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *unnamed* file **/
  'asset-source.usage-list.documents-using-file_unnamed_zero': 'Inga dokument använder denna fil',
  'asset-source.usage-list.documents-using-image_named_one':
    'Ett dokument använder bilden <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-image_named_other':
    '{{count}} dokument använder bilden <code>{{filename}}</code>',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *named* image **/
  'asset-source.usage-list.documents-using-image_named_zero':
    'Inga dokument använder bilden <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-image_unnamed_one': 'Ett dokument använder denna bild',
  'asset-source.usage-list.documents-using-image_unnamed_other':
    '{{count}} dokument använder den här bilden',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *unnamed* image **/
  'asset-source.usage-list.documents-using-image_unnamed_zero':
    'Inga dokument använder den här bilden',

  /** Action message for navigating to next month */
  'calendar.action.go-to-next-month': 'Gå till nästa månad',
  /** Action message for navigating to next year */
  'calendar.action.go-to-next-year': 'Gå till nästa år',
  /** Action message for navigating to previous month */
  'calendar.action.go-to-previous-month': 'Gå till föregående månad',
  /** Action message for navigating to previous year */
  'calendar.action.go-to-previous-year': 'Gå till föregående år',
  /* Label for navigating the calendar to "today", without _selecting_ today. Short form, eg `Today`, not `Go to today` */
  'calendar.action.go-to-today': 'Idag',
  /* Accessibility label for navigating the calendar to "today", without _selecting_ today */
  'calendar.action.go-to-today-aria-label': 'Gå till idag',
  /* Label for navigating the calendar to "tomorrow", without _selecting_ tomorrow. Short form, eg `Tomorrow`, not `Go to tomorrow` */
  'calendar.action.go-to-tomorrow': 'Imorgon',
  /* Label for navigating the calendar to "yesterday", without _selecting_ yesterday. Short form, eg `Yesterday`, not `Go to yesterday` */
  'calendar.action.go-to-yesterday': 'Igår',
  /** Label for switch that controls whether or not to include time in given timestamp */
  'calendar.action.include-time-label': 'Inkludera tid',
  /** Action message for selecting the hour */
  'calendar.action.select-hour': 'Välj timme',
  /** Action message for selecting the minute */
  'calendar.action.select-minute': 'Välj minut',
  /** Action message for setting to the current time */
  'calendar.action.set-to-current-time': 'Ställ in på aktuell tid',
  /** Label for selecting an hour preset. Receives a `time` param as a string on hh:mm format and a `date` param as a Date instance denoting the preset date */
  'calendar.action.set-to-time-preset': '{{time}} den {{date, datetime}}',
  /** Error message displayed in calendar when entered date is not the correct format */
  'calendar.error.must-be-in-format': 'Måste vara i formatet <Emphasis>{{exampleDate}}</Emphasis>',
  /** Month name for April */
  'calendar.month-names.april': 'April',
  /** Month name for August */
  'calendar.month-names.august': 'Augusti',
  /** Month name for December */
  'calendar.month-names.december': 'December',
  /** Month name for February */
  'calendar.month-names.february': 'Februari',
  /** Month name for January */
  'calendar.month-names.january': 'Januari',
  /** Month name for July */
  'calendar.month-names.july': 'Juli',
  /** Month name for June */
  'calendar.month-names.june': 'Juni',
  /** Month name for March */
  'calendar.month-names.march': 'Mars',
  /** Month name for May */
  'calendar.month-names.may': 'Maj',
  /** Month name for November */
  'calendar.month-names.november': 'November',
  /** Month name for October */
  'calendar.month-names.october': 'Oktober',
  /** Month name for September */
  'calendar.month-names.september': 'September',
  /** Short weekday name for Friday */
  'calendar.weekday-names.short.friday': 'Fre',
  /** Short weekday name for Monday */
  'calendar.weekday-names.short.monday': 'Mån',
  /** Short weekday name for Saturdayday */
  'calendar.weekday-names.short.saturday': 'Lör',
  /** Short weekday name for Sunday */
  'calendar.weekday-names.short.sunday': 'Sön',
  /** Short weekday name for Thursday */
  'calendar.weekday-names.short.thursday': 'Tor',
  /** Short weekday name for Tuesday */
  'calendar.weekday-names.short.tuesday': 'Tis',
  /** Short weekday name for Wednesday */
  'calendar.weekday-names.short.wednesday': 'Ons',

  /** Label for the close button label in Review Changes pane */
  'changes.action.close-label': 'Stäng granska ändringar',
  /** Cancel label for revert button prompt action */
  'changes.action.revert-all-cancel': 'Avbryt',
  /** Revert all confirm label for revert button action - used on prompt button + review changes pane */
  'changes.action.revert-all-confirm': 'Återställ alla',
  /** Prompt for confirming revert change (singular) label for field change action */
  'changes.action.revert-changes-confirm-change_one': 'Återställ ändring',
  /** Revert for confirming revert (plural) label for field change action */
  'changes.action.revert-changes-confirm-change_other': 'Återställ ändringar',
  /** Prompt for reverting changes for a field change */
  'changes.action.revert-changes-description': 'Är du säker på att du vill återställa ändringarna?',
  /** Prompt for reverting changes for a group change, eg multiple changes */
  'changes.action.revert-changes-description_one':
    'Är du säker på att du vill återställa ändringen?',
  /** Label for when the action of the change was to set something that was previously empty, eg a field was given a value, an array item was added, an asset was selected or similar */
  'changes.added-label': 'Tillagd',
  /** Array diff: An item was added in a given position (`{{position}}`) */
  'changes.array.item-added-in-position': 'Tillagd på position {{position}}',
  'changes.array.item-moved_down_one': 'Flyttad {{count}} position ner',
  'changes.array.item-moved_down_other': 'Flyttad {{count}} positioner ner',
  /**
   * Array diff: An item was moved within the array.
   * Receives `{{count}}` representing number of positions it moved.
   * Context is the direction of the move, either `up` or `down`.
   */
  'changes.array.item-moved_up_one': 'Flyttad {{count}} position upp',
  'changes.array.item-moved_up_other': 'Flyttad {{count}} positioner upp',
  /** Array diff: An item was removed from a given position (`{{position}}`) */
  'changes.array.item-removed-from-position': 'Borttagen från position {{position}}',
  /** Accessibility label for the "change bar" shown when there are edits on a field-level */
  'changes.change-bar.aria-label': 'Granska ändringar',
  /** Label for when the action of the change was _not_ an add/remove, eg a text field changed value, an image was changed from one asset to another or similar */
  'changes.changed-label': 'Ändrad',
  /** Label and text for tooltip that indicates the authors of the changes */
  'changes.changes-by-author': 'Ändringar av',
  /** Additional text shown in development mode when a diff component crashes during rendering */
  'changes.error-boundary.developer-info': 'Kontrollera utvecklarkonsolen för mer information',
  /** Text shown when a diff component crashes during rendering, triggering the error boundary */
  'changes.error-boundary.title': 'Att rendera ändringarna för detta fält orsakade ett fel',
  /** Error message shown when the value of a field is not the expected one */
  'changes.error.incorrect-type-message':
    'Värdefel: Värdet är av typen "<code>{{actualType}}</code>", förväntad "<code>{{expectedType}}</code>"',
  /** File diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.file.meta-info-fallback-title': 'Namnlös',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.crop-changed': 'Beskärning ändrad',
  /** Image diff: Text shown if the previous image asset was deleted (shouldn't theoretically happen) */
  'changes.image.deleted': 'Bild raderad',
  /** Image diff: Text shown if the image failed to be loaded when previewing it */
  'changes.image.error-loading-image': 'Fel vid laddning av bild',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.hotspot-changed': 'Fokuspunkt ändrad',
  /** Image diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.image.meta-info-fallback-title': 'Namnlös',
  /** Image diff: Text shown if no asset has been set for the field (but has metadata changes) */
  'changes.image.no-asset-set': 'Bild inte inställd',
  /** Image diff: Text shown when the from/to state has/had no image */
  'changes.image.no-image-placeholder': '(ingen bild)',
  /** Label for the "from" value in the change inspector */
  'changes.inspector.from-label': 'Från',
  /** Label for the "meta" (field path, action etc) information in the change inspector */
  'changes.inspector.meta-label': 'Meta',
  /** Label for the "to" value in the change inspector */
  'changes.inspector.to-label': 'Till',
  /** Loading author of change in the differences tooltip in the review changes pane */
  'changes.loading-author': 'Laddar…',
  /** Loading changes in Review Changes Pane */
  'changes.loading-changes': 'Laddar ändringar…',
  /** No Changes description in the Review Changes pane */
  'changes.no-changes-description':
    'Redigera dokumentet eller välj en äldre version i tidslinjen för att se en lista över ändringar som visas i det här fönstret.',
  /** No Changes title in the Review Changes pane */
  'changes.no-changes-title': 'Det finns inga ändringar',
  /** Portable Text diff: An annotation was added */
  'changes.portable-text.annotation_added': 'Tillagd anmärkning',
  /** Portable Text diff: An annotation was changed */
  'changes.portable-text.annotation_changed': 'Ändrad anmärkning',
  /** Portable Text diff: An annotation was removed */
  'changes.portable-text.annotation_removed': 'Borttagen anmärkning',
  /** Portable Text diff: An annotation was left unchanged */
  'changes.portable-text.annotation_unchanged': 'Oförändrad anmärkning',
  /** Portable Text diff: A block changed from one style to another (eg `normal` to `h1` or similar) */
  'changes.portable-text.block-style-changed':
    'Ändrad blockstil från "{{fromStyle}}" till "{{toStyle}}"',
  /** Portable Text diff: Change formatting of text (setting/unsetting marks, eg bold/italic etc) */
  'changes.portable-text.changed-formatting': 'Ändrad formatering',
  /** Portable Text diff: An empty inline object is part of a change */
  'changes.portable-text.empty-inline-object': 'Tom {{inlineObjectType}}',
  /** Portable Text diff: An empty object is the result of adding/removing an annotation */
  'changes.portable-text.empty-object-annotation': 'Tom {{annotationType}}',
  /** Portable Text diff: Added a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_added': 'Lade till tom text',
  /** Portable Text diff: Changed a block that contained no text (eg empty block) */
  'changes.portable-text.empty-text_changed': 'Ändrad tom text',
  /** Portable Text diff: Removed a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_removed': 'Borttagen tom text',
  /** Portable Text diff: An inline object was added */
  'changes.portable-text.inline-object_added': 'Lade till inline-objekt',
  /** Portable Text diff: An inline object was changed */
  'changes.portable-text.inline-object_changed': 'Ändrat inline-objekt',
  /** Portable Text diff: An inline object was removed */
  'changes.portable-text.inline-object_removed': 'Borttaget inline-objekt',
  /** Portable Text diff: An inline object was left unchanged */
  'changes.portable-text.inline-object_unchanged': 'Oförändrat inline-objekt',
  /** Portable Text diff: Added a chunk of text */
  'changes.portable-text.text_added': 'Lade till text',
  /** Portable Text diff: Removed a chunk of text */
  'changes.portable-text.text_removed': 'Borttagen text',
  /** Portable Text diff: Annotation has an unknown schema type */
  'changes.portable-text.unknown-annotation-schema-type': 'Okänd schematyp',
  /** Portable Text diff: Inline object has an unknown schema type */
  'changes.portable-text.unknown-inline-object-schema-type': 'Okänd schematyp',
  /** Label for when the action of the change was a removal, eg a field was cleared, an array item was removed, an asset was deselected or similar */
  'changes.removed-label': 'Borttaget',
  /** Title for the Review Changes pane */
  'changes.title': 'Granska ändringar',

  /** --- Common components --- */
  /** Tooltip text for context menu buttons */
  'common.context-menu-button.tooltip': 'Visa mer',
  /** Default text for dialog cancel button */
  'common.dialog.cancel-button.text': 'Avbryt',
  /** Default text for dialog confirm button */
  'common.dialog.confirm-button.text': 'Bekräfta',
  /** Default text in shared loader text / spinner lockup */
  'common.loading': 'Laddar',

  /** --- Configuration issues --- */
  /** Tooltip displayed on configuration issues button */
  'configuration-issues.button.tooltip': 'Hittade konfigurationsproblem',

  /** The fallback title for an ordering menu item if no localized titles are provided. */
  'default-menu-item.fallback-title': 'Sortera efter {{title}}',

  /** Title for the default ordering/SortOrder if no orderings are provided and the caption field is found */
  'default-orderings.caption': 'Sortera efter bildtext',
  /** Title for the default ordering/SortOrder if no orderings are provided and the description field is found */
  'default-orderings.description': 'Sortera efter beskrivning',
  /** Title for the default ordering/SortOrder if no orderings are provided and the header field is found */
  'default-orderings.header': 'Sortera efter rubrik',
  /** Title for the default ordering/SortOrder if no orderings are provided and the heading field is found */
  'default-orderings.heading': 'Sortera efter rubrik',
  /** Title for the default ordering/SortOrder if no orderings are provided and the label field is found */
  'default-orderings.label': 'Sortera efter etikett',
  /** Title for the default ordering/SortOrder if no orderings are provided and the name field is found */
  'default-orderings.name': 'Sortera efter namn',
  /** Title for the default ordering/SortOrder if no orderings are provided and the title field is found */
  'default-orderings.title': 'Sortera efter titel',

  /** Label to show in the document footer indicating the last edited date of the document */
  'document-status.edited': 'Redigerad {{date}}',
  /** Label to show in the document footer indicating the document is not published*/
  'document-status.not-published': 'Inte publicerad',
  /** Label to show in the document footer indicating the published date of the document */
  'document-status.published': 'Publicerad {{date}}',

  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.duplicate-keys-alert.details.additional-description':
    'Värdet på egenskapen <code>_key</code> måste vara en unik sträng.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property of each elements has been generated non-uniquely. */
  'form.error.duplicate-keys-alert.details.description':
    'Detta händer vanligtvis när objekt skapas med hjälp av en API-klient, och egenskapen <code>_key</code> för varje element har genererats på ett icke-unikt sätt.',
  /** Developer info */
  'form.error.duplicate-keys-alert.details.title': 'Information för utvecklare',
  /** Generate unique keys */
  'form.error.duplicate-keys-alert.generate-button.text': 'Generera unika nycklar',
  /** Several items in this list share the same identifier (key). Every item must have an unique identifier. */
  'form.error.duplicate-keys-alert.summary':
    'Flera objekt i denna lista delar samma identifierare (nyckel). Varje objekt måste ha en unik identifierare.',
  /** Non-unique keys */
  'form.error.duplicate-keys-alert.title': 'Icke-unika nycklar',
  /** Error text shown when a field with a given name cannot be found in the schema or is conditionally hidden but explicitly told to render  */
  'form.error.field-not-found':
    'Fältet "{{fieldName}}" hittades inte bland medlemmarna – verifiera att det är definierat i schemat och att det inte har dolt villkorligt.',
  /** Add missing keys */
  'form.error.missing-keys-alert.add-button.text': 'Lägg till saknade nycklar',
  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.missing-keys-alert.details.additional-description':
    'Värdet på egenskapen <code>_key</code> måste vara en unik sträng.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property has not been included. */
  'form.error.missing-keys-alert.details.description':
    'Detta händer vanligtvis när objekt skapas med hjälp av en API-klient, och egenskapen <code>_key</code> inte har inkluderats.',
  /** Developer info */
  'form.error.missing-keys-alert.details.title': 'Information för utvecklare',
  /** Some items in the list are missing their keys. This must be fixed in order to edit the list. */
  'form.error.missing-keys-alert.summary':
    'Vissa objekt i listan saknar sina nycklar. Detta måste åtgärdas för att kunna redigera listan.',
  /** Missing keys */
  'form.error.missing-keys-alert.title': 'Saknade nycklar',
  /** This usually happens when items are created using an API client, or when a custom input component has added invalid data to the list. */
  'form.error.mixed-array-alert.details.description':
    'Detta händer vanligtvis när objekt skapas med hjälp av en API-klient, eller när en anpassad inmatningskomponent har lagt till ogiltiga data i listan.',
  /** Developer info */
  'form.error.mixed-array-alert.details.title': 'Information för utvecklare',
  /**  Remove non-object values */
  'form.error.mixed-array-alert.remove-button.text': 'Ta bort icke-objektvärden',
  /** Some items in this list are not objects. This must be fixed in order to edit the list. */
  'form.error.mixed-array-alert.summary':
    'Vissa objekt i denna lista är inte objekt. Detta måste åtgärdas för att kunna redigera listan.',
  /** Invalid list values */
  'form.error.mixed-array-alert.title': 'Ogiltiga listvärden',
  /** Error text shown when form is unable to find an array item at a given indexed path */
  'form.error.no-array-item-at-index':
    'Inget arrayobjekt vid index <code>{{index}}</code> hittades på sökvägen <code>{{path}}</code>',
  /** Error text shown when form is unable to find an array item at a given keyed path */
  'form.error.no-array-item-at-key':
    'Inget arrayobjekt med `_key` <code>"{{key}}"</code> hittades på sökvägen <code>{{path}}</code>',
  /** Form field deprecated label */
  'form.field.deprecated-label': 'föråldrad',
  /** Fallback title shown above field if it has no defined title */
  'form.field.untitled-field-label': 'Namnlös',
  /** Fallback title shown above fieldset if it has no defined title */
  'form.field.untitled-fieldset-label': 'Namnlös',
  /** Accessibility label for the icon that indicates the field has a validation error */
  'form.validation.has-error-aria-label': 'Har fel',
  /** Accessibility label for the icon that indicates the field has validation information */
  'form.validation.has-info-aria-label': 'Har information',
  /** Accessibility label for the icon that indicates the field has a validation warning */
  'form.validation.has-warning-aria-label': 'Har varning',
  /** Text shown when summarizing validation information, when the field has one or more errors */
  'form.validation.summary.errors-count_one': '{{count}} fel',
  'form.validation.summary.errors-count_other': '{{count}} fel',
  /** Text shown when summarizing validation information, when the field has one or more warnings */
  'form.validation.summary.warnings-count_one': '{{count}} varning',
  'form.validation.summary.warnings-count_other': '{{count}} varningar',

  /** Tooltip for free trial navbar button indicating remaining days */
  'free-trial.tooltip.days-count_one': '{{count}} dag kvar av provperioden',
  'free-trial.tooltip.days-count_other': '{{count}} dagar kvar av provperioden',
  /** Tooltip for free trial navbar button, once trial has ended */
  'free-trial.tooltip.trial-finished': 'Uppgradera ditt projekt',

  /**
   * Label for "contact sales" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.contact-sales': 'Kontakta försäljning',
  /**
   * Label for "help and support" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.help-and-support': 'Hjälp och support',
  /**
   * Label for "join our community" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.join-our-community': 'Gå med i vårt community',
  /** Information for what the latest sanity version is */
  'help-resources.latest-sanity-version': 'Senaste versionen är {{latestVersion}}',
  /** Information for what studio version the current studio is running */
  'help-resources.studio-version': 'Sanity Studio version {{studioVersion}}',
  /** Title for help and resources menus */
  'help-resources.title': 'Hjälp och resurser',

  /** Text for button to cancel an ongoing upload */
  'input.files.common.cancel-upload': 'Avbryt',
  /** Text for file input button in upload placeholder */
  'input.files.common.upload-placeholder.file-input-button.text': 'Ladda upp',
  /** Uploading <FileName/> */
  'input.files.common.upload-progress': 'Laddar upp <FileName/>',
  /** The referenced document cannot be opened, because the URL failed to be resolved */
  'input.reference.document-cannot-be-opened.failed-to-resolve-url':
    'Detta dokument kan inte öppnas (kan inte lösa URL till Studio)',

  /** Label for adding item after a specific array item */
  'inputs.array.action.add-after': 'Lägg till objekt efter',
  /** Label for adding item before a specific array item */
  'inputs.array.action.add-before': 'Lägg till objekt före',
  /** Label for adding array item action when the schema allows for only one schema type */
  'inputs.array.action.add-item': 'Lägg till objekt',
  /**
   * Label for adding one array item action when the schema allows for multiple schema types,
   * eg. will prompt the user to select a type once triggered
   */
  'inputs.array.action.add-item-select-type': 'Lägg till objekt...',
  /** Array drag handle button tooltip */
  'inputs.array.action.drag.tooltip': 'Dra för att ändra ordning',
  /** Label for duplicating an array item  */
  'inputs.array.action.duplicate': 'Duplicera',
  /** Label for editing the item of a specific type, eg "Edit Person" */
  'inputs.array.action.edit': 'Redigera {{itemTypeTitle}}',
  /** Label for removing an array item action  */
  'inputs.array.action.remove': 'Ta bort',
  /** Label for removing action when an array item has an error  */
  'inputs.array.action.remove-invalid-item': 'Ta bort',
  /** Label for viewing the item of a specific type, eg "View Person" */
  'inputs.array.action.view': 'Visa {{itemTypeTitle}}',
  /** Error description for the array item tooltip that explains that the current item can still be moved or deleted but not edited since the schema definition is not found */
  'inputs.array.error.can-delete-but-no-edit-description':
    'Du kan fortfarande flytta eller ta bort detta objekt, men det kan inte redigeras eftersom schemadefinitionen för dess typ inte kan hittas.',
  /** Error label for toast when array could not resolve the initial value */
  'inputs.array.error.cannot-resolve-initial-value-title':
    'Kan inte lösa initialt värde för typ: {{schemaTypeTitle}}: {{errorMessage}}.',
  /** Error label for toast when trying to upload one array item of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_one':
    'Följande objekt kan inte laddas upp eftersom det inte finns någon känd konvertering från innehållstyp till arrayobjekt:',
  /** Error label for toast when trying to upload multiple array items of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_other':
    'Följande objekt kan inte laddas upp eftersom det inte finns någon känd konvertering från innehållstyper till arrayobjekt:',
  /** Error description for the array item tooltip that explains that the current type item is not valid for the list  */
  'inputs.array.error.current-schema-not-declare-description':
    'Det aktuella schemat deklarerar inte objekt av typ <code>{{typeName}}</code> som giltiga för denna lista. Detta kan betyda att typen har tagits bort som ett giltigt objekttyp, eller att någon annan har lagt till den i sitt eget lokala schema som ännu inte är distribuerat.',
  /** Error description to show how the item is being represented in the json format */
  'inputs.array.error.json-representation-description': 'JSON-representation av detta objekt:',
  /** Error description for the array item tooltip that explains what the error means with more context */
  'inputs.array.error.type-is-incompatible-prompt':
    'Objekt av typ <code>{{typeName}}</code> inte giltigt för denna lista',
  /** Error title for when an item type within an array input is incompatible, used in the tooltip */
  'inputs.array.error.type-is-incompatible-title': 'Varför händer detta?',
  /** Error label for unexpected errors in the Array Input */
  'inputs.array.error.unexpected-error': 'Oväntat fel: {{error}}',
  /** Label for when the array input doesn't have any items */
  'inputs.array.no-items-label': 'Inga objekt',
  /** Label for read only array fields */
  'inputs.array.read-only-label': 'Detta fält är skrivskyddat',
  /** Label for when the array input is resolving the initial value for the item */
  'inputs.array.resolving-initial-value': 'Löser initialt värde…',
  /** Placeholder value for datetime input */
  'inputs.datetime.placeholder': 't.ex. {{example}}',
  /** Acessibility label for button to open file options menu */
  'inputs.file.actions-menu.file-options.aria-label': 'Öppna filalternativmenyn',
  /** Browse */
  'inputs.file.browse-button.text': 'Bläddra',
  /** Select file */
  'inputs.file.dialog.title': 'Välj fil',
  /** Unknown member kind: `{{kind}}` */
  'inputs.file.error.unknown-member-kind': 'Okänd medlemstyp: {{kind}}',
  /** The value of this field is not a valid file. Resetting this field will let you choose a new file. */
  'inputs.file.invalid-file-warning.description':
    'Värdet på detta fält är inte en giltig fil. Att återställa detta fält låter dig välja en ny fil.',
  /** Reset value */
  'inputs.file.invalid-file-warning.reset-button.text': 'Återställ värde',
  /** Invalid file value */
  'inputs.file.invalid-file-warning.title': 'Ogiltigt filvärde',
  /** Select */
  'inputs.file.multi-browse-button.text': 'Välj',
  /** The upload could not be completed at this time. */
  'inputs.file.upload-failed.description': 'Uppladdningen kunde inte slutföras just nu.',
  /** Upload failed */
  'inputs.file.upload-failed.title': 'Uppladdning misslyckades',
  /** Clear field */
  'inputs.files.common.actions-menu.clear-field.label': 'Rensa fält',
  /** Copy URL */
  'inputs.files.common.actions-menu.copy-url.label': 'Kopiera URL',
  /** Download */
  'inputs.files.common.actions-menu.download.label': 'Ladda ner',
  /** The URL is copied to the clipboard */
  'inputs.files.common.actions-menu.notification.url-copied': 'URL:en är kopierad till urklipp',
  /** Replace */
  'inputs.files.common.actions-menu.replace.label': 'Ersätt',
  /** Upload */
  'inputs.files.common.actions-menu.upload.label': 'Ladda upp',
  /** Drop to upload */
  'inputs.files.common.drop-message.drop-to-upload': 'Släpp för att ladda upp',
  /** Drop to upload `{{count}}` file */
  'inputs.files.common.drop-message.drop-to-upload-multi_one':
    'Släpp för att ladda upp {{count}} fil',
  /** Drop to upload `{{count}}` files */
  'inputs.files.common.drop-message.drop-to-upload-multi_other':
    'Släpp för att ladda upp {{count}} filer',
  /** Can't upload this file here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_one':
    'Kan inte ladda upp den här filen här',
  /** Can't upload any of these files here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_other':
    'Kan inte ladda upp någon av dessa filer här',
  /** `{{count}}` file can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_one':
    '{{count}} fil kan inte laddas upp här',
  /** `{{count}}` files can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_other':
    '{{count}} filer kan inte laddas upp här',
  /** Cannot upload `{{count}}` files */
  'inputs.files.common.placeholder.cannot-upload-some-files_one': 'Kan inte ladda upp fil',
  'inputs.files.common.placeholder.cannot-upload-some-files_other':
    'Kan inte ladda upp {{count}} filer',
  /** Drag or paste type here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_file': 'Dra eller klistra in filen här',
  /** Drag or paste image here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_image':
    'Dra eller klistra in bilden här',
  /** Drop to upload file */
  'inputs.files.common.placeholder.drop-to-upload_file': 'Släpp för att ladda upp filen',
  /** Drop to upload image */
  'inputs.files.common.placeholder.drop-to-upload_image': 'Släpp för att ladda upp bilden',
  /** Read only */
  'inputs.files.common.placeholder.read-only': 'Endast läsning',
  /** Can't upload files here */
  'inputs.files.common.placeholder.upload-not-supported': 'Kan inte ladda upp filer här',
  /** Clear upload */
  'inputs.files.common.stale-upload-warning.clear': 'Rensa uppladdning',
  /** An upload has made no progress for at least `{{staleThresholdMinutes}}` minutes and likely got interrupted. You can safely clear the incomplete upload and try uploading again. */
  'inputs.files.common.stale-upload-warning.description':
    'En uppladdning har inte gjort några framsteg på minst {{staleThresholdMinutes}} minuter och har troligen avbrutits. Du kan säkert rensa den ofullständiga uppladdningen och försöka ladda upp igen.',
  /** Incomplete upload */
  'inputs.files.common.stale-upload-warning.title': 'Ofullständig uppladdning',
  /** Tooltip text for action to crop image */
  'inputs.image.actions-menu.crop-image-tooltip': 'Beskär bild',
  /** Accessibility label for button to open image edit dialog */
  'inputs.image.actions-menu.edit-details.aria-label': 'Öppna bildredigeringsdialog',
  /** Accessibility label for button to open image options menu */
  'inputs.image.actions-menu.options.aria-label': 'Öppna bildalternativmenyn',
  /** Select */
  'inputs.image.browse-menu.text': 'Välj',
  /** Cannot upload this file here */
  'inputs.image.drag-overlay.cannot-upload-here': 'Kan inte ladda upp denna fil här',
  /** Drop image to upload */
  'inputs.image.drag-overlay.drop-to-upload-image': 'Släpp bilden för att ladda upp',
  /** This field is read only */
  'inputs.image.drag-overlay.this-field-is-read-only': 'Detta fält är endast läsning',
  /** Unknown member kind: `{{kind}}` */
  'inputs.image.error.unknown-member-kind': 'Okänd medlemstyp: {{kind}}',
  /** Edit hotspot and crop */
  'inputs.image.hotspot-dialog.title': 'Redigera hotspot och beskärning',
  /** The value of this field is not a valid image. Resetting this field will let you choose a new image. */
  'inputs.image.invalid-image-warning.description':
    'Värdet på detta fält är inte en giltig bild. Att återställa detta fält låter dig välja en ny bild.',
  /** Reset value */
  'inputs.image.invalid-image-warning.reset-button.text': 'Återställ värde',
  /** Invalid image value */
  'inputs.image.invalid-image-warning.title': 'Ogiltigt bildvärde',
  /** Preview of uploaded image */
  'inputs.image.preview-uploaded-image': 'Förhandsgranskning av uppladdad bild',
  /** The upload could not be completed at this time. */
  'inputs.image.upload-error.description': 'Uppladdningen kunde inte slutföras just nu.',
  /** Upload failed */
  'inputs.image.upload-error.title': 'Uppladdning misslyckades',
  /** Adjust the rectangle to crop image. Adjust the circle to specify the area that should always be visible. */
  'inputs.imagetool.description':
    'Justera rektangeln för att beskära bilden. Justera cirkeln för att ange det område som alltid ska vara synligt.',
  /** Error: `{{errorMessage}}` */
  'inputs.imagetool.load-error': 'Fel: {{errorMessage}}',
  /** Hotspot & Crop */
  'inputs.imagetool.title': 'Hotspot & Crop',
  /** Convert to `{{targetType}}` */
  'inputs.invalid-value.convert-button.text': 'Konvertera till <code>{{targetType}}</code>',
  /** The current value (<code>`{{actualType}}`</code>) */
  'inputs.invalid-value.current-type': 'Det aktuella värdet (<code>{{actualType}}</code>)',
  /** The property value is stored as a value type that does not match the expected type. */
  'inputs.invalid-value.description':
    'Egenskapens värde är lagrat som en värde typ som inte matchar den förväntade typen.',
  /** The value of this property must be of type <code>`{{validType}}`</code> according to the schema. */
  'inputs.invalid-value.details.description':
    'Värdet på denna egenskap måste vara av typ <code>{{validType}}</code> enligt schemat.',
  /** Only the following types are valid here according to schema: */
  'inputs.invalid-value.details.multi-type-description':
    'Endast följande typer är giltiga här enligt schema:',
  /** Mismatching value types typically occur when the schema has recently been changed. */
  'inputs.invalid-value.details.possible-reason':
    'Omatchande värde typer uppstår vanligtvis när schemat nyligen har ändrats.',
  /** Developer info */
  'inputs.invalid-value.details.title': 'Utvecklarinfo',
  /** -- Invalid Value Input -- */
  /** Reset value */
  'inputs.invalid-value.reset-button.text': 'Återställ värde',
  /** Invalid property value */
  'inputs.invalid-value.title': 'Ogiltigt egenskapsvärde',
  /** Field groups */
  'inputs.object.field-group-tabs.aria-label': 'Fältgrupper',
  /** Read-only field description */
  'inputs.object.unknown-fields.read-only.description':
    'Detta fält är <strong>skrivskyddat</strong> enligt dokumentets schema och kan inte avmarkeras. Om du vill kunna avmarkera detta i Studio, se till att du tar bort <code>readOnly</code> fältet från den inneslutande typen i schemat.',
  /** Remove field */
  'inputs.object.unknown-fields.remove-field-button.text': 'Ta bort fält',
  /** Encountered `{{count}}` fields that are not defined in the schema. */
  'inputs.object.unknown-fields.warning.description_one':
    'Stötte på ett fält som inte är definierat i schemat.',
  'inputs.object.unknown-fields.warning.description_other':
    'Stötte på {{count}} fält som inte är definierade i schemat.',
  /** Detailed description of unknown field warning */
  'inputs.object.unknown-fields.warning.details.description_one':
    'Detta fält är inte definierat i schemat, vilket kan betyda att fältdefinitionen har tagits bort eller att någon annan har lagt till det i sitt eget lokala projekt och inte har distribuerat sina ändringar ännu.',
  'inputs.object.unknown-fields.warning.details.description_other':
    'Dessa fält är inte definierade i dokumentets schema, vilket kan betyda att fältdefinitionerna har tagits bort eller att någon annan har lagt till dem i sitt eget lokala projekt och inte har distribuerat sina ändringar ännu.',
  /** Developer info */
  'inputs.object.unknown-fields.warning.details.title': 'Utvecklarinfo',
  /** Unknown field found */
  'inputs.object.unknown-fields.warning.title_one': 'Okänt fält hittat',
  'inputs.object.unknown-fields.warning.title_other': 'Okända fält hittade',
  /** Collapse the editor to save screen space  */
  'inputs.portable-text.action.collapse-editor': 'Fäll ihop redigeraren för att spara skärmutrymme',
  /** Aria label for action to edit an existing annotation */
  'inputs.portable-text.action.edit-annotation-aria-label': 'Redigera anteckning',
  /** Expand the editor to give more editing space */
  'inputs.portable-text.action.expand-editor': 'Expandera redigeraren',
  /** Label label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block': 'Infoga {{typeName}}',
  /** Accessibility label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block-aria-label': 'Infoga {{typeName}} (block)',
  /** Label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object': 'Infoga {{typeName}}',
  /** Accessibility label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object-aria-label': 'Infoga {{typeName}} (inline)',
  /** Aria label for action to remove an annotation */
  'inputs.portable-text.action.remove-annotation-aria-label': 'Ta bort anteckning',
  /** Label for activate on focus with context of click and not focused */
  'inputs.portable-text.activate-on-focus-message_click': 'Klicka för att aktivera',
  /** Label for activate on focus with context of click and focused */
  'inputs.portable-text.activate-on-focus-message_click-focused':
    'Klicka eller tryck på mellanslag för att aktivera',
  /** Label for activate on focus with context of tap and not focused */
  'inputs.portable-text.activate-on-focus-message_tap': 'Tryck för att aktivera',
  /**Aria label for the annotation object */
  'inputs.portable-text.annotation-aria-label': 'Anteckningsobjekt',
  /** Title for dialog that allows editing an annotation */
  'inputs.portable-text.annotation-editor.title': 'Redigera {{schemaType}}',
  /** Title of the default "link" annotation */
  'inputs.portable-text.annotation.link': 'Länk',
  /**Aria label for the block object */
  'inputs.portable-text.block.aria-label': 'Blockobjekt',
  /** Label for action to edit a block item, in the case where it is editable */
  'inputs.portable-text.block.edit': 'Redigera',
  /** Accessibility label for the button that opens the actions menu on blocks */
  'inputs.portable-text.block.open-menu-aria-label': 'Öppna meny',
  /** Label for action to open a reference, in the case of block-level reference types */
  'inputs.portable-text.block.open-reference': 'Öppna referens',
  /** Label for action to remove a block item */
  'inputs.portable-text.block.remove': 'Ta bort',
  /** Label for action to view a block item, in the case where it is read-only and thus cannot be edited */
  'inputs.portable-text.block.view': 'Visa',
  /** Title of the "code" decorator */
  'inputs.portable-text.decorator.code': 'Kod',
  /** Title of the "em" (emphasis) decorator */
  'inputs.portable-text.decorator.emphasis': 'Kursiv',
  /** Title of the "strike-through" decorator */
  'inputs.portable-text.decorator.strike-through': 'Genomstruken',
  /** Title of the "strong" decorator */
  'inputs.portable-text.decorator.strong': 'Fetstil',
  /** Title of the "underline" decorator */
  'inputs.portable-text.decorator.underline': 'Understruken',
  /** Placeholder text for when the editor is empty */
  'inputs.portable-text.empty-placeholder': 'Tom',
  /**Aria label for the block object */
  'inputs.portable-text.inline-block.aria-label': 'Inbäddat objekt',
  /** Label for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit': 'Redigera objekt',
  /** Aria label for icon for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit-aria-label': 'Redigera objekt',
  /** Label for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove': 'Ta bort objekt',
  /** Aria label for icon for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove-aria-label': 'Ta bort objekt',
  /** Disclaimer text shown on invalid Portable Text value, when an action is available to unblock the user, but it is not guaranteed to be safe */
  'inputs.portable-text.invalid-value.action-disclaimer':
    'OBS: Det är generellt säkert att utföra ovanstående åtgärd, men om du är osäker, kontakta de som ansvarar för att konfigurera din studio.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.action': 'Ta bort objektet',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.description':
    'Barn med nyckel {{childKey}} i block med nyckel <code>{{key}}</code> är av typ <code>{{childType}}</code>, vilket inte är tillåtet enligt schemat.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.action': 'Ta bort blocket',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.description':
    'Block med nyckel <code>{{key}}</code> är av typ <code>{{typeName}}</code>, vilket inte är tillåtet enligt schemat.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.action': 'Infoga tomt textspann',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.description':
    'Textblock med nyckel <code>{{key}}</code> har inga textspann.',
  /** Label for the button to ignore invalid values in the Portable Text editor */
  'inputs.portable-text.invalid-value.ignore-button.text': 'Ignorera',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.action':
    'Använd typ <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.description':
    'Block med nyckel <code>{{key}}</code> har ett ogiltigt typnamn. Enligt schemat bör det vara <code>{{expectedTypeName}}</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.action': 'Ange tomt textvärde',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.description':
    'Spann med nyckel {{childKey}} i block med nyckel <code>{{key}}</code> har en saknad eller ogiltig <code>text</code>-egenskap.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.action':
    'Använd typ <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.description':
    'Block med nyckel <code>{{key}}</code> saknar ett typnamn. Enligt schemat bör det vara <code>{{expectedTypeName}}</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.action': 'Tilldela slumpmässig nyckel',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.description':
    'Barn vid index <code>{{index}}</code> i block med nyckel <code>{{key}}</code> saknar <code>_key</code>-egenskap.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.action': 'Ta bort objektet',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.description':
    'Barn med nyckel {{childKey}} i block med nyckel <code>{{key}}</code> saknar <code>_type</code>-egenskap.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.action': 'Tilldela slumpmässig nyckel',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.description':
    'Block vid index <code>{{index}}</code> saknar den nödvändiga <code>_key</code>-egenskapen.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.action': 'Ta bort blocket',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.description':
    'Textblock med nyckel <code>{{key}}</code> har en ogiltig eller saknad `children`-egenskap.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.action': 'Lägg till egenskap',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.description':
    'Textblock med nyckel <code>{{key}}</code> har en ogiltig eller saknad `markDefs`-egenskap.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.action': 'Ta bort blocket',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.description':
    'Block med nyckel <code>{{key}}</code> saknar ett typnamn.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.action': 'Ta bort objektet',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.description':
    'Barn på index <code>{{index}}</code> av block med nyckel <code>{{key}}</code> är inte ett objekt.',
  /** Action presented when the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.action': 'Avmarkera värdet',
  /** Text explaining that the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.description':
    'Värdet måste vara en array av Portable Text-block, eller odefinierat.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.action': 'Ta bort objektet',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.description':
    'Objektet på <code>{{index}}</code> är inte ett objekt,.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.action': 'Ta bort otillåtna markeringar',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.description':
    'Textblock med nyckel <code>{{key}}</code> innehåller markeringar <code>({{orphanedMarks, list}})</code> som inte är tillåtna av schemat.',
  /** Title for the alert indicating that the Portable Text field has an invalid value */
  'inputs.portable-text.invalid-value.title': 'Ogiltigt Portable Text-värde',
  /** Title of "bulleted" list type */
  'inputs.portable-text.list-type.bullet': 'Punktlista',
  /** Title of numbered list type */
  'inputs.portable-text.list-type.number': 'Numrerad lista',
  /** Title of the "h1" block style */
  'inputs.portable-text.style.h1': 'Rubrik 1',
  /** Title of the "h2" block style */
  'inputs.portable-text.style.h2': 'Rubrik 2',
  /** Title of the "h3" block style */
  'inputs.portable-text.style.h3': 'Rubrik 3',
  /** Title of the "h4" block style */
  'inputs.portable-text.style.h4': 'Rubrik 4',
  /** Title of the "h5" block style */
  'inputs.portable-text.style.h5': 'Rubrik 5',
  /** Title of the "h6" block style */
  'inputs.portable-text.style.h6': 'Rubrik 6',
  /** Title shown when multiple blocks of varying styles is selected */
  'inputs.portable-text.style.multiple': 'Flera',
  /** Title of fallback when no style is given for a block */
  'inputs.portable-text.style.none': 'Ingen stil',
  /** Title of the "normal" block style */
  'inputs.portable-text.style.normal': 'Normal',
  /** Title of the "quote" block style */
  'inputs.portable-text.style.quote': 'Citat',
  /** Label for action to clear the current value of the reference field */
  'inputs.reference.action.clear': 'Rensa',
  /** Label for action to create a new document from the reference input */
  'inputs.reference.action.create-new-document': 'Skapa ny',
  /** Label for action to create a new document from the reference input, when there are multiple templates or document types to choose from */
  'inputs.reference.action.create-new-document-select': 'Skapa ny…',
  /** Label for action to duplicate the current item to a new item (used within arrays) */
  'inputs.reference.action.duplicate': 'Duplicera',
  /** Label for action that opens the referenced document in a new tab */
  'inputs.reference.action.open-in-new-tab': 'Öppna i ny flik',
  /** Label for action to remove the reference from an array */
  'inputs.reference.action.remove': 'Ta bort',
  /** Label for action to replace the current value of the field */
  'inputs.reference.action.replace': 'Ersätt',
  /** Label for action to cancel a previously initiated replace action  */
  'inputs.reference.action.replace-cancel': 'Avbryt ersättning',
  /** The cross-dataset reference field currently has a reference, but the feature has been disabled since it was created. This explains what can/cannot be done in its current state. */
  'inputs.reference.cross-dataset.feature-disabled-actions':
    'Du kan fortfarande rensa detta fälts befintliga referens, men det kan inte ändras till ett annat dokument så länge funktionen är inaktiverad.',
  /** A cross-dataset reference field exists but the feature has been disabled. A <DocumentationLink> component is available. */
  'inputs.reference.cross-dataset.feature-disabled-description':
    'Denna funktion har inaktiverats. Läs hur du aktiverar den i <DocumentationLink>dokumentationen</DocumentationLink>.',
  /** Title for a warning telling the user that the current project does not have the "cross dataset references" feature */
  'inputs.reference.cross-dataset.feature-unavailable-title':
    'Otillgänglig funktion: Korsdatasetreferens',
  /** The cross-dataset reference points to a document with an invalid type  */
  'inputs.reference.cross-dataset.invalid-type':
    'Det refererade dokumentet är av ogiltig typ ({{typeName}}) <JsonValue/>',
  /** The referenced document will open in a new tab (due to external studio) */
  'inputs.reference.document-opens-in-new-tab': 'Detta dokument öppnas i en ny flik',
  /** Error title for when the document is unavailable (for any possible reason) */
  'inputs.reference.error.document-unavailable-title': 'Dokument otillgängligt',
  /** Error title for when the referenced document failed to be loaded */
  'inputs.reference.error.failed-to-load-document-title':
    'Misslyckades med att ladda refererat dokument',
  /** Error title for when the reference search returned a document that is not an allowed type for the field */
  'inputs.reference.error.invalid-search-result-type-title':
    'Sökningen returnerade en typ som inte är giltig för denna referens: "{{returnedType}}"',
  /** Error description for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-description':
    'Refererat dokument (<code>{{documentId}}</code>) är av typ <code>{{actualType}}</code>. Enligt schemat kan refererade dokument endast vara av typ <AllowedTypes />.',
  /** Error title for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-title': 'Dokument av ogiltig typ',
  /** Error description for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-description':
    'Det refererade dokumentet kunde inte nås på grund av otillräckliga behörigheter',
  /** Error title for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-title': 'Otillräckliga behörigheter',
  /** Error description for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-description':
    'Det refererade dokumentet finns inte (ID: <code>{{documentId}}</code>). Du kan antingen ta bort referensen eller ersätta den med ett annat dokument.',
  /** Error title for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-title': 'Hittades inte',
  /** Label for button that clears the reference when it points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document.clear-button-label': 'Rensa',
  /** Error title for when the search for a reference failed. Note that the message sent by the backend may not be localized. */
  'inputs.reference.error.search-failed-title': 'Referenssökning misslyckades',
  /** Alternative text for the image shown in cross-dataset reference input */
  'inputs.reference.image-preview-alt-text': 'Bildförhandsvisning av refererat dokument',
  /** Description for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-description':
    '<strong>{{referencedDocument}}</strong> är publicerat och denna referens bör nu slutföras.',
  /** Title for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-title': 'Slutför referens',
  /** Description for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-description':
    '<strong>{{referencedDocument}}</strong> är publicerat och denna referens bör nu omvandlas till en stark referens.',
  /** Title for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-title': 'Omvandla till stark referens',
  /** Label for button that triggers the action that strengthen a reference */
  'inputs.reference.incomplete-reference.strengthen-button-label': 'Omvandla till stark referens',
  /** Label for button that triggers a retry attempt for reference metadata  */
  'inputs.reference.metadata-error.retry-button-label': 'Försök igen',
  /** Title for alert shown when reference metadata fails to be loaded */
  'inputs.reference.metadata-error.title': 'Kunde inte ladda referensmetadata',
  /** Message shown when no documents were found that matched the given search string */
  'inputs.reference.no-results-for-query': 'Inga resultat för <strong>“{{searchTerm}}”</strong>',
  /** Text for tooltip showing when a document was edited, using relative time (eg "how long ago was it edited?") */
  'inputs.reference.preview.edited-at-time': 'Redigerad <RelativeTime/>',
  /** Accessibility label for icon indicating that document does _not_ have any unpublished changes */
  'inputs.reference.preview.has-no-unpublished-changes-aria-label':
    'Inga opublicerade redigeringar',
  /** Accessibility label for icon indicating that document has unpublished changes */
  'inputs.reference.preview.has-unpublished-changes-aria-label': 'Redigerad',
  /** Accessibility label for icon indicating that document does _not_ have a published version */
  'inputs.reference.preview.is-not-published-aria-label': 'Inte publicerad',
  /** Accessibility label for icon indicating that document has a published version */
  'inputs.reference.preview.is-published-aria-label': 'Publicerad',
  /** Text for tooltip indicating that a document has no unpublished edits */
  'inputs.reference.preview.no-unpublished-edits': 'Inga opublicerade redigeringar',
  /** Text for tooltip indicating that a document has not yet been published */
  'inputs.reference.preview.not-published': 'Inte publicerad',
  /** Text for tooltip showing when a document was published, using relative time (eg "how long ago was it published?") */
  'inputs.reference.preview.published-at-time': 'Publicerad <RelativeTime/>',
  /** The referenced document no longer exist and might have been deleted (for weak references) */
  'inputs.reference.referenced-document-does-not-exist':
    'Det refererade dokumentet finns inte längre och kan ha blivit raderat (dokument-ID: <code>{{documentId}}</code>).',
  /** The referenced document could not be displayed to the user because of insufficient permissions */
  'inputs.reference.referenced-document-insufficient-permissions':
    'Det refererade dokumentet kunde inte nås på grund av otillräckliga behörigheter',
  /** Label for when the reference input is resolving the initial value for an item */
  'inputs.reference.resolving-initial-value': 'Löser initialt värde…',
  /** Placeholder shown in a reference input with no current value */
  'inputs.reference.search-placeholder': 'Skriv för att söka',
  /** Explanation of the consequences of leaving the reference as strong instead of weak */
  'inputs.reference.strength-mismatch.is-strong-consquences':
    'Det kommer inte att vara möjligt att radera det refererade dokumentet utan att först ta bort denna referens eller omvandla den till svag.',
  /** Description for alert shown when a reference is supposed to be weak, but the actual value is strong */
  'inputs.reference.strength-mismatch.is-strong-description':
    'Denna referens är <em>stark</em>, men enligt det aktuella schemat bör den vara <em>svag</em>.',
  /** Explanation of the consequences of leaving the reference as weak instead of strong */
  'inputs.reference.strength-mismatch.is-weak-consquences':
    'Detta gör det möjligt att radera det refererade dokumentet utan att först ta bort denna referens, vilket lämnar detta fält som refererar till ett icke-existerande dokument.',
  /** Description for alert shown when a reference is supposed to be strong, but the actual value is weak */
  'inputs.reference.strength-mismatch.is-weak-description':
    'Denna referens är <em>svag</em>, men enligt det aktuella schemat bör den vara <em>stark</em>.',
  /** Label for button that triggers the action that strengthens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.strengthen-button-label': 'Omvandla till stark referens',
  /** Title for alert shown when a reference is supposed to be weak/strong, but the actual value is the opposite of what it is supposed to be */
  'inputs.reference.strength-mismatch.title': 'Motsvarighet i referensstyrka',
  /** Label for button that triggers the action that weakens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.weaken-button-label': 'Omvandla till svag referens',
  /** Action message for generating the slug */
  'inputs.slug.action.generate': 'Generera',
  /** Loading message for when the input is actively generating a slug */
  'inputs.slug.action.generating': 'Genererar…',
  /** Error message for when the source to generate a slug from is missing */
  'inputs.slug.error.missing-source':
    'Källan saknas. Kontrollera källan på typ {{schemaType}} i schemat',
  /** Placeholder for an empty tag input */
  'inputs.tags.placeholder': 'Ange tagg och tryck på ENTER…',
  /** Placeholder for an empty tag input on touch devices */
  'inputs.tags.placeholder_touch': 'Ange tagg…',
  /** Convert to `{{targetType}}` */
  'inputs.untyped-value.convert-button.text': 'Konvertera till <code>{{targetType}}</code>',
  /** Encountered an object value without a <code>_type</code> property. */
  'inputs.untyped-value.description':
    'Stötte på ett objektvärde utan en <code>_type</code> egenskap.',
  /** Either remove the <code>name</code> property of the object declaration, or set <code>_type</code> property on items. */
  'inputs.untyped-value.details.description':
    'Antingen ta bort <code>name</code> egenskapen från objektdeklarationen, eller sätt en <code>_type</code> egenskap på objekten.',
  /** Current value (<code>object</code>): */
  'inputs.untyped-value.details.json-dump-prefix': 'Nuvarande värde (<code>objekt</code>):',
  /** The following types are valid here according to schema: */
  'inputs.untyped-value.details.multi-type-description':
    'Följande typer är giltiga här enligt schema:',
  /** Developer info */
  'inputs.untyped-value.details.title': 'Utvecklarinfo',
  /** Property value missing <code>_type</code> */
  'inputs.untyped-value.title': 'Egenskapsvärde saknar <code>_type</code>',
  /** Unset value */
  'inputs.untyped-value.unset-item-button.text': 'Avmarkera värde',

  /** The fallback explanation if no context is provided */
  'insufficient-permissions-message.not-authorized-explanation':
    'Du har inte behörighet att komma åt den här funktionen.',
  /** The explanation when unable to create any document at all */
  'insufficient-permissions-message.not-authorized-explanation_create-any-document':
    'Du har inte behörighet att skapa ett dokument.',
  /** The explanation when unable to create a particular document */
  'insufficient-permissions-message.not-authorized-explanation_create-document':
    'Du har inte behörighet att skapa detta dokument.',
  /** The explanation when unable to create a particular type of document */
  'insufficient-permissions-message.not-authorized-explanation_create-document-type':
    'Du har inte behörighet att skapa den här typen av dokument.',
  /** The explanation when unable to create a new reference in a document */
  'insufficient-permissions-message.not-authorized-explanation_create-new-reference':
    'Du har inte behörighet att skapa en ny referens.',
  /** The explanation when unable to delete a particular document */
  'insufficient-permissions-message.not-authorized-explanation_delete-document':
    'Du har inte behörighet att radera detta dokument.',
  /** The explanation when unable to discard changes in a particular document */
  'insufficient-permissions-message.not-authorized-explanation_discard-changes':
    'Du har inte behörighet att kassera ändringar i detta dokument.',
  /** The explanation when unable to duplicate a particular document */
  'insufficient-permissions-message.not-authorized-explanation_duplicate-document':
    'Du har inte behörighet att duplicera detta dokument.',
  /** The explanation when unable to publish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_publish-document':
    'Du har inte behörighet att publicera detta dokument.',
  /** The explanation when unable to unpublish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_unpublish-document':
    'Du har inte behörighet att avpublicera detta dokument.',
  /** Appears after the not-authorized message. Lists the current roles. */
  'insufficient-permissions-message.roles': 'Dina roller: <Roles/>',
  /** The title for the insufficient permissions message component */
  'insufficient-permissions-message.title': 'Otillräckliga behörigheter',

  /** Unexpected error: `{{error}}` */
  'member-field-error.unexpected-error': 'Oväntat fel: {{error}}',

  /** Button label for "Create new document" button */
  'new-document.button': 'Skapa',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are templates/types available for creation
   */
  'new-document.create-new-document-label': 'Nytt dokument…',
  /** Placeholder for the "filter" input within the new document menu */
  'new-document.filter-placeholder': 'Filtrera',
  /** Loading indicator text within the new document menu */
  'new-document.loading': 'Laddar…',
  /** Accessibility label for the list displaying options in the new document menu */
  'new-document.new-document-aria-label': 'Nytt dokument',
  /** Message for when there are no document type options in the new document menu */
  'new-document.no-document-types-found': 'Inga dokumenttyper hittades',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are no templates/types to create from
   */
  'new-document.no-document-types-label': 'Inga dokumenttyper',
  /** Message for when no results are found for a specific search query in the new document menu */
  'new-document.no-results': 'Inga resultat för <strong>{{searchQuery}}</strong>',
  /** Aria label for the button that opens the "Create new document" popover/dialog */
  'new-document.open-dialog-aria-label': 'Skapa nytt dokument',
  /** Title for "Create new document" dialog */
  'new-document.title': 'Skapa nytt dokument',

  /** Label for action to manage members of the current studio project */
  'presence.action.manage-members': 'Hantera medlemmar',
  /** Accessibility label for presence menu button */
  'presence.aria-label': 'Vem är här',
  /** Message description for when no one else is currently present */
  'presence.no-one-else-description':
    'Bjud in personer till projektet för att se deras online-status.',
  /** Message title for when no one else is currently present */
  'presence.no-one-else-title': 'Ingen annan är här',
  /** Message for when a user is not in a document (displayed in the global presence menu) */
  'presence.not-in-a-document': 'Inte i ett dokument',
  /** Tooltip content text for presence menu button */
  'presence.tooltip-content': undefined, // 'Who is here'

  /** Fallback title shown when a preview does not provide a title */
  'preview.default.title-fallback': 'Namnlös',
  /** Fallback preview value for types that have "no value" (eg null, undefined) */
  'preview.fallback.no-value': '(inget värde)',
  /** Alternative text for image being shown while image is being uploaded, in previews */
  'preview.image.file-is-being-uploaded.alt-text': 'Bilden som för närvarande laddas upp',

  /* Relative time, just now */
  'relative-time.just-now': 'just nu',

  /** Accessibility label to open search action when the search would go fullscreen (eg on narrower screens) */
  'search.action-open-aria-label': 'Öppna sökning',
  /** Action label for adding a search filter */
  'search.action.add-filter': 'Lägg till filter',
  /** Action label for clearing search filters */
  'search.action.clear-filters': 'Rensa filter',
  /** Label for action to clear recent searches */
  'search.action.clear-recent-searches': 'Rensa senaste sökningar',
  /** Accessibility label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-aria-label': 'Rensa markerade filter',
  /** Label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-label': 'Rensa',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to close the search */
  'search.action.close-search-aria-label': 'Stäng sökning',
  /** Accessibility label for filtering by document type */
  'search.action.filter-by-document-type-aria-label': 'Filtrera efter dokumenttyp',
  /** Accessibility action label for removing an already applied search filter */
  'search.action.remove-filter-aria-label': 'Ta bort filter',
  /**
   * Text displayed when either no document type(s) have been selected, or we need a fallback,
   * eg "Search for all types".
   */
  'search.action.search-all-types': 'Sök alla dokument',
  /**
   * Text displayed when we are able to determine one or more document types that will be used for
   * searching, and can fit within the space assigned by the design.
   */
  'search.action.search-specific-types': 'Sök efter {{types, list}}',
  /** Dialog title for action to select an asset of unknown type */
  'search.action.select-asset': 'Välj tillgång',
  /** Dialog title for action to select a file asset */
  'search.action.select-asset_file': 'Välj fil',
  /** Dialog title for action to select an image asset */
  'search.action.select-asset_image': 'Välj bild',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-aria-label_hide': 'Dölj filter',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-aria-label_show': 'Visa filter',
  /** Label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-label_hide': 'Dölj filter',
  /** Label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-label_show': 'Visa filter',
  /** Tooltip text for the global search button */
  'search.button.tooltip': 'Sök',
  /**
   * A list of provided types (use `list` formatter preferably).
   */
  'search.document-type-list': '{{types, list}}',
  /**
   * In the context of a list of document types - no filtering selection has been done,
   * thus the default is "all types".
   */
  'search.document-type-list-all-types': 'Alla typer',
  /** Accessibility label for list displaying the available document types */
  'search.document-types-aria-label': 'Dokumenttyper',
  /** Label for when no document types matching the filter are found */
  'search.document-types-no-matches-found': 'Inga träffar för {{filter}}',
  /** Description for error when a filter cannot be displayed, describes that you should check the schema */
  'search.error.display-filter-description':
    'Detta kan tyda på ogiltiga alternativ som definierats i ditt schema.',
  /** Title for error when a filter cannot be displayed (mainly a developer-oriented error) */
  'search.error.display-filter-title': 'Ett fel uppstod vid visning av detta filter.',
  /** Description for error when no valid asset source is found, describes that you should check the the current studio config */
  'search.error.no-valid-asset-source-check-config-description':
    'Vänligen se till att det är aktiverat i din studio konfigurationsfil.',
  /** Description for error when no valid asset source is found, describes that only the default asset is supported */
  'search.error.no-valid-asset-source-only-default-description':
    'För närvarande stöds endast standardkällan för tillgångar.',
  /** Title for error when no valid asset sources found */
  'search.error.no-valid-asset-source-title': 'Inga giltiga källor för tillgångar hittades.',
  /** Helpful description for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-help-description': 'Försök igen eller kontrollera din anslutning',
  /** Title label for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-title': 'Något gick fel vid sökningen',
  /**
   * Label for "All fields", a label that appears above the list of available fields when filtering.
   * If one or more document type has been chosen as filter, this label is replaced with a group of
   * fields per selected document type
   */
  'search.filter-all-fields-header': 'Alla fält',
  /** Label for the action of changing from one file to a different file in asset search filter */
  'search.filter-asset-change_file': 'Byt fil',
  /** Label for the action of changing from one image to a different image in asset search filter */
  'search.filter-asset-change_image': 'Byt bild',
  /** Label for the action of clearing the currently selected asset in an image/file filter */
  'search.filter-asset-clear': 'Rensa',
  /** Label for the action of selecting a file in asset search filter */
  'search.filter-asset-select_file': 'Välj fil',
  /** Label for the action of selecting an image in asset search filter */
  'search.filter-asset-select_image': 'Välj bild',
  /** Label for boolean filter - false */
  'search.filter-boolean-false': 'Falskt',
  /** Label for boolean filter - true */
  'search.filter-boolean-true': 'Sant',
  /** Accessibility label for list that lets you filter fields by title, when adding a new filter in search */
  'search.filter-by-title-aria-label': 'Filtrera efter titel',
  /** Accessibility label for date filter input */
  'search.filter-date-aria-label': 'Datum',
  /** Accessibility label for selecting end date on the date range search filter */
  'search.filter-date-range-end-date-aria-label': 'Slutdatum',
  /** Accessibility label for selecting start date on the date range search filter */
  'search.filter-date-range-start-date-aria-label': 'Startdatum',
  /**
   * Label for "Days"/"Months"/"Years" when selecting it as unit in "X days ago" search filter.
   * Capitalized, as it would be listed in a dropdown.
   */
  'search.filter-date-unit_days': 'Dagar',
  'search.filter-date-unit_months': 'Månader',
  'search.filter-date-unit_years': 'År',
  /** Accessibility label for selecting the unit (day/month/year) when adding "X days ago" search filter */
  'search.filter-date-unit-aria-label': 'Välj enhet',
  /** Accessibility label for the input value (days/months/years) when adding "X days ago" search filter */
  'search.filter-date-value-aria-label': 'Enhetsvärde',
  /** Label for "field description" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-description': 'Fältbeskrivning',
  /** Label for "field name" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-name': 'Fältnamn',
  /** Label for "Used in document types", a list of the document types a field appears in. Shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-used-in-document-types': 'Används i dokumenttyper',
  /** Label for when no fields/filters are found for the given term */
  'search.filter-no-matches-found': 'Inga träffar för {{filter}}',
  /** Placeholder value for maximum numeric value filter */
  'search.filter-number-max-value-placeholder': 'Maxvärde',
  /** Placeholder value for minimum numeric value filter */
  'search.filter-number-min-value-placeholder': 'Minvärde',
  /** Placeholder value for the number filter */
  'search.filter-number-value-placeholder': 'Värde',
  /** Placeholder for the "Filter" input, when narrowing possible fields/filters */
  'search.filter-placeholder': 'Filtrera',
  /** Label for the action of clearing the currently selected document in a reference filter */
  'search.filter-reference-clear': 'Rensa',
  /**
   * Label for "shared fields", a label that appears above a list of fields that all filtered types
   * have in common, when adding a new filter. For instance, if "book" and "employee" both have a
   * "title" field, this field would be listed under "shared fields".
   * */
  'search.filter-shared-fields-header': 'Delade fält',
  /** Placeholder value for the string filter */
  'search.filter-string-value-placeholder': 'Värde',
  /** Label/placeholder prompting user to select one of the predefined, allowed values for a string field */
  'search.filter-string-value-select-predefined-value': 'Välj…',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (singular) */
  'search.filters-aria-label_one': 'Filter',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (plural) */
  'search.filters-aria-label_other': 'Filter',
  /** Label for instructions on how to use the search - displayed when no recent searches are available */
  'search.instructions': 'Använd <ControlsIcon/> för att förfinna din sökning',
  /** Helpful description for when no search results are found */
  'search.no-results-help-description': 'Prova ett annat sökord eller justera dina filter',
  /** Title label for when no search results are found */
  'search.no-results-title': 'Inga resultat hittades',
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
    '<Field/> <Operator>har</Operator> <Value>{{count}} objekt</Value>',
  'search.operator.array-count-equal.description_other':
    '<Field/> <Operator>har</Operator> <Value>{{count}} objekt</Value>',
  'search.operator.array-count-equal.name': 'kvantitet är',
  /* Array should have a count greater than given filter value */
  'search.operator.array-count-gt.description_one':
    '<Field/> <Operator>har ></Operator> <Value>{{count}} objekt</Value>',
  'search.operator.array-count-gt.description_other':
    '<Field/> <Operator>har ></Operator> <Value>{{count}} objekt</Value>',
  'search.operator.array-count-gt.name': 'kvantitet större än',
  /* Array should have a count greater than or equal to the given filter value */
  'search.operator.array-count-gte.description_one':
    '<Field/> <Operator>har ≥</Operator> <Value>{{count}} objekt</Value>',
  'search.operator.array-count-gte.description_other':
    '<Field/> <Operator>har ≥</Operator> <Value>{{count}} objekt</Value>',
  'search.operator.array-count-gte.name': 'kvantitet större än eller lika med',
  /* Array should have a count less than given filter value */
  'search.operator.array-count-lt.description_one':
    '<Field/> <Operator>har <</Operator> <Value>{{count}} objekt</Value>',
  'search.operator.array-count-lt.description_other':
    '<Field/> <Operator>har <</Operator> <Value>{{count}} objekt</Value>',
  'search.operator.array-count-lt.name': 'kvantitet mindre än',
  /* Array should have a count less than or equal to the given filter value */
  'search.operator.array-count-lte.description_one':
    '<Field/> <Operator>har ≤</Operator> <Value>{{count}} objekt</Value>',
  'search.operator.array-count-lte.description_other':
    '<Field/> <Operator>har ≤</Operator> <Value>{{count}} objekt</Value>',
  'search.operator.array-count-lte.name': 'kvantitet mindre än eller lika med',
  /* Array should have a count that is not equal to the given filter value */
  'search.operator.array-count-not-equal.description_one':
    '<Field/> <Operator>har inte</Operator> <Value>{{count}} objekt</Value>',
  'search.operator.array-count-not-equal.description_other':
    '<Field/> <Operator>har inte</Operator> <Value>{{count}} objekt</Value>',
  'search.operator.array-count-not-equal.name': 'kvantitet är inte',
  /**
   * Array should have a count within the range of given filter values.
   * Gets passed `{{from}}` and `{{to}}` values.
   **/
  'search.operator.array-count-range.description':
    '<Field/> <Operator>har mellan</Operator> <Value>{{from}} → {{to}} objekt</Value>',
  'search.operator.array-count-range.name': 'kvantitet är mellan',
  /* Array should include the given value */
  'search.operator.array-list-includes.description':
    '<Field/> <Operator>inkluderar</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-includes.name': 'inkluderar',
  /* Array should not include the given value */
  'search.operator.array-list-not-includes.description':
    '<Field/> <Operator>inkluderar inte</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-not-includes.name': 'inkluderar inte',
  /* Array should include the given reference */
  'search.operator.array-reference-includes.description':
    '<Field/> <Operator>inkluderar</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-includes.name': 'inkluderar',
  /* Array should not include the given reference */
  'search.operator.array-reference-not-includes.description':
    '<Field/> <Operator>inkluderar inte</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-not-includes.name': 'inkluderar inte',
  /* Asset (file) should be the selected asset */
  'search.operator.asset-file-equal.description':
    '<Field/> <Operator>är</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-equal.name': 'är',
  /* Asset (file) should not be the selected asset */
  'search.operator.asset-file-not-equal.description':
    '<Field/> <Operator>är inte</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-not-equal.name': 'är inte',
  /* Asset (image) should be the selected asset */
  'search.operator.asset-image-equal.description':
    '<Field/> <Operator>är</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-equal.name': 'är',
  /* Asset (image) should not be the selected asset */
  'search.operator.asset-image-not-equal.description':
    '<Field/> <Operator>är inte</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-not-equal.name': 'är inte',
  /**
   * Boolean value should be the given filter value (true/false).
   * Context passed is `true` and `false`, allowing for more specific translations:
   * - `search.operator.boolean-equal.description_true`
   * - `search.operator.boolean-equal.description_false`
   */
  'search.operator.boolean-equal.description':
    '<Field/> <Operator>är</Operator> <Value>{{value}}</Value>',
  'search.operator.boolean-equal.name': 'är',
  /* Date should be after (later than) given filter value */
  'search.operator.date-after.description':
    '<Field/> <Operator>är efter</Operator> <Value>{{value}}</Value>',
  'search.operator.date-after.name': 'efter',
  /* Date should be before (earlier than) given filter value */
  'search.operator.date-before.description':
    '<Field/> <Operator>är före</Operator> <Value>{{value}}</Value>',
  'search.operator.date-before.name': 'före',
  /* Date should be the given filter value */
  'search.operator.date-equal.description':
    '<Field/> <Operator>är</Operator> <Value>{{value}}</Value>',
  'search.operator.date-equal.name': 'är',
  /* Date should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-last.description':
    '<Field/> <Operator>är inom de senaste</Operator> <Value>{{value}}</Value>',
  'search.operator.date-last.name': 'senaste',
  /* Date should not be the given filter value */
  'search.operator.date-not-equal.description':
    '<Field/> <Operator>är inte</Operator> <Value>{{value}}</Value>',
  'search.operator.date-not-equal.name': 'är inte',
  /* Date should be within the range of given filter values */
  'search.operator.date-range.description': '<Field/> <Operator>är mellan</Operator> <Value/>',
  'search.operator.date-range.name': 'är mellan',
  /* Date and time should be after (later than) given filter value */
  'search.operator.date-time-after.description':
    '<Field/> <Operator>är efter</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-after.name': 'efter',
  /* Date and time should be before (earlier than) given filter value */
  'search.operator.date-time-before.description':
    '<Field/> <Operator>är före</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-before.name': 'före',
  /* Date and time should be the given filter value */
  'search.operator.date-time-equal.description':
    '<Field/> <Operator>är</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-equal.name': 'är',
  /* Date and time should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-time-last.description':
    '<Field/> <Operator>är under de senaste</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-last.name': 'sista',
  /* Date and time should not be the given filter value */
  'search.operator.date-time-not-equal.description':
    '<Field/> <Operator>är inte</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-not-equal.name': 'är inte',
  /* Date and time should be within the range of given filter values */
  'search.operator.date-time-range.description': '<Field/> <Operator>är mellan</Operator> <Value/>',
  'search.operator.date-time-range.name': 'är mellan',
  /* Value should be defined */
  'search.operator.defined.description': '<Field/> <Operator>är</Operator> <Value>inte tom</Value>',
  'search.operator.defined.name': 'inte tom',
  /* Value should not be defined */
  'search.operator.not-defined.description': '<Field/> <Operator>är</Operator> <Value>tom</Value>',
  'search.operator.not-defined.name': 'tom',
  /* Number should be the given filter value */
  'search.operator.number-equal.description':
    '<Field/> <Operator>är</Operator> <Value>{{value}}</Value>',
  'search.operator.number-equal.name': 'är',
  /* Number should be greater than given filter value */
  'search.operator.number-gt.description':
    '<Field/> <Operator>></Operator> <Value>{{value}}</Value>',
  'search.operator.number-gt.name': 'större än',
  /* Number should be greater than or the given filter value */
  'search.operator.number-gte.description':
    '<Field/> <Operator>≥</Operator> <Value>{{value}}</Value>',
  'search.operator.number-gte.name': 'större än eller lika med',
  /* Number should be less than given filter value */
  'search.operator.number-lt.description':
    '<Field/> <Operator><</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lt.name': 'mindre än',
  /* Number should be less than or the given filter value */
  'search.operator.number-lte.description':
    '<Field/> <Operator>≤</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lte.name': 'mindre än eller lika med',
  /* Number should not be the given filter value */
  'search.operator.number-not-equal.description':
    '<Field/> <Operator>är inte</Operator> <Value>{{value}}</Value>',
  'search.operator.number-not-equal.name': 'är inte',
  /* Number should be within the range of given filter values */
  'search.operator.number-range.description':
    '<Field/> <Operator>är mellan</Operator> <Value>{{from}} → {{to}}</Value>',
  'search.operator.number-range.name': 'är mellan',
  /* Portable Text should contain the given filter value */
  'search.operator.portable-text-contains.description':
    '<Field/> <Operator>innehåller</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-contains.name': 'innehåller',
  /* Portable Text should be the given filter value */
  'search.operator.portable-text-equal.description':
    '<Field/> <Operator>är</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-equal.name': 'är',
  /* Portable Text should not contain the given filter value */
  'search.operator.portable-text-not-contains.description':
    '<Field/> <Operator>innehåller inte</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-contains.name': 'innehåller inte',
  /* Portable Text should not be the given filter value */
  'search.operator.portable-text-not-equal.description':
    '<Field/> <Operator>är inte</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-equal.name': 'är inte',
  /* References the given asset (file) */
  'search.operator.reference-asset-file.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-file.name': 'fil',
  /* References the given asset (image) */
  'search.operator.reference-asset-image.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-image.name': 'bild',
  /* References the given document */
  'search.operator.reference-document.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-document.name': 'dokument',
  /* Reference should be the given document */
  'search.operator.reference-equal.description':
    '<Field/> <Operator>är</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-equal.name': 'är',
  /* Reference should not be the given document */
  'search.operator.reference-not-equal.description':
    '<Field/> <Operator>är inte</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-not-equal.name': 'är inte',
  /* Slug contains the given value */
  'search.operator.slug-contains.description':
    '<Field/> <Operator>innehåller</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-contains.name': 'innehåller',
  /* Slug equals the given filter value */
  'search.operator.slug-equal.description':
    '<Field/> <Operator>är</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-equal.name': 'är',
  /* Slug does not contain the given value */
  'search.operator.slug-not-contains.description':
    '<Field/> <Operator>innehåller inte</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-contains.name': 'innehåller inte',
  /* Slug does not equal the given filter value */
  'search.operator.slug-not-equal.description':
    '<Field/> <Operator>är inte</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-equal.name': 'är inte',
  /* String contains the given filter value */
  'search.operator.string-contains.description':
    '<Field/> <Operator>innehåller</Operator> <Value>{{value}}</Value>',
  'search.operator.string-contains.name': 'innehåller',
  /* String equals the given filter value */
  'search.operator.string-equal.description':
    '<Field/> <Operator>är</Operator> <Value>{{value}}</Value>',
  'search.operator.string-equal.name': 'är',
  /* String equals one of the predefined allowed values */
  'search.operator.string-list-equal.description':
    '<Field/> <Operator>är</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-equal.name': 'är',
  /* String does not equal one of the predefined allowed values */
  'search.operator.string-list-not-equal.description':
    '<Field/> <Operator>är inte</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-not-equal.name': 'är inte',
  /* String does not contain the given filter value */
  'search.operator.string-not-contains.description':
    '<Field/> <Operator>innehåller inte</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-contains.name': 'innehåller inte',
  /* String does not equal the given filter value */
  'search.operator.string-not-equal.description':
    '<Field/> <Operator>är inte</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-equal.name': 'är inte',
  /** Label for the "Best match" search ordering type */
  'search.ordering.best-match-label': 'Bästa träff',
  /** Label for the "Created: Oldest first" search ordering type */
  'search.ordering.created-ascending-label': 'Skapad: Äldst först',
  /** Label for the "Created: Newest first" search ordering type */
  'search.ordering.created-descending-label': 'Skapad: Nyast först',
  /** Label for the "Updated: Oldest first" search ordering type */
  'search.ordering.updated-ascending-label': 'Uppdaterad: Äldst först',
  /** Label for the "Updated: Newest first" search ordering type */
  'search.ordering.updated-descending-label': 'Uppdaterad: Nyast först',
  /** Placeholder text for the global search input field */
  'search.placeholder': 'Sök',
  /** Accessibility label for the recent searches section, shown when no valid search terms has been given */
  'search.recent-searches-aria-label': 'Senaste sökningar',
  /** Label/heading shown for the recent searches section */
  'search.recent-searches-label': 'Senaste sökningar',
  /** Accessibility label for the search results section, shown when the user has typed valid terms */
  'search.search-results-aria-label': 'Sökresultat',

  /** Accessibility label for the navbar status button */
  'status-button.aria-label': undefined, // 'Configuration status'

  /** Description for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-description':
    'Dokumentets historiktransaktioner har inte påverkats.',
  /** Title for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-title':
    'Ett fel inträffade vid hämtning av dokumentändringar.',
  /** Error description for when the document doesn't have history */
  'timeline.error.no-document-history-description':
    'När du ändrar innehållet i dokumentet kommer dokumentversionerna att visas i denna meny.',
  /** Error title for when the document doesn't have history */
  'timeline.error.no-document-history-title': 'Ingen dokumenthistorik',
  /** Error prompt when revision cannot be loaded */
  'timeline.error.unable-to-load-revision': 'Kan inte ladda revision',
  /** Label for when the timeline item is the latest in the history */
  'timeline.latest': 'Senaste',
  /** Label for latest version for timeline menu dropdown */
  'timeline.latest-version': 'Senaste versionen',
  /** The aria-label for the list of revisions in the timeline */
  'timeline.list.aria-label': 'Dokumentrevisioner',
  /** Label for loading history */
  'timeline.loading-history': 'Laddar historik…',
  /** Label shown in review changes timeline when a document has been created */
  'timeline.operation.created': 'Skapad',
  /** Label shown in review changes timeline when a document has been created, with a timestamp */
  'timeline.operation.created_timestamp': 'Skapad: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was initially created */
  'timeline.operation.created-initial': 'Skapad',
  /** Label shown in review changes timeline when a document was initially created, with a timestamp */
  'timeline.operation.created-initial_timestamp': 'Skapad: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been deleted */
  'timeline.operation.deleted': 'Raderad',
  /** Label shown in review changes timeline when a document has been deleted, with a timestamp */
  'timeline.operation.deleted_timestamp': 'Raderad: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been discarded */
  'timeline.operation.draft-discarded': 'Utkast kasserat',
  /** Label shown in review changes timeline when a draft has been discarded, with a timestamp */
  'timeline.operation.draft-discarded_timestamp': 'Utkast kasserat: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been edited */
  'timeline.operation.edited-draft': 'Redigerad',
  /** Label shown in review changes timeline when a draft has been edited, with a timestamp */
  'timeline.operation.edited-draft_timestamp': 'Redigerad: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been edited live */
  'timeline.operation.edited-live': 'Redigerad live',
  /** Label shown in review changes timeline when a document has been edited live, with a timestamp */
  'timeline.operation.edited-live_timestamp': 'Redigerad live: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was published */
  'timeline.operation.published': 'Publicerad',
  /** Label shown in review changes timeline when a document was published, with a timestamp */
  'timeline.operation.published_timestamp': 'Publicerad: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was unpublished */
  'timeline.operation.unpublished': 'Opublicerad',
  /** Label shown in review changes timeline when a document was unpublished, with a timestamp */
  'timeline.operation.unpublished_timestamp': 'Opublicerad: {{timestamp, datetime}}',
  /**
   * Label for determining since which version the changes for timeline menu dropdown are showing.
   * Receives the time label as a parameter (`timestamp`).
   */
  'timeline.since': 'Sedan: {{timestamp, datetime}}',
  /** Label for missing change version for timeline menu dropdown are showing */
  'timeline.since-version-missing': 'Sedan: okänd version',

  /**Aria label for the action buttons in the PTE toolbar */
  'toolbar.portable-text.action-button-aria-label': undefined, // '{{action}}'

  /** Label for button showing the free trial days left */
  'user-menu.action.free-trial_one': '{{count}} dag kvar av provperioden',
  'user-menu.action.free-trial_other': '{{count}} dagar kvar av provperioden',
  /** Label for the button showed after trial ended */
  'user-menu.action.free-trial-finished': 'Uppgradera från gratis',
  /** Label for action to invite members to the current sanity project */
  'user-menu.action.invite-members': 'Bjud in medlemmar',
  /** Accessibility label for action to invite members to the current sanity project */
  'user-menu.action.invite-members-aria-label': 'Bjud in medlemmar',
  /** Label for action to manage the current sanity project */
  'user-menu.action.manage-project': 'Hantera projekt',
  /** Accessibility label for the action to manage the current project */
  'user-menu.action.manage-project-aria-label': 'Hantera projekt',
  /** Tooltip helper text when portable text annotation is disabled for empty block*/
  'user-menu.action.portable-text.annotation-disabled_empty-block':
    'Kan inte tillämpa {{name}} på tomt block',
  /** Tooltip helper text when portable text annotation is disabled for multiple blocks */
  'user-menu.action.portable-text.annotation-disabled_multiple-blocks':
    'Kan inte tillämpa {{name}} på flera block',
  /** Label for action to sign out of the current sanity project */
  'user-menu.action.sign-out': 'Logga ut',
  /** Title for appearance section for the current studio (dark / light / system scheme) */
  'user-menu.appearance-title': 'Utseende',
  /** Label for close menu button for user menu */
  'user-menu.close-menu': 'Stäng meny',
  /** Description for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-description': 'Använd mörkt utseende',
  /** Title for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-title': 'Mörk',
  /** Description for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-description': 'Använd ljust utseende',
  /** Title for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-title': 'Ljus',
  /** Description for using "system apparence" in the appearance user menu */
  'user-menu.color-scheme.system-description': 'Använd systemets utseende',
  /** Title for using system apparence in the appearance user menu */
  'user-menu.color-scheme.system-title': 'System',
  /** Title for locale section for the current studio */
  'user-menu.locale-title': 'Språk',
  /** Label for tooltip to show which provider the currently logged in user is using */
  'user-menu.login-provider': 'Inloggad med {{providerTitle}}',
  /** Label for open menu button for user menu */
  'user-menu.open-menu': 'Öppna meny',

  /**
   * Label for action to add a workspace (currently a developer-oriented action, as this will
   * lead to the documentation on workspace configuration)
   */
  'workspaces.action.add-workspace': 'Lägg till arbetsyta',
  /**
   * Label for action to choose a different workspace, in the case where you are not logged in,
   * have selected a workspace, and are faced with the authentication options for the selected
   * workspace. In other words, label for the action shown when you have reconsidered which
   * workspace to authenticate in.
   */
  'workspaces.action.choose-another-workspace': 'Välj en annan arbetsyta',
  /** Label for heading that indicates that you can choose your workspace */
  'workspaces.choose-your-workspace-label': 'Välj din arbetsyta',
  /** Label for the workspace menu */
  'workspaces.select-workspace-aria-label': 'Välj arbetsyta',
  /** Button label for opening the workspace switcher */
  'workspaces.select-workspace-label': 'Välj arbetsyta',
  /** Tooltip for the workspace menu */
  'workspaces.select-workspace-tooltip': 'Välj arbetsyta',
  /** Title for Workplaces dropdown menu */
  'workspaces.title': 'Arbetsytor',
})
