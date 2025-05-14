import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** "Disabled" status for auto-updates in About-dialog */
  'about-dialog.version-info.auto-updates.disabled': undefined, // 'Disabled'
  /** "Enabled" status for auto-updates in About-dialog */
  'about-dialog.version-info.auto-updates.enabled': undefined, // 'Enabled'
  /** "Auto Updates" status header in About-dialog */
  'about-dialog.version-info.auto-updates.header': undefined, // 'Auto Updates'
  /** "How to enable" next to Disabled state for Auto updates in about dialog */
  'about-dialog.version-info.auto-updates.how-to-enable': undefined, // 'How to enable'
  /** Text displayed on the "Copy to clipboard"-button after clicked */
  'about-dialog.version-info.copy-to-clipboard-button.copied-text': undefined, // 'Copied to Clipboard. Happy pasting!'
  /** "Copy to Clipboard" button text for copying version details from About-dialog */
  'about-dialog.version-info.copy-to-clipboard-button.text': undefined, // 'Copy to Clipboard'
  /** "Current version" header in about dialog  */
  'about-dialog.version-info.current-version.header': undefined, // 'Current version'
  /** "How to upgrade" link text */
  'about-dialog.version-info.how-to-upgrade': undefined, // 'How to upgrade'
  /** "Latest version" header in about dialog */
  'about-dialog.version-info.latest-version.header': undefined, // 'Latest version'
  /** "Latest version" header in about dialog */
  'about-dialog.version-info.latest-version.text': undefined, // 'Latest version is {{latestVersion}}'
  /** "Up to date" status in About-dialog */
  'about-dialog.version-info.up-to-date': undefined, // 'Up to date'
  /** "User agent" header in About-dialog */
  'about-dialog.version-info.user-agent.header': undefined, // 'User agent'

  /** The text used in the tooltip shown in the dialog close button */
  'announcement.dialog.close': undefined, // 'Close'
  /** Aria label to be used in the dialog close button */
  'announcement.dialog.close-label': undefined, // 'Close dialog'
  /**Text to be used in the tooltip in the button in the studio announcement card */
  'announcement.floating-button.dismiss': undefined, // 'Close'
  /**Aria label to be used in the floating button in the studio announcement card, to dismiss the card */
  'announcement.floating-button.dismiss-label': undefined, // 'Dismiss announcements'
  /**Aria label to be used in the floating button in the studio announcement card */
  'announcement.floating-button.open-label': undefined, // 'Open announcements'

  /** Menu item for deleting the asset */
  'asset-source.asset-list.menu.delete': undefined, // 'Delete'
  /** Menu item for showing where a particular asset is used */
  'asset-source.asset-list.menu.show-usage': undefined, // 'Show usage'
  /** Header in usage dialog for file assets */
  'asset-source.asset-usage-dialog.header_file': undefined, // 'Documents using file'
  /** Header in usage dialog for image assets */
  'asset-source.asset-usage-dialog.header_image': undefined, // 'Documents using image'
  /** Text shown in usage dialog when loading documents using the selected asset */
  'asset-source.asset-usage-dialog.loading': undefined, // 'Loading…'
  /** Text for cancel action in delete-asset dialog */
  'asset-source.delete-dialog.action.cancel': undefined, // 'Cancel'
  /** Text for "confirm delete" action in delete-asset dialog */
  'asset-source.delete-dialog.action.delete': undefined, // 'Delete'
  /** Dialog header for delete-asset dialog when deleting a file */
  'asset-source.delete-dialog.header_file': undefined, // 'Delete file'
  /** Dialog header for delete-asset dialog when deleting an image */
  'asset-source.delete-dialog.header_image': undefined, // 'Delete image'
  /** Text shown in delete dialog when loading documents using the selected asset */
  'asset-source.delete-dialog.loading': undefined, // 'Loading…'
  /** Message confirming to delete *named* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_named': undefined, // 'You are about to delete the file <strong>{{filename}}</strong> and its metadata. Are you sure?'
  /** Message confirming to delete *unnamed* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_unnamed': undefined, // 'You are about to delete the file and its metadata. Are you sure?'
  /** Message confirming to delete *named* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_named': undefined, // 'You are about to delete the image <strong>{{filename}}</strong> and its metadata. Are you sure?'
  /** Message confirming to delete *unnamed* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_unnamed': undefined, // 'You are about to delete the image and its metadata. Are you sure?'
  /** Alt text showing on image preview in delete asset dialog  */
  'asset-source.delete-dialog.usage-list.image-preview-alt': undefined, // 'Preview of image'
  /** Warning message showing when *named* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_named': undefined, // '{{filename}} cannot be deleted because it\'s being used. In order to delete this file, you first need to remove all uses of it.'
  /** Warning message showing when *unnamed* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_unnamed': undefined, // 'This file cannot be deleted because it\'s being used. In order to delete it, you first need to remove all uses of it.'
  /** Warning message showing when *named* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_named': undefined, // '{{filename}} cannot be deleted because it\'s being used. In order to delete this image, you first need to remove all uses of it.'
  /** Warning message showing when *unnamed* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_unnamed': undefined, // 'This image cannot be deleted because it\'s being used. In order to delete it, you first need to remove all uses of it.'
  /** Text shown when the list of assets only include a specific set of types */
  'asset-source.dialog.accept-message': undefined, // 'Only showing assets of accepted types: <strong>{{acceptTypes}}</strong>'
  /** Select asset dialog cancel-button */
  'asset-source.dialog.button.cancel': undefined, // 'Cancel'
  /** Select asset dialog select-button */
  'asset-source.dialog.button.select': undefined, // 'Select'
  /** Keys shared between both image asset source and file asset source */
  /** Select asset dialog title for files */
  'asset-source.dialog.default-title_file': undefined, // 'Select file'
  /** Select asset dialog title for images */
  'asset-source.dialog.default-title_image': undefined, // 'Select image'
  /** Insert asset error */
  'asset-source.dialog.insert-asset-error': undefined, // 'Error inserting asset. See the console for more information.'
  /** Select asset dialog load more items */
  'asset-source.dialog.load-more': undefined, // 'Load more'
  /** Text shown when selecting a file but there's no files to select from */
  'asset-source.dialog.no-assets_file': undefined, // 'No files'
  /** Text shown when selecting an image but there's no images to select from */
  'asset-source.dialog.no-assets_image': undefined, // 'No images'
  'asset-source.file.asset-list.action.delete.disabled-cannot-delete-current-file': undefined, // 'Cannot delete currently selected file'
  'asset-source.file.asset-list.action.delete.text': undefined, // 'Delete'
  'asset-source.file.asset-list.action.delete.title': undefined, // 'Delete file'
  'asset-source.file.asset-list.action.select-file.title': undefined, // 'Select the file {{filename}}'
  'asset-source.file.asset-list.action.show-usage.title': undefined, // 'Show usage'
  'asset-source.file.asset-list.delete-failed': undefined, // 'File could not be deleted'
  'asset-source.file.asset-list.delete-successful': undefined, // 'File was deleted'
  'asset-source.file.asset-list.header.date-added': undefined, // 'Date added'
  /** File asset source */
  'asset-source.file.asset-list.header.filename': undefined, // 'Filename'
  'asset-source.file.asset-list.header.size': undefined, // 'Size'
  'asset-source.file.asset-list.header.type': undefined, // 'Type'
  /** Text displayed on button or menu invoking the file asset source */
  'asset-source.file.title': undefined, // 'Uploaded files'
  'asset-source.image.asset-list.delete-failed': undefined, // 'Image could not be deleted'
  /** Image asset source */
  'asset-source.image.asset-list.delete-successful': undefined, // 'Image was deleted'
  /** Text displayed on button or menu invoking the image asset source */
  'asset-source.image.title': undefined, // 'Uploaded images'
  /** Built in asset source usage texts */
  'asset-source.usage-list.documents-using-file_named_one': undefined, // 'One document is using file <code>{{filename}}</code>'
  'asset-source.usage-list.documents-using-file_named_other': undefined, // '{{count}} documents are using file <code>{{filename}}</code>'
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *named* file **/
  'asset-source.usage-list.documents-using-file_named_zero': undefined, // 'No documents are using file <code>{{filename}}</code>'
  'asset-source.usage-list.documents-using-file_unnamed_one': undefined, // 'One document is using this file'
  'asset-source.usage-list.documents-using-file_unnamed_other': undefined, // '{{count}} documents are using this file'
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *unnamed* file **/
  'asset-source.usage-list.documents-using-file_unnamed_zero': undefined, // 'No documents are using this file'
  'asset-source.usage-list.documents-using-image_named_one': undefined, // 'One document is using image <code>{{filename}}</code>'
  'asset-source.usage-list.documents-using-image_named_other': undefined, // '{{count}} documents are using image <code>{{filename}}</code>'
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *named* image **/
  'asset-source.usage-list.documents-using-image_named_zero': undefined, // 'No documents are using image <code>{{filename}}</code>'
  'asset-source.usage-list.documents-using-image_unnamed_one': undefined, // 'One document is using this image'
  'asset-source.usage-list.documents-using-image_unnamed_other': undefined, // '{{count}} documents are using this image'
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *unnamed* image **/
  'asset-source.usage-list.documents-using-image_unnamed_zero': undefined, // 'No documents are using this image'

  /** Common (all) Asset Source texts. Note that all translation keys starting with 'asset-source.' is for the built in asset source. */
  'asset-sources.common.uploader.upload-failed.description': undefined, // 'See the console for more information.'
  'asset-sources.common.uploader.upload-failed.title': undefined, // 'Upload failed'
  /** Menu Items for Dataset Asset Source (will be replaced with workspace name by default) */
  'asset-sources.dataset.file.title': undefined, // 'Workspace files'
  'asset-sources.dataset.image.title': undefined, // 'Workspace images'
  /** Menu Items for Media Library Asset Source */
  'asset-sources.media-library.file.title': undefined, // 'Media Library'
  'asset-sources.media-library.image.title': undefined, // 'Media Library'

  /** Label when a release has been deleted by a different user */
  'banners.deleted-bundle-banner.text': undefined, // 'The \'<strong>{{title}}</strong>\' release has been deleted.'

  /** Action message for navigating to next month */
  'calendar.action.go-to-next-month': undefined, // 'Go to next month'
  /** Action message for navigating to next year */
  'calendar.action.go-to-next-year': undefined, // 'Go to next year'
  /** Action message for navigating to previous month */
  'calendar.action.go-to-previous-month': undefined, // 'Go to previous month'
  /** Action message for navigating to previous year */
  'calendar.action.go-to-previous-year': undefined, // 'Go to previous year'
  /* Label for navigating the calendar to "today", without _selecting_ today. Short form, eg `Today`, not `Go to today` */
  'calendar.action.go-to-today': undefined, // 'Today'
  /* Accessibility label for navigating the calendar to "today", without _selecting_ today */
  'calendar.action.go-to-today-aria-label': undefined, // 'Go to today'
  /* Label for navigating the calendar to "tomorrow", without _selecting_ tomorrow. Short form, eg `Tomorrow`, not `Go to tomorrow` */
  'calendar.action.go-to-tomorrow': undefined, // 'Tomorrow'
  /* Label for navigating the calendar to "yesterday", without _selecting_ yesterday. Short form, eg `Yesterday`, not `Go to yesterday` */
  'calendar.action.go-to-yesterday': undefined, // 'Yesterday'
  /** Label for switch that controls whether or not to include time in given timestamp */
  'calendar.action.include-time-label': undefined, // 'Include time'
  /** Action message for selecting the time */
  'calendar.action.select-time': undefined, // 'Select time'
  /** Action message for setting to the current time */
  'calendar.action.set-to-current-time': undefined, // 'Set to current time'
  /** Label for selecting an hour preset. Receives a `time` param as a string on hh:mm format and a `date` param as a Date instance denoting the preset date */
  'calendar.action.set-to-time-preset': undefined, // '{{time}} on {{date, datetime}}'
  /** Aria label for button to open date picker */
  'calendar.button.aria-label': undefined, // 'Open calendar'
  /** Tooltip content for button to open datetime input */
  'calendar.button.tooltip-text': undefined, // 'Select date'
  /** Error message displayed in calendar when entered date is not the correct format */
  'calendar.error.must-be-in-format': undefined, // 'Must be in the format: {{exampleDate}}'
  /** Month name for April */
  'calendar.month-names.april': undefined, // 'April'
  /** Month name for August */
  'calendar.month-names.august': undefined, // 'August'
  /** Month name for December */
  'calendar.month-names.december': undefined, // 'December'
  /** Month name for February */
  'calendar.month-names.february': undefined, // 'February'
  /** Month name for January */
  'calendar.month-names.january': undefined, // 'January'
  /** Month name for July */
  'calendar.month-names.july': undefined, // 'July'
  /** Month name for June */
  'calendar.month-names.june': undefined, // 'June'
  /** Month name for March */
  'calendar.month-names.march': undefined, // 'March'
  /** Month name for May */
  'calendar.month-names.may': undefined, // 'May'
  /** Month name for November */
  'calendar.month-names.november': undefined, // 'November'
  /** Month name for October */
  'calendar.month-names.october': undefined, // 'October'
  /** Month name for September */
  'calendar.month-names.september': undefined, // 'September'
  /** Short weekday name for Friday */
  'calendar.weekday-names.short.friday': undefined, // 'Fri'
  /** Short weekday name for Monday */
  'calendar.weekday-names.short.monday': undefined, // 'Mon'
  /** Short weekday name for Saturdayday */
  'calendar.weekday-names.short.saturday': undefined, // 'Sat'
  /** Short weekday name for Sunday */
  'calendar.weekday-names.short.sunday': undefined, // 'Sun'
  /** Short weekday name for Thursday */
  'calendar.weekday-names.short.thursday': undefined, // 'Thu'
  /** Short weekday name for Tuesday */
  'calendar.weekday-names.short.tuesday': undefined, // 'Tue'
  /** Short weekday name for Wednesday */
  'calendar.weekday-names.short.wednesday': undefined, // 'Wed'

  /** Label for the close button label in Review Changes pane */
  'changes.action.close-label': undefined, // 'Close history'
  /** Cancel label for revert button prompt action */
  'changes.action.revert-all-cancel': undefined, // 'Cancel'
  /** Revert all confirm label for revert button action - used on prompt button + review changes pane */
  'changes.action.revert-all-confirm': undefined, // 'Revert all'
  /** Prompt for confirming revert change (singular) label for field change action */
  'changes.action.revert-changes-confirm-change_one': undefined, // 'Revert change'
  /** Revert for confirming revert (plural) label for field change action */
  'changes.action.revert-changes-confirm-change_other': undefined, // 'Revert changes'
  /** Prompt for reverting changes for a field change */
  'changes.action.revert-changes-description': undefined, // 'Are you sure you want to revert the changes?'
  /** Prompt for reverting changes for a group change, eg multiple changes */
  'changes.action.revert-changes-description_one': undefined, // 'Are you sure you want to revert the change?'
  /** Label for when the action of the change was to set something that was previously empty, eg a field was given a value, an array item was added, an asset was selected or similar */
  'changes.added-label': undefined, // 'Added'
  /** Array diff: An item was added in a given position (`{{position}}`) */
  'changes.array.item-added-in-position': undefined, // 'Added in position {{position}}'
  'changes.array.item-moved_down_one': undefined, // 'Moved {{count}} position down'
  'changes.array.item-moved_down_other': undefined, // 'Moved {{count}} positions down'
  /**
   * Array diff: An item was moved within the array.
   * Receives `{{count}}` representing number of positions it moved.
   * Context is the direction of the move, either `up` or `down`.
   */
  'changes.array.item-moved_up_one': undefined, // 'Moved {{count}} position up'
  'changes.array.item-moved_up_other': undefined, // 'Moved {{count}} positions up'
  /** Array diff: An item was removed from a given position (`{{position}}`) */
  'changes.array.item-removed-from-position': undefined, // 'Removed from position {{position}}'
  /** Accessibility label for the "change bar" shown when there are edits on a field-level */
  'changes.change-bar.aria-label': undefined, // 'Review changes'
  /** Label for when the action of the change was _not_ an add/remove, eg a text field changed value, an image was changed from one asset to another or similar */
  'changes.changed-label': undefined, // 'Changed'
  /** Label and text for tooltip that indicates the authors of the changes */
  'changes.changes-by-author': undefined, // 'Changes by'
  /** Additional text shown in development mode when a diff component crashes during rendering */
  'changes.error-boundary.developer-info': undefined, // 'Check the developer console for more information'
  /** Text shown when a diff component crashes during rendering, triggering the error boundary */
  'changes.error-boundary.title': undefined, // 'Rendering the changes to this field caused an error'
  /* Error description when changes could not be loaded */
  'changes.error-description': undefined, // 'We\'re unable to load the changes for this document.'
  /** Error title when changes could not be loaded */
  'changes.error-title': undefined, // 'Something went wrong'
  /** Error message shown when the value of a field is not the expected one */
  'changes.error.incorrect-type-message': undefined, // 'Value error: Value is of type "<code>{{actualType}}</code>", expected "<code>{{expectedType}}</code>"'
  /** File diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.file.meta-info-fallback-title': undefined, // 'Untitled'
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.crop-changed': undefined, // 'Crop changed'
  /** Image diff: Text shown if the previous image asset was deleted (shouldn't theoretically happen) */
  'changes.image.deleted': undefined, // 'Image deleted'
  /** Image diff: Text shown if the image failed to be loaded when previewing it */
  'changes.image.error-loading-image': undefined, // 'Error loading image'
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.hotspot-changed': undefined, // 'Hotspot changed'
  /** Image diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.image.meta-info-fallback-title': undefined, // 'Untitled'
  /** Image diff: Text shown if no asset has been set for the field (but has metadata changes) */
  'changes.image.no-asset-set': undefined, // 'Image not set'
  /** Image diff: Text shown when the from/to state has/had no image */
  'changes.image.no-image-placeholder': undefined, // '(no image)'
  /** Label for the "from" value in the change inspector */
  'changes.inspector.from-label': undefined, // 'From'
  /** Label for the "meta" (field path, action etc) information in the change inspector */
  'changes.inspector.meta-label': undefined, // 'Meta'
  /** Label for the "to" value in the change inspector */
  'changes.inspector.to-label': undefined, // 'To'
  /** Loading author of change in the differences tooltip in the review changes pane */
  'changes.loading-author': undefined, // 'Loading…'
  /** Loading changes in Review Changes Pane */
  'changes.loading-changes': undefined, // 'Loading changes…'
  /** No Changes description in the Review Changes pane */
  'changes.no-changes-description': undefined, // 'Edit the document or select an older version in the timeline to see a list of changes appear in this panel.'
  /** No Changes title in the Review Changes pane */
  'changes.no-changes-title': undefined, // 'There are no changes'
  /* Label for the tooltip that shows when an action is not selectable*/
  'changes.not-selectable': undefined, // 'It is not possible to select this event'
  /** Portable Text diff: An annotation was added */
  'changes.portable-text.annotation_added': undefined, // 'Added annotation'
  /** Portable Text diff: An annotation was changed */
  'changes.portable-text.annotation_changed': undefined, // 'Changed annotation'
  /** Portable Text diff: An annotation was removed */
  'changes.portable-text.annotation_removed': undefined, // 'Removed annotation'
  /** Portable Text diff: An annotation was left unchanged */
  'changes.portable-text.annotation_unchanged': undefined, // 'Unchanged annotation'
  /** Portable Text diff: A block changed from one style to another (eg `normal` to `h1` or similar) */
  'changes.portable-text.block-style-changed': undefined, // 'Changed block style from "{{fromStyle}}" to "{{toStyle}}"'
  /** Portable Text diff: Change formatting of text (setting/unsetting marks, eg bold/italic etc) */
  'changes.portable-text.changed-formatting': undefined, // 'Changed formatting'
  /** Portable Text diff: An empty inline object is part of a change */
  'changes.portable-text.empty-inline-object': undefined, // 'Empty {{inlineObjectType}}'
  /** Portable Text diff: An empty object is the result of adding/removing an annotation */
  'changes.portable-text.empty-object-annotation': undefined, // 'Empty {{annotationType}}'
  /** Portable Text diff: Added a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_added': undefined, // 'Added empty text'
  /** Portable Text diff: Changed a block that contained no text (eg empty block) */
  'changes.portable-text.empty-text_changed': undefined, // 'Changed empty text'
  /** Portable Text diff: Removed a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_removed': undefined, // 'Removed empty text'
  /** Portable Text diff: An inline object was added */
  'changes.portable-text.inline-object_added': undefined, // 'Added inline object'
  /** Portable Text diff: An inline object was changed */
  'changes.portable-text.inline-object_changed': undefined, // 'Changed inline object'
  /** Portable Text diff: An inline object was removed */
  'changes.portable-text.inline-object_removed': undefined, // 'Removed inline object'
  /** Portable Text diff: An inline object was left unchanged */
  'changes.portable-text.inline-object_unchanged': undefined, // 'Unchanged inline object'
  /** Portable Text diff: Added a chunk of text */
  'changes.portable-text.text_added': undefined, // 'Added text'
  /** Portable Text diff: Removed a chunk of text */
  'changes.portable-text.text_removed': undefined, // 'Removed text'
  /** Portable Text diff: Annotation has an unknown schema type */
  'changes.portable-text.unknown-annotation-schema-type': undefined, // 'Unknown schema type'
  /** Portable Text diff: Inline object has an unknown schema type */
  'changes.portable-text.unknown-inline-object-schema-type': undefined, // 'Unknown schema type'
  /** Label for when the action of the change was a removal, eg a field was cleared, an array item was removed, an asset was deselected or similar */
  'changes.removed-label': undefined, // 'Removed'
  /** Title for the Review Changes pane */
  'changes.title': undefined, // 'History'
  /**The title that will be shown in the badge inside the events when the item is a draft */
  'changes.versions.draft': undefined, // 'Draft'

  /** --- Common components --- */
  /** Tooltip text for context menu buttons */
  'common.context-menu-button.tooltip': undefined, // 'Show more'
  /** Default text for dialog cancel button */
  'common.dialog.cancel-button.text': undefined, // 'Cancel'
  /** Default text for dialog confirm button */
  'common.dialog.confirm-button.text': undefined, // 'Confirm'
  /** Default text in shared loader text / spinner lockup */
  'common.loading': undefined, // 'Loading'

  /** --- Configuration issues --- */
  /** Default label text on configuration issues button */
  'configuration-issues.button.label': undefined, // 'Configuration issues'
  /** Tooltip displayed on configuration issues button */
  'configuration-issues.button.tooltip': undefined, // 'Found configuration issues'

  /** The fallback title for an ordering menu item if no localized titles are provided. */
  'default-menu-item.fallback-title': undefined, // 'Sort by {{title}}'

  /** Title for the default ordering/SortOrder if no orderings are provided and the caption field is found */
  'default-orderings.caption': undefined, // 'Sort by Caption'
  /** Title for the default ordering/SortOrder if no orderings are provided and the description field is found */
  'default-orderings.description': undefined, // 'Sort by Description'
  /** Title for the default ordering/SortOrder if no orderings are provided and the header field is found */
  'default-orderings.header': undefined, // 'Sort by Header'
  /** Title for the default ordering/SortOrder if no orderings are provided and the heading field is found */
  'default-orderings.heading': undefined, // 'Sort by Heading'
  /** Title for the default ordering/SortOrder if no orderings are provided and the label field is found */
  'default-orderings.label': undefined, // 'Sort by Label'
  /** Title for the default ordering/SortOrder if no orderings are provided and the name field is found */
  'default-orderings.name': undefined, // 'Sort by Name'
  /** Title for the default ordering/SortOrder if no orderings are provided and the title field is found */
  'default-orderings.title': undefined, // 'Sort by Title'

  /** Label to show in the document footer indicating the creation date of the document */
  'document-status.created': undefined, // 'Created {{date}}'
  /** Label to show in the document status indicating the date of the status */
  'document-status.date': undefined, // '{{date}}'
  /** Label to show in the document footer indicating the last edited date of the document */
  'document-status.edited': undefined, // 'Edited {{date}}'
  /** Label to show in the document footer indicating the document is not published*/
  'document-status.not-published': undefined, // 'Not published'
  /** Label to show in the document footer indicating the published date of the document */
  'document-status.published': undefined, // 'Published {{date}}'
  /** Label to show in the document footer indicating the revision from date of the document */
  'document-status.revision-from': undefined, // 'Revision from <em>{{date}}</em>'

  /** Label to indicate that a document type was not found */
  'document.type.not-found': undefined, // 'Document type "{{type}}" not found'

  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.duplicate-keys-alert.details.additional-description': undefined, // 'The value of the <code>_key</code> property must be a unique string.'
  /** This usually happens when items are created using an API client, and the <code>_key</code> property of each elements has been generated non-uniquely. */
  'form.error.duplicate-keys-alert.details.description': undefined, // 'This usually happens when items are created using an API client, and the <code>_key</code> property of each elements has been generated non-uniquely.'
  /** Developer info */
  'form.error.duplicate-keys-alert.details.title': undefined, // 'Developer info'
  /** Generate unique keys */
  'form.error.duplicate-keys-alert.generate-button.text': undefined, // 'Generate unique keys'
  /** Several items in this list share the same identifier (key). Every item must have an unique identifier. */
  'form.error.duplicate-keys-alert.summary': undefined, // 'Several items in this list share the same identifier (key). Every item must have an unique identifier.'
  /** Non-unique keys */
  'form.error.duplicate-keys-alert.title': undefined, // 'Non-unique keys'
  /** Error text shown when a field with a given name cannot be found in the schema or is conditionally hidden but explicitly told to render  */
  'form.error.field-not-found': undefined, // 'Field "{{fieldName}}" not found among members – verify that it is defined in the schema and that it has not been conditionally hidden.'
  /** Add missing keys */
  'form.error.missing-keys-alert.add-button.text': undefined, // 'Add missing keys'
  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.missing-keys-alert.details.additional-description': undefined, // 'The value of the <code>_key</code> property must be a unique string.'
  /** This usually happens when items are created using an API client, and the <code>_key</code> property has not been included. */
  'form.error.missing-keys-alert.details.description': undefined, // 'This usually happens when items are created using an API client, and the <code>_key</code> property has not been included.'
  /** Developer info */
  'form.error.missing-keys-alert.details.title': undefined, // 'Developer info'
  /** Some items in the list are missing their keys. This must be fixed in order to edit the list. */
  'form.error.missing-keys-alert.summary': undefined, // 'Some items in the list are missing their keys. This must be fixed in order to edit the list.'
  /** Missing keys */
  'form.error.missing-keys-alert.title': undefined, // 'Missing keys'
  /** This usually happens when items are created using an API client, or when a custom input component has added invalid data to the list. */
  'form.error.mixed-array-alert.details.description': undefined, // 'This usually happens when items are created using an API client, or when a custom input component has added invalid data to the list.'
  /** Developer info */
  'form.error.mixed-array-alert.details.title': undefined, // 'Developer info'
  /**  Remove non-object values */
  'form.error.mixed-array-alert.remove-button.text': undefined, // 'Remove non-object values'
  /** Some items in this list are not objects. This must be fixed in order to edit the list. */
  'form.error.mixed-array-alert.summary': undefined, // 'Some items in this list are not objects. This must be fixed in order to edit the list.'
  /** Invalid list values */
  'form.error.mixed-array-alert.title': undefined, // 'Invalid list values'
  /** Error text shown when form is unable to find an array item at a given indexed path */
  'form.error.no-array-item-at-index': undefined, // 'No array item at index <code>{{index}}</code> found at path <code>{{path}}</code>'
  /** Error text shown when form is unable to find an array item at a given keyed path */
  'form.error.no-array-item-at-key': undefined, // 'No array item with `_key` <code>"{{key}}"</code> found at path <code>{{path}}</code>'
  /** The title above the error call stack output related to the crash */
  'form.error.unhandled-runtime-error.call-stack.title': undefined, // 'Call Stack:'
  /** The title above the error component stack provided by React's underlying ErrorBoundary component */
  'form.error.unhandled-runtime-error.component-stack.title': undefined, // 'Component Stack:'
  /** The error message for the unhandled error that crashed the Input component during render */
  'form.error.unhandled-runtime-error.error-message': undefined, // 'Error: {{message}}'
  /** The title for the error card rendered inside a field in place of a crashing input */
  'form.error.unhandled-runtime-error.title': undefined, // 'Unhandled Runtime Error'
  /** Form field deprecated label */
  'form.field.deprecated-label': undefined, // 'deprecated'
  /** Fallback title shown above field if it has no defined title */
  'form.field.untitled-field-label': undefined, // 'Untitled'
  /** The title of the reconnecting toast */
  'form.reconnecting.toast.title': undefined, // 'Connection lost. Reconnecting…'
  /** Accessibility label for the icon that indicates the field has a validation error */
  'form.validation.has-error-aria-label': undefined, // 'Has error'
  /** Accessibility label for the icon that indicates the field has validation information */
  'form.validation.has-info-aria-label': undefined, // 'Has information'
  /** Accessibility label for the icon that indicates the field has a validation warning */
  'form.validation.has-warning-aria-label': undefined, // 'Has warning'
  /** Text shown when summarizing validation information, when the field has one or more errors */
  'form.validation.summary.errors-count_one': undefined, // '{{count}} error'
  'form.validation.summary.errors-count_other': undefined, // '{{count}} errors'
  /** Text shown when summarizing validation information, when the field has one or more warnings */
  'form.validation.summary.warnings-count_one': undefined, // '{{count}} warning'
  'form.validation.summary.warnings-count_other': undefined, // '{{count}} warnings'

  /** Tooltip for free trial navbar button indicating remaining days */
  'free-trial.tooltip.days-count_one': undefined, // '{{count}} day left in trial'
  'free-trial.tooltip.days-count_other': undefined, // '{{count}} days left in trial'
  /** Tooltip for free trial navbar button, once trial has ended */
  'free-trial.tooltip.trial-finished': undefined, // 'Upgrade your project'

  /**
   * Label for "contact sales" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.contact-sales': undefined, // 'Contact sales'
  /**
   * Label for "help and support" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.help-and-support': undefined, // 'Help and support'
  /**
   * Label for "join our community" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.join-our-community': undefined, // 'Join our community'
  /** Information for what the latest sanity version is */
  'help-resources.latest-sanity-version': undefined, // 'Latest version is {{latestVersion}}'
  /** Information for what studio version the current studio is running */
  'help-resources.studio-version': undefined, // 'Sanity Studio version {{studioVersion}}'
  /** Title for help and resources menus */
  'help-resources.title': undefined, // 'Help and resources'

  /** Text for button to cancel an ongoing upload */
  'input.files.common.cancel-upload': undefined, // 'Cancel'
  /** Text for menuitem upload button default asset source */
  'input.files.common.upload-placeholder.file-input-button.default-source.badge': undefined, // 'Default'
  /** Text for file input button in upload placeholder */
  'input.files.common.upload-placeholder.file-input-button.text': undefined, // 'Upload'
  /** Uploading <FileName/> */
  'input.files.common.upload-progress': undefined, // 'Uploading <FileName/>'
  /** The referenced document cannot be opened, because the URL failed to be resolved */
  'input.reference.document-cannot-be-opened.failed-to-resolve-url': undefined, // 'This document cannot be opened (unable to resolve URL to Studio)'

  /** Label for adding item after a specific array item */
  'inputs.array.action.add-after': undefined, // 'Add item after'
  /** Label for adding item before a specific array item */
  'inputs.array.action.add-before': undefined, // 'Add item before'
  /** Label for adding array item action when the schema allows for only one schema type */
  'inputs.array.action.add-item': undefined, // 'Add item'
  /**
   * Label for adding one array item action when the schema allows for multiple schema types,
   * eg. will prompt the user to select a type once triggered
   */
  'inputs.array.action.add-item-select-type': undefined, // 'Add item...'
  /** Label for copying an array item  */
  'inputs.array.action.copy': undefined, // 'Copy'
  /** Array drag handle button tooltip */
  'inputs.array.action.drag.tooltip': undefined, // 'Drag to re-order'
  /** Label for duplicating an array item  */
  'inputs.array.action.duplicate': undefined, // 'Duplicate'
  /** Label for editing the item of a specific type, eg "Edit Person" */
  'inputs.array.action.edit': undefined, // 'Edit {{itemTypeTitle}}'
  /** Label for removing an array item action  */
  'inputs.array.action.remove': undefined, // 'Remove'
  /** Label for removing action when an array item has an error  */
  'inputs.array.action.remove-invalid-item': undefined, // 'Remove'
  /** Label for viewing the item of a specific type, eg "View Person" */
  'inputs.array.action.view': undefined, // 'View {{itemTypeTitle}}'
  /** Error description for the array item tooltip that explains that the current item can still be moved or deleted but not edited since the schema definition is not found */
  'inputs.array.error.can-delete-but-no-edit-description': undefined, // 'You can still move or delete this item, but it cannot be edited since the schema definition for its type is nowhere to be found.'
  /** Error label for toast when array could not resolve the initial value */
  'inputs.array.error.cannot-resolve-initial-value-title': undefined, // 'Unable to resolve initial value for type: {{schemaTypeTitle}}: {{errorMessage}}.'
  /** Error label for toast when trying to upload one array item of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_one': undefined, // 'The following item can\'t be uploaded because there\'s no known conversion from content type to array item:'
  /** Error label for toast when trying to upload multiple array items of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_other': undefined, // 'The following items can\'t be uploaded because there\'s no known conversion from content types to array item:'
  /** Error description for the array item tooltip that explains that the current type item is not valid for the list  */
  'inputs.array.error.current-schema-not-declare-description': undefined, // 'The current schema does not declare items of type <code>{{typeName}}</code> as valid for this list. This could mean that the type has been removed as a valid item type, or that someone else has added it to their own local schema that is not yet deployed.'
  /** Error description to show how the item is being represented in the json format */
  'inputs.array.error.json-representation-description': undefined, // 'JSON representation of this item:'
  /** Error description for the array item tooltip that explains what the error means with more context */
  'inputs.array.error.type-is-incompatible-prompt': undefined, // 'Item of type <code>{{typeName}}</code> not valid for this list'
  /** Error title for when an item type within an array input is incompatible, used in the tooltip */
  'inputs.array.error.type-is-incompatible-title': undefined, // 'Why is this happening?'
  /** Error label for unexpected errors in the Array Input */
  'inputs.array.error.unexpected-error': undefined, // 'Unexpected Error: {{error}}'
  /** Label for the array insert menu all items filter  */
  'inputs.array.insert-menu.filter.all-items': undefined, // 'All'
  /** Label for when the array insert menu search shows no items */
  'inputs.array.insert-menu.search.no-results': undefined, // 'No items found'
  /** Placeholder for the array insert menu search field */
  'inputs.array.insert-menu.search.placeholder': undefined, // 'Search'
  /** Tooltip for the array insert menu grid view toggle */
  'inputs.array.insert-menu.toggle-grid-view.tooltip': undefined, // 'Toggle grid view'
  /** Tooltip for the array insert menu list view toggle */
  'inputs.array.insert-menu.toggle-list-view.tooltip': undefined, // 'Toggle list view'
  /** Label for when the array input doesn't have any items */
  'inputs.array.no-items-label': undefined, // 'No items'
  /** Label for read only array fields */
  'inputs.array.read-only-label': undefined, // 'This field is read-only'
  /** Label for when the array input is resolving the initial value for the item */
  'inputs.array.resolving-initial-value': undefined, // 'Resolving initial value…'
  /** Tooltip content when boolean input is disabled */
  'inputs.boolean.disabled': undefined, // 'Disabled'
  /** Warning label when selected datetime is in the past */
  'inputs.dateTime.past-date-warning': undefined, // 'Select a date in the future.'
  /** Placeholder value for datetime input */
  'inputs.datetime.placeholder': undefined, // 'e.g. {{example}}'
  /** Acessibility label for button to open file options menu */
  'inputs.file.actions-menu.file-options.aria-label': undefined, // 'Open file options menu'
  /** Browse */
  'inputs.file.browse-button.text': undefined, // 'Select'
  /** Select file */
  'inputs.file.dialog.title': undefined, // 'Select file'
  /** Unknown member kind: `{{kind}}` */
  'inputs.file.error.unknown-member-kind': undefined, // 'Unknown member kind: {{kind}}'
  /** The value of this field is not a valid file. Resetting this field will let you choose a new file. */
  'inputs.file.invalid-file-warning.description': undefined, // 'The value of this field is not a valid file. Resetting this field will let you choose a new file.'
  /** Reset value */
  'inputs.file.invalid-file-warning.reset-button.text': undefined, // 'Reset value'
  /** Invalid file value */
  'inputs.file.invalid-file-warning.title': undefined, // 'Invalid file value'
  /** Select */
  'inputs.file.multi-browse-button.text': undefined, // 'Select'
  /** The upload could not be completed at this time. */
  'inputs.file.upload-failed.description': undefined, // 'The upload could not be completed at this time.'
  /** Upload failed */
  'inputs.file.upload-failed.title': undefined, // 'Upload failed'
  /** Clear field */
  'inputs.files.common.actions-menu.clear-field.label': undefined, // 'Clear field'
  /** Copy URL */
  'inputs.files.common.actions-menu.copy-url.label': undefined, // 'Copy URL'
  /** Download */
  'inputs.files.common.actions-menu.download.label': undefined, // 'Download'
  /** The URL is copied to the clipboard */
  'inputs.files.common.actions-menu.notification.url-copied': undefined, // 'The URL is copied to the clipboard'
  /** Replace */
  'inputs.files.common.actions-menu.replace.label': undefined, // 'Replace'
  /** Upload */
  'inputs.files.common.actions-menu.upload.label': undefined, // 'Upload'
  /** Drop to upload */
  'inputs.files.common.drop-message.drop-to-upload': undefined, // 'Drop to upload'
  /** Drop to upload `{{count}}` file */
  'inputs.files.common.drop-message.drop-to-upload-multi_one': undefined, // 'Drop to upload {{count}} file'
  /** Drop to upload `{{count}}` files */
  'inputs.files.common.drop-message.drop-to-upload-multi_other': undefined, // 'Drop to upload {{count}} files'
  /** Can't upload this file here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_one': undefined, // 'Can\'t upload this file here'
  /** Can't upload any of these files here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_other': undefined, // 'Can\'t upload any of these files here'
  /** `{{count}}` file can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_one': undefined, // '{{count}} file can\'t be uploaded here'
  /** `{{count}}` files can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_other': undefined, // '{{count}} files can\'t be uploaded here'
  /** Cannot upload `{{count}}` files */
  'inputs.files.common.placeholder.cannot-upload-some-files_one': undefined, // 'Cannot upload file'
  'inputs.files.common.placeholder.cannot-upload-some-files_other': undefined, // 'Cannot upload {{count}} files'
  /** Drag or paste type here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_file': undefined, // 'Drag or paste file here'
  /** Drag or paste image here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_image': undefined, // 'Drag or paste image here'
  /** Drop to upload file */
  'inputs.files.common.placeholder.drop-to-upload_file': undefined, // 'Drop to upload file'
  /** Drop to upload image */
  'inputs.files.common.placeholder.drop-to-upload_image': undefined, // 'Drop to upload image'
  /** Read only */
  'inputs.files.common.placeholder.read-only': undefined, // 'Read only'
  /** Select asset source destination for files to upload */
  'inputs.files.common.placeholder.select-asset-source-upload-destination': undefined, // 'Upload files to:'
  /** Can't upload files here */
  'inputs.files.common.placeholder.upload-not-supported': undefined, // 'Can\'t upload files here'
  /** Clear upload */
  'inputs.files.common.stale-upload-warning.clear': undefined, // 'Clear upload'
  /** An upload has made no progress for at least `{{staleThresholdMinutes}}` minutes and likely got interrupted. You can safely clear the incomplete upload and try uploading again. */
  'inputs.files.common.stale-upload-warning.description': undefined, // 'An upload has made no progress for at least {{staleThresholdMinutes}} minutes and likely got interrupted. You can safely clear the incomplete upload and try uploading again.'
  /** Incomplete upload */
  'inputs.files.common.stale-upload-warning.title': undefined, // 'Incomplete upload'
  /** Tooltip text for action to crop image */
  'inputs.image.actions-menu.crop-image-tooltip': undefined, // 'Crop image'
  /** Accessibility label for button to open image edit dialog */
  'inputs.image.actions-menu.edit-details.aria-label': undefined, // 'Open image edit dialog'
  /** Accessibility label for button to open image options menu */
  'inputs.image.actions-menu.options.aria-label': undefined, // 'Open image options menu'
  /** Select */
  'inputs.image.browse-menu.text': undefined, // 'Select'
  /** Cannot upload this file here */
  'inputs.image.drag-overlay.cannot-upload-here': undefined, // 'Cannot upload this file here'
  /** Drop image to upload */
  'inputs.image.drag-overlay.drop-to-upload-image': undefined, // 'Drop image to upload'
  /** This field is read only */
  'inputs.image.drag-overlay.this-field-is-read-only': undefined, // 'This field is read only'
  /** Unknown member kind: `{{kind}}` */
  'inputs.image.error.unknown-member-kind': undefined, // 'Unknown member kind: {{kind}}'
  /** Edit hotspot and crop */
  'inputs.image.hotspot-dialog.title': undefined, // 'Edit hotspot and crop'
  /** The value of this field is not a valid image. Resetting this field will let you choose a new image. */
  'inputs.image.invalid-image-warning.description': undefined, // 'The value of this field is not a valid image. Resetting this field will let you choose a new image.'
  /** Reset value */
  'inputs.image.invalid-image-warning.reset-button.text': undefined, // 'Reset value'
  /** Invalid image value */
  'inputs.image.invalid-image-warning.title': undefined, // 'Invalid image value'
  /** Preview of uploaded image */
  'inputs.image.preview-uploaded-image': undefined, // 'Preview of uploaded image'
  /** The upload could not be completed at this time. */
  'inputs.image.upload-error.description': undefined, // 'The upload could not be completed at this time.'
  /** Upload failed */
  'inputs.image.upload-error.title': undefined, // 'Upload failed'
  /** Adjust the rectangle to crop image. Adjust the circle to specify the area that should always be visible. */
  'inputs.imagetool.description': undefined, // 'Adjust the rectangle to crop image. Adjust the circle to specify the area that should always be visible.'
  /** Error: `{{errorMessage}}` */
  'inputs.imagetool.load-error': undefined, // 'Error: {{errorMessage}}'
  /** Hotspot & Crop */
  'inputs.imagetool.title': undefined, // 'Hotspot & Crop'
  /** Warnings displayed to developers when using the crop/hotspot tool on vector images, notifying them that crops/hotspot are not respected when serving the image in vector format. For the crop/hotspot to apply, images must be served in a raster format such as JPG or PNG, by appending eg `fm=jpg` to the image url, or calling `format('jpg')` if using `@sanity/image-url` */
  'inputs.imagetool.vector-warning.developer-info': undefined, // 'The Asset Pipeline does not support hotspot and crop for vector formats. To enable hotspot & crop, output this image to any of the supported raster formats. For example: <code>fm=jpg</code> to the <ImageUrlDocumentationLink>image URL</ImageUrlDocumentationLink> or call <code>.format(\'png\')</code> with <ImageUrlPackageDocumentationLink>@sanity/image-url</ImageUrlPackageDocumentationLink>.'
  /** See developer info */
  'inputs.imagetool.vector-warning.expand-developer-info': undefined, // 'See developer info'
  /** Gotcha: Serving vector images with hotspot and crop from the Sanity Image API */
  'inputs.imagetool.vector-warning.title': undefined, // 'Warning: Hotspot and crop might not be applied to this image where it\'s presented.'
  /** Convert to `{{targetType}}` */
  'inputs.invalid-value.convert-button.text': undefined, // 'Convert to {{targetType}}'
  /** The current value (<code>`{{actualType}}`</code>) */
  'inputs.invalid-value.current-type': undefined, // 'The current value (<code>{{actualType}}</code>)'
  /** The property value is stored as a value type that does not match the expected type. */
  'inputs.invalid-value.description': undefined, // 'The property value is stored as a value type that does not match the expected type.'
  /** The value of this property must be of type <code>`{{validType}}`</code> according to the schema. */
  'inputs.invalid-value.details.description': undefined, // 'The value of this property must be of type <code>{{validType}}</code> according to the schema.'
  /** Only the following types are valid here according to schema: */
  'inputs.invalid-value.details.multi-type-description': undefined, // 'Only the following types are valid here according to schema:'
  /** Mismatching value types typically occur when the schema has recently been changed. */
  'inputs.invalid-value.details.possible-reason': undefined, // 'Mismatching value types typically occur when the schema has recently been changed.'
  /** Developer info */
  'inputs.invalid-value.details.title': undefined, // 'Developer info'
  /** -- Invalid Value Input -- */
  /** Reset value */
  'inputs.invalid-value.reset-button.text': undefined, // 'Reset value'
  /** Invalid property value */
  'inputs.invalid-value.title': undefined, // 'Invalid property value'
  /** Title for the "All fields" field group */
  'inputs.object.field-group-tabs.all-fields-title': undefined, // 'All fields'
  /** Aria label for the "Field groups" select control on smaller screens */
  'inputs.object.field-group-tabs.aria-label': undefined, // 'Field groups'
  /** Read-only field description */
  'inputs.object.unknown-fields.read-only.description': undefined, // 'This field is <strong>read only</strong> according to the document’s schema and cannot be unset. If you want to be able to unset this in Studio, make sure you remove the <code>readOnly</code> field from the enclosing type in the schema.'
  /** Remove field */
  'inputs.object.unknown-fields.remove-field-button.text': undefined, // 'Remove field'
  /** Encountered `{{count}}` fields that are not defined in the schema. */
  'inputs.object.unknown-fields.warning.description_one': undefined, // 'Encountered a field that is not defined in the schema.'
  'inputs.object.unknown-fields.warning.description_other': undefined, // 'Encountered {{count}} fields that are not defined in the schema.'
  /** Detailed description of unknown field warning */
  'inputs.object.unknown-fields.warning.details.description_one': undefined, // 'This field is not defined in the schema, which could mean that the field definition has been removed or that someone else has added it to their own local project and have not deployed their changes yet.'
  'inputs.object.unknown-fields.warning.details.description_other': undefined, // 'These fields are not defined in the document’s schema, which could mean that the field definitions have been removed or that someone else has added them to their own local project and have not deployed their changes yet.'
  /** Developer info */
  'inputs.object.unknown-fields.warning.details.title': undefined, // 'Developer info'
  /** Unknown field found */
  'inputs.object.unknown-fields.warning.title_one': undefined, // 'Unknown field found'
  'inputs.object.unknown-fields.warning.title_other': undefined, // 'Unknown fields found'
  /** Collapse the editor to save screen space  */
  'inputs.portable-text.action.collapse-editor': undefined, // 'Collapse editor'
  /** Aria label for action to edit an existing annotation */
  'inputs.portable-text.action.edit-annotation-aria-label': undefined, // 'Edit annotation'
  /** Expand the editor to give more editing space */
  'inputs.portable-text.action.expand-editor': undefined, // 'Expand editor'
  /** Label label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block': undefined, // 'Insert {{typeName}}'
  /** Accessibility label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block-aria-label': undefined, // 'Insert {{typeName}} (block)'
  /** Label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object': undefined, // 'Insert {{typeName}}'
  /** Accessibility label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object-aria-label': undefined, // 'Insert {{typeName}} (inline)'
  /** Aria label for action to remove an annotation */
  'inputs.portable-text.action.remove-annotation-aria-label': undefined, // 'Remove annotation'
  /** Label for activate on focus with context of click and not focused */
  'inputs.portable-text.activate-on-focus-message_click': undefined, // 'Click to activate'
  /** Label for activate on focus with context of click and focused */
  'inputs.portable-text.activate-on-focus-message_click-focused': undefined, // 'Click or press space to activate'
  /** Label for activate on focus with context of tap and not focused */
  'inputs.portable-text.activate-on-focus-message_tap': undefined, // 'Tap to activate'
  /** Aria label for the annotation object */
  'inputs.portable-text.annotation-aria-label': undefined, // 'Annotation object'
  /** Title for dialog that allows editing an annotation */
  'inputs.portable-text.annotation-editor.title': undefined, // 'Edit {{schemaType}}'
  /** Title of the default "link" annotation */
  'inputs.portable-text.annotation.link': undefined, // 'Link'
  /** Aria label for the block object */
  'inputs.portable-text.block.aria-label': undefined, // 'Block object'
  /** Label for action to edit a block item, in the case where it is editable */
  'inputs.portable-text.block.edit': undefined, // 'Edit'
  /** Accessibility label for the button that opens the actions menu on blocks */
  'inputs.portable-text.block.open-menu-aria-label': undefined, // 'Open menu'
  /** Label for action to open a reference, in the case of block-level reference types */
  'inputs.portable-text.block.open-reference': undefined, // 'Open reference'
  /** Label for action to remove a block item */
  'inputs.portable-text.block.remove': undefined, // 'Remove'
  /** Label for action to view a block item, in the case where it is read-only and thus cannot be edited */
  'inputs.portable-text.block.view': undefined, // 'View'
  /** Title of the "code" decorator */
  'inputs.portable-text.decorator.code': undefined, // 'Code'
  /** Title of the "em" (emphasis) decorator */
  'inputs.portable-text.decorator.emphasis': undefined, // 'Italic'
  /** Title of the "strike-through" decorator */
  'inputs.portable-text.decorator.strike-through': undefined, // 'Strike'
  /** Title of the "strong" decorator */
  'inputs.portable-text.decorator.strong': undefined, // 'Strong'
  /** Title of the "underline" decorator */
  'inputs.portable-text.decorator.underline': undefined, // 'Underline'
  /** Placeholder text for when the editor is empty */
  'inputs.portable-text.empty-placeholder': undefined, // 'Empty'
  /** Aria label for the block object */
  'inputs.portable-text.inline-block.aria-label': undefined, // 'Inline object'
  /** Label for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit': undefined, // 'Edit object'
  /** Aria label for icon for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit-aria-label': undefined, // 'Edit object'
  /** Label for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove': undefined, // 'Remove object'
  /** Aria label for icon for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove-aria-label': undefined, // 'Remove object'
  /** Disclaimer text shown on invalid Portable Text value, when an action is available to unblock the user, but it is not guaranteed to be safe */
  'inputs.portable-text.invalid-value.action-disclaimer': undefined, // 'NOTE: It’s generally safe to perform the action above, but if you are in doubt, get in touch with those responsible for configuring your studio.'
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.action': undefined, // 'Remove the object'
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.description': undefined, // 'Child with key {{childKey}} of block with key <code>{{key}}</code> is of type <code>{{childType}}</code>, which is not allowed by the schema.'
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.action': undefined, // 'Remove the block'
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.description': undefined, // 'Block with key <code>{{key}}</code> is of type <code>{{typeName}}</code>, which is not allowed by the schema.'
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.action': undefined, // 'Insert empty text span'
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.description': undefined, // 'Text block with key <code>{{key}}</code> has no text spans.'
  /** Label for the button to ignore invalid values in the Portable Text editor */
  'inputs.portable-text.invalid-value.ignore-button.text': undefined, // 'Ignore'
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.action': undefined, // 'Use type <code>{{expectedTypeName}}</code>'
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.description': undefined, // 'Block with key <code>{{key}}</code> has an invalid type name. According to the schema, it should be <code>{{expectedTypeName}}</code>.'
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.action': undefined, // 'Set empty text value'
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.description': undefined, // 'Span with key {{childKey}} of block with key <code>{{key}}</code> has a missing or invalid <code>text</code> property.'
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.action': undefined, // 'Use type <code>{{expectedTypeName}}</code>'
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.description': undefined, // 'Block with key <code>{{key}}</code> is missing a type name. According to the schema, it should be <code>{{expectedTypeName}}</code>.'
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.action': undefined, // 'Assign random key'
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.description': undefined, // 'Child at index <code>{{index}}</code> of block with key <code>{{key}}</code> is missing <code>_key</code> property.'
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.action': undefined, // 'Remove the object'
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.description': undefined, // 'Child with key {{childKey}} of block with key <code>{{key}}</code> is missing <code>_type</code> property.'
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.action': undefined, // 'Assign random key'
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.description': undefined, // 'Block at index <code>{{index}}</code> is missing required <code>_key</code> property.'
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.action': undefined, // 'Remove the block'
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.description': undefined, // 'Text block with key <code>{{key}}</code> has an invalid or missing `children` property.'
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.action': undefined, // 'Add property'
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.description': undefined, // 'Text block with key <code>{{key}}</code> has an invalid or missing `markDefs` property.'
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.action': undefined, // 'Remove the block'
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.description': undefined, // 'Block with key <code>{{key}}</code> is missing a type name.'
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.action': undefined, // 'Remove the item'
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.description': undefined, // 'Child at index <code>{{index}}</code> of block with key <code>{{key}}</code> is not an object.'
  /** Action presented when the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.action': undefined, // 'Unset the value'
  /** Text explaining that the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.description': undefined, // 'Value must be an array of Portable Text blocks, or undefined.'
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.action': undefined, // 'Remove item'
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.description': undefined, // 'Item at <code>{{index}}</code> is not an object,.'
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.action': undefined, // 'Remove disallowed marks'
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.description': undefined, // 'Text block with key <code>{{key}}</code> contains marks <code>({{orphanedMarks, list}})</code> that are not allowed by the schema.'
  /** Title for the alert indicating that the Portable Text field has an invalid value */
  'inputs.portable-text.invalid-value.title': undefined, // 'Invalid Portable Text value'
  /** Title of "bulleted" list type */
  'inputs.portable-text.list-type.bullet': undefined, // 'Bulleted list'
  /** Title of numbered list type */
  'inputs.portable-text.list-type.number': undefined, // 'Numbered list'
  /** Title of the "h1" block style */
  'inputs.portable-text.style.h1': undefined, // 'Heading 1'
  /** Title of the "h2" block style */
  'inputs.portable-text.style.h2': undefined, // 'Heading 2'
  /** Title of the "h3" block style */
  'inputs.portable-text.style.h3': undefined, // 'Heading 3'
  /** Title of the "h4" block style */
  'inputs.portable-text.style.h4': undefined, // 'Heading 4'
  /** Title of the "h5" block style */
  'inputs.portable-text.style.h5': undefined, // 'Heading 5'
  /** Title of the "h6" block style */
  'inputs.portable-text.style.h6': undefined, // 'Heading 6'
  /** Title shown when multiple blocks of varying styles is selected */
  'inputs.portable-text.style.multiple': undefined, // 'Multiple'
  /** Title of fallback when no style is given for a block */
  'inputs.portable-text.style.none': undefined, // 'No style'
  /** Title of the "normal" block style */
  'inputs.portable-text.style.normal': undefined, // 'Normal'
  /** Title of the "quote" block style */
  'inputs.portable-text.style.quote': undefined, // 'Quote'
  /** Label for action to clear the current value of the reference field */
  'inputs.reference.action.clear': undefined, // 'Clear'
  /** Label for action to copy the current item (used within arrays) */
  'inputs.reference.action.copy': undefined, // 'Copy'
  /** Label for action to create a new document from the reference input */
  'inputs.reference.action.create-new-document': undefined, // 'Create'
  /** Label for action to create a new document from the reference input, when there are multiple templates or document types to choose from */
  'inputs.reference.action.create-new-document-select': undefined, // 'Create…'
  /** Label for action to duplicate the current item to a new item (used within arrays) */
  'inputs.reference.action.duplicate': undefined, // 'Duplicate'
  /** Label for action that opens the referenced document in a new tab */
  'inputs.reference.action.open-in-new-tab': undefined, // 'Open in new tab'
  /** Label for action to remove the reference from an array */
  'inputs.reference.action.remove': undefined, // 'Remove'
  /** Label for action to replace the current value of the field */
  'inputs.reference.action.replace': undefined, // 'Replace'
  /** Label for action to cancel a previously initiated replace action  */
  'inputs.reference.action.replace-cancel': undefined, // 'Cancel replace'
  /** The cross-dataset reference field currently has a reference, but the feature has been disabled since it was created. This explains what can/cannot be done in its current state. */
  'inputs.reference.cross-dataset.feature-disabled-actions': undefined, // 'You can still clear this field\'s existing reference, but it cannot be changed to a different document as long as the feature is disabled.'
  /** A cross-dataset reference field exists but the feature has been disabled. A <DocumentationLink> component is available. */
  'inputs.reference.cross-dataset.feature-disabled-description': undefined, // 'This feature has been disabled. Read how to enable it in <DocumentationLink>the documentation</DocumentationLink>.'
  /** Title for a warning telling the user that the current project does not have the "cross dataset references" feature */
  'inputs.reference.cross-dataset.feature-unavailable-title': undefined, // 'Unavailable feature: Cross dataset reference'
  /** The cross-dataset reference points to a document with an invalid type  */
  'inputs.reference.cross-dataset.invalid-type': undefined, // 'The referenced document is of invalid type ({{typeName}}) <JsonValue/>'
  /** The referenced document will open in a new tab (due to external studio) */
  'inputs.reference.document-opens-in-new-tab': undefined, // 'This document opens in a new tab'
  /** Error title for when the document is unavailable (for any possible reason) */
  'inputs.reference.error.document-unavailable-title': undefined, // 'Document unavailable'
  /** Error title for when the referenced document failed to be loaded */
  'inputs.reference.error.failed-to-load-document-title': undefined, // 'Failed to load referenced document'
  /** Error title for when the reference search returned a document that is not an allowed type for the field */
  'inputs.reference.error.invalid-search-result-type-title': undefined, // 'Search returned a type that\'s not valid for this reference: "{{returnedType}}"'
  /** Error description for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-description': undefined, // 'Referenced document (<code>{{documentId}}</code>) is of type <code>{{actualType}}</code>. According to the schema, referenced documents can only be of type <AllowedTypes/>.'
  /** Error title for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-title': undefined, // 'Document of invalid type'
  /** Error description for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-description': undefined, // 'The referenced document could not be accessed due to insufficient permissions'
  /** Error title for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-title': undefined, // 'Insufficient permissions'
  /** Error description for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-description': undefined, // 'The referenced document does not exist (ID: <code>{{documentId}}</code>). You can either remove the reference or replace it with another document.'
  /** Error title for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-title': undefined, // 'Not found'
  /** Label for button that clears the reference when it points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document.clear-button-label': undefined, // 'Clear'
  /** Error title for when the search for a reference failed. Note that the message sent by the backend may not be localized. */
  'inputs.reference.error.search-failed-title': undefined, // 'Reference search failed'
  /** Label for when the GDR points to an invalid type  */
  'inputs.reference.global.invalid-type': undefined, // 'The referenced document is of invalid type ({{typeName}})'
  /** Alternative text for the image shown in cross-dataset reference input */
  'inputs.reference.image-preview-alt-text': undefined, // 'Image preview of referenced document'
  /** Description for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-description': undefined, // '<strong>{{referencedDocument}}</strong> is published and this reference should now be finalized.'
  /** Title for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-title': undefined, // 'Finalize reference'
  /** Description for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-description': undefined, // '<strong>{{referencedDocument}}</strong> is published and this reference should now be converted to a strong reference.'
  /** Title for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-title': undefined, // 'Convert to strong reference'
  /** Label for button that triggers the action that strengthen a reference */
  'inputs.reference.incomplete-reference.strengthen-button-label': undefined, // 'Convert to strong reference'
  /** Label for button that triggers a retry attempt for reference metadata  */
  'inputs.reference.metadata-error.retry-button-label': undefined, // 'Retry'
  /** Title for alert shown when reference metadata fails to be loaded */
  'inputs.reference.metadata-error.title': undefined, // 'Unable to load reference metadata'
  /** Message shown when no documents were found that matched the given search string */
  'inputs.reference.no-results-for-query': undefined, // 'No results for <strong>“{{searchTerm}}”</strong>'
  /** Text for tooltip showing when a document was edited, using relative time (eg "how long ago was it edited?") */
  'inputs.reference.preview.edited-at-time': undefined, // 'Edited <RelativeTime/>'
  /** Accessibility label for icon indicating that document does _not_ have any unpublished changes */
  'inputs.reference.preview.has-no-unpublished-changes-aria-label': undefined, // 'No unpublished edits'
  /** Accessibility label for icon indicating that document has unpublished changes */
  'inputs.reference.preview.has-unpublished-changes-aria-label': undefined, // 'Edited'
  /** Accessibility label for icon indicating that document does _not_ have a published version */
  'inputs.reference.preview.is-not-published-aria-label': undefined, // 'Not published'
  /** Accessibility label for icon indicating that document has a published version */
  'inputs.reference.preview.is-published-aria-label': undefined, // 'Published'
  /** Text for tooltip indicating that a document has no unpublished edits */
  'inputs.reference.preview.no-unpublished-edits': undefined, // 'No unpublished edits'
  /** Text for tooltip indicating that a document has not yet been published */
  'inputs.reference.preview.not-published': undefined, // 'Not published'
  /** Text for tooltip showing when a document was published, using relative time (eg "how long ago was it published?") */
  'inputs.reference.preview.published-at-time': undefined, // 'Published <RelativeTime/>'
  /** The referenced document no longer exist and might have been deleted (for weak references) */
  'inputs.reference.referenced-document-does-not-exist': undefined, // 'The referenced document no longer exist and might have been deleted (document ID: <code>{{documentId}}</code>).'
  /** The referenced document could not be displayed to the user because of insufficient permissions */
  'inputs.reference.referenced-document-insufficient-permissions': undefined, // 'The referenced document could not be accessed due to insufficient permissions'
  /** Label for when the reference input is resolving the initial value for an item */
  'inputs.reference.resolving-initial-value': undefined, // 'Resolving initial value…'
  /** Placeholder shown in a reference input with no current value */
  'inputs.reference.search-placeholder': undefined, // 'Type to search'
  /** Explanation of the consequences of leaving the reference as strong instead of weak */
  'inputs.reference.strength-mismatch.is-strong-consquences': undefined, // 'It will not be possible to delete the reference document without first removing this reference or converting it to weak.'
  /** Description for alert shown when a reference is supposed to be weak, but the actual value is strong */
  'inputs.reference.strength-mismatch.is-strong-description': undefined, // 'This reference is <em>strong</em>, but according to the current schema it should be <em>weak</em>.'
  /** Explanation of the consequences of leaving the reference as weak instead of strong */
  'inputs.reference.strength-mismatch.is-weak-consquences': undefined, // 'This makes it possible to delete the referenced document without first deleting this reference, leaving this field referencing a nonexisting document.'
  /** Description for alert shown when a reference is supposed to be strong, but the actual value is weak */
  'inputs.reference.strength-mismatch.is-weak-description': undefined, // 'This reference is <em>weak</em>, but according to the current schema it should be <em>strong</em>.'
  /** Label for button that triggers the action that strengthens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.strengthen-button-label': undefined, // 'Convert to strong reference'
  /** Title for alert shown when a reference is supposed to be weak/strong, but the actual value is the opposite of what it is supposed to be */
  'inputs.reference.strength-mismatch.title': undefined, // 'Reference strength mismatch'
  /** Label for button that triggers the action that weakens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.weaken-button-label': undefined, // 'Convert to weak reference'
  /** Action message for generating the slug */
  'inputs.slug.action.generate': undefined, // 'Generate'
  /** Loading message for when the input is actively generating a slug */
  'inputs.slug.action.generating': undefined, // 'Generating…'
  /** Error message for when the source to generate a slug from is missing */
  'inputs.slug.error.missing-source': undefined, // 'Source is missing. Check source on type {{schemaType}} in schema'
  /** Placeholder for an empty tag input */
  'inputs.tags.placeholder': undefined, // 'Enter tag and press ENTER…'
  /** Placeholder for an empty tag input on touch devices */
  'inputs.tags.placeholder_touch': undefined, // 'Enter tag…'
  /** Convert to `{{targetType}}` */
  'inputs.untyped-value.convert-button.text': undefined, // 'Convert to {{targetType}}'
  /** Encountered an object value without a <code>_type</code> property. */
  'inputs.untyped-value.description': undefined, // 'Encountered an object value without a <code>_type</code> property.'
  /** Either remove the <code>name</code> property of the object declaration, or set <code>_type</code> property on items. */
  'inputs.untyped-value.details.description': undefined, // 'Either remove the <code>name</code> property of the object declaration, or set <code>_type</code> property on items.'
  /** Current value (<code>object</code>): */
  'inputs.untyped-value.details.json-dump-prefix': undefined, // 'Current value (<code>object</code>):'
  /** The following types are valid here according to schema: */
  'inputs.untyped-value.details.multi-type-description': undefined, // 'The following types are valid here according to schema:'
  /** Developer info */
  'inputs.untyped-value.details.title': undefined, // 'Developer info'
  /** Property value missing <code>_type</code> */
  'inputs.untyped-value.title': undefined, // 'Property value missing <code>_type</code>'
  /** Unset value */
  'inputs.untyped-value.unset-item-button.text': undefined, // 'Unset value'

  /** The fallback explanation if no context is provided */
  'insufficient-permissions-message.not-authorized-explanation': undefined, // 'You do not have permission to access this feature.'
  /** The explanation when unable to create any document at all */
  'insufficient-permissions-message.not-authorized-explanation_create-any-document': undefined, // 'You do not have permission to create a document.'
  /** The explanation when unable to create a particular document */
  'insufficient-permissions-message.not-authorized-explanation_create-document': undefined, // 'You do not have permission to create this document.'
  /** The explanation when unable to create a particular type of document */
  'insufficient-permissions-message.not-authorized-explanation_create-document-type': undefined, // 'You do not have permission to create this kind of document.'
  /** The explanation when unable to create a new reference in a document */
  'insufficient-permissions-message.not-authorized-explanation_create-new-reference': undefined, // 'You do not have permission to create a new reference.'
  /** The explanation when unable to delete a particular document */
  'insufficient-permissions-message.not-authorized-explanation_delete-document': undefined, // 'You do not have permission to delete this document.'
  /** The explanation when unable to delete a schedule on scheduled publishing */
  'insufficient-permissions-message.not-authorized-explanation_delete-schedules': undefined, // 'You do not have permission to delete schedules.'
  /** The explanation when unable to discard changes in a particular document */
  'insufficient-permissions-message.not-authorized-explanation_discard-changes': undefined, // 'You do not have permission to discard changes in this document.'
  /** The explanation when unable to duplicate a particular document */
  'insufficient-permissions-message.not-authorized-explanation_duplicate-document': undefined, // 'You do not have permission to duplicate this document.'
  /** The explanation when unable to edit a schedule on scheduled publishing */
  'insufficient-permissions-message.not-authorized-explanation_edit-schedules': undefined, // 'You do not have permission to edit schedules.'
  /** The explanation when unable to execute a schedule on scheduled publishing */
  'insufficient-permissions-message.not-authorized-explanation_execute-schedules': undefined, // 'You do not have permission to execute schedules.'
  /** The explanation when unable to publish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_publish-document': undefined, // 'You do not have permission to publish this document.'
  /** The explanation when unable to unpublish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_unpublish-document': undefined, // 'You do not have permission to unpublish this document.'
  /** Appears after the not-authorized message. Lists the current roles. */
  'insufficient-permissions-message.roles': undefined, // 'Your roles: <Roles/>'
  /** The title for the insufficient permissions message component */
  'insufficient-permissions-message.title': undefined, // 'Insufficient permissions'

  /** Unexpected error: `{{error}}` */
  'member-field-error.unexpected-error': undefined, // 'Unexpected error: {{error}}'

  /** Button label for "Create new document" button */
  'new-document.button': undefined, // 'Create'
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are templates/types available for creation
   */
  'new-document.create-new-document-label': undefined, // 'New document…'
  /** Tooltip message for add document button when the selected perspective is published  */
  'new-document.disabled-published.tooltip': undefined, // 'You cannot create new published documents'
  /** Tooltip message for add document button when the selected perspective is for inactive release */
  'new-document.disabled-release.tooltip': undefined, // 'You cannot add documents to this release'
  /** Placeholder for the "filter" input within the new document menu */
  'new-document.filter-placeholder': undefined, // 'Search document types'
  /** Loading indicator text within the new document menu */
  'new-document.loading': undefined, // 'Loading…'
  /** Accessibility label for the list displaying options in the new document menu */
  'new-document.new-document-aria-label': undefined, // 'New document'
  /** Message for when there are no document type options in the new document menu */
  'new-document.no-document-types-found': undefined, // 'No document types found'
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are no templates/types to create from
   */
  'new-document.no-document-types-label': undefined, // 'No document types'
  /** Message for when no results are found for a specific search query in the new document menu */
  'new-document.no-results': undefined, // 'No results for <strong>{{searchQuery}}</strong>'
  /** Aria label for the button that opens the "Create new document" popover/dialog */
  'new-document.open-dialog-aria-label': undefined, // 'Create new document'
  /** Title for "Create new document" dialog */
  'new-document.title': undefined, // 'Create new document'

  /** Label for button that will make the browser reload when users' studio version is out-of-date */
  'package-version.new-package-available.reload-button': undefined, // 'Push to reload'
  /** Title of the alert for studio users when packages in their studio are out-of-date */
  'package-version.new-package-available.title': undefined, // 'Sanity Studio is ready to update!'

  /** Label for action to invite members to the current studio project */
  'presence.action.manage-members': undefined, // 'Invite members'
  /** Accessibility label for presence menu button */
  'presence.aria-label': undefined, // 'Global presence'
  /** Message description for when no one else is currently present */
  'presence.no-one-else-description': undefined, // 'Invite people to the project to see their online status.'
  /** Message title for when no one else is currently present */
  'presence.no-one-else-title': undefined, // 'No one else is here'
  /** Message for when a user is not in a document (displayed in the global presence menu) */
  'presence.not-in-a-document': undefined, // 'Not in a document'
  /** Tooltip content text for presence menu button */
  'presence.tooltip-content': undefined, // 'Who is here'

  /** Fallback title shown when a preview does not provide a title */
  'preview.default.title-fallback': undefined, // 'Untitled'
  /** Fallback preview value for types that have "no value" (eg null, undefined) */
  'preview.fallback.no-value': undefined, // '(no value)'
  /** Alternative text for image being shown while image is being uploaded, in previews */
  'preview.image.file-is-being-uploaded.alt-text': undefined, // 'The image currently being uploaded'

  /* Relative time, just now */
  'relative-time.just-now': undefined, // 'just now'

  /** Action message to add document to new release */
  'release.action.add-to-new-release': undefined, // 'Add to release'
  /** Action message to add document to release */
  'release.action.add-to-release': undefined, // 'Add to {{title}}'
  /** Action message for when document is already in release  */
  'release.action.already-in-release': undefined, // 'Already in release {{title}}'
  /** Action message for when you click to view all versions you can copy the current document to */
  'release.action.copy-to': undefined, // 'Copy version to'
  /** Action message for creating new releases */
  'release.action.create-new': undefined, // 'New release'
  /** Action message for when document is already in release  */
  'release.action.discard-version': undefined, // 'Discard version'
  /** Description for toast when version discarding failed */
  'release.action.discard-version.failure': undefined, // 'Failed to discard version'
  /** Action message for when a new release is created off an existing version, draft or published document */
  'release.action.new-release': undefined, // 'New Release'
  /** Tooltip message for not having permissions for creating new releases */
  'release.action.permission.error': undefined, // 'You do not have permission to perform this action'
  /** Error message for when a version is set to be unpublished */
  'release.action.unpublish-version.failure': undefined, // 'Failed to set version to be unpublished on release'
  /** Action message for when a version is set to be unpublished successfully */
  'release.action.unpublish-version.success': undefined, // 'Successfully set <strong>{{title}}</strong> to be unpublished on release'
  /** Action message for when the view release is pressed */
  'release.action.view-release': undefined, // 'View release'
  /** Label for banner when release is scheduled */
  'release.banner.scheduled-for-publishing-on': undefined, // 'Scheduled to be published on {{date}}'
  /** Label for Draft chip in document header */
  'release.chip.draft': undefined, // 'Draft'
  /** Label for Draft chip in global header */
  'release.chip.global.drafts': undefined, // 'Drafts'
  /** Label for Published chip in document header */
  'release.chip.published': undefined, // 'Published'
  /** Label for tooltip in chip when document is in an archived release */
  'release.chip.tooltip.archived': undefined, // 'This release is archived and cannot be edited.'
  /** Label for tooltip in chip with the created date */
  'release.chip.tooltip.created-date': undefined, // 'Created {{date}}'
  /** Label for tooltip in draft chip when it's a live edit document */
  'release.chip.tooltip.draft-disabled.live-edit': undefined, // 'This document is in live edit mode, drafts are disabled'
  /** Label for tooltip in chip with the lasted edited date */
  'release.chip.tooltip.edited-date': undefined, // 'Edited {{date}}'
  /** Label for tooltip in chip when document is intended for a future release that hasn't been scheduled */
  'release.chip.tooltip.intended-for-date': undefined, // 'Intended for {{date}}'
  /** Label for tooltip in chip when there is no recent draft edits */
  'release.chip.tooltip.no-edits': undefined, // 'No edits'
  /** Label for tooltip in chip when document isn't published */
  'release.chip.tooltip.not-published': undefined, // 'Not published'
  /** Label for tooltip in chip with the published date */
  'release.chip.tooltip.published-date': undefined, // 'Published {{date}}'
  /** Label for tooltip in chip when document is in a release that has been scheduled */
  'release.chip.tooltip.scheduled-for-date': undefined, // 'Scheduled for {{date}}'
  /** Label for tooltip in scheduled chip without a known date */
  'release.chip.tooltip.unknown-date': undefined, // 'Unknown date'
  /** Label for tooltip on deleted release */
  'release.deleted-tooltip': undefined, // 'This release has been deleted'
  /** Title for copying version to a new release dialog */
  'release.dialog.copy-to-release.title': undefined, // 'Copy version to new release'
  /** Title for action create a release */
  'release.dialog.create.confirm': undefined, // 'Create release'
  /** Title for creating releases dialog */
  'release.dialog.create.title': undefined, // 'New release'
  /** Label for description in tooltip to explain release types */
  'release.dialog.tooltip.description': undefined, // 'The intended release time is used to create better previews and hints about whether documents conflict.'
  /** Label for noting that a release time is not final */
  'release.dialog.tooltip.note': undefined, // 'You can always change it later.'
  /** Title for tooltip to explain release time */
  'release.dialog.tooltip.title': undefined, // 'Approximate time of release'
  /** The placeholder text when the release doesn't have a description */
  'release.form.placeholder-describe-release': undefined, // 'Describe the release…'
  /** Tooltip for button to hide release visibility */
  'release.layer.hide': undefined, // 'Hide release'
  /** Label for draft perspective in navbar */
  'release.navbar.drafts': undefined, // 'Drafts'
  /** Label for published releases in navbar */
  'release.navbar.published': undefined, // 'Published'
  /** Tooltip for releases navigation in navbar */
  'release.navbar.tooltip': undefined, // 'Releases'
  /** The placeholder text when the release doesn't have a title */
  'release.placeholder-untitled-release': undefined, // 'Untitled release'
  /** The toast description that will be shown when the user has a release perspective which is now archived */
  'release.toast.archived-release.description': undefined, // 'This release has been unpinned'
  /** The toast title that will be shown when the user has a release perspective which is now archived */
  'release.toast.archived-release.title': undefined, // 'The \'{{title}}\' release was archived'
  /** The toast title that will be shown the creating a release fails */
  'release.toast.create-release-error.title': undefined, // 'Failed to create release'
  /**The toast title that will be shown when the user has a release perspective which is now deleted */
  'release.toast.not-found-release.title': undefined, // 'The \'{{title}}\' release could not be found'
  /** The toast description that will be shown when the user has a release perspective which is now published */
  'release.toast.published-release.description': undefined, // 'This release has been unpinned'
  /** The toast title that will be shown when the user has a release perspective which is now deleted */
  'release.toast.published-release.title': undefined, // 'The \'{{title}}\' release was published'
  /** Label for when a version of a document has already been added to the release */
  'release.tooltip.already-added': undefined, // 'A version of this document has already been added'
  /** Label for when a release is scheduled / scheduling and a user can't add a document version to it */
  'release.tooltip.locked': undefined, // 'This release has been scheduled. Unsechedule it to add more documents.'
  /** Label for the release type 'as soon as possible' */
  'release.type.asap': undefined, // 'ASAP'
  /** Label for the release type 'at time', meaning it's a release with a scheduled date */
  'release.type.scheduled': undefined, // 'At time'
  /** Label for the release type 'undecided' */
  'release.type.undecided': undefined, // 'Undecided'
  /** Tooltip for the dropdown to show all versions of document */
  'release.version-list.tooltip': undefined, // 'See all document versions'

  /** Accessibility label to open search action when the search would go fullscreen (eg on narrower screens) */
  'search.action-open-aria-label': undefined, // 'Open search'
  /** Action label for adding a search filter */
  'search.action.add-filter': undefined, // 'Add filter'
  /** Action label for clearing search filters */
  'search.action.clear-filters': undefined, // 'Clear filters'
  /** Label for action to clear recent searches */
  'search.action.clear-recent-searches': undefined, // 'Clear recent searches'
  /** Accessibility label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-aria-label': undefined, // 'Clear checked filters'
  /** Label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-label': undefined, // 'Clear'
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to close the search */
  'search.action.close-search-aria-label': undefined, // 'Close search'
  /** Accessibility label for filtering by document type */
  'search.action.filter-by-document-type-aria-label': undefined, // 'Filter by document type'
  /** Accessibility action label for removing an already applied search filter */
  'search.action.remove-filter-aria-label': undefined, // 'Remove filter'
  /**
   * Text displayed when either no document type(s) have been selected, or we need a fallback,
   * eg "Search for all types".
   */
  'search.action.search-all-types': undefined, // 'Search all documents'
  /**
   * Text displayed when we are able to determine one or more document types that will be used for
   * searching, and can fit within the space assigned by the design.
   */
  'search.action.search-specific-types': undefined, // 'Search for {{types, list}}'
  /** Dialog title for action to select an asset of unknown type */
  'search.action.select-asset': undefined, // 'Select asset'
  /** Dialog title for action to select a file asset */
  'search.action.select-asset_file': undefined, // 'Select file'
  /** Dialog title for action to select an image asset */
  'search.action.select-asset_image': undefined, // 'Select image'
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-aria-label_hide': undefined, // 'Hide filters'
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-aria-label_show': undefined, // 'Show filters'
  /** Label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-label_hide': undefined, // 'Hide filters'
  /** Label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-label_show': undefined, // 'Show filters'
  /** Tooltip text for the global search button */
  'search.button.tooltip': undefined, // 'Search'
  /**
   * A list of provided types (use `list` formatter preferably).
   */
  'search.document-type-list': undefined, // '{{types, list}}'
  /**
   * In the context of a list of document types - no filtering selection has been done,
   * thus the default is "all types".
   */
  'search.document-type-list-all-types': undefined, // 'All types'
  /** Accessibility label for list displaying the available document types */
  'search.document-types-aria-label': undefined, // 'Document types'
  /** Label for when no document types matching the filter are found */
  'search.document-types-no-matches-found': undefined, // 'No matches for {{filter}}'
  /** Description for error when a filter cannot be displayed, describes that you should check the schema */
  'search.error.display-filter-description': undefined, // 'This may indicate invalid options defined in your schema.'
  /** Title for error when a filter cannot be displayed (mainly a developer-oriented error) */
  'search.error.display-filter-title': undefined, // 'An error occurred whilst displaying this filter.'
  /** Description for error when no valid asset source is found, describes that you should check the the current studio config */
  'search.error.no-valid-asset-source-check-config-description': undefined, // 'Please ensure it\'s enabled in your studio configuration file.'
  /** Description for error when no valid asset source is found, describes that only the default asset is supported */
  'search.error.no-valid-asset-source-only-default-description': undefined, // 'Currently, only the default asset source is supported.'
  /** Title for error when no valid asset sources found */
  'search.error.no-valid-asset-source-title': undefined, // 'No valid asset sources found.'
  /** Helpful description for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-help-description': undefined, // 'Please try again or check your connection'
  /** Title label for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-title': undefined, // 'Something went wrong while searching'
  /**
   * Label for "All fields", a label that appears above the list of available fields when filtering.
   * If one or more document type has been chosen as filter, this label is replaced with a group of
   * fields per selected document type
   */
  'search.filter-all-fields-header': undefined, // 'All fields'
  /** Label for the action of changing from one file to a different file in asset search filter */
  'search.filter-asset-change_file': undefined, // 'Change file'
  /** Label for the action of changing from one image to a different image in asset search filter */
  'search.filter-asset-change_image': undefined, // 'Change image'
  /** Label for the action of clearing the currently selected asset in an image/file filter */
  'search.filter-asset-clear': undefined, // 'Clear'
  /** Label for the action of selecting a file in asset search filter */
  'search.filter-asset-select_file': undefined, // 'Select file'
  /** Label for the action of selecting an image in asset search filter */
  'search.filter-asset-select_image': undefined, // 'Select image'
  /** Label for boolean filter - false */
  'search.filter-boolean-false': undefined, // 'False'
  /** Label for boolean filter - true */
  'search.filter-boolean-true': undefined, // 'True'
  /** Accessibility label for list that lets you filter fields by title, when adding a new filter in search */
  'search.filter-by-title-aria-label': undefined, // 'Filter by title'
  /** Accessibility label for date filter input */
  'search.filter-date-aria-label': undefined, // 'Date'
  /** Accessibility label for selecting end date on the date range search filter */
  'search.filter-date-range-end-date-aria-label': undefined, // 'End date'
  /** Accessibility label for selecting start date on the date range search filter */
  'search.filter-date-range-start-date-aria-label': undefined, // 'Start date'
  /**
   * Label for "Days"/"Months"/"Years" when selecting it as unit in "X days ago" search filter.
   * Capitalized, as it would be listed in a dropdown.
   */
  'search.filter-date-unit_days': undefined, // 'Days'
  'search.filter-date-unit_months': undefined, // 'Months'
  'search.filter-date-unit_years': undefined, // 'Years'
  /** Accessibility label for selecting the unit (day/month/year) when adding "X days ago" search filter */
  'search.filter-date-unit-aria-label': undefined, // 'Select unit'
  /** Accessibility label for the input value (days/months/years) when adding "X days ago" search filter */
  'search.filter-date-value-aria-label': undefined, // 'Unit value'
  /** Label for "field description" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-description': undefined, // 'Field description'
  /** Label for "field name" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-name': undefined, // 'Field name'
  /** Label for "Used in document types", a list of the document types a field appears in. Shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-used-in-document-types': undefined, // 'Used in document types'
  /** Label for when no fields/filters are found for the given term */
  'search.filter-no-matches-found': undefined, // 'No matches for {{filter}}'
  /** Placeholder value for maximum numeric value filter */
  'search.filter-number-max-value-placeholder': undefined, // 'Max value'
  /** Placeholder value for minimum numeric value filter */
  'search.filter-number-min-value-placeholder': undefined, // 'Min value'
  /** Placeholder value for the number filter */
  'search.filter-number-value-placeholder': undefined, // 'Value'
  /** Placeholder for the "Filter" input, when narrowing possible fields/filters */
  'search.filter-placeholder': undefined, // 'Filter'
  /** Label for the action of clearing the currently selected document in a reference filter */
  'search.filter-reference-clear': undefined, // 'Clear'
  /**
   * Label for "shared fields", a label that appears above a list of fields that all filtered types
   * have in common, when adding a new filter. For instance, if "book" and "employee" both have a
   * "title" field, this field would be listed under "shared fields".
   * */
  'search.filter-shared-fields-header': undefined, // 'Shared fields'
  /** Placeholder value for the string filter */
  'search.filter-string-value-placeholder': undefined, // 'Value'
  /** Label/placeholder prompting user to select one of the predefined, allowed values for a string field */
  'search.filter-string-value-select-predefined-value': undefined, // 'Select…'
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (singular) */
  'search.filters-aria-label_one': undefined, // 'Filter'
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (plural) */
  'search.filters-aria-label_other': undefined, // 'Filters'
  /** Label for instructions on how to use the search - displayed when no recent searches are available */
  'search.instructions': undefined, // 'Use <ControlsIcon/> to refine your search'
  /** Helpful description for when no search results are found */
  'search.no-results-help-description': undefined, // 'Try another keyword or adjust your filters'
  /** Title label for when no search results are found */
  'search.no-results-title': undefined, // 'No results found'
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
  'search.operator.array-count-equal.description_one': undefined, // '<Field/> <Operator>has</Operator> <Value>{{count}} item</Value>'
  'search.operator.array-count-equal.description_other': undefined, // '<Field/> <Operator>has</Operator> <Value>{{count}} items</Value>'
  'search.operator.array-count-equal.name': undefined, // 'quantity is'
  /* Array should have a count greater than given filter value */
  'search.operator.array-count-gt.description_one': undefined, // '<Field/> <Operator>has ></Operator> <Value>{{count}} item</Value>'
  'search.operator.array-count-gt.description_other': undefined, // '<Field/> <Operator>has ></Operator> <Value>{{count}} items</Value>'
  'search.operator.array-count-gt.name': undefined, // 'quantity greater than'
  /* Array should have a count greater than or equal to the given filter value */
  'search.operator.array-count-gte.description_one': undefined, // '<Field/> <Operator>has ≥</Operator> <Value>{{count}} item</Value>'
  'search.operator.array-count-gte.description_other': undefined, // '<Field/> <Operator>has ≥</Operator> <Value>{{count}} items</Value>'
  'search.operator.array-count-gte.name': undefined, // 'quantity greater than or equal to'
  /* Array should have a count less than given filter value */
  'search.operator.array-count-lt.description_one': undefined, // '<Field/> <Operator>has <</Operator> <Value>{{count}} item</Value>'
  'search.operator.array-count-lt.description_other': undefined, // '<Field/> <Operator>has <</Operator> <Value>{{count}} items</Value>'
  'search.operator.array-count-lt.name': undefined, // 'quantity less than'
  /* Array should have a count less than or equal to the given filter value */
  'search.operator.array-count-lte.description_one': undefined, // '<Field/> <Operator>has ≤</Operator> <Value>{{count}} item</Value>'
  'search.operator.array-count-lte.description_other': undefined, // '<Field/> <Operator>has ≤</Operator> <Value>{{count}} items</Value>'
  'search.operator.array-count-lte.name': undefined, // 'quantity less than or equal to'
  /* Array should have a count that is not equal to the given filter value */
  'search.operator.array-count-not-equal.description_one': undefined, // '<Field/> <Operator>does not have</Operator> <Value>{{count}} item</Value>'
  'search.operator.array-count-not-equal.description_other': undefined, // '<Field/> <Operator>does not have</Operator> <Value>{{count}} items</Value>'
  'search.operator.array-count-not-equal.name': undefined, // 'quantity is not'
  /**
   * Array should have a count within the range of given filter values.
   * Gets passed `{{from}}` and `{{to}}` values.
   **/
  'search.operator.array-count-range.description': undefined, // '<Field/> <Operator>has between</Operator> <Value>{{from}} → {{to}} items</Value>'
  'search.operator.array-count-range.name': undefined, // 'quantity is between'
  /* Array should include the given value */
  'search.operator.array-list-includes.description': undefined, // '<Field/> <Operator>includes</Operator> <Value>{{value}}</Value>'
  'search.operator.array-list-includes.name': undefined, // 'includes'
  /* Array should not include the given value */
  'search.operator.array-list-not-includes.description': undefined, // '<Field/> <Operator>does not include</Operator> <Value>{{value}}</Value>'
  'search.operator.array-list-not-includes.name': undefined, // 'does not include'
  /* Array should include the given reference */
  'search.operator.array-reference-includes.description': undefined, // '<Field/> <Operator>includes</Operator> <Value>{{value}}</Value>'
  'search.operator.array-reference-includes.name': undefined, // 'includes'
  /* Array should not include the given reference */
  'search.operator.array-reference-not-includes.description': undefined, // '<Field/> <Operator>does not include</Operator> <Value>{{value}}</Value>'
  'search.operator.array-reference-not-includes.name': undefined, // 'does not include'
  /* Asset (file) should be the selected asset */
  'search.operator.asset-file-equal.description': undefined, // '<Field/> <Operator>is</Operator> <Value>{{value}}</Value>'
  'search.operator.asset-file-equal.name': undefined, // 'is'
  /* Asset (file) should not be the selected asset */
  'search.operator.asset-file-not-equal.description': undefined, // '<Field/> <Operator>is not</Operator> <Value>{{value}}</Value>'
  'search.operator.asset-file-not-equal.name': undefined, // 'is not'
  /* Asset (image) should be the selected asset */
  'search.operator.asset-image-equal.description': undefined, // '<Field/> <Operator>is</Operator> <Value>{{value}}</Value>'
  'search.operator.asset-image-equal.name': undefined, // 'is'
  /* Asset (image) should not be the selected asset */
  'search.operator.asset-image-not-equal.description': undefined, // '<Field/> <Operator>is not</Operator> <Value>{{value}}</Value>'
  'search.operator.asset-image-not-equal.name': undefined, // 'is not'
  /**
   * Boolean value should be the given filter value (true/false).
   * Context passed is `true` and `false`, allowing for more specific translations:
   * - `search.operator.boolean-equal.description_true`
   * - `search.operator.boolean-equal.description_false`
   */
  'search.operator.boolean-equal.description': undefined, // '<Field/> <Operator>is</Operator> <Value>{{value}}</Value>'
  'search.operator.boolean-equal.name': undefined, // 'is'
  /* Date should be after (later than) given filter value */
  'search.operator.date-after.description': undefined, // '<Field/> <Operator>is after</Operator> <Value>{{value}}</Value>'
  'search.operator.date-after.name': undefined, // 'after'
  /* Date should be before (earlier than) given filter value */
  'search.operator.date-before.description': undefined, // '<Field/> <Operator>is before</Operator> <Value>{{value}}</Value>'
  'search.operator.date-before.name': undefined, // 'before'
  /* Date should be the given filter value */
  'search.operator.date-equal.description': undefined, // '<Field/> <Operator>is</Operator> <Value>{{value}}</Value>'
  'search.operator.date-equal.name': undefined, // 'is'
  /* Date should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-last.description': undefined, // '<Field/> <Operator>is in the last</Operator> <Value>{{value}}</Value>'
  'search.operator.date-last.name': undefined, // 'last'
  /* Date should not be the given filter value */
  'search.operator.date-not-equal.description': undefined, // '<Field/> <Operator>is not</Operator> <Value>{{value}}</Value>'
  'search.operator.date-not-equal.name': undefined, // 'is not'
  /* Date should be within the range of given filter values */
  'search.operator.date-range.description': undefined, // '<Field/> <Operator>is between</Operator> <Value/>'
  'search.operator.date-range.name': undefined, // 'is between'
  /* Date and time should be after (later than) given filter value */
  'search.operator.date-time-after.description': undefined, // '<Field/> <Operator>is after</Operator> <Value>{{value}}</Value>'
  'search.operator.date-time-after.name': undefined, // 'after'
  /* Date and time should be before (earlier than) given filter value */
  'search.operator.date-time-before.description': undefined, // '<Field/> <Operator>is before</Operator> <Value>{{value}}</Value>'
  'search.operator.date-time-before.name': undefined, // 'before'
  /* Date and time should be the given filter value */
  'search.operator.date-time-equal.description': undefined, // '<Field/> <Operator>is</Operator> <Value>{{value}}</Value>'
  'search.operator.date-time-equal.name': undefined, // 'is'
  /* Date and time should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-time-last.description': undefined, // '<Field/> <Operator>is in the last</Operator> <Value>{{value}}</Value>'
  'search.operator.date-time-last.name': undefined, // 'last'
  /* Date and time should not be the given filter value */
  'search.operator.date-time-not-equal.description': undefined, // '<Field/> <Operator>is not</Operator> <Value>{{value}}</Value>'
  'search.operator.date-time-not-equal.name': undefined, // 'is not'
  /* Date and time should be within the range of given filter values */
  'search.operator.date-time-range.description': undefined, // '<Field/> <Operator>is between</Operator> <Value/>'
  'search.operator.date-time-range.name': undefined, // 'is between'
  /* Value should be defined */
  'search.operator.defined.description': undefined, // '<Field/> <Operator>is</Operator> <Value>not empty</Value>'
  'search.operator.defined.name': undefined, // 'not empty'
  /* Value should not be defined */
  'search.operator.not-defined.description': undefined, // '<Field/> <Operator>is</Operator> <Value>empty</Value>'
  'search.operator.not-defined.name': undefined, // 'empty'
  /* Number should be the given filter value */
  'search.operator.number-equal.description': undefined, // '<Field/> <Operator>is</Operator> <Value>{{value}}</Value>'
  'search.operator.number-equal.name': undefined, // 'is'
  /* Number should be greater than given filter value */
  'search.operator.number-gt.description': undefined, // '<Field/> <Operator>></Operator> <Value>{{value}}</Value>'
  'search.operator.number-gt.name': undefined, // 'greater than'
  /* Number should be greater than or the given filter value */
  'search.operator.number-gte.description': undefined, // '<Field/> <Operator>≥</Operator> <Value>{{value}}</Value>'
  'search.operator.number-gte.name': undefined, // 'greater than or equal to'
  /* Number should be less than given filter value */
  'search.operator.number-lt.description': undefined, // '<Field/> <Operator><</Operator> <Value>{{value}}</Value>'
  'search.operator.number-lt.name': undefined, // 'less than'
  /* Number should be less than or the given filter value */
  'search.operator.number-lte.description': undefined, // '<Field/> <Operator>≤</Operator> <Value>{{value}}</Value>'
  'search.operator.number-lte.name': undefined, // 'less than or equal to'
  /* Number should not be the given filter value */
  'search.operator.number-not-equal.description': undefined, // '<Field/> <Operator>is not</Operator> <Value>{{value}}</Value>'
  'search.operator.number-not-equal.name': undefined, // 'is not'
  /* Number should be within the range of given filter values */
  'search.operator.number-range.description': undefined, // '<Field/> <Operator>is between</Operator> <Value>{{from}} → {{to}}</Value>'
  'search.operator.number-range.name': undefined, // 'is between'
  /* Portable Text should contain the given filter value */
  'search.operator.portable-text-contains.description': undefined, // '<Field/> <Operator>contains</Operator> <Value>{{value}}</Value>'
  'search.operator.portable-text-contains.name': undefined, // 'contains'
  /* Portable Text should be the given filter value */
  'search.operator.portable-text-equal.description': undefined, // '<Field/> <Operator>is</Operator> <Value>{{value}}</Value>'
  'search.operator.portable-text-equal.name': undefined, // 'is'
  /* Portable Text should not contain the given filter value */
  'search.operator.portable-text-not-contains.description': undefined, // '<Field/> <Operator>does not contain</Operator> <Value>{{value}}</Value>'
  'search.operator.portable-text-not-contains.name': undefined, // 'does not contain'
  /* Portable Text should not be the given filter value */
  'search.operator.portable-text-not-equal.description': undefined, // '<Field/> <Operator>is not</Operator> <Value>{{value}}</Value>'
  'search.operator.portable-text-not-equal.name': undefined, // 'is not'
  /* References the given asset (file) */
  'search.operator.reference-asset-file.description': undefined, // '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>'
  'search.operator.reference-asset-file.name': undefined, // 'file'
  /* References the given asset (image) */
  'search.operator.reference-asset-image.description': undefined, // '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>'
  'search.operator.reference-asset-image.name': undefined, // 'image'
  /* References the given document */
  'search.operator.reference-document.description': undefined, // '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>'
  'search.operator.reference-document.name': undefined, // 'document'
  /* Reference should be the given document */
  'search.operator.reference-equal.description': undefined, // '<Field/> <Operator>is</Operator> <Value>{{value}}</Value>'
  'search.operator.reference-equal.name': undefined, // 'is'
  /* Reference should not be the given document */
  'search.operator.reference-not-equal.description': undefined, // '<Field/> <Operator>is not</Operator> <Value>{{value}}</Value>'
  'search.operator.reference-not-equal.name': undefined, // 'is not'
  /* Slug contains the given value */
  'search.operator.slug-contains.description': undefined, // '<Field/> <Operator>contains</Operator> <Value>{{value}}</Value>'
  'search.operator.slug-contains.name': undefined, // 'contains'
  /* Slug equals the given filter value */
  'search.operator.slug-equal.description': undefined, // '<Field/> <Operator>is</Operator> <Value>{{value}}</Value>'
  'search.operator.slug-equal.name': undefined, // 'is'
  /* Slug does not contain the given value */
  'search.operator.slug-not-contains.description': undefined, // '<Field/> <Operator>does not contain</Operator> <Value>{{value}}</Value>'
  'search.operator.slug-not-contains.name': undefined, // 'does not contain'
  /* Slug does not equal the given filter value */
  'search.operator.slug-not-equal.description': undefined, // '<Field/> <Operator>is not</Operator> <Value>{{value}}</Value>'
  'search.operator.slug-not-equal.name': undefined, // 'is not'
  /* String contains the given filter value */
  'search.operator.string-contains.description': undefined, // '<Field/> <Operator>contains</Operator> <Value>{{value}}</Value>'
  'search.operator.string-contains.name': undefined, // 'contains'
  /* String equals the given filter value */
  'search.operator.string-equal.description': undefined, // '<Field/> <Operator>is</Operator> <Value>{{value}}</Value>'
  'search.operator.string-equal.name': undefined, // 'is'
  /* String equals one of the predefined allowed values */
  'search.operator.string-list-equal.description': undefined, // '<Field/> <Operator>is</Operator> <Value>{{value}}</Value>'
  'search.operator.string-list-equal.name': undefined, // 'is'
  /* String does not equal one of the predefined allowed values */
  'search.operator.string-list-not-equal.description': undefined, // '<Field/> <Operator>is not</Operator> <Value>{{value}}</Value>'
  'search.operator.string-list-not-equal.name': undefined, // 'is not'
  /* String does not contain the given filter value */
  'search.operator.string-not-contains.description': undefined, // '<Field/> <Operator>does not contain</Operator> <Value>{{value}}</Value>'
  'search.operator.string-not-contains.name': undefined, // 'does not contain'
  /* String does not equal the given filter value */
  'search.operator.string-not-equal.description': undefined, // '<Field/> <Operator>is not</Operator> <Value>{{value}}</Value>'
  'search.operator.string-not-equal.name': undefined, // 'is not'
  /** Label for the "Best match" search ordering type */
  'search.ordering.best-match-label': undefined, // 'Best match'
  /** Label for the "Created: Oldest first" search ordering type */
  'search.ordering.created-ascending-label': undefined, // 'Created: Oldest first'
  /** Label for the "Created: Newest first" search ordering type */
  'search.ordering.created-descending-label': undefined, // 'Created: Newest first'
  /** Label for the "Updated: Oldest first" search ordering type */
  'search.ordering.updated-ascending-label': undefined, // 'Updated: Oldest first'
  /** Label for the "Updated: Newest first" search ordering type */
  'search.ordering.updated-descending-label': undefined, // 'Updated: Newest first'
  /** Placeholder text for the global search input field */
  'search.placeholder': undefined, // 'Search'
  /** Accessibility label for the recent searches section, shown when no valid search terms has been given */
  'search.recent-searches-aria-label': undefined, // 'Recent searches'
  /** Label/heading shown for the recent searches section */
  'search.recent-searches-label': undefined, // 'Recent searches'
  /** Accessibility label for the search results section, shown when the user has typed valid terms */
  'search.search-results-aria-label': undefined, // 'Search results'

  /** Label for the edit columns button to change field visibility in sheet list */
  'sheet-list.edit-columns': undefined, // 'Edit columns'
  /** Label for the header menu option to hide a field from the sheet list */
  'sheet-list.hide-field': undefined, // 'Remove from table'
  /** Label for reset column visibilities button */
  'sheet-list.reset-columns': undefined, // 'Reset columns'
  /** Title for the edit columns menu */
  'sheet-list.select-fields': undefined, // 'Select up to 5 field types'

  /** Accessibility label for the navbar status button */
  'status-button.aria-label': undefined, // 'Configuration status'

  /** Title for the changes tooltip in the history inspector*/
  'timeline.changes.title': undefined, // 'Changes by'
  /** Description for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-description': undefined, // 'Document history transactions have not been affected.'
  /** Title for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-title': undefined, // 'An error occurred whilst retrieving document changes.'
  /** Description for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-version-description': undefined, // 'Enable the events API through the Studio config to view document history.'
  /** Title for error when the timeline for the given version document can't be loaded */
  'timeline.error.load-document-changes-version-title': undefined, // 'Version documents history is only available through the Events API.'
  /** Error description for when the document doesn't have history */
  'timeline.error.no-document-history-description': undefined, // 'When changing the content of the document, the document versions will appear in this menu.'
  /** Error title for when the document doesn't have history */
  'timeline.error.no-document-history-title': undefined, // 'No document history'
  /** Error prompt when revision cannot be loaded */
  'timeline.error.unable-to-load-revision': undefined, // 'Unable to load revision'
  /** Label for when the timeline item is the latest in the history */
  'timeline.latest': undefined, // 'Latest'
  /** Label for latest revision for timeline menu dropdown */
  'timeline.latest-revision': undefined, // 'Latest revision'
  /**
   * Label for latest revision for timeline menu dropdown
   * @deprecated as of `v3.47.0` `timeline.latest-revision` should be used instead. Note: _usage_ of this key is deprecated, but Studios on `< v3.47.0` still require this key to be _defined_
   * */
  'timeline.latest-version': undefined, // 'Latest revision'
  /** The aria-label for the list of revisions in the timeline */
  'timeline.list.aria-label': undefined, // 'Document revisions'
  /** Label for loading history */
  'timeline.loading-history': undefined, // 'Loading history…'
  /* Label for when no previous since events are available*/
  'timeline.no-previous-events': undefined, // 'No previous events'
  /** Label shown in review changes timeline when a document has been created */
  'timeline.operation.created': undefined, // 'Created'
  /** Label shown in review changes timeline when a document has been created, with a timestamp */
  'timeline.operation.created_timestamp': undefined, // 'Created: {{timestamp, datetime}}'
  /** Label shown in review changes timeline when a document was initially created */
  'timeline.operation.created-initial': undefined, // 'Created'
  /** Label shown in review changes timeline when a document was initially created, with a timestamp */
  'timeline.operation.created-initial_timestamp': undefined, // 'Created: {{timestamp, datetime}}'
  /** Label shown in review changes timeline when a document has been deleted */
  'timeline.operation.deleted': undefined, // 'Deleted'
  /** Label shown in review changes timeline when a document has been deleted, with a timestamp */
  'timeline.operation.deleted_timestamp': undefined, // 'Deleted: {{timestamp, datetime}}'
  /** Label shown in review changes timeline when a draft has been discarded */
  'timeline.operation.draft-discarded': undefined, // 'Discarded draft'
  /** Label shown in review changes timeline when a draft has been discarded, with a timestamp */
  'timeline.operation.draft-discarded_timestamp': undefined, // 'Discarded draft: {{timestamp, datetime}}'
  /** Label shown in review changes timeline when a draft has been edited */
  'timeline.operation.edited-draft': undefined, // 'Edited'
  /** Label shown in review changes timeline when a draft has been edited, with a timestamp */
  'timeline.operation.edited-draft_timestamp': undefined, // 'Edited: {{timestamp, datetime}}'
  /** Label shown in review changes timeline when a document has been edited live */
  'timeline.operation.edited-live': undefined, // 'Live edited'
  /** Label shown in review changes timeline when a document has been edited live, with a timestamp */
  'timeline.operation.edited-live_timestamp': undefined, // 'Live edited: {{timestamp, datetime}}'
  /** Label shown in review changes timeline when a document was published */
  'timeline.operation.published': undefined, // 'Published'
  /** Label shown in review changes timeline when a document was published, with a timestamp */
  'timeline.operation.published_timestamp': undefined, // 'Published: {{timestamp, datetime}}'
  /** Label shown in review changes timeline when a document was unpublished */
  'timeline.operation.unpublished': undefined, // 'Unpublished'
  /** Label shown in review changes timeline when a document was unpublished, with a timestamp */
  'timeline.operation.unpublished_timestamp': undefined, // 'Unpublished: {{timestamp, datetime}}'
  /**
   * Label for determining since which version the changes for timeline menu dropdown are showing.
   * Receives the time label as a parameter (`timestamp`).
   */
  'timeline.since': undefined, // '{{timestamp, datetime}}'
  /** Label for missing change version for timeline menu dropdown are showing */
  'timeline.since-version-missing': undefined, // 'Since: unknown version'

  /** Aria label for the action buttons in the PTE toolbar */
  'toolbar.portable-text.action-button-aria-label': undefined, // '{{action}}'

  /** Accessibility label for the breadcrumb menu */
  'tree-editing-dialog.breadcrumbs.menu': undefined, // 'Breadcrumb menu'
  /** Title placeholder for search input in array of objects */
  'tree-editing-dialog.search-placeholder': undefined, // 'Search'
  /** Menu aria label for the search menu */
  'tree-editing-dialog.search.menu-label': undefined, // 'Search menu'
  /** Title label for when no search results are found on the tree of objects */
  'tree-editing-dialog.search.no-results-title': undefined, // 'No results found'
  /** Label to close the sidebar */
  'tree-editing-dialog.sidebar.action.close': undefined, // 'Close sidebar'
  /** Collapse label the menu item in the sidebar  */
  'tree-editing-dialog.sidebar.action.collapse': undefined, // 'Collapse'
  /** Label to close the dialog */
  'tree-editing-dialog.sidebar.action.done': undefined, // 'Done'
  /** Exapnd label the menu item in the sidebar  */
  'tree-editing-dialog.sidebar.action.expand': undefined, // 'Expand'
  /** Label to open the sidebar */
  'tree-editing-dialog.sidebar.action.open': undefined, // 'Open sidebar'

  /** Label for button showing the free trial days left */
  'user-menu.action.free-trial_one': undefined, // '{{count}} day left in trial'
  'user-menu.action.free-trial_other': undefined, // '{{count}} days left in trial'
  /** Label for the button showed after trial ended */
  'user-menu.action.free-trial-finished': undefined, // 'Upgrade from free'
  /** Label for action to invite members to the current sanity project */
  'user-menu.action.invite-members': undefined, // 'Invite members'
  /** Accessibility label for action to invite members to the current sanity project */
  'user-menu.action.invite-members-aria-label': undefined, // 'Invite members'
  /** Label for action to manage the current sanity project */
  'user-menu.action.manage-project': undefined, // 'Manage project'
  /** Accessibility label for the action to manage the current project */
  'user-menu.action.manage-project-aria-label': undefined, // 'Manage project'
  /** Tooltip helper text when portable text annotation is disabled for empty block*/
  'user-menu.action.portable-text.annotation-disabled_empty-block': undefined, // 'Cannot apply {{name}} to empty block'
  /** Tooltip helper text when portable text annotation is disabled for multiple blocks */
  'user-menu.action.portable-text.annotation-disabled_multiple-blocks': undefined, // 'Cannot apply {{name}} to multiple blocks'
  /** Label for action to sign out of the current sanity project */
  'user-menu.action.sign-out': undefined, // 'Sign out'
  /** Title for appearance section for the current studio (dark / light / system scheme) */
  'user-menu.appearance-title': undefined, // 'Appearance'
  /** Label for close menu button for user menu */
  'user-menu.close-menu': undefined, // 'Close menu'
  /** Description for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-description': undefined, // 'Use dark appearance'
  /** Title for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-title': undefined, // 'Dark'
  /** Description for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-description': undefined, // 'Use light appearance'
  /** Title for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-title': undefined, // 'Light'
  /** Description for using "system apparence" in the appearance user menu */
  'user-menu.color-scheme.system-description': undefined, // 'Use system appearance'
  /** Title for using system apparence in the appearance user menu */
  'user-menu.color-scheme.system-title': undefined, // 'System'
  /** Title for locale section for the current studio */
  'user-menu.locale-title': undefined, // 'Language'
  /** Label for tooltip to show which provider the currently logged in user is using */
  'user-menu.login-provider': undefined, // 'Signed in with {{providerTitle}}'
  /** Label for open menu button for user menu */
  'user-menu.open-menu': undefined, // 'Open menu'

  /**
   * Label for action to add a workspace (currently a developer-oriented action, as this will
   * lead to the documentation on workspace configuration)
   */
  'workspaces.action.add-workspace': undefined, // 'Add workspace'
  /**
   * Label for action to choose a different workspace, in the case where you are not logged in,
   * have selected a workspace, and are faced with the authentication options for the selected
   * workspace. In other words, label for the action shown when you have reconsidered which
   * workspace to authenticate in.
   */
  'workspaces.action.choose-another-workspace': undefined, // 'Choose another workspace'
  /** Label for heading that indicates that you can choose your workspace */
  'workspaces.choose-your-workspace-label': undefined, // 'Choose your workspace'
  /** Label for the workspace menu */
  'workspaces.select-workspace-aria-label': undefined, // 'Select workspace'
  /** Button label for opening the workspace switcher */
  'workspaces.select-workspace-label': undefined, // 'Select workspace'
  /** Tooltip for the workspace menu */
  'workspaces.select-workspace-tooltip': undefined, // 'Select workspace'
  /** Title for Workplaces dropdown menu */
  'workspaces.title': undefined, // 'Workspaces'
})
