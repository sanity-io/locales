import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** "Configuration issue" header */
  'about-dialog.configuration-issue.header': "S'ha detectat un problema de configuració",
  /** Message shown if sanity.cli.ts is missing deployment.appId */
  'about-dialog.configuration-issue.missing-appid':
    "Les actualitzacions automàtiques estan habilitades, però no s'ha configurat cap <code>deployment.appId</code> a <code>sanity.cli.ts</code>. Aquest Studio s'està actualitzant contra el canal <strong>latest</strong>.",
  /** "View documentation" link for auto-updating studios */
  'about-dialog.configuration-issue.missing-appid.view-documentation': 'Veure la documentació',
  /** "Disabled" status for auto-updates in About-dialog */
  'about-dialog.version-info.auto-updates.disabled': 'Desactivat',
  /** "Enabled" status for auto-updates in About-dialog */
  'about-dialog.version-info.auto-updates.enabled': 'Activat',
  /** @deprecated "Auto Updates" status header in About-dialog */
  'about-dialog.version-info.auto-updates.header': 'Actualitzacions Automàtiques',
  /** "How to enable" next to Disabled state for Auto updates in version info dialog */
  'about-dialog.version-info.auto-updates.how-to-enable': 'Com activar',
  /** "Manage version" link text */
  'about-dialog.version-info.auto-updates.manage-version': 'Gestionar la versió',
  /** Text displayed on the "Copy to clipboard"-button after clicked */
  'about-dialog.version-info.copy-to-clipboard-button.copied-text':
    'Copiat al porta-retalls. Feliç enganxada!',
  /** "Copy to Clipboard" button text for copying version details from About-dialog */
  'about-dialog.version-info.copy-to-clipboard-button.text': 'Copiar al Porta-retalls',
  /** "Current version" header in version info dialog  */
  'about-dialog.version-info.current-version.header': 'Versió actual',
  /** @deprecated "How to upgrade" link text */
  'about-dialog.version-info.how-to-upgrade': 'Com actualitzar',
  /** "Latest version" header in version info dialog */
  'about-dialog.version-info.latest-version.header': 'Última versió',
  /** Info text when auto updates is enabled and a new version is available */
  'about-dialog.version-info.new-auto-update-version-available': 'Nova versió disponible',
  /** "New version" header in version info dialog - Note that this is not necessary a *higher* version compared to current:
   *  It's a new version configured for auto updates which in some cases could even be a version below current  */
  'about-dialog.version-info.new-version.text': 'Nova versió',
  /** "Reload"-button when auto updates is enabled and a new version is available */
  'about-dialog.version-info.reload': 'Recarregar',
  /** "Reload to update"-tooltip when auto updates is enabled and a new version is available */
  'about-dialog.version-info.reload-to-update': "Recarrega l'Studio per actualitzar",
  /** "Development" tooltip in About-dialog */
  'about-dialog.version-info.tooltip.development': 'Desenvolupament',
  /** "New version available" tooltip in About-dialog */
  'about-dialog.version-info.tooltip.new-version-available': 'Nova versió disponible',
  /** "Prerelease" tooltip in About-dialog */
  'about-dialog.version-info.tooltip.prerelease': 'Prellançament',
  /** "Up to date" tooltip in About-dialog */
  'about-dialog.version-info.tooltip.up-to-date': 'Actualitzat',
  /** @deprecated "Up to date" status in About-dialog */
  'about-dialog.version-info.up-to-date': 'Actualitzat',
  /** "Upgrade"-button text */
  'about-dialog.version-info.update-button.text': 'Actualitzar',
  /** "Upgrade"-button tooltip text */
  'about-dialog.version-info.update-button.tooltip': 'Aprèn com actualitzar Sanity Studio',
  /** "User agent" header in About-dialog */
  'about-dialog.version-info.user-agent.header': "Agent d'usuari",
  /** "View on GitHub" link from version info dialog */
  'about-dialog.version-info.view-on-github': 'Veure a GitHub',

  /** The text used in the tooltip shown in the dialog close button */
  'announcement.dialog.close': 'Tancar',
  /** Aria label to be used in the dialog close button */
  'announcement.dialog.close-label': 'Tancar diàleg',
  /**Text to be used in the tooltip in the button in the studio announcement card */
  'announcement.floating-button.dismiss': 'Tancar',
  /**Aria label to be used in the floating button in the studio announcement card, to dismiss the card */
  'announcement.floating-button.dismiss-label': 'Descartar anuncis',
  /**Aria label to be used in the floating button in the studio announcement card */
  'announcement.floating-button.open-label': 'Obrir anuncis',

  /** Menu item for deleting the asset */
  'asset-source.asset-list.menu.delete': 'Eliminar',
  /** Menu item for showing where a particular asset is used */
  'asset-source.asset-list.menu.show-usage': 'Mostrar ús',
  /** Header in usage dialog for file assets */
  'asset-source.asset-usage-dialog.header_file': "Documents que utilitzen l'arxiu",
  /** Header in usage dialog for image assets */
  'asset-source.asset-usage-dialog.header_image': 'Documents que utilitzen la imatge',
  /** Text shown in usage dialog when loading documents using the selected asset */
  'asset-source.asset-usage-dialog.loading': 'Carregant…',
  /** Text for cancel action in delete-asset dialog */
  'asset-source.delete-dialog.action.cancel': 'Cancel·lar',
  /** Text for "confirm delete" action in delete-asset dialog */
  'asset-source.delete-dialog.action.delete': 'Eliminar',
  /** Dialog header for delete-asset dialog when deleting a file */
  'asset-source.delete-dialog.header_file': 'Eliminar arxiu',
  /** Dialog header for delete-asset dialog when deleting an image */
  'asset-source.delete-dialog.header_image': 'Esborra la imatge',
  /** Text shown in delete dialog when loading documents using the selected asset */
  'asset-source.delete-dialog.loading': 'Carregant…',
  /** Message confirming to delete *named* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_named':
    "Estàs a punt d'esborrar l'arxiu <strong>{{filename}}</strong> i les seves metadades. N'estàs segur?",
  /** Message confirming to delete *unnamed* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_unnamed':
    "Estàs a punt d'esborrar l'arxiu i les seves metadades. N'estàs segur?",
  /** Message confirming to delete *named* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_named':
    "Estàs a punt d'esborrar la imatge <strong>{{filename}}</strong> i les seves metadades. N'estàs segur?",
  /** Message confirming to delete *unnamed* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_unnamed':
    "Estàs a punt d'esborrar la imatge i les seves metadades. N'estàs segur?",
  /** Alt text showing on image preview in delete asset dialog  */
  'asset-source.delete-dialog.usage-list.image-preview-alt': 'Previsualització de la imatge',
  /** Warning message showing when *named* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_named':
    "{{filename}} no es pot esborrar perquè està en ús. Per poder esborrar aquest arxiu, primer has d'eliminar tots els seus usos.",
  /** Warning message showing when *unnamed* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_unnamed':
    "Aquest arxiu no es pot esborrar perquè està en ús. Per poder esborrar-lo, primer has d'eliminar tots els seus usos.",
  /** Warning message showing when *named* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_named':
    "{{filename}} no es pot esborrar perquè està en ús. Per poder esborrar aquesta imatge, primer has d'eliminar tots els seus usos.",
  /** Warning message showing when *unnamed* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_unnamed':
    "Aquesta imatge no es pot esborrar perquè està en ús. Per poder esborrar-la, primer has d'eliminar tots els seus usos.",
  /** Text shown when the list of assets only include a specific set of types */
  'asset-source.dialog.accept-message':
    'Només es mostren actius dels tipus acceptats: <strong>{{acceptTypes}}</strong>',
  /** Select asset dialog cancel-button */
  'asset-source.dialog.button.cancel': 'Cancel·la',
  /** Select asset dialog select-button */
  'asset-source.dialog.button.select': 'Selecciona',
  /** Keys shared between both image asset source and file asset source */
  /** Select asset dialog title for files */
  'asset-source.dialog.default-title_file': "Selecciona l'arxiu",
  /** Select asset dialog title for images */
  'asset-source.dialog.default-title_image': 'Selecciona la imatge',
  /** Select asset dialog title for videos */
  'asset-source.dialog.default-title_video': 'Selecciona vídeo',
  /** Insert asset error */
  'asset-source.dialog.insert-asset-error':
    "Error en inserir l'actiu. Consulta la consola per a més informació.",
  /** Select asset dialog load more items */
  'asset-source.dialog.load-more': 'Carrega més',
  /** Text shown when selecting a file but there's no files to select from
   * @deprecated no longer in use
   */
  'asset-source.dialog.no-assets_file': 'No hi ha arxius',
  /** Text shown when selecting an image but there's no images to select from
   * @deprecated no longer in use
   */
  'asset-source.dialog.no-assets_image': 'No hi ha imatges',
  'asset-source.file.asset-list.action.delete.disabled-cannot-delete-current-file':
    "No es pot esborrar l'arxiu seleccionat actualment",
  'asset-source.file.asset-list.action.delete.text': 'Esborra',
  'asset-source.file.asset-list.action.delete.title': "Esborra l'arxiu",
  'asset-source.file.asset-list.action.select-file.title': "Selecciona l'arxiu {{filename}}",
  'asset-source.file.asset-list.action.show-usage.title': "Mostra l'ús",
  'asset-source.file.asset-list.delete-failed': "No s'ha pogut eliminar el fitxer",
  'asset-source.file.asset-list.delete-successful': "El fitxer s'ha eliminat",
  'asset-source.file.asset-list.header.date-added': "Data d'afegiment",
  /** File asset source */
  'asset-source.file.asset-list.header.filename': 'Nom del fitxer',
  'asset-source.file.asset-list.header.size': 'Mida',
  'asset-source.file.asset-list.header.type': 'Tipus',
  /** Text displayed on button or menu invoking the file asset source */
  'asset-source.file.title': 'Fitxers pujats',
  'asset-source.image.asset-list.delete-failed': "No s'ha pogut eliminar la imatge",
  /** Image asset source */
  'asset-source.image.asset-list.delete-successful': "La imatge s'ha eliminat",
  /** Text displayed on button or menu invoking the image asset source */
  'asset-source.image.title': 'Imatges pujades',
  /** Built in asset source usage texts */
  'asset-source.usage-list.documents-using-file_named_one':
    'Un document està utilitzant el fitxer <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-file_named_other':
    '{{count}} documents estan utilitzant el fitxer <code>{{filename}}</code>',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *named* file **/
  'asset-source.usage-list.documents-using-file_named_zero':
    'Cap document està utilitzant el fitxer <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-file_unnamed_one':
    'Un document està utilitzant aquest fitxer',
  'asset-source.usage-list.documents-using-file_unnamed_other':
    '{{count}} documents estan utilitzant aquest fitxer',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *unnamed* file **/
  'asset-source.usage-list.documents-using-file_unnamed_zero':
    'Cap document està utilitzant aquest fitxer',
  'asset-source.usage-list.documents-using-image_named_one':
    'Un document està utilitzant la imatge <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-image_named_other':
    '{{count}} documents estan utilitzant la imatge <code>{{filename}}</code>',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *named* image **/
  'asset-source.usage-list.documents-using-image_named_zero':
    'Cap document està utilitzant la imatge <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-image_unnamed_one':
    'Un document està utilitzant aquesta imatge',
  'asset-source.usage-list.documents-using-image_unnamed_other':
    '{{count}} documents estan utilitzant aquesta imatge',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *unnamed* image **/
  'asset-source.usage-list.documents-using-image_unnamed_zero':
    'Cap document està utilitzant aquesta imatge',

  /** Common (all) Asset Source texts. Note that all translation keys starting with 'asset-source.' is for the built in asset source. */
  'asset-sources.common.uploader.upload-failed.description':
    'Consulta la consola per a més informació.',
  'asset-sources.common.uploader.upload-failed.title': 'La càrrega ha fallat',
  /** Menu Items for Dataset Asset Source (will be replaced with workspace name by default) */
  'asset-sources.dataset.file.title': "Fitxers de l'espai de treball",
  'asset-sources.dataset.image.title': "Imatges de l'espai de treball",
  /** Error messages for the Media Library Asset Source  */
  'asset-sources.media-library.error.library-could-not-be-resolved':
    'Alguna cosa ha anat malament intentant resoldre la Biblioteca de Mitjans per a aquest projecte.',
  /** Error message shown when no media library has been provisioned for the current organization */
  'asset-sources.media-library.error.no-media-library-provisioned':
    "No s'ha provisionat cap biblioteca de mitjans per a aquesta organització.",
  /** Menu Items for Media Library Asset Source */
  'asset-sources.media-library.file.title': 'Biblioteca de mitjans',
  'asset-sources.media-library.image.title': 'Biblioteca de mitjans',
  /** Done button text */
  'asset-sources.media-library.open-in-source-dialog.button.done': 'Fet',
  /** Select new asset button text with target title */
  'asset-sources.media-library.open-in-source-dialog.button.select-new-asset':
    'Selecciona un nou actiu per a “{{targetTitle}}”',
  'asset-sources.media-library.open-in-source-dialog.button.select-new-asset-fallback':
    'Selecciona un nou actiu',
  /** Title for the open in source dialog */
  'asset-sources.media-library.open-in-source-dialog.title': "Edita l'actiu",
  /** Info messages for the Media Library Asset Source  */
  'asset-sources.media-library.select-dialog.title_file':
    'Seleccionant fitxer per a {{targetTitle}}',
  'asset-sources.media-library.select-dialog.title_image':
    'Seleccionant imatge per a {{targetTitle}}',
  'asset-sources.media-library.select-dialog.title_video':
    'Seleccionant vídeo per a {{targetTitle}}',
  /** Warning message shown when uploading already existing files to the Media Library Asset Source */
  'asset-sources.media-library.warning.file-already-exist.description':
    'Utilitzant el fitxer existent trobat a la biblioteca.',
  'asset-sources.media-library.warning.file-already-exist.title':
    "El fitxer: '{{filename}}' ja existeix",

  /** Label when a release has been deleted by a different user */
  'banners.deleted-bundle-banner.text':
    "La publicació '<strong>{{title}}</strong>' ha estat eliminada.",

  /** Action message for navigating to next month */
  'calendar.action.go-to-next-month': 'Anar al mes següent',
  /** Action message for navigating to next year */
  'calendar.action.go-to-next-year': "Anar a l'any següent",
  /** Action message for navigating to previous month */
  'calendar.action.go-to-previous-month': 'Anar al mes anterior',
  /** Action message for navigating to previous year */
  'calendar.action.go-to-previous-year': "Anar a l'any anterior",
  /* Label for navigating the calendar to "today", without _selecting_ today. Short form, eg `Today`, not `Go to today` */
  'calendar.action.go-to-today': 'Avui',
  /* Accessibility label for navigating the calendar to "today", without _selecting_ today */
  'calendar.action.go-to-today-aria-label': 'Anar a avui',
  /* Label for navigating the calendar to "tomorrow", without _selecting_ tomorrow. Short form, eg `Tomorrow`, not `Go to tomorrow` */
  'calendar.action.go-to-tomorrow': 'Demà',
  /* Label for navigating the calendar to "yesterday", without _selecting_ yesterday. Short form, eg `Yesterday`, not `Go to yesterday` */
  'calendar.action.go-to-yesterday': 'Ahir',
  /** Label for switch that controls whether or not to include time in given timestamp */
  'calendar.action.include-time-label': 'Incloure hora',
  /** Action message for selecting the time */
  'calendar.action.select-time': 'Seleccionar hora',
  /** Action message for setting to the current time */
  'calendar.action.set-to-current-time': "Establir a l'hora actual",
  /** Label for selecting an hour preset. Receives a `time` param as a string on hh:mm format and a `date` param as a Date instance denoting the preset date */
  'calendar.action.set-to-time-preset': '{{time}} el {{date, datetime}}',
  /** Aria label for button to open date picker */
  'calendar.button.aria-label': 'Obrir calendari',
  /** Tooltip content for button to open datetime input */
  'calendar.button.tooltip-text': 'Seleccionar data',
  /** Error message displayed in calendar when entered date is not the correct format */
  'calendar.error.must-be-in-format': 'Ha de tenir el format: {{exampleDate}}',
  /** Month name for April */
  'calendar.month-names.april': 'Abril',
  /** Month name for August */
  'calendar.month-names.august': 'Agost',
  /** Month name for December */
  'calendar.month-names.december': 'Desembre',
  /** Month name for February */
  'calendar.month-names.february': 'Febrer',
  /** Month name for January */
  'calendar.month-names.january': 'Gener',
  /** Month name for July */
  'calendar.month-names.july': 'Juliol',
  /** Month name for June */
  'calendar.month-names.june': 'Juny',
  /** Month name for March */
  'calendar.month-names.march': 'Març',
  /** Month name for May */
  'calendar.month-names.may': 'Maig',
  /** Month name for November */
  'calendar.month-names.november': 'Novembre',
  /** Month name for October */
  'calendar.month-names.october': 'Octubre',
  /** Month name for September */
  'calendar.month-names.september': 'Setembre',
  /** Short weekday name for Friday */
  'calendar.weekday-names.short.friday': 'Div',
  /** Short weekday name for Monday */
  'calendar.weekday-names.short.monday': 'Dil',
  /** Short weekday name for Saturdayday */
  'calendar.weekday-names.short.saturday': 'Dis',
  /** Short weekday name for Sunday */
  'calendar.weekday-names.short.sunday': 'Diu',
  /** Short weekday name for Thursday */
  'calendar.weekday-names.short.thursday': 'Dij',
  /** Short weekday name for Tuesday */
  'calendar.weekday-names.short.tuesday': 'Dim',
  /** Short weekday name for Wednesday */
  'calendar.weekday-names.short.wednesday': 'Dix',

  /** Label for the close button label in Review Changes pane */
  'changes.action.close-label': "Tancar l'historial",
  /** Cancel label for revert button prompt action */
  'changes.action.revert-all-cancel': 'Cancel·lar',
  /** Revert all confirm label for revert button action - used on prompt button + review changes pane */
  'changes.action.revert-all-confirm': 'Revertir tot',
  /** Prompt for confirming revert change (singular) label for field change action */
  'changes.action.revert-changes-confirm-change_one': 'Revertir canvi',
  /** Revert for confirming revert (plural) label for field change action */
  'changes.action.revert-changes-confirm-change_other': 'Revertir canvis',
  /** Prompt for reverting changes for a field change */
  'changes.action.revert-changes-description': 'Estàs segur que vols revertir els canvis?',
  /** Prompt for reverting changes for a group change, eg multiple changes */
  'changes.action.revert-changes-description_one': 'Estàs segur que vols revertir el canvi?',
  /** Label for when the action of the change was to set something that was previously empty, eg a field was given a value, an array item was added, an asset was selected or similar */
  'changes.added-label': 'Afegit',
  /** Array diff: An item was added in a given position (`{{position}}`) */
  'changes.array.item-added-in-position': 'Afegit en la posició {{position}}',
  'changes.array.item-moved_down_one': 'Mogut {{count}} posició avall',
  'changes.array.item-moved_down_other': 'Mogut {{count}} posicions avall',
  /**
   * Array diff: An item was moved within the array.
   * Receives `{{count}}` representing number of positions it moved.
   * Context is the direction of the move, either `up` or `down`.
   */
  'changes.array.item-moved_up_one': 'Mogut {{count}} posició amunt',
  'changes.array.item-moved_up_other': "S'ha mogut {{count}} posicions cap amunt",
  /** Array diff: An item was removed from a given position (`{{position}}`) */
  'changes.array.item-removed-from-position': 'Eliminat de la posició {{position}}',
  /** Accessibility label for the "change bar" shown when there are edits on a field-level */
  'changes.change-bar.aria-label': 'Revisar canvis',
  /** Label for when the action of the change was _not_ an add/remove, eg a text field changed value, an image was changed from one asset to another or similar */
  'changes.changed-label': 'Canviat',
  /** Label and text for tooltip that indicates the authors of the changes */
  'changes.changes-by-author': 'Canvis per',
  /** Additional text shown in development mode when a diff component crashes during rendering */
  'changes.error-boundary.developer-info':
    'Consulta la consola de desenvolupadors per a més informació',
  /** Text shown when a diff component crashes during rendering, triggering the error boundary */
  'changes.error-boundary.title': "Renderitzar els canvis d'aquest camp ha provocat un error",
  /* Error description when changes could not be loaded */
  'changes.error-description': "No podem carregar els canvis d'aquest document.",
  /** Error title when changes could not be loaded */
  'changes.error-title': 'Alguna cosa ha anat malament',
  /** Error message shown when the value of a field is not the expected one */
  'changes.error.incorrect-type-message':
    'Error de valor: El valor és del tipus "<code>{{actualType}}</code>", s\'esperava "<code>{{expectedType}}</code>"',
  /** File diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.file.meta-info-fallback-title': 'Sense títol',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.crop-changed': 'Retallada canviada',
  /** Image diff: Text shown if the previous image asset was deleted (shouldn't theoretically happen) */
  'changes.image.deleted': 'Imatge eliminada',
  /** Image diff: Text shown if the image failed to be loaded when previewing it */
  'changes.image.error-loading-image': 'Error en carregar la imatge',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.hotspot-changed': 'Punt calent canviat',
  /** Image diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.image.meta-info-fallback-title': 'Sense títol',
  /** Image diff: Text shown if no asset has been set for the field (but has metadata changes) */
  'changes.image.no-asset-set': 'Imatge no establerta',
  /** Image diff: Text shown when the from/to state has/had no image */
  'changes.image.no-image-placeholder': '(sense imatge)',
  /** Label for the "from" value in the change inspector */
  'changes.inspector.from-label': 'De',
  /** Label for the "meta" (field path, action etc) information in the change inspector */
  'changes.inspector.meta-label': 'Meta',
  /** Label for the "to" value in the change inspector */
  'changes.inspector.to-label': 'A',
  /** Loading author of change in the differences tooltip in the review changes pane */
  'changes.loading-author': 'Carregant…',
  /** Loading changes in Review Changes Pane */
  'changes.loading-changes': 'Carregant canvis…',
  /** Error message shown when the document revision could not be found */
  'changes.missing-since-document-error':
    "No hem pogut trobar la revisió del document amb id: <code>{{revisionId}}</code> que esteu intentant comparar. <Break/> Això probablement es deu a la política de retenció d'historial del vostre pla. <Break/> Si us plau, seleccioneu una entrada <strong>Des de</strong> diferent.",
  /** No Changes description in the Review Changes pane */
  'changes.no-changes-description':
    'Edita el document o selecciona una versió anterior en la línia de temps per veure una llista de canvis aparèixer en aquest panell.',
  /** No Changes title in the Review Changes pane */
  'changes.no-changes-title': 'No hi ha canvis',
  /* Label for the tooltip that shows when an action is not selectable*/
  'changes.not-selectable': 'No és possible seleccionar aquest esdeveniment',
  /** Portable Text diff: An annotation was added */
  'changes.portable-text.annotation_added': 'Anotació afegida',
  /** Portable Text diff: An annotation was changed */
  'changes.portable-text.annotation_changed': 'Anotació canviada',
  /** Portable Text diff: An annotation was removed */
  'changes.portable-text.annotation_removed': 'Anotació eliminada',
  /** Portable Text diff: An annotation was left unchanged */
  'changes.portable-text.annotation_unchanged': 'Anotació sense canvis',
  /** Portable Text diff: A block changed from one style to another (eg `normal` to `h1` or similar) */
  'changes.portable-text.block-style-changed':
    'Estil de bloc canviat de "{{fromStyle}}" a "{{toStyle}}"',
  /** Portable Text diff: Change formatting of text (setting/unsetting marks, eg bold/italic etc) */
  'changes.portable-text.changed-formatting': 'Format canviat',
  /** Portable Text diff: An empty inline object is part of a change */
  'changes.portable-text.empty-inline-object': 'Objecte en línia buit {{inlineObjectType}}',
  /** Portable Text diff: An empty object is the result of adding/removing an annotation */
  'changes.portable-text.empty-object-annotation': 'Anotació buida {{annotationType}}',
  /** Portable Text diff: Added a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_added': 'Text buit afegit',
  /** Portable Text diff: Changed a block that contained no text (eg empty block) */
  'changes.portable-text.empty-text_changed': 'Text buit canviat',
  /** Portable Text diff: Removed a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_removed': 'Text buit eliminat',
  /** Portable Text diff: An inline object was added */
  'changes.portable-text.inline-object_added': 'Objecte en línia afegit',
  /** Portable Text diff: An inline object was changed */
  'changes.portable-text.inline-object_changed': 'Objecte en línia canviat',
  /** Portable Text diff: An inline object was removed */
  'changes.portable-text.inline-object_removed': 'Objecte en línia eliminat',
  /** Portable Text diff: An inline object was left unchanged */
  'changes.portable-text.inline-object_unchanged': 'Objecte en línia sense canvis',
  /** Portable Text diff: Added a chunk of text */
  'changes.portable-text.text_added': 'Text afegit',
  /** Portable Text diff: Removed a chunk of text */
  'changes.portable-text.text_removed': 'Text eliminat',
  /** Portable Text diff: Annotation has an unknown schema type */
  'changes.portable-text.unknown-annotation-schema-type': "Tipus d'esquema desconegut",
  /** Portable Text diff: Inline object has an unknown schema type */
  'changes.portable-text.unknown-inline-object-schema-type': "Tipus d'esquema desconegut",
  /** Label for when the action of the change was a removal, eg a field was cleared, an array item was removed, an asset was deselected or similar */
  'changes.removed-label': 'Eliminat',
  /** Same Revision Selected description in the Review Changes pane */
  'changes.same-revision-selected-description':
    'Heu seleccionat la mateixa revisió <strong>des de</strong> i <strong>fins a</strong>, si us plau seleccioneu revisions diferents per comparar els canvis entre elles.',
  /** Same Revision Selected title in the Review Changes pane */
  'changes.same-revision-selected-title': 'Seleccionada la mateixa revisió',
  /** Title for the Review Changes pane */
  'changes.title': 'Història',
  /**The title that will be shown in the badge inside the events when the item is a draft */
  'changes.versions.draft': 'Esborrany',

  /** --- Common components --- */
  /** Tooltip text for context menu buttons */
  'common.context-menu-button.tooltip': 'Mostrar més',
  /** Default text for dialog cancel button */
  'common.dialog.cancel-button.text': 'Cancel·lar',
  /** Default text for dialog confirm button */
  'common.dialog.confirm-button.text': 'Confirma',
  /** Default text in shared loader text / spinner lockup */
  'common.loading': 'Carregant',
  /** The title of the reconnecting toast */
  'common.reconnecting.toast.title': 'Intentant connectar…',

  /** --- Configuration issues --- */
  /** Default label text on configuration issues button */
  'configuration-issues.button.label': 'Problemes de configuració',
  /** Tooltip displayed on configuration issues button */
  'configuration-issues.button.tooltip': "S'han trobat problemes de configuració",

  /** The fallback title for an ordering menu item if no localized titles are provided. */
  'default-menu-item.fallback-title': 'Ordena per {{title}}',

  /** Title for the default ordering/SortOrder if no orderings are provided and the caption field is found */
  'default-orderings.caption': 'Ordena per Peu de foto',
  /** Title for the default ordering/SortOrder if no orderings are provided and the description field is found */
  'default-orderings.description': 'Ordena per Descripció',
  /** Title for the default ordering/SortOrder if no orderings are provided and the header field is found */
  'default-orderings.header': 'Ordena per Capçalera',
  /** Title for the default ordering/SortOrder if no orderings are provided and the heading field is found */
  'default-orderings.heading': 'Ordena per Encapçalament',
  /** Title for the default ordering/SortOrder if no orderings are provided and the label field is found */
  'default-orderings.label': 'Ordena per Etiqueta',
  /** Title for the default ordering/SortOrder if no orderings are provided and the name field is found */
  'default-orderings.name': 'Ordena per Nom',
  /** Title for the default ordering/SortOrder if no orderings are provided and the title field is found */
  'default-orderings.title': 'Ordena per Títol',

  /** Label to show in the document footer indicating the creation date of the document */
  'document-status.created': 'Creat {{date}}',
  /** Label to show in the document status indicating the date of the status */
  'document-status.date': '{{date}}',
  /** Label to show in the document footer indicating the last edited date of the document */
  'document-status.edited': 'Editat {{date}}',
  /** Label to show in the document footer status line when a document was last published */
  'document-status.last-published': 'Darrera publicació',
  /** Label to show in the document footer indicating the document is not published*/
  'document-status.not-published': 'No publicat',
  /** Label to show in the document footer indicating the published date of the document */
  'document-status.published': 'Publicat {{date}}',
  /** Label to show in the document footer indicating the revision from date of the document */
  'document-status.revision-from': 'Revisió de <em>{{date}}</em>',
  /** Label to show in the document footer indicating that the revision was not found */
  'document-status.revision-not-found': 'Revisió no trobada',

  /** Label to indicate that a document type was not found */
  'document.type.not-found': 'No s\'ha trobat el tipus de document "{{type}}"',

  /** Error message shown when an action cannot be performed */
  'errors.unable-to-perform-action': 'No es pot realitzar aquesta acció',

  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.duplicate-keys-alert.details.additional-description':
    'El valor de la propietat <code>_key</code> ha de ser una cadena única.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property of each elements has been generated non-uniquely. */
  'form.error.duplicate-keys-alert.details.description':
    "Això sol passar quan els elements es creen utilitzant un client d'API, i la propietat <code>_key</code> de cada element s'ha generat de manera no única.",
  /** Developer info */
  'form.error.duplicate-keys-alert.details.title': 'Informació per a desenvolupadors',
  /** Generate unique keys */
  'form.error.duplicate-keys-alert.generate-button.text': 'Genera claus úniques',
  /** Several items in this list share the same identifier (key). Every item must have an unique identifier. */
  'form.error.duplicate-keys-alert.summary':
    "Diversos elements d'aquesta llista comparteixen el mateix identificador (clau). Cada element ha de tenir un identificador únic.",
  /** Non-unique keys */
  'form.error.duplicate-keys-alert.title': 'Claus no úniques',
  /** Error text shown when a field with a given name cannot be found in the schema or is conditionally hidden but explicitly told to render  */
  'form.error.field-not-found':
    'Camp "{{fieldName}}" no trobat entre els membres – verifiqueu que està definit en l\'esquema i que no ha estat ocultat condicionalment.',
  /** Add missing keys */
  'form.error.missing-keys-alert.add-button.text': 'Afegeix claus perdudes',
  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.missing-keys-alert.details.additional-description':
    'El valor de la propietat <code>_key</code> ha de ser una cadena única.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property has not been included. */
  'form.error.missing-keys-alert.details.description':
    "Això sol passar quan els elements són creats utilitzant un client d'API, i la propietat <code>_key</code> no ha estat inclosa.",
  /** Developer info */
  'form.error.missing-keys-alert.details.title': 'Informació per a desenvolupadors',
  /** Some items in the list are missing their keys. This must be fixed in order to edit the list. */
  'form.error.missing-keys-alert.summary':
    "Alguns elements de la llista no tenen les seves claus. Això s'ha de solucionar per poder editar la llista.",
  /** Missing keys */
  'form.error.missing-keys-alert.title': 'Claus perdudes',
  /** This usually happens when items are created using an API client, or when a custom input component has added invalid data to the list. */
  'form.error.mixed-array-alert.details.description':
    "Això sol passar quan els elements són creats utilitzant un client d'API, o quan un component d'entrada personalitzat ha afegit dades invàlides a la llista.",
  /** Developer info */
  'form.error.mixed-array-alert.details.title': 'Informació per a desenvolupadors',
  /**  Remove non-object values */
  'form.error.mixed-array-alert.remove-button.text': 'Elimina valors que no són objectes',
  /** Some items in this list are not objects. This must be fixed in order to edit the list. */
  'form.error.mixed-array-alert.summary':
    "Alguns elements d'aquesta llista no són objectes. Això s'ha de solucionar per poder editar la llista.",
  /** Invalid list values */
  'form.error.mixed-array-alert.title': 'Valors de llista invàlids',
  /** Error text shown when form is unable to find an array item at a given indexed path */
  'form.error.no-array-item-at-index':
    "No s'ha trobat cap element de l'array a l'índex <code>{{index}}</code> en el camí <code>{{path}}</code>",
  /** Error text shown when form is unable to find an array item at a given keyed path */
  'form.error.no-array-item-at-key':
    'No s\'ha trobat cap element de l\'array amb `_key` <code>"{{key}}"</code> en el camí <code>{{path}}</code>',
  /** The title above the error call stack output related to the crash */
  'form.error.unhandled-runtime-error.call-stack.title': 'Pila de trucades:',
  /** The title above the error component stack provided by React's underlying ErrorBoundary component */
  'form.error.unhandled-runtime-error.component-stack.title': 'Pila de components:',
  /** The error message for the unhandled error that crashed the Input component during render */
  'form.error.unhandled-runtime-error.error-message': 'Error: {{message}}',
  /** The title for the error card rendered inside a field in place of a crashing input */
  'form.error.unhandled-runtime-error.title': "Error de temps d'execució no gestionat",
  /** Form field deprecated label */
  'form.field.deprecated-label': 'obsolet',
  /** Fallback title shown above field if it has no defined title */
  'form.field.untitled-field-label': 'Camp sense títol',
  /** Accessibility label for the icon that indicates the field has a validation error */
  'form.validation.has-error-aria-label': 'Té error',
  /** Accessibility label for the icon that indicates the field has validation information */
  'form.validation.has-info-aria-label': 'Té informació',
  /** Accessibility label for the icon that indicates the field has a validation warning */
  'form.validation.has-warning-aria-label': 'Té advertència',
  /** Text shown when summarizing validation information, when the field has one or more errors */
  'form.validation.summary.errors-count_one': '{{count}} error',
  'form.validation.summary.errors-count_other': '{{count}} errors',
  /** Text shown when summarizing validation information, when the field has one or more warnings */
  'form.validation.summary.warnings-count_one': '{{count}} avís',
  'form.validation.summary.warnings-count_other': '{{count}} avisos',

  /** Tooltip for free trial navbar button indicating remaining days */
  'free-trial.tooltip.days-count_one': '{{count}} dia restant en el període de prova',
  'free-trial.tooltip.days-count_other': '{{count}} dies restants en el període de prova',
  /** Tooltip for free trial navbar button, once trial has ended */
  'free-trial.tooltip.trial-finished': 'Actualitza el teu projecte',

  /**
   * Label for "contact sales" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.contact-sales': 'Contacta amb vendes',
  /**
   * Label for "help and support" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.help-and-support': 'Ajuda i suport',
  /**
   * Label for "join our community" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.join-our-community': 'Uneix-te a la nostra comunitat',
  /** Information for what the latest sanity version is */
  'help-resources.latest-sanity-version': 'La versió més recent és {{latestVersion}}',
  /** Text for link to register a studio */
  'help-resources.register-studio': "Registra l'estudi",
  /** Name of the sanity studio */
  'help-resources.studio': 'Sanity Studio',
  /** Menu item for registered studios (i.e. copies app id) */
  'help-resources.studio-app-id': "Id de l'aplicació",
  /** Menu item for reloading Studio to update */
  'help-resources.studio-auto-update-now': 'Recarrega per actualitzar a la v{{newVersion}}',
  /** Information for what studio version the current studio is running */
  'help-resources.studio-version': 'Versió de Sanity Studio {{studioVersion}}',
  /** Title for help and resources menus */
  'help-resources.title': 'Ajuda i recursos',
  /** Label for studio's which are up to date */
  'help-resources.up-to-date': 'Actualitzat',
  /** Version text */
  'help-resources.version': 'v{{version}}',

  /**Incoming references inspector title */
  'incoming-references.title': 'Referències entrants',

  /** Text for button to cancel an ongoing upload */
  'input.files.common.cancel-upload': 'Cancel·la',
  /** Text for menuitem upload button default asset source */
  'input.files.common.upload-placeholder.file-input-button.default-source.badge': 'Per defecte',
  /** Text for file input button in upload placeholder */
  'input.files.common.upload-placeholder.file-input-button.text': 'Puja',
  /** Uploading <FileName/> */
  'input.files.common.upload-progress': 'Pujant <FileName/>',
  /** The referenced document cannot be opened, because the URL failed to be resolved */
  'input.reference.document-cannot-be-opened.failed-to-resolve-url':
    "Aquest document no es pot obrir (no es pot resoldre l'URL a Studio)",

  /** Label for adding item after a specific array item */
  'inputs.array.action.add-after': 'Afegeix un element després',
  /** Label for adding item before a specific array item */
  'inputs.array.action.add-before': 'Afegeix un element abans',
  /** Label for adding array item action when the schema allows for only one schema type */
  'inputs.array.action.add-item': 'Afegeix un element',
  /**
   * Label for adding one array item action when the schema allows for multiple schema types,
   * eg. will prompt the user to select a type once triggered
   */
  'inputs.array.action.add-item-select-type': 'Afegeix un element...',
  /** Label for copying an array item  */
  'inputs.array.action.copy': 'Copia',
  /** Array drag handle button tooltip */
  'inputs.array.action.drag.tooltip': 'Arrossega per reordenar',
  /** Label for duplicating an array item  */
  'inputs.array.action.duplicate': 'Duplica',
  /** Label for editing the item of a specific type, eg "Edit Person" */
  'inputs.array.action.edit': 'Edita {{itemTypeTitle}}',
  /** Label for removing an array item action  */
  'inputs.array.action.remove': 'Elimina',
  /** Label for removing action when an array item has an error  */
  'inputs.array.action.remove-invalid-item': 'Elimina',
  /** Label for viewing the item of a specific type, eg "View Person" */
  'inputs.array.action.view': 'Veure {{itemTypeTitle}}',
  /** Error description for the array item tooltip that explains that the current item can still be moved or deleted but not edited since the schema definition is not found */
  'inputs.array.error.can-delete-but-no-edit-description':
    "Encara pots moure o eliminar aquest element, però no es pot editar ja que la definició de l'esquema per al seu tipus no es troba enlloc.",
  /** Error label for toast when array could not resolve the initial value */
  'inputs.array.error.cannot-resolve-initial-value-title':
    'No es pot resoldre el valor inicial per al tipus: {{schemaTypeTitle}}: {{errorMessage}}.',
  /** Error label for toast when trying to upload one array item of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_one':
    "El següent element no es pot pujar perquè no hi ha cap conversió coneguda del tipus de contingut a element de l'array:",
  /** Error label for toast when trying to upload multiple array items of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_other':
    "Els següents elements no es poden pujar perquè no hi ha cap conversió coneguda dels tipus de contingut a element de l'array:",
  /** Error description for the array item tooltip that explains that the current type item is not valid for the list  */
  'inputs.array.error.current-schema-not-declare-description':
    "L'esquema actual no declara elements del tipus <code>{{typeName}}</code> com a vàlids per a aquesta llista. Això podria significar que el tipus ha estat eliminat com a element vàlid, o que algú altre l'ha afegit al seu propi esquema local que encara no està desplegat.",
  /** Error description to show how the item is being represented in the json format */
  'inputs.array.error.json-representation-description': "Representació JSON d'aquest element:",
  /** Error description for the array item tooltip that explains what the error means with more context */
  'inputs.array.error.type-is-incompatible-prompt':
    'Element del tipus <code>{{typeName}}</code> no vàlid per a aquesta llista',
  /** Error title for when an item type within an array input is incompatible, used in the tooltip */
  'inputs.array.error.type-is-incompatible-title': 'Per què està passant això?',
  /** Error label for unexpected errors in the Array Input */
  'inputs.array.error.unexpected-error': 'Error inesperat: {{error}}',
  /** Label for the array insert menu all items filter  */
  'inputs.array.insert-menu.filter.all-items': 'Tots',
  /** Label for when the array insert menu search shows no items */
  'inputs.array.insert-menu.search.no-results': "No s'han trobat elements",
  /** Placeholder for the array insert menu search field */
  'inputs.array.insert-menu.search.placeholder': 'Cerca',
  /** Tooltip for the array insert menu grid view toggle */
  'inputs.array.insert-menu.toggle-grid-view.tooltip': 'Commuta la vista de graella',
  /** Tooltip for the array insert menu list view toggle */
  'inputs.array.insert-menu.toggle-list-view.tooltip': 'Commuta la vista de llista',
  /** Label for when the array input doesn't have any items */
  'inputs.array.no-items-label': 'Cap element',
  /** Label for read only array fields */
  'inputs.array.read-only-label': 'Aquest camp és de només lectura',
  /** Label for when the array input is resolving the initial value for the item */
  'inputs.array.resolving-initial-value': 'Resolent el valor inicial…',
  /** Tooltip content when boolean input is disabled */
  'inputs.boolean.disabled': 'Desactivat',
  /** Warning label when selected datetime is in the past */
  'inputs.dateTime.past-date-warning': 'Selecciona una data en el futur.',
  /** Placeholder value for datetime input */
  'inputs.datetime.placeholder': 'p. ex. {{example}}',
  /** Acessibility label for button to open file options menu */
  'inputs.file.actions-menu.file-options.aria-label': "Obre el menú d'opcions de fitxer",
  /** Browse */
  'inputs.file.browse-button.text': 'Selecciona',
  /** Select file */
  'inputs.file.dialog.title': 'Seleccioneu fitxer',
  /** Unknown member kind: `{{kind}}` */
  'inputs.file.error.unknown-member-kind': 'Tipus de membre desconegut: {{kind}}',
  /** The value of this field is not a valid file. Resetting this field will let you choose a new file. */
  'inputs.file.invalid-file-warning.description':
    "El valor d'aquest camp no és un fitxer vàlid. Si restabliu aquest camp, podreu escollir un nou fitxer.",
  /** Reset value */
  'inputs.file.invalid-file-warning.reset-button.text': 'Restableix valor',
  /** Invalid file value */
  'inputs.file.invalid-file-warning.title': 'Valor de fitxer no vàlid',
  /** Select */
  'inputs.file.multi-browse-button.text': 'Seleccioneu',
  /** The upload could not be completed at this time. */
  'inputs.file.upload-failed.description': "La càrrega no s'ha pogut completar en aquest moment.",
  /** Upload failed */
  'inputs.file.upload-failed.title': 'Càrrega fallida',
  /** Private access policy badge label */
  'inputs.files.common.access-policy.private.label': 'Actiu privat',
  /** Private access policy badge tooltip */
  'inputs.files.common.access-policy.private.tooltip': 'Accés CDN limitat a URLs signades',
  /** Clear field */
  'inputs.files.common.actions-menu.clear-field.label': 'Neteja camp',
  /** Copy URL */
  'inputs.files.common.actions-menu.copy-url.label': 'Copia URL',
  /** Download */
  'inputs.files.common.actions-menu.download.label': 'Descarrega',
  /** The URL is copied to the clipboard */
  'inputs.files.common.actions-menu.notification.url-copied': "L'URL s'ha copiat al porta-retalls",
  /** Open in source */
  'inputs.files.common.actions-menu.open-in-source.label': 'Obre a {{sourceName}}',
  /** Replace */
  'inputs.files.common.actions-menu.replace.label': 'Reemplaça',
  /** Upload */
  'inputs.files.common.actions-menu.upload.label': 'Puja',
  /** Drop to upload */
  'inputs.files.common.drop-message.drop-to-upload': 'Deixeu caure per pujar',
  /** Drop to upload `{{count}}` file */
  'inputs.files.common.drop-message.drop-to-upload-multi_one':
    'Deixeu caure per pujar {{count}} fitxer',
  /** Drop to upload `{{count}}` files */
  'inputs.files.common.drop-message.drop-to-upload-multi_other':
    'Deixeu caure per pujar {{count}} fitxers',
  /** Can't upload this file here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_one':
    'No es pot pujar aquest fitxer aquí',
  /** Can't upload any of these files here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_other':
    "No es poden pujar cap d'aquests fitxers aquí",
  /** `{{count}}` file can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_one':
    '{{count}} fitxer no es pot pujar aquí',
  /** `{{count}}` files can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_other':
    '{{count}} fitxers no es poden pujar aquí',
  /** Cannot upload `{{count}}` files */
  'inputs.files.common.placeholder.cannot-upload-some-files_one': 'No es pot pujar fitxer',
  'inputs.files.common.placeholder.cannot-upload-some-files_other':
    'No es poden pujar {{count}} fitxers',
  /** Drag or paste type here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_file':
    'Arrossegueu o enganxeu fitxer aquí',
  /** Drag or paste image here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_image':
    'Arrossegueu o enganxeu imatge aquí',
  /** Drop to upload file */
  'inputs.files.common.placeholder.drop-to-upload_file': "Deixa caure per pujar l'arxiu",
  /** Drop to upload image */
  'inputs.files.common.placeholder.drop-to-upload_image': 'Deixa caure per pujar la imatge',
  /** Read only */
  'inputs.files.common.placeholder.read-only': 'Només lectura',
  /** Select asset source destination for files to upload */
  'inputs.files.common.placeholder.select-asset-source-upload-destination': 'Puja arxius a:',
  /** Can't upload files here */
  'inputs.files.common.placeholder.upload-not-supported': 'No es poden pujar arxius aquí',
  /** Clear upload */
  'inputs.files.common.stale-upload-warning.clear': 'Neteja la pujada',
  /** An upload has made no progress for at least `{{staleThresholdMinutes}}` minutes and likely got interrupted. You can safely clear the incomplete upload and try uploading again. */
  'inputs.files.common.stale-upload-warning.description':
    "Una pujada no ha progressat durant almenys {{staleThresholdMinutes}} minuts i probablement s'ha interromput. Pots netejar la pujada incompleta i intentar pujar de nou sense problemes.",
  /** Incomplete upload */
  'inputs.files.common.stale-upload-warning.title': 'Pujada incompleta',
  /** Tooltip text for action to crop image */
  'inputs.image.actions-menu.crop-image-tooltip': 'Retalla la imatge',
  /** Accessibility label for button to open image edit dialog */
  'inputs.image.actions-menu.edit-details.aria-label': "Obre el diàleg d'edició de la imatge",
  /** Accessibility label for button to open image options menu */
  'inputs.image.actions-menu.options.aria-label': "Obre el menú d'opcions de la imatge",
  /** Select */
  'inputs.image.browse-menu.text': 'Selecciona',
  /** Cannot upload this file here */
  'inputs.image.drag-overlay.cannot-upload-here': 'No es pot pujar aquest arxiu aquí',
  /** Drop image to upload */
  'inputs.image.drag-overlay.drop-to-upload-image': 'Deixa caure la imatge per pujar-la',
  /** This field is read only */
  'inputs.image.drag-overlay.this-field-is-read-only': 'Aquest camp és de només lectura',
  /** Image could not be loaded due to possible access restrictions */
  'inputs.image.error.possible-access-restriction':
    "No s'ha pogut carregar la imatge. Això pot ser degut a restriccions d'accés.",
  /** Unknown member kind: `{{kind}}` */
  'inputs.image.error.unknown-member-kind': 'Tipus de membre desconegut: {{kind}}',
  /** Edit hotspot and crop */
  'inputs.image.hotspot-dialog.title': 'Edita el punt calent i el retall',
  /** The value of this field is not a valid image. Resetting this field will let you choose a new image. */
  'inputs.image.invalid-image-warning.description':
    "El valor d'aquest camp no és una imatge vàlida. Si restableixes aquest camp, podràs triar una nova imatge.",
  /** Reset value */
  'inputs.image.invalid-image-warning.reset-button.text': 'Restableix el valor',
  /** Invalid image value */
  'inputs.image.invalid-image-warning.title': 'Valor de la imatge invàlid',
  /** Preview of uploaded image */
  'inputs.image.preview-uploaded-image': 'Previsualització de la imatge pujada',
  /** The upload could not be completed at this time. */
  'inputs.image.upload-error.description': "La pujada no s'ha pogut completar en aquest moment.",
  /** Upload failed */
  'inputs.image.upload-error.title': 'Pujada fallida',
  /** Adjust the rectangle to crop image. Adjust the circle to specify the area that should always be visible. */
  'inputs.imagetool.description':
    "Ajusta el rectangle per retallar la imatge. Ajusta el cercle per especificar l'àrea que sempre hauria de ser visible.",
  /** Error: `{{errorMessage}}` */
  'inputs.imagetool.load-error': 'Error: {{errorMessage}}',
  /** Hotspot & Crop */
  'inputs.imagetool.title': 'Hotspot & Crop',
  /** Warnings displayed to developers when using the crop/hotspot tool on vector images, notifying them that crops/hotspot are not respected when serving the image in vector format. For the crop/hotspot to apply, images must be served in a raster format such as JPG or PNG, by appending eg `fm=jpg` to the image url, or calling `format('jpg')` if using `@sanity/image-url` */
  'inputs.imagetool.vector-warning.developer-info':
    "La cadena d'actius no admet hotspot i retall per a formats vectorials. Per habilitar hotspot & crop, exporta aquesta imatge a qualsevol dels formats raster compatibles. Per exemple: <code>fm=jpg</code> a la <ImageUrlDocumentationLink>URL de la imatge</ImageUrlDocumentationLink> o truca <code>.format('png')</code> amb <ImageUrlPackageDocumentationLink>@sanity/image-url</ImageUrlPackageDocumentationLink>.",
  /** See developer info */
  'inputs.imagetool.vector-warning.expand-developer-info': 'Veure informació per a desenvolupadors',
  /** Gotcha: Serving vector images with hotspot and crop from the Sanity Image API */
  'inputs.imagetool.vector-warning.title':
    "Advertència: És possible que no s'apliqui el hotspot i el retall a aquesta imatge on es presenta.",
  /** Convert to `{{targetType}}` */
  'inputs.invalid-value.convert-button.text': 'Converteix a {{targetType}}',
  /** The current value (<code>`{{actualType}}`</code>) */
  'inputs.invalid-value.current-type': 'El valor actual (<code>{{actualType}}</code>)',
  /** The property value is stored as a value type that does not match the expected type. */
  'inputs.invalid-value.description':
    'El valor de la propietat està emmagatzemat com un tipus de valor que no coincideix amb el tipus esperat.',
  /** The value of this property must be of type <code>`{{validType}}`</code> according to the schema. */
  'inputs.invalid-value.details.description':
    "El valor d'aquesta propietat ha de ser del tipus <code>{{validType}}</code> segons l'esquema.",
  /** Only the following types are valid here according to schema: */
  'inputs.invalid-value.details.multi-type-description':
    "Només els següents tipus són vàlids aquí segons l'esquema:",
  /** Mismatching value types typically occur when the schema has recently been changed. */
  'inputs.invalid-value.details.possible-reason':
    "Els tipus de valor no coincidents solen ocórrer quan l'esquema ha estat recentment canviat.",
  /** Developer info */
  'inputs.invalid-value.details.title': 'Informació per a desenvolupadors',
  /** -- Invalid Value Input -- */
  /** Reset value */
  'inputs.invalid-value.reset-button.text': 'Restableix valor',
  /** Invalid property value */
  'inputs.invalid-value.title': 'Valor de propietat invàlid',
  /** Title for the "All fields" field group */
  'inputs.object.field-group-tabs.all-fields-title': 'Tots els camps',
  /** Aria label for the "Field groups" select control on smaller screens */
  'inputs.object.field-group-tabs.aria-label': 'Grups de camps',
  /** Text shown in field group select for a group with error validation */
  'inputs.object.field-group-tabs.validation-error': 'error',
  /** Text shown in field group select for a group with info validation */
  'inputs.object.field-group-tabs.validation-info': 'informació',
  /** Text shown in field group select for a group with warning validation */
  'inputs.object.field-group-tabs.validation-warning': 'advertència',
  /** Read-only field description */
  'inputs.object.unknown-fields.read-only.description':
    "Aquest camp és <strong>només de lectura</strong> segons l'esquema del document i no es pot desactivar. Si vols poder desactivar això a l'Estudi, assegura't de treure el camp <code>readOnly</code> del tipus que l'envolta a l'esquema.",
  /** Remove field */
  'inputs.object.unknown-fields.remove-field-button.text': 'Elimina camp',
  /** Encountered `{{count}}` fields that are not defined in the schema. */
  'inputs.object.unknown-fields.warning.description_one':
    "S'ha trobat un camp que no està definit a l'esquema.",
  'inputs.object.unknown-fields.warning.description_other':
    "S'han trobat {{count}} camps que no estan definits a l'esquema.",
  /** Detailed description of unknown field warning */
  'inputs.object.unknown-fields.warning.details.description_one':
    "Aquest camp no està definit a l'esquema, la qual cosa podria significar que la definició del camp ha estat eliminada o que algú altre l'ha afegit al seu propi projecte local i encara no ha desplegat els seus canvis.",
  'inputs.object.unknown-fields.warning.details.description_other':
    "Aquests camps no estan definits a l'esquema del document, la qual cosa podria significar que les definicions dels camps han estat eliminades o que algú altre els ha afegit al seu propi projecte local i encara no ha desplegat els seus canvis.",
  /** Developer info */
  'inputs.object.unknown-fields.warning.details.title': 'Informació per a desenvolupadors',
  /** Unknown field found */
  'inputs.object.unknown-fields.warning.title_one': "S'ha trobat un camp desconegut",
  'inputs.object.unknown-fields.warning.title_other': "S'han trobat camps desconeguts",
  /** Collapse the editor to save screen space  */
  'inputs.portable-text.action.collapse-editor': "Col·lapsa l'editor",
  /** Aria label for action to edit an existing annotation */
  'inputs.portable-text.action.edit-annotation-aria-label': "Edita l'annotació",
  /** Expand the editor to give more editing space */
  'inputs.portable-text.action.expand-editor': "Expandeix l'editor",
  /** Label label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block': 'Insereix {{typeName}}',
  /** Accessibility label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block-aria-label': 'Insereix {{typeName}} (bloc)',
  /** Label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object': 'Insereix {{typeName}}',
  /** Accessibility label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object-aria-label': 'Insereix {{typeName}} (en línia)',
  /** Aria label for action to remove an annotation */
  'inputs.portable-text.action.remove-annotation-aria-label': "Elimina l'annotació",
  /** Label for activate on focus with context of click and not focused */
  'inputs.portable-text.activate-on-focus-message_click': 'Fes clic per activar',
  /** Label for activate on focus with context of click and focused */
  'inputs.portable-text.activate-on-focus-message_click-focused':
    "Fes clic o prem l'espai per activar",
  /** Label for activate on focus with context of tap and not focused */
  'inputs.portable-text.activate-on-focus-message_tap': 'Toca per activar',
  /** Aria label for the annotation object */
  'inputs.portable-text.annotation-aria-label': "Objecte d'annotació",
  /** Title for dialog that allows editing an annotation */
  'inputs.portable-text.annotation-editor.title': 'Edita {{schemaType}}',
  /** Title of the default "link" annotation */
  'inputs.portable-text.annotation.link': 'Enllaç',
  /** Aria label for the block object */
  'inputs.portable-text.block.aria-label': 'Objecte de bloc',
  /** Label for action to edit a block item, in the case where it is editable */
  'inputs.portable-text.block.edit': 'Edita',
  /** Accessibility label for the button that opens the actions menu on blocks */
  'inputs.portable-text.block.open-menu-aria-label': 'Obre el menú',
  /** Label for action to open a reference, in the case of block-level reference types */
  'inputs.portable-text.block.open-reference': 'Obre la referència',
  /** Label for action to remove a block item */
  'inputs.portable-text.block.remove': 'Elimina',
  /** Label for action to view a block item, in the case where it is read-only and thus cannot be edited */
  'inputs.portable-text.block.view': 'Visualitza',
  /** Title of the "code" decorator */
  'inputs.portable-text.decorator.code': 'Codi',
  /** Title of the "em" (emphasis) decorator */
  'inputs.portable-text.decorator.emphasis': 'Cursiva',
  /** Title of the "strike-through" decorator */
  'inputs.portable-text.decorator.strike-through': 'Ratllat',
  /** Title of the "strong" decorator */
  'inputs.portable-text.decorator.strong': 'Negreta',
  /** Title of the "underline" decorator */
  'inputs.portable-text.decorator.underline': 'Subratllat',
  /** Placeholder text for when the editor is empty */
  'inputs.portable-text.empty-placeholder': 'Buit',
  /** Aria label for the block object */
  'inputs.portable-text.inline-block.aria-label': 'Objecte en línia',
  /** Label for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit': "Edita l'objecte",
  /** Aria label for icon for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit-aria-label': "Edita l'objecte",
  /** Label for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove': "Elimina l'objecte",
  /** Aria label for icon for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove-aria-label': "Elimina l'objecte",
  /** Disclaimer text shown on invalid Portable Text value, when an action is available to unblock the user, but it is not guaranteed to be safe */
  'inputs.portable-text.invalid-value.action-disclaimer':
    "NOTA: Generalment és segur realitzar l'acció anterior, però si tens dubtes, posa't en contacte amb els responsables de configurar el teu estudi.",
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.action': "Elimina l'objecte",
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.description':
    "El fill amb clau {{childKey}} del bloc amb clau <code>{{key}}</code> és de tipus <code>{{childType}}</code>, el qual no està permès per la definició de l'esquema.",
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.action': 'Elimina el bloc',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.description':
    "El bloc amb clau <code>{{key}}</code> és de tipus <code>{{typeName}}</code>, el qual no està permès per l'esquema.",
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.action': 'Insereix un fragment de text buit',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.description':
    'El bloc de text amb clau <code>{{key}}</code> no té fragments de text.',
  /** Label for the button to ignore invalid values in the Portable Text editor */
  'inputs.portable-text.invalid-value.ignore-button.text': 'Ignora',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.action':
    'Utilitza el tipus <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.description':
    "El bloc amb clau <code>{{key}}</code> té un nom de tipus invàlid. Segons l'esquema, hauria de ser <code>{{expectedTypeName}}</code>.",
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.action': 'Estableix un valor de text buit',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.description':
    'El fragment amb clau {{childKey}} del bloc amb clau <code>{{key}}</code> té una propietat <code>text</code> absent o invàlida.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.action':
    'Utilitza el tipus <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.description':
    "El bloc amb clau <code>{{key}}</code> no té un nom de tipus. Segons l'esquema, hauria de ser <code>{{expectedTypeName}}</code>.",
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.action': 'Assigna una clau aleatòria',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.description':
    "El fill a l'índex <code>{{index}}</code> del bloc amb clau <code>{{key}}</code> no té la propietat <code>_key</code>.",
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.action': "Elimina l'objecte",
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.description':
    'El fill amb clau {{childKey}} del bloc amb clau <code>{{key}}</code> no té la propietat <code>_type</code>.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.action': 'Assigna una clau aleatòria',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.description':
    "El bloc a l'índex <code>{{index}}</code> no té la propietat <code>_key</code> requerida.",
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.action': 'Elimina el bloc',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.description':
    'El bloc de text amb la clau <code>{{key}}</code> té una propietat `children` invàlida o absent.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.action': 'Afegeix la propietat',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.description':
    'El bloc de text amb la clau <code>{{key}}</code> té una propietat `markDefs` invàlida o absent.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.action': 'Elimina el bloc',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.description':
    'Al bloc amb la clau <code>{{key}}</code> li falta un nom de tipus.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.action': "Elimina l'element",
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.description':
    "El fill a l'índex <code>{{index}}</code> del bloc amb la clau <code>{{key}}</code> no és un objecte.",
  /** Action presented when the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.action': 'Desestableix el valor',
  /** Text explaining that the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.description':
    'El valor ha de ser un array de blocs de Portable Text, o indefinit.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.action': "Elimina l'element",
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.description':
    "L'element a <code>{{index}}</code> no és un objecte,.",
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.action': 'Elimina les marques no permeses',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.description':
    "El bloc de text amb la clau <code>{{key}}</code> conté marques <code>({{orphanedMarks, list}})</code> que no estan permeses per l'esquema.",
  /** Title for the alert indicating that the Portable Text field has an invalid value */
  'inputs.portable-text.invalid-value.title': 'Valor de Portable Text invàlid',
  /** Title of "bulleted" list type */
  'inputs.portable-text.list-type.bullet': 'Llista amb punts',
  /** Title of numbered list type */
  'inputs.portable-text.list-type.number': 'Llista numerada',
  /** Title of the "h1" block style */
  'inputs.portable-text.style.h1': 'Encapçalament 1',
  /** Title of the "h2" block style */
  'inputs.portable-text.style.h2': 'Encapçalament 2',
  /** Title of the "h3" block style */
  'inputs.portable-text.style.h3': 'Encapçalament 3',
  /** Title of the "h4" block style */
  'inputs.portable-text.style.h4': 'Encapçalament 4',
  /** Title of the "h5" block style */
  'inputs.portable-text.style.h5': 'Encapçalament 5',
  /** Title of the "h6" block style */
  'inputs.portable-text.style.h6': 'Encapçalament 6',
  /** Title shown when multiple blocks of varying styles is selected */
  'inputs.portable-text.style.multiple': 'Múltiples',
  /** Title of fallback when no style is given for a block */
  'inputs.portable-text.style.none': 'Sense estil',
  /** Title of the "normal" block style */
  'inputs.portable-text.style.normal': 'Normal',
  /** Title of the "quote" block style */
  'inputs.portable-text.style.quote': 'Cita',
  /** Label for action to clear the current value of the reference field */
  'inputs.reference.action.clear': 'Esborrar',
  /** Label for action to copy the current item (used within arrays) */
  'inputs.reference.action.copy': 'Copiar',
  /** Label for action to create a new document from the reference input */
  'inputs.reference.action.create-new-document': 'Crear',
  /** Label for action to create a new document from the reference input, when there are multiple templates or document types to choose from */
  'inputs.reference.action.create-new-document-select': 'Crear…',
  /** Label for action to duplicate the current item to a new item (used within arrays) */
  'inputs.reference.action.duplicate': 'Duplicar',
  /** Label for action that opens the referenced document in a new tab */
  'inputs.reference.action.open-in-new-tab': 'Obrir en una nova pestanya',
  /** Label for action to remove the reference from an array */
  'inputs.reference.action.remove': 'Eliminar',
  /** Label for action to replace the current value of the field */
  'inputs.reference.action.replace': 'Reemplaçar',
  /** Label for action to cancel a previously initiated replace action  */
  'inputs.reference.action.replace-cancel': 'Cancel·lar reemplaçament',
  /** The cross-dataset reference field currently has a reference, but the feature has been disabled since it was created. This explains what can/cannot be done in its current state. */
  'inputs.reference.cross-dataset.feature-disabled-actions':
    "Encara podeu esborrar la referència existent d'aquest camp, però no es pot canviar a un document diferent mentre la funció estigui desactivada.",
  /** A cross-dataset reference field exists but the feature has been disabled. A <DocumentationLink> component is available. */
  'inputs.reference.cross-dataset.feature-disabled-description':
    'Aquesta funció ha estat desactivada. Llegiu com activar-la a <DocumentationLink>la documentació</DocumentationLink>.',
  /** Title for a warning telling the user that the current project does not have the "cross dataset references" feature */
  'inputs.reference.cross-dataset.feature-unavailable-title':
    'Funció no disponible: Referència entre conjunts de dades',
  /** The cross-dataset reference points to a document with an invalid type  */
  'inputs.reference.cross-dataset.invalid-type':
    "El document referenciat és d'un tipus no vàlid ({{typeName}}) <JsonValue/>",
  /** The referenced document will open in a new tab (due to external studio) */
  'inputs.reference.document-opens-in-new-tab': "Aquest document s'obre en una nova pestanya",
  /** Error title for when the document is unavailable (for any possible reason) */
  'inputs.reference.error.document-unavailable-title': 'Document no disponible',
  /** Error title for when the referenced document failed to be loaded */
  'inputs.reference.error.failed-to-load-document-title':
    "No s'ha pogut carregar el document referenciat",
  /** Error title for when the reference search returned a document that is not an allowed type for the field */
  'inputs.reference.error.invalid-search-result-type-title':
    'La cerca ha retornat un tipus que no és vàlid per a aquesta referència: "{{returnedType}}"',
  /** Error description for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-description':
    "El document referenciat (<code>{{documentId}}</code>) és del tipus <code>{{actualType}}</code>. Segons l'esquema, els documents referenciats només poden ser del tipus <AllowedTypes/>.",
  /** Error title for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-title': "Document d'un tipus no vàlid",
  /** Error description for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-description':
    "El document referenciat no s'ha pogut accedir a causa de permisos insuficients",
  /** Error title for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-title': 'Permisos insuficients',
  /** Error description for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-description':
    'El document referenciat no existeix (ID: <code>{{documentId}}</code>). Podeu eliminar la referència o reemplaçar-la amb un altre document.',
  /** Error title for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-title': 'No trobat',
  /** Label for button that clears the reference when it points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document.clear-button-label': 'Esborra',
  /** Error title for when the search for a reference failed. Note that the message sent by the backend may not be localized. */
  'inputs.reference.error.search-failed-title': 'La cerca de referència ha fallat',
  /** Label for when the GDR points to an invalid type  */
  'inputs.reference.global.invalid-type':
    "El document referenciat és d'un tipus invàlid ({{typeName}})",
  /** Alternative text for the image shown in cross-dataset reference input */
  'inputs.reference.image-preview-alt-text':
    'Previsualització de la imatge del document referenciat',
  /** Description for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-description':
    "<strong>{{referencedDocument}}</strong> està publicat i aquesta referència ara s'hauria de finalitzar.",
  /** Title for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-title': 'Finalitza la referència',
  /** Description for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-description':
    "<strong>{{referencedDocument}}</strong> està publicat i aquesta referència ara s'hauria de convertir en una referència forta.",
  /** Title for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-title': 'Converteix en referència forta',
  /** Label for button that triggers the action that strengthen a reference */
  'inputs.reference.incomplete-reference.strengthen-button-label': 'Converteix en referència forta',
  /** Label for button that triggers a retry attempt for reference metadata  */
  'inputs.reference.metadata-error.retry-button-label': 'Reintenta',
  /** Title for alert shown when reference metadata fails to be loaded */
  'inputs.reference.metadata-error.title': "No s'ha pogut carregar la metadada de la referència",
  /** Message shown when no documents were found that matched the given search string */
  'inputs.reference.no-results-for-query':
    'No hi ha resultats per a <strong>“{{searchTerm}}”</strong>',
  /** Text for tooltip showing when a document was edited, using relative time (eg "how long ago was it edited?") */
  'inputs.reference.preview.edited-at-time': 'Editat <RelativeTime/>',
  /** Accessibility label for icon indicating that document does _not_ have any unpublished changes */
  'inputs.reference.preview.has-no-unpublished-changes-aria-label': 'Sense edicions no publicades',
  /** Accessibility label for icon indicating that document has unpublished changes */
  'inputs.reference.preview.has-unpublished-changes-aria-label': 'Editat',
  /** Accessibility label for icon indicating that document does _not_ have a published version */
  'inputs.reference.preview.is-not-published-aria-label': 'No publicat',
  /** Accessibility label for icon indicating that document has a published version */
  'inputs.reference.preview.is-published-aria-label': 'Publicat',
  /** Text for tooltip indicating that a document has no unpublished edits */
  'inputs.reference.preview.no-unpublished-edits': 'Sense edicions no publicades',
  /** Text for tooltip indicating that a document has not yet been published */
  'inputs.reference.preview.not-published': 'No publicat',
  /** Text for tooltip showing when a document was published, using relative time (eg "how long ago was it published?") */
  'inputs.reference.preview.published-at-time': 'Publicat <RelativeTime/>',
  /** The referenced document no longer exist and might have been deleted (for weak references) */
  'inputs.reference.referenced-document-does-not-exist':
    'El document referenciat ja no existeix i podria haver estat eliminat (ID del document: <code>{{documentId}}</code>).',
  /** The referenced document could not be displayed to the user because of insufficient permissions */
  'inputs.reference.referenced-document-insufficient-permissions':
    "No s'ha pogut accedir al document referenciat a causa de permisos insuficients",
  /** Label for when the reference input is resolving the initial value for an item */
  'inputs.reference.resolving-initial-value': 'Resolent el valor inicial…',
  /** Placeholder shown in a reference input with no current value */
  'inputs.reference.search-placeholder': 'Escriu per cercar',
  /** Explanation of the consequences of leaving the reference as strong instead of weak */
  'inputs.reference.strength-mismatch.is-strong-consquences':
    'No serà possible eliminar el document de referència sense abans eliminar aquesta referència o convertir-la en feble.',
  /** Description for alert shown when a reference is supposed to be weak, but the actual value is strong */
  'inputs.reference.strength-mismatch.is-strong-description':
    "Aquesta referència és <em>forta</em>, però segons l'esquema actual hauria de ser <em>dèbil</em>.",
  /** Explanation of the consequences of leaving the reference as weak instead of strong */
  'inputs.reference.strength-mismatch.is-weak-consquences':
    "Això fa possible esborrar el document referenciat sense haver d'eliminar primer aquesta referència, deixant aquest camp referenciant un document inexistent.",
  /** Description for alert shown when a reference is supposed to be strong, but the actual value is weak */
  'inputs.reference.strength-mismatch.is-weak-description':
    "Aquesta referència és <em>dèbil</em>, però segons l'esquema actual hauria de ser <em>forta</em>.",
  /** Label for button that triggers the action that strengthens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.strengthen-button-label': 'Convertir a referència forta',
  /** Title for alert shown when a reference is supposed to be weak/strong, but the actual value is the opposite of what it is supposed to be */
  'inputs.reference.strength-mismatch.title': 'Desajust de la fortalesa de la referència',
  /** Label for button that triggers the action that weakens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.weaken-button-label': 'Convertir a referència dèbil',
  /** Label for action to clear the current value of the select field */
  'inputs.select.action.clear': 'Neteja',
  /** Action message for generating the slug */
  'inputs.slug.action.generate': 'Generar',
  /** Loading message for when the input is actively generating a slug */
  'inputs.slug.action.generating': 'Generant…',
  /** Error message for when the source to generate a slug from is missing */
  'inputs.slug.error.missing-source':
    "Falta la font. Comprova la font en el tipus {{schemaType}} de l'esquema",
  /** Placeholder for an empty tag input */
  'inputs.tags.placeholder': "Introdueix l'etiqueta i premeu ENTER…",
  /** Placeholder for an empty tag input on touch devices */
  'inputs.tags.placeholder_touch': "Introdueix l'etiqueta…",
  /** Convert to `{{targetType}}` */
  'inputs.untyped-value.convert-button.text': 'Convertir a {{targetType}}',
  /** Encountered an object value without a <code>_type</code> property. */
  'inputs.untyped-value.description':
    "S'ha trobat un valor d'objecte sense una propietat <code>_type</code>.",
  /** Either remove the <code>name</code> property of the object declaration, or set <code>_type</code> property on items. */
  'inputs.untyped-value.details.description':
    "Elimina la propietat <code>name</code> de la declaració de l'objecte, o estableix la propietat <code>_type</code> en els elements.",
  /** Current value (<code>object</code>): */
  'inputs.untyped-value.details.json-dump-prefix': 'Valor actual (<code>object</code>):',
  /** The following types are valid here according to schema: */
  'inputs.untyped-value.details.multi-type-description':
    "Els següents tipus són vàlids aquí segons l'esquema:",
  /** Developer info */
  'inputs.untyped-value.details.title': 'Informació per a desenvolupadors',
  /** Property value missing <code>_type</code> */
  'inputs.untyped-value.title': 'Valor de la propietat sense <code>_type</code>',
  /** Unset value */
  'inputs.untyped-value.unset-item-button.text': 'Desestablir valor',

  /** The fallback explanation if no context is provided */
  'insufficient-permissions-message.not-authorized-explanation':
    'No tens permís per accedir a aquesta funcionalitat.',
  /** The explanation when unable to create any document at all */
  'insufficient-permissions-message.not-authorized-explanation_create-any-document':
    'No tens permís per crear un document.',
  /** The explanation when unable to create a particular document */
  'insufficient-permissions-message.not-authorized-explanation_create-document':
    'No tens permís per crear aquest document.',
  /** The explanation when unable to create a particular type of document */
  'insufficient-permissions-message.not-authorized-explanation_create-document-type':
    'No tens permís per crear aquest tipus de document.',
  /** The explanation when unable to create a new reference in a document */
  'insufficient-permissions-message.not-authorized-explanation_create-new-reference':
    'No tens permís per crear una nova referència.',
  /** The explanation when unable to delete a particular document */
  'insufficient-permissions-message.not-authorized-explanation_delete-document':
    'No tens permís per esborrar aquest document.',
  /** The explanation when unable to delete a schedule on scheduled publishing */
  'insufficient-permissions-message.not-authorized-explanation_delete-schedules':
    'No teniu permís per eliminar horaris.',
  /** The explanation when unable to discard changes in a particular document */
  'insufficient-permissions-message.not-authorized-explanation_discard-changes':
    'No teniu permís per descartar canvis en aquest document.',
  /** The explanation when unable to duplicate a particular document */
  'insufficient-permissions-message.not-authorized-explanation_duplicate-document':
    'No teniu permís per duplicar aquest document.',
  /** The explanation when unable to edit a schedule on scheduled publishing */
  'insufficient-permissions-message.not-authorized-explanation_edit-schedules':
    'No teniu permís per editar horaris.',
  /** The explanation when unable to execute a schedule on scheduled publishing */
  'insufficient-permissions-message.not-authorized-explanation_execute-schedules':
    'No teniu permís per executar horaris.',
  /** The explanation when unable to publish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_publish-document':
    'No teniu permís per publicar aquest document.',
  /** The explanation when unable to unpublish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_unpublish-document':
    'No teniu permís per despublicar aquest document.',
  /** Appears after the not-authorized message. Lists the current roles. */
  'insufficient-permissions-message.roles': 'Els vostres rols: <Roles/>',
  /** The title for the insufficient permissions message component */
  'insufficient-permissions-message.title': 'Permisos insuficients',

  /** Unexpected error: `{{error}}` */
  'member-field-error.unexpected-error': 'Error inesperat: {{error}}',

  /** Text shown in warning when browser is using HTTP1 to communicate with the Sanity API */
  'network-check.slow-protocol-warning.description':
    'El vostre navegador està utilitzant un protocol HTTP antiquat per comunicar-se amb Sanity. Això pot resultar en un rendiment substancialment degradat.',
  /** Text for link that takes the user to the Sanity documentation to learn more about the HTTP1 issue */
  'network-check.slow-protocol-warning.learn-more-button.text': 'Apreneu més',
  /** Text for link that takes the user to the Sanity documentation to learn more about the HTTP1 issue */
  'network-check.slow-protocol-warning.snooze-button.text': 'No mostrar de nou en aquesta sessió',
  /** Title text for the warning dialog when browser is using HTTP1 to communicate with the Sanity API */
  'network-check.slow-protocol-warning.title': 'Teniu els frens posats',

  /** Button label for "Create new document" button */
  'new-document.button': 'Crear',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are templates/types available for creation
   */
  'new-document.create-new-document-label': 'Document nou…',
  /** Placeholder for the "filter" input within the new document menu */
  'new-document.filter-placeholder': 'Cerca tipus de documents',
  /** Loading indicator text within the new document menu */
  'new-document.loading': 'Carregant…',
  /** Accessibility label for the list displaying options in the new document menu */
  'new-document.new-document-aria-label': 'Document nou',
  /** Message for when there are no document type options in the new document menu */
  'new-document.no-document-types-found': "No s'han trobat tipus de documents",
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are no templates/types to create from
   */
  'new-document.no-document-types-label': 'Cap tipus de document',
  /** Message for when no results are found for a specific search query in the new document menu */
  'new-document.no-results': 'Cap resultat per a <strong>{{searchQuery}}</strong>',
  /** Aria label for the button that opens the "Create new document" popover/dialog */
  'new-document.open-dialog-aria-label': 'Crear document nou',
  /** Title for "Create new document" dialog */
  'new-document.title': 'Crear document nou',

  /** @deprecated Label for button that will make the browser reload when users' studio version is out-of-date */
  'package-version.new-package-available.reload-button': 'Prem per recarregar',
  /** @deprecated Title of the alert for studio users when packages in their studio are out-of-date */
  'package-version.new-package-available.title': 'Sanity Studio està llest per actualitzar-se!',

  /** Label for action to invite members to the current studio project */
  'presence.action.manage-members': 'Convidar membres',
  /** Accessibility label for presence menu button */
  'presence.aria-label': 'Presència global',
  /** Message description for when no one else is currently present */
  'presence.no-one-else-description': 'Convida gent al projecte per veure el seu estat en línia.',
  /** Message title for when no one else is currently present */
  'presence.no-one-else-title': 'No hi ha ningú més aquí',
  /** Message for when a user is not in a document (displayed in the global presence menu) */
  'presence.not-in-a-document': 'No en un document',
  /** Tooltip content text for presence menu button */
  'presence.tooltip-content': 'Qui és aquí',

  /** Fallback title shown when a preview does not provide a title */
  'preview.default.title-fallback': 'Sense títol',
  /** Fallback preview value for types that have "no value" (eg null, undefined) */
  'preview.fallback.no-value': '(sense valor)',
  /** Alternative text for image being shown while image is being uploaded, in previews */
  'preview.image.file-is-being-uploaded.alt-text': "La imatge que s'està pujant",

  /* Relative time, just now */
  'relative-time.just-now': 'ara mateix',

  /** Action message to add document to new release */
  'release.action.add-to-new-release': 'Afegir a la versió',
  /** Action message to add document to release */
  'release.action.add-to-release': 'Afegir a {{title}}',
  /** Tooltip message for document that is already added to release */
  'release.action.already-exists-in-release': 'El document ja existeix en la versió',
  /** Action message for when document is already in release  */
  'release.action.already-in-release': 'Ja en la versió {{title}}',
  /** Action message for when you click to view all versions you can copy the current document to */
  'release.action.copy-to': 'Copiar la versió a',
  /** Action message for creating new releases */
  'release.action.create-new': 'Nova versió',
  /** Description for toast when version creation failed */
  'release.action.create-version.failure': 'Ha fallat la creació de la versió',
  /** Action message for deleting a scheduled publish */
  'release.action.delete-schedule': 'Elimina el calendari',
  /** Action message for when document is already in release  */
  'release.action.discard-version': 'Descartar versió',
  /** Description for toast when version discarding failed */
  'release.action.discard-version.failure': "No s'ha pogut descartar la versió",
  /** Action message for editing the schedule of a scheduled publish */
  'release.action.edit-schedule': 'Edita el calendari',
  /** Action message for when a new release is created off an existing version, draft or published document */
  'release.action.new-release': 'Nova Versió',
  'release.action.new-release.limit-reached_other':
    'Aquest espai de treball està limitat a {{count}} llançaments',
  /** Tooltip message for not having permissions for creating new releases */
  'release.action.permission.error': 'No tens permís per realitzar aquesta acció',
  /** Action message for running a scheduled draft immediately */
  'release.action.publish-now': 'Publica ara',
  /** Error message description for when a version is reverted from being unpublished */
  'release.action.revert-unpublish-version.failure.description':
    'Torneu-ho a intentar o comproveu la vostra connexió. El document encara es mantindrà sense publicar en el moment del llançament.',
  /** Error message title for when a version is reverted from being unpublished */
  'release.action.revert-unpublish-version.failure.title':
    "No s'ha pogut revertir l'opció de despublicar en el llançament.",
  /** Action message description for when a version is reverted from being unpublished */
  'release.action.revert-unpublish-version.success.description': 'Ara podeu editar aquesta versió.',
  /** Action message title for when a version is reverted from being unpublished */
  'release.action.revert-unpublish-version.success.title':
    "S'ha revertit amb èxit l'opció de despublicar en el llançament.",
  /** Action message for scheduling a paused draft */
  'release.action.schedule-publish': 'Programa la publicació',
  /** Error message for when a version is set to be unpublished */
  'release.action.unpublish-version.failure':
    "No s'ha pogut establir la versió per ser despublicada en la versió",
  /** Action message for when a version is set to be unpublished successfully */
  'release.action.unpublish-version.success':
    "S'ha establert correctament <strong>{{title}}</strong> per ser despublicada en la versió",
  /** Action message for when the view release is pressed */
  'release.action.view-release': 'Veure la versió',
  /** Action message for when the view scheduled drafts is pressed */
  'release.action.view-scheduled-drafts': 'Veure esborranys programats',
  /** Label for banner when release is scheduled */
  'release.banner.scheduled-for-publishing-on': 'Programat per ser publicat el {{date}}',
  'release.chip.button.other-versions_one': '+{{count}} versió',
  'release.chip.button.other-versions_other': '+{{count}} versions',
  /** Label for Draft chip in document header */
  'release.chip.draft': 'Esborrany',
  /** Label for Draft chip in global header */
  'release.chip.global.drafts': 'Esborranys',
  /** Label for Published chip in document header */
  'release.chip.published': 'Publicat',
  /** Label for tooltip in chip when document is in an archived release */
  'release.chip.tooltip.archived': 'Aquesta versió està arxivada i no es pot editar.',
  /** Label for tooltip in chip with the created date */
  'release.chip.tooltip.created-date': 'Creada {{date}}',
  /** Label for tooltip in draft chip when it's a live edit document */
  'release.chip.tooltip.draft-disabled.live-edit':
    "Aquest document està en mode d'edició en viu, els esborranys estan desactivats",
  /** Label for tooltip in chip with the lasted edited date */
  'release.chip.tooltip.edited-date': 'Editada {{date}}',
  /** Label for tooltip in chip when document is intended for a future release that hasn't been scheduled */
  'release.chip.tooltip.intended-for-date': 'Destinada per a {{date}}',
  /** Label for tooltip in chip when there is no recent draft edits */
  'release.chip.tooltip.no-edits': 'Sense edicions',
  /** Label for tooltip in chip when document isn't published */
  'release.chip.tooltip.not-published': 'No publicat',
  'release.chip.tooltip.other-versions_one': 'Una versió addicional fora de les publicacions',
  'release.chip.tooltip.other-versions_other':
    '{{count}} versions addicionals fora de les publicacions',
  /** Label for tooltip in chip with the published date */
  'release.chip.tooltip.published-date': 'Publicada {{date}}',
  /** Label for tooltip in chip when document is in a release that has been scheduled */
  'release.chip.tooltip.scheduled-for-date': 'Programada per a {{date}}',
  /** Label for tooltip in scheduled chip without a known date */
  'release.chip.tooltip.unknown-date': 'Data desconeguda',
  /** Label for tooltip on deleted release */
  'release.deleted-tooltip': 'Aquesta versió ha estat eliminada',
  /** Title for copying version to a new release dialog */
  'release.dialog.copy-to-release.title': 'Copiar la versió a una nova versió',
  /** Title for action create a release */
  'release.dialog.create.confirm': 'Crear versió',
  /** Title for creating releases dialog */
  'release.dialog.create.title': 'Nova versió',
  /** Body text when deleting scheduled draft and draft is already up to date */
  'release.dialog.delete-schedule-draft.body-already-current':
    'Voleu eliminar aquest esborrany programat? El vostre esborrany ja està actualitzat.',
  /** Body text when deleting scheduled draft and changes will be saved to draft */
  'release.dialog.delete-schedule-draft.body-will-save-to-draft':
    "Voleu eliminar aquest esborrany programat? Els vostres canvis es desaran a l'esborrany.",
  /** Body text when deleting scheduled draft with checkbox shown for user choice */
  'release.dialog.delete-schedule-draft.body-with-choice':
    'Voleu eliminar aquest esborrany programat?',
  /** Confirm button text for deleting a scheduled draft */
  'release.dialog.delete-schedule-draft.confirm': 'Sí, elimina el calendari',
  /** Checkbox label for copying scheduled draft to draft before deletion */
  'release.dialog.delete-schedule-draft.copy-checkbox':
    "Mantingueu els meus canvis programats copiant-los a l'esborrany (recomanat)",
  /** Explanation text shown when scheduled draft has different changes than current draft */
  'release.dialog.delete-schedule-draft.different-changes-explanation':
    'El vostre esborrany programat té canvis diferents dels del vostre esborrany actual.',
  /** Header for the dialog confirming deletion of a scheduled draft */
  'release.dialog.delete-schedule-draft.header': "Elimina l'esborrany programat",
  /** Body text for change schedule dialog */
  'release.dialog.edit-schedule.body':
    'Selecciona una nova data i hora per a la publicació programada.',
  /** Confirm button text for change schedule dialog */
  'release.dialog.edit-schedule.confirm': 'Actualitza el calendari',
  /** Header for change schedule dialog */
  'release.dialog.edit-schedule.header': 'Canvia el calendari',
  /** Body text for the dialog confirming running a scheduled draft immediately */
  'release.dialog.publish-scheduled-draft.body':
    'Estàs segur que vols publicar aquest esborrany programat immediatament?',
  /** Confirm button text for running a scheduled draft immediately */
  'release.dialog.publish-scheduled-draft.confirm': 'Sí, executa ara',
  /** Header for the dialog confirming running a scheduled draft immediately */
  'release.dialog.publish-scheduled-draft.header': "Publica l'esborrany ara",
  /** Label for description in tooltip to explain release types */
  'release.dialog.tooltip.description':
    "El temps previst de llançament s'utilitza per crear millors previsualitzacions i indicacions sobre si els documents entren en conflicte.",
  /** Label for noting that a release time is not final */
  'release.dialog.tooltip.note': 'Sempre pots canviar-ho més tard.',
  /** Title for tooltip to explain release time */
  'release.dialog.tooltip.title': 'Temps aproximat de llançament',
  /** The placeholder text when the release doesn't have a description */
  'release.form.placeholder-describe-release': 'Descriu la versió…',
  /** Tooltip for button to hide release visibility */
  'release.layer.hide': 'Amagar versió',
  /** Label for the release menu */
  'release.menu.label': 'Menú de publicació',
  /** Menu item label for scheduled drafts */
  'release.menu.scheduled-drafts': 'Veure esborranys programats',
  /** Tooltip for the release menu */
  'release.menu.tooltip': 'Accions',
  /** Menu item label for viewing content releases */
  'release.menu.view-releases': 'Veure Publicacions de Contingut',
  /** Label for draft perspective in navbar */
  'release.navbar.drafts': 'Esborranys',
  /** Label for published releases in navbar */
  'release.navbar.published': 'Publicats',
  /** Tooltip for releases navigation in navbar */
  'release.navbar.tooltip': 'Versions',
  /** The placeholder text when the release doesn't have a title */
  'release.placeholder-untitled-release': 'Versió sense títol',
  /** Description for warning that the published schedule time is in the past */
  'release.schedule-dialog.publish-date-in-past-warning': 'Programa per a un temps i data futurs.',
  /** Label for date picker when scheduling a release */
  'release.schedule-dialog.select-publish-date-label': 'Publica el',
  /** The toast description that will be shown when the user has a release perspective which is now archived
   * @deprecated – no longer needed
   * */
  'release.toast.archived-release.description': 'Aquesta versió ha estat desancorada',
  /** The toast title that will be shown when the user has a release perspective which is now archived
   * @deprecated – no longer needed
   * */
  'release.toast.archived-release.title': "La versió '{{title}}' ha estat arxivada",
  /** The toast title that will be shown the creating a release fails */
  'release.toast.create-release-error.title': "No s'ha pogut crear la release",
  /** Error toast for deleting a scheduled draft */
  'release.toast.delete-schedule-draft.error':
    "No s'ha pogut eliminar el document d'esborrany programat <strong>{{title}}</strong>: {{error}}",
  /** Success toast for deleting a scheduled draft */
  'release.toast.delete-schedule-draft.success':
    "El document d'esborrany programat <strong>{{title}}</strong> ha estat eliminat.",
  /** The toast title that will be shown when the user has a release perspective which is now deleted
   * @deprecated – no longer needed
   * */
  'release.toast.not-found-release.title': "No s'ha trobat la release '{{title}}'",
  /** Error toast for pausing a scheduled draft */
  'release.toast.pause-scheduled-draft.error':
    "No s'ha pogut pausar el document programat <strong>{{title}}</strong>: {{error}}",
  /** Error toast for running a scheduled publish immediately */
  'release.toast.publish-scheduled-draft.error':
    "No s'ha pogut publicar el document d'esborrany programat <strong>{{title}}</strong>: {{error}}",
  /** Success toast for running a scheduled publish immediately */
  'release.toast.publish-scheduled-draft.success':
    "El document d'esborrany programat <strong>{{title}}</strong> ha estat publicat.",
  /** The toast description that will be shown when the user has a release perspective which is now published
   * @deprecated – no longer needed
   **/
  'release.toast.published-release.description': 'Aquesta release ha estat desancorada',
  /** The toast title that will be shown when the user has a release perspective which is now deleted
   * @deprecated – no longer needed
   **/
  'release.toast.published-release.title': "La release '{{title}}' ha estat publicada",
  /** Error toast for rescheduling a draft */
  'release.toast.reschedule-scheduled-draft.error':
    "No s'ha pogut reprogramar el document d'esborrany programat <strong>{{title}}</strong>: {{error}}",
  /** Success toast for rescheduling a draft */
  'release.toast.reschedule-scheduled-draft.success':
    "El document d'esborrany programat <strong>{{title}}</strong> ha estat reprogramat.",
  /** Error toast for scheduling a paused draft */
  'release.toast.schedule-publish.error': "No s'ha pogut programar l'esborrany: {{error}}",
  /** Success toast for scheduling a paused draft */
  'release.toast.schedule-publish.success': 'Esborrany programat amb èxit',
  /** The toast title that will be shown when the user has a scheduled draft perspective which is now published
   * @deprecated – no longer needed
   * */
  'release.toast.scheduled-draft-published.title': "L'esborrany programat ha estat publicat",
  /** Label for when a version of a document has already been added to the release */
  'release.tooltip.already-added': "Ja s'ha afegit una versió d'aquest document",
  /** Label for when a release is scheduled / scheduling and a user can't add a document version to it */
  'release.tooltip.locked':
    'Aquesta release ha estat programada. Desprograma-la per afegir més documents.',
  /** Label for the release type 'as soon as possible' */
  'release.type.asap': 'ASAP',
  /** Label for the release type 'at time', meaning it's a release with a scheduled date */
  'release.type.scheduled': 'A temps',
  /** Label for the release type 'undecided' */
  'release.type.undecided': 'Indecís',
  /** Tooltip for the dropdown to show all versions of document */
  'release.version-list.tooltip': 'Veure totes les versions del document',

  /** Button text for contacting support in the releases misconfiguration dialog */
  'releases.upsell.misconfiguration.contact-support': 'Contacteu amb el Suport',
  /** Header for the releases misconfiguration dialog */
  'releases.upsell.misconfiguration.header':
    'Problema de configuració de les publicacions de contingut',
  /** Message shown in the releases misconfiguration dialog */
  'releases.upsell.misconfiguration.message':
    'Les publicacions de contingut estan habilitades per al vostre projecte, però sembla que hi ha un problema de configuració amb els límits de les vostres publicacions. Si us plau, contacteu amb el suport per configurar correctament les vostres publicacions de contingut.',

  /** Confirm button text for the schedule publish dialog */
  'schedule-publish-dialog.confirm': 'Programa',
  /** Description for the schedule publish dialog */
  'schedule-publish-dialog.description': 'Selecciona quan aquest document hauria de ser publicat.',
  /** Header for the schedule publish dialog */
  'schedule-publish-dialog.header': "Programa l'esborrany per a la publicació",

  /** Title for a scheduled draft release */
  'scheduled-drafts.release.title': 'Publicació programada',

  /** Accessibility label to open search action when the search would go fullscreen (eg on narrower screens) */
  'search.action-open-aria-label': 'Obrir cerca',
  /** Action label for adding a search filter */
  'search.action.add-filter': 'Afegir filtre',
  /** Action label for clearing search filters */
  'search.action.clear-filters': 'Esborrar filtres',
  /** Label for action to clear recent searches */
  'search.action.clear-recent-searches': 'Esborrar cerques recents',
  /** Accessibility label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-aria-label': 'Esborrar filtres marcats',
  /** Label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-label': 'Esborrar',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to close the search */
  'search.action.close-search-aria-label': 'Tancar cerca',
  /** Accessibility label for filtering by document type */
  'search.action.filter-by-document-type-aria-label': 'Filtrar per tipus de document',
  /** Accessibility action label for removing an already applied search filter */
  'search.action.remove-filter-aria-label': 'Eliminar filtre',
  /**
   * Text displayed when either no document type(s) have been selected, or we need a fallback,
   * eg "Search for all types".
   */
  'search.action.search-all-types': 'Cercar tots els documents',
  /**
   * Text displayed when we are able to determine one or more document types that will be used for
   * searching, and can fit within the space assigned by the design.
   */
  'search.action.search-specific-types': 'Cercar {{types, list}}',
  /** Dialog title for action to select an asset of unknown type */
  'search.action.select-asset': 'Seleccionar actiu',
  /** Dialog title for action to select a file asset */
  'search.action.select-asset_file': 'Seleccionar fitxer',
  /** Dialog title for action to select an image asset */
  'search.action.select-asset_image': 'Seleccionar imatge',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-aria-label_hide': 'Amagar filtres',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-aria-label_show': 'Mostra els filtres',
  /** Label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-label_hide': 'Amaga els filtres',
  /** Label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-label_show': 'Mostra els filtres',
  /** Tooltip text for the global search button */
  'search.button.tooltip': 'Cerca',
  /**
   * A list of provided types (use `list` formatter preferably).
   */
  'search.document-type-list': '{{types, list}}',
  /**
   * In the context of a list of document types - no filtering selection has been done,
   * thus the default is "all types".
   */
  'search.document-type-list-all-types': 'Tots els tipus',
  /** Accessibility label for list displaying the available document types */
  'search.document-types-aria-label': 'Tipus de documents',
  /** Label for when no document types matching the filter are found */
  'search.document-types-no-matches-found': "No s'han trobat coincidències per a {{filter}}",
  /** Description for error when a filter cannot be displayed, describes that you should check the schema */
  'search.error.display-filter-description':
    'Això pot indicar opcions invàlides definides en el vostre esquema.',
  /** Title for error when a filter cannot be displayed (mainly a developer-oriented error) */
  'search.error.display-filter-title': "S'ha produït un error en mostrar aquest filtre.",
  /** Description for error when no valid asset source is found, describes that you should check the the current studio config */
  'search.error.no-valid-asset-source-check-config-description':
    "Assegureu-vos que està habilitat en el vostre fitxer de configuració de l'estudi.",
  /** Description for error when no valid asset source is found, describes that only the default asset is supported */
  'search.error.no-valid-asset-source-only-default-description':
    "Actualment, només es dóna suport a la font d'actius per defecte.",
  /** Title for error when no valid asset sources found */
  'search.error.no-valid-asset-source-title': "No s'han trobat fonts d'actius vàlides.",
  /** Helpful description for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-help-description':
    'Torneu-ho a intentar o comproveu la vostra connexió',
  /** Title label for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-title': 'Alguna cosa ha anat malament mentre es cercava',
  /**
   * Label for "All fields", a label that appears above the list of available fields when filtering.
   * If one or more document type has been chosen as filter, this label is replaced with a group of
   * fields per selected document type
   */
  'search.filter-all-fields-header': 'Tots els camps',
  /** Label for the action of changing from one file to a different file in asset search filter */
  'search.filter-asset-change_file': 'Canvia el fitxer',
  /** Label for the action of changing from one image to a different image in asset search filter */
  'search.filter-asset-change_image': 'Canvia la imatge',
  /** Label for the action of clearing the currently selected asset in an image/file filter */
  'search.filter-asset-clear': 'Neteja',
  /** Label for the action of selecting a file in asset search filter */
  'search.filter-asset-select_file': 'Selecciona el fitxer',
  /** Label for the action of selecting an image in asset search filter */
  'search.filter-asset-select_image': 'Selecciona la imatge',
  /** Label for boolean filter - false */
  'search.filter-boolean-false': 'Fals',
  /** Label for boolean filter - true */
  'search.filter-boolean-true': 'Veritable',
  /** Accessibility label for list that lets you filter fields by title, when adding a new filter in search */
  'search.filter-by-title-aria-label': 'Filtra per títol',
  /** Accessibility label for date filter input */
  'search.filter-date-aria-label': 'Data',
  /** Accessibility label for selecting end date on the date range search filter */
  'search.filter-date-range-end-date-aria-label': 'Data final',
  /** Accessibility label for selecting start date on the date range search filter */
  'search.filter-date-range-start-date-aria-label': "Data d'inici",
  /**
   * Label for "Days"/"Months"/"Years" when selecting it as unit in "X days ago" search filter.
   * Capitalized, as it would be listed in a dropdown.
   */
  'search.filter-date-unit_days': 'Dies',
  'search.filter-date-unit_months': 'Mesos',
  'search.filter-date-unit_years': 'Anys',
  /** Accessibility label for selecting the unit (day/month/year) when adding "X days ago" search filter */
  'search.filter-date-unit-aria-label': 'Selecciona la unitat',
  /** Accessibility label for the input value (days/months/years) when adding "X days ago" search filter */
  'search.filter-date-value-aria-label': 'Valor de la unitat',
  /** Label for "field description" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-description': 'Descripció del camp',
  /** Label for "field name" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-name': 'Nom del camp',
  /** Label for "Used in document types", a list of the document types a field appears in. Shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-used-in-document-types': 'Utilitzat en tipus de documents',
  /** Label for when no fields/filters are found for the given term */
  'search.filter-no-matches-found': "No s'han trobat coincidències per a {{filter}}",
  /** Placeholder value for maximum numeric value filter */
  'search.filter-number-max-value-placeholder': 'Valor màxim',
  /** Placeholder value for minimum numeric value filter */
  'search.filter-number-min-value-placeholder': 'Valor mínim',
  /** Placeholder value for the number filter */
  'search.filter-number-value-placeholder': 'Valor',
  /** Placeholder for the "Filter" input, when narrowing possible fields/filters */
  'search.filter-placeholder': 'Filtre',
  /** Label for the action of clearing the currently selected document in a reference filter */
  'search.filter-reference-clear': 'Esborrar',
  /**
   * Label for "shared fields", a label that appears above a list of fields that all filtered types
   * have in common, when adding a new filter. For instance, if "book" and "employee" both have a
   * "title" field, this field would be listed under "shared fields".
   * */
  'search.filter-shared-fields-header': 'Camps compartits',
  /** Placeholder value for the string filter */
  'search.filter-string-value-placeholder': 'Valor',
  /** Label/placeholder prompting user to select one of the predefined, allowed values for a string field */
  'search.filter-string-value-select-predefined-value': 'Selecciona…',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (singular) */
  'search.filters-aria-label_one': 'Filtre',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (plural) */
  'search.filters-aria-label_other': 'Filtres',
  /** Label for instructions on how to use the search - displayed when no recent searches are available */
  'search.instructions': 'Utilitza <ControlsIcon/> per a refinar la teva cerca',
  /** Helpful description for when no search results are found */
  'search.no-results-help-description': 'Prova una altra paraula clau o ajusta els teus filtres',
  /** Title label for when no search results are found */
  'search.no-results-title': "No s'han trobat resultats",
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
    '<Field/> <Operator>té</Operator> <Value>{{count}} element</Value>',
  'search.operator.array-count-equal.description_other':
    '<Field/> <Operator>té</Operator> <Value>{{count}} elements</Value>',
  'search.operator.array-count-equal.name': 'la quantitat és',
  /* Array should have a count greater than given filter value */
  'search.operator.array-count-gt.description_one':
    '<Field/> <Operator>té ></Operator> <Value>{{count}} element</Value>',
  'search.operator.array-count-gt.description_other':
    '<Field/> <Operator>té ></Operator> <Value>{{count}} elements</Value>',
  'search.operator.array-count-gt.name': 'quantitat més gran que',
  /* Array should have a count greater than or equal to the given filter value */
  'search.operator.array-count-gte.description_one':
    '<Field/> <Operator>té ≥</Operator> <Value>{{count}} element</Value>',
  'search.operator.array-count-gte.description_other':
    '<Field/> <Operator>té ≥</Operator> <Value>{{count}} elements</Value>',
  'search.operator.array-count-gte.name': 'quantitat més gran o igual a',
  /* Array should have a count less than given filter value */
  'search.operator.array-count-lt.description_one':
    '<Field/> <Operator>té <</Operator> <Value>{{count}} element</Value>',
  'search.operator.array-count-lt.description_other':
    '<Field/> <Operator>té <</Operator> <Value>{{count}} elements</Value>',
  'search.operator.array-count-lt.name': 'quantitat menor que',
  /* Array should have a count less than or equal to the given filter value */
  'search.operator.array-count-lte.description_one':
    '<Field/> <Operator>té ≤</Operator> <Value>{{count}} element</Value>',
  'search.operator.array-count-lte.description_other':
    '<Field/> <Operator>té ≤</Operator> <Value>{{count}} elements</Value>',
  'search.operator.array-count-lte.name': 'quantitat menor o igual a',
  /* Array should have a count that is not equal to the given filter value */
  'search.operator.array-count-not-equal.description_one':
    '<Field/> <Operator>no té</Operator> <Value>{{count}} element</Value>',
  'search.operator.array-count-not-equal.description_other':
    '<Field/> <Operator>no té</Operator> <Value>{{count}} elements</Value>',
  'search.operator.array-count-not-equal.name': 'la quantitat no és',
  /**
   * Array should have a count within the range of given filter values.
   * Gets passed `{{from}}` and `{{to}}` values.
   **/
  'search.operator.array-count-range.description':
    '<Field/> <Operator>té entre</Operator> <Value>{{from}} → {{to}} elements</Value>',
  'search.operator.array-count-range.name': 'la quantitat està entre',
  /* Array should include the given value */
  'search.operator.array-list-includes.description':
    '<Field/> <Operator>inclou</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-includes.name': 'inclou',
  /* Array should not include the given value */
  'search.operator.array-list-not-includes.description':
    '<Field/> <Operator>no inclou</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-not-includes.name': 'no inclou',
  /* Array should include the given reference */
  'search.operator.array-reference-includes.description':
    '<Field/> <Operator>inclou</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-includes.name': 'inclou',
  /* Array should not include the given reference */
  'search.operator.array-reference-not-includes.description':
    '<Field/> <Operator>no inclou</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-not-includes.name': 'no inclou',
  /* Asset (file) should be the selected asset */
  'search.operator.asset-file-equal.description':
    '<Field/> <Operator>és</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-equal.name': 'és',
  /* Asset (file) should not be the selected asset */
  'search.operator.asset-file-not-equal.description':
    '<Field/> <Operator>no és</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-not-equal.name': 'no és',
  /* Asset (image) should be the selected asset */
  'search.operator.asset-image-equal.description':
    '<Field/> <Operator>és</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-equal.name': 'és',
  /* Asset (image) should not be the selected asset */
  'search.operator.asset-image-not-equal.description':
    '<Field/> <Operator>no és</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-not-equal.name': 'no és',
  /**
   * Boolean value should be the given filter value (true/false).
   * Context passed is `true` and `false`, allowing for more specific translations:
   * - `search.operator.boolean-equal.description_true`
   * - `search.operator.boolean-equal.description_false`
   */
  'search.operator.boolean-equal.description':
    '<Field/> <Operator>és</Operator> <Value>{{value}}</Value>',
  'search.operator.boolean-equal.name': 'és',
  /* Date should be after (later than) given filter value */
  'search.operator.date-after.description':
    '<Field/> <Operator>és després</Operator> <Value>{{value}}</Value>',
  'search.operator.date-after.name': 'després',
  /* Date should be before (earlier than) given filter value */
  'search.operator.date-before.description':
    '<Field/> <Operator>és abans</Operator> <Value>{{value}}</Value>',
  'search.operator.date-before.name': 'abans',
  /* Date should be the given filter value */
  'search.operator.date-equal.description':
    '<Field/> <Operator>és</Operator> <Value>{{value}}</Value>',
  'search.operator.date-equal.name': 'és',
  /* Date should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-last.description':
    '<Field/> <Operator>és en els últims</Operator> <Value>{{value}}</Value>',
  'search.operator.date-last.name': 'últims',
  /* Date should not be the given filter value */
  'search.operator.date-not-equal.description':
    '<Field/> <Operator>no és</Operator> <Value>{{value}}</Value>',
  'search.operator.date-not-equal.name': 'no és',
  /* Date should be within the range of given filter values */
  'search.operator.date-range.description': '<Field/> <Operator>és entre</Operator> <Value/>',
  'search.operator.date-range.name': 'és entre',
  /* Date and time should be after (later than) given filter value */
  'search.operator.date-time-after.description':
    '<Field/> <Operator>és després</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-after.name': 'després',
  /* Date and time should be before (earlier than) given filter value */
  'search.operator.date-time-before.description':
    '<Field/> <Operator>és abans</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-before.name': 'abans',
  /* Date and time should be the given filter value */
  'search.operator.date-time-equal.description':
    '<Field/> <Operator>és</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-equal.name': 'és',
  /* Date and time should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-time-last.description':
    '<Field/> <Operator>està en els últims</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-last.name': 'últims',
  /* Date and time should not be the given filter value */
  'search.operator.date-time-not-equal.description':
    '<Field/> <Operator>no és</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-not-equal.name': 'no és',
  /* Date and time should be within the range of given filter values */
  'search.operator.date-time-range.description':
    '<Field/> <Operator>està entre</Operator> <Value/>',
  'search.operator.date-time-range.name': 'està entre',
  /* Value should be defined */
  'search.operator.defined.description': '<Field/> <Operator>és</Operator> <Value>no buit</Value>',
  'search.operator.defined.name': 'no buit',
  /* Value should not be defined */
  'search.operator.not-defined.description': '<Field/> <Operator>és</Operator> <Value>buit</Value>',
  'search.operator.not-defined.name': 'buit',
  /* Number should be the given filter value */
  'search.operator.number-equal.description':
    '<Field/> <Operator>és</Operator> <Value>{{value}}</Value>',
  'search.operator.number-equal.name': 'és',
  /* Number should be greater than given filter value */
  'search.operator.number-gt.description':
    '<Field/> <Operator>></Operator> <Value>{{value}}</Value>',
  'search.operator.number-gt.name': 'més gran que',
  /* Number should be greater than or the given filter value */
  'search.operator.number-gte.description':
    '<Field/> <Operator>≥</Operator> <Value>{{value}}</Value>',
  'search.operator.number-gte.name': 'més gran o igual a',
  /* Number should be less than given filter value */
  'search.operator.number-lt.description':
    '<Field/> <Operator><</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lt.name': 'menys que',
  /* Number should be less than or the given filter value */
  'search.operator.number-lte.description':
    '<Field/> <Operator>≤</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lte.name': 'menys o igual a',
  /* Number should not be the given filter value */
  'search.operator.number-not-equal.description':
    '<Field/> <Operator>no és</Operator> <Value>{{value}}</Value>',
  'search.operator.number-not-equal.name': 'no és',
  /* Number should be within the range of given filter values */
  'search.operator.number-range.description':
    '<Field/> <Operator>està entre</Operator> <Value>{{from}} → {{to}}</Value>',
  'search.operator.number-range.name': 'està entre',
  /* Portable Text should contain the given filter value */
  'search.operator.portable-text-contains.description':
    '<Field/> <Operator>conté</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-contains.name': 'conté',
  /* Portable Text should be the given filter value */
  'search.operator.portable-text-equal.description':
    '<Field/> <Operator>és</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-equal.name': 'és',
  /* Portable Text should not contain the given filter value */
  'search.operator.portable-text-not-contains.description':
    '<Field/> <Operator>no conté</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-contains.name': 'no conté',
  /* Portable Text should not be the given filter value */
  'search.operator.portable-text-not-equal.description':
    '<Field/> <Operator>no és</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-equal.name': 'no és',
  /* References the given asset (file) */
  'search.operator.reference-asset-file.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-file.name': 'fitxer',
  /* References the given asset (image) */
  'search.operator.reference-asset-image.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-image.name': 'imatge',
  /* References the given document */
  'search.operator.reference-document.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-document.name': 'document',
  /* Reference should be the given document */
  'search.operator.reference-equal.description':
    '<Field/> <Operator>és</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-equal.name': 'és',
  /* Reference should not be the given document */
  'search.operator.reference-not-equal.description':
    '<Field/> <Operator>no és</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-not-equal.name': 'no és',
  /* Slug contains the given value */
  'search.operator.slug-contains.description':
    '<Field/> <Operator>conté</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-contains.name': 'conté',
  /* Slug equals the given filter value */
  'search.operator.slug-equal.description':
    '<Field/> <Operator>és</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-equal.name': 'és',
  /* Slug does not contain the given value */
  'search.operator.slug-not-contains.description':
    '<Field/> <Operator>no conté</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-contains.name': 'no conté',
  /* Slug does not equal the given filter value */
  'search.operator.slug-not-equal.description':
    '<Field/> <Operator>no és</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-equal.name': 'no és',
  /* String contains the given filter value */
  'search.operator.string-contains.description':
    '<Field/> <Operator>conté</Operator> <Value>{{value}}</Value>',
  'search.operator.string-contains.name': 'conté',
  /* String equals the given filter value */
  'search.operator.string-equal.description':
    '<Field/> <Operator>és</Operator> <Value>{{value}}</Value>',
  'search.operator.string-equal.name': 'és',
  /* String equals one of the predefined allowed values */
  'search.operator.string-list-equal.description':
    '<Field/> <Operator>és</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-equal.name': 'és',
  /* String does not equal one of the predefined allowed values */
  'search.operator.string-list-not-equal.description':
    '<Field/> <Operator>no és</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-not-equal.name': 'no és',
  /* String does not contain the given filter value */
  'search.operator.string-not-contains.description':
    '<Field/> <Operator>no conté</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-contains.name': 'no conté',
  /* String does not equal the given filter value */
  'search.operator.string-not-equal.description':
    '<Field/> <Operator>no és</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-equal.name': 'no és',
  /** Label for the "Best match" search ordering type */
  'search.ordering.best-match-label': 'Millor coincidència',
  /** Label for the "Created: Oldest first" search ordering type */
  'search.ordering.created-ascending-label': 'Creat: Els més antics primer',
  /** Label for the "Created: Newest first" search ordering type */
  'search.ordering.created-descending-label': 'Creat: Els més recents primer',
  /** Label for the "Updated: Oldest first" search ordering type */
  'search.ordering.updated-ascending-label': 'Actualitzat: Els més antics primer',
  /** Label for the "Updated: Newest first" search ordering type */
  'search.ordering.updated-descending-label': 'Actualitzat: Els més recents primer',
  /** Placeholder text for the global search input field */
  'search.placeholder': 'Cerca',
  /** Accessibility label for the recent searches section, shown when no valid search terms has been given */
  'search.recent-searches-aria-label': 'Cerques recents',
  /** Label/heading shown for the recent searches section */
  'search.recent-searches-label': 'Cerques recents',
  /** Accessibility label for the search results section, shown when the user has typed valid terms */
  'search.search-results-aria-label': 'Resultats de la cerca',

  /** Label for the edit columns button to change field visibility in sheet list */
  'sheet-list.edit-columns': 'Edita les columnes',
  /** Label for the header menu option to hide a field from the sheet list */
  'sheet-list.hide-field': 'Elimina de la taula',
  /** Label for reset column visibilities button */
  'sheet-list.reset-columns': 'Restableix les columnes',
  /** Title for the edit columns menu */
  'sheet-list.select-fields': 'Selecciona fins a 5 tipus de camps',

  /** Accessibility label for the navbar status button */
  'status-button.aria-label': 'Estat de la configuració',

  /* Time zone handling */
  'time-zone.action.search-for-timezone-placeholder': 'Cerqueu una ciutat o una zona horària',
  /* Label for the local time zone button */
  'time-zone.action.select-local-time-zone': 'Seleccioneu la zona horària local',
  /* Dialog info for the time zone dialog */
  'time-zone.dialog-info.content-releases':
    'La zona horària seleccionada canviarà com es representen les dates en els llançaments de contingut.',
  /* Dialog info for the time zone dialog */
  'time-zone.dialog-info.input':
    'La zona horària seleccionada canviarà com es representen les dates només per a aquesta entrada en aquest document.',
  /* Dialog info for the time zone dialog */
  'time-zone.dialog-info.scheduled-publishing':
    'La zona horària seleccionada canviarà com es representen les dates en les programacions.',
  /* Label for the local time zone button */
  'time-zone.local-time': 'hora local',
  /* Label for the time zone button */
  'time-zone.time-zone': 'Zona horària',
  /* Tooltip content for the time zone dialog */
  'time-zone.time-zone-tooltip-content-releases':
    'Mostrant llançaments a {{alternativeName}} GMT{{offset}}',
  /* Tooltip content for the time zone dialog */
  'time-zone.time-zone-tooltip-input':
    'Mostrant <em>{{title}}</em> a {{alternativeName}} GMT{{offset}}',
  /* Tooltip content for the time zone dialog */
  'time-zone.time-zone-tooltip-scheduled-publishing':
    'Mostrant programacions a {{alternativeName}} GMT{{offset}}',

  /** Title for the changes tooltip in the history inspector*/
  'timeline.changes.title': 'Canvis per',
  /** Description for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-description':
    "Les transaccions de l'historial del document no s'han vist afectades.",
  /** Title for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-title':
    "S'ha produït un error en recuperar els canvis del document.",
  /** Description for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-version-description':
    "Activa l'API d'esdeveniments a través de la configuració de l'Estudi per veure l'historial del document.",
  /** Title for error when the timeline for the given version document can't be loaded */
  'timeline.error.load-document-changes-version-title':
    "L'historial de les versions dels documents només està disponible a través de l'API d'Esdeveniments.",
  /** Error description for when the document doesn't have history */
  'timeline.error.no-document-history-description':
    'En canviar el contingut del document, les versions del document apareixeran en aquest menú.',
  /** Error title for when the document doesn't have history */
  'timeline.error.no-document-history-title': 'No hi ha historial del document',
  /** Error prompt when revision cannot be loaded */
  'timeline.error.unable-to-load-revision': 'No es pot carregar la revisió',
  /** Label for when the timeline item is the latest in the history */
  'timeline.latest': 'Més recent',
  /** Label for latest revision for timeline menu dropdown */
  'timeline.latest-revision': 'Última revisió',
  /**
   * Label for latest revision for timeline menu dropdown
   * @deprecated as of `v3.47.0` `timeline.latest-revision` should be used instead. Note: _usage_ of this key is deprecated, but Studios on `< v3.47.0` still require this key to be _defined_
   * */
  'timeline.latest-version': 'Última revisió',
  /** The aria-label for the list of revisions in the timeline */
  'timeline.list.aria-label': 'Revisions del document',
  /** Label for loading history */
  'timeline.loading-history': "Carregant l'historial…",
  /* Label for when no previous since events are available*/
  'timeline.no-previous-events': 'No hi ha esdeveniments anteriors',
  /** Label shown in review changes timeline when a document has been created */
  'timeline.operation.created': 'Creat',
  /** Label shown in review changes timeline when a document has been created, with a timestamp */
  'timeline.operation.created_timestamp': 'Creat: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was initially created */
  'timeline.operation.created-initial': 'Creat',
  /** Label shown in review changes timeline when a document was initially created, with a timestamp */
  'timeline.operation.created-initial_timestamp': 'Creat: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been deleted */
  'timeline.operation.deleted': 'Eliminat',
  /** Label shown in review changes timeline when a document has been deleted, with a timestamp */
  'timeline.operation.deleted_timestamp': 'Esborrat: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft document has been created*/
  'timeline.operation.draft-created': 'Esborrany creat',
  /** Label shown in review changes timeline when a draft document has been created, with a timestamp */
  'timeline.operation.draft-created_timestamp': 'Esborrany creat: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been discarded */
  'timeline.operation.draft-discarded': 'Esborrany descartat',
  /** Label shown in review changes timeline when a draft has been discarded, with a timestamp */
  'timeline.operation.draft-discarded_timestamp': 'Esborrany descartat: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been edited */
  'timeline.operation.edited-draft': 'Editat',
  /** Label shown in review changes timeline when a draft has been edited, with a timestamp */
  'timeline.operation.edited-draft_timestamp': 'Editat: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been edited live */
  'timeline.operation.edited-live': 'Editat en viu',
  /** Label shown in review changes timeline when a document has been edited live, with a timestamp */
  'timeline.operation.edited-live_timestamp': 'Editat en viu: {{timestamp, datetime}}',
  /** Label shown in review changes timeline event when transactions have been deleted by retention policy */
  'timeline.operation.history-cleared': 'Esborrat per la política de retenció',
  /** Label shown in review changes timeline when a document was published */
  'timeline.operation.published': 'Publicat',
  /** Label shown in review changes timeline when a document was published, with a timestamp */
  'timeline.operation.published_timestamp': 'Publicat: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was unpublished */
  'timeline.operation.unpublished': 'Despublicat',
  /** Label shown in review changes timeline when a document was unpublished, with a timestamp */
  'timeline.operation.unpublished_timestamp': 'Despublicat: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document version has been created */
  'timeline.operation.version-created': 'Versió creada',
  /** Label shown in review changes timeline when a document version has been created, with a timestamp */
  'timeline.operation.version-created_timestamp': 'Versió creada: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document version has been discarded */
  'timeline.operation.version-discarded': 'Versió descartada',
  /** Label shown in review changes timeline when a document version has been discarded, with a timestamp */
  'timeline.operation.version-discarded_timestamp': 'Versió descartada: {{timestamp, datetime}}',
  /**
   * Label for determining since which version the changes for timeline menu dropdown are showing.
   * Receives the time label as a parameter (`timestamp`).
   */
  'timeline.since': '{{timestamp, datetime}}',
  /** Label for missing change version for timeline menu dropdown are showing */
  'timeline.since-version-missing': 'Des de: versió desconeguda',

  /** Aria label for the action buttons in the PTE toolbar */
  'toolbar.portable-text.action-button-aria-label': '{{action}}',

  /** Accessibility label for the breadcrumb menu */
  'tree-editing-dialog.breadcrumbs.menu': 'Menú de navegació estructural',
  /** Title placeholder for search input in array of objects */
  'tree-editing-dialog.search-placeholder': 'Cerca',
  /** Menu aria label for the search menu */
  'tree-editing-dialog.search.menu-label': 'Menú de cerca',
  /** Title label for when no search results are found on the tree of objects */
  'tree-editing-dialog.search.no-results-title': "No s'han trobat resultats",
  /** Label to close the sidebar */
  'tree-editing-dialog.sidebar.action.close': 'Tanca la barra lateral',
  /** Collapse label the menu item in the sidebar  */
  'tree-editing-dialog.sidebar.action.collapse': 'Col·lapsa',
  /** Label to close the dialog */
  'tree-editing-dialog.sidebar.action.done': 'Fet',
  /** Exapnd label the menu item in the sidebar  */
  'tree-editing-dialog.sidebar.action.expand': 'Expandeix',
  /** Label to open the sidebar */
  'tree-editing-dialog.sidebar.action.open': 'Obre la barra lateral',

  /** Label for button showing the free trial days left */
  'user-menu.action.free-trial_one': '{{count}} dia restant en el període de prova',
  'user-menu.action.free-trial_other': '{{count}} dies restants en el període de prova',
  /** Label for the button showed after trial ended */
  'user-menu.action.free-trial-finished': 'Actualitza des de gratuït',
  /** Label for action to invite members to the current sanity project */
  'user-menu.action.invite-members': 'Convida membres',
  /** Accessibility label for action to invite members to the current sanity project */
  'user-menu.action.invite-members-aria-label': 'Convida membres',
  /** Label for action to manage the current sanity project */
  'user-menu.action.manage-project': 'Gestiona el projecte',
  /** Accessibility label for the action to manage the current project */
  'user-menu.action.manage-project-aria-label': 'Gestiona el projecte',
  /** Tooltip helper text when portable text annotation is disabled for empty block*/
  'user-menu.action.portable-text.annotation-disabled_empty-block':
    'No es pot aplicar {{name}} a un bloc buit',
  /** Tooltip helper text when portable text annotation is disabled for multiple blocks */
  'user-menu.action.portable-text.annotation-disabled_multiple-blocks':
    'No es pot aplicar {{name}} a múltiples blocs',
  /** Label for action to sign out of the current sanity project */
  'user-menu.action.sign-out': 'Tanca la sessió',
  /** Title for appearance section for the current studio (dark / light / system scheme) */
  'user-menu.appearance-title': 'Aparença',
  /** Label for close menu button for user menu */
  'user-menu.close-menu': 'Tanca el menú',
  /** Description for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-description': "Utilitza l'aparença fosca",
  /** Title for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-title': 'Fosc',
  /** Description for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-description': "Utilitza l'aparença clara",
  /** Title for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-title': 'Clar',
  /** Description for using "system apparence" in the appearance user menu */
  'user-menu.color-scheme.system-description': "Utilitza l'aparença del sistema",
  /** Title for using system apparence in the appearance user menu */
  'user-menu.color-scheme.system-title': 'Sistema',
  /** Title for locale section for the current studio */
  'user-menu.locale-title': 'Idioma',
  /** Label for tooltip to show which provider the currently logged in user is using */
  'user-menu.login-provider': 'Has iniciat sessió amb {{providerTitle}}',
  /** Label for open menu button for user menu */
  'user-menu.open-menu': 'Obre el menú',

  /**
   * Label for action to add a workspace (currently a developer-oriented action, as this will
   * lead to the documentation on workspace configuration)
   */
  'workspaces.action.add-workspace': 'Afegeix un espai de treball',
  /**
   * Label for action to choose a different workspace, in the case where you are not logged in,
   * have selected a workspace, and are faced with the authentication options for the selected
   * workspace. In other words, label for the action shown when you have reconsidered which
   * workspace to authenticate in.
   */
  'workspaces.action.choose-another-workspace': 'Tria un altre espai de treball',
  /** Label for title to switch workspace before workspaces are listed */
  'workspaces.action.switch-workspace': "Canvia l'espai de treball",
  /** Label for heading that indicates that you can choose your workspace */
  'workspaces.choose-your-workspace-label': 'Tria el teu espai de treball',
  /** Label for the workspace menu */
  'workspaces.select-workspace-aria-label': "Selecciona l'espai de treball",
  /** Button label for opening the workspace switcher */
  'workspaces.select-workspace-label': "Selecciona l'espai de treball",
  /** Tooltip for the workspace menu */
  'workspaces.select-workspace-tooltip': "Selecciona l'espai de treball",
  /** Title for Workplaces dropdown menu */
  'workspaces.title': 'Espais de treball',
})
