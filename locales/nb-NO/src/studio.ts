import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** "Disabled" status for auto-updates in About-dialog */
  'about-dialog.version-info.auto-updates.disabled': 'Deaktivert',
  /** "Enabled" status for auto-updates in About-dialog */
  'about-dialog.version-info.auto-updates.enabled': 'Aktivert',
  /** "Auto Updates" status header in About-dialog */
  'about-dialog.version-info.auto-updates.header': 'Automatiske oppdateringer',
  /** "How to enable" next to Disabled state for Auto updates in about dialog */
  'about-dialog.version-info.auto-updates.how-to-enable': 'Hvordan aktivere',
  /** Text displayed on the "Copy to clipboard"-button after clicked */
  'about-dialog.version-info.copy-to-clipboard-button.copied-text': 'Kopiert til utklippstavlen.',
  /** "Copy to Clipboard" button text for copying version details from About-dialog */
  'about-dialog.version-info.copy-to-clipboard-button.text': 'Kopier til utklippstavle',
  /** "Current version" header in about dialog  */
  'about-dialog.version-info.current-version.header': 'Nåværende versjon',
  /** "How to upgrade" link text */
  'about-dialog.version-info.how-to-upgrade': 'Hvordan oppgradere',
  /** "Latest version" header in about dialog */
  'about-dialog.version-info.latest-version.header': 'Siste versjon',
  /** "Latest version" header in about dialog */
  'about-dialog.version-info.latest-version.text': 'Siste versjon er {{latestVersion}}',
  /** "Up to date" status in About-dialog */
  'about-dialog.version-info.up-to-date': 'Oppdatert',
  /** "User agent" header in About-dialog */
  'about-dialog.version-info.user-agent.header': 'Brukeragent',

  /** The text used in the tooltip shown in the dialog close button */
  'announcement.dialog.close': 'Lukk',
  /** Aria label to be used in the dialog close button */
  'announcement.dialog.close-label': 'Lukk dialog',
  /**Text to be used in the tooltip in the button in the studio announcement card */
  'announcement.floating-button.dismiss': 'Lukk',
  /**Aria label to be used in the floating button in the studio announcement card, to dismiss the card */
  'announcement.floating-button.dismiss-label': 'Avvis kunngjøringer',
  /**Aria label to be used in the floating button in the studio announcement card */
  'announcement.floating-button.open-label': 'Åpne kunngjøringer',

  /** Menu item for deleting the asset */
  'asset-source.asset-list.menu.delete': 'Slett',
  /** Menu item for showing where a particular asset is used */
  'asset-source.asset-list.menu.show-usage': 'Vis bruk',
  /** Header in usage dialog for file assets */
  'asset-source.asset-usage-dialog.header_file': 'Dokumenter som bruker filen',
  /** Header in usage dialog for image assets */
  'asset-source.asset-usage-dialog.header_image': 'Dokumenter som bruker bildet',
  /** Text shown in usage dialog when loading documents using the selected asset */
  'asset-source.asset-usage-dialog.loading': 'Laster…',
  /** Text for cancel action in delete-asset dialog */
  'asset-source.delete-dialog.action.cancel': 'Avbryt',
  /** Text for "confirm delete" action in delete-asset dialog */
  'asset-source.delete-dialog.action.delete': 'Slett',
  /** Dialog header for delete-asset dialog when deleting a file */
  'asset-source.delete-dialog.header_file': 'Slett fil',
  /** Dialog header for delete-asset dialog when deleting an image */
  'asset-source.delete-dialog.header_image': 'Slett bilde',
  /** Text shown in delete dialog when loading documents using the selected asset */
  'asset-source.delete-dialog.loading': 'Laster…',
  /** Message confirming to delete *named* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_named':
    'Du er i ferd med å slette filen <strong>{{filename}}}</strong> med tilhørende metadata. Er du sikker?',
  /** Message confirming to delete *unnamed* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_unnamed':
    'Du er i ferd med å slette filen med tilhørende metadata. Er du sikker?',
  /** Message confirming to delete *named* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_named':
    'Du er i ferd med å slette bildet <strong>{{filename}}</strong> med tilhørende metadata. Er du sikker?',
  /** Message confirming to delete *unnamed* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_unnamed':
    'Du er i ferd med å slette bildet og tilhørende metadata. Er du sikker?',
  /** Alt text showing on image preview in delete asset dialog  */
  'asset-source.delete-dialog.usage-list.image-preview-alt': 'Forhåndsvisning av bildet',
  /** Warning message showing when *named* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_named':
    '{{filename}} kan ikke slettes fordi det er i bruk. For å slette denne filen må du først fjerne all bruk av den.',
  /** Warning message showing when *unnamed* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_unnamed':
    'Denne filen kan ikke slettes fordi den er i bruk. For å slette må du først fjerne all bruk av den.',
  /** Warning message showing when *named* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_named':
    '{{filename}} kan ikke slettes fordi det er i bruk. For å slette dette bildet må du først fjerne all bruk av det.',
  /** Warning message showing when *unnamed* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_unnamed':
    'Dette bildet kan ikke slettes fordi det er i bruk. For å slette må du først fjerne all bruk av det.',
  /** Text shown when the list of assets only include a specific set of types */
  'asset-source.dialog.accept-message':
    'Viser kun media av godkjente typer: <strong>{{acceptTypes}}</strong>',
  /** Select asset dialog cancel-button */
  'asset-source.dialog.button.cancel': 'Avbryt',
  /** Select asset dialog select-button */
  'asset-source.dialog.button.select': 'Velg',
  /** Keys shared between both image asset source and file asset source */
  /** Select asset dialog title for files */
  'asset-source.dialog.default-title_file': 'Velg fil',
  /** Select asset dialog title for images */
  'asset-source.dialog.default-title_image': 'Velg bilde',
  /** Insert asset error */
  'asset-source.dialog.insert-asset-error':
    'En feil oppstod under innsetting av mediefil. Se konsollen for mer informasjon.',
  /** Select asset dialog load more items */
  'asset-source.dialog.load-more': 'Last inn flere',
  /** Text shown when selecting a file but there's no files to select from */
  'asset-source.dialog.no-assets_file': 'Ingen filer',
  /** Text shown when selecting an image but there's no images to select from */
  'asset-source.dialog.no-assets_image': 'Ingen bilder',
  'asset-source.file.asset-list.action.delete.disabled-cannot-delete-current-file':
    'Kan ikke slette nåværende valgt fil',
  'asset-source.file.asset-list.action.delete.text': 'Slett',
  'asset-source.file.asset-list.action.delete.title': 'Slett fil',
  'asset-source.file.asset-list.action.select-file.title': 'Velg filen {{filename}}',
  'asset-source.file.asset-list.action.show-usage.title': 'Vis bruk',
  'asset-source.file.asset-list.delete-failed': 'Fil kunne ikke bli slettet',
  'asset-source.file.asset-list.delete-successful': 'Fil slettet',
  'asset-source.file.asset-list.header.date-added': 'Dato lagt til',
  /** File asset source */
  'asset-source.file.asset-list.header.filename': 'Filnavn',
  'asset-source.file.asset-list.header.size': 'Størrelse',
  'asset-source.file.asset-list.header.type': 'Type',
  /** Text displayed on button or menu invoking the file asset source */
  'asset-source.file.title': 'Opplastede filer',
  'asset-source.image.asset-list.delete-failed': 'Bildet kunne ikke bli slettet',
  /** Image asset source */
  'asset-source.image.asset-list.delete-successful': 'Bildet slettet',
  /** Text displayed on button or menu invoking the image asset source */
  'asset-source.image.title': 'Opplastede bilder',
  /** Built in asset source usage texts */
  'asset-source.usage-list.documents-using-file_named_one':
    'Ett dokument bruker filen <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-file_named_other':
    '{{count}} dokumenter bruker filen <code>{{filename}}</code>',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *named* file **/
  'asset-source.usage-list.documents-using-file_named_zero':
    'Ingen dokumenter bruker filen <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-file_unnamed_one': 'Ett dokument bruker denne filen',
  'asset-source.usage-list.documents-using-file_unnamed_other':
    '{{count}} dokumenter bruker denne filen',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *unnamed* file **/
  'asset-source.usage-list.documents-using-file_unnamed_zero':
    'Ingen dokumenter bruker denne filen',
  'asset-source.usage-list.documents-using-image_named_one':
    'Ett dokument bruker bildet <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-image_named_other':
    '{{count}} dokumenter bruker bildet <code>{{filename}}</code>',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *named* image **/
  'asset-source.usage-list.documents-using-image_named_zero':
    'Ingen dokumenter bruker bildet <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-image_unnamed_one': 'Ett dokument bruker dette bildet',
  'asset-source.usage-list.documents-using-image_unnamed_other':
    '{{count}} dokumenter bruker dette bildet',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *unnamed* image **/
  'asset-source.usage-list.documents-using-image_unnamed_zero':
    'Ingen dokumenter bruker dette bildet',

  /** Common (all) Asset Source texts. Note that all translation keys starting with 'asset-source.' is for the built in asset source. */
  'asset-sources.common.uploader.upload-failed.description': 'Se konsollen for mer informasjon.',
  'asset-sources.common.uploader.upload-failed.title': 'Opplasting mislyktes',
  /** Menu Items for Dataset Asset Source (will be replaced with workspace name by default) */
  'asset-sources.dataset.file.title': 'Filer i workspace',
  'asset-sources.dataset.image.title': 'Bilder i workspace',
  /** Error messages for the Media Library Asset Source  */
  'asset-sources.media-library.error.library-could-not-be-resolved':
    'Noe gikk galt med å løse opp Media Library for dette prosjektet.',
  /** Menu Items for Media Library Asset Source */
  'asset-sources.media-library.file.title': 'Mediebibliotek',
  'asset-sources.media-library.image.title': 'Mediebibliotek',
  /** Info messages for the Media Library Asset Source  */
  'asset-sources.media-library.info.provisioning':
    'Vennligst vent mens vi forbereder mediebiblioteket',

  /** Label when a release has been deleted by a different user */
  'banners.deleted-bundle-banner.text':
    "Utgivelsen '<strong>{{title}}</strong>' har blitt slettet.",

  /** Action message for navigating to next month */
  'calendar.action.go-to-next-month': 'Gå til neste måned',
  /** Action message for navigating to next year */
  'calendar.action.go-to-next-year': 'Gå til neste år',
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
  'calendar.action.include-time-label': 'Med klokkeslett',
  /** Action message for selecting the time */
  'calendar.action.select-time': 'Velg tid',
  /** Action message for setting to the current time */
  'calendar.action.set-to-current-time': 'Sett til nå',
  /** Label for selecting an hour preset. Receives a `time` param as a string on hh:mm format and a `date` param as a Date instance denoting the preset date */
  'calendar.action.set-to-time-preset': '{{time}} on {{date, datetime}}',
  /** Aria label for button to open date picker */
  'calendar.button.aria-label': 'Åpne kalender',
  /** Tooltip content for button to open datetime input */
  'calendar.button.tooltip-text': 'Velg dato',
  /** Error message displayed in calendar when entered date is not the correct format */
  'calendar.error.must-be-in-format': 'Må være i formatet <Emphasis>{{exampleDate}}</Emphasis>',
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
  'changes.action.close-label': 'Lukk gjennomgang av endringer',
  /** Cancel label for revert button prompt action */
  'changes.action.revert-all-cancel': 'Avbryt',
  /** Revert all confirm label for revert button action - used on prompt button + review changes pane */
  'changes.action.revert-all-confirm': 'Angre alle',
  /** Prompt for reverting all changes in document in Review Changes pane. Includes a count of changes. */
  'changes.action.revert-all-description':
    'Er du sikker på at du vil angre alle {{count}} endringer?',
  /** Prompt for confirming revert change (singular) label for field change action */
  'changes.action.revert-changes-confirm-change_one': 'Angre endring',
  /** Revert for confirming revert (plural) label for field change action */
  'changes.action.revert-changes-confirm-change_other': 'Angre endringer',
  /** Prompt for reverting changes for a field change */
  'changes.action.revert-changes-description': 'Er du sikker på at du vil angre endringene?',
  /** Prompt for reverting changes for a group change, eg multiple changes */
  'changes.action.revert-changes-description_one': 'Er du sikker på at du vil angre endringen?',
  /** Label for when the action of the change was to set something that was previously empty, eg a field was given a value, an array item was added, an asset was selected or similar */
  'changes.added-label': 'Lagt til',
  /** Array diff: An item was added in a given position (`{{position}}`) */
  'changes.array.item-added-in-position': 'Lagt til i posisjon {{position}}',
  'changes.array.item-moved_down_one': 'Flyttet {{count}} posisjon ned',
  'changes.array.item-moved_down_other': 'Flyttet {{count}} posisjoner ned',
  /**
   * Array diff: An item was moved within the array.
   * Receives `{{count}}` representing number of positions it moved.
   * Context is the direction of the move, either `up` or `down`.
   */
  'changes.array.item-moved_up_one': 'Flyttet {{count}} posisjon opp',
  'changes.array.item-moved_up_other': 'Flyttet {{count}} posisjoner opp',
  /** Array diff: An item was removed from a given position (`{{position}}`) */
  'changes.array.item-removed-from-position': 'Fjernet fra posisjon {{position}}',
  /** Accessibility label for the "change bar" shown when there are edits on a field-level */
  'changes.change-bar.aria-label': 'Se endringer',
  /** Label for when the action of the change was _not_ an add/remove, eg a text field changed value, an image was changed from one asset to another or similar */
  'changes.changed-label': 'Endret',
  /** Label and text for tooltip that indicates the authors of the changes */
  'changes.changes-by-author': 'Endringer av',
  /** Additional text shown in development mode when a diff component crashes during rendering */
  'changes.error-boundary.developer-info':
    'Sjekk konsollen i utviklerverktøyet for mer informasjon',
  /** Text shown when a diff component crashes during rendering, triggering the error boundary */
  'changes.error-boundary.title': 'En feil oppsto under visning av endringer',
  /* Error description when changes could not be loaded */
  'changes.error-description': 'Vi klarer ikke å laste endringene for dette dokumentet.',
  /** Error title when changes could not be loaded */
  'changes.error-title': 'Noe gikk galt',
  /** Error message shown when the value of a field is not the expected one */
  'changes.error.incorrect-type-message':
    'Verdifeil: Vedien har typen «<code>{{actualType}}</code>», forventet «<code>{{expectedType}}</code>»',
  /** File diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.file.meta-info-fallback-title': 'Navnløs fil',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.crop-changed': 'Beskjæring endret',
  /** Image diff: Text shown if the previous image asset was deleted (shouldn't theoretically happen) */
  'changes.image.deleted': 'Bilde slettet',
  /** Image diff: Text shown if the image failed to be loaded when previewing it */
  'changes.image.error-loading-image': 'Feil under lasting av bilde',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.hotspot-changed': 'Fokuspunkt endret',
  /** Image diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.image.meta-info-fallback-title': 'Navnløst bilde',
  /** Image diff: Text shown if no asset has been set for the field (but has metadata changes) */
  'changes.image.no-asset-set': 'Bilde ikke satt',
  /** Image diff: Text shown when the from/to state has/had no image */
  'changes.image.no-image-placeholder': '(ingen bilde)',
  /** Label for the "from" value in the change inspector */
  'changes.inspector.from-label': 'Fra',
  /** Label for the "meta" (field path, action etc) information in the change inspector */
  'changes.inspector.meta-label': 'Meta',
  /** Label for the "to" value in the change inspector */
  'changes.inspector.to-label': 'Til',
  /** Loading author of change in the differences tooltip in the review changes pane */
  'changes.loading-author': 'Laster…',
  /** Loading changes in Review Changes Pane */
  'changes.loading-changes': 'Laster endringer…',
  /** Error message shown when the document revision could not be found */
  'changes.missing-since-document-error':
    'Vi kunne ikke finne dokumentrevisjonen med id: <code>{{revisionId}}</code> som du prøver å sammenligne. <Break/> Dette skyldes sannsynligvis historikkbevaringsreglene i abonnementet ditt. <Break/> Vennligst velg en annen <strong>From</strong>-oppføring.',
  /** No Changes description in the Review Changes pane */
  'changes.no-changes-description':
    'Rediger dokumentet eller velg en eldre versjon i tidslinjen for å se en liste over endringer i dette panelet.',
  /** No Changes title in the Review Changes pane */
  'changes.no-changes-title': 'Det er ingen endringer',
  /* Label for the tooltip that shows when an action is not selectable*/
  'changes.not-selectable': 'Det er ikke mulig å velge denne hendelsen',
  /** Portable Text diff: An annotation was added */
  'changes.portable-text.annotation_added': 'La til berikelse',
  /** Portable Text diff: An annotation was changed */
  'changes.portable-text.annotation_changed': 'Endret berikelse',
  /** Portable Text diff: An annotation was removed */
  'changes.portable-text.annotation_removed': 'Fjernet berikelse',
  /** Portable Text diff: An annotation was left unchanged */
  'changes.portable-text.annotation_unchanged': 'Uendret berikelse',
  /** Portable Text diff: A block changed from one style to another (eg `normal` to `h1` or similar) */
  'changes.portable-text.block-style-changed':
    'Endret blokkstil fra "{{fromStyle}}" til "{{toStyle}}"',
  /** Portable Text diff: Change formatting of text (setting/unsetting marks, eg bold/italic etc) */
  'changes.portable-text.changed-formatting': 'Endret formattering',
  /** Portable Text diff: An empty inline object is part of a change */
  'changes.portable-text.empty-inline-object': 'Tom {{inlineObjectType}}',
  /** Portable Text diff: An empty object is the result of adding/removing an annotation */
  'changes.portable-text.empty-object-annotation': 'Tom {{annotationType}}',
  /** Portable Text diff: Added a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_added': 'La til tomt avsnitt',
  /** Portable Text diff: Changed a block that contained no text (eg empty block) */
  'changes.portable-text.empty-text_changed': 'Endret tomt avsnitt',
  /** Portable Text diff: Removed a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_removed': 'Fjernet tomt avsnitt',
  /** Portable Text diff: An inline object was added */
  'changes.portable-text.inline-object_added': 'La til inline objekt',
  /** Portable Text diff: An inline object was changed */
  'changes.portable-text.inline-object_changed': 'Endet inline objekt',
  /** Portable Text diff: An inline object was removed */
  'changes.portable-text.inline-object_removed': 'Fjernet inline objekt',
  /** Portable Text diff: An inline object was left unchanged */
  'changes.portable-text.inline-object_unchanged': 'Uendret inline object',
  /** Portable Text diff: Added a chunk of text */
  'changes.portable-text.text_added': 'La til tekst',
  /** Portable Text diff: Removed a chunk of text */
  'changes.portable-text.text_removed': 'Fjernet tekst',
  /** Portable Text diff: Annotation has an unknown schema type */
  'changes.portable-text.unknown-annotation-schema-type': 'Ukjent skjematype',
  /** Portable Text diff: Inline object has an unknown schema type */
  'changes.portable-text.unknown-inline-object-schema-type': 'Ukjent skjematype',
  /** Label for when the action of the change was a removal, eg a field was cleared, an array item was removed, an asset was deselected or similar */
  'changes.removed-label': 'Fjernet',
  /** Same Revision Selected description in the Review Changes pane */
  'changes.same-revision-selected-description':
    'Du har valgt samme <strong>from</strong> og <strong>to</strong> revisjon, vennligst velg forskjellige revisjoner for å sammenligne endringene mellom dem.',
  /** Same Revision Selected title in the Review Changes pane */
  'changes.same-revision-selected-title': 'Samme revisjon valgt',
  /** Title for the Review Changes pane */
  'changes.title': 'Se endringer',
  /**The title that will be shown in the badge inside the events when the item is a draft */
  'changes.versions.draft': 'Utkast',

  /** --- Common components --- */
  /** Tooltip text for context menu buttons */
  'common.context-menu-button.tooltip': 'Vis mer',
  /** Default text for dialog cancel button */
  'common.dialog.cancel-button.text': 'Avbryt',
  /** Default text for dialog confirm button */
  'common.dialog.confirm-button.text': 'Bekreft',
  /** Default text in shared loader text / spinner lockup */
  'common.loading': 'Laster',
  /** The title of the reconnecting toast */
  'common.reconnecting.toast.title': 'Prøver å koble til…',

  /** --- Configuration issues --- */
  /** Default label text on configuration issues button */
  'configuration-issues.button.label': 'Konfigurasjonsproblemer',
  /** Tooltip displayed on configuration issues button */
  'configuration-issues.button.tooltip': 'Fant konfigurasjonsproblemer',

  /** The fallback title for an ordering menu item if no localized titles are provided. */
  'default-menu-item.fallback-title': 'Sorter etter {{title}}',

  /** Title for the default ordering/SortOrder if no orderings are provided and the caption field is found */
  'default-orderings.caption': 'Sorter etter bildetekst',
  /** Title for the default ordering/SortOrder if no orderings are provided and the description field is found */
  'default-orderings.description': 'Sorter etter beskrivelse',
  /** Title for the default ordering/SortOrder if no orderings are provided and the header field is found */
  'default-orderings.header': 'Sorter etter topptekst',
  /** Title for the default ordering/SortOrder if no orderings are provided and the heading field is found */
  'default-orderings.heading': 'Sorter etter overskrift',
  /** Title for the default ordering/SortOrder if no orderings are provided and the label field is found */
  'default-orderings.label': 'Sorter etter etikett',
  /** Title for the default ordering/SortOrder if no orderings are provided and the name field is found */
  'default-orderings.name': 'Sorter etter navn',
  /** Title for the default ordering/SortOrder if no orderings are provided and the title field is found */
  'default-orderings.title': 'Sorter etter tittel',

  /** Label to show in the document footer indicating the creation date of the document */
  'document-status.created': 'Opprettet {{date}}',
  /** Label to show in the document status indicating the date of the status */
  'document-status.date': '{{date}}',
  /** Label to show in the document footer indicating the last edited date of the document */
  'document-status.edited': 'Redigert {{date}}',
  /** Label to show in the document footer indicating the document is not published*/
  'document-status.not-published': 'Ikke publisert',
  /** Label to show in the document footer indicating the published date of the document */
  'document-status.published': 'Publisert {{date}}',
  /** Label to show in the document footer indicating the revision from date of the document */
  'document-status.revision-from': 'Revisjon fra <em>{{date}}</em>',
  /** Label to show in the document footer indicating that the revision was not found */
  'document-status.revision-not-found': 'Revisjon ikke funnet',

  /** Label to indicate that a document type was not found */
  'document.type.not-found': 'Dokumenttypen "{{type}}" ble ikke funnet',

  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.duplicate-keys-alert.details.additional-description':
    'Verdien av <code>_key</code>-attributten må være en unik strengverdi.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property of each elements has been generated non-uniquely. */
  'form.error.duplicate-keys-alert.details.description':
    'Dette kan skje når elementer er laget gjennom en API-klient, og <code>_key</code>-attributten på de ulike elementene har blitt laget uten å ta unikhet i betraktning.',
  /** Developer info */
  'form.error.duplicate-keys-alert.details.title': 'Utviklerinfo',
  /** Generate unique keys */
  'form.error.duplicate-keys-alert.generate-button.text': 'Lag unike nøkler',
  /** Several items in this list share the same identifier (key). Every item must have an unique identifier. */
  'form.error.duplicate-keys-alert.summary':
    'Flere elementer i listen deler sammen nøkkel. Hvert element må ha en unik nøkkel.',
  /** Non-unique keys */
  'form.error.duplicate-keys-alert.title': 'Ikke-unike nøkler',
  /** Error text shown when a field with a given name cannot be found in the schema or is conditionally hidden but explicitly told to render  */
  'form.error.field-not-found':
    'Feltet "{{fieldName}}" ble ikke funnet som mulighet – sjekk at det er definert i skjemaet, og at det ikke er skjult.',
  /** Add missing keys */
  'form.error.missing-keys-alert.add-button.text': 'Legg til manglende nøkler',
  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.missing-keys-alert.details.additional-description':
    'Verdien av <code>_key</code>-attributten må være en unik strengverdi.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property has not been included. */
  'form.error.missing-keys-alert.details.description':
    'Dette kan skje når elementer er laget gjennom en API-klient, og <code>_key</code>-attributten ikke har blitt satt.',
  /** Developer info */
  'form.error.missing-keys-alert.details.title': 'Utviklerinfo',
  /** Some items in the list are missing their keys. This must be fixed in order to edit the list. */
  'form.error.missing-keys-alert.summary':
    'Noen element i listen mangler nøkler. Dette må rettes før listen kan redigeres.',
  /** Missing keys */
  'form.error.missing-keys-alert.title': 'Manglende nøkler',
  /** This usually happens when items are created using an API client, or when a custom input component has added invalid data to the list. */
  'form.error.mixed-array-alert.details.description':
    'Dette kan skje når elementer er laget gjennom en API-klient, eller ved bruk av en tilpasset/ikke-standard input-komponent som har lagt til ugyldig data i listen.',
  /** Developer info */
  'form.error.mixed-array-alert.details.title': 'Utviklerinfo',
  /**  Remove non-object values */
  'form.error.mixed-array-alert.remove-button.text': 'Fjern verdier som ikke er objekter',
  /** Some items in this list are not objects. This must be fixed in order to edit the list. */
  'form.error.mixed-array-alert.summary':
    'Noen elementer i denne listen er ikke objekter. Dette må fikses før du kan redigere listen.',
  /** Invalid list values */
  'form.error.mixed-array-alert.title': 'Ugyldig listeverdier',
  /** Error text shown when form is unable to find an array item at a given indexed path */
  'form.error.no-array-item-at-index':
    'Ingen element med posisjon <code>{{index}}</code> funnet i stien <code>{{path}}</code>',
  /** Error text shown when form is unable to find an array item at a given keyed path */
  'form.error.no-array-item-at-key':
    'Ingen element med `_key` <code>"{{key}}"</code> funnet i stien <code>{{path}}</code>',
  /** The title above the error call stack output related to the crash */
  'form.error.unhandled-runtime-error.call-stack.title': 'Call Stack:',
  /** The title above the error component stack provided by React's underlying ErrorBoundary component */
  'form.error.unhandled-runtime-error.component-stack.title': 'Component Stack:',
  /** The error message for the unhandled error that crashed the Input component during render */
  'form.error.unhandled-runtime-error.error-message': 'Feil: {{message}}',
  /** The title for the error card rendered inside a field in place of a crashing input */
  'form.error.unhandled-runtime-error.title': 'Unhandled Runtime Error',
  /** Form field deprecated label */
  'form.field.deprecated-label': 'Utfaset',
  /** Fallback title shown above field if it has no defined title */
  'form.field.untitled-field-label': 'Uten navn',
  /** Accessibility label for the icon that indicates the field has a validation error */
  'form.validation.has-error-aria-label': 'Har feil',
  /** Accessibility label for the icon that indicates the field has validation information */
  'form.validation.has-info-aria-label': 'Har informasjon',
  /** Accessibility label for the icon that indicates the field has a validation warning */
  'form.validation.has-warning-aria-label': 'Har advarsel',
  /** Text shown when summarizing validation information, when the field has one or more errors */
  'form.validation.summary.errors-count_one': '{{count}} feil',
  'form.validation.summary.errors-count_other': '{{count}} feil',
  /** Text shown when summarizing validation information, when the field has one or more warnings */
  'form.validation.summary.warnings-count_one': '{{count}} advarsel',
  'form.validation.summary.warnings-count_other': '{{count}} advarsler',

  /** Tooltip for free trial navbar button indicating remaining days */
  'free-trial.tooltip.days-count_one': '{{count}} dag igjen av prøveperioden',
  'free-trial.tooltip.days-count_other': '{{count}} dager igjen av prøveperioden',
  /** Tooltip for free trial navbar button, once trial has ended */
  'free-trial.tooltip.trial-finished': 'Oppgrader prosjektet ditt',

  /**
   * Label for "contact sales" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.contact-sales': 'Kontakt salg',
  /**
   * Label for "help and support" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.help-and-support': 'Hjelp og støtte',
  /**
   * Label for "join our community" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.join-our-community': 'Bli med i vårt community',
  /** Information for what the latest sanity version is */
  'help-resources.latest-sanity-version': 'Siste versjon er {{latestVersion}}',
  /** Information for what studio version the current studio is running */
  'help-resources.studio-version': 'Sanity Studio versjon {{studioVersion}}',
  /** Title for help and resources menus */
  'help-resources.title': 'Hjelp og ressurser',

  /** Text for button to cancel an ongoing upload */
  'input.files.common.cancel-upload': 'Avbryt',
  /** Text for menuitem upload button default asset source */
  'input.files.common.upload-placeholder.file-input-button.default-source.badge': 'Standard',
  /** Text for file input button in upload placeholder */
  'input.files.common.upload-placeholder.file-input-button.text': 'Last opp',
  /** Uploading <FileName/> */
  'input.files.common.upload-progress': 'Laster opp <FileName/>',
  /** The referenced document cannot be opened, because the URL failed to be resolved */
  'input.reference.document-cannot-be-opened.failed-to-resolve-url':
    'Dokumentet kan ikke åpnes (kunne ikke finne URL til Studio)',

  /** Label for adding item after a specific array item */
  'inputs.array.action.add-after': 'Legg til etter',
  /** Label for adding item before a specific array item */
  'inputs.array.action.add-before': 'Legg til før',
  /** Label for adding array item action when the schema allows for only one schema type */
  'inputs.array.action.add-item': 'Legg til',
  /**
   * Label for adding one array item action when the schema allows for multiple schema types,
   * eg. will prompt the user to select a type once triggered
   */
  'inputs.array.action.add-item-select-type': 'Legg til...',
  /** Label for copying an array item  */
  'inputs.array.action.copy': 'Kopier',
  /** Array drag handle button tooltip */
  'inputs.array.action.drag.tooltip': 'Dra for å endre rekkefølge',
  /** Label for duplicating an array item  */
  'inputs.array.action.duplicate': 'Dupliser',
  /** Label for editing the item of a specific type, eg "Edit Person" */
  'inputs.array.action.edit': 'Rediger {{itemTypeTitle}}',
  /** Label for removing an array item action  */
  'inputs.array.action.remove': 'Fjern',
  /** Label for removing action when an array item has an error  */
  'inputs.array.action.remove-invalid-item': 'Fjern',
  /** Label for viewing the item of a specific type, eg "View Person" */
  'inputs.array.action.view': 'Se {{itemTypeTitle}}',
  /** Error description for the array item tooltip that explains that the current item can still be moved or deleted but not edited since the schema definition is not found */
  'inputs.array.error.can-delete-but-no-edit-description':
    'Du kan fortsatt flytte eller slette dette elementet, men det kan ikke redigeres siden skjemadefinisjonen for typen ikke finnes.',
  /** Error label for toast when array could not resolve the initial value */
  'inputs.array.error.cannot-resolve-initial-value-title':
    'Kan ikke finne startverdi for type: {{schemaTypeTitle}}: {{errorMessage}}.',
  /** Error label for toast when trying to upload one array item of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_one':
    'Følgende element kan ikke lastes opp fordi det ikke finnes noen kjent konvertering fra innholdstypen til element i listen:',
  /** Error label for toast when trying to upload multiple array items of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_other':
    'Følgende elementer kan ikke lastes opp fordi det ikke finnes noen kjent konvertering fra innholdstypene til element i listen:',
  /** Error description for the array item tooltip that explains that the current type item is not valid for the list  */
  'inputs.array.error.current-schema-not-declare-description':
    'Den nåværende skjemaet erklærer ikke typen <code>{{typeName}}</code> som gyldig for denne listen. Dette kan bety at typen har blitt fjernet som en gyldig type, eller at noen andre har lagt den til i sitt eget lokale skjema som ennå ikke er distribuert.',
  /** Error description to show how the item is being represented in the json format */
  'inputs.array.error.json-representation-description': 'JSON-representasjon av dette elementet:',
  /** Error description for the array item tooltip that explains what the error means with more context */
  'inputs.array.error.type-is-incompatible-prompt':
    'Typen <code>{{typeName}}</code> er ikke gyldig for denne listen',
  /** Error title for when an item type within an array input is incompatible, used in the tooltip */
  'inputs.array.error.type-is-incompatible-title': 'Hvorfor skjer dette?',
  /** Error label for unexpected errors in the Array Input */
  'inputs.array.error.unexpected-error': 'Uventet feil: {{error}}',
  /** Label for the array insert menu all items filter  */
  'inputs.array.insert-menu.filter.all-items': 'Alle',
  /** Label for when the array insert menu search shows no items */
  'inputs.array.insert-menu.search.no-results': 'Ingen elementer funnet',
  /** Placeholder for the array insert menu search field */
  'inputs.array.insert-menu.search.placeholder': 'Søk',
  /** Tooltip for the array insert menu grid view toggle */
  'inputs.array.insert-menu.toggle-grid-view.tooltip': 'Bytt til rutenettvisning',
  /** Tooltip for the array insert menu list view toggle */
  'inputs.array.insert-menu.toggle-list-view.tooltip': 'Bytt til listevisning',
  /** Label for when the array input doesn't have any items */
  'inputs.array.no-items-label': 'Ingen elementer',
  /** Label for read only array fields */
  'inputs.array.read-only-label': 'Dette feltet er skrivebeskyttet',
  /** Label for when the array input is resolving the initial value for the item */
  'inputs.array.resolving-initial-value': 'Finner startverdi…',
  /** Tooltip content when boolean input is disabled */
  'inputs.boolean.disabled': 'Deaktivert',
  /** Warning label when selected datetime is in the past */
  'inputs.dateTime.past-date-warning': 'Velg en dato i fremtiden.',
  /** Placeholder value for datetime input */
  'inputs.datetime.placeholder': 'f.eks. {{example}}',
  /** Acessibility label for button to open file options menu */
  'inputs.file.actions-menu.file-options.aria-label': 'Åpne filinnstillingsmeny',
  /** Browse */
  'inputs.file.browse-button.text': 'Bla gjennom',
  /** Select file */
  'inputs.file.dialog.title': 'Velg fil',
  /** Unknown member kind: `{{kind}}` */
  'inputs.file.error.unknown-member-kind': 'Ukjent medlemstype: {{kind}}',
  /** The value of this field is not a valid file. Resetting this field will let you choose a new file. */
  'inputs.file.invalid-file-warning.description':
    'Verdien i dette feltet er ikke en gyldig fil. Ved å nullstille verdien vil du kunne velge en ny fil.',
  /** Reset value */
  'inputs.file.invalid-file-warning.reset-button.text': 'Nullstill verdi',
  /** Invalid file value */
  'inputs.file.invalid-file-warning.title': 'Ugyldig filverdi',
  /** Select */
  'inputs.file.multi-browse-button.text': 'Velg',
  /** The upload could not be completed at this time. */
  'inputs.file.upload-failed.description': 'Opplastingen kunne ikke fullføres akkurat nå.',
  /** Upload failed */
  'inputs.file.upload-failed.title': 'Opplasting mislykkes',
  /** Clear field */
  'inputs.files.common.actions-menu.clear-field.label': 'Tøm felt',
  /** Copy URL */
  'inputs.files.common.actions-menu.copy-url.label': 'Kopier URL',
  /** Download */
  'inputs.files.common.actions-menu.download.label': 'Last ned',
  /** The URL is copied to the clipboard */
  'inputs.files.common.actions-menu.notification.url-copied':
    'URL-en er kopiert til utklippstavlen',
  /** Replace */
  'inputs.files.common.actions-menu.replace.label': 'Erstatt',
  /** Upload */
  'inputs.files.common.actions-menu.upload.label': 'Last opp',
  /** Drop to upload */
  'inputs.files.common.drop-message.drop-to-upload': 'Slipp for å laste opp',
  /** Drop to upload `{{count}}` file */
  'inputs.files.common.drop-message.drop-to-upload-multi_one':
    'Slipp for å laste opp {{count}} fil',
  /** Drop to upload `{{count}}` files */
  'inputs.files.common.drop-message.drop-to-upload-multi_other':
    'Slipp for å laste opp {{count}} filer',
  /** Can't upload this file here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_one':
    'Kan ikke laste opp denne filen her',
  /** Can't upload any of these files here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_other':
    'Kan ikke laste opp noen av disse filene her',
  /** `{{count}}` file can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_one':
    '{{count}} fil kan ikke bli lastet opp her',
  /** `{{count}}` files can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_other':
    '{{count}} filer kan ikke bli lastet opp her',
  /** Cannot upload `{{count}}` files */
  'inputs.files.common.placeholder.cannot-upload-some-files_one': 'Kan ikke laste opp fil',
  'inputs.files.common.placeholder.cannot-upload-some-files_other':
    'Kan ikke laste opp {{count}} filer',
  /** Drag or paste type here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_file': 'Dra eller lim inn fil her',
  /** Drag or paste image here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_image': 'Dra eller lim inn bilde her',
  /** Drop to upload file */
  'inputs.files.common.placeholder.drop-to-upload_file': 'Slipp for å laste opp fil',
  /** Drop to upload image */
  'inputs.files.common.placeholder.drop-to-upload_image': 'Slipp for å laste opp bilde',
  /** Read only */
  'inputs.files.common.placeholder.read-only': 'Skrivebeskyttet',
  /** Select asset source destination for files to upload */
  'inputs.files.common.placeholder.select-asset-source-upload-destination': 'Last opp filer til:',
  /** Can't upload files here */
  'inputs.files.common.placeholder.upload-not-supported': 'Kan ikke laste opp filer her',
  /** Clear upload */
  'inputs.files.common.stale-upload-warning.clear': 'Fjern opplasting',
  /** An upload has made no progress for at least `{{staleThresholdMinutes}}` minutes and likely got interrupted. You can safely clear the incomplete upload and try uploading again. */
  'inputs.files.common.stale-upload-warning.description':
    'En opplasting har ikke gjort fremskritt på minst {{staleThresholdMinutes}} minutter og ble sannsynligvis avbrutt. Du kan trygt fjerne den ufullstendige opplastingen og prøve å laste opp på nytt.',
  /** Incomplete upload */
  'inputs.files.common.stale-upload-warning.title': 'Ufullstendig opplasting',
  /** Tooltip text for action to crop image */
  'inputs.image.actions-menu.crop-image-tooltip': 'Beskjær bilde',
  /** Accessibility label for button to open image edit dialog */
  'inputs.image.actions-menu.edit-details.aria-label': 'Åpne bilderedigeringsdialog',
  /** Accessibility label for button to open image options menu */
  'inputs.image.actions-menu.options.aria-label': 'Åpne bildeinnstillingsmeny',
  /** Select */
  'inputs.image.browse-menu.text': 'Velg',
  /** Cannot upload this file here */
  'inputs.image.drag-overlay.cannot-upload-here': 'Kan ikke laste opp denne filen her',
  /** Drop image to upload */
  'inputs.image.drag-overlay.drop-to-upload-image': 'Slipp bilde for å laste opp',
  /** This field is read only */
  'inputs.image.drag-overlay.this-field-is-read-only': 'Dette feltet er skrivebeskyttet',
  /** Unknown member kind: `{{kind}}` */
  'inputs.image.error.unknown-member-kind': 'Ukjent medlemstype: {{kind}}',
  /** Edit hotspot and crop */
  'inputs.image.hotspot-dialog.title': 'Rediger fokuspunkt og beskjær',
  /** The value of this field is not a valid image. Resetting this field will let you choose a new image. */
  'inputs.image.invalid-image-warning.description':
    'Verdien i dette feltet er ikke et gyldig bilde. Ved å tilbakestille dette feltet kan du velge et nytt bilde.',
  /** Reset value */
  'inputs.image.invalid-image-warning.reset-button.text': 'Nullstill verdi',
  /** Invalid image value */
  'inputs.image.invalid-image-warning.title': 'Ugyldig bildeverdi',
  /** Preview of uploaded image */
  'inputs.image.preview-uploaded-image': 'Forhåndsvisning av opplastet bilde',
  /** The upload could not be completed at this time. */
  'inputs.image.upload-error.description':
    'Opplastingen kunne ikke fullføres på dette tidspunktet.',
  /** Upload failed */
  'inputs.image.upload-error.title': 'Opplasting mislyktes',
  /** Adjust the rectangle to crop image. Adjust the circle to specify the area that should always be visible. */
  'inputs.imagetool.description':
    'Juster rektangelet for å beskjære bildet. Juster sirkelen for å spesifisere området som alltid skal være synlig.',
  /** Error: `{{errorMessage}}` */
  'inputs.imagetool.load-error': 'Feil: {{errorMessage}}',
  /** Hotspot & Crop */
  'inputs.imagetool.title': 'Fokuspunkt & beskjæring',
  /** Warnings displayed to developers when using the crop/hotspot tool on vector images, notifying them that crops/hotspot are not respected when serving the image in vector format. For the crop/hotspot to apply, images must be served in a raster format such as JPG or PNG, by appending eg `fm=jpg` to the image url, or calling `format('jpg')` if using `@sanity/image-url` */
  'inputs.imagetool.vector-warning.developer-info':
    "Bildetjenesten støtter ikke hotspot og beskjæring for vektorformater. For å bruke disse funksjonene, sørg for at dette bildet blir levert i et av de støttede rasterformatene. For eksempel: <code>fm=jpg</code> i <ImageUrlDocumentationLink>bilde-URL-en</ImageUrlDocumentationLink>, eller kall <code>.format('png')</code> med <ImageUrlPackageDocumentationLink>@sanity/image-url</ImageUrlPackageDocumentationLink>.",
  /** See developer info */
  'inputs.imagetool.vector-warning.expand-developer-info': 'Se utviklerinfo',
  /** Gotcha: Serving vector images with hotspot and crop from the Sanity Image API */
  'inputs.imagetool.vector-warning.title':
    'Advarsel: Hotspot og beskjæring blir potensielt ikke brukt der dette bildet blir presentert.',
  /** Convert to `{{targetType}}` */
  'inputs.invalid-value.convert-button.text': 'Konverter til <code>{{targetType}}</code>',
  /** The current value (<code>`{{actualType}}`</code>) */
  'inputs.invalid-value.current-type': 'Den nåværende verdien (<code>{{actualType}}</code>)',
  /** The property value is stored as a value type that does not match the expected type. */
  'inputs.invalid-value.description':
    'Verdien til dette feltet er lagret som en verdi som ikke samsvarer med den forventede typen.',
  /** The value of this property must be of type <code>`{{validType}}`</code> according to the schema. */
  'inputs.invalid-value.details.description':
    'Verdien av dette feltet må være av typen <code>{{validType}}</code> i henhold til skjemaet.',
  /** Only the following types are valid here according to schema: */
  'inputs.invalid-value.details.multi-type-description':
    'Bare følgende typer er gyldige her i henhold til skjemaet:',
  /** Mismatching value types typically occur when the schema has recently been changed. */
  'inputs.invalid-value.details.possible-reason':
    'Denne typen feil oppstår vanligvis når skjemaet nylig har blitt endret.',
  /** Developer info */
  'inputs.invalid-value.details.title': 'Utviklerinfo',
  /** -- Invalid Value Input -- */
  /** Reset value */
  'inputs.invalid-value.reset-button.text': 'Nullstill verdi',
  /** Invalid property value */
  'inputs.invalid-value.title': 'Ugyldig verdi',
  /** Title for the "All fields" field group */
  'inputs.object.field-group-tabs.all-fields-title': 'Alle felt',
  /** Aria label for the "Field groups" select control on smaller screens */
  'inputs.object.field-group-tabs.aria-label': 'Feltgrupper',
  /** Read-only field description */
  'inputs.object.unknown-fields.read-only.description':
    'Dette feltet er markert som <strong>skrivebeskyttet</strong> i skjemadefinisjonen, og kan ikke bli nullstillt. Hvis du ønsker å kunne fjerne verdien i studioet, må <code>readOnly</code> innstillingen fjernes eller settes til <code>false</code> i feltdefinisjonen.',
  /** Remove field */
  'inputs.object.unknown-fields.remove-field-button.text': 'Fjern felt',
  /** Encountered `{{count}}` fields that are not defined in the schema. */
  'inputs.object.unknown-fields.warning.description_one':
    'Møtte på {{count}} felt som ikke er definert i skjemaet.',
  'inputs.object.unknown-fields.warning.description_other':
    'Møtte på {{count}} felter som ikke er definert i skjemaet.',
  /** Detailed description of unknown field warning */
  'inputs.object.unknown-fields.warning.details.description_one':
    'Dette feltet er ikke definert i dokumentets skjema, noe som kan bety at feltdefinisjonen har blitt fjernet eller at noen andre har lagt det til i sitt eget lokale prosjekt og ennå ikke har distribuert endringene sine.',
  'inputs.object.unknown-fields.warning.details.description_other':
    'Disse feltene er ikke definert i dokumentets skjema, noe som kan bety at feltdefinisjonene har blitt fjernet eller at noen andre har lagt dem til i sitt eget lokale prosjekt og ennå ikke har distribuert endringene sine.',
  /** Developer info */
  'inputs.object.unknown-fields.warning.details.title': 'Utviklerinfo',
  /** Unknown field found */
  'inputs.object.unknown-fields.warning.title_one': 'Ukjent felt funnet',
  'inputs.object.unknown-fields.warning.title_other': 'Ukjente felter funnet',
  /** Collapse the editor to save screen space  */
  'inputs.portable-text.action.collapse-editor': 'Reduser',
  /** Aria label for action to edit an existing annotation */
  'inputs.portable-text.action.edit-annotation-aria-label': 'Rediger annotasjon',
  /** Expand the editor to give more editing space */
  'inputs.portable-text.action.expand-editor': 'Utvid',
  /** Label label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block': 'Sett inn {{typeName}}',
  /** Accessibility label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block-aria-label': 'Sett inn {{typeName}} (blokk)',
  /** Label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object': 'Sett inn {{typeName}}',
  /** Accessibility label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object-aria-label': 'Sett inn {{typeName}} (i linjen)',
  /** Aria label for action to remove an annotation */
  'inputs.portable-text.action.remove-annotation-aria-label': 'Fjern annotasjon',
  /** Label for activate on focus with context of click and not focused */
  'inputs.portable-text.activate-on-focus-message_click': 'Klikk for å aktivere',
  /** Label for activate on focus with context of click and focused */
  'inputs.portable-text.activate-on-focus-message_click-focused':
    'Klikk eller trykk på mellomrom for å aktivere',
  /** Label for activate on focus with context of tap and not focused */
  'inputs.portable-text.activate-on-focus-message_tap': 'Trykk for å aktivere',
  /** Aria label for the annotation object */
  'inputs.portable-text.annotation-aria-label': 'Annotasjonsobjekt',
  /** Title for dialog that allows editing an annotation */
  'inputs.portable-text.annotation-editor.title': 'Rediger {{schemaType}}',
  /** Title of the default "link" annotation */
  'inputs.portable-text.annotation.link': 'Lenke',
  /** Aria label for the block object */
  'inputs.portable-text.block.aria-label': 'Blokkobjekt',
  /** Label for action to edit a block item, in the case where it is editable */
  'inputs.portable-text.block.edit': 'Rediger',
  /** Accessibility label for the button that opens the actions menu on blocks */
  'inputs.portable-text.block.open-menu-aria-label': 'Åpne meny',
  /** Label for action to open a reference, in the case of block-level reference types */
  'inputs.portable-text.block.open-reference': 'Åpne referanse',
  /** Label for action to remove a block item */
  'inputs.portable-text.block.remove': 'Fjern',
  /** Label for action to view a block item, in the case where it is read-only and thus cannot be edited */
  'inputs.portable-text.block.view': 'Vis',
  /** Title of the "code" decorator */
  'inputs.portable-text.decorator.code': 'Kode',
  /** Title of the "em" (emphasis) decorator */
  'inputs.portable-text.decorator.emphasis': 'Kursiv',
  /** Title of the "strike-through" decorator */
  'inputs.portable-text.decorator.strike-through': 'Gjennomstreket',
  /** Title of the "strong" decorator */
  'inputs.portable-text.decorator.strong': 'Fet',
  /** Title of the "underline" decorator */
  'inputs.portable-text.decorator.underline': 'Understreket',
  /** Placeholder text for when the editor is empty */
  'inputs.portable-text.empty-placeholder': 'Tom',
  /** Aria label for the block object */
  'inputs.portable-text.inline-block.aria-label': 'Innebygd objekt',
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
    'MERK: Det er generelt sett trygt å utføre handlingen over, men om du er i tvil, ta kontakt med de som er ansvarlige for konfigurasjon av studioet.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.action': 'Fjern objektet',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.description':
    'Element med nøkkel <code>{{childKey}} i blokk med nøkkel <code>{{key}}</code> er av typen <code>{{childType}}</code>, som ikke er tillatt av skjemaet.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.action': 'Fjern blokken',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.description':
    'Blokk med nøkkel <code>{{key}}</code> er av typen <code>{{typeName}}</code>, som ikke er tillatt av skjemaet.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.action': 'Sett inn tomt tekstfelt',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.description':
    'Tekstblokk med nøkkel <code>{{key}}</code> har ingen <code>text</code>-attributt.',
  /** Label for the button to ignore invalid values in the Portable Text editor */
  'inputs.portable-text.invalid-value.ignore-button.text': 'Ignorer',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.action':
    'Bruk type <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.description':
    'Blokk med nøkkel <code>{{key}}</code> har et ugyldig typenavn. Ifølge skjemaet skal det være <code>{{expectedTypeName}}</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.action': 'Nullstill tekst',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.description':
    'Element med nøkkel <code>{{childKey}} i blokk med nøkkel <code>{{key}}</code> har en manglende eller ugyldig <code>text</code>-attributt.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.action':
    'Bruk type <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.description':
    'Blokk med nøkkel <code>{{key}}</code> mangler et typenavn. Ifølge skjemaet skal det være <code>{{expectedTypeName}}</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.action': 'Sett tilfeldig nøkkel',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.description':
    'Element med posisjon <code>{{index}}</code> i blokk med nøkkel <code>{{key}}</code> mangler <code>_key</code>-attributten.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.action': 'Fjern objektet',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.description':
    'Element med nøkkel <code>{{childKey}} i blokk med nøkkel <code>{{key}}</code> mangler <code>_type</code>-attributten.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.action': 'Sett tilfeldig nøkkel',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.description':
    'Blokken med posisjon <code>{{index}}</code> mangler den nødvendige <code>_key</code>-attributten.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.action': 'Fjern blokken',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.description':
    'Tekstblokk med nøkkel <code>{{key}}</code> har en ugyldig eller manglende <code>children</code>-attributt.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.action': 'Legg til attributt',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.description':
    'Tekstblokk med nøkkel <code>{{key}}</code> har en ugyldig eller manglende <code>markDefs</code>-attributt.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.action': 'Fjern blokken',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.description':
    'Blokk med nøkkel <code>{{key}}</code> mangler et typenavn.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.action': 'Fjern elementet',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.description':
    'Element med posisjon <code>{{index}}</code> i blokk med nøkkel <code>{{key}}</code> er ikke et objekt.',
  /** Action presented when the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.action': 'Nullstill',
  /** Text explaining that the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.description':
    'Verdien må være et array av Portable Text-blokker, eller undefined.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.action': 'Fjern elementet',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.description':
    'Elementet med posisjon <code>{{index}}</code> er ikke et objekt.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.action': 'Fjern ugyldige merknader',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.description':
    'Tekstblokk med nøkkel <code>{{key}}</code> inneholder merknader <code>({{orphanedMarks, list}})</code> som ikke er tillatt av skjemaet.',
  /** Title for the alert indicating that the Portable Text field has an invalid value */
  'inputs.portable-text.invalid-value.title': 'Ugyldig verdi',
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
  'inputs.portable-text.style.multiple': 'Flere',
  /** Title of fallback when no style is given for a block */
  'inputs.portable-text.style.none': 'Ingen stil',
  /** Title of the "normal" block style */
  'inputs.portable-text.style.normal': 'Normal',
  /** Title of the "quote" block style */
  'inputs.portable-text.style.quote': 'Sitat',
  /** Label for action to clear the current value of the reference field */
  'inputs.reference.action.clear': 'Tøm',
  /** Label for action to copy the current item (used within arrays) */
  'inputs.reference.action.copy': 'Kopier',
  /** Label for action to create a new document from the reference input */
  'inputs.reference.action.create-new-document': 'Opprett ny',
  /** Label for action to create a new document from the reference input, when there are multiple templates or document types to choose from */
  'inputs.reference.action.create-new-document-select': 'Opprett ny…',
  /** Label for action to duplicate the current item to a new item (used within arrays) */
  'inputs.reference.action.duplicate': 'Dupliser',
  /** Label for action that opens the referenced document in a new tab */
  'inputs.reference.action.open-in-new-tab': 'Åpne i ny fane',
  /** Label for action to remove the reference from an array */
  'inputs.reference.action.remove': 'Fjern',
  /** Label for action to replace the current value of the field */
  'inputs.reference.action.replace': 'Erstatt',
  /** Label for action to cancel a previously initiated replace action  */
  'inputs.reference.action.replace-cancel': 'Avbryt erstatning',
  /** The cross-dataset reference field currently has a reference, but the feature has been disabled since it was created. This explains what can/cannot be done in its current state. */
  'inputs.reference.cross-dataset.feature-disabled-actions':
    'Du kan fremdeles tømme feltets referanse, men det kan ikke endres til et annet dokument så lenge funksjonen er deaktivert.',
  /** A cross-dataset reference field exists but the feature has been disabled. A <DocumentationLink> component is available. */
  'inputs.reference.cross-dataset.feature-disabled-description':
    'Denne funksjonen har blitt deaktivert. Les hvordan den kan reaktivere den <DocumentationLink>i dokumentasjonen</DocumentationLink>.',
  /** Title for a warning telling the user that the current project does not have the "cross dataset references" feature */
  'inputs.reference.cross-dataset.feature-unavailable-title':
    'Funksjon utilgjengelig: Referanser på tvers av datasett',
  /** The cross-dataset reference points to a document with an invalid type  */
  'inputs.reference.cross-dataset.invalid-type':
    'Det referte dokumentet har ugyldig type ({{typeName}}) <JsonValue/>',
  /** The referenced document will open in a new tab (due to external studio) */
  'inputs.reference.document-opens-in-new-tab': 'Dokumentet åpnes i ny fane',
  /** Error title for when the document is unavailable (for any possible reason) */
  'inputs.reference.error.document-unavailable-title': 'Dokument ikke tilgjengelig',
  /** Error title for when the referenced document failed to be loaded */
  'inputs.reference.error.failed-to-load-document-title': 'Kunne ikke laste referert dokument',
  /** Error title for when the reference search returned a document that is not an allowed type for the field */
  'inputs.reference.error.invalid-search-result-type-title':
    'Søket returnerte en type som ikke er gyldig for denne referansen: "{{returnedType}}"',
  /** Error description for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-description':
    'Referert dokument (<code>{{documentId}}</code>) er av type <code>{{actualType}}</code>. Ifølge skjemaet kan refererte dokumenter bare være av type <AllowedTypes />.',
  /** Error title for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-title': 'Dokument av ugyldig type',
  /** Error description for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-description':
    'Det refererte dokumentet kunne ikke åpnes på grunn av manglende tillatelser',
  /** Error title for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-title': 'Manglende tillatelser',
  /** Error description for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-description':
    'Det refererte dokumentet eksisterer ikke (ID: <code>{{documentId}}</code>). Du kan enten fjerne referansen eller erstatte den med et annet dokument.',
  /** Error title for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-title': 'Ikke funnet',
  /** Label for button that clears the reference when it points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document.clear-button-label': 'Tøm',
  /** Error title for when the search for a reference failed. Note that the message sent by the backend may not be localized. */
  'inputs.reference.error.search-failed-title': 'Referansesøk mislyktes',
  /** Label for when the GDR points to an invalid type  */
  'inputs.reference.global.invalid-type':
    'Det refererte dokumentet er av ugyldig type ({{typeName}})',
  /** Alternative text for the image shown in cross-dataset reference input */
  'inputs.reference.image-preview-alt-text': 'Forhåndsvisning av referert dokument',
  /** Description for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-description':
    '<strong>{{referencedDocument}}</strong> er publisert og denne referansen bør nå fullføres.',
  /** Title for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-title': 'Fullfør referanse',
  /** Description for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-description':
    '<strong>{{referencedDocument}}</strong> er publisert og denne referansen bør nå gjøres om til en sterk referanse.',
  /** Title for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-title': 'Gjør om til sterk referanse',
  /** Label for button that triggers the action that strengthen a reference */
  'inputs.reference.incomplete-reference.strengthen-button-label': 'Gjør om til sterk referanse',
  /** Label for button that triggers a retry attempt for reference metadata  */
  'inputs.reference.metadata-error.retry-button-label': 'Prøv på nytt',
  /** Title for alert shown when reference metadata fails to be loaded */
  'inputs.reference.metadata-error.title': 'Kan ikke laste metadata for referansen',
  /** Message shown when no documents were found that matched the given search string */
  'inputs.reference.no-results-for-query': 'Ingen resultater for <strong>«{{searchTerm}}»</strong>',
  /** Text for tooltip showing when a document was edited, using relative time (eg "how long ago was it edited?") */
  'inputs.reference.preview.edited-at-time': 'Redigert <RelativeTime/>',
  /** Accessibility label for icon indicating that document does _not_ have any unpublished changes */
  'inputs.reference.preview.has-no-unpublished-changes-aria-label': 'Ingen upubliserte endringer',
  /** Accessibility label for icon indicating that document has unpublished changes */
  'inputs.reference.preview.has-unpublished-changes-aria-label': 'Redigert',
  /** Accessibility label for icon indicating that document does _not_ have a published version */
  'inputs.reference.preview.is-not-published-aria-label': 'Ikke publisert',
  /** Accessibility label for icon indicating that document has a published version */
  'inputs.reference.preview.is-published-aria-label': 'Publisert',
  /** Text for tooltip indicating that a document has no unpublished edits */
  'inputs.reference.preview.no-unpublished-edits': 'Ingen upubliserte endringer',
  /** Text for tooltip indicating that a document has not yet been published */
  'inputs.reference.preview.not-published': 'Ikke publisert',
  /** Text for tooltip showing when a document was published, using relative time (eg "how long ago was it published?") */
  'inputs.reference.preview.published-at-time': 'Publisert <RelativeTime/>',
  /** The referenced document no longer exist and might have been deleted (for weak references) */
  'inputs.reference.referenced-document-does-not-exist':
    'Det refererte dokumentet finnes ikke lenger og kan være slettet (dokument-ID: <code>{{documentId}}</code>).',
  /** The referenced document could not be displayed to the user because of insufficient permissions */
  'inputs.reference.referenced-document-insufficient-permissions':
    'Det refererte dokumentet kunne ikke lastes på grunn av manglende tilgang',
  /** Label for when the reference input is resolving the initial value for an item */
  'inputs.reference.resolving-initial-value': 'Finner startverdi…',
  /** Placeholder shown in a reference input with no current value */
  'inputs.reference.search-placeholder': 'Skriv for å søke',
  /** Explanation of the consequences of leaving the reference as strong instead of weak */
  'inputs.reference.strength-mismatch.is-strong-consquences':
    'Det vil ikke være mulig å slette det refererte dokumentet uten først å fjerne denne referansen eller gjøre den om til en svak referanse.',
  /** Description for alert shown when a reference is supposed to be weak, but the actual value is strong */
  'inputs.reference.strength-mismatch.is-strong-description':
    'Denne referansen er <em>sterk</em>, men ifølge gjeldende skjema skal den være <em>svak</em>.',
  /** Explanation of the consequences of leaving the reference as weak instead of strong */
  'inputs.reference.strength-mismatch.is-weak-consquences':
    'Dette gjør det mulig å slette det refererte dokumentet uten å først fjerne denne referansen, noe som etterlater dette feltet som en tom peker.',
  /** Description for alert shown when a reference is supposed to be strong, but the actual value is weak */
  'inputs.reference.strength-mismatch.is-weak-description':
    'Denne referansen er <em>svak</em>, men ifølge gjeldende skjema skal den være <em>sterk</em>.',
  /** Label for button that triggers the action that strengthens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.strengthen-button-label': 'Gjør om til sterk referanse',
  /** Title for alert shown when a reference is supposed to be weak/strong, but the actual value is the opposite of what it is supposed to be */
  'inputs.reference.strength-mismatch.title': 'Avvik i referansestyrke',
  /** Label for button that triggers the action that weakens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.weaken-button-label': 'Gjør om til svak referanse',
  /** Action message for generating the slug */
  'inputs.slug.action.generate': 'Generer',
  /** Loading message for when the input is actively generating a slug */
  'inputs.slug.action.generating': 'Genererer…',
  /** Error message for when the source to generate a slug from is missing */
  'inputs.slug.error.missing-source':
    'Kilde mangler. Sjekk `source` på skjematypen «{{schemaType}}»',
  /** Placeholder for an empty tag input */
  'inputs.tags.placeholder': 'Skriv inn tagg og trykk ENTER…',
  /** Placeholder for an empty tag input on touch devices */
  'inputs.tags.placeholder_touch': 'Skriv inn tagg…',
  /** Convert to `{{targetType}}` */
  'inputs.untyped-value.convert-button.text': 'Konverter til <code>{{targetType}}</code>',
  /** Encountered an object value without a <code>_type</code> property. */
  'inputs.untyped-value.description': 'Møtte på en objektverdi uten <code>_type</code>-attributt.',
  /** Either remove the <code>name</code> property of the object declaration, or set <code>_type</code> property on items. */
  'inputs.untyped-value.details.description':
    'Enten fjern <code>name</code>-attributtet fra objektdefinisjonen, eller sett <code>_type</code>-attributtet på elementene.',
  /** Current value (<code>object</code>): */
  'inputs.untyped-value.details.json-dump-prefix': 'Nåværende verdi (<code>object</code>):',
  /** The following types are valid here according to schema: */
  'inputs.untyped-value.details.multi-type-description':
    'Følgende typer er gyldige her i henhold til skjemaet:',
  /** Developer info */
  'inputs.untyped-value.details.title': 'Utviklerinfo',
  /** Property value missing <code>_type</code> */
  'inputs.untyped-value.title': 'Verdi mangler <code>_type</code>',
  /** Unset value */
  'inputs.untyped-value.unset-item-button.text': 'Fjern verdi',

  /** The fallback explanation if no context is provided */
  'insufficient-permissions-message.not-authorized-explanation':
    'Du har ikke tilgang til denne funksjonen.',
  /** The explanation when unable to create any document at all */
  'insufficient-permissions-message.not-authorized-explanation_create-any-document':
    'Du har ikke tilgang til å opprette et dokument.',
  /** The explanation when unable to create a particular document */
  'insufficient-permissions-message.not-authorized-explanation_create-document':
    'Du har ikke tilgang til å opprette dette dokumentet.',
  /** The explanation when unable to create a particular type of document */
  'insufficient-permissions-message.not-authorized-explanation_create-document-type':
    'Du har ikke tilgang til å opprette denne typen dokument.',
  /** The explanation when unable to create a new reference in a document */
  'insufficient-permissions-message.not-authorized-explanation_create-new-reference':
    'Du har ikke tilgang til å opprette en ny referanse.',
  /** The explanation when unable to delete a particular document */
  'insufficient-permissions-message.not-authorized-explanation_delete-document':
    'Du har ikke tilgang til å slette dette dokumentet.',
  /** The explanation when unable to delete a schedule on scheduled publishing */
  'insufficient-permissions-message.not-authorized-explanation_delete-schedules':
    'Du har ikke tillatelse til å slette publiseringsplaner.',
  /** The explanation when unable to discard changes in a particular document */
  'insufficient-permissions-message.not-authorized-explanation_discard-changes':
    'Du har ikke tilgang til å forkaste endringer i dette dokumentet.',
  /** The explanation when unable to duplicate a particular document */
  'insufficient-permissions-message.not-authorized-explanation_duplicate-document':
    'Du har ikke tilgang til å duplisere dette dokumentet.',
  /** The explanation when unable to edit a schedule on scheduled publishing */
  'insufficient-permissions-message.not-authorized-explanation_edit-schedules':
    'Du har ikke tillatelse til å redigere publiseringsplaner.',
  /** The explanation when unable to execute a schedule on scheduled publishing */
  'insufficient-permissions-message.not-authorized-explanation_execute-schedules':
    'Du har ikke tillatelse til å utføre publiseringsplaner.',
  /** The explanation when unable to publish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_publish-document':
    'Du har ikke tilgang til å publisere dette dokumentet.',
  /** The explanation when unable to unpublish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_unpublish-document':
    'Du har ikke tilgang til å avpublisere dette dokumentet.',
  /** Appears after the not-authorized message. Lists the current roles. */
  'insufficient-permissions-message.roles': 'Dine roller: <Roles/>',
  /** The title for the insufficient permissions message component */
  'insufficient-permissions-message.title': 'Utilstrekkelig tilgang',

  /** Unexpected error: `{{error}}` */
  'member-field-error.unexpected-error': 'Uforventet feil: {{error}}',

  /** Text shown in warning when browser is using HTTP1 to communicate with the Sanity API */
  'network-check.slow-protocol-warning.description':
    'Nettleseren din bruker et utdatert HTTP-protokoll for å kommunisere med Sanity. Dette kan føre til betydelig redusert ytelse.',
  /** Text for link that takes the user to the Sanity documentation to learn more about the HTTP1 issue */
  'network-check.slow-protocol-warning.learn-more-button.text': 'Les mer',
  /** Text for link that takes the user to the Sanity documentation to learn more about the HTTP1 issue */
  'network-check.slow-protocol-warning.snooze-button.text': 'Ikke vis igjen for denne økten',
  /** Title text for the warning dialog when browser is using HTTP1 to communicate with the Sanity API */
  'network-check.slow-protocol-warning.title': 'Du har bremsene på',

  /** Button label for "Create new document" button */
  'new-document.button': 'Opprett',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are templates/types available for creation
   */
  'new-document.create-new-document-label': 'Nytt dokument…',
  /** Placeholder for the "filter" input within the new document menu */
  'new-document.filter-placeholder': 'Filtrér',
  /** Loading indicator text within the new document menu */
  'new-document.loading': 'Laster…',
  /** Accessibility label for the list displaying options in the new document menu */
  'new-document.new-document-aria-label': 'Nytt dokument',
  /** Message for when there are no document type options in the new document menu */
  'new-document.no-document-types-found': 'Ingen dokumenttyper funnet',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are no templates/types to create from
   */
  'new-document.no-document-types-label': 'Ingen dokumenttyper',
  /** Message for when no results are found for a specific search query in the new document menu */
  'new-document.no-results': 'Ingen resultater for <strong>«{{searchQuery}}»</strong>',
  /** Aria label for the button that opens the "Create new document" popover/dialog */
  'new-document.open-dialog-aria-label': 'Opprett nytt dokument',
  /** Title for "Create new document" dialog */
  'new-document.title': 'Opprett nytt dokument',

  /** Label for button that will make the browser reload when users' studio version is out-of-date */
  'package-version.new-package-available.reload-button': 'Last siden på nytt',
  /** Title of the alert for studio users when packages in their studio are out-of-date */
  'package-version.new-package-available.title': 'Sanity Studio ble oppdatert',

  /** Label for action to invite members to the current studio project */
  'presence.action.manage-members': 'Administrer medlemmer',
  /** Accessibility label for presence menu button */
  'presence.aria-label': 'Hvem er her',
  /** Message description for when no one else is currently present */
  'presence.no-one-else-description': 'Inviter folk til prosjektet for å se deres onlinestatus.',
  /** Message title for when no one else is currently present */
  'presence.no-one-else-title': 'Ingen andre er her',
  /** Message for when a user is not in a document (displayed in the global presence menu) */
  'presence.not-in-a-document': 'Ikke i et dokument',
  /** Tooltip content text for presence menu button */
  'presence.tooltip-content': 'Hvem er her',

  /** Fallback title shown when a preview does not provide a title */
  'preview.default.title-fallback': 'Uten navn',
  /** Fallback preview value for types that have "no value" (eg null, undefined) */
  'preview.fallback.no-value': '(ingen verdi)',
  /** Alternative text for image being shown while image is being uploaded, in previews */
  'preview.image.file-is-being-uploaded.alt-text': 'Bildet blir lastet opp',

  /* Relative time, just now */
  'relative-time.just-now': 'akkurat nå',

  /** Action message to add document to new release */
  'release.action.add-to-new-release': 'Legg til i utgivelse',
  /** Action message to add document to release */
  'release.action.add-to-release': 'Legg til i {{title}}',
  /** Action message for when document is already in release  */
  'release.action.already-in-release': 'Allerede i utgivelse {{title}}',
  /** Action message for when you click to view all versions you can copy the current document to */
  'release.action.copy-to': 'Kopier versjon til',
  /** Action message for creating new releases */
  'release.action.create-new': 'Ny utgivelse',
  /** Action message for when document is already in release  */
  'release.action.discard-version': 'Forkast versjon',
  /** Description for toast when version discarding failed */
  'release.action.discard-version.failure': 'Klarte ikke å forkaste versjon',
  /** Action message for when a new release is created off an existing version, draft or published document */
  'release.action.new-release': 'Ny utgivelse',
  'release.action.new-release.limit-reached_other': undefined, // 'This workspace is limited to {{count}} releases'
  /** Tooltip message for not having permissions for creating new releases */
  'release.action.permission.error': 'Du har ikke tillatelse til å utføre denne handlingen',
  /** Error message description for when a version is reverted from being unpublished */
  'release.action.revert-unpublish-version.failure.description': undefined, // 'Please try again or check your connection. The document is still going to be unpublished upon release.'
  /** Error message title for when a version is reverted from being unpublished */
  'release.action.revert-unpublish-version.failure.title': undefined, // 'Failed to revert from setting to unpublish on release.'
  /** Action message description for when a version is reverted from being unpublished */
  'release.action.revert-unpublish-version.success.description': undefined, // 'You can now edit this version.'
  /** Action message title for when a version is reverted from being unpublished */
  'release.action.revert-unpublish-version.success.title': undefined, // 'Successfully reverted from setting to unpublish on release.'
  /** Error message for when a version is set to be unpublished */
  'release.action.unpublish-version.failure':
    'Klarte ikke å sette versjonen til å være upublisert på utgivelsen',
  /** Action message for when a version is set to be unpublished successfully */
  'release.action.unpublish-version.success':
    'Vellykket satt <strong>{{title}}</strong> til å være upublisert på utgivelsen',
  /** Action message for when the view release is pressed */
  'release.action.view-release': 'Vis utgivelse',
  /** Label for banner when release is scheduled */
  'release.banner.scheduled-for-publishing-on': 'Planlagt for publisering den {{date}}',
  /** Label for Draft chip in document header */
  'release.chip.draft': 'Utkast',
  /** Label for Draft chip in global header */
  'release.chip.global.drafts': 'Utkast',
  /** Label for Published chip in document header */
  'release.chip.published': 'Publisert',
  /** Label for tooltip in chip when document is in an archived release */
  'release.chip.tooltip.archived': 'Denne utgivelsen er arkivert og kan ikke redigeres.',
  /** Label for tooltip in chip with the created date */
  'release.chip.tooltip.created-date': 'Opprettet {{date}}',
  /** Label for tooltip in draft chip when it's a live edit document */
  'release.chip.tooltip.draft-disabled.live-edit':
    'Dette dokumentet er i live redigeringsmodus, utkast er deaktivert',
  /** Label for tooltip in chip with the lasted edited date */
  'release.chip.tooltip.edited-date': 'Redigert {{date}}',
  /** Label for tooltip in chip when document is intended for a future release that hasn't been scheduled */
  'release.chip.tooltip.intended-for-date': 'Ment for {{date}}',
  /** Label for tooltip in chip when there is no recent draft edits */
  'release.chip.tooltip.no-edits': 'Ingen redigeringer',
  /** Label for tooltip in chip when document isn't published */
  'release.chip.tooltip.not-published': 'Ikke publisert',
  /** Label for tooltip in chip with the published date */
  'release.chip.tooltip.published-date': 'Publisert {{date}}',
  /** Label for tooltip in chip when document is in a release that has been scheduled */
  'release.chip.tooltip.scheduled-for-date': 'Planlagt for {{date}}',
  /** Label for tooltip in scheduled chip without a known date */
  'release.chip.tooltip.unknown-date': 'Ukjent dato',
  /** Label for tooltip on deleted release */
  'release.deleted-tooltip': 'Denne utgivelsen har blitt slettet',
  /** Title for copying version to a new release dialog */
  'release.dialog.copy-to-release.title': 'Kopier versjon til ny utgivelse',
  /** Title for action create a release */
  'release.dialog.create.confirm': 'Opprett utgivelse',
  /** Title for creating releases dialog */
  'release.dialog.create.title': 'Ny utgivelse',
  /** Label for description in tooltip to explain release types */
  'release.dialog.tooltip.description':
    'Den tiltenkte utgivelsestiden brukes til å lage bedre forhåndsvisninger og hint om hvorvidt dokumenter er i konflikt.',
  /** Label for noting that a release time is not final */
  'release.dialog.tooltip.note': 'Du kan alltid endre det senere.',
  /** Title for tooltip to explain release time */
  'release.dialog.tooltip.title': 'Omtrentlig tidspunkt for utgivelse',
  /** The placeholder text when the release doesn't have a description */
  'release.form.placeholder-describe-release': 'Beskriv utgivelsen…',
  /** Tooltip for button to hide release visibility */
  'release.layer.hide': 'Skjul utgivelse',
  /** Label for draft perspective in navbar */
  'release.navbar.drafts': 'Utkast',
  /** Label for published releases in navbar */
  'release.navbar.published': 'Publisert',
  /** Tooltip for releases navigation in navbar */
  'release.navbar.tooltip': 'Utgivelser',
  /** The placeholder text when the release doesn't have a title */
  'release.placeholder-untitled-release': 'Uten tittel utgivelse',
  /** The toast description that will be shown when the user has a release perspective which is now archived */
  'release.toast.archived-release.description': 'Denne utgivelsen har blitt løsnet',
  /** The toast title that will be shown when the user has a release perspective which is now archived */
  'release.toast.archived-release.title': "Utgivelsen '{{title}}' ble arkivert",
  /** The toast title that will be shown the creating a release fails */
  'release.toast.create-release-error.title': 'Klarte ikke å opprette utgivelse',
  /**The toast title that will be shown when the user has a release perspective which is now deleted */
  'release.toast.not-found-release.title': "Utgivelsen '{{title}}' kunne ikke bli funnet",
  /** The toast description that will be shown when the user has a release perspective which is now published */
  'release.toast.published-release.description': 'Denne utgivelsen har blitt løsnet',
  /** The toast title that will be shown when the user has a release perspective which is now deleted */
  'release.toast.published-release.title': "Utgivelsen '{{title}}' ble publisert",
  /** Label for when a version of a document has already been added to the release */
  'release.tooltip.already-added': 'En versjon av dette dokumentet har allerede blitt lagt til',
  /** Label for when a release is scheduled / scheduling and a user can't add a document version to it */
  'release.tooltip.locked':
    'Denne utgivelsen har blitt planlagt. Avplanlegg den for å legge til flere dokumenter.',
  /** Label for the release type 'as soon as possible' */
  'release.type.asap': 'Så snart som mulig',
  /** Label for the release type 'at time', meaning it's a release with a scheduled date */
  'release.type.scheduled': 'Til angitt tid',
  /** Label for the release type 'undecided' */
  'release.type.undecided': 'Ubestemt',
  /** Tooltip for the dropdown to show all versions of document */
  'release.version-list.tooltip': 'Se alle dokumentversjoner',

  /** Accessibility label to open search action when the search would go fullscreen (eg on narrower screens) */
  'search.action-open-aria-label': 'Åpne søk',
  /** Action label for adding a search filter */
  'search.action.add-filter': 'Legg til filter',
  /** Action label for clearing search filters */
  'search.action.clear-filters': 'Fjern filtre',
  /** Label for action to clear recent searches */
  'search.action.clear-recent-searches': 'Fjern nylige søk',
  /** Accessibility label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-aria-label': 'Fjern valgte filtre',
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
  'search.action.search-all-types': 'Søk i alle dokumenter',
  /**
   * Text displayed when we are able to determine one or more document types that will be used for
   * searching, and can fit within the space assigned by the design.
   */
  'search.action.search-specific-types': 'Søk etter {{types, list}}',
  /**
   * Text displayed when we are able to determine one or more document types that will be used for
   * searching, but cannot list them all within the space assigned by the design, so we need an
   * additional "and X more" suffix. Allows using pluralization suffixes, eg `_one`, `_other` etc.
   */
  'search.action.search-specific-types-truncated': 'Søk etter {{types, list}} +{{count}} flere',
  /** Dialog title for action to select an asset of unknown type */
  'search.action.select-asset': 'Velg element',
  /** Dialog title for action to select a file asset */
  'search.action.select-asset_file': 'Velg fil',
  /** Dialog title for action to select an image asset */
  'search.action.select-asset_image': 'Velg bilde',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-aria-label_hide': 'Skjul filtre',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-aria-label_show': 'Vis filtre',
  /** Label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-label_hide': 'Skjul filtre',
  /** Label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-label_show': 'Vis filtre',
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
  'search.document-type-list-all-types': 'Alle typer',
  /**
   * A list of provided types that has been truncated - more types are included but not displayed,
   * thus we need to indicate that there are more. Allows using pluralization suffixes,
   * eg `_one`, `_other` etc.
   */
  'search.document-type-list-truncated': '{{types, list}} +{{count}} flere',
  /** Accessibility label for list displaying the available document types */
  'search.document-types-aria-label': 'Dokumenttyper',
  /** Label for when no document types matching the filter are found */
  'search.document-types-no-matches-found': 'Ingen dokumenttyper funnet',
  /** Description for error when a filter cannot be displayed, describes that you should check the schema */
  'search.error.display-filter-description':
    'Dette kan indikere ugyldige alternativer definert i skjemaet ditt.',
  /** Title for error when a filter cannot be displayed (mainly a developer-oriented error) */
  'search.error.display-filter-title': 'En feil oppstod under visning av dette filteret.',
  /** Description for error when no valid asset source is found, describes that you should check the the current studio config */
  'search.error.no-valid-asset-source-check-config-description':
    'Vennligst forsikre deg om at den er aktivert i studioets konfigurasjonsfil.',
  /** Description for error when no valid asset source is found, describes that only the default asset is supported */
  'search.error.no-valid-asset-source-only-default-description':
    'For øyeblikket støttes bare standardkilden for bilder/filer.',
  /** Title for error when no valid asset sources found */
  'search.error.no-valid-asset-source-title': 'Ingen gyldige kilder funnet.',
  /** Helpful description for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-help-description':
    'Vennligst prøv igjen eller sjekk tilkoblingen din',
  /** Title label for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-title': 'Noe gikk galt under søket',
  /**
   * Label for "All fields", a label that appears above the list of available fields when filtering.
   * If one or more document type has been chosen as filter, this label is replaced with a group of
   * fields per selected document type
   */
  'search.filter-all-fields-header': 'Alle felter',
  /** Label for the action of changing from one file to a different file in asset search filter */
  'search.filter-asset-change_file': 'Bytt fil',
  /** Label for the action of changing from one image to a different image in asset search filter */
  'search.filter-asset-change_image': 'Bytt bilde',
  /** Label for the action of clearing the currently selected asset in an image/file filter */
  'search.filter-asset-clear': 'Fjern',
  /** Label for the action of selecting a file in asset search filter */
  'search.filter-asset-select_file': 'Velg fil',
  /** Label for the action of selecting an image in asset search filter */
  'search.filter-asset-select_image': 'Velg bilde',
  /** Label for boolean filter - false */
  'search.filter-boolean-false': 'Usant',
  /** Label for boolean filter - true */
  'search.filter-boolean-true': 'Sant',
  /** Accessibility label for list that lets you filter fields by title, when adding a new filter in search */
  'search.filter-by-title-aria-label': 'Filtrer etter tittel',
  /** Accessibility label for date filter input */
  'search.filter-date-aria-label': 'Dato',
  /** Accessibility label for selecting end date on the date range search filter */
  'search.filter-date-range-end-date-aria-label': 'Til dato',
  /** Accessibility label for selecting start date on the date range search filter */
  'search.filter-date-range-start-date-aria-label': 'Fra dato',
  /**
   * Label for "Days"/"Months"/"Years" when selecting it as unit in "X days ago" search filter.
   * Capitalized, as it would be listed in a dropdown.
   */
  'search.filter-date-unit_days': 'Dager',
  'search.filter-date-unit_months': 'Måneder',
  'search.filter-date-unit_years': 'År',
  /** Accessibility label for selecting the unit (day/month/year) when adding "X days ago" search filter */
  'search.filter-date-unit-aria-label': 'Velg enhet',
  /** Accessibility label for the input value (days/months/years) when adding "X days ago" search filter */
  'search.filter-date-value-aria-label': 'Enhetsverdi',
  /** Label for "field description" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-description': 'Feltbeskrivelse',
  /** Label for "field name" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-name': 'Feltnavn',
  /** Label for "Used in document types", a list of the document types a field appears in. Shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-used-in-document-types': 'Brukt i dokumenttyper',
  /** Label for when no fields/filters are found for the given term */
  'search.filter-no-matches-found': 'Ingen treff for «{{filter}}»',
  /** Placeholder value for maximum numeric value filter */
  'search.filter-number-max-value-placeholder': 'Maksverdi',
  /** Placeholder value for minimum numeric value filter */
  'search.filter-number-min-value-placeholder': 'Minimumverdi',
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
  'search.filter-shared-fields-header': 'Delte felter',
  /** Placeholder value for the string filter */
  'search.filter-string-value-placeholder': 'Verdi',
  /** Label/placeholder prompting user to select one of the predefined, allowed values for a string field */
  'search.filter-string-value-select-predefined-value': 'Velg…',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (singular) */
  'search.filters-aria-label_one': 'Filter',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (plural) */
  'search.filters-aria-label_other': 'Filtre',
  /** Label for instructions on how to use the search - displayed when no recent searches are available */
  'search.instructions': 'Bruk <ControlsIcon/> for å rafinere søket.',
  /** Helpful description for when no search results are found */
  'search.no-results-help-description': 'Prøv et annet nøkkelord eller juster filtrene dine',
  /** Title label for when no search results are found */
  'search.no-results-title': 'Ingen resultater funnet',
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
  'search.operator.array-count-equal.name': 'antall er',
  /* Array should have a count greater than given filter value */
  'search.operator.array-count-gt.description_one':
    '<Field/> <Operator>har ></Operator> <Value>{{count}} element</Value>',
  'search.operator.array-count-gt.description_other':
    '<Field/> <Operator>har ></Operator> <Value>{{count}} elementer</Value>',
  'search.operator.array-count-gt.name': 'antall større enn',
  /* Array should have a count greater than or equal to the given filter value */
  'search.operator.array-count-gte.description_one':
    '<Field/> <Operator>har ≥</Operator> <Value>{{count}} element</Value>',
  'search.operator.array-count-gte.description_other':
    '<Field/> <Operator>har ≥</Operator> <Value>{{count}} elementer</Value>',
  'search.operator.array-count-gte.name': 'antall større enn eller lik',
  /* Array should have a count less than given filter value */
  'search.operator.array-count-lt.description_one':
    '<Field/> <Operator>har <</Operator> <Value>{{count}} element</Value>',
  'search.operator.array-count-lt.description_other':
    '<Field/> <Operator>har <</Operator> <Value>{{count}} elementer</Value>',
  'search.operator.array-count-lt.name': 'antall mindre enn',
  /* Array should have a count less than or equal to the given filter value */
  'search.operator.array-count-lte.description_one':
    '<Field/> <Operator>har ≤</Operator> <Value>{{count}} element</Value>',
  'search.operator.array-count-lte.description_other':
    '<Field/> <Operator>har ≤</Operator> <Value>{{count}} elementer</Value>',
  'search.operator.array-count-lte.name': 'antall mindre enn eller lik',
  /* Array should have a count that is not equal to the given filter value */
  'search.operator.array-count-not-equal.description_one':
    '<Field/> <Operator>antall er ikke</Operator> <Value>{{count}} element</Value>',
  'search.operator.array-count-not-equal.description_other':
    '<Field/> <Operator>antall er ikke</Operator> <Value>{{count}} elementer</Value>',
  'search.operator.array-count-not-equal.name': 'antall er ikke',
  /**
   * Array should have a count within the range of given filter values.
   * Gets passed `{{from}}` and `{{to}}` values.
   **/
  'search.operator.array-count-range.description':
    '<Field/> <Operator>har mellom</Operator> <Value>{{from}} → {{to}} elementer</Value>',
  'search.operator.array-count-range.name': 'antall er mellom',
  /* Array should include the given value */
  'search.operator.array-list-includes.description':
    '<Field/> <Operator>inneholder</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-includes.name': 'inneholder',
  /* Array should not include the given value */
  'search.operator.array-list-not-includes.description':
    '<Field/> <Operator>inneholder ikke</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-not-includes.name': 'inneholder ikke',
  /* Array should include the given reference */
  'search.operator.array-reference-includes.description':
    '<Field/> <Operator>inneholder</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-includes.name': 'inneholder',
  /* Array should not include the given reference */
  'search.operator.array-reference-not-includes.description':
    '<Field/> <Operator>inneholder ikke</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-not-includes.name': 'inneholder ikke',
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
    '<Field/> <Operator>er innenfor siste</Operator> <Value>{{value}}</Value>',
  'search.operator.date-last.name': 'siste',
  /* Date should not be the given filter value */
  'search.operator.date-not-equal.description':
    '<Field/> <Operator>er ikke</Operator> <Value>{{value}}</Value>',
  'search.operator.date-not-equal.name': 'er ikke',
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
    '<Field/> <Operator>er innenfor siste</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-last.name': 'siste',
  /* Date and time should not be the given filter value */
  'search.operator.date-time-not-equal.description':
    '<Field/> <Operator>er ikke</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-not-equal.name': 'er ikke',
  /* Date and time should be within the range of given filter values */
  'search.operator.date-time-range.description': '<Field/> <Operator>er mellom</Operator> <Value/>',
  'search.operator.date-time-range.name': 'er mellom',
  /* Value should be defined */
  'search.operator.defined.description': '<Field/> <Operator>er</Operator> <Value>definert</Value>',
  'search.operator.defined.name': 'er definert',
  /* Value should not be defined */
  'search.operator.not-defined.description':
    '<Field/> <Operator>er</Operator> <Value>ikke definert</Value>',
  'search.operator.not-defined.name': 'ikke definert',
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
    '<Field/> <Operator>er ikke</Operator> <Value>{{value}}</Value>',
  'search.operator.number-not-equal.name': 'er ikke',
  /* Number should be within the range of given filter values */
  'search.operator.number-range.description':
    '<Field/> <Operator>er mellom</Operator> <Value>{{from}} → {{to}}</Value>',
  'search.operator.number-range.name': 'er mellom',
  /* Portable Text should contain the given filter value */
  'search.operator.portable-text-contains.description':
    '<Field/> <Operator>inneholder</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-contains.name': 'inneholder',
  /* Portable Text should be the given filter value */
  'search.operator.portable-text-equal.description':
    '<Field/> <Operator>er</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-equal.name': 'er',
  /* Portable Text should not contain the given filter value */
  'search.operator.portable-text-not-contains.description':
    '<Field/> <Operator>inneholder ikke</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-contains.name': 'inneholder ikke',
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
  'search.operator.reference-asset-image.name': 'bilde',
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
    '<Field/> <Operator>inneholder</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-contains.name': 'inneholder',
  /* Slug equals the given filter value */
  'search.operator.slug-equal.description':
    '<Field/> <Operator>er</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-equal.name': 'er',
  /* Slug does not contain the given value */
  'search.operator.slug-not-contains.description':
    '<Field/> <Operator>inneholder ikke</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-contains.name': 'inneholder ikke',
  /* Slug does not equal the given filter value */
  'search.operator.slug-not-equal.description':
    '<Field/> <Operator>er ikke</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-equal.name': 'er ikke',
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
    '<Field/> <Operator>er ikke</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-not-equal.name': 'er ikke',
  /* String does not contain the given filter value */
  'search.operator.string-not-contains.description':
    '<Field/> <Operator>inneholder ikke</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-contains.name': 'inneholder ikke',
  /* String does not equal the given filter value */
  'search.operator.string-not-equal.description':
    '<Field/> <Operator>er ikke</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-equal.name': 'er ikke',
  /** Label for the "Best match" search ordering type */
  'search.ordering.best-match-label': 'Beste treff',
  /** Label for the "Created: Oldest first" search ordering type */
  'search.ordering.created-ascending-label': 'Opprettet: Eldste først',
  /** Label for the "Created: Newest first" search ordering type */
  'search.ordering.created-descending-label': 'Opprettet: Nyeste først',
  /** Label for the "Updated: Oldest first" search ordering type */
  'search.ordering.updated-ascending-label': 'Oppdatert: Eldste først',
  /** Label for the "Updated: Newest first" search ordering type */
  'search.ordering.updated-descending-label': 'Oppdatert: Nyeste først',
  /** Placeholder text for the global search input field */
  'search.placeholder': 'Søk',
  /** Accessibility label for the recent searches section, shown when no valid search terms has been given */
  'search.recent-searches-aria-label': 'Nylige søk',
  /** Label/heading shown for the recent searches section */
  'search.recent-searches-label': 'Nylige søk',
  /** Accessibility label for the search results section, shown when the user has typed valid terms */
  'search.search-results-aria-label': 'Søkeresultater',

  /** Label for the edit columns button to change field visibility in sheet list */
  'sheet-list.edit-columns': 'Rediger kolonner',
  /** Label for the header menu option to hide a field from the sheet list */
  'sheet-list.hide-field': 'Fjern fra tabell',
  /** Label for reset column visibilities button */
  'sheet-list.reset-columns': 'Tilbakestill kolonner',
  /** Title for the edit columns menu */
  'sheet-list.select-fields': 'Velg opptil 5 felttyper',

  /** Accessibility label for the navbar status button */
  'status-button.aria-label': 'Status',

  /* Time zone handling */
  'time-zone.action.search-for-timezone-placeholder': undefined, // 'Search for a city or time zone'
  /* Label for the local time zone button */
  'time-zone.action.select-local-time-zone': undefined, // 'Select local time zone'
  /* Dialog info for the time zone dialog */
  'time-zone.dialog-info.content-releases': undefined, // 'The selected time zone will change how dates are represented in content releases.'
  /* Dialog info for the time zone dialog */
  'time-zone.dialog-info.input': undefined, // 'The selected time zone will change how dates are represented only for this input in this document.'
  /* Dialog info for the time zone dialog */
  'time-zone.dialog-info.scheduled-publishing': undefined, // 'The selected time zone will change how dates are represented in schedules.'
  /* Label for the local time zone button */
  'time-zone.local-time': undefined, // 'local time'
  /* Label for the time zone button */
  'time-zone.time-zone': undefined, // 'Time zone'
  /* Tooltip content for the time zone dialog */
  'time-zone.time-zone-tooltip-content-releases': undefined, // 'Displaying releases in {{alternativeName}} GMT{{offset}}'
  /* Tooltip content for the time zone dialog */
  'time-zone.time-zone-tooltip-input': undefined, // 'Displaying <em>{{title}}</em> in {{alternativeName}} GMT{{offset}}'
  /* Tooltip content for the time zone dialog */
  'time-zone.time-zone-tooltip-scheduled-publishing': undefined, // 'Displaying schedules in {{alternativeName}} GMT{{offset}}'

  /** Title for the changes tooltip in the history inspector*/
  'timeline.changes.title': 'Endringer av',
  /** Description for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-description': 'Historikk har ikke blitt påvirket.',
  /** Title for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-title':
    'En feil oppstod under henting av dokumentendringer.',
  /** Description for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-version-description':
    'Aktiver events API gjennom Studio-konfigurasjonen for å se dokumenthistorikk.',
  /** Title for error when the timeline for the given version document can't be loaded */
  'timeline.error.load-document-changes-version-title':
    'Historikk for versjonsdokumenter er kun tilgjengelig gjennom Events API.',
  /** Error description for when the document doesn't have history */
  'timeline.error.no-document-history-description':
    'Når du endrer innholdet i dokumentet, vil dokumentversjonene vises i denne menyen.',
  /** Error title for when the document doesn't have history */
  'timeline.error.no-document-history-title': 'Ingen historikk',
  /** Error prompt when revision cannot be loaded */
  'timeline.error.unable-to-load-revision': 'Kan ikke laste revisjon',
  /** Label for when the timeline item is the latest in the history */
  'timeline.latest': 'Siste',
  /** Label for latest revision for timeline menu dropdown */
  'timeline.latest-revision': 'Siste revisjon',
  /**
   * Label for latest revision for timeline menu dropdown
   * @deprecated as of `v3.47.0` `timeline.latest-revision` should be used instead. Note: _usage_ of this key is deprecated, but Studios on `< v3.47.0` still require this key to be _defined_
   * */
  'timeline.latest-version': 'Siste versjon',
  /** The aria-label for the list of revisions in the timeline */
  'timeline.list.aria-label': 'Dokumentrevisjoner',
  /** Label for loading history */
  'timeline.loading-history': 'Laster historikk…',
  /* Label for when no previous since events are available*/
  'timeline.no-previous-events': 'Ingen tidligere hendelser',
  /** Label shown in review changes timeline when a document has been created */
  'timeline.operation.created': 'Opprettet',
  /** Label shown in review changes timeline when a document has been created, with a timestamp */
  'timeline.operation.created_timestamp': 'Opprettet: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was initially created */
  'timeline.operation.created-initial': 'Opprettet',
  /** Label shown in review changes timeline when a document was initially created, with a timestamp */
  'timeline.operation.created-initial_timestamp': 'Opprettet: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been deleted */
  'timeline.operation.deleted': 'Slettet',
  /** Label shown in review changes timeline when a document has been deleted, with a timestamp */
  'timeline.operation.deleted_timestamp': 'Slettet: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft document has been created*/
  'timeline.operation.draft-created': 'Utkast opprettet',
  /** Label shown in review changes timeline when a draft document has been created, with a timestamp */
  'timeline.operation.draft-created_timestamp': 'Utkast opprettet: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been discarded */
  'timeline.operation.draft-discarded': 'Forkastet utkast',
  /** Label shown in review changes timeline when a draft has been discarded, with a timestamp */
  'timeline.operation.draft-discarded_timestamp': 'Forkastet utkast: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been edited */
  'timeline.operation.edited-draft': 'Redigert',
  /** Label shown in review changes timeline when a draft has been edited, with a timestamp */
  'timeline.operation.edited-draft_timestamp': 'Redigert: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been edited live */
  'timeline.operation.edited-live': 'Redigert live',
  /** Label shown in review changes timeline when a document has been edited live, with a timestamp */
  'timeline.operation.edited-live_timestamp': 'Redigert live: {{timestamp, datetime}}',
  /** Label shown in review changes timeline event when transactions have been deleted by retention policy */
  'timeline.operation.history-cleared': 'Slettet av oppbevaringspolicy',
  /** Label shown in review changes timeline when a document was published */
  'timeline.operation.published': 'Publisert',
  /** Label shown in review changes timeline when a document was published, with a timestamp */
  'timeline.operation.published_timestamp': 'Publisert: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was unpublished */
  'timeline.operation.unpublished': 'Avpublisert',
  /** Label shown in review changes timeline when a document was unpublished, with a timestamp */
  'timeline.operation.unpublished_timestamp': 'Avpublisert: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document version has been created */
  'timeline.operation.version-created': 'Versjon opprettet',
  /** Label shown in review changes timeline when a document version has been created, with a timestamp */
  'timeline.operation.version-created_timestamp': 'Versjon opprettet: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document version has been discarded */
  'timeline.operation.version-discarded': 'Versjon forkastet',
  /** Label shown in review changes timeline when a document version has been discarded, with a timestamp */
  'timeline.operation.version-discarded_timestamp': 'Versjon forkastet: {{timestamp, datetime}}',
  /**
   * Label for determining since which version the changes for timeline menu dropdown are showing.
   * Receives the time label as a parameter (`timestamp`).
   */
  'timeline.since': 'Siden: {{timestamp, datetime}}',
  /** Label for missing change version for timeline menu dropdown are showing */
  'timeline.since-version-missing': 'Siden: ukjent versjon',

  /** Aria label for the action buttons in the PTE toolbar */
  'toolbar.portable-text.action-button-aria-label': '{{action}}',

  /** Accessibility label for the breadcrumb menu */
  'tree-editing-dialog.breadcrumbs.menu': 'Brødsmulenavigasjon',
  /** Title placeholder for search input in array of objects */
  'tree-editing-dialog.search-placeholder': 'Søk',
  /** Menu aria label for the search menu */
  'tree-editing-dialog.search.menu-label': 'Søkemeny',
  /** Title label for when no search results are found on the tree of objects */
  'tree-editing-dialog.search.no-results-title': 'Ingen resultater funnet',
  /** Label to close the sidebar */
  'tree-editing-dialog.sidebar.action.close': 'Lukk sidefeltet',
  /** Collapse label the menu item in the sidebar  */
  'tree-editing-dialog.sidebar.action.collapse': 'Skjul',
  /** Label to close the dialog */
  'tree-editing-dialog.sidebar.action.done': 'Ferdig',
  /** Exapnd label the menu item in the sidebar  */
  'tree-editing-dialog.sidebar.action.expand': 'Utvid',
  /** Label to open the sidebar */
  'tree-editing-dialog.sidebar.action.open': 'Åpne sidefeltet',

  /** Label for button showing the free trial days left */
  'user-menu.action.free-trial_one': '{{count}} dag igjen av prøveperioden',
  'user-menu.action.free-trial_other': '{{count}} dager igjen av prøveperioden',
  /** Label for the button showed after trial ended */
  'user-menu.action.free-trial-finished': 'Oppgrader fra gratis',
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
    'Kan ikke bruke {{name}} på en tom blokk',
  /** Tooltip helper text when portable text annotation is disabled for multiple blocks */
  'user-menu.action.portable-text.annotation-disabled_multiple-blocks':
    'Kan ikke bruke {{name}} på flere blokker',
  /** Label for action to sign out of the current sanity project */
  'user-menu.action.sign-out': 'Logg ut',
  /** Title for appearance section for the current studio (dark / light / system scheme) */
  'user-menu.appearance-title': 'Utseende',
  /** Label for close menu button for user menu */
  'user-menu.close-menu': 'Lukk meny',
  /** Description for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-description': 'Bruk mørkt utseende',
  /** Title for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-title': 'Mørk',
  /** Description for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-description': 'Bruk lyst utseende',
  /** Title for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-title': 'Lys',
  /** Description for using "system apparence" in the appearance user menu */
  'user-menu.color-scheme.system-description': 'Bruk systemutseende',
  /** Title for using system apparence in the appearance user menu */
  'user-menu.color-scheme.system-title': 'System',
  /** Title for locale section for the current studio */
  'user-menu.locale-title': 'Språk',
  /** Label for tooltip to show which provider the currently logged in user is using */
  'user-menu.login-provider': 'Logget inn med {{providerTitle}}',
  /** Label for open menu button for user menu */
  'user-menu.open-menu': 'Åpne meny',

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
  'workspaces.action.choose-another-workspace': 'Velg et annet arbeidsområde',
  /** Label for heading that indicates that you can choose your workspace */
  'workspaces.choose-your-workspace-label': 'Velg ditt arbeidsområde',
  /** Label for the workspace menu */
  'workspaces.select-workspace-aria-label': 'Velg arbeidsområde',
  /** Button label for opening the workspace switcher */
  'workspaces.select-workspace-label': 'Velg arbeidsområde',
  /** Tooltip for the workspace menu */
  'workspaces.select-workspace-tooltip': 'Velg arbeidsområde',
  /** Title for Workplaces dropdown menu */
  'workspaces.title': 'Arbeidsområder',
})
