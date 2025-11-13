import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** "Configuration issue" header */
  'about-dialog.configuration-issue.header': undefined, // 'Configuration issue detected'
  /** Message shown if sanity.cli.ts is missing deployment.appId */
  'about-dialog.configuration-issue.missing-appid': undefined, // 'Auto updates is enabled, but no <code>deployment.appId</code> configured in <code>sanity.cli.ts</code>. This Studio is updating against the <strong>latest</strong>-channel.'
  /** "View documentation" link for auto-updating studios */
  'about-dialog.configuration-issue.missing-appid.view-documentation': undefined, // 'View documentation'
  /** "Disabled" status for auto-updates in About-dialog */
  'about-dialog.version-info.auto-updates.disabled': 'Dezactivat',
  /** "Enabled" status for auto-updates in About-dialog */
  'about-dialog.version-info.auto-updates.enabled': 'Activat',
  /** @deprecated "Auto Updates" status header in About-dialog */
  'about-dialog.version-info.auto-updates.header': 'Actualizări automate',
  /** "How to enable" next to Disabled state for Auto updates in version info dialog */
  'about-dialog.version-info.auto-updates.how-to-enable': 'Cum să activezi',
  /** "Manage version" link text */
  'about-dialog.version-info.auto-updates.manage-version': undefined, // 'Manage version'
  /** Text displayed on the "Copy to clipboard"-button after clicked */
  'about-dialog.version-info.copy-to-clipboard-button.copied-text':
    'Copiat! Acum puteți lipi cu încredere.',
  /** "Copy to Clipboard" button text for copying version details from About-dialog */
  'about-dialog.version-info.copy-to-clipboard-button.text': 'Copiază în clipboard',
  /** "Current version" header in version info dialog  */
  'about-dialog.version-info.current-version.header': 'Versiunea curentă',
  /** @deprecated "How to upgrade" link text */
  'about-dialog.version-info.how-to-upgrade': 'Cum să actualizezi',
  /** "Latest version" header in version info dialog */
  'about-dialog.version-info.latest-version.header': 'Ultima versiune',
  /** Info text when auto updates is enabled and a new version is available */
  'about-dialog.version-info.new-auto-update-version-available': undefined, // 'New version available'
  /** "New version" header in version info dialog - Note that this is not necessary a *higher* version compared to current:
   *  It's a new version configured for auto updates which in some cases could even be a version below current  */
  'about-dialog.version-info.new-version.text': undefined, // 'New version'
  /** "Reload"-button when auto updates is enabled and a new version is available */
  'about-dialog.version-info.reload': undefined, // 'Reload'
  /** "Reload to update"-tooltip when auto updates is enabled and a new version is available */
  'about-dialog.version-info.reload-to-update': undefined, // 'Reload Studio to update'
  /** "Development" tooltip in About-dialog */
  'about-dialog.version-info.tooltip.development': undefined, // 'Development'
  /** "New version available" tooltip in About-dialog */
  'about-dialog.version-info.tooltip.new-version-available': undefined, // 'New version available'
  /** "Prerelease" tooltip in About-dialog */
  'about-dialog.version-info.tooltip.prerelease': undefined, // 'Prerelease'
  /** "Up to date" tooltip in About-dialog */
  'about-dialog.version-info.tooltip.up-to-date': undefined, // 'Up to date'
  /** @deprecated "Up to date" status in About-dialog */
  'about-dialog.version-info.up-to-date': 'La zi',
  /** "Upgrade"-button text */
  'about-dialog.version-info.update-button.text': undefined, // 'Update'
  /** "Upgrade"-button tooltip text */
  'about-dialog.version-info.update-button.tooltip': undefined, // 'Learn how to update Sanity Studio'
  /** "User agent" header in About-dialog */
  'about-dialog.version-info.user-agent.header': 'Agent utilizator',
  /** "View on GitHub" link from version info dialog */
  'about-dialog.version-info.view-on-github': undefined, // 'View on GitHub'

  /** The text used in the tooltip shown in the dialog close button */
  'announcement.dialog.close': 'Închide',
  /** Aria label to be used in the dialog close button */
  'announcement.dialog.close-label': 'Închide dialogul',
  /**Text to be used in the tooltip in the button in the studio announcement card */
  'announcement.floating-button.dismiss': 'Închide',
  /**Aria label to be used in the floating button in the studio announcement card, to dismiss the card */
  'announcement.floating-button.dismiss-label': 'Ignoră anunțurile',
  /**Aria label to be used in the floating button in the studio announcement card */
  'announcement.floating-button.open-label': 'Deschide anunțurile',

  /** Menu item for deleting the asset */
  'asset-source.asset-list.menu.delete': 'Șterge',
  /** Menu item for showing where a particular asset is used */
  'asset-source.asset-list.menu.show-usage': 'Arată utilizarea',
  /** Header in usage dialog for file assets */
  'asset-source.asset-usage-dialog.header_file': 'Documente care folosesc fișierul',
  /** Header in usage dialog for image assets */
  'asset-source.asset-usage-dialog.header_image': 'Documente care folosesc imaginea',
  /** Text shown in usage dialog when loading documents using the selected asset */
  'asset-source.asset-usage-dialog.loading': 'Se încarcă…',
  /** Text for cancel action in delete-asset dialog */
  'asset-source.delete-dialog.action.cancel': 'Anulează',
  /** Text for "confirm delete" action in delete-asset dialog */
  'asset-source.delete-dialog.action.delete': 'Șterge',
  /** Dialog header for delete-asset dialog when deleting a file */
  'asset-source.delete-dialog.header_file': 'Șterge fișierul',
  /** Dialog header for delete-asset dialog when deleting an image */
  'asset-source.delete-dialog.header_image': 'Șterge imaginea',
  /** Text shown in delete dialog when loading documents using the selected asset */
  'asset-source.delete-dialog.loading': 'Se încarcă…',
  /** Message confirming to delete *named* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_named':
    'Sunteți pe cale să ștergeți fișierul <strong>{{filename}}</strong> și metadatele sale. Sunteți sigur?',
  /** Message confirming to delete *unnamed* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_unnamed':
    'Sunteți pe cale să ștergeți fișierul și metadatele sale. Sunteți sigur?',
  /** Message confirming to delete *named* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_named':
    'Sunteți pe cale să ștergeți imaginea <strong>{{filename}}</strong> și metadatele sale. Sunteți sigur?',
  /** Message confirming to delete *unnamed* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_unnamed':
    'Sunteți pe cale să ștergeți imaginea și metadatele sale. Sunteți sigur?',
  /** Alt text showing on image preview in delete asset dialog  */
  'asset-source.delete-dialog.usage-list.image-preview-alt': 'Previzualizare a imaginii',
  /** Warning message showing when *named* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_named':
    '{{filename}} nu poate fi șters deoarece este utilizat. Pentru a șterge acest fișier, trebuie mai întâi să eliminați toate utilizările acestuia.',
  /** Warning message showing when *unnamed* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_unnamed':
    'Acest fișier nu poate fi șters deoarece este utilizat. Pentru a-l șterge, trebuie mai întâi să eliminați toate utilizările acestuia.',
  /** Warning message showing when *named* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_named':
    '{{filename}} nu poate fi șters deoarece este utilizat. Pentru a șterge această imagine, trebuie mai întâi să eliminați toate utilizările acesteia.',
  /** Warning message showing when *unnamed* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_unnamed':
    'Această imagine nu poate fi ștearsă deoarece este utilizată. Pentru a o șterge, trebuie mai întâi să eliminați toate utilizările acesteia.',
  /** Text shown when the list of assets only include a specific set of types */
  'asset-source.dialog.accept-message':
    'Se afișează doar activele de tipuri acceptate: <strong>{{acceptTypes}}</strong>',
  /** Select asset dialog cancel-button */
  'asset-source.dialog.button.cancel': 'Anulează',
  /** Select asset dialog select-button */
  'asset-source.dialog.button.select': 'Selectează',
  /** Keys shared between both image asset source and file asset source */
  /** Select asset dialog title for files */
  'asset-source.dialog.default-title_file': 'Selectează fișier',
  /** Select asset dialog title for images */
  'asset-source.dialog.default-title_image': 'Selectează imagine',
  /** Select asset dialog title for videos */
  'asset-source.dialog.default-title_video': undefined, // 'Select video'
  /** Insert asset error */
  'asset-source.dialog.insert-asset-error':
    'Eroare la inserarea fișierului. Vedeți consola pentru mai multe informații.',
  /** Select asset dialog load more items */
  'asset-source.dialog.load-more': 'Încarcă mai multe',
  /** Text shown when selecting a file but there's no files to select from
   * @deprecated no longer in use
   */
  'asset-source.dialog.no-assets_file': 'Niciun fișier',
  /** Text shown when selecting an image but there's no images to select from
   * @deprecated no longer in use
   */
  'asset-source.dialog.no-assets_image': 'Nicio imagine',
  'asset-source.file.asset-list.action.delete.disabled-cannot-delete-current-file':
    'Nu se poate șterge fișierul selectat în prezent',
  'asset-source.file.asset-list.action.delete.text': 'Șterge',
  'asset-source.file.asset-list.action.delete.title': 'Șterge fișier',
  'asset-source.file.asset-list.action.select-file.title': 'Selectează fișierul {{filename}}',
  'asset-source.file.asset-list.action.show-usage.title': 'Arată utilizarea',
  'asset-source.file.asset-list.delete-failed': 'Fișierul nu a putut fi șters',
  'asset-source.file.asset-list.delete-successful': 'Fișierul a fost șters',
  'asset-source.file.asset-list.header.date-added': 'Data adăugării',
  /** File asset source */
  'asset-source.file.asset-list.header.filename': 'Numele fișierului',
  'asset-source.file.asset-list.header.size': 'Dimensiune',
  'asset-source.file.asset-list.header.type': 'Tip',
  /** Text displayed on button or menu invoking the file asset source */
  'asset-source.file.title': 'Fișiere încărcate',
  'asset-source.image.asset-list.delete-failed': 'Imaginea nu a putut fi ștearsă',
  /** Image asset source */
  'asset-source.image.asset-list.delete-successful': 'Imaginea a fost ștearsă',
  /** Text displayed on button or menu invoking the image asset source */
  'asset-source.image.title': 'Imagini încărcate',
  /** Built in asset source usage texts */
  'asset-source.usage-list.documents-using-file_named_one':
    'Un document folosește fișierul <code>{{filename}}</code>',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *named* file **/
  'asset-source.usage-list.documents-using-file_named_zero':
    'Niciun document nu folosește fișierul <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-file_unnamed_one': 'Un document folosește acest fișier',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *unnamed* file **/
  'asset-source.usage-list.documents-using-file_unnamed_zero':
    'Niciun document nu folosește acest fișier',
  'asset-source.usage-list.documents-using-image_named_one':
    'Un document folosește imaginea <code>{{filename}}</code>',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *named* image **/
  'asset-source.usage-list.documents-using-image_named_zero':
    'Niciun document nu folosește imaginea <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-image_unnamed_one':
    'Un document folosește această imagine',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *unnamed* image **/
  'asset-source.usage-list.documents-using-image_unnamed_zero':
    'Niciun document nu folosește această imagine',

  /** Common (all) Asset Source texts. Note that all translation keys starting with 'asset-source.' is for the built in asset source. */
  'asset-sources.common.uploader.upload-failed.description':
    'Consultați consola pentru mai multe informații.',
  'asset-sources.common.uploader.upload-failed.title': 'Încărcarea a eșuat',
  /** Menu Items for Dataset Asset Source (will be replaced with workspace name by default) */
  'asset-sources.dataset.file.title': 'Fișierele spațiului de lucru',
  'asset-sources.dataset.image.title': 'Imaginile spațiului de lucru',
  /** Error messages for the Media Library Asset Source  */
  'asset-sources.media-library.error.library-could-not-be-resolved':
    'Ceva a mers prost încercând să rezolve Media Library pentru acest proiect.',
  /** Error message shown when no media library has been provisioned for the current organization */
  'asset-sources.media-library.error.no-media-library-provisioned':
    'Nu a fost provisionată nicio bibliotecă media pentru această organizație.',
  /** Menu Items for Media Library Asset Source */
  'asset-sources.media-library.file.title': 'Biblioteca Media',
  'asset-sources.media-library.image.title': 'Biblioteca Media',
  /** Info messages for the Media Library Asset Source  */
  'asset-sources.media-library.select-dialog.title_file': undefined, // 'Selecting file for {{targetTitle}}'
  'asset-sources.media-library.select-dialog.title_image': undefined, // 'Selecting image for {{targetTitle}}'
  'asset-sources.media-library.select-dialog.title_video': undefined, // 'Selecting video for {{targetTitle}}'
  /** Warning message shown when uploading already existing files to the Media Library Asset Source */
  'asset-sources.media-library.warning.file-already-exist.description': undefined, // 'Using the existing file found in the library.'
  'asset-sources.media-library.warning.file-already-exist.title': undefined, // 'File: \'{{filename}}\' already exists'

  /** Label when a release has been deleted by a different user */
  'banners.deleted-bundle-banner.text': "Lansarea '<strong>{{title}}</strong>' a fost ștearsă.",

  /** Action message for navigating to next month */
  'calendar.action.go-to-next-month': 'Mergi la luna următoare',
  /** Action message for navigating to next year */
  'calendar.action.go-to-next-year': 'Mergi la anul următor',
  /** Action message for navigating to previous month */
  'calendar.action.go-to-previous-month': 'Mergi la luna precedentă',
  /** Action message for navigating to previous year */
  'calendar.action.go-to-previous-year': 'Mergi la anul precedent',
  /* Label for navigating the calendar to "today", without _selecting_ today. Short form, eg `Today`, not `Go to today` */
  'calendar.action.go-to-today': 'Astăzi',
  /* Accessibility label for navigating the calendar to "today", without _selecting_ today */
  'calendar.action.go-to-today-aria-label': 'Mergi la data de astăzi',
  /* Label for navigating the calendar to "tomorrow", without _selecting_ tomorrow. Short form, eg `Tomorrow`, not `Go to tomorrow` */
  'calendar.action.go-to-tomorrow': 'Mâine',
  /* Label for navigating the calendar to "yesterday", without _selecting_ yesterday. Short form, eg `Yesterday`, not `Go to yesterday` */
  'calendar.action.go-to-yesterday': 'Ieri',
  /** Label for switch that controls whether or not to include time in given timestamp */
  'calendar.action.include-time-label': 'Include ora',
  /** Action message for selecting the time */
  'calendar.action.select-time': 'Selectează ora',
  /** Action message for setting to the current time */
  'calendar.action.set-to-current-time': 'Setează la ora curentă',
  /** Label for selecting an hour preset. Receives a `time` param as a string on hh:mm format and a `date` param as a Date instance denoting the preset date */
  'calendar.action.set-to-time-preset': '{{time}} la {{date, datetime}}',
  /** Aria label for button to open date picker */
  'calendar.button.aria-label': 'Deschide calendarul',
  /** Tooltip content for button to open datetime input */
  'calendar.button.tooltip-text': 'Selectează data',
  /** Error message displayed in calendar when entered date is not the correct format */
  'calendar.error.must-be-in-format': 'Trebuie să fie în formatul: {{exampleDate}}',
  /** Month name for April */
  'calendar.month-names.april': 'Aprilie',
  /** Month name for August */
  'calendar.month-names.august': 'August',
  /** Month name for December */
  'calendar.month-names.december': 'Decembrie',
  /** Month name for February */
  'calendar.month-names.february': 'Februarie',
  /** Month name for January */
  'calendar.month-names.january': 'Ianuarie',
  /** Month name for July */
  'calendar.month-names.july': 'Iulie',
  /** Month name for June */
  'calendar.month-names.june': 'Iunie',
  /** Month name for March */
  'calendar.month-names.march': 'Martie',
  /** Month name for May */
  'calendar.month-names.may': 'Mai',
  /** Month name for November */
  'calendar.month-names.november': 'Noiembrie',
  /** Month name for October */
  'calendar.month-names.october': 'Octombrie',
  /** Month name for September */
  'calendar.month-names.september': 'Septembrie',
  /** Short weekday name for Friday */
  'calendar.weekday-names.short.friday': 'Vin',
  /** Short weekday name for Monday */
  'calendar.weekday-names.short.monday': 'Lun',
  /** Short weekday name for Saturdayday */
  'calendar.weekday-names.short.saturday': 'Sâm',
  /** Short weekday name for Sunday */
  'calendar.weekday-names.short.sunday': 'Dum',
  /** Short weekday name for Thursday */
  'calendar.weekday-names.short.thursday': 'Joi',
  /** Short weekday name for Tuesday */
  'calendar.weekday-names.short.tuesday': 'Mar',
  /** Short weekday name for Wednesday */
  'calendar.weekday-names.short.wednesday': 'Mie',

  /** Label for the close button label in Review Changes pane */
  'changes.action.close-label': 'Închide istoricul',
  /** Cancel label for revert button prompt action */
  'changes.action.revert-all-cancel': 'Anulează',
  /** Revert all confirm label for revert button action - used on prompt button + review changes pane */
  'changes.action.revert-all-confirm': 'Revenire la toate',
  /** Prompt for confirming revert change (singular) label for field change action */
  'changes.action.revert-changes-confirm-change_one': 'Revenire la schimbare',
  /** Prompt for reverting changes for a field change */
  'changes.action.revert-changes-description':
    'Sunteți sigur că doriți să reveniți la schimbările efectuate?',
  /** Prompt for reverting changes for a group change, eg multiple changes */
  'changes.action.revert-changes-description_one':
    'Sunteți sigur că doriți să reveniți la schimbarea efectuată?',
  /** Label for when the action of the change was to set something that was previously empty, eg a field was given a value, an array item was added, an asset was selected or similar */
  'changes.added-label': 'Adăugat',
  /** Array diff: An item was added in a given position (`{{position}}`) */
  'changes.array.item-added-in-position': 'Adăugat în poziția {{position}}',
  'changes.array.item-moved_down_one': 'Mutat cu {{count}} poziție în jos',
  /**
   * Array diff: An item was moved within the array.
   * Receives `{{count}}` representing number of positions it moved.
   * Context is the direction of the move, either `up` or `down`.
   */
  'changes.array.item-moved_up_one': 'Mutat cu {{count}} poziție în sus',
  /** Array diff: An item was removed from a given position (`{{position}}`) */
  'changes.array.item-removed-from-position': 'Eliminat din poziția {{position}}',
  /** Accessibility label for the "change bar" shown when there are edits on a field-level */
  'changes.change-bar.aria-label': 'Revizuirea schimbărilor',
  /** Label for when the action of the change was _not_ an add/remove, eg a text field changed value, an image was changed from one asset to another or similar */
  'changes.changed-label': 'Schimbat',
  /** Label and text for tooltip that indicates the authors of the changes */
  'changes.changes-by-author': 'Schimbări efectuate de',
  /** Additional text shown in development mode when a diff component crashes during rendering */
  'changes.error-boundary.developer-info':
    'Verificați consola de dezvoltare pentru mai multe informații',
  /** Text shown when a diff component crashes during rendering, triggering the error boundary */
  'changes.error-boundary.title': 'Redarea schimbărilor în acest câmp a cauzat o eroare',
  /* Error description when changes could not be loaded */
  'changes.error-description': 'Nu putem încărca modificările pentru acest document.',
  /** Error title when changes could not be loaded */
  'changes.error-title': 'Ceva a mers prost',
  /** Error message shown when the value of a field is not the expected one */
  'changes.error.incorrect-type-message':
    'Eroare de valoare: Valoarea este de tipul "<code>{{actualType}}</code>", se aștepta "<code>{{expectedType}}</code>"',
  /** File diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.file.meta-info-fallback-title': 'Fără titlu',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.crop-changed': 'Decupajul s-a schimbat',
  /** Image diff: Text shown if the previous image asset was deleted (shouldn't theoretically happen) */
  'changes.image.deleted': 'Imagine ștearsă',
  /** Image diff: Text shown if the image failed to be loaded when previewing it */
  'changes.image.error-loading-image': 'Eroare la încărcarea imaginii',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.hotspot-changed': 'Hotspot-ul s-a schimbat',
  /** Image diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.image.meta-info-fallback-title': 'Fără titlu',
  /** Image diff: Text shown if no asset has been set for the field (but has metadata changes) */
  'changes.image.no-asset-set': 'Imaginea nu este setată',
  /** Image diff: Text shown when the from/to state has/had no image */
  'changes.image.no-image-placeholder': '(fără imagine)',
  /** Label for the "from" value in the change inspector */
  'changes.inspector.from-label': 'De la',
  /** Label for the "meta" (field path, action etc) information in the change inspector */
  'changes.inspector.meta-label': 'Meta',
  /** Label for the "to" value in the change inspector */
  'changes.inspector.to-label': 'La',
  /** Loading author of change in the differences tooltip in the review changes pane */
  'changes.loading-author': 'Se încarcă…',
  /** Loading changes in Review Changes Pane */
  'changes.loading-changes': 'Se încarcă modificările…',
  /** Error message shown when the document revision could not be found */
  'changes.missing-since-document-error':
    'Nu am putut găsi revizia documentului cu id-ul: <code>{{revisionId}}</code> pe care încercați să o comparați. <Break/> Acest lucru se datorează probabil politicii de retenție a istoricului planului dumneavoastră. <Break/> Vă rugăm să selectați o intrare <strong>De la</strong> diferită.',
  /** No Changes description in the Review Changes pane */
  'changes.no-changes-description':
    'Editați documentul sau selectați o versiune mai veche în cronologie pentru a vedea o listă de modificări care apar în acest panou.',
  /** No Changes title in the Review Changes pane */
  'changes.no-changes-title': 'Nu există modificări',
  /* Label for the tooltip that shows when an action is not selectable*/
  'changes.not-selectable': 'Nu este posibil să selectați acest eveniment',
  /** Portable Text diff: An annotation was added */
  'changes.portable-text.annotation_added': 'Adăugată adnotare',
  /** Portable Text diff: An annotation was changed */
  'changes.portable-text.annotation_changed': 'Adnotare modificată',
  /** Portable Text diff: An annotation was removed */
  'changes.portable-text.annotation_removed': 'Adnotare eliminată',
  /** Portable Text diff: An annotation was left unchanged */
  'changes.portable-text.annotation_unchanged': 'Adnotare neschimbată',
  /** Portable Text diff: A block changed from one style to another (eg `normal` to `h1` or similar) */
  'changes.portable-text.block-style-changed':
    'Stilul blocului s-a schimbat de la "{{fromStyle}}" la "{{toStyle}}"',
  /** Portable Text diff: Change formatting of text (setting/unsetting marks, eg bold/italic etc) */
  'changes.portable-text.changed-formatting': 'Formatarea s-a schimbat',
  /** Portable Text diff: An empty inline object is part of a change */
  'changes.portable-text.empty-inline-object': 'Obiect {{inlineObjectType}} gol',
  /** Portable Text diff: An empty object is the result of adding/removing an annotation */
  'changes.portable-text.empty-object-annotation': 'Annotație {{annotationType}} goală',
  /** Portable Text diff: Added a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_added': 'Text gol adăugat',
  /** Portable Text diff: Changed a block that contained no text (eg empty block) */
  'changes.portable-text.empty-text_changed': 'Text gol modificat',
  /** Portable Text diff: Removed a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_removed': 'Text gol eliminat',
  /** Portable Text diff: An inline object was added */
  'changes.portable-text.inline-object_added': 'Obiect inline adăugat',
  /** Portable Text diff: An inline object was changed */
  'changes.portable-text.inline-object_changed': 'Obiect inline modificat',
  /** Portable Text diff: An inline object was removed */
  'changes.portable-text.inline-object_removed': 'Obiect inline eliminat',
  /** Portable Text diff: An inline object was left unchanged */
  'changes.portable-text.inline-object_unchanged': 'Obiect inline neschimbat',
  /** Portable Text diff: Added a chunk of text */
  'changes.portable-text.text_added': 'Text adăugat',
  /** Portable Text diff: Removed a chunk of text */
  'changes.portable-text.text_removed': 'Text eliminat',
  /** Portable Text diff: Annotation has an unknown schema type */
  'changes.portable-text.unknown-annotation-schema-type': 'Tip de schemă necunoscut',
  /** Portable Text diff: Inline object has an unknown schema type */
  'changes.portable-text.unknown-inline-object-schema-type': 'Tip de schemă necunoscut',
  /** Label for when the action of the change was a removal, eg a field was cleared, an array item was removed, an asset was deselected or similar */
  'changes.removed-label': 'Eliminat',
  /** Same Revision Selected description in the Review Changes pane */
  'changes.same-revision-selected-description':
    'Ați selectat aceeași revizie <strong>de la</strong> și <strong>la</strong>, vă rugăm să selectați revizii diferite pentru a compara schimbările dintre ele.',
  /** Same Revision Selected title in the Review Changes pane */
  'changes.same-revision-selected-title': 'Aceeași revizie selectată',
  /** Title for the Review Changes pane */
  'changes.title': 'Istoric',
  /**The title that will be shown in the badge inside the events when the item is a draft */
  'changes.versions.draft': 'Ciornă',

  /** --- Common components --- */
  /** Tooltip text for context menu buttons */
  'common.context-menu-button.tooltip': 'Arată mai mult',
  /** Default text for dialog cancel button */
  'common.dialog.cancel-button.text': 'Anulează',
  /** Default text for dialog confirm button */
  'common.dialog.confirm-button.text': 'Confirmă',
  /** Default text in shared loader text / spinner lockup */
  'common.loading': 'Se încarcă',
  /** The title of the reconnecting toast */
  'common.reconnecting.toast.title': 'Încercăm să ne conectăm…',

  /** --- Configuration issues --- */
  /** Default label text on configuration issues button */
  'configuration-issues.button.label': 'Probleme de configurare',
  /** Tooltip displayed on configuration issues button */
  'configuration-issues.button.tooltip': 'Au fost găsite probleme de configurare',

  /** The fallback title for an ordering menu item if no localized titles are provided. */
  'default-menu-item.fallback-title': 'Sortează după {{title}}',

  /** Title for the default ordering/SortOrder if no orderings are provided and the caption field is found */
  'default-orderings.caption': 'Sortează după Legenda',
  /** Title for the default ordering/SortOrder if no orderings are provided and the description field is found */
  'default-orderings.description': 'Sortează după Descriere',
  /** Title for the default ordering/SortOrder if no orderings are provided and the header field is found */
  'default-orderings.header': 'Sortează după Antet',
  /** Title for the default ordering/SortOrder if no orderings are provided and the heading field is found */
  'default-orderings.heading': 'Sortează după Titlu',
  /** Title for the default ordering/SortOrder if no orderings are provided and the label field is found */
  'default-orderings.label': 'Sortează după Etichetă',
  /** Title for the default ordering/SortOrder if no orderings are provided and the name field is found */
  'default-orderings.name': 'Sortează după Nume',
  /** Title for the default ordering/SortOrder if no orderings are provided and the title field is found */
  'default-orderings.title': 'Sortează după Titlu',

  /** Label to show in the document footer indicating the creation date of the document */
  'document-status.created': 'Creat {{date}}',
  /** Label to show in the document status indicating the date of the status */
  'document-status.date': '{{date}}',
  /** Label to show in the document footer indicating the last edited date of the document */
  'document-status.edited': 'Editat {{date}}',
  /** Label to show in the document footer indicating the document is not published*/
  'document-status.not-published': 'Nepublicat',
  /** Label to show in the document footer indicating the published date of the document */
  'document-status.published': 'Publicat {{date}}',
  /** Label to show in the document footer indicating the revision from date of the document */
  'document-status.revision-from': 'Revizie din <em>{{date}}</em>',
  /** Label to show in the document footer indicating that the revision was not found */
  'document-status.revision-not-found': 'Revizie negăsită',

  /** Label to indicate that a document type was not found */
  'document.type.not-found': 'Tipul documentului "{{type}}" nu a fost găsit',

  /** Error message shown when an action cannot be performed */
  'errors.unable-to-perform-action': undefined, // 'Unable to perform this action'

  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.duplicate-keys-alert.details.additional-description':
    'Valoarea proprietății <code>_key</code> trebuie să fie un șir de caractere unic.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property of each elements has been generated non-uniquely. */
  'form.error.duplicate-keys-alert.details.description':
    'Aceasta se întâmplă de obicei când elementele sunt create folosind un client API, și proprietatea <code>_key</code> a fiecărui element a fost generată în mod neunic.',
  /** Developer info */
  'form.error.duplicate-keys-alert.details.title': 'Informații pentru dezvoltatori',
  /** Generate unique keys */
  'form.error.duplicate-keys-alert.generate-button.text': 'Generează chei unice',
  /** Several items in this list share the same identifier (key). Every item must have an unique identifier. */
  'form.error.duplicate-keys-alert.summary':
    'Mai multe elemente din această listă împărtășesc același identificator (cheie). Fiecare element trebuie să aibă un identificator unic.',
  /** Non-unique keys */
  'form.error.duplicate-keys-alert.title': 'Chei neunice',
  /** Error text shown when a field with a given name cannot be found in the schema or is conditionally hidden but explicitly told to render  */
  'form.error.field-not-found':
    'Câmpul "{{fieldName}}" nu a fost găsit printre membri – verificați dacă este definit în schema și că nu a fost ascuns condiționat.',
  /** Add missing keys */
  'form.error.missing-keys-alert.add-button.text': 'Adaugă chei lipsă',
  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.missing-keys-alert.details.additional-description':
    'Valoarea proprietății <code>_key</code> trebuie să fie un șir de caractere unic.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property has not been included. */
  'form.error.missing-keys-alert.details.description':
    'Aceasta se întâmplă de obicei când elementele sunt create folosind un client API, și proprietatea <code>_key</code> nu a fost inclusă.',
  /** Developer info */
  'form.error.missing-keys-alert.details.title': 'Informații pentru dezvoltatori',
  /** Some items in the list are missing their keys. This must be fixed in order to edit the list. */
  'form.error.missing-keys-alert.summary':
    'Unor elemente din listă le lipsesc cheile. Aceasta trebuie remediat pentru a putea edita lista.',
  /** Missing keys */
  'form.error.missing-keys-alert.title': 'Chei lipsă',
  /** This usually happens when items are created using an API client, or when a custom input component has added invalid data to the list. */
  'form.error.mixed-array-alert.details.description':
    'Acest lucru se întâmplă de obicei atunci când elementele sunt create folosind un client API, sau când un component de intrare personalizat a adăugat date invalide în listă.',
  /** Developer info */
  'form.error.mixed-array-alert.details.title': 'Informații pentru dezvoltatori',
  /**  Remove non-object values */
  'form.error.mixed-array-alert.remove-button.text': 'Eliminați valorile care nu sunt obiecte',
  /** Some items in this list are not objects. This must be fixed in order to edit the list. */
  'form.error.mixed-array-alert.summary':
    'Unele elemente din această listă nu sunt obiecte. Acest lucru trebuie rezolvat pentru a putea edita lista.',
  /** Invalid list values */
  'form.error.mixed-array-alert.title': 'Valori invalide în listă',
  /** Error text shown when form is unable to find an array item at a given indexed path */
  'form.error.no-array-item-at-index':
    'Nu s-a găsit niciun element al matricei la indexul <code>{{index}}</code> pe calea <code>{{path}}</code>',
  /** Error text shown when form is unable to find an array item at a given keyed path */
  'form.error.no-array-item-at-key':
    'Nu s-a găsit niciun element al matricei cu `_key` <code>"{{key}}"</code> pe calea <code>{{path}}</code>',
  /** The title above the error call stack output related to the crash */
  'form.error.unhandled-runtime-error.call-stack.title': 'Stiva de apeluri:',
  /** The title above the error component stack provided by React's underlying ErrorBoundary component */
  'form.error.unhandled-runtime-error.component-stack.title': 'Stiva de componente:',
  /** The error message for the unhandled error that crashed the Input component during render */
  'form.error.unhandled-runtime-error.error-message': 'Eroare: {{message}}',
  /** The title for the error card rendered inside a field in place of a crashing input */
  'form.error.unhandled-runtime-error.title': 'Eroare de Runtime Necontrolată',
  /** Form field deprecated label */
  'form.field.deprecated-label': 'depreciat',
  /** Fallback title shown above field if it has no defined title */
  'form.field.untitled-field-label': 'Fără titlu',
  /** Accessibility label for the icon that indicates the field has a validation error */
  'form.validation.has-error-aria-label': 'Conține eroare',
  /** Accessibility label for the icon that indicates the field has validation information */
  'form.validation.has-info-aria-label': 'Conține informații',
  /** Accessibility label for the icon that indicates the field has a validation warning */
  'form.validation.has-warning-aria-label': 'Conține avertisment',
  /** Text shown when summarizing validation information, when the field has one or more errors */
  'form.validation.summary.errors-count_one': '{{count}} eroare',
  /** Text shown when summarizing validation information, when the field has one or more warnings */
  'form.validation.summary.warnings-count_one': '{{count}} avertisment',

  /** Tooltip for free trial navbar button indicating remaining days */
  'free-trial.tooltip.days-count_one': '{{count}} zi rămasă în perioada de probă',
  /** Tooltip for free trial navbar button, once trial has ended */
  'free-trial.tooltip.trial-finished': 'Actualizați proiectul',

  /**
   * Label for "contact sales" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.contact-sales': 'Contactați vânzările',
  /**
   * Label for "help and support" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.help-and-support': 'Ajutor și suport',
  /**
   * Label for "join our community" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.join-our-community': 'Alăturați-vă comunității noastre',
  /** Information for what the latest sanity version is */
  'help-resources.latest-sanity-version': 'Ultima versiune este {{latestVersion}}',
  /** Menu item for reloading Studio to update */
  'help-resources.studio-auto-update-now': undefined, // 'Reload to update to v{{newVersion}}'
  /** Information for what studio version the current studio is running */
  'help-resources.studio-version': 'Versiunea Sanity Studio {{studioVersion}}',
  /** Title for help and resources menus */
  'help-resources.title': 'Ajutor și resurse',

  /** Text for button to cancel an ongoing upload */
  'input.files.common.cancel-upload': 'Anulează',
  /** Text for menuitem upload button default asset source */
  'input.files.common.upload-placeholder.file-input-button.default-source.badge': 'Implicit',
  /** Text for file input button in upload placeholder */
  'input.files.common.upload-placeholder.file-input-button.text': 'Încarcă',
  /** Uploading <FileName/> */
  'input.files.common.upload-progress': 'Se încarcă <FileName/>',
  /** The referenced document cannot be opened, because the URL failed to be resolved */
  'input.reference.document-cannot-be-opened.failed-to-resolve-url':
    'Acest document nu poate fi deschis (imposibil de rezolvat URL-ul către Studio)',

  /** Label for adding item after a specific array item */
  'inputs.array.action.add-after': 'Adaugă element după',
  /** Label for adding item before a specific array item */
  'inputs.array.action.add-before': 'Adaugă element înainte',
  /** Label for adding array item action when the schema allows for only one schema type */
  'inputs.array.action.add-item': 'Adaugă element',
  /**
   * Label for adding one array item action when the schema allows for multiple schema types,
   * eg. will prompt the user to select a type once triggered
   */
  'inputs.array.action.add-item-select-type': 'Adaugă element...',
  /** Label for copying an array item  */
  'inputs.array.action.copy': 'Copiază',
  /** Array drag handle button tooltip */
  'inputs.array.action.drag.tooltip': 'Trage pentru a reordona',
  /** Label for duplicating an array item  */
  'inputs.array.action.duplicate': 'Duplică',
  /** Label for editing the item of a specific type, eg "Edit Person" */
  'inputs.array.action.edit': 'Editează {{itemTypeTitle}}',
  /** Label for removing an array item action  */
  'inputs.array.action.remove': 'Elimină',
  /** Label for removing action when an array item has an error  */
  'inputs.array.action.remove-invalid-item': 'Elimină',
  /** Label for viewing the item of a specific type, eg "View Person" */
  'inputs.array.action.view': 'Vizualizează {{itemTypeTitle}}',
  /** Error description for the array item tooltip that explains that the current item can still be moved or deleted but not edited since the schema definition is not found */
  'inputs.array.error.can-delete-but-no-edit-description':
    'Puteți totuși să mutați sau să eliminați acest element, dar nu poate fi editat deoarece definiția schemei pentru tipul său nu poate fi găsită.',
  /** Error label for toast when array could not resolve the initial value */
  'inputs.array.error.cannot-resolve-initial-value-title':
    'Imposibil de rezolvat valoarea inițială pentru tipul: {{schemaTypeTitle}}: {{errorMessage}}.',
  /** Error label for toast when trying to upload one array item of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_one':
    'Următorul element nu poate fi încărcat deoarece nu există o conversie cunoscută de la tipul de conținut la elementul de listă:',
  /** Error description for the array item tooltip that explains that the current type item is not valid for the list  */
  'inputs.array.error.current-schema-not-declare-description':
    'Schema actuală nu declară elemente de tip <code>{{typeName}}</code> ca fiind valide pentru această listă. Acest lucru ar putea însemna că tipul a fost eliminat ca un tip de element valid, sau că cineva altcineva l-a adăugat la propria schemă locală care încă nu este implementată.',
  /** Error description to show how the item is being represented in the json format */
  'inputs.array.error.json-representation-description': 'Reprezentarea JSON a acestui element:',
  /** Error description for the array item tooltip that explains what the error means with more context */
  'inputs.array.error.type-is-incompatible-prompt':
    'Element de tip <code>{{typeName}}</code> nu este valid pentru această listă',
  /** Error title for when an item type within an array input is incompatible, used in the tooltip */
  'inputs.array.error.type-is-incompatible-title': 'De ce se întâmplă asta?',
  /** Error label for unexpected errors in the Array Input */
  'inputs.array.error.unexpected-error': 'Eroare neașteptată: {{error}}',
  /** Label for the array insert menu all items filter  */
  'inputs.array.insert-menu.filter.all-items': 'Toate',
  /** Label for when the array insert menu search shows no items */
  'inputs.array.insert-menu.search.no-results': 'Nu s-au găsit articole',
  /** Placeholder for the array insert menu search field */
  'inputs.array.insert-menu.search.placeholder': 'Caută',
  /** Tooltip for the array insert menu grid view toggle */
  'inputs.array.insert-menu.toggle-grid-view.tooltip': 'Comută vizualizarea în grilă',
  /** Tooltip for the array insert menu list view toggle */
  'inputs.array.insert-menu.toggle-list-view.tooltip': 'Comută vizualizarea în listă',
  /** Label for when the array input doesn't have any items */
  'inputs.array.no-items-label': 'Niciun articol',
  /** Label for read only array fields */
  'inputs.array.read-only-label': 'Acest câmp este doar pentru citire',
  /** Label for when the array input is resolving the initial value for the item */
  'inputs.array.resolving-initial-value': 'Se determină valoarea inițială…',
  /** Tooltip content when boolean input is disabled */
  'inputs.boolean.disabled': 'Dezactivat',
  /** Warning label when selected datetime is in the past */
  'inputs.dateTime.past-date-warning': 'Selectați o dată în viitor.',
  /** Placeholder value for datetime input */
  'inputs.datetime.placeholder': 'de ex. {{example}}',
  /** Acessibility label for button to open file options menu */
  'inputs.file.actions-menu.file-options.aria-label': 'Deschide meniul opțiunilor pentru fișier',
  /** Browse */
  'inputs.file.browse-button.text': 'Selectează',
  /** Select file */
  'inputs.file.dialog.title': 'Selectează fișier',
  /** Unknown member kind: `{{kind}}` */
  'inputs.file.error.unknown-member-kind': 'Tip de membru necunoscut: {{kind}}',
  /** The value of this field is not a valid file. Resetting this field will let you choose a new file. */
  'inputs.file.invalid-file-warning.description':
    'Valoarea acestui câmp nu este un fișier valid. Resetarea acestui câmp vă va permite să alegeți un fișier nou.',
  /** Reset value */
  'inputs.file.invalid-file-warning.reset-button.text': 'Resetează valoarea',
  /** Invalid file value */
  'inputs.file.invalid-file-warning.title': 'Valoare fișier invalidă',
  /** Select */
  'inputs.file.multi-browse-button.text': 'Selectează',
  /** The upload could not be completed at this time. */
  'inputs.file.upload-failed.description': 'Încărcarea nu a putut fi finalizată în acest moment.',
  /** Upload failed */
  'inputs.file.upload-failed.title': 'Încărcare eșuată',
  /** Clear field */
  'inputs.files.common.actions-menu.clear-field.label': 'Șterge câmpul',
  /** Copy URL */
  'inputs.files.common.actions-menu.copy-url.label': 'Copiază URL',
  /** Download */
  'inputs.files.common.actions-menu.download.label': 'Descarcă',
  /** The URL is copied to the clipboard */
  'inputs.files.common.actions-menu.notification.url-copied': 'URL-ul a fost copiat în clipboard',
  /** Replace */
  'inputs.files.common.actions-menu.replace.label': 'Înlocuiește',
  /** Upload */
  'inputs.files.common.actions-menu.upload.label': 'Încarcă',
  /** Drop to upload */
  'inputs.files.common.drop-message.drop-to-upload': 'Trageți pentru a încărca',
  /** Drop to upload `{{count}}` file */
  'inputs.files.common.drop-message.drop-to-upload-multi_one':
    'Trageți pentru a încărca {{count}} fișier',
  /** Can't upload this file here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_one':
    'Nu se poate încărca acest fișier aici',
  /** `{{count}}` file can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_one':
    '{{count}} fișier nu poate fi încărcat aici',
  /** Cannot upload `{{count}}` files */
  'inputs.files.common.placeholder.cannot-upload-some-files_one': 'Nu se poate încărca fișierul',
  /** Drag or paste type here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_file':
    'Trageți sau lipiți fișierul aici',
  /** Drag or paste image here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_image':
    'Trageți sau lipiți imaginea aici',
  /** Drop to upload file */
  'inputs.files.common.placeholder.drop-to-upload_file': 'Trageți pentru a încărca fișierul',
  /** Drop to upload image */
  'inputs.files.common.placeholder.drop-to-upload_image': 'Trageți pentru a încărca imaginea',
  /** Read only */
  'inputs.files.common.placeholder.read-only': 'Doar citire',
  /** Select asset source destination for files to upload */
  'inputs.files.common.placeholder.select-asset-source-upload-destination':
    'Încărcați fișierele la:',
  /** Can't upload files here */
  'inputs.files.common.placeholder.upload-not-supported': 'Nu se pot încărca fișiere aici',
  /** Clear upload */
  'inputs.files.common.stale-upload-warning.clear': 'Șterge încărcarea',
  /** An upload has made no progress for at least `{{staleThresholdMinutes}}` minutes and likely got interrupted. You can safely clear the incomplete upload and try uploading again. */
  'inputs.files.common.stale-upload-warning.description':
    'O încărcare nu a înregistrat niciun progres timp de cel puțin {{staleThresholdMinutes}} minute și probabil a fost întreruptă. Puteți șterge în siguranță încărcarea incompletă și încercați să încărcați din nou.',
  /** Incomplete upload */
  'inputs.files.common.stale-upload-warning.title': 'Încărcare incompletă',
  /** Tooltip text for action to crop image */
  'inputs.image.actions-menu.crop-image-tooltip': 'Decupează imaginea',
  /** Accessibility label for button to open image edit dialog */
  'inputs.image.actions-menu.edit-details.aria-label': 'Deschide dialogul de editare a imaginii',
  /** Accessibility label for button to open image options menu */
  'inputs.image.actions-menu.options.aria-label': 'Deschide meniul de opțiuni pentru imagine',
  /** Select */
  'inputs.image.browse-menu.text': 'Selectează',
  /** Cannot upload this file here */
  'inputs.image.drag-overlay.cannot-upload-here': 'Nu se poate încărca acest fișier aici',
  /** Drop image to upload */
  'inputs.image.drag-overlay.drop-to-upload-image': 'Trageți imaginea pentru a o încărca',
  /** This field is read only */
  'inputs.image.drag-overlay.this-field-is-read-only': 'Acest câmp este doar pentru citire',
  /** Unknown member kind: `{{kind}}` */
  'inputs.image.error.unknown-member-kind': 'Tip de membru necunoscut: {{kind}}',
  /** Edit hotspot and crop */
  'inputs.image.hotspot-dialog.title': 'Editează hotspot și decupează',
  /** The value of this field is not a valid image. Resetting this field will let you choose a new image. */
  'inputs.image.invalid-image-warning.description':
    'Valoarea acestui câmp nu este o imagine validă. Resetarea acestui câmp vă va permite să alegeți o nouă imagine.',
  /** Reset value */
  'inputs.image.invalid-image-warning.reset-button.text': 'Resetează valoarea',
  /** Invalid image value */
  'inputs.image.invalid-image-warning.title': 'Valoare imagine invalidă',
  /** Preview of uploaded image */
  'inputs.image.preview-uploaded-image': 'Previzualizare imagine încărcată',
  /** The upload could not be completed at this time. */
  'inputs.image.upload-error.description': 'Încărcarea nu a putut fi finalizată în acest moment.',
  /** Upload failed */
  'inputs.image.upload-error.title': 'Încărcare eșuată',
  /** Adjust the rectangle to crop image. Adjust the circle to specify the area that should always be visible. */
  'inputs.imagetool.description':
    'Ajustează dreptunghiul pentru a decupa imaginea. Ajustează cercul pentru a specifica zona care ar trebui să fie întotdeauna vizibilă.',
  /** Error: `{{errorMessage}}` */
  'inputs.imagetool.load-error': 'Eroare: {{errorMessage}}',
  /** Hotspot & Crop */
  'inputs.imagetool.title': 'Hotspot & Decupare',
  /** Warnings displayed to developers when using the crop/hotspot tool on vector images, notifying them that crops/hotspot are not respected when serving the image in vector format. For the crop/hotspot to apply, images must be served in a raster format such as JPG or PNG, by appending eg `fm=jpg` to the image url, or calling `format('jpg')` if using `@sanity/image-url` */
  'inputs.imagetool.vector-warning.developer-info':
    "Asset Pipeline nu suportă hotspot și decupare pentru formatele vectoriale. Pentru a activa hotspot & decupare, exportați această imagine în oricare dintre formatele raster suportate. De exemplu: <code>fm=jpg</code> la <ImageUrlDocumentationLink>URL-ul imaginii</ImageUrlDocumentationLink> sau apelați <code>.format('png')</code> cu <ImageUrlPackageDocumentationLink>@sanity/image-url</ImageUrlPackageDocumentationLink>.",
  /** See developer info */
  'inputs.imagetool.vector-warning.expand-developer-info': 'Vezi informații pentru dezvoltatori',
  /** Gotcha: Serving vector images with hotspot and crop from the Sanity Image API */
  'inputs.imagetool.vector-warning.title':
    'Atenție: Hotspot și decupare s-ar putea să nu fie aplicate acestei imagini acolo unde este prezentată.',
  /** Convert to `{{targetType}}` */
  'inputs.invalid-value.convert-button.text': 'Convertește în {{targetType}}',
  /** The current value (<code>`{{actualType}}`</code>) */
  'inputs.invalid-value.current-type': 'Valoarea curentă (<code>{{actualType}}</code>)',
  /** The property value is stored as a value type that does not match the expected type. */
  'inputs.invalid-value.description':
    'Valoarea proprietății este stocată ca un tip de valoare care nu se potrivește cu tipul așteptat.',
  /** The value of this property must be of type <code>`{{validType}}`</code> according to the schema. */
  'inputs.invalid-value.details.description':
    'Valoarea acestei proprietăți trebuie să fie de tip <code>{{validType}}</code> conform schemei.',
  /** Only the following types are valid here according to schema: */
  'inputs.invalid-value.details.multi-type-description':
    'Doar următoarele tipuri sunt valide aici conform schemei:',
  /** Mismatching value types typically occur when the schema has recently been changed. */
  'inputs.invalid-value.details.possible-reason':
    'Tipurile de valori neconcordante apar de obicei atunci când schema a fost recent modificată.',
  /** Developer info */
  'inputs.invalid-value.details.title': 'Informații pentru dezvoltatori',
  /** -- Invalid Value Input -- */
  /** Reset value */
  'inputs.invalid-value.reset-button.text': 'Resetează valoarea',
  /** Invalid property value */
  'inputs.invalid-value.title': 'Valoare proprietate invalidă',
  /** Title for the "All fields" field group */
  'inputs.object.field-group-tabs.all-fields-title': 'Toate câmpurile',
  /** Aria label for the "Field groups" select control on smaller screens */
  'inputs.object.field-group-tabs.aria-label': 'Grupuri de câmpuri',
  /** Read-only field description */
  'inputs.object.unknown-fields.read-only.description':
    'Acest câmp este <strong>doar pentru citire</strong> conform schemei documentului și nu poate fi eliminat. Dacă doriți să puteți elimina acest lucru în Studio, asigurați-vă că eliminați câmpul <code>readOnly</code> din tipul închis în schema.',
  /** Remove field */
  'inputs.object.unknown-fields.remove-field-button.text': 'Elimină câmpul',
  /** Encountered `{{count}}` fields that are not defined in the schema. */
  'inputs.object.unknown-fields.warning.description_one':
    'A fost întâlnit un câmp care nu este definit în schema.',
  /** Detailed description of unknown field warning */
  'inputs.object.unknown-fields.warning.details.description_one':
    'Acest câmp nu este definit în schema, ceea ce ar putea însemna că definiția câmpului a fost eliminată sau că cineva a adăugat-o în propriul proiect local și nu și-a implementat încă modificările.',
  /** Developer info */
  'inputs.object.unknown-fields.warning.details.title': 'Informații pentru dezvoltatori',
  /** Unknown field found */
  'inputs.object.unknown-fields.warning.title_one': 'Câmp necunoscut găsit',
  /** Collapse the editor to save screen space  */
  'inputs.portable-text.action.collapse-editor': 'Restrânge editorul',
  /** Aria label for action to edit an existing annotation */
  'inputs.portable-text.action.edit-annotation-aria-label': 'Editează adnotarea',
  /** Expand the editor to give more editing space */
  'inputs.portable-text.action.expand-editor': 'Extinde editorul',
  /** Label label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block': 'Inserează {{typeName}}',
  /** Accessibility label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block-aria-label': 'Inserează {{typeName}} (bloc)',
  /** Label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object': 'Inserează {{typeName}}',
  /** Accessibility label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object-aria-label': 'Inserează {{typeName}} (inline)',
  /** Aria label for action to remove an annotation */
  'inputs.portable-text.action.remove-annotation-aria-label': 'Elimină adnotarea',
  /** Label for activate on focus with context of click and not focused */
  'inputs.portable-text.activate-on-focus-message_click': 'Clic pentru activare',
  /** Label for activate on focus with context of click and focused */
  'inputs.portable-text.activate-on-focus-message_click-focused':
    'Clic sau apasă spațiu pentru activare',
  /** Label for activate on focus with context of tap and not focused */
  'inputs.portable-text.activate-on-focus-message_tap': 'Atinge pentru activare',
  /** Aria label for the annotation object */
  'inputs.portable-text.annotation-aria-label': 'Obiect adnotare',
  /** Title for dialog that allows editing an annotation */
  'inputs.portable-text.annotation-editor.title': 'Editează {{schemaType}}',
  /** Title of the default "link" annotation */
  'inputs.portable-text.annotation.link': 'Link',
  /** Aria label for the block object */
  'inputs.portable-text.block.aria-label': 'Obiect bloc',
  /** Label for action to edit a block item, in the case where it is editable */
  'inputs.portable-text.block.edit': 'Editează',
  /** Accessibility label for the button that opens the actions menu on blocks */
  'inputs.portable-text.block.open-menu-aria-label': 'Deschide meniul',
  /** Label for action to open a reference, in the case of block-level reference types */
  'inputs.portable-text.block.open-reference': 'Deschide referința',
  /** Label for action to remove a block item */
  'inputs.portable-text.block.remove': 'Elimină',
  /** Label for action to view a block item, in the case where it is read-only and thus cannot be edited */
  'inputs.portable-text.block.view': 'Vizualizează',
  /** Title of the "code" decorator */
  'inputs.portable-text.decorator.code': 'Cod',
  /** Title of the "em" (emphasis) decorator */
  'inputs.portable-text.decorator.emphasis': 'Italic',
  /** Title of the "strike-through" decorator */
  'inputs.portable-text.decorator.strike-through': 'Tăiat',
  /** Title of the "strong" decorator */
  'inputs.portable-text.decorator.strong': 'Aldin',
  /** Title of the "underline" decorator */
  'inputs.portable-text.decorator.underline': 'Subliniat',
  /** Placeholder text for when the editor is empty */
  'inputs.portable-text.empty-placeholder': 'Gol',
  /** Aria label for the block object */
  'inputs.portable-text.inline-block.aria-label': 'Obiect în linie',
  /** Label for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit': 'Editează obiectul',
  /** Aria label for icon for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit-aria-label': 'Editează obiectul',
  /** Label for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove': 'Elimină obiectul',
  /** Aria label for icon for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove-aria-label': 'Elimină obiectul',
  /** Disclaimer text shown on invalid Portable Text value, when an action is available to unblock the user, but it is not guaranteed to be safe */
  'inputs.portable-text.invalid-value.action-disclaimer':
    'NOTĂ: De obicei, este sigur să efectuați acțiunea de mai sus, dar dacă aveți îndoieli, luați legătura cu cei responsabili pentru configurarea studioului dvs.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.action': 'Elimină obiectul',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.description':
    'Copilul cu cheia {{childKey}} al blocului cu cheia <code>{{key}}</code> este de tip <code>{{childType}}</code>, ceea ce nu este permis de definiția schemei.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.action': 'Elimină blocul',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.description':
    'Blocul cu cheia <code>{{key}}</code> este de tip <code>{{typeName}}</code>, ceea ce nu este permis de definiția schemei.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.action': 'Inserează un interval de text gol',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.description':
    'Blocul de text cu cheia <code>{{key}}</code> nu are intervale de text.',
  /** Label for the button to ignore invalid values in the Portable Text editor */
  'inputs.portable-text.invalid-value.ignore-button.text': 'Ignoră',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.action':
    'Utilizează tipul <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.description':
    'Blocul cu cheia <code>{{key}}</code> are un nume de tip invalid. Conform schemei, ar trebui să fie <code>{{expectedTypeName}}</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.action': 'Setează valoarea textului gol',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.description':
    'Intervalul cu cheia {{childKey}} al blocului cu cheia <code>{{key}}</code> are o proprietate <code>text</code> lipsă sau invalidă.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.action':
    'Utilizează tipul <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.description':
    'Blocul cu cheia <code>{{key}}</code> nu are un nume de tip. Conform schemei, ar trebui să fie <code>{{expectedTypeName}}</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.action': 'Atribuie o cheie aleatorie',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.description':
    'Copilul de la indexul <code>{{index}}</code> al blocului cu cheia <code>{{key}}</code> nu are proprietatea <code>_key</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.action': 'Elimină obiectul',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.description':
    'Copilul cu cheia {{childKey}} al blocului cu cheia <code>{{key}}</code> nu are proprietatea <code>_type</code>.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.action': 'Atribuie o cheie aleatorie',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.description':
    'Blocul de la indexul <code>{{index}}</code> nu are proprietatea <code>_key</code> necesară.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.action': 'Elimină blocul',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.description':
    'Blocul de text cu cheia <code>{{key}}</code> are o proprietate `children` invalidă sau lipsă.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.action': 'Adaugă proprietatea',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.description':
    'Blocul de text cu cheia <code>{{key}}</code> are o proprietate `markDefs` invalidă sau lipsă.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.action': 'Elimină blocul',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.description':
    'Blocul cu cheia <code>{{key}}</code> nu are un nume de tip.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.action': 'Elimină elementul',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.description':
    'Copilul de la indexul <code>{{index}}</code> al blocului cu cheia <code>{{key}}</code> nu este un obiect.',
  /** Action presented when the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.action': 'Anulează valoarea',
  /** Text explaining that the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.description':
    'Valoarea trebuie să fie un array de blocuri Portable Text, sau nedefinită.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.action': 'Elimină elementul',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.description':
    'Elementul de la <code>{{index}}</code> nu este un obiect,.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.action': 'Elimină marcajele nepermise',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.description':
    'Blocul de text cu cheia <code>{{key}}</code> conține marcaje <code>({{orphanedMarks, list}})</code> care nu sunt permise de schemă.',
  /** Title for the alert indicating that the Portable Text field has an invalid value */
  'inputs.portable-text.invalid-value.title': 'Valoare Portable Text invalidă',
  /** Title of "bulleted" list type */
  'inputs.portable-text.list-type.bullet': 'Listă cu puncte',
  /** Title of numbered list type */
  'inputs.portable-text.list-type.number': 'Listă numerotată',
  /** Title of the "h1" block style */
  'inputs.portable-text.style.h1': 'Titlu 1',
  /** Title of the "h2" block style */
  'inputs.portable-text.style.h2': 'Titlu 2',
  /** Title of the "h3" block style */
  'inputs.portable-text.style.h3': 'Titlu 3',
  /** Title of the "h4" block style */
  'inputs.portable-text.style.h4': 'Titlu 4',
  /** Title of the "h5" block style */
  'inputs.portable-text.style.h5': 'Titlu 5',
  /** Title of the "h6" block style */
  'inputs.portable-text.style.h6': 'Titlu 6',
  /** Title shown when multiple blocks of varying styles is selected */
  'inputs.portable-text.style.multiple': 'Multiple',
  /** Title of fallback when no style is given for a block */
  'inputs.portable-text.style.none': 'Fără stil',
  /** Title of the "normal" block style */
  'inputs.portable-text.style.normal': 'Normal',
  /** Title of the "quote" block style */
  'inputs.portable-text.style.quote': 'Citat',
  /** Label for action to clear the current value of the reference field */
  'inputs.reference.action.clear': 'Șterge',
  /** Label for action to copy the current item (used within arrays) */
  'inputs.reference.action.copy': 'Copiază',
  /** Label for action to create a new document from the reference input */
  'inputs.reference.action.create-new-document': 'Creează',
  /** Label for action to create a new document from the reference input, when there are multiple templates or document types to choose from */
  'inputs.reference.action.create-new-document-select': 'Creează…',
  /** Label for action to duplicate the current item to a new item (used within arrays) */
  'inputs.reference.action.duplicate': 'Duplică',
  /** Label for action that opens the referenced document in a new tab */
  'inputs.reference.action.open-in-new-tab': 'Deschide într-o filă nouă',
  /** Label for action to remove the reference from an array */
  'inputs.reference.action.remove': 'Elimină',
  /** Label for action to replace the current value of the field */
  'inputs.reference.action.replace': 'Înlocuiește',
  /** Label for action to cancel a previously initiated replace action  */
  'inputs.reference.action.replace-cancel': 'Anulează înlocuirea',
  /** The cross-dataset reference field currently has a reference, but the feature has been disabled since it was created. This explains what can/cannot be done in its current state. */
  'inputs.reference.cross-dataset.feature-disabled-actions':
    'Încă puteți șterge referința existentă a acestui câmp, dar nu poate fi schimbată cu un alt document atâta timp cât funcția este dezactivată.',
  /** A cross-dataset reference field exists but the feature has been disabled. A <DocumentationLink> component is available. */
  'inputs.reference.cross-dataset.feature-disabled-description':
    'Această funcție a fost dezactivată. Citiți cum să o activați în <DocumentationLink>documentație</DocumentationLink>.',
  /** Title for a warning telling the user that the current project does not have the "cross dataset references" feature */
  'inputs.reference.cross-dataset.feature-unavailable-title':
    'Funcție indisponibilă: Referință între seturi de date',
  /** The cross-dataset reference points to a document with an invalid type  */
  'inputs.reference.cross-dataset.invalid-type':
    'Documentul referențiat este de un tip invalid ({{typeName}}) <JsonValue/>',
  /** The referenced document will open in a new tab (due to external studio) */
  'inputs.reference.document-opens-in-new-tab': 'Acest document se deschide într-o filă nouă',
  /** Error title for when the document is unavailable (for any possible reason) */
  'inputs.reference.error.document-unavailable-title': 'Document indisponibil',
  /** Error title for when the referenced document failed to be loaded */
  'inputs.reference.error.failed-to-load-document-title':
    'Eșec la încărcarea documentului referențiat',
  /** Error title for when the reference search returned a document that is not an allowed type for the field */
  'inputs.reference.error.invalid-search-result-type-title':
    'Căutarea a returnat un tip care nu este valid pentru această referință: "{{returnedType}}"',
  /** Error description for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-description':
    'Documentul referențiat (<code>{{documentId}}</code>) este de tip <code>{{actualType}}</code>. Conform schemei, documentele referențiate pot fi doar de tip <AllowedTypes/>.',
  /** Error title for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-title': 'Document de tip invalid',
  /** Error description for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-description':
    'Documentul referențiat nu a putut fi accesat din cauza permisiunilor insuficiente',
  /** Error title for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-title': 'Permisiuni insuficiente',
  /** Error description for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-description':
    'Documentul referențiat nu există (ID: <code>{{documentId}}</code>). Puteți fie să eliminați referința, fie să o înlocuiți cu un alt document.',
  /** Error title for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-title': 'Nu a fost găsit',
  /** Label for button that clears the reference when it points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document.clear-button-label': 'Șterge',
  /** Error title for when the search for a reference failed. Note that the message sent by the backend may not be localized. */
  'inputs.reference.error.search-failed-title': 'Căutarea referinței a eșuat',
  /** Label for when the GDR points to an invalid type  */
  'inputs.reference.global.invalid-type':
    'Documentul referențiat este de tip invalid ({{typeName}})',
  /** Alternative text for the image shown in cross-dataset reference input */
  'inputs.reference.image-preview-alt-text': 'Previzualizare imagine a documentului referențiat',
  /** Description for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-description':
    '<strong>{{referencedDocument}}</strong> este publicat și această referință ar trebui acum finalizată.',
  /** Title for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-title': 'Finalizează referința',
  /** Description for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-description':
    '<strong>{{referencedDocument}}</strong> este publicat și această referință ar trebui acum convertită într-o referință puternică.',
  /** Title for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-title':
    'Convertește în referință puternică',
  /** Label for button that triggers the action that strengthen a reference */
  'inputs.reference.incomplete-reference.strengthen-button-label':
    'Convertește în referință puternică',
  /** Label for button that triggers a retry attempt for reference metadata  */
  'inputs.reference.metadata-error.retry-button-label': 'Reîncearcă',
  /** Title for alert shown when reference metadata fails to be loaded */
  'inputs.reference.metadata-error.title': 'Nu se pot încărca metadatele referinței',
  /** Message shown when no documents were found that matched the given search string */
  'inputs.reference.no-results-for-query':
    'Niciun rezultat pentru <strong>“{{searchTerm}}”</strong>',
  /** Text for tooltip showing when a document was edited, using relative time (eg "how long ago was it edited?") */
  'inputs.reference.preview.edited-at-time': 'Editat <RelativeTime/>',
  /** Accessibility label for icon indicating that document does _not_ have any unpublished changes */
  'inputs.reference.preview.has-no-unpublished-changes-aria-label': 'Fără modificări nepublicate',
  /** Accessibility label for icon indicating that document has unpublished changes */
  'inputs.reference.preview.has-unpublished-changes-aria-label': 'Editat',
  /** Accessibility label for icon indicating that document does _not_ have a published version */
  'inputs.reference.preview.is-not-published-aria-label': 'Nepublicat',
  /** Accessibility label for icon indicating that document has a published version */
  'inputs.reference.preview.is-published-aria-label': 'Publicat',
  /** Text for tooltip indicating that a document has no unpublished edits */
  'inputs.reference.preview.no-unpublished-edits': 'Fără modificări nepublicate',
  /** Text for tooltip indicating that a document has not yet been published */
  'inputs.reference.preview.not-published': 'Nepublicat',
  /** Text for tooltip showing when a document was published, using relative time (eg "how long ago was it published?") */
  'inputs.reference.preview.published-at-time': 'Publicat <RelativeTime/>',
  /** The referenced document no longer exist and might have been deleted (for weak references) */
  'inputs.reference.referenced-document-does-not-exist':
    'Documentul referențiat nu mai există și ar fi putut fi șters (ID document: <code>{{documentId}}</code>).',
  /** The referenced document could not be displayed to the user because of insufficient permissions */
  'inputs.reference.referenced-document-insufficient-permissions':
    'Documentul referențiat nu a putut fi accesat din cauza permisiunilor insuficiente',
  /** Label for when the reference input is resolving the initial value for an item */
  'inputs.reference.resolving-initial-value': 'Se rezolvă valoarea inițială…',
  /** Placeholder shown in a reference input with no current value */
  'inputs.reference.search-placeholder': 'Tastați pentru a căuta',
  /** Explanation of the consequences of leaving the reference as strong instead of weak */
  'inputs.reference.strength-mismatch.is-strong-consquences':
    'Nu va fi posibil să ștergeți documentul referențiat fără a elimina mai întâi această referință sau convertind-o în slabă.',
  /** Description for alert shown when a reference is supposed to be weak, but the actual value is strong */
  'inputs.reference.strength-mismatch.is-strong-description':
    'Această referință este <em>puternică</em>, dar conform schemei actuale ar trebui să fie <em>slabă</em>.',
  /** Explanation of the consequences of leaving the reference as weak instead of strong */
  'inputs.reference.strength-mismatch.is-weak-consquences':
    'Acest lucru face posibilă ștergerea documentului referențiat fără a șterge mai întâi această referință, lăsând acest câmp referindu-se la un document inexistent.',
  /** Description for alert shown when a reference is supposed to be strong, but the actual value is weak */
  'inputs.reference.strength-mismatch.is-weak-description':
    'Această referință este <em>slabă</em>, dar conform schemei actuale ar trebui să fie <em>puternică</em>.',
  /** Label for button that triggers the action that strengthens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.strengthen-button-label': 'Convertiți în referință puternică',
  /** Title for alert shown when a reference is supposed to be weak/strong, but the actual value is the opposite of what it is supposed to be */
  'inputs.reference.strength-mismatch.title': 'Nepotrivire a puterii referinței',
  /** Label for button that triggers the action that weakens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.weaken-button-label': 'Convertiți în referință slabă',
  /** Action message for generating the slug */
  'inputs.slug.action.generate': 'Generează',
  /** Loading message for when the input is actively generating a slug */
  'inputs.slug.action.generating': 'Se generează…',
  /** Error message for when the source to generate a slug from is missing */
  'inputs.slug.error.missing-source':
    'Sursa lipsește. Verificați sursa pentru tipul {{schemaType}} în schema',
  /** Placeholder for an empty tag input */
  'inputs.tags.placeholder': 'Introduceți eticheta și apăsați ENTER…',
  /** Placeholder for an empty tag input on touch devices */
  'inputs.tags.placeholder_touch': 'Introduceți eticheta…',
  /** Convert to `{{targetType}}` */
  'inputs.untyped-value.convert-button.text': 'Convertiți în {{targetType}}',
  /** Encountered an object value without a <code>_type</code> property. */
  'inputs.untyped-value.description':
    'A fost întâlnită o valoare obiect fără o proprietate <code>_type</code>.',
  /** Either remove the <code>name</code> property of the object declaration, or set <code>_type</code> property on items. */
  'inputs.untyped-value.details.description':
    'Fie eliminați proprietatea <code>name</code> a declarației obiectului, fie setați proprietatea <code>_type</code> pe elemente.',
  /** Current value (<code>object</code>): */
  'inputs.untyped-value.details.json-dump-prefix': 'Valoarea curentă (<code>object</code>):',
  /** The following types are valid here according to schema: */
  'inputs.untyped-value.details.multi-type-description':
    'Următoarele tipuri sunt valide aici conform schemei:',
  /** Developer info */
  'inputs.untyped-value.details.title': 'Informații pentru dezvoltatori',
  /** Property value missing <code>_type</code> */
  'inputs.untyped-value.title': 'Proprietatea valorii lipsește <code>_type</code>',
  /** Unset value */
  'inputs.untyped-value.unset-item-button.text': 'Resetează valoarea',

  /** The fallback explanation if no context is provided */
  'insufficient-permissions-message.not-authorized-explanation':
    'Nu aveți permisiunea de a accesa această funcție.',
  /** The explanation when unable to create any document at all */
  'insufficient-permissions-message.not-authorized-explanation_create-any-document':
    'Nu aveți permisiunea de a crea un document.',
  /** The explanation when unable to create a particular document */
  'insufficient-permissions-message.not-authorized-explanation_create-document':
    'Nu aveți permisiunea de a crea acest document.',
  /** The explanation when unable to create a particular type of document */
  'insufficient-permissions-message.not-authorized-explanation_create-document-type':
    'Nu aveți permisiunea de a crea acest tip de document.',
  /** The explanation when unable to create a new reference in a document */
  'insufficient-permissions-message.not-authorized-explanation_create-new-reference':
    'Nu aveți permisiunea de a crea o nouă referință.',
  /** The explanation when unable to delete a particular document */
  'insufficient-permissions-message.not-authorized-explanation_delete-document':
    'Nu aveți permisiunea de a șterge acest document.',
  /** The explanation when unable to delete a schedule on scheduled publishing */
  'insufficient-permissions-message.not-authorized-explanation_delete-schedules':
    'Nu aveți permisiunea de a șterge programele.',
  /** The explanation when unable to discard changes in a particular document */
  'insufficient-permissions-message.not-authorized-explanation_discard-changes':
    'Nu aveți permisiunea de a renunța la modificările din acest document.',
  /** The explanation when unable to duplicate a particular document */
  'insufficient-permissions-message.not-authorized-explanation_duplicate-document':
    'Nu aveți permisiunea de a duplica acest document.',
  /** The explanation when unable to edit a schedule on scheduled publishing */
  'insufficient-permissions-message.not-authorized-explanation_edit-schedules':
    'Nu aveți permisiunea de a edita programele.',
  /** The explanation when unable to execute a schedule on scheduled publishing */
  'insufficient-permissions-message.not-authorized-explanation_execute-schedules':
    'Nu aveți permisiunea de a executa programele.',
  /** The explanation when unable to publish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_publish-document':
    'Nu aveți permisiunea de a publica acest document.',
  /** The explanation when unable to unpublish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_unpublish-document':
    'Nu aveți permisiunea de a anula publicarea acestui document.',
  /** Appears after the not-authorized message. Lists the current roles. */
  'insufficient-permissions-message.roles': 'Rolurile dumneavoastră: <Roles/>',
  /** The title for the insufficient permissions message component */
  'insufficient-permissions-message.title': 'Permisiuni insuficiente',

  /** Unexpected error: `{{error}}` */
  'member-field-error.unexpected-error': 'Eroare neașteptată: {{error}}',

  /** Text shown in warning when browser is using HTTP1 to communicate with the Sanity API */
  'network-check.slow-protocol-warning.description':
    'Browserul dumneavoastră folosește un protocol HTTP învechit pentru a comunica cu Sanity. Acest lucru poate duce la o performanță semnificativ redusă.',
  /** Text for link that takes the user to the Sanity documentation to learn more about the HTTP1 issue */
  'network-check.slow-protocol-warning.learn-more-button.text': 'Află mai multe',
  /** Text for link that takes the user to the Sanity documentation to learn more about the HTTP1 issue */
  'network-check.slow-protocol-warning.snooze-button.text': 'Nu mai arăta în această sesiune',
  /** Title text for the warning dialog when browser is using HTTP1 to communicate with the Sanity API */
  'network-check.slow-protocol-warning.title': 'Aveți frânele puse',

  /** Button label for "Create new document" button */
  'new-document.button': 'Creează',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are templates/types available for creation
   */
  'new-document.create-new-document-label': 'Document nou…',
  /** Placeholder for the "filter" input within the new document menu */
  'new-document.filter-placeholder': 'Caută tipuri de documente',
  /** Loading indicator text within the new document menu */
  'new-document.loading': 'Se încarcă…',
  /** Accessibility label for the list displaying options in the new document menu */
  'new-document.new-document-aria-label': 'Document nou',
  /** Message for when there are no document type options in the new document menu */
  'new-document.no-document-types-found': 'Nu s-au găsit tipuri de documente',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are no templates/types to create from
   */
  'new-document.no-document-types-label': 'Niciun tip de document',
  /** Message for when no results are found for a specific search query in the new document menu */
  'new-document.no-results': 'Niciun rezultat pentru <strong>{{searchQuery}}</strong>',
  /** Aria label for the button that opens the "Create new document" popover/dialog */
  'new-document.open-dialog-aria-label': 'Creează document nou',
  /** Title for "Create new document" dialog */
  'new-document.title': 'Creează document nou',

  /** @deprecated Label for button that will make the browser reload when users' studio version is out-of-date */
  'package-version.new-package-available.reload-button': 'Apasă pentru a reîncărca',
  /** @deprecated Title of the alert for studio users when packages in their studio are out-of-date */
  'package-version.new-package-available.title': 'Sanity Studio este gata să se actualizeze!',

  /** Label for action to invite members to the current studio project */
  'presence.action.manage-members': 'Invită membri',
  /** Accessibility label for presence menu button */
  'presence.aria-label': 'Prezență globală',
  /** Message description for when no one else is currently present */
  'presence.no-one-else-description':
    'Invită persoane în proiect pentru a vedea statusul lor online.',
  /** Message title for when no one else is currently present */
  'presence.no-one-else-title': 'Nimeni altcineva nu este aici',
  /** Message for when a user is not in a document (displayed in the global presence menu) */
  'presence.not-in-a-document': 'Nu este într-un document',
  /** Tooltip content text for presence menu button */
  'presence.tooltip-content': 'Cine este aici',

  /** Fallback title shown when a preview does not provide a title */
  'preview.default.title-fallback': 'Fără titlu',
  /** Fallback preview value for types that have "no value" (eg null, undefined) */
  'preview.fallback.no-value': '(fără valoare)',
  /** Alternative text for image being shown while image is being uploaded, in previews */
  'preview.image.file-is-being-uploaded.alt-text': 'Imaginea este în curs de încărcare',

  /* Relative time, just now */
  'relative-time.just-now': 'chiar acum',

  /** Action message to add document to new release */
  'release.action.add-to-new-release': 'Adaugă la lansare',
  /** Action message to add document to release */
  'release.action.add-to-release': 'Adaugă la {{title}}',
  /** Tooltip message for document that is already added to release */
  'release.action.already-exists-in-release': undefined, // 'Document already exists in release'
  /** Action message for when document is already in release  */
  'release.action.already-in-release': 'Deja în lansarea {{title}}',
  /** Action message for when you click to view all versions you can copy the current document to */
  'release.action.copy-to': 'Copiază versiunea la',
  /** Action message for creating new releases */
  'release.action.create-new': 'Lansare nouă',
  /** Description for toast when version creation failed */
  'release.action.create-version.failure': undefined, // 'Failed to create version'
  /** Action message for deleting a scheduled publish */
  'release.action.delete-schedule': undefined, // 'Delete schedule'
  /** Action message for when document is already in release  */
  'release.action.discard-version': 'Renunță la versiune',
  /** Description for toast when version discarding failed */
  'release.action.discard-version.failure': 'Eșec la renunțarea versiunii',
  /** Action message for editing the schedule of a scheduled publish */
  'release.action.edit-schedule': undefined, // 'Edit schedule'
  /** Action message for when a new release is created off an existing version, draft or published document */
  'release.action.new-release': 'Lansare Nouă',
  /** Tooltip message for not having permissions for creating new releases */
  'release.action.permission.error': 'Nu ai permisiunea de a efectua această acțiune',
  /** Action message for running a scheduled draft immediately */
  'release.action.publish-now': undefined, // 'Publish now'
  /** Error message description for when a version is reverted from being unpublished */
  'release.action.revert-unpublish-version.failure.description':
    'Vă rugăm să încercați din nou sau verificați conexiunea. Documentul va rămâne nepublicat la lansare.',
  /** Error message title for when a version is reverted from being unpublished */
  'release.action.revert-unpublish-version.failure.title':
    'Eșec la revenirea de la setarea de a nu publica la lansare.',
  /** Action message description for when a version is reverted from being unpublished */
  'release.action.revert-unpublish-version.success.description':
    'Acum puteți edita această versiune.',
  /** Action message title for when a version is reverted from being unpublished */
  'release.action.revert-unpublish-version.success.title':
    'Revenirea de la setarea de a nu publica la lansare a fost realizată cu succes.',
  /** Error message for when a version is set to be unpublished */
  'release.action.unpublish-version.failure':
    'Nu s-a reușit setarea versiunii ca fiind nepublicată la lansare',
  /** Action message for when a version is set to be unpublished successfully */
  'release.action.unpublish-version.success':
    'S-a setat cu succes <strong>{{title}}</strong> ca fiind nepublicată la lansare',
  /** Action message for when the view release is pressed */
  'release.action.view-release': 'Vizualizează lansarea',
  /** Action message for when the view scheduled drafts is pressed */
  'release.action.view-scheduled-drafts': undefined, // 'View scheduled drafts'
  /** Label for banner when release is scheduled */
  'release.banner.scheduled-for-publishing-on': 'Programată pentru publicare pe {{date}}',
  /** Label for Draft chip in document header */
  'release.chip.draft': 'Ciornă',
  /** Label for Draft chip in global header */
  'release.chip.global.drafts': 'Ciorne',
  /** Label for Published chip in document header */
  'release.chip.published': 'Publicat',
  /** Label for tooltip in chip when document is in an archived release */
  'release.chip.tooltip.archived': 'Această lansare este arhivată și nu poate fi editată.',
  /** Label for tooltip in chip with the created date */
  'release.chip.tooltip.created-date': 'Creată {{date}}',
  /** Label for tooltip in draft chip when it's a live edit document */
  'release.chip.tooltip.draft-disabled.live-edit':
    'Acest document este în modul de editare live, ciornele sunt dezactivate',
  /** Label for tooltip in chip with the lasted edited date */
  'release.chip.tooltip.edited-date': 'Editată {{date}}',
  /** Label for tooltip in chip when document is intended for a future release that hasn't been scheduled */
  'release.chip.tooltip.intended-for-date': 'Destinată pentru {{date}}',
  /** Label for tooltip in chip when there is no recent draft edits */
  'release.chip.tooltip.no-edits': 'Fără modificări',
  /** Label for tooltip in chip when document isn't published */
  'release.chip.tooltip.not-published': 'Nepublicat',
  /** Label for tooltip in chip with the published date */
  'release.chip.tooltip.published-date': 'Publicată {{date}}',
  /** Label for tooltip in chip when document is in a release that has been scheduled */
  'release.chip.tooltip.scheduled-for-date': 'Programată pentru {{date}}',
  /** Label for tooltip in scheduled chip without a known date */
  'release.chip.tooltip.unknown-date': 'Dată necunoscută',
  /** Label for tooltip on deleted release */
  'release.deleted-tooltip': 'Această lansare a fost ștearsă',
  /** Title for copying version to a new release dialog */
  'release.dialog.copy-to-release.title': 'Copiază versiunea într-o nouă lansare',
  /** Title for action create a release */
  'release.dialog.create.confirm': 'Creează lansare',
  /** Title for creating releases dialog */
  'release.dialog.create.title': 'Lansare nouă',
  /** Body text for the dialog confirming deletion of a scheduled draft */
  'release.dialog.delete-schedule-draft.body': undefined, // 'Are you sure you want to delete this scheduled draft? This action cannot be undone.'
  /** Confirm button text for deleting a scheduled draft */
  'release.dialog.delete-schedule-draft.confirm': undefined, // 'Yes, delete schedule'
  /** Header for the dialog confirming deletion of a scheduled draft */
  'release.dialog.delete-schedule-draft.header': undefined, // 'Delete scheduled draft'
  /** Body text for change schedule dialog */
  'release.dialog.edit-schedule.body': undefined, // 'Select a new date and time for the scheduled publish.'
  /** Confirm button text for change schedule dialog */
  'release.dialog.edit-schedule.confirm': undefined, // 'Update schedule'
  /** Header for change schedule dialog */
  'release.dialog.edit-schedule.header': undefined, // 'Change schedule'
  /** Body text for the dialog confirming running a scheduled draft immediately */
  'release.dialog.publish-scheduled-draft.body': undefined, // 'Are you sure you want to publish this scheduled draft immediately?'
  /** Confirm button text for running a scheduled draft immediately */
  'release.dialog.publish-scheduled-draft.confirm': undefined, // 'Yes, run now'
  /** Header for the dialog confirming running a scheduled draft immediately */
  'release.dialog.publish-scheduled-draft.header': undefined, // 'Publish draft now'
  /** Label for description in tooltip to explain release types */
  'release.dialog.tooltip.description':
    'Ora estimată a lansării este folosită pentru a crea previzualizări mai bune și indicii despre posibilele conflicte între documente.',
  /** Label for noting that a release time is not final */
  'release.dialog.tooltip.note': 'Întotdeauna o poți schimba mai târziu.',
  /** Title for tooltip to explain release time */
  'release.dialog.tooltip.title': 'Ora aproximativă a lansării',
  /** The placeholder text when the release doesn't have a description */
  'release.form.placeholder-describe-release': 'Descrie lansarea…',
  /** Tooltip for button to hide release visibility */
  'release.layer.hide': 'Ascunde lansarea',
  /** Label for the release menu */
  'release.menu.label': undefined, // 'Release menu'
  /** Tooltip for the release menu */
  'release.menu.tooltip': undefined, // 'Actions'
  /** Label for draft perspective in navbar */
  'release.navbar.drafts': 'Schițe',
  /** Label for published releases in navbar */
  'release.navbar.published': 'Publicate',
  /** Tooltip for releases navigation in navbar */
  'release.navbar.tooltip': 'Lansări',
  /** The placeholder text when the release doesn't have a title */
  'release.placeholder-untitled-release': 'Lansare fără titlu',
  /** Description for warning that the published schedule time is in the past */
  'release.schedule-dialog.publish-date-in-past-warning': undefined, // 'Schedule for a future time and date.'
  /** Label for date picker when scheduling a release */
  'release.schedule-dialog.select-publish-date-label': undefined, // 'Publish on'
  /** The toast description that will be shown when the user has a release perspective which is now archived */
  'release.toast.archived-release.description': 'Această lansare a fost dezafixată',
  /** The toast title that will be shown when the user has a release perspective which is now archived */
  'release.toast.archived-release.title': "Lansarea '{{title}}' a fost arhivată",
  /** The toast title that will be shown the creating a release fails */
  'release.toast.create-release-error.title': 'Crearea lansării a eșuat',
  /** Error toast for deleting a scheduled draft */
  'release.toast.delete-schedule-draft.error': undefined, // 'Failed to delete the scheduled draft document <strong>{{title}}</strong>: {{error}}'
  /** Success toast for deleting a scheduled draft */
  'release.toast.delete-schedule-draft.success': undefined, // 'The scheduled draft document <strong>{{title}}</strong> has been deleted.'
  /** The toast title that will be shown when the user has a release perspective which is now deleted */
  'release.toast.not-found-release.title': "Lansarea '{{title}}' nu a putut fi găsită",
  /** Error toast for running a scheduled publish immediately */
  'release.toast.publish-scheduled-draft.error': undefined, // 'Failed to publish the scheduled draft document <strong>{{title}}</strong>: {{error}}'
  /** Success toast for running a scheduled publish immediately */
  'release.toast.publish-scheduled-draft.success': undefined, // 'The scheduled draft document <strong>{{title}}</strong> has been published.'
  /** The toast description that will be shown when the user has a release perspective which is now published */
  'release.toast.published-release.description': 'Această lansare a fost dezafixată',
  /** The toast title that will be shown when the user has a release perspective which is now deleted */
  'release.toast.published-release.title': "Lansarea '{{title}}' a fost publicată",
  /** Error toast for rescheduling a draft */
  'release.toast.reschedule-scheduled-draft.error': undefined, // 'Failed to reschedule the scheduled draft document <strong>{{title}}</strong>: {{error}}'
  /** Success toast for rescheduling a draft */
  'release.toast.reschedule-scheduled-draft.success': undefined, // 'The scheduled draft document <strong>{{title}}</strong> has been rescheduled.'
  /** Label for when a version of a document has already been added to the release */
  'release.tooltip.already-added': 'O versiune a acestui document a fost deja adăugată',
  /** Label for when a release is scheduled / scheduling and a user can't add a document version to it */
  'release.tooltip.locked':
    'Această lansare a fost programată. Anulați programarea pentru a adăuga mai multe documente.',
  /** Label for the release type 'as soon as possible' */
  'release.type.asap': 'Cât mai curând posibil',
  /** Label for the release type 'at time', meaning it's a release with a scheduled date */
  'release.type.scheduled': 'La timp',
  /** Label for the release type 'undecided' */
  'release.type.undecided': 'Nedecis',
  /** Tooltip for the dropdown to show all versions of document */
  'release.version-list.tooltip': 'Vezi toate versiunile documentului',

  /** Confirm button text for the schedule publish dialog */
  'schedule-publish-dialog.confirm': undefined, // 'Schedule'
  /** Description for the schedule publish dialog */
  'schedule-publish-dialog.description': undefined, // 'Select when this document should be published.'
  /** Header for the schedule publish dialog */
  'schedule-publish-dialog.header': undefined, // 'Schedule draft for publishing'

  /** Title for a scheduled draft release */
  'scheduled-drafts.release.title': undefined, // 'Scheduled publish'

  /** Accessibility label to open search action when the search would go fullscreen (eg on narrower screens) */
  'search.action-open-aria-label': 'Deschide căutarea',
  /** Action label for adding a search filter */
  'search.action.add-filter': 'Adaugă filtru',
  /** Action label for clearing search filters */
  'search.action.clear-filters': 'Șterge filtrele',
  /** Label for action to clear recent searches */
  'search.action.clear-recent-searches': 'Șterge căutările recente',
  /** Accessibility label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-aria-label': 'Șterge filtrele bifate',
  /** Label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-label': 'Șterge',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to close the search */
  'search.action.close-search-aria-label': 'Închide căutarea',
  /** Accessibility label for filtering by document type */
  'search.action.filter-by-document-type-aria-label': 'Filtrează după tipul documentului',
  /** Accessibility action label for removing an already applied search filter */
  'search.action.remove-filter-aria-label': 'Elimină filtrul',
  /**
   * Text displayed when either no document type(s) have been selected, or we need a fallback,
   * eg "Search for all types".
   */
  'search.action.search-all-types': 'Caută toate documentele',
  /**
   * Text displayed when we are able to determine one or more document types that will be used for
   * searching, and can fit within the space assigned by the design.
   */
  'search.action.search-specific-types': 'Caută pentru {{types, list}}',
  /** Dialog title for action to select an asset of unknown type */
  'search.action.select-asset': 'Selectează activ',
  /** Dialog title for action to select a file asset */
  'search.action.select-asset_file': 'Selectează fișier',
  /** Dialog title for action to select an image asset */
  'search.action.select-asset_image': 'Selectează imagine',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-aria-label_hide': 'Ascunde filtrele',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-aria-label_show': 'Arată filtrele',
  /** Label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-label_hide': 'Ascunde filtrele',
  /** Label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-label_show': 'Arată filtrele',
  /** Tooltip text for the global search button */
  'search.button.tooltip': 'Caută',
  /**
   * A list of provided types (use `list` formatter preferably).
   */
  'search.document-type-list': '{{types, list}}',
  /**
   * In the context of a list of document types - no filtering selection has been done,
   * thus the default is "all types".
   */
  'search.document-type-list-all-types': 'Toate tipurile',
  /** Accessibility label for list displaying the available document types */
  'search.document-types-aria-label': 'Tipuri de documente',
  /** Label for when no document types matching the filter are found */
  'search.document-types-no-matches-found': 'Nicio potrivire pentru {{filter}}',
  /** Description for error when a filter cannot be displayed, describes that you should check the schema */
  'search.error.display-filter-description':
    'Acest lucru poate indica opțiuni invalide definite în schema dvs.',
  /** Title for error when a filter cannot be displayed (mainly a developer-oriented error) */
  'search.error.display-filter-title': 'A apărut o eroare în timpul afișării acestui filtru.',
  /** Description for error when no valid asset source is found, describes that you should check the the current studio config */
  'search.error.no-valid-asset-source-check-config-description':
    'Vă rugăm să vă asigurați că este activat în fișierul de configurare al studioului dvs.',
  /** Description for error when no valid asset source is found, describes that only the default asset is supported */
  'search.error.no-valid-asset-source-only-default-description':
    'În prezent, doar sursa de activ implicită este suportată.',
  /** Title for error when no valid asset sources found */
  'search.error.no-valid-asset-source-title': 'Nu s-au găsit surse valide de active.',
  /** Helpful description for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-help-description':
    'Vă rugăm să încercați din nou sau verificați conexiunea',
  /** Title label for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-title': 'Ceva nu a funcționat corect în timpul căutării',
  /**
   * Label for "All fields", a label that appears above the list of available fields when filtering.
   * If one or more document type has been chosen as filter, this label is replaced with a group of
   * fields per selected document type
   */
  'search.filter-all-fields-header': 'Toate câmpurile',
  /** Label for the action of changing from one file to a different file in asset search filter */
  'search.filter-asset-change_file': 'Schimbă fișierul',
  /** Label for the action of changing from one image to a different image in asset search filter */
  'search.filter-asset-change_image': 'Schimbă imaginea',
  /** Label for the action of clearing the currently selected asset in an image/file filter */
  'search.filter-asset-clear': 'Șterge',
  /** Label for the action of selecting a file in asset search filter */
  'search.filter-asset-select_file': 'Selectează fișier',
  /** Label for the action of selecting an image in asset search filter */
  'search.filter-asset-select_image': 'Selectează imagine',
  /** Label for boolean filter - false */
  'search.filter-boolean-false': 'Fals',
  /** Label for boolean filter - true */
  'search.filter-boolean-true': 'Adevărat',
  /** Accessibility label for list that lets you filter fields by title, when adding a new filter in search */
  'search.filter-by-title-aria-label': 'Filtrează după titlu',
  /** Accessibility label for date filter input */
  'search.filter-date-aria-label': 'Data',
  /** Accessibility label for selecting end date on the date range search filter */
  'search.filter-date-range-end-date-aria-label': 'Data de sfârșit',
  /** Accessibility label for selecting start date on the date range search filter */
  'search.filter-date-range-start-date-aria-label': 'Data de început',
  /**
   * Label for "Days"/"Months"/"Years" when selecting it as unit in "X days ago" search filter.
   * Capitalized, as it would be listed in a dropdown.
   */
  'search.filter-date-unit_days': 'Zile',
  'search.filter-date-unit_months': 'Luni',
  'search.filter-date-unit_years': 'Ani',
  /** Accessibility label for selecting the unit (day/month/year) when adding "X days ago" search filter */
  'search.filter-date-unit-aria-label': 'Selectează unitatea',
  /** Accessibility label for the input value (days/months/years) when adding "X days ago" search filter */
  'search.filter-date-value-aria-label': 'Valoarea unității',
  /** Label for "field description" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-description': 'Descrierea câmpului',
  /** Label for "field name" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-name': 'Numele câmpului',
  /** Label for "Used in document types", a list of the document types a field appears in. Shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-used-in-document-types': 'Utilizat în tipurile de documente',
  /** Label for when no fields/filters are found for the given term */
  'search.filter-no-matches-found': 'Nicio potrivire pentru {{filter}}',
  /** Placeholder value for maximum numeric value filter */
  'search.filter-number-max-value-placeholder': 'Valoare maximă',
  /** Placeholder value for minimum numeric value filter */
  'search.filter-number-min-value-placeholder': 'Valoare minimă',
  /** Placeholder value for the number filter */
  'search.filter-number-value-placeholder': 'Valoare',
  /** Placeholder for the "Filter" input, when narrowing possible fields/filters */
  'search.filter-placeholder': 'Filtrează',
  /** Label for the action of clearing the currently selected document in a reference filter */
  'search.filter-reference-clear': 'Șterge',
  /**
   * Label for "shared fields", a label that appears above a list of fields that all filtered types
   * have in common, when adding a new filter. For instance, if "book" and "employee" both have a
   * "title" field, this field would be listed under "shared fields".
   * */
  'search.filter-shared-fields-header': 'Câmpuri comune',
  /** Placeholder value for the string filter */
  'search.filter-string-value-placeholder': 'Valoare',
  /** Label/placeholder prompting user to select one of the predefined, allowed values for a string field */
  'search.filter-string-value-select-predefined-value': 'Selectați…',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (singular) */
  'search.filters-aria-label_one': 'Filtru',
  /** Label for instructions on how to use the search - displayed when no recent searches are available */
  'search.instructions': 'Utilizați <ControlsIcon/> pentru a rafina căutarea',
  /** Helpful description for when no search results are found */
  'search.no-results-help-description': 'Încercați un alt cuvânt cheie sau ajustați-vă filtrele',
  /** Title label for when no search results are found */
  'search.no-results-title': 'Nu s-au găsit rezultate',
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
    '<Field/> <Operator>are</Operator> <Value>{{count}} element</Value>',
  'search.operator.array-count-equal.name': 'cantitatea este',
  /* Array should have a count greater than given filter value */
  'search.operator.array-count-gt.description_one':
    '<Field/> <Operator>are ></Operator> <Value>{{count}} element</Value>',
  'search.operator.array-count-gt.name': 'cantitatea mai mare decât',
  /* Array should have a count greater than or equal to the given filter value */
  'search.operator.array-count-gte.description_one':
    '<Field/> <Operator>are ≥</Operator> <Value>{{count}} element</Value>',
  'search.operator.array-count-gte.name': 'cantitatea mai mare sau egală cu',
  /* Array should have a count less than given filter value */
  'search.operator.array-count-lt.description_one':
    '<Field/> <Operator>are <</Operator> <Value>{{count}} element</Value>',
  'search.operator.array-count-lt.name': 'cantitatea mai mică decât',
  /* Array should have a count less than or equal to the given filter value */
  'search.operator.array-count-lte.description_one':
    '<Field/> <Operator>are ≤</Operator> <Value>{{count}} element</Value>',
  'search.operator.array-count-lte.name': 'cantitatea mai mică sau egală cu',
  /* Array should have a count that is not equal to the given filter value */
  'search.operator.array-count-not-equal.description_one':
    '<Field/> <Operator>nu are</Operator> <Value>{{count}} element</Value>',
  'search.operator.array-count-not-equal.name': 'cantitatea nu este',
  /**
   * Array should have a count within the range of given filter values.
   * Gets passed `{{from}}` and `{{to}}` values.
   **/
  'search.operator.array-count-range.description':
    '<Field/> <Operator>are între</Operator> <Value>{{from}} → {{to}} elemente</Value>',
  'search.operator.array-count-range.name': 'cantitatea este între',
  /* Array should include the given value */
  'search.operator.array-list-includes.description':
    '<Field/> <Operator>include</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-includes.name': 'include',
  /* Array should not include the given value */
  'search.operator.array-list-not-includes.description':
    '<Field/> <Operator>nu include</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-not-includes.name': 'nu include',
  /* Array should include the given reference */
  'search.operator.array-reference-includes.description':
    '<Field/> <Operator>include</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-includes.name': 'include',
  /* Array should not include the given reference */
  'search.operator.array-reference-not-includes.description':
    '<Field/> <Operator>nu include</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-not-includes.name': 'nu include',
  /* Asset (file) should be the selected asset */
  'search.operator.asset-file-equal.description':
    '<Field/> <Operator>este</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-equal.name': 'este',
  /* Asset (file) should not be the selected asset */
  'search.operator.asset-file-not-equal.description':
    '<Field/> <Operator>nu este</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-not-equal.name': 'nu este',
  /* Asset (image) should be the selected asset */
  'search.operator.asset-image-equal.description':
    '<Field/> <Operator>este</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-equal.name': 'este',
  /* Asset (image) should not be the selected asset */
  'search.operator.asset-image-not-equal.description':
    '<Field/> <Operator>nu este</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-not-equal.name': 'nu este',
  /**
   * Boolean value should be the given filter value (true/false).
   * Context passed is `true` and `false`, allowing for more specific translations:
   * - `search.operator.boolean-equal.description_true`
   * - `search.operator.boolean-equal.description_false`
   */
  'search.operator.boolean-equal.description':
    '<Field/> <Operator>este</Operator> <Value>{{value}}</Value>',
  'search.operator.boolean-equal.name': 'este',
  /* Date should be after (later than) given filter value */
  'search.operator.date-after.description':
    '<Field/> <Operator>este după</Operator> <Value>{{value}}</Value>',
  'search.operator.date-after.name': 'după',
  /* Date should be before (earlier than) given filter value */
  'search.operator.date-before.description':
    '<Field/> <Operator>este înainte de</Operator> <Value>{{value}}</Value>',
  'search.operator.date-before.name': 'înainte de',
  /* Date should be the given filter value */
  'search.operator.date-equal.description':
    '<Field/> <Operator>este</Operator> <Value>{{value}}</Value>',
  'search.operator.date-equal.name': 'este',
  /* Date should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-last.description':
    '<Field/> <Operator>este în ultimele</Operator> <Value>{{value}}</Value>',
  'search.operator.date-last.name': 'ultimele',
  /* Date should not be the given filter value */
  'search.operator.date-not-equal.description':
    '<Field/> <Operator>nu este</Operator> <Value>{{value}}</Value>',
  'search.operator.date-not-equal.name': 'nu este',
  /* Date should be within the range of given filter values */
  'search.operator.date-range.description': '<Field/> <Operator>este între</Operator> <Value/>',
  'search.operator.date-range.name': 'este între',
  /* Date and time should be after (later than) given filter value */
  'search.operator.date-time-after.description':
    '<Field/> <Operator>este după</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-after.name': 'după',
  /* Date and time should be before (earlier than) given filter value */
  'search.operator.date-time-before.description':
    '<Field/> <Operator>este înainte de</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-before.name': 'înainte de',
  /* Date and time should be the given filter value */
  'search.operator.date-time-equal.description':
    '<Field/> <Operator>este</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-equal.name': 'este',
  /* Date and time should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-time-last.description':
    '<Field/> <Operator>este în ultimele</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-last.name': 'ultimele',
  /* Date and time should not be the given filter value */
  'search.operator.date-time-not-equal.description':
    '<Field/> <Operator>nu este</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-not-equal.name': 'nu este',
  /* Date and time should be within the range of given filter values */
  'search.operator.date-time-range.description':
    '<Field/> <Operator>este între</Operator> <Value/>',
  'search.operator.date-time-range.name': 'este între',
  /* Value should be defined */
  'search.operator.defined.description':
    '<Field/> <Operator>este</Operator> <Value>nu este gol</Value>',
  'search.operator.defined.name': 'nu este gol',
  /* Value should not be defined */
  'search.operator.not-defined.description':
    '<Field/> <Operator>este</Operator> <Value>gol</Value>',
  'search.operator.not-defined.name': 'gol',
  /* Number should be the given filter value */
  'search.operator.number-equal.description':
    '<Field/> <Operator>este</Operator> <Value>{{value}}</Value>',
  'search.operator.number-equal.name': 'este',
  /* Number should be greater than given filter value */
  'search.operator.number-gt.description':
    '<Field/> <Operator>></Operator> <Value>{{value}}</Value>',
  'search.operator.number-gt.name': 'mai mare decât',
  /* Number should be greater than or the given filter value */
  'search.operator.number-gte.description':
    '<Field/> <Operator>≥</Operator> <Value>{{value}}</Value>',
  'search.operator.number-gte.name': 'mai mare sau egal cu',
  /* Number should be less than given filter value */
  'search.operator.number-lt.description':
    '<Field/> <Operator><</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lt.name': 'mai mic decât',
  /* Number should be less than or the given filter value */
  'search.operator.number-lte.description':
    '<Field/> <Operator>≤</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lte.name': 'mai mic sau egal cu',
  /* Number should not be the given filter value */
  'search.operator.number-not-equal.description':
    '<Field/> <Operator>nu este</Operator> <Value>{{value}}</Value>',
  'search.operator.number-not-equal.name': 'nu este',
  /* Number should be within the range of given filter values */
  'search.operator.number-range.description':
    '<Field/> <Operator>este între</Operator> <Value>{{from}} → {{to}}</Value>',
  'search.operator.number-range.name': 'este între',
  /* Portable Text should contain the given filter value */
  'search.operator.portable-text-contains.description':
    '<Field/> <Operator>conține</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-contains.name': 'conține',
  /* Portable Text should be the given filter value */
  'search.operator.portable-text-equal.description':
    '<Field/> <Operator>este</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-equal.name': 'este',
  /* Portable Text should not contain the given filter value */
  'search.operator.portable-text-not-contains.description':
    '<Field/> <Operator>nu conține</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-contains.name': 'nu conține',
  /* Portable Text should not be the given filter value */
  'search.operator.portable-text-not-equal.description':
    '<Field/> <Operator>nu este</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-equal.name': 'nu este',
  /* References the given asset (file) */
  'search.operator.reference-asset-file.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-file.name': 'fișier',
  /* References the given asset (image) */
  'search.operator.reference-asset-image.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-image.name': 'imagine',
  /* References the given document */
  'search.operator.reference-document.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-document.name': 'document',
  /* Reference should be the given document */
  'search.operator.reference-equal.description':
    '<Field/> <Operator>este</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-equal.name': 'este',
  /* Reference should not be the given document */
  'search.operator.reference-not-equal.description':
    '<Field/> <Operator>nu este</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-not-equal.name': 'nu este',
  /* Slug contains the given value */
  'search.operator.slug-contains.description':
    '<Field/> <Operator>conține</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-contains.name': 'conține',
  /* Slug equals the given filter value */
  'search.operator.slug-equal.description':
    '<Field/> <Operator>este</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-equal.name': 'este',
  /* Slug does not contain the given value */
  'search.operator.slug-not-contains.description':
    '<Field/> <Operator>nu conține</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-contains.name': 'nu conține',
  /* Slug does not equal the given filter value */
  'search.operator.slug-not-equal.description':
    '<Field/> <Operator>nu este</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-equal.name': 'nu este',
  /* String contains the given filter value */
  'search.operator.string-contains.description':
    '<Field/> <Operator>conține</Operator> <Value>{{value}}</Value>',
  'search.operator.string-contains.name': 'conține',
  /* String equals the given filter value */
  'search.operator.string-equal.description':
    '<Field/> <Operator>este</Operator> <Value>{{value}}</Value>',
  'search.operator.string-equal.name': 'este',
  /* String equals one of the predefined allowed values */
  'search.operator.string-list-equal.description':
    '<Field/> <Operator>este</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-equal.name': 'este',
  /* String does not equal one of the predefined allowed values */
  'search.operator.string-list-not-equal.description':
    '<Field/> <Operator>nu este</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-not-equal.name': 'nu este',
  /* String does not contain the given filter value */
  'search.operator.string-not-contains.description':
    '<Field/> <Operator>nu conține</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-contains.name': 'nu conține',
  /* String does not equal the given filter value */
  'search.operator.string-not-equal.description':
    '<Field/> <Operator>nu este</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-equal.name': 'nu este',
  /** Label for the "Best match" search ordering type */
  'search.ordering.best-match-label': 'Cel mai bun meci',
  /** Label for the "Created: Oldest first" search ordering type */
  'search.ordering.created-ascending-label': 'Creat: Cel mai vechi prima dată',
  /** Label for the "Created: Newest first" search ordering type */
  'search.ordering.created-descending-label': 'Creat: Cel mai nou prima dată',
  /** Label for the "Updated: Oldest first" search ordering type */
  'search.ordering.updated-ascending-label': 'Actualizat: Cel mai vechi prima dată',
  /** Label for the "Updated: Newest first" search ordering type */
  'search.ordering.updated-descending-label': 'Actualizat: Cel mai nou prima dată',
  /** Placeholder text for the global search input field */
  'search.placeholder': 'Caută',
  /** Accessibility label for the recent searches section, shown when no valid search terms has been given */
  'search.recent-searches-aria-label': 'Căutări recente',
  /** Label/heading shown for the recent searches section */
  'search.recent-searches-label': 'Căutări recente',
  /** Accessibility label for the search results section, shown when the user has typed valid terms */
  'search.search-results-aria-label': 'Rezultatele căutării',

  /** Label for the edit columns button to change field visibility in sheet list */
  'sheet-list.edit-columns': 'Editează coloanele',
  /** Label for the header menu option to hide a field from the sheet list */
  'sheet-list.hide-field': 'Elimină din tabel',
  /** Label for reset column visibilities button */
  'sheet-list.reset-columns': 'Resetează coloanele',
  /** Title for the edit columns menu */
  'sheet-list.select-fields': 'Selectează până la 5 tipuri de câmpuri',

  /** Accessibility label for the navbar status button */
  'status-button.aria-label': 'Starea configurației',

  /* Time zone handling */
  'time-zone.action.search-for-timezone-placeholder': 'Căutați un oraș sau un fus orar',
  /* Label for the local time zone button */
  'time-zone.action.select-local-time-zone': 'Selectați fusul orar local',
  /* Dialog info for the time zone dialog */
  'time-zone.dialog-info.content-releases':
    'Fusul orar selectat va schimba modul în care datele sunt reprezentate în lansările de conținut.',
  /* Dialog info for the time zone dialog */
  'time-zone.dialog-info.input':
    'Fusul orar selectat va schimba modul în care datele sunt reprezentate doar pentru această intrare în acest document.',
  /* Dialog info for the time zone dialog */
  'time-zone.dialog-info.scheduled-publishing':
    'Fusul orar selectat va schimba modul în care datele sunt reprezentate în programe.',
  /* Label for the local time zone button */
  'time-zone.local-time': 'ora locală',
  /* Label for the time zone button */
  'time-zone.time-zone': 'Fus orar',
  /* Tooltip content for the time zone dialog */
  'time-zone.time-zone-tooltip-content-releases':
    'Afișarea lansărilor în {{alternativeName}} GMT{{offset}}',
  /* Tooltip content for the time zone dialog */
  'time-zone.time-zone-tooltip-input':
    'Afișarea <em>{{title}}</em> în {{alternativeName}} GMT{{offset}}',
  /* Tooltip content for the time zone dialog */
  'time-zone.time-zone-tooltip-scheduled-publishing':
    'Afișarea programelor în {{alternativeName}} GMT{{offset}}',

  /** Title for the changes tooltip in the history inspector*/
  'timeline.changes.title': 'Modificări de către',
  /** Description for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-description':
    'Tranzacțiile istoricului documentului nu au fost afectate.',
  /** Title for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-title':
    'A apărut o eroare în timpul recuperării modificărilor documentului.',
  /** Description for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-version-description':
    'Activează API-ul de evenimente prin configurația Studio pentru a vizualiza istoricul documentului.',
  /** Title for error when the timeline for the given version document can't be loaded */
  'timeline.error.load-document-changes-version-title':
    'Istoricul versiunilor documentelor este disponibil doar prin API-ul de Evenimente.',
  /** Error description for when the document doesn't have history */
  'timeline.error.no-document-history-description':
    'Când se modifică conținutul documentului, versiunile documentului vor apărea în acest meniu.',
  /** Error title for when the document doesn't have history */
  'timeline.error.no-document-history-title': 'Niciun istoric al documentului',
  /** Error prompt when revision cannot be loaded */
  'timeline.error.unable-to-load-revision': 'Imposibil de încărcat revizia',
  /** Label for when the timeline item is the latest in the history */
  'timeline.latest': 'Cel mai recent',
  /** Label for latest revision for timeline menu dropdown */
  'timeline.latest-revision': 'Ultima revizie',
  /**
   * Label for latest revision for timeline menu dropdown
   * @deprecated as of `v3.47.0` `timeline.latest-revision` should be used instead. Note: _usage_ of this key is deprecated, but Studios on `< v3.47.0` still require this key to be _defined_
   * */
  'timeline.latest-version': 'Ultima revizie',
  /** The aria-label for the list of revisions in the timeline */
  'timeline.list.aria-label': 'Reviziile documentului',
  /** Label for loading history */
  'timeline.loading-history': 'Se încarcă istoricul…',
  /* Label for when no previous since events are available*/
  'timeline.no-previous-events': 'Niciun eveniment anterior',
  /** Label shown in review changes timeline when a document has been created */
  'timeline.operation.created': 'Creat',
  /** Label shown in review changes timeline when a document has been created, with a timestamp */
  'timeline.operation.created_timestamp': 'Creat: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was initially created */
  'timeline.operation.created-initial': 'Creat inițial',
  /** Label shown in review changes timeline when a document was initially created, with a timestamp */
  'timeline.operation.created-initial_timestamp': 'Creat inițial: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been deleted */
  'timeline.operation.deleted': 'Șters',
  /** Label shown in review changes timeline when a document has been deleted, with a timestamp */
  'timeline.operation.deleted_timestamp': 'Șters: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft document has been created*/
  'timeline.operation.draft-created': 'Ciornă creată',
  /** Label shown in review changes timeline when a draft document has been created, with a timestamp */
  'timeline.operation.draft-created_timestamp': 'Ciornă creată: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been discarded */
  'timeline.operation.draft-discarded': 'Ciornă descartată',
  /** Label shown in review changes timeline when a draft has been discarded, with a timestamp */
  'timeline.operation.draft-discarded_timestamp': 'Ciornă descartată: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been edited */
  'timeline.operation.edited-draft': 'Editat',
  /** Label shown in review changes timeline when a draft has been edited, with a timestamp */
  'timeline.operation.edited-draft_timestamp': 'Editat: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been edited live */
  'timeline.operation.edited-live': 'Editat live',
  /** Label shown in review changes timeline when a document has been edited live, with a timestamp */
  'timeline.operation.edited-live_timestamp': 'Editat live: {{timestamp, datetime}}',
  /** Label shown in review changes timeline event when transactions have been deleted by retention policy */
  'timeline.operation.history-cleared': 'Șters de politica de retenție',
  /** Label shown in review changes timeline when a document was published */
  'timeline.operation.published': 'Publicat',
  /** Label shown in review changes timeline when a document was published, with a timestamp */
  'timeline.operation.published_timestamp': 'Publicat: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was unpublished */
  'timeline.operation.unpublished': 'Nepublicat',
  /** Label shown in review changes timeline when a document was unpublished, with a timestamp */
  'timeline.operation.unpublished_timestamp': 'Nepublicat: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document version has been created */
  'timeline.operation.version-created': 'Versiune creată',
  /** Label shown in review changes timeline when a document version has been created, with a timestamp */
  'timeline.operation.version-created_timestamp': 'Versiune creată: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document version has been discarded */
  'timeline.operation.version-discarded': 'Versiune eliminată',
  /** Label shown in review changes timeline when a document version has been discarded, with a timestamp */
  'timeline.operation.version-discarded_timestamp': 'Versiune eliminată: {{timestamp, datetime}}',
  /**
   * Label for determining since which version the changes for timeline menu dropdown are showing.
   * Receives the time label as a parameter (`timestamp`).
   */
  'timeline.since': '{{timestamp, datetime}}',
  /** Label for missing change version for timeline menu dropdown are showing */
  'timeline.since-version-missing': 'De la: versiune necunoscută',

  /** Aria label for the action buttons in the PTE toolbar */
  'toolbar.portable-text.action-button-aria-label': '{{action}}',

  /** Accessibility label for the breadcrumb menu */
  'tree-editing-dialog.breadcrumbs.menu': 'Meniu breadcrumb',
  /** Title placeholder for search input in array of objects */
  'tree-editing-dialog.search-placeholder': 'Caută',
  /** Menu aria label for the search menu */
  'tree-editing-dialog.search.menu-label': 'Meniu de căutare',
  /** Title label for when no search results are found on the tree of objects */
  'tree-editing-dialog.search.no-results-title': 'Nu s-au găsit rezultate',
  /** Label to close the sidebar */
  'tree-editing-dialog.sidebar.action.close': 'Închide bara laterală',
  /** Collapse label the menu item in the sidebar  */
  'tree-editing-dialog.sidebar.action.collapse': 'Restrânge',
  /** Label to close the dialog */
  'tree-editing-dialog.sidebar.action.done': 'Gata',
  /** Exapnd label the menu item in the sidebar  */
  'tree-editing-dialog.sidebar.action.expand': 'Extinde',
  /** Label to open the sidebar */
  'tree-editing-dialog.sidebar.action.open': 'Deschide bara laterală',

  /** Label for button showing the free trial days left */
  'user-menu.action.free-trial_one': '{{count}} zi rămasă în perioada de încercare',
  /** Label for the button showed after trial ended */
  'user-menu.action.free-trial-finished': 'Treci de la gratuit la abonament',
  /** Label for action to invite members to the current sanity project */
  'user-menu.action.invite-members': 'Invită membri',
  /** Accessibility label for action to invite members to the current sanity project */
  'user-menu.action.invite-members-aria-label': 'Invită membri',
  /** Label for action to manage the current sanity project */
  'user-menu.action.manage-project': 'Gestionează proiectul',
  /** Accessibility label for the action to manage the current project */
  'user-menu.action.manage-project-aria-label': 'Gestionează proiectul',
  /** Tooltip helper text when portable text annotation is disabled for empty block*/
  'user-menu.action.portable-text.annotation-disabled_empty-block':
    'Nu se poate aplica {{name}} la un bloc gol',
  /** Tooltip helper text when portable text annotation is disabled for multiple blocks */
  'user-menu.action.portable-text.annotation-disabled_multiple-blocks':
    'Nu se poate aplica {{name}} la mai multe blocuri',
  /** Label for action to sign out of the current sanity project */
  'user-menu.action.sign-out': 'Deconectare',
  /** Title for appearance section for the current studio (dark / light / system scheme) */
  'user-menu.appearance-title': 'Aspect',
  /** Label for close menu button for user menu */
  'user-menu.close-menu': 'Închide meniul',
  /** Description for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-description': 'Utilizează aspectul întunecat',
  /** Title for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-title': 'Întunecat',
  /** Description for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-description': 'Utilizează aspectul luminos',
  /** Title for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-title': 'Luminos',
  /** Description for using "system apparence" in the appearance user menu */
  'user-menu.color-scheme.system-description': 'Utilizează aspectul sistemului',
  /** Title for using system apparence in the appearance user menu */
  'user-menu.color-scheme.system-title': 'Sistem',
  /** Title for locale section for the current studio */
  'user-menu.locale-title': 'Limbă',
  /** Label for tooltip to show which provider the currently logged in user is using */
  'user-menu.login-provider': 'Conectat cu {{providerTitle}}',
  /** Label for open menu button for user menu */
  'user-menu.open-menu': 'Deschide meniul',

  /**
   * Label for action to add a workspace (currently a developer-oriented action, as this will
   * lead to the documentation on workspace configuration)
   */
  'workspaces.action.add-workspace': 'Adaugă spațiu de lucru',
  /**
   * Label for action to choose a different workspace, in the case where you are not logged in,
   * have selected a workspace, and are faced with the authentication options for the selected
   * workspace. In other words, label for the action shown when you have reconsidered which
   * workspace to authenticate in.
   */
  'workspaces.action.choose-another-workspace': 'Alege alt spațiu de lucru',
  /** Label for title to switch workspace before workspaces are listed */
  'workspaces.action.switch-workspace': undefined, // 'Switch workspace'
  /** Label for heading that indicates that you can choose your workspace */
  'workspaces.choose-your-workspace-label': 'Alegeți spațiul de lucru',
  /** Label for the workspace menu */
  'workspaces.select-workspace-aria-label': 'Selectează spațiul de lucru',
  /** Button label for opening the workspace switcher */
  'workspaces.select-workspace-label': 'Selectează spațiul de lucru',
  /** Tooltip for the workspace menu */
  'workspaces.select-workspace-tooltip': 'Selectează spațiul de lucru',
  /** Title for Workplaces dropdown menu */
  'workspaces.title': 'Spații de lucru',
})
