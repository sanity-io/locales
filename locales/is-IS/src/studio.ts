import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Menu item for deleting the asset */
  'asset-source.asset-list.menu.delete': 'Eyða',
  /** Menu item for showing where a particular asset is used */
  'asset-source.asset-list.menu.show-usage': 'Sýna notkun',
  /** Header in usage dialog for file assets */
  'asset-source.asset-usage-dialog.header_file': 'Skjöl sem nota skrá',
  /** Header in usage dialog for image assets */
  'asset-source.asset-usage-dialog.header_image': 'Skjöl sem nota mynd',
  /** Text shown in usage dialog when loading documents using the selected asset */
  'asset-source.asset-usage-dialog.loading': 'Hleður…',
  /** Text for cancel action in delete-asset dialog */
  'asset-source.delete-dialog.action.cancel': 'Hætta við',
  /** Text for "confirm delete" action in delete-asset dialog */
  'asset-source.delete-dialog.action.delete': 'Eyða',
  /** Dialog header for delete-asset dialog when deleting a file */
  'asset-source.delete-dialog.header_file': 'Eyða skrá',
  /** Dialog header for delete-asset dialog when deleting an image */
  'asset-source.delete-dialog.header_image': 'Eyða mynd',
  /** Text shown in delete dialog when loading documents using the selected asset */
  'asset-source.delete-dialog.loading': 'Hleður…',
  /** Message confirming to delete *named* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_named':
    'Þú ert að fara að eyða skránni <strong>{{filename}}}</strong> og gögnum hennar. Ertu viss?',
  /** Message confirming to delete *unnamed* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_unnamed':
    'Þú ert að fara að eyða skránni og gögnum hennar. Ertu viss?',
  /** Message confirming to delete *named* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_named':
    'Þú ert að fara að eyða myndinni <strong>{{filename}}</strong> og gögnum hennar. Ertu viss?',
  /** Message confirming to delete *unnamed* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_unnamed':
    'Þú ert að fara að eyða myndinni og gögnum hennar. Ertu viss?',
  /** Alt text showing on image preview in delete asset dialog  */
  'asset-source.delete-dialog.usage-list.image-preview-alt': 'Forskoðun myndar',
  /** Warning message showing when *named* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_named':
    '{{filename}} er ekki hægt að eyða því að hún er í notkun. Til að eyða þessari skrá verður þú fyrst að fjarlægja allar notkun hennar.',
  /** Warning message showing when *unnamed* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_unnamed':
    'Þessari skrá er ekki hægt að eyða því að hún er í notkun. Til að eyða henni verður þú fyrst að fjarlægja allar notkun hennar.',
  /** Warning message showing when *named* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_named':
    '{{filename}} er ekki hægt að eyða því að hún er í notkun. Til að eyða þessari mynd verður þú fyrst að fjarlægja allar notkun hennar.',
  /** Warning message showing when *unnamed* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_unnamed':
    'Þessari mynd er ekki hægt að eyða því að hún er í notkun. Til að eyða henni verður þú fyrst að fjarlægja allar notkun hennar.',
  /** Text shown when the list of assets only include a specific set of types */
  'asset-source.dialog.accept-message':
    'Aðeins sýndar eignir af samþykktum gerðum: <strong>{{acceptTypes}}</strong>',
  /** Keys shared between both image asset source and file asset source */
  /** Select asset dialog title for files */
  'asset-source.dialog.default-title_file': 'Veldu skrá',
  /** Select asset dialog title for images */
  'asset-source.dialog.default-title_image': 'Veldu mynd',
  /** Select asset dialog load more items */
  'asset-source.dialog.load-more': 'Hlaða meira',
  /** Text shown when selecting a file but there's no files to select from */
  'asset-source.dialog.no-assets_file': 'Engar skrár',
  /** Text shown when selecting an image but there's no images to select from */
  'asset-source.dialog.no-assets_image': 'Engar myndir',
  'asset-source.file.asset-list.action.delete.disabled-cannot-delete-current-file':
    'Ekki er hægt að eyða valinni skrá núna',
  'asset-source.file.asset-list.action.delete.text': 'Eyða',
  'asset-source.file.asset-list.action.delete.title': 'Eyða skrá',
  'asset-source.file.asset-list.action.select-file.title': 'Veldu skrána {{filename}}',
  'asset-source.file.asset-list.action.show-usage.title': 'Sýna notkun',
  'asset-source.file.asset-list.delete-failed': 'Ekki tókst að eyða skránni',
  'asset-source.file.asset-list.delete-successful': 'Skrá var eytt',
  'asset-source.file.asset-list.header.date-added': 'Dagsetning bætt við',
  /** File asset source */
  'asset-source.file.asset-list.header.filename': 'Skráarnafn',
  'asset-source.file.asset-list.header.size': 'Stærð',
  'asset-source.file.asset-list.header.type': 'Tegund',
  /** Text displayed on button or menu invoking the file asset source */
  'asset-source.file.title': 'Upphlaðnar skrár',
  'asset-source.image.asset-list.delete-failed': 'Ekki tókst að eyða myndinni',
  /** Image asset source */
  'asset-source.image.asset-list.delete-successful': 'Mynd var eytt',
  /** Text displayed on button or menu invoking the image asset source */
  'asset-source.image.title': 'Upphlaðnar myndir',
  'asset-source.usage-list.documents-using-file_named_one':
    'Eitt skjal er að nota skrána <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-file_named_other':
    '{{count}} skjöl eru að nota skrána <code>{{filename}}</code>',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *named* file **/
  'asset-source.usage-list.documents-using-file_named_zero':
    'Engin skjöl eru að nota skrána <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-file_unnamed_one': 'Eitt skjal er að nota þessa skrá',
  'asset-source.usage-list.documents-using-file_unnamed_other':
    '{{count}} skjöl eru að nota þessa skrá',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *unnamed* file **/
  'asset-source.usage-list.documents-using-file_unnamed_zero': 'Engin skjöl eru að nota þessa skrá',
  'asset-source.usage-list.documents-using-image_named_one':
    'Eitt skjal er að nota myndina <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-image_named_other':
    '{{count}} skjöl eru að nota myndina <code>{{filename}}</code>',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *named* image **/
  'asset-source.usage-list.documents-using-image_named_zero':
    'Engin skjöl eru að nota myndina <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-image_unnamed_one': 'Eitt skjal er að nota þessa mynd',
  'asset-source.usage-list.documents-using-image_unnamed_other':
    '{{count}} skjöl eru að nota þessa mynd',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *unnamed* image **/
  'asset-source.usage-list.documents-using-image_unnamed_zero':
    'Engin skjöl eru að nota þessa mynd',

  /** Action message for navigating to next month */
  'calendar.action.go-to-next-month': 'Fara í næsta mánuð',
  /** Action message for navigating to next year */
  'calendar.action.go-to-next-year': 'Fara í næsta ár',
  /** Action message for navigating to previous month */
  'calendar.action.go-to-previous-month': 'Fara í fyrri mánuð',
  /** Action message for navigating to previous year */
  'calendar.action.go-to-previous-year': 'Fara í fyrri ár',
  /* Label for navigating the calendar to "today", without _selecting_ today. Short form, eg `Today`, not `Go to today` */
  'calendar.action.go-to-today': 'Í dag',
  /* Accessibility label for navigating the calendar to "today", without _selecting_ today */
  'calendar.action.go-to-today-aria-label': 'Fara í dag',
  /* Label for navigating the calendar to "tomorrow", without _selecting_ tomorrow. Short form, eg `Tomorrow`, not `Go to tomorrow` */
  'calendar.action.go-to-tomorrow': 'Á morgun',
  /* Label for navigating the calendar to "yesterday", without _selecting_ yesterday. Short form, eg `Yesterday`, not `Go to yesterday` */
  'calendar.action.go-to-yesterday': 'Í gær',
  /** Label for switch that controls whether or not to include time in given timestamp */
  'calendar.action.include-time-label': 'Innifalið tíma',
  /** Action message for selecting the hour */
  'calendar.action.select-hour': 'Veldu klukkustund',
  /** Action message for selecting the minute */
  'calendar.action.select-minute': 'Veldu mínútu',
  /** Action message for setting to the current time */
  'calendar.action.set-to-current-time': 'Stilltu á núverandi tíma',
  /** Label for selecting an hour preset. Receives a `time` param as a string on hh:mm format and a `date` param as a Date instance denoting the preset date */
  'calendar.action.set-to-time-preset': '{{time}} á {{date, datetime}}',
  /** Error message displayed in calendar when entered date is not the correct format */
  'calendar.error.must-be-in-format':
    'Verður að vera á sniðinu <Emphasis>{{exampleDate}}</Emphasis>',
  /** Month name for April */
  'calendar.month-names.april': 'Apríl',
  /** Month name for August */
  'calendar.month-names.august': 'Ágúst',
  /** Month name for December */
  'calendar.month-names.december': 'Desember',
  /** Month name for February */
  'calendar.month-names.february': 'Febrúar',
  /** Month name for January */
  'calendar.month-names.january': 'Janúar',
  /** Month name for July */
  'calendar.month-names.july': 'Júlí',
  /** Month name for June */
  'calendar.month-names.june': 'Júní',
  /** Month name for March */
  'calendar.month-names.march': 'Mars',
  /** Month name for May */
  'calendar.month-names.may': 'Maí',
  /** Month name for November */
  'calendar.month-names.november': 'Nóvember',
  /** Month name for October */
  'calendar.month-names.october': 'Október',
  /** Month name for September */
  'calendar.month-names.september': 'September',
  /** Short weekday name for Friday */
  'calendar.weekday-names.short.friday': 'Fös',
  /** Short weekday name for Monday */
  'calendar.weekday-names.short.monday': 'Mán',
  /** Short weekday name for Saturdayday */
  'calendar.weekday-names.short.saturday': 'Lau',
  /** Short weekday name for Sunday */
  'calendar.weekday-names.short.sunday': 'Sun',
  /** Short weekday name for Thursday */
  'calendar.weekday-names.short.thursday': 'Fim',
  /** Short weekday name for Tuesday */
  'calendar.weekday-names.short.tuesday': 'Þri',
  /** Short weekday name for Wednesday */
  'calendar.weekday-names.short.wednesday': 'Mið',

  /** Label for the close button label in Review Changes pane */
  'changes.action.close-label': 'Loka endurskoðun breytinga',
  /** Cancel label for revert button prompt action */
  'changes.action.revert-all-cancel': 'Hætta við',
  /** Revert all confirm label for revert button action - used on prompt button + review changes pane */
  'changes.action.revert-all-confirm': 'Afturkalla allt',
  /** Prompt for confirming revert change (singular) label for field change action */
  'changes.action.revert-changes-confirm-change_one': 'Afturkalla breytingu',
  /** Revert for confirming revert (plural) label for field change action */
  'changes.action.revert-changes-confirm-change_other': 'Afturkalla breytingar',
  /** Prompt for reverting changes for a field change */
  'changes.action.revert-changes-description':
    'Ertu viss um að þú viljir afturkalla breytingarnar?',
  /** Prompt for reverting changes for a group change, eg multiple changes */
  'changes.action.revert-changes-description_one':
    'Ertu viss um að þú viljir afturkalla breytinguna?',
  /** Label for when the action of the change was to set something that was previously empty, eg a field was given a value, an array item was added, an asset was selected or similar */
  'changes.added-label': 'Bætt við',
  /** Array diff: An item was added in a given position (`{{position}}`) */
  'changes.array.item-added-in-position': 'Bætt við í stöðu {{position}}',
  'changes.array.item-moved_down_one': 'Færð {{count}} sæti niður',
  'changes.array.item-moved_down_other': 'Færð {{count}} sæti niður',
  /**
   * Array diff: An item was moved within the array.
   * Receives `{{count}}` representing number of positions it moved.
   * Context is the direction of the move, either `up` or `down`.
   */
  'changes.array.item-moved_up_one': 'Færð {{count}} sæti upp',
  'changes.array.item-moved_up_other': 'Færð {{count}} sæti upp',
  /** Array diff: An item was removed from a given position (`{{position}}`) */
  'changes.array.item-removed-from-position': 'Fjarlægt úr stöðu {{position}}',
  /** Accessibility label for the "change bar" shown when there are edits on a field-level */
  'changes.change-bar.aria-label': 'Endurskoða breytingar',
  /** Label for when the action of the change was _not_ an add/remove, eg a text field changed value, an image was changed from one asset to another or similar */
  'changes.changed-label': 'Breytt',
  /** Label and text for tooltip that indicates the authors of the changes */
  'changes.changes-by-author': 'Breytingar eftir',
  /** Additional text shown in development mode when a diff component crashes during rendering */
  'changes.error-boundary.developer-info': 'Athugaðu þróunarvalmyndina fyrir frekari upplýsingar',
  /** Text shown when a diff component crashes during rendering, triggering the error boundary */
  'changes.error-boundary.title': 'Það kom upp villa við að sýna breytingarnar á þessu sviði',
  /** Error message shown when the value of a field is not the expected one */
  'changes.error.incorrect-type-message':
    'Gildisvilla: Gildið er af gerðinni "<code>{{actualType}}</code>", búist var við "<code>{{expectedType}}</code>"',
  /** File diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.file.meta-info-fallback-title': 'Titilllaus',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.crop-changed': 'Útskurður breytt',
  /** Image diff: Text shown if the previous image asset was deleted (shouldn't theoretically happen) */
  'changes.image.deleted': 'Mynd eytt',
  /** Image diff: Text shown if the image failed to be loaded when previewing it */
  'changes.image.error-loading-image': 'Villa við að hlaða mynd',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.hotspot-changed': 'Brennidepill breytt',
  /** Image diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.image.meta-info-fallback-title': 'Titilllaus',
  /** Image diff: Text shown if no asset has been set for the field (but has metadata changes) */
  'changes.image.no-asset-set': 'Engin mynd sett',
  /** Image diff: Text shown when the from/to state has/had no image */
  'changes.image.no-image-placeholder': '(engin mynd)',
  /** Label for the "from" value in the change inspector */
  'changes.inspector.from-label': 'Frá',
  /** Label for the "meta" (field path, action etc) information in the change inspector */
  'changes.inspector.meta-label': 'Meta',
  /** Label for the "to" value in the change inspector */
  'changes.inspector.to-label': 'Til',
  /** Loading author of change in the differences tooltip in the review changes pane */
  'changes.loading-author': 'Hleður…',
  /** Loading changes in Review Changes Pane */
  'changes.loading-changes': 'Hleður breytingum…',
  /** No Changes description in the Review Changes pane */
  'changes.no-changes-description':
    'Breyttu skjalinu eða veldu eldri útgáfu í tímalínunni til að sjá lista yfir breytingar birtast á þessum glugga.',
  /** No Changes title in the Review Changes pane */
  'changes.no-changes-title': 'Engar breytingar eru til staðar',
  /** Portable Text diff: An annotation was added */
  'changes.portable-text.annotation_added': 'Bætti við skýringu',
  /** Portable Text diff: An annotation was changed */
  'changes.portable-text.annotation_changed': 'Breytti skýringu',
  /** Portable Text diff: An annotation was removed */
  'changes.portable-text.annotation_removed': 'Fjarlægði skýringu',
  /** Portable Text diff: An annotation was left unchanged */
  'changes.portable-text.annotation_unchanged': 'Óbreytt skýring',
  /** Portable Text diff: A block changed from one style to another (eg `normal` to `h1` or similar) */
  'changes.portable-text.block-style-changed':
    'Breytti blokkstíl frá "{{fromStyle}}" til "{{toStyle}}"',
  /** Portable Text diff: Change formatting of text (setting/unsetting marks, eg bold/italic etc) */
  'changes.portable-text.changed-formatting': 'Breytt snið',
  /** Portable Text diff: An empty inline object is part of a change */
  'changes.portable-text.empty-inline-object': 'Tómt {{inlineObjectType}}',
  /** Portable Text diff: An empty object is the result of adding/removing an annotation */
  'changes.portable-text.empty-object-annotation': 'Tómt {{annotationType}}',
  /** Portable Text diff: Added a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_added': 'Bætti við tómum texta',
  /** Portable Text diff: Changed a block that contained no text (eg empty block) */
  'changes.portable-text.empty-text_changed': 'Breytti tómum texta',
  /** Portable Text diff: Removed a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_removed': 'Fjarlægði tóman texta',
  /** Portable Text diff: An inline object was added */
  'changes.portable-text.inline-object_added': 'Bætti við innlínu hlut',
  /** Portable Text diff: An inline object was changed */
  'changes.portable-text.inline-object_changed': 'Breytti innlínu hlut',
  /** Portable Text diff: An inline object was removed */
  'changes.portable-text.inline-object_removed': 'Fjarlægði innlínu hlut',
  /** Portable Text diff: An inline object was left unchanged */
  'changes.portable-text.inline-object_unchanged': 'Óbreyttur innlínu hlutur',
  /** Portable Text diff: Added a chunk of text */
  'changes.portable-text.text_added': 'Bætti við texta',
  /** Portable Text diff: Removed a chunk of text */
  'changes.portable-text.text_removed': 'Fjarlægði texta',
  /** Portable Text diff: Annotation has an unknown schema type */
  'changes.portable-text.unknown-annotation-schema-type': 'Óþekkt skema týpa',
  /** Portable Text diff: Inline object has an unknown schema type */
  'changes.portable-text.unknown-inline-object-schema-type': 'Óþekkt skema týpa',
  /** Label for when the action of the change was a removal, eg a field was cleared, an array item was removed, an asset was deselected or similar */
  'changes.removed-label': 'Fjarlægt',
  /** Title for the Review Changes pane */
  'changes.title': 'Endurskoða breytingar',

  /** --- Common components --- */
  /** Tooltip text for context menu buttons */
  'common.context-menu-button.tooltip': 'Sýna meira',
  /** Default text for dialog cancel button */
  'common.dialog.cancel-button.text': 'Hætta við',
  /** Default text for dialog confirm button */
  'common.dialog.confirm-button.text': 'Staðfesta',
  /** Default text in shared loader text / spinner lockup */
  'common.loading': 'Hleður',

  /** --- Configuration issues --- */
  /** Tooltip displayed on configuration issues button */
  'configuration-issues.button.tooltip': 'Fundin stillingarvandamál',

  /** The fallback title for an ordering menu item if no localized titles are provided. */
  'default-menu-item.fallback-title': 'Raða eftir {{title}}',

  /** Title for the default ordering/SortOrder if no orderings are provided and the caption field is found */
  'default-orderings.caption': 'Raða eftir Yfirskrift',
  /** Title for the default ordering/SortOrder if no orderings are provided and the description field is found */
  'default-orderings.description': 'Raða eftir Lýsingu',
  /** Title for the default ordering/SortOrder if no orderings are provided and the header field is found */
  'default-orderings.header': 'Raða eftir Haus',
  /** Title for the default ordering/SortOrder if no orderings are provided and the heading field is found */
  'default-orderings.heading': 'Raða eftir Fyrirsögn',
  /** Title for the default ordering/SortOrder if no orderings are provided and the label field is found */
  'default-orderings.label': 'Raða eftir Merki',
  /** Title for the default ordering/SortOrder if no orderings are provided and the name field is found */
  'default-orderings.name': 'Raða eftir Nafni',
  /** Title for the default ordering/SortOrder if no orderings are provided and the title field is found */
  'default-orderings.title': 'Raða eftir Titli',

  /** Label to show in the document footer indicating the last edited date of the document */
  'document-status.edited': 'Breytt {{date}}',
  /** Label to show in the document footer indicating the document is not published*/
  'document-status.not-published': 'Óbirt',
  /** Label to show in the document footer indicating the published date of the document */
  'document-status.published': 'Birt {{date}}',

  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.duplicate-keys-alert.details.additional-description':
    'Gildi <code>_key</code> eiginleikans verður að vera einstakt strengur.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property of each elements has been generated non-uniquely. */
  'form.error.duplicate-keys-alert.details.description':
    'Þetta gerist venjulega þegar atriði eru búin til með API viðskiptavini, og <code>_key</code> eiginleiki hvers elements hefur verið búinn til ekki-einstaklega.',
  /** Developer info */
  'form.error.duplicate-keys-alert.details.title': 'Upplýsingar fyrir þróunaraðila',
  /** Generate unique keys */
  'form.error.duplicate-keys-alert.generate-button.text': 'Búa til einstaka lykla',
  /** Several items in this list share the same identifier (key). Every item must have an unique identifier. */
  'form.error.duplicate-keys-alert.summary':
    'Mörg atriði í þessum lista deila sama auðkenni (lykil). Hvert atriði verður að hafa einstakt auðkenni.',
  /** Non-unique keys */
  'form.error.duplicate-keys-alert.title': 'Ekki-einstakir lyklar',
  /** Error text shown when a field with a given name cannot be found in the schema or is conditionally hidden but explicitly told to render  */
  'form.error.field-not-found':
    'Reitur "{{fieldName}}" fannst ekki meðal meðlima – staðfestu að hann sé skilgreindur í skemanu og að hann hafi ekki verið skilyrðisbundið falinn.',
  /** Add missing keys */
  'form.error.missing-keys-alert.add-button.text': 'Bæta við vöntun lyklum',
  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.missing-keys-alert.details.additional-description':
    'Gildi <code>_key</code> eiginleikans verður að vera einstakt strengur.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property has not been included. */
  'form.error.missing-keys-alert.details.description':
    'Þetta gerist venjulega þegar atriði eru búin til með API viðskiptavini, og <code>_key</code> eignin hefur ekki verið innifalin.',
  /** Developer info */
  'form.error.missing-keys-alert.details.title': 'Upplýsingar fyrir þróunaraðila',
  /** Some items in the list are missing their keys. This must be fixed in order to edit the list. */
  'form.error.missing-keys-alert.summary':
    'Sumum atriðum í listanum vantar lykla. Þetta verður að laga til að geta breytt listanum.',
  /** Missing keys */
  'form.error.missing-keys-alert.title': 'Vantar lykla',
  /** This usually happens when items are created using an API client, or when a custom input component has added invalid data to the list. */
  'form.error.mixed-array-alert.details.description':
    'Þetta gerist venjulega þegar atriði eru búin til með API viðskiptavini, eða þegar sérsniðinn inntaksþáttur hefur bætt ógildum gögnum við listann.',
  /** Developer info */
  'form.error.mixed-array-alert.details.title': 'Upplýsingar fyrir þróunaraðila',
  /**  Remove non-object values */
  'form.error.mixed-array-alert.remove-button.text': 'Fjarlægja gildi sem eru ekki hlutir',
  /** Some items in this list are not objects. This must be fixed in order to edit the list. */
  'form.error.mixed-array-alert.summary':
    'Sum atriði í þessum lista eru ekki hlutir. Þetta verður að laga til að geta breytt listanum.',
  /** Invalid list values */
  'form.error.mixed-array-alert.title': 'Ógild gildi í lista',
  /** Error text shown when form is unable to find an array item at a given indexed path */
  'form.error.no-array-item-at-index':
    'Engin atriði í fylki fundust á vísitölu <code>{{index}}</code> á slóð <code>{{path}}</code>',
  /** Error text shown when form is unable to find an array item at a given keyed path */
  'form.error.no-array-item-at-key':
    'Engin atriði í fylki með `_key` <code>"{{key}}"</code> fundust á slóð <code>{{path}}</code>',
  /** Form field deprecated label */
  'form.field.deprecated-label': 'úrelt',
  /** Fallback title shown above field if it has no defined title */
  'form.field.untitled-field-label': 'Án titils',
  /** Fallback title shown above fieldset if it has no defined title */
  'form.field.untitled-fieldset-label': 'Án titils',
  /** Accessibility label for the icon that indicates the field has a validation error */
  'form.validation.has-error-aria-label': 'Inniheldur villu',
  /** Accessibility label for the icon that indicates the field has validation information */
  'form.validation.has-info-aria-label': 'Inniheldur upplýsingar',
  /** Accessibility label for the icon that indicates the field has a validation warning */
  'form.validation.has-warning-aria-label': 'Inniheldur viðvörun',
  /** Text shown when summarizing validation information, when the field has one or more errors */
  'form.validation.summary.errors-count_one': '{{count}} villa',
  'form.validation.summary.errors-count_other': '{{count}} villur',
  /** Text shown when summarizing validation information, when the field has one or more warnings */
  'form.validation.summary.warnings-count_one': '{{count}} viðvörun',
  'form.validation.summary.warnings-count_other': '{{count}} viðvaranir',

  /** Tooltip for free trial navbar button indicating remaining days */
  'free-trial.tooltip.days-count_one': '{{count}} dagur eftir af prufutímanum',
  'free-trial.tooltip.days-count_other': '{{count}} dagar eftir af prufutímanum',
  /** Tooltip for free trial navbar button, once trial has ended */
  'free-trial.tooltip.trial-finished': 'Uppfærðu verkefnið þitt',

  /**
   * Label for "contact sales" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.contact-sales': 'Hafðu samband við söludeild',
  /**
   * Label for "help and support" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.help-and-support': 'Hjálp og stuðningur',
  /**
   * Label for "join our community" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.join-our-community': 'Vertu með í samfélagi okkar',
  /** Information for what the latest sanity version is */
  'help-resources.latest-sanity-version': 'Nýjasta útgáfan er {{latestVersion}}',
  /** Information for what studio version the current studio is running */
  'help-resources.studio-version': 'Útgáfa af Sanity Studio {{studioVersion}}',
  /** Title for help and resources menus */
  'help-resources.title': 'Hjálp og auðlindir',

  /** Text for button to cancel an ongoing upload */
  'input.files.common.cancel-upload': 'Hætta við',
  /** Text for file input button in upload placeholder */
  'input.files.common.upload-placeholder.file-input-button.text': 'Hlaða upp',
  /** Uploading <FileName/> */
  'input.files.common.upload-progress': 'Hleður upp <FileName/>',
  /** The referenced document cannot be opened, because the URL failed to be resolved */
  'input.reference.document-cannot-be-opened.failed-to-resolve-url':
    'Ekki er hægt að opna þetta skjal (ekki er hægt að leysa úr URL til Studio)',

  /** Label for adding item after a specific array item */
  'inputs.array.action.add-after': 'Bæta við atriði á eftir',
  /** Label for adding item before a specific array item */
  'inputs.array.action.add-before': 'Bæta við atriði á undan',
  /** Label for adding array item action when the schema allows for only one schema type */
  'inputs.array.action.add-item': 'Bæta við atriði',
  /**
   * Label for adding one array item action when the schema allows for multiple schema types,
   * eg. will prompt the user to select a type once triggered
   */
  'inputs.array.action.add-item-select-type': 'Bæta við atriði...',
  /** Array drag handle button tooltip */
  'inputs.array.action.drag.tooltip': 'Dragðu til að raða',
  /** Label for duplicating an array item  */
  'inputs.array.action.duplicate': 'Tvöfalda',
  /** Label for editing the item of a specific type, eg "Edit Person" */
  'inputs.array.action.edit': 'Breyta {{itemTypeTitle}}',
  /** Label for removing an array item action  */
  'inputs.array.action.remove': 'Fjarlægja',
  /** Label for removing action when an array item has an error  */
  'inputs.array.action.remove-invalid-item': 'Fjarlægja',
  /** Label for viewing the item of a specific type, eg "View Person" */
  'inputs.array.action.view': 'Skoða {{itemTypeTitle}}',
  /** Error description for the array item tooltip that explains that the current item can still be moved or deleted but not edited since the schema definition is not found */
  'inputs.array.error.can-delete-but-no-edit-description':
    'Þú getur enn fært eða eytt þessu atriði, en það er ekki hægt að breyta því þar sem skilgreining á gerð þess í skema finnst hvergi.',
  /** Error label for toast when array could not resolve the initial value */
  'inputs.array.error.cannot-resolve-initial-value-title':
    'Ekki er hægt að leysa úr upphaflegu gildi fyrir gerð: {{schemaTypeTitle}}: {{errorMessage}}.',
  /** Error label for toast when trying to upload one array item of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_one':
    'Eftirfarandi atriði er ekki hægt að hlaða upp þar sem engin þekkt umbreyting er frá efni til atriðis í fylki:',
  /** Error label for toast when trying to upload multiple array items of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_other':
    'Eftirfarandi atriði er ekki hægt að hlaða upp þar sem engin þekkt umbreyting er frá efni til atriða í fylki:',
  /** Error description for the array item tooltip that explains that the current type item is not valid for the list  */
  'inputs.array.error.current-schema-not-declare-description':
    'Núverandi skema lýsir ekki yfir atriðum af gerð <code>{{typeName}}</code> sem gild fyrir þennan lista. Þetta gæti þýtt að gerðin hefur verið fjarlægð sem gild atriði, eða að einhver annar hefur bætt henni við sitt eigið staðbundið skema sem er ekki enn útgefið.',
  /** Error description to show how the item is being represented in the json format */
  'inputs.array.error.json-representation-description': 'JSON framsetning á þessu atriði:',
  /** Error description for the array item tooltip that explains what the error means with more context */
  'inputs.array.error.type-is-incompatible-prompt':
    'Atriði af gerð <code>{{typeName}}</code> er ekki gild fyrir þennan lista',
  /** Error title for when an item type within an array input is incompatible, used in the tooltip */
  'inputs.array.error.type-is-incompatible-title': 'Af hverju er þetta að gerast?',
  /** Error label for unexpected errors in the Array Input */
  'inputs.array.error.unexpected-error': 'Óvænt villa: {{error}}',
  /** Label for when the array input doesn't have any items */
  'inputs.array.no-items-label': 'Engin atriði',
  /** Label for read only array fields */
  'inputs.array.read-only-label': 'Þetta svæði er aðeins til lesturs',
  /** Label for when the array input is resolving the initial value for the item */
  'inputs.array.resolving-initial-value': 'Leysir úr upphaflegu gildi…',
  /** Placeholder value for datetime input */
  'inputs.datetime.placeholder': 't.d. {{example}}',
  /** Acessibility label for button to open file options menu */
  'inputs.file.actions-menu.file-options.aria-label': 'Opna valmynd fyrir skráarvalkosti',
  /** Browse */
  'inputs.file.browse-button.text': 'Fletta',
  /** Select file */
  'inputs.file.dialog.title': 'Veldu skrá',
  /** Unknown member kind: `{{kind}}` */
  'inputs.file.error.unknown-member-kind': 'Óþekkt tegund meðlims: {{kind}}',
  /** The value of this field is not a valid file. Resetting this field will let you choose a new file. */
  'inputs.file.invalid-file-warning.description':
    'Gildi þessa reits er ekki gild skrá. Endurstilling á þessum reit mun leyfa þér að velja nýja skrá.',
  /** Reset value */
  'inputs.file.invalid-file-warning.reset-button.text': 'Endurstilla gildi',
  /** Invalid file value */
  'inputs.file.invalid-file-warning.title': 'Ógilt skráargildi',
  /** Select */
  'inputs.file.multi-browse-button.text': 'Veldu',
  /** The upload could not be completed at this time. */
  'inputs.file.upload-failed.description': 'Ekki var hægt að ljúka upphleðslu á þessum tíma.',
  /** Upload failed */
  'inputs.file.upload-failed.title': 'Upphleðsla mistókst',
  /** Clear field */
  'inputs.files.common.actions-menu.clear-field.label': 'Hreinsa reit',
  /** Copy URL */
  'inputs.files.common.actions-menu.copy-url.label': 'Afrita vefslóð',
  /** Download */
  'inputs.files.common.actions-menu.download.label': 'Sækja',
  /** The URL is copied to the clipboard */
  'inputs.files.common.actions-menu.notification.url-copied': 'Vefslóð er afrituð á klippiborð',
  /** Replace */
  'inputs.files.common.actions-menu.replace.label': 'Skipta út',
  /** Upload */
  'inputs.files.common.actions-menu.upload.label': 'Hlaða upp',
  /** Drop to upload */
  'inputs.files.common.drop-message.drop-to-upload': 'Slepptu til að hlaða upp',
  /** Drop to upload `{{count}}` file */
  'inputs.files.common.drop-message.drop-to-upload-multi_one':
    'Slepptu til að hlaða upp {{count}} skrá',
  /** Drop to upload `{{count}}` files */
  'inputs.files.common.drop-message.drop-to-upload-multi_other':
    'Slepptu til að hlaða upp {{count}} skrár',
  /** Can't upload this file here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_one':
    'Ekki er hægt að hlaða þessari skrá hér',
  /** Can't upload any of these files here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_other':
    'Ekki er hægt að hlaða neinni af þessum skrám hér',
  /** `{{count}}` file can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_one':
    '{{count}} skrá getur ekki verið hlaðið hér upp',
  /** `{{count}}` files can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_other':
    '{{count}} skrár geta ekki verið hlaðnar hér upp',
  /** Cannot upload `{{count}}` files */
  'inputs.files.common.placeholder.cannot-upload-some-files_one': 'Get ekki hlaðið upp skrá',
  'inputs.files.common.placeholder.cannot-upload-some-files_other':
    'Get ekki hlaðið upp {{count}} skrám',
  /** Drag or paste type here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_file': 'Dragðu eða límdu skrá hér',
  /** Drag or paste image here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_image': 'Dragðu eða límdu mynd hér',
  /** Drop to upload file */
  'inputs.files.common.placeholder.drop-to-upload_file': 'Slepptu til að hlaða upp skrá',
  /** Drop to upload image */
  'inputs.files.common.placeholder.drop-to-upload_image': 'Slepptu til að hlaða upp mynd',
  /** Read only */
  'inputs.files.common.placeholder.read-only': 'Aðeins til lesturs',
  /** Can't upload files here */
  'inputs.files.common.placeholder.upload-not-supported': 'Get ekki hlaðið upp skrám hér',
  /** Clear upload */
  'inputs.files.common.stale-upload-warning.clear': 'Hreinsa upphleðslu',
  /** An upload has made no progress for at least `{{staleThresholdMinutes}}` minutes and likely got interrupted. You can safely clear the incomplete upload and try uploading again. */
  'inputs.files.common.stale-upload-warning.description':
    'Upphleðsla hefur ekki miðað neinum framförum í að minnsta kosti {{staleThresholdMinutes}} mínútur og líklega var truflun. Þú getur örugglega hreinsað ókláraða upphleðslu og reynt aftur að hlaða upp.',
  /** Incomplete upload */
  'inputs.files.common.stale-upload-warning.title': 'Ókláruð upphleðsla',
  /** Tooltip text for action to crop image */
  'inputs.image.actions-menu.crop-image-tooltip': 'Klippa mynd',
  /** Accessibility label for button to open image edit dialog */
  'inputs.image.actions-menu.edit-details.aria-label': 'Opna myndabreytingarglugga',
  /** Accessibility label for button to open image options menu */
  'inputs.image.actions-menu.options.aria-label': 'Opna valmynd myndarvalkosta',
  /** Select */
  'inputs.image.browse-menu.text': 'Veldu',
  /** Cannot upload this file here */
  'inputs.image.drag-overlay.cannot-upload-here': 'Get ekki hlaðið þessari skrá hér',
  /** Drop image to upload */
  'inputs.image.drag-overlay.drop-to-upload-image': 'Slepptu mynd til að hlaða upp',
  /** This field is read only */
  'inputs.image.drag-overlay.this-field-is-read-only': 'Þetta svæði er aðeins til lesturs',
  /** Unknown member kind: `{{kind}}` */
  'inputs.image.error.unknown-member-kind': 'Óþekkt tegund meðlims: {{kind}}',
  /** Edit hotspot and crop */
  'inputs.image.hotspot-dialog.title': 'Breyta brennidepli og klippa',
  /** The value of this field is not a valid image. Resetting this field will let you choose a new image. */
  'inputs.image.invalid-image-warning.description':
    'Gildi þessa reits er ekki gild mynd. Endurstilling þessa reits mun leyfa þér að velja nýja mynd.',
  /** Reset value */
  'inputs.image.invalid-image-warning.reset-button.text': 'Endurstilla gildi',
  /** Invalid image value */
  'inputs.image.invalid-image-warning.title': 'Ógild myndagildi',
  /** Preview of uploaded image */
  'inputs.image.preview-uploaded-image': 'Forskoðun á hlaðinni mynd',
  /** The upload could not be completed at this time. */
  'inputs.image.upload-error.description': 'Upphleðslan gat ekki verið lokið að þessu sinni.',
  /** Upload failed */
  'inputs.image.upload-error.title': 'Upphleðsla mistókst',
  /** Adjust the rectangle to crop image. Adjust the circle to specify the area that should always be visible. */
  'inputs.imagetool.description':
    'Stilltu ferninginn til að skera myndina. Stilltu hringinn til að tilgreina svæðið sem ætti alltaf að vera sýnilegt.',
  /** Error: `{{errorMessage}}` */
  'inputs.imagetool.load-error': 'Villa: {{errorMessage}}',
  /** Hotspot & Crop */
  'inputs.imagetool.title': 'Hotspot & Crop',
  /** Convert to `{{targetType}}` */
  'inputs.invalid-value.convert-button.text': 'Breyta í <code>{{targetType}}</code>',
  /** The current value (<code>`{{actualType}}`</code>) */
  'inputs.invalid-value.current-type': 'Núverandi gildi (<code>{{actualType}}</code>)',
  /** The property value is stored as a value type that does not match the expected type. */
  'inputs.invalid-value.description':
    'Eignagildið er geymt sem gildistegund sem passar ekki við vænta tegund.',
  /** The value of this property must be of type <code>`{{validType}}`</code> according to the schema. */
  'inputs.invalid-value.details.description':
    'Gildi þessarar eignar verður að vera af tegund <code>{{validType}}</code> samkvæmt skemanu.',
  /** Only the following types are valid here according to schema: */
  'inputs.invalid-value.details.multi-type-description':
    'Aðeins eftirfarandi tegundir eru gildar hér samkvæmt skema:',
  /** Mismatching value types typically occur when the schema has recently been changed. */
  'inputs.invalid-value.details.possible-reason':
    'Mismatching gildistegundir koma yfirleitt fyrir þegar skema hefur nýlega verið breytt.',
  /** Developer info */
  'inputs.invalid-value.details.title': 'Upplýsingar fyrir þróunaraðila',
  /** -- Invalid Value Input -- */
  /** Reset value */
  'inputs.invalid-value.reset-button.text': 'Endurstilla gildi',
  /** Invalid property value */
  'inputs.invalid-value.title': 'Ógilt eignagildi',
  /** Field groups */
  'inputs.object.field-group-tabs.aria-label': 'Hópar reita',
  /** Read-only field description */
  'inputs.object.unknown-fields.read-only.description':
    'Þessi reitur er <strong>aðeins til lesturs</strong> samkvæmt skema skjalsins og getur ekki verið óskilgreindur. Ef þú vilt geta óskilgreint þetta í Studio, vertu viss um að fjarlægja <code>readOnly</code> reitinn frá umlykjandi tegund í skemanu.',
  /** Remove field */
  'inputs.object.unknown-fields.remove-field-button.text': 'Fjarlægja reit',
  /** Encountered `{{count}}` fields that are not defined in the schema. */
  'inputs.object.unknown-fields.warning.description_one':
    'Rekur sig á reit sem er ekki skilgreindur í skemanu.',
  'inputs.object.unknown-fields.warning.description_other':
    'Rekur sig á {{count}} reiti sem eru ekki skilgreindir í skemanu.',
  /** Detailed description of unknown field warning */
  'inputs.object.unknown-fields.warning.details.description_one':
    'Þessi reitur er ekki skilgreindur í skemanu, sem gæti þýtt að reitaskilgreiningunni hefur verið fjarlægt eða að einhver annar hefur bætt henni við sitt eigið staðbundið verkefni og hefur ekki enn útflutt breytingar sínar.',
  'inputs.object.unknown-fields.warning.details.description_other':
    'Þessir reitir eru ekki skilgreindir í skema skjalsins, sem gæti þýtt að reitaskilgreiningunum hefur verið fjarlægt eða að einhver annar hefur bætt þeim við sitt eigið staðbundið verkefni og hefur ekki enn útflutt breytingar sínar.',
  /** Developer info */
  'inputs.object.unknown-fields.warning.details.title': 'Upplýsingar fyrir þróunaraðila',
  /** Unknown field found */
  'inputs.object.unknown-fields.warning.title_one': 'Óþekktur reitur fundinn',
  'inputs.object.unknown-fields.warning.title_other': 'Óþekktir reitir fundnir',
  /** Collapse the editor to save screen space  */
  'inputs.portable-text.action.collapse-editor': 'Fella saman ritilinn',
  /** Aria label for action to edit an existing annotation */
  'inputs.portable-text.action.edit-annotation-aria-label': 'Breyta athugasemd',
  /** Expand the editor to give more editing space */
  'inputs.portable-text.action.expand-editor': 'Stækka ritil',
  /** Label label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block': 'Setja inn {{typeName}}',
  /** Accessibility label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block-aria-label': 'Setja inn {{typeName}} (blokk)',
  /** Label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object': 'Setja inn {{typeName}}',
  /** Accessibility label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object-aria-label': 'Setja inn {{typeName}} (innlína)',
  /** Aria label for action to remove an annotation */
  'inputs.portable-text.action.remove-annotation-aria-label': 'Fjarlægja athugasemd',
  /** Label for activate on focus with context of click and not focused */
  'inputs.portable-text.activate-on-focus-message_click': 'Smelltu til að virkja',
  /** Label for activate on focus with context of click and focused */
  'inputs.portable-text.activate-on-focus-message_click-focused':
    'Smelltu eða ýttu á bil til að virkja',
  /** Label for activate on focus with context of tap and not focused */
  'inputs.portable-text.activate-on-focus-message_tap': 'Ýttu til að virkja',
  /**Aria label for the annotation object */
  'inputs.portable-text.annotation-aria-label': 'Athugasemdahlutur',
  /** Title for dialog that allows editing an annotation */
  'inputs.portable-text.annotation-editor.title': 'Breyta {{schemaType}}',
  /** Title of the default "link" annotation */
  'inputs.portable-text.annotation.link': 'Hlekkur',
  /**Aria label for the block object */
  'inputs.portable-text.block.aria-label': 'Blokka hlutur',
  /** Label for action to edit a block item, in the case where it is editable */
  'inputs.portable-text.block.edit': 'Breyta',
  /** Accessibility label for the button that opens the actions menu on blocks */
  'inputs.portable-text.block.open-menu-aria-label': 'Opna valmynd',
  /** Label for action to open a reference, in the case of block-level reference types */
  'inputs.portable-text.block.open-reference': 'Opna tilvísun',
  /** Label for action to remove a block item */
  'inputs.portable-text.block.remove': 'Fjarlægja',
  /** Label for action to view a block item, in the case where it is read-only and thus cannot be edited */
  'inputs.portable-text.block.view': 'Skoða',
  /** Title of the "code" decorator */
  'inputs.portable-text.decorator.code': 'Kóði',
  /** Title of the "em" (emphasis) decorator */
  'inputs.portable-text.decorator.emphasis': 'Skáletrun',
  /** Title of the "strike-through" decorator */
  'inputs.portable-text.decorator.strike-through': 'Yfirstrika',
  /** Title of the "strong" decorator */
  'inputs.portable-text.decorator.strong': 'Feitletrun',
  /** Title of the "underline" decorator */
  'inputs.portable-text.decorator.underline': 'Undirstrika',
  /** Placeholder text for when the editor is empty */
  'inputs.portable-text.empty-placeholder': 'Tómt',
  /**Aria label for the block object */
  'inputs.portable-text.inline-block.aria-label': 'Innri hlutur',
  /** Label for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit': 'Breyta hlut',
  /** Aria label for icon for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit-aria-label': 'Breyta hlut',
  /** Label for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove': 'Fjarlægja hlut',
  /** Aria label for icon for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove-aria-label': 'Fjarlægja hlut',
  /** Disclaimer text shown on invalid Portable Text value, when an action is available to unblock the user, but it is not guaranteed to be safe */
  'inputs.portable-text.invalid-value.action-disclaimer':
    'ATH: Það er yfirleitt öruggt að framkvæma aðgerðina hér að ofan, en ef þú ert í vafa, hafðu samband við þá sem bera ábyrgð á uppsetningu stúdíóins þíns.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.action': 'Fjarlægðu hlutinn',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.description':
    'Barn með lykil {{childKey}} í blokk með lykil <code>{{key}}</code> er af gerð <code>{{childType}}</code>, sem er ekki leyft samkvæmt skemanum.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.action': 'Fjarlægðu blokkina',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.description':
    'Blokk með lykil <code>{{key}}</code> er af gerð <code>{{typeName}}</code>, sem er ekki leyft samkvæmt skemanum.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.action': 'Settu inn tóman textaspönn',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.description':
    'Textablokk með lykil <code>{{key}}</code> hefur enga textaspönn.',
  /** Label for the button to ignore invalid values in the Portable Text editor */
  'inputs.portable-text.invalid-value.ignore-button.text': 'Hunsa',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.action':
    'Nota gerð <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.description':
    'Blokk með lykil <code>{{key}}</code> hefur ógilt gerðarnafn. Samkvæmt skemanum ætti það að vera <code>{{expectedTypeName}}</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.action': 'Settu tómt textagildi',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.description':
    'Spönn með lykil {{childKey}} í blokk með lykil <code>{{key}}</code> hefur vantað eða ógilt <code>text</code> eign.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.action':
    'Nota gerð <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.description':
    'Blokk með lykil <code>{{key}}</code> vantar gerðarnafn. Samkvæmt skemanum ætti það að vera <code>{{expectedTypeName}}</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.action': 'Úthluta handahófskenndum lykli',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.description':
    'Barn á vísitölu <code>{{index}}</code> í blokk með lykil <code>{{key}}</code> vantar <code>_key</code> eign.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.action': 'Fjarlægðu hlutinn',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.description':
    'Barn með lykil {{childKey}} í blokk með lykil <code>{{key}}</code> vantar <code>_type</code> eign.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.action': 'Úthluta handahófskenndum lykli',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.description':
    'Blokk á vísitölu <code>{{index}}</code> vantar nauðsynlega <code>_key</code> eign.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.action': 'Fjarlægðu blokkina',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.description':
    'Textablokk með lykil <code>{{key}}</code> hefur ógilda eða vantað `children` eign.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.action': 'Bæta við eign',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.description':
    'Textablokk með lykil <code>{{key}}</code> hefur ógilda eða vantað `markDefs` eign.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.action': 'Fjarlægðu blokkina',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.description':
    'Blokk með lykil <code>{{key}}</code> vantar gerðarnafn.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.action': 'Fjarlægja hlutinn',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.description':
    'Barn í sæti <code>{{index}}</code> blokkar með lykil <code>{{key}}</code> er ekki hlutur.',
  /** Action presented when the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.action': 'Fjarlægja gildið',
  /** Text explaining that the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.description':
    'Gildið verður að vera fylki af Portable Text blokkum, eða óskilgreint.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.action': 'Fjarlægja hlut',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.description':
    'Hlutur í <code>{{index}}</code> er ekki hlutur,.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.action': 'Fjarlægja óleyfileg merki',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.description':
    'Textablokk með lykil <code>{{key}}</code> inniheldur merki <code>({{orphanedMarks, list}})</code> sem eru ekki leyfð af skemanu.',
  /** Title for the alert indicating that the Portable Text field has an invalid value */
  'inputs.portable-text.invalid-value.title': 'Ógilt Portable Text gildi',
  /** Title of "bulleted" list type */
  'inputs.portable-text.list-type.bullet': 'Punktalisti',
  /** Title of numbered list type */
  'inputs.portable-text.list-type.number': 'Númeraður listi',
  /** Title of the "h1" block style */
  'inputs.portable-text.style.h1': 'Fyrirsögn 1',
  /** Title of the "h2" block style */
  'inputs.portable-text.style.h2': 'Fyrirsögn 2',
  /** Title of the "h3" block style */
  'inputs.portable-text.style.h3': 'Fyrirsögn 3',
  /** Title of the "h4" block style */
  'inputs.portable-text.style.h4': 'Fyrirsögn 4',
  /** Title of the "h5" block style */
  'inputs.portable-text.style.h5': 'Fyrirsögn 5',
  /** Title of the "h6" block style */
  'inputs.portable-text.style.h6': 'Fyrirsögn 6',
  /** Title shown when multiple blocks of varying styles is selected */
  'inputs.portable-text.style.multiple': 'Margir',
  /** Title of fallback when no style is given for a block */
  'inputs.portable-text.style.none': 'Enginn stíll',
  /** Title of the "normal" block style */
  'inputs.portable-text.style.normal': 'Venjulegur',
  /** Title of the "quote" block style */
  'inputs.portable-text.style.quote': 'Tilvitnun',
  /** Label for action to clear the current value of the reference field */
  'inputs.reference.action.clear': 'Hreinsa',
  /** Label for action to create a new document from the reference input */
  'inputs.reference.action.create-new-document': 'Búa til nýtt',
  /** Label for action to create a new document from the reference input, when there are multiple templates or document types to choose from */
  'inputs.reference.action.create-new-document-select': 'Búa til nýtt…',
  /** Label for action to duplicate the current item to a new item (used within arrays) */
  'inputs.reference.action.duplicate': 'Tvöfalda',
  /** Label for action that opens the referenced document in a new tab */
  'inputs.reference.action.open-in-new-tab': 'Opna í nýjum flipa',
  /** Label for action to remove the reference from an array */
  'inputs.reference.action.remove': 'Fjarlægja',
  /** Label for action to replace the current value of the field */
  'inputs.reference.action.replace': 'Skipta út',
  /** Label for action to cancel a previously initiated replace action  */
  'inputs.reference.action.replace-cancel': 'Hætta við skipti',
  /** The cross-dataset reference field currently has a reference, but the feature has been disabled since it was created. This explains what can/cannot be done in its current state. */
  'inputs.reference.cross-dataset.feature-disabled-actions':
    'Þú getur ennþá hreinsað tilvísunina í þessum reit, en það er ekki hægt að breyta henni í annað skjal svo lengi sem eiginleikinn er óvirkur.',
  /** A cross-dataset reference field exists but the feature has been disabled. A <DocumentationLink> component is available. */
  'inputs.reference.cross-dataset.feature-disabled-description':
    'Þessi eiginleiki hefur verið óvirkjaður. Lestu hvernig á að virkja hann í <DocumentationLink>skjöluninni</DocumentationLink>.',
  /** Title for a warning telling the user that the current project does not have the "cross dataset references" feature */
  'inputs.reference.cross-dataset.feature-unavailable-title':
    'Ófáanlegur eiginleiki: Tilvísun milli gagnasetta',
  /** The cross-dataset reference points to a document with an invalid type  */
  'inputs.reference.cross-dataset.invalid-type':
    'Tilvísað skjal er af ógildri gerð ({{typeName}}) <JsonValue/>',
  /** The referenced document will open in a new tab (due to external studio) */
  'inputs.reference.document-opens-in-new-tab': 'Þetta skjal opnast í nýjum flipa',
  /** Error title for when the document is unavailable (for any possible reason) */
  'inputs.reference.error.document-unavailable-title': 'Skjal óaðgengilegt',
  /** Error title for when the referenced document failed to be loaded */
  'inputs.reference.error.failed-to-load-document-title': 'Mistókst að hlaða tilvísað skjali',
  /** Error title for when the reference search returned a document that is not an allowed type for the field */
  'inputs.reference.error.invalid-search-result-type-title':
    'Leit skilaði gerð sem er ekki gild fyrir þessa tilvísun: "{{returnedType}}"',
  /** Error description for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-description':
    'Tilvísað skjal (<code>{{documentId}}</code>) er af gerð <code>{{actualType}}</code>. Samkvæmt skemanu geta tilvísað skjöl aðeins verið af gerð <AllowedTypes />.',
  /** Error title for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-title': 'Skjal af ógildri gerð',
  /** Error description for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-description':
    'Ekki var hægt að nálgast tilvísað skjal vegna ófullnægjandi heimilda',
  /** Error title for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-title': 'Ófullnægjandi heimildir',
  /** Error description for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-description':
    'Tilvísað skjal er ekki til (ID: <code>{{documentId}}</code>). Þú getur annaðhvort fjarlægt tilvísunina eða skipt henni út fyrir annað skjal.',
  /** Error title for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-title': 'Fannst ekki',
  /** Label for button that clears the reference when it points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document.clear-button-label': 'Hreinsa',
  /** Error title for when the search for a reference failed. Note that the message sent by the backend may not be localized. */
  'inputs.reference.error.search-failed-title': 'Leit að tilvísun mistókst',
  /** Alternative text for the image shown in cross-dataset reference input */
  'inputs.reference.image-preview-alt-text': 'Myndforskoðun af tilvísaðu skjali',
  /** Description for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-description':
    '<strong>{{referencedDocument}}</strong> er birt og þessi tilvísun ætti nú að vera lokið.',
  /** Title for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-title': 'Ljúka tilvísun',
  /** Description for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-description':
    '<strong>{{referencedDocument}}</strong> er birt og þessi tilvísun ætti nú að vera breytt í sterkari tilvísun.',
  /** Title for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-title': 'Breyta í sterkari tilvísun',
  /** Label for button that triggers the action that strengthen a reference */
  'inputs.reference.incomplete-reference.strengthen-button-label': 'Breyta í sterka tilvísun',
  /** Label for button that triggers a retry attempt for reference metadata  */
  'inputs.reference.metadata-error.retry-button-label': 'Reyna aftur',
  /** Title for alert shown when reference metadata fails to be loaded */
  'inputs.reference.metadata-error.title': 'Ekki hægt að hlaða inn tilvísunarmetagegnum',
  /** Message shown when no documents were found that matched the given search string */
  'inputs.reference.no-results-for-query':
    'Engar niðurstöður fyrir <strong>“{{searchTerm}}”</strong>',
  /** Text for tooltip showing when a document was edited, using relative time (eg "how long ago was it edited?") */
  'inputs.reference.preview.edited-at-time': 'Breytt <RelativeTime/>',
  /** Accessibility label for icon indicating that document does _not_ have any unpublished changes */
  'inputs.reference.preview.has-no-unpublished-changes-aria-label': 'Engar óbirtar breytingar',
  /** Accessibility label for icon indicating that document has unpublished changes */
  'inputs.reference.preview.has-unpublished-changes-aria-label': 'Breytt',
  /** Accessibility label for icon indicating that document does _not_ have a published version */
  'inputs.reference.preview.is-not-published-aria-label': 'Ekki birt',
  /** Accessibility label for icon indicating that document has a published version */
  'inputs.reference.preview.is-published-aria-label': 'Birt',
  /** Text for tooltip indicating that a document has no unpublished edits */
  'inputs.reference.preview.no-unpublished-edits': 'Engar óbirtar breytingar',
  /** Text for tooltip indicating that a document has not yet been published */
  'inputs.reference.preview.not-published': 'Ekki birt',
  /** Text for tooltip showing when a document was published, using relative time (eg "how long ago was it published?") */
  'inputs.reference.preview.published-at-time': 'Birt <RelativeTime/>',
  /** The referenced document no longer exist and might have been deleted (for weak references) */
  'inputs.reference.referenced-document-does-not-exist':
    'Tilvísunarskjalið er ekki lengur til og gæti hafa verið eytt (skjal ID: <code>{{documentId}}</code>).',
  /** The referenced document could not be displayed to the user because of insufficient permissions */
  'inputs.reference.referenced-document-insufficient-permissions':
    'Ekki var hægt að nálgast tilvísunarskjalið vegna ófullnægjandi heimilda',
  /** Label for when the reference input is resolving the initial value for an item */
  'inputs.reference.resolving-initial-value': 'Leysir úr upphafsgildi…',
  /** Placeholder shown in a reference input with no current value */
  'inputs.reference.search-placeholder': 'Sláðu inn til að leita',
  /** Explanation of the consequences of leaving the reference as strong instead of weak */
  'inputs.reference.strength-mismatch.is-strong-consquences':
    'Það verður ekki hægt að eyða tilvísunarskjalinn án þess að fjarlægja þessa tilvísun fyrst eða breyta henni í veika.',
  /** Description for alert shown when a reference is supposed to be weak, but the actual value is strong */
  'inputs.reference.strength-mismatch.is-strong-description':
    'Þessi tilvísun er <em>sterk</em>, en samkvæmt núverandi skema ætti hún að vera <em>veik</em>.',
  /** Explanation of the consequences of leaving the reference as weak instead of strong */
  'inputs.reference.strength-mismatch.is-weak-consquences':
    'Þetta gerir það mögulegt að eyða tilvísunarskjalinn án þess að eyða þessari tilvísun fyrst, sem skilur eftir svið sem vísar í ekki-tilvist skjal.',
  /** Description for alert shown when a reference is supposed to be strong, but the actual value is weak */
  'inputs.reference.strength-mismatch.is-weak-description':
    'Þessi tilvísun er <em>veik</em>, en samkvæmt núverandi skema ætti hún að vera <em>sterk</em>.',
  /** Label for button that triggers the action that strengthens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.strengthen-button-label': 'Breyta í sterka tilvísun',
  /** Title for alert shown when a reference is supposed to be weak/strong, but the actual value is the opposite of what it is supposed to be */
  'inputs.reference.strength-mismatch.title': 'Mismunur á styrkleika tilvísunar',
  /** Label for button that triggers the action that weakens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.weaken-button-label': 'Breyta í veika tilvísun',
  /** Action message for generating the slug */
  'inputs.slug.action.generate': 'Búa til',
  /** Loading message for when the input is actively generating a slug */
  'inputs.slug.action.generating': 'Býr til…',
  /** Error message for when the source to generate a slug from is missing */
  'inputs.slug.error.missing-source':
    'Uppruni vantar. Athugaðu uppruna á tegund {{schemaType}} í skema',
  /** Placeholder for an empty tag input */
  'inputs.tags.placeholder': 'Sláðu inn merki og ýttu á ENTER…',
  /** Placeholder for an empty tag input on touch devices */
  'inputs.tags.placeholder_touch': 'Sláðu inn merki…',
  /** Convert to `{{targetType}}` */
  'inputs.untyped-value.convert-button.text': 'Breyta í <code>{{targetType}}</code>',
  /** Encountered an object value without a <code>_type</code> property. */
  'inputs.untyped-value.description': 'Mætti á hlutgildi án <code>_type</code> eignar.',
  /** Either remove the <code>name</code> property of the object declaration, or set <code>_type</code> property on items. */
  'inputs.untyped-value.details.description':
    'Annaðhvort fjarlægðu <code>name</code> eignina úr hlutlýsingunni, eða settu <code>_type</code> eign á hluti.',
  /** Current value (<code>object</code>): */
  'inputs.untyped-value.details.json-dump-prefix': 'Núverandi gildi (<code>object</code>):',
  /** The following types are valid here according to schema: */
  'inputs.untyped-value.details.multi-type-description':
    'Eftirfarandi tegundir eru gildar hér samkvæmt skema:',
  /** Developer info */
  'inputs.untyped-value.details.title': 'Upplýsingar fyrir þróunaraðila',
  /** Property value missing <code>_type</code> */
  'inputs.untyped-value.title': 'Eign gildis vantar <code>_type</code>',
  /** Unset value */
  'inputs.untyped-value.unset-item-button.text': 'Fjarlægja gildi',

  /** The fallback explanation if no context is provided */
  'insufficient-permissions-message.not-authorized-explanation':
    'Þú hefur ekki heimild til að nálgast þessa eiginleika.',
  /** The explanation when unable to create any document at all */
  'insufficient-permissions-message.not-authorized-explanation_create-any-document':
    'Þú hefur ekki heimild til að búa til skjal.',
  /** The explanation when unable to create a particular document */
  'insufficient-permissions-message.not-authorized-explanation_create-document':
    'Þú hefur ekki heimild til að búa til þetta skjal.',
  /** The explanation when unable to create a particular type of document */
  'insufficient-permissions-message.not-authorized-explanation_create-document-type':
    'Þú hefur ekki heimild til að búa til þessa tegund af skjali.',
  /** The explanation when unable to create a new reference in a document */
  'insufficient-permissions-message.not-authorized-explanation_create-new-reference':
    'Þú hefur ekki heimild til að búa til nýja tilvísun.',
  /** The explanation when unable to delete a particular document */
  'insufficient-permissions-message.not-authorized-explanation_delete-document':
    'Þú hefur ekki heimild til að eyða þessu skjali.',
  /** The explanation when unable to discard changes in a particular document */
  'insufficient-permissions-message.not-authorized-explanation_discard-changes':
    'Þú hefur ekki heimild til að henda breytingum í þessu skjali.',
  /** The explanation when unable to duplicate a particular document */
  'insufficient-permissions-message.not-authorized-explanation_duplicate-document':
    'Þú hefur ekki heimild til að tvöfalda þetta skjal.',
  /** The explanation when unable to publish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_publish-document':
    'Þú hefur ekki heimild til að birta þetta skjal.',
  /** The explanation when unable to unpublish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_unpublish-document':
    'Þú hefur ekki heimild til að afturkalla birtingu á þessu skjali.',
  /** Appears after the not-authorized message. Lists the current roles. */
  'insufficient-permissions-message.roles': 'Hlutverk þín: <Roles/>',
  /** The title for the insufficient permissions message component */
  'insufficient-permissions-message.title': 'Ófullnægjandi heimildir',

  /** Unexpected error: `{{error}}` */
  'member-field-error.unexpected-error': 'Óvænt villa: {{error}}',

  /** Button label for "Create new document" button */
  'new-document.button': 'Búa til',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are templates/types available for creation
   */
  'new-document.create-new-document-label': 'Nýtt skjal…',
  /** Placeholder for the "filter" input within the new document menu */
  'new-document.filter-placeholder': 'Sía',
  /** Loading indicator text within the new document menu */
  'new-document.loading': 'Hleður…',
  /** Accessibility label for the list displaying options in the new document menu */
  'new-document.new-document-aria-label': 'Nýtt skjal',
  /** Message for when there are no document type options in the new document menu */
  'new-document.no-document-types-found': 'Engar skjalategundir fundust',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are no templates/types to create from
   */
  'new-document.no-document-types-label': 'Engar skjalategundir',
  /** Message for when no results are found for a specific search query in the new document menu */
  'new-document.no-results': 'Engar niðurstöður fyrir <strong>{{searchQuery}}</strong>',
  /** Aria label for the button that opens the "Create new document" popover/dialog */
  'new-document.open-dialog-aria-label': 'Búa til nýtt skjal',
  /** Title for "Create new document" dialog */
  'new-document.title': 'Búa til nýtt skjal',

  /** Label for action to manage members of the current studio project */
  'presence.action.manage-members': 'Stjórna meðlimum',
  /** Accessibility label for presence menu button */
  'presence.aria-label': 'Hver er hér',
  /** Message description for when no one else is currently present */
  'presence.no-one-else-description': 'Bjóddu fólki í verkefnið til að sjá netsögu þeirra.',
  /** Message title for when no one else is currently present */
  'presence.no-one-else-title': 'Enginn annar er hér',
  /** Message for when a user is not in a document (displayed in the global presence menu) */
  'presence.not-in-a-document': 'Ekki í skjali',
  /** Tooltip content text for presence menu button */
  'presence.tooltip-content': 'Hver er hér',

  /** Fallback title shown when a preview does not provide a title */
  'preview.default.title-fallback': 'Titill ekki gefinn',
  /** Fallback preview value for types that have "no value" (eg null, undefined) */
  'preview.fallback.no-value': '(engin gildi)',
  /** Alternative text for image being shown while image is being uploaded, in previews */
  'preview.image.file-is-being-uploaded.alt-text': 'Myndin sem er verið að hlaða upp',

  /* Relative time, just now */
  'relative-time.just-now': 'rétt í þessu',

  /** Accessibility label to open search action when the search would go fullscreen (eg on narrower screens) */
  'search.action-open-aria-label': 'Opna leit',
  /** Action label for adding a search filter */
  'search.action.add-filter': 'Bæta við síu',
  /** Action label for clearing search filters */
  'search.action.clear-filters': 'Hreinsa síur',
  /** Label for action to clear recent searches */
  'search.action.clear-recent-searches': 'Hreinsa nýlegar leitir',
  /** Accessibility label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-aria-label': 'Hreinsa merktar síur',
  /** Label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-label': 'Hreinsa',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to close the search */
  'search.action.close-search-aria-label': 'Loka leit',
  /** Accessibility label for filtering by document type */
  'search.action.filter-by-document-type-aria-label': 'Sía eftir skjalategund',
  /** Accessibility action label for removing an already applied search filter */
  'search.action.remove-filter-aria-label': 'Fjarlægja síu',
  /**
   * Text displayed when either no document type(s) have been selected, or we need a fallback,
   * eg "Search for all types".
   */
  'search.action.search-all-types': 'Leita í öllum skjölum',
  /**
   * Text displayed when we are able to determine one or more document types that will be used for
   * searching, and can fit within the space assigned by the design.
   */
  'search.action.search-specific-types': 'Leita að {{types, list}}',
  /** Dialog title for action to select an asset of unknown type */
  'search.action.select-asset': 'Veldu eign',
  /** Dialog title for action to select a file asset */
  'search.action.select-asset_file': 'Veldu skrá',
  /** Dialog title for action to select an image asset */
  'search.action.select-asset_image': 'Veldu mynd',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-aria-label_hide': 'Fela síur',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-aria-label_show': 'Sýna síur',
  /** Label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-label_hide': 'Fela síur',
  /** Label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-label_show': 'Sýna síur',
  /** Tooltip text for the global search button */
  'search.button.tooltip': 'Leita',
  /**
   * A list of provided types (use `list` formatter preferably).
   */
  'search.document-type-list': '{{types, list}}',
  /**
   * In the context of a list of document types - no filtering selection has been done,
   * thus the default is "all types".
   */
  'search.document-type-list-all-types': 'Allar tegundir',
  /** Accessibility label for list displaying the available document types */
  'search.document-types-aria-label': 'Tegundir skjala',
  /** Label for when no document types matching the filter are found */
  'search.document-types-no-matches-found': 'Engar samsvörun fyrir {{filter}}',
  /** Description for error when a filter cannot be displayed, describes that you should check the schema */
  'search.error.display-filter-description':
    'Þetta gæti bent til ógildra valkosta sem skilgreindir eru í skemanu þínu.',
  /** Title for error when a filter cannot be displayed (mainly a developer-oriented error) */
  'search.error.display-filter-title': 'Villa kom upp við að sýna þennan síu.',
  /** Description for error when no valid asset source is found, describes that you should check the the current studio config */
  'search.error.no-valid-asset-source-check-config-description':
    'Vinsamlegast vertu viss um að það sé virkt í stillingarskrá stúdíóinu þínu.',
  /** Description for error when no valid asset source is found, describes that only the default asset is supported */
  'search.error.no-valid-asset-source-only-default-description':
    'Aðeins er stutt við sjálfgefna eignauppsprettu í augnablikinu.',
  /** Title for error when no valid asset sources found */
  'search.error.no-valid-asset-source-title': 'Engar gildar eignauppsprettur fundust.',
  /** Helpful description for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-help-description':
    'Vinsamlegast reyndu aftur eða athugaðu tenginguna þína',
  /** Title label for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-title': 'Eitthvað fór úrskeiðis við leitina',
  /**
   * Label for "All fields", a label that appears above the list of available fields when filtering.
   * If one or more document type has been chosen as filter, this label is replaced with a group of
   * fields per selected document type
   */
  'search.filter-all-fields-header': 'Alla svið',
  /** Label for the action of changing from one file to a different file in asset search filter */
  'search.filter-asset-change_file': 'Breyta skrá',
  /** Label for the action of changing from one image to a different image in asset search filter */
  'search.filter-asset-change_image': 'Breyta mynd',
  /** Label for the action of clearing the currently selected asset in an image/file filter */
  'search.filter-asset-clear': 'Hreinsa',
  /** Label for the action of selecting a file in asset search filter */
  'search.filter-asset-select_file': 'Veldu skrá',
  /** Label for the action of selecting an image in asset search filter */
  'search.filter-asset-select_image': 'Veldu mynd',
  /** Label for boolean filter - false */
  'search.filter-boolean-false': 'Ósatt',
  /** Label for boolean filter - true */
  'search.filter-boolean-true': 'Satt',
  /** Accessibility label for list that lets you filter fields by title, when adding a new filter in search */
  'search.filter-by-title-aria-label': 'Sía eftir titli',
  /** Accessibility label for date filter input */
  'search.filter-date-aria-label': 'Dagsetning',
  /** Accessibility label for selecting end date on the date range search filter */
  'search.filter-date-range-end-date-aria-label': 'Lokadagsetning',
  /** Accessibility label for selecting start date on the date range search filter */
  'search.filter-date-range-start-date-aria-label': 'Upphafsdagsetning',
  /**
   * Label for "Days"/"Months"/"Years" when selecting it as unit in "X days ago" search filter.
   * Capitalized, as it would be listed in a dropdown.
   */
  'search.filter-date-unit_days': 'Dagar',
  'search.filter-date-unit_months': 'Mánuðir',
  'search.filter-date-unit_years': 'Ár',
  /** Accessibility label for selecting the unit (day/month/year) when adding "X days ago" search filter */
  'search.filter-date-unit-aria-label': 'Veldu einingu',
  /** Accessibility label for the input value (days/months/years) when adding "X days ago" search filter */
  'search.filter-date-value-aria-label': 'Einingargildi',
  /** Label for "field description" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-description': 'Lýsing á sviði',
  /** Label for "field name" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-name': 'Heiti sviðs',
  /** Label for "Used in document types", a list of the document types a field appears in. Shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-used-in-document-types': 'Notað í tegundum skjala',
  /** Label for when no fields/filters are found for the given term */
  'search.filter-no-matches-found': 'Engar samsvörun fyrir {{filter}}',
  /** Placeholder value for maximum numeric value filter */
  'search.filter-number-max-value-placeholder': 'Hámarksgildi',
  /** Placeholder value for minimum numeric value filter */
  'search.filter-number-min-value-placeholder': 'Lágmarksgildi',
  /** Placeholder value for the number filter */
  'search.filter-number-value-placeholder': 'Gildi',
  /** Placeholder for the "Filter" input, when narrowing possible fields/filters */
  'search.filter-placeholder': 'Sía',
  /** Label for the action of clearing the currently selected document in a reference filter */
  'search.filter-reference-clear': 'Hreinsa',
  /**
   * Label for "shared fields", a label that appears above a list of fields that all filtered types
   * have in common, when adding a new filter. For instance, if "book" and "employee" both have a
   * "title" field, this field would be listed under "shared fields".
   * */
  'search.filter-shared-fields-header': 'Sameiginleg svið',
  /** Placeholder value for the string filter */
  'search.filter-string-value-placeholder': 'Gildi',
  /** Label/placeholder prompting user to select one of the predefined, allowed values for a string field */
  'search.filter-string-value-select-predefined-value': 'Veldu…',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (singular) */
  'search.filters-aria-label_one': 'Sía',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (plural) */
  'search.filters-aria-label_other': 'Síur',
  /** Label for instructions on how to use the search - displayed when no recent searches are available */
  'search.instructions': 'Notaðu <ControlsIcon/> til að fínstilla leitina þína',
  /** Helpful description for when no search results are found */
  'search.no-results-help-description': 'Prófaðu annað leitarorð eða aðlagaðu síurnar þínar',
  /** Title label for when no search results are found */
  'search.no-results-title': 'Engar niðurstöður fundust',
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
    '<Field/> <Operator>hefur</Operator> <Value>{{count}} hlut</Value>',
  'search.operator.array-count-equal.description_other':
    '<Field/> <Operator>hefur</Operator> <Value>{{count}} hluti</Value>',
  'search.operator.array-count-equal.name': 'magn er',
  /* Array should have a count greater than given filter value */
  'search.operator.array-count-gt.description_one':
    '<Field/> <Operator>hefur ></Operator> <Value>{{count}} hlut</Value>',
  'search.operator.array-count-gt.description_other':
    '<Field/> <Operator>hefur ></Operator> <Value>{{count}} hluti</Value>',
  'search.operator.array-count-gt.name': 'magn meira en',
  /* Array should have a count greater than or equal to the given filter value */
  'search.operator.array-count-gte.description_one':
    '<Field/> <Operator>hefur ≥</Operator> <Value>{{count}} hlut</Value>',
  'search.operator.array-count-gte.description_other':
    '<Field/> <Operator>hefur ≥</Operator> <Value>{{count}} hluti</Value>',
  'search.operator.array-count-gte.name': 'magn meira en eða jafnt og',
  /* Array should have a count less than given filter value */
  'search.operator.array-count-lt.description_one':
    '<Field/> <Operator>hefur <</Operator> <Value>{{count}} hlut</Value>',
  'search.operator.array-count-lt.description_other':
    '<Field/> <Operator>hefur <</Operator> <Value>{{count}} hluti</Value>',
  'search.operator.array-count-lt.name': 'magn minna en',
  /* Array should have a count less than or equal to the given filter value */
  'search.operator.array-count-lte.description_one':
    '<Field/> <Operator>hefur ≤</Operator> <Value>{{count}} hlut</Value>',
  'search.operator.array-count-lte.description_other':
    '<Field/> <Operator>hefur ≤</Operator> <Value>{{count}} hluti</Value>',
  'search.operator.array-count-lte.name': 'magn minna en eða jafnt og',
  /* Array should have a count that is not equal to the given filter value */
  'search.operator.array-count-not-equal.description_one':
    '<Field/> <Operator>hefur ekki</Operator> <Value>{{count}} hlut</Value>',
  'search.operator.array-count-not-equal.description_other':
    '<Field/> <Operator>hefur ekki</Operator> <Value>{{count}} hluti</Value>',
  'search.operator.array-count-not-equal.name': 'magn er ekki',
  /**
   * Array should have a count within the range of given filter values.
   * Gets passed `{{from}}` and `{{to}}` values.
   **/
  'search.operator.array-count-range.description':
    '<Field/> <Operator>hefur á milli</Operator> <Value>{{from}} → {{to}} hluti</Value>',
  'search.operator.array-count-range.name': 'magn er á milli',
  /* Array should include the given value */
  'search.operator.array-list-includes.description':
    '<Field/> <Operator>inniheldur</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-includes.name': 'inniheldur',
  /* Array should not include the given value */
  'search.operator.array-list-not-includes.description':
    '<Field/> <Operator>inniheldur ekki</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-not-includes.name': 'inniheldur ekki',
  /* Array should include the given reference */
  'search.operator.array-reference-includes.description':
    '<Field/> <Operator>inniheldur</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-includes.name': 'inniheldur',
  /* Array should not include the given reference */
  'search.operator.array-reference-not-includes.description':
    '<Field/> <Operator>inniheldur ekki</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-not-includes.name': 'inniheldur ekki',
  /* Asset (file) should be the selected asset */
  'search.operator.asset-file-equal.description':
    '<Field/> <Operator>er</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-equal.name': 'er',
  /* Asset (file) should not be the selected asset */
  'search.operator.asset-file-not-equal.description':
    '<Field/> <Operator>er ekki</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-not-equal.name': 'er ekki',
  /* Asset (image) should be the selected asset */
  'search.operator.asset-image-equal.description':
    '<Field/> <Operator>er</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-equal.name': 'er',
  /* Asset (image) should not be the selected asset */
  'search.operator.asset-image-not-equal.description':
    '<Field/> <Operator>er ekki</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-not-equal.name': 'er ekki',
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
    '<Field/> <Operator>er eftir</Operator> <Value>{{value}}</Value>',
  'search.operator.date-after.name': 'eftir',
  /* Date should be before (earlier than) given filter value */
  'search.operator.date-before.description':
    '<Field/> <Operator>er fyrir</Operator> <Value>{{value}}</Value>',
  'search.operator.date-before.name': 'fyrir',
  /* Date should be the given filter value */
  'search.operator.date-equal.description':
    '<Field/> <Operator>er</Operator> <Value>{{value}}</Value>',
  'search.operator.date-equal.name': 'er',
  /* Date should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-last.description':
    '<Field/> <Operator>er á síðustu</Operator> <Value>{{value}}</Value>',
  'search.operator.date-last.name': 'síðustu',
  /* Date should not be the given filter value */
  'search.operator.date-not-equal.description':
    '<Field/> <Operator>er ekki</Operator> <Value>{{value}}</Value>',
  'search.operator.date-not-equal.name': 'er ekki',
  /* Date should be within the range of given filter values */
  'search.operator.date-range.description': '<Field/> <Operator>er á milli</Operator> <Value/>',
  'search.operator.date-range.name': 'er á milli',
  /* Date and time should be after (later than) given filter value */
  'search.operator.date-time-after.description':
    '<Field/> <Operator>er eftir</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-after.name': 'eftir',
  /* Date and time should be before (earlier than) given filter value */
  'search.operator.date-time-before.description':
    '<Field/> <Operator>er fyrir</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-before.name': 'fyrir',
  /* Date and time should be the given filter value */
  'search.operator.date-time-equal.description':
    '<Field/> <Operator>er</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-equal.name': 'er',
  /* Date and time should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-time-last.description':
    '<Field/> <Operator>er á síðustu</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-last.name': 'síðustu',
  /* Date and time should not be the given filter value */
  'search.operator.date-time-not-equal.description':
    '<Field/> <Operator>er ekki</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-not-equal.name': 'er ekki',
  /* Date and time should be within the range of given filter values */
  'search.operator.date-time-range.description':
    '<Field/> <Operator>er á milli</Operator> <Value/>',
  'search.operator.date-time-range.name': 'er á milli',
  /* Value should be defined */
  'search.operator.defined.description': '<Field/> <Operator>er</Operator> <Value>ekki tóm</Value>',
  'search.operator.defined.name': 'ekki tóm',
  /* Value should not be defined */
  'search.operator.not-defined.description': '<Field/> <Operator>er</Operator> <Value>tóm</Value>',
  'search.operator.not-defined.name': 'tóm',
  /* Number should be the given filter value */
  'search.operator.number-equal.description':
    '<Field/> <Operator>er</Operator> <Value>{{value}}</Value>',
  'search.operator.number-equal.name': 'er',
  /* Number should be greater than given filter value */
  'search.operator.number-gt.description':
    '<Field/> <Operator>></Operator> <Value>{{value}}</Value>',
  'search.operator.number-gt.name': 'stærri en',
  /* Number should be greater than or the given filter value */
  'search.operator.number-gte.description':
    '<Field/> <Operator>≥</Operator> <Value>{{value}}</Value>',
  'search.operator.number-gte.name': 'stærri en eða jafnt og',
  /* Number should be less than given filter value */
  'search.operator.number-lt.description':
    '<Field/> <Operator><</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lt.name': 'minni en',
  /* Number should be less than or the given filter value */
  'search.operator.number-lte.description':
    '<Field/> <Operator>≤</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lte.name': 'minna en eða jafnt og',
  /* Number should not be the given filter value */
  'search.operator.number-not-equal.description':
    '<Field/> <Operator>er ekki</Operator> <Value>{{value}}</Value>',
  'search.operator.number-not-equal.name': 'er ekki',
  /* Number should be within the range of given filter values */
  'search.operator.number-range.description':
    '<Field/> <Operator>er á milli</Operator> <Value>{{from}} → {{to}}</Value>',
  'search.operator.number-range.name': 'er á milli',
  /* Portable Text should contain the given filter value */
  'search.operator.portable-text-contains.description':
    '<Field/> <Operator>inniheldur</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-contains.name': 'inniheldur',
  /* Portable Text should be the given filter value */
  'search.operator.portable-text-equal.description':
    '<Field/> <Operator>er</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-equal.name': 'er',
  /* Portable Text should not contain the given filter value */
  'search.operator.portable-text-not-contains.description':
    '<Field/> <Operator>inniheldur ekki</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-contains.name': 'inniheldur ekki',
  /* Portable Text should not be the given filter value */
  'search.operator.portable-text-not-equal.description':
    '<Field/> <Operator>er ekki</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-equal.name': 'er ekki',
  /* References the given asset (file) */
  'search.operator.reference-asset-file.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-file.name': 'skrá',
  /* References the given asset (image) */
  'search.operator.reference-asset-image.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-image.name': 'mynd',
  /* References the given document */
  'search.operator.reference-document.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-document.name': 'skjal',
  /* Reference should be the given document */
  'search.operator.reference-equal.description':
    '<Field/> <Operator>er</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-equal.name': 'er',
  /* Reference should not be the given document */
  'search.operator.reference-not-equal.description':
    '<Field/> <Operator>er ekki</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-not-equal.name': 'er ekki',
  /* Slug contains the given value */
  'search.operator.slug-contains.description':
    '<Field/> <Operator>inniheldur</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-contains.name': 'inniheldur',
  /* Slug equals the given filter value */
  'search.operator.slug-equal.description':
    '<Field/> <Operator>er</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-equal.name': 'er',
  /* Slug does not contain the given value */
  'search.operator.slug-not-contains.description':
    '<Field/> <Operator>inniheldur ekki</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-contains.name': 'inniheldur ekki',
  /* Slug does not equal the given filter value */
  'search.operator.slug-not-equal.description':
    '<Field/> <Operator>er ekki</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-equal.name': 'er ekki',
  /* String contains the given filter value */
  'search.operator.string-contains.description':
    '<Field/> <Operator>inniheldur</Operator> <Value>{{value}}</Value>',
  'search.operator.string-contains.name': 'inniheldur',
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
    '<Field/> <Operator>er ekki</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-not-equal.name': 'er ekki',
  /* String does not contain the given filter value */
  'search.operator.string-not-contains.description':
    '<Field/> <Operator>inniheldur ekki</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-contains.name': 'inniheldur ekki',
  /* String does not equal the given filter value */
  'search.operator.string-not-equal.description':
    '<Field/> <Operator>er ekki</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-equal.name': 'er ekki',
  /** Label for the "Best match" search ordering type */
  'search.ordering.best-match-label': 'Besti samsvörun',
  /** Label for the "Created: Oldest first" search ordering type */
  'search.ordering.created-ascending-label': 'Búið til: Elst fyrst',
  /** Label for the "Created: Newest first" search ordering type */
  'search.ordering.created-descending-label': 'Búið til: Nýjast fyrst',
  /** Label for the "Updated: Oldest first" search ordering type */
  'search.ordering.updated-ascending-label': 'Uppfært: Elst fyrst',
  /** Label for the "Updated: Newest first" search ordering type */
  'search.ordering.updated-descending-label': 'Uppfært: Nýjast fyrst',
  /** Placeholder text for the global search input field */
  'search.placeholder': 'Leita',
  /** Accessibility label for the recent searches section, shown when no valid search terms has been given */
  'search.recent-searches-aria-label': 'Nýlegar leitir',
  /** Label/heading shown for the recent searches section */
  'search.recent-searches-label': 'Nýlegar leitir',
  /** Accessibility label for the search results section, shown when the user has typed valid terms */
  'search.search-results-aria-label': 'Leitarniðurstöður',

  /** Accessibility label for the navbar status button */
  'status-button.aria-label': 'Stillingarstaða',

  /** Description for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-description':
    'Sögufærslur skjalsins hafa ekki verið fyrir áhrifum.',
  /** Title for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-title': 'Villa kom upp við að sækja breytingar á skjali.',
  /** Error description for when the document doesn't have history */
  'timeline.error.no-document-history-description':
    'Þegar breytt er efni skjalsins munu útgáfur skjalsins birtast í þessum valmynd.',
  /** Error title for when the document doesn't have history */
  'timeline.error.no-document-history-title': 'Engin skjalasaga',
  /** Error prompt when revision cannot be loaded */
  'timeline.error.unable-to-load-revision': 'Ekki hægt að hlaða endurskoðun',
  /** Label for when the timeline item is the latest in the history */
  'timeline.latest': 'Nýjasta',
  /** Label for latest version for timeline menu dropdown */
  'timeline.latest-version': 'Nýjasta útgáfa',
  /** The aria-label for the list of revisions in the timeline */
  'timeline.list.aria-label': 'Endurskoðanir skjals',
  /** Label for loading history */
  'timeline.loading-history': 'Hleð sögu…',
  /** Label shown in review changes timeline when a document has been created */
  'timeline.operation.created': 'Búið til',
  /** Label shown in review changes timeline when a document has been created, with a timestamp */
  'timeline.operation.created_timestamp': 'Búið til: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was initially created */
  'timeline.operation.created-initial': 'Búið til',
  /** Label shown in review changes timeline when a document was initially created, with a timestamp */
  'timeline.operation.created-initial_timestamp': 'Búið til: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been deleted */
  'timeline.operation.deleted': 'Eytt',
  /** Label shown in review changes timeline when a document has been deleted, with a timestamp */
  'timeline.operation.deleted_timestamp': 'Eytt: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been discarded */
  'timeline.operation.draft-discarded': 'Drög hent',
  /** Label shown in review changes timeline when a draft has been discarded, with a timestamp */
  'timeline.operation.draft-discarded_timestamp': 'Drög hent: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been edited */
  'timeline.operation.edited-draft': 'Breytt',
  /** Label shown in review changes timeline when a draft has been edited, with a timestamp */
  'timeline.operation.edited-draft_timestamp': 'Breytt: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been edited live */
  'timeline.operation.edited-live': 'Breytt í beinni',
  /** Label shown in review changes timeline when a document has been edited live, with a timestamp */
  'timeline.operation.edited-live_timestamp': 'Breytt í beinni: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was published */
  'timeline.operation.published': 'Birt',
  /** Label shown in review changes timeline when a document was published, with a timestamp */
  'timeline.operation.published_timestamp': 'Birt: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was unpublished */
  'timeline.operation.unpublished': 'Óbirt',
  /** Label shown in review changes timeline when a document was unpublished, with a timestamp */
  'timeline.operation.unpublished_timestamp': 'Óbirt: {{timestamp, datetime}}',
  /**
   * Label for determining since which version the changes for timeline menu dropdown are showing.
   * Receives the time label as a parameter (`timestamp`).
   */
  'timeline.since': 'Síðan: {{timestamp, datetime}}',
  /** Label for missing change version for timeline menu dropdown are showing */
  'timeline.since-version-missing': 'Síðan: óþekkt útgáfa',

  /**Aria label for the action buttons in the PTE toolbar */
  'toolbar.portable-text.action-button-aria-label': '{{action}}',

  /** Label for button showing the free trial days left */
  'user-menu.action.free-trial_one': '{{count}} dagur eftir af prufutíma',
  'user-menu.action.free-trial_other': '{{count}} dagar eftir af prufutíma',
  /** Label for the button showed after trial ended */
  'user-menu.action.free-trial-finished': 'Uppfærðu frá ókeypis',
  /** Label for action to invite members to the current sanity project */
  'user-menu.action.invite-members': 'Bjóða meðlimum',
  /** Accessibility label for action to invite members to the current sanity project */
  'user-menu.action.invite-members-aria-label': 'Bjóða meðlimum',
  /** Label for action to manage the current sanity project */
  'user-menu.action.manage-project': 'Stjórna verkefni',
  /** Accessibility label for the action to manage the current project */
  'user-menu.action.manage-project-aria-label': 'Stjórna verkefni',
  /** Tooltip helper text when portable text annotation is disabled for empty block*/
  'user-menu.action.portable-text.annotation-disabled_empty-block':
    'Get ekki beitt {{name}} á tóman blokk',
  /** Tooltip helper text when portable text annotation is disabled for multiple blocks */
  'user-menu.action.portable-text.annotation-disabled_multiple-blocks':
    'Get ekki beitt {{name}} á marga blokka',
  /** Label for action to sign out of the current sanity project */
  'user-menu.action.sign-out': 'Skrá út',
  /** Title for appearance section for the current studio (dark / light / system scheme) */
  'user-menu.appearance-title': 'Útlit',
  /** Label for close menu button for user menu */
  'user-menu.close-menu': 'Loka valmynd',
  /** Description for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-description': 'Nota dökkt útlit',
  /** Title for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-title': 'Dökkur',
  /** Description for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-description': 'Nota ljóst útlit',
  /** Title for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-title': 'Ljós',
  /** Description for using "system apparence" in the appearance user menu */
  'user-menu.color-scheme.system-description': 'Nota kerfisútlit',
  /** Title for using system apparence in the appearance user menu */
  'user-menu.color-scheme.system-title': 'Kerfi',
  /** Title for locale section for the current studio */
  'user-menu.locale-title': 'Tungumál',
  /** Label for tooltip to show which provider the currently logged in user is using */
  'user-menu.login-provider': 'Skráður inn með {{providerTitle}}',
  /** Label for open menu button for user menu */
  'user-menu.open-menu': 'Opna valmynd',

  /**
   * Label for action to add a workspace (currently a developer-oriented action, as this will
   * lead to the documentation on workspace configuration)
   */
  'workspaces.action.add-workspace': 'Bæta við vinnusvæði',
  /**
   * Label for action to choose a different workspace, in the case where you are not logged in,
   * have selected a workspace, and are faced with the authentication options for the selected
   * workspace. In other words, label for the action shown when you have reconsidered which
   * workspace to authenticate in.
   */
  'workspaces.action.choose-another-workspace': 'Veldu annað vinnusvæði',
  /** Label for heading that indicates that you can choose your workspace */
  'workspaces.choose-your-workspace-label': 'Veldu þitt vinnusvæði',
  /** Label for the workspace menu */
  'workspaces.select-workspace-aria-label': 'Veldu vinnusvæði',
  /** Button label for opening the workspace switcher */
  'workspaces.select-workspace-label': 'Veldu vinnusvæði',
  /** Tooltip for the workspace menu */
  'workspaces.select-workspace-tooltip': 'Veldu vinnusvæði',
  /** Title for Workplaces dropdown menu */
  'workspaces.title': 'Vinnurými',
})
