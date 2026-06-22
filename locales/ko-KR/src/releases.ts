import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for adding a document to release */
  'action.add-document': '문서 추가',
  /** Action text for archiving a release */
  'action.archive': '릴리스 보관',
  /** Tooltip for when the archive release action is disabled due to release being scheduled  */
  'action.archive.tooltip': '이 릴리스를 보관하려면 예약을 취소하세요',
  /** Action text for showing the archived releases */
  'action.archived': '보관됨',
  /** Menu item label for copying release ID */
  'action.copy-release-id.label': '릴리스 ID 복사',
  /** Menu item label for copying release URL */
  'action.copy-release-link.label': '릴리스 URL 복사',
  /** Menu item label for copying release title */
  'action.copy-release-title.label': '릴리스 제목 복사',
  /** Tooltip for copy release actions button */
  'action.copy-release.label': '복사',
  /** Action text for staging a new revert release */
  'action.create-revert-release': '새 릴리스 만들기',
  /** Action text for deleting a release */
  'action.delete-release': '릴리스 삭제',
  /** Menu item label for showing scheduled drafts */
  'action.drafts': '예약된 초안',
  /** Action text for duplicating a release */
  'action.duplicate-release': '릴리스 복제',
  /** Action text for editing a release */
  'action.edit': '릴리스 편집',
  /** Action text for reverting a release immediately without staging changes */
  'action.immediate-revert-release': '지금 되돌리기',
  /** Action text for opening a release */
  'action.open': '활성',
  /** Action text for showing the paused scheduled drafts */
  'action.paused': '일시 중지됨',
  /** Action text for publishing all documents in a release (and the release itself) */
  'action.publish-all-documents': '릴리스 실행',
  /** Menu item label for showing releases (multi-document releases) */
  'action.releases': '릴리스',
  /** Action text for reverting a release */
  'action.revert': '릴리스 되돌리기',
  /** Action message for when document is scheduled for unpublishing a document and you want to no longer unpublish it */
  'action.revert-unpublish-actions': '릴리스 시 게시 취소 되돌리기',
  /** Text for the review changes button in release tool */
  'action.review': '변경 사항 검토',
  /** Action text for scheduling a release */
  'action.schedule': '릴리스 예약...',
  /** Action text for scheduling unpublish of a draft document */
  'action.schedule-unpublish': '게시 취소 예약',
  /** Tooltip text for when schedule unpublish is disabled because document is not published */
  'action.schedule-unpublish.disabled.not-published':
    '게시 취소를 예약하려면 문서가 게시되어 있어야 합니다',
  /** Label for unarchiving a release */
  'action.unarchive': '릴리스 보관 취소',
  /** Action text for unpublishing a document in a release in the context menu */
  'action.unpublish': '게시 취소',
  /** Action message for scheduling an unpublished of a document  */
  'action.unpublish-doc-actions': '릴리스 시 게시 취소',
  /** Action text for unscheduling a release */
  'action.unschedule': '릴리스 예약 취소',

  /** Text for the summary button in release tool */
  'actions.summary': '요약',

  /* The text for the activity event when a document is added to a release */
  'activity.event.add-document': '문서 버전이 추가되었습니다',
  /* The text for the activity event when the release is archived */
  'activity.event.archive': '<strong>{{releaseTitle}}</strong> 릴리스가 보관되었습니다',
  /* The text for the activity event when the release is created */
  'activity.event.create':
    '<strong>{{releaseTitle}}</strong> 릴리스가 생성되었습니다 <ScheduleTarget>대상: </ScheduleTarget>',
  /* The text for the activity event when a document is removed from a release */
  'activity.event.discard-document': '문서 버전이 삭제되었습니다',
  'activity.event.edit': '릴리스 시간을 <ScheduleTarget></ScheduleTarget>(으)로 설정했습니다',
  /**The text to display in the changes when the release type changes to asap */
  'activity.event.edit-time-asap': '가능한 한 빨리',
  /**The text to display in the changes when the release type changes to undecided */
  'activity.event.edit-time-undecided': '미정',
  /* The text for the activity event when the release is published */
  'activity.event.publish': '<strong>{{releaseTitle}}</strong> 릴리스가 게시되었습니다',
  /* The text for the activity event when the release is scheduled */
  'activity.event.schedule': '예약됨으로 표시되었습니다',
  /** The text for the activity event when the release is unarchived */
  'activity.event.unarchive': '<strong>{{releaseTitle}}</strong> 릴리스의 보관이 해제되었습니다',
  /** The text for the activity event when the release is unscheduled */
  'activity.event.unschedule': '예약 취소됨으로 표시되었습니다',
  /** The loading text for when releases are loading */
  'activity.panel.error': '릴리스 활동을 가져오는 중 오류가 발생했습니다',
  /** The loading text for when releases are loading */
  'activity.panel.loading': '릴리스 활동을 불러오는 중',
  /** The title for the activity panel shown in the releases detail screen */
  'activity.panel.title': '활동',

  /** Label for the button to proceed with archiving a release */
  'archive-dialog.confirm-archive-button': '예, 릴리스를 보관합니다',
  /** Description for the dialog confirming the archive of a release with more than one document */
  'archive-dialog.confirm-archive-description_other': '{{count}}개의 문서 버전이 보관됩니다.',
  /** Header for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-header': '이 릴리스를 보관하시겠습니까?',
  /** Title for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-title': "<strong>'{{title}}'</strong> 릴리스를 보관하시겠습니까?",

  /** Description for information card on a published or archived release to description retention effects */
  'archive-info.description':
    '{{retentionDays}}일 동안 사용 가능하며, {{removalDate}}에 자동으로 삭제됩니다. <Link>보존 정책에 대해 알아보기</Link>.',
  /** Title for information card on a archived release */
  'archive-info.title': '이 릴리스는 보관되었습니다',

  /** Banner text showing count of active scheduled drafts requiring confirmation with multiple drafts */
  'banner.confirm-active-scheduled-drafts_other':
    '예약 확인이 필요한 예약된 초안이 {{count}}개 있습니다',
  /** Button text for confirming scheduling of active drafts */
  'banner.confirm-active-scheduled-drafts.button': '예약 재개',
  /** Button text when confirming schedules from paused mode */
  'banner.confirm-active-scheduled-drafts.button-paused': '모든 예약 재개',
  /** Banner text shown when drafts mode is disabled but there are still scheduled drafts */
  'banner.drafts-mode-disabled':
    '초안 모드가 비활성화되었지만 아직 게시 예정인 예약된 초안이 있습니다.',
  /** Banner text shown when navigating to a release that does not exist */
  'banner.release-not-found': '이 릴리스를 찾을 수 없습니다',
  /** Tooltip for the dismiss button in the release not found banner */
  'banner.release-not-found.dismiss': '닫기',
  /** Banner text shown when scheduled drafts feature is disabled but there are still scheduled drafts */
  'banner.scheduled-drafts-disabled':
    '예약된 초안 기능이 비활성화되었지만 아직 게시 예정인 예약된 초안이 있습니다.',

  /** Title for changes to published documents */
  'changes-published-docs.title': '게시된 문서의 변경 사항',

  /** Dialog confirm button text for confirming all scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.confirm-button': '예약 확인',
  /** Dialog description for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.description':
    '일시 중지된 모든 예약된 초안을 의도한 게시 날짜에 예약합니다',
  /** Dialog warning when some scheduled drafts have past dates */
  'confirm-active-scheduled-drafts-dialog.past-dates-warning':
    '일부 예약된 초안은 과거 날짜로 예약되어 있습니다. 예약을 확인하면 해당 문서 버전이 즉시 게시됩니다.',
  /** Dialog title for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.title': '예약된 초안 재개',

  /** Suffix for when a release is a copy of another release */
  'copy-suffix': '복사본',

  /** Confirm button text for overriding existing draft */
  'copy-to-draft-dialog.confirm-button': '예, 초안을 덮어씁니다',
  /** Description for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.description':
    '이 문서의 초안 버전이 이미 존재합니다. 현재 버전을 초안에 복사하고 기존 초안 버전을 덮어씁니다.',
  /** Title for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.title': '초안 버전이 이미 존재합니다',

  /** Text for when a release / document was created */
  created: '<RelativeTime/>에 생성됨',

  /** Activity inspector button text */
  'dashboard.details.activity': '활동',
  /** Text for the releases detail screen in the pin release button. */
  'dashboard.details.pin-release': '스튜디오에 릴리스 고정',
  /** Text for the releases detail screen when a release was published ASAP */
  'dashboard.details.published-asap': '게시됨',
  /** Text for the releases detail screen when a release was published from scheduling */
  'dashboard.details.published-on': '{{date}}에 게시됨',
  /** Text for the releases detail screen in the unpin release button. */
  'dashboard.details.unpin-release': '스튜디오에서 릴리스 고정 해제',

  /** Label for the button to proceed deleting a release */
  'delete-dialog.confirm-delete-button': '예, 릴리스를 삭제합니다',
  /** Description for the dialog confirming the deleting of a release with more than one document */
  'delete-dialog.confirm-delete-description_other': '{{count}}개의 문서 버전이 삭제됩니다.',
  /** Header for deleting a release dialog */
  'delete-dialog.confirm-delete.header': '이 릴리스를 삭제하시겠습니까?',

  /** Label when a release has been deleted by a different user */
  'deleted-release': "'<strong>{{title}}</strong>' 릴리스가 삭제되었습니다",

  /** Text for when there's no changes in a release diff */
  'diff.list-empty': '변경 목록이 비어 있습니다. 문서를 확인하세요',
  /** Text for when there's no changes in a release diff */
  'diff.no-changes': '변경 사항 없음',

  /** Description for discarding a draft of a document dialog */
  'discard-version-dialog.description-draft':
    '이 작업은 이 문서에 적용된 모든 변경 사항을 영구적으로 제거합니다. 이 작업은 취소할 수 없습니다.',
  /** Description for discarding a version of a document dialog */
  'discard-version-dialog.description-release':
    "이 작업은 '<strong>{{releaseTitle}}</strong>' 릴리스 내 이 문서에 적용된 모든 변경 사항을 영구적으로 제거합니다. 이 작업은 취소할 수 없습니다.",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.header-draft': '초안을 삭제하시겠습니까?',
  /** Header for discarding a version from a release of a document dialog */
  'discard-version-dialog.header-release':
    "'<strong>{{releaseTitle}}</strong>' 릴리스에서 문서를 제거하시겠습니까?",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.title-draft': '초안 삭제',
  /** Title for dialog for discarding a version of a document */
  'discard-version-dialog.title-release': '릴리스에서 제거',

  /** Label for when a document in a release has multiple validation warnings */
  'document-validation.error_other': '유효성 검사 오류 {{count}}개',

  /** Label for the button to proceed with duplicating a release */
  'duplicate-dialog.confirm-duplicate-button': '예, 릴리스 복제',
  /** Description for the dialog confirming the duplicate of a release with more than one document */
  'duplicate-dialog.confirm-duplicate-description_other':
    '이 작업은 릴리스와 {{count}}개의 문서 버전을 복제합니다.',
  /** Header for the dialog confirming the duplicate of a release */
  'duplicate-dialog.confirm-duplicate-header': '이 릴리스를 복제하시겠습니까?',

  /** Title text displayed for technical error details */
  'error-details-title': '오류 세부 정보',

  /** Title text when error during release update */
  'failed-edit-title': '변경 사항 저장 실패',

  /** Title text displayed for releases that failed to publish  */
  'failed-publish-title': '게시 실패',

  /** Title text displayed for releases that failed to schedule  */
  'failed-schedule-title': '예약 실패',

  /** Filter tab label for all documents */
  'filter-tab.all': '전체',
  /** Filter tab label for documents with validation errors */
  'filter-tab.errors': '오류',

  /**The text that will be shown in the footer to indicate the time the release was archived */
  'footer.status.archived': '보관됨',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.created': '생성됨',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.edited': '편집됨',
  /**The text that will be shown in the footer to indicate the time the release was published */
  'footer.status.published': '게시됨',
  /**The text that will be shown in the footer to indicate the time the release was unarchived */
  'footer.status.unarchived': '보관 해제됨',

  /** Label text for the loading state whilst release is being loaded */
  'loading-release': '릴리스 불러오는 중',

  /** Text for when documents of a release are loading */
  'loading-release-documents': '문서 불러오는 중',
  /** Description text for when loading documents on a release failed */
  'loading-release-documents.error.description':
    '이 릴리스의 문서를 불러올 수 없습니다. 나중에 다시 시도해 주세요.',
  /** Title text for when loading documents on a release failed */
  'loading-release-documents.error.title': '오류가 발생했습니다',

  /** Label for title of actions for "when releasing" */
  'menu.group.when-releasing': '릴리스 시',
  /** Label for the release menu */
  'menu.label': '릴리스 메뉴',
  /** Tooltip for the release menu */
  'menu.tooltip': '작업',

  /** Text for when no archived releases are found */
  'no-archived-release': '보관된 릴리스 없음',

  /** Tooltip text when there are no paused scheduled drafts */
  'no-paused-release': '일시 중지된 예약 초안 없음',

  /** Text for when no releases are found */
  'no-releases': '릴리스 없음',

  /** Text for when no scheduled drafts are found */
  'no-scheduled-drafts': '예약된 초안 없음',

  /** Text for the button name for the release tool */
  'overview.action.documentation': '문서',
  /** Tooltip for the calendar button in the release overview */
  'overview.calendar.tooltip': '캘린더 보기',
  /** Description for the release tool */
  'overview.description': '릴리스는 함께 관리, 예약 및 롤백할 수 있는 문서 변경 사항의 모음입니다.',
  /** Text for the placeholder in the search release input  */
  'overview.search-releases-placeholder': '릴리스 검색',
  /** Title for the release tool */
  'overview.title': '릴리스',

  /** Tooltip text for releases that have passed their intended publish date */
  'passed-intended-publish-date': '이 릴리스는 예정된 게시 날짜가 지났습니다',

  /** Tooltip text for scheduled drafts that have passed their intended publish date */
  'passed-intended-publish-date-draft': '이 초안은 예정된 게시 날짜가 지났습니다',

  /** Description for when a user doesn't have publish or schedule releases */
  'permission-missing-description':
    '현재 귀하의 역할로 인해 이 릴리스에서 볼 수 있는 항목이 제한됩니다. 이 릴리스를 게시하거나 예약할 수 없습니다.',

  /** Text for when a user doesn't have publish or schedule releases */
  'permission-missing-title': '제한된 접근',

  /** Tooltip label when the user doesn't have permission to archive release */
  'permissions.error.archive': '이 릴리스를 보관할 권한이 없습니다',
  /** Tooltip label when the user doesn't have permission to delete release */
  'permissions.error.delete': '이 릴리스를 삭제할 권한이 없습니다',
  /** Tooltip label when the user doesn't have permission for discarding a version */
  'permissions.error.discard-version': '이 버전을 삭제할 권한이 없습니다',
  /** Tooltip label when the user doesn't have permission to duplicate release */
  'permissions.error.duplicate': '이 릴리스를 복제할 권한이 없습니다',
  /** Tooltip label when the user doesn't have permission to unarchive release */
  'permissions.error.unarchive': '이 릴리스의 보관을 해제할 권한이 없습니다',
  /** Tooltip label when the user doesn't have permission for unpublishing a document */
  'permissions.error.unpublish': '이 문서의 게시를 취소할 권한이 없습니다',

  /** Tooltip text for when one user is editing a document in a release */
  'presence.tooltip.one':
    '{{displayName}}님이 지금 "{{releaseTitle}}" 릴리스에서 이 문서를 편집 중입니다',

  /** Tooltip text for publish release action when there are no documents */
  'publish-action.validation.no-documents': '게시할 문서가 없습니다',

  /** Description for the dialog confirming the publish of a release with multiple documents */
  'publish-dialog.confirm-publish-description_other':
    "'<strong>{{title}}</strong>' 릴리스와 {{releaseDocumentsLength}}개의 문서가 게시됩니다.",
  /** Title for the dialog confirming the publish of a release */
  'publish-dialog.confirm-publish.title': '릴리스와 모든 문서 버전을 게시하시겠습니까?',
  /** Label for when documents in release have validation errors */
  'publish-dialog.validation.error': '일부 문서에 유효성 검사 오류가 있습니다',
  /** Label for when documents are being validated */
  'publish-dialog.validation.loading': '문서 유효성 검사 중...',
  /** Label for the button when the user doesn't have permissions to publish a release */
  'publish-dialog.validation.no-permission': '게시할 권한이 없습니다',

  /** Title for information card on a published release */
  'publish-info.title': '이 릴리스가 성공적으로 게시되었습니다.',

  /** Placeholder title for a release with no title */
  'release-placeholder.title': '제목 없음',

  /** Description for the dialog confirming the revert of a release with multiple documents */
  'revert-dialog.confirm-revert-description_other':
    '{{releaseDocumentsLength}}개의 문서 버전이 되돌려집니다.',
  /** Checkbox label to confirm whether to create a staged release for revert or immediately revert */
  'revert-dialog.confirm-revert.stage-revert-checkbox-label': '릴리스를 즉시 되돌리기',
  /** Title for the dialog confirming the revert of a release */
  'revert-dialog.confirm-revert.title': "'{{title}}' 릴리스를 되돌리시겠습니까?",
  /** Warning card text for when immediately revert a release with history */
  'revert-dialog.confirm-revert.warning-card':
    '이 릴리스의 문서들이 게시된 후 변경되었습니다. 되돌리면 이러한 변경 사항을 덮어씁니다.',

  /** Description of a reverted release */
  'revert-release.description': '"{{title}}"의 문서 버전에 대한 변경 사항을 되돌립니다.',
  /** Title of a reverted release */
  'revert-release.title': '"{{title}}" 되돌리는 중',

  /** Description for the review changes button in release tool */
  'review.description': '변경 사항을 검토하려면 이 릴리스에 문서를 추가하세요',
  /** Text for when a document is edited */
  'review.edited': '<RelativeTime/>에 편집됨',

  /** Schedule release button tooltip when there are no documents to schedule */
  'schedule-action.validation.no-documents': '예약할 문서가 없습니다',

  /** Schedule release button tooltip when the release is already scheduled */
  'schedule-button-tooltip.already-scheduled': '이 릴리스는 이미 예약되어 있습니다',
  /** Schedule release button tooltip when there are validation errors */
  'schedule-button-tooltip.validation.error': '일부 문서에 유효성 검사 오류가 있습니다',
  /** Schedule release button tooltip when validation is loading */
  'schedule-button-tooltip.validation.loading': '문서 유효성 검사 중...',
  /** Schedule release button tooltip when user has no permissions to schedule */
  'schedule-button-tooltip.validation.no-permission': '예약할 권한이 없습니다',

  /** Title of unschedule release dialog */
  'schedule-button.tooltip': '릴리스 예약을 취소하시겠습니까?',

  /** Description for the confirm button for scheduling a release */
  'schedule-dialog.confirm-button': '예, 예약하기',
  /** Description for the dialog confirming the publish of a release with multiple documents */
  'schedule-dialog.confirm-description_other':
    '<strong>{{title}}</strong> 릴리스와 {{count}}개의 문서 버전이 예약됩니다.',
  /** Title for unschedule release dialog */
  'schedule-dialog.confirm-title': '릴리스 예약',
  /** Description for warning that the published schedule time is in the past */
  'schedule-dialog.publish-date-in-past-warning': '미래의 시간과 날짜로 예약하세요.',
  /** Label for date picker when scheduling a release */
  'schedule-dialog.select-publish-date-label': '예약 날짜',

  /** Confirm button text for the schedule unpublish dialog */
  'schedule-unpublish-dialog.confirm': '게시 취소 예약',
  /** Description for the schedule unpublish dialog */
  'schedule-unpublish-dialog.description': '이 문서의 게시 취소 시점을 선택하세요.',
  /** Header for the schedule unpublish dialog */
  'schedule-unpublish-dialog.header': '게시 취소를 위한 초안 예약',

  /** Placeholder for search of documents in a release */
  'search-documents-placeholder': '문서 검색',

  /** Text for when the release has no errors found */
  'summary.all-documents-errors-found': '모든 문서가 검증되었으며, 문제가 발견되었습니다',
  /** Text for when the release has validated all documents */
  'summary.all-documents-validated': '모든 문서가 검증되었으며, 문제가 없습니다',
  /** Text for when the release was created */
  'summary.created': '<RelativeTime/>에 생성됨',
  /** Text for when the release is composed of multiple documents */
  'summary.document-count_other': '{{count}}개의 문서',
  /** Text for when the release has some errors found */
  'summary.errors-found': '릴리스를 게시하거나 예약하려면 문서에서 발견된 문제를 해결하세요',
  /** Text for when the release has no documents */
  'summary.no-documents': '문서 없음',
  /** Description for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.description':
    '이 예약된 초안에는 문서가 포함되어 있지 않습니다. 문서가 삭제되었을 수 있습니다.',
  /** Title for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.title': '이 릴리스에 문서가 없습니다',
  /** Text for when the release has not published */
  'summary.not-published': '게시되지 않음',
  /** Text for when the release was published */
  'summary.published': '<RelativeTime/>에 게시됨',
  /** Text for when the release has validated documents */
  'summary.validated-documents': '{{totalCount}}개 문서 중 {{validatedCount}}개 검증됨',
  /** Text for validation loading indicator */
  'summary.validating-documents': '문서 검증 중: {{totalCount}}개 중 {{validatedCount}}개',

  /** add action type that will be shown in the table*/
  'table-body.action.add': '추가',
  /** Change action type that will be shown in the table*/
  'table-body.action.change': '변경',
  /** Change action type that will be shown in the table*/
  'table-body.action.unpublish': '게시 취소',

  /** Header for the document table in the release tool - action */
  'table-header.action': '작업',
  /** Header for the document table in the release tool - Archived */
  'table-header.archivedAt': '보관됨',
  /** Header for the document table in the release tool - contributors */
  'table-header.contributors': '기여자',
  /** Header for the document table in the release tool - created by */
  'table-header.created-by': '작성자',
  /** Header for the document table in the release tool - document preview */
  'table-header.document': '문서',
  /** Header for the document table in the release tool - title */
  'table-header.documents': '문서',
  /** Header for the document table in the release tool - edited */
  'table-header.edited': '편집됨',
  /** Header for the paused scheduled drafts table - intended for */
  'table-header.intended-for': '대상',
  /** Header for the document table in the release tool - Published */
  'table-header.published-at': '게시됨',
  /** Header for the document table in the release tool - Published */
  'table-header.publishedAt': '게시됨',
  /** Header for the scheduled drafts document table in the release tool - published at */
  'table-header.scheduled-draft.published-at': '게시 시간',
  /** Header for the scheduled drafts document table in the release tool - scheduled for */
  'table-header.scheduled-for': '예약 시간',
  /** Header for the document table in the release tool - time */
  'table-header.time': '시간',
  /** Header for the  document table in the release tool - release title */
  'table-header.title': 'Release',
  /** Header for the document table in the release tool - type */
  'table-header.type': '유형',
  /** Header for the document table in the release tool - when */
  'table-header.when': '시기',

  /** Text for the release time label for scheduled releases  which has not been scheduled yet*/
  'time.estimated': '예상',
  /** Text for the release time label for scheduled releases  which has been scheduled*/
  'time.scheduled': '예약됨',

  /** Text for toast when release failed to archive */
  'toast.archive.error': "'<strong>{{title}}</strong>' 보관 실패: {{error}}",
  /** Toast error message when bulk scheduling of active drafts fails */
  'toast.confirm-active-scheduled-drafts.error': '초안 예약 실패: {{error}}',
  /** Toast message after copying release ID */
  'toast.copy-release-id.success': 'Release ID가 클립보드에 복사되었습니다',
  /** Toast message after copying release link */
  'toast.copy-release-link.success': 'Release 링크가 클립보드에 복사되었습니다',
  /** Toast message after copying release title */
  'toast.copy-release-title.success': 'Release 제목이 클립보드에 복사되었습니다',
  /** Description for toast when creating new version of document in release failed */
  'toast.create-version.error': 'Release에 문서 추가 실패: {{error}}',
  /** Description for toast when release deletion failed */
  'toast.delete.error': "'<strong>{{title}}</strong>' 삭제 실패: {{error}}",
  /** Description for toast when release is successfully deleted */
  'toast.delete.success': "'<strong>{{title}}</strong>' release가 성공적으로 삭제되었습니다",
  /** Description for toast when release duplication failed */
  'toast.duplicate.error': "'<strong>{{title}}</strong>' 복제 실패: {{error}}",
  /** Description for toast when release is successfully duplicated */
  'toast.duplicate.success': "'<strong>{{title}}</strong>' release가 복제되었습니다. <Link/>",
  /** Link text for toast link to the duplicated release */
  'toast.duplicate.success-link': '복제된 release 보기',
  /** Text for toast when release has been reverted immediately */
  'toast.immediate-revert.success': "'{{title}}' 릴리스가 성공적으로 되돌려졌습니다",
  /** Text for toast when release failed to publish */
  'toast.publish.error': "'<strong>{{title}}</strong>' 게시 실패: {{error}}",
  /** Text for toast when release has reverted release successfully staged */
  'toast.revert-stage.success':
    "'{{title}}'에 대한 릴리스 되돌리기가 성공적으로 생성되었습니다. <Link/>",
  /** Link text for toast link to the generated revert release */
  'toast.revert-stage.success-link': '되돌리기 릴리스 보기',
  /** Text for toast when release failed to revert */
  'toast.revert.error': '릴리스 되돌리기 실패: {{error}}',
  /** Text for toast when release failed to schedule */
  'toast.schedule.error': "'<strong>{{title}}</strong>' 예약 실패: {{error}}",
  /** Text for toast when release has been scheduled */
  'toast.schedule.success': "'<strong>{{title}}</strong>' 릴리스가 예약되었습니다.",
  /** Text for toast when release failed to unarchive */
  'toast.unarchive.error': "'<strong>{{title}}</strong>' 보관 해제 실패: {{error}}",
  /** Text for toast when release failed to unschedule */
  'toast.unschedule.error': "'<strong>{{title}}</strong>' 예약 취소 실패: {{error}}",

  /** Text for tooltip when a release has been scheduled */
  'type-picker.tooltip.scheduled':
    '릴리스가 예약되어 있습니다. 유형을 변경하려면 예약을 취소하세요',

  /** Text action in unpublish dialog to cancel */
  'unpublish-dialog.action.cancel': '취소',
  /** Text action in unpublish dialog to unpublish */
  'unpublish-dialog.action.unpublish': '예, 릴리스 시 게시 취소',
  /** Description for unpublish dialog, explaining that all changes made to this document will be lost */
  'unpublish-dialog.description.lost-changes': '이 문서 버전에 적용된 모든 변경 사항이 손실됩니다.',
  /** Description for the unpublish dialog, explaining that it will create a draft if no draft exists at time of release */
  'unpublish-dialog.description.to-draft':
    '이 작업은 <Label>{{title}}</Label> 릴리스의 일부로 문서 게시를 취소하며, 릴리스 시점에 초안이 없는 경우 초안을 생성합니다.',
  /** Title for the dialog confirming the unpublish of a release */
  'unpublish-dialog.header': '릴리스 시 이 문서의 게시를 취소하시겠습니까?',

  /** Text for when a document is unpublished */
  'unpublish.already-unpublished': '이 문서는 이미 게시 취소된 상태입니다.',
  /** Tooltip label for when a document is unpublished */
  'unpublish.no-published-version': '이 문서의 게시된 버전이 없습니다.',

  /** Description shown in unschedule relaease dialog */
  'unschedule-dialog.confirm-description': '릴리스가 예약된 날짜에 더 이상 게시되지 않습니다',
  /** Title for unschedule release dialog */
  'unschedule-dialog.confirm-title': '릴리스 예약을 취소하시겠습니까?',
})
