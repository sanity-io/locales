import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Menu item for deleting the asset */
  'asset-source.asset-list.menu.delete': 'Slett',
  /** Menu item for showing where a particular asset is used */
  'asset-source.asset-list.menu.show-usage': 'Vis bruk',
  /** Header in usage dialog for file assets */
  'asset-source.asset-usage-dialog.header_file': 'Dokument som bruker fil',
  /** Header in usage dialog for image assets */
  'asset-source.asset-usage-dialog.header_image': 'Dokument som bruker bilete',
  /** Text shown in usage dialog when loading documents using the selected asset */
  'asset-source.asset-usage-dialog.loading': 'Lastar…',
  /** Text for cancel action in delete-asset dialog */
  'asset-source.delete-dialog.action.cancel': 'Avbryt',
  /** Text for "confirm delete" action in delete-asset dialog */
  'asset-source.delete-dialog.action.delete': 'Slett',
  /** Dialog header for delete-asset dialog when deleting a file */
  'asset-source.delete-dialog.header_file': 'Slett fil',
  /** Dialog header for delete-asset dialog when deleting an image */
  'asset-source.delete-dialog.header_image': 'Slett bilete',
  /** Text shown in delete dialog when loading documents using the selected asset */
  'asset-source.delete-dialog.loading': 'Lastar…',
  /** Message confirming to delete *named* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_named':
    'Du er i ferd med å slette fila <strong>{{filename}}}</strong> og metadataen hennar. Er du sikker?',
  /** Message confirming to delete *unnamed* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_unnamed':
    'Du er i ferd med å slette fila og metadataen hennar. Er du sikker?',
  /** Message confirming to delete *named* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_named':
    'Du er i ferd med å slette biletet <strong>{{filename}}</strong> og metadataen hans. Er du sikker?',
  /** Message confirming to delete *unnamed* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_unnamed':
    'Du er i ferd med å slette biletet og metadataen hans. Er du sikker?',
  /** Alt text showing on image preview in delete asset dialog  */
  'asset-source.delete-dialog.usage-list.image-preview-alt': 'Førehandsvising av bilete',
  /** Warning message showing when *named* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_named':
    '{{filename}} kan ikkje slettast fordi det er i bruk. For å slette denne fila, må du først fjerne all bruk av den.',
  /** Warning message showing when *unnamed* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_unnamed':
    'Denne fila kan ikkje slettast fordi den er i bruk. For å slette den, må du først fjerne all bruk av den.',
  /** Warning message showing when *named* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_named':
    '{{filename}} kan ikkje slettast fordi den er i bruk. For å slette dette biletet, må du først fjerne all bruk av det.',
  /** Warning message showing when *unnamed* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_unnamed':
    'Dette biletet kan ikkje slettast fordi det er i bruk. For å slette det, må du først fjerne all bruk av det.',
  /** Text shown when the list of assets only include a specific set of types */
  'asset-source.dialog.accept-message':
    'Viser berre ressursar av aksepterte typar: <strong>{{acceptTypes}}</strong>',
  /** Keys shared between both image asset source and file asset source */
  /** Select asset dialog title for files */
  'asset-source.dialog.default-title_file': 'Vel fil',
  /** Select asset dialog title for images */
  'asset-source.dialog.default-title_image': 'Vel bilete',
  /** Select asset dialog load more items */
  'asset-source.dialog.load-more': 'Last meir',
  /** Text shown when selecting a file but there's no files to select from */
  'asset-source.dialog.no-assets_file': 'Ingen filer',
  /** Text shown when selecting an image but there's no images to select from */
  'asset-source.dialog.no-assets_image': 'Ingen bilete',
  'asset-source.file.asset-list.action.delete.disabled-cannot-delete-current-file':
    'Kan ikkje slette den valde fila',
  'asset-source.file.asset-list.action.delete.text': 'Slett',
  'asset-source.file.asset-list.action.delete.title': 'Slett fil',
  'asset-source.file.asset-list.action.select-file.title': 'Vel filen {{filename}}',
  'asset-source.file.asset-list.action.show-usage.title': 'Vis bruk',
  'asset-source.file.asset-list.delete-failed': 'Fila kunne ikkje slettast',
  'asset-source.file.asset-list.delete-successful': 'Fila vart sletta',
  'asset-source.file.asset-list.header.date-added': 'Dato lagt til',
  /** File asset source */
  'asset-source.file.asset-list.header.filename': 'Filnamn',
  'asset-source.file.asset-list.header.size': 'Storleik',
  'asset-source.file.asset-list.header.type': 'Type',
  /** Text displayed on button or menu invoking the file asset source */
  'asset-source.file.title': 'Opplasta filer',
  'asset-source.image.asset-list.delete-failed': 'Biletet kunne ikkje slettast',
  /** Image asset source */
  'asset-source.image.asset-list.delete-successful': 'Biletet vart sletta',
  /** Text displayed on button or menu invoking the image asset source */
  'asset-source.image.title': 'Opplasta bilete',
  'asset-source.usage-list.documents-using-file_named_one':
    'Eitt dokument brukar fila <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-file_named_other':
    '{{count}} dokument brukar fila <code>{{filename}}</code>',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *named* file **/
  'asset-source.usage-list.documents-using-file_named_zero':
    'Ingen dokument brukar fila <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-file_unnamed_one': 'Eitt dokument brukar denne fila',
  'asset-source.usage-list.documents-using-file_unnamed_other':
    '{{count}} dokument brukar denne fila',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *unnamed* file **/
  'asset-source.usage-list.documents-using-file_unnamed_zero': 'Ingen dokument brukar denne fila',
  'asset-source.usage-list.documents-using-image_named_one':
    'Eitt dokument brukar biletet <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-image_named_other':
    '{{count}} dokument brukar biletet <code>{{filename}}</code>',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *named* image **/
  'asset-source.usage-list.documents-using-image_named_zero':
    'Ingen dokument brukar biletet <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-image_unnamed_one': 'Eitt dokument brukar dette biletet',
  'asset-source.usage-list.documents-using-image_unnamed_other':
    '{{count}} dokument brukar dette biletet',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *unnamed* image **/
  'asset-source.usage-list.documents-using-image_unnamed_zero':
    'Ingen dokument brukar dette biletet',

  /** Action message for navigating to next month */
  'calendar.action.go-to-next-month': 'Gå til neste månad',
  /** Action message for navigating to next year */
  'calendar.action.go-to-next-year': 'Gå til neste år',
  /** Action message for navigating to previous month */
  'calendar.action.go-to-previous-month': 'Gå til førre månad',
  /** Action message for navigating to previous year */
  'calendar.action.go-to-previous-year': 'Gå til førre år',
  /* Label for navigating the calendar to "today", without _selecting_ today. Short form, eg `Today`, not `Go to today` */
  'calendar.action.go-to-today': 'I dag',
  /* Accessibility label for navigating the calendar to "today", without _selecting_ today */
  'calendar.action.go-to-today-aria-label': 'Gå til i dag',
  /* Label for navigating the calendar to "tomorrow", without _selecting_ tomorrow. Short form, eg `Tomorrow`, not `Go to tomorrow` */
  'calendar.action.go-to-tomorrow': 'I morgon',
  /* Label for navigating the calendar to "yesterday", without _selecting_ yesterday. Short form, eg `Yesterday`, not `Go to yesterday` */
  'calendar.action.go-to-yesterday': 'I går',
  /** Label for switch that controls whether or not to include time in given timestamp */
  'calendar.action.include-time-label': 'Inkluder tid',
  /** Action message for selecting the hour */
  'calendar.action.select-hour': 'Vel time',
  /** Action message for selecting the minute */
  'calendar.action.select-minute': 'Vel minutt',
  /** Action message for setting to the current time */
  'calendar.action.set-to-current-time': 'Sett til noverande tid',
  /** Label for selecting an hour preset. Receives a `time` param as a string on hh:mm format and a `date` param as a Date instance denoting the preset date */
  'calendar.action.set-to-time-preset': '{{time}} den {{date, datetime}}',
  /** Error message displayed in calendar when entered date is not the correct format */
  'calendar.error.must-be-in-format': 'Må vere i formatet <Emphasis>{{exampleDate}}</Emphasis>',
  /** Month name for April */
  'calendar.month-names.april': 'April',
  /** Month name for August */
  'calendar.month-names.august': 'August',
  /** Month name for December */
  'calendar.month-names.december': 'Desember',
  /** Month name for February */
  'calendar.month-names.february': 'Februar',
  /** Month name for January */
  'calendar.month-names.january': 'Januar',
  /** Month name for July */
  'calendar.month-names.july': 'Juli',
  /** Month name for June */
  'calendar.month-names.june': 'Juni',
  /** Month name for March */
  'calendar.month-names.march': 'Mars',
  /** Month name for May */
  'calendar.month-names.may': 'Mai',
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
  'calendar.weekday-names.short.saturday': 'Lau',
  /** Short weekday name for Sunday */
  'calendar.weekday-names.short.sunday': 'Sun',
  /** Short weekday name for Thursday */
  'calendar.weekday-names.short.thursday': 'Tor',
  /** Short weekday name for Tuesday */
  'calendar.weekday-names.short.tuesday': 'Tys',
  /** Short weekday name for Wednesday */
  'calendar.weekday-names.short.wednesday': 'Ons',

  /** Label for the close button label in Review Changes pane */
  'changes.action.close-label': 'Lukk gjennomgang av endringar',
  /** Cancel label for revert button prompt action */
  'changes.action.revert-all-cancel': 'Avbryt',
  /** Revert all confirm label for revert button action - used on prompt button + review changes pane */
  'changes.action.revert-all-confirm': 'Tilbakestill alle',
  /** Prompt for confirming revert change (singular) label for field change action */
  'changes.action.revert-changes-confirm-change_one': 'Tilbakestill endring',
  /** Revert for confirming revert (plural) label for field change action */
  'changes.action.revert-changes-confirm-change_other': 'Tilbakestill endringar',
  /** Prompt for reverting changes for a field change */
  'changes.action.revert-changes-description':
    'Er du sikker på at du vil tilbakestille endringane?',
  /** Prompt for reverting changes for a group change, eg multiple changes */
  'changes.action.revert-changes-description_one':
    'Er du sikker på at du vil tilbakestille endringa?',
  /** Label for when the action of the change was to set something that was previously empty, eg a field was given a value, an array item was added, an asset was selected or similar */
  'changes.added-label': 'Lagt til',
  /** Array diff: An item was added in a given position (`{{position}}`) */
  'changes.array.item-added-in-position': 'Lagt til i posisjon {{position}}',
  'changes.array.item-moved_down_one': 'Flytta {{count}} posisjon ned',
  'changes.array.item-moved_down_other': 'Flytta {{count}} posisjonar ned',
  /**
   * Array diff: An item was moved within the array.
   * Receives `{{count}}` representing number of positions it moved.
   * Context is the direction of the move, either `up` or `down`.
   */
  'changes.array.item-moved_up_one': 'Flytta {{count}} posisjon opp',
  'changes.array.item-moved_up_other': 'Flytta {{count}} posisjonar opp',
  /** Array diff: An item was removed from a given position (`{{position}}`) */
  'changes.array.item-removed-from-position': 'Fjerna frå posisjon {{position}}',
  /** Accessibility label for the "change bar" shown when there are edits on a field-level */
  'changes.change-bar.aria-label': 'Gjennomgang av endringar',
  /** Label for when the action of the change was _not_ an add/remove, eg a text field changed value, an image was changed from one asset to another or similar */
  'changes.changed-label': 'Endra',
  /** Label and text for tooltip that indicates the authors of the changes */
  'changes.changes-by-author': 'Endringar av',
  /** Additional text shown in development mode when a diff component crashes during rendering */
  'changes.error-boundary.developer-info': 'Sjekk utviklarkonsollen for meir informasjon',
  /** Text shown when a diff component crashes during rendering, triggering the error boundary */
  'changes.error-boundary.title': 'Å gjengi endringane til dette feltet forårsaka ein feil',
  /** Error message shown when the value of a field is not the expected one */
  'changes.error.incorrect-type-message':
    'Verdifel: Verdien er av typen "<code>{{actualType}}</code>", forventa "<code>{{expectedType}}</code>"',
  /** File diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.file.meta-info-fallback-title': 'Utan tittel',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.crop-changed': 'Beskjæring endra',
  /** Image diff: Text shown if the previous image asset was deleted (shouldn't theoretically happen) */
  'changes.image.deleted': 'Bilde sletta',
  /** Image diff: Text shown if the image failed to be loaded when previewing it */
  'changes.image.error-loading-image': 'Feil ved lasting av bilde',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.hotspot-changed': 'Hotspot endra',
  /** Image diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.image.meta-info-fallback-title': 'Utan tittel',
  /** Image diff: Text shown if no asset has been set for the field (but has metadata changes) */
  'changes.image.no-asset-set': 'Bilde ikkje sett',
  /** Image diff: Text shown when the from/to state has/had no image */
  'changes.image.no-image-placeholder': '(inget bilde)',
  /** Label for the "from" value in the change inspector */
  'changes.inspector.from-label': 'Frå',
  /** Label for the "meta" (field path, action etc) information in the change inspector */
  'changes.inspector.meta-label': 'Meta',
  /** Label for the "to" value in the change inspector */
  'changes.inspector.to-label': 'Til',
  /** Loading author of change in the differences tooltip in the review changes pane */
  'changes.loading-author': 'Lastar…',
  /** Loading changes in Review Changes Pane */
  'changes.loading-changes': 'Lastar endringar…',
  /** No Changes description in the Review Changes pane */
  'changes.no-changes-description':
    'Rediger dokumentet eller vel ein eldre versjon i tidslinja for å sjå ei liste over endringar som dukkar opp i dette panelet.',
  /** No Changes title in the Review Changes pane */
  'changes.no-changes-title': 'Det er ingen endringar',
  /** Portable Text diff: An annotation was added */
  'changes.portable-text.annotation_added': 'Lagt til annotasjon',
  /** Portable Text diff: An annotation was changed */
  'changes.portable-text.annotation_changed': 'Endra annotasjon',
  /** Portable Text diff: An annotation was removed */
  'changes.portable-text.annotation_removed': 'Fjerna annotasjon',
  /** Portable Text diff: An annotation was left unchanged */
  'changes.portable-text.annotation_unchanged': 'Uendra annotasjon',
  /** Portable Text diff: A block changed from one style to another (eg `normal` to `h1` or similar) */
  'changes.portable-text.block-style-changed':
    'Endra blokkstil frå "{{fromStyle}}" til "{{toStyle}}"',
  /** Portable Text diff: Change formatting of text (setting/unsetting marks, eg bold/italic etc) */
  'changes.portable-text.changed-formatting': 'Endra formatering',
  /** Portable Text diff: An empty inline object is part of a change */
  'changes.portable-text.empty-inline-object': 'Tom {{inlineObjectType}}',
  /** Portable Text diff: An empty object is the result of adding/removing an annotation */
  'changes.portable-text.empty-object-annotation': 'Tom {{annotationType}}',
  /** Portable Text diff: Added a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_added': 'Lagt til tom tekst',
  /** Portable Text diff: Changed a block that contained no text (eg empty block) */
  'changes.portable-text.empty-text_changed': 'Endra tom tekst',
  /** Portable Text diff: Removed a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_removed': 'Fjerna tom tekst',
  /** Portable Text diff: An inline object was added */
  'changes.portable-text.inline-object_added': 'Lagt til inline-objekt',
  /** Portable Text diff: An inline object was changed */
  'changes.portable-text.inline-object_changed': 'Endra inline-objekt',
  /** Portable Text diff: An inline object was removed */
  'changes.portable-text.inline-object_removed': 'Fjerna inline-objekt',
  /** Portable Text diff: An inline object was left unchanged */
  'changes.portable-text.inline-object_unchanged': 'Uendra inline-objekt',
  /** Portable Text diff: Added a chunk of text */
  'changes.portable-text.text_added': 'Lagt til tekst',
  /** Portable Text diff: Removed a chunk of text */
  'changes.portable-text.text_removed': 'Fjerna tekst',
  /** Portable Text diff: Annotation has an unknown schema type */
  'changes.portable-text.unknown-annotation-schema-type': 'Ukjend skjematype',
  /** Portable Text diff: Inline object has an unknown schema type */
  'changes.portable-text.unknown-inline-object-schema-type': 'Ukjend skjematype',
  /** Label for when the action of the change was a removal, eg a field was cleared, an array item was removed, an asset was deselected or similar */
  'changes.removed-label': 'Fjerna',
  /** Title for the Review Changes pane */
  'changes.title': 'Gå gjennom endringar',

  /** --- Common components --- */
  /** Tooltip text for context menu buttons */
  'common.context-menu-button.tooltip': 'Vis meir',
  /** Default text for dialog cancel button */
  'common.dialog.cancel-button.text': 'Avbryt',
  /** Default text for dialog confirm button */
  'common.dialog.confirm-button.text': 'Stadfest',
  /** Default text in shared loader text / spinner lockup */
  'common.loading': 'Lastar',

  /** --- Configuration issues --- */
  /** Tooltip displayed on configuration issues button */
  'configuration-issues.button.tooltip': 'Fann konfigurasjonsproblem',

  /** The fallback title for an ordering menu item if no localized titles are provided. */
  'default-menu-item.fallback-title': 'Sorter etter {{title}}',

  /** Title for the default ordering/SortOrder if no orderings are provided and the caption field is found */
  'default-orderings.caption': 'Sorter etter bildetekst',
  /** Title for the default ordering/SortOrder if no orderings are provided and the description field is found */
  'default-orderings.description': 'Sorter etter skildring',
  /** Title for the default ordering/SortOrder if no orderings are provided and the header field is found */
  'default-orderings.header': 'Sorter etter overskrift',
  /** Title for the default ordering/SortOrder if no orderings are provided and the heading field is found */
  'default-orderings.heading': 'Sorter etter overskrift',
  /** Title for the default ordering/SortOrder if no orderings are provided and the label field is found */
  'default-orderings.label': 'Sorter etter etikett',
  /** Title for the default ordering/SortOrder if no orderings are provided and the name field is found */
  'default-orderings.name': 'Sorter etter namn',
  /** Title for the default ordering/SortOrder if no orderings are provided and the title field is found */
  'default-orderings.title': 'Sorter etter tittel',

  /** Label to show in the document footer indicating the last edited date of the document */
  'document-status.edited': 'Redigert {{date}}',
  /** Label to show in the document footer indicating the document is not published*/
  'document-status.not-published': 'Ikkje publisert',
  /** Label to show in the document footer indicating the published date of the document */
  'document-status.published': 'Publisert {{date}}',

  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.duplicate-keys-alert.details.additional-description':
    'Verdien av <code>_key</code>-eigenskapen må vere ein unik streng.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property of each elements has been generated non-uniquely. */
  'form.error.duplicate-keys-alert.details.description':
    'Dette skjer vanlegvis når element blir oppretta ved hjelp av ein API-klient, og <code>_key</code>-eigenskapen til kvart element har blitt generert ikkje-unikt.',
  /** Developer info */
  'form.error.duplicate-keys-alert.details.title': 'Utviklarinfo',
  /** Generate unique keys */
  'form.error.duplicate-keys-alert.generate-button.text': 'Generer unike nøklar',
  /** Several items in this list share the same identifier (key). Every item must have an unique identifier. */
  'form.error.duplicate-keys-alert.summary':
    'Fleire element i denne lista deler den same identifikatoren (nøkkel). Kvart element må ha ein unik identifikator.',
  /** Non-unique keys */
  'form.error.duplicate-keys-alert.title': 'Ikkje-unike nøklar',
  /** Error text shown when a field with a given name cannot be found in the schema or is conditionally hidden but explicitly told to render  */
  'form.error.field-not-found':
    'Feltet "{{fieldName}}" ikkje funne blant medlemmer – verifiser at det er definert i skjemaet og at det ikkje har blitt betinga skjult.',
  /** Add missing keys */
  'form.error.missing-keys-alert.add-button.text': 'Legg til manglande nøklar',
  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.missing-keys-alert.details.additional-description':
    'Verdien av <code>_key</code>-eigenskapen må vere ein unik streng.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property has not been included. */
  'form.error.missing-keys-alert.details.description':
    'Dette skjer vanlegvis når element blir oppretta ved hjelp av ein API-klient, og <code>_key</code>-eigenskapen ikkje har blitt inkludert.',
  /** Developer info */
  'form.error.missing-keys-alert.details.title': 'Utviklarinfo',
  /** Some items in the list are missing their keys. This must be fixed in order to edit the list. */
  'form.error.missing-keys-alert.summary':
    'Nokre element i lista manglar nøklane sine. Dette må rettast for å kunne redigere lista.',
  /** Missing keys */
  'form.error.missing-keys-alert.title': 'Manglande nøklar',
  /** This usually happens when items are created using an API client, or when a custom input component has added invalid data to the list. */
  'form.error.mixed-array-alert.details.description':
    'Dette skjer vanlegvis når element blir oppretta ved hjelp av ein API-klient, eller når ein tilpassa inndatakomponent har lagt til ugyldige data i lista.',
  /** Developer info */
  'form.error.mixed-array-alert.details.title': 'Utviklarinfo',
  /**  Remove non-object values */
  'form.error.mixed-array-alert.remove-button.text': 'Fjern ikkje-objektverdiar',
  /** Some items in this list are not objects. This must be fixed in order to edit the list. */
  'form.error.mixed-array-alert.summary':
    'Nokre element i denne lista er ikkje objekt. Dette må rettast for å kunne redigere lista.',
  /** Invalid list values */
  'form.error.mixed-array-alert.title': 'Ugyldige listeverdiar',
  /** Error text shown when form is unable to find an array item at a given indexed path */
  'form.error.no-array-item-at-index':
    'Ingen element i lista ved indeks <code>{{index}}</code> funne på sti <code>{{path}}</code>',
  /** Error text shown when form is unable to find an array item at a given keyed path */
  'form.error.no-array-item-at-key':
    'Ingen element i lista med `_key` <code>"{{key}}"</code> funne på sti <code>{{path}}</code>',
  /** Form field deprecated label */
  'form.field.deprecated-label': 'Utfasa',
  /** Fallback title shown above field if it has no defined title */
  'form.field.untitled-field-label': 'Utan tittel',
  /** Fallback title shown above fieldset if it has no defined title */
  'form.field.untitled-fieldset-label': 'Utan tittel',
  /** Accessibility label for the icon that indicates the field has a validation error */
  'form.validation.has-error-aria-label': 'Har feil',
  /** Accessibility label for the icon that indicates the field has validation information */
  'form.validation.has-info-aria-label': 'Har informasjon',
  /** Accessibility label for the icon that indicates the field has a validation warning */
  'form.validation.has-warning-aria-label': 'Har åtvaring',
  /** Text shown when summarizing validation information, when the field has one or more errors */
  'form.validation.summary.errors-count_one': '{{count}} feil',
  'form.validation.summary.errors-count_other': '{{count}} feil',
  /** Text shown when summarizing validation information, when the field has one or more warnings */
  'form.validation.summary.warnings-count_one': '{{count}} åtvaring',
  'form.validation.summary.warnings-count_other': '{{count}} åtvaringar',

  /** Tooltip for free trial navbar button indicating remaining days */
  'free-trial.tooltip.days-count_one': '{{count}} dag att i prøveperioden',
  'free-trial.tooltip.days-count_other': '{{count}} dagar att i prøveperioden',
  /** Tooltip for free trial navbar button, once trial has ended */
  'free-trial.tooltip.trial-finished': 'Oppgrader prosjektet ditt',

  /**
   * Label for "contact sales" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.contact-sales': 'Kontakt sal',
  /**
   * Label for "help and support" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.help-and-support': 'Hjelp og støtte',
  /**
   * Label for "join our community" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.join-our-community': 'Bli med i vårt fellesskap',
  /** Information for what the latest sanity version is */
  'help-resources.latest-sanity-version': 'Siste versjon er {{latestVersion}}',
  /** Information for what studio version the current studio is running */
  'help-resources.studio-version': 'Sanity Studio versjon {{studioVersion}}',
  /** Title for help and resources menus */
  'help-resources.title': 'Hjelp og ressursar',

  /** Text for button to cancel an ongoing upload */
  'input.files.common.cancel-upload': 'Avbryt',
  /** Text for file input button in upload placeholder */
  'input.files.common.upload-placeholder.file-input-button.text': 'Last opp',
  /** Uploading <FileName/> */
  'input.files.common.upload-progress': 'Lastar opp <FileName/>',
  /** The referenced document cannot be opened, because the URL failed to be resolved */
  'input.reference.document-cannot-be-opened.failed-to-resolve-url':
    'Dette dokumentet kan ikkje opnast (ikkje mogleg å løyse URL til Studio)',

  /** Label for adding item after a specific array item */
  'inputs.array.action.add-after': 'Legg til element etter',
  /** Label for adding item before a specific array item */
  'inputs.array.action.add-before': 'Legg til element før',
  /** Label for adding array item action when the schema allows for only one schema type */
  'inputs.array.action.add-item': 'Legg til element',
  /**
   * Label for adding one array item action when the schema allows for multiple schema types,
   * eg. will prompt the user to select a type once triggered
   */
  'inputs.array.action.add-item-select-type': 'Legg til element...',
  /** Array drag handle button tooltip */
  'inputs.array.action.drag.tooltip': 'Dra for å omorganisere',
  /** Label for duplicating an array item  */
  'inputs.array.action.duplicate': 'Dupliser',
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
    'Du kan framleis flytte eller slette dette elementet, men det kan ikkje redigerast sidan skjemadefinisjonen for typen ikkje finst.',
  /** Error label for toast when array could not resolve the initial value */
  'inputs.array.error.cannot-resolve-initial-value-title':
    'Kan ikkje løyse initialverdien for typen: {{schemaTypeTitle}}: {{errorMessage}}.',
  /** Error label for toast when trying to upload one array item of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_one':
    'Følgjande element kan ikkje lastast opp fordi det ikkje finst nokon kjend konvertering frå innhaldstype til liste-element:',
  /** Error label for toast when trying to upload multiple array items of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_other':
    'Følgjande element kan ikkje lastast opp fordi det ikkje finst nokon kjend konvertering frå innhaldstyper til liste-element:',
  /** Error description for the array item tooltip that explains that the current type item is not valid for the list  */
  'inputs.array.error.current-schema-not-declare-description':
    'Det noverande skjemaet deklarerer ikkje element av typen <code>{{typeName}}</code> som gyldige for denne lista. Dette kan bety at typen er fjerna som eit gyldig element, eller at nokon andre har lagt det til i sitt eige lokale skjema som enno ikkje er utrulla.',
  /** Error description to show how the item is being represented in the json format */
  'inputs.array.error.json-representation-description': 'JSON-representasjon av dette elementet:',
  /** Error description for the array item tooltip that explains what the error means with more context */
  'inputs.array.error.type-is-incompatible-prompt':
    'Element av typen <code>{{typeName}}</code> er ikkje gyldig for denne lista',
  /** Error title for when an item type within an array input is incompatible, used in the tooltip */
  'inputs.array.error.type-is-incompatible-title': 'Kvifor skjer dette?',
  /** Error label for unexpected errors in the Array Input */
  'inputs.array.error.unexpected-error': 'Uventa feil: {{error}}',
  /** Label for when the array input doesn't have any items */
  'inputs.array.no-items-label': 'Ingen element',
  /** Label for read only array fields */
  'inputs.array.read-only-label': 'Dette feltet er skrivebeskytta',
  /** Label for when the array input is resolving the initial value for the item */
  'inputs.array.resolving-initial-value': 'Løyser initialverdien…',
  /** Placeholder value for datetime input */
  'inputs.datetime.placeholder': 't.d. {{example}}',
  /** Acessibility label for button to open file options menu */
  'inputs.file.actions-menu.file-options.aria-label': 'Opne filvalgmenyen',
  /** Browse */
  'inputs.file.browse-button.text': 'Bla gjennom',
  /** Select file */
  'inputs.file.dialog.title': 'Vel fil',
  /** Unknown member kind: `{{kind}}` */
  'inputs.file.error.unknown-member-kind': 'Ukjend medlemstype: {{kind}}',
  /** The value of this field is not a valid file. Resetting this field will let you choose a new file. */
  'inputs.file.invalid-file-warning.description':
    'Verdien av dette feltet er ikkje ein gyldig fil. Å tilbakestille dette feltet vil la deg velje ein ny fil.',
  /** Reset value */
  'inputs.file.invalid-file-warning.reset-button.text': 'Tilbakestill verdi',
  /** Invalid file value */
  'inputs.file.invalid-file-warning.title': 'Ugyldig filverdi',
  /** Select */
  'inputs.file.multi-browse-button.text': 'Vel',
  /** The upload could not be completed at this time. */
  'inputs.file.upload-failed.description':
    'Opplastinga kunne ikkje fullførast på dette tidspunktet.',
  /** Upload failed */
  'inputs.file.upload-failed.title': 'Opplasting feila',
  /** Clear field */
  'inputs.files.common.actions-menu.clear-field.label': 'Tøm felt',
  /** Copy URL */
  'inputs.files.common.actions-menu.copy-url.label': 'Kopier URL',
  /** Download */
  'inputs.files.common.actions-menu.download.label': 'Last ned',
  /** The URL is copied to the clipboard */
  'inputs.files.common.actions-menu.notification.url-copied': 'URL-en er kopiert til utklippstavla',
  /** Replace */
  'inputs.files.common.actions-menu.replace.label': 'Erstatt',
  /** Upload */
  'inputs.files.common.actions-menu.upload.label': 'Last opp',
  /** Drop to upload */
  'inputs.files.common.drop-message.drop-to-upload': 'Slepp for å laste opp',
  /** Drop to upload `{{count}}` file */
  'inputs.files.common.drop-message.drop-to-upload-multi_one':
    'Slepp for å laste opp {{count}} fil',
  /** Drop to upload `{{count}}` files */
  'inputs.files.common.drop-message.drop-to-upload-multi_other':
    'Slepp for å laste opp {{count}} filer',
  /** Can't upload this file here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_one':
    'Kan ikkje laste opp denne fila her',
  /** Can't upload any of these files here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_other':
    'Kan ikkje laste opp nokon av desse filene her',
  /** `{{count}}` file can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_one':
    '{{count}} fil kan ikkje lastast opp her',
  /** `{{count}}` files can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_other':
    '{{count}} filer kan ikkje lastast opp her',
  /** Cannot upload `{{count}}` files */
  'inputs.files.common.placeholder.cannot-upload-some-files_one': 'Kan ikkje laste opp fil',
  'inputs.files.common.placeholder.cannot-upload-some-files_other':
    'Kan ikkje laste opp {{count}} filer',
  /** Drag or paste type here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_file': 'Dra eller lim inn fil her',
  /** Drag or paste image here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_image': 'Dra eller lim inn bilete her',
  /** Drop to upload file */
  'inputs.files.common.placeholder.drop-to-upload_file': 'Slepp for å laste opp fil',
  /** Drop to upload image */
  'inputs.files.common.placeholder.drop-to-upload_image': 'Slepp for å laste opp bilete',
  /** Read only */
  'inputs.files.common.placeholder.read-only': 'Berre lese',
  /** Can't upload files here */
  'inputs.files.common.placeholder.upload-not-supported': 'Kan ikkje laste opp filer her',
  /** Clear upload */
  'inputs.files.common.stale-upload-warning.clear': 'Fjern opplasting',
  /** An upload has made no progress for at least `{{staleThresholdMinutes}}` minutes and likely got interrupted. You can safely clear the incomplete upload and try uploading again. */
  'inputs.files.common.stale-upload-warning.description':
    'Ei opplasting har ikkje gjort framsteg på minst {{staleThresholdMinutes}} minuttar og har sannsynlegvis blitt avbrote. Du kan trygt fjerne den ufullstendige opplastinga og prøve igjen.',
  /** Incomplete upload */
  'inputs.files.common.stale-upload-warning.title': 'Ufullstendig opplasting',
  /** Tooltip text for action to crop image */
  'inputs.image.actions-menu.crop-image-tooltip': 'Beskjær bilete',
  /** Accessibility label for button to open image edit dialog */
  'inputs.image.actions-menu.edit-details.aria-label': 'Opne dialog for å redigere bilete',
  /** Accessibility label for button to open image options menu */
  'inputs.image.actions-menu.options.aria-label': 'Opne meny for biletealternativ',
  /** Select */
  'inputs.image.browse-menu.text': 'Vel',
  /** Cannot upload this file here */
  'inputs.image.drag-overlay.cannot-upload-here': 'Kan ikkje laste opp denne fila her',
  /** Drop image to upload */
  'inputs.image.drag-overlay.drop-to-upload-image': 'Slepp bilete for å laste opp',
  /** This field is read only */
  'inputs.image.drag-overlay.this-field-is-read-only': 'Dette feltet er berre lese',
  /** Unknown member kind: `{{kind}}` */
  'inputs.image.error.unknown-member-kind': 'Ukjend medlemstype: {{kind}}',
  /** Edit hotspot and crop */
  'inputs.image.hotspot-dialog.title': 'Rediger hotspot og beskjæring',
  /** The value of this field is not a valid image. Resetting this field will let you choose a new image. */
  'inputs.image.invalid-image-warning.description':
    'Verdien av dette feltet er ikkje eit gyldig bilete. Å tilbakestille dette feltet vil la deg velje eit nytt bilete.',
  /** Reset value */
  'inputs.image.invalid-image-warning.reset-button.text': 'Tilbakestill verdi',
  /** Invalid image value */
  'inputs.image.invalid-image-warning.title': 'Ugyldig bileteverdi',
  /** Preview of uploaded image */
  'inputs.image.preview-uploaded-image': 'Førehandsvisning av opplasta bilete',
  /** The upload could not be completed at this time. */
  'inputs.image.upload-error.description':
    'Opplastinga kunne ikkje fullførast på dette tidspunktet.',
  /** Upload failed */
  'inputs.image.upload-error.title': 'Opplasting feila',
  /** Adjust the rectangle to crop image. Adjust the circle to specify the area that should always be visible. */
  'inputs.imagetool.description':
    'Justér rektangelet for å beskjære bildet. Justér sirkelen for å spesifisere området som alltid skal vere synleg.',
  /** Error: `{{errorMessage}}` */
  'inputs.imagetool.load-error': 'Feil: {{errorMessage}}',
  /** Hotspot & Crop */
  'inputs.imagetool.title': 'Hotspot & Crop',
  /** Convert to `{{targetType}}` */
  'inputs.invalid-value.convert-button.text': 'Konverter til <code>{{targetType}}</code>',
  /** The current value (<code>`{{actualType}}`</code>) */
  'inputs.invalid-value.current-type': 'Den gjeldande verdien (<code>{{actualType}}</code>)',
  /** The property value is stored as a value type that does not match the expected type. */
  'inputs.invalid-value.description':
    'Eigenskapsverdien er lagra som ein verdi type som ikkje samsvarar med den forventa typen.',
  /** The value of this property must be of type <code>`{{validType}}`</code> according to the schema. */
  'inputs.invalid-value.details.description':
    'Verdien av denne eigenskapen må vere av typen <code>{{validType}}</code> i følge skjemaet.',
  /** Only the following types are valid here according to schema: */
  'inputs.invalid-value.details.multi-type-description':
    'Berre dei følgjande typane er gyldige her i følge skjemaet:',
  /** Mismatching value types typically occur when the schema has recently been changed. */
  'inputs.invalid-value.details.possible-reason':
    'Ulike verdi typar oppstår typisk når skjemaet nyleg har blitt endra.',
  /** Developer info */
  'inputs.invalid-value.details.title': 'Utviklarinfo',
  /** -- Invalid Value Input -- */
  /** Reset value */
  'inputs.invalid-value.reset-button.text': 'Tilbakestill verdi',
  /** Invalid property value */
  'inputs.invalid-value.title': 'Ugyldig eigenskapsverdi',
  /** Field groups */
  'inputs.object.field-group-tabs.aria-label': 'Feltgrupper',
  /** Read-only field description */
  'inputs.object.unknown-fields.read-only.description':
    'Dette feltet er <strong>berre les</strong> i følge dokumentets skjema og kan ikkje fjernast. Om du vil kunne fjerne dette i Studio, sørg for å fjerne <code>readOnly</code> feltet frå den omsluttande typen i skjemaet.',
  /** Remove field */
  'inputs.object.unknown-fields.remove-field-button.text': 'Fjern felt',
  /** Encountered `{{count}}` fields that are not defined in the schema. */
  'inputs.object.unknown-fields.warning.description_one':
    'Oppdaget eit felt som ikkje er definert i skjemaet.',
  'inputs.object.unknown-fields.warning.description_other':
    'Oppdaget {{count}} felt som ikkje er definert i skjemaet.',
  /** Detailed description of unknown field warning */
  'inputs.object.unknown-fields.warning.details.description_one':
    'Dette feltet er ikkje definert i skjemaet, noko som kan bety at feltdefinisjonen har blitt fjerna eller at nokon andre har lagt det til i sitt eige lokale prosjekt og ikkje har distribuert endringane sine enno.',
  'inputs.object.unknown-fields.warning.details.description_other':
    'Desse felta er ikkje definert i dokumentets skjema, noko som kan bety at feltdefinisjonane har blitt fjerna eller at nokon andre har lagt dei til i sitt eige lokale prosjekt og ikkje har distribuert endringane sine enno.',
  /** Developer info */
  'inputs.object.unknown-fields.warning.details.title': 'Utviklarinfo',
  /** Unknown field found */
  'inputs.object.unknown-fields.warning.title_one': 'Ukjent felt funnet',
  'inputs.object.unknown-fields.warning.title_other': 'Ukjente felt funnet',
  /** Collapse the editor to save screen space  */
  'inputs.portable-text.action.collapse-editor': 'Kollaps redigeraren',
  /** Aria label for action to edit an existing annotation */
  'inputs.portable-text.action.edit-annotation-aria-label': 'Rediger annotasjon',
  /** Expand the editor to give more editing space */
  'inputs.portable-text.action.expand-editor': 'Utvid redigeraren',
  /** Label label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block': 'Sett inn {{typeName}}',
  /** Accessibility label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block-aria-label': 'Sett inn {{typeName}} (blokk)',
  /** Label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object': 'Sett inn {{typeName}}',
  /** Accessibility label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object-aria-label': 'Sett inn {{typeName}} (inline)',
  /** Aria label for action to remove an annotation */
  'inputs.portable-text.action.remove-annotation-aria-label': 'Fjern annotasjon',
  /** Label for activate on focus with context of click and not focused */
  'inputs.portable-text.activate-on-focus-message_click': 'Klikk for å aktivere',
  /** Label for activate on focus with context of click and focused */
  'inputs.portable-text.activate-on-focus-message_click-focused':
    'Klikk eller trykk på mellomrom for å aktivere',
  /** Label for activate on focus with context of tap and not focused */
  'inputs.portable-text.activate-on-focus-message_tap': 'Trykk for å aktivere',
  /**Aria label for the annotation object */
  'inputs.portable-text.annotation-aria-label': 'Annotasjonsobjekt',
  /** Title for dialog that allows editing an annotation */
  'inputs.portable-text.annotation-editor.title': 'Rediger {{schemaType}}',
  /** Title of the default "link" annotation */
  'inputs.portable-text.annotation.link': 'Lenke',
  /**Aria label for the block object */
  'inputs.portable-text.block.aria-label': 'Blokkobjekt',
  /** Label for action to edit a block item, in the case where it is editable */
  'inputs.portable-text.block.edit': 'Rediger',
  /** Accessibility label for the button that opens the actions menu on blocks */
  'inputs.portable-text.block.open-menu-aria-label': 'Opne meny',
  /** Label for action to open a reference, in the case of block-level reference types */
  'inputs.portable-text.block.open-reference': 'Opne referanse',
  /** Label for action to remove a block item */
  'inputs.portable-text.block.remove': 'Fjern',
  /** Label for action to view a block item, in the case where it is read-only and thus cannot be edited */
  'inputs.portable-text.block.view': 'Vis',
  /** Title of the "code" decorator */
  'inputs.portable-text.decorator.code': 'Kode',
  /** Title of the "em" (emphasis) decorator */
  'inputs.portable-text.decorator.emphasis': 'Kursiv',
  /** Title of the "strike-through" decorator */
  'inputs.portable-text.decorator.strike-through': 'Gjennomstreking',
  /** Title of the "strong" decorator */
  'inputs.portable-text.decorator.strong': 'Fet',
  /** Title of the "underline" decorator */
  'inputs.portable-text.decorator.underline': 'Understreking',
  /** Placeholder text for when the editor is empty */
  'inputs.portable-text.empty-placeholder': 'Tom',
  /**Aria label for the block object */
  'inputs.portable-text.inline-block.aria-label': 'Innline objekt',
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
    'MERK: Det er generelt trygt å utføre handlinga over, men om du er i tvil, ta kontakt med dei som er ansvarlege for å konfigurere studioet ditt.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.action': 'Fjern objektet',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.description':
    'Barn med nøkkel {{childKey}} i blokk med nøkkel <code>{{key}}</code> er av typen <code>{{childType}}</code>, som ikkje er tillate av skjemadefinisjonen.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.action': 'Fjern blokken',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.description':
    'Blokken med nøkkel <code>{{key}}</code> er av typen <code>{{typeName}}</code>, som ikkje er tillate av skjemadefinisjonen.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.action': 'Sett inn tomt tekstspann',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.description':
    'Tekstblokk med nøkkel <code>{{key}}</code> har ingen tekstspann.',
  /** Label for the button to ignore invalid values in the Portable Text editor */
  'inputs.portable-text.invalid-value.ignore-button.text': 'Ignorer',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.action':
    'Bruk typen <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.description':
    'Blokken med nøkkel <code>{{key}}</code> har eit ugyldig typenamn. Ifølgje skjemaet, bør det vere <code>{{expectedTypeName}}</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.action': 'Sett tom tekstverdi',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.description':
    'Spann med nøkkel {{childKey}} i blokk med nøkkel <code>{{key}}</code> har ein manglande eller ugyldig <code>text</code> eigenskap.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.action':
    'Bruk typen <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.description':
    'Blokken med nøkkel <code>{{key}}</code> manglar eit typenamn. Ifølgje skjemaet, bør det vere <code>{{expectedTypeName}}</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.action': 'Tilordne tilfeldig nøkkel',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.description':
    'Barn på indeks <code>{{index}}</code> i blokk med nøkkel <code>{{key}}</code> manglar <code>_key</code> eigenskap.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.action': 'Fjern objektet',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.description':
    'Barn med nøkkel {{childKey}} i blokk med nøkkel <code>{{key}}</code> manglar <code>_type</code> eigenskap.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.action': 'Tilordne tilfeldig nøkkel',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.description':
    'Blokken på indeks <code>{{index}}</code> manglar den påkravde <code>_key</code> eigenskapen.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.action': 'Fjern blokken',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.description':
    'Tekstblokk med nøkkel <code>{{key}}</code> har ein ugyldig eller manglande `children` eigenskap.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.action': 'Legg til eigenskap',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.description':
    'Tekstblokk med nøkkel <code>{{key}}</code> har ein ugyldig eller manglande `markDefs` eigenskap.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.action': 'Fjern blokken',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.description':
    'Blokken med nøkkel <code>{{key}}</code> manglar eit typenamn.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.action': 'Fjern elementet',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.description':
    'Barnet på indeks <code>{{index}}</code> av blokk med nøkkel <code>{{key}}</code> er ikkje eit objekt.',
  /** Action presented when the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.action': 'Fjern verdien',
  /** Text explaining that the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.description':
    'Verdien må vere eit array av Portable Text-blokker, eller udefinert.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.action': 'Fjern element',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.description':
    'Elementet på <code>{{index}}</code> er ikkje eit objekt,.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.action': 'Fjern ikkje tillatne merker',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.description':
    'Tekstblokk med nøkkel <code>{{key}}</code> inneheld merker <code>({{orphanedMarks, list}})</code> som ikkje er tillatne av skjemaet.',
  /** Title for the alert indicating that the Portable Text field has an invalid value */
  'inputs.portable-text.invalid-value.title': 'Ugyldig Portable Text-verdi',
  /** Title of "bulleted" list type */
  'inputs.portable-text.list-type.bullet': 'Punktliste',
  /** Title of numbered list type */
  'inputs.portable-text.list-type.number': 'Nummerert liste',
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
  'inputs.portable-text.style.multiple': 'Fleire',
  /** Title of fallback when no style is given for a block */
  'inputs.portable-text.style.none': 'Ingen stil',
  /** Title of the "normal" block style */
  'inputs.portable-text.style.normal': 'Normal',
  /** Title of the "quote" block style */
  'inputs.portable-text.style.quote': 'Sitat',
  /** Label for action to clear the current value of the reference field */
  'inputs.reference.action.clear': 'Fjern',
  /** Label for action to create a new document from the reference input */
  'inputs.reference.action.create-new-document': 'Opprett ny',
  /** Label for action to create a new document from the reference input, when there are multiple templates or document types to choose from */
  'inputs.reference.action.create-new-document-select': 'Opprett ny…',
  /** Label for action to duplicate the current item to a new item (used within arrays) */
  'inputs.reference.action.duplicate': 'Dupliser',
  /** Label for action that opens the referenced document in a new tab */
  'inputs.reference.action.open-in-new-tab': 'Opne i ny fane',
  /** Label for action to remove the reference from an array */
  'inputs.reference.action.remove': 'Fjern',
  /** Label for action to replace the current value of the field */
  'inputs.reference.action.replace': 'Erstatt',
  /** Label for action to cancel a previously initiated replace action  */
  'inputs.reference.action.replace-cancel': 'Avbryt erstatting',
  /** The cross-dataset reference field currently has a reference, but the feature has been disabled since it was created. This explains what can/cannot be done in its current state. */
  'inputs.reference.cross-dataset.feature-disabled-actions':
    'Du kan framleis tømme dette feltet sin eksisterande referanse, men det kan ikkje endrast til eit anna dokument så lenge funksjonen er deaktivert.',
  /** A cross-dataset reference field exists but the feature has been disabled. A <DocumentationLink> component is available. */
  'inputs.reference.cross-dataset.feature-disabled-description':
    'Denne funksjonen har blitt deaktivert. Les korleis du aktiverer den i <DocumentationLink>dokumentasjonen</DocumentationLink>.',
  /** Title for a warning telling the user that the current project does not have the "cross dataset references" feature */
  'inputs.reference.cross-dataset.feature-unavailable-title':
    'Utilgjengeleg funksjon: Kryss datasett referanse',
  /** The cross-dataset reference points to a document with an invalid type  */
  'inputs.reference.cross-dataset.invalid-type':
    'Det refererte dokumentet er av ugyldig type ({{typeName}}) <JsonValue/>',
  /** The referenced document will open in a new tab (due to external studio) */
  'inputs.reference.document-opens-in-new-tab': 'Dette dokumentet opnast i ein ny fane',
  /** Error title for when the document is unavailable (for any possible reason) */
  'inputs.reference.error.document-unavailable-title': 'Dokument utilgjengeleg',
  /** Error title for when the referenced document failed to be loaded */
  'inputs.reference.error.failed-to-load-document-title':
    'Klarte ikkje å laste inn referert dokument',
  /** Error title for when the reference search returned a document that is not an allowed type for the field */
  'inputs.reference.error.invalid-search-result-type-title':
    'Søket returnerte ein type som ikkje er gyldig for denne referansen: "{{returnedType}}"',
  /** Error description for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-description':
    'Det refererte dokumentet (<code>{{documentId}}</code>) er av type <code>{{actualType}}</code>. Ifølgje skjemaet kan refererte dokument berre vere av type <AllowedTypes />.',
  /** Error title for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-title': 'Dokument av ugyldig type',
  /** Error description for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-description':
    'Det refererte dokumentet kunne ikkje bli tilgjengeleg på grunn av utilstrekkelege tillatelsar',
  /** Error title for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-title': 'Utilstrekkelege tillatelsar',
  /** Error description for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-description':
    'Det refererte dokumentet eksisterer ikkje (ID: <code>{{documentId}}</code>). Du kan anten fjerne referansen eller erstatte den med eit anna dokument.',
  /** Error title for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-title': 'Ikkje funne',
  /** Label for button that clears the reference when it points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document.clear-button-label': 'Tøm',
  /** Error title for when the search for a reference failed. Note that the message sent by the backend may not be localized. */
  'inputs.reference.error.search-failed-title': 'Referansesøk feila',
  /** Alternative text for the image shown in cross-dataset reference input */
  'inputs.reference.image-preview-alt-text': 'Biletførehandsvisning av referert dokument',
  /** Description for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-description':
    '<strong>{{referencedDocument}}</strong> er publisert og denne referansen bør no bli avslutta.',
  /** Title for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-title': 'Fullfør referanse',
  /** Description for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-description':
    '<strong>{{referencedDocument}}</strong> er publisert og denne referansen bør no bli konvertert til ein sterk referanse.',
  /** Title for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-title': 'Konverter til sterk referanse',
  /** Label for button that triggers the action that strengthen a reference */
  'inputs.reference.incomplete-reference.strengthen-button-label': 'Konverter til sterk referanse',
  /** Label for button that triggers a retry attempt for reference metadata  */
  'inputs.reference.metadata-error.retry-button-label': 'Prøv på nytt',
  /** Title for alert shown when reference metadata fails to be loaded */
  'inputs.reference.metadata-error.title': 'Kan ikkje laste referansemetadata',
  /** Message shown when no documents were found that matched the given search string */
  'inputs.reference.no-results-for-query': 'Ingen resultat for <strong>“{{searchTerm}}”</strong>',
  /** Text for tooltip showing when a document was edited, using relative time (eg "how long ago was it edited?") */
  'inputs.reference.preview.edited-at-time': 'Redigert <RelativeTime/>',
  /** Accessibility label for icon indicating that document does _not_ have any unpublished changes */
  'inputs.reference.preview.has-no-unpublished-changes-aria-label':
    'Ingen upubliserte redigeringar',
  /** Accessibility label for icon indicating that document has unpublished changes */
  'inputs.reference.preview.has-unpublished-changes-aria-label': 'Redigert',
  /** Accessibility label for icon indicating that document does _not_ have a published version */
  'inputs.reference.preview.is-not-published-aria-label': 'Ikkje publisert',
  /** Accessibility label for icon indicating that document has a published version */
  'inputs.reference.preview.is-published-aria-label': 'Publisert',
  /** Text for tooltip indicating that a document has no unpublished edits */
  'inputs.reference.preview.no-unpublished-edits': 'Ingen upubliserte redigeringar',
  /** Text for tooltip indicating that a document has not yet been published */
  'inputs.reference.preview.not-published': 'Ikkje publisert',
  /** Text for tooltip showing when a document was published, using relative time (eg "how long ago was it published?") */
  'inputs.reference.preview.published-at-time': 'Publisert <RelativeTime/>',
  /** The referenced document no longer exist and might have been deleted (for weak references) */
  'inputs.reference.referenced-document-does-not-exist':
    'Det refererte dokumentet finst ikkje lenger og kan ha blitt sletta (dokument-ID: <code>{{documentId}}</code>).',
  /** The referenced document could not be displayed to the user because of insufficient permissions */
  'inputs.reference.referenced-document-insufficient-permissions':
    'Det refererte dokumentet kunne ikkje visast på grunn av utilstrekkelege tillatingar',
  /** Label for when the reference input is resolving the initial value for an item */
  'inputs.reference.resolving-initial-value': 'Løyser initialverdi…',
  /** Placeholder shown in a reference input with no current value */
  'inputs.reference.search-placeholder': 'Skriv for å søkje',
  /** Explanation of the consequences of leaving the reference as strong instead of weak */
  'inputs.reference.strength-mismatch.is-strong-consquences':
    'Det vil ikkje vere mogleg å slette det refererte dokumentet utan å først fjerne denne referansen eller konvertere den til svak.',
  /** Description for alert shown when a reference is supposed to be weak, but the actual value is strong */
  'inputs.reference.strength-mismatch.is-strong-description':
    'Denne referansen er <em>sterk</em>, men ifølgje det gjeldande skjemaet bør den vere <em>svak</em>.',
  /** Explanation of the consequences of leaving the reference as weak instead of strong */
  'inputs.reference.strength-mismatch.is-weak-consquences':
    'Dette gjer det mogleg å slette det refererte dokumentet utan å først slette denne referansen, noko som etterlet dette feltet med referanse til eit ikkje-eksisterande dokument.',
  /** Description for alert shown when a reference is supposed to be strong, but the actual value is weak */
  'inputs.reference.strength-mismatch.is-weak-description':
    'Denne referansen er <em>svak</em>, men ifølgje det gjeldande skjemaet bør den vere <em>sterk</em>.',
  /** Label for button that triggers the action that strengthens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.strengthen-button-label': 'Konverter til sterk referanse',
  /** Title for alert shown when a reference is supposed to be weak/strong, but the actual value is the opposite of what it is supposed to be */
  'inputs.reference.strength-mismatch.title': 'Uoverensstemmelse i referansestyrke',
  /** Label for button that triggers the action that weakens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.weaken-button-label': 'Konverter til svak referanse',
  /** Action message for generating the slug */
  'inputs.slug.action.generate': 'Generer',
  /** Loading message for when the input is actively generating a slug */
  'inputs.slug.action.generating': 'Genererer…',
  /** Error message for when the source to generate a slug from is missing */
  'inputs.slug.error.missing-source':
    'Kjelda manglar. Sjekk kjelda på type {{schemaType}} i skjemaet',
  /** Placeholder for an empty tag input */
  'inputs.tags.placeholder': 'Skriv inn merkelapp og trykk ENTER…',
  /** Placeholder for an empty tag input on touch devices */
  'inputs.tags.placeholder_touch': 'Skriv inn merkelapp…',
  /** Convert to `{{targetType}}` */
  'inputs.untyped-value.convert-button.text': 'Konverter til <code>{{targetType}}</code>',
  /** Encountered an object value without a <code>_type</code> property. */
  'inputs.untyped-value.description':
    'Møtte ein objektverdi utan ein <code>_type</code> eigenskap.',
  /** Either remove the <code>name</code> property of the object declaration, or set <code>_type</code> property on items. */
  'inputs.untyped-value.details.description':
    'Anten fjern <code>name</code> eigenskapen frå objektdeklarasjonen, eller sett ein <code>_type</code> eigenskap på elementa.',
  /** Current value (<code>object</code>): */
  'inputs.untyped-value.details.json-dump-prefix': 'Noeverande verdi (<code>objekt</code>):',
  /** The following types are valid here according to schema: */
  'inputs.untyped-value.details.multi-type-description':
    'Dei følgjande typane er gyldige her i følge skjemaet:',
  /** Developer info */
  'inputs.untyped-value.details.title': 'Utviklarinfo',
  /** Property value missing <code>_type</code> */
  'inputs.untyped-value.title': 'Eigenskapsverdi manglar <code>_type</code>',
  /** Unset value */
  'inputs.untyped-value.unset-item-button.text': 'Fjern verdi',

  /** The fallback explanation if no context is provided */
  'insufficient-permissions-message.not-authorized-explanation':
    'Du har ikkje løyve til å få tilgang til denne funksjonen.',
  /** The explanation when unable to create any document at all */
  'insufficient-permissions-message.not-authorized-explanation_create-any-document':
    'Du har ikkje løyve til å opprette eit dokument.',
  /** The explanation when unable to create a particular document */
  'insufficient-permissions-message.not-authorized-explanation_create-document':
    'Du har ikkje løyve til å opprette dette dokumentet.',
  /** The explanation when unable to create a particular type of document */
  'insufficient-permissions-message.not-authorized-explanation_create-document-type':
    'Du har ikkje løyve til å opprette denne typen dokument.',
  /** The explanation when unable to create a new reference in a document */
  'insufficient-permissions-message.not-authorized-explanation_create-new-reference':
    'Du har ikkje løyve til å opprette ein ny referanse.',
  /** The explanation when unable to delete a particular document */
  'insufficient-permissions-message.not-authorized-explanation_delete-document':
    'Du har ikkje løyve til å slette dette dokumentet.',
  /** The explanation when unable to discard changes in a particular document */
  'insufficient-permissions-message.not-authorized-explanation_discard-changes':
    'Du har ikkje løyve til å forkaste endringar i dette dokumentet.',
  /** The explanation when unable to duplicate a particular document */
  'insufficient-permissions-message.not-authorized-explanation_duplicate-document':
    'Du har ikkje løyve til å duplisere dette dokumentet.',
  /** The explanation when unable to publish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_publish-document':
    'Du har ikkje løyve til å publisere dette dokumentet.',
  /** The explanation when unable to unpublish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_unpublish-document':
    'Du har ikkje løyve til å avpublisere dette dokumentet.',
  /** Appears after the not-authorized message. Lists the current roles. */
  'insufficient-permissions-message.roles': 'Rollene dine: <Roles/>',
  /** The title for the insufficient permissions message component */
  'insufficient-permissions-message.title': 'Utilstrekkelege løyver',

  /** Unexpected error: `{{error}}` */
  'member-field-error.unexpected-error': 'Uventa feil: {{error}}',

  /** Button label for "Create new document" button */
  'new-document.button': 'Opprett',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are templates/types available for creation
   */
  'new-document.create-new-document-label': 'Nytt dokument…',
  /** Placeholder for the "filter" input within the new document menu */
  'new-document.filter-placeholder': 'Filtrer',
  /** Loading indicator text within the new document menu */
  'new-document.loading': 'Lastar…',
  /** Accessibility label for the list displaying options in the new document menu */
  'new-document.new-document-aria-label': 'Nytt dokument',
  /** Message for when there are no document type options in the new document menu */
  'new-document.no-document-types-found': 'Ingen dokumenttypar funne',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are no templates/types to create from
   */
  'new-document.no-document-types-label': 'Ingen dokumenttypar',
  /** Message for when no results are found for a specific search query in the new document menu */
  'new-document.no-results': 'Ingen resultat for <strong>{{searchQuery}}</strong>',
  /** Aria label for the button that opens the "Create new document" popover/dialog */
  'new-document.open-dialog-aria-label': 'Opprett nytt dokument',
  /** Title for "Create new document" dialog */
  'new-document.title': 'Opprett nytt dokument',

  /** Label for action to manage members of the current studio project */
  'presence.action.manage-members': 'Administrer medlemmar',
  /** Accessibility label for presence menu button */
  'presence.aria-label': 'Kven er her',
  /** Message description for when no one else is currently present */
  'presence.no-one-else-description': 'Inviter folk til prosjektet for å sjå deira online status.',
  /** Message title for when no one else is currently present */
  'presence.no-one-else-title': 'Ingen andre er her',
  /** Message for when a user is not in a document (displayed in the global presence menu) */
  'presence.not-in-a-document': 'Ikkje i eit dokument',
  /** Tooltip content text for presence menu button */
  'presence.tooltip-content': undefined, // 'Who is here'

  /** Fallback title shown when a preview does not provide a title */
  'preview.default.title-fallback': 'Utan tittel',
  /** Fallback preview value for types that have "no value" (eg null, undefined) */
  'preview.fallback.no-value': '(ingen verdi)',
  /** Alternative text for image being shown while image is being uploaded, in previews */
  'preview.image.file-is-being-uploaded.alt-text': 'Biletet som for tida blir lasta opp',

  /* Relative time, just now */
  'relative-time.just-now': 'nett no',

  /** Accessibility label to open search action when the search would go fullscreen (eg on narrower screens) */
  'search.action-open-aria-label': 'Opne søk',
  /** Action label for adding a search filter */
  'search.action.add-filter': 'Legg til filter',
  /** Action label for clearing search filters */
  'search.action.clear-filters': 'Fjern filter',
  /** Label for action to clear recent searches */
  'search.action.clear-recent-searches': 'Fjern nylege søk',
  /** Accessibility label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-aria-label': 'Fjern valde filter',
  /** Label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-label': 'Fjern',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to close the search */
  'search.action.close-search-aria-label': 'Lukk søk',
  /** Accessibility label for filtering by document type */
  'search.action.filter-by-document-type-aria-label': 'Filtrer etter dokumenttype',
  /** Accessibility action label for removing an already applied search filter */
  'search.action.remove-filter-aria-label': 'Fjern filter',
  /**
   * Text displayed when either no document type(s) have been selected, or we need a fallback,
   * eg "Search for all types".
   */
  'search.action.search-all-types': 'Søk alle dokument',
  /**
   * Text displayed when we are able to determine one or more document types that will be used for
   * searching, and can fit within the space assigned by the design.
   */
  'search.action.search-specific-types': 'Søk etter {{types, list}}',
  /** Dialog title for action to select an asset of unknown type */
  'search.action.select-asset': 'Velg ressurs',
  /** Dialog title for action to select a file asset */
  'search.action.select-asset_file': 'Velg fil',
  /** Dialog title for action to select an image asset */
  'search.action.select-asset_image': 'Velg bilete',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-aria-label_hide': 'Skjul filter',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-aria-label_show': 'Vis filter',
  /** Label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-label_hide': 'Skjul filter',
  /** Label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-label_show': 'Vis filter',
  /** Tooltip text for the global search button */
  'search.button.tooltip': 'Søk',
  /**
   * A list of provided types (use `list` formatter preferably).
   */
  'search.document-type-list': '{{types, list}}',
  /**
   * In the context of a list of document types - no filtering selection has been done,
   * thus the default is "all types".
   */
  'search.document-type-list-all-types': 'Alle typar',
  /** Accessibility label for list displaying the available document types */
  'search.document-types-aria-label': 'Dokumenttypar',
  /** Label for when no document types matching the filter are found */
  'search.document-types-no-matches-found': 'Ingen treff for {{filter}}',
  /** Description for error when a filter cannot be displayed, describes that you should check the schema */
  'search.error.display-filter-description':
    'Dette kan tyde på ugyldige alternativ definert i ditt skjema.',
  /** Title for error when a filter cannot be displayed (mainly a developer-oriented error) */
  'search.error.display-filter-title': 'Ein feil oppstod ved visning av dette filteret.',
  /** Description for error when no valid asset source is found, describes that you should check the the current studio config */
  'search.error.no-valid-asset-source-check-config-description':
    'Sjekk at det er aktivert i konfigurasjonsfila for studioet ditt.',
  /** Description for error when no valid asset source is found, describes that only the default asset is supported */
  'search.error.no-valid-asset-source-only-default-description':
    'For tida er berre standard ressurskjelde støtta.',
  /** Title for error when no valid asset sources found */
  'search.error.no-valid-asset-source-title': 'Ingen gyldige ressurskjelder funne.',
  /** Helpful description for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-help-description': 'Prøv igjen eller sjekk tilkoblinga di',
  /** Title label for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-title': 'Noko gjekk gale under søkinga',
  /**
   * Label for "All fields", a label that appears above the list of available fields when filtering.
   * If one or more document type has been chosen as filter, this label is replaced with a group of
   * fields per selected document type
   */
  'search.filter-all-fields-header': 'Alle felt',
  /** Label for the action of changing from one file to a different file in asset search filter */
  'search.filter-asset-change_file': 'Bytt fil',
  /** Label for the action of changing from one image to a different image in asset search filter */
  'search.filter-asset-change_image': 'Bytt bilete',
  /** Label for the action of clearing the currently selected asset in an image/file filter */
  'search.filter-asset-clear': 'Fjern',
  /** Label for the action of selecting a file in asset search filter */
  'search.filter-asset-select_file': 'Velg fil',
  /** Label for the action of selecting an image in asset search filter */
  'search.filter-asset-select_image': 'Velg bilete',
  /** Label for boolean filter - false */
  'search.filter-boolean-false': 'Usann',
  /** Label for boolean filter - true */
  'search.filter-boolean-true': 'Sann',
  /** Accessibility label for list that lets you filter fields by title, when adding a new filter in search */
  'search.filter-by-title-aria-label': 'Filtrer etter tittel',
  /** Accessibility label for date filter input */
  'search.filter-date-aria-label': 'Dato',
  /** Accessibility label for selecting end date on the date range search filter */
  'search.filter-date-range-end-date-aria-label': 'Sluttdato',
  /** Accessibility label for selecting start date on the date range search filter */
  'search.filter-date-range-start-date-aria-label': 'Startdato',
  /**
   * Label for "Days"/"Months"/"Years" when selecting it as unit in "X days ago" search filter.
   * Capitalized, as it would be listed in a dropdown.
   */
  'search.filter-date-unit_days': 'Dagar',
  'search.filter-date-unit_months': 'Månader',
  'search.filter-date-unit_years': 'År',
  /** Accessibility label for selecting the unit (day/month/year) when adding "X days ago" search filter */
  'search.filter-date-unit-aria-label': 'Vel eining',
  /** Accessibility label for the input value (days/months/years) when adding "X days ago" search filter */
  'search.filter-date-value-aria-label': 'Eining verdi',
  /** Label for "field description" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-description': 'Feltbeskriving',
  /** Label for "field name" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-name': 'Feltnamn',
  /** Label for "Used in document types", a list of the document types a field appears in. Shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-used-in-document-types': 'Brukt i dokumenttypar',
  /** Label for when no fields/filters are found for the given term */
  'search.filter-no-matches-found': 'Ingen treff for {{filter}}',
  /** Placeholder value for maximum numeric value filter */
  'search.filter-number-max-value-placeholder': 'Maks verdi',
  /** Placeholder value for minimum numeric value filter */
  'search.filter-number-min-value-placeholder': 'Min verdi',
  /** Placeholder value for the number filter */
  'search.filter-number-value-placeholder': 'Verdi',
  /** Placeholder for the "Filter" input, when narrowing possible fields/filters */
  'search.filter-placeholder': 'Filtrer',
  /** Label for the action of clearing the currently selected document in a reference filter */
  'search.filter-reference-clear': 'Fjern',
  /**
   * Label for "shared fields", a label that appears above a list of fields that all filtered types
   * have in common, when adding a new filter. For instance, if "book" and "employee" both have a
   * "title" field, this field would be listed under "shared fields".
   * */
  'search.filter-shared-fields-header': 'Delte felt',
  /** Placeholder value for the string filter */
  'search.filter-string-value-placeholder': 'Verdi',
  /** Label/placeholder prompting user to select one of the predefined, allowed values for a string field */
  'search.filter-string-value-select-predefined-value': 'Vel…',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (singular) */
  'search.filters-aria-label_one': 'Filter',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (plural) */
  'search.filters-aria-label_other': 'Filter',
  /** Label for instructions on how to use the search - displayed when no recent searches are available */
  'search.instructions': 'Bruk <ControlsIcon/> for å forbetre søket ditt',
  /** Helpful description for when no search results are found */
  'search.no-results-help-description': 'Prøv eit anna søkeord eller juster filtrene dine',
  /** Title label for when no search results are found */
  'search.no-results-title': 'Ingen resultat funne',
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
    '<Field/> <Operator>har</Operator> <Value>{{count}} element</Value>',
  'search.operator.array-count-equal.name': 'mengde er',
  /* Array should have a count greater than given filter value */
  'search.operator.array-count-gt.description_one':
    '<Field/> <Operator>har ></Operator> <Value>{{count}} element</Value>',
  'search.operator.array-count-gt.description_other':
    '<Field/> <Operator>har ></Operator> <Value>{{count}} element</Value>',
  'search.operator.array-count-gt.name': 'mengde større enn',
  /* Array should have a count greater than or equal to the given filter value */
  'search.operator.array-count-gte.description_one':
    '<Field/> <Operator>har ≥</Operator> <Value>{{count}} element</Value>',
  'search.operator.array-count-gte.description_other':
    '<Field/> <Operator>har ≥</Operator> <Value>{{count}} element</Value>',
  'search.operator.array-count-gte.name': 'mengde større enn eller lik',
  /* Array should have a count less than given filter value */
  'search.operator.array-count-lt.description_one':
    '<Field/> <Operator>har <</Operator> <Value>{{count}} element</Value>',
  'search.operator.array-count-lt.description_other':
    '<Field/> <Operator>har <</Operator> <Value>{{count}} element</Value>',
  'search.operator.array-count-lt.name': 'mengde mindre enn',
  /* Array should have a count less than or equal to the given filter value */
  'search.operator.array-count-lte.description_one':
    '<Field/> <Operator>har ≤</Operator> <Value>{{count}} element</Value>',
  'search.operator.array-count-lte.description_other':
    '<Field/> <Operator>har ≤</Operator> <Value>{{count}} element</Value>',
  'search.operator.array-count-lte.name': 'mengde mindre enn eller lik',
  /* Array should have a count that is not equal to the given filter value */
  'search.operator.array-count-not-equal.description_one':
    '<Field/> <Operator>har ikkje</Operator> <Value>{{count}} element</Value>',
  'search.operator.array-count-not-equal.description_other':
    '<Field/> <Operator>har ikkje</Operator> <Value>{{count}} element</Value>',
  'search.operator.array-count-not-equal.name': 'mengde er ikkje',
  /**
   * Array should have a count within the range of given filter values.
   * Gets passed `{{from}}` and `{{to}}` values.
   **/
  'search.operator.array-count-range.description':
    '<Field/> <Operator>har mellom</Operator> <Value>{{from}} → {{to}} element</Value>',
  'search.operator.array-count-range.name': 'mengde er mellom',
  /* Array should include the given value */
  'search.operator.array-list-includes.description':
    '<Field/> <Operator>inkluderer</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-includes.name': 'inkluderer',
  /* Array should not include the given value */
  'search.operator.array-list-not-includes.description':
    '<Field/> <Operator>inkluderer ikkje</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-not-includes.name': 'inkluderer ikkje',
  /* Array should include the given reference */
  'search.operator.array-reference-includes.description':
    '<Field/> <Operator>inkluderer</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-includes.name': 'inkluderer',
  /* Array should not include the given reference */
  'search.operator.array-reference-not-includes.description':
    '<Field/> <Operator>inkluderer ikkje</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-not-includes.name': 'inkluderer ikkje',
  /* Asset (file) should be the selected asset */
  'search.operator.asset-file-equal.description':
    '<Field/> <Operator>er</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-equal.name': 'er',
  /* Asset (file) should not be the selected asset */
  'search.operator.asset-file-not-equal.description':
    '<Field/> <Operator>er ikkje</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-not-equal.name': 'er ikkje',
  /* Asset (image) should be the selected asset */
  'search.operator.asset-image-equal.description':
    '<Field/> <Operator>er</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-equal.name': 'er',
  /* Asset (image) should not be the selected asset */
  'search.operator.asset-image-not-equal.description':
    '<Field/> <Operator>er ikkje</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-not-equal.name': 'er ikkje',
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
    '<Field/> <Operator>er etter</Operator> <Value>{{value}}</Value>',
  'search.operator.date-after.name': 'etter',
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
    '<Field/> <Operator>er i dei siste</Operator> <Value>{{value}}</Value>',
  'search.operator.date-last.name': 'siste',
  /* Date should not be the given filter value */
  'search.operator.date-not-equal.description':
    '<Field/> <Operator>er ikkje</Operator> <Value>{{value}}</Value>',
  'search.operator.date-not-equal.name': 'er ikkje',
  /* Date should be within the range of given filter values */
  'search.operator.date-range.description': '<Field/> <Operator>er mellom</Operator> <Value/>',
  'search.operator.date-range.name': 'er mellom',
  /* Date and time should be after (later than) given filter value */
  'search.operator.date-time-after.description':
    '<Field/> <Operator>er etter</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-after.name': 'etter',
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
    '<Field/> <Operator>er i dei siste</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-last.name': 'siste',
  /* Date and time should not be the given filter value */
  'search.operator.date-time-not-equal.description':
    '<Field/> <Operator>er ikkje</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-not-equal.name': 'er ikkje',
  /* Date and time should be within the range of given filter values */
  'search.operator.date-time-range.description': '<Field/> <Operator>er mellom</Operator> <Value/>',
  'search.operator.date-time-range.name': 'er mellom',
  /* Value should be defined */
  'search.operator.defined.description':
    '<Field/> <Operator>er</Operator> <Value>ikkje tom</Value>',
  'search.operator.defined.name': 'ikkje tom',
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
  'search.operator.number-gt.name': 'større enn',
  /* Number should be greater than or the given filter value */
  'search.operator.number-gte.description':
    '<Field/> <Operator>≥</Operator> <Value>{{value}}</Value>',
  'search.operator.number-gte.name': 'større enn eller lik',
  /* Number should be less than given filter value */
  'search.operator.number-lt.description':
    '<Field/> <Operator><</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lt.name': 'mindre enn',
  /* Number should be less than or the given filter value */
  'search.operator.number-lte.description':
    '<Field/> <Operator>≤</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lte.name': 'mindre enn eller lik',
  /* Number should not be the given filter value */
  'search.operator.number-not-equal.description':
    '<Field/> <Operator>er ikkje</Operator> <Value>{{value}}</Value>',
  'search.operator.number-not-equal.name': 'er ikkje',
  /* Number should be within the range of given filter values */
  'search.operator.number-range.description':
    '<Field/> <Operator>er mellom</Operator> <Value>{{from}} → {{to}}</Value>',
  'search.operator.number-range.name': 'er mellom',
  /* Portable Text should contain the given filter value */
  'search.operator.portable-text-contains.description':
    '<Field/> <Operator>inneheld</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-contains.name': 'inneheld',
  /* Portable Text should be the given filter value */
  'search.operator.portable-text-equal.description':
    '<Field/> <Operator>er</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-equal.name': 'er',
  /* Portable Text should not contain the given filter value */
  'search.operator.portable-text-not-contains.description':
    '<Field/> <Operator>inneheld ikkje</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-contains.name': 'inneheld ikkje',
  /* Portable Text should not be the given filter value */
  'search.operator.portable-text-not-equal.description':
    '<Field/> <Operator>er ikkje</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-equal.name': 'er ikkje',
  /* References the given asset (file) */
  'search.operator.reference-asset-file.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-file.name': 'fil',
  /* References the given asset (image) */
  'search.operator.reference-asset-image.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-image.name': 'bilete',
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
    '<Field/> <Operator>er ikkje</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-not-equal.name': 'er ikkje',
  /* Slug contains the given value */
  'search.operator.slug-contains.description':
    '<Field/> <Operator>inneheld</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-contains.name': 'inneholder',
  /* Slug equals the given filter value */
  'search.operator.slug-equal.description':
    '<Field/> <Operator>er</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-equal.name': 'er',
  /* Slug does not contain the given value */
  'search.operator.slug-not-contains.description':
    '<Field/> <Operator>inneholder ikkje</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-contains.name': 'inneholder ikkje',
  /* Slug does not equal the given filter value */
  'search.operator.slug-not-equal.description':
    '<Field/> <Operator>er ikkje</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-equal.name': 'er ikkje',
  /* String contains the given filter value */
  'search.operator.string-contains.description':
    '<Field/> <Operator>inneholder</Operator> <Value>{{value}}</Value>',
  'search.operator.string-contains.name': 'inneholder',
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
    '<Field/> <Operator>er ikkje</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-not-equal.name': 'er ikkje',
  /* String does not contain the given filter value */
  'search.operator.string-not-contains.description':
    '<Field/> <Operator>inneholder ikkje</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-contains.name': 'inneholder ikkje',
  /* String does not equal the given filter value */
  'search.operator.string-not-equal.description':
    '<Field/> <Operator>er ikkje</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-equal.name': 'er ikkje',
  /** Label for the "Best match" search ordering type */
  'search.ordering.best-match-label': 'Beste treff',
  /** Label for the "Created: Oldest first" search ordering type */
  'search.ordering.created-ascending-label': 'Oppretta: Eldst først',
  /** Label for the "Created: Newest first" search ordering type */
  'search.ordering.created-descending-label': 'Oppretta: Nyast først',
  /** Label for the "Updated: Oldest first" search ordering type */
  'search.ordering.updated-ascending-label': 'Oppdatert: Eldst først',
  /** Label for the "Updated: Newest first" search ordering type */
  'search.ordering.updated-descending-label': 'Oppdatert: Nyast først',
  /** Placeholder text for the global search input field */
  'search.placeholder': 'Søk',
  /** Accessibility label for the recent searches section, shown when no valid search terms has been given */
  'search.recent-searches-aria-label': 'Nylege søk',
  /** Label/heading shown for the recent searches section */
  'search.recent-searches-label': 'Nylege søk',
  /** Accessibility label for the search results section, shown when the user has typed valid terms */
  'search.search-results-aria-label': 'Søkjeresultat',

  /** Accessibility label for the navbar status button */
  'status-button.aria-label': undefined, // 'Configuration status'

  /** Description for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-description':
    'Dokumenthistorikktransaksjonane har ikkje blitt påverka.',
  /** Title for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-title':
    'Det oppstod ein feil under henting av dokumentendringar.',
  /** Error description for when the document doesn't have history */
  'timeline.error.no-document-history-description':
    'Når du endrar innhaldet i dokumentet, vil versjonane av dokumentet visast i denne menyen.',
  /** Error title for when the document doesn't have history */
  'timeline.error.no-document-history-title': 'Ingen dokumenthistorikk',
  /** Error prompt when revision cannot be loaded */
  'timeline.error.unable-to-load-revision': 'Kan ikkje laste revisjon',
  /** Label for when the timeline item is the latest in the history */
  'timeline.latest': 'Siste',
  /** Label for latest version for timeline menu dropdown */
  'timeline.latest-version': 'Siste versjon',
  /** The aria-label for the list of revisions in the timeline */
  'timeline.list.aria-label': 'Dokumentrevisjonar',
  /** Label for loading history */
  'timeline.loading-history': 'Lastar historikk…',
  /** Label shown in review changes timeline when a document has been created */
  'timeline.operation.created': 'Oppretta',
  /** Label shown in review changes timeline when a document has been created, with a timestamp */
  'timeline.operation.created_timestamp': 'Oppretta: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was initially created */
  'timeline.operation.created-initial': 'Oppretta',
  /** Label shown in review changes timeline when a document was initially created, with a timestamp */
  'timeline.operation.created-initial_timestamp': 'Oppretta: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been deleted */
  'timeline.operation.deleted': 'Sletta',
  /** Label shown in review changes timeline when a document has been deleted, with a timestamp */
  'timeline.operation.deleted_timestamp': 'Sletta: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been discarded */
  'timeline.operation.draft-discarded': 'Forkasta utkast',
  /** Label shown in review changes timeline when a draft has been discarded, with a timestamp */
  'timeline.operation.draft-discarded_timestamp': 'Forkasta utkast: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been edited */
  'timeline.operation.edited-draft': 'Redigert',
  /** Label shown in review changes timeline when a draft has been edited, with a timestamp */
  'timeline.operation.edited-draft_timestamp': 'Redigert: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been edited live */
  'timeline.operation.edited-live': 'Redigert live',
  /** Label shown in review changes timeline when a document has been edited live, with a timestamp */
  'timeline.operation.edited-live_timestamp': 'Redigert live: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was published */
  'timeline.operation.published': 'Publisert',
  /** Label shown in review changes timeline when a document was published, with a timestamp */
  'timeline.operation.published_timestamp': 'Publisert: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was unpublished */
  'timeline.operation.unpublished': 'Avpublisert',
  /** Label shown in review changes timeline when a document was unpublished, with a timestamp */
  'timeline.operation.unpublished_timestamp': 'Avpublisert: {{timestamp, datetime}}',
  /**
   * Label for determining since which version the changes for timeline menu dropdown are showing.
   * Receives the time label as a parameter (`timestamp`).
   */
  'timeline.since': 'Sidan: {{timestamp, datetime}}',
  /** Label for missing change version for timeline menu dropdown are showing */
  'timeline.since-version-missing': 'Sidan: ukjend versjon',

  /**Aria label for the action buttons in the PTE toolbar */
  'toolbar.portable-text.action-button-aria-label': undefined, // '{{action}}'

  /** Label for button showing the free trial days left */
  'user-menu.action.free-trial_one': '{{count}} dag att i prøveperioden',
  'user-menu.action.free-trial_other': '{{count}} dagar att i prøveperioden',
  /** Label for the button showed after trial ended */
  'user-menu.action.free-trial-finished': 'Oppgrader frå gratis',
  /** Label for action to invite members to the current sanity project */
  'user-menu.action.invite-members': 'Inviter medlemmer',
  /** Accessibility label for action to invite members to the current sanity project */
  'user-menu.action.invite-members-aria-label': 'Inviter medlemmer',
  /** Label for action to manage the current sanity project */
  'user-menu.action.manage-project': 'Administrer prosjekt',
  /** Accessibility label for the action to manage the current project */
  'user-menu.action.manage-project-aria-label': 'Administrer prosjekt',
  /** Tooltip helper text when portable text annotation is disabled for empty block*/
  'user-menu.action.portable-text.annotation-disabled_empty-block':
    'Kan ikkje bruke {{name}} på ein tom blokk',
  /** Tooltip helper text when portable text annotation is disabled for multiple blocks */
  'user-menu.action.portable-text.annotation-disabled_multiple-blocks':
    'Kan ikkje bruke {{name}} på fleire blokker',
  /** Label for action to sign out of the current sanity project */
  'user-menu.action.sign-out': 'Logg ut',
  /** Title for appearance section for the current studio (dark / light / system scheme) */
  'user-menu.appearance-title': 'Utsjånad',
  /** Label for close menu button for user menu */
  'user-menu.close-menu': 'Lukk meny',
  /** Description for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-description': 'Bruk mørk utsjånad',
  /** Title for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-title': 'Mørk',
  /** Description for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-description': 'Bruk lys utsjånad',
  /** Title for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-title': 'Lys',
  /** Description for using "system apparence" in the appearance user menu */
  'user-menu.color-scheme.system-description': 'Bruk systemutsjånad',
  /** Title for using system apparence in the appearance user menu */
  'user-menu.color-scheme.system-title': 'System',
  /** Title for locale section for the current studio */
  'user-menu.locale-title': 'Språk',
  /** Label for tooltip to show which provider the currently logged in user is using */
  'user-menu.login-provider': 'Innlogga med {{providerTitle}}',
  /** Label for open menu button for user menu */
  'user-menu.open-menu': 'Opne meny',

  /**
   * Label for action to add a workspace (currently a developer-oriented action, as this will
   * lead to the documentation on workspace configuration)
   */
  'workspaces.action.add-workspace': 'Legg til arbeidsområde',
  /**
   * Label for action to choose a different workspace, in the case where you are not logged in,
   * have selected a workspace, and are faced with the authentication options for the selected
   * workspace. In other words, label for the action shown when you have reconsidered which
   * workspace to authenticate in.
   */
  'workspaces.action.choose-another-workspace': 'Vel eit anna arbeidsområde',
  /** Label for heading that indicates that you can choose your workspace */
  'workspaces.choose-your-workspace-label': 'Vel ditt arbeidsområde',
  /** Label for the workspace menu */
  'workspaces.select-workspace-aria-label': 'Vel arbeidsområde',
  /** Button label for opening the workspace switcher */
  'workspaces.select-workspace-label': 'Vel arbeidsområde',
  /** Tooltip for the workspace menu */
  'workspaces.select-workspace-tooltip': 'Vel arbeidsområde',
  /** Title for Workplaces dropdown menu */
  'workspaces.title': 'Arbeidsområde',
})
