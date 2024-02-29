import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Menu item for deleting the asset */
  'asset-source.asset-list.menu.delete': '삭제',
  /** Menu item for showing where a particular asset is used */
  'asset-source.asset-list.menu.show-usage': '사용처 보기',
  /** Header in usage dialog for file assets */
  'asset-source.asset-usage-dialog.header_file': '파일을 사용하는 문서',
  /** Header in usage dialog for image assets */
  'asset-source.asset-usage-dialog.header_image': '이미지를 사용하는 문서',
  /** Text shown in usage dialog when loading documents using the selected asset */
  'asset-source.asset-usage-dialog.loading': '로딩 중…',
  /** Text for cancel action in delete-asset dialog */
  'asset-source.delete-dialog.action.cancel': '취소',
  /** Text for "confirm delete" action in delete-asset dialog */
  'asset-source.delete-dialog.action.delete': '삭제',
  /** Dialog header for delete-asset dialog when deleting a file */
  'asset-source.delete-dialog.header_file': '파일 삭제',
  /** Dialog header for delete-asset dialog when deleting an image */
  'asset-source.delete-dialog.header_image': '이미지 삭제',
  /** Text shown in delete dialog when loading documents using the selected asset */
  'asset-source.delete-dialog.loading': '로딩 중…',
  /** Message confirming to delete *named* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_named':
    '파일 <strong>{{filename}}}</strong>과 그 메타데이터를 삭제하려고 합니다. 확실합니까?',
  /** Message confirming to delete *unnamed* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_unnamed':
    '파일과 그 메타데이터를 삭제하려고 합니다. 확실합니까?',
  /** Message confirming to delete *named* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_named':
    '이미지 <strong>{{filename}}</strong>와 메타데이터를 삭제하려고 합니다. 확실합니까?',
  /** Message confirming to delete *unnamed* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_unnamed':
    '이미지와 메타데이터를 삭제하려고 합니다. 확실합니까?',
  /** Alt text showing on image preview in delete asset dialog  */
  'asset-source.delete-dialog.usage-list.image-preview-alt': '이미지 미리보기',
  /** Warning message showing when *named* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_named':
    '{{filename}}은(는) 사용 중이기 때문에 삭제할 수 없습니다. 이 파일을 삭제하려면 먼저 모든 사용을 제거해야 합니다.',
  /** Warning message showing when *unnamed* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_unnamed':
    '이 파일은 사용 중이기 때문에 삭제할 수 없습니다. 삭제하려면 먼저 모든 사용을 제거해야 합니다.',
  /** Warning message showing when *named* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_named':
    '{{filename}}은(는) 사용 중이기 때문에 삭제할 수 없습니다. 이 이미지를 삭제하려면 먼저 모든 사용을 제거해야 합니다.',
  /** Warning message showing when *unnamed* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_unnamed':
    '이 이미지는 사용 중이기 때문에 삭제할 수 없습니다. 삭제하려면 먼저 모든 사용을 제거해야 합니다.',
  /** Text shown when the list of assets only include a specific set of types */
  'asset-source.dialog.accept-message':
    '허용된 유형의 자산만 표시: <strong>{{acceptTypes}}</strong>',
  /** Keys shared between both image asset source and file asset source */
  /** Select asset dialog title for files */
  'asset-source.dialog.default-title_file': '파일 선택',
  /** Select asset dialog title for images */
  'asset-source.dialog.default-title_image': '이미지 선택',
  /** Select asset dialog load more items */
  'asset-source.dialog.load-more': '더 많이 불러오기',
  /** Text shown when selecting a file but there's no files to select from */
  'asset-source.dialog.no-assets_file': '파일 없음',
  /** Text shown when selecting an image but there's no images to select from */
  'asset-source.dialog.no-assets_image': '이미지 없음',
  'asset-source.file.asset-list.action.delete.disabled-cannot-delete-current-file':
    '현재 선택된 파일을 삭제할 수 없습니다',
  'asset-source.file.asset-list.action.delete.text': '삭제',
  'asset-source.file.asset-list.action.delete.title': '파일 삭제',
  'asset-source.file.asset-list.action.select-file.title': '파일 {{filename}} 선택',
  'asset-source.file.asset-list.action.show-usage.title': '사용 표시',
  'asset-source.file.asset-list.delete-failed': '파일을 삭제할 수 없습니다',
  'asset-source.file.asset-list.delete-successful': '파일이 삭제되었습니다',
  'asset-source.file.asset-list.header.date-added': '추가된 날짜',
  /** File asset source */
  'asset-source.file.asset-list.header.filename': '파일명',
  'asset-source.file.asset-list.header.size': '크기',
  'asset-source.file.asset-list.header.type': '유형',
  /** Text displayed on button or menu invoking the file asset source */
  'asset-source.file.title': '업로드된 파일들',
  'asset-source.image.asset-list.delete-failed': '이미지를 삭제할 수 없습니다',
  /** Image asset source */
  'asset-source.image.asset-list.delete-successful': '이미지가 삭제되었습니다',
  /** Text displayed on button or menu invoking the image asset source */
  'asset-source.image.title': '업로드된 이미지들',
  'asset-source.usage-list.documents-using-file_named_one':
    '하나의 문서가 파일 <code>{{filename}}</code>을 사용하고 있습니다',
  'asset-source.usage-list.documents-using-file_named_other':
    '{{count}}개의 문서들이 파일 <code>{{filename}}</code>을 사용하고 있습니다',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *named* file **/
  'asset-source.usage-list.documents-using-file_named_zero':
    '파일 <code>{{filename}}</code>을 사용하는 문서가 없습니다',
  'asset-source.usage-list.documents-using-file_unnamed_one':
    '한 문서가 이 파일을 사용하고 있습니다',
  'asset-source.usage-list.documents-using-file_unnamed_other':
    '{{count}}개의 문서가 이 파일을 사용하고 있습니다',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *unnamed* file **/
  'asset-source.usage-list.documents-using-file_unnamed_zero': '이 파일을 사용하는 문서가 없습니다',
  'asset-source.usage-list.documents-using-image_named_one':
    '하나의 문서가 이미지 <code>{{filename}}</code>를 사용하고 있습니다',
  'asset-source.usage-list.documents-using-image_named_other':
    '{{count}}개의 문서들이 이미지 <code>{{filename}}</code>를 사용하고 있습니다',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *named* image **/
  'asset-source.usage-list.documents-using-image_named_zero':
    '이미지 <code>{{filename}}</code>를 사용하는 문서가 없습니다',
  'asset-source.usage-list.documents-using-image_unnamed_one':
    '하나의 문서가 이 이미지를 사용하고 있습니다',
  'asset-source.usage-list.documents-using-image_unnamed_other':
    '{{count}}개의 문서들이 이 이미지를 사용하고 있습니다',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *unnamed* image **/
  'asset-source.usage-list.documents-using-image_unnamed_zero':
    '이 이미지를 사용하는 문서가 없습니다',

  /** Action message for navigating to next month */
  'calendar.action.go-to-next-month': '다음 달로 이동',
  /** Action message for navigating to next year */
  'calendar.action.go-to-next-year': '다음 해로 이동',
  /** Action message for navigating to previous month */
  'calendar.action.go-to-previous-month': '이전 달로 이동',
  /** Action message for navigating to previous year */
  'calendar.action.go-to-previous-year': '이전 해로 이동',
  /* Label for navigating the calendar to "today", without _selecting_ today. Short form, eg `Today`, not `Go to today` */
  'calendar.action.go-to-today': '오늘',
  /* Accessibility label for navigating the calendar to "today", without _selecting_ today */
  'calendar.action.go-to-today-aria-label': '오늘로 가기',
  /* Label for navigating the calendar to "tomorrow", without _selecting_ tomorrow. Short form, eg `Tomorrow`, not `Go to tomorrow` */
  'calendar.action.go-to-tomorrow': '내일',
  /* Label for navigating the calendar to "yesterday", without _selecting_ yesterday. Short form, eg `Yesterday`, not `Go to yesterday` */
  'calendar.action.go-to-yesterday': '어제',
  /** Label for switch that controls whether or not to include time in given timestamp */
  'calendar.action.include-time-label': '시간 포함',
  /** Action message for selecting the hour */
  'calendar.action.select-hour': '시간 선택',
  /** Action message for selecting the minute */
  'calendar.action.select-minute': '분 선택',
  /** Action message for setting to the current time */
  'calendar.action.set-to-current-time': '현재 시간으로 설정',
  /** Label for selecting an hour preset. Receives a `time` param as a string on hh:mm format and a `date` param as a Date instance denoting the preset date */
  'calendar.action.set-to-time-preset': '{{time}}에 {{date, datetime}}',
  /** Error message displayed in calendar when entered date is not the correct format */
  'calendar.error.must-be-in-format': '<Emphasis>{{exampleDate}}</Emphasis> 형식이어야 합니다',
  /** Month name for April */
  'calendar.month-names.april': '4월',
  /** Month name for August */
  'calendar.month-names.august': '8월',
  /** Month name for December */
  'calendar.month-names.december': '12월',
  /** Month name for February */
  'calendar.month-names.february': '2월',
  /** Month name for January */
  'calendar.month-names.january': '1월',
  /** Month name for July */
  'calendar.month-names.july': '7월',
  /** Month name for June */
  'calendar.month-names.june': '6월',
  /** Month name for March */
  'calendar.month-names.march': '3월',
  /** Month name for May */
  'calendar.month-names.may': '5월',
  /** Month name for November */
  'calendar.month-names.november': '11월',
  /** Month name for October */
  'calendar.month-names.october': '10월',
  /** Month name for September */
  'calendar.month-names.september': '9월',
  /** Short weekday name for Friday */
  'calendar.weekday-names.short.friday': '금',
  /** Short weekday name for Monday */
  'calendar.weekday-names.short.monday': '월',
  /** Short weekday name for Saturdayday */
  'calendar.weekday-names.short.saturday': '토',
  /** Short weekday name for Sunday */
  'calendar.weekday-names.short.sunday': '일',
  /** Short weekday name for Thursday */
  'calendar.weekday-names.short.thursday': '목',
  /** Short weekday name for Tuesday */
  'calendar.weekday-names.short.tuesday': '화',
  /** Short weekday name for Wednesday */
  'calendar.weekday-names.short.wednesday': '수',

  /** Label for the close button label in Review Changes pane */
  'changes.action.close-label': '변경 사항 검토 닫기',
  /** Cancel label for revert button prompt action */
  'changes.action.revert-all-cancel': '취소',
  /** Revert all confirm label for revert button action - used on prompt button + review changes pane */
  'changes.action.revert-all-confirm': '모두 되돌리기',
  /** Prompt for reverting all changes in document in Review Changes pane. Includes a count of changes. */
  'changes.action.revert-all-description': '모든 {{count}} 변경사항을 되돌리시겠습니까?',
  /** Prompt for confirming revert change (singular) label for field change action */
  'changes.action.revert-changes-confirm-change_one': '변경 사항 되돌리기',
  /** Revert for confirming revert (plural) label for field change action */
  'changes.action.revert-changes-confirm-change_other': '변경 사항들 되돌리기',
  /** Prompt for reverting changes for a field change */
  'changes.action.revert-changes-description': '변경 사항을 되돌리시겠습니까?',
  /** Prompt for reverting changes for a group change, eg multiple changes */
  'changes.action.revert-changes-description_one': '변경 사항을 되돌리시겠습니까?',
  /** Label for when the action of the change was to set something that was previously empty, eg a field was given a value, an array item was added, an asset was selected or similar */
  'changes.added-label': '추가됨',
  /** Array diff: An item was added in a given position (`{{position}}`) */
  'changes.array.item-added-in-position': '{{position}} 위치에 추가됨',
  'changes.array.item-moved_down_one': '{{count}} 위치 아래로 이동함',
  'changes.array.item-moved_down_other': '{{count}} 위치 아래로 이동함',
  /**
   * Array diff: An item was moved within the array.
   * Receives `{{count}}` representing number of positions it moved.
   * Context is the direction of the move, either `up` or `down`.
   */
  'changes.array.item-moved_up_one': '{{count}} 위치 위로 이동함',
  'changes.array.item-moved_up_other': '{{count}} 위치 위로 이동함',
  /** Array diff: An item was removed from a given position (`{{position}}`) */
  'changes.array.item-removed-from-position': '{{position}} 위치에서 제거됨',
  /** Accessibility label for the "change bar" shown when there are edits on a field-level */
  'changes.change-bar.aria-label': '변경 사항 검토',
  /** Label for when the action of the change was _not_ an add/remove, eg a text field changed value, an image was changed from one asset to another or similar */
  'changes.changed-label': '변경됨',
  /** Label and text for tooltip that indicates the authors of the changes */
  'changes.changes-by-author': '변경한 사람',
  /** Additional text shown in development mode when a diff component crashes during rendering */
  'changes.error-boundary.developer-info': '자세한 정보는 개발자 콘솔을 확인하세요',
  /** Text shown when a diff component crashes during rendering, triggering the error boundary */
  'changes.error-boundary.title': '이 필드의 변경 사항을 렌더링하는 중 오류가 발생했습니다',
  /** Error message shown when the value of a field is not the expected one */
  'changes.error.incorrect-type-message':
    '값 오류: 값의 유형은 "<code>{{actualType}}</code>"이며, 예상 유형은 "<code>{{expectedType}}</code>"입니다',
  /** File diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.file.meta-info-fallback-title': '제목 없음',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.crop-changed': '크롭 변경됨',
  /** Image diff: Text shown if the previous image asset was deleted (shouldn't theoretically happen) */
  'changes.image.deleted': '이미지 삭제됨',
  /** Image diff: Text shown if the image failed to be loaded when previewing it */
  'changes.image.error-loading-image': '이미지 로딩 오류',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.hotspot-changed': '핫스팟 변경됨',
  /** Image diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.image.meta-info-fallback-title': '제목 없음',
  /** Image diff: Text shown if no asset has been set for the field (but has metadata changes) */
  'changes.image.no-asset-set': '이미지 설정되지 않음',
  /** Image diff: Text shown when the from/to state has/had no image */
  'changes.image.no-image-placeholder': '(이미지 없음)',
  /** Label for the "from" value in the change inspector */
  'changes.inspector.from-label': '에서',
  /** Label for the "meta" (field path, action etc) information in the change inspector */
  'changes.inspector.meta-label': '메타',
  /** Label for the "to" value in the change inspector */
  'changes.inspector.to-label': '까지',
  /** Loading author of change in the differences tooltip in the review changes pane */
  'changes.loading-author': '로딩 중…',
  /** Loading changes in Review Changes Pane */
  'changes.loading-changes': '변경 사항 불러오는 중…',
  /** No Changes description in the Review Changes pane */
  'changes.no-changes-description':
    '이 패널에 변경 사항 목록이 표시되려면 문서를 편집하거나 타임라인에서 이전 버전을 선택하세요.',
  /** No Changes title in the Review Changes pane */
  'changes.no-changes-title': '변경 사항 없음',
  /** Portable Text diff: An annotation was added */
  'changes.portable-text.annotation_added': '주석 추가됨',
  /** Portable Text diff: An annotation was changed */
  'changes.portable-text.annotation_changed': '주석 변경됨',
  /** Portable Text diff: An annotation was removed */
  'changes.portable-text.annotation_removed': '주석 제거됨',
  /** Portable Text diff: An annotation was left unchanged */
  'changes.portable-text.annotation_unchanged': '주석 변경되지 않음',
  /** Portable Text diff: A block changed from one style to another (eg `normal` to `h1` or similar) */
  'changes.portable-text.block-style-changed':
    '블록 스타일이 "{{fromStyle}}"에서 "{{toStyle}}"(으)로 변경됨',
  /** Portable Text diff: Change formatting of text (setting/unsetting marks, eg bold/italic etc) */
  'changes.portable-text.changed-formatting': '텍스트 형식 변경됨',
  /** Portable Text diff: An empty inline object is part of a change */
  'changes.portable-text.empty-inline-object': '빈 {{inlineObjectType}}',
  /** Portable Text diff: An empty object is the result of adding/removing an annotation */
  'changes.portable-text.empty-object-annotation': '빈 {{annotationType}}',
  /** Portable Text diff: Added a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_added': '빈 텍스트 추가됨',
  /** Portable Text diff: Changed a block that contained no text (eg empty block) */
  'changes.portable-text.empty-text_changed': '빈 텍스트 변경됨',
  /** Portable Text diff: Removed a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_removed': '빈 텍스트 제거됨',
  /** Portable Text diff: An inline object was added */
  'changes.portable-text.inline-object_added': '인라인 객체 추가됨',
  /** Portable Text diff: An inline object was changed */
  'changes.portable-text.inline-object_changed': '인라인 객체 변경됨',
  /** Portable Text diff: An inline object was removed */
  'changes.portable-text.inline-object_removed': '인라인 객체 제거됨',
  /** Portable Text diff: An inline object was left unchanged */
  'changes.portable-text.inline-object_unchanged': '인라인 객체 변경되지 않음',
  /** Portable Text diff: Added a chunk of text */
  'changes.portable-text.text_added': '텍스트 추가됨',
  /** Portable Text diff: Removed a chunk of text */
  'changes.portable-text.text_removed': '텍스트 제거됨',
  /** Portable Text diff: Annotation has an unknown schema type */
  'changes.portable-text.unknown-annotation-schema-type': '알 수 없는 스키마 유형',
  /** Portable Text diff: Inline object has an unknown schema type */
  'changes.portable-text.unknown-inline-object-schema-type': '알 수 없는 스키마 유형',
  /** Label for when the action of the change was a removal, eg a field was cleared, an array item was removed, an asset was deselected or similar */
  'changes.removed-label': '제거됨',
  /** Title for the Review Changes pane */
  'changes.title': '변경 사항 검토',

  /** --- Common components --- */
  /** Tooltip text for context menu buttons */
  'common.context-menu-button.tooltip': '더 보기',
  /** Default text for dialog cancel button */
  'common.dialog.cancel-button.text': '취소',
  /** Default text for dialog confirm button */
  'common.dialog.confirm-button.text': '확인',
  /** Default text in shared loader text / spinner lockup */
  'common.loading': '로딩 중',

  /** --- Configuration issues --- */
  /** Tooltip displayed on configuration issues button */
  'configuration-issues.button.tooltip': '구성 문제 발견',

  /** The fallback title for an ordering menu item if no localized titles are provided. */
  'default-menu-item.fallback-title': '{{title}}로 정렬',

  /** Title for the default ordering/SortOrder if no orderings are provided and the caption field is found */
  'default-orderings.caption': '캡션별 정렬',
  /** Title for the default ordering/SortOrder if no orderings are provided and the description field is found */
  'default-orderings.description': '설명별 정렬',
  /** Title for the default ordering/SortOrder if no orderings are provided and the header field is found */
  'default-orderings.header': '헤더별 정렬',
  /** Title for the default ordering/SortOrder if no orderings are provided and the heading field is found */
  'default-orderings.heading': '제목별 정렬',
  /** Title for the default ordering/SortOrder if no orderings are provided and the label field is found */
  'default-orderings.label': '라벨별 정렬',
  /** Title for the default ordering/SortOrder if no orderings are provided and the name field is found */
  'default-orderings.name': '이름별 정렬',
  /** Title for the default ordering/SortOrder if no orderings are provided and the title field is found */
  'default-orderings.title': '타이틀별 정렬',

  /** Label to show in the document footer indicating the last edited date of the document */
  'document-status.edited': '{{date}}에 편집됨',
  /** Label to show in the document footer indicating the document is not published*/
  'document-status.not-published': '게시되지 않음',
  /** Label to show in the document footer indicating the published date of the document */
  'document-status.published': '{{date}}에 게시됨',

  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.duplicate-keys-alert.details.additional-description':
    '<code>_key</code> 속성의 값은 고유한 문자열이어야 합니다.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property of each elements has been generated non-uniquely. */
  'form.error.duplicate-keys-alert.details.description':
    '이것은 보통 항목들이 API 클라이언트를 사용하여 생성될 때 발생하며, 각 요소의 <code>_key</code> 속성이 고유하지 않게 생성되었습니다.',
  /** Developer info */
  'form.error.duplicate-keys-alert.details.title': '개발자 정보',
  /** Generate unique keys */
  'form.error.duplicate-keys-alert.generate-button.text': '고유한 키 생성',
  /** Several items in this list share the same identifier (key). Every item must have an unique identifier. */
  'form.error.duplicate-keys-alert.summary':
    '이 목록의 여러 항목이 동일한 식별자(키)를 공유하고 있습니다. 모든 항목은 고유한 식별자를 가져야 합니다.',
  /** Non-unique keys */
  'form.error.duplicate-keys-alert.title': '고유하지 않은 키',
  /** Error text shown when a field with a given name cannot be found in the schema or is conditionally hidden but explicitly told to render  */
  'form.error.field-not-found':
    '스키마에서 "{{fieldName}}" 필드를 찾을 수 없거나 조건부로 숨겨져 있지만 명시적으로 렌더링하라고 지시된 경우입니다 – 스키마에 정의되어 있는지 확인하고 조건부로 숨겨져 있지 않은지 확인하세요.',
  /** Add missing keys */
  'form.error.missing-keys-alert.add-button.text': '누락된 키 추가',
  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.missing-keys-alert.details.additional-description':
    '<code>_key</code> 속성의 값은 고유한 문자열이어야 합니다.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property has not been included. */
  'form.error.missing-keys-alert.details.description':
    '이는 보통 API 클라이언트를 사용하여 항목을 생성할 때 <code>_key</code> 속성이 포함되지 않았을 때 발생합니다.',
  /** Developer info */
  'form.error.missing-keys-alert.details.title': '개발자 정보',
  /** Some items in the list are missing their keys. This must be fixed in order to edit the list. */
  'form.error.missing-keys-alert.summary':
    '리스트의 일부 항목에 키가 누락되었습니다. 리스트를 편집하려면 이를 수정해야 합니다.',
  /** Missing keys */
  'form.error.missing-keys-alert.title': '누락된 키',
  /** This usually happens when items are created using an API client, or when a custom input component has added invalid data to the list. */
  'form.error.mixed-array-alert.details.description':
    '이는 보통 API 클라이언트를 사용하여 항목을 생성하거나 사용자 정의 입력 컴포넌트가 리스트에 유효하지 않은 데이터를 추가했을 때 발생합니다.',
  /** Developer info */
  'form.error.mixed-array-alert.details.title': '개발자 정보',
  /**  Remove non-object values */
  'form.error.mixed-array-alert.remove-button.text': '비객체 값 제거',
  /** Some items in this list are not objects. This must be fixed in order to edit the list. */
  'form.error.mixed-array-alert.summary':
    '이 리스트의 일부 항목이 객체가 아닙니다. 리스트를 편집하려면 이를 수정해야 합니다.',
  /** Invalid list values */
  'form.error.mixed-array-alert.title': '유효하지 않은 리스트 값',
  /** Error text shown when form is unable to find an array item at a given indexed path */
  'form.error.no-array-item-at-index':
    '주어진 경로 <code>{{path}}</code>에서 인덱스 <code>{{index}}</code>의 배열 항목을 찾을 수 없습니다',
  /** Error text shown when form is unable to find an array item at a given keyed path */
  'form.error.no-array-item-at-key':
    '주어진 경로 <code>{{path}}</code>에서 `_key` <code>"{{key}}"</code>를 가진 배열 항목을 찾을 수 없습니다',
  /** Form field deprecated label */
  'form.field.deprecated-label': '사용되지 않음',
  /** Fallback title shown above field if it has no defined title */
  'form.field.untitled-field-label': '제목 없음',
  /** Fallback title shown above fieldset if it has no defined title */
  'form.field.untitled-fieldset-label': '제목 없음',
  /** Accessibility label for the icon that indicates the field has a validation error */
  'form.validation.has-error-aria-label': '오류가 있음',
  /** Accessibility label for the icon that indicates the field has validation information */
  'form.validation.has-info-aria-label': '정보가 있음',
  /** Accessibility label for the icon that indicates the field has a validation warning */
  'form.validation.has-warning-aria-label': '경고가 있음',
  /** Text shown when summarizing validation information, when the field has one or more errors */
  'form.validation.summary.errors-count_one': '{{count}}개의 오류',
  'form.validation.summary.errors-count_other': '{{count}}개의 오류',
  /** Text shown when summarizing validation information, when the field has one or more warnings */
  'form.validation.summary.warnings-count_one': '{{count}}개의 경고',
  'form.validation.summary.warnings-count_other': '{{count}}개의 경고들',

  'free-trial.tooltip.days-count_other': '{{count}}일의 시험 사용 기간이 남았습니다',
  /** Tooltip for free trial navbar button, once trial has ended */
  'free-trial.tooltip.trial-finished': '프로젝트를 업그레이드하세요',

  /**
   * Label for "contact sales" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.contact-sales': '영업팀에 문의하기',
  /**
   * Label for "help and support" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.help-and-support': '도움말 및 지원',
  /**
   * Label for "join our community" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.join-our-community': '우리 커뮤니티에 가입하세요',
  /** Information for what the latest sanity version is */
  'help-resources.latest-sanity-version': '최신 버전은 {{latestVersion}}입니다',
  /** Information for what studio version the current studio is running */
  'help-resources.studio-version': 'Sanity 스튜디오 버전 {{studioVersion}}',
  /** Title for help and resources menus */
  'help-resources.title': '도움말 및 리소스',

  /** Text for button to cancel an ongoing upload */
  'input.files.common.cancel-upload': '업로드 취소',
  /** Text for file input button in upload placeholder */
  'input.files.common.upload-placeholder.file-input-button.text': '업로드',
  /** Uploading <FileName/> */
  'input.files.common.upload-progress': '<FileName/> 업로드 중',
  /** The referenced document cannot be opened, because the URL failed to be resolved */
  'input.reference.document-cannot-be-opened.failed-to-resolve-url':
    '이 문서는 열 수 없습니다 (스튜디오로의 URL 해석 실패)',

  /** Label for adding item after a specific array item */
  'inputs.array.action.add-after': '다음에 항목 추가',
  /** Label for adding item before a specific array item */
  'inputs.array.action.add-before': '이전에 항목 추가',
  /** Label for adding array item action when the schema allows for only one schema type */
  'inputs.array.action.add-item': '항목 추가',
  /**
   * Label for adding one array item action when the schema allows for multiple schema types,
   * eg. will prompt the user to select a type once triggered
   */
  'inputs.array.action.add-item-select-type': '항목 추가...',
  /** Array drag handle button tooltip */
  'inputs.array.action.drag.tooltip': '재정렬하려면 드래그하세요',
  /** Label for duplicating an array item  */
  'inputs.array.action.duplicate': '복제',
  /** Label for editing the item of a specific type, eg "Edit Person" */
  'inputs.array.action.edit': '{{itemTypeTitle}} 편집',
  /** Label for removing an array item action  */
  'inputs.array.action.remove': '제거',
  /** Label for removing action when an array item has an error  */
  'inputs.array.action.remove-invalid-item': '제거',
  /** Label for viewing the item of a specific type, eg "View Person" */
  'inputs.array.action.view': '{{itemTypeTitle}} 보기',
  /** Error description for the array item tooltip that explains that the current item can still be moved or deleted but not edited since the schema definition is not found */
  'inputs.array.error.can-delete-but-no-edit-description':
    '이 항목을 여전히 이동하거나 삭제할 수는 있지만, 해당 유형의 스키마 정의를 찾을 수 없으므로 편집할 수는 없습니다.',
  /** Error label for toast when array could not resolve the initial value */
  'inputs.array.error.cannot-resolve-initial-value-title':
    '유형에 대한 초기 값을 해결할 수 없습니다: {{schemaTypeTitle}}: {{errorMessage}}.',
  /** Error label for toast when trying to upload one array item of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_one':
    '다음 항목은 내용 유형에서 배열 항목으로 알려진 변환이 없어 업로드할 수 없습니다:',
  /** Error label for toast when trying to upload multiple array items of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_other':
    '다음 항목들은 내용 유형에서 배열 항목으로 알려진 변환이 없어 업로드할 수 없습니다:',
  /** Error description for the array item tooltip that explains that the current type item is not valid for the list  */
  'inputs.array.error.current-schema-not-declare-description':
    '현재 스키마는 이 목록에 <code>{{typeName}}</code> 유형의 항목을 유효하다고 선언하지 않았습니다. 이는 유형이 유효한 항목 유형으로 제거되었거나 누군가가 아직 배포되지 않은 자신의 로컬 스키마에 추가했을 수 있음을 의미할 수 있습니다.',
  /** Error description to show how the item is being represented in the json format */
  'inputs.array.error.json-representation-description': '이 항목의 JSON 표현:',
  /** Error description for the array item tooltip that explains what the error means with more context */
  'inputs.array.error.type-is-incompatible-prompt':
    '이 목록에는 <code>{{typeName}}</code> 유형의 항목이 유효하지 않습니다',
  /** Error title for when an item type within an array input is incompatible, used in the tooltip */
  'inputs.array.error.type-is-incompatible-title': '왜 이런 일이 발생하나요?',
  /** Error label for unexpected errors in the Array Input */
  'inputs.array.error.unexpected-error': '예상치 못한 오류: {{error}}',
  /** Label for when the array input doesn't have any items */
  'inputs.array.no-items-label': '항목 없음',
  /** Label for read only array fields */
  'inputs.array.read-only-label': '이 필드는 읽기 전용입니다',
  /** Label for when the array input is resolving the initial value for the item */
  'inputs.array.resolving-initial-value': '초기 값을 확인하는 중…',
  /** Placeholder value for datetime input */
  'inputs.datetime.placeholder': '예: {{example}}',
  /** Acessibility label for button to open file options menu */
  'inputs.file.actions-menu.file-options.aria-label': '파일 옵션 메뉴 열기',
  /** Browse */
  'inputs.file.browse-button.text': '찾아보기',
  /** Select file */
  'inputs.file.dialog.title': '파일 선택',
  /** Unknown member kind: `{{kind}}` */
  'inputs.file.error.unknown-member-kind': '알 수 없는 멤버 종류: {{kind}}',
  /** The value of this field is not a valid file. Resetting this field will let you choose a new file. */
  'inputs.file.invalid-file-warning.description':
    '이 필드의 값은 유효한 파일이 아닙니다. 이 필드를 재설정하면 새 파일을 선택할 수 있습니다.',
  /** Reset value */
  'inputs.file.invalid-file-warning.reset-button.text': '값 재설정',
  /** Invalid file value */
  'inputs.file.invalid-file-warning.title': '잘못된 파일 값',
  /** Select */
  'inputs.file.multi-browse-button.text': '선택',
  /** The upload could not be completed at this time. */
  'inputs.file.upload-failed.description': '현재 업로드를 완료할 수 없습니다.',
  /** Upload failed */
  'inputs.file.upload-failed.title': '업로드 실패',
  /** Clear field */
  'inputs.files.common.actions-menu.clear-field.label': '필드 지우기',
  /** Copy URL */
  'inputs.files.common.actions-menu.copy-url.label': 'URL 복사',
  /** Download */
  'inputs.files.common.actions-menu.download.label': '다운로드',
  /** The URL is copied to the clipboard */
  'inputs.files.common.actions-menu.notification.url-copied': 'URL이 클립보드에 복사되었습니다',
  /** Replace */
  'inputs.files.common.actions-menu.replace.label': '교체',
  /** Upload */
  'inputs.files.common.actions-menu.upload.label': '업로드',
  /** Drop to upload */
  'inputs.files.common.drop-message.drop-to-upload': '업로드를 위해 놓기',
  /** Drop to upload `{{count}}` file */
  'inputs.files.common.drop-message.drop-to-upload-multi_one':
    '{{count}}개 파일을 업로드하려면 놓으세요',
  /** Drop to upload `{{count}}` files */
  'inputs.files.common.drop-message.drop-to-upload-multi_other':
    '{{count}}개 파일을 업로드하려면 놓으세요',
  /** Can't upload this file here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_one':
    '이 파일은 여기에 업로드할 수 없습니다',
  /** Can't upload any of these files here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_other':
    '이 파일들 중 어떤 것도 여기에 업로드할 수 없습니다',
  /** `{{count}}` file can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_one':
    '{{count}}개 파일은 여기에 업로드할 수 없습니다',
  /** `{{count}}` files can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_other':
    '{{count}}개 파일은 여기에 업로드할 수 없습니다',
  /** Cannot upload `{{count}}` files */
  'inputs.files.common.placeholder.cannot-upload-some-files_one': '파일을 업로드할 수 없습니다',
  'inputs.files.common.placeholder.cannot-upload-some-files_other':
    '{{count}}개의 파일을 업로드할 수 없습니다',
  /** Drag or paste type here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_file':
    '여기에 파일을 드래그하거나 붙여넣기',
  /** Drag or paste image here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_image':
    '여기에 이미지를 드래그하거나 붙여넣기',
  /** Drop to upload file */
  'inputs.files.common.placeholder.drop-to-upload_file': '파일 업로드를 위해 놓기',
  /** Drop to upload image */
  'inputs.files.common.placeholder.drop-to-upload_image': '이미지 업로드를 위해 놓기',
  /** Read only */
  'inputs.files.common.placeholder.read-only': '읽기 전용',
  /** Can't upload files here */
  'inputs.files.common.placeholder.upload-not-supported': '여기에 파일을 업로드할 수 없습니다',
  /** Clear upload */
  'inputs.files.common.stale-upload-warning.clear': '업로드 지우기',
  /** An upload has made no progress for at least `{{staleThresholdMinutes}}` minutes and likely got interrupted. You can safely clear the incomplete upload and try uploading again. */
  'inputs.files.common.stale-upload-warning.description':
    '업로드가 적어도 {{staleThresholdMinutes}}분 동안 진행되지 않고 중단되었을 가능성이 있습니다. 미완료된 업로드를 안전하게 지우고 다시 업로드를 시도할 수 있습니다.',
  /** Incomplete upload */
  'inputs.files.common.stale-upload-warning.title': '미완료된 업로드',
  /** Tooltip text for action to crop image */
  'inputs.image.actions-menu.crop-image-tooltip': '이미지 자르기',
  /** Accessibility label for button to open image edit dialog */
  'inputs.image.actions-menu.edit-details.aria-label': '이미지 편집 대화 상자 열기',
  /** Accessibility label for button to open image options menu */
  'inputs.image.actions-menu.options.aria-label': '이미지 옵션 메뉴 열기',
  /** Select */
  'inputs.image.browse-menu.text': '선택',
  /** Cannot upload this file here */
  'inputs.image.drag-overlay.cannot-upload-here': '여기에 이 파일을 업로드할 수 없습니다',
  /** Drop image to upload */
  'inputs.image.drag-overlay.drop-to-upload-image': '업로드할 이미지를 드롭하세요',
  /** This field is read only */
  'inputs.image.drag-overlay.this-field-is-read-only': '이 필드는 읽기 전용입니다',
  /** Unknown member kind: `{{kind}}` */
  'inputs.image.error.unknown-member-kind': '알 수 없는 멤버 종류: {{kind}}',
  /** Edit hotspot and crop */
  'inputs.image.hotspot-dialog.title': '핫스팟 및 크롭 편집',
  /** The value of this field is not a valid image. Resetting this field will let you choose a new image. */
  'inputs.image.invalid-image-warning.description':
    '이 필드의 값은 유효한 이미지가 아닙니다. 이 필드를 재설정하면 새 이미지를 선택할 수 있습니다.',
  /** Reset value */
  'inputs.image.invalid-image-warning.reset-button.text': '값 재설정',
  /** Invalid image value */
  'inputs.image.invalid-image-warning.title': '잘못된 이미지 값',
  /** Preview of uploaded image */
  'inputs.image.preview-uploaded-image': '업로드된 이미지 미리보기',
  /** The upload could not be completed at this time. */
  'inputs.image.upload-error.description': '현재 업로드를 완료할 수 없습니다.',
  /** Upload failed */
  'inputs.image.upload-error.title': '업로드 실패',
  /** Adjust the rectangle to crop image. Adjust the circle to specify the area that should always be visible. */
  'inputs.imagetool.description':
    '이미지를 크롭하기 위해 사각형을 조정하세요. 항상 보여야 할 영역을 지정하기 위해 원을 조정하세요.',
  /** Error: `{{errorMessage}}` */
  'inputs.imagetool.load-error': '오류: {{errorMessage}}',
  /** Hotspot & Crop */
  'inputs.imagetool.title': '핫스팟 & 크롭',
  /** Convert to `{{targetType}}` */
  'inputs.invalid-value.convert-button.text': '<code>{{targetType}}</code>(으)로 변환',
  /** The current value (<code>`{{actualType}}`</code>) */
  'inputs.invalid-value.current-type': '현재 값 (<code>{{actualType}}</code>)',
  /** The property value is stored as a value type that does not match the expected type. */
  'inputs.invalid-value.description':
    '속성 값이 예상된 유형과 일치하지 않는 값 유형으로 저장됩니다.',
  /** The value of this property must be of type <code>`{{validType}}`</code> according to the schema. */
  'inputs.invalid-value.details.description':
    '이 속성의 값은 스키마에 따라 <code>{{validType}}</code> 유형이어야 합니다.',
  /** Only the following types are valid here according to schema: */
  'inputs.invalid-value.details.multi-type-description':
    '스키마에 따라 여기서 유효한 유형은 다음과 같습니다:',
  /** Mismatching value types typically occur when the schema has recently been changed. */
  'inputs.invalid-value.details.possible-reason':
    '스키마가 최근에 변경되었을 때 일반적으로 값 유형이 일치하지 않습니다.',
  /** Developer info */
  'inputs.invalid-value.details.title': '개발자 정보',
  /** -- Invalid Value Input -- */
  /** Reset value */
  'inputs.invalid-value.reset-button.text': '값 재설정',
  /** Invalid property value */
  'inputs.invalid-value.title': '잘못된 속성 값',
  /** Field groups */
  'inputs.object.field-group-tabs.aria-label': '필드 그룹',
  /** Read-only field description */
  'inputs.object.unknown-fields.read-only.description':
    '이 필드는 문서의 스키마에 따라 <strong>읽기 전용</strong>이며 해제할 수 없습니다. 스튜디오에서 이를 해제할 수 있게 하려면 스키마의 포함 유형에서 <code>readOnly</code> 필드를 제거하세요.',
  /** Remove field */
  'inputs.object.unknown-fields.remove-field-button.text': '필드 제거',
  /** Encountered `{{count}}` fields that are not defined in the schema. */
  'inputs.object.unknown-fields.warning.description_one':
    '스키마에 정의되지 않은 필드를 발견했습니다.',
  'inputs.object.unknown-fields.warning.description_other':
    '스키마에 정의되지 않은 {{count}}개의 필드를 발견했습니다.',
  /** Detailed description of unknown field warning */
  'inputs.object.unknown-fields.warning.details.description_one':
    '이 필드는 스키마에 정의되어 있지 않아, 필드 정의가 제거되었거나 누군가가 자신의 로컬 프로젝트에 추가하고 아직 변경 사항을 배포하지 않았을 수 있습니다.',
  'inputs.object.unknown-fields.warning.details.description_other':
    '이 필드들은 문서의 스키마에 정의되어 있지 않아, 필드 정의가 제거되었거나 누군가가 자신의 로컬 프로젝트에 추가하고 아직 변경 사항을 배포하지 않았을 수 있습니다.',
  /** Developer info */
  'inputs.object.unknown-fields.warning.details.title': '개발자 정보',
  /** Unknown field found */
  'inputs.object.unknown-fields.warning.title_one': '알 수 없는 필드 발견',
  'inputs.object.unknown-fields.warning.title_other': '알 수 없는 필드들 발견',
  /** Collapse the editor to save screen space  */
  'inputs.portable-text.action.collapse-editor': '에디터 접기',
  /** Aria label for action to edit an existing annotation */
  'inputs.portable-text.action.edit-annotation-aria-label': '주석 편집',
  /** Expand the editor to give more editing space */
  'inputs.portable-text.action.expand-editor': '에디터 확장하기',
  /** Label label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block': '{{typeName}} 삽입하기',
  /** Accessibility label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block-aria-label': '{{typeName}} 삽입하기 (블록)',
  /** Label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object': '{{typeName}} 삽입하기',
  /** Accessibility label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object-aria-label': '{{typeName}} 삽입하기 (인라인)',
  /** Aria label for action to remove an annotation */
  'inputs.portable-text.action.remove-annotation-aria-label': '주석 제거',
  /** Label for activate on focus with context of click and not focused */
  'inputs.portable-text.activate-on-focus-message_click': '활성화하려면 클릭하세요',
  /** Label for activate on focus with context of click and focused */
  'inputs.portable-text.activate-on-focus-message_click-focused':
    '활성화하려면 클릭하거나 스페이스를 누르세요',
  /** Label for activate on focus with context of tap and not focused */
  'inputs.portable-text.activate-on-focus-message_tap': '활성화하려면 탭하세요',
  /**Aria label for the annotation object */
  'inputs.portable-text.annotation-aria-label': '주석 객체',
  /** Title for dialog that allows editing an annotation */
  'inputs.portable-text.annotation-editor.title': '{{schemaType}} 편집하기',
  /** Title of the default "link" annotation */
  'inputs.portable-text.annotation.link': '링크',
  /**Aria label for the block object */
  'inputs.portable-text.block.aria-label': '블록 객체',
  /** Label for action to edit a block item, in the case where it is editable */
  'inputs.portable-text.block.edit': '편집하기',
  /** Accessibility label for the button that opens the actions menu on blocks */
  'inputs.portable-text.block.open-menu-aria-label': '메뉴 열기',
  /** Label for action to open a reference, in the case of block-level reference types */
  'inputs.portable-text.block.open-reference': '참조 열기',
  /** Label for action to remove a block item */
  'inputs.portable-text.block.remove': '제거하기',
  /** Label for action to view a block item, in the case where it is read-only and thus cannot be edited */
  'inputs.portable-text.block.view': '보기',
  /** Title of the "code" decorator */
  'inputs.portable-text.decorator.code': '코드',
  /** Title of the "em" (emphasis) decorator */
  'inputs.portable-text.decorator.emphasis': '기울임꼴',
  /** Title of the "strike-through" decorator */
  'inputs.portable-text.decorator.strike-through': '취소선',
  /** Title of the "strong" decorator */
  'inputs.portable-text.decorator.strong': '굵게',
  /** Title of the "underline" decorator */
  'inputs.portable-text.decorator.underline': '밑줄',
  /** Placeholder text for when the editor is empty */
  'inputs.portable-text.empty-placeholder': '비어 있음',
  /**Aria label for the block object */
  'inputs.portable-text.inline-block.aria-label': '인라인 객체',
  /** Label for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit': '객체 편집하기',
  /** Aria label for icon for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit-aria-label': '객체 편집',
  /** Label for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove': '객체 제거하기',
  /** Aria label for icon for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove-aria-label': '객체 제거',
  /** Disclaimer text shown on invalid Portable Text value, when an action is available to unblock the user, but it is not guaranteed to be safe */
  'inputs.portable-text.invalid-value.action-disclaimer':
    '참고: 위의 작업을 수행하는 것이 일반적으로 안전하지만, 확신이 서지 않는 경우 스튜디오를 구성하는 담당자에게 문의하세요.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.action': '해당 객체 제거하기',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.description':
    '키 <code>{{key}}</code>를 가진 블록의 키 {{childKey}}를 가진 자식이 <code>{{childType}}</code> 타입인데, 이는 스키마에서 허용되지 않습니다.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.action': '블록 제거',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.description':
    '키 <code>{{key}}</code>를 가진 블록이 <code>{{typeName}}</code> 유형이며, 이는 스키마에서 허용되지 않습니다.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.action': '빈 텍스트 범위 삽입하기',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.description':
    '키 <code>{{key}}</code>를 가진 텍스트 블록에 텍스트 범위가 없습니다.',
  /** Label for the button to ignore invalid values in the Portable Text editor */
  'inputs.portable-text.invalid-value.ignore-button.text': '무시하기',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.action':
    '유형 <code>{{expectedTypeName}}</code> 사용',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.description':
    '키 <code>{{key}}</code>를 가진 블록의 유형 이름이 잘못되었습니다. 스키마에 따르면 <code>{{expectedTypeName}}</code>이어야 합니다.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.action': '빈 텍스트 값 설정하기',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.description':
    '키 <code>{{key}}</code>를 가진 블록의 키 {{childKey}}를 가진 범위에 누락되었거나 잘못된 <code>text</code> 속성이 있습니다.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.action':
    '유형 <code>{{expectedTypeName}}</code> 사용',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.description':
    '키 <code>{{key}}</code>를 가진 블록이 유형 이름이 누락되었습니다. 스키마에 따르면 <code>{{expectedTypeName}}</code>이어야 합니다.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.action': '임의의 키 할당하기',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.description':
    '키 <code>{{key}}</code>를 가진 블록의 인덱스 <code>{{index}}</code>에 있는 자식에 <code>_key</code> 속성이 누락되었습니다.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.action': '해당 객체 제거하기',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.description':
    '키 <code>{{key}}</code>를 가진 블록의 키 {{childKey}}를 가진 자식에 <code>_type</code> 속성이 누락되었습니다.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.action': '임의의 키 할당',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.description':
    '인덱스 <code>{{index}}</code>의 블록이 필수 <code>_key</code> 속성이 누락되었습니다.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.action': '블록 제거하기',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.description':
    '키 <code>{{key}}</code>를 가진 텍스트 블록에 잘못되었거나 누락된 `children` 속성이 있습니다.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.action': '속성 추가하기',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.description':
    '키 <code>{{key}}</code>를 가진 텍스트 블록에 잘못되었거나 누락된 `markDefs` 속성이 있습니다.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.action': '블록 제거',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.description':
    '키 <code>{{key}}</code>를 가진 블록이 유형 이름이 누락되었습니다.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.action': '해당 항목 제거하기',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.description':
    '키 <code>{{key}}</code>를 가진 블록의 인덱스 <code>{{index}}</code>에 있는 자식이 객체가 아닙니다.',
  /** Action presented when the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.action': '값을 해제',
  /** Text explaining that the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.description':
    '값은 Portable Text 블록의 배열이거나 undefined이어야 합니다.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.action': '항목 제거',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.description':
    '<code>{{index}}</code> 위치의 항목이 객체가 아닙니다.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.action': '허용되지 않는 마크 제거하기',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.description':
    '키 <code>{{key}}</code>를 가진 텍스트 블록에 스키마에서 허용하지 않는 마크 <code>({{orphanedMarks, list}})</code>가 포함되어 있습니다.',
  /** Title for the alert indicating that the Portable Text field has an invalid value */
  'inputs.portable-text.invalid-value.title': '잘못된 Portable Text 값',
  /** Title of "bulleted" list type */
  'inputs.portable-text.list-type.bullet': '글머리 기호 목록',
  /** Title of numbered list type */
  'inputs.portable-text.list-type.number': '번호가 매겨진 목록',
  /** Title of the "h1" block style */
  'inputs.portable-text.style.h1': '제목 1',
  /** Title of the "h2" block style */
  'inputs.portable-text.style.h2': '제목 2',
  /** Title of the "h3" block style */
  'inputs.portable-text.style.h3': '제목 3',
  /** Title of the "h4" block style */
  'inputs.portable-text.style.h4': '제목 4',
  /** Title of the "h5" block style */
  'inputs.portable-text.style.h5': '제목 5',
  /** Title of the "h6" block style */
  'inputs.portable-text.style.h6': '제목 6',
  /** Title shown when multiple blocks of varying styles is selected */
  'inputs.portable-text.style.multiple': '다중',
  /** Title of fallback when no style is given for a block */
  'inputs.portable-text.style.none': '스타일 없음',
  /** Title of the "normal" block style */
  'inputs.portable-text.style.normal': '보통',
  /** Title of the "quote" block style */
  'inputs.portable-text.style.quote': '인용구',
  /** Label for action to clear the current value of the reference field */
  'inputs.reference.action.clear': '지우기',
  /** Label for action to create a new document from the reference input */
  'inputs.reference.action.create-new-document': '새로 만들기',
  /** Label for action to create a new document from the reference input, when there are multiple templates or document types to choose from */
  'inputs.reference.action.create-new-document-select': '새로 만들기…',
  /** Label for action to duplicate the current item to a new item (used within arrays) */
  'inputs.reference.action.duplicate': '복제하기',
  /** Label for action that opens the referenced document in a new tab */
  'inputs.reference.action.open-in-new-tab': '새 탭에서 열기',
  /** Label for action to remove the reference from an array */
  'inputs.reference.action.remove': '제거하기',
  /** Label for action to replace the current value of the field */
  'inputs.reference.action.replace': '교체하기',
  /** Label for action to cancel a previously initiated replace action  */
  'inputs.reference.action.replace-cancel': '교체 취소하기',
  /** The cross-dataset reference field currently has a reference, but the feature has been disabled since it was created. This explains what can/cannot be done in its current state. */
  'inputs.reference.cross-dataset.feature-disabled-actions':
    '이 필드의 기존 참조는 여전히 삭제할 수 있지만, 기능이 비활성화된 상태로 다른 문서로 변경할 수는 없습니다.',
  /** A cross-dataset reference field exists but the feature has been disabled. A <DocumentationLink> component is available. */
  'inputs.reference.cross-dataset.feature-disabled-description':
    '이 기능은 비활성화되었습니다. <DocumentationLink>문서</DocumentationLink>에서 활성화하는 방법을 읽어보세요.',
  /** Title for a warning telling the user that the current project does not have the "cross dataset references" feature */
  'inputs.reference.cross-dataset.feature-unavailable-title':
    '사용할 수 없는 기능: 크로스 데이터셋 참조',
  /** The cross-dataset reference points to a document with an invalid type  */
  'inputs.reference.cross-dataset.invalid-type':
    '참조된 문서가 유효하지 않은 타입입니다 ({{typeName}}) <JsonValue/>',
  /** The referenced document will open in a new tab (due to external studio) */
  'inputs.reference.document-opens-in-new-tab': '이 문서는 새 탭에서 열립니다',
  /** Error title for when the document is unavailable (for any possible reason) */
  'inputs.reference.error.document-unavailable-title': '문서를 사용할 수 없음',
  /** Error title for when the referenced document failed to be loaded */
  'inputs.reference.error.failed-to-load-document-title': '참조된 문서를 불러오는 데 실패했습니다',
  /** Error title for when the reference search returned a document that is not an allowed type for the field */
  'inputs.reference.error.invalid-search-result-type-title':
    '참조에 유효하지 않은 유형을 반환한 검색: "{{returnedType}}"',
  /** Error description for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-description':
    '참조된 문서 (<code>{{documentId}}</code>)는 유형 <code>{{actualType}}</code>입니다. 스키마에 따르면, 참조된 문서는 <AllowedTypes /> 유형만 가능합니다.',
  /** Error title for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-title': '유효하지 않은 유형의 문서',
  /** Error description for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-description':
    '참조된 문서에 접근할 수 없습니다. 권한이 충분하지 않습니다',
  /** Error title for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-title': '권한 부족',
  /** Error description for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-description':
    '참조된 문서가 존재하지 않습니다 (ID: <code>{{documentId}}</code>). 참조를 제거하거나 다른 문서로 교체할 수 있습니다.',
  /** Error title for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-title': '찾을 수 없음',
  /** Label for button that clears the reference when it points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document.clear-button-label': '지우기',
  /** Error title for when the search for a reference failed. Note that the message sent by the backend may not be localized. */
  'inputs.reference.error.search-failed-title': '참조 검색 실패',
  /** Alternative text for the image shown in cross-dataset reference input */
  'inputs.reference.image-preview-alt-text': '참조된 문서의 이미지 미리보기',
  /** Description for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-description':
    '<strong>{{referencedDocument}}</strong>가 발행되었고 이 참조는 이제 완성되어야 합니다.',
  /** Title for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-title': '참조 완성하기',
  /** Description for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-description':
    '<strong>{{referencedDocument}}</strong>가 발행되었고 이 참조는 이제 강한 참조로 변환되어야 합니다.',
  /** Title for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-title': '강한 참조로 변환하기',
  /** Label for button that triggers the action that strengthen a reference */
  'inputs.reference.incomplete-reference.strengthen-button-label': '강한 참조로 변환하기',
  /** Label for button that triggers a retry attempt for reference metadata  */
  'inputs.reference.metadata-error.retry-button-label': '재시도',
  /** Title for alert shown when reference metadata fails to be loaded */
  'inputs.reference.metadata-error.title': '참조 메타데이터를 불러올 수 없음',
  /** Message shown when no documents were found that matched the given search string */
  'inputs.reference.no-results-for-query':
    '<strong>“{{searchTerm}}”</strong>에 대한 결과가 없습니다',
  /** Text for tooltip showing when a document was edited, using relative time (eg "how long ago was it edited?") */
  'inputs.reference.preview.edited-at-time': '편집된 시간 <RelativeTime/>',
  /** Accessibility label for icon indicating that document does _not_ have any unpublished changes */
  'inputs.reference.preview.has-no-unpublished-changes-aria-label': '발행되지 않은 편집 없음',
  /** Accessibility label for icon indicating that document has unpublished changes */
  'inputs.reference.preview.has-unpublished-changes-aria-label': '편집됨',
  /** Accessibility label for icon indicating that document does _not_ have a published version */
  'inputs.reference.preview.is-not-published-aria-label': '게시되지 않음',
  /** Accessibility label for icon indicating that document has a published version */
  'inputs.reference.preview.is-published-aria-label': '게시됨',
  /** Text for tooltip indicating that a document has no unpublished edits */
  'inputs.reference.preview.no-unpublished-edits': '발행되지 않은 편집 없음',
  /** Text for tooltip indicating that a document has not yet been published */
  'inputs.reference.preview.not-published': '게시되지 않음',
  /** Text for tooltip showing when a document was published, using relative time (eg "how long ago was it published?") */
  'inputs.reference.preview.published-at-time': '<RelativeTime/>에 게시됨',
  /** The referenced document no longer exist and might have been deleted (for weak references) */
  'inputs.reference.referenced-document-does-not-exist':
    '참조된 문서가 더 이상 존재하지 않고 삭제되었을 수 있습니다 (문서 ID: <code>{{documentId}}</code>).',
  /** The referenced document could not be displayed to the user because of insufficient permissions */
  'inputs.reference.referenced-document-insufficient-permissions':
    '권한이 부족하여 참조된 문서에 접근할 수 없습니다',
  /** Label for when the reference input is resolving the initial value for an item */
  'inputs.reference.resolving-initial-value': '초기 값을 확인 중…',
  /** Placeholder shown in a reference input with no current value */
  'inputs.reference.search-placeholder': '검색하려면 입력하세요',
  /** Explanation of the consequences of leaving the reference as strong instead of weak */
  'inputs.reference.strength-mismatch.is-strong-consquences':
    '이 참조를 약한 참조로 변환하거나 이 참조를 제거하기 전까지는 참조된 문서를 삭제할 수 없습니다.',
  /** Description for alert shown when a reference is supposed to be weak, but the actual value is strong */
  'inputs.reference.strength-mismatch.is-strong-description':
    '이 참조는 <em>강함</em>이지만, 현재 스키마에 따르면 <em>약함</em>이어야 합니다.',
  /** Explanation of the consequences of leaving the reference as weak instead of strong */
  'inputs.reference.strength-mismatch.is-weak-consquences':
    '이것은 이 참조를 삭제하지 않고 참조된 문서를 삭제할 수 있게 하여, 이 필드가 존재하지 않는 문서를 참조하게 됩니다.',
  /** Description for alert shown when a reference is supposed to be strong, but the actual value is weak */
  'inputs.reference.strength-mismatch.is-weak-description':
    '이 참조는 <em>약함</em>이지만, 현재 스키마에 따르면 <em>강함</em>이어야 합니다.',
  /** Label for button that triggers the action that strengthens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.strengthen-button-label': '강한 참조로 변환하기',
  /** Title for alert shown when a reference is supposed to be weak/strong, but the actual value is the opposite of what it is supposed to be */
  'inputs.reference.strength-mismatch.title': '참조 강도 불일치',
  /** Label for button that triggers the action that weakens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.weaken-button-label': '약한 참조로 변환',
  /** Action message for generating the slug */
  'inputs.slug.action.generate': '생성하기',
  /** Loading message for when the input is actively generating a slug */
  'inputs.slug.action.generating': '생성 중…',
  /** Error message for when the source to generate a slug from is missing */
  'inputs.slug.error.missing-source':
    '소스가 누락되었습니다. 스키마에서 {{schemaType}} 유형의 소스를 확인하세요',
  /** Placeholder for an empty tag input */
  'inputs.tags.placeholder': '태그를 입력하고 ENTER를 누르세요…',
  /** Placeholder for an empty tag input on touch devices */
  'inputs.tags.placeholder_touch': '태그 입력…',
  /** Convert to `{{targetType}}` */
  'inputs.untyped-value.convert-button.text': '<code>{{targetType}}</code>(으)로 변환',
  /** Encountered an object value without a <code>_type</code> property. */
  'inputs.untyped-value.description': '<code>_type</code> 속성이 없는 객체 값이 발견되었습니다.',
  /** Either remove the <code>name</code> property of the object declaration, or set <code>_type</code> property on items. */
  'inputs.untyped-value.details.description':
    '객체 선언의 <code>name</code> 속성을 제거하거나 항목에 <code>_type</code> 속성을 설정하세요.',
  /** Current value (<code>object</code>): */
  'inputs.untyped-value.details.json-dump-prefix': '현재 값 (<code>object</code>):',
  /** The following types are valid here according to schema: */
  'inputs.untyped-value.details.multi-type-description':
    '스키마에 따르면 여기에 유효한 타입은 다음과 같습니다:',
  /** Developer info */
  'inputs.untyped-value.details.title': '개발자 정보',
  /** Property value missing <code>_type</code> */
  'inputs.untyped-value.title': '속성 값에 <code>_type</code>이 누락됨',
  /** Unset value */
  'inputs.untyped-value.unset-item-button.text': '값 해제',

  /** The fallback explanation if no context is provided */
  'insufficient-permissions-message.not-authorized-explanation':
    '이 기능에 접근할 권한이 없습니다.',
  /** The explanation when unable to create any document at all */
  'insufficient-permissions-message.not-authorized-explanation_create-any-document':
    '문서를 생성할 수 있는 권한이 없습니다.',
  /** The explanation when unable to create a particular document */
  'insufficient-permissions-message.not-authorized-explanation_create-document':
    '이 문서를 생성할 수 있는 권한이 없습니다.',
  /** The explanation when unable to create a particular type of document */
  'insufficient-permissions-message.not-authorized-explanation_create-document-type':
    '이 종류의 문서를 생성할 수 있는 권한이 없습니다.',
  /** The explanation when unable to create a new reference in a document */
  'insufficient-permissions-message.not-authorized-explanation_create-new-reference':
    '새 참조를 생성할 권한이 없습니다.',
  /** The explanation when unable to delete a particular document */
  'insufficient-permissions-message.not-authorized-explanation_delete-document':
    '이 문서를 삭제할 수 있는 권한이 없습니다.',
  /** The explanation when unable to discard changes in a particular document */
  'insufficient-permissions-message.not-authorized-explanation_discard-changes':
    '이 문서의 변경 사항을 폐기할 수 있는 권한이 없습니다.',
  /** The explanation when unable to duplicate a particular document */
  'insufficient-permissions-message.not-authorized-explanation_duplicate-document':
    '이 문서를 복제할 수 있는 권한이 없습니다.',
  /** The explanation when unable to publish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_publish-document':
    '이 문서를 게시할 수 있는 권한이 없습니다.',
  /** The explanation when unable to unpublish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_unpublish-document':
    '이 문서를 게시 취소할 수 있는 권한이 없습니다.',
  /** Appears after the not-authorized message. Lists the current roles. */
  'insufficient-permissions-message.roles': '당신의 역할: <Roles/>',
  /** The title for the insufficient permissions message component */
  'insufficient-permissions-message.title': '권한 부족',

  /** Unexpected error: `{{error}}` */
  'member-field-error.unexpected-error': '예상치 못한 오류: {{error}}',

  /** Button label for "Create new document" button */
  'new-document.button': '새로 만들기',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are templates/types available for creation
   */
  'new-document.create-new-document-label': '새 문서…',
  /** Placeholder for the "filter" input within the new document menu */
  'new-document.filter-placeholder': '필터',
  /** Loading indicator text within the new document menu */
  'new-document.loading': '로딩 중…',
  /** Accessibility label for the list displaying options in the new document menu */
  'new-document.new-document-aria-label': '새 문서',
  /** Message for when there are no document type options in the new document menu */
  'new-document.no-document-types-found': '문서 유형을 찾을 수 없습니다',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are no templates/types to create from
   */
  'new-document.no-document-types-label': '문서 유형 없음',
  /** Message for when no results are found for a specific search query in the new document menu */
  'new-document.no-results': '<strong>{{searchQuery}}</strong>에 대한 결과가 없습니다',
  /** Aria label for the button that opens the "Create new document" popover/dialog */
  'new-document.open-dialog-aria-label': '새 문서 만들기',
  /** Title for "Create new document" dialog */
  'new-document.title': '새 문서 만들기',

  /** Label for action to manage members of the current studio project */
  'presence.action.manage-members': '멤버 관리',
  /** Accessibility label for presence menu button */
  'presence.aria-label': '여기 있는 사람',
  /** Message description for when no one else is currently present */
  'presence.no-one-else-description':
    '프로젝트에 사람들을 초대하여 그들의 온라인 상태를 확인하세요.',
  /** Message title for when no one else is currently present */
  'presence.no-one-else-title': '다른 사람이 없습니다',
  /** Message for when a user is not in a document (displayed in the global presence menu) */
  'presence.not-in-a-document': '문서에 있지 않음',
  /** Tooltip content text for presence menu button */
  'presence.tooltip-content': undefined, // 'Who is here'

  /** Fallback title shown when a preview does not provide a title */
  'preview.default.title-fallback': '제목 없음',
  /** Fallback preview value for types that have "no value" (eg null, undefined) */
  'preview.fallback.no-value': '(값 없음)',
  /** Alternative text for image being shown while image is being uploaded, in previews */
  'preview.image.file-is-being-uploaded.alt-text': '현재 업로드 중인 이미지',

  /* Relative time, just now */
  'relative-time.just-now': '방금',

  /** Accessibility label to open search action when the search would go fullscreen (eg on narrower screens) */
  'search.action-open-aria-label': '검색 열기',
  /** Action label for adding a search filter */
  'search.action.add-filter': '필터 추가하기',
  /** Action label for clearing search filters */
  'search.action.clear-filters': '필터 지우기',
  /** Label for action to clear recent searches */
  'search.action.clear-recent-searches': '최근 검색 기록 지우기',
  /** Accessibility label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-aria-label': '선택된 필터 지우기',
  /** Label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-label': '지우기',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to close the search */
  'search.action.close-search-aria-label': '검색 닫기',
  /** Accessibility label for filtering by document type */
  'search.action.filter-by-document-type-aria-label': '문서 유형별로 필터하기',
  /** Accessibility action label for removing an already applied search filter */
  'search.action.remove-filter-aria-label': '필터 제거하기',
  /**
   * Text displayed when either no document type(s) have been selected, or we need a fallback,
   * eg "Search for all types".
   */
  'search.action.search-all-types': '모든 문서 유형 검색',
  /**
   * Text displayed when we are able to determine one or more document types that will be used for
   * searching, and can fit within the space assigned by the design.
   */
  'search.action.search-specific-types': '{{types, list}} 검색',
  /**
   * Text displayed when we are able to determine one or more document types that will be used for
   * searching, but cannot list them all within the space assigned by the design, so we need an
   * additional "and X more" suffix. Allows using pluralization suffixes, eg `_one`, `_other` etc.
   */
  'search.action.search-specific-types-truncated': '{{types, list}} 와(과) {{count}}개 더 검색',
  /** Dialog title for action to select an asset of unknown type */
  'search.action.select-asset': '자산 선택',
  /** Dialog title for action to select a file asset */
  'search.action.select-asset_file': '파일 자산 선택',
  /** Dialog title for action to select an image asset */
  'search.action.select-asset_image': '이미지 자산 선택',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-aria-label_hide': '필터 숨기기',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-aria-label_show': '필터 보이기',
  /** Label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-label_hide': '필터 숨기기',
  /** Label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-label_show': '필터 보기',
  /** Tooltip text for the global search button */
  'search.button.tooltip': '검색',
  /**
   * A list of provided types (use `list` formatter preferably).
   */
  'search.document-type-list': '{{types, list}}',
  /**
   * In the context of a list of document types - no filtering selection has been done,
   * thus the default is "all types".
   */
  'search.document-type-list-all-types': '모든 유형',
  /**
   * A list of provided types that has been truncated - more types are included but not displayed,
   * thus we need to indicate that there are more. Allows using pluralization suffixes,
   * eg `_one`, `_other` etc.
   */
  'search.document-type-list-truncated': '{{types, list}} 와(과) {{count}}개 더',
  /** Accessibility label for list displaying the available document types */
  'search.document-types-aria-label': '문서 유형들',
  /** Label for when no document types matching the filter are found */
  'search.document-types-no-matches-found': '{{filter}}에 대한 일치하는 문서 유형이 없습니다',
  /** Description for error when a filter cannot be displayed, describes that you should check the schema */
  'search.error.display-filter-description':
    '스키마에 정의된 옵션이 유효하지 않을 수 있음을 나타냅니다.',
  /** Title for error when a filter cannot be displayed (mainly a developer-oriented error) */
  'search.error.display-filter-title': '이 필터를 표시하는 동안 오류가 발생했습니다.',
  /** Description for error when no valid asset source is found, describes that you should check the the current studio config */
  'search.error.no-valid-asset-source-check-config-description':
    '스튜디오 구성 파일에서 활성화되어 있는지 확인하세요.',
  /** Description for error when no valid asset source is found, describes that only the default asset is supported */
  'search.error.no-valid-asset-source-only-default-description':
    '현재 기본 자산 소스만 지원됩니다.',
  /** Title for error when no valid asset sources found */
  'search.error.no-valid-asset-source-title': '유효한 자산 소스를 찾을 수 없습니다.',
  /** Helpful description for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-help-description': '다시 시도하거나 연결을 확인해주세요',
  /** Title label for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-title': '검색 중에 문제가 발생했습니다',
  /**
   * Label for "All fields", a label that appears above the list of available fields when filtering.
   * If one or more document type has been chosen as filter, this label is replaced with a group of
   * fields per selected document type
   */
  'search.filter-all-fields-header': '모든 필드',
  /** Label for the action of changing from one file to a different file in asset search filter */
  'search.filter-asset-change_file': '파일 변경',
  /** Label for the action of changing from one image to a different image in asset search filter */
  'search.filter-asset-change_image': '이미지 변경',
  /** Label for the action of clearing the currently selected asset in an image/file filter */
  'search.filter-asset-clear': '지우기',
  /** Label for the action of selecting a file in asset search filter */
  'search.filter-asset-select_file': '파일 선택',
  /** Label for the action of selecting an image in asset search filter */
  'search.filter-asset-select_image': '이미지 선택',
  /** Label for boolean filter - false */
  'search.filter-boolean-false': '거짓',
  /** Label for boolean filter - true */
  'search.filter-boolean-true': '참',
  /** Accessibility label for list that lets you filter fields by title, when adding a new filter in search */
  'search.filter-by-title-aria-label': '제목별로 필터하기',
  /** Accessibility label for date filter input */
  'search.filter-date-aria-label': '날짜',
  /** Accessibility label for selecting end date on the date range search filter */
  'search.filter-date-range-end-date-aria-label': '종료 날짜',
  /** Accessibility label for selecting start date on the date range search filter */
  'search.filter-date-range-start-date-aria-label': '시작 날짜',
  /**
   * Label for "Days"/"Months"/"Years" when selecting it as unit in "X days ago" search filter.
   * Capitalized, as it would be listed in a dropdown.
   */
  'search.filter-date-unit_days': '일',
  'search.filter-date-unit_months': '월',
  'search.filter-date-unit_years': '년',
  /** Accessibility label for selecting the unit (day/month/year) when adding "X days ago" search filter */
  'search.filter-date-unit-aria-label': '단위 선택',
  /** Accessibility label for the input value (days/months/years) when adding "X days ago" search filter */
  'search.filter-date-value-aria-label': '단위 값',
  /** Label for "field description" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-description': '필드 설명',
  /** Label for "field name" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-name': '필드 이름',
  /** Label for "Used in document types", a list of the document types a field appears in. Shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-used-in-document-types': '문서 유형에서 사용됨',
  /** Label for when no fields/filters are found for the given term */
  'search.filter-no-matches-found': '{{filter}}에 대한 일치하는 항목이 없습니다',
  /** Placeholder value for maximum numeric value filter */
  'search.filter-number-max-value-placeholder': '최대값',
  /** Placeholder value for minimum numeric value filter */
  'search.filter-number-min-value-placeholder': '최소값',
  /** Placeholder value for the number filter */
  'search.filter-number-value-placeholder': '값',
  /** Placeholder for the "Filter" input, when narrowing possible fields/filters */
  'search.filter-placeholder': '필터',
  /** Label for the action of clearing the currently selected document in a reference filter */
  'search.filter-reference-clear': '지우기',
  /**
   * Label for "shared fields", a label that appears above a list of fields that all filtered types
   * have in common, when adding a new filter. For instance, if "book" and "employee" both have a
   * "title" field, this field would be listed under "shared fields".
   * */
  'search.filter-shared-fields-header': '공유 필드',
  /** Placeholder value for the string filter */
  'search.filter-string-value-placeholder': '값',
  /** Label/placeholder prompting user to select one of the predefined, allowed values for a string field */
  'search.filter-string-value-select-predefined-value': '선택…',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (singular) */
  'search.filters-aria-label_one': '필터',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (plural) */
  'search.filters-aria-label_other': '필터들',
  /** Label for instructions on how to use the search - displayed when no recent searches are available */
  'search.instructions': '<ControlsIcon/>을 사용하여 검색을 세분화하세요',
  /** Helpful description for when no search results are found */
  'search.no-results-help-description': '다른 키워드를 시도하거나 필터를 조정해보세요',
  /** Title label for when no search results are found */
  'search.no-results-title': '검색 결과가 없습니다',
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
    '<Field/> <Operator>는</Operator> <Value>{{count}}개 항목</Value>',
  'search.operator.array-count-equal.description_other':
    '<Field/> <Operator>는</Operator> <Value>{{count}}개 항목들</Value>',
  'search.operator.array-count-equal.name': '수량이',
  /* Array should have a count greater than given filter value */
  'search.operator.array-count-gt.description_one':
    '<Field/> <Operator>는 ></Operator> <Value>{{count}}개 항목</Value>',
  'search.operator.array-count-gt.description_other':
    '<Field/> <Operator>는 ></Operator> <Value>{{count}}개 항목들</Value>',
  'search.operator.array-count-gt.name': '수량이 더 많음',
  /* Array should have a count greater than or equal to the given filter value */
  'search.operator.array-count-gte.description_one':
    '<Field/> <Operator>는 ≥</Operator> <Value>{{count}}개 항목</Value>',
  'search.operator.array-count-gte.description_other':
    '<Field/> <Operator>는 ≥</Operator> <Value>{{count}}개 항목들</Value>',
  'search.operator.array-count-gte.name': '수량이 더 많거나 같음',
  /* Array should have a count less than given filter value */
  'search.operator.array-count-lt.description_one':
    '<Field/> <Operator>는 <</Operator> <Value>{{count}}개 항목</Value>',
  'search.operator.array-count-lt.description_other':
    '<Field/> <Operator>는 <</Operator> <Value>{{count}}개 항목들</Value>',
  'search.operator.array-count-lt.name': '수량이 더 적음',
  /* Array should have a count less than or equal to the given filter value */
  'search.operator.array-count-lte.description_one':
    '<Field/> <Operator>는 ≤</Operator> <Value>{{count}}개 항목</Value>',
  'search.operator.array-count-lte.description_other':
    '<Field/> <Operator>는 ≤</Operator> <Value>{{count}}개 항목들</Value>',
  'search.operator.array-count-lte.name': '수량이 더 적거나 같음',
  /* Array should have a count that is not equal to the given filter value */
  'search.operator.array-count-not-equal.description_one':
    '<Field/> <Operator>는 가지고 있지 않음</Operator> <Value>{{count}}개 항목</Value>',
  'search.operator.array-count-not-equal.description_other':
    '<Field/> <Operator>는 가지고 있지 않음</Operator> <Value>{{count}}개 항목들</Value>',
  'search.operator.array-count-not-equal.name': '수량이 아님',
  /**
   * Array should have a count within the range of given filter values.
   * Gets passed `{{from}}` and `{{to}}` values.
   **/
  'search.operator.array-count-range.description':
    '<Field/> <Operator>는 사이에 있음</Operator> <Value>{{from}} → {{to}}개 항목들</Value>',
  'search.operator.array-count-range.name': '수량이 사이에 있음',
  /* Array should include the given value */
  'search.operator.array-list-includes.description':
    '<Field/> <Operator>포함함</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-includes.name': '포함함',
  /* Array should not include the given value */
  'search.operator.array-list-not-includes.description':
    '<Field/> <Operator>포함하지 않음</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-not-includes.name': '포함하지 않음',
  /* Array should include the given reference */
  'search.operator.array-reference-includes.description':
    '<Field/> <Operator>포함함</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-includes.name': '포함함',
  /* Array should not include the given reference */
  'search.operator.array-reference-not-includes.description':
    '<Field/> <Operator>포함하지 않음</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-not-includes.name': '포함하지 않음',
  /* Asset (file) should be the selected asset */
  'search.operator.asset-file-equal.description':
    '<Field/> <Operator>임</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-equal.name': '임',
  /* Asset (file) should not be the selected asset */
  'search.operator.asset-file-not-equal.description':
    '<Field/> <Operator>아님</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-not-equal.name': '아님',
  /* Asset (image) should be the selected asset */
  'search.operator.asset-image-equal.description':
    '<Field/> <Operator>임</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-equal.name': '임',
  /* Asset (image) should not be the selected asset */
  'search.operator.asset-image-not-equal.description':
    '<Field/> <Operator>아님</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-not-equal.name': '아님',
  /**
   * Boolean value should be the given filter value (true/false).
   * Context passed is `true` and `false`, allowing for more specific translations:
   * - `search.operator.boolean-equal.description_true`
   * - `search.operator.boolean-equal.description_false`
   */
  'search.operator.boolean-equal.description':
    '<Field/> <Operator>임</Operator> <Value>{{value}}</Value>',
  'search.operator.boolean-equal.name': '임',
  /* Date should be after (later than) given filter value */
  'search.operator.date-after.description':
    '<Field/> <Operator>는 이후임</Operator> <Value>{{value}}</Value>',
  'search.operator.date-after.name': '이후',
  /* Date should be before (earlier than) given filter value */
  'search.operator.date-before.description':
    '<Field/> <Operator>는 이전임</Operator> <Value>{{value}}</Value>',
  'search.operator.date-before.name': '이전',
  /* Date should be the given filter value */
  'search.operator.date-equal.description':
    '<Field/> <Operator>임</Operator> <Value>{{value}}</Value>',
  'search.operator.date-equal.name': '임',
  /* Date should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-last.description':
    '<Field/> <Operator>는 마지막에 있음</Operator> <Value>{{value}}</Value>',
  'search.operator.date-last.name': '마지막',
  /* Date should not be the given filter value */
  'search.operator.date-not-equal.description':
    '<Field/> <Operator>아님</Operator> <Value>{{value}}</Value>',
  'search.operator.date-not-equal.name': '아님',
  /* Date should be within the range of given filter values */
  'search.operator.date-range.description': '<Field/> <Operator>사이에 있음</Operator> <Value/>',
  'search.operator.date-range.name': '사이에 있음',
  /* Date and time should be after (later than) given filter value */
  'search.operator.date-time-after.description':
    '<Field/> <Operator>는 이후임</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-after.name': '이후',
  /* Date and time should be before (earlier than) given filter value */
  'search.operator.date-time-before.description':
    '<Field/> <Operator>는 이전임</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-before.name': '이전',
  /* Date and time should be the given filter value */
  'search.operator.date-time-equal.description':
    '<Field/> <Operator>임</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-equal.name': '임',
  /* Date and time should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-time-last.description':
    '<Field/> <Operator>는 마지막에 있음</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-last.name': '마지막',
  /* Date and time should not be the given filter value */
  'search.operator.date-time-not-equal.description':
    '<Field/> <Operator>아님</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-not-equal.name': '아님',
  /* Date and time should be within the range of given filter values */
  'search.operator.date-time-range.description':
    '<Field/> <Operator>사이에 있음</Operator> <Value/>',
  'search.operator.date-time-range.name': '사이에 있음',
  /* Value should be defined */
  'search.operator.defined.description':
    '<Field/> <Operator>임</Operator> <Value>비어 있지 않음</Value>',
  'search.operator.defined.name': '비어 있지 않음',
  /* Value should not be defined */
  'search.operator.not-defined.description':
    '<Field/> <Operator>임</Operator> <Value>비어 있음</Value>',
  'search.operator.not-defined.name': '비어 있음',
  /* Number should be the given filter value */
  'search.operator.number-equal.description':
    '<Field/> <Operator>임</Operator> <Value>{{value}}</Value>',
  'search.operator.number-equal.name': '임',
  /* Number should be greater than given filter value */
  'search.operator.number-gt.description':
    '<Field/> <Operator>></Operator> <Value>{{value}}</Value>',
  'search.operator.number-gt.name': '더 큼',
  /* Number should be greater than or the given filter value */
  'search.operator.number-gte.description':
    '<Field/> <Operator>≥</Operator> <Value>{{value}}</Value>',
  'search.operator.number-gte.name': '더 크거나 같음',
  /* Number should be less than given filter value */
  'search.operator.number-lt.description':
    '<Field/> <Operator><</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lt.name': '더 작음',
  /* Number should be less than or the given filter value */
  'search.operator.number-lte.description':
    '<Field/> <Operator>≤</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lte.name': '더 작거나 같음',
  /* Number should not be the given filter value */
  'search.operator.number-not-equal.description':
    '<Field/> <Operator>아님</Operator> <Value>{{value}}</Value>',
  'search.operator.number-not-equal.name': '아님',
  /* Number should be within the range of given filter values */
  'search.operator.number-range.description':
    '<Field/> <Operator>사이에 있음</Operator> <Value>{{from}} → {{to}}</Value>',
  'search.operator.number-range.name': '사이에 있음',
  /* Portable Text should contain the given filter value */
  'search.operator.portable-text-contains.description':
    '<Field/> <Operator>포함함</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-contains.name': '포함함',
  /* Portable Text should be the given filter value */
  'search.operator.portable-text-equal.description':
    '<Field/> <Operator>임</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-equal.name': '임',
  /* Portable Text should not contain the given filter value */
  'search.operator.portable-text-not-contains.description':
    '<Field/> <Operator>포함하지 않음</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-contains.name': '포함하지 않음',
  /* Portable Text should not be the given filter value */
  'search.operator.portable-text-not-equal.description':
    '<Field/> <Operator>아님</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-equal.name': '아님',
  /* References the given asset (file) */
  'search.operator.reference-asset-file.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-file.name': '파일',
  /* References the given asset (image) */
  'search.operator.reference-asset-image.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-image.name': '이미지',
  /* References the given document */
  'search.operator.reference-document.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-document.name': '문서',
  /* Reference should be the given document */
  'search.operator.reference-equal.description':
    '<Field/> <Operator>임</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-equal.name': '임',
  /* Reference should not be the given document */
  'search.operator.reference-not-equal.description':
    '<Field/> <Operator>아님</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-not-equal.name': '아님',
  /* Slug contains the given value */
  'search.operator.slug-contains.description':
    '<Field/> <Operator>포함함</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-contains.name': '포함함',
  /* Slug equals the given filter value */
  'search.operator.slug-equal.description':
    '<Field/> <Operator>임</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-equal.name': '임',
  /* Slug does not contain the given value */
  'search.operator.slug-not-contains.description':
    '<Field/> <Operator>포함하지 않음</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-contains.name': '포함하지 않음',
  /* Slug does not equal the given filter value */
  'search.operator.slug-not-equal.description':
    '<Field/> <Operator>아님</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-equal.name': '아님',
  /* String contains the given filter value */
  'search.operator.string-contains.description':
    '<Field/> <Operator>포함함</Operator> <Value>{{value}}</Value>',
  'search.operator.string-contains.name': '포함함',
  /* String equals the given filter value */
  'search.operator.string-equal.description':
    '<Field/> <Operator>임</Operator> <Value>{{value}}</Value>',
  'search.operator.string-equal.name': '임',
  /* String equals one of the predefined allowed values */
  'search.operator.string-list-equal.description':
    '<Field/> <Operator>임</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-equal.name': '임',
  /* String does not equal one of the predefined allowed values */
  'search.operator.string-list-not-equal.description':
    '<Field/> <Operator>아님</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-not-equal.name': '아님',
  /* String does not contain the given filter value */
  'search.operator.string-not-contains.description':
    '<Field/> <Operator>포함하지 않음</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-contains.name': '포함하지 않음',
  /* String does not equal the given filter value */
  'search.operator.string-not-equal.description':
    '<Field/> <Operator>아님</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-equal.name': '아님',
  /** Label for the "Best match" search ordering type */
  'search.ordering.best-match-label': '최적 일치',
  /** Label for the "Created: Oldest first" search ordering type */
  'search.ordering.created-ascending-label': '생성됨: 오래된 순',
  /** Label for the "Created: Newest first" search ordering type */
  'search.ordering.created-descending-label': '생성됨: 최신 순',
  /** Label for the "Updated: Oldest first" search ordering type */
  'search.ordering.updated-ascending-label': '업데이트됨: 오래된 순',
  /** Label for the "Updated: Newest first" search ordering type */
  'search.ordering.updated-descending-label': '업데이트됨: 최신 순',
  /** Placeholder text for the global search input field */
  'search.placeholder': '검색',
  /** Accessibility label for the recent searches section, shown when no valid search terms has been given */
  'search.recent-searches-aria-label': '최근 검색',
  /** Label/heading shown for the recent searches section */
  'search.recent-searches-label': '최근 검색',
  /** Accessibility label for the search results section, shown when the user has typed valid terms */
  'search.search-results-aria-label': '검색 결과',

  /** Accessibility label for the navbar status button */
  'status-button.aria-label': undefined, // 'Configuration status'

  /** Description for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-description':
    '문서 기록 트랜잭션은 영향을 받지 않았습니다.',
  /** Title for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-title':
    '문서 변경 사항을 검색하는 동안 오류가 발생했습니다.',
  /** Error description for when the document doesn't have history */
  'timeline.error.no-document-history-description':
    '문서 내용을 변경하면, 이 메뉴에 문서 버전이 표시됩니다.',
  /** Error title for when the document doesn't have history */
  'timeline.error.no-document-history-title': '문서 기록 없음',
  /** Error prompt when revision cannot be loaded */
  'timeline.error.unable-to-load-revision': '리비전을 불러올 수 없습니다',
  /** Label for when the timeline item is the latest in the history */
  'timeline.latest': '최신',
  /** Label for latest version for timeline menu dropdown */
  'timeline.latest-version': '최신 버전',
  /** The aria-label for the list of revisions in the timeline */
  'timeline.list.aria-label': '문서 개정 목록',
  /** Label for loading history */
  'timeline.loading-history': '기록 로딩 중…',
  /** Label shown in review changes timeline when a document has been created */
  'timeline.operation.created': '생성됨',
  /** Label shown in review changes timeline when a document has been created, with a timestamp */
  'timeline.operation.created_timestamp': '생성됨: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was initially created */
  'timeline.operation.created-initial': '최초 생성됨',
  /** Label shown in review changes timeline when a document was initially created, with a timestamp */
  'timeline.operation.created-initial_timestamp': '최초 생성됨: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been deleted */
  'timeline.operation.deleted': '삭제됨',
  /** Label shown in review changes timeline when a document has been deleted, with a timestamp */
  'timeline.operation.deleted_timestamp': '삭제됨: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been discarded */
  'timeline.operation.draft-discarded': '초안 폐기됨',
  /** Label shown in review changes timeline when a draft has been discarded, with a timestamp */
  'timeline.operation.draft-discarded_timestamp': '초안 폐기됨: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been edited */
  'timeline.operation.edited-draft': '편집됨',
  /** Label shown in review changes timeline when a draft has been edited, with a timestamp */
  'timeline.operation.edited-draft_timestamp': '편집됨: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been edited live */
  'timeline.operation.edited-live': '실시간 편집됨',
  /** Label shown in review changes timeline when a document has been edited live, with a timestamp */
  'timeline.operation.edited-live_timestamp': '실시간 편집됨: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was published */
  'timeline.operation.published': '게시됨',
  /** Label shown in review changes timeline when a document was published, with a timestamp */
  'timeline.operation.published_timestamp': '게시됨: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was unpublished */
  'timeline.operation.unpublished': '게시 취소됨',
  /** Label shown in review changes timeline when a document was unpublished, with a timestamp */
  'timeline.operation.unpublished_timestamp': '게시 취소됨: {{timestamp, datetime}}',
  /**
   * Label for determining since which version the changes for timeline menu dropdown are showing.
   * Receives the time label as a parameter (`timestamp`).
   */
  'timeline.since': '시작 시간: {{timestamp, datetime}}',
  /** Label for missing change version for timeline menu dropdown are showing */
  'timeline.since-version-missing': '시작 시간: 알 수 없는 버전',

  /**Aria label for the action buttons in the PTE toolbar */
  'toolbar.portable-text.action-button-aria-label': undefined, // '{{action}}'

  'user-menu.action.free-trial_other': '시험 사용 기간이 {{count}}일 남았습니다',
  /** Label for the button showed after trial ended */
  'user-menu.action.free-trial-finished': '무료에서 업그레이드',
  /** Label for action to invite members to the current sanity project */
  'user-menu.action.invite-members': '멤버 초대',
  /** Accessibility label for action to invite members to the current sanity project */
  'user-menu.action.invite-members-aria-label': '멤버 초대',
  /** Label for action to manage the current sanity project */
  'user-menu.action.manage-project': '프로젝트 관리',
  /** Accessibility label for the action to manage the current project */
  'user-menu.action.manage-project-aria-label': '프로젝트 관리',
  /** Tooltip helper text when portable text annotation is disabled for empty block*/
  'user-menu.action.portable-text.annotation-disabled_empty-block':
    '빈 블록에 {{name}}을 적용할 수 없습니다',
  /** Tooltip helper text when portable text annotation is disabled for multiple blocks */
  'user-menu.action.portable-text.annotation-disabled_multiple-blocks':
    '여러 블록에 {{name}}을 적용할 수 없습니다',
  /** Label for action to sign out of the current sanity project */
  'user-menu.action.sign-out': '로그아웃',
  /** Title for appearance section for the current studio (dark / light / system scheme) */
  'user-menu.appearance-title': '외관',
  /** Label for close menu button for user menu */
  'user-menu.close-menu': '메뉴 닫기',
  /** Description for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-description': '다크 외관 사용',
  /** Title for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-title': '다크',
  /** Description for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-description': '라이트 모양 사용하기',
  /** Title for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-title': '라이트',
  /** Description for using "system apparence" in the appearance user menu */
  'user-menu.color-scheme.system-description': '시스템 외관 사용',
  /** Title for using system apparence in the appearance user menu */
  'user-menu.color-scheme.system-title': '시스템',
  /** Title for locale section for the current studio */
  'user-menu.locale-title': '언어',
  /** Label for tooltip to show which provider the currently logged in user is using */
  'user-menu.login-provider': '{{providerTitle}}로 로그인됨',
  /** Label for open menu button for user menu */
  'user-menu.open-menu': '메뉴 열기',

  /**
   * Label for action to add a workspace (currently a developer-oriented action, as this will
   * lead to the documentation on workspace configuration)
   */
  'workspaces.action.add-workspace': '워크스페이스 추가',
  /**
   * Label for action to choose a different workspace, in the case where you are not logged in,
   * have selected a workspace, and are faced with the authentication options for the selected
   * workspace. In other words, label for the action shown when you have reconsidered which
   * workspace to authenticate in.
   */
  'workspaces.action.choose-another-workspace': '다른 워크스페이스 선택',
  /** Label for heading that indicates that you can choose your workspace */
  'workspaces.choose-your-workspace-label': '워크스페이스를 선택하세요',
  /** Label for the workspace menu */
  'workspaces.select-workspace-aria-label': '워크스페이스 선택',
  /** Button label for opening the workspace switcher */
  'workspaces.select-workspace-label': '워크스페이스 선택',
  /** Tooltip for the workspace menu */
  'workspaces.select-workspace-tooltip': '작업 공간 선택',
  /** Title for Workplaces dropdown menu */
  'workspaces.title': '워크스페이스',
})
