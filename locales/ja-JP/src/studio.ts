import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Menu item for deleting the asset */
  'asset-source.asset-list.menu.delete': '削除',
  /** Menu item for showing where a particular asset is used */
  'asset-source.asset-list.menu.show-usage': '使用状況を表示',
  /** Header in usage dialog for file assets */
  'asset-source.asset-usage-dialog.header_file': 'ファイルを使用しているドキュメント',
  /** Header in usage dialog for image assets */
  'asset-source.asset-usage-dialog.header_image': '画像を使用しているドキュメント',
  /** Text shown in usage dialog when loading documents using the selected asset */
  'asset-source.asset-usage-dialog.loading': '読み込み中…',
  /** Text for cancel action in delete-asset dialog */
  'asset-source.delete-dialog.action.cancel': 'キャンセル',
  /** Text for "confirm delete" action in delete-asset dialog */
  'asset-source.delete-dialog.action.delete': '削除',
  /** Dialog header for delete-asset dialog when deleting a file */
  'asset-source.delete-dialog.header_file': 'ファイルを削除',
  /** Dialog header for delete-asset dialog when deleting an image */
  'asset-source.delete-dialog.header_image': '画像を削除',
  /** Text shown in delete dialog when loading documents using the selected asset */
  'asset-source.delete-dialog.loading': '読み込み中…',
  /** Message confirming to delete *named* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_named':
    'ファイル<strong>{{filename}}}</strong>とそのメタデータを削除しようとしています。よろしいですか？',
  /** Message confirming to delete *unnamed* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_unnamed':
    'ファイルとそのメタデータを削除しようとしています。よろしいですか？',
  /** Message confirming to delete *named* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_named':
    '画像 <strong>{{filename}}</strong> とそのメタデータを削除しようとしています。よろしいですか？',
  /** Message confirming to delete *unnamed* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_unnamed':
    '画像とそのメタデータを削除しようとしています。よろしいですか？',
  /** Alt text showing on image preview in delete asset dialog  */
  'asset-source.delete-dialog.usage-list.image-preview-alt': '画像のプレビュー',
  /** Warning message showing when *named* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_named':
    '{{filename}}は使用中のため削除できません。このファイルを削除するには、まずすべての使用を取り除く必要があります。',
  /** Warning message showing when *unnamed* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_unnamed':
    'このファイルは使用中のため削除できません。削除するには、まずすべての使用を取り除く必要があります。',
  /** Warning message showing when *named* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_named':
    '{{filename}}は使用中のため削除できません。この画像を削除するには、まずすべての使用を取り除く必要があります。',
  /** Warning message showing when *unnamed* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_unnamed':
    'この画像は使用中のため削除できません。削除するには、まずすべての使用を取り除く必要があります。',
  /** Text shown when the list of assets only include a specific set of types */
  'asset-source.dialog.accept-message':
    '承認されたタイプのアセットのみ表示: <strong>{{acceptTypes}}</strong>',
  /** Keys shared between both image asset source and file asset source */
  /** Select asset dialog title for files */
  'asset-source.dialog.default-title_file': 'ファイルを選択',
  /** Select asset dialog title for images */
  'asset-source.dialog.default-title_image': '画像を選択',
  /** Select asset dialog load more items */
  'asset-source.dialog.load-more': 'もっと読み込む',
  /** Text shown when selecting a file but there's no files to select from */
  'asset-source.dialog.no-assets_file': 'ファイルがありません',
  /** Text shown when selecting an image but there's no images to select from */
  'asset-source.dialog.no-assets_image': '画像がありません',
  'asset-source.file.asset-list.action.delete.disabled-cannot-delete-current-file':
    '現在選択されているファイルは削除できません',
  'asset-source.file.asset-list.action.delete.text': '削除',
  'asset-source.file.asset-list.action.delete.title': 'ファイルを削除',
  'asset-source.file.asset-list.action.select-file.title': 'ファイル {{filename}} を選択',
  'asset-source.file.asset-list.action.show-usage.title': '使用状況を表示',
  'asset-source.file.asset-list.delete-failed': 'ファイルを削除できませんでした',
  'asset-source.file.asset-list.delete-successful': 'ファイルが削除されました',
  'asset-source.file.asset-list.header.date-added': '追加日',
  /** File asset source */
  'asset-source.file.asset-list.header.filename': 'ファイル名',
  'asset-source.file.asset-list.header.size': 'サイズ',
  'asset-source.file.asset-list.header.type': 'タイプ',
  /** Text displayed on button or menu invoking the file asset source */
  'asset-source.file.title': 'アップロードされたファイル',
  'asset-source.image.asset-list.delete-failed': '画像を削除できませんでした',
  /** Image asset source */
  'asset-source.image.asset-list.delete-successful': '画像が削除されました',
  /** Text displayed on button or menu invoking the image asset source */
  'asset-source.image.title': 'アップロードされた画像',
  'asset-source.usage-list.documents-using-file_named_one':
    'ファイル<code>{{filename}}</code>を使用しているドキュメントが1つあります',
  'asset-source.usage-list.documents-using-file_named_other':
    'ファイル<code>{{filename}}</code>を使用しているドキュメントが{{count}}件あります',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *named* file **/
  'asset-source.usage-list.documents-using-file_named_zero':
    'ファイル<code>{{filename}}</code>を使用しているドキュメントはありません',
  'asset-source.usage-list.documents-using-file_unnamed_one':
    '1つのドキュメントがこのファイルを使用しています',
  'asset-source.usage-list.documents-using-file_unnamed_other':
    '{{count}}つのドキュメントがこのファイルを使用しています',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *unnamed* file **/
  'asset-source.usage-list.documents-using-file_unnamed_zero':
    'このファイルを使用しているドキュメントはありません',
  'asset-source.usage-list.documents-using-image_named_one':
    '画像<code>{{filename}}</code>を使用しているドキュメントが1つあります',
  'asset-source.usage-list.documents-using-image_named_other':
    '画像<code>{{filename}}</code>を使用しているドキュメントが{{count}}件あります',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *named* image **/
  'asset-source.usage-list.documents-using-image_named_zero':
    '画像<code>{{filename}}</code>を使用しているドキュメントはありません',
  'asset-source.usage-list.documents-using-image_unnamed_one':
    'この画像を使用しているドキュメントが1つあります',
  'asset-source.usage-list.documents-using-image_unnamed_other':
    'この画像を使用しているドキュメントが{{count}}件あります',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *unnamed* image **/
  'asset-source.usage-list.documents-using-image_unnamed_zero':
    'この画像を使用しているドキュメントはありません',

  /** Action message for navigating to next month */
  'calendar.action.go-to-next-month': '次の月へ',
  /** Action message for navigating to next year */
  'calendar.action.go-to-next-year': '次の年へ',
  /** Action message for navigating to previous month */
  'calendar.action.go-to-previous-month': '前の月へ',
  /** Action message for navigating to previous year */
  'calendar.action.go-to-previous-year': '前の年へ',
  /* Label for navigating the calendar to "today", without _selecting_ today. Short form, eg `Today`, not `Go to today` */
  'calendar.action.go-to-today': '今日',
  /* Accessibility label for navigating the calendar to "today", without _selecting_ today */
  'calendar.action.go-to-today-aria-label': '今日に移動',
  /* Label for navigating the calendar to "tomorrow", without _selecting_ tomorrow. Short form, eg `Tomorrow`, not `Go to tomorrow` */
  'calendar.action.go-to-tomorrow': '明日',
  /* Label for navigating the calendar to "yesterday", without _selecting_ yesterday. Short form, eg `Yesterday`, not `Go to yesterday` */
  'calendar.action.go-to-yesterday': '昨日',
  /** Label for switch that controls whether or not to include time in given timestamp */
  'calendar.action.include-time-label': '時間を含む',
  /** Action message for selecting the hour */
  'calendar.action.select-hour': '時間を選択',
  /** Action message for selecting the minute */
  'calendar.action.select-minute': '分を選択',
  /** Action message for setting to the current time */
  'calendar.action.set-to-current-time': '現在の時刻に設定',
  /** Label for selecting an hour preset. Receives a `time` param as a string on hh:mm format and a `date` param as a Date instance denoting the preset date */
  'calendar.action.set-to-time-preset': '{{time}}の{{date, datetime}}に設定',
  /** Error message displayed in calendar when entered date is not the correct format */
  'calendar.error.must-be-in-format':
    '<Emphasis>{{exampleDate}}</Emphasis>の形式でなければなりません',
  /** Month name for April */
  'calendar.month-names.april': '4月',
  /** Month name for August */
  'calendar.month-names.august': '8月',
  /** Month name for December */
  'calendar.month-names.december': '12月',
  /** Month name for February */
  'calendar.month-names.february': '2月',
  /** Month name for January */
  'calendar.month-names.january': '1月',
  /** Month name for July */
  'calendar.month-names.july': '7月',
  /** Month name for June */
  'calendar.month-names.june': '6月',
  /** Month name for March */
  'calendar.month-names.march': '3月',
  /** Month name for May */
  'calendar.month-names.may': '5月',
  /** Month name for November */
  'calendar.month-names.november': '11月',
  /** Month name for October */
  'calendar.month-names.october': '10月',
  /** Month name for September */
  'calendar.month-names.september': '9月',
  /** Short weekday name for Friday */
  'calendar.weekday-names.short.friday': '金',
  /** Short weekday name for Monday */
  'calendar.weekday-names.short.monday': '月',
  /** Short weekday name for Saturdayday */
  'calendar.weekday-names.short.saturday': '土',
  /** Short weekday name for Sunday */
  'calendar.weekday-names.short.sunday': '日',
  /** Short weekday name for Thursday */
  'calendar.weekday-names.short.thursday': '木',
  /** Short weekday name for Tuesday */
  'calendar.weekday-names.short.tuesday': '火',
  /** Short weekday name for Wednesday */
  'calendar.weekday-names.short.wednesday': '水',

  /** Label for the close button label in Review Changes pane */
  'changes.action.close-label': '変更レビューを閉じる',
  /** Cancel label for revert button prompt action */
  'changes.action.revert-all-cancel': 'キャンセル',
  /** Revert all confirm label for revert button action - used on prompt button + review changes pane */
  'changes.action.revert-all-confirm': 'すべてを元に戻す',
  /** Prompt for reverting all changes in document in Review Changes pane. Includes a count of changes. */
  'changes.action.revert-all-description': 'すべての{{count}}変更を元に戻してもよろしいですか？',
  /** Prompt for confirming revert change (singular) label for field change action */
  'changes.action.revert-changes-confirm-change_one': '変更を元に戻す',
  /** Revert for confirming revert (plural) label for field change action */
  'changes.action.revert-changes-confirm-change_other': '変更を元に戻す',
  /** Prompt for reverting changes for a field change */
  'changes.action.revert-changes-description': '変更を元に戻してもよろしいですか？',
  /** Prompt for reverting changes for a group change, eg multiple changes */
  'changes.action.revert-changes-description_one': '変更を元に戻してもよろしいですか？',
  /** Label for when the action of the change was to set something that was previously empty, eg a field was given a value, an array item was added, an asset was selected or similar */
  'changes.added-label': '追加されました',
  /** Array diff: An item was added in a given position (`{{position}}`) */
  'changes.array.item-added-in-position': '位置{{position}}に追加されました',
  'changes.array.item-moved_down_one': '位置を{{count}}つ下に移動しました',
  'changes.array.item-moved_down_other': '位置を{{count}}つ下に移動しました',
  /**
   * Array diff: An item was moved within the array.
   * Receives `{{count}}` representing number of positions it moved.
   * Context is the direction of the move, either `up` or `down`.
   */
  'changes.array.item-moved_up_one': '位置を{{count}}つ上に移動しました',
  'changes.array.item-moved_up_other': '位置を{{count}}つ上に移動しました',
  /** Array diff: An item was removed from a given position (`{{position}}`) */
  'changes.array.item-removed-from-position': '位置{{position}}から削除されました',
  /** Accessibility label for the "change bar" shown when there are edits on a field-level */
  'changes.change-bar.aria-label': '変更をレビュー',
  /** Label for when the action of the change was _not_ an add/remove, eg a text field changed value, an image was changed from one asset to another or similar */
  'changes.changed-label': '変更されました',
  /** Label and text for tooltip that indicates the authors of the changes */
  'changes.changes-by-author': '変更者',
  /** Additional text shown in development mode when a diff component crashes during rendering */
  'changes.error-boundary.developer-info': '詳細は開発者コンソールを確認してください',
  /** Text shown when a diff component crashes during rendering, triggering the error boundary */
  'changes.error-boundary.title': 'このフィールドの変更をレンダリング中にエラーが発生しました',
  /** Error message shown when the value of a field is not the expected one */
  'changes.error.incorrect-type-message':
    '値のエラー：値のタイプは "<code>{{actualType}}</code>" ですが、期待されるタイプは "<code>{{expectedType}}</code>" です',
  /** File diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.file.meta-info-fallback-title': '無題',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.crop-changed': 'クロップが変更されました',
  /** Image diff: Text shown if the previous image asset was deleted (shouldn't theoretically happen) */
  'changes.image.deleted': '画像が削除されました',
  /** Image diff: Text shown if the image failed to be loaded when previewing it */
  'changes.image.error-loading-image': '画像の読み込みエラー',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.hotspot-changed': 'ホットスポットが変更されました',
  /** Image diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.image.meta-info-fallback-title': '無題',
  /** Image diff: Text shown if no asset has been set for the field (but has metadata changes) */
  'changes.image.no-asset-set': '画像が設定されていません',
  /** Image diff: Text shown when the from/to state has/had no image */
  'changes.image.no-image-placeholder': '（画像なし）',
  /** Label for the "from" value in the change inspector */
  'changes.inspector.from-label': '元',
  /** Label for the "meta" (field path, action etc) information in the change inspector */
  'changes.inspector.meta-label': 'メタ',
  /** Label for the "to" value in the change inspector */
  'changes.inspector.to-label': '先',
  /** Loading author of change in the differences tooltip in the review changes pane */
  'changes.loading-author': '読み込み中…',
  /** Loading changes in Review Changes Pane */
  'changes.loading-changes': '変更を読み込み中…',
  /** No Changes description in the Review Changes pane */
  'changes.no-changes-description':
    'このパネルに変更リストが表示されるように、ドキュメントを編集するか、タイムラインで古いバージョンを選択してください。',
  /** No Changes title in the Review Changes pane */
  'changes.no-changes-title': '変更はありません',
  /** Portable Text diff: An annotation was added */
  'changes.portable-text.annotation_added': '注釈を追加しました',
  /** Portable Text diff: An annotation was changed */
  'changes.portable-text.annotation_changed': '注釈を変更しました',
  /** Portable Text diff: An annotation was removed */
  'changes.portable-text.annotation_removed': '注釈を削除しました',
  /** Portable Text diff: An annotation was left unchanged */
  'changes.portable-text.annotation_unchanged': '注釈は変更されていません',
  /** Portable Text diff: A block changed from one style to another (eg `normal` to `h1` or similar) */
  'changes.portable-text.block-style-changed':
    'ブロックスタイルを "{{fromStyle}}" から "{{toStyle}}" に変更しました',
  /** Portable Text diff: Change formatting of text (setting/unsetting marks, eg bold/italic etc) */
  'changes.portable-text.changed-formatting': 'テキストのフォーマットを変更しました',
  /** Portable Text diff: An empty inline object is part of a change */
  'changes.portable-text.empty-inline-object': '空の {{inlineObjectType}}',
  /** Portable Text diff: An empty object is the result of adding/removing an annotation */
  'changes.portable-text.empty-object-annotation': '空の {{annotationType}}',
  /** Portable Text diff: Added a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_added': '空のテキストを追加しました',
  /** Portable Text diff: Changed a block that contained no text (eg empty block) */
  'changes.portable-text.empty-text_changed': '空のテキストを変更しました',
  /** Portable Text diff: Removed a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_removed': '空のテキストを削除しました',
  /** Portable Text diff: An inline object was added */
  'changes.portable-text.inline-object_added': 'インラインオブジェクトを追加しました',
  /** Portable Text diff: An inline object was changed */
  'changes.portable-text.inline-object_changed': 'インラインオブジェクトを変更しました',
  /** Portable Text diff: An inline object was removed */
  'changes.portable-text.inline-object_removed': 'インラインオブジェクトを削除しました',
  /** Portable Text diff: An inline object was left unchanged */
  'changes.portable-text.inline-object_unchanged': 'インラインオブジェクトは変更されていません',
  /** Portable Text diff: Added a chunk of text */
  'changes.portable-text.text_added': 'テキストを追加しました',
  /** Portable Text diff: Removed a chunk of text */
  'changes.portable-text.text_removed': 'テキストを削除しました',
  /** Portable Text diff: Annotation has an unknown schema type */
  'changes.portable-text.unknown-annotation-schema-type': '未知のスキーマタイプ',
  /** Portable Text diff: Inline object has an unknown schema type */
  'changes.portable-text.unknown-inline-object-schema-type': '未知のスキーマタイプ',
  /** Label for when the action of the change was a removal, eg a field was cleared, an array item was removed, an asset was deselected or similar */
  'changes.removed-label': '削除されました',
  /** Title for the Review Changes pane */
  'changes.title': '変更をレビュー',

  /** --- Common components --- */
  /** Tooltip text for context menu buttons */
  'common.context-menu-button.tooltip': 'もっと見る',
  /** Default text for dialog cancel button */
  'common.dialog.cancel-button.text': 'キャンセル',
  /** Default text for dialog confirm button */
  'common.dialog.confirm-button.text': '確認',
  /** Default text in shared loader text / spinner lockup */
  'common.loading': '読み込み中',

  /** --- Configuration issues --- */
  /** Tooltip displayed on configuration issues button */
  'configuration-issues.button.tooltip': '設定の問題を発見',

  /** The fallback title for an ordering menu item if no localized titles are provided. */
  'default-menu-item.fallback-title': '{{title}}で並べ替え',

  /** Title for the default ordering/SortOrder if no orderings are provided and the caption field is found */
  'default-orderings.caption': 'キャプションで並べ替え',
  /** Title for the default ordering/SortOrder if no orderings are provided and the description field is found */
  'default-orderings.description': '説明で並べ替え',
  /** Title for the default ordering/SortOrder if no orderings are provided and the header field is found */
  'default-orderings.header': 'ヘッダーで並べ替え',
  /** Title for the default ordering/SortOrder if no orderings are provided and the heading field is found */
  'default-orderings.heading': '見出しで並べ替え',
  /** Title for the default ordering/SortOrder if no orderings are provided and the label field is found */
  'default-orderings.label': 'ラベルで並べ替え',
  /** Title for the default ordering/SortOrder if no orderings are provided and the name field is found */
  'default-orderings.name': '名前で並べ替え',
  /** Title for the default ordering/SortOrder if no orderings are provided and the title field is found */
  'default-orderings.title': 'タイトルで並べ替え',

  /** Label to show in the document footer indicating the last edited date of the document */
  'document-status.edited': '{{date}}に編集されました',
  /** Label to show in the document footer indicating the document is not published*/
  'document-status.not-published': '未公開',
  /** Label to show in the document footer indicating the published date of the document */
  'document-status.published': '{{date}}に公開されました',

  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.duplicate-keys-alert.details.additional-description':
    '<code>_key</code>プロパティの値は一意の文字列でなければなりません。',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property of each elements has been generated non-uniquely. */
  'form.error.duplicate-keys-alert.details.description':
    'これは通常、APIクライアントを使用してアイテムが作成されたときに発生し、各要素の<code>_key</code>プロパティが一意に生成されていない場合に起こります。',
  /** Developer info */
  'form.error.duplicate-keys-alert.details.title': '開発者情報',
  /** Generate unique keys */
  'form.error.duplicate-keys-alert.generate-button.text': '一意のキーを生成',
  /** Several items in this list share the same identifier (key). Every item must have an unique identifier. */
  'form.error.duplicate-keys-alert.summary':
    'このリストの複数のアイテムが同じ識別子（キー）を共有しています。すべてのアイテムには一意の識別子が必要です。',
  /** Non-unique keys */
  'form.error.duplicate-keys-alert.title': '一意でないキー',
  /** Error text shown when a field with a given name cannot be found in the schema or is conditionally hidden but explicitly told to render  */
  'form.error.field-not-found':
    'フィールド "{{fieldName}}" がメンバーの中に見つからないか、条件付きで非表示になっているが明示的にレンダリングするよう指示されています – スキーマで定義されていることを確認し、条件付きで非表示になっていないかを検証してください。',
  /** Add missing keys */
  'form.error.missing-keys-alert.add-button.text': '不足しているキーを追加',
  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.missing-keys-alert.details.additional-description':
    '<code>_key</code>プロパティの値は一意の文字列でなければなりません。',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property has not been included. */
  'form.error.missing-keys-alert.details.description':
    'これは通常、APIクライアントを使用してアイテムが作成され、<code>_key</code>プロパティが含まれていない場合に発生します。',
  /** Developer info */
  'form.error.missing-keys-alert.details.title': '開発者情報',
  /** Some items in the list are missing their keys. This must be fixed in order to edit the list. */
  'form.error.missing-keys-alert.summary':
    'リスト内のいくつかのアイテムにキーがありません。リストを編集するためには、これを修正する必要があります。',
  /** Missing keys */
  'form.error.missing-keys-alert.title': '不足しているキー',
  /** This usually happens when items are created using an API client, or when a custom input component has added invalid data to the list. */
  'form.error.mixed-array-alert.details.description':
    'これは通常、APIクライアントを使用してアイテムが作成された場合、またはカスタム入力コンポーネントがリストに無効なデータを追加した場合に発生します。',
  /** Developer info */
  'form.error.mixed-array-alert.details.title': '開発者情報',
  /**  Remove non-object values */
  'form.error.mixed-array-alert.remove-button.text': 'オブジェクトでない値を削除',
  /** Some items in this list are not objects. This must be fixed in order to edit the list. */
  'form.error.mixed-array-alert.summary':
    'このリストのいくつかのアイテムはオブジェクトではありません。リストを編集するためには、これを修正する必要があります。',
  /** Invalid list values */
  'form.error.mixed-array-alert.title': '無効なリスト値',
  /** Error text shown when form is unable to find an array item at a given indexed path */
  'form.error.no-array-item-at-index':
    '指定されたパス<code>{{path}}</code>でインデックス<code>{{index}}</code>の配列アイテムが見つかりません',
  /** Error text shown when form is unable to find an array item at a given keyed path */
  'form.error.no-array-item-at-key':
    '指定されたパス<code>{{path}}</code>で`_key` <code>"{{key}}"</code>の配列アイテムが見つかりません',
  /** Form field deprecated label */
  'form.field.deprecated-label': '非推奨',
  /** Fallback title shown above field if it has no defined title */
  'form.field.untitled-field-label': '無題',
  /** Fallback title shown above fieldset if it has no defined title */
  'form.field.untitled-fieldset-label': '無題',
  /** Accessibility label for the icon that indicates the field has a validation error */
  'form.validation.has-error-aria-label': 'エラーがあります',
  /** Accessibility label for the icon that indicates the field has validation information */
  'form.validation.has-info-aria-label': '情報があります',
  /** Accessibility label for the icon that indicates the field has a validation warning */
  'form.validation.has-warning-aria-label': '警告があります',
  /** Text shown when summarizing validation information, when the field has one or more errors */
  'form.validation.summary.errors-count_one': '{{count}}つのエラー',
  'form.validation.summary.errors-count_other': '{{count}}つのエラー',
  /** Text shown when summarizing validation information, when the field has one or more warnings */
  'form.validation.summary.warnings-count_one': '{{count}}件の警告',
  'form.validation.summary.warnings-count_other': '{{count}}件の警告',

  'free-trial.tooltip.days-count_other': '{{count}}日間のトライアルが残っています',
  /** Tooltip for free trial navbar button, once trial has ended */
  'free-trial.tooltip.trial-finished': 'プロジェクトをアップグレードしてください',

  /**
   * Label for "contact sales" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.contact-sales': 'セールスに連絡する',
  /**
   * Label for "help and support" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.help-and-support': 'ヘルプとサポート',
  /**
   * Label for "join our community" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.join-our-community': '私たちのコミュニティに参加する',
  /** Information for what the latest sanity version is */
  'help-resources.latest-sanity-version': '最新バージョンは {{latestVersion}}です',
  /** Information for what studio version the current studio is running */
  'help-resources.studio-version': 'Sanity Studioバージョン {{studioVersion}}',
  /** Title for help and resources menus */
  'help-resources.title': 'ヘルプとリソース',

  /** Text for button to cancel an ongoing upload */
  'input.files.common.cancel-upload': 'アップロードをキャンセル',
  /** Text for file input button in upload placeholder */
  'input.files.common.upload-placeholder.file-input-button.text': 'アップロード',
  /** Uploading <FileName/> */
  'input.files.common.upload-progress': '<FileName/>をアップロード中',
  /** The referenced document cannot be opened, because the URL failed to be resolved */
  'input.reference.document-cannot-be-opened.failed-to-resolve-url':
    'このドキュメントは開けません（StudioへのURL解決に失敗しました）',

  /** Label for adding item after a specific array item */
  'inputs.array.action.add-after': '後にアイテムを追加',
  /** Label for adding item before a specific array item */
  'inputs.array.action.add-before': '前にアイテムを追加',
  /** Label for adding array item action when the schema allows for only one schema type */
  'inputs.array.action.add-item': 'アイテムを追加',
  /**
   * Label for adding one array item action when the schema allows for multiple schema types,
   * eg. will prompt the user to select a type once triggered
   */
  'inputs.array.action.add-item-select-type': 'アイテムを追加…',
  /** Array drag handle button tooltip */
  'inputs.array.action.drag.tooltip': 'ドラッグして順序を変更',
  /** Label for duplicating an array item  */
  'inputs.array.action.duplicate': '複製',
  /** Label for editing the item of a specific type, eg "Edit Person" */
  'inputs.array.action.edit': '{{itemTypeTitle}}を編集',
  /** Label for removing an array item action  */
  'inputs.array.action.remove': '削除',
  /** Label for removing action when an array item has an error  */
  'inputs.array.action.remove-invalid-item': '削除',
  /** Label for viewing the item of a specific type, eg "View Person" */
  'inputs.array.action.view': '{{itemTypeTitle}}を見る',
  /** Error description for the array item tooltip that explains that the current item can still be moved or deleted but not edited since the schema definition is not found */
  'inputs.array.error.can-delete-but-no-edit-description':
    'このアイテムは移動または削除することはできますが、そのタイプのスキーマ定義が見つからないため編集はできません。',
  /** Error label for toast when array could not resolve the initial value */
  'inputs.array.error.cannot-resolve-initial-value-title':
    'タイプの初期値を解決できません: {{schemaTypeTitle}}: {{errorMessage}}。',
  /** Error label for toast when trying to upload one array item of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_one':
    '次のアイテムはアップロードできません。コンテンツタイプから配列アイテムへの変換方法がわかりません。:',
  /** Error label for toast when trying to upload multiple array items of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_other':
    '次のアイテムはアップロードできません。コンテンツタイプから配列アイテムへの変換方法がわかりません。:',
  /** Error description for the array item tooltip that explains that the current type item is not valid for the list  */
  'inputs.array.error.current-schema-not-declare-description':
    '現在のスキーマはこのリストに<code>{{typeName}}</code>タイプのアイテムを有効として宣言していません。これは、そのタイプが有効なアイテムタイプとして削除されたことを意味するか、または他の誰かがまだデプロイされていない自分のローカルスキーマにそれを追加したことを意味するかもしれません。',
  /** Error description to show how the item is being represented in the json format */
  'inputs.array.error.json-representation-description': 'このアイテムのJSON表現:',
  /** Error description for the array item tooltip that explains what the error means with more context */
  'inputs.array.error.type-is-incompatible-prompt':
    'このリストには<code>{{typeName}}</code>タイプのアイテムは有効ではありません',
  /** Error title for when an item type within an array input is incompatible, used in the tooltip */
  'inputs.array.error.type-is-incompatible-title': 'これはなぜ起こるのですか？',
  /** Error label for unexpected errors in the Array Input */
  'inputs.array.error.unexpected-error': '予期せぬエラー: {{error}}',
  /** Label for when the array input doesn't have any items */
  'inputs.array.no-items-label': 'アイテムなし',
  /** Label for read only array fields */
  'inputs.array.read-only-label': 'このフィールドは読み取り専用です',
  /** Label for when the array input is resolving the initial value for the item */
  'inputs.array.resolving-initial-value': '初期値を解決中…',
  /** Placeholder value for datetime input */
  'inputs.datetime.placeholder': '例: {{example}}',
  /** Acessibility label for button to open file options menu */
  'inputs.file.actions-menu.file-options.aria-label': 'ファイルオプションメニューを開く',
  /** Browse */
  'inputs.file.browse-button.text': '参照',
  /** Select file */
  'inputs.file.dialog.title': 'ファイルを選択',
  /** Unknown member kind: `{{kind}}` */
  'inputs.file.error.unknown-member-kind': '未知のメンバー種類: {{kind}}',
  /** The value of this field is not a valid file. Resetting this field will let you choose a new file. */
  'inputs.file.invalid-file-warning.description':
    'このフィールドの値は有効なファイルではありません。このフィールドをリセットすると、新しいファイルを選択できます。',
  /** Reset value */
  'inputs.file.invalid-file-warning.reset-button.text': '値をリセット',
  /** Invalid file value */
  'inputs.file.invalid-file-warning.title': '無効なファイル値',
  /** Select */
  'inputs.file.multi-browse-button.text': '選択',
  /** The upload could not be completed at this time. */
  'inputs.file.upload-failed.description': '現在、アップロードを完了できませんでした。',
  /** Upload failed */
  'inputs.file.upload-failed.title': 'アップロード失敗',
  /** Clear field */
  'inputs.files.common.actions-menu.clear-field.label': 'フィールドをクリア',
  /** Copy URL */
  'inputs.files.common.actions-menu.copy-url.label': 'URLをコピー',
  /** Download */
  'inputs.files.common.actions-menu.download.label': 'ダウンロード',
  /** The URL is copied to the clipboard */
  'inputs.files.common.actions-menu.notification.url-copied':
    'URLがクリップボードにコピーされました',
  /** Replace */
  'inputs.files.common.actions-menu.replace.label': '置き換え',
  /** Upload */
  'inputs.files.common.actions-menu.upload.label': 'アップロード',
  /** Drop to upload */
  'inputs.files.common.drop-message.drop-to-upload': 'ドロップしてアップロード',
  /** Drop to upload `{{count}}` file */
  'inputs.files.common.drop-message.drop-to-upload-multi_one':
    '{{count}}ファイルをアップロードするためにドロップ',
  /** Drop to upload `{{count}}` files */
  'inputs.files.common.drop-message.drop-to-upload-multi_other':
    '{{count}}ファイルをアップロードするためにドロップ',
  /** Can't upload this file here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_one':
    'このファイルはここにアップロードできません',
  /** Can't upload any of these files here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_other':
    'これらのファイルはどれもここにアップロードできません',
  /** `{{count}}` file can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_one':
    '{{count}}ファイルはここにアップロードできません',
  /** `{{count}}` files can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_other':
    '{{count}}ファイルはここにアップロードできません',
  /** Cannot upload `{{count}}` files */
  'inputs.files.common.placeholder.cannot-upload-some-files_one':
    'ファイルをアップロードできません',
  'inputs.files.common.placeholder.cannot-upload-some-files_other':
    '{{count}}個のファイルをアップロードできません',
  /** Drag or paste type here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_file':
    'ここにファイルをドラッグまたは貼り付け',
  /** Drag or paste image here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_image':
    'ここに画像をドラッグまたは貼り付け',
  /** Drop to upload file */
  'inputs.files.common.placeholder.drop-to-upload_file': 'ファイルをドロップしてアップロード',
  /** Drop to upload image */
  'inputs.files.common.placeholder.drop-to-upload_image': '画像をドロップしてアップロード',
  /** Read only */
  'inputs.files.common.placeholder.read-only': '読み取り専用',
  /** Can't upload files here */
  'inputs.files.common.placeholder.upload-not-supported': 'ここにファイルをアップロードできません',
  /** Clear upload */
  'inputs.files.common.stale-upload-warning.clear': 'アップロードをクリア',
  /** An upload has made no progress for at least `{{staleThresholdMinutes}}` minutes and likely got interrupted. You can safely clear the incomplete upload and try uploading again. */
  'inputs.files.common.stale-upload-warning.description':
    'アップロードは少なくとも{{staleThresholdMinutes}}分間進行しておらず、おそらく中断されました。不完全なアップロードを安全にクリアして、再度アップロードを試みることができます。',
  /** Incomplete upload */
  'inputs.files.common.stale-upload-warning.title': '不完全なアップロード',
  /** Tooltip text for action to crop image */
  'inputs.image.actions-menu.crop-image-tooltip': '画像を切り抜く',
  /** Accessibility label for button to open image edit dialog */
  'inputs.image.actions-menu.edit-details.aria-label': '画像編集ダイアログを開く',
  /** Accessibility label for button to open image options menu */
  'inputs.image.actions-menu.options.aria-label': '画像オプションメニューを開く',
  /** Select */
  'inputs.image.browse-menu.text': '選択',
  /** Cannot upload this file here */
  'inputs.image.drag-overlay.cannot-upload-here':
    'ここにファイルをアップロードすることはできません',
  /** Drop image to upload */
  'inputs.image.drag-overlay.drop-to-upload-image': 'アップロードするために画像をドロップ',
  /** This field is read only */
  'inputs.image.drag-overlay.this-field-is-read-only': 'このフィールドは読み取り専用です',
  /** Unknown member kind: `{{kind}}` */
  'inputs.image.error.unknown-member-kind': '不明なメンバーの種類: {{kind}}',
  /** Edit hotspot and crop */
  'inputs.image.hotspot-dialog.title': 'ホットスポットと切り抜きを編集',
  /** The value of this field is not a valid image. Resetting this field will let you choose a new image. */
  'inputs.image.invalid-image-warning.description':
    'このフィールドの値は有効な画像ではありません。このフィールドをリセットすると、新しい画像を選択できます。',
  /** Reset value */
  'inputs.image.invalid-image-warning.reset-button.text': '値をリセット',
  /** Invalid image value */
  'inputs.image.invalid-image-warning.title': '無効な画像値',
  /** Preview of uploaded image */
  'inputs.image.preview-uploaded-image': 'アップロードされた画像のプレビュー',
  /** The upload could not be completed at this time. */
  'inputs.image.upload-error.description': '現在、アップロードを完了することはできません。',
  /** Upload failed */
  'inputs.image.upload-error.title': 'アップロードに失敗しました',
  /** Adjust the rectangle to crop image. Adjust the circle to specify the area that should always be visible. */
  'inputs.imagetool.description':
    '画像をクロップするために四角形を調整します。常に表示されるべきエリアを指定するために円を調整します。',
  /** Error: `{{errorMessage}}` */
  'inputs.imagetool.load-error': 'エラー: {{errorMessage}}',
  /** Hotspot & Crop */
  'inputs.imagetool.title': 'ホットスポット & クロップ',
  /** Convert to `{{targetType}}` */
  'inputs.invalid-value.convert-button.text': '<code>{{targetType}}</code>に変換',
  /** The current value (<code>`{{actualType}}`</code>) */
  'inputs.invalid-value.current-type': '現在の値(<code>{{actualType}}</code>)',
  /** The property value is stored as a value type that does not match the expected type. */
  'inputs.invalid-value.description':
    'プロパティ値は、期待されるタイプと一致しない値タイプとして保存されています。',
  /** The value of this property must be of type <code>`{{validType}}`</code> according to the schema. */
  'inputs.invalid-value.details.description':
    'このプロパティの値は、スキーマによると<code>{{validType}}</code>タイプでなければなりません。',
  /** Only the following types are valid here according to schema: */
  'inputs.invalid-value.details.multi-type-description':
    'スキーマによると、ここで有効なのは次のタイプのみです:',
  /** Mismatching value types typically occur when the schema has recently been changed. */
  'inputs.invalid-value.details.possible-reason':
    '値のタイプの不一致は、通常、スキーマが最近変更されたときに発生します。',
  /** Developer info */
  'inputs.invalid-value.details.title': '開発者情報',
  /** -- Invalid Value Input -- */
  /** Reset value */
  'inputs.invalid-value.reset-button.text': '値をリセット',
  /** Invalid property value */
  'inputs.invalid-value.title': '無効なプロパティ値',
  /** Field groups */
  'inputs.object.field-group-tabs.aria-label': 'フィールドグループ',
  /** Read-only field description */
  'inputs.object.unknown-fields.read-only.description':
    'このフィールドはドキュメントのスキーマによると<strong>読み取り専用</strong>であり、解除することはできません。Studioでこれを解除できるようにするには、スキーマのエンクロージングタイプから<code>readOnly</code>フィールドを削除してください。',
  /** Remove field */
  'inputs.object.unknown-fields.remove-field-button.text': 'フィールドを削除',
  /** Encountered `{{count}}` fields that are not defined in the schema. */
  'inputs.object.unknown-fields.warning.description_one':
    'スキーマに定義されていないフィールドが見つかりました。',
  'inputs.object.unknown-fields.warning.description_other':
    'スキーマに定義されていない{{count}}個のフィールドが見つかりました。',
  /** Detailed description of unknown field warning */
  'inputs.object.unknown-fields.warning.details.description_one':
    'このフィールドはスキーマに定義されていません。これはフィールド定義が削除されたか、または他の誰かが自分のローカルプロジェクトに追加してまだ変更をデプロイしていないことを意味する可能性があります。',
  'inputs.object.unknown-fields.warning.details.description_other':
    'これらのフィールドはドキュメントのスキーマに定義されていません。これはフィールド定義が削除されたか、または他の誰かが自分のローカルプロジェクトに追加してまだ変更をデプロイしていないことを意味する可能性があります。',
  /** Developer info */
  'inputs.object.unknown-fields.warning.details.title': '開発者情報',
  /** Unknown field found */
  'inputs.object.unknown-fields.warning.title_one': '未知のフィールドが見つかりました',
  'inputs.object.unknown-fields.warning.title_other': '未知のフィールドが見つかりました',
  /** Collapse the editor to save screen space  */
  'inputs.portable-text.action.collapse-editor': 'エディターを折りたたむ',
  /** Aria label for action to edit an existing annotation */
  'inputs.portable-text.action.edit-annotation-aria-label': '注釈を編集',
  /** Expand the editor to give more editing space */
  'inputs.portable-text.action.expand-editor': 'エディターを展開する',
  /** Label label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block': '{{typeName}}を挿入する',
  /** Accessibility label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block-aria-label': '{{typeName}}を挿入する（ブロック）',
  /** Label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object': '{{typeName}}を挿入する',
  /** Accessibility label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object-aria-label':
    '{{typeName}}を挿入する（インライン）',
  /** Aria label for action to remove an annotation */
  'inputs.portable-text.action.remove-annotation-aria-label': '注釈を削除',
  /** Label for activate on focus with context of click and not focused */
  'inputs.portable-text.activate-on-focus-message_click': 'クリックしてアクティブにする',
  /** Label for activate on focus with context of click and focused */
  'inputs.portable-text.activate-on-focus-message_click-focused':
    'クリックまたはスペースキーを押してアクティブにする',
  /** Label for activate on focus with context of tap and not focused */
  'inputs.portable-text.activate-on-focus-message_tap': 'タップしてアクティブにする',
  /**Aria label for the annotation object */
  'inputs.portable-text.annotation-aria-label': '注釈オブジェクト',
  /** Title for dialog that allows editing an annotation */
  'inputs.portable-text.annotation-editor.title': '{{schemaType}}を編集する',
  /** Title of the default "link" annotation */
  'inputs.portable-text.annotation.link': 'リンク',
  /**Aria label for the block object */
  'inputs.portable-text.block.aria-label': 'ブロックオブジェクト',
  /** Label for action to edit a block item, in the case where it is editable */
  'inputs.portable-text.block.edit': '編集',
  /** Accessibility label for the button that opens the actions menu on blocks */
  'inputs.portable-text.block.open-menu-aria-label': 'メニューを開く',
  /** Label for action to open a reference, in the case of block-level reference types */
  'inputs.portable-text.block.open-reference': '参照を開く',
  /** Label for action to remove a block item */
  'inputs.portable-text.block.remove': '削除',
  /** Label for action to view a block item, in the case where it is read-only and thus cannot be edited */
  'inputs.portable-text.block.view': '表示',
  /** Title of the "code" decorator */
  'inputs.portable-text.decorator.code': 'コード',
  /** Title of the "em" (emphasis) decorator */
  'inputs.portable-text.decorator.emphasis': 'イタリック',
  /** Title of the "strike-through" decorator */
  'inputs.portable-text.decorator.strike-through': '取り消し線',
  /** Title of the "strong" decorator */
  'inputs.portable-text.decorator.strong': '太字',
  /** Title of the "underline" decorator */
  'inputs.portable-text.decorator.underline': '下線',
  /** Placeholder text for when the editor is empty */
  'inputs.portable-text.empty-placeholder': '空',
  /**Aria label for the block object */
  'inputs.portable-text.inline-block.aria-label': 'インラインオブジェクト',
  /** Label for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit': 'オブジェクトを編集する',
  /** Aria label for icon for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit-aria-label': 'オブジェクトを編集',
  /** Label for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove': 'オブジェクトを削除する',
  /** Aria label for icon for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove-aria-label': 'オブジェクトを削除',
  /** Disclaimer text shown on invalid Portable Text value, when an action is available to unblock the user, but it is not guaranteed to be safe */
  'inputs.portable-text.invalid-value.action-disclaimer':
    '注意: 上記のアクションを実行することは一般的に安全ですが、不安な場合はスタジオの設定責任者に連絡してください。',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.action': 'オブジェクトを削除する',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.description':
    'キー<code>{{key}}</code>を持つブロックのキー{{childKey}}を持つ子はタイプ<code>{{childType}}</code>であり、スキーマでは許可されていません。',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.action': 'ブロックを削除する',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.description':
    'キー<code>{{key}}</code>を持つブロックは、<code>{{typeName}}</code>タイプであり、スキーマによって許可されていないタイプです。',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.action': '空のテキストスパンを挿入する',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.description':
    'キー<code>{{key}}</code>を持つテキストブロックにテキストスパンがありません。',
  /** Label for the button to ignore invalid values in the Portable Text editor */
  'inputs.portable-text.invalid-value.ignore-button.text': '無視する',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.action':
    'タイプ<code>{{expectedTypeName}}</code>を使用する',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.description':
    'キー<code>{{key}}</code>を持つブロックのタイプ名が無効です。スキーマによると、<code>{{expectedTypeName}}</code>であるべきです。',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.action': '空のテキスト値を設定する',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.description':
    'キー<code>{{key}}</code>を持つブロックのキー{{childKey}}を持つスパンには、欠落しているか無効な<code>text</code>プロパティがあります。',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.action':
    'タイプ<code>{{expectedTypeName}}</code>を使用する',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.description':
    'キー<code>{{key}}</code>を持つブロックにタイプ名がありません。スキーマによると、<code>{{expectedTypeName}}</code>であるべきです。',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.action': 'ランダムなキーを割り当てる',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.description':
    'キー<code>{{key}}</code>を持つブロックのインデックス<code>{{index}}</code>にある子には<code>_key</code>プロパティがありません。',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.action': 'オブジェクトを削除する',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.description':
    'キー<code>{{key}}</code>を持つブロックのキー{{childKey}}を持つ子には<code>_type</code>プロパティがありません。',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.action': 'ランダムなキーを割り当てる',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.description':
    'インデックス<code>{{index}}</code>のブロックに必要な<code>_key</code>プロパティがありません。',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.action': 'ブロックを削除する',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.description':
    'キー<code>{{key}}</code>を持つテキストブロックに無効または欠落している`children`プロパティがあります。',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.action': 'プロパティを追加する',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.description':
    'キー<code>{{key}}</code>を持つテキストブロックに無効または欠落している`markDefs`プロパティがあります。',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.action': 'ブロックを削除する',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.description':
    'キー<code>{{key}}</code>を持つブロックにタイプ名がありません。',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.action': 'アイテムを削除する',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.description':
    'キー<code>{{key}}</code>を持つブロックのインデックス<code>{{index}}</code>にある子はオブジェクトではありません。',
  /** Action presented when the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.action': '値を未設定にする',
  /** Text explaining that the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.description':
    '値はPortable Textブロックの配列、またはundefinedでなければなりません。',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.action': '項目を削除する',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.description':
    '<code>{{index}}</code>の項目はオブジェクトではありません。',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.action': '許可されていないマークを削除する',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.description':
    'キー<code>{{key}}</code>を持つテキストブロックには、スキーマで許可されていないマーク<code>({{orphanedMarks, list}})</code>が含まれています。',
  /** Title for the alert indicating that the Portable Text field has an invalid value */
  'inputs.portable-text.invalid-value.title': 'Portable Textの値が無効です',
  /** Title of "bulleted" list type */
  'inputs.portable-text.list-type.bullet': '箇条書きリスト',
  /** Title of numbered list type */
  'inputs.portable-text.list-type.number': '番号付きリスト',
  /** Title of the "h1" block style */
  'inputs.portable-text.style.h1': '見出し1',
  /** Title of the "h2" block style */
  'inputs.portable-text.style.h2': '見出し2',
  /** Title of the "h3" block style */
  'inputs.portable-text.style.h3': '見出し3',
  /** Title of the "h4" block style */
  'inputs.portable-text.style.h4': '見出し4',
  /** Title of the "h5" block style */
  'inputs.portable-text.style.h5': '見出し5',
  /** Title of the "h6" block style */
  'inputs.portable-text.style.h6': '見出し6',
  /** Title shown when multiple blocks of varying styles is selected */
  'inputs.portable-text.style.multiple': '複数',
  /** Title of fallback when no style is given for a block */
  'inputs.portable-text.style.none': 'スタイルなし',
  /** Title of the "normal" block style */
  'inputs.portable-text.style.normal': '標準',
  /** Title of the "quote" block style */
  'inputs.portable-text.style.quote': '引用',
  /** Label for action to clear the current value of the reference field */
  'inputs.reference.action.clear': 'クリア',
  /** Label for action to create a new document from the reference input */
  'inputs.reference.action.create-new-document': '新規作成',
  /** Label for action to create a new document from the reference input, when there are multiple templates or document types to choose from */
  'inputs.reference.action.create-new-document-select': '新規作成…',
  /** Label for action to duplicate the current item to a new item (used within arrays) */
  'inputs.reference.action.duplicate': '複製',
  /** Label for action that opens the referenced document in a new tab */
  'inputs.reference.action.open-in-new-tab': '新しいタブで開く',
  /** Label for action to remove the reference from an array */
  'inputs.reference.action.remove': '削除',
  /** Label for action to replace the current value of the field */
  'inputs.reference.action.replace': '置き換え',
  /** Label for action to cancel a previously initiated replace action  */
  'inputs.reference.action.replace-cancel': '置き換えをキャンセル',
  /** The cross-dataset reference field currently has a reference, but the feature has been disabled since it was created. This explains what can/cannot be done in its current state. */
  'inputs.reference.cross-dataset.feature-disabled-actions':
    'このフィールドの既存の参照をクリアすることはできますが、機能が無効にされている限り、異なるドキュメントに変更することはできません。',
  /** A cross-dataset reference field exists but the feature has been disabled. A <DocumentationLink> component is available. */
  'inputs.reference.cross-dataset.feature-disabled-description':
    'この機能は無効にされています。<DocumentationLink>ドキュメント</DocumentationLink>で有効化する方法を読んでください。',
  /** Title for a warning telling the user that the current project does not have the "cross dataset references" feature */
  'inputs.reference.cross-dataset.feature-unavailable-title':
    '利用できない機能: クロスデータセット参照',
  /** The cross-dataset reference points to a document with an invalid type  */
  'inputs.reference.cross-dataset.invalid-type':
    '参照されたドキュメントは無効なタイプです ({{typeName}}) <JsonValue/>',
  /** The referenced document will open in a new tab (due to external studio) */
  'inputs.reference.document-opens-in-new-tab': 'このドキュメントは新しいタブで開きます',
  /** Error title for when the document is unavailable (for any possible reason) */
  'inputs.reference.error.document-unavailable-title': 'ドキュメントが利用できません',
  /** Error title for when the referenced document failed to be loaded */
  'inputs.reference.error.failed-to-load-document-title':
    '参照されたドキュメントの読み込みに失敗しました',
  /** Error title for when the reference search returned a document that is not an allowed type for the field */
  'inputs.reference.error.invalid-search-result-type-title':
    '検索がこのリファレンスに無効なタイプを返しました: "{{returnedType}}"',
  /** Error description for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-description':
    '参照されたドキュメント（<code>{{documentId}}</code>）はタイプ<code>{{actualType}}</code>です。スキーマによると、参照されるドキュメントは<AllowedTypes />のタイプのみにすることができます。',
  /** Error title for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-title': '無効なタイプのドキュメント',
  /** Error description for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-description':
    '参照されたドキュメントにアクセスできませんでした。権限が不足しているためです',
  /** Error title for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-title': '権限が不足しています',
  /** Error description for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-description':
    '参照されているドキュメントは存在しません（ID: <code>{{documentId}}</code>）。参照を削除するか、別のドキュメントに置き換えることができます。',
  /** Error title for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-title': '見つかりません',
  /** Label for button that clears the reference when it points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document.clear-button-label': 'クリア',
  /** Error title for when the search for a reference failed. Note that the message sent by the backend may not be localized. */
  'inputs.reference.error.search-failed-title': '参照検索に失敗しました',
  /** Alternative text for the image shown in cross-dataset reference input */
  'inputs.reference.image-preview-alt-text': '参照されたドキュメントの画像プレビュー',
  /** Description for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-description':
    '<strong>{{referencedDocument}}</strong>が公開されており、この参照は今確定されるべきです。',
  /** Title for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-title': '参照を確定する',
  /** Description for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-description':
    '<strong>{{referencedDocument}}</strong>が公開されており、この参照は今強い参照に変換されるべきです。',
  /** Title for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-title': '強い参照に変換する',
  /** Label for button that triggers the action that strengthen a reference */
  'inputs.reference.incomplete-reference.strengthen-button-label': '強い参照に変換する',
  /** Label for button that triggers a retry attempt for reference metadata  */
  'inputs.reference.metadata-error.retry-button-label': '再試行',
  /** Title for alert shown when reference metadata fails to be loaded */
  'inputs.reference.metadata-error.title': '参照メタデータを読み込めません',
  /** Message shown when no documents were found that matched the given search string */
  'inputs.reference.no-results-for-query':
    '<strong>“{{searchTerm}}”</strong>に一致する結果はありません',
  /** Text for tooltip showing when a document was edited, using relative time (eg "how long ago was it edited?") */
  'inputs.reference.preview.edited-at-time': '編集された<RelativeTime/>',
  /** Accessibility label for icon indicating that document does _not_ have any unpublished changes */
  'inputs.reference.preview.has-no-unpublished-changes-aria-label': '未公開の編集はありません',
  /** Accessibility label for icon indicating that document has unpublished changes */
  'inputs.reference.preview.has-unpublished-changes-aria-label': '編集された',
  /** Accessibility label for icon indicating that document does _not_ have a published version */
  'inputs.reference.preview.is-not-published-aria-label': '未公開',
  /** Accessibility label for icon indicating that document has a published version */
  'inputs.reference.preview.is-published-aria-label': '公開済み',
  /** Text for tooltip indicating that a document has no unpublished edits */
  'inputs.reference.preview.no-unpublished-edits': '未公開の編集はありません',
  /** Text for tooltip indicating that a document has not yet been published */
  'inputs.reference.preview.not-published': '未公開',
  /** Text for tooltip showing when a document was published, using relative time (eg "how long ago was it published?") */
  'inputs.reference.preview.published-at-time': '<RelativeTime/>に公開されました',
  /** The referenced document no longer exist and might have been deleted (for weak references) */
  'inputs.reference.referenced-document-does-not-exist':
    '参照されたドキュメントはもう存在せず、削除された可能性があります（ドキュメントID: <code>{{documentId}}</code>）。',
  /** The referenced document could not be displayed to the user because of insufficient permissions */
  'inputs.reference.referenced-document-insufficient-permissions':
    '不十分な権限のため、参照されたドキュメントにアクセスできませんでした',
  /** Label for when the reference input is resolving the initial value for an item */
  'inputs.reference.resolving-initial-value': '初期値を解決中…',
  /** Placeholder shown in a reference input with no current value */
  'inputs.reference.search-placeholder': '検索するために入力してください',
  /** Explanation of the consequences of leaving the reference as strong instead of weak */
  'inputs.reference.strength-mismatch.is-strong-consquences':
    'この参照を弱いものに変換するか、この参照を削除することなく参照文書を削除することはできません。',
  /** Description for alert shown when a reference is supposed to be weak, but the actual value is strong */
  'inputs.reference.strength-mismatch.is-strong-description':
    'この参照は<em>強い</em>ですが、現在のスキーマによると<em>弱い</em>であるべきです。',
  /** Explanation of the consequences of leaving the reference as weak instead of strong */
  'inputs.reference.strength-mismatch.is-weak-consquences':
    'これにより、この参照を削除することなく参照されている文書を削除することが可能になり、このフィールドが存在しない文書を参照することになります。',
  /** Description for alert shown when a reference is supposed to be strong, but the actual value is weak */
  'inputs.reference.strength-mismatch.is-weak-description':
    'この参照は<em>弱い</em>ですが、現在のスキーマによると<em>強い</em>であるべきです。',
  /** Label for button that triggers the action that strengthens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.strengthen-button-label': '強い参照に変換する',
  /** Title for alert shown when a reference is supposed to be weak/strong, but the actual value is the opposite of what it is supposed to be */
  'inputs.reference.strength-mismatch.title': '参照の強さの不一致',
  /** Label for button that triggers the action that weakens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.weaken-button-label': '弱い参照に変換',
  /** Action message for generating the slug */
  'inputs.slug.action.generate': '生成',
  /** Loading message for when the input is actively generating a slug */
  'inputs.slug.action.generating': '生成中…',
  /** Error message for when the source to generate a slug from is missing */
  'inputs.slug.error.missing-source':
    'ソースがありません。スキーマの{{schemaType}}タイプでソースを確認してください',
  /** Placeholder for an empty tag input */
  'inputs.tags.placeholder': 'タグを入力してENTERを押してください…',
  /** Placeholder for an empty tag input on touch devices */
  'inputs.tags.placeholder_touch': 'タグを入力…',
  /** Convert to `{{targetType}}` */
  'inputs.untyped-value.convert-button.text': '<code>{{targetType}}</code>に変換',
  /** Encountered an object value without a <code>_type</code> property. */
  'inputs.untyped-value.description':
    '<code>_type</code>プロパティのないオブジェクト値に遭遇しました。',
  /** Either remove the <code>name</code> property of the object declaration, or set <code>_type</code> property on items. */
  'inputs.untyped-value.details.description':
    'オブジェクト宣言の<code>name</code>プロパティを削除するか、アイテムに<code>_type</code>プロパティを設定してください。',
  /** Current value (<code>object</code>): */
  'inputs.untyped-value.details.json-dump-prefix': '現在の値 (<code>object</code>):',
  /** The following types are valid here according to schema: */
  'inputs.untyped-value.details.multi-type-description':
    'スキーマによると、ここで有効なタイプは以下の通りです:',
  /** Developer info */
  'inputs.untyped-value.details.title': '開発者情報',
  /** Property value missing <code>_type</code> */
  'inputs.untyped-value.title': 'プロパティ値に<code>_type</code>がありません',
  /** Unset value */
  'inputs.untyped-value.unset-item-button.text': '値を未設定にする',

  /** The fallback explanation if no context is provided */
  'insufficient-permissions-message.not-authorized-explanation':
    'この機能にアクセスする権限がありません。',
  /** The explanation when unable to create any document at all */
  'insufficient-permissions-message.not-authorized-explanation_create-any-document':
    'ドキュメントを作成する権限がありません。',
  /** The explanation when unable to create a particular document */
  'insufficient-permissions-message.not-authorized-explanation_create-document':
    'このドキュメントを作成する権限がありません。',
  /** The explanation when unable to create a particular type of document */
  'insufficient-permissions-message.not-authorized-explanation_create-document-type':
    'この種類のドキュメントを作成する権限がありません。',
  /** The explanation when unable to create a new reference in a document */
  'insufficient-permissions-message.not-authorized-explanation_create-new-reference':
    '新しいリファレンスを作成する権限がありません。',
  /** The explanation when unable to delete a particular document */
  'insufficient-permissions-message.not-authorized-explanation_delete-document':
    'このドキュメントを削除する権限がありません。',
  /** The explanation when unable to discard changes in a particular document */
  'insufficient-permissions-message.not-authorized-explanation_discard-changes':
    'このドキュメントの変更を破棄する権限がありません。',
  /** The explanation when unable to duplicate a particular document */
  'insufficient-permissions-message.not-authorized-explanation_duplicate-document':
    'このドキュメントを複製する権限がありません。',
  /** The explanation when unable to publish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_publish-document':
    'このドキュメントを公開する権限がありません。',
  /** The explanation when unable to unpublish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_unpublish-document':
    'このドキュメントの公開を取り消す権限がありません。',
  /** Appears after the not-authorized message. Lists the current roles. */
  'insufficient-permissions-message.roles': 'あなたのロール: <Roles/>',
  /** The title for the insufficient permissions message component */
  'insufficient-permissions-message.title': '権限が不足しています',

  /** Unexpected error: `{{error}}` */
  'member-field-error.unexpected-error': '予期せぬエラー: {{error}}',

  /** Button label for "Create new document" button */
  'new-document.button': '新規作成',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are templates/types available for creation
   */
  'new-document.create-new-document-label': '新しいドキュメント…',
  /** Placeholder for the "filter" input within the new document menu */
  'new-document.filter-placeholder': 'フィルター',
  /** Loading indicator text within the new document menu */
  'new-document.loading': '読み込み中…',
  /** Accessibility label for the list displaying options in the new document menu */
  'new-document.new-document-aria-label': '新しいドキュメント',
  /** Message for when there are no document type options in the new document menu */
  'new-document.no-document-types-found': 'ドキュメントタイプが見つかりません',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are no templates/types to create from
   */
  'new-document.no-document-types-label': 'ドキュメントタイプがありません',
  /** Message for when no results are found for a specific search query in the new document menu */
  'new-document.no-results': '<strong>{{searchQuery}}</strong>に対する結果はありません',
  /** Aria label for the button that opens the "Create new document" popover/dialog */
  'new-document.open-dialog-aria-label': '新しいドキュメントを作成',
  /** Title for "Create new document" dialog */
  'new-document.title': '新しいドキュメントを作成',

  /** Label for action to manage members of the current studio project */
  'presence.action.manage-members': 'メンバーを管理する',
  /** Accessibility label for presence menu button */
  'presence.aria-label': 'ここにいる人',
  /** Message description for when no one else is currently present */
  'presence.no-one-else-description':
    'プロジェクトに人を招待して、オンライン状態を確認しましょう。',
  /** Message title for when no one else is currently present */
  'presence.no-one-else-title': '他に誰もいません',
  /** Message for when a user is not in a document (displayed in the global presence menu) */
  'presence.not-in-a-document': 'ドキュメントにいません',
  /** Tooltip content text for presence menu button */
  'presence.tooltip-content': '誰がここにいる',

  /** Fallback title shown when a preview does not provide a title */
  'preview.default.title-fallback': '無題',
  /** Fallback preview value for types that have "no value" (eg null, undefined) */
  'preview.fallback.no-value': '（値なし）',
  /** Alternative text for image being shown while image is being uploaded, in previews */
  'preview.image.file-is-being-uploaded.alt-text': '現在アップロード中の画像',

  /* Relative time, just now */
  'relative-time.just-now': 'たった今',

  /** Accessibility label to open search action when the search would go fullscreen (eg on narrower screens) */
  'search.action-open-aria-label': '検索を開く',
  /** Action label for adding a search filter */
  'search.action.add-filter': 'フィルターを追加',
  /** Action label for clearing search filters */
  'search.action.clear-filters': 'フィルターをクリア',
  /** Label for action to clear recent searches */
  'search.action.clear-recent-searches': '最近の検索をクリア',
  /** Accessibility label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-aria-label': '選択されたフィルターをクリア',
  /** Label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-label': 'クリア',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to close the search */
  'search.action.close-search-aria-label': '検索を閉じる',
  /** Accessibility label for filtering by document type */
  'search.action.filter-by-document-type-aria-label': 'ドキュメントタイプでフィルター',
  /** Accessibility action label for removing an already applied search filter */
  'search.action.remove-filter-aria-label': 'フィルターを削除',
  /**
   * Text displayed when either no document type(s) have been selected, or we need a fallback,
   * eg "Search for all types".
   */
  'search.action.search-all-types': 'すべてのドキュメントを検索',
  /**
   * Text displayed when we are able to determine one or more document types that will be used for
   * searching, and can fit within the space assigned by the design.
   */
  'search.action.search-specific-types': '{{types, list}}の検索',
  /**
   * Text displayed when we are able to determine one or more document types that will be used for
   * searching, but cannot list them all within the space assigned by the design, so we need an
   * additional "and X more" suffix. Allows using pluralization suffixes, eg `_one`, `_other` etc.
   */
  'search.action.search-specific-types-truncated': '{{types, list}} +{{count}}件をさらに検索',
  /** Dialog title for action to select an asset of unknown type */
  'search.action.select-asset': 'アセットを選択',
  /** Dialog title for action to select a file asset */
  'search.action.select-asset_file': 'ファイルを選択',
  /** Dialog title for action to select an image asset */
  'search.action.select-asset_image': '画像を選択',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-aria-label_hide': 'フィルターを隠す',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-aria-label_show': 'フィルターを表示',
  /** Label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-label_hide': 'フィルターを隠す',
  /** Label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-label_show': 'フィルターを表示',
  /** Tooltip text for the global search button */
  'search.button.tooltip': '検索',
  /**
   * A list of provided types (use `list` formatter preferably).
   */
  'search.document-type-list': '{{types, list}}',
  /**
   * In the context of a list of document types - no filtering selection has been done,
   * thus the default is "all types".
   */
  'search.document-type-list-all-types': '全てのタイプ',
  /**
   * A list of provided types that has been truncated - more types are included but not displayed,
   * thus we need to indicate that there are more. Allows using pluralization suffixes,
   * eg `_one`, `_other` etc.
   */
  'search.document-type-list-truncated': '{{types, list}} +{{count}}件をさらに',
  /** Accessibility label for list displaying the available document types */
  'search.document-types-aria-label': 'ドキュメントタイプ',
  /** Label for when no document types matching the filter are found */
  'search.document-types-no-matches-found': '{{filter}}に一致するドキュメントタイプはありません',
  /** Description for error when a filter cannot be displayed, describes that you should check the schema */
  'search.error.display-filter-description':
    'これはスキーマに無効なオプションが定義されていることを示している可能性があります。',
  /** Title for error when a filter cannot be displayed (mainly a developer-oriented error) */
  'search.error.display-filter-title': 'このフィルターを表示する際にエラーが発生しました。',
  /** Description for error when no valid asset source is found, describes that you should check the the current studio config */
  'search.error.no-valid-asset-source-check-config-description':
    'スタジオの設定ファイルで有効になっていることを確認してください。',
  /** Description for error when no valid asset source is found, describes that only the default asset is supported */
  'search.error.no-valid-asset-source-only-default-description':
    '現在、デフォルトのアセットソースのみがサポートされています。',
  /** Title for error when no valid asset sources found */
  'search.error.no-valid-asset-source-title': '有効なアセットソースが見つかりませんでした。',
  /** Helpful description for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-help-description': 'もう一度試すか、接続を確認してください',
  /** Title label for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-title': '検索中に何か問題が発生しました',
  /**
   * Label for "All fields", a label that appears above the list of available fields when filtering.
   * If one or more document type has been chosen as filter, this label is replaced with a group of
   * fields per selected document type
   */
  'search.filter-all-fields-header': '全てのフィールド',
  /** Label for the action of changing from one file to a different file in asset search filter */
  'search.filter-asset-change_file': 'ファイルを変更',
  /** Label for the action of changing from one image to a different image in asset search filter */
  'search.filter-asset-change_image': '画像を変更',
  /** Label for the action of clearing the currently selected asset in an image/file filter */
  'search.filter-asset-clear': 'クリア',
  /** Label for the action of selecting a file in asset search filter */
  'search.filter-asset-select_file': 'ファイルを選択',
  /** Label for the action of selecting an image in asset search filter */
  'search.filter-asset-select_image': '画像を選択',
  /** Label for boolean filter - false */
  'search.filter-boolean-false': '偽',
  /** Label for boolean filter - true */
  'search.filter-boolean-true': '真',
  /** Accessibility label for list that lets you filter fields by title, when adding a new filter in search */
  'search.filter-by-title-aria-label': 'タイトルでフィルタ',
  /** Accessibility label for date filter input */
  'search.filter-date-aria-label': '日付',
  /** Accessibility label for selecting end date on the date range search filter */
  'search.filter-date-range-end-date-aria-label': '終了日',
  /** Accessibility label for selecting start date on the date range search filter */
  'search.filter-date-range-start-date-aria-label': '開始日',
  /**
   * Label for "Days"/"Months"/"Years" when selecting it as unit in "X days ago" search filter.
   * Capitalized, as it would be listed in a dropdown.
   */
  'search.filter-date-unit_days': '日',
  'search.filter-date-unit_months': '月',
  'search.filter-date-unit_years': '年',
  /** Accessibility label for selecting the unit (day/month/year) when adding "X days ago" search filter */
  'search.filter-date-unit-aria-label': '単位を選択',
  /** Accessibility label for the input value (days/months/years) when adding "X days ago" search filter */
  'search.filter-date-value-aria-label': '単位の値',
  /** Label for "field description" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-description': 'フィールド説明',
  /** Label for "field name" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-name': 'フィールド名',
  /** Label for "Used in document types", a list of the document types a field appears in. Shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-used-in-document-types': '使用されているドキュメントタイプ',
  /** Label for when no fields/filters are found for the given term */
  'search.filter-no-matches-found': '{{filter}}に一致するものはありません',
  /** Placeholder value for maximum numeric value filter */
  'search.filter-number-max-value-placeholder': '最大値',
  /** Placeholder value for minimum numeric value filter */
  'search.filter-number-min-value-placeholder': '最小値',
  /** Placeholder value for the number filter */
  'search.filter-number-value-placeholder': '値',
  /** Placeholder for the "Filter" input, when narrowing possible fields/filters */
  'search.filter-placeholder': 'フィルター',
  /** Label for the action of clearing the currently selected document in a reference filter */
  'search.filter-reference-clear': 'クリア',
  /**
   * Label for "shared fields", a label that appears above a list of fields that all filtered types
   * have in common, when adding a new filter. For instance, if "book" and "employee" both have a
   * "title" field, this field would be listed under "shared fields".
   * */
  'search.filter-shared-fields-header': '共有フィールド',
  /** Placeholder value for the string filter */
  'search.filter-string-value-placeholder': '値',
  /** Label/placeholder prompting user to select one of the predefined, allowed values for a string field */
  'search.filter-string-value-select-predefined-value': '選択…',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (singular) */
  'search.filters-aria-label_one': 'フィルター',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (plural) */
  'search.filters-aria-label_other': 'フィルター',
  /** Label for instructions on how to use the search - displayed when no recent searches are available */
  'search.instructions': '<ControlsIcon/>を使用して検索を絞り込む',
  /** Helpful description for when no search results are found */
  'search.no-results-help-description': '別のキーワードを試すか、フィルターを調整してください',
  /** Title label for when no search results are found */
  'search.no-results-title': '結果が見つかりませんでした',
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
    '<Field/> <Operator>は</Operator> <Value>{{count}} アイテム</Value>',
  'search.operator.array-count-equal.description_other':
    '<Field/> <Operator>は</Operator> <Value>{{count}} アイテム</Value>',
  'search.operator.array-count-equal.name': '数量が等しい',
  /* Array should have a count greater than given filter value */
  'search.operator.array-count-gt.description_one':
    '<Field/> <Operator>は ></Operator> <Value>{{count}} アイテム</Value>',
  'search.operator.array-count-gt.description_other':
    '<Field/> <Operator>は ></Operator> <Value>{{count}} アイテム</Value>',
  'search.operator.array-count-gt.name': '数量がより大きい',
  /* Array should have a count greater than or equal to the given filter value */
  'search.operator.array-count-gte.description_one':
    '<Field/> <Operator>は ≥</Operator> <Value>{{count}} アイテム</Value>',
  'search.operator.array-count-gte.description_other':
    '<Field/> <Operator>は ≥</Operator> <Value>{{count}} アイテム</Value>',
  'search.operator.array-count-gte.name': '数量が以上',
  /* Array should have a count less than given filter value */
  'search.operator.array-count-lt.description_one':
    '<Field/> <Operator>は <</Operator> <Value>{{count}} アイテム</Value>',
  'search.operator.array-count-lt.description_other':
    '<Field/> <Operator>は <</Operator> <Value>{{count}} アイテム</Value>',
  'search.operator.array-count-lt.name': '数量がより少ない',
  /* Array should have a count less than or equal to the given filter value */
  'search.operator.array-count-lte.description_one':
    '<Field/> <Operator>は ≤</Operator> <Value>{{count}} アイテム</Value>',
  'search.operator.array-count-lte.description_other':
    '<Field/> <Operator>は ≤</Operator> <Value>{{count}} アイテム</Value>',
  'search.operator.array-count-lte.name': '数量が以下',
  /* Array should have a count that is not equal to the given filter value */
  'search.operator.array-count-not-equal.description_one':
    '<Field/> <Operator>は持っていない</Operator> <Value>{{count}} アイテム</Value>',
  'search.operator.array-count-not-equal.description_other':
    '<Field/> <Operator>は持っていない</Operator> <Value>{{count}} アイテム</Value>',
  'search.operator.array-count-not-equal.name': '数量が等しくない',
  /**
   * Array should have a count within the range of given filter values.
   * Gets passed `{{from}}` and `{{to}}` values.
   **/
  'search.operator.array-count-range.description':
    '<Field/> <Operator>は</Operator> <Value>{{from}} → {{to}} アイテムの間</Value>',
  'search.operator.array-count-range.name': '数量が範囲内',
  /* Array should include the given value */
  'search.operator.array-list-includes.description':
    '<Field/> <Operator>は含む</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-includes.name': '含む',
  /* Array should not include the given value */
  'search.operator.array-list-not-includes.description':
    '<Field/> <Operator>は含まない</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-not-includes.name': '含まない',
  /* Array should include the given reference */
  'search.operator.array-reference-includes.description':
    '<Field/> <Operator>は含む</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-includes.name': '含む',
  /* Array should not include the given reference */
  'search.operator.array-reference-not-includes.description':
    '<Field/> <Operator>は含まない</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-not-includes.name': '含まない',
  /* Asset (file) should be the selected asset */
  'search.operator.asset-file-equal.description':
    '<Field/> <Operator>は</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-equal.name': 'が等しい',
  /* Asset (file) should not be the selected asset */
  'search.operator.asset-file-not-equal.description':
    '<Field/> <Operator>は</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-not-equal.name': 'が等しくない',
  /* Asset (image) should be the selected asset */
  'search.operator.asset-image-equal.description':
    '<Field/> <Operator>は</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-equal.name': 'が等しい',
  /* Asset (image) should not be the selected asset */
  'search.operator.asset-image-not-equal.description':
    '<Field/> <Operator>は</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-not-equal.name': 'が等しくない',
  /**
   * Boolean value should be the given filter value (true/false).
   * Context passed is `true` and `false`, allowing for more specific translations:
   * - `search.operator.boolean-equal.description_true`
   * - `search.operator.boolean-equal.description_false`
   */
  'search.operator.boolean-equal.description':
    '<Field/> <Operator>は</Operator> <Value>{{value}}</Value>',
  'search.operator.boolean-equal.name': 'が等しい',
  /* Date should be after (later than) given filter value */
  'search.operator.date-after.description':
    '<Field/> <Operator>は後</Operator> <Value>{{value}}</Value>',
  'search.operator.date-after.name': 'より後',
  /* Date should be before (earlier than) given filter value */
  'search.operator.date-before.description':
    '<Field/> <Operator>は前</Operator> <Value>{{value}}</Value>',
  'search.operator.date-before.name': 'より前',
  /* Date should be the given filter value */
  'search.operator.date-equal.description':
    '<Field/> <Operator>は</Operator> <Value>{{value}}</Value>',
  'search.operator.date-equal.name': 'が等しい',
  /* Date should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-last.description':
    '<Field/> <Operator>は最後の</Operator> <Value>{{value}}</Value>',
  'search.operator.date-last.name': '最後の',
  /* Date should not be the given filter value */
  'search.operator.date-not-equal.description':
    '<Field/> <Operator>は</Operator> <Value>{{value}}</Value>',
  'search.operator.date-not-equal.name': 'が等しくない',
  /* Date should be within the range of given filter values */
  'search.operator.date-range.description': '<Field/> <Operator>は範囲内</Operator> <Value/>',
  'search.operator.date-range.name': '範囲内',
  /* Date and time should be after (later than) given filter value */
  'search.operator.date-time-after.description':
    '<Field/> <Operator>は後</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-after.name': 'より後',
  /* Date and time should be before (earlier than) given filter value */
  'search.operator.date-time-before.description':
    '<Field/> <Operator>は前</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-before.name': 'より前',
  /* Date and time should be the given filter value */
  'search.operator.date-time-equal.description':
    '<Field/> <Operator>は</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-equal.name': 'が等しい',
  /* Date and time should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-time-last.description':
    '<Field/> <Operator>は最後の</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-last.name': '最後の',
  /* Date and time should not be the given filter value */
  'search.operator.date-time-not-equal.description':
    '<Field/> <Operator>は</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-not-equal.name': 'が等しくない',
  /* Date and time should be within the range of given filter values */
  'search.operator.date-time-range.description': '<Field/> <Operator>は範囲内</Operator> <Value/>',
  'search.operator.date-time-range.name': '範囲内',
  /* Value should be defined */
  'search.operator.defined.description': '<Field/> <Operator>は</Operator> <Value>空でない</Value>',
  'search.operator.defined.name': '空でない',
  /* Value should not be defined */
  'search.operator.not-defined.description': '<Field/> <Operator>は</Operator> <Value>空</Value>',
  'search.operator.not-defined.name': '空',
  /* Number should be the given filter value */
  'search.operator.number-equal.description':
    '<Field/> <Operator>は</Operator> <Value>{{value}}</Value>',
  'search.operator.number-equal.name': 'が等しい',
  /* Number should be greater than given filter value */
  'search.operator.number-gt.description':
    '<Field/> <Operator>></Operator> <Value>{{value}}</Value>',
  'search.operator.number-gt.name': 'より大きい',
  /* Number should be greater than or the given filter value */
  'search.operator.number-gte.description':
    '<Field/> <Operator>≥</Operator> <Value>{{value}}</Value>',
  'search.operator.number-gte.name': '以上',
  /* Number should be less than given filter value */
  'search.operator.number-lt.description':
    '<Field/> <Operator><</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lt.name': 'より少ない',
  /* Number should be less than or the given filter value */
  'search.operator.number-lte.description':
    '<Field/> <Operator>≤</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lte.name': '以下',
  /* Number should not be the given filter value */
  'search.operator.number-not-equal.description':
    '<Field/> <Operator>は</Operator> <Value>{{value}}</Value>',
  'search.operator.number-not-equal.name': 'が等しくない',
  /* Number should be within the range of given filter values */
  'search.operator.number-range.description':
    '<Field/> <Operator>は範囲内</Operator> <Value>{{from}} → {{to}}</Value>',
  'search.operator.number-range.name': '範囲内',
  /* Portable Text should contain the given filter value */
  'search.operator.portable-text-contains.description':
    '<Field/> <Operator>は含む</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-contains.name': '含む',
  /* Portable Text should be the given filter value */
  'search.operator.portable-text-equal.description':
    '<Field/> <Operator>は</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-equal.name': 'が等しい',
  /* Portable Text should not contain the given filter value */
  'search.operator.portable-text-not-contains.description':
    '<Field/> <Operator>は含まない</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-contains.name': '含まない',
  /* Portable Text should not be the given filter value */
  'search.operator.portable-text-not-equal.description':
    '<Field/> <Operator>は</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-equal.name': 'が等しくない',
  /* References the given asset (file) */
  'search.operator.reference-asset-file.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-file.name': 'ファイル',
  /* References the given asset (image) */
  'search.operator.reference-asset-image.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-image.name': '画像',
  /* References the given document */
  'search.operator.reference-document.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-document.name': 'ドキュメント',
  /* Reference should be the given document */
  'search.operator.reference-equal.description':
    '<Field/> <Operator>は</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-equal.name': 'が等しい',
  /* Reference should not be the given document */
  'search.operator.reference-not-equal.description':
    '<Field/> <Operator>は</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-not-equal.name': 'が等しくない',
  /* Slug contains the given value */
  'search.operator.slug-contains.description':
    '<Field/> <Operator>は含む</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-contains.name': '含む',
  /* Slug equals the given filter value */
  'search.operator.slug-equal.description':
    '<Field/> <Operator>は</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-equal.name': 'が等しい',
  /* Slug does not contain the given value */
  'search.operator.slug-not-contains.description':
    '<Field/> <Operator>は含まない</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-contains.name': '含まない',
  /* Slug does not equal the given filter value */
  'search.operator.slug-not-equal.description':
    '<Field/> <Operator>は</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-equal.name': 'が等しくない',
  /* String contains the given filter value */
  'search.operator.string-contains.description':
    '<Field/> <Operator>は含む</Operator> <Value>{{value}}</Value>',
  'search.operator.string-contains.name': '含む',
  /* String equals the given filter value */
  'search.operator.string-equal.description':
    '<Field/> <Operator>は</Operator> <Value>{{value}}</Value>',
  'search.operator.string-equal.name': 'が等しい',
  /* String equals one of the predefined allowed values */
  'search.operator.string-list-equal.description':
    '<Field/> <Operator>は</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-equal.name': 'が等しい',
  /* String does not equal one of the predefined allowed values */
  'search.operator.string-list-not-equal.description':
    '<Field/> <Operator>は</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-not-equal.name': 'が等しくない',
  /* String does not contain the given filter value */
  'search.operator.string-not-contains.description':
    '<Field/> <Operator>は含まない</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-contains.name': '含まない',
  /* String does not equal the given filter value */
  'search.operator.string-not-equal.description':
    '<Field/> <Operator>は</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-equal.name': 'が等しくない',
  /** Label for the "Best match" search ordering type */
  'search.ordering.best-match-label': '最適なマッチ',
  /** Label for the "Created: Oldest first" search ordering type */
  'search.ordering.created-ascending-label': '作成日時: 古い順',
  /** Label for the "Created: Newest first" search ordering type */
  'search.ordering.created-descending-label': '作成日時: 新しい順',
  /** Label for the "Updated: Oldest first" search ordering type */
  'search.ordering.updated-ascending-label': '更新日時: 古い順',
  /** Label for the "Updated: Newest first" search ordering type */
  'search.ordering.updated-descending-label': '更新日時: 新しい順',
  /** Placeholder text for the global search input field */
  'search.placeholder': '検索',
  /** Accessibility label for the recent searches section, shown when no valid search terms has been given */
  'search.recent-searches-aria-label': '最近の検索',
  /** Label/heading shown for the recent searches section */
  'search.recent-searches-label': '最近の検索',
  /** Accessibility label for the search results section, shown when the user has typed valid terms */
  'search.search-results-aria-label': '検索結果',

  /** Accessibility label for the navbar status button */
  'status-button.aria-label': '設定ステータス',

  /** Description for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-description':
    'ドキュメント履歴のトランザクションは影響を受けていません。',
  /** Title for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-title':
    'ドキュメントの変更を取得中にエラーが発生しました。',
  /** Error description for when the document doesn't have history */
  'timeline.error.no-document-history-description':
    'ドキュメントの内容を変更すると、このメニューにドキュメントのバージョンが表示されます。',
  /** Error title for when the document doesn't have history */
  'timeline.error.no-document-history-title': 'ドキュメント履歴がありません',
  /** Error prompt when revision cannot be loaded */
  'timeline.error.unable-to-load-revision': 'リビジョンを読み込めませんでした',
  /** Label for when the timeline item is the latest in the history */
  'timeline.latest': '最新',
  /** Label for latest version for timeline menu dropdown */
  'timeline.latest-version': '最新バージョン',
  /** The aria-label for the list of revisions in the timeline */
  'timeline.list.aria-label': 'ドキュメントのリビジョン',
  /** Label for loading history */
  'timeline.loading-history': '履歴を読み込み中…',
  /** Label shown in review changes timeline when a document has been created */
  'timeline.operation.created': '作成された',
  /** Label shown in review changes timeline when a document has been created, with a timestamp */
  'timeline.operation.created_timestamp': '作成: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was initially created */
  'timeline.operation.created-initial': '作成された',
  /** Label shown in review changes timeline when a document was initially created, with a timestamp */
  'timeline.operation.created-initial_timestamp': '作成: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been deleted */
  'timeline.operation.deleted': '削除された',
  /** Label shown in review changes timeline when a document has been deleted, with a timestamp */
  'timeline.operation.deleted_timestamp': '削除: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been discarded */
  'timeline.operation.draft-discarded': '下書きを破棄',
  /** Label shown in review changes timeline when a draft has been discarded, with a timestamp */
  'timeline.operation.draft-discarded_timestamp': '下書きを破棄: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been edited */
  'timeline.operation.edited-draft': '編集された',
  /** Label shown in review changes timeline when a draft has been edited, with a timestamp */
  'timeline.operation.edited-draft_timestamp': '編集: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been edited live */
  'timeline.operation.edited-live': 'ライブ編集された',
  /** Label shown in review changes timeline when a document has been edited live, with a timestamp */
  'timeline.operation.edited-live_timestamp': 'ライブ編集: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was published */
  'timeline.operation.published': '公開された',
  /** Label shown in review changes timeline when a document was published, with a timestamp */
  'timeline.operation.published_timestamp': '公開: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was unpublished */
  'timeline.operation.unpublished': '非公開にされた',
  /** Label shown in review changes timeline when a document was unpublished, with a timestamp */
  'timeline.operation.unpublished_timestamp': '非公開: {{timestamp, datetime}}',
  /**
   * Label for determining since which version the changes for timeline menu dropdown are showing.
   * Receives the time label as a parameter (`timestamp`).
   */
  'timeline.since': 'この時点から: {{timestamp, datetime}}',
  /** Label for missing change version for timeline menu dropdown are showing */
  'timeline.since-version-missing': 'この時点から: 不明なバージョン',

  /**Aria label for the action buttons in the PTE toolbar */
  'toolbar.portable-text.action-button-aria-label': '{{action}}',

  'user-menu.action.free-trial_other': 'トライアル期間があと{{count}}日',
  /** Label for the button showed after trial ended */
  'user-menu.action.free-trial-finished': '無料からアップグレード',
  /** Label for action to invite members to the current sanity project */
  'user-menu.action.invite-members': 'メンバーを招待する',
  /** Accessibility label for action to invite members to the current sanity project */
  'user-menu.action.invite-members-aria-label': 'メンバーを招待する',
  /** Label for action to manage the current sanity project */
  'user-menu.action.manage-project': 'プロジェクトを管理する',
  /** Accessibility label for the action to manage the current project */
  'user-menu.action.manage-project-aria-label': 'プロジェクトを管理する',
  /** Tooltip helper text when portable text annotation is disabled for empty block*/
  'user-menu.action.portable-text.annotation-disabled_empty-block':
    '空のブロックに{{name}}を適用できません',
  /** Tooltip helper text when portable text annotation is disabled for multiple blocks */
  'user-menu.action.portable-text.annotation-disabled_multiple-blocks':
    '複数のブロックに{{name}}を適用できません',
  /** Label for action to sign out of the current sanity project */
  'user-menu.action.sign-out': 'サインアウト',
  /** Title for appearance section for the current studio (dark / light / system scheme) */
  'user-menu.appearance-title': '外観',
  /** Label for close menu button for user menu */
  'user-menu.close-menu': 'メニューを閉じる',
  /** Description for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-description': 'ダークな外観を使用する',
  /** Title for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-title': 'ダーク',
  /** Description for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-description': 'ライトテーマを使用する',
  /** Title for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-title': 'ライト',
  /** Description for using "system apparence" in the appearance user menu */
  'user-menu.color-scheme.system-description': 'システムの外観を使用する',
  /** Title for using system apparence in the appearance user menu */
  'user-menu.color-scheme.system-title': 'システム',
  /** Title for locale section for the current studio */
  'user-menu.locale-title': '言語',
  /** Label for tooltip to show which provider the currently logged in user is using */
  'user-menu.login-provider': '{{providerTitle}}でサインイン中',
  /** Label for open menu button for user menu */
  'user-menu.open-menu': 'メニューを開く',

  /**
   * Label for action to add a workspace (currently a developer-oriented action, as this will
   * lead to the documentation on workspace configuration)
   */
  'workspaces.action.add-workspace': 'ワークスペースを追加',
  /**
   * Label for action to choose a different workspace, in the case where you are not logged in,
   * have selected a workspace, and are faced with the authentication options for the selected
   * workspace. In other words, label for the action shown when you have reconsidered which
   * workspace to authenticate in.
   */
  'workspaces.action.choose-another-workspace': '別のワークスペースを選ぶ',
  /** Label for heading that indicates that you can choose your workspace */
  'workspaces.choose-your-workspace-label': 'ワークスペースを選ぶ',
  /** Label for the workspace menu */
  'workspaces.select-workspace-aria-label': 'ワークスペースを選択',
  /** Button label for opening the workspace switcher */
  'workspaces.select-workspace-label': 'ワークスペースを選択',
  /** Tooltip for the workspace menu */
  'workspaces.select-workspace-tooltip': 'ワークスペースを選択',
  /** Title for Workplaces dropdown menu */
  'workspaces.title': 'ワークスペース',
})
