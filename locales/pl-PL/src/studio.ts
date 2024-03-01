import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Menu item for deleting the asset */
  'asset-source.asset-list.menu.delete': 'Usuń',
  /** Menu item for showing where a particular asset is used */
  'asset-source.asset-list.menu.show-usage': 'Pokaż użycie',
  /** Header in usage dialog for file assets */
  'asset-source.asset-usage-dialog.header_file': 'Dokumenty używające pliku',
  /** Header in usage dialog for image assets */
  'asset-source.asset-usage-dialog.header_image': 'Dokumenty używające obrazu',
  /** Text shown in usage dialog when loading documents using the selected asset */
  'asset-source.asset-usage-dialog.loading': 'Ładowanie…',
  /** Text for cancel action in delete-asset dialog */
  'asset-source.delete-dialog.action.cancel': 'Anuluj',
  /** Text for "confirm delete" action in delete-asset dialog */
  'asset-source.delete-dialog.action.delete': 'Usuń',
  /** Dialog header for delete-asset dialog when deleting a file */
  'asset-source.delete-dialog.header_file': 'Usuń plik',
  /** Dialog header for delete-asset dialog when deleting an image */
  'asset-source.delete-dialog.header_image': 'Usuń obraz',
  /** Text shown in delete dialog when loading documents using the selected asset */
  'asset-source.delete-dialog.loading': 'Ładowanie…',
  /** Message confirming to delete *named* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_named':
    'Zamierzasz usunąć plik <strong>{{filename}}}</strong> oraz jego metadane. Czy jesteś pewien?',
  /** Message confirming to delete *unnamed* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_unnamed':
    'Zamierzasz usunąć plik oraz jego metadane. Czy jesteś pewien?',
  /** Message confirming to delete *named* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_named':
    'Zamierzasz usunąć obraz <strong>{{filename}}</strong> oraz jego metadane. Czy jesteś pewien?',
  /** Message confirming to delete *unnamed* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_unnamed':
    'Zamierzasz usunąć obraz oraz jego metadane. Czy jesteś pewien?',
  /** Alt text showing on image preview in delete asset dialog  */
  'asset-source.delete-dialog.usage-list.image-preview-alt': 'Podgląd obrazu',
  /** Warning message showing when *named* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_named':
    '{{filename}} nie może zostać usunięty, ponieważ jest używany. Aby usunąć ten plik, musisz najpierw usunąć wszystkie jego użycia.',
  /** Warning message showing when *unnamed* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_unnamed':
    'Ten plik nie może zostać usunięty, ponieważ jest używany. Aby go usunąć, musisz najpierw usunąć wszystkie jego użycia.',
  /** Warning message showing when *named* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_named':
    '{{filename}} nie może zostać usunięty, ponieważ jest używany. Aby usunąć ten obraz, musisz najpierw usunąć wszystkie jego użycia.',
  /** Warning message showing when *unnamed* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_unnamed':
    'Ten obraz nie może zostać usunięty, ponieważ jest używany. Aby go usunąć, musisz najpierw usunąć wszystkie jego użycia.',
  /** Text shown when the list of assets only include a specific set of types */
  'asset-source.dialog.accept-message':
    'Pokazuję tylko zasoby akceptowanych typów: <strong>{{acceptTypes}}</strong>',
  /** Keys shared between both image asset source and file asset source */
  /** Select asset dialog title for files */
  'asset-source.dialog.default-title_file': 'Wybierz plik',
  /** Select asset dialog title for images */
  'asset-source.dialog.default-title_image': 'Wybierz obraz',
  /** Select asset dialog load more items */
  'asset-source.dialog.load-more': 'Załaduj więcej',
  /** Text shown when selecting a file but there's no files to select from */
  'asset-source.dialog.no-assets_file': 'Brak plików',
  /** Text shown when selecting an image but there's no images to select from */
  'asset-source.dialog.no-assets_image': 'Brak obrazów',
  'asset-source.file.asset-list.action.delete.disabled-cannot-delete-current-file':
    'Nie można usunąć aktualnie wybranego pliku',
  'asset-source.file.asset-list.action.delete.text': 'Usuń',
  'asset-source.file.asset-list.action.delete.title': 'Usuń plik',
  'asset-source.file.asset-list.action.select-file.title': 'Wybierz plik {{filename}}',
  'asset-source.file.asset-list.action.show-usage.title': 'Pokaż użycie',
  'asset-source.file.asset-list.delete-failed': 'Nie udało się usunąć pliku',
  'asset-source.file.asset-list.delete-successful': 'Plik został usunięty',
  'asset-source.file.asset-list.header.date-added': 'Data dodania',
  /** File asset source */
  'asset-source.file.asset-list.header.filename': 'Nazwa pliku',
  'asset-source.file.asset-list.header.size': 'Rozmiar',
  'asset-source.file.asset-list.header.type': 'Typ',
  /** Text displayed on button or menu invoking the file asset source */
  'asset-source.file.title': 'Przesłane pliki',
  'asset-source.image.asset-list.delete-failed': 'Nie udało się usunąć obrazu',
  /** Image asset source */
  'asset-source.image.asset-list.delete-successful': 'Obraz został usunięty',
  /** Text displayed on button or menu invoking the image asset source */
  'asset-source.image.title': 'Przesłane obrazy',
  'asset-source.usage-list.documents-using-file_named_one':
    'Jeden dokument używa pliku <code>{{filename}}</code>',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *named* file **/
  'asset-source.usage-list.documents-using-file_named_zero':
    'Żaden dokument nie używa pliku <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-file_unnamed_one': 'Jeden dokument używa tego pliku',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *unnamed* file **/
  'asset-source.usage-list.documents-using-file_unnamed_zero':
    'Żaden dokument nie używa tego pliku',
  'asset-source.usage-list.documents-using-image_named_one':
    'Jeden dokument używa obrazu <code>{{filename}}</code>',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *named* image **/
  'asset-source.usage-list.documents-using-image_named_zero':
    'Żaden dokument nie używa obrazu <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-image_unnamed_one': 'Jeden dokument używa tego obrazu',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *unnamed* image **/
  'asset-source.usage-list.documents-using-image_unnamed_zero':
    'Żaden dokument nie używa tego obrazu',

  /** Action message for navigating to next month */
  'calendar.action.go-to-next-month': 'Przejdź do następnego miesiąca',
  /** Action message for navigating to next year */
  'calendar.action.go-to-next-year': 'Przejdź do następnego roku',
  /** Action message for navigating to previous month */
  'calendar.action.go-to-previous-month': 'Idź do poprzedniego miesiąca',
  /** Action message for navigating to previous year */
  'calendar.action.go-to-previous-year': 'Idź do poprzedniego roku',
  /* Label for navigating the calendar to "today", without _selecting_ today. Short form, eg `Today`, not `Go to today` */
  'calendar.action.go-to-today': 'Dzisiaj',
  /* Accessibility label for navigating the calendar to "today", without _selecting_ today */
  'calendar.action.go-to-today-aria-label': 'Idź do dzisiaj',
  /* Label for navigating the calendar to "tomorrow", without _selecting_ tomorrow. Short form, eg `Tomorrow`, not `Go to tomorrow` */
  'calendar.action.go-to-tomorrow': 'Jutro',
  /* Label for navigating the calendar to "yesterday", without _selecting_ yesterday. Short form, eg `Yesterday`, not `Go to yesterday` */
  'calendar.action.go-to-yesterday': 'Wczoraj',
  /** Label for switch that controls whether or not to include time in given timestamp */
  'calendar.action.include-time-label': 'Uwzględnij czas',
  /** Action message for selecting the hour */
  'calendar.action.select-hour': 'Wybierz godzinę',
  /** Action message for selecting the minute */
  'calendar.action.select-minute': 'Wybierz minutę',
  /** Action message for setting to the current time */
  'calendar.action.set-to-current-time': 'Ustaw na aktualny czas',
  /** Label for selecting an hour preset. Receives a `time` param as a string on hh:mm format and a `date` param as a Date instance denoting the preset date */
  'calendar.action.set-to-time-preset': '{{time}} w dniu {{date, datetime}}',
  /** Error message displayed in calendar when entered date is not the correct format */
  'calendar.error.must-be-in-format': 'Musisz użyć formatu <Emphasis>{{exampleDate}}</Emphasis>',
  /** Month name for April */
  'calendar.month-names.april': 'Kwiecień',
  /** Month name for August */
  'calendar.month-names.august': 'Sierpień',
  /** Month name for December */
  'calendar.month-names.december': 'Grudzień',
  /** Month name for February */
  'calendar.month-names.february': 'Luty',
  /** Month name for January */
  'calendar.month-names.january': 'Styczeń',
  /** Month name for July */
  'calendar.month-names.july': 'Lipiec',
  /** Month name for June */
  'calendar.month-names.june': 'Czerwiec',
  /** Month name for March */
  'calendar.month-names.march': 'Marzec',
  /** Month name for May */
  'calendar.month-names.may': 'Maj',
  /** Month name for November */
  'calendar.month-names.november': 'Listopad',
  /** Month name for October */
  'calendar.month-names.october': 'Październik',
  /** Month name for September */
  'calendar.month-names.september': 'Wrzesień',
  /** Short weekday name for Friday */
  'calendar.weekday-names.short.friday': 'Pt',
  /** Short weekday name for Monday */
  'calendar.weekday-names.short.monday': 'Pon',
  /** Short weekday name for Saturdayday */
  'calendar.weekday-names.short.saturday': 'Sob',
  /** Short weekday name for Sunday */
  'calendar.weekday-names.short.sunday': 'Niedz',
  /** Short weekday name for Thursday */
  'calendar.weekday-names.short.thursday': 'Czw',
  /** Short weekday name for Tuesday */
  'calendar.weekday-names.short.tuesday': 'Wt',
  /** Short weekday name for Wednesday */
  'calendar.weekday-names.short.wednesday': 'Śr',

  /** Label for the close button label in Review Changes pane */
  'changes.action.close-label': 'Zamknij przegląd zmian',
  /** Cancel label for revert button prompt action */
  'changes.action.revert-all-cancel': 'Anuluj',
  /** Revert all confirm label for revert button action - used on prompt button + review changes pane */
  'changes.action.revert-all-confirm': 'Cofnij wszystko',
  /** Prompt for confirming revert change (singular) label for field change action */
  'changes.action.revert-changes-confirm-change_one': 'Cofnij zmianę',
  /** Prompt for reverting changes for a field change */
  'changes.action.revert-changes-description': 'Czy na pewno chcesz cofnąć zmiany?',
  /** Prompt for reverting changes for a group change, eg multiple changes */
  'changes.action.revert-changes-description_one': 'Czy na pewno chcesz cofnąć zmianę?',
  /** Label for when the action of the change was to set something that was previously empty, eg a field was given a value, an array item was added, an asset was selected or similar */
  'changes.added-label': 'Dodano',
  /** Array diff: An item was added in a given position (`{{position}}`) */
  'changes.array.item-added-in-position': 'Dodano na pozycji {{position}}',
  'changes.array.item-moved_down_one': 'Przesunięto o {{count}} pozycję w dół',
  /**
   * Array diff: An item was moved within the array.
   * Receives `{{count}}` representing number of positions it moved.
   * Context is the direction of the move, either `up` or `down`.
   */
  'changes.array.item-moved_up_one': 'Przesunięto o {{count}} pozycję w górę',
  /** Array diff: An item was removed from a given position (`{{position}}`) */
  'changes.array.item-removed-from-position': 'Usunięto z pozycji {{position}}',
  /** Accessibility label for the "change bar" shown when there are edits on a field-level */
  'changes.change-bar.aria-label': 'Przegląd zmian',
  /** Label for when the action of the change was _not_ an add/remove, eg a text field changed value, an image was changed from one asset to another or similar */
  'changes.changed-label': 'Zmieniono',
  /** Label and text for tooltip that indicates the authors of the changes */
  'changes.changes-by-author': 'Zmiany przez',
  /** Additional text shown in development mode when a diff component crashes during rendering */
  'changes.error-boundary.developer-info':
    'Sprawdź konsolę deweloperską, aby uzyskać więcej informacji',
  /** Text shown when a diff component crashes during rendering, triggering the error boundary */
  'changes.error-boundary.title': 'Renderowanie zmian w tym polu spowodowało błąd',
  /** Error message shown when the value of a field is not the expected one */
  'changes.error.incorrect-type-message':
    'Błąd wartości: Wartość jest typu "<code>{{actualType}}</code>", oczekiwano "<code>{{expectedType}}</code>"',
  /** File diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.file.meta-info-fallback-title': 'Bez tytułu',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.crop-changed': 'Zmieniono kadrowanie',
  /** Image diff: Text shown if the previous image asset was deleted (shouldn't theoretically happen) */
  'changes.image.deleted': 'Obraz usunięty',
  /** Image diff: Text shown if the image failed to be loaded when previewing it */
  'changes.image.error-loading-image': 'Błąd ładowania obrazu',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.hotspot-changed': 'Zmieniono hotspot',
  /** Image diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.image.meta-info-fallback-title': 'Bez tytułu',
  /** Image diff: Text shown if no asset has been set for the field (but has metadata changes) */
  'changes.image.no-asset-set': 'Obraz nie ustawiony',
  /** Image diff: Text shown when the from/to state has/had no image */
  'changes.image.no-image-placeholder': '(brak obrazu)',
  /** Label for the "from" value in the change inspector */
  'changes.inspector.from-label': 'Od',
  /** Label for the "meta" (field path, action etc) information in the change inspector */
  'changes.inspector.meta-label': 'Meta',
  /** Label for the "to" value in the change inspector */
  'changes.inspector.to-label': 'Do',
  /** Loading author of change in the differences tooltip in the review changes pane */
  'changes.loading-author': 'Ładowanie…',
  /** Loading changes in Review Changes Pane */
  'changes.loading-changes': 'Ładowanie zmian…',
  /** No Changes description in the Review Changes pane */
  'changes.no-changes-description':
    'Edytuj dokument lub wybierz starszą wersję na osi czasu, aby zobaczyć listę zmian w tym panelu.',
  /** No Changes title in the Review Changes pane */
  'changes.no-changes-title': 'Nie ma zmian',
  /** Portable Text diff: An annotation was added */
  'changes.portable-text.annotation_added': 'Dodano adnotację',
  /** Portable Text diff: An annotation was changed */
  'changes.portable-text.annotation_changed': 'Zmieniono adnotację',
  /** Portable Text diff: An annotation was removed */
  'changes.portable-text.annotation_removed': 'Usunięto adnotację',
  /** Portable Text diff: An annotation was left unchanged */
  'changes.portable-text.annotation_unchanged': 'Adnotacja bez zmian',
  /** Portable Text diff: A block changed from one style to another (eg `normal` to `h1` or similar) */
  'changes.portable-text.block-style-changed':
    'Zmieniono styl bloku z "{{fromStyle}}" na "{{toStyle}}"',
  /** Portable Text diff: Change formatting of text (setting/unsetting marks, eg bold/italic etc) */
  'changes.portable-text.changed-formatting': 'Zmieniono formatowanie',
  /** Portable Text diff: An empty inline object is part of a change */
  'changes.portable-text.empty-inline-object': 'Pusty {{inlineObjectType}}',
  /** Portable Text diff: An empty object is the result of adding/removing an annotation */
  'changes.portable-text.empty-object-annotation': 'Pusta {{annotationType}}',
  /** Portable Text diff: Added a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_added': 'Dodano pusty tekst',
  /** Portable Text diff: Changed a block that contained no text (eg empty block) */
  'changes.portable-text.empty-text_changed': 'Zmieniono pusty tekst',
  /** Portable Text diff: Removed a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_removed': 'Usunięto pusty tekst',
  /** Portable Text diff: An inline object was added */
  'changes.portable-text.inline-object_added': 'Dodano obiekt w linii',
  /** Portable Text diff: An inline object was changed */
  'changes.portable-text.inline-object_changed': 'Zmieniony obiekt w tekście',
  /** Portable Text diff: An inline object was removed */
  'changes.portable-text.inline-object_removed': 'Usunięty obiekt w tekście',
  /** Portable Text diff: An inline object was left unchanged */
  'changes.portable-text.inline-object_unchanged': 'Niezmieniony obiekt w tekście',
  /** Portable Text diff: Added a chunk of text */
  'changes.portable-text.text_added': 'Dodany tekst',
  /** Portable Text diff: Removed a chunk of text */
  'changes.portable-text.text_removed': 'Usunięty tekst',
  /** Portable Text diff: Annotation has an unknown schema type */
  'changes.portable-text.unknown-annotation-schema-type': 'Nieznany typ schematu adnotacji',
  /** Portable Text diff: Inline object has an unknown schema type */
  'changes.portable-text.unknown-inline-object-schema-type':
    'Nieznany typ schematu obiektu w tekście',
  /** Label for when the action of the change was a removal, eg a field was cleared, an array item was removed, an asset was deselected or similar */
  'changes.removed-label': 'Usunięte',
  /** Title for the Review Changes pane */
  'changes.title': 'Przejrzyj zmiany',

  /** --- Common components --- */
  /** Tooltip text for context menu buttons */
  'common.context-menu-button.tooltip': 'Pokaż więcej',
  /** Default text for dialog cancel button */
  'common.dialog.cancel-button.text': 'Anuluj',
  /** Default text for dialog confirm button */
  'common.dialog.confirm-button.text': 'Potwierdź',
  /** Default text in shared loader text / spinner lockup */
  'common.loading': 'Ładowanie',

  /** --- Configuration issues --- */
  /** Tooltip displayed on configuration issues button */
  'configuration-issues.button.tooltip': 'Znaleziono problemy z konfiguracją',

  /** The fallback title for an ordering menu item if no localized titles are provided. */
  'default-menu-item.fallback-title': 'Sortuj według {{title}}',

  /** Title for the default ordering/SortOrder if no orderings are provided and the caption field is found */
  'default-orderings.caption': 'Sortuj według Podpisu',
  /** Title for the default ordering/SortOrder if no orderings are provided and the description field is found */
  'default-orderings.description': 'Sortuj według Opisu',
  /** Title for the default ordering/SortOrder if no orderings are provided and the header field is found */
  'default-orderings.header': 'Sortuj według Nagłówka',
  /** Title for the default ordering/SortOrder if no orderings are provided and the heading field is found */
  'default-orderings.heading': 'Sortuj według Nagłówka',
  /** Title for the default ordering/SortOrder if no orderings are provided and the label field is found */
  'default-orderings.label': 'Sortuj według Etykiety',
  /** Title for the default ordering/SortOrder if no orderings are provided and the name field is found */
  'default-orderings.name': 'Sortuj według Nazwy',
  /** Title for the default ordering/SortOrder if no orderings are provided and the title field is found */
  'default-orderings.title': 'Sortuj według Tytułu',

  /** Label to show in the document footer indicating the last edited date of the document */
  'document-status.edited': 'Edytowano {{date}}',
  /** Label to show in the document footer indicating the document is not published*/
  'document-status.not-published': 'Nieopublikowany',
  /** Label to show in the document footer indicating the published date of the document */
  'document-status.published': 'Opublikowano {{date}}',

  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.duplicate-keys-alert.details.additional-description':
    'Wartość właściwości <code>_key</code> musi być unikalnym ciągiem znaków.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property of each elements has been generated non-uniquely. */
  'form.error.duplicate-keys-alert.details.description':
    'Zazwyczaj dzieje się to, gdy elementy są tworzone za pomocą klienta API, a właściwość <code>_key</code> każdego elementu została wygenerowana w sposób nieunikalny.',
  /** Developer info */
  'form.error.duplicate-keys-alert.details.title': 'Informacje dla programistów',
  /** Generate unique keys */
  'form.error.duplicate-keys-alert.generate-button.text': 'Generuj unikalne klucze',
  /** Several items in this list share the same identifier (key). Every item must have an unique identifier. */
  'form.error.duplicate-keys-alert.summary':
    'Kilka elementów na tej liście ma ten sam identyfikator (klucz). Każdy element musi mieć unikalny identyfikator.',
  /** Non-unique keys */
  'form.error.duplicate-keys-alert.title': 'Nieunikalne klucze',
  /** Error text shown when a field with a given name cannot be found in the schema or is conditionally hidden but explicitly told to render  */
  'form.error.field-not-found':
    'Pole "{{fieldName}}" nie znalezione wśród elementów – sprawdź, czy jest zdefiniowane w schemacie i czy nie zostało warunkowo ukryte.',
  /** Add missing keys */
  'form.error.missing-keys-alert.add-button.text': 'Dodaj brakujące klucze',
  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.missing-keys-alert.details.additional-description':
    'Wartość właściwości <code>_key</code> musi być unikalnym ciągiem znaków.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property has not been included. */
  'form.error.missing-keys-alert.details.description':
    'Zazwyczaj dzieje się to, gdy elementy są tworzone za pomocą klienta API, a właściwość <code>_key</code> nie została dołączona.',
  /** Developer info */
  'form.error.missing-keys-alert.details.title': 'Informacje dla programistów',
  /** Some items in the list are missing their keys. This must be fixed in order to edit the list. */
  'form.error.missing-keys-alert.summary':
    'Niektórym elementom na liście brakuje kluczy. Należy to naprawić, aby móc edytować listę.',
  /** Missing keys */
  'form.error.missing-keys-alert.title': 'Brakujące klucze',
  /** This usually happens when items are created using an API client, or when a custom input component has added invalid data to the list. */
  'form.error.mixed-array-alert.details.description':
    'Zazwyczaj dzieje się to, gdy elementy są tworzone za pomocą klienta API, lub gdy niestandardowy komponent wejściowy dodał nieprawidłowe dane do listy.',
  /** Developer info */
  'form.error.mixed-array-alert.details.title': 'Informacje dla programistów',
  /**  Remove non-object values */
  'form.error.mixed-array-alert.remove-button.text': 'Usuń wartości inne niż obiekty',
  /** Some items in this list are not objects. This must be fixed in order to edit the list. */
  'form.error.mixed-array-alert.summary':
    'Niektóre elementy na tej liście nie są obiektami. Musi to zostać naprawione, aby można było edytować listę.',
  /** Invalid list values */
  'form.error.mixed-array-alert.title': 'Nieprawidłowe wartości listy',
  /** Error text shown when form is unable to find an array item at a given indexed path */
  'form.error.no-array-item-at-index':
    'Nie znaleziono elementu tablicy na indeksie <code>{{index}}</code> na ścieżce <code>{{path}}</code>',
  /** Error text shown when form is unable to find an array item at a given keyed path */
  'form.error.no-array-item-at-key':
    'Nie znaleziono elementu tablicy z `_key` <code>"{{key}}"</code> na ścieżce <code>{{path}}</code>',
  /** Form field deprecated label */
  'form.field.deprecated-label': 'przestarzałe',
  /** Fallback title shown above field if it has no defined title */
  'form.field.untitled-field-label': 'Bez tytułu',
  /** Fallback title shown above fieldset if it has no defined title */
  'form.field.untitled-fieldset-label': 'Bez tytułu',
  /** Accessibility label for the icon that indicates the field has a validation error */
  'form.validation.has-error-aria-label': 'Zawiera błąd',
  /** Accessibility label for the icon that indicates the field has validation information */
  'form.validation.has-info-aria-label': 'Zawiera informacje',
  /** Accessibility label for the icon that indicates the field has a validation warning */
  'form.validation.has-warning-aria-label': 'Zawiera ostrzeżenie',
  /** Text shown when summarizing validation information, when the field has one or more errors */
  'form.validation.summary.errors-count_one': '{{count}} błąd',
  /** Text shown when summarizing validation information, when the field has one or more warnings */
  'form.validation.summary.warnings-count_one': '{{count}} ostrzeżenie',

  /** Tooltip for free trial navbar button indicating remaining days */
  'free-trial.tooltip.days-count_one': 'Pozostał {{count}} dzień w okresie próbnym',
  /** Tooltip for free trial navbar button, once trial has ended */
  'free-trial.tooltip.trial-finished': 'Ulepsz swój projekt',

  /**
   * Label for "contact sales" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.contact-sales': 'Kontakt z działem sprzedaży',
  /**
   * Label for "help and support" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.help-and-support': 'Pomoc i wsparcie',
  /**
   * Label for "join our community" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.join-our-community': 'Dołącz do naszej społeczności',
  /** Information for what the latest sanity version is */
  'help-resources.latest-sanity-version': 'Najnowsza wersja to {{latestVersion}}',
  /** Information for what studio version the current studio is running */
  'help-resources.studio-version': 'Wersja Sanity Studio to {{studioVersion}}',
  /** Title for help and resources menus */
  'help-resources.title': 'Pomoc i zasoby',

  /** Text for button to cancel an ongoing upload */
  'input.files.common.cancel-upload': 'Anuluj',
  /** Text for file input button in upload placeholder */
  'input.files.common.upload-placeholder.file-input-button.text': 'Prześlij',
  /** Uploading <FileName/> */
  'input.files.common.upload-progress': 'Przesyłanie <FileName/>',
  /** The referenced document cannot be opened, because the URL failed to be resolved */
  'input.reference.document-cannot-be-opened.failed-to-resolve-url':
    'Nie można otworzyć tego dokumentu (nie udało się rozwiązać URL do Studio)',

  /** Label for adding item after a specific array item */
  'inputs.array.action.add-after': 'Dodaj element po',
  /** Label for adding item before a specific array item */
  'inputs.array.action.add-before': 'Dodaj element przed',
  /** Label for adding array item action when the schema allows for only one schema type */
  'inputs.array.action.add-item': 'Dodaj element',
  /**
   * Label for adding one array item action when the schema allows for multiple schema types,
   * eg. will prompt the user to select a type once triggered
   */
  'inputs.array.action.add-item-select-type': 'Dodaj element...',
  /** Array drag handle button tooltip */
  'inputs.array.action.drag.tooltip': 'Przeciągnij, aby zmienić kolejność',
  /** Label for duplicating an array item  */
  'inputs.array.action.duplicate': 'Duplikuj',
  /** Label for editing the item of a specific type, eg "Edit Person" */
  'inputs.array.action.edit': 'Edytuj {{itemTypeTitle}}',
  /** Label for removing an array item action  */
  'inputs.array.action.remove': 'Usuń',
  /** Label for removing action when an array item has an error  */
  'inputs.array.action.remove-invalid-item': 'Usuń',
  /** Label for viewing the item of a specific type, eg "View Person" */
  'inputs.array.action.view': 'Zobacz {{itemTypeTitle}}',
  /** Error description for the array item tooltip that explains that the current item can still be moved or deleted but not edited since the schema definition is not found */
  'inputs.array.error.can-delete-but-no-edit-description':
    'Możesz nadal przenieść lub usunąć ten element, ale nie można go edytować, ponieważ definicja schematu dla jego typu nigdzie nie została znaleziona.',
  /** Error label for toast when array could not resolve the initial value */
  'inputs.array.error.cannot-resolve-initial-value-title':
    'Nie można rozwiązać wartości początkowej dla typu: {{schemaTypeTitle}}: {{errorMessage}}.',
  /** Error label for toast when trying to upload one array item of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_one':
    'Następującego elementu nie można przesłać, ponieważ nie istnieje znana konwersja z typu zawartości do elementu tablicy:',
  /** Error description for the array item tooltip that explains that the current type item is not valid for the list  */
  'inputs.array.error.current-schema-not-declare-description':
    'Bieżący schemat nie deklaruje elementów typu <code>{{typeName}}</code> jako ważnych dla tej listy. Może to oznaczać, że typ został usunięty jako ważny element listy, lub że ktoś inny dodał go do własnego lokalnego schematu, który nie jest jeszcze wdrożony.',
  /** Error description to show how the item is being represented in the json format */
  'inputs.array.error.json-representation-description': 'Reprezentacja JSON tego elementu:',
  /** Error description for the array item tooltip that explains what the error means with more context */
  'inputs.array.error.type-is-incompatible-prompt':
    'Element typu <code>{{typeName}}</code> nie jest ważny dla tej listy',
  /** Error title for when an item type within an array input is incompatible, used in the tooltip */
  'inputs.array.error.type-is-incompatible-title': 'Dlaczego się to dzieje?',
  /** Error label for unexpected errors in the Array Input */
  'inputs.array.error.unexpected-error': 'Nieoczekiwany błąd: {{error}}',
  /** Label for when the array input doesn't have any items */
  'inputs.array.no-items-label': 'Brak elementów',
  /** Label for read only array fields */
  'inputs.array.read-only-label': 'To pole jest tylko do odczytu',
  /** Label for when the array input is resolving the initial value for the item */
  'inputs.array.resolving-initial-value': 'Rozwiązywanie wartości początkowej…',
  /** Placeholder value for datetime input */
  'inputs.datetime.placeholder': 'np. {{example}}',
  /** Acessibility label for button to open file options menu */
  'inputs.file.actions-menu.file-options.aria-label': 'Otwórz menu opcji pliku',
  /** Browse */
  'inputs.file.browse-button.text': 'Przeglądaj',
  /** Select file */
  'inputs.file.dialog.title': 'Wybierz plik',
  /** Unknown member kind: `{{kind}}` */
  'inputs.file.error.unknown-member-kind': 'Nieznany rodzaj elementu: {{kind}}',
  /** The value of this field is not a valid file. Resetting this field will let you choose a new file. */
  'inputs.file.invalid-file-warning.description':
    'Wartość tego pola nie jest ważnym plikiem. Zresetowanie tego pola pozwoli wybrać nowy plik.',
  /** Reset value */
  'inputs.file.invalid-file-warning.reset-button.text': 'Zresetuj wartość',
  /** Invalid file value */
  'inputs.file.invalid-file-warning.title': 'Nieprawidłowa wartość pliku',
  /** Select */
  'inputs.file.multi-browse-button.text': 'Wybierz',
  /** The upload could not be completed at this time. */
  'inputs.file.upload-failed.description': 'Przesyłanie nie mogło zostać ukończone w tym czasie.',
  /** Upload failed */
  'inputs.file.upload-failed.title': 'Przesyłanie nie powiodło się',
  /** Clear field */
  'inputs.files.common.actions-menu.clear-field.label': 'Wyczyść pole',
  /** Copy URL */
  'inputs.files.common.actions-menu.copy-url.label': 'Kopiuj URL',
  /** Download */
  'inputs.files.common.actions-menu.download.label': 'Pobierz',
  /** The URL is copied to the clipboard */
  'inputs.files.common.actions-menu.notification.url-copied': 'URL został skopiowany do schowka',
  /** Replace */
  'inputs.files.common.actions-menu.replace.label': 'Zamień',
  /** Upload */
  'inputs.files.common.actions-menu.upload.label': 'Prześlij',
  /** Drop to upload */
  'inputs.files.common.drop-message.drop-to-upload': 'Upuść, aby przesłać',
  /** Drop to upload `{{count}}` file */
  'inputs.files.common.drop-message.drop-to-upload-multi_one': 'Upuść, aby przesłać {{count}} plik',
  /** Can't upload this file here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_one':
    'Nie można przesłać tego pliku tutaj',
  /** `{{count}}` file can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_one':
    '{{count}} plik nie może zostać przesłany tutaj',
  /** Cannot upload `{{count}}` files */
  'inputs.files.common.placeholder.cannot-upload-some-files_one': 'Nie można przesłać pliku',
  /** Drag or paste type here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_file':
    'Przeciągnij lub wklej plik tutaj',
  /** Drag or paste image here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_image':
    'Przeciągnij lub wklej obraz tutaj',
  /** Drop to upload file */
  'inputs.files.common.placeholder.drop-to-upload_file': 'Upuść, aby przesłać plik',
  /** Drop to upload image */
  'inputs.files.common.placeholder.drop-to-upload_image': 'Upuść, aby przesłać obraz',
  /** Read only */
  'inputs.files.common.placeholder.read-only': 'Tylko do odczytu',
  /** Can't upload files here */
  'inputs.files.common.placeholder.upload-not-supported': 'Nie można przesłać plików tutaj',
  /** Clear upload */
  'inputs.files.common.stale-upload-warning.clear': 'Wyczyść przesyłanie',
  /** An upload has made no progress for at least `{{staleThresholdMinutes}}` minutes and likely got interrupted. You can safely clear the incomplete upload and try uploading again. */
  'inputs.files.common.stale-upload-warning.description':
    'Przesyłanie nie postępowało przez co najmniej {{staleThresholdMinutes}} minut i prawdopodobnie zostało przerwane. Możesz bezpiecznie wyczyścić niedokończone przesyłanie i spróbować przesłać ponownie.',
  /** Incomplete upload */
  'inputs.files.common.stale-upload-warning.title': 'Niedokończone przesyłanie',
  /** Tooltip text for action to crop image */
  'inputs.image.actions-menu.crop-image-tooltip': 'Przytnij obraz',
  /** Accessibility label for button to open image edit dialog */
  'inputs.image.actions-menu.edit-details.aria-label': 'Otwórz okno edycji obrazu',
  /** Accessibility label for button to open image options menu */
  'inputs.image.actions-menu.options.aria-label': 'Otwórz menu opcji obrazu',
  /** Select */
  'inputs.image.browse-menu.text': 'Wybierz',
  /** Cannot upload this file here */
  'inputs.image.drag-overlay.cannot-upload-here': 'Nie można tutaj przesłać tego pliku',
  /** Drop image to upload */
  'inputs.image.drag-overlay.drop-to-upload-image': 'Upuść obraz, aby przesłać',
  /** This field is read only */
  'inputs.image.drag-overlay.this-field-is-read-only': 'To pole jest tylko do odczytu',
  /** Unknown member kind: `{{kind}}` */
  'inputs.image.error.unknown-member-kind': 'Nieznany rodzaj elementu: {{kind}}',
  /** Edit hotspot and crop */
  'inputs.image.hotspot-dialog.title': 'Edytuj hotspot i przycięcie',
  /** The value of this field is not a valid image. Resetting this field will let you choose a new image. */
  'inputs.image.invalid-image-warning.description':
    'Wartość tego pola nie jest prawidłowym obrazem. Zresetowanie tego pola pozwoli wybrać nowy obraz.',
  /** Reset value */
  'inputs.image.invalid-image-warning.reset-button.text': 'Zresetuj wartość',
  /** Invalid image value */
  'inputs.image.invalid-image-warning.title': 'Nieprawidłowa wartość obrazu',
  /** Preview of uploaded image */
  'inputs.image.preview-uploaded-image': 'Podgląd przesłanego obrazu',
  /** The upload could not be completed at this time. */
  'inputs.image.upload-error.description': 'Przesyłanie nie mogło zostać ukończone w tym momencie.',
  /** Upload failed */
  'inputs.image.upload-error.title': 'Przesyłanie nieudane',
  /** Adjust the rectangle to crop image. Adjust the circle to specify the area that should always be visible. */
  'inputs.imagetool.description':
    'Dostosuj prostokąt, aby przyciąć obraz. Dostosuj koło, aby określić obszar, który zawsze powinien być widoczny.',
  /** Error: `{{errorMessage}}` */
  'inputs.imagetool.load-error': 'Błąd: {{errorMessage}}',
  /** Hotspot & Crop */
  'inputs.imagetool.title': 'Hotspot & Przycięcie',
  /** Convert to `{{targetType}}` */
  'inputs.invalid-value.convert-button.text': 'Konwertuj na <code>{{targetType}}</code>',
  /** The current value (<code>`{{actualType}}`</code>) */
  'inputs.invalid-value.current-type': 'Aktualna wartość (<code>{{actualType}}</code>)',
  /** The property value is stored as a value type that does not match the expected type. */
  'inputs.invalid-value.description':
    'Wartość właściwości jest przechowywana jako typ wartości, który nie pasuje do oczekiwanego typu.',
  /** The value of this property must be of type <code>`{{validType}}`</code> according to the schema. */
  'inputs.invalid-value.details.description':
    'Wartość tej właściwości musi być typu <code>{{validType}}</code> zgodnie z schematem.',
  /** Only the following types are valid here according to schema: */
  'inputs.invalid-value.details.multi-type-description':
    'Tylko następujące typy są tutaj prawidłowe zgodnie ze schematem:',
  /** Mismatching value types typically occur when the schema has recently been changed. */
  'inputs.invalid-value.details.possible-reason':
    'Niezgodność typów wartości zwykle występuje, gdy schemat został niedawno zmieniony.',
  /** Developer info */
  'inputs.invalid-value.details.title': 'Informacje dla programistów',
  /** -- Invalid Value Input -- */
  /** Reset value */
  'inputs.invalid-value.reset-button.text': 'Zresetuj wartość',
  /** Invalid property value */
  'inputs.invalid-value.title': 'Nieprawidłowa wartość właściwości',
  /** Field groups */
  'inputs.object.field-group-tabs.aria-label': 'Grupy pól',
  /** Read-only field description */
  'inputs.object.unknown-fields.read-only.description':
    'To pole jest <strong>tylko do odczytu</strong> zgodnie z definicją dokumentu i nie może być usunięte. Jeśli chcesz móc to usunąć w Studio, upewnij się, że usunąłeś pole <code>readOnly</code> z otaczającego typu w schemacie.',
  /** Remove field */
  'inputs.object.unknown-fields.remove-field-button.text': 'Usuń pole',
  /** Encountered `{{count}}` fields that are not defined in the schema. */
  'inputs.object.unknown-fields.warning.description_one':
    'Napotkano pole, które nie jest zdefiniowane w schemacie.',
  /** Detailed description of unknown field warning */
  'inputs.object.unknown-fields.warning.details.description_one':
    'To pole nie jest zdefiniowane w schemacie, co może oznaczać, że definicja pola została usunięta lub ktoś inny dodał je do swojego lokalnego projektu i jeszcze nie wdrożył swoich zmian.',
  /** Developer info */
  'inputs.object.unknown-fields.warning.details.title': 'Informacje dla programistów',
  /** Unknown field found */
  'inputs.object.unknown-fields.warning.title_one': 'Znaleziono nieznane pole',
  /** Collapse the editor to save screen space  */
  'inputs.portable-text.action.collapse-editor': 'Zwiń edytor',
  /** Aria label for action to edit an existing annotation */
  'inputs.portable-text.action.edit-annotation-aria-label': 'Edytuj adnotację',
  /** Expand the editor to give more editing space */
  'inputs.portable-text.action.expand-editor': 'Rozwiń edytor',
  /** Label label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block': 'Wstaw {{typeName}}',
  /** Accessibility label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block-aria-label': 'Wstaw {{typeName}} (blok)',
  /** Label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object': 'Wstaw {{typeName}}',
  /** Accessibility label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object-aria-label': 'Wstaw {{typeName}} (w linii)',
  /** Aria label for action to remove an annotation */
  'inputs.portable-text.action.remove-annotation-aria-label': 'Usuń adnotację',
  /** Label for activate on focus with context of click and not focused */
  'inputs.portable-text.activate-on-focus-message_click': 'Kliknij, aby aktywować',
  /** Label for activate on focus with context of click and focused */
  'inputs.portable-text.activate-on-focus-message_click-focused':
    'Kliknij lub naciśnij spację, aby aktywować',
  /** Label for activate on focus with context of tap and not focused */
  'inputs.portable-text.activate-on-focus-message_tap': 'Stuknij, aby aktywować',
  /**Aria label for the annotation object */
  'inputs.portable-text.annotation-aria-label': 'Obiekt adnotacji',
  /** Title for dialog that allows editing an annotation */
  'inputs.portable-text.annotation-editor.title': 'Edytuj {{schemaType}}',
  /** Title of the default "link" annotation */
  'inputs.portable-text.annotation.link': 'Link',
  /**Aria label for the block object */
  'inputs.portable-text.block.aria-label': 'Obiekt bloku',
  /** Label for action to edit a block item, in the case where it is editable */
  'inputs.portable-text.block.edit': 'Edytuj',
  /** Accessibility label for the button that opens the actions menu on blocks */
  'inputs.portable-text.block.open-menu-aria-label': 'Otwórz menu',
  /** Label for action to open a reference, in the case of block-level reference types */
  'inputs.portable-text.block.open-reference': 'Otwórz odniesienie',
  /** Label for action to remove a block item */
  'inputs.portable-text.block.remove': 'Usuń',
  /** Label for action to view a block item, in the case where it is read-only and thus cannot be edited */
  'inputs.portable-text.block.view': 'Zobacz',
  /** Title of the "code" decorator */
  'inputs.portable-text.decorator.code': 'Kod',
  /** Title of the "em" (emphasis) decorator */
  'inputs.portable-text.decorator.emphasis': 'Kursywa',
  /** Title of the "strike-through" decorator */
  'inputs.portable-text.decorator.strike-through': 'Przekreślenie',
  /** Title of the "strong" decorator */
  'inputs.portable-text.decorator.strong': 'Pogrubienie',
  /** Title of the "underline" decorator */
  'inputs.portable-text.decorator.underline': 'Podkreślenie',
  /** Placeholder text for when the editor is empty */
  'inputs.portable-text.empty-placeholder': 'Puste',
  /**Aria label for the block object */
  'inputs.portable-text.inline-block.aria-label': 'Obiekt w linii',
  /** Label for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit': 'Edytuj obiekt',
  /** Aria label for icon for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit-aria-label': 'Edytuj obiekt',
  /** Label for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove': 'Usuń obiekt',
  /** Aria label for icon for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove-aria-label': 'Usuń obiekt',
  /** Disclaimer text shown on invalid Portable Text value, when an action is available to unblock the user, but it is not guaranteed to be safe */
  'inputs.portable-text.invalid-value.action-disclaimer':
    'UWAGA: Zazwyczaj można bezpiecznie wykonać powyższą akcję, ale jeśli masz wątpliwości, skontaktuj się z osobami odpowiedzialnymi za konfigurację twojego studia.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.action': 'Usuń obiekt',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.description':
    'Dziecko z kluczem {{childKey}} bloku z kluczem <code>{{key}}</code> jest typu <code>{{childType}}</code>, który nie jest dozwolony przez definicję schematu.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.action': 'Usuń blok',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.description':
    'Blok z kluczem <code>{{key}}</code> jest typu <code>{{typeName}}</code>, który nie jest dozwolony przez schemat.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.action': 'Wstaw pusty fragment tekstu',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.description':
    'Blok tekstu z kluczem <code>{{key}}</code> nie ma fragmentów tekstu.',
  /** Label for the button to ignore invalid values in the Portable Text editor */
  'inputs.portable-text.invalid-value.ignore-button.text': 'Ignoruj',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.action':
    'Użyj typu <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.description':
    'Blok z kluczem <code>{{key}}</code> ma nieprawidłową nazwę typu. Zgodnie ze schematem powinien być <code>{{expectedTypeName}}</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.action': 'Ustaw pustą wartość tekstu',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.description':
    'Fragment z kluczem {{childKey}} bloku z kluczem <code>{{key}}</code> ma brakującą lub nieprawidłową właściwość <code>text</code>.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.action':
    'Użyj typu <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.description':
    'Blok z kluczem <code>{{key}}</code> nie ma nazwy typu. Zgodnie ze schematem powinien być <code>{{expectedTypeName}}</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.action': 'Przypisz losowy klucz',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.description':
    'Dziecko na pozycji <code>{{index}}</code> bloku z kluczem <code>{{key}}</code> nie ma właściwości <code>_key</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.action': 'Usuń obiekt',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.description':
    'Dziecko z kluczem {{childKey}} bloku z kluczem <code>{{key}}</code> nie ma właściwości <code>_type</code>.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.action': 'Przypisz losowy klucz',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.description':
    'Blok na indeksie <code>{{index}}</code> nie zawiera wymaganego <code>_key</code> właściwości.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.action': 'Usuń blok',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.description':
    'Blok tekstowy z kluczem <code>{{key}}</code> ma nieprawidłową lub brakującą właściwość `children`.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.action': 'Dodaj właściwość',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.description':
    'Blok tekstowy z kluczem <code>{{key}}</code> ma nieprawidłową lub brakującą właściwość `markDefs`.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.action': 'Usuń blok',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.description':
    'Blok z kluczem <code>{{key}}</code> nie zawiera nazwy typu.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.action': 'Usuń element',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.description':
    'Dziecko na indeksie <code>{{index}}</code> bloku z kluczem <code>{{key}}</code> nie jest obiektem.',
  /** Action presented when the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.action': 'Usuń wartość',
  /** Text explaining that the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.description':
    'Wartość musi być tablicą bloków Portable Text lub niezdefiniowana.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.action': 'Usuń element',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.description':
    'Element na <code>{{index}}</code> nie jest obiektem,.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.action': 'Usuń niedozwolone znaki',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.description':
    'Blok tekstowy z kluczem <code>{{key}}</code> zawiera znaki <code>({{orphanedMarks, list}})</code>, które nie są dozwolone przez schemat.',
  /** Title for the alert indicating that the Portable Text field has an invalid value */
  'inputs.portable-text.invalid-value.title': 'Nieprawidłowa wartość Portable Text',
  /** Title of "bulleted" list type */
  'inputs.portable-text.list-type.bullet': 'Lista punktowana',
  /** Title of numbered list type */
  'inputs.portable-text.list-type.number': 'Lista numerowana',
  /** Title of the "h1" block style */
  'inputs.portable-text.style.h1': 'Nagłówek 1',
  /** Title of the "h2" block style */
  'inputs.portable-text.style.h2': 'Nagłówek 2',
  /** Title of the "h3" block style */
  'inputs.portable-text.style.h3': 'Nagłówek 3',
  /** Title of the "h4" block style */
  'inputs.portable-text.style.h4': 'Nagłówek 4',
  /** Title of the "h5" block style */
  'inputs.portable-text.style.h5': 'Nagłówek 5',
  /** Title of the "h6" block style */
  'inputs.portable-text.style.h6': 'Nagłówek 6',
  /** Title shown when multiple blocks of varying styles is selected */
  'inputs.portable-text.style.multiple': 'Wiele',
  /** Title of fallback when no style is given for a block */
  'inputs.portable-text.style.none': 'Brak stylu',
  /** Title of the "normal" block style */
  'inputs.portable-text.style.normal': 'Normalny',
  /** Title of the "quote" block style */
  'inputs.portable-text.style.quote': 'Cytat',
  /** Label for action to clear the current value of the reference field */
  'inputs.reference.action.clear': 'Wyczyść',
  /** Label for action to create a new document from the reference input */
  'inputs.reference.action.create-new-document': 'Utwórz nowy',
  /** Label for action to create a new document from the reference input, when there are multiple templates or document types to choose from */
  'inputs.reference.action.create-new-document-select': 'Utwórz nowy…',
  /** Label for action to duplicate the current item to a new item (used within arrays) */
  'inputs.reference.action.duplicate': 'Duplikuj',
  /** Label for action that opens the referenced document in a new tab */
  'inputs.reference.action.open-in-new-tab': 'Otwórz w nowej karcie',
  /** Label for action to remove the reference from an array */
  'inputs.reference.action.remove': 'Usuń',
  /** Label for action to replace the current value of the field */
  'inputs.reference.action.replace': 'Zastąp',
  /** Label for action to cancel a previously initiated replace action  */
  'inputs.reference.action.replace-cancel': 'Anuluj zastępowanie',
  /** The cross-dataset reference field currently has a reference, but the feature has been disabled since it was created. This explains what can/cannot be done in its current state. */
  'inputs.reference.cross-dataset.feature-disabled-actions':
    'Możesz nadal wyczyścić istniejące odniesienie w tym polu, ale nie można go zmienić na inny dokument, dopóki funkcja jest wyłączona.',
  /** A cross-dataset reference field exists but the feature has been disabled. A <DocumentationLink> component is available. */
  'inputs.reference.cross-dataset.feature-disabled-description':
    'Ta funkcja została wyłączona. Przeczytaj, jak ją włączyć w <DocumentationLink>dokumentacji</DocumentationLink>.',
  /** Title for a warning telling the user that the current project does not have the "cross dataset references" feature */
  'inputs.reference.cross-dataset.feature-unavailable-title':
    'Niedostępna funkcja: Odniesienie między zbiorami danych',
  /** The cross-dataset reference points to a document with an invalid type  */
  'inputs.reference.cross-dataset.invalid-type':
    'Odniesiony dokument jest nieprawidłowego typu ({{typeName}}) <JsonValue/>',
  /** The referenced document will open in a new tab (due to external studio) */
  'inputs.reference.document-opens-in-new-tab': 'Ten dokument otworzy się w nowej karcie',
  /** Error title for when the document is unavailable (for any possible reason) */
  'inputs.reference.error.document-unavailable-title': 'Dokument niedostępny',
  /** Error title for when the referenced document failed to be loaded */
  'inputs.reference.error.failed-to-load-document-title':
    'Nie udało się załadować odniesionego dokumentu',
  /** Error title for when the reference search returned a document that is not an allowed type for the field */
  'inputs.reference.error.invalid-search-result-type-title':
    'Wyszukiwanie zwróciło typ, który nie jest prawidłowy dla tego odniesienia: "{{returnedType}}"',
  /** Error description for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-description':
    'Odniesiony dokument (<code>{{documentId}}</code>) jest typu <code>{{actualType}}</code>. Zgodnie ze schematem, odniesione dokumenty mogą być tylko typu <AllowedTypes />.',
  /** Error title for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-title': 'Dokument nieprawidłowego typu',
  /** Error description for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-description':
    'Nie można uzyskać dostępu do odniesionego dokumentu z powodu niewystarczających uprawnień',
  /** Error title for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-title': 'Niewystarczające uprawnienia',
  /** Error description for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-description':
    'Odniesiony dokument nie istnieje (ID: <code>{{documentId}}</code>). Możesz usunąć odniesienie lub zastąpić je innym dokumentem.',
  /** Error title for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-title': 'Nie znaleziono',
  /** Label for button that clears the reference when it points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document.clear-button-label': 'Wyczyść',
  /** Error title for when the search for a reference failed. Note that the message sent by the backend may not be localized. */
  'inputs.reference.error.search-failed-title': 'Wyszukiwanie referencji nie powiodło się',
  /** Alternative text for the image shown in cross-dataset reference input */
  'inputs.reference.image-preview-alt-text': 'Podgląd obrazu dokumentu referencyjnego',
  /** Description for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-description':
    '<strong>{{referencedDocument}}</strong> jest opublikowany i ta referencja powinna być teraz sfinalizowana.',
  /** Title for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-title': 'Sfinalizuj referencję',
  /** Description for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-description':
    '<strong>{{referencedDocument}}</strong> jest opublikowany i ta referencja powinna być teraz przekształcona w silną referencję.',
  /** Title for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-title': 'Przekształć w silną referencję',
  /** Label for button that triggers the action that strengthen a reference */
  'inputs.reference.incomplete-reference.strengthen-button-label': 'Przekształć w silną referencję',
  /** Label for button that triggers a retry attempt for reference metadata  */
  'inputs.reference.metadata-error.retry-button-label': 'Ponów próbę',
  /** Title for alert shown when reference metadata fails to be loaded */
  'inputs.reference.metadata-error.title': 'Nie można załadować metadanych referencji',
  /** Message shown when no documents were found that matched the given search string */
  'inputs.reference.no-results-for-query': 'Brak wyników dla <strong>“{{searchTerm}}”</strong>',
  /** Text for tooltip showing when a document was edited, using relative time (eg "how long ago was it edited?") */
  'inputs.reference.preview.edited-at-time': 'Edytowano <RelativeTime/>',
  /** Accessibility label for icon indicating that document does _not_ have any unpublished changes */
  'inputs.reference.preview.has-no-unpublished-changes-aria-label': 'Brak nieopublikowanych edycji',
  /** Accessibility label for icon indicating that document has unpublished changes */
  'inputs.reference.preview.has-unpublished-changes-aria-label': 'Edytowano',
  /** Accessibility label for icon indicating that document does _not_ have a published version */
  'inputs.reference.preview.is-not-published-aria-label': 'Nieopublikowany',
  /** Accessibility label for icon indicating that document has a published version */
  'inputs.reference.preview.is-published-aria-label': 'Opublikowany',
  /** Text for tooltip indicating that a document has no unpublished edits */
  'inputs.reference.preview.no-unpublished-edits': 'Brak nieopublikowanych edycji',
  /** Text for tooltip indicating that a document has not yet been published */
  'inputs.reference.preview.not-published': 'Nieopublikowany',
  /** Text for tooltip showing when a document was published, using relative time (eg "how long ago was it published?") */
  'inputs.reference.preview.published-at-time': 'Opublikowano <RelativeTime/>',
  /** The referenced document no longer exist and might have been deleted (for weak references) */
  'inputs.reference.referenced-document-does-not-exist':
    'Referencyjny dokument już nie istnieje i mógł zostać usunięty (ID dokumentu: <code>{{documentId}}</code>).',
  /** The referenced document could not be displayed to the user because of insufficient permissions */
  'inputs.reference.referenced-document-insufficient-permissions':
    'Nie można uzyskać dostępu do dokumentu referencyjnego z powodu niewystarczających uprawnień',
  /** Label for when the reference input is resolving the initial value for an item */
  'inputs.reference.resolving-initial-value': 'Rozwiązywanie wartości początkowej…',
  /** Placeholder shown in a reference input with no current value */
  'inputs.reference.search-placeholder': 'Wpisz, aby wyszukać',
  /** Explanation of the consequences of leaving the reference as strong instead of weak */
  'inputs.reference.strength-mismatch.is-strong-consquences':
    'Nie będzie możliwe usunięcie dokumentu referencyjnego bez wcześniejszego usunięcia tej referencji lub przekształcenia jej w słabą.',
  /** Description for alert shown when a reference is supposed to be weak, but the actual value is strong */
  'inputs.reference.strength-mismatch.is-strong-description':
    'To odniesienie jest <em>mocne</em>, ale zgodnie z aktualnym schematem powinno być <em>słabe</em>.',
  /** Explanation of the consequences of leaving the reference as weak instead of strong */
  'inputs.reference.strength-mismatch.is-weak-consquences':
    'Pozwala to na usunięcie odniesionego dokumentu bez konieczności wcześniejszego usuwania tego odniesienia, pozostawiając to pole odnoszące się do nieistniejącego dokumentu.',
  /** Description for alert shown when a reference is supposed to be strong, but the actual value is weak */
  'inputs.reference.strength-mismatch.is-weak-description':
    'To odniesienie jest <em>słabe</em>, ale zgodnie z aktualnym schematem powinno być <em>mocne</em>.',
  /** Label for button that triggers the action that strengthens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.strengthen-button-label': 'Przekształć w mocne odniesienie',
  /** Title for alert shown when a reference is supposed to be weak/strong, but the actual value is the opposite of what it is supposed to be */
  'inputs.reference.strength-mismatch.title': 'Niezgodność siły odniesienia',
  /** Label for button that triggers the action that weakens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.weaken-button-label': 'Przekształć w słabe odniesienie',
  /** Action message for generating the slug */
  'inputs.slug.action.generate': 'Generuj',
  /** Loading message for when the input is actively generating a slug */
  'inputs.slug.action.generating': 'Generowanie…',
  /** Error message for when the source to generate a slug from is missing */
  'inputs.slug.error.missing-source': 'Brak źródła. Sprawdź źródło typu {{schemaType}} w schemacie',
  /** Placeholder for an empty tag input */
  'inputs.tags.placeholder': 'Wpisz tag i naciśnij ENTER…',
  /** Placeholder for an empty tag input on touch devices */
  'inputs.tags.placeholder_touch': 'Wpisz tag…',
  /** Convert to `{{targetType}}` */
  'inputs.untyped-value.convert-button.text': 'Przekształć na <code>{{targetType}}</code>',
  /** Encountered an object value without a <code>_type</code> property. */
  'inputs.untyped-value.description':
    'Napotkano wartość obiektu bez właściwości <code>_type</code>.',
  /** Either remove the <code>name</code> property of the object declaration, or set <code>_type</code> property on items. */
  'inputs.untyped-value.details.description':
    'Usuń właściwość <code>name</code> z deklaracji obiektu lub ustaw właściwość <code>_type</code> dla elementów.',
  /** Current value (<code>object</code>): */
  'inputs.untyped-value.details.json-dump-prefix': 'Aktualna wartość (<code>object</code>):',
  /** The following types are valid here according to schema: */
  'inputs.untyped-value.details.multi-type-description':
    'Następujące typy są tutaj prawidłowe zgodnie ze schematem:',
  /** Developer info */
  'inputs.untyped-value.details.title': 'Informacje dla programistów',
  /** Property value missing <code>_type</code> */
  'inputs.untyped-value.title': 'Brakująca wartość właściwości <code>_type</code>',
  /** Unset value */
  'inputs.untyped-value.unset-item-button.text': 'Usuń wartość',

  /** The fallback explanation if no context is provided */
  'insufficient-permissions-message.not-authorized-explanation':
    'Nie masz uprawnień do dostępu do tej funkcji.',
  /** The explanation when unable to create any document at all */
  'insufficient-permissions-message.not-authorized-explanation_create-any-document':
    'Nie masz uprawnień do tworzenia dokumentu.',
  /** The explanation when unable to create a particular document */
  'insufficient-permissions-message.not-authorized-explanation_create-document':
    'Nie masz uprawnień do tworzenia tego dokumentu.',
  /** The explanation when unable to create a particular type of document */
  'insufficient-permissions-message.not-authorized-explanation_create-document-type':
    'Nie masz uprawnień do tworzenia tego rodzaju dokumentu.',
  /** The explanation when unable to create a new reference in a document */
  'insufficient-permissions-message.not-authorized-explanation_create-new-reference':
    'Nie masz uprawnień do tworzenia nowego odniesienia.',
  /** The explanation when unable to delete a particular document */
  'insufficient-permissions-message.not-authorized-explanation_delete-document':
    'Nie masz uprawnień do usunięcia tego dokumentu.',
  /** The explanation when unable to discard changes in a particular document */
  'insufficient-permissions-message.not-authorized-explanation_discard-changes':
    'Nie masz uprawnień do odrzucenia zmian w tym dokumencie.',
  /** The explanation when unable to duplicate a particular document */
  'insufficient-permissions-message.not-authorized-explanation_duplicate-document':
    'Nie masz uprawnień do duplikowania tego dokumentu.',
  /** The explanation when unable to publish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_publish-document':
    'Nie masz uprawnień do publikacji tego dokumentu.',
  /** The explanation when unable to unpublish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_unpublish-document':
    'Nie masz uprawnień do cofnięcia publikacji tego dokumentu.',
  /** Appears after the not-authorized message. Lists the current roles. */
  'insufficient-permissions-message.roles': 'Twoje role: <Roles/>',
  /** The title for the insufficient permissions message component */
  'insufficient-permissions-message.title': 'Niewystarczające uprawnienia',

  /** Unexpected error: `{{error}}` */
  'member-field-error.unexpected-error': 'Nieoczekiwany błąd: {{error}}',

  /** Button label for "Create new document" button */
  'new-document.button': 'Utwórz',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are templates/types available for creation
   */
  'new-document.create-new-document-label': 'Nowy dokument…',
  /** Placeholder for the "filter" input within the new document menu */
  'new-document.filter-placeholder': 'Filtruj',
  /** Loading indicator text within the new document menu */
  'new-document.loading': 'Ładowanie…',
  /** Accessibility label for the list displaying options in the new document menu */
  'new-document.new-document-aria-label': 'Nowy dokument',
  /** Message for when there are no document type options in the new document menu */
  'new-document.no-document-types-found': 'Nie znaleziono typów dokumentów',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are no templates/types to create from
   */
  'new-document.no-document-types-label': 'Brak typów dokumentów',
  /** Message for when no results are found for a specific search query in the new document menu */
  'new-document.no-results': 'Brak wyników dla <strong>{{searchQuery}}</strong>',
  /** Aria label for the button that opens the "Create new document" popover/dialog */
  'new-document.open-dialog-aria-label': 'Utwórz nowy dokument',
  /** Title for "Create new document" dialog */
  'new-document.title': 'Utwórz nowy dokument',

  /** Label for action to manage members of the current studio project */
  'presence.action.manage-members': 'Zarządzaj członkami',
  /** Accessibility label for presence menu button */
  'presence.aria-label': 'Kto jest obecny',
  /** Message description for when no one else is currently present */
  'presence.no-one-else-description': 'Zaproś osoby do projektu, aby zobaczyć ich status online.',
  /** Message title for when no one else is currently present */
  'presence.no-one-else-title': 'Nikogo innego tu nie ma',
  /** Message for when a user is not in a document (displayed in the global presence menu) */
  'presence.not-in-a-document': 'Nie w dokumencie',
  /** Tooltip content text for presence menu button */
  'presence.tooltip-content': 'Kto jest obecny',

  /** Fallback title shown when a preview does not provide a title */
  'preview.default.title-fallback': 'Bez tytułu',
  /** Fallback preview value for types that have "no value" (eg null, undefined) */
  'preview.fallback.no-value': '(brak wartości)',
  /** Alternative text for image being shown while image is being uploaded, in previews */
  'preview.image.file-is-being-uploaded.alt-text': 'Obraz jest aktualnie przesyłany',

  /* Relative time, just now */
  'relative-time.just-now': 'przed chwilą',

  /** Accessibility label to open search action when the search would go fullscreen (eg on narrower screens) */
  'search.action-open-aria-label': 'Otwórz wyszukiwanie',
  /** Action label for adding a search filter */
  'search.action.add-filter': 'Dodaj filtr',
  /** Action label for clearing search filters */
  'search.action.clear-filters': 'Wyczyść filtry',
  /** Label for action to clear recent searches */
  'search.action.clear-recent-searches': 'Wyczyść ostatnie wyszukiwania',
  /** Accessibility label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-aria-label': 'Wyczyść zaznaczone filtry',
  /** Label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-label': 'Wyczyść',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to close the search */
  'search.action.close-search-aria-label': 'Zamknij wyszukiwanie',
  /** Accessibility label for filtering by document type */
  'search.action.filter-by-document-type-aria-label': 'Filtruj według typu dokumentu',
  /** Accessibility action label for removing an already applied search filter */
  'search.action.remove-filter-aria-label': 'Usuń filtr',
  /**
   * Text displayed when either no document type(s) have been selected, or we need a fallback,
   * eg "Search for all types".
   */
  'search.action.search-all-types': 'Wyszukaj wszystkie dokumenty',
  /**
   * Text displayed when we are able to determine one or more document types that will be used for
   * searching, and can fit within the space assigned by the design.
   */
  'search.action.search-specific-types': 'Wyszukaj {{types, list}}',
  /** Dialog title for action to select an asset of unknown type */
  'search.action.select-asset': 'Wybierz zasób',
  /** Dialog title for action to select a file asset */
  'search.action.select-asset_file': 'Wybierz plik',
  /** Dialog title for action to select an image asset */
  'search.action.select-asset_image': 'Wybierz obraz',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-aria-label_hide': 'Ukryj filtry',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-aria-label_show': 'Pokaż filtry',
  /** Label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-label_hide': 'Ukryj filtry',
  /** Label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-label_show': 'Pokaż filtry',
  /** Tooltip text for the global search button */
  'search.button.tooltip': 'Szukaj',
  /**
   * A list of provided types (use `list` formatter preferably).
   */
  'search.document-type-list': '{{types, list}}',
  /**
   * In the context of a list of document types - no filtering selection has been done,
   * thus the default is "all types".
   */
  'search.document-type-list-all-types': 'Wszystkie typy',
  /** Accessibility label for list displaying the available document types */
  'search.document-types-aria-label': 'Typy dokumentów',
  /** Label for when no document types matching the filter are found */
  'search.document-types-no-matches-found': 'Brak dopasowań dla {{filter}}',
  /** Description for error when a filter cannot be displayed, describes that you should check the schema */
  'search.error.display-filter-description':
    'Może to wskazywać na nieprawidłowe opcje zdefiniowane w schemacie.',
  /** Title for error when a filter cannot be displayed (mainly a developer-oriented error) */
  'search.error.display-filter-title': 'Wystąpił błąd podczas wyświetlania tego filtra.',
  /** Description for error when no valid asset source is found, describes that you should check the the current studio config */
  'search.error.no-valid-asset-source-check-config-description':
    'Upewnij się, że jest włączone w pliku konfiguracyjnym twojego studia.',
  /** Description for error when no valid asset source is found, describes that only the default asset is supported */
  'search.error.no-valid-asset-source-only-default-description':
    'Obecnie obsługiwane jest tylko domyślne źródło zasobów.',
  /** Title for error when no valid asset sources found */
  'search.error.no-valid-asset-source-title': 'Nie znaleziono prawidłowych źródeł zasobów.',
  /** Helpful description for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-help-description':
    'Spróbuj ponownie lub sprawdź swoje połączenie',
  /** Title label for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-title': 'Coś poszło nie tak podczas wyszukiwania',
  /**
   * Label for "All fields", a label that appears above the list of available fields when filtering.
   * If one or more document type has been chosen as filter, this label is replaced with a group of
   * fields per selected document type
   */
  'search.filter-all-fields-header': 'Wszystkie pola',
  /** Label for the action of changing from one file to a different file in asset search filter */
  'search.filter-asset-change_file': 'Zmień plik',
  /** Label for the action of changing from one image to a different image in asset search filter */
  'search.filter-asset-change_image': 'Zmień obraz',
  /** Label for the action of clearing the currently selected asset in an image/file filter */
  'search.filter-asset-clear': 'Wyczyść',
  /** Label for the action of selecting a file in asset search filter */
  'search.filter-asset-select_file': 'Wybierz plik',
  /** Label for the action of selecting an image in asset search filter */
  'search.filter-asset-select_image': 'Wybierz obraz',
  /** Label for boolean filter - false */
  'search.filter-boolean-false': 'Fałsz',
  /** Label for boolean filter - true */
  'search.filter-boolean-true': 'Prawda',
  /** Accessibility label for list that lets you filter fields by title, when adding a new filter in search */
  'search.filter-by-title-aria-label': 'Filtruj według tytułu',
  /** Accessibility label for date filter input */
  'search.filter-date-aria-label': 'Data',
  /** Accessibility label for selecting end date on the date range search filter */
  'search.filter-date-range-end-date-aria-label': 'Data końcowa',
  /** Accessibility label for selecting start date on the date range search filter */
  'search.filter-date-range-start-date-aria-label': 'Data początkowa',
  /**
   * Label for "Days"/"Months"/"Years" when selecting it as unit in "X days ago" search filter.
   * Capitalized, as it would be listed in a dropdown.
   */
  'search.filter-date-unit_days': 'Dni',
  'search.filter-date-unit_months': 'Miesiące',
  'search.filter-date-unit_years': 'Lata',
  /** Accessibility label for selecting the unit (day/month/year) when adding "X days ago" search filter */
  'search.filter-date-unit-aria-label': 'Wybierz jednostkę',
  /** Accessibility label for the input value (days/months/years) when adding "X days ago" search filter */
  'search.filter-date-value-aria-label': 'Wartość jednostki',
  /** Label for "field description" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-description': 'Opis pola',
  /** Label for "field name" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-name': 'Nazwa pola',
  /** Label for "Used in document types", a list of the document types a field appears in. Shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-used-in-document-types': 'Używane w typach dokumentów',
  /** Label for when no fields/filters are found for the given term */
  'search.filter-no-matches-found': 'Brak dopasowań dla {{filter}}',
  /** Placeholder value for maximum numeric value filter */
  'search.filter-number-max-value-placeholder': 'Maksymalna wartość',
  /** Placeholder value for minimum numeric value filter */
  'search.filter-number-min-value-placeholder': 'Minimalna wartość',
  /** Placeholder value for the number filter */
  'search.filter-number-value-placeholder': 'Wartość',
  /** Placeholder for the "Filter" input, when narrowing possible fields/filters */
  'search.filter-placeholder': 'Filtr',
  /** Label for the action of clearing the currently selected document in a reference filter */
  'search.filter-reference-clear': 'Wyczyść',
  /**
   * Label for "shared fields", a label that appears above a list of fields that all filtered types
   * have in common, when adding a new filter. For instance, if "book" and "employee" both have a
   * "title" field, this field would be listed under "shared fields".
   * */
  'search.filter-shared-fields-header': 'Wspólne pola',
  /** Placeholder value for the string filter */
  'search.filter-string-value-placeholder': 'Wartość',
  /** Label/placeholder prompting user to select one of the predefined, allowed values for a string field */
  'search.filter-string-value-select-predefined-value': 'Wybierz…',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (singular) */
  'search.filters-aria-label_one': 'Filtr',
  /** Label for instructions on how to use the search - displayed when no recent searches are available */
  'search.instructions': 'Użyj <ControlsIcon/>, aby doprecyzować wyszukiwanie',
  /** Helpful description for when no search results are found */
  'search.no-results-help-description':
    'Spróbuj użyć innego słowa kluczowego lub dostosuj swoje filtry',
  /** Title label for when no search results are found */
  'search.no-results-title': 'Nie znaleziono wyników',
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
    '<Field/> <Operator>ma</Operator> <Value>{{count}} element</Value>',
  'search.operator.array-count-equal.name': 'ilość wynosi',
  /* Array should have a count greater than given filter value */
  'search.operator.array-count-gt.description_one':
    '<Field/> <Operator>ma ></Operator> <Value>{{count}} element</Value>',
  'search.operator.array-count-gt.name': 'ilość większa niż',
  /* Array should have a count greater than or equal to the given filter value */
  'search.operator.array-count-gte.description_one':
    '<Field/> <Operator>ma ≥</Operator> <Value>{{count}} element</Value>',
  'search.operator.array-count-gte.name': 'ilość większa lub równa',
  /* Array should have a count less than given filter value */
  'search.operator.array-count-lt.description_one':
    '<Field/> <Operator>ma <</Operator> <Value>{{count}} element</Value>',
  'search.operator.array-count-lt.name': 'ilość mniejsza niż',
  /* Array should have a count less than or equal to the given filter value */
  'search.operator.array-count-lte.description_one':
    '<Field/> <Operator>ma ≤</Operator> <Value>{{count}} element</Value>',
  'search.operator.array-count-lte.name': 'ilość mniejsza lub równa',
  /* Array should have a count that is not equal to the given filter value */
  'search.operator.array-count-not-equal.description_one':
    '<Field/> <Operator>nie ma</Operator> <Value>{{count}} elementu</Value>',
  'search.operator.array-count-not-equal.name': 'ilość nie jest równa',
  /**
   * Array should have a count within the range of given filter values.
   * Gets passed `{{from}}` and `{{to}}` values.
   **/
  'search.operator.array-count-range.description':
    '<Field/> <Operator>ma między</Operator> <Value>{{from}} → {{to}} elementów</Value>',
  'search.operator.array-count-range.name': 'ilość jest pomiędzy',
  /* Array should include the given value */
  'search.operator.array-list-includes.description':
    '<Field/> <Operator>zawiera</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-includes.name': 'zawiera',
  /* Array should not include the given value */
  'search.operator.array-list-not-includes.description':
    '<Field/> <Operator>nie zawiera</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-not-includes.name': 'nie zawiera',
  /* Array should include the given reference */
  'search.operator.array-reference-includes.description':
    '<Field/> <Operator>zawiera</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-includes.name': 'zawiera',
  /* Array should not include the given reference */
  'search.operator.array-reference-not-includes.description':
    '<Field/> <Operator>nie zawiera</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-not-includes.name': 'nie zawiera',
  /* Asset (file) should be the selected asset */
  'search.operator.asset-file-equal.description':
    '<Field/> <Operator>jest</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-equal.name': 'jest',
  /* Asset (file) should not be the selected asset */
  'search.operator.asset-file-not-equal.description':
    '<Field/> <Operator>nie jest</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-not-equal.name': 'nie jest',
  /* Asset (image) should be the selected asset */
  'search.operator.asset-image-equal.description':
    '<Field/> <Operator>jest</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-equal.name': 'jest',
  /* Asset (image) should not be the selected asset */
  'search.operator.asset-image-not-equal.description':
    '<Field/> <Operator>nie jest</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-not-equal.name': 'nie jest',
  /**
   * Boolean value should be the given filter value (true/false).
   * Context passed is `true` and `false`, allowing for more specific translations:
   * - `search.operator.boolean-equal.description_true`
   * - `search.operator.boolean-equal.description_false`
   */
  'search.operator.boolean-equal.description':
    '<Field/> <Operator>jest</Operator> <Value>{{value}}</Value>',
  'search.operator.boolean-equal.name': 'jest',
  /* Date should be after (later than) given filter value */
  'search.operator.date-after.description':
    '<Field/> <Operator>jest po</Operator> <Value>{{value}}</Value>',
  'search.operator.date-after.name': 'po',
  /* Date should be before (earlier than) given filter value */
  'search.operator.date-before.description':
    '<Field/> <Operator>jest przed</Operator> <Value>{{value}}</Value>',
  'search.operator.date-before.name': 'przed',
  /* Date should be the given filter value */
  'search.operator.date-equal.description':
    '<Field/> <Operator>jest</Operator> <Value>{{value}}</Value>',
  'search.operator.date-equal.name': 'jest',
  /* Date should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-last.description':
    '<Field/> <Operator>jest w ciągu ostatnich</Operator> <Value>{{value}}</Value>',
  'search.operator.date-last.name': 'ostatni',
  /* Date should not be the given filter value */
  'search.operator.date-not-equal.description':
    '<Field/> <Operator>nie jest</Operator> <Value>{{value}}</Value>',
  'search.operator.date-not-equal.name': 'nie jest',
  /* Date should be within the range of given filter values */
  'search.operator.date-range.description': '<Field/> <Operator>jest pomiędzy</Operator> <Value/>',
  'search.operator.date-range.name': 'jest pomiędzy',
  /* Date and time should be after (later than) given filter value */
  'search.operator.date-time-after.description':
    '<Field/> <Operator>jest po</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-after.name': 'po',
  /* Date and time should be before (earlier than) given filter value */
  'search.operator.date-time-before.description':
    '<Field/> <Operator>jest przed</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-before.name': 'przed',
  /* Date and time should be the given filter value */
  'search.operator.date-time-equal.description':
    '<Field/> <Operator>jest</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-equal.name': 'jest',
  /* Date and time should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-time-last.description':
    '<Field/> <Operator>jest w ciągu ostatnich</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-last.name': 'ostatni',
  /* Date and time should not be the given filter value */
  'search.operator.date-time-not-equal.description':
    '<Field/> <Operator>nie jest</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-not-equal.name': 'nie jest',
  /* Date and time should be within the range of given filter values */
  'search.operator.date-time-range.description':
    '<Field/> <Operator>jest pomiędzy</Operator> <Value/>',
  'search.operator.date-time-range.name': 'jest pomiędzy',
  /* Value should be defined */
  'search.operator.defined.description':
    '<Field/> <Operator>jest</Operator> <Value>niepusty</Value>',
  'search.operator.defined.name': 'niepusty',
  /* Value should not be defined */
  'search.operator.not-defined.description':
    '<Field/> <Operator>jest</Operator> <Value>pusty</Value>',
  'search.operator.not-defined.name': 'pusty',
  /* Number should be the given filter value */
  'search.operator.number-equal.description':
    '<Field/> <Operator>jest</Operator> <Value>{{value}}</Value>',
  'search.operator.number-equal.name': 'jest',
  /* Number should be greater than given filter value */
  'search.operator.number-gt.description':
    '<Field/> <Operator>></Operator> <Value>{{value}}</Value>',
  'search.operator.number-gt.name': 'większy niż',
  /* Number should be greater than or the given filter value */
  'search.operator.number-gte.description':
    '<Field/> <Operator>≥</Operator> <Value>{{value}}</Value>',
  'search.operator.number-gte.name': 'większy lub równy',
  /* Number should be less than given filter value */
  'search.operator.number-lt.description':
    '<Field/> <Operator><</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lt.name': 'mniej niż',
  /* Number should be less than or the given filter value */
  'search.operator.number-lte.description':
    '<Field/> <Operator>≤</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lte.name': 'mniej niż lub równy',
  /* Number should not be the given filter value */
  'search.operator.number-not-equal.description':
    '<Field/> <Operator>nie jest</Operator> <Value>{{value}}</Value>',
  'search.operator.number-not-equal.name': 'nie jest',
  /* Number should be within the range of given filter values */
  'search.operator.number-range.description':
    '<Field/> <Operator>jest pomiędzy</Operator> <Value>{{from}} → {{to}}</Value>',
  'search.operator.number-range.name': 'jest pomiędzy',
  /* Portable Text should contain the given filter value */
  'search.operator.portable-text-contains.description':
    '<Field/> <Operator>zawiera</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-contains.name': 'zawiera',
  /* Portable Text should be the given filter value */
  'search.operator.portable-text-equal.description':
    '<Field/> <Operator>jest</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-equal.name': 'jest',
  /* Portable Text should not contain the given filter value */
  'search.operator.portable-text-not-contains.description':
    '<Field/> <Operator>nie zawiera</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-contains.name': 'nie zawiera',
  /* Portable Text should not be the given filter value */
  'search.operator.portable-text-not-equal.description':
    '<Field/> <Operator>nie jest</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-equal.name': 'nie jest',
  /* References the given asset (file) */
  'search.operator.reference-asset-file.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-file.name': 'plik',
  /* References the given asset (image) */
  'search.operator.reference-asset-image.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-image.name': 'obraz',
  /* References the given document */
  'search.operator.reference-document.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-document.name': 'dokument',
  /* Reference should be the given document */
  'search.operator.reference-equal.description':
    '<Field/> <Operator>jest</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-equal.name': 'jest',
  /* Reference should not be the given document */
  'search.operator.reference-not-equal.description':
    '<Field/> <Operator>nie jest</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-not-equal.name': 'nie jest',
  /* Slug contains the given value */
  'search.operator.slug-contains.description':
    '<Field/> <Operator>zawiera</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-contains.name': 'zawiera',
  /* Slug equals the given filter value */
  'search.operator.slug-equal.description':
    '<Field/> <Operator>jest</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-equal.name': 'jest',
  /* Slug does not contain the given value */
  'search.operator.slug-not-contains.description':
    '<Field/> <Operator>nie zawiera</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-contains.name': 'nie zawiera',
  /* Slug does not equal the given filter value */
  'search.operator.slug-not-equal.description':
    '<Field/> <Operator>nie jest</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-equal.name': 'nie jest',
  /* String contains the given filter value */
  'search.operator.string-contains.description':
    '<Field/> <Operator>zawiera</Operator> <Value>{{value}}</Value>',
  'search.operator.string-contains.name': 'zawiera',
  /* String equals the given filter value */
  'search.operator.string-equal.description':
    '<Field/> <Operator>jest</Operator> <Value>{{value}}</Value>',
  'search.operator.string-equal.name': 'jest',
  /* String equals one of the predefined allowed values */
  'search.operator.string-list-equal.description':
    '<Field/> <Operator>jest</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-equal.name': 'jest',
  /* String does not equal one of the predefined allowed values */
  'search.operator.string-list-not-equal.description':
    '<Field/> <Operator>nie jest</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-not-equal.name': 'nie jest',
  /* String does not contain the given filter value */
  'search.operator.string-not-contains.description':
    '<Field/> <Operator>nie zawiera</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-contains.name': 'nie zawiera',
  /* String does not equal the given filter value */
  'search.operator.string-not-equal.description':
    '<Field/> <Operator>nie jest</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-equal.name': 'nie jest',
  /** Label for the "Best match" search ordering type */
  'search.ordering.best-match-label': 'Najlepsze dopasowanie',
  /** Label for the "Created: Oldest first" search ordering type */
  'search.ordering.created-ascending-label': 'Utworzone: Najstarsze pierwsze',
  /** Label for the "Created: Newest first" search ordering type */
  'search.ordering.created-descending-label': 'Utworzone: Najnowsze pierwsze',
  /** Label for the "Updated: Oldest first" search ordering type */
  'search.ordering.updated-ascending-label': 'Zaktualizowane: Najstarsze pierwsze',
  /** Label for the "Updated: Newest first" search ordering type */
  'search.ordering.updated-descending-label': 'Zaktualizowane: Najnowsze pierwsze',
  /** Placeholder text for the global search input field */
  'search.placeholder': 'Szukaj',
  /** Accessibility label for the recent searches section, shown when no valid search terms has been given */
  'search.recent-searches-aria-label': 'Ostatnie wyszukiwania',
  /** Label/heading shown for the recent searches section */
  'search.recent-searches-label': 'Ostatnie wyszukiwania',
  /** Accessibility label for the search results section, shown when the user has typed valid terms */
  'search.search-results-aria-label': 'Wyniki wyszukiwania',

  /** Accessibility label for the navbar status button */
  'status-button.aria-label': 'Status konfiguracji',

  /** Description for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-description':
    'Transakcje historii dokumentu nie zostały dotknięte.',
  /** Title for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-title':
    'Wystąpił błąd podczas pobierania zmian w dokumencie.',
  /** Error description for when the document doesn't have history */
  'timeline.error.no-document-history-description':
    'Po zmianie zawartości dokumentu, wersje dokumentu pojawią się w tym menu.',
  /** Error title for when the document doesn't have history */
  'timeline.error.no-document-history-title': 'Brak historii dokumentu',
  /** Error prompt when revision cannot be loaded */
  'timeline.error.unable-to-load-revision': 'Nie można załadować wersji',
  /** Label for when the timeline item is the latest in the history */
  'timeline.latest': 'Najnowsze',
  /** Label for latest version for timeline menu dropdown */
  'timeline.latest-version': 'Najnowsza wersja',
  /** The aria-label for the list of revisions in the timeline */
  'timeline.list.aria-label': 'Wersje dokumentu',
  /** Label for loading history */
  'timeline.loading-history': 'Ładowanie historii…',
  /** Label shown in review changes timeline when a document has been created */
  'timeline.operation.created': 'Utworzono',
  /** Label shown in review changes timeline when a document has been created, with a timestamp */
  'timeline.operation.created_timestamp': 'Utworzono: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was initially created */
  'timeline.operation.created-initial': 'Utworzono',
  /** Label shown in review changes timeline when a document was initially created, with a timestamp */
  'timeline.operation.created-initial_timestamp': 'Utworzono: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been deleted */
  'timeline.operation.deleted': 'Usunięto',
  /** Label shown in review changes timeline when a document has been deleted, with a timestamp */
  'timeline.operation.deleted_timestamp': 'Usunięto: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been discarded */
  'timeline.operation.draft-discarded': 'Odrzucono szkic',
  /** Label shown in review changes timeline when a draft has been discarded, with a timestamp */
  'timeline.operation.draft-discarded_timestamp': 'Odrzucono szkic: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been edited */
  'timeline.operation.edited-draft': 'Edytowano',
  /** Label shown in review changes timeline when a draft has been edited, with a timestamp */
  'timeline.operation.edited-draft_timestamp': 'Edytowano: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been edited live */
  'timeline.operation.edited-live': 'Edytowano na żywo',
  /** Label shown in review changes timeline when a document has been edited live, with a timestamp */
  'timeline.operation.edited-live_timestamp': 'Edytowano na żywo: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was published */
  'timeline.operation.published': 'Opublikowano',
  /** Label shown in review changes timeline when a document was published, with a timestamp */
  'timeline.operation.published_timestamp': 'Opublikowano: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was unpublished */
  'timeline.operation.unpublished': 'Cofnięto publikację',
  /** Label shown in review changes timeline when a document was unpublished, with a timestamp */
  'timeline.operation.unpublished_timestamp': 'Cofnięto publikację: {{timestamp, datetime}}',
  /**
   * Label for determining since which version the changes for timeline menu dropdown are showing.
   * Receives the time label as a parameter (`timestamp`).
   */
  'timeline.since': 'Od: {{timestamp, datetime}}',
  /** Label for missing change version for timeline menu dropdown are showing */
  'timeline.since-version-missing': 'Od: nieznana wersja',

  /**Aria label for the action buttons in the PTE toolbar */
  'toolbar.portable-text.action-button-aria-label': '{{action}}',

  /** Label for button showing the free trial days left */
  'user-menu.action.free-trial_one': '{{count}} dzień pozostały w okresie próbnym',
  /** Label for the button showed after trial ended */
  'user-menu.action.free-trial-finished': 'Przejdź z wersji darmowej',
  /** Label for action to invite members to the current sanity project */
  'user-menu.action.invite-members': 'Zaproś członków',
  /** Accessibility label for action to invite members to the current sanity project */
  'user-menu.action.invite-members-aria-label': 'Zaproś członków',
  /** Label for action to manage the current sanity project */
  'user-menu.action.manage-project': 'Zarządzaj projektem',
  /** Accessibility label for the action to manage the current project */
  'user-menu.action.manage-project-aria-label': 'Zarządzaj projektem',
  /** Tooltip helper text when portable text annotation is disabled for empty block*/
  'user-menu.action.portable-text.annotation-disabled_empty-block':
    'Nie można zastosować {{name}} do pustego bloku',
  /** Tooltip helper text when portable text annotation is disabled for multiple blocks */
  'user-menu.action.portable-text.annotation-disabled_multiple-blocks':
    'Nie można zastosować {{name}} do wielu bloków',
  /** Label for action to sign out of the current sanity project */
  'user-menu.action.sign-out': 'Wyloguj się',
  /** Title for appearance section for the current studio (dark / light / system scheme) */
  'user-menu.appearance-title': 'Wygląd',
  /** Label for close menu button for user menu */
  'user-menu.close-menu': 'Zamknij menu',
  /** Description for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-description': 'Użyj ciemnego wyglądu',
  /** Title for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-title': 'Ciemny',
  /** Description for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-description': 'Użyj jasnego wyglądu',
  /** Title for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-title': 'Jasny',
  /** Description for using "system apparence" in the appearance user menu */
  'user-menu.color-scheme.system-description': 'Użyj wyglądu systemowego',
  /** Title for using system apparence in the appearance user menu */
  'user-menu.color-scheme.system-title': 'Systemowy',
  /** Title for locale section for the current studio */
  'user-menu.locale-title': 'Język',
  /** Label for tooltip to show which provider the currently logged in user is using */
  'user-menu.login-provider': 'Zalogowano przez {{providerTitle}}',
  /** Label for open menu button for user menu */
  'user-menu.open-menu': 'Otwórz menu',

  /**
   * Label for action to add a workspace (currently a developer-oriented action, as this will
   * lead to the documentation on workspace configuration)
   */
  'workspaces.action.add-workspace': 'Dodaj przestrzeń roboczą',
  /**
   * Label for action to choose a different workspace, in the case where you are not logged in,
   * have selected a workspace, and are faced with the authentication options for the selected
   * workspace. In other words, label for the action shown when you have reconsidered which
   * workspace to authenticate in.
   */
  'workspaces.action.choose-another-workspace': 'Wybierz inną przestrzeń roboczą',
  /** Label for heading that indicates that you can choose your workspace */
  'workspaces.choose-your-workspace-label': 'Wybierz swoją przestrzeń roboczą',
  /** Label for the workspace menu */
  'workspaces.select-workspace-aria-label': 'Wybierz przestrzeń roboczą',
  /** Button label for opening the workspace switcher */
  'workspaces.select-workspace-label': 'Wybierz obszar roboczy',
  /** Tooltip for the workspace menu */
  'workspaces.select-workspace-tooltip': 'Wybierz przestrzeń roboczą',
  /** Title for Workplaces dropdown menu */
  'workspaces.title': 'Obszary robocze',
})
