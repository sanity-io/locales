import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Menu item for deleting the asset */
  'asset-source.asset-list.menu.delete': 'Slet',
  /** Menu item for showing where a particular asset is used */
  'asset-source.asset-list.menu.show-usage': 'Vis brug',
  /** Header in usage dialog for file assets */
  'asset-source.asset-usage-dialog.header_file': 'Dokumenter der bruger fil',
  /** Header in usage dialog for image assets */
  'asset-source.asset-usage-dialog.header_image': 'Dokumenter der bruger billede',
  /** Text shown in usage dialog when loading documents using the selected asset */
  'asset-source.asset-usage-dialog.loading': 'Indlæser…',
  /** Text for cancel action in delete-asset dialog */
  'asset-source.delete-dialog.action.cancel': 'Annuller',
  /** Text for "confirm delete" action in delete-asset dialog */
  'asset-source.delete-dialog.action.delete': 'Slet',
  /** Dialog header for delete-asset dialog when deleting a file */
  'asset-source.delete-dialog.header_file': 'Slet fil',
  /** Dialog header for delete-asset dialog when deleting an image */
  'asset-source.delete-dialog.header_image': 'Slet billede',
  /** Text shown in delete dialog when loading documents using the selected asset */
  'asset-source.delete-dialog.loading': 'Indlæser…',
  /** Message confirming to delete *named* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_named':
    'Du er ved at slette filen <strong>{{filename}}}</strong> og dens metadata. Er du sikker?',
  /** Message confirming to delete *unnamed* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_unnamed':
    'Du er ved at slette filen og dens metadata. Er du sikker?',
  /** Message confirming to delete *named* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_named':
    'Du er ved at slette billedet <strong>{{filename}}</strong> og dens metadata. Er du sikker?',
  /** Message confirming to delete *unnamed* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_unnamed':
    'Du er ved at slette billedet og dens metadata. Er du sikker?',
  /** Alt text showing on image preview in delete asset dialog  */
  'asset-source.delete-dialog.usage-list.image-preview-alt': 'Forhåndsvisning af billede',
  /** Warning message showing when *named* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_named':
    '{{filename}} kan ikke slettes, fordi det er i brug. For at slette denne fil skal du først fjerne alle dens anvendelser.',
  /** Warning message showing when *unnamed* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_unnamed':
    'Denne fil kan ikke slettes, fordi den er i brug. For at slette den skal du først fjerne alle dens anvendelser.',
  /** Warning message showing when *named* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_named':
    '{{filename}} kan ikke slettes, fordi den er i brug. For at slette dette billede skal du først fjerne alle dens anvendelser.',
  /** Warning message showing when *unnamed* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_unnamed':
    'Dette billede kan ikke slettes, fordi det er i brug. For at slette det skal du først fjerne alle dens anvendelser.',
  /** Text shown when the list of assets only include a specific set of types */
  'asset-source.dialog.accept-message':
    'Viser kun aktiver af accepterede typer: <strong>{{acceptTypes}}</strong>',
  /** Keys shared between both image asset source and file asset source */
  /** Select asset dialog title for files */
  'asset-source.dialog.default-title_file': 'Vælg fil',
  /** Select asset dialog title for images */
  'asset-source.dialog.default-title_image': 'Vælg billede',
  /** Select asset dialog load more items */
  'asset-source.dialog.load-more': 'Indlæs flere',
  /** Text shown when selecting a file but there's no files to select from */
  'asset-source.dialog.no-assets_file': 'Ingen filer',
  /** Text shown when selecting an image but there's no images to select from */
  'asset-source.dialog.no-assets_image': 'Ingen billeder',
  'asset-source.file.asset-list.action.delete.disabled-cannot-delete-current-file':
    'Kan ikke slette den aktuelt valgte fil',
  'asset-source.file.asset-list.action.delete.text': 'Slet',
  'asset-source.file.asset-list.action.delete.title': 'Slet fil',
  'asset-source.file.asset-list.action.select-file.title': 'Vælg filen {{filename}}',
  'asset-source.file.asset-list.action.show-usage.title': 'Vis brug',
  'asset-source.file.asset-list.delete-failed': 'Filen kunne ikke slettes',
  'asset-source.file.asset-list.delete-successful': 'Filen blev slettet',
  'asset-source.file.asset-list.header.date-added': 'Dato tilføjet',
  /** File asset source */
  'asset-source.file.asset-list.header.filename': 'Filnavn',
  'asset-source.file.asset-list.header.size': 'Størrelse',
  'asset-source.file.asset-list.header.type': 'Type',
  /** Text displayed on button or menu invoking the file asset source */
  'asset-source.file.title': 'Uploadede filer',
  'asset-source.image.asset-list.delete-failed': 'Billedet kunne ikke slettes',
  /** Image asset source */
  'asset-source.image.asset-list.delete-successful': 'Billedet blev slettet',
  /** Text displayed on button or menu invoking the image asset source */
  'asset-source.image.title': 'Uploadede billeder',
  'asset-source.usage-list.documents-using-file_named_one':
    'Et dokument bruger filen <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-file_named_other':
    '{{count}} dokumenter bruger filen <code>{{filename}}</code>',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *named* file **/
  'asset-source.usage-list.documents-using-file_named_zero':
    'Ingen dokumenter bruger filen <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-file_unnamed_one': 'Et dokument bruger denne fil',
  'asset-source.usage-list.documents-using-file_unnamed_other':
    '{{count}} dokumenter bruger denne fil',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *unnamed* file **/
  'asset-source.usage-list.documents-using-file_unnamed_zero': 'Ingen dokumenter bruger denne fil',
  'asset-source.usage-list.documents-using-image_named_one':
    'Et dokument bruger billedet <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-image_named_other':
    '{{count}} dokumenter bruger billedet <code>{{filename}}</code>',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *named* image **/
  'asset-source.usage-list.documents-using-image_named_zero':
    'Ingen dokumenter bruger billedet <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-image_unnamed_one': 'Et dokument bruger dette billede',
  'asset-source.usage-list.documents-using-image_unnamed_other':
    '{{count}} dokumenter bruger dette billede',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *unnamed* image **/
  'asset-source.usage-list.documents-using-image_unnamed_zero':
    'Ingen dokumenter bruger dette billede',

  /** Action message for navigating to next month */
  'calendar.action.go-to-next-month': 'Gå til næste måned',
  /** Action message for navigating to next year */
  'calendar.action.go-to-next-year': 'Gå til næste år',
  /** Action message for navigating to previous month */
  'calendar.action.go-to-previous-month': 'Gå til forrige måned',
  /** Action message for navigating to previous year */
  'calendar.action.go-to-previous-year': 'Gå til forrige år',
  /* Label for navigating the calendar to "today", without _selecting_ today. Short form, eg `Today`, not `Go to today` */
  'calendar.action.go-to-today': 'I dag',
  /* Accessibility label for navigating the calendar to "today", without _selecting_ today */
  'calendar.action.go-to-today-aria-label': 'Gå til i dag',
  /* Label for navigating the calendar to "tomorrow", without _selecting_ tomorrow. Short form, eg `Tomorrow`, not `Go to tomorrow` */
  'calendar.action.go-to-tomorrow': 'I morgen',
  /* Label for navigating the calendar to "yesterday", without _selecting_ yesterday. Short form, eg `Yesterday`, not `Go to yesterday` */
  'calendar.action.go-to-yesterday': 'I går',
  /** Label for switch that controls whether or not to include time in given timestamp */
  'calendar.action.include-time-label': 'Inkluder tid',
  /** Action message for selecting the hour */
  'calendar.action.select-hour': 'Vælg time',
  /** Action message for selecting the minute */
  'calendar.action.select-minute': 'Vælg minut',
  /** Action message for setting to the current time */
  'calendar.action.set-to-current-time': 'Indstil til nuværende tidspunkt',
  /** Label for selecting an hour preset. Receives a `time` param as a string on hh:mm format and a `date` param as a Date instance denoting the preset date */
  'calendar.action.set-to-time-preset': '{{time}} den {{date, datetime}}',
  /** Error message displayed in calendar when entered date is not the correct format */
  'calendar.error.must-be-in-format': 'Skal være i formatet: {{exampleDate}}',
  /** Month name for April */
  'calendar.month-names.april': 'April',
  /** Month name for August */
  'calendar.month-names.august': 'August',
  /** Month name for December */
  'calendar.month-names.december': 'December',
  /** Month name for February */
  'calendar.month-names.february': 'Februar',
  /** Month name for January */
  'calendar.month-names.january': 'Januar',
  /** Month name for July */
  'calendar.month-names.july': 'Juli',
  /** Month name for June */
  'calendar.month-names.june': 'Juni',
  /** Month name for March */
  'calendar.month-names.march': 'Marts',
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
  'calendar.weekday-names.short.monday': 'Man',
  /** Short weekday name for Saturdayday */
  'calendar.weekday-names.short.saturday': 'Lør',
  /** Short weekday name for Sunday */
  'calendar.weekday-names.short.sunday': 'Søn',
  /** Short weekday name for Thursday */
  'calendar.weekday-names.short.thursday': 'Tor',
  /** Short weekday name for Tuesday */
  'calendar.weekday-names.short.tuesday': 'Tir',
  /** Short weekday name for Wednesday */
  'calendar.weekday-names.short.wednesday': 'Ons',

  /** Label for the close button label in Review Changes pane */
  'changes.action.close-label': 'Luk gennemgang af ændringer',
  /** Cancel label for revert button prompt action */
  'changes.action.revert-all-cancel': 'Annuller',
  /** Revert all confirm label for revert button action - used on prompt button + review changes pane */
  'changes.action.revert-all-confirm': 'Fortryd alle',
  /** Prompt for confirming revert change (singular) label for field change action */
  'changes.action.revert-changes-confirm-change_one': 'Fortryd ændring',
  /** Revert for confirming revert (plural) label for field change action */
  'changes.action.revert-changes-confirm-change_other': 'Fortryd ændringer',
  /** Prompt for reverting changes for a field change */
  'changes.action.revert-changes-description': 'Er du sikker på, at du vil fortryde ændringerne?',
  /** Prompt for reverting changes for a group change, eg multiple changes */
  'changes.action.revert-changes-description_one': 'Er du sikker på, at du vil fortryde ændringen?',
  /** Label for when the action of the change was to set something that was previously empty, eg a field was given a value, an array item was added, an asset was selected or similar */
  'changes.added-label': 'Tilføjet',
  /** Array diff: An item was added in a given position (`{{position}}`) */
  'changes.array.item-added-in-position': 'Tilføjet i position {{position}}',
  'changes.array.item-moved_down_one': 'Flyttet {{count}} position ned',
  'changes.array.item-moved_down_other': 'Flyttet {{count}} positioner ned',
  /**
   * Array diff: An item was moved within the array.
   * Receives `{{count}}` representing number of positions it moved.
   * Context is the direction of the move, either `up` or `down`.
   */
  'changes.array.item-moved_up_one': 'Flyttet {{count}} position op',
  'changes.array.item-moved_up_other': 'Flyttet {{count}} positioner op',
  /** Array diff: An item was removed from a given position (`{{position}}`) */
  'changes.array.item-removed-from-position': 'Fjernet fra position {{position}}',
  /** Accessibility label for the "change bar" shown when there are edits on a field-level */
  'changes.change-bar.aria-label': 'Gennemgå ændringer',
  /** Label for when the action of the change was _not_ an add/remove, eg a text field changed value, an image was changed from one asset to another or similar */
  'changes.changed-label': 'Ændret',
  /** Label and text for tooltip that indicates the authors of the changes */
  'changes.changes-by-author': 'Ændringer af',
  /** Additional text shown in development mode when a diff component crashes during rendering */
  'changes.error-boundary.developer-info': 'Tjek udviklerkonsollen for mere information',
  /** Text shown when a diff component crashes during rendering, triggering the error boundary */
  'changes.error-boundary.title': 'Gengivelse af ændringerne til dette felt forårsagede en fejl',
  /** Error message shown when the value of a field is not the expected one */
  'changes.error.incorrect-type-message':
    'Værdifejl: Værdien er af typen "<code>{{actualType}}</code>", forventet "<code>{{expectedType}}</code>"',
  /** File diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.file.meta-info-fallback-title': 'Uden titel',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.crop-changed': 'Beskæring ændret',
  /** Image diff: Text shown if the previous image asset was deleted (shouldn't theoretically happen) */
  'changes.image.deleted': 'Billede slettet',
  /** Image diff: Text shown if the image failed to be loaded when previewing it */
  'changes.image.error-loading-image': 'Fejl ved indlæsning af billede',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.hotspot-changed': 'Hotspot ændret',
  /** Image diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.image.meta-info-fallback-title': 'Uden titel',
  /** Image diff: Text shown if no asset has been set for the field (but has metadata changes) */
  'changes.image.no-asset-set': 'Billede ikke indstillet',
  /** Image diff: Text shown when the from/to state has/had no image */
  'changes.image.no-image-placeholder': '(intet billede)',
  /** Label for the "from" value in the change inspector */
  'changes.inspector.from-label': 'Fra',
  /** Label for the "meta" (field path, action etc) information in the change inspector */
  'changes.inspector.meta-label': 'Meta',
  /** Label for the "to" value in the change inspector */
  'changes.inspector.to-label': 'Til',
  /** Loading author of change in the differences tooltip in the review changes pane */
  'changes.loading-author': 'Indlæser…',
  /** Loading changes in Review Changes Pane */
  'changes.loading-changes': 'Indlæser ændringer…',
  /** No Changes description in the Review Changes pane */
  'changes.no-changes-description':
    'Rediger dokumentet eller vælg en ældre version i tidslinjen for at se en liste over ændringer vises i dette panel.',
  /** No Changes title in the Review Changes pane */
  'changes.no-changes-title': 'Der er ingen ændringer',
  /** Portable Text diff: An annotation was added */
  'changes.portable-text.annotation_added': 'Tilføjet annotation',
  /** Portable Text diff: An annotation was changed */
  'changes.portable-text.annotation_changed': 'Ændret annotation',
  /** Portable Text diff: An annotation was removed */
  'changes.portable-text.annotation_removed': 'Fjernet annotation',
  /** Portable Text diff: An annotation was left unchanged */
  'changes.portable-text.annotation_unchanged': 'Uændret annotation',
  /** Portable Text diff: A block changed from one style to another (eg `normal` to `h1` or similar) */
  'changes.portable-text.block-style-changed':
    'Ændret blokstil fra "{{fromStyle}}" til "{{toStyle}}"',
  /** Portable Text diff: Change formatting of text (setting/unsetting marks, eg bold/italic etc) */
  'changes.portable-text.changed-formatting': 'Ændret formatering',
  /** Portable Text diff: An empty inline object is part of a change */
  'changes.portable-text.empty-inline-object': 'Tom {{inlineObjectType}}',
  /** Portable Text diff: An empty object is the result of adding/removing an annotation */
  'changes.portable-text.empty-object-annotation': 'Tom {{annotationType}}',
  /** Portable Text diff: Added a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_added': 'Tilføjet tom tekst',
  /** Portable Text diff: Changed a block that contained no text (eg empty block) */
  'changes.portable-text.empty-text_changed': 'Ændret tom tekst',
  /** Portable Text diff: Removed a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_removed': 'Fjernet tom tekst',
  /** Portable Text diff: An inline object was added */
  'changes.portable-text.inline-object_added': 'Tilføjet inline objekt',
  /** Portable Text diff: An inline object was changed */
  'changes.portable-text.inline-object_changed': 'Ændret inline objekt',
  /** Portable Text diff: An inline object was removed */
  'changes.portable-text.inline-object_removed': 'Fjernet inline objekt',
  /** Portable Text diff: An inline object was left unchanged */
  'changes.portable-text.inline-object_unchanged': 'Uændret inline objekt',
  /** Portable Text diff: Added a chunk of text */
  'changes.portable-text.text_added': 'Tilføjet tekst',
  /** Portable Text diff: Removed a chunk of text */
  'changes.portable-text.text_removed': 'Fjernet tekst',
  /** Portable Text diff: Annotation has an unknown schema type */
  'changes.portable-text.unknown-annotation-schema-type': 'Ukendt skematype',
  /** Portable Text diff: Inline object has an unknown schema type */
  'changes.portable-text.unknown-inline-object-schema-type': 'Ukendt skematype',
  /** Label for when the action of the change was a removal, eg a field was cleared, an array item was removed, an asset was deselected or similar */
  'changes.removed-label': 'Fjernet',
  /** Title for the Review Changes pane */
  'changes.title': 'Gennemgå ændringer',

  /** --- Common components --- */
  /** Tooltip text for context menu buttons */
  'common.context-menu-button.tooltip': 'Vis mere',
  /** Default text for dialog cancel button */
  'common.dialog.cancel-button.text': 'Annuller',
  /** Default text for dialog confirm button */
  'common.dialog.confirm-button.text': 'Bekræft',
  /** Default text in shared loader text / spinner lockup */
  'common.loading': 'Indlæser',

  /** --- Configuration issues --- */
  /** Default label text on configuration issues button */
  'configuration-issues.button.label': 'Konfigurationsproblemer',
  /** Tooltip displayed on configuration issues button */
  'configuration-issues.button.tooltip': 'Fundet konfigurationsproblemer',

  /** The fallback title for an ordering menu item if no localized titles are provided. */
  'default-menu-item.fallback-title': 'Sorter efter {{title}}',

  /** Title for the default ordering/SortOrder if no orderings are provided and the caption field is found */
  'default-orderings.caption': 'Sorter efter Billedtekst',
  /** Title for the default ordering/SortOrder if no orderings are provided and the description field is found */
  'default-orderings.description': 'Sorter efter Beskrivelse',
  /** Title for the default ordering/SortOrder if no orderings are provided and the header field is found */
  'default-orderings.header': 'Sorter efter Overskrift',
  /** Title for the default ordering/SortOrder if no orderings are provided and the heading field is found */
  'default-orderings.heading': 'Sortér efter overskrift',
  /** Title for the default ordering/SortOrder if no orderings are provided and the label field is found */
  'default-orderings.label': 'Sortér efter etiket',
  /** Title for the default ordering/SortOrder if no orderings are provided and the name field is found */
  'default-orderings.name': 'Sortér efter navn',
  /** Title for the default ordering/SortOrder if no orderings are provided and the title field is found */
  'default-orderings.title': 'Sortér efter titel',

  /** Label to show in the document footer indicating the last edited date of the document */
  'document-status.edited': 'Redigeret {{date}}',
  /** Label to show in the document footer indicating the document is not published*/
  'document-status.not-published': 'Ikke offentliggjort',
  /** Label to show in the document footer indicating the published date of the document */
  'document-status.published': 'Offentliggjort {{date}}',

  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.duplicate-keys-alert.details.additional-description':
    'Værdien af <code>_key</code>-egenskaben skal være en unik streng.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property of each elements has been generated non-uniquely. */
  'form.error.duplicate-keys-alert.details.description':
    'Dette sker normalt, når elementer oprettes ved hjælp af en API-klient, og <code>_key</code>-egenskaben for hvert element er blevet genereret ikke-unikt.',
  /** Developer info */
  'form.error.duplicate-keys-alert.details.title': 'Udviklerinfo',
  /** Generate unique keys */
  'form.error.duplicate-keys-alert.generate-button.text': 'Generer unikke nøgler',
  /** Several items in this list share the same identifier (key). Every item must have an unique identifier. */
  'form.error.duplicate-keys-alert.summary':
    'Flere elementer på denne liste deler den samme identifikator (nøgle). Hvert element skal have en unik identifikator.',
  /** Non-unique keys */
  'form.error.duplicate-keys-alert.title': 'Ikke-unikke nøgler',
  /** Error text shown when a field with a given name cannot be found in the schema or is conditionally hidden but explicitly told to render  */
  'form.error.field-not-found':
    'Feltet "{{fieldName}}" blev ikke fundet blandt medlemmerne – verificer at det er defineret i skemaet og at det ikke er blevet betingelsesmæssigt skjult.',
  /** Add missing keys */
  'form.error.missing-keys-alert.add-button.text': 'Tilføj manglende nøgler',
  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.missing-keys-alert.details.additional-description':
    'Værdien af <code>_key</code>-egenskaben skal være en unik streng.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property has not been included. */
  'form.error.missing-keys-alert.details.description':
    'Dette sker normalt, når elementer oprettes ved hjælp af en API-klient, og <code>_key</code>-egenskaben ikke er blevet inkluderet.',
  /** Developer info */
  'form.error.missing-keys-alert.details.title': 'Udviklerinfo',
  /** Some items in the list are missing their keys. This must be fixed in order to edit the list. */
  'form.error.missing-keys-alert.summary':
    'Nogle elementer på listen mangler deres nøgler. Dette skal rettes for at kunne redigere listen.',
  /** Missing keys */
  'form.error.missing-keys-alert.title': 'Manglende nøgler',
  /** This usually happens when items are created using an API client, or when a custom input component has added invalid data to the list. */
  'form.error.mixed-array-alert.details.description':
    'Dette sker normalt, når elementer oprettes ved hjælp af en API-klient, eller når en brugerdefineret inputkomponent har tilføjet ugyldige data til listen.',
  /** Developer info */
  'form.error.mixed-array-alert.details.title': 'Udviklerinfo',
  /**  Remove non-object values */
  'form.error.mixed-array-alert.remove-button.text': 'Fjern ikke-objektværdier',
  /** Some items in this list are not objects. This must be fixed in order to edit the list. */
  'form.error.mixed-array-alert.summary':
    'Nogle elementer på denne liste er ikke objekter. Dette skal rettes for at kunne redigere listen.',
  /** Invalid list values */
  'form.error.mixed-array-alert.title': 'Ugyldige liste værdier',
  /** Error text shown when form is unable to find an array item at a given indexed path */
  'form.error.no-array-item-at-index':
    'Intet array-element ved indeks <code>{{index}}</code> fundet på sti <code>{{path}}</code>',
  /** Error text shown when form is unable to find an array item at a given keyed path */
  'form.error.no-array-item-at-key':
    'Intet array-element med `_key` <code>"{{key}}"</code> fundet på sti <code>{{path}}</code>',
  /** The title above the error call stack output related to the crash */
  'form.error.unhandled-runtime-error.call-stack.title': 'Kaldstak:',
  /** The title above the error component stack provided by React's underlying ErrorBoundary component */
  'form.error.unhandled-runtime-error.component-stack.title': 'Komponentstak:',
  /** The error message for the unhandled error that crashed the Input component during render */
  'form.error.unhandled-runtime-error.error-message': 'Fejl: {{message}}',
  /** The title for the error card rendered inside a field in place of a crashing input */
  'form.error.unhandled-runtime-error.title': 'Uhåndteret kørselsfejl',
  /** Form field deprecated label */
  'form.field.deprecated-label': 'forældet',
  /** Fallback title shown above field if it has no defined title */
  'form.field.untitled-field-label': 'Uden titel',
  /** Accessibility label for the icon that indicates the field has a validation error */
  'form.validation.has-error-aria-label': 'Har fejl',
  /** Accessibility label for the icon that indicates the field has validation information */
  'form.validation.has-info-aria-label': 'Har information',
  /** Accessibility label for the icon that indicates the field has a validation warning */
  'form.validation.has-warning-aria-label': 'Har advarsel',
  /** Text shown when summarizing validation information, when the field has one or more errors */
  'form.validation.summary.errors-count_one': '{{count}} fejl',
  'form.validation.summary.errors-count_other': '{{count}} fejl',
  /** Text shown when summarizing validation information, when the field has one or more warnings */
  'form.validation.summary.warnings-count_one': '{{count}} advarsel',
  'form.validation.summary.warnings-count_other': '{{count}} advarsler',

  /** Tooltip for free trial navbar button indicating remaining days */
  'free-trial.tooltip.days-count_one': '{{count}} dag tilbage i prøveperioden',
  'free-trial.tooltip.days-count_other': '{{count}} dage tilbage i prøveperioden',
  /** Tooltip for free trial navbar button, once trial has ended */
  'free-trial.tooltip.trial-finished': 'Opgrader dit projekt',

  /**
   * Label for "contact sales" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.contact-sales': 'Kontakt salg',
  /**
   * Label for "help and support" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.help-and-support': 'Hjælp og support',
  /**
   * Label for "join our community" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.join-our-community': 'Deltag i vores fællesskab',
  /** Information for what the latest sanity version is */
  'help-resources.latest-sanity-version': 'Seneste version er {{latestVersion}}',
  /** Information for what studio version the current studio is running */
  'help-resources.studio-version': 'Sanity Studio version {{studioVersion}}',
  /** Title for help and resources menus */
  'help-resources.title': 'Hjælp og ressourcer',

  /** Text for button to cancel an ongoing upload */
  'input.files.common.cancel-upload': 'Annuller upload',
  /** Text for file input button in upload placeholder */
  'input.files.common.upload-placeholder.file-input-button.text': 'Upload',
  /** Uploading <FileName/> */
  'input.files.common.upload-progress': 'Uploader <FileName/>',
  /** The referenced document cannot be opened, because the URL failed to be resolved */
  'input.reference.document-cannot-be-opened.failed-to-resolve-url':
    'Dette dokument kan ikke åbnes (kan ikke opløse URL til Studio)',

  /** Label for adding item after a specific array item */
  'inputs.array.action.add-after': 'Tilføj element efter',
  /** Label for adding item before a specific array item */
  'inputs.array.action.add-before': 'Tilføj element før',
  /** Label for adding array item action when the schema allows for only one schema type */
  'inputs.array.action.add-item': 'Tilføj element',
  /**
   * Label for adding one array item action when the schema allows for multiple schema types,
   * eg. will prompt the user to select a type once triggered
   */
  'inputs.array.action.add-item-select-type': 'Tilføj element...',
  /** Array drag handle button tooltip */
  'inputs.array.action.drag.tooltip': 'Træk for at omarrangere',
  /** Label for duplicating an array item  */
  'inputs.array.action.duplicate': 'Dupliker',
  /** Label for editing the item of a specific type, eg "Edit Person" */
  'inputs.array.action.edit': 'Rediger {{itemTypeTitle}}',
  /** Label for removing an array item action  */
  'inputs.array.action.remove': 'Fjern',
  /** Label for removing action when an array item has an error  */
  'inputs.array.action.remove-invalid-item': 'Fjern',
  /** Label for viewing the item of a specific type, eg "View Person" */
  'inputs.array.action.view': 'Vis {{itemTypeTitle}}',
  /** Error description for the array item tooltip that explains that the current item can still be moved or deleted but not edited since the schema definition is not found */
  'inputs.array.error.can-delete-but-no-edit-description':
    'Du kan stadig flytte eller slette dette element, men det kan ikke redigeres, da skemadefinitionen for dets type ikke kan findes.',
  /** Error label for toast when array could not resolve the initial value */
  'inputs.array.error.cannot-resolve-initial-value-title':
    'Kan ikke fastslå den indledende værdi for typen: {{schemaTypeTitle}}: {{errorMessage}}.',
  /** Error label for toast when trying to upload one array item of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_one':
    'Følgende element kan ikke uploades, fordi der ikke er nogen kendt konvertering fra indholdstype til array-element:',
  /** Error label for toast when trying to upload multiple array items of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_other':
    'Følgende elementer kan ikke uploades, fordi der ikke er nogen kendt konvertering fra indholdstyper til array-element:',
  /** Error description for the array item tooltip that explains that the current type item is not valid for the list  */
  'inputs.array.error.current-schema-not-declare-description':
    'Det nuværende skema erklærer ikke elementer af typen <code>{{typeName}}</code> som gyldige for denne liste. Dette kan betyde, at typen er fjernet som en gyldig elementtype, eller at nogen andre har tilføjet den til deres egen lokale skema, som endnu ikke er udrullet.',
  /** Error description to show how the item is being represented in the json format */
  'inputs.array.error.json-representation-description': 'JSON-repræsentation af dette element:',
  /** Error description for the array item tooltip that explains what the error means with more context */
  'inputs.array.error.type-is-incompatible-prompt':
    'Element af typen <code>{{typeName}}</code> er ikke gyldigt for denne liste',
  /** Error title for when an item type within an array input is incompatible, used in the tooltip */
  'inputs.array.error.type-is-incompatible-title': 'Hvorfor sker dette?',
  /** Error label for unexpected errors in the Array Input */
  'inputs.array.error.unexpected-error': 'Uventet fejl: {{error}}',
  /** Label for the array insert menu all items filter  */
  'inputs.array.insert-menu.filter.all-items': 'Alle',
  /** Label for when the array insert menu search shows no items */
  'inputs.array.insert-menu.search.no-results': 'Ingen elementer fundet',
  /** Placeholder for the array insert menu search field */
  'inputs.array.insert-menu.search.placeholder': 'Søg',
  /** Tooltip for the array insert menu grid view toggle */
  'inputs.array.insert-menu.toggle-grid-view.tooltip': 'Skift til gittervisning',
  /** Tooltip for the array insert menu list view toggle */
  'inputs.array.insert-menu.toggle-list-view.tooltip': 'Skift til listevisning',
  /** Label for when the array input doesn't have any items */
  'inputs.array.no-items-label': 'Ingen elementer',
  /** Label for read only array fields */
  'inputs.array.read-only-label': 'Dette felt er skrivebeskyttet',
  /** Label for when the array input is resolving the initial value for the item */
  'inputs.array.resolving-initial-value': 'Fastslår indledende værdi…',
  /** Tooltip content when boolean input is disabled */
  'inputs.boolean.disabled': 'Deaktiveret',
  /** Placeholder value for datetime input */
  'inputs.datetime.placeholder': 'f.eks. {{example}}',
  /** Acessibility label for button to open file options menu */
  'inputs.file.actions-menu.file-options.aria-label': 'Åbn filindstillingsmenuen',
  /** Browse */
  'inputs.file.browse-button.text': 'Gennemse',
  /** Select file */
  'inputs.file.dialog.title': 'Vælg fil',
  /** Unknown member kind: `{{kind}}` */
  'inputs.file.error.unknown-member-kind': 'Ukendt medlemstype: {{kind}}',
  /** The value of this field is not a valid file. Resetting this field will let you choose a new file. */
  'inputs.file.invalid-file-warning.description':
    'Værdien af dette felt er ikke en gyldig fil. Nulstilling af dette felt vil lade dig vælge en ny fil.',
  /** Reset value */
  'inputs.file.invalid-file-warning.reset-button.text': 'Nulstil værdi',
  /** Invalid file value */
  'inputs.file.invalid-file-warning.title': 'Ugyldig filværdi',
  /** Select */
  'inputs.file.multi-browse-button.text': 'Vælg',
  /** The upload could not be completed at this time. */
  'inputs.file.upload-failed.description': 'Upload kunne ikke fuldføres på dette tidspunkt.',
  /** Upload failed */
  'inputs.file.upload-failed.title': 'Upload mislykkedes',
  /** Clear field */
  'inputs.files.common.actions-menu.clear-field.label': 'Ryd felt',
  /** Copy URL */
  'inputs.files.common.actions-menu.copy-url.label': 'Kopier URL',
  /** Download */
  'inputs.files.common.actions-menu.download.label': 'Download',
  /** The URL is copied to the clipboard */
  'inputs.files.common.actions-menu.notification.url-copied':
    "URL'en er kopieret til udklipsholderen",
  /** Replace */
  'inputs.files.common.actions-menu.replace.label': 'Erstat',
  /** Upload */
  'inputs.files.common.actions-menu.upload.label': 'Upload',
  /** Drop to upload */
  'inputs.files.common.drop-message.drop-to-upload': 'Slip for at uploade',
  /** Drop to upload `{{count}}` file */
  'inputs.files.common.drop-message.drop-to-upload-multi_one': 'Slip for at uploade {{count}} fil',
  /** Drop to upload `{{count}}` files */
  'inputs.files.common.drop-message.drop-to-upload-multi_other':
    'Slip for at uploade {{count}} filer',
  /** Can't upload this file here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_one':
    'Kan ikke uploade denne fil her',
  /** Can't upload any of these files here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_other':
    'Kan ikke uploade nogen af disse filer her',
  /** `{{count}}` file can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_one':
    '{{count}} fil kan ikke uploades her',
  /** `{{count}}` files can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_other':
    '{{count}} filer kan ikke uploades her',
  /** Cannot upload `{{count}}` files */
  'inputs.files.common.placeholder.cannot-upload-some-files_one': 'Kan ikke uploade fil',
  'inputs.files.common.placeholder.cannot-upload-some-files_other':
    'Kan ikke uploade {{count}} filer',
  /** Drag or paste type here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_file': 'Træk eller indsæt fil her',
  /** Drag or paste image here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_image': 'Træk eller indsæt billede her',
  /** Drop to upload file */
  'inputs.files.common.placeholder.drop-to-upload_file': 'Slip for at uploade fil',
  /** Drop to upload image */
  'inputs.files.common.placeholder.drop-to-upload_image': 'Slip for at uploade billede',
  /** Read only */
  'inputs.files.common.placeholder.read-only': 'Skrivebeskyttet',
  /** Can't upload files here */
  'inputs.files.common.placeholder.upload-not-supported': 'Det er ikke muligt at uploade filer her',
  /** Clear upload */
  'inputs.files.common.stale-upload-warning.clear': 'Annuller upload',
  /** An upload has made no progress for at least `{{staleThresholdMinutes}}` minutes and likely got interrupted. You can safely clear the incomplete upload and try uploading again. */
  'inputs.files.common.stale-upload-warning.description':
    'En upload har ikke gjort fremskridt i mindst {{staleThresholdMinutes}} minutter og er sandsynligvis blevet afbrudt. Du kan sikkert annullere den ufuldstændige upload og prøve at uploade igen.',
  /** Incomplete upload */
  'inputs.files.common.stale-upload-warning.title': 'Ufuldstændig upload',
  /** Tooltip text for action to crop image */
  'inputs.image.actions-menu.crop-image-tooltip': 'Beskær billede',
  /** Accessibility label for button to open image edit dialog */
  'inputs.image.actions-menu.edit-details.aria-label': 'Åbn dialogboks for redigering af billede',
  /** Accessibility label for button to open image options menu */
  'inputs.image.actions-menu.options.aria-label': 'Åbn menu for billedindstillinger',
  /** Select */
  'inputs.image.browse-menu.text': 'Vælg',
  /** Cannot upload this file here */
  'inputs.image.drag-overlay.cannot-upload-here': 'Kan ikke uploade denne fil her',
  /** Drop image to upload */
  'inputs.image.drag-overlay.drop-to-upload-image': 'Slip billede for at uploade',
  /** This field is read only */
  'inputs.image.drag-overlay.this-field-is-read-only': 'Dette felt er skrivebeskyttet',
  /** Unknown member kind: `{{kind}}` */
  'inputs.image.error.unknown-member-kind': 'Ukendt medlemstype: {{kind}}',
  /** Edit hotspot and crop */
  'inputs.image.hotspot-dialog.title': 'Rediger hotspot og beskæring',
  /** The value of this field is not a valid image. Resetting this field will let you choose a new image. */
  'inputs.image.invalid-image-warning.description':
    'Værdien af dette felt er ikke et gyldigt billede. Nulstilling af dette felt vil lade dig vælge et nyt billede.',
  /** Reset value */
  'inputs.image.invalid-image-warning.reset-button.text': 'Nulstil værdi',
  /** Invalid image value */
  'inputs.image.invalid-image-warning.title': 'Ugyldig billedværdi',
  /** Preview of uploaded image */
  'inputs.image.preview-uploaded-image': 'Forhåndsvisning af uploadet billede',
  /** The upload could not be completed at this time. */
  'inputs.image.upload-error.description': 'Uploadet kunne ikke fuldføres på dette tidspunkt.',
  /** Upload failed */
  'inputs.image.upload-error.title': 'Upload mislykkedes',
  /** Adjust the rectangle to crop image. Adjust the circle to specify the area that should always be visible. */
  'inputs.imagetool.description':
    'Justér rektanglet for at beskære billedet. Justér cirklen for at angive det område, der altid skal være synligt.',
  /** Error: `{{errorMessage}}` */
  'inputs.imagetool.load-error': 'Fejl: {{errorMessage}}',
  /** Hotspot & Crop */
  'inputs.imagetool.title': 'Hotspot & Beskæring',
  /** Convert to `{{targetType}}` */
  'inputs.invalid-value.convert-button.text': 'Konverter til {{targetType}}',
  /** The current value (<code>`{{actualType}}`</code>) */
  'inputs.invalid-value.current-type': 'Den nuværende værdi (<code>{{actualType}}</code>)',
  /** The property value is stored as a value type that does not match the expected type. */
  'inputs.invalid-value.description':
    'Egenskabens værdi er gemt som en værditype, der ikke matcher den forventede type.',
  /** The value of this property must be of type <code>`{{validType}}`</code> according to the schema. */
  'inputs.invalid-value.details.description':
    'Værdien af denne egenskab skal være af typen <code>{{validType}}</code> ifølge skemaet.',
  /** Only the following types are valid here according to schema: */
  'inputs.invalid-value.details.multi-type-description':
    'Kun følgende typer er gyldige her ifølge skemaet:',
  /** Mismatching value types typically occur when the schema has recently been changed. */
  'inputs.invalid-value.details.possible-reason':
    'Uoverensstemmende værdityper opstår typisk, når skemaet for nylig er blevet ændret.',
  /** Developer info */
  'inputs.invalid-value.details.title': 'Udviklerinfo',
  /** -- Invalid Value Input -- */
  /** Reset value */
  'inputs.invalid-value.reset-button.text': 'Nulstil værdi',
  /** Invalid property value */
  'inputs.invalid-value.title': 'Ugyldig egenskabsværdi',
  /** Title for the "All fields" field group */
  'inputs.object.field-group-tabs.all-fields-title': 'Alle felter',
  /** Aria label for the "Field groups" select control on smaller screens */
  'inputs.object.field-group-tabs.aria-label': 'Feltgrupper',
  /** Read-only field description */
  'inputs.object.unknown-fields.read-only.description':
    'Dette felt er <strong>skrivebeskyttet</strong> ifølge dokumentets skema og kan ikke fjernes. Hvis du vil kunne fjerne dette i Studio, skal du sørge for at fjerne <code>readOnly</code> feltet fra den omsluttende type i skemaet.',
  /** Remove field */
  'inputs.object.unknown-fields.remove-field-button.text': 'Fjern felt',
  /** Encountered `{{count}}` fields that are not defined in the schema. */
  'inputs.object.unknown-fields.warning.description_one':
    'Stødte på et felt, der ikke er defineret i skemaet.',
  'inputs.object.unknown-fields.warning.description_other':
    'Stødte på {{count}} felter, der ikke er defineret i skemaet.',
  /** Detailed description of unknown field warning */
  'inputs.object.unknown-fields.warning.details.description_one':
    'Dette felt er ikke defineret i skemaet, hvilket kan betyde, at feltdefinitionen er blevet fjernet, eller at nogen andre har tilføjet det til deres eget lokale projekt og endnu ikke har udrullet deres ændringer.',
  'inputs.object.unknown-fields.warning.details.description_other':
    'Disse felter er ikke defineret i dokumentets skema, hvilket kan betyde, at feltdefinitionerne er blevet fjernet, eller at nogen andre har tilføjet dem til deres eget lokale projekt og endnu ikke har udrullet deres ændringer.',
  /** Developer info */
  'inputs.object.unknown-fields.warning.details.title': 'Udviklerinfo',
  /** Unknown field found */
  'inputs.object.unknown-fields.warning.title_one': 'Ukendt felt fundet',
  'inputs.object.unknown-fields.warning.title_other': 'Ukendte felter fundet',
  /** Collapse the editor to save screen space  */
  'inputs.portable-text.action.collapse-editor': 'Kollaps redigeringsværktøjet',
  /** Aria label for action to edit an existing annotation */
  'inputs.portable-text.action.edit-annotation-aria-label': 'Rediger annotation',
  /** Expand the editor to give more editing space */
  'inputs.portable-text.action.expand-editor': 'Udvid redigeringsværktøjet',
  /** Label label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block': 'Indsæt {{typeName}}',
  /** Accessibility label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block-aria-label': 'Indsæt {{typeName}} (blok)',
  /** Label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object': 'Indsæt {{typeName}}',
  /** Accessibility label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object-aria-label': 'Indsæt {{typeName}} (inline)',
  /** Aria label for action to remove an annotation */
  'inputs.portable-text.action.remove-annotation-aria-label': 'Fjern annotation',
  /** Label for activate on focus with context of click and not focused */
  'inputs.portable-text.activate-on-focus-message_click': 'Klik for at aktivere',
  /** Label for activate on focus with context of click and focused */
  'inputs.portable-text.activate-on-focus-message_click-focused':
    'Klik eller tryk på mellemrum for at aktivere',
  /** Label for activate on focus with context of tap and not focused */
  'inputs.portable-text.activate-on-focus-message_tap': 'Tryk for at aktivere',
  /** Aria label for the annotation object */
  'inputs.portable-text.annotation-aria-label': 'Annotationsobjekt',
  /** Title for dialog that allows editing an annotation */
  'inputs.portable-text.annotation-editor.title': 'Rediger {{schemaType}}',
  /** Title of the default "link" annotation */
  'inputs.portable-text.annotation.link': 'Link',
  /** Aria label for the block object */
  'inputs.portable-text.block.aria-label': 'Blokobjekt',
  /** Label for action to edit a block item, in the case where it is editable */
  'inputs.portable-text.block.edit': 'Rediger',
  /** Accessibility label for the button that opens the actions menu on blocks */
  'inputs.portable-text.block.open-menu-aria-label': 'Åbn menu',
  /** Label for action to open a reference, in the case of block-level reference types */
  'inputs.portable-text.block.open-reference': 'Åbn reference',
  /** Label for action to remove a block item */
  'inputs.portable-text.block.remove': 'Fjern',
  /** Label for action to view a block item, in the case where it is read-only and thus cannot be edited */
  'inputs.portable-text.block.view': 'Vis',
  /** Title of the "code" decorator */
  'inputs.portable-text.decorator.code': 'Kode',
  /** Title of the "em" (emphasis) decorator */
  'inputs.portable-text.decorator.emphasis': 'Kursiv',
  /** Title of the "strike-through" decorator */
  'inputs.portable-text.decorator.strike-through': 'Gennemstreg',
  /** Title of the "strong" decorator */
  'inputs.portable-text.decorator.strong': 'Fed',
  /** Title of the "underline" decorator */
  'inputs.portable-text.decorator.underline': 'Understreg',
  /** Placeholder text for when the editor is empty */
  'inputs.portable-text.empty-placeholder': 'Tom',
  /** Aria label for the block object */
  'inputs.portable-text.inline-block.aria-label': 'Inline objekt',
  /** Label for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit': 'Rediger objekt',
  /** Aria label for icon for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit-aria-label': 'Rediger objekt',
  /** Label for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove': 'Fjern objekt',
  /** Aria label for icon for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove-aria-label': 'Fjern objekt',
  /** Disclaimer text shown on invalid Portable Text value, when an action is available to unblock the user, but it is not guaranteed to be safe */
  'inputs.portable-text.invalid-value.action-disclaimer':
    'BEMÆRK: Det er generelt sikkert at udføre handlingen ovenfor, men hvis du er i tvivl, så kontakt dem, der er ansvarlige for at konfigurere dit studio.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.action': 'Fjern objektet',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.description':
    'Barn med nøgle {{childKey}} af blok med nøgle <code>{{key}}</code> er af typen <code>{{childType}}</code>, hvilket ikke er tilladt af skemaet.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.action': 'Fjern blokken',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.description':
    'Blok med nøgle <code>{{key}}</code> er af typen <code>{{typeName}}</code>, hvilket ikke er tilladt af skemaet.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.action': 'Indsæt tomt tekstspan',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.description':
    'Tekstblok med nøgle <code>{{key}}</code> har ingen tekstspan.',
  /** Label for the button to ignore invalid values in the Portable Text editor */
  'inputs.portable-text.invalid-value.ignore-button.text': 'Ignorer',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.action':
    'Brug typen <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.description':
    'Blok med nøgle <code>{{key}}</code> har et ugyldigt typenavn. Ifølge skemaet bør det være <code>{{expectedTypeName}}</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.action': 'Sæt tom tekstværdi',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.description':
    'Span med nøgle {{childKey}} af blok med nøgle <code>{{key}}</code> har en manglende eller ugyldig <code>text</code> egenskab.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.action':
    'Brug typen <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.description':
    'Blok med nøgle <code>{{key}}</code> mangler et typenavn. Ifølge skemaet bør det være <code>{{expectedTypeName}}</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.action': 'Tildel tilfældig nøgle',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.description':
    'Barn på indeks <code>{{index}}</code> af blok med nøgle <code>{{key}}</code> mangler <code>_key</code> egenskab.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.action': 'Fjern objektet',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.description':
    'Barn med nøgle {{childKey}} af blok med nøgle <code>{{key}}</code> mangler <code>_type</code> egenskab.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.action': 'Tildel tilfældig nøgle',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.description':
    'Blok på indeks <code>{{index}}</code> mangler den påkrævede <code>_key</code> egenskab.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.action': 'Fjern blokken',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.description':
    'Tekstblok med nøgle <code>{{key}}</code> har en ugyldig eller manglende `children` egenskab.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.action': 'Tilføj egenskab',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.description':
    'Tekstblok med nøgle <code>{{key}}</code> har en ugyldig eller manglende `markDefs` egenskab.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.action': 'Fjern blokken',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.description':
    'Blok med nøgle <code>{{key}}</code> mangler et typenavn.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.action': 'Fjern elementet',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.description':
    'Barn på indeks <code>{{index}}</code> af blok med nøgle <code>{{key}}</code> er ikke et objekt.',
  /** Action presented when the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.action': 'Nulstil værdien',
  /** Text explaining that the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.description':
    'Værdien skal være et array af Portable Text blokke, eller undefined.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.action': 'Fjern element',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.description':
    'Element på <code>{{index}}</code> er ikke et objekt,.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.action': 'Fjern ikke tilladte markeringer',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.description':
    'Tekstblok med nøgle <code>{{key}}</code> indeholder markeringer <code>({{orphanedMarks, list}})</code> der ikke er tilladt af skemaet.',
  /** Title for the alert indicating that the Portable Text field has an invalid value */
  'inputs.portable-text.invalid-value.title': 'Ugyldig Portable Text værdi',
  /** Title of "bulleted" list type */
  'inputs.portable-text.list-type.bullet': 'Punktopstilling',
  /** Title of numbered list type */
  'inputs.portable-text.list-type.number': 'Nummereret liste',
  /** Title of the "h1" block style */
  'inputs.portable-text.style.h1': 'Overskrift 1',
  /** Title of the "h2" block style */
  'inputs.portable-text.style.h2': 'Overskrift 2',
  /** Title of the "h3" block style */
  'inputs.portable-text.style.h3': 'Overskrift 3',
  /** Title of the "h4" block style */
  'inputs.portable-text.style.h4': 'Overskrift 4',
  /** Title of the "h5" block style */
  'inputs.portable-text.style.h5': 'Overskrift 5',
  /** Title of the "h6" block style */
  'inputs.portable-text.style.h6': 'Overskrift 6',
  /** Title shown when multiple blocks of varying styles is selected */
  'inputs.portable-text.style.multiple': 'Flere',
  /** Title of fallback when no style is given for a block */
  'inputs.portable-text.style.none': 'Ingen stil',
  /** Title of the "normal" block style */
  'inputs.portable-text.style.normal': 'Normal',
  /** Title of the "quote" block style */
  'inputs.portable-text.style.quote': 'Citat',
  /** Label for action to clear the current value of the reference field */
  'inputs.reference.action.clear': 'Ryd',
  /** Label for action to create a new document from the reference input */
  'inputs.reference.action.create-new-document': 'Opret',
  /** Label for action to create a new document from the reference input, when there are multiple templates or document types to choose from */
  'inputs.reference.action.create-new-document-select': 'Opret…',
  /** Label for action to duplicate the current item to a new item (used within arrays) */
  'inputs.reference.action.duplicate': 'Dupliker',
  /** Label for action that opens the referenced document in a new tab */
  'inputs.reference.action.open-in-new-tab': 'Åbn i ny fane',
  /** Label for action to remove the reference from an array */
  'inputs.reference.action.remove': 'Fjern',
  /** Label for action to replace the current value of the field */
  'inputs.reference.action.replace': 'Erstat',
  /** Label for action to cancel a previously initiated replace action  */
  'inputs.reference.action.replace-cancel': 'Annuller erstatning',
  /** The cross-dataset reference field currently has a reference, but the feature has been disabled since it was created. This explains what can/cannot be done in its current state. */
  'inputs.reference.cross-dataset.feature-disabled-actions':
    'Du kan stadig rydde denne felts eksisterende reference, men den kan ikke ændres til et andet dokument, så længe funktionen er deaktiveret.',
  /** A cross-dataset reference field exists but the feature has been disabled. A <DocumentationLink> component is available. */
  'inputs.reference.cross-dataset.feature-disabled-description':
    'Denne funktion er blevet deaktiveret. Læs hvordan du aktiverer den i <DocumentationLink>dokumentationen</DocumentationLink>.',
  /** Title for a warning telling the user that the current project does not have the "cross dataset references" feature */
  'inputs.reference.cross-dataset.feature-unavailable-title':
    'Ikke tilgængelig funktion: Kryds dataset reference',
  /** The cross-dataset reference points to a document with an invalid type  */
  'inputs.reference.cross-dataset.invalid-type':
    'Det refererede dokument er af ugyldig type ({{typeName}}) <JsonValue/>',
  /** The referenced document will open in a new tab (due to external studio) */
  'inputs.reference.document-opens-in-new-tab': 'Dette dokument åbnes i en ny fane',
  /** Error title for when the document is unavailable (for any possible reason) */
  'inputs.reference.error.document-unavailable-title': 'Dokument ikke tilgængeligt',
  /** Error title for when the referenced document failed to be loaded */
  'inputs.reference.error.failed-to-load-document-title': 'Kunne ikke indlæse refereret dokument',
  /** Error title for when the reference search returned a document that is not an allowed type for the field */
  'inputs.reference.error.invalid-search-result-type-title':
    'Søgning returnerede en type, der ikke er gyldig for denne reference: "{{returnedType}}"',
  /** Error description for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-description':
    'Refereret dokument (<code>{{documentId}}</code>) er af type <code>{{actualType}}</code>. Ifølge skemaet kan refererede dokumenter kun være af type <AllowedTypes />.',
  /** Error title for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-title': 'Dokument af ugyldig type',
  /** Error description for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-description':
    'Det refererede dokument kunne ikke tilgås på grund af utilstrækkelige tilladelser',
  /** Error title for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-title': 'Utilstrækkelige tilladelser',
  /** Error description for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-description':
    'Det refererede dokument eksisterer ikke (ID: <code>{{documentId}}</code>). Du kan enten fjerne referencen eller erstatte den med et andet dokument.',
  /** Error title for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-title': 'Ikke fundet',
  /** Label for button that clears the reference when it points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document.clear-button-label': 'Ryd',
  /** Error title for when the search for a reference failed. Note that the message sent by the backend may not be localized. */
  'inputs.reference.error.search-failed-title': 'Søgning efter reference mislykkedes',
  /** Alternative text for the image shown in cross-dataset reference input */
  'inputs.reference.image-preview-alt-text': 'Billedforhåndsvisning af refereret dokument',
  /** Description for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-description':
    '<strong>{{referencedocument}}</strong> er offentliggjort, og denne reference bør nu afsluttes.',
  /** Title for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-title': 'Afslut reference',
  /** Description for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-description':
    '<strong>{{referencedocument}}</strong> er offentliggjort, og denne reference bør nu konverteres til en stærk reference.',
  /** Title for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-title': 'Konverter til stærk reference',
  /** Label for button that triggers the action that strengthen a reference */
  'inputs.reference.incomplete-reference.strengthen-button-label': 'Konverter til stærk reference',
  /** Label for button that triggers a retry attempt for reference metadata  */
  'inputs.reference.metadata-error.retry-button-label': 'Prøv igen',
  /** Title for alert shown when reference metadata fails to be loaded */
  'inputs.reference.metadata-error.title': 'Kan ikke indlæse referencemetadata',
  /** Message shown when no documents were found that matched the given search string */
  'inputs.reference.no-results-for-query': 'Ingen resultater for <strong>“{{searchTerm}}”</strong>',
  /** Text for tooltip showing when a document was edited, using relative time (eg "how long ago was it edited?") */
  'inputs.reference.preview.edited-at-time': 'Redigeret <RelativeTime/>',
  /** Accessibility label for icon indicating that document does _not_ have any unpublished changes */
  'inputs.reference.preview.has-no-unpublished-changes-aria-label':
    'Ingen upublicerede redigeringer',
  /** Accessibility label for icon indicating that document has unpublished changes */
  'inputs.reference.preview.has-unpublished-changes-aria-label': 'Redigeret',
  /** Accessibility label for icon indicating that document does _not_ have a published version */
  'inputs.reference.preview.is-not-published-aria-label': 'Ikke publiceret',
  /** Accessibility label for icon indicating that document has a published version */
  'inputs.reference.preview.is-published-aria-label': 'Publiceret',
  /** Text for tooltip indicating that a document has no unpublished edits */
  'inputs.reference.preview.no-unpublished-edits': 'Ingen upublicerede redigeringer',
  /** Text for tooltip indicating that a document has not yet been published */
  'inputs.reference.preview.not-published': 'Ikke publiceret',
  /** Text for tooltip showing when a document was published, using relative time (eg "how long ago was it published?") */
  'inputs.reference.preview.published-at-time': 'Publiceret <RelativeTime/>',
  /** The referenced document no longer exist and might have been deleted (for weak references) */
  'inputs.reference.referenced-document-does-not-exist':
    'Det refererede dokument eksisterer ikke længere og kan være blevet slettet (dokument ID: <code>{{documentId}}</code>).',
  /** The referenced document could not be displayed to the user because of insufficient permissions */
  'inputs.reference.referenced-document-insufficient-permissions':
    'Det refererede dokument kunne ikke tilgås på grund af utilstrækkelige tilladelser',
  /** Label for when the reference input is resolving the initial value for an item */
  'inputs.reference.resolving-initial-value': 'Løser initial værdi…',
  /** Placeholder shown in a reference input with no current value */
  'inputs.reference.search-placeholder': 'Skriv for at søge',
  /** Explanation of the consequences of leaving the reference as strong instead of weak */
  'inputs.reference.strength-mismatch.is-strong-consquences':
    'Det vil ikke være muligt at slette det refererede dokument uden først at fjerne denne reference eller konvertere den til svag.',
  /** Description for alert shown when a reference is supposed to be weak, but the actual value is strong */
  'inputs.reference.strength-mismatch.is-strong-description':
    'Denne reference er <em>stærk</em>, men ifølge det nuværende skema burde den være <em>svag</em>.',
  /** Explanation of the consequences of leaving the reference as weak instead of strong */
  'inputs.reference.strength-mismatch.is-weak-consquences':
    'Dette gør det muligt at slette det refererede dokument uden først at slette denne reference, hvilket efterlader dette felt med reference til et ikke-eksisterende dokument.',
  /** Description for alert shown when a reference is supposed to be strong, but the actual value is weak */
  'inputs.reference.strength-mismatch.is-weak-description':
    'Denne reference er <em>svag</em>, men ifølge det nuværende skema burde den være <em>stærk</em>.',
  /** Label for button that triggers the action that strengthens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.strengthen-button-label': 'Konverter til stærk reference',
  /** Title for alert shown when a reference is supposed to be weak/strong, but the actual value is the opposite of what it is supposed to be */
  'inputs.reference.strength-mismatch.title': 'Referencestyrke mismatch',
  /** Label for button that triggers the action that weakens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.weaken-button-label': 'Konverter til svag reference',
  /** Action message for generating the slug */
  'inputs.slug.action.generate': 'Generer',
  /** Loading message for when the input is actively generating a slug */
  'inputs.slug.action.generating': 'Genererer…',
  /** Error message for when the source to generate a slug from is missing */
  'inputs.slug.error.missing-source':
    'Kilden mangler. Tjek kilden på typen {{schemaType}} i skemaet',
  /** Placeholder for an empty tag input */
  'inputs.tags.placeholder': 'Indtast tag og tryk ENTER…',
  /** Placeholder for an empty tag input on touch devices */
  'inputs.tags.placeholder_touch': 'Indtast tag…',
  /** Convert to `{{targetType}}` */
  'inputs.untyped-value.convert-button.text': 'Konverter til {{targetType}}',
  /** Encountered an object value without a <code>_type</code> property. */
  'inputs.untyped-value.description':
    'Stødte på en objektværdi uden en <code>_type</code> egenskab.',
  /** Either remove the <code>name</code> property of the object declaration, or set <code>_type</code> property on items. */
  'inputs.untyped-value.details.description':
    'Fjern enten <code>name</code> egenskaben af objektdeklarationen, eller sæt <code>_type</code> egenskab på elementerne.',
  /** Current value (<code>object</code>): */
  'inputs.untyped-value.details.json-dump-prefix': 'Nuværende værdi (<code>objekt</code>):',
  /** The following types are valid here according to schema: */
  'inputs.untyped-value.details.multi-type-description':
    'Følgende typer er gyldige her ifølge skemaet:',
  /** Developer info */
  'inputs.untyped-value.details.title': 'Udviklerinfo',
  /** Property value missing <code>_type</code> */
  'inputs.untyped-value.title': 'Egenskabsværdi mangler <code>_type</code>',
  /** Unset value */
  'inputs.untyped-value.unset-item-button.text': 'Fjern værdi',

  /** The fallback explanation if no context is provided */
  'insufficient-permissions-message.not-authorized-explanation':
    'Du har ikke tilladelse til at få adgang til denne funktion.',
  /** The explanation when unable to create any document at all */
  'insufficient-permissions-message.not-authorized-explanation_create-any-document':
    'Du har ikke tilladelse til at oprette et dokument.',
  /** The explanation when unable to create a particular document */
  'insufficient-permissions-message.not-authorized-explanation_create-document':
    'Du har ikke tilladelse til at oprette dette dokument.',
  /** The explanation when unable to create a particular type of document */
  'insufficient-permissions-message.not-authorized-explanation_create-document-type':
    'Du har ikke tilladelse til at oprette denne type dokument.',
  /** The explanation when unable to create a new reference in a document */
  'insufficient-permissions-message.not-authorized-explanation_create-new-reference':
    'Du har ikke tilladelse til at oprette en ny reference.',
  /** The explanation when unable to delete a particular document */
  'insufficient-permissions-message.not-authorized-explanation_delete-document':
    'Du har ikke tilladelse til at slette dette dokument.',
  /** The explanation when unable to delete a schedule on scheduled publishing */
  'insufficient-permissions-message.not-authorized-explanation_delete-schedules':
    'Du har ikke tilladelse til at slette tidsplaner.',
  /** The explanation when unable to discard changes in a particular document */
  'insufficient-permissions-message.not-authorized-explanation_discard-changes':
    'Du har ikke tilladelse til at forkaste ændringer i dette dokument.',
  /** The explanation when unable to duplicate a particular document */
  'insufficient-permissions-message.not-authorized-explanation_duplicate-document':
    'Du har ikke tilladelse til at duplikere dette dokument.',
  /** The explanation when unable to edit a schedule on scheduled publishing */
  'insufficient-permissions-message.not-authorized-explanation_edit-schedules':
    'Du har ikke tilladelse til at redigere tidsplaner.',
  /** The explanation when unable to execute a schedule on scheduled publishing */
  'insufficient-permissions-message.not-authorized-explanation_execute-schedules':
    'Du har ikke tilladelse til at udføre tidsplaner.',
  /** The explanation when unable to publish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_publish-document':
    'Du har ikke tilladelse til at offentliggøre dette dokument.',
  /** The explanation when unable to unpublish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_unpublish-document':
    'Du har ikke tilladelse til at afpublisere dette dokument.',
  /** Appears after the not-authorized message. Lists the current roles. */
  'insufficient-permissions-message.roles': 'Dine roller: <Roles/>',
  /** The title for the insufficient permissions message component */
  'insufficient-permissions-message.title': 'Utilstrækkelige tilladelser',

  /** Unexpected error: `{{error}}` */
  'member-field-error.unexpected-error': 'Uventet fejl: {{error}}',

  /** Button label for "Create new document" button */
  'new-document.button': 'Opret',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are templates/types available for creation
   */
  'new-document.create-new-document-label': 'Nyt dokument…',
  /** Placeholder for the "filter" input within the new document menu */
  'new-document.filter-placeholder': 'Søg i dokumenttyper',
  /** Loading indicator text within the new document menu */
  'new-document.loading': 'Indlæser…',
  /** Accessibility label for the list displaying options in the new document menu */
  'new-document.new-document-aria-label': 'Nyt dokument',
  /** Message for when there are no document type options in the new document menu */
  'new-document.no-document-types-found': 'Ingen dokumenttyper fundet',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are no templates/types to create from
   */
  'new-document.no-document-types-label': 'Ingen dokumenttyper',
  /** Message for when no results are found for a specific search query in the new document menu */
  'new-document.no-results': 'Ingen resultater for <strong>{{searchQuery}}</strong>',
  /** Aria label for the button that opens the "Create new document" popover/dialog */
  'new-document.open-dialog-aria-label': 'Opret nyt dokument',
  /** Title for "Create new document" dialog */
  'new-document.title': 'Opret nyt dokument',

  /** Label for button that will make the browser reload when users' studio version is out-of-date */
  'package-version.new-package-available.reload-button': 'Tryk for at genindlæse',
  /** Title of the alert for studio users when packages in their studio are out-of-date */
  'package-version.new-package-available.title': 'Sanity Studio er klar til at opdatere!',

  /** Label for action to manage members of the current studio project */
  'presence.action.manage-members': 'Administrer medlemmer',
  /** Accessibility label for presence menu button */
  'presence.aria-label': 'Global tilstedeværelse',
  /** Message description for when no one else is currently present */
  'presence.no-one-else-description': 'Inviter folk til projektet for at se deres online status.',
  /** Message title for when no one else is currently present */
  'presence.no-one-else-title': 'Der er ingen andre her',
  /** Message for when a user is not in a document (displayed in the global presence menu) */
  'presence.not-in-a-document': 'Ikke i et dokument',
  /** Tooltip content text for presence menu button */
  'presence.tooltip-content': 'Hvem er her',

  /** Fallback title shown when a preview does not provide a title */
  'preview.default.title-fallback': 'Uden titel',
  /** Fallback preview value for types that have "no value" (eg null, undefined) */
  'preview.fallback.no-value': '(ingen værdi)',
  /** Alternative text for image being shown while image is being uploaded, in previews */
  'preview.image.file-is-being-uploaded.alt-text': 'Billedet der er ved at blive uploadet',

  /* Relative time, just now */
  'relative-time.just-now': 'lige nu',

  /** Accessibility label to open search action when the search would go fullscreen (eg on narrower screens) */
  'search.action-open-aria-label': 'Åbn søgning',
  /** Action label for adding a search filter */
  'search.action.add-filter': 'Tilføj filter',
  /** Action label for clearing search filters */
  'search.action.clear-filters': 'Ryd filtre',
  /** Label for action to clear recent searches */
  'search.action.clear-recent-searches': 'Ryd seneste søgninger',
  /** Accessibility label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-aria-label': 'Ryd markerede filtre',
  /** Label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-label': 'Ryd',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to close the search */
  'search.action.close-search-aria-label': 'Luk søgning',
  /** Accessibility label for filtering by document type */
  'search.action.filter-by-document-type-aria-label': 'Filtrer efter dokumenttype',
  /** Accessibility action label for removing an already applied search filter */
  'search.action.remove-filter-aria-label': 'Fjern filter',
  /**
   * Text displayed when either no document type(s) have been selected, or we need a fallback,
   * eg "Search for all types".
   */
  'search.action.search-all-types': 'Søg i alle dokumenter',
  /**
   * Text displayed when we are able to determine one or more document types that will be used for
   * searching, and can fit within the space assigned by the design.
   */
  'search.action.search-specific-types': 'Søg efter {{types, list}}',
  /** Dialog title for action to select an asset of unknown type */
  'search.action.select-asset': 'Vælg aktiv',
  /** Dialog title for action to select a file asset */
  'search.action.select-asset_file': 'Vælg fil',
  /** Dialog title for action to select an image asset */
  'search.action.select-asset_image': 'Vælg billede',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-aria-label_hide': 'Skjul filtre',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-aria-label_show': 'Vis filtre',
  /** Label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-label_hide': 'Skjul filtre',
  /** Label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-label_show': 'Vis filtre',
  /** Tooltip text for the global search button */
  'search.button.tooltip': 'Søg',
  /**
   * A list of provided types (use `list` formatter preferably).
   */
  'search.document-type-list': '{{types, list}}',
  /**
   * In the context of a list of document types - no filtering selection has been done,
   * thus the default is "all types".
   */
  'search.document-type-list-all-types': 'Alle typer',
  /** Accessibility label for list displaying the available document types */
  'search.document-types-aria-label': 'Dokumenttyper',
  /** Label for when no document types matching the filter are found */
  'search.document-types-no-matches-found': 'Ingen match for {{filter}}',
  /** Description for error when a filter cannot be displayed, describes that you should check the schema */
  'search.error.display-filter-description':
    'Dette kan indikere ugyldige muligheder defineret i dit skema.',
  /** Title for error when a filter cannot be displayed (mainly a developer-oriented error) */
  'search.error.display-filter-title': 'Der opstod en fejl under visning af dette filter.',
  /** Description for error when no valid asset source is found, describes that you should check the the current studio config */
  'search.error.no-valid-asset-source-check-config-description':
    'Sørg for at det er aktiveret i din studiekonfigurationsfil.',
  /** Description for error when no valid asset source is found, describes that only the default asset is supported */
  'search.error.no-valid-asset-source-only-default-description':
    'I øjeblikket understøttes kun standard aktivkilden.',
  /** Title for error when no valid asset sources found */
  'search.error.no-valid-asset-source-title': 'Ingen gyldige aktivkilder fundet.',
  /** Helpful description for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-help-description': 'Prøv igen eller tjek din forbindelse',
  /** Title label for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-title': 'Noget gik galt under søgningen',
  /**
   * Label for "All fields", a label that appears above the list of available fields when filtering.
   * If one or more document type has been chosen as filter, this label is replaced with a group of
   * fields per selected document type
   */
  'search.filter-all-fields-header': 'Alle felter',
  /** Label for the action of changing from one file to a different file in asset search filter */
  'search.filter-asset-change_file': 'Skift fil',
  /** Label for the action of changing from one image to a different image in asset search filter */
  'search.filter-asset-change_image': 'Skift billede',
  /** Label for the action of clearing the currently selected asset in an image/file filter */
  'search.filter-asset-clear': 'Ryd',
  /** Label for the action of selecting a file in asset search filter */
  'search.filter-asset-select_file': 'Vælg fil',
  /** Label for the action of selecting an image in asset search filter */
  'search.filter-asset-select_image': 'Vælg billede',
  /** Label for boolean filter - false */
  'search.filter-boolean-false': 'Falsk',
  /** Label for boolean filter - true */
  'search.filter-boolean-true': 'Sand',
  /** Accessibility label for list that lets you filter fields by title, when adding a new filter in search */
  'search.filter-by-title-aria-label': 'Filtrer efter titel',
  /** Accessibility label for date filter input */
  'search.filter-date-aria-label': 'Dato',
  /** Accessibility label for selecting end date on the date range search filter */
  'search.filter-date-range-end-date-aria-label': 'Slutdato',
  /** Accessibility label for selecting start date on the date range search filter */
  'search.filter-date-range-start-date-aria-label': 'Startdato',
  /**
   * Label for "Days"/"Months"/"Years" when selecting it as unit in "X days ago" search filter.
   * Capitalized, as it would be listed in a dropdown.
   */
  'search.filter-date-unit_days': 'Dage',
  'search.filter-date-unit_months': 'Måneder',
  'search.filter-date-unit_years': 'År',
  /** Accessibility label for selecting the unit (day/month/year) when adding "X days ago" search filter */
  'search.filter-date-unit-aria-label': 'Vælg enhed',
  /** Accessibility label for the input value (days/months/years) when adding "X days ago" search filter */
  'search.filter-date-value-aria-label': 'Enheds værdi',
  /** Label for "field description" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-description': 'Feltbeskrivelse',
  /** Label for "field name" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-name': 'Feltnavn',
  /** Label for "Used in document types", a list of the document types a field appears in. Shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-used-in-document-types': 'Brugt i dokumenttyper',
  /** Label for when no fields/filters are found for the given term */
  'search.filter-no-matches-found': 'Ingen match for {{filter}}',
  /** Placeholder value for maximum numeric value filter */
  'search.filter-number-max-value-placeholder': 'Maks værdi',
  /** Placeholder value for minimum numeric value filter */
  'search.filter-number-min-value-placeholder': 'Min værdi',
  /** Placeholder value for the number filter */
  'search.filter-number-value-placeholder': 'Værdi',
  /** Placeholder for the "Filter" input, when narrowing possible fields/filters */
  'search.filter-placeholder': 'Filtrer',
  /** Label for the action of clearing the currently selected document in a reference filter */
  'search.filter-reference-clear': 'Ryd',
  /**
   * Label for "shared fields", a label that appears above a list of fields that all filtered types
   * have in common, when adding a new filter. For instance, if "book" and "employee" both have a
   * "title" field, this field would be listed under "shared fields".
   * */
  'search.filter-shared-fields-header': 'Fælles felter',
  /** Placeholder value for the string filter */
  'search.filter-string-value-placeholder': 'Værdi',
  /** Label/placeholder prompting user to select one of the predefined, allowed values for a string field */
  'search.filter-string-value-select-predefined-value': 'Vælg…',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (singular) */
  'search.filters-aria-label_one': 'Filter',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (plural) */
  'search.filters-aria-label_other': 'Filtre',
  /** Label for instructions on how to use the search - displayed when no recent searches are available */
  'search.instructions': 'Brug <ControlsIcon/> for at forfine din søgning',
  /** Helpful description for when no search results are found */
  'search.no-results-help-description': 'Prøv et andet nøgleord eller juster dine filtre',
  /** Title label for when no search results are found */
  'search.no-results-title': 'Ingen resultater fundet',
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
    '<Field/> <Operator>har</Operator> <Value>{{count}} element</Value>',
  'search.operator.array-count-equal.description_other':
    '<Field/> <Operator>har</Operator> <Value>{{count}} elementer</Value>',
  'search.operator.array-count-equal.name': 'mængde er',
  /* Array should have a count greater than given filter value */
  'search.operator.array-count-gt.description_one':
    '<Field/> <Operator>har ></Operator> <Value>{{count}} element</Value>',
  'search.operator.array-count-gt.description_other':
    '<Field/> <Operator>har ></Operator> <Value>{{count}} elementer</Value>',
  'search.operator.array-count-gt.name': 'mængde større end',
  /* Array should have a count greater than or equal to the given filter value */
  'search.operator.array-count-gte.description_one':
    '<Field/> <Operator>har ≥</Operator> <Value>{{count}} element</Value>',
  'search.operator.array-count-gte.description_other':
    '<Field/> <Operator>har ≥</Operator> <Value>{{count}} elementer</Value>',
  'search.operator.array-count-gte.name': 'mængde større end eller lig med',
  /* Array should have a count less than given filter value */
  'search.operator.array-count-lt.description_one':
    '<Field/> <Operator>har <</Operator> <Value>{{count}} element</Value>',
  'search.operator.array-count-lt.description_other':
    '<Field/> <Operator>har <</Operator> <Value>{{count}} elementer</Value>',
  'search.operator.array-count-lt.name': 'mængde mindre end',
  /* Array should have a count less than or equal to the given filter value */
  'search.operator.array-count-lte.description_one':
    '<Field/> <Operator>har ≤</Operator> <Value>{{count}} element</Value>',
  'search.operator.array-count-lte.description_other':
    '<Field/> <Operator>har ≤</Operator> <Value>{{count}} elementer</Value>',
  'search.operator.array-count-lte.name': 'mængde mindre end eller lig med',
  /* Array should have a count that is not equal to the given filter value */
  'search.operator.array-count-not-equal.description_one':
    '<Field/> <Operator>har ikke</Operator> <Value>{{count}} element</Value>',
  'search.operator.array-count-not-equal.description_other':
    '<Field/> <Operator>har ikke</Operator> <Value>{{count}} elementer</Value>',
  'search.operator.array-count-not-equal.name': 'mængden er ikke',
  /**
   * Array should have a count within the range of given filter values.
   * Gets passed `{{from}}` and `{{to}}` values.
   **/
  'search.operator.array-count-range.description':
    '<Field/> <Operator>har mellem</Operator> <Value>{{from}} → {{to}} elementer</Value>',
  'search.operator.array-count-range.name': 'mængden er mellem',
  /* Array should include the given value */
  'search.operator.array-list-includes.description':
    '<Field/> <Operator>inkluderer</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-includes.name': 'inkluderer',
  /* Array should not include the given value */
  'search.operator.array-list-not-includes.description':
    '<Field/> <Operator>inkluderer ikke</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-not-includes.name': 'inkluderer ikke',
  /* Array should include the given reference */
  'search.operator.array-reference-includes.description':
    '<Field/> <Operator>inkluderer</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-includes.name': 'inkluderer',
  /* Array should not include the given reference */
  'search.operator.array-reference-not-includes.description':
    '<Field/> <Operator>inkluderer ikke</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-not-includes.name': 'inkluderer ikke',
  /* Asset (file) should be the selected asset */
  'search.operator.asset-file-equal.description':
    '<Field/> <Operator>er</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-equal.name': 'er',
  /* Asset (file) should not be the selected asset */
  'search.operator.asset-file-not-equal.description':
    '<Field/> <Operator>er ikke</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-not-equal.name': 'er ikke',
  /* Asset (image) should be the selected asset */
  'search.operator.asset-image-equal.description':
    '<Field/> <Operator>er</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-equal.name': 'er',
  /* Asset (image) should not be the selected asset */
  'search.operator.asset-image-not-equal.description':
    '<Field/> <Operator>er ikke</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-not-equal.name': 'er ikke',
  /**
   * Boolean value should be the given filter value (true/false).
   * Context passed is `true` and `false`, allowing for more specific translations:
   * - `search.operator.boolean-equal.description_true`
   * - `search.operator.boolean-equal.description_false`
   */
  'search.operator.boolean-equal.description':
    '<Field/> <Operator>er</Operator> <Value>{{value}}</Value>',
  'search.operator.boolean-equal.name': 'er',
  /* Date should be after (later than) given filter value */
  'search.operator.date-after.description':
    '<Field/> <Operator>er efter</Operator> <Value>{{value}}</Value>',
  'search.operator.date-after.name': 'efter',
  /* Date should be before (earlier than) given filter value */
  'search.operator.date-before.description':
    '<Field/> <Operator>er før</Operator> <Value>{{value}}</Value>',
  'search.operator.date-before.name': 'før',
  /* Date should be the given filter value */
  'search.operator.date-equal.description':
    '<Field/> <Operator>er</Operator> <Value>{{value}}</Value>',
  'search.operator.date-equal.name': 'er',
  /* Date should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-last.description':
    '<Field/> <Operator>er inden for de sidste</Operator> <Value>{{value}}</Value>',
  'search.operator.date-last.name': 'sidste',
  /* Date should not be the given filter value */
  'search.operator.date-not-equal.description':
    '<Field/> <Operator>er ikke</Operator> <Value>{{value}}</Value>',
  'search.operator.date-not-equal.name': 'er ikke',
  /* Date should be within the range of given filter values */
  'search.operator.date-range.description': '<Field/> <Operator>er mellem</Operator> <Value/>',
  'search.operator.date-range.name': 'er mellem',
  /* Date and time should be after (later than) given filter value */
  'search.operator.date-time-after.description':
    '<Field/> <Operator>er efter</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-after.name': 'efter',
  /* Date and time should be before (earlier than) given filter value */
  'search.operator.date-time-before.description':
    '<Field/> <Operator>er før</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-before.name': 'før',
  /* Date and time should be the given filter value */
  'search.operator.date-time-equal.description':
    '<Field/> <Operator>er</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-equal.name': 'er',
  /* Date and time should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-time-last.description':
    '<Field/> <Operator>er inden for de sidste</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-last.name': 'sidste',
  /* Date and time should not be the given filter value */
  'search.operator.date-time-not-equal.description':
    '<Field/> <Operator>er ikke</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-not-equal.name': 'er ikke',
  /* Date and time should be within the range of given filter values */
  'search.operator.date-time-range.description': '<Field/> <Operator>er mellem</Operator> <Value/>',
  'search.operator.date-time-range.name': 'er mellem',
  /* Value should be defined */
  'search.operator.defined.description': '<Field/> <Operator>er</Operator> <Value>ikke tom</Value>',
  'search.operator.defined.name': 'ikke tom',
  /* Value should not be defined */
  'search.operator.not-defined.description': '<Field/> <Operator>er</Operator> <Value>tom</Value>',
  'search.operator.not-defined.name': 'tom',
  /* Number should be the given filter value */
  'search.operator.number-equal.description':
    '<Field/> <Operator>er</Operator> <Value>{{value}}</Value>',
  'search.operator.number-equal.name': 'er',
  /* Number should be greater than given filter value */
  'search.operator.number-gt.description':
    '<Field/> <Operator>></Operator> <Value>{{value}}</Value>',
  'search.operator.number-gt.name': 'større end',
  /* Number should be greater than or the given filter value */
  'search.operator.number-gte.description':
    '<Field/> <Operator>≥</Operator> <Value>{{value}}</Value>',
  'search.operator.number-gte.name': 'større end eller lig med',
  /* Number should be less than given filter value */
  'search.operator.number-lt.description':
    '<Field/> <Operator><</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lt.name': 'mindre end',
  /* Number should be less than or the given filter value */
  'search.operator.number-lte.description':
    '<Field/> <Operator>≤</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lte.name': 'mindre end eller lig med',
  /* Number should not be the given filter value */
  'search.operator.number-not-equal.description':
    '<Field/> <Operator>er ikke</Operator> <Value>{{value}}</Value>',
  'search.operator.number-not-equal.name': 'er ikke',
  /* Number should be within the range of given filter values */
  'search.operator.number-range.description':
    '<Field/> <Operator>er mellem</Operator> <Value>{{from}} → {{to}}</Value>',
  'search.operator.number-range.name': 'er mellem',
  /* Portable Text should contain the given filter value */
  'search.operator.portable-text-contains.description':
    '<Field/> <Operator>indeholder</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-contains.name': 'indeholder',
  /* Portable Text should be the given filter value */
  'search.operator.portable-text-equal.description':
    '<Field/> <Operator>er</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-equal.name': 'er',
  /* Portable Text should not contain the given filter value */
  'search.operator.portable-text-not-contains.description':
    '<Field/> <Operator>indeholder ikke</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-contains.name': 'indeholder ikke',
  /* Portable Text should not be the given filter value */
  'search.operator.portable-text-not-equal.description':
    '<Field/> <Operator>er ikke</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-equal.name': 'er ikke',
  /* References the given asset (file) */
  'search.operator.reference-asset-file.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-file.name': 'fil',
  /* References the given asset (image) */
  'search.operator.reference-asset-image.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-image.name': 'billede',
  /* References the given document */
  'search.operator.reference-document.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-document.name': 'dokument',
  /* Reference should be the given document */
  'search.operator.reference-equal.description':
    '<Field/> <Operator>er</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-equal.name': 'er',
  /* Reference should not be the given document */
  'search.operator.reference-not-equal.description':
    '<Field/> <Operator>er ikke</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-not-equal.name': 'er ikke',
  /* Slug contains the given value */
  'search.operator.slug-contains.description':
    '<Field/> <Operator>indeholder</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-contains.name': 'indeholder',
  /* Slug equals the given filter value */
  'search.operator.slug-equal.description':
    '<Field/> <Operator>er</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-equal.name': 'er',
  /* Slug does not contain the given value */
  'search.operator.slug-not-contains.description':
    '<Field/> <Operator>indeholder ikke</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-contains.name': 'indeholder ikke',
  /* Slug does not equal the given filter value */
  'search.operator.slug-not-equal.description':
    '<Field/> <Operator>er ikke</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-equal.name': 'er ikke',
  /* String contains the given filter value */
  'search.operator.string-contains.description':
    '<Field/> <Operator>indeholder</Operator> <Value>{{value}}</Value>',
  'search.operator.string-contains.name': 'indeholder',
  /* String equals the given filter value */
  'search.operator.string-equal.description':
    '<Field/> <Operator>er</Operator> <Value>{{value}}</Value>',
  'search.operator.string-equal.name': 'er',
  /* String equals one of the predefined allowed values */
  'search.operator.string-list-equal.description':
    '<Field/> <Operator>er</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-equal.name': 'er',
  /* String does not equal one of the predefined allowed values */
  'search.operator.string-list-not-equal.description':
    '<Field/> <Operator>er ikke</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-not-equal.name': 'er ikke',
  /* String does not contain the given filter value */
  'search.operator.string-not-contains.description':
    '<Field/> <Operator>indeholder ikke</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-contains.name': 'indeholder ikke',
  /* String does not equal the given filter value */
  'search.operator.string-not-equal.description':
    '<Field/> <Operator>er ikke</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-equal.name': 'er ikke',
  /** Label for the "Best match" search ordering type */
  'search.ordering.best-match-label': 'Bedste match',
  /** Label for the "Created: Oldest first" search ordering type */
  'search.ordering.created-ascending-label': 'Oprettet: Ældste først',
  /** Label for the "Created: Newest first" search ordering type */
  'search.ordering.created-descending-label': 'Oprettet: Nyeste først',
  /** Label for the "Updated: Oldest first" search ordering type */
  'search.ordering.updated-ascending-label': 'Opdateret: Ældste først',
  /** Label for the "Updated: Newest first" search ordering type */
  'search.ordering.updated-descending-label': 'Opdateret: Nyeste først',
  /** Placeholder text for the global search input field */
  'search.placeholder': 'Søg',
  /** Accessibility label for the recent searches section, shown when no valid search terms has been given */
  'search.recent-searches-aria-label': 'Seneste søgninger',
  /** Label/heading shown for the recent searches section */
  'search.recent-searches-label': 'Seneste søgninger',
  /** Accessibility label for the search results section, shown when the user has typed valid terms */
  'search.search-results-aria-label': 'Søgeresultater',

  /** Label for the edit columns button to change field visibility in sheet list */
  'sheet-list.edit-columns': 'Rediger kolonner',
  /** Label for the header menu option to hide a field from the sheet list */
  'sheet-list.hide-field': 'Fjern fra tabel',
  /** Label for reset column visibilities button */
  'sheet-list.reset-columns': 'Nulstil kolonner',
  /** Title for the edit columns menu */
  'sheet-list.select-fields': 'Vælg op til 5 felttyper',

  /** Accessibility label for the navbar status button */
  'status-button.aria-label': 'Konfigurationsstatus',

  /** Description for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-description':
    'Dokumentets historiktransaktioner er ikke påvirket.',
  /** Title for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-title':
    'Der opstod en fejl under hentning af dokumentændringer.',
  /** Error description for when the document doesn't have history */
  'timeline.error.no-document-history-description':
    'Når du ændrer indholdet af dokumentet, vil dokumentversionerne vises i denne menu.',
  /** Error title for when the document doesn't have history */
  'timeline.error.no-document-history-title': 'Ingen dokumenthistorik',
  /** Error prompt when revision cannot be loaded */
  'timeline.error.unable-to-load-revision': 'Kan ikke indlæse revision',
  /** Label for when the timeline item is the latest in the history */
  'timeline.latest': 'Seneste',
  /** Label for latest revision for timeline menu dropdown */
  'timeline.latest-revision': 'Seneste revision',
  /**
   * Label for latest revision for timeline menu dropdown
   * @deprecated as of `v3.47.0` `timeline.latest-revision` should be used instead. Note: _usage_ of this key is deprecated, but Studios on `< v3.47.0` still require this key to be _defined_
   * */
  'timeline.latest-version': 'Seneste version',
  /** The aria-label for the list of revisions in the timeline */
  'timeline.list.aria-label': 'Dokumentrevisioner',
  /** Label for loading history */
  'timeline.loading-history': 'Indlæser historik…',
  /** Label shown in review changes timeline when a document has been created */
  'timeline.operation.created': 'Oprettet',
  /** Label shown in review changes timeline when a document has been created, with a timestamp */
  'timeline.operation.created_timestamp': 'Oprettet: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was initially created */
  'timeline.operation.created-initial': 'Oprettet',
  /** Label shown in review changes timeline when a document was initially created, with a timestamp */
  'timeline.operation.created-initial_timestamp': 'Oprettet: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been deleted */
  'timeline.operation.deleted': 'Slettet',
  /** Label shown in review changes timeline when a document has been deleted, with a timestamp */
  'timeline.operation.deleted_timestamp': 'Slettet: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been discarded */
  'timeline.operation.draft-discarded': 'Kladde kasseret',
  /** Label shown in review changes timeline when a draft has been discarded, with a timestamp */
  'timeline.operation.draft-discarded_timestamp': 'Kasseret kladde: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been edited */
  'timeline.operation.edited-draft': 'Redigeret',
  /** Label shown in review changes timeline when a draft has been edited, with a timestamp */
  'timeline.operation.edited-draft_timestamp': 'Redigeret: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been edited live */
  'timeline.operation.edited-live': 'Live redigeret',
  /** Label shown in review changes timeline when a document has been edited live, with a timestamp */
  'timeline.operation.edited-live_timestamp': 'Live redigeret: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was published */
  'timeline.operation.published': 'Udgivet',
  /** Label shown in review changes timeline when a document was published, with a timestamp */
  'timeline.operation.published_timestamp': 'Udgivet: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was unpublished */
  'timeline.operation.unpublished': 'Ikke udgivet',
  /** Label shown in review changes timeline when a document was unpublished, with a timestamp */
  'timeline.operation.unpublished_timestamp': 'Ikke udgivet: {{timestamp, datetime}}',
  /**
   * Label for determining since which version the changes for timeline menu dropdown are showing.
   * Receives the time label as a parameter (`timestamp`).
   */
  'timeline.since': 'Siden: {{timestamp, datetime}}',
  /** Label for missing change version for timeline menu dropdown are showing */
  'timeline.since-version-missing': 'Siden: ukendt version',

  /** Aria label for the action buttons in the PTE toolbar */
  'toolbar.portable-text.action-button-aria-label': '{{action}}',

  /** Accessibility label for the breadcrumb menu */
  'tree-editing-dialog.breadcrumbs.menu': 'Brødkrummemenu',
  /** Title placeholder for search input in array of objects */
  'tree-editing-dialog.search-placeholder': 'Søg',
  /** Menu aria label for the search menu */
  'tree-editing-dialog.search.menu-label': 'Søgemenu',
  /** Title label for when no search results are found on the tree of objects */
  'tree-editing-dialog.search.no-results-title': 'Ingen resultater fundet',
  /** Label to close the sidebar */
  'tree-editing-dialog.sidebar.action.close': 'Luk sidebar',
  /** Collapse label the menu item in the sidebar  */
  'tree-editing-dialog.sidebar.action.collapse': 'Kollaps',
  /** Label to close the dialog */
  'tree-editing-dialog.sidebar.action.done': 'Færdig',
  /** Exapnd label the menu item in the sidebar  */
  'tree-editing-dialog.sidebar.action.expand': 'Udvid',
  /** Label to open the sidebar */
  'tree-editing-dialog.sidebar.action.open': 'Åbn sidebar',

  /** Label for button showing the free trial days left */
  'user-menu.action.free-trial_one': '{{count}} dag tilbage i prøveperioden',
  'user-menu.action.free-trial_other': '{{count}} dage tilbage i prøveperioden',
  /** Label for the button showed after trial ended */
  'user-menu.action.free-trial-finished': 'Opgrader fra gratis',
  /** Label for action to invite members to the current sanity project */
  'user-menu.action.invite-members': 'Inviter medlemmer',
  /** Accessibility label for action to invite members to the current sanity project */
  'user-menu.action.invite-members-aria-label': 'Inviter medlemmer',
  /** Label for action to manage the current sanity project */
  'user-menu.action.manage-project': 'Administrer projekt',
  /** Accessibility label for the action to manage the current project */
  'user-menu.action.manage-project-aria-label': 'Administrer projekt',
  /** Tooltip helper text when portable text annotation is disabled for empty block*/
  'user-menu.action.portable-text.annotation-disabled_empty-block':
    'Kan ikke anvende {{name}} på en tom blok',
  /** Tooltip helper text when portable text annotation is disabled for multiple blocks */
  'user-menu.action.portable-text.annotation-disabled_multiple-blocks':
    'Kan ikke anvende {{name}} på flere blokke',
  /** Label for action to sign out of the current sanity project */
  'user-menu.action.sign-out': 'Log ud',
  /** Title for appearance section for the current studio (dark / light / system scheme) */
  'user-menu.appearance-title': 'Udseende',
  /** Label for close menu button for user menu */
  'user-menu.close-menu': 'Luk menu',
  /** Description for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-description': 'Brug mørkt udseende',
  /** Title for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-title': 'Mørk',
  /** Description for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-description': 'Brug lyst udseende',
  /** Title for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-title': 'Lys',
  /** Description for using "system apparence" in the appearance user menu */
  'user-menu.color-scheme.system-description': 'Brug systemets udseende',
  /** Title for using system apparence in the appearance user menu */
  'user-menu.color-scheme.system-title': 'System',
  /** Title for locale section for the current studio */
  'user-menu.locale-title': 'Sprog',
  /** Label for tooltip to show which provider the currently logged in user is using */
  'user-menu.login-provider': 'Logget ind med {{providerTitle}}',
  /** Label for open menu button for user menu */
  'user-menu.open-menu': 'Åbn menu',

  /**
   * Label for action to add a workspace (currently a developer-oriented action, as this will
   * lead to the documentation on workspace configuration)
   */
  'workspaces.action.add-workspace': 'Tilføj arbejdsområde',
  /**
   * Label for action to choose a different workspace, in the case where you are not logged in,
   * have selected a workspace, and are faced with the authentication options for the selected
   * workspace. In other words, label for the action shown when you have reconsidered which
   * workspace to authenticate in.
   */
  'workspaces.action.choose-another-workspace': 'Vælg et andet arbejdsområde',
  /** Label for heading that indicates that you can choose your workspace */
  'workspaces.choose-your-workspace-label': 'Vælg dit arbejdsområde',
  /** Label for the workspace menu */
  'workspaces.select-workspace-aria-label': 'Vælg arbejdsområde',
  /** Button label for opening the workspace switcher */
  'workspaces.select-workspace-label': 'Vælg arbejdsområde',
  /** Tooltip for the workspace menu */
  'workspaces.select-workspace-tooltip': 'Vælg arbejdsområde',
  /** Title for Workplaces dropdown menu */
  'workspaces.title': 'Arbejdsområder',
})
