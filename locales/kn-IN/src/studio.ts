import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Menu item for deleting the asset */
  'asset-source.asset-list.menu.delete': 'ಅಳಿಸು',
  /** Menu item for showing where a particular asset is used */
  'asset-source.asset-list.menu.show-usage': 'ಬಳಕೆಯನ್ನು ತೋರಿಸು',
  /** Header in usage dialog for file assets */
  'asset-source.asset-usage-dialog.header_file': 'ಫೈಲ್ ಬಳಸುವ ದಾಖಲೆಗಳು',
  /** Header in usage dialog for image assets */
  'asset-source.asset-usage-dialog.header_image': 'ಚಿತ್ರ ಬಳಸುವ ದಾಖಲೆಗಳು',
  /** Text shown in usage dialog when loading documents using the selected asset */
  'asset-source.asset-usage-dialog.loading': 'ಲೋಡ್ ಆಗುತ್ತಿದೆ…',
  /** Text for cancel action in delete-asset dialog */
  'asset-source.delete-dialog.action.cancel': 'ರದ್ದುಮಾಡು',
  /** Text for "confirm delete" action in delete-asset dialog */
  'asset-source.delete-dialog.action.delete': 'ಅಳಿಸು',
  /** Dialog header for delete-asset dialog when deleting a file */
  'asset-source.delete-dialog.header_file': 'ಫೈಲ್ ಅಳಿಸು',
  /** Dialog header for delete-asset dialog when deleting an image */
  'asset-source.delete-dialog.header_image': 'ಚಿತ್ರ ಅಳಿಸು',
  /** Text shown in delete dialog when loading documents using the selected asset */
  'asset-source.delete-dialog.loading': 'ಲೋಡ್ ಆಗುತ್ತಿದೆ…',
  /** Message confirming to delete *named* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_named':
    'ನೀವು ಫೈಲ್ <strong>{{filename}}}</strong> ಮತ್ತು ಅದರ ಮೆಟಾಡೇಟಾ ಅಳಿಸಲು ಹೊರಟಿದ್ದೀರಿ. ನೀವು ಖಚಿತರೇ?',
  /** Message confirming to delete *unnamed* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_unnamed':
    'ನೀವು ಫೈಲ್ ಮತ್ತು ಅದರ ಮೆಟಾಡೇಟಾ ಅಳಿಸಲು ಹೊರಟಿದ್ದೀರಿ. ನೀವು ಖಚಿತರೇ?',
  /** Message confirming to delete *named* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_named':
    'ನೀವು ಚಿತ್ರ <strong>{{filename}}</strong> ಮತ್ತು ಅದರ ಮೆಟಾಡೇಟಾ ಅಳಿಸಲು ಹೊರಟಿದ್ದೀರಿ. ನೀವು ಖಚಿತರೇ?',
  /** Message confirming to delete *unnamed* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_unnamed':
    'ನೀವು ಚಿತ್ರ ಮತ್ತು ಅದರ ಮೆಟಾಡೇಟಾ ಅಳಿಸಲು ಹೊರಟಿದ್ದೀರಿ. ನೀವು ಖಚಿತರೇ?',
  /** Alt text showing on image preview in delete asset dialog  */
  'asset-source.delete-dialog.usage-list.image-preview-alt': 'ಚಿತ್ರದ ಮುನ್ನೋಟ',
  /** Warning message showing when *named* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_named':
    '{{filename}} ಅನ್ನು ಅಳಿಸಲಾಗದು ಏಕೆಂದರೆ ಅದು ಬಳಕೆಯಲ್ಲಿದೆ. ಈ ಫೈಲ್ ಅನ್ನು ಅಳಿಸಲು, ಮೊದಲು ಅದರ ಎಲ್ಲಾ ಬಳಕೆಗಳನ್ನು ತೆಗೆದುಹಾಕಬೇಕು.',
  /** Warning message showing when *unnamed* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_unnamed':
    'ಈ ಫೈಲ್ ಅನ್ನು ಅಳಿಸಲಾಗದು ಏಕೆಂದರೆ ಅದು ಬಳಕೆಯಲ್ಲಿದೆ. ಅದನ್ನು ಅಳಿಸಲು, ಮೊದಲು ಅದರ ಎಲ್ಲಾ ಬಳಕೆಗಳನ್ನು ತೆಗೆದುಹಾಕಬೇಕು.',
  /** Warning message showing when *named* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_named':
    '{{filename}} ಅನ್ನು ಅಳಿಸಲಾಗದು ಏಕೆಂದರೆ ಅದು ಬಳಕೆಯಲ್ಲಿದೆ. ಈ ಚಿತ್ರವನ್ನು ಅಳಿಸಲು, ಮೊದಲು ಅದರ ಎಲ್ಲಾ ಬಳಕೆಗಳನ್ನು ತೆಗೆದುಹಾಕಬೇಕು.',
  /** Warning message showing when *unnamed* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_unnamed':
    'ಈ ಚಿತ್ರವನ್ನು ಅಳಿಸಲಾಗದು ಏಕೆಂದರೆ ಅದು ಬಳಕೆಯಲ್ಲಿದೆ. ಅದನ್ನು ಅಳಿಸಲು, ಮೊದಲು ಅದರ ಎಲ್ಲಾ ಬಳಕೆಗಳನ್ನು ತೆಗೆದುಹಾಕಬೇಕು.',
  /** Text shown when the list of assets only include a specific set of types */
  'asset-source.dialog.accept-message':
    'ಅಂಗೀಕೃತ ಪ್ರಕಾರಗಳ ಆಸ್ತಿಗಳನ್ನು ಮಾತ್ರ ತೋರಿಸುತ್ತಿದೆ: <strong>{{acceptTypes}}</strong>',
  /** Keys shared between both image asset source and file asset source */
  /** Select asset dialog title for files */
  'asset-source.dialog.default-title_file': 'ಫೈಲ್ ಆಯ್ಕೆಮಾಡಿ',
  /** Select asset dialog title for images */
  'asset-source.dialog.default-title_image': 'ಚಿತ್ರ ಆಯ್ಕೆಮಾಡಿ',
  /** Select asset dialog load more items */
  'asset-source.dialog.load-more': 'ಹೆಚ್ಚು ಲೋಡ್ ಮಾಡಿ',
  /** Text shown when selecting a file but there's no files to select from */
  'asset-source.dialog.no-assets_file': 'ಯಾವುದೇ ಫೈಲ್‌ಗಳಿಲ್ಲ',
  /** Text shown when selecting an image but there's no images to select from */
  'asset-source.dialog.no-assets_image': 'ಯಾವುದೇ ಚಿತ್ರಗಳಿಲ್ಲ',
  'asset-source.file.asset-list.action.delete.disabled-cannot-delete-current-file':
    'ಪ್ರಸ್ತುತ ಆಯ್ಕೆ ಮಾಡಿದ ಫೈಲ್ ಅನ್ನು ಅಳಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ',
  'asset-source.file.asset-list.action.delete.text': 'ಅಳಿಸು',
  'asset-source.file.asset-list.action.delete.title': 'ಫೈಲ್ ಅಳಿಸು',
  'asset-source.file.asset-list.action.select-file.title': 'ಫೈಲ್ {{filename}} ಆಯ್ಕೆಮಾಡಿ',
  'asset-source.file.asset-list.action.show-usage.title': 'ಬಳಕೆ ತೋರಿಸು',
  'asset-source.file.asset-list.delete-failed': 'ಫೈಲ್ ಅನ್ನು ಅಳಿಸಲು ಸಾಧ್ಯವಾಗಿಲ್ಲ',
  'asset-source.file.asset-list.delete-successful': 'ಫೈಲ್ ಅನ್ನು ಅಳಿಸಲಾಗಿದೆ',
  'asset-source.file.asset-list.header.date-added': 'ಸೇರಿಸಿದ ದಿನಾಂಕ',
  /** File asset source */
  'asset-source.file.asset-list.header.filename': 'ಫೈಲ್ ಹೆಸರು',
  'asset-source.file.asset-list.header.size': 'ಗಾತ್ರ',
  'asset-source.file.asset-list.header.type': 'ಪ್ರಕಾರ',
  /** Text displayed on button or menu invoking the file asset source */
  'asset-source.file.title': 'ಅಪ್‌ಲೋಡ್ ಮಾಡಿದ ಫೈಲ್‌ಗಳು',
  'asset-source.image.asset-list.delete-failed': 'ಚಿತ್ರವನ್ನು ಅಳಿಸಲು ಸಾಧ್ಯವಾಗಿಲ್ಲ',
  /** Image asset source */
  'asset-source.image.asset-list.delete-successful': 'ಚಿತ್ರವನ್ನು ಅಳಿಸಲಾಗಿದೆ',
  /** Text displayed on button or menu invoking the image asset source */
  'asset-source.image.title': 'ಅಪ್‌ಲೋಡ್ ಮಾಡಿದ ಚಿತ್ರಗಳು',
  'asset-source.usage-list.documents-using-file_named_one':
    'ಒಂದು ದಾಖಲೆಯು ಫೈಲ್ <code>{{filename}}</code> ಬಳಸುತ್ತಿದೆ',
  'asset-source.usage-list.documents-using-file_named_other':
    '{{count}} ದಾಖಲೆಗಳು ಫೈಲ್ <code>{{filename}}</code> ಬಳಸುತ್ತಿವೆ',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *named* file **/
  'asset-source.usage-list.documents-using-file_named_zero':
    'ಯಾವುದೇ ದಾಖಲೆಗಳು ಫೈಲ್ <code>{{filename}}</code> ಬಳಸುತ್ತಿಲ್ಲ',
  'asset-source.usage-list.documents-using-file_unnamed_one': 'ಒಂದು ದಾಖಲೆಯು ಈ ಫೈಲ್ ಬಳಸುತ್ತಿದೆ',
  'asset-source.usage-list.documents-using-file_unnamed_other':
    '{{count}} ದಾಖಲೆಗಳು ಈ ಫೈಲ್ ಬಳಸುತ್ತಿವೆ',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *unnamed* file **/
  'asset-source.usage-list.documents-using-file_unnamed_zero': 'ಯಾವುದೇ ದಾಖಲೆಗಳು ಈ ಫೈಲ್ ಬಳಸುತ್ತಿಲ್ಲ',
  'asset-source.usage-list.documents-using-image_named_one':
    'ಒಂದು ದಾಖಲೆಯು ಚಿತ್ರ <code>{{filename}}</code> ಬಳಸುತ್ತಿದೆ',
  'asset-source.usage-list.documents-using-image_named_other':
    '{{count}} ದಾಖಲೆಗಳು ಚಿತ್ರ <code>{{filename}}</code> ಬಳಸುತ್ತಿವೆ',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *named* image **/
  'asset-source.usage-list.documents-using-image_named_zero':
    'ಯಾವುದೇ ದಾಖಲೆಗಳು ಚಿತ್ರ <code>{{filename}}</code> ಬಳಸುತ್ತಿಲ್ಲ',
  'asset-source.usage-list.documents-using-image_unnamed_one':
    'ಒಂದು ದಾಖಲೆಯು ಈ ಚಿತ್ರವನ್ನು ಬಳಸುತ್ತಿದೆ',
  'asset-source.usage-list.documents-using-image_unnamed_other':
    '{{count}} ದಾಖಲೆಗಳು ಈ ಚಿತ್ರವನ್ನು ಬಳಸುತ್ತಿವೆ',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *unnamed* image **/
  'asset-source.usage-list.documents-using-image_unnamed_zero':
    'ಯಾವುದೇ ದಾಖಲೆಗಳು ಈ ಚಿತ್ರವನ್ನು ಬಳಸುತ್ತಿಲ್ಲ',

  /** Action message for navigating to next month */
  'calendar.action.go-to-next-month': 'ಮುಂದಿನ ತಿಂಗಳಿಗೆ ಹೋಗಿ',
  /** Action message for navigating to next year */
  'calendar.action.go-to-next-year': 'ಮುಂದಿನ ವರ್ಷಕ್ಕೆ ಹೋಗಿ',
  /** Action message for navigating to previous month */
  'calendar.action.go-to-previous-month': 'ಹಿಂದಿನ ತಿಂಗಳಿಗೆ ಹೋಗಿ',
  /** Action message for navigating to previous year */
  'calendar.action.go-to-previous-year': 'ಹಿಂದಿನ ವರ್ಷಕ್ಕೆ ಹೋಗಿ',
  /* Label for navigating the calendar to "today", without _selecting_ today. Short form, eg `Today`, not `Go to today` */
  'calendar.action.go-to-today': 'ಇಂದು',
  /* Accessibility label for navigating the calendar to "today", without _selecting_ today */
  'calendar.action.go-to-today-aria-label': 'ಇಂದಿನ ದಿನಕ್ಕೆ ಹೋಗಿ',
  /* Label for navigating the calendar to "tomorrow", without _selecting_ tomorrow. Short form, eg `Tomorrow`, not `Go to tomorrow` */
  'calendar.action.go-to-tomorrow': 'ನಾಳೆ',
  /* Label for navigating the calendar to "yesterday", without _selecting_ yesterday. Short form, eg `Yesterday`, not `Go to yesterday` */
  'calendar.action.go-to-yesterday': 'ನಿನ್ನೆ',
  /** Label for switch that controls whether or not to include time in given timestamp */
  'calendar.action.include-time-label': 'ಸಮಯವನ್ನು ಸೇರಿಸಿ',
  /** Action message for selecting the hour */
  'calendar.action.select-hour': 'ಗಂಟೆ ಆಯ್ಕೆಮಾಡಿ',
  /** Action message for selecting the minute */
  'calendar.action.select-minute': 'ನಿಮಿಷ ಆಯ್ಕೆಮಾಡಿ',
  /** Action message for setting to the current time */
  'calendar.action.set-to-current-time': 'ಪ್ರಸ್ತುತ ಸಮಯಕ್ಕೆ ಹೊಂದಿಸಿ',
  /** Label for selecting an hour preset. Receives a `time` param as a string on hh:mm format and a `date` param as a Date instance denoting the preset date */
  'calendar.action.set-to-time-preset': '{{time}} ರಂದು {{date, datetime}}',
  /** Error message displayed in calendar when entered date is not the correct format */
  'calendar.error.must-be-in-format': 'ಈ ರೂಪದಲ್ಲಿರಬೇಕು: {{exampleDate}}',
  /** Month name for April */
  'calendar.month-names.april': 'ಏಪ್ರಿಲ್',
  /** Month name for August */
  'calendar.month-names.august': 'ಆಗಸ್ಟ್',
  /** Month name for December */
  'calendar.month-names.december': 'ಡಿಸೆಂಬರ್',
  /** Month name for February */
  'calendar.month-names.february': 'ಫೆಬ್ರವರಿ',
  /** Month name for January */
  'calendar.month-names.january': 'ಜನವರಿ',
  /** Month name for July */
  'calendar.month-names.july': 'ಜುಲೈ',
  /** Month name for June */
  'calendar.month-names.june': 'ಜೂನ್',
  /** Month name for March */
  'calendar.month-names.march': 'ಮಾರ್ಚ್',
  /** Month name for May */
  'calendar.month-names.may': 'ಮೇ',
  /** Month name for November */
  'calendar.month-names.november': 'ನವೆಂಬರ್',
  /** Month name for October */
  'calendar.month-names.october': 'ಅಕ್ಟೋಬರ್',
  /** Month name for September */
  'calendar.month-names.september': 'ಸೆಪ್ಟೆಂಬರ್',
  /** Short weekday name for Friday */
  'calendar.weekday-names.short.friday': 'ಶುಕ್ರ',
  /** Short weekday name for Monday */
  'calendar.weekday-names.short.monday': 'ಸೋಮ',
  /** Short weekday name for Saturdayday */
  'calendar.weekday-names.short.saturday': 'ಶನಿ',
  /** Short weekday name for Sunday */
  'calendar.weekday-names.short.sunday': 'ಭಾನು',
  /** Short weekday name for Thursday */
  'calendar.weekday-names.short.thursday': 'ಗುರು',
  /** Short weekday name for Tuesday */
  'calendar.weekday-names.short.tuesday': 'ಮಂಗಳ',
  /** Short weekday name for Wednesday */
  'calendar.weekday-names.short.wednesday': 'ಬುಧ',

  /** Label for the close button label in Review Changes pane */
  'changes.action.close-label': 'ಪರಿಷ್ಕರಣೆಗಳ ವಿಮರ್ಶೆಯನ್ನು ಮುಚ್ಚಿ',
  /** Cancel label for revert button prompt action */
  'changes.action.revert-all-cancel': 'ರದ್ದುಗೊಳಿಸಿ',
  /** Revert all confirm label for revert button action - used on prompt button + review changes pane */
  'changes.action.revert-all-confirm': 'ಎಲ್ಲವನ್ನು ಹಿಂದಿರುಗಿಸಿ',
  /** Prompt for confirming revert change (singular) label for field change action */
  'changes.action.revert-changes-confirm-change_one': 'ಬದಲಾವಣೆಯನ್ನು ಹಿಂದಿರುಗಿಸಿ',
  /** Revert for confirming revert (plural) label for field change action */
  'changes.action.revert-changes-confirm-change_other': 'ಬದಲಾವಣೆಗಳನ್ನು ಹಿಂದಿರುಗಿಸಿ',
  /** Prompt for reverting changes for a field change */
  'changes.action.revert-changes-description': 'ನೀವು ಬದಲಾವಣೆಗಳನ್ನು ಹಿಂದಿರುಗಿಸಲು ಖಚಿತವಾಗಿದ್ದೀರಾ?',
  /** Prompt for reverting changes for a group change, eg multiple changes */
  'changes.action.revert-changes-description_one': 'ನೀವು ಬದಲಾವಣೆಯನ್ನು ಹಿಂದಿರುಗಿಸಲು ಖಚಿತವಾಗಿದ್ದೀರಾ?',
  /** Label for when the action of the change was to set something that was previously empty, eg a field was given a value, an array item was added, an asset was selected or similar */
  'changes.added-label': 'ಸೇರಿಸಲಾಗಿದೆ',
  /** Array diff: An item was added in a given position (`{{position}}`) */
  'changes.array.item-added-in-position': 'ಸ್ಥಾನ {{position}}ನಲ್ಲಿ ಸೇರಿಸಲಾಗಿದೆ',
  'changes.array.item-moved_down_one': '{{count}} ಸ್ಥಾನವನ್ನು ಕೆಳಗೆ ಸರಿಸಲಾಗಿದೆ',
  'changes.array.item-moved_down_other': '{{count}} ಸ್ಥಾನಗಳನ್ನು ಕೆಳಗೆ ಸರಿಸಲಾಗಿದೆ',
  /**
   * Array diff: An item was moved within the array.
   * Receives `{{count}}` representing number of positions it moved.
   * Context is the direction of the move, either `up` or `down`.
   */
  'changes.array.item-moved_up_one': '{{count}} ಸ್ಥಾನವನ್ನು ಮೇಲೆ ಸರಿಸಲಾಗಿದೆ',
  'changes.array.item-moved_up_other': '{{count}} ಸ್ಥಾನಗಳನ್ನು ಮೇಲೆ ಸರಿಸಲಾಗಿದೆ',
  /** Array diff: An item was removed from a given position (`{{position}}`) */
  'changes.array.item-removed-from-position': 'ಸ್ಥಾನ {{position}}ನಿಂದ ತೆಗೆದುಹಾಕಲಾಗಿದೆ',
  /** Accessibility label for the "change bar" shown when there are edits on a field-level */
  'changes.change-bar.aria-label': 'ಪರಿಷ್ಕರಣೆಗಳನ್ನು ಪರಿಶೀಲಿಸಿ',
  /** Label for when the action of the change was _not_ an add/remove, eg a text field changed value, an image was changed from one asset to another or similar */
  'changes.changed-label': 'ಬದಲಾಗಿದೆ',
  /** Label and text for tooltip that indicates the authors of the changes */
  'changes.changes-by-author': 'ಬದಲಾವಣೆಗಳು ಬರೆದವರಿಂದ',
  /** Additional text shown in development mode when a diff component crashes during rendering */
  'changes.error-boundary.developer-info': 'ಹೆಚ್ಚು ಮಾಹಿತಿಗಾಗಿ ಡೆವಲಪರ್ ಕನ್ಸೋಲ್ ಪರಿಶೀಲಿಸಿ',
  /** Text shown when a diff component crashes during rendering, triggering the error boundary */
  'changes.error-boundary.title': 'ಈ ಕ್ಷೇತ್ರದ ಬದಲಾವಣೆಗಳನ್ನು ರೆಂಡರ್ ಮಾಡುವಾಗ ದೋಷವೊಂದು ಉಂಟಾಗಿದೆ',
  /** Error message shown when the value of a field is not the expected one */
  'changes.error.incorrect-type-message':
    'ಮೌಲ್ಯ ದೋಷ: ಮೌಲ್ಯವು "<code>{{actualType}}</code>" ಪ್ರಕಾರದಲ್ಲಿದೆ, "<code>{{expectedType}}</code>" ಪ್ರಕಾರದಲ್ಲಿರಬೇಕಿತ್ತು',
  /** File diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.file.meta-info-fallback-title': 'ಶೀರ್ಷಿಕೆ ಇಲ್ಲದ',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.crop-changed': 'ಕ್ರಾಪ್ ಬದಲಾಗಿದೆ',
  /** Image diff: Text shown if the previous image asset was deleted (shouldn't theoretically happen) */
  'changes.image.deleted': 'ಚಿತ್ರ ಅಳಿಸಲಾಗಿದೆ',
  /** Image diff: Text shown if the image failed to be loaded when previewing it */
  'changes.image.error-loading-image': 'ಚಿತ್ರ ಲೋಡ್ ಮಾಡುವಲ್ಲಿ ದೋಷ',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.hotspot-changed': 'ಹಾಟ್‌ಸ್ಪಾಟ್ ಬದಲಾಗಿದೆ',
  /** Image diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.image.meta-info-fallback-title': 'ಶೀರ್ಷಿಕೆ ಇಲ್ಲದ',
  /** Image diff: Text shown if no asset has been set for the field (but has metadata changes) */
  'changes.image.no-asset-set': 'ಚಿತ್ರ ಹೊಂದಿಸಲಾಗಿಲ್ಲ',
  /** Image diff: Text shown when the from/to state has/had no image */
  'changes.image.no-image-placeholder': '(ಚಿತ್ರವಿಲ್ಲ)',
  /** Label for the "from" value in the change inspector */
  'changes.inspector.from-label': 'ಇಂದ',
  /** Label for the "meta" (field path, action etc) information in the change inspector */
  'changes.inspector.meta-label': 'ಮೆಟಾ',
  /** Label for the "to" value in the change inspector */
  'changes.inspector.to-label': 'ಗೆ',
  /** Loading author of change in the differences tooltip in the review changes pane */
  'changes.loading-author': 'ಲೋಡ್ ಆಗುತ್ತಿದೆ…',
  /** Loading changes in Review Changes Pane */
  'changes.loading-changes': 'ಬದಲಾವಣೆಗಳನ್ನು ಲೋಡ್ ಮಾಡುತ್ತಿದೆ…',
  /** No Changes description in the Review Changes pane */
  'changes.no-changes-description':
    'ದಾಖಲೆಯನ್ನು ಸಂಪಾದಿಸಿ ಅಥವಾ ಟೈಮ್‌ಲೈನ್‌ನಲ್ಲಿ ಹಳೆಯ ಆವೃತ್ತಿಯನ್ನು ಆರಿಸಿ ಈ ಪ್ಯಾನೆಲ್‌ನಲ್ಲಿ ಬದಲಾವಣೆಗಳ ಪಟ್ಟಿ ಕಾಣಿಸಲು.',
  /** No Changes title in the Review Changes pane */
  'changes.no-changes-title': 'ಯಾವುದೇ ಬದಲಾವಣೆಗಳಿಲ್ಲ',
  /** Portable Text diff: An annotation was added */
  'changes.portable-text.annotation_added': 'ಅನ್ನೋಟೇಶನ್ ಸೇರಿಸಲಾಗಿದೆ',
  /** Portable Text diff: An annotation was changed */
  'changes.portable-text.annotation_changed': 'ಅನ್ನೋಟೇಶನ್ ಬದಲಾಗಿದೆ',
  /** Portable Text diff: An annotation was removed */
  'changes.portable-text.annotation_removed': 'ಅನ್ನೋಟೇಶನ್ ತೆಗೆದುಹಾಕಲಾಗಿದೆ',
  /** Portable Text diff: An annotation was left unchanged */
  'changes.portable-text.annotation_unchanged': 'ಅನ್ನೋಟೇಶನ್ ಬದಲಾಗಿಲ್ಲ',
  /** Portable Text diff: A block changed from one style to another (eg `normal` to `h1` or similar) */
  'changes.portable-text.block-style-changed':
    'ಬ್ಲಾಕ್ ಶೈಲಿಯನ್ನು "{{fromStyle}}" ಇಂದ "{{toStyle}}" ಗೆ ಬದಲಾಗಿದೆ',
  /** Portable Text diff: Change formatting of text (setting/unsetting marks, eg bold/italic etc) */
  'changes.portable-text.changed-formatting': 'ಬದಲಾವಣೆಯಾದ ಸ್ವರೂಪಣೆ',
  /** Portable Text diff: An empty inline object is part of a change */
  'changes.portable-text.empty-inline-object': 'ಖಾಲಿ {{inlineObjectType}}',
  /** Portable Text diff: An empty object is the result of adding/removing an annotation */
  'changes.portable-text.empty-object-annotation': 'ಖಾಲಿ {{annotationType}}',
  /** Portable Text diff: Added a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_added': 'ಖಾಲಿ ಪಠ್ಯ ಸೇರಿಸಲಾಗಿದೆ',
  /** Portable Text diff: Changed a block that contained no text (eg empty block) */
  'changes.portable-text.empty-text_changed': 'ಖಾಲಿ ಪಠ್ಯ ಬದಲಾಗಿದೆ',
  /** Portable Text diff: Removed a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_removed': 'ಖಾಲಿ ಪಠ್ಯ ತೆಗೆದುಹಾಕಲಾಗಿದೆ',
  /** Portable Text diff: An inline object was added */
  'changes.portable-text.inline-object_added': 'ಇನ್‌ಲೈನ್ ವಸ್ತು ಸೇರಿಸಲಾಗಿದೆ',
  /** Portable Text diff: An inline object was changed */
  'changes.portable-text.inline-object_changed': 'ಇನ್‌ಲೈನ್ ವಸ್ತು ಬದಲಾಗಿದೆ',
  /** Portable Text diff: An inline object was removed */
  'changes.portable-text.inline-object_removed': 'ಇನ್‌ಲೈನ್ ವಸ್ತು ತೆಗೆದುಹಾಕಲಾಗಿದೆ',
  /** Portable Text diff: An inline object was left unchanged */
  'changes.portable-text.inline-object_unchanged': 'ಬದಲಾವಣೆಯಾಗದ ಇನ್‌ಲೈನ್ ವಸ್ತು',
  /** Portable Text diff: Added a chunk of text */
  'changes.portable-text.text_added': 'ಪಠ್ಯ ಸೇರಿಸಲಾಗಿದೆ',
  /** Portable Text diff: Removed a chunk of text */
  'changes.portable-text.text_removed': 'ಪಠ್ಯ ತೆಗೆದುಹಾಕಲಾಗಿದೆ',
  /** Portable Text diff: Annotation has an unknown schema type */
  'changes.portable-text.unknown-annotation-schema-type': 'ಅಜ್ಞಾತ ಸ್ಕೀಮಾ ಪ್ರಕಾರ',
  /** Portable Text diff: Inline object has an unknown schema type */
  'changes.portable-text.unknown-inline-object-schema-type': 'ಅಜ್ಞಾತ ಸ್ಕೀಮಾ ಪ್ರಕಾರ',
  /** Label for when the action of the change was a removal, eg a field was cleared, an array item was removed, an asset was deselected or similar */
  'changes.removed-label': 'ತೆಗೆದುಹಾಕಲಾಗಿದೆ',
  /** Title for the Review Changes pane */
  'changes.title': 'ಪರಿಷ್ಕರಣೆಗಳನ್ನು ಪರಿಶೀಲಿಸಿ',

  /** --- Common components --- */
  /** Tooltip text for context menu buttons */
  'common.context-menu-button.tooltip': 'ಹೆಚ್ಚು ತೋರಿಸಿ',
  /** Default text for dialog cancel button */
  'common.dialog.cancel-button.text': 'ರದ್ದುಮಾಡಿ',
  /** Default text for dialog confirm button */
  'common.dialog.confirm-button.text': 'ದೃಢೀಕರಿಸಿ',
  /** Default text in shared loader text / spinner lockup */
  'common.loading': 'ಲೋಡಿಂಗ್',

  /** --- Configuration issues --- */
  /** Default label text on configuration issues button */
  'configuration-issues.button.label': 'ಸಂರಚನಾ ಸಮಸ್ಯೆಗಳು',
  /** Tooltip displayed on configuration issues button */
  'configuration-issues.button.tooltip': 'ಸಂರಚನಾ ಸಮಸ್ಯೆಗಳು ಕಂಡುಬಂದಿವೆ',

  /** The fallback title for an ordering menu item if no localized titles are provided. */
  'default-menu-item.fallback-title': '{{title}} ಪ್ರಕಾರ ವಿಂಗಡಿಸಿ',

  /** Title for the default ordering/SortOrder if no orderings are provided and the caption field is found */
  'default-orderings.caption': 'ಶೀರ್ಷಿಕೆ ಪ್ರಕಾರ ವಿಂಗಡಿಸಿ',
  /** Title for the default ordering/SortOrder if no orderings are provided and the description field is found */
  'default-orderings.description': 'ವಿವರಣೆ ಪ್ರಕಾರ ವಿಂಗಡಿಸಿ',
  /** Title for the default ordering/SortOrder if no orderings are provided and the header field is found */
  'default-orderings.header': 'ಹೆಡರ್ ಪ್ರಕಾರ ವಿಂಗಡಿಸಿ',
  /** Title for the default ordering/SortOrder if no orderings are provided and the heading field is found */
  'default-orderings.heading': 'ಶೀರ್ಷಿಕೆಯ ಪ್ರಕಾರ ವಿಂಗಡಿಸಿ',
  /** Title for the default ordering/SortOrder if no orderings are provided and the label field is found */
  'default-orderings.label': 'ಲೇಬಲ್ ಪ್ರಕಾರ ವಿಂಗಡಿಸಿ',
  /** Title for the default ordering/SortOrder if no orderings are provided and the name field is found */
  'default-orderings.name': 'ಹೆಸರು ಪ್ರಕಾರ ವಿಂಗಡಿಸಿ',
  /** Title for the default ordering/SortOrder if no orderings are provided and the title field is found */
  'default-orderings.title': 'ಶೀರ್ಷಿಕೆ ಪ್ರಕಾರ ವಿಂಗಡಿಸಿ',

  /** Label to show in the document footer indicating the last edited date of the document */
  'document-status.edited': 'ಸಂಪಾದಿತ {{date}}',
  /** Label to show in the document footer indicating the document is not published*/
  'document-status.not-published': 'ಪ್ರಕಟಿಸಲಾಗಿಲ್ಲ',
  /** Label to show in the document footer indicating the published date of the document */
  'document-status.published': 'ಪ್ರಕಟಿತ {{date}}',

  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.duplicate-keys-alert.details.additional-description':
    '<code>_key</code> ಗುಣದ ಮೌಲ್ಯವು ಅನನ್ಯ ಸ್ಟ್ರಿಂಗ್ ಆಗಿರಬೇಕು.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property of each elements has been generated non-uniquely. */
  'form.error.duplicate-keys-alert.details.description':
    'ಇದು ಸಾಮಾನ್ಯವಾಗಿ ಐಟಂಗಳು API ಕ್ಲೈಂಟ್ ಬಳಸಿ ರಚಿಸಲಾಗಿದ್ದಾಗ ಮತ್ತು ಪ್ರತಿ ಅಂಶಗಳ <code>_key</code> ಗುಣವು ಅನನ್ಯವಾಗಿ ರಚಿಸಲಾಗಿಲ್ಲದಾಗ ನಡೆಯುತ್ತದೆ.',
  /** Developer info */
  'form.error.duplicate-keys-alert.details.title': 'ಡೆವಲಪರ್ ಮಾಹಿತಿ',
  /** Generate unique keys */
  'form.error.duplicate-keys-alert.generate-button.text': 'ಅನನ್ಯ ಕೀಗಳನ್ನು ರಚಿಸಿ',
  /** Several items in this list share the same identifier (key). Every item must have an unique identifier. */
  'form.error.duplicate-keys-alert.summary':
    'ಈ ಪಟ್ಟಿಯಲ್ಲಿನ ಹಲವಾರು ಐಟಂಗಳು ಒಂದೇ ಗುರುತು (ಕೀ) ಹಂಚಿಕೊಂಡಿವೆ. ಪ್ರತಿ ಐಟಂಗಳು ಅನನ್ಯ ಗುರುತು ಹೊಂದಿರಬೇಕು.',
  /** Non-unique keys */
  'form.error.duplicate-keys-alert.title': 'ಅನನ್ಯವಲ್ಲದ ಕೀಗಳು',
  /** Error text shown when a field with a given name cannot be found in the schema or is conditionally hidden but explicitly told to render  */
  'form.error.field-not-found':
    'ಕ್ಷೇತ್ರ "{{fieldName}}" ಸದಸ್ಯರಲ್ಲಿ ಕಾಣಿಸಿಲ್ಲ – ಅದು ಸ್ಕೀಮಾದಲ್ಲಿ ನಿರ್ಧಾರಿಸಲಾಗಿದೆ ಮತ್ತು ಅದು ಷರತ್ತುಬದ್ಧವಾಗಿ ಮರೆಮಾಡಲಾಗಿಲ್ಲ ಎಂದು ಖಚಿತಪಡಿಸಿ.',
  /** Add missing keys */
  'form.error.missing-keys-alert.add-button.text': 'ಕಾಣೆಯಾದ ಕೀಗಳನ್ನು ಸೇರಿಸಿ',
  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.missing-keys-alert.details.additional-description':
    '<code>_key</code> ಗುಣದ ಮೌಲ್ಯವು ಅನನ್ಯ ಸ್ಟ್ರಿಂಗ್ ಆಗಿರಬೇಕು.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property has not been included. */
  'form.error.missing-keys-alert.details.description':
    'ಇದು ಸಾಮಾನ್ಯವಾಗಿ ಐಟಂಗಳು API ಕ್ಲೈಂಟ್ ಬಳಸಿ ರಚಿಸಲಾಗಿದ್ದಾಗ ಮತ್ತು <code>_key</code> ಗುಣವನ್ನು ಸೇರಿಸಲಾಗಿಲ್ಲದಾಗ ನಡೆಯುತ್ತದೆ.',
  /** Developer info */
  'form.error.missing-keys-alert.details.title': 'ಡೆವಲಪರ್ ಮಾಹಿತಿ',
  /** Some items in the list are missing their keys. This must be fixed in order to edit the list. */
  'form.error.missing-keys-alert.summary':
    'ಪಟ್ಟಿಯಲ್ಲಿನ ಕೆಲವು ಐಟಂಗಳು ತಮ್ಮ ಕೀಗಳನ್ನು ಕಳೆದುಕೊಂಡಿವೆ. ಪಟ್ಟಿಯನ್ನು ಸಂಪಾದಿಸಲು ಇದನ್ನು ಸರಿಪಡಿಸಬೇಕು.',
  /** Missing keys */
  'form.error.missing-keys-alert.title': 'ಕಾಣೆಯಾದ ಕೀಗಳು',
  /** This usually happens when items are created using an API client, or when a custom input component has added invalid data to the list. */
  'form.error.mixed-array-alert.details.description':
    'ಇದು ಸಾಮಾನ್ಯವಾಗಿ ಐಟಂಗಳು API ಕ್ಲೈಂಟ್ ಬಳಸಿ ರಚಿಸಲಾಗಿದ್ದಾಗ ಅಥವಾ ಕಸ್ಟಮ್ ಇನ್‌ಪುಟ್ ಕಾಂಪೋನೆಂಟ್ ಪಟ್ಟಿಗೆ ಅಮಾನ್ಯ ಡೇಟಾ ಸೇರಿಸಿದಾಗ ನಡೆಯುತ್ತದೆ.',
  /** Developer info */
  'form.error.mixed-array-alert.details.title': 'ಡೆವಲಪರ್ ಮಾಹಿತಿ',
  /**  Remove non-object values */
  'form.error.mixed-array-alert.remove-button.text': 'ಅಲ್ಲದ ವಸ್ತು ಮೌಲ್ಯಗಳನ್ನು ತೆಗೆದುಹಾಕಿ',
  /** Some items in this list are not objects. This must be fixed in order to edit the list. */
  'form.error.mixed-array-alert.summary':
    'ಈ ಪಟ್ಟಿಯಲ್ಲಿನ ಕೆಲವು ಐಟಂಗಳು ವಸ್ತುಗಳಲ್ಲ. ಪಟ್ಟಿಯನ್ನು ಸಂಪಾದಿಸಲು ಇದನ್ನು ಸರಿಪಡಿಸಬೇಕು.',
  /** Invalid list values */
  'form.error.mixed-array-alert.title': 'ಅಮಾನ್ಯ ಪಟ್ಟಿ ಮೌಲ್ಯಗಳು',
  /** Error text shown when form is unable to find an array item at a given indexed path */
  'form.error.no-array-item-at-index':
    'ಸೂಚ್ಯಂಕ <code>{{index}}</code>ನಲ್ಲಿ ಯಾವುದೇ ಅನುಕ್ರಮಣಿಕಾ ಅಂಶವನ್ನು ಪಥ <code>{{path}}</code>ನಲ್ಲಿ ಕಂಡುಹಿಡಿಯಲಾಗಿಲ್ಲ',
  /** Error text shown when form is unable to find an array item at a given keyed path */
  'form.error.no-array-item-at-key':
    'ಕೀಲಿ <code>"{{key}}"</code>ಯೊಂದಿಗೆ ಯಾವುದೇ ಅನುಕ್ರಮಣಿಕಾ ಅಂಶವನ್ನು ಪಥ <code>{{path}}</code>ನಲ್ಲಿ ಕಂಡುಹಿಡಿಯಲಾಗಿಲ್ಲ',
  /** The title above the error call stack output related to the crash */
  'form.error.unhandled-runtime-error.call-stack.title': 'ಕರೆ ಸ್ಟ್ಯಾಕ್:',
  /** The title above the error component stack provided by React's underlying ErrorBoundary component */
  'form.error.unhandled-runtime-error.component-stack.title': 'ಘಟಕ ಸ್ಟ್ಯಾಕ್:',
  /** The error message for the unhandled error that crashed the Input component during render */
  'form.error.unhandled-runtime-error.error-message': 'ದೋಷ: {{message}}',
  /** The title for the error card rendered inside a field in place of a crashing input */
  'form.error.unhandled-runtime-error.title': 'ನಿರ್ವಹಿಸದ ರನ್‌ಟೈಮ್ ದೋಷ',
  /** Form field deprecated label */
  'form.field.deprecated-label': 'ಅಪ್ರಚಲಿತ',
  /** Fallback title shown above field if it has no defined title */
  'form.field.untitled-field-label': 'ಶೀರ್ಷಿಕೆ ಇಲ್ಲದ',
  /** Accessibility label for the icon that indicates the field has a validation error */
  'form.validation.has-error-aria-label': 'ದೋಷವಿದೆ',
  /** Accessibility label for the icon that indicates the field has validation information */
  'form.validation.has-info-aria-label': 'ಮಾಹಿತಿ ಇದೆ',
  /** Accessibility label for the icon that indicates the field has a validation warning */
  'form.validation.has-warning-aria-label': 'ಎಚ್ಚರಿಕೆ ಇದೆ',
  /** Text shown when summarizing validation information, when the field has one or more errors */
  'form.validation.summary.errors-count_one': '{{count}} ದೋಷ',
  'form.validation.summary.errors-count_other': '{{count}} ದೋಷಗಳು',
  /** Text shown when summarizing validation information, when the field has one or more warnings */
  'form.validation.summary.warnings-count_one': '{{count}} ಎಚ್ಚರಿಕೆ',
  'form.validation.summary.warnings-count_other': '{{count}} ಎಚ್ಚರಿಕೆಗಳು',

  /** Tooltip for free trial navbar button indicating remaining days */
  'free-trial.tooltip.days-count_one': 'ಉಚಿತ ಪರೀಕ್ಷಾ ಅವಧಿಯಲ್ಲಿ {{count}} ದಿನ ಉಳಿದಿದೆ',
  'free-trial.tooltip.days-count_other': 'ಉಚಿತ ಪರೀಕ್ಷಾ ಅವಧಿಯಲ್ಲಿ {{count}} ದಿನಗಳು ಉಳಿದಿವೆ',
  /** Tooltip for free trial navbar button, once trial has ended */
  'free-trial.tooltip.trial-finished': 'ನಿಮ್ಮ ಯೋಜನೆಯನ್ನು ನವೀಕರಿಸಿ',

  /**
   * Label for "contact sales" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.contact-sales': 'ಮಾರಾಟ ತಂಡದೊಂದಿಗೆ ಸಂಪರ್ಕಿಸಿ',
  /**
   * Label for "help and support" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.help-and-support': 'ಸಹಾಯ ಮತ್ತು ಬೆಂಬಲ',
  /**
   * Label for "join our community" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.join-our-community': 'ನಮ್ಮ ಸಮುದಾಯದಲ್ಲಿ ಸೇರಿ',
  /** Information for what the latest sanity version is */
  'help-resources.latest-sanity-version': 'ಇತ್ತೀಚಿನ ಆವೃತ್ತಿ {{latestVersion}} ಆಗಿದೆ',
  /** Information for what studio version the current studio is running */
  'help-resources.studio-version': 'Sanity Studio ಆವೃತ್ತಿ {{studioVersion}}',
  /** Title for help and resources menus */
  'help-resources.title': 'ಸಹಾಯ ಮತ್ತು ಸಂಪನ್ಮೂಲಗಳು',

  /** Text for button to cancel an ongoing upload */
  'input.files.common.cancel-upload': 'ಅಪ್‌ಲೋಡ್ ರದ್ದುಮಾಡಿ',
  /** Text for file input button in upload placeholder */
  'input.files.common.upload-placeholder.file-input-button.text': 'ಅಪ್‌ಲೋಡ್ ಮಾಡಿ',
  /** Uploading <FileName/> */
  'input.files.common.upload-progress': 'ಅಪ್‌ಲೋಡ್ ಮಾಡುತ್ತಿದೆ <FileName/>',
  /** The referenced document cannot be opened, because the URL failed to be resolved */
  'input.reference.document-cannot-be-opened.failed-to-resolve-url':
    'ಈ ದಾಖಲೆಯನ್ನು ತೆರೆಯಲಾಗುವುದಿಲ್ಲ (Studioಗೆ URL ಅನ್ನು ಪರಿಹರಿಸಲು ಅಸಮರ್ಥ)',

  /** Label for adding item after a specific array item */
  'inputs.array.action.add-after': 'ನಂತರ ಐಟಂ ಸೇರಿಸಿ',
  /** Label for adding item before a specific array item */
  'inputs.array.action.add-before': 'ಮೊದಲು ಐಟಂ ಸೇರಿಸಿ',
  /** Label for adding array item action when the schema allows for only one schema type */
  'inputs.array.action.add-item': 'ಐಟಂ ಸೇರಿಸಿ',
  /**
   * Label for adding one array item action when the schema allows for multiple schema types,
   * eg. will prompt the user to select a type once triggered
   */
  'inputs.array.action.add-item-select-type': 'ಐಟಂ ಸೇರಿಸಿ...',
  /** Array drag handle button tooltip */
  'inputs.array.action.drag.tooltip': 'ಪುನರ್ವ್ಯವಸ್ಥಿತಿಗಾಗಿ ಎಳೆಯಿರಿ',
  /** Label for duplicating an array item  */
  'inputs.array.action.duplicate': 'ನಕಲಿಸಿ',
  /** Label for editing the item of a specific type, eg "Edit Person" */
  'inputs.array.action.edit': '{{itemTypeTitle}} ಸಂಪಾದಿಸಿ',
  /** Label for removing an array item action  */
  'inputs.array.action.remove': 'ತೆಗೆದುಹಾಕಿ',
  /** Label for removing action when an array item has an error  */
  'inputs.array.action.remove-invalid-item': 'ತೆಗೆದುಹಾಕಿ',
  /** Label for viewing the item of a specific type, eg "View Person" */
  'inputs.array.action.view': '{{itemTypeTitle}} ವೀಕ್ಷಿಸಿ',
  /** Error description for the array item tooltip that explains that the current item can still be moved or deleted but not edited since the schema definition is not found */
  'inputs.array.error.can-delete-but-no-edit-description':
    'ನೀವು ಈ ಐಟಂ ಅನ್ನು ಇನ್ನೂ ಸರಿಸಬಹುದು ಅಥವಾ ತೆಗೆದುಹಾಕಬಹುದು, ಆದರೆ ಅದರ ಪ್ರಕಾರದ ಯೋಜನೆ ವಿವರಣೆ ಎಲ್ಲೂ ಸಿಗುತ್ತಿಲ್ಲ ಎಂದು ಅದನ್ನು ಸಂಪಾದಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ.',
  /** Error label for toast when array could not resolve the initial value */
  'inputs.array.error.cannot-resolve-initial-value-title':
    'ಪ್ರಕಾರ: {{schemaTypeTitle}} ಗಾಗಿ ಪ್ರಾರಂಭಿಕ ಮೌಲ್ಯವನ್ನು ಬಗೆಹರಿಸಲು ಅಸಾಧ್ಯ: {{errorMessage}}.',
  /** Error label for toast when trying to upload one array item of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_one':
    'ಕೆಳಗಿನ ಐಟಂ ಅನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಲು ಸಾಧ್ಯವಿಲ್ಲ ಏಕೆಂದರೆ ವಿಷಯ ಪ್ರಕಾರದಿಂದ ಐಟಂ ಪ್ರಕಾರಕ್ಕೆ ಪರಿವರ್ತನೆಯ ಗೊತ್ತಿಲ್ಲ:',
  /** Error label for toast when trying to upload multiple array items of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_other':
    'ಕೆಳಗಿನ ಐಟಂಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಲು ಸಾಧ್ಯವಿಲ್ಲ ಏಕೆಂದರೆ ವಿಷಯ ಪ್ರಕಾರಗಳಿಂದ ಐಟಂ ಪ್ರಕಾರಕ್ಕೆ ಪರಿವರ್ತನೆಯ ಗೊತ್ತಿಲ್ಲ:',
  /** Error description for the array item tooltip that explains that the current type item is not valid for the list  */
  'inputs.array.error.current-schema-not-declare-description':
    'ಪ್ರಸ್ತುತ ಯೋಜನೆಯು ಈ ಪಟ್ಟಿಗೆ <code>{{typeName}}</code> ಪ್ರಕಾರದ ಐಟಂಗಳನ್ನು ಮಾನ್ಯವಾಗಿ ಘೋಷಿಸಿಲ್ಲ. ಇದು ಪ್ರಕಾರವನ್ನು ಮಾನ್ಯ ಐಟಂ ಪ್ರಕಾರವಾಗಿ ತೆಗೆದುಹಾಕಲಾಗಿದೆ ಅಥವಾ ಯಾರಾದರೂ ಇನ್ನೊಬ್ಬರು ಅವರ ಸ್ಥಳೀಯ ಯೋಜನೆಗೆ ಸೇರಿಸಿದ್ದಾರೆ ಮತ್ತು ಅದು ಇನ್ನೂ ಹರಿಯಲ್ಪಟ್ಟಿಲ್ಲ ಎಂದು ಅರ್ಥ.',
  /** Error description to show how the item is being represented in the json format */
  'inputs.array.error.json-representation-description': 'ಈ ಐಟಂನ ಜೇಸನ್ ಪ್ರಾತಿನಿಧ್ಯ:',
  /** Error description for the array item tooltip that explains what the error means with more context */
  'inputs.array.error.type-is-incompatible-prompt':
    'ಈ ಪಟ್ಟಿಗೆ <code>{{typeName}}</code> ಪ್ರಕಾರದ ಐಟಂ ಮಾನ್ಯವಲ್ಲ',
  /** Error title for when an item type within an array input is incompatible, used in the tooltip */
  'inputs.array.error.type-is-incompatible-title': 'ಇದು ಯಾಕೆ ನಡೆಯುತ್ತಿದೆ?',
  /** Error label for unexpected errors in the Array Input */
  'inputs.array.error.unexpected-error': 'ಅನಿರೀಕ್ಷಿತ ದೋಷ: {{error}}',
  /** Label for the array insert menu all items filter  */
  'inputs.array.insert-menu.filter.all-items': 'ಎಲ್ಲಾ',
  /** Label for when the array insert menu search shows no items */
  'inputs.array.insert-menu.search.no-results': 'ಯಾವುದೇ ಐಟಂಗಳು ಕಂಡುಬಂದಿಲ್ಲ',
  /** Placeholder for the array insert menu search field */
  'inputs.array.insert-menu.search.placeholder': 'ಹುಡುಕು',
  /** Tooltip for the array insert menu grid view toggle */
  'inputs.array.insert-menu.toggle-grid-view.tooltip': 'ಗ್ರಿಡ್ ವೀಕ್ಷಣೆಯನ್ನು ಬದಲಿಸಿ',
  /** Tooltip for the array insert menu list view toggle */
  'inputs.array.insert-menu.toggle-list-view.tooltip': 'ಪಟ್ಟಿ ವೀಕ್ಷಣೆಯನ್ನು ಬದಲಿಸಿ',
  /** Label for when the array input doesn't have any items */
  'inputs.array.no-items-label': 'ಯಾವುದೇ ಐಟಂಗಳಿಲ್ಲ',
  /** Label for read only array fields */
  'inputs.array.read-only-label': 'ಈ ಕ್ಷೇತ್ರ ಕೇವಲ ಓದಲು ಮಾತ್ರ',
  /** Label for when the array input is resolving the initial value for the item */
  'inputs.array.resolving-initial-value': 'ಪ್ರಾರಂಭಿಕ ಮೌಲ್ಯ ಪರಿಹರಿಸುತ್ತಿದೆ…',
  /** Tooltip content when boolean input is disabled */
  'inputs.boolean.disabled': 'ನಿಷ್ಕ್ರಿಯ',
  /** Placeholder value for datetime input */
  'inputs.datetime.placeholder': 'ಉದಾ. {{example}}',
  /** Acessibility label for button to open file options menu */
  'inputs.file.actions-menu.file-options.aria-label': 'ಫೈಲ್ ಆಯ್ಕೆಗಳ ಮೆನು ತೆರೆಯಿರಿ',
  /** Browse */
  'inputs.file.browse-button.text': 'ಬ್ರೌಸ್ ಮಾಡಿ',
  /** Select file */
  'inputs.file.dialog.title': 'ಫೈಲ್ ಆಯ್ಕೆಮಾಡಿ',
  /** Unknown member kind: `{{kind}}` */
  'inputs.file.error.unknown-member-kind': 'ಅಜ್ಞಾತ ಸದಸ್ಯ ಪ್ರಕಾರ: {{kind}}',
  /** The value of this field is not a valid file. Resetting this field will let you choose a new file. */
  'inputs.file.invalid-file-warning.description':
    'ಈ ಕ್ಷೇತ್ರದ ಮೌಲ್ಯವು ಮಾನ್ಯವಾದ ಫೈಲ್ ಅಲ್ಲ. ಈ ಕ್ಷೇತ್ರವನ್ನು ಮರುಹೊಂದಿಸಿದರೆ ನೀವು ಹೊಸ ಫೈಲ್ ಆಯ್ಕೆಮಾಡಬಹುದು.',
  /** Reset value */
  'inputs.file.invalid-file-warning.reset-button.text': 'ಮೌಲ್ಯ ಮರುಹೊಂದಿಸಿ',
  /** Invalid file value */
  'inputs.file.invalid-file-warning.title': 'ಅಮಾನ್ಯ ಫೈಲ್ ಮೌಲ್ಯ',
  /** Select */
  'inputs.file.multi-browse-button.text': 'ಆಯ್ಕೆಮಾಡಿ',
  /** The upload could not be completed at this time. */
  'inputs.file.upload-failed.description': 'ಅಪ್‌ಲೋಡ್ ಈ ಸಮಯದಲ್ಲಿ ಪೂರ್ಣಗೊಳಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ.',
  /** Upload failed */
  'inputs.file.upload-failed.title': 'ಅಪ್‌ಲೋಡ್ ವಿಫಲವಾಗಿದೆ',
  /** Clear field */
  'inputs.files.common.actions-menu.clear-field.label': 'ಕ್ಷೇತ್ರ ಖಾಲಿಮಾಡಿ',
  /** Copy URL */
  'inputs.files.common.actions-menu.copy-url.label': 'URL ನಕಲಿಸಿ',
  /** Download */
  'inputs.files.common.actions-menu.download.label': 'ಡೌನ್‌ಲೋಡ್',
  /** The URL is copied to the clipboard */
  'inputs.files.common.actions-menu.notification.url-copied':
    'URL ನನ್ನು ಕ್ಲಿಪ್‌ಬೋರ್ಡ್‌ಗೆ ನಕಲಿಸಲಾಗಿದೆ',
  /** Replace */
  'inputs.files.common.actions-menu.replace.label': 'ಬದಲಾಯಿಸಿ',
  /** Upload */
  'inputs.files.common.actions-menu.upload.label': 'ಅಪ್‌ಲೋಡ್',
  /** Drop to upload */
  'inputs.files.common.drop-message.drop-to-upload': 'ಅಪ್‌ಲೋಡ್ ಮಾಡಲು ಬಿಡಿ',
  /** Drop to upload `{{count}}` file */
  'inputs.files.common.drop-message.drop-to-upload-multi_one': '{{count}} ಫೈಲ್ ಅಪ್‌ಲೋಡ್ ಮಾಡಲು ಬಿಡಿ',
  /** Drop to upload `{{count}}` files */
  'inputs.files.common.drop-message.drop-to-upload-multi_other':
    '{{count}} ಫೈಲ್‌ಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಲು ಬಿಡಿ',
  /** Can't upload this file here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_one':
    'ಈ ಫೈಲ್ ಇಲ್ಲಿ ಅಪ್‌ಲೋಡ್ ಮಾಡಲು ಸಾಧ್ಯವಿಲ್ಲ',
  /** Can't upload any of these files here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_other':
    'ಈ ಫೈಲ್‌ಗಳನ್ನು ಯಾವುದನ್ನೂ ಇಲ್ಲಿ ಅಪ್‌ಲೋಡ್ ಮಾಡಲು ಸಾಧ್ಯವಿಲ್ಲ',
  /** `{{count}}` file can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_one':
    '{{count}} ಫೈಲ್ ಇಲ್ಲಿ ಅಪ್‌ಲೋಡ್ ಮಾಡಲು ಸಾಧ್ಯವಿಲ್ಲ',
  /** `{{count}}` files can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_other':
    '{{count}} ಫೈಲ್‌ಗಳನ್ನು ಇಲ್ಲಿ ಅಪ್‌ಲೋಡ್ ಮಾಡಲು ಸಾಧ್ಯವಿಲ್ಲ',
  /** Cannot upload `{{count}}` files */
  'inputs.files.common.placeholder.cannot-upload-some-files_one': 'ಫೈಲ್ ಅಪ್‌ಲೋಡ್ ಮಾಡಲು ಸಾಧ್ಯವಿಲ್ಲ',
  'inputs.files.common.placeholder.cannot-upload-some-files_other':
    '{{count}} ಫೈಲ್‌ಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಲು ಸಾಧ್ಯವಿಲ್ಲ',
  /** Drag or paste type here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_file': 'ಫೈಲ್ ಇಲ್ಲಿ ಎಳೆದು ಅಥವಾ ಅಂಟಿಸಿ',
  /** Drag or paste image here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_image': 'ಚಿತ್ರ ಇಲ್ಲಿ ಎಳೆದು ಅಥವಾ ಅಂಟಿಸಿ',
  /** Drop to upload file */
  'inputs.files.common.placeholder.drop-to-upload_file': 'ಫೈಲ್ ಅಪ್‌ಲೋಡ್ ಮಾಡಲು ಬಿಡಿ',
  /** Drop to upload image */
  'inputs.files.common.placeholder.drop-to-upload_image': 'ಚಿತ್ರ ಅಪ್‌ಲೋಡ್ ಮಾಡಲು ಬಿಡಿ',
  /** Read only */
  'inputs.files.common.placeholder.read-only': 'ಕೇವಲ ಓದಲು',
  /** Can't upload files here */
  'inputs.files.common.placeholder.upload-not-supported':
    'ಇಲ್ಲಿ ಫೈಲ್‌ಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಲು ಸಾಧ್ಯವಿಲ್ಲ',
  /** Clear upload */
  'inputs.files.common.stale-upload-warning.clear': 'ಅಪ್‌ಲೋಡ್ ಅಳಿಸಿ',
  /** An upload has made no progress for at least `{{staleThresholdMinutes}}` minutes and likely got interrupted. You can safely clear the incomplete upload and try uploading again. */
  'inputs.files.common.stale-upload-warning.description':
    '{{staleThresholdMinutes}} ನಿಮಿಷಗಳಿಗಿಂತ ಕನಿಷ್ಠ ಅವಧಿಯಲ್ಲಿ ಯಾವುದೇ ಪ್ರಗತಿ ಇಲ್ಲದೆ ಅಪ್‌ಲೋಡ್ ಅಂತರಾಯಗೊಂಡಿರಬಹುದು. ಅಪೂರ್ಣ ಅಪ್‌ಲೋಡ್ ಅನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಅಳಿಸಿ ಮತ್ತೆ ಅಪ್‌ಲೋಡ್ ಮಾಡಲು ಯತ್ನಿಸಬಹುದು.',
  /** Incomplete upload */
  'inputs.files.common.stale-upload-warning.title': 'ಅಪೂರ್ಣ ಅಪ್‌ಲೋಡ್',
  /** Tooltip text for action to crop image */
  'inputs.image.actions-menu.crop-image-tooltip': 'ಚಿತ್ರ ಕ್ರಾಪ್ ಮಾಡಿ',
  /** Accessibility label for button to open image edit dialog */
  'inputs.image.actions-menu.edit-details.aria-label': 'ಚಿತ್ರ ಸಂಪಾದನಾ ಡೈಲಾಗ್ ತೆರೆಯಿರಿ',
  /** Accessibility label for button to open image options menu */
  'inputs.image.actions-menu.options.aria-label': 'ಚಿತ್ರ ಆಯ್ಕೆಗಳ ಮೆನು ತೆರೆಯಿರಿ',
  /** Select */
  'inputs.image.browse-menu.text': 'ಆಯ್ಕೆ ಮಾಡಿ',
  /** Cannot upload this file here */
  'inputs.image.drag-overlay.cannot-upload-here': 'ಇಲ್ಲಿ ಈ ಫೈಲ್ ಅಪ್‌ಲೋಡ್ ಮಾಡಲು ಸಾಧ್ಯವಿಲ್ಲ',
  /** Drop image to upload */
  'inputs.image.drag-overlay.drop-to-upload-image': 'ಚಿತ್ರ ಅಪ್‌ಲೋಡ್ ಮಾಡಲು ಬಿಡಿ',
  /** This field is read only */
  'inputs.image.drag-overlay.this-field-is-read-only': 'ಈ ಕ್ಷೇತ್ರ ಕೇವಲ ಓದಲು ಮಾತ್ರ',
  /** Unknown member kind: `{{kind}}` */
  'inputs.image.error.unknown-member-kind': 'ಅಜ್ಞಾತ ಸದಸ್ಯ ಪ್ರಕಾರ: {{kind}}',
  /** Edit hotspot and crop */
  'inputs.image.hotspot-dialog.title': 'ಹಾಟ್‌ಸ್ಪಾಟ್ ಮತ್ತು ಕ್ರಾಪ್ ಸಂಪಾದಿಸಿ',
  /** The value of this field is not a valid image. Resetting this field will let you choose a new image. */
  'inputs.image.invalid-image-warning.description':
    'ಈ ಕ್ಷೇತ್ರದ ಮೌಲ್ಯವು ಮಾನ್ಯವಾದ ಚಿತ್ರವಲ್ಲ. ಈ ಕ್ಷೇತ್ರವನ್ನು ಮರುಹೊಂದಿಸಿದರೆ ನೀವು ಹೊಸ ಚಿತ್ರವನ್ನು ಆಯ್ಕೆ ಮಾಡಬಹುದು.',
  /** Reset value */
  'inputs.image.invalid-image-warning.reset-button.text': 'ಮೌಲ್ಯ ಮರುಹೊಂದಿಸಿ',
  /** Invalid image value */
  'inputs.image.invalid-image-warning.title': 'ಅಮಾನ್ಯ ಚಿತ್ರ ಮೌಲ್ಯ',
  /** Preview of uploaded image */
  'inputs.image.preview-uploaded-image': 'ಅಪ್‌ಲೋಡ್ ಮಾಡಿದ ಚಿತ್ರದ ಮುನ್ನೋಟ',
  /** The upload could not be completed at this time. */
  'inputs.image.upload-error.description': 'ಈ ಸಮಯದಲ್ಲಿ ಅಪ್‌ಲೋಡ್ ಪೂರ್ಣಗೊಳಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ.',
  /** Upload failed */
  'inputs.image.upload-error.title': 'ಅಪ್‌ಲೋಡ್ ವಿಫಲವಾಗಿದೆ',
  /** Adjust the rectangle to crop image. Adjust the circle to specify the area that should always be visible. */
  'inputs.imagetool.description':
    'ಚಿತ್ರವನ್ನು ಕ್ರಾಪ್ ಮಾಡಲು ಆಯತಾಕಾರವನ್ನು ಹೊಂದಿಸಿ. ಯಾವಾಗಲೂ ಕಾಣಬೇಕಾದ ಪ್ರದೇಶವನ್ನು ನಿರ್ದಿಷ್ಟಪಡಿಸಲು ವೃತ್ತವನ್ನು ಹೊಂದಿಸಿ.',
  /** Error: `{{errorMessage}}` */
  'inputs.imagetool.load-error': 'ದೋಷ: {{errorMessage}}',
  /** Hotspot & Crop */
  'inputs.imagetool.title': 'ಹಾಟ್‌ಸ್ಪಾಟ್ & ಕ್ರಾಪ್',
  /** Convert to `{{targetType}}` */
  'inputs.invalid-value.convert-button.text': 'ಪರಿವರ್ತಿಸಿ {{targetType}} ಗೆ',
  /** The current value (<code>`{{actualType}}`</code>) */
  'inputs.invalid-value.current-type': 'ಪ್ರಸ್ತುತ ಮೌಲ್ಯ (<code>{{actualType}}</code>)',
  /** The property value is stored as a value type that does not match the expected type. */
  'inputs.invalid-value.description':
    'ಆಸ್ತಿಯ ಮೌಲ್ಯವು ನಿರೀಕ್ಷಿತ ಮೌಲ್ಯ ಪ್ರಕಾರಕ್ಕೆ ಹೊಂದಿಕೊಳ್ಳದ ಮೌಲ್ಯ ಪ್ರಕಾರದಲ್ಲಿ ಸಂಗ್ರಹಿಸಲಾಗಿದೆ.',
  /** The value of this property must be of type <code>`{{validType}}`</code> according to the schema. */
  'inputs.invalid-value.details.description':
    'ಈ ಆಸ್ತಿಯ ಮೌಲ್ಯವು ಸ್ಕೀಮಾ ಪ್ರಕಾರ <code>{{validType}}</code> ಮೌಲ್ಯ ಪ್ರಕಾರದಲ್ಲಿರಬೇಕು.',
  /** Only the following types are valid here according to schema: */
  'inputs.invalid-value.details.multi-type-description':
    'ಸ್ಕೀಮಾ ಪ್ರಕಾರ ಇಲ್ಲಿ ಕೇವಲ ಈ ಕೆಳಗಿನ ಮೌಲ್ಯ ಪ್ರಕಾರಗಳು ಮಾನ್ಯವಾಗಿವೆ:',
  /** Mismatching value types typically occur when the schema has recently been changed. */
  'inputs.invalid-value.details.possible-reason':
    'ಸ್ಕೀಮಾ ಇತ್ತೀಚೆಗೆ ಬದಲಾಗಿದ್ದರಿಂದ ಮೌಲ್ಯ ಪ್ರಕಾರಗಳ ಹೊಂದಾಣಿಕೆ ಇಲ್ಲದಿರುವುದು ಸಾಮಾನ್ಯವಾಗಿ ಸಂಭವಿಸುತ್ತದೆ.',
  /** Developer info */
  'inputs.invalid-value.details.title': 'ಡೆವಲಪರ್ ಮಾಹಿತಿ',
  /** -- Invalid Value Input -- */
  /** Reset value */
  'inputs.invalid-value.reset-button.text': 'ಮೌಲ್ಯವನ್ನು ಮರುಹೊಂದಿಸಿ',
  /** Invalid property value */
  'inputs.invalid-value.title': 'ಅಮಾನ್ಯ ಆಸ್ತಿ ಮೌಲ್ಯ',
  /** Title for the "All fields" field group */
  'inputs.object.field-group-tabs.all-fields-title': 'ಎಲ್ಲಾ ಕ್ಷೇತ್ರಗಳು',
  /** Aria label for the "Field groups" select control on smaller screens */
  'inputs.object.field-group-tabs.aria-label': 'ಕ್ಷೇತ್ರ ಗುಂಪುಗಳು',
  /** Read-only field description */
  'inputs.object.unknown-fields.read-only.description':
    'ಈ ಕ್ಷೇತ್ರವು ದಾಖಲೆಯ ಸ್ಕೀಮಾ ಪ್ರಕಾರ <strong>ಓದಲು ಮಾತ್ರ</strong> ಮತ್ತು ಅನ್ಸೆಟ್ ಮಾಡಲಾಗದು. ನೀವು ಸ್ಟುಡಿಯೋದಲ್ಲಿ ಇದನ್ನು ಅನ್ಸೆಟ್ ಮಾಡಲು ಬಯಸಿದರೆ, ಸ್ಕೀಮಾದಲ್ಲಿನ ಸುತ್ತುವರಿದ ಪ್ರಕಾರದಲ್ಲಿ <code>readOnly</code> ಕ್ಷೇತ್ರವನ್ನು ತೆಗೆದುಹಾಕಿ.',
  /** Remove field */
  'inputs.object.unknown-fields.remove-field-button.text': 'ಕ್ಷೇತ್ರವನ್ನು ತೆಗೆದುಹಾಕಿ',
  /** Encountered `{{count}}` fields that are not defined in the schema. */
  'inputs.object.unknown-fields.warning.description_one':
    'ಸ್ಕೀಮಾದಲ್ಲಿ ನಿರ್ವಚಿಸದ ಕ್ಷೇತ್ರವೊಂದನ್ನು ಕಂಡುಕೊಂಡಿದೆ.',
  'inputs.object.unknown-fields.warning.description_other':
    'ಸ್ಕೀಮಾದಲ್ಲಿ ನಿರ್ವಚಿಸದ {{count}} ಕ್ಷೇತ್ರಗಳನ್ನು ಕಂಡುಕೊಂಡಿದೆ.',
  /** Detailed description of unknown field warning */
  'inputs.object.unknown-fields.warning.details.description_one':
    'ಈ ಕ್ಷೇತ್ರವು ಸ್ಕೀಮಾದಲ್ಲಿ ನಿರ್ವಚಿಸದೆ ಇದೆ, ಇದು ಕ್ಷೇತ್ರ ವಿವರಣೆಯನ್ನು ತೆಗೆದುಹಾಕಲಾಗಿದೆ ಅಥವಾ ಯಾರಾದರೂ ತಮ್ಮ ಸ್ಥಳೀಯ ಯೋಜನೆಗೆ ಇದನ್ನು ಸೇರಿಸಿದ್ದಾರೆ ಮತ್ತು ಇನ್ನೂ ತಮ್ಮ ಬದಲಾವಣೆಗಳನ್ನು ಹರಿಬಿಟ್ಟಿಲ್ಲ ಎಂದು ಅರ್ಥ.',
  'inputs.object.unknown-fields.warning.details.description_other':
    'ಈ ಕ್ಷೇತ್ರಗಳು ದಾಖಲೆಯ ಸ್ಕೀಮಾದಲ್ಲಿ ನಿರ್ವಚಿಸದೆ ಇವೆ, ಇದು ಕ್ಷೇತ್ರ ವಿವರಣೆಗಳನ್ನು ತೆಗೆದುಹಾಕಲಾಗಿದೆ ಅಥವಾ ಯಾರಾದರೂ ತಮ್ಮ ಸ್ಥಳೀಯ ಯೋಜನೆಗೆ ಇದನ್ನು ಸೇರಿಸಿದ್ದಾರೆ ಮತ್ತು ಇನ್ನೂ ತಮ್ಮ ಬದಲಾವಣೆಗಳನ್ನು ಹರಿಬಿಟ್ಟಿಲ್ಲ ಎಂದು ಅರ್ಥ.',
  /** Developer info */
  'inputs.object.unknown-fields.warning.details.title': 'ಡೆವಲಪರ್ ಮಾಹಿತಿ',
  /** Unknown field found */
  'inputs.object.unknown-fields.warning.title_one': 'ಅಜ್ಞಾತ ಕ್ಷೇತ್ರ ಕಂಡುಬಂದಿದೆ',
  'inputs.object.unknown-fields.warning.title_other': 'ಅಜ್ಞಾತ ಕ್ಷೇತ್ರಗಳು ಕಂಡುಬಂದಿವೆ',
  /** Collapse the editor to save screen space  */
  'inputs.portable-text.action.collapse-editor': 'ಸಂಪಾದಕವನ್ನು ಕುಸಿತಗೊಳಿಸಿ',
  /** Aria label for action to edit an existing annotation */
  'inputs.portable-text.action.edit-annotation-aria-label': 'ಟಿಪ್ಪಣಿಯನ್ನು ಸಂಪಾದಿಸಿ',
  /** Expand the editor to give more editing space */
  'inputs.portable-text.action.expand-editor':
    'ಹೆಚ್ಚು ಸಂಪಾದನಾ ಜಾಗವನ್ನು ನೀಡಲು ಸಂಪಾದಕವನ್ನು ವಿಸ್ತರಿಸಿ',
  /** Label label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block': 'ಸೇರಿಸಿ {{typeName}}',
  /** Accessibility label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block-aria-label': 'ಸೇರಿಸಿ {{typeName}} (ಬ್ಲಾಕ್)',
  /** Label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object': 'ಸೇರಿಸಿ {{typeName}}',
  /** Accessibility label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object-aria-label': 'ಸೇರಿಸಿ {{typeName}} (ಇನ್‌ಲೈನ್)',
  /** Aria label for action to remove an annotation */
  'inputs.portable-text.action.remove-annotation-aria-label': 'ಅನ್ನೋಟೇಶನ್ ತೆಗೆದುಹಾಕಿ',
  /** Label for activate on focus with context of click and not focused */
  'inputs.portable-text.activate-on-focus-message_click': 'ಸಕ್ರಿಯಗೊಳಿಸಲು ಕ್ಲಿಕ್ ಮಾಡಿ',
  /** Label for activate on focus with context of click and focused */
  'inputs.portable-text.activate-on-focus-message_click-focused':
    'ಸಕ್ರಿಯಗೊಳಿಸಲು ಕ್ಲಿಕ್ ಮಾಡಿ ಅಥವಾ ಸ್ಪೇಸ್ ಒತ್ತಿ',
  /** Label for activate on focus with context of tap and not focused */
  'inputs.portable-text.activate-on-focus-message_tap': 'ಸಕ್ರಿಯಗೊಳಿಸಲು ಟ್ಯಾಪ್ ಮಾಡಿ',
  /** Aria label for the annotation object */
  'inputs.portable-text.annotation-aria-label': 'ಅನ್ನೋಟೇಶನ್ ವಸ್ತು',
  /** Title for dialog that allows editing an annotation */
  'inputs.portable-text.annotation-editor.title': '{{schemaType}} ಸಂಪಾದಿಸಿ',
  /** Title of the default "link" annotation */
  'inputs.portable-text.annotation.link': 'ಲಿಂಕ್',
  /** Aria label for the block object */
  'inputs.portable-text.block.aria-label': 'ಬ್ಲಾಕ್ ವಸ್ತು',
  /** Label for action to edit a block item, in the case where it is editable */
  'inputs.portable-text.block.edit': 'ಸಂಪಾದಿಸಿ',
  /** Accessibility label for the button that opens the actions menu on blocks */
  'inputs.portable-text.block.open-menu-aria-label': 'ಮೆನು ತೆರೆಯಿರಿ',
  /** Label for action to open a reference, in the case of block-level reference types */
  'inputs.portable-text.block.open-reference': 'ಉಲ್ಲೇಖನ ತೆರೆಯಿರಿ',
  /** Label for action to remove a block item */
  'inputs.portable-text.block.remove': 'ತೆಗೆದುಹಾಕಿ',
  /** Label for action to view a block item, in the case where it is read-only and thus cannot be edited */
  'inputs.portable-text.block.view': 'ವೀಕ್ಷಿಸಿ',
  /** Title of the "code" decorator */
  'inputs.portable-text.decorator.code': 'ಕೋಡ್',
  /** Title of the "em" (emphasis) decorator */
  'inputs.portable-text.decorator.emphasis': 'ಇಟಾಲಿಕ್',
  /** Title of the "strike-through" decorator */
  'inputs.portable-text.decorator.strike-through': 'ಸ್ಟ್ರೈಕ್',
  /** Title of the "strong" decorator */
  'inputs.portable-text.decorator.strong': 'ಬಲವಾದ',
  /** Title of the "underline" decorator */
  'inputs.portable-text.decorator.underline': 'ಅಡಿಗೆರೆ',
  /** Placeholder text for when the editor is empty */
  'inputs.portable-text.empty-placeholder': 'ಖಾಲಿ',
  /** Aria label for the block object */
  'inputs.portable-text.inline-block.aria-label': 'ಇನ್‌ಲೈನ್ ವಸ್ತು',
  /** Label for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit': 'ವಸ್ತು ಸಂಪಾದಿಸಿ',
  /** Aria label for icon for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit-aria-label': 'ವಸ್ತು ಸಂಪಾದಿಸಿ',
  /** Label for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove': 'ವಸ್ತು ತೆಗೆದುಹಾಕಿ',
  /** Aria label for icon for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove-aria-label': 'ವಸ್ತು ತೆಗೆದುಹಾಕಿ',
  /** Disclaimer text shown on invalid Portable Text value, when an action is available to unblock the user, but it is not guaranteed to be safe */
  'inputs.portable-text.invalid-value.action-disclaimer':
    'ಗಮನಿಸಿ: ಮೇಲಿನ ಕ್ರಿಯೆಯನ್ನು ನಡೆಸುವುದು ಸಾಮಾನ್ಯವಾಗಿ ಸುರಕ್ಷಿತ, ಆದರೆ ನೀವು ಸಂಶಯದಲ್ಲಿದ್ದರೆ, ನಿಮ್ಮ ಸ್ಟುಡಿಯೋ ಕಾನ್ಫಿಗರ್ ಮಾಡಿದವರ ಜೊತೆ ಸಂಪರ್ಕಿಸಿ.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.action': 'ವಸ್ತುವನ್ನು ತೆಗೆದುಹಾಕಿ',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.description':
    'ಕೀ {{childKey}} ಹೊಂದಿರುವ ಬ್ಲಾಕ್ ಕೀ <code>{{key}}</code> ಯ ಮಗುವು <code>{{childType}}</code> ಪ್ರಕಾರದಲ್ಲಿದೆ, ಇದು ಸ್ಕೀಮಾ ವಿವರಣೆಯಿಂದ ಅನುಮತಿಸಲಾಗಿಲ್ಲ.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.action': 'ಬ್ಲಾಕ್ ಅನ್ನು ತೆಗೆದುಹಾಕಿ',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.description':
    'ಕೀ <code>{{key}}</code> ಹೊಂದಿರುವ ಬ್ಲಾಕ್ <code>{{typeName}}</code> ಪ್ರಕಾರದಲ್ಲಿದೆ, ಇದು ಸ್ಕೀಮಾದಿಂದ ಅನುಮತಿಸಲಾಗಿಲ್ಲ.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.action': 'ಖಾಲಿ ಪಠ್ಯ ಸ್ಪ್ಯಾನ್ ಅನ್ನು ಸೇರಿಸಿ',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.description':
    'ಕೀ <code>{{key}}</code> ಹೊಂದಿರುವ ಪಠ್ಯ ಬ್ಲಾಕ್ ಯಾವುದೇ ಪಠ್ಯ ಸ್ಪ್ಯಾನ್‌ಗಳನ್ನು ಹೊಂದಿಲ್ಲ.',
  /** Label for the button to ignore invalid values in the Portable Text editor */
  'inputs.portable-text.invalid-value.ignore-button.text': 'ಅಗ್ರಾಹ್ಯಗೊಳಿಸಿ',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.action':
    'ಪ್ರಕಾರ <code>{{expectedTypeName}}</code> ಬಳಸಿ',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.description':
    'ಕೀ <code>{{key}}</code> ಹೊಂದಿರುವ ಬ್ಲಾಕ್ ಅಸಮರ್ಪಕ ಪ್ರಕಾರದ ಹೆಸರನ್ನು ಹೊಂದಿದೆ. ಸ್ಕೀಮಾ ಪ್ರಕಾರ, ಇದು <code>{{expectedTypeName}}</code> ಆಗಿರಬೇಕು.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.action': 'ಖಾಲಿ ಪಠ್ಯ ಮೌಲ್ಯವನ್ನು ಹೊಂದಿಸಿ',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.description':
    'ಕೀ <code>{{key}}</code> ಹೊಂದಿರುವ ಬ್ಲಾಕ್ ನ ಸ್ಪ್ಯಾನ್ ಕೀ {{childKey}} ಅಸಮರ್ಪಕ ಅಥವಾ ಕಾಣೆಯಾದ <code>text</code> ಗುಣಧರ್ಮವನ್ನು ಹೊಂದಿದೆ.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.action':
    'ಪ್ರಕಾರ <code>{{expectedTypeName}}</code> ಬಳಸಿ',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.description':
    'ಕೀ <code>{{key}}</code> ಹೊಂದಿರುವ ಬ್ಲಾಕ್ ಪ್ರಕಾರದ ಹೆಸರನ್ನು ಕಾಣಿಸಿಲ್ಲ. ಸ್ಕೀಮಾ ಪ್ರಕಾರ, ಇದು <code>{{expectedTypeName}}</code> ಆಗಿರಬೇಕು.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.action': 'ಯಾದೃಚ್ಛಿಕ ಕೀ ನೀಡಿ',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.description':
    'ಕೀ <code>{{key}}</code> ಹೊಂದಿರುವ ಬ್ಲಾಕ್ ನ ಸೂಚ್ಯಂಕ <code>{{index}}</code> ನಲ್ಲಿರುವ ಮಗುವು <code>_key</code> ಗುಣಧರ್ಮವನ್ನು ಕಾಣಿಸಿಲ್ಲ.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.action': 'ವಸ್ತುವನ್ನು ತೆಗೆದುಹಾಕಿ',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.description':
    'ಕೀ {{childKey}} ಹೊಂದಿರುವ ಬ್ಲಾಕ್ ಕೀ <code>{{key}}</code> ಯ ಮಗುವು <code>_type</code> ಗುಣಧರ್ಮವನ್ನು ಕಾಣಿಸಿಲ್ಲ.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.action': 'ಯಾದೃಚ್ಛಿಕ ಕೀ ನೀಡಿ',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.description':
    'ಸೂಚ್ಯಂಕ <code>{{index}}</code> ನಲ್ಲಿರುವ ಬ್ಲಾಕ್ ಅಗತ್ಯವಾದ <code>_key</code> ಗುಣಧರ್ಮವನ್ನು ಕಾಣಿಸಿಲ್ಲ.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.action':
    'ಬ್ಲಾಕ್ ಅನ್ನು ತೆಗೆದುಹಾಕಿ',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.description':
    'ಕೀ <code>{{key}}</code> ಹೊಂದಿರುವ ಪಠ್ಯ ಬ್ಲಾಕ್ ಅಸಮರ್ಪಕ ಅಥವಾ ಕಾಣೆಯಾದ `children` ಗುಣಧರ್ಮವನ್ನು ಹೊಂದಿದೆ.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.action': 'ಗುಣಧರ್ಮ ಸೇರಿಸಿ',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.description':
    'ಕೀ <code>{{key}}</code> ಹೊಂದಿರುವ ಪಠ್ಯ ಬ್ಲಾಕ್ ಅಸಮರ್ಪಕ ಅಥವಾ ಕಾಣೆಯಾದ `markDefs` ಗುಣಧರ್ಮವನ್ನು ಹೊಂದಿದೆ.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.action': 'ಬ್ಲಾಕ್ ಅನ್ನು ತೆಗೆದುಹಾಕಿ',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.description':
    'ಕೀ <code>{{key}}</code> ಹೊಂದಿರುವ ಬ್ಲಾಕ್ ಗೆ ಒಂದು ಟೈಪ್ ಹೆಸರು ಇಲ್ಲ.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.action': 'ಐಟಂ ತೆಗೆದುಹಾಕಿ',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.description':
    'ಕೀ <code>{{key}}</code> ಹೊಂದಿರುವ ಬ್ಲಾಕ್ ನ ಸೂಚಿಸುವ <code>{{index}}</code> ನಲ್ಲಿರುವ ಮಗುವು ಒಂದು ವಸ್ತುವಲ್ಲ.',
  /** Action presented when the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.action': 'ಮೌಲ್ಯವನ್ನು ಅನ್ಸೆಟ್ ಮಾಡಿ',
  /** Text explaining that the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.description':
    'ಮೌಲ್ಯವು ಪೋರ್ಟಬಲ್ ಟೆಕ್ಸ್ಟ್ ಬ್ಲಾಕ್ಸ್ ಗಳ ಒಂದು ಸರಣಿ ಅಥವಾ ಅನಿರ್ಧಿಷ್ಟವಾಗಿರಬೇಕು.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.action': 'ಐಟಂ ತೆಗೆದುಹಾಕಿ',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.description':
    'ಸೂಚಿಸುವ <code>{{index}}</code> ನಲ್ಲಿರುವ ಐಟಂ ಒಂದು ವಸ್ತುವಲ್ಲ,.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.action':
    'ಅನುಮತಿಯಿಲ್ಲದ ಗುರುತುಗಳನ್ನು ತೆಗೆದುಹಾಕಿ',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.description':
    'ಕೀ <code>{{key}}</code> ಹೊಂದಿರುವ ಟೆಕ್ಸ್ಟ್ ಬ್ಲಾಕ್ ಗುರುತುಗಳನ್ನು <code>({{orphanedMarks, list}})</code> ಯೋಜನೆಯಿಂದ ಅನುಮತಿಯಿಲ್ಲದವುಗಳನ್ನು ಹೊಂದಿದೆ.',
  /** Title for the alert indicating that the Portable Text field has an invalid value */
  'inputs.portable-text.invalid-value.title': 'ಅಮಾನ್ಯ ಪೋರ್ಟಬಲ್ ಟೆಕ್ಸ್ಟ್ ಮೌಲ್ಯ',
  /** Title of "bulleted" list type */
  'inputs.portable-text.list-type.bullet': 'ಬುಲೆಟ್ ಪಟ್ಟಿ',
  /** Title of numbered list type */
  'inputs.portable-text.list-type.number': 'ಸಂಖ್ಯಾ ಪಟ್ಟಿ',
  /** Title of the "h1" block style */
  'inputs.portable-text.style.h1': 'ಶೀರ್ಷಿಕೆ 1',
  /** Title of the "h2" block style */
  'inputs.portable-text.style.h2': 'ಶೀರ್ಷಿಕೆ 2',
  /** Title of the "h3" block style */
  'inputs.portable-text.style.h3': 'ಶೀರ್ಷಿಕೆ 3',
  /** Title of the "h4" block style */
  'inputs.portable-text.style.h4': 'ಶೀರ್ಷಿಕೆ 4',
  /** Title of the "h5" block style */
  'inputs.portable-text.style.h5': 'ಶೀರ್ಷಿಕೆ 5',
  /** Title of the "h6" block style */
  'inputs.portable-text.style.h6': 'ಶೀರ್ಷಿಕೆ 6',
  /** Title shown when multiple blocks of varying styles is selected */
  'inputs.portable-text.style.multiple': 'ಬಹುವಿಧ',
  /** Title of fallback when no style is given for a block */
  'inputs.portable-text.style.none': 'ಶೈಲಿ ಇಲ್ಲ',
  /** Title of the "normal" block style */
  'inputs.portable-text.style.normal': 'ಸಾಮಾನ್ಯ',
  /** Title of the "quote" block style */
  'inputs.portable-text.style.quote': 'ಉಲ್ಲೇಖ',
  /** Label for action to clear the current value of the reference field */
  'inputs.reference.action.clear': 'ಸ್ಪಷ್ಟ',
  /** Label for action to create a new document from the reference input */
  'inputs.reference.action.create-new-document': 'ರಚಿಸಿ',
  /** Label for action to create a new document from the reference input, when there are multiple templates or document types to choose from */
  'inputs.reference.action.create-new-document-select': 'ರಚಿಸಿ…',
  /** Label for action to duplicate the current item to a new item (used within arrays) */
  'inputs.reference.action.duplicate': 'ನಕಲಿಸಿ',
  /** Label for action that opens the referenced document in a new tab */
  'inputs.reference.action.open-in-new-tab': 'ಹೊಸ ಟ್ಯಾಬ್‌ನಲ್ಲಿ ತೆರೆ',
  /** Label for action to remove the reference from an array */
  'inputs.reference.action.remove': 'ತೆಗೆದುಹಾಕಿ',
  /** Label for action to replace the current value of the field */
  'inputs.reference.action.replace': 'ಬದಲಾಯಿಸಿ',
  /** Label for action to cancel a previously initiated replace action  */
  'inputs.reference.action.replace-cancel': 'ಬದಲಾವಣೆ ರದ್ದುಮಾಡಿ',
  /** The cross-dataset reference field currently has a reference, but the feature has been disabled since it was created. This explains what can/cannot be done in its current state. */
  'inputs.reference.cross-dataset.feature-disabled-actions':
    'ಈ ಕ್ಷೇತ್ರದ ಮೌಲ್ಯವನ್ನು ನೀವು ಇನ್ನೂ ಅಳಿಸಬಹುದು, ಆದರೆ ಫೀಚರ್ ನಿಷ್ಕ್ರಿಯಗೊಂಡಿರುವವರೆಗೆ ಇದನ್ನು ಬೇರೆ ದಾಖಲೆಗೆ ಬದಲಾಯಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ.',
  /** A cross-dataset reference field exists but the feature has been disabled. A <DocumentationLink> component is available. */
  'inputs.reference.cross-dataset.feature-disabled-description':
    'ಈ ಫೀಚರ್ ನಿಷ್ಕ್ರಿಯಗೊಂಡಿದೆ. ಹೇಗೆ ಸಕ್ರಿಯಗೊಳಿಸುವುದು ಎಂದು <DocumentationLink>ದಾಖಲೆಗಳಲ್ಲಿ</DocumentationLink> ಓದಿ.',
  /** Title for a warning telling the user that the current project does not have the "cross dataset references" feature */
  'inputs.reference.cross-dataset.feature-unavailable-title':
    'ಲಭ್ಯವಿಲ್ಲದ ಫೀಚರ್: ಅಡ್ಡ ಡೇಟಾಸೆಟ್ ಉಲ್ಲೇಖ',
  /** The cross-dataset reference points to a document with an invalid type  */
  'inputs.reference.cross-dataset.invalid-type':
    'ಉಲ್ಲೇಖಿತ ದಾಖಲೆ ಅಮಾನ್ಯ ಪ್ರಕಾರದದ್ದು ({{typeName}}) <JsonValue/>',
  /** The referenced document will open in a new tab (due to external studio) */
  'inputs.reference.document-opens-in-new-tab': 'ಈ ದಾಖಲೆ ಹೊಸ ಟ್ಯಾಬ್‌ನಲ್ಲಿ ತೆರೆಯುತ್ತದೆ',
  /** Error title for when the document is unavailable (for any possible reason) */
  'inputs.reference.error.document-unavailable-title': 'ದಾಖಲೆ ಲಭ್ಯವಿಲ್ಲ',
  /** Error title for when the referenced document failed to be loaded */
  'inputs.reference.error.failed-to-load-document-title':
    'ಉಲ್ಲೇಖಿತ ದಾಖಲೆಯನ್ನು ಲೋಡ್ ಮಾಡಲು ವಿಫಲವಾಗಿದೆ',
  /** Error title for when the reference search returned a document that is not an allowed type for the field */
  'inputs.reference.error.invalid-search-result-type-title':
    'ಹುಡುಕಾಟ ಒಂದು ಅಮಾನ್ಯ ಪ್ರಕಾರವನ್ನು ಹಿಂತಿರುಗಿಸಿದೆ ಈ ಉಲ್ಲೇಖಕ್ಕೆ: "{{returnedType}}"',
  /** Error description for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-description':
    'ಉಲ್ಲೇಖಿತ ದಾಖಲೆ (<code>{{documentId}}</code>) ಪ್ರಕಾರ <code>{{actualType}}</code>. ಸ್ಕೀಮಾ ಪ್ರಕಾರ, ಉಲ್ಲೇಖಿತ ದಾಖಲೆಗಳು ಕೇವಲ ಪ್ರಕಾರ <AllowedTypes /> ಇರಬೇಕು.',
  /** Error title for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-title': 'ಅಮಾನ್ಯ ಪ್ರಕಾರದ ದಾಖಲೆ',
  /** Error description for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-description':
    'ಅಪರ್ಯಾಪ್ತ ಅನುಮತಿಗಳಿಂದಾಗಿ ಉಲ್ಲೇಖಿತ ದಾಖಲೆಯನ್ನು ಪ್ರವೇಶಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ',
  /** Error title for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-title': 'ಅಪರ್ಯಾಪ್ತ ಅನುಮತಿಗಳು',
  /** Error description for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-description':
    'ಉಲ್ಲೇಖಿತ ದಾಖಲೆ ಇಲ್ಲ (ID: <code>{{documentId}}</code>). ನೀವು ಉಲ್ಲೇಖವನ್ನು ಅಳಿಸಬಹುದು ಅಥವಾ ಇನ್ನೊಂದು ದಾಖಲೆಯೊಂದಿಗೆ ಬದಲಾಯಿಸಬಹುದು.',
  /** Error title for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-title': 'ಕಂಡುಬಂದಿಲ್ಲ',
  /** Label for button that clears the reference when it points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document.clear-button-label': 'ಸ್ಪಷ್ಟ',
  /** Error title for when the search for a reference failed. Note that the message sent by the backend may not be localized. */
  'inputs.reference.error.search-failed-title': 'ಉಲ್ಲೇಖ ಹುಡುಕಾಟ ವಿಫಲವಾಗಿದೆ',
  /** Alternative text for the image shown in cross-dataset reference input */
  'inputs.reference.image-preview-alt-text': 'ಉಲ್ಲೇಖಿತ ದಾಖಲೆಯ ಚಿತ್ರ ಪೂರ್ವನೋಟ',
  /** Description for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-description':
    '<strong>{{referencedDocument}}</strong> ಪ್ರಕಟಿಸಲಾಗಿದೆ ಮತ್ತು ಈ ಉಲ್ಲೇಖವನ್ನು ಈಗ ಅಂತಿಮಗೊಳಿಸಬೇಕು.',
  /** Title for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-title': 'ಉಲ್ಲೇಖವನ್ನು ಅಂತಿಮಗೊಳಿಸಿ',
  /** Description for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-description':
    '<strong>{{referencedDocument}}</strong> ಪ್ರಕಟಿಸಲಾಗಿದೆ ಮತ್ತು ಈ ಉಲ್ಲೇಖವನ್ನು ಈಗ ಬಲವಾದ ಉಲ್ಲೇಖವಾಗಿ ಪರಿವರ್ತಿಸಬೇಕು.',
  /** Title for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-title': 'ಬಲವಾದ ಉಲ್ಲೇಖಕ್ಕೆ ಪರಿವರ್ತಿಸಿ',
  /** Label for button that triggers the action that strengthen a reference */
  'inputs.reference.incomplete-reference.strengthen-button-label': 'ಬಲವಾದ ಉಲ್ಲೇಖಕ್ಕೆ ಪರಿವರ್ತಿಸಿ',
  /** Label for button that triggers a retry attempt for reference metadata  */
  'inputs.reference.metadata-error.retry-button-label': 'ಮರುಪ್ರಯತ್ನಿಸಿ',
  /** Title for alert shown when reference metadata fails to be loaded */
  'inputs.reference.metadata-error.title': 'ಉಲ್ಲೇಖ ಮೆಟಾಡೇಟಾ ಲೋಡ್ ಮಾಡಲು ಅಸಾಧ್ಯ',
  /** Message shown when no documents were found that matched the given search string */
  'inputs.reference.no-results-for-query':
    '<strong>“{{searchTerm}}”</strong> ಗೆ ಯಾವುದೇ ಫಲಿತಾಂಶಗಳು ಇಲ್ಲ',
  /** Text for tooltip showing when a document was edited, using relative time (eg "how long ago was it edited?") */
  'inputs.reference.preview.edited-at-time': '<RelativeTime/> ಸಂಪಾದಿಸಲಾಗಿದೆ',
  /** Accessibility label for icon indicating that document does _not_ have any unpublished changes */
  'inputs.reference.preview.has-no-unpublished-changes-aria-label': 'ಅಪ್ರಕಟಿತ ಸಂಪಾದನೆಗಳು ಇಲ್ಲ',
  /** Accessibility label for icon indicating that document has unpublished changes */
  'inputs.reference.preview.has-unpublished-changes-aria-label': 'ಸಂಪಾದಿಸಲಾಗಿದೆ',
  /** Accessibility label for icon indicating that document does _not_ have a published version */
  'inputs.reference.preview.is-not-published-aria-label': 'ಪ್ರಕಟಿಸಲಾಗಿಲ್ಲ',
  /** Accessibility label for icon indicating that document has a published version */
  'inputs.reference.preview.is-published-aria-label': 'ಪ್ರಕಟಿಸಲಾಗಿದೆ',
  /** Text for tooltip indicating that a document has no unpublished edits */
  'inputs.reference.preview.no-unpublished-edits': 'ಅಪ್ರಕಟಿತ ಸಂಪಾದನೆಗಳು ಇಲ್ಲ',
  /** Text for tooltip indicating that a document has not yet been published */
  'inputs.reference.preview.not-published': 'ಪ್ರಕಟಿಸಲಾಗಿಲ್ಲ',
  /** Text for tooltip showing when a document was published, using relative time (eg "how long ago was it published?") */
  'inputs.reference.preview.published-at-time': '<RelativeTime/> ಪ್ರಕಟಿಸಲಾಗಿದೆ',
  /** The referenced document no longer exist and might have been deleted (for weak references) */
  'inputs.reference.referenced-document-does-not-exist':
    'ಉಲ್ಲೇಖಿತ ದಾಖಲೆ ಇನ್ನು ಇಲ್ಲ ಮತ್ತು ಅದು ಅಳಿಸಲಾಗಿರಬಹುದು (ದಾಖಲೆ ID: <code>{{documentId}}</code>).',
  /** The referenced document could not be displayed to the user because of insufficient permissions */
  'inputs.reference.referenced-document-insufficient-permissions':
    'ಅಪರ್ಯಾಪ್ತ ಅನುಮತಿಗಳಿಂದಾಗಿ ಉಲ್ಲೇಖಿತ ದಾಖಲೆಯನ್ನು ಪ್ರವೇಶಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ',
  /** Label for when the reference input is resolving the initial value for an item */
  'inputs.reference.resolving-initial-value': 'ಪ್ರಾರಂಭಿಕ ಮೌಲ್ಯ ಪರಿಹರಿಸುತ್ತಿದೆ…',
  /** Placeholder shown in a reference input with no current value */
  'inputs.reference.search-placeholder': 'ಹುಡುಕಲು ಟೈಪ್ ಮಾಡಿ',
  /** Explanation of the consequences of leaving the reference as strong instead of weak */
  'inputs.reference.strength-mismatch.is-strong-consquences':
    'ಈ ಉಲ್ಲೇಖವನ್ನು ತೆಗೆದುಹಾಕದೆ ಅಥವಾ ಅದನ್ನು ದುರ್ಬಲವಾಗಿಸದೆ ಉಲ್ಲೇಖಿತ ದಾಖಲೆಯನ್ನು ಅಳಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ.',
  /** Description for alert shown when a reference is supposed to be weak, but the actual value is strong */
  'inputs.reference.strength-mismatch.is-strong-description':
    'ಈ ಉಲ್ಲೇಖ <em>ಬಲವಾದ</em>ದು, ಆದರೆ ಪ್ರಸ್ತುತ ಸ್ಕೀಮಾ ಪ್ರಕಾರ ಅದು <em>ದುರ್ಬಲ</em>ವಾಗಿರಬೇಕು.',
  /** Explanation of the consequences of leaving the reference as weak instead of strong */
  'inputs.reference.strength-mismatch.is-weak-consquences':
    'ಇದು ಈ ಉಲ್ಲೇಖವನ್ನು ಮೊದಲು ತೆಗೆದುಹಾಕದೆ ಉಲ್ಲೇಖಿತ ದಾಖಲೆಯನ್ನು ಅಳಿಸಲು ಸಾಧ್ಯವಾಗಿಸುತ್ತದೆ, ಇದು ಈ ಕ್ಷೇತ್ರವನ್ನು ಅಸ್ತಿತ್ವವಿಲ್ಲದ ದಾಖಲೆಗೆ ಉಲ್ಲೇಖಿಸುತ್ತದೆ.',
  /** Description for alert shown when a reference is supposed to be strong, but the actual value is weak */
  'inputs.reference.strength-mismatch.is-weak-description':
    'ಈ ಉಲ್ಲೇಖ <em>ದುರ್ಬಲ</em>ವಾದುದು, ಆದರೆ ಪ್ರಸ್ತುತ ಸ್ಕೀಮಾ ಪ್ರಕಾರ ಅದು <em>ಬಲವಾದ</em>ವಾಗಿರಬೇಕು.',
  /** Label for button that triggers the action that strengthens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.strengthen-button-label': 'ಬಲವಾದ ಉಲ್ಲೇಖಕ್ಕೆ ಪರಿವರ್ತಿಸಿ',
  /** Title for alert shown when a reference is supposed to be weak/strong, but the actual value is the opposite of what it is supposed to be */
  'inputs.reference.strength-mismatch.title': 'ಉಲ್ಲೇಖದ ಬಲದ ಅಸಮತೋಲನ',
  /** Label for button that triggers the action that weakens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.weaken-button-label': 'ದುರ್ಬಲ ಉಲ್ಲೇಖಕ್ಕೆ ಪರಿವರ್ತಿಸಿ',
  /** Action message for generating the slug */
  'inputs.slug.action.generate': 'ಉತ್ಪನ್ನಮಾಡಿ',
  /** Loading message for when the input is actively generating a slug */
  'inputs.slug.action.generating': 'ರೂಪಿಸುತ್ತಿದೆ…',
  /** Error message for when the source to generate a slug from is missing */
  'inputs.slug.error.missing-source':
    'ಮೂಲ ಕಾಣೆಯಾಗಿದೆ. ಸ್ಕೀಮಾದಲ್ಲಿ {{schemaType}} ಮೇಲೆ ಮೂಲವನ್ನು ಪರಿಶೀಲಿಸಿ',
  /** Placeholder for an empty tag input */
  'inputs.tags.placeholder': 'ಟ್ಯಾಗ್ ನಮೂದಿಸಿ ಮತ್ತು ENTER ಒತ್ತಿ…',
  /** Placeholder for an empty tag input on touch devices */
  'inputs.tags.placeholder_touch': 'ಟ್ಯಾಗ್ ನಮೂದಿಸಿ…',
  /** Convert to `{{targetType}}` */
  'inputs.untyped-value.convert-button.text': '{{targetType}} ಗೆ ಪರಿವರ್ತಿಸಿ',
  /** Encountered an object value without a <code>_type</code> property. */
  'inputs.untyped-value.description':
    '<code>_type</code> ಗುಣಲಕ್ಷಣವಿಲ್ಲದ ವಸ್ತು ಮೌಲ್ಯವನ್ನು ಎದುರಿಸಲಾಗಿದೆ.',
  /** Either remove the <code>name</code> property of the object declaration, or set <code>_type</code> property on items. */
  'inputs.untyped-value.details.description':
    'ವಸ್ತು ಘೋಷಣೆಯ <code>name</code> ಗುಣಲಕ್ಷಣವನ್ನು ತೆಗೆದುಹಾಕಿ, ಅಥವಾ ವಸ್ತುಗಳ ಮೇಲೆ <code>_type</code> ಗುಣಲಕ್ಷಣವನ್ನು ಹೊಂದಿಸಿ.',
  /** Current value (<code>object</code>): */
  'inputs.untyped-value.details.json-dump-prefix': 'ಪ್ರಸ್ತುತ ಮೌಲ್ಯ (<code>ವಸ್ತು</code>):',
  /** The following types are valid here according to schema: */
  'inputs.untyped-value.details.multi-type-description':
    'ಸ್ಕೀಮಾದ ಪ್ರಕಾರ ಇಲ್ಲಿ ಈ ಕೆಳಗಿನ ವಿಧಗಳು ಸರಿಯಾಗಿವೆ:',
  /** Developer info */
  'inputs.untyped-value.details.title': 'ಡೆವಲಪರ್ ಮಾಹಿತಿ',
  /** Property value missing <code>_type</code> */
  'inputs.untyped-value.title': 'ಗುಣಲಕ್ಷಣ ಮೌಲ್ಯದಲ್ಲಿ <code>_type</code> ಕಾಣೆಯಾಗಿದೆ',
  /** Unset value */
  'inputs.untyped-value.unset-item-button.text': 'ಮೌಲ್ಯವನ್ನು ಅನ್ಸೆಟ್ ಮಾಡಿ',

  /** The fallback explanation if no context is provided */
  'insufficient-permissions-message.not-authorized-explanation':
    'ಈ ಸೌಲಭ್ಯಕ್ಕೆ ಪ್ರವೇಶಿಸಲು ನಿಮಗೆ ಅನುಮತಿ ಇಲ್ಲ.',
  /** The explanation when unable to create any document at all */
  'insufficient-permissions-message.not-authorized-explanation_create-any-document':
    'ದಾಖಲೆಯನ್ನು ರಚಿಸಲು ನಿಮಗೆ ಅನುಮತಿ ಇಲ್ಲ.',
  /** The explanation when unable to create a particular document */
  'insufficient-permissions-message.not-authorized-explanation_create-document':
    'ಈ ದಾಖಲೆಯನ್ನು ರಚಿಸಲು ನಿಮಗೆ ಅನುಮತಿ ಇಲ್ಲ.',
  /** The explanation when unable to create a particular type of document */
  'insufficient-permissions-message.not-authorized-explanation_create-document-type':
    'ಈ ರೀತಿಯ ದಾಖಲೆಯನ್ನು ರಚಿಸಲು ನಿಮಗೆ ಅನುಮತಿ ಇಲ್ಲ.',
  /** The explanation when unable to create a new reference in a document */
  'insufficient-permissions-message.not-authorized-explanation_create-new-reference':
    'ಹೊಸ ಉಲ್ಲೇಖವನ್ನು ರಚಿಸಲು ನಿಮಗೆ ಅನುಮತಿ ಇಲ್ಲ.',
  /** The explanation when unable to delete a particular document */
  'insufficient-permissions-message.not-authorized-explanation_delete-document':
    'ಈ ದಾಖಲೆಯನ್ನು ಅಳಿಸಲು ನಿಮಗೆ ಅನುಮತಿ ಇಲ್ಲ.',
  /** The explanation when unable to delete a schedule on scheduled publishing */
  'insufficient-permissions-message.not-authorized-explanation_delete-schedules':
    'ನೀವು ವೇಳಾಪಟ್ಟಿಗಳನ್ನು ಅಳಿಸಲು ಅನುಮತಿಯಿಲ್ಲ.',
  /** The explanation when unable to discard changes in a particular document */
  'insufficient-permissions-message.not-authorized-explanation_discard-changes':
    'ಈ ದಾಖಲೆಯಲ್ಲಿನ ಬದಲಾವಣೆಗಳನ್ನು ತ್ಯಜಿಸಲು ನಿಮಗೆ ಅನುಮತಿ ಇಲ್ಲ.',
  /** The explanation when unable to duplicate a particular document */
  'insufficient-permissions-message.not-authorized-explanation_duplicate-document':
    'ಈ ದಾಖಲೆಯನ್ನು ನಕಲಿಸಲು ನಿಮಗೆ ಅನುಮತಿ ಇಲ್ಲ.',
  /** The explanation when unable to edit a schedule on scheduled publishing */
  'insufficient-permissions-message.not-authorized-explanation_edit-schedules':
    'ನೀವು ವೇಳಾಪಟ್ಟಿಗಳನ್ನು ಸಂಪಾದಿಸಲು ಅನುಮತಿಯಿಲ್ಲ.',
  /** The explanation when unable to execute a schedule on scheduled publishing */
  'insufficient-permissions-message.not-authorized-explanation_execute-schedules':
    'ನೀವು ವೇಳಾಪಟ್ಟಿಗಳನ್ನು ಜಾರಿಗೊಳಿಸಲು ಅನುಮತಿಯಿಲ್ಲ.',
  /** The explanation when unable to publish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_publish-document':
    'ಈ ದಾಖಲೆಯನ್ನು ಪ್ರಕಟಿಸಲು ನಿಮಗೆ ಅನುಮತಿ ಇಲ್ಲ.',
  /** The explanation when unable to unpublish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_unpublish-document':
    'ಈ ದಾಖಲೆಯನ್ನು ಅಪ್ರಕಟಿಸಲು ನಿಮಗೆ ಅನುಮತಿ ಇಲ್ಲ.',
  /** Appears after the not-authorized message. Lists the current roles. */
  'insufficient-permissions-message.roles': 'ನಿಮ್ಮ ಪಾತ್ರಗಳು: <Roles/>',
  /** The title for the insufficient permissions message component */
  'insufficient-permissions-message.title': 'ಅಪರ್ಯಾಪ್ತ ಅನುಮತಿಗಳು',

  /** Unexpected error: `{{error}}` */
  'member-field-error.unexpected-error': 'ಅನಿರೀಕ್ಷಿತ ದೋಷ: {{error}}',

  /** Button label for "Create new document" button */
  'new-document.button': 'ಸೃಷ್ಟಿಸಿ',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are templates/types available for creation
   */
  'new-document.create-new-document-label': 'ಹೊಸ ದಾಖಲೆ...',
  /** Placeholder for the "filter" input within the new document menu */
  'new-document.filter-placeholder': 'ಫಿಲ್ಟರ್',
  /** Loading indicator text within the new document menu */
  'new-document.loading': 'ಲೋಡಿಂಗ್...',
  /** Accessibility label for the list displaying options in the new document menu */
  'new-document.new-document-aria-label': 'ಹೊಸ ದಾಖಲೆ',
  /** Message for when there are no document type options in the new document menu */
  'new-document.no-document-types-found': 'ಯಾವುದೇ ದಾಖಲೆ ಪ್ರಕಾರಗಳು ಕಂಡುಬಂದಿಲ್ಲ',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are no templates/types to create from
   */
  'new-document.no-document-types-label': 'ದಾಖಲೆ ಪ್ರಕಾರಗಳು ಇಲ್ಲ',
  /** Message for when no results are found for a specific search query in the new document menu */
  'new-document.no-results': '<strong>{{searchQuery}}</strong> ಗಾಗಿ ಯಾವುದೇ ಫಲಿತಾಂಶಗಳು ಇಲ್ಲ',
  /** Aria label for the button that opens the "Create new document" popover/dialog */
  'new-document.open-dialog-aria-label': 'ಹೊಸ ದಾಖಲೆ ಸೃಷ್ಟಿಸಿ',
  /** Title for "Create new document" dialog */
  'new-document.title': 'ಹೊಸ ದಾಖಲೆ ಸೃಷ್ಟಿಸಿ',

  /** Label for button that will make the browser reload when users' studio version is out-of-date */
  'package-version.new-package-available.reload-button': 'ಮರುಲೋಡ್ ಮಾಡಿ',
  /** Title of the alert for studio users when packages in their studio are out-of-date */
  'package-version.new-package-available.title': 'Sanity Studio ನವೀಕರಿಸಲಾಗಿದೆ',

  /** Label for action to manage members of the current studio project */
  'presence.action.manage-members': 'ಸದಸ್ಯರನ್ನು ನಿರ್ವಹಿಸಿ',
  /** Accessibility label for presence menu button */
  'presence.aria-label': 'ಜಾಗತಿಕ ಸಾನಿಧ್ಯ',
  /** Message description for when no one else is currently present */
  'presence.no-one-else-description': 'ಅವರ ಆನ್‌ಲೈನ್ ಸ್ಥಿತಿಯನ್ನು ನೋಡಲು ಜನರನ್ನು ಯೋಜನೆಗೆ ಆಹ್ವಾನಿಸಿ.',
  /** Message title for when no one else is currently present */
  'presence.no-one-else-title': 'ಇಲ್ಲಿ ಬೇರೆ ಯಾರೂ ಇಲ್ಲ',
  /** Message for when a user is not in a document (displayed in the global presence menu) */
  'presence.not-in-a-document': 'ದಾಖಲೆಯಲ್ಲಿ ಇಲ್ಲ',
  /** Tooltip content text for presence menu button */
  'presence.tooltip-content': 'ಇಲ್ಲಿ ಯಾರು ಇದ್ದಾರೆ',

  /** Fallback title shown when a preview does not provide a title */
  'preview.default.title-fallback': 'ಶೀರ್ಷಿಕೆ ಇಲ್ಲ',
  /** Fallback preview value for types that have "no value" (eg null, undefined) */
  'preview.fallback.no-value': '(ಮೌಲ್ಯ ಇಲ್ಲ)',
  /** Alternative text for image being shown while image is being uploaded, in previews */
  'preview.image.file-is-being-uploaded.alt-text': 'ಪ್ರಸ್ತುತ ಅಪ್‌ಲೋಡ್ ಆಗುತ್ತಿರುವ ಚಿತ್ರ',

  /* Relative time, just now */
  'relative-time.just-now': 'ಈಗ ಮಾತ್ರ',

  /** Accessibility label to open search action when the search would go fullscreen (eg on narrower screens) */
  'search.action-open-aria-label': 'ಹುಡುಕಾಟ ತೆರೆಯಿರಿ',
  /** Action label for adding a search filter */
  'search.action.add-filter': 'ಫಿಲ್ಟರ್ ಸೇರಿಸಿ',
  /** Action label for clearing search filters */
  'search.action.clear-filters': 'ಫಿಲ್ಟರ್‌ಗಳನ್ನು ಅಳಿಸಿ',
  /** Label for action to clear recent searches */
  'search.action.clear-recent-searches': 'ಇತ್ತೀಚಿನ ಹುಡುಕಾಟಗಳನ್ನು ಅಳಿಸಿ',
  /** Accessibility label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-aria-label': 'ಪರಿಶೀಲಿಸಿದ ಫಿಲ್ಟರ್‌ಗಳನ್ನು ಅಳಿಸಿ',
  /** Label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-label': 'ಸ್ಪಷ್ಟಪಡಿಸಿ',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to close the search */
  'search.action.close-search-aria-label': 'ಹುಡುಕಾಟ ಮುಚ್ಚಿ',
  /** Accessibility label for filtering by document type */
  'search.action.filter-by-document-type-aria-label': 'ದಾಖಲೆ ಪ್ರಕಾರದಿಂದ ಶೋಧಿಸಿ',
  /** Accessibility action label for removing an already applied search filter */
  'search.action.remove-filter-aria-label': 'ಫಿಲ್ಟರ್ ತೆಗೆದುಹಾಕಿ',
  /**
   * Text displayed when either no document type(s) have been selected, or we need a fallback,
   * eg "Search for all types".
   */
  'search.action.search-all-types': 'ಎಲ್ಲಾ ದಾಖಲೆಗಳನ್ನು ಹುಡುಕಿ',
  /**
   * Text displayed when we are able to determine one or more document types that will be used for
   * searching, and can fit within the space assigned by the design.
   */
  'search.action.search-specific-types': '{{types, list}} ಗಾಗಿ ಹುಡುಕಿ',
  /** Dialog title for action to select an asset of unknown type */
  'search.action.select-asset': 'ಆಸ್ತಿ ಆಯ್ಕೆಮಾಡಿ',
  /** Dialog title for action to select a file asset */
  'search.action.select-asset_file': 'ಫೈಲ್ ಆಯ್ಕೆಮಾಡಿ',
  /** Dialog title for action to select an image asset */
  'search.action.select-asset_image': 'ಚಿತ್ರ ಆಯ್ಕೆಮಾಡಿ',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-aria-label_hide': 'ಫಿಲ್ಟರ್‌ಗಳನ್ನು ಮರೆಮಾಡಿ',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-aria-label_show': 'ಫಿಲ್ಟರ್‌ಗಳನ್ನು ತೋರಿಸಿ',
  /** Label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-label_hide': 'ಫಿಲ್ಟರ್‌ಗಳನ್ನು ಮರೆಮಾಡಿ',
  /** Label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-label_show': 'ಫಿಲ್ಟರ್‌ಗಳನ್ನು ತೋರಿಸಿ',
  /** Tooltip text for the global search button */
  'search.button.tooltip': 'ಹುಡುಕಾಟ',
  /**
   * A list of provided types (use `list` formatter preferably).
   */
  'search.document-type-list': '{{types, list}}',
  /**
   * In the context of a list of document types - no filtering selection has been done,
   * thus the default is "all types".
   */
  'search.document-type-list-all-types': 'ಎಲ್ಲಾ ಪ್ರಕಾರಗಳು',
  /** Accessibility label for list displaying the available document types */
  'search.document-types-aria-label': 'ದಾಖಲೆ ಪ್ರಕಾರಗಳು',
  /** Label for when no document types matching the filter are found */
  'search.document-types-no-matches-found': '{{filter}} ಗೆ ಹೊಂದಾಣಿಕೆಗಳು ಇಲ್ಲ',
  /** Description for error when a filter cannot be displayed, describes that you should check the schema */
  'search.error.display-filter-description':
    'ಇದು ನಿಮ್ಮ ಸ್ಕೀಮಾದಲ್ಲಿ ಅಮಾನ್ಯ ಆಯ್ಕೆಗಳು ನಿರ್ಧಾರಿಸಲಾಗಿದೆ ಎಂದು ಸೂಚಿಸಬಹುದು.',
  /** Title for error when a filter cannot be displayed (mainly a developer-oriented error) */
  'search.error.display-filter-title': 'ಈ ಫಿಲ್ಟರ್ ಪ್ರದರ್ಶಿಸುವಾಗ ದೋಷ ಸಂಭವಿಸಿದೆ.',
  /** Description for error when no valid asset source is found, describes that you should check the the current studio config */
  'search.error.no-valid-asset-source-check-config-description':
    'ದಯವಿಟ್ಟು ಅದು ನಿಮ್ಮ ಸ್ಟುಡಿಯೋ ಸಂರಚನಾ ಫೈಲ್‌ನಲ್ಲಿ ಸಕ್ರಿಯವಾಗಿದೆ ಎಂದು ಖಚಿತಪಡಿಸಿ.',
  /** Description for error when no valid asset source is found, describes that only the default asset is supported */
  'search.error.no-valid-asset-source-only-default-description':
    'ಪ್ರಸ್ತುತ, ಕೇವಲ ಡೀಫಾಲ್ಟ್ ಆಸ್ತಿ ಮೂಲ ಬೆಂಬಲಿಸಲಾಗಿದೆ.',
  /** Title for error when no valid asset sources found */
  'search.error.no-valid-asset-source-title': 'ಯಾವುದೇ ಮಾನ್ಯ ಆಸ್ತಿ ಮೂಲಗಳು ಕಂಡುಬಂದಿಲ್ಲ.',
  /** Helpful description for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-help-description':
    'ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ ಅಥವಾ ನಿಮ್ಮ ಸಂಪರ್ಕವನ್ನು ಪರಿಶೀಲಿಸಿ',
  /** Title label for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-title': 'ಹುಡುಕಾಟದ ವೇಳೆ ಏನೋ ತಪ್ಪಾಗಿದೆ',
  /**
   * Label for "All fields", a label that appears above the list of available fields when filtering.
   * If one or more document type has been chosen as filter, this label is replaced with a group of
   * fields per selected document type
   */
  'search.filter-all-fields-header': 'ಎಲ್ಲಾ ಕ್ಷೇತ್ರಗಳು',
  /** Label for the action of changing from one file to a different file in asset search filter */
  'search.filter-asset-change_file': 'ಫೈಲ್ ಬದಲಿಸಿ',
  /** Label for the action of changing from one image to a different image in asset search filter */
  'search.filter-asset-change_image': 'ಚಿತ್ರ ಬದಲಿಸಿ',
  /** Label for the action of clearing the currently selected asset in an image/file filter */
  'search.filter-asset-clear': 'ಅಳಿಸಿ',
  /** Label for the action of selecting a file in asset search filter */
  'search.filter-asset-select_file': 'ಫೈಲ್ ಆರಿಸಿ',
  /** Label for the action of selecting an image in asset search filter */
  'search.filter-asset-select_image': 'ಚಿತ್ರ ಆರಿಸಿ',
  /** Label for boolean filter - false */
  'search.filter-boolean-false': 'ಸುಳ್ಳು',
  /** Label for boolean filter - true */
  'search.filter-boolean-true': 'ನಿಜ',
  /** Accessibility label for list that lets you filter fields by title, when adding a new filter in search */
  'search.filter-by-title-aria-label': 'ಶೀರ್ಷಿಕೆಯಿಂದ ಫಿಲ್ಟರ್ ಮಾಡಿ',
  /** Accessibility label for date filter input */
  'search.filter-date-aria-label': 'ದಿನಾಂಕ',
  /** Accessibility label for selecting end date on the date range search filter */
  'search.filter-date-range-end-date-aria-label': 'ಅಂತ್ಯ ದಿನಾಂಕ',
  /** Accessibility label for selecting start date on the date range search filter */
  'search.filter-date-range-start-date-aria-label': 'ಆರಂಭ ದಿನಾಂಕ',
  /**
   * Label for "Days"/"Months"/"Years" when selecting it as unit in "X days ago" search filter.
   * Capitalized, as it would be listed in a dropdown.
   */
  'search.filter-date-unit_days': 'ದಿನಗಳು',
  'search.filter-date-unit_months': 'ತಿಂಗಳುಗಳು',
  'search.filter-date-unit_years': 'ವರ್ಷಗಳು',
  /** Accessibility label for selecting the unit (day/month/year) when adding "X days ago" search filter */
  'search.filter-date-unit-aria-label': 'ಘಟಕ ಆರಿಸಿ',
  /** Accessibility label for the input value (days/months/years) when adding "X days ago" search filter */
  'search.filter-date-value-aria-label': 'ಘಟಕ ಮೌಲ್ಯ',
  /** Label for "field description" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-description': 'ಕ್ಷೇತ್ರ ವಿವರಣೆ',
  /** Label for "field name" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-name': 'ಕ್ಷೇತ್ರ ಹೆಸರು',
  /** Label for "Used in document types", a list of the document types a field appears in. Shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-used-in-document-types': 'ದಾಖಲೆ ಪ್ರಕಾರಗಳಲ್ಲಿ ಬಳಸಲಾಗಿದೆ',
  /** Label for when no fields/filters are found for the given term */
  'search.filter-no-matches-found': 'ಯಾವುದೇ ಹೊಂದಾಣಿಕೆಗಳು {{filter}} ಗಾಗಿ ಕಂಡುಬಂದಿಲ್ಲ',
  /** Placeholder value for maximum numeric value filter */
  'search.filter-number-max-value-placeholder': 'ಗರಿಷ್ಠ ಮೌಲ್ಯ',
  /** Placeholder value for minimum numeric value filter */
  'search.filter-number-min-value-placeholder': 'ಕನಿಷ್ಠ ಮೌಲ್ಯ',
  /** Placeholder value for the number filter */
  'search.filter-number-value-placeholder': 'ಮೌಲ್ಯ',
  /** Placeholder for the "Filter" input, when narrowing possible fields/filters */
  'search.filter-placeholder': 'ಫಿಲ್ಟರ್',
  /** Label for the action of clearing the currently selected document in a reference filter */
  'search.filter-reference-clear': 'ಸ್ಪಷ್ಟ',
  /**
   * Label for "shared fields", a label that appears above a list of fields that all filtered types
   * have in common, when adding a new filter. For instance, if "book" and "employee" both have a
   * "title" field, this field would be listed under "shared fields".
   * */
  'search.filter-shared-fields-header': 'ಹಂಚಿಕೊಂಡ ಕ್ಷೇತ್ರಗಳು',
  /** Placeholder value for the string filter */
  'search.filter-string-value-placeholder': 'ಮೌಲ್ಯ',
  /** Label/placeholder prompting user to select one of the predefined, allowed values for a string field */
  'search.filter-string-value-select-predefined-value': 'ಆಯ್ಕೆಮಾಡಿ...',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (singular) */
  'search.filters-aria-label_one': 'ಫಿಲ್ಟರ್',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (plural) */
  'search.filters-aria-label_other': 'ಫಿಲ್ಟರ್‌ಗಳು',
  /** Label for instructions on how to use the search - displayed when no recent searches are available */
  'search.instructions': 'ನಿಮ್ಮ ಹುಡುಕಾಟವನ್ನು ಸೂಕ್ಷ್ಮಗೊಳಿಸಲು <ControlsIcon/> ಬಳಸಿ',
  /** Helpful description for when no search results are found */
  'search.no-results-help-description':
    'ಬೇರೆ ಕೀವರ್ಡ್ ಪ್ರಯತ್ನಿಸಿ ಅಥವಾ ನಿಮ್ಮ ಫಿಲ್ಟರ್‌ಗಳನ್ನು ಸರಿಹೊಂದಿಸಿ',
  /** Title label for when no search results are found */
  'search.no-results-title': 'ಯಾವುದೇ ಫಲಿತಾಂಶಗಳು ಸಿಗಲಿಲ್ಲ',
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
    '<Field/> <Operator>ಹೊಂದಿದೆ</Operator> <Value>{{count}} ವಸ್ತು</Value>',
  'search.operator.array-count-equal.description_other':
    '<Field/> <Operator>ಹೊಂದಿದೆ</Operator> <Value>{{count}} ವಸ್ತುಗಳು</Value>',
  'search.operator.array-count-equal.name': 'ಪ್ರಮಾಣ ಇದೆ',
  /* Array should have a count greater than given filter value */
  'search.operator.array-count-gt.description_one':
    '<Field/> <Operator>ಹೆಚ್ಚು ></Operator> <Value>{{count}} ವಸ್ತು</Value>',
  'search.operator.array-count-gt.description_other':
    '<Field/> <Operator>ಹೆಚ್ಚು ></Operator> <Value>{{count}} ವಸ್ತುಗಳು</Value>',
  'search.operator.array-count-gt.name': 'ಪ್ರಮಾಣ ಹೆಚ್ಚು ಇದೆ',
  /* Array should have a count greater than or equal to the given filter value */
  'search.operator.array-count-gte.description_one':
    '<Field/> <Operator>ಹೆಚ್ಚು ಅಥವಾ ಸಮಾನ ≥</Operator> <Value>{{count}} ವಸ್ತು</Value>',
  'search.operator.array-count-gte.description_other':
    '<Field/> <Operator>ಹೆಚ್ಚು ಅಥವಾ ಸಮಾನ ≥</Operator> <Value>{{count}} ವಸ್ತುಗಳು</Value>',
  'search.operator.array-count-gte.name': 'ಪ್ರಮಾಣ ಹೆಚ್ಚು ಅಥವಾ ಸಮಾನ ಇದೆ',
  /* Array should have a count less than given filter value */
  'search.operator.array-count-lt.description_one':
    '<Field/> <Operator>ಕಡಿಮೆ <</Operator> <Value>{{count}} ವಸ್ತು</Value>',
  'search.operator.array-count-lt.description_other':
    '<Field/> <Operator>ಕಡಿಮೆ <</Operator> <Value>{{count}} ವಸ್ತುಗಳು</Value>',
  'search.operator.array-count-lt.name': 'ಪ್ರಮಾಣ ಕಡಿಮೆ ಇದೆ',
  /* Array should have a count less than or equal to the given filter value */
  'search.operator.array-count-lte.description_one':
    '<Field/> <Operator>ಕಡಿಮೆ ಅಥವಾ ಸಮಾನ ≤</Operator> <Value>{{count}} ವಸ್ತು</Value>',
  'search.operator.array-count-lte.description_other':
    '<Field/> <Operator>ಕಡಿಮೆ ಅಥವಾ ಸಮಾನ ≤</Operator> <Value>{{count}} ವಸ್ತುಗಳು</Value>',
  'search.operator.array-count-lte.name': 'ಪ್ರಮಾಣ ಕಡಿಮೆ ಅಥವಾ ಸಮಾನ ಇದೆ',
  /* Array should have a count that is not equal to the given filter value */
  'search.operator.array-count-not-equal.description_one':
    '<Field/> <Operator>ಹೊಂದಿಲ್ಲ</Operator> <Value>{{count}} ವಸ್ತು</Value>',
  'search.operator.array-count-not-equal.description_other':
    '<Field/> <Operator>ಹೊಂದಿಲ್ಲ</Operator> <Value>{{count}} ವಸ್ತುಗಳು</Value>',
  'search.operator.array-count-not-equal.name': 'ಪ್ರಮಾಣವು ಅಲ್ಲ',
  /**
   * Array should have a count within the range of given filter values.
   * Gets passed `{{from}}` and `{{to}}` values.
   **/
  'search.operator.array-count-range.description':
    '<Field/> <Operator>ನಡುವೆ ಹೊಂದಿದೆ</Operator> <Value>{{from}} → {{to}} ವಸ್ತುಗಳು</Value>',
  'search.operator.array-count-range.name': 'ಪ್ರಮಾಣವು ನಡುವೆ ಇದೆ',
  /* Array should include the given value */
  'search.operator.array-list-includes.description':
    '<Field/> <Operator>ಒಳಗೊಂಡಿದೆ</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-includes.name': 'ಒಳಗೊಂಡಿದೆ',
  /* Array should not include the given value */
  'search.operator.array-list-not-includes.description':
    '<Field/> <Operator>ಒಳಗೊಂಡಿಲ್ಲ</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-not-includes.name': 'ಒಳಗೊಂಡಿಲ್ಲ',
  /* Array should include the given reference */
  'search.operator.array-reference-includes.description':
    '<Field/> <Operator>ಒಳಗೊಂಡಿದೆ</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-includes.name': 'ಒಳಗೊಂಡಿದೆ',
  /* Array should not include the given reference */
  'search.operator.array-reference-not-includes.description':
    '<Field/> <Operator>ಒಳಗೊಂಡಿಲ್ಲ</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-not-includes.name': 'ಒಳಗೊಂಡಿಲ್ಲ',
  /* Asset (file) should be the selected asset */
  'search.operator.asset-file-equal.description':
    '<Field/> <Operator>ಇದೆ</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-equal.name': 'ಇದೆ',
  /* Asset (file) should not be the selected asset */
  'search.operator.asset-file-not-equal.description':
    '<Field/> <Operator>ಅಲ್ಲ</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-not-equal.name': 'ಅಲ್ಲ',
  /* Asset (image) should be the selected asset */
  'search.operator.asset-image-equal.description':
    '<Field/> <Operator>ಇದೆ</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-equal.name': 'ಇದೆ',
  /* Asset (image) should not be the selected asset */
  'search.operator.asset-image-not-equal.description':
    '<Field/> <Operator>ಅಲ್ಲ</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-not-equal.name': 'ಅಲ್ಲ',
  /**
   * Boolean value should be the given filter value (true/false).
   * Context passed is `true` and `false`, allowing for more specific translations:
   * - `search.operator.boolean-equal.description_true`
   * - `search.operator.boolean-equal.description_false`
   */
  'search.operator.boolean-equal.description':
    '<Field/> <Operator>ಇದೆ</Operator> <Value>{{value}}</Value>',
  'search.operator.boolean-equal.name': 'ಇದೆ',
  /* Date should be after (later than) given filter value */
  'search.operator.date-after.description':
    '<Field/> <Operator>ನಂತರ ಇದೆ</Operator> <Value>{{value}}</Value>',
  'search.operator.date-after.name': 'ನಂತರ',
  /* Date should be before (earlier than) given filter value */
  'search.operator.date-before.description':
    '<Field/> <Operator>ಮೊದಲು ಇದೆ</Operator> <Value>{{value}}</Value>',
  'search.operator.date-before.name': 'ಮೊದಲು',
  /* Date should be the given filter value */
  'search.operator.date-equal.description':
    '<Field/> <Operator>ಅದು</Operator> <Value>{{value}}</Value>',
  'search.operator.date-equal.name': 'ಅದು',
  /* Date should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-last.description':
    '<Field/> <Operator>ಕೊನೆಯ</Operator> <Value>{{value}}</Value>ರಲ್ಲಿ ಇದೆ',
  'search.operator.date-last.name': 'ಕೊನೆಯ',
  /* Date should not be the given filter value */
  'search.operator.date-not-equal.description':
    '<Field/> <Operator>ಅದು ಅಲ್ಲ</Operator> <Value>{{value}}</Value>',
  'search.operator.date-not-equal.name': 'ಅದು ಅಲ್ಲ',
  /* Date should be within the range of given filter values */
  'search.operator.date-range.description': '<Field/> <Operator>ನಡುವೆ ಇದೆ</Operator> <Value/>',
  'search.operator.date-range.name': 'ನಡುವೆ ಇದೆ',
  /* Date and time should be after (later than) given filter value */
  'search.operator.date-time-after.description':
    '<Field/> <Operator>ನಂತರ</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-after.name': 'ನಂತರ',
  /* Date and time should be before (earlier than) given filter value */
  'search.operator.date-time-before.description':
    '<Field/> <Operator>ಮೊದಲು</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-before.name': 'ಮೊದಲು',
  /* Date and time should be the given filter value */
  'search.operator.date-time-equal.description':
    '<Field/> <Operator>ಅದು</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-equal.name': 'ಅದು',
  /* Date and time should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-time-last.description':
    '<Field/> <Operator>ಕೊನೆಯ</Operator> <Value>{{value}}</Value>ರಲ್ಲಿ ಇದೆ',
  'search.operator.date-time-last.name': 'ಕೊನೆಯ',
  /* Date and time should not be the given filter value */
  'search.operator.date-time-not-equal.description':
    '<Field/> <Operator>ಅದು ಅಲ್ಲ</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-not-equal.name': 'ಅದು ಅಲ್ಲ',
  /* Date and time should be within the range of given filter values */
  'search.operator.date-time-range.description': '<Field/> <Operator>ನಡುವೆ ಇದೆ</Operator> <Value/>',
  'search.operator.date-time-range.name': 'ನಡುವೆ ಇದೆ',
  /* Value should be defined */
  'search.operator.defined.description':
    '<Field/> <Operator>ಅದು</Operator> <Value>ಖಾಲಿ ಅಲ್ಲ</Value>',
  'search.operator.defined.name': 'ಖಾಲಿ ಅಲ್ಲ',
  /* Value should not be defined */
  'search.operator.not-defined.description':
    '<Field/> <Operator>ಅದು</Operator> <Value>ಖಾಲಿ</Value>',
  'search.operator.not-defined.name': 'ಖಾಲಿ',
  /* Number should be the given filter value */
  'search.operator.number-equal.description':
    '<Field/> <Operator>ಇದೆ</Operator> <Value>{{value}}</Value>',
  'search.operator.number-equal.name': 'ಇದೆ',
  /* Number should be greater than given filter value */
  'search.operator.number-gt.description':
    '<Field/> <Operator>></Operator> <Value>{{value}}</Value>',
  'search.operator.number-gt.name': 'ಗಿಂತ ಹೆಚ್ಚು',
  /* Number should be greater than or the given filter value */
  'search.operator.number-gte.description':
    '<Field/> <Operator>≥</Operator> <Value>{{value}}</Value>',
  'search.operator.number-gte.name': 'ಗಿಂತ ಹೆಚ್ಚು ಅಥವಾ ಸಮ',
  /* Number should be less than given filter value */
  'search.operator.number-lt.description':
    '<Field/> <Operator><</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lt.name': 'ಗಿಂತ ಕಡಿಮೆ',
  /* Number should be less than or the given filter value */
  'search.operator.number-lte.description':
    '<Field/> <Operator>≤</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lte.name': 'ಗಿಂತ ಕಡಿಮೆ ಅಥವಾ ಸಮ',
  /* Number should not be the given filter value */
  'search.operator.number-not-equal.description':
    '<Field/> <Operator>ಅಲ್ಲ</Operator> <Value>{{value}}</Value>',
  'search.operator.number-not-equal.name': 'ಅಲ್ಲ',
  /* Number should be within the range of given filter values */
  'search.operator.number-range.description':
    '<Field/> <Operator>ನಡುವೆ ಇದೆ</Operator> <Value>{{from}} → {{to}}</Value>',
  'search.operator.number-range.name': 'ನಡುವೆ ಇದೆ',
  /* Portable Text should contain the given filter value */
  'search.operator.portable-text-contains.description':
    '<Field/> <Operator>ಒಳಗೊಂಡಿದೆ</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-contains.name': 'ಒಳಗೊಂಡಿದೆ',
  /* Portable Text should be the given filter value */
  'search.operator.portable-text-equal.description':
    '<Field/> <Operator>ಇದೆ</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-equal.name': 'ಇದೆ',
  /* Portable Text should not contain the given filter value */
  'search.operator.portable-text-not-contains.description':
    '<Field/> <Operator>ಒಳಗೊಂಡಿಲ್ಲ</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-contains.name': 'ಒಳಗೊಂಡಿಲ್ಲ',
  /* Portable Text should not be the given filter value */
  'search.operator.portable-text-not-equal.description':
    '<Field/> <Operator>ಅಲ್ಲ</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-equal.name': 'ಅಲ್ಲ',
  /* References the given asset (file) */
  'search.operator.reference-asset-file.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-file.name': 'ಫೈಲ್',
  /* References the given asset (image) */
  'search.operator.reference-asset-image.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-image.name': 'ಚಿತ್ರ',
  /* References the given document */
  'search.operator.reference-document.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-document.name': 'ದಾಖಲೆ',
  /* Reference should be the given document */
  'search.operator.reference-equal.description':
    '<Field/> <Operator>ಇದೆ</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-equal.name': 'ಇದೆ',
  /* Reference should not be the given document */
  'search.operator.reference-not-equal.description':
    '<Field/> <Operator>ಇಲ್ಲ</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-not-equal.name': 'ಇಲ್ಲ',
  /* Slug contains the given value */
  'search.operator.slug-contains.description':
    '<Field/> <Operator>ಒಳಗೊಂಡಿದೆ</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-contains.name': 'ಒಳಗೊಂಡಿದೆ',
  /* Slug equals the given filter value */
  'search.operator.slug-equal.description':
    '<Field/> <Operator>ಇದೆ</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-equal.name': 'ಇದೆ',
  /* Slug does not contain the given value */
  'search.operator.slug-not-contains.description':
    '<Field/> <Operator>ಒಳಗೊಂಡಿಲ್ಲ</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-contains.name': 'ಒಳಗೊಂಡಿಲ್ಲ',
  /* Slug does not equal the given filter value */
  'search.operator.slug-not-equal.description':
    '<Field/> <Operator>ಇಲ್ಲ</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-equal.name': 'ಇಲ್ಲ',
  /* String contains the given filter value */
  'search.operator.string-contains.description':
    '<Field/> <Operator>ಒಳಗೊಂಡಿದೆ</Operator> <Value>{{value}}</Value>',
  'search.operator.string-contains.name': 'ಒಳಗೊಂಡಿದೆ',
  /* String equals the given filter value */
  'search.operator.string-equal.description':
    '<Field/> <Operator>ಇದೆ</Operator> <Value>{{value}}</Value>',
  'search.operator.string-equal.name': 'ಇದೆ',
  /* String equals one of the predefined allowed values */
  'search.operator.string-list-equal.description':
    '<Field/> <Operator>ಇದೆ</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-equal.name': 'ಇದೆ',
  /* String does not equal one of the predefined allowed values */
  'search.operator.string-list-not-equal.description':
    '<Field/> <Operator>ಇಲ್ಲ</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-not-equal.name': 'ಇಲ್ಲ',
  /* String does not contain the given filter value */
  'search.operator.string-not-contains.description':
    '<Field/> <Operator>ಒಳಗೊಂಡಿಲ್ಲ</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-contains.name': 'ಒಳಗೊಂಡಿಲ್ಲ',
  /* String does not equal the given filter value */
  'search.operator.string-not-equal.description':
    '<Field/> <Operator>ಅಲ್ಲ</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-equal.name': 'ಅಲ್ಲ',
  /** Label for the "Best match" search ordering type */
  'search.ordering.best-match-label': 'ಅತ್ಯುತ್ತಮ ಹೊಂದಾಣಿಕೆ',
  /** Label for the "Created: Oldest first" search ordering type */
  'search.ordering.created-ascending-label': 'ರಚಿಸಲಾಗಿದೆ: ಹಳೆಯದು ಮೊದಲು',
  /** Label for the "Created: Newest first" search ordering type */
  'search.ordering.created-descending-label': 'ರಚಿಸಲಾಗಿದೆ: ಹೊಸದು ಮೊದಲು',
  /** Label for the "Updated: Oldest first" search ordering type */
  'search.ordering.updated-ascending-label': 'ನವೀಕರಿಸಲಾಗಿದೆ: ಹಳೆಯದು ಮೊದಲು',
  /** Label for the "Updated: Newest first" search ordering type */
  'search.ordering.updated-descending-label': 'ನವೀಕರಿಸಲಾಗಿದೆ: ಹೊಸದು ಮೊದಲು',
  /** Placeholder text for the global search input field */
  'search.placeholder': 'ಹುಡುಕಾಟ',
  /** Accessibility label for the recent searches section, shown when no valid search terms has been given */
  'search.recent-searches-aria-label': 'ಇತ್ತೀಚಿನ ಹುಡುಕಾಟಗಳು',
  /** Label/heading shown for the recent searches section */
  'search.recent-searches-label': 'ಇತ್ತೀಚಿನ ಹುಡುಕಾಟಗಳು',
  /** Accessibility label for the search results section, shown when the user has typed valid terms */
  'search.search-results-aria-label': 'ಹುಡುಕಾಟದ ಫಲಿತಾಂಶಗಳು',

  /** Label for the edit columns button to change field visibility in sheet list */
  'sheet-list.edit-columns': 'ಅಂಕಣಗಳನ್ನು ಸಂಪಾದಿಸಿ',
  /** Label for the header menu option to hide a field from the sheet list */
  'sheet-list.hide-field': 'ಕೋಷ್ಟಕದಿಂದ ತೆಗೆದುಹಾಕಿ',
  /** Label for reset column visibilities button */
  'sheet-list.reset-columns': 'ಅಂಕಣಗಳನ್ನು ಮರುಹೊಂದಿಸಿ',
  /** Title for the edit columns menu */
  'sheet-list.select-fields': 'ಐದು ಕ್ಷೇತ್ರ ಪ್ರಕಾರಗಳನ್ನು ಆರಿಸಿ',

  /** Accessibility label for the navbar status button */
  'status-button.aria-label': 'ಸಂರಚನಾ ಸ್ಥಿತಿ',

  /** Description for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-description': 'ದಾಖಲೆಯ ಇತಿಹಾಸ ವಹಿವಾಟುಗಳು ಪ್ರಭಾವಿತವಾಗಿಲ್ಲ.',
  /** Title for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-title': 'ದಾಖಲೆಯ ಬದಲಾವಣೆಗಳನ್ನು ಪಡೆಯುವಾಗ ದೋಷ ಸಂಭವಿಸಿದೆ.',
  /** Error description for when the document doesn't have history */
  'timeline.error.no-document-history-description':
    'ದಾಖಲೆಯ ವಿಷಯವನ್ನು ಬದಲಿಸುವಾಗ, ದಾಖಲೆಯ ಆವೃತ್ತಿಗಳು ಈ ಮೆನುವಿನಲ್ಲಿ ಕಾಣಿಸಲಿವೆ.',
  /** Error title for when the document doesn't have history */
  'timeline.error.no-document-history-title': 'ದಾಖಲೆಯ ಇತಿಹಾಸವಿಲ್ಲ',
  /** Error prompt when revision cannot be loaded */
  'timeline.error.unable-to-load-revision': 'ಪರಿಷ್ಕರಣೆ ಲೋಡ್ ಮಾಡಲು ಅಸಾಧ್ಯ',
  /** Label for when the timeline item is the latest in the history */
  'timeline.latest': 'ಇತ್ತೀಚಿನ',
  /** Label for latest revision for timeline menu dropdown */
  'timeline.latest-revision': 'ಇತ್ತೀಚಿನ ಪರಿಷ್ಕರಣೆ',
  /**
   * Label for latest revision for timeline menu dropdown
   * @deprecated as of `v3.47.0` `timeline.latest-revision` should be used instead. Note: _usage_ of this key is deprecated, but Studios on `< v3.47.0` still require this key to be _defined_
   * */
  'timeline.latest-version': 'ಇತ್ತೀಚಿನ ಆವೃತ್ತಿ',
  /** The aria-label for the list of revisions in the timeline */
  'timeline.list.aria-label': 'ದಾಖಲೆಯ ಪರಿಷ್ಕರಣೆಗಳು',
  /** Label for loading history */
  'timeline.loading-history': 'ಇತಿಹಾಸ ಲೋಡ್ ಮಾಡುತ್ತಿದೆ…',
  /** Label shown in review changes timeline when a document has been created */
  'timeline.operation.created': 'ರಚಿಸಲಾಗಿದೆ',
  /** Label shown in review changes timeline when a document has been created, with a timestamp */
  'timeline.operation.created_timestamp': 'ರಚಿಸಲಾಗಿದೆ: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was initially created */
  'timeline.operation.created-initial': 'ರಚಿಸಲಾಗಿದೆ',
  /** Label shown in review changes timeline when a document was initially created, with a timestamp */
  'timeline.operation.created-initial_timestamp': 'ರಚಿಸಲಾಗಿದೆ: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been deleted */
  'timeline.operation.deleted': 'ಅಳಿಸಲಾಗಿದೆ',
  /** Label shown in review changes timeline when a document has been deleted, with a timestamp */
  'timeline.operation.deleted_timestamp': 'ಅಳಿಸಲಾಗಿದೆ: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been discarded */
  'timeline.operation.draft-discarded': 'ಕರಡು ತ್ಯಜಿಸಲಾಗಿದೆ',
  /** Label shown in review changes timeline when a draft has been discarded, with a timestamp */
  'timeline.operation.draft-discarded_timestamp': 'ಕರಡು ತ್ಯಜಿಸಲಾಗಿದೆ: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been edited */
  'timeline.operation.edited-draft': 'ಸಂಪಾದಿಸಲಾಗಿದೆ',
  /** Label shown in review changes timeline when a draft has been edited, with a timestamp */
  'timeline.operation.edited-draft_timestamp': 'ಸಂಪಾದಿಸಲಾಗಿದೆ: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been edited live */
  'timeline.operation.edited-live': 'ನೇರ ಸಂಪಾದನೆ ಮಾಡಲಾಗಿದೆ',
  /** Label shown in review changes timeline when a document has been edited live, with a timestamp */
  'timeline.operation.edited-live_timestamp': 'ನೇರ ಸಂಪಾದನೆ ಮಾಡಲಾಗಿದೆ: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was published */
  'timeline.operation.published': 'ಪ್ರಕಟಿಸಲಾಗಿದೆ',
  /** Label shown in review changes timeline when a document was published, with a timestamp */
  'timeline.operation.published_timestamp': 'ಪ್ರಕಟಿಸಲಾಗಿದೆ: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was unpublished */
  'timeline.operation.unpublished': 'ಪ್ರಕಟಣೆ ರದ್ದುಗೊಳಿಸಲಾಗಿದೆ',
  /** Label shown in review changes timeline when a document was unpublished, with a timestamp */
  'timeline.operation.unpublished_timestamp': 'ಪ್ರಕಟಣೆ ರದ್ದುಗೊಳಿಸಲಾಗಿದೆ: {{timestamp, datetime}}',
  /**
   * Label for determining since which version the changes for timeline menu dropdown are showing.
   * Receives the time label as a parameter (`timestamp`).
   */
  'timeline.since': 'ಈ ಕಾಲದಿಂದ: {{timestamp, datetime}}',
  /** Label for missing change version for timeline menu dropdown are showing */
  'timeline.since-version-missing': 'ಈ ಕಾಲದಿಂದ: ಅಜ್ಞಾತ ಆವೃತ್ತಿ',

  /** Aria label for the action buttons in the PTE toolbar */
  'toolbar.portable-text.action-button-aria-label': '{{action}}',

  /** Accessibility label for the breadcrumb menu */
  'tree-editing-dialog.breadcrumbs.menu': 'ಬ್ರೆಡ್‌ಕ್ರಂಬ್ ಮೆನು',
  /** Title placeholder for search input in array of objects */
  'tree-editing-dialog.search-placeholder': 'ಹುಡುಕು',
  /** Menu aria label for the search menu */
  'tree-editing-dialog.search.menu-label': 'ಹುಡುಕಾಟ ಮೆನು',
  /** Title label for when no search results are found on the tree of objects */
  'tree-editing-dialog.search.no-results-title': 'ಯಾವುದೇ ಫಲಿತಾಂಶಗಳು ಕಂಡುಬಂದಿಲ್ಲ',
  /** Label to close the sidebar */
  'tree-editing-dialog.sidebar.action.close': 'ಸೈಡ್‌ಬಾರ್ ಮುಚ್ಚಿ',
  /** Collapse label the menu item in the sidebar  */
  'tree-editing-dialog.sidebar.action.collapse': 'ಸಂಕುಚಿತ',
  /** Label to close the dialog */
  'tree-editing-dialog.sidebar.action.done': 'ಮುಗಿದಿದೆ',
  /** Exapnd label the menu item in the sidebar  */
  'tree-editing-dialog.sidebar.action.expand': 'ವಿಸ್ತರಿಸಿ',
  /** Label to open the sidebar */
  'tree-editing-dialog.sidebar.action.open': 'ಸೈಡ್‌ಬಾರ್ ತೆರೆಯಿರಿ',

  /** Label for button showing the free trial days left */
  'user-menu.action.free-trial_one': 'ಉಚಿತ ಪರೀಕ್ಷಾ ಅವಧಿಯಲ್ಲಿ {{count}} ದಿನ ಉಳಿದಿದೆ',
  'user-menu.action.free-trial_other': 'ಉಚಿತ ಪರೀಕ್ಷಾ ಅವಧಿಯಲ್ಲಿ {{count}} ದಿನಗಳು ಉಳಿದಿವೆ',
  /** Label for the button showed after trial ended */
  'user-menu.action.free-trial-finished': 'ಉಚಿತದಿಂದ ಅಪ್‌ಗ್ರೇಡ್ ಮಾಡಿ',
  /** Label for action to invite members to the current sanity project */
  'user-menu.action.invite-members': 'ಸದಸ್ಯರನ್ನು ಆಹ್ವಾನಿಸಿ',
  /** Accessibility label for action to invite members to the current sanity project */
  'user-menu.action.invite-members-aria-label': 'ಸದಸ್ಯರನ್ನು ಆಹ್ವಾನಿಸಿ',
  /** Label for action to manage the current sanity project */
  'user-menu.action.manage-project': 'ಯೋಜನೆಯನ್ನು ನಿರ್ವಹಿಸಿ',
  /** Accessibility label for the action to manage the current project */
  'user-menu.action.manage-project-aria-label': 'ಯೋಜನೆಯನ್ನು ನಿರ್ವಹಿಸಿ',
  /** Tooltip helper text when portable text annotation is disabled for empty block*/
  'user-menu.action.portable-text.annotation-disabled_empty-block':
    'ಖಾಲಿ ಬ್ಲಾಕ್‌ಗೆ {{name}} ಅನ್ವಯಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ',
  /** Tooltip helper text when portable text annotation is disabled for multiple blocks */
  'user-menu.action.portable-text.annotation-disabled_multiple-blocks':
    'ಬಹುಬ್ಲಾಕ್‌ಗಳಿಗೆ {{name}} ಅನ್ವಯಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ',
  /** Label for action to sign out of the current sanity project */
  'user-menu.action.sign-out': 'ಸೈನ್ ಔಟ್',
  /** Title for appearance section for the current studio (dark / light / system scheme) */
  'user-menu.appearance-title': 'ರೂಪರೇಷೆ',
  /** Label for close menu button for user menu */
  'user-menu.close-menu': 'ಮೆನು ಮುಚ್ಚು',
  /** Description for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-description': 'ಡಾರ್ಕ್ ರೂಪರೇಷೆ ಬಳಸಿ',
  /** Title for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-title': 'ಡಾರ್ಕ್',
  /** Description for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-description': 'ಲೈಟ್ ರೂಪರೇಷೆ ಬಳಸಿ',
  /** Title for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-title': 'ಲೈಟ್',
  /** Description for using "system apparence" in the appearance user menu */
  'user-menu.color-scheme.system-description': 'ಸಿಸ್ಟಮ್ ರೂಪರೇಷೆ ಬಳಸಿ',
  /** Title for using system apparence in the appearance user menu */
  'user-menu.color-scheme.system-title': 'ಸಿಸ್ಟಮ್',
  /** Title for locale section for the current studio */
  'user-menu.locale-title': 'ಭಾಷೆ',
  /** Label for tooltip to show which provider the currently logged in user is using */
  'user-menu.login-provider': '{{providerTitle}} ಮೂಲಕ ಸೈನ್ ಇನ್ ಆಗಿದ್ದೀರಿ',
  /** Label for open menu button for user menu */
  'user-menu.open-menu': 'ಮೆನು ತೆರೆ',

  /**
   * Label for action to add a workspace (currently a developer-oriented action, as this will
   * lead to the documentation on workspace configuration)
   */
  'workspaces.action.add-workspace': 'ವರ್ಕ್‌ಸ್ಪೇಸ್ ಸೇರಿಸಿ',
  /**
   * Label for action to choose a different workspace, in the case where you are not logged in,
   * have selected a workspace, and are faced with the authentication options for the selected
   * workspace. In other words, label for the action shown when you have reconsidered which
   * workspace to authenticate in.
   */
  'workspaces.action.choose-another-workspace': 'ಬೇರೆ ವರ್ಕ್‌ಸ್ಪೇಸ್ ಆಯ್ಕೆಮಾಡಿ',
  /** Label for heading that indicates that you can choose your workspace */
  'workspaces.choose-your-workspace-label': 'ನಿಮ್ಮ ವರ್ಕ್‌ಸ್ಪೇಸ್ ಆಯ್ಕೆಮಾಡಿ',
  /** Label for the workspace menu */
  'workspaces.select-workspace-aria-label': 'ವರ್ಕ್‌ಸ್ಪೇಸ್ ಆಯ್ಕೆಮಾಡಿ',
  /** Button label for opening the workspace switcher */
  'workspaces.select-workspace-label': 'ವರ್ಕ್‌ಸ್ಪೇಸ್ ಆಯ್ಕೆಮಾಡಿ',
  /** Tooltip for the workspace menu */
  'workspaces.select-workspace-tooltip': 'ವರ್ಕ್‌ಸ್ಪೇಸ್ ಆಯ್ಕೆಮಾಡಿ',
  /** Title for Workplaces dropdown menu */
  'workspaces.title': 'ವರ್ಕ್‌ಸ್ಪೇಸ್‌ಗಳು',
})
