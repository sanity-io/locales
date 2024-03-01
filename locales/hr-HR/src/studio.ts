import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Menu item for deleting the asset */
  'asset-source.asset-list.menu.delete': 'Izbriši',
  /** Menu item for showing where a particular asset is used */
  'asset-source.asset-list.menu.show-usage': 'Prikaži upotrebu',
  /** Header in usage dialog for file assets */
  'asset-source.asset-usage-dialog.header_file': 'Dokumenti koji koriste datoteku',
  /** Header in usage dialog for image assets */
  'asset-source.asset-usage-dialog.header_image': 'Dokumenti koji koriste sliku',
  /** Text shown in usage dialog when loading documents using the selected asset */
  'asset-source.asset-usage-dialog.loading': 'Učitavanje…',
  /** Text for cancel action in delete-asset dialog */
  'asset-source.delete-dialog.action.cancel': 'Odustani',
  /** Text for "confirm delete" action in delete-asset dialog */
  'asset-source.delete-dialog.action.delete': 'Izbriši',
  /** Dialog header for delete-asset dialog when deleting a file */
  'asset-source.delete-dialog.header_file': 'Izbriši datoteku',
  /** Dialog header for delete-asset dialog when deleting an image */
  'asset-source.delete-dialog.header_image': 'Izbriši sliku',
  /** Text shown in delete dialog when loading documents using the selected asset */
  'asset-source.delete-dialog.loading': 'Učitavanje…',
  /** Message confirming to delete *named* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_named':
    'Na putu ste da izbrišete datoteku <strong>{{filename}}}</strong> i njene metapodatke. Jeste li sigurni?',
  /** Message confirming to delete *unnamed* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_unnamed':
    'Na putu ste da izbrišete datoteku i njene metapodatke. Jeste li sigurni?',
  /** Message confirming to delete *named* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_named':
    'Na putu ste da izbrišete sliku <strong>{{filename}}</strong> i njene metapodatke. Jeste li sigurni?',
  /** Message confirming to delete *unnamed* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_unnamed':
    'Na putu ste da izbrišete sliku i njene metapodatke. Jeste li sigurni?',
  /** Alt text showing on image preview in delete asset dialog  */
  'asset-source.delete-dialog.usage-list.image-preview-alt': 'Pregled slike',
  /** Warning message showing when *named* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_named':
    '{{filename}} se ne može izbrisati jer se koristi. Da biste izbrisali ovu datoteku, prvo morate ukloniti sve njene upotrebe.',
  /** Warning message showing when *unnamed* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_unnamed':
    'Ova datoteka se ne može izbrisati jer se koristi. Da biste je izbrisali, prvo morate ukloniti sve njene upotrebe.',
  /** Warning message showing when *named* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_named':
    '{{filename}} se ne može izbrisati jer se koristi. Da biste izbrisali ovu sliku, prvo morate ukloniti sve njene upotrebe.',
  /** Warning message showing when *unnamed* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_unnamed':
    'Ova slika se ne može izbrisati jer se koristi. Da biste je izbrisali, prvo morate ukloniti sve njene upotrebe.',
  /** Text shown when the list of assets only include a specific set of types */
  'asset-source.dialog.accept-message':
    'Prikazuju se samo datoteke prihvaćenih tipova: <strong>{{acceptTypes}}</strong>',
  /** Keys shared between both image asset source and file asset source */
  /** Select asset dialog title for files */
  'asset-source.dialog.default-title_file': 'Odaberite datoteku',
  /** Select asset dialog title for images */
  'asset-source.dialog.default-title_image': 'Odaberite sliku',
  /** Select asset dialog load more items */
  'asset-source.dialog.load-more': 'Učitaj više',
  /** Text shown when selecting a file but there's no files to select from */
  'asset-source.dialog.no-assets_file': 'Nema datoteka',
  /** Text shown when selecting an image but there's no images to select from */
  'asset-source.dialog.no-assets_image': 'Nema slika',
  'asset-source.file.asset-list.action.delete.disabled-cannot-delete-current-file':
    'Trenutno odabrana datoteka ne može biti obrisana',
  'asset-source.file.asset-list.action.delete.text': 'Obriši',
  'asset-source.file.asset-list.action.delete.title': 'Obriši datoteku',
  'asset-source.file.asset-list.action.select-file.title': 'Odaberi datoteku {{filename}}',
  'asset-source.file.asset-list.action.show-usage.title': 'Prikaži upotrebu',
  'asset-source.file.asset-list.delete-failed': 'Datoteka nije mogla biti obrisana',
  'asset-source.file.asset-list.delete-successful': 'Datoteka je obrisana',
  'asset-source.file.asset-list.header.date-added': 'Datum dodavanja',
  /** File asset source */
  'asset-source.file.asset-list.header.filename': 'Naziv datoteke',
  'asset-source.file.asset-list.header.size': 'Veličina',
  'asset-source.file.asset-list.header.type': 'Tip',
  /** Text displayed on button or menu invoking the file asset source */
  'asset-source.file.title': 'Prenesene datoteke',
  'asset-source.image.asset-list.delete-failed': 'Slika nije mogla biti obrisana',
  /** Image asset source */
  'asset-source.image.asset-list.delete-successful': 'Slika je obrisana',
  /** Text displayed on button or menu invoking the image asset source */
  'asset-source.image.title': 'Prenesene slike',
  'asset-source.usage-list.documents-using-file_named_one':
    'Jedan dokument koristi datoteku <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-file_named_other':
    '{{count}} dokumenata koristi datoteku <code>{{filename}}</code>',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *named* file **/
  'asset-source.usage-list.documents-using-file_named_zero':
    'Niti jedan dokument ne koristi datoteku <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-file_unnamed_one': 'Jedan dokument koristi ovu datoteku',
  'asset-source.usage-list.documents-using-file_unnamed_other':
    '{{count}} dokumenata koristi ovu datoteku',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *unnamed* file **/
  'asset-source.usage-list.documents-using-file_unnamed_zero':
    'Niti jedan dokument ne koristi ovu datoteku',
  'asset-source.usage-list.documents-using-image_named_one':
    'Jedan dokument koristi sliku <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-image_named_other':
    '{{count}} dokumenata koristi sliku <code>{{filename}}</code>',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *named* image **/
  'asset-source.usage-list.documents-using-image_named_zero':
    'Niti jedan dokument ne koristi sliku <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-image_unnamed_one': 'Jedan dokument koristi ovu sliku',
  'asset-source.usage-list.documents-using-image_unnamed_other':
    '{{count}} dokumenta koriste ovu sliku',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *unnamed* image **/
  'asset-source.usage-list.documents-using-image_unnamed_zero':
    'Niti jedan dokument ne koristi ovu sliku',

  /** Action message for navigating to next month */
  'calendar.action.go-to-next-month': 'Idi na sljedeći mjesec',
  /** Action message for navigating to next year */
  'calendar.action.go-to-next-year': 'Idi na sljedeću godinu',
  /** Action message for navigating to previous month */
  'calendar.action.go-to-previous-month': 'Idi na prethodni mjesec',
  /** Action message for navigating to previous year */
  'calendar.action.go-to-previous-year': 'Idi na prethodnu godinu',
  /* Label for navigating the calendar to "today", without _selecting_ today. Short form, eg `Today`, not `Go to today` */
  'calendar.action.go-to-today': 'Danas',
  /* Accessibility label for navigating the calendar to "today", without _selecting_ today */
  'calendar.action.go-to-today-aria-label': 'Idi na današnji dan',
  /* Label for navigating the calendar to "tomorrow", without _selecting_ tomorrow. Short form, eg `Tomorrow`, not `Go to tomorrow` */
  'calendar.action.go-to-tomorrow': 'Sutra',
  /* Label for navigating the calendar to "yesterday", without _selecting_ yesterday. Short form, eg `Yesterday`, not `Go to yesterday` */
  'calendar.action.go-to-yesterday': 'Jučer',
  /** Label for switch that controls whether or not to include time in given timestamp */
  'calendar.action.include-time-label': 'Uključi vrijeme',
  /** Action message for selecting the hour */
  'calendar.action.select-hour': 'Odaberi sat',
  /** Action message for selecting the minute */
  'calendar.action.select-minute': 'Odaberi minutu',
  /** Action message for setting to the current time */
  'calendar.action.set-to-current-time': 'Postavi na trenutno vrijeme',
  /** Label for selecting an hour preset. Receives a `time` param as a string on hh:mm format and a `date` param as a Date instance denoting the preset date */
  'calendar.action.set-to-time-preset': '{{time}} na {{date, datetime}}',
  /** Error message displayed in calendar when entered date is not the correct format */
  'calendar.error.must-be-in-format': 'Mora biti u formatu: {{exampleDate}}',
  /** Month name for April */
  'calendar.month-names.april': 'Travanj',
  /** Month name for August */
  'calendar.month-names.august': 'Kolovoz',
  /** Month name for December */
  'calendar.month-names.december': 'Prosinac',
  /** Month name for February */
  'calendar.month-names.february': 'Veljača',
  /** Month name for January */
  'calendar.month-names.january': 'Siječanj',
  /** Month name for July */
  'calendar.month-names.july': 'Srpanj',
  /** Month name for June */
  'calendar.month-names.june': 'Lipanj',
  /** Month name for March */
  'calendar.month-names.march': 'Ožujak',
  /** Month name for May */
  'calendar.month-names.may': 'Svibanj',
  /** Month name for November */
  'calendar.month-names.november': 'Studeni',
  /** Month name for October */
  'calendar.month-names.october': 'Listopad',
  /** Month name for September */
  'calendar.month-names.september': 'Rujan',
  /** Short weekday name for Friday */
  'calendar.weekday-names.short.friday': 'Pet',
  /** Short weekday name for Monday */
  'calendar.weekday-names.short.monday': 'Pon',
  /** Short weekday name for Saturdayday */
  'calendar.weekday-names.short.saturday': 'Sub',
  /** Short weekday name for Sunday */
  'calendar.weekday-names.short.sunday': 'Ned',
  /** Short weekday name for Thursday */
  'calendar.weekday-names.short.thursday': 'Čet',
  /** Short weekday name for Tuesday */
  'calendar.weekday-names.short.tuesday': 'Uto',
  /** Short weekday name for Wednesday */
  'calendar.weekday-names.short.wednesday': 'Sri',

  /** Label for the close button label in Review Changes pane */
  'changes.action.close-label': 'Zatvori pregled promjena',
  /** Cancel label for revert button prompt action */
  'changes.action.revert-all-cancel': 'Odustani',
  /** Revert all confirm label for revert button action - used on prompt button + review changes pane */
  'changes.action.revert-all-confirm': 'Vrati sve promjene',
  /** Prompt for confirming revert change (singular) label for field change action */
  'changes.action.revert-changes-confirm-change_one': 'Vrati promjenu',
  /** Revert for confirming revert (plural) label for field change action */
  'changes.action.revert-changes-confirm-change_other': 'Vrati promjene',
  /** Prompt for reverting changes for a field change */
  'changes.action.revert-changes-description': 'Jeste li sigurni da želite vratiti promjene?',
  /** Prompt for reverting changes for a group change, eg multiple changes */
  'changes.action.revert-changes-description_one': 'Jeste li sigurni da želite vratiti promjenu?',
  /** Label for when the action of the change was to set something that was previously empty, eg a field was given a value, an array item was added, an asset was selected or similar */
  'changes.added-label': 'Dodano',
  /** Array diff: An item was added in a given position (`{{position}}`) */
  'changes.array.item-added-in-position': 'Dodano na poziciju {{position}}',
  'changes.array.item-moved_down_one': 'Pomaknuto {{count}} poziciju dolje',
  'changes.array.item-moved_down_other': 'Pomaknuto {{count}} pozicija dolje',
  /**
   * Array diff: An item was moved within the array.
   * Receives `{{count}}` representing number of positions it moved.
   * Context is the direction of the move, either `up` or `down`.
   */
  'changes.array.item-moved_up_one': 'Pomaknuto {{count}} poziciju gore',
  'changes.array.item-moved_up_other': 'Pomaknuto {{count}} pozicija gore',
  /** Array diff: An item was removed from a given position (`{{position}}`) */
  'changes.array.item-removed-from-position': 'Uklonjeno s pozicije {{position}}',
  /** Accessibility label for the "change bar" shown when there are edits on a field-level */
  'changes.change-bar.aria-label': 'Pregledaj promjene',
  /** Label for when the action of the change was _not_ an add/remove, eg a text field changed value, an image was changed from one asset to another or similar */
  'changes.changed-label': 'Promijenjeno',
  /** Label and text for tooltip that indicates the authors of the changes */
  'changes.changes-by-author': 'Promjene od',
  /** Additional text shown in development mode when a diff component crashes during rendering */
  'changes.error-boundary.developer-info':
    'Provjerite konzolu za razvojne programere za više informacija',
  /** Text shown when a diff component crashes during rendering, triggering the error boundary */
  'changes.error-boundary.title': 'Prikazivanje promjena na ovom polju uzrokovalo je grešku',
  /** Error message shown when the value of a field is not the expected one */
  'changes.error.incorrect-type-message':
    'Greška vrijednosti: Vrijednost je tipa "<code>{{actualType}}</code>", očekivano "<code>{{expectedType}}</code>"',
  /** File diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.file.meta-info-fallback-title': 'Bez naslova',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.crop-changed': 'Promijenjen izrez',
  /** Image diff: Text shown if the previous image asset was deleted (shouldn't theoretically happen) */
  'changes.image.deleted': 'Slika obrisana',
  /** Image diff: Text shown if the image failed to be loaded when previewing it */
  'changes.image.error-loading-image': 'Greška pri učitavanju slike',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.hotspot-changed': 'Promijenjeno žarište',
  /** Image diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.image.meta-info-fallback-title': 'Bez naslova',
  /** Image diff: Text shown if no asset has been set for the field (but has metadata changes) */
  'changes.image.no-asset-set': 'Slika nije postavljena',
  /** Image diff: Text shown when the from/to state has/had no image */
  'changes.image.no-image-placeholder': '(nema slike)',
  /** Label for the "from" value in the change inspector */
  'changes.inspector.from-label': 'Od',
  /** Label for the "meta" (field path, action etc) information in the change inspector */
  'changes.inspector.meta-label': 'Meta',
  /** Label for the "to" value in the change inspector */
  'changes.inspector.to-label': 'Do',
  /** Loading author of change in the differences tooltip in the review changes pane */
  'changes.loading-author': 'Učitavanje…',
  /** Loading changes in Review Changes Pane */
  'changes.loading-changes': 'Učitavanje promjena…',
  /** No Changes description in the Review Changes pane */
  'changes.no-changes-description':
    'Uredite dokument ili odaberite stariju verziju na vremenskoj traci kako bi se popis promjena pojavio na ovoj ploči.',
  /** No Changes title in the Review Changes pane */
  'changes.no-changes-title': 'Nema promjena',
  /** Portable Text diff: An annotation was added */
  'changes.portable-text.annotation_added': 'Dodana anotacija',
  /** Portable Text diff: An annotation was changed */
  'changes.portable-text.annotation_changed': 'Promijenjena anotacija',
  /** Portable Text diff: An annotation was removed */
  'changes.portable-text.annotation_removed': 'Uklonjena anotacija',
  /** Portable Text diff: An annotation was left unchanged */
  'changes.portable-text.annotation_unchanged': 'Nepromijenjena anotacija',
  /** Portable Text diff: A block changed from one style to another (eg `normal` to `h1` or similar) */
  'changes.portable-text.block-style-changed':
    'Promijenjen stil bloka s "{{fromStyle}}" na "{{toStyle}}"',
  /** Portable Text diff: Change formatting of text (setting/unsetting marks, eg bold/italic etc) */
  'changes.portable-text.changed-formatting': 'Promijenjeno formatiranje',
  /** Portable Text diff: An empty inline object is part of a change */
  'changes.portable-text.empty-inline-object': 'Prazan {{inlineObjectType}}',
  /** Portable Text diff: An empty object is the result of adding/removing an annotation */
  'changes.portable-text.empty-object-annotation': 'Prazan {{annotationType}}',
  /** Portable Text diff: Added a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_added': 'Dodan prazan tekst',
  /** Portable Text diff: Changed a block that contained no text (eg empty block) */
  'changes.portable-text.empty-text_changed': 'Promijenjen prazan tekst',
  /** Portable Text diff: Removed a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_removed': 'Uklonjen prazan tekst',
  /** Portable Text diff: An inline object was added */
  'changes.portable-text.inline-object_added': 'Dodan ugrađeni objekt',
  /** Portable Text diff: An inline object was changed */
  'changes.portable-text.inline-object_changed': 'Promijenjen ugrađeni objekt',
  /** Portable Text diff: An inline object was removed */
  'changes.portable-text.inline-object_removed': 'Uklonjen ugrađeni objekt',
  /** Portable Text diff: An inline object was left unchanged */
  'changes.portable-text.inline-object_unchanged': 'Nepromijenjen ugrađeni objekt',
  /** Portable Text diff: Added a chunk of text */
  'changes.portable-text.text_added': 'Dodan tekst',
  /** Portable Text diff: Removed a chunk of text */
  'changes.portable-text.text_removed': 'Uklonjen tekst',
  /** Portable Text diff: Annotation has an unknown schema type */
  'changes.portable-text.unknown-annotation-schema-type': 'Nepoznata vrsta sheme anotacije',
  /** Portable Text diff: Inline object has an unknown schema type */
  'changes.portable-text.unknown-inline-object-schema-type':
    'Nepoznata vrsta sheme ugrađenog objekta',
  /** Label for when the action of the change was a removal, eg a field was cleared, an array item was removed, an asset was deselected or similar */
  'changes.removed-label': 'Uklonjeno',
  /** Title for the Review Changes pane */
  'changes.title': 'Pregled promjena',

  /** --- Common components --- */
  /** Tooltip text for context menu buttons */
  'common.context-menu-button.tooltip': 'Prikaži više',
  /** Default text for dialog cancel button */
  'common.dialog.cancel-button.text': 'Odustani',
  /** Default text for dialog confirm button */
  'common.dialog.confirm-button.text': 'Potvrdi',
  /** Default text in shared loader text / spinner lockup */
  'common.loading': 'Učitavanje',

  /** --- Configuration issues --- */
  /** Tooltip displayed on configuration issues button */
  'configuration-issues.button.tooltip': 'Pronađeni problemi s konfiguracijom',

  /** The fallback title for an ordering menu item if no localized titles are provided. */
  'default-menu-item.fallback-title': 'Sortiraj po {{title}}',

  /** Title for the default ordering/SortOrder if no orderings are provided and the caption field is found */
  'default-orderings.caption': 'Sortiraj po Natpisu',
  /** Title for the default ordering/SortOrder if no orderings are provided and the description field is found */
  'default-orderings.description': 'Sortiraj po Opisu',
  /** Title for the default ordering/SortOrder if no orderings are provided and the header field is found */
  'default-orderings.header': 'Sortiraj po Zaglavlju',
  /** Title for the default ordering/SortOrder if no orderings are provided and the heading field is found */
  'default-orderings.heading': 'Sortiraj po Zaglavlju',
  /** Title for the default ordering/SortOrder if no orderings are provided and the label field is found */
  'default-orderings.label': 'Sortiraj po Oznaci',
  /** Title for the default ordering/SortOrder if no orderings are provided and the name field is found */
  'default-orderings.name': 'Sortiraj po Imenu',
  /** Title for the default ordering/SortOrder if no orderings are provided and the title field is found */
  'default-orderings.title': 'Sortiraj po Naslovu',

  /** Label to show in the document footer indicating the last edited date of the document */
  'document-status.edited': 'Uređeno {{date}}',
  /** Label to show in the document footer indicating the document is not published*/
  'document-status.not-published': 'Nije objavljeno',
  /** Label to show in the document footer indicating the published date of the document */
  'document-status.published': 'Objavljeno {{date}}',

  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.duplicate-keys-alert.details.additional-description':
    'Vrijednost svojstva <code>_key</code> mora biti jedinstveni niz.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property of each elements has been generated non-uniquely. */
  'form.error.duplicate-keys-alert.details.description':
    'To se obično događa kada se stavke stvaraju pomoću API klijenta i svojstvo <code>_key</code> svakog elementa je generirano na nejedinstven način.',
  /** Developer info */
  'form.error.duplicate-keys-alert.details.title': 'Informacije za developere',
  /** Generate unique keys */
  'form.error.duplicate-keys-alert.generate-button.text': 'Generiraj jedinstvene ključeve',
  /** Several items in this list share the same identifier (key). Every item must have an unique identifier. */
  'form.error.duplicate-keys-alert.summary':
    'Nekoliko stavki na ovom popisu dijeli isti identifikator (ključ). Svaka stavka mora imati jedinstveni identifikator.',
  /** Non-unique keys */
  'form.error.duplicate-keys-alert.title': 'Nejedinstveni ključevi',
  /** Error text shown when a field with a given name cannot be found in the schema or is conditionally hidden but explicitly told to render  */
  'form.error.field-not-found':
    'Polje "{{fieldName}}" nije pronađeno među članovima – provjerite je li definirano u shemi i da nije uvjetno skriveno.',
  /** Add missing keys */
  'form.error.missing-keys-alert.add-button.text': 'Dodaj nedostajuće ključeve',
  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.missing-keys-alert.details.additional-description':
    'Vrijednost svojstva <code>_key</code> mora biti jedinstveni niz.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property has not been included. */
  'form.error.missing-keys-alert.details.description':
    'To se obično događa kada se stavke stvaraju pomoću API klijenta, i svojstvo <code>_key</code> nije uključeno.',
  /** Developer info */
  'form.error.missing-keys-alert.details.title': 'Informacije za developere',
  /** Some items in the list are missing their keys. This must be fixed in order to edit the list. */
  'form.error.missing-keys-alert.summary':
    'Nekim stavkama na popisu nedostaju ključevi. To se mora ispraviti kako bi se moglo uređivati popis.',
  /** Missing keys */
  'form.error.missing-keys-alert.title': 'Nedostajući ključevi',
  /** This usually happens when items are created using an API client, or when a custom input component has added invalid data to the list. */
  'form.error.mixed-array-alert.details.description':
    'To se obično događa kada se stavke stvaraju pomoću API klijenta, ili kada je prilagođena komponenta za unos dodala nevaljane podatke na popis.',
  /** Developer info */
  'form.error.mixed-array-alert.details.title': 'Informacije za developere',
  /**  Remove non-object values */
  'form.error.mixed-array-alert.remove-button.text': 'Ukloni vrijednosti koje nisu objekti',
  /** Some items in this list are not objects. This must be fixed in order to edit the list. */
  'form.error.mixed-array-alert.summary':
    'Nekim stavkama na ovom popisu nisu objekti. To se mora ispraviti kako bi se moglo uređivati popis.',
  /** Invalid list values */
  'form.error.mixed-array-alert.title': 'Nevaljane vrijednosti popisa',
  /** Error text shown when form is unable to find an array item at a given indexed path */
  'form.error.no-array-item-at-index':
    'Nema elementa niza na indeksu <code>{{index}}</code> na putanji <code>{{path}}</code>',
  /** Error text shown when form is unable to find an array item at a given keyed path */
  'form.error.no-array-item-at-key':
    'Nema elementa niza s `_key` <code>"{{key}}"</code> na putanji <code>{{path}}</code>',
  /** Form field deprecated label */
  'form.field.deprecated-label': 'zastarjelo',
  /** Fallback title shown above field if it has no defined title */
  'form.field.untitled-field-label': 'Bez naslova',
  /** Fallback title shown above fieldset if it has no defined title */
  'form.field.untitled-fieldset-label': 'Bez naslova',
  /** Accessibility label for the icon that indicates the field has a validation error */
  'form.validation.has-error-aria-label': 'Ima grešku',
  /** Accessibility label for the icon that indicates the field has validation information */
  'form.validation.has-info-aria-label': 'Ima informaciju',
  /** Accessibility label for the icon that indicates the field has a validation warning */
  'form.validation.has-warning-aria-label': 'Ima upozorenje',
  /** Text shown when summarizing validation information, when the field has one or more errors */
  'form.validation.summary.errors-count_one': '{{count}} greška',
  'form.validation.summary.errors-count_other': '{{count}} greške',
  /** Text shown when summarizing validation information, when the field has one or more warnings */
  'form.validation.summary.warnings-count_one': '{{count}} upozorenje',
  'form.validation.summary.warnings-count_other': '{{count}} upozorenja',

  /** Tooltip for free trial navbar button indicating remaining days */
  'free-trial.tooltip.days-count_one': '{{count}} dan preostao u probnom razdoblju',
  'free-trial.tooltip.days-count_other': '{{count}} dana preostalo u probnom razdoblju',
  /** Tooltip for free trial navbar button, once trial has ended */
  'free-trial.tooltip.trial-finished': 'Nadogradite svoj projekt',

  /**
   * Label for "contact sales" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.contact-sales': 'Kontaktirajte prodaju',
  /**
   * Label for "help and support" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.help-and-support': 'Pomoć i podrška',
  /**
   * Label for "join our community" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.join-our-community': 'Pridružite se našoj zajednici',
  /** Information for what the latest sanity version is */
  'help-resources.latest-sanity-version': 'Najnovija verzija je {{latestVersion}}',
  /** Information for what studio version the current studio is running */
  'help-resources.studio-version': 'Verzija Sanity Studija {{studioVersion}}',
  /** Title for help and resources menus */
  'help-resources.title': 'Pomoć i resursi',

  /** Text for button to cancel an ongoing upload */
  'input.files.common.cancel-upload': 'Otkaži',
  /** Text for file input button in upload placeholder */
  'input.files.common.upload-placeholder.file-input-button.text': 'Prenesi',
  /** Uploading <FileName/> */
  'input.files.common.upload-progress': 'Prenosim <FileName/>',
  /** The referenced document cannot be opened, because the URL failed to be resolved */
  'input.reference.document-cannot-be-opened.failed-to-resolve-url':
    'Ovaj dokument se ne može otvoriti (nije moguće riješiti URL do Studija)',

  /** Label for adding item after a specific array item */
  'inputs.array.action.add-after': 'Dodaj element poslije',
  /** Label for adding item before a specific array item */
  'inputs.array.action.add-before': 'Dodaj element prije',
  /** Label for adding array item action when the schema allows for only one schema type */
  'inputs.array.action.add-item': 'Dodaj element',
  /**
   * Label for adding one array item action when the schema allows for multiple schema types,
   * eg. will prompt the user to select a type once triggered
   */
  'inputs.array.action.add-item-select-type': 'Dodaj element...',
  /** Array drag handle button tooltip */
  'inputs.array.action.drag.tooltip': 'Povucite za promjenu redoslijeda',
  /** Label for duplicating an array item  */
  'inputs.array.action.duplicate': 'Dupliciraj',
  /** Label for editing the item of a specific type, eg "Edit Person" */
  'inputs.array.action.edit': 'Uredi {{itemTypeTitle}}',
  /** Label for removing an array item action  */
  'inputs.array.action.remove': 'Ukloni',
  /** Label for removing action when an array item has an error  */
  'inputs.array.action.remove-invalid-item': 'Ukloni',
  /** Label for viewing the item of a specific type, eg "View Person" */
  'inputs.array.action.view': 'Pogledaj {{itemTypeTitle}}',
  /** Error description for the array item tooltip that explains that the current item can still be moved or deleted but not edited since the schema definition is not found */
  'inputs.array.error.can-delete-but-no-edit-description':
    'Još uvijek možete premjestiti ili izbrisati ovu stavku, ali je ne možete uređivati jer definicija sheme za njezin tip nije pronađena.',
  /** Error label for toast when array could not resolve the initial value */
  'inputs.array.error.cannot-resolve-initial-value-title':
    'Nije moguće riješiti početnu vrijednost za tip: {{schemaTypeTitle}}: {{errorMessage}}.',
  /** Error label for toast when trying to upload one array item of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_one':
    'Sljedeću stavku nije moguće učitati jer ne postoji poznata konverzija iz tipa sadržaja u stavku niza:',
  /** Error label for toast when trying to upload multiple array items of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_other':
    'Sljedeće stavke nije moguće učitati jer ne postoji poznata konverzija iz tipova sadržaja u stavku niza:',
  /** Error description for the array item tooltip that explains that the current type item is not valid for the list  */
  'inputs.array.error.current-schema-not-declare-description':
    'Trenutna shema ne deklarira stavke tipa <code>{{typeName}}</code> kao valjane za ovaj popis. To bi moglo značiti da je tip uklonjen kao valjana stavka ili da je netko drugi dodao u svoju lokalnu shemu koja još nije implementirana.',
  /** Error description to show how the item is being represented in the json format */
  'inputs.array.error.json-representation-description': 'JSON reprezentacija ove stavke:',
  /** Error description for the array item tooltip that explains what the error means with more context */
  'inputs.array.error.type-is-incompatible-prompt':
    'Stavka tipa <code>{{typeName}}</code> nije valjana za ovaj popis',
  /** Error title for when an item type within an array input is incompatible, used in the tooltip */
  'inputs.array.error.type-is-incompatible-title': 'Zašto se ovo događa?',
  /** Error label for unexpected errors in the Array Input */
  'inputs.array.error.unexpected-error': 'Neočekivana greška: {{error}}',
  /** Label for when the array input doesn't have any items */
  'inputs.array.no-items-label': 'Nema stavki',
  /** Label for read only array fields */
  'inputs.array.read-only-label': 'Ovo polje je samo za čitanje',
  /** Label for when the array input is resolving the initial value for the item */
  'inputs.array.resolving-initial-value': 'Rješavanje početne vrijednosti…',
  /** Placeholder value for datetime input */
  'inputs.datetime.placeholder': 'npr. {{example}}',
  /** Acessibility label for button to open file options menu */
  'inputs.file.actions-menu.file-options.aria-label': 'Otvori izbornik opcija datoteke',
  /** Browse */
  'inputs.file.browse-button.text': 'Pretraži',
  /** Select file */
  'inputs.file.dialog.title': 'Odaberi datoteku',
  /** Unknown member kind: `{{kind}}` */
  'inputs.file.error.unknown-member-kind': 'Nepoznata vrsta člana: {{kind}}',
  /** The value of this field is not a valid file. Resetting this field will let you choose a new file. */
  'inputs.file.invalid-file-warning.description':
    'Vrijednost ovog polja nije valjana datoteka. Resetiranjem ovog polja moći ćete odabrati novu datoteku.',
  /** Reset value */
  'inputs.file.invalid-file-warning.reset-button.text': 'Resetiraj vrijednost',
  /** Invalid file value */
  'inputs.file.invalid-file-warning.title': 'Neispravna vrijednost datoteke',
  /** Select */
  'inputs.file.multi-browse-button.text': 'Odaberi',
  /** The upload could not be completed at this time. */
  'inputs.file.upload-failed.description': 'Prijenos nije moguće dovršiti u ovom trenutku.',
  /** Upload failed */
  'inputs.file.upload-failed.title': 'Prijenos nije uspio',
  /** Clear field */
  'inputs.files.common.actions-menu.clear-field.label': 'Očisti polje',
  /** Copy URL */
  'inputs.files.common.actions-menu.copy-url.label': 'Kopiraj URL',
  /** Download */
  'inputs.files.common.actions-menu.download.label': 'Preuzmi',
  /** The URL is copied to the clipboard */
  'inputs.files.common.actions-menu.notification.url-copied': 'URL je kopiran u međuspremnik',
  /** Replace */
  'inputs.files.common.actions-menu.replace.label': 'Zamijeni',
  /** Upload */
  'inputs.files.common.actions-menu.upload.label': 'Prenesi',
  /** Drop to upload */
  'inputs.files.common.drop-message.drop-to-upload': 'Ispusti za prijenos',
  /** Drop to upload `{{count}}` file */
  'inputs.files.common.drop-message.drop-to-upload-multi_one':
    'Ispusti za prijenos {{count}} datoteke',
  /** Drop to upload `{{count}}` files */
  'inputs.files.common.drop-message.drop-to-upload-multi_other':
    'Ispusti za prijenos {{count}} datoteka',
  /** Can't upload this file here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_one':
    'Ovdje nije moguće prenijeti ovu datoteku',
  /** Can't upload any of these files here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_other':
    'Ovdje nije moguće prenijeti niti jednu od ovih datoteka',
  /** `{{count}}` file can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_one':
    '{{count}} datoteka se ne može prenijeti ovdje',
  /** `{{count}}` files can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_other':
    '{{count}} datoteka se ne može prenijeti ovdje',
  /** Cannot upload `{{count}}` files */
  'inputs.files.common.placeholder.cannot-upload-some-files_one': 'Nije moguće prenijeti datoteku',
  'inputs.files.common.placeholder.cannot-upload-some-files_other':
    'Nije moguće prenijeti {{count}} datoteka',
  /** Drag or paste type here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_file':
    'Povuci ili zalijepi datoteku ovdje',
  /** Drag or paste image here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_image':
    'Povuci ili zalijepi sliku ovdje',
  /** Drop to upload file */
  'inputs.files.common.placeholder.drop-to-upload_file': 'Ispusti za prijenos datoteke',
  /** Drop to upload image */
  'inputs.files.common.placeholder.drop-to-upload_image': 'Ispusti za prijenos slike',
  /** Read only */
  'inputs.files.common.placeholder.read-only': 'Samo za čitanje',
  /** Can't upload files here */
  'inputs.files.common.placeholder.upload-not-supported': 'Ovdje nije moguće prenijeti datoteke',
  /** Clear upload */
  'inputs.files.common.stale-upload-warning.clear': 'Očisti prijenos',
  /** An upload has made no progress for at least `{{staleThresholdMinutes}}` minutes and likely got interrupted. You can safely clear the incomplete upload and try uploading again. */
  'inputs.files.common.stale-upload-warning.description':
    'Prijenos nije napredovao najmanje {{staleThresholdMinutes}} minuta i vjerojatno je prekinut. Možete sigurno očistiti nedovršeni prijenos i pokušati ponovno učitati.',
  /** Incomplete upload */
  'inputs.files.common.stale-upload-warning.title': 'Nedovršeni prijenos',
  /** Tooltip text for action to crop image */
  'inputs.image.actions-menu.crop-image-tooltip': 'Obreži sliku',
  /** Accessibility label for button to open image edit dialog */
  'inputs.image.actions-menu.edit-details.aria-label': 'Otvori dijalog za uređivanje slike',
  /** Accessibility label for button to open image options menu */
  'inputs.image.actions-menu.options.aria-label': 'Otvori izbornik opcija slike',
  /** Select */
  'inputs.image.browse-menu.text': 'Odaberi',
  /** Cannot upload this file here */
  'inputs.image.drag-overlay.cannot-upload-here': 'Ovdje nije moguće učitati datoteku',
  /** Drop image to upload */
  'inputs.image.drag-overlay.drop-to-upload-image': 'Ispusti sliku za učitavanje',
  /** This field is read only */
  'inputs.image.drag-overlay.this-field-is-read-only': 'Ovo polje je samo za čitanje',
  /** Unknown member kind: `{{kind}}` */
  'inputs.image.error.unknown-member-kind': 'Nepoznata vrsta člana: {{kind}}',
  /** Edit hotspot and crop */
  'inputs.image.hotspot-dialog.title': 'Uredi hotspot i obrezivanje',
  /** The value of this field is not a valid image. Resetting this field will let you choose a new image. */
  'inputs.image.invalid-image-warning.description':
    'Vrijednost ovog polja nije valjana slika. Resetiranjem ovog polja možete odabrati novu sliku.',
  /** Reset value */
  'inputs.image.invalid-image-warning.reset-button.text': 'Resetiraj vrijednost',
  /** Invalid image value */
  'inputs.image.invalid-image-warning.title': 'Nevažeća vrijednost slike',
  /** Preview of uploaded image */
  'inputs.image.preview-uploaded-image': 'Pregled učitane slike',
  /** The upload could not be completed at this time. */
  'inputs.image.upload-error.description': 'Prijenos trenutno nije moguće dovršiti.',
  /** Upload failed */
  'inputs.image.upload-error.title': 'Prijenos nije uspio',
  /** Adjust the rectangle to crop image. Adjust the circle to specify the area that should always be visible. */
  'inputs.imagetool.description':
    'Prilagodi pravokutnik za obrezivanje slike. Prilagodi krug kako bi odredio područje koje bi uvijek trebalo biti vidljivo.',
  /** Error: `{{errorMessage}}` */
  'inputs.imagetool.load-error': 'Greška: {{errorMessage}}',
  /** Hotspot & Crop */
  'inputs.imagetool.title': 'Izrez i Obrezivanje',
  /** Convert to `{{targetType}}` */
  'inputs.invalid-value.convert-button.text': 'Pretvori u {{targetType}}',
  /** The current value (<code>`{{actualType}}`</code>) */
  'inputs.invalid-value.current-type': 'Trenutna vrijednost (<code>{{actualType}}</code>)',
  /** The property value is stored as a value type that does not match the expected type. */
  'inputs.invalid-value.description':
    'Vrijednost svojstva je pohranjena kao tip vrijednosti koji se ne podudara s očekivanim tipom.',
  /** The value of this property must be of type <code>`{{validType}}`</code> according to the schema. */
  'inputs.invalid-value.details.description':
    'Vrijednost ovog svojstva mora biti tipa <code>{{validType}}</code> prema shemi.',
  /** Only the following types are valid here according to schema: */
  'inputs.invalid-value.details.multi-type-description':
    'Samo sljedeći tipovi su valjani ovdje prema shemi:',
  /** Mismatching value types typically occur when the schema has recently been changed. */
  'inputs.invalid-value.details.possible-reason':
    'Neslaganje tipova vrijednosti obično se događa kada je shema nedavno promijenjena.',
  /** Developer info */
  'inputs.invalid-value.details.title': 'Informacije za developere',
  /** -- Invalid Value Input -- */
  /** Reset value */
  'inputs.invalid-value.reset-button.text': 'Resetiraj vrijednost',
  /** Invalid property value */
  'inputs.invalid-value.title': 'Neispravna vrijednost svojstva',
  /** Field groups */
  'inputs.object.field-group-tabs.aria-label': 'Grupe polja',
  /** Read-only field description */
  'inputs.object.unknown-fields.read-only.description':
    'Ovo polje je <strong>samo za čitanje</strong> prema shemi dokumenta i ne može se poništiti. Ako želite moći poništiti ovo u Studiju, pobrinite se da uklonite <code>readOnly</code> polje iz obuhvaćenog tipa u shemi.',
  /** Remove field */
  'inputs.object.unknown-fields.remove-field-button.text': 'Ukloni polje',
  /** Encountered `{{count}}` fields that are not defined in the schema. */
  'inputs.object.unknown-fields.warning.description_one':
    'Naišlo se na polje koje nije definirano u shemi.',
  'inputs.object.unknown-fields.warning.description_other':
    'Naišlo se na {{count}} polja koja nisu definirana u shemi.',
  /** Detailed description of unknown field warning */
  'inputs.object.unknown-fields.warning.details.description_one':
    'Ovo polje nije definirano u shemi, što bi moglo značiti da je definicija polja uklonjena ili da je netko drugi dodao u svoj lokalni projekt i još nije primijenio svoje promjene.',
  'inputs.object.unknown-fields.warning.details.description_other':
    'Ova polja nisu definirana u shemi dokumenta, što bi moglo značiti da su definicije polja uklonjene ili da je netko drugi dodao u svoj lokalni projekt i još nije primijenio svoje promjene.',
  /** Developer info */
  'inputs.object.unknown-fields.warning.details.title': 'Informacije za developere',
  /** Unknown field found */
  'inputs.object.unknown-fields.warning.title_one': 'Nepoznato polje pronađeno',
  'inputs.object.unknown-fields.warning.title_other': 'Nepoznata polja pronađena',
  /** Collapse the editor to save screen space  */
  'inputs.portable-text.action.collapse-editor': 'Skupi uređivač',
  /** Aria label for action to edit an existing annotation */
  'inputs.portable-text.action.edit-annotation-aria-label': 'Uredi napomenu',
  /** Expand the editor to give more editing space */
  'inputs.portable-text.action.expand-editor': 'Proširi uređivač',
  /** Label label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block': 'Umetni {{typeName}}',
  /** Accessibility label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block-aria-label': 'Umetni {{typeName}} (blok)',
  /** Label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object': 'Umetni {{typeName}}',
  /** Accessibility label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object-aria-label': 'Umetni {{typeName}} (inline)',
  /** Aria label for action to remove an annotation */
  'inputs.portable-text.action.remove-annotation-aria-label': 'Ukloni napomenu',
  /** Label for activate on focus with context of click and not focused */
  'inputs.portable-text.activate-on-focus-message_click': 'Kliknite za aktivaciju',
  /** Label for activate on focus with context of click and focused */
  'inputs.portable-text.activate-on-focus-message_click-focused':
    'Kliknite ili pritisnite razmaknicu za aktivaciju',
  /** Label for activate on focus with context of tap and not focused */
  'inputs.portable-text.activate-on-focus-message_tap': 'Dodirnite za aktivaciju',
  /**Aria label for the annotation object */
  'inputs.portable-text.annotation-aria-label': 'Objekt napomene',
  /** Title for dialog that allows editing an annotation */
  'inputs.portable-text.annotation-editor.title': 'Uredi {{schemaType}}',
  /** Title of the default "link" annotation */
  'inputs.portable-text.annotation.link': 'Poveznica',
  /**Aria label for the block object */
  'inputs.portable-text.block.aria-label': 'Objekt bloka',
  /** Label for action to edit a block item, in the case where it is editable */
  'inputs.portable-text.block.edit': 'Uredi',
  /** Accessibility label for the button that opens the actions menu on blocks */
  'inputs.portable-text.block.open-menu-aria-label': 'Otvori izbornik',
  /** Label for action to open a reference, in the case of block-level reference types */
  'inputs.portable-text.block.open-reference': 'Otvori referencu',
  /** Label for action to remove a block item */
  'inputs.portable-text.block.remove': 'Ukloni',
  /** Label for action to view a block item, in the case where it is read-only and thus cannot be edited */
  'inputs.portable-text.block.view': 'Pogledaj',
  /** Title of the "code" decorator */
  'inputs.portable-text.decorator.code': 'Kod',
  /** Title of the "em" (emphasis) decorator */
  'inputs.portable-text.decorator.emphasis': 'Kurziv',
  /** Title of the "strike-through" decorator */
  'inputs.portable-text.decorator.strike-through': 'Precrtano',
  /** Title of the "strong" decorator */
  'inputs.portable-text.decorator.strong': 'Podebljano',
  /** Title of the "underline" decorator */
  'inputs.portable-text.decorator.underline': 'Podcrtano',
  /** Placeholder text for when the editor is empty */
  'inputs.portable-text.empty-placeholder': 'Prazno',
  /**Aria label for the block object */
  'inputs.portable-text.inline-block.aria-label': 'Umetnuti objekt',
  /** Label for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit': 'Uredi objekt',
  /** Aria label for icon for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit-aria-label': 'Uredi objekt',
  /** Label for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove': 'Ukloni objekt',
  /** Aria label for icon for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove-aria-label': 'Ukloni objekt',
  /** Disclaimer text shown on invalid Portable Text value, when an action is available to unblock the user, but it is not guaranteed to be safe */
  'inputs.portable-text.invalid-value.action-disclaimer':
    'NAPOMENA: Općenito je sigurno izvršiti gore navedenu radnju, ali ako ste u nedoumici, obratite se onima koji su odgovorni za konfiguraciju vašeg Studija.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.action': 'Ukloni objekt',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.description':
    'Dijete s ključem {{childKey}} bloka s ključem <code>{{key}}</code> je tipa <code>{{childType}}</code>, što nije dopušteno prema definiciji sheme.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.action': 'Ukloni blok',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.description':
    'Blok s ključem <code>{{key}}</code> je tipa <code>{{typeName}}</code>, što nije dopušteno prema shemi.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.action': 'Umetni prazan tekstualni raspon',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.description':
    'Tekstualni blok s ključem <code>{{key}}</code> nema tekstualnih raspona.',
  /** Label for the button to ignore invalid values in the Portable Text editor */
  'inputs.portable-text.invalid-value.ignore-button.text': 'Ignoriraj',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.action':
    'Koristi tip <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.description':
    'Blok s ključem <code>{{key}}</code> ima neispravno ime tipa. Prema shemi, trebao bi biti <code>{{expectedTypeName}}</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.action': 'Postavi praznu vrijednost teksta',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.description':
    'Raspon s ključem {{childKey}} bloka s ključem <code>{{key}}</code> ima nedostajuće ili neispravno <code>text</code> svojstvo.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.action':
    'Koristi tip <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.description':
    'Blok s ključem <code>{{key}}</code> nedostaje ime tipa. Prema shemi, trebao bi biti <code>{{expectedTypeName}}</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.action': 'Dodijeli nasumični ključ',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.description':
    'Dijete na indeksu <code>{{index}}</code> bloka s ključem <code>{{key}}</code> nedostaje <code>_key</code> svojstvo.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.action': 'Ukloni objekt',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.description':
    'Dijete s ključem {{childKey}} bloka s ključem <code>{{key}}</code> nedostaje <code>_type</code> svojstvo.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.action': 'Dodijeli nasumični ključ',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.description':
    'Blok na indeksu <code>{{index}}</code> nedostaje potrebno <code>_key</code> svojstvo.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.action': 'Ukloni blok',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.description':
    'Tekstualni blok s ključem <code>{{key}}</code> ima neispravno ili nedostajuće `children` svojstvo.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.action': 'Dodaj svojstvo',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.description':
    'Tekstualni blok s ključem <code>{{key}}</code> ima neispravno ili nedostajuće `markDefs` svojstvo.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.action': 'Ukloni blok',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.description':
    'Blok s ključem <code>{{key}}</code> nedostaje ime tipa.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.action': 'Ukloni stavku',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.description':
    'Dijete na indeksu <code>{{index}}</code> bloka s ključem <code>{{key}}</code> nije objekt.',
  /** Action presented when the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.action': 'Poništi vrijednost',
  /** Text explaining that the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.description':
    'Vrijednost mora biti niz blokova Portable Text ili nedefinirana.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.action': 'Ukloni stavku',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.description':
    'Stavka na <code>{{index}}</code> nije objekt,.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.action': 'Ukloni nedozvoljene oznake',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.description':
    'Tekstualni blok s ključem <code>{{key}}</code> sadrži oznake <code>({{orphanedMarks, list}})</code> koje nisu dozvoljene shemom.',
  /** Title for the alert indicating that the Portable Text field has an invalid value */
  'inputs.portable-text.invalid-value.title': 'Neispravna vrijednost Portable Texta',
  /** Title of "bulleted" list type */
  'inputs.portable-text.list-type.bullet': 'Popis s grafičkim oznakama',
  /** Title of numbered list type */
  'inputs.portable-text.list-type.number': 'Numerirani popis',
  /** Title of the "h1" block style */
  'inputs.portable-text.style.h1': 'Naslov 1',
  /** Title of the "h2" block style */
  'inputs.portable-text.style.h2': 'Naslov 2',
  /** Title of the "h3" block style */
  'inputs.portable-text.style.h3': 'Naslov 3',
  /** Title of the "h4" block style */
  'inputs.portable-text.style.h4': 'Naslov 4',
  /** Title of the "h5" block style */
  'inputs.portable-text.style.h5': 'Naslov 5',
  /** Title of the "h6" block style */
  'inputs.portable-text.style.h6': 'Naslov 6',
  /** Title shown when multiple blocks of varying styles is selected */
  'inputs.portable-text.style.multiple': 'Višestruko',
  /** Title of fallback when no style is given for a block */
  'inputs.portable-text.style.none': 'Bez stila',
  /** Title of the "normal" block style */
  'inputs.portable-text.style.normal': 'Normalno',
  /** Title of the "quote" block style */
  'inputs.portable-text.style.quote': 'Citat',
  /** Label for action to clear the current value of the reference field */
  'inputs.reference.action.clear': 'Očisti',
  /** Label for action to create a new document from the reference input */
  'inputs.reference.action.create-new-document': 'Stvori',
  /** Label for action to create a new document from the reference input, when there are multiple templates or document types to choose from */
  'inputs.reference.action.create-new-document-select': 'Stvori…',
  /** Label for action to duplicate the current item to a new item (used within arrays) */
  'inputs.reference.action.duplicate': 'Dupliciraj',
  /** Label for action that opens the referenced document in a new tab */
  'inputs.reference.action.open-in-new-tab': 'Otvori u novoj kartici',
  /** Label for action to remove the reference from an array */
  'inputs.reference.action.remove': 'Ukloni',
  /** Label for action to replace the current value of the field */
  'inputs.reference.action.replace': 'Zamijeni',
  /** Label for action to cancel a previously initiated replace action  */
  'inputs.reference.action.replace-cancel': 'Otkaži zamjenu',
  /** The cross-dataset reference field currently has a reference, but the feature has been disabled since it was created. This explains what can/cannot be done in its current state. */
  'inputs.reference.cross-dataset.feature-disabled-actions':
    'Još uvijek možete očistiti postojeću referencu ovog polja, ali je ne možete promijeniti na drugi dokument dok je značajka onemogućena.',
  /** A cross-dataset reference field exists but the feature has been disabled. A <DocumentationLink> component is available. */
  'inputs.reference.cross-dataset.feature-disabled-description':
    'Ova značajka je onemogućena. Pročitajte kako je omogućiti u <DocumentationLink>dokumentaciji</DocumentationLink>.',
  /** Title for a warning telling the user that the current project does not have the "cross dataset references" feature */
  'inputs.reference.cross-dataset.feature-unavailable-title':
    'Nedostupna značajka: Referenca preko više skupova podataka',
  /** The cross-dataset reference points to a document with an invalid type  */
  'inputs.reference.cross-dataset.invalid-type':
    'Referencirani dokument je neispravnog tipa ({{typeName}}) <JsonValue/>',
  /** The referenced document will open in a new tab (due to external studio) */
  'inputs.reference.document-opens-in-new-tab': 'Ovaj dokument se otvara u novom tabu',
  /** Error title for when the document is unavailable (for any possible reason) */
  'inputs.reference.error.document-unavailable-title': 'Dokument nije dostupan',
  /** Error title for when the referenced document failed to be loaded */
  'inputs.reference.error.failed-to-load-document-title':
    'Učitavanje referentnog dokumenta nije uspjelo',
  /** Error title for when the reference search returned a document that is not an allowed type for the field */
  'inputs.reference.error.invalid-search-result-type-title':
    'Pretraga je vratila tip koji nije valjan za ovu referencu: "{{returnedType}}"',
  /** Error description for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-description':
    'Referentni dokument (<code>{{documentId}}</code>) je tipa <code>{{actualType}}</code>. Prema shemi, referentni dokumenti mogu biti samo tipa <AllowedTypes />.',
  /** Error title for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-title': 'Dokument nevažećeg tipa',
  /** Error description for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-description':
    'Referentni dokument nije moguće pristupiti zbog nedovoljnih dozvola',
  /** Error title for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-title': 'Nedovoljne dozvole',
  /** Error description for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-description':
    'Referentni dokument ne postoji (ID: <code>{{documentId}}</code>). Možete ukloniti referencu ili je zamijeniti s drugim dokumentom.',
  /** Error title for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-title': 'Nije pronađeno',
  /** Label for button that clears the reference when it points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document.clear-button-label': 'Očisti',
  /** Error title for when the search for a reference failed. Note that the message sent by the backend may not be localized. */
  'inputs.reference.error.search-failed-title': 'Pretraga reference nije uspjela',
  /** Alternative text for the image shown in cross-dataset reference input */
  'inputs.reference.image-preview-alt-text': 'Pregled slike referentnog dokumenta',
  /** Description for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-description':
    '<strong>{{referencedDocument}}</strong> je objavljen i ova referenca sada treba biti finalizirana.',
  /** Title for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-title': 'Finaliziraj referencu',
  /** Description for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-description':
    '<strong>{{referencedDocument}}</strong> je objavljen i ova referenca sada treba biti pretvorena u jaku referencu.',
  /** Title for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-title': 'Pretvori u jaku referencu',
  /** Label for button that triggers the action that strengthen a reference */
  'inputs.reference.incomplete-reference.strengthen-button-label': 'Pretvori u jaku referencu',
  /** Label for button that triggers a retry attempt for reference metadata  */
  'inputs.reference.metadata-error.retry-button-label': 'Pokušaj ponovno',
  /** Title for alert shown when reference metadata fails to be loaded */
  'inputs.reference.metadata-error.title': 'Nije moguće učitati metapodatke reference',
  /** Message shown when no documents were found that matched the given search string */
  'inputs.reference.no-results-for-query': 'Nema rezultata za <strong>“{{searchTerm}}”</strong>',
  /** Text for tooltip showing when a document was edited, using relative time (eg "how long ago was it edited?") */
  'inputs.reference.preview.edited-at-time': 'Uređeno <RelativeTime/>',
  /** Accessibility label for icon indicating that document does _not_ have any unpublished changes */
  'inputs.reference.preview.has-no-unpublished-changes-aria-label': 'Nema neobjavljenih izmjena',
  /** Accessibility label for icon indicating that document has unpublished changes */
  'inputs.reference.preview.has-unpublished-changes-aria-label': 'Uređeno',
  /** Accessibility label for icon indicating that document does _not_ have a published version */
  'inputs.reference.preview.is-not-published-aria-label': 'Nije objavljeno',
  /** Accessibility label for icon indicating that document has a published version */
  'inputs.reference.preview.is-published-aria-label': 'Objavljeno',
  /** Text for tooltip indicating that a document has no unpublished edits */
  'inputs.reference.preview.no-unpublished-edits': 'Nema neobjavljenih izmjena',
  /** Text for tooltip indicating that a document has not yet been published */
  'inputs.reference.preview.not-published': 'Nije objavljeno',
  /** Text for tooltip showing when a document was published, using relative time (eg "how long ago was it published?") */
  'inputs.reference.preview.published-at-time': 'Objavljeno <RelativeTime/>',
  /** The referenced document no longer exist and might have been deleted (for weak references) */
  'inputs.reference.referenced-document-does-not-exist':
    'Referencirani dokument više ne postoji i mogao je biti izbrisan (ID dokumenta: <code>{{documentId}}</code>).',
  /** The referenced document could not be displayed to the user because of insufficient permissions */
  'inputs.reference.referenced-document-insufficient-permissions':
    'Referencirani dokument nije moguće pristupiti zbog nedovoljnih dozvola',
  /** Label for when the reference input is resolving the initial value for an item */
  'inputs.reference.resolving-initial-value': 'Rješavanje početne vrijednosti…',
  /** Placeholder shown in a reference input with no current value */
  'inputs.reference.search-placeholder': 'Upišite za pretragu',
  /** Explanation of the consequences of leaving the reference as strong instead of weak */
  'inputs.reference.strength-mismatch.is-strong-consquences':
    'Neće biti moguće izbrisati referencirani dokument bez prethodnog uklanjanja ove reference ili pretvaranja u slabu.',
  /** Description for alert shown when a reference is supposed to be weak, but the actual value is strong */
  'inputs.reference.strength-mismatch.is-strong-description':
    'Ova referenca je <em>jaka</em>, ali prema trenutnoj shemi trebala bi biti <em>slaba</em>.',
  /** Explanation of the consequences of leaving the reference as weak instead of strong */
  'inputs.reference.strength-mismatch.is-weak-consquences':
    'To omogućuje brisanje referenciranog dokumenta bez prethodnog brisanja ove reference, ostavljajući ovo polje koje referencira nepostojeći dokument.',
  /** Description for alert shown when a reference is supposed to be strong, but the actual value is weak */
  'inputs.reference.strength-mismatch.is-weak-description':
    'Ova referenca je <em>slaba</em>, ali prema trenutnoj shemi trebala bi biti <em>jaka</em>.',
  /** Label for button that triggers the action that strengthens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.strengthen-button-label': 'Pretvori u jaku referencu',
  /** Title for alert shown when a reference is supposed to be weak/strong, but the actual value is the opposite of what it is supposed to be */
  'inputs.reference.strength-mismatch.title': 'Neslaganje jačine reference',
  /** Label for button that triggers the action that weakens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.weaken-button-label': 'Pretvori u slabu referencu',
  /** Action message for generating the slug */
  'inputs.slug.action.generate': 'Generiraj',
  /** Loading message for when the input is actively generating a slug */
  'inputs.slug.action.generating': 'Generiranje…',
  /** Error message for when the source to generate a slug from is missing */
  'inputs.slug.error.missing-source':
    'Izvor nedostaje. Provjerite izvor na tipu {{schemaType}} u shemi',
  /** Placeholder for an empty tag input */
  'inputs.tags.placeholder': 'Unesite oznaku i pritisnite ENTER…',
  /** Placeholder for an empty tag input on touch devices */
  'inputs.tags.placeholder_touch': 'Unesite oznaku…',
  /** Convert to `{{targetType}}` */
  'inputs.untyped-value.convert-button.text': 'Pretvori u {{targetType}}',
  /** Encountered an object value without a <code>_type</code> property. */
  'inputs.untyped-value.description':
    'Naišlo se na vrijednost objekta bez svojstva <code>_type</code>.',
  /** Either remove the <code>name</code> property of the object declaration, or set <code>_type</code> property on items. */
  'inputs.untyped-value.details.description':
    'Ili uklonite svojstvo <code>name</code> iz deklaracije objekta, ili postavite svojstvo <code>_type</code> na stavkama.',
  /** Current value (<code>object</code>): */
  'inputs.untyped-value.details.json-dump-prefix': 'Trenutna vrijednost (<code>objekt</code>):',
  /** The following types are valid here according to schema: */
  'inputs.untyped-value.details.multi-type-description':
    'Prema shemi ovdje su valjani sljedeći tipovi:',
  /** Developer info */
  'inputs.untyped-value.details.title': 'Informacije za developere',
  /** Property value missing <code>_type</code> */
  'inputs.untyped-value.title': 'Vrijednost svojstva nedostaje <code>_type</code>',
  /** Unset value */
  'inputs.untyped-value.unset-item-button.text': 'Poništi vrijednost',

  /** The fallback explanation if no context is provided */
  'insufficient-permissions-message.not-authorized-explanation':
    'Nemate dopuštenje za pristup ovoj značajci.',
  /** The explanation when unable to create any document at all */
  'insufficient-permissions-message.not-authorized-explanation_create-any-document':
    'Nemate dopuštenje za stvaranje dokumenta.',
  /** The explanation when unable to create a particular document */
  'insufficient-permissions-message.not-authorized-explanation_create-document':
    'Nemate dopuštenje za stvaranje ovog dokumenta.',
  /** The explanation when unable to create a particular type of document */
  'insufficient-permissions-message.not-authorized-explanation_create-document-type':
    'Nemate dopuštenje za stvaranje ovakve vrste dokumenta.',
  /** The explanation when unable to create a new reference in a document */
  'insufficient-permissions-message.not-authorized-explanation_create-new-reference':
    'Nemate dopuštenje za stvaranje nove reference.',
  /** The explanation when unable to delete a particular document */
  'insufficient-permissions-message.not-authorized-explanation_delete-document':
    'Nemate dopuštenje za brisanje ovog dokumenta.',
  /** The explanation when unable to discard changes in a particular document */
  'insufficient-permissions-message.not-authorized-explanation_discard-changes':
    'Nemate dopuštenje za odbacivanje promjena u ovom dokumentu.',
  /** The explanation when unable to duplicate a particular document */
  'insufficient-permissions-message.not-authorized-explanation_duplicate-document':
    'Nemate dopuštenje za dupliciranje ovog dokumenta.',
  /** The explanation when unable to publish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_publish-document':
    'Nemate dopuštenje za objavljivanje ovog dokumenta.',
  /** The explanation when unable to unpublish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_unpublish-document':
    'Nemate dopuštenje za povlačenje objave ovog dokumenta.',
  /** Appears after the not-authorized message. Lists the current roles. */
  'insufficient-permissions-message.roles': 'Vaše uloge: <Roles/>',
  /** The title for the insufficient permissions message component */
  'insufficient-permissions-message.title': 'Nedovoljne dozvole',

  /** Unexpected error: `{{error}}` */
  'member-field-error.unexpected-error': 'Neočekivana greška: {{error}}',

  /** Button label for "Create new document" button */
  'new-document.button': 'Stvori',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are templates/types available for creation
   */
  'new-document.create-new-document-label': 'Novi dokument…',
  /** Placeholder for the "filter" input within the new document menu */
  'new-document.filter-placeholder': 'Filtriraj',
  /** Loading indicator text within the new document menu */
  'new-document.loading': 'Učitavanje…',
  /** Accessibility label for the list displaying options in the new document menu */
  'new-document.new-document-aria-label': 'Novi dokument',
  /** Message for when there are no document type options in the new document menu */
  'new-document.no-document-types-found': 'Nisu pronađene vrste dokumenata',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are no templates/types to create from
   */
  'new-document.no-document-types-label': 'Nema vrsta dokumenata',
  /** Message for when no results are found for a specific search query in the new document menu */
  'new-document.no-results': 'Nema rezultata za <strong>{{searchQuery}}</strong>',
  /** Aria label for the button that opens the "Create new document" popover/dialog */
  'new-document.open-dialog-aria-label': 'Stvori novi dokument',
  /** Title for "Create new document" dialog */
  'new-document.title': 'Stvori novi dokument',

  /** Label for action to manage members of the current studio project */
  'presence.action.manage-members': 'Upravljanje članovima',
  /** Accessibility label for presence menu button */
  'presence.aria-label': 'Tko je ovdje',
  /** Message description for when no one else is currently present */
  'presence.no-one-else-description':
    'Pozovite ljude u projekt kako biste vidjeli njihov online status.',
  /** Message title for when no one else is currently present */
  'presence.no-one-else-title': 'Nitko drugi nije ovdje',
  /** Message for when a user is not in a document (displayed in the global presence menu) */
  'presence.not-in-a-document': 'Nije u dokumentu',
  /** Tooltip content text for presence menu button */
  'presence.tooltip-content': undefined, // 'Who is here'

  /** Fallback title shown when a preview does not provide a title */
  'preview.default.title-fallback': 'Bez naslova',
  /** Fallback preview value for types that have "no value" (eg null, undefined) */
  'preview.fallback.no-value': '(nema vrijednosti)',
  /** Alternative text for image being shown while image is being uploaded, in previews */
  'preview.image.file-is-being-uploaded.alt-text': 'Slika se trenutno učitava',

  /* Relative time, just now */
  'relative-time.just-now': 'upravo sada',

  /** Accessibility label to open search action when the search would go fullscreen (eg on narrower screens) */
  'search.action-open-aria-label': 'Otvori pretragu',
  /** Action label for adding a search filter */
  'search.action.add-filter': 'Dodaj filter',
  /** Action label for clearing search filters */
  'search.action.clear-filters': 'Očisti filtere',
  /** Label for action to clear recent searches */
  'search.action.clear-recent-searches': 'Očisti nedavne pretrage',
  /** Accessibility label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-aria-label': 'Očisti odabrane filtere',
  /** Label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-label': 'Očisti',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to close the search */
  'search.action.close-search-aria-label': 'Zatvori pretragu',
  /** Accessibility label for filtering by document type */
  'search.action.filter-by-document-type-aria-label': 'Filtriraj po tipu dokumenta',
  /** Accessibility action label for removing an already applied search filter */
  'search.action.remove-filter-aria-label': 'Ukloni filter',
  /**
   * Text displayed when either no document type(s) have been selected, or we need a fallback,
   * eg "Search for all types".
   */
  'search.action.search-all-types': 'Pretraži sve dokumente',
  /**
   * Text displayed when we are able to determine one or more document types that will be used for
   * searching, and can fit within the space assigned by the design.
   */
  'search.action.search-specific-types': 'Pretraži za {{types, list}}',
  /** Dialog title for action to select an asset of unknown type */
  'search.action.select-asset': 'Odaberi datoteku',
  /** Dialog title for action to select a file asset */
  'search.action.select-asset_file': 'Odaberi datoteku',
  /** Dialog title for action to select an image asset */
  'search.action.select-asset_image': 'Odaberi sliku',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-aria-label_hide': 'Sakrij filtere',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-aria-label_show': 'Prikaži filtre',
  /** Label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-label_hide': 'Sakrij filtre',
  /** Label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-label_show': 'Prikaži filtre',
  /** Tooltip text for the global search button */
  'search.button.tooltip': 'Pretraži',
  /**
   * A list of provided types (use `list` formatter preferably).
   */
  'search.document-type-list': '{{types, list}}',
  /**
   * In the context of a list of document types - no filtering selection has been done,
   * thus the default is "all types".
   */
  'search.document-type-list-all-types': 'Svi tipovi',
  /** Accessibility label for list displaying the available document types */
  'search.document-types-aria-label': 'Tipovi dokumenata',
  /** Label for when no document types matching the filter are found */
  'search.document-types-no-matches-found': 'Nema podudaranja za {{filter}}',
  /** Description for error when a filter cannot be displayed, describes that you should check the schema */
  'search.error.display-filter-description':
    'To može ukazivati na nevažeće opcije definirane u vašoj shemi.',
  /** Title for error when a filter cannot be displayed (mainly a developer-oriented error) */
  'search.error.display-filter-title': 'Došlo je do pogreške prilikom prikazivanja ovog filtra.',
  /** Description for error when no valid asset source is found, describes that you should check the the current studio config */
  'search.error.no-valid-asset-source-check-config-description':
    'Molimo provjerite da li je omogućeno u konfiguracijskoj datoteci vašeg Studija.',
  /** Description for error when no valid asset source is found, describes that only the default asset is supported */
  'search.error.no-valid-asset-source-only-default-description':
    'Trenutno je podržan samo zadani izvor datoteka.',
  /** Title for error when no valid asset sources found */
  'search.error.no-valid-asset-source-title': 'Nisu pronađeni važeći izvori datoteka.',
  /** Helpful description for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-help-description':
    'Molimo pokušajte ponovno ili provjerite svoju vezu',
  /** Title label for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-title': 'Nešto je pošlo po zlu tijekom pretraživanja',
  /**
   * Label for "All fields", a label that appears above the list of available fields when filtering.
   * If one or more document type has been chosen as filter, this label is replaced with a group of
   * fields per selected document type
   */
  'search.filter-all-fields-header': 'Sva polja',
  /** Label for the action of changing from one file to a different file in asset search filter */
  'search.filter-asset-change_file': 'Promijeni datoteku',
  /** Label for the action of changing from one image to a different image in asset search filter */
  'search.filter-asset-change_image': 'Promijeni sliku',
  /** Label for the action of clearing the currently selected asset in an image/file filter */
  'search.filter-asset-clear': 'Očisti',
  /** Label for the action of selecting a file in asset search filter */
  'search.filter-asset-select_file': 'Odaberi datoteku',
  /** Label for the action of selecting an image in asset search filter */
  'search.filter-asset-select_image': 'Odaberi sliku',
  /** Label for boolean filter - false */
  'search.filter-boolean-false': 'Netočno',
  /** Label for boolean filter - true */
  'search.filter-boolean-true': 'Točno',
  /** Accessibility label for list that lets you filter fields by title, when adding a new filter in search */
  'search.filter-by-title-aria-label': 'Filtriraj po naslovu',
  /** Accessibility label for date filter input */
  'search.filter-date-aria-label': 'Datum',
  /** Accessibility label for selecting end date on the date range search filter */
  'search.filter-date-range-end-date-aria-label': 'Krajnji datum',
  /** Accessibility label for selecting start date on the date range search filter */
  'search.filter-date-range-start-date-aria-label': 'Početni datum',
  /**
   * Label for "Days"/"Months"/"Years" when selecting it as unit in "X days ago" search filter.
   * Capitalized, as it would be listed in a dropdown.
   */
  'search.filter-date-unit_days': 'Dani',
  'search.filter-date-unit_months': 'Mjeseci',
  'search.filter-date-unit_years': 'Godine',
  /** Accessibility label for selecting the unit (day/month/year) when adding "X days ago" search filter */
  'search.filter-date-unit-aria-label': 'Odaberite jedinicu',
  /** Accessibility label for the input value (days/months/years) when adding "X days ago" search filter */
  'search.filter-date-value-aria-label': 'Vrijednost jedinice',
  /** Label for "field description" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-description': 'Opis polja',
  /** Label for "field name" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-name': 'Naziv polja',
  /** Label for "Used in document types", a list of the document types a field appears in. Shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-used-in-document-types': 'Korišteno u vrstama dokumenata',
  /** Label for when no fields/filters are found for the given term */
  'search.filter-no-matches-found': 'Nema podudaranja za {{filter}}',
  /** Placeholder value for maximum numeric value filter */
  'search.filter-number-max-value-placeholder': 'Maksimalna vrijednost',
  /** Placeholder value for minimum numeric value filter */
  'search.filter-number-min-value-placeholder': 'Minimalna vrijednost',
  /** Placeholder value for the number filter */
  'search.filter-number-value-placeholder': 'Vrijednost',
  /** Placeholder for the "Filter" input, when narrowing possible fields/filters */
  'search.filter-placeholder': 'Filtriraj',
  /** Label for the action of clearing the currently selected document in a reference filter */
  'search.filter-reference-clear': 'Očisti',
  /**
   * Label for "shared fields", a label that appears above a list of fields that all filtered types
   * have in common, when adding a new filter. For instance, if "book" and "employee" both have a
   * "title" field, this field would be listed under "shared fields".
   * */
  'search.filter-shared-fields-header': 'Zajednička polja',
  /** Placeholder value for the string filter */
  'search.filter-string-value-placeholder': 'Vrijednost',
  /** Label/placeholder prompting user to select one of the predefined, allowed values for a string field */
  'search.filter-string-value-select-predefined-value': 'Odaberite…',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (singular) */
  'search.filters-aria-label_one': 'Filter',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (plural) */
  'search.filters-aria-label_other': 'Filteri',
  /** Label for instructions on how to use the search - displayed when no recent searches are available */
  'search.instructions': 'Koristite <ControlsIcon/> za preciziranje pretrage',
  /** Helpful description for when no search results are found */
  'search.no-results-help-description':
    'Pokušajte s drugom ključnom riječi ili prilagodite svoje filtere',
  /** Title label for when no search results are found */
  'search.no-results-title': 'Nema rezultata',
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
    '<Field/> <Operator>ima</Operator> <Value>{{count}} stavku</Value>',
  'search.operator.array-count-equal.description_other':
    '<Field/> <Operator>ima</Operator> <Value>{{count}} stavki</Value>',
  'search.operator.array-count-equal.name': 'količina je',
  /* Array should have a count greater than given filter value */
  'search.operator.array-count-gt.description_one':
    '<Field/> <Operator>ima ></Operator> <Value>{{count}} stavku</Value>',
  'search.operator.array-count-gt.description_other':
    '<Field/> <Operator>ima ></Operator> <Value>{{count}} stavki</Value>',
  'search.operator.array-count-gt.name': 'količina veća od',
  /* Array should have a count greater than or equal to the given filter value */
  'search.operator.array-count-gte.description_one':
    '<Field/> <Operator>ima ≥</Operator> <Value>{{count}} stavku</Value>',
  'search.operator.array-count-gte.description_other':
    '<Field/> <Operator>ima ≥</Operator> <Value>{{count}} stavki</Value>',
  'search.operator.array-count-gte.name': 'količina veća ili jednaka',
  /* Array should have a count less than given filter value */
  'search.operator.array-count-lt.description_one':
    '<Field/> <Operator>ima <</Operator> <Value>{{count}} stavku</Value>',
  'search.operator.array-count-lt.description_other':
    '<Field/> <Operator>ima <</Operator> <Value>{{count}} stavki</Value>',
  'search.operator.array-count-lt.name': 'količina manja od',
  /* Array should have a count less than or equal to the given filter value */
  'search.operator.array-count-lte.description_one':
    '<Field/> <Operator>ima ≤</Operator> <Value>{{count}} stavku</Value>',
  'search.operator.array-count-lte.description_other':
    '<Field/> <Operator>ima ≤</Operator> <Value>{{count}} stavki</Value>',
  'search.operator.array-count-lte.name': 'količina manja ili jednaka',
  /* Array should have a count that is not equal to the given filter value */
  'search.operator.array-count-not-equal.description_one':
    '<Field/> <Operator>nema</Operator> <Value>{{count}} stavku</Value>',
  'search.operator.array-count-not-equal.description_other':
    '<Field/> <Operator>nema</Operator> <Value>{{count}} stavki</Value>',
  'search.operator.array-count-not-equal.name': 'količina nije',
  /**
   * Array should have a count within the range of given filter values.
   * Gets passed `{{from}}` and `{{to}}` values.
   **/
  'search.operator.array-count-range.description':
    '<Field/> <Operator>ima između</Operator> <Value>{{from}} → {{to}} stavki</Value>',
  'search.operator.array-count-range.name': 'količina je između',
  /* Array should include the given value */
  'search.operator.array-list-includes.description':
    '<Field/> <Operator>uključuje</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-includes.name': 'uključuje',
  /* Array should not include the given value */
  'search.operator.array-list-not-includes.description':
    '<Field/> <Operator>ne uključuje</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-not-includes.name': 'ne uključuje',
  /* Array should include the given reference */
  'search.operator.array-reference-includes.description':
    '<Field/> <Operator>uključuje</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-includes.name': 'uključuje',
  /* Array should not include the given reference */
  'search.operator.array-reference-not-includes.description':
    '<Field/> <Operator>ne uključuje</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-not-includes.name': 'ne uključuje',
  /* Asset (file) should be the selected asset */
  'search.operator.asset-file-equal.description':
    '<Field/> <Operator>je</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-equal.name': 'je',
  /* Asset (file) should not be the selected asset */
  'search.operator.asset-file-not-equal.description':
    '<Field/> <Operator>nije</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-not-equal.name': 'nije',
  /* Asset (image) should be the selected asset */
  'search.operator.asset-image-equal.description':
    '<Field/> <Operator>je</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-equal.name': 'je',
  /* Asset (image) should not be the selected asset */
  'search.operator.asset-image-not-equal.description':
    '<Field/> <Operator>nije</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-not-equal.name': 'nije',
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
    '<Field/> <Operator>je nakon</Operator> <Value>{{value}}</Value>',
  'search.operator.date-after.name': 'nakon',
  /* Date should be before (earlier than) given filter value */
  'search.operator.date-before.description':
    '<Field/> <Operator>je prije</Operator> <Value>{{value}}</Value>',
  'search.operator.date-before.name': 'prije',
  /* Date should be the given filter value */
  'search.operator.date-equal.description':
    '<Field/> <Operator>je</Operator> <Value>{{value}}</Value>',
  'search.operator.date-equal.name': 'je',
  /* Date should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-last.description':
    '<Field/> <Operator>je u zadnjem</Operator> <Value>{{value}}</Value>',
  'search.operator.date-last.name': 'zadnji',
  /* Date should not be the given filter value */
  'search.operator.date-not-equal.description':
    '<Field/> <Operator>nije</Operator> <Value>{{value}}</Value>',
  'search.operator.date-not-equal.name': 'nije',
  /* Date should be within the range of given filter values */
  'search.operator.date-range.description': '<Field/> <Operator>je između</Operator> <Value/>',
  'search.operator.date-range.name': 'je između',
  /* Date and time should be after (later than) given filter value */
  'search.operator.date-time-after.description':
    '<Field/> <Operator>je nakon</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-after.name': 'poslije',
  /* Date and time should be before (earlier than) given filter value */
  'search.operator.date-time-before.description':
    '<Field/> <Operator>je prije</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-before.name': 'prije',
  /* Date and time should be the given filter value */
  'search.operator.date-time-equal.description':
    '<Field/> <Operator>je</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-equal.name': 'je',
  /* Date and time should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-time-last.description':
    '<Field/> <Operator>je u zadnjih</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-last.name': 'zadnji',
  /* Date and time should not be the given filter value */
  'search.operator.date-time-not-equal.description':
    '<Field/> <Operator>nije</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-not-equal.name': 'nije',
  /* Date and time should be within the range of given filter values */
  'search.operator.date-time-range.description': '<Field/> <Operator>je između</Operator> <Value/>',
  'search.operator.date-time-range.name': 'je između',
  /* Value should be defined */
  'search.operator.defined.description':
    '<Field/> <Operator>je</Operator> <Value>nije prazno</Value>',
  'search.operator.defined.name': 'nije prazno',
  /* Value should not be defined */
  'search.operator.not-defined.description':
    '<Field/> <Operator>je</Operator> <Value>prazno</Value>',
  'search.operator.not-defined.name': 'prazno',
  /* Number should be the given filter value */
  'search.operator.number-equal.description':
    '<Field/> <Operator>je</Operator> <Value>{{value}}</Value>',
  'search.operator.number-equal.name': 'je',
  /* Number should be greater than given filter value */
  'search.operator.number-gt.description':
    '<Field/> <Operator>></Operator> <Value>{{value}}</Value>',
  'search.operator.number-gt.name': 'veće od',
  /* Number should be greater than or the given filter value */
  'search.operator.number-gte.description':
    '<Field/> <Operator>≥</Operator> <Value>{{value}}</Value>',
  'search.operator.number-gte.name': 'veće ili jednako',
  /* Number should be less than given filter value */
  'search.operator.number-lt.description':
    '<Field/> <Operator><</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lt.name': 'manje od',
  /* Number should be less than or the given filter value */
  'search.operator.number-lte.description':
    '<Field/> <Operator>≤</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lte.name': 'manje ili jednako',
  /* Number should not be the given filter value */
  'search.operator.number-not-equal.description':
    '<Field/> <Operator>nije</Operator> <Value>{{value}}</Value>',
  'search.operator.number-not-equal.name': 'nije',
  /* Number should be within the range of given filter values */
  'search.operator.number-range.description':
    '<Field/> <Operator>je između</Operator> <Value>{{from}} → {{to}}</Value>',
  'search.operator.number-range.name': 'je između',
  /* Portable Text should contain the given filter value */
  'search.operator.portable-text-contains.description':
    '<Field/> <Operator>sadrži</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-contains.name': 'sadrži',
  /* Portable Text should be the given filter value */
  'search.operator.portable-text-equal.description':
    '<Field/> <Operator>je</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-equal.name': 'je',
  /* Portable Text should not contain the given filter value */
  'search.operator.portable-text-not-contains.description':
    '<Field/> <Operator>ne sadrži</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-contains.name': 'ne sadrži',
  /* Portable Text should not be the given filter value */
  'search.operator.portable-text-not-equal.description':
    '<Field/> <Operator>nije</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-equal.name': 'nije',
  /* References the given asset (file) */
  'search.operator.reference-asset-file.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-file.name': 'datoteka',
  /* References the given asset (image) */
  'search.operator.reference-asset-image.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-image.name': 'slika',
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
    '<Field/> <Operator>nije</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-not-equal.name': 'nije',
  /* Slug contains the given value */
  'search.operator.slug-contains.description':
    '<Field/> <Operator>sadrži</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-contains.name': 'sadrži',
  /* Slug equals the given filter value */
  'search.operator.slug-equal.description':
    '<Field/> <Operator>je</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-equal.name': 'je',
  /* Slug does not contain the given value */
  'search.operator.slug-not-contains.description':
    '<Field/> <Operator>ne sadrži</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-contains.name': 'ne sadrži',
  /* Slug does not equal the given filter value */
  'search.operator.slug-not-equal.description':
    '<Field/> <Operator>nije</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-equal.name': 'nije',
  /* String contains the given filter value */
  'search.operator.string-contains.description':
    '<Field/> <Operator>sadrži</Operator> <Value>{{value}}</Value>',
  'search.operator.string-contains.name': 'sadrži',
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
    '<Field/> <Operator>nije</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-not-equal.name': 'nije',
  /* String does not contain the given filter value */
  'search.operator.string-not-contains.description':
    '<Field/> <Operator>ne sadrži</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-contains.name': 'ne sadrži',
  /* String does not equal the given filter value */
  'search.operator.string-not-equal.description':
    '<Field/> <Operator>nije</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-equal.name': 'nije',
  /** Label for the "Best match" search ordering type */
  'search.ordering.best-match-label': 'Najbolje podudaranje',
  /** Label for the "Created: Oldest first" search ordering type */
  'search.ordering.created-ascending-label': 'Stvoreno: Najstarije prvo',
  /** Label for the "Created: Newest first" search ordering type */
  'search.ordering.created-descending-label': 'Stvoreno: Najnovije prvo',
  /** Label for the "Updated: Oldest first" search ordering type */
  'search.ordering.updated-ascending-label': 'Ažurirano: Najstarije prvo',
  /** Label for the "Updated: Newest first" search ordering type */
  'search.ordering.updated-descending-label': 'Ažurirano: Najnovije prvo',
  /** Placeholder text for the global search input field */
  'search.placeholder': 'Pretraži',
  /** Accessibility label for the recent searches section, shown when no valid search terms has been given */
  'search.recent-searches-aria-label': 'Nedavne pretrage',
  /** Label/heading shown for the recent searches section */
  'search.recent-searches-label': 'Nedavne pretrage',
  /** Accessibility label for the search results section, shown when the user has typed valid terms */
  'search.search-results-aria-label': 'Rezultati pretraživanja',

  /** Accessibility label for the navbar status button */
  'status-button.aria-label': undefined, // 'Configuration status'

  /** Description for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-description':
    'Transakcije povijesti dokumenta nisu bile pogođene.',
  /** Title for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-title':
    'Došlo je do pogreške prilikom dohvaćanja promjena dokumenta.',
  /** Error description for when the document doesn't have history */
  'timeline.error.no-document-history-description':
    'Kada mijenjate sadržaj dokumenta, verzije dokumenta će se pojaviti u ovom izborniku.',
  /** Error title for when the document doesn't have history */
  'timeline.error.no-document-history-title': 'Nema povijesti dokumenta',
  /** Error prompt when revision cannot be loaded */
  'timeline.error.unable-to-load-revision': 'Nije moguće učitati reviziju',
  /** Label for when the timeline item is the latest in the history */
  'timeline.latest': 'Najnovije',
  /** Label for latest version for timeline menu dropdown */
  'timeline.latest-version': 'Najnovija verzija',
  /** The aria-label for the list of revisions in the timeline */
  'timeline.list.aria-label': 'Revizije dokumenta',
  /** Label for loading history */
  'timeline.loading-history': 'Učitavanje povijesti…',
  /** Label shown in review changes timeline when a document has been created */
  'timeline.operation.created': 'Stvoreno',
  /** Label shown in review changes timeline when a document has been created, with a timestamp */
  'timeline.operation.created_timestamp': 'Stvoreno: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was initially created */
  'timeline.operation.created-initial': 'Stvoreno',
  /** Label shown in review changes timeline when a document was initially created, with a timestamp */
  'timeline.operation.created-initial_timestamp': 'Stvoreno: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been deleted */
  'timeline.operation.deleted': 'Izbrisano',
  /** Label shown in review changes timeline when a document has been deleted, with a timestamp */
  'timeline.operation.deleted_timestamp': 'Izbrisano: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been discarded */
  'timeline.operation.draft-discarded': 'Odbačena skica',
  /** Label shown in review changes timeline when a draft has been discarded, with a timestamp */
  'timeline.operation.draft-discarded_timestamp': 'Odbačena skica: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been edited */
  'timeline.operation.edited-draft': 'Uređeno',
  /** Label shown in review changes timeline when a draft has been edited, with a timestamp */
  'timeline.operation.edited-draft_timestamp': 'Uređeno: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been edited live */
  'timeline.operation.edited-live': 'Uređeno uživo',
  /** Label shown in review changes timeline when a document has been edited live, with a timestamp */
  'timeline.operation.edited-live_timestamp': 'Uređeno uživo: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was published */
  'timeline.operation.published': 'Objavljeno',
  /** Label shown in review changes timeline when a document was published, with a timestamp */
  'timeline.operation.published_timestamp': 'Objavljeno: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was unpublished */
  'timeline.operation.unpublished': 'Poništena objava',
  /** Label shown in review changes timeline when a document was unpublished, with a timestamp */
  'timeline.operation.unpublished_timestamp': 'Poništena objava: {{timestamp, datetime}}',
  /**
   * Label for determining since which version the changes for timeline menu dropdown are showing.
   * Receives the time label as a parameter (`timestamp`).
   */
  'timeline.since': 'Od: {{timestamp, datetime}}',
  /** Label for missing change version for timeline menu dropdown are showing */
  'timeline.since-version-missing': 'Od: nepoznata verzija',

  /**Aria label for the action buttons in the PTE toolbar */
  'toolbar.portable-text.action-button-aria-label': undefined, // '{{action}}'

  /** Label for button showing the free trial days left */
  'user-menu.action.free-trial_one': 'Preostao {{count}} dan probnog roka',
  'user-menu.action.free-trial_other': 'Preostalo {{count}} dana probnog roka',
  /** Label for the button showed after trial ended */
  'user-menu.action.free-trial-finished': 'Nadogradite iz besplatne verzije',
  /** Label for action to invite members to the current sanity project */
  'user-menu.action.invite-members': 'Pozovite članove',
  /** Accessibility label for action to invite members to the current sanity project */
  'user-menu.action.invite-members-aria-label': 'Pozovite članove',
  /** Label for action to manage the current sanity project */
  'user-menu.action.manage-project': 'Upravljajte projektom',
  /** Accessibility label for the action to manage the current project */
  'user-menu.action.manage-project-aria-label': 'Upravljajte projektom',
  /** Tooltip helper text when portable text annotation is disabled for empty block*/
  'user-menu.action.portable-text.annotation-disabled_empty-block':
    'Nije moguće primijeniti {{name}} na prazan blok',
  /** Tooltip helper text when portable text annotation is disabled for multiple blocks */
  'user-menu.action.portable-text.annotation-disabled_multiple-blocks':
    'Nije moguće primijeniti {{name}} na više blokova',
  /** Label for action to sign out of the current sanity project */
  'user-menu.action.sign-out': 'Odjavite se',
  /** Title for appearance section for the current studio (dark / light / system scheme) */
  'user-menu.appearance-title': 'Izgled',
  /** Label for close menu button for user menu */
  'user-menu.close-menu': 'Zatvorite izbornik',
  /** Description for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-description': 'Koristite tamni izgled',
  /** Title for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-title': 'Tamno',
  /** Description for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-description': 'Koristite svijetli izgled',
  /** Title for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-title': 'Svijetlo',
  /** Description for using "system apparence" in the appearance user menu */
  'user-menu.color-scheme.system-description': 'Koristite izgled sustava',
  /** Title for using system apparence in the appearance user menu */
  'user-menu.color-scheme.system-title': 'Sustav',
  /** Title for locale section for the current studio */
  'user-menu.locale-title': 'Jezik',
  /** Label for tooltip to show which provider the currently logged in user is using */
  'user-menu.login-provider': 'Prijavljeni s {{providerTitle}}',
  /** Label for open menu button for user menu */
  'user-menu.open-menu': 'Otvori izbornik',

  /**
   * Label for action to add a workspace (currently a developer-oriented action, as this will
   * lead to the documentation on workspace configuration)
   */
  'workspaces.action.add-workspace': 'Dodajte radni prostor',
  /**
   * Label for action to choose a different workspace, in the case where you are not logged in,
   * have selected a workspace, and are faced with the authentication options for the selected
   * workspace. In other words, label for the action shown when you have reconsidered which
   * workspace to authenticate in.
   */
  'workspaces.action.choose-another-workspace': 'Odaberite drugi radni prostor',
  /** Label for heading that indicates that you can choose your workspace */
  'workspaces.choose-your-workspace-label': 'Odaberite svoj radni prostor',
  /** Label for the workspace menu */
  'workspaces.select-workspace-aria-label': 'Odaberite radni prostor',
  /** Button label for opening the workspace switcher */
  'workspaces.select-workspace-label': 'Odaberite radni prostor',
  /** Tooltip for the workspace menu */
  'workspaces.select-workspace-tooltip': 'Odaberite radni prostor',
  /** Title for Workplaces dropdown menu */
  'workspaces.title': 'Radni prostori',
})
