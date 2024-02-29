import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Menu item for deleting the asset */
  'asset-source.asset-list.menu.delete': 'Verwijderen',
  /** Menu item for showing where a particular asset is used */
  'asset-source.asset-list.menu.show-usage': 'Gebruik tonen',
  /** Header in usage dialog for file assets */
  'asset-source.asset-usage-dialog.header_file': 'Documenten die bestand gebruiken',
  /** Header in usage dialog for image assets */
  'asset-source.asset-usage-dialog.header_image': 'Documenten die afbeelding gebruiken',
  /** Text shown in usage dialog when loading documents using the selected asset */
  'asset-source.asset-usage-dialog.loading': 'Laden…',
  /** Text for cancel action in delete-asset dialog */
  'asset-source.delete-dialog.action.cancel': 'Annuleren',
  /** Text for "confirm delete" action in delete-asset dialog */
  'asset-source.delete-dialog.action.delete': 'Verwijderen',
  /** Dialog header for delete-asset dialog when deleting a file */
  'asset-source.delete-dialog.header_file': 'Bestand verwijderen',
  /** Dialog header for delete-asset dialog when deleting an image */
  'asset-source.delete-dialog.header_image': 'Afbeelding verwijderen',
  /** Text shown in delete dialog when loading documents using the selected asset */
  'asset-source.delete-dialog.loading': 'Laden…',
  /** Message confirming to delete *named* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_named':
    'U staat op het punt het bestand <strong>{{filename}}}</strong> en de bijbehorende metadata te verwijderen. Weet u het zeker?',
  /** Message confirming to delete *unnamed* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_unnamed':
    'U staat op het punt het bestand en de bijbehorende metadata te verwijderen. Weet u het zeker?',
  /** Message confirming to delete *named* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_named':
    'U staat op het punt de afbeelding <strong>{{filename}}</strong> en de bijbehorende metadata te verwijderen. Weet u het zeker?',
  /** Message confirming to delete *unnamed* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_unnamed':
    'U staat op het punt de afbeelding en de bijbehorende metadata te verwijderen. Weet u het zeker?',
  /** Alt text showing on image preview in delete asset dialog  */
  'asset-source.delete-dialog.usage-list.image-preview-alt': 'Voorbeeld van afbeelding',
  /** Warning message showing when *named* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_named':
    '{{filename}} kan niet worden verwijderd omdat het in gebruik is. Om dit bestand te verwijderen, moet u eerst alle gebruik ervan verwijderen.',
  /** Warning message showing when *unnamed* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_unnamed':
    'Dit bestand kan niet worden verwijderd omdat het in gebruik is. Om het te verwijderen, moet u eerst alle gebruik ervan verwijderen.',
  /** Warning message showing when *named* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_named':
    '{{filename}} kan niet worden verwijderd omdat het in gebruik is. Om deze afbeelding te verwijderen, moet u eerst alle gebruik ervan verwijderen.',
  /** Warning message showing when *unnamed* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_unnamed':
    'Deze afbeelding kan niet worden verwijderd omdat het in gebruik is. Om het te verwijderen, moet u eerst alle gebruik ervan verwijderen.',
  /** Text shown when the list of assets only include a specific set of types */
  'asset-source.dialog.accept-message':
    'Alleen assets van geaccepteerde typen worden getoond: <strong>{{acceptTypes}}</strong>',
  /** Keys shared between both image asset source and file asset source */
  /** Select asset dialog title for files */
  'asset-source.dialog.default-title_file': 'Selecteer bestand',
  /** Select asset dialog title for images */
  'asset-source.dialog.default-title_image': 'Selecteer afbeelding',
  /** Select asset dialog load more items */
  'asset-source.dialog.load-more': 'Meer laden',
  /** Text shown when selecting a file but there's no files to select from */
  'asset-source.dialog.no-assets_file': 'Geen bestanden',
  /** Text shown when selecting an image but there's no images to select from */
  'asset-source.dialog.no-assets_image': 'Geen afbeeldingen',
  'asset-source.file.asset-list.action.delete.disabled-cannot-delete-current-file':
    'Kan het momenteel geselecteerde bestand niet verwijderen',
  'asset-source.file.asset-list.action.delete.text': 'Verwijderen',
  'asset-source.file.asset-list.action.delete.title': 'Bestand verwijderen',
  'asset-source.file.asset-list.action.select-file.title': 'Selecteer het bestand {{filename}}',
  'asset-source.file.asset-list.action.show-usage.title': 'Gebruik tonen',
  'asset-source.file.asset-list.delete-failed': 'Bestand kon niet worden verwijderd',
  'asset-source.file.asset-list.delete-successful': 'Bestand is verwijderd',
  'asset-source.file.asset-list.header.date-added': 'Datum toegevoegd',
  /** File asset source */
  'asset-source.file.asset-list.header.filename': 'Bestandsnaam',
  'asset-source.file.asset-list.header.size': 'Grootte',
  'asset-source.file.asset-list.header.type': 'Type',
  /** Text displayed on button or menu invoking the file asset source */
  'asset-source.file.title': 'Geüploade bestanden',
  'asset-source.image.asset-list.delete-failed': 'Afbeelding kon niet worden verwijderd',
  /** Image asset source */
  'asset-source.image.asset-list.delete-successful': 'Afbeelding is verwijderd',
  /** Text displayed on button or menu invoking the image asset source */
  'asset-source.image.title': 'Geüploade afbeeldingen',
  'asset-source.usage-list.documents-using-file_named_one':
    'Eén document gebruikt bestand <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-file_named_other':
    '{{count}} documenten gebruiken bestand <code>{{filename}}</code>',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *named* file **/
  'asset-source.usage-list.documents-using-file_named_zero':
    'Geen documenten gebruiken bestand <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-file_unnamed_one': 'Eén document gebruikt dit bestand',
  'asset-source.usage-list.documents-using-file_unnamed_other':
    '{{count}} documenten gebruiken dit bestand',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *unnamed* file **/
  'asset-source.usage-list.documents-using-file_unnamed_zero':
    'Geen documenten gebruiken dit bestand',
  'asset-source.usage-list.documents-using-image_named_one':
    'Eén document gebruikt afbeelding <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-image_named_other':
    '{{count}} documenten gebruiken afbeelding <code>{{filename}}</code>',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *named* image **/
  'asset-source.usage-list.documents-using-image_named_zero':
    'Geen documenten gebruiken afbeelding <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-image_unnamed_one':
    'Eén document gebruikt deze afbeelding',
  'asset-source.usage-list.documents-using-image_unnamed_other':
    '{{count}} documenten gebruiken deze afbeelding',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *unnamed* image **/
  'asset-source.usage-list.documents-using-image_unnamed_zero':
    'Geen documenten gebruiken deze afbeelding',

  /** Action message for navigating to next month */
  'calendar.action.go-to-next-month': 'Ga naar de volgende maand',
  /** Action message for navigating to next year */
  'calendar.action.go-to-next-year': 'Ga naar het volgende jaar',
  /** Action message for navigating to previous month */
  'calendar.action.go-to-previous-month': 'Ga naar de vorige maand',
  /** Action message for navigating to previous year */
  'calendar.action.go-to-previous-year': 'Ga naar het vorige jaar',
  /* Label for navigating the calendar to "today", without _selecting_ today. Short form, eg `Today`, not `Go to today` */
  'calendar.action.go-to-today': 'Vandaag',
  /* Accessibility label for navigating the calendar to "today", without _selecting_ today */
  'calendar.action.go-to-today-aria-label': 'Ga naar vandaag',
  /* Label for navigating the calendar to "tomorrow", without _selecting_ tomorrow. Short form, eg `Tomorrow`, not `Go to tomorrow` */
  'calendar.action.go-to-tomorrow': 'Morgen',
  /* Label for navigating the calendar to "yesterday", without _selecting_ yesterday. Short form, eg `Yesterday`, not `Go to yesterday` */
  'calendar.action.go-to-yesterday': 'Gisteren',
  /** Label for switch that controls whether or not to include time in given timestamp */
  'calendar.action.include-time-label': 'Tijd opnemen',
  /** Action message for selecting the hour */
  'calendar.action.select-hour': 'Selecteer uur',
  /** Action message for selecting the minute */
  'calendar.action.select-minute': 'Selecteer minuut',
  /** Action message for setting to the current time */
  'calendar.action.set-to-current-time': 'Instellen op de huidige tijd',
  /** Label for selecting an hour preset. Receives a `time` param as a string on hh:mm format and a `date` param as a Date instance denoting the preset date */
  'calendar.action.set-to-time-preset': '{{time}} op {{date, datetime}}',
  /** Error message displayed in calendar when entered date is not the correct format */
  'calendar.error.must-be-in-format':
    'Moet in het formaat <Emphasis>{{exampleDate}}</Emphasis> zijn',
  /** Month name for April */
  'calendar.month-names.april': 'April',
  /** Month name for August */
  'calendar.month-names.august': 'Augustus',
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
  'calendar.month-names.march': 'Maart',
  /** Month name for May */
  'calendar.month-names.may': 'Mei',
  /** Month name for November */
  'calendar.month-names.november': 'November',
  /** Month name for October */
  'calendar.month-names.october': 'Oktober',
  /** Month name for September */
  'calendar.month-names.september': 'September',
  /** Short weekday name for Friday */
  'calendar.weekday-names.short.friday': 'Vrij',
  /** Short weekday name for Monday */
  'calendar.weekday-names.short.monday': 'Ma',
  /** Short weekday name for Saturdayday */
  'calendar.weekday-names.short.saturday': 'Zat',
  /** Short weekday name for Sunday */
  'calendar.weekday-names.short.sunday': 'Zon',
  /** Short weekday name for Thursday */
  'calendar.weekday-names.short.thursday': 'Do',
  /** Short weekday name for Tuesday */
  'calendar.weekday-names.short.tuesday': 'Di',
  /** Short weekday name for Wednesday */
  'calendar.weekday-names.short.wednesday': 'Woe',

  /** Label for the close button label in Review Changes pane */
  'changes.action.close-label': 'Review wijzigingen sluiten',
  /** Cancel label for revert button prompt action */
  'changes.action.revert-all-cancel': 'Annuleren',
  /** Revert all confirm label for revert button action - used on prompt button + review changes pane */
  'changes.action.revert-all-confirm': 'Alles terugdraaien',
  /** Prompt for confirming revert change (singular) label for field change action */
  'changes.action.revert-changes-confirm-change_one': 'Wijziging terugdraaien',
  /** Revert for confirming revert (plural) label for field change action */
  'changes.action.revert-changes-confirm-change_other': 'Wijzigingen terugdraaien',
  /** Prompt for reverting changes for a field change */
  'changes.action.revert-changes-description':
    'Weet u zeker dat u de wijzigingen wilt terugdraaien?',
  /** Prompt for reverting changes for a group change, eg multiple changes */
  'changes.action.revert-changes-description_one':
    'Weet u zeker dat u de wijziging wilt terugdraaien?',
  /** Label for when the action of the change was to set something that was previously empty, eg a field was given a value, an array item was added, an asset was selected or similar */
  'changes.added-label': 'Toegevoegd',
  /** Array diff: An item was added in a given position (`{{position}}`) */
  'changes.array.item-added-in-position': 'Toegevoegd op positie {{position}}',
  'changes.array.item-moved_down_one': '1 positie omlaag verplaatst',
  'changes.array.item-moved_down_other': '{{count}} posities omlaag verplaatst',
  /**
   * Array diff: An item was moved within the array.
   * Receives `{{count}}` representing number of positions it moved.
   * Context is the direction of the move, either `up` or `down`.
   */
  'changes.array.item-moved_up_one': '1 positie omhoog verplaatst',
  'changes.array.item-moved_up_other': '{{count}} posities omhoog verplaatst',
  /** Array diff: An item was removed from a given position (`{{position}}`) */
  'changes.array.item-removed-from-position': 'Verwijderd van positie {{position}}',
  /** Accessibility label for the "change bar" shown when there are edits on a field-level */
  'changes.change-bar.aria-label': 'Wijzigingen beoordelen',
  /** Label for when the action of the change was _not_ an add/remove, eg a text field changed value, an image was changed from one asset to another or similar */
  'changes.changed-label': 'Veranderd',
  /** Label and text for tooltip that indicates the authors of the changes */
  'changes.changes-by-author': 'Wijzigingen door',
  /** Additional text shown in development mode when a diff component crashes during rendering */
  'changes.error-boundary.developer-info':
    'Controleer de ontwikkelaarsconsole voor meer informatie',
  /** Text shown when a diff component crashes during rendering, triggering the error boundary */
  'changes.error-boundary.title':
    'Het weergeven van de wijzigingen in dit veld veroorzaakte een fout',
  /** Error message shown when the value of a field is not the expected one */
  'changes.error.incorrect-type-message':
    'Waarde fout: Waarde is van type "<code>{{actualType}}</code>", verwacht "<code>{{expectedType}}</code>"',
  /** File diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.file.meta-info-fallback-title': 'Zonder titel',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.crop-changed': 'Uitsnede veranderd',
  /** Image diff: Text shown if the previous image asset was deleted (shouldn't theoretically happen) */
  'changes.image.deleted': 'Afbeelding verwijderd',
  /** Image diff: Text shown if the image failed to be loaded when previewing it */
  'changes.image.error-loading-image': 'Fout bij het laden van afbeelding',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.hotspot-changed': 'Hotspot veranderd',
  /** Image diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.image.meta-info-fallback-title': 'Zonder titel',
  /** Image diff: Text shown if no asset has been set for the field (but has metadata changes) */
  'changes.image.no-asset-set': 'Geen afbeelding ingesteld',
  /** Image diff: Text shown when the from/to state has/had no image */
  'changes.image.no-image-placeholder': '(geen afbeelding)',
  /** Label for the "from" value in the change inspector */
  'changes.inspector.from-label': 'Van',
  /** Label for the "meta" (field path, action etc) information in the change inspector */
  'changes.inspector.meta-label': 'Meta',
  /** Label for the "to" value in the change inspector */
  'changes.inspector.to-label': 'Naar',
  /** Loading author of change in the differences tooltip in the review changes pane */
  'changes.loading-author': 'Laden…',
  /** Loading changes in Review Changes Pane */
  'changes.loading-changes': 'Wijzigingen laden…',
  /** No Changes description in the Review Changes pane */
  'changes.no-changes-description':
    'Bewerk het document of selecteer een oudere versie in de tijdlijn om een lijst van wijzigingen te zien verschijnen in dit paneel.',
  /** No Changes title in the Review Changes pane */
  'changes.no-changes-title': 'Er zijn geen wijzigingen',
  /** Portable Text diff: An annotation was added */
  'changes.portable-text.annotation_added': 'Annotatie toegevoegd',
  /** Portable Text diff: An annotation was changed */
  'changes.portable-text.annotation_changed': 'Annotatie veranderd',
  /** Portable Text diff: An annotation was removed */
  'changes.portable-text.annotation_removed': 'Annotatie verwijderd',
  /** Portable Text diff: An annotation was left unchanged */
  'changes.portable-text.annotation_unchanged': 'Annotatie ongewijzigd',
  /** Portable Text diff: A block changed from one style to another (eg `normal` to `h1` or similar) */
  'changes.portable-text.block-style-changed':
    'Blokstijl veranderd van "{{fromStyle}}" naar "{{toStyle}}"',
  /** Portable Text diff: Change formatting of text (setting/unsetting marks, eg bold/italic etc) */
  'changes.portable-text.changed-formatting': 'Opmaak gewijzigd',
  /** Portable Text diff: An empty inline object is part of a change */
  'changes.portable-text.empty-inline-object': 'Leeg {{inlineObjectType}}',
  /** Portable Text diff: An empty object is the result of adding/removing an annotation */
  'changes.portable-text.empty-object-annotation': 'Leeg {{annotationType}}',
  /** Portable Text diff: Added a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_added': 'Lege tekst toegevoegd',
  /** Portable Text diff: Changed a block that contained no text (eg empty block) */
  'changes.portable-text.empty-text_changed': 'Lege tekst gewijzigd',
  /** Portable Text diff: Removed a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_removed': 'Lege tekst verwijderd',
  /** Portable Text diff: An inline object was added */
  'changes.portable-text.inline-object_added': 'Inline object toegevoegd',
  /** Portable Text diff: An inline object was changed */
  'changes.portable-text.inline-object_changed': 'Inline object gewijzigd',
  /** Portable Text diff: An inline object was removed */
  'changes.portable-text.inline-object_removed': 'Inline object verwijderd',
  /** Portable Text diff: An inline object was left unchanged */
  'changes.portable-text.inline-object_unchanged': 'Onveranderd inline object',
  /** Portable Text diff: Added a chunk of text */
  'changes.portable-text.text_added': 'Tekst toegevoegd',
  /** Portable Text diff: Removed a chunk of text */
  'changes.portable-text.text_removed': 'Tekst verwijderd',
  /** Portable Text diff: Annotation has an unknown schema type */
  'changes.portable-text.unknown-annotation-schema-type': 'Onbekend schema type',
  /** Portable Text diff: Inline object has an unknown schema type */
  'changes.portable-text.unknown-inline-object-schema-type': 'Onbekend schema type',
  /** Label for when the action of the change was a removal, eg a field was cleared, an array item was removed, an asset was deselected or similar */
  'changes.removed-label': 'Verwijderd',
  /** Title for the Review Changes pane */
  'changes.title': 'Wijzigingen beoordelen',

  /** --- Common components --- */
  /** Tooltip text for context menu buttons */
  'common.context-menu-button.tooltip': 'Toon meer',
  /** Default text for dialog cancel button */
  'common.dialog.cancel-button.text': 'Annuleren',
  /** Default text for dialog confirm button */
  'common.dialog.confirm-button.text': 'Bevestigen',
  /** Default text in shared loader text / spinner lockup */
  'common.loading': 'Laden',

  /** --- Configuration issues --- */
  /** Tooltip displayed on configuration issues button */
  'configuration-issues.button.tooltip': 'Configuratieproblemen gevonden',

  /** The fallback title for an ordering menu item if no localized titles are provided. */
  'default-menu-item.fallback-title': 'Sorteer op {{title}}',

  /** Title for the default ordering/SortOrder if no orderings are provided and the caption field is found */
  'default-orderings.caption': 'Sorteren op bijschrift',
  /** Title for the default ordering/SortOrder if no orderings are provided and the description field is found */
  'default-orderings.description': 'Sorteren op beschrijving',
  /** Title for the default ordering/SortOrder if no orderings are provided and the header field is found */
  'default-orderings.header': 'Sorteren op koptekst',
  /** Title for the default ordering/SortOrder if no orderings are provided and the heading field is found */
  'default-orderings.heading': 'Sorteren op kop',
  /** Title for the default ordering/SortOrder if no orderings are provided and the label field is found */
  'default-orderings.label': 'Sorteren op label',
  /** Title for the default ordering/SortOrder if no orderings are provided and the name field is found */
  'default-orderings.name': 'Sorteren op naam',
  /** Title for the default ordering/SortOrder if no orderings are provided and the title field is found */
  'default-orderings.title': 'Sorteren op titel',

  /** Label to show in the document footer indicating the last edited date of the document */
  'document-status.edited': 'Bewerkt {{date}}',
  /** Label to show in the document footer indicating the document is not published*/
  'document-status.not-published': 'Niet gepubliceerd',
  /** Label to show in the document footer indicating the published date of the document */
  'document-status.published': 'Gepubliceerd {{date}}',

  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.duplicate-keys-alert.details.additional-description':
    'De waarde van de <code>_key</code> eigenschap moet een unieke string zijn.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property of each elements has been generated non-uniquely. */
  'form.error.duplicate-keys-alert.details.description':
    'Dit gebeurt meestal wanneer items worden gecreëerd met behulp van een API-client, en de <code>_key</code> eigenschap van elk element is gegenereerd op een niet-unieke manier.',
  /** Developer info */
  'form.error.duplicate-keys-alert.details.title': 'Informatie voor ontwikkelaars',
  /** Generate unique keys */
  'form.error.duplicate-keys-alert.generate-button.text': 'Genereer unieke sleutels',
  /** Several items in this list share the same identifier (key). Every item must have an unique identifier. */
  'form.error.duplicate-keys-alert.summary':
    'Verschillende items in deze lijst delen dezelfde identificator (sleutel). Elk item moet een unieke identificator hebben.',
  /** Non-unique keys */
  'form.error.duplicate-keys-alert.title': 'Niet-unieke sleutels',
  /** Error text shown when a field with a given name cannot be found in the schema or is conditionally hidden but explicitly told to render  */
  'form.error.field-not-found':
    'Veld "{{fieldName}}" niet gevonden onder leden – controleer of het is gedefinieerd in het schema en dat het niet conditioneel verborgen is.',
  /** Add missing keys */
  'form.error.missing-keys-alert.add-button.text': 'Ontbrekende sleutels toevoegen',
  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.missing-keys-alert.details.additional-description':
    'De waarde van de <code>_key</code> eigenschap moet een unieke string zijn.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property has not been included. */
  'form.error.missing-keys-alert.details.description':
    'Dit gebeurt meestal wanneer items worden gemaakt met behulp van een API-client, en de <code>_key</code> eigenschap niet is opgenomen.',
  /** Developer info */
  'form.error.missing-keys-alert.details.title': 'Informatie voor ontwikkelaars',
  /** Some items in the list are missing their keys. This must be fixed in order to edit the list. */
  'form.error.missing-keys-alert.summary':
    'Sommige items in de lijst missen hun sleutels. Dit moet worden opgelost om de lijst te kunnen bewerken.',
  /** Missing keys */
  'form.error.missing-keys-alert.title': 'Ontbrekende sleutels',
  /** This usually happens when items are created using an API client, or when a custom input component has added invalid data to the list. */
  'form.error.mixed-array-alert.details.description':
    'Dit gebeurt meestal wanneer items worden gemaakt met behulp van een API-client, of wanneer een aangepast invoerelement ongeldige gegevens aan de lijst heeft toegevoegd.',
  /** Developer info */
  'form.error.mixed-array-alert.details.title': 'Informatie voor ontwikkelaars',
  /**  Remove non-object values */
  'form.error.mixed-array-alert.remove-button.text': 'Verwijder niet-objectwaarden',
  /** Some items in this list are not objects. This must be fixed in order to edit the list. */
  'form.error.mixed-array-alert.summary':
    'Sommige items in deze lijst zijn geen objecten. Dit moet worden opgelost om de lijst te kunnen bewerken.',
  /** Invalid list values */
  'form.error.mixed-array-alert.title': 'Ongeldige lijstwaarden',
  /** Error text shown when form is unable to find an array item at a given indexed path */
  'form.error.no-array-item-at-index':
    'Geen array-item op index <code>{{index}}</code> gevonden op pad <code>{{path}}</code>',
  /** Error text shown when form is unable to find an array item at a given keyed path */
  'form.error.no-array-item-at-key':
    'Geen array-item met `_key` <code>"{{key}}"</code> gevonden op pad <code>{{path}}</code>',
  /** Form field deprecated label */
  'form.field.deprecated-label': 'verouderd',
  /** Fallback title shown above field if it has no defined title */
  'form.field.untitled-field-label': 'Zonder titel',
  /** Fallback title shown above fieldset if it has no defined title */
  'form.field.untitled-fieldset-label': 'Zonder titel',
  /** Accessibility label for the icon that indicates the field has a validation error */
  'form.validation.has-error-aria-label': 'Heeft een fout',
  /** Accessibility label for the icon that indicates the field has validation information */
  'form.validation.has-info-aria-label': 'Heeft informatie',
  /** Accessibility label for the icon that indicates the field has a validation warning */
  'form.validation.has-warning-aria-label': 'Heeft een waarschuwing',
  /** Text shown when summarizing validation information, when the field has one or more errors */
  'form.validation.summary.errors-count_one': '{{count}} fout',
  'form.validation.summary.errors-count_other': '{{count}} fouten',
  /** Text shown when summarizing validation information, when the field has one or more warnings */
  'form.validation.summary.warnings-count_one': '{{count}} waarschuwing',
  'form.validation.summary.warnings-count_other': '{{count}} waarschuwingen',

  /** Tooltip for free trial navbar button indicating remaining days */
  'free-trial.tooltip.days-count_one': '{{count}} dag over in proefperiode',
  'free-trial.tooltip.days-count_other': '{{count}} dagen over in proefperiode',
  /** Tooltip for free trial navbar button, once trial has ended */
  'free-trial.tooltip.trial-finished': 'Upgrade uw project',

  /**
   * Label for "contact sales" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.contact-sales': 'Contact opnemen met verkoop',
  /**
   * Label for "help and support" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.help-and-support': 'Hulp en ondersteuning',
  /**
   * Label for "join our community" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.join-our-community': 'Word lid van onze gemeenschap',
  /** Information for what the latest sanity version is */
  'help-resources.latest-sanity-version': 'De nieuwste versie is {{latestVersion}}',
  /** Information for what studio version the current studio is running */
  'help-resources.studio-version': 'Sanity Studio versie {{studioVersion}}',
  /** Title for help and resources menus */
  'help-resources.title': 'Hulp en bronnen',

  /** Text for button to cancel an ongoing upload */
  'input.files.common.cancel-upload': 'Annuleren',
  /** Text for file input button in upload placeholder */
  'input.files.common.upload-placeholder.file-input-button.text': 'Uploaden',
  /** Uploading <FileName/> */
  'input.files.common.upload-progress': 'Uploaden <FileName/>',
  /** The referenced document cannot be opened, because the URL failed to be resolved */
  'input.reference.document-cannot-be-opened.failed-to-resolve-url':
    'Dit document kan niet worden geopend (URL naar Studio kan niet worden opgelost)',

  /** Label for adding item after a specific array item */
  'inputs.array.action.add-after': 'Voeg item toe na',
  /** Label for adding item before a specific array item */
  'inputs.array.action.add-before': 'Voeg item toe voor',
  /** Label for adding array item action when the schema allows for only one schema type */
  'inputs.array.action.add-item': 'Voeg item toe',
  /**
   * Label for adding one array item action when the schema allows for multiple schema types,
   * eg. will prompt the user to select a type once triggered
   */
  'inputs.array.action.add-item-select-type': 'Voeg item toe...',
  /** Array drag handle button tooltip */
  'inputs.array.action.drag.tooltip': 'Slepen om te herschikken',
  /** Label for duplicating an array item  */
  'inputs.array.action.duplicate': 'Dupliceren',
  /** Label for editing the item of a specific type, eg "Edit Person" */
  'inputs.array.action.edit': 'Bewerk {{itemTypeTitle}}',
  /** Label for removing an array item action  */
  'inputs.array.action.remove': 'Verwijderen',
  /** Label for removing action when an array item has an error  */
  'inputs.array.action.remove-invalid-item': 'Verwijderen',
  /** Label for viewing the item of a specific type, eg "View Person" */
  'inputs.array.action.view': 'Bekijk {{itemTypeTitle}}',
  /** Error description for the array item tooltip that explains that the current item can still be moved or deleted but not edited since the schema definition is not found */
  'inputs.array.error.can-delete-but-no-edit-description':
    'U kunt dit item nog steeds verplaatsen of verwijderen, maar het kan niet worden bewerkt omdat de schema-definitie voor het type nergens te vinden is.',
  /** Error label for toast when array could not resolve the initial value */
  'inputs.array.error.cannot-resolve-initial-value-title':
    'Kan de initiële waarde voor type niet oplossen: {{schemaTypeTitle}}: {{errorMessage}}.',
  /** Error label for toast when trying to upload one array item of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_one':
    'Het volgende item kan niet worden geüpload omdat er geen bekende conversie is van contenttype naar array-item:',
  /** Error label for toast when trying to upload multiple array items of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_other':
    'De volgende items kunnen niet worden geüpload omdat er geen bekende conversie is van contenttypes naar array-item:',
  /** Error description for the array item tooltip that explains that the current type item is not valid for the list  */
  'inputs.array.error.current-schema-not-declare-description':
    'Het huidige schema verklaart items van type <code>{{typeName}}</code> niet als geldig voor deze lijst. Dit kan betekenen dat het type is verwijderd als een geldig itemtype, of dat iemand anders het heeft toegevoegd aan hun eigen lokale schema dat nog niet is uitgerold.',
  /** Error description to show how the item is being represented in the json format */
  'inputs.array.error.json-representation-description': 'JSON-representatie van dit item:',
  /** Error description for the array item tooltip that explains what the error means with more context */
  'inputs.array.error.type-is-incompatible-prompt':
    'Item van type <code>{{typeName}}</code> niet geldig voor deze lijst',
  /** Error title for when an item type within an array input is incompatible, used in the tooltip */
  'inputs.array.error.type-is-incompatible-title': 'Waarom gebeurt dit?',
  /** Error label for unexpected errors in the Array Input */
  'inputs.array.error.unexpected-error': 'Onverwachte fout: {{error}}',
  /** Label for when the array input doesn't have any items */
  'inputs.array.no-items-label': 'Geen items',
  /** Label for read only array fields */
  'inputs.array.read-only-label': 'Dit veld is alleen-lezen',
  /** Label for when the array input is resolving the initial value for the item */
  'inputs.array.resolving-initial-value': 'Initiële waarde oplossen…',
  /** Placeholder value for datetime input */
  'inputs.datetime.placeholder': 'bijv. {{example}}',
  /** Acessibility label for button to open file options menu */
  'inputs.file.actions-menu.file-options.aria-label': 'Bestandsopties menu openen',
  /** Browse */
  'inputs.file.browse-button.text': 'Bladeren',
  /** Select file */
  'inputs.file.dialog.title': 'Selecteer bestand',
  /** Unknown member kind: `{{kind}}` */
  'inputs.file.error.unknown-member-kind': 'Onbekend lidtype: {{kind}}',
  /** The value of this field is not a valid file. Resetting this field will let you choose a new file. */
  'inputs.file.invalid-file-warning.description':
    'De waarde van dit veld is geen geldig bestand. Dit veld resetten laat u een nieuw bestand kiezen.',
  /** Reset value */
  'inputs.file.invalid-file-warning.reset-button.text': 'Waarde resetten',
  /** Invalid file value */
  'inputs.file.invalid-file-warning.title': 'Ongeldige bestandswaarde',
  /** Select */
  'inputs.file.multi-browse-button.text': 'Selecteren',
  /** The upload could not be completed at this time. */
  'inputs.file.upload-failed.description': 'De upload kon op dit moment niet worden voltooid.',
  /** Upload failed */
  'inputs.file.upload-failed.title': 'Upload mislukt',
  /** Clear field */
  'inputs.files.common.actions-menu.clear-field.label': 'Veld wissen',
  /** Copy URL */
  'inputs.files.common.actions-menu.copy-url.label': 'URL kopiëren',
  /** Download */
  'inputs.files.common.actions-menu.download.label': 'Downloaden',
  /** The URL is copied to the clipboard */
  'inputs.files.common.actions-menu.notification.url-copied':
    'De URL is naar het klembord gekopieerd',
  /** Replace */
  'inputs.files.common.actions-menu.replace.label': 'Vervangen',
  /** Upload */
  'inputs.files.common.actions-menu.upload.label': 'Uploaden',
  /** Drop to upload */
  'inputs.files.common.drop-message.drop-to-upload': 'Loslaten om te uploaden',
  /** Drop to upload `{{count}}` file */
  'inputs.files.common.drop-message.drop-to-upload-multi_one':
    'Loslaten om {{count}} bestand te uploaden',
  /** Drop to upload `{{count}}` files */
  'inputs.files.common.drop-message.drop-to-upload-multi_other':
    'Loslaten om {{count}} bestanden te uploaden',
  /** Can't upload this file here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_one':
    'Dit bestand kan hier niet geüpload worden',
  /** Can't upload any of these files here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_other':
    'Geen van deze bestanden kan hier geüpload worden',
  /** `{{count}}` file can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_one':
    '{{count}} bestand kan hier niet geüpload worden',
  /** `{{count}}` files can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_other':
    '{{count}} bestanden kunnen hier niet geüpload worden',
  /** Cannot upload `{{count}}` files */
  'inputs.files.common.placeholder.cannot-upload-some-files_one': 'Kan bestand niet uploaden',
  'inputs.files.common.placeholder.cannot-upload-some-files_other':
    'Kan {{count}} bestanden niet uploaden',
  /** Drag or paste type here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_file': 'Sleep of plak bestand hier',
  /** Drag or paste image here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_image': 'Sleep of plak afbeelding hier',
  /** Drop to upload file */
  'inputs.files.common.placeholder.drop-to-upload_file': 'Laat vallen om bestand te uploaden',
  /** Drop to upload image */
  'inputs.files.common.placeholder.drop-to-upload_image': 'Laat vallen om afbeelding te uploaden',
  /** Read only */
  'inputs.files.common.placeholder.read-only': 'Alleen-lezen',
  /** Can't upload files here */
  'inputs.files.common.placeholder.upload-not-supported': 'Kan hier geen bestanden uploaden',
  /** Clear upload */
  'inputs.files.common.stale-upload-warning.clear': 'Upload wissen',
  /** An upload has made no progress for at least `{{staleThresholdMinutes}}` minutes and likely got interrupted. You can safely clear the incomplete upload and try uploading again. */
  'inputs.files.common.stale-upload-warning.description':
    'Een upload heeft ten minste {{staleThresholdMinutes}} minuten geen voortgang gemaakt en is waarschijnlijk onderbroken. U kunt de onvolledige upload veilig wissen en opnieuw proberen te uploaden.',
  /** Incomplete upload */
  'inputs.files.common.stale-upload-warning.title': 'Onvolledige upload',
  /** Tooltip text for action to crop image */
  'inputs.image.actions-menu.crop-image-tooltip': 'Afbeelding bijsnijden',
  /** Accessibility label for button to open image edit dialog */
  'inputs.image.actions-menu.edit-details.aria-label':
    'Dialoogvenster voor het bewerken van afbeeldingen openen',
  /** Accessibility label for button to open image options menu */
  'inputs.image.actions-menu.options.aria-label': 'Menu met afbeeldingsopties openen',
  /** Select */
  'inputs.image.browse-menu.text': 'Selecteren',
  /** Cannot upload this file here */
  'inputs.image.drag-overlay.cannot-upload-here': 'Kan dit bestand hier niet uploaden',
  /** Drop image to upload */
  'inputs.image.drag-overlay.drop-to-upload-image': 'Laat afbeelding vallen om te uploaden',
  /** This field is read only */
  'inputs.image.drag-overlay.this-field-is-read-only': 'Dit veld is alleen-lezen',
  /** Unknown member kind: `{{kind}}` */
  'inputs.image.error.unknown-member-kind': 'Onbekend lidtype: {{kind}}',
  /** Edit hotspot and crop */
  'inputs.image.hotspot-dialog.title': 'Hotspot en uitsnede bewerken',
  /** The value of this field is not a valid image. Resetting this field will let you choose a new image. */
  'inputs.image.invalid-image-warning.description':
    'De waarde van dit veld is geen geldige afbeelding. Dit veld resetten zal u toestaan een nieuwe afbeelding te kiezen.',
  /** Reset value */
  'inputs.image.invalid-image-warning.reset-button.text': 'Waarde resetten',
  /** Invalid image value */
  'inputs.image.invalid-image-warning.title': 'Ongeldige afbeeldingswaarde',
  /** Preview of uploaded image */
  'inputs.image.preview-uploaded-image': 'Voorbeeld van geüploade afbeelding',
  /** The upload could not be completed at this time. */
  'inputs.image.upload-error.description': 'De upload kon op dit moment niet worden voltooid.',
  /** Upload failed */
  'inputs.image.upload-error.title': 'Upload mislukt',
  /** Adjust the rectangle to crop image. Adjust the circle to specify the area that should always be visible. */
  'inputs.imagetool.description':
    'Pas het rechthoek aan om de afbeelding bij te snijden. Pas de cirkel aan om het gebied aan te geven dat altijd zichtbaar moet zijn.',
  /** Error: `{{errorMessage}}` */
  'inputs.imagetool.load-error': 'Fout: {{errorMessage}}',
  /** Hotspot & Crop */
  'inputs.imagetool.title': 'Hotspot & Crop',
  /** Convert to `{{targetType}}` */
  'inputs.invalid-value.convert-button.text': 'Converteren naar <code>{{targetType}}</code>',
  /** The current value (<code>`{{actualType}}`</code>) */
  'inputs.invalid-value.current-type': 'De huidige waarde (<code>{{actualType}}</code>)',
  /** The property value is stored as a value type that does not match the expected type. */
  'inputs.invalid-value.description':
    'De eigenschapswaarde is opgeslagen als een waarde type dat niet overeenkomt met het verwachte type.',
  /** The value of this property must be of type <code>`{{validType}}`</code> according to the schema. */
  'inputs.invalid-value.details.description':
    'De waarde van deze eigenschap moet van het type <code>{{validType}}</code> zijn volgens het schema.',
  /** Only the following types are valid here according to schema: */
  'inputs.invalid-value.details.multi-type-description':
    'Alleen de volgende typen zijn hier geldig volgens schema:',
  /** Mismatching value types typically occur when the schema has recently been changed. */
  'inputs.invalid-value.details.possible-reason':
    'Niet-overeenkomende waarde typen komen typisch voor wanneer het schema recentelijk is veranderd.',
  /** Developer info */
  'inputs.invalid-value.details.title': 'Informatie voor ontwikkelaars',
  /** -- Invalid Value Input -- */
  /** Reset value */
  'inputs.invalid-value.reset-button.text': 'Waarde resetten',
  /** Invalid property value */
  'inputs.invalid-value.title': 'Ongeldige eigenschapswaarde',
  /** Field groups */
  'inputs.object.field-group-tabs.aria-label': 'Veldgroepen',
  /** Read-only field description */
  'inputs.object.unknown-fields.read-only.description':
    'Dit veld is <strong>alleen-lezen</strong> volgens het schema van het document en kan niet worden uitgezet. Als je dit in Studio wilt kunnen uitzetten, zorg er dan voor dat je het <code>readOnly</code> veld uit het omvattende type in het schema verwijdert.',
  /** Remove field */
  'inputs.object.unknown-fields.remove-field-button.text': 'Veld verwijderen',
  /** Encountered `{{count}}` fields that are not defined in the schema. */
  'inputs.object.unknown-fields.warning.description_one':
    'Een veld tegengekomen dat niet is gedefinieerd in het schema.',
  'inputs.object.unknown-fields.warning.description_other':
    '{{count}} velden tegengekomen die niet zijn gedefinieerd in het schema.',
  /** Detailed description of unknown field warning */
  'inputs.object.unknown-fields.warning.details.description_one':
    'Dit veld is niet gedefinieerd in het schema, wat kan betekenen dat de velddefinitie is verwijderd of dat iemand anders het aan hun eigen lokale project heeft toegevoegd en hun wijzigingen nog niet heeft uitgerold.',
  'inputs.object.unknown-fields.warning.details.description_other':
    'Deze velden zijn niet gedefinieerd in het schema van het document, wat kan betekenen dat de velddefinities zijn verwijderd of dat iemand anders ze aan hun eigen lokale project heeft toegevoegd en hun wijzigingen nog niet heeft uitgerold.',
  /** Developer info */
  'inputs.object.unknown-fields.warning.details.title': 'Informatie voor ontwikkelaars',
  /** Unknown field found */
  'inputs.object.unknown-fields.warning.title_one': 'Onbekend veld gevonden',
  'inputs.object.unknown-fields.warning.title_other': 'Onbekende velden gevonden',
  /** Collapse the editor to save screen space  */
  'inputs.portable-text.action.collapse-editor': 'Editor samenvouwen',
  /** Aria label for action to edit an existing annotation */
  'inputs.portable-text.action.edit-annotation-aria-label': 'Annotatie bewerken',
  /** Expand the editor to give more editing space */
  'inputs.portable-text.action.expand-editor': 'Editor uitbreiden',
  /** Label label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block': 'Voeg {{typeName}} in',
  /** Accessibility label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block-aria-label': 'Voeg {{typeName}} in (blok)',
  /** Label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object': 'Voeg {{typeName}} in',
  /** Accessibility label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object-aria-label': 'Voeg {{typeName}} in (inline)',
  /** Aria label for action to remove an annotation */
  'inputs.portable-text.action.remove-annotation-aria-label': 'Annotatie verwijderen',
  /** Label for activate on focus with context of click and not focused */
  'inputs.portable-text.activate-on-focus-message_click': 'Klik om te activeren',
  /** Label for activate on focus with context of click and focused */
  'inputs.portable-text.activate-on-focus-message_click-focused':
    'Klik of druk op spatie om te activeren',
  /** Label for activate on focus with context of tap and not focused */
  'inputs.portable-text.activate-on-focus-message_tap': 'Tik om te activeren',
  /**Aria label for the annotation object */
  'inputs.portable-text.annotation-aria-label': 'Annotatie object',
  /** Title for dialog that allows editing an annotation */
  'inputs.portable-text.annotation-editor.title': 'Bewerk {{schemaType}}',
  /** Title of the default "link" annotation */
  'inputs.portable-text.annotation.link': 'Link',
  /**Aria label for the block object */
  'inputs.portable-text.block.aria-label': 'Blok object',
  /** Label for action to edit a block item, in the case where it is editable */
  'inputs.portable-text.block.edit': 'Bewerken',
  /** Accessibility label for the button that opens the actions menu on blocks */
  'inputs.portable-text.block.open-menu-aria-label': 'Menu openen',
  /** Label for action to open a reference, in the case of block-level reference types */
  'inputs.portable-text.block.open-reference': 'Referentie openen',
  /** Label for action to remove a block item */
  'inputs.portable-text.block.remove': 'Verwijderen',
  /** Label for action to view a block item, in the case where it is read-only and thus cannot be edited */
  'inputs.portable-text.block.view': 'Bekijken',
  /** Title of the "code" decorator */
  'inputs.portable-text.decorator.code': 'Code',
  /** Title of the "em" (emphasis) decorator */
  'inputs.portable-text.decorator.emphasis': 'Cursief',
  /** Title of the "strike-through" decorator */
  'inputs.portable-text.decorator.strike-through': 'Doorhalen',
  /** Title of the "strong" decorator */
  'inputs.portable-text.decorator.strong': 'Vet',
  /** Title of the "underline" decorator */
  'inputs.portable-text.decorator.underline': 'Onderstrepen',
  /** Placeholder text for when the editor is empty */
  'inputs.portable-text.empty-placeholder': 'Leeg',
  /**Aria label for the block object */
  'inputs.portable-text.inline-block.aria-label': 'Inline object',
  /** Label for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit': 'Object bewerken',
  /** Aria label for icon for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit-aria-label': 'Object bewerken',
  /** Label for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove': 'Object verwijderen',
  /** Aria label for icon for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove-aria-label': 'Object verwijderen',
  /** Disclaimer text shown on invalid Portable Text value, when an action is available to unblock the user, but it is not guaranteed to be safe */
  'inputs.portable-text.invalid-value.action-disclaimer':
    'LET OP: Het is over het algemeen veilig om de bovenstaande actie uit te voeren, maar als u twijfelt, neem dan contact op met degenen die verantwoordelijk zijn voor het configureren van uw studio.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.action': 'Verwijder het object',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.description':
    'Kind met sleutel {{childKey}} van blok met sleutel <code>{{key}}</code> is van type <code>{{childType}}</code>, wat niet is toegestaan door de schema definitie.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.action': 'Verwijder het blok',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.description':
    'Blok met sleutel <code>{{key}}</code> is van type <code>{{typeName}}</code>, wat niet is toegestaan door de schema definitie.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.action': 'Voeg lege tekstspan in',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.description':
    'Tekstblok met sleutel <code>{{key}}</code> heeft geen tekstspannen.',
  /** Label for the button to ignore invalid values in the Portable Text editor */
  'inputs.portable-text.invalid-value.ignore-button.text': 'Negeren',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.action':
    'Gebruik type <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.description':
    'Blok met sleutel <code>{{key}}</code> heeft een ongeldige typenaam. Volgens het schema zou het <code>{{expectedTypeName}}</code> moeten zijn.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.action': 'Stel lege tekstwaarde in',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.description':
    'Span met sleutel {{childKey}} van blok met sleutel <code>{{key}}</code> heeft een ontbrekende of ongeldige <code>text</code> eigenschap.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.action':
    'Gebruik type <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.description':
    'Blok met sleutel <code>{{key}}</code> mist een typenaam. Volgens het schema zou het <code>{{expectedTypeName}}</code> moeten zijn.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.action': 'Wijs willekeurige sleutel toe',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.description':
    'Kind op index <code>{{index}}</code> van blok met sleutel <code>{{key}}</code> mist <code>_key</code> eigenschap.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.action': 'Verwijder het object',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.description':
    'Kind met sleutel {{childKey}} van blok met sleutel <code>{{key}}</code> mist <code>_type</code> eigenschap.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.action': 'Wijs willekeurige sleutel toe',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.description':
    'Blok op index <code>{{index}}</code> mist vereiste <code>_key</code> eigenschap.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.action': 'Verwijder het blok',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.description':
    'Tekstblok met sleutel <code>{{key}}</code> heeft een ongeldige of ontbrekende `children` eigenschap.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.action': 'Voeg eigenschap toe',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.description':
    'Tekstblok met sleutel <code>{{key}}</code> heeft een ongeldige of ontbrekende `markDefs` eigenschap.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.action': 'Verwijder het blok',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.description':
    'Blok met sleutel <code>{{key}}</code> mist een typenaam.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.action': 'Verwijder het item',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.description':
    'Kind op index <code>{{index}}</code> van blok met sleutel <code>{{key}}</code> is geen object.',
  /** Action presented when the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.action': 'Onbepaalde waarde',
  /** Text explaining that the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.description':
    'Waarde moet een array van Portable Text blokken zijn, of ongedefinieerd.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.action': 'Verwijder item',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.description':
    'Item op <code>{{index}}</code> is geen object.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.action':
    'Verwijder niet-toegestane markeringen',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.description':
    'Tekstblok met sleutel <code>{{key}}</code> bevat markeringen <code>({{orphanedMarks, list}})</code> die niet zijn toegestaan door het schema.',
  /** Title for the alert indicating that the Portable Text field has an invalid value */
  'inputs.portable-text.invalid-value.title': 'Ongeldige Portable Text waarde',
  /** Title of "bulleted" list type */
  'inputs.portable-text.list-type.bullet': 'Lijst met opsommingstekens',
  /** Title of numbered list type */
  'inputs.portable-text.list-type.number': 'Genummerde lijst',
  /** Title of the "h1" block style */
  'inputs.portable-text.style.h1': 'Kop 1',
  /** Title of the "h2" block style */
  'inputs.portable-text.style.h2': 'Kop 2',
  /** Title of the "h3" block style */
  'inputs.portable-text.style.h3': 'Kop 3',
  /** Title of the "h4" block style */
  'inputs.portable-text.style.h4': 'Kop 4',
  /** Title of the "h5" block style */
  'inputs.portable-text.style.h5': 'Kop 5',
  /** Title of the "h6" block style */
  'inputs.portable-text.style.h6': 'Kop 6',
  /** Title shown when multiple blocks of varying styles is selected */
  'inputs.portable-text.style.multiple': 'Meerdere',
  /** Title of fallback when no style is given for a block */
  'inputs.portable-text.style.none': 'Geen stijl',
  /** Title of the "normal" block style */
  'inputs.portable-text.style.normal': 'Normaal',
  /** Title of the "quote" block style */
  'inputs.portable-text.style.quote': 'Citaat',
  /** Label for action to clear the current value of the reference field */
  'inputs.reference.action.clear': 'Wissen',
  /** Label for action to create a new document from the reference input */
  'inputs.reference.action.create-new-document': 'Maak nieuw',
  /** Label for action to create a new document from the reference input, when there are multiple templates or document types to choose from */
  'inputs.reference.action.create-new-document-select': 'Nieuw aanmaken…',
  /** Label for action to duplicate the current item to a new item (used within arrays) */
  'inputs.reference.action.duplicate': 'Dupliceren',
  /** Label for action that opens the referenced document in a new tab */
  'inputs.reference.action.open-in-new-tab': 'Openen in nieuw tabblad',
  /** Label for action to remove the reference from an array */
  'inputs.reference.action.remove': 'Verwijderen',
  /** Label for action to replace the current value of the field */
  'inputs.reference.action.replace': 'Vervangen',
  /** Label for action to cancel a previously initiated replace action  */
  'inputs.reference.action.replace-cancel': 'Vervanging annuleren',
  /** The cross-dataset reference field currently has a reference, but the feature has been disabled since it was created. This explains what can/cannot be done in its current state. */
  'inputs.reference.cross-dataset.feature-disabled-actions':
    'U kunt nog steeds de bestaande referentie van dit veld wissen, maar het kan niet worden gewijzigd in een ander document zolang de functie is uitgeschakeld.',
  /** A cross-dataset reference field exists but the feature has been disabled. A <DocumentationLink> component is available. */
  'inputs.reference.cross-dataset.feature-disabled-description':
    'Deze functie is uitgeschakeld. Lees hoe u het kunt inschakelen in <DocumentationLink>de documentatie</DocumentationLink>.',
  /** Title for a warning telling the user that the current project does not have the "cross dataset references" feature */
  'inputs.reference.cross-dataset.feature-unavailable-title':
    'Niet beschikbare functie: Cross dataset referentie',
  /** The cross-dataset reference points to a document with an invalid type  */
  'inputs.reference.cross-dataset.invalid-type':
    'Het gerefereerde document is van een ongeldig type ({{typeName}}) <JsonValue/>',
  /** The referenced document will open in a new tab (due to external studio) */
  'inputs.reference.document-opens-in-new-tab': 'Dit document wordt geopend in een nieuw tabblad',
  /** Error title for when the document is unavailable (for any possible reason) */
  'inputs.reference.error.document-unavailable-title': 'Document niet beschikbaar',
  /** Error title for when the referenced document failed to be loaded */
  'inputs.reference.error.failed-to-load-document-title':
    'Het laden van het gerefereerde document is mislukt',
  /** Error title for when the reference search returned a document that is not an allowed type for the field */
  'inputs.reference.error.invalid-search-result-type-title':
    'Zoeken heeft een type opgeleverd dat niet geldig is voor deze referentie: "{{returnedType}}"',
  /** Error description for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-description':
    'Het gerefereerde document (<code>{{documentId}}</code>) is van type <code>{{actualType}}</code>. Volgens het schema kunnen gerefereerde documenten alleen van type <AllowedTypes /> zijn.',
  /** Error title for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-title': 'Document van ongeldig type',
  /** Error description for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-description':
    'Het gerefereerde document kon niet worden geopend vanwege onvoldoende rechten',
  /** Error title for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-title': 'Onvoldoende rechten',
  /** Error description for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-description':
    'Het gerefereerde document bestaat niet (ID: <code>{{documentId}}</code>). U kunt de referentie verwijderen of vervangen door een ander document.',
  /** Error title for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-title': 'Niet gevonden',
  /** Label for button that clears the reference when it points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document.clear-button-label': 'Wissen',
  /** Error title for when the search for a reference failed. Note that the message sent by the backend may not be localized. */
  'inputs.reference.error.search-failed-title': 'Zoeken naar referentie mislukt',
  /** Alternative text for the image shown in cross-dataset reference input */
  'inputs.reference.image-preview-alt-text': 'Afbeeldingsvoorbeeld van het gerefereerde document',
  /** Description for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-description':
    '<strong>{{referencedDocument}}</strong> is gepubliceerd en deze referentie moet nu worden afgerond.',
  /** Title for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-title': 'Referentie afronden',
  /** Description for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-description':
    '<strong>{{referencedDocument}}</strong> is gepubliceerd en deze referentie moet nu worden omgezet naar een sterke referentie.',
  /** Title for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-title':
    'Omzetten naar sterke referentie',
  /** Label for button that triggers the action that strengthen a reference */
  'inputs.reference.incomplete-reference.strengthen-button-label':
    'Converteren naar sterke referentie',
  /** Label for button that triggers a retry attempt for reference metadata  */
  'inputs.reference.metadata-error.retry-button-label': 'Opnieuw proberen',
  /** Title for alert shown when reference metadata fails to be loaded */
  'inputs.reference.metadata-error.title': 'Kan referentiemetadata niet laden',
  /** Message shown when no documents were found that matched the given search string */
  'inputs.reference.no-results-for-query': 'Geen resultaten voor <strong>“{{searchTerm}}”</strong>',
  /** Text for tooltip showing when a document was edited, using relative time (eg "how long ago was it edited?") */
  'inputs.reference.preview.edited-at-time': 'Bewerkt <RelativeTime/>',
  /** Accessibility label for icon indicating that document does _not_ have any unpublished changes */
  'inputs.reference.preview.has-no-unpublished-changes-aria-label':
    'Geen ongepubliceerde bewerkingen',
  /** Accessibility label for icon indicating that document has unpublished changes */
  'inputs.reference.preview.has-unpublished-changes-aria-label': 'Bewerkt',
  /** Accessibility label for icon indicating that document does _not_ have a published version */
  'inputs.reference.preview.is-not-published-aria-label': 'Niet gepubliceerd',
  /** Accessibility label for icon indicating that document has a published version */
  'inputs.reference.preview.is-published-aria-label': 'Gepubliceerd',
  /** Text for tooltip indicating that a document has no unpublished edits */
  'inputs.reference.preview.no-unpublished-edits': 'Geen ongepubliceerde bewerkingen',
  /** Text for tooltip indicating that a document has not yet been published */
  'inputs.reference.preview.not-published': 'Niet gepubliceerd',
  /** Text for tooltip showing when a document was published, using relative time (eg "how long ago was it published?") */
  'inputs.reference.preview.published-at-time': 'Gepubliceerd <RelativeTime/>',
  /** The referenced document no longer exist and might have been deleted (for weak references) */
  'inputs.reference.referenced-document-does-not-exist':
    'Het gerefereerde document bestaat niet meer en kan zijn verwijderd (document-ID: <code>{{documentId}}</code>).',
  /** The referenced document could not be displayed to the user because of insufficient permissions */
  'inputs.reference.referenced-document-insufficient-permissions':
    'Het gerefereerde document kon niet worden geopend vanwege onvoldoende rechten',
  /** Label for when the reference input is resolving the initial value for an item */
  'inputs.reference.resolving-initial-value': 'Initiële waarde oplossen…',
  /** Placeholder shown in a reference input with no current value */
  'inputs.reference.search-placeholder': 'Typ om te zoeken',
  /** Explanation of the consequences of leaving the reference as strong instead of weak */
  'inputs.reference.strength-mismatch.is-strong-consquences':
    'Het zal niet mogelijk zijn om het referentiedocument te verwijderen zonder eerst deze referentie te verwijderen of om te zetten naar zwak.',
  /** Description for alert shown when a reference is supposed to be weak, but the actual value is strong */
  'inputs.reference.strength-mismatch.is-strong-description':
    'Deze referentie is <em>sterk</em>, maar volgens het huidige schema zou het <em>zwak</em> moeten zijn.',
  /** Explanation of the consequences of leaving the reference as weak instead of strong */
  'inputs.reference.strength-mismatch.is-weak-consquences':
    'Hierdoor is het mogelijk om het gerefereerde document te verwijderen zonder eerst deze referentie te verwijderen, waardoor dit veld verwijst naar een niet-bestaand document.',
  /** Description for alert shown when a reference is supposed to be strong, but the actual value is weak */
  'inputs.reference.strength-mismatch.is-weak-description':
    'Deze referentie is <em>zwak</em>, maar volgens het huidige schema zou het <em>sterk</em> moeten zijn.',
  /** Label for button that triggers the action that strengthens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.strengthen-button-label':
    'Converteren naar sterke referentie',
  /** Title for alert shown when a reference is supposed to be weak/strong, but the actual value is the opposite of what it is supposed to be */
  'inputs.reference.strength-mismatch.title': 'Mismatch in referentiekracht',
  /** Label for button that triggers the action that weakens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.weaken-button-label': 'Converteren naar zwakke referentie',
  /** Action message for generating the slug */
  'inputs.slug.action.generate': 'Genereren',
  /** Loading message for when the input is actively generating a slug */
  'inputs.slug.action.generating': 'Aan het genereren…',
  /** Error message for when the source to generate a slug from is missing */
  'inputs.slug.error.missing-source':
    'Bron ontbreekt. Controleer bron op type {{schemaType}} in schema',
  /** Placeholder for an empty tag input */
  'inputs.tags.placeholder': 'Voer tag in en druk op ENTER…',
  /** Placeholder for an empty tag input on touch devices */
  'inputs.tags.placeholder_touch': 'Voer tag in…',
  /** Convert to `{{targetType}}` */
  'inputs.untyped-value.convert-button.text': 'Converteren naar <code>{{targetType}}</code>',
  /** Encountered an object value without a <code>_type</code> property. */
  'inputs.untyped-value.description':
    'Een objectwaarde zonder een <code>_type</code> eigenschap tegengekomen.',
  /** Either remove the <code>name</code> property of the object declaration, or set <code>_type</code> property on items. */
  'inputs.untyped-value.details.description':
    'Verwijder de <code>name</code> eigenschap van de objectverklaring, of stel een <code>_type</code> eigenschap in op items.',
  /** Current value (<code>object</code>): */
  'inputs.untyped-value.details.json-dump-prefix': 'Huidige waarde (<code>object</code>):',
  /** The following types are valid here according to schema: */
  'inputs.untyped-value.details.multi-type-description':
    'De volgende typen zijn hier geldig volgens schema:',
  /** Developer info */
  'inputs.untyped-value.details.title': 'Informatie voor ontwikkelaars',
  /** Property value missing <code>_type</code> */
  'inputs.untyped-value.title': 'Eigenschapwaarde mist <code>_type</code>',
  /** Unset value */
  'inputs.untyped-value.unset-item-button.text': 'Waarde ongedaan maken',

  /** The fallback explanation if no context is provided */
  'insufficient-permissions-message.not-authorized-explanation':
    'U heeft geen toestemming om toegang te krijgen tot deze functie.',
  /** The explanation when unable to create any document at all */
  'insufficient-permissions-message.not-authorized-explanation_create-any-document':
    'U heeft geen toestemming om een document te maken.',
  /** The explanation when unable to create a particular document */
  'insufficient-permissions-message.not-authorized-explanation_create-document':
    'U heeft geen toestemming om dit document te maken.',
  /** The explanation when unable to create a particular type of document */
  'insufficient-permissions-message.not-authorized-explanation_create-document-type':
    'U heeft geen toestemming om dit soort document te maken.',
  /** The explanation when unable to create a new reference in a document */
  'insufficient-permissions-message.not-authorized-explanation_create-new-reference':
    'U heeft geen toestemming om een nieuwe referentie te maken.',
  /** The explanation when unable to delete a particular document */
  'insufficient-permissions-message.not-authorized-explanation_delete-document':
    'U heeft geen toestemming om dit document te verwijderen.',
  /** The explanation when unable to discard changes in a particular document */
  'insufficient-permissions-message.not-authorized-explanation_discard-changes':
    'U heeft geen toestemming om wijzigingen in dit document te verwerpen.',
  /** The explanation when unable to duplicate a particular document */
  'insufficient-permissions-message.not-authorized-explanation_duplicate-document':
    'U heeft geen toestemming om dit document te dupliceren.',
  /** The explanation when unable to publish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_publish-document':
    'U heeft geen toestemming om dit document te publiceren.',
  /** The explanation when unable to unpublish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_unpublish-document':
    'U heeft geen toestemming om dit document niet te publiceren.',
  /** Appears after the not-authorized message. Lists the current roles. */
  'insufficient-permissions-message.roles': 'Uw rollen: <Roles/>',
  /** The title for the insufficient permissions message component */
  'insufficient-permissions-message.title': 'Onvoldoende rechten',

  /** Unexpected error: `{{error}}` */
  'member-field-error.unexpected-error': 'Onverwachte fout: {{error}}',

  /** Button label for "Create new document" button */
  'new-document.button': 'Aanmaken',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are templates/types available for creation
   */
  'new-document.create-new-document-label': 'Nieuw document…',
  /** Placeholder for the "filter" input within the new document menu */
  'new-document.filter-placeholder': 'Filter',
  /** Loading indicator text within the new document menu */
  'new-document.loading': 'Laden…',
  /** Accessibility label for the list displaying options in the new document menu */
  'new-document.new-document-aria-label': 'Nieuw document',
  /** Message for when there are no document type options in the new document menu */
  'new-document.no-document-types-found': 'Geen documenttypen gevonden',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are no templates/types to create from
   */
  'new-document.no-document-types-label': 'Geen documenttypen',
  /** Message for when no results are found for a specific search query in the new document menu */
  'new-document.no-results': 'Geen resultaten voor <strong>{{searchQuery}}</strong>',
  /** Aria label for the button that opens the "Create new document" popover/dialog */
  'new-document.open-dialog-aria-label': 'Nieuw document maken',
  /** Title for "Create new document" dialog */
  'new-document.title': 'Nieuw document maken',

  /** Label for action to manage members of the current studio project */
  'presence.action.manage-members': 'Leden beheren',
  /** Accessibility label for presence menu button */
  'presence.aria-label': 'Wie is hier',
  /** Message description for when no one else is currently present */
  'presence.no-one-else-description':
    'Nodig mensen uit voor het project om hun online status te zien.',
  /** Message title for when no one else is currently present */
  'presence.no-one-else-title': 'Er is niemand anders hier',
  /** Message for when a user is not in a document (displayed in the global presence menu) */
  'presence.not-in-a-document': 'Niet in een document',
  /** Tooltip content text for presence menu button */
  'presence.tooltip-content': undefined, // 'Who is here'

  /** Fallback title shown when a preview does not provide a title */
  'preview.default.title-fallback': 'Zonder titel',
  /** Fallback preview value for types that have "no value" (eg null, undefined) */
  'preview.fallback.no-value': '(geen waarde)',
  /** Alternative text for image being shown while image is being uploaded, in previews */
  'preview.image.file-is-being-uploaded.alt-text': 'De afbeelding die momenteel wordt geüpload',

  /* Relative time, just now */
  'relative-time.just-now': 'zojuist',

  /** Accessibility label to open search action when the search would go fullscreen (eg on narrower screens) */
  'search.action-open-aria-label': 'Zoeken openen',
  /** Action label for adding a search filter */
  'search.action.add-filter': 'Filter toevoegen',
  /** Action label for clearing search filters */
  'search.action.clear-filters': 'Filters wissen',
  /** Label for action to clear recent searches */
  'search.action.clear-recent-searches': 'Recente zoekopdrachten wissen',
  /** Accessibility label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-aria-label': 'Aangevinkte filters wissen',
  /** Label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-label': 'Wissen',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to close the search */
  'search.action.close-search-aria-label': 'Zoeken sluiten',
  /** Accessibility label for filtering by document type */
  'search.action.filter-by-document-type-aria-label': 'Filteren op documenttype',
  /** Accessibility action label for removing an already applied search filter */
  'search.action.remove-filter-aria-label': 'Filter verwijderen',
  /**
   * Text displayed when either no document type(s) have been selected, or we need a fallback,
   * eg "Search for all types".
   */
  'search.action.search-all-types': 'Zoek alle documenten',
  /**
   * Text displayed when we are able to determine one or more document types that will be used for
   * searching, and can fit within the space assigned by the design.
   */
  'search.action.search-specific-types': 'Zoeken naar {{types, list}}',
  /** Dialog title for action to select an asset of unknown type */
  'search.action.select-asset': 'Selecteer asset',
  /** Dialog title for action to select a file asset */
  'search.action.select-asset_file': 'Selecteer bestand',
  /** Dialog title for action to select an image asset */
  'search.action.select-asset_image': 'Selecteer afbeelding',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-aria-label_hide': 'Verberg filters',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-aria-label_show': 'Toon filters',
  /** Label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-label_hide': 'Filters verbergen',
  /** Label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-label_show': 'Filters tonen',
  /** Tooltip text for the global search button */
  'search.button.tooltip': 'Zoeken',
  /**
   * A list of provided types (use `list` formatter preferably).
   */
  'search.document-type-list': '{{types, list}}',
  /**
   * In the context of a list of document types - no filtering selection has been done,
   * thus the default is "all types".
   */
  'search.document-type-list-all-types': 'Alle typen',
  /** Accessibility label for list displaying the available document types */
  'search.document-types-aria-label': 'Documenttypen',
  /** Label for when no document types matching the filter are found */
  'search.document-types-no-matches-found': 'Geen overeenkomsten voor {{filter}}',
  /** Description for error when a filter cannot be displayed, describes that you should check the schema */
  'search.error.display-filter-description':
    'Dit kan duiden op ongeldige opties gedefinieerd in uw schema.',
  /** Title for error when a filter cannot be displayed (mainly a developer-oriented error) */
  'search.error.display-filter-title':
    'Er is een fout opgetreden bij het weergeven van deze filter.',
  /** Description for error when no valid asset source is found, describes that you should check the the current studio config */
  'search.error.no-valid-asset-source-check-config-description':
    'Zorg ervoor dat het is ingeschakeld in uw studio configuratiebestand.',
  /** Description for error when no valid asset source is found, describes that only the default asset is supported */
  'search.error.no-valid-asset-source-only-default-description':
    'Momenteel wordt alleen de standaard asset bron ondersteund.',
  /** Title for error when no valid asset sources found */
  'search.error.no-valid-asset-source-title': 'Geen geldige asset bronnen gevonden.',
  /** Helpful description for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-help-description':
    'Probeer het opnieuw of controleer uw verbinding',
  /** Title label for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-title': 'Er is iets misgegaan tijdens het zoeken',
  /**
   * Label for "All fields", a label that appears above the list of available fields when filtering.
   * If one or more document type has been chosen as filter, this label is replaced with a group of
   * fields per selected document type
   */
  'search.filter-all-fields-header': 'Alle velden',
  /** Label for the action of changing from one file to a different file in asset search filter */
  'search.filter-asset-change_file': 'Wijzig bestand',
  /** Label for the action of changing from one image to a different image in asset search filter */
  'search.filter-asset-change_image': 'Wijzig afbeelding',
  /** Label for the action of clearing the currently selected asset in an image/file filter */
  'search.filter-asset-clear': 'Wissen',
  /** Label for the action of selecting a file in asset search filter */
  'search.filter-asset-select_file': 'Selecteer bestand',
  /** Label for the action of selecting an image in asset search filter */
  'search.filter-asset-select_image': 'Selecteer afbeelding',
  /** Label for boolean filter - false */
  'search.filter-boolean-false': 'Onwaar',
  /** Label for boolean filter - true */
  'search.filter-boolean-true': 'Waar',
  /** Accessibility label for list that lets you filter fields by title, when adding a new filter in search */
  'search.filter-by-title-aria-label': 'Filter op titel',
  /** Accessibility label for date filter input */
  'search.filter-date-aria-label': 'Datum',
  /** Accessibility label for selecting end date on the date range search filter */
  'search.filter-date-range-end-date-aria-label': 'Einddatum',
  /** Accessibility label for selecting start date on the date range search filter */
  'search.filter-date-range-start-date-aria-label': 'Startdatum',
  /**
   * Label for "Days"/"Months"/"Years" when selecting it as unit in "X days ago" search filter.
   * Capitalized, as it would be listed in a dropdown.
   */
  'search.filter-date-unit_days': 'Dagen',
  'search.filter-date-unit_months': 'Maanden',
  'search.filter-date-unit_years': 'Jaren',
  /** Accessibility label for selecting the unit (day/month/year) when adding "X days ago" search filter */
  'search.filter-date-unit-aria-label': 'Selecteer eenheid',
  /** Accessibility label for the input value (days/months/years) when adding "X days ago" search filter */
  'search.filter-date-value-aria-label': 'Waarde van eenheid',
  /** Label for "field description" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-description': 'Veldbeschrijving',
  /** Label for "field name" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-name': 'Veldnaam',
  /** Label for "Used in document types", a list of the document types a field appears in. Shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-used-in-document-types': 'Gebruikt in documenttypen',
  /** Label for when no fields/filters are found for the given term */
  'search.filter-no-matches-found': 'Geen overeenkomsten voor {{filter}}',
  /** Placeholder value for maximum numeric value filter */
  'search.filter-number-max-value-placeholder': 'Maximale waarde',
  /** Placeholder value for minimum numeric value filter */
  'search.filter-number-min-value-placeholder': 'Minimale waarde',
  /** Placeholder value for the number filter */
  'search.filter-number-value-placeholder': 'Waarde',
  /** Placeholder for the "Filter" input, when narrowing possible fields/filters */
  'search.filter-placeholder': 'Filter',
  /** Label for the action of clearing the currently selected document in a reference filter */
  'search.filter-reference-clear': 'Wissen',
  /**
   * Label for "shared fields", a label that appears above a list of fields that all filtered types
   * have in common, when adding a new filter. For instance, if "book" and "employee" both have a
   * "title" field, this field would be listed under "shared fields".
   * */
  'search.filter-shared-fields-header': 'Gedeelde velden',
  /** Placeholder value for the string filter */
  'search.filter-string-value-placeholder': 'Waarde',
  /** Label/placeholder prompting user to select one of the predefined, allowed values for a string field */
  'search.filter-string-value-select-predefined-value': 'Selecteer…',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (singular) */
  'search.filters-aria-label_one': 'Filter',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (plural) */
  'search.filters-aria-label_other': 'Filters',
  /** Label for instructions on how to use the search - displayed when no recent searches are available */
  'search.instructions': 'Gebruik <ControlsIcon/> om uw zoekopdracht te verfijnen',
  /** Helpful description for when no search results are found */
  'search.no-results-help-description': 'Probeer een ander trefwoord of pas uw filters aan',
  /** Title label for when no search results are found */
  'search.no-results-title': 'Geen resultaten gevonden',
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
    '<Field/> <Operator>heeft</Operator> <Value>{{count}} item</Value>',
  'search.operator.array-count-equal.description_other':
    '<Field/> <Operator>heeft</Operator> <Value>{{count}} items</Value>',
  'search.operator.array-count-equal.name': 'hoeveelheid is',
  /* Array should have a count greater than given filter value */
  'search.operator.array-count-gt.description_one':
    '<Field/> <Operator>heeft ></Operator> <Value>{{count}} item</Value>',
  'search.operator.array-count-gt.description_other':
    '<Field/> <Operator>heeft ></Operator> <Value>{{count}} items</Value>',
  'search.operator.array-count-gt.name': 'hoeveelheid groter dan',
  /* Array should have a count greater than or equal to the given filter value */
  'search.operator.array-count-gte.description_one':
    '<Field/> <Operator>heeft ≥</Operator> <Value>{{count}} item</Value>',
  'search.operator.array-count-gte.description_other':
    '<Field/> <Operator>heeft ≥</Operator> <Value>{{count}} items</Value>',
  'search.operator.array-count-gte.name': 'hoeveelheid groter dan of gelijk aan',
  /* Array should have a count less than given filter value */
  'search.operator.array-count-lt.description_one':
    '<Field/> <Operator>heeft <</Operator> <Value>{{count}} item</Value>',
  'search.operator.array-count-lt.description_other':
    '<Field/> <Operator>heeft <</Operator> <Value>{{count}} items</Value>',
  'search.operator.array-count-lt.name': 'hoeveelheid minder dan',
  /* Array should have a count less than or equal to the given filter value */
  'search.operator.array-count-lte.description_one':
    '<Field/> <Operator>heeft ≤</Operator> <Value>{{count}} item</Value>',
  'search.operator.array-count-lte.description_other':
    '<Field/> <Operator>heeft ≤</Operator> <Value>{{count}} items</Value>',
  'search.operator.array-count-lte.name': 'hoeveelheid minder dan of gelijk aan',
  /* Array should have a count that is not equal to the given filter value */
  'search.operator.array-count-not-equal.description_one':
    '<Field/> <Operator>heeft niet</Operator> <Value>{{count}} item</Value>',
  'search.operator.array-count-not-equal.description_other':
    '<Field/> <Operator>heeft niet</Operator> <Value>{{count}} items</Value>',
  'search.operator.array-count-not-equal.name': 'hoeveelheid is niet',
  /**
   * Array should have a count within the range of given filter values.
   * Gets passed `{{from}}` and `{{to}}` values.
   **/
  'search.operator.array-count-range.description':
    '<Field/> <Operator>heeft tussen</Operator> <Value>{{from}} → {{to}} items</Value>',
  'search.operator.array-count-range.name': 'hoeveelheid ligt tussen',
  /* Array should include the given value */
  'search.operator.array-list-includes.description':
    '<Field/> <Operator>bevat</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-includes.name': 'bevat',
  /* Array should not include the given value */
  'search.operator.array-list-not-includes.description':
    '<Field/> <Operator>bevat niet</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-not-includes.name': 'bevat niet',
  /* Array should include the given reference */
  'search.operator.array-reference-includes.description':
    '<Field/> <Operator>bevat</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-includes.name': 'bevat',
  /* Array should not include the given reference */
  'search.operator.array-reference-not-includes.description':
    '<Field/> <Operator>bevat niet</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-not-includes.name': 'bevat niet',
  /* Asset (file) should be the selected asset */
  'search.operator.asset-file-equal.description':
    '<Field/> <Operator>is</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-equal.name': 'is',
  /* Asset (file) should not be the selected asset */
  'search.operator.asset-file-not-equal.description':
    '<Field/> <Operator>is niet</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-not-equal.name': 'is niet',
  /* Asset (image) should be the selected asset */
  'search.operator.asset-image-equal.description':
    '<Field/> <Operator>is</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-equal.name': 'is',
  /* Asset (image) should not be the selected asset */
  'search.operator.asset-image-not-equal.description':
    '<Field/> <Operator>is niet</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-not-equal.name': 'is niet',
  /**
   * Boolean value should be the given filter value (true/false).
   * Context passed is `true` and `false`, allowing for more specific translations:
   * - `search.operator.boolean-equal.description_true`
   * - `search.operator.boolean-equal.description_false`
   */
  'search.operator.boolean-equal.description':
    '<Field/> <Operator>is</Operator> <Value>{{value}}</Value>',
  'search.operator.boolean-equal.name': 'is',
  /* Date should be after (later than) given filter value */
  'search.operator.date-after.description':
    '<Field/> <Operator>is na</Operator> <Value>{{value}}</Value>',
  'search.operator.date-after.name': 'na',
  /* Date should be before (earlier than) given filter value */
  'search.operator.date-before.description':
    '<Field/> <Operator>is voor</Operator> <Value>{{value}}</Value>',
  'search.operator.date-before.name': 'voor',
  /* Date should be the given filter value */
  'search.operator.date-equal.description':
    '<Field/> <Operator>is</Operator> <Value>{{value}}</Value>',
  'search.operator.date-equal.name': 'is',
  /* Date should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-last.description':
    '<Field/> <Operator>is in de laatste</Operator> <Value>{{value}}</Value>',
  'search.operator.date-last.name': 'laatste',
  /* Date should not be the given filter value */
  'search.operator.date-not-equal.description':
    '<Field/> <Operator>is niet</Operator> <Value>{{value}}</Value>',
  'search.operator.date-not-equal.name': 'is niet',
  /* Date should be within the range of given filter values */
  'search.operator.date-range.description': '<Field/> <Operator>ligt tussen</Operator> <Value/>',
  'search.operator.date-range.name': 'is tussen',
  /* Date and time should be after (later than) given filter value */
  'search.operator.date-time-after.description':
    '<Field/> <Operator>is na</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-after.name': 'na',
  /* Date and time should be before (earlier than) given filter value */
  'search.operator.date-time-before.description':
    '<Field/> <Operator>is voor</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-before.name': 'voor',
  /* Date and time should be the given filter value */
  'search.operator.date-time-equal.description':
    '<Field/> <Operator>is</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-equal.name': 'is',
  /* Date and time should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-time-last.description':
    '<Field/> <Operator>is in de laatste</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-last.name': 'laatste',
  /* Date and time should not be the given filter value */
  'search.operator.date-time-not-equal.description':
    '<Field/> <Operator>is niet</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-not-equal.name': 'is niet',
  /* Date and time should be within the range of given filter values */
  'search.operator.date-time-range.description': '<Field/> <Operator>is tussen</Operator> <Value/>',
  'search.operator.date-time-range.name': 'is tussen',
  /* Value should be defined */
  'search.operator.defined.description':
    '<Field/> <Operator>is</Operator> <Value>niet leeg</Value>',
  'search.operator.defined.name': 'niet leeg',
  /* Value should not be defined */
  'search.operator.not-defined.description': '<Field/> <Operator>is</Operator> <Value>leeg</Value>',
  'search.operator.not-defined.name': 'leeg',
  /* Number should be the given filter value */
  'search.operator.number-equal.description':
    '<Field/> <Operator>is</Operator> <Value>{{value}}</Value>',
  'search.operator.number-equal.name': 'is',
  /* Number should be greater than given filter value */
  'search.operator.number-gt.description':
    '<Field/> <Operator>></Operator> <Value>{{value}}</Value>',
  'search.operator.number-gt.name': 'groter dan',
  /* Number should be greater than or the given filter value */
  'search.operator.number-gte.description':
    '<Field/> <Operator>≥</Operator> <Value>{{value}}</Value>',
  'search.operator.number-gte.name': 'groter dan of gelijk aan',
  /* Number should be less than given filter value */
  'search.operator.number-lt.description':
    '<Field/> <Operator><</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lt.name': 'minder dan',
  /* Number should be less than or the given filter value */
  'search.operator.number-lte.description':
    '<Field/> <Operator>≤</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lte.name': 'minder dan of gelijk aan',
  /* Number should not be the given filter value */
  'search.operator.number-not-equal.description':
    '<Field/> <Operator>is niet</Operator> <Value>{{value}}</Value>',
  'search.operator.number-not-equal.name': 'is niet',
  /* Number should be within the range of given filter values */
  'search.operator.number-range.description':
    '<Field/> <Operator>ligt tussen</Operator> <Value>{{from}} → {{to}}</Value>',
  'search.operator.number-range.name': 'ligt tussen',
  /* Portable Text should contain the given filter value */
  'search.operator.portable-text-contains.description':
    '<Field/> <Operator>bevat</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-contains.name': 'bevat',
  /* Portable Text should be the given filter value */
  'search.operator.portable-text-equal.description':
    '<Field/> <Operator>is</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-equal.name': 'is',
  /* Portable Text should not contain the given filter value */
  'search.operator.portable-text-not-contains.description':
    '<Field/> <Operator>bevat niet</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-contains.name': 'bevat niet',
  /* Portable Text should not be the given filter value */
  'search.operator.portable-text-not-equal.description':
    '<Field/> <Operator>is niet</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-equal.name': 'is niet',
  /* References the given asset (file) */
  'search.operator.reference-asset-file.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-file.name': 'bestand',
  /* References the given asset (image) */
  'search.operator.reference-asset-image.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-image.name': 'afbeelding',
  /* References the given document */
  'search.operator.reference-document.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-document.name': 'document',
  /* Reference should be the given document */
  'search.operator.reference-equal.description':
    '<Field/> <Operator>is</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-equal.name': 'is',
  /* Reference should not be the given document */
  'search.operator.reference-not-equal.description':
    '<Field/> <Operator>is niet</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-not-equal.name': 'is niet',
  /* Slug contains the given value */
  'search.operator.slug-contains.description':
    '<Field/> <Operator>bevat</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-contains.name': 'bevat',
  /* Slug equals the given filter value */
  'search.operator.slug-equal.description':
    '<Field/> <Operator>is</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-equal.name': 'is',
  /* Slug does not contain the given value */
  'search.operator.slug-not-contains.description':
    '<Field/> <Operator>bevat niet</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-contains.name': 'bevat niet',
  /* Slug does not equal the given filter value */
  'search.operator.slug-not-equal.description':
    '<Field/> <Operator>is niet</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-equal.name': 'is niet',
  /* String contains the given filter value */
  'search.operator.string-contains.description':
    '<Field/> <Operator>bevat</Operator> <Value>{{value}}</Value>',
  'search.operator.string-contains.name': 'bevat',
  /* String equals the given filter value */
  'search.operator.string-equal.description':
    '<Field/> <Operator>is</Operator> <Value>{{value}}</Value>',
  'search.operator.string-equal.name': 'is',
  /* String equals one of the predefined allowed values */
  'search.operator.string-list-equal.description':
    '<Field/> <Operator>is</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-equal.name': 'is',
  /* String does not equal one of the predefined allowed values */
  'search.operator.string-list-not-equal.description':
    '<Field/> <Operator>is niet</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-not-equal.name': 'is niet',
  /* String does not contain the given filter value */
  'search.operator.string-not-contains.description':
    '<Field/> <Operator>bevat niet</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-contains.name': 'bevat niet',
  /* String does not equal the given filter value */
  'search.operator.string-not-equal.description':
    '<Field/> <Operator>is niet</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-equal.name': 'is niet',
  /** Label for the "Best match" search ordering type */
  'search.ordering.best-match-label': 'Beste overeenkomst',
  /** Label for the "Created: Oldest first" search ordering type */
  'search.ordering.created-ascending-label': 'Aangemaakt: Oudste eerst',
  /** Label for the "Created: Newest first" search ordering type */
  'search.ordering.created-descending-label': 'Aangemaakt: Nieuwste eerst',
  /** Label for the "Updated: Oldest first" search ordering type */
  'search.ordering.updated-ascending-label': 'Bijgewerkt: Oudste eerst',
  /** Label for the "Updated: Newest first" search ordering type */
  'search.ordering.updated-descending-label': 'Bijgewerkt: Nieuwste eerst',
  /** Placeholder text for the global search input field */
  'search.placeholder': 'Zoeken',
  /** Accessibility label for the recent searches section, shown when no valid search terms has been given */
  'search.recent-searches-aria-label': 'Recente zoekopdrachten',
  /** Label/heading shown for the recent searches section */
  'search.recent-searches-label': 'Recente zoekopdrachten',
  /** Accessibility label for the search results section, shown when the user has typed valid terms */
  'search.search-results-aria-label': 'Zoekresultaten',

  /** Accessibility label for the navbar status button */
  'status-button.aria-label': undefined, // 'Configuration status'

  /** Description for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-description':
    'Documentgeschiedenistransacties zijn niet beïnvloed.',
  /** Title for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-title':
    'Er is een fout opgetreden bij het ophalen van documentwijzigingen.',
  /** Error description for when the document doesn't have history */
  'timeline.error.no-document-history-description':
    'Wanneer u de inhoud van het document wijzigt, zullen de documentversies in dit menu verschijnen.',
  /** Error title for when the document doesn't have history */
  'timeline.error.no-document-history-title': 'Geen documentgeschiedenis',
  /** Error prompt when revision cannot be loaded */
  'timeline.error.unable-to-load-revision': 'Kan revisie niet laden',
  /** Label for when the timeline item is the latest in the history */
  'timeline.latest': 'Laatste',
  /** Label for latest version for timeline menu dropdown */
  'timeline.latest-version': 'Laatste versie',
  /** The aria-label for the list of revisions in the timeline */
  'timeline.list.aria-label': 'Documentrevisies',
  /** Label for loading history */
  'timeline.loading-history': 'Geschiedenis laden…',
  /** Label shown in review changes timeline when a document has been created */
  'timeline.operation.created': 'Gemaakt',
  /** Label shown in review changes timeline when a document has been created, with a timestamp */
  'timeline.operation.created_timestamp': 'Gemaakt: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was initially created */
  'timeline.operation.created-initial': 'Gemaakt',
  /** Label shown in review changes timeline when a document was initially created, with a timestamp */
  'timeline.operation.created-initial_timestamp': 'Gemaakt: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been deleted */
  'timeline.operation.deleted': 'Verwijderd',
  /** Label shown in review changes timeline when a document has been deleted, with a timestamp */
  'timeline.operation.deleted_timestamp': 'Verwijderd: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been discarded */
  'timeline.operation.draft-discarded': 'Concept verworpen',
  /** Label shown in review changes timeline when a draft has been discarded, with a timestamp */
  'timeline.operation.draft-discarded_timestamp': 'Concept verworpen: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been edited */
  'timeline.operation.edited-draft': 'Bewerkt',
  /** Label shown in review changes timeline when a draft has been edited, with a timestamp */
  'timeline.operation.edited-draft_timestamp': 'Bewerkt: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been edited live */
  'timeline.operation.edited-live': 'Live bewerkt',
  /** Label shown in review changes timeline when a document has been edited live, with a timestamp */
  'timeline.operation.edited-live_timestamp': 'Live bewerkt: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was published */
  'timeline.operation.published': 'Gepubliceerd',
  /** Label shown in review changes timeline when a document was published, with a timestamp */
  'timeline.operation.published_timestamp': 'Gepubliceerd: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was unpublished */
  'timeline.operation.unpublished': 'Niet gepubliceerd',
  /** Label shown in review changes timeline when a document was unpublished, with a timestamp */
  'timeline.operation.unpublished_timestamp': 'Niet gepubliceerd: {{timestamp, datetime}}',
  /**
   * Label for determining since which version the changes for timeline menu dropdown are showing.
   * Receives the time label as a parameter (`timestamp`).
   */
  'timeline.since': 'Sinds: {{timestamp, datetime}}',
  /** Label for missing change version for timeline menu dropdown are showing */
  'timeline.since-version-missing': 'Sinds: onbekende versie',

  /**Aria label for the action buttons in the PTE toolbar */
  'toolbar.portable-text.action-button-aria-label': undefined, // '{{action}}'

  /** Label for button showing the free trial days left */
  'user-menu.action.free-trial_one': '{{count}} dag over in proefperiode',
  'user-menu.action.free-trial_other': '{{count}} dagen over in proefperiode',
  /** Label for the button showed after trial ended */
  'user-menu.action.free-trial-finished': 'Upgrade van gratis',
  /** Label for action to invite members to the current sanity project */
  'user-menu.action.invite-members': 'Leden uitnodigen',
  /** Accessibility label for action to invite members to the current sanity project */
  'user-menu.action.invite-members-aria-label': 'Leden uitnodigen',
  /** Label for action to manage the current sanity project */
  'user-menu.action.manage-project': 'Project beheren',
  /** Accessibility label for the action to manage the current project */
  'user-menu.action.manage-project-aria-label': 'Project beheren',
  /** Tooltip helper text when portable text annotation is disabled for empty block*/
  'user-menu.action.portable-text.annotation-disabled_empty-block':
    'Kan {{name}} niet toepassen op leeg blok',
  /** Tooltip helper text when portable text annotation is disabled for multiple blocks */
  'user-menu.action.portable-text.annotation-disabled_multiple-blocks':
    'Kan {{name}} niet toepassen op meerdere blokken',
  /** Label for action to sign out of the current sanity project */
  'user-menu.action.sign-out': 'Uitloggen',
  /** Title for appearance section for the current studio (dark / light / system scheme) */
  'user-menu.appearance-title': 'Uiterlijk',
  /** Label for close menu button for user menu */
  'user-menu.close-menu': 'Menu sluiten',
  /** Description for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-description': 'Gebruik donker uiterlijk',
  /** Title for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-title': 'Donker',
  /** Description for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-description': 'Gebruik licht uiterlijk',
  /** Title for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-title': 'Licht',
  /** Description for using "system apparence" in the appearance user menu */
  'user-menu.color-scheme.system-description': 'Gebruik systeemuiterlijk',
  /** Title for using system apparence in the appearance user menu */
  'user-menu.color-scheme.system-title': 'Systeem',
  /** Title for locale section for the current studio */
  'user-menu.locale-title': 'Taal',
  /** Label for tooltip to show which provider the currently logged in user is using */
  'user-menu.login-provider': 'Ingelogd met {{providerTitle}}',
  /** Label for open menu button for user menu */
  'user-menu.open-menu': 'Menu openen',

  /**
   * Label for action to add a workspace (currently a developer-oriented action, as this will
   * lead to the documentation on workspace configuration)
   */
  'workspaces.action.add-workspace': 'Werkruimte toevoegen',
  /**
   * Label for action to choose a different workspace, in the case where you are not logged in,
   * have selected a workspace, and are faced with the authentication options for the selected
   * workspace. In other words, label for the action shown when you have reconsidered which
   * workspace to authenticate in.
   */
  'workspaces.action.choose-another-workspace': 'Kies een andere werkruimte',
  /** Label for heading that indicates that you can choose your workspace */
  'workspaces.choose-your-workspace-label': 'Kies uw werkruimte',
  /** Label for the workspace menu */
  'workspaces.select-workspace-aria-label': 'Selecteer werkruimte',
  /** Button label for opening the workspace switcher */
  'workspaces.select-workspace-label': 'Selecteer werkruimte',
  /** Tooltip for the workspace menu */
  'workspaces.select-workspace-tooltip': 'Werkruimte selecteren',
  /** Title for Workplaces dropdown menu */
  'workspaces.title': 'Werkruimtes',
})
